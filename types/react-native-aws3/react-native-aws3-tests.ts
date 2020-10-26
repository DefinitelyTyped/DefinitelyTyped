import { File, Options, RNS3 } from 'react-native-aws3';

const file: File = {
    name: 'file',
    uri: 'file:///some/file.txt',
    type: 'text/text',
};

const options: Options = {
    accessKey: 'accessKey',
    bucket: 'bucket',
    region: 'region',
    secretKey: 'secretKey',
};

const req = RNS3.put(file, options);

req.progress(({ percent, total }) => {
    const x = (100 * percent).toFixed(2).replace(/\.0+$/, '');
    console.log(`${x}% of ${total}`);
});
