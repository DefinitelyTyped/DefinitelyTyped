export = NavigationTree;
declare function NavigationTree(rootClassKey: any): void;
declare class NavigationTree {
    constructor(rootClassKey: any);
    private classDefManager_;
    rootClassKey: any;
    classe: DataSet;
    ivfs: DataSet;
    ipermission: DataSet;
    accessibleChildren: any;
    alwaysVisibleClasses: number[];
    collection: DataSet;
    private logger_;
    visibilityMode: NavigationTree.VisibilityModes;
    initialize(): void;
    reset: any;
    getVfsVersionByMimeType(classKey: any, mimeTypes: any): number;
    classHasChildren(classKey: any): boolean;
    getNodeVersion(classDef: any): any;
    getSubClassesVersion(classKey: any): number;
    getChildrenVersion(classDef: any): any;
    fillCollection(
        collection: any,
        classDef: any,
        parentNodeId: any,
        mimeType: any,
        levelOrder: any,
        nodeKind: any
    ): void;
    collectProcessesAndLayouts(collection: any, classDef: any, parentNodeId: any): any;
    collectImmediateLevelNavigatableChildren(
        collection: any,
        classDef: any,
        parentNodeId: any
    ): any;
    getChildren(nodeId: any): any;
    modules: {};
    accessibleChildrenMap: {};
    nodeExists(id: string): boolean;
}
declare namespace NavigationTree {
    namespace VisibilityModes {
        const ONLY_THOSE_PERMITTED: number;
        const ANYTHING_IN_PERMITTED_MODULES: number;
        const EVERYTHING: number;
    }
    type VisibilityModes = number;
    namespace CLASS_NODE {
        const type: number;
        const subType: any;
    }
    namespace PROCESS_NODE {
        const type_1: number;
        export { type_1 as type };
        const subType_1: number;
        export { subType_1 as subType };
    }
    namespace LAYOUT_NODE {
        const type_2: number;
        export { type_2 as type };
        const subType_2: number;
        export { subType_2 as subType };
    }
    namespace LINK_NODE {
        const type_3: number;
        export { type_3 as type };
        const subType_3: number;
        export { subType_3 as subType };
    }
    namespace DATASOURCE_NODE {
        const type_4: number;
        export { type_4 as type };
        const subType_4: number;
        export { subType_4 as subType };
    }
    namespace ERROR_NODE {
        const type_5: number;
        export { type_5 as type };
        const subType_5: any;
        export { subType_5 as subType };
    }
    function createEmptyNavigationTreeCollection(): DataSet;
    function obtainVisibilityMode(): number;
}
import DataSet = require('@nginstack/engine/lib/dataset/DataSet.js');
