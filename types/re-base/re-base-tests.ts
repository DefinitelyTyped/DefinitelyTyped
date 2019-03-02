import * as rebase from "re-base";

const database = {};
const base = rebase.createClass(database);
const bar = {};

const _ref = base.syncState("foo", {
    context: bar,
    state: "foo"
});
