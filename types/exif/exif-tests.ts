import Exif = require('exif');
const ExifImage = Exif.ExifImage;

new ExifImage({ image: 'myImage.jpg' }, (error, exifData) => {
    if (error) {
        console.log(`Error: ${error.message}`);
    } else {
        console.log(exifData);
    }
});

Exif('myImage.jpg', (error, exifData, dataPath) => {
    if (error) {
        console.log(`Error: ${error.message}`);
    } else {
        console.log(exifData, dataPath);
    }
});
