// Tests are re-used based on `delegated-events`'s flow tests.
// https://github.com/dgraham/delegated-events/blob/master/test/test-flow.js

import { on, off, fire } from "delegated-events";

function onButtonClick(event: Event) {
    event.target;
}

on("click"); // $ExpectError
on("click", ".js-button"); // $ExpectError
on("click", ".js-button", onButtonClick); // $ExpectType void

off("click"); // $ExpectError
off("click", ".js-button"); // $ExpectError
off("click", ".js-button", onButtonClick); // $ExpectType void

// $ExpectType void
on("robot:singularity", ".js-robot-image", (event: Event) => {
    event.target;
});

const image = document.querySelector(".js-button");

if (image) {
    fire(image); // $ExpectError
    fire(image, "robot:singularity"); // $ExpectType boolean
    fire(image, "robot:singularity", { name: "Hubot" }); // $ExpectType boolean
}
