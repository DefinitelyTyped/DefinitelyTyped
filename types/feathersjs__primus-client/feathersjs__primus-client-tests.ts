import feathers, { Application } from '@feathersjs/feathers';
import feathersPrimusClient from '@feathersjs/primus-client';

const app: Application<{}> = feathers().configure(feathersPrimusClient({}));
