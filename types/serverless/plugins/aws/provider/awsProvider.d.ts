import Serverless = require("../../../index");

declare class Aws {
    constructor(serverless: Serverless, options: Serverless.Options)

    getProviderName(): string;
    getRegion(): string;
    getServerlessDeploymentBucketName(): string;
    getStage(): string;
}

export = Aws;
