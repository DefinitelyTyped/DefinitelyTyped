import Splitting = require("splitting");
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

// Base splitting function

Splitting();
Splitting({});
Splitting({
    target: ".target",
    by: "chars",
    key: "foo",
});

Splitting({ key: null });

Splitting({ target: document.createElement("span") });
Splitting({ target: [document.createElement("span")] });
Splitting({ target: document.querySelectorAll(".target") });

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
