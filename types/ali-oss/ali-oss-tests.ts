import OSS from "ali-oss";

const ossOptions: OSS.Options = {
    accessKeyId: "your access key",
    accessKeySecret: "your access secret",
    bucket: "your bucket name",
    region: "oss-cn-hangzhou",
};

const client = new OSS(ossOptions);

client.listV2({ "max-keys": 1000 });
client.copy("newfile.png", "sourcefile.png");
client.copy("newfile.png", "sourcefile.png", { timeout: 1000 });
client.copy("newfile.png", "sourcefile.png", "sourceBucket");
client.copy("newfile.png", "sourcefile.png", "sourceBucket", { timeout: 1000 });

const clusterOptions: OSS.ClusterOptions = {
    clusters: [],
};

const clusterClient = new OSS.ClusterClient(clusterOptions);

clusterClient.deleteMulti(["cluster"], { quiet: true });

// $ExpectType string
clusterClient.signatureUrl("ossdemo.txt", {
    expires: 3600,
    response: { "content-type": "text/custom", "content-disposition": "attachment" },
}, false);

// $ExpectType Promise<string>
clusterClient.asyncSignatureUrl("ossdemo.txt", {
    expires: 3600,
    response: { "content-type": "text/custom", "content-disposition": "attachment" },
}, false);

// $ExpectType Promise<string>
clusterClient.signatureUrlV4("GET", 60, undefined, "your object name");

// $ExpectType Promise<string>
clusterClient.signatureUrlV4(
    "GET",
    60,
    { headers: { "Cache-Control": "no-cache" }, queries: { versionId: "version ID of your object" } },
    "your object name",
    ["Cache-Control"],
);

// $ExpectType Promise<string>
clusterClient.signatureUrlV4("PUT", 60, undefined, "your object name");

// $ExpectType Promise<string>
clusterClient.signatureUrlV4(
    "PUT",
    60,
    { headers: { "Content-Type": "text/plain", "Content-MD5": "xxx", "Content-Length": 1 } },
    "your obejct name",
    ["Content-Length"],
);

const imageOptions: OSS.ImageClientOptions = {
    imageHost: "xxxx",
    accessKeyId: "xxxx",
    accessKeySecret: "xxxx",
    bucket: "xxxx",
};

const imageClient = new OSS.ImageClient(imageOptions);

const sts = new OSS.STS({
    accessKeyId: "access key",
    accessKeySecret: "access secret",
});
sts.assumeRole("roleArn", undefined, 3600, "session name").then(token => {
    const { credentials } = token;
    const stsClient = new OSS({
        accessKeyId: credentials.AccessKeyId,
        accessKeySecret: credentials.AccessKeySecret,
        stsToken: credentials.SecurityToken,
        bucket: "bucket name",
        region: "oss-cn-hangzhou",
        refreshSTSTokenInterval: 3000,
        refreshSTSToken: async () => {
            const { credentials: cred } = await sts.assumeRole("roleArn", undefined, 3600, "session name");
            return {
                accessKeyId: cred.AccessKeyId,
                accessKeySecret: cred.AccessKeySecret,
                stsToken: cred.SecurityToken,
            };
        },
    });
});

const userMeta: OSS.UserMeta = {
    uid: 0,
    pid: 0,
    anything: "anything",
};
