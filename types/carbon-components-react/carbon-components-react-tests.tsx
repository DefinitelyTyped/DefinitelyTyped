import * as React from 'react';
import {
    AccordionItem,
    DataTable,
    DataTableCustomRenderProps,
    DataTableHeader,
    DataTableRow,
    Dropdown,
    FileUploader,
    NumberInput,
    Slider,
    Tab,
    Table,
    TableBatchActions,
    TableHeader,
    TableRow,
    TileGroup,
    TooltipDefinition,
    TextArea,
    TextInput,
} from 'carbon-components-react';
import Link from 'carbon-components-react/lib/components/UIShell/Link';

// AccordionItem
const titleNode = (
    <h2 className="TitleClass">
        <img src="some_image.png" alt="Something" />A heading
    </h2>
);
const accordionItemOne = (
    <AccordionItem title={titleNode} className="extra-class">
        Lorem ipsum.
    </AccordionItem>
);
const accordionTitle = 'Hello World!';
const accordionItemTwo = (
    <AccordionItem title={accordionTitle} className="extra-class">
        Lorem ipsum.
    </AccordionItem>
);

interface Row1 extends DataTableRow {
    rowProp: string;
}

type Header1Key = "h1" | "h2" | "h3";
interface Header1 extends DataTableHeader<Header1Key> {
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

            let hp = props.getHeaderProps({ header: { key: 'h1', header: 'testh1', headerProp: 3 } });
            let k: Header1Key = hp.key;

            let hp2 = props.getHeaderProps<ExtraStuff>({
                header: { key: 'h2', header: 'Test', headerProp: 3 },
                extra1: 'asdf',
            });
            k = hp.key;
            let e = hp2.extra1;

            let hp3 = props.getHeaderProps({ header: { key: 'h3', header: 'testh1', headerProp: 5 }, someExtra: 2 });
            let k3: Header1Key = hp.key;
            let someExtra = hp3.someExtra;

            let rp = props.getRowProps({ row: { id: 'r1', rowProp: 'asdf' }, extra1: 'asdf' });
            let rk: string = rp.key;

            let rp2 = props.getRowProps<ExtraStuff>({ row: { id: 'r1', rowProp: 'edfg' }, extra1: 'asdf' });
            rk = rp2.key;
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
            props.sortBy('h3');

            props.rows.forEach((denormalizedRow) => {
                denormalizedRow.cells.forEach((cell) => {
                    let cellId = cell.id;
                    let cellHeaderKey = cell.info.header;
                });
            });

            return <div />;
        }}
    />
);

// No types explicitly set on DataTable props
const rowData1 = { id: '2', someRandomRowProp: 'test' };
const t3 = (
    <DataTable
        headers={[{ key: '1', header: 'Test', someRandomHeaderProp: 'test' }]}
        rows={[rowData1]}
        render={data => {
            let rowProps = data.getRowProps({ row: rowData1, extra1: 'qwerty', ...rowData1 });
            let a = rowProps.extra1;
            let b = rowProps.someRandomRowProp;
            return <div />;
        }}
    />
);

const headerData1 = { key: '1', header: 'Test', someRandomHeaderProp: 'test' };
const t4 = (
    <DataTable
        headers={[headerData1]}
        rows={[rowData1]}
        render={data => {
            let table = (<Table {...data.getTableProps()}>Content</Table>);
            let header = (
                <TableHeader {...data.getHeaderProps({ header: headerData1, randomAttr: "asdf" })}>
                    {headerData1.header}
                </TableHeader>
            );
            let header2 = (
                <TableHeader {...data.getHeaderProps<ExtraStuff>({ header: headerData1, extra1: "test" })}>
                    {headerData1.header}
                </TableHeader>
            );
            let rowProps = data.getRowProps({ row: rowData1, extra1: 'qwerty', ...rowData1 });
            let row = (
                <TableRow {...rowProps}>
                    Content
                </TableRow>
            );
            let batchActions = (
                <TableBatchActions {...data.getBatchActionProps({ spellCheck: true, randomAttr: "Asdf" })}>
                    Content
                </TableBatchActions>
            );
            let a = rowProps.extra1;
            let b = rowProps.someRandomRowProp;
            return <div />;
        }}
    />
);
// RenderProps are compatible with sub-elements
interface T5RowType extends DataTableRow {
    col1: number;
    col2: number;
}
const t5RowItems: T5RowType[] = [
    { id: "row0", col1: 0, col2: 0},
    { id: "row1", col1: 1, col2: 1},
];
const t5Headers: DataTableHeader[] = [
    {key: 'col1', header: 'First column'},
    {key: 'col2', header: 'Second column'}
];
const t5 = (
    <DataTable
        rows={t5RowItems}
        headers={t5Headers}
        render={(renderProps: DataTableCustomRenderProps<T5RowType>) => (
            <DataTable.TableContainer>
                <DataTable.Table {...renderProps.getTableProps()}>
                    <DataTable.TableHead>
                        <DataTable.TableRow>
                            <DataTable.TableSelectAll
                                {...renderProps.getSelectionProps()}
                            />
                            {renderProps.headers.map(header => (
                                <DataTable.TableHeader
                                    {...renderProps.getHeaderProps({ header })}
                                >
                                    {header.header}
                                </DataTable.TableHeader>
                            ))}
                            <DataTable.TableHeader />
                        </DataTable.TableRow>
                    </DataTable.TableHead>
                    <DataTable.TableBody>
                        {renderProps.rows.map(row => (
                            <React.Fragment key={row.id}>
                                <DataTable.TableRow {...renderProps.getRowProps({ row })}>
                                    <DataTable.TableSelectRow
                                        {...renderProps.getSelectionProps({ row })}
                                    />
                                    {row.cells.map(cell => (
                                        <DataTable.TableCell key={cell.id}>
                                            {cell.value}
                                        </DataTable.TableCell>
                                    ))}
                                    <DataTable.TableCell key={`options${row.id}`} />
                                </DataTable.TableRow>
                            </React.Fragment>
                        ))}
                    </DataTable.TableBody>
                </DataTable.Table>
            </DataTable.TableContainer>
        )}
    />
);

