export = FieldGroup;
declare function FieldGroup(name: string, ...args: any[]): void;
declare class FieldGroup {
    constructor(name: string, ...args: any[]);
    private name_;
    label: string;
    id: number;
    name: string;
    parent: string;
    private css;
    collapsed: boolean;
    private setFieldsProperties;
    private reservedWords;
    private parseStylePropertyName;
    private getStyleText;
    stringify(): string;
    private toString;
    private order;
    private createId_;
    assign(obj: FieldGroup): void;
    clone(): FieldGroup;
}
