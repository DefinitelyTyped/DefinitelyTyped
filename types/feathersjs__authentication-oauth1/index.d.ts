// Type definitions for @feathersjs/authentication-oauth1
// Project: http://feathersjs.com/
// Definitions by: Jan Lohage <https://github.com/j2L4e/>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript

declare module '@feathersjs/authentication-oauth1' {
  import {
    Application,
    Paginated
  } from '@feathersjs/feathers';
  import { Request } from 'express';

  function feathersAuthenticationOAuth1(options?: FeathersAuthenticationOAuth1Options): () => void

  export default feathersAuthenticationOAuth1;

  export interface FeathersAuthenticationOAuth1Options {
    idField: string,            // The field to look up the entity by when logging in with the provider. Defaults to '<provider>Id' (ie. 'twitterId').
    path: string,               // The route to register the middleware
    callbackPath: string,       // The route to register the callback handler
    callbackURL: string;        // hostame[:port]/auth/<provider>/callback', // The callback url. Will automatically take into account your host and port and whether you are in production based on your app environment to construct the url. (ie. in development http://localhost:3030/auth/twitter/callback)
    entity: string,             // the entity that you are looking up
    service: string,            // the service to look up the entity
    passReqToCallback: boolean, // whether the request object should be passed to `verify`
    session: boolean            // whether to use sessions,
    handler: Function,          // Express middleware for handling the oauth callback. Defaults to the built in middleware. todo: needs a proper type
    formatter: Function,        // The response formatter. Defaults the the built in feathers-rest formatter, which returns JSON. todo: needs a proper type
    Verifier: OAuth1Verifier    // A Verifier class. Defaults to the built-in one but can be a custom one. See below for details.
  }

  export class OAuth1Verifier {
    constructor(app: Application<any>, options: any)

    _updateEntity<T>(entity: T, data: { profile: any, accessToken: string, refreshToken: string }): Promise<any>; // updates an existing entity
    _createEntity(data: { profile: any, accessToken: string, refreshToken: string }): Promise<any>; // creates an entity if they didn't exist already
    _normalizeResult<T>(results: T[] | Paginated<T>): Promise<T>  // normalizes result from service to account for pagination
    verify(req: Request, accessToken: string, refreshToken: string, profile: any, done: (err: Error | null, user: object, info: object) => void): void // queries the service and calls the other internal functions.
  }
}
