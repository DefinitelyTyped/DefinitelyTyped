import * as align from "align-text";

function centerAlign(
    len: number,
    longest: number,
    line: string,
    lines: string[]
) {
    return Math.floor((longest - len) / 2);
}

const text = ["abc", "abc", "abc"];
align(text, centerAlign);
