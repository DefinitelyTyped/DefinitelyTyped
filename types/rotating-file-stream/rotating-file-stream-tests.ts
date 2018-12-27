import * as rfs from 'rotating-file-stream';

const compress: rfs.CompressFn = (src: string, dest: string): string => {
    return `cat ${src} | gzip -c9 > ${dest}`;
};

const accessLogStream = rfs('access.log', {
    interval: '1d',
    path: "path/to/",
    compress,
    highWaterMark: 1,
    history: "myHistory",
    immutable: false,
    initialRotation: false,
    maxFiles: 10,
    maxSize: '1G',
    mode: 1,
    rotate: 10,
    rotationTime: true,
    size: '500M'
});

accessLogStream.close();
