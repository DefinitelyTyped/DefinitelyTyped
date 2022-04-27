import splashy = require('splashy');

const url = 'https://kikobeats.com/images/avatar.jpg';
const image = new HTMLImageElement();
const buffer = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=',
);

(async () => {
    let palette = await splashy(url);
    console.log(palette);

    palette = await splashy(image);
    console.log(palette);

    palette = await splashy(buffer);
    console.log(palette);
})();
