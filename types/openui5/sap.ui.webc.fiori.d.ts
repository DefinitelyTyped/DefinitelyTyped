// For Library Version: 1.92.0

declare module "sap/ui/webc/fiori/library" {
  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Different types of Bar.
   */
  export enum BarDesign {
    /**
     * Floating Footer type - there is visible border on all sides
     */
    FloatingFooter = "FloatingFooter",
    /**
     * Footer type
     */
    Footer = "Footer",
    /**
     * Default type
     */
    Header = "Header",
    /**
     * Subheader type
     */
    Subheader = "Subheader",
  }
  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * undefined
   */
  export enum FCLLayout {
    /**
     * Desktop: -/-/100 only the End column is displayed Tablet: -/-/100 only the End column is displayed Phone:
     * -/-/100 only the End column is displayed
     *
     * Use to display a detail-detail page only, when the user should focus entirely on it.
     */
    EndColumnFullScreen = "EndColumnFullScreen",
    /**
     * Desktop: -/100/- only the Mid column is displayed Tablet: -/100/- only the Mid column is displayed Phone:
     * -/100/- only the Mid column is displayed
     *
     * Use to display a detail page only, when the user should focus entirely on it.
     */
    MidColumnFullScreen = "MidColumnFullScreen",
    /**
     * The layout will display 1 column.
     */
    OneColumn = "OneColumn",
    /**
     * Desktop: 25/25/50 Start, Mid and End (expanded) columns are displayed Tablet: 0/33/67 Mid and End (expanded)
     * columns are displayed, Start is accessible by layout arrows Phone: -/-/100 (only the End column is displayed)
     *
     * Use to display all three pages (master, detail, detail-detail) when the user should focus on the detail-detail.
     */
    ThreeColumnsEndExpanded = "ThreeColumnsEndExpanded",
    /**
     * Desktop: 25/50/25 Start, Mid (expanded) and End columns are displayed Tablet: 0/67/33 Mid (expanded)
     * and End columns are displayed, Start is accessible by a layout arrow Phone: -/-/100 only the End column
     * is displayed
     *
     * Use to display all three pages (master, detail, detail-detail) when the user should focus on the detail.
     */
    ThreeColumnsMidExpanded = "ThreeColumnsMidExpanded",
    /**
     * Desktop: 33/67/0 Start and Mid (expanded) columns are displayed, End is accessible by a layout arrow
     * Tablet: 33/67/0 Start and Mid (expanded) columns are displayed, End is accessible by a layout arrow Phone:
     * -/-/100 only the End column is displayed
     *
     * Use to display the master and detail pages when the user should focus on the detail. The detail-detail
     * is still loaded and easily accessible with a layout arrow.
     */
    ThreeColumnsMidExpandedEndHidden = "ThreeColumnsMidExpandedEndHidden",
    /**
     * Desktop: 67/33/0 Start (expanded) and Mid columns are displayed, End is accessible by layout arrows Tablet:
     * 67/33/0 Start (expanded) and Mid columns are displayed, End is accessible by layout arrows Phone: -/-/100
     * only the End column is displayed
     *
     * Use to display the master and detail pages when the user should focus on the master. The detail-detail
     * is still loaded and easily accessible with layout arrows.
     */
    ThreeColumnsStartExpandedEndHidden = "ThreeColumnsStartExpandedEndHidden",
    /**
     * Desktop: 33/67/- Start and Mid (expanded) columns are displayed Tablet: 33/67/- Start and Mid (expanded)
     * columns are displayed Phone: -/100/- only the Mid column is displayed
     *
     * Use to display both a master and a detail page when the user should focus on the detail page.
     */
    TwoColumnsMidExpanded = "TwoColumnsMidExpanded",
    /**
     * Desktop: 67/33/- Start (expanded) and Mid columns are displayed Tablet: 67/33/- Start (expanded) and
     * Mid columns are displayed Phone: -/100/- only the Mid column is displayed
     *
     * Use to display both a master and a detail page when the user should focus on the master page.
     */
    TwoColumnsStartExpanded = "TwoColumnsStartExpanded",
  }
  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Interface for components that may be slotted as an action inside `ui5-li-notification` and `ui5-li-notification-group`
   */
  export interface INotificationAction {
    __implements__sap_ui_webc_fiori_INotificationAction: boolean;
  }

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Interface for components that may be slotted inside a notification list
   */
  export interface INotificationListItem {
    __implements__sap_ui_webc_fiori_INotificationListItem: boolean;
  }

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Interface for components that may be slotted inside `ui5-product-switch` as items
   */
  export interface IProductSwitchItem {
    __implements__sap_ui_webc_fiori_IProductSwitchItem: boolean;
  }

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Interface for components that may be slotted inside `ui5-shellbar` as items
   */
  export interface IShellBarItem {
    __implements__sap_ui_webc_fiori_IShellBarItem: boolean;
  }

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Interface for components that may be slotted inside `ui5-side-navigation` as items
   */
  export interface ISideNavigationItem {
    __implements__sap_ui_webc_fiori_ISideNavigationItem: boolean;
  }

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Interface for components that may be slotted inside `ui5-side-navigation-item` as sub-items
   */
  export interface ISideNavigationSubItem {
    __implements__sap_ui_webc_fiori_ISideNavigationSubItem: boolean;
  }

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Interface for components that may be slotted inside `ui5-timeline` as items
   */
  export interface ITimelineItem {
    __implements__sap_ui_webc_fiori_ITimelineItem: boolean;
  }

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Interface for components that may be slotted inside `ui5-upload-collection` as items
   */
  export interface IUploadCollectionItem {
    __implements__sap_ui_webc_fiori_IUploadCollectionItem: boolean;
  }

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Interface for components that may be slotted inside `ui5-wizard` as wizard steps
   */
  export interface IWizardStep {
    __implements__sap_ui_webc_fiori_IWizardStep: boolean;
  }

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * undefined
   */
  export enum PageBackgroundDesign {
    /**
     * Page background color when a List is set as the Page content.
     */
    List = "List",
    /**
     * A solid background color dependent on the theme.
     */
    Solid = "Solid",
    /**
     * Transparent background for the page.
     */
    Transparent = "Transparent",
  }
  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * undefined
   */
  export enum UploadState {
    /**
     * The file has been uploaded successfully.
     */
    Complete = "Complete",
    /**
     * The file cannot be uploaded due to an error.
     */
    Error = "Error",
    /**
     * The file is awaiting an explicit command to start being uploaded.
     */
    Ready = "Ready",
    /**
     * The file is currently being uploaded.
     */
    Uploading = "Uploading",
  }
}

declare module "sap/ui/webc/fiori/Bar" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import Control from "sap/ui/core/Control";

  import { BarDesign } from "sap/ui/webc/fiori/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import { CSSSize } from "sap/ui/core/library";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview: The Bar is a container which is primarily used to hold titles, buttons and input elements and
   * its design and functionality is the basis for page headers and footers. The component consists of three
   * areas to hold its content - startContent, middleContent and endContent. It has the capability to center
   * content, such as a title, while having other components on the left and right side.
   *
   * Usage: With the use of the design property, you can set the style of the Bar to appear designed like
   * a Header, Subheader, Footer and FloatingFooter.
   *  **Note:** Do not place a Bar inside another Bar or inside any bar-like component. Doing so may cause
   * unpredictable behavior.
   *
   * Responsive Behavior: The middleContent will be centered in the available space between the startContent
   * and the endContent areas, therefore it might not always be centered in the entire bar.
   */
  export default class Bar extends WebComponent {
    /**
     * Constructor for a new `Bar`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $BarSettings
    );
    /**
     * Constructor for a new `Bar`.
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
      mSettings?: $BarSettings
    );

    /**
     * Adds some endContent to the aggregation {@link #getEndContent endContent}.
     */
    addEndContent(
      /**
       * The endContent to add; if empty, nothing is inserted
       */
      oEndContent: Control
    ): this;
    /**
     * Adds some middleContent to the aggregation {@link #getMiddleContent middleContent}.
     */
    addMiddleContent(
      /**
       * The middleContent to add; if empty, nothing is inserted
       */
      oMiddleContent: Control
    ): this;
    /**
     * Adds some startContent to the aggregation {@link #getStartContent startContent}.
     */
    addStartContent(
      /**
       * The startContent to add; if empty, nothing is inserted
       */
      oStartContent: Control
    ): this;
    /**
     * Destroys all the endContent in the aggregation {@link #getEndContent endContent}.
     */
    destroyEndContent(): this;
    /**
     * Destroys all the middleContent in the aggregation {@link #getMiddleContent middleContent}.
     */
    destroyMiddleContent(): this;
    /**
     * Destroys all the startContent in the aggregation {@link #getStartContent startContent}.
     */
    destroyStartContent(): this;
    /**
     * Creates a new subclass of class sap.ui.webc.fiori.Bar with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, Bar>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getDesign design}.
     *
     * Defines the `sap.ui.webc.fiori.Bar` design.
     *
     *
     *
     *  **Note:** Available options are:
     * 	 - `Header`
     * 	 - `Subheader`
     * 	 - `Footer`
     * 	 - `FloatingFooter`
     *
     * Default value is `Header`.
     */
    getDesign(): BarDesign | keyof typeof BarDesign;
    /**
     * Gets content of aggregation {@link #getEndContent endContent}.
     *
     * Defines the content at the end of the bar
     */
    getEndContent(): Control[];
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.Bar.
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Gets content of aggregation {@link #getMiddleContent middleContent}.
     *
     * Defines the content in the middle of the bar
     */
    getMiddleContent(): Control[];
    /**
     * Gets content of aggregation {@link #getStartContent startContent}.
     *
     * Defines the content at the start of the bar
     */
    getStartContent(): Control[];
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Defines the width of the control
     */
    getWidth(): CSSSize;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getEndContent endContent}. and
     * returns its index if found or -1 otherwise.
     */
    indexOfEndContent(
      /**
       * The endContent whose index is looked for
       */
      oEndContent: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getMiddleContent middleContent}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfMiddleContent(
      /**
       * The middleContent whose index is looked for
       */
      oMiddleContent: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getStartContent startContent}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfStartContent(
      /**
       * The startContent whose index is looked for
       */
      oStartContent: Control
    ): int;
    /**
     * Inserts a endContent into the aggregation {@link #getEndContent endContent}.
     */
    insertEndContent(
      /**
       * The endContent to insert; if empty, nothing is inserted
       */
      oEndContent: Control,
      /**
       * The `0`-based index the endContent should be inserted at; for a negative value of `iIndex`, the endContent
       * is inserted at position 0; for a value greater than the current size of the aggregation, the endContent
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a middleContent into the aggregation {@link #getMiddleContent middleContent}.
     */
    insertMiddleContent(
      /**
       * The middleContent to insert; if empty, nothing is inserted
       */
      oMiddleContent: Control,
      /**
       * The `0`-based index the middleContent should be inserted at; for a negative value of `iIndex`, the middleContent
       * is inserted at position 0; for a value greater than the current size of the aggregation, the middleContent
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a startContent into the aggregation {@link #getStartContent startContent}.
     */
    insertStartContent(
      /**
       * The startContent to insert; if empty, nothing is inserted
       */
      oStartContent: Control,
      /**
       * The `0`-based index the startContent should be inserted at; for a negative value of `iIndex`, the startContent
       * is inserted at position 0; for a value greater than the current size of the aggregation, the startContent
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getEndContent endContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllEndContent(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getMiddleContent middleContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllMiddleContent(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getStartContent startContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllStartContent(): Control[];
    /**
     * Removes a endContent from the aggregation {@link #getEndContent endContent}.
     */
    removeEndContent(
      /**
       * The endContent to remove or its index or id
       */
      vEndContent: int | string | Control
    ): Control;
    /**
     * Removes a middleContent from the aggregation {@link #getMiddleContent middleContent}.
     */
    removeMiddleContent(
      /**
       * The middleContent to remove or its index or id
       */
      vMiddleContent: int | string | Control
    ): Control;
    /**
     * Removes a startContent from the aggregation {@link #getStartContent startContent}.
     */
    removeStartContent(
      /**
       * The startContent to remove or its index or id
       */
      vStartContent: int | string | Control
    ): Control;
    /**
     * Sets a new value for property {@link #getDesign design}.
     *
     * Defines the `sap.ui.webc.fiori.Bar` design.
     *
     *
     *
     *  **Note:** Available options are:
     * 	 - `Header`
     * 	 - `Subheader`
     * 	 - `Footer`
     * 	 - `FloatingFooter`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Header`.
     */
    setDesign(
      /**
       * New value for property `design`
       */
      sDesign?: BarDesign | keyof typeof BarDesign
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Defines the width of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth?: CSSSize
    ): this;
  }

  export interface $BarSettings extends $WebComponentSettings {
    /**
     * Defines the `sap.ui.webc.fiori.Bar` design.
     *
     *
     *
     *  **Note:** Available options are:
     * 	 - `Header`
     * 	 - `Subheader`
     * 	 - `Footer`
     * 	 - `FloatingFooter`
     */
    design?: (BarDesign | keyof typeof BarDesign) | PropertyBindingInfo;

    /**
     * Defines the width of the control
     */
    width?: CSSSize | PropertyBindingInfo;

    /**
     * Defines the content at the end of the bar
     */
    endContent?: Control[] | Control | AggregationBindingInfo;

    /**
     * Defines the content in the middle of the bar
     */
    middleContent?: Control[] | Control | AggregationBindingInfo;

    /**
     * Defines the content at the start of the bar
     */
    startContent?: Control[] | Control | AggregationBindingInfo;
  }
}

declare module "sap/ui/webc/fiori/FlexibleColumnLayout" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import Event from "sap/ui/base/Event";

  import Control from "sap/ui/core/Control";

  import { CSSSize } from "sap/ui/core/library";

  import { FCLLayout } from "sap/ui/webc/fiori/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview:
   *
   * The `FlexibleColumnLayout` implements the master-detail-detail paradigm by displaying up to three pages
   * in separate columns. There are several possible layouts that can be changed either with the component
   * API, or by pressing the arrows, displayed between the columns.
   *
   * Usage:
   *
   * Use this component for applications that need to display several logical levels of related information
   * side by side (e.g. list of items, item, sub-item, etc.). The Component is flexible in a sense that the
   * application can focus the user's attention on one particular column.
   *
   * Responsive Behavior:
   *
   * The `FlexibleColumnLayout` automatically displays the maximum possible number of columns based on `layout`
   * property and the window size. The component would display 1 column for window size smaller than 599px,
   * up to two columns between 599px and 1023px, and 3 columns for sizes bigger than 1023px.
   *
   *
   *
   *  Keyboard Handling:
   *
   *
   * 	 - [SPACE, ENTER, RETURN] - If focus is on the layout toggle button (arrow button), once activated,
   * 			it triggers the associated action (such as expand/collapse the column).
   */
  export default class FlexibleColumnLayout extends WebComponent {
    /**
     * Constructor for a new `FlexibleColumnLayout`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $FlexibleColumnLayoutSettings
    );
    /**
     * Constructor for a new `FlexibleColumnLayout`.
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
      mSettings?: $FlexibleColumnLayoutSettings
    );

    /**
     * Attaches event handler `fnFunction` to the {@link #event:layoutChange layoutChange} event of this `sap.ui.webc.fiori.FlexibleColumnLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.FlexibleColumnLayout` itself.
     *
     * Fired when the layout changes via user interaction by clicking the arrows or by changing the component
     * size due to resizing.
     */
    attachLayoutChange(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.FlexibleColumnLayout`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:layoutChange layoutChange} event of this `sap.ui.webc.fiori.FlexibleColumnLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.FlexibleColumnLayout` itself.
     *
     * Fired when the layout changes via user interaction by clicking the arrows or by changing the component
     * size due to resizing.
     */
    attachLayoutChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.FlexibleColumnLayout`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys the endColumn in the aggregation {@link #getEndColumn endColumn}.
     */
    destroyEndColumn(): this;
    /**
     * Destroys the midColumn in the aggregation {@link #getMidColumn midColumn}.
     */
    destroyMidColumn(): this;
    /**
     * Destroys the startColumn in the aggregation {@link #getStartColumn startColumn}.
     */
    destroyStartColumn(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:layoutChange layoutChange} event of this `sap.ui.webc.fiori.FlexibleColumnLayout`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachLayoutChange(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.webc.fiori.FlexibleColumnLayout with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, FlexibleColumnLayout>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:layoutChange layoutChange} to attached listeners.
     */
    fireLayoutChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The current layout
         */
        layout?: FCLLayout;
        /**
         * The effective column layout, f.e [67%, 33%, 0]
         */
        columnLayout?: any[];
        /**
         * Indicates if the start column is currently visible
         */
        startColumnVisible?: boolean;
        /**
         * Indicates if the middle column is currently visible
         */
        midColumnVisible?: boolean;
        /**
         * Indicates if the end column is currently visible
         */
        endColumnVisible?: boolean;
        /**
         * Indicates if the layout is changed via the arrows
         */
        arrowsUsed?: boolean;
        /**
         * Indicates if the layout is changed via resizing
         */
        resize?: boolean;
      }
    ): this;
    /**
     * Gets current value of property {@link #getAccessibilityTexts accessibilityTexts}.
     *
     * On object of strings that defines several additional accessibility texts for even further customization.
     *
     * It supports the following fields: - `startColumnAccessibleName`: the accessibility name for the `startColumn`
     * region - `midColumnAccessibleName`: the accessibility name for the `midColumn` region - `endColumnAccessibleName`:
     * the accessibility name for the `endColumn` region - `startArrowLeftText`: the text that the first arrow
     * (between the `begin` and `mid` columns) will have when pointing to the left - `startArrowRightText`:
     * the text that the first arrow (between the `begin` and `mid` columns) will have when pointing to the
     * right - `endArrowLeftText`: the text that the second arrow (between the `mid` and `end` columns) will
     * have when pointing to the left - `endArrowRightText`: the text that the second arrow (between the `mid`
     * and `end` columns) will have when pointing to the right
     */
    getAccessibilityTexts(): object;
    /**
     * Returns the current column layout, based on both the `layout` property and the screen size.
     *
     *  **For example:** ["67%", "33%", 0], ["100%", 0, 0], ["25%", "50%", "25%"], etc, where the numbers represents
     * the width of the start, middle and end columns.
     */
    getColumnLayout(): void;
    /**
     * Gets content of aggregation {@link #getEndColumn endColumn}.
     *
     * Defines the content in the end column.
     */
    getEndColumn(): Control;
    /**
     * Returns if the `end` column is visible.
     */
    getEndColumnVisible(): void;
    /**
     * Gets current value of property {@link #getHeight height}.
     *
     * Defines the height of the control
     */
    getHeight(): CSSSize;
    /**
     * Gets current value of property {@link #getHideArrows hideArrows}.
     *
     * Defines the visibility of the arrows, used for expanding and shrinking the columns.
     *
     * Default value is `false`.
     */
    getHideArrows(): boolean;
    /**
     * Gets current value of property {@link #getLayout layout}.
     *
     * Defines the columns layout and their proportion.
     *
     *  **Note:** The layout also depends on the screen size - one column for screens smaller than 599px, two
     * columns between 599px and 1023px and three columns for sizes bigger than 1023px.
     *
     *  Available options are:
     * 	 - `OneColumn`
     * 	 - `TwoColumnsStartExpanded`
     * 	 - `TwoColumnsMidExpanded`
     * 	 - `ThreeColumnsMidExpanded`
     * 	 - `ThreeColumnsEndExpanded`
     * 	 - `ThreeColumnsStartExpandedEndHidden`
     * 	 - `ThreeColumnsMidExpandedEndHidden`
     * 	 - `MidColumnFullScreen`
     * 	 - `EndColumnFullScreen`
     *
     *  **For example:** layout=`TwoColumnsStartExpanded` means the layout will display up to two columns in
     * 67%/33% proportion.
     *
     * Default value is `OneColumn`.
     */
    getLayout(): FCLLayout | keyof typeof FCLLayout;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.FlexibleColumnLayout.
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Gets content of aggregation {@link #getMidColumn midColumn}.
     *
     * Defines the content in the middle column.
     */
    getMidColumn(): Control;
    /**
     * Returns if the `middle` column is visible.
     */
    getMidColumnVisible(): void;
    /**
     * Gets content of aggregation {@link #getStartColumn startColumn}.
     *
     * Defines the content in the start column.
     */
    getStartColumn(): Control;
    /**
     * Returns if the `start` column is visible.
     */
    getStartColumnVisible(): void;
    /**
     * Returns the number of currently visible columns.
     */
    getVisibleColumns(): void;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Defines the width of the control
     */
    getWidth(): CSSSize;
    /**
     * Sets a new value for property {@link #getAccessibilityTexts accessibilityTexts}.
     *
     * On object of strings that defines several additional accessibility texts for even further customization.
     *
     * It supports the following fields: - `startColumnAccessibleName`: the accessibility name for the `startColumn`
     * region - `midColumnAccessibleName`: the accessibility name for the `midColumn` region - `endColumnAccessibleName`:
     * the accessibility name for the `endColumn` region - `startArrowLeftText`: the text that the first arrow
     * (between the `begin` and `mid` columns) will have when pointing to the left - `startArrowRightText`:
     * the text that the first arrow (between the `begin` and `mid` columns) will have when pointing to the
     * right - `endArrowLeftText`: the text that the second arrow (between the `mid` and `end` columns) will
     * have when pointing to the left - `endArrowRightText`: the text that the second arrow (between the `mid`
     * and `end` columns) will have when pointing to the right
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setAccessibilityTexts(
      /**
       * New value for property `accessibilityTexts`
       */
      oAccessibilityTexts: object
    ): this;
    /**
     * Sets the aggregated {@link #getEndColumn endColumn}.
     */
    setEndColumn(
      /**
       * The endColumn to set
       */
      oEndColumn: Control
    ): this;
    /**
     * Sets a new value for property {@link #getHeight height}.
     *
     * Defines the height of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setHeight(
      /**
       * New value for property `height`
       */
      sHeight?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getHideArrows hideArrows}.
     *
     * Defines the visibility of the arrows, used for expanding and shrinking the columns.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setHideArrows(
      /**
       * New value for property `hideArrows`
       */
      bHideArrows?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getLayout layout}.
     *
     * Defines the columns layout and their proportion.
     *
     *  **Note:** The layout also depends on the screen size - one column for screens smaller than 599px, two
     * columns between 599px and 1023px and three columns for sizes bigger than 1023px.
     *
     *  Available options are:
     * 	 - `OneColumn`
     * 	 - `TwoColumnsStartExpanded`
     * 	 - `TwoColumnsMidExpanded`
     * 	 - `ThreeColumnsMidExpanded`
     * 	 - `ThreeColumnsEndExpanded`
     * 	 - `ThreeColumnsStartExpandedEndHidden`
     * 	 - `ThreeColumnsMidExpandedEndHidden`
     * 	 - `MidColumnFullScreen`
     * 	 - `EndColumnFullScreen`
     *
     *  **For example:** layout=`TwoColumnsStartExpanded` means the layout will display up to two columns in
     * 67%/33% proportion.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `OneColumn`.
     */
    setLayout(
      /**
       * New value for property `layout`
       */
      sLayout?: FCLLayout | keyof typeof FCLLayout
    ): this;
    /**
     * Sets the aggregated {@link #getMidColumn midColumn}.
     */
    setMidColumn(
      /**
       * The midColumn to set
       */
      oMidColumn: Control
    ): this;
    /**
     * Sets the aggregated {@link #getStartColumn startColumn}.
     */
    setStartColumn(
      /**
       * The startColumn to set
       */
      oStartColumn: Control
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Defines the width of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth?: CSSSize
    ): this;
  }

  export interface $FlexibleColumnLayoutSettings extends $WebComponentSettings {
    /**
     * On object of strings that defines several additional accessibility texts for even further customization.
     *
     * It supports the following fields: - `startColumnAccessibleName`: the accessibility name for the `startColumn`
     * region - `midColumnAccessibleName`: the accessibility name for the `midColumn` region - `endColumnAccessibleName`:
     * the accessibility name for the `endColumn` region - `startArrowLeftText`: the text that the first arrow
     * (between the `begin` and `mid` columns) will have when pointing to the left - `startArrowRightText`:
     * the text that the first arrow (between the `begin` and `mid` columns) will have when pointing to the
     * right - `endArrowLeftText`: the text that the second arrow (between the `mid` and `end` columns) will
     * have when pointing to the left - `endArrowRightText`: the text that the second arrow (between the `mid`
     * and `end` columns) will have when pointing to the right
     */
    accessibilityTexts?: object | PropertyBindingInfo;

    /**
     * Defines the height of the control
     */
    height?: CSSSize | PropertyBindingInfo;

    /**
     * Defines the visibility of the arrows, used for expanding and shrinking the columns.
     */
    hideArrows?: boolean | PropertyBindingInfo;

    /**
     * Defines the columns layout and their proportion.
     *
     *  **Note:** The layout also depends on the screen size - one column for screens smaller than 599px, two
     * columns between 599px and 1023px and three columns for sizes bigger than 1023px.
     *
     *  Available options are:
     * 	 - `OneColumn`
     * 	 - `TwoColumnsStartExpanded`
     * 	 - `TwoColumnsMidExpanded`
     * 	 - `ThreeColumnsMidExpanded`
     * 	 - `ThreeColumnsEndExpanded`
     * 	 - `ThreeColumnsStartExpandedEndHidden`
     * 	 - `ThreeColumnsMidExpandedEndHidden`
     * 	 - `MidColumnFullScreen`
     * 	 - `EndColumnFullScreen`
     *
     *  **For example:** layout=`TwoColumnsStartExpanded` means the layout will display up to two columns in
     * 67%/33% proportion.
     */
    layout?: (FCLLayout | keyof typeof FCLLayout) | PropertyBindingInfo;

    /**
     * Defines the width of the control
     */
    width?: CSSSize | PropertyBindingInfo;

    /**
     * Defines the content in the end column.
     */
    endColumn?: Control;

    /**
     * Defines the content in the middle column.
     */
    midColumn?: Control;

    /**
     * Defines the content in the start column.
     */
    startColumn?: Control;

    /**
     * Fired when the layout changes via user interaction by clicking the arrows or by changing the component
     * size due to resizing.
     */
    layoutChange?: Function;
  }
}

