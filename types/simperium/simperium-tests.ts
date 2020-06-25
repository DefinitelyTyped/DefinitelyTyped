import simperium = require('simperium');

const client = simperium.createClient<{ repo: { name: string } }>('test', 'test');
client.bucket('repo').name; // $ExpectType "repo"
