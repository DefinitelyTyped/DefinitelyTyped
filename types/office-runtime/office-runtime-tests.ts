/*
office-runtime
Copyright (c) Microsoft Corporation
*/

OfficeRuntime.storage.getItem("foo");
OfficeRuntime.storage.getItems(["foo", "bar"]);

OfficeRuntime.storage.setItem("foo", "bar");
OfficeRuntime.storage.setItems({ foo: "value1", bar: "value2"});

OfficeRuntime.storage.removeItem("foo");
OfficeRuntime.storage.removeItems(["foo", "bar"]);

OfficeRuntime.storage.getKeys();

 OfficeRuntime.displayWebDialog("https://localhost:3000", {
     displayInIFrame: false
 });

 OfficeRuntime.displayWebDialog("https://localhost:3000", {
    onClose: () => {
        console.log("closed");
    }
 });
