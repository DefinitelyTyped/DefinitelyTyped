import KmsJson = require('kms-json');

const kmsJson = new KmsJson({
    awsKmsSettings: { },
    keyId: "foo",
    encoding: "base64"
});

kmsJson.encrypt({ abc: 123 });
kmsJson.decrypt("bar");
