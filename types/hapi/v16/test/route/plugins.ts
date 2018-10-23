// Added in addition to code from https://hapijs.com/api/16.1.1#route-options > plugins

import * as Hapi from '../../';

// In the plugin code
declare module '../../' {
    interface PluginSpecificConfiguration {
        coolPlugin: {
            optionA: string;
            optionB?: boolean;
        }
    }
}

// In the consumer code
const pluginsServerConfig: Hapi.ServerOptions = {
    plugins: {
        coolPlugin: {
            optionA: "test",
        }
    }
};

const pluginsConnectionConfig: Hapi.ConnectionConfigurationServerDefaults = {
    plugins: {
        coolPlugin: {
            optionA: "test",
        }
    }
};

const pluginsRouteConfig: Hapi.RouteAdditionalConfigurationOptions = {
    plugins: {
        coolPlugin: {
            optionA: "test",
        }
    }
};
