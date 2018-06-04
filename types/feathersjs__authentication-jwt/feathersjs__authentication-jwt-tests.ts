import feathers, { Application } from '@feathersjs/feathers';
import feathersAuthenticationJwt from '@feathersjs/authentication-jwt';

const app: Application<{}> = feathers().configure(feathersAuthenticationJwt());
