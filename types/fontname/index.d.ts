interface FontNameData {
    postScriptName: string;
    family: string;
    style: string;
    fullName: string;
    version: string;
}

interface FontName {
    parse(buffer: ArrayBuffer): FontNameData[];
}

declare const FontName: FontName;
export = FontName;
export as namespace FontName;
