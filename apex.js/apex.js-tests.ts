import λ from "apex.js";

const handler = λ((event: any) => {
    console.log("Invoked with event " + JSON.stringify(event));
});
