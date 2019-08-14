import loopback = require('loopback');
import cookieParser = require('cookie-parser');

class TestModel {
    id: number;
    name: string;
}

class Server {
    app: loopback.LoopBackApplication;

    static boostrap(): Server {
        return new Server();
    }
    constructor() {
        this.app = loopback();

        this.app.use(cookieParser());

        this.app.use(loopback.favicon());
        this.app.use(loopback.rest());
        this.app.use(loopback.static('.'));
        this.app.use(loopback.status());
        this.app.use(loopback.rewriteUserLiteral());
        this.app.use(loopback.token());
        this.app.use(loopback.urlNotFound());

        this.app.start = async () => {
            // start the web server
            const models = this.app.models();
            const model = models[0] as (typeof loopback.PersistedModel);

            const data = await model.findOne<TestModel>();

            if (data) {
                console.dir(data.name);
            }

            model.findOne<TestModel>({}, (err: Error | null, instance: TestModel) => {
                if (err) {
                    console.dir(err);
                }
                console.dir(instance.name);
            });
            model.remoteMethod('getStuff', {
                description: "Get some stuff",
                accepts: [
                    {arg: 'aParam', type: "String", required: true, description: "A parameter to process"}
                ],
                http: {verb: "get", path: "/get-stuff"},
                returns: {arg: "res", type: "Object"},
            });
        };
    }
}
