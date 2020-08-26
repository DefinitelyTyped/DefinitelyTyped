import event = google.maps.event;

event.addDomListener({}, 'click', (e: MouseEvent) => {
    e; // $ExpectType MouseEvent
});

event.addDomListener({}, 'keydown', (e: KeyboardEvent) => {
    e; // $ExpectType KeyboardEvent
});

event.addDomListener({}, 'load', (e: Event) => {
    e; // $ExpectType Event
});

export {};
