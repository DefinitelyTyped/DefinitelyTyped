// Type definitions for uid-safe v2.1
// Project: https://github.com/crypto-utils/uid-safe
// Definitions by: Joshua DeVinney <https://github.com/geoffreak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace UID {

    export interface Generate {

        (byteLength: number, callback: (err: any, str: string) => any): void;
        (byteLength: number): Promise<string>;

        sync(byteLength: number): string;
    }
}

declare var UID: UID.Generate;
export = UID;
