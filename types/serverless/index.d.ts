// Type definitions for serverless 1.18
// Project: https://github.com/serverless/serverless#readme
// Definitions by: Sebastian Müller <https://github.com/sbstjn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Serverless {
    interface Options {
        stage: string | null;
        region: string | null;
        noDeploy?: boolean;
    }

    namespace Provider {
        class Aws {
            constructor(serverless: Serverless, options: Serverless.Options)

            getProviderName: () => string;
            getRegion: () => string;
            getServerlessDeploymentBucketName: () => string;
            getStage: () => string;
        }
    }
}

declare class Serverless {
    constructor(config: {});
    init(): Promise<any>;
    run(): Promise<any>;

    setProvider(name: string, provider: Serverless.Provider.Aws): null;
    getProvider(name: string): Serverless.Provider.Aws;

    getVersion(): string;

    cli: {
        log(message: string): null
    };

    config: {
        servicePath: string
    };

    service: {
        getServiceName(): string
        getAllFunctions(): string[]

        custom: {}
    };
}

export = Serverless
