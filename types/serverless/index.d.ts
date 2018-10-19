// Type definitions for serverless 1.18
// Project: https://github.com/serverless/serverless#readme
// Definitions by: Hassan Khan <https://github.com/hassankhan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Service = require("./classes/service");
import YamlParser = require("./classes/yaml-parser");

declare namespace Serverless {
    interface Options {
        stage: string | null;
        region: string | null;
        noDeploy?: boolean;
    }

    namespace Provider {
        class Aws {
            constructor(serverless: Serverless, options: Options)

            getProviderName(): string;
            getRegion(): string;
            getServerlessDeploymentBucketName(): string;
            getStage(): string;
        }
    }

    namespace Service {
        interface Custom {
            [key: string]: any;
        }
    }

    interface Config {
        servicePath: string;
    }

    class YamlParser {
        constructor(serverless: Serverless)
        parse(yamlFilePath: string): Promise<any>;
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

    setProvider(name: string, provider: Serverless.Provider.Aws): null;
    getProvider(name: string): Serverless.Provider.Aws;

    getVersion(): string;

    cli: {
        log(message: string): null
    };

    config: Serverless.Config;
    yamlParser: Serverless.YamlParser;

    service: {
        getServiceName(): string
        getAllFunctions(): string[]

        custom: {}
    };
}

export = Serverless;
