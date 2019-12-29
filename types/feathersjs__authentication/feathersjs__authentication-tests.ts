import feathers from '@feathersjs/feathers';
import feathersAuthentication from '@feathersjs/authentication';

feathers().configure(feathersAuthentication({}));
