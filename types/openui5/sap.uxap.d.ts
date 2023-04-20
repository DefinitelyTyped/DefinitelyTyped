// For Library Version: 1.113.0

declare module "sap/uxap/library" {
  /**
   * Used by the `BlockBase` control to define how many columns should it be assigned by the `objectPageSubSection`.
   * The allowed values can be auto (subsection assigned a number of columns based on the parent objectPageLayout
   * subsectionLayout property), 1, 2, 3 or 4 (This may not be a valid value for some `subSectionLayout`,
   * for example, asking for 3 columns in a 2 column layout would raise warnings).
   */
  export type BlockBaseColumnLayout = string;

  /**
   * Used by the `BlockBase` control to define if it should do automatic adjustment of its nested forms.
   */
  export enum BlockBaseFormAdjustment {
    /**
     * Any form within the block will be automatically adjusted to have as many columns as the colspan of its
     * parent block.
     */
    BlockColumns = "BlockColumns",
    /**
     * No automatic adjustment of forms.
     */
    None = "None",
    /**
     * Any form within the block will be automatically adjusted to have only one column.
     */
    OneColumn = "OneColumn",
  }
  /**
   * @SINCE 1.52
   *
   * Interface for controls that are eligible for the `headerContent` aggregation of the `{@link sap.uxap.ObjectPageLayout}`.
   *
   * Controls that implement this interface:
   * 	 - `{@link sap.uxap.ObjectPageHeaderContent}` - `ObjectPageLayout`'s classic header content
   * 	 - `{@link sap.uxap.ObjectPageDynamicHeaderContent}` - `ObjectPageLayout`'s dynamic header content
   *
   *
   * For more information on the types of header available for the `{@link sap.uxap.ObjectPageLayout ObjectPageLayout}`,
   * see {@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}.
   *
   * For details regarding the differences and similarities between the available headers, see {@link topic:9c9d94fd28284539a9a5a57e9caf82a8
   * Object Page Headers Comparison}.
   * See:
   * 	{@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}
   */
  export interface IHeaderContent {
    __implements__sap_uxap_IHeaderContent: boolean;
  }

  /**
   * @SINCE 1.52
   *
   * Interface for controls that are eligible for the `headerTitle` aggregation of the `{@link sap.uxap.ObjectPageLayout}`.
   *
   * Controls that implement this interface:
   * 	 - `{@link sap.uxap.ObjectPageHeader}` - `ObjectPageLayout`'s classic header
   * 	 - `{@link sap.uxap.ObjectPageDynamicHeaderTitle}` - `ObjectPageLayout`'s dynamic header
   *
   * For more information on the types of header available for the `{@link sap.uxap.ObjectPageLayout ObjectPageLayout}`,
   * see {@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}.
   *
   * For details regarding the differences and similarities between the available headers, see {@link topic:9c9d94fd28284539a9a5a57e9caf82a8
   * Object Page Headers Comparison}.
   * See:
   * 	{@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}
   */
  export interface IHeaderTitle {
    __implements__sap_uxap_IHeaderTitle: boolean;
  }

  /**
   * @SINCE 1.32.0
   *
   * Used by the `ObjectSectionBase` control to define the importance of the content contained in it.
   */
  export enum Importance {
    /**
     * High importance of the content.
     */
    High = "High",
    /**
     * Low importance of the content.
     */
    Low = "Low",
    /**
     * Medium importance of the content.
     */
    Medium = "Medium",
  }
  /**
   * Used by the `sap.uxap.component.Component` how to initialize the `ObjectPageLayout` sections and subsections.
   */
  export enum ObjectPageConfigurationMode {
    /**
     * Determines the JSON model.
     */
    JsonModel = "JsonModel",
    /**
     * Determines the JSON URL.
     */
    JsonURL = "JsonURL",
  }
  /**
   * Used by the `ObjectPageHeader` control to define which design to use.
   */
  export enum ObjectPageHeaderDesign {
    /**
     * Dark theme for the `ObjectPageHeader`.
     */
    Dark = "Dark",
    /**
     * Light theme for the `ObjectPageHeader`.
     */
    Light = "Light",
  }
  /**
   * Used by the `ObjectPageHeader` control to define which shape to use for the image.
   */
  export enum ObjectPageHeaderPictureShape {
    /**
     * Circle shape for the images in the `ObjectPageHeader`.
     */
    Circle = "Circle",
    /**
     * Square shape for the images in the `ObjectPageHeader`.
     */
    Square = "Square",
  }
  /**
   * Used by the `ObjectPagSubSection` control to define which layout to apply.
   */
  export enum ObjectPageSubSectionLayout {
    /**
     * Title and actions on the left, inside the block area.
     */
    TitleOnLeft = "TitleOnLeft",
    /**
     * Title and actions on top of the block area.
     */
    TitleOnTop = "TitleOnTop",
  }
  /**
   * Used by the `ObjectPageLayout` control to define which layout to use (either Collapsed or Expanded).
   */
  export enum ObjectPageSubSectionMode {
    /**
     * Collapsed mode of display of the `ObjectPageLayout`.
     */
    Collapsed = "Collapsed",
    /**
     * Expanded mode of displaying the `ObjectPageLayout`.
     */
    Expanded = "Expanded",
  }
}

declare module "sap/uxap/AnchorBar" {
  import { default as Toolbar, $ToolbarSettings } from "sap/m/Toolbar";

  import Control from "sap/ui/core/Control";

  import { BackgroundDesign } from "sap/m/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import ScrollEnablement from "sap/ui/core/delegate/ScrollEnablement";

  import { ID } from "sap/ui/core/library";

  import Button from "sap/m/Button";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.26
   *
   * Displays the titles of the sections and subsections in the {@link sap.uxap.ObjectPageLayout ObjectPageLayout}
   * and allows the user to scroll to the respective content.
   *
   * Overview:
   *
   * The `AnchorBar` is internally generated as a menu in the `ObjectPageLayout`. It displays the sections
   * and subsections and allows the user to directly scroll to the respective content by selecting them, while
   * it remains visible at the top of the page (below the page header).
   */
  export default class AnchorBar extends Toolbar {
    /**
     * Constructor for a new `AnchorBar`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:370b67986497463187336fa130aebbf1 Anchor Bar}
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $AnchorBarSettings
    );
    /**
     * Constructor for a new `AnchorBar`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:370b67986497463187336fa130aebbf1 Anchor Bar}
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $AnchorBarSettings
    );

    /**
     * Creates a new subclass of class sap.uxap.AnchorBar with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Toolbar.extend}.
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
      oClassInfo?: sap.ClassInfo<T, AnchorBar>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.uxap.AnchorBar.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * This method is a hook for the RenderManager that gets called during the rendering of child Controls.
     * It allows to add, remove and update existing accessibility attributes (ARIA) of those controls.
     */
    enhanceAccessibilityState(
      /**
       * The Control that gets rendered by the RenderManager
       */
      oElement: Control,
      /**
       * The mapping of "aria-" prefixed attributes
       */
      mAriaProps: object
    ): void;
    /**
     * @SINCE 1.58
     *
     * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
     *
     * Determines the background color of the `AnchorBar`.
     *
     * **Note:** The default value of `backgroundDesign` property is null. If the property is not set, the color
     * of the background is `@sapUiObjectHeaderBackground`, which depends on the specific theme.
     *
     * @returns Value of property `backgroundDesign`
     */
    getBackgroundDesign(): BackgroundDesign | keyof typeof BackgroundDesign;
    /**
     * Returns an sap.ui.core.delegate.ScrollEnablement object used to handle scrolling.
     *
     * @returns The `sap.ui.core.delegate.ScrollEnablement` instance
     */
    getScrollDelegate(): ScrollEnablement;
    /**
     * ID of the element which is the current target of the association {@link #getSelectedButton selectedButton},
     * or `null`.
     */
    getSelectedButton(): ID;
    /**
     * Gets current value of property {@link #getShowPopover showPopover}.
     *
     * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor
     * bar.
     *
     * Default value is `true`.
     *
     * @returns Value of property `showPopover`
     */
    getShowPopover(): boolean;
    /**
     * Gets current value of property {@link #getUpperCase upperCase}.
     *
     * Determines whether the Anchor bar items are displayed in upper case.
     *
     * Default value is `false`.
     *
     * @returns Value of property `upperCase`
     */
    getUpperCase(): boolean;
    /**
     * Scrolls to the currently selected Section tab, when the header titles is snapped/unsnapped
     */
    scrollToCurrentlySelectedSection(): void;
    /**
     * Scroll to a specific Section.
     */
    scrollToSection(
      /**
       * The Section ID to scroll to
       */
      sId: string,
      /**
       * Scroll duration (in ms)
       */
      iDuration?: int
    ): void;
    /**
     * @SINCE 1.58
     *
     * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
     *
     * Determines the background color of the `AnchorBar`.
     *
     * **Note:** The default value of `backgroundDesign` property is null. If the property is not set, the color
     * of the background is `@sapUiObjectHeaderBackground`, which depends on the specific theme.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setBackgroundDesign(
      /**
       * New value for property `backgroundDesign`
       */
      sBackgroundDesign: BackgroundDesign | keyof typeof BackgroundDesign
    ): this;
    /**
     * Sets the associated {@link #getSelectedButton selectedButton}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelectedButton(
      /**
       * ID of an element which becomes the new target of this selectedButton association; alternatively, an element
       * instance may be given
       */
      oSelectedButton: ID | Button
    ): this;
    /**
     * Sets a new value for property {@link #getShowPopover showPopover}.
     *
     * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor
     * bar.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowPopover(
      /**
       * New value for property `showPopover`
       */
      bShowPopover?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getUpperCase upperCase}.
     *
     * Determines whether the Anchor bar items are displayed in upper case.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setUpperCase(
      /**
       * New value for property `upperCase`
       */
      bUpperCase?: boolean
    ): this;
  }

  export interface $AnchorBarSettings extends $ToolbarSettings {
    /**
     * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor
     * bar.
     */
    showPopover?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the Anchor bar items are displayed in upper case.
     */
    upperCase?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.58
     *
     * Determines the background color of the `AnchorBar`.
     *
     * **Note:** The default value of `backgroundDesign` property is null. If the property is not set, the color
     * of the background is `@sapUiObjectHeaderBackground`, which depends on the specific theme.
     */
    backgroundDesign?:
      | (BackgroundDesign | keyof typeof BackgroundDesign)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * The button that represents the Section being scrolled by the user.
     */
    selectedButton?: Button | string;
  }
}

declare module "sap/uxap/BlockBase" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ModelMapping from "sap/uxap/ModelMapping";

  import Event from "sap/ui/base/Event";

  import View from "sap/ui/core/mvc/View";

  import {
    BlockBaseColumnLayout,
    BlockBaseFormAdjustment,
  } from "sap/uxap/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { ID } from "sap/ui/core/library";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.26
   *
   * The main element that holds the content that is displayed in an {@link sap.uxap.ObjectPageLayout ObjectPageLayout},
   * but not necessarily only there.
   *
   * Overview:
   *
   * The blocks give the flexibility to combine different content types.
   *
   * A block is a control that:
   * 	 - Has modes and a view associated to each mode. At rendering time, the view associated to the mode
   * 			is rendered.
   * 	 - Can use all view types for storing its internal control tree (XML, JS, JSON, HTML)
   *
   * As any UI5 view, the XML view can have a controller which automatically comes with a `this.oParentBlock`
   * attribute (so that the controller can interact with the block). The `oParentBlock` is firstly available
   * in `onParentBlockModeChange` method. If the controller implements the `onParentBlockModeChange` method,
   * this method will be called with the `sMode` parameter when the view is used or reused by the block.
   */
  export default class BlockBase extends Control {
    /**
     * Constructor for a new `BlockBase`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:4527729576cb4a4888275b6935aad03a Block Base}
     * 	{@link topic:2978f6064742456ebed31c5ccf4d051d Creating Blocks}
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $BlockBaseSettings
    );
    /**
     * Constructor for a new `BlockBase`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:4527729576cb4a4888275b6935aad03a Block Base}
     * 	{@link topic:2978f6064742456ebed31c5ccf4d051d Creating Blocks}
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $BlockBaseSettings
    );

    /**
     * Creates a new subclass of class sap.uxap.BlockBase with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
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
      oClassInfo?: sap.ClassInfo<T, BlockBase>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.uxap.BlockBase.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some mapping to the aggregation {@link #getMappings mappings}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addMapping(
      /**
       * The mapping to add; if empty, nothing is inserted
       */
      oMapping: ModelMapping
    ): this;
    /**
     * @SINCE 1.72
     *
     * Attaches event handler `fnFunction` to the {@link #event:viewInit viewInit} event of this `sap.uxap.BlockBase`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.uxap.BlockBase` itself.
     *
     * Fired when an aggregated view is instantiated.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachViewInit(
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
       * Context object to call the event handler with. Defaults to this `sap.uxap.BlockBase` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.72
     *
     * Attaches event handler `fnFunction` to the {@link #event:viewInit viewInit} event of this `sap.uxap.BlockBase`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.uxap.BlockBase` itself.
     *
     * Fired when an aggregated view is instantiated.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachViewInit(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.uxap.BlockBase` itself
       */
      oListener?: object
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Creates a view.
     *
     * @returns A promise on the created view.
     */
    createView(
      /**
       * View metadata
       */
      mParameter: object,
      /**
       * Mode associated with the view
       */
      sMode: string
    ): Promise<View>;
    /**
     * Destroys all the mappings in the aggregation {@link #getMappings mappings}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyMappings(): this;
    /**
     * @SINCE 1.72
     *
     * Detaches event handler `fnFunction` from the {@link #event:viewInit viewInit} event of this `sap.uxap.BlockBase`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachViewInit(
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
     * @SINCE 1.72
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:viewInit viewInit} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireViewInit(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The initialized view.
         */
        view?: View;
      }
    ): this;
    /**
     * Gets current value of property {@link #getColumnLayout columnLayout}.
     *
     * Determines on how many columns the layout will be rendered. Allowed values are integers from 1 to 4 and
     * "auto".
     *
     * Default value is `"auto"`.
     *
     * @returns Value of property `columnLayout`
     */
    getColumnLayout(): BlockBaseColumnLayout;
    /**
     * Gets current value of property {@link #getFormAdjustment formAdjustment}.
     *
     * Determines if the block should automatically adjust its inner forms. Allowed values are "BlockColumns"
     * and "OneColumn" and "None". If the value is "BlockColumns", then the inner form will have as many columns
     * as the colspan of its parent block. If the value is "OneColumn", the inner form will have exactly one
     * column, regardless the colspan of its parent block. If the value is "None", no automatic adjustment of
     * inner forms will be made and the form will keep its original column count.
     *
     * Default value is `BlockColumns`.
     *
     * @returns Value of property `formAdjustment`
     */
    getFormAdjustment():
      | BlockBaseFormAdjustment
      | keyof typeof BlockBaseFormAdjustment;
    /**
     * Gets content of aggregation {@link #getMappings mappings}.
     *
     * Map external UI5 model and internal Block model
     */
    getMappings(): ModelMapping[];
    /**
     * Gets current value of property {@link #getMode mode}.
     *
     * Determines the mode of the block. See {@link sap.uxap.ObjectPageSubSectionMode ObjectPageSubSectionMode}.
     * When `BlockBase` is used inside an `ObjectPageLayout`, the `mode` property is inherited from the respective
     * {@link sap.uxap.ObjectPageSubSection SubSection}. The `mode` property of `BlockBase` changes when the
     * `mode` property of `ObjectPageSubSection` changes.
     *
     * @returns Value of property `mode`
     */
    getMode(): string;
    /**
     * ID of the element which is the current target of the association {@link #getSelectedView selectedView},
     * or `null`.
     */
    getSelectedView(): ID;
    /**
     * Gets current value of property {@link #getShowSubSectionMore showSubSectionMore}.
     *
     * Determines whether the show more button should be shown.
     *
     * **Note:** The property will take effect if the `BlockBase` is inside `ObjectPageSubSection` and would
     * be ignored in case the `BlockBase` is nested inside another `BlockBase`.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showSubSectionMore`
     */
    getShowSubSectionMore(): boolean;
    /**
     * Gets current value of property {@link #getVisible visible}.
     *
     * Determines the visibility of the block.
     *
     * Default value is `true`.
     *
     * @returns Value of property `visible`
     */
    getVisible(): boolean;
    /**
     * Checks for the provided `sap.uxap.ModelMapping` in the aggregation {@link #getMappings mappings}. and
     * returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfMapping(
      /**
       * The mapping whose index is looked for
       */
      oMapping: ModelMapping
    ): int;
    /**
     * Inserts a mapping into the aggregation {@link #getMappings mappings}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertMapping(
      /**
       * The mapping to insert; if empty, nothing is inserted
       */
      oMapping: ModelMapping,
      /**
       * The `0`-based index the mapping should be inserted at; for a negative value of `iIndex`, the mapping
       * is inserted at position 0; for a value greater than the current size of the aggregation, the mapping
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getMappings mappings}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllMappings(): ModelMapping[];
    /**
     * Removes a mapping from the aggregation {@link #getMappings mappings}.
     *
     * @returns The removed mapping or `null`
     */
    removeMapping(
      /**
       * The mapping to remove or its index or id
       */
      vMapping: int | string | ModelMapping
    ): ModelMapping | null;
    /**
     * Set the column layout for this particular block.
     *
     * @returns this
     */
    setColumnLayout(
      /**
       * The column layout to apply to the control
       */
      sLayout: string
    ): any;
    /**
     * Sets a new value for property {@link #getFormAdjustment formAdjustment}.
     *
     * Determines if the block should automatically adjust its inner forms. Allowed values are "BlockColumns"
     * and "OneColumn" and "None". If the value is "BlockColumns", then the inner form will have as many columns
     * as the colspan of its parent block. If the value is "OneColumn", the inner form will have exactly one
     * column, regardless the colspan of its parent block. If the value is "None", no automatic adjustment of
     * inner forms will be made and the form will keep its original column count.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `BlockColumns`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFormAdjustment(
      /**
       * New value for property `formAdjustment`
       */
      sFormAdjustment?:
        | BlockBaseFormAdjustment
        | keyof typeof BlockBaseFormAdjustment
    ): this;
    /**
     * Set the view mode for this particular block.
     *
     * @returns this
     */
    setMode(
      /**
       * the mode to apply to the control (that should be synchronized with view declared)
       */
      sMode: string
    ): any;
    /**
     * Sets the associated {@link #getSelectedView selectedView}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelectedView(
      /**
       * ID of an element which becomes the new target of this selectedView association; alternatively, an element
       * instance may be given
       */
      oSelectedView: ID | Control
    ): this;
    /**
     * Sets a new value for property {@link #getShowSubSectionMore showSubSectionMore}.
     *
     * Determines whether the show more button should be shown.
     *
     * **Note:** The property will take effect if the `BlockBase` is inside `ObjectPageSubSection` and would
     * be ignored in case the `BlockBase` is nested inside another `BlockBase`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowSubSectionMore(
      /**
       * New value for property `showSubSectionMore`
       */
      bShowSubSectionMore?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getVisible visible}.
     *
     * Determines the visibility of the block.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
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

  export interface $BlockBaseSettings extends $ControlSettings {
    /**
     * Determines the mode of the block. See {@link sap.uxap.ObjectPageSubSectionMode ObjectPageSubSectionMode}.
     * When `BlockBase` is used inside an `ObjectPageLayout`, the `mode` property is inherited from the respective
     * {@link sap.uxap.ObjectPageSubSection SubSection}. The `mode` property of `BlockBase` changes when the
     * `mode` property of `ObjectPageSubSection` changes.
     */
    mode?: string | PropertyBindingInfo;

    /**
     * Determines the visibility of the block.
     */
    visible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines on how many columns the layout will be rendered. Allowed values are integers from 1 to 4 and
     * "auto".
     */
    columnLayout?: BlockBaseColumnLayout | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines if the block should automatically adjust its inner forms. Allowed values are "BlockColumns"
     * and "OneColumn" and "None". If the value is "BlockColumns", then the inner form will have as many columns
     * as the colspan of its parent block. If the value is "OneColumn", the inner form will have exactly one
     * column, regardless the colspan of its parent block. If the value is "None", no automatic adjustment of
     * inner forms will be made and the form will keep its original column count.
     */
    formAdjustment?:
      | (BlockBaseFormAdjustment | keyof typeof BlockBaseFormAdjustment)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines whether the show more button should be shown.
     *
     * **Note:** The property will take effect if the `BlockBase` is inside `ObjectPageSubSection` and would
     * be ignored in case the `BlockBase` is nested inside another `BlockBase`.
     */
    showSubSectionMore?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Map external UI5 model and internal Block model
     */
    mappings?:
      | ModelMapping[]
      | ModelMapping
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * The current view. Corresponds to the currently specified `mode` of the sap.uxap.BlockBase.
     * Can be used as a getter for the internally created view.
     *
     * **Note:** As the views are created asynchronously, this association will be updated only after the view
     * creation is completed. Applications that want to be notified when a view is created should subscribe
     * to the `viewInit` event.
     */
    selectedView?: Control | string;

    /**
     * @SINCE 1.72
     *
     * Fired when an aggregated view is instantiated.
     */
    viewInit?: (oEvent: Event) => void;
  }
}

