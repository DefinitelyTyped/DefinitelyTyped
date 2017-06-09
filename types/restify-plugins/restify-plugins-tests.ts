import * as plugins from 'restify-plugins';

plugins.bodyParser();
plugins.pre.context();
plugins.dateParser();
