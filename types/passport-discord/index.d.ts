// Type definitions for passport-discord 0.1
// Project: https://github.com/nicholastay/passport-discord#readme
// Definitions by: Gonthier Renaud <https://github.com/kzay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as passport from 'passport';
import * as express from 'express';
import * as oauth2 from 'passport-oauth2';
import { OutgoingHttpHeaders } from 'http';

import discord = Strategy;

declare class Strategy extends oauth2.Strategy {
    constructor(options: discord.StrategyOptions, verify: (accessToken: string, refreshToken: string, profile: discord.Profile, done: oauth2.VerifyCallback) => void);
    // NOTE: A union of function types prevents contextual typing of arguments.
    // tslint:disable-next-line:unified-signatures
    constructor(options: discord.StrategyOptions, verify: (accessToken: string, refreshToken: string, params: any, profile: discord.Profile, done: oauth2.VerifyCallback) => void);
    constructor(options: discord.StrategyOptionsWithRequest, verify: (req: express.Request, accessToken: string, refreshToken: string, profile: discord.Profile, done: oauth2.VerifyCallback) => void);
    // NOTE: A union of function types prevents contextual typing of arguments.
    // tslint:disable-next-line:unified-signatures max-line-length
    constructor(options: discord.StrategyOptionsWithRequest, verify: (req: express.Request, accessToken: string, params: any, refreshToken: string, profile: discord.Profile, done: oauth2.VerifyCallback) => void);
    checkScope(scope: string, accessToken: string, cb: (err?: Error | null, value?: any) => void): void;
}

declare namespace Strategy {
    // NOTE: not true for `export import` statements
    // tslint:disable-next-line:strict-export-declare-modifiers
    export import Strategy = discord;

    interface _StrategyOptionsBase {
        authorizationURL?: string;
        tokenURL?: string;
        clientID: string;
        clientSecret: string;
        callbackURL?: string;
        customHeaders?: OutgoingHttpHeaders;
        /** @see https://discordapp.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes */
        scope?: string | string[];
        scopeSeparator?: string;
        sessionKey?: string;
        store?: oauth2.StateStore;
        state?: any;
    }

    interface StrategyOptions extends _StrategyOptionsBase {
        passReqToCallback?: false;
    }

    interface StrategyOptionsWithRequest extends _StrategyOptionsBase {
        passReqToCallback: true;
    }

    interface Profile extends passport.Profile {
        provider: "discord";
        username: string;
        locale: string;
        mfa_enabled: boolean;
        flags: number;
        avatar: string;
        discriminator: string;
        verified: boolean;
        fetchedAt: string;
        email?: string; // requires "email" scope
        connections?: ConnectionInfo[]; // requires "connection" scope
        guilds?: GuildInfo[]; // requires "guilds" scope
    }

    interface ConnectionInfo {
        verified: boolean;
        name: string;
        show_activity: boolean;
        type: string;
        id: string;
        visibility: number;
    }

    interface GuildInfo {
        owner: boolean;
        permissions: number;
        icon: string;
        id: string;
        name: string;
    }
}

export = Strategy;
