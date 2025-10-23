import AWS = require("aws-sdk2-types");
import e = require("elasticsearch");

declare module "elasticsearch" {
    interface ConfigOptions {
        awsConfig?: AWS.Config | undefined;
    }
}

declare const HttpAmazonESConnector: any;
export = HttpAmazonESConnector;
