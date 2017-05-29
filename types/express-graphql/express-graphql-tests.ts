import * as express from "express";
import 'express-session';
import * as graphqlHTTP from "express-graphql";

const app = express();
const schema = {};

const graphqlOption: graphqlHTTP.OptionsObj = {
    graphiql: true,
    schema: schema,
    formatError: (error:Error) => ({
        message: error.message,
    })
};

const graphqlOptionRequest = (request: express.Request): graphqlHTTP.OptionsObj => ({
    graphiql: true,
    schema: schema,
    context: request.session,
});

app.use("/graphql1", graphqlHTTP(graphqlOption));

app.use("/graphql2", graphqlHTTP(graphqlOptionRequest));

app.listen(8080);
