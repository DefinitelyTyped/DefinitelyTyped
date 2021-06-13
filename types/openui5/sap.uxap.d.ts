// For Library Version: 1.90.0

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
      mAriaProps: Object
    ): void;
    /**
     * Creates a new subclass of class sap.uxap.AnchorBar with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Toolbar.extend}.
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
     * @SINCE 1.58
     *
     * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
     *
     * Determines the background color of the `AnchorBar`.
     *
     * **Note:** The default value of `backgroundDesign` property is null. If the property is not set, the color
     * of the background is `@sapUiObjectHeaderBackground`, which depends on the specific theme.
     */
    getBackgroundDesign(): BackgroundDesign | keyof typeof BackgroundDesign;
    /**
     * Returns a metadata object for class sap.uxap.AnchorBar.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Returns an sap.ui.core.delegate.ScrollEnablement object used to handle scrolling.
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
     */
    getShowPopover(): boolean;
    /**
     * Gets current value of property {@link #getUpperCase upperCase}.
     *
     * Determines whether the Anchor bar items are displayed in upper case.
     *
     * Default value is `false`.
     */
    getUpperCase(): boolean;
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
     */
    setBackgroundDesign(
      /**
       * New value for property `backgroundDesign`
       */
      sBackgroundDesign: BackgroundDesign | keyof typeof BackgroundDesign
    ): this;
    /**
     * Sets the associated {@link #getSelectedButton selectedButton}.
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
    showPopover?: boolean | PropertyBindingInfo;

    /**
     * Determines whether the Anchor bar items are displayed in upper case.
     */
    upperCase?: boolean | PropertyBindingInfo;

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
      | PropertyBindingInfo;

    /**
     * The button that represents the Section being scrolled by the user.
     */
    selectedButton?: Button | string;
  }
}

