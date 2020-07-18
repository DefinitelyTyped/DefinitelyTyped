/// <reference types="node" />
import ghauth = require("ghauth");
import { AuthOptions, TokenData } from "ghauth";

// Full
const authOptions1: AuthOptions = {
    configName: "awesome",
    noSave: true,
    authUrl: "https://api.github.com/authorizations",
    promptName: "GitHub",
    scopes: ["user"],
    note: "This token is for my awesome app",
    userAgent: "My Awesome App",
};

ghauth(authOptions1, (err: Error, authData: TokenData) => {
    authData.user;
    authData.token;
});

// Required
const authOptions2: AuthOptions = {
    configName: "awesome",
};

ghauth(authOptions2, (err: Error, authData: TokenData) => {
    authData.user;
    authData.token;
});
