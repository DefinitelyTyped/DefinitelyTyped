// All code examples below taken from http://imakewebthings.com/waypoints/guides/getting-started/

declare function notify(text: string): void;

// A Basic Waypoint
// --------------------------------------------------------------------------------------------------------------------
let waypoint1 = new Waypoint({
    element: document.getElementById('basic-waypoint')!,
    handler() {
        notify('Basic waypoint triggered');
    }
});

// Directions
// --------------------------------------------------------------------------------------------------------------------
let waypoint2 = new Waypoint({
    element: document.getElementById('direction-waypoint')!,
    handler(direction) {
        notify('Direction: ' + direction);
    }
});

// Offsets
// --------------------------------------------------------------------------------------------------------------------
let waypoint3 = new Waypoint({
    element: document.getElementById('px-offset-waypoint')!,
    handler(direction) {
        notify('I am 20px from the top of the window');
    },
    offset: 20
});

// this?
// --------------------------------------------------------------------------------------------------------------------
let waypoint4 = new Waypoint({
    element: document.getElementById('element-waypoint')!,
    handler(direction) {
        notify(`${this.element.id} triggers at ${this.triggerPoint}`);
    },
    offset: '75%'
});

// JQuery adapter
// All code examples below taken from http://imakewebthings.com/waypoints/guides/jquery-zepto/

import $ = require('jquery');

// $.fn.waypoint
// --------------------------------------------------------------------------------------------------------------------

let waypoints10 = $('#options-only').waypoint({
  handler: function fn(this: Waypoint, direction?: string) {
    notify(this.element.id + ' hit');
  }
});

let waypoints11 = $('#handler-first').waypoint(function() {
  notify(this.element.id + ' hit 25% from top of window');
}, {
  offset: '25%'
});

let waypoints12 = $('#handler-only').waypoint(function() {
  notify(this.element.id + ' hit');
});

// Context Option
// --------------------------------------------------------------------------------------------------------------------

let waypoints13 = $('#context-example-offset').waypoint({
  handler: function fn(this: Waypoint, direction?: string) {
    notify('Hit midpoint of my context');
  },
  context: '#overflow-scroll-offset',
  offset: '50%'
});
