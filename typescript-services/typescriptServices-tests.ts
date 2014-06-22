/// <reference path="./typescriptServices.d.ts"/>

import ts = require('typescript-services');

// formatter: 
var snapshot = TypeScript.SimpleText.fromString('var foo = 123;');
var formatter = new ts.Services.Formatting.TextSnapshot(snapshot);