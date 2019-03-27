import express = require("express");
import "express-session";
import graphqlHTTP = require("express-graphql");
import { buildSchema } from "graphql";

const app = express();
const schema = buildSchema(`type Query { hello: String }`);

const graphqlOption: graphqlHTTP.OptionsData = {
    graphiql: true,
    schema,
    formatError: (error: Error) => ({
        message: error.message,
    }),
    validationRules: [() => false, () => true],
    extensions: ({ document, variables, operationName, result }) => ({ key: "value", key2: "value" }),
};

const graphqlOptionRequest = (request: express.Request): graphqlHTTP.OptionsData => ({
    graphiql: true,
    schema,
    context: request.session,
    validationRules: [() => false, () => true],
});

const graphqlOptionRequestAsync = async (request: express.Request): Promise<graphqlHTTP.OptionsData> => {
    return {
        graphiql: true,
        schema: await Promise.resolve(schema),
        context: request.session,
        extensions: async args => {},
        validationRules: [() => false, () => true],
    };
};

app.use("/graphql1", graphqlHTTP(graphqlOption));

app.use("/graphql2", graphqlHTTP(graphqlOptionRequest));

app.use("/graphqlasync", graphqlHTTP(graphqlOptionRequestAsync));

app.listen(8080, () => console.log("GraphQL Server running on localhost:8080"));
