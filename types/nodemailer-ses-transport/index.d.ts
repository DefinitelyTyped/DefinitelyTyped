// Type definitions for nodemailer-ses-transport 1.4
// Project: https://github.com/andris9/nodemailer-ses-transport
// Definitions by: Seth Westphal <https://github.com/westy92/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as AWS from "aws-sdk";
import { HTTPOptions } from "aws-sdk/lib/config";
import * as nodemailer from "nodemailer";

declare namespace sesTransport {
	interface SesOptions {
		ses?: AWS.SES;
		accessKeyId?: string;
		secretAccessKey?: string;
		sessionToken?: string;
		region?: string;
		httpOptions?: HTTPOptions;
		rateLimit?: number;
		maxConnections?: number;
	}
}

declare function sesTransport(options: sesTransport.SesOptions): nodemailer.Transport;

export = sesTransport;
