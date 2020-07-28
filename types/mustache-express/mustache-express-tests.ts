import express = require('express');
import mustacheExpress = require('mustache-express');

const app = express();
app.engine('mustache', mustacheExpress());
app.engine('mustache', mustacheExpress('/partials'));
app.engine('mustache', mustacheExpress('/partials', '.mst'));

// $ExpectType Cache<string, { name: string; data: string; partials: string[]; }> || TemplateCache
mustacheExpress().cache;
