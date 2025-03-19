import { localStorage } from "./index";

localStorage().setItem("testKey", "testValue").then(() => {
  const value = localStorage().getItem("testKey");
  if (value !== "testValue") {
    throw new Error("Failure in setItem()/getItem()");
  }
});

if (localStorage().length !== 1) {
  throw new Error("Incorrect Length Property");
}

localStorage().removeItem("testKey").then(() => {
  if (localStorage().getItem("testKey") !== undefined) {
    throw new Error("Failure in removeItem()");
  }
});

Promise.all([
  localStorage().setItem("key1", "value1"),
  localStorage().setItem("key2", "value2")
]).then(() => {
  const value = localStorage().key(0);
  if (value !== "value1") {
    throw new Error("Failure in key()");
  }
});

localStorage().clear();
if (localStorage().length !== 0) {
  throw new Error("Failure in clear()");
}

localStorage().print();
