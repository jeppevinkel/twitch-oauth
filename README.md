# twitch-oauth
This is a small tool to help generate access and refresh tokens for your local twitch bot projects.

## Usage
* Go to https://dev.twitch.tv and create an app. You can use the same app to authenticate multiple bots.

* Set the 'OAuth Redirect URL' to `http://localhost:3030/auth/twitch/callback`

* Copy the 'Client ID' and 'Client Secret' to the 'config.json'

* Enter the desired scopes in 'config.json'

* Run the tool and visit http://localhost:3030

To install node dependencies use the following command
`npm install`

To run the tool use the following command
`npm start`

This assumes you already have node installed.
