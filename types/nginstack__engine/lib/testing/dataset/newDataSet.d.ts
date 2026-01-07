export = newDataSet;
declare function newDataSet(fields: FieldObj[]): DataSet;
declare namespace newDataSet {
    export { FieldObj };
}
import DataSet = require('../../dataset/DataSet.js');
interface FieldObj {
    name: string;
    type: string;
    string?: number;
}
