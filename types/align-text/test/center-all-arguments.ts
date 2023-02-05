import align from "align-text";

function centerAlign(len: number, longest: number, line: string, lines: string[], idx: number) {
    console.log(line);
    console.log(lines);
    console.log(idx);
    return {
        character: "\t",
        indent: Math.floor((longest - len) / 2),
        prefix: "~ "
    };
}

const text = ["abc", "abc", "abc"];
align(text, centerAlign);
