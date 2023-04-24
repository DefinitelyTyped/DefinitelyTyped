declare class Base<T> {
    /** 构造参数 */
    options: T;
    /** 设置构造参数 */
    setOptions(options: T): void;
    defaultOptions: T;
    /** 获取构造参数的属性  */
    get(key: string): string | number;
    /** 设置构造参数的属性 */
    set(key: string, value: string | number): void;
    init(options: T): void;
    constructor(arg0: T);
}

export = Base;
