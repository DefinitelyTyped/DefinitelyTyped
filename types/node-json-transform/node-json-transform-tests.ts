import { transform } from "node-json-transform";

// Using transform method to convert the given json to expected json
transform({
    text: "hello"
}, {
    item: {
        message: "text"
    }
}); // Result: { message: "hello" }
