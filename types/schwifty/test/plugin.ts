import * as Hapi from "hapi";
import * as Schwifty from "schwifty";
import DogModel from "./dog";

exports.plugin = {
    register: async (
        server: Hapi.Server,
        options: { Model: typeof Schwifty.Model }
    ) => {
        await server.register(Schwifty);

        if (options.Model) {
            Schwifty.assertCompatible(options.Model, DogModel);
        }

        server.schwifty(options.Model || DogModel);
    }
};
