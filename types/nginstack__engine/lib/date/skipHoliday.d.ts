export = skipHoliday;
declare function skipHoliday(dt: Date, uf: number, localidade: number, holidays?: DataSet): Date;
declare namespace skipHoliday {
    export { DataSet };
}
type DataSet = import('../dataset/DataSet');
