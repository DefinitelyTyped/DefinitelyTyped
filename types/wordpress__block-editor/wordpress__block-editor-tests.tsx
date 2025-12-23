import be from "@wordpress/block-editor";
import * as UseBlockProps from "@wordpress/block-editor/components/use-block-props";
import { BlockInstance, createBlock } from "@wordpress/blocks";
import { dispatch, select, useDispatch, useSelect } from "@wordpress/data";
import { useRef } from "react";

declare const BLOCK_INSTANCE: BlockInstance;

const COLORS = [{ name: "Red", slug: "red", color: "#ff0000" }, { name: "Blue", slug: "blue", color: "#0000ff" }];
const FONT_SIZES = [{ name: "Small", slug: "small", size: 12 }, { name: "Large", slug: "large", size: 18 }];
const STYLES = [{ css: ".foo { color: red; }" }, { css: ".bar { color: blue; }", baseUrl: "https://foo.bar" }];

//
// Components
// ============================================================================

//
// alignment-toolbar
//
<be.AlignmentToolbar value={undefined} onChange={newValue => newValue && console.log(newValue.toUpperCase())} />;
<be.AlignmentToolbar value="left" onChange={newValue => newValue && console.log(newValue.toUpperCase())} />;
<be.AlignmentToolbar
    alignmentControls={[{ align: "center", icon: "carrot", title: "Center" }]}
    value="left"
    onChange={newValue => newValue && console.log(newValue.toUpperCase())}
/>;

//
// block-alignment-toolbar
//
<be.BlockAlignmentToolbar value={undefined} onChange={newValue => newValue && console.log(newValue.toUpperCase())} />;
<be.BlockAlignmentToolbar value="left" onChange={newValue => newValue && console.log(newValue.toUpperCase())} />;
<be.BlockAlignmentToolbar
    isCollapsed
    value="left"
    controls={["left", "right"]}
    onChange={newValue => newValue && console.log(newValue.toUpperCase())}
/>;

//
// block-controls
//
<be.BlockControls>Hello World</be.BlockControls>;
<be.BlockControls
    controls={[
        {
            icon: "admin-appearance",
            title: "Yes",
            onClick() {},
            isDisabled: false,
        },
        {
            icon: null,
            title: "No",
            onClick() {},
            subscript: "no",
            isActive: false,
            isDisabled: false,
        },
    ]}
>
    Hello World
</be.BlockControls>;
<be.BlockControls group="block">Hello World</be.BlockControls>;
<be.BlockControls.Slot />;

<be.BlockControls
    controls={[[
        {
            icon: "admin-appearance",
            title: "Yes",
            subscript: "Yes",
            onClick() {},
            isActive: false,
            isDisabled: false,
        },
        {
            icon: null,
            title: "No",
            onClick() {},
            subscript: "no",
            isActive: false,
            isDisabled: false,
        },
    ]]}
>
    Hello World
</be.BlockControls>;

//
// BlockEditorProvider
//
<be.BlockEditorProvider value={[]} settings={{ templateLock: "all" }}>
    <div />
</be.BlockEditorProvider>;

//
// block-format-controls
//
<be.BlockFormatControls>Hello World</be.BlockFormatControls>;
<be.BlockFormatControls.Slot />;

//
// block-icon
//
<be.BlockIcon icon="carrot" />;
<be.BlockIcon icon={<i>foo</i>} showColors />;

//
// block-list
//
<be.BlockList className="my-custom-class" />;

//
// block-mover
//
<be.BlockMover clientIds={["foo", "bar"]} />;
<be.BlockMover clientIds={["foo", "bar"]} isDraggable onDragStart={() => console.log("dragging")} />;

//
// block-navigation/dropdown
//
<be.BlockNavigationDropdown />;
<be.BlockNavigationDropdown isDisabled />;

//
// block-selection-clearer
//
<be.BlockSelectionClearer className="foo">
    <input type="text" />
    <div>
        <textarea />
    </div>
