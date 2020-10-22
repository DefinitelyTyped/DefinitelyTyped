import openload = require('node-openload');

const config = {
    api_key: 'test-1234',
    api_login: 'testlogin',
};

const ol = openload(config);

ol.config;
ol.config = config;
ol.locationPrefix;

ol.getAccountInfo().then(info => info.email);
ol.getDownloadTicket('testfile-id')
    .then(result => {
        const { ticket } = result;

        return ol.getDownloadLink({
            captcha_response: 'arbitrary captcha response',
            file: 'testfile-id',
            ticket,
        });
    })
    .then(result => result.url);

ol.getDownload('testfile-id').then(result => result.url);

ol.getFileInfo('testfile-id').then(result => result.content_type);

ol.deleteFile('testfile-id, testfile_id2').then(result => result.length);

ol.listFolder('testfolder').then(result => result.files);

ol.getFolder('testfolder').then(result => result.folders);

// Needed because remoteUploadStatus returns an object with integer keys
// https://stackoverflow.com/a/52856805
declare global {
    interface ObjectConstructor {
        numberKeys<T>(o: T): Array<keyof T>;
    }
}
Object.numberKeys = Object.keys as any;
ol.remoteUpload({ url: 'https://someurl.com/to/image.jpg' })
    .then(result => {
        const { id } = result;

        return ol.remoteUploadStatus({ id });
    })
    .then(result => Object.numberKeys(result).map(key => result[key].remoteurl));

const cb = (progress: { percent: number; transferred: number; total: number }) => progress.percent;
ol.upload({ file: './file.txt/' }, cb).then(result => result.url);

ol.getSplashImage('testfile-id').then(imgUrl => imgUrl);
