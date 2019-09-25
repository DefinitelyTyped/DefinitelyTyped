import amplifier = require("amplifier");

// Copied examples directly from AmplifyJs site

// Subscribe and publish with no data

amplifier.subscribe("nodataexample", () => {
    alert("nodataexample topic published!");
});

// Subscribe and publish with data

amplifier.publish("nodataexample");

amplifier.subscribe("dataexample", (data: any) => {
    alert(data.foo); // bar
});

amplifier.publish("dataexample", { foo: "bar" });

amplifier.subscribe("dataexample2", (param1: any, param2: any) => {
    alert(param1 + param2); // barbaz
});

// ...

amplifier.publish("dataexample2", "bar", "baz");

// Subscribe and publish with context and data

amplifier.subscribe("datacontextexample", $("p:first"), (data: any) => {
    alert(data.exampleText); // first p element would have "foo bar baz" as text
});

amplifier.publish("datacontextexample", { exampleText: "foo bar baz" });

// Subscribe to a topic with high priority

amplifier.subscribe("priorityexample", (data: any) => {
    alert(data.foo);
});

amplifier.subscribe("priorityexample", (data: any) => {
    if (data.foo === "oops") {
        return false;
    }
}, 1);

// Store data with amplify storage picking the default storage technology:

amplifier.publish("priorityexample", { foo: "bar" });
amplifier.publish("priorityexample", { foo: "oops" });

amplifier.store("storeExample1", { foo: "bar" });
amplifier.store("storeExample2", "baz");
// retrieve the data later via the key
const myStoredValue = amplifier.store("storeExample1");
let myStoredValue2 = amplifier.store("storeExample2");
const myStoredValues = amplifier.store();
myStoredValue.foo; // bar
myStoredValue2; // baz
myStoredValues.storeExample1.foo; // bar
myStoredValues.storeExample2; // baz

// Store data explicitly with session storage

amplifier.store.sessionStorage("explicitExample", { foo2: "baz" });
// retrieve the data later via the key
myStoredValue2 = amplifier.store.sessionStorage("explicitExample");
myStoredValue2.foo2; // baz

// REQUEST

// Set up and use a request utilizing Ajax

amplifier.request.define("ajaxExample1", "ajax", {
    url: "/myApiUrl",
    dataType: "json",
    type: "GET"
});

// later in code
amplifier.request("ajaxExample1", (data: any) => {
    data.foo; // bar
});

// Set up and use a request utilizing Ajax and Caching

amplifier.request.define("ajaxExample2", "ajax", {
    url: "/myApiUrl",
    dataType: "json",
    type: "GET",
    cache: "persist"
});

// later in code
amplifier.request("ajaxExample2", (data: any) => {
    data.foo; // bar
});

// a second call will result in pulling from the cache
amplifier.request("ajaxExample2", (data: any) => {
    data.baz; // qux
});

// Set up and use a RESTful request utilizing Ajax

amplifier.request.define("ajaxRESTFulExample", "ajax", {
    url: "/myRestFulApi/{type}/{id}",
    type: "GET"
});

// later in code
amplifier.request("ajaxRESTFulExample",
    {
        type: "foo",
        id: "bar"
    },
    (data: any) => {
        // /myRESTFulApi/foo/bar was the URL used
        data.foo; // bar
    }
);

// POST data with Ajax

amplifier.request.define("ajaxPostExample", "ajax", {
    url: "/myRestFulApi",
    type: "POST"
});

// later in code
amplifier.request("ajaxPostExample",
    {
        type: "foo",
        id: "bar"
    },
    (data: any) => {
        data.foo; // bar
    }
);
// Using data maps

//  When searching Twitter, the key for the search phrase is q.If we want a more descriptive name, such as term, we can use a data map:

amplifier.request.define("twitter-search", "ajax", {
    url: "http://search.twitter.com/search.json",
    dataType: "jsonp",
    dataMap: {
        term: "q"
    }
});

amplifier.request("twitter-search", { term: "amplifyjs" });

// Similarly, we can create a request that searches for mentions, by accepting a username:

amplifier.request.define("twitter-mentions", "ajax", {
    url: "http://search.twitter.com/search.json",
    dataType: "jsonp",
    dataMap: (data: any) => ({ q: "@" + data.user }),
});

amplifier.request("twitter-mentions", { user: "amplifyjs" });

// Setting up and using decoders

// Example:

const appEnvelopeDecoder: amplifier.Decoder = (data: any, status: any, xhr: any, success: any, error: any) => {
    switch (data.status) {
        case "success":
            success(data.data);
            break;
        case "fail":
        case "error":
            error(data.message, data.status);
            break;
        default:
            error(data.message, "fatal");
            break;
    }
};

// a new decoder can be added to the amplifyDecoders interface
declare module "amplifier" {
    interface Decoders {
        appEnvelope: Decoder;
    }
}

amplifier.request.decoders.appEnvelope = appEnvelopeDecoder;

// but you can also just add it via an index
amplifier.request.decoders['appEnvelopeStr'] = appEnvelopeDecoder;

amplifier.request.define("decoderExample", "ajax", {
    url: "/myAjaxUrl",
    type: "POST",
    decoder: "appEnvelope"
});

amplifier.request({
    resourceId: "decoderExample",
    success(data) {
        data.foo; // bar
    },
    error(message: any, level: any) {
        alert("always handle errors with alerts.");
    }
});

// POST with caching and single - use decoder

// Example:

amplifier.request.define("decoderSingleExample", "ajax", {
    url: "/myAjaxUrl",
    type: "POST",
    decoder(data: any, status: any, xhr: any, success: any, error: any) {
        switch (data.status) {
            case "success":
                success(data.data);
                break;
            case "fail":
            case "error":
                error(data.message, data.status);
                break;
            default:
                error(data.message, "fatal");
                break;
        }
    }
});

amplifier.request({
    resourceId: "decoderSingleExample",
    success: (data: any) => {
        data.foo; // bar
    },
    error: (message: any, level: any) => {
        alert("always handle errors with alerts.");
    }
});
// Handling Status
// Status in Success and Error Callbacks

// amplify.request comes with built in support for status.The status parameter appears in the default success or error callbacks when using an ajax definition.

amplifier.request.define("statusExample1", "ajax", {
    // ...
});

amplifier.request({
    resourceId: "statusExample1",
    success: (data: any, status: any) => {
    },
    error: (data: any, status: any) => {
    }
});
