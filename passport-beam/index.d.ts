// Type definitions for passport-beam 1.0.4
// Project: https://github.com/alfw/passport-beam
// Definitions by: AtlasDev <https://github.com/AtlasDev>		
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="passport"/>
///<reference types="express"/>

import * as passport from 'passport';
import * as express from  'express';

declare class Strategy<T> implements passport.Strategy {
	constructor(options: Strategy.IStrategyOption, verify: (accessToken: string, refreshToken: string, profile: Strategy.Profile, done: (error: any, user?: any) => void) => void);
	name: string;
	authenticate: (req: express.Request, options?: Object) => void;
}

declare namespace Strategy {
	interface IStrategyOption {
		clientID: string;
		clientSecret: string;
		callbackURL: string;
	}

	interface Profile extends passport.Profile {
		profileUrl: string;
		id: number
		username: string;
		provider: string;
		email: string;
		_raw: string;
		_json: any;
	}
}

export = Strategy;