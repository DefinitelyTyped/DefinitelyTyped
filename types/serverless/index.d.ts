// Type definitions for serverless 1.18
// Project: https://github.com/serverless/serverless#readme
// Definitions by: Hassan Khan <https://github.com/hassankhan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Service = require("./classes/ServiceClass");
import YamlParser = require("./classes/YamlParserClass");
import AwsProvider = require("./plugins/aws/provider/awsProvider");

declare namespace Serverless {
    interface Options {
        stage: string | null;
        region: string | null;
        noDeploy?: boolean;
    }

    interface Config {
        servicePath: string;
    }

    interface FunctionDefinition {
        name: string;
    }

    interface Event {
        eventName: string;
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
        log(message: string): null
    };

    config: Serverless.Config;
    yamlParser: YamlParser;

    service: {
        getServiceName(): string
        getAllFunctions(): string[]

        custom: {}
    };
}

export = Serverless;
