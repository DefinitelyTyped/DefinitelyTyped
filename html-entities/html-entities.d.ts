// Type definitions for html-entities v1.2.0
// Project: https://www.npmjs.com/package/html-entities
// Definitions by: Xavier Stouder <https://github.com/xstoudi/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "html-entities" {
    abstract class Entities {
        encode(toEncode: string): string;
        encodeNonUTF(toEncode: string): string;
        encodeNonASCII(toEncode: string): string;
        decode(toDecode: string): string;
    }
    class XmlEntities extends Entities {}
    class Html4Entities extends Entities {}
    class Html5Entities extends Entities {}
    class AllHtmlEntities extends Entities {}
}