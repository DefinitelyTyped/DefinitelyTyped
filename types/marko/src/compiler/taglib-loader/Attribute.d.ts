export default class Attribute {
    type: string | null;
    key: string;
    filePath: string;
    ref?: string;
    name?: string;
    preserveName?: string;
    targetProperty: string | null;
    defaultValue: string;
    pattern?: any;
    setFlag: string | null;
    setContextFlag: string;
    required: boolean;
    ignore: boolean;
    dynamicAttribute: boolean;
    allowExpressions: boolean;
    removeDashes: boolean;
    autocomplete: boolean;
    html: boolean;
    deprecated: any;
    enum: any;
}
