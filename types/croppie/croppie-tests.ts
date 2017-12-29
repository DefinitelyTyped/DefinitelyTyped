import Croppie = require('croppie');

const c = new Croppie(document.getElementById('item'), {
    boundary: { width: 300, height: 300 },
    viewport: { width: 100, height: 100 },
    showZoomer: false,
    enableOrientation: false,
});

c.bind({
    url: 'demo/demo-2.jpg',
    orientation: 4,
    zoom: 0,
});

c.rotate(90);

c.setZoom(0.5);

c.result({ type: 'blob' }).then(blob => {
    let x: Blob;
    x = blob;
});

c.destroy();
