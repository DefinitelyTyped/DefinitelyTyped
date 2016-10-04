// Type definitions for passport-beam 1.0.4
// Project: https://github.com/alfw/passport-beam
// Definitions by: AtlasDev <https://github.com/AtlasDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../passport/passport.d.ts"/>

declare module "passport-beam" {

	import * as passport from 'passport';
	import * as express from 'express';

    interface Profile extends passport.Profile {
        gender: string;
        profileUrl: string;
		id: number
        username: string;
		provider: string;
		email: string;

        _raw: string;
        _json: any;
    }

	interface IStrategyOption {
		clientID: string;
		clientSecret: string;
		callbackURL: string;
	}

	class Strategy implements passport.Strategy {
		constructor(options: IStrategyOption, verify: (accessToken: string, refreshToken: string, profile: any, done: (error: any, user?: any) => void) => void);
		name: string;
		authenticate: (req: express.Request, options?: Object) => void;
	}

}