declare module "sap/uxap/BlockBase" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ModelMapping from "sap/uxap/ModelMapping";

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
     * Adds some mapping to the aggregation {@link #getMappings mappings}.
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
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.uxap.BlockBase` itself
       */
      oListener?: object
    ): this;
    /**
     * Creates a view.
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
     */
    destroyMappings(): this;
    /**
     * @SINCE 1.72
     *
     * Detaches event handler `fnFunction` from the {@link #event:viewInit viewInit} event of this `sap.uxap.BlockBase`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachViewInit(
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
     * Creates a new subclass of class sap.uxap.BlockBase with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, BlockBase>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @SINCE 1.72
     *
     * Fires event {@link #event:viewInit viewInit} to attached listeners.
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
     * Returns a metadata object for class sap.uxap.BlockBase.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getMode mode}.
     *
     * Determines the mode of the block. See {@link sap.uxap.ObjectPageSubSectionMode ObjectPageSubSectionMode}.
     * When `BlockBase` is used inside an `ObjectPageLayout`, the `mode` property is inherited from the respective
     * {@link sap.uxap.ObjectPageSubSection SubSection}. The `mode` property of `BlockBase` changes when the
     * `mode` property of `ObjectPageSubSection` changes.
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
     */
    getShowSubSectionMore(): boolean;
    /**
     * Gets current value of property {@link #getVisible visible}.
     *
     * Determines the visibility of the block.
     *
     * Default value is `true`.
     */
    getVisible(): boolean;
    /**
     * Checks for the provided `sap.uxap.ModelMapping` in the aggregation {@link #getMappings mappings}. and
     * returns its index if found or -1 otherwise.
     */
    indexOfMapping(
      /**
       * The mapping whose index is looked for
       */
      oMapping: ModelMapping
    ): int;
    /**
     * Inserts a mapping into the aggregation {@link #getMappings mappings}.
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
     */
    removeAllMappings(): ModelMapping[];
    /**
     * Removes a mapping from the aggregation {@link #getMappings mappings}.
     */
    removeMapping(
      /**
       * The mapping to remove or its index or id
       */
      vMapping: int | string | ModelMapping
    ): ModelMapping;
    /**
     * Set the column layout for this particular block.
     */
    setColumnLayout(
      /**
       * The column layout to apply to the control
       */
      sLayout: string
    ): void;
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
     */
    setMode(
      /**
       * the mode to apply to the control (that should be synchronized with view declared)
       */
      sMode: string
    ): any;
    /**
     * Sets the associated {@link #getSelectedView selectedView}.
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
     */
    setVisible(
      /**
       * New value for property `visible`
       */
      bVisible?: boolean
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
     */
    attachViewInit(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.uxap.BlockBase` itself
       */
      oListener?: object
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
    visible?: boolean | PropertyBindingInfo;

    /**
     * Determines on how many columns the layout will be rendered. Allowed values are integers from 1 to 4 and
     * "auto".
     */
    columnLayout?: BlockBaseColumnLayout | PropertyBindingInfo;

    /**
     * Determines if the block should automatically adjust its inner forms. Allowed values are "BlockColumns"
     * and "OneColumn" and "None". If the value is "BlockColumns", then the inner form will have as many columns
     * as the colspan of its parent block. If the value is "OneColumn", the inner form will have exactly one
     * column, regardless the colspan of its parent block. If the value is "None", no automatic adjustment of
     * inner forms will be made and the form will keep its original column count.
     */
    formAdjustment?:
      | (BlockBaseFormAdjustment | keyof typeof BlockBaseFormAdjustment)
      | PropertyBindingInfo;

    /**
     * Determines whether the show more button should be shown.
     *
     * **Note:** The property will take effect if the `BlockBase` is inside `ObjectPageSubSection` and would
     * be ignored in case the `BlockBase` is nested inside another `BlockBase`.
     */
    showSubSectionMore?: boolean | PropertyBindingInfo;

    /**
     * Map external UI5 model and internal Block model
     */
    mappings?: ModelMapping[] | ModelMapping | AggregationBindingInfo;

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
    viewInit?: Function;
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
     * Adds some link to the aggregation {@link #getLinks links}.
     */
    addLink(
      /**
       * The link to add; if empty, nothing is inserted
       */
      oLink: Link
    ): this;
    /**
     * Destroys the currentLocation in the aggregation {@link #getCurrentLocation currentLocation}.
     */
    destroyCurrentLocation(): this;
    /**
     * Destroys all the links in the aggregation {@link #getLinks links}.
     */
    destroyLinks(): this;
    /**
     * Creates a new subclass of class sap.uxap.BreadCrumbs with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, BreadCrumbs>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
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
     * Returns a metadata object for class sap.uxap.BreadCrumbs.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getShowCurrentLocation showCurrentLocation}.
     *
     * Sets the visibility of the current/last element in the BreadCrumbs path.
     *
     * Default value is `true`.
     */
    getShowCurrentLocation(): boolean;
    /**
     * Checks for the provided `sap.m.Link` in the aggregation {@link #getLinks links}. and returns its index
     * if found or -1 otherwise.
     */
    indexOfLink(
      /**
       * The link whose index is looked for
       */
      oLink: Link
    ): int;
    /**
     * Inserts a link into the aggregation {@link #getLinks links}.
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
     */
    removeAllLinks(): Link[];
    /**
     * Removes a link from the aggregation {@link #getLinks links}.
     */
    removeLink(
      /**
       * The link to remove or its index or id
       */
      vLink: int | string | Link
    ): Link;
    /**
     * Sets the aggregated {@link #getCurrentLocation currentLocation}.
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
    showCurrentLocation?: boolean | PropertyBindingInfo;

    /**
     * A list of all the active link elements in the BreadCrumbs control.
     */
    links?: Link[] | Link | AggregationBindingInfo;

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
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getUpperCase upperCase}.
     *
     * Determines whether the HierarchicalSelect items are displayed in upper case.
     *
     * Default value is `false`.
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
    upperCase?: boolean | PropertyBindingInfo;
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
     * Gets current value of property {@link #getExternalModelName externalModelName}.
     *
     * Determines the external model name.
     */
    getExternalModelName(): string;
    /**
     * Gets current value of property {@link #getExternalPath externalPath}.
     *
     * Determines the external path.
     */
    getExternalPath(): string;
    /**
     * Gets current value of property {@link #getInternalModelName internalModelName}.
     *
     * Determines the internal model name.
     *
     * Default value is `"Model"`.
     */
    getInternalModelName(): string;
    /**
     * Returns a metadata object for class sap.uxap.ModelMapping.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Sets a new value for property {@link #getExternalModelName externalModelName}.
     *
     * Determines the external model name.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * Gets current value of property {@link #getContentLabel contentLabel}.
     *
     * Texts which describe the landmark of the content container of the corresponding `sap.uxap.ObjectPageLayout`
     * control.
     *
     * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), no label
     * is set.
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
     */
    getHeaderRole():
      | AccessibleLandmarkRole
      | keyof typeof AccessibleLandmarkRole;
    /**
     * Returns a metadata object for class sap.uxap.ObjectPageAccessibleLandmarkInfo.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getNavigationLabel navigationLabel}.
     *
     * Texts which describe the landmark of the navigation container of the corresponding `sap.uxap.ObjectPageLayout`
     * control.
     *
     * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), no label
     * is set.
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
      | PropertyBindingInfo;

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
      | PropertyBindingInfo;

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
      | PropertyBindingInfo;

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
      | PropertyBindingInfo;

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
      | PropertyBindingInfo;

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
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ObjectPageDynamicHeaderContentSettings
    );
    /**
     * Constructor for a new `ObjectPageDynamicHeaderContent`.
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
     * Adds some action to the aggregation {@link #getActions actions}.
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
      fnFunction: Function,
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
      fnFunction: Function,
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
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageHeader` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the actions in the aggregation {@link #getActions actions}.
     */
    destroyActions(): this;
    /**
     * @SINCE 1.50
     *
     * Destroys the breadcrumbs in the aggregation {@link #getBreadcrumbs breadcrumbs}.
     */
    destroyBreadcrumbs(): this;
    /**
     * @deprecated (since 1.50) - use the `breadcrumbs` aggregation instead.
     *
     * Destroys all the breadCrumbsLinks in the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
     */
    destroyBreadCrumbsLinks(): this;
    /**
     * Destroys the navigationBar in the aggregation {@link #getNavigationBar navigationBar}.
     */
    destroyNavigationBar(): this;
    /**
     * @SINCE 1.38.0
     *
     * Destroys the sideContentButton in the aggregation {@link #getSideContentButton sideContentButton}.
     */
    destroySideContentButton(): this;
    /**
     * @SINCE 1.56
     *
     * Destroys the titleSelectorTooltip in the aggregation {@link #getTitleSelectorTooltip titleSelectorTooltip}.
     */
    destroyTitleSelectorTooltip(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:markChangesPress markChangesPress} event of
     * this `sap.uxap.ObjectPageHeader`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachMarkChangesPress(
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
     * Detaches event handler `fnFunction` from the {@link #event:markLockedPress markLockedPress} event of
     * this `sap.uxap.ObjectPageHeader`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachMarkLockedPress(
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
     * Detaches event handler `fnFunction` from the {@link #event:titleSelectorPress titleSelectorPress} event
     * of this `sap.uxap.ObjectPageHeader`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachTitleSelectorPress(
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
     * Creates a new subclass of class sap.uxap.ObjectPageHeader with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, ObjectPageHeader>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:markChangesPress markChangesPress} to attached listeners.
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
     * Fires event {@link #event:markLockedPress markLockedPress} to attached listeners.
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
     * Fires event {@link #event:titleSelectorPress titleSelectorPress} to attached listeners.
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
     */
    getIsActionAreaAlwaysVisible(): boolean;
    /**
     * Gets current value of property {@link #getIsObjectIconAlwaysVisible isObjectIconAlwaysVisible}.
     *
     * Determines whether the icon should always be visible or visible only when the header is snapped.
     *
     * Default value is `false`.
     */
    getIsObjectIconAlwaysVisible(): boolean;
    /**
     * Gets current value of property {@link #getIsObjectSubtitleAlwaysVisible isObjectSubtitleAlwaysVisible}.
     *
     * Determines whether the subtitle should always be visible or visible only when the header is snapped.
     *
     * Default value is `true`.
     */
    getIsObjectSubtitleAlwaysVisible(): boolean;
    /**
     * Gets current value of property {@link #getIsObjectTitleAlwaysVisible isObjectTitleAlwaysVisible}.
     *
     * Determines whether the title should always be visible or visible only when the header is snapped.
     *
     * Default value is `true`.
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
     */
    getMarkChanges(): boolean;
    /**
     * Gets current value of property {@link #getMarkFavorite markFavorite}.
     *
     * Set the favorite state to true or false. The showMarkers property must be true for this property to take
     * effect.
     *
     * Default value is `false`.
     */
    getMarkFavorite(): boolean;
    /**
     * Gets current value of property {@link #getMarkFlagged markFlagged}.
     *
     * Set the flagged state to true or false. The showMarkers property must be true for this property to take
     * effect.
     *
     * Default value is `false`.
     */
    getMarkFlagged(): boolean;
    /**
     * Gets current value of property {@link #getMarkLocked markLocked}.
     *
     * Set the locked state of the objectPageHeader.
     *
     * Default value is `false`.
     */
    getMarkLocked(): boolean;
    /**
     * Returns a metadata object for class sap.uxap.ObjectPageHeader.
     */
    static getMetadata(): ElementMetadata;
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
     */
    getObjectImageBackgroundColor(): AvatarColor | keyof typeof AvatarColor;
    /**
     * Gets current value of property {@link #getObjectImageDensityAware objectImageDensityAware}.
     *
     * The value of densityAware for the image, supplied via the objectImageURI property. See sap.m.Image for
     * more details on densityAware.
     *
     * Default value is `false`.
     */
    getObjectImageDensityAware(): boolean;
    /**
     * Gets current value of property {@link #getObjectImageShape objectImageShape}.
     *
     * Determines whether the picture should be displayed in a square or with a circle-shaped mask.
     *
     * Default value is `Square`.
     */
    getObjectImageShape(): AvatarShape | keyof typeof AvatarShape;
    /**
     * Gets current value of property {@link #getObjectImageURI objectImageURI}.
     *
     * The URL of the image, representing the business object
     */
    getObjectImageURI(): string;
    /**
     * Gets current value of property {@link #getObjectSubtitle objectSubtitle}.
     *
     * The description of the object
     */
    getObjectSubtitle(): string;
    /**
     * Gets current value of property {@link #getObjectTitle objectTitle}.
     *
     * The title of the object
     */
    getObjectTitle(): string;
    /**
     * Gets current value of property {@link #getShowMarkers showMarkers}.
     *
     * Indicates if object page header title supports showing markers such as flagged and favorite.
     *
     * Default value is `false`.
     */
    getShowMarkers(): boolean;
    /**
     * Gets current value of property {@link #getShowPlaceholder showPlaceholder}.
     *
     * Enables support of a placeholder image in case no image is specified or the URL of the provided image
     * is invalid.
     *
     * Default value is `false`.
     */
    getShowPlaceholder(): boolean;
    /**
     * Gets current value of property {@link #getShowTitleSelector showTitleSelector}.
     *
     * When set to true, the selector arrow icon/image is shown and can be pressed.
     *
     * Default value is `false`.
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
     */
    indexOfBreadCrumbLink(
      /**
       * The breadCrumbLink whose index is looked for
       */
      oBreadCrumbLink: Link
    ): int;
    /**
     * Inserts a action into the aggregation {@link #getActions actions}.
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
     */
    removeAction(
      /**
       * The action to remove or its index or id
       */
      vAction: int | string | Control
    ): Control;
    /**
     * Removes all the controls from the aggregation {@link #getActions actions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllActions(): Control[];
    /**
     * @deprecated (since 1.50) - use the `breadcrumbs` aggregation instead.
     *
     * Removes all the controls from the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllBreadCrumbsLinks(): Link[];
    /**
     * @deprecated (since 1.50) - use the `breadcrumbs` aggregation instead.
     *
     * Removes a breadCrumbLink from the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
     */
    removeBreadCrumbLink(
      /**
       * The breadCrumbLink to remove or its index or id
       */
      vBreadCrumbLink: int | string | Link
    ): Link;
    /**
     * @SINCE 1.50
     *
     * Sets the aggregated {@link #getBreadcrumbs breadcrumbs}.
     */
    setBreadcrumbs(
      /**
       * The breadcrumbs to set
       */
      oBreadcrumbs: Breadcrumbs
    ): this;
    /**
     * @deprecated (since 1.40.1)
     *
     * Sets a new value for property {@link #getHeaderDesign headerDesign}.
     *
     * Determines the design of the header - Light or Dark. **Note: **This property is deprecated. It will continue
     * to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Light`.
     */
    setHeaderDesign(
      /**
       * New value for property `headerDesign`
       */
      sHeaderDesign?:
        | ObjectPageHeaderDesign
        | keyof typeof ObjectPageHeaderDesign
    ): this;
    /**
     * Sets a new value for property {@link #getIsActionAreaAlwaysVisible isActionAreaAlwaysVisible}.
     *
     * Determines whether the action buttons should always be visible or visible only when the header is snapped.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
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
     */
    setMarkLocked(
      /**
       * New value for property `markLocked`
       */
      bMarkLocked?: boolean
    ): this;
    /**
     * Sets the aggregated {@link #getNavigationBar navigationBar}.
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
     */
    setTitleSelectorTooltip(
      /**
       * The titleSelectorTooltip to set
       */
      vTitleSelectorTooltip: TooltipBase | string
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:markChangesPress markChangesPress} event of
     * this `sap.uxap.ObjectPageHeader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.uxap.ObjectPageHeader` itself.
     *
     * The event is fired when the unsaved changes button is pressed
     */
    attachMarkChangesPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
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
     */
    attachMarkLockedPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
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
     */
    attachTitleSelectorPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageHeader` itself
       */
      oListener?: object
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
    objectImageDensityAware?: boolean | PropertyBindingInfo;

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
      | PropertyBindingInfo;

    /**
     * @SINCE 1.73
     *
     * Determines the background color of the image placeholder or icon if valid icon URI is provided.
     */
    objectImageBackgroundColor?:
      | (AvatarColor | keyof typeof AvatarColor)
      | PropertyBindingInfo;

    /**
     * Determines whether the icon should always be visible or visible only when the header is snapped.
     */
    isObjectIconAlwaysVisible?: boolean | PropertyBindingInfo;

    /**
     * Determines whether the title should always be visible or visible only when the header is snapped.
     */
    isObjectTitleAlwaysVisible?: boolean | PropertyBindingInfo;

    /**
     * Determines whether the subtitle should always be visible or visible only when the header is snapped.
     */
    isObjectSubtitleAlwaysVisible?: boolean | PropertyBindingInfo;

    /**
     * Determines whether the action buttons should always be visible or visible only when the header is snapped.
     */
    isActionAreaAlwaysVisible?: boolean | PropertyBindingInfo;

    /**
     * @deprecated (since 1.40.1)
     *
     * Determines the design of the header - Light or Dark. **Note: **This property is deprecated. It will continue
     * to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.
     */
    headerDesign?:
      | (ObjectPageHeaderDesign | keyof typeof ObjectPageHeaderDesign)
      | PropertyBindingInfo;

    /**
     * When set to true, the selector arrow icon/image is shown and can be pressed.
     */
    showTitleSelector?: boolean | PropertyBindingInfo;

    /**
     * Set the favorite state to true or false. The showMarkers property must be true for this property to take
     * effect.
     */
    markFavorite?: boolean | PropertyBindingInfo;

    /**
     * Set the flagged state to true or false. The showMarkers property must be true for this property to take
     * effect.
     */
    markFlagged?: boolean | PropertyBindingInfo;

    /**
     * Indicates if object page header title supports showing markers such as flagged and favorite.
     */
    showMarkers?: boolean | PropertyBindingInfo;

    /**
     * Set the locked state of the objectPageHeader.
     */
    markLocked?: boolean | PropertyBindingInfo;

    /**
     * Enables support of a placeholder image in case no image is specified or the URL of the provided image
     * is invalid.
     */
    showPlaceholder?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * Marks that there are unsaved changes in the objectPageHeader. The markChanges state cannot be used together
     * with the markLocked state. If both are set to true, only the locked state will be displayed.
     */
    markChanges?: boolean | PropertyBindingInfo;

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
    breadCrumbsLinks?: Link[] | Link | AggregationBindingInfo;

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
    actions?: Control[] | Control | AggregationBindingInfo;

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
    titleSelectorPress?: Function;

    /**
     * The event is fired when the Locked button is pressed
     */
    markLockedPress?: Function;

    /**
     * The event is fired when the unsaved changes button is pressed
     */
    markChangesPress?: Function;
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
     * Gets current value of property {@link #getHideIcon hideIcon}.
     *
     * Hide the button icon when rendered into the headerTitle part of the ObjectPageLayout. This is useful
     * if you want to display texts only in the headerTitle part but still want to display text + icon in the
     * actionSheet that appears when not enough space is available on the screen for displaying all actions.
     *
     * Default value is `false`.
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
     */
    getImportance(): Importance | keyof typeof Importance;
    /**
     * Returns a metadata object for class sap.uxap.ObjectPageHeaderActionButton.
     */
    static getMetadata(): ElementMetadata;
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
    hideText?: boolean | PropertyBindingInfo;

    /**
     * Hide the button icon when rendered into the headerTitle part of the ObjectPageLayout. This is useful
     * if you want to display texts only in the headerTitle part but still want to display text + icon in the
     * actionSheet that appears when not enough space is available on the screen for displaying all actions.
     */
    hideIcon?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * Determines the order in which the button overflows.
     */
    importance?: (Importance | keyof typeof Importance) | PropertyBindingInfo;
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
     * Creates a new subclass of class sap.uxap.ObjectPageHeaderContent with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, ObjectPageHeaderContent>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
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
     */
    getContentDesign():
      | ObjectPageHeaderDesign
      | keyof typeof ObjectPageHeaderDesign;
    /**
     * Returns a metadata object for class sap.uxap.ObjectPageHeaderContent.
     */
    static getMetadata(): ElementMetadata;
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
      | PropertyBindingInfo;

    /**
     * The list of Objects of type sap.ui.core.Control.
     */
    content?: Control[] | Control | AggregationBindingInfo;
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
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getShowSeparatorAfter showSeparatorAfter}.
     *
     * If this property is set the control will display a separator after it.
     *
     * Default value is `false`.
     */
    getShowSeparatorAfter(): boolean;
    /**
     * Gets current value of property {@link #getShowSeparatorBefore showSeparatorBefore}.
     *
     * If this property is set the control will display a separator before it.
     *
     * Default value is `false`.
     */
    getShowSeparatorBefore(): boolean;
    /**
     * Gets current value of property {@link #getVisibleL visibleL}.
     *
     * If this property is set the control will be visible (or not) in a large sized layout.
     *
     * Default value is `true`.
     */
    getVisibleL(): boolean;
    /**
     * Gets current value of property {@link #getVisibleM visibleM}.
     *
     * If this property is set the control will be visible (or not) in a medium sized layout.
     *
     * Default value is `true`.
     */
    getVisibleM(): boolean;
    /**
     * Gets current value of property {@link #getVisibleS visibleS}.
     *
     * If this property is set the control will be visible (or not) in a small sized layout.
     *
     * Default value is `true`.
     */
    getVisibleS(): boolean;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * If this property is set the control will take the provided size.
     *
     * Default value is `'auto'`.
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
    visibleS?: boolean | PropertyBindingInfo;

    /**
     * If this property is set the control will be visible (or not) in a medium sized layout.
     */
    visibleM?: boolean | PropertyBindingInfo;

    /**
     * If this property is set the control will be visible (or not) in a large sized layout.
     */
    visibleL?: boolean | PropertyBindingInfo;

    /**
     * If this property is set the control will display a separator before it.
     */
    showSeparatorBefore?: boolean | PropertyBindingInfo;

    /**
     * If this property is set the control will display a separator after it.
     */
    showSeparatorAfter?: boolean | PropertyBindingInfo;

    /**
     * If this property is set the control will take the provided size.
     */
    width?: CSSSize | PropertyBindingInfo;
  }
}

declare module "sap/uxap/ObjectPageLayout" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ObjectPageSection from "sap/uxap/ObjectPageSection";

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
     * Adds some headerContent to the aggregation {@link #getHeaderContent headerContent}.
     */
    addHeaderContent(
      /**
       * The headerContent to add; if empty, nothing is inserted
       */
      oHeaderContent: Control
    ): this;
    /**
     * Adds some section to the aggregation {@link #getSections sections}.
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
      fnFunction: Function,
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
      fnFunction: Function,
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
      fnFunction: Function,
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
      fnFunction: Function,
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
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.40
     *
     * Destroys the footer in the aggregation {@link #getFooter footer}.
     */
    destroyFooter(): this;
    /**
     * Destroys all the headerContent in the aggregation {@link #getHeaderContent headerContent}.
     */
    destroyHeaderContent(): this;
    /**
     * Destroys the headerTitle in the aggregation {@link #getHeaderTitle headerTitle}.
     */
    destroyHeaderTitle(): this;
    /**
     * @SINCE 1.61
     *
     * Destroys the landmarkInfo in the aggregation {@link #getLandmarkInfo landmarkInfo}.
     */
    destroyLandmarkInfo(): this;
    /**
     * Destroys all the sections in the aggregation {@link #getSections sections}.
     */
    destroySections(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:editHeaderButtonPress editHeaderButtonPress}
     * event of this `sap.uxap.ObjectPageLayout`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachEditHeaderButtonPress(
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
     * @SINCE 1.40
     *
     * Detaches event handler `fnFunction` from the {@link #event:navigate navigate} event of this `sap.uxap.ObjectPageLayout`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachNavigate(
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
     * @SINCE 1.73
     *
     * Detaches event handler `fnFunction` from the {@link #event:sectionChange sectionChange} event of this
     * `sap.uxap.ObjectPageLayout`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachSectionChange(
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
     * @SINCE 1.77
     *
     * Detaches event handler `fnFunction` from the {@link #event:subSectionVisibilityChange subSectionVisibilityChange}
     * event of this `sap.uxap.ObjectPageLayout`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachSubSectionVisibilityChange(
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
     * Detaches event handler `fnFunction` from the {@link #event:toggleAnchorBar toggleAnchorBar} event of
     * this `sap.uxap.ObjectPageLayout`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachToggleAnchorBar(
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
     * Creates a new subclass of class sap.uxap.ObjectPageLayout with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, ObjectPageLayout>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:editHeaderButtonPress editHeaderButtonPress} to attached listeners.
     */
    fireEditHeaderButtonPress(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @SINCE 1.40
     *
     * Fires event {@link #event:navigate navigate} to attached listeners.
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
     *
     * Fires event {@link #event:sectionChange sectionChange} to attached listeners.
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
     *
     * Fires event {@link #event:subSectionVisibilityChange subSectionVisibilityChange} to attached listeners.
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
     * Fires event {@link #event:toggleAnchorBar toggleAnchorBar} to attached listeners.
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
     */
    getHeaderContentPinnable(): boolean;
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
     * Returns a metadata object for class sap.uxap.ObjectPageLayout.
     */
    static getMetadata(): ElementMetadata;
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
     */
    getPreserveHeaderStateOnScroll(): boolean;
    /**
     * Returns the `sap.ui.core.ScrollEnablement` delegate which is used with this control.
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
     */
    getShowAnchorBar(): boolean;
    /**
     * Gets current value of property {@link #getShowAnchorBarPopover showAnchorBarPopover}.
     *
     * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor
     * bar.
     *
     * Default value is `true`.
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
     */
    getShowFooter(): boolean;
    /**
     * Gets current value of property {@link #getShowHeaderContent showHeaderContent}.
     *
     * Determines the visibility of the Header content (headerContent aggregation).
     *
     * Default value is `true`.
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
     */
    getShowTitleInHeaderContent(): boolean;
    /**
     * Gets current value of property {@link #getSubSectionLayout subSectionLayout}.
     *
     * Determines whether Subsection titles are displayed on top or to the left of the Subsection content.
     *
     * Default value is `TitleOnTop`.
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
     */
    getToggleHeaderOnTitleClick(): boolean;
    /**
     * Gets current value of property {@link #getUpperCaseAnchorBar upperCaseAnchorBar}.
     *
     * Determines whether the Anchor bar items are displayed in upper case.
     *
     * Default value is `true`.
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
     */
    getUseIconTabBar(): boolean;
    /**
     * Gets current value of property {@link #getUseTwoColumnsForLargeScreen useTwoColumnsForLargeScreen}.
     *
     * Determines whether the to use two column layout for the L screen size.
     *
     * Default value is `false`.
     */
    getUseTwoColumnsForLargeScreen(): boolean;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getHeaderContent headerContent}.
     * and returns its index if found or -1 otherwise.
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
     */
    indexOfSection(
      /**
       * The section whose index is looked for
       */
      oSection: ObjectPageSection
    ): int;
    /**
     * Inserts a headerContent into the aggregation {@link #getHeaderContent headerContent}.
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
     */
    removeAllHeaderContent(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getSections sections}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllSections(): ObjectPageSection[];
    /**
     * Removes a headerContent from the aggregation {@link #getHeaderContent headerContent}.
     */
    removeHeaderContent(
      /**
       * The headerContent to remove or its index or id
       */
      vHeaderContent: int | string | Control
    ): Control;
    /**
     * Removes a section from the aggregation {@link #getSections sections}.
     */
    removeSection(
      /**
       * The section to remove or its index or id
       */
      vSection: int | string | ObjectPageSection
    ): ObjectPageSection;
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
     */
    setHeaderContentPinnable(
      /**
       * New value for property `headerContentPinnable`
       */
      bHeaderContentPinnable?: boolean
    ): this;
    /**
     * Sets the aggregated {@link #getHeaderTitle headerTitle}.
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
     * Note that an argument of `null` will cause the first visible section be set as `selectedSection`. This
     * is because the `sap.uxap.ObjectPageLayout` should always have one of its sections selected (unless it
     * has 0 visible sections).
     */
    setSelectedSection(
      /**
       * The ID or the section instance that should be selected Note that `null` or `undefined` are not valid
       * arguments
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
     */
    setUseTwoColumnsForLargeScreen(
      /**
       * New value for property `useTwoColumnsForLargeScreen`
       */
      bUseTwoColumnsForLargeScreen?: boolean
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:editHeaderButtonPress editHeaderButtonPress}
     * event of this `sap.uxap.ObjectPageLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
     *
     * The event is fired when the Edit Header button is pressed
     */
    attachEditHeaderButtonPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
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
     */
    attachNavigate(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
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
     */
    attachSectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
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
     */
    attachSubSectionVisibilityChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
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
     */
    attachToggleAnchorBar(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageLayout` itself
       */
      oListener?: object
    ): this;
  }

  export interface $ObjectPageLayoutSettings extends $ControlSettings {
    /**
     * Determines whether the Navigation bar (Anchor bar) is displayed.
     */
    showAnchorBar?: boolean | PropertyBindingInfo;

    /**
     * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor
     * bar.
     */
    showAnchorBarPopover?: boolean | PropertyBindingInfo;

    /**
     * Determines whether the Anchor bar items are displayed in upper case.
     */
    upperCaseAnchorBar?: boolean | PropertyBindingInfo;

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
      | PropertyBindingInfo;

    /**
     * Determines the height of the ObjectPage.
     */
    height?: CSSSize | PropertyBindingInfo;

    /**
     * Enable lazy loading for the Object page Subsections.
     */
    enableLazyLoading?: boolean | PropertyBindingInfo;

    /**
     * Determines whether Subsection titles are displayed on top or to the left of the Subsection content.
     */
    subSectionLayout?:
      | (ObjectPageSubSectionLayout | keyof typeof ObjectPageSubSectionLayout)
      | PropertyBindingInfo;

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
      | PropertyBindingInfo;

    /**
     * Determines whether the navigation mode is tab-based instead of the default anchor bar. If enabled, the
     * sections are displayed separately on each tab rather than having all of them visible at the same time.
     *
     * **Note:** Keep in mind that the `sap.m.IconTabBar` control is no longer used for the tab navigation mode.
     */
    useIconTabBar?: boolean | PropertyBindingInfo;

    /**
     * Determines the visibility of the Header content (headerContent aggregation).
     */
    showHeaderContent?: boolean | PropertyBindingInfo;

    /**
     * Determines whether the to use two column layout for the L screen size.
     */
    useTwoColumnsForLargeScreen?: boolean | PropertyBindingInfo;

    /**
     * Determines whether the title, image, markers and selectTitleArrow are shown in the Header content area.
     *
     * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
     * for the `headerTitle` aggregation.
     */
    showTitleInHeaderContent?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.32.0
     *
     * Determines whether sections and subsections with importance Low and Medium are hidden even on large screens.
     */
    showOnlyHighImportance?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * Determines whether the page is a child page and renders it with a different design. Child pages have
     * an additional (darker/lighter) stripe on the left side of their header content area.
     *
     * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
     * for the `headerTitle` aggregation.
     */
    isChildPage?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * Determines whether Header Content will always be expanded on desktop.
     *
     * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
     * for the `headerTitle` aggregation.
     */
    alwaysShowContentHeader?: boolean | PropertyBindingInfo;

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
    headerContentPinnable?: boolean | PropertyBindingInfo;

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
    toggleHeaderOnTitleClick?: boolean | PropertyBindingInfo;

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
    preserveHeaderStateOnScroll?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * Determines whether an Edit button will be displayed in Header Content.
     *
     * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
     * for the `headerTitle` aggregation.
     */
    showEditHeaderButton?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * Specifies whether the object page enables flexibility features, such as hiding and adding sections.
     *  For more information about SAPUI5 flexibility, refer to the Developer Guide.
     */
    flexEnabled?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.40
     *
     * Determines whether the footer is visible.
     */
    showFooter?: boolean | PropertyBindingInfo;

    /**
     * The sections that make up the Object page content area.
     */
    sections?: ObjectPageSection[] | ObjectPageSection | AggregationBindingInfo;

    /**
     * Object page header title - the upper, always static, part of the Object page header.
     */
    headerTitle?: IHeaderTitle;

    /**
     * Object page header content - the dynamic part of the Object page header.
     */
    headerContent?: Control[] | Control | AggregationBindingInfo;

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
     * The event is fired when the Anchor bar is switched from moving to fixed or the other way round.
     */
    toggleAnchorBar?: Function;

    /**
     * @SINCE 1.73
     *
     * Fired when the current section is changed by scrolling.
     */
    sectionChange?: Function;

    /**
     * The event is fired when the Edit Header button is pressed
     */
    editHeaderButtonPress?: Function;

    /**
     * @SINCE 1.40
     *
     * The event is fired when the selected section is changed using the navigation.
     */
    navigate?: Function;

    /**
     * @SINCE 1.77
     *
     * Fired when the visibility of subsections is changed.
     */
    subSectionVisibilityChange?: Function;
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
     * Creates a new subclass of class sap.uxap.ObjectPageLazyLoader with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
     * Gets content of aggregation {@link #getContent content}.
     *
     * Controls to be displayed after this element is unstashed
     */
    getContent(): Control[];
    /**
     * Returns a metadata object for class sap.uxap.ObjectPageLazyLoader.
     */
    static getMetadata(): ElementMetadata;
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
  }

  export interface $ObjectPageLazyLoaderSettings extends $ElementSettings {
    /**
     * Controls to be displayed after this element is unstashed
     */
    content?: Control[] | Control | AggregationBindingInfo;
  }
}

declare module "sap/uxap/ObjectPageSection" {
  import {
    default as ObjectPageSectionBase,
    $ObjectPageSectionBaseSettings,
  } from "sap/uxap/ObjectPageSectionBase";

  import ObjectPageSubSection from "sap/uxap/ObjectPageSubSection";

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
     * Adds some subSection to the aggregation {@link #getSubSections subSections}.
     */
    addSubSection(
      /**
       * The subSection to add; if empty, nothing is inserted
       */
      oSubSection: ObjectPageSubSection
    ): this;
    /**
     * Destroys all the subSections in the aggregation {@link #getSubSections subSections}.
     */
    destroySubSections(): this;
    /**
     * Creates a new subclass of class sap.uxap.ObjectPageSection with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.uxap.ObjectPageSectionBase.extend}.
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
     */
    static getMetadata(): ElementMetadata;
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
     */
    getTitleUppercase(): boolean;
    /**
     * Checks for the provided `sap.uxap.ObjectPageSubSection` in the aggregation {@link #getSubSections subSections}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfSubSection(
      /**
       * The subSection whose index is looked for
       */
      oSubSection: ObjectPageSubSection
    ): int;
    /**
     * Inserts a subSection into the aggregation {@link #getSubSections subSections}.
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
     */
    removeAllSubSections(): ObjectPageSubSection[];
    /**
     * Removes a subSection from the aggregation {@link #getSubSections subSections}.
     */
    removeSubSection(
      /**
       * The subSection to remove or its index or id
       */
      vSubSection: int | string | ObjectPageSubSection
    ): ObjectPageSubSection;
    /**
     * Sets the associated {@link #getSelectedSubSection selectedSubSection}.
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
     */
    setTitleUppercase(
      /**
       * New value for property `titleUppercase`
       */
      bTitleUppercase?: boolean
    ): this;
  }

  export interface $ObjectPageSectionSettings
    extends $ObjectPageSectionBaseSettings {
    /**
     * Determines whether to display the Section title or not.
     */
    showTitle?: boolean | PropertyBindingInfo;

    /**
     * Determines whether the Section title is displayed in upper case.
     */
    titleUppercase?: boolean | PropertyBindingInfo;

    /**
     * The list of Subsections.
     */
    subSections?:
      | ObjectPageSubSection[]
      | ObjectPageSubSection
      | AggregationBindingInfo;

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
     * Explicitly ask to connect to the UI5 model tree
     */
    connectToModels(): void;
    /**
     * Destroys the customAnchorBarButton in the aggregation {@link #getCustomAnchorBarButton customAnchorBarButton}.
     */
    destroyCustomAnchorBarButton(): this;
    /**
     * Creates a new subclass of class sap.uxap.ObjectPageSectionBase with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, ObjectPageSectionBase>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
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
     */
    getImportance(): Importance | keyof typeof Importance;
    /**
     * Returns a metadata object for class sap.uxap.ObjectPageSectionBase.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Returns the control name text.
     *
     * To be overwritten by the specific control method.
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
     */
    getTitleLevel(): TitleLevel | keyof typeof TitleLevel;
    /**
     * Gets current value of property {@link #getVisible visible}.
     *
     * Invisible ObjectPageSectionBase are not rendered
     *
     * Default value is `true`.
     */
    getVisible(): boolean;
    /**
     * Sets the aggregated {@link #getCustomAnchorBarButton customAnchorBarButton}.
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
     */
    setImportance(
      /**
       * New value for property `importance`
       */
      sImportance?: Importance | keyof typeof Importance
    ): this;
    /**
     * Returns the DOM Element that should get the focus.
     *
     * To be overwritten by the specific control method.
     */
    setInvisibleTextLabelValue(): this;
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
     */
    setVisible(
      /**
       * New value for property `visible`
       */
      bVisible?: boolean
    ): this;
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
    titleLevel?: (TitleLevel | keyof typeof TitleLevel) | PropertyBindingInfo;

    /**
     * Invisible ObjectPageSectionBase are not rendered
     */
    visible?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.32.0
     *
     * Determines whether the section will be hidden on low resolutions.
     */
    importance?: (Importance | keyof typeof Importance) | PropertyBindingInfo;

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
     * Adds some action to the aggregation {@link #getActions actions}.
     */
    addAction(
      /**
       * The action to add; if empty, nothing is inserted
       */
      oAction: Control
    ): this;
    /**
     * Adds some block to the aggregation {@link #getBlocks blocks}.
     */
    addBlock(
      /**
       * The block to add; if empty, nothing is inserted
       */
      oBlock: Control
    ): this;
    /**
     * Adds some moreBlock to the aggregation {@link #getMoreBlocks moreBlocks}.
     */
    addMoreBlock(
      /**
       * The moreBlock to add; if empty, nothing is inserted
       */
      oMoreBlock: Control
    ): this;
    /**
     * Destroys all the actions in the aggregation {@link #getActions actions}.
     */
    destroyActions(): this;
    /**
     * Destroys all the blocks in the aggregation {@link #getBlocks blocks}.
     */
    destroyBlocks(): this;
    /**
     * Destroys all the moreBlocks in the aggregation {@link #getMoreBlocks moreBlocks}.
     */
    destroyMoreBlocks(): this;
    /**
     * Creates a new subclass of class sap.uxap.ObjectPageSubSection with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.uxap.ObjectPageSectionBase.extend}.
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
     * Returns a metadata object for class sap.uxap.ObjectPageSubSection.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getMode mode}.
     *
     * A mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant
     * if these aggregations use Object page blocks.
     *
     * Default value is `Collapsed`.
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
     */
    getShowTitle(): boolean;
    /**
     * Gets current value of property {@link #getTitleUppercase titleUppercase}.
     *
     * Determines whether the Subsection title is displayed in upper case.
     *
     * Default value is `false`.
     */
    getTitleUppercase(): boolean;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getActions actions}. and returns
     * its index if found or -1 otherwise.
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
     */
    indexOfMoreBlock(
      /**
       * The moreBlock whose index is looked for
       */
      oMoreBlock: Control
    ): int;
    /**
     * Inserts a action into the aggregation {@link #getActions actions}.
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
     */
    removeAction(
      /**
       * The action to remove or its index or id
       */
      vAction: int | string | Control
    ): Control;
    /**
     * Removes all the controls from the aggregation {@link #getActions actions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllActions(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getBlocks blocks}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllBlocks(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getMoreBlocks moreBlocks}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllMoreBlocks(): Control[];
    /**
     * Removes a block from the aggregation {@link #getBlocks blocks}.
     */
    removeBlock(
      /**
       * The block to remove or its index or id
       */
      vBlock: int | string | Control
    ): Control;
    /**
     * Removes a moreBlock from the aggregation {@link #getMoreBlocks moreBlocks}.
     */
    removeMoreBlock(
      /**
       * The moreBlock to remove or its index or id
       */
      vMoreBlock: int | string | Control
    ): Control;
    /**
     * Sets a new value for property {@link #getMode mode}.
     *
     * A mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant
     * if these aggregations use Object page blocks.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Collapsed`.
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
    showTitle?: boolean | PropertyBindingInfo;

    /**
     * A mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant
     * if these aggregations use Object page blocks.
     */
    mode?:
      | (ObjectPageSubSectionMode | keyof typeof ObjectPageSubSectionMode)
      | PropertyBindingInfo;

    /**
     * Determines whether the Subsection title is displayed in upper case.
     */
    titleUppercase?: boolean | PropertyBindingInfo;

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
    blocks?: Control[] | Control | AggregationBindingInfo;

    /**
     * Additional controls to display when the Show more / See all / (...) button is pressed
     */
    moreBlocks?: Control[] | Control | AggregationBindingInfo;

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
    actions?: Control[] | Control | AggregationBindingInfo;
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
