/*
office-runtime
Copyright (c) Microsoft Corporation
*/

OfficeRuntime.storage.getItem("foo");
OfficeRuntime.storage.getItems(["foo", "bar"]);

OfficeRuntime.storage.setItem("foo", "bar");
OfficeRuntime.storage.setItems({ foo: "value1", bar: "value2" });

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

// Check for the support of the requirement-set (note that it only accepts strings.)
const supported = OfficeRuntime.apiInformation.isSetSupported("ExcelApi", "1.9");

// For SSO auth API, refer to the public documentation at the site: https://github.com/OfficeDev/Office-Add-in-NodeJS-SSO
OfficeRuntime.auth.getAccessToken({ allowSignInPrompt: true, forMSGraphAccess: true }).then(token => {
    console.log(token);
});