</be.BlockSelectionClearer>;

//
// block-vertical-alignment-toolbar
//
<be.BlockVerticalAlignmentToolbar value="top" onChange={newValue => newValue && console.log(newValue.toUpperCase())} />;

//
// button-block-appender
//
<be.ButtonBlockAppender rootClientId="foo" />;
<be.ButtonBlockAppender rootClientId="foo" className="bar" />;

//
// color-palette/with-color-context
//
(() => {
    interface Props extends be.withColorContext.Props {
        foo: string;
    }
    const Component = ({ colors, foo }: Props) => (
        <div>
            <h1>Color list</h1>
            <ul>
                {colors.map((c, i) => <li key={i}>{c.color}</li>)}
            </ul>
            {foo}
        </div>
    );
    const Enhanced = be.withColorContext(Component);
    <Enhanced foo="bar" />;
    <Enhanced foo="bar" disableCustomColors />;
})();

//
// colors
//

// $ExpectType ComponentType<any>
be.createCustomColorsHOC(COLORS)("backgroundColor", "borderColor")(() => <h1>Hello World</h1>);

// $ExpectType string
be.getColorClassName("foo", "bar");

// $ExpectType string | undefined
be.getColorClassName(undefined, "bar");

// $ExpectType EditorColor | Pick<EditorColor, "color">
be.getColorObjectByAttributeValues(COLORS, "red", "#ff0000");

// $ExpectType EditorColor | Pick<EditorColor, "color">
be.getColorObjectByAttributeValues(COLORS, undefined, "#ff0000");

// $ExpectType EditorColor | undefined
be.getColorObjectByColorValue(COLORS, "#ff0000");

// $ExpectType EditorColor | undefined
be.getColorObjectByColorValue(COLORS, undefined);

// $ExpectType ComponentType<any>
be.withColors("backgroundColor", { textColor: "color" })(() => <h1>Hello World</h1>);

//
// contrast-checker
//
<be.ContrastChecker />;
<be.ContrastChecker fontSize={12} />;
<be.ContrastChecker backgroundColor="red" fallbackBackgroundColor="blue" fallbackTextColor="yellow" isLargeText />;

//
// font-sizes
//

// $ExpectType Partial<EditorFontSize> & Pick<EditorFontSize, "size">
be.getFontSize(FONT_SIZES, "small", 15);

// $ExpectType Partial<EditorFontSize> & Pick<EditorFontSize, "size">
be.getFontSize(FONT_SIZES, undefined, 15);

// $ExpectType string
be.getFontSizeClass("foo");

// $ExpectType ComponentType<any>
be.withFontSizes("fontSize")(() => <h1>Hello World</h1>);

//
// heading-level-dropdown
//
<be.HeadingLevelDropdown value={5} />;
<be.HeadingLevelDropdown value={5} options={[4]} />;
<be.HeadingLevelDropdown value={5} options={[4]} onChange={v => console.log(v)} />;

//
// inner-blocks
//
<be.InnerBlocks />;
<be.InnerBlocks renderAppender={be.InnerBlocks.ButtonBlockAppender} />;
<be.InnerBlocks.Content />;
<be.InnerBlocks.DefaultBlockAppender />;
<be.InnerBlocks orientation="vertical" />;
<be.InnerBlocks prioritizedInserterBlocks={["core/navigation-link/page"]} />;
<be.InnerBlocks templateLock="all" />;

//
// inserter
//
<be.Inserter />;
<be.Inserter position="bottom left" clientId="foo" />;

//
// inspector-advanced-controls
//
<be.InspectorAdvancedControls>Hello World</be.InspectorAdvancedControls>;
<be.InspectorAdvancedControls.Slot />;

//
// inspector-controls
//
<be.InspectorControls>Hello World</be.InspectorControls>;
<be.InspectorControls group={"styles"}>Hello World</be.InspectorControls>;
<be.InspectorControls.Slot />;

