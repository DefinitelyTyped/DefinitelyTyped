import * as React from 'react';
import BootstrapTable, {
    CellAlignment,
    ColumnDescription,
    HeaderFormatter,
    ColumnFormatter,
} from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationTotalStandalone, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
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
 * pagination test
 */
render(
    <BootstrapTable
        data={products}
        keyField="id"
        pagination={paginationFactory({ sizePerPage: 10, page: 1 })}
        columns={productColumns}
    />,
    document.getElementById('app'),
);

/**
 * PaginationProvider test
 */

render(
    <PaginationProvider
        pagination={ paginationFactory({ custom: true, totalSize: 2 }) }
    >
        {({ paginationProps, paginationTableProps }) => (
            <>
                <PaginationTotalStandalone { ...paginationProps } />
                <PaginationListStandalone { ...paginationProps } />
                <BootstrapTable
                    { ...paginationTableProps }
                    keyField="id"
                    data={ products }
                    columns={ productColumns }
                />
            </>
        )}
    </PaginationProvider>,
    document.getElementById('app'),
);
