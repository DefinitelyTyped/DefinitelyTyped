import * as TestExclude from "test-exclude";

// @ts-expect-error
new TestExclude(null);
// @ts-expect-error
new TestExclude("non-object");

// $ExpectType TestExclude
new TestExclude();
// $ExpectType TestExclude
new TestExclude({});
// $ExpectType TestExclude
new TestExclude({ cwd: "", exclude: "", excludeNodeModules: false, extension: "", include: "", relativePath: false });
// $ExpectType TestExclude
const exclude = new TestExclude({
    cwd: "",
    exclude: [""],
    excludeNodeModules: false,
    extension: [""],
    include: [""],
    relativePath: false,
});

// $ExpectType Promise<string[]>
exclude.glob();
// $ExpectType Promise<string[]>
exclude.glob("");
// $ExpectType string[]
exclude.globSync();
// $ExpectType string[]
exclude.globSync("");
// @ts-expect-error
exclude.shouldInstrument();
// $ExpectType boolean
exclude.shouldInstrument("");
