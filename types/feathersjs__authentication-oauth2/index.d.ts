// Type definitions for @feathersjs/authentication-oauth2 1.0
// Project: https://feathersjs.com
// Definitions by:  Jan Lohage <https://github.com/j2L4e>
//                  Nick Bolles <https://github.com/NickBolles>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as self from '@feathersjs/authentication-oauth2';
import { Application, Paginated, Service } from '@feathersjs/feathers';
import { Request, RequestHandler } from 'express';
import { Profile, Strategy } from 'passport';

declare const feathersAuthenticationOAuth2: ((options?: FeathersAuthenticationOAuth2Options) => () => void) & typeof self;
export default feathersAuthenticationOAuth2;

// todo: make a base options interface in feathers/authentication that we can extend here
export interface FeathersAuthenticationOAuth2Options<VerifierType = typeof Verifier, ServiceType = any> {
    /**
     * The name of the OAuth2 provider
     */
    name: string;
    /**
     * The OAuth strategy to use
     */
    Strategy: string | typeof Strategy;
    /**
     * The route to register the callback handler, defaults to `${path}/callback`
     */
    callbackPath?: string;
    /**
     * The callback url. Defaults to @feathersjs/common's makeUrl + callbackPath
     */
    callbackURL?: string;
    successRedirect: string;
    failureRedirect: string;
    /**
     * Express middleware for handling the oauth callback. Defaults to the built in middleware. todo: needs a proper type
     */
    handler?: RequestHandler;
    /**
     * Express middleware for handling the oauth error callback. Defaults to the built in middleware. todo: needs a proper type
     */
    errorHandler?: RequestHandler;
    /**
     * The response formatter. Defaults the the built in feathers-rest formatter, which returns JSON. todo: needs a proper type
     */
    formatter?: RequestHandler;
    /**
     * A Verifier class. Defaults to the built-in one but can be a custom one. See below for details.
     */
    Verifier?: VerifierType;
    // todo: some of these options are actually @feathersjs/authentication options,
    /**
     * The field to look up the entity by when logging in with the provider. Defaults to '<provider>Id' (ie. 'facebookId').
     * This can also be set on app.get('auth') or app.get('authentication')
     */
    idField?: string;
    /**
     * The route to register the middleware on. Defaults to `/auth/${name}`
     * This can also be set on app.get('auth') or app.get('authentication')
     */
    path?: string;
    /**
     * the entity that you are looking up.
     * This can also be set on app.get('auth') or app.get('authentication')
     */
    entity?: string;
    /**
     * the service to look up the entity
     * This can also be set on app.get('auth') or app.get('authentication')
     */
    service: string | Service<ServiceType>;
    /**
     * whether the request object should be passed to `verify`
     * This can also be set on app.get('auth') or app.get('authentication')
     */
    passReqToCallback: boolean;
    /**
     * whether to use sessions,
     * This can also be set on app.get('auth') or app.get('authentication')
     */
    session: boolean;
    /**
     * Oauth flag to tell @feathersjs/authentication that this is an oauth authentication
     * Set by feathersOAuth2 to pass into @feathersjs/authentication
     */
    __oath?: boolean;
}

interface FeathersAuthenticationOAuth2Data<T extends Profile = Profile> {
    profile: T;
    accessToken: string;
    refreshToken: string;
}

export class Verifier<
    /**
     * The data type for the service object, used in _normalizeResults
     */
    DataType = any,
    /**
     * The interface for the options that are passed into the verifier
     */
    OptionType extends FeathersAuthenticationOAuth2Options = FeathersAuthenticationOAuth2Options,
    /**
     * The profile type for the response, 99% f use cases will be fine with passports default Profile, but you can get more specific like this
     * @example
     * import {Profile as GithubProfile} from 'passport-github';
     * import {Profile as FacebookProfile} from 'passport-facebook';
     * type IProfileType = GithubProfile | FacebookProfile;
     * class MyVerifier extends Verifier<any, any, IProfileType {}
     */
    ProfileType extends Profile = Profile
    > {
    constructor(app: Application, options: OptionType)
    options: OptionType;
    service: Service<DataType>;
    _updateEntity(entity: any, data: FeathersAuthenticationOAuth2Data<ProfileType>): Promise<any>; // updates an existing entity
    _createEntity(data: FeathersAuthenticationOAuth2Data<ProfileType>): Promise<any>; // creates an entity if they didn't exist already
    _normalizeResult<T = DataType>(results: T[] | Paginated<T>): Promise<T>;  // normalizes result from service to account for pagination
    _setPayloadAndDone(entity: any, done: (err: Error | null, user: object, info: object) => void): Promise<any>;
    verify(req: Request, accessToken: string, refreshToken: string, profile: ProfileType, done: (err: Error | null, user: object, info: object) => void): void;
}

export const defaultHandler: RequestHandler;
export const defaultErrorHandler: RequestHandler;
