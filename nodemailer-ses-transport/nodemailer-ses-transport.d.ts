// Type definitions for nodemailer-ses-transport 1.4.0
// Project: https://github.com/andris9/nodemailer-ses-transport
// Definitions by: Seth Westphal <https://github.com/westy92/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../aws-sdk/aws-sdk.d.ts" />
/// <reference path="../nodemailer/nodemailer.d.ts" />

declare module "nodemailer-ses-transport" {

	import * as AWS from 'aws-sdk';

	namespace sesTransport {
		export interface SesOptions {
			ses?: AWS.SES;
			accessKeyId?: string;
			secretAccessKey?: string;
			sessionToken?: string;
			region?: string;
			httpOptions?: AWS.HttpOptions;
			rateLimit?: number;
			maxConnections?: number;
		}
	}

	function sesTransport(options: sesTransport.SesOptions): nodemailer.Transport;

	export = sesTransport;
}
