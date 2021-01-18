const config = require('./config.json');

var express        = require("express");
var bodyParser     = require("body-parser");
var cookieParser   = require("cookie-parser");
var cookieSession  = require("cookie-session");
var passport       = require("passport");
var twitchStrategy = require("passport-twitch-strategy").Strategy;

var app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cookieSession({ secret: "ghf54dfsg7643fhdgsjh3423" }));
app.use(passport.initialize());

passport.use('twitch', new twitchStrategy({
        clientID: config.client.id,
        clientSecret: config.client.secret,
        callbackURL: "http://localhost:3000/auth/twitch/callback",
        scope: config.scope
    },
    function(accessToken, refreshToken, profile, done) {
        // Suppose we are using mongo..
        return done(undefined, {accessToken, refreshToken});
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

app.get("/", passport.authenticate("twitch", {forceVerify: true}));
app.get("/auth/twitch/callback", passport.authenticate("twitch", { failureRedirect: "/" }), function(req, res) {
    // Successful authentication, redirect home.
    res.json({accessToken: req.user.accessToken, refreshToken: req.user.refreshToken});
});

app.listen(3000);