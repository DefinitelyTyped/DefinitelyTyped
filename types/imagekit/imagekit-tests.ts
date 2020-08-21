import ImageKit = require('imagekit');

const imageKit = new ImageKit({
    privateKey: 'private_1234',
    publicKey: 'public_1234',
    urlEndpoint: 'https://ik.imagekit.io/your_imagekit_id/'
});

imageKit.url({
    path: '/some/path',
    transformationPosition: 'path'
});

imageKit.url({
    src: '/some/src',
    transformationPosition: 'path'
});

imageKit.url({
    path: '/some/path',
    src: '/some/src',
    transformationPosition: 'path'
});

imageKit.bulkDeleteFiles(['1', '2', '3'], (error, bulkDeleteFilesResponse) => {});

imageKit.bulkDeleteFiles(['1', '2', '3'])
.then((bulkDeleteFilesResponse) => {});
