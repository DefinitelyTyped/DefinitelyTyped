/*
office-runtime
Copyright (c) Microsoft Corporation
*/

OfficeRuntime.storage.getItem("foo").then(value => console.log(value));
OfficeRuntime.storage.getItems(["foo", "bar"]).then(value => console.log(value));

OfficeRuntime.storage.setItem("foo", "bar");
OfficeRuntime.storage.setItems({ foo: "value1", bar: "value2"});

OfficeRuntime.storage.removeItem("foo");
OfficeRuntime.storage.removeItems(["foo", "bar"]);

OfficeRuntime.storage.getKeys();

OfficeRuntime.AsyncStorage.getItem("foo", () => {

    // perform an action
 });
 OfficeRuntime.AsyncStorage.getItem("foo").then(value => console.log(value));

 OfficeRuntime.AsyncStorage.setItem("foo", "bar");
 OfficeRuntime.AsyncStorage.setItem("foo", "bar").then(error => console.log(error));

 OfficeRuntime.AsyncStorage.removeItem("foo");
 OfficeRuntime.AsyncStorage.removeItem("foo", () => {
    // perform an action
 });

 OfficeRuntime.AsyncStorage.getAllKeys().then(keys => {
     keys.forEach(item => console.log(item));
 });

 OfficeRuntime.AsyncStorage.getAllKeys((error, keys) => {
     if (error) {
         console.error(error);
     } else {
         keys.forEach(item => console.log(item));
     }
 });

 OfficeRuntime.AsyncStorage.multiSet(
     [["username", "foo"], ["yearOfBirth", "2001"]],
     errors => {
         errors.filter(error => error != null).forEach(error => console.log(error));
     }
 );

 OfficeRuntime.AsyncStorage.multiRemove(["foo", "bar"]);
 OfficeRuntime.AsyncStorage.multiRemove(["foo", "bar"]).then(value => console.log(value));

 OfficeRuntime.AsyncStorage.multiGet(["username", "yearOfBirth"]).then(
     values => {
         console.log(values[0][1]);
         console.log(values[1][1]);
     }
 );

 OfficeRuntime.displayWebDialog("https://localhost:3000", {
     displayInIFrame: false
 });

 OfficeRuntime.displayWebDialog("https://localhost:3000", {
    onClose: () => {
        console.log("closed");
    }
 });