declare module "sap/ui/webc/fiori/NotificationAction" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { INotificationAction } from "sap/ui/webc/fiori/library";

  import { ButtonDesign } from "sap/ui/webc/main/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * The `sap.ui.webc.fiori.NotificationAction` represents an abstract action, used in the `sap.ui.webc.fiori.NotificationListItem`
   * and the `sap.ui.webc.fiori.NotificationListGroupItem` items.
   */
  export default class NotificationAction
    extends WebComponent
    implements INotificationAction {
    __implements__sap_ui_webc_fiori_INotificationAction: boolean;
    /**
     * Constructor for a new `NotificationAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $NotificationActionSettings
    );
    /**
     * Constructor for a new `NotificationAction`.
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
      mSettings?: $NotificationActionSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.NotificationAction with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, NotificationAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getDesign design}.
     *
     * Defines the action design.
     *
     *
     *
     *  **Note:**
     * 	 - `Default`
     * 	 - `Emphasized`
     * 	 - `Positive`
     * 	 - `Negative`
     * 	 - `Transparent`
     *
     * Default value is `Transparent`.
     */
    getDesign(): ButtonDesign | keyof typeof ButtonDesign;
    /**
     * Gets current value of property {@link #getDisabled disabled}.
     *
     * Defines if the action is disabled.
     *
     *  **Note:** a disabled action can't be pressed or focused, and it is not in the tab chain.
     *
     * Default value is `false`.
     */
    getDisabled(): boolean;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Defines the `icon` source URI.
     *
     *  **Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the
     * Icon Explorer.
     *
     * Default value is `empty string`.
     */
    getIcon(): string;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.NotificationAction.
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Defines the text of the `sap.ui.webc.fiori.NotificationAction`.
     *
     * Default value is `empty string`.
     */
    getText(): string;
    /**
     * Sets a new value for property {@link #getDesign design}.
     *
     * Defines the action design.
     *
     *
     *
     *  **Note:**
     * 	 - `Default`
     * 	 - `Emphasized`
     * 	 - `Positive`
     * 	 - `Negative`
     * 	 - `Transparent`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Transparent`.
     */
    setDesign(
      /**
       * New value for property `design`
       */
      sDesign?: ButtonDesign | keyof typeof ButtonDesign
    ): this;
    /**
     * Sets a new value for property {@link #getDisabled disabled}.
     *
     * Defines if the action is disabled.
     *
     *  **Note:** a disabled action can't be pressed or focused, and it is not in the tab chain.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setDisabled(
      /**
       * New value for property `disabled`
       */
      bDisabled?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Defines the `icon` source URI.
     *
     *  **Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the
     * Icon Explorer.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setIcon(
      /**
       * New value for property `icon`
       */
      sIcon?: string
    ): this;
    /**
     * Sets a new value for property {@link #getText text}.
     *
     * Defines the text of the `sap.ui.webc.fiori.NotificationAction`.
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
  }

  export interface $NotificationActionSettings extends $WebComponentSettings {
    /**
     * Defines the action design.
     *
     *
     *
     *  **Note:**
     * 	 - `Default`
     * 	 - `Emphasized`
     * 	 - `Positive`
     * 	 - `Negative`
     * 	 - `Transparent`
     */
    design?: (ButtonDesign | keyof typeof ButtonDesign) | PropertyBindingInfo;

    /**
     * Defines if the action is disabled.
     *
     *  **Note:** a disabled action can't be pressed or focused, and it is not in the tab chain.
     */
    disabled?: boolean | PropertyBindingInfo;

    /**
     * Defines the `icon` source URI.
     *
     *  **Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the
     * Icon Explorer.
     */
    icon?: string | PropertyBindingInfo;

    /**
     * Defines the text of the `sap.ui.webc.fiori.NotificationAction`.
     */
    text?: string | PropertyBindingInfo;
  }
}

