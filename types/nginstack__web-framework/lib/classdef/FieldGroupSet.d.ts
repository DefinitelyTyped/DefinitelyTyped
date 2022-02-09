export = FieldGroupSet;
declare function FieldGroupSet(): void;
declare class FieldGroupSet {
    items: any;
    add(fieldGroup: any): void;
    private _find;
    findByName(name: string): any;
    assign(obj: any): void;
    clone(): FieldGroupSet;
}
