import * as OSS from 'ali-oss';

const ossOptions: OSS.Options = {
    accessKeyId: 'your access key',
    accessKeySecret: 'your access secret',
    bucket: 'your bucket name',
    region: 'oss-cn-hangzhou',
};

const client = new OSS(ossOptions);

const clusterOptions: OSS.ClusterOptions = {
    clusters: [],
};

const clusterClient = new OSS.Cluster(clusterOptions);

clusterClient.deleteMulti(["cluster"], { quiet: true });

const imageOptions: OSS.ImageClientOptions = {
    imageHost: 'xxxx',
    accessKeyId: 'xxxx',
    accessKeySecret: 'xxxx',
    bucket: 'xxxx',
};

const imageClient = new OSS.ImageClient(imageOptions);

const sts = new OSS.STS({
    accessKeyId: 'access key',
    accessKeySecret: 'access secret',
});
sts.assumeRole('roleArn', undefined, 3600, 'session name').then(token => {
    const { credentials } = token;
    const stsClient = new OSS({
        accessKeyId: credentials.AccessKeyId,
        accessKeySecret: credentials.AccessKeySecret,
        stsToken: credentials.SecurityToken,
        bucket: 'bucket name',
        region: 'oss-cn-hangzhou',
    });
});