declare module "sap/uxap/BreadCrumbs" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import Link from "sap/m/Link";

  import Text from "sap/m/Text";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.30
   *
   * Represents the navigation steps up to the current location in the app.
   *
   * Overview:
   *
   * The `BreadCrumbs` control allows the users to quickly navigate to a previous location on the path that
   * got them to the current location by choosing the displayed navigation steps.
   *
   * It has two main modes of operation:
   * 	 - A trail of links followed by separators, when there's enough space for the control to fit on one
   * 			line.
   * 	 - A dropdown list with the links, when the trail of links wouldn't fit on one line.
   */
  export default class BreadCrumbs extends Control {
    /**
     * Constructor for a new `BreadCrumbs`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $BreadCrumbsSettings
    );
    /**
     * Constructor for a new `BreadCrumbs`.
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
      mSettings?: $BreadCrumbsSettings
    );

    /**
     * Creates a new subclass of class sap.uxap.BreadCrumbs with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
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
      oClassInfo?: sap.ClassInfo<T, BreadCrumbs>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.uxap.BreadCrumbs.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some link to the aggregation {@link #getLinks links}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addLink(
      /**
       * The link to add; if empty, nothing is inserted
       */
      oLink: Link
    ): this;
    /**
     * Destroys the currentLocation in the aggregation {@link #getCurrentLocation currentLocation}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyCurrentLocation(): this;
    /**
     * Destroys all the links in the aggregation {@link #getLinks links}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyLinks(): this;
    /**
     * Gets content of aggregation {@link #getCurrentLocation currentLocation}.
     *
     * The current/last element in the BreadCrumbs path.
     */
    getCurrentLocation(): Text;
    /**
     * Gets content of aggregation {@link #getLinks links}.
     *
     * A list of all the active link elements in the BreadCrumbs control.
     */
    getLinks(): Link[];
    /**
     * Gets current value of property {@link #getShowCurrentLocation showCurrentLocation}.
     *
     * Sets the visibility of the current/last element in the BreadCrumbs path.
     *
     * Default value is `true`.
     *
     * @returns Value of property `showCurrentLocation`
     */
    getShowCurrentLocation(): boolean;
    /**
     * Checks for the provided `sap.m.Link` in the aggregation {@link #getLinks links}. and returns its index
     * if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfLink(
      /**
       * The link whose index is looked for
       */
      oLink: Link
    ): int;
    /**
     * Inserts a link into the aggregation {@link #getLinks links}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertLink(
      /**
       * The link to insert; if empty, nothing is inserted
       */
      oLink: Link,
      /**
       * The `0`-based index the link should be inserted at; for a negative value of `iIndex`, the link is inserted
       * at position 0; for a value greater than the current size of the aggregation, the link is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getLinks links}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllLinks(): Link[];
    /**
     * Removes a link from the aggregation {@link #getLinks links}.
     *
     * @returns The removed link or `null`
     */
    removeLink(
      /**
       * The link to remove or its index or id
       */
      vLink: int | string | Link
    ): Link | null;
    /**
     * Sets the aggregated {@link #getCurrentLocation currentLocation}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setCurrentLocation(
      /**
       * The currentLocation to set
       */
      oCurrentLocation: Text
    ): this;
    /**
     * Sets a new value for property {@link #getShowCurrentLocation showCurrentLocation}.
     *
     * Sets the visibility of the current/last element in the BreadCrumbs path.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowCurrentLocation(
      /**
       * New value for property `showCurrentLocation`
       */
      bShowCurrentLocation?: boolean
    ): this;
  }

  export interface $BreadCrumbsSettings extends $ControlSettings {
    /**
     * Sets the visibility of the current/last element in the BreadCrumbs path.
     */
    showCurrentLocation?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * A list of all the active link elements in the BreadCrumbs control.
     */
    links?: Link[] | Link | AggregationBindingInfo | `{${string}}`;

    /**
     * The current/last element in the BreadCrumbs path.
     */
    currentLocation?: Text;
  }
}

declare module "sap/uxap/HierarchicalSelect" {
  import { default as Select, $SelectSettings } from "sap/m/Select";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.26
   *
   * A select that displays items on a hierarchy of 2 levels.
   *
   * If a provided item has a custom data named `secondLevel`, then it will be displayed as a second level,
   * otherwise it would be displayed as a first level.
   */
  export default class HierarchicalSelect extends Select {
    /**
     * Constructor for a new `HierarchicalSelect`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $HierarchicalSelectSettings
    );
    /**
     * Constructor for a new `HierarchicalSelect`.
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
      mSettings?: $HierarchicalSelectSettings
    );

    /**
     * Creates a new subclass of class sap.uxap.HierarchicalSelect with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Select.extend}.
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
      oClassInfo?: sap.ClassInfo<T, HierarchicalSelect>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.uxap.HierarchicalSelect.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getUpperCase upperCase}.
     *
     * Determines whether the HierarchicalSelect items are displayed in upper case.
     *
     * Default value is `false`.
     *
     * @returns Value of property `upperCase`
     */
    getUpperCase(): boolean;
    /**
     * Sets a new value for property {@link #getUpperCase upperCase}.
     *
     * Determines whether the HierarchicalSelect items are displayed in upper case.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setUpperCase(
      /**
       * New value for property `upperCase`
       */
      bUpperCase?: boolean
    ): this;
  }

  export interface $HierarchicalSelectSettings extends $SelectSettings {
    /**
     * Determines whether the HierarchicalSelect items are displayed in upper case.
     */
    upperCase?: boolean | PropertyBindingInfo | `{${string}}`;
  }
}

declare module "sap/uxap/ModelMapping" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.26
   *
   * Defines the entity that will be passed to the {@link sap.uxap.ObjectPageLayout}.
   */
  export default class ModelMapping extends UI5Element {
    /**
     * Constructor for a new `ModelMapping`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ModelMappingSettings
    );
    /**
     * Constructor for a new `ModelMapping`.
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
      mSettings?: $ModelMappingSettings
    );

    /**
     * Creates a new subclass of class sap.uxap.ModelMapping with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ModelMapping>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.uxap.ModelMapping.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getExternalModelName externalModelName}.
     *
     * Determines the external model name.
     *
     * @returns Value of property `externalModelName`
     */
    getExternalModelName(): string;
    /**
     * Gets current value of property {@link #getExternalPath externalPath}.
     *
     * Determines the external path.
     *
     * @returns Value of property `externalPath`
     */
    getExternalPath(): string;
    /**
     * Gets current value of property {@link #getInternalModelName internalModelName}.
     *
     * Determines the internal model name.
     *
     * Default value is `"Model"`.
     *
     * @returns Value of property `internalModelName`
     */
    getInternalModelName(): string;
    /**
     * Sets a new value for property {@link #getExternalModelName externalModelName}.
     *
     * Determines the external model name.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setExternalModelName(
      /**
       * New value for property `externalModelName`
       */
      sExternalModelName?: string
    ): this;
    /**
     * Sets a new value for property {@link #getExternalPath externalPath}.
     *
     * Determines the external path.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setExternalPath(
      /**
       * New value for property `externalPath`
       */
      sExternalPath?: string
    ): this;
    /**
     * Sets a new value for property {@link #getInternalModelName internalModelName}.
     *
     * Determines the internal model name.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Model"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setInternalModelName(
      /**
       * New value for property `internalModelName`
       */
      sInternalModelName?: string
    ): this;
  }

  export interface $ModelMappingSettings extends $ElementSettings {
    /**
     * Determines the external model name.
     */
    externalModelName?: string | PropertyBindingInfo;

    /**
     * Determines the internal model name.
     */
    internalModelName?: string | PropertyBindingInfo;

    /**
     * Determines the external path.
     */
    externalPath?: string | PropertyBindingInfo;
  }
}

declare module "sap/uxap/ObjectPageAccessibleLandmarkInfo" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import { AccessibleLandmarkRole } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.61
   *
   * Settings for accessible landmarks which can be applied to the container elements of a `sap.uxap.ObjectPageLayout`
   * control. These landmarks are used by assistive technologies (such as screenreaders) to provide a meaningful
   * page overview.
   */
  export default class ObjectPageAccessibleLandmarkInfo extends UI5Element {
    /**
     * Constructor for a new `sap.uxap.ObjectPageAccessibleLandmarkInfo` element.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new element
       */
      mSettings?: $ObjectPageAccessibleLandmarkInfoSettings
    );
    /**
     * Constructor for a new `sap.uxap.ObjectPageAccessibleLandmarkInfo` element.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * ID for the new element, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new element
       */
      mSettings?: $ObjectPageAccessibleLandmarkInfoSettings
    );

    /**
     * Creates a new subclass of class sap.uxap.ObjectPageAccessibleLandmarkInfo with name `sClassName` and
     * enriches it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ObjectPageAccessibleLandmarkInfo>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.uxap.ObjectPageAccessibleLandmarkInfo.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getContentLabel contentLabel}.
     *
     * Texts which describe the landmark of the content container of the corresponding `sap.uxap.ObjectPageLayout`
     * control.
     *
     * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), no label
     * is set.
     *
     * @returns Value of property `contentLabel`
     */
    getContentLabel(): string;
    /**
     * Gets current value of property {@link #getContentRole contentRole}.
     *
     * Landmark role of the content container of the corresponding `sap.uxap.ObjectPageLayout` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     *
     * Default value is `"None"`.
     *
     * @returns Value of property `contentRole`
     */
    getContentRole():
      | AccessibleLandmarkRole
      | keyof typeof AccessibleLandmarkRole;
    /**
     * Gets current value of property {@link #getFooterLabel footerLabel}.
     *
     * Texts which describe the landmark of the header container of the corresponding `sap.uxap.ObjectPageLayout`
     * control.
     *
     * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), no label
     * is set.
     *
     * @returns Value of property `footerLabel`
     */
    getFooterLabel(): string;
    /**
     * Gets current value of property {@link #getFooterRole footerRole}.
     *
     * Landmark role of the footer container of the corresponding `sap.uxap.ObjectPageLayout` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     *
     * Default value is `"Region"`.
     *
     * @returns Value of property `footerRole`
     */
    getFooterRole():
      | AccessibleLandmarkRole
      | keyof typeof AccessibleLandmarkRole;
    /**
     * Gets current value of property {@link #getHeaderLabel headerLabel}.
     *
     * Texts which describe the landmark of the header container of the corresponding `sap.uxap.ObjectPageLayout`
     * control.
     *
     * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), no label
     * is set.
     *
     * @returns Value of property `headerLabel`
     */
    getHeaderLabel(): string;
    /**
     * Gets current value of property {@link #getHeaderRole headerRole}.
     *
     * Landmark role of the header container of the corresponding `sap.uxap.ObjectPageLayout` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     *
     * Default value is `"Banner"`.
     *
     * @returns Value of property `headerRole`
     */
    getHeaderRole():
      | AccessibleLandmarkRole
      | keyof typeof AccessibleLandmarkRole;
    /**
     * Gets current value of property {@link #getNavigationLabel navigationLabel}.
     *
     * Texts which describe the landmark of the navigation container of the corresponding `sap.uxap.ObjectPageLayout`
     * control.
     *
     * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), no label
     * is set.
     *
     * @returns Value of property `navigationLabel`
     */
    getNavigationLabel(): string;
    /**
     * Gets current value of property {@link #getNavigationRole navigationRole}.
     *
     * Landmark role of the navigation container of the corresponding `sap.uxap.ObjectPageLayout` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     *
     * Default value is `"Navigation"`.
     *
     * @returns Value of property `navigationRole`
     */
    getNavigationRole():
      | AccessibleLandmarkRole
      | keyof typeof AccessibleLandmarkRole;
    /**
     * Gets current value of property {@link #getRootLabel rootLabel}.
     *
     * Texts which describe the landmark of the root container of the corresponding `sap.uxap.ObjectPageLayout`
     * control.
     *
     * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), no label
     * is set.
     *
     * @returns Value of property `rootLabel`
     */
    getRootLabel(): string;
    /**
     * Gets current value of property {@link #getRootRole rootRole}.
     *
     * Landmark role of the root container of the corresponding `sap.uxap.ObjectPageLayout` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     *
     * Default value is `"Main"`.
     *
     * @returns Value of property `rootRole`
     */
    getRootRole(): AccessibleLandmarkRole | keyof typeof AccessibleLandmarkRole;
    /**
     * Sets a new value for property {@link #getContentLabel contentLabel}.
     *
     * Texts which describe the landmark of the content container of the corresponding `sap.uxap.ObjectPageLayout`
     * control.
     *
     * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), no label
     * is set.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setContentLabel(
      /**
       * New value for property `contentLabel`
       */
      sContentLabel?: string
    ): this;
    /**
     * Sets a new value for property {@link #getContentRole contentRole}.
     *
     * Landmark role of the content container of the corresponding `sap.uxap.ObjectPageLayout` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"None"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setContentRole(
      /**
       * New value for property `contentRole`
       */
      sContentRole?:
        | AccessibleLandmarkRole
        | keyof typeof AccessibleLandmarkRole
    ): this;
    /**
     * Sets a new value for property {@link #getFooterLabel footerLabel}.
     *
     * Texts which describe the landmark of the header container of the corresponding `sap.uxap.ObjectPageLayout`
     * control.
     *
     * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), no label
     * is set.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFooterLabel(
      /**
       * New value for property `footerLabel`
       */
      sFooterLabel?: string
    ): this;
    /**
     * Sets a new value for property {@link #getFooterRole footerRole}.
     *
     * Landmark role of the footer container of the corresponding `sap.uxap.ObjectPageLayout` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Region"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFooterRole(
      /**
       * New value for property `footerRole`
       */
      sFooterRole?: AccessibleLandmarkRole | keyof typeof AccessibleLandmarkRole
    ): this;
    /**
     * Sets a new value for property {@link #getHeaderLabel headerLabel}.
     *
     * Texts which describe the landmark of the header container of the corresponding `sap.uxap.ObjectPageLayout`
     * control.
     *
     * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), no label
     * is set.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderLabel(
      /**
       * New value for property `headerLabel`
       */
      sHeaderLabel?: string
    ): this;
    /**
     * Sets a new value for property {@link #getHeaderRole headerRole}.
     *
     * Landmark role of the header container of the corresponding `sap.uxap.ObjectPageLayout` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Banner"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderRole(
      /**
       * New value for property `headerRole`
       */
      sHeaderRole?: AccessibleLandmarkRole | keyof typeof AccessibleLandmarkRole
    ): this;
    /**
     * Sets a new value for property {@link #getNavigationLabel navigationLabel}.
     *
     * Texts which describe the landmark of the navigation container of the corresponding `sap.uxap.ObjectPageLayout`
     * control.
     *
     * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), no label
     * is set.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setNavigationLabel(
      /**
       * New value for property `navigationLabel`
       */
      sNavigationLabel?: string
    ): this;
    /**
     * Sets a new value for property {@link #getNavigationRole navigationRole}.
     *
     * Landmark role of the navigation container of the corresponding `sap.uxap.ObjectPageLayout` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Navigation"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setNavigationRole(
      /**
       * New value for property `navigationRole`
       */
      sNavigationRole?:
        | AccessibleLandmarkRole
        | keyof typeof AccessibleLandmarkRole
    ): this;
    /**
     * Sets a new value for property {@link #getRootLabel rootLabel}.
     *
     * Texts which describe the landmark of the root container of the corresponding `sap.uxap.ObjectPageLayout`
     * control.
     *
     * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), no label
     * is set.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setRootLabel(
      /**
       * New value for property `rootLabel`
       */
      sRootLabel?: string
    ): this;
    /**
     * Sets a new value for property {@link #getRootRole rootRole}.
     *
     * Landmark role of the root container of the corresponding `sap.uxap.ObjectPageLayout` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Main"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setRootRole(
      /**
       * New value for property `rootRole`
       */
      sRootRole?: AccessibleLandmarkRole | keyof typeof AccessibleLandmarkRole
    ): this;
  }

  export interface $ObjectPageAccessibleLandmarkInfoSettings
    extends $ElementSettings {
    /**
     * Landmark role of the root container of the corresponding `sap.uxap.ObjectPageLayout` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     */
    rootRole?:
      | (AccessibleLandmarkRole | keyof typeof AccessibleLandmarkRole)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Texts which describe the landmark of the root container of the corresponding `sap.uxap.ObjectPageLayout`
     * control.
     *
     * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), no label
     * is set.
     */
    rootLabel?: string | PropertyBindingInfo;

    /**
     * Landmark role of the content container of the corresponding `sap.uxap.ObjectPageLayout` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     */
    contentRole?:
      | (AccessibleLandmarkRole | keyof typeof AccessibleLandmarkRole)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Texts which describe the landmark of the content container of the corresponding `sap.uxap.ObjectPageLayout`
     * control.
     *
     * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), no label
     * is set.
     */
    contentLabel?: string | PropertyBindingInfo;

    /**
     * Landmark role of the navigation container of the corresponding `sap.uxap.ObjectPageLayout` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     */
    navigationRole?:
      | (AccessibleLandmarkRole | keyof typeof AccessibleLandmarkRole)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Texts which describe the landmark of the navigation container of the corresponding `sap.uxap.ObjectPageLayout`
     * control.
     *
     * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), no label
     * is set.
     */
    navigationLabel?: string | PropertyBindingInfo;

    /**
     * Landmark role of the header container of the corresponding `sap.uxap.ObjectPageLayout` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     */
    headerRole?:
      | (AccessibleLandmarkRole | keyof typeof AccessibleLandmarkRole)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Texts which describe the landmark of the header container of the corresponding `sap.uxap.ObjectPageLayout`
     * control.
     *
     * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), no label
     * is set.
     */
    headerLabel?: string | PropertyBindingInfo;

    /**
     * Landmark role of the footer container of the corresponding `sap.uxap.ObjectPageLayout` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     */
    footerRole?:
      | (AccessibleLandmarkRole | keyof typeof AccessibleLandmarkRole)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Texts which describe the landmark of the header container of the corresponding `sap.uxap.ObjectPageLayout`
     * control.
     *
     * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), no label
     * is set.
     */
    footerLabel?: string | PropertyBindingInfo;
  }
}

