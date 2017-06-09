
import express = require('express');
import passport = require('passport-strategy');


export class Strategy extends passport.Strategy {
    constructor(options: any, verify?: Function) {
        if (typeof options == 'function') {
            verify = options;
            options = {};
        }
        if (!verify) {
            throw new TypeError('DummyStrategy requires a verify callback');
        }

        super();

        this.name = 'dummy';
        this._verify = verify;
        this._passReqToCallback = options.passReqToCallback;
    }

    name: string;

    _verify: Function;
    _passReqToCallback: boolean;

    authenticate(req: express.Request, options?: any): void {
        options = options || {};

        // Test fail method.
        this.fail({ message: options.missingTokenMessage || 'Missing token' }, 400);

        var self = this;

        function verified(err: Error, user: any, info: any) {
            if (err) {
                return self.error(err);
            }
            if (!user) {
                return self.fail(info);
            }
            self.success(user, info);
        }

        verified(null, {}, {});
    }
}
