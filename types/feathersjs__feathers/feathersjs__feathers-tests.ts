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

app.service('users').get(0); // app: Service<User>
let x = app.service('user');  // never
x = (() => { throw new Error(); })(); // only never can be assigned to never

const app2 = feathers();
app2.service('users').get(0); // app2: Service<any>
app2.service('user').get(0);  // app2 :Service<any>

const app3 = feathers<{}>();
app3.service('users').get(0); // Service<any>
app3.service('user').get(0);  // Service<any>
