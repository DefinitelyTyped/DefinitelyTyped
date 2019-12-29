require.d.ts
==========

This is a typescript definitions file for require.js.

Usage
=====

Compile *.ts files as AMD modules:

<pre>
tsc --module AMD main.ts
</pre>

export classes so they can be accessed from an import:

```javascript
// File main.ts
export class Main  {

	run() {  
		...
	}
}
```

Reference require.js statically in your html page (normally how you would do this with vanilla javascript)

```html
<script data-main="config.ts" type="text/javascript" src="lib/require.js"></script>
```

where main.ts is the source file containing imports/configuration/require initialization.
where type is javascript since require.js is javascript.
where src is the reference to require.js.

Sample contents of config.ts:
The sample config will load all required shims and AMD modules and then kick off main.ts once everything is loaded.

```javascript
//file config.ts
require.config({
	baseUrl: 'lib',

	paths: {
		'jquery': 'lib/jquery-x.x.x',
		'underscore': 'lib/underscore-x.x.x',
		'backbone': 'lib/backbone-x.x.x'
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

require(['main'], (main, $, _, Backbone) => {

	var app = main.AppMain();
	app.run();

});
```