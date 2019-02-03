import * as s3urls from "@mapbox/s3urls";

s3urls.toUrl("bucket", "key"); // $ExpectType { s3: string; "bucket-in-path": string; "bucket-in-host": string; }
s3urls.toUrl("bucket", "key")["s3"]; // $ExpectType string
s3urls.toUrl("bucket", "key")["bucket-in-host"]; // $ExpectType string
s3urls.toUrl("bucket", "key")["bucket-in-path"]; // $ExpectType string

s3urls.valid("s3://bucket/key"); // $ExpectType boolean
s3urls.valid("invalid"); // $ExpectType boolean

s3urls.convert("s3://bucket/key", "s3"); // $ExpectType string
s3urls.convert("s3://bucket/key", "bucket-in-path"); // $ExpectType string
s3urls.convert("s3://bucket/key", "bucket-in-host"); // $ExpectType string

s3urls.fromUrl("s3://bucket/key"); // $ExpectType object
