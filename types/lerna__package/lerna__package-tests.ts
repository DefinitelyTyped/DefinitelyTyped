import { Package, RawManifest } from '@lerna/package';
import { resolve } from 'npm-package-arg';

const testRawManifest: RawManifest = {
    name: 'package',
    version: '1.2.3',
};

// Test Package constructor variants
new Package(testRawManifest, './');
const testPackage = new Package(testRawManifest, './location', './lerna/root');
Package.lazy('./package.json', './location');
Package.lazy(testRawManifest, './location');
Package.lazy(testPackage, './location');

testPackage.updateLocalDependency(testPackage.resolved, '1.2.4', 'v');

const packageVersion: string = testPackage.get('version');
/**
 * Test if unknown item is cast to any
 */
const unknownItem: number = testPackage.get('unknown');
const deps: Record<string, string> | undefined = testPackage.get('dependencies');

testPackage
    .set('version', '1.5.2')
    // test if set command is chainable
    .set('name', 'new name');
testPackage.set('unknown', 1245);
const package2: Promise<Package> = testPackage.serialize();
const package3: Promise<Package> = testPackage.refresh();

const testResult = resolve('a', 'b');
testPackage.updateLocalDependency(testResult, '1.2.4', 'v');
