import Viewer = require('viewerjs');

////////////////
// Static Methods
////////////////

Viewer.setDefaults({});
Viewer.noConflict();

////////////////
// Constructors
////////////////

const pictures: Element = <Element> document.querySelector('.docs-pictures');

let viewer = new Viewer(pictures);
viewer = new Viewer(pictures, {});
viewer = new Viewer(
    pictures,
    {
        // Enable inline mode
        inline: false,

        // Show the button on the top-right of the viewer
        button: true,

        // Show the navbar
        navbar: true,

        // Show the title
        title: true,

        // Show the toolbar
        toolbar: true,

        // Show the tooltip with image ratio (percentage) when zoom in or zoom out
        tooltip: true,

        // Enable to move the image
        movable: true,

        // Enable to zoom the image
        zoomable: true,

        // Enable to rotate the image
        rotatable: true,

        // Enable to scale the image
        scalable: true,

        // Enable CSS3 Transition for some special elements
        transition: true,

        // Enable to request fullscreen when play
        fullscreen: true,

        // Enable keyboard support
        keyboard: true,

        // Define interval of each image when playing
        interval: 5000,

        // Min width of the viewer in inline mode
        minWidth: 200,

        // Min height of the viewer in inline mode
        minHeight: 100,

        // Define the ratio when zoom the image by wheeling mouse
        zoomRatio: 0.1,

        // Define the min ratio of the image when zoom out
        minZoomRatio: 0.01,

        // Define the max ratio of the image when zoom in
        maxZoomRatio: 100,

        // Define the CSS `z-index` value of viewer in modal mode.
        zIndex: 2015,

        // Define the CSS `z-index` value of viewer in inline mode.
        zIndexInline: 0,

        // Define where to get the original image URL for viewing
        // Type: String (an image attribute) or Function (should return an image URL)
        url: 'src',

        // Event shortcuts
        ready: null,
        show: null,
        shown: null,
        hide: null,
        hidden: null,
        view: null,
        viewed: () => { }
    }
);

////////////////
// Methods
////////////////

viewer.show();
viewer.hide();
viewer.view();
viewer.view(1);
viewer.move(1);
viewer.move(-1, 0);
viewer.zoom(0.1);
viewer.zoom(0.1, true);
viewer.zoomTo(0);
viewer.rotate(90);
viewer.rotateTo(0);
viewer.scale(-1); // Flip both horizontal and vertical
viewer.scale(-1, 1); // Flip horizontal
viewer.scaleX(-1); // Flip horizontal
viewer.scaleY(-1); // Flip vertical
viewer.play();
viewer.stop();
viewer.full();
viewer.exit();
viewer.tooltip();
viewer.toggle();
viewer.reset();
viewer.update();
viewer.destroy();
