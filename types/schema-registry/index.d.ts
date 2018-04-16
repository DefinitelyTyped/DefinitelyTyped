// Type definitions for schema-registry 1.17
// Project: https://github.com/nodefluent/schema-registry#readme
// Definitions by: Tomislav Fabeta <https://github.com/bonzzy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />
export interface RegistryClientConfig {
    host: string;
    port: number;
    protocol?: string;
    logger?: object;
    type?: string;
}

export interface AvroSchemaResponseInterface {
    subject: string;
    version: number;
    id: number;
    schema: any;
}

export type RegistryRequest = Promise<AvroSchemaResponseInterface>;

export class LivingAvroSchema extends RegistryClient {
    fetch: (poll?: boolean) => RegistryRequest;
    toBuffer: (object: object) => Buffer;
    fromBuffer: (buffer: Buffer) => any;
    on: (...args: any[]) => undefined;
    removeListener: (...args: any[]) => undefined;
    stop: () => undefined;
    constructor(subject: string, version: string, config: RegistryClientConfig);
}

export class RegistryClient {
    host: string;
    port: number;
    protocol: string;
    type: string;
    logger: object;

    request: (options: object, expectedStatusCode: number) => RegistryRequest;
    isAlive: () => RegistryRequest;
    registerSubjectVersion: (subject: string, schema: object) => RegistryRequest;
    getVersionsForSubject: (subject: string) => RegistryRequest;
    getConfig: () => RegistryRequest;
    setConfig: (config: object) => RegistryRequest;
    setSubjectConfig: (subject: string, config: object) => RegistryRequest;
    getSubjectConfig: (subject: string) => RegistryRequest;
    getSchemaById: (id: number) => RegistryRequest;
    getSubjects: () => RegistryRequest;
    getSubjectSchemaForVersion: (subject: string, version: number) => RegistryRequest;
    getLatestSubjectSchema: (subject: string) => RegistryRequest;
    checkSubjectRegistration: (subject: string, schema: object) => RegistryRequest;
    constructor(config: RegistryClientConfig);
}
