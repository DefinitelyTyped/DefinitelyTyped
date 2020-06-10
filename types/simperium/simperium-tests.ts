import simperium = require('simperium');

const client = simperium.initClient<{ repo: { name: string } }>('test', 'test');
client.bucket('repo').name; // $ExpectType "repo"
