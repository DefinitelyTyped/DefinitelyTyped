import prompt = require('prompt');

prompt.start();

prompt.get(['username', 'email'], (err, result) => {
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);
});

const obj = {
    password: 'lamepassword',
    mindset: 'NY',
};

prompt.addProperties(obj, ['username', 'email'], err => {
    err;
    console.log('Updated object received:');
    console.dir(obj);
});

const schema: prompt.Schema = {
    properties: {
        proxy: {
            description: 'Proxy url',
        },
        proxyCredentials: {
            description: 'Proxy credentials',
            ask: () => {
                // only ask for proxy credentials if a proxy was set
                return !!prompt.history('proxy')!.value;
            },
        },
    },
};

prompt.get(
    [
        schema,
        {
            name: 'name',
            description: 'Your name',
            type: 'string',
            required: true,
        },
        {
            name: 'surname',
            description: 'Your surname',
            type: 'string',
            required: true,
            message: 'Please dont use the demo credentials',
            conform: surname => {
                const name = prompt.history('name')!.value;
                return name !== 'John' || surname !== 'Smith';
            },
        },
    ],
    (err, results) => {
        console.log(results);
    },
);

prompt.colors = false;
