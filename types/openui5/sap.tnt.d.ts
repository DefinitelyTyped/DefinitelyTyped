// For Library Version: 1.90.0

declare module "sap/tnt/library" {
  /**
   * @SINCE 1.68
   *
   * Interface for controls suitable for the `header` aggregation of {@link sap.tnt.ToolPage}.
   */
  export interface IToolHeader {
    __implements__sap_tnt_IToolHeader: boolean;
  }

  /**
   * Predefined types of `InfoLabel`
   */
  export enum RenderMode {
    /**
     * When type of the content of `InfoLabel` is text padding are loose
     */
    Loose = "Loose",
    /**
     * When type of the content of `InfoLabel` is numeric paddings are narrow
     */
    Narrow = "Narrow",
  }
}

declare module "sap/tnt/InfoLabel" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import {
    IFormContent,
    URI,
    TextDirection,
    CSSSize,
  } from "sap/ui/core/library";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { RenderMode } from "sap/tnt/library";

  /**
   * @SINCE 1.54
   *
   * The `InfoLabel` is a small non-interactive control which contains text information and non-semantic color
   * chosen from a list of predefined color schemes. It serves the purpose to attract the user attention to
   * some piece of information (state, quantity, condition, etc.).
   *
   * Overview:
   *
   * The control visualizes text information without user interaction. The text inside the control is always
   * in upper case. It can have smaller or larger side paddings which can be specified by the `renderMode`
   * property. The text-background color pair can be changed by setting a number between 1 and 10 that corresponds
   * to the 10 predefined color combinations of the `colorScheme` property. The control is designed to be
   * vertically aligned with UI5 Input and Button control families. When using `InfoLabel` in non-editable
   * `Forms`, `Tables`, etc., set `displayOnly=true` for best visual results.
   *
   * Usage Guidelines:
   * 	 - If the text is longer than the width of the control, it doesn’t wrap. Instead, it’s represented as
   * 			ellipsis.
   * 	 - When truncated, the full text in the control is not visible. Therefore, it’s recommended to make
   * 			more space for longer items to be fully displayed.
   * 	 - Colors are not semantic and have no visual representation in sap_belize_hcb and sap_belize_hcw themes.
   *
   * 	 - The control shows plain text only, formatting is not visualized.
   */
  export default class InfoLabel extends Control implements IFormContent {
    __implements__sap_ui_core_IFormContent: boolean;
    /**
     * Constructor for a new `InfoLabel`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $InfoLabelSettings
    );
    /**
     * Constructor for a new `InfoLabel`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $InfoLabelSettings
    );

    /**
     * Binds property {@link #getText text} to model data.
     *
     * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description
     * of the possible properties of `oBindingInfo`
     */
    bindText(
      /**
       * The binding information
       */
      oBindingInfo: PropertyBindingInfo
    ): this;
    /**
     * Creates a new subclass of class sap.tnt.InfoLabel with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, InfoLabel>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getColorScheme colorScheme}.
     *
     * Specifies the fill and text color of the control. Accepts a number between 1 and 10 as a value. You can
     * choose from 10 predefined background and text color combinations. The color schemes are non-semantic,
     * you can select them according to your own preferences. **Note:** ColorScheme 10 is available only in
     * Fiori 3 theme. The default `colorScheme` is 7.
     *
     * Default value is `7`.
     */
    getColorScheme(): int;
    /**
     * Gets current value of property {@link #getDisplayOnly displayOnly}.
     *
     * Determines if the `InfoLabel` is in `displayOnly` mode. When set to `true` the control size adjusts to
     * fit other controls, for example non-editable `Forms`.
     *
     * Default value is `false`.
     */
    getDisplayOnly(): boolean;
    /**
     * @SINCE 1.74
     *
     * Gets current value of property {@link #getIcon icon}.
     *
     * Defines the icon to be displayed as graphical element within the `InfoLabel`. It can be an icon from
     * the icon font.
     *
     * Default value is `empty string`.
     */
    getIcon(): URI;
    /**
     * Returns a metadata object for class sap.tnt.InfoLabel.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getRenderMode renderMode}.
     *
     * Specifies the type of the `InfoLabel` paddings - loose or narrow. **Note:** By default the padding is
     * loose. It is recommended to use narrow (smaller) paddings for numeric texts.
     *
     * Default value is `Loose`.
     */
    getRenderMode(): RenderMode | keyof typeof RenderMode;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Specifies the text inside the `InfoLabel` control.
     *
     * Default value is `empty string`.
     */
    getText(): string;
    /**
     * Gets current value of property {@link #getTextDirection textDirection}.
     *
     * Available options for the text direction are LTR and RTL. By default the control inherits the text direction
     * from its parent control.
     *
     * Default value is `Inherit`.
     */
    getTextDirection(): TextDirection | keyof typeof TextDirection;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Specifies the width of the `InfoLabel` control. By default, the `InfoLabel` control has the width of
     * the content. Set this property to restrict the width to a custom value.
     */
    getWidth(): CSSSize;
    /**
     * Sets a new value for property {@link #getColorScheme colorScheme}.
     *
     * Specifies the fill and text color of the control. Accepts a number between 1 and 10 as a value. You can
     * choose from 10 predefined background and text color combinations. The color schemes are non-semantic,
     * you can select them according to your own preferences. **Note:** ColorScheme 10 is available only in
     * Fiori 3 theme. The default `colorScheme` is 7.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `7`.
     */
    setColorScheme(
      /**
       * New value for property `colorScheme`
       */
      iColorScheme?: int
    ): this;
    /**
     * Sets a new value for property {@link #getDisplayOnly displayOnly}.
     *
     * Determines if the `InfoLabel` is in `displayOnly` mode. When set to `true` the control size adjusts to
     * fit other controls, for example non-editable `Forms`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setDisplayOnly(
      /**
       * New value for property `displayOnly`
       */
      bDisplayOnly?: boolean
    ): this;
    /**
     * @SINCE 1.74
     *
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Defines the icon to be displayed as graphical element within the `InfoLabel`. It can be an icon from
     * the icon font.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setIcon(
      /**
       * New value for property `icon`
       */
      sIcon?: URI
    ): this;
    /**
     * Sets a new value for property {@link #getRenderMode renderMode}.
     *
     * Specifies the type of the `InfoLabel` paddings - loose or narrow. **Note:** By default the padding is
     * loose. It is recommended to use narrow (smaller) paddings for numeric texts.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Loose`.
     */
    setRenderMode(
      /**
       * New value for property `renderMode`
       */
      sRenderMode?: RenderMode | keyof typeof RenderMode
    ): this;
    /**
     * Sets a new value for property {@link #getText text}.
     *
     * Specifies the text inside the `InfoLabel` control.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setText(
      /**
       * New value for property `text`
       */
      sText?: string
    ): this;
    /**
     * Sets a new value for property {@link #getTextDirection textDirection}.
     *
     * Available options for the text direction are LTR and RTL. By default the control inherits the text direction
     * from its parent control.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Inherit`.
     */
    setTextDirection(
      /**
       * New value for property `textDirection`
       */
      sTextDirection?: TextDirection | keyof typeof TextDirection
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Specifies the width of the `InfoLabel` control. By default, the `InfoLabel` control has the width of
     * the content. Set this property to restrict the width to a custom value.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth?: CSSSize
    ): this;
    /**
     * Unbinds property {@link #getText text} from model data.
     */
    unbindText(): this;
  }

  export interface $InfoLabelSettings extends $ControlSettings {
    /**
     * Specifies the text inside the `InfoLabel` control.
     */
    text?: string | PropertyBindingInfo;

    /**
     * Specifies the type of the `InfoLabel` paddings - loose or narrow. **Note:** By default the padding is
     * loose. It is recommended to use narrow (smaller) paddings for numeric texts.
     */
    renderMode?: (RenderMode | keyof typeof RenderMode) | PropertyBindingInfo;

    /**
     * Specifies the fill and text color of the control. Accepts a number between 1 and 10 as a value. You can
     * choose from 10 predefined background and text color combinations. The color schemes are non-semantic,
     * you can select them according to your own preferences. **Note:** ColorScheme 10 is available only in
     * Fiori 3 theme. The default `colorScheme` is 7.
     */
    colorScheme?: int | PropertyBindingInfo;

    /**
     * Specifies the width of the `InfoLabel` control. By default, the `InfoLabel` control has the width of
     * the content. Set this property to restrict the width to a custom value.
     */
    width?: CSSSize | PropertyBindingInfo;

    /**
     * Determines if the `InfoLabel` is in `displayOnly` mode. When set to `true` the control size adjusts to
     * fit other controls, for example non-editable `Forms`.
     */
    displayOnly?: boolean | PropertyBindingInfo;

    /**
     * Available options for the text direction are LTR and RTL. By default the control inherits the text direction
     * from its parent control.
     */
    textDirection?:
      | (TextDirection | keyof typeof TextDirection)
      | PropertyBindingInfo;

    /**
     * @SINCE 1.74
     *
     * Defines the icon to be displayed as graphical element within the `InfoLabel`. It can be an icon from
     * the icon font.
     */
    icon?: URI | PropertyBindingInfo;
  }
}

