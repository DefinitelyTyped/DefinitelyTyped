import { Editor } from "@ckeditor/ckeditor5-core";
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
    ViewCollection,
} from "@ckeditor/ckeditor5-ui";
import DropdownPanelView from "@ckeditor/ckeditor5-ui/src/dropdown/dropdownpanelview";
import DropdownView from "@ckeditor/ckeditor5-ui/src/dropdown/dropdownview";
import { DomEmitterMixin, EmitterMixin, FocusTracker, KeystrokeHandler, Locale } from "@ckeditor/ckeditor5-utils";

let num = 0;
let str = "";
class MyEditor extends Editor {}
const editor = new MyEditor();
/**
 * View
 */

let view = new View();
view.locale === undefined;
let bool = true;
view.isRendered === bool;
let template: Template = view.template;

let locale: Locale = new Locale();
view = new View(locale);
locale = view.locale as Locale;

view.registerChild(view);
view.registerChild([view]);

view.deregisterChild(view);
view.deregisterChild([view]);

view.setTemplate({
    tag: "div",
    attributes: {
        class: [view.bindTemplate.to(str)],
    },
});

view.setTemplate({ tag: "a" });

view.setTemplate({
    tag: "div",
    children: [
        view,
        {
            tag: "p",
            children: [view],
        },
        {
            text: "foo",
        },
    ],
});

view.extendTemplate({
    attributes: {
        class: [view.bindTemplate.if("foo")],
    },
});

view.render();
view.destroy();

view.element!.tagName.startsWith("");
view.element === null;

/**
 * ViewCollection
 */
let viewCollection: ViewCollection = view.createCollection();
view = viewCollection.get(num) as View;
viewCollection.get(0) === null;
viewCollection.setParent(document.createElement("div"));
viewCollection.add(view);
// $ExpectError
viewCollection.add([view]);
viewCollection.addMany([view]);
viewCollection.remove(view);
// $ExpectError
viewCollection.remove([view]);
viewCollection.destroy();

/**
 * Template
 */
const templateBind = Template.bind(new Model(), DomEmitterMixin);
template = new Template({ tag: "p" });
template = new Template({
    text: "foo",
    tag: "p",
    attributes: {
        a: "foo",
        b: ["bar", "baz"],
        c: {
            ns: "abc",
            value: templateBind.to("qux"),
        },
    },
    children: [
        {
            text: "content",
        },
        {
            text: templateBind.to("x"),
        },
        "abc",
        {
            text: ["a", "b"],
        },
        document.createElement("div"),
    ],
    on: {
        "a@span": templateBind.to("b"),
        "b@span": templateBind.to(() => {}),
        "c@span": [templateBind.to("c"), templateBind.to(() => {})],
    },
});
document.appendChild(template.render());

/**
 * Model
 */
class MyModel extends Model {}
const model = new MyModel();
model.set({ a: 4 });
model.a;
// $ExpectError
model.a = 4;

/**
 * FocusCycler
 */
let focusCycler = new FocusCycler({
    focusables: viewCollection,
    focusTracker: new FocusTracker(),
});
focusCycler = new FocusCycler({
    focusables: viewCollection,
    focusTracker: new FocusTracker(),
    actions: { focusPrevious: "bar", focusNext: "foo" },
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
    emitter: Object.create(EmitterMixin),
    activator: () => false,
    contextElements: [document.createElement("div")],
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
document.appendChild(buttonView.element!);

/**
 * SwitchButtonView
 */
const switchbuttonview = new SwitchButtonView();
view = switchbuttonview.toggleSwitchView;
document.appendChild(switchbuttonview.element!);
view = switchbuttonview.children.get(0) as View;

/**
 * ColorGrid
 */
const colorDefinition = {
    color: "#fff",
    label: "white",
    options: {
        hasBorder: false,
    },
};

const [colorDefinition1] = getLocalizedColorOptions(locale, [colorDefinition]);
const [colorDefinition2] = normalizeColorOptions([colorDefinition1]);

new ColorGridView(locale);
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

/**
 * Dropdown
 */
let dropdownView = new DropdownView(locale, dropdownbuttonview, new DropdownPanelView(locale));
/**
 * Dropdown Utils
 */
const options: { model: Model; type: "button" } = { model, type: "button" };
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
new InlineEditableUIView(locale, view);

/**
 * FormHeaderView
 */
new FormHeaderView(locale);
new FormHeaderView(locale, { label: "foo", class: "bar" });

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
let inputtextview = new InputTextView();
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

dropdownView = createLabeledDropdown(labeledfieldview, "foo", "bar");

inputtextview = createLabeledInputText(labeledfieldview, "foo", "baR");

/**
 * ListItemView
 */
const listItemView = new ListItemView(locale);
viewCollection = listItemView.children;

/**
 * ListView
 */
const listView = new ListView(locale);
listView.focus();
let focusTracker = listView.focusTracker;

/**
 * Notification
 */
const notification = new Notification(editor);
notification.showInfo("hello");
notification.showSuccess("hello");
notification.showWarning("hello");
notification.showWarning("hello", { namespace: "", title: "world" });

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
contextualballon.add({ stackId: "" });
bool = contextualballon.isEnabled;
contextualballon.remove(view);
contextualballon.showStack("foo");

/**
 * StickyPanelView
 */
const stickypanelview = new StickyPanelView();
viewCollection = stickypanelview.content;
num = stickypanelview.limiterBottomOffset;
document.appendChild(stickypanelview.limiterElement);

/**
 * ToolipView
 */
const tooltipView = new TooltipView();
str = tooltipView.position as string;
str = tooltipView.text;

/**
 * ToolbarView
 */
let toolbarView = new ToolbarView(locale);
toolbarView.focus();
bool = toolbarView.isCompact;
bool = toolbarView.options.isFloating as boolean;

/**
 * ToolbarSeparatorView
 */
const toolbarSeparatorView = new ToolbarSeparatorView();
document.appendChild(toolbarSeparatorView.element!);

/**
 * enableToolbarKeyboardFocus
 */
enableToolbarKeyboardFocus({
    origin: view,
    originKeystrokeHandler: new KeystrokeHandler(),
    originFocusTracker: focusTracker,
    toolbar: toolbarView,
});

/**
 * normalizeToolbarConfig
 */
const toolbarConfig = normalizeToolbarConfig(["foo", "bar", "set"]);
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
