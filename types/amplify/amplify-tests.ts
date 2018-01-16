import amplify = require("amplify");

// Copied examples directly from AmplifyJs site

// Subscribe and publish with no data

amplify.subscribe("nodataexample", () => {
    alert("nodataexample topic published!");
});

// Subscribe and publish with data

amplify.publish("nodataexample");

amplify.subscribe("dataexample", data => {
    alert(data.foo); // bar
});

amplify.publish("dataexample", { foo: "bar" });

amplify.subscribe("dataexample2", (param1, param2) => {
    alert(param1 + param2); // barbaz
});

// ...

amplify.publish("dataexample2", "bar", "baz");

// Subscribe and publish with context and data

amplify.subscribe("datacontextexample", $("p:first"), data => {
    this.text(data.exampleText); // first p element would have "foo bar baz" as text
});

amplify.publish("datacontextexample", { exampleText: "foo bar baz" });

// Subscribe to a topic with high priority

amplify.subscribe("priorityexample", data => {
    alert(data.foo);
});

amplify.subscribe("priorityexample", data => {
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
const myStoredValue = amplify.store("storeExample1");
let myStoredValue2 = amplify.store("storeExample2");
const myStoredValues = amplify.store();
myStoredValue.foo; // bar
myStoredValue2; // baz
myStoredValues.storeExample1.foo; // bar
myStoredValues.storeExample2; // baz

// Store data explicitly with session storage

amplify.store.sessionStorage("explicitExample", { foo2: "baz" });
// retrieve the data later via the key
myStoredValue2 = amplify.store.sessionStorage("explicitExample");
myStoredValue2.foo2; // baz

// REQUEST

// Set up and use a request utilizing Ajax

amplify.request.define("ajaxExample1", "ajax", {
    url: "/myApiUrl",
    dataType: "json",
    type: "GET"
});

// later in code
amplify.request("ajaxExample1", data => {
    data.foo; // bar
});

// Set up and use a request utilizing Ajax and Caching

amplify.request.define("ajaxExample2", "ajax", {
    url: "/myApiUrl",
    dataType: "json",
    type: "GET",
    cache: "persist"
});

// later in code
amplify.request("ajaxExample2", data => {
    data.foo; // bar
});

// a second call will result in pulling from the cache
amplify.request("ajaxExample2", data => {
    data.baz; // qux
});

// Set up and use a RESTful request utilizing Ajax

amplify.request.define("ajaxRESTFulExample", "ajax", {
    url: "/myRestFulApi/{type}/{id}",
    type: "GET"
});

// later in code
amplify.request("ajaxRESTFulExample",
    {
        type: "foo",
        id: "bar"
    },
    data => {
        // /myRESTFulApi/foo/bar was the URL used
        data.foo; // bar
    }
    );

// POST data with Ajax

amplify.request.define("ajaxPostExample", "ajax", {
    url: "/myRestFulApi",
    type: "POST"
});

// later in code
amplify.request("ajaxPostExample",
    {
        type: "foo",
        id: "bar"
    },
    data => {
        data.foo; // bar
    }
    );
// Using data maps

//  When searching Twitter, the key for the search phrase is q.If we want a more descriptive name, such as term, we can use a data map:

amplify.request.define("twitter-search", "ajax", {
    url: "http://search.twitter.com/search.json",
    dataType: "jsonp",
    dataMap: {
        term: "q"
    }
});

amplify.request("twitter-search", { term: "amplifyjs" });

// Similarly, we can create a request that searches for mentions, by accepting a username:

amplify.request.define("twitter-mentions", "ajax", {
    url: "http://search.twitter.com/search.json",
    dataType: "jsonp",
    dataMap: data => ({ q: "@" + data.user }),
});

amplify.request("twitter-mentions", { user: "amplifyjs" });

// Setting up and using decoders

// Example:

const appEnvelopeDecoder: amplify.Decoder = (data, status, xhr, success, error) => {
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
declare module "amplify" {
    interface Decoders {
        appEnvelope: Decoder;
    }
}

amplify.request.decoders.appEnvelope = appEnvelopeDecoder;

// but you can also just add it via an index
amplify.request.decoders['appEnvelopeStr'] = appEnvelopeDecoder;

amplify.request.define("decoderExample", "ajax", {
    url: "/myAjaxUrl",
    type: "POST",
    decoder: "appEnvelope"
});

amplify.request({
    resourceId: "decoderExample",
    success(data) {
        data.foo; // bar
    },
    error(message, level) {
        alert("always handle errors with alerts.");
    }
});

// POST with caching and single - use decoder

// Example:

amplify.request.define("decoderSingleExample", "ajax", {
    url: "/myAjaxUrl",
    type: "POST",
    decoder(data, status, xhr, success, error) {
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

amplify.request({
    resourceId: "decoderSingleExample",
    success: data => {
        data.foo; // bar
    },
    error: (message, level) => {
        alert("always handle errors with alerts.");
    }
});
// Handling Status
// Status in Success and Error Callbacks

// amplify.request comes with built in support for status.The status parameter appears in the default success or error callbacks when using an ajax definition.

amplify.request.define("statusExample1", "ajax", {
    // ...
});

amplify.request({
    resourceId: "statusExample1",
    success: (data, status) => {
    },
    error: (data, status) => {
    }
});
