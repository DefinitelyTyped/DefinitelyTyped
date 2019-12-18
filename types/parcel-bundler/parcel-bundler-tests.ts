import ParcelBundler, { ParcelOptions } from "parcel-bundler";

const parcelOption: ParcelOptions = { watch: false };

const files = ["./index.d.ts"];

const bundler = new ParcelBundler(files, parcelOption);

bundler.on('buildStart', (entryPoints) => {
    console.log(entryPoints);
});

bundler.on('bundled', (bundle) => {
    console.log(bundle);
});

bundler.on('buildEnd', () => console.log('Parcel bundler finished!'));

const cb = () => {};
bundler.on('buildEnd', cb);
bundler.off('buildEnd', cb);

bundler.addAssetType('md', 'markdown-asset');

bundler.addPackager('md', 'markdown-packager');

bundler.middleware();

bundler.bundle().then(bundle => bundle.name);

bundler.serve(1234, false, 'localhost').then((server) => server.close());

const otherBundler = new ParcelBundler(['./missing.d.ts'], parcelOption);

otherBundler.on('buildError', (error) => console.log(error));

otherBundler.bundle();
