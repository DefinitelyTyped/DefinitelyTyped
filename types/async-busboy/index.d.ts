import * as fs from "fs";
import * as http from "http";
import busboy = require("busboy");

export = asyncBusboy;

declare function asyncBusboy(
    req: http.IncomingMessage,
    options: asyncBusboy.OnFileOptions,
): Promise<asyncBusboy.OnFileResult>;
declare function asyncBusboy(req: http.IncomingMessage, options?: asyncBusboy.Options): Promise<asyncBusboy.Result>;

declare namespace asyncBusboy {
    interface Options extends Omit<busboy.BusboyConfig, "headers"> {
        headers?: http.IncomingHttpHeaders | undefined;
        onFile?: busboy.BusboyEvents["file"] | undefined;
    }

    type OnFileOptions = WithRequiredProps<Options, "onFile">;

    interface Result {
        fields: { [key: string]: unknown };
        files: FileReadStream[];
    }

    type OnFileResult = Omit<Result, "files">;

    interface FileReadStream extends fs.ReadStream {
        fieldname: string;
        filename: string;
        transferEncoding: string;
        encoding: string;
        mimeType: string;
        mime: string;
    }
}

type WithRequiredProps<T extends {}, K extends keyof T> =
    & Omit<T, K>
    & {
        [MK in K]-?: NonNullable<T[MK]>;
    };
