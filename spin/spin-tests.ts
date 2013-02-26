/// <reference path="spin.d.ts" />

var spinner = new Spinner().spin();
target.appendChild(spinner.el);

var target = document.getElementById('foo');
var opts = { speed: 5, className: 'awesome' };
var spinner2 = new Spinner(opts).spin(target);