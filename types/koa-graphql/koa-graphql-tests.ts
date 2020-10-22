import * as Koa from 'koa';
import * as mount from 'koa-mount';
import * as graphqlHTTP from 'koa-graphql';
import { buildSchema } from 'graphql';

const schema = buildSchema(`type Query { hello: String }`);

const app = new Koa();

app.use(
    mount(
        '/graphql',
        graphqlHTTP(req => {
            return {
                schema,
            };
        })
    )
);
