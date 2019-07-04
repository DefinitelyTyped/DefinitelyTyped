import * as React from 'react';
import {
    createTheme, LightThemePrimitives, mergeOverrides, BaseProvider, styled
} from 'baseui';
import { Block } from 'baseui/block';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Accordion, Panel, StatefulPanel } from 'baseui/accordion';
import { Avatar } from 'baseui/avatar';
import { Breadcrumbs } from 'baseui/breadcrumbs';
import { Button, KIND as BUTTON_KIND, SHAPE as BUTTON_SHAPE, SIZE as BUTTON_SIZE } from 'baseui/button';
import { ButtonGroup, StatefulButtonGroup, MODE as BUTTON_GROUP_MODE } from 'baseui/button-group';
import { Card, StyledBody } from 'baseui/card';
import { Checkbox, StatefulCheckbox } from 'baseui/checkbox';
import { StatefulCalendar, StatefulDatepicker, TimePicker, TimezonePicker, Datepicker } from 'baseui/datepicker';
import { StatefulList, List } from 'baseui/dnd-list';
import { FileUploader } from 'baseui/file-uploader';
import { FormControl } from 'baseui/form-control';
import {
    HeaderNavigation,
    StyledNavigationItem as NavigationItem,
    StyledNavigationList as NavigationList,
    ALIGN as NAV_ALIGN,
} from 'baseui/header-navigation';
import { Heading, HeadingLevel } from 'baseui/heading';
import ArrowUp from 'baseui/icon/arrow-up';
import ArrowRight from 'baseui/icon/arrow-right';
import ArrowDown from 'baseui/icon/arrow-down';
import ArrowLeft from 'baseui/icon/arrow-left';
import { Input, MaskedInput, StatefulInput, SIZE as INPUT_SIZE } from 'baseui/input';
import { Layer, TetherBehavior } from 'baseui/layer';
import { StyledLink } from 'baseui/link';
import { Menu, StatefulMenu, NestedMenus } from 'baseui/menu';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalButton,
} from 'baseui/modal';
import { Notification } from 'baseui/notification';
import { Pagination, StatefulPagination } from 'baseui/pagination';
import { Popover, StatefulPopover } from 'baseui/popover';
import { ProgressBar } from 'baseui/progress-bar';
import { NumberedStep, ProgressSteps, Step, StyledProgressSteps, StyleProps as ProgressStepsStyleProps } from 'baseui/progress-steps';
import { Radio, RadioGroup, StatefulRadioGroup } from 'baseui/radio';
import { StarRating, EmoticonRating } from 'baseui/rating';
import { StatefulSelect, Select } from 'baseui/select';
import { Navigation } from 'baseui/side-navigation';
import { Slider, StatefulSlider } from 'baseui/slider';
import { Spinner } from 'baseui/spinner';
import {
    StyledTable,
    StyledHead,
    StyledHeadCell,
    StyledBody as StyledTableBody,
    StyledRow,
    StyledCell,
    StyledAction,
    Table,
} from 'baseui/table';
import { Tab, Tabs, StatefulTabs, ORIENTATION as TAB_ORIENTATION } from 'baseui/tabs';
import { Tag, KIND as TAG_KIND, VARIANT as TAG_VARIANT } from 'baseui/tag';
import { StatefulTextarea as Textarea } from 'baseui/textarea';
import { ToasterContainer, Toast, KIND as TOAST_KIND } from 'baseui/toast';
import { StatefulTooltip } from 'baseui/tooltip';
import {
    Label1,
    Label2,
    Caption1,
    Caption2,
    Paragraph1,
    Paragraph2,
} from 'baseui/typography';
import { PaymentCard, StatefulPaymentCard } from 'baseui/payment-card';
import { PhoneInput, StatefulPhoneInput, COUNTRIES } from 'baseui/phone-input';

// Base API
const newTheme = createTheme({...LightThemePrimitives}, {}); // $ExpectType Theme
createTheme({primary: 'red'}, {}); // $ExpectError

mergeOverrides({style: {}}, {props: {}});
mergeOverrides({style: {}}, 'hello'); // $ExpectError
mergeOverrides({style: {}}, {name: 'override'}); // $ExpectError

