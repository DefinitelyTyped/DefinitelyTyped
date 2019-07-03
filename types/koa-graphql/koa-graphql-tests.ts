const Koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');

const app = new Koa();

app.use(mount('/graphql', graphqlHTTP(() => null)));
