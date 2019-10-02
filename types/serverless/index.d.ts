// Type definitions for serverless 1.18
// Project: https://github.com/serverless/serverless#readme
// Definitions by: Hassan Khan <https://github.com/hassankhan>
//                 Jonathan M. Wilbur <https://github.com/JonathanWilbur>
//                 Alex Pavlenko <https://github.com/a-pavlenko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Service = require('./classes/Service');
import Plugin = require('./classes/Plugin');
import PluginManager = require('./classes/PluginManager');
import Utils = require('./classes/Utils');
import YamlParser = require('./classes/YamlParser');
import AwsProvider = require('./plugins/aws/provider/awsProvider');

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
    }

    interface Event {
        eventName: string;
    }

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
    variables: {};
    yamlParser: YamlParser;
    pluginManager: PluginManager;

    config: Serverless.Config;
    serverlessDirPath: string;

    service: Service;
    version: string;
}

export = Serverless;
