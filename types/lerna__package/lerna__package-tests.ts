import { Package, RawManifest } from '@lerna/package';

const testRawManifest: RawManifest = {
    name: 'package',
    version: '1.2.3'
};

// Test Package constructor variants
new Package(testRawManifest, './');
const testPackage = new Package(testRawManifest, './location', './lerna/root');
Package.lazy('./package.json', './location');
Package.lazy(testRawManifest, './location');
Package.lazy(testPackage, './location');

testPackage.updateLocalDependency(testPackage.resolved, '1.2.4', 'v');
