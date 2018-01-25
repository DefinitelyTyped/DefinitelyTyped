// All code examples below taken from http://imakewebthings.com/waypoints/guides/jquery-zepto/

import $ = require('jquery');

declare function notify(text: string): void;

// $.fn.waypoint
// --------------------------------------------------------------------------------------------------------------------

let waypoints = $('#options-only').waypoint({
  handler: function fn(this: Waypoint, direction?: string) {
    notify(this.element.id + ' hit');
  }
});

waypoints = $('#handler-first').waypoint(function() {
  notify(this.element.id + ' hit 25% from top of window');
}, {
  offset: '25%'
});

waypoints = $('#handler-only').waypoint(function() {
  notify(this.element.id + ' hit');
});

// Context Option
// --------------------------------------------------------------------------------------------------------------------

waypoints = $('#context-example-offset').waypoint({
  handler: function fn(this: Waypoint, direction?: string) {
    notify('Hit midpoint of my context');
  },
  context: '#overflow-scroll-offset',
  offset: '50%'
});
