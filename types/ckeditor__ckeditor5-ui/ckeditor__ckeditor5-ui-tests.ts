import { Editor } from '@ckeditor/ckeditor5-core';
import {
    addListToDropdown,
    addToolbarToDropdown,
    BalloonPanelView,
    BalloonToolbar,
    BlockToolbar,
    BodyCollection,
    BoxedEditorUIView,
    ButtonView,
    clickOutsideHandler,
    ColorGridView,
    ColorTileView,
    ContextualBalloon,
    createDropdown,
    createLabeledDropdown,
    createLabeledInputText,
    DropdownButtonView,
    EditorUIView,
    enableToolbarKeyboardFocus,
    FocusCycler,
    FormHeaderView,
    getLocalizedColorOptions,
    IconView,
    injectCssTransitionDisabler,
    InlineEditableUIView,
    InputTextView,
    LabeledFieldView,
    LabelView,
    ListItemView,
    ListView,
    Model,
    normalizeColorOptions,
    normalizeToolbarConfig,
    Notification,
    SplitButtonView,
    StickyPanelView,
    submitHandler,
    SwitchButtonView,
    Template,
    ToolbarSeparatorView,
    ToolbarView,
    TooltipView,
    View,
    ViewCollection
} from '@ckeditor/ckeditor5-ui';
import preventDefault from '@ckeditor/ckeditor5-ui/src/bindings/preventdefault';
import DropdownPanelView from '@ckeditor/ckeditor5-ui/src/dropdown/dropdownpanelview';
import DropdownView from '@ckeditor/ckeditor5-ui/src/dropdown/dropdownview';
import IframeView from '@ckeditor/ckeditor5-ui/src/iframe/iframeview';
import InputView from '@ckeditor/ckeditor5-ui/src/input/inputview';
import InputNumberView from '@ckeditor/ckeditor5-ui/src/inputnumber/inputnumberview';
import { createLabeledInputNumber } from '@ckeditor/ckeditor5-ui/src/labeledfield/utils';
import LabeledInputView from '@ckeditor/ckeditor5-ui/src/labeledinput/labeledinputview';
import ListSeparatorView from '@ckeditor/ckeditor5-ui/src/list/listseparatorview';
import ToolbarLineBreakView from '@ckeditor/ckeditor5-ui/src/toolbar/toolbarlinebreakview';
import { DomEmitterMixin, FocusTracker, KeystrokeHandler, Locale } from '@ckeditor/ckeditor5-utils';

let num = 0;
let str = '';
class MyEditor extends Editor {}
const editor = new MyEditor();
let bool = true;
/**
 * View
 */

let view = new View();
view.isRendered === bool;
let template: Template;
template = view.template as Template;

view.on('foo', (ev, ...args) => {
    // $ExpectType EventInfo<View, "foo">
    ev;
    // $ExpectType any[]
    args;
});

view.set('foo');

let htmlelement = template.render() as HTMLElement;

let locale: Locale = new Locale();
view = new View(locale);
locale = view.locale as Locale;

view.registerChild(view);
view.registerChild([view]);

view.deregisterChild(view);
view.deregisterChild([view]);

view.setTemplate({
    tag: 'div',
    attributes: {
        class: [view.bindTemplate.to('foo')],
    },
});

view.setTemplate({ tag: 'a' });

view.setTemplate({
    tag: 'div',
    children: [
        view,
        {
            tag: 'p',
            children: [view],
        },
        {
            text: 'foo',
        },
    ],
});

view.extendTemplate({
    attributes: {
        class: [view.bindTemplate.if('foo')],
    },
});

view.render();
view.destroy();

htmlelement = view.element!;
view.element === null;

// $ExpectType void | undefined
view.disableCssTransitions?.();
// $ExpectType void | undefined
view.enableCssTransitions?.();

/**
 * ViewCollection
 */
let viewCollection: ViewCollection = view.createCollection();
view = viewCollection.get(0) as View;
viewCollection.get(0) === null;
// $ExpectType (View & { id: string; }) | null
viewCollection.get(0);
viewCollection.setParent(htmlelement);
viewCollection.add(view);
// @ts-expect-error
viewCollection.add([view]);
viewCollection.addMany([view]);
viewCollection.remove(view);
// @ts-expect-error
viewCollection.remove([view]);
viewCollection.destroy();

viewCollection.on('foo', (ev, ...args) => {
    // $ExpectType EventInfo<ViewCollection<View>, "foo">
    ev;
    // $ExpectType any[]
    args;
});

viewCollection.set('foo');

/**
 * Template
 */
const templateBind = Template.bind(new Model(), DomEmitterMixin);
new Template({ tag: 'p' });
new Template({
    tag: 'p',
    on: {
        click: templateBind.to('clicked'),
        'click@a.foo': templateBind.to('clicked'),
        mouseover: [templateBind.to('clicked'), templateBind.to('executed')],
    },
});
new Template({
    tag: 'div',
    children: viewCollection,
});

