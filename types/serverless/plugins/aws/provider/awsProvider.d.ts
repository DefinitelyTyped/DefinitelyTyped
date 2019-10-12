import Serverless = require("../../../index");

declare class Aws {
    constructor(serverless: Serverless, options: Serverless.Options)

    naming: { [key: string]: () => string };
    getProviderName(): string;
    getRegion(): string;
    getServerlessDeploymentBucketName(): string;
    getStage(): string;
}

export = Aws;
