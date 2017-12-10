// https://github.com/hapijs/hapi/blob/master/API.md#-requestparams
import {Lifecycle, Request, ResponseToolkit, Server, ServerOptions, ServerRoute} from "hapi";

const options: ServerOptions = {
    port: 8000,
};

// Example 1
// http://localhost:8000/album-name/song-optional
const getAlbum: Lifecycle.Method = (request: Request, h: ResponseToolkit) => {
    console.log(request.params);
    return 'ok: ' + request.path;
}
const serverRoute1: ServerRoute = {
    path: '/{album}/{song?}',
    method: 'GET',
    handler: getAlbum
}

// Example 2
// http://localhost:8000/person/rafael/fijalkowski
const getPerson: Lifecycle.Method = (request: Request, h: ResponseToolkit) => {
    const nameParts = request.params.name.split('/');
    return { first: nameParts[0], last: nameParts[1] };
}
const serverRoute2: ServerRoute = {
    path: '/person/{name*2}',
    method: 'GET',
    handler: getPerson
}


const server = new Server(options);
server.route(serverRoute1);
server.route(serverRoute2);

server.start();
console.log('Server started at: ' + server.info.uri);
