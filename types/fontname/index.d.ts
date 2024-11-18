declare module "fontname" {
    interface FontNameData {
        postScriptName: string
        family: string
        style: string
        fullName: string
        version: string
    }

    interface FontName {
        parse(buffer: ArrayBuffer): FontNameData[]
    }

    const FontName: FontName
    export default FontName
}
