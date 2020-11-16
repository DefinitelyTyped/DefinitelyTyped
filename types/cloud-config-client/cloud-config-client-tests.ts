import client = require('cloud-config-client');

client.load({
    name: 'invoices'
}).then(config => {
    const conf = config; // $ExpectType Config
    const value1 = config.get('this.is.a.key'); // $ExpectType any
});

// Async through IFFE

(async () => {
    const config = await client.load({name: 'invoices'}); // $ExpectType Config
})();

// With additional options

client.load({
    name: 'invoices',
    profiles: ['profile1', 'profile2'],
    label: 'label',
    auth: {
        pass: 'password',
        user: 'admin',
    }
}).then(config => {
    const conf = config; // $ExpectType Config
    const value1 = config.get('this.is.a.key'); // $ExpectType any
});
