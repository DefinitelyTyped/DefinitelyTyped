import * as C from '@wordpress/components';
import { Component } from '@wordpress/element';
import { Value } from '@wordpress/rich-text';
import {
    createRef,
    KeyboardEvent as ReactKeyboardEvent,
    MouseEvent as ReactMouseEvent,
    FocusEvent as ReactFocusEvent,
} from 'react';

//
// primitives
//
<C.Rect width={10} height={10} rx={5} />;
<C.HorizontalRule />;

//
// angle-picker-control
//
<C.AnglePickerControl value={350} label="Test label" onChange={value => console.log(value)} />;

//
// animate
//
<C.Animate type="appear" options={{ origin: 'top left' }}>
    {({ className }) => <h1 className={className}>Hello World</h1>}
</C.Animate>;
<C.Animate type="loading">{({ className }) => <h1 className={className}>Hello World</h1>}</C.Animate>;

//
// autocomplete
//
interface MyCompleteOption {
    visual: string;
    name: string;
    id: number;
}
let record: Value = {
    formats: [],
    replacements: [],
    text: '',
};
<C.Autocomplete<MyCompleteOption>
    onReplace={value => (record = value)}
    onChange={value => (record = value)}
    record={record}
    isSelected={false}
    completers={[
        {
            name: 'fruit',
            // The prefix that triggers this completer
            triggerPrefix: '~',
            // The option data
            options: [
                { visual: '🍎', name: 'Apple', id: 1 },
                { visual: '🍊', name: 'Orange', id: 2 },
                { visual: '🍇', name: 'Grapes', id: 3 },
            ],
            // Returns a label for an option like "🍊 Orange"
            getOptionLabel: option => (
                <span>
                    <span className="icon">{option.visual}</span>
                    {option.name}
                </span>
            ),
            // Declares that options should be matched by their name
            getOptionKeywords: option => [option.name],
            // Declares that the Grapes option is disabled
            isOptionDisabled: option => option.name === 'Grapes',
            // Declares completions should be inserted as abbreviations
            getOptionCompletion: option => <abbr title={option.name}>{option.visual}</abbr>,
        },
    ]}
>
    {({ isExpanded, listBoxId, activeId, onKeyDown }) => (
        <div
            contentEditable
            suppressContentEditableWarning
            aria-autocomplete="list"
            aria-expanded={isExpanded}
            aria-owns={listBoxId}
            aria-activedescendant={activeId}
            onKeyDown={onKeyDown}
        ></div>
    )}
</C.Autocomplete>;

//
// base-control
//
<C.BaseControl id="foo" label="hello world" hideLabelFromVision>
    <C.BaseControl.VisualLabel>My Label</C.BaseControl.VisualLabel>
</C.BaseControl>;

//
// button
//
<C.Button href="#foo" download="foo.txt" isSmall>
    Anchor Button
</C.Button>;

<C.Button autoFocus isDestructive isSecondary>
    Deprecated Button
</C.Button>;

<C.Button autoFocus isDestructive variant="primary">
    Button Button
</C.Button>;

<C.Button showTooltip tooltipPosition="top center" label="A test label">
    Tooltipped button
</C.Button>;

//
// button-group
//
const buttonGroupRef = createRef<HTMLDivElement>();
<C.ButtonGroup ref={buttonGroupRef}>
    <button>Hello</button>
    <button>World</button>
</C.ButtonGroup>;

//
// card
//
<C.Card>I'm a card!</C.Card>;
<C.Card elevation={4} isBorderless className="card" size="large">
    I'm a card with props!
