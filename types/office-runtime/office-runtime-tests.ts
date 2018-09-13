/*
office-runtime
Copyright (c) Microsoft Corporation
*/

OfficeRuntime.AsyncStorage.getItem("foo", () => {
   //perform an action
})
OfficeRuntime.AsyncStorage.getItem("foo").then(value => console.log(value))

OfficeRuntime.AsyncStorage.setItem("foo", "bar");
OfficeRuntime.AsyncStorage.setItem("foo", "bar").then(error => console.log(error)) 

OfficeRuntime.AsyncStorage.removeItem("foo"); 
OfficeRuntime.AsyncStorage.removeItem("foo", () => {
   //perform an action
})

OfficeRuntime.AsyncStorage.clear();
OfficeRuntime.AsyncStorage.clear(() => {
    //perform an action
})

OfficeRuntime.AsyncStorage.getAllKeys().then(keys => {
    keys.forEach(item => console.log(item));
})
OfficeRuntime.AsyncStorage.getAllKeys((error, keys) => {
    if (error) {
        console.error(error); 
    } else {
        keys.forEach(item => console.log(item));
    }
})

OfficeRuntime.AsyncStorage.multiSet(
    [["username", "foo"], ["yearOfBirth", "2001"]], 
    errors => {
        errors.filter(error => error != null).forEach(error => console.log(error));
    }
)

OfficeRuntime.AsyncStorage.multiRemove(["foo", "bar"]); 
OfficeRuntime.AsyncStorage.multiRemove(["foo", "bar"]).then(value => console.log(value))

OfficeRuntime.AsyncStorage.multiGet(["username", "yearOfBirth"]).then(
    values => {
        console.log(values[0][1])
        console.log(values[1][1])
    }
)


OfficeRuntime.displayWebDialog("https://localhost:3000", { 
    height: '50', 
    width: '50%',
    displayInIFrame: false,
    hideTitle: true, 
        onMessage: (message, dialog) => { 
            console.log(message); 
             dialog.close(); 
        } 
    }
)


OfficeRuntime.displayWebDialog("https://localhost:3000", {
   onClose: () => {
       console.log("closed"); 
   }
})

OfficeRuntime.displayWebDialog("https://localhost:3000", {
    onRuntimeError: (error, dialog) => {
        console.log(error); 
        dialog.close();
    }
})
