import vuePlugin = require("vue-template-es2015-compiler");

// $ExpectType string
vuePlugin("");

// $ExpectType string
vuePlugin("", {});

// $ExpectType string
vuePlugin("", {
    objectAssign: "",
});

// $ExpectType string
vuePlugin("", {
    transforms: {},
    objectAssign: "",
});

// $ExpectType string
vuePlugin("", {
    transforms: {
        modules: true,
        stripWith: true,
        stripWithFunctional: true,
    },
    objectAssign: "",
});

// $ExpectType string
vuePlugin("", {
    transforms: undefined,
    objectAssign: undefined,
});

// $ExpectType string
vuePlugin("", {
    transforms: {
        modules: undefined,
        stripWith: undefined,
        stripWithFunctional: undefined,
    },
    objectAssign: undefined,
});
