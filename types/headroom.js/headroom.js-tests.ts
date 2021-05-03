import { HeadroomOptions } from "headroom.js";
import Headroom = require("headroom.js");

new Headroom(document.getElementById("siteHead")!);

new Headroom(document.getElementsByClassName("siteHead")[0]);

new Headroom(document.getElementsByClassName("siteHead")[0], {
    tolerance: 34,
});

new Headroom(document.getElementsByClassName("siteHead")[0], {
    classes: {
        bottom: "headroom--bottom",
        frozen: "headeroom--frozen",
        initial: "headroom",
        notBottom: "headroom--not-bottom",
        notTop: "headeroom--not-top",
        pinned: "headeroom--pinned",
        top: "headroom--top",
        unpinned: "headroom--unpinned",
    },
    offset: 500,
});

const header = document.querySelector("header")!;

const headroom = new Headroom(header);
headroom.init();
headroom.freeze();
headroom.pin();
headroom.unpin();
headroom.unfreeze();
headroom.destroy();
Headroom.options; // $ExpectType HeadroomOptions
const options: Partial<HeadroomOptions> = { ...{}, ...Headroom.options };
