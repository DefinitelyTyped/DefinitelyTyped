// command_native 1: Array parameter without `def`, expecting null when not occurring error or undefine on error
// $ExpectType null | undefined
mp.command_native(["print-text", "test"]);

// command_native 2: Array parameter with `def`, expecting null when not occurring error or `typeof def` on error
// $ExpectType null | "def"
mp.command_native(["print-text", "test"], "def");

// command_native 3: UnnamedCommandOpts without `def`, expecting undefined
// $ExpectType undefined
mp.command_native({ args: ["echo", "test"] });

// command_native 4: UnnamedCommandOpts with `def`, expecting `def` type
// $ExpectType "def"
mp.command_native({ args: ["echo", "test"] }, "def");

// command_native 5: UncapturedNamedCommandOpts without `def`, expecting UncapturedProcess return type
// $ExpectType UncapturedProcess
mp.command_native({ name: "echo", args: ["echo", "test"] });

// command_native 6: UncapturedNamedCommandOpts with `def`, expecting UncapturedProcess return type
// $ExpectType UncapturedProcess
mp.command_native({ name: "echo", args: ["echo", "test"] }, "def");

// command_native 7: NamedCommandOptsWithStdout without `def`, expecting ProcessWithStdout return type
// $ExpectType ProcessWithStdout
mp.command_native({ name: "echo", args: ["echo", "test"], capture_stdout: true });

// command_native 8: NamedCommandOptsWithStdout with `def`, expecting ProcessWithStdout return type
// $ExpectType ProcessWithStdout
mp.command_native({ name: "echo", args: ["echo", "test"], capture_stdout: true }, "def");

// command_native 9: NamedCommandOptsWithStderr without `def`, expecting ProcessWithStderr return type
// $ExpectType ProcessWithStderr
mp.command_native({ name: "echo", args: ["echo", "test"], capture_stderr: true });

// command_native 10: NamedCommandOptsWithStderr with `def`, expecting ProcessWithStderr return type
// $ExpectType ProcessWithStderr
mp.command_native({ name: "echo", args: ["echo", "test"], capture_stderr: true }, "def");

// command_native 11: CapturedNamedCommandOpts without `def`, expecting CapturedProcess return type
// $ExpectType CapturedProcess
mp.command_native({ name: "echo", args: ["echo", "test"], capture_stdout: true, capture_stderr: true });

// command_native 12: CapturedNamedCommandOpts with `def`, expecting CapturedProcess return type
// $ExpectType CapturedProcess
mp.command_native({ name: "echo", args: ["echo", "test"], capture_stdout: true, capture_stderr: true }, "def");

// command_native 13: wrong options without `def`
// @ts-expect-error
mp.command_native({});

// command_native 13: wrong options with `def`
// @ts-expect-error
mp.command_native({}, "def");

// result from command_native_async can be passed to abort_async_command
const res = mp.command_native_async([], () => {});
mp.abort_async_command(res);

// Function passed to register_event can be passed to unregister_event
function onEvent() {}
mp.register_event("test", onEvent);
mp.unregister_event(onEvent);

// Function passed to observe_property can be passed to unobserve_property
function onPropertyChanged() {}
mp.observe_property("test", "native", onPropertyChanged);
mp.unobserve_property(onPropertyChanged);

// Function passed to register_idle can be passed to unregister_idle
function onIdle() {}
mp.register_idle(onIdle);
mp.unregister_idle(onIdle);

// $ExpectType string | undefined
mp.get_property("test");
// $ExpectType string
mp.get_property("test", "default");

// $ExpectType boolean | undefined
mp.get_property_bool("test");
// $ExpectType boolean
mp.get_property_bool("test", false);

// $ExpectType number | undefined
mp.get_property_number("test");
// $ExpectType number
mp.get_property_number("test", 0);

mp.observe_property("test", "native", (name, value) => {
    // $ExpectType unknown
    value = value;
});
mp.observe_property("test", "bool", (name, value) => {
    // $ExpectType boolean | undefined
    value = value;
});
mp.observe_property("test", "string", (name, value) => {
    // $ExpectType string | undefined
    value = value;
});
mp.observe_property("test", "number", (name, value) => {
    // $ExpectType number | undefined
    value = value;
});
mp.observe_property("test", "none", name => {});
// @ts-expect-error
mp.observe_property("test", "none", (name, value) => {});
// @ts-expect-error
mp.observe_property("test", undefined, (name, value) => {});

// $ExpectType OSDSize | undefined
const osd_size = mp.get_osd_size();
if (osd_size) {
    // $ExpectType number | undefined
    osd_size.width;
    // $ExpectType number | undefined
    osd_size.height;
    // $ExpectType number | undefined
    osd_size.aspect;
}
