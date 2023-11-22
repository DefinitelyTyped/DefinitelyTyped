import { Blob } from "buffer";
import { ReadStream } from "fs";
import Response = require('./node/response');

type CallbackHandler = (err: any, res: Response) => void;

type BrowserParser = (str: string) => any;

type MultipartValueSingle = Blob | Buffer | ReadStream | string | boolean | number;

type MultipartValue = MultipartValueSingle | MultipartValueSingle[];

type NodeParser = (res: Response, callback: (err: Error | null, body: any) => void) => void;

type Parser = BrowserParser | NodeParser;

type Serializer = (obj: any) => string;

declare class RequestBase extends Promise<Response> {
    abort(): this;
    clearTimeout(): this;
    parse(parser: Parser): this;
    responseType(type: string): this;
    serialize(serializer: Serializer): this;
    timeout(ms: number | { deadline?: number | undefined; response?: number | undefined }): this;
    retry(count?: number, callback?: CallbackHandler): this;
    use(fn: (req: this) => void): this;
    ok(callback: (res: Response) => boolean): this;
    get(header: string): string;
    getHeader(header: string): string;
    set(field: Record<string, string>): this;
    set(field: string, val: string): this;
    unset(field: string): this;
    field(name: string, val: MultipartValue): this;
    field(fields: { [fieldName: string]: MultipartValue }): this;
    withCredentials(on?: boolean): this;
    redirects(n: number): this;
    maxResponseSize(n: number): this;
    send(data?: string | object): this;
    sortQuery(sort?: boolean | ((a: string, b: string) => number)): this;
    toJSON(): {
        method: string;
        url: string;
        data?: string | object;
        headers: (string | string[])[];
    }
}

export = RequestBase;
