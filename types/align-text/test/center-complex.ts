import align from "align-text";

function centerAlign(len: number, longest: number) {
    return {
        character: "\t",
        indent: Math.floor((longest - len) / 2),
        prefix: "~ "
    };
}

const text = ["abc", "abc", "abc"];
align(text, centerAlign);
