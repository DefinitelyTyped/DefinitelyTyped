declare const defaultExport: {
    $isEmpty: (obj: object) => boolean;
    $isEqual: (a: any, b: any, aStack?: any[], bStack?: any[]) => boolean;
    $isDeepEqual: (a: any, b: any, aStack?: any[], bStack?: any[]) => boolean;
    $has: (obj: object, path: string) => boolean;
    $extend: () => any;
    $copy: <T>(obj: T, deep?: boolean) => T;
    $isPlainObject: (obj: any) => boolean;
    $resolvePath: (route: string, url: string) => string;
    $getParams: (url: string) => object;
    hyphenate: (str: string) => string;
    camelize: (str: string) => string;
};

export default defaultExport;
