import { CallbackHandler, Request, Response } from "superagent";
import { Server } from "tls";

declare class Test extends Request {
    constructor(app: Server, method: string, path: string);
    app: Server;
    url: string;

    serverAddress(app: Server, path: string): string;

    expect(status: number, callback?: CallbackHandler): this;
    expect(status: number, body: any, callback?: CallbackHandler): this;
    expect(checker: (res: Response) => any, callback?: CallbackHandler): this;
    expect(body: string, callback?: CallbackHandler): this;
    expect(body: RegExp, callback?: CallbackHandler): this;
    expect(body: object, callback?: CallbackHandler): this;
    expect(field: string, val: string, callback?: CallbackHandler): this;
    expect(field: string, val: RegExp, callback?: CallbackHandler): this;
    end(callback?: CallbackHandler): this;
}

export = Test;
