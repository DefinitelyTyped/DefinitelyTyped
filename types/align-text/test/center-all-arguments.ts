import align from "align-text";

function centerAlign(len: number, longest: number, line: string, lines: string[], idx: number) {
    return {
        character: "\t",
        indent: Math.floor((longest - len) / 2),
        prefix: "~ ",
        line,
        lines,
        idx,
    };
}

const text = ["abc", "abc", "abc"];
align(text, centerAlign);
