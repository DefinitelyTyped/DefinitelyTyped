import align from "align-text";

function centerAlign(len: number, longest: number) {
    return Math.floor((longest - len) / 2);
}

const text = ["abc", "abc", "abc"];
align(text, centerAlign);
