import { BlockInstance } from '@wordpress/blocks';
import * as be from '@wordpress/block-editor';
import * as UseBlockProps from '@wordpress/block-editor/components/use-block-props';
import { dispatch, select } from '@wordpress/data';
import { useRef } from 'react';

declare const BLOCK_INSTANCE: BlockInstance;

const COLORS = [{ name: 'Red', slug: 'red', color: '#ff0000' }, { name: 'Blue', slug: 'blue', color: '#0000ff' }];
const FONT_SIZES = [{ name: 'Small', slug: 'small', size: 12 }, { name: 'Large', slug: 'large', size: 18 }];
const STYLES = [{ css: '.foo { color: red; }' }, { css: '.bar { color: blue; }', baseUrl: 'https://foo.bar' }];

//
// Components
// ============================================================================

//
// alignment-toolbar
//
<be.AlignmentToolbar value={undefined} onChange={newValue => newValue && console.log(newValue.toUpperCase())} />;
<be.AlignmentToolbar value="left" onChange={newValue => newValue && console.log(newValue.toUpperCase())} />;
<be.AlignmentToolbar
    alignmentControls={[{ align: 'center', icon: 'carrot', title: 'Center' }]}
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
    controls={['left', 'right']}
    onChange={newValue => newValue && console.log(newValue.toUpperCase())}
/>;

//
// block-controls
//
<be.BlockControls>Hello World</be.BlockControls>;
<be.BlockControls
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
>
    Hello World
</be.BlockControls>;
<be.BlockControls.Slot />;

//
// BlockEditorProvider
//
<be.BlockEditorProvider value={[]} settings={{ templateLock: 'all' }}>
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
<be.BlockMover clientIds={['foo', 'bar']} />;
<be.BlockMover clientIds={['foo', 'bar']} isDraggable onDragStart={() => console.log('dragging')} />;

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
                {colors.map((c, i) => (
                    <li key={i}>{c.color}</li>
                ))}
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
be.createCustomColorsHOC(COLORS)('backgroundColor', 'borderColor')(() => <h1>Hello World</h1>);

// $ExpectType string
be.getColorClassName('foo', 'bar');

// $ExpectType string | undefined
be.getColorClassName(undefined, 'bar');

// $ExpectType EditorColor | Pick<EditorColor, "color">
be.getColorObjectByAttributeValues(COLORS, 'red', '#ff0000');

// $ExpectType EditorColor | Pick<EditorColor, "color">
be.getColorObjectByAttributeValues(COLORS, undefined, '#ff0000');

// $ExpectType EditorColor | undefined
be.getColorObjectByColorValue(COLORS, '#ff0000');

// $ExpectType EditorColor | undefined
be.getColorObjectByColorValue(COLORS, undefined);

// $ExpectType ComponentType<any>
be.withColors('backgroundColor', { textColor: 'color' })(() => <h1>Hello World</h1>);

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
be.getFontSize(FONT_SIZES, 'small', 15);

// $ExpectType Partial<EditorFontSize> & Pick<EditorFontSize, "size">
be.getFontSize(FONT_SIZES, undefined, 15);

// $ExpectType string
be.getFontSizeClass('foo');

// $ExpectType ComponentType<any>
be.withFontSizes('fontSize')(() => <h1>Hello World</h1>);

//
// inner-blocks
//
<be.InnerBlocks />;
<be.InnerBlocks renderAppender={be.InnerBlocks.ButtonBlockAppender} />;
<be.InnerBlocks.Content />;
<be.InnerBlocks.DefaultBlockAppender />;

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
<be.InspectorControls.Slot />;

//
// media-placeholder
//
<be.MediaPlaceholder
    onSelect={item => console.log(item.id)}
    allowedTypes={['image']}
    labels={{ title: 'The Image' }}
/>;
<be.MediaPlaceholder
    multiple
    onSelect={items => console.log(items.map(i => i.id).join())}
    allowedTypes={['image']}
    labels={{ title: 'The Image' }}
