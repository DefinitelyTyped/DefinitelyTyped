export class AttributeGroupHandler {
    constructor(matchRules?: {
        [propName: string]: any;
    });
    addMatchRule(category: string, attributeValue: any): void;
    getCategoryAssignments(): Array<{
        [propName: string]: any;
    }>;
    getValue(category: string): any;
    getValueRamp(): any[];
}
export class ColorAttributeGroupHandler extends AttributeGroupHandler {
    constructor(matchRules?: {
        [propName: string]: any;
    });
    getValueRamp(): string[];
}
export class ShapeAttributeGroupHandler extends AttributeGroupHandler {
    constructor(matchRules?: {
        [propName: string]: any;
    });
    getValueRamp(): string[];
}
