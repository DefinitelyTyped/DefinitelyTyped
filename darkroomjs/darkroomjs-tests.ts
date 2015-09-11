/// <reference path="./darkroomjs.d.ts" />
// test from https://github.com/MattKetmo/darkroomjs
var y = new Darkroom('#target', {
    minWidth: 100,
    minHeight: 100,
    maxWidth: 500,
    maxHeight: 500,
    plugins: {
        crop: {
            minHeight: 50,
            minWidth: 50,
            ratio: 1
        },
        save: false
    },

    initialize: function() {
        // Active crop selection
        this.plugins['crop'].requireFocus();

        // Add custom listener
        this.addEventListener('core:transformation', function() { /* ... */ });
    }
});
