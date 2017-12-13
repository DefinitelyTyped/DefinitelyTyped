import * as MockAWS from "mock-aws-s3";

const s3 = new MockAWS.S3({
    params: { Bucket: "example" }
});

s3.putObject(
    {
        Bucket: "example",
        Key: "sea/animal.json",
        Body: '{"is dog":false,"name":"otter","stringified object?":true}'
    },
    (err: MockAWS.AWSError, data: MockAWS.S3.Types.PutObjectOutput) => {
        s3.listObjects({ Bucket: 'example', Prefix: "sea" }, (err: any, data: any) => {});
    }
);
