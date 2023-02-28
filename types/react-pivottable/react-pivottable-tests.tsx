import * as React from 'react';
import { TableInput } from 'react-pivottable';
import PivotTableUI, { DraggableAttribute, Dropdown } from 'react-pivottable/PivotTableUI';
import PivotTable, { PivotTableProps } from 'react-pivottable/PivotTable';
import plotlyRenderers from 'react-pivottable/PlotlyRenderers';
import defaultRenderers, { TableRenderers } from 'react-pivottable/TableRenderers';

const data: TableInput = [
    ['attribute', 'attribute2'],
    ['value1', 'value2'],
];
const data2: TableInput = callback => {
    callback({
        attr1: 'value1_attr1',
        attr2: 'value1_attr2',
        // ...
    });
    callback({
        attr1: 'value2_attr1',
        attr2: 'value2_attr2',
        // ...
    });
    // ...
};
const data3: TableInput = [
    {
        attr1: 'value1_attr1',
        attr2: 'value1_attr2',
        // ...
    },
    {
        attr1: 'value2_attr1',
        attr2: 'value2_attr2',
        // ...
    },
    // ...
];

const SomeRenderer: React.FC<PivotTableProps> = () => <></>;
// casted prroperly
const passDefaultRenderers: TableRenderers = defaultRenderers;

plotlyRenderers(SomeRenderer);
function addRemValuesToFilter(a = '', b = ['']) {}
class MyApp extends React.Component {
    render() {
        return (
            <>
                <PivotTableUI data={data} onChange={e => console.log(e)} />
                <PivotTableUI data={data2} onChange={e => console.log(e)} />;
                <PivotTableUI data={data3} onChange={e => console.log(e)} />;
                <PivotTable data={data} renderers={{ render01: SomeRenderer }} rendererName={'render01'} />
                <PivotTable data={data} renderers={passDefaultRenderers} rendererName={'render01'} />
                <DraggableAttribute
                    addValuesToFilter={addRemValuesToFilter}
                    removeValuesFromFilter={addRemValuesToFilter}
                    attrValues={{ prop: 3 }}
                    moveFilterBoxToTop={addRemValuesToFilter}
                    name="attrName"
                    sorter={(a: number, b: number) => a - b}
                />
                <Dropdown
                    current="someVal"
                    open={true}
                    toggle={() => undefined}
                    setValue={() => undefined}
                    values={['someVal', 'someVal2']}
                    zIndex={2}
                />
            </>
        );
    }
}

export default MyApp;
