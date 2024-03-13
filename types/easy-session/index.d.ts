import express = require("express");
import expressSession = require("express-session");

declare module "express-session" {
    interface Session {
        login(callback: Function): void;
        login(extend: Object, callback: (err?: any) => void): void;
        login(role: string, callback: (err?: any) => void): void;
        login(role: string, extend: Object, callback: (err?: any) => void): void;
        logout(callback: (err?: any) => void): void;
        isLoggedIn(role?: string): boolean;
        isGuest(): boolean;
        isFresh(): boolean;
        setRole(role: string): Session;
        getRole(): string;
        hasRole(role: string): boolean;
    }
}

export interface SessionOptions {
    ipCheck?: boolean | undefined;
    uaCheck?: boolean | undefined;
    freshTimeout?: number | undefined;
    maxFreshTimeout?: number | undefined;
}

export function main(session: typeof expressSession, options?: SessionOptions): express.RequestHandler;
export function isLoggedIn(errorCallback?: (err?: any) => void): express.RequestHandler;
export function isFresh(errorCallback?: (err?: any) => void): express.RequestHandler;
export function checkRole(role: string, errorCallback?: (err?: any) => void): express.RequestHandler;