declare module "sap/ui/webc/fiori/NotificationListGroupItem" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { IListItem, Priority } from "sap/ui/webc/main/library";

  import {
    INotificationAction,
    INotificationListItem,
  } from "sap/ui/webc/fiori/library";

  import Event from "sap/ui/base/Event";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview: The `sap.ui.webc.fiori.NotificationListGroupItem` is a special type of list item, that unlike
   * others can group items within self, usually `sap.ui.webc.fiori.NotificationListItem` items.
   *
   *
   * The component consists of:
   * 	 - `Toggle` button to expand and collapse the group
   * 	 - `Priority` icon to display the priority of the group
   * 	 - `Heading` to entitle the group
   * 	 - Custom actions - with the use of `sap.ui.webc.fiori.NotificationAction`
   * 	 - Items of the group
   *
   * Usage: The component can be used in a standard `sap.ui.webc.main.List`.
   *
   * CSS Shadow Parts:
   *
   * CSS Shadow Parts
   * allow developers to style elements inside the Shadow DOM.
   *  The `sap.ui.webc.fiori.NotificationListGroupItem` exposes the following CSS Shadow Parts:
   * 	 - heading - Used to style the heading of the notification list group item
   */
  export default class NotificationListGroupItem
    extends WebComponent
    implements IListItem {
    __implements__sap_ui_webc_main_IListItem: boolean;
    /**
     * Constructor for a new `NotificationListGroupItem`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $NotificationListGroupItemSettings
    );
    /**
     * Constructor for a new `NotificationListGroupItem`.
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
      mSettings?: $NotificationListGroupItemSettings
    );

    /**
     * Adds some action to the aggregation {@link #getActions actions}.
     */
    addAction(
      /**
       * The action to add; if empty, nothing is inserted
       */
      oAction: INotificationAction
    ): this;
    /**
     * Adds some item to the aggregation {@link #getItems items}.
     */
    addItem(
      /**
       * The item to add; if empty, nothing is inserted
       */
      oItem: INotificationListItem
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.webc.fiori.NotificationListGroupItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.NotificationListGroupItem` itself.
     *
     * Fired when the `Close` button is pressed.
     */
    attachClose(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.NotificationListGroupItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.webc.fiori.NotificationListGroupItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.NotificationListGroupItem` itself.
     *
     * Fired when the `Close` button is pressed.
     */
    attachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.NotificationListGroupItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:toggle toggle} event of this `sap.ui.webc.fiori.NotificationListGroupItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.NotificationListGroupItem` itself.
     *
     * Fired when the `sap.ui.webc.fiori.NotificationListGroupItem` is expanded/collapsed by user interaction.
     */
    attachToggle(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.NotificationListGroupItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:toggle toggle} event of this `sap.ui.webc.fiori.NotificationListGroupItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.NotificationListGroupItem` itself.
     *
     * Fired when the `sap.ui.webc.fiori.NotificationListGroupItem` is expanded/collapsed by user interaction.
     */
    attachToggle(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.NotificationListGroupItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the actions in the aggregation {@link #getActions actions}.
     */
    destroyActions(): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     */
    destroyItems(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:close close} event of this `sap.ui.webc.fiori.NotificationListGroupItem`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachClose(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:toggle toggle} event of this `sap.ui.webc.fiori.NotificationListGroupItem`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachToggle(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.webc.fiori.NotificationListGroupItem with name `sClassName` and
     * enriches it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, NotificationListGroupItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:close close} to attached listeners.
     */
    fireClose(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:toggle toggle} to attached listeners.
     */
    fireToggle(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Gets content of aggregation {@link #getActions actions}.
     *
     * Defines the actions, displayed in the top-right area.
     *
     *  **Note:** use the `sap.ui.webc.fiori.NotificationAction` component.
     */
    getActions(): INotificationAction[];
    /**
     * Gets current value of property {@link #getBusy busy}.
     *
     * Defines if a busy indicator would be displayed over the item.
     *
     * Default value is `false`.
     */
    getBusy(): boolean;
    /**
     * Gets current value of property {@link #getCollapsed collapsed}.
     *
     * Defines if the group is collapsed or expanded.
     *
     * Default value is `false`.
     */
    getCollapsed(): boolean;
    /**
     * Gets current value of property {@link #getHeading heading}.
     *
     * Defines the `heading` of the item.
     *
     * Default value is `empty string`.
     */
    getHeading(): string;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * Defines the items of the `sap.ui.webc.fiori.NotificationListGroupItem`, usually `sap.ui.webc.fiori.NotificationListItem`
     * items.
     */
    getItems(): INotificationListItem[];
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.NotificationListGroupItem.
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Gets current value of property {@link #getPriority priority}.
     *
     * Defines the `priority` of the item. Available options are:
     * 	 - `None`
     * 	 - `Low`
     * 	 - `Medium`
     * 	 - `High`
     *
     * Default value is `None`.
     */
    getPriority(): Priority | keyof typeof Priority;
    /**
     * Gets current value of property {@link #getRead read}.
     *
     * Defines if the `notification` is new or has been already read.
     *
     *  **Note:** if set to `false` the `heading` has bold font, if set to true - it has a normal font.
     *
     * Default value is `false`.
     */
    getRead(): boolean;
    /**
     * Gets current value of property {@link #getShowClose showClose}.
     *
     * Defines if the `close` button would be displayed.
     *
     * Default value is `false`.
     */
    getShowClose(): boolean;
    /**
     * Gets current value of property {@link #getShowCounter showCounter}.
     *
     * Defines if the items `counter` would be displayed.
     *
     * Default value is `false`.
     */
    getShowCounter(): boolean;
    /**
     * Checks for the provided `sap.ui.webc.fiori.INotificationAction` in the aggregation {@link #getActions
     * actions}. and returns its index if found or -1 otherwise.
     */
    indexOfAction(
      /**
       * The action whose index is looked for
       */
      oAction: INotificationAction
    ): int;
    /**
     * Checks for the provided `sap.ui.webc.fiori.INotificationListItem` in the aggregation {@link #getItems
     * items}. and returns its index if found or -1 otherwise.
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: INotificationListItem
    ): int;
    /**
     * Inserts a action into the aggregation {@link #getActions actions}.
     */
    insertAction(
      /**
       * The action to insert; if empty, nothing is inserted
       */
      oAction: INotificationAction,
      /**
       * The `0`-based index the action should be inserted at; for a negative value of `iIndex`, the action is
       * inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted
       * at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a item into the aggregation {@link #getItems items}.
     */
    insertItem(
      /**
       * The item to insert; if empty, nothing is inserted
       */
      oItem: INotificationListItem,
      /**
       * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
       * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes a action from the aggregation {@link #getActions actions}.
     */
    removeAction(
      /**
       * The action to remove or its index or id
       */
      vAction: int | string | INotificationAction
    ): INotificationAction;
    /**
     * Removes all the controls from the aggregation {@link #getActions actions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllActions(): INotificationAction[];
    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllItems(): INotificationListItem[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | INotificationListItem
    ): INotificationListItem;
    /**
     * Sets a new value for property {@link #getBusy busy}.
     *
     * Defines if a busy indicator would be displayed over the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setBusy(
      /**
       * New value for property `busy`
       */
      bBusy?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getCollapsed collapsed}.
     *
     * Defines if the group is collapsed or expanded.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setCollapsed(
      /**
       * New value for property `collapsed`
       */
      bCollapsed?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getHeading heading}.
     *
     * Defines the `heading` of the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setHeading(
      /**
       * New value for property `heading`
       */
      sHeading?: string
    ): this;
    /**
     * Sets a new value for property {@link #getPriority priority}.
     *
     * Defines the `priority` of the item. Available options are:
     * 	 - `None`
     * 	 - `Low`
     * 	 - `Medium`
     * 	 - `High`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     */
    setPriority(
      /**
       * New value for property `priority`
       */
      sPriority?: Priority | keyof typeof Priority
    ): this;
    /**
     * Sets a new value for property {@link #getRead read}.
     *
     * Defines if the `notification` is new or has been already read.
     *
     *  **Note:** if set to `false` the `heading` has bold font, if set to true - it has a normal font.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setRead(
      /**
       * New value for property `read`
       */
      bRead?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowClose showClose}.
     *
     * Defines if the `close` button would be displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setShowClose(
      /**
       * New value for property `showClose`
       */
      bShowClose?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowCounter showCounter}.
     *
     * Defines if the items `counter` would be displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setShowCounter(
      /**
       * New value for property `showCounter`
       */
      bShowCounter?: boolean
    ): this;
  }

  export interface $NotificationListGroupItemSettings
    extends $WebComponentSettings {
    /**
     * Defines if a busy indicator would be displayed over the item.
     */
    busy?: boolean | PropertyBindingInfo;

    /**
     * Defines if the group is collapsed or expanded.
     */
    collapsed?: boolean | PropertyBindingInfo;

    /**
     * Defines the `heading` of the item.
     */
    heading?: string | PropertyBindingInfo;

    /**
     * Defines the `priority` of the item. Available options are:
     * 	 - `None`
     * 	 - `Low`
     * 	 - `Medium`
     * 	 - `High`
     */
    priority?: (Priority | keyof typeof Priority) | PropertyBindingInfo;

    /**
     * Defines if the `notification` is new or has been already read.
     *
     *  **Note:** if set to `false` the `heading` has bold font, if set to true - it has a normal font.
     */
    read?: boolean | PropertyBindingInfo;

    /**
     * Defines if the `close` button would be displayed.
     */
    showClose?: boolean | PropertyBindingInfo;

    /**
     * Defines if the items `counter` would be displayed.
     */
    showCounter?: boolean | PropertyBindingInfo;

    /**
     * Defines the actions, displayed in the top-right area.
     *
     *  **Note:** use the `sap.ui.webc.fiori.NotificationAction` component.
     */
    actions?:
      | INotificationAction[]
      | INotificationAction
      | AggregationBindingInfo;

    /**
     * Defines the items of the `sap.ui.webc.fiori.NotificationListGroupItem`, usually `sap.ui.webc.fiori.NotificationListItem`
     * items.
     */
    items?:
      | INotificationListItem[]
      | INotificationListItem
      | AggregationBindingInfo;

    /**
     * Fired when the `Close` button is pressed.
     */
    close?: Function;

    /**
     * Fired when the `sap.ui.webc.fiori.NotificationListGroupItem` is expanded/collapsed by user interaction.
     */
    toggle?: Function;
  }
}

declare module "sap/ui/webc/fiori/NotificationListItem" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import {
    INotificationListItem,
    INotificationAction,
  } from "sap/ui/webc/fiori/library";

  import { IListItem, IAvatar, Priority } from "sap/ui/webc/main/library";

  import Control from "sap/ui/core/Control";

  import Event from "sap/ui/base/Event";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview: The `sap.ui.webc.fiori.NotificationListItem` is a type of list item, meant to display notifications.
   *
   *
   *
   * The component has a rich set of various properties that allows the user to set `avatar`, `heading`, descriptive
   * `content` and `footnotes` to fully describe a notification.
   *
   *
   * The user can:
   * 	 - display a `Close` button
   * 	 - can control whether the `heading` and `description` should wrap or truncate and display a `ShowMore`
   * 			button to switch between less and more information
   * 	 - add custom actions by using the `sap.ui.webc.fiori.NotificationAction` component
   *
   * Usage: The component can be used in a standard `sap.ui.webc.main.List`.
   *
   * CSS Shadow Parts:
   *
   * CSS Shadow Parts
   * allow developers to style elements inside the Shadow DOM.
   *  The `sap.ui.webc.fiori.NotificationListItem` exposes the following CSS Shadow Parts:
   * 	 - heading - Used to style the heading of the notification list item
   */
  export default class NotificationListItem
    extends WebComponent
    implements INotificationListItem, IListItem {
    __implements__sap_ui_webc_fiori_INotificationListItem: boolean;
    __implements__sap_ui_webc_main_IListItem: boolean;
    /**
     * Constructor for a new `NotificationListItem`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $NotificationListItemSettings
    );
    /**
     * Constructor for a new `NotificationListItem`.
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
      mSettings?: $NotificationListItemSettings
    );

    /**
     * Adds some action to the aggregation {@link #getActions actions}.
     */
    addAction(
      /**
       * The action to add; if empty, nothing is inserted
       */
      oAction: INotificationAction
    ): this;
    /**
     * Adds some footnote to the aggregation {@link #getFootnotes footnotes}.
     */
    addFootnote(
      /**
       * The footnote to add; if empty, nothing is inserted
       */
      oFootnote: Control
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.webc.fiori.NotificationListItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.NotificationListItem` itself.
     *
     * Fired when the `Close` button is pressed.
     */
    attachClose(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.NotificationListItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.webc.fiori.NotificationListItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.NotificationListItem` itself.
     *
     * Fired when the `Close` button is pressed.
     */
    attachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.NotificationListItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the actions in the aggregation {@link #getActions actions}.
     */
    destroyActions(): this;
    /**
     * Destroys the avatar in the aggregation {@link #getAvatar avatar}.
     */
    destroyAvatar(): this;
    /**
     * Destroys all the footnotes in the aggregation {@link #getFootnotes footnotes}.
     */
    destroyFootnotes(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:close close} event of this `sap.ui.webc.fiori.NotificationListItem`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachClose(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.webc.fiori.NotificationListItem with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, NotificationListItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:close close} to attached listeners.
     */
    fireClose(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Gets content of aggregation {@link #getActions actions}.
     *
     * Defines the actions, displayed in the top-right area.
     *
     *  **Note:** use the `sap.ui.webc.fiori.NotificationAction` component.
     */
    getActions(): INotificationAction[];
    /**
     * Gets content of aggregation {@link #getAvatar avatar}.
     *
     * Defines the avatar, displayed in the `sap.ui.webc.fiori.NotificationListItem`.
     *
     *
     *
     *  **Note:** Consider using the `sap.ui.webc.main.Avatar` to display icons, initials or images.
     *  **Note:**In order to be complaint with the UX guidlines and for best experience, we recommend using
     * avatars with 2rem X 2rem in size (32px X 32px). In case you are using the `sap.ui.webc.main.Avatar` you
     * can set its `size` property to `XS` to get the required size - `<ui5-avatar size="XS"></ui5-avatar>`.
     */
    getAvatar(): IAvatar;
    /**
     * Gets current value of property {@link #getBusy busy}.
     *
     * Defines if a busy indicator would be displayed over the item.
     *
     * Default value is `false`.
     */
    getBusy(): boolean;
    /**
     * Gets current value of property {@link #getDescription description}.
     *
     * Defines the content of the control
     *
     * Default value is `empty string`.
     */
    getDescription(): string;
    /**
     * Gets content of aggregation {@link #getFootnotes footnotes}.
     *
     * Defines the elements, dipalyed in the footer of the of the `sap.ui.webc.fiori.NotificationListItem`.
     */
    getFootnotes(): Control[];
    /**
     * Gets current value of property {@link #getHeading heading}.
     *
     * Defines the `heading` of the item.
     *
     * Default value is `empty string`.
     */
    getHeading(): string;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.NotificationListItem.
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Gets current value of property {@link #getPriority priority}.
     *
     * Defines the `priority` of the item. Available options are:
     * 	 - `None`
     * 	 - `Low`
     * 	 - `Medium`
     * 	 - `High`
     *
     * Default value is `None`.
     */
    getPriority(): Priority | keyof typeof Priority;
    /**
     * Gets current value of property {@link #getRead read}.
     *
     * Defines if the `notification` is new or has been already read.
     *
     *  **Note:** if set to `false` the `heading` has bold font, if set to true - it has a normal font.
     *
     * Default value is `false`.
     */
    getRead(): boolean;
    /**
     * Gets current value of property {@link #getShowClose showClose}.
     *
     * Defines if the `close` button would be displayed.
     *
     * Default value is `false`.
     */
    getShowClose(): boolean;
    /**
     * Gets current value of property {@link #getWrap wrap}.
     *
     * Defines if the `heading` and `description` should wrap, they truncate by default.
     *
     *
     *
     *  **Note:** by default the `heading` and `decription`, and a `ShowMore/Less` button would be displayed.
     *
     * Default value is `false`.
     */
    getWrap(): boolean;
    /**
     * Checks for the provided `sap.ui.webc.fiori.INotificationAction` in the aggregation {@link #getActions
     * actions}. and returns its index if found or -1 otherwise.
     */
    indexOfAction(
      /**
       * The action whose index is looked for
       */
      oAction: INotificationAction
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getFootnotes footnotes}. and
     * returns its index if found or -1 otherwise.
     */
    indexOfFootnote(
      /**
       * The footnote whose index is looked for
       */
      oFootnote: Control
    ): int;
    /**
     * Inserts a action into the aggregation {@link #getActions actions}.
     */
    insertAction(
      /**
       * The action to insert; if empty, nothing is inserted
       */
      oAction: INotificationAction,
      /**
       * The `0`-based index the action should be inserted at; for a negative value of `iIndex`, the action is
       * inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted
       * at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a footnote into the aggregation {@link #getFootnotes footnotes}.
     */
    insertFootnote(
      /**
       * The footnote to insert; if empty, nothing is inserted
       */
      oFootnote: Control,
      /**
       * The `0`-based index the footnote should be inserted at; for a negative value of `iIndex`, the footnote
       * is inserted at position 0; for a value greater than the current size of the aggregation, the footnote
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes a action from the aggregation {@link #getActions actions}.
     */
    removeAction(
      /**
       * The action to remove or its index or id
       */
      vAction: int | string | INotificationAction
    ): INotificationAction;
    /**
     * Removes all the controls from the aggregation {@link #getActions actions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllActions(): INotificationAction[];
    /**
     * Removes all the controls from the aggregation {@link #getFootnotes footnotes}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllFootnotes(): Control[];
    /**
     * Removes a footnote from the aggregation {@link #getFootnotes footnotes}.
     */
    removeFootnote(
      /**
       * The footnote to remove or its index or id
       */
      vFootnote: int | string | Control
    ): Control;
    /**
     * Sets the aggregated {@link #getAvatar avatar}.
     */
    setAvatar(
      /**
       * The avatar to set
       */
      oAvatar: IAvatar
    ): this;
    /**
     * Sets a new value for property {@link #getBusy busy}.
     *
     * Defines if a busy indicator would be displayed over the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setBusy(
      /**
       * New value for property `busy`
       */
      bBusy?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getDescription description}.
     *
     * Defines the content of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setDescription(
      /**
       * New value for property `description`
       */
      sDescription?: string
    ): this;
    /**
     * Sets a new value for property {@link #getHeading heading}.
     *
     * Defines the `heading` of the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setHeading(
      /**
       * New value for property `heading`
       */
      sHeading?: string
    ): this;
    /**
     * Sets a new value for property {@link #getPriority priority}.
     *
     * Defines the `priority` of the item. Available options are:
     * 	 - `None`
     * 	 - `Low`
     * 	 - `Medium`
     * 	 - `High`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     */
    setPriority(
      /**
       * New value for property `priority`
       */
      sPriority?: Priority | keyof typeof Priority
    ): this;
    /**
     * Sets a new value for property {@link #getRead read}.
     *
     * Defines if the `notification` is new or has been already read.
     *
     *  **Note:** if set to `false` the `heading` has bold font, if set to true - it has a normal font.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setRead(
      /**
       * New value for property `read`
       */
      bRead?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowClose showClose}.
     *
     * Defines if the `close` button would be displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setShowClose(
      /**
       * New value for property `showClose`
       */
      bShowClose?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getWrap wrap}.
     *
     * Defines if the `heading` and `description` should wrap, they truncate by default.
     *
     *
     *
     *  **Note:** by default the `heading` and `decription`, and a `ShowMore/Less` button would be displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setWrap(
      /**
       * New value for property `wrap`
       */
      bWrap?: boolean
    ): this;
  }

  export interface $NotificationListItemSettings extends $WebComponentSettings {
    /**
     * Defines if a busy indicator would be displayed over the item.
     */
    busy?: boolean | PropertyBindingInfo;

    /**
     * Defines the content of the control
     */
    description?: string | PropertyBindingInfo;

    /**
     * Defines the `heading` of the item.
     */
    heading?: string | PropertyBindingInfo;

    /**
     * Defines the `priority` of the item. Available options are:
     * 	 - `None`
     * 	 - `Low`
     * 	 - `Medium`
     * 	 - `High`
     */
    priority?: (Priority | keyof typeof Priority) | PropertyBindingInfo;

    /**
     * Defines if the `notification` is new or has been already read.
     *
     *  **Note:** if set to `false` the `heading` has bold font, if set to true - it has a normal font.
     */
    read?: boolean | PropertyBindingInfo;

    /**
     * Defines if the `close` button would be displayed.
     */
    showClose?: boolean | PropertyBindingInfo;

    /**
     * Defines if the `heading` and `description` should wrap, they truncate by default.
     *
     *
     *
     *  **Note:** by default the `heading` and `decription`, and a `ShowMore/Less` button would be displayed.
     */
    wrap?: boolean | PropertyBindingInfo;

    /**
     * Defines the actions, displayed in the top-right area.
     *
     *  **Note:** use the `sap.ui.webc.fiori.NotificationAction` component.
     */
    actions?:
      | INotificationAction[]
      | INotificationAction
      | AggregationBindingInfo;

    /**
     * Defines the avatar, displayed in the `sap.ui.webc.fiori.NotificationListItem`.
     *
     *
     *
     *  **Note:** Consider using the `sap.ui.webc.main.Avatar` to display icons, initials or images.
     *  **Note:**In order to be complaint with the UX guidlines and for best experience, we recommend using
     * avatars with 2rem X 2rem in size (32px X 32px). In case you are using the `sap.ui.webc.main.Avatar` you
     * can set its `size` property to `XS` to get the required size - `<ui5-avatar size="XS"></ui5-avatar>`.
     */
    avatar?: IAvatar;

    /**
     * Defines the elements, dipalyed in the footer of the of the `sap.ui.webc.fiori.NotificationListItem`.
     */
    footnotes?: Control[] | Control | AggregationBindingInfo;

    /**
     * Fired when the `Close` button is pressed.
     */
    close?: Function;
  }
}

declare module "sap/ui/webc/fiori/Page" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import Control from "sap/ui/core/Control";

  import { PageBackgroundDesign } from "sap/ui/webc/fiori/library";

  import { CSSSize } from "sap/ui/core/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview:
   *
   * The `sap.ui.webc.fiori.Page` is a container control that holds one whole screen of an application. The
   * page has three distinct areas that can hold content - a header, content area and a footer. Structure:
   * Header: The top most area of the page is occupied by the header. The standard header includes a navigation
   * button and a title. Content: The content occupies the main part of the page. Only the content area is
   * scrollable by default. This can be prevented by setting `enableScrolling` to `false`. Footer: The footer
   * is optional and occupies the fixed bottom part of the page. Alternatively, the footer can be floating
   * above the bottom part of the content. This is enabled with the `floatingFooter` property.
   *
   * **Note:** `sap.ui.webc.fiori.Page` occipues the whole available space of its parent. In order to achieve
   * the intended design you have to make sure that there is enough space for the `sap.ui.webc.fiori.Page`
   * to be rendered.
   */
  export default class Page extends WebComponent {
    /**
     * Constructor for a new `Page`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $PageSettings
    );
    /**
     * Constructor for a new `Page`.
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
      mSettings?: $PageSettings
    );

    /**
     * Adds some content to the aggregation {@link #getContent content}.
     */
    addContent(
      /**
       * The content to add; if empty, nothing is inserted
       */
      oContent: Control
    ): this;
    /**
     * Adds some footer to the aggregation {@link #getFooter footer}.
     */
    addFooter(
      /**
       * The footer to add; if empty, nothing is inserted
       */
      oFooter: Control
    ): this;
    /**
     * Adds some header to the aggregation {@link #getHeader header}.
     */
    addHeader(
      /**
       * The header to add; if empty, nothing is inserted
       */
      oHeader: Control
    ): this;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     */
    destroyContent(): this;
    /**
     * Destroys all the footer in the aggregation {@link #getFooter footer}.
     */
    destroyFooter(): this;
    /**
     * Destroys all the header in the aggregation {@link #getHeader header}.
     */
    destroyHeader(): this;
    /**
     * Creates a new subclass of class sap.ui.webc.fiori.Page with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, Page>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
     *
     * Defines the background color of the `sap.ui.webc.fiori.Page`.
     *
     *  **Note:** When a ui5-list is placed inside the page, we recommend using “List” to ensure better color
     * contrast.
     *
     *  Available options are:
     * 	 - `Solid` (default)
     * 	 - `Transparent`
     * 	 - `List`
     *
     * Default value is `Solid`.
     */
    getBackgroundDesign():
      | PageBackgroundDesign
      | keyof typeof PageBackgroundDesign;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Defines the content HTML Element.
     */
    getContent(): Control[];
    /**
     * Gets current value of property {@link #getDisableScrolling disableScrolling}.
     *
     * Disables vertical scrolling of page content. If set to true, there will be no vertical scrolling at all.
     *
     * Default value is `false`.
     */
    getDisableScrolling(): boolean;
    /**
     * Gets current value of property {@link #getFloatingFooter floatingFooter}.
     *
     * Defines if the footer should float over the content.
     *
     *  **Note:** When set to true the footer floats over the content with a slight offset from the bottom,
     * otherwise it is fixed at the very bottom of the page.
     *
     * Default value is `true`.
     */
    getFloatingFooter(): boolean;
    /**
     * Gets content of aggregation {@link #getFooter footer}.
     *
     * Defines the footer HTML Element.
     */
    getFooter(): Control[];
    /**
     * Gets content of aggregation {@link #getHeader header}.
     *
     * Defines the header HTML Element.
     */
    getHeader(): Control[];
    /**
     * Gets current value of property {@link #getHeight height}.
     *
     * Defines the height of the control
     */
    getHeight(): CSSSize;
    /**
     * Gets current value of property {@link #getHideFooter hideFooter}.
     *
     * Defines the footer visibility.
     *
     * Default value is `false`.
     */
    getHideFooter(): boolean;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.Page.
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Defines the width of the control
     */
    getWidth(): CSSSize;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns
     * its index if found or -1 otherwise.
     */
    indexOfContent(
      /**
       * The content whose index is looked for
       */
      oContent: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getFooter footer}. and returns
     * its index if found or -1 otherwise.
     */
    indexOfFooter(
      /**
       * The footer whose index is looked for
       */
      oFooter: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getHeader header}. and returns
     * its index if found or -1 otherwise.
     */
    indexOfHeader(
      /**
       * The header whose index is looked for
       */
      oHeader: Control
    ): int;
    /**
     * Inserts a content into the aggregation {@link #getContent content}.
     */
    insertContent(
      /**
       * The content to insert; if empty, nothing is inserted
       */
      oContent: Control,
      /**
       * The `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
       * is inserted at position 0; for a value greater than the current size of the aggregation, the content
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a footer into the aggregation {@link #getFooter footer}.
     */
    insertFooter(
      /**
       * The footer to insert; if empty, nothing is inserted
       */
      oFooter: Control,
      /**
       * The `0`-based index the footer should be inserted at; for a negative value of `iIndex`, the footer is
       * inserted at position 0; for a value greater than the current size of the aggregation, the footer is inserted
       * at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a header into the aggregation {@link #getHeader header}.
     */
    insertHeader(
      /**
       * The header to insert; if empty, nothing is inserted
       */
      oHeader: Control,
      /**
       * The `0`-based index the header should be inserted at; for a negative value of `iIndex`, the header is
       * inserted at position 0; for a value greater than the current size of the aggregation, the header is inserted
       * at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getContent content}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllContent(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getFooter footer}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllFooter(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getHeader header}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllHeader(): Control[];
    /**
     * Removes a content from the aggregation {@link #getContent content}.
     */
    removeContent(
      /**
       * The content to remove or its index or id
       */
      vContent: int | string | Control
    ): Control;
    /**
     * Removes a footer from the aggregation {@link #getFooter footer}.
     */
    removeFooter(
      /**
       * The footer to remove or its index or id
       */
      vFooter: int | string | Control
    ): Control;
    /**
     * Removes a header from the aggregation {@link #getHeader header}.
     */
    removeHeader(
      /**
       * The header to remove or its index or id
       */
      vHeader: int | string | Control
    ): Control;
    /**
     * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
     *
     * Defines the background color of the `sap.ui.webc.fiori.Page`.
     *
     *  **Note:** When a ui5-list is placed inside the page, we recommend using “List” to ensure better color
     * contrast.
     *
     *  Available options are:
     * 	 - `Solid` (default)
     * 	 - `Transparent`
     * 	 - `List`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Solid`.
     */
    setBackgroundDesign(
      /**
       * New value for property `backgroundDesign`
       */
      sBackgroundDesign?:
        | PageBackgroundDesign
        | keyof typeof PageBackgroundDesign
    ): this;
    /**
     * Sets a new value for property {@link #getDisableScrolling disableScrolling}.
     *
     * Disables vertical scrolling of page content. If set to true, there will be no vertical scrolling at all.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setDisableScrolling(
      /**
       * New value for property `disableScrolling`
       */
      bDisableScrolling?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getFloatingFooter floatingFooter}.
     *
     * Defines if the footer should float over the content.
     *
     *  **Note:** When set to true the footer floats over the content with a slight offset from the bottom,
     * otherwise it is fixed at the very bottom of the page.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setFloatingFooter(
      /**
       * New value for property `floatingFooter`
       */
      bFloatingFooter?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getHeight height}.
     *
     * Defines the height of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setHeight(
      /**
       * New value for property `height`
       */
      sHeight?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getHideFooter hideFooter}.
     *
     * Defines the footer visibility.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setHideFooter(
      /**
       * New value for property `hideFooter`
       */
      bHideFooter?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Defines the width of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth?: CSSSize
    ): this;
  }

  export interface $PageSettings extends $WebComponentSettings {
    /**
     * Defines the background color of the `sap.ui.webc.fiori.Page`.
     *
     *  **Note:** When a ui5-list is placed inside the page, we recommend using “List” to ensure better color
     * contrast.
     *
     *  Available options are:
     * 	 - `Solid` (default)
     * 	 - `Transparent`
     * 	 - `List`
     */
    backgroundDesign?:
      | (PageBackgroundDesign | keyof typeof PageBackgroundDesign)
      | PropertyBindingInfo;

    /**
     * Disables vertical scrolling of page content. If set to true, there will be no vertical scrolling at all.
     */
    disableScrolling?: boolean | PropertyBindingInfo;

    /**
     * Defines if the footer should float over the content.
     *
     *  **Note:** When set to true the footer floats over the content with a slight offset from the bottom,
     * otherwise it is fixed at the very bottom of the page.
     */
    floatingFooter?: boolean | PropertyBindingInfo;

    /**
     * Defines the height of the control
     */
    height?: CSSSize | PropertyBindingInfo;

    /**
     * Defines the footer visibility.
     */
    hideFooter?: boolean | PropertyBindingInfo;

    /**
     * Defines the width of the control
     */
    width?: CSSSize | PropertyBindingInfo;

    /**
     * Defines the content HTML Element.
     */
    content?: Control[] | Control | AggregationBindingInfo;

    /**
     * Defines the footer HTML Element.
     */
    footer?: Control[] | Control | AggregationBindingInfo;

    /**
     * Defines the header HTML Element.
     */
    header?: Control[] | Control | AggregationBindingInfo;
  }
}

declare module "sap/ui/webc/fiori/ProductSwitch" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { IProductSwitchItem } from "sap/ui/webc/fiori/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview:
   *
   * The `sap.ui.webc.fiori.ProductSwitch` is an SAP Fiori specific web component that is used in `sap.ui.webc.fiori.ShellBar`
   * and allows the user to easily switch between products.
   *
   *
   *
   * Keyboard Handling: The `sap.ui.webc.fiori.ProductSwitch` provides advanced keyboard handling. When focused,
   * the user can use the following keyboard shortcuts in order to perform a navigation:
   *
   *
   *
   * 	 - [TAB] - Move focus to the next interactive element after the `sap.ui.webc.fiori.ProductSwitch`
   * 	 - [UP/DOWN] - Navigates up and down the items
   * 	 - [LEFT/RIGHT] - Navigates left and right the items
   */
  export default class ProductSwitch extends WebComponent {
    /**
     * Constructor for a new `ProductSwitch`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ProductSwitchSettings
    );
    /**
     * Constructor for a new `ProductSwitch`.
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
      mSettings?: $ProductSwitchSettings
    );

    /**
     * Adds some item to the aggregation {@link #getItems items}.
     */
    addItem(
      /**
       * The item to add; if empty, nothing is inserted
       */
      oItem: IProductSwitchItem
    ): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     */
    destroyItems(): this;
    /**
     * Creates a new subclass of class sap.ui.webc.fiori.ProductSwitch with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, ProductSwitch>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * Defines the items of the `sap.ui.webc.fiori.ProductSwitch`.
     */
    getItems(): IProductSwitchItem[];
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.ProductSwitch.
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Checks for the provided `sap.ui.webc.fiori.IProductSwitchItem` in the aggregation {@link #getItems items}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: IProductSwitchItem
    ): int;
    /**
     * Inserts a item into the aggregation {@link #getItems items}.
     */
    insertItem(
      /**
       * The item to insert; if empty, nothing is inserted
       */
      oItem: IProductSwitchItem,
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
    removeAllItems(): IProductSwitchItem[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | IProductSwitchItem
    ): IProductSwitchItem;
  }

  export interface $ProductSwitchSettings extends $WebComponentSettings {
    /**
     * Defines the items of the `sap.ui.webc.fiori.ProductSwitch`.
     */
    items?: IProductSwitchItem[] | IProductSwitchItem | AggregationBindingInfo;
  }
}

declare module "sap/ui/webc/fiori/ProductSwitchItem" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { IProductSwitchItem } from "sap/ui/webc/fiori/library";

  import Event from "sap/ui/base/Event";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview: The `sap.ui.webc.fiori.ProductSwitchItem` web component represents the items displayed in the
   * `sap.ui.webc.fiori.ProductSwitch` web component.
   *
   *  **Note:** `sap.ui.webc.fiori.ProductSwitchItem` is not supported when used outside of `sap.ui.webc.fiori.ProductSwitch`.
   *
   *
   *
   *
   * Keyboard Handling: The `sap.ui.webc.fiori.ProductSwitch` provides advanced keyboard handling. When focused,
   * the user can use the following keyboard shortcuts in order to perform a navigation:
   *
   *
   *
   * 	 - [SPACE/ENTER/RETURN] - Trigger `ui5-click` event
   */
  export default class ProductSwitchItem
    extends WebComponent
    implements IProductSwitchItem {
    __implements__sap_ui_webc_fiori_IProductSwitchItem: boolean;
    /**
     * Constructor for a new `ProductSwitchItem`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ProductSwitchItemSettings
    );
    /**
     * Constructor for a new `ProductSwitchItem`.
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
      mSettings?: $ProductSwitchItemSettings
    );

    /**
     * Attaches event handler `fnFunction` to the {@link #event:click click} event of this `sap.ui.webc.fiori.ProductSwitchItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ProductSwitchItem` itself.
     *
     * Fired when the `sap.ui.webc.fiori.ProductSwitchItem` is activated either with a click/tap or by using
     * the Enter or Space key.
     */
    attachClick(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ProductSwitchItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:click click} event of this `sap.ui.webc.fiori.ProductSwitchItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ProductSwitchItem` itself.
     *
     * Fired when the `sap.ui.webc.fiori.ProductSwitchItem` is activated either with a click/tap or by using
     * the Enter or Space key.
     */
    attachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ProductSwitchItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:click click} event of this `sap.ui.webc.fiori.ProductSwitchItem`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachClick(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.webc.fiori.ProductSwitchItem with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, ProductSwitchItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:click click} to attached listeners.
     */
    fireClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Defines the icon to be displayed as a graphical element within the component.
     *
     *  Example:
     *
     * ```javascript
     * ui5-product-switch-item icon="palette"```
     *
     *
     * See all the available icons in the Icon Explorer.
     *
     * Default value is `empty string`.
     */
    getIcon(): string;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.ProductSwitchItem.
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Gets current value of property {@link #getSubtitleText subtitleText}.
     *
     * Defines the subtitle of the component.
     *
     * Default value is `empty string`.
     */
    getSubtitleText(): string;
    /**
     * Gets current value of property {@link #getTarget target}.
     *
     * Defines a target where the `targetSrc` content must be open.
     *
     *  Available options are:
     * 	 - `_self`
     * 	 - `_top`
     * 	 - `_blank`
     * 	 - `_parent`
     * 	 - `_search`
     *
     * Default value is `"_self"`.
     */
    getTarget(): string;
    /**
     * Gets current value of property {@link #getTargetSrc targetSrc}.
     *
     * Defines the component target URI. Supports standard hyperlink behavior.
     *
     * Default value is `empty string`.
     */
    getTargetSrc(): string;
    /**
     * Gets current value of property {@link #getTitleText titleText}.
     *
     * Defines the title of the component.
     *
     * Default value is `empty string`.
     */
    getTitleText(): string;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Defines the icon to be displayed as a graphical element within the component.
     *
     *  Example:
     *
     * ```javascript
     * ui5-product-switch-item icon="palette"```
     *
     *
     * See all the available icons in the Icon Explorer.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setIcon(
      /**
       * New value for property `icon`
       */
      sIcon?: string
    ): this;
    /**
     * Sets a new value for property {@link #getSubtitleText subtitleText}.
     *
     * Defines the subtitle of the component.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setSubtitleText(
      /**
       * New value for property `subtitleText`
       */
      sSubtitleText?: string
    ): this;
    /**
     * Sets a new value for property {@link #getTarget target}.
     *
     * Defines a target where the `targetSrc` content must be open.
     *
     *  Available options are:
     * 	 - `_self`
     * 	 - `_top`
     * 	 - `_blank`
     * 	 - `_parent`
     * 	 - `_search`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"_self"`.
     */
    setTarget(
      /**
       * New value for property `target`
       */
      sTarget?: string
    ): this;
    /**
     * Sets a new value for property {@link #getTargetSrc targetSrc}.
     *
     * Defines the component target URI. Supports standard hyperlink behavior.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setTargetSrc(
      /**
       * New value for property `targetSrc`
       */
      sTargetSrc?: string
    ): this;
    /**
     * Sets a new value for property {@link #getTitleText titleText}.
     *
     * Defines the title of the component.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setTitleText(
      /**
       * New value for property `titleText`
       */
      sTitleText?: string
    ): this;
  }

  export interface $ProductSwitchItemSettings extends $WebComponentSettings {
    /**
     * Defines the icon to be displayed as a graphical element within the component.
     *
     *  Example:
     *
     * ```javascript
     * ui5-product-switch-item icon="palette"```
     *
     *
     * See all the available icons in the Icon Explorer.
     */
    icon?: string | PropertyBindingInfo;

    /**
     * Defines the subtitle of the component.
     */
    subtitleText?: string | PropertyBindingInfo;

    /**
     * Defines a target where the `targetSrc` content must be open.
     *
     *  Available options are:
     * 	 - `_self`
     * 	 - `_top`
     * 	 - `_blank`
     * 	 - `_parent`
     * 	 - `_search`
     */
    target?: string | PropertyBindingInfo;

    /**
     * Defines the component target URI. Supports standard hyperlink behavior.
     */
    targetSrc?: string | PropertyBindingInfo;

    /**
     * Defines the title of the component.
     */
    titleText?: string | PropertyBindingInfo;

    /**
     * Fired when the `sap.ui.webc.fiori.ProductSwitchItem` is activated either with a click/tap or by using
     * the Enter or Space key.
     */
    click?: Function;
  }
}

declare module "sap/ui/webc/fiori/ShellBar" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { IShellBarItem } from "sap/ui/webc/fiori/library";

  import {
    IListItem,
    IAvatar,
    IInput,
    IButton,
  } from "sap/ui/webc/main/library";

  import Event from "sap/ui/base/Event";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview:
   *
   * The `sap.ui.webc.fiori.ShellBar` is meant to serve as an application header and includes numerous built-in
   * features, such as: logo, profile image/icon, title, search field, notifications and so on.
   *
   *
   *
   * Stable DOM Refs:
   *
   * You can use the following stable DOM refs for the `sap.ui.webc.fiori.ShellBar`:
   * 	 - logo
   * 	 - copilot
   * 	 - notifications
   * 	 - overflow
   * 	 - profile
   * 	 - product-switch
   *
   * In the context of `sap.ui.webc.fiori.ShellBar`, you can provide a custom stable DOM refs for:
   * 	 - Every `sap.ui.webc.fiori.ShellBarItem` that you provide. Example: `
   * 			`
   *
   * CSS Shadow Parts:
   *
   * CSS Shadow Parts
   * allow developers to style elements inside the Shadow DOM.
   *  The `sap.ui.webc.fiori.ShellBar` exposes the following CSS Shadow Parts:
   * 	 - root - Used to style the outermost wrapper of the `sap.ui.webc.fiori.ShellBar`
   */
  export default class ShellBar extends WebComponent {
    /**
     * Constructor for a new `ShellBar`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ShellBarSettings
    );
    /**
     * Constructor for a new `ShellBar`.
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
      mSettings?: $ShellBarSettings
    );

    /**
     * Adds some item to the aggregation {@link #getItems items}.
     */
    addItem(
      /**
       * The item to add; if empty, nothing is inserted
       */
      oItem: IShellBarItem
    ): this;
    /**
     * Adds some menuItem to the aggregation {@link #getMenuItems menuItems}.
     */
    addMenuItem(
      /**
       * The menuItem to add; if empty, nothing is inserted
       */
      oMenuItem: IListItem
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:coPilotClick coPilotClick} event of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when the co pilot is activated.
     */
    attachCoPilotClick(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:coPilotClick coPilotClick} event of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when the co pilot is activated.
     */
    attachCoPilotClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:logoClick logoClick} event of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when the logo is activated.
     */
    attachLogoClick(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:logoClick logoClick} event of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when the logo is activated.
     */
    attachLogoClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:menuItemClick menuItemClick} event of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when a menu item is activated **Note:** You can prevent closing of oveflow popover by calling
     * `event.preventDefault()`.
     */
    attachMenuItemClick(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:menuItemClick menuItemClick} event of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when a menu item is activated **Note:** You can prevent closing of oveflow popover by calling
     * `event.preventDefault()`.
     */
    attachMenuItemClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:notificationsClick notificationsClick} event
     * of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when the notification icon is activated.
     */
    attachNotificationsClick(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:notificationsClick notificationsClick} event
     * of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when the notification icon is activated.
     */
    attachNotificationsClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:productSwitchClick productSwitchClick} event
     * of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when the product switch icon is activated. **Note:** You can prevent closing of oveflow popover
     * by calling `event.preventDefault()`.
     */
    attachProductSwitchClick(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:productSwitchClick productSwitchClick} event
     * of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when the product switch icon is activated. **Note:** You can prevent closing of oveflow popover
     * by calling `event.preventDefault()`.
     */
    attachProductSwitchClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:profileClick profileClick} event of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when the profile slot is present.
     */
    attachProfileClick(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:profileClick profileClick} event of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when the profile slot is present.
     */
    attachProfileClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Closes the overflow area. Useful to manually close the overflow after having suppressed automatic closing
     * with preventDefault() of ShellbarItem's press event
     */
    closeOverflow(): void;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     */
    destroyItems(): this;
    /**
     * Destroys the logo in the aggregation {@link #getLogo logo}.
     */
    destroyLogo(): this;
    /**
     * Destroys all the menuItems in the aggregation {@link #getMenuItems menuItems}.
     */
    destroyMenuItems(): this;
    /**
     * Destroys the profile in the aggregation {@link #getProfile profile}.
     */
    destroyProfile(): this;
    /**
     * Destroys the searchField in the aggregation {@link #getSearchField searchField}.
     */
    destroySearchField(): this;
    /**
     * Destroys the startButton in the aggregation {@link #getStartButton startButton}.
     */
    destroyStartButton(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:coPilotClick coPilotClick} event of this `sap.ui.webc.fiori.ShellBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachCoPilotClick(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:logoClick logoClick} event of this `sap.ui.webc.fiori.ShellBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachLogoClick(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:menuItemClick menuItemClick} event of this
     * `sap.ui.webc.fiori.ShellBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachMenuItemClick(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:notificationsClick notificationsClick} event
     * of this `sap.ui.webc.fiori.ShellBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachNotificationsClick(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:productSwitchClick productSwitchClick} event
     * of this `sap.ui.webc.fiori.ShellBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachProductSwitchClick(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:profileClick profileClick} event of this `sap.ui.webc.fiori.ShellBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachProfileClick(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.webc.fiori.ShellBar with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, ShellBar>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:coPilotClick coPilotClick} to attached listeners.
     */
    fireCoPilotClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * dom ref of the activated element
         */
        targetRef?: HTMLElement;
      }
    ): this;
    /**
     * Fires event {@link #event:logoClick logoClick} to attached listeners.
     */
    fireLogoClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * dom ref of the activated element
         */
        targetRef?: HTMLElement;
      }
    ): this;
    /**
     * Fires event {@link #event:menuItemClick menuItemClick} to attached listeners.
     */
    fireMenuItemClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * DOM ref of the activated list item
         */
        item?: HTMLElement;
      }
    ): this;
    /**
     * Fires event {@link #event:notificationsClick notificationsClick} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     */
    fireNotificationsClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * dom ref of the activated element
         */
        targetRef?: HTMLElement;
      }
    ): boolean;
    /**
     * Fires event {@link #event:productSwitchClick productSwitchClick} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     */
    fireProductSwitchClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * dom ref of the activated element
         */
        targetRef?: HTMLElement;
      }
    ): boolean;
    /**
     * Fires event {@link #event:profileClick profileClick} to attached listeners.
     */
    fireProfileClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * dom ref of the activated element
         */
        targetRef?: HTMLElement;
      }
    ): this;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * Defines the `sap.ui.webc.fiori.ShellBar` aditional items.
     *
     *  **Note:** You can use the <ui5-shellbar-item></ui5-shellbar-item>.
     */
    getItems(): IShellBarItem[];
    /**
     * Gets content of aggregation {@link #getLogo logo}.
     *
     * Defines the logo of the `sap.ui.webc.fiori.ShellBar`. For example, you can use `sap.ui.webc.main.Avatar`
     * or `img` elements as logo.
     */
    getLogo(): IAvatar;
    /**
     * Gets content of aggregation {@link #getMenuItems menuItems}.
     *
     * Defines the items displayed in menu after a click on the primary title.
     *
     *  **Note:** You can use the <ui5-li></ui5-li> and its ancestors.
     */
    getMenuItems(): IListItem[];
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.ShellBar.
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Gets current value of property {@link #getNotificationsCount notificationsCount}.
     *
     * Defines the `notificationsCount`, displayed in the notification icon top-right corner.
     *
     * Default value is `empty string`.
     */
    getNotificationsCount(): string;
    /**
     * Gets current value of property {@link #getPrimaryTitle primaryTitle}.
     *
     * Defines the `primaryTitle`.
     *
     *  **Note:** The `primaryTitle` would be hidden on S screen size (less than approx. 700px).
     *
     * Default value is `empty string`.
     */
    getPrimaryTitle(): string;
    /**
     * Gets content of aggregation {@link #getProfile profile}.
     *
     * You can pass `sap.ui.webc.main.Avatar` to set the profile image/icon. If no profile slot is set - profile
     * will be excluded from actions.
     *
     * Note: We recommend not using the `size` attribute of `sap.ui.webc.main.Avatar` because it should have
     * specific size by design in the context of `sap.ui.webc.fiori.ShellBar` profile.
     */
    getProfile(): IAvatar;
    /**
     * Gets content of aggregation {@link #getSearchField searchField}.
     *
     * Defines the `sap.ui.webc.main.Input`, that will be used as a search field.
     */
    getSearchField(): IInput;
    /**
     * Gets current value of property {@link #getSecondaryTitle secondaryTitle}.
     *
     * Defines the `secondaryTitle`.
     *
     *  **Note:** The `secondaryTitle` would be hidden on S and M screen sizes (less than approx. 1300px).
     *
     * Default value is `empty string`.
     */
    getSecondaryTitle(): string;
    /**
     * Gets current value of property {@link #getShowCoPilot showCoPilot}.
     *
     * Defines, if the product CoPilot icon would be displayed.
     *  **Note:** By default the co-pilot is displayed as static SVG. If you need an animated co-pilot, you
     * can import the `"@ui5/webcomponents-fiori/dist/features/CoPilotAnimation.js"` module as add-on feature.
     *
     * Default value is `false`.
     */
    getShowCoPilot(): boolean;
    /**
     * Gets current value of property {@link #getShowNotifications showNotifications}.
     *
     * Defines, if the notification icon would be displayed.
     *
     * Default value is `false`.
     */
    getShowNotifications(): boolean;
    /**
     * Gets current value of property {@link #getShowProductSwitch showProductSwitch}.
     *
     * Defines, if the product switch icon would be displayed.
     *
     * Default value is `false`.
     */
    getShowProductSwitch(): boolean;
    /**
     * Gets content of aggregation {@link #getStartButton startButton}.
     *
     * Defines a `sap.ui.webc.main.Button` in the bar that will be placed in the beginning. We encourage this
     * slot to be used for a back or home button. It gets overstyled to match ShellBar's styling.
     */
    getStartButton(): IButton;
    /**
     * Checks for the provided `sap.ui.webc.fiori.IShellBarItem` in the aggregation {@link #getItems items}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: IShellBarItem
    ): int;
    /**
     * Checks for the provided `sap.ui.webc.main.IListItem` in the aggregation {@link #getMenuItems menuItems}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfMenuItem(
      /**
       * The menuItem whose index is looked for
       */
      oMenuItem: IListItem
    ): int;
    /**
     * Inserts a item into the aggregation {@link #getItems items}.
     */
    insertItem(
      /**
       * The item to insert; if empty, nothing is inserted
       */
      oItem: IShellBarItem,
      /**
       * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
       * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a menuItem into the aggregation {@link #getMenuItems menuItems}.
     */
    insertMenuItem(
      /**
       * The menuItem to insert; if empty, nothing is inserted
       */
      oMenuItem: IListItem,
      /**
       * The `0`-based index the menuItem should be inserted at; for a negative value of `iIndex`, the menuItem
       * is inserted at position 0; for a value greater than the current size of the aggregation, the menuItem
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllItems(): IShellBarItem[];
    /**
     * Removes all the controls from the aggregation {@link #getMenuItems menuItems}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllMenuItems(): IListItem[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | IShellBarItem
    ): IShellBarItem;
    /**
     * Removes a menuItem from the aggregation {@link #getMenuItems menuItems}.
     */
    removeMenuItem(
      /**
       * The menuItem to remove or its index or id
       */
      vMenuItem: int | string | IListItem
    ): IListItem;
    /**
     * Sets the aggregated {@link #getLogo logo}.
     */
    setLogo(
      /**
       * The logo to set
       */
      oLogo: IAvatar
    ): this;
    /**
     * Sets a new value for property {@link #getNotificationsCount notificationsCount}.
     *
     * Defines the `notificationsCount`, displayed in the notification icon top-right corner.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setNotificationsCount(
      /**
       * New value for property `notificationsCount`
       */
      sNotificationsCount?: string
    ): this;
    /**
     * Sets a new value for property {@link #getPrimaryTitle primaryTitle}.
     *
     * Defines the `primaryTitle`.
     *
     *  **Note:** The `primaryTitle` would be hidden on S screen size (less than approx. 700px).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setPrimaryTitle(
      /**
       * New value for property `primaryTitle`
       */
      sPrimaryTitle?: string
    ): this;
    /**
     * Sets the aggregated {@link #getProfile profile}.
     */
    setProfile(
      /**
       * The profile to set
       */
      oProfile: IAvatar
    ): this;
    /**
     * Sets the aggregated {@link #getSearchField searchField}.
     */
    setSearchField(
      /**
       * The searchField to set
       */
      oSearchField: IInput
    ): this;
    /**
     * Sets a new value for property {@link #getSecondaryTitle secondaryTitle}.
     *
     * Defines the `secondaryTitle`.
     *
     *  **Note:** The `secondaryTitle` would be hidden on S and M screen sizes (less than approx. 1300px).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setSecondaryTitle(
      /**
       * New value for property `secondaryTitle`
       */
      sSecondaryTitle?: string
    ): this;
    /**
     * Sets a new value for property {@link #getShowCoPilot showCoPilot}.
     *
     * Defines, if the product CoPilot icon would be displayed.
     *  **Note:** By default the co-pilot is displayed as static SVG. If you need an animated co-pilot, you
     * can import the `"@ui5/webcomponents-fiori/dist/features/CoPilotAnimation.js"` module as add-on feature.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setShowCoPilot(
      /**
       * New value for property `showCoPilot`
       */
      bShowCoPilot?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowNotifications showNotifications}.
     *
     * Defines, if the notification icon would be displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setShowNotifications(
      /**
       * New value for property `showNotifications`
       */
      bShowNotifications?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowProductSwitch showProductSwitch}.
     *
     * Defines, if the product switch icon would be displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setShowProductSwitch(
      /**
       * New value for property `showProductSwitch`
       */
      bShowProductSwitch?: boolean
    ): this;
    /**
     * Sets the aggregated {@link #getStartButton startButton}.
     */
    setStartButton(
      /**
       * The startButton to set
       */
      oStartButton: IButton
    ): this;
  }

  export interface $ShellBarSettings extends $WebComponentSettings {
    /**
     * Defines the `notificationsCount`, displayed in the notification icon top-right corner.
     */
    notificationsCount?: string | PropertyBindingInfo;

    /**
     * Defines the `primaryTitle`.
     *
     *  **Note:** The `primaryTitle` would be hidden on S screen size (less than approx. 700px).
     */
    primaryTitle?: string | PropertyBindingInfo;

    /**
     * Defines the `secondaryTitle`.
     *
     *  **Note:** The `secondaryTitle` would be hidden on S and M screen sizes (less than approx. 1300px).
     */
    secondaryTitle?: string | PropertyBindingInfo;

    /**
     * Defines, if the product CoPilot icon would be displayed.
     *  **Note:** By default the co-pilot is displayed as static SVG. If you need an animated co-pilot, you
     * can import the `"@ui5/webcomponents-fiori/dist/features/CoPilotAnimation.js"` module as add-on feature.
     */
    showCoPilot?: boolean | PropertyBindingInfo;

    /**
     * Defines, if the notification icon would be displayed.
     */
    showNotifications?: boolean | PropertyBindingInfo;

    /**
     * Defines, if the product switch icon would be displayed.
     */
    showProductSwitch?: boolean | PropertyBindingInfo;

    /**
     * Defines the `sap.ui.webc.fiori.ShellBar` aditional items.
     *
     *  **Note:** You can use the <ui5-shellbar-item></ui5-shellbar-item>.
     */
    items?: IShellBarItem[] | IShellBarItem | AggregationBindingInfo;

    /**
     * Defines the logo of the `sap.ui.webc.fiori.ShellBar`. For example, you can use `sap.ui.webc.main.Avatar`
     * or `img` elements as logo.
     */
    logo?: IAvatar;

    /**
     * Defines the items displayed in menu after a click on the primary title.
     *
     *  **Note:** You can use the <ui5-li></ui5-li> and its ancestors.
     */
    menuItems?: IListItem[] | IListItem | AggregationBindingInfo;

    /**
     * You can pass `sap.ui.webc.main.Avatar` to set the profile image/icon. If no profile slot is set - profile
     * will be excluded from actions.
     *
     * Note: We recommend not using the `size` attribute of `sap.ui.webc.main.Avatar` because it should have
     * specific size by design in the context of `sap.ui.webc.fiori.ShellBar` profile.
     */
    profile?: IAvatar;

    /**
     * Defines the `sap.ui.webc.main.Input`, that will be used as a search field.
     */
    searchField?: IInput;

    /**
     * Defines a `sap.ui.webc.main.Button` in the bar that will be placed in the beginning. We encourage this
     * slot to be used for a back or home button. It gets overstyled to match ShellBar's styling.
     */
    startButton?: IButton;

    /**
     * Fired, when the co pilot is activated.
     */
    coPilotClick?: Function;

    /**
     * Fired, when the logo is activated.
     */
    logoClick?: Function;

    /**
     * Fired, when a menu item is activated **Note:** You can prevent closing of oveflow popover by calling
     * `event.preventDefault()`.
     */
    menuItemClick?: Function;

    /**
     * Fired, when the notification icon is activated.
     */
    notificationsClick?: Function;

    /**
     * Fired, when the product switch icon is activated. **Note:** You can prevent closing of oveflow popover
     * by calling `event.preventDefault()`.
     */
    productSwitchClick?: Function;

    /**
     * Fired, when the profile slot is present.
     */
    profileClick?: Function;
  }
}

