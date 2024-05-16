// For Library Version: 1.124.0

declare module "sap/tnt/library" {
  /**
   * Interface for controls suitable for the `header` aggregation of {@link sap.tnt.ToolPage}.
   *
   * @since 1.68
   */
  export interface IToolHeader {
    __implements__sap_tnt_IToolHeader: boolean;
  }

  /**
   * Predefined types of `InfoLabel`
   *
   * This enum is part of the 'sap/tnt/library' module export and must be accessed by the property 'RenderMode'.
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

declare module "sap/tnt/IllustratedMessageType" {
  /**
   * Available TNT `Illustration` types for the {@link sap.m.IllustratedMessage} control.
   *
   * @since 1.121
   */
  enum IllustratedMessageType {
    /**
     * "Avatar" illustration type.
     */
    Avatar = "tnt-Avatar",
    /**
     * "Calculator" illustration type.
     */
    Calculator = "tnt-Calculator",
    /**
     * "ChartArea" illustration type.
     */
    ChartArea = "tnt-ChartArea",
    /**
     * "ChartArea2" illustration type.
     */
    ChartArea2 = "tnt-ChartArea2",
    /**
     * "ChartBar" illustration type.
     */
    ChartBar = "tnt-ChartBar",
    /**
     * "ChartBPMNFlow" illustration type.
     */
    ChartBPMNFlow = "tnt-ChartBPMNFlow",
    /**
     * "ChartBullet" illustration type.
     */
    ChartBullet = "tnt-ChartBullet",
    /**
     * "ChartDoughnut" illustration type.
     */
    ChartDoughnut = "tnt-ChartDoughnut",
    /**
     * "ChartFlow" illustration type.
     */
    ChartFlow = "tnt-ChartFlow",
    /**
     * "ChartGantt" illustration type.
     */
    ChartGantt = "tnt-ChartGantt",
    /**
     * "ChartOrg" illustration type.
     */
    ChartOrg = "tnt-ChartOrg",
    /**
     * "ChartPie" illustration type.
     */
    ChartPie = "tnt-ChartPie",
    /**
     * "CodePlaceholder" illustration type.
     */
    CodePlaceholder = "tnt-CodePlaceholder",
    /**
     * "Company" illustration type.
     */
    Company = "tnt-Company",
    /**
     * "Compass" illustration type.
     */
    Compass = "tnt-Compass",
    /**
     * "Components" illustration type.
     */
    Components = "tnt-Components",
    /**
     * "Dialog" illustration type.
     */
    Dialog = "tnt-Dialog",
    /**
     * "ExternalLink" illustration type.
     */
    ExternalLink = "tnt-ExternalLink",
    /**
     * "FaceID" illustration type.
     */
    FaceID = "tnt-FaceID",
    /**
     * "Fingerprint" illustration type.
     */
    Fingerprint = "tnt-Fingerprint",
    /**
     * "Handshake" illustration type.
     */
    Handshake = "tnt-Handshake",
    /**
     * "Help" illustration type.
     */
    Help = "tnt-Help",
    /**
     * "Lock" illustration type.
     */
    Lock = "tnt-Lock",
    /**
     * "Mission" illustration type.
     */
    Mission = "tnt-Mission",
    /**
     * "MissionFailed" illustration type.
     */
    MissionFailed = "tnt-MissionFailed",
    /**
     * "NoApplications" illustration type.
     */
    NoApplications = "tnt-NoApplications",
    /**
     * "NoFlows" illustration type.
     */
    NoFlows = "tnt-NoFlows",
    /**
     * "NoUsers" illustration type.
     */
    NoUsers = "tnt-NoUsers",
    /**
     * "Radar" illustration type.
     */
    Radar = "tnt-Radar",
    /**
     * "RoadMap" illustration type.
     */
    RoadMap = "tnt-RoadMap",
    /**
     * "Secrets" illustration type.
     */
    Secrets = "tnt-Secrets",
    /**
     * "Services" illustration type.
     */
    Services = "tnt-Services",
    /**
     * "SessionExpired" illustration type.
     */
    SessionExpired = "tnt-SessionExpired",
    /**
     * "SessionExpiring" illustration type.
     */
    SessionExpiring = "tnt-SessionExpiring",
    /**
     * "Settings" illustration type.
     */
    Settings = "tnt-Settings",
    /**
     * "Success" illustration type.
     */
    Success = "tnt-Success",
    /**
     * "SuccessfulAuth" illustration type.
     */
    SuccessfulAuth = "tnt-SuccessfulAuth",
    /**
     * "Systems" illustration type.
     */
    Systems = "tnt-Systems",
    /**
     * "Teams" illustration type.
     */
    Teams = "tnt-Teams",
    /**
     * "Tools" illustration type.
     */
    Tools = "tnt-Tools",
    /**
     * "Tutorials" illustration type.
     */
    Tutorials = "tnt-Tutorials",
    /**
     * "UnableToLoad" illustration type.
     */
    UnableToLoad = "tnt-UnableToLoad",
    /**
     * "Unlock" illustration type.
     */
    Unlock = "tnt-Unlock",
    /**
     * "UnsuccessfulAuth" illustration type.
     */
    UnsuccessfulAuth = "tnt-UnsuccessfulAuth",
    /**
     * "User2" illustration type.
     */
    User2 = "tnt-User2",
  }
  export default IllustratedMessageType;
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
   * The `InfoLabel` is a small non-interactive control which contains text information and non-semantic color
   * chosen from a list of predefined color schemes. It serves the purpose to attract the user attention to
   * some piece of information (state, quantity, condition, etc.).
   *
   * Overview:
   *
   * The control visualizes text information without user interaction. The text-background color pair can
   * be changed by setting a number between 1 and 10 that corresponds to the 10 predefined color combinations
   * of the `colorScheme` property. The control is designed to be vertically aligned with UI5 Input and Button
   * control families. When using `InfoLabel` in non-editable `Forms`, `Tables`, etc., set `displayOnly=true`
   * for best visual results.
   *
   * Usage Guidelines:
   * 	 - If the text is longer than the width of the control, it doesn’t wrap. Instead, it’s represented as
   *     ellipsis.
   * 	 - When truncated, the full text in the control is not visible. Therefore, it’s recommended to make
   *     more space for longer items to be fully displayed.
   * 	 - Colors are not semantic and have no visual representation in sap_belize_hcb, sap_belize_hcw, sap_fiori_3_hcb
   *     and sap_fiori_3_hcw themes.
   * 	 - The control shows plain text only, formatting is not visualized.
   *
   * @since 1.54
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
     * Creates a new subclass of class sap.tnt.InfoLabel with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
     *
     *
     * @returns Created class / constructor function
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
     * Returns a metadata object for class sap.tnt.InfoLabel.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Binds property {@link #getText text} to model data.
     *
     * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description
     * of the possible properties of `oBindingInfo`
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    bindText(
      /**
       * The binding information
       */
      oBindingInfo: PropertyBindingInfo
    ): this;
    /**
     * Gets current value of property {@link #getColorScheme colorScheme}.
     *
     * Specifies the fill and text color of the control. Accepts a number between 1 and 10 as a value. You can
     * choose from 10 predefined background and text color combinations. The color schemes are non-semantic,
     * you can select them according to your own preferences. **Note:** ColorScheme 10 is available only in
     * Fiori 3 and Horizon themes. The default `colorScheme` is 7.
     *
     * Default value is `7`.
     *
     *
     * @returns Value of property `colorScheme`
     */
    getColorScheme(): int;
    /**
     * Gets current value of property {@link #getDisplayOnly displayOnly}.
     *
     * Determines if the `InfoLabel` is in `displayOnly` mode. When set to `true` the control size adjusts to
     * fit other controls, for example non-editable `Forms`.
     *
     * Default value is `false`.
     *
     *
     * @returns Value of property `displayOnly`
     */
    getDisplayOnly(): boolean;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Defines the icon to be displayed as graphical element within the `InfoLabel`. It can be an icon from
     * the icon font.
     *
     * Default value is `empty string`.
     *
     * @since 1.74
     *
     * @returns Value of property `icon`
     */
    getIcon(): URI;
    /**
     * Gets current value of property {@link #getRenderMode renderMode}.
     *
     * Specifies the type of the `InfoLabel` paddings - loose or narrow. **Note:** By default the padding is
     * loose. It is recommended to use narrow (smaller) paddings for numeric texts. **Note:** In Horizon theme
     * there is only one mode and setting this property will not have effect.
     *
     * Default value is `Loose`.
     *
     *
     * @returns Value of property `renderMode`
     */
    getRenderMode(): RenderMode | keyof typeof RenderMode;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Specifies the text inside the `InfoLabel` control.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Value of property `text`
     */
    getText(): string;
    /**
     * Gets current value of property {@link #getTextDirection textDirection}.
     *
     * Available options for the text direction are LTR and RTL. By default the control inherits the text direction
     * from its parent control.
     *
     * Default value is `Inherit`.
     *
     *
     * @returns Value of property `textDirection`
     */
    getTextDirection(): TextDirection | keyof typeof TextDirection;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Specifies the width of the `InfoLabel` control. By default, the `InfoLabel` control has the width of
     * the content. Set this property to restrict the width to a custom value.
     *
     *
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
    /**
     * Sets a new value for property {@link #getColorScheme colorScheme}.
     *
     * Specifies the fill and text color of the control. Accepts a number between 1 and 10 as a value. You can
     * choose from 10 predefined background and text color combinations. The color schemes are non-semantic,
     * you can select them according to your own preferences. **Note:** ColorScheme 10 is available only in
     * Fiori 3 and Horizon themes. The default `colorScheme` is 7.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `7`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
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
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDisplayOnly(
      /**
       * New value for property `displayOnly`
       */
      bDisplayOnly?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Defines the icon to be displayed as graphical element within the `InfoLabel`. It can be an icon from
     * the icon font.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @since 1.74
     *
     * @returns Reference to `this` in order to allow method chaining
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
     * loose. It is recommended to use narrow (smaller) paddings for numeric texts. **Note:** In Horizon theme
     * there is only one mode and setting this property will not have effect.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Loose`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
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
     *
     *
     * @returns Reference to `this` in order to allow method chaining
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
     *
     *
     * @returns Reference to `this` in order to allow method chaining
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
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth?: CSSSize
    ): this;
    /**
     * Unbinds property {@link #getText text} from model data.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    unbindText(): this;
  }
  /**
   * Describes the settings that can be provided to the InfoLabel constructor.
   */
  export interface $InfoLabelSettings extends $ControlSettings {
    /**
     * Specifies the text inside the `InfoLabel` control.
     */
    text?: string | PropertyBindingInfo;

    /**
     * Specifies the type of the `InfoLabel` paddings - loose or narrow. **Note:** By default the padding is
     * loose. It is recommended to use narrow (smaller) paddings for numeric texts. **Note:** In Horizon theme
     * there is only one mode and setting this property will not have effect.
     */
    renderMode?:
      | (RenderMode | keyof typeof RenderMode)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Specifies the fill and text color of the control. Accepts a number between 1 and 10 as a value. You can
     * choose from 10 predefined background and text color combinations. The color schemes are non-semantic,
     * you can select them according to your own preferences. **Note:** ColorScheme 10 is available only in
     * Fiori 3 and Horizon themes. The default `colorScheme` is 7.
     */
    colorScheme?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies the width of the `InfoLabel` control. By default, the `InfoLabel` control has the width of
     * the content. Set this property to restrict the width to a custom value.
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines if the `InfoLabel` is in `displayOnly` mode. When set to `true` the control size adjusts to
     * fit other controls, for example non-editable `Forms`.
     */
    displayOnly?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Available options for the text direction are LTR and RTL. By default the control inherits the text direction
     * from its parent control.
     */
    textDirection?:
      | (TextDirection | keyof typeof TextDirection)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the icon to be displayed as graphical element within the `InfoLabel`. It can be an icon from
     * the icon font.
     *
     * @since 1.74
     */
    icon?: URI | PropertyBindingInfo | `{${string}}`;
  }
}

declare module "sap/tnt/NavigationList" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID, CSSSize } from "sap/ui/core/library";

  import NavigationListItemBase from "sap/tnt/NavigationListItemBase";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import NavigationListItem from "sap/tnt/NavigationListItem";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import Item from "sap/ui/core/Item";

  import Event from "sap/ui/base/Event";

  /**
   * The NavigationList control is an interactive control, which provides a choice of different items, ordered
   * as a list.
   *
   * @since 1.34
   */
  export default class NavigationList extends Control {
    /**
     * Constructor for a new `NavigationList`.
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
     * Constructor for a new `NavigationList`.
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
     * Creates a new subclass of class sap.tnt.NavigationList with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
     *
     *
     * @returns Created class / constructor function
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
     * Returns a metadata object for class sap.tnt.NavigationList.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addAriaDescribedBy(
      /**
       * The ariaDescribedBy to add; if empty, nothing is inserted
       */
      vAriaDescribedBy: ID | Control
    ): this;
    /**
     * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addAriaLabelledBy(
      /**
       * The ariaLabelledBy to add; if empty, nothing is inserted
       */
      vAriaLabelledBy: ID | Control
    ): this;
    /**
     * Adds some item to the aggregation {@link #getItems items}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addItem(
      /**
       * The item to add; if empty, nothing is inserted
       */
      oItem: NavigationListItemBase
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.tnt.NavigationList`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.tnt.NavigationList` itself.
     *
     * Fired when an item is selected.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
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
      fnFunction: (p1: NavigationList$ItemSelectEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.tnt.NavigationList` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.tnt.NavigationList`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.tnt.NavigationList` itself.
     *
     * Fired when an item is selected.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: NavigationList$ItemSelectEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.tnt.NavigationList` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:itemSelect itemSelect} event of this `sap.tnt.NavigationList`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachItemSelect(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: NavigationList$ItemSelectEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Fires event {@link #event:itemSelect itemSelect} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireItemSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: NavigationList$ItemSelectEventParameters
    ): this;
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
     */
    getAriaDescribedBy(): ID[];
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * Gets current value of property {@link #getExpanded expanded}.
     *
     * Specifies if the control is in expanded or collapsed mode.
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `expanded`
     */
    getExpanded(): boolean;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * The items displayed in the list.
     */
    getItems(): NavigationListItemBase[];
    /**
     * Gets the currently selected `NavigationListItem`.
     *
     *
     * @returns The selected item or `null` if nothing is selected
     */
    getSelectedItem(): NavigationListItem | null;
    /**
     * Gets current value of property {@link #getSelectedKey selectedKey}.
     *
     * Specifies the currently selected key.
     *
     * @since 1.62.0
     *
     * @returns Value of property `selectedKey`
     */
    getSelectedKey(): string;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Specifies the width of the control.
     *
     *
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
    /**
     * Checks for the provided `sap.tnt.NavigationListItemBase` in the aggregation {@link #getItems items}.
     * and returns its index if found or -1 otherwise.
     *
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: NavigationListItemBase
    ): int;
    /**
     * Inserts a item into the aggregation {@link #getItems items}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertItem(
      /**
       * The item to insert; if empty, nothing is inserted
       */
      oItem: NavigationListItemBase,
      /**
       * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
       * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
     *
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllAriaDescribedBy(): ID[];
    /**
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     *
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): NavigationListItemBase[];
    /**
     * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
     *
     *
     * @returns The removed ariaDescribedBy or `null`
     */
    removeAriaDescribedBy(
      /**
       * The ariaDescribedBy to be removed or its index or ID
       */
      vAriaDescribedBy: int | ID | Control
    ): ID | null;
    /**
     * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     *
     *
     * @returns The removed ariaLabelledBy or `null`
     */
    removeAriaLabelledBy(
      /**
       * The ariaLabelledBy to be removed or its index or ID
       */
      vAriaLabelledBy: int | ID | Control
    ): ID | null;
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     *
     *
     * @returns The removed item or `null`
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | NavigationListItemBase
    ): NavigationListItemBase | null;
    /**
     * Sets a new value for property {@link #getExpanded expanded}.
     *
     * Specifies if the control is in expanded or collapsed mode.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setExpanded(
      /**
       * New value for property `expanded`
       */
      bExpanded?: boolean
    ): this;
    /**
     * Sets the association for selectedItem. Set `null` to deselect.
     *
     *
     * @returns The `selectedItem` association
     */
    setSelectedItem(
      /**
       * The control to be set as selected
       */
      oItem: ID | NavigationListItem
    ): NavigationList | null;
    /**
     * Sets the selected item based on a key.
     *
     *
     * @returns this pointer for chaining
     */
    setSelectedKey(
      /**
       * The key of the item to be selected
       */
      sSelectedKey: string
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Specifies the width of the control.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth: CSSSize
    ): this;
  }
  /**
   * Describes the settings that can be provided to the NavigationList constructor.
   */
  export interface $NavigationListSettings extends $ControlSettings {
    /**
     * Specifies the width of the control.
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies if the control is in expanded or collapsed mode.
     */
    expanded?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies the currently selected key.
     *
     * @since 1.62.0
     */
    selectedKey?: string | PropertyBindingInfo;

    /**
     * The items displayed in the list.
     */
    items?:
      | NavigationListItemBase[]
      | NavigationListItemBase
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Association to controls / IDs, which describe this control (see WAI-ARIA attribute aria-describedby).
     */
    ariaDescribedBy?: Array<Control | string>;

    /**
     * Association to controls / IDs, which label this control (see WAI-ARIA attribute aria-labelledby).
     */
    ariaLabelledBy?: Array<Control | string>;

    /**
     * The currently selected `NavigationListItem`.
     *
     * @since 1.52.0
     */
    selectedItem?: NavigationListItem | string;

    /**
     * Fired when an item is selected.
     */
    itemSelect?: (oEvent: NavigationList$ItemSelectEvent) => void;
  }

  /**
   * Parameters of the NavigationList#itemSelect event.
   */
  export interface NavigationList$ItemSelectEventParameters {
    /**
     * The selected item.
     */
    item?: Item;
  }

  /**
   * Event object of the NavigationList#itemSelect event.
   */
  export type NavigationList$ItemSelectEvent = Event<
    NavigationList$ItemSelectEventParameters,
    NavigationList
  >;
}

declare module "sap/tnt/NavigationListGroup" {
  import {
    default as NavigationListItemBase,
    $NavigationListItemBaseSettings,
  } from "sap/tnt/NavigationListItemBase";

  import NavigationListItem from "sap/tnt/NavigationListItem";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * The NavigationListGroup represents a group of navigation actions, which can be selected by the user.
   *
   * @since 1.121
   */
  export default class NavigationListGroup extends NavigationListItemBase {
    /**
     * Constructor for a new NavigationListGroup.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $NavigationListGroupSettings
    );
    /**
     * Constructor for a new NavigationListGroup.
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
      mSettings?: $NavigationListGroupSettings
    );

    /**
     * Creates a new subclass of class sap.tnt.NavigationListGroup with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.tnt.NavigationListItemBase.extend}.
     *
     *
     * @returns Created class / constructor function
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, NavigationListGroup>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.tnt.NavigationListGroup.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some item to the aggregation {@link #getItems items}.
     *
     * @since 1.121.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addItem(
      /**
       * The item to add; if empty, nothing is inserted
       */
      oItem: NavigationListItem
    ): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     *
     * @since 1.121.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * The sub items.
     *
     * @since 1.121.0
     */
    getItems(): NavigationListItem[];
    /**
     * Checks for the provided `sap.tnt.NavigationListItem` in the aggregation {@link #getItems items}. and
     * returns its index if found or -1 otherwise.
     *
     * @since 1.121.0
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: NavigationListItem
    ): int;
    /**
     * Inserts a item into the aggregation {@link #getItems items}.
     *
     * @since 1.121.0
     *
     * @returns Reference to `this` in order to allow method chaining
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
     *
     * @since 1.121.0
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): NavigationListItem[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     *
     * @since 1.121.0
     *
     * @returns The removed item or `null`
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | NavigationListItem
    ): NavigationListItem | null;
  }
  /**
   * Describes the settings that can be provided to the NavigationListGroup constructor.
   */
  export interface $NavigationListGroupSettings
    extends $NavigationListItemBaseSettings {
    /**
     * The sub items.
     *
     * @since 1.121.0
     */
    items?:
      | NavigationListItem[]
      | NavigationListItem
      | AggregationBindingInfo
      | `{${string}}`;
  }
}

declare module "sap/tnt/NavigationListItem" {
  import {
    default as NavigationListItemBase,
    $NavigationListItemBaseSettings,
  } from "sap/tnt/NavigationListItemBase";

  import { URI } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import Item from "sap/ui/core/Item";

  import Event from "sap/ui/base/Event";

  /**
   * The NavigationListItem represents a navigation action, which can be selected by the user. It can provide
   * sub items.
   *
   * @since 1.34
   */
  export default class NavigationListItem extends NavigationListItemBase {
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
     * Creates a new subclass of class sap.tnt.NavigationListItem with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.tnt.NavigationListItemBase.extend}.
     *
     *
     * @returns Created class / constructor function
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
     * Returns a metadata object for class sap.tnt.NavigationListItem.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some item to the aggregation {@link #getItems items}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
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
     *
     *
     * @returns Reference to `this` in order to allow method chaining
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
      fnFunction: (p1: NavigationListItem$SelectEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.tnt.NavigationListItem` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.tnt.NavigationListItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.tnt.NavigationListItem` itself.
     *
     * Fired when this item is selected.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: NavigationListItem$SelectEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.tnt.NavigationListItem` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.tnt.NavigationListItem`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSelect(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: NavigationListItem$SelectEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Fires event {@link #event:select select} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: NavigationListItem$SelectEventParameters
    ): this;
    /**
     * Gets current value of property {@link #getHref href}.
     *
     * Defines the link target URI. Supports standard hyperlink behavior. If a JavaScript action should be triggered,
     * this should not be set, but instead an event handler for the `select` event should be registered.
     *
     *
     * @returns Value of property `href`
     */
    getHref(): URI;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Specifies the icon for the item.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Value of property `icon`
     */
    getIcon(): URI;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * The sub items.
     */
    getItems(): NavigationListItem[];
    /**
     * Gets current value of property {@link #getSelectable selectable}.
     *
     * Specifies if the item can be selected. It is recommended to set this property to `false` when the property
     * `href` is also used.
     *
     * Default value is `true`.
     *
     * @since 1.116
     * @experimental (since 1.116) - Disclaimer: this property is in a beta state - incompatible API changes
     * may be done before its official public release.
     *
     * @returns Value of property `selectable`
     */
    getSelectable(): boolean;
    /**
     * Gets current value of property {@link #getTarget target}.
     *
     * Specifies the browsing context where the linked content will open.
     *
     * Options are the standard values for window.open() supported by browsers: `_self`, `_top`, `_blank`, `_parent`,
     * `_search`. Alternatively, a frame name can be entered. This property is only used when the `href` property
     * is set.
     *
     *
     * @returns Value of property `target`
     */
    getTarget(): string;
    /**
     * Gets current value of property {@link #getVisible visible}.
     *
     * Specifies if the item should be shown.
     *
     * Default value is `true`.
     *
     * @since 1.52
     *
     * @returns Value of property `visible`
     */
    getVisible(): boolean;
    /**
     * Checks for the provided `sap.tnt.NavigationListItem` in the aggregation {@link #getItems items}. and
     * returns its index if found or -1 otherwise.
     *
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: NavigationListItem
    ): int;
    /**
     * Inserts a item into the aggregation {@link #getItems items}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
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
     *
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): NavigationListItem[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     *
     *
     * @returns The removed item or `null`
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | NavigationListItem
    ): NavigationListItem | null;
    /**
     * Sets a new value for property {@link #getHref href}.
     *
     * Defines the link target URI. Supports standard hyperlink behavior. If a JavaScript action should be triggered,
     * this should not be set, but instead an event handler for the `select` event should be registered.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
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
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setIcon(
      /**
       * New value for property `icon`
       */
      sIcon?: URI
    ): this;
    /**
     * Sets a new value for property {@link #getSelectable selectable}.
     *
     * Specifies if the item can be selected. It is recommended to set this property to `false` when the property
     * `href` is also used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @since 1.116
     * @experimental (since 1.116) - Disclaimer: this property is in a beta state - incompatible API changes
     * may be done before its official public release.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelectable(
      /**
       * New value for property `selectable`
       */
      bSelectable?: boolean
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
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTarget(
      /**
       * New value for property `target`
       */
      sTarget?: string
    ): this;
    /**
     * Sets a new value for property {@link #getVisible visible}.
     *
     * Specifies if the item should be shown.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @since 1.52
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setVisible(
      /**
       * New value for property `visible`
       */
      bVisible?: boolean
    ): this;
  }
  /**
   * Describes the settings that can be provided to the NavigationListItem constructor.
   */
  export interface $NavigationListItemSettings
    extends $NavigationListItemBaseSettings {
    /**
     * Specifies the icon for the item.
     */
    icon?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies if the item should be shown.
     *
     * @since 1.52
     */
    visible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies if the item can be selected. It is recommended to set this property to `false` when the property
     * `href` is also used.
     *
     * @since 1.116
     * @experimental (since 1.116) - Disclaimer: this property is in a beta state - incompatible API changes
     * may be done before its official public release.
     */
    selectable?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the link target URI. Supports standard hyperlink behavior. If a JavaScript action should be triggered,
     * this should not be set, but instead an event handler for the `select` event should be registered.
     */
    href?: URI | PropertyBindingInfo | `{${string}}`;

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
    items?:
      | NavigationListItem[]
      | NavigationListItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Fired when this item is selected.
     */
    select?: (oEvent: NavigationListItem$SelectEvent) => void;
  }

  /**
   * Parameters of the NavigationListItem#select event.
   */
  export interface NavigationListItem$SelectEventParameters {
    /**
     * The selected item.
     */
    item?: Item;
  }

  /**
   * Event object of the NavigationListItem#select event.
   */
  export type NavigationListItem$SelectEvent = Event<
    NavigationListItem$SelectEventParameters,
    NavigationListItem
  >;
}

declare module "sap/tnt/NavigationListItemBase" {
  import { default as Item, $ItemSettings } from "sap/ui/core/Item";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * The `NavigationListItemBase` class represents a base class for the items that are accepted by the `NavigationList`
   * control.
   *
   * @since 1.121
   */
  export default abstract class NavigationListItemBase extends Item {
    /**
     * Constructor for a new `NavigationListItemBase`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $NavigationListItemBaseSettings
    );
    /**
     * Constructor for a new `NavigationListItemBase`.
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
      mSettings?: $NavigationListItemBaseSettings
    );

    /**
     * Creates a new subclass of class sap.tnt.NavigationListItemBase with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
     *
     *
     * @returns Created class / constructor function
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, NavigationListItemBase>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.tnt.NavigationListItemBase.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getExpanded expanded}.
     *
     * Specifies if the item is expanded.
     *
     * Default value is `true`.
     *
     * @since 1.121
     *
     * @returns Value of property `expanded`
     */
    getExpanded(): boolean;
    /**
     * Returns the DOM Element that should get the focus.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Returns the DOM Element that should get the focus
     */
    getFocusDomRef(): Element;
    /**
     * Gets current value of property {@link #getHasExpander hasExpander}.
     *
     * Specifies if the item is allowed to be expanded or collapsed by the user.
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `hasExpander`
     */
    getHasExpander(): boolean;
    /**
     * Gets current value of property {@link #getVisible visible}.
     *
     * Specifies if the item should be shown.
     *
     * Default value is `true`.
     *
     * @since 1.121
     *
     * @returns Value of property `visible`
     */
    getVisible(): boolean;
    /**
     * Sets a new value for property {@link #getExpanded expanded}.
     *
     * Specifies if the item is expanded.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @since 1.121
     *
     * @returns Reference to `this` in order to allow method chaining
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
     * Specifies if the item is allowed to be expanded or collapsed by the user.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHasExpander(
      /**
       * New value for property `hasExpander`
       */
      bHasExpander?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getVisible visible}.
     *
     * Specifies if the item should be shown.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @since 1.121
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setVisible(
      /**
       * New value for property `visible`
       */
      bVisible?: boolean
    ): this;
  }
  /**
   * Describes the settings that can be provided to the NavigationListItemBase constructor.
   */
  export interface $NavigationListItemBaseSettings extends $ItemSettings {
    /**
     * Specifies if the item is expanded.
     *
     * @since 1.121
     */
    expanded?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies if the item is allowed to be expanded or collapsed by the user.
     */
    hasExpander?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies if the item should be shown.
     *
     * @since 1.121
     */
    visible?: boolean | PropertyBindingInfo | `{${string}}`;
  }
}

declare module "sap/tnt/SideNavigation" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import {
    AggregationBindingInfo,
    PropertyBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import NavigationList from "sap/tnt/NavigationList";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { ID, CSSSize } from "sap/ui/core/library";

  import NavigationListItem from "sap/tnt/NavigationListItem";

  import Item from "sap/ui/core/Item";

  import Event from "sap/ui/base/Event";

  /**
   * The `SideNavigation` control is a container, which consists of flexible and fixed parts on top of each
   * other. Responsive Behavior:
   * 	 - The flexible part adapts its size to the fixed one.
   * 	 - The flexible part has a scrollbar when the content is larger than the available space.  **Note:**
   *     In order for the `SideNavigation` to stretch properly, its parent layout control should only be the `sap.tnt.ToolPage`.
   *
   * @since 1.34
   */
  export default class SideNavigation extends Control {
    /**
     * Constructor for a new `SideNavigation`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SideNavigationSettings
    );
    /**
     * Constructor for a new `SideNavigation`.
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
      mSettings?: $SideNavigationSettings
    );

    /**
     * Creates a new subclass of class sap.tnt.SideNavigation with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
     *
     *
     * @returns Created class / constructor function
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
     * Returns a metadata object for class sap.tnt.SideNavigation.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.tnt.SideNavigation`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.tnt.SideNavigation` itself.
     *
     * Fired when an item is selected.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
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
      fnFunction: (p1: SideNavigation$ItemSelectEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.tnt.SideNavigation` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.tnt.SideNavigation`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.tnt.SideNavigation` itself.
     *
     * Fired when an item is selected.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: SideNavigation$ItemSelectEvent) => void,
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
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    bindItem(
      /**
       * The binding information
       */
      oBindingInfo: AggregationBindingInfo
    ): this;
    /**
     * Destroys the fixedItem in the aggregation {@link #getFixedItem fixedItem}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFixedItem(): this;
    /**
     * Destroys the footer in the aggregation {@link #getFooter footer}.
     *
     * @deprecated (since 1.120) - Use the aggregation `fixedItem` instead.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFooter(): this;
    /**
     * Destroys the item in the aggregation {@link #getItem item}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItem(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:itemSelect itemSelect} event of this `sap.tnt.SideNavigation`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachItemSelect(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: SideNavigation$ItemSelectEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Fires event {@link #event:itemSelect itemSelect} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireItemSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: SideNavigation$ItemSelectEventParameters
    ): this;
    /**
     * Gets current value of property {@link #getAriaLabel ariaLabel}.
     *
     * Specifies an optional `aria-label` that can be used by the screen readers.
     *
     * @since 1.98
     *
     * @returns Value of property `ariaLabel`
     */
    getAriaLabel(): string;
    /**
     * Gets current value of property {@link #getExpanded expanded}.
     *
     * Specifies if the control is expanded.
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `expanded`
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
     *
     * @deprecated (since 1.120) - Use the aggregation `fixedItem` instead.
     */
    getFooter(): NavigationList;
    /**
     * Gets content of aggregation {@link #getItem item}.
     *
     * Defines the content inside the flexible part.
     */
    getItem(): NavigationList;
    /**
     * ID of the element which is the current target of the association {@link #getSelectedItem selectedItem},
     * or `null`.
     *
     * @since 1.52.0
     */
    getSelectedItem(): ID | null;
    /**
     * Gets current value of property {@link #getSelectedKey selectedKey}.
     *
     * Specifies the currently selected key.
     *
     * @since 1.62.0
     *
     * @returns Value of property `selectedKey`
     */
    getSelectedKey(): string;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Specifies the width of the control.
     *
     *  Depending on the theme, there is a minimum width set (16rem for Horizon theme). This property
     * can be used to set a bigger width.
     *
     * @since 1.120
     *
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
    /**
     * Sets a new value for property {@link #getAriaLabel ariaLabel}.
     *
     * Specifies an optional `aria-label` that can be used by the screen readers.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @since 1.98
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAriaLabel(
      /**
       * New value for property `ariaLabel`
       */
      sAriaLabel?: string
    ): this;
    /**
     * Sets if the control is in expanded or collapsed mode.
     *
     *
     * @returns this SideNavigation reference for chaining.
     */
    setExpanded(
      /**
       * Indication if the SideNavigation is expanded.
       */
      bExpanded: boolean
    ): this;
    /**
     * Sets the aggregated {@link #getFixedItem fixedItem}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFixedItem(
      /**
       * The fixedItem to set
       */
      oFixedItem: NavigationList
    ): this;
    /**
     * Sets the aggregated {@link #getFooter footer}.
     *
     * @deprecated (since 1.120) - Use the aggregation `fixedItem` instead.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFooter(
      /**
       * The footer to set
       */
      oFooter: NavigationList
    ): this;
    /**
     * Sets the aggregated {@link #getItem item}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setItem(
      /**
       * The item to set
       */
      oItem: NavigationList
    ): this;
    /**
     * Sets the association for `selectedItem`.
     *
     *
     * @returns The `selectedItem` association
     */
    setSelectedItem(
      /**
       * The control to be set as selected
       */
      vSelectedItem: ID | NavigationListItem
    ): SideNavigation | null;
    /**
     * Sets the selected item based on a key.
     *
     *
     * @returns this pointer for chaining
     */
    setSelectedKey(
      /**
       * The key of the item to be selected
       */
      sSelectedKey: string
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Specifies the width of the control.
     *
     *  Depending on the theme, there is a minimum width set (16rem for Horizon theme). This property
     * can be used to set a bigger width.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @since 1.120
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth: CSSSize
    ): this;
    /**
     * Unbinds aggregation {@link #getItem item} from model data.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    unbindItem(): this;
  }
  /**
   * Describes the settings that can be provided to the SideNavigation constructor.
   */
  export interface $SideNavigationSettings extends $ControlSettings {
    /**
     * Specifies the width of the control.
     *
     *  Depending on the theme, there is a minimum width set (16rem for Horizon theme). This property
     * can be used to set a bigger width.
     *
     * @since 1.120
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies if the control is expanded.
     */
    expanded?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies the currently selected key.
     *
     * @since 1.62.0
     */
    selectedKey?: string | PropertyBindingInfo;

    /**
     * Specifies an optional `aria-label` that can be used by the screen readers.
     *
     * @since 1.98
     */
    ariaLabel?: string | PropertyBindingInfo;

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
     *
     * @deprecated (since 1.120) - Use the aggregation `fixedItem` instead.
     */
    footer?: NavigationList;

    /**
     * The selected `NavigationListItem`.
     *
     * @since 1.52.0
     */
    selectedItem?: NavigationListItem | string;

    /**
     * Fired when an item is selected.
     */
    itemSelect?: (oEvent: SideNavigation$ItemSelectEvent) => void;
  }

  /**
   * Parameters of the SideNavigation#itemSelect event.
   */
  export interface SideNavigation$ItemSelectEventParameters {
    /**
     * The selected item.
     */
    item?: Item;
  }

  /**
   * Event object of the SideNavigation#itemSelect event.
   */
  export type SideNavigation$ItemSelectEvent = Event<
    SideNavigation$ItemSelectEventParameters,
    SideNavigation
  >;
}

