/// <reference types='node' />

declare module "git-http-backend" {
    export default Backend;
    import { Duplex } from "stream";
    
    class Backend extends Duplex {
        constructor(uri: string, cb: (err: any, service: import("./service")) => void);
        parsed: boolean;
        service: string | string[];
        info: boolean;
    }
}