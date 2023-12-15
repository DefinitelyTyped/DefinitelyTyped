import Libhoney = require("libhoney");

const honey = new Libhoney({
    dataset: "test",
    writeKey: "api-key",
});

honey.add({
    "eventName": "foo",
    "dynamicField": () => 1,
}).newEvent().send();

honey.sendNow({
    "eventName": "bar",
});