declare module "sap/tnt/ToolHeader" {
  import {
    default as OverflowToolbar,
    $OverflowToolbarSettings,
  } from "sap/m/OverflowToolbar";

  import { IToolHeader } from "sap/tnt/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * The ToolHeader control is a horizontal container that is most commonly used to display buttons, texts,
   * and other various input controls. Overview: The ToolHeader control is based on {@link sap.m.OverflowToolbar}.
   * It contains clearly structured menus of commands that are available across the various apps within the
   * same tool layout. Usage:
   * 	 - This control is specialized for administrative applications. For other types of applications use:
   *     {@link sap.m.Shell}
   * 	 - If an app implements side navigation in addition to the tool header menu, the menu icon must be the
   *     first item on the left-hand side of the tool header.
   * 	 - The app menu and the side navigation must not have any dependencies and must work independently.
   *      Horizon theme specifics: Only the following controls are supported: sap.m.Button, sap.m.Image,
   *     sap.m.Title, sap.m.Text, sap.m.SearchField, sap.m.Avatar. Fiori 3 theme specifics: In Fiori 3 Default
   *     theme the ToolHeader is with dark design unlike most of the other controls. This defines the usage of
   *     limited controls inside it, which will result in good design combination.
   *  The ToolHeader stylizes the contained controls with the Shell color parameters, to match the dark design
   * requirement. However, that's not a dark theme.
   *
   *  Only the following controls are supported:    Control name Supported
   * Not supported   sap.m.Text Single line text, text truncation Wrapping
   *   sap.m.Title Single line text, text truncation. Consider using title headings
   * of H4, H5, H6. Wrapping   sap.m.Label Single line text, text truncation
   * Wrapping   sap.m.ObjectStatus Labels, semantic colors Indication
   * colors   sap.ui.core.Icon sap.ui.core.IconColor enumeration for both icons
   * and backgrounds. Interaction state colors   sap.m.Button Buttons
   * in their Back, Default, Transparent and Up types. All four types are over-styled to look as transparent
   * buttons. -   sap.m.MenuButton Emphasized button type. Should be used
   * for triggering Mega menu. If there is no Mega menu, use Title (H6) instead.
   *  Default (over-styled as Transparent) and Transparent types are used for standard menu representation.
   * -   sap.m.Select Default and IconOnly types. IconOnly looks like a button
   * while Default looks is like an input. Semantic states   sap.m.SearchField
   * Support for the regular state of the control. -   sap.m.IconTabHeader
   * All background design variations (all are transparent). Text tab filters or text and count tab filters
   * in Inline mode only. Semantic colors, icons and separators.   sap.f.Avatar/sap.m.Avatar
   * Support for default (Accent 6) color. Image avatar. -   sap.m.Image
   * Primarily used for displaying the company logo. Interaction states
   *
   * @since 1.34
   */
  export default class ToolHeader
    extends OverflowToolbar
    implements IToolHeader
  {
    __implements__sap_tnt_IToolHeader: boolean;
    /**
     * Constructor for a new ToolHeader.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.m.OverflowToolbar#constructor sap.m.OverflowToolbar }
     * can be used.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ToolHeaderSettings
    );
    /**
     * Constructor for a new ToolHeader.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.m.OverflowToolbar#constructor sap.m.OverflowToolbar }
     * can be used.
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
     *
     *
     * @returns Created class / constructor function
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
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }
  /**
   * Describes the settings that can be provided to the ToolHeader constructor.
   */
  export interface $ToolHeaderSettings extends $OverflowToolbarSettings {}
}

declare module "sap/tnt/ToolHeaderUtilitySeparator" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * The ToolHeaderUtilitySeparator control is used in the sap.tnt.ToolHeader control to specify where the
   * overflow button is placed.
   *
   * @since 1.16
   */
  export default class ToolHeaderUtilitySeparator extends Control {
    /**
     * Constructor for a new ToolHeaderUtilitySeparator.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control }
     * can be used.
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
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control }
     * can be used.
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
     *
     *
     * @returns Created class / constructor function
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
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }
  /**
   * Describes the settings that can be provided to the ToolHeaderUtilitySeparator constructor.
   */
  export interface $ToolHeaderUtilitySeparatorSettings
    extends $ControlSettings {}
}

declare module "sap/tnt/ToolPage" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { PageBackgroundDesign } from "sap/m/library";

