import event = google.maps.event;

event.addDomListener({}, 'click', (e) => {
    e; // $ExpectType MouseEvent
});

event.addDomListener({}, 'keydown', (e) => {
    e; // $ExpectType KeyboardEvent
});

event.addDomListener({}, 'load', (e) => {
    e; // $ExpectType Event
});

export {};
