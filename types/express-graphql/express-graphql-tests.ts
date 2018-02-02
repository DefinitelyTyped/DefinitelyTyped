import * as express from 'express';
import 'express-session';
import * as graphqlHTTP from 'express-graphql';

const app = express();
const schema = {};

const graphqlOption: graphqlHTTP.OptionsObj = {
    graphiql: true,
    schema: schema,
    formatError: (error: Error) => ({
        message: error.message
    }),
    extensions: (args) => { }
};

const graphqlOptionRequest = (request: express.Request): graphqlHTTP.OptionsObj => ({
    graphiql: true,
    schema: schema,
    context: request.session
});

const graphqlOptionRequestAsync = async (request: express.Request): Promise<graphqlHTTP.OptionsObj> => {
    return {
        graphiql: true,
        schema: await Promise.resolve(schema),
        context: request.session
    };
};

app.use('/graphql1', graphqlHTTP(graphqlOption));

app.use('/graphql2', graphqlHTTP(graphqlOptionRequest));

app.use('/graphqlasync', graphqlHTTP(graphqlOptionRequestAsync));

app.listen(8080, () => console.log('GraphQL Server running on localhost:8080'));
