// Type definitions for ltijs 4.0
// Project: https://cvmcosta.github.io/ltijs
// Definitions by: Paul Schwörer <https://github.com/paulschwoerer/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="express" />

import { IdToken } from './lib/IdToken';
import { PlatformContext } from './lib/Utils/Platform';

declare module 'express' {
    interface Response {
        locals: {
            token?: IdToken;
            context?: PlatformContext;
        };
    }
}

export * from './lib/Provider/Provider';
export * from './lib/Provider/Services/DeepLinking';
export * from './lib/Provider/Services/GradeService';
export * from './lib/Provider/Services/NamesAndRoles';
export * from './lib/Utils/Platform';
export * from './lib/Utils/Database';
export * from './lib/IdToken';
