import feathers, { Application } from '@feathersjs/feathers';
import feathersAuthenticationOAuth2, { Verifier, FeathersAuthenticationOAuth2Options } from '@feathersjs/authentication-oauth2';
import { RequestHandler, Response, NextFunction } from 'express';
import { Request } from 'express-serve-static-core';
import { Strategy } from 'passport';
import { Profile as GithubProfile } from 'passport-github';
import { Profile as FacebookProfile } from 'passport-facebook';

const app: Application = feathers().configure(feathersAuthenticationOAuth2());

class CustomVerifier extends Verifier {
    constructor(app: Application, options: any = {}) {
        super(app, options);
    }
}

const handler: RequestHandler = (req: Request, res: Response, next: NextFunction) => { };

class someStrategy extends Strategy {
    something = "foo";
}
/**
 * Strongly Typed Verifier
 */

interface User {
    name?: string;
    email?: string;
    facebookId?: string;
    orSomeOtherProviderId?: string;
}

interface VerifierOptions extends FeathersAuthenticationOAuth2Options {
    foo?: boolean;
}

type IProfileType = GithubProfile | FacebookProfile;

export default class TestVerifier extends Verifier<User, VerifierOptions, IProfileType> { }

const testVerifier = new TestVerifier(app, {
    name: "test",
    foo: false,
    successRedirect: "foo",
    failureRedirect: "bar",
    service: 'Users',
    Strategy: someStrategy,
    passReqToCallback: false,
    session: false
});

testVerifier._createEntity({
    profile: {
        id: "",
        displayName: "",
        birthday: "",
        _raw: "",
        _json: "",
        provider: ""
    },
    accessToken: "",
    refreshToken: ""
});

/**
 * Options
 */

const coreOptions: FeathersAuthenticationOAuth2Options = {
    name: "foo",
    Strategy: someStrategy,
    successRedirect: "foo",
    failureRedirect: "foo",
    service: "foo",
    passReqToCallback: true,
    session: true
};

const options: FeathersAuthenticationOAuth2Options<typeof TestVerifier> = {
    ...coreOptions,
    idField: "foo",
    path: "foo",
    callbackPath: "foo",
    callbackURL: "foo",
    entity: "foo",
    service: "foo",
    handler,
    errorHandler: handler,
    formatter: handler,
    Verifier: TestVerifier
};
