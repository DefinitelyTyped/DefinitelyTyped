import rest = require("restler");

rest.get("http://google.com").on("complete", function(result) {
    if (result instanceof Error) {
        console.log("Error:", result.message);
        this.retry(5000); // try again after 5 sec
    } else {
        console.log(result);
    }
});

rest.get("http://twaud.io/api/v1/users/danwrong.json").on("complete", function(data) {
    console.log(data[0].message); // auto convert to object
});

rest.get("http://twaud.io/api/v1/users/danwrong.xml").on("complete", function(data) {
    console.log(data[0].sounds[0].sound[0].message); // auto convert to object
});

rest.get("http://someslowdomain.com", { timeout: 10000 }).on("timeout", function(ms) {
    console.log("did not return within " + ms + " ms");
}).on("complete", function(data, response) {
    console.log("did not time out");
});

rest.post("http://user:pass@service.com/action", {
    data: { id: 334 },
}).on("complete", function(data, response) {
    if (response.statusCode == 201) {
        // you can get at the raw response like this...
    }
});

// post JSON with no options
var jsonData = { id: 334 };
rest.postJson("http://example.com/action", jsonData).on("complete", function(data, response) {
    // handle response
});

// put JSON with no options
var jsonData = { id: 334 };
rest.putJson("http://example.com/action", jsonData).on("complete", function(data, response) {
    // handle response
});

// post JSON with options
var jsonData = { id: 334 };
var options = { query: {"api-version": "1.0"}};
rest.postJson("http://example.com/action", jsonData, options).on("complete", function(data, response) {
    // handle response
});

// put JSON with options
var jsonData = { id: 334 };
var options = { query: {"api-version": "1.0"}};
rest.putJson("http://example.com/action", jsonData, options).on("complete", function(data, response) {
    // handle response
});
