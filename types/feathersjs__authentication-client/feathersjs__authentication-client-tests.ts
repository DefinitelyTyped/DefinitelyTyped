import feathers from '@feathersjs/feathers';
import feathersAuthClient from '@feathersjs/authentication-client';

const app = feathers();
app.configure(feathersAuthClient());
app.authenticate({strategy : 'abcdef'}).then(() => {});
app.logout().then(() => {});
