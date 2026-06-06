/* eslint-disable @definitelytyped/no-declare-current-package */
// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "@mapbox/s3urls" {
    function fromUrl(
        url: string,
    ): { Bucket: string | undefined; Key: string | undefined };

    function toUrl(
        bucket: string,
        key: string,
    ): {
        s3: string;
        "bucket-in-path": string;
        "bucket-in-host": string;
    };

    function convert(
        url: string,
        to: "s3" | "bucket-in-path" | "bucket-in-host",
    ): string;

    function signed(
        url: string,
        expires: number,
        cb: (err: Error | undefined, url: string) => void,
    ): void;

    function valid(url: string): boolean;
}
