import * as React from 'react';
import { render } from 'react-dom';
import BootstrapTable, { ColumnFormatter, CellAlignment } from 'react-bootstrap-table-next';

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
    },
    {
        id: 2,
        name: 'Item name 2',
        price: 100,
    },
];

type JobType = 'A' | 'B' | 'C' | 'D';
interface Job {
    id: number;
    status: string;
    name: string;
    type: JobType;
    active: 'Y' | 'N';
}
const jobs = [
    { id: 1, status: '200', name: 'Item name 1', type: 'B', active: 'N' },
    { id: 2, status: '200', name: 'Item name 2', type: 'B', active: 'Y' },
];
const jobTypes = ['A', 'B', 'C', 'D'];

interface ExtendedJob {
    id: number;
    name: string;
    type1: JobType;
    type2: JobType;
    active: 'Y' | 'N';
    datetime: Date;
}
const extendedJobs = [
    { id: 1, name: 'Item name 1', type1: 'A', type2: 'B', active: 'N', datetime: '2001-12-28T14:57:00' },
    { id: 2, name: 'Item name 2', type1: 'A', type2: 'B', active: 'Y', datetime: '2002-12-28T14:57:00' },
];

const inStockStatus = {
    1: 'yes',
    2: 'no',
};

const priceFormatter: ColumnFormatter<Product, { indexSquare: number }> = (cell, row, rowIndex) => {
    return (
        <span>
            {rowIndex} - {cell}
        </span>
    );
};

render(
    <BootstrapTable
        data={products}
        striped={true}
        hover={true}
        keyField="id"
        columns={[
            { dataField: 'id', align: CellAlignment.center, sort: true, text: 'Product ID' },
            { dataField: 'name', align: CellAlignment.center, sort: true, text: 'Product Name' },
            {
                isDummyField: true,
                dataField: '',
                sort: true,
                text: 'Product Name',
            },
            { dataField: 'price', formatter: priceFormatter, text: 'Product Price' },
        ]}
    />,
    document.getElementById('app'),
);
