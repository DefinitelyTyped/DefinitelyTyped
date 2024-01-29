import Arborist = require("@npmcli/arborist");

const arb = new Arborist({
    path: "/path/to/package/root",
    registry: "https://registry.npmjs.org",
    "@foo:registry": "https://registry.foo.com/",
    token: "deadbeefcafebad",
    _authToken: "deadbeefcafebad",
    auth: "aXNhYWNzOm5vdCBteSByZWFsIHBhc3N3b3Jk",
    username: "isaacs",
    password: "bm90IG15IHJlYWwgcGFzc3dvcmQ=",
    "//registry.foo.com:token": "blahblahblah",
    "//basic.auth.only.foo.com:_auth": "aXNhYWNzOm5vdCBteSByZWFsIHBhc3N3b3Jk",
    "//registry.foo.com:always-auth": true,
    progress: true,
    formatPackageLock: true,
});

arb.loadActual().then(tree => {
    tree; // $ExpectType Node
});

arb.loadVirtual().then(tree => {
    tree; // $ExpectType Node
});

arb.buildIdealTree({}).then(tree => {
    tree; // $ExpectType Node
});

arb.reify({
    save: true,
}).then(() => {});

// root-level
arb.loadActual().then(async tree => {
    // query all production dependencies
    const results = await tree.querySelectorAll(".prod");
    console.log(results);
});

// iterative
arb.loadActual().then(async tree => {
    // query for the deduped version of react
    const results = await tree.querySelectorAll("#react:not(:deduped)");
    // query the deduped react for git deps
    const deps = await results[0].querySelectorAll(":type(git)");
    console.log(deps);
});
