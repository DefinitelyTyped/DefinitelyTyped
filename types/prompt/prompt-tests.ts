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
            before: line => line.trim(),
            conform: surname => {
                const name = prompt.history('name')!.value;
                return name !== 'John' || surname !== 'Smith';
            },
        },
        {
            properties: {
                name: {
                    pattern: /^[a-zA-Z\s\-]+$/,
                    message: 'Name must be only letters, spaces, or dashes',
                    required: true,
                },
                password: {
                    hidden: true,
                },
            },
        },
    ],
    (err, results) => {
        console.log(results);
    },
);

// prompt 1.1 (at least) and higher also take a schema directly
// per https://github.com/flatiron/prompt#prompting-with-validation-default-values-and-more-complex-properties , so add a test for that:
prompt.get(schema);

prompt.colors = false;
