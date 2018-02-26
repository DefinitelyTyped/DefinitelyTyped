import feathers from '@feathersjs/feathers';
import feathersAuthClient from '@feathersjs/authentication-client';

const app = feathers();
app.configure(feathersAuthClient());
app.authenticate({strategy : 'abcdef'}).then(() => {});
app.logout().then(() => {});

// check if the non-augmented @feathersjs/feathers typings still work
app.on('asd', () => {});
app.service('asd').get(0).then(() => {});
