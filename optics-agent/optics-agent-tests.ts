import OpticsAgent, {
  configureAgent,
  instrumentSchema,
  middleware,
  instrumentHapiServer,
  context,
} from 'optics-agent';
import { GraphQLSchema } from 'graphql';
import * as express from 'express';
import * as hapi from 'hapi';

const configOptions = {
  apiKey: "",
  reportTraces: false,
  reportVariables: false,
  printReports: false,
  normalizeQuery: (info: any) => "",
  endpointUrl: "",
  proxyUrl: "",
  reportIntervalMs: 1,
};
OpticsAgent.configureAgent(configOptions);

const expressServer = express();
expressServer.use(OpticsAgent.middleware());

const hapiServer = new hapi.Server();
OpticsAgent.instrumentHapiServer(hapiServer);

const req = {} as express.Request;
OpticsAgent.context(req);

const agent = new OpticsAgent.Agent({ apiKey: '1234' });

const schema = {} as GraphQLSchema;
agent.instrumentSchema(schema);