new Template({
    text: 'foo',
    tag: 'p',
    attributes: {
        a: 'foo',
        b: ['bar', 'baz'],
        c: {
            ns: 'abc',
            value: templateBind.to('qux'),
        },
    },
    children: [
        {
            tag: 'div',
            text: 'content',
        },
        {
            tag: 'div',
            text: templateBind.to('x'),
        },
        'abc',
        {
            tag: 'div',
            text: ['a', 'b'],
        },
        document.createElement('div'),
    ],
    on: {
        'a@span': templateBind.to('b'),
        'b@span': templateBind.to(() => {}),
        'c@span': [templateBind.to('c'), templateBind.to(() => {})],
    },
});

/**
 * Model
 */
class MyModel extends Model {}
const model = new MyModel();
model.set({ a: 4 });
model.a;
// @ts-expect-error
model.a = num;

/**
 * ListView
 */
const listView = new ListView(locale);
listView.focus();
listView.destroy();
let focusTracker: FocusTracker = listView.focusTracker;
// @ts-expect-error
listView.focusTracker as ListView;

/**
 * FocusCycler
 */
let focusCycler = new FocusCycler({
    focusables: viewCollection,
    focusTracker,
});
focusCycler = new FocusCycler({
    focusables: viewCollection,
    focusTracker: new FocusTracker(),
    actions: { focusPrevious: 'bar', focusNext: 'foo' },
});
focusCycler.focusPrevious();
focusCycler.focusLast();

/**
 * ToolipView
 */
const tooltip = new TooltipView(locale);
str = tooltip.element?.tagName as string;
str = tooltip.text;

/**
 * clickOutsideHandler
 */
clickOutsideHandler({
    emitter: new View(),
    activator: () => false,
    contextElements: [document.createElement('div')],
    callback: () => {},
});

/**
 * injectCssTransitionDisabler
 */
injectCssTransitionDisabler(view);

/**
 * submitHandler
 */
submitHandler({ view });

/**
 * BodyCollection
 */
let bodyCollection = new BodyCollection(locale);
locale = bodyCollection.locale;
bodyCollection = new BodyCollection(locale, [view]);
bodyCollection[Symbol.iterator]();
bodyCollection.attachToDom();
bodyCollection.detachFromDom();

/**
 * ButtonView
 */
let buttonView = new ButtonView(locale);
buttonView.render();
viewCollection = buttonView.children;
view = buttonView.labelView;
htmlelement = buttonView.element as HTMLElement;

/**
 * SwitchButtonView
 */
const switchbuttonview = new SwitchButtonView();
view = switchbuttonview.toggleSwitchView;
htmlelement = switchbuttonview.element as HTMLElement;
view = switchbuttonview.children.get(0) as View;

/**
 * ColorGrid
 */
const colorDefinition = {
    color: '#fff',
    label: 'white',
    options: {
        hasBorder: false,
    },
};

const [colorDefinition1] = getLocalizedColorOptions(locale, [colorDefinition]);
const [colorDefinition2] = normalizeColorOptions([colorDefinition1]);

new ColorGridView(locale).destroy();
new ColorGridView(locale, { colorDefinitions: [colorDefinition1, colorDefinition2] });

new ColorTileView(locale);

/**
 * DropdownButtonView
 */
const dropdownbuttonview = new DropdownButtonView(locale);
view = dropdownbuttonview.arrowView;

/**
 * SplitButtonView
 */
const splitbuttonview = new SplitButtonView(locale);
view = splitbuttonview.arrowView;
view = splitbuttonview.actionView;
splitbuttonview.destroy();

/**
 * Dropdown
 */
let dropdownView = new DropdownView(locale, dropdownbuttonview, new DropdownPanelView(locale));
/**
 * Dropdown Utils
 */
const options: { model: Model; type: 'button' } = { model, type: 'button' };
addListToDropdown(dropdownView, [options]);
addToolbarToDropdown(dropdownView, [buttonView]);
createDropdown(locale, buttonView);

/**
 * EditorUIView
 */
const editorUIView = new EditorUIView(locale);
viewCollection = editorUIView.body;

/**
 * BoxedEditorUIView
 */
const boxedEditor = new BoxedEditorUIView(locale);
viewCollection = boxedEditor.body;
viewCollection = boxedEditor.top;
viewCollection = boxedEditor.main;

/**
 * EditableUIView
 */
// $ExpectType boolean
new InlineEditableUIView(locale, view)._hasExternalElement;
// @ts-expect-error
new InlineEditableUIView(locale, view)._hasExternalElement = true;

/**
 * FormHeaderView
 */
new FormHeaderView(locale);
new FormHeaderView(locale, { label: 'foo', class: 'bar' });

/**
 * IconView
 */
let iconview = new IconView();
iconview = new IconView(locale);
str = iconview.fillColor;
str = iconview.content;
str = iconview.viewBox;

/**
 * InputTextView
 */
let inputtextview = new InputTextView(locale);
inputtextview.focus();
inputtextview.focusTracker;

