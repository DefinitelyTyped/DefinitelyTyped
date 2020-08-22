// Type definitions for @keystonejs/oembed-adapters 5.0
// Project: https://github.com/keystonejs/keystone
// Definitions by: Kevin Brown <https://github.com/thekevinbrown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

// Because this is a scoped package, without this line Typescript doesn't associate the
// types with the right package.
// tslint:disable-next-line:no-single-declare-module
declare module '@keystonejs/oembed-adapters' {
    interface OEmbedAdapterConfig {
        apiKey: string;
    }

    class IframelyOEmbedAdapter {
        constructor(options: OEmbedAdapterConfig);

        // Unlikely to be used in client apps, hence the any, but if you're using this, feel free to
        // type it properly. It's a res.json response from Fetch, just didn't want to pull that in
        // when it's unlikely to be actually used in client apps, Keystone calls this.
        fetch(parameters: any): Promise<any>;
    }
}
