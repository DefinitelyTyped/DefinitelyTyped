Frida.version; // $ExpectType string

const otherPuts = new NativeCallback(() => {
    return 0;
}, "int", ["pointer"]);

const puts = new NativeFunction(Module.getExportByName(null, "puts"), "int", ["pointer"]);

// $ExpectType NativeFunction
puts;

const message = Memory.allocUtf8String("Hello!");

// $ExpectType NativePointer
message;

// $ExpectType NativeReturnValue
puts.call(otherPuts, message);

// $ExpectType NativeReturnValue
puts.apply(otherPuts, [message]);

// $ExpectType NativeReturnValue
puts(message);

const open = new SystemFunction(Module.getExportByName(null, "open"), "int", ["pointer", "int"]);

// $ExpectType SystemFunction
open;

const path = Memory.allocUtf8String("/etc/hosts");
const result = open(path, 0) as UnixSystemFunctionResult;

// $ExpectType NativeReturnValue
result.value;

// $ExpectType number
result.errno;

Interceptor.attach(puts, {
    onEnter(args) {
        // $ExpectType NativePointer[] || InvocationArguments
        args;
    },
    onLeave(retval) {
        // $ExpectType InvocationReturnValue
        retval;
    }
});

const obj = new ObjC.Object(ptr("0x42"));

// $ExpectType Object
obj;

Java.enumerateClassLoadersSync()
    .forEach(classLoader => {
        // $ExpectType ClassFactory
        const factory = Java.ClassFactory.get(classLoader);
        // $ExpectType Wrapper
        factory.use("java.lang.String");
    });
