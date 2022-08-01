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
        authorizationURL?: string | undefined;
        tokenURL?: string | undefined;
        clientID: string;
        clientSecret: string;
        callbackURL?: string | undefined;
        customHeaders?: OutgoingHttpHeaders | undefined;
        /** @see https://discordapp.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes */
        scope?: string | string[] | undefined;
        scopeSeparator?: string | undefined;
        sessionKey?: string | undefined;
        store?: oauth2.StateStore | undefined;
        state?: any;
    }

    interface StrategyOptions extends _StrategyOptionsBase {
        passReqToCallback?: false | undefined;
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
        banner: string | null;
        accent_color: number | null;
        avatar: string | null;
        discriminator: string;
        verified: boolean;
        fetchedAt: string;
        email?: string | undefined; // requires "email" scope
        connections?: ConnectionInfo[] | undefined; // requires "connection" scope
        guilds?: GuildInfo[] | undefined; // requires "guilds" scope
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
        icon: string | null;
        id: string;
        name: string;
        features?: string[] | undefined;
    }
}

export = Strategy;
