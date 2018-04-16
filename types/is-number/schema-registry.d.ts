/* tslint:disable:max-classes-per-file */
declare module "schema-registry" {

    interface RegistryClientConfig {
        host: string;
        port: number;
        protocol?: string;
        logger?: object;
        type?: string;
    }

    interface AvroSchemaResponseInterface {
        subject: string;
        version: number;
        id: number;
        schema: any;
    }

    type RegistryRequest = Promise<AvroSchemaResponseInterface>;

    class LivingAvroSchema extends RegistryClient {
        public fetch: (poll?: boolean) => RegistryRequest;
        public toBuffer: (object: object) => Buffer;
        public fromBuffer: (buffer: Buffer) => any;
        public on: (...args: any[]) => void;
        public removeListener: (...args: any[]) => void;
        public stop: () => void;
        constructor(subject: string, version: string, config: RegistryClientConfig);
    }

    class RegistryClient {
        public host: string;
        public port: number;
        public protocol: string;
        public type: string;
        public logger: object;

        public request: (options: object, expectedStatusCode: number) => RegistryRequest;
        public isAlive: () => RegistryRequest;
        public registerSubjectVersion: (subject: string, schema: object) => RegistryRequest;
        public getVersionsForSubject: (subject: string) => RegistryRequest;
        public getConfig: () => RegistryRequest;
        public setConfig: (config: object) => RegistryRequest;
        public setSubjectConfig: (subject: string, config: object) => RegistryRequest;
        public getSubjectConfig: (subject: string) => RegistryRequest;
        public getSchemaById: (id: number) => RegistryRequest;
        public getSubjects: () => RegistryRequest;
        public getSubjectSchemaForVersion: (subject: string, version: number) => RegistryRequest;
        public getLatestSubjectSchema: (subject: string) => RegistryRequest;
        public checkSubjectRegistration: (subject: string, schema: object) => RegistryRequest;
        public constructor(config: RegistryClientConfig);
    }
}
