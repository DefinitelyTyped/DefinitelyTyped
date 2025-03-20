import { LocalStorage, localStorage } from "@david-fernando/nodelocalstorage";

const { setItem, getItem, removeItem, key, print, clear }: LocalStorage = localStorage();

setItem("testKey", "testValue").then(() => {
    const value = getItem("testKey");
    if (value !== "testValue") {
        throw new Error("Failure in setItem()/getItem()");
    }
});

if (localStorage().length !== 1) {
    throw new Error("Incorrect Length Property");
}

removeItem("testKey").then(() => {
    if (getItem("testKey") !== undefined) {
        throw new Error("Failure in removeItem()");
    }
});

Promise.all([
    setItem("key1", "value1"),
    setItem("key2", "value2"),
]).then(() => {
    const value = key(0);
    if (value !== "value1") {
        throw new Error("Failure in key()");
    }
});

clear();
if (localStorage().length !== 0) {
    throw new Error("Failure in clear()");
}

print();
