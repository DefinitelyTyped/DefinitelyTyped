export = newDataSet;
declare function newDataSet(fields: FieldObj[]): DataSet;
declare namespace newDataSet {
    export { FieldObj };
}
interface FieldObj {
    name: string;
    type: string;
    string?: number;
}
import DataSet = require('../../dataset/DataSet.js');