declare module "sap/uxap/ObjectPageDynamicHeaderContent" {
  import {
    default as DynamicPageHeader,
    $DynamicPageHeaderSettings,
  } from "sap/f/DynamicPageHeader";

  import { IHeaderContent } from "sap/uxap/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.52
   *
   * Header content for the dynamic header of the {@link sap.uxap.ObjectPageLayout}.
   *
   * Overview:
   *
   * The `ObjectPageDynamicHeaderContent` represents the movable part of the `ObjectPageLayout`'s dynamic
   * header. It can contain any control and scrolls along with the content of the page until it disappears
   * (collapsed header). When scrolled back to the top it becomes visible again (expanded header). It contains
   * all the additional information of the object.
   *
   * Documentation links:
   * 	 - {@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}
   * 	 - {@link topic:6e340c119ddd4c778b315f65a0432420 Object Page Dynamic Header}
   */
  export default class ObjectPageDynamicHeaderContent
    extends DynamicPageHeader
    implements IHeaderContent {
    __implements__sap_uxap_IHeaderContent: boolean;
    /**
     * Constructor for a new `ObjectPageDynamicHeaderContent`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.DynamicPageHeader#constructor
     * sap.f.DynamicPageHeader} can be used.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ObjectPageDynamicHeaderContentSettings
    );
    /**
     * Constructor for a new `ObjectPageDynamicHeaderContent`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.DynamicPageHeader#constructor
     * sap.f.DynamicPageHeader} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ObjectPageDynamicHeaderContentSettings
    );

    /**
     * Creates a new subclass of class sap.uxap.ObjectPageDynamicHeaderContent with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.DynamicPageHeader.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ObjectPageDynamicHeaderContent>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.uxap.ObjectPageDynamicHeaderContent.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $ObjectPageDynamicHeaderContentSettings
    extends $DynamicPageHeaderSettings {}
}

declare module "sap/uxap/ObjectPageDynamicHeaderTitle" {
  import {
    default as DynamicPageTitle,
    $DynamicPageTitleSettings,
  } from "sap/f/DynamicPageTitle";

  import { IHeaderTitle } from "sap/uxap/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.52
   *
   * Represents the static part (header title) of the dynamic header of the {@link sap.uxap.ObjectPageLayout}.
   *
   * Overview:
   *
   * The `ObjectPageDynamicHeaderTitle` is used to represent the most important details of the displayed business
   * object, such as the object title and actions that the user can perform.
   *
   * **Note:** The `ObjectPageDynamicHeaderTitle` is meant to be used inside the `ObjectPageLayout` control.
   * Any other usage is not supported and can lead to unexpected behavior.
   */
  export default class ObjectPageDynamicHeaderTitle
    extends DynamicPageTitle
    implements IHeaderTitle {
    __implements__sap_uxap_IHeaderTitle: boolean;
    /**
     * Constructor for a new `ObjectPageDynamicHeaderTitle`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.DynamicPageTitle#constructor
     * sap.f.DynamicPageTitle} can be used.
     * See:
     * 	{@link topic:6e340c119ddd4c778b315f65a0432420 Object Page Dynamic Header}
     * 	{@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}
     * 	{@link topic:9c9d94fd28284539a9a5a57e9caf82a8 Object Page Headers Comparison}
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ObjectPageDynamicHeaderTitleSettings
    );
    /**
     * Constructor for a new `ObjectPageDynamicHeaderTitle`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.DynamicPageTitle#constructor
     * sap.f.DynamicPageTitle} can be used.
     * See:
     * 	{@link topic:6e340c119ddd4c778b315f65a0432420 Object Page Dynamic Header}
     * 	{@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}
     * 	{@link topic:9c9d94fd28284539a9a5a57e9caf82a8 Object Page Headers Comparison}
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ObjectPageDynamicHeaderTitleSettings
    );

    /**
     * Creates a new subclass of class sap.uxap.ObjectPageDynamicHeaderTitle with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.DynamicPageTitle.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ObjectPageDynamicHeaderTitle>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.uxap.ObjectPageDynamicHeaderTitle.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $ObjectPageDynamicHeaderTitleSettings
    extends $DynamicPageTitleSettings {}
}

declare module "sap/uxap/ObjectPageHeader" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { IHeaderTitle, ObjectPageHeaderDesign } from "sap/uxap/library";

  import Link from "sap/m/Link";

  import Event from "sap/ui/base/Event";

  import Breadcrumbs from "sap/m/Breadcrumbs";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Bar from "sap/m/Bar";

  import AvatarColor from "sap/m/AvatarColor";

  import AvatarShape from "sap/m/AvatarShape";

  import Button from "sap/m/Button";

  import TooltipBase from "sap/ui/core/TooltipBase";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.26
   *
   * Represents the static part (header title) of the classic header of the {@link sap.uxap.ObjectPageLayout}.
   *
   * Overview:
   *
   * The `ObjectPageHeader` is used to display the basic information about a business object, such as title/description/picture,
   * as well as a list of common actions.
   *
   * **Note:** The `ObjectPageHeader` is meant to be used inside the `ObjectPageLayout` control. Any other
   * usage is not supported and can lead to unexpected behavior.
   */
  export default class ObjectPageHeader
    extends Control
    implements IHeaderTitle {
    __implements__sap_uxap_IHeaderTitle: boolean;
    /**
     * Constructor for a new `ObjectPageHeader`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:0fecbce45e39406aa939bd25e89823f4 Object Page Classic Header}
     * 	{@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}
     * 	{@link topic:9c9d94fd28284539a9a5a57e9caf82a8 Object Page Headers Comparison}
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/snapping-header/ Object Page Header}
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/object-page/ UX Guidelines: Object Page}
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ObjectPageHeaderSettings
    );
    /**
     * Constructor for a new `ObjectPageHeader`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:0fecbce45e39406aa939bd25e89823f4 Object Page Classic Header}
     * 	{@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}
     * 	{@link topic:9c9d94fd28284539a9a5a57e9caf82a8 Object Page Headers Comparison}
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/snapping-header/ Object Page Header}
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/object-page/ UX Guidelines: Object Page}
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ObjectPageHeaderSettings
    );

    /**
     * Creates a new subclass of class sap.uxap.ObjectPageHeader with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ObjectPageHeader>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.uxap.ObjectPageHeader.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some action to the aggregation {@link #getActions actions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addAction(
      /**
       * The action to add; if empty, nothing is inserted
       */
      oAction: Control
    ): this;
    /**
     * @deprecated (since 1.50) - use the `breadcrumbs` aggregation instead.
     *
     * Adds some breadCrumbLink to the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addBreadCrumbLink(
      /**
       * The breadCrumbLink to add; if empty, nothing is inserted
       */
      oBreadCrumbLink: Link
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:markChangesPress markChangesPress} event of
     * this `sap.uxap.ObjectPageHeader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.uxap.ObjectPageHeader` itself.
     *
     * The event is fired when the unsaved changes button is pressed
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMarkChangesPress(
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
       * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageHeader` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:markChangesPress markChangesPress} event of
     * this `sap.uxap.ObjectPageHeader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.uxap.ObjectPageHeader` itself.
     *
     * The event is fired when the unsaved changes button is pressed
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMarkChangesPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageHeader` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:markLockedPress markLockedPress} event of this
     * `sap.uxap.ObjectPageHeader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.uxap.ObjectPageHeader` itself.
     *
     * The event is fired when the Locked button is pressed
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMarkLockedPress(
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
       * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageHeader` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:markLockedPress markLockedPress} event of this
     * `sap.uxap.ObjectPageHeader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.uxap.ObjectPageHeader` itself.
     *
     * The event is fired when the Locked button is pressed
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMarkLockedPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageHeader` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:titleSelectorPress titleSelectorPress} event
     * of this `sap.uxap.ObjectPageHeader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.uxap.ObjectPageHeader` itself.
     *
     * The event is fired when the objectPage header title selector (down-arrow) is pressed
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachTitleSelectorPress(
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
       * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageHeader` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:titleSelectorPress titleSelectorPress} event
     * of this `sap.uxap.ObjectPageHeader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.uxap.ObjectPageHeader` itself.
     *
     * The event is fired when the objectPage header title selector (down-arrow) is pressed
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachTitleSelectorPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageHeader` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the actions in the aggregation {@link #getActions actions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyActions(): this;
    /**
     * @SINCE 1.50
     *
     * Destroys the breadcrumbs in the aggregation {@link #getBreadcrumbs breadcrumbs}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyBreadcrumbs(): this;
    /**
     * @deprecated (since 1.50) - use the `breadcrumbs` aggregation instead.
     *
     * Destroys all the breadCrumbsLinks in the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyBreadCrumbsLinks(): this;
    /**
     * Destroys the navigationBar in the aggregation {@link #getNavigationBar navigationBar}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyNavigationBar(): this;
    /**
     * @SINCE 1.38.0
     *
     * Destroys the sideContentButton in the aggregation {@link #getSideContentButton sideContentButton}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySideContentButton(): this;
    /**
     * @SINCE 1.56
     *
     * Destroys the titleSelectorTooltip in the aggregation {@link #getTitleSelectorTooltip titleSelectorTooltip}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTitleSelectorTooltip(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:markChangesPress markChangesPress} event of
     * this `sap.uxap.ObjectPageHeader`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachMarkChangesPress(
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
     * Detaches event handler `fnFunction` from the {@link #event:markLockedPress markLockedPress} event of
     * this `sap.uxap.ObjectPageHeader`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachMarkLockedPress(
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
     * Detaches event handler `fnFunction` from the {@link #event:titleSelectorPress titleSelectorPress} event
     * of this `sap.uxap.ObjectPageHeader`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachTitleSelectorPress(
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
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:markChangesPress markChangesPress} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireMarkChangesPress(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * DOM reference of the changed item's icon to be used for positioning.
         */
        domRef?: string;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:markLockedPress markLockedPress} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireMarkLockedPress(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * DOM reference of the lock item's icon to be used for positioning.
         */
        domRef?: string;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:titleSelectorPress titleSelectorPress} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireTitleSelectorPress(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * DOM reference of the title item's icon to be used for positioning.
         */
        domRef?: string;
      }
    ): this;
    /**
     * Gets content of aggregation {@link #getActions actions}.
     *
     * List of actions that will be displayed in the header. You can use ObjectPageHeaderActionButton controls
     * to achieve a different visual representation of the action buttons in the action bar and the action sheet
     * (overflow menu). You can use ObjectPageHeaderLayoutData to display a visual separator.
     *
     * **Note:** If an action is placed inside the overflow area, an additional `bInOverflow` parameter is passed
     * along with the `press` event to indicate that a popup shouldn't be opened from that action and a dialog
     * should be used instead.
     */
    getActions(): Control[];
    /**
     * @SINCE 1.50
     *
     * Gets content of aggregation {@link #getBreadcrumbs breadcrumbs}.
     *
     * The breadcrumbs displayed in the `ObjectPageHeader`. If this aggregation is set, the `breadCrumbsLinks`
     * aggregation is omitted.
     */
    getBreadcrumbs(): Breadcrumbs;
    /**
     * @deprecated (since 1.50) - use the `breadcrumbs` aggregation instead.
     *
     * Gets content of aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
     *
     * A list of all the active link elements in the BreadCrumbs control.
     */
    getBreadCrumbsLinks(): Link[];
    /**
     * @deprecated (since 1.40.1)
     *
     * Gets current value of property {@link #getHeaderDesign headerDesign}.
     *
     * Determines the design of the header - Light or Dark. **Note: **This property is deprecated. It will continue
     * to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.
     *
     * Default value is `Light`.
     *
     * @returns Value of property `headerDesign`
     */
    getHeaderDesign():
      | ObjectPageHeaderDesign
      | keyof typeof ObjectPageHeaderDesign;
    /**
     * Gets current value of property {@link #getIsActionAreaAlwaysVisible isActionAreaAlwaysVisible}.
     *
     * Determines whether the action buttons should always be visible or visible only when the header is snapped.
     *
     * Default value is `true`.
     *
     * @returns Value of property `isActionAreaAlwaysVisible`
     */
    getIsActionAreaAlwaysVisible(): boolean;
    /**
     * Gets current value of property {@link #getIsObjectIconAlwaysVisible isObjectIconAlwaysVisible}.
     *
     * Determines whether the icon should always be visible or visible only when the header is snapped.
     *
     * Default value is `false`.
     *
     * @returns Value of property `isObjectIconAlwaysVisible`
     */
    getIsObjectIconAlwaysVisible(): boolean;
    /**
     * Gets current value of property {@link #getIsObjectSubtitleAlwaysVisible isObjectSubtitleAlwaysVisible}.
     *
     * Determines whether the subtitle should always be visible or visible only when the header is snapped.
     *
     * Default value is `true`.
     *
     * @returns Value of property `isObjectSubtitleAlwaysVisible`
     */
    getIsObjectSubtitleAlwaysVisible(): boolean;
    /**
     * Gets current value of property {@link #getIsObjectTitleAlwaysVisible isObjectTitleAlwaysVisible}.
     *
     * Determines whether the title should always be visible or visible only when the header is snapped.
     *
     * Default value is `true`.
     *
     * @returns Value of property `isObjectTitleAlwaysVisible`
     */
    getIsObjectTitleAlwaysVisible(): boolean;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getMarkChanges markChanges}.
     *
     * Marks that there are unsaved changes in the objectPageHeader. The markChanges state cannot be used together
     * with the markLocked state. If both are set to true, only the locked state will be displayed.
     *
     * Default value is `false`.
     *
     * @returns Value of property `markChanges`
     */
    getMarkChanges(): boolean;
    /**
     * Gets current value of property {@link #getMarkFavorite markFavorite}.
     *
     * Set the favorite state to true or false. The showMarkers property must be true for this property to take
     * effect.
     *
     * Default value is `false`.
     *
     * @returns Value of property `markFavorite`
     */
    getMarkFavorite(): boolean;
    /**
     * Gets current value of property {@link #getMarkFlagged markFlagged}.
     *
     * Set the flagged state to true or false. The showMarkers property must be true for this property to take
     * effect.
     *
     * Default value is `false`.
     *
     * @returns Value of property `markFlagged`
     */
    getMarkFlagged(): boolean;
    /**
     * Gets current value of property {@link #getMarkLocked markLocked}.
     *
     * Set the locked state of the objectPageHeader.
     *
     * Default value is `false`.
     *
     * @returns Value of property `markLocked`
     */
    getMarkLocked(): boolean;
    /**
     * Gets content of aggregation {@link #getNavigationBar navigationBar}.
     *
     * An instance of sap.m.Bar to be embedded in the header
     */
    getNavigationBar(): Bar;
    /**
     * Gets current value of property {@link #getObjectImageAlt objectImageAlt}.
     *
     * The text to be used for the Alt and Tooltip attribute of the image, supplied via the objectImageURI property
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `objectImageAlt`
     */
    getObjectImageAlt(): string;
    /**
     * @SINCE 1.73
     *
     * Gets current value of property {@link #getObjectImageBackgroundColor objectImageBackgroundColor}.
     *
     * Determines the background color of the image placeholder or icon if valid icon URI is provided.
     *
     * Default value is `Accent6`.
     *
     * @returns Value of property `objectImageBackgroundColor`
     */
    getObjectImageBackgroundColor(): AvatarColor | keyof typeof AvatarColor;
    /**
     * Gets current value of property {@link #getObjectImageDensityAware objectImageDensityAware}.
     *
     * The value of densityAware for the image, supplied via the objectImageURI property. See sap.m.Image for
     * more details on densityAware.
     *
     * Default value is `false`.
     *
     * @returns Value of property `objectImageDensityAware`
     */
    getObjectImageDensityAware(): boolean;
    /**
     * Gets current value of property {@link #getObjectImageShape objectImageShape}.
     *
     * Determines whether the picture should be displayed in a square or with a circle-shaped mask.
     *
     * Default value is `Square`.
     *
     * @returns Value of property `objectImageShape`
     */
    getObjectImageShape(): AvatarShape | keyof typeof AvatarShape;
    /**
     * Gets current value of property {@link #getObjectImageURI objectImageURI}.
     *
     * The URL of the image, representing the business object
     *
     * @returns Value of property `objectImageURI`
     */
    getObjectImageURI(): string;
    /**
     * Gets current value of property {@link #getObjectSubtitle objectSubtitle}.
     *
     * The description of the object
     *
     * @returns Value of property `objectSubtitle`
     */
    getObjectSubtitle(): string;
    /**
     * Gets current value of property {@link #getObjectTitle objectTitle}.
     *
     * The title of the object
     *
     * @returns Value of property `objectTitle`
     */
    getObjectTitle(): string;
    /**
     * Gets current value of property {@link #getShowMarkers showMarkers}.
     *
     * Indicates if object page header title supports showing markers such as flagged and favorite.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showMarkers`
     */
    getShowMarkers(): boolean;
    /**
     * Gets current value of property {@link #getShowPlaceholder showPlaceholder}.
     *
     * Enables support of a placeholder image in case no image is specified or the URL of the provided image
     * is invalid.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showPlaceholder`
     */
    getShowPlaceholder(): boolean;
    /**
     * Gets current value of property {@link #getShowTitleSelector showTitleSelector}.
     *
     * When set to true, the selector arrow icon/image is shown and can be pressed.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showTitleSelector`
     */
    getShowTitleSelector(): boolean;
    /**
     * @SINCE 1.38.0
     *
     * Gets content of aggregation {@link #getSideContentButton sideContentButton}.
     *
     * A button that is used for opening the side content of the page or some additional content.
     */
    getSideContentButton(): Button;
    /**
     * @SINCE 1.56
     *
     * Gets content of aggregation {@link #getTitleSelectorTooltip titleSelectorTooltip}.
     *
     * A custom tooltip for the title selector button.
     *
     * The custom tooltip will be visible if the `showTitleSelector` property is set to `true`.
     *
     * **Note:** If the aggregation is destroyed or set to invalid value, the default tooltip will be set. The
     * default tooltip text is "Related options".
     */
    getTitleSelectorTooltip(): TooltipBase | string;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getActions actions}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfAction(
      /**
       * The action whose index is looked for
       */
      oAction: Control
    ): int;
    /**
     * @deprecated (since 1.50) - use the `breadcrumbs` aggregation instead.
     *
     * Checks for the provided `sap.m.Link` in the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfBreadCrumbLink(
      /**
       * The breadCrumbLink whose index is looked for
       */
      oBreadCrumbLink: Link
    ): int;
    /**
     * Inserts a action into the aggregation {@link #getActions actions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertAction(
      /**
       * The action to insert; if empty, nothing is inserted
       */
      oAction: Control,
      /**
       * The `0`-based index the action should be inserted at; for a negative value of `iIndex`, the action is
       * inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted
       * at the last position
       */
      iIndex: int
    ): this;
    /**
     * @deprecated (since 1.50) - use the `breadcrumbs` aggregation instead.
     *
     * Inserts a breadCrumbLink into the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertBreadCrumbLink(
      /**
       * The breadCrumbLink to insert; if empty, nothing is inserted
       */
      oBreadCrumbLink: Link,
      /**
       * The `0`-based index the breadCrumbLink should be inserted at; for a negative value of `iIndex`, the breadCrumbLink
       * is inserted at position 0; for a value greater than the current size of the aggregation, the breadCrumbLink
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes a action from the aggregation {@link #getActions actions}.
     *
     * @returns The removed action or `null`
     */
    removeAction(
      /**
       * The action to remove or its index or id
       */
      vAction: int | string | Control
    ): Control | null;
    /**
     * Removes all the controls from the aggregation {@link #getActions actions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllActions(): Control[];
    /**
     * @deprecated (since 1.50) - use the `breadcrumbs` aggregation instead.
     *
     * Removes all the controls from the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllBreadCrumbsLinks(): Link[];
    /**
     * @deprecated (since 1.50) - use the `breadcrumbs` aggregation instead.
     *
     * Removes a breadCrumbLink from the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
     *
     * @returns The removed breadCrumbLink or `null`
     */
    removeBreadCrumbLink(
      /**
       * The breadCrumbLink to remove or its index or id
       */
      vBreadCrumbLink: int | string | Link
    ): Link | null;
    /**
     * @SINCE 1.50
     *
     * Sets the aggregated {@link #getBreadcrumbs breadcrumbs}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setBreadcrumbs(
      /**
       * The breadcrumbs to set
       */
      oBreadcrumbs: Breadcrumbs
    ): this;
    /**
     * Sets a new value for property {@link #getIsActionAreaAlwaysVisible isActionAreaAlwaysVisible}.
     *
     * Determines whether the action buttons should always be visible or visible only when the header is snapped.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setIsActionAreaAlwaysVisible(
      /**
       * New value for property `isActionAreaAlwaysVisible`
       */
      bIsActionAreaAlwaysVisible?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getIsObjectIconAlwaysVisible isObjectIconAlwaysVisible}.
     *
     * Determines whether the icon should always be visible or visible only when the header is snapped.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setIsObjectIconAlwaysVisible(
      /**
       * New value for property `isObjectIconAlwaysVisible`
       */
      bIsObjectIconAlwaysVisible?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getIsObjectSubtitleAlwaysVisible isObjectSubtitleAlwaysVisible}.
     *
     * Determines whether the subtitle should always be visible or visible only when the header is snapped.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setIsObjectSubtitleAlwaysVisible(
      /**
       * New value for property `isObjectSubtitleAlwaysVisible`
       */
      bIsObjectSubtitleAlwaysVisible?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getIsObjectTitleAlwaysVisible isObjectTitleAlwaysVisible}.
     *
     * Determines whether the title should always be visible or visible only when the header is snapped.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setIsObjectTitleAlwaysVisible(
      /**
       * New value for property `isObjectTitleAlwaysVisible`
       */
      bIsObjectTitleAlwaysVisible?: boolean
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getMarkChanges markChanges}.
     *
     * Marks that there are unsaved changes in the objectPageHeader. The markChanges state cannot be used together
     * with the markLocked state. If both are set to true, only the locked state will be displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMarkChanges(
      /**
       * New value for property `markChanges`
       */
      bMarkChanges?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getMarkFavorite markFavorite}.
     *
     * Set the favorite state to true or false. The showMarkers property must be true for this property to take
     * effect.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMarkFavorite(
      /**
       * New value for property `markFavorite`
       */
      bMarkFavorite?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getMarkFlagged markFlagged}.
     *
     * Set the flagged state to true or false. The showMarkers property must be true for this property to take
     * effect.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMarkFlagged(
      /**
       * New value for property `markFlagged`
       */
      bMarkFlagged?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getMarkLocked markLocked}.
     *
     * Set the locked state of the objectPageHeader.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMarkLocked(
      /**
       * New value for property `markLocked`
       */
      bMarkLocked?: boolean
    ): this;
    /**
     * Sets the aggregated {@link #getNavigationBar navigationBar}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setNavigationBar(
      /**
       * The navigationBar to set
       */
      oNavigationBar: Bar
    ): this;
    /**
     * Sets a new value for property {@link #getObjectImageAlt objectImageAlt}.
     *
     * The text to be used for the Alt and Tooltip attribute of the image, supplied via the objectImageURI property
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setObjectImageAlt(
      /**
       * New value for property `objectImageAlt`
       */
      sObjectImageAlt?: string
    ): this;
    /**
     * @SINCE 1.73
     *
     * Sets a new value for property {@link #getObjectImageBackgroundColor objectImageBackgroundColor}.
     *
     * Determines the background color of the image placeholder or icon if valid icon URI is provided.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Accent6`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setObjectImageBackgroundColor(
      /**
       * New value for property `objectImageBackgroundColor`
       */
      sObjectImageBackgroundColor?: AvatarColor | keyof typeof AvatarColor
    ): this;
    /**
     * Sets a new value for property {@link #getObjectImageDensityAware objectImageDensityAware}.
     *
     * The value of densityAware for the image, supplied via the objectImageURI property. See sap.m.Image for
     * more details on densityAware.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setObjectImageDensityAware(
      /**
       * New value for property `objectImageDensityAware`
       */
      bObjectImageDensityAware?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getObjectImageShape objectImageShape}.
     *
     * Determines whether the picture should be displayed in a square or with a circle-shaped mask.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Square`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setObjectImageShape(
      /**
       * New value for property `objectImageShape`
       */
      sObjectImageShape?: AvatarShape | keyof typeof AvatarShape
    ): this;
    /**
     * Sets a new value for property {@link #getObjectImageURI objectImageURI}.
     *
     * The URL of the image, representing the business object
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setObjectImageURI(
      /**
       * New value for property `objectImageURI`
       */
      sObjectImageURI?: string
    ): this;
    /**
     * Sets a new value for property {@link #getObjectSubtitle objectSubtitle}.
     *
     * The description of the object
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setObjectSubtitle(
      /**
       * New value for property `objectSubtitle`
       */
      sObjectSubtitle?: string
    ): this;
    /**
     * Sets a new value for property {@link #getObjectTitle objectTitle}.
     *
     * The title of the object
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setObjectTitle(
      /**
       * New value for property `objectTitle`
       */
      sObjectTitle?: string
    ): this;
    /**
     * Sets a new value for property {@link #getShowMarkers showMarkers}.
     *
     * Indicates if object page header title supports showing markers such as flagged and favorite.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowMarkers(
      /**
       * New value for property `showMarkers`
       */
      bShowMarkers?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowPlaceholder showPlaceholder}.
     *
     * Enables support of a placeholder image in case no image is specified or the URL of the provided image
     * is invalid.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowPlaceholder(
      /**
       * New value for property `showPlaceholder`
       */
      bShowPlaceholder?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowTitleSelector showTitleSelector}.
     *
     * When set to true, the selector arrow icon/image is shown and can be pressed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowTitleSelector(
      /**
       * New value for property `showTitleSelector`
       */
      bShowTitleSelector?: boolean
    ): this;
    /**
     * @SINCE 1.38.0
     *
     * Sets the aggregated {@link #getSideContentButton sideContentButton}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSideContentButton(
      /**
       * The sideContentButton to set
       */
      oSideContentButton: Button
    ): this;
    /**
     * @SINCE 1.56
     *
     * Sets the aggregated {@link #getTitleSelectorTooltip titleSelectorTooltip}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitleSelectorTooltip(
      /**
       * The titleSelectorTooltip to set
       */
      vTitleSelectorTooltip: TooltipBase | string
    ): this;
  }

  export interface $ObjectPageHeaderSettings extends $ControlSettings {
    /**
     * The URL of the image, representing the business object
     */
    objectImageURI?: string | PropertyBindingInfo;

    /**
     * The text to be used for the Alt and Tooltip attribute of the image, supplied via the objectImageURI property
     */
    objectImageAlt?: string | PropertyBindingInfo;

    /**
     * The value of densityAware for the image, supplied via the objectImageURI property. See sap.m.Image for
     * more details on densityAware.
     */
    objectImageDensityAware?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The title of the object
     */
    objectTitle?: string | PropertyBindingInfo;

    /**
     * The description of the object
     */
    objectSubtitle?: string | PropertyBindingInfo;

    /**
     * Determines whether the picture should be displayed in a square or with a circle-shaped mask.
     */
    objectImageShape?:
      | (AvatarShape | keyof typeof AvatarShape)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * @SINCE 1.73
     *
     * Determines the background color of the image placeholder or icon if valid icon URI is provided.
     */
    objectImageBackgroundColor?:
      | (AvatarColor | keyof typeof AvatarColor)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines whether the icon should always be visible or visible only when the header is snapped.
     */
    isObjectIconAlwaysVisible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the title should always be visible or visible only when the header is snapped.
     */
    isObjectTitleAlwaysVisible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the subtitle should always be visible or visible only when the header is snapped.
     */
    isObjectSubtitleAlwaysVisible?:
      | boolean
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines whether the action buttons should always be visible or visible only when the header is snapped.
     */
    isActionAreaAlwaysVisible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @deprecated (since 1.40.1)
     *
     * Determines the design of the header - Light or Dark. **Note: **This property is deprecated. It will continue
     * to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.
     */
    headerDesign?:
      | (ObjectPageHeaderDesign | keyof typeof ObjectPageHeaderDesign)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * When set to true, the selector arrow icon/image is shown and can be pressed.
     */
    showTitleSelector?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Set the favorite state to true or false. The showMarkers property must be true for this property to take
     * effect.
     */
    markFavorite?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Set the flagged state to true or false. The showMarkers property must be true for this property to take
     * effect.
     */
    markFlagged?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Indicates if object page header title supports showing markers such as flagged and favorite.
     */
    showMarkers?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Set the locked state of the objectPageHeader.
     */
    markLocked?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Enables support of a placeholder image in case no image is specified or the URL of the provided image
     * is invalid.
     */
    showPlaceholder?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.34.0
     *
     * Marks that there are unsaved changes in the objectPageHeader. The markChanges state cannot be used together
     * with the markLocked state. If both are set to true, only the locked state will be displayed.
     */
    markChanges?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.50
     *
     * The breadcrumbs displayed in the `ObjectPageHeader`. If this aggregation is set, the `breadCrumbsLinks`
     * aggregation is omitted.
     */
    breadcrumbs?: Breadcrumbs;

    /**
     * @deprecated (since 1.50) - use the `breadcrumbs` aggregation instead.
     *
     * A list of all the active link elements in the BreadCrumbs control.
     */
    breadCrumbsLinks?: Link[] | Link | AggregationBindingInfo | `{${string}}`;

    /**
     * An instance of sap.m.Bar to be embedded in the header
     */
    navigationBar?: Bar;

    /**
     * List of actions that will be displayed in the header. You can use ObjectPageHeaderActionButton controls
     * to achieve a different visual representation of the action buttons in the action bar and the action sheet
     * (overflow menu). You can use ObjectPageHeaderLayoutData to display a visual separator.
     *
     * **Note:** If an action is placed inside the overflow area, an additional `bInOverflow` parameter is passed
     * along with the `press` event to indicate that a popup shouldn't be opened from that action and a dialog
     * should be used instead.
     */
    actions?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.38.0
     *
     * A button that is used for opening the side content of the page or some additional content.
     */
    sideContentButton?: Button;

    /**
     * @SINCE 1.56
     *
     * A custom tooltip for the title selector button.
     *
     * The custom tooltip will be visible if the `showTitleSelector` property is set to `true`.
     *
     * **Note:** If the aggregation is destroyed or set to invalid value, the default tooltip will be set. The
     * default tooltip text is "Related options".
     */
    titleSelectorTooltip?: string | TooltipBase | PropertyBindingInfo;

    /**
     * The event is fired when the objectPage header title selector (down-arrow) is pressed
     */
    titleSelectorPress?: (oEvent: Event) => void;

    /**
     * The event is fired when the Locked button is pressed
     */
    markLockedPress?: (oEvent: Event) => void;

    /**
     * The event is fired when the unsaved changes button is pressed
     */
    markChangesPress?: (oEvent: Event) => void;
  }
}

declare module "sap/uxap/ObjectPageHeaderActionButton" {
  import { default as Button, $ButtonSettings } from "sap/m/Button";

  import { IOverflowToolbarContent } from "sap/m/library";

  import { Importance } from "sap/uxap/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.26
   *
   * A Button that is used in the `actions` aggregation of the {@link sap.uxap.ObjectPageHeader}.
   *
   * The button is designed to be used with {@link sap.uxap.ObjectPageHeader} and any usage outside the intended
   * context is not recommended.
   */
  export default class ObjectPageHeaderActionButton
    extends Button
    implements IOverflowToolbarContent {
    __implements__sap_m_IOverflowToolbarContent: boolean;
    /**
     * Constructor for a new `ObjectPageHeaderActionButton`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ObjectPageHeaderActionButtonSettings
    );
    /**
     * Constructor for a new `ObjectPageHeaderActionButton`.
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
      mSettings?: $ObjectPageHeaderActionButtonSettings
    );

    /**
     * Creates a new subclass of class sap.uxap.ObjectPageHeaderActionButton with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Button.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ObjectPageHeaderActionButton>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.uxap.ObjectPageHeaderActionButton.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getHideIcon hideIcon}.
     *
     * Hide the button icon when rendered into the headerTitle part of the ObjectPageLayout. This is useful
     * if you want to display texts only in the headerTitle part but still want to display text + icon in the
     * actionSheet that appears when not enough space is available on the screen for displaying all actions.
     *
     * Default value is `false`.
     *
     * @returns Value of property `hideIcon`
     */
    getHideIcon(): boolean;
    /**
     * Gets current value of property {@link #getHideText hideText}.
     *
     * Hide the button text when rendered into the headerTitle part of the ObjectPageLayout. This is useful
     * if you want to display icons only in the headerTitle part but still want to display text + icon in the
     * actionSheet that appears when not enough space is available on the screen for displaying all actions.
     *
     * Default value is `true`.
     *
     * @returns Value of property `hideText`
     */
    getHideText(): boolean;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getImportance importance}.
     *
     * Determines the order in which the button overflows.
     *
     * Default value is `High`.
     *
     * @returns Value of property `importance`
     */
    getImportance(): Importance | keyof typeof Importance;
    /**
     * Sets a new value for property {@link #getHideIcon hideIcon}.
     *
     * Hide the button icon when rendered into the headerTitle part of the ObjectPageLayout. This is useful
     * if you want to display texts only in the headerTitle part but still want to display text + icon in the
     * actionSheet that appears when not enough space is available on the screen for displaying all actions.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHideIcon(
      /**
       * New value for property `hideIcon`
       */
      bHideIcon?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getHideText hideText}.
     *
     * Hide the button text when rendered into the headerTitle part of the ObjectPageLayout. This is useful
     * if you want to display icons only in the headerTitle part but still want to display text + icon in the
     * actionSheet that appears when not enough space is available on the screen for displaying all actions.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHideText(
      /**
       * New value for property `hideText`
       */
      bHideText?: boolean
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getImportance importance}.
     *
     * Determines the order in which the button overflows.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `High`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setImportance(
      /**
       * New value for property `importance`
       */
      sImportance?: Importance | keyof typeof Importance
    ): this;
  }

  export interface $ObjectPageHeaderActionButtonSettings
    extends $ButtonSettings {
    /**
     * Hide the button text when rendered into the headerTitle part of the ObjectPageLayout. This is useful
     * if you want to display icons only in the headerTitle part but still want to display text + icon in the
     * actionSheet that appears when not enough space is available on the screen for displaying all actions.
     */
    hideText?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Hide the button icon when rendered into the headerTitle part of the ObjectPageLayout. This is useful
     * if you want to display texts only in the headerTitle part but still want to display text + icon in the
     * actionSheet that appears when not enough space is available on the screen for displaying all actions.
     */
    hideIcon?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.34.0
     *
     * Determines the order in which the button overflows.
     */
    importance?:
      | (Importance | keyof typeof Importance)
      | PropertyBindingInfo
      | `{${string}}`;
  }
}

declare module "sap/uxap/ObjectPageHeaderContent" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { IHeaderContent, ObjectPageHeaderDesign } from "sap/uxap/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.30
   *
   * Header content for the classic header of the {@link sap.uxap.ObjectPageLayout}.
   *
   * Overview:
   *
   * The `ObjectPageHeaderContent` represents the movable part of the `ObjectPageLayout`'s classic header.
   * It can contain any control and scrolls along with the content of the page until it disappears (collapsed
   * header). When scrolled back to the top it becomes visible again (expanded header). It contains all the
   * additional information of the object.
   *
   * Documentation links:
   * 	 - {@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}
   * 	 - {@link topic:0fecbce45e39406aa939bd25e89823f4 Object Page Classic Header}
   * 	 - {@link https://experience.sap.com/fiori-design-web/object-page/ UX Guidelines: Object Page}
   */
  export default class ObjectPageHeaderContent
    extends Control
    implements IHeaderContent {
    __implements__sap_uxap_IHeaderContent: boolean;
    /**
     * Constructor for a new `ObjectPageHeaderContent`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/snapping-header/#header-content Object Page
     * Header Content}
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ObjectPageHeaderContentSettings
    );
    /**
     * Constructor for a new `ObjectPageHeaderContent`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/snapping-header/#header-content Object Page
     * Header Content}
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ObjectPageHeaderContentSettings
    );

    /**
     * Creates a new subclass of class sap.uxap.ObjectPageHeaderContent with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ObjectPageHeaderContent>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.uxap.ObjectPageHeaderContent.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some content to the aggregation {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addContent(
      /**
       * The content to add; if empty, nothing is inserted
       */
      oContent: Control
    ): this;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * The list of Objects of type sap.ui.core.Control.
     */
    getContent(): Control[];
    /**
     * @deprecated (since 1.40.1)
     *
     * Gets current value of property {@link #getContentDesign contentDesign}.
     *
     * Determines the design of the header - Light or Dark. **Note: **This property is deprecated. It will continue
     * to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.
     *
     * Default value is `Light`.
     *
     * @returns Value of property `contentDesign`
     */
    getContentDesign():
      | ObjectPageHeaderDesign
      | keyof typeof ObjectPageHeaderDesign;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfContent(
      /**
       * The content whose index is looked for
       */
      oContent: Control
    ): int;
    /**
     * Inserts a content into the aggregation {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
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
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllContent(): Control[];
    /**
     * Removes a content from the aggregation {@link #getContent content}.
     *
     * @returns The removed content or `null`
     */
    removeContent(
      /**
       * The content to remove or its index or id
       */
      vContent: int | string | Control
    ): Control | null;
    /**
     * @deprecated (since 1.40.1)
     *
     * Sets a new value for property {@link #getContentDesign contentDesign}.
     *
     * Determines the design of the header - Light or Dark. **Note: **This property is deprecated. It will continue
     * to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Light`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setContentDesign(
      /**
       * New value for property `contentDesign`
       */
      sContentDesign?:
        | ObjectPageHeaderDesign
        | keyof typeof ObjectPageHeaderDesign
    ): this;
  }

  export interface $ObjectPageHeaderContentSettings extends $ControlSettings {
    /**
     * @deprecated (since 1.40.1)
     *
     * Determines the design of the header - Light or Dark. **Note: **This property is deprecated. It will continue
     * to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.
     */
    contentDesign?:
      | (ObjectPageHeaderDesign | keyof typeof ObjectPageHeaderDesign)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * The list of Objects of type sap.ui.core.Control.
     */
    content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;
  }
}

