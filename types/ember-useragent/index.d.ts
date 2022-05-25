// Type definitions for ember-useragent 0.12
// Project: https://github.com/willviles/ember-useragent#readme
// Definitions by: Cameron Dubas <https://github.com/camerondubas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.4

import UserAgentService from './services/user-agent';

export * from './services/user-agent';
export * from './helpers/user-agent';

declare module '@ember/service' {
    interface ServiceRegistry {
        userAgent: UserAgentService;
    }
}
