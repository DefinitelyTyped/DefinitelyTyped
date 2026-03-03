let requirePeer = codependency.register(module);
let pkg: any;
requirePeer = codependency.register(module, { index: ["dependencies", "devDependencies"] });
requirePeer = codependency.get("some-middleware");
pkg = requirePeer("some-peer-dependency-package");
pkg = requirePeer("some-peer-dependency-package", { optional: true });
pkg = requirePeer("some-peer-dependency-package", { dontThrow: true });
pkg = requirePeer("some-peer-dependency-package", { optional: true, dontThrow: true });
pkg = requirePeer.resolve("peer-package-name");
