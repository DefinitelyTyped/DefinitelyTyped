/// <reference path="./node-ipc.d.ts" />

import ipc = require("node-ipc");

ipc.config.id   = 'hello';
ipc.config.retry= 1500;

ipc.connectTo(
    'world',
    function(){
        ipc.of['world'].on(
            'connect',
            function(){
                ipc.log('## connected to world ##');
                ipc.of['world'].emit(
                    'message',
                    'hello'
                )
            }
        );
        ipc.of['world'].on(
            'disconnect',
            function(){
                ipc.log('disconnected from world');
            }
        );
        ipc.of['world'].on(
            'message',
            function(data){
                ipc.log('got a message from world : ', data);
            }
        );
    }
);

ipc.serveNet(
    8001,
    'udp4',
    function(){
        ipc.server.on(
            'message',
            function(data){
                ipc.log('got Data');
                ipc.log('got a message from ', data.from.variable ,' : ', data.message);
            }
        );
        ipc.server.emit(
            {
                address : 'localhost',
                port    : ipc.config.networkPort
            },
            'message',
            {
                from    : ipc.config.id,
                message : 'Hello'
            }
        );
    }
);

ipc.server.define.listen['message'] = 'This event type listens for message strings as value of data key.';

ipc.server.start();
