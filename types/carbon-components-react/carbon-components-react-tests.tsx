import * as React from 'react';
import {
    AccordionItem,
    AspectRatio,
    Button,
    Checkbox,
    CodeSnippet,
    CodeSnippetType,
    Column,
    Content,
    DataTable,
    DataTableCustomRenderProps,
    DataTableHeader,
    DataTableRow,
    DatePickerInput,
    Dropdown,
    HeaderContainer,
    HeaderMenu,
    HeaderMenuItem,
    FileUploader,
    Link,
    NumberInput,
    NumberInputOnChangeDataVariant,
    NumberInputOnChangeDefaultVariant,
    NumberInputOnClickDataVariant,
    NumberInputOnClickDefaultVariant,
    NumberInputOnClickInputVariant,
    Row,
    SecondaryButton,
    Slider,
    Tab,
    Table,
    TableBatchActions,
    TableHeader,
    TableRow,
    Tag,
    TileGroup,
    Tooltip,
    TooltipDefinition,
    TextArea,
    TextInput,
    FileUploaderDropContainer,
    FileUploaderItem,
    MultiSelect,
    Tabs,
    Search,
    SideNav,
    SideNavItem,
    SideNavItems,
    StructuredListWrapper,
    StructuredListHead,
    StructuredListBody,
    StructuredListRow,
    StructuredListInput,
    StructuredListCell,
    StructuredListSkeleton,
    ButtonRenderIconRenderProps,
    Modal,
    InlineLoading,
    DataTableSkeleton,
    TableCell,
    unstable_Heading as UnstableHeading,
    unstable_Section as UnstableSection,
} from 'carbon-components-react';
import { Dialog } from 'carbon-components-react/lib/components/Dialog';
import UIShellLink from 'carbon-components-react/lib/components/UIShell/Link';
import { Popover, PopoverContent } from 'carbon-components-react/lib/components/Popover';
import { LayoutDirection } from 'carbon-components-react/lib/components/Layout';
import { Text } from 'carbon-components-react/lib/components/Text';
import ComboBox from 'carbon-components-react/lib/components/ComboBox';

// test components for "as" props
interface TestCompProps {
    children?: React.ReactNode | undefined;
    someProp: number;
}

class TestComp1 extends React.Component<TestCompProps> {
    constructor(props: TestCompProps) {
        super(props);
    }

    render() {
        return <div />;
    }
}

const TestComp2 = (props: TestCompProps) => <div />;

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

//
// AspectRatio
//
{
    const AspectRatioCustomComp1: React.FC<{ someRandomProp: number; optionalProp?: string | undefined }> = () => (
        <div />
    );

    const aspectRatioT1 = (
        <AspectRatio onClick={evt => void evt.currentTarget} data-testid="test">
            Default
        </AspectRatio>
    );
    const aspectRatioT2 = (
        // @ts-expect-error
        <AspectRatio onClick={evt => void evt.currentTarget} data-testid="test" unknownProp="error">
            Default
        </AspectRatio>
    );
    const aspectRatioIntrinsicT1 = (
        <AspectRatio as="section" onClick={e => {}}>
            IntrinsicElement
        </AspectRatio>
    );
    const aspectRatioCustomCompT1 = (
        <AspectRatio as={AspectRatioCustomComp1} someRandomProp={3}>
            Component
        </AspectRatio>
    );
    const aspectRatioCustomCompT2 = (
        // @ts-expect-error
        <AspectRatio as={AspectRatioCustomComp1} someRandomProp={3} unknownProp={5}>
            Component
        </AspectRatio>
    );
}

