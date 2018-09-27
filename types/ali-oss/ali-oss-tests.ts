import OSS from "ali-oss";

const client = new OSS({
    accessKeyId: 'your access key',
    accessKeySecret: 'your access secret',
    bucket: 'your bucket name',
    region: 'oss-cn-hangzhou'
});

