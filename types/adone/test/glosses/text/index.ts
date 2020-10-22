namespace adoneTests.text {
    const {
        text
    } = adone;

    let str: string;
    let regExp: RegExp;
    let bool: boolean;
    let num: number;

    namespace escape {
        const {
            escape
        } = text;

        str = escape.regExpPattern("asd");
        str = escape.regExpReplacement("asd");
        str = escape.format("asd");
        str = escape.shellArg("asd");
        str = escape.control("sad");
        str = escape.htmlSpecialChars("asd");
    }

    namespace regexp {
        const {
            regexp
        } = text;

        str = regexp.array2alternatives(["a"]);
    }

    str = text.escapeStringRegexp("asd");
    str = text.toCamelCase("asd");
    str = text.camelCaseToDashed("asd");
    regExp = text.endLineRegExp;
    str = text.splitLines("a")[0];
    str = text.regExpIndexOf("a", /ads/);
    str = text.regExpIndexOf("a", /ads/, 1);
    str = text.stripAnsi("ad");
    bool = text.hasAnsi("asd");
    str = text.random(100);
    str = text.detectNewLine("asd");
    str = text.wordwrap("ads", 10)[0];
    str = text.wordwrap("ads", 10, { join: true });
    str = text.wordwrap("ads", 10, { countAnsiEscapeCodes: true });
    str = text.wordwrap("ads", 10, { mode: "hard" });
    num = text.stringDistance("as", "ds");
    num = text.stringDistance("as", "ds", [[1]]);
    num = text.stringDistanceCapped("a", "b", 10);
    str = text.capitalize("asd");
    str = text.capitalizeWords("asd");
    num = text.width("asd");
    str = text.indent("asd", 10);
    str = text.stripEof("asd");
    str = text.stripLastCRLF("asd");
    str = text.stripBOM("ads");
    num = text.toUTF8Array("asd")[0];
}