declare module "sap/ui/webc/fiori/ShellBarItem" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { IShellBarItem } from "sap/ui/webc/fiori/library";

  import Event from "sap/ui/base/Event";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   */
  export default class ShellBarItem
    extends WebComponent
    implements IShellBarItem {
    __implements__sap_ui_webc_fiori_IShellBarItem: boolean;
    /**
     * Constructor for a new `ShellBarItem`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ShellBarItemSettings
    );
    /**
     * Constructor for a new `ShellBarItem`.
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
      mSettings?: $ShellBarItemSettings
    );

    /**
     * Attaches event handler `fnFunction` to the {@link #event:itemClick itemClick} event of this `sap.ui.webc.fiori.ShellBarItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBarItem` itself.
     *
     * Fired, when the item is pressed.
     */
    attachItemClick(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBarItem` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:itemClick itemClick} event of this `sap.ui.webc.fiori.ShellBarItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBarItem` itself.
     *
     * Fired, when the item is pressed.
     */
    attachItemClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBarItem` itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:itemClick itemClick} event of this `sap.ui.webc.fiori.ShellBarItem`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachItemClick(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.webc.fiori.ShellBarItem with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, ShellBarItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:itemClick itemClick} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     */
    fireItemClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * DOM ref of the clicked element
         */
        targetRef?: HTMLElement;
      }
    ): boolean;
    /**
     * Gets current value of property {@link #getCount count}.
     *
     * Defines the count displayed in the top-right corner.
     *
     * Default value is `empty string`.
     */
    getCount(): string;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Defines the name of the item's icon.
     *
     * Default value is `empty string`.
     */
    getIcon(): string;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.ShellBarItem.
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Defines the item text.
     *
     * Default value is `empty string`.
     */
    getText(): string;
    /**
     * Sets a new value for property {@link #getCount count}.
     *
     * Defines the count displayed in the top-right corner.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setCount(
      /**
       * New value for property `count`
       */
      sCount?: string
    ): this;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Defines the name of the item's icon.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setIcon(
      /**
       * New value for property `icon`
       */
      sIcon?: string
    ): this;
    /**
     * Sets a new value for property {@link #getText text}.
     *
     * Defines the item text.
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
  }

  export interface $ShellBarItemSettings extends $WebComponentSettings {
    /**
     * Defines the count displayed in the top-right corner.
     */
    count?: string | PropertyBindingInfo;

    /**
     * Defines the name of the item's icon.
     */
    icon?: string | PropertyBindingInfo;

    /**
     * Defines the item text.
     */
    text?: string | PropertyBindingInfo;

    /**
     * Fired, when the item is pressed.
     */
    itemClick?: Function;
  }
}

