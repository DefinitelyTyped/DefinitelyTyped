import feathers, { Application } from '@feathersjs/feathers';
import feathersSocketIOClient from '@feathersjs/socketio-client';

import * as io from 'socket.io-client';

const socket = io();
const app: Application<{}> = feathers();

app.configure(feathersSocketIOClient(socket));
app.configure(feathersSocketIOClient(socket, { timeout: 1337 }));
