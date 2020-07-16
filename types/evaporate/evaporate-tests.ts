import Evaporate = require('evaporate');

const newEvaporate = new Evaporate({
    bucket: 'abc',
});

Evaporate.create({
    bucket: 'abc',
})
    .then((evaporate) => {
        evaporate.add({
            name: 'gwejlf',
            file: new File(['abcd'], 'efg'),
            started: (file_key) => {
                evaporate.pause(file_key);
            },
            paused: (file_key) => {
                evaporate.resume(file_key);
            },
            resumed: (file_key) => {
                evaporate.cancel(file_key);
            }
        })
            .then((awsS3ObjectKey) => {
                console.log(awsS3ObjectKey + '!!!');
            });
    });

Evaporate.create({
    bucket: 'test',
    computeContentMd5: true,
    cryptoMd5Method(data: ArrayBuffer) {
        return '';
    },
    cryptoHexEncodedHash256(data: ArrayBuffer | string | null) {
        return '';
    },
});
