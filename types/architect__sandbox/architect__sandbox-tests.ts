import * as sandbox from "@architect/sandbox";

sandbox.start().then(() => {});
sandbox.start({}).then(() => {});
sandbox.start({ quiet: true }).then(() => {});
sandbox.start({ port: 4444 }).then(() => {});
sandbox.start({ cwd: "./idk/arc/" }).then(() => {});
sandbox.start({ logLevel: "normal" }).then(() => {});
sandbox.start({ symlink: true }).then(() => {});
sandbox.start({}, () => {});

sandbox.end().then(() => {});
sandbox.end(() => {});

// events
sandbox.events.start().then(() => {});
sandbox.events.start({}).then(() => {});
sandbox.events.start({ quiet: true }).then(() => {});
sandbox.events.start({ port: 4444 }).then(() => {});
sandbox.events.start({}, () => {});

sandbox.events.end().then(() => {});
sandbox.events.end(() => {});

// http
sandbox.http.start().then(() => {});
sandbox.http.start({}).then(() => {});
sandbox.http.start({ quiet: true }).then(() => {});
sandbox.http.start({ port: 4444 }).then(() => {});
sandbox.http.start({}, () => {});

sandbox.http.end().then(() => {});
sandbox.http.end(() => {});

// tables
sandbox.tables.start().then(() => {});
sandbox.tables.start({}).then(() => {});
sandbox.tables.start({ quiet: true }).then(() => {});
sandbox.tables.start({ port: 4444 }).then(() => {});
sandbox.tables.start({}, () => {});

sandbox.tables.end().then(() => {});
sandbox.tables.end(() => {});
