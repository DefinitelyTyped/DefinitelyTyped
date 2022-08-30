import * as React from 'react';
import { render } from 'react-dom';
import BootstrapTable, {
    ColumnFormatter,
    CellAlignment,
    HeaderFormatter,
    ColumnDescription,
    RowSelectionType,
    ROW_SELECT_SINGLE,
    ROW_SELECT_MULTIPLE,
    ExpandRowProps,
    ColumnSortValue,
    ColumnSortCaret,
    HeaderSortingClasses,
} from 'react-bootstrap-table-next';

interface Product {
    id: number;
    name: string;
    price?: number | undefined;
    quality?: number | undefined;
    inStockStatus?: number | undefined;
    sales?: number | undefined;
    category?: ProductCategory | undefined;
}

enum ProductCategory {
    'Category 1',
    'Category 2',
}

const products: Product[] = [
    {
        id: 1,
        name: 'Item name 1',
        price: 100,
        category: 0,
    },
    {
        id: 2,
        name: 'Item name 2',
        price: 100,
        category: 1,
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

const sortValue: ColumnSortValue<Product> = (cell, row) => ProductCategory[cell];

const SortCaret: ColumnSortCaret = (order, column) => {
    switch (order) {
        case 'asc':
            return '&#9650;';

        case 'desc':
            return '&#9660;';

        default:
            return null;
    }
};

const headerSortingClasses: HeaderSortingClasses = (column, sortOrder, isLastSorting, colIndex) =>
    sortOrder === 'asc' || sortOrder === 'desc' ? 'sort-active' : '';

const productColumns: Array<ColumnDescription<Product>> = [
    { dataField: 'id', align: 'center', sort: true, text: 'Product ID' },
    { dataField: 'name', align: 'center', sort: true, text: 'Product Name' },
    {
        isDummyField: true,
        dataField: '',
        sort: true,
        sortCaret: SortCaret,
        text: 'Product Name',
        headerSortingClasses,
    },
    {
        dataField: 'price',
        sort: true,
        formatter: priceFormatter,
        text: 'Product Price',
        headerFormatter: priceHeaderFormatter,
        validator: (newValue: number, row, column, done) => {
            setTimeout(() => {
                if (isNaN(newValue)) {
                    return done({
                        valid: false,
                        message: 'Price should be numeric',
                    });
                }
                if (newValue < 2000) {
                    return done({
                        valid: false,
                        message: 'Price should bigger than 2000',
                    });
                }
                return done();
            }, 2000);
            return {
                async: true,
            };
        },
    },
    {
        dataField: 'price2',
        text: 'Product Price 2',
        validator: (newValue, row, column) => {
            if (isNaN(newValue)) {
                return {
                    valid: false,
                    message: 'Price should be numeric',
                };
            }
            if (newValue < 2000) {
                return {
                    valid: false,
                    message: 'Price should bigger than 2000',
                };
            }
            return true;
        },
    },
    {
        dataField: 'category',
        sort: true,
        sortValue,
        text: 'Product category',
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
 * Basic table with function returning string noDataIndication
 */
render(
    <BootstrapTable
        data={products}
        bootstrap4
        keyField="id"
        noDataIndication={() => 'No data available'}
        columns={productColumns}
    />,
    document.getElementById('app'),
);

/**
 * Basic table with string noDataIndication
 */
render(
    <BootstrapTable
        data={products}
        bootstrap4
        keyField="id"
        noDataIndication="No data available"
        columns={productColumns}
    />,
    document.getElementById('app'),
);

/**
 * Basic table with JSX element noDataIndication
 */
render(
    <BootstrapTable
        data={products}
        bootstrap4
        keyField="id"
        noDataIndication={<div>No data available</div>}
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
 * Basic table with custom checkbox in row selection column
 */
render(
    <BootstrapTable
        data={products}
        bootstrap4
        keyField="id"
        columns={productColumns}
        selectRow={{
            mode: ROW_SELECT_MULTIPLE,
            selectionRenderer({ rowKey, checked, disabled }) {
                return <input key={rowKey} type="checkbox" checked={checked} disabled={disabled} />;
            },
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

interface UserWithStringId {
    id: string;
    name: string;
    description: string;
}

const usersWithStringIds: UserWithStringId[] = [
    { id: '1', name: 'Jeremy', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: '2', name: 'Richard', description: 'Pellentesque gravida eros nulla, vitae dignissim urna laoreet nec.' },
    { id: '3', name: 'James', description: 'Phasellus fermentum interdum venenatis.' },
    { id: '4', name: 'Stig', description: 'Nulla feugiat pharetra eleifend.' },
];

// test expandRow when string is key type
render(
    <BootstrapTable<UserWithStringId, string>
        data={usersWithStringIds}
        keyField="id"
        columns={[
            { text: 'ID', dataField: 'id' },
            { text: 'Name', dataField: 'name' },
        ]}
        expandRow={{
            renderer: (row: UserWithStringId) => <p>{row.description}</p>,
            nonExpandable: ['2', '4'],
            expanded: ['1', '3'],
        }}
    />,
    document.getElementById('app'),
);

interface UserWithNumberId {
    id: number;
    name: string;
    description: string;
}

const usersWithNumberIds: UserWithNumberId[] = [
    { id: 1, name: 'Jeremy', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, name: 'Richard', description: 'Pellentesque gravida eros nulla, vitae dignissim urna laoreet nec.' },
    { id: 3, name: 'James', description: 'Phasellus fermentum interdum venenatis.' },
    { id: 4, name: 'Stig', description: 'Nulla feugiat pharetra eleifend.' },
];

// test expandRow when key is of default type
render(
    <BootstrapTable<UserWithNumberId>
        data={usersWithNumberIds}
        keyField="id"
        columns={[
            { text: 'ID', dataField: 'id' },
            { text: 'Name', dataField: 'name' },
        ]}
        expandRow={{
            renderer: (row: UserWithNumberId) => <p>{row.description}</p>,
            nonExpandable: [2, 4],
            expanded: [1, 3],
        }}
    />,
    document.getElementById('app'),
);

// test expandRow when key is of explicitly declared number type
render(
    <BootstrapTable<UserWithNumberId, number>
        data={usersWithNumberIds}
        keyField="id"
        columns={[
            { text: 'ID', dataField: 'id' },
            { text: 'Name', dataField: 'name' },
        ]}
        expandRow={{
            renderer: (row: UserWithNumberId) => <p>{row.description}</p>,
            nonExpandable: [2, 4],
            expanded: [1, 3],
        }}
    />,
    document.getElementById('app'),
);

const expandRow: ExpandRowProps<Product> = {
    renderer: (row: Product) => {
        return <div></div>;
    },
    expanded: [1, 2],
    onExpand: (row, isExpand, rowIndex, e) => <div></div>,
    onExpandAll: (isExpandAll, results) => <div></div>,
    showExpandColumn: true,
    expandColumnPosition: 'right',
    expandByColumnOnly: true,
    expandHeaderColumnRenderer: ({ isAnyExpands }) => <br />,
    expandColumnRenderer: ({ expanded }) => <br />,
};