//
// Button
//
{
    const buttonDefaultT1 = (
        <Button onClick={event => event.preventDefault()} data-testid="btn">
            Basic Button
        </Button>
    );

    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const SimpleButtonIcon = () => <div />;
    const buttonDefaultT2 = (
        <Button
            kind="danger"
            onClick={event => {
                event.preventDefault();
            }}
            renderIcon={SimpleButtonIcon}
            ref={buttonRef}
            type="reset"
        >
            Reset
        </Button>
    );

    const buttonDefaultT3 = (
        // @ts-expect-error
        <Button unknownProp="error">Submit</Button>
    );

    const buttonIconT1 = <Button renderIcon={SimpleButtonIcon}>With Render Icon</Button>;
    // TODO: find a way to make this fail because someProp is required by the component but it will never be provided.
    const IconWithProps: React.FC<{ someProp: number; anotherProp?: string | undefined }> = () => <div />;
    const buttonIconT2 = <Button renderIcon={IconWithProps}>With Render Icon</Button>;

    const buttonIconT3 = (
        <Button renderIcon={({ className }: ButtonRenderIconRenderProps) => <div className={className} />}>
            Anon Icon Render
        </Button>
    );

    const anchorRef = React.useRef<HTMLAnchorElement>(null);
    const buttonAnchorT1 = (
        <Button href="https://github.com/DefinitelyTyped/DefinitelyTyped" target="_blank" ref={anchorRef}>
            Anchor Link
        </Button>
    );

    const spanRef = React.useRef<HTMLSpanElement>(null);
    const buttonIntrinsicT1 = (
        <Button
            as="span"
            kind="danger"
            onClick={event => {
                event.preventDefault();
            }}
            ref={spanRef}
        >
            Reset
        </Button>
    );

    const ButtonCustomRenderComp1: React.FC<{ someProp: number; anotherProp?: string | undefined }> = () => <div />;

    const buttonCustomRenderT1 = (
        <Button as={ButtonCustomRenderComp1} kind="danger" someProp={5} anotherProp="test">
            Custom Render
        </Button>
    );

    const buttonCustomRenderT2 = (
        // @ts-expect-error
        <Button as={ButtonCustomRenderComp1} kind="danger" someProp={5} anotherProp="test" unknownProp={1}>
            Custom Render
        </Button>
    );
}

//
// SecondaryButton
//
const secondaryButtonT1 = <SecondaryButton onClick={event => event.preventDefault()}>Secondary</SecondaryButton>;
const secondaryButtonT2 = (
    <SecondaryButton as="span" onClick={event => event.preventDefault()}>
        Secondary
    </SecondaryButton>
);
const secondaryButtonT3 = (
    <SecondaryButton as={TestComp2} someProp={6}>
        Secondary
    </SecondaryButton>
);

// CodeSnippet

let codeSnippetType: CodeSnippetType = 'inline';
const inlineCodeSnippet = (
    <CodeSnippet type="inline" onClick={e => e.preventDefault()} copyText="copy text">
        code
    </CodeSnippet>
);
const multiCodeSnippet = (
    <CodeSnippet
        type="multi"
        maxCollapsedNumberOfRows={10}
        minExpandedNumberOfRows={3}
        onBlur={e => e.preventDefault()}
    >
        code
    </CodeSnippet>
);
const codeSnippetTypeIsVariable = (
    <CodeSnippet type={codeSnippetType} onClick={e => e.preventDefault()}>
        code
    </CodeSnippet>
);
const codeSnippetNodes = (
    <CodeSnippet
        type="multi"
        maxCollapsedNumberOfRows={10}
        minExpandedNumberOfRows={3}
        onBlur={e => e.preventDefault()}
    >
        <div>line 1</div>
        <div>line 2</div>
    </CodeSnippet>
);

interface Row1 extends DataTableRow {
    rowProp: string;
}

type Header1Key = 'h1' | 'h2' | 'h3';
interface Header1 extends DataTableHeader<Header1Key> {
    headerProp: number;
}

interface ExtraStuff {
    extra1: string;
    extra2?: number | undefined;
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

            let rp2 = props.getRowProps<ExtraStuff>({ row: { id: 'r1' }, extra1: 'asdf' });
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

            props.headers.map(header => props.getHeaderProps({ header }));
            props.rows.map(row => props.getRowProps({ row }));

