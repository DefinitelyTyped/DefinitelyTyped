// Subscribe and publish with no data

amplify.subscribe("nodataexample", function () {
    alert("nodataexample topic published!");
});

// Subscribe and publish with data

amplify.publish("nodataexample");

amplify.subscribe("dataexample", function (data) {
    alert(data.foo); // bar
});


amplify.publish("dataexample", { foo: "bar" });

amplify.subscribe("dataexample2", function (param1, param2) {
    alert(param1 + param2); // barbaz
});

//...

amplify.publish("dataexample2", "bar", "baz");

// Subscribe and publish with context and data

amplify.subscribe("datacontextexample", $("p:first"), function (data) {
    this.text(data.exampleText); // first p element would have "foo bar baz" as text
});

amplify.publish("datacontextexample", { exampleText: "foo bar baz" });

// Subscribe to a topic with high priority

amplify.subscribe("priorityexample", function (data) {
    alert(data.foo);
});

amplify.subscribe("priorityexample", function (data) {
    if (data.foo === "oops") {
        return false;
    }
}, 1);


// Store data with amplify storage picking the default storage technology:

amplify.publish("priorityexample", { foo: "bar" });
amplify.publish("priorityexample", { foo: "oops" });

amplify.store("storeExample1", { foo: "bar" });
amplify.store("storeExample2", "baz");
// retrieve the data later via the key
var myStoredValue = amplify.store("storeExample1"),
    myStoredValue2 = amplify.store("storeExample2"),
    myStoredValues = amplify.store();
myStoredValue.foo; // bar
myStoredValue2; // baz
myStoredValues.storeExample1.foo; // bar
myStoredValues.storeExample2; // baz

// Store data explicitly with session storage

amplify.store.sessionStorage("explicitExample", { foo2: "baz" });
// retrieve the data later via the key
var myStoredValue2 = amplify.store.sessionStorage("explicitExample");
myStoredValue2.foo2; // baz
