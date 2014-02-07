declare module "oauth2orize"
{
    export function createServer():Server;

    export class grant
    {
        static code(options:Function);
        static code(options:any, issue:Function);
    }

    export class exchange
    {
        static code(options:Function);
        static code(options:any, issue:Function);
    }

    export class Server
    {
        grant(mod:any);
        grant(type:string, mod:any);
        grant(type:string, fn:Function);

        exchange(type:string, fn:Function);
        exchange(fn:Function);

        authorization(fn:Function);
        decision();
        serializeClient(fn:Function);
        deserializeClient(fn:Function);
    }
}