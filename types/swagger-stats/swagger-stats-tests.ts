import {
  getHapiPlugin,
  getFastifyPlugin,
  getMiddleware,
  getCoreStats,
  getPromStats,
  getPromClient,
  stop,
} from 'swagger-stats';
import { Server } from '@hapi/hapi';
import * as fastify from 'fastify';
import * as express from 'express';

const isDefined = (input: any) => {
  if (input === undefined) throw new Error('Expected value to be defined');

  return;
};

const testHapi = async () => {
  isDefined(getHapiPlugin.name);
  isDefined(getHapiPlugin.version);

  const hapiServer = new Server();

  await getHapiPlugin.register(hapiServer);
};

// testHapi();

const testFastify = () => {
  isDefined(getFastifyPlugin);
  getFastifyPlugin(fastify(), {}, () => console.log('Fastify loaded'));
};

// testFastify();

const testExpress = () => {
  isDefined(getMiddleware);

  const app = express();

  let middleware = getMiddleware({ ip: '1.1.1.1' });
  middleware = getMiddleware(); // Opts aren't required

  app.use(middleware);
};

// testExpress();

const testCoreStats = () => {
  isDefined(getCoreStats);
  setTimeout(() => {
    const stats = getCoreStats();

    console.log(stats);
  }, 3000);
};

testCoreStats();

const testPromStats = () => {
  isDefined(getPromStats);
  setTimeout(() => {
    const stats = getPromStats();

    console.log(stats);
  }, 3000);
};

testPromStats();

const testPromClient = () => {
  isDefined(getPromClient);
  setTimeout(() => {
    const client = getPromClient();

    isDefined(client);
    isDefined(client.Counter);

    new client.Counter({
      name: 'test',
      help: 'test',
    });
  }, 3000);
};

testPromClient();

isDefined(stop);

stop();
