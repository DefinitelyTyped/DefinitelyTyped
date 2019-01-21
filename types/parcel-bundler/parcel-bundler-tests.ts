import ParcelBundler, { ParcelOptions } from "parcel-bundler";
import { Server as HttpServer } from "http";
import { Server as HttpsServer } from "https";

const parcelOption: ParcelOptions = { watch: false };

const files = ["./index.d.ts"];

const bundler = new ParcelBundler(files, parcelOption);

bundler.addAssetType("md", "markdown-asset");

bundler.addPackager("md", "markdown-packager");

bundler.bundle().then(bundle => bundle.name);

(async () => {
    const a: HttpServer = await bundler.serve(1234);

    const b: HttpsServer = await bundler.serve(1234, true);
})();
