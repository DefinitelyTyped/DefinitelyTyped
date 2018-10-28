import fs from "fs";
import _ from "lodash";
import path from "path";

export function readFile(filePath: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            try {
                resolve(data);
            } catch (e) {
                reject(e);
            }
        });
    });
}

let lineBreak = "\n";

/** Gets the correct line break for the current OS (git for windows will generally convert \n to \r\n during checkout) */
export async function getLineBreak(): Promise<string> {
    const tsconfigPath = path.join("..", "tsconfig.json");
    const tsconfigFile = await readFile(tsconfigPath);
    lineBreak = _.find(["\r\n", "\n", "\r"], x => tsconfigFile.includes(x)) || "\n";
    return lineBreak;
}

export function getLineNumber(fileContents: string, index: number) {
    return fileContents.substring(0, index).split(/\r\n|\n|\r/g).length + 1;
}

export function tab(s: string, count: number) {
    const prepend: string = " ".repeat(count * 4);
    return (s[0] === "\n" || s[0] === "\r" ? "" : prepend) + s.replace(/(?:\r\n|\n|\r)(.)/g, `${lineBreak}${prepend}$1`);
}
