import * as DataSource from '@nginstack/datasource/lib/DataSource';
import * as DataSourceFilters from '@nginstack/datasource/lib/DataSourceFilters';
import * as DataSourceColumns from '@nginstack/datasource/lib/DataSourceColumns';
import * as DataSourceColumnDef from '@nginstack/datasource/lib/DataSourceColumnDef';
import DataSourceFilterDef = require('@nginstack/datasource/lib/DataSourceFilterDef');

const datasource = new DataSource(1); // $ExpectType DataSource
const filters = new DataSourceFilters(datasource); // $ExpectType DataSourceFilters
const filterDefs = [new DataSourceFilterDef()]; // $ExpectType DataSourceFilterDef[]
const columns = new DataSourceColumns(datasource); // $ExpectType DataSourceColumns
const columnDefs = [new DataSourceColumnDef()]; // $ExpectType DataSourceColumnDef[]

datasource.public; // $ExpectType boolean
datasource.filters; // $ExpectType DataSourceFilters
datasource.columns; // $ExpectType DataSourceColumns
datasource.help; // $ExpectType string
datasource.autoPurgeUnsolicitedColumns; // $ExpectType boolean

datasource.getQuery(filters, columns); // $ExpectType string
datasource.createFilters(['']); // $ExpectType DataSourceFilters
datasource.createFiltersFromMap({ a: 1 }); // $ExpectType DataSourceFilters
datasource.createColumns(columnDefs); // $ExpectType DataSourceColumns
datasource.getDataSet(filters, columns); // $ExpectType DataSet
datasource.getKey(); // $ExpectType number
datasource.getUrl(); // $ExpectType string
datasource.getResult(filterDefs, columnDefs); // $ExpectType DataSourceResult

function testMajorVersions(prior: number, current: number): boolean {
    return current > prior;
}
testMajorVersions(64, 65); // $ExpectType boolean