/**
 * LabelView
 */
const labelview = new LabelView();
str = labelview.for = labelview.id = labelview.text;

/**
 * LabeledFieldView
 */
const labeledfieldview = new LabeledFieldView(locale, () => view);
labeledfieldview.focus();

dropdownView = createLabeledDropdown(labeledfieldview, 'foo', 'bar');

inputtextview = createLabeledInputText(labeledfieldview, 'foo', 'baR');

/**
 * ListItemView
 */
const listItemView = new ListItemView(locale);
viewCollection = listItemView.children;

/**
 * Notification
 */
const notification = new Notification(editor);
notification.showInfo('hello');
notification.showSuccess('hello');
notification.showWarning('hello');
notification.showWarning('hello', { namespace: '', title: 'world' });

/**
 * BalloonPanelView
 */
const ballonPanelView = new BalloonPanelView();
str = ballonPanelView.position as string;
viewCollection = ballonPanelView.content;

/**
 * ContextualBalloon
 */
const contextualballon = new ContextualBalloon(editor);
contextualballon.add({ stackId: '' });
contextualballon.isEnabled === bool;
contextualballon.remove(view);
contextualballon.showStack('foo');

/**
 * StickyPanelView
 */
const stickypanelview = new StickyPanelView();
viewCollection = stickypanelview.content;
num = stickypanelview.limiterBottomOffset;
// $ExpectType HTMLElement | null
stickypanelview.limiterElement;

/**
 * ToolipView
 */
const tooltipView = new TooltipView();
str = tooltipView.position;
str = tooltipView.text;

/**
 * ToolbarView
 */
let toolbarView = new ToolbarView(locale);
toolbarView.focus();
bool = toolbarView.isCompact;
bool = toolbarView.options.isFloating!;

/**
 * ToolbarSeparatorView
 */
const toolbarSeparatorView = new ToolbarSeparatorView();
htmlelement = toolbarSeparatorView.element as HTMLElement;

/**
 * enableToolbarKeyboardFocus
 */
enableToolbarKeyboardFocus({
    origin: view,
    originKeystrokeHandler: new KeystrokeHandler(),
    originFocusTracker: new FocusTracker(),
    toolbar: toolbarView,
});

/**
 * normalizeToolbarConfig
 */
const toolbarConfig = normalizeToolbarConfig(['foo', 'bar', 'set', str]);
normalizeToolbarConfig(toolbarConfig);

/**
 * BalloonToolbar
 */
const balloonToolbar = new BalloonToolbar(editor);
balloonToolbar.show();
balloonToolbar.hide();
toolbarView = balloonToolbar.toolbarView;
focusTracker = balloonToolbar.focusTracker;

/**
 * BlockToolbar
 */
const blockToolbar = new BlockToolbar(editor);
toolbarView = blockToolbar.toolbarView;
buttonView = blockToolbar.buttonView;

/**
 * preventDefault
 */
view.setTemplate({
    tag: 'div',

    on: {
        foo: preventDefault(view),
    },
});

/**
 * IframeView
 */
const iframeView = new IframeView();
iframeView.render().then(() => {});
document.body.appendChild(iframeView.element!);
iframeView.element!.remove();

/**
 * LabeledInputView
 */
const labeledInputView = new LabeledInputView(locale, InputTextView);
labeledInputView.render();
labeledInputView.statusView.element!.tagName.startsWith('');
labeledInputView.labelView.for.startsWith('');
labeledInputView.inputView.isReadOnly === bool;
labeledInputView.select();

/**
 * ListSeparatorView
 */
new ListSeparatorView().render();
new ListSeparatorView().element!.tagName.startsWith('foo');

/**
 * ToolbarLineBreakView
 */
new ToolbarLineBreakView().render();
new ToolbarLineBreakView().element!.tagName.startsWith('foo');

/**
 * InputView
 */
new InputView(locale).destroy();
// $ExpectType string
new InputView(locale).id;
// $ExpectType string
new InputView(locale).placeholder;
// @ts-expect-error
new InputView(locale).placeholder = '';
new InputView(locale).destroy();
new InputView(locale).focus();

/**
 * InputNumberView
 */
new InputNumberView(locale).destroy();
// $ExpectType string
new InputNumberView(locale).id;
// $ExpectType string
new InputNumberView(locale).placeholder;
// @ts-expect-error
new InputNumberView(locale).placeholder = '';
new InputNumberView(locale).destroy();
new InputNumberView(locale).focus();
// $ExpectType number | undefined
new InputNumberView(locale).min;
// $ExpectType number | undefined
new InputNumberView(locale).step;

// $ExpectType InputNumberView
createLabeledInputNumber(labeledfieldview, '', '');

// $ExpectType BalloonToolbar
editor.plugins.get('BalloonToolbar');

// $ExpectType BlockToolbar
editor.plugins.get('BlockToolbar');

// $ExpectType ContextualBalloon
editor.plugins.get('ContextualBalloon');

// $ExpectType Notification
editor.plugins.get('Notification');
