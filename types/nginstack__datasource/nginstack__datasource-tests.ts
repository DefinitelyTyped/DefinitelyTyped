import * as DataSource from '@nginstack/datasource/lib/DataSource';
import * as DataSourceFilters from '@nginstack/datasource/lib/DataSourceFilters';
import * as DataSourceColumns from '@nginstack/datasource/lib/DataSourceColumns';
import * as DataSourceColumnDef from '@nginstack/datasource/lib/DataSourceColumnDef';

const datasource = new DataSource(1); // $ExpectType DataSource
const filters = new DataSourceFilters(datasource); // $ExpectType DataSourceFilters
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

function getVersion(): string {
    return '72.0.5';
}
getVersion(); // $ExpectType string
