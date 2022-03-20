import Env = require("yeoman-environment");
import { Adapter } from "yeoman-environment";
import createLogger = require("yeoman-environment/lib/util/log");
import Generator = require("yeoman-generator");

class TestGenerator extends Generator { }

const env = Env.createEnv();
const versionEnv = Env.createEnvWithVersion("2.9.0", [], {});
env.registerStub(TestGenerator, "test");
env.store.getPath("lint.ruleset");
env.store.setPath("lint.ruleset", "weak");
// $ExpectType object
env.store.createProxy();

/* Logging */
const defaultLogger = createLogger({});
const customLogger = createLogger({
    colors: {
        help: "magenta"
    }
});
createLogger({
    console,
    stderr: process.stdout,
    stdout: process.stderr
});
// $ExpectType Logger<DefaultCategories>
Env.util.log({});

defaultLogger.skip("");
defaultLogger();
defaultLogger("");
customLogger.help("");

/* Lookup */
// $ExpectType string[]
Env.lookupGenerator("");
// $ExpectType string[]
Env.lookupGenerator("", { localOnly: true });
// $ExpectType string[]
Env.lookupGenerator("", { localOnly: true, singleResult: false });
// $ExpectType string[]
Env.lookupGenerator("", { localOnly: true, singleResult: undefined });
// $ExpectType string
Env.lookupGenerator("", { singleResult: true });
// $ExpectType string
env.alias("foo");
// $ExpectType void
env.alias(/^([a-zA-Z0-9:\*]+)$/, "generator-$1");

/* Generators-Creation */
const result = env.create("./lib/generators/app", [], {});
if (result instanceof Generator) {
    result.run();
} else {
    // $ExpectType Error
    result;
}

(async () => {
    await env.run("my-generator", {});
    await env.runGenerator(null as any as Generator);
    await env.start({});
});
