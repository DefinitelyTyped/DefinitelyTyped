// Type definitions for http-aws-es 1.1
// Project: https://github.com/TheDeveloper/http-aws-es#readme
// Definitions by: Marco Gonzalez <https://github.com/marcogrcr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import * as e from "elasticsearch";
import { Credentials } from "aws-sdk/lib/core";

declare module "elasticsearch" {
    interface AmazonESOptions {
        accessKey?: string;
        credentials?: Credentials;
        region: string;
        secretKey?: string;
    }

    interface ConfigOptions {
        amazonES?: AmazonESOptions;
    }
}

declare const HttpAmazonESConnector: any;
export = HttpAmazonESConnector;
