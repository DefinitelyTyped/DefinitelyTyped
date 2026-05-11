declare class C3DTBatchTableHierarchyExtension {
    constructor(json: object); // TODO

    classes: any; // TODO
    inverseHierarchy: any; // TODO
    instancesIdxs: Array<{ // TODO
        classId: any;
        instanceIdx: any;
    }>;
    getInfoById(featureId: number): any; // TODO
}

export default C3DTBatchTableHierarchyExtension;
