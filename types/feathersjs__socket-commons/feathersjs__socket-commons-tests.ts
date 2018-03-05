import feathers from '@feathersjs/feathers';

const app = feathers();

app.channel('abc').send({});

// check if the non-augmented @feathersjs/feathers typings still work
app.on('asd', () => {});
app.service('asd').get(0).then(() => {});
