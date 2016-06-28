interface VarDate { }

interface DateConstructor {
    new (vd: VarDate): Date;
    getVarDate: () => VarDate;
}