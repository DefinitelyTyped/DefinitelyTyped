Frida.version; // $ExpectType string

// $ExpectType NativePointer
const p = ptr(1234);

// $ExpectType number
p.toInt32();
// $ExpectType number
p.toUInt32();

// $ExpectType NativePointer
p.sign();
// $ExpectType NativePointer
p.sign("ia", 42);
// $ExpectError
p.sign("invalid", 42);

// $ExpectType NativePointer
p.strip();
// $ExpectType NativePointer
p.strip("ia");
// $ExpectError
p.strip("invalid");

// $ExpectType NativePointer
p.blend(1337);
// $ExpectError
p.blend(ptr(42));
// $ExpectError
p.blend();

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

Interceptor.flush();

const cm = new CModule(`
#include <gum/gumstalker.h>

void
process (const GumEvent * event,
         GumCpuContext * cpu_context,
         gpointer user_data)
{
}
`);

Stalker.follow(Process.getCurrentThreadId(), {
    events: {
        compile: true,
        call: true,
        ret: true
    },
    onEvent: cm.process,
    data: ptr(42)
});

const obj = new ObjC.Object(ptr("0x42"));

// $ExpectType Object
obj;

const b = new ObjC.Block(ptr(0x1234));
b.declare({ retType: "void", argTypes: ["int"] });
b.declare({ types: "v12@?0i8" });

Java.enumerateClassLoadersSync()
    .forEach(classLoader => {
        // $ExpectType ClassFactory
        const factory = Java.ClassFactory.get(classLoader);
        interface Props {
            myMethod: Java.MethodDispatcher;
            myField: Java.Field<number>;
        }
        // $ExpectType Wrapper<Props>
        const MyJavaClass = factory.use<Props>("my.java.class");
        // $ExpectError
        factory.use<{ illegal: string }>("");
        // $ExpectType string
        MyJavaClass.$className;
        // $ExpectType MethodDispatcher<Props>
        MyJavaClass.myMethod;
        // $ExpectType Wrapper<Props>
        MyJavaClass.myMethod.holder;
        // $ExpectType Wrapper<Props>
        MyJavaClass.myMethod.holder.myField.holder.myMethod.holder;
        MyJavaClass.myMethod.implementation = function(...args) {
            // $ExpectType MethodDispatcher<Props>
            this.myMethod;
            // $ExpectType Field<number, Props>
            this.myField;
            // $ExpectType number
            this.myField.value;
        };
        // $ExpectType Wrapper<Props>
        Java.retain(MyJavaClass);
        interface AnotherProps {
            anotherMethod: Java.MethodDispatcher;
            anotherField: Java.Field<string>;
        }
        const MyAnotherJavaClass = factory.use<AnotherProps>("my.another.java.class");
        // $ExpectType Wrapper<AnotherProps>
        Java.cast(MyJavaClass, MyAnotherJavaClass);
    });

Java.perform(() => {
    Java.enumerateMethods("*!*game*/i").forEach(group => {
        const factory = Java.ClassFactory.get(group.loader);
        group.classes.forEach(klass => {
            const C = factory.use(klass.name);
            klass.methods.forEach(methodName => {
                const method: Java.MethodDispatcher = C[methodName];
                method.implementation = function(...args) {
                    return method.apply(this, args);
                };
            });
        });
    });
});
