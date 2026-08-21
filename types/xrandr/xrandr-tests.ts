import { parser } from "xrandr";

const result = parser(``);

const displays = Object.keys(result);
displays.forEach((_display) => {
    const display = result[_display];

    display.connected; // $ExpectType boolean
    display.rotation; // $ExpectType "normal" | "left" | "right" | "inverted"
    display.position.x; // $ExpectType number
    display.position.y; // $ExpectType number

    display.modes.forEach((mode) => {
        mode.width; // $ExpectType number
        mode.height; // $ExpectType number
        mode.rate; // $ExpectType number
        if (mode.native !== undefined) {
            mode.native; // $ExpectType boolean
        }
        if (mode.current !== undefined) {
            mode.current; // $ExpectType boolean
        }
        if (mode.interlaced !== undefined) {
            mode.interlaced; // $ExpectType boolean
        }
    });
});
