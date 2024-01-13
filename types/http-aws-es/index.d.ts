/// <reference types="node" />

import * as AWS from "aws-sdk2-types";
import * as e from "elasticsearch";

declare module "elasticsearch" {
    interface ConfigOptions {
        awsConfig?: AWS.Config | undefined;
    }
}

declare const HttpAmazonESConnector: any;
export = HttpAmazonESConnector;
