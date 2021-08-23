import imageToBase64 = require('image-to-base64');

imageToBase64('path/to/file.jpg') // Path to the image
    .then(response => {
        response; // $ExpectType string
    })
    .catch((error: Error) => {
        error; // $ExpectType Error
    });

imageToBase64('https://whatever-image/') // Image URL
    .then(response => {
        response; // $ExpectType string
    })
    .catch((error: Error) => {
        error; // $ExpectType Error
    });
(async () => {
    try {
        await imageToBase64('path/to/file.jpg'); // $ExpectType string
    } catch (error) {
        error; // $ExpectType any
    }
})();
