import Env = require("yeoman-environment");
import createLogger = require("yeoman-environment/lib/util/log");
import Generator = require("yeoman-generator");

class TestGenerator extends Generator { }

const env = Env.createEnv();
env.registerStub(TestGenerator, "test");
env.store.getPath("lint.ruleset");
env.store.setPath("lint.ruleset", "weak");
// $ExpectType object
env.store.createProxy();

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

defaultLogger.skip("");
// $ExpectError
customLogger.skip("");
customLogger.help("");
