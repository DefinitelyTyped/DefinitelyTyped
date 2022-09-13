export = MenuInput;
declare function MenuInput(name: any, type: any): void;
declare class MenuInput {
    constructor(name: any, type: any);
    name: any;
    type: any;
    nodeId: any;
    order: number;
    size: number;
    cssClassName: string;
    placeholder: string;
    toHtml(): string;
}
