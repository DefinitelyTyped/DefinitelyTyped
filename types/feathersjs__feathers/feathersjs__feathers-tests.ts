import feathers, { Application, HookContext } from '@feathersjs/feathers';

interface User {
    id: number;
    name: string;
}

interface Services {
    users: User;
}

const app = feathers() as Application<Services>;

app.service('users').get(0).then(u => {
    const user: User = u;
});

app.service('users').hooks({
    before: {
        all: (context: HookContext) => {
            context.statusCode = 200;
            context.dispatch = { test: 'true' };
        }
    }
});
