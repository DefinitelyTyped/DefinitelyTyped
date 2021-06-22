import ioclient = require('socket.io-client');
import createSocketIoMiddleware from 'redux-socket.io';
import { Action } from 'redux';

const socketio = ioclient("test");

const SocketIOMiddleware1 = createSocketIoMiddleware(socketio, "test");
const SocketIOMiddleware2 = createSocketIoMiddleware(socketio, ["test1", "test2"]);
const SocketIOMiddleware3 = createSocketIoMiddleware(socketio, (type: string, action: Action) => (type === 'test'));
const SocketIOMiddleware4 = createSocketIoMiddleware(socketio, "", { eventName: "test" });
