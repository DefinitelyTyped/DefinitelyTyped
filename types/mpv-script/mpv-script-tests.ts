// result from command_native_async can be passed to abort_async_command
const res = mp.command_native_async([], () => {});
mp.abort_async_command(res);

// Function passed to register_event can be passed to unregister_event
function onEvent() {}
mp.register_event('test', onEvent);
mp.unregister_event(onEvent);

// Function passed to observe_property can be passed to unobserve_property
function onPropertyChanged() {}
mp.observe_property('test', 'native', onPropertyChanged);
mp.unobserve_property(onPropertyChanged);

// Function passed to register_idle can be passed to unregister_idle
function onIdle() {}
mp.register_idle(onIdle);
mp.unregister_idle(onIdle);

// $ExpectType string | undefined
mp.get_property('test');
// $ExpectType string
mp.get_property('test', 'default');

// $ExpectType boolean | undefined
mp.get_property_bool('test');
// $ExpectType boolean
mp.get_property_bool('test', false);

// $ExpectType number | undefined
mp.get_property_number('test');
// $ExpectType number
mp.get_property_number('test', 0);

mp.observe_property('test', 'native', (name, value) => {
    // $ExpectType unknown
    value = value;
});
mp.observe_property('test', 'bool', (name, value) => {
    // $ExpectType boolean | undefined
    value = value;
});
mp.observe_property('test', 'string', (name, value) => {
    // $ExpectType string | undefined
    value = value;
});
mp.observe_property('test', 'number', (name, value) => {
    // $ExpectType number | undefined
    value = value;
});
mp.observe_property('test', 'none', name => {});
// $ExpectError
mp.observe_property('test', 'none', (name, value) => {});
// $ExpectError
mp.observe_property('test', undefined, (name, value) => {});

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
