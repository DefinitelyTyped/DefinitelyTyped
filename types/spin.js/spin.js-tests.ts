

var spinner = new Spinner().spin();
target.appendChild(spinner.el);

var target = document.getElementById('foo');
var opts = { speed: 5, color: '#abcdef' };
var spinner2 = new Spinner(opts).spin(target);

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
    left: 'auto',
    scale: 1,
    opacity: 0.25,
    fps: 20,
    position: 'absolute'
};

var newTarget = document.getElementById('bar');
var spinner3 = new Spinner(opts2).spin(newTarget);
