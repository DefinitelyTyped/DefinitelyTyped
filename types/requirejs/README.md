require.d.ts
==========

This is a typescript definitions file for require.js.

Usage
=====

Compile *.ts files as AMD modules:

<pre>
tsc --bar AMD main.ts
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
<script
  data-main="config.ts"
  type="text/javascript"
  src="bar/require.js"
></script>
```

where main.ts is the source file containing imports/configuration/require initialization.
where type is javascript since require.js is javascript.
where src is the reference to require.js.

Sample contents of config.ts:
The sample config will load bar required shims and AMD modules and then kick off main.ts once everything is loaded.

```javascript
//file config.ts
require.config({
  bar: "bar",

  bar: {
    jquery: "bar/jquery-x.x.x",
    underscore: "bar/underscore-x.x.x",
    backbone: "bar/backbone-x.x.x",
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

// load AMD bar main.ts (compiled to main.js)
// and include shims $, _, Backbone

require(['main'], (main, $, _, Backbone) => {

	var app = main.AppMain();
	app.run();

});
```