// UIShell - Link
interface TestCompProps {
    someProp: number,
}

class TestComp1 extends React.Component<TestCompProps> {
    render() {
        return (<div/>);
    }
}

const TestComp2 = (props: TestCompProps) => (<div/>);

const uisLinkT1 = (
    <Link href="#test">Test</Link>
);
const uisLinkT2 = (
    <Link<React.ImgHTMLAttributes<HTMLElement>> element="img" src="src"/>
);
const uisLinkT3 = (
    <Link<TestCompProps> element={TestComp1} someProp={2}>ASDF</Link>
);
const uisLinkT4 = (
    <Link<TestCompProps> element={TestComp2} someProp={2}>ASDF</Link>
);

interface TestCompPropsOverwrite {
    element?: "overwriteTest", // making this required will produce an error. The underlying component will never receive prop element so it's not allowed to be required.
    someProp: string,
}

const TestComp3 = (props: TestCompPropsOverwrite) => (<div/>);

const uisLinkT5 = (
    <Link<TestCompPropsOverwrite> element={TestComp3} someProp="asdf">Testing Overwrite</Link>
);

// Dropdown
const dropdownItemCanBeElement = (
    <Dropdown
        id="my-dropdown"
        items={["val1", "val2", "val3"]}
        label="label"
        titleText=""
        ariaLabel=""
        selectedItem="val2"
        itemToElement={(item) => (<div>This is my rich content</div>)}
        itemToString={item => "Selected: " + item}
    />
);

// TileGroup
// Value nor name can be undefined
let value: string|number = 5;
let name = "old name";
const tileGroupA = (
    <TileGroup
        name="my-tile-group-name"
        onChange={(newVal, newName, e) => {
            value = newVal;
            name = newName;
        }}
    />
);

// TooltipDefinition
const tooltipDefHasAlign = (
    <TooltipDefinition tooltipText="my text" align="end" />
);

const tooltipDefHasTriggerClassName = (
    <TooltipDefinition tooltipText="my text" triggerClassName="my-class-name" />
);

// Tabs
const tabCanBeDisabled = (
    <Tab
        handleTabAnchorFocus={() => {}}
        handleTabClick={() => {}}
        handleTabKeyDown={() => {}}
        href="#"
        tabIndex={0}
        disabled
    />
);

// Slider
const SliderHasOnChange = (
    <Slider
        max={0}
        min={10}
        value={5}
        onChange={(newValue) => newValue.value}
    />
);

// TextArea
const textAreaWithDefaultRef = (
    <TextArea labelText=""/>
);

const HtmlTextAreaRef = React.createRef<HTMLTextAreaElement>();
const textAreaWithRef = (
    <TextArea
        ref={HtmlTextAreaRef}
        labelText=""
    />
);

// TextInput
const inputWithoutRef = (
    <TextInput
        id="my-id"
        labelText=""
    />
);

const passwordInputWithoutRef = (
    <TextInput.PasswordInput
        id="my-id"
        labelText=""
    />
);

const controlledPasswordInputWithoutRef = (
    <TextInput.ControlledPasswordInput
        id="my-id"
        labelText=""
    />
);

const inputRef = React.createRef<HTMLInputElement>();
const inputWithRef = (
    <TextInput
        id="my-id"
        ref={inputRef}
        labelText=""
    />
);

const passwordInputWithRef = (
    <TextInput.PasswordInput
        id="my-id"
        ref={inputRef}
        labelText=""
    />
);

const controlledPasswordInputWithRef = (
    <TextInput.ControlledPasswordInput
        id="my-id"
        ref={inputRef}
        labelText=""
    />
);

// NumberInput
const numberInput = (
    <NumberInput
        id="my-id"
        value={12}
    />
);

// FileUploader
const fileUploaderHasOnChange = (
    <FileUploader
        onChange={(e) => {} }
    />
);