/>;

//
// media-upload
// media-upload/check
//
<be.MediaUploadCheck>
    <be.MediaUpload
        onSelect={media => console.log('selected ' + media.id)}
        allowedTypes={['audio']}
        render={({ open }) => <button onClick={open}>Open Media Library</button>}
    />
</be.MediaUploadCheck>;
<be.MediaUploadCheck fallback={<div>Invalid permissions</div>}>
    <be.MediaUpload
        multiple
        onSelect={media => console.log('selected ' + media.map(m => m.id).join())}
        allowedTypes={['audio']}
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
    initialOpen={false}
    colorSettings={[
        {
            value: '#ff0000',
            onChange(color) {
                color && console.log(color);
            },
            label: 'Background Color',
            disableCustomColors: true,
            colors: [
                {
                    color: '#ff0000',
                    name: 'Red',
                },
                {
                    color: '#ffff00',
                    name: 'Yellow',
                },
            ],
        },
    ]}
/>;
<be.PanelColorSettings
    colorSettings={[
        {
            value: '#ff0000' ,
            onChange(color) {
                color && console.log(color);
            },
            label: 'Background Color',
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
    style={{ color: 'red' }}
    tagName="p"
    value="Hello World"
    onChange={nextContent => console.log(nextContent.toUpperCase())}
    onReplace={blocks => blocks.forEach(b => console.log(b.clientId))}
    allowedFormats={['core/bold', 'core/italic']}
/>;
<be.RichText.Content value="foo" />;
<be.RichText.Content tagName="p" style={{ color: 'blue' }} className="foo" value="Hello World" dir="rtl" />;
<be.RichTextShortcut type="primary" character="b" onUse={() => console.log('Hello World')} />;
<be.RichTextToolbarButton
    isActive
    name="bold"
    icon="editor-bold"
    title="foo"
    shortcutType="primary"
    shortcutCharacter="b"
    onClick={() => console.log('Hello World')}
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
    onClose={() => console.log('closing popover')}
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
            title: 'foo',
            onClick() {
                console.log('foo');
            },
        },
        {
            title: 'bar',
            onClick() {
                console.log('bar');
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
be.transformStyles(STYLES, '.foobar');

//
// Store
// ============================================================================

// $ExpectType any
be.store;

// $ExpectType void
dispatch('core/block-editor').insertBlock(BLOCK_INSTANCE);
dispatch('core/block-editor').insertBlock(BLOCK_INSTANCE, 4);
dispatch('core/block-editor').insertBlock(BLOCK_INSTANCE, 4, 'foo');
dispatch('core/block-editor').insertBlock(BLOCK_INSTANCE, 4, 'foo', false);

// $ExpectType IterableIterator<void>
dispatch('core/block-editor').insertBlocks([BLOCK_INSTANCE]);
dispatch('core/block-editor').insertBlocks([BLOCK_INSTANCE], 5);
dispatch('core/block-editor').insertBlocks([BLOCK_INSTANCE], 5, 'foo');
dispatch('core/block-editor').insertBlocks([BLOCK_INSTANCE], 5, 'foo', false);

// $ExpectType void
dispatch('core/block-editor').insertDefaultBlock();
dispatch('core/block-editor').insertDefaultBlock({ foo: 'bar' });
dispatch('core/block-editor').insertDefaultBlock({ foo: 'bar' }, 'foo');
dispatch('core/block-editor').insertDefaultBlock({ foo: 'bar' }, 'foo', 5);

// $ExpectType void
dispatch('core/block-editor').mergeBlocks('foo', 'bar');

// $ExpectType void
dispatch('core/block-editor').moveBlocksUp('foo', 'bar');
dispatch('core/block-editor').moveBlocksUp(['foo', 'baz'], 'bar');

// $ExpectType IterableIterator<void>
dispatch('core/block-editor').moveBlockToPosition('foo', 'bar', 'baz', 1);
dispatch('core/block-editor').moveBlockToPosition(undefined, 'foo', undefined, 5);
dispatch('core/block-editor').moveBlockToPosition(undefined, undefined, undefined, 5);

// $ExpectType void
dispatch('core/block-editor').multiSelect('foo', 'bar');

// $ExpectType void
dispatch('core/block-editor').receiveBlocks([BLOCK_INSTANCE]);

// $ExpectType void
dispatch('core/block-editor').removeBlock('foo');
dispatch('core/block-editor').removeBlock('foo', true);

// $ExpectType IterableIterator<void>
dispatch('core/block-editor').removeBlocks('foo');
dispatch('core/block-editor').removeBlocks('foo', false);
dispatch('core/block-editor').removeBlocks(['foo']);
dispatch('core/block-editor').removeBlocks(['foo'], false);

// $ExpectType void
dispatch('core/block-editor').replaceBlock('foo', BLOCK_INSTANCE);
dispatch('core/block-editor').replaceBlock('foo', [BLOCK_INSTANCE]);
dispatch('core/block-editor').replaceBlock(['foo'], BLOCK_INSTANCE);
dispatch('core/block-editor').replaceBlock(['foo'], [BLOCK_INSTANCE]);

// $ExpectType IterableIterator<void>
dispatch('core/block-editor').replaceBlocks('foo', BLOCK_INSTANCE);
dispatch('core/block-editor').replaceBlocks('foo', [BLOCK_INSTANCE], 3);
dispatch('core/block-editor').replaceBlocks(['foo'], BLOCK_INSTANCE);
dispatch('core/block-editor').replaceBlocks(['foo'], [BLOCK_INSTANCE], 0);

// $ExpectType void
dispatch('core/block-editor').replaceInnerBlocks('foo', [BLOCK_INSTANCE]);
dispatch('core/block-editor').replaceInnerBlocks('foo', [BLOCK_INSTANCE], true);

// $ExpectType void
dispatch('core/block-editor').resetBlocks([BLOCK_INSTANCE]);

// $ExpectType void
dispatch('core/block-editor').selectBlock('foo');
dispatch('core/block-editor').selectBlock('foo', 5);

// $ExpectType void
dispatch('core/block-editor').selectionChange('foo', 'bar', 0, 5);

// $ExpectType IterableIterator<void>
dispatch('core/block-editor').selectNextBlock('foo');

// $ExpectType IterableIterator<void>
dispatch('core/block-editor').selectPreviousBlock('foo');

// $ExpectType void
dispatch('core/block-editor').setTemplateValidity(false);

// $ExpectType void
dispatch('core/block-editor').showInsertionPoint();
dispatch('core/block-editor').showInsertionPoint('foo');
dispatch('core/block-editor').showInsertionPoint('foo', 5);

// $ExpectType void
dispatch('core/block-editor').toggleBlockMode('foo');

// $ExpectType void
dispatch('core/block-editor').toggleSelection();
dispatch('core/block-editor').toggleSelection(true);

// $ExpectType void
dispatch('core/block-editor').updateBlock('foo', { attributes: { foo: 'bar' }, innerBlocks: [] });

// $ExpectType void
dispatch('core/block-editor').updateBlockAttributes('foo', { foo: 'bar' });

// $ExpectType void
dispatch('core/block-editor').updateBlockListSettings('foo', { allowedBlocks: ['core/paragraph'] });

// $ExpectType void
dispatch('core/block-editor').updateSettings({
    focusMode: true,
    codeEditingEnabled: false,
    maxUploadFileSize: 500,
    richEditingEnabled: false,
});

// $ExpectType boolean
select('core/block-editor').canInsertBlockType('core/paragraph');
select('core/block-editor').canInsertBlockType('core/paragraph', 'foo');

// $ExpectType string | null
select('core/block-editor').getAdjacentBlockClientId();
select('core/block-editor').getAdjacentBlockClientId('foo');
select('core/block-editor').getAdjacentBlockClientId('foo', -1);
select('core/block-editor').getAdjacentBlockClientId('foo', 1);

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