  import { IToolHeader } from "sap/tnt/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import SideNavigation from "sap/tnt/SideNavigation";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * The ToolPage is a layout control, used to create a basic tools app that has a header, side navigation
   * and contents area. Overview: The control has three main areas - a header on top, navigation to the side
   * and a content area that can hold any control. The header and side navigation use custom controls - {@link sap.tnt.ToolHeader }
   * and {@link sap.tnt.SideNavigation}. Usage: The main usage of the sap.tnt controls is for scenarios in
   * the tooling or administration space.
   *
   * @since 1.34
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
     * Creates a new subclass of class sap.tnt.ToolPage with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
     *
     *
     * @returns Created class / constructor function
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
     * Returns a metadata object for class sap.tnt.ToolPage.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some mainContent to the aggregation {@link #getMainContents mainContents}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addMainContent(
      /**
       * The mainContent to add; if empty, nothing is inserted
       */
      oMainContent: Control
    ): this;
    /**
     * Destroys the header in the aggregation {@link #getHeader header}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyHeader(): this;
    /**
     * Destroys all the mainContents in the aggregation {@link #getMainContents mainContents}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyMainContents(): this;
    /**
     * Destroys the sideContent in the aggregation {@link #getSideContent sideContent}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySideContent(): this;
    /**
     * Destroys the subHeader in the aggregation {@link #getSubHeader subHeader}.
     *
     * @since 1.93
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySubHeader(): this;
    /**
     * Gets current value of property {@link #getContentBackgroundDesign contentBackgroundDesign}.
     *
     * Specifies the content background design.
     *
     * Default value is `Standard`.
     *
     * @since 1.115
     *
     * @returns Value of property `contentBackgroundDesign`
     */
    getContentBackgroundDesign():
      | PageBackgroundDesign
      | keyof typeof PageBackgroundDesign;
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
     *
     *
     * @returns Value of property `sideExpanded`
     */
    getSideExpanded(): boolean;
    /**
     * Gets content of aggregation {@link #getSubHeader subHeader}.
     *
     * The control to appear in the subheader area.
     *
     * @since 1.93
     */
    getSubHeader(): IToolHeader;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getMainContents mainContents}.
     * and returns its index if found or -1 otherwise.
     *
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfMainContent(
      /**
       * The mainContent whose index is looked for
       */
      oMainContent: Control
    ): int;
    /**
     * Inserts a mainContent into the aggregation {@link #getMainContents mainContents}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
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
     *
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllMainContents(): Control[];
    /**
     * Removes a mainContent from the aggregation {@link #getMainContents mainContents}.
     *
     *
     * @returns The removed mainContent or `null`
     */
    removeMainContent(
      /**
       * The mainContent to remove or its index or id
       */
      vMainContent: int | string | Control
    ): Control | null;
    /**
     * Sets a new value for property {@link #getContentBackgroundDesign contentBackgroundDesign}.
     *
     * Specifies the content background design.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Standard`.
     *
     * @since 1.115
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setContentBackgroundDesign(
      /**
       * New value for property `contentBackgroundDesign`
       */
      sContentBackgroundDesign?:
        | PageBackgroundDesign
        | keyof typeof PageBackgroundDesign
    ): this;
    /**
     * Sets the aggregated {@link #getHeader header}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeader(
      /**
       * The header to set
       */
      oHeader: IToolHeader
    ): this;
    /**
     * Sets the aggregated {@link #getSideContent sideContent}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSideContent(
      /**
       * The sideContent to set
       */
      oSideContent: SideNavigation
    ): this;
    /**
     * Sets the expand/collapse state of the SideContent.
     *
     *
     * @returns Pointer to the control instance for chaining
     */
    setSideExpanded(
      /**
       * defines whether the SideNavigation is expanded.
       */
      bSideExpanded: boolean
    ): this;
    /**
     * Sets the aggregated {@link #getSubHeader subHeader}.
     *
     * @since 1.93
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSubHeader(
      /**
       * The subHeader to set
       */
      oSubHeader: IToolHeader
    ): this;
    /**
     * Toggles the expand/collapse state of the SideContent.
     *
     *
     * @returns Pointer to the control instance for chaining.
     */
    toggleSideContentMode(): this;
  }
  /**
   * Describes the settings that can be provided to the ToolPage constructor.
   */
  export interface $ToolPageSettings extends $ControlSettings {
    /**
     * Indicates if the side menu is expanded. Overrides the `expanded` property of the `sideContent` aggregation.
     */
    sideExpanded?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies the content background design.
     *
     * @since 1.115
     */
    contentBackgroundDesign?:
      | (PageBackgroundDesign | keyof typeof PageBackgroundDesign)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * The control to appear in the header area.
     */
    header?: IToolHeader;

    /**
     * The control to appear in the subheader area.
     *
     * @since 1.93
     */
    subHeader?: IToolHeader;

    /**
     * The side menu of the layout.
     */
    sideContent?: SideNavigation;

    /**
     * The content section.
     */
    mainContents?: Control[] | Control | AggregationBindingInfo | `{${string}}`;
  }
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/tnt/IllustratedMessageType": undefined;

    "sap/tnt/InfoLabel": undefined;

    "sap/tnt/library": undefined;

    "sap/tnt/NavigationList": undefined;

    "sap/tnt/NavigationListGroup": undefined;

    "sap/tnt/NavigationListItem": undefined;

    "sap/tnt/NavigationListItemBase": undefined;

    "sap/tnt/SideNavigation": undefined;

    "sap/tnt/ToolHeader": undefined;

    "sap/tnt/ToolHeaderUtilitySeparator": undefined;

    "sap/tnt/ToolPage": undefined;
  }
}
