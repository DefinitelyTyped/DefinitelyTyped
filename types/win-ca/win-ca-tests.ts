import ca, { der2 } from "win-ca";

// $ExpectType void
ca({
    store: ["ca"],
    format: der2.x509,
    ondata: (item) => {
        // $ExpectType Certificate
        const value = item;
    }
});
