import λ = require("apex.js");

const handler = λ((event, context) => {
    console.log("Event: " + JSON.stringify(event));
    console.log("Context: " + JSON.stringify(context));

    return {event, context};
});
