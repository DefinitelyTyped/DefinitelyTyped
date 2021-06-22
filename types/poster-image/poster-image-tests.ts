import poster = require('poster-image');

const file = new Blob();

poster(file).then(blob => {
    const image = new Image();
    image.src = URL.createObjectURL(blob);
    document.body.appendChild(image);
});
