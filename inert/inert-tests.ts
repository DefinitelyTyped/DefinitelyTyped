
const Inert = require('inert');
const Hapi = require('hapi');


const server = new Hapi.Server({});
server.register(Inert, () => {});

export var makeThisAModule: any;