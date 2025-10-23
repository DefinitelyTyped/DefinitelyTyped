import Hapi = require("@hapi/hapi");
import Schwifty = require("schwifty");
import DogModel from "./dog";

exports.plugin = {
    register: async (
        server: Hapi.Server,
        options: { Model: typeof Schwifty.Model },
    ) => {
        await server.register(Schwifty);

        if (options.Model) {
            Schwifty.assertCompatible(options.Model, DogModel);
        }

        server.schwifty(options.Model || DogModel);
    },
};
