// Type definitions for nodecredstash 2.0
// Project: https://github.com/DavidTanner/nodecredstash
// Definitions by: Mike Cook <https://github.com/migstopheles>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>
import * as AWS from 'aws-sdk';

interface CredstashConfig {
    table?: string | undefined;
    awsOpts?: AWS.KMS.ClientConfiguration | undefined;
    dynamoOpts?: AWS.DynamoDB.ClientConfiguration | undefined;
    kmsKey?: string | undefined;
    kmsOpts?: AWS.KMS.ClientConfiguration | undefined;
}

interface CredstashContext {
    [key: string]: string;
}

interface PutSecretOptions {
    name: string;
    secret: string;
    context: CredstashContext;
    digest?: string | undefined;
    version?: number | undefined;
}

interface Credstash {
    getHighestVersion: (options: { name: string }) => Promise<AWS.DynamoDB.AttributeMap>;
    incrementVersion: (options: { name: string }) => Promise<string>;
    putSecret: (options: PutSecretOptions) => Promise<AWS.DynamoDB.DocumentClient.PutItemOutput>;
    decryptStash: (stash: { key: string; }, context?: CredstashContext) => Promise<AWS.KMS.DecryptResponse>;
    getAllVersions: (options: { name: string, context?: CredstashContext | undefined, limit?: number | undefined }) => Promise<Array<{ version: string; secret: string }>>;
    getSecret: (options: { name: string, context?: CredstashContext | undefined, version?: number | undefined }) => Promise<string>;
    deleteSecrets: (options: { name: string }) => Promise<AWS.DynamoDB.DocumentClient.DeleteItemOutput[]>;
    deleteSecret: (options: { name: string, version: number }) => Promise<AWS.DynamoDB.DocumentClient.DeleteItemOutput>;
    listSecrets: () => Promise<string[]>;
    getAllSecrets: (options: { version?: number | undefined, context?: CredstashContext | undefined, startsWith?: string | undefined }) => Promise<{ [key: string]: string }>;
    createDdbTable: () => Promise<void>;
}

declare function Credstash(config: CredstashConfig): Credstash;

export = Credstash;
