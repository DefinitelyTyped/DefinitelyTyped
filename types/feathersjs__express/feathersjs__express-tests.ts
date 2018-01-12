import feathers, { Application } from '@feathersjs/feathers';
import feathersExpress from '@feathersjs/express';
import { Application as ExpressApplication } from 'express';

const app: ExpressApplication & Application<{}> = feathersExpress(feathers());
