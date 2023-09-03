import Observable = require("observ");
import computed = require("observ/computed");
import watch = require("observ/watch");
import GeneratorSource = require("observ/source");

const o1 = Observable("hello");
const o2 = Observable("world");
const o3 = Observable(false);

const test = computed([o1, o2, o3], (o1, o2, o3) => `${o1} ${o2}`);

const removeListener = test(value => {
    // do something
});
watch(test, value => {
    // do something
});
o1.set("hello,");

removeListener();

const o4 = GeneratorSource(value => value, "hi");
