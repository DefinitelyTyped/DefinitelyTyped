import { dlopen, DynamicLibrary, getInt32, setInt32, toString, types } from "node:ffi";

{
    using handle = dlopen("./mylib.so", {
        add_i32: { arguments: ["i32", "i32"], return: "i32" },
    });
    // $ExpectType number
    handle.functions.add_i32(20, 22);
    // @ts-expect-error function type should be computed as (number, number) => number
    handle.functions.add_i32(20n, 22n);
}

{
    const { lib, functions } = dlopen("./mylib.so", {
        add_i32: { arguments: ["i32", "i32"], return: "i32" },
        string_length: { arguments: ["pointer"], return: "u64" },
    });

    const add_i32 = functions.add_i32;
    // $ExpectType number
    add_i32(20, 22);

    const string_length = functions.string_length;
    // $ExpectType bigint
    string_length("abc");

    lib.close();
}

{
    using lib = new DynamicLibrary("./mylib.so");

    const add = lib.getFunction("add_i32", {
        arguments: [types.INT_32, types.INT_32],
        return: types.INT_32,
    });
    // $ExpectType number
    add(20, 22);
    // $ExpectType bigint
    add.pointer;

    let callback: bigint;
    callback = lib.registerCallback(
        { arguments: ["i32"], return: "i32" },
        (value) => value * 2,
    );
    callback = lib.registerCallback(() => {});
}

{
    const ptr = 0n;
    setInt32(ptr, 0, 42);
    getInt32(ptr, 0); // $ExpectType number

    toString(ptr); // $ExpectType string | null
}
