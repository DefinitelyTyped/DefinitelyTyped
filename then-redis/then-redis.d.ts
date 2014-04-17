declare module "then-redis"
{
    import q                                       = require('q');

    export function createClient(options?:any):Client;
    export function connect(options?:any):q.Promise<any>;

    export class Client
    {
        constructor(options?:any);
        connect():q.Promise<any>;
        disconnect();
        send(command:string, args:any[]):q.Promise<any>;
    }
}