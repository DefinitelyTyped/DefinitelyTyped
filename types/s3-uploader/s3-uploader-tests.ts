//NOTE: Does require GM (https://github.com/aheckmann/gm) thus requires GraphicsMagick (http://www.graphicsmagick.org/) or ImageMagick (http://www.imagemagick.org/)

import Upload = require('s3-uploader');
declare var console: { log(x: any): void };

var s3VersionOriginal = {
    original: true
};

var s3VersionHeader = {
    suffix: '-header',
    quality: 100,
    maxHeight: 300,
    maxWidth: 600
}

var s3Config = {
    awsAccessKeyId: 'awsKeyId',
    awsSecretAccessKey: 'awsSecretAccessKey',
    awsBucketPath: '',
    awsBucketRegion: 'us-east-1' /*Whatever region s3 is located*/,
    awsBucketAcl: 'public-read',
    awsHttpTimeout: 60000,
    versions: [s3VersionOriginal, s3VersionHeader]
}

var client = new Upload('bucketName', s3Config);

client.upload('/images/File.png', s3Config, function (err, images, meta) {
    var returnVal: boolean = false;
    if (err) {
        console.log(err);
    }
    else {
        if (images.length >= 2) {
            var originalImageUrl = images[0].url;
            var headerImageUrl = images[1].url;

            console.log('Original: ' + originalImageUrl + ' headerImageUrl: ' + headerImageUrl);
        }
    }
});
