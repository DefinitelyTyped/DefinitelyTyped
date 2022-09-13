export interface DataModel {
    idGen: number;
    generateId: () => number;
    nodes: any[];
    links: any[];
    getRootNode: () => any;
}
