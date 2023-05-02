type FontInfo = {
  copyright?: string
  fontFamily?: string
  fontSubfamily?: string
  ID?: string
  fullName?: string
  version?: string
  postScriptName?: string
  trademark?: string
  manufacturer?: string
  designer?: string
  description?: string
  urlVendor?: string
  urlDesigner?: string
  licence?: string
  licenceURL?: string
  typoFamilyName?: string
  typoSubfamilyName?: string
  compatibleFull?: string
  sampleText?: string
  postScriptCID?: string
  wwsFamilyName?: string
  wwsSubfamilyName?: string
  lightPalette?: string
  darkPalette?: string
  preferredFamily?: string
  preferredSubfamily?: string
}

declare class FontName {
  parse(buffer: ArrayBuffer): FontInfo[]
}

declare module 'fontname' {
  const _default: FontName;
  export default _default;
}