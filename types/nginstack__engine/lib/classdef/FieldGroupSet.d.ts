export = FieldGroupSet;
declare function FieldGroupSet(): void;
declare class FieldGroupSet {
    items: any;
    add(fieldGroup: import('@nginstack/engine/lib/classdef/FieldGroup')): void;
    private _find;
    findByName(name: string): import('@nginstack/engine/lib/classdef/FieldGroup');
    assign(obj: FieldGroupSet): void;
    clone(): FieldGroupSet;
}
