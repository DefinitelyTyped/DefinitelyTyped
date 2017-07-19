import * as JsonRpcWs from '.';

var server = JsonRpcWs.createServer();

server.expose('mirror', function mirror(params, reply)
{
    console.log('mirror handler', params);
    reply(null, params);
});

server.start({ port: 8080 }, function started()
{
    console.log('Server started on port 8080');
});

var client = JsonRpcWs.createClient();

client.connect('ws://localhost:8080', function connected()
{
    client.send('mirror', ['a param', 'another param'], function mirrorReply(error, reply)
    {
        console.log('mirror reply', reply);
    });
});
