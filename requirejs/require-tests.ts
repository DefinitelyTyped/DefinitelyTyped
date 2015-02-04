/// <reference path="require.d.ts" />

// this test does not actually reference amd module 'main.ts', create one yourself.

require.config({
	baseUrl: '../Definitions',

	// Requires versions afaik
	paths: {
		'jquery': '../Definitions/jquery',
		'underscore': '../Definitions/underscore',
		'backbone': '../Definitions/backbone'
	},

	shim: {
		jquery: {
			exports: '$'
		},

		underscore: {
			exports: '_'
		},

		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	}
});

// load AMD module main.ts (compiled to main.js)
// and include shims $, _, Backbone

require(['main'], (main: any, $: any, _: any, Backbone: any) => {

	var app = main.AppMain();
	app.run();

});

var recOne = require.config({ baseUrl: 'js' });
recOne(['core'], function (core: any) {/*some code*/});

