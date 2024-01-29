import * as cookiejar from "cookiejar";
import * as stream from "stream";
import { Request, Response, SuperAgentRequest, SuperAgentStatic } from "superagent";

// these types should be exported by `superagent` but are not -------

type CallbackHandler = (err: any, res: Response) => void;

type Serializer = (obj: any) => string;

type BrowserParser = (str: string) => any;

type NodeParser = (res: Response, callback: (err: Error | null, body: any) => void) => void;

type Parser = BrowserParser | NodeParser;

// ------------------------------------------------------------------

type EnhancedSuperAgentRequest = Omit<SuperAgentRequest, "retry"> & {
    retry(count?: number, delay?: number): SuperAgentRequest;
};

interface EnhancedSuperAgent<Req extends EnhancedSuperAgentRequest> extends stream.Stream {
    jar: cookiejar.CookieJar;
    attachCookies(req: Req): void;
    checkout(url: string, callback?: CallbackHandler): Req;
    connect(url: string, callback?: CallbackHandler): Req;
    copy(url: string, callback?: CallbackHandler): Req;
    del(url: string, callback?: CallbackHandler): Req;
    delete(url: string, callback?: CallbackHandler): Req;
    get(url: string, callback?: CallbackHandler): Req;
    head(url: string, callback?: CallbackHandler): Req;
    lock(url: string, callback?: CallbackHandler): Req;
    merge(url: string, callback?: CallbackHandler): Req;
    mkactivity(url: string, callback?: CallbackHandler): Req;
    mkcol(url: string, callback?: CallbackHandler): Req;
    move(url: string, callback?: CallbackHandler): Req;
    notify(url: string, callback?: CallbackHandler): Req;
    options(url: string, callback?: CallbackHandler): Req;
    patch(url: string, callback?: CallbackHandler): Req;
    post(url: string, callback?: CallbackHandler): Req;
    propfind(url: string, callback?: CallbackHandler): Req;
    proppatch(url: string, callback?: CallbackHandler): Req;
    purge(url: string, callback?: CallbackHandler): Req;
    put(url: string, callback?: CallbackHandler): Req;
    report(url: string, callback?: CallbackHandler): Req;
    saveCookies(res: Response): void;
    search(url: string, callback?: CallbackHandler): Req;
    subscribe(url: string, callback?: CallbackHandler): Req;
    trace(url: string, callback?: CallbackHandler): Req;
    unlock(url: string, callback?: CallbackHandler): Req;
    unsubscribe(url: string, callback?: CallbackHandler): Req;
}

interface EnhancedSuperAgentStatic extends EnhancedSuperAgent<EnhancedSuperAgentRequest> {
    (url: string): EnhancedSuperAgentRequest;
    // tslint:disable-next-line:unified-signatures
    (method: string, url: string): EnhancedSuperAgentRequest;
    agent(): this & Request;
    serialize: { [type: string]: Serializer };
    parse: { [type: string]: Parser };
}

declare function wrapSuperagent(request: SuperAgentStatic): EnhancedSuperAgentStatic;

export = wrapSuperagent;
