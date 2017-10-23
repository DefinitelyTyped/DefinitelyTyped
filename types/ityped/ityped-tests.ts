import { init } from "ityped";

const config = {
    strings: [
        "Strings!",
    ],
    typeSpeed: 120,
    pause: 500,
    loop: true
};

init("#selector", config);

init("#anotherSelector", {
    loop: false
});

init("#anotherOne", {});
