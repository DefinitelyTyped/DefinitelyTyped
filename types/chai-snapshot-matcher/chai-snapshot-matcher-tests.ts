import chai = require('chai');

const { expect } = chai;
const context: Mocha.Context = <any> {};

expect('foo').to.matchSnapshot(context);
expect('foo').to.matchSnapshot(context, 'hint');

expect('foo').to.matchSpecificSnapshot(context);
expect('foo').to.matchSpecificSnapshot(context, { hint: "(hint)" });
expect('foo').to.matchSpecificSnapshot(context, { name: "snapshot with a specific name" });
expect('foo').to.matchSpecificSnapshot(context, { folder: "Examples" });
expect('foo').to.matchSpecificSnapshot(context, { snapshotPath: "/Users/my.user/Downloads/MySnapshots/" });
expect('foo').to.matchSpecificSnapshot(context, {
    hint: "(hint)",
    name: "snapshot with a specific name",
    folder: "Examples",
    snapshotPath: "/Users/my.user/Downloads/MySnapshots/"
});
