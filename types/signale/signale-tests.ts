import { Signale, SignaleOptions } from "signale";

// --- Test 1: Basic Usage --- //

const signale = new Signale();

signale.success("Operation successful");
signale.debug("Hello", "from", "L59");
signale.pending("Write release notes for 1.2.0");
signale.fatal(new Error("Unable to acquire lock"));
signale.watch("Recursively watching build directory...");
signale.complete({
    prefix: "[task]",
    message: "Fix issue #59",
    suffix: "(@klauscfhq)"
});

// --- Test 2: Custom Loggers --- //

type CustomLogger = "remind" | "santa";

const optionsCustom: SignaleOptions<CustomLogger> = {
    stream: process.stdout,
    scope: "custom",
    types: {
        remind: {
            badge: "**",
            color: "yellow",
            label: "reminder"
        },
        santa: {
            badge: "🎅",
            color: "red",
            label: "santa"
        }
    }
};

const custom = new Signale(optionsCustom);
custom.remind("Improve documentation.");
custom.santa("Hoho! You have an unused variable on L45.");
custom.debug("This should still work");

// --- Test 3: Overriding Default Loggers --- //

const optionsOverride: SignaleOptions = {
    types: {
        error: {
            badge: "!!",
            color: "red",
            label: "fatal error"
        },
        success: {
            badge: "++",
            color: "green",
            label: "huge success"
        }
    }
};

signale.error("Default Error Log");
signale.success("Default Success Log");

const customOverride = new Signale(optionsOverride);
customOverride.error("Custom Error Log");
customOverride.success("Custom Success Log");

// --- Test 4: Scoped Loggers --- //

const optionsScope: SignaleOptions = {
    scope: "global scope"
};

const global = new Signale(optionsScope);
global.success("Successful Operation");

const global2 = signale.scope("global scope");
global2.success("Hello from the global scope");

function scopedTest() {
    const outer = global2.scope("outer", "scope");
    outer.success("Hello from the outer scope");

    setTimeout(() => {
        const inner = outer.scope("inner", "scope");
        inner.success("Hello from the inner scope");
    }, 500);
}

scopedTest();

// --- Test 5: Timers --- //

signale.time("test");
signale.time();
signale.time();

setTimeout(() => {
    signale.timeEnd();
    signale.timeEnd();
    signale.timeEnd("test");
}, 500);

// --- Test 6: Configuration --- //

// Overrides any existing `package.json` config
signale.config({
    displayFilename: true,
    displayTimestamp: true,
    displayDate: false
});

signale.success("Hello from the Global scope");

function scopedConfigTest() {
    // `fooLogger` inherits the config of `signale`
    const fooLogger = signale.scope("foo scope");

    // Overrides both `signale` and `package.json` configs
    fooLogger.config({
        displayFilename: true,
        displayTimestamp: false,
        displayDate: true
    });

    fooLogger.success("Hello from the Local scope");
}

scopedConfigTest();
