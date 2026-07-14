// @ts-expect-error
mp.commandv("subprocess", "foo", "bar"); // subprocess can only be invoked by named arguments

// $ExpectType null | undefined
mp.command_native(["print-text", "test"]);

// $ExpectType null | "def"
mp.command_native(["print-text", "test"], "def");

// $ExpectType SubprocessResultBase
mp.command_native({
    name: "subprocess",
    args: ["echo", "test"],
});

// $ExpectType "def" | null
mp.command_native({
    name: "non-exist command",
    text: "foo",
}, "def");

// $ExpectType SubprocessResultWithStderr
mp.command_native({
    name: "subprocess",
    args: ["echo", "test"],
    capture_stderr: true,
});

// $ExpectType SubprocessResultWithStdout
mp.command_native({
    name: "subprocess",
    args: ["echo", "test"],
    capture_stdout: true,
});

// $ExpectType SubprocessResultWithStd
mp.command_native({
    name: "subprocess",
    args: ["echo", "test"],
    capture_stdout: true,
    capture_stderr: true,
});

// @ts-expect-error
mp.command_native({});

// might return undefined on fail
const res = mp.command_native_async({
    name: "subprocess",
    args: ["echo", "test"],
});
// @ts-expect-error
mp.abort_async_command(res);
if (res) mp.abort_async_command(res);
// @ts-expect-error
mp.abort_async_command({});

mp.command_native_async({
    name: "subprocess",
    args: ["echo", "test"],
}, function(ok, res, err) {
    // $ExpectType SubprocessResultBase
    var r = res;
});

mp.command_native_async({
    name: "subprocess",
    args: ["echo", "test"],
}, function(ok, res, err) {
    // $ExpectType SubprocessResultBase
    var r = res;
});

mp.command_native_async({
    name: "subprocess",
    args: ["echo", "test"],
    capture_stdout: true,
}, function(ok, res, err) {
    // $ExpectType SubprocessResultWithStdout
    var r = res;
});

mp.command_native_async({
    name: "subprocess",
    args: ["echo", "test"],
    capture_stderr: true,
}, function(ok, res, err) {
    // $ExpectType SubprocessResultWithStderr
    var r = res;
});

mp.command_native_async({
    name: "subprocess",
    args: ["echo", "test"],
    capture_stdout: true,
    capture_stderr: true,
}, function(ok, res, err) {
    // $ExpectType SubprocessResultWithStd
    var r = res;
});

// Function passed to register_event can be passed to unregister_event
function onEvent() {}
// @ts-expect-error
mp.register_event("test", onEvent);
mp.register_event("file-loaded", function(e) {
    // $ExpectType "file-loaded"
    var event = e.event;
});
mp.register_event("end-file", function(e) {
    // $ExpectType number
    var id = e.playlist_entry_id;
});
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

// $ExpectType unknown
mp.get_property_native("filename");
// $ExpectType unknown
mp.get_property_native("filename", "foo.mp4");

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

// $ExpectType __IntervalId
const interval_id = setInterval(
    function(foo, bar) {
        // $ExpectType string
        const a = foo;
        // $ExpectType number
        const b = bar;
    },
    1000,
    "foo",
    1,
);

// @ts-expect-error
clearInterval(100);

// $ExpectType __TimeoutId
const timeout_id = setTimeout(
    function(foo, bar) {
        // $ExpectType string
        const a = foo;
        // $ExpectType number
        const b = bar;
    },
    1000,
    "foo",
    1,
);

// @ts-expect-error
clearTimeout(interval_id);

clearTimeout(timeout_id);

mp.options.read_options({ foo: "bar", bar: "foo" }, "foobar", function(list) {
    // $ExpectType true | undefined
    var foo_updated = list.foo;
    // $ExpectType true | undefined
    var bar_updated = list.bar;
});
