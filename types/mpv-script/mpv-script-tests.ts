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

// command_native 14: wrong options with `def`
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

// The test is not completed because there are about 2*2*2*3*((1/3)*1+(2/3)*(1+1*3))=72 cases
// Choice 1 (Forced): 2 cases (forced or not forced)
// Choice 2 (Key): 2 cases (`string` or `undefined`)
// Choice 3 (Name): 2 cases (specified or not specified)
// Choice 4 (Complex): 3 cases (`true`, `false`, or not specified)
// Choice 5 (Flags): 2 cases (specified or not specified)
// Choice 6 (Repeatable): 3 cases (`true`, `false`, or not specified), but only exist when the flags is specified
// $ExpectType void
mp.add_key_binding(
    "Ctrl+a",
    "uncomplex_repeatable",
    () => {
        dump("uncomplex, repeatable");
    },
    { repeatable: true },
);

// $ExpectType void
mp.add_key_binding(
    "Ctrl+b",
    "uncomplex_non_repeatable0",
    () => {
        dump("uncomplex, non-repeatable0");
    },
    { repeatable: false },
);

// $ExpectType void
mp.add_key_binding(
    "Ctrl+c",
    "uncomplex_non_repeatable1",
    () => {
        dump("uncomplex, non-repeatable1");
    },
    {},
);

// $ExpectType void
mp.add_key_binding("Ctrl+d", "uncomplex_non_repeatable2", () => {
    dump("uncomplex, non-repeatable2");
});

// $ExpectType void
mp.add_key_binding(
    "Ctrl+e",
    "complex",
    (table: mp.UserInputCommand) => {
        dump("complex");
        dump("   ", table);
    },
    { complex: true },
);

// @ts-expect-error
mp.add_key_binding(
    "Ctrl+f",
    "complex_nonsence",
    (table: mp.UserInputCommand) => {
        dump("complex, nonsense");
        dump("   ", table);
    },
    { complex: true, repeatable: true }, // see also the comment for `ComplexKeyBindingFlags`
);

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
