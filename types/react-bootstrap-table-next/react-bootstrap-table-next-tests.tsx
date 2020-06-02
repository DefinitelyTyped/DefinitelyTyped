import * as React from 'react';
import { render } from 'react-dom';
import BootstrapTable, {
    ColumnFormatter,
    CellAlignment,
    HeaderFormatter,
    ColumnDescription,
    RowSelectionType,
    ROW_SELECT_SINGLE,
} from 'react-bootstrap-table-next';

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

const productColumns: Array<ColumnDescription<Product>> = [
    { dataField: 'id', align: 'center', sort: true, text: 'Product ID' },
    { dataField: 'name', align: 'center', sort: true, text: 'Product Name' },
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
    },
    /**
     * test optional dataField for dummyFields
     */
    {
        isDummyField: true,
        dataField: '',
        sort: true,
        formatter: priceFormatter,
        text: 'Product Price',
        headerFormatter: priceHeaderFormatter,
    },
];

/**
 * Basic table test with custom header and cell formatters
 */
render(
    <BootstrapTable data={products} bootstrap4 striped={true} hover={true} keyField="id" columns={productColumns} />,
    document.getElementById('app'),
);

/**
 * Inline untyped columns test
 */
render(
    <BootstrapTable
        data={products}
        bootstrap4
        striped={true}
        hover={true}
        keyField="id"
        columns={[
            { dataField: 'id', align: 'center', sort: true, text: 'Product ID' },
            { dataField: 'name', align: 'center', sort: true, text: 'Product Name' },
            {
                isDummyField: true,
                dataField: '',
                sort: true,
                formatter: () => <span>Dummy Field</span>,
                text: 'Dummy Columns',
            },
            {
                dataField: 'price',
                sort: true,
                formatter: priceFormatter,
                text: 'Product Price',
                headerFormatter: priceHeaderFormatter,
            },
            /**
             * test optional dataField for dummyFields
             */
            {
                isDummyField: true,
                dataField: '',
                sort: true,
                formatter: priceFormatter,
                text: 'Product Price',
                headerFormatter: priceHeaderFormatter,
            },
        ]}
    />,
    document.getElementById('app'),
);

/**
 * Basic table with custom data indicator and caption
 */
render(
    <BootstrapTable
        data={products}
        bootstrap4
        striped={true}
        hover={true}
        keyField="id"
        noDataIndication={() => <div>No data available</div>}
        caption={<span>Amazing table</span>}
        columns={productColumns}
    />,
    document.getElementById('app'),
);

/**
 * Basic table with custom data indicator and caption
 */
render(
    <BootstrapTable
        data={products}
        bootstrap4
        keyField="id"
        columns={productColumns}
        selectRow={{
            mode: ROW_SELECT_SINGLE,
        }}
    />,
    document.getElementById('app'),
);

/**
 * Event handling table test
 */
render(
    <BootstrapTable
        data={products}
        rowEvents={{
            onClick: (e, row, rowIndex) => {
                typeof row.inStockStatus === 'number';
            },
            onDoubleClick: (e, row, rowIndex) => {},
            onMouseEnter: (e, row, rowIndex) => {},
            onMouseLeave: (e, row, rowIndex) => {},
        }}
        keyField="id"
        columns={productColumns}
    />,
    document.getElementById('app'),
);
