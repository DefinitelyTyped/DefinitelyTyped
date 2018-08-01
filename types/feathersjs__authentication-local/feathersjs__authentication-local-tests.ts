import feathers, { Application } from '@feathersjs/feathers';
import feathersAuthenticationLocal from '@feathersjs/authentication-local';

const app: Application<{}> = feathers().configure(feathersAuthenticationLocal());
