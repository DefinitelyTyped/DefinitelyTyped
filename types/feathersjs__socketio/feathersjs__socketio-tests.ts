import feathers, { Application } from '@feathersjs/feathers';
import feathersSocketIO, { SOCKET_KEY } from '@feathersjs/socketio';

const app: Application = feathers();

app.configure(feathersSocketIO(1337, {}));
app.configure(feathersSocketIO(io => {}));
app.configure(feathersSocketIO({}, io => {}));
app.configure(feathersSocketIO(1337, io => {}));
app.configure(feathersSocketIO(1337, {}, io => {}));

app.channel('');
app.publish('', () => undefined);

const key = SOCKET_KEY;
