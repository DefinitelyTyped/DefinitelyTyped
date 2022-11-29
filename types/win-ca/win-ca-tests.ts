import ca, { der2 } from "./";

// $ExpectType void
ca({
    store: ["ca"],
    format: der2.x509,
    ondata: (item) => {
        // $ExpectType Certificate
        const value = item;
    }
});