            props.rows.forEach(denormalizedRow => {
                denormalizedRow.cells.forEach(cell => {
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
            let table = <Table {...data.getTableProps()}>Content</Table>;
            data.headers.map(header => (
                <TableHeader {...data.getHeaderProps({ header, randomAttr: 'asdf' })}>{header.header}</TableHeader>
            ));
            data.headers.map(header => (
                <TableHeader
                    {...data.getHeaderProps<ExtraStuff>({ header, extra1: 'test' })}
                    translateWithId={(mId, args) => {
                        if (args) {
                            console.log(args.header);
                            console.log(args.isSortHeader);
                            console.log(args.sortDirection);
                            console.log(args.sortStates);
                        }
                        return 'string';
                    }}
                >
                    {header.header}
                </TableHeader>
            ));
            data.rows.map(row => (
                <TableRow {...data.getRowProps({ row })}>
                    {row.cells.map(cell => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                </TableRow>
            ));
            let rowProps = data.getRowProps({ row: rowData1, extra1: 'qwerty', ...rowData1 });
            let batchActions = (
                <TableBatchActions
                    {...data.getBatchActionProps({ spellCheck: true, randomAttr: 'Asdf' })}
                    translateWithId={(mId, args) => `${args ? args.totalSelected : 0}`}
                >
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
    { id: 'row0', col1: 0, col2: 0 },
    { id: 'row1', col1: 1, col2: 1 },
];
const t5Headers: DataTableHeader[] = [
    { key: 'col1', header: 'First column' },
    { key: 'col2', header: 'Second column' },
];
const renderIconProp = <div />;
const t5 = (
    <DataTable
        rows={t5RowItems}
        headers={t5Headers}
        render={(renderProps: DataTableCustomRenderProps<T5RowType>) => (
            <DataTable.TableContainer {...renderProps.getTableContainerProps()}>
                <DataTable.TableToolbar {...renderProps.getToolbarProps()}>
                    <DataTable.TableBatchActions {...renderProps.getBatchActionProps()}>
                        <DataTable.TableBatchAction
                            tabIndex={renderProps.getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                            renderIcon={renderIconProp}
                            onClick={() => {}}
                        >
                            Delete
                        </DataTable.TableBatchAction>
                        <DataTable.TableBatchAction
                            tabIndex={renderProps.getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                            renderIcon={renderIconProp}
                            onClick={() => {}}
                        >
                            Save
                        </DataTable.TableBatchAction>
                        <DataTable.TableBatchAction
                            tabIndex={renderProps.getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                            renderIcon={renderIconProp}
                            onClick={() => {}}
                        >
                            Download
                        </DataTable.TableBatchAction>
                    </DataTable.TableBatchActions>
                    <DataTable.TableToolbarContent>
                        <DataTable.TableToolbarSearch
                            defaultExpanded
                            tabIndex={renderProps.getBatchActionProps().shouldShowBatchActions ? -1 : 0}
                            onChange={renderProps.onInputChange}
                        />
                        <DataTable.TableToolbarMenu
                            tabIndex={renderProps.getBatchActionProps().shouldShowBatchActions ? -1 : 0}
                        >
                            <DataTable.TableToolbarAction primaryFocus onClick={() => alert('Alert 1')}>
                                Action 1
                            </DataTable.TableToolbarAction>
                            <DataTable.TableToolbarAction onClick={() => alert('Alert 2')}>
                                Action 2
                            </DataTable.TableToolbarAction>
                            <DataTable.TableToolbarAction onClick={() => alert('Alert 3')}>
                                Action 3
                            </DataTable.TableToolbarAction>
                        </DataTable.TableToolbarMenu>
                        <Button
                            tabIndex={renderProps.getBatchActionProps().shouldShowBatchActions ? -1 : 0}
                            onClick={() => {}}
                            size="small"
                            kind="primary"
                        >
                            Add new
                        </Button>
                    </DataTable.TableToolbarContent>
                </DataTable.TableToolbar>
                <DataTable.Table {...renderProps.getTableProps()}>
                    <DataTable.TableHead>
                        <DataTable.TableRow>
                            <DataTable.TableSelectAll {...renderProps.getSelectionProps()} />
                            <DataTable.TableExpandHeader {...renderProps.getExpandHeaderProps()} />
                            {renderProps.headers.map(header => (
                                <DataTable.TableHeader {...renderProps.getHeaderProps({ header })}>
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
                                    <DataTable.TableSelectRow {...renderProps.getSelectionProps({ row })} />
                                    <DataTable.TableSelectRow
                                        {...renderProps.getSelectionProps({ row })}
                                        onChange={(val, idOrName, evt) => console.log(val, idOrName, evt)}
                                    />
                                    {row.cells.map(cell => (
                                        <DataTable.TableCell key={cell.id}>{cell.value}</DataTable.TableCell>
                                    ))}
                                    <DataTable.TableCell key={`options${row.id}`} />
                                </DataTable.TableRow>
                            </React.Fragment>
                        ))}
                        {renderProps.rows.map(row => (
                            <React.Fragment key={row.id}>
                                <DataTable.TableExpandRow {...renderProps.getRowProps({ row })}>
                                    <DataTable.TableSelectRow {...renderProps.getSelectionProps({ row })} />
                                    {row.cells.map(cell => (
                                        <DataTable.TableCell key={cell.id}>{cell.value}</DataTable.TableCell>
                                    ))}
                                    <DataTable.TableCell key={`options${row.id}`} />
                                </DataTable.TableExpandRow>
                            </React.Fragment>
                        ))}
                    </DataTable.TableBody>
                </DataTable.Table>
            </DataTable.TableContainer>
        )}
    />
);

// unstable_Heading
{
    const headingT1 = <UnstableHeading onClick={e => e.preventDefault()}>Heading Text</UnstableHeading>;
}

// unstable_Section
{
    const sectionT1 = (
        <UnstableSection onClick={(e: React.MouseEvent<HTMLElement>) => e.preventDefault()}>Text</UnstableSection>
    );
    const sectionIntrinsicT1 = (
        <UnstableSection as="div" onClick={(e: React.MouseEvent<HTMLDivElement>) => e.preventDefault()}>
            Text
        </UnstableSection>
    );
    const sectionIntrinsicT2 = (
        <UnstableSection as="fieldset" disabled form="test">
            Text
        </UnstableSection>
    );
    const sectionComponentT1 = (
        <UnstableSection as={TestComp2} someProp={5}>
            Text
        </UnstableSection>
    );
}

// UIShell - Content
{
    const uisContentT1 = (
        <Content
            className="test-class"
            data-testid="main-content"
            onClick={evt => void evt.currentTarget}
            title="test-title"
        >
            <div />
        </Content>
    );

    const uisContentIntrinsicT1 = (
        <Content
            tagName="fieldset"
            className="test-class"
            data-testid="fieldset-content"
            form="form"
            onClick={evt => void evt.currentTarget}
        >
            <div />
        </Content>
    );
}

// UIShell - Link
{
    const uisLinkT1 = <UIShellLink href="#test">Test</UIShellLink>;
    const uisLinkT2 = <UIShellLink<React.ImgHTMLAttributes<HTMLElement>> element="img" src="src" />;
    const uisLinkT3 = (
        <UIShellLink<TestCompProps> element={TestComp1} someProp={2}>
            ASDF
        </UIShellLink>
    );
    const uisLinkT4 = (
        <UIShellLink<TestCompProps> element={TestComp2} someProp={2}>
            ASDF
        </UIShellLink>
    );

    interface TestCompPropsOverwrite {
        element?: 'overwriteTest' | undefined; // making this required will produce an error. The underlying component will never receive prop element so it's not allowed to be required.
        someProp: string;
    }

    const TestComp3 = (props: TestCompPropsOverwrite) => <div />;

    const uisLinkT5 = (
        <UIShellLink<TestCompPropsOverwrite> element={TestComp3} someProp="asdf">
            Testing Overwrite
        </UIShellLink>
    );
}

// UI Shell - HeaderContainer
const uisHeaderContainerAnonRender = (
    <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
            <button disabled={isSideNavExpanded} onClick={onClickSideNavExpand}>
                Expand
            </button>
        )}
    />
);

const HeaderCompRender1: React.FC<{ someProp: number }> = () => <div />;
const HeaderCompRender2: React.FC<{ someProp?: number | undefined }> = () => <div />;

/*
 * TODO: this should be a fail case but the priority is to correctly type the anonymous render as that's likely how it
 *  will be used.
 */
const uisHeaderContainerCompRenderNotMatchingRequiredProps = <HeaderContainer render={HeaderCompRender1} />;

const uisHeaderContainerCompRenderNotMatchingOptionalProps = <HeaderContainer render={HeaderCompRender2} />;

// UI Shell - HeaderMenu
{
    const uisHeaderMenuAnonRender = (
        <HeaderMenu menuLinkName="test" renderMenuContent={() => <div />} ref={element => {}}>
            <div />
        </HeaderMenu>
    );

    const testRef = React.useRef<HTMLElement | null>();
    const uisHeaderRefT1 = (
        // @ts-expect-error
        <HeaderMenu menuLinkName="test" renderMenuContent={() => <div />} ref={testRef}>
            <div />
        </HeaderMenu>
    );
}

/*
 * TODO: this should be a fail case but the priority is to correctly type the anonymous render as that's likely how it
 *  will be used.
 */
const uisHeaderMenuCompRenderNotMatchingRequiredProps = (
    <HeaderMenu menuLinkName="test" renderMenuContent={HeaderCompRender1} />
);

const uisHeaderMenuCompRenderNotMatchingOptionalProps = (
    <HeaderMenu menuLinkName="test" renderMenuContent={HeaderCompRender2} />
);

//
// HeaderMenuItem
//

const uisHeaderMenuItemRequiredChild = <HeaderMenuItem>Required Child</HeaderMenuItem>;

// DatePickerInput
const datePickerInputWithHideLabel = (
    <DatePickerInput hideLabel={true} id="my-date-picker-input" labelText="my-label-text" />
);

// Dropdown
const dropdownItems = [
    {
        id: '1',
        name: 'ASDF',
    },
    {
        id: '2',
        name: 'QWERTY',
    },
];
const dropdownItemCanBeElement = (
    <Dropdown
        id="my-dropdown"
        items={dropdownItems}
        label="label"
        titleText=""
        ariaLabel=""
        selectedItem={dropdownItems[1]}
        itemToElement={item => (
            <div>
                ID: {item.id}; Name: ${item.name}
            </div>
        )}
        itemToString={item => 'Selected: ' + item}
    />
);

//
// Link
//
{
    const LinkIcon1: React.FC = props => <div />;
    const LinkIcon2: React.FC<{ someProp?: number | undefined }> = props => <div />;

    const linkT1 = (
        <Link href="href" inline renderIcon={LinkIcon1}>
            Text
        </Link>
    );
    const linkT2 = (
        <Link href="href" renderIcon={LinkIcon2}>
            Text
        </Link>
    );
}

// Popover
{
    const popoverContentRef = React.useRef<HTMLSpanElement | null>(null);
    const popoverT1 = (
        <Popover open align="bottom" caret>
            <PopoverContent ref={popoverContentRef} onClick={evt => {}}>
                Content
            </PopoverContent>
        </Popover>
    );
}

// TileGroup
// Value nor name can be undefined
let value: string | number = 5;
let name = 'old name';
const tileGroupA = (
    <TileGroup
        name="my-tile-group-name"
        onChange={(newVal, newName, e) => {
            value = newVal;
            name = newName;
        }}
    />
);

// Tooltip
const tooltipHasAlign = (
    <Tooltip triggerText="tooltip" align="end">
        tooltip
    </Tooltip>
);

// TooltipDefinition
const tooltipDefHasAlign = <TooltipDefinition tooltipText="my text" align="end" />;

const tooltipDefHasTriggerClassName = <TooltipDefinition tooltipText="my text" triggerClassName="my-class-name" />;

// Tabs
{
    const tabsBasicExample = (
        <Tabs selected={1} onSelectionChange={idx => {}}>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
        </Tabs>
    );

    const tabsRenderContentExample = (
        <Tabs>
            <Tab
                renderAnchor={props => <div />}
                renderButton={props => <div />}
                renderContent={props => {
                    const { 'aria-hidden': ariaHidden, className, hidden, id, selected } = props;
                    return hidden ? null : (
                        <div id={id} className={className} aria-hidden={ariaHidden}>
                            Selected: {selected}
                        </div>
                    );
                }}
            >
                Render Content Tab
            </Tab>
        </Tabs>
    );

    const tabCanBeDisabled = <Tab href="#" disabled />;
}

// Slider
const SliderHasOnChange = <Slider max={0} min={10} value={5} onChange={newValue => newValue.value} />;

// Structured List
{
    const structuredListT1 = (
        <StructuredListWrapper>
            <StructuredListHead>
                <StructuredListRow head>
                    <StructuredListCell head>Heading 1</StructuredListCell>
                    <StructuredListCell head>Heading 2</StructuredListCell>
                </StructuredListRow>
            </StructuredListHead>
            <StructuredListBody>
                <StructuredListRow>
                    <StructuredListCell>Cell 1</StructuredListCell>
                    <StructuredListInput value="val"></StructuredListInput>
                </StructuredListRow>
                <StructuredListRow label htmlFor="id">
                    <StructuredListCell>Cell 1</StructuredListCell>
                    <StructuredListInput value="val"></StructuredListInput>
                </StructuredListRow>
            </StructuredListBody>
        </StructuredListWrapper>
    );

    const structuredListSkeletonT1 = <StructuredListSkeleton />;
}

// Tag
{
    const ChipTagFilterUndef = <Tag />;

    const TagCustomComp1: React.FC = () => <div />;
    const ChipTagIcon1 = <Tag renderIcon={TagCustomComp1} size="sm" />;

    const TagCustomComp2: React.FC<{ optionalProp?: string | undefined }> = () => <div />;
    const ChipTagIcon2 = <Tag renderIcon={TagCustomComp2} />;

    class TagCustomComp3 extends React.Component {}
    const ChipTagIcon3 = <Tag renderIcon={TagCustomComp3} />;

    const ChipTagFalse = <Tag filter={false} />;

    const FilterTag = <Tag filter onClose={() => {}} />;
}

// Text
{
    const TextT1 = <Text dir="ltr">Text</Text>;

    const TextT2 = (
        // @ts-expect-error
        <Text dir="auto" unknownProp={3}>
            Text
        </Text>
    );

    const TextIntrinsicT1 = (
        <Text as="li" dir="auto" onClick={(evt: React.MouseEvent<HTMLLIElement>) => {}} value="test">
            Text
        </Text>
    );

    const TextCustomCompT1 = (
        <Text as={TestComp2} dir="rtl" someProp={5}>
            Text
        </Text>
    );

    const TextCustomCompT2 = (
        // @ts-expect-error
        <Text as={TestComp2} dir="rtl" someProp={5} unknownProp={false}>
            Text
        </Text>
    );
}

// TextArea
const textAreaWithDefaultRef = <TextArea labelText="" />;

const HtmlTextAreaRef = React.createRef<HTMLTextAreaElement>();
const textAreaWithRef = <TextArea ref={HtmlTextAreaRef} labelText="" />;

// TextInput
const inputWithoutRef = <TextInput id="my-id" labelText="" />;

const passwordInputWithoutRef = <TextInput.PasswordInput id="my-id" labelText="" />;

const controlledPasswordInputWithoutRef = <TextInput.ControlledPasswordInput id="my-id" labelText="" />;

const inputRef = React.createRef<HTMLInputElement>();
const inputWithRef = <TextInput id="my-id" ref={inputRef} labelText="" />;

const passwordInputWithRef = <TextInput.PasswordInput id="my-id" ref={inputRef} labelText="" />;

const controlledPasswordInputWithRef = <TextInput.ControlledPasswordInput id="my-id" ref={inputRef} labelText="" />;

// NumberInput
{
    const numberInput = <NumberInput id="my-id" value={12} />;
    const emptyNumberInput = <NumberInput id="empty-id" value="" />;

    const numberInputOnChangeT1 = (
        <NumberInput
            id="id"
            onChange={((evt, { direction, value }) => evt.preventDefault()) as NumberInputOnChangeDataVariant}
            value=""
        />
    );

    const numberInputOnChangeT2 = (
        <NumberInput
            id="id"
            onChange={(evt, direction, value) => {
                if (direction === 'down') {
                    evt.preventDefault();
                }
            }}
            value=""
        />
    );

    const numberInputOnChangeT3 = (
        <NumberInput
            id="id"
            onChange={((evt, direction, value) => evt.preventDefault()) as NumberInputOnChangeDefaultVariant}
            value=""
        />
    );

    const numberInputOnClickT1 = (
        <NumberInput
            id="id"
            onClick={((evt, direction, value) => evt.preventDefault()) as NumberInputOnClickDefaultVariant}
            value=""
        />
    );

    const numberInputOnClickT2 = (
        <NumberInput
            id="id"
            onClick={((evt, { direction, value }) => evt.preventDefault()) as NumberInputOnClickDataVariant}
            value=""
        />
    );

    const numberInputOnClickT3 = (
        <NumberInput id="id" onClick={(evt => evt.currentTarget.checked) as NumberInputOnClickInputVariant} value="" />
    );
}

// FileUploader
const fileUploaderHasOnChange = <FileUploader onChange={e => {}} />;

const fileUploaderDropContainer = (
    <FileUploaderDropContainer
        accept={['image/jpeg', 'image/png']}
        labelText="Drag and drop files here or click to upload"
        multiple
        name=""
        onAddFiles={(event, content) => {}}
        onChange={event => {}}
        role=""
        tabIndex={0}
    />
);

const fileUploaderItem = (
    <FileUploaderItem
        errorBody="500kb max file size. Select a new file and try again."
        errorSubject="File size exceeds limit"
        iconDescription="Clear file"
        name="README.md"
        onDelete={(event, content) => {}}
        size="field"
        status="edit"
        uuid="id1"
    />
);

const multiSelect = (
    <MultiSelect
        id="clusters"
        initialSelectedItems={['one']}
        items={['one', 'two']}
        light
        titleText="Choose an item"
        itemToString={item => item || ''}
        onChange={({ selectedItems }) => {}}
    />
);

interface MultiSelectObjType1 {
    id: number;
    name: string;
    someBoolProp?: boolean | undefined;
}

const MultiSelectItemComp: React.FC<MultiSelectObjType1> = () => <div />;

const multiSelectObjs = (
    <MultiSelect<MultiSelectObjType1>
        id="disks"
        items={[
            { id: 1, name: 'one' },
            { id: 2, name: 'two', someBoolProp: true },
        ]}
        itemToString={item => item.name || ''}
        itemToElement={MultiSelectItemComp}
        onChange={({ selectedItems }) => {}}
    />
);

const multiSelectObjsBadCustomComp = (
    <MultiSelect<MultiSelectObjType1>
        id="disks"
        items={[
            { id: 1, name: 'one' },
            { id: 2, name: 'two', someBoolProp: true },
        ]}
        // @ts-expect-error
        itemToElement={TestComp2}
    />
);

const multiSelectFilterable = (
    <MultiSelect.Filterable
        id="clusters"
        initialSelectedItems={['one']}
        items={['one', 'two']}
        light
        placeholder="Filter"
        titleText="Choose an item"
        itemToString={item => item || ''}
        onChange={({ selectedItems }) => {}}
    />
);

const multiSelectFilterableObjs: MultiSelectObjType1[] = [
    {
        id: 1,
        name: 'One',
    },
    {
        id: 2,
        name: 'Two',
        someBoolProp: true,
    },
];
const multiSelectFilterableObj = (
    <MultiSelect.Filterable<MultiSelectObjType1>
        id="clusters"
        initialSelectedItems={[multiSelectFilterableObjs[0]]}
        items={multiSelectFilterableObjs}
        light
        placeholder="Filter"
        titleText="Choose an item"
        itemToString={item => (item && item.name ? item.name : '')}
        onChange={({ selectedItems }) => {}}
    />
);

// Grid
{
    // Grid: Row
    const rowDefaultT1 = (
        <Row onClick={event => {}} data-testid="5" title="test-title">
            Contents
        </Row>
    );

    const rowDefaultT2 = (
        <Row as={undefined} onClick={(event: React.MouseEvent<HTMLDivElement>) => {}}>
            Contents
        </Row>
    );

    const rowDefaultT3 = (
        // @ts-expect-error
        <Row onClick={event => {}} data-testid="5" title="test-title" unknownProp={true}>
            Contents
        </Row>
    );

    const rowCustomIntrinsic = (
        <Row as="li" onClick={(event: React.MouseEvent<HTMLLIElement>) => {}}>
            Contents
        </Row>
    );

    const rowCustomComp1 = (
        <Row as={TestComp1} someProp={5}>
            Content
        </Row>
    );

    const rowCustomComp2 = (
        // @ts-expect-error
        <Row as={TestComp1} someProp={5} unknownProp="test">
            Content
        </Row>
    );

    // Grid: Column
    const columnDefaultT1 = (
        <Column onClick={(event: React.MouseEvent<HTMLDivElement>) => {}} lg={{ offset: 4 }}>
            Contents
        </Column>
    );

    const columnDefaultT2 = (
        <Column as={undefined} onClick={(event: React.MouseEvent<HTMLDivElement>) => {}}>
            Contents
        </Column>
    );

    const columnCustomIntrinsic = (
        <Column as="li" onClick={(event: React.MouseEvent<HTMLLIElement>) => {}}>
            Contents
        </Column>
    );

    const columnCustomComp1 = (
        <Column as={TestComp2} someProp={5} xlg={5} sm={2}>
            Content
        </Column>
    );
}

// SideNav
const sideNavChildren = (
    <SideNav>
        <SideNavItems>
            <SideNavItem>Test</SideNavItem>
        </SideNavItems>
    </SideNav>
);

const modal = <Modal primaryButtonText={<InlineLoading />} secondaryButtonText={<InlineLoading />} />;

// DataTableSkeleton
const dataTableSkeleton = (
    <DataTableSkeleton
        showHeader={true}
        showToolbar={true}
        columnCount={5}
        rowCount={6}
        compact={false}
        zebra={false}
    />
);

const dataTableSkeletonBasic = <DataTableSkeleton />;

// LayoutDirection
{
    const layoutDirectionDefaultT1 = (
        <LayoutDirection onClick={event => void event.currentTarget} data-testid="test-id" tabIndex={0}>
            Contents
        </LayoutDirection>
    );

    const layoutDirectionDefaultT2 = (
        <LayoutDirection as={undefined} onClick={(event: React.MouseEvent<HTMLDivElement>) => {}}>
            Contents
        </LayoutDirection>
    );

    const layoutDirectionDefaultT3 = (
        // @ts-expect-error
        <LayoutDirection unknownProp="true">Contents</LayoutDirection>
    );

    const layoutDirectionCustomIntrinsic = (
        <LayoutDirection as="li" onClick={(event: React.MouseEvent<HTMLLIElement>) => {}} value="value">
            Contents
        </LayoutDirection>
    );

    const layoutDirectionCustomCompT1 = (
        <LayoutDirection as={TestComp2} someProp={5}>
            Content
        </LayoutDirection>
    );

    const layoutDirectionCustomCompT2 = (
        // @ts-expect-error
        <LayoutDirection as={TestComp2} somethingElse={5}>
            Content
        </LayoutDirection>
    );
}

//
// Search
//
{
    const searchT1 = <Search labelText="Search..." renderIcon={<svg></svg>} />;

    const searchT2 = (
        // @ts-expect-error
        <Search labelText="Search..." renderIcon={TestComp2} />
    );
}

//
// Dialog
//
{
    const dialogDefaultT1 = <Dialog aria-labelledby="test">children</Dialog>;

    const dialogIntrinsicT1 = (
        <Dialog as="fieldset" aria-labelledby="test" data-testid="test" disabled form="form" onDismiss={() => {}}>
            children
        </Dialog>
    );

    const dialogCustomCompT1 = (
        <Dialog as={TestComp2} aria-labelledby="test" onDismiss={() => {}} someProp={5} data-testid="test">
            Test
        </Dialog>
    );

    const dialogCustomCompT2 = (
        // @ts-expect-error
        <Dialog
            as={TestComp2}
            aria-labelledby="test"
            onDismiss={() => {}}
            someProp={5}
            unknownProp="a"
            data-testid="test"
        >
            Test
        </Dialog>
    );
}

//
// Checkbox
//
{
    const inputRef = React.createRef<HTMLInputElement>();
    <Checkbox id="" labelText="" ref={inputRef} />;
}

//
// ComboBox
//
{
    const comboBoxWithMandatoryProps = <ComboBox id="cbId" items={['item 1', 'item 2', 'item 3']} />;
    const comboBoxWithOptionalProps = (
        <ComboBox
            id="someId"
            light={false}
            items={['item 1', 'item 2', 'item 3']}
            selectedItem={'item 1'}
            placeholder={'filter...'}
            titleText={'some title'}
            invalid={false}
            invalidText={'Please select one of the available items.'}
        />
    );
}
