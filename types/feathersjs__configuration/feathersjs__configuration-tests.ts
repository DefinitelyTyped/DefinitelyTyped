import feathers, { Application } from '@feathersjs/feathers';
import feathersConfiguration from '@feathersjs/configuration';

const app: Application = feathers().configure(feathersConfiguration());
