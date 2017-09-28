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