declare module "sap/uxap/ObjectPageHeaderLayoutData" {
  import {
    default as LayoutData,
    $LayoutDataSettings,
  } from "sap/ui/core/LayoutData";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { CSSSize } from "sap/ui/core/library";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.26
   *
   * A {@link sap.ui.core.LayoutData} element that can be added to controls used in the `headerContent` aggregation
   * of the `ObjectPageLayout`.
   *
   * **Note:** This element is only taken into account when the `sap.uxap.ObjectPageLayout` control is used
   * together with `sap.uxap.ObjectPageHeader` as value of `headerTitle`.
   */
  export default class ObjectPageHeaderLayoutData extends LayoutData {
    /**
     * Constructor for a new `ObjectPageHeaderLayoutData`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ObjectPageHeaderLayoutDataSettings
    );
    /**
     * Constructor for a new `ObjectPageHeaderLayoutData`.
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
      mSettings?: $ObjectPageHeaderLayoutDataSettings
    );

    /**
     * Creates a new subclass of class sap.uxap.ObjectPageHeaderLayoutData with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ObjectPageHeaderLayoutData>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.uxap.ObjectPageHeaderLayoutData.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getShowSeparatorAfter showSeparatorAfter}.
     *
     * If this property is set the control will display a separator after it.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showSeparatorAfter`
     */
    getShowSeparatorAfter(): boolean;
    /**
     * Gets current value of property {@link #getShowSeparatorBefore showSeparatorBefore}.
     *
     * If this property is set the control will display a separator before it.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showSeparatorBefore`
     */
    getShowSeparatorBefore(): boolean;
    /**
     * Gets current value of property {@link #getVisibleL visibleL}.
     *
     * If this property is set the control will be visible (or not) in a large sized layout.
     *
     * Default value is `true`.
     *
     * @returns Value of property `visibleL`
     */
    getVisibleL(): boolean;
    /**
     * Gets current value of property {@link #getVisibleM visibleM}.
     *
     * If this property is set the control will be visible (or not) in a medium sized layout.
     *
     * Default value is `true`.
     *
     * @returns Value of property `visibleM`
     */
    getVisibleM(): boolean;
    /**
     * Gets current value of property {@link #getVisibleS visibleS}.
     *
     * If this property is set the control will be visible (or not) in a small sized layout.
     *
     * Default value is `true`.
     *
     * @returns Value of property `visibleS`
     */
    getVisibleS(): boolean;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * If this property is set the control will take the provided size.
     *
     * Default value is `'auto'`.
     *
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
    /**
     * Sets a new value for property {@link #getShowSeparatorAfter showSeparatorAfter}.
     *
     * If this property is set the control will display a separator after it.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowSeparatorAfter(
      /**
       * New value for property `showSeparatorAfter`
       */
      bShowSeparatorAfter?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowSeparatorBefore showSeparatorBefore}.
     *
     * If this property is set the control will display a separator before it.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowSeparatorBefore(
      /**
       * New value for property `showSeparatorBefore`
       */
      bShowSeparatorBefore?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getVisibleL visibleL}.
     *
     * If this property is set the control will be visible (or not) in a large sized layout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setVisibleL(
      /**
       * New value for property `visibleL`
       */
      bVisibleL?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getVisibleM visibleM}.
     *
     * If this property is set the control will be visible (or not) in a medium sized layout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setVisibleM(
      /**
       * New value for property `visibleM`
       */
      bVisibleM?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getVisibleS visibleS}.
     *
     * If this property is set the control will be visible (or not) in a small sized layout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setVisibleS(
      /**
       * New value for property `visibleS`
       */
      bVisibleS?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * If this property is set the control will take the provided size.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `'auto'`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth?: CSSSize
    ): this;
  }

  export interface $ObjectPageHeaderLayoutDataSettings
    extends $LayoutDataSettings {
    /**
     * If this property is set the control will be visible (or not) in a small sized layout.
     */
    visibleS?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If this property is set the control will be visible (or not) in a medium sized layout.
     */
    visibleM?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If this property is set the control will be visible (or not) in a large sized layout.
     */
    visibleL?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If this property is set the control will display a separator before it.
     */
    showSeparatorBefore?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If this property is set the control will display a separator after it.
     */
    showSeparatorAfter?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If this property is set the control will take the provided size.
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;
  }
}

