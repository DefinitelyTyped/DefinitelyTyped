import foregroundChild = require("foreground-child");

declare const args: string[];

foregroundChild("program");
foregroundChild("program", done => done());
foregroundChild("program", async () => {});
foregroundChild("program", async _done => {});

foregroundChild(["program", "some", "args"]);
foregroundChild(["program", "some", "args"], done => done());
foregroundChild(["program", "some", "args"], async () => {});
foregroundChild(["program", "some", "args"], async _done => {});

foregroundChild("program", "some", "args");
foregroundChild("program", "some", "args", done => done());
foregroundChild("program", "some", "args", async () => {});
foregroundChild("program", "some", "args", async _done => {});

foregroundChild("program", args);
foregroundChild("program", args, done => done());
foregroundChild("program", args, async () => {});
foregroundChild("program", args, async _done => {});

foregroundChild("program", ["some", "args"]);
foregroundChild("program", ["some", "args"], done => done());
foregroundChild("program", ["some", "args"], async () => {});
foregroundChild("program", ["some", "args"], async _done => {});

foregroundChild("program", [...args, "some", "args"]);
foregroundChild("program", [...args, "some", "args"], done => done());
foregroundChild("program", [...args, "some", "args"], async () => {});
foregroundChild("program", [...args, "some", "args"], async _done => {});
