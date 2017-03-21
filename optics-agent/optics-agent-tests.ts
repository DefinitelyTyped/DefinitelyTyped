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
var OpticsAgentRequired = require('optics-agent');

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
OpticsAgent.configureAgent(configOptions)

let expressServer = express();
expressServer.use(OpticsAgent.middleware());

let hapiServer = new hapi.Server();
OpticsAgent.instrumentHapiServer(hapiServer);

let req = {} as express.Request;
OpticsAgent.context(req);

const agent = new OpticsAgent.Agent({ apiKey: '1234' });

let schema = {} as GraphQLSchema;
agent.instrumentSchema(schema);
