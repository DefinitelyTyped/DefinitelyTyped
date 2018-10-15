import feathers, { Application } from '@feathersjs/feathers';
import feathersExpress, * as express from '@feathersjs/express';

const app = feathersExpress(feathers());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('./public'));
app.configure(express.rest());
app.use(express.notFound());
app.use(express.errorHandler({ logger: console }));
