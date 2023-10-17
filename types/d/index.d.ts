export = d;

declare function d(value: any, options?: PropertyDescriptor): PropertyDescriptor;
declare function d(flags: d.Flags, value: any, options?: PropertyDescriptor): PropertyDescriptor;

declare namespace d {
    function gs(flags: GetSetFlags, options: PropertyDescriptor): PropertyDescriptor;
    function gs(flags: GetSetFlags, get: (...args: any[]) => any, options: PropertyDescriptor): PropertyDescriptor;
    function gs(
        get: (...args: any[]) => any,
        set?: ((...args: any[]) => any) | null,
        options?: PropertyDescriptor,
    ): PropertyDescriptor;
    function gs(
        get: ((...args: any[]) => any) | null | undefined,
        set: (...args: any[]) => any,
        options?: PropertyDescriptor,
    ): PropertyDescriptor;
    function gs(
        flags: GetSetFlags,
        get: (...args: any[]) => any,
        set?: ((...args: any[]) => any) | null,
        options?: PropertyDescriptor,
    ): PropertyDescriptor;
    function gs(
        flags: GetSetFlags,
        get: ((...args: any[]) => any) | null | undefined,
        set: (...args: any[]) => any,
        options?: PropertyDescriptor,
    ): PropertyDescriptor;

    type GetSetFlags = "c" | "e" | "ce";
    type Flags = GetSetFlags | "w" | "cw" | "ew" | "cew";
}
