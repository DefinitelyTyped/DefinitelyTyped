import screenfull = require('screenfull');

if (screenfull) {
    screenfull.enabled; // $ExpectType boolean
    screenfull.enabled = false; // $ExpectError
    screenfull.isFullscreen; // $ExpectType boolean
    screenfull.isFullscreen = false; // $ExpectError
    screenfull.element; // $ExpectType Element | null
    screenfull.element = document.documentElement; // $ExpectError

    if (screenfull.enabled) {
        const elem: Element = document.getElementById('target')!;

        screenfull.request(); // $ExpectType Promise<void>
        screenfull.request(elem); // $ExpectType Promise<void>
        screenfull.toggle(); // $ExpectType Promise<void>
        screenfull.toggle(elem); // $ExpectType Promise<void>
        screenfull.exit(); // $ExpectType Promise<void>

        screenfull.on('change', event => {
            event; // $ExpectType Event
        });
        screenfull.on('error', event => {
            event; // $ExpectType Event
        });
        screenfull.off('change', event => {
            event; // $ExpectType Event
        });
        screenfull.off('error', event => {
            event; // $ExpectType Event
        });
        screenfull.onchange(event => {
            event; // $ExpectType Event
        });
        screenfull.onerror(event => {
            event; // $ExpectType Event
        });

        screenfull.raw.requestFullscreen; // $ExpectType string
        screenfull.raw.exitFullscreen; // $ExpectType string
        screenfull.raw.fullscreenElement; // $ExpectType string
        screenfull.raw.fullscreenEnabled; // $ExpectType string
        screenfull.raw.fullscreenchange; // $ExpectType string
        screenfull.raw.fullscreenerror; // $ExpectType string
    }
}