//
// link-control
//
<be.LinkControl
    onChange={item => console.log(item)}
    onRemove={() => console.log("removed")}
    settings={be.LinkControl.DEFAULT_LINK_SETTINGS}
/>;

//
// media-placeholder
//
<be.MediaPlaceholder
    onSelect={item => console.log(item.id)}
    allowedTypes={["image"]}
    labels={{ title: "The Image" }}
/>;
<be.MediaPlaceholder
    multiple
    onSelect={items => console.log(items.map(i => i.id).join())}
    allowedTypes={["image"]}
    labels={{ title: "The Image" }}
/>;
<be.MediaPlaceholder
    multiple={"add"}
    onSelect={items => console.log(items.map((i: { id: string }) => i.id).join())}
    allowedTypes={["image"]}
    labels={{ title: "The Image" }}
/>;

//
// media-upload
// media-upload/check
//
<be.MediaUploadCheck>
    <be.MediaUpload
        onSelect={media => console.log("selected " + media.id)}
        allowedTypes={["audio"]}
        render={({ open }) => <button onClick={open}>Open Media Library</button>}
    />
</be.MediaUploadCheck>;
<be.MediaUploadCheck fallback={<div>Invalid permissions</div>}>
    <be.MediaUpload
        multiple
        onSelect={media => console.log("selected " + media.map(m => m.id).join())}
        allowedTypes={["audio"]}
        render={({ open }) => <button onClick={open}>Open Media Library</button>}
    />
</be.MediaUploadCheck>;

//
// navigable-toolbar
//
<be.NavigableToolbar focusOnMount className="foo" aria-label="bar">
    My toolbar
</be.NavigableToolbar>;

//
// panel-color-settings
//
<be.PanelColorSettings
    title="Color Settings"
    colorSettings={[
        {
            value: "#ff0000",
            onChange(color) {
                color && console.log(color);
            },
            label: "Background Color",
            colors: [
                {
                    color: "#ff0000",
                    name: "Red",
                },
                {
                    color: "#ffff00",
                    name: "Yellow",
                },
            ],
            disableCustomColors: false,
        },
    ]}
    disableCustomColors={true}
    showTitle={true}
    enableAlpha={true}
/>;
<be.PanelColorSettings
    colorSettings={[
        {
            value: "#ff0000",
            onChange(color) {
                color && console.log(color);
            },
            label: "Background Color",
        },
    ]}
/>;

//
// plain-text
//
<be.PlainText value="Hello World" onChange={v => console.log(v.toUpperCase())} />;

//
// rich-text
//
<be.RichText
    aria-label="Paragraph block"
    identifier="content"
    placeholder="Start writing or type / to choose a block"
    style={{ color: "red" }}
    tagName="p"
    value="Hello World"
    onChange={nextContent => console.log(nextContent.toUpperCase())}
    onReplace={blocks => blocks.forEach(b => console.log(b.clientId))}
    allowedFormats={["core/bold", "core/italic"]}
    onSplit={(value, isOriginal) => createBlock("core/paragraph", { content: value })}
/>;
<be.RichText.Content value="foo" />;
<be.RichText.Content tagName="p" style={{ color: "blue" }} className="foo" value="Hello World" dir="rtl" />;
<be.RichTextShortcut type="primary" character="b" onUse={() => console.log("Hello World")} />;
<be.RichTextToolbarButton
    isActive
    name="bold"
    icon="editor-bold"
    title="foo"
    shortcutType="primary"
    shortcutCharacter="b"
    onClick={() => console.log("Hello World")}
/>;

//
// url-input
//
<be.URLInput
    className="wp-block-button__inline-link-input"
    value="https://foo.bar"
    autoFocus={false}
    onChange={value => console.log(value.toUpperCase())}
    disableSuggestions
    isFullWidth
    hasBorder
/>;

//
// url-input/button
//
<be.URLInputButton url="https://foo.bar" onChange={(url, post) => post && console.log(post.id)} />;

