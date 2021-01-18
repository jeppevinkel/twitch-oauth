# twitch-oauth
This is a small tool to help generate access and refresh tokens for your local twitch bot projects.

## Usage
* Go to https://dev.twitch.tv and create an app. You can use the same app to authenticate multiple bots.

* Set the 'OAuth Redirect URL' to `http://localhost:3000/auth/twitch/callback`

* Copy the 'Client ID' and 'Client Secret' to the 'config.json'

* Enter the desired scopes in 'config.json'

* Run the tool and visit http://localhost:3000