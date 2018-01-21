import * as express from 'express';

const app = express();

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

import hbs = require('hbs');

hbs.registerHelper('helper_name', (testParm: number) => testParm++);
hbs.registerPartial('partial_name', 'partial value');

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerPartials(__dirname + '/views/partials', () => {});

hbs.localsAsTemplateData(app);

const safeString = new hbs.handlebars.SafeString("string");

const instance1 = hbs.create();
const instance2 = hbs.create();

app.engine('html', instance1.__express);
app.engine('hbs', instance2.__express);
