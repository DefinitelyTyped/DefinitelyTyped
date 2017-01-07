import λ from "apex.js";

const handler = λ(event => {
    console.log("Invoked with event " + JSON.stringify(event));
});
