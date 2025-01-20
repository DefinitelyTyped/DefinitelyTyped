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
