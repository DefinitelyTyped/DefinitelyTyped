import feathers, { Application } from '@feathersjs/feathers';
import feathersAuthenticationOAuth2 from '@feathersjs/authentication-oauth2';

const app: Application<{}> = feathers().configure(feathersAuthenticationOAuth2());