//
// url-popover
//
<be.URLPopover
    animate
    noArrow
    additionalControls={<button>Foobar</button>}
    onClose={() => console.log("closing popover")}
    renderSettings={() => (
        <label>
            Open in New Tab
            <input type="checkbox" checked onChange={() => void 0} />
        </label>
    )}
>
    <form onSubmit={() => void 0}>
        <input type="url" />
        <button type="submit">Apply</button>
    </form>
</be.URLPopover>;

//
// warning
//
<be.Warning>This is the warning message</be.Warning>;
<be.Warning
    actions={[<button>foo</button>, false && <button>bar</button>]}
    secondaryActions={[
        {
            title: "foo",
            onClick() {
                console.log("foo");
            },
        },
        {
            title: "bar",
            onClick() {
                console.log("bar");
            },
        },
    ]}
>
    This is the warning message
</be.Warning>;

//
// Utils
// ============================================================================

// $ExpectType string[]
be.transformStyles(STYLES);

// $ExpectType string[]
be.transformStyles(STYLES, ".foobar");

//
// Store
// ============================================================================

// $ExpectType BlockEditorStoreDescriptor
be.store;

for (const dispatchOrUseDispatch of [dispatch, useDispatch]) {
    // $ExpectType void
    dispatchOrUseDispatch("core/block-editor").insertBlock(BLOCK_INSTANCE);
    dispatchOrUseDispatch("core/block-editor").insertBlock(BLOCK_INSTANCE, 4);
    dispatchOrUseDispatch("core/block-editor").insertBlock(BLOCK_INSTANCE, 4, "foo");
    dispatchOrUseDispatch("core/block-editor").insertBlock(BLOCK_INSTANCE, 4, "foo", false);

    // $ExpectType IterableIterator<void>
    dispatchOrUseDispatch("core/block-editor").insertBlocks([BLOCK_INSTANCE]);
    dispatchOrUseDispatch("core/block-editor").insertBlocks([BLOCK_INSTANCE], 5);
    dispatchOrUseDispatch("core/block-editor").insertBlocks([BLOCK_INSTANCE], 5, "foo");
    dispatchOrUseDispatch("core/block-editor").insertBlocks([BLOCK_INSTANCE], 5, "foo", false);

    // $ExpectType void
    dispatchOrUseDispatch("core/block-editor").insertDefaultBlock();
    dispatchOrUseDispatch("core/block-editor").insertDefaultBlock({ foo: "bar" });
    dispatchOrUseDispatch("core/block-editor").insertDefaultBlock({ foo: "bar" }, "foo");
    dispatchOrUseDispatch("core/block-editor").insertDefaultBlock({ foo: "bar" }, "foo", 5);

    // $ExpectType void
    dispatchOrUseDispatch("core/block-editor").mergeBlocks("foo", "bar");

    // $ExpectType void
    dispatchOrUseDispatch("core/block-editor").moveBlocksUp("foo", "bar");
    dispatchOrUseDispatch("core/block-editor").moveBlocksUp(["foo", "baz"], "bar");

    // $ExpectType IterableIterator<void>
    dispatchOrUseDispatch("core/block-editor").moveBlockToPosition("foo", "bar", "baz", 1);
    dispatchOrUseDispatch("core/block-editor").moveBlockToPosition(undefined, "foo", undefined, 5);
    dispatchOrUseDispatch("core/block-editor").moveBlockToPosition(undefined, undefined, undefined, 5);

    // $ExpectType void
    dispatchOrUseDispatch("core/block-editor").multiSelect("foo", "bar");

    // $ExpectType void
    dispatchOrUseDispatch("core/block-editor").receiveBlocks([BLOCK_INSTANCE]);

    // $ExpectType void
    dispatchOrUseDispatch("core/block-editor").removeBlock("foo");
    dispatchOrUseDispatch("core/block-editor").removeBlock("foo", true);

    // $ExpectType IterableIterator<void>
    dispatchOrUseDispatch("core/block-editor").removeBlocks("foo");
    dispatchOrUseDispatch("core/block-editor").removeBlocks("foo", false);
    dispatchOrUseDispatch("core/block-editor").removeBlocks(["foo"]);
    dispatchOrUseDispatch("core/block-editor").removeBlocks(["foo"], false);

    // $ExpectType void
    dispatchOrUseDispatch("core/block-editor").replaceBlock("foo", BLOCK_INSTANCE);
    dispatchOrUseDispatch("core/block-editor").replaceBlock("foo", [BLOCK_INSTANCE]);
    dispatchOrUseDispatch("core/block-editor").replaceBlock(["foo"], BLOCK_INSTANCE);
    dispatchOrUseDispatch("core/block-editor").replaceBlock(["foo"], [BLOCK_INSTANCE]);

    // $ExpectType IterableIterator<void>
    dispatchOrUseDispatch("core/block-editor").replaceBlocks("foo", BLOCK_INSTANCE);
    dispatchOrUseDispatch("core/block-editor").replaceBlocks("foo", [BLOCK_INSTANCE], 3);
    dispatchOrUseDispatch("core/block-editor").replaceBlocks(["foo"], BLOCK_INSTANCE);
    dispatchOrUseDispatch("core/block-editor").replaceBlocks(["foo"], [BLOCK_INSTANCE], 0);

    // $ExpectType void
    dispatchOrUseDispatch("core/block-editor").replaceInnerBlocks("foo", [BLOCK_INSTANCE]);
    dispatchOrUseDispatch("core/block-editor").replaceInnerBlocks("foo", [BLOCK_INSTANCE], true);

    // $ExpectType void
    dispatchOrUseDispatch("core/block-editor").resetBlocks([BLOCK_INSTANCE]);

    // $ExpectType void
    dispatchOrUseDispatch("core/block-editor").selectBlock("foo");
    dispatchOrUseDispatch("core/block-editor").selectBlock("foo", 5);

    // $ExpectType void
    dispatchOrUseDispatch("core/block-editor").selectionChange("foo", "bar", 0, 5);

    // $ExpectType IterableIterator<void>
    dispatchOrUseDispatch("core/block-editor").selectNextBlock("foo");

    // $ExpectType IterableIterator<void>
    dispatchOrUseDispatch("core/block-editor").selectPreviousBlock("foo");

    // $ExpectType void
    dispatchOrUseDispatch("core/block-editor").setTemplateValidity(false);

    // $ExpectType void
    dispatchOrUseDispatch("core/block-editor").showInsertionPoint();
    dispatchOrUseDispatch("core/block-editor").showInsertionPoint("foo");
    dispatchOrUseDispatch("core/block-editor").showInsertionPoint("foo", 5);

    // $ExpectType void
    dispatchOrUseDispatch("core/block-editor").toggleBlockMode("foo");

    // $ExpectType void
    dispatchOrUseDispatch("core/block-editor").toggleSelection();
    dispatchOrUseDispatch("core/block-editor").toggleSelection(true);

    // $ExpectType void
    dispatchOrUseDispatch("core/block-editor").updateBlock("foo", { attributes: { foo: "bar" }, innerBlocks: [] });

    // $ExpectType void
    dispatchOrUseDispatch("core/block-editor").updateBlockAttributes("foo", { foo: "bar" });

    // $ExpectType void
    dispatchOrUseDispatch("core/block-editor").updateBlockListSettings("foo", { allowedBlocks: ["core/paragraph"] });

    // $ExpectType void
    dispatchOrUseDispatch("core/block-editor").updateSettings({
        focusMode: true,
        codeEditingEnabled: false,
        maxUploadFileSize: 500,
        richEditingEnabled: false,
    });
}

