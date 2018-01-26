import feathers, { Application } from '@feathersjs/feathers';
import feathersExpress, { original, rest, notFound, errorHandler } from '@feathersjs/express';

const app = feathersExpress(feathers());

app.configure(rest());
app.use(notFound());
app.use(errorHandler());
