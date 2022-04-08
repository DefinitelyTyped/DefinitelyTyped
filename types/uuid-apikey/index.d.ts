// Type definitions for uuid-apikey 1.4
// Project: https://github.com/chronosis/uuid-apikey
// Definitions by: Ben Allfree <https://github.com/benallfree>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface UUIDOptions {
    noDashes: boolean;
}

export interface ApiKeyInfo {
    uuid: string;
    apiKey: string;
}

declare class UUIDAPIKey {
    checkDashes(positions: number[], str: string): boolean;

    isUUID(uuid: string): boolean;

    isAPIKey(apiKey: string): boolean;

    toAPIKey(uuid: string, options?: Partial<UUIDOptions>): string;

    toUUID(apiKey: string): string;

    check(apiKey: string, uuid: string): boolean;

    create(options?: Partial<UUIDOptions>): ApiKeyInfo;
}

declare let obj: UUIDAPIKey;

export default obj;
