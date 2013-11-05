/// <reference path="amplifyjs.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />

// Copied examples directly from AmplifyJs site

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


// REQUEST

// Set up and use a request utilizing Ajax


amplify.request.define("ajaxExample1", "ajax", {
    url: "/myApiUrl",
    dataType: "json",
    type: "GET"
});

// later in code
amplify.request("ajaxExample1", function (data) {
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
amplify.request("ajaxExample2", function (data) {
    data.foo; // bar
});

// a second call will result in pulling from the cache
amplify.request("ajaxExample2", function (data) {
    data.baz; // qux
})

// Set up and use a RESTful request utilizing Ajax

amplify.request.define("ajaxRESTFulExample", "ajax", {
    url: "/myRestFulApi/{type}/{id}",
    type: "GET"
})

// later in code
amplify.request("ajaxRESTFulExample",
    {
        type: "foo",
        id: "bar"
    },
    function (data) {
        // /myRESTFulApi/foo/bar was the URL used
        data.foo; // bar
    }
    );

// POST data with Ajax

amplify.request.define("ajaxPostExample", "ajax", {
        url: "/myRestFulApi",
        type: "POST"
    })

// later in code
amplify.request("ajaxPostExample",
    {
        type: "foo",
        id: "bar"
    },
    function (data) {
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

amplify.request("twitter-search", { term: "amplifyjs" } );

// Similarly, we can create a request that searches for mentions, by accepting a username:

    amplify.request.define("twitter-mentions", "ajax", {
        url: "http://search.twitter.com/search.json",
        dataType: "jsonp",
        dataMap: function (data) {
            return {
                q: "@" + data.user
            };
        }
    });

amplify.request("twitter-mentions", { user: "amplifyjs" });

// Setting up and using decoders

//Example:

amplify.request.decoders.appEnvelope =
function (data, status, xhr, success, error) {
    if (data.status === "success") {
        success(data.data);
    } else if (data.status === "fail" || data.status === "error") {
        error(data.message, data.status);
    } else {
        error(data.message, "fatal");
    }
};

amplify.request.define("decoderExample", "ajax", {
    url: "/myAjaxUrl",
    type: "POST",
    decoder: "appEnvelope"
});

amplify.request({
    resourceId: "decoderExample",
    success: function (data) {
        data.foo; // bar
    },
    error: function (message, level) {
        alert("always handle errors with alerts.");
    }
});

// POST with caching and single - use decoder

// Example:

amplify.request.define("decoderSingleExample", "ajax", {
    url: "/myAjaxUrl",
    type: "POST",
    decoder: function (data, status, xhr, success, error) {
        if (data.status === "success") {
            success(data.data);
        } else if (data.status === "fail" || data.status === "error") {
            error(data.message, data.status);
        } else {
            error(data.message, "fatal");
        }
    }
});

amplify.request({
    resourceId: "decoderSingleExample",
    success: function (data) {
        data.foo; // bar
    },
    error: function (message, level) {
        alert("always handle errors with alerts.");
    }
});
// Handling Status
// Status in Success and Error Callbacks

// amplify.request comes with built in support for status.The status parameter appears in the default success or error callbacks when using an ajax definition.

    amplify.request.define("statusExample1", "ajax", {
        //...
    });

 amplify.request({
    resourceId: "statusExample1",
    success: function (data, status) {
    },
    error: function (data, status) {
    }
});

