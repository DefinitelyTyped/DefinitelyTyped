// @ts-expect-error
mp.commandv("subprocess", "foo", "bar"); // subprocess can only be invoked by named arguments

// $ExpectType null | undefined
mp.command_native(["print-text", "test"]);

// $ExpectType null | "def"
mp.command_native(["print-text", "test"], "def");

// $ExpectType string
mp.command_native(["normalize-path", "foo/bar"]);

// $ExpectType string
mp.command_native({
    name: "normalize-path",
    filename: "foo/bar",
});

// $ExpectType string
mp.command_native({
    name: "expand-path",
    text: "foo",
});

// $ExpectType SubprocessResultBase
mp.command_native({
    name: "subprocess",
    args: ["echo", "test"],
});

// $ExpectType "def" | null
mp.command_native({
    name: "print-text",
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
    name: "expand-path",
    text: "foo",
}, function(ok, res, err) {
    // $ExpectType string
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

// $ExpectType string
mp.get_property("playlist", "default");
// optional boolean property should return "yes" | "no" | undefined
// $ExpectType "yes" | "no" | undefined
mp.get_property("ao-mute");
// optional number property should return string | undefined
// $ExpectType `${number}` | undefined
mp.get_property("time-pos");
// optional string property should return string | undefined
// $ExpectType string | undefined
mp.get_property("filename");
// boolean property always presented should return "yes" | "no"
// $ExpectType "yes" | "no"
mp.get_property("fullscreen");
// string property always presented should return string
// $ExpectType string
mp.get_property("audio-device");
// number property always presented should return string
// $ExpectType `${number}`
mp.get_property("playlist-pos");
// an unknown property returns string | undefined
// $ExpectType string | undefined
mp.get_property("foo");
// a property with string | number should return string as string is the super type of `${number}`
// $ExpectType string
mp.get_property("stream-open-filename");
// $ExpectType string | 123
mp.get_property("foo", 123);

// $ExpectType string
mp.get_property_osd("playlist", "default");
// optional boolean property should return "yes" | "no" | undefined
// $ExpectType "yes" | "no" | undefined
mp.get_property_osd("ao-mute");
// optional number property should return string | undefined
// $ExpectType `${number}:${number}:${number}` | undefined
mp.get_property_osd("time-pos");
// optional string property should return string | undefined
// $ExpectType string | undefined
mp.get_property_osd("filename");
// boolean property always presented should return "yes" | "no"
// $ExpectType "yes" | "no"
mp.get_property_osd("fullscreen");
// string property always presented should return string
// $ExpectType string
mp.get_property_osd("audio-device");
// number property always presented should return string
// $ExpectType `${number}`
mp.get_property_osd("playlist-pos");
// an unknown property returns string | undefined
// $ExpectType string | undefined
mp.get_property_osd("foo");
// $ExpectType string | 123
mp.get_property_osd("foo", 123);

// $ExpectType boolean
mp.get_property_bool("playback-abort", false);
// boolean property always presented should return boolean
// $ExpectType boolean
mp.get_property_bool("fullscreen");
// optional boolean property should return boolean | undefined
// $ExpectType boolean | undefined
mp.get_property_bool("ao-mute");
// an unknown property returns boolean | undefined
// $ExpectType boolean | undefined
mp.get_property_bool("foo");
// $ExpectType boolean | "yes or no"
mp.get_property_bool("foo", "yes or no");

// number property always presented should return number
// $ExpectType number
mp.get_property_number("playlist-pos");
// optional number property should return number | undefined
// $ExpectType number | undefined
mp.get_property_number("file-size");
// a possibly number property with mixed cases("no" | "always" | number) returns number | undefined
// $ExpectType number | undefined
mp.get_property_number("cursor-autohide");
// $ExpectType number | "foo"
mp.get_property_number("cursor-autohide", "foo");
// an unknown property returns number | undefined
// $ExpectType number | undefined
mp.get_property_number("foo");
// $ExpectType number
mp.get_property_number("foo", -1);
// $ExpectType number | 'bar'
mp.get_property_number("foo", "bar");

// native property always presented should return native
// $ExpectType ChapterListItem[]
mp.get_property_native("chapter-list");
// optional native property should return native | undefined
// $ExpectType SubprocessResultWithStd | undefined
mp.get_property_native("user-data/mpv/ytdl/json-subprocess-result");
// $ExpectType -1 | (SubprocessResultWithStdout & SubprocessResultWithStderr)
mp.get_property_native("user-data/mpv/ytdl/json-subprocess-result", -1); // it's quirky that SubprocessResultWithStd is not the same as the intersection for eslint
// an unknown property returns unknown
// $ExpectType unknown
mp.get_property_native("foo");
// $ExpectType {} | -1
mp.get_property_native("foo", -1); // it has {} because NonNullable<unknown> is {} which is a non-null unknown

// @ts-expect-error
mp.set_property("fullscreen", "yes and no");
// @ts-expect-error
mp.set_property_native("chapter-list", "foo");
mp.set_property_bool("fullscreen", true);
mp.set_property_number("time-pos", 5);

mp.observe_property("chapter-list", "native", (name, value) => {
    // $ExpectType ChapterListItem[]
    value = value;
});
mp.observe_property("test", "bool", (name, value) => {
    // $ExpectType boolean | undefined
    value = value;
});

// "time-pos" is never a boolean
mp.observe_property("time-pos", "bool", (name, value) => {
    // $ExpectType undefined
    value = value;
});

// "fullscreen" is never a number
mp.observe_property("fullscreen", "number", (name, value) => {
    // $ExpectType undefined
    value = value;
});

mp.observe_property("fullscreen", "string", (name, value) => {
    // $ExpectType "yes" | "no"
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

// $ExpectType IntervalId
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

// $ExpectType TimeoutId
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