declare module "sap/ui/webc/fiori/SideNavigation" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { ISideNavigationItem } from "sap/ui/webc/fiori/library";

  import Control from "sap/ui/core/Control";

  import Event from "sap/ui/base/Event";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview:
   *
   * The `SideNavigation` is used as a standard menu in applications. It consists of three containers: header
   * (top-aligned), main navigation section (top-aligned) and the secondary section (bottom-aligned).
   *
   * 	 - The header is meant for displaying user related information - profile data, avatar, etc.
   * 	 - The main navigation section is related to the user’s current work context
   * 	 - The secondary section is mostly used to link additional information that may be of interest (legal
   * 			information, developer communities, external help, contact information and so on).
   *
   * Usage:
   *
   * Use the available `sap.ui.webc.fiori.SideNavigationItem` and `sap.ui.webc.fiori.SideNavigationSubItem`
   * components to build your menu. The items can consist of text only or an icon with text. The use or non-use
   * of icons must be consistent for all items on one level. You must not combine entries with and without
   * icons on the same level. We strongly recommend that you do not use icons on the second level.
   */
  export default class SideNavigation extends WebComponent {
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
     * Adds some fixedItem to the aggregation {@link #getFixedItems fixedItems}.
     */
    addFixedItem(
      /**
       * The fixedItem to add; if empty, nothing is inserted
       */
      oFixedItem: ISideNavigationItem
    ): this;
    /**
     * Adds some header to the aggregation {@link #getHeader header}.
     */
    addHeader(
      /**
       * The header to add; if empty, nothing is inserted
       */
      oHeader: Control
    ): this;
    /**
     * Adds some item to the aggregation {@link #getItems items}.
     */
    addItem(
      /**
       * The item to add; if empty, nothing is inserted
       */
      oItem: ISideNavigationItem
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this
     * `sap.ui.webc.fiori.SideNavigation`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.SideNavigation` itself.
     *
     * Fired when the selection has changed via user interaction
     */
    attachSelectionChange(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.SideNavigation` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this
     * `sap.ui.webc.fiori.SideNavigation`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.SideNavigation` itself.
     *
     * Fired when the selection has changed via user interaction
     */
    attachSelectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.SideNavigation` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the fixedItems in the aggregation {@link #getFixedItems fixedItems}.
     */
    destroyFixedItems(): this;
    /**
     * Destroys all the header in the aggregation {@link #getHeader header}.
     */
    destroyHeader(): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     */
    destroyItems(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:selectionChange selectionChange} event of
     * this `sap.ui.webc.fiori.SideNavigation`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachSelectionChange(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.webc.fiori.SideNavigation with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
     * Fires event {@link #event:selectionChange selectionChange} to attached listeners.
     */
    fireSelectionChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * the clicked item.
         */
        item?: HTMLElement;
      }
    ): this;
    /**
     * Gets current value of property {@link #getCollapsed collapsed}.
     *
     * Defines whether the `sap.ui.webc.fiori.SideNavigation` is expanded or collapsed.
     *
     * Default value is `false`.
     */
    getCollapsed(): boolean;
    /**
     * Gets content of aggregation {@link #getFixedItems fixedItems}.
     *
     * Defines the fixed items at the bottom of the `sap.ui.webc.fiori.SideNavigation`. Use the `sap.ui.webc.fiori.SideNavigationItem`
     * component for the fixed items, and optionally the `sap.ui.webc.fiori.SideNavigationSubItem` component
     * to provide second-level items inside them.
     *
     * **Note:** In order to achieve the best user experience, it is recommended that you keep the fixed items
     * "flat" (do not pass sub-items)
     */
    getFixedItems(): ISideNavigationItem[];
    /**
     * Gets content of aggregation {@link #getHeader header}.
     *
     * Defines the header of the `sap.ui.webc.fiori.SideNavigation`.
     *
     *
     *
     *  **Note:** The header is displayed when the component is expanded - the property `collapsed` is false;
     */
    getHeader(): Control[];
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * Defines the main items of the `sap.ui.webc.fiori.SideNavigation`. Use the `sap.ui.webc.fiori.SideNavigationItem`
     * component for the top-level items, and the `sap.ui.webc.fiori.SideNavigationSubItem` component for second-level
     * items, nested inside the items.
     */
    getItems(): ISideNavigationItem[];
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.SideNavigation.
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Checks for the provided `sap.ui.webc.fiori.ISideNavigationItem` in the aggregation {@link #getFixedItems
     * fixedItems}. and returns its index if found or -1 otherwise.
     */
    indexOfFixedItem(
      /**
       * The fixedItem whose index is looked for
       */
      oFixedItem: ISideNavigationItem
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getHeader header}. and returns
     * its index if found or -1 otherwise.
     */
    indexOfHeader(
      /**
       * The header whose index is looked for
       */
      oHeader: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.webc.fiori.ISideNavigationItem` in the aggregation {@link #getItems items}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: ISideNavigationItem
    ): int;
    /**
     * Inserts a fixedItem into the aggregation {@link #getFixedItems fixedItems}.
     */
    insertFixedItem(
      /**
       * The fixedItem to insert; if empty, nothing is inserted
       */
      oFixedItem: ISideNavigationItem,
      /**
       * The `0`-based index the fixedItem should be inserted at; for a negative value of `iIndex`, the fixedItem
       * is inserted at position 0; for a value greater than the current size of the aggregation, the fixedItem
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a header into the aggregation {@link #getHeader header}.
     */
    insertHeader(
      /**
       * The header to insert; if empty, nothing is inserted
       */
      oHeader: Control,
      /**
       * The `0`-based index the header should be inserted at; for a negative value of `iIndex`, the header is
       * inserted at position 0; for a value greater than the current size of the aggregation, the header is inserted
       * at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a item into the aggregation {@link #getItems items}.
     */
    insertItem(
      /**
       * The item to insert; if empty, nothing is inserted
       */
      oItem: ISideNavigationItem,
      /**
       * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
       * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getFixedItems fixedItems}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllFixedItems(): ISideNavigationItem[];
    /**
     * Removes all the controls from the aggregation {@link #getHeader header}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllHeader(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllItems(): ISideNavigationItem[];
    /**
     * Removes a fixedItem from the aggregation {@link #getFixedItems fixedItems}.
     */
    removeFixedItem(
      /**
       * The fixedItem to remove or its index or id
       */
      vFixedItem: int | string | ISideNavigationItem
    ): ISideNavigationItem;
    /**
     * Removes a header from the aggregation {@link #getHeader header}.
     */
    removeHeader(
      /**
       * The header to remove or its index or id
       */
      vHeader: int | string | Control
    ): Control;
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | ISideNavigationItem
    ): ISideNavigationItem;
    /**
     * Sets a new value for property {@link #getCollapsed collapsed}.
     *
     * Defines whether the `sap.ui.webc.fiori.SideNavigation` is expanded or collapsed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setCollapsed(
      /**
       * New value for property `collapsed`
       */
      bCollapsed?: boolean
    ): this;
  }

  export interface $SideNavigationSettings extends $WebComponentSettings {
    /**
     * Defines whether the `sap.ui.webc.fiori.SideNavigation` is expanded or collapsed.
     */
    collapsed?: boolean | PropertyBindingInfo;

    /**
     * Defines the fixed items at the bottom of the `sap.ui.webc.fiori.SideNavigation`. Use the `sap.ui.webc.fiori.SideNavigationItem`
     * component for the fixed items, and optionally the `sap.ui.webc.fiori.SideNavigationSubItem` component
     * to provide second-level items inside them.
     *
     * **Note:** In order to achieve the best user experience, it is recommended that you keep the fixed items
     * "flat" (do not pass sub-items)
     */
    fixedItems?:
      | ISideNavigationItem[]
      | ISideNavigationItem
      | AggregationBindingInfo;

    /**
     * Defines the header of the `sap.ui.webc.fiori.SideNavigation`.
     *
     *
     *
     *  **Note:** The header is displayed when the component is expanded - the property `collapsed` is false;
     */
    header?: Control[] | Control | AggregationBindingInfo;

    /**
     * Defines the main items of the `sap.ui.webc.fiori.SideNavigation`. Use the `sap.ui.webc.fiori.SideNavigationItem`
     * component for the top-level items, and the `sap.ui.webc.fiori.SideNavigationSubItem` component for second-level
     * items, nested inside the items.
     */
    items?:
      | ISideNavigationItem[]
      | ISideNavigationItem
      | AggregationBindingInfo;

    /**
     * Fired when the selection has changed via user interaction
     */
    selectionChange?: Function;
  }
}

declare module "sap/ui/webc/fiori/SideNavigationItem" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import {
    ISideNavigationItem,
    ISideNavigationSubItem,
  } from "sap/ui/webc/fiori/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview:
   *
   * The `sap.ui.webc.fiori.SideNavigationItem` is used within `sap.ui.webc.fiori.SideNavigation` only. Via
   * the `sap.ui.webc.fiori.SideNavigationItem` you control the content of the `SideNavigation`.
   */
  export default class SideNavigationItem
    extends WebComponent
    implements ISideNavigationItem {
    __implements__sap_ui_webc_fiori_ISideNavigationItem: boolean;
    /**
     * Constructor for a new `SideNavigationItem`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SideNavigationItemSettings
    );
    /**
     * Constructor for a new `SideNavigationItem`.
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
      mSettings?: $SideNavigationItemSettings
    );

    /**
     * Adds some item to the aggregation {@link #getItems items}.
     */
    addItem(
      /**
       * The item to add; if empty, nothing is inserted
       */
      oItem: ISideNavigationSubItem
    ): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     */
    destroyItems(): this;
    /**
     * Creates a new subclass of class sap.ui.webc.fiori.SideNavigationItem with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, SideNavigationItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getExpanded expanded}.
     *
     * Defines if the item is expanded
     *
     * Default value is `false`.
     */
    getExpanded(): boolean;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Defines the icon of the item.
     *
     *
     *
     * The SAP-icons font provides numerous options.
     *  See all the available icons in the Icon Explorer.
     *
     * Default value is `empty string`.
     */
    getIcon(): string;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * If you wish to nest menus, you can pass inner menu items to the default slot.
     */
    getItems(): ISideNavigationSubItem[];
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.SideNavigationItem.
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Gets current value of property {@link #getSelected selected}.
     *
     * Defines whether the subitem is selected
     *
     * Default value is `false`.
     */
    getSelected(): boolean;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Defines the text of the item.
     *
     * Default value is `empty string`.
     */
    getText(): string;
    /**
     * Gets current value of property {@link #getWholeItemToggleable wholeItemToggleable}.
     *
     * Defines whether pressing the whole item or only pressing the icon will show/hide the items's sub items(if
     * present). If set to true, pressing the whole item will toggle the sub items, and it won't fire the `click`
     * event. By default, only pressing the arrow icon will toggle the sub items & the click event will be fired
     * if the item is pressed outside of the icon.
     *
     * Default value is `false`.
     */
    getWholeItemToggleable(): boolean;
    /**
     * Checks for the provided `sap.ui.webc.fiori.ISideNavigationSubItem` in the aggregation {@link #getItems
     * items}. and returns its index if found or -1 otherwise.
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: ISideNavigationSubItem
    ): int;
    /**
     * Inserts a item into the aggregation {@link #getItems items}.
     */
    insertItem(
      /**
       * The item to insert; if empty, nothing is inserted
       */
      oItem: ISideNavigationSubItem,
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
    removeAllItems(): ISideNavigationSubItem[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | ISideNavigationSubItem
    ): ISideNavigationSubItem;
    /**
     * Sets a new value for property {@link #getExpanded expanded}.
     *
     * Defines if the item is expanded
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setExpanded(
      /**
       * New value for property `expanded`
       */
      bExpanded?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Defines the icon of the item.
     *
     *
     *
     * The SAP-icons font provides numerous options.
     *  See all the available icons in the Icon Explorer.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setIcon(
      /**
       * New value for property `icon`
       */
      sIcon?: string
    ): this;
    /**
     * Sets a new value for property {@link #getSelected selected}.
     *
     * Defines whether the subitem is selected
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setSelected(
      /**
       * New value for property `selected`
       */
      bSelected?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getText text}.
     *
     * Defines the text of the item.
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
     * Sets a new value for property {@link #getWholeItemToggleable wholeItemToggleable}.
     *
     * Defines whether pressing the whole item or only pressing the icon will show/hide the items's sub items(if
     * present). If set to true, pressing the whole item will toggle the sub items, and it won't fire the `click`
     * event. By default, only pressing the arrow icon will toggle the sub items & the click event will be fired
     * if the item is pressed outside of the icon.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setWholeItemToggleable(
      /**
       * New value for property `wholeItemToggleable`
       */
      bWholeItemToggleable?: boolean
    ): this;
  }

  export interface $SideNavigationItemSettings extends $WebComponentSettings {
    /**
     * Defines if the item is expanded
     */
    expanded?: boolean | PropertyBindingInfo;

    /**
     * Defines the icon of the item.
     *
     *
     *
     * The SAP-icons font provides numerous options.
     *  See all the available icons in the Icon Explorer.
     */
    icon?: string | PropertyBindingInfo;

    /**
     * Defines whether the subitem is selected
     */
    selected?: boolean | PropertyBindingInfo;

    /**
     * Defines the text of the item.
     */
    text?: string | PropertyBindingInfo;

    /**
     * Defines whether pressing the whole item or only pressing the icon will show/hide the items's sub items(if
     * present). If set to true, pressing the whole item will toggle the sub items, and it won't fire the `click`
     * event. By default, only pressing the arrow icon will toggle the sub items & the click event will be fired
     * if the item is pressed outside of the icon.
     */
    wholeItemToggleable?: boolean | PropertyBindingInfo;

    /**
     * If you wish to nest menus, you can pass inner menu items to the default slot.
     */
    items?:
      | ISideNavigationSubItem[]
      | ISideNavigationSubItem
      | AggregationBindingInfo;
  }
}

declare module "sap/ui/webc/fiori/SideNavigationSubItem" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { ISideNavigationSubItem } from "sap/ui/webc/fiori/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview:
   *
   * The `sap.ui.webc.fiori.SideNavigationSubItem` is intended to be used inside a `sap.ui.webc.fiori.SideNavigationItem`
   * only.
   */
  export default class SideNavigationSubItem
    extends WebComponent
    implements ISideNavigationSubItem {
    __implements__sap_ui_webc_fiori_ISideNavigationSubItem: boolean;
    /**
     * Constructor for a new `SideNavigationSubItem`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SideNavigationSubItemSettings
    );
    /**
     * Constructor for a new `SideNavigationSubItem`.
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
      mSettings?: $SideNavigationSubItemSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.SideNavigationSubItem with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, SideNavigationSubItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Defines the icon of the item.
     *
     *
     *
     * The SAP-icons font provides numerous options.
     *  See all the available icons in the Icon Explorer.
     *
     * Default value is `empty string`.
     */
    getIcon(): string;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.SideNavigationSubItem.
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Gets current value of property {@link #getSelected selected}.
     *
     * Defines whether the subitem is selected.
     *
     * Default value is `false`.
     */
    getSelected(): boolean;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Defines the text of the item.
     *
     * Default value is `empty string`.
     */
    getText(): string;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Defines the icon of the item.
     *
     *
     *
     * The SAP-icons font provides numerous options.
     *  See all the available icons in the Icon Explorer.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setIcon(
      /**
       * New value for property `icon`
       */
      sIcon?: string
    ): this;
    /**
     * Sets a new value for property {@link #getSelected selected}.
     *
     * Defines whether the subitem is selected.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setSelected(
      /**
       * New value for property `selected`
       */
      bSelected?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getText text}.
     *
     * Defines the text of the item.
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
  }

  export interface $SideNavigationSubItemSettings
    extends $WebComponentSettings {
    /**
     * Defines the icon of the item.
     *
     *
     *
     * The SAP-icons font provides numerous options.
     *  See all the available icons in the Icon Explorer.
     */
    icon?: string | PropertyBindingInfo;

    /**
     * Defines whether the subitem is selected.
     */
    selected?: boolean | PropertyBindingInfo;

    /**
     * Defines the text of the item.
     */
    text?: string | PropertyBindingInfo;
  }
}

declare module "sap/ui/webc/fiori/Timeline" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { ITimelineItem } from "sap/ui/webc/fiori/library";

  import { CSSSize } from "sap/ui/core/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview:
   *
   * The `sap.ui.webc.fiori.Timeline` component shows entries (such as objects, events, or posts) in chronological
   * order. A common use case is to provide information about changes to an object, or events related to an
   * object. These entries can be generated by the system (for example, value XY changed from A to B), or
   * added manually. There are two distinct variants of the timeline: basic and social. The basic timeline
   * is read-only, while the social timeline offers a high level of interaction and collaboration, and is
   * integrated within SAP Jam.
   */
  export default class Timeline extends WebComponent {
    /**
     * Constructor for a new `Timeline`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TimelineSettings
    );
    /**
     * Constructor for a new `Timeline`.
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
      mSettings?: $TimelineSettings
    );

    /**
     * Adds some item to the aggregation {@link #getItems items}.
     */
    addItem(
      /**
       * The item to add; if empty, nothing is inserted
       */
      oItem: ITimelineItem
    ): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     */
    destroyItems(): this;
    /**
     * Creates a new subclass of class sap.ui.webc.fiori.Timeline with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, Timeline>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getHeight height}.
     *
     * Defines the height of the control
     */
    getHeight(): CSSSize;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * Determines the content of the `sap.ui.webc.fiori.Timeline`.
     */
    getItems(): ITimelineItem[];
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.Timeline.
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Defines the width of the control
     */
    getWidth(): CSSSize;
    /**
     * Checks for the provided `sap.ui.webc.fiori.ITimelineItem` in the aggregation {@link #getItems items}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: ITimelineItem
    ): int;
    /**
     * Inserts a item into the aggregation {@link #getItems items}.
     */
    insertItem(
      /**
       * The item to insert; if empty, nothing is inserted
       */
      oItem: ITimelineItem,
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
    removeAllItems(): ITimelineItem[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | ITimelineItem
    ): ITimelineItem;
    /**
     * Sets a new value for property {@link #getHeight height}.
     *
     * Defines the height of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setHeight(
      /**
       * New value for property `height`
       */
      sHeight?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Defines the width of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth?: CSSSize
    ): this;
  }

  export interface $TimelineSettings extends $WebComponentSettings {
    /**
     * Defines the height of the control
     */
    height?: CSSSize | PropertyBindingInfo;

    /**
     * Defines the width of the control
     */
    width?: CSSSize | PropertyBindingInfo;

    /**
     * Determines the content of the `sap.ui.webc.fiori.Timeline`.
     */
    items?: ITimelineItem[] | ITimelineItem | AggregationBindingInfo;
  }
}

declare module "sap/ui/webc/fiori/TimelineItem" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { ITimelineItem } from "sap/ui/webc/fiori/library";

  import Control from "sap/ui/core/Control";

  import Event from "sap/ui/base/Event";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview:
   *
   * An entry posted on the timeline.
   */
  export default class TimelineItem
    extends WebComponent
    implements ITimelineItem {
    __implements__sap_ui_webc_fiori_ITimelineItem: boolean;
    /**
     * Constructor for a new `TimelineItem`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TimelineItemSettings
    );
    /**
     * Constructor for a new `TimelineItem`.
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
      mSettings?: $TimelineItemSettings
    );

    /**
     * Adds some content to the aggregation {@link #getContent content}.
     */
    addContent(
      /**
       * The content to add; if empty, nothing is inserted
       */
      oContent: Control
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:itemNameClick itemNameClick} event of this `sap.ui.webc.fiori.TimelineItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.TimelineItem` itself.
     *
     * Fired when the item name is pressed either with a click/tap or by using the Enter or Space key.
     *
     *  **Note:** The event will not be fired if the `item-name-clickable` attribute is not set.
     */
    attachItemNameClick(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.TimelineItem` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:itemNameClick itemNameClick} event of this `sap.ui.webc.fiori.TimelineItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.TimelineItem` itself.
     *
     * Fired when the item name is pressed either with a click/tap or by using the Enter or Space key.
     *
     *  **Note:** The event will not be fired if the `item-name-clickable` attribute is not set.
     */
    attachItemNameClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.TimelineItem` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     */
    destroyContent(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:itemNameClick itemNameClick} event of this
     * `sap.ui.webc.fiori.TimelineItem`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachItemNameClick(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.webc.fiori.TimelineItem with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, TimelineItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:itemNameClick itemNameClick} to attached listeners.
     */
    fireItemNameClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Determines the description of the `sap.ui.webc.fiori.TimelineItem`.
     */
    getContent(): Control[];
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Defines the icon to be displayed as graphical element within the `sap.ui.webc.fiori.TimelineItem`. SAP-icons
     * font provides numerous options.
     *
     *
     *
     * See all the available icons in the Icon Explorer.
     *
     * Default value is `empty string`.
     */
    getIcon(): string;
    /**
     * Gets current value of property {@link #getItemName itemName}.
     *
     * Defines the name of the item.
     *
     * Default value is `empty string`.
     */
    getItemName(): string;
    /**
     * Gets current value of property {@link #getItemNameClickable itemNameClickable}.
     *
     * Defines whether the `itemName` is clickable.
     *
     * Default value is `false`.
     */
    getItemNameClickable(): boolean;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.TimelineItem.
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Gets current value of property {@link #getSubtitleText subtitleText}.
     *
     * Defines the subtitle text of the component.
     *
     * Default value is `empty string`.
     */
    getSubtitleText(): string;
    /**
     * Gets current value of property {@link #getTitleText titleText}.
     *
     * Defines the title text of the component.
     *
     * Default value is `empty string`.
     */
    getTitleText(): string;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns
     * its index if found or -1 otherwise.
     */
    indexOfContent(
      /**
       * The content whose index is looked for
       */
      oContent: Control
    ): int;
    /**
     * Inserts a content into the aggregation {@link #getContent content}.
     */
    insertContent(
      /**
       * The content to insert; if empty, nothing is inserted
       */
      oContent: Control,
      /**
       * The `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
       * is inserted at position 0; for a value greater than the current size of the aggregation, the content
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getContent content}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllContent(): Control[];
    /**
     * Removes a content from the aggregation {@link #getContent content}.
     */
    removeContent(
      /**
       * The content to remove or its index or id
       */
      vContent: int | string | Control
    ): Control;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Defines the icon to be displayed as graphical element within the `sap.ui.webc.fiori.TimelineItem`. SAP-icons
     * font provides numerous options.
     *
     *
     *
     * See all the available icons in the Icon Explorer.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setIcon(
      /**
       * New value for property `icon`
       */
      sIcon?: string
    ): this;
    /**
     * Sets a new value for property {@link #getItemName itemName}.
     *
     * Defines the name of the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setItemName(
      /**
       * New value for property `itemName`
       */
      sItemName?: string
    ): this;
    /**
     * Sets a new value for property {@link #getItemNameClickable itemNameClickable}.
     *
     * Defines whether the `itemName` is clickable.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setItemNameClickable(
      /**
       * New value for property `itemNameClickable`
       */
      bItemNameClickable?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSubtitleText subtitleText}.
     *
     * Defines the subtitle text of the component.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setSubtitleText(
      /**
       * New value for property `subtitleText`
       */
      sSubtitleText?: string
    ): this;
    /**
     * Sets a new value for property {@link #getTitleText titleText}.
     *
     * Defines the title text of the component.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setTitleText(
      /**
       * New value for property `titleText`
       */
      sTitleText?: string
    ): this;
  }

  export interface $TimelineItemSettings extends $WebComponentSettings {
    /**
     * Defines the icon to be displayed as graphical element within the `sap.ui.webc.fiori.TimelineItem`. SAP-icons
     * font provides numerous options.
     *
     *
     *
     * See all the available icons in the Icon Explorer.
     */
    icon?: string | PropertyBindingInfo;

    /**
     * Defines the name of the item.
     */
    itemName?: string | PropertyBindingInfo;

    /**
     * Defines whether the `itemName` is clickable.
     */
    itemNameClickable?: boolean | PropertyBindingInfo;

    /**
     * Defines the subtitle text of the component.
     */
    subtitleText?: string | PropertyBindingInfo;

    /**
     * Defines the title text of the component.
     */
    titleText?: string | PropertyBindingInfo;

    /**
     * Determines the description of the `sap.ui.webc.fiori.TimelineItem`.
     */
    content?: Control[] | Control | AggregationBindingInfo;

    /**
     * Fired when the item name is pressed either with a click/tap or by using the Enter or Space key.
     *
     *  **Note:** The event will not be fired if the `item-name-clickable` attribute is not set.
     */
    itemNameClick?: Function;
  }
}

