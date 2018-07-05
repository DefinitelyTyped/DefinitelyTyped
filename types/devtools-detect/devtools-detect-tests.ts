// check if it's open
console.log('is DevTools open?', window.devtools.open);
// check it's orientation, null if not open
console.log('and DevTools orientation?', window.devtools.orientation);

// get notified when it's opened/closed or orientation changes
window.addEventListener('devtoolschange', function (e) {
    console.log('is DevTools open?', e.detail.open);
    console.log('and DevTools orientation?', e.detail.orientation);
});