declare module "sap/uxap/ObjectPageLayout" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ObjectPageSection from "sap/uxap/ObjectPageSection";

  import Event from "sap/ui/base/Event";

  import ObjectPageSubSection from "sap/uxap/ObjectPageSubSection";

  import { BackgroundDesign, IBar } from "sap/m/library";

  import { IHeaderTitle, ObjectPageSubSectionLayout } from "sap/uxap/library";

  import { CSSSize, TitleLevel, ID } from "sap/ui/core/library";

  import ObjectPageAccessibleLandmarkInfo from "sap/uxap/ObjectPageAccessibleLandmarkInfo";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import ScrollEnablement from "sap/ui/core/delegate/ScrollEnablement";

  import {
    default as ManagedObject,
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.26
   *
   * A layout that allows apps to easily display information related to a business object.
   *
   * Overview:
   *
   * The `ObjectPageLayout` layout is composed of a header (title and content), an optional anchor bar and
   * block content wrapped in sections and subsections that structure the information.
   *
   * Structure:
   *
   * An `ObjectPageLayout` control is used to put together all parts of an Object page - Header, optional
   * Anchor Bar and Sections/Subsections.
   *
   * Header: The `ObjectPageLayout` implements the snapping header concept. This means that the upper part
   * of the header (Header Title) always stays visible, while the lower part (Header Content) can scroll out
   * of view.
   *
   * Header Title is displayed at the top of the header and always remains visible above the scrollable content
   * of the page. It contains the title and most prominent details of the object.
   *
   * The Header Content scrolls along with the content of the page until it disappears (collapsed header).
   * When scrolled back to the top it becomes visible again (expanded header). It contains all the additional
   * information of the object.
   *
   * Anchor Bar: The Anchor Bar is an automatically generated internal menu that shows the titles of the sections
   * and subsections and allows the user to scroll to the respective section and subsection content.
   *
   * Sections, Subsections, Blocks: The content of the page that appears bellow the header is composed of
   * blocks structured into sections and subsections.
   *
   * Usage: Use the `ObjectPageLayout` if:
   * 	 - The users need to see, edit, or create an item with all its details.
   * 	 - Users need to get an overview of an object and interact with different parts of the object.
   *
   * Responsive behavior:
   *
   * The `ObjectPageLayout` is responsive and adapts to all screen sizes.
   */
  export default class ObjectPageLayout extends Control {
    /**
     * Constructor for a new `ObjectPageLayout`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:2e61ab6c68a2480eb666c1927a707658 Object Page Layout}
     * 	{@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}
     * 	{@link topic:370b67986497463187336fa130aebbf1 Anchor Bar}
     * 	{@link topic:4527729576cb4a4888275b6935aad03a Object Page Blocks}
     * 	{@link topic:2978f6064742456ebed31c5ccf4d051d Creating Blocks}
     * 	{@link topic:bc410e94e46540efa02857e15aae583f Object Page Scrolling}
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/object-page/ Object Page Layout}
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/snapping-header/ UX Guidelines: Object Page
     * - Snapping Header}
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ObjectPageLayoutSettings
    );
    /**
     * Constructor for a new `ObjectPageLayout`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:2e61ab6c68a2480eb666c1927a707658 Object Page Layout}
     * 	{@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}
     * 	{@link topic:370b67986497463187336fa130aebbf1 Anchor Bar}
     * 	{@link topic:4527729576cb4a4888275b6935aad03a Object Page Blocks}
     * 	{@link topic:2978f6064742456ebed31c5ccf4d051d Creating Blocks}
     * 	{@link topic:bc410e94e46540efa02857e15aae583f Object Page Scrolling}
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/object-page/ Object Page Layout}
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/snapping-header/ UX Guidelines: Object Page
     * - Snapping Header}
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ObjectPageLayoutSettings
    );

    /**
     * Creates a new subclass of class sap.uxap.ObjectPageLayout with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ObjectPageLayout>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.uxap.ObjectPageLayout.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some headerContent to the aggregation {@link #getHeaderContent headerContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addHeaderContent(
      /**
       * The headerContent to add; if empty, nothing is inserted
       */
      oHeaderContent: Control
    ): this;
    /**
     * Adds some section to the aggregation {@link #getSections sections}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addSection(
      /**
       * The section to add; if empty, nothing is inserted
       */
      oSection: ObjectPageSection
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:editHeaderButtonPress editHeaderButtonPress}
     * event of this `sap.uxap.ObjectPageLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
     *
     * The event is fired when the Edit Header button is pressed
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachEditHeaderButtonPress(
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
       * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:editHeaderButtonPress editHeaderButtonPress}
     * event of this `sap.uxap.ObjectPageLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
     *
     * The event is fired when the Edit Header button is pressed
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachEditHeaderButtonPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.93
     *
     * Attaches event handler `fnFunction` to the {@link #event:headerContentPinnedStateChange headerContentPinnedStateChange}
     * event of this `sap.uxap.ObjectPageLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
     *
     * The event is fired when the `headerContentPinned` property is changed via user interaction.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachHeaderContentPinnedStateChange(
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
       * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.93
     *
     * Attaches event handler `fnFunction` to the {@link #event:headerContentPinnedStateChange headerContentPinnedStateChange}
     * event of this `sap.uxap.ObjectPageLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
     *
     * The event is fired when the `headerContentPinned` property is changed via user interaction.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachHeaderContentPinnedStateChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.40
     *
     * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.uxap.ObjectPageLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
     *
     * The event is fired when the selected section is changed using the navigation.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachNavigate(
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
       * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.40
     *
     * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.uxap.ObjectPageLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
     *
     * The event is fired when the selected section is changed using the navigation.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachNavigate(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.73
     *
     * Attaches event handler `fnFunction` to the {@link #event:sectionChange sectionChange} event of this `sap.uxap.ObjectPageLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
     *
     * Fired when the current section is changed by scrolling.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSectionChange(
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
       * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.73
     *
     * Attaches event handler `fnFunction` to the {@link #event:sectionChange sectionChange} event of this `sap.uxap.ObjectPageLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
     *
     * Fired when the current section is changed by scrolling.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.77
     *
     * Attaches event handler `fnFunction` to the {@link #event:subSectionVisibilityChange subSectionVisibilityChange}
     * event of this `sap.uxap.ObjectPageLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
     *
     * Fired when the visibility of subsections is changed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSubSectionVisibilityChange(
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
       * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.77
     *
     * Attaches event handler `fnFunction` to the {@link #event:subSectionVisibilityChange subSectionVisibilityChange}
     * event of this `sap.uxap.ObjectPageLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
     *
     * Fired when the visibility of subsections is changed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSubSectionVisibilityChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:toggleAnchorBar toggleAnchorBar} event of this
     * `sap.uxap.ObjectPageLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
     *
     * The event is fired when the Anchor bar is switched from moving to fixed or the other way round.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachToggleAnchorBar(
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
       * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:toggleAnchorBar toggleAnchorBar} event of this
     * `sap.uxap.ObjectPageLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
     *
     * The event is fired when the Anchor bar is switched from moving to fixed or the other way round.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachToggleAnchorBar(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.40
     *
     * Destroys the footer in the aggregation {@link #getFooter footer}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFooter(): this;
    /**
     * Destroys all the headerContent in the aggregation {@link #getHeaderContent headerContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyHeaderContent(): this;
    /**
     * Destroys the headerTitle in the aggregation {@link #getHeaderTitle headerTitle}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyHeaderTitle(): this;
    /**
     * @SINCE 1.61
     *
     * Destroys the landmarkInfo in the aggregation {@link #getLandmarkInfo landmarkInfo}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyLandmarkInfo(): this;
    /**
     * Destroys all the sections in the aggregation {@link #getSections sections}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySections(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:editHeaderButtonPress editHeaderButtonPress}
     * event of this `sap.uxap.ObjectPageLayout`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachEditHeaderButtonPress(
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
     * @SINCE 1.93
     *
     * Detaches event handler `fnFunction` from the {@link #event:headerContentPinnedStateChange headerContentPinnedStateChange}
     * event of this `sap.uxap.ObjectPageLayout`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachHeaderContentPinnedStateChange(
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
     * @SINCE 1.40
     *
     * Detaches event handler `fnFunction` from the {@link #event:navigate navigate} event of this `sap.uxap.ObjectPageLayout`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachNavigate(
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
     * @SINCE 1.73
     *
     * Detaches event handler `fnFunction` from the {@link #event:sectionChange sectionChange} event of this
     * `sap.uxap.ObjectPageLayout`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSectionChange(
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
     * @SINCE 1.77
     *
     * Detaches event handler `fnFunction` from the {@link #event:subSectionVisibilityChange subSectionVisibilityChange}
     * event of this `sap.uxap.ObjectPageLayout`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSubSectionVisibilityChange(
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
     * Detaches event handler `fnFunction` from the {@link #event:toggleAnchorBar toggleAnchorBar} event of
     * this `sap.uxap.ObjectPageLayout`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachToggleAnchorBar(
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
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:editHeaderButtonPress editHeaderButtonPress} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireEditHeaderButtonPress(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @SINCE 1.93
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:headerContentPinnedStateChange headerContentPinnedStateChange} to attached
     * listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireHeaderContentPinnedStateChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * False or True values indicate the new pinned property value.
         */
        pinned?: boolean;
      }
    ): this;
    /**
     * @SINCE 1.40
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:navigate navigate} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireNavigate(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The selected section object.
         */
        section?: ObjectPageSection;
        /**
         * The selected subsection object.
         */
        subSection?: ObjectPageSubSection;
      }
    ): this;
    /**
     * @SINCE 1.73
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:sectionChange sectionChange} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSectionChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The section which the layout is scrolled to.
         */
        section?: ObjectPageSection;
        /**
         * The subsection which the layout is scrolled to.
         */
        subSection?: ObjectPageSubSection;
      }
    ): this;
    /**
     * @SINCE 1.77
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:subSectionVisibilityChange subSectionVisibilityChange} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSubSectionVisibilityChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Object whose keys are the visible SubSection IDs and their values are the SubSection instances
         */
        visibleSubSections?: object;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:toggleAnchorBar toggleAnchorBar} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireToggleAnchorBar(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * False indicates that the Anchor bar has just detached from the Header and became part of the scrolling
         * area. True means that the Anchor bar has just snapped to the Header.
         */
        fixed?: boolean;
      }
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getAlwaysShowContentHeader alwaysShowContentHeader}.
     *
     * Determines whether Header Content will always be expanded on desktop.
     *
     * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
     * for the `headerTitle` aggregation.
     *
     * Default value is `false`.
     *
     * @returns Value of property `alwaysShowContentHeader`
     */
    getAlwaysShowContentHeader(): boolean;
    /**
     * @SINCE 1.58
     *
     * Gets current value of property {@link #getBackgroundDesignAnchorBar backgroundDesignAnchorBar}.
     *
     * Determines the background color of the `AnchorBar`.
     *
     * **Note:** The default value of `backgroundDesignAnchorBar` property is null. If the property is not set,
     * the color of the background is `@sapUiObjectHeaderBackground`, which depends on the specific theme.
     *
     * @returns Value of property `backgroundDesignAnchorBar`
     */
    getBackgroundDesignAnchorBar():
      | BackgroundDesign
      | keyof typeof BackgroundDesign;
    /**
     * Gets current value of property {@link #getEnableLazyLoading enableLazyLoading}.
     *
     * Enable lazy loading for the Object page Subsections.
     *
     * Default value is `false`.
     *
     * @returns Value of property `enableLazyLoading`
     */
    getEnableLazyLoading(): boolean;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getFlexEnabled flexEnabled}.
     *
     * Specifies whether the object page enables flexibility features, such as hiding and adding sections.
     *  For more information about SAPUI5 flexibility, refer to the Developer Guide.
     *
     * Default value is `false`.
     *
     * @returns Value of property `flexEnabled`
     */
    getFlexEnabled(): boolean;
    /**
     * @SINCE 1.40
     *
     * Gets content of aggregation {@link #getFooter footer}.
     *
     * Object page floating footer.
     */
    getFooter(): IBar;
    /**
     * Gets content of aggregation {@link #getHeaderContent headerContent}.
     *
     * Object page header content - the dynamic part of the Object page header.
     */
    getHeaderContent(): Control[];
    /**
     * @SINCE 1.52
     *
     * Gets current value of property {@link #getHeaderContentPinnable headerContentPinnable}.
     *
     * Determines whether the Header Content area can be pinned.
     *
     * When set to `true`, a pin button is displayed within the Header Content area. The pin button allows the
     * user to make the Header Content always visible at the top of the page above any scrollable content.
     *
     * **Note:** This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle`
     * is used for the `headerTitle` aggregation.
     *
     * Default value is `true`.
     *
     * @returns Value of property `headerContentPinnable`
     */
    getHeaderContentPinnable(): boolean;
    /**
     * @SINCE 1.93
     *
     * Gets current value of property {@link #getHeaderContentPinned headerContentPinned}.
     *
     * Determines whether the `sap.uxap.ObjectPageDynamicHeaderContent` is pinned.
     *
     * The property can be changed explicitly with its setter or in the occurrence of the following user interactions:
     *
     * 	 - Toggling the pin/unpin button of `sap.uxap.ObjectPageDynamicHeaderContent`
     * 	 - Snapping the `sap.uxap.ObjectPageDynamicHeaderContent` by explicitly clicking on the `sap.uxap.ObjectPageDynamicHeaderTitle`
     *
     *
     * **Note: ** The property will only apply if the following rules are currently in use:
     * 	 - An instance of `sap.uxap.ObjectPageDynamicHeaderTitle` is used for the `headerTitle` aggregation.
     *
     * 	 - The `headerContentPinnable` property is `true`
     * 	 - The `sap.uxap.ObjectPageDynamicHeaderContent` is expanded
     * 	 - The `preserveHeaderStateOnScroll` property or the rules for it to work are `false`
     *
     * Default value is `false`.
     *
     * @returns Value of property `headerContentPinned`
     */
    getHeaderContentPinned(): boolean;
    /**
     * Gets content of aggregation {@link #getHeaderTitle headerTitle}.
     *
     * Object page header title - the upper, always static, part of the Object page header.
     */
    getHeaderTitle(): IHeaderTitle;
    /**
     * Gets current value of property {@link #getHeight height}.
     *
     * Determines the height of the ObjectPage.
     *
     * Default value is `"100%"`.
     *
     * @returns Value of property `height`
     */
    getHeight(): CSSSize;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getIsChildPage isChildPage}.
     *
     * Determines whether the page is a child page and renders it with a different design. Child pages have
     * an additional (darker/lighter) stripe on the left side of their header content area.
     *
     * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
     * for the `headerTitle` aggregation.
     *
     * Default value is `false`.
     *
     * @returns Value of property `isChildPage`
     */
    getIsChildPage(): boolean;
    /**
     * @SINCE 1.61
     *
     * Gets content of aggregation {@link #getLandmarkInfo landmarkInfo}.
     *
     * Accessible landmark settings to be applied on the containers of the `sap.uxap.ObjectPageLayout` control.
     *
     * If not set, no landmarks will be written.
     */
    getLandmarkInfo(): ObjectPageAccessibleLandmarkInfo;
    /**
     * @SINCE 1.52
     *
     * Gets current value of property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.
     *
     * Preserves the current header state when scrolling. For example, if the user expands the header by clicking
     * on the title and then scrolls down the page, the header will remain expanded.
     *
     * **Notes:**
     * 	 - This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle`
     * 			is used for the `headerTitle` aggregation.
     * 	 - Based on internal rules, the value of the property is not always taken into account - for example,
     * 			when the control is rendered on tablet or mobile and the control`s title and header are with height larger
     * 			than the given threshold.
     *
     * Default value is `false`.
     *
     * @returns Value of property `preserveHeaderStateOnScroll`
     */
    getPreserveHeaderStateOnScroll(): boolean;
    /**
     * Returns the `sap.ui.core.ScrollEnablement` delegate which is used with this control.
     *
     * @returns The scroll delegate instance
     */
    getScrollDelegate(): ScrollEnablement;
    /**
     * Returns the UI5 ID of the Section that is currently being scrolled.
     */
    getScrollingSectionId(): string;
    /**
     * Gets content of aggregation {@link #getSections sections}.
     *
     * The sections that make up the Object page content area.
     */
    getSections(): ObjectPageSection[];
    /**
     * @SINCE 1.44.0
     *
     * Gets current value of property {@link #getSectionTitleLevel sectionTitleLevel}.
     *
     * Determines the ARIA level of the `ObjectPageSection` and `ObjectPageSubSection` titles. The ARIA level
     * is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster
     * navigation.
     *
     *
     * **Note:**
     * 	 - Defining a `sectionTitleLevel` will add `aria-level` attribute from 1 to 6 instead of changing the
     * 			titles` HTML tag from H1 to H6.
     * For example: if `sectionTitleLevel` is `TitleLevel.H1`, it will result as aria-level of 1 added to the
     * `ObjectPageSection` title.
     *
     *
     * 	 -  The `ObjectPageSubSection` title would have `aria-level` one level lower than the defined. For example:
     * 			if `sectionTitleLevel` is `TitleLevel.H1`, it will result as aria-level of 2 added to the `ObjectPageSubSection`
     * 			title.
     *
     *
     * 	 -  It is possible to define a `titleLevel` on `ObjectPageSection` or `ObjectPageSubSection` level.
     * 			In this case the value of this property will be ignored.
     *
     * Default value is `Auto`.
     *
     * @returns Value of property `sectionTitleLevel`
     */
    getSectionTitleLevel(): TitleLevel | keyof typeof TitleLevel;
    /**
     * @SINCE 1.44.0
     *
     * ID of the element which is the current target of the association {@link #getSelectedSection selectedSection},
     * or `null`.
     */
    getSelectedSection(): ID;
    /**
     * Gets current value of property {@link #getShowAnchorBar showAnchorBar}.
     *
     * Determines whether the Navigation bar (Anchor bar) is displayed.
     *
     * Default value is `true`.
     *
     * @returns Value of property `showAnchorBar`
     */
    getShowAnchorBar(): boolean;
    /**
     * Gets current value of property {@link #getShowAnchorBarPopover showAnchorBarPopover}.
     *
     * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor
     * bar.
     *
     * Default value is `true`.
     *
     * @returns Value of property `showAnchorBarPopover`
     */
    getShowAnchorBarPopover(): boolean;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getShowEditHeaderButton showEditHeaderButton}.
     *
     * Determines whether an Edit button will be displayed in Header Content.
     *
     * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
     * for the `headerTitle` aggregation.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showEditHeaderButton`
     */
    getShowEditHeaderButton(): boolean;
    /**
     * @SINCE 1.40
     *
     * Gets current value of property {@link #getShowFooter showFooter}.
     *
     * Determines whether the footer is visible.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showFooter`
     */
    getShowFooter(): boolean;
    /**
     * Gets current value of property {@link #getShowHeaderContent showHeaderContent}.
     *
     * Determines the visibility of the Header content (headerContent aggregation).
     *
     * Default value is `true`.
     *
     * @returns Value of property `showHeaderContent`
     */
    getShowHeaderContent(): boolean;
    /**
     * @SINCE 1.32.0
     *
     * Gets current value of property {@link #getShowOnlyHighImportance showOnlyHighImportance}.
     *
     * Determines whether sections and subsections with importance Low and Medium are hidden even on large screens.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showOnlyHighImportance`
     */
    getShowOnlyHighImportance(): boolean;
    /**
     * Gets current value of property {@link #getShowTitleInHeaderContent showTitleInHeaderContent}.
     *
     * Determines whether the title, image, markers and selectTitleArrow are shown in the Header content area.
     *
     * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
     * for the `headerTitle` aggregation.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showTitleInHeaderContent`
     */
    getShowTitleInHeaderContent(): boolean;
    /**
     * Gets current value of property {@link #getSubSectionLayout subSectionLayout}.
     *
     * Determines whether Subsection titles are displayed on top or to the left of the Subsection content.
     *
     * Default value is `TitleOnTop`.
     *
     * @returns Value of property `subSectionLayout`
     */
    getSubSectionLayout():
      | ObjectPageSubSectionLayout
      | keyof typeof ObjectPageSubSectionLayout;
    /**
     * @SINCE 1.52
     *
     * Gets current value of property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.
     *
     * Determines whether the user can switch between the expanded/collapsed states of the `sap.uxap.ObjectPageDynamicHeaderContent`
     * by clicking on the `sap.uxap.ObjectPageDynamicHeaderTitle`. If set to `false`, the `sap.uxap.ObjectPageDynamicHeaderTitle`
     * is not clickable and the application must provide other means for expanding/collapsing the `sap.uxap.ObjectPageDynamicHeaderContent`,
     * if necessary.
     *
     * **Note:** This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle`
     * is used for the `headerTitle` aggregation.
     *
     * Default value is `true`.
     *
     * @returns Value of property `toggleHeaderOnTitleClick`
     */
    getToggleHeaderOnTitleClick(): boolean;
    /**
     * Gets current value of property {@link #getUpperCaseAnchorBar upperCaseAnchorBar}.
     *
     * Determines whether the Anchor bar items are displayed in upper case.
     *
     * Default value is `true`.
     *
     * @returns Value of property `upperCaseAnchorBar`
     */
    getUpperCaseAnchorBar(): boolean;
    /**
     * Gets current value of property {@link #getUseIconTabBar useIconTabBar}.
     *
     * Determines whether the navigation mode is tab-based instead of the default anchor bar. If enabled, the
     * sections are displayed separately on each tab rather than having all of them visible at the same time.
     *
     * **Note:** Keep in mind that the `sap.m.IconTabBar` control is no longer used for the tab navigation mode.
     *
     * Default value is `false`.
     *
     * @returns Value of property `useIconTabBar`
     */
    getUseIconTabBar(): boolean;
    /**
     * Gets current value of property {@link #getUseTwoColumnsForLargeScreen useTwoColumnsForLargeScreen}.
     *
     * Determines whether the to use two column layout for the L screen size.
     *
     * Default value is `false`.
     *
     * @returns Value of property `useTwoColumnsForLargeScreen`
     */
    getUseTwoColumnsForLargeScreen(): boolean;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getHeaderContent headerContent}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfHeaderContent(
      /**
       * The headerContent whose index is looked for
       */
      oHeaderContent: Control
    ): int;
    /**
     * Checks for the provided `sap.uxap.ObjectPageSection` in the aggregation {@link #getSections sections}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfSection(
      /**
       * The section whose index is looked for
       */
      oSection: ObjectPageSection
    ): int;
    /**
     * Inserts a headerContent into the aggregation {@link #getHeaderContent headerContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertHeaderContent(
      /**
       * The headerContent to insert; if empty, nothing is inserted
       */
      oHeaderContent: Control,
      /**
       * The `0`-based index the headerContent should be inserted at; for a negative value of `iIndex`, the headerContent
       * is inserted at position 0; for a value greater than the current size of the aggregation, the headerContent
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a section into the aggregation {@link #getSections sections}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertSection(
      /**
       * The section to insert; if empty, nothing is inserted
       */
      oSection: ObjectPageSection,
      /**
       * The `0`-based index the section should be inserted at; for a negative value of `iIndex`, the section
       * is inserted at position 0; for a value greater than the current size of the aggregation, the section
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * This triggers rerendering of itself and its children.
     */
    invalidate(
      /**
       * Child control for which the method was called
       *  If the child is an instance of `sap.uxap.ObjectPageSection` that corresponds to an inactive tab, the
       * invalidation will be suppressed (in iconTabBar mode)
       */
      oOrigin?: ManagedObject
    ): void;
    /**
     * Removes all the controls from the aggregation {@link #getHeaderContent headerContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllHeaderContent(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getSections sections}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllSections(): ObjectPageSection[];
    /**
     * Removes a headerContent from the aggregation {@link #getHeaderContent headerContent}.
     *
     * @returns The removed headerContent or `null`
     */
    removeHeaderContent(
      /**
       * The headerContent to remove or its index or id
       */
      vHeaderContent: int | string | Control
    ): Control | null;
    /**
     * Removes a section from the aggregation {@link #getSections sections}.
     *
     * @returns The removed section or `null`
     */
    removeSection(
      /**
       * The section to remove or its index or id
       */
      vSection: int | string | ObjectPageSection
    ): ObjectPageSection | null;
    /**
     * Scrolls the Object page to the given Section.
     */
    scrollToSection(
      /**
       * The Section ID to scroll to
       */
      sId: string,
      /**
       * Scroll duration (in ms)
       */
      iDuration?: int,
      /**
       * Additional pixels to scroll
       */
      iOffset?: int
    ): void;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getAlwaysShowContentHeader alwaysShowContentHeader}.
     *
     * Determines whether Header Content will always be expanded on desktop.
     *
     * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
     * for the `headerTitle` aggregation.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAlwaysShowContentHeader(
      /**
       * New value for property `alwaysShowContentHeader`
       */
      bAlwaysShowContentHeader?: boolean
    ): this;
    /**
     * @SINCE 1.58
     *
     * Sets the value of the `backgroundDesignAnchorBar` property.
     *
     * @returns `this` to allow method chaining
     */
    setBackgroundDesignAnchorBar(
      /**
       * new value of the `backgroundDesignAnchorBar`
       */
      sBackgroundDesignAnchorBar:
        | BackgroundDesign
        | keyof typeof BackgroundDesign
    ): this;
    /**
     * Sets a new value for property {@link #getEnableLazyLoading enableLazyLoading}.
     *
     * Enable lazy loading for the Object page Subsections.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableLazyLoading(
      /**
       * New value for property `enableLazyLoading`
       */
      bEnableLazyLoading?: boolean
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getFlexEnabled flexEnabled}.
     *
     * Specifies whether the object page enables flexibility features, such as hiding and adding sections.
     *  For more information about SAPUI5 flexibility, refer to the Developer Guide.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFlexEnabled(
      /**
       * New value for property `flexEnabled`
       */
      bFlexEnabled?: boolean
    ): this;
    /**
     * @SINCE 1.40
     *
     * Sets the aggregated {@link #getFooter footer}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFooter(
      /**
       * The footer to set
       */
      oFooter: IBar
    ): this;
    /**
     * @SINCE 1.52
     *
     * Sets a new value for property {@link #getHeaderContentPinnable headerContentPinnable}.
     *
     * Determines whether the Header Content area can be pinned.
     *
     * When set to `true`, a pin button is displayed within the Header Content area. The pin button allows the
     * user to make the Header Content always visible at the top of the page above any scrollable content.
     *
     * **Note:** This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle`
     * is used for the `headerTitle` aggregation.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderContentPinnable(
      /**
       * New value for property `headerContentPinnable`
       */
      bHeaderContentPinnable?: boolean
    ): this;
    /**
     * @SINCE 1.93
     *
     * Sets a new value for property {@link #getHeaderContentPinned headerContentPinned}.
     *
     * Determines whether the `sap.uxap.ObjectPageDynamicHeaderContent` is pinned.
     *
     * The property can be changed explicitly with its setter or in the occurrence of the following user interactions:
     *
     * 	 - Toggling the pin/unpin button of `sap.uxap.ObjectPageDynamicHeaderContent`
     * 	 - Snapping the `sap.uxap.ObjectPageDynamicHeaderContent` by explicitly clicking on the `sap.uxap.ObjectPageDynamicHeaderTitle`
     *
     *
     * **Note: ** The property will only apply if the following rules are currently in use:
     * 	 - An instance of `sap.uxap.ObjectPageDynamicHeaderTitle` is used for the `headerTitle` aggregation.
     *
     * 	 - The `headerContentPinnable` property is `true`
     * 	 - The `sap.uxap.ObjectPageDynamicHeaderContent` is expanded
     * 	 - The `preserveHeaderStateOnScroll` property or the rules for it to work are `false`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderContentPinned(
      /**
       * New value for property `headerContentPinned`
       */
      bHeaderContentPinned?: boolean
    ): this;
    /**
     * Sets the aggregated {@link #getHeaderTitle headerTitle}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderTitle(
      /**
       * The headerTitle to set
       */
      oHeaderTitle: IHeaderTitle
    ): this;
    /**
     * Sets a new value for property {@link #getHeight height}.
     *
     * Determines the height of the ObjectPage.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"100%"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeight(
      /**
       * New value for property `height`
       */
      sHeight?: CSSSize
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getIsChildPage isChildPage}.
     *
     * Determines whether the page is a child page and renders it with a different design. Child pages have
     * an additional (darker/lighter) stripe on the left side of their header content area.
     *
     * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
     * for the `headerTitle` aggregation.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setIsChildPage(
      /**
       * New value for property `isChildPage`
       */
      bIsChildPage?: boolean
    ): this;
    /**
     * @SINCE 1.61
     *
     * Sets the aggregated {@link #getLandmarkInfo landmarkInfo}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLandmarkInfo(
      /**
       * The landmarkInfo to set
       */
      oLandmarkInfo: ObjectPageAccessibleLandmarkInfo
    ): this;
    /**
     * @SINCE 1.52
     *
     * Sets a new value for property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.
     *
     * Preserves the current header state when scrolling. For example, if the user expands the header by clicking
     * on the title and then scrolls down the page, the header will remain expanded.
     *
     * **Notes:**
     * 	 - This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle`
     * 			is used for the `headerTitle` aggregation.
     * 	 - Based on internal rules, the value of the property is not always taken into account - for example,
     * 			when the control is rendered on tablet or mobile and the control`s title and header are with height larger
     * 			than the given threshold.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setPreserveHeaderStateOnScroll(
      /**
       * New value for property `preserveHeaderStateOnScroll`
       */
      bPreserveHeaderStateOnScroll?: boolean
    ): this;
    /**
     * @SINCE 1.44.0
     *
     * Sets a new value for property {@link #getSectionTitleLevel sectionTitleLevel}.
     *
     * Determines the ARIA level of the `ObjectPageSection` and `ObjectPageSubSection` titles. The ARIA level
     * is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster
     * navigation.
     *
     *
     * **Note:**
     * 	 - Defining a `sectionTitleLevel` will add `aria-level` attribute from 1 to 6 instead of changing the
     * 			titles` HTML tag from H1 to H6.
     * For example: if `sectionTitleLevel` is `TitleLevel.H1`, it will result as aria-level of 1 added to the
     * `ObjectPageSection` title.
     *
     *
     * 	 -  The `ObjectPageSubSection` title would have `aria-level` one level lower than the defined. For example:
     * 			if `sectionTitleLevel` is `TitleLevel.H1`, it will result as aria-level of 2 added to the `ObjectPageSubSection`
     * 			title.
     *
     *
     * 	 -  It is possible to define a `titleLevel` on `ObjectPageSection` or `ObjectPageSubSection` level.
     * 			In this case the value of this property will be ignored.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Auto`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSectionTitleLevel(
      /**
       * New value for property `sectionTitleLevel`
       */
      sSectionTitleLevel?: TitleLevel | keyof typeof TitleLevel
    ): this;
    /**
     * Sets the section that should be selected.
     *
     * The section can either be given by itself or by its id.
     *
     * If left unspecified, then the page automatically sets the value to the first visible section before rendering.
     * The value never remains empty because `sap.uxap.ObjectPageLayout` should always have one of its sections
     * selected (unless it has 0 visible sections).
     *
     * **Note:** Updating the `selectedSection` with a value of `null` resets the `selectedSection` to the first
     * visible section and scrolls the page to the top.
     *
     * @returns Returns `this` to allow method chaining
     */
    setSelectedSection(
      /**
       * The ID or the section instance that should be selected Note that `undefined` is not a valid argument
       */
      sId: string | ObjectPageSection
    ): this;
    /**
     * Sets a new value for property {@link #getShowAnchorBar showAnchorBar}.
     *
     * Determines whether the Navigation bar (Anchor bar) is displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowAnchorBar(
      /**
       * New value for property `showAnchorBar`
       */
      bShowAnchorBar?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowAnchorBarPopover showAnchorBarPopover}.
     *
     * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor
     * bar.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowAnchorBarPopover(
      /**
       * New value for property `showAnchorBarPopover`
       */
      bShowAnchorBarPopover?: boolean
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getShowEditHeaderButton showEditHeaderButton}.
     *
     * Determines whether an Edit button will be displayed in Header Content.
     *
     * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
     * for the `headerTitle` aggregation.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowEditHeaderButton(
      /**
       * New value for property `showEditHeaderButton`
       */
      bShowEditHeaderButton?: boolean
    ): this;
    /**
     * @SINCE 1.40
     *
     * Sets a new value for property {@link #getShowFooter showFooter}.
     *
     * Determines whether the footer is visible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowFooter(
      /**
       * New value for property `showFooter`
       */
      bShowFooter?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowHeaderContent showHeaderContent}.
     *
     * Determines the visibility of the Header content (headerContent aggregation).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowHeaderContent(
      /**
       * New value for property `showHeaderContent`
       */
      bShowHeaderContent?: boolean
    ): this;
    /**
     * @SINCE 1.32.0
     *
     * Sets a new value for property {@link #getShowOnlyHighImportance showOnlyHighImportance}.
     *
     * Determines whether sections and subsections with importance Low and Medium are hidden even on large screens.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowOnlyHighImportance(
      /**
       * New value for property `showOnlyHighImportance`
       */
      bShowOnlyHighImportance?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowTitleInHeaderContent showTitleInHeaderContent}.
     *
     * Determines whether the title, image, markers and selectTitleArrow are shown in the Header content area.
     *
     * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
     * for the `headerTitle` aggregation.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowTitleInHeaderContent(
      /**
       * New value for property `showTitleInHeaderContent`
       */
      bShowTitleInHeaderContent?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSubSectionLayout subSectionLayout}.
     *
     * Determines whether Subsection titles are displayed on top or to the left of the Subsection content.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `TitleOnTop`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSubSectionLayout(
      /**
       * New value for property `subSectionLayout`
       */
      sSubSectionLayout?:
        | ObjectPageSubSectionLayout
        | keyof typeof ObjectPageSubSectionLayout
    ): this;
    /**
     * @SINCE 1.52
     *
     * Sets a new value for property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.
     *
     * Determines whether the user can switch between the expanded/collapsed states of the `sap.uxap.ObjectPageDynamicHeaderContent`
     * by clicking on the `sap.uxap.ObjectPageDynamicHeaderTitle`. If set to `false`, the `sap.uxap.ObjectPageDynamicHeaderTitle`
     * is not clickable and the application must provide other means for expanding/collapsing the `sap.uxap.ObjectPageDynamicHeaderContent`,
     * if necessary.
     *
     * **Note:** This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle`
     * is used for the `headerTitle` aggregation.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setToggleHeaderOnTitleClick(
      /**
       * New value for property `toggleHeaderOnTitleClick`
       */
      bToggleHeaderOnTitleClick?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getUpperCaseAnchorBar upperCaseAnchorBar}.
     *
     * Determines whether the Anchor bar items are displayed in upper case.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setUpperCaseAnchorBar(
      /**
       * New value for property `upperCaseAnchorBar`
       */
      bUpperCaseAnchorBar?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getUseIconTabBar useIconTabBar}.
     *
     * Determines whether the navigation mode is tab-based instead of the default anchor bar. If enabled, the
     * sections are displayed separately on each tab rather than having all of them visible at the same time.
     *
     * **Note:** Keep in mind that the `sap.m.IconTabBar` control is no longer used for the tab navigation mode.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setUseIconTabBar(
      /**
       * New value for property `useIconTabBar`
       */
      bUseIconTabBar?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getUseTwoColumnsForLargeScreen useTwoColumnsForLargeScreen}.
     *
     * Determines whether the to use two column layout for the L screen size.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setUseTwoColumnsForLargeScreen(
      /**
       * New value for property `useTwoColumnsForLargeScreen`
       */
      bUseTwoColumnsForLargeScreen?: boolean
    ): this;
  }

  export interface $ObjectPageLayoutSettings extends $ControlSettings {
    /**
     * Determines whether the Navigation bar (Anchor bar) is displayed.
     */
    showAnchorBar?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor
     * bar.
     */
    showAnchorBarPopover?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the Anchor bar items are displayed in upper case.
     */
    upperCaseAnchorBar?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.58
     *
     * Determines the background color of the `AnchorBar`.
     *
     * **Note:** The default value of `backgroundDesignAnchorBar` property is null. If the property is not set,
     * the color of the background is `@sapUiObjectHeaderBackground`, which depends on the specific theme.
     */
    backgroundDesignAnchorBar?:
      | (BackgroundDesign | keyof typeof BackgroundDesign)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines the height of the ObjectPage.
     */
    height?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Enable lazy loading for the Object page Subsections.
     */
    enableLazyLoading?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether Subsection titles are displayed on top or to the left of the Subsection content.
     */
    subSectionLayout?:
      | (ObjectPageSubSectionLayout | keyof typeof ObjectPageSubSectionLayout)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * @SINCE 1.44.0
     *
     * Determines the ARIA level of the `ObjectPageSection` and `ObjectPageSubSection` titles. The ARIA level
     * is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster
     * navigation.
     *
     *
     * **Note:**
     * 	 - Defining a `sectionTitleLevel` will add `aria-level` attribute from 1 to 6 instead of changing the
     * 			titles` HTML tag from H1 to H6.
     * For example: if `sectionTitleLevel` is `TitleLevel.H1`, it will result as aria-level of 1 added to the
     * `ObjectPageSection` title.
     *
     *
     * 	 -  The `ObjectPageSubSection` title would have `aria-level` one level lower than the defined. For example:
     * 			if `sectionTitleLevel` is `TitleLevel.H1`, it will result as aria-level of 2 added to the `ObjectPageSubSection`
     * 			title.
     *
     *
     * 	 -  It is possible to define a `titleLevel` on `ObjectPageSection` or `ObjectPageSubSection` level.
     * 			In this case the value of this property will be ignored.
     */
    sectionTitleLevel?:
      | (TitleLevel | keyof typeof TitleLevel)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines whether the navigation mode is tab-based instead of the default anchor bar. If enabled, the
     * sections are displayed separately on each tab rather than having all of them visible at the same time.
     *
     * **Note:** Keep in mind that the `sap.m.IconTabBar` control is no longer used for the tab navigation mode.
     */
    useIconTabBar?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines the visibility of the Header content (headerContent aggregation).
     */
    showHeaderContent?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the to use two column layout for the L screen size.
     */
    useTwoColumnsForLargeScreen?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the title, image, markers and selectTitleArrow are shown in the Header content area.
     *
     * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
     * for the `headerTitle` aggregation.
     */
    showTitleInHeaderContent?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.32.0
     *
     * Determines whether sections and subsections with importance Low and Medium are hidden even on large screens.
     */
    showOnlyHighImportance?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.34.0
     *
     * Determines whether the page is a child page and renders it with a different design. Child pages have
     * an additional (darker/lighter) stripe on the left side of their header content area.
     *
     * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
     * for the `headerTitle` aggregation.
     */
    isChildPage?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.34.0
     *
     * Determines whether Header Content will always be expanded on desktop.
     *
     * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
     * for the `headerTitle` aggregation.
     */
    alwaysShowContentHeader?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.52
     *
     * Determines whether the Header Content area can be pinned.
     *
     * When set to `true`, a pin button is displayed within the Header Content area. The pin button allows the
     * user to make the Header Content always visible at the top of the page above any scrollable content.
     *
     * **Note:** This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle`
     * is used for the `headerTitle` aggregation.
     */
    headerContentPinnable?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.93
     *
     * Determines whether the `sap.uxap.ObjectPageDynamicHeaderContent` is pinned.
     *
     * The property can be changed explicitly with its setter or in the occurrence of the following user interactions:
     *
     * 	 - Toggling the pin/unpin button of `sap.uxap.ObjectPageDynamicHeaderContent`
     * 	 - Snapping the `sap.uxap.ObjectPageDynamicHeaderContent` by explicitly clicking on the `sap.uxap.ObjectPageDynamicHeaderTitle`
     *
     *
     * **Note: ** The property will only apply if the following rules are currently in use:
     * 	 - An instance of `sap.uxap.ObjectPageDynamicHeaderTitle` is used for the `headerTitle` aggregation.
     *
     * 	 - The `headerContentPinnable` property is `true`
     * 	 - The `sap.uxap.ObjectPageDynamicHeaderContent` is expanded
     * 	 - The `preserveHeaderStateOnScroll` property or the rules for it to work are `false`
     */
    headerContentPinned?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.52
     *
     * Determines whether the user can switch between the expanded/collapsed states of the `sap.uxap.ObjectPageDynamicHeaderContent`
     * by clicking on the `sap.uxap.ObjectPageDynamicHeaderTitle`. If set to `false`, the `sap.uxap.ObjectPageDynamicHeaderTitle`
     * is not clickable and the application must provide other means for expanding/collapsing the `sap.uxap.ObjectPageDynamicHeaderContent`,
     * if necessary.
     *
     * **Note:** This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle`
     * is used for the `headerTitle` aggregation.
     */
    toggleHeaderOnTitleClick?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.52
     *
     * Preserves the current header state when scrolling. For example, if the user expands the header by clicking
     * on the title and then scrolls down the page, the header will remain expanded.
     *
     * **Notes:**
     * 	 - This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle`
     * 			is used for the `headerTitle` aggregation.
     * 	 - Based on internal rules, the value of the property is not always taken into account - for example,
     * 			when the control is rendered on tablet or mobile and the control`s title and header are with height larger
     * 			than the given threshold.
     */
    preserveHeaderStateOnScroll?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.34.0
     *
     * Determines whether an Edit button will be displayed in Header Content.
     *
     * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
     * for the `headerTitle` aggregation.
     */
    showEditHeaderButton?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.34.0
     *
     * Specifies whether the object page enables flexibility features, such as hiding and adding sections.
     *  For more information about SAPUI5 flexibility, refer to the Developer Guide.
     */
    flexEnabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.40
     *
     * Determines whether the footer is visible.
     */
    showFooter?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The sections that make up the Object page content area.
     */
    sections?:
      | ObjectPageSection[]
      | ObjectPageSection
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Object page header title - the upper, always static, part of the Object page header.
     */
    headerTitle?: IHeaderTitle;

    /**
     * Object page header content - the dynamic part of the Object page header.
     */
    headerContent?:
      | Control[]
      | Control
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * @SINCE 1.40
     *
     * Object page floating footer.
     */
    footer?: IBar;

    /**
     * @SINCE 1.61
     *
     * Accessible landmark settings to be applied on the containers of the `sap.uxap.ObjectPageLayout` control.
     *
     * If not set, no landmarks will be written.
     */
    landmarkInfo?: ObjectPageAccessibleLandmarkInfo;

    /**
     * @SINCE 1.44.0
     *
     * The section that is selected by default on load.
     */
    selectedSection?: ObjectPageSection | string;

    /**
     * @SINCE 1.93
     *
     * The event is fired when the `headerContentPinned` property is changed via user interaction.
     */
    headerContentPinnedStateChange?: (oEvent: Event) => void;

    /**
     * The event is fired when the Anchor bar is switched from moving to fixed or the other way round.
     */
    toggleAnchorBar?: (oEvent: Event) => void;

    /**
     * @SINCE 1.73
     *
     * Fired when the current section is changed by scrolling.
     */
    sectionChange?: (oEvent: Event) => void;

    /**
     * The event is fired when the Edit Header button is pressed
     */
    editHeaderButtonPress?: (oEvent: Event) => void;

    /**
     * @SINCE 1.40
     *
     * The event is fired when the selected section is changed using the navigation.
     */
    navigate?: (oEvent: Event) => void;

    /**
     * @SINCE 1.77
     *
     * Fired when the visibility of subsections is changed.
     */
    subSectionVisibilityChange?: (oEvent: Event) => void;
  }
}

declare module "sap/uxap/ObjectPageLazyLoader" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import Control from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.38
   *
   * A helper element that enables a "stashed-based" lazy loading approach for the content of the {@link sap.uxap.ObjectPageSubSection}
   * control.
   *
   * `ObjectPageLazyLoader` is intended to be used in a declarative way only (for example, in a view) with
   * the `stashed` property set to `true`, and is recommended to be used only once per subsection as its sole
   * content.
   *
   * `ObjectPageLazyLoader` utilizes UI5's stashing mechanism and is a lightweight alternative to the native
   * block-based Lazy Loading of the `ObjectPageLayout`. Wrapping the content of a subsection in an `ObjectPageLazyLoader`
   * with `stashed=true` will make the content unstash automatically as the user scrolls.
   *
   * **Note:** Subsections are required to have an ID when used with `ObjectPageLazyLoader`.
   */
  export default class ObjectPageLazyLoader extends UI5Element {
    /**
     * Constructor for a new `ObjectPageLazyLoader`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ObjectPageLazyLoaderSettings
    );
    /**
     * Constructor for a new `ObjectPageLazyLoader`.
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
      mSettings?: $ObjectPageLazyLoaderSettings
    );

    /**
     * Creates a new subclass of class sap.uxap.ObjectPageLazyLoader with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ObjectPageLazyLoader>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.uxap.ObjectPageLazyLoader.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some content to the aggregation {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addContent(
      /**
       * The content to add; if empty, nothing is inserted
       */
      oContent: Control
    ): this;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Controls to be displayed after this element is unstashed
     */
    getContent(): Control[];
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfContent(
      /**
       * The content whose index is looked for
       */
      oContent: Control
    ): int;
    /**
     * Inserts a content into the aggregation {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
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
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllContent(): Control[];
    /**
     * Removes a content from the aggregation {@link #getContent content}.
     *
     * @returns The removed content or `null`
     */
    removeContent(
      /**
       * The content to remove or its index or id
       */
      vContent: int | string | Control
    ): Control | null;
  }

  export interface $ObjectPageLazyLoaderSettings extends $ElementSettings {
    /**
     * Controls to be displayed after this element is unstashed
     */
    content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;
  }
}

declare module "sap/uxap/ObjectPageSection" {
  import {
    default as ObjectPageSectionBase,
    $ObjectPageSectionBaseSettings,
  } from "sap/uxap/ObjectPageSectionBase";

  import ObjectPageSubSection from "sap/uxap/ObjectPageSubSection";

  import Control from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { ID } from "sap/ui/core/library";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.26
   *
   * Top-level information container of an {@link sap.uxap.ObjectPageLayout}.
   *
   * The `ObjectPageSection`'s purpose is to aggregate subsections.
   *
   * **Note:** This control is intended to be used only as part of the `ObjectPageLayout`.
   */
  export default class ObjectPageSection extends ObjectPageSectionBase {
    /**
     * Constructor for a new `ObjectPageSection`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ObjectPageSectionSettings
    );
    /**
     * Constructor for a new `ObjectPageSection`.
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
      mSettings?: $ObjectPageSectionSettings
    );

    /**
     * Creates a new subclass of class sap.uxap.ObjectPageSection with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.uxap.ObjectPageSectionBase.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ObjectPageSection>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.uxap.ObjectPageSection.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some subSection to the aggregation {@link #getSubSections subSections}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addSubSection(
      /**
       * The subSection to add; if empty, nothing is inserted
       */
      oSubSection: ObjectPageSubSection
    ): this;
    /**
     * @SINCE 1.106
     *
     * Destroys the heading in the aggregation {@link #getHeading heading}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyHeading(): this;
    /**
     * Destroys all the subSections in the aggregation {@link #getSubSections subSections}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySubSections(): this;
    /**
     * @SINCE 1.106
     *
     * Gets content of aggregation {@link #getHeading heading}.
     *
     * Section heading content.
     *
     * Note: For some accessibility concerns we encourage you to use non-focusable elements.
     */
    getHeading(): Control;
    /**
     * ID of the element which is the current target of the association {@link #getSelectedSubSection selectedSubSection},
     * or `null`.
     */
    getSelectedSubSection(): ID;
    /**
     * Gets current value of property {@link #getShowTitle showTitle}.
     *
     * Determines whether to display the Section title or not.
     *
     * Default value is `true`.
     *
     * @returns Value of property `showTitle`
     */
    getShowTitle(): boolean;
    /**
     * Gets content of aggregation {@link #getSubSections subSections}.
     *
     * The list of Subsections.
     */
    getSubSections(): ObjectPageSubSection[];
    /**
     * Gets current value of property {@link #getTitleUppercase titleUppercase}.
     *
     * Determines whether the Section title is displayed in upper case.
     *
     * Default value is `true`.
     *
     * @returns Value of property `titleUppercase`
     */
    getTitleUppercase(): boolean;
    /**
     * Gets current value of property {@link #getWrapTitle wrapTitle}.
     *
     * Determines whether the Section title wraps on multiple lines, when the available space is not enough.
     *
     * Default value is `false`.
     *
     * @returns Value of property `wrapTitle`
     */
    getWrapTitle(): boolean;
    /**
     * Checks for the provided `sap.uxap.ObjectPageSubSection` in the aggregation {@link #getSubSections subSections}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfSubSection(
      /**
       * The subSection whose index is looked for
       */
      oSubSection: ObjectPageSubSection
    ): int;
    /**
     * Inserts a subSection into the aggregation {@link #getSubSections subSections}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertSubSection(
      /**
       * The subSection to insert; if empty, nothing is inserted
       */
      oSubSection: ObjectPageSubSection,
      /**
       * The `0`-based index the subSection should be inserted at; for a negative value of `iIndex`, the subSection
       * is inserted at position 0; for a value greater than the current size of the aggregation, the subSection
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getSubSections subSections}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllSubSections(): ObjectPageSubSection[];
    /**
     * Removes a subSection from the aggregation {@link #getSubSections subSections}.
     *
     * @returns The removed subSection or `null`
     */
    removeSubSection(
      /**
       * The subSection to remove or its index or id
       */
      vSubSection: int | string | ObjectPageSubSection
    ): ObjectPageSubSection | null;
    /**
     * @SINCE 1.106
     *
     * Sets the aggregated {@link #getHeading heading}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeading(
      /**
       * The heading to set
       */
      oHeading: Control
    ): this;
    /**
     * Sets the associated {@link #getSelectedSubSection selectedSubSection}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelectedSubSection(
      /**
       * ID of an element which becomes the new target of this selectedSubSection association; alternatively,
       * an element instance may be given
       */
      oSelectedSubSection: ID | ObjectPageSubSection
    ): this;
    /**
     * Sets a new value for property {@link #getShowTitle showTitle}.
     *
     * Determines whether to display the Section title or not.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowTitle(
      /**
       * New value for property `showTitle`
       */
      bShowTitle?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getTitleUppercase titleUppercase}.
     *
     * Determines whether the Section title is displayed in upper case.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitleUppercase(
      /**
       * New value for property `titleUppercase`
       */
      bTitleUppercase?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getWrapTitle wrapTitle}.
     *
     * Determines whether the Section title wraps on multiple lines, when the available space is not enough.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setWrapTitle(
      /**
       * New value for property `wrapTitle`
       */
      bWrapTitle?: boolean
    ): this;
  }

  export interface $ObjectPageSectionSettings
    extends $ObjectPageSectionBaseSettings {
    /**
     * Determines whether to display the Section title or not.
     */
    showTitle?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the Section title is displayed in upper case.
     */
    titleUppercase?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the Section title wraps on multiple lines, when the available space is not enough.
     */
    wrapTitle?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The list of Subsections.
     */
    subSections?:
      | ObjectPageSubSection[]
      | ObjectPageSubSection
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * @SINCE 1.106
     *
     * Section heading content.
     *
     * Note: For some accessibility concerns we encourage you to use non-focusable elements.
     */
    heading?: Control;

    /**
     * The most recently selected Subsection by the user.
     */
    selectedSubSection?: ObjectPageSubSection | string;
  }
}

declare module "sap/uxap/ObjectPageSectionBase" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import Button from "sap/m/Button";

  import { Importance } from "sap/uxap/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { TitleLevel } from "sap/ui/core/library";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.26
   *
   * An abstract container for sections and subsections in the {@link sap.uxap.ObjectPageLayout}.
   */
  export default class ObjectPageSectionBase extends Control {
    /**
     * Constructor for a new `ObjectPageSectionBase`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ObjectPageSectionBaseSettings
    );
    /**
     * Constructor for a new `ObjectPageSectionBase`.
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
      mSettings?: $ObjectPageSectionBaseSettings
    );

    /**
     * Creates a new subclass of class sap.uxap.ObjectPageSectionBase with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ObjectPageSectionBase>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.uxap.ObjectPageSectionBase.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Explicitly ask to connect to the UI5 model tree
     */
    connectToModels(): void;
    /**
     * Destroys the customAnchorBarButton in the aggregation {@link #getCustomAnchorBarButton customAnchorBarButton}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyCustomAnchorBarButton(): this;
    /**
     * Gets content of aggregation {@link #getCustomAnchorBarButton customAnchorBarButton}.
     *
     * The custom button that will provide a link to the section in the ObjectPageLayout anchor bar. This button
     * will be used as a custom template to be into the ObjectPageLayout anchorBar area, therefore property
     * changes happening on this button template after the first rendering won't affect the actual button copy
     * used in the anchorBar.
     *
     * If you want to change some of the button properties, you would need to bind them to a model.
     */
    getCustomAnchorBarButton(): Button;
    /**
     * @SINCE 1.32.0
     *
     * Gets current value of property {@link #getImportance importance}.
     *
     * Determines whether the section will be hidden on low resolutions.
     *
     * Default value is `High`.
     *
     * @returns Value of property `importance`
     */
    getImportance(): Importance | keyof typeof Importance;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Returns the control name text.
     *
     * To be overwritten by the specific control method.
     *
     * @returns control name text
     */
    getSectionText(): string;
    /**
     * Gets current value of property {@link #getTitle title}.
     *
     * Defines the title of the respective section/subsection.
     *
     * **Note:** If a subsection is the only one (or the only one visible) within a section, its title is displayed
     * instead of the section title. This behavior is true even if the `showTitle` propeprty of {@link sap.uxap.ObjectPageSubSection}
     * is set to `false`.
     *
     * @returns Value of property `title`
     */
    getTitle(): string;
    /**
     * @SINCE 1.44.0
     *
     * Gets current value of property {@link #getTitleLevel titleLevel}.
     *
     * Determines the ARIA level of the `ObjectPageSectionBase` title. The ARIA level is used by assisting technologies,
     * such as screen readers, to create a hierarchical site map for faster navigation.
     *
     * **Note:** Defining a `titleLevel` will add `aria-level` attribute from 1 to 6, instead of changing the
     * `ObjectPageSectionBase` title HTML tag from H1 to H6.
     * For example: if `titleLevel` is `TitleLevel.H1`, it will result as aria-level of 1 added to the `ObjectPageSectionBase`
     * title.
     *
     * Default value is `Auto`.
     *
     * @returns Value of property `titleLevel`
     */
    getTitleLevel(): TitleLevel | keyof typeof TitleLevel;
    /**
     * Gets current value of property {@link #getVisible visible}.
     *
     * Invisible ObjectPageSectionBase are not rendered
     *
     * Default value is `true`.
     *
     * @returns Value of property `visible`
     */
    getVisible(): boolean;
    /**
     * Sets the aggregated {@link #getCustomAnchorBarButton customAnchorBarButton}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setCustomAnchorBarButton(
      /**
       * The customAnchorBarButton to set
       */
      oCustomAnchorBarButton: Button
    ): this;
    /**
     * @SINCE 1.32.0
     *
     * Sets a new value for property {@link #getImportance importance}.
     *
     * Determines whether the section will be hidden on low resolutions.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `High`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setImportance(
      /**
       * New value for property `importance`
       */
      sImportance?: Importance | keyof typeof Importance
    ): this;
    /**
     * Sets a new value for property {@link #getTitle title}.
     *
     * Defines the title of the respective section/subsection.
     *
     * **Note:** If a subsection is the only one (or the only one visible) within a section, its title is displayed
     * instead of the section title. This behavior is true even if the `showTitle` propeprty of {@link sap.uxap.ObjectPageSubSection}
     * is set to `false`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitle(
      /**
       * New value for property `title`
       */
      sTitle?: string
    ): this;
    /**
     * @SINCE 1.44.0
     *
     * Sets a new value for property {@link #getTitleLevel titleLevel}.
     *
     * Determines the ARIA level of the `ObjectPageSectionBase` title. The ARIA level is used by assisting technologies,
     * such as screen readers, to create a hierarchical site map for faster navigation.
     *
     * **Note:** Defining a `titleLevel` will add `aria-level` attribute from 1 to 6, instead of changing the
     * `ObjectPageSectionBase` title HTML tag from H1 to H6.
     * For example: if `titleLevel` is `TitleLevel.H1`, it will result as aria-level of 1 added to the `ObjectPageSectionBase`
     * title.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Auto`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitleLevel(
      /**
       * New value for property `titleLevel`
       */
      sTitleLevel?: TitleLevel | keyof typeof TitleLevel
    ): this;
    /**
     * Sets a new value for property {@link #getVisible visible}.
     *
     * Invisible ObjectPageSectionBase are not rendered
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setVisible(
      /**
       * New value for property `visible`
       */
      bVisible?: boolean
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Performs the update of the invisible text label. This method is called for example when the section title
     * is changed.
     *
     * @returns this for chaining
     */
    updateInvisibleTextLabelValue(): this;
  }

  export interface $ObjectPageSectionBaseSettings extends $ControlSettings {
    /**
     * Defines the title of the respective section/subsection.
     *
     * **Note:** If a subsection is the only one (or the only one visible) within a section, its title is displayed
     * instead of the section title. This behavior is true even if the `showTitle` propeprty of {@link sap.uxap.ObjectPageSubSection}
     * is set to `false`.
     */
    title?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.44.0
     *
     * Determines the ARIA level of the `ObjectPageSectionBase` title. The ARIA level is used by assisting technologies,
     * such as screen readers, to create a hierarchical site map for faster navigation.
     *
     * **Note:** Defining a `titleLevel` will add `aria-level` attribute from 1 to 6, instead of changing the
     * `ObjectPageSectionBase` title HTML tag from H1 to H6.
     * For example: if `titleLevel` is `TitleLevel.H1`, it will result as aria-level of 1 added to the `ObjectPageSectionBase`
     * title.
     */
    titleLevel?:
      | (TitleLevel | keyof typeof TitleLevel)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Invisible ObjectPageSectionBase are not rendered
     */
    visible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.32.0
     *
     * Determines whether the section will be hidden on low resolutions.
     */
    importance?:
      | (Importance | keyof typeof Importance)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * The custom button that will provide a link to the section in the ObjectPageLayout anchor bar. This button
     * will be used as a custom template to be into the ObjectPageLayout anchorBar area, therefore property
     * changes happening on this button template after the first rendering won't affect the actual button copy
     * used in the anchorBar.
     *
     * If you want to change some of the button properties, you would need to bind them to a model.
     */
    customAnchorBarButton?: Button;
  }
}

