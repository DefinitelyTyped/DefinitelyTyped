import Splitting = require("splitting");
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

// Base splitting function

Splitting(); // $ExpectType Result[]
Splitting({}); // $ExpectType Result[]
Splitting({ // $ExpectType Result[]
    target: ".target",
    by: "chars",
    key: "foo",
});

// $ExpectType Result[]
Splitting({ key: null });

Splitting({ target: document.createElement("span") }); // $ExpectType Result[]
Splitting({ target: [document.createElement("span")] });  // $ExpectType Result[]
Splitting({ target: document.querySelectorAll(".target") }); // $ExpectType Result[]

// HTML function

// @ts-expect-error
Splitting.html();
// @ts-expect-error
Splitting.html({});

Splitting.html({ content: "<span>ABC</span>" });
Splitting.html({
    content: "<span>ABC</span>",
    by: "chars",
    key: "foo",
});

// Add function

// @ts-expect-error
Splitting.add();

Splitting.add({
    by: "plugin",
    key: "foo",
    depends: [],
    split() {
        return [];
    },
});