declare module "sap/tnt/NavigationList" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID, CSSSize } from "sap/ui/core/library";

  import NavigationListItem from "sap/tnt/NavigationListItem";

  import Item from "sap/ui/core/Item";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.34
   *
   * The NavigationList control is an interactive control, which provides a choice of different items, ordered
   * as a list.
   */
  export default class NavigationList extends Control {
    /**
     * Constructor for a new NavigationList.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $NavigationListSettings
    );
    /**
     * Constructor for a new NavigationList.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $NavigationListSettings
    );

    /**
     * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
     */
    addAriaDescribedBy(
      /**
       * The ariaDescribedBy to add; if empty, nothing is inserted
       */
      vAriaDescribedBy: ID | Control
    ): this;
    /**
     * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    addAriaLabelledBy(
      /**
       * The ariaLabelledBy to add; if empty, nothing is inserted
       */
      vAriaLabelledBy: ID | Control
    ): this;
    /**
     * Adds some item to the aggregation {@link #getItems items}.
     */
    addItem(
      /**
       * The item to add; if empty, nothing is inserted
       */
      oItem: NavigationListItem
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.tnt.NavigationList`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.tnt.NavigationList` itself.
     *
     * Fired when an item is selected.
     */
    attachItemSelect(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.tnt.NavigationList` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     */
    destroyItems(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:itemSelect itemSelect} event of this `sap.tnt.NavigationList`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachItemSelect(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.tnt.NavigationList with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, NavigationList>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:itemSelect itemSelect} to attached listeners.
     */
    fireItemSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The selected item.
         */
        item?: Item;
      }
    ): this;
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy
     * ariaDescribedBy}.
     */
    getAriaDescribedBy(): ID[];
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
     * ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * Gets current value of property {@link #getExpanded expanded}.
     *
     * Specifies if the control is in expanded or collapsed mode.
     *
     * Default value is `true`.
     */
    getExpanded(): boolean;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * The items displayed in the list.
     */
    getItems(): NavigationListItem[];
    /**
     * Returns a metadata object for class sap.tnt.NavigationList.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets the currently selected `NavigationListItem`.
     */
    getSelectedItem(): NavigationListItem | null;
    /**
     * @SINCE 1.62.0
     *
     * Gets current value of property {@link #getSelectedKey selectedKey}.
     *
     * Specifies the currently selected key.
     */
    getSelectedKey(): string;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Specifies the width of the control.
     */
    getWidth(): CSSSize;
    /**
     * Checks for the provided `sap.tnt.NavigationListItem` in the aggregation {@link #getItems items}. and
     * returns its index if found or -1 otherwise.
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: NavigationListItem
    ): int;
    /**
     * Inserts a item into the aggregation {@link #getItems items}.
     */
    insertItem(
      /**
       * The item to insert; if empty, nothing is inserted
       */
      oItem: NavigationListItem,
      /**
       * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
       * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
     */
    removeAllAriaDescribedBy(): ID[];
    /**
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllItems(): NavigationListItem[];
    /**
     * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
     */
    removeAriaDescribedBy(
      /**
       * The ariaDescribedBy to be removed or its index or ID
       */
      vAriaDescribedBy: int | ID | Control
    ): ID;
    /**
     * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAriaLabelledBy(
      /**
       * The ariaLabelledBy to be removed or its index or ID
       */
      vAriaLabelledBy: int | ID | Control
    ): ID;
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | NavigationListItem
    ): NavigationListItem;
    /**
     * Sets a new value for property {@link #getExpanded expanded}.
     *
     * Specifies if the control is in expanded or collapsed mode.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setExpanded(
      /**
       * New value for property `expanded`
       */
      bExpanded?: boolean
    ): this;
    /**
     * Sets the association for selectedItem. Set `null` to deselect.
     */
    setSelectedItem(
      /**
       * The control to be set as selected
       */
      selectedItem: string | NavigationListItem
    ): NavigationList | null;
    /**
     * Sets the selected item based on a key.
     */
    setSelectedKey(
      /**
       * The key of the item to be selected
       */
      selectedKey: string
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Specifies the width of the control.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth: CSSSize
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.tnt.NavigationList`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.tnt.NavigationList` itself.
     *
     * Fired when an item is selected.
     */
    attachItemSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.tnt.NavigationList` itself
       */
      oListener?: object
    ): this;
  }

  export interface $NavigationListSettings extends $ControlSettings {
    /**
     * Specifies the width of the control.
     */
    width?: CSSSize | PropertyBindingInfo;

    /**
     * Specifies if the control is in expanded or collapsed mode.
     */
    expanded?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.62.0
     *
     * Specifies the currently selected key.
     */
    selectedKey?: string | PropertyBindingInfo;

    /**
     * The items displayed in the list.
     */
    items?: NavigationListItem[] | NavigationListItem | AggregationBindingInfo;

    /**
     * Association to controls / IDs, which describe this control (see WAI-ARIA attribute aria-describedby).
     */
    ariaDescribedBy?: Array<Control | string>;

    /**
     * Association to controls / IDs, which label this control (see WAI-ARIA attribute aria-labelledby).
     */
    ariaLabelledBy?: Array<Control | string>;

    /**
     * @SINCE 1.52.0
     *
     * The currently selected `NavigationListItem`.
     */
    selectedItem?: NavigationListItem | string;

    /**
     * Fired when an item is selected.
     */
    itemSelect?: Function;
  }
}

