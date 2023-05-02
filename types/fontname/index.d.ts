// Type definitions for fontname 1.0
// Project: https://github.com/danbovey/fontname
// Definitions by: Arystan Kaliakparov <https://github.com/arys>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface FontInfo {
  copyright?: string;
  fontFamily?: string;
  fontSubfamily?: string;
  ID?: string;
  fullName?: string;
  version?: string;
  postScriptName?: string;
  trademark?: string;
  manufacturer?: string;
  designer?: string;
  description?: string;
  urlVendor?: string;
  urlDesigner?: string;
  licence?: string;
  licenceURL?: string;
  typoFamilyName?: string;
  typoSubfamilyName?: string;
  compatibleFull?: string;
  sampleText?: string;
  postScriptCID?: string;
  wwsFamilyName?: string;
  wwsSubfamilyName?: string;
  lightPalette?: string;
  darkPalette?: string;
  preferredFamily?: string;
  preferredSubfamily?: string;
}

declare class FontName {
  parse(buffer: ArrayBuffer): FontInfo[];
}
declare const _default: FontName;
export default _default;
