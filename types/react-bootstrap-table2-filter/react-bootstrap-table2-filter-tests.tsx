import * as React from 'react';
import BootstrapTable, {
    CellAlignment,
    ColumnDescription,
    HeaderFormatter,
    ColumnFormatter,
} from 'react-bootstrap-table-next';
import filterFactory, { numberFilter, Comparator, selectFilter } from 'react-bootstrap-table2-filter';
import { render } from 'react-dom';

interface Product {
    id: number;
    name: string;
    price?: number;
    quality?: number;
    inStockStatus?: number;
    sales?: number;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Item name 1',
        price: 100,
        quality: 0,
    },
    {
        id: 2,
        name: 'Item name 2',
        price: 100,
        quality: 1,
    },
];

const priceHeaderFormatter: HeaderFormatter<Product> = (column, colIndex, components) => {
    return (
        <div>
            {column.text}
            {components.sortElement}
            {components.filterElement}
        </div>
    );
};

const priceFormatter: ColumnFormatter<Product, { indexSquare: number }> = (cell, row, rowIndex) => {
    return (
        <span>
            {rowIndex} - {cell}
        </span>
    );
};

let priceFilter: any;

const productColumns: Array<ColumnDescription<Product>> = [
    { dataField: 'id', align: CellAlignment.center, sort: true, text: 'Product ID' },
    { dataField: 'name', align: CellAlignment.center, sort: true, text: 'Product Name' },
    {
        isDummyField: true,
        dataField: '',
        sort: true,
        text: 'Product Name',
    },
    {
        dataField: 'price',
        sort: true,
        formatter: priceFormatter,
        text: 'Product Price',
        headerFormatter: priceHeaderFormatter,
        filter: numberFilter({
            options: [2100, 2103, 2105], // if options defined, will render number select instead of number input
            delay: 600, // how long will trigger filtering after user typing, default is 500 ms
            placeholder: 'custom placeholder', // placeholder for number input
            withoutEmptyComparatorOption: true, // dont render empty option for comparator
            withoutEmptyNumberOption: true, // dont render empty option for number select if it is defined
            comparators: [Comparator.EQ, Comparator.GT, Comparator.LT], // Custom the comparators
            style: { display: 'inline-grid' }, // custom the style on number filter
            className: 'custom-numberfilter-class', // custom the class on number filter
            comparatorStyle: { backgroundColor: 'antiquewhite' }, // custom the style on comparator select
            comparatorClassName: 'custom-comparator-class', // custom the class on comparator select
            numberStyle: { backgroundColor: 'cadetblue', margin: '0px' }, // custom the style on number input/select
            numberClassName: 'custom-number-class', // custom the class on ber input/select
            defaultValue: { number: 2103, comparator: Comparator.GT }, // default value
            getFilter: filter => {
                // priceFilter was assigned once the component has been mounted.
                priceFilter = filter;
            },
            onFilter: filterValue => {},
        }),
    },
    /**
     * test optional dataField for dummyFields
     */
    {
        isDummyField: true,
        sort: true,
        formatter: priceFormatter,
        text: 'Product Price',
        headerFormatter: priceHeaderFormatter,
    },
];

/**
 * filter test
 */
render(
    <BootstrapTable data={products} keyField="id" filter={filterFactory()} columns={productColumns} />,
    document.getElementById('app'),
);

// options as Object
const selectOptionsObject = {
    0: 'good',
    1: 'Bad',
    2: 'unknown',
};

// options as Array
const selectOptionsList = [
    { value: 0, label: 'good' },
    { value: 1, label: 'Bad' },
    { value: 2, label: 'unknown' },
];

// options as Function
const selectOptionsCreator = (column: ColumnDescription<Product>) => [
    { value: 0, label: 'good' },
    { value: 1, label: 'Bad' },
    { value: 2, label: 'unknown' },
];

const filterColumns: Array<ColumnDescription<Product>> = [
    { dataField: 'id', align: CellAlignment.center, sort: true, text: 'Product ID' },
    { dataField: 'name', align: CellAlignment.center, sort: true, text: 'Product Name' },
    {
        dataField: 'quality',
        text: 'Product Quailty',
        formatter: cell => selectOptionsObject[cell],
        filter: selectFilter({
            options: selectOptionsObject,
            className: 'test-classname',
            withoutEmptyOption: true,
            defaultValue: 2,
            comparator: Comparator.LIKE, // default is Comparator.EQ
            style: { backgroundColor: 'pink' },
            getFilter: filter => {
                // qualityFilter was assigned once the component has been mounted.
            },
            onFilter: filterValue => {},
        }),
    },
];

render(
    <BootstrapTable keyField="id" data={products} columns={filterColumns} filter={filterFactory()} />,
    document.getElementById('app'),
);
