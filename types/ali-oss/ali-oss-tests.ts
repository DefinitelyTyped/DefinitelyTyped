import * as OSS from 'ali-oss';

const ossOptions: OSS.Options = {
    accessKeyId: 'your access key',
    accessKeySecret: 'your access secret',
    bucket: 'your bucket name',
    region: 'oss-cn-hangzhou'
};

const client = new OSS(ossOptions);

const clusterOptions: OSS.ClusterOptions = {
    clusters: [],
};

const clusterClient = new OSS.Cluster(clusterOptions);

const imageOptions: OSS.ImageClientOptions = {
    imageHost: 'xxxx',
    accessKeyId: 'xxxx',
    accessKeySecret: 'xxxx',
    bucket: 'xxxx'
};

const imageClient = new OSS.ImageClient(imageOptions);