</C.Card>;
<C.Card onClick={(e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {}} />;

// Card renders a `div` by default:
<C.Card onClick={(e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {}} />;
// `div` doesn't support autoFocus:
// @ts-expect-error
<C.Card autoFocus />;

<C.CardBody isShady size="extraSmall">
    Hello world!
</C.CardBody>;

<C.CardHeader isShady size="extraSmall">
    Hello world!
</C.CardHeader>;

<C.CardFooter isBorderless isShady size="extraSmall">
    Hello world!
</C.CardFooter>;

// Divider has no children or props except className
// @ts-expect-error
<C.CardDivider>Hello world!</C.CardDivider>;
// @ts-expect-error
<C.CardDivider isShady />;
<C.CardDivider />;

//
// checkbox-control
//
<C.CheckboxControl checked onChange={isChecked => console.log(isChecked)} />;

//
// clipboard-button
//
<C.ClipboardButton isPrimary text="Copy this" onFinishCopy={() => console.log('copied!')} />;

//
// color-indicator
//
<C.ColorIndicator colorValue="#ff00ff" className="foo" />;

//
// color-palette
//
<C.ColorPalette
    colors={[
        { name: 'red', color: '#ff0000' },
        { name: 'green', color: '#00ff00' },
        { name: 'blue', color: '#0000ff' },
    ]}
    value={'#ff0000'}
    onChange={color => color && console.log(color)}
/>;

<C.ColorPalette
    disableCustomColors
    clearable={false}
    colors={[
        { name: 'red', color: '#ff0000' },
        { name: 'green', color: '#00ff00' },
        { name: 'blue', color: '#0000ff' },
    ]}
    value={'#ff0000'}
    onChange={color => color && console.log(color)}
/>;

//
// color-picker
//
<C.ColorPicker color="#ff0000" onChangeComplete={color => console.log(color.hex)} oldHue={3} />;
<C.ColorPicker onChangeComplete={color => console.log(color.hex)} disableAlpha />;

//
// combobox-control
//
<C.ComboboxControl
    label={'Region'}
    value={'UK'}
    onChange={value => {
        console.log(value);
    }}
    options={[
        {
            label: 'test',
            value: 'test',
        },
    ]}
/>;

//
// custom-select-control
//
<C.CustomSelectControl
    label="Fruit"
    options={[
        { key: 'apple', name: 'Apple', style: { color: 'red' } },
        { key: 'banana', name: 'Banana', style: { backgroundColor: 'yellow' }, className: 'my-favorite-fruit' },
        { key: 'papaya', name: 'Papaya', style: { color: 'orange', backgroundColor: 'green' } },
    ]}
    onChange={v => console.log(v.selectedItem && v.selectedItem.name)}
/>;

//
// dashicon
//
<C.Dashicon icon="editor-code" size={50} />;
<C.Dashicon icon="calculator" />;

//
// date-time
//
<C.DatePicker isInvalidDate={date => isNaN(date.valueOf())} onChange={date => console.log(date.toUpperCase())} />;
<C.TimePicker currentTime={new Date().toISOString()} onChange={time => console.log(time.toUpperCase())} is12Hour />;
<C.DateTimePicker onChange={date => console.log(date.toUpperCase())} />;

//
// disabled
//
<C.Disabled>
    <input type="text" />
</C.Disabled>;
<C.Disabled.Consumer>{isDisabled => <button style={{ opacity: isDisabled ? 0.5 : 1 }} />}</C.Disabled.Consumer>;

//
// draggable
//
<C.Draggable elementId="draggable-panel" transferData={{}}>
    {({ onDraggableStart, onDraggableEnd }) => (
        <div onDragStart={onDraggableStart} onDragEnd={onDraggableEnd} draggable={true} />
    )}
</C.Draggable>;

//
// drop-zone
//
<C.DropZoneProvider>
    <C.DropZone
        onFilesDrop={files => console.log(files.length)}
        onHTMLDrop={html => console.log(html.toUpperCase())}
        onDrop={e => console.log(e.dataTransfer.files.length)}
    />
</C.DropZoneProvider>;

//
// dropdown
//
<C.Dropdown
    className="my-container-class-name"
    contentClassName="my-popover-content-classname"
    position="bottom right"
    renderToggle={({ isOpen, onToggle }) => (
        <button onClick={onToggle} aria-expanded={isOpen}>
            Toggle Popover!
        </button>
    )}
    renderContent={() => <div>This is the content of the popover.</div>}
/>;

//
// dropdown-menu
//
<C.DropdownMenu icon="move" label="Select a direction">
    {({ onClose }) => (
        <div>
            <button onClick={onClose}>Click me</button>
        </div>
    )}
</C.DropdownMenu>;
<C.DropdownMenu
    icon={<span>icon</span>}
    label="Select a direction"
    controls={[
        {
            title: 'Up',
            icon: 'arrow-up-alt',
            onClick: () => console.log('up'),
        },
        {
            title: 'Right',
            icon: 'arrow-right-alt',
            onClick: () => console.log('right'),
        },
        {
            title: 'Down',
            icon: 'arrow-down-alt',
            onClick: () => console.log('down'),
        },
        {
            title: 'Left',
            icon: 'arrow-left-alt',
            onClick: () => console.log('left'),
        },
    ]}
/>;
<C.DropdownMenu
    icon={<span>icon</span>}
    label="Select a direction"
    controls={[
        {
            title: 'Up',
            icon: 'arrow-up-alt',
            onClick: () => console.log('up'),
        },
    ]}
    menuProps={{ orientation: 'vertical' }}
    popoverProps={{ animate: true }}
    toggleProps={{ variant: 'primary' }}
    disableOpenOnArrowDown={true}
/>;

//
// external-link
//
<C.ExternalLink href="https://wordpress.org">WordPress.org</C.ExternalLink>;

//
// flex
//
<C.Flex direction="column" gap={3} align="bottom" justify="left" className="test-classname">
    <C.FlexBlock className="test-classname">Test Flex Block</C.FlexBlock>
    <C.FlexItem className="test-classname">Flex Item 1</C.FlexItem>
    <C.FlexItem>Flex Item 2</C.FlexItem>
</C.Flex>;

<C.Flex>
    <div />
</C.Flex>;

//
// focal-point-picker
//
<C.FocalPointPicker
    url="/path/to/image"
    value={{ x: 0.5, y: 0.5 }}
    onChange={value => console.log(`x = ${value.x}, y = ${value.y}`)}
/>;

//
// focusable-iframe
//
<C.FocusableIframe src="/my-iframe-url" onFocus={() => console.log('iframe is focused')} />;

//
// font-size-picker
//
<C.FontSizePicker
    fontSizes={[
        {
            name: 'Small',
            slug: 'small',
            size: 12,
        },
        {
            name: 'Big',
            slug: 'big',
            size: 26,
        },
    ]}
    value={16}
    fallbackFontSize={16}
    onChange={newFontSize => console.log(newFontSize)}
/>;

//
// form-file-upload
//
<C.FormFileUpload accept="image/*" icon="welcome-learn-more" onChange={() => console.log('new image')}>
    Upload
</C.FormFileUpload>;
<C.FormFileUpload
    multiple
    accept="application/pdf"
    onChange={() => console.log('changed')}
    render={({ openFileDialog }) => <button onClick={openFileDialog}>Open dialog</button>}
/>;

//
// form-toggle
//
<C.FormToggle checked={true} onChange={() => console.log('changed')} />;

//
// form-token-field
//
<C.FormTokenField
    value={[
        'foo',
        {
            value: 'bar',
            status: 'success',
        },
        'baz',
        {
            value: 'qux',
        },
    ]}
    suggestions={['foo', 'bar', 'baz', 'qux']}
    onChange={tokens => console.log(tokens)}
/>;

//
// guide
//
<C.Guide
    finishButtonText="Finish"
    contentLabel="Guide title"
    onFinish={() => {
        console.log('finished');
    }}
    pages={[
        {
            content: <h1>My Page</h1>,
            image: <h1>My Page Image</h1>,
        },
    ]}
/>;

//
// icon
//
<C.Icon />;
<C.Icon icon="screenoptions" x={10} className="foobar" />;
const IconFunctionComponent = (props: { foo: number; bar: number }) => (
    <div>
        {props.foo} {props.bar}
    </div>
);
<C.Icon icon={IconFunctionComponent} bar={3} />;
<C.Icon icon={<i>foo</i>} />;
<C.Icon
    icon={
        <svg>
            <path d="M5 4v3h5.5v12h3V7H19V4z" />
        </svg>
    }
    size={10}
/>;

//
// icon-button
//
<C.IconButton icon="ellipsis" label="More" />;
<C.IconButton icon={<i>foo</i>} onClick={() => console.log('clicked')} />;

//
// keyboard-shortcuts
//
const kbshortcutActionOne = () => console.log('action 1');
const kbshortcutActionTwo = (event: KeyboardEvent) => console.log('action 1', event);
const kbshortcuts = {
    'mod+a': kbshortcutActionOne,
    'ctrl+shift+j': kbshortcutActionTwo,
};
<C.KeyboardShortcuts shortcuts={kbshortcuts} eventName="keyup">
    <div>Hello world</div>
</C.KeyboardShortcuts>;
<C.KeyboardShortcuts shortcuts={kbshortcuts} bindGlobal />;

//
// menu-group, menu-item
//
<C.MenuGroup>
    <C.MenuItem icon="yes" isSelected={true} onClick={() => console.log('clicked')} isSmall>
        Toggle
    </C.MenuItem>
</C.MenuGroup>;

//
// menu-items-choice
//
<C.MenuItemsChoice
    choices={[
        {
            value: 'visual',
            label: 'Visual Editor',
        },
        {
            value: 'text',
            label: 'Code Editor',
            shortcut: 'ctrl+shift+c',
        },
        {
            value: 'other',
            label: 'Other Editor',
            shortcut: {
                display: 'ctrl+alt+o',
                ariaLabel: 'use some other editor',
            },
        },
    ]}
    value="visual"
    onSelect={value => console.log(`selected value is ${value}`)}
/>;

//
// modal
//
<C.Modal
    title="This is my modal"
    isDismissible={true}
    onRequestClose={(event: ReactKeyboardEvent | ReactMouseEvent | ReactMouseEvent) =>
        console.log(`The ${event.type} event told me to close myself!`)
    }
>
    <button onClick={() => console.log('clicked')}>My custom close button</button>
</C.Modal>;

//
// navigable-container
//
<C.NavigableMenu onNavigate={(idx, el) => console.log(el.nodeName)} orientation="horizontal">
    <button>Item 1</button>
    <button>Item 2</button>
    <button>Item 3</button>
</C.NavigableMenu>;
<C.TabbableContainer onNavigate={(idx, el) => console.log(el.nodeName)}>
    <button>Section 1</button>
    <button>Section 2</button>
    <button>Section 3</button>
    <button>Section 4</button>
</C.TabbableContainer>;

//
// notice
//
<C.Notice
    actions={[
        {
            label: 'Action One',
            className: 'foo',
            onClick() {
                console.log('clicked');
            },
        },
        {
            label: 'Action Two',
            url: 'https://wordpress.org',
            noDefaultClasses: true,
        },
    ]}
    status="success"
    onRemove={() => console.log('notice removed')}
>
    <h1>Hello World</h1>
</C.Notice>;
<C.NoticeList
    className="my-notice-list"
    notices={[
        {
            id: '1',
            content: 'Hello',
            actions: [{ label: 'Action One', url: 'https://wordpress.org' }],
        },
    ]}
></C.NoticeList>;

//
// panel
//
<C.Panel header="My Panel" className="foo">
    <C.PanelBody title="Panel Body One" icon={() => <i>icon</i>} initialOpen={true}>
        <C.PanelRow>My Panel Inputs and Labels</C.PanelRow>
    </C.PanelBody>
</C.Panel>;
<C.Panel header="My Other Panel">
    <C.PanelBody title="Panel Body Two" icon="welcome-widgets-menus" initialOpen={true}>
        <C.PanelRow className="foo">My Panel Inputs and Labels</C.PanelRow>
    </C.PanelBody>
</C.Panel>;

//
// placeholder
//
<C.Placeholder icon="wordpress-alt" label="Placeholder" />;
<C.Placeholder icon={() => <i>foo</i>} label="Placeholder">
    Hello World
</C.Placeholder>;

//
// popover
//
<C.Popover
    className="my-popover"
    getAnchorRect={anchorEl => {
        if (anchorEl && anchorEl.parentElement) {
            return anchorEl.parentElement.getBoundingClientRect();
        }
    }}
    onClose={() => {}}
    onClickOutside={() => {}}
    onFocusOutside={e => {
        if (e.relatedTarget === document.querySelector('#my-element')) return;
    }}
>
    Hello World
</C.Popover>;

<C.Popover.Slot />;

//
// query-controls
//
<C.QueryControls numberOfItems={3} onNumberOfItemsChange={n => console.log(Math.floor(n))} />;
<C.QueryControls
    orderBy="title"
    order="asc"
    numberOfItems={10}
    onOrderByChange={orderBy => console.log(orderBy.toUpperCase())}
    onOrderChange={order => console.log(order.toUpperCase())}
    categoriesList={[
        {
            id: 1,
            name: 'Category 1',
            parent: 0,
        },
        {
            id: 2,
            name: 'Category 1b',
            parent: 1,
        },
        {
            id: 3,
            name: 'Category 2',
            parent: 0,
        },
    ]}
    selectedCategoryId={1}
    onCategoryChange={categoryId => console.log(Math.floor(categoryId))}
    onNumberOfItemsChange={n => console.log(Math.floor(n))}
/>;

//
// radio-control
//
<C.RadioControl
    label="User type"
    help="The type of the current user"
    selected="a"
    options={[
        { label: 'Author', value: 'a' },
        { label: 'Editor', value: 'e' },
    ]}
    onChange={value => value && console.log(value.toUpperCase())}
/>;
<C.RadioControl
    label="User type"
    help="The type of the current user"
    selected={{ foo: 'bar' }}
    options={[
        { label: 'Author', value: { foo: 'bar' } },
        { label: 'Editor', value: { foo: 'baz' } },
    ]}
    onChange={value => value && console.log(value.foo)}
/>;

//
// range-control
//
<C.RangeControl beforeIcon="move" label="Columns" value={5} min={2} max={10} onChange={value => console.log(value)} />;

//
// resizable-box
//
<C.ResizableBox
    size={{
        height: 100,
        width: 100,
    }}
    minHeight="50"
    minWidth={50}
    enable={{
        top: false,
        right: true,
        bottom: true,
        left: false,
        topRight: false,
        bottomRight: true,
        bottomLeft: false,
        topLeft: false,
    }}
/>;
<C.ResizableBox
    showHandle
    className="testing"
    size={{
        height: 100,
        width: 100,
    }}
    minHeight="50"
    minWidth={50}
    enable={{
        top: false,
        right: true,
        bottom: true,
        left: false,
        topRight: false,
        bottomRight: true,
        bottomLeft: false,
        topLeft: false,
    }}
>
    <div>hello</div>
</C.ResizableBox>;

//
// responsive-wrapper
//
<C.ResponsiveWrapper naturalWidth={2000} naturalHeight={680}>
    <img src="https://s.w.org/style/images/about/WordPress-logotype-standard.png" alt="WordPress" />
</C.ResponsiveWrapper>;

//
// sandbox
//
<C.SandBox html="<p>Content</p>" title="Sandbox" type="embed" />;

//
// scroll-lock
//
<C.ScrollLock />;

//
// select-control
//
<C.SelectControl
    label="Size"
    value="50%"
    options={[
        { label: 'Big', value: '100%' },
        { label: 'Medium', value: '50%' },
        { label: 'Small', value: '25%' },
    ]}
    onChange={size => console.log(size)}
/>;
<C.SelectControl
    label="Size"
    value={['50%']}
    multiple
    options={[
        { label: 'Big', value: '100%' },
        { label: 'Medium', value: '50%' },
        { label: 'Small', value: '25%' },
    ]}
    onChange={size => console.log(size)}
/>;
<C.SelectControl
    label="Size"
    value={['50%']}
    multiple
    options={[
        { label: 'Big', value: '100%', disabled: true },
        { label: 'Medium', value: '50%' },
        { label: 'Small', value: '25%' },
    ]}
    onChange={size => console.log(size)}
/>;

//
// snackbar
//
<C.Snackbar>Post published successfully.</C.Snackbar>;
<C.Snackbar
    actions={[
        {
            label: 'Action One',
            className: 'foo',
            onClick() {
                console.log('clicked');
            },
        },
        {
            label: 'Action Two',
            url: 'https://wordpress.org',
            noDefaultClasses: true,
        },
    ]}
    onRemove={() => console.log('removed')}
>
    Post published successfully.
</C.Snackbar>;
<C.SnackbarList
    className="my-notice-list"
    notices={[
        {
            id: '1',
            content: 'Hello',
            actions: [{ label: 'Action One', url: 'https://wordpress.org' }],
        },
    ]}
/>;

//
// spinner
//
<C.Spinner />;

//
// tab-panel
//
<C.TabPanel
    className="my-tab-panel"
    activeClass="active-tab"
    onSelect={tabName => console.log(tabName.toUpperCase())}
    tabs={[
        {
            name: 'tab1',
            title: 'Tab 1',
            className: 'tab-one',
        },
        {
            name: 'tab2',
            title: 'Tab 2',
            foo: 'bar',
        },
    ]}
>
    {tab => <p>{tab.title}</p>}
</C.TabPanel>;

//
// text-control
//
<C.TextControl label="My text value" value={'foo'} onChange={value => console.log(value.toUpperCase())} />;
<C.TextControl
    type="number"
    label="My numeric value"
    hideLabelFromVision
    value={3}
    onChange={value => console.log(value.toUpperCase())}
/>;

//
// textarea-control
//
<C.TextareaControl
    label="Text"
    help="Enter some text"
    value="hello world"
    onChange={value => console.log(value.toUpperCase())}
/>;

//
// tip
//
<C.Tip>Hello</C.Tip>;

//
// toggle-control
//
<C.ToggleControl label="Controlled" checked={true} onChange={isChecked => console.log(isChecked)} />;
<C.ToggleControl label="Uncontrolled" />;

//
// toolbar
//
<C.Toolbar
    isCollapsed
    icon="wordpress-alt"
    label="Testing array of controls"
    controls={[
        {
            icon: 'yes',
            title: 'Yes',
            onClick() {},
            shortcut: {
                display: 'Yes',
            },
            isDisabled: false,
        },
        {
            icon: 'no',
            title: 'No',
            onClick() {},
            subscript: 'no',
            isActive: false,
            shortcut: 'No',
        },
    ]}
/>;
<C.Toolbar
    isCollapsed
    icon="wordpress-alt"
    title="Testing array of 'control sets'"
    controls={[
        [
            {
                icon: 'yes',
                title: 'Yes',
                onClick() {},
            },
            {
                icon: 'no',
                title: 'No',
                onClick() {},
            },
        ],
        [
            {
                icon: 'carrot',
                title: 'Carrots are delicious',
                onClick() {},
            },
        ],
    ]}
/>;

//
// toolbar-button
//
<C.ToolbarButton icon="editor-help" title="Minimal Button" onClick={() => console.log('clicked')} />;
<C.ToolbarButton
    className="bar"
    containerClassName="foo"
    extraProps={{
        labelPosition: 'bottom right',
        onFocus(e) {
            console.log(e.currentTarget.nodeName);
        },
    }}
    icon="editor-code"
    subscript="hi"
    title="Toolbar Button"
    onClick={() => console.log('clicked')}
/>;
<C.ToolbarButton icon={<span>click</span>} label="Paragraph" />;
<C.ToolbarButton>Text</C.ToolbarButton>;

//
// toolbar-group
//
<C.ToolbarGroup
    isCollapsed
    icon={undefined}
    label="More rich text controls"
    controls={[
        { icon: <div>icon</div>, title: 'Inline code' },
        { icon: <div>icon</div>, title: 'Inline image' },
        {
            icon: <div>icon</div>,
            title: 'Strikethrough',
        },
    ]}
/>;

//
// tooltip
//
<C.Tooltip>
    <button>Hover me for more information</button>
</C.Tooltip>;
<C.Tooltip text="Hello world" position="bottom center" shortcut="ctrl+s">
    <button>Hover me for more information</button>
</C.Tooltip>;
<C.Tooltip text={<h1>Hello world</h1>} shortcut={{ display: 'ctrl+s' }}>
    <button>Hover me for more information</button>
</C.Tooltip>;

//
// tree-select
//
<C.TreeSelect onChange={id => console.log(id)} />;
<C.TreeSelect
    label="Complex tree"
    noOptionLabel="No options"
    selectedId="foo"
    tree={[
        {
            id: 'grandparent-1',
            name: 'first grandparent',
            children: [
                {
                    id: 'parent-1',
                    name: 'parent',
                    children: [
                        {
                            id: 'child-1',
                            name: 'child',
                        },
                    ],
                },
            ],
        },
        {
            id: 'grandparent-2',
            name: 'second grandparent',
            children: [
                {
                    id: 'parent-2',
                    name: 'parent',
                    children: [
                        {
                            id: 'child-2',
                            name: 'child',
                        },
                    ],
                },
            ],
        },
        {
            id: 'no children',
            name: 'Childless',
        },
    ]}
    onChange={id => console.log(id)}
/>;

//
// isolated-event-container
//
<C.IsolatedEventContainer className="component-some_component" onClick={e => console.log(e.currentTarget.nodeName)}>
    <p>This is an isolated component</p>
</C.IsolatedEventContainer>;

//
// slot-fill
//
const MySlotFillProvider = () => {
    const MyPanelSlot = () => (
        <>
            <h1>Panel with slot</h1>
            <C.Slot name="MyPanelSlot" />
        </>
    );

    MyPanelSlot.Content = () => <C.Fill name="MyPanelSlot">Panel body</C.Fill>;

    return (
        <C.SlotFillProvider>
            <MyPanelSlot />
            <MyPanelSlot.Content />
        </C.SlotFillProvider>
    );
};
(() => {
    const { Fill, Slot } = C.createSlotFill('Toolbar');

    const ToolbarItem = () => <Fill>My item</Fill>;

    const Toolbar = () => (
        <div className="toolbar">
            <Slot bubblesVirtually fillProps={{ foo: 'bar' }} />
        </div>
    );
})();
<C.Slot name="RichText.ToolbarControls">
    {fills =>
        fills.length !== 0 ? (
            <C.DropdownMenu
                position="bottom left"
                label="More Rich Text Controls"
                controls={fills.map(([{ props }]) => props)}
            />
        ) : null
    }
</C.Slot>;

//
// visually-hidden
//
<C.VisuallyHidden>Hello</C.VisuallyHidden>;
<C.VisuallyHidden as="span" className="test-class">
    Hello
</C.VisuallyHidden>;

//
// higher-order/navigate-regions
//
(() => {
    const EnhancedComponent = C.navigateRegions(({ foo, bar }: { foo: string; bar: number }) => (
        <div>
            {foo} and {bar}{' '}
        </div>
    ));
    <EnhancedComponent foo="hello" bar={123} />;
})();

//
// higher-order/with-constrained-tabbing
//
(() => {
    const EnhancedComponent = C.withConstrainedTabbing(({ foo, bar }: { foo: string; bar: number }) => (
        <div>
            {foo} and {bar}{' '}
        </div>
    ));
    <EnhancedComponent foo="hello" bar={123} />;
})();

//
// higher-order/with-fallback-styles
//
(() => {
    const OriginalComponent = (props: { foo: string; bar: string; baz: string }) => <div>{JSON.stringify(props)}</div>;
    const EnhancedComponent = C.withFallbackStyles((node, ownProps) => {
        console.log(node.nodeName);
        return {
            baz: 'baz',
        };
    })(OriginalComponent);
    <EnhancedComponent foo="" bar="" />;
})();

//
// higher-order/with-filters
//
(() => {
    const OriginalComponent = (props: { foo: string; bar: string }) => <div>{JSON.stringify(props)}</div>;
    const EnhancedComponentSameProps = C.withFilters('myFilter')(OriginalComponent);
    <EnhancedComponentSameProps foo="" bar="" />;

    const EnhancedComponentNewProps = C.withFilters<{ baz: number }>('myFilter')(OriginalComponent);
    <EnhancedComponentNewProps baz={25} />;
})();

//
// higher-order/with-focus-outside
//
(() => {
    const EnhancedComponentClassExpression = C.withFocusOutside(
        class extends Component<{ foo: string }> {
            handleFocusOutside() {
                console.log('Hello World!');
            }
            render() {
                return <div>{this.props.foo}</div>;
            }
        },
    );
    <EnhancedComponentClassExpression foo="hello world" />;

    class PredefinedComponentClass extends Component<{ bar: number }> {
        handleFocusOutside() {
            console.log('Hello World!');
        }
        render() {
            return <div>{this.props.bar}</div>;
        }
    }
    const EnhancedComponentPredefinedClass = C.withFocusOutside(PredefinedComponentClass);
    <EnhancedComponentPredefinedClass bar={1} />;
})();

//
// higher-order/with-focus-return
//
(() => {
    const EnhancedComponentDefaultBehavior = C.withFocusReturn((props: { foo: string; bar: string }) => (
        <div>{JSON.stringify(props)}</div>
    ));
    <EnhancedComponentDefaultBehavior foo="foo" bar="bar" />;

    const EnhancedComponentCustomBehavior = C.withFocusReturn({
        onFocusReturn() {
            console.log('Hello World!');
        },
    })((props: { foo: string; bar: string }) => <div>{JSON.stringify(props)}</div>);
    <EnhancedComponentCustomBehavior foo="foo" bar="bar" />;

    const EnhancedComponentCustomBehaviorDefault = C.withFocusReturn({})((props: { foo: string; bar: string }) => (
        <div>{JSON.stringify(props)}</div>
    ));
    <EnhancedComponentCustomBehaviorDefault foo="foo" bar="bar" />;
})();

//
// higher-order/with-notices
//
(() => {
    const OriginalComponent = (props: { foo: string } & C.withNotices.Props) => (
        <button onClick={() => props.noticeOperations.createErrorNotice('Hello World!')}>{props.foo}</button>
    );
    const WrappedComponent = C.withNotices(OriginalComponent);
    <WrappedComponent foo="Hello World!" />;
})();

//
// higher-order/with-spoken-messages
//
(() => {
    interface Props {
        speak: any;
        debouncedSpeak: any;
        foo: string;
    }
    const MyComponentWithSpokenMessages = C.withSpokenMessages(({ speak, debouncedSpeak, foo }: Props) => (
        <div>
            <button onClick={() => speak('Spoken message')}>Speak</button>
            <button onClick={() => debouncedSpeak('Delayed message')}>Debounced Speak</button>
        </div>
    ));
    <MyComponentWithSpokenMessages foo="Hello World!" />;
})();
