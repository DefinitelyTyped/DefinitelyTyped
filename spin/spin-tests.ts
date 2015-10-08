/// <reference path="spin.d.ts" />

var spinner = new Spin.Spinner().spin();
target.appendChild(spinner.el);

var target = document.getElementById('foo');
var opts = { speed: 5, color: '#abcdef' };
var spinner2 = new Spin.Spinner(opts).spin(target);

var opts2 = {
    lines: 10,
    length: 20,
    width: 7,
    radius: 14,
    corners: 0.6,
    rotate: 0,
    direction: 1,
    color: ['#aaa', '#fedcba', '#fff', '#aef02b'],
    speed: 1.5,
    trail: 50,
    shadow: true,
    hwaccel: true,
    className: 'spinner',
    zIndex: 5,
    top: '28',
    left: 'auto'
};

var newTarget = document.getElementById('bar');
var spinner3 = new Spin.Spinner(opts2).spin(newTarget);
