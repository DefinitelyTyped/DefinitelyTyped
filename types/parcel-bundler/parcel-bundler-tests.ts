import ParcelBundler, { ParcelOptions } from "parcel-bundler";

const parcelOption: ParcelOptions = { watch: false };

const files = ["./index.d.ts"];

const bundler = new ParcelBundler(files, parcelOption);

bundler.bundle().then(bundle => bundle.name);
