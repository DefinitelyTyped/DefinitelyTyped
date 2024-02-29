export = PropertyMapper;
declare function PropertyMapper(translateFunction: (arg0: string) => string): void;
declare class PropertyMapper {
    constructor(translateFunction: (arg0: string) => string);
    translateFunction_: (arg0: string) => string;
    private hash_;
    get(obj: any, propertyName: string): any;
    getTranslatedPropertyName(propertyName: string): string;
}
