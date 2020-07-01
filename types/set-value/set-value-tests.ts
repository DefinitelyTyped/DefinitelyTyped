import set = require("set-value");

{
    const obj = {};
    set(obj, "a.b.c", "d");
    set({}, "a\\.b.c", "d");
}

{
    const obj = { a: 100 };
    set(obj, "a", 1000);
}
