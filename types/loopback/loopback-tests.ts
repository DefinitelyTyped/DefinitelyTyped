import * as loopback from 'loopback';
import * as cookieParser from 'cookie-parser';

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

        this.app.start = async () => {
            // start the web server
            const models = this.app.models();
            const model = models[0] as (typeof loopback.PersistedModel);

            const data = await model.findOne<TestModel>();

            if (data) {
                console.dir(data.name);
            }

            model.findOne<TestModel>({}, (err, instance) => {
                if (err) {
                    console.dir(err);
                }
                console.dir(instance.name);
            });
        };
    }
}
