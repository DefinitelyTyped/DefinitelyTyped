/// <reference types="knockout" />

interface KnockoutMapper {
    fromJS(value: any, options?: any, target?: any, wrap?: boolean): any;
    toJS(value: any, options?: any): any;
}

interface KnockoutStatic {
    mapper: KnockoutMapper;
}
