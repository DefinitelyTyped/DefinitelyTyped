/// <reference path="./lolex.d.ts" />

import lolex = require("lolex");

function a() {
	var clock = lolex.createClock();

	clock.setTimeout(function () {
		console.log("The poblano is a mild chili pepper originating in the state of Puebla, Mexico.");
	}, 15);

	// ...

	clock.tick(15);
}

function b() {
	var clock = lolex.install(window);

	window.setTimeout(() => {}, 15); // Schedules with clock.setTimeout

	clock.uninstall();

	// window.setTimeout is restored to the native implementation
}

function c() {
	var clock = lolex.install();

	// Equivalent to
	// var clock = lolex.install(typeof global !== "undefined" ? global : window);
}

var clock: lolex.Clock;

/**
 * var clock = lolex.createClock([now])
 */

clock = lolex.createClock();
clock = lolex.createClock(Date.now());


/**
 * var clock = lolex.install([context[, now[, toFake]]])
 */

clock = lolex.install();
clock = lolex.install(window);
clock = lolex.install(window, Date.now());
clock = lolex.install(window, Date.now(), ['setTimeout', 'clearTimeout']);


/**
 * var clock = lolex.install([now[, toFake]])
 */

clock = lolex.install(Date.now());
clock = lolex.install(Date.now(), ['setTimeout', 'clearTimeout']);


var id: number;
/**
 * var id = clock.setTimeout(callback, timeout)
 */

id = clock.setTimeout(() => {}, 1000);


/**
 * clock.clearTimeout(id)
 */

clock.clearTimeout(id);


/**
 * var id = clock.setInterval(callback, timeout)
 */

id = clock.setInterval(() => {}, 1000);


/**
 * clock.clearInterval(id)
 */

clock.clearInterval(id);


/**
 * var id = clock.setImmediate(callback)
 */

id = clock.setImmediate(() => {});


/**
 * clock.clearImmediate(id)
 */

clock.clearImmediate(id);


/**
 * clock.tick(time)
 */

clock.tick(1000);


/**
 * clock.uninstall()
 */

clock.uninstall();
