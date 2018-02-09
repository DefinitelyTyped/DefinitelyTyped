// Type definitions for hapi 17.0
// Project: https://github.com/hapijs/hapi
// Definitions by: Marc Bornträger <https://github.com/BorntraegerMarc>
//                 Rafael Souza Fijalkowski <https://github.com/rafaelsouzaf>
//                 Justin Simms <https://github.com/jhsimms>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/* + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 +                      WARNING: BACKWARDS INCOMPATIBLE                      +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + */

/// <reference types="node" />

/** PLUGIN */
export * from './definitions/plugin/plugin';
export * from './definitions/plugin/plugin-registered';

/** REQUEST */
export * from './definitions/request/request';
export * from './definitions/request/request-auth';
export * from './definitions/request/request-events';
export * from './definitions/request/request-info';
export * from './definitions/request/request-route';

/** RESPONSE */
export * from './definitions/response/response-events';
export * from './definitions/response/response-object';
export * from './definitions/response/response-settings';
export * from './definitions/response/response-toolkit';

/** ROUTE */
export * from './definitions/route/route-options';
export * from './definitions/route/route-options-access';
export * from './definitions/route/route-options-cache';
export * from './definitions/route/route-options-cors';
export * from './definitions/route/route-options-payload';
export * from './definitions/route/route-options-pre';
export * from './definitions/route/route-options-response';
export * from './definitions/route/route-options-secure';
export * from './definitions/route/route-options-validate';

/** SERVER */
export * from './definitions/server/server';
export * from './definitions/server/server-auth';
export * from './definitions/server/server-auth-scheme';
export * from './definitions/server/server-cache';
export * from './definitions/server/server-events';
export * from './definitions/server/server-ext';
export * from './definitions/server/server-info';
export * from './definitions/server/server-inject';
export * from './definitions/server/server-method';
export * from './definitions/server/server-options';
export * from './definitions/server/server-options-cache';
export * from './definitions/server/server-realm';
export * from './definitions/server/server-register';
export * from './definitions/server/server-route';
export * from './definitions/server/server-state';
export * from './definitions/server/server-state-options';

/** UTIL */
export * from './definitions/util/common';
export * from './definitions/util/json';
export * from './definitions/util/lifecycle';
export * from './definitions/util/util';