// $ExpectType boolean
select("core/block-editor").canInsertBlockType("core/paragraph");
select("core/block-editor").canInsertBlockType("core/paragraph", "foo");

// $ExpectType boolean
useSelect("core/block-editor").canInsertBlockType("core/paragraph");
useSelect("core/block-editor").canInsertBlockType("core/paragraph", "foo");

// $ExpectType string | null
select("core/block-editor").getAdjacentBlockClientId();
select("core/block-editor").getAdjacentBlockClientId("foo");
select("core/block-editor").getAdjacentBlockClientId("foo", -1);
select("core/block-editor").getAdjacentBlockClientId("foo", 1);

// $ExpectType string | null
useSelect("core/block-editor").getAdjacentBlockClientId();
useSelect("core/block-editor").getAdjacentBlockClientId("foo");
useSelect("core/block-editor").getAdjacentBlockClientId("foo", -1);
useSelect("core/block-editor").getAdjacentBlockClientId("foo", 1);

// $ExpectType string[]
select("core/block-editor").getBlockParents("foo");
select("core/block-editor").getBlockParentsByBlockName("foo", ["core/query"]);
select("core/block-editor").getBlockParents("foo", true);
select("core/block-editor").getBlockParentsByBlockName("foo", ["core/query"], true);

// $ExpectType string[]
useSelect("core/block-editor").getBlockParents("foo");
useSelect("core/block-editor").getBlockParentsByBlockName("foo", ["core/query"]);
useSelect("core/block-editor").getBlockParents("foo", true);
useSelect("core/block-editor").getBlockParentsByBlockName("foo", ["core/query"], true);

