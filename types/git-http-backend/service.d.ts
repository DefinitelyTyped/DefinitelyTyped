
import { Duplex, Writable } from "stream";

export = Service;
import Backend from 'git-http-backend'
interface Fields {

    head: string,
    last: string,
    refname: string,
    ref: string,
    tag: string,
    branch: string,
    name: string
}
declare class Service {
    constructor(opts: {
        info: boolean,
        cmd: string,
    } & Fields, backend: Backend);
    info: boolean;
    cmd: string;
    _bands: Buffer[];
    action: string | {"git-receive-pack": string, "git-upload-pack": "pull"};
    type: string;
    _backend: Backend;
    fields: Fields;
    args: string[];
    createStream(): Duplex;
    createBand(): Writable;
}
    
