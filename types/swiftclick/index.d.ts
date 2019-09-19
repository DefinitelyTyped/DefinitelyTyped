// Type definitions for SwiftClick v1.2.0
// Project: https://github.com/munkychop/swiftclick
// Definitions by: Laurence C <https://github.com/Laurence-C>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface SwiftClickObject {
    addNodeNamesToTrack(nodeNamesArray: string[]): void;
    replaceNodeNamesToTrack(nodeNamesArray: string[]): void;
    useCssParser(useParser: boolean): void;
}

interface SwiftClickStatic {
    attach(contextEl: Element): SwiftClickObject;
}

declare module "swiftclick" {
    export = SwiftClick;
}

declare var SwiftClick: SwiftClickStatic;
