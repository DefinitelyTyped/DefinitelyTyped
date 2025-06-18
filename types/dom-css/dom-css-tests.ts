import css = require("dom-css");

declare let element: HTMLElement;

// $ExpectType void
css(element, "position", "absolute");

// $ExpectType void
css(element, "font-smoothing", "none");

// $ExpectType void
css(element, {
    // can be camel or dash case
    "background-color": "blue",

    // you can use numbers to auto-"px"
    left: 25,
    top: 0,
    marginTop: 0,
    position: "absolute",

    // certain props will not have "px" added
    opacity: 0.5,
});

// $ExpectType void
css.set(element, "position", "absolute");

// $ExpectType string
css.get(element, "position");

// $ExpectType { left: string; marginTop: string; }
css.get(element, ["left", "marginTop"]);
