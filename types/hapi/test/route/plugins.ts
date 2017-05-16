// from https://hapijs.com/api#route-configuration > plugins

import * as Hapi from 'hapi';

declare module 'hapi' {
    interface RoutePlugins {
        coolPlugin: {
            optionA: string;
            optionB?: boolean;
        }
    }
}

var pluginsConfig: Hapi.RouteAdditionalConfigurationOptions = {
    plugins: {
        coolPlugin: 'test',
    }
};