declare module "sap/tnt/NavigationListItem" {
  import { default as Item, $ItemSettings } from "sap/ui/core/Item";

  import { URI } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.34
   *
   * The NavigationListItem control represents an action, which can be selected by the user. It can provide
   * sub items.
   */
  export default class NavigationListItem extends Item {
    /**
     * Constructor for a new NavigationListItem.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $NavigationListItemSettings
    );
    /**
     * Constructor for a new NavigationListItem.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $NavigationListItemSettings
    );

    /**
     * Adds some item to the aggregation {@link #getItems items}.
     */
    addItem(
      /**
       * The item to add; if empty, nothing is inserted
       */
      oItem: NavigationListItem
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.tnt.NavigationListItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.tnt.NavigationListItem` itself.
     *
     * Fired when this item is selected.
     */
    attachSelect(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.tnt.NavigationListItem` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     */
    destroyItems(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.tnt.NavigationListItem`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachSelect(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.tnt.NavigationListItem with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, NavigationListItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:select select} to attached listeners.
     */
    fireSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The selected item.
         */
        item?: Item;
      }
    ): this;
    /**
     * Gets current value of property {@link #getExpanded expanded}.
     *
     * Specifies if the item is expanded.
     *
     * Default value is `true`.
     */
    getExpanded(): boolean;
    /**
     * Gets current value of property {@link #getHasExpander hasExpander}.
     *
     * Specifies if the item has an expander.
     *
     * Default value is `true`.
     */
    getHasExpander(): boolean;
    /**
     * Gets current value of property {@link #getHref href}.
     *
     * Defines the link target URI. Supports standard hyperlink behavior. If a JavaScript action should be triggered,
     * this should not be set, but instead an event handler for the `select` event should be registered.
     */
    getHref(): URI;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Specifies the icon for the item.
     *
     * Default value is `empty string`.
     */
    getIcon(): URI;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * The sub items.
     */
    getItems(): NavigationListItem[];
    /**
     * Returns a metadata object for class sap.tnt.NavigationListItem.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getTarget target}.
     *
     * Specifies the browsing context where the linked content will open.
     *
     * Options are the standard values for window.open() supported by browsers: `_self`, `_top`, `_blank`, `_parent`,
     * `_search`. Alternatively, a frame name can be entered. This property is only used when the `href` property
     * is set.
     */
    getTarget(): string;
    /**
     * @SINCE 1.52
     *
     * Gets current value of property {@link #getVisible visible}.
     *
     * Specifies if the item should be shown.
     *
     * Default value is `true`.
     */
    getVisible(): boolean;
    /**
     * Checks for the provided `sap.tnt.NavigationListItem` in the aggregation {@link #getItems items}. and
     * returns its index if found or -1 otherwise.
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: NavigationListItem
    ): int;
    /**
     * Inserts a item into the aggregation {@link #getItems items}.
     */
    insertItem(
      /**
       * The item to insert; if empty, nothing is inserted
       */
      oItem: NavigationListItem,
      /**
       * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
       * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllItems(): NavigationListItem[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | NavigationListItem
    ): NavigationListItem;
    /**
     * Sets a new value for property {@link #getExpanded expanded}.
     *
     * Specifies if the item is expanded.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setExpanded(
      /**
       * New value for property `expanded`
       */
      bExpanded?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getHasExpander hasExpander}.
     *
     * Specifies if the item has an expander.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setHasExpander(
      /**
       * New value for property `hasExpander`
       */
      bHasExpander?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getHref href}.
     *
     * Defines the link target URI. Supports standard hyperlink behavior. If a JavaScript action should be triggered,
     * this should not be set, but instead an event handler for the `select` event should be registered.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setHref(
      /**
       * New value for property `href`
       */
      sHref?: URI
    ): this;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Specifies the icon for the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setIcon(
      /**
       * New value for property `icon`
       */
      sIcon?: URI
    ): this;
    /**
     * Sets a new value for property {@link #getTarget target}.
     *
     * Specifies the browsing context where the linked content will open.
     *
     * Options are the standard values for window.open() supported by browsers: `_self`, `_top`, `_blank`, `_parent`,
     * `_search`. Alternatively, a frame name can be entered. This property is only used when the `href` property
     * is set.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setTarget(
      /**
       * New value for property `target`
       */
      sTarget?: string
    ): this;
    /**
     * @SINCE 1.52
     *
     * Sets a new value for property {@link #getVisible visible}.
     *
     * Specifies if the item should be shown.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setVisible(
      /**
       * New value for property `visible`
       */
      bVisible?: boolean
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.tnt.NavigationListItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.tnt.NavigationListItem` itself.
     *
     * Fired when this item is selected.
     */
    attachSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.tnt.NavigationListItem` itself
       */
      oListener?: object
    ): this;
  }

  export interface $NavigationListItemSettings extends $ItemSettings {
    /**
     * Specifies the icon for the item.
     */
    icon?: URI | PropertyBindingInfo;

    /**
     * Specifies if the item is expanded.
     */
    expanded?: boolean | PropertyBindingInfo;

    /**
     * Specifies if the item has an expander.
     */
    hasExpander?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.52
     *
     * Specifies if the item should be shown.
     */
    visible?: boolean | PropertyBindingInfo;

    /**
     * Defines the link target URI. Supports standard hyperlink behavior. If a JavaScript action should be triggered,
     * this should not be set, but instead an event handler for the `select` event should be registered.
     */
    href?: URI | PropertyBindingInfo;

    /**
     * Specifies the browsing context where the linked content will open.
     *
     * Options are the standard values for window.open() supported by browsers: `_self`, `_top`, `_blank`, `_parent`,
     * `_search`. Alternatively, a frame name can be entered. This property is only used when the `href` property
     * is set.
     */
    target?: string | PropertyBindingInfo;

    /**
     * The sub items.
     */
    items?: NavigationListItem[] | NavigationListItem | AggregationBindingInfo;

    /**
     * Fired when this item is selected.
     */
    select?: Function;
  }
}

declare module "sap/tnt/SideNavigation" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import {
    AggregationBindingInfo,
    PropertyBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import Item from "sap/ui/core/Item";

  import NavigationList from "sap/tnt/NavigationList";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { ID } from "sap/ui/core/library";

  import NavigationListItem from "sap/tnt/NavigationListItem";

  /**
   * @SINCE 1.34
   *
   * The SideNavigation control is a container, which consists of flexible and fixed parts on top of each
   * other. Responsive Behavior:
   * 	 - The flexible part adapts its size to the fixed one.
   * 	 - The flexible part has a scrollbar when the content is larger than the available space.  **Note:**
   * 			In order for the SideNavigation to stretch properly, its parent layout control should only be the sap.tnt.ToolPage.
   */
  export default class SideNavigation extends Control {
    /**
     * Constructor for a new SideNavigation.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/side-navigation/ Side Navigation}
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SideNavigationSettings
    );
    /**
     * Constructor for a new SideNavigation.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/side-navigation/ Side Navigation}
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $SideNavigationSettings
    );

    /**
     * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.tnt.SideNavigation`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.tnt.SideNavigation` itself.
     *
     * Fired when an item is selected.
     */
    attachItemSelect(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.tnt.SideNavigation` itself
       */
      oListener?: object
    ): this;
    /**
     * Binds aggregation {@link #getItem item} to model data.
     *
     * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
     * of the possible properties of `oBindingInfo`.
     */
    bindItem(
      /**
       * The binding information
       */
      oBindingInfo: AggregationBindingInfo
    ): this;
    /**
     * Destroys the fixedItem in the aggregation {@link #getFixedItem fixedItem}.
     */
    destroyFixedItem(): this;
    /**
     * Destroys the footer in the aggregation {@link #getFooter footer}.
     */
    destroyFooter(): this;
    /**
     * Destroys the item in the aggregation {@link #getItem item}.
     */
    destroyItem(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:itemSelect itemSelect} event of this `sap.tnt.SideNavigation`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachItemSelect(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.tnt.SideNavigation with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, SideNavigation>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:itemSelect itemSelect} to attached listeners.
     */
    fireItemSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The selected item.
         */
        item?: Item;
      }
    ): this;
    /**
     * Gets current value of property {@link #getExpanded expanded}.
     *
     * Specifies if the control is expanded.
     *
     * Default value is `true`.
     */
    getExpanded(): boolean;
    /**
     * Gets content of aggregation {@link #getFixedItem fixedItem}.
     *
     * Defines the content inside the fixed part.
     */
    getFixedItem(): NavigationList;
    /**
     * Gets content of aggregation {@link #getFooter footer}.
     *
     * Defines the content inside the footer.
     */
    getFooter(): NavigationList;
    /**
     * Gets content of aggregation {@link #getItem item}.
     *
     * Defines the content inside the flexible part.
     */
    getItem(): NavigationList;
    /**
     * Returns a metadata object for class sap.tnt.SideNavigation.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.52.0
     *
     * ID of the element which is the current target of the association {@link #getSelectedItem selectedItem},
     * or `null`.
     */
    getSelectedItem(): ID;
    /**
     * @SINCE 1.62.0
     *
     * Gets current value of property {@link #getSelectedKey selectedKey}.
     *
     * Specifies the currently selected key.
     */
    getSelectedKey(): string;
    /**
     * Sets if the control is in expanded or collapsed mode.
     */
    setExpanded(
      /**
       * Indication if the SideNavigation is expanded.
       */
      isExpanded: boolean
    ): this;
    /**
     * Sets the aggregated {@link #getFixedItem fixedItem}.
     */
    setFixedItem(
      /**
       * The fixedItem to set
       */
      oFixedItem: NavigationList
    ): this;
    /**
     * Sets the aggregated {@link #getFooter footer}.
     */
    setFooter(
      /**
       * The footer to set
       */
      oFooter: NavigationList
    ): this;
    /**
     * Sets the aggregated {@link #getItem item}.
     */
    setItem(
      /**
       * The item to set
       */
      oItem: NavigationList
    ): this;
    /**
     * Sets the association for selectedItem
     */
    setSelectedItem(
      /**
       * The control to be set as selected
       */
      selectedItem: string | NavigationListItem
    ): SideNavigation | null;
    /**
     * Sets the selected item based on a key.
     */
    setSelectedKey(
      /**
       * The key of the item to be selected
       */
      selectedKey: string
    ): this;
    /**
     * Unbinds aggregation {@link #getItem item} from model data.
     */
    unbindItem(): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.tnt.SideNavigation`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.tnt.SideNavigation` itself.
     *
     * Fired when an item is selected.
     */
    attachItemSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.tnt.SideNavigation` itself
       */
      oListener?: object
    ): this;
  }

  export interface $SideNavigationSettings extends $ControlSettings {
    /**
     * Specifies if the control is expanded.
     */
    expanded?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.62.0
     *
     * Specifies the currently selected key.
     */
    selectedKey?: string | PropertyBindingInfo;

    /**
     * Defines the content inside the flexible part.
     */
    item?: NavigationList;

    /**
     * Defines the content inside the fixed part.
     */
    fixedItem?: NavigationList;

    /**
     * Defines the content inside the footer.
     */
    footer?: NavigationList;

    /**
     * @SINCE 1.52.0
     *
     * The selected `NavigationListItem`.
     */
    selectedItem?: NavigationListItem | string;

    /**
     * Fired when an item is selected.
     */
    itemSelect?: Function;
  }
}

declare module "sap/tnt/ToolHeader" {
  import {
    default as OverflowToolbar,
    $OverflowToolbarSettings,
  } from "sap/m/OverflowToolbar";

  import { IToolHeader } from "sap/tnt/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.34
   *
   * The ToolHeader control is a horizontal container that is most commonly used to display buttons, labels,
   * and other various input controls. Overview: The ToolHeader control is based on {@link sap.m.OverflowToolbar}.
   * It contains clearly structured menus of commands that are available across the various apps within the
   * same tool layout. Usage:
   * 	 - If an app implements side navigation in addition to the tool header menu, the menu icon must be the
   * 			first item on the left-hand side of the tool header.
   * 	 - The app menu and the side navigation must not have any dependencies and must work independently.
   * 			 Fiori 3 theme specifics: In Fiori 3 Default theme the ToolHeader is with dark design unlike most
   * 			of the other controls. This defines the usage of limited controls inside it, which will result in good
   * 			design combination.
   *  The ToolHeader stylizes the contained controls with the Shell color parameters, to match the dark design
   * requirement. However, that's not a dark theme.
   *
   *  Only the following controls are supported:
   *
   *  Control name Supported Not supported   sap.m.Text Single line text, text
   * truncation Wrapping   sap.m.Title Single line text, text truncation.
   * Consider using title headings of H4, H5, H6. Wrapping   sap.m.Label Single
   * line text, text truncation Wrapping   sap.m.ObjectStatus Labels,
   * semantic colors Indication colors   sap.ui.core.Icon sap.ui.core.IconColor
   * enumeration for both icons and backgrounds. Interaction state colors   sap.m.Button
   * Buttons in their Back, Default, Transparent and Up types. All four types are over-styled to look
   * as transparent buttons. -   sap.m.MenuButton Emphasized button type.
   * Should be used for triggering Mega menu. If there is no Mega menu, use Title (H6) instead.
   *  Default (over-styled as Transparent) and Transparent types are used for standard menu representation.
   * -   sap.m.Select Default and IconOnly types. IconOnly looks like a button
   * while Default looks is like an input. Semantic states   sap.m.SearchField
   * Support for the regular state of the control. -   sap.m.IconTabHeader
   * All background design variations (all are transparent). Text tab filters or text and count tab filters
   * in Inline mode only. Semantic colors, icons and separators.   sap.f.Avatar/sap.m.Avatar
   * Support for default (Accent 6) color. Image avatar. -   sap.m.Image
   * Primarily used for displaying the company logo. Interaction states
   */
  export default class ToolHeader
    extends OverflowToolbar
    implements IToolHeader {
    __implements__sap_tnt_IToolHeader: boolean;
    /**
     * Constructor for a new ToolHeader.
     * See:
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/tool-header/ Tool Header}
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ToolHeaderSettings
    );
    /**
     * Constructor for a new ToolHeader.
     * See:
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/tool-header/ Tool Header}
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ToolHeaderSettings
    );

    /**
     * Creates a new subclass of class sap.tnt.ToolHeader with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.m.OverflowToolbar.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, ToolHeader>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.tnt.ToolHeader.
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $ToolHeaderSettings extends $OverflowToolbarSettings {}
}

declare module "sap/tnt/ToolHeaderUtilitySeparator" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.16
   *
   * The ToolHeaderUtilitySeparator control is used in the sap.tnt.ToolHeader control to specify where the
   * overflow button is placed.
   */
  export default class ToolHeaderUtilitySeparator extends Control {
    /**
     * Constructor for a new ToolHeaderUtilitySeparator.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.core.Control#constructor
     * sap.ui.core.Control} can be used.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ToolHeaderUtilitySeparatorSettings
    );
    /**
     * Constructor for a new ToolHeaderUtilitySeparator.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.core.Control#constructor
     * sap.ui.core.Control} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ToolHeaderUtilitySeparatorSettings
    );

    /**
     * Creates a new subclass of class sap.tnt.ToolHeaderUtilitySeparator with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, ToolHeaderUtilitySeparator>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.tnt.ToolHeaderUtilitySeparator.
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $ToolHeaderUtilitySeparatorSettings
    extends $ControlSettings {}
}

declare module "sap/tnt/ToolPage" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { IToolHeader } from "sap/tnt/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import SideNavigation from "sap/tnt/SideNavigation";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.34
   *
   * The ToolPage is a layout control, used to create a basic tools app that has a header, side navigation
   * and contents area. Overview: The control has three main areas - a header on top, navigation to the side
   * and a content area that can hold any control. The header and side navigation use custom controls - {@link
   * sap.tnt.ToolHeader} and {@link sap.tnt.SideNavigation}. Usage: The main usage of the sap.tnt controls
   * is for scenarios in the tooling or administration space.
   */
  export default class ToolPage extends Control {
    /**
     * Constructor for a new ToolPage.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ToolPageSettings
    );
    /**
     * Constructor for a new ToolPage.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no id is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ToolPageSettings
    );

    /**
     * Adds some mainContent to the aggregation {@link #getMainContents mainContents}.
     */
    addMainContent(
      /**
       * The mainContent to add; if empty, nothing is inserted
       */
      oMainContent: Control
    ): this;
    /**
     * Destroys the header in the aggregation {@link #getHeader header}.
     */
    destroyHeader(): this;
    /**
     * Destroys all the mainContents in the aggregation {@link #getMainContents mainContents}.
     */
    destroyMainContents(): this;
    /**
     * Destroys the sideContent in the aggregation {@link #getSideContent sideContent}.
     */
    destroySideContent(): this;
    /**
     * Creates a new subclass of class sap.tnt.ToolPage with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, ToolPage>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets content of aggregation {@link #getHeader header}.
     *
     * The control to appear in the header area.
     */
    getHeader(): IToolHeader;
    /**
     * Gets content of aggregation {@link #getMainContents mainContents}.
     *
     * The content section.
     */
    getMainContents(): Control[];
    /**
     * Returns a metadata object for class sap.tnt.ToolPage.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets content of aggregation {@link #getSideContent sideContent}.
     *
     * The side menu of the layout.
     */
    getSideContent(): SideNavigation;
    /**
     * Gets current value of property {@link #getSideExpanded sideExpanded}.
     *
     * Indicates if the side menu is expanded. Overrides the `expanded` property of the `sideContent` aggregation.
     *
     * Default value is `true`.
     */
    getSideExpanded(): boolean;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getMainContents mainContents}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfMainContent(
      /**
       * The mainContent whose index is looked for
       */
      oMainContent: Control
    ): int;
    /**
     * Inserts a mainContent into the aggregation {@link #getMainContents mainContents}.
     */
    insertMainContent(
      /**
       * The mainContent to insert; if empty, nothing is inserted
       */
      oMainContent: Control,
      /**
       * The `0`-based index the mainContent should be inserted at; for a negative value of `iIndex`, the mainContent
       * is inserted at position 0; for a value greater than the current size of the aggregation, the mainContent
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getMainContents mainContents}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllMainContents(): Control[];
    /**
     * Removes a mainContent from the aggregation {@link #getMainContents mainContents}.
     */
    removeMainContent(
      /**
       * The mainContent to remove or its index or id
       */
      vMainContent: int | string | Control
    ): Control;
    /**
     * Sets the aggregated {@link #getHeader header}.
     */
    setHeader(
      /**
       * The header to set
       */
      oHeader: IToolHeader
    ): this;
    /**
     * Sets the aggregated {@link #getSideContent sideContent}.
     */
    setSideContent(
      /**
       * The sideContent to set
       */
      oSideContent: SideNavigation
    ): this;
    /**
     * Sets the expand/collapse state of the SideContent.
     */
    setSideExpanded(
      /**
       * defines whether the SideNavigation is expanded.
       */
      bSideExpanded: boolean
    ): this;
    /**
     * Toggles the expand/collapse state of the SideContent.
     */
    toggleSideContentMode(): this;
  }

  export interface $ToolPageSettings extends $ControlSettings {
    /**
     * Indicates if the side menu is expanded. Overrides the `expanded` property of the `sideContent` aggregation.
     */
    sideExpanded?: boolean | PropertyBindingInfo;

    /**
     * The control to appear in the header area.
     */
    header?: IToolHeader;

    /**
     * The side menu of the layout.
     */
    sideContent?: SideNavigation;

    /**
     * The content section.
     */
    mainContents?: Control[] | Control | AggregationBindingInfo;
  }
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/tnt/InfoLabel": undefined;

    "sap/tnt/library": undefined;

    "sap/tnt/NavigationList": undefined;

    "sap/tnt/NavigationListItem": undefined;

    "sap/tnt/SideNavigation": undefined;

    "sap/tnt/ToolHeader": undefined;

    "sap/tnt/ToolHeaderUtilitySeparator": undefined;

    "sap/tnt/ToolPage": undefined;
  }
}
