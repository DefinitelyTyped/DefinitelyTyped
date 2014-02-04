declare module 'oauth2orize'
{
    function createServer():Server;
    export var grant:Object;
    export class Server
    {
        grant(type, phase, fn);
    }
}