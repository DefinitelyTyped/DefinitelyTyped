import * as Hapi from "hapi";
import * as Joi from "joi";
import * as Schwifty from "schwifty";
import DogModel from "./test/dog";

(async () => {
    const server = new Hapi.Server({ port: 3000 });

    await server.register(Schwifty);
    await server.register({
        plugin: Schwifty.plugin,
        options: {
            knex: {
                client: "sqlite3",
                useNullAsDefault: true,
                connection: {
                    filename: ":memory:"
                }
            }
        }
    });

    Schwifty.assertCompatible(DogModel, DogModel);
    // Register a model with schwifty...

    server.schwifty(DogModel);

    await server.initialize();
    const Dog: typeof DogModel = server.models().Dog;

    await Dog.query().insert({ name: "Guinness" });

    // ... then start the server!

    await server.start();

    console.log(`Now, go find some dogs at ${server.info.uri}!`);
})();
