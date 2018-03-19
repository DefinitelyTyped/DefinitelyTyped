// Type definitions for nodecredstash 2.0
// Project: https://github.com/DavidTanner/nodecredstash#readme
// Definitions by: Mike Cook <https://github.com/migstopheles>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>
import * as AWS from 'aws-sdk';

interface ICredstashConfig {
	table?: string;
	awsOpts?: AWS.KMS.ClientConfiguration;
	dynamoOpts?: AWS.DynamoDB.ClientConfiguration;
	kmsKey?: string;
	kmsOpts?: AWS.KMS.ClientConfiguration;
}

interface ICredstashContext {
	[key: string]: string;
}

interface IPutSecretOptions {
	name: string;
	secret: string;
	context: ICredstashContext;
	digest?: string;
	version?: number;
}

interface ICredstash {
	getHighestVersion: (options: { name: string }) => Promise<AWS.DynamoDB.AttributeMap>;
	incrementVersion: (options: { name: string }) => Promise<string>;
	putSecret: (options: IPutSecretOptions) => Promise<AWS.DynamoDB.DocumentClient.PutItemOutput>;
	decryptStash: (stash: { key: string; }, context?: ICredstashContext) => Promise<AWS.KMS.DecryptResponse>;
	getAllVersions: (options: { name: string, context?: ICredstashContext, limit?: number }) => Promise<Array<{ version: string; secret: string }>>;
	getSecret: (options: { name: string, context?: ICredstashContext, version?: number }) => Promise<string>;
	deleteSecrets: (options: { name: string }) => Promise<Array<AWS.DynamoDB.DocumentClient.DeleteItemOutput>>;
	deleteSecret: (options: { name: string, version: number }) => Promise<AWS.DynamoDB.DocumentClient.DeleteItemOutput>;
	listSecrets: () => Promise<string[]>;
	getAllSecrets: (options: { version?: number, context?: ICredstashContext, startsWith?: string }) => Promise<{ [key: string]: string }>;
	createDdbTable: () => Promise<void>;
}

declare function Credstash(config: ICredstashConfig): ICredstash;

export = Credstash;
