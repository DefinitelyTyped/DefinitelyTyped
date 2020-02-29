import Serverless = require("../../../index");

declare class Aws {
    constructor(serverless: Serverless, options: Serverless.Options)

    naming: { [key: string]: () => string };
    getProviderName(): string;
    getRegion(): string;
    getServerlessDeploymentBucketName(): string;
    getStage(): string;
    request(
        service: string,
        method: string,
        params?: {},
        options?: { useCache?: boolean; region?: string },
    ): Promise<any>;
}

export = Aws;
