import { buildSchema } from "graphql";
import * as Koa from "koa";
import * as graphqlHTTP from "koa-graphql";
import * as mount from "koa-mount";

const schema = buildSchema(`type Query { hello: String }`);

const app = new Koa();

app.use(
    mount(
        "/graphql",
        graphqlHTTP(req => {
            return {
                schema,
            };
        }),
    ),
);
