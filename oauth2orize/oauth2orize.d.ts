declare module oauth2orize_module
{
    export var grant:Object;

    export class Server
    {
        grant(type, phase, fn);
        authorization(fn:Function);
        decision();
        serializeClient(fn:Function);
        deserializeClient(fn:Function);
    }
}

interface oauth2orize
{
    createServer():oauth2orize_module.Server;
}

declare var oauth2orize:oauth2orize;