import feathers, { Application } from '@feathersjs/feathers';
import feathersSocketIO from '@feathersjs/socketio';

const app: Application<{}> = feathers();

app.configure(feathersSocketIO(1337, {}));
app.configure(feathersSocketIO(io => {}));
app.configure(feathersSocketIO({}, io => {}));
app.configure(feathersSocketIO(1337, io => {}));
app.configure(feathersSocketIO(1337, {}, io => {}));
