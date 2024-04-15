import set = require("set-value");

{
    const obj = {};
    set(obj, "a.b.c", "d");
    set({}, "a\\.b.c", "d");
    set({}, "https://github.com", true);
    set({}, "https://github.com", true, { preservePaths: false });
    set(obj, "auth/userpass/users/bob", "*****", { separator: "/" });
    set(obj, "foo.bar.fez", "zzz", { merge: true });
}

{
    const obj = { a: 100 };
    set(obj, "a", 1000);
}

{
    const split = (input: string) => input;
    const data = {};
    const key1 = Symbol("key-1");
    const key2 = Symbol("key-2");
    const key3 = Symbol("key-3");
    const key4 = Symbol("key-4");

    set(data, "a.b.c", true);
    set(data, "\"a.b\".c", true, { split });
    set(data, "foo-bar", true);
    set(data, ["one", "two"], true);
    set(data, ["one", key1], true);
    set(data, [key2, key3, key4], true);
    set(data, key1, true, { split });
}
