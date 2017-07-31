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

interface Serverless {
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

    getProvider(name: string): Serverless.Provider.Aws;
}
