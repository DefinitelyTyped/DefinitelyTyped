import WebpackAssetsManifest from "webpack-assets-manifest";

/** https://github.com/webdeveric/webpack-assets-manifest/blob/master/examples/asset-integrity.js */
new WebpackAssetsManifest({
    output: 'asset-integrity-manifest.json',
    integrity: true,
    publicPath: true,
    customize(entry, original, manifest, asset) {
        return {
            key: entry.value,
            value: asset && asset.integrity,
        };
    },
});

/** https://github.com/webdeveric/webpack-assets-manifest/blob/master/examples/aws-s3-data-integrity.js */
new WebpackAssetsManifest({
    output: 'aws-s3-data-integrity-manifest.json',
    integrity: true,
    integrityHashes: ['md5'],
    integrityPropertyName: 'md5',
    publicPath: 's3://some-bucket/some-folder/',
    customize(entry, original, manifest, asset) {
        return {
            key: entry.value,
            value: asset && asset.md5.substr(4),
        };
    },
});

/** https://github.com/webdeveric/webpack-assets-manifest/blob/master/examples/custom-cdn.js */
new WebpackAssetsManifest({
    output: 'custom-cdn-manifest.json',
    publicPath(filename, manifest) {
        switch (manifest.getExtension(filename).substr(1).toLowerCase()) {
            case 'jpg': case 'jpeg': case 'gif': case 'png': case 'svg':
                return `https://img.cdn.example.com/${filename}`;
            case 'css':
                return `https://css.cdn.example.com/${filename}`;
            case 'js':
                return `https://js.cdn.example.com/${filename}`;
            default:
                return `https://cdn.example.com/${filename}`;
        }
    },
});

/**
 * https://github.com/webdeveric/webpack-assets-manifest/blob/master/examples/customized.js
 * https://github.com/webdeveric/webpack-assets-manifest/blob/master/examples/merged.js
 */
new WebpackAssetsManifest({
    output: 'customized-manifest.json',
    merge: true,
    customize(entry, original, manifest, asset) {
        if (manifest.isMerging) {}

        if (entry.key.toLowerCase().endsWith('.map')) {
            return false;
        }

        return {
            key: `src/${entry.key}`,
            value: `dist/${entry.value}`,
        };
    },
});

/** https://github.com/webdeveric/webpack-assets-manifest/blob/master/examples/sorted.js */
new WebpackAssetsManifest({
    output: 'sorted-manifest.json',
    sortManifest(a, b) {
        const extA = this.getExtension(a);
        const extB = this.getExtension(b);

        if (extA > extB) {
            return 1;
        }

        if (extA < extB) {
            return -1;
        }

        return a.localeCompare(b);
    },
});

/** https://github.com/webdeveric/webpack-assets-manifest/blob/master/examples/transformed.js */
new WebpackAssetsManifest({
    output: 'transformed-manifest.json',
    transform(assets, manifest) {
        const { name, version } = require('./package.json');

        assets.package = {
            name,
            version,
        };

        const { key, value } = manifest.hooks.customize.call({
            key: 'YourKey',
            value: 'YourValue',
        });

        assets[key] = value;
    },
});