styled(StyledProgressSteps, { marginTop: '10px' });
styled(StyledProgressSteps, { marginTop: null }); // $ExpectError
styled(StyledProgressSteps, ({ $theme }) => ({ marginTop: '10px' }));
const StyledAnchor = styled('a', { marginTop: '10px' });
const NewStyledProgressSteps = styled<ProgressStepsStyleProps, typeof StyledProgressSteps>(
    StyledProgressSteps,
    ({ $theme, $disabled }) => ({ marginTop: '10px' })
);

<StyledAnchor href="url" />;
<NewStyledProgressSteps $disabled="string" />; // $ExpectError
<NewStyledProgressSteps $disabled={false} />;

<BaseProvider theme={newTheme}></BaseProvider>; // $ExpectError

// Accordion
<Accordion>
    <Panel overrides={{Header: {}}} title='Accordion panel 1'>Content</Panel>
</Accordion>;

<Accordion>
    <Panel overrides={{InvalidOverride: {}}} title='Accordion panel 1'>Content</Panel> // $ExpectError
</Accordion>;

<StatefulPanel/>; // $ExpectError
<StatefulPanel>Test Panel</StatefulPanel>;

// Avatar
<Avatar name='user' size='10'/>;
<Avatar name='user' size={10}/>; // $ExpectError

// Block
<Block as='h1'/>;
<Block nonExistentProp={true}/>; // $ExpectError
<Block display='ghost'/>; // $ExpectError

// Breadcrumbs
<Breadcrumbs>
    <StyledLink href="#">Parent Page</StyledLink>
    <StyledLink href="#">Sub-Parent Page</StyledLink>
    <span>Current Page</span>
</Breadcrumbs>;
<Breadcrumbs/>;

// Button
<Button>Click Me</Button>;
<Button kind='secondary'>Click Me</Button>;
<Button kind={BUTTON_KIND.minimal} shape={BUTTON_SHAPE.default} size={BUTTON_SIZE.default}>
    Click Me
</Button>;
<Button kind='invalid'>Click Me</Button>; // $ExpectError
<Button isLoading>Click Me</Button>;
<Button isLoading='nope'>Click Me</Button>; // $ExpectError
<Button size='default'>Click Me</Button>;
<Button size='huge'>Click Me</Button>; // $ExpectError
<Button size="compact">Click Me</Button>;
<Button size="default">Click Me</Button>;
<Button size="large">Click Me</Button>;
<Button shape='square'>Click Me</Button>;
<Button shape='round'>Click Me</Button>;
<Button shape='triangle'>Primary</Button>; // $ExpectError
<Button endEnhancer={() => <h1 />}>Open Menu</Button>;

// Button-Group
<ButtonGroup>
    <Button>Label</Button>
    <Button>Label</Button>
    <Button>Label</Button>
</ButtonGroup>;
<StatefulButtonGroup mode="radio" initialState={{selected: 0}}>
    <Button>Label</Button>
    <Button>Label</Button>
</StatefulButtonGroup>;
<StatefulButtonGroup mode={BUTTON_GROUP_MODE.radio} initialState={{ selected: 0 }}>
    <Button>Label</Button>
    <Button>Label</Button>
</StatefulButtonGroup>;
<StatefulButtonGroup mode="dropdown" initialState={{selected: 0}}> // $ExpectError
    <Button>Label</Button>
    <Button>Label</Button>
</StatefulButtonGroup>;

// Card
<Card overrides={{Root: {style: {width: '328px'}}}}>
    <StyledBody>
        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
        faucibus ex, non facilisis nisl.
    </StyledBody>
</Card>;
<Card hasThumbnail/>; // $ExpectError
<Card thumbnail={1234}/>; // $ExpectError
<Card thumbnail={'Cool stuff!'}/>;
<Card headerImage={<img src='cool image'/>}/>; // $ExpectError
<Card headerImage='https://site/img.jpg'/>;

// Checkbox
<Checkbox checked={true} onChange={() => false}>
    Click Me
</Checkbox>;
<StatefulCheckbox onChange={console.log}>click me</StatefulCheckbox>;
<StatefulCheckbox
    onChange={console.log}
    overrides={{Checkmark: () => (<div>Custom</div>)}}
