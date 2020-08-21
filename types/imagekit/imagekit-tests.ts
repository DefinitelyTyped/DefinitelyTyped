import ImageKit = require('imagekit');

const imageKit = new ImageKit({
    privateKey: 'private_1234',
    publicKey: 'public_1234',
    urlEndpoint: 'https://ik.imagekit.io/your_imagekit_id/'
}); // $ExpectType ImageKit
