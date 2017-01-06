import λ from "apex.js";

const handler = λ(e => {
    console.log("Invoked with event " + JSON.stringify(e));
});
