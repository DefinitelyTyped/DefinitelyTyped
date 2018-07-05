function test_init() {
    SlidingMarker.initializeGlobally();
    MarkerWithGhost.initializeGlobally();
}

function test_options() {
    var options: SlidingMarkerOptions = {
        position: new google.maps.LatLng(0, 0),
        easing: "easeInOutSine",
        duration: 1000,
        animateFunctionAdapter: (marker, destPoint, easing, duration) => {}
    };
    var m = new SlidingMarker(options);
    var g = new MarkerWithGhost(options);
}

function test_sliding_marker() {
    let googleMarker: google.maps.Marker;
    let p: google.maps.LatLng;
    let d: number;
    let e:jQuery.easing.IEasingType;

    var m = new SlidingMarker();
    googleMarker = m;

    p = m.getPosition();
    m.setDuration(d);
    d = m.getDuration();
    m.setEasing(e);
    e = m.getEasing();
    p = m.getAnimationPosition();
    m.setPositionNotAnimated(p);
}

function test_marker_with_ghost() {
    let p: google.maps.LatLng;
    let d: number;
    let e:jQuery.easing.IEasingType;
    let slidingMarker: SlidingMarker;

    var g = new MarkerWithGhost();
    slidingMarker = g;

    g.setGhostPosition(p);
    p = g.getGhostPosition();
    p = g.getGhostAnimationPosition();
}
