Frida.version; // $ExpectType string

// $ExpectError
SourceMap;

// $ExpectType (target: any, callback: WeakRefCallback) => number
Script.bindWeak;

// $ExpectType (id: number) => void
Script.unbindWeak;

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

// $ExpectType NativePointer
Memory.alloc(1);
// $ExpectType NativePointer
Memory.alloc(1, {});
// $ExpectType NativePointer
Memory.alloc(1, { near: ptr(1234), maxDistance: 42 });
// $ExpectError
Memory.alloc(1, { near: ptr(1234) });
// $ExpectError
Memory.alloc(1, { maxDistance: 42 });

new NativeCallback(
    (a, b) => {
        return [0, NULL];
    },
    ["int", "pointer"],
    ["pointer", "uint64"],
);

new NativeCallback(
    (a, b) => {
        return 0;
    },
    "uint64",
    [["double", "float", "uchar"], "ssize_t"],
);

const otherPuts = new NativeCallback(
    a => {
        return 0;
    },
    "int",
    ["pointer"],
);

// $ExpectError
new NativeFunction(NULL, "void", "pointer");

// $ExpectType NativeFunction<void, []>
const nf0 = new NativeFunction(NULL, "void", []);
// $ExpectError
nf0({} as any);

// $ExpectType NativeFunction<[number, number], [number | Int64, [number, [NativePointerValue, NativePointerValue]]]>
const nf1 = new NativeFunction(NULL, ["float", "float"], ["int64", ["bool", ["pointer", "pointer"]]]);
// $ExpectType [number, number]
nf1(int64(0), [+false, [NULL, NULL]]);
// $ExpectType [number, number]
nf1(1, [+true, [NULL, ptr(0xbeef)]]);

// $ExpectType NativeFunction<void, [number, ...NativePointerValue[]]>
const nf2 = new NativeFunction(NULL, "void", ["long", "...", "pointer"]);
// $ExpectType void
nf2(34, NULL, nf2, { handle: ptr(0xbeef) });

// $ExpectType NativeFunction<number, [NativePointerValue]>
const puts = new NativeFunction(Module.getExportByName(null, "puts"), "int", ["pointer"]);

// $ExpectType NativePointer
const message = Memory.allocUtf8String("Hello!");

// $ExpectType number
puts.call(otherPuts, message);

// $ExpectType number
puts.apply(otherPuts, [message]);

// $ExpectType number
puts(message);

// $ExpectType SystemFunction<number, [NativePointerValue, number]>
const open = new SystemFunction(Module.getExportByName(null, "open"), "int", ["pointer", "int"]);

const path = Memory.allocUtf8String("/etc/hosts");

// $ExpectType SystemFunctionResult<number>
const result = open(path, 0);

// $ExpectType number
result.value;

// $ExpectType number
(result as UnixSystemFunctionResult<number>).errno;

Interceptor.attach(puts, {
    onEnter(args) {
        // $ExpectType NativePointer[] || InvocationArguments
        args;
    },
    onLeave(retval) {
        // $ExpectType InvocationReturnValue
        retval;
    },
});

Interceptor.flush();

const ccode = `
#include <gum/gumstalker.h>

extern void on_interesting_event (const GumEvent * event);

void
process (const GumEvent * event,
         GumCpuContext * cpu_context,
         gpointer user_data)
{
  if (event->type == GUM_CALL && cpu_context->rdi == 0x1234)
    on_interesting_event (event);
}
`;
const symbols: CSymbols = {
    // $ExpectType NativeCallback<"void", ["pointer"]>
    on_interesting_event: new NativeCallback(e => {}, "void", ["pointer"]),
};
const cm = new CModule(ccode);
const cm2 = new CModule(ccode, symbols, {});
const cm3 = new CModule(ccode, {}, { toolchain: "any" });
const cm4 = new CModule(ccode, {}, { toolchain: "internal" });
const cm5 = new CModule(ccode, {}, { toolchain: "external" });
// $ExpectError
const cmE = new CModule(ccode, {}, { toolchain: "nope" });

const precompiledSharedLibrary = new ArrayBuffer(4 * Process.pageSize);
const cm6 = new CModule(precompiledSharedLibrary);

// $ExpectType CModuleBuiltins
CModule.builtins;
// $ExpectType CModuleDefines
CModule.builtins.defines;
// $ExpectType CModuleHeaders
CModule.builtins.headers;

Stalker.follow(Process.getCurrentThreadId(), {
    events: {
        compile: true,
        call: true,
        ret: true
    },
    onEvent: cm.process,
    data: ptr(42)
});

const basicBlockStartAddress = ptr("0x400000");
Stalker.invalidate(basicBlockStartAddress);
Stalker.invalidate(Process.getCurrentThreadId(), basicBlockStartAddress);

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
    // $ExpectType void
    Java.deoptimizeBootImage();

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
