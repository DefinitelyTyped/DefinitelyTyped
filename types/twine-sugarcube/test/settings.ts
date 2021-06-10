Setting.addHeader("head"); // $ExpectType void
Setting.addHeader("head", "headDesc"); // $ExpectType void
Setting.addToggle("toggle", {
    label: "a toggle",
    default: false,
    desc: "description",
    onChange() {},
    onInit() {}
});

Setting.addRange("range", {
    label: "a range",
    min: 1,
    max: 2,
    step: 1,
    default: 1,
    desc: "description",
    onChange() {},
    onInit() {}
});

Setting.addList("list", {
    label: "a list",
    list: [1, 2, 3],
    default: 3,
    desc: "description",
});

Setting.addList("list", {
    label: "a list",
    list: [1, 2, 3],
    // @ts-expect-error
    default: "str",
    desc: "description",
});

Setting.load(); // $ExpectType void
Setting.save(); // $ExpectType void
Setting.reset(); // $ExpectType void
Setting.reset("setting_name"); // $ExpectType void

export {};
