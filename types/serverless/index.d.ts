// Type definitions for serverless 3.12
// Project: https://github.com/serverless/serverless#readme
// Definitions by: Hassan Khan <https://github.com/hassankhan>
//                 Jonathan M. Wilbur <https://github.com/JonathanWilbur>
//                 Alex Pavlenko <https://github.com/a-pavlenko>
//                 Frédéric Barthelet <https://github.com/fredericbarthelet>
//                 Bryan Hunter <https://github.com/bryan-hunter>
//                 Thomas Aribart <https://github.com/thomasaribart>
//                 Gareth Jones <https://github.com/G-Rath>
//                 Abdullah Ali <https://github.com/AbdullahAli>
//                 François Farge <https://github.com/fargito>
//                 Bruno Bodian <https://github.com/bacarybruno>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Service = require('./classes/Service');
import PluginManager = require('./classes/PluginManager');
import Utils = require('./classes/Utils');
import YamlParser = require('./classes/YamlParser');
import AwsProvider = require('./plugins/aws/provider/awsProvider');

declare namespace Serverless {
    interface Options {
        function?: string | undefined;
        watch?: boolean | undefined;
        verbose?: boolean | undefined;
        extraServicePath?: string | undefined;
        stage: string | null;
        region: string | null;
        noDeploy?: boolean | undefined;
    }

    interface Config {
        servicePath: string;
    }

    interface FunctionDefinition {
        name?: string | undefined;
        package?: Package | undefined;
        reservedConcurrency?: number | undefined;
        runtime?: string | undefined;
        timeout?: number | undefined;
        memorySize?: number | undefined;
        environment?: { [name: string]: string } | undefined;
        events: AwsProvider.Event[];
        tags?: { [key: string]: string } | undefined;
    }

    interface LogOptions {
        color?: string | undefined;
        bold?: boolean | undefined;
        underline?: boolean | undefined;
        entity?: string | undefined;
    }

    interface FunctionDefinitionHandler extends FunctionDefinition {
        handler: string;
    }

    interface FunctionDefinitionImage extends FunctionDefinition {
        image: string;
    }

    interface Package {
        /** @deprecated use `patterns` instead */
        include?: string[] | undefined;
        /** @deprecated use `patterns` instead */
        exclude?: string[] | undefined;
        patterns?: string[] | undefined;
        artifact?: string | undefined;
        individually?: boolean | undefined;
    }

    type Event = AwsProvider.Event | object;
}

declare class Serverless {
    constructor(config?: {});

    init(): Promise<any>;
    run(): Promise<any>;

    setProvider(name: string, provider: AwsProvider): null;
    getProvider(name: string): AwsProvider;

    getVersion(): string;

    cli: {
        /**
         * @deprecated starting from Serverless V3, this method is deprecated, see https://www.serverless.com/framework/docs/guides/plugins/cli-output
         */
        log(message: string, entity?: string, options?: Serverless.LogOptions): null;
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

    configSchemaHandler: {
        defineCustomProperties(schema: unknown): void;
        defineFunctionEvent(provider: string, event: string, schema: Record<string, unknown>): void;
        defineFunctionEventProperties(provider: string, existingEvent: string, schema: unknown): void;
        defineFunctionProperties(provider: string, schema: unknown): void;
        defineProvider(provider: string, options?: Record<string, unknown>): void;
        defineTopLevelProperty(provider: string, schema: Record<string, unknown>): void;
    };
}

export = Serverless;
