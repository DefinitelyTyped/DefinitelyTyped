// Type definitions for Tabris.js v1.2
// Project: http://tabrisjs.com
// Definitions by: Tabris.js team <http://github.com/eclipsesource/tabris>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module tabris {

  // Types

  interface Bounds {

    /**
     * the horizontal offset from the parent's left edge in dip
     */
    left: number;

    /**
     * the vertical offset from the parent's top edge in dip
     */
    top: number;

    /**
     * the width of the widget in dip
     */
    width: number;

    /**
     * the height of the widget in dip
     */
    height: number;

  }

  interface Transformation {

    /**
     * Clock-wise rotation in radians. Defaults to `0`.
     */
     rotation: number;

    /**
     * Horizontal scale factor. Defaults to `1`.
     */
    scaleX: number;

    /*
     * Vertical scale factor. Defaults to `1`.
     */
    scaleY: number;

    /**
     * Horizontal translation (shift) in dip. Defaults to `0`.
     */
    translationX: number;

    /**
     * Vertical translation (shift) in dip. Defaults to `0`.
     */
    translationY: number;

  }

  // TODO A plain string can be used as a shorthand, e.g. `"image.jpg"` equals `{src: "image.jpg"}`.
  interface Image {

    /**
     * Image path or URL.
     */
    src?: string;

    /**
     * Image width, extracted from the image file when missing.
     */
    width?: number;

    /**
     * Image height, extracted from the image file when missing.
     */
    height?: number;

    /**
     * Image scale factor - the image will be scaled down by this factor.
     * Ignored when width or height are set.
     */
    scale?: number;

  }

  interface CanvasContext {
    // TODO
  }

  // Events

  /**
   * Event handling API supported by widgets and various other objects.
   */
  interface EventSupport <T> {

    /**
     * Adds the *listener* to the list of functions to be notified when *event* is fired.
     * In the listener function, `this` will point to the object itself. Supports chaining.
     *
     * @param event the name of the event to listen on
     * @param listener the listener function
     */
    on (event: string, listener: (target: T, ...args: any[]) => any): T;

    /**
     * Same as `on`, but removes the listener after it has been invoked by an event.
     * Supports chaining.
     *
     * @param event the name of the event to listen on
     * @param listener the listener function
     */
    once (event: string, listener: (target: T, ...args: any[]) => any): T;

    /**
     * Removes all listeners for all events from this widget. Supports chaining.
     */
    off (): T;

    /**
     * Removes all listeners for *event* from this widget. Supports chaining.
     *
     * @param event the event name to remove listeners for
     */
    off (event: string): T;

    /**
     * Removes all occurrences of *listener* that are bound to *event* from this widget.
     * Supports chaining.
     *
     * @param event the event to remove the listener from
     * @param listener the listener function to remove
     */
    off (event: string, listener: (target: T, ...args: any[]) => any): T;

    /**
     * Triggers an event on this object. Supports chaining.
     *
     * @param event the name of the event to trigger
     * @param args the arguments to pass to the listener functions
     */
    trigger (event: string, ...args: any[]): T;

  }

  interface AnimationOptions {

    /**
     * The time until the animation starts in ms, defaults to `0`.
     */
    delay?: number;

    /**
     * The duration in ms.
     */
    duration: number;

    /**
     * One of `linear`, `ease-in`, `ease-out`, `ease-in-out`.
     */
    easing: string;

    /**
     * The number of times to repeat the animation, defaults to `0`.
     */
    repeat: number;

    /**
     * `true` to alternate the direction of the animation on every repeat.
     */
    reverse: boolean;

    /**
     * No effect, but will be given in animation events.
     */
    name: string;

  }

  // Widget

  function create (type: string, properties: WidgetProperties): Widget<any>;

  /**
   * API supported by all widgets.
   */
  interface Widget <T> extends EventSupport <T> {

    // Property Support

    /**
     * Gets the current value of the given *property*.
     *
     * @param property
     */
    get (property: string): any;

    /**
     * Sets the given property. Supports chaining.
     *
     * @param property the name of the property to set
     * @param value the value to set the property to
     * @param options passed to the change event resulting from this method call
     */
    set (property: string, value: any, options?: Object): T;

    /**
     * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
     *
     * @param properties the properties to set
     * @param options passed to the change event resulting from this method call
     */
    set (properties: WidgetProperties, options?: Object): T;

    /**
     * Starts an animation that transforms the given properties from their current values to the given ones.
     * Supported properties are *transform* and *opacity*.
     *
     * @param properties The properties and target values to animate.
     * @param options Configures the animation itself.
     */
    animate (properties: WidgetProperties, options: AnimationOptions): void;

    /**
     * Appends this widget to the given parent.
     * The parent widget must support children (extending *Composite*).
     *
     * @param parent the parent widget to append this one to
     */
    appendTo (parent: Composite): T;

    /**
     * Applies the given properties to all descendants that match the associated selector(s).
     *
     * @param properties an object in the format
     *   `{selector: {property: value, property: value, ... }, selector: ...}`
     */
    apply (properties: Object): T;

    /**
     * Returns a (possibly empty) collection of all children of this widget.
     */
    children (): WidgetCollection;

    /**
     * Returns a (possibly empty) collection of all children of this widget that match the selector.
     *
     * @param selector a selector string to filter children
     */
    children (selector: string): WidgetCollection;

    /**
     * Removes this widget from its parent and destroys it. Also disposes of all its children.
     * Triggers a `remove` event on the parent and a `dispose` event on itself.
     * The widget can no longer be used.
     */
    dispose (): void;

    /**
     * Returns a (possibly empty) collection of all descendants of this widget.
     */
    find (): WidgetCollection

    /**
     * Returns a (possibly empty) collection of all descendants of this widget that match the selector.
     * @param selector
     */
    find (selector: string): WidgetCollection

    /**
     * Returns `true` if the widget has been disposed, otherwise `false`.
     */
    isDisposed (): boolean

    /**
     * Returns the parent of this widget.
     */
    parent (): T;

    /**
     * An application-wide unique identifier automatically assigned to all widgets on creation.
     * Do not change it.
     */
    cid: string;

    /**
     * Direct access to the value of the property of the same name.
     * May be used instead of `widget.get("id");`.
     * Do not use this field to change the value, instead use `widget.set("id", id);`.
     */
    id: string;

    /**
     * The exact string that was used to create this widget using the `tabris.create` method.
     */
    type: string;

  }

  interface WidgetProperties {

    /**
     * The background color of the widget.
     */
    background?: string;

    /**
     * An image to be displayed on the widget's background.
     * If the image is smaller than the widget, it will be tiled.
     */
    backgroundImage?: Image;

    /**
     * The vertical position of the widget's baseline relative to a sibling widget.
     */
    baseline?: any;

    /**
     * The position of the widget's bottom edge relative to the parent or a sibling widget.
     */
    bottom?: any;

    /**
     * The actual location and size of the widget, relative to its parent. This property is read-only.
     */
    bounds?: Bounds;

    /**
     * The horizontal position of the widget's center relative to the parent's center.
     */
    centerX?: number;

    /**
     * The vertical position of the widget's center relative to the parent's center.
     */
    centerY?: number;

    /**
     * Whether the widget can be operated.
     */
    enabled?: boolean;

    /**
     * The font used for the widget.
     */
    font?: string;

    /**
     * The height of the widget.
     */
    height?: number;

    /**
     * Whether the entire widget should be highlighted while touched.
     */
    highlightOnTouch?: boolean;

    /**
     * A string to identify the widget by using selectors. Id's are optional.
     * It is strongly recommended that they are unique within a page.
     */
    id?: string;

    /**
     * Shorthand for all layout properties. See [Layout](../layout.md).
     */
    layoutData?: Object;

    /**
     * The position of the widget's left edge relative to the parent or a sibling widget.
     */
    left?: any;

    /**
     * Opacity of the entire widget. Can be used for fade animations.
     */
    opacity?: number;

    /**
     * The position of the widget's right edge relative to the parent or a sibling widget.
     */
    right?: any;

    /**
     * Text color of the widget.
     */
    textColor?: string;

    /**
     * The position of the widget's top edge relative to the parent or a sibling widget.
     */
    top?: any;

    /**
     * Modifications to the widget's shape, size, or position. Can be used for animations.
     * **Note:** In Android, the *transform* property does not affect the *bounds* property,
     * while it does so in iOS.
     */
    transform?: Transformation;

    /**
     * Whether the widget is visible.
     */
    visible?: boolean;

    /**
     * The width of the widget.
     */
    width?: number;

  }

  // Action

  function create (type: "Action", properties: ActionProperties): Action;

  /**
   * An executable item that is integrated in the application's navigation menu.
   * Add a listener on *select* to implement the action.
   */
  interface Action extends Widget <Action> {

    set (property: string, value: any, options?: Object): Action;
    set (properties: ActionProperties, options?: Object): Action;

  }

  interface ActionProperties extends WidgetProperties {

    /**
     * Icon image for the action.
     */
    image?: Image;

    /**
     * Actions with higher placement priority will be placed at a more significant position in the UI,
     * e.g. low priority actions could go into a menu instead of being included in a toolbar.
     * Any of `low`, `high`, `normal`.
     */
    placementPriority?: string;

    /**
     * The text to be displayed for the action.
     */
    title?: string;

  }

  // Button

  function create (type: "Button", properties: ButtonProperties): Button;

  /**
   * A push button. Can contain a text or an image.
   */
  interface Button extends Widget <Button> {

    set (property: string, value: any, options?: Object): Button;
    set (properties: ButtonProperties, options?: Object): Button;

  }

  interface ButtonProperties extends WidgetProperties {

    /**
     * The horizontal alignment of the button text.
     * Any of `left`, `right`, `center`. Defaults to `center`.
     */
    alignment?: string;

    /**
     * An image to be displayed on the button.
     */
    image?: Image;

    /**
     * The button's label text.
     */
    text?: string;

  }

  // Canvas

  function create (type: "Canvas", properties: WidgetProperties): Canvas;

  /**
   * Canvas is a widget which allows drawing on it using a canvas context.
   * Canvas context is a subset of the HTML5 [CanvasRenderingContext2D](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D). 
   */
  interface Canvas extends Composite {

    /**
     * Returns the drawing context.
     *
     * @param contextType This must be `"2d"`
     * @param width
     * @param height
     */
    getContext (contextType: string, width: number, height: number): CanvasContext;

  }

  // Cell

  function create (type: "Cell", properties: CellProperties): Cell;

  /**
   * This widget represents a space in a *CollectionView* on which an item is displayed.
   * Cell widgets are not created by the application but by the *CollectionView* widget.
   */
  interface Cell extends Composite {

    set (property: string, value: any, options?: Object): Cell;
    set (properties: CellProperties, options?: Object): Cell;

  }

  interface CellProperties extends WidgetProperties {

    /**
     * The item that is currently represented by this cell.
     * This property is not set by the application but by the *CollectionView* widget.
     */
    item?: any;

    /**
     * The index of the item that is currently represented by this cell.
     * This property is not set by the application but by the *CollectionView* widget.
     */
    itemIndex?: number;

  }

  // CheckBox

  function create (type: "CheckBox", properties: CheckBoxProperties): CheckBox;

  /**
   * A check box widget.
   */
  interface CheckBox extends Widget <CheckBox> {

    set (property: string, value: any, options?: Object): CheckBox;
    set (properties: CheckBoxProperties, options?: Object): CheckBox;

  }

  interface CheckBoxProperties extends WidgetProperties {

    /**
     * The checked state of the check box.
     */
    selection?: boolean;

    /**
     * The label text of the check box.
     */
    text?: string;

  }

  // CollectionView

  function create (type: "CollectionView", properties: CollectionViewProperties): CollectionView;

  /**
   * A scrollable list that displays data items in cells, one per row.
   * Cells are created on demand and filled with widgets in the *initializeCell* callback.
   */
  interface CollectionView extends Widget <CollectionView> {

    set (property: string, value: any, options?: Object): CollectionView;
    set (properties: CollectionViewProperties, options?: Object): CollectionView;

    /**
     * Inserts the given items into this view. Items are added at the end.
     * This operation will modify the *items* property.
     *
     * @param items
     */
    insert (items: any[]): void;

    /**
     * Inserts the given items into this view at the given index.
     * This operation will modify the *items* property.
     *
     * @param items
     * @param index the position to insert the items at.
     *   If a negative index is given, it is interpreted as relative to the end.
     *   If the given index is greater than the item count, new items will be appended at the end. 
     */
    insert (items: any[], index: number): void;

    /**
     * Triggers a refresh of all visible items.
     * This will issue *change:item* events on the corresponding cells.
     */
    refresh (): void;

    /**
     * Triggers a refresh of the item with the given index.
     * If the item is scrolled into view, an *change:item* event will be issued on the corresponding cell.
     *
     * @param index The index of the item that was changed.
     */
    refresh (index: number): void;

    /**
     * Removes the item at the given index from this view. This operation will modify the *items* property.
     * @param index The index of the item to remove. If this is negative, it is interpreted as relative to the end.
     */
    remove (index: number): void;

    /**
     * Removes *count* items beginning with the given index from this view.
     * This operation will modify the *items* property.
     *
     * @param index The index of the first item to remove.
     *   If this is negative, it is interpreted as relative to the end.
     * @param count The number of items to remove.
     */
    remove (index: number, count: number): void;

    /**
     * Scrolls the item with the given index into view.
     * @param index The index of the item to reveal. If this is negative, it is interpreted as relative to the end
     */
    reveal (index: number): void;

  }

  interface CollectionViewProperties extends WidgetProperties {

    /**
     * The name of the cell type to use for a given item.
     * This name will be passed to the `initializeCell` and `itemHeight` functions.
     * Cells will be reused only by items that require the same cell type.
     * If set to a function, this function will be called for every item, providing the item as a parameter,
     * and must return a name for the cell type to use for the given item.
     */
    cellType?: (item : any) => string | string;

    /**
     * A callback used to initialize a collection cell by attaching widget and *change:item* listener.
     * Cells are created by the framework and recycled on scrolling.
     * This callback receives the cell as the first and the cell type as second parameter.
     *
     * @static
     */
    initializeCell?: (cell: Cell, type: string) => any;

    /**
     * The height of a collection cell. If set to a function, this function will be called for every item,
     * providing the item and the cell type as parameters, and must return the item height for the given item.
     */
    itemHeight?: (item: any, type: string) => number | number;

    /**
     * An array of data items to be displayed by the collection view.
     * For dynamic content, use the methods `insert` and `remove` instead of setting this property directly.
     */
    items?: any[];

    /**
     * Enables the user to trigger a refresh by using the pull-to-refresh gesture.
     */
    refreshEnabled?: boolean;

    /**
     * Whether the refresh indicator is currently visible. Will be set to `true` when a *refresh* event
     * is triggered. Reset it to `false` when the refresh is finished.
     */
    refreshIndicator?: boolean;

    /**
     * The message text displayed together with the refresh indicator. Currently not supported on Android.
     */
    refreshMessage?: string;

  }

  // Composite

  function create (type: "Composite", properties: WidgetProperties): Composite;

  interface Parent <T> {

    /**
     * Adds the given widget(s) in the given order to the composite.
     *
     * @param child
     * @param child*
     */
    append (...children: Widget<any>[]): T;

    /**
     * Adds all widgets in the given collection to the composite.
     * @param collection
     */
    append (collection: WidgetCollection): T;

  }

  /**
   * An empty widget that can contain other widgets.
   */
  interface Composite extends Widget <Composite>, Parent <Composite> {
  }

  // Drawer

  function create (type: "Drawer", properties: WidgetProperties): Drawer;

  /**
   * A navigation drawer that can be swiped in from the left edge of the screen. Can contain any kind of widgets.
   * It may be useful to include a `PageSelector` that displays all top-level pages.
   */
  interface Drawer extends Composite {

    /**
     * Closes the drawer.
     */
    close (): Drawer;

    /**
     * Opens the drawer.
     */
    open (): Drawer;

  }

  // ImageView

  function create (type: "ImageView", properties: ImageViewProperties): ImageView;

  /**
   * A widget to display an image.
   */
  interface ImageView extends Widget <ImageView> {

    set (property: string, value: any, options?: Object): ImageView;
    set (properties: ImageViewProperties, options?: Object): ImageView;

  }

  interface ImageViewProperties {

    image?: Image;

    /**
     * Any of `auto`, `fit`, `fill`, `stretch`, `none`. Defaults to `auto`.;
     */
    scaleMode?: string;

  }

  // Page

  function create (type: "Page", properties: PageProperties): Page;

  /**
   * Pages contain an application's UI. Top-level pages are included in the application's main menu.
   */
  interface Page extends Widget <Page>, Parent <Page> {

    set (property: string, value: any, options?: Object): Page;
    set (properties: PageProperties, options?: Object): Page;

    /**
     * Opens the page, i.e. makes it the active page.
     */
    open (): Page;

    /**
     * Closes and disposes of the page.
     */
    close (): void;

  }

  interface PageProperties extends WidgetProperties {

    image?: Image;

    title?: string;

    topLevel?: boolean;

  }

  // PageSelector

  function create (type: "PageSelector", properties: WidgetProperties): PageSelector;

  /**
   * A CollectionView that contains all top-level pages and allows to open them.
   * New top-level pages are added dynamically.
   */
  interface PageSelector extends CollectionView {
  }

  // Picker

  function create (type: "Picker", properties: PickerProperties): Picker;

  /**
   * A widget with a drop-down list of items to choose from.
   */
  interface Picker extends Widget <Picker> {

    set (property: string, value: any, options?: Object): Picker;
    set (properties: PickerProperties, options?: Object): Picker;

  }

  interface PickerProperties extends WidgetProperties {

    items?: string[];

    selection?: string;

    selectionIndex?: number;

  }

  // ProgressBar

  function create (type: "ProgressBar", properties: ProgressBarProperties): ProgressBar;

  /**
   * A widget representing a numeric value as a horizontal bar with a growing indicator.
   */
  interface ProgressBar extends Widget <ProgressBar> {

    set (property: string, value: any, options?: Object): ProgressBar;
    set (properties: ProgressBarProperties, options?: Object): ProgressBar;

  }

  interface ProgressBarProperties {

    /**
     * Defaults to 100.
     */
    maximum?: number;

    /**
     * Defaults to 0.
     */
    minimum?: number;

    /**
     * Defaults to 0.
     */
    selection?: number;

    /**
     * Any of `normal`, `paused, `error`. Defaults to `normal`.
     */
    state?: string;

  }

  // RadioButton

  function create (type: "RadioButton", properties: RadioButtonProperties): RadioButton;

  /**
   * A radio button. Selecting a radio button de-selects all its siblings (i.e. all radio buttons
   * within the same parent).
   */
  interface RadioButton extends Widget <RadioButton> {

    set (property: string, value: any, options?: Object): RadioButton;
    set (properties: RadioButtonProperties, options?: Object): RadioButton;

  }

  interface RadioButtonProperties extends WidgetProperties {

    /**
     * The checked state of the radio button.
     */
    selection?: boolean;

    /**
     * The label text of the radio button.
     */
    text?: string;

  }

  // ScrollView

  function create (type: "ScrollView", properties: ScrollViewProperties): ScrollView;

  /**
   * A composite that allows its content to overflow either vertically (default) or horizontally.
   * Children of a ScrollView may not be attached to its edge in scrolling direction (to the bottom
   * for vertical scrolling, to the right for horizontal scrolling).
   */
  interface ScrollView extends Composite {

    set (property: string, value: any, options?: Object): ScrollView;
    set (properties: ScrollViewProperties, options?: Object): ScrollView;

  }

  interface ScrollViewProperties extends WidgetProperties {

    /**
     * Specifies the scrolling direction of the scroll composite.
     * Either `vertical` or `horizontal`. Default to `vertical`.
     * @static
     */
    direction?: string;

  }

  // SearchAction

  function create (type: "SearchAction", properties: SearchActionProperties): SearchAction;

  /**
   * An action that displays a search text field with dynamic proposals when selected.
   * Add a listener on *select* to implement the action. On *input*, you may set a list of *proposals*.
   */
  interface SearchAction extends Action {

    set (property: string, value: any, options?: Object): SearchAction;
    set (properties: SearchActionProperties, options?: Object): SearchAction;

  }

  interface SearchActionProperties extends ActionProperties {

    /**
     * A hint text that is displayed when the search input is empty.
     */
    message?: string;

    /**
     * The list of proposals to display.
     */
    proposals?: string[];

    /**
     * The text in the search input field.
     */
    text?: string;

  }

  // Slider

  function create (type: "Slider", properties: SliderProperties): Slider;

  /**
   * A widget representing a numeric value as an movable indicator on a horizontal line.
   */
  interface Slider extends Widget <Slider> {

    set (property: string, value: any, options?: Object): Slider;
    set (properties: SliderProperties, options?: Object): Slider;

  }

  interface SliderProperties extends WidgetProperties {

    maximum?: number;

    minimum?: number;

    selection?: number;

  }

  // Switch

  function create (type: "Switch", properties: SwitchProperties): Switch;

  /**
   * A switch widget that can be toggled.
   */
  interface Switch extends Widget <Switch> {

    set (property: string, value: any, options?: Object): Switch;
    set (properties: SwitchProperties, options?: Object): Switch;

  }

  interface SwitchProperties extends WidgetProperties {

    /**
     * The checked state of the switch.
     */
    selection?: boolean;

  }

  // Tab

  function create (type: "Tab", properties: TabProperties): Tab;

  /**
   * A container representing a single tab of the TabFolder widget.
   */
  interface Tab extends Composite {

    set (property: string, value: any, options?: Object): Tab;
    set (properties: TabProperties, options?: Object): Tab;

  }

  interface TabProperties extends WidgetProperties {

    badge?: string;

    image?: Image;

    title?: string;

  }

  // TabFolder

  function create (type: "TabFolder", properties: TabFolderProperties): TabFolder;

  /**
   * A widget that can switch between [tabs](#tab).
   */
  interface TabFolder extends Widget <TabFolder> {

    set (property: string, value: any, options?: Object): TabFolder;
    set (properties: TabFolderProperties, options?: Object): TabFolder;

    /**
     * Adds the given tabs in the given order to the TabFolder.
     *
     * @param children
     */
    append (...children: Tab[]): TabFolder;

  }

  interface TabFolderProperties extends WidgetProperties {

    /**
     * Enables swiping through tabs.
     */
    paging?: boolean;

    selection?: Tab;

    /**
     * The placement of the tab titles. When set to `"auto"`, the position is platform dependent.
     * Any of `top`, `bottom`, `auto`. Defaults to `auto`.
     * @static
     */
    tabBarLocation?: string;

  }

  // TextInput

  function create (type: "TextInput", properties: TextInputProperties): TextInput;

  /**
   * A widget that allows to enter text.
   */
  interface TextInput extends Widget <TextInput> {

    set (property: string, value: any, options?: Object): TextInput;
    set (properties: TextInputProperties, options?: Object): TextInput;

  }

  interface TextInputProperties extends WidgetProperties {

    /**
     * The horizontal alignment of the text.
     * Any of `left`, `right`, `center`. Default: `left`.
     */
    alignment?: string;

    /**
     * Automatically switch to capital letters after every key pressed.
     */
    autoCapitalize?: boolean;

    /**
     * Enables the spell checker and auto-correction feature.
     */
    autoCorrect?: boolean;

    editable?: boolean;

    /**
     * Selects the keyboard type to use for editing this widget.
     * Any of `ascii`, `decimal`, `email`, `number`, `numbersAndPunctuation`, `phone`, `url`, `default`.
     */
    keyboard?: string;

    /**
     * A hint text that is displayed when the input field is empty.
     */
    message?: string;

    /**
     * The text in the input field.
     */
    text?: string;

    /**
     * The type of the text widget.
     * Any of `default`, `password`, `search`, `multiline`.
     * @static
     */
    type?: string;

  }

  // TextView

  function create (type: "TextView", properties: TextViewProperties): TextView;

  /**
   * A widget to display a text. For images, use ImageView.
   */
  interface TextView extends Widget <TextView> {

    set (property: string, value: any, options?: Object): TextView;
    set (properties: TextViewProperties, options?: Object): TextView;

  }

  interface TextViewProperties extends WidgetProperties {

    /**
     * The horizontal alignment of the text.
     * Any of `left`, `right`, `center`. Default: `left`.
     */
    alignment?: string;

    /**
     * Allows for a subset of HTML tags in the text.
     * Supported tags are: `a`, `del`, `ins`, `b`, `i`, `strong`, `em`, `big`, `small`, `br`.
     * All tags must be closed (e.g. use `<br/>` instead of `<br>`). Nesting tags is currently not supported.
     * @static
     */
    markupEnabled?: boolean;

    /**
     * Limit the number of lines to be displayed to the given maximum. `null` disables this limit.
     */
    maxLines?: number;

    /**
     * The text to display.
     */
    text?: string;

  }

  // ToggleButton

  function create (type: "ToggleButton", properties: ToggleButtonProperties): ToggleButton;

  /**
   * A push button that "snaps in", i.e. it is selected when pressed and deselected when pressed again.
   */
  interface ToggleButton extends Widget <ToggleButton> {

    set (property: string, value: any, options?: Object): ToggleButton;
    set (properties: ToggleButtonProperties, options?: Object): ToggleButton;

  }

  interface ToggleButtonProperties extends WidgetProperties {

    /**
     * The horizontal alignment of the button text.
     * Any of `left`, `right`, `center`. Default: `left`.
     */
    alignment?: string;

    /**
     * An image to be displayed on the button.
     */
    image?: Image;

    /**
     * The selection state of the toggle button.
     */
    selection?: boolean;

    /**
     * The button's label text.
     */
    text?: string;

  }

  // Video

  function create (type: "Video", properties: VideoProperties): Video;

  /**
   * A widget that plays a video from a URL.
   */
  interface Video extends Widget <Video> {

    set (property: string, value: any, options?: Object): Video;
    set (properties: VideoProperties, options?: Object): Video;

  }

  interface VideoProperties extends WidgetProperties {

    /**
     * The URL of the video to play.
     */
    url?: string;

  }

  // WebView

  function create (type: "WebView", properties: WebViewProperties): WebView;

  /**
   * A widget that can display a web page.
   * Since this widget requires a lot of recourses it's recommended to have no more than one instance at a time.
   */
  interface WebView extends Widget <WebView> {

    set (property: string, value: any, options?: Object): Video;
    set (properties: WebViewProperties, options?: Object): Video;

  }

  interface WebViewProperties extends WidgetProperties {

    /**
     * A complete HTML document to display. Always returns the last set value.
     */
    html?: string;

    /**
     * The URL of the web page to display. Returns empty string when content from *html* property is displayed.
     */
    url?: string;

  }

  // WidgetCollection

  /**
   */
  interface WidgetCollection extends EventSupport <WidgetCollection> {

    /**
     * Animates all widgets in this collection.
     *
     * @param properties The properties and target values to animate.
     * @param options Configures the animation itself.
     */
    animate (properties: WidgetProperties, options: AnimationOptions): void;

    /**
     * Append all widgets in this collection to the given widget.
     * @param parent
     */
    appendTo (parent: Composite): WidgetCollection;

    /**
     * Returns a collection containing all children of all widgets in this collection.
     */
    children (): WidgetCollection;

    /**
     * Same as `collection.children().filter(selector)`.
     * @param selector
     */
    children (selector: string): WidgetCollection;

    /**
     * Disposes all widgets in this collection.
     */
    dispose (): void;

    /**
     * Returns a collection containing all descendants of all widgets in this collection.
     */
    find (): WidgetCollection;

    /**
     * Returns a collection containing all descendants of all widgets in this collection that match the given selector.
     * @param selector
     */
    find (selector: string): WidgetCollection;

    /**
     * Returns a collection containing all direct parents of all widgets in this collection.
     */
    parent (): WidgetCollection;

    /**
     * A read-only field containing the number of widgets in the collection.
     */
    length: number;

  }

  // tabris.app

  /**
   * The object `tabris.app` provides information about the application.
   */
  interface App {

    /**
     * Installs a patch from the given URL.
     * When the patch is successfully installed, it will remain inactive until the application is reloaded.
     * @param url The URL to fetch a patch from.
     * @param callback A callback function to be called when the installation has finished or failed.
     * In case of a failure, the callback will receive a parameter `error` that contains an Error object.
     * If the installation succeeds, this parameter will be `undefined` and a second parameter will contain
     * the parsed content of the file `patch.json` from the installed patch.
     * @provisional
     */
    installPatch (url : string, callback : (error: Error, patch: Object) => any): void;

    /**
     * Forces the running application to reload the main module and start over.
     */
    reload (): void;

  }

  export var app: App;

  // tabris.device

  /**
   * The object `tabris.device` provides information about the device that executes the application.
   * All properties are read-only.
   */
  interface Device extends EventSupport <Device> {

    get(property: string): void;

    /**
     * The user language configured on the device as an [RFC 4646](http://tools.ietf.org/html/rfc4646) compliant string. For example `"de"`, `"es-ES"`, etc. This property is also available globally as `navigator.language`.
     */
    get(property: "language"): string;

    /**
     * The name of the device model. For example `"iPad4,1"` or `"Nexus 7"`.
     * This property is also available globally as `device.model`.
     */
    get(property: "model"): string;

    /**
     * The device orientation. One of `portrait-primary`, `portrait-secondary`, `landscape-primary`, and `landscape-secondary`.
     */
    get(property: "orientation"): string;

    /**
     * The name of the platform. Currently either `"Android"` or `"iOS"`.
     * This property is also available globally as `device.platform`.
     */
    get(property: "platform"): string;

    /**
     * The ratio between physical pixels and device independent pixels.
     * This property is also available globally as [`window.devicePixelRatio`](https://developer.mozilla.org/en-US/docs/Web/API/Window.devicePixelRatio).
     */
    get(property: "scaleFactor"): number;

    /**
     * The entire height of the device's screen in device independent pixel.
     * Depends on the current device orientation. This property is also available globally as [screen.height](https://developer.mozilla.org/en-US/docs/Web/API/Screen.height).
     */
    get(property: "screenHeight"): number;

    /**
     * The entire width of the device's screen in device independent pixel.
     * Depends on the current device orientation. This property is also available as globally as [screen.width](https://developer.mozilla.org/en-US/docs/Web/API/Screen.width).
     */
    get(property: "screenWidth"): number;

    /**
     * The platform version. On iOS it lools like this: `"8.1.1"`.
     * On Android, the [version code](https://developer.android.com/reference/android/os/Build.VERSION_CODES.html)
     * is returned. This property is also available globally as `device.version`.
     */
    get(property: "version"): string;

  }

  export var device: Device;

  // tabris.ui

  /**
   * The object `tabris.ui` is the root element for all widgets.
   * This is the parent for all top-level pages, *actions* and the *drawer*.
   */
  interface UI extends EventSupport <UI> {

    get(property: string): void;

    /**
     * The currently visible page.
     */
    get(property: "activePage"): Page;

    /**
     * Background color for the navigation elements.
     */
    get(property: "background"): string;

    /**
     * Text color for the navigation elements.
     */
    get(property: "textColor"): string;

    /**
     * Whether the toolbars above and below pages are visible.
     */
    get(property: "toolbarVisible"): boolean;

  }

  export var ui: UI;

}

declare module "tabris" {
  export = tabris;
}
