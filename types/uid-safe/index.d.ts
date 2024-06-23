declare namespace UID {
    export interface Generate {
        (byteLength: number, callback: (err: any, str: string) => any): void;
        (byteLength: number): Promise<string>;

        sync(byteLength: number): string;
    }
}

declare var UID: UID.Generate;
export = UID;
