import UniversalRouter from "universal-router";
import generateUrls from "universal-router/generateUrls";

new UniversalRouter(
    {
        path: '',
        name: 'root',
        action: (context) => context.path,
    },
    {
        context: {
            user: 'name',
        },
        baseUrl: '/base',
        errorHandler: (error, context) => {
            console.error(error);
            console.dir(context);
            return error.status === 404
                ? '<h1>Page Not Found</h1>'
                : '<h1>Oops! Something went wrong</h1>';
        },
    },
).resolve('/').then(console.log);

new UniversalRouter({
    path: '/admin',
    children: [
        {
            path: '',
            action: () => 'Admin Page',
        },
        {
            path: '/users',
            children: [
                {
                    path: '',
                    action: () => 'User List',
                },
                {
                    path: '/:username',
                    action: () => 'User Profile',
                },
            ],
        },
    ],
}).resolve({ pathname: '/admin/users/john' })
    .then(result => console.log(result));

new UniversalRouter({
    path: '', // optional
    async action({ next }) {
        console.log('middleware: start');
        const child = await next();
        console.log('middleware: end');
        return child;
    },
    children: [
        {
            path: '/hello',
            action() {
                console.log('route: return a result');
                return 'Hello, world!';
            },
        },
    ],
});

const url = generateUrls(new UniversalRouter([
    { name: 'users', path: '/users' },
    { name: 'user', path: '/user/:username' },
], { baseUrl: '/base' }));

url('users'); // => '/base/users'
url('user', { username: 'john' }); // => '/base/user/john'