declare module "sap/ui/webc/fiori/UploadCollection" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import Control from "sap/ui/core/Control";

  import { IUploadCollectionItem } from "sap/ui/webc/fiori/library";

  import Event from "sap/ui/base/Event";

  import { CSSSize } from "sap/ui/core/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import { ListMode } from "sap/ui/webc/main/library";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview: This component allows you to represent files before uploading them to a server, with the help
   * of `sap.ui.webc.fiori.UploadCollectionItem`. It also allows you to show already uploaded files.
   */
  export default class UploadCollection extends WebComponent {
    /**
     * Constructor for a new `UploadCollection`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $UploadCollectionSettings
    );
    /**
     * Constructor for a new `UploadCollection`.
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
      mSettings?: $UploadCollectionSettings
    );

    /**
     * Adds some header to the aggregation {@link #getHeader header}.
     */
    addHeader(
      /**
       * The header to add; if empty, nothing is inserted
       */
      oHeader: Control
    ): this;
    /**
     * Adds some item to the aggregation {@link #getItems items}.
     */
    addItem(
      /**
       * The item to add; if empty, nothing is inserted
       */
      oItem: IUploadCollectionItem
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:drop drop} event of this `sap.ui.webc.fiori.UploadCollection`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollection` itself.
     *
     * Fired when an element is dropped inside the drag and drop overlay.
     *
     *  **Note:** The `drop` event is fired only when elements are dropped within the drag and drop overlay
     * and ignored for the other parts of the `sap.ui.webc.fiori.UploadCollection`.
     */
    attachDrop(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollection`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:drop drop} event of this `sap.ui.webc.fiori.UploadCollection`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollection` itself.
     *
     * Fired when an element is dropped inside the drag and drop overlay.
     *
     *  **Note:** The `drop` event is fired only when elements are dropped within the drag and drop overlay
     * and ignored for the other parts of the `sap.ui.webc.fiori.UploadCollection`.
     */
    attachDrop(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollection`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:fileDeleted fileDeleted} event of this `sap.ui.webc.fiori.UploadCollection`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollection` itself.
     *
     * Fired when the Delete button of any item is pressed.
     *
     *  **Note:** A Delete button is displayed on each item, when the `sap.ui.webc.fiori.UploadCollection` `mode`
     * property is set to `Delete`.
     */
    attachFileDeleted(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollection`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:fileDeleted fileDeleted} event of this `sap.ui.webc.fiori.UploadCollection`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollection` itself.
     *
     * Fired when the Delete button of any item is pressed.
     *
     *  **Note:** A Delete button is displayed on each item, when the `sap.ui.webc.fiori.UploadCollection` `mode`
     * property is set to `Delete`.
     */
    attachFileDeleted(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollection`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this
     * `sap.ui.webc.fiori.UploadCollection`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollection` itself.
     *
     * Fired when selection is changed by user interaction in `SingleSelect` and `MultiSelect` modes.
     */
    attachSelectionChange(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollection`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this
     * `sap.ui.webc.fiori.UploadCollection`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollection` itself.
     *
     * Fired when selection is changed by user interaction in `SingleSelect` and `MultiSelect` modes.
     */
    attachSelectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollection`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the header in the aggregation {@link #getHeader header}.
     */
    destroyHeader(): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     */
    destroyItems(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:drop drop} event of this `sap.ui.webc.fiori.UploadCollection`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachDrop(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:fileDeleted fileDeleted} event of this `sap.ui.webc.fiori.UploadCollection`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachFileDeleted(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:selectionChange selectionChange} event of
     * this `sap.ui.webc.fiori.UploadCollection`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachSelectionChange(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.webc.fiori.UploadCollection with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, UploadCollection>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:drop drop} to attached listeners.
     */
    fireDrop(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The `drop` event operation data.
         */
        dataTransfer?: DataTransfer;
      }
    ): this;
    /**
     * Fires event {@link #event:fileDeleted fileDeleted} to attached listeners.
     */
    fireFileDeleted(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The `sap.ui.webc.fiori.UploadCollectionItem` which was renamed.
         */
        item?: HTMLElement;
      }
    ): this;
    /**
     * Fires event {@link #event:selectionChange selectionChange} to attached listeners.
     */
    fireSelectionChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * An array of the selected items.
         */
        selectedItems?: any[];
      }
    ): this;
    /**
     * Gets content of aggregation {@link #getHeader header}.
     *
     * Defines the `sap.ui.webc.fiori.UploadCollection` header.
     */
    getHeader(): Control[];
    /**
     * Gets current value of property {@link #getHeight height}.
     *
     * Defines the height of the control
     */
    getHeight(): CSSSize;
    /**
     * Gets current value of property {@link #getHideDragOverlay hideDragOverlay}.
     *
     * By default there will be drag and drop overlay shown over the `sap.ui.webc.fiori.UploadCollection` when
     * files are dragged. If you don't intend to use drag and drop, set this property.
     *
     *  **Note:** It is up to the application developer to add handler for `drop` event and handle it. `sap.ui.webc.fiori.UploadCollection`
     * only displays an overlay.
     *
     * Default value is `false`.
     */
    getHideDragOverlay(): boolean;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * Defines the items of the `sap.ui.webc.fiori.UploadCollection`.
     *  **Note:** Use `sap.ui.webc.fiori.UploadCollectionItem` for the intended design.
     */
    getItems(): IUploadCollectionItem[];
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.UploadCollection.
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Gets current value of property {@link #getMode mode}.
     *
     * Defines the mode of the `sap.ui.webc.fiori.UploadCollection`.
     *
     *
     *
     *  **Note:**
     * 	 - `None`
     * 	 - `SingleSelect`
     * 	 - `MultiSelect`
     * 	 - `Delete`
     *
     * Default value is `None`.
     */
    getMode(): ListMode | keyof typeof ListMode;
    /**
     * Gets current value of property {@link #getNoDataDescription noDataDescription}.
     *
     * Allows you to set your own text for the 'No data' description.
     *
     * Default value is `empty string`.
     */
    getNoDataDescription(): string;
    /**
     * Gets current value of property {@link #getNoDataText noDataText}.
     *
     * Allows you to set your own text for the 'No data' text.
     *
     * Default value is `empty string`.
     */
    getNoDataText(): string;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Defines the width of the control
     */
    getWidth(): CSSSize;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getHeader header}. and returns
     * its index if found or -1 otherwise.
     */
    indexOfHeader(
      /**
       * The header whose index is looked for
       */
      oHeader: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.webc.fiori.IUploadCollectionItem` in the aggregation {@link #getItems
     * items}. and returns its index if found or -1 otherwise.
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: IUploadCollectionItem
    ): int;
    /**
     * Inserts a header into the aggregation {@link #getHeader header}.
     */
    insertHeader(
      /**
       * The header to insert; if empty, nothing is inserted
       */
      oHeader: Control,
      /**
       * The `0`-based index the header should be inserted at; for a negative value of `iIndex`, the header is
       * inserted at position 0; for a value greater than the current size of the aggregation, the header is inserted
       * at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a item into the aggregation {@link #getItems items}.
     */
    insertItem(
      /**
       * The item to insert; if empty, nothing is inserted
       */
      oItem: IUploadCollectionItem,
      /**
       * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
       * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getHeader header}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllHeader(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllItems(): IUploadCollectionItem[];
    /**
     * Removes a header from the aggregation {@link #getHeader header}.
     */
    removeHeader(
      /**
       * The header to remove or its index or id
       */
      vHeader: int | string | Control
    ): Control;
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | IUploadCollectionItem
    ): IUploadCollectionItem;
    /**
     * Sets a new value for property {@link #getHeight height}.
     *
     * Defines the height of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setHeight(
      /**
       * New value for property `height`
       */
      sHeight?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getHideDragOverlay hideDragOverlay}.
     *
     * By default there will be drag and drop overlay shown over the `sap.ui.webc.fiori.UploadCollection` when
     * files are dragged. If you don't intend to use drag and drop, set this property.
     *
     *  **Note:** It is up to the application developer to add handler for `drop` event and handle it. `sap.ui.webc.fiori.UploadCollection`
     * only displays an overlay.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setHideDragOverlay(
      /**
       * New value for property `hideDragOverlay`
       */
      bHideDragOverlay?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getMode mode}.
     *
     * Defines the mode of the `sap.ui.webc.fiori.UploadCollection`.
     *
     *
     *
     *  **Note:**
     * 	 - `None`
     * 	 - `SingleSelect`
     * 	 - `MultiSelect`
     * 	 - `Delete`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     */
    setMode(
      /**
       * New value for property `mode`
       */
      sMode?: ListMode | keyof typeof ListMode
    ): this;
    /**
     * Sets a new value for property {@link #getNoDataDescription noDataDescription}.
     *
     * Allows you to set your own text for the 'No data' description.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setNoDataDescription(
      /**
       * New value for property `noDataDescription`
       */
      sNoDataDescription?: string
    ): this;
    /**
     * Sets a new value for property {@link #getNoDataText noDataText}.
     *
     * Allows you to set your own text for the 'No data' text.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setNoDataText(
      /**
       * New value for property `noDataText`
       */
      sNoDataText?: string
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Defines the width of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth?: CSSSize
    ): this;
  }

  export interface $UploadCollectionSettings extends $WebComponentSettings {
    /**
     * Defines the height of the control
     */
    height?: CSSSize | PropertyBindingInfo;

    /**
     * By default there will be drag and drop overlay shown over the `sap.ui.webc.fiori.UploadCollection` when
     * files are dragged. If you don't intend to use drag and drop, set this property.
     *
     *  **Note:** It is up to the application developer to add handler for `drop` event and handle it. `sap.ui.webc.fiori.UploadCollection`
     * only displays an overlay.
     */
    hideDragOverlay?: boolean | PropertyBindingInfo;

    /**
     * Defines the mode of the `sap.ui.webc.fiori.UploadCollection`.
     *
     *
     *
     *  **Note:**
     * 	 - `None`
     * 	 - `SingleSelect`
     * 	 - `MultiSelect`
     * 	 - `Delete`
     */
    mode?: (ListMode | keyof typeof ListMode) | PropertyBindingInfo;

    /**
     * Allows you to set your own text for the 'No data' description.
     */
    noDataDescription?: string | PropertyBindingInfo;

    /**
     * Allows you to set your own text for the 'No data' text.
     */
    noDataText?: string | PropertyBindingInfo;

    /**
     * Defines the width of the control
     */
    width?: CSSSize | PropertyBindingInfo;

    /**
     * Defines the `sap.ui.webc.fiori.UploadCollection` header.
     */
    header?: Control[] | Control | AggregationBindingInfo;

    /**
     * Defines the items of the `sap.ui.webc.fiori.UploadCollection`.
     *  **Note:** Use `sap.ui.webc.fiori.UploadCollectionItem` for the intended design.
     */
    items?:
      | IUploadCollectionItem[]
      | IUploadCollectionItem
      | AggregationBindingInfo;

    /**
     * Fired when an element is dropped inside the drag and drop overlay.
     *
     *  **Note:** The `drop` event is fired only when elements are dropped within the drag and drop overlay
     * and ignored for the other parts of the `sap.ui.webc.fiori.UploadCollection`.
     */
    drop?: Function;

    /**
     * Fired when the Delete button of any item is pressed.
     *
     *  **Note:** A Delete button is displayed on each item, when the `sap.ui.webc.fiori.UploadCollection` `mode`
     * property is set to `Delete`.
     */
    fileDeleted?: Function;

    /**
     * Fired when selection is changed by user interaction in `SingleSelect` and `MultiSelect` modes.
     */
    selectionChange?: Function;
  }
}

declare module "sap/ui/webc/fiori/UploadCollectionItem" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import {
    IUploadCollectionItem,
    UploadState,
  } from "sap/ui/webc/fiori/library";

  import Control from "sap/ui/core/Control";

  import Event from "sap/ui/base/Event";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview: A component to be used within the `sap.ui.webc.fiori.UploadCollection`.
   */
  export default class UploadCollectionItem
    extends WebComponent
    implements IUploadCollectionItem {
    __implements__sap_ui_webc_fiori_IUploadCollectionItem: boolean;
    /**
     * Constructor for a new `UploadCollectionItem`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $UploadCollectionItemSettings
    );
    /**
     * Constructor for a new `UploadCollectionItem`.
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
      mSettings?: $UploadCollectionItemSettings
    );

    /**
     * Adds some content to the aggregation {@link #getContent content}.
     */
    addContent(
      /**
       * The content to add; if empty, nothing is inserted
       */
      oContent: Control
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:fileNameClick fileNameClick} event of this `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollectionItem` itself.
     *
     * Fired when the file name is clicked.
     *
     *  **Note:** This event is only available when `fileNameClickable` property is `true`.
     */
    attachFileNameClick(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollectionItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:fileNameClick fileNameClick} event of this `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollectionItem` itself.
     *
     * Fired when the file name is clicked.
     *
     *  **Note:** This event is only available when `fileNameClickable` property is `true`.
     */
    attachFileNameClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollectionItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:rename rename} event of this `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollectionItem` itself.
     *
     * Fired when the `fileName` property gets changed.
     *
     *  **Note:** An edit button is displayed on each item, when the `sap.ui.webc.fiori.UploadCollectionItem`
     * `type` property is set to `Detail`.
     */
    attachRename(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollectionItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:rename rename} event of this `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollectionItem` itself.
     *
     * Fired when the `fileName` property gets changed.
     *
     *  **Note:** An edit button is displayed on each item, when the `sap.ui.webc.fiori.UploadCollectionItem`
     * `type` property is set to `Detail`.
     */
    attachRename(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollectionItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:retry retry} event of this `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollectionItem` itself.
     *
     * Fired when the retry button is pressed.
     *
     *  **Note:** Retry button is displayed when `uploadState` property is set to `Error`.
     */
    attachRetry(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollectionItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:retry retry} event of this `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollectionItem` itself.
     *
     * Fired when the retry button is pressed.
     *
     *  **Note:** Retry button is displayed when `uploadState` property is set to `Error`.
     */
    attachRetry(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollectionItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:terminate terminate} event of this `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollectionItem` itself.
     *
     * Fired when the terminate button is pressed.
     *
     *  **Note:** Terminate button is displayed when `uploadState` property is set to `Uploading`.
     */
    attachTerminate(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollectionItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:terminate terminate} event of this `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollectionItem` itself.
     *
     * Fired when the terminate button is pressed.
     *
     *  **Note:** Terminate button is displayed when `uploadState` property is set to `Uploading`.
     */
    attachTerminate(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollectionItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     */
    destroyContent(): this;
    /**
     * Destroys the thumbnail in the aggregation {@link #getThumbnail thumbnail}.
     */
    destroyThumbnail(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:fileNameClick fileNameClick} event of this
     * `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachFileNameClick(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:rename rename} event of this `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachRename(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:retry retry} event of this `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachRetry(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:terminate terminate} event of this `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachTerminate(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.webc.fiori.UploadCollectionItem with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, UploadCollectionItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:fileNameClick fileNameClick} to attached listeners.
     */
    fireFileNameClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:rename rename} to attached listeners.
     */
    fireRename(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:retry retry} to attached listeners.
     */
    fireRetry(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:terminate terminate} to attached listeners.
     */
    fireTerminate(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Hold the description of the `sap.ui.webc.fiori.UploadCollectionItem`. Will be shown below the file name.
     */
    getContent(): Control[];
    /**
     * Gets current value of property {@link #getFile file}.
     *
     * Holds `File`, associated with this item.
     */
    getFile(): object;
    /**
     * Gets current value of property {@link #getFileName fileName}.
     *
     * The name of the file.
     *
     * Default value is `empty string`.
     */
    getFileName(): string;
    /**
     * Gets current value of property {@link #getFileNameClickable fileNameClickable}.
     *
     * If set to `true` the file name will be clickable and it will fire `file-name-click` event upon click.
     *
     * Default value is `false`.
     */
    getFileNameClickable(): boolean;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.UploadCollectionItem.
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Gets current value of property {@link #getNoDelete noDelete}.
     *
     * Removes delete option from `sap.ui.webc.fiori.UploadCollection` with `mode` `Delete` for this item.
     *
     * Default value is `false`.
     */
    getNoDelete(): boolean;
    /**
     * Gets current value of property {@link #getNoRetry noRetry}.
     *
     * Hides the retry button when `uploadState` property is `Error`.
     *
     * Default value is `false`.
     */
    getNoRetry(): boolean;
    /**
     * Gets current value of property {@link #getNoTerminate noTerminate}.
     *
     * Hides the terminate button when `uploadState` property is `Uploading`.
     *
     * Default value is `false`.
     */
    getNoTerminate(): boolean;
    /**
     * Gets current value of property {@link #getProgress progress}.
     *
     * The upload progress in percentage.
     *
     *  **Note:** Expected values are in the interval [0, 100].
     *
     * Default value is `0`.
     */
    getProgress(): int;
    /**
     * Gets content of aggregation {@link #getThumbnail thumbnail}.
     *
     * A thumbnail, which will be shown in the beginning of the `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     *  **Note:** Use `sap.ui.webc.main.Icon` or `img` for the intended design.
     */
    getThumbnail(): Control;
    /**
     * Gets current value of property {@link #getUploadState uploadState}.
     *
     * If set to `Uploading` or `Error`, a progress indicator showing the `progress` is displayed. Also if set
     * to `Error`, a refresh button is shown. When this icon is pressed `retry` event is fired. If set to `Uploading`,
     * a terminate button is shown. When this icon is pressed `terminate` event is fired.
     *
     * Default value is `Ready`.
     */
    getUploadState(): UploadState | keyof typeof UploadState;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns
     * its index if found or -1 otherwise.
     */
    indexOfContent(
      /**
       * The content whose index is looked for
       */
      oContent: Control
    ): int;
    /**
     * Inserts a content into the aggregation {@link #getContent content}.
     */
    insertContent(
      /**
       * The content to insert; if empty, nothing is inserted
       */
      oContent: Control,
      /**
       * The `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
       * is inserted at position 0; for a value greater than the current size of the aggregation, the content
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getContent content}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllContent(): Control[];
    /**
     * Removes a content from the aggregation {@link #getContent content}.
     */
    removeContent(
      /**
       * The content to remove or its index or id
       */
      vContent: int | string | Control
    ): Control;
    /**
     * Sets a new value for property {@link #getFile file}.
     *
     * Holds `File`, associated with this item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setFile(
      /**
       * New value for property `file`
       */
      oFile?: object
    ): this;
    /**
     * Sets a new value for property {@link #getFileName fileName}.
     *
     * The name of the file.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setFileName(
      /**
       * New value for property `fileName`
       */
      sFileName?: string
    ): this;
    /**
     * Sets a new value for property {@link #getFileNameClickable fileNameClickable}.
     *
     * If set to `true` the file name will be clickable and it will fire `file-name-click` event upon click.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setFileNameClickable(
      /**
       * New value for property `fileNameClickable`
       */
      bFileNameClickable?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getNoDelete noDelete}.
     *
     * Removes delete option from `sap.ui.webc.fiori.UploadCollection` with `mode` `Delete` for this item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setNoDelete(
      /**
       * New value for property `noDelete`
       */
      bNoDelete?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getNoRetry noRetry}.
     *
     * Hides the retry button when `uploadState` property is `Error`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setNoRetry(
      /**
       * New value for property `noRetry`
       */
      bNoRetry?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getNoTerminate noTerminate}.
     *
     * Hides the terminate button when `uploadState` property is `Uploading`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setNoTerminate(
      /**
       * New value for property `noTerminate`
       */
      bNoTerminate?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getProgress progress}.
     *
     * The upload progress in percentage.
     *
     *  **Note:** Expected values are in the interval [0, 100].
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     */
    setProgress(
      /**
       * New value for property `progress`
       */
      iProgress?: int
    ): this;
    /**
     * Sets the aggregated {@link #getThumbnail thumbnail}.
     */
    setThumbnail(
      /**
       * The thumbnail to set
       */
      oThumbnail: Control
    ): this;
    /**
     * Sets a new value for property {@link #getUploadState uploadState}.
     *
     * If set to `Uploading` or `Error`, a progress indicator showing the `progress` is displayed. Also if set
     * to `Error`, a refresh button is shown. When this icon is pressed `retry` event is fired. If set to `Uploading`,
     * a terminate button is shown. When this icon is pressed `terminate` event is fired.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Ready`.
     */
    setUploadState(
      /**
       * New value for property `uploadState`
       */
      sUploadState?: UploadState | keyof typeof UploadState
    ): this;
  }

  export interface $UploadCollectionItemSettings extends $WebComponentSettings {
    /**
     * Holds `File`, associated with this item.
     */
    file?: object | PropertyBindingInfo;

    /**
     * The name of the file.
     */
    fileName?: string | PropertyBindingInfo;

    /**
     * If set to `true` the file name will be clickable and it will fire `file-name-click` event upon click.
     */
    fileNameClickable?: boolean | PropertyBindingInfo;

    /**
     * Removes delete option from `sap.ui.webc.fiori.UploadCollection` with `mode` `Delete` for this item.
     */
    noDelete?: boolean | PropertyBindingInfo;

    /**
     * Hides the retry button when `uploadState` property is `Error`.
     */
    noRetry?: boolean | PropertyBindingInfo;

    /**
     * Hides the terminate button when `uploadState` property is `Uploading`.
     */
    noTerminate?: boolean | PropertyBindingInfo;

    /**
     * The upload progress in percentage.
     *
     *  **Note:** Expected values are in the interval [0, 100].
     */
    progress?: int | PropertyBindingInfo;

    /**
     * If set to `Uploading` or `Error`, a progress indicator showing the `progress` is displayed. Also if set
     * to `Error`, a refresh button is shown. When this icon is pressed `retry` event is fired. If set to `Uploading`,
     * a terminate button is shown. When this icon is pressed `terminate` event is fired.
     */
    uploadState?:
      | (UploadState | keyof typeof UploadState)
      | PropertyBindingInfo;

    /**
     * Hold the description of the `sap.ui.webc.fiori.UploadCollectionItem`. Will be shown below the file name.
     */
    content?: Control[] | Control | AggregationBindingInfo;

    /**
     * A thumbnail, which will be shown in the beginning of the `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     *  **Note:** Use `sap.ui.webc.main.Icon` or `img` for the intended design.
     */
    thumbnail?: Control;

    /**
     * Fired when the file name is clicked.
     *
     *  **Note:** This event is only available when `fileNameClickable` property is `true`.
     */
    fileNameClick?: Function;

    /**
     * Fired when the `fileName` property gets changed.
     *
     *  **Note:** An edit button is displayed on each item, when the `sap.ui.webc.fiori.UploadCollectionItem`
     * `type` property is set to `Detail`.
     */
    rename?: Function;

    /**
     * Fired when the retry button is pressed.
     *
     *  **Note:** Retry button is displayed when `uploadState` property is set to `Error`.
     */
    retry?: Function;

    /**
     * Fired when the terminate button is pressed.
     *
     *  **Note:** Terminate button is displayed when `uploadState` property is set to `Uploading`.
     */
    terminate?: Function;
  }
}

