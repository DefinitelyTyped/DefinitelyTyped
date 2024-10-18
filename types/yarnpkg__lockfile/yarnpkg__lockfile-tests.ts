import { FirstLevelDependency, parse, stringify } from "@yarnpkg/lockfile";

function testFirstLevelDependency(obj: FirstLevelDependency) {}

const file = "";
const parseResult = parse(file);
const fileAgain = stringify(parseResult);
fileAgain.toLowerCase();

if (parseResult.type === "merge" || parseResult.type === "success") {
    Object.entries(parseResult.object).forEach(([key, value]) => {
        key.toLowerCase();
        value.version.toLowerCase();
        const _isResolved = typeof value.resolved === "string";
        const _hasDependencies = Object.keys(value.dependencies ?? {}).length > 0;

        testFirstLevelDependency(value);
    });
}