>
    With style overrides
</StatefulCheckbox>;
<StatefulCheckbox
    onChange={console.log}
    overrides={{Box: () => <div>Custom</div>}} // $ExpectError
>
    With style overrides
</StatefulCheckbox>;

<StatefulCheckbox onChange={console.log} checkmarkType='toggle'>
    toggle me
</StatefulCheckbox>;
<StatefulCheckbox onChange={console.log} checkmarkType='squiggly'> // $ExpectError
    toggle me
</StatefulCheckbox>;

// Datepicker
<StatefulCalendar/>;
<StatefulDatepicker
    range
    initialState={{value: [new Date(), new Date()]}}
    placeholder="YYYY/MM/YY - YYYY/MM/YY"
/>;
<StatefulCalendar range quickSelect />;
<StatefulCalendar
    initialState={{value: new Date()}}
    overrides={{
        CalendarHeader: {
            style: () => ({
                backgroundColor: 'red',
            }),
        },
    }}
/>;
<TimePicker value={null} onChange={() => ({})} />;
<TimePicker value={'03/04/2019'} onChange={() => ({})} />; // $ExpectError
<TimePicker value={new Date()} onChange={() => ({})} />;
<TimePicker/>; // $ExpectError
<TimezonePicker date={new Date(2019, 3, 1)} />;
<Datepicker
    value={[new Date(), new Date()]}
    onChange={() => ({})}
    formatDisplayValue={(date) => 'formatted date'}
    timeSelectStart
    range
/>;

// DND List
<StatefulList
    initialState={{
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    }}
    onChange={console.log}
