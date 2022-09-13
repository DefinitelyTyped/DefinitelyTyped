import S3Service from 'lesgo/lib/services/S3Service';

// $ExpectType S3Service
const s3 = new S3Service({
    accessKeyId: 'AKID',
    secretAccessKey: 'SECRET',
    region: 'us-west-2',
});
s3.s3Instance; // $ExpectType S3

(async () => {
    await s3.getObject('TILES/Level4/A3_B3_C2/A5_B67_C59_Tiles.par', 'test-aws-imagery'); // $ExpectType GetObjectOutput
    // @ts-expect-error
    await s3.getObject(null, 'test-aws-imagery');
})();
