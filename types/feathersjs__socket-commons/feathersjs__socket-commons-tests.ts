import feathers from '@feathersjs/feathers';

const app = feathers();

app.channel('abc').send({});

// check if the non-augmented @feathersjs/feathers typings still work
app.on('asd', () => {});
app.service('asd').get(0).then(() => {});

app.channel('admins', 'users');

app.channel(app.channels); // will return a channel with all connections

app.service('users').on('removed', user => {
    app.channel(app.channels).leave((connection: any) => {
        return user._id === connection.user._id;
    });
});