/>;
<List
    items={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']}
    onChange={() => ({})}
/>;
<List/>;
<List removable='true'/>; // $ExpectError
<StatefulList
    removable
    initialState={{
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    }}
    onChange={console.log}
/>;
<StatefulList
    initialState={{
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    }}
    overrides={{
        DragHandle: <div>Drag Me</div>,
    }}
    onChange={console.log}
/>;
<StatefulList
    initialState={{
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    }}
    overrides={{
        Label: {
            style: () => ({}),
        },
    }}
    onChange={console.log}
/>;

// File Uploader
<FileUploader
    onCancel={() => ({})}
    onDrop={() => ({})}
    progressAmount={10}
    progressMessage={'Uploading'}
/>;
<FileUploader
    onCancel={() => ({})}
    onDrop={() => ({})}
    progressAmount={'10'} // $ExpectError
    progressMessage={'Uploading'}
/>;

<FileUploader
    errorMessage='Oops something went wrong'
    onCancel={() => ({})}
    onDrop={() => ({})}
    progressAmount={10}
    progressMessage={'Uploading'}
/>;
<FileUploader
    disabled
    errorMessage='Oops something went wrong'
    onCancel={() => ({})}
    onDrop={() => ({})}
    progressAmount={10}
    progressMessage={'Uploading'}
/>;

// FlexGrid + FlexGridItem
<FlexGrid as='h2'/>;
<FlexGrid display='ghost'/>; // $ExpectError
<FlexGrid>
    <FlexGridItem>1</FlexGridItem>
</FlexGrid>;
// $ExpectError
<FlexGrid flexGridColumnCount='1'>
    <FlexGridItem>1</FlexGridItem>
</FlexGrid>;

// Form Control
<FormControl label="Checkbox label" caption="Checkbox caption">
    <StatefulCheckbox>Checkbox control</StatefulCheckbox>
</FormControl>;
<FormControl
    positive="Positive caption"
    label="Input label"
    caption="Input caption"
>
    Positive
</FormControl>;
<FormControl
    error="Error caption"
    label="Input label"
    caption="Input caption"
>
    Negative
</FormControl>;
<FormControl negative='Negative Caption'/>; // $ExpectError

// Header Navigation
<HeaderNavigation>
    <NavigationList $align={'left'}>
        <NavigationItem>Uber</NavigationItem>
    </NavigationList>
    <NavigationList $align={'center'} />
    <NavigationList $align={'right'}>
        <NavigationItem>
            <Button>Get started</Button>
        </NavigationItem>
        <NavigationItem>
            <Button>Get started</Button>
        </NavigationItem>
    </NavigationList>
    <NavigationList $align={NAV_ALIGN.right}>
        <NavigationItem>
            <Button>Get started</Button>
        </NavigationItem>
    </NavigationList>
</HeaderNavigation>;

// Heading
<Heading>Base Web [L1]</Heading>;
<HeadingLevel>
    <Heading styleLevel={5}>Subtitle [L5]</Heading>
</HeadingLevel>;
<Heading as='span'>Span</Heading>;
<Heading invalid='span'/>; // $ExpectError
<HeadingLevel/>; // $ExpectError

// Icon
<ArrowUp size={36} />;
<ArrowUp size={36} />;
<ArrowDown size={36} />;
<ArrowDown size={36} />;
<ArrowLeft size={36} />;
<ArrowRight size={36} />;
<ArrowLeft size={36} />;
<ArrowRight size={36} />;
<ArrowUp size='large' />;

// Input
<Input
    onChange={() => ({})}
    placeholder="Controlled Input"
    value={'Hey'}
/>;
<StatefulInput placeholder="Uncontrolled Input" />;
<StatefulInput size={'default'} placeholder="default" />;
<StatefulInput size={INPUT_SIZE.default} placeholder="default" />;
<StatefulInput size={'enormous'} placeholder="default" />; // $ExpectError
<StatefulInput
    initialState={{
        value: 'Default Value',
    }}
    placeholder="Uncontrolled Input"
/>;
<StatefulInput placeholder="simple" />;
<StatefulInput initialState={{value: 'uber'}} />;
<StatefulInput placeholder="Input in an error state" error />;
<StatefulInput placeholder="Input in an positive state" positive />;
<StatefulInput placeholder="Disabled input" disabled />;
<StatefulInput
    startEnhancer="$"
    endEnhancer=".00"
    placeholder="Input with start and end enhancers"
/>;
<MaskedInput placeholder="Phone number" mask="(999) 999-9999" />;
<StatefulInput inputRef={React.createRef()} placeholder="With input ref" />;
<StatefulInput inputRef={true} placeholder="With input ref" />; // $ExpectError

// Layer
<Layer/>; // $ExpectError
<Layer>
    <Block/>
</Layer>;
<TetherBehavior
    anchorRef={React.createRef()}
    popperRef={React.createRef()}
    onPopperUpdate={() => ({})}
    placement={'right'}
>
    <Block/>
</TetherBehavior>;
<TetherBehavior
    anchorRef={React.createRef()}
    popperRef={React.createRef()}
    onPopperUpdate={() => ({})}
    placement='offtotheright' // $ExpectError
>
    <Block/>
</TetherBehavior>;

// Link
<StyledLink href="https://baseui.design">Link to baseui.design</StyledLink>;

// Menu
const ITEMS = [
    {label: 'Item One'},
    {label: 'Item Two'},
    {label: 'Item Three'},
    {label: 'Item Four'},
    {label: 'Item Five'},
    {label: 'Item Six'},
    {label: 'Item Seven'},
    {label: 'Item Eight'},
    {label: 'Item Nine'},
    {label: 'Item Ten'},
    {label: 'Item Eleven'},
    {label: 'Item Twelve'},
];
<Menu
    items={ITEMS}
    rootRef={React.createRef()}
    overrides={{
    List: {
        style: {
        width: '200px',
        },
    },
    Option: {
        props: {
        getItemLabel: () => 'Some label',
        },
    },
    }}
/>;
<Menu
    items={{label: 'Item One'}} // $ExpectError
    rootRef={React.createRef()}
    overrides={{
    List: {
        style: {
        width: '200px',
        },
    },
    Option: {
        props: {
            getItemLabel: () => 'Some label',
        },
    },
    }}
/>;
<Menu
    items={ITEMS}
    rootRef={React.createRef()}
    overrides={{
    List: {
        style: {
        width: '200px',
        },
    },
    Option: {
        props: {
            getItemLabel: () => 'Some label',
            size: 'compact'
        },
    },
    }}
/>;
<StatefulMenu
    items={ITEMS}
    onItemSelect={console.log}
    overrides={{
        List: {
            style: {
                height: '150px',
                width: '350px',
            },
        },
        Option: {
            props: {
                getItemLabel: () => 'Some label',
            },
        },
    }}
/>;
<NestedMenus>
    <StatefulMenu
        items={ITEMS}
        overrides={{
            List: {style: {width: '350px', overflow: 'auto'}}
        }}
    />
</NestedMenus>;
<NestedMenus/>; // $ExpectError

// Modal
<Modal onClose={console.log} isOpen={true}>
    <ModalHeader>Hello world</ModalHeader>
    <ModalBody>
        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
        faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut tempus.
    </ModalBody>
    <ModalFooter>
        <ModalButton onClick={console.log}>Cancel</ModalButton>
        <ModalButton onClick={console.log}>Okay</ModalButton>
    </ModalFooter>
</Modal>;
<Modal role='lieutenant'/>; // $ExpectError

// Notification
<Notification>Default info notification</Notification>;
<Notification kind={'positive'}>Positive notification</Notification>;
<Notification kind={'warning'}>Warning notification</Notification>;
<Notification kind={'negative'}>Negative notification</Notification>;
<Notification kind={'default'}>Negative notification</Notification>; // $ExpectError
<Notification closeable>Negative notification</Notification>;

// Pagination
<Pagination
    numPages={20}
    currentPage={1}
    onPageChange={() => ({})}
/>;
<Pagination
    numPages={20}
    currentPage={'10'} // $ExpectError
    onPageChange={() => ({})}
/>;
<StatefulPagination numPages={10} />;
<StatefulPagination
    numPages={10}
    labels={{prevButton: 'Back', nextButton: 'Forward', preposition: 'out of'}}
/>;

// Popover
<Popover
    isOpen
    content={<div>hello world</div>}
>
    <Block as="span" font="font400">
        Always open
    </Block>
</Popover>;
<StatefulPopover
    content={<div>hello world</div>}
    accessibilityType={'tooltip'}
>
    <Button>Open</Button>
</StatefulPopover>;
<StatefulPopover
    content={<div>hello world</div>}
    accessibilityType={'tooltip'}
    triggerType={'hover'}
>
    <Block as="span" font="font400">
        Hover
    </Block>
</StatefulPopover>;
<StatefulPopover
    content={<div>hello world</div>}
    placement={'topRight'}
>
    <Block as="span" font="font400">
        Hover
    </Block>
</StatefulPopover>;
<StatefulPopover
    content={<div>hello world</div>}
    placement={'center'} // $ExpectError
>
    <Block as="span" font="font400">
        Hover
    </Block>
</StatefulPopover>;

<StatefulPopover
    initialState={{isOpen: true}}
    dismissOnEsc={false}
    dismissOnClickOutside={false}
    content={'Hello!'}
    placement={'top'}
>
    <Button>Click Me</Button>
</StatefulPopover>;
<StatefulPopover
    initialState={{isOpen: true}}
    dismissOnEsc={false}
    showArrow
    dismissOnClickOutside={false}
    content={'Hello!'}
    placement={'top'}
>
    <Button>Click Me</Button>
</StatefulPopover>;

// Progress Bar
<ProgressBar value={20} successValue={10} />;
<ProgressBar value={20} successValue={10} showLabel />;
<ProgressBar value={20} successValue={10} showLabel getProgressLabel='Label'/>; // $ExpectError
<ProgressBar value={20} successValue={10} showLabel getProgressLabel={() => 'Label'}/>;

// Progress Steps
<ProgressSteps current={1}>
    <Step title="Create Account">
        <Block font="font400">Here is some step content</Block>
    </Step>
    <Step title="Verify Payment">
    </Step>
    <Step title="Add Payment Method">
        <Block font="font400">Here too!</Block>
    </Step>
</ProgressSteps>;
<ProgressSteps current={1}>
    <NumberedStep title="Create Account">
        <Block font="font400">Here is some NumberedStep content</Block>
    </NumberedStep>
    <NumberedStep title="Verify Payment">
    </NumberedStep>
    <NumberedStep title="Add Payment Method">
        <Block font="font400">Here too!</Block>
    </NumberedStep>
</ProgressSteps>;
<ProgressSteps/>;

// Radio
<RadioGroup
    name="radio group"
    onChange={() => ({})}
    value={1} // $ExpectError
>
    <Radio value="1">First</Radio>
    <Radio
        value="2"
        description="This is a radio description, it gives a little more in-yo-face context about what this is."
    >
        Second
    </Radio>
    <Radio value="3">Third</Radio>
</RadioGroup>;

<RadioGroup
    name="radio group"
    onChange={() => ({})}
    value={'1'}
>
    <Radio value="1">First</Radio>
    <Radio
        value="2"
        description="This is a radio description, it gives a little more in-yo-face context about what this is."
    >
        Second
    </Radio>
    <Radio value="3">Third</Radio>
</RadioGroup>;
<StatefulRadioGroup name="choose one option" initialState={{value: '2'}}>
    <Radio value="1">First</Radio>
    <Radio value="2">Second</Radio>
    <Radio value="3">Third</Radio>
</StatefulRadioGroup>;
<RadioGroup disabled name="radio group" value="1">
    <Radio value="1">Checked</Radio>
    <Radio value="2">Unchecked</Radio>
</RadioGroup>;
<RadioGroup
    align="horizontal"
    name="radio group"
    onChange={() => ({})}
    value={'1'}
>
    <Radio value="1">First</Radio>
    <Radio value="2">Second</Radio>
    <Radio value="3">Third</Radio>
</RadioGroup>;
<RadioGroup
    isError
    name="radio group"
    onChange={() => ({})}
    value={'2'}
>
    <Radio value="1">First</Radio>
    <Radio value="2">Second</Radio>
    <Radio value="3">Third</Radio>
</RadioGroup>;
<RadioGroup
    name="radio group"
    onChange={() => ({})}
    value={'1'}
>
    <Radio
        overrides={{
            Label: () => (
                <div>Choose me</div>
            ),
            RadioMarkOuter: {
                style: ({$theme}) => ({borderColor: $theme.colors.positive}),
            },
        }}
        value="1"
    >
        First
    </Radio>
</RadioGroup>;

// Rating
<StarRating
    value={1}
    onChange={() => ({})}
/>;
<EmoticonRating
    value={3}
    onChange={() => ({})}
/>;
<StarRating
    overrides={{
        Invalid: {} // $ExpectError
    }}
    value={1}
    onChange={() => ({})}
/>;

// Select
const SELECT_OPTIONS = [
    {id: 'AliceBlue', color: '#F0F8FF'},
    {id: 'AntiqueWhite', color: '#FAEBD7'},
];
<StatefulSelect
    options={SELECT_OPTIONS}
    labelKey="id"
    valueKey="color"
    onChange={console.info}
/>;
<StatefulSelect
    size={'large'}
    options={SELECT_OPTIONS}
    labelKey="id"
    valueKey="color"
    onChange={console.info}
/>;
<Select
    options={SELECT_OPTIONS}
    labelKey="id"
    valueKey="color"
    onChange={console.info}
    value={'a'} // $ExpectError
/>;
<Select
    options={SELECT_OPTIONS}
    labelKey="id"
    valueKey="color"
    onChange={console.info}
    value={[SELECT_OPTIONS[0]]}
/>;
<StatefulSelect
    options={SELECT_OPTIONS}
    labelKey="id"
    valueKey="color"
    placeholder="Choose a color"
    maxDropdownHeight="300px"
    type={'search'}
    multi
    onChange={console.info}
/>;
<Select
    options={SELECT_OPTIONS}
    labelKey="id"
    valueKey="color"
    searchable={false}
    clearable={false}
    onChange={console.info}
    value={[SELECT_OPTIONS[1]]}
/>;
<StatefulSelect
    creatable
    options={SELECT_OPTIONS}
    labelKey="id"
    valueKey="color"
    searchable={false}
    clearable={false}
    onChange={console.info}
    value={[SELECT_OPTIONS[0]]}
/>;

// Side Navigation
const nav = [
    {
        title: 'Colors',
        itemId: '#level1.1',
        subNav: [
            {
                title: 'Primary',
                itemId: '#level1.1.1',
            },
        ],
    },
    {
        title: 'Sizing',
        itemId: '#level1.2',
    },
    {
        title: 'Typography',
        itemId: '#level1.3',
    },
];
<Navigation
    items={nav}
    activeItemId={'#level1.1'}
    onChange={console.info}
/>;

// Slider
<Slider
    value={[24]}
    onChange={console.info}
/>;
<Slider
    value={24} // $ExpectError
    onChange={console.info}
/>;
<Slider
    value={'100'} // $ExpectError
    onChange={console.info}
/>;
<StatefulSlider/>;
<Slider
    disabled
    value={[24]}
    onChange={console.info}
/>;
<Slider
    value={[10]}
    min={-300}
    max={300}
    step={10}
    onChange={console.info}
/>;
<Slider
    value={[2000]}
    min={1000}
    max={8000}
    step={100}
    onChange={console.info}
    overrides={{
        ThumbValue: () => <div/>,
        TickBar: () => <div/>
    }}
/>;

// Spinner
<Spinner/>;
<Spinner
    overrides={{
        ActivePath: {style: () => ({fill: 'red'})},
    }}
/>;
<Spinner size={96} />;
<Spinner size={'LARGE'} />;

// Table
const DATA = [
    ['Sarah Brown', 31, '100 Broadway st. New York City, New York'],
    ['Jane Smith', 32, '100 Market st. San Francisco, California'],
    ['Joe Black', 33, '100 Macquarie st. Sydney, Australia'],
];
const COLUMNS = ['Name', 'Age', 'Address'];
<Table columns={COLUMNS} data={DATA} />;
<StyledTable>
    <StyledHead $width="1000px">
        <StyledHeadCell>Name</StyledHeadCell>
        <StyledHeadCell>Role</StyledHeadCell>
        <StyledHeadCell>Delta</StyledHeadCell>
        <StyledHeadCell>Amount</StyledHeadCell>
        <StyledHeadCell>Actions</StyledHeadCell>
    </StyledHead>
    <StyledTableBody $width="1000px">
        {DATA.map((row, index) => (
            <StyledRow key={index}>
                <StyledCell>{row[0]}</StyledCell>
                <StyledHeadCell>
                    <Block>
                        <div>{row[1]}</div>
                    </Block>
                </StyledHeadCell>
                <StyledCell $isNegative={row[3] < 0}>
                    <Block/>
                </StyledCell>
                <StyledCell>
                    <Block font="font500">{row[4]}</Block>
                </StyledCell>
                <StyledCell>
                    <StyledAction>
                    </StyledAction>
                    <StyledAction>
                    </StyledAction>
                    <StyledAction>
                    </StyledAction>
                    <StyledAction>
                    </StyledAction>
                </StyledCell>
            </StyledRow>
        ))}
    </StyledTableBody>
</StyledTable>;
<Table columns={COLUMNS} data={DATA} horizontalScrollWidth="1000px" />;

// Tabs
<StatefulTabs initialState={{activeKey: '0'}}>
    <Tab title="Tab Link 1">Tab 1 content</Tab>
    <Tab title="Tab Link 2">Tab 2 content</Tab>
    <Tab title="Tab Link 3">Tab 3 content</Tab>
</StatefulTabs>;
<StatefulTabs
    orientation={'vertical'}
    initialState={{activeKey: '2'}}
>
    <Tab title="Tab Link 1">Tab 1 content</Tab>
    <Tab title="Tab Link 2">Tab 2 content</Tab>
    <Tab title="Tab Link 3">Tab 3 content</Tab>
</StatefulTabs>;
<StatefulTabs orientation={TAB_ORIENTATION.vertical} initialState={{ activeKey: '2' }}>
    <Tab title="Tab Link 1">Tab 1 content</Tab>
    <Tab title="Tab Link 2">Tab 2 content</Tab>
    <Tab title="Tab Link 3">Tab 3 content</Tab>
</StatefulTabs>;
<StatefulTabs
    orientation={'up'} // $ExpectError
    initialState={{activeKey: '2'}}
>
    <Tab title="Tab Link 1">Tab 1 content</Tab>
    <Tab title="Tab Link 2">Tab 2 content</Tab>
    <Tab title="Tab Link 3">Tab 3 content</Tab>
</StatefulTabs>;
<StatefulTabs orientation={TAB_ORIENTATION.vertical} initialState={{ activeKey: '2' }}>
    <Tab title="Tab Link 1">Tab 1 content</Tab>
    <Tab title="Tab Link 2">Tab 2 content</Tab>
    <Tab title="Tab Link 3">Tab 3 content</Tab>
</StatefulTabs>;

<Tabs activeKey={'2'} onChange={console.info}>
    <Tab title="Tab Link 1" />
    <Tab title="Tab Link 2" />
    <Tab title="Tab Link 3" />
</Tabs>;
<Tabs activeKey={2} onChange={console.info}>
    <Tab title="Tab Link 1" />
    <Tab title="Tab Link 2" />
    <Tab title="Tab Link 3" />
</Tabs>;

// Tag
<Tag>default</Tag>;
<Tag>long text inside the tag</Tag>;
<Tag variant={'solid'} kind={'neutral'}>
    With kind
</Tag>;
<Tag variant={TAG_VARIANT.solid} kind={TAG_KIND.neutral}>
    With kind
</Tag>;
<Tag disabled variant={'solid'} kind={'neutral'}>
    With kind
</Tag>;
<Tag closeable={false} variant={'solid'} kind={'neutral'}>
    With kind
</Tag>;
<Tag variant={'solid'} kind={'default'}> // $ExpectError
    With kind
</Tag>;
<Tag/>;

// Textarea
<Textarea size={'compact'} placeholder="Compact textarea" />;
<Textarea initialState={{value: 'uber'}} placeholder="Default textarea" />;
<Textarea size={'large'} positive placeholder="Large textarea" />;
<Textarea size={'enormous'} positive placeholder="Large textarea" />; // $ExpectError
<Textarea size={'enormous'} average placeholder="Large textarea" />; // $ExpectError
<Textarea error={true} placeholder="Placeholder" />;
<Textarea disabled placeholder="Disabled textarea" />;
<Textarea inputRef={React.createRef()} placeholder="With textarea input ref" />;

// Toast
<ToasterContainer placement={'bottomRight'} />;
<Toast>Default info notification</Toast>;
<Toast kind={'positive'}>Positive notification</Toast>;
<Toast kind={'warning'}>Warning notification</Toast>;
<Toast kind={'negative'}>Negative notification</Toast>;
<Toast kind={TOAST_KIND.negative}>Negative notification</Toast>;
<Toast kind={'burnt'}>Negative notification</Toast>; // $ExpectError

// Tooltip
<StatefulTooltip
    accessibilityType={'tooltip'}
    content="Tooltips display short messages."
>
    <a>such as this</a>
</StatefulTooltip>;
<StatefulTooltip
    accessibilityType={'tooltip'}
    content={
        <div>
            <p>Tooltips also support rendering arbitrary content.</p>
            <p>This in includes paragraphs, links, and any other markup.</p>
        </div>
    }
>
    <a>such as this</a>
</StatefulTooltip>;

// Typography
<Label2>Label2</Label2>;
<Paragraph2>{'Paragraph2'}</Paragraph2>;
<Label1>Label1</Label1>;
<Paragraph1>{'Paragraph1'}</Paragraph1>;
<Caption2>Caption2</Caption2>;
<Caption1>{'Caption1'}</Caption1>;

// Payment Card
<PaymentCard
    onChange={console.info}
    placeholder="Enter payment card number"
    value={'amex'}
    size={'compact'}
/>;
<PaymentCard
    onChange={console.info}
    placeholder="Enter payment card number"
    value={'amex'}
    size={'enormous'} // $ExpectError
/>;
<StatefulPaymentCard
    placeholder="Enter payment card number"
    onChange={console.info}
/>;

// Phone Input
<StatefulPhoneInput/>;
<StatefulPhoneInput
    initialState={{
        country: {label: 'Andorra', id: 'AD', dialCode: '+376'}
    }}
/>;
<StatefulPhoneInput
    initialState={{ country: 'Brazil' }} // $ExpectError
/>;
<StatefulPhoneInput initialState={{ country: COUNTRIES.BR }} />;
<PhoneInput
    text={''}
    country={{label: 'Andorra', id: 'AD', dialCode: '+376'}}
    onTextChange={console.info}
    onCountryChange={console.info}
/>;