declare module "sap/ui/webc/fiori/Wizard" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { IWizardStep } from "sap/ui/webc/fiori/library";

  import Event from "sap/ui/base/Event";

  import { CSSSize } from "sap/ui/core/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview:
   *
   * The `sap.ui.webc.fiori.Wizard` helps users complete a complex task by dividing it into sections and guiding
   * the user through it. It has two main areas - a navigation area at the top showing the step sequence and
   * a content area below it.
   *
   * Structure: Navigation area: The top most area of the `sap.ui.webc.fiori.Wizard` is occupied by the navigation
   * area. It shows the sequence of steps, where the recommended number of steps is between 3 and 8 steps.
   *
   * 	 -  Steps can have different visual representations - numbers or icons.  Steps might have labels
   * 			for better readability - titleText and subTitleText.
   * 	 -  Steps are defined by using the `sap.ui.webc.fiori.WizardStep` as slotted element within the `sap.ui.webc.fiori.Wizard`
   *
   *
   * **Note:** If no selected step is defined, the first step will be auto selected.
   *  **Note:** If multiple selected steps are defined, the last step will be selected.
   *
   * Content: The content occupies the main part of the page. It can hold any type of HTML elements. It's
   * defined by using the `sap.ui.webc.fiori.WizardStep` as slotted element within the `sap.ui.webc.fiori.Wizard`.
   *
   * Scrolling: The component handles user scrolling by selecting the closest step, based on the current scroll
   * position and scrolls to particular place, when the user clicks on the step within the navigation area.
   *
   *
   *
   *
   * **Important:** In order the component's scrolling behaviour to work, it has to be limited from the outside
   * parent element in terms of height. The component or its parent has to be given percentage or absolute
   * height. Otherwise, the component will be scrolled out with the entire page.
   *
   *  **For example:**
   *
   *  `<ui5-dialog style="height: 80%">
   *  ` `	<ui5-wizard></ui5-wizard>
   *  ` `</ui5-dialog>`
   *
   * Moving to next step: The `sap.ui.webc.fiori.WizardStep` provides the necessary API and it's up to the
   * user of the component to use it to move to the next step. You have to set its `selected` property (and
   * remove the `disabled` one if set) to `true`. And, the `sap.ui.webc.fiori.Wizard` will automatically scroll
   * to the content of the newly selected step.
   *
   *
   *
   * The Fiori 3 guidelines recommends having a "nextStep" button in the content area. You can place a button,
   * or any other type of element to trigger step change, inside the `sap.ui.webc.fiori.WizardStep`, and show/hide
   * it when certain fields are filled or user defined criteria is met.
   *
   * Usage: When to use:: When the user has to accomplish a long set of tasks.
   *
   * When not to use:: When the task has less than 3 steps.
   *
   * Responsive Behavior: On small widths the step's titleText, subtitleText and separators in the navigation
   * area will start truncate and shrink and from particular point they will hide to free as much space as
   * possible.
   */
  export default class Wizard extends WebComponent {
    /**
     * Constructor for a new `Wizard`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $WizardSettings
    );
    /**
     * Constructor for a new `Wizard`.
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
      mSettings?: $WizardSettings
    );

    /**
     * Adds some step to the aggregation {@link #getSteps steps}.
     */
    addStep(
      /**
       * The step to add; if empty, nothing is inserted
       */
      oStep: IWizardStep
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:stepChange stepChange} event of this `sap.ui.webc.fiori.Wizard`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.Wizard` itself.
     *
     * Fired when the step is changed by user interaction - either with scrolling, or by clicking on the steps
     * within the component header.
     */
    attachStepChange(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.Wizard` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:stepChange stepChange} event of this `sap.ui.webc.fiori.Wizard`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.Wizard` itself.
     *
     * Fired when the step is changed by user interaction - either with scrolling, or by clicking on the steps
     * within the component header.
     */
    attachStepChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.Wizard` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the steps in the aggregation {@link #getSteps steps}.
     */
    destroySteps(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:stepChange stepChange} event of this `sap.ui.webc.fiori.Wizard`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachStepChange(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.webc.fiori.Wizard with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, Wizard>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:stepChange stepChange} to attached listeners.
     */
    fireStepChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * the new step
         */
        step?: HTMLElement;
        /**
         * the previous step
         */
        previousStep?: HTMLElement;
        /**
         * the step change occurs due to user's click or 'Enter'/'Space' key press on step within the navigation
         */
        changeWithClick?: boolean;
      }
    ): this;
    /**
     * Gets current value of property {@link #getHeight height}.
     *
     * Defines the height of the control
     */
    getHeight(): CSSSize;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.Wizard.
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Gets content of aggregation {@link #getSteps steps}.
     *
     * Defines the steps.
     *
     *  **Note:** Use the available `sap.ui.webc.fiori.WizardStep` component.
     */
    getSteps(): IWizardStep[];
    /**
     * Checks for the provided `sap.ui.webc.fiori.IWizardStep` in the aggregation {@link #getSteps steps}. and
     * returns its index if found or -1 otherwise.
     */
    indexOfStep(
      /**
       * The step whose index is looked for
       */
      oStep: IWizardStep
    ): int;
    /**
     * Inserts a step into the aggregation {@link #getSteps steps}.
     */
    insertStep(
      /**
       * The step to insert; if empty, nothing is inserted
       */
      oStep: IWizardStep,
      /**
       * The `0`-based index the step should be inserted at; for a negative value of `iIndex`, the step is inserted
       * at position 0; for a value greater than the current size of the aggregation, the step is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getSteps steps}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllSteps(): IWizardStep[];
    /**
     * Removes a step from the aggregation {@link #getSteps steps}.
     */
    removeStep(
      /**
       * The step to remove or its index or id
       */
      vStep: int | string | IWizardStep
    ): IWizardStep;
    /**
     * Sets a new value for property {@link #getHeight height}.
     *
     * Defines the height of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setHeight(
      /**
       * New value for property `height`
       */
      sHeight?: CSSSize
    ): this;
  }

  export interface $WizardSettings extends $WebComponentSettings {
    /**
     * Defines the height of the control
     */
    height?: CSSSize | PropertyBindingInfo;

    /**
     * Defines the steps.
     *
     *  **Note:** Use the available `sap.ui.webc.fiori.WizardStep` component.
     */
    steps?: IWizardStep[] | IWizardStep | AggregationBindingInfo;

    /**
     * Fired when the step is changed by user interaction - either with scrolling, or by clicking on the steps
     * within the component header.
     */
    stepChange?: Function;
  }
}