declare module "sap/uxap/ObjectPageSubSection" {
  import {
    default as ObjectPageSectionBase,
    $ObjectPageSectionBaseSettings,
  } from "sap/uxap/ObjectPageSectionBase";

  import Control from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { ObjectPageSubSectionMode } from "sap/uxap/library";

  import BlockBase from "sap/uxap/BlockBase";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.26
   *
   * Second-level information container of an {@link sap.uxap.ObjectPageLayout}.
   *
   * An `ObjectPageSubSection` may only be used within sections in the `ObjectPageLayout`. Subsections are
   * used to display primary information in the `blocks` aggregation (always visible) and not-so-important
   * information in the `moreBlocks` aggregation. The content in the `moreBlocks` aggregation is initially
   * hidden, but may be accessed with a "See more" (...) button.
   *
   * As of version 1.61, applications can enable auto-expand of the subsections to fit the sections container
   * by adding the `sapUxAPObjectPageSubSectionFitContainer` class to the subsection. This is useful in situations
   * where the sub-section contains a control that has “100%” height, for example, `sap.ui.table.Table` with
   * `visibleRowCountMode` set to `Auto`.
   *
   * **Note:** This control is intended to be used only as part of the `ObjectPageLayout`.
   */
  export default class ObjectPageSubSection extends ObjectPageSectionBase {
    /**
     * Constructor for a new `ObjectPageSubSection`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ObjectPageSubSectionSettings
    );
    /**
     * Constructor for a new `ObjectPageSubSection`.
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
      mSettings?: $ObjectPageSubSectionSettings
    );

    /**
     * Creates a new subclass of class sap.uxap.ObjectPageSubSection with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.uxap.ObjectPageSectionBase.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ObjectPageSubSection>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.uxap.ObjectPageSubSection.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some action to the aggregation {@link #getActions actions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addAction(
      /**
       * The action to add; if empty, nothing is inserted
       */
      oAction: Control
    ): this;
    /**
     * Adds some block to the aggregation {@link #getBlocks blocks}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addBlock(
      /**
       * The block to add; if empty, nothing is inserted
       */
      oBlock: Control
    ): this;
    /**
     * Adds some moreBlock to the aggregation {@link #getMoreBlocks moreBlocks}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addMoreBlock(
      /**
       * The moreBlock to add; if empty, nothing is inserted
       */
      oMoreBlock: Control
    ): this;
    /**
     * Destroys all the actions in the aggregation {@link #getActions actions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyActions(): this;
    /**
     * Destroys all the blocks in the aggregation {@link #getBlocks blocks}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyBlocks(): this;
    /**
     * Destroys all the moreBlocks in the aggregation {@link #getMoreBlocks moreBlocks}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyMoreBlocks(): this;
    /**
     * Gets content of aggregation {@link #getActions actions}.
     *
     * Actions available for this subsection.
     *
     * Although this aggregation accepts type `sap.ui.core.Control`, it is strongly recommended to use only
     * simple controls, such as buttons, so that the layout of the app is preserved.
     *
     * **Note:** Keep in mind that the controls set in the `actions` aggregation of `ObjectPageSubSection` do
     * NOT have overflow behavior. If the available space is not enough, the controls will be displayed on more
     * lines.
     */
    getActions(): Control[];
    /**
     * Gets content of aggregation {@link #getBlocks blocks}.
     *
     * Controls to be displayed in the subsection
     *
     * **Note:** The SAP Fiori Design guidelines require that the `ObjectPageHeader`'s content and the `ObjectPage`'s
     * subsection content are aligned vertically. When using {@link sap.ui.layout.form.Form}, {@link sap.m.Panel},
     * {@link sap.m.Table} and {@link sap.m.List} in the subsection content area of `ObjectPage`, if the content
     * is not already aligned, you need to adjust their left text offset to achieve the vertical alignment.
     * To do this, apply the `sapUxAPObjectPageSubSectionAlignContent` CSS class to them and set their `width`
     * property to `auto` (if not set by default).
     *
     * Don't use the `sapUxAPObjectPageSubSectionAlignContent` CSS class in the following cases:
     * 	 - In combination with `ResponsiveLayout`, because `ResponsiveLayout` applies custom paddings. To align
     * 			items with `sapUxAPObjectPageSubSectionAlignContent`, use `ColumnLayout`.
     * 	 - If there are multiple controls in the same `ObjectPageSubSection`, because the CSS class interferes
     * 			with their alignment.  Example:
     *
     *
     * ```javascript
     *
     * ` <Form class="sapUxAPObjectPageSubSectionAlignContent" width="auto"></Form> `
     * ```
     */
    getBlocks(): Control[];
    /**
     * Gets current value of property {@link #getMode mode}.
     *
     * A mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant
     * if these aggregations use Object page blocks.
     *
     * Default value is `Collapsed`.
     *
     * @returns Value of property `mode`
     */
    getMode(): ObjectPageSubSectionMode | keyof typeof ObjectPageSubSectionMode;
    /**
     * Gets content of aggregation {@link #getMoreBlocks moreBlocks}.
     *
     * Additional controls to display when the Show more / See all / (...) button is pressed
     */
    getMoreBlocks(): Control[];
    /**
     * @SINCE 1.77
     *
     * Gets current value of property {@link #getShowTitle showTitle}.
     *
     * Determines whether to display the `SubSection` title or not.
     *
     * **Note:** If a subsection is the only one (or the only one visible) within a section, its title is displayed
     * instead of the section title even if this property is set to `false`. To hide the title of a subsection
     * which is the only one (or the only one visible), you need to set the `showTitle` properties to `false`
     * for both the section and its subsection.
     *
     * Default value is `true`.
     *
     * @returns Value of property `showTitle`
     */
    getShowTitle(): boolean;
    /**
     * Gets current value of property {@link #getTitleUppercase titleUppercase}.
     *
     * Determines whether the Subsection title is displayed in upper case.
     *
     * Default value is `false`.
     *
     * @returns Value of property `titleUppercase`
     */
    getTitleUppercase(): boolean;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getActions actions}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfAction(
      /**
       * The action whose index is looked for
       */
      oAction: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getBlocks blocks}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfBlock(
      /**
       * The block whose index is looked for
       */
      oBlock: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getMoreBlocks moreBlocks}. and
     * returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfMoreBlock(
      /**
       * The moreBlock whose index is looked for
       */
      oMoreBlock: Control
    ): int;
    /**
     * Inserts a action into the aggregation {@link #getActions actions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertAction(
      /**
       * The action to insert; if empty, nothing is inserted
       */
      oAction: Control,
      /**
       * The `0`-based index the action should be inserted at; for a negative value of `iIndex`, the action is
       * inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted
       * at the last position
       */
      iIndex: int
    ): this;
    /**
     * Adds an `sap.uxap.BlockBase` instance to the `blocks` aggregation.
     *
     * **Note:** The `insertBlock` method is not supported by design. If used, it works as an `addBlock`, adding
     * a single block to the end of the `blocks` aggregation.
     *
     * @returns The `sap.uxap.ObjectPageSubSection` instance
     */
    insertBlock(
      /**
       * The `sap.uxap.BlockBase` instance
       */
      oObject: BlockBase,
      /**
       * The insertion index
       */
      iIndex: int
    ): this;
    /**
     * Adds an `sap.uxap.BlockBase` instance to the `moreBlocks` aggregation.
     *
     * **Note:** The `insertMoreBlock` method is not supported by design. If used, it works as an `addMoreBlock`,
     * adding a single block to the end of the `moreBlocks` aggregation.
     *
     * @returns The `sap.uxap.ObjectPageSubSection` instance
     */
    insertMoreBlock(
      /**
       * The `sap.uxap.BlockBase` instance
       */
      oObject: BlockBase,
      /**
       * The insertion index
       */
      iIndex: int
    ): this;
    /**
     * Removes a action from the aggregation {@link #getActions actions}.
     *
     * @returns The removed action or `null`
     */
    removeAction(
      /**
       * The action to remove or its index or id
       */
      vAction: int | string | Control
    ): Control | null;
    /**
     * Removes all the controls from the aggregation {@link #getActions actions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllActions(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getBlocks blocks}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllBlocks(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getMoreBlocks moreBlocks}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllMoreBlocks(): Control[];
    /**
     * Removes a block from the aggregation {@link #getBlocks blocks}.
     *
     * @returns The removed block or `null`
     */
    removeBlock(
      /**
       * The block to remove or its index or id
       */
      vBlock: int | string | Control
    ): Control | null;
    /**
     * Removes a moreBlock from the aggregation {@link #getMoreBlocks moreBlocks}.
     *
     * @returns The removed moreBlock or `null`
     */
    removeMoreBlock(
      /**
       * The moreBlock to remove or its index or id
       */
      vMoreBlock: int | string | Control
    ): Control | null;
    /**
     * Sets a new value for property {@link #getMode mode}.
     *
     * A mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant
     * if these aggregations use Object page blocks.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Collapsed`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMode(
      /**
       * New value for property `mode`
       */
      sMode?: ObjectPageSubSectionMode | keyof typeof ObjectPageSubSectionMode
    ): this;
    /**
     * @SINCE 1.77
     *
     * Sets a new value for property {@link #getShowTitle showTitle}.
     *
     * Determines whether to display the `SubSection` title or not.
     *
     * **Note:** If a subsection is the only one (or the only one visible) within a section, its title is displayed
     * instead of the section title even if this property is set to `false`. To hide the title of a subsection
     * which is the only one (or the only one visible), you need to set the `showTitle` properties to `false`
     * for both the section and its subsection.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowTitle(
      /**
       * New value for property `showTitle`
       */
      bShowTitle?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getTitleUppercase titleUppercase}.
     *
     * Determines whether the Subsection title is displayed in upper case.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitleUppercase(
      /**
       * New value for property `titleUppercase`
       */
      bTitleUppercase?: boolean
    ): this;
  }

  export interface $ObjectPageSubSectionSettings
    extends $ObjectPageSectionBaseSettings {
    /**
     * @SINCE 1.77
     *
     * Determines whether to display the `SubSection` title or not.
     *
     * **Note:** If a subsection is the only one (or the only one visible) within a section, its title is displayed
     * instead of the section title even if this property is set to `false`. To hide the title of a subsection
     * which is the only one (or the only one visible), you need to set the `showTitle` properties to `false`
     * for both the section and its subsection.
     */
    showTitle?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * A mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant
     * if these aggregations use Object page blocks.
     */
    mode?:
      | (ObjectPageSubSectionMode | keyof typeof ObjectPageSubSectionMode)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines whether the Subsection title is displayed in upper case.
     */
    titleUppercase?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Controls to be displayed in the subsection
     *
     * **Note:** The SAP Fiori Design guidelines require that the `ObjectPageHeader`'s content and the `ObjectPage`'s
     * subsection content are aligned vertically. When using {@link sap.ui.layout.form.Form}, {@link sap.m.Panel},
     * {@link sap.m.Table} and {@link sap.m.List} in the subsection content area of `ObjectPage`, if the content
     * is not already aligned, you need to adjust their left text offset to achieve the vertical alignment.
     * To do this, apply the `sapUxAPObjectPageSubSectionAlignContent` CSS class to them and set their `width`
     * property to `auto` (if not set by default).
     *
     * Don't use the `sapUxAPObjectPageSubSectionAlignContent` CSS class in the following cases:
     * 	 - In combination with `ResponsiveLayout`, because `ResponsiveLayout` applies custom paddings. To align
     * 			items with `sapUxAPObjectPageSubSectionAlignContent`, use `ColumnLayout`.
     * 	 - If there are multiple controls in the same `ObjectPageSubSection`, because the CSS class interferes
     * 			with their alignment.  Example:
     *
     *
     * ```javascript
     *
     * ` <Form class="sapUxAPObjectPageSubSectionAlignContent" width="auto"></Form> `
     * ```
     */
    blocks?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Additional controls to display when the Show more / See all / (...) button is pressed
     */
    moreBlocks?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Actions available for this subsection.
     *
     * Although this aggregation accepts type `sap.ui.core.Control`, it is strongly recommended to use only
     * simple controls, such as buttons, so that the layout of the app is preserved.
     *
     * **Note:** Keep in mind that the controls set in the `actions` aggregation of `ObjectPageSubSection` do
     * NOT have overflow behavior. If the available space is not enough, the controls will be displayed on more
     * lines.
     */
    actions?: Control[] | Control | AggregationBindingInfo | `{${string}}`;
  }
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/uxap/AnchorBar": undefined;

    "sap/uxap/BlockBase": undefined;

    "sap/uxap/BreadCrumbs": undefined;

    "sap/uxap/HierarchicalSelect": undefined;

    "sap/uxap/library": undefined;

    "sap/uxap/ModelMapping": undefined;

    "sap/uxap/ObjectPageAccessibleLandmarkInfo": undefined;

    "sap/uxap/ObjectPageDynamicHeaderContent": undefined;

    "sap/uxap/ObjectPageDynamicHeaderTitle": undefined;

    "sap/uxap/ObjectPageHeader": undefined;

    "sap/uxap/ObjectPageHeaderActionButton": undefined;

    "sap/uxap/ObjectPageHeaderContent": undefined;

    "sap/uxap/ObjectPageHeaderLayoutData": undefined;

    "sap/uxap/ObjectPageLayout": undefined;

    "sap/uxap/ObjectPageLazyLoader": undefined;

    "sap/uxap/ObjectPageSection": undefined;

    "sap/uxap/ObjectPageSectionBase": undefined;

    "sap/uxap/ObjectPageSubSection": undefined;
  }
}
