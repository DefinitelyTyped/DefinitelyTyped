import OpticsAgent, {
  configureAgent,
  instrumentSchema,
  koaMiddleware,
  middleware,
  instrumentHapiServer,
  context,
  Options,
  Agent,
} from 'optics-agent';
import { GraphQLSchema } from 'graphql';
import * as express from 'express';
import * as hapi from 'hapi';
import * as KoaServer from 'koa';

const configOptions: Options = {
  apiKey: "",
  reportTraces: false,
  reportVariables: false,
  printReports: false,
  normalizeQuery: (info: any) => "",
  endpointUrl: "",
  proxyUrl: "",
  reportIntervalMs: 1,
  shutdownGracefully: false,
};
OpticsAgent.configureAgent(configOptions);

const expressServer = express();
expressServer.use(OpticsAgent.middleware());
expressServer.use(middleware());

const hapiServer = new hapi.Server();
OpticsAgent.instrumentHapiServer(hapiServer);
instrumentHapiServer(hapiServer);

const koaServer = new KoaServer();
koaServer.use(OpticsAgent.koaMiddleware());
koaServer.use(koaMiddleware());

declare const req: express.Request;
OpticsAgent.context(req);
context(req);

let agent = new OpticsAgent.Agent({ apiKey: '1234' });

declare const schema: GraphQLSchema;
agent.instrumentSchema(schema);

agent = new Agent({ apiKey: '1234' });
instrumentSchema(schema);