declare module "sap/ui/webc/fiori/WizardStep" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { IWizardStep } from "sap/ui/webc/fiori/library";

  import Control from "sap/ui/core/Control";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview:
   *
   * A component that represents a logical step as part of the `sap.ui.webc.fiori.Wizard`. It is meant to
   * aggregate arbitrary HTML elements that forms the content of a single step.
   *
   * Structure:
   * 	 - Each wizard step has arbitrary content
   * 	 - Each wizard step might have texts - defined by the `titleText` and `subtitleText` properties
   * 	 - Each wizard step might have an icon - defined by the `icon` property
   * 	 - Each wizard step might display a number in place of the `icon`, when it's missing
   *
   * Usage: The `sap.ui.webc.fiori.WizardStep` component should be used only as slot of the `sap.ui.webc.fiori.Wizard`
   * component and should not be used standalone.
   */
  export default class WizardStep extends WebComponent implements IWizardStep {
    __implements__sap_ui_webc_fiori_IWizardStep: boolean;
    /**
     * Constructor for a new `WizardStep`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $WizardStepSettings
    );
    /**
     * Constructor for a new `WizardStep`.
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
      mSettings?: $WizardStepSettings
    );

    /**
     * Adds some content to the aggregation {@link #getContent content}.
     */
    addContent(
      /**
       * The content to add; if empty, nothing is inserted
       */
      oContent: Control
    ): this;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     */
    destroyContent(): this;
    /**
     * Creates a new subclass of class sap.ui.webc.fiori.WizardStep with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, WizardStep>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getBranching branching}.
     *
     * When `branching` is enabled a dashed line would be displayed after the step, meant to indicate that the
     * next step is not yet known and depends on user choice in the current step.
     *
     *
     *
     * **Note:** It is recommended to use `branching` on the last known step and later add new steps when it
     * becomes clear how the wizard flow should continue.
     *
     * Default value is `false`.
     */
    getBranching(): boolean;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Defines the step content.
     */
    getContent(): Control[];
    /**
     * Gets current value of property {@link #getDisabled disabled}.
     *
     * Defines if the step is `disabled`. When disabled the step is displayed, but the user can't select the
     * step by clicking or navigate to it with scrolling.
     *
     *
     *
     * **Note:** Step can't be `selected` and `disabled` at the same time. In this case the `selected` property
     * would take precedence.
     *
     * Default value is `false`.
     */
    getDisabled(): boolean;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Defines the `icon` of the step.
     *
     *
     *
     * **Note:** the icon is displayed in the `sap.ui.webc.fiori.Wizard` navigation header.
     *
     *
     *
     * The SAP-icons font provides numerous options. See all the available icons in the Icon Explorer.
     *
     * Default value is `empty string`.
     */
    getIcon(): string;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.WizardStep.
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Gets current value of property {@link #getSelected selected}.
     *
     * Defines the step's `selected` state - the step that is currently active.
     *
     *
     *
     * **Note:** Step can't be `selected` and `disabled` at the same time. In this case the `selected` property
     * would take precedence.
     *
     * Default value is `false`.
     */
    getSelected(): boolean;
    /**
     * Gets current value of property {@link #getSubtitleText subtitleText}.
     *
     * Defines the `subtitleText` of the step.
     *
     *
     *
     * **Note:** the text is displayed in the `sap.ui.webc.fiori.Wizard` navigation header.
     *  **Note:** the text will hide on small sizes (about 559 px).
     *
     * Default value is `empty string`.
     */
    getSubtitleText(): string;
    /**
     * Gets current value of property {@link #getTitleText titleText}.
     *
     * Defines the `titleText` of the step.
     *
     *
     *
     * **Note:** the text is displayed in the `sap.ui.webc.fiori.Wizard` navigation header.
     *  **Note:** the text will hide on small sizes (about 559 px).
     *
     * Default value is `empty string`.
     */
    getTitleText(): string;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns
     * its index if found or -1 otherwise.
     */
    indexOfContent(
      /**
       * The content whose index is looked for
       */
      oContent: Control
    ): int;
    /**
     * Inserts a content into the aggregation {@link #getContent content}.
     */
    insertContent(
      /**
       * The content to insert; if empty, nothing is inserted
       */
      oContent: Control,
      /**
       * The `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
       * is inserted at position 0; for a value greater than the current size of the aggregation, the content
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getContent content}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllContent(): Control[];
    /**
     * Removes a content from the aggregation {@link #getContent content}.
     */
    removeContent(
      /**
       * The content to remove or its index or id
       */
      vContent: int | string | Control
    ): Control;
    /**
     * Sets a new value for property {@link #getBranching branching}.
     *
     * When `branching` is enabled a dashed line would be displayed after the step, meant to indicate that the
     * next step is not yet known and depends on user choice in the current step.
     *
     *
     *
     * **Note:** It is recommended to use `branching` on the last known step and later add new steps when it
     * becomes clear how the wizard flow should continue.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setBranching(
      /**
       * New value for property `branching`
       */
      bBranching?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getDisabled disabled}.
     *
     * Defines if the step is `disabled`. When disabled the step is displayed, but the user can't select the
     * step by clicking or navigate to it with scrolling.
     *
     *
     *
     * **Note:** Step can't be `selected` and `disabled` at the same time. In this case the `selected` property
     * would take precedence.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setDisabled(
      /**
       * New value for property `disabled`
       */
      bDisabled?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Defines the `icon` of the step.
     *
     *
     *
     * **Note:** the icon is displayed in the `sap.ui.webc.fiori.Wizard` navigation header.
     *
     *
     *
     * The SAP-icons font provides numerous options. See all the available icons in the Icon Explorer.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setIcon(
      /**
       * New value for property `icon`
       */
      sIcon?: string
    ): this;
    /**
     * Sets a new value for property {@link #getSelected selected}.
     *
     * Defines the step's `selected` state - the step that is currently active.
     *
     *
     *
     * **Note:** Step can't be `selected` and `disabled` at the same time. In this case the `selected` property
     * would take precedence.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setSelected(
      /**
       * New value for property `selected`
       */
      bSelected?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSubtitleText subtitleText}.
     *
     * Defines the `subtitleText` of the step.
     *
     *
     *
     * **Note:** the text is displayed in the `sap.ui.webc.fiori.Wizard` navigation header.
     *  **Note:** the text will hide on small sizes (about 559 px).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setSubtitleText(
      /**
       * New value for property `subtitleText`
       */
      sSubtitleText?: string
    ): this;
    /**
     * Sets a new value for property {@link #getTitleText titleText}.
     *
     * Defines the `titleText` of the step.
     *
     *
     *
     * **Note:** the text is displayed in the `sap.ui.webc.fiori.Wizard` navigation header.
     *  **Note:** the text will hide on small sizes (about 559 px).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setTitleText(
      /**
       * New value for property `titleText`
       */
      sTitleText?: string
    ): this;
  }

  export interface $WizardStepSettings extends $WebComponentSettings {
    /**
     * When `branching` is enabled a dashed line would be displayed after the step, meant to indicate that the
     * next step is not yet known and depends on user choice in the current step.
     *
     *
     *
     * **Note:** It is recommended to use `branching` on the last known step and later add new steps when it
     * becomes clear how the wizard flow should continue.
     */
    branching?: boolean | PropertyBindingInfo;

    /**
     * Defines if the step is `disabled`. When disabled the step is displayed, but the user can't select the
     * step by clicking or navigate to it with scrolling.
     *
     *
     *
     * **Note:** Step can't be `selected` and `disabled` at the same time. In this case the `selected` property
     * would take precedence.
     */
    disabled?: boolean | PropertyBindingInfo;

    /**
     * Defines the `icon` of the step.
     *
     *
     *
     * **Note:** the icon is displayed in the `sap.ui.webc.fiori.Wizard` navigation header.
     *
     *
     *
     * The SAP-icons font provides numerous options. See all the available icons in the Icon Explorer.
     */
    icon?: string | PropertyBindingInfo;

    /**
     * Defines the step's `selected` state - the step that is currently active.
     *
     *
     *
     * **Note:** Step can't be `selected` and `disabled` at the same time. In this case the `selected` property
     * would take precedence.
     */
    selected?: boolean | PropertyBindingInfo;

    /**
     * Defines the `subtitleText` of the step.
     *
     *
     *
     * **Note:** the text is displayed in the `sap.ui.webc.fiori.Wizard` navigation header.
     *  **Note:** the text will hide on small sizes (about 559 px).
     */
    subtitleText?: string | PropertyBindingInfo;

    /**
     * Defines the `titleText` of the step.
     *
     *
     *
     * **Note:** the text is displayed in the `sap.ui.webc.fiori.Wizard` navigation header.
     *  **Note:** the text will hide on small sizes (about 559 px).
     */
    titleText?: string | PropertyBindingInfo;

    /**
     * Defines the step content.
     */
    content?: Control[] | Control | AggregationBindingInfo;
  }
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/ui/webc/fiori/Bar": undefined;

    "sap/ui/webc/fiori/FlexibleColumnLayout": undefined;

    "sap/ui/webc/fiori/library": undefined;

    "sap/ui/webc/fiori/NotificationAction": undefined;

    "sap/ui/webc/fiori/NotificationListGroupItem": undefined;

    "sap/ui/webc/fiori/NotificationListItem": undefined;

    "sap/ui/webc/fiori/Page": undefined;

    "sap/ui/webc/fiori/ProductSwitch": undefined;

    "sap/ui/webc/fiori/ProductSwitchItem": undefined;

    "sap/ui/webc/fiori/ShellBar": undefined;

    "sap/ui/webc/fiori/ShellBarItem": undefined;

    "sap/ui/webc/fiori/SideNavigation": undefined;

    "sap/ui/webc/fiori/SideNavigationItem": undefined;

    "sap/ui/webc/fiori/SideNavigationSubItem": undefined;

    "sap/ui/webc/fiori/Timeline": undefined;

    "sap/ui/webc/fiori/TimelineItem": undefined;

    "sap/ui/webc/fiori/UploadCollection": undefined;

    "sap/ui/webc/fiori/UploadCollectionItem": undefined;

    "sap/ui/webc/fiori/Wizard": undefined;

    "sap/ui/webc/fiori/WizardStep": undefined;
  }
}
