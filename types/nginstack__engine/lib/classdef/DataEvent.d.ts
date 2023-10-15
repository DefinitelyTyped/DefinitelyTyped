export = DataEvent;
declare function DataEvent(...args: any[]): void;
declare class DataEvent {
    constructor(...args: any[]);
    data: DataSet;
}
declare namespace DataEvent {
    export { DataSet };
}
type DataSet = import('../dataset/DataSet');
