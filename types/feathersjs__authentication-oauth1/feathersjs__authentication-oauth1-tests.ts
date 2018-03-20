import feathers, { Application } from '@feathersjs/feathers';
import feathersAuthenticationOAuth1 from '@feathersjs/authentication-oauth1';

const app: Application<{}> = feathers().configure(feathersAuthenticationOAuth1());
