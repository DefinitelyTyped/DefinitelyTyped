import feathers, { Application, HookContext } from '@feathersjs/feathers';

interface User {
    id: number;
    name: string;
}

interface Services {
    users: User;
}

const app = feathers<Services>();

app.service('users').get(0).then(u => {
    const user: User = u;
});

app.service('users').hooks({
    before: {
        all: (context: HookContext) => {
            context.statusCode = 200;
            context.dispatch = { test: 'true' };
        }
    },
    after: [
        (context: HookContext) => {
            context.statusCode = 200;
            context.dispatch = { test: 'true' };
        }
    ],
    finally: (context: HookContext) => {
        context.statusCode = 200;
        context.dispatch = { test: 'true' };
    }
});

app.service('users'); // Service<User>
app.service('user');  // never

const app2 = feathers();
app2.service('users'); // Service<any>
app2.service('user');  // Service<any>

const app3 = feathers<never>();
app3.service('users'); // Service<any>
app3.service('user');  // Service<any>
