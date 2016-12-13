/// <reference path="index.d.ts" />
/// <reference types="node" />

let requirePeer = codependency.register(module), package: any;
    requirePeer = codependency.register(module, {index: ["dependencies", "devDependencies"]});
    requirePeer = codependency.get("some-middleware");
    package = requirePeer("some-peer-dependency-package");
    package = requirePeer("some-peer-dependency-package", {optional: true});
    package = requirePeer("some-peer-dependency-package", {dontThrow: true});
    package = requirePeer("some-peer-dependency-package", {optional: true, dontThrow: true});
    package = requirePeer.resolve("peer-package-name");