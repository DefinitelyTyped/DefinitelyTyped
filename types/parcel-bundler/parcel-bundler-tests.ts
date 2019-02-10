import ParcelBundler, { ParcelOptions } from "parcel-bundler";

const parcelOption: ParcelOptions = { watch: false };

const files = ["./index.d.ts"];

const bundler = new ParcelBundler(files, parcelOption);

bundler.addAssetType('md', 'markdown-asset');

bundler.addPackager('md', 'markdown-packager');

bundler.bundle().then(bundle => bundle.name);
