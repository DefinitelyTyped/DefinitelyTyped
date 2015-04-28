/// <reference path="angular.d.ts" />

import localName = require('angular');
var mod: localName.IModule = localName.module('mod', []);

// Remain compatible with the ambient version 
var mod2: angular.IModule = mod;
