// Type definitions for Microsoft JScript extensions
// Project: https://msdn.microsoft.com/en-us/library/yek4tbz0(v=vs.84).aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

//These will become unnecessary with the next version of Typescript

interface VarDate { }

interface DateConstructor {
    new (vd: VarDate): Date;
}

interface Date {
    getVarDate: () => VarDate;
}