// Type definitions for html-entities v1.2.0
// Project: https://www.npmjs.com/package/html-entities
// Definitions by: Xavier Stouder <https://github.com/xstoudi/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare abstract class Entities {
    encode(toEncode: string): string;
    encodeNonUTF(toEncode: string): string;
    encodeNonASCII(toEncode: string): string;
    decode(toDecode: string): string;
}
declare class XmlEntities extends Entities { }
declare class Html4Entities extends Entities { }
declare class Html5Entities extends Entities { }
declare class AllHtmlEntities extends Entities { }
