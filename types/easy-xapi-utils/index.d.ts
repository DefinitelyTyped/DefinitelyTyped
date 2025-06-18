import express = require("express");

export declare function isLoggedIn(role?: string): express.RequestHandler;
export declare function isLoggedOut(): express.RequestHandler;
export declare function hasRole(role: string): express.RequestHandler;
