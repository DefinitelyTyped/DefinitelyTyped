// Type definitions for @mapbox/s3urls 1.5
// Project: https://github.com/mapbox/s3urls
// Definitions by: Sebastian Vera <https://github.com/sebastianvera>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line no-single-declare-module
declare module "@mapbox/s3urls" {
    function fromUrl(
        url: string
    ): { Bucket: string | undefined; Key: string | undefined };

    function toUrl(
        bucket: string,
        key: string
    ): {
        s3: string;
        "bucket-in-path": string;
        "bucket-in-host": string;
    };

    function convert(
        url: string,
        to: "s3" | "bucket-in-path" | "bucket-in-host"
    ): string;

    function signed(
        url: string,
        expires: number,
        cb: (err: Error | undefined, url: string) => void
    ): void;

    function valid(url: string): boolean;
}
