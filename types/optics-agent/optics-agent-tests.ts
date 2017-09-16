import OpticsAgent, {
  configureAgent,
  instrumentSchema,
  middleware,
  instrumentHapiServer,
  context,
  Options,
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

const hapiServer = new hapi.Server();
OpticsAgent.instrumentHapiServer(hapiServer);

const koaServer = new KoaServer();
koaServer.use(OpticsAgent.koaMiddleware());

declare const req: express.Request;
OpticsAgent.context(req);

const agent = new OpticsAgent.Agent({ apiKey: '1234' });

declare const schema: GraphQLSchema;
agent.instrumentSchema(schema);
