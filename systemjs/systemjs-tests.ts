/// <reference path="systemjs.d.ts" />

import System = require('systemjs');

System.config({
  baseURL: '/',
  paths: {'*': '*.js?v=0.18.4'}
});

System.import('app');

System.normalize('myApp', 'blah');
