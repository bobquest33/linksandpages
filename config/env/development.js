'use strict';

module.exports = {
    //db: "mongodb://localhost/mean-dev",
	db: "mongodb://lnpadv:lnpadv13579#@ds027668.mongolab.com:27668/lnpa",
	//db: "mongodb://lnpadv:lnpadv1234#@troup.mongohq.com:10079/lnpadv",
    app: {
        name: "LnPa Notes - Development"
    },
    facebook: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    twitter: {
        clientID: "CONSUMER_KEY",
        clientSecret: "CONSUMER_SECRET",
        callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/github/callback"
    },
    google: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/google/callback"
    },
    linkedin: {
        clientID: "API_KEY",
        clientSecret: "SECRET_KEY",
        callbackURL: "http://localhost:3000/auth/linkedin/callback"
    }
}