// Type definitions for serverless 1.78
// Project: https://github.com/serverless/serverless#readme
// Definitions by: Hassan Khan <https://github.com/hassankhan>
//                 Jonathan M. Wilbur <https://github.com/JonathanWilbur>
//                 Alex Pavlenko <https://github.com/a-pavlenko>
//                 Frédéric Barthelet <https://github.com/fredericbarthelet>
//                 Bryan Hunter <https://github.com/bryan-hunter>
//                 Thomas Aribart <https://github.com/thomasaribart>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Service = require('./classes/Service');
import Plugin = require('./classes/Plugin');
import PluginManager = require('./classes/PluginManager');
import Utils = require('./classes/Utils');
import YamlParser = require('./classes/YamlParser');
import AwsProvider = require('./plugins/aws/provider/awsProvider');
import ApiGatewayValidate = require('./plugins/aws/package/compile/events/apiGateway/lib/validate');

declare namespace Serverless {
    interface Options {
        function?: string;
        watch?: boolean;
        extraServicePath?: string;
        stage: string | null;
        region: string | null;
        noDeploy?: boolean;
    }

    interface Config {
        servicePath: string;
    }

    interface FunctionDefinition {
        name: string;
        package: Package;
        runtime?: string;
        handler: string;
        timeout?: number;
        memorySize?: number;
        environment?: { [name: string]: string };
        events: Event[];
        tags?: { [key: string]: string };
    }

    // Other events than ApiGatewayEvent are available
    type Event = ApiGatewayValidate.ApiGatewayEvent | object;

    interface Package {
        include: string[];
        exclude: string[];
        artifact?: string;
        individually?: boolean;
    }
}

declare class Serverless {
    constructor(config?: {});

    init(): Promise<any>;
    run(): Promise<any>;

    setProvider(name: string, provider: AwsProvider): null;
    getProvider(name: string): AwsProvider;

    getVersion(): string;

    cli: {
        log(message: string): null;
    };

    providers: {};
    utils: Utils;
    variables: {
        populateService(): Promise<any>;
    };
    yamlParser: YamlParser;
    pluginManager: PluginManager;

    config: Serverless.Config;
    serverlessDirPath: string;

    service: Service;
    version: string;

    resources: AwsProvider.Resources;
}

export = Serverless;
