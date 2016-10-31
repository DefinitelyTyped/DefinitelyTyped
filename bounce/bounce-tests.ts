/// <reference path="./bounce.d.ts" />
/// <reference path="./../jquery/jquery.d.ts" />

import Bounce from 'bounce.js';
import * as $ from 'jquery';

function test_chaining_transformations() {
    var bounce = new Bounce();
    bounce
        .scale({
            from: { x: 0, y: 0 },
            to: { x: 2, y: 2 },
            duration: 1000
        })
        .rotate({
            from: 0,
            to: 360,
            delay: 500
        })
        .translate({
            from: { x: 0, y: -100 },
            to: { x: 0, y: 0 },
            stiffness: 1,
            bounces: 4
        })
        .skew({
            from: { x: 1, y: 0.8 },
            to: { x: 0.8, y: 1 },
            easing: 'bounce'
        });
}

function test_serialization() {
    var b1 = new Bounce();
    var serialized = b1.serialize();
    var b2 = new Bounce();
    b2.deserialize(serialized);
}

function test_apply () {
    var bounce = new Bounce();
    var element = document.createElement('div');
    bounce.applyTo(element);
    bounce.applyTo([element]);
    bounce.applyTo($('div'));

    var options = {
        loop: true,
        remove: true,
        onComplete: () => {}
    };
    bounce.applyTo(element, options);
    bounce.applyTo([element], options);
    bounce.applyTo($('div'), options);
}

function test_apply_promise () {
    var bounce = new Bounce();
    var element = document.createElement('div');
    bounce.applyTo($('div')).then(() => {});

    var options = {
        loop: true,
        remove: true
    };
    bounce.applyTo($('div')).then(() => {});
}

function test_define() {
    var bounce = new Bounce();
    bounce.define('named-animation');
}

function test_remove() {
    var bounce = new Bounce();
    bounce.remove();
}
