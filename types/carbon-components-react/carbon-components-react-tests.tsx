import * as React from 'react';
import { DataTable, DataTableHeader, DataTableRow } from 'carbon-components-react';

interface Row1 extends DataTableRow {
    rowProp: string;
}

interface Header1 extends DataTableHeader {
    headerProp: number;
}

interface ExtraStuff {
    extra1: string;
    extra2?: number;
}

const t1 = (
    <DataTable<Row1, Header1>
        headers={[{ key: 'h1', header: <div />, headerProp: 2 }]}
        rows={[{ id: 'r1', rowProp: 'row1' }]}
    />
);

const t2 = (
    <DataTable<Row1, Header1>
        filterRows={data => {
            const headers: ReadonlyArray<Header1> = data.headers;
            const rowIds: ReadonlyArray<string> = data.rowIds;
            return [headers[0].key];
        }}
        headers={[{ key: 'h1', header: <div />, headerProp: 2 }]}
        rows={[{ id: 'r1', rowProp: 'row1' }]}
        render={props => {
            props.expandRow('asdf');

            let bap = props.getBatchActionProps();
            bap.onCancel();
            let x = bap.totalSelected;

            let bap2 = props.getBatchActionProps<ExtraStuff>({ extra1: 'extra' });
            let s = bap2.extra1;

            let hp = props.getHeaderProps({ header: { key: 'k', header: 'Test' } });
            let k = hp.key;

            let hp2 = props.getHeaderProps<ExtraStuff>({ header: { key: 'k', header: 'Test' }, extra1: 'asdf' });
            let k2 = hp.key;
            let e = hp2.extra1;

            let rp = props.getRowProps({ row: { id: 'r1' } });
            k = rp.key;

            let rp2 = props.getRowProps<ExtraStuff>({ row: { id: 'r1' }, extra1: 'asdf' });
            k = rp2.key;
            e = rp2.extra1;

            let sp = props.getSelectionProps();
            let c = sp.checked;

            let sp2 = props.getSelectionProps({ extra1: 't2', extra3: 'asdf' });
            c = sp2.checked;
            e = sp2.extra1;
            e = sp2.extra3;

            let tp = props.getTableProps();
            let size = tp.size;

            props.selectAll();
            props.selectRow('qwerty');
            props.sortBy('zxcv');

            return <div />;
        }}
    />
);

// No types explicitly set on DataTable props
const row = { id: '2', someRandomRowProp: 'test' };
const t3 = (
    <DataTable
        headers={[{ key: '1', header: 'Test', someRandomHeaderProp: 'test' }]}
        rows={[row]}
        render={data => {
            let rowProps = data.getRowProps({ row, extra1: 'qwerty', ...row });
            let a = rowProps.extra1;
            let b = rowProps.someRandomRowProp;
            return <div />;
        }}
    />
);