{
    const blockProps: UseBlockProps.Merged & UseBlockProps.Reserved = be.useBlockProps();
    blockProps;
}

{
    const blockProps = be.useBlockProps({ foo: "bar" });
    // $ExpectType string
    blockProps.foo;
}

{
    const blockProps = be.useBlockProps({ ref: useRef("test") });

    blockProps.ref((current: unknown) => {});
}

// $ExpectType Record<string, unknown>
be.useBlockProps.save();

// $ExpectType Record<string, unknown>
be.useBlockProps.save({ foo: "bar" });

{
    const innerBlocksProps: UseBlockProps.Merged & UseBlockProps.Reserved = be.useInnerBlocksProps();
    innerBlocksProps;
}

{
    const innerBlocksProps = be.useInnerBlocksProps({ foo: "bar" });
    // $ExpectType string
    innerBlocksProps.foo;
}

{
    const innerBlocksProps = be.useInnerBlocksProps({ ref: useRef("test") });

    innerBlocksProps.ref((current: unknown) => {});
}

{
    const { children } = be.useInnerBlocksProps();
    // $ExpectType ReactElement<any, string | JSXElementConstructor<any>>
    children;
}

{
    // Allow using blockProps as first parameter in useInnerBlocksProps.
    const blockProps = be.useBlockProps({ foo: "bar" });
    const innerBlocksProps = be.useInnerBlocksProps(blockProps);
}

// $ExpectType Record<string, unknown>
be.useInnerBlocksProps.save();

// $ExpectType Record<string, unknown>
be.useInnerBlocksProps.save({ foo: "bar" });

// $ExpectType string
be.getTypographyClassesAndStyles({}, false).className;
be.getTypographyClassesAndStyles({}, {}).className;
be.getTypographyClassesAndStyles({}, { minFontSize: "33" }).className;

// $ExpectType Record<string, string>
be.getTypographyClassesAndStyles({}, false).style;
be.getTypographyClassesAndStyles({}, {}).style;
be.getTypographyClassesAndStyles({}, { minFontSize: "33" }).style;

// $ExpectType "HELLO"
be.useCachedTruthy("HELLO");

// $ExpectType 42
be.useCachedTruthy(42);

// $ExpectType any[]
be.useSettings("test");

// $ExpectType { updateBlockBindings(bindings: { [binding: string]: { source: string; args?: { [key: string]: unknown; } | undefined; } | undefined; }): void; removeAllBlockBindings(): void; }
be.useBlockBindingsUtils();

// $ExpectType { name: string; isSelected?: boolean | undefined; clientId: string; layout: unknown; }
be.useBlockEditContext();
