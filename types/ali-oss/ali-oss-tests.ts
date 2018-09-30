import OSS from "ali-oss";

const client = new OSS({
    accessKeyId: 'your access key',
    accessKeySecret: 'your access secret',
    bucket: 'your bucket name',
    region: 'oss-cn-hangzhou'
});

const ImageClient = OSS.ImageClient({
    imageHost: 'host',
    accessKeySecret: "secret",
    accessKeyId: 'id',
    bucket: "",
    internal: false,
    region: "",
    timeout: 2000
});

const cluster = OSS.Cluster({
    clusters: [
        {
            accessKeyId: 'id',
            accessKeySecret: 'secret',
            host: ""
        },
        {
            accessKeyId: 'id',
            accessKeySecret: 'secret',
            host: ""
        },
    ],
    schedule: 'masterSlave',
});
