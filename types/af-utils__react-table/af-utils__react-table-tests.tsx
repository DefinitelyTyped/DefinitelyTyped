import * as React from 'react';
import * as Table from '@af-utils/react-table';

const basicTable = () => {
    return (
        <Table.Table
            model={Table.useVirtualModel()}
            columns={[
                {
                    key: 'abc',
                    label: 'ABC',
                },
            ]}
            getRowData={i => i}
        />
    );
};

const overrideAllExceptComponents = () => {
    return (
        <Table.Table
            model={Table.useVirtualModel()}
            columns={[
                {
                    key: 'abc',
                    label: 'ABC',
                },
            ]}
            getRowData={i => i}
            getKey={i => i}
            getRowProps={() => {
                return {
                    ref: React.createRef(),
                };
            }}
            headless={true}
            footer={true}
            className="test"
            ColumnModel={Table.ColumnModel}
            tabIndex={5}
            id="extra-prop-test"
        />
    );
};

const overrideComponentsOnly = () => {
    return (
        <Table.Table
            model={Table.useVirtualModel()}
            columns={[
                {
                    key: 'abc',
                    label: 'ABC',
                },
            ]}
            getRowData={i => i}
            components={components}
        />
    );
};

const components: Table.ComponentMap = {
    Table: (props: React.HTMLAttributes<HTMLTableElement>) => {
        return <div className="table">{props.children}</div>;
    },
    Tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => {
        return <div className="table-body">{props.children}</div>;
    },
    Thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => {
        return (
            <div>
                Header
                <br />
                {props.children}
            </div>
        );
    },
    Tfoot: (props: React.HTMLAttributes<HTMLTableSectionElement>) => {
        return (
            <div>
                Footer
                <br />
                {props.children}
            </div>
        );
    },
    Tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => {
        return <div className="row">{props.children}</div>;
    },
    Th: (props: React.HTMLAttributes<HTMLTableCellElement>) => {
        return <div className="header-cell">{props.children}</div>;
    },
    Td: (props: React.HTMLAttributes<HTMLTableCellElement>) => {
        return <div className="cell">{props.children}</div>;
    },

    Row: ({ i, i2, model, data }: { i: number; i2: number; model: Table.Model; data: Table.RowProps }) => {
        return <div className="row" key={i}></div>;
    },

    Cell: (props: Record<string, unknown>) => {
        return <div className="cell">{props.data as string}</div>;
    },

    HeaderCells: ({ columns, components }: { columns: Table.ColumnModel[]; components: Table.ComponentMap }) => {
        return columns.map((col, i) => {
            return col.key;
        });
    },

    // Remaining components have identical types to the above
};
