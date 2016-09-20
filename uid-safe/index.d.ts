// Type definitions for co-body
// Project: https://github.com/crypto-utils/uid-safe
// Definitions by: Joshua DeVinney <https://github.com/geoffreak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace UID {

    export interface Generate {

        (byteLenth: number, callback: (err: any, str: string) => any): void;
        (byteLenth: number): Promise<any>;
        (byteLenth: number, callback?: (err: any, str: string) => any): Promise<any> | void;

        sync(byteLength: number): string;
    }
}

declare var UID: UID.Generate;
export = UID;
