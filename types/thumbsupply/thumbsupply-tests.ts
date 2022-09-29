import thumbsupply = require('thumbsupply');

thumbsupply
    .generateThumbnail('some-video.mp4', {
        size: thumbsupply.ThumbSize.MEDIUM, // or ThumbSize.LARGE
        timestamp: '10%', // or `30` for 30 seconds
        forceCreate: true,
        cacheDir: '~/myapp/cache',
        mimetype: 'video/mp4',
    })
    .then((thumb: string) => {
        // serve thumbnail
    });

thumbsupply
    .generateThumbnail('some-video.mp4', {
        size: thumbsupply.ThumbSize.LARGE, // or ThumbSize.LARGE
        timestamp: '30', // or `30` for 30 seconds
        forceCreate: false,
        cacheDir: '~/myapp/cache',
        mimetype: 'video/mp4',
    })
    .then((thumb: string) => {
        // serve thumbnail
    });

thumbsupply
    .lookupThumbnail('some-video.mp4')
    .then((thumb: string) => {
        // serve thumbnail
    })
    .catch(err => {
        // thumbnail doesn't exist
    });

// prettier-ignore
// $ExpectType Promise<string>
thumbsupply.generateThumbnail('some-video.mp4');

// prettier-ignore
// $ExpectType Promise<string>
thumbsupply.generateThumbnail('some-video.mp4', {
    size: thumbsupply.ThumbSize.MEDIUM, // or ThumbSize.LARGE
    timestamp: '10%', // or `30` for 30 seconds
    forceCreate: true,
    cacheDir: '~/myapp/cache',
    mimetype: 'video/mp4',
});

// prettier-ignore
// @ts-expect-error
thumbsupply.generateThumbnail(10);

// prettier-ignore
// $ExpectType Promise<string>
thumbsupply.generateThumbnail('some-non-video.json');

// prettier-ignore
// @ts-expect-error
thumbsupply.lookupThumbnail(10);

// prettier-ignore
// $ExpectType Promise<string>
thumbsupply.lookupThumbnail('some-non-video.jpg');

// prettier-ignore
// $ExpectType Promise<string>
thumbsupply.lookupThumbnail('some-video.mp4');

// prettier-ignore
// $ExpectType Promise<string>
thumbsupply.lookupThumbnail('some-video.mp4', {
    size: thumbsupply.ThumbSize.MEDIUM,
    timestamp: '10%',
    forceCreate: true,
    cacheDir: '~/myapp/cache',
});
