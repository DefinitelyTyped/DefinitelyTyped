// Type definitions for @keystonejs/file-adapters 5.1
// Project: https://github.com/keystonejs/keystone
// Definitions by: Kevin Brown <https://github.com/thekevinbrown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

// Because this is a scoped package, without this line Typescript doesn't associate the
// types with the right package.
// tslint:disable-next-line:no-single-declare-module
declare module '@keystonejs/file-adapters' {
    interface LocalFileAdapterConfig {
        src: string;
        path?: string;
        getFilename?: (options: { id: string; originalFilename: string }) => string;
    }

    class LocalFileAdapter {
        constructor(options: LocalFileAdapterConfig);

        save(params: {
            stream: any;
            filename?: string;
            id: string;
        }): Promise<{ filename: string; id: string }>;
        publicUrl(params: { filename: string }): string;
    }

    interface CloudinaryFileAdapterConfig {
        cloudName: string;
        apiKey: string;
        apiSecret: string;
        folder?: string;
    }

    class CloudinaryFileAdapter {
        constructor(options: CloudinaryFileAdapterConfig);

        save(params: {
            stream: any;
            filename?: string;
            id: string;
        }): Promise<{ filename: string; id: string }>;
        publicUrl(params: { filename: string }): string;
    }
}
