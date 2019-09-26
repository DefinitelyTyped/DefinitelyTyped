import feathers, { Application } from '@feathersjs/feathers';
import feathersPrimus from '@feathersjs/primus';

const app: Application = feathers().configure(feathersPrimus({}));
