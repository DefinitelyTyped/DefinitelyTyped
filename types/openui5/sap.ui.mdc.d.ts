// For Library Version: 1.124.0

declare module "sap/ui/mdc/AggregationBaseDelegate" {
  import BaseDelegate from "sap/ui/mdc/BaseDelegate";

  import Control from "sap/ui/mdc/Control";

  import UI5Element from "sap/ui/core/Element";

  /**
   * Base delegate implementation for {@link sap.ui.mdc.Control MDC Controls}. This delegate serves as base
   * implementation for aggregation-based controls, such as:
   *
   *
   * 	 - `sap.ui.mdc.Chart`
   * 	 - `sap.ui.mdc.Table`
   * 	 - `sap.ui.mdc.FilterBar`
   *
   * The `AggregationBaseDelegate` provides an interface for aggregation based functionality by providing
   * an array of PropertyInfo objects, which can be used during runtime for personalization through the according
   * `addItem` and `removeItem` hooks. Additional hooks for cleanup and validation mechanisms can be implemented
   * through this delegate.
   *
   * @since 1.82.0
   */
  interface AggregationBaseDelegate extends BaseDelegate {
    /**
     * Central hook to add items to the provided control instance. This method must return a promise that resolves
     * with an instance of the implementing {@link sap.ui.mdc.Control Control} default aggregation.
     *
     * Consequently the parameter `mPropertyBag` is only passed during preprocessing. In runtime scenarios (such
     * as opening a personalization dialog), this method might be called without the parameter `mPropertyBag`.
     */
    addItem(
      /**
       * Instance of an `sap.ui.mdc.Control`. **Note:** The `addItem` hook can be used during the processing of
       * an SAPUI5 flexibility change.
       */
      oControl: Control | Element,
      /**
       * The name of the property info object
       */
      sPropertyName: string,
      /**
       * Instance of property bag from SAPUI5 flexibility change API
       */
      mPropertyBag?: Object
    ): void;
    /**
     * Retrieves the relevant metadata for a given payload and returns the property info array.
     * By default, this method returns a `Promise` that resolves into `[]`.
     *
     *
     * @returns Once resolved, an array of property info objects is returned
     */
    fetchProperties(
      /**
       * Instance of an `sap.ui.mdc.Control`
       */
      oControl: Control
    ): Promise<object[]>;
    /**
     * Hook that will be executed when changes are done applying to controls during the XML flexibility change
     * appliance process.
     */
    onAfterXMLChangeProcessing(
      /**
       * XML node of a mdc control
       */
      oControl: Element,
      /**
       * Property bag from SAPUI5 flexibility
       */
      mPropertyBag: Object
    ): void;
    /**
     * Triggers any necessary follow-up steps that need to be taken after the removal of created items via `removeItem`.
     * The returned Boolean value inside the `Promise` can be used to prevent the default follow-up behavior
     * of the SAPUI5 flexibility handling.
     * By default, this method returns a `Promise` that resolves into `true`. This will ensure, that the item
     * will be destroyed subsequentially after it has been removed by the control.
     *
     * **Note:** The `removeItem` hook can be used during the processing of an SAPUI5 flexibility change. Consequently
     * the parameter `mPropertyBag` is only passed during preprocessing. In runtime scenarios (such as opening
     * a personalization dialog), this method might be called without the parameter `mPropertyBag`.
     *
     *
     * @returns Promise resolving in a boolean, deciding whether the item should be destroyed (`true`) or kept
     * (`false`) after removing it from the control aggregation.
     */
    removeItem(
      /**
       * Instance of a `sap.ui.mdc.Control`
       */
      oControl: Control | Element,
      /**
       * The control instance that was removed
       */
      oItem: UI5Element,
      /**
       * Instance of property bag from SAPUI5 flexibility
       */
      mPropertyBag?: Object
    ): Promise<boolean>;
  }
  const AggregationBaseDelegate: AggregationBaseDelegate;
  export default AggregationBaseDelegate;
}

declare module "sap/ui/mdc/BaseDelegate" {
  import Control from "sap/ui/mdc/Control";

  import TypeMap from "sap/ui/mdc/util/TypeMap";

  /**
   * Basic Delegate for {@link sap.ui.mdc.Control}, {@link sap.ui.mdc.Element}
   *
   *
   * All delegate implementations for MDC controls must be derived directly or indirectly from this entity.
   * Applications should implement {@link module:sap/ui/mdc/BaseDelegate.getTypeMap getTypeMap} to provide
   * type mappings based on their model usage. Please also see the following extensible presets: {@link module:sap/ui/mdc/DefaultTypeMap sap.ui.mdc.DefaultTypeMap},
   * {@link module:sap/ui/mdc/odata/TypeMap sap.ui.mdc.odata.TypeMap}, {@link module:sap/ui/mdc/odata/v4/TypeMap sap.ui.mdc.odata.v4.TypeMap}
   *
   * @since 1.79.0
   */
  interface BaseDelegate {
    /**
     * Returns the typeutil configuration for this delegate.
     *
     * @since 1.114.0
     *
     * @returns typeMap configuration for this delegate Note: The returned array will also serve as a key in
     * the weakmap-based typeutil cache of BaseDelegate
     */
    getTypeMap(
      /**
       * Delegate payload object
       */
      oControl: Control
    ): TypeMap;
  }
  const BaseDelegate: BaseDelegate;
  export default BaseDelegate;
}

declare module "sap/ui/mdc/ChartDelegate" {
  import AggregationBaseDelegate from "sap/ui/mdc/AggregationBaseDelegate";

  import { default as Chart, PropertyInfo } from "sap/ui/mdc/Chart";

  import Item from "sap/ui/mdc/chart/Item";

  import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";

  import FilterField from "sap/ui/mdc/FilterField";

  import Filter from "sap/ui/model/Filter";

  import Control from "sap/ui/core/Control";

  import { URI } from "sap/ui/core/library";

  /**
   * Base Delegate for {@link sap.ui.mdc.Chart Chart}. Extend this object in your project to use all functionalities
   * of the {@link sap.ui.mdc.Chart Chart}.
   *  This class provides method calls, that are called by the `Chart` for specific operations and overwrite
   * the internal behavior.
   *
   * @since 1.88
   * @experimental (since 1.88)
   */
  interface ChartDelegate extends AggregationBaseDelegate {
    /**
     * Creates a new chart item for a given property name and updates the inner chart.
     *  **Note:** This does **not** add the chart item to the `Items` aggregation of the chart. Called and used
     * by `p13n`.
     *
     *
     * @returns `Promise` that resolves with new chart `Item` as parameter
     */
    addItem(
      /**
       * Reference to the MDC chart to add the property to
       */
      oChart: Chart,
      /**
       * The name of the property added
       */
      sPropertyName: string,
      /**
       * The property bag containing useful information about the change
       */
      mPropertyBag: object,
      /**
       * New role for given item
       */
      sRole?: string
    ): Promise<Item>;
    /**
     * This method is called to update the no data structure.
     */
    changedNoDataStruct(
      /**
       * Reference to the chart
       */
      oChart: Chart
    ): void;
    /**
     * Creates the initial content for the chart before the metadata is retrieved.
     *  This can be used by chart libraries that can already show some information without the actual data (for
     * example, axis labels, legend, ...).
     */
    createInitialChartContent(
      /**
       * Reference to the chart
       */
      oChart: Chart
    ): void;
    /**
     * Binds the inner chart to the back-end data and creates the inner chart content.
     */
    createInnerChartContent(
      /**
       * Reference to the chart
       */
      oChart: Chart,
      /**
       * Callback function when data is loaded
       */
      fnCallbackDataLoaded: Function
    ): void;
    /**
     * Returns the relevant property info based on the metadata used with the chart instance.
     *
     * **Note:** The result of this function must be kept stable throughout the lifecycle of your application.
     * Any changes of the returned values might result in undesired effects.
     *
     *
     * @returns Array of the property infos that is used within the chart
     */
    fetchProperties(
      /**
       * Reference to the chart
       */
      oChart: Chart
    ): Promise<PropertyInfo[]>;
    /**
     * Gets the available chart types for the current state of the inner chart.
     *
     *
     * @returns Array containing the currently available chart types
     */
    getAvailableChartTypes(
      /**
       * Reference to the chart
       */
      oChart: Chart
    ): ChartTypeObject[];
    /**
     * Returns the binding info for given chart.
     *
     *
     * @returns BindingInfo object
     */
    getBindingInfo(
      /**
       * Reference to the chart
       */
      oChart: Chart
    ): AggregationBindingInfo;
    /**
     * Returns the current chart type.
     *
     *
     * @returns Information about the current chart type
     */
    getChartTypeInfo(
      /**
       * Reference to the MDC chart
       */
      oChart: Chart
    ): ChartTypeObject[];
    /**
     * This function is used by `P13n` to determine which chart type supports which layout options. There might
     * be chart types that do not support certain layout options (for example, "Axis3").
     *
     *
     * @returns chart type layout config
     */
    getChartTypeLayoutConfig(): ChartTypeLayoutConfig[];
    /**
     * Determines which MDC items are drillable and returns them. This function is used by the breadcrumb navigation.
     *
     *
     * @returns Array of MDC items that are drillable
     */
    getDrillableItems(
      /**
       * Reference to the chart
       */
      oChart: Chart
    ): Item[];
    /**
     * Returns the current drilling stack of the inner chart.
     *  The returned objects need at least a `label` and a `name` property.
     *  Also, a `dimension` array containing the dimension drill stack at the current level is required.
     *
     *
     * @returns Array containing the drill stack
     */
    getDrillStack(
      /**
       * Reference to the chart
       */
      oChart: Chart
    ): any[];
    /**
     * Returns the filter delegate of the chart that provides basic filter functionality, such as adding filter
     * fields. **Note:** The functionality provided in this delegate acts as a subset of a `FilterBarDelegate`
     * to enable the chart for inbuilt filtering.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Object for the chart filter personalization
     */
    getFilterDelegate(): {
      addItem: (p1: Chart, p2: string) => Promise<FilterField>;
    };
    /**
     * Returns filters to be applied when updating the chart's binding based on the filter conditions of the
     * chart itself and it's associated {@link sap.ui.mdc.IFilterSource IFilterSource}.
     *
     * @since 1.121
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Array of filters
     */
    getFilters(
      /**
       * Reference to the chart
       */
      oChart: Chart
    ): Filter[];
    /**
     * Returns the instance of the inner chart.
     *
     *
     * @returns Instance of the inner chart
     */
    getInnerChart(
      /**
       * Reference to the MDC chart
       */
      oChart: Chart
    ): Control;
    /**
     * Returns the information whether the inner chart is currently bound.
     *
     *
     * @returns `true` if inner chart is bound; `false` if not
     */
    getInnerChartBound(
      /**
       * Reference to the chart
       */
      oChart: Chart
    ): boolean;
    /**
     * Returns the event handler for `SelectionDetails` as an object.
     *
     *
     * @returns Event handler for SelectionDetails
     */
    getInnerChartSelectionHandler(
      /**
       * Reference to the chart
       */
      oChart: Chart
    ): SelectionDetails;
    /**
     * This function returns an ID that should be used in the internal chart for the Measure/Dimension.
     *  For standard cases, this is just the ID of the property.
     *  If it is necessary to use another ID internally inside the chart (for example, for duplicate property
     * IDs) this method can be overwritten.
     *  In this case, `getPropertyFromNameAndKind` needs to be overwritten as well.
     *
     *
     * @returns Internal ID for the sap.chart.Chart
     */
    getInternalChartNameFromPropertyNameAndKind(
      /**
       * ID of the property
       */
      sName: string,
      /**
       * Type of the property (Measure/Dimension)
       */
      sKind: string,
      /**
       * Reference to the chart
       */
      oChart: Chart
    ): string;
    /**
     * Maps an ID of an internal chart dimension/measure and type of a property to its corresponding property
     * entry.
     *
     *
     * @returns PropertyInfo object
     */
    getPropertyFromNameAndKind(
      /**
       * ID of internal chart measure/dimension
       */
      sName: string,
      /**
       * Kind of the property
       */
      sKind: string,
      /**
       * Reference to the chart
       */
      oChart: Chart
    ): PropertyInfo;
    /**
     * Returns all sorted dimensions of an inner chart. This is used to determine possible drill-down dimensions
     * in the drill-down popover of the chart.
     *
     *
     * @returns `Promise` containing an array of dimensions that is sorted
     */
    getSortedDimensions(
      /**
       * Reference to the chart
       */
      oChart: Chart
    ): Promise<Item[]>;
    /**
     * Gets the current zooming information for the inner chart.
     *
     *
     * @returns Current `ZoomState` of the inner chart
     */
    getZoomState(
      /**
       * Reference to the chart
       */
      oChart: Chart
    ): ZoomState;
    /**
     * Loads the required libraries and creates the inner chart.
     *  By default, the method returns `Promise.reject()`.
     *
     *
     * @returns Resolved once the inner chart has been initialized
     */
    initializeInnerChart(
      /**
       * Reference to the chart
       */
      oChart: Chart
    ): Promise<any>;
    /**
     * Inserts a chart item (measure / dimension for `sap.chart.Chart`) into the inner chart.
     *  This function is called by the chart for a change of the `Items` aggregation.
     *  **Note:** Do not call this yourself, as it would not be synced with the chart, but insert the item into
     * the chart instead.
     */
    insertItemToInnerChart(
      /**
       * Chart into which the item is insert
       */
      oChart: Chart,
      /**
       * Chart item that is inserted into the inner chart
       */
      oChartItem: Item,
      /**
       * The index into which the chart item is inserted
       */
      iIndex: int
    ): void;
    /**
     * Checks the binding of the chart and rebinds it if required.
     */
    rebind(
      /**
       * Reference to the chart
       */
      oChart: Chart,
      /**
       * BindingInfo of the chart
       */
      oBindingInfo: AggregationBindingInfo
    ): void;
    /**
     * Removes an existing chart item for a given property name and updates the inner chart. Called and used
     * by `p13n`.
     *
     *
     * @returns `Promise` containing information whether the item was deleted
     */
    removeItem(
      /**
       * Reference to the MDC chart from which property is removed
       */
      oChart: Chart,
      /**
       * The `item` that is removed from the chart
       */
      oItem: Item,
      /**
       * The property bag containing useful information about the change
       */
      mPropertyBag: object
    ): Promise<boolean>;
    /**
     * Removes a chart item (measure / dimension for `sap.chart.Chart`) from the inner chart.
     *  This function is called by the chart for a change of the `Items` aggregation.
     *  **Note:** Do not call this yourself, as it would not be synced with the chart, but remove the item from
     * the chart instead.
     */
    removeItemFromInnerChart(
      /**
       * Chart from which the item is removed
       */
      oChart: Chart,
      /**
       * Chart item that is removed from the inner chart
       */
      oChartItem: Item
    ): void;
    /**
     * Sets tooltips to visible/invisible for the inner chart. **Note:** This function is called by the chart
     * only. You must not call it directly but use {@link sap.ui.mdc.Chart#setShowChartTooltip setShowChartTooltip }
     * instead.
     */
    setChartTooltipVisibility(
      /**
       * Reference to the chart
       */
      oChart: Chart,
      /**
       * `true` for visible, `false` for invisible
       */
      bVisible: boolean
    ): void;
    /**
     * Sets the chart type of the inner chart. This function is called by the chart when the `chartType` property
     * is updated. **Note:** This function is called by the chart only. You must not call it directly but use
     * {@link sap.ui.mdc.Chart#chartType chartType} instead.
     */
    setChartType(
      /**
       * New chart type
       */
      sChartType: string
    ): void;
    /**
     * Sets the visibility of the legend. **Note:** This function is called by the chart only. You must not
     * call it directly but use {@link sap.ui.mdc.Chart#setLegendVisible LegendVisible} instead.
     */
    setLegendVisible(
      /**
       * Chart for which the legend visibility is set
       */
      oChart: Chart,
      /**
       * Shows legend, if set to `true`
       */
      bVisible: boolean
    ): void;
    /**
     * Sets a "No Data" text for the inner chart.
     */
    setNoDataText(
      /**
       * Reference to chart
       */
      oChart: Chart,
      /**
       * Text to show when there is no data displayed in the chart
       */
      sText: string
    ): void;
    /**
     * Adds/Removes the busy overlay shown above the inner chart.
     */
    showOverlay(
      /**
       * Reference to the chart
       */
      oChart: Chart,
      /**
       * Shows overlay if set to `true`
       */
      bShow: boolean
    ): void;
    /**
     * Updates the binding info with the relevant filters.
     *  By default, this method updates a given {@link sap.ui.base.ManagedObject.AggregationBindingInfo AggregationBindingInfo }
     * with the return value from the delegate's own {@link module:sap/ui/mdc/ChartDelegate.getFilters getFilters}.
     */
    updateBindingInfo(
      /**
       * Reference to the chart
       */
      oChart: Chart,
      /**
       * Binding info of the chart
       */
      oBindingInfo: AggregationBindingInfo
    ): void;
    /**
     * Notifies the inner chart to zoom in.
     */
    zoomIn(
      /**
       * Reference to the chart
       */
      oChart: Chart
    ): void;
    /**
     * Notifies the inner chart to zoom out.
     */
    zoomOut(
      /**
       * Reference to the chart
       */
      oChart: Chart
    ): void;
  }
  const ChartDelegate: ChartDelegate;
  export default ChartDelegate;

  /**
   * Chart `ChartTypeLayoutConfig` type.
   *
   * @experimental (since 1.80)
   */
  export type ChartTypeLayoutConfig = {
    /**
     * identifier for the chart type
     */
    key: string;
    /**
     * Layout configuration of chart type
     */
    allowedLayoutOptions: string[];
  };

  /**
   * Chart `ChartTypeObject` type.
   *
   * @experimental (since 1.80)
   */
  export type ChartTypeObject = {
    /**
     * Unique key of the chart type
     */
    key: string;
    /**
     * URI for the icon for the current chart type
     */
    icon: URI;
    /**
     * Name of the current chart type
     */
    text: string;
    /**
     * Whether the chart type is the one currently used
     */
    selected: boolean;
  };

  /**
   * Event handler for `SelectionDetails` popover.
   *
   * @experimental (since 1.80)
   */
  export type SelectionDetails = {
    /**
     * ID of the selection event
     */
    eventId: string;
    /**
     * Reference to inner chart
     */
    listener: Control;
  };

  /**
   * Chart `ZoomState` type.
   *
   * @experimental (since 1.80)
   */
  export type ZoomState = {
    /**
     * Zooming is enabled if set to `true`
     */
    enabled: boolean;
    /**
     * Current zoom level of the chart in percent (between 0 and 1)
     */
    currentZoomLevel: number;
  };
}

declare module "sap/ui/mdc/DefaultTypeMap" {
  import TypeMap from "sap/ui/mdc/util/TypeMap";

  /**
   * Generic {@link module:sap/ui/mdc/util/TypeMap TypeMap} configuration for simple use cases.
   *
   * **Note:** This {@link module:sap/ui/mdc/util/TypeMap TypeMap} implementation contains the following types:
   *
   *
   * 	 - {@link sap.ui.model.type.Boolean} (alias `Boolean`)
   * 	 - {@link sap.ui.model.type.Currency} (alias `Currency`)
   * 	 - {@link sap.ui.model.type.Date} (alias `Date`)
   * 	 - {@link sap.ui.model.type.DateTime} (alias `DateTime`)
   * 	 - {@link sap.ui.model.type.Float} (alias `Float`)
   * 	 - {@link sap.ui.model.type.Integer} (alias `Integer`)
   * 	 - {@link sap.ui.model.type.String} (alias `String`)
   * 	 - {@link sap.ui.model.type.Time} (alias `Time`)
   * 	 - {@link sap.ui.model.type.Unit} (alias `Unit`)
   *
   * @since 1.114.0
   */
  interface DefaultTypeMap extends TypeMap {}
  const DefaultTypeMap: DefaultTypeMap;
  export default DefaultTypeMap;
}

declare module "sap/ui/mdc/field/FieldBaseDelegate" {
  import BaseDelegate from "sap/ui/mdc/BaseDelegate";

  import FieldBase from "sap/ui/mdc/field/FieldBase";

  import Control from "sap/ui/core/Control";

  import { ConditionObject } from "sap/ui/mdc/condition/Condition";

  import ContentMode from "sap/ui/mdc/enums/ContentMode";

  import {
    default as ValueHelp,
    ItemForValueConfiguration,
  } from "sap/ui/mdc/ValueHelp";

  import Context from "sap/ui/model/Context";

  import Type from "sap/ui/model/Type";

  import FormatException from "sap/ui/model/FormatException";

  import ParseException from "sap/ui/model/ParseException";

  import Operator from "sap/ui/mdc/condition/Operator";

  import SimpleType from "sap/ui/model/SimpleType";

  /**
   * Delegate for {@link sap.ui.mdc.field.FieldBase FieldBase}.
   *
   *
   * @since 1.72.0
   */
  interface FieldBaseDelegate extends BaseDelegate {
    /**
     * Enables applications to control condition updates based on `value` / `additionalvalue` property changes.
     *
     * By default, this method returns a condition with an `EQ` operator.
     *
     * **Note:** Custom implementations of this method may lead to intransparency as a field's condition may
     * then differ from the state of the `value` / `additionalvalue` properties. Avoid expensive operations,
     * as this can delay the rendering of the output.
     *
     * @since 1.107.0
     *
     * @returns Returns a condition object that is set on the control
     */
    createCondition(
      /**
       * `Field` control instance
       */
      oField: FieldBase,
      /**
       * Instance of the calling control
       */
      oControl: Control,
      /**
       * Key and description for the condition that is created
       */
      aValues: any[],
      /**
       * Currently available condition before the property change
       */
      oCurrentCondition: undefined | ConditionObject
    ): undefined | ConditionObject;
    /**
     * Enables applications to control condition updates based on `value` / `additionalvalue` property changes.
     *
     * By default, this method returns a condition with an `EQ` operator.
     *
     * **Note:** Custom implementations of this method may lead to intransparency as a field's condition may
     * then differ from the state of the `value` / `additionalvalue` properties. Avoid expensive operations,
     * as this can delay the rendering of the output.
     *
     * @since 1.107.0
     *
     * @returns Returns a condition object that is set on the control
     */
    createCondition(
      /**
       * `Field` control instance
       */
      oField: FieldBase,
      /**
       * Key and description for the condition that is created
       */
      aValues: any[],
      /**
       * Currently available condition before the property change
       */
      oCurrentCondition: undefined | ConditionObject
    ): undefined | ConditionObject;
    /**
     * Provides the possibility to convey custom data in conditions. This enables an application to enhance
     * conditions with data relevant for combined key or out parameter scenarios.
     *
     * @since 1.107.0
     *
     * @returns Optionally returns a serializeable object to be stored in the condition payload field.
     */
    createConditionPayload(
      /**
       * `Field` control instance
       */
      oField: FieldBase,
      /**
       * Instance of the calling control
       */
      oControl: Control,
      /**
       * key, description pair for the condition which is to be created.
       */
      aValues: any[]
    ): undefined | object;
    /**
     * Provides the possibility to convey custom data in conditions. This enables an application to enhance
     * conditions with data relevant for combined key or out parameter scenarios.
     *
     * @since 1.107.0
     *
     * @returns Optionally returns a serializeable object to be stored in the condition payload field.
     */
    createConditionPayload(
      /**
       * `Field` control instance
       */
      oField: FieldBase,
      /**
       * key, description pair for the condition which is to be created.
       */
      aValues: any[]
    ): undefined | object;
    /**
     * Provides the possibility to customize / replace the internal content of a field
     *
     * @since 1.124.0
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Array containing the created controls
     */
    createContent(
      /**
       * `Field` control instance
       */
      oField: FieldBase,
      /**
       * A given content mode
       */
      sContentMode: ContentMode | keyof typeof ContentMode,
      /**
       * ID of the internal control to be created.
       */
      sId: string
    ): Promise<Control[]>;
    /**
     * Determines the text for the autocomplete functionality.
     *
     * This function is called during a user's type-ahead into a {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.FilterField FilterField},
     * or {@link sap.ui.mdc.MultiValueField MultiValueField} control.
     *
     * The returned text will be shown as selected after the user input ends.
     *
     * By Default this method uses the {@link sap.ui.mdc.field.FieldBase#getDisplay display} property of the
     * {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.FilterField FilterField}, or {@link sap.ui.mdc.MultiValueField MultiValueField }
     * control to determine what text (key or description) is used as autocomplete-text. A text is only used
     * if it matches the user input. If set to `Value`, the key is used. If set to `Description`, the description
     * is used. If set to `ValueDescription`, the key is used, if it maps, otherwise the description. If set
     * to `DescriptionValue`, the description is used, if it maps, otherwise the key.
     *
     * **Note:** Whatever this function returns, the user input will not be overwritten, only the text after
     * the user input will be added and shown as selected. Otherwise the cursor position might change or the
     * user input changes while typing what would lead to confusion.
     *
     *
     * @returns Output text or boolean true, if the autocomplete value should be accepted without modifying
     * the visible input
     */
    getAutocompleteOutput(
      /**
       * `Field` control instance
       */
      oField: FieldBase,
      /**
       * Condition
       */
      oCondition: ConditionObject,
      /**
       * Formatted text of the key (value)
       */
      sKey: string,
      /**
       * FormattedText of the description
       */
      sDescription: string,
      /**
       * If `true` the key matches to the user input
       */
      bKeyMatch: boolean,
      /**
       * If `true` the description matches to the user input
       */
      bDescriptionMatch: boolean
    ): string | boolean;
    /**
     * Determines the description for a given key.
     * By default, this method calls the {@link sap.ui.mdc.ValueHelp#getItemForValue getItemForValue} function
     * of the assigned {@link sap.ui.mdc.ValueHelp ValueHelp}.
     *
     * This function is called while formatting the output of a {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.FilterField FilterField},
     * or {@link sap.ui.mdc.MultiValueField MultiValueField} control if a description should be displayed but
     * only a key is given.
     *
     * If this needs to be determined asynchronously, a `Promise` is returned.
     *
     * As the key might change (uppercase), an object with key and description can be returned.
     *
     * If the description cannot be determined, a corresponding {@link sap.ui.model.FormatException FormatException }
     * is thrown.
     *
     *
     * @returns Description for key or object containing description, key, and payload. If it is not available
     * right away (must be requested), a `Promise` is returned.
     */
    getDescription(
      /**
       * `Field` control instance
       */
      oField: FieldBase,
      /**
       * Field help assigned to the {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.FilterField FilterField},
       * or {@link sap.ui.mdc.MultiValueField MultiValueField} control
       */
      oValueHelp: ValueHelp,
      /**
       * Key
       */
      vKey: any,
      /**
       * In parameters for the key (as a key is not necessarily unique.) (Only filled in conditions of old variants.)
       */
      oInParameters: object,
      /**
       * Out parameters for the key (as a key is not necessarily unique.) (Only filled in conditions of old variants.)
       */
      oOutParameters: object,
      /**
       * `BindingContext` of the checked field; Inside a table, the `ValueHelp` element might be connected to
       * a different row.
       */
      oBindingContext: Context,
      /**
       * `ConditionModel`, if bound to one - NO LONGER USED
       */
      oConditionModel: undefined,
      /**
       * Name of the `ConditionModel`, if bound to one - NO LONGER USED
       */
      sConditionModelName: undefined,
      /**
       * Additional context information for this key
       */
      oConditionPayload: object,
      /**
       * Instance of the calling control if it is not the field itself
       */
      oControl: Control,
      /**
       * Type of the value
       */
      oType: Type
    ):
      | string
      | /* was: sap.ui.mdc.valuehelp.ValueHelpItem */ any
      | Promise<string | /* was: sap.ui.mdc.valuehelp.ValueHelpItem */ any>;
    /**
     * Determines the description for a given key.
     * By default, this method calls the {@link sap.ui.mdc.ValueHelp#getItemForValue getItemForValue} function
     * of the assigned {@link sap.ui.mdc.ValueHelp ValueHelp}.
     *
     * This function is called while formatting the output of a {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.FilterField FilterField},
     * or {@link sap.ui.mdc.MultiValueField MultiValueField} control if a description should be displayed but
     * only a key is given.
     *
     * If this needs to be determined asynchronously, a `Promise` is returned.
     *
     * As the key might change (uppercase), an object with key and description can be returned.
     *
     * If the description cannot be determined, a corresponding {@link sap.ui.model.FormatException FormatException }
     * is thrown.
     *
     *
     * @returns Description for key or object containing description, key, and payload. If it is not available
     * right away (must be requested), a `Promise` is returned.
     */
    getDescription(
      /**
       * `Field` control instance
       */
      oField: FieldBase,
      /**
       * Field help assigned to the {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.FilterField FilterField},
       * or {@link sap.ui.mdc.MultiValueField MultiValueField} control
       */
      oValueHelp: ValueHelp,
      /**
       * Key
       */
      vKey: any,
      /**
       * In parameters for the key (as a key is not necessarily unique.) (Only filled in conditions of old variants.)
       */
      oInParameters: object,
      /**
       * Out parameters for the key (as a key is not necessarily unique.) (Only filled in conditions of old variants.)
       */
      oOutParameters: object,
      /**
       * `BindingContext` of the checked field; Inside a table, the `ValueHelp` element might be connected to
       * a different row.
       */
      oBindingContext: Context,
      /**
       * `ConditionModel`, if bound to one - NO LONGER USED
       */
      oConditionModel: undefined,
      /**
       * Additional context information for this key
       */
      oConditionPayload: object,
      /**
       * Instance of the calling control if it is not the field itself
       */
      oControl: Control,
      /**
       * Type of the value
       */
      oType: Type
    ):
      | string
      | /* was: sap.ui.mdc.valuehelp.ValueHelpItem */ any
      | Promise<string | /* was: sap.ui.mdc.valuehelp.ValueHelpItem */ any>;
    /**
     * Determines the description for a given key.
     * By default, this method calls the {@link sap.ui.mdc.ValueHelp#getItemForValue getItemForValue} function
     * of the assigned {@link sap.ui.mdc.ValueHelp ValueHelp}.
     *
     * This function is called while formatting the output of a {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.FilterField FilterField},
     * or {@link sap.ui.mdc.MultiValueField MultiValueField} control if a description should be displayed but
     * only a key is given.
     *
     * If this needs to be determined asynchronously, a `Promise` is returned.
     *
     * As the key might change (uppercase), an object with key and description can be returned.
     *
     * If the description cannot be determined, a corresponding {@link sap.ui.model.FormatException FormatException }
     * is thrown.
     *
     *
     * @returns Description for key or object containing description, key, and payload. If it is not available
     * right away (must be requested), a `Promise` is returned.
     */
    getDescription(
      /**
       * `Field` control instance
       */
      oField: FieldBase,
      /**
       * Field help assigned to the {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.FilterField FilterField},
       * or {@link sap.ui.mdc.MultiValueField MultiValueField} control
       */
      oValueHelp: ValueHelp,
      /**
       * Key
       */
      vKey: any,
      /**
       * In parameters for the key (as a key is not necessarily unique.) (Only filled in conditions of old variants.)
       */
      oInParameters: object,
      /**
       * Out parameters for the key (as a key is not necessarily unique.) (Only filled in conditions of old variants.)
       */
      oOutParameters: object,
      /**
       * `BindingContext` of the checked field; Inside a table, the `ValueHelp` element might be connected to
       * a different row.
       */
      oBindingContext: Context,
      /**
       * Name of the `ConditionModel`, if bound to one - NO LONGER USED
       */
      sConditionModelName: undefined,
      /**
       * Additional context information for this key
       */
      oConditionPayload: object,
      /**
       * Instance of the calling control if it is not the field itself
       */
      oControl: Control,
      /**
       * Type of the value
       */
      oType: Type
    ):
      | string
      | /* was: sap.ui.mdc.valuehelp.ValueHelpItem */ any
      | Promise<string | /* was: sap.ui.mdc.valuehelp.ValueHelpItem */ any>;
    /**
     * Determines the description for a given key.
     * By default, this method calls the {@link sap.ui.mdc.ValueHelp#getItemForValue getItemForValue} function
     * of the assigned {@link sap.ui.mdc.ValueHelp ValueHelp}.
     *
     * This function is called while formatting the output of a {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.FilterField FilterField},
     * or {@link sap.ui.mdc.MultiValueField MultiValueField} control if a description should be displayed but
     * only a key is given.
     *
     * If this needs to be determined asynchronously, a `Promise` is returned.
     *
     * As the key might change (uppercase), an object with key and description can be returned.
     *
     * If the description cannot be determined, a corresponding {@link sap.ui.model.FormatException FormatException }
     * is thrown.
     *
     *
     * @returns Description for key or object containing description, key, and payload. If it is not available
     * right away (must be requested), a `Promise` is returned.
     */
    getDescription(
      /**
       * `Field` control instance
       */
      oField: FieldBase,
      /**
       * Field help assigned to the {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.FilterField FilterField},
       * or {@link sap.ui.mdc.MultiValueField MultiValueField} control
       */
      oValueHelp: ValueHelp,
      /**
       * Key
       */
      vKey: any,
      /**
       * In parameters for the key (as a key is not necessarily unique.) (Only filled in conditions of old variants.)
       */
      oInParameters: object,
      /**
       * Out parameters for the key (as a key is not necessarily unique.) (Only filled in conditions of old variants.)
       */
      oOutParameters: object,
      /**
       * `BindingContext` of the checked field; Inside a table, the `ValueHelp` element might be connected to
       * a different row.
       */
      oBindingContext: Context,
      /**
       * Additional context information for this key
       */
      oConditionPayload: object,
      /**
       * Instance of the calling control if it is not the field itself
       */
      oControl: Control,
      /**
       * Type of the value
       */
      oType: Type
    ):
      | string
      | /* was: sap.ui.mdc.valuehelp.ValueHelpItem */ any
      | Promise<string | /* was: sap.ui.mdc.valuehelp.ValueHelpItem */ any>;
    /**
     * Determines the key, description, and payload of a user input.
     * By default, this method calls the {@link sap.ui.mdc.ValueHelp#getItemForValue getItemForValue} function
     * of the assigned {@link sap.ui.mdc.ValueHelp ValueHelp}.
     *
     * If this needs to be determined asynchronously, a `Promise` is returned.
     *
     * If the item cannot be determined, a corresponding {@link sap.ui.model.ParseException ParseException }
     * is thrown.
     *
     *
     * @returns Object containing description, key, and payload. If it is not available right now (must be requested),
     * a `Promise` is returned.
     */
    getItemForValue(
      /**
       * `Field` control instance
       */
      oField: FieldBase,
      /**
       * Field help assigned to the {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.FilterField FilterField},
       * or {@link sap.ui.mdc.MultiValueField MultiValueField} control
       */
      oValueHelp: ValueHelp,
      /**
       * Configuration
       */
      oConfig?: ItemForValueConfiguration
    ): /* was: sap.ui.mdc.valuehelp.ValueHelpItem */
      | any
      | Promise</* was: sap.ui.mdc.valuehelp.ValueHelpItem */ any>;
    /**
     * Checks if entered text matches text found from value help
     *
     * This function is called during a user's type-ahead into a {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.FilterField FilterField},
     * or {@link sap.ui.mdc.MultiValueField MultiValueField} control.
     *
     * By Default this method checks if the text starts with the user input. Depending of the `bCaseSensitive`
     * parameter this check is performed case sensitive.
     *
     *
     * @returns `true` if text matches user input
     */
    isInputMatchingText(
      /**
       * `Field` control instance
       */
      oField: FieldBase,
      /**
       * Currently typed text (Could be changed when the type-ahed result is returned asynchronously.)
       */
      sUserInput: string,
      /**
       * Text to be checked
       */
      sText: string,
      /**
       * If `true` this text is the description
       */
      bDescription: boolean,
      /**
       * If `true` the filtering was done case sensitive
       */
      bCaseSensitive: boolean
    ): boolean;
    /**
     * Enables applications to control condition updates based on pasted values.
     * By default, this method returns conditions with an `EQ` operator without using the description, as it
     * does not ensure the description is valid.
     *
     * **Note:** Returned values can either be strings which should be parsed by the ConditionType itself or
     * pre-created conditions.
     *
     * @since 1.124
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Array of `ConditionObject`/`string` values. If it is not available right away, a `Promise` is
     * returned.
     */
    parsePasteDataToConditions(
      /**
       * `Field` control instance
       */
      oField: FieldBase,
      /**
       * Pre-parsed paste data
       */
      aParsedData: Array<{
        value: string;

        additionalValue: string;
      }>,
      /**
       * Condition-related settings object
       */
      oSettings: {
        /**
         * Default operator for the current field
         */
        defaultOperator: Operator;
        /**
         * Configured type for a value
         */
        valueType: SimpleType;
        /**
         * Configured type for an additional value
         */
        additionalValueType: SimpleType;
      }
    ): Array<ConditionObject | string> | Promise<any[]>;
  }
  const FieldBaseDelegate: FieldBaseDelegate;
  export default FieldBaseDelegate;
}

declare module "sap/ui/mdc/field/MultiValueFieldDelegate" {
  import FieldBaseDelegate from "sap/ui/mdc/field/FieldBaseDelegate";

  import { ConditionObject } from "sap/ui/mdc/condition/Condition";

  import MultiValueField from "sap/ui/mdc/MultiValueField";

  /**
   * Delegate for {@link sap.ui.mdc.MultiValueField MultiValueField}.
   *
   * @since 1.93.0
   * @experimental (since 1.93)
   */
  interface MultiValueFieldDelegate extends FieldBaseDelegate {
    /**
     * Implements the model-specific logic to update items after conditions have been updated.
     *
     * Items can be removed, updated, or added. Use the binding information of the `MultiValueField` control
     * to update the data in the related model.
     *
     * @experimental
     */
    updateItems(
      /**
       * Payload for delegate
       */
      oPayload: object,
      /**
       * Current conditions of the `MultiValueField` control
       */
      aConditions: ConditionObject[],
      /**
       * Current `MultiValueField` control to determine binding information to update the values of the related
       * model
       */
      oMultiValueField: MultiValueField
    ): void;
  }
  const MultiValueFieldDelegate: MultiValueFieldDelegate;
  export default MultiValueFieldDelegate;
}

declare module "sap/ui/mdc/FilterBarDelegate" {
  import AggregationBaseDelegate from "sap/ui/mdc/AggregationBaseDelegate";

  import { default as FilterBar, PropertyInfo } from "sap/ui/mdc/FilterBar";

  import FilterField from "sap/ui/mdc/FilterField";

  import FilterBarValidationStatus from "sap/ui/mdc/enums/FilterBarValidationStatus";

  /**
   * Base Delegate for {@link sap.ui.mdc.FilterBar FilterBar}. Extend this object in your project to use all
   * functionalities of the {@link sap.ui.mdc.FilterBar FilterBar}. This class provides method calls, which
   * are called by the `FilterBar` at specific operations and allows to overwrite an internal behaviour..
   *
   * @since 1.61.0
   */
  interface FilterBarDelegate extends AggregationBaseDelegate {
    /**
     * This method is called during the appliance of the add condition change. The intention is to update the
     * {@link sap.ui.mdc.FilterBarBase#setPropertyInfo propertyInfo} property.
     *
     *
     * @returns `Promise` that is resolved once the propertyInfo property has been updated
     */
    addCondition(
      /**
       * Instance of the {@link sap.ui.mdc.FilterBar FilterBar} control
       */
      oFilterBar: FilterBar,
      /**
       * The name of a property
       */
      sPropertyName: string,
      /**
       * Instance of a property bag from the SAPUI5 flexibility change API
       */
      mPropertyBag: Object
    ): Promise<any>;
    /**
     * Creates an instance of a filter field control. **Note:** The `addItem` hook can be used during the processing
     * of an SAPUI5 flexibility change. Consequently the parameter `mPropertyBag` is only passed during preprocessing.
     * In runtime scenarios (such as opening a personalization dialog), this method might be called without
     * the parameter `mPropertyBag`.
     *
     *
     * @returns `Promise` that resolves with an instance of the implementing {@link sap.ui.mdc.FilterField Control}.
     * **Note:** This method always requires a return value once it has been called. If an item for a given
     * property `sPropertyName` has already been created, it must to either return the existing instance or
     * create a new instance.
     */
    addItem(
      /**
       * Instance of the {@link sap.ui.mdc.FilterBar FilterBar} control
       */
      oFilterBar: FilterBar,
      /**
       * The name of the property info object/JSON
       */
      sPropertyName: string,
      /**
       * Instance of property bag from SAPUI5 flexibility change API
       */
      mPropertyBag?: Object
    ): Promise<FilterField>;
    /**
     * This method is called when the Clear button is pressed.
     *
     *
     * @returns `Promise` that is resolved once the action has been completed
     */
    clearFilters(
      /**
       * Instance of the {@link sap.ui.mdc.FilterBar FilterBar} control
       */
      oFilterBar: FilterBar
    ): Promise<any>;
    /**
     * A validator to evaluate the `FilterBar` state.
     *
     *
     * @returns The inner `FilterBar` state
     */
    determineValidationState(
      /**
       * Instance of the {@link sap.ui.mdc.FilterBar FilterBar} control
       */
      oFilterBar: FilterBar,
      /**
       * Object describing the validation result. This object is only provided when called from the {@link sap.ui.mdc.FilterBar FilterBar}
       */
      mValidation?: {
        /**
         * Status of the validation {@link sap.ui.mdc.enums.FilterBarValidationStatus}
         */
        status?: string;
      }
    ): FilterBarValidationStatus;
    /**
     * Retrieves the relevant metadata for a given payload and returns the property info array.
     *
     * **Note:** The result of this function must be kept stable throughout the lifecycle of your application.
     * Any changes of the returned values might result in undesired effects.
     *
     *
     * @returns `Promise` that resolves into an array of property info objects
     */
    fetchProperties(
      /**
       * Instance of the {@link sap.ui.mdc.FilterBar FilterBar} control
       */
      oFilterBar: FilterBar
    ): Promise<PropertyInfo[]>;
    /**
     * propertyInfo This method is called during the appliance of the remove condition change. The intention
     * is to update the {@link sap.ui.mdc.FilterBarBase#setPropertyInfo propertyInfo} property.
     *
     *
     * @returns `Promise` that is resolved once the {@link sap.ui.mdc.FilterBarBase#setPropertyInfo propertyInfo }
     * property has been updated
     */
    removeCondition(
      /**
       * Instance of the {@link sap.ui.mdc.FilterBar FilterBar} control
       */
      oFilterBar: FilterBar,
      /**
       * The name of a property
       */
      sPropertyName: string,
      /**
       * Instance of a property bag from the SAPUI5 flexibility change API
       */
      mPropertyBag: Object
    ): Promise<any>;
    /**
     * Triggers any necessary follow-up steps that need to be taken after the removal of created items via `removeItem`.
     * The returned Boolean value inside the `Promise` can be used to prevent the default follow-up behavior
     * of the SAPUI5 flexibility handling.
     *
     * **Note:**The `removeItem` hook can be used during the processing of an SAPUI5 flexibility change. Consequently
     * the parameter `mPropertyBag` is only passed during preprocessing. In runtime scenarios (such as opening
     * a personalization dialog), this method can be called without the parameter `mPropertyBag`.
     *
     *
     * @returns `Promise` that resolved with `true`, `false` to allow/prevent default behavior of the change
     */
    removeItem(
      /**
       * Instance of the {@link sap.ui.mdc.FilterBar FilterBar} control
       */
      oFilterBar: FilterBar,
      /**
       * The filter field instance that was removed
       */
      oFilterField: FilterField,
      /**
       * Instance of property bag from SAPUI5 flexibility
       */
      mPropertyBag?: Object
    ): Promise<boolean>;
    /**
     * Visualizes the `FilterBar` validation state.
     */
    visualizeValidationState(
      /**
       * Instance of the {@link sap.ui.mdc.FilterBar FilterBar} control
       */
      oFilterBar: FilterBar,
      /**
       * Describes the validation result. This object is only provided when called from the {@link sap.ui.mdc.FilterBar FilterBar}
       */
      mValidation: {
        /**
         * Status of the validation as returned via {@link sap.ui.mdc.filterbar.FilterBarBase#checkValidationState checkValidationState}
         */
        status: FilterBarValidationStatus;
      }
    ): void;
  }
  const FilterBarDelegate: FilterBarDelegate;
  export default FilterBarDelegate;
}

declare module "sap/ui/mdc/LinkDelegate" {
  import BaseDelegate from "sap/ui/mdc/BaseDelegate";

  import { default as Link, LinkTypeWrapper } from "sap/ui/mdc/Link";

  import Event from "sap/ui/base/Event";

  import Control from "sap/ui/core/Control";

  import Context from "sap/ui/model/Context";

  import LinkItem from "sap/ui/mdc/link/LinkItem";

  /**
   * Base delegate for {@link sap.ui.mdc.Link}. Extend this object in your project to use all functionalities
   * of the {@link sap.ui.mdc.Link}.
   *
   * @since 1.74
   */
  interface LinkDelegate extends BaseDelegate {
    /**
     * Allows for interception before the actual navigation takes place.
     * By default, this method returns a `Promise` that resolves into `true`.
     *
     *
     * @returns Once resolved, this method returns a boolean value that determines whether the navigation
     * takes place
     */
    beforeNavigationCallback(
      /**
       * Instance of the `Link`
       */
      oLink: Link,
      /**
       * The `pressLink` event that is fired by the `Link` control
       */
      oEvent: Event
    ): Promise<boolean>;
    /**
     * Retrieves and returns the relevant `additionalContent` for the `Link` control as an array.
     * By default, this method returns a `Promise` that resolves into an empty array.
     *
     *
     * @returns Once resolved, an array of {@link sap.ui.core.Control} is returned
     */
    fetchAdditionalContent(
      /**
       * Instance of the `Link` control
       */
      oLink: Link
    ): Promise<Control[]>;
    /**
     * Retrieves and returns the relevant {@link sap.ui.mdc.link.LinkItem} for the `Link` control.
     * By default, this method returns a `Promise` that resolves into `null`.
     *
     *
     * @returns Once resolved, `null` or an array of {@link sap.ui.mdc.link.LinkItem} is returned If `null`
     * is returned, the link won't cache `LinkItem`.
     */
    fetchLinkItems(
      /**
       * Instance of the `Link`
       */
      oLink: Link,
      /**
       * Binding context of the `Link` control
       */
      oBindingContext: Context | null | undefined,
      /**
       * InfoLog of the `Link` control
       */
      oInfoLog: /* was: sap.ui.mdc.link.Log */ any
    ): Promise<null | LinkItem[]>;
    /**
     * Calculates and returns the type of link that is displayed.
     * By default, this method returns a `Promise` that resolves into a {@link sap.ui.mdc.link.LinkTypeWrapper LinkTypeWrapper}.
     * The {@link sap.ui.mdc.link.LinkTypeWrapper LinkTypeWrapper} contains an `initialType` and a `runtimeType`
     * {@link sap.ui.mdc.link.LinkType LinkType}. The `initialType` has a `type` property of type `Popover`
     * and a `directLink` property of type `undefined`. The `runtimeType` is of type `null`.
     *
     *
     * @returns Once resolved, a {@link sap.ui.mdc.link.LinkTypeWrapper} containing an initial {@link sap.ui.mdc.link.LinkType }
     * and an optional `Promise` are returned. The optional `Promise` also returns a {@link sap.ui.mdc.link.LinkType }
     * object. Once the optional `Promise` has been resolved, the returned {@link sap.ui.mdc.link.LinkType }
     * overwrites the `initialType`.
     */
    fetchLinkType(
      /**
       * Instance of the `Link`
       */
      oLink: Link
    ): Promise<LinkTypeWrapper>;
    /**
     * Enables the modification of the {@link sap.m.ResponsivePopover#title} property and setting which `Control`
     * should be added to the `ariaLabelledBy` association.
     *
     *
     * @returns Once resolved, an `Object` containing the title string and an `Control` which is referenced
     * as arialabelledBy.
     */
    fetchPopoverTitle(
      /**
       * Instance of the `Link`
       */
      oLink: Link,
      /**
       * Instance of the `Panel`
       */
      oPanel: /* was: sap.ui.mdc.link.Panel */ any
    ): any;
    /**
     * Allows to differenciate the created `Panel` of multiple `Link` instances for personalization reasons.
     * Please provide different IDs for each `Link` as otherwise the personalization will have problems keeping
     * the `Panel` controls apart.
     *
     *
     * @returns The ID of the `Panel` that is created by the `Link`
     */
    getPanelId(
      /**
       * Instance of the `Link`
       */
      oLink: Link
    ): string;
    /**
     * Enables the modification of the {@link sap.ui.mdc.link.LinkItem} instances before the popover opens.
     * This enables additional parameters to be added to the link.
     * By default, this method returns a `Promise` that resolves into the passed `aLinkItems` array.
     *
     *
     * @returns Once resolved, an array of link items is returned
     */
    modifyLinkItems(
      /**
       * Instance of the `Link`
       */
      oLink: Link,
      /**
       * Binding context of the `Link` control
       */
      oBindingContext: Context | null | undefined,
      /**
       * Array of {@link sap.ui.mdc.link.LinkItem} instances of the link that can be modified
       */
      aLinkItems: LinkItem[]
    ): Promise<LinkItem[]>;
  }
  const LinkDelegate: LinkDelegate;
  export default LinkDelegate;
}

declare module "sap/ui/mdc/odata/TypeMap" {
  import DefaultTypeMap from "sap/ui/mdc/DefaultTypeMap";

  /**
   * OData-specific {@link module:sap/ui/mdc/util/TypeMap TypeMap} configuration.
   *
   * **Note:** This `TypeMap` implementation contains the following types:
   *
   *
   * 	 - {@link sap.ui.model.type.Boolean} (alias `Boolean`)
   * 	 - {@link sap.ui.model.type.Currency} (alias `Currency`)
   * 	 - {@link sap.ui.model.type.Date} (alias `Date`)
   * 	 - {@link sap.ui.model.type.DateTime} (alias `DateTime`)
   * 	 - {@link sap.ui.model.type.Float} (alias `Float`)
   * 	 - {@link sap.ui.model.type.Integer} (alias `Integer`)
   * 	 - {@link sap.ui.model.type.String} (alias `String`)
   * 	 - {@link sap.ui.model.type.Time} (alias `Time`)
   * 	 - {@link sap.ui.model.type.Unit} (alias `Unit`)
   * 	 - {@link sap.ui.model.odata.type.Stream} (alias `Edm.Binary`)
   * 	 - {@link sap.ui.model.odata.type.Boolean} (alias `Edm.Boolean`)
   * 	 - {@link sap.ui.model.odata.type.Byte} (alias `Edm.Byte`)
   * 	 - {@link sap.ui.model.odata.type.Date} (alias `Edm.Date`)
   * 	 - {@link sap.ui.model.odata.type.DateTime} (alias `Edm.DateTime`)
   * 	 - {@link sap.ui.model.odata.type.DateTimeOffset} (alias `Edm.DateTimeOffset`)
   * 	 - {@link sap.ui.model.odata.type.Decimal} (alias `Edm.Decimal`)
   * 	 - {@link sap.ui.model.odata.type.Double} (alias `Edm.Double`)
   * 	 - {@link sap.ui.model.odata.type.Single} (alias `Edm.Float`)
   * 	 - {@link sap.ui.model.odata.type.Guid} (alias `Edm.Guid`)
   * 	 - {@link sap.ui.model.odata.type.Int16} (alias `Edm.Int16`)
   * 	 - {@link sap.ui.model.odata.type.Int32} (alias `Edm.Int32`)
   * 	 - {@link sap.ui.model.odata.type.Int64} (alias `Edm.Int64`)
   * 	 - {@link sap.ui.model.odata.type.SByte} (alias `Edm.SByte`)
   * 	 - {@link sap.ui.model.odata.type.Single} (alias `Edm.Single`)
   * 	 - {@link sap.ui.model.odata.type.Stream} (alias `Edm.Stream`)
   * 	 - {@link sap.ui.model.odata.type.String} (alias `Edm.String`)
   * 	 - {@link sap.ui.model.odata.type.Time} (alias `Edm.Time`)
   * 	 - {@link sap.ui.model.odata.type.TimeOfDay} (alias `Edm.TimeOfDay`)
   *
   * @since 1.114.0
   */
  interface TypeMap extends DefaultTypeMap {}
  const TypeMap: TypeMap;
  export default TypeMap;
}

declare module "sap/ui/mdc/odata/v4/ChartDelegate" {
  import ChartDelegate1 from "sap/ui/mdc/ChartDelegate";

  /**
   * Delegate class for {@link sap.ui.mdc.Chart Chart} and ODataV4.
   *  This class provides method calls, which are called by the `Chart` at specific operations and allows
   * to overwrite an internal behaviour.
   *
   * @since 1.88
   */
  interface ChartDelegate extends ChartDelegate1 {}
  const ChartDelegate: ChartDelegate;
  export default ChartDelegate;
}

declare module "sap/ui/mdc/odata/v4/TableDelegate" {
  import TableDelegate1 from "sap/ui/mdc/TableDelegate";

  import { default as Table, TablePropertyInfo } from "sap/ui/mdc/Table";

  import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";

  import ListBinding from "sap/ui/model/ListBinding";

  /**
   * Base delegate for {@link sap.ui.mdc.Table} and `ODataV4`. Extend this object in your project to use all
   * functionalities of the table. For more information, please see {@link module:sap/ui/mdc/TableDelegate}.
   *
   * **Note:** This base delegate supports the `p13nMode` `Aggregate` only if the table type is {@link sap.ui.mdc.table.GridTableType GridTable},
   * and the `p13nMode` `Group` is not supported if the table type is {@link sap.ui.mdc.table.TreeTableType TreeTable}.
   * This cannot be changed in your delegate implementation.
   *  If the table type is {@link sap.ui.mdc.table.GridTableType GridTable}, and `p13nMode` `Group` or `p13nMode`
   * `Aggregate` is enabled, only groupable or aggregatable properties are loaded from the back end. Also,
   * the path of a property must not contain a `NavigationProperty`.
   *
   * @since 1.85
   */
  interface TableDelegate extends TableDelegate1 {
    /**
     * Collapses all rows.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    collapseAllRows(
      /**
       * Instance of the table
       */
      oTable: Table
    ): void;
    /**
     * Expands all rows.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    expandAllRows(
      /**
       * Instance of the table
       */
      oTable: Table
    ): void;
    /**
     * Retrieves information about the relevant properties.
     *
     * By default, this method returns a `Promise` that resolves with an empty array.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns A `Promise` that resolves with the property information
     */
    fetchProperties(
      /**
       * Instance of the table
       */
      oTable: Table
    ): Promise<TablePropertyInfo[]>;
    /**
     * Returns the keys of properties that should always be included in the result of the collection requested
     * from the back end. This information is applied when updating the table's binding.
     *
     * By default, this method returns an empty array.
     *
     * **Note:** If properties are provided in the table's {@link sap.ui.mdc.Table propertyInfo} property, the
     * properties whose keys are returned by this method must be included, otherwise they may not be in included
     * the result.
     *  The path of a property must not be empty.
     *  If a property is complex, the properties it references are taken into account.
     *  If `autoExpandSelect` of the {@link sap.ui.model.odata.v4.ODataModel} is not enabled, this method must
     * return an empty array. If the table type is {@link sap.ui.mdc.table.GridTableType GridTable} and `p13nMode`
     * `Group` or `p13nMode` `Aggregate` is enabled, referenced properties, for example, properties that are
     * referenced via `text` or `unit`, are also included in the result. Please also see the restrictions in
     * the description of the {@link module:sap/ui/mdc/odata/v4/TableDelegate TableDelegate}.
     *  For more information about properties, see {@link sap.ui.mdc.odata.v4.TablePropertyInfo PropertyInfo}.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Property keys
     */
    getInResultPropertyKeys(
      /**
       * of the table
       */
      Instance: Table
    ): string[];
    /**
     * Updates the binding of the table with the binding info object returned from {@link module:sap/ui/mdc/TableDelegate.updateBindingInfo updateBindingInfo}.
     * If an update is not possible, it rebinds the table.
     *
     * Compares the current and previous state of the table to detect whether rebinding is necessary. The diffing
     * is done for the sorters, filters, aggregation, parameters, and the path of the binding. Other {@link sap.ui.base.ManagedObject.AggregationBindingInfo binding info }
     * keys, such as `events` or `model`, must be provided in `updateBindingInfo`, and those keys must not be
     * changed conditionally.
     *
     * **Note:** To remove a binding info parameter, the value must be set to `undefined` in `updateBindingInfo`.
     * For more information, see {@link sap.ui.model.odata.v4.ODataListBinding#changeParameters}.
     * See:
     * 	rebind
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    updateBinding(
      /**
       * Instance of the table
       */
      oTable: Table,
      /**
       * The binding info object to be used to bind the table
       */
      oBindingInfo: AggregationBindingInfo,
      /**
       * The binding instance of the table that can be used to update the binding and avoid a rebind
       */
      oBinding?: ListBinding,
      /**
       * Additional settings
       */
      mSettings?: {
        /**
         * Indicates that the binding has to be refreshed even if the binding info has not changed
         */
        forceRefresh?: boolean;
      }
    ): void;
  }
  const TableDelegate: TableDelegate;
  export default TableDelegate;
}

declare module "sap/ui/mdc/odata/v4/TypeMap" {
  import TypeMap1 from "sap/ui/mdc/odata/TypeMap";

  /**
   * ODataV4-specific {@link module:sap/ui/mdc/util/TypeMap TypeMap} configuration.
   *
   * **Note:** This `TypeMap` implementation contains the following types including ODataV4-specific configuration:
   *
   *
   * 	 - {@link sap.ui.model.type.Boolean} (alias `Boolean`)
   * 	 - {@link sap.ui.model.type.Currency} (alias `Currency`)
   * 	 - {@link sap.ui.model.type.Date} (alias `Date`)
   * 	 - {@link sap.ui.model.type.DateTime} (alias `DateTime`)
   * 	 - {@link sap.ui.model.type.Float} (alias `Float`)
   * 	 - {@link sap.ui.model.type.Integer} (alias `Integer`)
   * 	 - {@link sap.ui.model.type.String} (alias `String`)
   * 	 - {@link sap.ui.model.type.Time} (alias `Time`)
   * 	 - {@link sap.ui.model.type.Unit} (alias `Unit`)
   * 	 - {@link sap.ui.model.odata.type.Stream} (alias `Edm.Binary`)
   * 	 - {@link sap.ui.model.odata.type.Boolean} (alias `Edm.Boolean`)
   * 	 - {@link sap.ui.model.odata.type.Byte} (alias `Edm.Byte`)
   * 	 - {@link sap.ui.model.odata.type.Date} (alias `Edm.Date`)
   * 	 - {@link sap.ui.model.odata.type.DateTime} (alias `Edm.DateTime`)
   * 	 - {@link sap.ui.model.odata.type.DateTimeOffset} (alias `Edm.DateTimeOffset`)
   * 	 - {@link sap.ui.model.odata.type.Decimal} (alias `Edm.Decimal`)
   * 	 - {@link sap.ui.model.odata.type.Double} (alias `Edm.Double`)
   * 	 - {@link sap.ui.model.odata.type.Single} (alias `Edm.Float`)
   * 	 - {@link sap.ui.model.odata.type.Guid} (alias `Edm.Guid`)
   * 	 - {@link sap.ui.model.odata.type.Int16} (alias `Edm.Int16`)
   * 	 - {@link sap.ui.model.odata.type.Int32} (alias `Edm.Int32`)
   * 	 - {@link sap.ui.model.odata.type.Int64} (alias `Edm.Int64`)
   * 	 - {@link sap.ui.model.odata.type.SByte} (alias `Edm.SByte`)
   * 	 - {@link sap.ui.model.odata.type.Single} (alias `Edm.Single`)
   * 	 - {@link sap.ui.model.odata.type.Stream} (alias `Edm.Stream`)
   * 	 - {@link sap.ui.model.odata.type.String} (alias `Edm.String`)
   * 	 - {@link sap.ui.model.odata.type.Time} (alias `Edm.Time`)
   * 	 - {@link sap.ui.model.odata.type.TimeOfDay} (alias `Edm.TimeOfDay`)
   *
   * @since 1.114.0
   */
  interface TypeMap extends TypeMap1 {}
  const TypeMap: TypeMap;
  export default TypeMap;
}

declare module "sap/ui/mdc/TableDelegate" {
  import AggregationBaseDelegate from "sap/ui/mdc/AggregationBaseDelegate";

  import { default as Table, PropertyInfo } from "sap/ui/mdc/Table";

  import Column from "sap/ui/mdc/table/Column";

  import Context from "sap/ui/model/Context";

  import FilterField from "sap/ui/mdc/FilterField";

  import Filter from "sap/ui/model/Filter";

  import Sorter from "sap/ui/model/Sorter";

  import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";

  import ListBinding from "sap/ui/model/ListBinding";

  /**
   * Base delegate for {@link sap.ui.mdc.Table}. Extend this object in your project to use all functionalities
   * of the table. This base delegate already meets some requirements of certain features. Others need to
   * be met by your delegate implementation.
   *
   * The following methods need to be added or overridden in your delegate. Please also see the documentation
   * of the methods to learn about their default implementation and what you need to implement.
   * 	 - **Basic prerequisites**
   * 	 - {@link module:sap/ui/mdc/TableDelegate.fetchProperties fetchProperties}
   * 	 - {@link module:sap/ui/mdc/TableDelegate.updateBindingInfo updateBindingInfo}
   * 	 - Column personalization (related to `p13nMode` `Column`)
   * 	 - {@link module:sap/ui/mdc/TableDelegate.addItem addItem}
   * 	 - Filter personalization (related to `p13nMode` `Filter`)
   * 	 - {@link module:sap/ui/mdc/TableDelegate.getFilterDelegate getFilterDelegate}
   *
   * **Note:** This base delegate does not support the `p13nMode` `Aggregate`, and the `p13nMode` `Group`
   * is only supported if the table type is {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}.
   * This cannot be changed in your delegate implementation.
   *
   * @since 1.60
   */
  interface TableDelegate extends AggregationBaseDelegate {
    /**
     * Central hook that is called to add columns to the table when the state is applied, for example, when
     * SAPUI5 flexibility changes are applied. During preprocessing, this method is called without the `mPropertyBag`
     * parameter, and `oTable` is an XML node.
     *
     * By default, this method does not create a column and just returns a `Promise` that resolves without a
     * value.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns A `Promise` that resolves with a column
     */
    addItem(
      /**
       * Instance of the table or an XML node representing the table during preprocessing
       */
      oTable: Table | Element,
      /**
       * The property name
       */
      sPropertyName: string,
      /**
       * Instance of a property bag from the SAPUI5 flexibility API
       */
      mPropertyBag?: Object
    ): Promise<Column>;
    /**
     * Collapses all rows.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    collapseAllRows(
      /**
       * Instance of the table
       */
      oTable: Table
    ): void;
    /**
     * Expands all rows.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    expandAllRows(
      /**
       * Instance of the table
       */
      oTable: Table
    ): void;
    /**
     * Returns the feature set for exporting data in the table.
     *
     * By default, this method returns basic `sap.ui.export.FileType.XLSX` capabilities.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns A `Promise` that resolves with an object as specified in {@link sap.ui.export.ExportHandler}
     */
    fetchExportCapabilities(
      /**
       * Instance of the table
       */
      oTable: Table
    ): Promise<object>;
    /**
     * Retrieves information about the relevant properties.
     *
     * By default, this method returns a `Promise` that resolves with an empty array.
     *
     * **Note:** The result of this function must be kept stable throughout the lifecycle of your application.
     * Any changes of the returned values might result in undesired effects.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns A `Promise` that resolves with the property information
     */
    fetchProperties(
      /**
       * Instance of the table
       */
      oTable: Table
    ): Promise<PropertyInfo[]>;
    /**
     * Formats the title text of a group header row of the table.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns The group header title
     */
    formatGroupHeader(
      /**
       * Instance of the table
       */
      oTable: Table,
      /**
       * Binding context
       */
      oContext: Context,
      /**
       * Name of the grouped property
       */
      sProperty: string
    ): string;
    /**
     * Returns the filter delegate of the table that provides basic filter functionality, such as adding filter
     * fields.
     *
     * **Note:** The functionality provided in this delegate acts as a subset of a `FilterBarDelegate` to enable
     * the table for inbuilt filtering.
     *
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Object for the tables filter personalization
     */
    getFilterDelegate(): {
      addItem: (p1: Table, p2: string) => Promise<FilterField>;
    };
    /**
     * Returns filters to be applied when updating the table's binding based on the filter conditions of the
     * table itself and its associated {@link sap.ui.mdc.IFilterSource IFilterSource}.
     *
     * By default, filters for the associated filter source are only generated for a `sap.ui.mdc.FilterBar`.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Array of filters
     */
    getFilters(
      /**
       * Instance of the table
       */
      oTable: Table
    ): Filter[];
    /**
     * Returns a sorter for the grouping functionality to be applied when updating the table's binding based
     * on the group conditions of the table.
     *
     * **Note:** No sorter must be returned if the table type, for example, {@link sap.ui.mdc.table.GridTableType GridTable},
     * cannot be grouped this way.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns The sorter or `undefined` if there is no group condition or if it cannot be applied
     */
    getGroupSorter(
      /**
       * Instance of the table
       */
      oTable: Table
    ): Sorter | undefined;
    /**
     * Returns sorters to be applied when updating the table's binding based on the sort conditions of the table.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Array of sorters
     */
    getSorters(
      /**
       * Instance of the table
       */
      oTable: Table
    ): Sorter[];
    /**
     * Rebinds the table with the binding info object returned from {@link module:sap/ui/mdc/TableDelegate.updateBindingInfo updateBindingInfo}.
     * See:
     * 	updateBinding
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    rebind(
      /**
       * Instance of the table
       */
      oTable: Table,
      /**
       * The binding info object used to bind the table
       */
      oBindingInfo: AggregationBindingInfo
    ): void;
    /**
     * Updates the row binding of the table.
     *
     * The default implementation rebinds the table, but model-specific subclasses must call dedicated binding
     * methods to update the binding instead of using {@link #rebind}.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    updateBinding(
      /**
       * Instance of the table
       */
      oTable: Table,
      /**
       * The binding info object to be used to bind the table to the model
       */
      oBindingInfo: AggregationBindingInfo,
      /**
       * The binding instance of the table
       */
      oBinding?: ListBinding,
      /**
       * Additional settings
       */
      mSettings?: {
        /**
         * Indicates that the binding has to be refreshed even if `oBindingInfo` has not been changed
         */
        forceRefresh?: boolean;
      }
    ): void;
    /**
     * Updates the binding info object that is used to bind the table in {@link module:sap/ui/mdc/TableDelegate.updateBinding updateBinding}.
     *
     * By default, filters and sorters are added to the binding info. Please see {@link module:sap/ui/mdc/TableDelegate.getFilters getFilters},
     * {@link module:sap/ui/mdc/TableDelegate.getSorters getSorters}, and {@link module:sap/ui/mdc/TableDelegate.getGroupSorter getGroupSorter }
     * for more details.
     *
     * **Note:** Any other required information, such as the path, must be additionally provided by your delegate
     * implementation.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    updateBindingInfo(
      /**
       * Instance of the table
       */
      oTable: Table,
      /**
       * The binding info
       */
      oBindingInfo: AggregationBindingInfo
    ): void;
  }
  const TableDelegate: TableDelegate;
  export default TableDelegate;
}

declare module "sap/ui/mdc/util/TypeMap" {
  import SimpleType from "sap/ui/model/SimpleType";

  import BaseType from "sap/ui/mdc/enums/BaseType";

  /**
   * Configuration class for type handling in delegates. Allows mapping of model types to {@link sap.ui.mdc.enums.BaseType }
   * and enables model-specific type configuration.
   *
   * @since 1.114.0
   */
  interface TypeMap {
    /**
     * Exports the current data of the `TypeMap`.
     *
     *
     * @returns `Array` created from this `TypeMap`'s internal `Map`
     */
    export(): any[];
    /**
     * Converts a value into a `string` using a designated type.
     *
     * The value is not checked for validity. The used values must be compatible with the used basic type.
     *
     * **Note:** Number types are not converted, the number conversion is done by the SAPUI5 flexibility handling.
     *
     *
     * @returns Converted value
     */
    externalizeValue(
      /**
       * Typed value
       */
      vValue: object,
      /**
       * Data type considered for conversion
       */
      vType: string | SimpleType,
      /**
       * Format options for the data type
       */
      oFormatOptions?: object,
      /**
       * Constraints for the data type
       */
      oConstraints?: object
    ): string;
    /**
     * Prevents further modification of the data of a `TypeMap`.
     */
    freeze(): void;
    /**
     * To determine which internal controls to render, either the {@link sap.ui.mdc.Field Field}, the {@link sap.ui.mdc.MultiValueField MultiValueField},
     * or the {@link sap.ui.mdc.FilterField FilterField} control needs information about whether the type represents
     * a `date`, a `number`, or another {@link sap.ui.mdc.enums.BaseType BaseType}.
     *
     * As default, `string` is returned.
     *
     *
     * @returns Corresponding {@link sap.ui.mdc.enums.BaseType BaseType}, for example, `Date`, `DateTime` or
     * `Time`
     */
    getBaseType(
      /**
       * Given type string or {@link sap.ui.model.SimpleType}
       */
      sType: string,
      /**
       * Used format options
       */
      oFormatOptions: object,
      /**
       * Used constraints
       */
      oConstraints: object
    ): BaseType | keyof typeof BaseType;
    /**
     * Convenience method to retrieve the `BaseType` for a given {@link sap.ui.model.SimpleType SimpleType}.
     *
     *
     * @returns Corresponding {@link sap.ui.mdc.enums.BaseType BaseType}, for example, `Date`, `DateTime` or
     * `Time`
     */
    getBaseTypeForType(
      /**
       * Given type string or {@link sap.ui.model.SimpleType}
       */
      oType: SimpleType
    ): BaseType | keyof typeof BaseType;
    /**
     * Gets a data type class based on a given name.
     *
     * **Note:** The module of the data type needs to be loaded before.
     *
     *
     * @returns Corresponding data type class
     */
    getDataTypeClass(
      /**
       * Class path as `string` where each name is separated by '.'
       */
      sDataType: string
    ): (p1: SimpleType) => void;
    /**
     * Gets the data type class name for a given name or alias.
     *
     *
     * @returns Data type name
     */
    getDataTypeClassName(
      /**
       * Given model-specific type
       */
      sType: string
    ): string;
    /**
     * Gets a data type instance based on a given `ObjectPath`, `FormatOptions`, and `Constraints`.
     *
     *
     * @returns Instance of the resolved data type
     */
    getDataTypeInstance(
      /**
       * Class path as `string` where each name is separated by '.'
       */
      sDataType: string,
      /**
       * Format options for the data type
       */
      oFormatOptions?: object,
      /**
       * Constraints for the data type
       */
      oConstraints?: object,
      /**
       * Additional options for overrides
       */
      oOptions?: object
    ): SimpleType;
    /**
     * Gets a type mapping configuration `object` for a given type `string` or {@link sap.ui.model.SimpleType SimpleType}.
     *
     *
     * @returns Type config `object`
     */
    getTypeConfig(
      /**
       * Given data type as `string` or type
       */
      vType: string | SimpleType,
      /**
       * Format options for the given data type
       */
      oFormatOptions?: object,
      /**
       * Constraints for the given data type
       */
      oConstraints?: object
    ): /* was: sap.ui.mdc.TypeConfig */ any;
    /**
     * Imports the data of a `TypeMap` into another `TypeMap`.
     */
    import(
      /**
       * `TypeMap` that gets imported
       */
      oTypeMap: TypeMap
    ): void;
    /**
     * Converts a `string` into a type-based value.
     *
     * The value is not checked for validity. The used values must be compatible with the used basic type.
     *
     * **Note:** Number types are not converted. The number conversion is done by the SAPUI5 flexibility handling.
     *
     *
     * @returns Converted value
     */
    internalizeValue(
      /**
       * Externalized value
       */
      vValue: string,
      /**
       * Data type considered for conversion
       */
      vType: string | SimpleType,
      /**
       * Format options for the data type
       */
      oFormatOptions?: object,
      /**
       * Constraints for the data type
       */
      oConstraints?: object
    ): object;
    /**
     * Sets a {@link sap.ui.mdc.enums.BaseType BaseType} and an optional model- or scenario-specific configuration
     * method for a given {@link sap.ui.model.SimpleType} `ObjectPath` `string`.
     *
     * As default, `string` is returned.
     */
    set(
      /**
       * `Objectpath` `string` for {@link sap.ui.model.SimpleType}
       */
      sType: string,
      /**
       * {@link sap.ui.mdc.enums.BaseType BaseType} fitting the given `sType` parameter or method returning a
       * {@link sap.ui.mdc.enums.BaseType BaseType} based on type configuration
       */
      vBaseType: (BaseType | keyof typeof BaseType) | Function,
      /**
       * Optional customizing method for format options and constraints. See {@link module:sap/ui/mdc/DefaultTypeMap DefaultTypeMap }
       * for examples.
       */
      fnOptions?: Function
    ): void;
    /**
     * Allows alternative identifiers for types, such as a Boolean for {@link sap.ui.model.type.Boolean}.
     */
    setAlias(
      /**
       * `Objectpath` `string` for {@link sap.ui.model.SimpleType}
       */
      sType: string,
      /**
       * Alternative identifier for the `sType` parameter
       */
      sAlias: string
    ): void;
  }
  const TypeMap: TypeMap;
  export default TypeMap;
}

declare module "sap/ui/mdc/ValueHelpDelegate" {
  import BaseDelegate from "sap/ui/mdc/BaseDelegate";

  import {
    default as ValueHelp,
    ItemForValueConfiguration,
  } from "sap/ui/mdc/ValueHelp";

  import ListBinding from "sap/ui/model/ListBinding";

  import FilterableListContent from "sap/ui/mdc/valuehelp/base/FilterableListContent";

  import Context from "sap/ui/model/Context";

  import { ConditionObject } from "sap/ui/mdc/condition/Condition";

  import { util } from "sap/ui/mdc/library";

  import Filter from "sap/ui/model/Filter";

  import ListContent from "sap/ui/mdc/valuehelp/base/ListContent";

  import Content from "sap/ui/mdc/valuehelp/base/Content";

  import ValueHelpPropagationReason from "sap/ui/mdc/enums/ValueHelpPropagationReason";

  import Container from "sap/ui/mdc/valuehelp/base/Container";

  import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * Delegate for {@link sap.ui.mdc.ValueHelp}.
   *
   * @since 1.95.0
   */
  interface ValueHelpDelegate extends BaseDelegate {
    /**
     * Checks if the `ListBinding` is waiting for an update. As long as the context has not been set for `ListBinding`,
     * the `ValueHelp` needs to wait.
     * By default, this method returns `false` if no {@link sap.ui.model.ListBinding ListBinding} is available
     * or the given `ListBinding` is suspended. Otherwise, it returns a `Promise` that resolves into a `boolean`
     * value indicating that at least one context is available after retrieval.
     *
     *
     * @returns `Promise` that is resolved once `ListBinding` has been updated
     */
    checkListBindingPending(
      /**
       * The `ValueHelp` control instance
       */
      oValueHelp: ValueHelp,
      /**
       * `ListBinding` to check
       */
      oListBinding: ListBinding,
      /**
       * Number of requested items
       */
      iRequestedItems: int
    ): boolean | Promise<boolean>;
    /**
     * Provides the possibility to convey custom data in conditions. This enables an application to enhance
     * conditions with data relevant for combined key or out parameter scenarios.
     * By default, this method returns `undefined`.
     *
     * @since 1.101.0
     *
     * @returns Optionally returns a serializable object to be stored in the condition payload field
     */
    createConditionPayload(
      /**
       * The `ValueHelp` control instance
       */
      oValueHelp: ValueHelp,
      /**
       * `ValueHelp` content instance
       */
      oContent: FilterableListContent,
      /**
       * Key and description pair for the condition that is created
       */
      aValues: any[],
      /**
       * Optional additional context
       */
      oContext?: Context
    ): undefined | object;
    /**
     * Executes a filter in a `ListBinding`.
     * By default, this method returns a `Promise` that resolves into the given `ListBinding`.
     *
     *
     * @returns `Promise` that is resolved if search is executed
     */
    executeFilter(
      /**
       * The `ValueHelp` control instance
       */
      oValueHelp: ValueHelp,
      /**
       * List binding
       */
      oListBinding: ListBinding,
      /**
       * Number of requested items
       */
      iRequestedItems: int
    ): Promise<ListBinding>;
    /**
     * Finds all conditions that are represented by the given context for 'Select from list' scenarios.
     * By default, this method only takes {@link sap.ui.mdc.condition.ConditionObject Condition} keys into consideration.
     * This can be extended with payload-dependent filters.
     *
     * **Note:** This method replaces the former `isFilterableListItemSelected`.
     *
     * @since 1.118.0
     *
     * @returns Conditions represented by the given context
     */
    findConditionsForContext(
      /**
       * The `ValueHelp` control instance
       */
      oValueHelp: ValueHelp,
      /**
       * `ValueHelp` content instance
       */
      oContent: FilterableListContent,
      /**
       * Entry of a given list
       */
      oContext: Context,
      /**
       * current conditions
       */
      aConditions: ConditionObject[]
    ): ConditionObject[];
    /**
     * Provides an object of conditions per binding path.
     * By default, this method returns an empty `object`.
     *
     * This method provides the initial set of conditions applied every time value help content is shown for
     * the first time after opening its container. It is also relevant for `getItemForValue` scenarios that
     * allow you to find a specific value help item (indicated by the availability of the `oConfig` argument).
     *
     * @since 1.106.0
     *
     * @returns Returns a map-like object containing conditions suitable for `Filter` creation
     */
    getFilterConditions(
      /**
       * The `ValueHelp` control instance
       */
      oValueHelp: ValueHelp,
      /**
       * `ValueHelp` content instance
       */
      oContent: FilterableListContent,
      /**
       * Configuration
       */
      oConfig?: ItemForValueConfiguration
    ): Promise<util.FilterConditionMap> | util.FilterConditionMap;
    /**
     * Returns filters that are used when updating the binding of the `ValueHelp`.
     * By default, this method returns a set of {@link sap.ui.model.Filter Filters} originating from an available
     * {@link sap.ui.mdc.FilterBar FilterBar}, the delegate's own {@link #getFilterConditions}, and/or the {@link sap.ui.mdc.valuehelp.base.FilterableListContent#getFilterFields filterFields }
     * configuration of the given {@link sap.ui.mdc.valuehelp.base.FilterableListContent FilterableListContent}.
     *
     * @since 1.121
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Array of filters
     */
    getFilters(
      /**
       * The `ValueHelp` control instance
       */
      oValueHelp: ValueHelp,
      /**
       * `ValueHelp` content requesting conditions configuration
       */
      oContent: FilterableListContent
    ): Filter[];
    /**
     * Returns the content that is used for the autocomplete feature and for user input, if the entered text
     * leads to more than one filter result.
     *
     * By default, this method searches and returns an entry from a set of relevant contexts of the given {@link sap.ui.mdc.valuehelp.base.ListContent ListContent}.
     *
     * To determine which columns are relevant for the search, the currently active displayMode {@link sap.ui.mdc.enums.FieldDisplay Display }
     * of the connected control will be used. While a 'Value' configuration will lead to a 'key'-only search,
     * 'DescriptionValue' leads to searching 'description' first and 'key' afterwards. Other modes work accordingly.
     *
     * For each relevant column all items are searched for an exact match first and again with a startsWith
     * filter afterwards, if necessary.
     *
     * If the caseSensitive property is disabled, the letter case of the user's input and the corresponding
     * column value are completely ignored. Whichever entry comes first, wins.
     *
     * {@link sap.ui.mdc.valuehelp.base.ListContent ListContent}
     *
     * @since 1.120.0
     *
     * @returns Promise resolving in the `Context` that's relevant'
     */
    getFirstMatch(
      /**
       * The `ValueHelp` control instance
       */
      oValueHelp: ValueHelp,
      /**
       * `ValueHelp` content instance
       */
      oContent: ListContent,
      /**
       * Configuration
       */
      oConfig: ItemForValueConfiguration
    ): Context;
    /**
     * Provides type information for list content filtering.
     * By default, this method returns an object of types per binding path, extracted from a binding template
     * of the given {@link sap.ui.mdc.valuehelp.base.FilterableListContent FilterableListContent}.
     *
     * @since 1.101.0
     *
     * @returns Returns a type map for property paths
     */
    getTypesForConditions(
      /**
       * The `ValueHelp` control instance
       */
      oValueHelp: ValueHelp,
      /**
       * `ValueHelp` content instance
       */
      oContent: FilterableListContent,
      /**
       * Set of conditions to create filters for
       */
      oConditions: object
    ): util.FilterTypeConfig;
    /**
     * Provides the possibility to customize selections in 'Select from list' scenarios.
     * By default, this method only takes {@link sap.ui.mdc.condition.ConditionObject Condition} keys into consideration.
     * This might be extended with payload-dependent filters.
     *
     * @since 1.101.0
     * @deprecated - (since 1.118.0) - replaced by {@link module:sap/ui/mdc/ValueHelpDelegate.findConditionsForContext findConditionsForContext}
     *
     * @returns `true` if item is selected
     */
    isFilterableListItemSelected(
      /**
       * The `ValueHelp` control instance
       */
      oValueHelp: ValueHelp,
      /**
       * `ValueHelp` content instance
       */
      oContent: FilterableListContent,
      /**
       * Entry of a given list
       */
      oItem: {
        /**
         * Get the binding context of this object for the given model name.
         */
        getBindingContext: Function;
      },
      /**
       * current conditions
       */
      aConditions: ConditionObject[]
    ): boolean;
    /**
     * Determines is the filtering used for type-ahead is case sensitive.
     * By default the value of the {@link sap.ui.mdc.base.ListContent#getCaseSensitive CaseSensitive} property
     * of the content instance is returned. If `$search` or other methods are used this might depend on the
     * backend logic.
     *
     * @since 1.121.0
     *
     * @returns If `true` the filtering is case sensitive
     */
    isFilteringCaseSensitive(
      /**
       * The `ValueHelp` control instance
       */
      oValueHelp: ValueHelp,
      /**
       * `ValueHelp` content instance
       */
      oContent: ListContent
    ): boolean;
    /**
     * Checks if a `ListBinding` supports `$search`.
     * By default, this method returns `false`.
     *
     *
     * @returns `true` if `$search` is supported
     */
    isSearchSupported(
      /**
       * The `ValueHelp` control instance
       */
      oValueHelp: ValueHelp,
      /**
       * Content element
       */
      oContent: Content,
      /**
       * `ListBinding`
       */
      oListBinding: ListBinding
    ): boolean;
    /**
     * Provides the possibility to customize selection events in 'Select from list' scenarios. This enables
     * an application to reuse conditions in collective search scenarios, instead of always creating new ones.
     * By default, this method returns given changes without modification.
     *
     * @since 1.101.0
     *
     * @returns oRestult Selection event configuration object
     */
    modifySelectionBehaviour(
      /**
       * The `ValueHelp` control instance
       */
      oValueHelp: ValueHelp,
      /**
       * `ValueHelp` content instance
       */
      oContent: FilterableListContent,
      /**
       * Selection event configuration
       */
      oChange: {
        /**
         * Type of the selection change (add, remove)
         */
        type: /* was: sap.ui.mdc.enums.ValueHelpSelectionType */ any;
        /**
         * Array of changed conditions with structure {@link sap.ui.mdc.condition.ConditionObject ConditionObject}
         */
        conditions: object[];
      }
    ): object;
    /**
     * Callback invoked every time a {@link sap.ui.mdc.ValueHelp ValueHelp} fires a `select` event or the value
     * of the corresponding field changes. This callback can be used to update external fields.
     * By default, this method is empty.
     *
     * @since 1.101.0
     */
    onConditionPropagation(
      /**
       * The `ValueHelp` control instance
       */
      oValueHelp: ValueHelp,
      /**
       * Reason why the method was invoked
       */
      sReason:
        | ValueHelpPropagationReason
        | keyof typeof ValueHelpPropagationReason,
      /**
       * Current configuration provided by the calling control
       */
      oConfig: object
    ): void;
    /**
     * Requests additional content for the value help.
     *
     * This function is called when the value help is opened or a key or description is requested.
     *
     * So depending on the value help {@link sap.ui.mdc.valuehelp.base.Content Content} used, all content controls
     * and data need to be assigned. Once they are assigned and the data is set, the returned `Promise` needs
     * to be resolved. Only then does the value help continue opening or reading data.
     * By default, this method returns a `Promise` that resolves into `undefined`.
     *
     *
     * @returns `Promise` that is resolved if all content is available
     */
    retrieveContent(
      /**
       * The `ValueHelp` control instance
       */
      oValueHelp: ValueHelp,
      /**
       * Container instance
       */
      oContainer: Container,
      /**
       * ID of the content shown after this call to retrieve content
       */
      sContentId: string
    ): Promise<any>;
    /**
     * Determines if the value help is opened when the user clicks into the connected control.
     * By default, the value of the {@link sap.ui.mdc.valuehelp.Popover#getOpensOnClick opensOnClick} property
     * is returned, if set, or the content configuration is checked.
     *
     * Currently this is only supported for the type-ahead container.
     *
     * @since 1.121.0
     *
     * @returns If `true`, the value help is opened when user clicks into the connected field control
     */
    shouldOpenOnClick(
      /**
       * The `ValueHelp` control instance
       */
      oValueHelp: ValueHelp,
      /**
       * Container instance
       */
      oContainer: Container
    ): Promise<boolean>;
    /**
     * Determines if the value help is opened when the user focuses on the connected control.
     * By default, the value of the {@link sap.ui.mdc.valuehelp.Popover#getOpensOnFocus opensOnFocus} property
     * is returned.
     *
     * Currently this is only supported for the type-ahead container.
     *
     * @since 1.121.0
     *
     * @returns If `true`, the value help is opened when user focuses on the connected field control
     */
    shouldOpenOnFocus(
      /**
       * The `ValueHelp` control instance
       */
      oValueHelp: ValueHelp,
      /**
       * Container instance
       */
      oContainer: Container
    ): Promise<boolean>;
    /**
     * Controls if a type-ahead is opened or closed.
     * By default, this method returns `false` if a given content is a {@link sap.ui.mdc.valuehelp.base.FilterableListContent FilterableListContent }
     * but no (truthy) `filterValue` is applied. Otherwise, if the given content is either a {@link sap.ui.mdc.valuehelp.base.ListContent ListContent }
     * with available contexts or any other type of {@link sap.ui.mdc.valuehelp.base.Content Content}, `true`
     * is returned.
     *
     * @since 1.110.0
     *
     * @returns Boolean or `Promise` that resolves into a `boolean` indicating the desired behavior
     */
    showTypeahead(
      /**
       * The `ValueHelp` control instance
       */
      oValueHelp: ValueHelp,
      /**
       * `ValueHelp` Content requesting conditions configuration
       */
      oContent: Content
    ): Promise<boolean> | boolean;
    /**
     * Executes a filter in a `ListBinding` and resumes it, if suspended.
     * By default, this method applies `filters` found in the given {@link sap.ui.base.ManagedObject.AggregationBindingInfo AggregationBindingInfo }
     * to the given {@link sap.ui.model.ListBinding ListBinding}. A suspended `ListBinding` is also resumed
     * afterwards.
     *
     * @since 1.110.0
     */
    updateBinding(
      /**
       * The `ValueHelp` control instance
       */
      oValueHelp: ValueHelp,
      /**
       * List binding
       */
      oListBinding: ListBinding,
      /**
       * The binding info object that is be used to bind the list to the model
       */
      oBindingInfo: AggregationBindingInfo,
      /**
       * `ValueHelp` content requesting the binding update
       */
      oContent: FilterableListContent
    ): void;
    /**
     * Adjustable filtering for list-based contents.
     * By default, this method updates a given {@link sap.ui.base.ManagedObject.AggregationBindingInfo AggregationBindingInfo }
     * with the return value from the delegate's own {@link module:sap/ui/mdc/ValueHelpDelegate.getFilters getFilters}.
     *
     * @since 1.110.0
     */
    updateBindingInfo(
      /**
       * The `ValueHelp` control instance
       */
      oValueHelp: ValueHelp,
      /**
       * `ValueHelp` content requesting conditions configuration
       */
      oContent: FilterableListContent,
      /**
       * The binding info object to that is used to bind the list to the model
       */
      oBindingInfo: AggregationBindingInfo
    ): void;
  }
  const ValueHelpDelegate: ValueHelpDelegate;
  export default ValueHelpDelegate;
}

declare module "sap/ui/mdc/library" {
  import { ConditionObject } from "sap/ui/mdc/condition/Condition";

  import Type from "sap/ui/model/Type";

  import BaseType from "sap/ui/mdc/enums/BaseType";

  /**
   * Interface for controls or entities which can serve as filters in the `sap.ui.mdc.Table` & `sap.ui.mdc.Chart`.
   *
   * The following methods need to be implemented:
   *
   *
   * 	 - `getConditions` - Part of the {@link sap.ui.mdc.IFilterSource} interface.
   * 	 - `validate` - The `validate` method should return a promise which resolves after the IFilter interface
   *     has handled its inner validation. The `getConditions` method will be called subsequently by the filtered
   *     control.
   * 	 - `getSearch` - **Note:** The `getSearch` method can optionally be implemented and should return a
   *     string for approximate string matching implemented in the backend.
   *
   * The following events need to be implemented:
   *
   *
   * 	 - `search` - This event should be fired once a filtering should be executed on the IFilter using control.
   *
   * 	 - `filtersChanged` - **Note:** The `filtersChanged` event can optionally be implemented and should
   *     be fired whenever a filter value has changed. This event will be used to display an overlay on the IFilter
   *     consuming control.
   *
   * @since 1.70
   */
  export interface IFilter extends IFilterSource {
    __implements__sap_ui_mdc_IFilter: boolean;

    /**
     * **Note:** The `getSearch` method can optionally be implemented and should return a string for approximate
     * string matching implemented in the backend.
     *
     * @since 1.80
     *
     * @returns The search string to be used for an approximate string matching
     */
    getSearch(): string;
    /**
     * The `validate` method should return a promise which resolves after the IFilter interface has handled
     * its inner validation. The `getConditions` method will be called subsequently by the filtered control.
     *
     * @since 1.80
     *
     * @returns A promise resolving once the necessary result validation has been handled
     */
    validate(
      /**
       * Determines whether the search should be suppressed. The default is null.
       */
      bSuppressSearch: boolean
    ): Promise<any>;
  }

  /**
   * Interface for controls or entities which are able to return a set of present conditions. The controls
   * or entities have to implement the following APIs: `getConditions`.
   *
   * @since 1.80
   */
  export interface IFilterSource {
    __implements__sap_ui_mdc_IFilterSource: boolean;
  }

  /**
   * Interface for controls or entities which support the appliance of an externalized state representation.
   * The controls or entities have to implement the following APIs: `getCurrentState` & `initialized` methods.
   *
   * @since 1.75
   */
  export interface IxState {
    __implements__sap_ui_mdc_IxState: boolean;
  }

  /**
   * The `State` object describes the interface to apply and retrieve the current adaptation state from mdc
   * controls. The {@link sap.mdc.p13n.StateUtil StateUtil} class can be used to programatically apply changes
   * considered for the controls personalization to be part of its persistence.
   */
  export type State = {
    /**
     * Describes the filter conditions
     */
    filter?: State.XCondition;
    /**
     * Describes the filter fields
     */
    items?: State.Items[];
    /**
     * Describes the sorter fields
     */
    sorters?: State.Sorters[];
    /**
     * Describes the grouped fields
     */
    groupLevels?: State.GroupLevels[];
    /**
     * Describes the aggregated fields
     */
    aggregations?: State.Aggregations;
  };

  export namespace State {
    /**
     * Defines the `aggregations` to be added to the controls agreggation state.
     *
     * Defines whether there is an aggregation for each item.
     */
    type Aggregations = {
      /**
       * Defines if the item has to be aggregated
       */
      aggregated?: boolean;
    };

    /**
     * Defines the `groupes` to be added to the controls grouping state.
     */
    type GroupLevels = {
      /**
       * of the grouped item
       */
      key: string;
      /**
       * Defines if the item has to be grouped
       */
      grouped?: boolean;
    };

    /**
     * Defines the `items` to be added to the controls default aggregation.
     */
    type Items = {
      /**
       * of the item
       */
      key: string;
      /**
       * of the item in the aggregation
       */
      position?: int;
      /**
       * State of the item
       */
      visible?: boolean;
    };

    /**
     * Defines the `sorters` to be added to the controls sorting state.
     */
    type Sorters = {
      /**
       * of the sorted item
       */
      key: string;
      /**
       * Sort order for this item
       */
      descending: boolean;
      /**
       * Defines if the item has to be sorted
       */
      sorted?: boolean;
    };

    /**
     * Defines the values for each filter field path of a condition.
     */
    type XCondition = {
      /**
       * of the condition
       */
      operator: string;
      /**
       * of the condition
       */
      values: any[];
    };
  }

  export namespace util {
    /**
     * Map-like configuration object for filter creation.
     *  The keys for this object must be aligned with any {@link sap.ui.mdc.util.FilterTypeConfig} the `FilterConditionMap`
     * is combined with during filter creation.
     *
     *
     * **Structure:** Object.<string, {@link sap.ui.mdc.condition.ConditionObject sap.ui.mdc.condition.ConditionObject[]}>
     *
     * @since 1.121.0
     */
    type FilterConditionMap = Record<string, ConditionObject[]>;

    /**
     * Map-like configuration object for filter creation.
     *  The keys for this object must be aligned with any {@link sap.ui.mdc.util.FilterConditionMap} the `FilterTypeConfig`
     * is combined with during filter creation.
     *
     * **Structure:** Object.<string, {@link sap.ui.mdc.util.FilterTypeConfigEntry}>
     *
     * @since 1.121.0
     */
    type FilterTypeConfig = Record<string, FilterTypeConfigEntry>;

    /**
     * Configuration object for filter creation.
     *
     * @since 1.121.0
     */
    type FilterTypeConfigEntry = {
      /**
       * Type instance
       */
      type: Type;
      /**
       * Indicates if a created filter is case-sensitive
       */
      caseSensitive?: boolean;
      /**
       * BaseType configuration for the given type useful for externalization/internalization of filter values
       */
      baseType?: BaseType | keyof typeof BaseType;
    };
  }
}

declare module "sap/ui/mdc/actiontoolbar/ActionToolbarAction" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { IOverflowToolbarContent } from "sap/m/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * The action for an {@link sap.ui.mdc.ActionToolbar ActionToolbar} control with given layout information
   * that determines where the wrapped control is displayed on the `ActionToolbar`.
   *
   * @since 1.58
   * @experimental
   */
  export default class ActionToolbarAction
    extends Control
    implements IOverflowToolbarContent
  {
    __implements__sap_m_IOverflowToolbarContent: boolean;
    /**
     * Constructor for a new ActionToolbarAction.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ActionToolbarActionSettings
    );
    /**
     * Constructor for a new ActionToolbarAction.
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
      mSettings?: $ActionToolbarActionSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.actiontoolbar.ActionToolbarAction with name `sClassName` and
     * enriches it with the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, ActionToolbarAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.actiontoolbar.ActionToolbarAction.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Destroys the action in the aggregation {@link #getAction action}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyAction(): this;
    /**
     * Gets content of aggregation {@link #getAction action}.
     *
     * The control that is displayed on the `ActionToolbar`.
     */
    getAction(): Control;
    /**
     * Gets current value of property {@link #getLayoutInformation layoutInformation}.
     *
     * Contains the information where the action is displayed on the `ActionToolbar`.
     *
     * Default value is `...see text or source`.
     *
     *
     * @returns Value of property `layoutInformation`
     */
    getLayoutInformation(): object;
    /**
     * Observes changes in `Action` aggregation.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    observeChanges(
      /**
       * Changes
       */
      oChanges: object
    ): void;
    /**
     * Sets the aggregated {@link #getAction action}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAction(
      /**
       * The action to set
       */
      oAction: Control
    ): this;
    /**
     * Sets a new value for property {@link #getLayoutInformation layoutInformation}.
     *
     * Contains the information where the action is displayed on the `ActionToolbar`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `...see text or source`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLayoutInformation(
      /**
       * New value for property `layoutInformation`
       */
      oLayoutInformation?: object
    ): this;
  }
  /**
   * Describes the settings that can be provided to the ActionToolbarAction constructor.
   *
   * @experimental
   */
  export interface $ActionToolbarActionSettings extends $ControlSettings {
    /**
     * Contains the information where the action is displayed on the `ActionToolbar`.
     */
    layoutInformation?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * The control that is displayed on the `ActionToolbar`.
     */
    action?: Control;
  }
}

declare module "sap/ui/mdc/Chart" {
  import { default as Control, $ControlSettings } from "sap/ui/mdc/Control";

  import { IFilterSource, IxState, IFilter } from "sap/ui/mdc/library";

  import Control1 from "sap/ui/core/Control";

  import { ID, TitleLevel, CSSSize } from "sap/ui/core/library";

  import ChartToolbarActionType from "sap/ui/mdc/enums/ChartToolbarActionType";

  import Item from "sap/ui/mdc/chart/Item";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import ChartP13nMode from "sap/ui/mdc/enums/ChartP13nMode";

  import SelectionDetailsActions from "sap/ui/mdc/chart/SelectionDetailsActions";

  import VariantManagement from "sap/ui/fl/variants/VariantManagement";

  import { PropertyInfo as PropertyInfo1 } from "sap/ui/mdc/util/PropertyHelper";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import Item1 from "sap/ui/core/Item";

  import Context from "sap/ui/model/Context";

  import { SelectionDetailsActionLevel } from "sap/m/library";

  import Event from "sap/ui/base/Event";

  /**
   * The `Chart` control creates a chart based on metadata and the configuration specified.
   *  **Note:** The inner chart needs to be assigned `ChartDelegate`.
   *
   * @since 1.88
   * @experimental (since 1.88)
   */
  export default class Chart extends Control implements IFilterSource, IxState {
    __implements__sap_ui_mdc_IFilterSource: boolean;
    __implements__sap_ui_mdc_IxState: boolean;
    /**
     * Constructor for a new Chart.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ChartSettings
    );
    /**
     * Constructor for a new Chart.
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
      mSettings?: $ChartSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.Chart with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.Control.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Chart>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.Chart.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionDetailsActionPressed selectionDetailsActionPressed }
     * event of this `sap.ui.mdc.Chart`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.Chart` itself.
     *
     * This event is fired when a `SelectionDetailsAction` is pressed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelectionDetailsActionPressed(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Chart$SelectionDetailsActionPressedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.Chart` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionDetailsActionPressed selectionDetailsActionPressed }
     * event of this `sap.ui.mdc.Chart`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.Chart` itself.
     *
     * This event is fired when a `SelectionDetailsAction` is pressed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelectionDetailsActionPressed(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Chart$SelectionDetailsActionPressedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.Chart` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys the noData in the aggregation {@link #getNoData noData}.
     *
     * @since 1.107
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyNoData(): this;
    /**
     * Destroys the selectionDetailsActions in the aggregation {@link #getSelectionDetailsActions selectionDetailsActions}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySelectionDetailsActions(): this;
    /**
     * Destroys the variant in the aggregation {@link #getVariant variant}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyVariant(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:selectionDetailsActionPressed selectionDetailsActionPressed }
     * event of this `sap.ui.mdc.Chart`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSelectionDetailsActionPressed(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Chart$SelectionDetailsActionPressedEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Fires event {@link #event:selectionDetailsActionPressed selectionDetailsActionPressed} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSelectionDetailsActionPressed(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Chart$SelectionDetailsActionPressedEventParameters
    ): this;
    /**
     * Gets content of aggregation {@link #getActions actions}.
     *
     * This aggregation describes actions that are added to the chart toolbar.
     *  For more information, see {@link sap.ui.mdc.actiontoolbar.ActionToolbarAction}.
     *
     * **Note:** This aggregation is managed by the control, can only be populated during the definition in
     * the XML view, and is not bindable. Any changes of the initial aggregation content might result in undesired
     * effects. Changes of the aggregation have to be made with the {@link sap.ui.mdc.p13n.StateUtil StateUtil}.
     */
    getActions(): Control1[];
    /**
     * Gets current value of property {@link #getAutoBindOnInit autoBindOnInit}.
     *
     * If set to `true`, the chart is automatically bound after initialization.
     *  If set to `false`, the chart is bound after the first call to `rebind`.
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `autoBindOnInit`
     */
    getAutoBindOnInit(): boolean;
    /**
     * Gets current value of property {@link #getChartType chartType}.
     *
     * Specifies the type of chart to be created by the `Chart` control.
     *
     * Default value is `"column"`.
     *
     *
     * @returns Value of property `chartType`
     */
    getChartType(): string;
    /**
     * Getter for `Conditions` set in the personalization settings.
     *
     *
     * @returns Filters set in the chart
     */
    getConditions(): object;
    /**
     * Gets current value of property {@link #getDelegate delegate}.
     *
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/BaseDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * Default value is `...see text or source`.
     *
     * @experimental
     *
     * @returns Value of property `delegate`
     */
    getDelegate(): object;
    /**
     * ID of the element which is the current target of the association {@link #getFilter filter}, or `null`.
     *
     * @since 1.88
     */
    getFilter(): ID | null;
    /**
     * Gets current value of property {@link #getHeader header}.
     *
     * Specifies header text that is shown in the chart.
     *
     *
     * @returns Value of property `header`
     */
    getHeader(): string;
    /**
     * Gets current value of property {@link #getHeaderLevel headerLevel}.
     *
     * Semantic level of the header.
     *  For more information, see {@link sap.m.Title#setLevel}.
     *
     * Default value is `Auto`.
     *
     * @since 1.104
     *
     * @returns Value of property `headerLevel`
     */
    getHeaderLevel(): TitleLevel | keyof typeof TitleLevel;
    /**
     * Gets current value of property {@link #getHeaderStyle headerStyle}.
     *
     * Defines style of the header. For more information, see {@link sap.m.Title#setTitleStyle}.
     *
     * @since 1.120
     *
     * @returns Value of property `headerStyle`
     */
    getHeaderStyle(): TitleLevel | keyof typeof TitleLevel;
    /**
     * Gets current value of property {@link #getHeaderVisible headerVisible}.
     *
     * Determines whether the header text is shown in the chart. Regardless of its value, the given header text
     * is used to label the chart correctly for accessibility purposes.
     *
     * Default value is `true`.
     *
     * @since 1.111
     *
     * @returns Value of property `headerVisible`
     */
    getHeaderVisible(): boolean;
    /**
     * Gets current value of property {@link #getHeight height}.
     *
     * Defines the height of the chart.
     *
     * Default value is `"100%"`.
     *
     *
     * @returns Value of property `height`
     */
    getHeight(): CSSSize;
    /**
     * Gets current value of property {@link #getIgnoreToolbarActions ignoreToolbarActions}.
     *
     * Specifies which actions must not be available in the chart's toolbar.
     *
     * Default value is `[]`.
     *
     * @since 1.88
     *
     * @returns Value of property `ignoreToolbarActions`
     */
    getIgnoreToolbarActions(): Array<
      ChartToolbarActionType | keyof typeof ChartToolbarActionType
    >;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * This property describes the measures and dimensions visible in the chart. Changes in the personalization
     * are also reflected here. **Note:** This aggregation is managed by the control, can only be populated
     * during the definition in the XML view, and is not bindable. Any changes of the initial aggregation content
     * might result in undesired effects. Changes of the aggregation have to be made with the {@link sap.ui.mdc.p13n.StateUtil StateUtil}.
     */
    getItems(): Item[];
    /**
     * Gets current value of property {@link #getLegendVisible legendVisible}.
     *
     * Enables the legend of the chart. **Note:** The setter calls `setLegendVisible` of the delegate class.
     *
     * Default value is `true`.
     *
     * @since 1.88
     *
     * @returns Value of property `legendVisible`
     */
    getLegendVisible(): boolean;
    /**
     * Gets current value of property {@link #getMinHeight minHeight}.
     *
     * Defines the minimum height.
     *
     * Default value is `"400px"`.
     *
     *
     * @returns Value of property `minHeight`
     */
    getMinHeight(): CSSSize;
    /**
     * Gets current value of property {@link #getMinWidth minWidth}.
     *
     * Defines the minimum width.
     *
     * Default value is `"240px"`.
     *
     *
     * @returns Value of property `minWidth`
     */
    getMinWidth(): CSSSize;
    /**
     * Gets content of aggregation {@link #getNoData noData}.
     *
     * Defines the custom visualization if there is no data available.
     *  This control will be displayed on top of the chart when no data is visible inside the chart.
     *  **Note:** If both a `noDataText` property and a `noData` aggregation are provided, the `noData` aggregation
     * takes priority.
     *  If the `noData` aggregation is undefined or set to null, the `noDataText` property is used instead.
     *
     * @since 1.107
     */
    getNoData(): Control1;
    /**
     * Gets current value of property {@link #getNoDataText noDataText}.
     *
     * Defines the no data text shown in the chart.
     *
     * Default value is `"No data"`.
     *
     * @since 1.88
     *
     * @returns Value of property `noDataText`
     */
    getNoDataText(): string;
    /**
     * Gets current value of property {@link #getP13nMode p13nMode}.
     *
     * Specifies the personalization options available for the chart.
     *  **Note:** The order of the provided options does not influence the arrangement of the icons on the UI.
     *
     * Default value is `[]`.
     *
     * @since 1.88
     *
     * @returns Value of property `p13nMode`
     */
    getP13nMode(): Array<ChartP13nMode | keyof typeof ChartP13nMode>;
    /**
     * Gets content of aggregation {@link #getSelectionDetailsActions selectionDetailsActions}.
     *
     * Feeds details actions for data point selection in the mdc chart.
     *  For more information, see {@link sap.ui.mdc.chart.SelectionDetailsActions SelectionDetailsActions}.
     */
    getSelectionDetailsActions(): SelectionDetailsActions;
    /**
     * Gets current value of property {@link #getShowChartTooltip showChartTooltip}.
     *
     * Controls the visibility of the chart tooltip. If set to `true`, a call of the `delegate.setChartTooltipVisibility`
     * will be triggered and can be used to make the `Chart` tooltip visible.
     *
     * Default value is `true`.
     *
     * @since 1.88
     *
     * @returns Value of property `showChartTooltip`
     */
    getShowChartTooltip(): boolean;
    /**
     * Gets current value of property {@link #getShowSelectionDetails showSelectionDetails}.
     *
     * Enables the Details button in the chart toolbar.
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `showSelectionDetails`
     */
    getShowSelectionDetails(): boolean;
    /**
     * Gets content of aggregation {@link #getVariant variant}.
     *
     * Reference to a {@link sap.ui.fl.variants.VariantManagement} control for the chart.
     */
    getVariant(): VariantManagement;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Defines the width of the chart.
     *
     * Default value is `"100%"`.
     *
     *
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getActions actions}. and returns
     * its index if found or -1 otherwise.
     *
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfAction(
      /**
       * The action whose index is looked for
       */
      oAction: Control1
    ): int;
    /**
     * Checks for the provided `sap.ui.mdc.chart.Item` in the aggregation {@link #getItems items}. and returns
     * its index if found or -1 otherwise.
     *
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: Item
    ): int;
    /**
     * Executes a rebind considering the provided external and inbuilt filtering.
     *
     * @since 1.98
     *
     * @returns A `Promise` that resolves after rebind is executed, and rejects if rebind cannot be executed,
     * for example because there are invalid filters.
     */
    rebind(): Promise<any>;
    /**
     * Sets a new value for property {@link #getAutoBindOnInit autoBindOnInit}.
     *
     * If set to `true`, the chart is automatically bound after initialization.
     *  If set to `false`, the chart is bound after the first call to `rebind`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAutoBindOnInit(
      /**
       * New value for property `autoBindOnInit`
       */
      bAutoBindOnInit?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getDelegate delegate}.
     *
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/BaseDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `...see text or source`.
     *
     * @experimental
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDelegate(
      /**
       * New value for property `delegate`
       */
      oDelegate?: object
    ): this;
    /**
     * Sets the associated {@link #getFilter filter}.
     *
     * @since 1.88
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFilter(
      /**
       * ID of an element which becomes the new target of this filter association; alternatively, an element instance
       * may be given
       */
      oFilter: ID | IFilter
    ): this;
    /**
     * Sets a new value for property {@link #getHeader header}.
     *
     * Specifies header text that is shown in the chart.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeader(
      /**
       * New value for property `header`
       */
      sHeader?: string
    ): this;
    /**
     * Sets a new value for property {@link #getHeaderLevel headerLevel}.
     *
     * Semantic level of the header.
     *  For more information, see {@link sap.m.Title#setLevel}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Auto`.
     *
     * @since 1.104
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderLevel(
      /**
       * New value for property `headerLevel`
       */
      sHeaderLevel?: TitleLevel | keyof typeof TitleLevel
    ): this;
    /**
     * Sets a new value for property {@link #getHeaderStyle headerStyle}.
     *
     * Defines style of the header. For more information, see {@link sap.m.Title#setTitleStyle}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @since 1.120
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderStyle(
      /**
       * New value for property `headerStyle`
       */
      sHeaderStyle: TitleLevel | keyof typeof TitleLevel
    ): this;
    /**
     * Sets a new value for property {@link #getHeaderVisible headerVisible}.
     *
     * Determines whether the header text is shown in the chart. Regardless of its value, the given header text
     * is used to label the chart correctly for accessibility purposes.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @since 1.111
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderVisible(
      /**
       * New value for property `headerVisible`
       */
      bHeaderVisible?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getHeight height}.
     *
     * Defines the height of the chart.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"100%"`.
     *
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
     * Sets a new value for property {@link #getIgnoreToolbarActions ignoreToolbarActions}.
     *
     * Specifies which actions must not be available in the chart's toolbar.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `[]`.
     *
     * @since 1.88
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setIgnoreToolbarActions(
      /**
       * New value for property `ignoreToolbarActions`
       */
      sIgnoreToolbarActions?: Array<
        ChartToolbarActionType | keyof typeof ChartToolbarActionType
      >
    ): this;
    /**
     * Sets a new value for property {@link #getLegendVisible legendVisible}.
     *
     * Enables the legend of the chart. **Note:** The setter calls `setLegendVisible` of the delegate class.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @since 1.88
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLegendVisible(
      /**
       * New value for property `legendVisible`
       */
      bLegendVisible?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getMinHeight minHeight}.
     *
     * Defines the minimum height.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"400px"`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMinHeight(
      /**
       * New value for property `minHeight`
       */
      sMinHeight?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getMinWidth minWidth}.
     *
     * Defines the minimum width.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"240px"`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMinWidth(
      /**
       * New value for property `minWidth`
       */
      sMinWidth?: CSSSize
    ): this;
    /**
     * Sets the aggregated {@link #getNoData noData}.
     *
     * @since 1.107
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setNoData(
      /**
       * The noData to set
       */
      oNoData: Control1
    ): this;
    /**
     * Sets a new value for property {@link #getP13nMode p13nMode}.
     *
     * Specifies the personalization options available for the chart.
     *  **Note:** The order of the provided options does not influence the arrangement of the icons on the UI.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `[]`.
     *
     * @since 1.88
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setP13nMode(
      /**
       * New value for property `p13nMode`
       */
      sP13nMode?: Array<ChartP13nMode | keyof typeof ChartP13nMode>
    ): this;
    /**
     * Sets the aggregated {@link #getSelectionDetailsActions selectionDetailsActions}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelectionDetailsActions(
      /**
       * The selectionDetailsActions to set
       */
      oSelectionDetailsActions: SelectionDetailsActions
    ): this;
    /**
     * Sets a new value for property {@link #getShowChartTooltip showChartTooltip}.
     *
     * Controls the visibility of the chart tooltip. If set to `true`, a call of the `delegate.setChartTooltipVisibility`
     * will be triggered and can be used to make the `Chart` tooltip visible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @since 1.88
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowChartTooltip(
      /**
       * New value for property `showChartTooltip`
       */
      bShowChartTooltip?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowSelectionDetails showSelectionDetails}.
     *
     * Enables the Details button in the chart toolbar.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowSelectionDetails(
      /**
       * New value for property `showSelectionDetails`
       */
      bShowSelectionDetails?: boolean
    ): this;
    /**
     * Sets the aggregated {@link #getVariant variant}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setVariant(
      /**
       * The variant to set
       */
      oVariant: VariantManagement
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Defines the width of the chart.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"100%"`.
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
  }
  /**
   * An object literal describing a data property in the context of a {@link sap.ui.mdc.Chart}.
   *
   * When specifying the `PropertyInfo` objects in the {@link sap.ui.mdc.Chart#getPropertyInfo propertyInfo }
   * property, the following attributes need to be specified:
   * 	 - `key`
   * 	 - `label`
   * 	 - `groupable`
   * 	 - `aggregatable`
   * 	 - `role`
   * 	 - `dataType`
   *
   * @experimental (since 1.80)
   */
  export type PropertyInfo = PropertyInfo1 & {
    /**
     * Defines whether the property is groupable and is selectable as a dimension in the chart
     */
    groupable: boolean;
    /**
     * Defines whether the property is aggregatable and is selectable as a measure in the chart
     */
    aggregatable: boolean;
    /**
     * The aggregation method used if the property is aggregatable
     */
    aggregationMethod: string;
    /**
     * Defines the role that the property visualizes inside the chart
     */
    role: string;
    /**
     * Implementation-specific object containing information about the data point
     */
    datapoint?: object;
    /**
     * Implementation-specific object containing information about the criticality
     */
    criticality?: object;
    /**
     * The text property used for the dimension
     */
    textProperty?: string;
    /**
     * The text formatter object which can be used to format the textProperty
     */
    textFormatter?: object;
    /**
     * The name of the unit property which will be used to display and format measure values with a unit value
     * on a selectionDetails popover
     */
    unitPath?: object;
  };

  /**
   * Describes the settings that can be provided to the Chart constructor.
   *
   * @experimental (since 1.88)
   */
  export interface $ChartSettings extends $ControlSettings {
    /**
     * Defines the width of the chart.
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the height of the chart.
     */
    height?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/BaseDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * @experimental
     */
    delegate?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies header text that is shown in the chart.
     */
    header?: string | PropertyBindingInfo;

    /**
     * Defines the no data text shown in the chart.
     *
     * @since 1.88
     */
    noDataText?: string | PropertyBindingInfo;

    /**
     * Specifies the personalization options available for the chart.
     *  **Note:** The order of the provided options does not influence the arrangement of the icons on the UI.
     *
     * @since 1.88
     */
    p13nMode?:
      | Array<ChartP13nMode | keyof typeof ChartP13nMode>
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Enables the legend of the chart. **Note:** The setter calls `setLegendVisible` of the delegate class.
     *
     * @since 1.88
     */
    legendVisible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies which actions must not be available in the chart's toolbar.
     *
     * @since 1.88
     */
    ignoreToolbarActions?:
      | Array<ChartToolbarActionType | keyof typeof ChartToolbarActionType>
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the minimum width.
     */
    minWidth?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the minimum height.
     */
    minHeight?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the sort conditions.
     *  **Note:** This property must not be bound.
     *  **Note:** This property is exclusively used for handling SAPUI5 flexibility changes. Do not use it for
     * anything else.
     *
     * @since 1.88
     */
    sortConditions?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the filter conditions.
     *  **Note:** This property must not be bound.
     *  **Note:** This property is exclusively used for handling SAPUI5 flexibility changes. Do not use it for
     * anything else.
     *
     * @since 1.99
     */
    filterConditions?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Controls the visibility of the chart tooltip. If set to `true`, a call of the `delegate.setChartTooltipVisibility`
     * will be triggered and can be used to make the `Chart` tooltip visible.
     *
     * @since 1.88
     */
    showChartTooltip?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If set to `true`, the chart is automatically bound after initialization.
     *  If set to `false`, the chart is bound after the first call to `rebind`.
     */
    autoBindOnInit?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies the type of chart to be created by the `Chart` control.
     */
    chartType?: string | PropertyBindingInfo;

    /**
     * Enables the Details button in the chart toolbar.
     */
    showSelectionDetails?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies the chart metadata.
     *  **Note:** This property must not be bound.
     *  **Note:** This property is exclusively used for handling SAPUI5 flexibility changes. Do not use it otherwise.
     *
     *
     * **Note**: For more information about the supported inner elements, see {@link sap.ui.mdc.chart.PropertyInfo PropertyInfo}.
     *
     * @since 1.99
     */
    propertyInfo?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Semantic level of the header.
     *  For more information, see {@link sap.m.Title#setLevel}.
     *
     * @since 1.104
     */
    headerLevel?:
      | (TitleLevel | keyof typeof TitleLevel)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines style of the header. For more information, see {@link sap.m.Title#setTitleStyle}.
     *
     * @since 1.120
     */
    headerStyle?:
      | (TitleLevel | keyof typeof TitleLevel)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines whether the header text is shown in the chart. Regardless of its value, the given header text
     * is used to label the chart correctly for accessibility purposes.
     *
     * @since 1.111
     */
    headerVisible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * This property describes the measures and dimensions visible in the chart. Changes in the personalization
     * are also reflected here. **Note:** This aggregation is managed by the control, can only be populated
     * during the definition in the XML view, and is not bindable. Any changes of the initial aggregation content
     * might result in undesired effects. Changes of the aggregation have to be made with the {@link sap.ui.mdc.p13n.StateUtil StateUtil}.
     */
    items?: Item[] | Item | AggregationBindingInfo | `{${string}}`;

    /**
     * This aggregation describes actions that are added to the chart toolbar.
     *  For more information, see {@link sap.ui.mdc.actiontoolbar.ActionToolbarAction}.
     *
     * **Note:** This aggregation is managed by the control, can only be populated during the definition in
     * the XML view, and is not bindable. Any changes of the initial aggregation content might result in undesired
     * effects. Changes of the aggregation have to be made with the {@link sap.ui.mdc.p13n.StateUtil StateUtil}.
     */
    actions?: Control1[] | Control1 | AggregationBindingInfo | `{${string}}`;

    /**
     * Feeds details actions for data point selection in the mdc chart.
     *  For more information, see {@link sap.ui.mdc.chart.SelectionDetailsActions SelectionDetailsActions}.
     */
    selectionDetailsActions?: SelectionDetailsActions;

    /**
     * Reference to a {@link sap.ui.fl.variants.VariantManagement} control for the chart.
     */
    variant?: VariantManagement;

    /**
     * Defines the custom visualization if there is no data available.
     *  This control will be displayed on top of the chart when no data is visible inside the chart.
     *  **Note:** If both a `noDataText` property and a `noData` aggregation are provided, the `noData` aggregation
     * takes priority.
     *  If the `noData` aggregation is undefined or set to null, the `noDataText` property is used instead.
     *
     * @since 1.107
     */
    noData?: Control1;

    /**
     * Control or object that enables the chart to do filtering, such as {@link sap.ui.mdc.FilterBar}. See also
     * {@link sap.ui.mdc.IFilter}.
     *
     * Automatic filter generation only works in combination with a `sap.ui.mdc.FilterBar`.
     *
     * @since 1.88
     */
    filter?: IFilter | string;

    /**
     * This event is fired when a `SelectionDetailsAction` is pressed.
     */
    selectionDetailsActionPressed?: (
      oEvent: Chart$SelectionDetailsActionPressedEvent
    ) => void;
  }

  /**
   * Parameters of the Chart#selectionDetailsActionPressed event.
   */
  export interface Chart$SelectionDetailsActionPressedEventParameters {
    /**
     * The action that has to be processed once the action has been pressed
     */
    action?: Item1;

    /**
     * If the action is pressed on one of the {@link sap.m.SelectionDetailsItem items}, the parameter contains
     * the {@link sap.ui.model.Context context} of the pressed {@link sap.m.SelectionDetailsItem item}. If a
     * custom action or action group of the `SelectionDetails` popover is pressed, this parameter contains all
     * {@link sap.ui.model.Context contexts} of the {@link sap.m.SelectionDetailsItem items}.
     */
    itemContexts?: Context;

    /**
     * The action level of action buttons. The available levels are Item, List and Group
     */
    level?:
      | SelectionDetailsActionLevel
      | keyof typeof SelectionDetailsActionLevel;
  }

  /**
   * Event object of the Chart#selectionDetailsActionPressed event.
   */
  export type Chart$SelectionDetailsActionPressedEvent = Event<
    Chart$SelectionDetailsActionPressedEventParameters,
    Chart
  >;
}

declare module "sap/ui/mdc/chart/ChartImplementationContainer" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * The `ChartImplementationContainer` creates a container for the `content` (chart) and `noDataContent`.
   * Based on the `showNoDataStruct` the `content` or `noDataContent` will be shown.
   *
   * @since 1.105
   * @experimental (since 1.105)
   */
  export default class ChartImplementationContainer extends Control {
    /**
     * Constructor for a new ChartImplementationContainer.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ChartImplementationContainerSettings
    );
    /**
     * Constructor for a new ChartImplementationContainer.
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
      mSettings?: $ChartImplementationContainerSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.chart.ChartImplementationContainer with name `sClassName`
     * and enriches it with the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, ChartImplementationContainer>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.chart.ChartImplementationContainer.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Destroys the content in the aggregation {@link #getContent content}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;
    /**
     * Destroys the noDataContent in the aggregation {@link #getNoDataContent noDataContent}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyNoDataContent(): this;
    /**
     * ID of the element which is the current target of the association {@link #getChartNoDataContent chartNoDataContent},
     * or `null`.
     */
    getChartNoDataContent(): ID | null;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Content/Chart to be visualized.
     */
    getContent(): Control;
    /**
     * Gets content of aggregation {@link #getNoDataContent noDataContent}.
     *
     * Control that is shown when there is no data available inside the chart.
     *  This can be used if the standard behavior of the used chart control needs to be overriden.
     *  To show this `noDataContent`, set {@link #getShowNoDataStruct showNoDataStruct}.
     */
    getNoDataContent(): Control;
    /**
     * Gets current value of property {@link #getShowNoDataStruct showNoDataStruct}.
     *
     * Toggles the visibility of the noDataContent & content
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `showNoDataStruct`
     */
    getShowNoDataStruct(): boolean;
  }
  /**
   * Describes the settings that can be provided to the ChartImplementationContainer constructor.
   *
   * @experimental (since 1.105)
   */
  export interface $ChartImplementationContainerSettings
    extends $ControlSettings {
    /**
     * Toggles the visibility of the noDataContent & content
     */
    showNoDataStruct?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Content/Chart to be visualized.
     */
    content?: Control;

    /**
     * Control that is shown when there is no data available inside the chart.
     *  This can be used if the standard behavior of the used chart control needs to be overriden.
     *  To show this `noDataContent`, set {@link #getShowNoDataStruct showNoDataStruct}.
     */
    noDataContent?: Control;

    /**
     * Association to `noData` content set in the chart.
     *  If set, this will be used instead of the `noDataContent` aggregation.
     */
    chartNoDataContent?: Control | string;
  }
}

declare module "sap/ui/mdc/chart/ChartSelectionDetails" {
  import {
    default as SelectionDetails,
    $SelectionDetailsSettings,
  } from "sap/m/SelectionDetails";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * The `ChartSelectionDetails` control creates a `sap.m.SelectionDetails` popover based on metadata and
   * the configuration specified.
   *
   * @since 1.88
   * @experimental (since 1.88)
   */
  export default class ChartSelectionDetails extends SelectionDetails {
    /**
     * Constructor for a new ChartSelectionDetails.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.m.SelectionDetails#constructor sap.m.SelectionDetails }
     * can be used.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ChartSelectionDetailsSettings
    );
    /**
     * Constructor for a new ChartSelectionDetails.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.m.SelectionDetails#constructor sap.m.SelectionDetails }
     * can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no id is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ChartSelectionDetailsSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.chart.ChartSelectionDetails with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.m.SelectionDetails.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ChartSelectionDetails>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.chart.ChartSelectionDetails.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }
  /**
   * Describes the settings that can be provided to the ChartSelectionDetails constructor.
   *
   * @experimental (since 1.88)
   */
  export interface $ChartSelectionDetailsSettings
    extends $SelectionDetailsSettings {}
}

declare module "sap/ui/mdc/chart/Item" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * The `Item` control for the chart/property metadata used within MDC Chart. An instance can be created
   * to override the default/metadata behavior.
   *
   * @since 1.88
   * @experimental (since 1.88)
   */
  export default class Item extends UI5Element {
    /**
     * Constructor for a new `Item`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $ItemSettings
    );
    /**
     * Constructor for a new `Item`.
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
       * initial settings for the new control
       */
      mSettings?: $ItemSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.chart.Item with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Item>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.chart.Item.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getLabel label}.
     *
     * Label for the item, either as a string literal or by a pointer, using the binding to some property containing
     * the label.
     *
     *
     * @returns Value of property `label`
     */
    getLabel(): string;
    /**
     * Gets current value of property {@link #getName name}.
     *
     * The unique identifier of the chart item that reflects the name of the data property in the resulting
     * data set.
     *
     * @deprecated (since 1.115) - Please use `propertyKey` instead.
     *
     * @returns Value of property `name`
     */
    getName(): string;
    /**
     * Gets current value of property {@link #getPropertyKey propertyKey}.
     *
     * The unique identifier of the chart item that reflects the name of the data property in the resulting
     * data set.
     *
     * @since 1.115
     *
     * @returns Value of property `propertyKey`
     */
    getPropertyKey(): string;
    /**
     * Gets current value of property {@link #getRole role}.
     *
     * Specifies the role of the item for the chart (category, axis1...). This is specific for the used chart
     * library.
     *  **Note:** This property must not be changed after initialization.
     *
     *
     * @returns Value of property `role`
     */
    getRole(): string;
    /**
     * Gets current value of property {@link #getType type}.
     *
     * Specifies the type of the item for the chart (groupable and aggregatable). This is specific for the used
     * chart library.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Value of property `type`
     */
    getType(): string;
    /**
     * Sets a new value for property {@link #getLabel label}.
     *
     * Label for the item, either as a string literal or by a pointer, using the binding to some property containing
     * the label.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLabel(
      /**
       * New value for property `label`
       */
      sLabel: string
    ): this;
    /**
     * Sets a new value for property {@link #getName name}.
     *
     * The unique identifier of the chart item that reflects the name of the data property in the resulting
     * data set.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @deprecated (since 1.115) - Please use `propertyKey` instead.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setName(
      /**
       * New value for property `name`
       */
      sName: string
    ): this;
    /**
     * Sets a new value for property {@link #getPropertyKey propertyKey}.
     *
     * The unique identifier of the chart item that reflects the name of the data property in the resulting
     * data set.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @since 1.115
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setPropertyKey(
      /**
       * New value for property `propertyKey`
       */
      sPropertyKey: string
    ): this;
    /**
     * Sets a new value for property {@link #getRole role}.
     *
     * Specifies the role of the item for the chart (category, axis1...). This is specific for the used chart
     * library.
     *  **Note:** This property must not be changed after initialization.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setRole(
      /**
       * New value for property `role`
       */
      sRole: string
    ): this;
    /**
     * Sets a new value for property {@link #getType type}.
     *
     * Specifies the type of the item for the chart (groupable and aggregatable). This is specific for the used
     * chart library.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setType(
      /**
       * New value for property `type`
       */
      sType?: string
    ): this;
  }
  /**
   * Describes the settings that can be provided to the Item constructor.
   *
   * @experimental (since 1.88)
   */
  export interface $ItemSettings extends $ElementSettings {
    /**
     * The unique identifier of the chart item that reflects the name of the data property in the resulting
     * data set.
     *
     * @deprecated (since 1.115) - Please use `propertyKey` instead.
     */
    name?: string | PropertyBindingInfo;

    /**
     * The unique identifier of the chart item that reflects the name of the data property in the resulting
     * data set.
     *
     * @since 1.115
     */
    propertyKey?: string | PropertyBindingInfo;

    /**
     * Label for the item, either as a string literal or by a pointer, using the binding to some property containing
     * the label.
     */
    label?: string | PropertyBindingInfo;

    /**
     * Specifies the type of the item for the chart (groupable and aggregatable). This is specific for the used
     * chart library.
     */
    type?: string | PropertyBindingInfo;

    /**
     * Specifies the role of the item for the chart (category, axis1...). This is specific for the used chart
     * library.
     *  **Note:** This property must not be changed after initialization.
     */
    role?: string | PropertyBindingInfo;
  }
}

declare module "sap/ui/mdc/chart/SelectionDetailsActions" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import Item from "sap/ui/core/Item";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * The `SelectionDetailsActions` is used to provide additional functionality to the Details popover.
   *
   * @since 1.88
   * @experimental (since 1.88)
   */
  export default class SelectionDetailsActions extends UI5Element {
    /**
     * Constructor for a new SelectionDetailsActions.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SelectionDetailsActionsSettings
    );
    /**
     * Constructor for a new SelectionDetailsActions.
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
      mSettings?: $SelectionDetailsActionsSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.chart.SelectionDetailsActions with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
      oClassInfo?: sap.ClassInfo<T, SelectionDetailsActions>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.chart.SelectionDetailsActions.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some actionGroup to the aggregation {@link #getActionGroups actionGroups}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addActionGroup(
      /**
       * The actionGroup to add; if empty, nothing is inserted
       */
      oActionGroup: Item
    ): this;
    /**
     * Adds some detailsAction to the aggregation {@link #getDetailsActions detailsActions}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addDetailsAction(
      /**
       * The detailsAction to add; if empty, nothing is inserted
       */
      oDetailsAction: Item
    ): this;
    /**
     * Adds some detailsItemAction to the aggregation {@link #getDetailsItemActions detailsItemActions}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addDetailsItemAction(
      /**
       * The detailsItemAction to add; if empty, nothing is inserted
       */
      oDetailsItemAction: Item
    ): this;
    /**
     * Destroys all the actionGroups in the aggregation {@link #getActionGroups actionGroups}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyActionGroups(): this;
    /**
     * Destroys all the detailsActions in the aggregation {@link #getDetailsActions detailsActions}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyDetailsActions(): this;
    /**
     * Destroys all the detailsItemActions in the aggregation {@link #getDetailsItemActions detailsItemActions}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyDetailsItemActions(): this;
    /**
     * Gets content of aggregation {@link #getActionGroups actionGroups}.
     *
     * Action `item` shown in the Groups area of the details.
     */
    getActionGroups(): Item[];
    /**
     * Gets content of aggregation {@link #getDetailsActions detailsActions}.
     *
     * Action `item` shown in the Details area of the details.
     */
    getDetailsActions(): Item[];
    /**
     * Gets content of aggregation {@link #getDetailsItemActions detailsItemActions}.
     *
     * Action `item` shown in the Items area of the details popover.
     */
    getDetailsItemActions(): Item[];
    /**
     * Checks for the provided `sap.ui.core.Item` in the aggregation {@link #getActionGroups actionGroups}.
     * and returns its index if found or -1 otherwise.
     *
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfActionGroup(
      /**
       * The actionGroup whose index is looked for
       */
      oActionGroup: Item
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Item` in the aggregation {@link #getDetailsActions detailsActions}.
     * and returns its index if found or -1 otherwise.
     *
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfDetailsAction(
      /**
       * The detailsAction whose index is looked for
       */
      oDetailsAction: Item
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Item` in the aggregation {@link #getDetailsItemActions detailsItemActions}.
     * and returns its index if found or -1 otherwise.
     *
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfDetailsItemAction(
      /**
       * The detailsItemAction whose index is looked for
       */
      oDetailsItemAction: Item
    ): int;
    /**
     * Inserts a actionGroup into the aggregation {@link #getActionGroups actionGroups}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertActionGroup(
      /**
       * The actionGroup to insert; if empty, nothing is inserted
       */
      oActionGroup: Item,
      /**
       * The `0`-based index the actionGroup should be inserted at; for a negative value of `iIndex`, the actionGroup
       * is inserted at position 0; for a value greater than the current size of the aggregation, the actionGroup
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a detailsAction into the aggregation {@link #getDetailsActions detailsActions}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertDetailsAction(
      /**
       * The detailsAction to insert; if empty, nothing is inserted
       */
      oDetailsAction: Item,
      /**
       * The `0`-based index the detailsAction should be inserted at; for a negative value of `iIndex`, the detailsAction
       * is inserted at position 0; for a value greater than the current size of the aggregation, the detailsAction
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a detailsItemAction into the aggregation {@link #getDetailsItemActions detailsItemActions}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertDetailsItemAction(
      /**
       * The detailsItemAction to insert; if empty, nothing is inserted
       */
      oDetailsItemAction: Item,
      /**
       * The `0`-based index the detailsItemAction should be inserted at; for a negative value of `iIndex`, the
       * detailsItemAction is inserted at position 0; for a value greater than the current size of the aggregation,
       * the detailsItemAction is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes a actionGroup from the aggregation {@link #getActionGroups actionGroups}.
     *
     *
     * @returns The removed actionGroup or `null`
     */
    removeActionGroup(
      /**
       * The actionGroup to remove or its index or id
       */
      vActionGroup: int | string | Item
    ): Item | null;
    /**
     * Removes all the controls from the aggregation {@link #getActionGroups actionGroups}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllActionGroups(): Item[];
    /**
     * Removes all the controls from the aggregation {@link #getDetailsActions detailsActions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllDetailsActions(): Item[];
    /**
     * Removes all the controls from the aggregation {@link #getDetailsItemActions detailsItemActions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllDetailsItemActions(): Item[];
    /**
     * Removes a detailsAction from the aggregation {@link #getDetailsActions detailsActions}.
     *
     *
     * @returns The removed detailsAction or `null`
     */
    removeDetailsAction(
      /**
       * The detailsAction to remove or its index or id
       */
      vDetailsAction: int | string | Item
    ): Item | null;
    /**
     * Removes a detailsItemAction from the aggregation {@link #getDetailsItemActions detailsItemActions}.
     *
     *
     * @returns The removed detailsItemAction or `null`
     */
    removeDetailsItemAction(
      /**
       * The detailsItemAction to remove or its index or id
       */
      vDetailsItemAction: int | string | Item
    ): Item | null;
  }
  /**
   * Describes the settings that can be provided to the SelectionDetailsActions constructor.
   *
   * @experimental (since 1.88)
   */
  export interface $SelectionDetailsActionsSettings extends $ElementSettings {
    /**
     * Action `item` shown in the Items area of the details popover.
     */
    detailsItemActions?: Item[] | Item | AggregationBindingInfo | `{${string}}`;

    /**
     * Action `item` shown in the Details area of the details.
     */
    detailsActions?: Item[] | Item | AggregationBindingInfo | `{${string}}`;

    /**
     * Action `item` shown in the Groups area of the details.
     */
    actionGroups?: Item[] | Item | AggregationBindingInfo | `{${string}}`;
  }
}

declare module "sap/ui/mdc/condition/Condition" {
  import ConditionValidated from "sap/ui/mdc/enums/ConditionValidated";

  /**
   * Utilities to create conditions to be used in {@link sap.ui.mdc.FilterField FilterField}, {@link sap.ui.mdc.FilterBar FilterBar},
   * or {@link sap.ui.mdc.condition.ConditionModel ConditionModel}.
   *
   * @since 1.61.0
   */
  interface Condition {
    /**
     * Creates a condition object.
     *
     *
     * @returns The new condition object with the given operator and values
     */
    createCondition(
      /**
       * Operator for the condition. The standard operators can are mentioned in {@link sap.ui.mdc.enums.OperatorName OperatorName}.
       */
      sOperator: string,
      /**
       * Array of values for the condition
       */
      aValues: any[],
      /**
       * In parameters of the condition. (Do not use it for new conditions, use payload instead.)
       */
      oInParameters: object,
      /**
       * Out parameters of the condition. (Do not use it for new conditions, use payload instead.)
       */
      oOutParameters: object,
      /**
       * If set to `ConditionValidated.Validated`, the condition is validated (by the field help) and not shown
       * in the {@link sap.ui.mdc.valuehelp.content.Conditions Conditions} content
       */
      sValidated: ConditionValidated | keyof typeof ConditionValidated,
      /**
       * Payload of the condition
       */
      oPayload?: object
    ): ConditionObject;
    /**
     * Creates a condition object.
     *
     *
     * @returns The new condition object with the given operator and values
     */
    createCondition(
      /**
       * Operator for the condition. The standard operators can are mentioned in {@link sap.ui.mdc.enums.OperatorName OperatorName}.
       */
      sOperator: string,
      /**
       * Array of values for the condition
       */
      aValues: any[],
      /**
       * In parameters of the condition. (Do not use it for new conditions, use payload instead.)
       */
      oInParameters: object,
      /**
       * If set to `ConditionValidated.Validated`, the condition is validated (by the field help) and not shown
       * in the {@link sap.ui.mdc.valuehelp.content.Conditions Conditions} content
       */
      sValidated: ConditionValidated | keyof typeof ConditionValidated,
      /**
       * Payload of the condition
       */
      oPayload?: object
    ): ConditionObject;
    /**
     * Creates a condition object.
     *
     *
     * @returns The new condition object with the given operator and values
     */
    createCondition(
      /**
       * Operator for the condition. The standard operators can are mentioned in {@link sap.ui.mdc.enums.OperatorName OperatorName}.
       */
      sOperator: string,
      /**
       * Array of values for the condition
       */
      aValues: any[],
      /**
       * Out parameters of the condition. (Do not use it for new conditions, use payload instead.)
       */
      oOutParameters: object,
      /**
       * If set to `ConditionValidated.Validated`, the condition is validated (by the field help) and not shown
       * in the {@link sap.ui.mdc.valuehelp.content.Conditions Conditions} content
       */
      sValidated: ConditionValidated | keyof typeof ConditionValidated,
      /**
       * Payload of the condition
       */
      oPayload?: object
    ): ConditionObject;
    /**
     * Creates a condition object.
     *
     *
     * @returns The new condition object with the given operator and values
     */
    createCondition(
      /**
       * Operator for the condition. The standard operators can are mentioned in {@link sap.ui.mdc.enums.OperatorName OperatorName}.
       */
      sOperator: string,
      /**
       * Array of values for the condition
       */
      aValues: any[],
      /**
       * If set to `ConditionValidated.Validated`, the condition is validated (by the field help) and not shown
       * in the {@link sap.ui.mdc.valuehelp.content.Conditions Conditions} content
       */
      sValidated: ConditionValidated | keyof typeof ConditionValidated,
      /**
       * Payload of the condition
       */
      oPayload?: object
    ): ConditionObject;
    /**
     * Creates a condition instance for a condition representing a item chosen from the value help.
     *
     * This is a "equal to" (EQ) condition with key and description. It is used for entries selected in the
     * field help and for everything entered in the {@link sap.ui.mdc.Field Field} control.
     *
     *
     * @returns The new condition object with the EQ operator along with `sKey` and `sDescription` as `aValues`
     */
    createItemCondition(
      /**
       * Operator for the condition
       */
      sKey: string,
      /**
       * Description of the operator
       */
      sDescription: string,
      /**
       * In parameters of the condition. (Do not use it for new conditions, use payload instead.)
       */
      oInParameters?: object,
      /**
       * Out parameters of the condition. (Do not use it for new conditions, use payload instead.)
       */
      oOutParameters?: object,
      /**
       * Payload of the condition
       */
      oPayload?: object
    ): ConditionObject;
  }
  const Condition: Condition;
  export default Condition;

  /**
   * Condition object type defining the structure of a condition.
   */
  export type ConditionObject = {
    /**
     * Operator of the condition. The standard operators can are mentioned in {@link sap.ui.mdc.enums.OperatorName OperatorName}.
     */
    operator: string;
    /**
     * Array of values of the condition. Depending on the `operator`, this contains one or more entries. The
     * entries are sored in internal format regarding the used data type.
     */
    values: any[];
    /**
     * In parameters of the condition. For each field path, a value is stored. (It is obsolete and only filled
     * for conditions stored on old user-variants.)
     */
    inParameters?: object;
    /**
     * Out parameters of the condition. For each field path, a value is stored. (It is obsolete and only filled
     * for conditions stored on old user-variants.)
     */
    outParameters?: object;
    /**
     * If set, the condition is empty (used as initially empty condition in {@link sap.ui.mdc.valuehelp.content.Conditions Conditions})
     */
    isEmpty?: boolean;
    /**
     * If set to `ConditionValidated.Validated`, the condition is validated (by the value help) and not shown
     * in the {@link sap.ui.mdc.valuehelp.content.Conditions Conditions} content
     */
    validated: ConditionValidated | keyof typeof ConditionValidated;
    /**
     * Payload of the condition. Set by application. Data needs to be stringified. (as stored and loaded in
     * variants)
     */
    payload?: object;
  };
}

declare module "sap/ui/mdc/condition/FilterOperatorUtil" {
  import Operator from "sap/ui/mdc/condition/Operator";

  import BaseType from "sap/ui/mdc/enums/BaseType";

  import OperatorName from "sap/ui/mdc/enums/OperatorName";

  /**
   * Utilities to handle {@link sap.ui.mdc.condition.Operator Operators} and {@link sap.ui.mdc.condition.ConditionObject conditions}.
   *
   * @since 1.73.0
   */
  interface FilterOperatorUtil {
    /**
     * Adds an operator to the list of known operators.
     */
    addOperator(
      /**
       * Operator
       */
      oOperator: Operator
    ): void;
    /**
     * Adds an operator to the list of valid operators for a type.
     */
    addOperatorForType(
      /**
       * Basic type
       */
      sType: BaseType | keyof typeof BaseType,
      /**
       * The operator instance or operator name
       */
      vOperator: Operator | string
    ): void;
    /**
     * Adds an array of operators to the list of known operators.
     */
    addOperators(
      /**
       * Array of operators
       */
      aOperators: Operator[]
    ): void;
    /**
     * Returns the default operator for the given basic type.
     *
     *
     * @returns the default operator for the given type
     */
    getDefaultOperator(
      /**
       * Basic type
       */
      sType: BaseType | keyof typeof BaseType
    ): Operator;
    /**
     * Returns the operator object for the given operator name.
     *
     *
     * @returns the operator object, or undefined if the operator with the requested name does not
     * exist
     */
    getOperator(
      /**
       * Name of the operator
       */
      sOperator: (OperatorName | keyof typeof OperatorName) | string
    ): Operator | undefined;
    /**
     * Returns all available default operators for the given type.
     *
     *
     * @returns an array with the supported filter operator names
     */
    getOperatorsForType(
      /**
       * Basic type
       */
      sType: BaseType | keyof typeof BaseType
    ): string[];
    /**
     * Inserts an operator into the list of valid operators for a type.
     */
    insertOperatorForType(
      /**
       * Basic type
       */
      sType: BaseType | keyof typeof BaseType,
      /**
       * The operator instance or operator name
       */
      vOperator: Operator | string,
      /**
       * Index of the operator in the list of operators for this type
       */
      idx: int
    ): void;
    /**
     * Removes an operator from the list of known operators.
     */
    removeOperator(
      /**
       * The operator instance or operator name
       */
      vOperator: Operator | string
    ): void;
    /**
     * Removes an operator from the list of valid operators for a type.
     */
    removeOperatorForType(
      /**
       * Basic type
       */
      sType: BaseType | keyof typeof BaseType,
      /**
       * The operator instance or operator name
       */
      vOperator: Operator | string
    ): void;
    /**
     * Removes all given operators from the list of known operators.
     */
    removeOperators(
      /**
       * Array of operators
       *
       * **Note**: `aOperators` can be the name of an {@link sap.ui.mdc.condition.Operator Operator}, the instance
       * itself, or multiple operators inside an array.
       */
      aOperators: Operator[]
    ): void;
    /**
     * Sets the default operator for the list of operators for a type.
     */
    setDefaultOperatorForType(
      /**
       * Basic type
       */
      sType: BaseType | keyof typeof BaseType,
      /**
       * The default operator instance or default operator name
       *
       * **Note**: `vDefaultOperator` must exist as a valid operator for the type.
       */
      vDefaultOperator: Operator | string
    ): void;
    /**
     * Adds operators to the list of valid operators for a type.
     */
    setOperatorsForType(
      /**
       * Basic type
       */
      sType: BaseType | keyof typeof BaseType,
      /**
       * Operators
       */
      aOperators: Operator[],
      /**
       * The default operator instance or default operator name
       *
       * **Note**: `aOperators` can be the name of an {@link sap.ui.mdc.condition.Operator Operator}, the instance
       * itself, or multiple operators inside an array. **Note**: `vDefaultOperator` must exist as a valid operator
       * for the type.
       */
      vDefaultOperator: Operator | string
    ): void;
  }
  const FilterOperatorUtil: FilterOperatorUtil;
  export default FilterOperatorUtil;
}

declare module "sap/ui/mdc/condition/Operator" {
  import BaseObject from "sap/ui/base/Object";

  import Metadata from "sap/ui/base/Metadata";

  import OperatorOverwrite from "sap/ui/mdc/enums/OperatorOverwrite";

  /**
   * Creates an `sap.ui.mdc.condition.Operator` object. This is used in the {@link sap.ui.mdc.FilterField FilterField }
   * control to define which filter operators are supported.
   *
   * If a function or property is initial, the default implementation is used.
   *
   * @since 1.73.0
   */
  export default class Operator extends BaseObject {
    constructor(
      /**
       * Properties of the operator
       */
      oConfiguration: {
        /**
         * Name of the operator used in the condition
         */
        name: string;
        /**
         * Alias names based on `BaseType`, used to map to `DynamicDateOption` if `DynamicDateRange` is used
         */
        alias?: object;
        /**
         * The operator's default filter operator that is created as defined in {@link sap.ui.model.FilterOperator FilterOperator}
         */
        filterOperator: string;
        /**
         * The string representation of the regular expression that is used by the operator to parse a value to
         * eliminate the operator and get the data string. A placeholder that refers to the translated tokenText
         * can be used. `#tokenText#` refers to the `oConfiguration.tokenText` property if given.
         */
        tokenParse: string;
        /**
         * The string representation of the regular expression that is used to test if the given text meets the
         * operator. A placeholder that refers to the translated tokenText can be used. `#tokenText#` refers to
         * the `oConfiguration.tokenText` property if given.
         * If not provided, the `tokenParse` regular expression is used.
         */
        tokenTest?: string;
        /**
         * The string representation that is used by the operator to format a value into an output string. For the
         * value placeholder `{0}` and `{1}` are used. A placeholder that refers to the translated tokenText can
         * be used. `#tokenText#` refers to the `oConfiguration.tokenText` property if given.
         */
        tokenFormat: string;
        /**
         * Array of type to be used. The length of the array defines the number of values that need to be entered
         * with the operator.
         *  If set to {@link sap.ui.mdc.enums.OperatorValueType.Self OperatorValueType.Self}, the `Type` of the
         * `Field` or `FilterField` using the `Operator` is used.
         *  If set to {@link sap.ui.mdc.enums.OperatorValueType.SelfNoParse OperatorValueType.SelfNoParse} same
         * as {@link sap.ui.mdc.enums.OperatorValueType.Self OperatorValueType.Self}, except that the input value
         * parsing will not be called.
         *  If set to {@link sap.ui.mdc.enums.OperatorValueType.Static OperatorValueType.Static}, a simple string
         * type is used to display static text.
         *  If set to a name of a data type, an instance of this data type is used.
         *  If set to an object with structure {@link sap.ui.mdc.condition.ValueType}, an instance of the corresponding
         * data type is used. The type given via `name` must be loaded by the application.
         *  If set to `null`, the corresponding value is interpreted as a description that holds no required data.
         * To display this value, the additional `Type` of the `Field` or `FilterField` using the `Operator` is
         * used.
         */
        valueTypes: string[] | object[];
        /**
         * Array of type parameters regexp
         */
        paramTypes?: string[];
        /**
         * String representation of the operator as a long text.
         *  If longText is not given , it is looked up in the resource bundle of the `sap.ui.mdc` library by the
         * key `operators.{oConfiguration.name}.longText`
         */
        longText?: string;
        /**
         * String representation of the operator as a short text.
         *  If the token text is not given, it is looked up in the resource bundle of the `sap.ui.mdc` library by
         * the key `operators.{oConfiguration.name}.tokenText`
         */
        tokenText?: string;
        /**
         * Pattern how different {@link sap.ui.mdc.enums.FieldDisplay displayFormats} are rendered
         */
        displayFormats?: object;
        /**
         * Function to format condition
         */
        format?: Function;
        /**
         * Function to parse input into condition
         */
        parse?: Function;
        /**
         * Function to validate condition
         */
        validate?: Function;
        /**
         * Function create filter for a condition
         */
        getModelFilter?: Function;
        /**
         * Function to check if condition is empty
         */
        isEmpty?: Function;
        /**
         * Function to create a control to be used in {@link sap.ui.mdc.valuehelp.content.Conditions Conditions}
         */
        createControl?: Function;
        /**
         * Function to get the value for condition compare
         */
        getCheckValue?: Function;
        /**
         * Function to get the real values without operator symbol
         */
        getValues?: Function;
        /**
         * Function to check if a condition is validated (sets the `validated` property)
         */
        checkValidated?: Function;
        /**
         * If set, the operator is handled as exclude filter when creating the filters of all conditions
         */
        exclude?: boolean;
        /**
         * If set, the user input for this operator needs to be validated using a field help
         */
        validateInput?: boolean;
        /**
         * additionalInfo text for the operator. Will be shown in the operator suggest as second column. If not
         * used (undefined) the Include or Exclude information of the operator is used.
         */
        additionalInfo?: string;
        /**
         * Additional group settings for the operator. Will be used by the `DynamicDateRange`. If not used (undefined),
         * the operators will be added to the include and exclude groups.
         */
        group?: {
          /**
           * Group ID for the operator.
           */
          id: string;
          /**
           * Group title for the operator. When used a new group with this title will be added.
           */
          text?: string;
        };
        /**
         * Function to determine the text copied into clipboard The following groups are available for the `DynamicDateRange`
         * control:
         *
         * 	 - 1 - Single Dates
         * 	 - 2 - Date Ranges
         * 	 - 3 - Weeks
         * 	 - 4 - Months
         * 	 - 5 - Quarters
         * 	 - 6 - Years  See {@link sap.m.DynamicDateRangeGroups DynamicDateRangeGroups}.
         *  This only works for `FilterFields` with custom operators if `maxConditions=1` and no `valueHelp` is
         * assigned to the `FilterField`. Example:
         *  group: undefined - if group is not specified; default behavior include/exclude group with id 1 and 2
         * will be created
         *  group: {id : 1} - adds the operator to existing group 1 'Single Dates'
         *  group: {id : 2, text: "new group"} - inserts a new group with id 2. Existing group 2 will be shifted
         * to 3, 4....
         *  group: {id : 10, text: "new group at the end"} - adds a new group with id 10 and text "new group as
         * the end" to the end of all groups
         */
        getTextForCopy?: Function;
      }
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.condition.Operator with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Operator>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.condition.Operator.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): Metadata;
    /**
     * Sets an overwrite function for some of the `operator` functions.
     *
     *
     * @returns the original function
     */
    overwrite(
      /**
       * name of the function which will be overwritten
       */
      sMethodName: OperatorOverwrite | keyof typeof OperatorOverwrite,
      /**
       * new callback function
       */
      fnOverwrite: Function
    ): Function;
  }
  /**
   * Object type defining the structure of a `ValueType` for a {@link sap.ui.mdc.condition.Operator Operator}.
   */
  export type ValueType = {
    /**
     * name of the data type
     */
    name: string;
    /**
     * `formatOptions` of the data type
     */
    formatOptions: object;
    /**
     * `constraints` of the data type
     */
    constraints: object;
  };
}

declare module "sap/ui/mdc/condition/RangeOperator" {
  import Operator from "sap/ui/mdc/condition/Operator";

  import Metadata from "sap/ui/base/Metadata";

  /**
   * Creates a `sap.ui.mdc.condition.RangeOperator` object. This is used in the {@link sap.ui.mdc.FilterField FilterField }
   * control to define which filter operators are supported.
   *
   * If a function or property is initial, the default implementation is used.
   *
   * @since 1.74.0
   */
  export default class RangeOperator extends Operator {
    constructor(
      /**
       * Included all parameters of {@link sap.ui.mdc.condition.Operator Operator} and adds some special ones
       */
      oConfiguration: {
        /**
         * additional array of labels for the values of the operator. Will be shown as placeholder text or label
         * on the value fields.
         */
        label?: string;
        /**
         * function to calculate the date range of the operation. the function returns an array of UniversalDates.
         */
        calcRange?: Function;
        /**
         * function to format the date range.
         */
        formatRange?: Function;
        /**
         * Array of values for the defaults of `RangeOperators` parameter. This can be a function, which returns
         * the array of values. If not used the default for the values is 1.
         */
        defaultValues?: int[] | Function;
      }
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.condition.RangeOperator with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.condition.Operator.extend}.
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
      oClassInfo?: sap.ClassInfo<T, RangeOperator>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.condition.RangeOperator.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): Metadata;
  }
}

declare module "sap/ui/mdc/Control" {
  import {
    default as Control1,
    $ControlSettings as $ControlSettings1,
  } from "sap/ui/core/Control";

  import BaseDelegate from "sap/ui/mdc/BaseDelegate";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import TypeMap from "sap/ui/mdc/util/TypeMap";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * The base class for controls in the `sap.ui.mdc` library providing delegate-related functionality (see
   * {@link sap.ui.mdc.mixin.DelegateMixin}).
   *
   * @since 1.61
   */
  export default abstract class Control extends Control1 {
    /**
     * Creates and initializes a new control with the given `sId` and settings.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Object with initial settings for the new control
       */
      mSettings?: $ControlSettings
    );
    /**
     * Creates and initializes a new control with the given `sId` and settings.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Optional ID for the new control; generated automatically if no non-empty ID is given **Note:** This can
       * be omitted, no matter whether `mSettings` is given.
       */
      sId?: string,
      /**
       * Object with initial settings for the new control
       */
      mSettings?: $ControlSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.Control with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Control>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.Control.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Provides access to the delegate initialization `Promise`. **Note:** `initControlDelegate` must be called
     * to start the delegate initialization
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Returns a `Promise` reflecting the delegate initialization
     */
    awaitControlDelegate(): Promise<BaseDelegate>;
    /**
     * Provides access to the property helper initialization `Promise`.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Returns a `Promise` that resolves with the property helper
     */
    awaitPropertyHelper(): Promise</* was: sap.ui.mdc.util.PropertyHelper */ any>;
    /**
     * Finalize the propertyHelper using the control's delegate.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Returns a `Promise` that resolves with the property helper
     */
    finalizePropertyHelper(
      /**
       * optional set of initial properties
       */
      aProperties?: object[],
      /**
       * flag for mark the propertyHelper as final
       */
      bFinal?: object[]
    ): Promise</* was: sap.ui.mdc.util.PropertyHelper */ any>;
    /**
     * Returns the delegate instance, if available.
     *
     *
     * @returns `typeUtil` made available by a delegate module
     */
    getControlDelegate(): BaseDelegate;
    /**
     * Returns the payload object set for the delegate property.
     *
     *
     * @returns Payload set for delegate property
     */
    getPayload(): object;
    /**
     * Returns the property helper instance, if available.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns The property helper
     */
    getPropertyHelper(): /* was: sap.ui.mdc.util.PropertyHelper */ any;
    /**
     * Returns the `TypeMap` made available by a delegate module.
     *
     *
     * @returns `TypeMap` object
     */
    getTypeMap(): TypeMap;
    /**
     * Returns the `typeUtil` made available by a delegate module.
     *
     * @deprecated (since 1.115.0) - please see {@link #getTypeMap}
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns `TypeUtil` object
     */
    getTypeUtil(): /* was: sap.ui.mdc.util.TypeUtil */ any | TypeMap;
    /**
     * Loads and initializes the delegate module related to the enhanced control.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Returns a `Promise` that resolves the delegate module, if available
     */
    initControlDelegate(
      /**
       * Preloaded delegate module
       */
      oPreloadedModule?: BaseDelegate
    ): Promise<BaseDelegate>;
    /**
     * Loads and initializes the property helper related to the enhanced control.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Returns a `Promise` that resolves with the property helper
     */
    initPropertyHelper(
      /**
       * Custom property helper class
       */
      PropertyHelperClass?: /* was: sap.ui.mdc.util.PropertyHelper */ any,
      /**
       * optional set of initial properties
       */
      aProperties?: object[],
      /**
       * flag for mark the propertyHelper as final
       */
      bFinal?: object[]
    ): Promise</* was: sap.ui.mdc.util.PropertyHelper */ any>;
    /**
     * Indicates if the control's propertyHelper already contains all available properties
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Returns a `boolean` indicating the propertyHelper's final state
     */
    isPropertyHelperFinal(): boolean;
  }
  /**
   * Describes the settings that can be provided to the Control constructor.
   */
  export interface $ControlSettings extends $ControlSettings1 {
    /**
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/BaseDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     */
    delegate?: object | PropertyBindingInfo | `{${string}}`;
  }
}

declare module "sap/ui/mdc/Element" {
  import {
    default as UI5Element,
    $ElementSettings as $ElementSettings1,
  } from "sap/ui/core/Element";

  import BaseDelegate from "sap/ui/mdc/BaseDelegate";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import TypeMap from "sap/ui/mdc/util/TypeMap";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * The base class for composite elements in the `sap.ui.mdc` library providing delegate-related functionality
   * (see {@link sap.ui.mdc.mixin.DelegateMixin}).
   *
   * @since 1.74
   */
  export default abstract class Element1 extends UI5Element {
    /**
     * Creates and initializes a new element with the given `sId` and settings.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Object with initial settings for the new control
       */
      mSettings?: $ElementSettings
    );
    /**
     * Creates and initializes a new element with the given `sId` and settings.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Optional ID for the new element; generated automatically if no non-empty ID is given **Note:** This can
       * be omitted, no matter whether `mSettings` is given.
       */
      sId?: string,
      /**
       * Object with initial settings for the new control
       */
      mSettings?: $ElementSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.Element with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Element1>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.Element.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Provides access to the delegate initialization `Promise`. **Note:** `initControlDelegate` must be called
     * to start the delegate initialization
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Returns a `Promise` reflecting the delegate initialization
     */
    awaitControlDelegate(): Promise<BaseDelegate>;
    /**
     * Provides access to the property helper initialization `Promise`.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Returns a `Promise` that resolves with the property helper
     */
    awaitPropertyHelper(): Promise</* was: sap.ui.mdc.util.PropertyHelper */ any>;
    /**
     * Finalize the propertyHelper using the control's delegate.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Returns a `Promise` that resolves with the property helper
     */
    finalizePropertyHelper(
      /**
       * optional set of initial properties
       */
      aProperties?: object[],
      /**
       * flag for mark the propertyHelper as final
       */
      bFinal?: object[]
    ): Promise</* was: sap.ui.mdc.util.PropertyHelper */ any>;
    /**
     * Returns the delegate instance, if available.
     *
     *
     * @returns `typeUtil` made available by a delegate module
     */
    getControlDelegate(): BaseDelegate;
    /**
     * Returns the payload object set for the delegate property.
     *
     *
     * @returns Payload set for delegate property
     */
    getPayload(): object;
    /**
     * Returns the property helper instance, if available.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns The property helper
     */
    getPropertyHelper(): /* was: sap.ui.mdc.util.PropertyHelper */ any;
    /**
     * Returns the `TypeMap` made available by a delegate module.
     *
     *
     * @returns `TypeMap` object
     */
    getTypeMap(): TypeMap;
    /**
     * Returns the `typeUtil` made available by a delegate module.
     *
     * @deprecated (since 1.115.0) - please see {@link #getTypeMap}
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns `TypeUtil` object
     */
    getTypeUtil(): /* was: sap.ui.mdc.util.TypeUtil */ any | TypeMap;
    /**
     * Loads and initializes the delegate module related to the enhanced control.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Returns a `Promise` that resolves the delegate module, if available
     */
    initControlDelegate(
      /**
       * Preloaded delegate module
       */
      oPreloadedModule?: BaseDelegate
    ): Promise<BaseDelegate>;
    /**
     * Loads and initializes the property helper related to the enhanced control.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Returns a `Promise` that resolves with the property helper
     */
    initPropertyHelper(
      /**
       * Custom property helper class
       */
      PropertyHelperClass?: /* was: sap.ui.mdc.util.PropertyHelper */ any,
      /**
       * optional set of initial properties
       */
      aProperties?: object[],
      /**
       * flag for mark the propertyHelper as final
       */
      bFinal?: object[]
    ): Promise</* was: sap.ui.mdc.util.PropertyHelper */ any>;
    /**
     * Indicates if the control's propertyHelper already contains all available properties
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Returns a `boolean` indicating the propertyHelper's final state
     */
    isPropertyHelperFinal(): boolean;
  }
  /**
   * Describes the settings that can be provided to the Element constructor.
   */
  export interface $ElementSettings extends $ElementSettings1 {
    /**
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/BaseDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     */
    delegate?: object | PropertyBindingInfo | `{${string}}`;
  }
}

declare module "sap/ui/mdc/enums/ActionToolbarActionAlignment" {
  /**
   * Defines the alignment of the `ActionToolbarAction` action control.
   *
   * @since 1.115
   * @experimental (since 1.115)
   */
  enum ActionToolbarActionAlignment {
    /**
     * Align to the beginning
     */
    Begin = "Begin",
    /**
     * Align to the end
     */
    End = "End",
  }
  export default ActionToolbarActionAlignment;
}

declare module "sap/ui/mdc/enums/BaseType" {
  /**
   * Enumeration of the possible basic data types
   *
   * In {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.MultiValueField MultiValueField}, and {@link sap.ui.mdc.FilterField FilterField},
   * different data types can be used. These data types might be model-dependent. To handle them model-independently,
   * basic types are used internally.
   *
   * @since 1.115
   */
  enum BaseType {
    /**
     * Data type represents a Boolean
     */
    Boolean = "Boolean",
    /**
     * Data type represents a date
     */
    Date = "Date",
    /**
     * Data type represents a date with time
     */
    DateTime = "DateTime",
    /**
     * Data type represents a number. (This can be integer, float or any other numeric type.)
     */
    Numeric = "Numeric",
    /**
     * Data type represents a string
     */
    String = "String",
    /**
     * Data type represents a time
     */
    Time = "Time",
    /**
     * Data type represents a unit. A composite type with a number and a unit part is used.
     */
    Unit = "Unit",
  }
  export default BaseType;
}

declare module "sap/ui/mdc/enums/ChartP13nMode" {
  /**
   * Defines the personalization mode of the chart.
   *
   * @since 1.115
   * @experimental (since 1.115)
   */
  enum ChartP13nMode {
    /**
     * Filter personalization is enabled.
     */
    Filter = "Filter",
    /**
     * Item personalization is enabled.
     */
    Item = "Item",
    /**
     * Sort personalization is enabled.
     */
    Sort = "Sort",
    /**
     * Chart type personalization is enabled.
     */
    Type = "Type",
  }
  export default ChartP13nMode;
}

declare module "sap/ui/mdc/enums/ChartToolbarActionType" {
  /**
   * Defines the types of chart actions in the toolbar.
   *  Can be used to remove some of the default `ToolbarAction`. For more information, see {@link sap.ui.mdc.Chart#ignoreToolbarActions}.
   *
   * @since 1.115
   * @experimental (since 1.115)
   */
  enum ChartToolbarActionType {
    /**
     * Drill-down and drill-up action.
     */
    DrillDownUp = "DrillDownUp",
    /**
     * Legend action.
     */
    Legend = "Legend",
    /**
     * Zoom-in and zoom-out action.
     */
    ZoomInOut = "ZoomInOut",
  }
  export default ChartToolbarActionType;
}

declare module "sap/ui/mdc/enums/ConditionValidated" {
  /**
   * Enumeration of the validated state of conditions
   *
   * If a `Condition` is chosen from a value help or validated against a value help it is set to be validated.
   * In this case the corresponding item in the value help is shown as selected.
   *
   * If the validated state of the `Condition` is undefined this means it is not defined if it is validated
   * or not.
   *
   * @since 1.115
   */
  enum ConditionValidated {
    /**
     * Condition is not validated
     */
    NotValidated = "NotValidated",
    /**
     * Condition is validated
     */
    Validated = "Validated",
  }
  export default ConditionValidated;
}

declare module "sap/ui/mdc/enums/ContentMode" {
  /**
   * Defines in which mode the content of a {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.FilterField FilterField }
   * or {@link sap.ui.mdc.MultiValueField MultiValueField} is rendered.
   *
   * @since 1.115
   */
  enum ContentMode {}
  export default ContentMode;
}

declare module "sap/ui/mdc/enums/FieldDisplay" {
  /**
   * Defines the output of a {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.FilterField FilterField}, or
   * {@link sap.ui.mdc.MultiValueField MultiValueField} control.
   *
   * For the {@link sap.ui.mdc.Field Field} control, this enumeration defines how the `value` and `additionalValue`
   * properties are formatted.
   *
   * For the {@link sap.ui.mdc.MultiValueField MultiValueField} control, this enumeration defines how the
   * `key` and `description` properties of the items are formatted.
   *
   * For the {@link sap.ui.mdc.FilterField FilterField} control, this enumeration defines how key and description
   * of equal conditions are formatted.
   *
   * @since 1.115
   */
  enum FieldDisplay {
    /**
     * Only the description is displayed
     */
    Description = "Description",
    /**
     * The description and the value (key) are displayed in the field. The value (key) is displayed after the
     * description in brackets.
     */
    DescriptionValue = "DescriptionValue",
    /**
     * Only the value (key) is displayed
     */
    Value = "Value",
    /**
     * The value (key) and the description are displayed in the field. The description is displayed after the
     * value (key) in brackets.
     */
    ValueDescription = "ValueDescription",
  }
  export default FieldDisplay;
}

declare module "sap/ui/mdc/enums/FieldEditMode" {
  /**
   * Defines in what mode a {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.FilterField FilterField} or
   * {@link sap.ui.mdc.MultiValueField MultiValueField} is rendered.
   *
   * @since 1.115
   */
  enum FieldEditMode {
    /**
     * {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.FilterField FilterField} or {@link sap.ui.mdc.MultiValueField MultiValueField }
     * is rendered in disabled mode
     */
    Disabled = "Disabled",
    /**
     * {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.FilterField FilterField} or {@link sap.ui.mdc.MultiValueField MultiValueField }
     * is rendered in display mode
     */
    Display = "Display",
    /**
     * {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.FilterField FilterField} or {@link sap.ui.mdc.MultiValueField MultiValueField }
     * is rendered in editable mode
     */
    Editable = "Editable",
    /**
     * If more than one control is rendered by the {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.FilterField FilterField }
     * or {@link sap.ui.mdc.MultiValueField MultiValueField} control, the first part is editable, and the other
     * parts are in display mode.
     */
    EditableDisplay = "EditableDisplay",
    /**
     * If more than one control is rendered by the {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.FilterField FilterField }
     * or {@link sap.ui.mdc.MultiValueField MultiValueField} control, the first part is editable, and the other
     * parts are read-only.
     */
    EditableReadOnly = "EditableReadOnly",
    /**
     * {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.FilterField FilterField} or {@link sap.ui.mdc.MultiValueField MultiValueField }
     * is rendered in read-only mode
     */
    ReadOnly = "ReadOnly",
  }
  export default FieldEditMode;
}

declare module "sap/ui/mdc/enums/FilterBarP13nMode" {
  /**
   * Defines the personalization mode of the filter bar.
   *
   * @since 1.115
   */
  enum FilterBarP13nMode {
    /**
     * Filter item personalization is enabled.
     */
    Item = "Item",
    /**
     * Condition personalization is enabled.
     */
    Value = "Value",
  }
  export default FilterBarP13nMode;
}

declare module "sap/ui/mdc/enums/FilterBarValidationStatus" {
  /**
   * Enumeration of the possible validation types.
   *
   * @since 1.115
   */
  enum FilterBarValidationStatus {
    /**
     * Filter field in error state.
     */
    FieldInErrorState = "undefined",
    /**
     * No errors detected.
     */
    NoError = "undefined",
    /**
     * Required filter filed without a value.
     */
    RequiredHasNoValue = "undefined",
  }
  export default FilterBarValidationStatus;
}

declare module "sap/ui/mdc/enums/LinkType" {
  /**
   * Defines the behavior of the {@link sap.ui.mdc.Link}.
   *
   * @since 1.115
   */
  enum LinkType {
    /**
     * {@link sap.ui.mdc.Link} is rendered as a {@link sap.m.Link} that works as a direct link
     */
    DirectLink = "DirectLink",
    /**
     * {@link sap.ui.mdc.Link} is rendered as a {@link sap.m.Link} that opens a popover when pressed
     */
    Popover = "Popover",
    /**
     * {@link sap.ui.mdc.Link} is rendered as a {@link sap.m.Text}
     */
    Text = "Text",
  }
  export default LinkType;
}

declare module "sap/ui/mdc/enums/OperatorName" {
  /**
   * Collects the operators that are included in the library.
   *
   * @since 1.119
   */
  enum OperatorName {
    /**
     * "between" operator
     *
     * There is no validation if the first value is less than the second value as the comparison would be type-dependent
     * and cannot be performed in a generic way.
     *
     * The operator is available for string, numeric, date, time, and date/time types.
     *
     * If a {@link sap.m.DynamicDateRange DynamicDateRange} control is used for the output, the operator is
     * mapped to the `DATERANGE` option if a date type is used and to the `DATETIMERANGE` option if a date/time
     * type is used.
     *
     * @since 1.73.0
     */
    BT = "BT",
    /**
     * "contains" operator
     *
     * The operator is available for string types.
     *
     * @since 1.73.0
     */
    Contains = "Contains",
    /**
     * "Date to Year" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.99.0
     */
    DATETOYEAR = "DATETOYEAR",
    /**
     * "empty" operator
     *
     * The operator is available for string types.
     *
     * @since 1.73.0
     */
    Empty = "Empty",
    /**
     * "ends with" operator
     *
     * The operator is available for string types.
     *
     * @since 1.73.0
     */
    EndsWith = "EndsWith",
    /**
     * "equal to" operator
     *
     * Depending on the used `DisplayFormat`, the key, the description, or both are used as output of formatting
     * and during parsing.
     *
     * The operator is available for all data types.
     *
     * If a {@link sap.m.DynamicDateRange DynamicDateRange} control is used for the output, the operator is
     * mapped to the `DATE` option if a date type is used and to the `DATETIME` option if a date/time type is
     * used.
     *
     * @since 1.73.0
     */
    EQ = "EQ",
    /**
     * "First Day in This Month" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.99.0
     */
    FIRSTDAYMONTH = "FIRSTDAYMONTH",
    /**
     * "First Day in This Quarter" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.99.0
     */
    FIRSTDAYQUARTER = "FIRSTDAYQUARTER",
    /**
     * "First Day in This Week" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.99.0
     */
    FIRSTDAYWEEK = "FIRSTDAYWEEK",
    /**
     * "First Day in This Year" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.99.0
     */
    FIRSTDAYYEAR = "FIRSTDAYYEAR",
    /**
     * "greater than or equal to" operator
     *
     * The operator is available for string, numeric, date, time, and date/time types.
     *
     * If a {@link sap.m.DynamicDateRange DynamicDateRange} control is used for the output the operator, is
     * mapped to the `FROM` option if a date type is used and to the `FROMDATETIME` option if a date/time type
     * is used.
     *
     * @since 1.73.0
     */
    GE = "GE",
    /**
     * "greater than" operator
     *
     * The operator is available for string, numeric, date, time, and date/time types.
     *
     * @since 1.73.0
     */
    GT = "GT",
    /**
     * "Last Day in This Month" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.99.0
     */
    LASTDAYMONTH = "LASTDAYMONTH",
    /**
     * "Last Day in This Quarter" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.99.0
     */
    LASTDAYQUARTER = "LASTDAYQUARTER",
    /**
     * "Last X Days" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.74.0
     */
    LASTDAYS = "LASTDAYS",
    /**
     * "Last Day in This Week" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.99.0
     */
    LASTDAYWEEK = "LASTDAYWEEK",
    /**
     * "Last Day in This Year" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.99.0
     */
    LASTDAYYEAR = "LASTDAYYEAR",
    /**
     * "Last X Hours" operator
     *
     * The operator is available for date/time types.
     *
     * @since 1.112.0
     */
    LASTHOURS = "LASTHOURS",
    /**
     * "Last X Minutes" operator
     *
     * The operator is available for date/time types.
     *
     * @since 1.112.0
     */
    LASTMINUTES = "LASTMINUTES",
    /**
     * "Last Month" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.74.0
     */
    LASTMONTH = "LASTMONTH",
    /**
     * "Last X Months" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.74.0
     */
    LASTMONTHS = "LASTMONTHS",
    /**
     * "Last Quarter" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.74.0
     */
    LASTQUARTER = "LASTQUARTER",
    /**
     * "Last X Quarters" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.74.0
     */
    LASTQUARTERS = "LASTQUARTERS",
    /**
     * "Last Week" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.74.0
     */
    LASTWEEK = "LASTWEEK",
    /**
     * "Last X Weeks" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.74.0
     */
    LASTWEEKS = "LASTWEEKS",
    /**
     * "Last Year" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.74.0
     */
    LASTYEAR = "LASTYEAR",
    /**
     * "Last X Years" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.74.0
     */
    LASTYEARS = "LASTYEARS",
    /**
     * "less than or equal to" operator
     *
     * The operator is available for string, numeric, date, time, and date/time types.
     *
     * If a {@link sap.m.DynamicDateRange DynamicDateRange} control is used for the output the operator, is
     * mapped to the `TO` option if a date type is used and to the `TODATETIME` option if a date/time type is
     * used.
     *
     * @since 1.73.0
     */
    LE = "LE",
    /**
     * "less than" operator
     *
     * The operator is available for string, numeric, date, time, and date/time types.
     *
     * @since 1.73.0
     */
    LT = "LT",
    /**
     * "not equal to" operator
     *
     * The operator is available for all types.
     *
     * @since 1.73.0
     */
    NE = "NE",
    /**
     * "Next X Days" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.74.0
     */
    NEXTDAYS = "NEXTDAYS",
    /**
     * "Next X Hours" operator
     *
     * The operator is available for date/time types.
     *
     * @since 1.112.0
     */
    NEXTHOURS = "NEXTHOURS",
    /**
     * "Next X Minutes" operator
     *
     * The operator is available for date/time types.
     *
     * @since 1.112.0
     */
    NEXTMINUTES = "NEXTMINUTES",
    /**
     * "Next Month" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.74.0
     */
    NEXTMONTH = "NEXTMONTH",
    /**
     * "Next X Months" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.74.0
     */
    NEXTMONTHS = "NEXTMONTHS",
    /**
     * "Next Quarter" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.74.0
     */
    NEXTQUARTER = "NEXTQUARTER",
    /**
     * "Next X Quarters" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.74.0
     */
    NEXTQUARTERS = "NEXTQUARTERS",
    /**
     * "Next Week" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.74.0
     */
    NEXTWEEK = "NEXTWEEK",
    /**
     * "Next X Weeks" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.74.0
     */
    NEXTWEEKS = "NEXTWEEKS",
    /**
     * "Next Year" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.74.0
     */
    NEXTYEAR = "NEXTYEAR",
    /**
     * "Next X Years" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.74.0
     */
    NEXTYEARS = "NEXTYEARS",
    /**
     * "not between" operator
     *
     * There is no validation if the first value is less than the second value as the comparison would be type-dependent
     * and cannot be performed in a generic way.
     *
     * The operator is available for string, numeric, date, time, and date/time types.
     *
     * @since 1.73.0
     */
    NOTBT = "NOTBT",
    /**
     * "does not contain" operator
     *
     * The operator is available for string types.
     *
     * @since 1.73.0
     */
    NotContains = "NotContains",
    /**
     * "not empty" operator
     *
     * The operator is available for string types.
     *
     * @since 1.73.0
     */
    NotEmpty = "NotEmpty",
    /**
     * "does not end with" operator
     *
     * The operator is available for string types.
     *
     * @since 1.73.0
     */
    NotEndsWith = "NotEndsWith",
    /**
     * "not greater than or equal to" operator
     *
     * The operator is available for string, numeric, date, time, and date/time types.
     *
     * @since 1.73.0
     */
    NOTGE = "NOTGE",
    /**
     * "not greater than" operator
     *
     * The operator is available for string, numeric, date, time, and date/time types.
     *
     * @since 1.73.0
     */
    NOTGT = "NOTGT",
    /**
     * "not less than or equal to" operator
     *
     * The operator is available for string, numeric, date, time, and date/time types.
     *
     * @since 1.73.0
     */
    NOTLE = "NOTLE",
    /**
     * "not less than" operator
     *
     * The operator is available for string, numeric, date, time, and date/time types.
     *
     * @since 1.73.0
     */
    NOTLT = "NOTLT",
    /**
     * "does not start with" operator
     *
     * The operator is available for string types.
     *
     * @since 1.73.0
     */
    NotStartsWith = "NotStartsWith",
    /**
     * "First Quarter" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.86.0
     */
    QUARTER1 = "QUARTER1",
    /**
     * "Second Quarter" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.86.0
     */
    QUARTER2 = "QUARTER2",
    /**
     * "Third Quarter" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.86.0
     */
    QUARTER3 = "QUARTER3",
    /**
     * "Fourth Quarter" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.86.0
     */
    QUARTER4 = "QUARTER4",
    /**
     * "Month" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.85.0
     */
    SPECIFICMONTH = "SPECIFICMONTH",
    /**
     * "Month in Year" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.99.0
     */
    SPECIFICMONTHINYEAR = "SPECIFICMONTHINYEAR",
    /**
     * "starts with" operator
     *
     * The operator is available for string types.
     *
     * @since 1.73.0
     */
    StartsWith = "StartsWith",
    /**
     * "This Month" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.86.0
     */
    THISMONTH = "THISMONTH",
    /**
     * "This Quarter" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.86.0
     */
    THISQUARTER = "THISQUARTER",
    /**
     * "This Week" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.86.0
     */
    THISWEEK = "THISWEEK",
    /**
     * "This Year" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.86.0
     */
    THISYEAR = "THISYEAR",
    /**
     * "Today" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.74.0
     */
    TODAY = "TODAY",
    /**
     * "Today -X / +Y Days" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.86.0
     */
    TODAYFROMTO = "TODAYFROMTO",
    /**
     * "Tomorrow" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.74.0
     */
    TOMORROW = "TOMORROW",
    /**
     * "Year to Date" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.74.0
     */
    YEARTODATE = "YEARTODATE",
    /**
     * "Yesterday" operator
     *
     * The operator is available for date and date/time types.
     *
     * @since 1.74.0
     */
    YESTERDAY = "YESTERDAY",
  }
  export default OperatorName;
}

declare module "sap/ui/mdc/enums/OperatorOverwrite" {
  /**
   * Enumeration of the `OperatorOverwrite` in `Operator`.
   *
   * @since 1.115
   */
  enum OperatorOverwrite {
    /**
     * Overwrite the `getTypeText` function of the operator.
     */
    getLongText = "getLongText",
    /**
     * Overwrite the `getModelFilter` function of the operator.
     */
    getModelFilter = "getModelFilter",
  }
  export default OperatorOverwrite;
}

declare module "sap/ui/mdc/enums/OperatorValueType" {
  /**
   * Defines what data type is used for parse or format the condition values on a {@link sap.ui.mdc.condition.Operator Operator}.
   *
   * @since 1.115
   */
  enum OperatorValueType {
    /**
     * The `Type` of the `Field` or `FilterField` using the `Operator` is used.
     */
    Self = "self",
    /**
     * The `Type` of the `Field` or `FilterField` using the `Operator` is used for validation, but the user
     * input is used as value.
     */
    SelfNoParse = "selfNoParse",
    /**
     * A simple string type is used to display static text.
     */
    Static = "static",
  }
  export default OperatorValueType;
}

declare module "sap/ui/mdc/enums/TableGrowingMode" {
  /**
   * Growing mode of the table.
   *
   * @since 1.115
   */
  enum TableGrowingMode {
    /**
     * A More button is shown with which the user can request to load more rows
     */
    Basic = "Basic",
    /**
     * A fixed number of rows is shown
     */
    None = "None",
    /**
     * Either the user requests to load more rows by scrolling down, or the More button is displayed if no scrolling
     * is required because the table is fully visible
     */
    Scroll = "Scroll",
  }
  export default TableGrowingMode;
}

declare module "sap/ui/mdc/enums/TableP13nMode" {
  /**
   * Personalization mode of the table.
   *
   * @since 1.115
   */
  enum TableP13nMode {
    /**
     * The table can be aggregated
     */
    Aggregate = "Aggregate",
    /**
     * Columns can be shown, hidden and reordered
     */
    Column = "Column",
    /**
     * The table can be filtered
     */
    Filter = "Filter",
    /**
     * The table can be grouped
     */
    Group = "Group",
    /**
     * The table can be sorted
     */
    Sort = "Sort",
  }
  export default TableP13nMode;
}

declare module "sap/ui/mdc/enums/TableRowActionType" {
  /**
   * Type of a table row action.
   *
   * @since 1.115
   */
  enum TableRowActionType {
    /**
     * Navigation arrow (chevron) is shown
     */
    Navigation = "Navigation",
  }
  export default TableRowActionType;
}

declare module "sap/ui/mdc/enums/TableRowCountMode" {
  /**
   * Row count mode of the table.
   *
   * @since 1.115
   */
  enum TableRowCountMode {
    /**
     * The table automatically fills the height of the surrounding container
     */
    Auto = "Auto",
    /**
     * A fixed number of rows is shown
     */
    Fixed = "Fixed",
  }
  export default TableRowCountMode;
}

declare module "sap/ui/mdc/enums/TableSelectionMode" {
  /**
   * Selection mode of the table.
   *
   * @since 1.115
   */
  enum TableSelectionMode {
    /**
     * Multiple rows can be selected at a time
     */
    Multi = "Multi",
    /**
     * No row selection available
     */
    None = "None",
    /**
     * Only one row can be selected at a time
     */
    Single = "Single",
    /**
     * Only one row can be selected at a time. The selection column is not shown. Instead, the user can press
     * the row to select it.
     *
     * **Note:** If this selection mode is used, the table does not fire the `rowPress` event.
     */
    SingleMaster = "SingleMaster",
  }
  export default TableSelectionMode;
}

declare module "sap/ui/mdc/enums/TableType" {
  /**
   * Type of the table.
   *
   * @since 1.115
   */
  enum TableType {
    /**
     * Equivalent to the default configuration of {@link sap.ui.mdc.table.ResponsiveTableType}
     */
    ResponsiveTable = "ResponsiveTable",
    /**
     * Equivalent to the default configuration of {@link sap.ui.mdc.table.GridTableType}
     */
    Table = "Table",
  }
  export default TableType;
}

declare module "sap/ui/mdc/enums/ValueHelpPropagationReason" {
  /**
   * Enumeration of the propagation reason in the condition propagation callback of the {@link sap.ui.mdc.ValueHelp ValueHelp}
   *
   * @since 1.115
   */
  enum ValueHelpPropagationReason {
    /**
     * Triggered by connected control after processing valuehelp output
     */
    ControlChange = "ControlChange",
    /**
     * Triggered by `ValueHelp` itself on `getItemForValue`
     */
    Info = "Info",
    /**
     * Triggered by `ValueHelp` itself on selection
     */
    Select = "Select",
  }
  export default ValueHelpPropagationReason;
}

declare module "sap/ui/mdc/Field" {
  import {
    default as FieldBase,
    $FieldBaseSettings,
  } from "sap/ui/mdc/field/FieldBase";

  import { IFormContent, ISemanticFormContent } from "sap/ui/core/library";

  import { IOverflowToolbarContent } from "sap/m/library";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Event from "sap/ui/base/Event";

  /**
   * The `Field` control is used to bind its value to data of a certain data type. Based on the data type
   * settings, a default control is rendered by the `Field` as follows:
   *
   *
   * 	 - In display mode, usually a {@link sap.m.Text Text} control is rendered.
   * 	 - If `multipleLines` is set, an {@link sap.m.ExpandableText ExpandableText} control is rendered.
   * 	 - If `fieldInfo` is set and it is configured to be triggerable, a {@link sap.m.Link Link} control is
   *     rendered.
   * 	 - In edit mode, usually an {@link sap.m.Input Input} control is rendered.
   * 	 - If `multipleLines` is set, a {@link sap.m.TextArea TextArea} control is rendered.
   * 	 - If a date type is used, a {@link sap.m.DatePicker DatePicker} control is rendered.
   * 	 - If a date/time type is used, a {@link sap.m.DateTimePicker DateTimePicker} control is rendered.
   * 	 - If a time type is used, a {@link sap.m.TimePicker TimePicker} control is rendered.
   * 	 - If a currency or unit type is used, two {@link sap.m.Input Input} controls are rendered, one for
   *     number and one for unit.
   *
   * @since 1.54.0
   */
  export default class Field
    extends FieldBase
    implements IFormContent, ISemanticFormContent, IOverflowToolbarContent
  {
    __implements__sap_ui_core_IFormContent: boolean;
    __implements__sap_ui_core_ISemanticFormContent: boolean;
    __implements__sap_m_IOverflowToolbarContent: boolean;
    /**
     * Constructor for a new `Field`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $FieldSettings
    );
    /**
     * Constructor for a new `Field`.
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
      mSettings?: $FieldSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.Field with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.field.FieldBase.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Field>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.Field.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.mdc.Field`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.Field` itself.
     *
     * This event is fired when the `value` property of the field is changed by user interaction.
     *
     * **Note** This event is only triggered if the used content control has a change event.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Field$ChangeEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.Field` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.mdc.Field`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.Field` itself.
     *
     * This event is fired when the `value` property of the field is changed by user interaction.
     *
     * **Note** This event is only triggered if the used content control has a change event.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Field$ChangeEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.Field` itself
       */
      oListener?: object
    ): this;
    /**
     * Binds property {@link #getAdditionalValue additionalValue} to model data.
     *
     * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description
     * of the possible properties of `oBindingInfo`
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    bindAdditionalValue(
      /**
       * The binding information
       */
      oBindingInfo: PropertyBindingInfo
    ): this;
    /**
     * Binds property {@link #getConditions conditions} to model data.
     *
     * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description
     * of the possible properties of oBindingInfo
     *
     * Do not use the `conditions` property, use the `value` and `additionalValue` properties instead.
     *
     * @deprecated - Not supported, use the `value` property and `additionalValue` property to bind the control.
     *
     * @returns Reference to `this` to allow method chaining
     */
    bindConditions(
      /**
       * The binding information
       */
      oBindingInfo: PropertyBindingInfo
    ): this;
    /**
     * Binds property {@link #getValue value} to model data.
     *
     * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description
     * of the possible properties of `oBindingInfo`
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    bindValue(
      /**
       * The binding information
       */
      oBindingInfo: PropertyBindingInfo
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.mdc.Field`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachChange(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Field$ChangeEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Fires event {@link #event:change change} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Field$ChangeEventParameters
    ): this;
    /**
     * Gets current value of property {@link #getAdditionalValue additionalValue}.
     *
     * The additional value of the field.
     *
     * To display the key and the description in one field, the description must be set on the `additionalValue`
     * property.
     *
     *
     * @returns Value of property `additionalValue`
     */
    getAdditionalValue(): any;
    /**
     * Gets current value of property {@link #getConditions conditions}.
     *
     * Do not use the `conditions` property, use the `value` and `additionalValue` properties instead.
     *
     * @deprecated - Not supported, use the `value` property and `additionalValue` property to bind the control.
     *
     * @returns Conditions of the field
     */
    getConditions(): object[];
    /**
     * Gets current value of property {@link #getDataType dataType}.
     *
     * The type of data handled by the field. The type is used to parse, format, and validate the value.
     *
     * **Note:** If the `value` property is bound to a model using a type, this type is used. In this case the
     * value of the `dataType` property is ignored.
     *
     * @deprecated - Not supported, the type in the binding to the `value` property is used.
     *
     * @returns Value of property `dataType`
     */
    getDataType(): string;
    /**
     * Gets current value of property {@link #getDataTypeConstraints dataTypeConstraints}.
     *
     * The constraints of the type specified in `dataType`.
     *
     * **Note:** If the `value` property is bound to a model using a type, this type is used. In this case the
     * values of the `dataType` property and the `dataTypeConstraints` property are ignored.
     *
     * @deprecated - Not supported, the `Constraints` of the type in the binding to the `value` property is
     * used.
     *
     * @returns Value of property `dataTypeConstraints`
     */
    getDataTypeConstraints(): object;
    /**
     * Gets current value of property {@link #getDataTypeFormatOptions dataTypeFormatOptions}.
     *
     * The format options of the type specified in `dataType`.
     *
     * **Note:** If the `value` property is bound to a model using a type, this type is used. In this case the
     * values of the `dataType` property and the `dataTypeFormatOptions` property are ignored.
     *
     * @deprecated - Not supported, the `FormatOptions` of the type in the binding to the `value` property is
     * used.
     *
     * @returns Value of property `dataTypeFormatOptions`
     */
    getDataTypeFormatOptions(): object;
    /**
     * Gets current value of property {@link #getValue value}.
     *
     * The value of the field.
     *
     * To display the key and the description in one field, the key must be set on the `value` property.
     *
     *
     * @returns Value of property `value`
     */
    getValue(): any;
    /**
     * Sets a new value for property {@link #getAdditionalValue additionalValue}.
     *
     * The additional value of the field.
     *
     * To display the key and the description in one field, the description must be set on the `additionalValue`
     * property.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAdditionalValue(
      /**
       * New value for property `additionalValue`
       */
      oAdditionalValue?: any
    ): this;
    /**
     * Sets a new value for property {@link #getConditions conditions}.
     *
     * Do not use the `conditions` property, use the `value` and `additionalValue` properties instead.
     *
     * @deprecated - Not supported, use the `value` property and `additionalValue` property to bind the control.
     *
     * @returns Reference to `this` to allow method chaining
     */
    setConditions(
      /**
       * Conditions that are set
       */
      aConditions: object[]
    ): this;
    /**
     * Sets a new value for property {@link #getDataType dataType}.
     *
     * The type of data handled by the field. The type is used to parse, format, and validate the value.
     *
     * **Note:** If the `value` property is bound to a model using a type, this type is used. In this case the
     * value of the `dataType` property is ignored.
     *
     * @deprecated - Not supported, the type in the binding to the `value` property is used.
     *
     * @returns Reference to `this` to allow method chaining
     */
    setDataType(
      /**
       * DataType that is set
       */
      sDataType: string | undefined
    ): this;
    /**
     * Sets a new value for property {@link #getDataTypeConstraints dataTypeConstraints}.
     *
     * The constraints of the type specified in `dataType`.
     *
     * **Note:** If the `value` property is bound to a model using a type, this type is used. In this case the
     * values of the `dataType` property and the `dataTypeConstraints` property are ignored.
     *
     * @deprecated - Not supported, the `Constraints` of the type in the binding to the `value` property is
     * used.
     *
     * @returns Reference to `this` to allow method chaining
     */
    setDataTypeConstraints(
      /**
       * Constraints that are set
       */
      oDataTypeConstraints: object | undefined
    ): this;
    /**
     * Sets a new value for property {@link #getDataTypeFormatOptions dataTypeFormatOptions}.
     *
     * The format options of the type specified in `dataType`.
     *
     * **Note:** If the `value` property is bound to a model using a type, this type is used. In this case the
     * values of the `dataType` property and the `dataTypeFormatOptions` property are ignored.
     *
     * @deprecated - Not supported, the `FormatOptions` of the type in the binding to the `value` property is
     * used.
     *
     * @returns Reference to `this` to allow method chaining
     */
    setDataTypeFormatOptions(
      /**
       * Format options that are set
       */
      oDataTypeFormatOptions: object | undefined
    ): this;
    /**
     * This property must not be set for the `Field`
     *
     * @deprecated - Not supported, this property is not supported for the `Field`.
     *
     * @returns `this` to allow method chaining.
     */
    setMaxConditions(
      /**
       * Only 1 condition allowed in `Field`
       */
      iMaxConditions: int
    ): this;
    /**
     * Sets a new value for property {@link #getValue value}.
     *
     * The value of the field.
     *
     * To display the key and the description in one field, the key must be set on the `value` property.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setValue(
      /**
       * New value for property `value`
       */
      oValue?: any
    ): this;
    /**
     * Unbinds property {@link #getAdditionalValue additionalValue} from model data.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    unbindAdditionalValue(): this;
    /**
     * Unbinds property {@link #getConditions conditions} from model data.
     *
     * Do not use the `conditions` property, use the `value` and `additionalValue` properties instead.
     *
     * @deprecated - Not supported, use the `value` property and `additionalValue` property to bind the control.
     *
     * @returns Reference to `this` to allow method chaining
     */
    unbindConditions(): this;
    /**
     * Unbinds property {@link #getValue value} from model data.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    unbindValue(): this;
  }
  /**
   * Describes the settings that can be provided to the Field constructor.
   */
  export interface $FieldSettings extends $FieldBaseSettings {
    /**
     * The value of the field.
     *
     * To display the key and the description in one field, the key must be set on the `value` property.
     */
    value?: any | PropertyBindingInfo | `{${string}}`;

    /**
     * The additional value of the field.
     *
     * To display the key and the description in one field, the description must be set on the `additionalValue`
     * property.
     */
    additionalValue?: any | PropertyBindingInfo | `{${string}}`;

    /**
     * This event is fired when the `value` property of the field is changed by user interaction.
     *
     * **Note** This event is only triggered if the used content control has a change event.
     */
    change?: (oEvent: Field$ChangeEvent) => void;
  }

  /**
   * Parameters of the Field#change event.
   */
  export interface Field$ChangeEventParameters {
    /**
     * The new value of the `Field`.
     *
     * If a `ValueHelp` is assigned to the `Field`, the `value` is used as key for the `ValueHelp` items.
     */
    value?: string;

    /**
     * Flag that indicates if the entered `value` is valid
     */
    valid?: boolean;

    /**
     * Returns a `Promise` for the change. The `Promise` returns the value if it is resolved. If the `change`
     * event is synchronous, the `Promise` has already been already resolved. If it is asynchronous, it will
     * be resolved after the value has been updated.
     *
     * The `Field` should be set to busy during the parsing to prevent user input. As there might be a whole
     * group of fields that needs to be busy, this cannot be done automatically.
     */
    promise?: Promise<any>;
  }

  /**
   * Event object of the Field#change event.
   */
  export type Field$ChangeEvent = Event<Field$ChangeEventParameters, Field>;
}

declare module "sap/ui/mdc/field/ConditionsType" {
  import SimpleType from "sap/ui/model/SimpleType";

  import Type from "sap/ui/model/Type";

  import FieldDisplay from "sap/ui/mdc/enums/FieldDisplay";

  import Context from "sap/ui/model/Context";

  import { ConditionObject } from "sap/ui/mdc/condition/Condition";

  import Control from "sap/ui/core/Control";

  import FormatException from "sap/ui/model/FormatException";

  import Metadata from "sap/ui/base/Metadata";

  import ParseException from "sap/ui/model/ParseException";

  /**
   * This class represents a type that is used to map an array of conditions to a single-value control (such
   * as {@link sap.m.Input Input} or {@link sap.m.Text Text} control).
   *
   * @since 1.62.0
   */
  export default class ConditionsType extends SimpleType {
    /**
     * Constructor for a Conditions type.
     */
    constructor(
      /**
       * Formatting options
       */
      oFormatOptions?: {
        /**
         * Type of the value of the condition (used for formatting, parsing and validating)
         */
        valueType?: Type;
        /**
         * Type of the `additionalValue` (description) of the condition (used for formatting, parsing, and validating)
         */
        additionalValueType?: Type;
        /**
         * Possible operators to be used in the condition
         */
        operators?: string[];
        /**
         * DisplayFormat used to visualize a value
         */
        display?: FieldDisplay | keyof typeof FieldDisplay;
        /**
         * ID of the value help to determine the key and description
         */
        valueHelpID?: string;
        /**
         * If set, only the value of the condition is shown, but no operator. (Use it only if just one operator
         * is supported.)
         */
        hideOperator?: boolean;
        /**
         * Maximum number of allowed conditions
         */
        maxConditions?: int;
        /**
         * `BindingContext` of field. Used to get a key or description from the value help using in/out parameters.
         * (In a table, the value help might be connected to a different row)
         */
        bindingContext?: Context;
        /**
         * Type used on field, for example, for date types; a different type is used internally to have different
         * `formatOptions`
         */
        originalDateType?: Type;
        /**
         * Additional type used for another part of a field (for example, for unit fields)
         */
        additionalType?: Type;
        /**
         * Additional types used for each part of a `CompositeType` (if `valueType` is a `CompositeType`)
         */
        compositeTypes?: Type[];
        /**
         * Additional types used for each part of a `CompositeType` (if `additionalValueType` is a `CompositeType`)
         */
        additionalCompositeTypes?: Type[];
        /**
         * Function to get the existing conditions of the field.
         */
        getConditions?: Function;
        /**
         * Callback function to tell the `Field` the parsing is asynchronous.
         */
        asyncParsing?: Function;
        /**
         * Condition of keyboard navigation. If this is filled, no real parsing is needed as the condition has already
         * been determined and is just returned
         */
        navigateCondition?: ConditionObject;
        /**
         * Field delegate to handle model-specific logic
         */
        delegate?: object;
        /**
         * Payload of the delegate
         */
        payload?: object;
        /**
         * If set, description is not read by `formatValue` as it is known that no description exists or might be
         * set later
         */
        preventGetDescription?: boolean;
        /**
         * Name of the default `Operator`
         */
        defaultOperatorName?: string;
        /**
         * If set, whitespaces will be replaced by special characters to display whitespaces in HTML
         */
        convertWhitespaces?: boolean;
        /**
         * Instance of the calling control
         */
        control?: Control;
        /**
         * If set, the conditions will not be formatted (MultiInput `value` property case)
         */
        noFormatting?: boolean;
        /**
         * If `noFormatting` is set, this value is used as output to keep the typed value during value help selection
         */
        keepValue?: string;
        /**
         * If set, the input and output might contain multiple lines
         */
        multipleLines?: boolean;
      },
      /**
       * Value constraints
       */
      oConstraints?: object
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.field.ConditionsType with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.SimpleType.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ConditionsType>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.field.ConditionsType.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): Metadata;
    /**
     * Formats the given conditions to an output value of the given target type. These values are formatted
     * using the given data type. Depending on the operator and the configuration (set in `FormatOptions`),
     * a description will be determined by a given value help or delegate.
     *
     *
     * @returns The formatted output value or a `Promise` resolving with the formatted value
     */
    formatValue(
      /**
       * The conditions to be formatted
       */
      aConditions: ConditionObject[],
      /**
       * The target type; see {@link https://ui5.sap.com/#/topic/ac56d92162ed47ff858fdf1ce26c18c4 Allowed Property Types}.
       * In addition to the standard target types, `sap.ui.mdc.raw` can be used. In this case the value is not
       * formatted and just forwarded to the target. If the value is an array representing data for a `CompositeType`,
       * the index of the needed raw value can be added to the name (For example, if a unit should be forwarded
       * as raw value, `sap.ui.mdc.raw:1` can be used).
       */
      sTargetType: string
    ): any | Promise<any>;
    /**
     * Parses an external value of the given source type to an array of conditions that holds the value in model
     * representation. These values are parsed using the given data type. Depending on the operator and the
     * configuration (set in `FormatOptions`), a value will be determined by a given value help or delegate.
     *
     *
     * @returns The array of conditions or a `Promise` resolving with the array of conditions. If there is no
     * value, `null` is returned.
     */
    parseValue(
      /**
       * The value that is parsed
       */
      vValue: any,
      /**
       * The type of the given value; see {@link https://ui5.sap.com/#/topic/ac56d92162ed47ff858fdf1ce26c18c4 Allowed Property Types }
       * In addition to the standard source types, `sap.ui.mdc.raw` can be used. In this case the value is not
       * parsed and just used in the condition. If the value of the condition is an array representing data for
       * a `CompositeType`, the index of the needed raw value can be added to the name (For example, if a unit
       * should be forwarded as raw value `sap.ui.mdc.raw:1` can be used).
       */
      sSourceType: string
    ): null | ConditionObject[] | Promise<null | ConditionObject[]>;
    /**
     * Validates a given array of conditions. The values of the conditions are validated using the given data
     * type.
     *
     *
     * @returns `undefined` or a `Promise` resolving with an undefined value
     */
    validateValue(
      /**
       * The conditions that is validated
       */
      aConditions: ConditionObject[]
    ): void | Promise<any>;
  }
}

declare module "sap/ui/mdc/field/ConditionType" {
  import SimpleType from "sap/ui/model/SimpleType";

  import Type from "sap/ui/model/Type";

  import FieldDisplay from "sap/ui/mdc/enums/FieldDisplay";

  import Context from "sap/ui/model/Context";

  import { ConditionObject } from "sap/ui/mdc/condition/Condition";

  import Control from "sap/ui/core/Control";

  import FormatException from "sap/ui/model/FormatException";

  import Metadata from "sap/ui/base/Metadata";

  import ParseException from "sap/ui/model/ParseException";

  /**
   * This class represents a type that is used to map a single condition to a single-value control.
   *
   * @since 1.62.0
   */
  export default class ConditionType extends SimpleType {
    /**
     * Constructor for a Condition type.
     */
    constructor(
      /**
       * Formatting options
       */
      oFormatOptions?: {
        /**
         * Type of the value of the condition (used for formatting, parsing and validating)
         */
        valueType?: Type;
        /**
         * Type of the `additionalValue` (description) of the condition (used for formatting, parsing, and validating)
         */
        additionalValueType?: Type;
        /**
         * Possible operators to be used in the condition
         */
        operators?: string[];
        /**
         * DisplayFormat used to visualize a value
         */
        display?: FieldDisplay | keyof typeof FieldDisplay;
        /**
         * ID of the value help to determine the key and description
         */
        valueHelpID?: string;
        /**
         * If set, only the value of the condition is shown, but no operator. (Use it only if just one operator
         * is supported.)
         */
        hideOperator?: boolean;
        /**
         * Maximum number of allowed conditions
         */
        maxConditions?: int;
        /**
         * `BindingContext` of field. Used to get a key or description from the value help using in/out parameters.
         * (In a table, the value help might be connected to a different row)
         */
        bindingContext?: Context;
        /**
         * Type used on field, for example, for date types; a different type is used internally to have different
         * `formatOptions`
         */
        originalDateType?: Type;
        /**
         * Additional type used for another part of a field (for example, for unit fields)
         */
        additionalType?: Type;
        /**
         * Additional types used for each part of a `CompositeType` (if `valueType` is a `CompositeType`)
         */
        compositeTypes?: Type[];
        /**
         * Additional types used for each part of a `CompositeType` (if `additionalValueType` is a `CompositeType`)
         */
        additionalCompositeTypes?: Type[];
        /**
         * Function to get the existing conditions of the field.
         */
        getConditions?: Function;
        /**
         * Callback function to tell the `Field` the parsing is asynchronous.
         */
        asyncParsing?: Function;
        /**
         * Condition of keyboard navigation. If this is filled, no real parsing is needed as the condition has already
         * been determined and is just returned
         */
        navigateCondition?: ConditionObject;
        /**
         * Field delegate to handle model-specific logic
         */
        delegate?: object;
        /**
         * Payload of the delegate
         */
        payload?: object;
        /**
         * If set, description is not read by `formatValue` as it is known that no description exists or might be
         * set later
         */
        preventGetDescription?: boolean;
        /**
         * Name of the default `Operator`
         */
        defaultOperatorName?: string;
        /**
         * If set, whitespaces will be replaced by special characters to display whitespaces in HTML
         */
        convertWhitespaces?: boolean;
        /**
         * Instance of the calling control
         */
        control?: Control;
        /**
         * If set, the conditions will not be formatted (MultiInput `value` property case)
         */
        noFormatting?: boolean;
        /**
         * If `noFormatting` is set, this value is used as output to keep the typed value during value help selection
         */
        keepValue?: string;
        /**
         * If set, the input and output might contain multiple lines
         */
        multipleLines?: boolean;
      },
      /**
       * Value constraints
       */
      oConstraints?: object
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.field.ConditionType with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.SimpleType.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ConditionType>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.field.ConditionType.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): Metadata;
    /**
     * Formats the given condition to an output value of the given target type. These values are formatted using
     * the given data type. Depending on the operator and the configuration (set in `FormatOptions`), a description
     * will be determined by a given value help or delegate.
     *
     *
     * @returns The formatted output value or a `Promise` resolving with the formatted value
     */
    formatValue(
      /**
       * The condition to be formatted
       */
      oCondition: ConditionObject,
      /**
       * The target type; see {@link https://ui5.sap.com/#/topic/ac56d92162ed47ff858fdf1ce26c18c4 Allowed Property Types}.
       * In addition to the standard target types, `sap.ui.mdc.raw` can be used. In this case the value is not
       * formatted and just forwarded to the target. If the value is an array representing data for a `CompositeType`,
       * the index of the needed raw value can be added to the name (For example, if a unit should be forwarded
       * as raw value, `sap.ui.mdc.raw:1` can be used).
       */
      sTargetType: string
    ): any | Promise<any>;
    /**
     * Determines the text what is copied to clipboard if a token or item with the condition is selected and
     * copied. For equal-conditions key/description pairs needs to be copied to allow pasing of such conditions.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns key/description pair seperated by TAB
     */
    getTextForCopy(
      /**
       * The condition to be copied
       */
      oCondition: ConditionObject
    ): string;
    /**
     * Parses an external value of the given source type to a condition that holds the value in model representation.
     * These values are parsed using the given data type. Depending on the operator and the configuration (set
     * in `FormatOptions`), a value will be determined by a given value help or delegate.
     *
     *
     * @returns The condition or a `Promise` resolving with the condition. If there is no value, `null` is returned.
     */
    parseValue(
      /**
       * The value that is parsed
       */
      vValue: any,
      /**
       * The type of the given value; see {@link https://ui5.sap.com/#/topic/ac56d92162ed47ff858fdf1ce26c18c4 Allowed Property Types }
       * In addition to the standard source types, `sap.ui.mdc.raw` can be used. In this case the value is not
       * parsed and just used in the condition. If the value of the condition is an array representing data for
       * a `CompositeType`, the index of the needed raw value can be added to the name (For example, if a unit
       * should be forwarded as raw value `sap.ui.mdc.raw:1` can be used).
       */
      sSourceType: string
    ): null | ConditionObject | Promise<null | ConditionObject>;
    /**
     * Validates a given condition. The values of the condition are validated using the given data type.
     *
     *
     * @returns `undefined` or a `Promise` resolving with an undefined value
     */
    validateValue(
      /**
       * The condition that is validated
       */
      oCondition: ConditionObject
    ): void | Promise<any>;
  }
}

declare module "sap/ui/mdc/field/DynamicDateRangeConditionsType" {
  import ConditionsType from "sap/ui/mdc/field/ConditionsType";

  import Type from "sap/ui/model/Type";

  import FieldDisplay from "sap/ui/mdc/enums/FieldDisplay";

  import Context from "sap/ui/model/Context";

  import { ConditionObject } from "sap/ui/mdc/condition/Condition";

  import Control from "sap/ui/core/Control";

  import Metadata from "sap/ui/base/Metadata";

  /**
   * This class represents a type to map an array of conditions used in a {@link sap.ui.mdc.FilterField FilterField }
   * control to a value of a {@link sap.m.DynamicDateRange DynamicDateRange} control.
   *
   * @since 1.96.0
   */
  export default class DynamicDateRangeConditionsType extends ConditionsType {
    /**
     * Constructor for a `ConditionsType` to be used in `DynamicDateRange` control.
     */
    constructor(
      /**
       * Formatting options
       */
      oFormatOptions?: {
        /**
         * Type of the value of the condition (used for formatting, parsing and validating)
         */
        valueType?: Type;
        /**
         * Type of the `additionalValue` (description) of the condition (used for formatting, parsing, and validating)
         */
        additionalValueType?: Type;
        /**
         * Possible operators to be used in the condition
         */
        operators?: string[];
        /**
         * DisplayFormat used to visualize a value
         */
        display?: FieldDisplay | keyof typeof FieldDisplay;
        /**
         * ID of the value help to determine the key and description
         */
        valueHelpID?: string;
        /**
         * If set, only the value of the condition is shown, but no operator. (Use it only if just one operator
         * is supported.)
         */
        hideOperator?: boolean;
        /**
         * Maximum number of allowed conditions
         */
        maxConditions?: int;
        /**
         * `BindingContext` of field. Used to get a key or description from the value help using in/out parameters.
         * (In a table, the value help might be connected to a different row)
         */
        bindingContext?: Context;
        /**
         * Type used on field, for example, for date types; a different type is used internally to have different
         * `formatOptions`
         */
        originalDateType?: Type;
        /**
         * Additional type used for another part of a field (for example, for unit fields)
         */
        additionalType?: Type;
        /**
         * Additional types used for each part of a `CompositeType` (if `valueType` is a `CompositeType`)
         */
        compositeTypes?: Type[];
        /**
         * Additional types used for each part of a `CompositeType` (if `additionalValueType` is a `CompositeType`)
         */
        additionalCompositeTypes?: Type[];
        /**
         * Function to get the existing conditions of the field.
         */
        getConditions?: Function;
        /**
         * Callback function to tell the `Field` the parsing is asynchronous.
         */
        asyncParsing?: Function;
        /**
         * Condition of keyboard navigation. If this is filled, no real parsing is needed as the condition has already
         * been determined and is just returned
         */
        navigateCondition?: ConditionObject;
        /**
         * Field delegate to handle model-specific logic
         */
        delegate?: object;
        /**
         * Payload of the delegate
         */
        payload?: object;
        /**
         * If set, description is not read by `formatValue` as it is known that no description exists or might be
         * set later
         */
        preventGetDescription?: boolean;
        /**
         * Name of the default `Operator`
         */
        defaultOperatorName?: string;
        /**
         * If set, whitespaces will be replaced by special characters to display whitespaces in HTML
         */
        convertWhitespaces?: boolean;
        /**
         * Instance of the calling control
         */
        control?: Control;
        /**
         * If set, the conditions will not be formatted (MultiInput `value` property case)
         */
        noFormatting?: boolean;
        /**
         * If `noFormatting` is set, this value is used as output to keep the typed value during value help selection
         */
        keepValue?: string;
        /**
         * If set, the input and output might contain multiple lines
         */
        multipleLines?: boolean;
      },
      /**
       * Value constraints
       */
      oConstraints?: object
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.field.DynamicDateRangeConditionsType with name `sClassName`
     * and enriches it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.field.ConditionsType.extend}.
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
      oClassInfo?: sap.ClassInfo<T, DynamicDateRangeConditionsType>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.field.DynamicDateRangeConditionsType.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): Metadata;
  }
}

declare module "sap/ui/mdc/field/FieldBase" {
  import { default as Control, $ControlSettings } from "sap/ui/mdc/Control";

  import {
    IFormContent,
    ISemanticFormContent,
    ID,
    Label,
    TextAlign,
    TextDirection,
    ValueState,
    CSSSize,
  } from "sap/ui/core/library";

  import { IOverflowToolbarContent } from "sap/m/library";

  import Control1 from "sap/ui/core/Control";

  import Event from "sap/ui/base/Event";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  import { ConditionObject } from "sap/ui/mdc/condition/Condition";

  import Type from "sap/ui/model/Type";

  import BaseType from "sap/ui/mdc/enums/BaseType";

  import FieldDisplay from "sap/ui/mdc/enums/FieldDisplay";

  import FieldEditMode from "sap/ui/mdc/enums/FieldEditMode";

  import FieldInfoBase from "sap/ui/mdc/field/FieldInfoBase";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import ConditionType from "sap/ui/mdc/field/ConditionType";

  import ValueHelp from "sap/ui/mdc/ValueHelp";

  /**
   * The `FieldBase` control is the base class for the {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.MultiValueField MultiValueField},
   * and {@link sap.ui.mdc.FilterField FilterField} controls. It must not be used stand-alone.
   *
   * @since 1.58.0
   */
  export default abstract class FieldBase
    extends Control
    implements IFormContent, ISemanticFormContent, IOverflowToolbarContent
  {
    __implements__sap_ui_core_IFormContent: boolean;
    __implements__sap_ui_core_ISemanticFormContent: boolean;
    __implements__sap_m_IOverflowToolbarContent: boolean;
    /**
     * Constructor for a new `FieldBase`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $FieldBaseSettings
    );
    /**
     * Constructor for a new `FieldBase`.
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
      mSettings?: $FieldBaseSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.field.FieldBase with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.Control.extend}.
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
      oClassInfo?: sap.ClassInfo<T, FieldBase>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.field.FieldBase.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
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
      vAriaLabelledBy: ID | Control1
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.mdc.field.FieldBase`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.field.FieldBase` itself.
     *
     * This event is fired when the value of the field is changed, for example, each time a key is pressed.
     *
     * **Note** This event is only triggered if the used content control has a `liveChange` event.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachLiveChange(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: FieldBase$LiveChangeEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.field.FieldBase` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.mdc.field.FieldBase`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.field.FieldBase` itself.
     *
     * This event is fired when the value of the field is changed, for example, each time a key is pressed.
     *
     * **Note** This event is only triggered if the used content control has a `liveChange` event.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachLiveChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: FieldBase$LiveChangeEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.field.FieldBase` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.mdc.field.FieldBase`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.field.FieldBase` itself.
     *
     * This event is fired if the inner control has a press event and this is fired.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPress(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.field.FieldBase` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.mdc.field.FieldBase`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.field.FieldBase` itself.
     *
     * This event is fired if the inner control has a press event and this is fired.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.field.FieldBase` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:submit submit} event of this `sap.ui.mdc.field.FieldBase`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.field.FieldBase` itself.
     *
     * This event is fired when the user presses Enter. It allows the application to implement some
     * submit logic.
     *
     * **Note** This event is only triggered if the field is editable.
     *
     * @since 1.82.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSubmit(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: FieldBase$SubmitEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.field.FieldBase` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:submit submit} event of this `sap.ui.mdc.field.FieldBase`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.field.FieldBase` itself.
     *
     * This event is fired when the user presses Enter. It allows the application to implement some
     * submit logic.
     *
     * **Note** This event is only triggered if the field is editable.
     *
     * @since 1.82.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSubmit(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: FieldBase$SubmitEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.field.FieldBase` itself
       */
      oListener?: object
    ): this;
    /**
     * Binds property {@link #getConditions conditions} to model data.
     *
     * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description
     * of the possible properties of `oBindingInfo`
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    bindConditions(
      /**
       * The binding information
       */
      oBindingInfo: PropertyBindingInfo
    ): this;
    /**
     * Checks if all needed information is provided to create the internal content control. If possible create
     * internal controls.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    checkCreateInternalContent(): void;
    /**
     * If the value is the initial value of the type (String types) and the field does not show tokens or operators,
     * no condition must be set as the field is then empty.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns true if value is initial
     */
    checkValueInitial(
      /**
       * Value to be checked
       */
      vValue: any
    ): boolean;
    /**
     * Assigns a `Label` control to the {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.MultiValueField MultiValueField},
     * or {@link sap.ui.mdc.FilterField FilterField} controls.
     *
     * The text of the label is taken from the {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.MultiValueField MultiValueField},
     * or {@link sap.ui.mdc.FilterField FilterField} controls. The `labelFor` association is set to the {@link sap.ui.mdc.Field Field},
     * {@link sap.ui.mdc.MultiValueField MultiValueField}, or {@link sap.ui.mdc.FilterField FilterField} control.
     *
     * @since 1.62.0
     *
     * @returns Reference to `this` to allow method chaining
     */
    connectLabel(
      /**
       * Label control
       */
      oLabel: Label
    ): this;
    /**
     * Destroys the content in the aggregation {@link #getContent content}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;
    /**
     * Destroys the contentDisplay in the aggregation {@link #getContentDisplay contentDisplay}.
     *
     * @since 1.61.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContentDisplay(): this;
    /**
     * Destroys the contentEdit in the aggregation {@link #getContentEdit contentEdit}.
     *
     * @since 1.61.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContentEdit(): this;
    /**
     * Destroys the fieldInfo in the aggregation {@link #getFieldInfo fieldInfo}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFieldInfo(): this;
    /**
     * Destroys the internal content controls.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    destroyInternalContent(): void;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:liveChange liveChange} event of this `sap.ui.mdc.field.FieldBase`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachLiveChange(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: FieldBase$LiveChangeEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.mdc.field.FieldBase`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachPress(
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
     * Detaches event handler `fnFunction` from the {@link #event:submit submit} event of this `sap.ui.mdc.field.FieldBase`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @since 1.82.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSubmit(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: FieldBase$SubmitEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Here inheriting controls need to fire the control-specific change event.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    fireChangeEvent(
      /**
       * Current conditions after change
       */
      aConditions: ConditionObject[],
      /**
       * If `false`, the user input is not valid and leads to an error
       */
      bValid: boolean,
      /**
       * wrong user input (only set if known)
       */
      vWrongValue: any,
      /**
       * `Promise` that is resolved if the changed value is determined, as user might enter some description,
       * and the key neeeds to be determined via back-end request.
       */
      oPromise: Promise<any>
    ): void;
    /**
     * Fires event {@link #event:liveChange liveChange} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireLiveChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: FieldBase$LiveChangeEventParameters
    ): this;
    /**
     * Fires event {@link #event:press press} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    firePress(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:submit submit} to attached listeners.
     *
     * @since 1.82.0
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSubmit(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: FieldBase$SubmitEventParameters
    ): this;
    /**
     * Sets the focus on the stored focus DOM reference.
     */
    focus(
      /**
       * Options for setting the focus
       */
      oFocusInfo?: {
        /**
         * @since 1.60 If set to `true`, the focused element won't be moved into the viewport if it's not completely
         * visible before the focus is set
         */
        preventScroll?: boolean;
        /**
         * @since 1.98 Further control-specific setting of the focus target within the control
         */
        targetInfo?: {
          /**
           * @since 1.114 Suppresses typeahead opening
           */
          silent?: boolean;
        };
      }
    ): void;
    /**
     * Returns the configuration for the additional data type.
     *
     * For a {@link sap.ui.mdc.Field Field}, the data type is determined from the binding of the `additionalValue`.
     * For a {@link sap.ui.mdc.MultiValueField MultiValueField}, the data type is determined from the binding
     * of the `description` of an item. For a {@link sap.ui.mdc.FilterField FilterField}, the data type is provided
     * via the `additionalDataType` property.
     *
     * @since 1.118.0
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Type instance of a configuration object
     */
    getAdditionalDataTypeConfiguration(): Type | object;
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * Determines the `BaseType` of the currently used data type.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns BaseType
     */
    getBaseType(): BaseType | keyof typeof BaseType;
    /**
     * Gets current value of property {@link #getConditions conditions}.
     *
     * Sets the conditions that represent the values of the field.
     *
     * These should be bound to a {@link sap.ui.mdc.condition.ConditionModel ConditionModel} using the corresponding
     * `fieldPath`.
     *
     * **Note:** For {@link sap.ui.mdc.FilterField FilterField} controls, the `conditions` property must be
     * used to bind {@link sap.ui.mdc.FilterField FilterField} to a {@link sap.ui.mdc.condition.ConditionModel ConditionModel}.
     *  For example, for a {@link sap.ui.mdc.FilterField FilterField} control inside a {@link sap.ui.mdc.FilterBar FilterBar }
     * control, the binding looks like this:
     *  `conditions="{$filters>/conditions/propertyPath}"` with the following data:
     * 	 - `$filters` as the name of the condition model
     * 	 - `/conditions/` as a required static part of the binding
     * 	 - `propertyPath` as the property name
     *
     * **Note:** A condition must have the structure of {@link sap.ui.mdc.condition.ConditionObject ConditionObject}.
     *
     * Default value is `[]`.
     *
     *
     * @returns Value of property `conditions`
     */
    getConditions(): object[];
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Optional content that can be rendered.
     *
     * Per default, depending on `editMode`, `multipleLines` and the used data type, a content control is rendered.
     * For simple string types, a {@link sap.m.Text Text} control is rendered in display mode and a {@link sap.m.Input Input }
     * control in edit mode. If a control is assigned in the `content` aggregation, this will be rendered instead.
     *
     * **Note:** Bind the value-holding property of the control to `'$field>/conditions'` using {@link sap.ui.mdc.field.ConditionsType ConditionsType }
     * as type.
     *
     * If the control needs to show multiple conditions, bind its aggregation to '$field>/conditions'.
     * Bind the item controls value-holding property using {@link sap.ui.mdc.field.ConditionType ConditionType }
     * as type.
     *
     * **Warning:** Only controls allowed in a {@link sap.ui.layout.form.Form Form} are allowed to be used for
     * this optional content. Other controls might break the layout. This means the {@link sap.ui.core.IFormContent IFormContent }
     * interface needs to be implemented by these controls.
     */
    getContent(): Control1;
    /**
     * Gets content of aggregation {@link #getContentDisplay contentDisplay}.
     *
     * Optional content to be rendered if the `editMode` property is set to `Display`.
     *
     * Per default, depending on `multipleLines` and the used data type, a content control is rendered in display
     * mode. For simple string types, a {@link sap.m.Text Text} control is rendered in display mode. If a control
     * is assigned in the `contentDisplay` aggregation, this will be rendered instead.
     *
     * **Note:** If a control is assigned to the `content` aggregation, this one is ignored.
     *
     * **Note:** Bind the value-holding property of the control to `'$field>/conditions'` using {@link sap.ui.mdc.field.ConditionsType ConditionsType }
     * as type.
     *
     * If the control needs to show multiple conditions, bind its aggregation to '$field>/conditions'.
     * Bind the item controls value-holding property using {@link sap.ui.mdc.field.ConditionType ConditionType }
     * as type.
     *
     * **Warning:** Only controls allowed in a {@link sap.ui.layout.form.Form Form} are allowed to be used for
     * this optional content. Other controls might break the layout. This means the {@link sap.ui.core.IFormContent IFormContent }
     * interface needs to be implemented by these controls.
     *
     * @since 1.61.0
     */
    getContentDisplay(): Control1;
    /**
     * Gets content of aggregation {@link #getContentEdit contentEdit}.
     *
     * Optional content to be rendered if the `editMode` property is not set to `Display`.
     *
     * Per default, depending on `multipleLines` and the used data type, a content control is rendered in edit
     * mode. For simple string types, an {@link sap.m.Input Input} control is rendered in edit mode. If a control
     * is assigned in the `contentEdit` aggregation, this will be rendered instead.
     *
     * **Note:** If a control is assigned to the `content` aggregation, this one is ignored.
     *
     * **Note:** Bind the value-holding property of the control to `'$field>/conditions'` using {@link sap.ui.mdc.field.ConditionsType ConditionsType }
     * as type.
     *
     * If the control needs to show multiple conditions, bind its aggregation to '$field>/conditions'.
     * Bind the item controls value-holding property using {@link sap.ui.mdc.field.ConditionType ConditionType }
     * as type.
     *
     * **Warning:** Only controls allowed in a {@link sap.ui.layout.form.Form Form} are allowed to be used for
     * this optional content. Other controls might break the layout. This means the {@link sap.ui.core.IFormContent IFormContent }
     * interface needs to be implemented by these controls.
     *
     * @since 1.61.0
     */
    getContentEdit(): Control1;
    /**
     * Returns the `ContentFactory` used to manage the internal content control.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns oContentFactory the ContentFactory of the Field
     */
    getContentFactory(): /* was: sap.ui.mdc.field.content.ContentFactory */ any;
    /**
     * Gets the currently used content controls.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Array of content controls
     */
    getCurrentContent(): Control1[];
    /**
     * Gets current value of property {@link #getDataType dataType}.
     *
     * The type of data handled by the field. This type is used to parse, format, and validate the value.
     *
     * **Note:** The module of the data type should be loaded before it is assigned to the field. Otherwise
     * the asynchronous loading of the module might lead to unwanted side effects.
     *
     * Default value is `'sap.ui.model.type.String'`.
     *
     *
     * @returns Value of property `dataType`
     */
    getDataType(): string;
    /**
     * Gets current value of property {@link #getDataTypeConstraints dataTypeConstraints}.
     *
     * The constraints of the type specified in `dataType`.
     *
     *
     * @returns Value of property `dataTypeConstraints`
     */
    getDataTypeConstraints(): object;
    /**
     * Gets current value of property {@link #getDataTypeFormatOptions dataTypeFormatOptions}.
     *
     * The format options of the type specified in `dataType`.
     *
     *
     * @returns Value of property `dataTypeFormatOptions`
     */
    getDataTypeFormatOptions(): object;
    /**
     * Gets current value of property {@link #getDelegate delegate}.
     *
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module. The used delegate module must inherit from {@link module:sap/ui/mdc/field/FieldBaseDelegate FieldBaseDelegate }
     *
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/field/FieldBaseDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * Default value is `...see text or source`.
     *
     *
     * @returns Value of property `delegate`
     */
    getDelegate(): object;
    /**
     * Gets current value of property {@link #getDisplay display}.
     *
     * Defines whether the value and/or description of the field is shown and in which order.
     *
     * Default value is `Value`.
     *
     *
     * @returns Value of property `display`
     */
    getDisplay(): FieldDisplay | keyof typeof FieldDisplay;
    /**
     * Gets current value of property {@link #getEditMode editMode}.
     *
     * Determines whether the field is editable, read-only, or disabled.
     *
     * Default value is `Editable`.
     *
     *
     * @returns Value of property `editMode`
     */
    getEditMode(): FieldEditMode | keyof typeof FieldEditMode;
    /**
     * ID of the element which is the current target of the association {@link #getFieldHelp fieldHelp}, or
     * `null`.
     *
     * @deprecated (since 1.114.0) - replaced by {@link #setValueHelp valueHelp} association
     */
    getFieldHelp(): ID | null;
    /**
     * Gets content of aggregation {@link #getFieldInfo fieldInfo}.
     *
     * Optional `FieldInfo` used for detail information. This is only active in display mode. Especially {@link sap.ui.mdc.Link }
     * can be used to activate link features.
     *
     * **Note:** If a special data type is defined or a content control is set, this is ignored.
     */
    getFieldInfo(): FieldInfoBase;
    /**
     * Provides some internals of the field to be used in {@link sap.ui.mdc.field.ConditionsType ConditionsType }
     * for format and parse the conditions.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns formatOptions of the field (see {@link sap.ui.mdc.field.ConditionsType ConditionsType})
     */
    getFormatOptions(): object;
    /**
     * Gets current value of property {@link #getLabel label}.
     *
     * Defines the label text for the field.
     *
     * This can be used by {@link sap.ui.mdc.FilterBar FilterBar} or {@link sap.ui.layout.form.Form Form} controls
     * to create a {@link sap.m.Label Label} control for the field.
     *
     * Default value is `empty string`.
     *
     * @since 1.62.0
     *
     * @returns Value of property `label`
     */
    getLabel(): string;
    /**
     * Gets current value of property {@link #getMaxConditions maxConditions}.
     *
     * Sets the maximum number of conditions that are allowed for this field.
     *
     * The default value of -1 indicates that an unlimited number of conditions can be defined.
     *
     * **Note** If the data type used doesn't support multiple conditions, an error is thrown.
     *
     * Default value is `-1`.
     *
     *
     * @returns Value of property `maxConditions`
     */
    getMaxConditions(): int;
    /**
     * Gets current value of property {@link #getMultipleLines multipleLines}.
     *
     * If set, the `Field` is rendered using a multi-line control.
     *
     * This property only affects types that support multiple lines.
     *
     * This property is only used for single-value fields.
     *
     * **Note** If the data type used doesn't support multiple lines, an error is thrown.
     *
     * Default value is `false`.
     *
     *
     * @returns Value of property `multipleLines`
     */
    getMultipleLines(): boolean;
    /**
     * Required by the {@link sap.m.IOverflowToolbarContent} interface. Registers invalidations event that is
     * fired when width of the control is changed.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Configuration information for the `sap.m.IOverflowToolbarContent` interface.
     */
    getOverflowToolbarConfig(): object;
    /**
     * Gets current value of property {@link #getPlaceholder placeholder}.
     *
     * Defines a short hint intended to help the user with the data entry when the control has no value. If
     * the value is `null`, no placeholder is shown.
     *
     * **Note:** If the rendered control doesn't support this feature, this property is ignored.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Value of property `placeholder`
     */
    getPlaceholder(): string;
    /**
     * Gets current value of property {@link #getRequired required}.
     *
     * Indicates that user input is required.
     *
     * Default value is `false`.
     *
     *
     * @returns Value of property `required`
     */
    getRequired(): boolean;
    /**
     * Determines, based on conditions, the value returned by the `change` event.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns control-dependent value for `change` event
     */
    getResultForChangePromise(
      /**
       * Array of conditions
       */
      aConditions: ConditionType[]
    ): any;
    /**
     * Gets current value of property {@link #getShowEmptyIndicator showEmptyIndicator}.
     *
     * If set, an empty `Field` renders an empty indicator in display mode.
     *
     * This property only takes effect if `editMode` is set to `Display`.
     *
     * **Note** Empty means the `Field` holds no value. If an empty string is a valid value, the `Field` might
     * show nothing, depending on the `display` settings and assigned description or `ValueHelp`.
     *
     * Default value is `false`.
     *
     * @since 1.85.0
     *
     * @returns Value of property `showEmptyIndicator`
     */
    getShowEmptyIndicator(): boolean;
    /**
     * Returns the supported operators.
     *
     * Needs to be overwritten by {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.MultiValueField MultiValueField }
     * and {@link sap.ui.mdc.FilterField FilterField}
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Array of operator names
     */
    getSupportedOperators(): string[];
    /**
     * Gets current value of property {@link #getTextAlign textAlign}.
     *
     * Defines the horizontal alignment of the text that is shown inside the input field.
     *
     * **Note:** If the rendered control doesn't support this feature, this property is ignored.
     *
     * Default value is `Initial`.
     *
     *
     * @returns Value of property `textAlign`
     */
    getTextAlign(): TextAlign | keyof typeof TextAlign;
    /**
     * Gets current value of property {@link #getTextDirection textDirection}.
     *
     * Defines the text directionality of the input field, for example, `RTL` or `LTR`.
     *
     * **Note:** If the rendered control doesn't support this feature, this property is ignored.
     *
     * Default value is `Inherit`.
     *
     *
     * @returns Value of property `textDirection`
     */
    getTextDirection(): TextDirection | keyof typeof TextDirection;
    /**
     * Provides some internals of the unit part of the field to be used in {@link sap.ui.mdc.field.ConditionsType ConditionsType }
     * for format and parse the conditions.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns formatOptions of the field (see {@link sap.ui.mdc.field.ConditionsType ConditionsType})
     */
    getUnitFormatOptions(): object;
    /**
     * ID of the element which is the current target of the association {@link #getValueHelp valueHelp}, or
     * `null`.
     */
    getValueHelp(): ID | null;
    /**
     * Gets current value of property {@link #getValueState valueState}.
     *
     * Visualizes the validation state of the control, for example, `Error`, `Warning` or `Success`.
     *
     * **Note:** The visualization of the `ValueState` property is handled by the inner rendered control. If
     * a control is set (using `content`, `contentEdit`, or `contentDisplay`), this control needs to support
     * the `valueState` behavior, otherwise `valueState` is not visualized.
     *
     * Default value is `None`.
     *
     *
     * @returns Value of property `valueState`
     */
    getValueState(): ValueState | keyof typeof ValueState;
    /**
     * Gets current value of property {@link #getValueStateText valueStateText}.
     *
     * Defines the text that appears in the value state message pop-up. If this has not been specified, a default
     * text from the resource bundle is shown.
     *
     *
     * @returns Value of property `valueStateText`
     */
    getValueStateText(): string;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Defines the width of the control.
     *
     *
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
    /**
     * Handler of the `ModelContextChange` event.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    handleModelContextChange(
      /**
       * event
       */
      oEvent: object
    ): void;
    /**
     * Returns the user interaction state of the control.
     *
     * If the user starts typing or navigates via arrow keys in a value help, the shown value might be updated.
     * But as long as the user has not left the field or pressed the Enter key, the current user input will
     * not be validated or updated or an event fired.
     *
     * As long as the user is interacting with the field, this function returns `true`. If the user interaction
     * has been completed because the user has left the field, pressed the Enter key, or chosen a value from
     * the value help, the function returns `false`.
     *
     * @since 1.117.0
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns `true` if there is a pending user input
     */
    hasPendingUserInput(): boolean;
    /**
     * Initializes internal data-types and dependent objects.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    initDataType(): void;
    /**
     * Checks if the field is already destoyed or destruction has started.
     *
     * In this casse creation of internal content or binding must be prevented.
     *
     * @since 1.115.0
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns True if destroyed or destruction has been started
     */
    isFieldDestroyed(): boolean;
    /**
     * Returns whether the given property value is initial and has not been explicitly set or no binding exist.
     * Even after setting the default value or setting null/undefined (which also causes the default value to
     * be set), the property is no longer initial. A property can be reset to initial state by calling `resetProperty(sPropertyName)`.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns true if the property is initial
     */
    isFieldPropertyInitial(
      /**
       * the name of the property
       */
      sPropertyName: string
    ): boolean;
    /**
     * Checks if there is invalid input.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns True if there is invalid input
     */
    isInvalidInput(): boolean;
    /**
     * Checks if the field is configured to be a `SearchField`
     *
     * Needs to be overwritten by {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.MultiValueField MultiValueField},
     * and {@link sap.ui.mdc.FilterField FilterField}
     *
     * @since 1.115.0
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns True if configures as search field
     */
    isSearchField(): boolean;
    /**
     * Observes changes.
     *
     * To be enhanced by {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.MultiValueField MultiValueField},
     * {@link sap.ui.mdc.FilterField FilterField}, or other inherited controls.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    observeChanges(
      /**
       * Changes
       */
      oChanges: object
    ): void;
    /**
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     *
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllAriaLabelledBy(): ID[];
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
      vAriaLabelledBy: int | ID | Control1
    ): ID | null;
    /**
     * Resets invalid input information.
     *
     * Might be called if Binding changes or field is initialized.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    resetInvalidInput(
      /**
       * If set to `true` the `ValueState` and `ValueStateText` is removed
       */
      bRemoveUIMessage: boolean
    ): void;
    /**
     * Sets a new value for property {@link #getConditions conditions}.
     *
     * Sets the conditions that represent the values of the field.
     *
     * These should be bound to a {@link sap.ui.mdc.condition.ConditionModel ConditionModel} using the corresponding
     * `fieldPath`.
     *
     * **Note:** For {@link sap.ui.mdc.FilterField FilterField} controls, the `conditions` property must be
     * used to bind {@link sap.ui.mdc.FilterField FilterField} to a {@link sap.ui.mdc.condition.ConditionModel ConditionModel}.
     *  For example, for a {@link sap.ui.mdc.FilterField FilterField} control inside a {@link sap.ui.mdc.FilterBar FilterBar }
     * control, the binding looks like this:
     *  `conditions="{$filters>/conditions/propertyPath}"` with the following data:
     * 	 - `$filters` as the name of the condition model
     * 	 - `/conditions/` as a required static part of the binding
     * 	 - `propertyPath` as the property name
     *
     * **Note:** A condition must have the structure of {@link sap.ui.mdc.condition.ConditionObject ConditionObject}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `[]`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setConditions(
      /**
       * New value for property `conditions`
       */
      sConditions?: object[]
    ): this;
    /**
     * Sets the aggregated {@link #getContent content}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setContent(
      /**
       * The content to set
       */
      oContent: Control1
    ): this;
    /**
     * Sets the aggregated {@link #getContentDisplay contentDisplay}.
     *
     * @since 1.61.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setContentDisplay(
      /**
       * The contentDisplay to set
       */
      oContentDisplay: Control1
    ): this;
    /**
     * Sets the aggregated {@link #getContentEdit contentEdit}.
     *
     * @since 1.61.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setContentEdit(
      /**
       * The contentEdit to set
       */
      oContentEdit: Control1
    ): this;
    /**
     * Sets a new value for property {@link #getDataType dataType}.
     *
     * The type of data handled by the field. This type is used to parse, format, and validate the value.
     *
     * **Note:** The module of the data type should be loaded before it is assigned to the field. Otherwise
     * the asynchronous loading of the module might lead to unwanted side effects.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `'sap.ui.model.type.String'`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDataType(
      /**
       * New value for property `dataType`
       */
      sDataType?: string
    ): this;
    /**
     * Sets a new value for property {@link #getDataTypeConstraints dataTypeConstraints}.
     *
     * The constraints of the type specified in `dataType`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDataTypeConstraints(
      /**
       * New value for property `dataTypeConstraints`
       */
      oDataTypeConstraints?: object
    ): this;
    /**
     * Sets a new value for property {@link #getDataTypeFormatOptions dataTypeFormatOptions}.
     *
     * The format options of the type specified in `dataType`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDataTypeFormatOptions(
      /**
       * New value for property `dataTypeFormatOptions`
       */
      oDataTypeFormatOptions?: object
    ): this;
    /**
     * Sets a new value for property {@link #getDelegate delegate}.
     *
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module. The used delegate module must inherit from {@link module:sap/ui/mdc/field/FieldBaseDelegate FieldBaseDelegate }
     *
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/field/FieldBaseDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `...see text or source`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDelegate(
      /**
       * New value for property `delegate`
       */
      oDelegate?: object
    ): this;
    /**
     * Sets a new value for property {@link #getDisplay display}.
     *
     * Defines whether the value and/or description of the field is shown and in which order.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Value`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDisplay(
      /**
       * New value for property `display`
       */
      sDisplay?: FieldDisplay | keyof typeof FieldDisplay
    ): this;
    /**
     * Sets a new value for property {@link #getEditMode editMode}.
     *
     * Determines whether the field is editable, read-only, or disabled.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Editable`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEditMode(
      /**
       * New value for property `editMode`
       */
      sEditMode?: FieldEditMode | keyof typeof FieldEditMode
    ): this;
    /**
     * Sets the associated {@link #getFieldHelp fieldHelp}.
     *
     * @deprecated (since 1.114.0) - replaced by {@link #setValueHelp valueHelp} association
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFieldHelp(
      /**
       * ID of an element which becomes the new target of this fieldHelp association; alternatively, an element
       * instance may be given
       */
      oFieldHelp: ID | ValueHelp
    ): this;
    /**
     * Sets the aggregated {@link #getFieldInfo fieldInfo}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFieldInfo(
      /**
       * The fieldInfo to set
       */
      oFieldInfo: FieldInfoBase
    ): this;
    /**
     * Sets a new value for property {@link #getLabel label}.
     *
     * Defines the label text for the field.
     *
     * This can be used by {@link sap.ui.mdc.FilterBar FilterBar} or {@link sap.ui.layout.form.Form Form} controls
     * to create a {@link sap.m.Label Label} control for the field.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @since 1.62.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLabel(
      /**
       * New value for property `label`
       */
      sLabel?: string
    ): this;
    /**
     * Sets a new value for property {@link #getMaxConditions maxConditions}.
     *
     * Sets the maximum number of conditions that are allowed for this field.
     *
     * The default value of -1 indicates that an unlimited number of conditions can be defined.
     *
     * **Note** If the data type used doesn't support multiple conditions, an error is thrown.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `-1`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMaxConditions(
      /**
       * New value for property `maxConditions`
       */
      iMaxConditions?: int
    ): this;
    /**
     * Sets a new value for property {@link #getMultipleLines multipleLines}.
     *
     * If set, the `Field` is rendered using a multi-line control.
     *
     * This property only affects types that support multiple lines.
     *
     * This property is only used for single-value fields.
     *
     * **Note** If the data type used doesn't support multiple lines, an error is thrown.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMultipleLines(
      /**
       * New value for property `multipleLines`
       */
      bMultipleLines?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getPlaceholder placeholder}.
     *
     * Defines a short hint intended to help the user with the data entry when the control has no value. If
     * the value is `null`, no placeholder is shown.
     *
     * **Note:** If the rendered control doesn't support this feature, this property is ignored.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setPlaceholder(
      /**
       * New value for property `placeholder`
       */
      sPlaceholder?: string
    ): this;
    /**
     * Sets a new value for property {@link #getRequired required}.
     *
     * Indicates that user input is required.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setRequired(
      /**
       * New value for property `required`
       */
      bRequired?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowEmptyIndicator showEmptyIndicator}.
     *
     * If set, an empty `Field` renders an empty indicator in display mode.
     *
     * This property only takes effect if `editMode` is set to `Display`.
     *
     * **Note** Empty means the `Field` holds no value. If an empty string is a valid value, the `Field` might
     * show nothing, depending on the `display` settings and assigned description or `ValueHelp`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @since 1.85.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowEmptyIndicator(
      /**
       * New value for property `showEmptyIndicator`
       */
      bShowEmptyIndicator?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getTextAlign textAlign}.
     *
     * Defines the horizontal alignment of the text that is shown inside the input field.
     *
     * **Note:** If the rendered control doesn't support this feature, this property is ignored.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Initial`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTextAlign(
      /**
       * New value for property `textAlign`
       */
      sTextAlign?: TextAlign | keyof typeof TextAlign
    ): this;
    /**
     * Sets a new value for property {@link #getTextDirection textDirection}.
     *
     * Defines the text directionality of the input field, for example, `RTL` or `LTR`.
     *
     * **Note:** If the rendered control doesn't support this feature, this property is ignored.
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
     * Sets the associated {@link #getValueHelp valueHelp}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setValueHelp(
      /**
       * ID of an element which becomes the new target of this valueHelp association; alternatively, an element
       * instance may be given
       */
      oValueHelp: ID | ValueHelp
    ): this;
    /**
     * Sets a new value for property {@link #getValueState valueState}.
     *
     * Visualizes the validation state of the control, for example, `Error`, `Warning` or `Success`.
     *
     * **Note:** The visualization of the `ValueState` property is handled by the inner rendered control. If
     * a control is set (using `content`, `contentEdit`, or `contentDisplay`), this control needs to support
     * the `valueState` behavior, otherwise `valueState` is not visualized.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setValueState(
      /**
       * New value for property `valueState`
       */
      sValueState?: ValueState | keyof typeof ValueState
    ): this;
    /**
     * Sets a new value for property {@link #getValueStateText valueStateText}.
     *
     * Defines the text that appears in the value state message pop-up. If this has not been specified, a default
     * text from the resource bundle is shown.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setValueStateText(
      /**
       * New value for property `valueStateText`
       */
      sValueStateText?: string
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Defines the width of the control.
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
     * Triggers a check if all relevant properties are set to create the internal content control.
     *
     * To be sure that the check is not called multiple times, it needs to be checked if there is a pending
     * check. Multiple calls might happen if properties are changed often or the check is triggered during a
     * `BindingContext` update (which is often called in propagation).
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    triggerCheckCreateInternalContent(): void;
    /**
     * Unbinds property {@link #getConditions conditions} from model data.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    unbindConditions(): this;
    /**
     * Triggers an update of the internal content controls.
     *
     * Should be called if properties are changed that might influence the content control.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    updateInternalContent(): void;
  }
  /**
   * Describes the settings that can be provided to the FieldBase constructor.
   */
  export interface $FieldBaseSettings extends $ControlSettings {
    /**
     * The type of data handled by the field. This type is used to parse, format, and validate the value.
     *
     * **Note:** The module of the data type should be loaded before it is assigned to the field. Otherwise
     * the asynchronous loading of the module might lead to unwanted side effects.
     */
    dataType?: string | PropertyBindingInfo;

    /**
     * The constraints of the type specified in `dataType`.
     */
    dataTypeConstraints?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * The format options of the type specified in `dataType`.
     */
    dataTypeFormatOptions?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the field is editable, read-only, or disabled.
     */
    editMode?:
      | (FieldEditMode | keyof typeof FieldEditMode)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Indicates that user input is required.
     */
    required?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the value and/or description of the field is shown and in which order.
     */
    display?:
      | (FieldDisplay | keyof typeof FieldDisplay)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the horizontal alignment of the text that is shown inside the input field.
     *
     * **Note:** If the rendered control doesn't support this feature, this property is ignored.
     */
    textAlign?:
      | (TextAlign | keyof typeof TextAlign)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the text directionality of the input field, for example, `RTL` or `LTR`.
     *
     * **Note:** If the rendered control doesn't support this feature, this property is ignored.
     */
    textDirection?:
      | (TextDirection | keyof typeof TextDirection)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines a short hint intended to help the user with the data entry when the control has no value. If
     * the value is `null`, no placeholder is shown.
     *
     * **Note:** If the rendered control doesn't support this feature, this property is ignored.
     */
    placeholder?: string | PropertyBindingInfo;

    /**
     * Visualizes the validation state of the control, for example, `Error`, `Warning` or `Success`.
     *
     * **Note:** The visualization of the `ValueState` property is handled by the inner rendered control. If
     * a control is set (using `content`, `contentEdit`, or `contentDisplay`), this control needs to support
     * the `valueState` behavior, otherwise `valueState` is not visualized.
     */
    valueState?:
      | (ValueState | keyof typeof ValueState)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the text that appears in the value state message pop-up. If this has not been specified, a default
     * text from the resource bundle is shown.
     */
    valueStateText?: string | PropertyBindingInfo;

    /**
     * Defines the width of the control.
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * If set, the `Field` is rendered using a multi-line control.
     *
     * This property only affects types that support multiple lines.
     *
     * This property is only used for single-value fields.
     *
     * **Note** If the data type used doesn't support multiple lines, an error is thrown.
     */
    multipleLines?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Sets the maximum number of conditions that are allowed for this field.
     *
     * The default value of -1 indicates that an unlimited number of conditions can be defined.
     *
     * **Note** If the data type used doesn't support multiple conditions, an error is thrown.
     */
    maxConditions?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Sets the conditions that represent the values of the field.
     *
     * These should be bound to a {@link sap.ui.mdc.condition.ConditionModel ConditionModel} using the corresponding
     * `fieldPath`.
     *
     * **Note:** For {@link sap.ui.mdc.FilterField FilterField} controls, the `conditions` property must be
     * used to bind {@link sap.ui.mdc.FilterField FilterField} to a {@link sap.ui.mdc.condition.ConditionModel ConditionModel}.
     *  For example, for a {@link sap.ui.mdc.FilterField FilterField} control inside a {@link sap.ui.mdc.FilterBar FilterBar }
     * control, the binding looks like this:
     *  `conditions="{$filters>/conditions/propertyPath}"` with the following data:
     * 	 - `$filters` as the name of the condition model
     * 	 - `/conditions/` as a required static part of the binding
     * 	 - `propertyPath` as the property name
     *
     * **Note:** A condition must have the structure of {@link sap.ui.mdc.condition.ConditionObject ConditionObject}.
     */
    conditions?: object[] | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the label text for the field.
     *
     * This can be used by {@link sap.ui.mdc.FilterBar FilterBar} or {@link sap.ui.layout.form.Form Form} controls
     * to create a {@link sap.m.Label Label} control for the field.
     *
     * @since 1.62.0
     */
    label?: string | PropertyBindingInfo;

    /**
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module. The used delegate module must inherit from {@link module:sap/ui/mdc/field/FieldBaseDelegate FieldBaseDelegate }
     *
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/field/FieldBaseDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     */
    delegate?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * If set, an empty `Field` renders an empty indicator in display mode.
     *
     * This property only takes effect if `editMode` is set to `Display`.
     *
     * **Note** Empty means the `Field` holds no value. If an empty string is a valid value, the `Field` might
     * show nothing, depending on the `display` settings and assigned description or `ValueHelp`.
     *
     * @since 1.85.0
     */
    showEmptyIndicator?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Optional content that can be rendered.
     *
     * Per default, depending on `editMode`, `multipleLines` and the used data type, a content control is rendered.
     * For simple string types, a {@link sap.m.Text Text} control is rendered in display mode and a {@link sap.m.Input Input }
     * control in edit mode. If a control is assigned in the `content` aggregation, this will be rendered instead.
     *
     * **Note:** Bind the value-holding property of the control to `'$field>/conditions'` using {@link sap.ui.mdc.field.ConditionsType ConditionsType }
     * as type.
     *
     * If the control needs to show multiple conditions, bind its aggregation to '$field>/conditions'.
     * Bind the item controls value-holding property using {@link sap.ui.mdc.field.ConditionType ConditionType }
     * as type.
     *
     * **Warning:** Only controls allowed in a {@link sap.ui.layout.form.Form Form} are allowed to be used for
     * this optional content. Other controls might break the layout. This means the {@link sap.ui.core.IFormContent IFormContent }
     * interface needs to be implemented by these controls.
     */
    content?: Control1;

    /**
     * Optional content to be rendered if the `editMode` property is not set to `Display`.
     *
     * Per default, depending on `multipleLines` and the used data type, a content control is rendered in edit
     * mode. For simple string types, an {@link sap.m.Input Input} control is rendered in edit mode. If a control
     * is assigned in the `contentEdit` aggregation, this will be rendered instead.
     *
     * **Note:** If a control is assigned to the `content` aggregation, this one is ignored.
     *
     * **Note:** Bind the value-holding property of the control to `'$field>/conditions'` using {@link sap.ui.mdc.field.ConditionsType ConditionsType }
     * as type.
     *
     * If the control needs to show multiple conditions, bind its aggregation to '$field>/conditions'.
     * Bind the item controls value-holding property using {@link sap.ui.mdc.field.ConditionType ConditionType }
     * as type.
     *
     * **Warning:** Only controls allowed in a {@link sap.ui.layout.form.Form Form} are allowed to be used for
     * this optional content. Other controls might break the layout. This means the {@link sap.ui.core.IFormContent IFormContent }
     * interface needs to be implemented by these controls.
     *
     * @since 1.61.0
     */
    contentEdit?: Control1;

    /**
     * Optional content to be rendered if the `editMode` property is set to `Display`.
     *
     * Per default, depending on `multipleLines` and the used data type, a content control is rendered in display
     * mode. For simple string types, a {@link sap.m.Text Text} control is rendered in display mode. If a control
     * is assigned in the `contentDisplay` aggregation, this will be rendered instead.
     *
     * **Note:** If a control is assigned to the `content` aggregation, this one is ignored.
     *
     * **Note:** Bind the value-holding property of the control to `'$field>/conditions'` using {@link sap.ui.mdc.field.ConditionsType ConditionsType }
     * as type.
     *
     * If the control needs to show multiple conditions, bind its aggregation to '$field>/conditions'.
     * Bind the item controls value-holding property using {@link sap.ui.mdc.field.ConditionType ConditionType }
     * as type.
     *
     * **Warning:** Only controls allowed in a {@link sap.ui.layout.form.Form Form} are allowed to be used for
     * this optional content. Other controls might break the layout. This means the {@link sap.ui.core.IFormContent IFormContent }
     * interface needs to be implemented by these controls.
     *
     * @since 1.61.0
     */
    contentDisplay?: Control1;

    /**
     * Optional `FieldInfo` used for detail information. This is only active in display mode. Especially {@link sap.ui.mdc.Link }
     * can be used to activate link features.
     *
     * **Note:** If a special data type is defined or a content control is set, this is ignored.
     */
    fieldInfo?: FieldInfoBase;

    /**
     * Optional `FieldHelp`.
     *
     * This is an association that allows the usage of one `ValueHelp` instance for multiple fields.
     *
     * **Note:** If the field is inside of a table, do not set the `ValueHelp` instance as `dependent` to the
     * field. If you do, every field instance in every table row gets a clone of it. Put the `ValueHelp` instance
     * e.g. as dependent on the table or page. The `FieldHelp` instance must be somewhere in the control tree,
     * otherwise there might be rendering or update issues.
     *
     * **Note:** For `Boolean` fields, no `ValueHelp` should be added, but a default `ValueHelp` used instead.
     *
     * @deprecated (since 1.114.0) - replaced by {@link #setValueHelp valueHelp} association
     */
    fieldHelp?: ValueHelp | string;

    /**
     * Optional `ValueHelp`.
     *
     * This is an association that allows the usage of one `ValueHelp` instance for multiple fields.
     *
     * **Note:** If the field is inside of a table, do not set the `ValueHelp` instance as `dependent` to the
     * field. If you do, every field instance in every table row gets a clone of it. Put the `ValueHelp` instance
     * e.g. as dependent on the table or page. The `ValueHelp` instance must be somewhere in the control tree,
     * otherwise there might be rendering or update issues.
     *
     * **Note:** For `Boolean` fields, no `ValueHelp` should be added, but a default `ValueHelp` used instead.
     */
    valueHelp?: ValueHelp | string;

    /**
     * Association to controls / IDs that label this control (see WAI-ARIA attribute aria-labelledby).
     */
    ariaLabelledBy?: Array<Control1 | string>;

    /**
     * This event is fired when the value of the field is changed, for example, each time a key is pressed.
     *
     * **Note** This event is only triggered if the used content control has a `liveChange` event.
     */
    liveChange?: (oEvent: FieldBase$LiveChangeEvent) => void;

    /**
     * This event is fired if the inner control has a press event and this is fired.
     */
    press?: (oEvent: Event) => void;

    /**
     * This event is fired when the user presses Enter. It allows the application to implement some
     * submit logic.
     *
     * **Note** This event is only triggered if the field is editable.
     *
     * @since 1.82.0
     */
    submit?: (oEvent: FieldBase$SubmitEvent) => void;
  }

  /**
   * Parameters of the FieldBase#liveChange event.
   */
  export interface FieldBase$LiveChangeEventParameters {
    /**
     * The new value of the input
     */
    value?: string;

    /**
     * Indicates that the ESC key triggered the event
     */
    escPressed?: boolean;

    /**
     * The value of the input before pressing ESC key
     */
    previousValue?: string;
  }

  /**
   * Event object of the FieldBase#liveChange event.
   */
  export type FieldBase$LiveChangeEvent = Event<
    FieldBase$LiveChangeEventParameters,
    FieldBase
  >;

  /**
   * Parameters of the FieldBase#press event.
   */
  export interface FieldBase$PressEventParameters {}

  /**
   * Event object of the FieldBase#press event.
   */
  export type FieldBase$PressEvent = Event<
    FieldBase$PressEventParameters,
    FieldBase
  >;

  /**
   * Parameters of the FieldBase#submit event.
   */
  export interface FieldBase$SubmitEventParameters {
    /**
     * Returns a `Promise` for the change. The `Promise` returns the value if it is resolved. If the last `change`
     * event is synchronous, the `Promise` has already been resolved. If it is asynchronous, it will be resolved
     * after the value has been updated.
     */
    promise?: Promise<any>;
  }

  /**
   * Event object of the FieldBase#submit event.
   */
  export type FieldBase$SubmitEvent = Event<
    FieldBase$SubmitEventParameters,
    FieldBase
  >;
}

declare module "sap/ui/mdc/field/FieldInfoBase" {
  import { default as Element1, $ElementSettings } from "sap/ui/mdc/Element";

  import Event from "sap/ui/base/Event";

  import Control from "sap/ui/core/Control";

  import { DirectLinkObject } from "sap/ui/mdc/Link";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * A `FieldInfoBase` element is a base class that shows any kind of information related to the `Field` control,
   * for example, navigation targets or contact details. This is the basis for link-features. If the link
   * is pressed a popover might be opened.
   *
   * @since 1.54.0
   */
  export default class FieldInfoBase extends Element1 {
    /**
     * Constructor for a new `FieldInfoBase`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $FieldInfoBaseSettings
    );
    /**
     * Constructor for a new `FieldInfoBase`.
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
      mSettings?: $FieldInfoBaseSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.field.FieldInfoBase with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.Element.extend}.
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
      oClassInfo?: sap.ClassInfo<T, FieldInfoBase>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.field.FieldInfoBase.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:dataUpdate dataUpdate} event of this `sap.ui.mdc.field.FieldInfoBase`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.field.FieldInfoBase` itself.
     *
     * This event is fired if the data was updated.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDataUpdate(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.field.FieldInfoBase` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:dataUpdate dataUpdate} event of this `sap.ui.mdc.field.FieldInfoBase`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.field.FieldInfoBase` itself.
     *
     * This event is fired if the data was updated.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDataUpdate(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.field.FieldInfoBase` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:popoverAfterOpen popoverAfterOpen} event of
     * this `sap.ui.mdc.field.FieldInfoBase`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.field.FieldInfoBase` itself.
     *
     * This event is fired after the popover is opened.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPopoverAfterOpen(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.field.FieldInfoBase` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:popoverAfterOpen popoverAfterOpen} event of
     * this `sap.ui.mdc.field.FieldInfoBase`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.field.FieldInfoBase` itself.
     *
     * This event is fired after the popover is opened.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPopoverAfterOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.field.FieldInfoBase` itself
       */
      oListener?: object
    ): this;
    /**
     * Checks if there is a direct navigation or if there is a popover to be opened.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Resolves a Boolean value
     */
    checkDirectNavigation(): Promise<boolean>;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:dataUpdate dataUpdate} event of this `sap.ui.mdc.field.FieldInfoBase`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachDataUpdate(
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
     * Detaches event handler `fnFunction` from the {@link #event:popoverAfterOpen popoverAfterOpen} event of
     * this `sap.ui.mdc.field.FieldInfoBase`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachPopoverAfterOpen(
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
     * Fires event {@link #event:dataUpdate dataUpdate} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireDataUpdate(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:popoverAfterOpen popoverAfterOpen} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    firePopoverAfterOpen(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Returns the content of the popover.
     *
     *
     * @returns `Promise` with a popover content of type sap.ui.Control as result
     */
    getContent(
      /**
       * Function returning the `Popover` control that is created in `createPopover`
       */
      fnGetAutoClosedControl?: Function
    ): Promise<Control>;
    /**
     * Returns a `Promise` resolving into an {@link sap.ui.mdc.link.DirectLinkObject} containing the `href`
     * and `target` of a direct navigation link. Returns a `Promise` resolving into null if there is no direct
     * link.
     *
     *
     * @returns `Promise` resolving into `null` or a {@link sap.ui.mdc.link.DirectLinkObject}
     */
    getDirectLinkHrefAndTarget(): Promise<DirectLinkObject | null>;
    /**
     * Returns the parent control.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns control instance reference
     */
    getSourceControl(): string | string[] | null;
    /**
     * Returns href as a `Promise` that defines the target navigation of the `Link` control created by `Field`.
     * If direct navigation is used, href is returned. If the information panel contains more content than only
     * one link, `null` is returned.
     *
     *
     * @returns Result of `Promise` is href with values {string | null}
     */
    getTriggerHref(): Promise<string | null>;
    /**
     * Returns `true` as a `Promise` result if the control created by `Field` can be triggered.
     *
     *
     * @returns `Promise` resolving into `true` if `FieldInfo` is clickable
     */
    isTriggerable(): Promise<boolean>;
    /**
     * Opens the info panel in the control created by `Field`.
     *
     *
     * @returns `Promise` that is resolved once the popover has been created
     */
    open(
      /**
       * Optional control reference to which the popover is
       */
      oControl: Control,
      /**
       * Object of the event that gets fired by the `onPress` event of the link in `Field` attached. By default
       * the parent is used as reference.
       */
      oEvent: Event
    ): Promise<any>;
  }
  /**
   * Describes the settings that can be provided to the FieldInfoBase constructor.
   */
  export interface $FieldInfoBaseSettings extends $ElementSettings {
    /**
     * This event is fired if the data was updated.
     */
    dataUpdate?: (oEvent: Event) => void;

    /**
     * This event is fired after the popover is opened.
     */
    popoverAfterOpen?: (oEvent: Event) => void;
  }

  /**
   * Parameters of the FieldInfoBase#dataUpdate event.
   */
  export interface FieldInfoBase$DataUpdateEventParameters {}

  /**
   * Event object of the FieldInfoBase#dataUpdate event.
   */
  export type FieldInfoBase$DataUpdateEvent = Event<
    FieldInfoBase$DataUpdateEventParameters,
    FieldInfoBase
  >;

  /**
   * Parameters of the FieldInfoBase#popoverAfterOpen event.
   */
  export interface FieldInfoBase$PopoverAfterOpenEventParameters {}

  /**
   * Event object of the FieldInfoBase#popoverAfterOpen event.
   */
  export type FieldInfoBase$PopoverAfterOpenEvent = Event<
    FieldInfoBase$PopoverAfterOpenEventParameters,
    FieldInfoBase
  >;
}

declare module "sap/ui/mdc/field/MultiValueFieldItem" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * Base type for `MultiValueFieldItem` control. The {@link sap.ui.mdc.MultiValueField MultiValueField} holds
   * its values as items. The `MultiValueFieldItem` element defines these items.
   *
   * @since 1.93.0
   * @experimental (since 1.93)
   */
  export default class MultiValueFieldItem extends UI5Element {
    /**
     * Constructor for a new `MultiValueFieldItem`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $MultiValueFieldItemSettings
    );
    /**
     * Constructor for a new `MultiValueFieldItem`.
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
      mSettings?: $MultiValueFieldItemSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.field.MultiValueFieldItem with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
      oClassInfo?: sap.ClassInfo<T, MultiValueFieldItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.field.MultiValueFieldItem.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getDescription description}.
     *
     * Description of the item.
     *
     *
     * @returns Value of property `description`
     */
    getDescription(): string;
    /**
     * Gets current value of property {@link #getKey key}.
     *
     * Key of the item.
     *
     *
     * @returns Value of property `key`
     */
    getKey(): any;
    /**
     * Sets a new value for property {@link #getDescription description}.
     *
     * Description of the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDescription(
      /**
       * New value for property `description`
       */
      sDescription: string
    ): this;
    /**
     * Sets a new value for property {@link #getKey key}.
     *
     * Key of the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setKey(
      /**
       * New value for property `key`
       */
      oKey: any
    ): this;
  }
  /**
   * Describes the settings that can be provided to the MultiValueFieldItem constructor.
   *
   * @experimental (since 1.93)
   */
  export interface $MultiValueFieldItemSettings extends $ElementSettings {
    /**
     * Key of the item.
     */
    key?: any | PropertyBindingInfo | `{${string}}`;

    /**
     * Description of the item.
     */
    description?: string | PropertyBindingInfo;
  }
}

declare module "sap/ui/mdc/FilterBar" {
  import {
    default as FilterBarBase,
    $FilterBarBaseSettings,
  } from "sap/ui/mdc/filterbar/FilterBarBase";

  import { State } from "sap/ui/mdc/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import FilterBarP13nMode from "sap/ui/mdc/enums/FilterBarP13nMode";

  import FilterField from "sap/ui/mdc/FilterField";

  import { PropertyInfo as PropertyInfo1 } from "sap/ui/mdc/util/PropertyHelper";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * The `FilterBar` control is used to display filter attributes in a user-friendly manner to populate values
   * for a query. The filters are arranged in a logical row that is divided depending on the space available
   * and the width of the filters. The Go button fires the search event, and the Adapt Filters button shows
   * the filter dialog.
   *  The `FilterBar` control creates and handles the filters based on the provided metadata information.
   * The metadata information is provided via the {@link module:sap/ui/mdc/FilterBarDelegate FilterBarDelegate }
   * implementation. This implementation has to be provided by the application.
   *
   * @since 1.61.0
   */
  export default class FilterBar extends FilterBarBase {
    /**
     * Constructor for a new FilterBar.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $FilterBarSettings
    );
    /**
     * Constructor for a new FilterBar.
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
       * initial settings for the new control
       */
      mSettings?: $FilterBarSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.FilterBar with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.filterbar.FilterBarBase.extend}.
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
      oClassInfo?: sap.ClassInfo<T, FilterBar>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.FilterBar.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Returns the external conditions of the inner condition model. **Note:** This API returns only attributes
     * related to the {@link sap.ui.mdc.FilterBar#setP13nMode p13nMode} property configuration.
     *
     *
     * @returns Object containing the current status of the {@link sap.ui.mdc.FilterBar FilterBar} control
     */
    getCurrentState(): State;
    /**
     * Gets current value of property {@link #getP13nMode p13nMode}.
     *
     * Specifies the personalization options for the `FilterBar`.
     *
     * @since 1.74
     *
     * @returns Value of property `p13nMode`
     */
    getP13nMode(): Array<FilterBarP13nMode | keyof typeof FilterBarP13nMode>;
    /**
     * Gets current value of property {@link #getShowAdaptFiltersButton showAdaptFiltersButton}.
     *
     * Determines whether the Adapt Filters button is visible in the `FilterBar`.
     *  **Note**: If the `p13nMode` property does not contain the value `Item`, it is ignored.
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `showAdaptFiltersButton`
     */
    getShowAdaptFiltersButton(): boolean;
    /**
     * Gets current value of property {@link #getShowClearButton showClearButton}.
     *
     * Determines whether the Clear button is visible in the `FilterBar`.
     *
     * Default value is `false`.
     *
     * @since 1.108
     *
     * @returns Value of property `showClearButton`
     */
    getShowClearButton(): boolean;
    /**
     * Sets the focus on the first filter in error state.
     *
     *
     * @returns The first filter field in error state
     */
    setFocusOnFirstErroneousField(): FilterField | null;
    /**
     * Sets a new value for property {@link #getP13nMode p13nMode}.
     *
     * Specifies the personalization options for the `FilterBar`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @since 1.74
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setP13nMode(
      /**
       * New value for property `p13nMode`
       */
      sP13nMode: Array<FilterBarP13nMode | keyof typeof FilterBarP13nMode>
    ): this;
    /**
     * Sets a new value for property {@link #getShowAdaptFiltersButton showAdaptFiltersButton}.
     *
     * Determines whether the Adapt Filters button is visible in the `FilterBar`.
     *  **Note**: If the `p13nMode` property does not contain the value `Item`, it is ignored.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowAdaptFiltersButton(
      /**
       * New value for property `showAdaptFiltersButton`
       */
      bShowAdaptFiltersButton?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowClearButton showClearButton}.
     *
     * Determines whether the Clear button is visible in the `FilterBar`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @since 1.108
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowClearButton(
      /**
       * New value for property `showClearButton`
       */
      bShowClearButton?: boolean
    ): this;
  }
  /**
   * @since 1.112.0
   */
  export type PropertyInfo = PropertyInfo1 & {
    /**
     * If set to `false`, the filter is visible in the `FilterBar`
     */
    hiddenFilter?: boolean;
    /**
     * If set to `true`, the filter is mandatory
     */
    required?: boolean;
  };

  /**
   * Describes the settings that can be provided to the FilterBar constructor.
   */
  export interface $FilterBarSettings extends $FilterBarBaseSettings {
    /**
     * Determines whether the Adapt Filters button is visible in the `FilterBar`.
     *  **Note**: If the `p13nMode` property does not contain the value `Item`, it is ignored.
     */
    showAdaptFiltersButton?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the Clear button is visible in the `FilterBar`.
     *
     * @since 1.108
     */
    showClearButton?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies the personalization options for the `FilterBar`.
     *
     * @since 1.74
     */
    p13nMode?:
      | Array<FilterBarP13nMode | keyof typeof FilterBarP13nMode>
      | PropertyBindingInfo
      | `{${string}}`;
  }
}

declare module "sap/ui/mdc/filterbar/FilterBarBase" {
  import { default as Control, $ControlSettings } from "sap/ui/mdc/Control";

  import { IFilterSource, IFilter, IxState, State } from "sap/ui/mdc/library";

  import FilterBarValidationStatus from "sap/ui/mdc/enums/FilterBarValidationStatus";

  import FilterField from "sap/ui/mdc/FilterField";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { ID } from "sap/ui/core/library";

  import VariantManagement from "sap/ui/fl/variants/VariantManagement";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import Event from "sap/ui/base/Event";

  /**
   * The `FilterBarBase` control is the base for filter displaying controls in MDC.
   *
   * @since 1.80.0
   */
  export default class FilterBarBase
    extends Control
    implements IFilterSource, IFilter, IxState
  {
    __implements__sap_ui_mdc_IFilterSource: boolean;
    __implements__sap_ui_mdc_IFilter: boolean;
    __implements__sap_ui_mdc_IxState: boolean;
    /**
     * Constructor for a new `FilterBarBase` control.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $FilterBarBaseSettings
    );
    /**
     * Constructor for a new `FilterBarBase` control.
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
      mSettings?: $FilterBarBaseSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.filterbar.FilterBarBase with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.Control.extend}.
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
      oClassInfo?: sap.ClassInfo<T, FilterBarBase>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.filterbar.FilterBarBase.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:filtersChanged filtersChanged} event of this
     * `sap.ui.mdc.filterbar.FilterBarBase`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.filterbar.FilterBarBase` itself.
     *
     * This event is fired after either a filter value or the visibility of a filter item has been changed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFiltersChanged(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: FilterBarBase$FiltersChangedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.filterbar.FilterBarBase`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:filtersChanged filtersChanged} event of this
     * `sap.ui.mdc.filterbar.FilterBarBase`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.filterbar.FilterBarBase` itself.
     *
     * This event is fired after either a filter value or the visibility of a filter item has been changed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFiltersChanged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: FilterBarBase$FiltersChangedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.filterbar.FilterBarBase`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.mdc.filterbar.FilterBarBase`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.filterbar.FilterBarBase` itself.
     *
     * This event is fired when the Go button is pressed or after a condition change, when `liveMode` is active.
     * **Note**: This event should never be executed programmatically. It is triggered internally by the {@link sap.ui.mdc.FilterBar FilterBar }
     * after the `triggerSearch` function has been executed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSearch(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: FilterBarBase$SearchEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.filterbar.FilterBarBase`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.mdc.filterbar.FilterBarBase`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.filterbar.FilterBarBase` itself.
     *
     * This event is fired when the Go button is pressed or after a condition change, when `liveMode` is active.
     * **Note**: This event should never be executed programmatically. It is triggered internally by the {@link sap.ui.mdc.FilterBar FilterBar }
     * after the `triggerSearch` function has been executed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSearch(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: FilterBarBase$SearchEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.filterbar.FilterBarBase`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Checks the validation status of the filter fields. **Note:** This method returns the current inner state
     * of the {@link sap.ui.mdc.FilterBar FilterBar}.
     *
     *
     * @returns Contains the validation status
     */
    checkFilters(): FilterBarValidationStatus;
    /**
     * Clears non-model value for any filter field and resets the value state to none.
     */
    cleanUpAllFilterFieldsInErrorState(): void;
    /**
     * Destroys the basicSearchField in the aggregation {@link #getBasicSearchField basicSearchField}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyBasicSearchField(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:filtersChanged filtersChanged} event of this
     * `sap.ui.mdc.filterbar.FilterBarBase`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachFiltersChanged(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: FilterBarBase$FiltersChangedEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:search search} event of this `sap.ui.mdc.filterbar.FilterBarBase`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSearch(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: FilterBarBase$SearchEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Fires event {@link #event:filtersChanged filtersChanged} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireFiltersChanged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: FilterBarBase$FiltersChangedEventParameters
    ): this;
    /**
     * Fires event {@link #event:search search} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSearch(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: FilterBarBase$SearchEventParameters
    ): this;
    /**
     * Gets the labels of all filters with a value assignment.
     *
     * **Note:** Filters annotated with `hiddenFilters` will not be considered.
     *
     *
     * @returns Array of labels of filters with value assignment
     */
    getAssignedFilterNames(): string[];
    /**
     * Gets a summary string that contains information about the filters currently assigned. The method returns
     * the text summary for the expanded and collapsed states of the {@link sap.ui.mdc.FilterBar FilterBar }
     * control.
     *
     *
     *
     *
     * @returns A map containing the text information
     */
    getAssignedFiltersText(): Record<string, any>;
    /**
     * Gets content of aggregation {@link #getBasicSearchField basicSearchField}.
     *
     * Contains the optional basic search field. **Note:** This field has to be bound against the `$search`
     * property.
     */
    getBasicSearchField(): FilterField;
    /**
     * Gets the external conditions.
     *
     *
     * @returns Map containing the external conditions
     */
    getConditions(): Record<string, any>;
    /**
     * Gets the external conditions of the inner condition model. **Note:** This API returns only attributes
     * related to the {@link sap.ui.mdc.FilterBar#setP13nMode p13nMode} property configuration.
     *
     *
     * @returns Object containing the current status of the `FilterBarBase`
     */
    getCurrentState(): State;
    /**
     * Gets current value of property {@link #getDelegate delegate}.
     *
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/BaseDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * Default value is `...see text or source`.
     *
     *
     * @returns Value of property `delegate`
     */
    getDelegate(): object;
    /**
     * Gets content of aggregation {@link #getFilterItems filterItems}.
     *
     * Contains all the displayed {@link sap.ui.mdc.FilterField filter fields} of the `FilterBarBase` control.
     *
     * **Note:** This aggregation is managed by the control, can only be populated during the definition in
     * the XML view, and is not bindable. Any changes of the initial aggregation content might result in undesired
     * effects. Changes of the aggregation have to be made with the {@link sap.ui.mdc.p13n.StateUtil StateUtil}.
     */
    getFilterItems(): FilterField[];
    /**
     * Gets current value of property {@link #getLiveMode liveMode}.
     *
     * Triggers a search automatically after a filter value has been changed.
     *  **Note:** The `liveMode` property only operates in non-mobile scenarios.
     *  Additionally, if the `liveMode` property is active, the following applies:
     *  The error message box is not displayed, and the `showMessages` property is ignored.
     *
     * Default value is `false`.
     *
     * @since 1.74
     *
     * @returns Value of property `liveMode`
     */
    getLiveMode(): boolean;
    /**
     * Gets the value of the basic search condition.
     *
     *
     * @returns Value of search condition or empty
     */
    getSearch(): string;
    /**
     * Gets current value of property {@link #getShowGoButton showGoButton}.
     *
     * Indicates whether the Go button is visible in the {@link sap.ui.mdc.FilterBar FilterBar} control.
     *  **Note**: If the `liveMode` property is set to `true`, it is ignored.
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `showGoButton`
     */
    getShowGoButton(): boolean;
    /**
     * Gets current value of property {@link #getShowMessages showMessages}.
     *
     * Indicates whether possible errors during the search in a message box are displayed.
     *
     * Default value is `true`.
     *
     * @since 1.74
     *
     * @returns Value of property `showMessages`
     */
    getShowMessages(): boolean;
    /**
     * Gets current value of property {@link #getSuspendSelection suspendSelection}.
     *
     * If set to `true`, all search requests are ignored. Once it has been set to `false`, a search is triggered
     * immediately if one or more search requests have been triggered in the meantime but were ignored based
     * on the setting.
     *
     * Default value is `false`.
     *
     * @since 1.79.0
     *
     * @returns Value of property `suspendSelection`
     */
    getSuspendSelection(): boolean;
    /**
     * ID of the element which is the current target of the association {@link #getVariantBackreference variantBackreference},
     * or `null`.
     */
    getVariantBackreference(): ID | null;
    /**
     * Checks for the provided `sap.ui.mdc.FilterField` in the aggregation {@link #getFilterItems filterItems}.
     * and returns its index if found or -1 otherwise.
     *
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfFilterItem(
      /**
       * The filterItem whose index is looked for
       */
      oFilterItem: FilterField
    ): int;
    /**
     * Gets the state of initialization. This method does not trigger the retrieval of the metadata.
     *
     *
     * @returns Resolves after the initial filters have been applied
     */
    initialized(): Promise<any>;
    /**
     * Gets the state of initialization. This method triggers the retrieval of the metadata.
     *
     *
     * @returns Resolves after the initial filters have been applied and the metadata has been obtained
     */
    initializedWithMetadata(): Promise<any>;
    /**
     * Sets the aggregated {@link #getBasicSearchField basicSearchField}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setBasicSearchField(
      /**
       * The basicSearchField to set
       */
      oBasicSearchField: FilterField
    ): this;
    /**
     * Sets a new value for property {@link #getDelegate delegate}.
     *
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/BaseDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `...see text or source`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDelegate(
      /**
       * New value for property `delegate`
       */
      oDelegate?: object
    ): this;
    /**
     * Sets a new value for property {@link #getLiveMode liveMode}.
     *
     * Triggers a search automatically after a filter value has been changed.
     *  **Note:** The `liveMode` property only operates in non-mobile scenarios.
     *  Additionally, if the `liveMode` property is active, the following applies:
     *  The error message box is not displayed, and the `showMessages` property is ignored.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @since 1.74
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLiveMode(
      /**
       * New value for property `liveMode`
       */
      bLiveMode?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowGoButton showGoButton}.
     *
     * Indicates whether the Go button is visible in the {@link sap.ui.mdc.FilterBar FilterBar} control.
     *  **Note**: If the `liveMode` property is set to `true`, it is ignored.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowGoButton(
      /**
       * New value for property `showGoButton`
       */
      bShowGoButton?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowMessages showMessages}.
     *
     * Indicates whether possible errors during the search in a message box are displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @since 1.74
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowMessages(
      /**
       * New value for property `showMessages`
       */
      bShowMessages?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSuspendSelection suspendSelection}.
     *
     * If set to `true`, all search requests are ignored. Once it has been set to `false`, a search is triggered
     * immediately if one or more search requests have been triggered in the meantime but were ignored based
     * on the setting.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @since 1.79.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSuspendSelection(
      /**
       * New value for property `suspendSelection`
       */
      bSuspendSelection?: boolean
    ): this;
    /**
     * Sets the associated {@link #getVariantBackreference variantBackreference}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setVariantBackreference(
      /**
       * ID of an element which becomes the new target of this variantBackreference association; alternatively,
       * an element instance may be given
       */
      oVariantBackreference: ID | VariantManagement
    ): this;
    /**
     * Triggers the search.
     *
     *
     * @returns If the {@link sap.ui.mdc.filterbar.FilterBarBase#setSuspendSelection suspendSelection} property
     * is set to `true`, the method will be immediately resolved, otherwise it returns the result of the {@link sap.ui.mdc.filterbar.FilterBarBase#validate }
     * call.
     */
    triggerSearch(): Promise<any>;
    /**
     * Returns a `Promise` for the asynchronous validation of filters.
     *
     *
     * @returns Returns a `Promise` that resolves after the validation of erroneous fields has been propagated.
     */
    validate(
      /**
       * Indicates whether the `search` event is triggered after successful validation
       */
      bSuppressSearch: boolean
    ): Promise<any>;
  }
  /**
   * Describes the settings that can be provided to the FilterBarBase constructor.
   */
  export interface $FilterBarBaseSettings extends $ControlSettings {
    /**
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/BaseDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     */
    delegate?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Triggers a search automatically after a filter value has been changed.
     *  **Note:** The `liveMode` property only operates in non-mobile scenarios.
     *  Additionally, if the `liveMode` property is active, the following applies:
     *  The error message box is not displayed, and the `showMessages` property is ignored.
     *
     * @since 1.74
     */
    liveMode?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Indicates whether possible errors during the search in a message box are displayed.
     *
     * @since 1.74
     */
    showMessages?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Indicates whether the Go button is visible in the {@link sap.ui.mdc.FilterBar FilterBar} control.
     *  **Note**: If the `liveMode` property is set to `true`, it is ignored.
     */
    showGoButton?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies the filter conditions.
     *  **Note**: This property must not be bound.
     *  **Note**: This property is used exclusively for SAPUI5 flexibility. Do not use it otherwise.
     *
     * @since 1.66.0
     */
    filterConditions?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies the filter metadata.
     *  **Note**: This property must not be bound.
     *  **Note**: This property is used exclusively for SAPUI5 flexibility/ Fiori Elements. Do not use it otherwise.
     *  **Node**: Please check {@link sap.ui.mdc.filterbar.PropertyInfo} for more information about the supported
     * inner elements.
     *
     * @since 1.97
     */
    propertyInfo?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * If set to `true`, all search requests are ignored. Once it has been set to `false`, a search is triggered
     * immediately if one or more search requests have been triggered in the meantime but were ignored based
     * on the setting.
     *
     * @since 1.79.0
     */
    suspendSelection?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Contains all the displayed {@link sap.ui.mdc.FilterField filter fields} of the `FilterBarBase` control.
     *
     * **Note:** This aggregation is managed by the control, can only be populated during the definition in
     * the XML view, and is not bindable. Any changes of the initial aggregation content might result in undesired
     * effects. Changes of the aggregation have to be made with the {@link sap.ui.mdc.p13n.StateUtil StateUtil}.
     */
    filterItems?:
      | FilterField[]
      | FilterField
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Contains the optional basic search field. **Note:** This field has to be bound against the `$search`
     * property.
     */
    basicSearchField?: FilterField;

    /**
     * {@link sap.ui.fl.variants.VariantManagement VariantManagement} control for the {@link sap.ui.mdc.FilterBar FilterBar }
     * control. **Note**: This association is only required to get information from {@link https://ui5.sap.com/#/topic/a8e55aa2f8bc4127923b20685a6d1621 SAPUI5 Flexibility }
     * whenever a variant was applied, with 'apply automatically' set to `true`. **Note**: This association
     * must only be assigned once.
     */
    variantBackreference?: VariantManagement | string;

    /**
     * This event is fired when the Go button is pressed or after a condition change, when `liveMode` is active.
     * **Note**: This event should never be executed programmatically. It is triggered internally by the {@link sap.ui.mdc.FilterBar FilterBar }
     * after the `triggerSearch` function has been executed.
     */
    search?: (oEvent: FilterBarBase$SearchEvent) => void;

    /**
     * This event is fired after either a filter value or the visibility of a filter item has been changed.
     */
    filtersChanged?: (oEvent: FilterBarBase$FiltersChangedEvent) => void;
  }

  /**
   * Parameters of the FilterBarBase#filtersChanged event.
   */
  export interface FilterBarBase$FiltersChangedEventParameters {
    /**
     * Indicates if the event is based on condition changes
     */
    conditionsBased?: boolean;

    /**
     * Display text for a collapsed header
     */
    filtersText?: string;

    /**
     * Display text for an expanded header
     */
    filtersTextExpanded?: string;
  }

  /**
   * Event object of the FilterBarBase#filtersChanged event.
   */
  export type FilterBarBase$FiltersChangedEvent = Event<
    FilterBarBase$FiltersChangedEventParameters,
    FilterBarBase
  >;

  /**
   * Parameters of the FilterBarBase#search event.
   */
  export interface FilterBarBase$SearchEventParameters {
    /**
     * Indicates the initial reason for the search. This can either be:
     *
     * 	 - `{@link sap.ui.mdc.enums.ReasonMode.Variant}`: Search is triggered based on variant settings
     * 	 - `{@link sap.ui.mdc.enums.ReasonMode.Enter}`: Search is triggered based on pressing Enter in a filter
     *     field
     * 	 - `{@link sap.ui.mdc.enums.ReasonMode.Go}`: Search is triggered based on pressing the Go button
     * 	 - `{@link sap.ui.mdc.enums.ReasonMode.Unclear}`: Any other reasons for the search
     */
    reason?: /* was: sap.ui.mdc.enums.ReasonMode */ any;
  }

  /**
   * Event object of the FilterBarBase#search event.
   */
  export type FilterBarBase$SearchEvent = Event<
    FilterBarBase$SearchEventParameters,
    FilterBarBase
  >;
}

declare module "sap/ui/mdc/filterbar/IFilterContainer" {
  import FilterField from "sap/ui/mdc/FilterField";

  import Control from "sap/ui/core/Control";

  /**
   * The `IFilterContainer` is the base container for the visualization of the filter items in the {@link sap.ui.mdc.FilterBar FilterBar }
   * control.
   *
   * @since 1.61.0
   */
  export default class IFilterContainer {
    constructor();

    /**
     * Overwrites the default exit to clean up the created layout properly.
     */
    exit(): void;
    /**
     * Gets the inner controls of the layout item.
     *
     *
     * @returns Array of all inner controls in the layout item
     */
    getFilterFields(): FilterField[];
    /**
     * Gets the inner layout item.
     *
     *
     * @returns Control instance of the inner layout item
     */
    getInner(): Control;
    /**
     * Creates the inner layout for the `IFilterContainer`.
     */
    init(): void;
    /**
     * Inserts the inner content into the layout item.
     */
    insertFilterField(
      /**
       * to be inserted
       */
      oControl: FilterField,
      /**
       * Position where the control is added
       */
      iIndex: int
    ): void;
    /**
     * Removes the inner content from the layout item.
     */
    removeFilterField(
      /**
       * Control that is removed
       */
      oControl: FilterField
    ): void;
  }
}

declare module "sap/ui/mdc/filterbar/vh/FilterBar" {
  import {
    default as FilterBarBase,
    $FilterBarBaseSettings,
  } from "sap/ui/mdc/filterbar/FilterBarBase";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * The `FilterBar` control is used to display filter properties in a user-friendly manner to populate values
   * for a query. The filters are arranged in a logical row that is divided depending on the space available
   * and the width of the filters. The Go button triggers the search event, and the Show Filters button shows
   * the additional filter field.
   *  The `FilterBar` control creates and handles the filters based on the provided metadata information.
   * The metadata information is provided via the {@link module:sap/ui/mdc/FilterBarDelegate FilterBarDelegate }
   * implementation. This implementation has to be provided by the application.
   *  **Note:** The `FilterBar` can only be used for a {@link sap.ui.mdc.valuehelp.Dialog Dialog} and not
   * on its own.
   *
   * @since 1.84.0
   * @deprecated (since 1.124.0) - Please use the `sap.ui.mdc.valuehelp.FilterBar` control instead.
   */
  export default class FilterBar extends FilterBarBase {
    /**
     * Constructor for a new `FilterBar` for a value help dialog.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $FilterBarSettings
    );
    /**
     * Constructor for a new `FilterBar` for a value help dialog.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * initial settings for the new control
       */
      mSettings?: $FilterBarSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.filterbar.vh.FilterBar with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.filterbar.FilterBarBase.extend}.
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
      oClassInfo?: sap.ClassInfo<T, FilterBar>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.filterbar.vh.FilterBar.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }
  /**
   * Describes the settings that can be provided to the FilterBar constructor.
   *
   * @deprecated (since 1.124.0) - Please use the `sap.ui.mdc.valuehelp.FilterBar` control instead.
   */
  export interface $FilterBarSettings extends $FilterBarBaseSettings {}
}

declare module "sap/ui/mdc/FilterField" {
  import {
    default as FieldBase,
    $FieldBaseSettings,
  } from "sap/ui/mdc/field/FieldBase";

  import { IFormContent, ISemanticFormContent } from "sap/ui/core/library";

  import { IOverflowToolbarContent } from "sap/m/library";

  import Operator from "sap/ui/mdc/condition/Operator";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  import Event from "sap/ui/base/Event";

  /**
   * The `FilterField` control is used to filter data based on the conditions. The conditions are managed
   * in the corresponding {@link sap.ui.mdc.condition.ConditionModel ConditionModel}. That is why the `conditions`
   * property must be bound to the related conditions in the {@link sap.ui.mdc.condition.ConditionModel ConditionModel}.
   * The type of this data must be defined in the `dataType` property.
   *
   * Based on the data type settings, a default control is rendered by the `FilterField` as follows:
   *
   *
   * 	 - In display mode, usually a {@link sap.m.Text Text} control is rendered.
   * 	 - If `multipleLines` is set, an {@link sap.m.ExpandableText ExpandableText} control is rendered.
   * 	 - If multiple values are allowed, a {@link sap.m.Tokenizer Tokenizer} control is rendered.
   * 	 - In edit mode, usually an {@link sap.m.Input Input} control is rendered.
   * 	 - If multiple values are allowed, a {@link sap.m.MultiInput MultiInput} control is rendered.
   * 	 - If `multipleLines` is set, a {@link sap.m.TextArea TextArea} control is rendered.
   * 	 - If a date type or a date/time type is used, a {@link sap.m.DateRangeSelection DateRangeSelection }
   *     control is rendered.
   * 	 - If a date type is used and only single values are allowed, a {@link sap.m.DatePicker DatePicker }
   *     control is rendered.
   * 	 - If a date type is used and only single ranges are allowed, a {@link sap.m.DateRangeSelection DateRangeSelection }
   *     control is rendered.
   * 	 - If a date/time type is used and only single values are allowed, a {@link sap.m.DateTimePicker DateTimePicker }
   *     control is rendered.
   * 	 - If a time type is used and only single values are allowed, a {@link sap.m.TimePicker TimePicker }
   *     control is rendered.
   * 	 - If used for search, a {@link sap.m.SearchField SearchField} control is rendered.
   *
   * @since 1.48.0
   */
  export default class FilterField
    extends FieldBase
    implements IFormContent, ISemanticFormContent, IOverflowToolbarContent
  {
    __implements__sap_ui_core_IFormContent: boolean;
    __implements__sap_ui_core_ISemanticFormContent: boolean;
    __implements__sap_m_IOverflowToolbarContent: boolean;
    /**
     * Constructor for a new `FilterField`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $FilterFieldSettings
    );
    /**
     * Constructor for a new `FilterField`.
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
      mSettings?: $FilterFieldSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.FilterField with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.field.FieldBase.extend}.
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
      oClassInfo?: sap.ClassInfo<T, FilterField>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.FilterField.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds an operator to the list of known operators.
     *
     * **Note**: If no operator is set, the used `datatType` of the `FilterField` defines the set of default
     * operators. The standard operators are mentioned in {@link sap.ui.mdc.enums.OperatorName OperatorName}.
     *
     *
     * @returns Reference to `this` to allow method chaining
     */
    addOperator(
      /**
       * The operator instance or operator name
       */
      vOperator: Operator | string
    ): this;
    /**
     * Adds an array of operators to the list of known operators.
     *
     * **Note**: `aOperators` can be the name of an {@link sap.ui.mdc.condition.Operator Operator}, the instance
     * itself, or multiple operators inside an array. The standard operators are mentioned in {@link sap.ui.mdc.enums.OperatorName OperatorName}.
     *
     *
     * @returns Reference to `this` to allow method chaining
     */
    addOperators(
      /**
       * Array of operators
       */
      aOperators: Operator[]
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.mdc.FilterField`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.FilterField` itself.
     *
     * This event is fired when the `value` property of the field is changed.
     *
     * **Note** This event is only triggered if the used content control has a change event.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: FilterField$ChangeEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.FilterField` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.mdc.FilterField`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.FilterField` itself.
     *
     * This event is fired when the `value` property of the field is changed.
     *
     * **Note** This event is only triggered if the used content control has a change event.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: FilterField$ChangeEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.FilterField` itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.mdc.FilterField`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachChange(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: FilterField$ChangeEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Fires event {@link #event:change change} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: FilterField$ChangeEventParameters
    ): this;
    /**
     * Gets current value of property {@link #getAdditionalDataType additionalDataType}.
     *
     * The type of data for the description part of an "equal to" condition. This type is used to parse, format,
     * and validate the value.
     *
     * Here a data type instance can be provided or an object containing `name`, `formatOptions`, and `constraints`.
     *
     * @since 1.118.0
     *
     * @returns Value of property `additionalDataType`
     */
    getAdditionalDataType(): object;
    /**
     * Gets current value of property {@link #getDefaultOperator defaultOperator}.
     *
     * Default operator name for conditions. If empty, the relevant default operator depending on the data type
     * used is taken.
     *
     * **Note**: `defaultOperator` can be the name of an {@link sap.ui.mdc.condition.Operator Operator} or the
     * instance itself.
     *
     * @since 1.88.0
     *
     * @returns Value of property `defaultOperator`
     */
    getDefaultOperator(): string;
    /**
     * Gets current value of property {@link #getOperators operators}.
     *
     * Supported operator names for conditions.
     *
     * If empty, default operators depending on used data type are taken. The standard operators are mentioned
     * in {@link sap.ui.mdc.enums.OperatorName OperatorName}.
     *
     * **Note:** If a custom control is used as {@link sap.ui.mdc.field.FieldBase#setContent Content}, {@link sap.ui.mdc.field.FieldBase#setContentEdit ContentEdit},
     * or {@link sap.ui.mdc.field.FieldBase#setContentDisplay ContentDisplay}, and the custom control only supports
     * one operator (as no operator can be shown), only the required operator must be set. So the user input
     * into the custom control creates a condition with the set operator, and a condition with this operator
     * provides the value the custom control needs.
     *
     * Default value is `[]`.
     *
     * @since 1.73.0
     *
     * @returns Value of property `operators`
     */
    getOperators(): string[];
    /**
     * Gets current value of property {@link #getPropertyKey propertyKey}.
     *
     * Key of the property the `FilterField` represents.
     *
     * Default value is `empty string`.
     *
     * @since 1.115.0
     *
     * @returns Value of property `propertyKey`
     */
    getPropertyKey(): string;
    /**
     * Removes all operators from the list of known operators.
     */
    removeAllOperators(): void;
    /**
     * Removes an operator from the list of known operators. The standard operators can are mentioned in {@link sap.ui.mdc.enums.OperatorName OperatorName}.
     */
    removeOperator(
      /**
       * The operator instance or operator name
       */
      vOperator: Operator | string
    ): void;
    /**
     * Removes all given operators from the list of known operators.
     *
     * **Note**: `aOperators` can be the name of an {@link sap.ui.mdc.condition.Operator Operator}, the instance
     * itself, or multiple operators inside an array. The standard operators are mentioned in {@link sap.ui.mdc.enums.OperatorName OperatorName}.
     */
    removeOperators(
      /**
       * Array of operators
       */
      aOperators: Operator[]
    ): void;
    /**
     * Sets a new value for property {@link #getAdditionalDataType additionalDataType}.
     *
     * The type of data for the description part of an "equal to" condition. This type is used to parse, format,
     * and validate the value.
     *
     * Here a data type instance can be provided or an object containing `name`, `formatOptions`, and `constraints`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @since 1.118.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAdditionalDataType(
      /**
       * New value for property `additionalDataType`
       */
      oAdditionalDataType?: object
    ): this;
    /**
     * Sets a new value for property {@link #getDefaultOperator defaultOperator}.
     *
     * Default operator name for conditions. If empty, the relevant default operator depending on the data type
     * used is taken.
     *
     * **Note**: `defaultOperator` can be the name of an {@link sap.ui.mdc.condition.Operator Operator} or the
     * instance itself.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @since 1.88.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDefaultOperator(
      /**
       * New value for property `defaultOperator`
       */
      sDefaultOperator?: string
    ): this;
    /**
     * Sets a new value for property {@link #getOperators operators}.
     *
     * Supported operator names for conditions.
     *
     * If empty, default operators depending on used data type are taken. The standard operators are mentioned
     * in {@link sap.ui.mdc.enums.OperatorName OperatorName}.
     *
     * **Note:** If a custom control is used as {@link sap.ui.mdc.field.FieldBase#setContent Content}, {@link sap.ui.mdc.field.FieldBase#setContentEdit ContentEdit},
     * or {@link sap.ui.mdc.field.FieldBase#setContentDisplay ContentDisplay}, and the custom control only supports
     * one operator (as no operator can be shown), only the required operator must be set. So the user input
     * into the custom control creates a condition with the set operator, and a condition with this operator
     * provides the value the custom control needs.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `[]`.
     *
     * @since 1.73.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setOperators(
      /**
       * New value for property `operators`
       */
      sOperators?: string[]
    ): this;
    /**
     * Sets a new value for property {@link #getPropertyKey propertyKey}.
     *
     * Key of the property the `FilterField` represents.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @since 1.115.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setPropertyKey(
      /**
       * New value for property `propertyKey`
       */
      sPropertyKey?: string
    ): this;
  }
  /**
   * Describes the settings that can be provided to the FilterField constructor.
   */
  export interface $FilterFieldSettings extends $FieldBaseSettings {
    /**
     * Supported operator names for conditions.
     *
     * If empty, default operators depending on used data type are taken. The standard operators are mentioned
     * in {@link sap.ui.mdc.enums.OperatorName OperatorName}.
     *
     * **Note:** If a custom control is used as {@link sap.ui.mdc.field.FieldBase#setContent Content}, {@link sap.ui.mdc.field.FieldBase#setContentEdit ContentEdit},
     * or {@link sap.ui.mdc.field.FieldBase#setContentDisplay ContentDisplay}, and the custom control only supports
     * one operator (as no operator can be shown), only the required operator must be set. So the user input
     * into the custom control creates a condition with the set operator, and a condition with this operator
     * provides the value the custom control needs.
     *
     * @since 1.73.0
     */
    operators?: string[] | PropertyBindingInfo | `{${string}}`;

    /**
     * Default operator name for conditions. If empty, the relevant default operator depending on the data type
     * used is taken.
     *
     * **Note**: `defaultOperator` can be the name of an {@link sap.ui.mdc.condition.Operator Operator} or the
     * instance itself.
     *
     * @since 1.88.0
     */
    defaultOperator?: string | PropertyBindingInfo;

    /**
     * Key of the property the `FilterField` represents.
     *
     * @since 1.115.0
     */
    propertyKey?: string | PropertyBindingInfo;

    /**
     * The type of data for the description part of an "equal to" condition. This type is used to parse, format,
     * and validate the value.
     *
     * Here a data type instance can be provided or an object containing `name`, `formatOptions`, and `constraints`.
     *
     * @since 1.118.0
     */
    additionalDataType?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * This event is fired when the `value` property of the field is changed.
     *
     * **Note** This event is only triggered if the used content control has a change event.
     */
    change?: (oEvent: FilterField$ChangeEvent) => void;
  }

  /**
   * Parameters of the FilterField#change event.
   */
  export interface FilterField$ChangeEventParameters {
    /**
     * The new value of the `control`
     */
    value?: string;

    /**
     * Flag that indicates if the entered `value` is valid
     */
    valid?: boolean;

    /**
     * Conditions of the field. This includes all conditions, not only the changed ones.
     *
     * **Note:** A condition must have the structure of {@link sap.ui.mdc.condition.ConditionObject ConditionObject}.
     */
    conditions?: object[];

    /**
     * Returns a `Promise` for the change. The `Promise` returns the value if it is resolved. If the `change`
     * event is synchronous, the `Promise` has already been resolved. If it is asynchronous, it will be resolved
     * after the value has been updated.
     *
     * The `FilterField` should be set to busy during the parsing to prevent user input. As there might be a
     * whole group of fields that needs to be busy, this cannot be done automatically.
     */
    promise?: boolean;
  }

  /**
   * Event object of the FilterField#change event.
   */
  export type FilterField$ChangeEvent = Event<
    FilterField$ChangeEventParameters,
    FilterField
  >;
}

declare module "sap/ui/mdc/Link" {
  import {
    default as FieldInfoBase,
    $FieldInfoBaseSettings,
  } from "sap/ui/mdc/field/FieldInfoBase";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { ID } from "sap/ui/core/library";

  import Control from "sap/ui/core/Control";

  import LinkItem from "sap/ui/mdc/link/LinkItem";

  import LinkType1 from "sap/ui/mdc/enums/LinkType";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * A `Link` element can be used inside a `fieldInfo` aggregation of {@link sap.ui.mdc.Field} to enable navigation
   * scenarios with one or more targets through direct navigation or by opening a `Panel`.
   *  It can also be used to display additional content, such as `ContactDetails` on the `Panel`.
   *  **Note:** The navigation targets and the behavior of the control are determined by the implementation
   * of a {@link module:sap/ui/mdc/LinkDelegate LinkDelegate}.
   *
   * @since 1.74
   */
  export default class Link extends FieldInfoBase {
    /**
     * Constructor for the new `Link`
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $LinkSettings
    );
    /**
     * Constructor for the new `Link`
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
      mSettings?: $LinkSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.Link with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.field.FieldInfoBase.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Link>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.Link.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Retrieves the relevant metadata for the panel and returns a property info array.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Array of copied property info
     */
    static retrieveAllMetadata(
      /**
       * Instance of a `Panel` control
       */
      oPanel: /* was: sap.ui.mdc.link.Panel */ any
    ): object[];
    /**
     * Retrieves the items that are initially part of the baseline which is used when a reset is done.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Array containing the `ID` and `visible` property of every {@link sap.ui.mdc.link.LinkItem}
     */
    static retrieveBaseline(
      /**
       * Instance of a `Panel` control
       */
      oPanel: /* was: sap.ui.mdc.link.Panel */ any
    ): BaseLineObject[];
    /**
     * Gets current value of property {@link #getDelegate delegate}.
     *
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/BaseDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * Default value is `...see text or source`.
     *
     *
     * @returns Value of property `delegate`
     */
    getDelegate(): object;
    /**
     * Gets current value of property {@link #getEnablePersonalization enablePersonalization}.
     *
     * Enables/disables the personalization settings for users and key users.
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `enablePersonalization`
     */
    getEnablePersonalization(): boolean;
    /**
     * ID of the element which is the current target of the association {@link #getSourceControl sourceControl},
     * or `null`.
     */
    getSourceControl(): ID | null;
    /**
     * Retrieves the `AdditionalContent` objects depending on the given `LinkDelegate`. Caches the returned
     * objects for further usage.
     *
     *
     * @returns Resolves an array of type {@link sap.ui.core.Control}
     */
    retrieveAdditionalContent(): Promise<Control[]>;
    /**
     * Calls the `modifyLinkItems` function of `Delegate` before returning the `LinkItem` objects.
     *
     *
     * @returns Resolves an array of type {@link sap.ui.mdc.link.LinkItem}
     */
    retrieveLinkItems(): Promise<LinkItem[]>;
    /**
     * Determines the `LinkType` object depending on the given `LinkDelegate`.
     *
     *
     * @returns Returns `undefined` or a {@link sap.ui.mdc.link.LinkType}, once resolved
     */
    retrieveLinkType(): Promise<undefined | LinkType>;
    /**
     * Sets a new value for property {@link #getDelegate delegate}.
     *
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/BaseDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `...see text or source`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDelegate(
      /**
       * New value for property `delegate`
       */
      oDelegate?: object
    ): this;
    /**
     * Sets a new value for property {@link #getEnablePersonalization enablePersonalization}.
     *
     * Enables/disables the personalization settings for users and key users.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnablePersonalization(
      /**
       * New value for property `enablePersonalization`
       */
      bEnablePersonalization?: boolean
    ): this;
    /**
     * Sets the associated {@link #getSourceControl sourceControl}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSourceControl(
      /**
       * ID of an element which becomes the new target of this sourceControl association; alternatively, an element
       * instance may be given
       */
      oSourceControl: ID | Control
    ): this;
  }
  /**
   * Object holding the information on which link should be displayed as default on the popover.
   */
  export type BaseLineObject = {
    /**
     * ID of a base line {@link sap.ui.mdc.link.LinkItem}
     */
    id: string;
    /**
     * Visibility of a base line {@link sap.ui.mdc.link.LinkItem}
     */
    visible: boolean;
  };

  /**
   * Object holding the information regarding direct link navigation when there is no other link item.
   */
  export type DirectLinkObject = {
    /**
     * The target of the retrieved direct link
     */
    target: string;
    /**
     * The href of the retrieved direct link
     */
    href: string;
  };

  /**
   * Object holding information regarding the behavior of the {@link sap.ui.mdc.Link}.
   */
  export type LinkType = {
    /**
     * Text | DirectLink | Popup (default)
     */
    type: LinkType1 | keyof typeof LinkType1;
    /**
     * Instance of {@link sap.ui.mdc.link.LinkItem} that is used for direct navigation
     */
    directLink: LinkItem;
  };

  /**
   * Object holding an initial {@link sap.ui.mdc.link.LinkType} and an optional `Promise` resolving into another
   * {@link sap.ui.mdc.link.LinkType} that is used during runtime.
   */
  export type LinkTypeWrapper = {
    /**
     * Initial {@link sap.ui.mdc.link.LinkType}
     */
    initialType: LinkType;
    /**
     * Optional `Promise` that resolves into the {@link sap.ui.mdc.link.LinkType} that overwrites the initial
     * {@link sap.ui.mdc.link.LinkType}.
     */
    runtimeType: Promise<LinkType>;
  };

  /**
   * Describes the settings that can be provided to the Link constructor.
   */
  export interface $LinkSettings extends $FieldInfoBaseSettings {
    /**
     * Enables/disables the personalization settings for users and key users.
     */
    enablePersonalization?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/BaseDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     */
    delegate?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Gets the app component required for link personalization. Also, the source control is used to get the
     * binding context.
     */
    sourceControl?: Control | string;
  }
}

declare module "sap/ui/mdc/link/LinkItem" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * A `LinkItem` control is used in the {@link sap.ui.mdc.Link} control to provide a navigation target.
   *
   * @since 1.58.0
   */
  export default class LinkItem extends UI5Element {
    /**
     * Constructor for a new LinkItem.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $LinkItemSettings
    );
    /**
     * Constructor for a new LinkItem.
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
      mSettings?: $LinkItemSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.link.LinkItem with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
      oClassInfo?: sap.ClassInfo<T, LinkItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.link.LinkItem.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getDescription description}.
     *
     * Defines the additional text of the item.
     *
     * Default value is `undefined`.
     *
     *
     * @returns Value of property `description`
     */
    getDescription(): string;
    /**
     * Gets current value of property {@link #getHref href}.
     *
     * Destination link for a navigation operation in external format (used when opening in new tab) using the
     * `hrefForExternal` method of the CrossApplicationNavigation service.
     *
     *
     * @returns Value of property `href`
     */
    getHref(): string;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Defines the icon of the item.
     *
     *
     * @returns Value of property `icon`
     */
    getIcon(): string;
    /**
     * Gets current value of property {@link #getInitiallyVisible initiallyVisible}.
     *
     * Determines the initial visibility of the `LinkItem`. If set to `true`, the item will appear on the `Popover`
     * without any personalization.
     *
     * Default value is `false`.
     *
     *
     * @returns Value of property `initiallyVisible`
     */
    getInitiallyVisible(): boolean;
    /**
     * Gets current value of property {@link #getInternalHref internalHref}.
     *
     * Destination link for a navigation operation in internal format provided by the SAP Fiori launchpad (used
     * when navigation happens programmatically). Only for internal use
     *
     *
     * @returns Value of property `internalHref`
     */
    getInternalHref(): string;
    /**
     * Gets current value of property {@link #getKey key}.
     *
     * Unique key of the `LinkItem` that is used for personalization.
     *
     * Default value is `undefined`.
     *
     *
     * @returns Value of property `key`
     */
    getKey(): string;
    /**
     * Gets current value of property {@link #getPress press}.
     *
     * Callback for `press` event.
     *
     * @since 1.122.0
     *
     * @returns Value of property `press`
     */
    getPress(): object;
    /**
     * Gets current value of property {@link #getTarget target}.
     *
     * Determines the target of the `Link` and has to be used as the `target` of an html anchor. The standard
     * values for the `target` property are: _self, _top, _blank, _parent, _search. Alternatively, a frame name
     * can be entered. This property is only used if the `href` property is set.
     *
     * Default value is `"_self"`.
     *
     *
     * @returns Value of property `target`
     */
    getTarget(): string;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Text of the `Link` that is displayed.
     *
     *
     * @returns Value of property `text`
     */
    getText(): string;
    /**
     * Sets a new value for property {@link #getDescription description}.
     *
     * Defines the additional text of the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `undefined`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDescription(
      /**
       * New value for property `description`
       */
      sDescription?: string
    ): this;
    /**
     * Sets a new value for property {@link #getHref href}.
     *
     * Destination link for a navigation operation in external format (used when opening in new tab) using the
     * `hrefForExternal` method of the CrossApplicationNavigation service.
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
      sHref?: string
    ): this;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Defines the icon of the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setIcon(
      /**
       * New value for property `icon`
       */
      sIcon: string
    ): this;
    /**
     * Sets a new value for property {@link #getInitiallyVisible initiallyVisible}.
     *
     * Determines the initial visibility of the `LinkItem`. If set to `true`, the item will appear on the `Popover`
     * without any personalization.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setInitiallyVisible(
      /**
       * New value for property `initiallyVisible`
       */
      bInitiallyVisible?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getInternalHref internalHref}.
     *
     * Destination link for a navigation operation in internal format provided by the SAP Fiori launchpad (used
     * when navigation happens programmatically). Only for internal use
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setInternalHref(
      /**
       * New value for property `internalHref`
       */
      sInternalHref?: string
    ): this;
    /**
     * Sets a new value for property {@link #getKey key}.
     *
     * Unique key of the `LinkItem` that is used for personalization.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `undefined`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setKey(
      /**
       * New value for property `key`
       */
      sKey?: string
    ): this;
    /**
     * Sets a new value for property {@link #getPress press}.
     *
     * Callback for `press` event.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @since 1.122.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setPress(
      /**
       * New value for property `press`
       */
      oPress?: object
    ): this;
    /**
     * Sets a new value for property {@link #getTarget target}.
     *
     * Determines the target of the `Link` and has to be used as the `target` of an html anchor. The standard
     * values for the `target` property are: _self, _top, _blank, _parent, _search. Alternatively, a frame name
     * can be entered. This property is only used if the `href` property is set.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"_self"`.
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
     * Sets a new value for property {@link #getText text}.
     *
     * Text of the `Link` that is displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
  }
  /**
   * Describes the settings that can be provided to the LinkItem constructor.
   */
  export interface $LinkItemSettings extends $ElementSettings {
    /**
     * Unique key of the `LinkItem` that is used for personalization.
     */
    key?: string | PropertyBindingInfo;

    /**
     * Text of the `Link` that is displayed.
     */
    text?: string | PropertyBindingInfo;

    /**
     * Defines the additional text of the item.
     */
    description?: string | PropertyBindingInfo;

    /**
     * Destination link for a navigation operation in external format (used when opening in new tab) using the
     * `hrefForExternal` method of the CrossApplicationNavigation service.
     */
    href?: string | PropertyBindingInfo;

    /**
     * Destination link for a navigation operation in internal format provided by the SAP Fiori launchpad (used
     * when navigation happens programmatically). Only for internal use
     */
    internalHref?: string | PropertyBindingInfo;

    /**
     * Determines the target of the `Link` and has to be used as the `target` of an html anchor. The standard
     * values for the `target` property are: _self, _top, _blank, _parent, _search. Alternatively, a frame name
     * can be entered. This property is only used if the `href` property is set.
     */
    target?: string | PropertyBindingInfo;

    /**
     * Defines the icon of the item.
     */
    icon?: string | PropertyBindingInfo;

    /**
     * Determines the initial visibility of the `LinkItem`. If set to `true`, the item will appear on the `Popover`
     * without any personalization.
     */
    initiallyVisible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Callback for `press` event.
     *
     * @since 1.122.0
     */
    press?: object | PropertyBindingInfo | `{${string}}`;
  }
}

declare module "sap/ui/mdc/MultiValueField" {
  import {
    default as FieldBase,
    $FieldBaseSettings,
  } from "sap/ui/mdc/field/FieldBase";

  import { IFormContent, ISemanticFormContent } from "sap/ui/core/library";

  import { IOverflowToolbarContent } from "sap/m/library";

  import MultiValueFieldItem from "sap/ui/mdc/field/MultiValueFieldItem";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Event from "sap/ui/base/Event";

  /**
   * A `MultiValueField` control can hold multiple values. The values are stored as items. A `MultiValueField`
   * control can be used to bind its items to data of a certain data type. Based on the data type settings,
   * a default control is rendered by the `MultiValueField` control as follows:
   *
   *
   * 	 - In display mode, usually a {@link sap.m.Tokenizer Tokenizer} control is rendered.
   * 	 - If `multipleLines` is set, an {@link sap.m.ExpandableText ExpandableText} control is rendered.
   * 	 - In edit mode, usually a {@link sap.m.MultiInput MultiInput} control is rendered.
   * 	 - If `multipleLines` is set, a {@link sap.m.TextArea TextArea} control is rendered.
   *
   * @since 1.93.0
   * @experimental (since 1.93.0)
   */
  export default class MultiValueField
    extends FieldBase
    implements IFormContent, ISemanticFormContent, IOverflowToolbarContent
  {
    __implements__sap_ui_core_IFormContent: boolean;
    __implements__sap_ui_core_ISemanticFormContent: boolean;
    __implements__sap_m_IOverflowToolbarContent: boolean;
    /**
     * Constructor for a new `MultiValueField` control.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $MultiValueFieldSettings
    );
    /**
     * Constructor for a new `MultiValueField` control.
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
      mSettings?: $MultiValueFieldSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.MultiValueField with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.field.FieldBase.extend}.
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
      oClassInfo?: sap.ClassInfo<T, MultiValueField>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.MultiValueField.
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
      oItem: MultiValueFieldItem
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.mdc.MultiValueField`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.MultiValueField` itself.
     *
     * This event is fired when the `items` aggregation of the field is changed by user interaction.
     *
     * **Note** This event is only triggered if the used content control has a change event.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: MultiValueField$ChangeEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.MultiValueField` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.mdc.MultiValueField`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.MultiValueField` itself.
     *
     * This event is fired when the `items` aggregation of the field is changed by user interaction.
     *
     * **Note** This event is only triggered if the used content control has a change event.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: MultiValueField$ChangeEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.MultiValueField` itself
       */
      oListener?: object
    ): this;
    /**
     * Binds property {@link #getConditions conditions} to model data.
     *
     * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description
     * of the possible properties of oBindingInfo
     *
     * Do not use the `conditions` property, use the `value` and `additionalValue` properties instead.
     *
     * @deprecated - Not supported, use the `value` property and `additionalValue` property to bind the control.
     *
     * @returns Reference to `this` to allow method chaining
     */
    bindConditions(
      /**
       * The binding information
       */
      oBindingInfo: PropertyBindingInfo
    ): this;
    /**
     * Binds aggregation {@link #getItems items} to model data.
     *
     * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
     * of the possible properties of `oBindingInfo`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    bindItems(
      /**
       * The binding information
       */
      oBindingInfo: AggregationBindingInfo
    ): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.mdc.MultiValueField`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachChange(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: MultiValueField$ChangeEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Fires event {@link #event:change change} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: MultiValueField$ChangeEventParameters
    ): this;
    /**
     * Gets current value of property {@link #getConditions conditions}.
     *
     * Do not use the `conditions` property, use the `items` aggregation instead.
     *
     * @deprecated - Not supported, use the `items` aggregation to bind the control.
     *
     * @returns conditions of the field
     */
    getConditions(): object[];
    /**
     * Gets current value of property {@link #getDataType dataType}.
     *
     * The type of data handled by the field. The type is used to parse, format, and validate the value.
     *
     * **Note:** If the `items` aggregation is bound to a model using a type, this type is used. In this case
     * the value of the `dataType` property is ignored.
     *
     * @deprecated - Not supported, the type in the binding to the `value` property is used.
     *
     * @returns Value of property `dataType`
     */
    getDataType(): string;
    /**
     * Gets current value of property {@link #getDataTypeConstraints dataTypeConstraints}.
     *
     * The constraints of the type specified in `dataType`.
     *
     * **Note:** If the `items` aggregation is bound to a model using a type, this type is used. In this case
     * the values of the `dataType` property and the `dataTypeConstraints` property are ignored.
     *
     * @deprecated - Not supported, the `Constraints` of the type in the binding to the `value` property is
     * used.
     *
     * @returns Value of property `dataTypeConstraints`
     */
    getDataTypeConstraints(): object;
    /**
     * Gets current value of property {@link #getDataTypeFormatOptions dataTypeFormatOptions}.
     *
     * The format options of the type specified in `dataType`.
     *
     * **Note:** If the `items` aggregation is bound to a model using a type, this type is used. In this case
     * the values of the `dataType` property and the `dataTypeFormatOptions` property are ignored.
     *
     * @deprecated - Not supported, the `FormatOptions` of the type in the binding to the `value` property is
     * used.
     *
     * @returns Value of property `dataTypeFormatOptions`
     */
    getDataTypeFormatOptions(): object;
    /**
     * Gets current value of property {@link #getDelegate delegate}.
     *
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module. The used delegate module must inherit from {@link module:sap/ui/mdc/field/MultiValueFieldDelegate MultiValueFieldDelegate}.
     *
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/field/MultiValueFieldDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * Default value is `...see text or source`.
     *
     * @experimental
     *
     * @returns Value of property `delegate`
     */
    getDelegate(): object;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * Items of the `MultiValueField` control.
     *
     * The items are not updated by user input or value help selection automatically. That's because an aggregation
     * binding can only be updated by the model, not by the bound aggregation. Therefore, the {@link module:sap/ui/mdc/field/MultiValueFieldDelegate.updateItems MultiValueFieldDelegate.updateItems }
     * function needs to be implemented to update the items after a user interaction.
     */
    getItems(): MultiValueFieldItem[];
    /**
     * Gets current value of property {@link #getMultipleLines multipleLines}.
     *
     * @deprecated - This property is not supported for multi-value fields.
     *
     * @returns Value for property `multipleLines`
     */
    getMultipleLines(): boolean;
    /**
     * Checks for the provided `sap.ui.mdc.field.MultiValueFieldItem` in the aggregation {@link #getItems items}.
     * and returns its index if found or -1 otherwise.
     *
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: MultiValueFieldItem
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
      oItem: MultiValueFieldItem,
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
    removeAllItems(): MultiValueFieldItem[];
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
      vItem: int | string | MultiValueFieldItem
    ): MultiValueFieldItem | null;
    /**
     * Sets a new value for property {@link #getConditions conditions}.
     *
     * Do not use the `conditions` property, use the `items` aggregation instead.
     *
     * @deprecated - Not supported, use the `items` aggregation to bind the control.
     *
     * @returns Reference to `this` to allow method chaining
     */
    setConditions(
      /**
       * Conditions to be set
       */
      aConditions: object[]
    ): this;
    /**
     * Sets a new value for property {@link #getDataType dataType}. The type of data handled by the field. The
     * type is used to parse, format, and validate the value.
     *
     * **Note:** If the `items` aggregation is bound to a model using a type, this type is used. In this case
     * the value of the `dataType` property is ignored.
     *
     * @deprecated - Not supported, the type in the binding to the `items` aggregation is used.
     *
     * @returns Reference to `this` to allow method chaining
     */
    setDataType(
      /**
       * DataType to be set
       */
      sDataType: string | undefined
    ): this;
    /**
     * Sets a new value for property {@link #getDataTypeConstraints dataTypeConstraints}.
     *
     * The constraints of the type specified in `dataType`.
     *
     * **Note:** If the `items` aggregation is bound to a model using a type, this type is used. In this case
     * the values of the `dataType` property and the `dataTypeConstraints` property are ignored.
     *
     * @deprecated - Not supported, the type in the binding to the `items` aggregation is used.
     *
     * @returns Reference to `this` to allow method chaining
     */
    setDataTypeConstraints(
      /**
       * Constraints to be set
       */
      oDataTypeConstraints: object | undefined
    ): this;
    /**
     * Sets a new value for property {@link #getDataTypeFormatOptions dataTypeFormatOptions}.
     *
     * The format options of the type specified in `dataType`.
     *
     * **Note:** If the `items` aggregation is bound to a model using a type, this type is used. In this case
     * the values of the `dataType` property and the `dataTypeFormatOptions` property are ignored.
     *
     * @deprecated - Not supported, the type in the binding to the `items` aggregation is used.
     *
     * @returns Reference to `this` to allow method chaining
     */
    setDataTypeFormatOptions(
      /**
       * Format options to be set
       */
      oDataTypeFormatOptions: object | undefined
    ): this;
    /**
     * Sets a new value for property {@link #getDelegate delegate}.
     *
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module. The used delegate module must inherit from {@link module:sap/ui/mdc/field/MultiValueFieldDelegate MultiValueFieldDelegate}.
     *
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/field/MultiValueFieldDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `...see text or source`.
     *
     * @experimental
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDelegate(
      /**
       * New value for property `delegate`
       */
      oDelegate?: object
    ): this;
    /**
     * This property must not be set for the `MultiValueField` control.
     *
     * @deprecated - Not supported, this property is not supported for the `MultiValueField` control.
     *
     * @returns `this` to allow method chaining.
     */
    setMaxConditions(
      /**
       * More than 1 condition must be allowed in `MultiValueField`
       */
      iMaxConditions: int
    ): this;
    /**
     * Sets a new value for property {@link #getMultipleLines multipleLines}.
     *
     * @deprecated - This property is not supported for multi-value fields.
     *
     * @returns Reference to `this` to allow method chaining
     */
    setMultipleLines(
      /**
       * New value for property `multipleLines`
       */
      bMultipleLines?: boolean
    ): this;
    /**
     * Unbinds property {@link #getConditions conditions} from model data.
     *
     * Do not use the `conditions` property, use the `value` and `additionalValue` properties instead.
     *
     * @deprecated - Not supported, use the `value` property and `additionalValue` property to bind the control.
     *
     * @returns Reference to `this` to allow method chaining
     */
    unbindConditions(): this;
    /**
     * Unbinds aggregation {@link #getItems items} from model data.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    unbindItems(): this;
  }
  /**
   * Describes the settings that can be provided to the MultiValueField constructor.
   *
   * @experimental (since 1.93.0)
   */
  export interface $MultiValueFieldSettings extends $FieldBaseSettings {
    /**
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module. The used delegate module must inherit from {@link module:sap/ui/mdc/field/MultiValueFieldDelegate MultiValueFieldDelegate}.
     *
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/field/MultiValueFieldDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * @experimental
     */
    delegate?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Items of the `MultiValueField` control.
     *
     * The items are not updated by user input or value help selection automatically. That's because an aggregation
     * binding can only be updated by the model, not by the bound aggregation. Therefore, the {@link module:sap/ui/mdc/field/MultiValueFieldDelegate.updateItems MultiValueFieldDelegate.updateItems }
     * function needs to be implemented to update the items after a user interaction.
     */
    items?:
      | MultiValueFieldItem[]
      | MultiValueFieldItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * This event is fired when the `items` aggregation of the field is changed by user interaction.
     *
     * **Note** This event is only triggered if the used content control has a change event.
     */
    change?: (oEvent: MultiValueField$ChangeEvent) => void;
  }

  /**
   * Parameters of the MultiValueField#change event.
   */
  export interface MultiValueField$ChangeEventParameters {
    /**
     * The new items of the `MultiValueField` control.
     *
     * If a `ValueHelp` element is assigned to the `MultiValueField` control, the `key` of the items is used
     * as key for the `ValueHelp` items.
     */
    items?: MultiValueFieldItem[];

    /**
     * Flag that indicates if the entered user input is valid
     */
    valid?: boolean;

    /**
     * Returns a `Promise` for the change. The `Promise` returns the items when it is resolved. If the `change`
     * event is synchronous, the `Promise` has already been resolved. If it is asynchronous, it will be resolved
     * after the items have been updated.
     *
     * The `MultiValueField` control should be set to busy during the parsing to prevent user input. As there
     * might be a whole group of fields that need to be busy, this cannot be done automatically.
     */
    promise?: Promise<any>;
  }

  /**
   * Event object of the MultiValueField#change event.
   */
  export type MultiValueField$ChangeEvent = Event<
    MultiValueField$ChangeEventParameters,
    MultiValueField
  >;
}

declare module "sap/ui/mdc/Table" {
  import { default as Control, $ControlSettings } from "sap/ui/mdc/Control";

  import { IFilterSource, IxState, IFilter } from "sap/ui/mdc/library";

  import Control1 from "sap/ui/core/Control";

  import CellSelector from "sap/m/plugins/CellSelector";

  import Column from "sap/ui/mdc/table/Column";

  import { IContextMenu, ID, TitleLevel, CSSSize } from "sap/ui/core/library";

  import CopyProvider from "sap/m/plugins/CopyProvider";

  import DataStateIndicator from "sap/m/plugins/DataStateIndicator";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import TableP13nMode from "sap/ui/mdc/enums/TableP13nMode";

  import RowSettings from "sap/ui/mdc/table/RowSettings";

  import Context from "sap/ui/model/Context";

  import TableSelectionMode from "sap/ui/mdc/enums/TableSelectionMode";

  import TableTypeBase from "sap/ui/mdc/table/TableTypeBase";

  import TableType from "sap/ui/mdc/enums/TableType";

  import VariantManagement from "sap/ui/fl/variants/VariantManagement";

  import { PropertyInfo as PropertyInfo1 } from "sap/ui/mdc/util/PropertyHelper";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import Event from "sap/ui/base/Event";

  /**
   * An object literal describing a data property in the context of a {@link sap.ui.mdc.Table} with {@link module:sap/ui/mdc/odata/v4/TableDelegate sap/ui/mdc/odata/v4/TableDelegate}.
   *
   * When specifying the `PropertyInfo` objects in the {@link sap.ui.mdc.Table#getPropertyInfo propertyInfo }
   * property, the following attributes need to be specified:
   * 	 - `key`
   * 	 - `path`
   * 	 - `dataType`
   * 	 - `formatOptions`
   * 	 - `constraints`
   * 	 - `maxConditions`
   * 	 - `caseSensitive`
   * 	 - `visualSettings.widthCalculation`
   * 	 - `propertyInfos`
   * 	 - `groupable`
   * 	 - `isKey`
   * 	 - `unit`
   * 	 - `text`
   * 	 - `aggregatable`
   * 	 - `extension.technicallyGroupable`
   * 	 - `extension.technicallyAggregatable`
   * 	 - `extension.customAggregate`
   * 	 - `extension.customAggregate.contextDefiningProperties`
   *
   * If the property is complex, the following attributes need to be specified:
   * 	 - `key`
   * 	 - `visualSettings.widthCalculation`
   * 	 - `propertyInfos` (all referenced properties must be specified)
   */
  export type TablePropertyInfo = PropertyInfo & {
    /**
     * Defines whether a property is aggregatable.
     */
    aggregatable?: boolean;
    /**
     * Contains model-specific information.
     */
    extension?: {
      /**
       * If `groupable` is set to `false` to exclude it from group personalization on the UI, the UI still needs
       * to know that this property is groupable for data requests.
       */
      technicallyGroupable?: boolean;
      /**
       * If `aggregatable` is set to `false` to exclude it from aggregate personalization on the UI, the UI still
       * needs to know that this property is aggregatable for data requests.
       */
      technicallyAggregatable?: boolean;
      /**
       * Provide an object, it can be empty, if there is a `CustomAggregate` whose `Qualifier` is equal to the
       * name of this property. This enables the option to show totals if `aggregatable` is `true`.
       */
      customAggregate?: {
        /**
         * A list of related properties (by name) that are the context-defining properties of the `CustomAggregate`.
         */
        contextDefiningProperties?: string[];
      };
    };
  };

  /**
   * A metadata-driven table to simplify the usage of existing tables, such as the `ResponsiveTable` and `GridTable`
   * controls. The metadata needs to be provided via the {@link module:sap/ui/mdc/TableDelegate TableDelegate }
   * implementation as {@link sap.ui.mdc.table.PropertyInfo}.
   *
   * **Note:** Read and write access to internal elements is not permitted. Such elements are, for example,
   * the inner table including its children. This is independent of how access was gained. Internal elements
   * and their types are subject to change without notice.
   *
   * @since 1.58
   */
  export default class Table extends Control implements IFilterSource, IxState {
    __implements__sap_ui_mdc_IFilterSource: boolean;
    __implements__sap_ui_mdc_IxState: boolean;
    /**
     * Constructor for a new `Table`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Object with initial settings for the new control
       */
      mSettings?: $TableSettings
    );
    /**
     * Constructor for a new `Table`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Optional ID for the new control; generated automatically if no non-empty ID is given **Note:** The optional
       * ID can be omitted, no matter whether `mSettings` is given or not.
       */
      sId?: string,
      /**
       * Object with initial settings for the new control
       */
      mSettings?: $TableSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.Table with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.Control.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Table>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.Table.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:beforeExport beforeExport} event of this `sap.ui.mdc.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.Table` itself.
     *
     * This event is fired right before the export is triggered.
     *
     * For more information about the export settings, see {@link sap.ui.export.Spreadsheet} or {@link https://ui5.sap.com/#/topic/7e12e6b9154a4607be9d6072c72d609c Spreadsheet Export Configuration}.
     *
     * @since 1.75
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeforeExport(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Table$BeforeExportEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:beforeExport beforeExport} event of this `sap.ui.mdc.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.Table` itself.
     *
     * This event is fired right before the export is triggered.
     *
     * For more information about the export settings, see {@link sap.ui.export.Spreadsheet} or {@link https://ui5.sap.com/#/topic/7e12e6b9154a4607be9d6072c72d609c Spreadsheet Export Configuration}.
     *
     * @since 1.75
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeforeExport(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Table$BeforeExportEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:beforeOpenContextMenu beforeOpenContextMenu }
     * event of this `sap.ui.mdc.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.Table` itself.
     *
     * This event is fired when the user requests the context menu for the table.
     *
     * @since 1.117
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeforeOpenContextMenu(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Table$BeforeOpenContextMenuEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:beforeOpenContextMenu beforeOpenContextMenu }
     * event of this `sap.ui.mdc.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.Table` itself.
     *
     * This event is fired when the user requests the context menu for the table.
     *
     * @since 1.117
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeforeOpenContextMenu(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Table$BeforeOpenContextMenuEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:paste paste} event of this `sap.ui.mdc.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.Table` itself.
     *
     * This event is fired when the user pastes content from the clipboard to the table.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPaste(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Table$PasteEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:paste paste} event of this `sap.ui.mdc.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.Table` itself.
     *
     * This event is fired when the user pastes content from the clipboard to the table.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPaste(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Table$PasteEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:rowPress rowPress} event of this `sap.ui.mdc.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.Table` itself.
     *
     * This event is fired when a row is pressed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRowPress(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Table$RowPressEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:rowPress rowPress} event of this `sap.ui.mdc.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.Table` itself.
     *
     * This event is fired when a row is pressed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRowPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Table$RowPressEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this
     * `sap.ui.mdc.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.Table` itself.
     *
     * This event is fired when the selection is changed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
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
      fnFunction: (p1: Table$SelectionChangeEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this
     * `sap.ui.mdc.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.Table` itself.
     *
     * This event is fired when the selection is changed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Table$SelectionChangeEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Clears the selection.
     */
    clearSelection(): void;
    /**
     * Destroys the cellSelector in the aggregation {@link #getCellSelector cellSelector}.
     *
     * @since 1.119
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyCellSelector(): this;
    /**
     * Destroys the contextMenu in the aggregation {@link #getContextMenu contextMenu}.
     *
     * @since 1.118
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContextMenu(): this;
    /**
     * Destroys the copyProvider in the aggregation {@link #getCopyProvider copyProvider}.
     *
     * @since 1.114
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyCopyProvider(): this;
    /**
     * Destroys the creationRow in the aggregation {@link #getCreationRow creationRow}.
     *
     * @deprecated (since 1.124) - the concept has been discarded.
     * @experimental - Do not use
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyCreationRow(): this;
    /**
     * Destroys the dataStateIndicator in the aggregation {@link #getDataStateIndicator dataStateIndicator}.
     *
     * @since 1.89
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyDataStateIndicator(): this;
    /**
     * Destroys the noData in the aggregation {@link #getNoData noData}.
     *
     * @since 1.106
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyNoData(): this;
    /**
     * Destroys the quickFilter in the aggregation {@link #getQuickFilter quickFilter}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyQuickFilter(): this;
    /**
     * Destroys the rowSettings in the aggregation {@link #getRowSettings rowSettings}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyRowSettings(): this;
    /**
     * Destroys the type in the aggregation {@link #getType type}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyType(): this;
    /**
     * Destroys the variant in the aggregation {@link #getVariant variant}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyVariant(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:beforeExport beforeExport} event of this `sap.ui.mdc.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @since 1.75
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachBeforeExport(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Table$BeforeExportEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:beforeOpenContextMenu beforeOpenContextMenu }
     * event of this `sap.ui.mdc.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @since 1.117
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachBeforeOpenContextMenu(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Table$BeforeOpenContextMenuEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:paste paste} event of this `sap.ui.mdc.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachPaste(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Table$PasteEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:rowPress rowPress} event of this `sap.ui.mdc.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachRowPress(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Table$RowPressEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:selectionChange selectionChange} event of
     * this `sap.ui.mdc.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSelectionChange(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Table$SelectionChangeEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Fires event {@link #event:beforeExport beforeExport} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @since 1.75
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Whether or not to prevent the default action
     */
    fireBeforeExport(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Table$BeforeExportEventParameters
    ): boolean;
    /**
     * Fires event {@link #event:beforeOpenContextMenu beforeOpenContextMenu} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @since 1.117
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Whether or not to prevent the default action
     */
    fireBeforeOpenContextMenu(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Table$BeforeOpenContextMenuEventParameters
    ): boolean;
    /**
     * Fires event {@link #event:paste paste} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    firePaste(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Table$PasteEventParameters
    ): this;
    /**
     * Fires event {@link #event:rowPress rowPress} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireRowPress(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Table$RowPressEventParameters
    ): this;
    /**
     * Fires event {@link #event:selectionChange selectionChange} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSelectionChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Table$SelectionChangeEventParameters
    ): this;
    /**
     * Sets the focus on the row. If `bFirstInteractiveElement` is `true`, and there are interactive elements
     * inside the row, sets the focus on the first interactive element. Otherwise sets the focus on the first
     * data cell, if the type is `GridTableType`, and on the entire row, if the type is `ResponsiveTableType`.
     * If the given index is not visible, the table scrolls to it automatically. In this case the same rules
     * apply as in {@link #scrollToIndex}.
     *
     * @since 1.86
     *
     * @returns A `Promise` that resolves after the focus has been set
     */
    focusRow(
      /**
       * The index of the row that is to be focused
       */
      iIndex: number,
      /**
       * Indicates whether to set the focus on the first interactive element inside the row
       */
      bFirstInteractiveElement?: boolean
    ): Promise<any>;
    /**
     * Gets content of aggregation {@link #getActions actions}.
     *
     * Additional actions that will be available in the toolbar.
     *
     * **Note:** This aggregation is managed by the control, can only be populated during the definition in
     * the XML view, and is not bindable. Any changes of the initial aggregation content might result in undesired
     * effects. Changes of the aggregation have to be made with the {@link sap.ui.mdc.p13n.StateUtil StateUtil}.
     */
    getActions(): Control1[];
    /**
     * Gets current value of property {@link #getAutoBindOnInit autoBindOnInit}.
     *
     * Determines whether to bind the table automatically after the initial creation or re-creation of the table.
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `autoBindOnInit`
     */
    getAutoBindOnInit(): boolean;
    /**
     * Gets current value of property {@link #getBusyIndicatorDelay busyIndicatorDelay}.
     *
     * The delay in milliseconds after which the busy indicator is shown.
     *
     * Default value is `100`.
     *
     *
     * @returns Value of property `busyIndicatorDelay`
     */
    getBusyIndicatorDelay(): int;
    /**
     * Gets content of aggregation {@link #getCellSelector cellSelector}.
     *
     * Defines an aggregation for the `CellSelector` plugin that provides cell selection capabilities.
     *
     * **Note:** The `CellSelector` is currently only available in combination with the {@link sap.ui.mdc.table.GridTableType GridTable}.
     * Please refer to {@link sap.m.plugins.CellSelector} for additional restrictions.
     *
     * @since 1.119
     */
    getCellSelector(): CellSelector;
    /**
     * Gets content of aggregation {@link #getColumns columns}.
     *
     * Columns of the table.
     *
     * **Note:** This aggregation is managed by the control, can only be populated during the definition in
     * the XML view, and is not bindable. Any changes of the initial aggregation content might result in undesired
     * effects. Changes of the aggregation have to be made with the {@link sap.ui.mdc.p13n.StateUtil StateUtil}.
     */
    getColumns(): Column[];
    /**
     * Gets content of aggregation {@link #getContextMenu contextMenu}.
     *
     * Defines the context menu for the rows.
     *
     * @since 1.118
     */
    getContextMenu(): IContextMenu;
    /**
     * Gets content of aggregation {@link #getCopyProvider copyProvider}.
     *
     * Defines an aggregation for the `CopyProvider` plugin that provides copy to clipboard capabilities for
     * the selected rows and creates a Copy button for the toolbar. To disable the copy function, including
     * the Copy button in the toolbar, the `enabled` property of the `CopyProvider` must be set to `false`.
     * To hide the Copy button from the toolbar, the `visible` property of the `CopyProvider` must be set to
     * `false`.
     *
     * **Note:** The {@link sap.m.plugins.CopyProvider#extractData extractData} property of the `CopyProvider`
     * must not be managed by the application.
     *  The `CopyProvider` requires a secure context to access the clipboard API. If the context is not secure,
     * the plugin will not be added, and the Copy button will not be generated.
     *
     * @since 1.114
     */
    getCopyProvider(): CopyProvider;
    /**
     * Gets content of aggregation {@link #getCreationRow creationRow}.
     *
     * This row can be used for user input to create new data if {@link sap.ui.mdc.enums.TableType TableType }
     * is "`Table`".
     *
     * **Note:** Once the binding supports creating transient records, this aggregation will be removed.
     *
     * @deprecated (since 1.124) - the concept has been discarded.
     * @experimental - Do not use
     */
    getCreationRow(): /* was: sap.ui.mdc.table.CreationRow */ any;
    /**
     * Gets content of aggregation {@link #getDataStateIndicator dataStateIndicator}.
     *
     * `DataStateIndicator` plugin that can be used to show binding-related messages.
     *
     * @since 1.89
     */
    getDataStateIndicator(): DataStateIndicator;
    /**
     * Gets current value of property {@link #getDelegate delegate}.
     *
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module. The used delegate module must inherit from {@link module:sap/ui/mdc/TableDelegate TableDelegate}.
     *
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/TableDelegate",
     * 	payload: {}
     * }```
     *
     *
     * **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * Default value is `...see text or source`.
     *
     *
     * @returns Value of property `delegate`
     */
    getDelegate(): object;
    /**
     * Gets current value of property {@link #getEnableAutoColumnWidth enableAutoColumnWidth}.
     *
     * Enables automatic column width calculation. The column width calculation takes the type, column label,
     * referenced properties, and other information into account. The calculated column widths can have a minimum
     * of 3rem and a maximum of 20rem.
     *
     * The delegate can customize the automatic column width calculation with the `visualSettings.widthSettings`
     * field in the {@link sap.ui.mdc.table.PropertyInfo PropertyInfo}. To disable the heuristic column width
     * calculation for a particular column, the `visualSettings.widthSettings` field can be set to `null`. Providing
     * a more precise `maxLength` value for the `String` type or `precision` value for numeric types can help
     * the algorithm to produce better results.
     *
     * **Note:** The column width is not calculated if the `width` property of the column is bound or its value
     * is set.
     *
     * Default value is `false`.
     *
     * @since 1.95
     *
     * @returns Value of property `enableAutoColumnWidth`
     */
    getEnableAutoColumnWidth(): boolean;
    /**
     * Gets current value of property {@link #getEnableColumnResize enableColumnResize}.
     *
     * Determines whether column resizing is enabled.
     *
     * Default value is `true`.
     *
     * @since 1.90
     *
     * @returns Value of property `enableColumnResize`
     */
    getEnableColumnResize(): boolean;
    /**
     * Gets current value of property {@link #getEnableExport enableExport}.
     *
     * Determines whether the data export is enabled.
     *
     * The delegate can customize the export result with the `exportSettings` field in the {@link sap.ui.mdc.table.PropertyInfo PropertyInfo}.
     *
     * **Note:** To use the export functionality, the {@link sap.ui.export} library is required, otherwise an
     * error message is displayed when the user presses the Export button.
     *
     * Default value is `false`.
     *
     * @since 1.75
     *
     * @returns Value of property `enableExport`
     */
    getEnableExport(): boolean;
    /**
     * Gets current value of property {@link #getEnablePaste enablePaste}.
     *
     * Determines whether the Paste button is enabled.
     *
     * Default value is `true`.
     *
     * @since 1.96
     *
     * @returns Value of property `enablePaste`
     */
    getEnablePaste(): boolean;
    /**
     * ID of the element which is the current target of the association {@link #getFilter filter}, or `null`.
     */
    getFilter(): ID | null;
    /**
     * Gets current value of property {@link #getHeader header}.
     *
     * Header text that is shown in the table. The header must always be set to comply with accessibility standards,
     * even if other settings make the header invisible.
     *
     *
     * @returns Value of property `header`
     */
    getHeader(): string;
    /**
     * Gets current value of property {@link #getHeaderLevel headerLevel}.
     *
     * Semantic level of the header. For more information, see {@link sap.m.Title#setLevel}.
     *
     * Default value is `Auto`.
     *
     * @since 1.84
     *
     * @returns Value of property `headerLevel`
     */
    getHeaderLevel(): TitleLevel | keyof typeof TitleLevel;
    /**
     * Gets current value of property {@link #getHeaderStyle headerStyle}.
     *
     * Defines style of the header. For more information, see {@link sap.m.Title#setTitleStyle}.
     *
     * @since 1.116
     * @experimental
     *
     * @returns Value of property `headerStyle`
     */
    getHeaderStyle(): TitleLevel | keyof typeof TitleLevel;
    /**
     * Gets current value of property {@link #getHeaderVisible headerVisible}.
     *
     * Determines whether the header text is shown in the table. Regardless of its value, the given header text
     * is used to label the table correctly for accessibility purposes.
     *
     * Default value is `true`.
     *
     * @since 1.63
     *
     * @returns Value of property `headerVisible`
     */
    getHeaderVisible(): boolean;
    /**
     * Gets current value of property {@link #getHeight height}.
     *
     * This property has no effect and will be removed soon.
     *
     * @deprecated (since 1.115) - the concept has been discarded.
     *
     * @returns Value of property `height`
     */
    getHeight(): CSSSize;
    /**
     * Gets current value of property {@link #getHideToolbar hideToolbar}.
     *
     * Determines whether the toolbar is visible.
     *
     * **Note:** Hiding the toolbar limits the functionality of the table in the following ways:
     *
     * 	 - The `showRowCount` property **must** be set to `false`.
     * 	 - The export **must** be disabled by setting the `enableExport` property to `false`.
     * 	 - For {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}, show and hide details won't be
     *     visible as the table will always run in "Show Details" mode.
     * 	 - Copy and paste will only work via keyboard.
     * 	 - For {@link sap.ui.mdc.table.TreeTableType TreeTable}, "Collapse All" and "Expand All" won't be possible.
     *
     * 	 - The `actions` and the `quickFilter` aggregations and a table-related {@link sap.ui.fl.variants.VariantManagement }
     *     **must not** be used.
     * 	 - The table title will not be displayed but will be replaced by an `InvisibleText`. The `header` property
     *     **must** be set. In addition, `headerVisible` **must** be set to `false` to ensure accessibility compatibility.
     *
     * 	 - Personalization (`p13nMode`) can still be used via the column headers. If the option to show or hide
     *     columns is activated, it is recommended to use an {@link sap.m.IllustratedMessage} for the `nodata` display.
     *     It ensures that columns can be made visible again when the user has accidentally hidden them all.
     *
     * Default value is `false`.
     *
     * @since 1.121
     *
     * @returns Value of property `hideToolbar`
     */
    getHideToolbar(): boolean;
    /**
     * Gets current value of property {@link #getMultiSelectMode multiSelectMode}.
     *
     * Defines the multi-selection mode.
     *
     * **Note:** This property has no effect in the following cases:
     * 	 - Table type is not {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}. This is subject to
     *     change in the future.
     * 	 - Selection mode is not `Multi`.
     *
     * Default value is `Default`.
     *
     * @since 1.93
     *
     * @returns Value of property `multiSelectMode`
     */
    getMultiSelectMode(): /* was: sap.ui.mdc.enums.TableMultiSelectMode */ any;
    /**
     * Gets content of aggregation {@link #getNoData noData}.
     *
     * Defines the custom visualization if there is no data to show.
     *
     * **Note:** If {@link sap.m.IllustratedMessage} control is set for the `noData` aggregation and its {@link sap.m.IllustratedMessage#getTitle title }
     * property is not set then the table automatically offers a no data text with fitting {@link sap.m.IllustratedMessage.IllustratedMessageType illustration}.
     *
     * @since 1.106
     */
    getNoData(): Control1 | string;
    /**
     * Gets current value of property {@link #getP13nMode p13nMode}.
     *
     * Personalization options for the table.
     *
     * **Note:** Whether a personalization option is supported depends on the used delegate. Please refer to
     * the documentation of the individual delegates. The order of the provided options does not influence their
     * order on the UI.
     *
     * Default value is `[]`.
     *
     * @since 1.62
     *
     * @returns Value of property `p13nMode`
     */
    getP13nMode(): Array<TableP13nMode | keyof typeof TableP13nMode>;
    /**
     * Gets content of aggregation {@link #getQuickFilter quickFilter}.
     *
     * Additional control for filtering that will be available in the toolbar.
     */
    getQuickFilter(): Control1;
    /**
     * Gets content of aggregation {@link #getRowSettings rowSettings}.
     *
     * Settings for the table rows.
     *
     * **Note:** Each time the properties of the settings are changed, they have to be applied again via `setRowSettings`
     * for the changes to take effect.
     */
    getRowSettings(): RowSettings;
    /**
     * Gets contexts that have been selected by the user.
     *
     *
     * @returns The selected contexts
     */
    getSelectedContexts(): Context[];
    /**
     * Gets current value of property {@link #getSelectionMode selectionMode}.
     *
     * Selection mode of the table. Specifies whether single or multiple rows can be selected and how the selection
     * can be extended. It may also influence the visual appearance.
     *
     * **Note:** With the {@link sap.ui.mdc.table.GridTableType GridTable} and server-side models, range selections,
     * including Select All, only work properly if the count is known. Please refer to the documentation of
     * the used model for information on requesting the count, for example, {@link sap.ui.model.odata.v4.ODataModel}.
     *
     * Default value is `None`.
     *
     *
     * @returns Value of property `selectionMode`
     */
    getSelectionMode(): TableSelectionMode | keyof typeof TableSelectionMode;
    /**
     * Gets current value of property {@link #getShowPasteButton showPasteButton}.
     *
     * Determines whether the Paste button is visible.
     *
     * Default value is `false`.
     *
     * @since 1.91
     *
     * @returns Value of property `showPasteButton`
     */
    getShowPasteButton(): boolean;
    /**
     * Gets current value of property {@link #getShowRowCount showRowCount}.
     *
     * Determines whether the number of rows is shown along with the header text.
     *
     * **Note:** Whether this feature can be used depends on whether the model used and the data service can
     * provide a count. Please refer to the documentation of the used model for information on requesting the
     * count, for example, {@link sap.ui.model.odata.v4.ODataModel}.
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `showRowCount`
     */
    getShowRowCount(): boolean;
    /**
     * Gets current value of property {@link #getThreshold threshold}.
     *
     * Number of records to be requested from the model.
     *
     * If the table type is {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}, the threshold defines
     * the number of rows that are displayed initially, and the number of rows that are added when the table
     * grows ({@link sap.ui.mdc.table.ResponsiveTableType#getGrowingMode growingMode}).
     *
     * If the table type is {@link sap.ui.mdc.table.GridTableType GridTable}, the threshold defines how many
     * additional (not yet visible) data records from the back-end system are pre-fetched. If the `threshold`
     * is lower than the number of visible rows, the number of visible rows is used as the `threshold`. If the
     * value is 0, thresholding is disabled.
     *
     * **Note:** This property only takes effect if it is set to a positive integer value. Otherwise the table
     * uses a type-dependent default value.
     *
     * Default value is `-1`.
     *
     * @since 1.63
     *
     * @returns Value of property `threshold`
     */
    getThreshold(): int;
    /**
     * Gets content of aggregation {@link #getType type}.
     *
     * Type of the table.
     */
    getType(): TableTypeBase | (TableType | keyof typeof TableType);
    /**
     * Gets current value of property {@link #getUseColumnLabelsAsTooltips useColumnLabelsAsTooltips}.
     *
     * If no tooltip has been provided for a column, the column header text will automatically be applied as
     * a tooltip for the column.
     *
     * Default value is `false`.
     *
     * @since 1.115
     *
     * @returns Value of property `useColumnLabelsAsTooltips`
     */
    getUseColumnLabelsAsTooltips(): boolean;
    /**
     * Gets content of aggregation {@link #getVariant variant}.
     *
     * VariantManagement control for the table.
     */
    getVariant(): VariantManagement;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Width of the table.
     *
     *
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getActions actions}. and returns
     * its index if found or -1 otherwise.
     *
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfAction(
      /**
       * The action whose index is looked for
       */
      oAction: Control1
    ): int;
    /**
     * Checks for the provided `sap.ui.mdc.table.Column` in the aggregation {@link #getColumns columns}. and
     * returns its index if found or -1 otherwise.
     *
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfColumn(
      /**
       * The column whose index is looked for
       */
      oColumn: Column
    ): int;
    /**
     * Returns a `Promise` that resolves after the table has been initialized, and after it has been created
     * or its type has been changed.
     *
     *
     * @returns A `Promise` that resolves after the table has been initialized
     */
    initialized(): Promise<any>;
    /**
     * Checks whether the table is bound.
     *
     *
     * @returns Whether the table is bound
     */
    isTableBound(): boolean;
    /**
     * Executes a rebind considering the provided external and inbuilt filtering.
     *
     * @since 1.98
     *
     * @returns A `Promise` that resolves after rebind is executed, and rejects if rebind cannot be executed,
     * for example because there are invalid filters.
     */
    rebind(): Promise<any>;
    /**
     * Scrolls the table to the row with the given index. Depending on the table type, this might cause additional
     * requests. If the given index is -1, it will scroll to the end of the table based on the length of the
     * underlying binding. If the length is not final, it will only scroll to the end of the current binding
     * and might trigger a request for additional entries. This also applies in case of a responsive table with
     * growing enabled.
     *
     * @since 1.76
     *
     * @returns A `Promise` that resolves after the table has been scrolled to the row with the given index
     */
    scrollToIndex(
      /**
       * The index of the row that should be scrolled into the visible area
       */
      iIndex: number
    ): Promise<any>;
    /**
     * Sets a new value for property {@link #getAutoBindOnInit autoBindOnInit}.
     *
     * Determines whether to bind the table automatically after the initial creation or re-creation of the table.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAutoBindOnInit(
      /**
       * New value for property `autoBindOnInit`
       */
      bAutoBindOnInit?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getBusyIndicatorDelay busyIndicatorDelay}.
     *
     * The delay in milliseconds after which the busy indicator is shown.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `100`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setBusyIndicatorDelay(
      /**
       * New value for property `busyIndicatorDelay`
       */
      iBusyIndicatorDelay?: int
    ): this;
    /**
     * Sets the aggregated {@link #getCellSelector cellSelector}.
     *
     * @since 1.119
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setCellSelector(
      /**
       * The cellSelector to set
       */
      oCellSelector: CellSelector
    ): this;
    /**
     * Sets the aggregated {@link #getContextMenu contextMenu}.
     *
     * @since 1.118
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setContextMenu(
      /**
       * The contextMenu to set
       */
      oContextMenu: IContextMenu
    ): this;
    /**
     * Sets the aggregated {@link #getCopyProvider copyProvider}.
     *
     * @since 1.114
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setCopyProvider(
      /**
       * The copyProvider to set
       */
      oCopyProvider: CopyProvider
    ): this;
    /**
     * Sets the aggregated {@link #getCreationRow creationRow}.
     *
     * @deprecated (since 1.124) - the concept has been discarded.
     * @experimental - Do not use
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setCreationRow(
      /**
       * The creationRow to set
       */
      oCreationRow: /* was: sap.ui.mdc.table.CreationRow */ any
    ): this;
    /**
     * Sets the aggregated {@link #getDataStateIndicator dataStateIndicator}.
     *
     * @since 1.89
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDataStateIndicator(
      /**
       * The dataStateIndicator to set
       */
      oDataStateIndicator: DataStateIndicator
    ): this;
    /**
     * Sets a new value for property {@link #getDelegate delegate}.
     *
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module. The used delegate module must inherit from {@link module:sap/ui/mdc/TableDelegate TableDelegate}.
     *
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/TableDelegate",
     * 	payload: {}
     * }```
     *
     *
     * **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `...see text or source`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDelegate(
      /**
       * New value for property `delegate`
       */
      oDelegate?: object
    ): this;
    /**
     * Sets a new value for property {@link #getEnableAutoColumnWidth enableAutoColumnWidth}.
     *
     * Enables automatic column width calculation. The column width calculation takes the type, column label,
     * referenced properties, and other information into account. The calculated column widths can have a minimum
     * of 3rem and a maximum of 20rem.
     *
     * The delegate can customize the automatic column width calculation with the `visualSettings.widthSettings`
     * field in the {@link sap.ui.mdc.table.PropertyInfo PropertyInfo}. To disable the heuristic column width
     * calculation for a particular column, the `visualSettings.widthSettings` field can be set to `null`. Providing
     * a more precise `maxLength` value for the `String` type or `precision` value for numeric types can help
     * the algorithm to produce better results.
     *
     * **Note:** The column width is not calculated if the `width` property of the column is bound or its value
     * is set.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @since 1.95
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableAutoColumnWidth(
      /**
       * New value for property `enableAutoColumnWidth`
       */
      bEnableAutoColumnWidth?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getEnableColumnResize enableColumnResize}.
     *
     * Determines whether column resizing is enabled.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @since 1.90
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableColumnResize(
      /**
       * New value for property `enableColumnResize`
       */
      bEnableColumnResize?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getEnableExport enableExport}.
     *
     * Determines whether the data export is enabled.
     *
     * The delegate can customize the export result with the `exportSettings` field in the {@link sap.ui.mdc.table.PropertyInfo PropertyInfo}.
     *
     * **Note:** To use the export functionality, the {@link sap.ui.export} library is required, otherwise an
     * error message is displayed when the user presses the Export button.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @since 1.75
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableExport(
      /**
       * New value for property `enableExport`
       */
      bEnableExport?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getEnablePaste enablePaste}.
     *
     * Determines whether the Paste button is enabled.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @since 1.96
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnablePaste(
      /**
       * New value for property `enablePaste`
       */
      bEnablePaste?: boolean
    ): this;
    /**
     * Sets the associated {@link #getFilter filter}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFilter(
      /**
       * ID of an element which becomes the new target of this filter association; alternatively, an element instance
       * may be given
       */
      oFilter: ID | IFilter
    ): this;
    /**
     * Sets a new value for property {@link #getHeader header}.
     *
     * Header text that is shown in the table. The header must always be set to comply with accessibility standards,
     * even if other settings make the header invisible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeader(
      /**
       * New value for property `header`
       */
      sHeader?: string
    ): this;
    /**
     * Sets a new value for property {@link #getHeaderLevel headerLevel}.
     *
     * Semantic level of the header. For more information, see {@link sap.m.Title#setLevel}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Auto`.
     *
     * @since 1.84
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderLevel(
      /**
       * New value for property `headerLevel`
       */
      sHeaderLevel?: TitleLevel | keyof typeof TitleLevel
    ): this;
    /**
     * Sets a new value for property {@link #getHeaderStyle headerStyle}.
     *
     * Defines style of the header. For more information, see {@link sap.m.Title#setTitleStyle}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @since 1.116
     * @experimental
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderStyle(
      /**
       * New value for property `headerStyle`
       */
      sHeaderStyle: TitleLevel | keyof typeof TitleLevel
    ): this;
    /**
     * Sets a new value for property {@link #getHeaderVisible headerVisible}.
     *
     * Determines whether the header text is shown in the table. Regardless of its value, the given header text
     * is used to label the table correctly for accessibility purposes.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @since 1.63
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderVisible(
      /**
       * New value for property `headerVisible`
       */
      bHeaderVisible?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getHeight height}.
     *
     * This property has no effect and will be removed soon.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @deprecated (since 1.115) - the concept has been discarded.
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
     * Sets a new value for property {@link #getHideToolbar hideToolbar}.
     *
     * Determines whether the toolbar is visible.
     *
     * **Note:** Hiding the toolbar limits the functionality of the table in the following ways:
     *
     * 	 - The `showRowCount` property **must** be set to `false`.
     * 	 - The export **must** be disabled by setting the `enableExport` property to `false`.
     * 	 - For {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}, show and hide details won't be
     *     visible as the table will always run in "Show Details" mode.
     * 	 - Copy and paste will only work via keyboard.
     * 	 - For {@link sap.ui.mdc.table.TreeTableType TreeTable}, "Collapse All" and "Expand All" won't be possible.
     *
     * 	 - The `actions` and the `quickFilter` aggregations and a table-related {@link sap.ui.fl.variants.VariantManagement }
     *     **must not** be used.
     * 	 - The table title will not be displayed but will be replaced by an `InvisibleText`. The `header` property
     *     **must** be set. In addition, `headerVisible` **must** be set to `false` to ensure accessibility compatibility.
     *
     * 	 - Personalization (`p13nMode`) can still be used via the column headers. If the option to show or hide
     *     columns is activated, it is recommended to use an {@link sap.m.IllustratedMessage} for the `nodata` display.
     *     It ensures that columns can be made visible again when the user has accidentally hidden them all.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @since 1.121
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHideToolbar(
      /**
       * New value for property `hideToolbar`
       */
      bHideToolbar?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getMultiSelectMode multiSelectMode}.
     *
     * Defines the multi-selection mode.
     *
     * **Note:** This property has no effect in the following cases:
     * 	 - Table type is not {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}. This is subject to
     *     change in the future.
     * 	 - Selection mode is not `Multi`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Default`.
     *
     * @since 1.93
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMultiSelectMode(
      /**
       * New value for property `multiSelectMode`
       */
      sMultiSelectMode?: /* was: sap.ui.mdc.enums.TableMultiSelectMode */ any
    ): this;
    /**
     * Sets the aggregated {@link #getNoData noData}.
     *
     * @since 1.106
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setNoData(
      /**
       * The noData to set
       */
      vNoData: Control1 | string
    ): this;
    /**
     * Sets a new value for property {@link #getP13nMode p13nMode}.
     *
     * Personalization options for the table.
     *
     * **Note:** Whether a personalization option is supported depends on the used delegate. Please refer to
     * the documentation of the individual delegates. The order of the provided options does not influence their
     * order on the UI.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `[]`.
     *
     * @since 1.62
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setP13nMode(
      /**
       * New value for property `p13nMode`
       */
      sP13nMode?: Array<TableP13nMode | keyof typeof TableP13nMode>
    ): this;
    /**
     * Sets the aggregated {@link #getQuickFilter quickFilter}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setQuickFilter(
      /**
       * The quickFilter to set
       */
      oQuickFilter: Control1
    ): this;
    /**
     * Sets the aggregated {@link #getRowSettings rowSettings}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setRowSettings(
      /**
       * The rowSettings to set
       */
      oRowSettings: RowSettings
    ): this;
    /**
     * Sets a new value for property {@link #getSelectionMode selectionMode}.
     *
     * Selection mode of the table. Specifies whether single or multiple rows can be selected and how the selection
     * can be extended. It may also influence the visual appearance.
     *
     * **Note:** With the {@link sap.ui.mdc.table.GridTableType GridTable} and server-side models, range selections,
     * including Select All, only work properly if the count is known. Please refer to the documentation of
     * the used model for information on requesting the count, for example, {@link sap.ui.model.odata.v4.ODataModel}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelectionMode(
      /**
       * New value for property `selectionMode`
       */
      sSelectionMode?: TableSelectionMode | keyof typeof TableSelectionMode
    ): this;
    /**
     * Sets a new value for property {@link #getShowPasteButton showPasteButton}.
     *
     * Determines whether the Paste button is visible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @since 1.91
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowPasteButton(
      /**
       * New value for property `showPasteButton`
       */
      bShowPasteButton?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowRowCount showRowCount}.
     *
     * Determines whether the number of rows is shown along with the header text.
     *
     * **Note:** Whether this feature can be used depends on whether the model used and the data service can
     * provide a count. Please refer to the documentation of the used model for information on requesting the
     * count, for example, {@link sap.ui.model.odata.v4.ODataModel}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowRowCount(
      /**
       * New value for property `showRowCount`
       */
      bShowRowCount?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getThreshold threshold}.
     *
     * Number of records to be requested from the model.
     *
     * If the table type is {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}, the threshold defines
     * the number of rows that are displayed initially, and the number of rows that are added when the table
     * grows ({@link sap.ui.mdc.table.ResponsiveTableType#getGrowingMode growingMode}).
     *
     * If the table type is {@link sap.ui.mdc.table.GridTableType GridTable}, the threshold defines how many
     * additional (not yet visible) data records from the back-end system are pre-fetched. If the `threshold`
     * is lower than the number of visible rows, the number of visible rows is used as the `threshold`. If the
     * value is 0, thresholding is disabled.
     *
     * **Note:** This property only takes effect if it is set to a positive integer value. Otherwise the table
     * uses a type-dependent default value.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `-1`.
     *
     * @since 1.63
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setThreshold(
      /**
       * New value for property `threshold`
       */
      iThreshold?: int
    ): this;
    /**
     * Sets the aggregated {@link #getType type}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setType(
      /**
       * The type to set
       */
      vType: TableTypeBase | (TableType | keyof typeof TableType)
    ): this;
    /**
     * Sets a new value for property {@link #getUseColumnLabelsAsTooltips useColumnLabelsAsTooltips}.
     *
     * If no tooltip has been provided for a column, the column header text will automatically be applied as
     * a tooltip for the column.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @since 1.115
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setUseColumnLabelsAsTooltips(
      /**
       * New value for property `useColumnLabelsAsTooltips`
       */
      bUseColumnLabelsAsTooltips?: boolean
    ): this;
    /**
     * Sets the aggregated {@link #getVariant variant}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setVariant(
      /**
       * The variant to set
       */
      oVariant: VariantManagement
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Width of the table.
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
  }
  /**
   * An object literal describing a data property in the context of an {@link sap.ui.mdc.Table}.
   *
   * When specifying the `PropertyInfo` objects in the {@link sap.ui.mdc.Table#getPropertyInfo propertyInfo }
   * property, the following attributes need to be specified:
   * 	 - `key`
   * 	 - `path`
   * 	 - `dataType`
   * 	 - `formatOptions`
   * 	 - `constraints`
   * 	 - `maxConditions`
   * 	 - `caseSensitive`
   * 	 - `visualSettings.widthCalculation`
   * 	 - `propertyInfos`
   * 	 - `groupable`
   * 	 - `isKey`
   * 	 - `unit`
   * 	 - `text`
   *
   * If the property is complex, the following attributes need to be specified:
   * 	 - `key`
   * 	 - `visualSettings.widthCalculation`
   * 	 - `propertyInfos` (all referenced properties must be specified)
   */
  export type PropertyInfo = PropertyInfo1 & {
    /**
     * Defines whether a property is filterable.
     */
    filterable?: boolean;
    /**
     * Defines whether a property is sortable.
     */
    sortable?: boolean;
    /**
     * Defines whether a property is groupable.
     */
    groupable?: boolean;
    /**
     * Defines whether a property is a key or part of a key in the data.
     */
    isKey?: boolean;
    /**
     * Name of the unit property that is related to this property.
     */
    unit?: string;
    /**
     * Name of the text property that is related to this property in a 1:1 relation.
     */
    text?: string;
    /**
     * Object that contains information about the export settings, see {@link sap.ui.export.Spreadsheet}.
     */
    exportSettings?: object;
    /**
     * Object that contains information about the clipboard settings. Setting this value to `null` disables
     * the copy function.
     */
    clipboardSettings?: {
      /**
       * Defines the formatting template that supports indexed placeholders of `propertyInfos` within curly brackets,
       * for example, "{0} ({1})".
       */
      template?: string;
    };
    /**
     * This object contains all relevant properties for visual adjustments.
     */
    visualSettings?: {
      /**
       * This object contains all properties and their default values for the column width calculation
       */
      widthCalculation?: {
        /**
         * The minimum content width in rem
         */
        minWidth?: int;
        /**
         * The maximum content width in rem
         */
        maxWidth?: int;
        /**
         * The default column content width when type check fails
         */
        defaultWidth?: int;
        /**
         * The additional content width in rem
         */
        gap?: float;
        /**
         * Whether the label should be taken into account
         */
        includeLabel?: boolean;
        /**
         * Whether the label should be trucated or not
         */
        truncateLabel?: boolean;
        /**
         * Whether the referenced properties are arranged vertically
         */
        verticalArrangement?: boolean;
        /**
         * A list of invisible referenced property names
         */
        excludeProperties?: string[];
      };
    };
    /**
     * The availability of this property makes the `PropertyInfo` a complex `PropertyInfo`. Provides a list
     * of related properties (by name). These related properties must not themselves be complex.
     */
    propertyInfos?: string[];
  };

  /**
   * Describes the settings that can be provided to the Table constructor.
   */
  export interface $TableSettings extends $ControlSettings {
    /**
     * Width of the table.
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * This property has no effect and will be removed soon.
     *
     * @deprecated (since 1.115) - the concept has been discarded.
     */
    height?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Personalization options for the table.
     *
     * **Note:** Whether a personalization option is supported depends on the used delegate. Please refer to
     * the documentation of the individual delegates. The order of the provided options does not influence their
     * order on the UI.
     *
     * @since 1.62
     */
    p13nMode?:
      | Array<TableP13nMode | keyof typeof TableP13nMode>
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module. The used delegate module must inherit from {@link module:sap/ui/mdc/TableDelegate TableDelegate}.
     *
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/TableDelegate",
     * 	payload: {}
     * }```
     *
     *
     * **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     */
    delegate?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Semantic level of the header. For more information, see {@link sap.m.Title#setLevel}.
     *
     * @since 1.84
     */
    headerLevel?:
      | (TitleLevel | keyof typeof TitleLevel)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines style of the header. For more information, see {@link sap.m.Title#setTitleStyle}.
     *
     * @since 1.116
     * @experimental
     */
    headerStyle?:
      | (TitleLevel | keyof typeof TitleLevel)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines whether to bind the table automatically after the initial creation or re-creation of the table.
     */
    autoBindOnInit?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Header text that is shown in the table. The header must always be set to comply with accessibility standards,
     * even if other settings make the header invisible.
     */
    header?: string | PropertyBindingInfo;

    /**
     * Determines whether the header text is shown in the table. Regardless of its value, the given header text
     * is used to label the table correctly for accessibility purposes.
     *
     * @since 1.63
     */
    headerVisible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If no tooltip has been provided for a column, the column header text will automatically be applied as
     * a tooltip for the column.
     *
     * @since 1.115
     */
    useColumnLabelsAsTooltips?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Selection mode of the table. Specifies whether single or multiple rows can be selected and how the selection
     * can be extended. It may also influence the visual appearance.
     *
     * **Note:** With the {@link sap.ui.mdc.table.GridTableType GridTable} and server-side models, range selections,
     * including Select All, only work properly if the count is known. Please refer to the documentation of
     * the used model for information on requesting the count, for example, {@link sap.ui.model.odata.v4.ODataModel}.
     */
    selectionMode?:
      | (TableSelectionMode | keyof typeof TableSelectionMode)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines whether the number of rows is shown along with the header text.
     *
     * **Note:** Whether this feature can be used depends on whether the model used and the data service can
     * provide a count. Please refer to the documentation of the used model for information on requesting the
     * count, for example, {@link sap.ui.model.odata.v4.ODataModel}.
     */
    showRowCount?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Number of records to be requested from the model.
     *
     * If the table type is {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}, the threshold defines
     * the number of rows that are displayed initially, and the number of rows that are added when the table
     * grows ({@link sap.ui.mdc.table.ResponsiveTableType#getGrowingMode growingMode}).
     *
     * If the table type is {@link sap.ui.mdc.table.GridTableType GridTable}, the threshold defines how many
     * additional (not yet visible) data records from the back-end system are pre-fetched. If the `threshold`
     * is lower than the number of visible rows, the number of visible rows is used as the `threshold`. If the
     * value is 0, thresholding is disabled.
     *
     * **Note:** This property only takes effect if it is set to a positive integer value. Otherwise the table
     * uses a type-dependent default value.
     *
     * @since 1.63
     */
    threshold?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the sort conditions.
     *
     * **Note:** This property must not be bound.
     *  This property is used exclusively for handling SAPUI5 flexibility changes. Do not use it otherwise.
     *
     * @since 1.73
     */
    sortConditions?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the filter conditions.
     *
     * **Note:** This property must not be bound.
     *  This property is used exclusively for handling SAPUI5 flexibility changes. Do not use it otherwise.
     *
     * @since 1.80.0
     */
    filterConditions?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the group conditions.
     *
     * **Note:** This property must not be bound.
     *  This property is used exclusively for handling SAPUI5 flexibility changes. Do not use it otherwise.
     *
     * @since 1.87
     */
    groupConditions?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the aggregate conditions.
     *
     * **Note:** This property must not be bound.
     *  This property is exclusively used for handling SAPUI5 flexibility changes. Do not use it otherwise.
     *
     * @since 1.87
     */
    aggregateConditions?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the data export is enabled.
     *
     * The delegate can customize the export result with the `exportSettings` field in the {@link sap.ui.mdc.table.PropertyInfo PropertyInfo}.
     *
     * **Note:** To use the export functionality, the {@link sap.ui.export} library is required, otherwise an
     * error message is displayed when the user presses the Export button.
     *
     * @since 1.75
     */
    enableExport?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The delay in milliseconds after which the busy indicator is shown.
     */
    busyIndicatorDelay?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether column resizing is enabled.
     *
     * @since 1.90
     */
    enableColumnResize?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the Paste button is visible.
     *
     * @since 1.91
     */
    showPasteButton?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the Paste button is enabled.
     *
     * @since 1.96
     */
    enablePaste?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the multi-selection mode.
     *
     * **Note:** This property has no effect in the following cases:
     * 	 - Table type is not {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}. This is subject to
     *     change in the future.
     * 	 - Selection mode is not `Multi`.
     *
     * @since 1.93
     */
    multiSelectMode?: /* was: sap.ui.mdc.enums.TableMultiSelectMode */
      | any
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Enables automatic column width calculation. The column width calculation takes the type, column label,
     * referenced properties, and other information into account. The calculated column widths can have a minimum
     * of 3rem and a maximum of 20rem.
     *
     * The delegate can customize the automatic column width calculation with the `visualSettings.widthSettings`
     * field in the {@link sap.ui.mdc.table.PropertyInfo PropertyInfo}. To disable the heuristic column width
     * calculation for a particular column, the `visualSettings.widthSettings` field can be set to `null`. Providing
     * a more precise `maxLength` value for the `String` type or `precision` value for numeric types can help
     * the algorithm to produce better results.
     *
     * **Note:** The column width is not calculated if the `width` property of the column is bound or its value
     * is set.
     *
     * @since 1.95
     */
    enableAutoColumnWidth?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies the table metadata.
     *
     * Whenever the `TableDelegate` needs to wait for, for example, server-side information to provide the `PropertyInfo`
     * objects, specifying an array of {@link sap.ui.mdc.table.PropertyInfo PropertyInfo} objects here enables
     * the table to speed up the initial setup.
     *
     * Instead of requesting the `PropertyInfo` objects from the `TableDelegate` and waiting for them, the table
     * will use the `PropertyInfo` objects specified here for rendering-specific tasks, e.g. automatic column
     * width calculation, and to trigger the initial data request.
     *
     * To enable the table for these tasks, certain attributes of a `PropertyInfo` must be specified. You can
     * find the list of required attributes in the documentation of the `PropertyInfo`, for example, in {@link sap.ui.mdc.table.PropertyInfo}.
     *
     * This property is processed only once during the instantiation of the table. Any subsequent changes have
     * no effect.
     *
     * **Note**: This property must not be bound. **Note**: This property is used exclusively for SAPUI5 flexibility
     * / Fiori Elements. Do not use it otherwise.
     *
     * @since 1.111
     */
    propertyInfo?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the toolbar is visible.
     *
     * **Note:** Hiding the toolbar limits the functionality of the table in the following ways:
     *
     * 	 - The `showRowCount` property **must** be set to `false`.
     * 	 - The export **must** be disabled by setting the `enableExport` property to `false`.
     * 	 - For {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}, show and hide details won't be
     *     visible as the table will always run in "Show Details" mode.
     * 	 - Copy and paste will only work via keyboard.
     * 	 - For {@link sap.ui.mdc.table.TreeTableType TreeTable}, "Collapse All" and "Expand All" won't be possible.
     *
     * 	 - The `actions` and the `quickFilter` aggregations and a table-related {@link sap.ui.fl.variants.VariantManagement }
     *     **must not** be used.
     * 	 - The table title will not be displayed but will be replaced by an `InvisibleText`. The `header` property
     *     **must** be set. In addition, `headerVisible` **must** be set to `false` to ensure accessibility compatibility.
     *
     * 	 - Personalization (`p13nMode`) can still be used via the column headers. If the option to show or hide
     *     columns is activated, it is recommended to use an {@link sap.m.IllustratedMessage} for the `nodata` display.
     *     It ensures that columns can be made visible again when the user has accidentally hidden them all.
     *
     * @since 1.121
     */
    hideToolbar?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Type of the table.
     */
    type?:
      | (TableType | keyof typeof TableType)
      | TableTypeBase
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Columns of the table.
     *
     * **Note:** This aggregation is managed by the control, can only be populated during the definition in
     * the XML view, and is not bindable. Any changes of the initial aggregation content might result in undesired
     * effects. Changes of the aggregation have to be made with the {@link sap.ui.mdc.p13n.StateUtil StateUtil}.
     */
    columns?: Column[] | Column | AggregationBindingInfo | `{${string}}`;

    /**
     * This row can be used for user input to create new data if {@link sap.ui.mdc.enums.TableType TableType }
     * is "`Table`".
     *
     * **Note:** Once the binding supports creating transient records, this aggregation will be removed.
     *
     * @deprecated (since 1.124) - the concept has been discarded.
     * @experimental - Do not use
     */
    creationRow?: /* was: sap.ui.mdc.table.CreationRow */ any;

    /**
     * Additional actions that will be available in the toolbar.
     *
     * **Note:** This aggregation is managed by the control, can only be populated during the definition in
     * the XML view, and is not bindable. Any changes of the initial aggregation content might result in undesired
     * effects. Changes of the aggregation have to be made with the {@link sap.ui.mdc.p13n.StateUtil StateUtil}.
     */
    actions?: Control1[] | Control1 | AggregationBindingInfo | `{${string}}`;

    /**
     * VariantManagement control for the table.
     */
    variant?: VariantManagement;

    /**
     * Additional control for filtering that will be available in the toolbar.
     */
    quickFilter?: Control1;

    /**
     * Settings for the table rows.
     *
     * **Note:** Each time the properties of the settings are changed, they have to be applied again via `setRowSettings`
     * for the changes to take effect.
     */
    rowSettings?: RowSettings;

    /**
     * `DataStateIndicator` plugin that can be used to show binding-related messages.
     *
     * @since 1.89
     */
    dataStateIndicator?: DataStateIndicator;

    /**
     * Defines the custom visualization if there is no data to show.
     *
     * **Note:** If {@link sap.m.IllustratedMessage} control is set for the `noData` aggregation and its {@link sap.m.IllustratedMessage#getTitle title }
     * property is not set then the table automatically offers a no data text with fitting {@link sap.m.IllustratedMessage.IllustratedMessageType illustration}.
     *
     * @since 1.106
     */
    noData?: string | Control1 | PropertyBindingInfo;

    /**
     * Defines an aggregation for the `CopyProvider` plugin that provides copy to clipboard capabilities for
     * the selected rows and creates a Copy button for the toolbar. To disable the copy function, including
     * the Copy button in the toolbar, the `enabled` property of the `CopyProvider` must be set to `false`.
     * To hide the Copy button from the toolbar, the `visible` property of the `CopyProvider` must be set to
     * `false`.
     *
     * **Note:** The {@link sap.m.plugins.CopyProvider#extractData extractData} property of the `CopyProvider`
     * must not be managed by the application.
     *  The `CopyProvider` requires a secure context to access the clipboard API. If the context is not secure,
     * the plugin will not be added, and the Copy button will not be generated.
     *
     * @since 1.114
     */
    copyProvider?: CopyProvider;

    /**
     * Defines the context menu for the rows.
     *
     * @since 1.118
     */
    contextMenu?: IContextMenu;

    /**
     * Defines an aggregation for the `CellSelector` plugin that provides cell selection capabilities.
     *
     * **Note:** The `CellSelector` is currently only available in combination with the {@link sap.ui.mdc.table.GridTableType GridTable}.
     * Please refer to {@link sap.m.plugins.CellSelector} for additional restrictions.
     *
     * @since 1.119
     */
    cellSelector?: CellSelector;

    /**
     * Control or object that enables the table to do filtering, such as {@link sap.ui.mdc.FilterBar}. See also
     * {@link sap.ui.mdc.IFilter}.
     *
     * **Note:** By default, automatic filter generation only works in combination with a `sap.ui.mdc.FilterBar`,
     * see also {@link module:sap/ui/mdc/TableDelegate.getFilters}.
     */
    filter?: IFilter | string;

    /**
     * This event is fired when a row is pressed.
     */
    rowPress?: (oEvent: Table$RowPressEvent) => void;

    /**
     * This event is fired when the selection is changed.
     */
    selectionChange?: (oEvent: Table$SelectionChangeEvent) => void;

    /**
     * This event is fired right before the export is triggered.
     *
     * For more information about the export settings, see {@link sap.ui.export.Spreadsheet} or {@link https://ui5.sap.com/#/topic/7e12e6b9154a4607be9d6072c72d609c Spreadsheet Export Configuration}.
     *
     * @since 1.75
     */
    beforeExport?: (oEvent: Table$BeforeExportEvent) => void;

    /**
     * This event is fired when the user pastes content from the clipboard to the table.
     */
    paste?: (oEvent: Table$PasteEvent) => void;

    /**
     * This event is fired when the user requests the context menu for the table.
     *
     * @since 1.117
     */
    beforeOpenContextMenu?: (oEvent: Table$BeforeOpenContextMenuEvent) => void;
  }

  /**
   * Parameters of the Table#beforeExport event.
   */
  export interface Table$BeforeExportEventParameters {
    /**
     * Contains `workbook.columns, dataSource`, and other export-related information.
     *
     * **Note:** The `exportSettings` parameter can be modified by the listener. Thus the parameter can be different
     * if multiple listeners are registered which manipulate the parameter.
     */
    exportSettings?: object;

    /**
     * Contains the export settings defined by the user.
     */
    userExportSettings?: object;

    /**
     * Contains an array of {@link sap.ui.export.util.Filter} objects.
     */
    filterSettings?: object[];
  }

  /**
   * Event object of the Table#beforeExport event.
   */
  export type Table$BeforeExportEvent = Event<
    Table$BeforeExportEventParameters,
    Table
  >;

  /**
   * Parameters of the Table#beforeOpenContextMenu event.
   */
  export interface Table$BeforeOpenContextMenuEventParameters {
    /**
     * The binding context
     */
    bindingContext?: Context;

    /**
     * The column used for the context menu
     *
     * **Note:** This parameter can be undefined if the area where the context menu opens is not related to
     * a column instance.
     */
    column?: Column;
  }

  /**
   * Event object of the Table#beforeOpenContextMenu event.
   */
  export type Table$BeforeOpenContextMenuEvent = Event<
    Table$BeforeOpenContextMenuEventParameters,
    Table
  >;

  /**
   * Parameters of the Table#paste event.
   */
  export interface Table$PasteEventParameters {
    /**
     * 2D array of strings with data from the clipboard. The first dimension represents the rows, and the second
     * dimension represents the cells of the tabular data.
     */
    data?: string[][];
  }

  /**
   * Event object of the Table#paste event.
   */
  export type Table$PasteEvent = Event<Table$PasteEventParameters, Table>;

  /**
   * Parameters of the Table#rowPress event.
   */
  export interface Table$RowPressEventParameters {
    /**
     * The binding context
     */
    bindingContext?: Context;
  }

  /**
   * Event object of the Table#rowPress event.
   */
  export type Table$RowPressEvent = Event<Table$RowPressEventParameters, Table>;

  /**
   * Parameters of the Table#selectionChange event.
   */
  export interface Table$SelectionChangeEventParameters {
    /**
     * Identifies whether the Select All checkbox was pressed
     */
    selectAll?: boolean;
  }

  /**
   * Event object of the Table#selectionChange event.
   */
  export type Table$SelectionChangeEvent = Event<
    Table$SelectionChangeEventParameters,
    Table
  >;
}

declare module "sap/ui/mdc/p13n/StateUtil" {
  import Control from "sap/ui/mdc/Control";

  /**
   * Utility class for state handling of MDC controls. The `StateUtil` class is offering a generic way to
   * retrieve states and set a desired state for a given MDC control. The `StateUtil` class is tightly coupled
   * to the SAPUI5 flexibility integration of MDC controls. To use the APIs of `Stateutil`, the given MDC
   * control instance needs to fully enable all available `p13nMode` options. This way, `Stateutil` can create
   * the required changes and retrieve the relevant state of each control.
   *
   * @since 1.77.0
   */
  export default class StateUtil {
    constructor();

    /**
     * Creates and applies the necessary changes for a given control and state. **Note:**The changes are created
     * in the same order as the objects are passed into the state object attributes. For example, by adding
     * two objects into the `items` attribute of the `oState` object, the first entry is created, and the second
     * entry is created on top of the first change. The item state is applied for each provided object in the
     * given order in the array and uses the provided position. If no index or only an invalid index has been
     * provided, the item is added to the array after the last item in the affected control's item
     * aggregation. In addition the following attributes can be used to remove a state:
     *
     *
     * 	 - `filtered` - Set to `false` in the `filter` scope on condition level to remove one specific condition
     *     for the given key.
     * 	 - `sorted` - Set to `false` in the `sorters` scope to remove a sorter/code>.
     * 	 - `grouped` - Set to `false` in the `groupLevels` scope to remove a grouping.
     * 	 - `visible` - Set to `false` to remove an aggregation item.
     * 	 - `aggregated` - Set to `false` to remove an aggregation.
     *
     * **Note:**To improve the performance, you should avoid additional calls of the control’s delegate. To
     * do this, the `propertyInfo` property of the relevant control can be enriched with the properties used
     * in the provided state.
     *
     *
     * @returns `Promise` that resolves after all changes have been applied
     */
    static applyExternalState(
      /**
       * The control that is used to create changes and to which changes are made
       */
      oControl: Control,
      /**
       * The state in which the control is represented
       */
      oState: object
    ): Promise<any>;
    /**
     * Attaches an event handler to the `StateUtil`. The event handler may be fired every time a user triggers
     * a personalization change for a control instance during runtime.
     */
    static attachStateChange(
      /**
       * fnFunction The handler function to call when the event occurs
       */
      fnListener: Function
    ): void;
    /**
     * Removes a previously attached state change event handler from the `StateUtil` class. The passed parameters
     * must match those used for registration with {@link StateUtil#attachChange} beforehand.
     */
    static detachStateChange(
      /**
       * fnFunction The handler function to detach from the event
       */
      fnListener: Function
    ): void;
    /**
     * Creates a delta between two states.
     *
     *
     * @returns `Promise` that resolves after the current state has been diffed
     */
    static diffState(
      /**
       * The control instance implementing IxState
       */
      oControl: Control,
      /**
       * The prior state
       */
      oOldState: object,
      /**
       * The new state
       */
      oNewState: object
    ): Promise<any>;
    /**
     * Retrieves the externalized state for a given control instance. The retrieved state is equivalent to the
     * `getCurrentState` API for the given control, after all necessary changes have been applied (for example,
     * variant appliance and `p13n, StateUtil` changes). After the returned `Promise` has been resolved, the
     * returned state is in sync with the according state object of the MDC control (for example, `filterConditions`
     * for the `FilterBar` control).
     *
     *
     * @returns `Promise` that resolves after the current state has been retrieved
     */
    static retrieveExternalState(
      /**
       * The control instance implementing IxState to retrieve the externalized state
       */
      oControl: Control
    ): Promise<any>;
  }
}

declare module "sap/ui/mdc/table/Column" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ColumnSettings from "sap/ui/mdc/table/ColumnSettings";

  import { HorizontalAlign, Priority, CSSSize } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * The column for the metadata-driven table with the template, which is shown if the rows have data.
   *
   * @since 1.58
   */
  export default class Column extends Control {
    /**
     * Constructor for a new Column.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $ColumnSettings
    );
    /**
     * Constructor for a new Column.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Optional ID for the new object; generated automatically if no non-empty ID is given
       */
      sId?: string,
      /**
       * initial settings for the new control
       */
      mSettings?: $ColumnSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.table.Column with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, Column>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.table.Column.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Destroys the creationTemplate in the aggregation {@link #getCreationTemplate creationTemplate}.
     *
     * @deprecated (since 1.124) - the concept has been discarded.
     * @experimental - Internal use only
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyCreationTemplate(): this;
    /**
     * Destroys the extendedSettings in the aggregation {@link #getExtendedSettings extendedSettings}.
     *
     * @since 1.110
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyExtendedSettings(): this;
    /**
     * Destroys the template in the aggregation {@link #getTemplate template}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTemplate(): this;
    /**
     * Gets content of aggregation {@link #getCreationTemplate creationTemplate}.
     *
     * `CreationRow` template.
     *
     * **Note:** Once the binding supports creating transient records, this aggregation will be removed.
     *
     * @deprecated (since 1.124) - the concept has been discarded.
     * @experimental - Internal use only
     */
    getCreationTemplate(): Control;
    /**
     * Gets current value of property {@link #getDataProperty dataProperty}.
     *
     * Defines data property related to the column.
     *
     * @since 1.84
     * @deprecated (since 1.115) - Please use `propertyKey` instead.
     *
     * @returns Value of property `dataProperty`
     */
    getDataProperty(): string;
    /**
     * Gets content of aggregation {@link #getExtendedSettings extendedSettings}.
     *
     * Defines type-specific column settings based on the used {@link sap.ui.mdc.table.TableTypeBase}.
     *
     * **Note:** Once `sap.ui.mdc.table.ColumnSettings` are defined, all properties provided by the `ColumnSettings`
     * are automatically assigned to the column.
     *
     * @since 1.110
     */
    getExtendedSettings(): ColumnSettings;
    /**
     * Gets current value of property {@link #getHAlign hAlign}.
     *
     * Defines the horizontal alignment of the column content.
     *
     * Default value is `"Begin"`.
     *
     * @since 1.80
     *
     * @returns Value of property `hAlign`
     */
    getHAlign(): HorizontalAlign | keyof typeof HorizontalAlign;
    /**
     * Gets current value of property {@link #getHeader header}.
     *
     * Defines the column header text.
     *
     * @since 1.80
     *
     * @returns Value of property `header`
     */
    getHeader(): string;
    /**
     * Gets current value of property {@link #getHeaderVisible headerVisible}.
     *
     * Defines whether the column header is visible.
     *
     * Default value is `true`.
     *
     * @since 1.80
     *
     * @returns Value of property `headerVisible`
     */
    getHeaderVisible(): boolean;
    /**
     * Gets current value of property {@link #getImportance importance}.
     *
     * Defines the column importance.
     *
     * The column importance is taken into consideration for calculating the `minScreenWidth` property and for
     * setting the `demandPopin` property of the column. See {@link sap.m.Table#getAutoPopinMode} for more details,
     * which is automatically set to `true`.
     *
     * Default value is `"None"`.
     *
     * @deprecated (since 1.110) - replaced with {@link sap.ui.mdc.table.ResponsiveColumnSettings#importance }
     *
     *  This property will be ignored whenever the {@link sap.ui.mdc.table.ResponsiveColumnSettings} are applied
     * to the column.
     *
     * @returns Value of property `importance`
     */
    getImportance(): Priority | keyof typeof Priority;
    /**
     * Gets current value of property {@link #getMinWidth minWidth}.
     *
     * Defines the minimum width of the column. This property only takes effect if the column has a flexible
     * `width`, for example, a percentage value. The user can resize the column to a smaller width if {@link sap.ui.mdc.Table#getEnableColumnResize column resizing }
     * is enabled in the table.
     *
     * **Note:** If the table type is {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}, the property
     * is used to influence the pop-in behavior: If the accumulated width of all columns is bigger than the
     * width of the table, then the least important column is moved into the pop-in area. For more information,
     * see {@link sap.ui.mdc.table.ResponsiveColumnSettings#getImportance ResponsiveColumnSettings}.
     *
     * Default value is `8`.
     *
     * @since 1.80
     *
     * @returns Value of property `minWidth`
     */
    getMinWidth(): float;
    /**
     * Gets current value of property {@link #getPropertyKey propertyKey}.
     *
     * Defines data property related to the column.
     *
     * @since 1.115
     *
     * @returns Value of property `propertyKey`
     */
    getPropertyKey(): string;
    /**
     * Gets current value of property {@link #getRequired required}.
     *
     * Indicates whether the content of the column is required. **Note:** The table only takes care of announcing
     * the state of the column header as defined by the `required` property. The application needs to take care
     * of the screen reader announcement of the state of the table cells, for example, by setting the `required`
     * property to `true` for `sap.m.Input`.
     *
     * Default value is `false`.
     *
     *
     * @returns Value of property `required`
     */
    getRequired(): boolean;
    /**
     * Gets content of aggregation {@link #getTemplate template}.
     *
     * Template for the column.
     */
    getTemplate(): Control;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Defines the width of the column.
     *
     * @since 1.80
     *
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
    /**
     * Sets the aggregated {@link #getCreationTemplate creationTemplate}.
     *
     * @deprecated (since 1.124) - the concept has been discarded.
     * @experimental - Internal use only
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setCreationTemplate(
      /**
       * The creationTemplate to set
       */
      oCreationTemplate: Control
    ): this;
    /**
     * Sets a new value for property {@link #getDataProperty dataProperty}.
     *
     * Defines data property related to the column.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @since 1.84
     * @deprecated (since 1.115) - Please use `propertyKey` instead.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDataProperty(
      /**
       * New value for property `dataProperty`
       */
      sDataProperty: string
    ): this;
    /**
     * Sets the aggregated {@link #getExtendedSettings extendedSettings}.
     *
     * @since 1.110
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setExtendedSettings(
      /**
       * The extendedSettings to set
       */
      oExtendedSettings: ColumnSettings
    ): this;
    /**
     * Sets a new value for property {@link #getHAlign hAlign}.
     *
     * Defines the horizontal alignment of the column content.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Begin"`.
     *
     * @since 1.80
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHAlign(
      /**
       * New value for property `hAlign`
       */
      sHAlign?: HorizontalAlign | keyof typeof HorizontalAlign
    ): this;
    /**
     * Sets a new value for property {@link #getHeader header}.
     *
     * Defines the column header text.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @since 1.80
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeader(
      /**
       * New value for property `header`
       */
      sHeader: string
    ): this;
    /**
     * Sets a new value for property {@link #getHeaderVisible headerVisible}.
     *
     * Defines whether the column header is visible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @since 1.80
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderVisible(
      /**
       * New value for property `headerVisible`
       */
      bHeaderVisible?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getImportance importance}.
     *
     * Defines the column importance.
     *
     * The column importance is taken into consideration for calculating the `minScreenWidth` property and for
     * setting the `demandPopin` property of the column. See {@link sap.m.Table#getAutoPopinMode} for more details,
     * which is automatically set to `true`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"None"`.
     *
     * @deprecated (since 1.110) - replaced with {@link sap.ui.mdc.table.ResponsiveColumnSettings#importance }
     *
     *  This property will be ignored whenever the {@link sap.ui.mdc.table.ResponsiveColumnSettings} are applied
     * to the column.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setImportance(
      /**
       * New value for property `importance`
       */
      sImportance?: Priority | keyof typeof Priority
    ): this;
    /**
     * Sets a new value for property {@link #getMinWidth minWidth}.
     *
     * Defines the minimum width of the column. This property only takes effect if the column has a flexible
     * `width`, for example, a percentage value. The user can resize the column to a smaller width if {@link sap.ui.mdc.Table#getEnableColumnResize column resizing }
     * is enabled in the table.
     *
     * **Note:** If the table type is {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}, the property
     * is used to influence the pop-in behavior: If the accumulated width of all columns is bigger than the
     * width of the table, then the least important column is moved into the pop-in area. For more information,
     * see {@link sap.ui.mdc.table.ResponsiveColumnSettings#getImportance ResponsiveColumnSettings}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `8`.
     *
     * @since 1.80
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMinWidth(
      /**
       * New value for property `minWidth`
       */
      fMinWidth?: float
    ): this;
    /**
     * Sets a new value for property {@link #getPropertyKey propertyKey}.
     *
     * Defines data property related to the column.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @since 1.115
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setPropertyKey(
      /**
       * New value for property `propertyKey`
       */
      sPropertyKey: string
    ): this;
    /**
     * Sets a new value for property {@link #getRequired required}.
     *
     * Indicates whether the content of the column is required. **Note:** The table only takes care of announcing
     * the state of the column header as defined by the `required` property. The application needs to take care
     * of the screen reader announcement of the state of the table cells, for example, by setting the `required`
     * property to `true` for `sap.m.Input`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setRequired(
      /**
       * New value for property `required`
       */
      bRequired?: boolean
    ): this;
    /**
     * Sets the aggregated {@link #getTemplate template}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTemplate(
      /**
       * The template to set
       */
      oTemplate: Control
    ): this;
    /**
     * Sets a new tooltip for this object.
     *
     * The tooltip can only be a simple string. An instance of {@link sap.ui.core.TooltipBase} is not supported.
     *
     * If a new tooltip is set, any previously set tooltip is deactivated.
     *
     *
     * @returns Returns `this` to allow method chaining
     */
    setTooltip(
      /**
       * New tooltip
       */
      vTooltip: string
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Defines the width of the column.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @since 1.80
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
  /**
   * Describes the settings that can be provided to the Column constructor.
   */
  export interface $ColumnSettings extends $ControlSettings {
    /**
     * Defines the width of the column.
     *
     * @since 1.80
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the minimum width of the column. This property only takes effect if the column has a flexible
     * `width`, for example, a percentage value. The user can resize the column to a smaller width if {@link sap.ui.mdc.Table#getEnableColumnResize column resizing }
     * is enabled in the table.
     *
     * **Note:** If the table type is {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}, the property
     * is used to influence the pop-in behavior: If the accumulated width of all columns is bigger than the
     * width of the table, then the least important column is moved into the pop-in area. For more information,
     * see {@link sap.ui.mdc.table.ResponsiveColumnSettings#getImportance ResponsiveColumnSettings}.
     *
     * @since 1.80
     */
    minWidth?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the column header text.
     *
     * @since 1.80
     */
    header?: string | PropertyBindingInfo;

    /**
     * Defines whether the column header is visible.
     *
     * @since 1.80
     */
    headerVisible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the horizontal alignment of the column content.
     *
     * @since 1.80
     */
    hAlign?:
      | (HorizontalAlign | keyof typeof HorizontalAlign)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the column importance.
     *
     * The column importance is taken into consideration for calculating the `minScreenWidth` property and for
     * setting the `demandPopin` property of the column. See {@link sap.m.Table#getAutoPopinMode} for more details,
     * which is automatically set to `true`.
     *
     * @deprecated (since 1.110) - replaced with {@link sap.ui.mdc.table.ResponsiveColumnSettings#importance }
     *
     *  This property will be ignored whenever the {@link sap.ui.mdc.table.ResponsiveColumnSettings} are applied
     * to the column.
     */
    importance?:
      | (Priority | keyof typeof Priority)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines data property related to the column.
     *
     * @since 1.84
     * @deprecated (since 1.115) - Please use `propertyKey` instead.
     */
    dataProperty?: string | PropertyBindingInfo;

    /**
     * Defines data property related to the column.
     *
     * @since 1.115
     */
    propertyKey?: string | PropertyBindingInfo;

    /**
     * Indicates whether the content of the column is required. **Note:** The table only takes care of announcing
     * the state of the column header as defined by the `required` property. The application needs to take care
     * of the screen reader announcement of the state of the table cells, for example, by setting the `required`
     * property to `true` for `sap.m.Input`.
     */
    required?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Template for the column.
     */
    template?: Control;

    /**
     * `CreationRow` template.
     *
     * **Note:** Once the binding supports creating transient records, this aggregation will be removed.
     *
     * @deprecated (since 1.124) - the concept has been discarded.
     * @experimental - Internal use only
     */
    creationTemplate?: Control;

    /**
     * Defines type-specific column settings based on the used {@link sap.ui.mdc.table.TableTypeBase}.
     *
     * **Note:** Once `sap.ui.mdc.table.ColumnSettings` are defined, all properties provided by the `ColumnSettings`
     * are automatically assigned to the column.
     *
     * @since 1.110
     */
    extendedSettings?: ColumnSettings;
  }
}

declare module "sap/ui/mdc/table/ColumnSettings" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * The table type info class for the metadata-driven table.
   *
   * @since 1.110
   */
  export default class ColumnSettings extends UI5Element {
    /**
     * Constructor for a new `ColumnSettings`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element }
     * can be used.
     */
    constructor(
      /**
       * Initial settings for the new object
       */
      mSettings?: $ColumnSettingsSettings
    );
    /**
     * Constructor for a new `ColumnSettings`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element }
     * can be used.
     */
    constructor(
      /**
       * Optional ID for the new object; generated automatically if no non-empty ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new object
       */
      mSettings?: $ColumnSettingsSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.table.ColumnSettings with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ColumnSettings>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.table.ColumnSettings.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }
  /**
   * Describes the settings that can be provided to the ColumnSettings constructor.
   */
  export interface $ColumnSettingsSettings extends $ElementSettings {}
}

declare module "sap/ui/mdc/table/DragDropConfig" {
  import {
    default as DragDropBase,
    $DragDropBaseSettings,
  } from "sap/ui/core/dnd/DragDropBase";

  import { dnd } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Context from "sap/ui/model/Context";

  import UI5Element from "sap/ui/core/Element";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  import Event from "sap/ui/base/Event";

  /**
   * Provides the configuration for the drag-and-drop operations of the rows of the table.
   *
   * @since 1.119
   */
  export default class DragDropConfig extends DragDropBase {
    /**
     * Constructor for a new DragDropConfig.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new DragDropConfig
       */
      mSettings?: $DragDropConfigSettings
    );
    /**
     * Constructor for a new DragDropConfig.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * ID for the new DragDropConfig, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new DragDropConfig
       */
      mSettings?: $DragDropConfigSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.table.DragDropConfig with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.dnd.DragDropBase.extend}.
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
      oClassInfo?: sap.ClassInfo<T, DragDropConfig>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.table.DragDropConfig.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:dragEnd dragEnd} event of this `sap.ui.mdc.table.DragDropConfig`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.table.DragDropConfig` itself.
     *
     * This event is fired when the row drag operation is ended, if the `draggable` property is set to true.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDragEnd(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: DragDropConfig$DragEndEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.table.DragDropConfig` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:dragEnd dragEnd} event of this `sap.ui.mdc.table.DragDropConfig`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.table.DragDropConfig` itself.
     *
     * This event is fired when the row drag operation is ended, if the `draggable` property is set to true.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDragEnd(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: DragDropConfig$DragEndEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.table.DragDropConfig` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:dragEnter dragEnter} event of this `sap.ui.mdc.table.DragDropConfig`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.table.DragDropConfig` itself.
     *
     * This event is fired when a dragged element enters a table row, if the `droppable` property is set to
     * true.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDragEnter(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: DragDropConfig$DragEnterEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.table.DragDropConfig` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:dragEnter dragEnter} event of this `sap.ui.mdc.table.DragDropConfig`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.table.DragDropConfig` itself.
     *
     * This event is fired when a dragged element enters a table row, if the `droppable` property is set to
     * true.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDragEnter(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: DragDropConfig$DragEnterEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.table.DragDropConfig` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:dragOver dragOver} event of this `sap.ui.mdc.table.DragDropConfig`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.table.DragDropConfig` itself.
     *
     * This event is fired when an element is being dragged over a table row, if the `droppable` property is
     * set to true.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDragOver(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: DragDropConfig$DragOverEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.table.DragDropConfig` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:dragOver dragOver} event of this `sap.ui.mdc.table.DragDropConfig`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.table.DragDropConfig` itself.
     *
     * This event is fired when an element is being dragged over a table row, if the `droppable` property is
     * set to true.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDragOver(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: DragDropConfig$DragOverEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.table.DragDropConfig` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:dragStart dragStart} event of this `sap.ui.mdc.table.DragDropConfig`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.table.DragDropConfig` itself.
     *
     * This event is fired when the user starts dragging a table row, if the `draggable` property is set to
     * true.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDragStart(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: DragDropConfig$DragStartEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.table.DragDropConfig` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:dragStart dragStart} event of this `sap.ui.mdc.table.DragDropConfig`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.table.DragDropConfig` itself.
     *
     * This event is fired when the user starts dragging a table row, if the `draggable` property is set to
     * true.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDragStart(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: DragDropConfig$DragStartEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.table.DragDropConfig` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:drop drop} event of this `sap.ui.mdc.table.DragDropConfig`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.table.DragDropConfig` itself.
     *
     * This event is fired when an element is dropped on a table row, if the `droppable` property is set to
     * true.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
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
      fnFunction: (p1: DragDropConfig$DropEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.table.DragDropConfig` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:drop drop} event of this `sap.ui.mdc.table.DragDropConfig`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.table.DragDropConfig` itself.
     *
     * This event is fired when an element is dropped on a table row, if the `droppable` property is set to
     * true.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDrop(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: DragDropConfig$DropEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.table.DragDropConfig` itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:dragEnd dragEnd} event of this `sap.ui.mdc.table.DragDropConfig`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachDragEnd(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: DragDropConfig$DragEndEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:dragEnter dragEnter} event of this `sap.ui.mdc.table.DragDropConfig`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachDragEnter(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: DragDropConfig$DragEnterEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:dragOver dragOver} event of this `sap.ui.mdc.table.DragDropConfig`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachDragOver(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: DragDropConfig$DragOverEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:dragStart dragStart} event of this `sap.ui.mdc.table.DragDropConfig`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachDragStart(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: DragDropConfig$DragStartEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:drop drop} event of this `sap.ui.mdc.table.DragDropConfig`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachDrop(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: DragDropConfig$DropEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Fires event {@link #event:dragEnd dragEnd} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireDragEnd(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: DragDropConfig$DragEndEventParameters
    ): this;
    /**
     * Fires event {@link #event:dragEnter dragEnter} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Whether or not to prevent the default action
     */
    fireDragEnter(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: DragDropConfig$DragEnterEventParameters
    ): boolean;
    /**
     * Fires event {@link #event:dragOver dragOver} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireDragOver(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: DragDropConfig$DragOverEventParameters
    ): this;
    /**
     * Fires event {@link #event:dragStart dragStart} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Whether or not to prevent the default action
     */
    fireDragStart(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: DragDropConfig$DragStartEventParameters
    ): boolean;
    /**
     * Fires event {@link #event:drop drop} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireDrop(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: DragDropConfig$DropEventParameters
    ): this;
    /**
     * Gets current value of property {@link #getDraggable draggable}.
     *
     * Determines whether the rows of the table are draggable.
     *
     * **Note:** Setting this property to `true` may expose the rows of the table in other `DropInfo` event
     * parameters. In this case, only the binding context of the row is allowed to be used. Internal controls
     * and their types are subject to change without notice.
     *
     * Default value is `false`.
     *
     *
     * @returns Value of property `draggable`
     */
    getDraggable(): boolean;
    /**
     * Gets current value of property {@link #getDropEffect dropEffect}.
     *
     * Defines the visual drop effect.
     *
     * Default value is `"Move"`.
     *
     *
     * @returns Value of property `dropEffect`
     */
    getDropEffect(): dnd.DropEffect | keyof typeof dnd.DropEffect;
    /**
     * Gets current value of property {@link #getDroppable droppable}.
     *
     * Determines whether the rows of the table are droppable.
     *
     * Default value is `false`.
     *
     *
     * @returns Value of property `droppable`
     */
    getDroppable(): boolean;
    /**
     * Gets current value of property {@link #getDropPosition dropPosition}.
     *
     * Defines the position for the drop action, visualized by a rectangle.
     *
     * Default value is `"On"`.
     *
     *
     * @returns Value of property `dropPosition`
     */
    getDropPosition(): dnd.DropPosition | keyof typeof dnd.DropPosition;
    /**
     * Sets a new value for property {@link #getDraggable draggable}.
     *
     * Determines whether the rows of the table are draggable.
     *
     * **Note:** Setting this property to `true` may expose the rows of the table in other `DropInfo` event
     * parameters. In this case, only the binding context of the row is allowed to be used. Internal controls
     * and their types are subject to change without notice.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDraggable(
      /**
       * New value for property `draggable`
       */
      bDraggable?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getDropEffect dropEffect}.
     *
     * Defines the visual drop effect.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Move"`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDropEffect(
      /**
       * New value for property `dropEffect`
       */
      sDropEffect?: dnd.DropEffect | keyof typeof dnd.DropEffect
    ): this;
    /**
     * Sets a new value for property {@link #getDroppable droppable}.
     *
     * Determines whether the rows of the table are droppable.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDroppable(
      /**
       * New value for property `droppable`
       */
      bDroppable?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getDropPosition dropPosition}.
     *
     * Defines the position for the drop action, visualized by a rectangle.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"On"`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDropPosition(
      /**
       * New value for property `dropPosition`
       */
      sDropPosition?: dnd.DropPosition | keyof typeof dnd.DropPosition
    ): this;
  }

  export type DragSource = Context | UI5Element;

  /**
   * Describes the settings that can be provided to the DragDropConfig constructor.
   */
  export interface $DragDropConfigSettings extends $DragDropBaseSettings {
    /**
     * Determines whether the rows of the table are draggable.
     *
     * **Note:** Setting this property to `true` may expose the rows of the table in other `DropInfo` event
     * parameters. In this case, only the binding context of the row is allowed to be used. Internal controls
     * and their types are subject to change without notice.
     */
    draggable?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the rows of the table are droppable.
     */
    droppable?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the visual drop effect.
     */
    dropEffect?:
      | (dnd.DropEffect | keyof typeof dnd.DropEffect)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the position for the drop action, visualized by a rectangle.
     */
    dropPosition?:
      | (dnd.DropPosition | keyof typeof dnd.DropPosition)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * This event is fired when the user starts dragging a table row, if the `draggable` property is set to
     * true.
     */
    dragStart?: (oEvent: DragDropConfig$DragStartEvent) => void;

    /**
     * This event is fired when the row drag operation is ended, if the `draggable` property is set to true.
     */
    dragEnd?: (oEvent: DragDropConfig$DragEndEvent) => void;

    /**
     * This event is fired when a dragged element enters a table row, if the `droppable` property is set to
     * true.
     */
    dragEnter?: (oEvent: DragDropConfig$DragEnterEvent) => void;

    /**
     * This event is fired when an element is being dragged over a table row, if the `droppable` property is
     * set to true.
     */
    dragOver?: (oEvent: DragDropConfig$DragOverEvent) => void;

    /**
     * This event is fired when an element is dropped on a table row, if the `droppable` property is set to
     * true.
     */
    drop?: (oEvent: DragDropConfig$DropEvent) => void;
  }

  /**
   * Parameters of the DragDropConfig#dragEnd event.
   */
  export interface DragDropConfig$DragEndEventParameters {
    /**
     * The binding context of the dragged row
     */
    bindingContext?: Context;
  }

  /**
   * Event object of the DragDropConfig#dragEnd event.
   */
  export type DragDropConfig$DragEndEvent = Event<
    DragDropConfig$DragEndEventParameters,
    DragDropConfig
  >;

  /**
   * Parameters of the DragDropConfig#dragEnter event.
   */
  export interface DragDropConfig$DragEnterEventParameters {
    /**
     * The binding context of the row on which the dragged element will be dropped
     */
    bindingContext?: Context;

    /**
     * The binding context of the dragged row or the dragged control itself
     */
    dragSource?: DragSource;
  }

  /**
   * Event object of the DragDropConfig#dragEnter event.
   */
  export type DragDropConfig$DragEnterEvent = Event<
    DragDropConfig$DragEnterEventParameters,
    DragDropConfig
  >;

  /**
   * Parameters of the DragDropConfig#dragOver event.
   */
  export interface DragDropConfig$DragOverEventParameters {
    /**
     * The binding context of the row on which the dragged element will be dropped
     */
    bindingContext?: Context;

    /**
     * The binding context of the dragged row or the dragged control itself
     */
    dragSource?: DragSource;

    /**
     * The calculated position of the drop action relative to the row being dropped
     */
    dropPosition?:
      | dnd.RelativeDropPosition
      | keyof typeof dnd.RelativeDropPosition;
  }

  /**
   * Event object of the DragDropConfig#dragOver event.
   */
  export type DragDropConfig$DragOverEvent = Event<
    DragDropConfig$DragOverEventParameters,
    DragDropConfig
  >;

  /**
   * Parameters of the DragDropConfig#dragStart event.
   */
  export interface DragDropConfig$DragStartEventParameters {
    /**
     * The binding context of the dragged row
     */
    bindingContext?: Context;
  }

  /**
   * Event object of the DragDropConfig#dragStart event.
   */
  export type DragDropConfig$DragStartEvent = Event<
    DragDropConfig$DragStartEventParameters,
    DragDropConfig
  >;

  /**
   * Parameters of the DragDropConfig#drop event.
   */
  export interface DragDropConfig$DropEventParameters {
    /**
     * The binding context of the row on which the dragged element is dropped
     */
    bindingContext?: Context;

    /**
     * The binding context of the dragged row or the dragged control itself
     */
    dragSource?: DragSource;

    /**
     * The calculated position of the drop action relative to the dropped row
     */
    dropPosition?:
      | dnd.RelativeDropPosition
      | keyof typeof dnd.RelativeDropPosition;
  }

  /**
   * Event object of the DragDropConfig#drop event.
   */
  export type DragDropConfig$DropEvent = Event<
    DragDropConfig$DropEventParameters,
    DragDropConfig
  >;
}

declare module "sap/ui/mdc/table/GridTableType" {
  import {
    default as TableTypeBase,
    $TableTypeBaseSettings,
  } from "sap/ui/mdc/table/TableTypeBase";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import TableRowCountMode from "sap/ui/mdc/enums/TableRowCountMode";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * The table type info class for the metadata-driven table.
   *
   * @since 1.65
   */
  export default class GridTableType extends TableTypeBase {
    /**
     * Constructor for a new `GridTableType`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new object
       */
      mSettings?: $GridTableTypeSettings
    );
    /**
     * Constructor for a new `GridTableType`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Optional ID for the new object; generated automatically if no non-empty ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new object
       */
      mSettings?: $GridTableTypeSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.table.GridTableType with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.table.TableTypeBase.extend}.
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
      oClassInfo?: sap.ClassInfo<T, GridTableType>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.table.GridTableType.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getFixedColumnCount fixedColumnCount}.
     *
     * Defines the number of fixed columns.
     *
     * Default value is `0`.
     *
     *
     * @returns Value of property `fixedColumnCount`
     */
    getFixedColumnCount(): int;
    /**
     * Gets current value of property {@link #getRowCount rowCount}.
     *
     * Row count of the inner table.
     *  This property specifies the minimum row count if `sap.ui.mdc.enums.TableRowCountMode.Auto` is used.
     *  This property specifies the row count if `sap.ui.mdc.enums.TableRowCountMode.Fixed` is used.
     *
     * Default value is `10`.
     *
     *
     * @returns Value of property `rowCount`
     */
    getRowCount(): int;
    /**
     * Gets current value of property {@link #getRowCountMode rowCountMode}.
     *
     * Defines how the table handles the row count.
     *
     * Default value is `Auto`.
     *
     *
     * @returns Value of property `rowCountMode`
     */
    getRowCountMode(): TableRowCountMode | keyof typeof TableRowCountMode;
    /**
     * Gets current value of property {@link #getSelectionLimit selectionLimit}.
     *
     * Number of indices which can be selected in a range. Accepts positive integer values. If set to 0, the
     * selection limit is disabled, and the Select All checkbox appears instead of the Deselect All button.
     *
     * **Note:** To avoid severe performance problems, the limit should only be set to 0 in the following cases:
     *
     * 	 - With client-side models
     * 	 - With server-side models if they are used in client mode
     * 	 - If the entity set is small
     *
     * In other cases, we recommend to set the limit to at least double the value of the {@link sap.ui.mdc.Table#getThreshold threshold }
     * property of the table.
     *
     * Default value is `200`.
     *
     *
     * @returns Value of property `selectionLimit`
     */
    getSelectionLimit(): int;
    /**
     * Gets current value of property {@link #getShowHeaderSelector showHeaderSelector}.
     *
     * Determines whether the header selector is shown.
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `showHeaderSelector`
     */
    getShowHeaderSelector(): boolean;
    /**
     * Sets a new value for property {@link #getFixedColumnCount fixedColumnCount}.
     *
     * Defines the number of fixed columns.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFixedColumnCount(
      /**
       * New value for property `fixedColumnCount`
       */
      iFixedColumnCount?: int
    ): this;
    /**
     * Sets a new value for property {@link #getRowCount rowCount}.
     *
     * Row count of the inner table.
     *  This property specifies the minimum row count if `sap.ui.mdc.enums.TableRowCountMode.Auto` is used.
     *  This property specifies the row count if `sap.ui.mdc.enums.TableRowCountMode.Fixed` is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `10`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setRowCount(
      /**
       * New value for property `rowCount`
       */
      iRowCount?: int
    ): this;
    /**
     * Sets a new value for property {@link #getRowCountMode rowCountMode}.
     *
     * Defines how the table handles the row count.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Auto`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setRowCountMode(
      /**
       * New value for property `rowCountMode`
       */
      sRowCountMode?: TableRowCountMode | keyof typeof TableRowCountMode
    ): this;
    /**
     * Sets a new value for property {@link #getSelectionLimit selectionLimit}.
     *
     * Number of indices which can be selected in a range. Accepts positive integer values. If set to 0, the
     * selection limit is disabled, and the Select All checkbox appears instead of the Deselect All button.
     *
     * **Note:** To avoid severe performance problems, the limit should only be set to 0 in the following cases:
     *
     * 	 - With client-side models
     * 	 - With server-side models if they are used in client mode
     * 	 - If the entity set is small
     *
     * In other cases, we recommend to set the limit to at least double the value of the {@link sap.ui.mdc.Table#getThreshold threshold }
     * property of the table.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `200`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelectionLimit(
      /**
       * New value for property `selectionLimit`
       */
      iSelectionLimit?: int
    ): this;
    /**
     * Sets a new value for property {@link #getShowHeaderSelector showHeaderSelector}.
     *
     * Determines whether the header selector is shown.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowHeaderSelector(
      /**
       * New value for property `showHeaderSelector`
       */
      bShowHeaderSelector?: boolean
    ): this;
  }
  /**
   * Describes the settings that can be provided to the GridTableType constructor.
   */
  export interface $GridTableTypeSettings extends $TableTypeBaseSettings {
    /**
     * Defines how the table handles the row count.
     */
    rowCountMode?:
      | (TableRowCountMode | keyof typeof TableRowCountMode)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Row count of the inner table.
     *  This property specifies the minimum row count if `sap.ui.mdc.enums.TableRowCountMode.Auto` is used.
     *  This property specifies the row count if `sap.ui.mdc.enums.TableRowCountMode.Fixed` is used.
     */
    rowCount?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Number of indices which can be selected in a range. Accepts positive integer values. If set to 0, the
     * selection limit is disabled, and the Select All checkbox appears instead of the Deselect All button.
     *
     * **Note:** To avoid severe performance problems, the limit should only be set to 0 in the following cases:
     *
     * 	 - With client-side models
     * 	 - With server-side models if they are used in client mode
     * 	 - If the entity set is small
     *
     * In other cases, we recommend to set the limit to at least double the value of the {@link sap.ui.mdc.Table#getThreshold threshold }
     * property of the table.
     */
    selectionLimit?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the header selector is shown.
     */
    showHeaderSelector?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the number of fixed columns.
     */
    fixedColumnCount?: int | PropertyBindingInfo | `{${string}}`;
  }
}

declare module "sap/ui/mdc/table/ResponsiveColumnSettings" {
  import {
    default as ColumnSettings,
    $ColumnSettingsSettings,
  } from "sap/ui/mdc/table/ColumnSettings";

  import { Priority } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * The table type info class for the metadata-driven table.
   *
   * @since 1.110
   */
  export default class ResponsiveColumnSettings extends ColumnSettings {
    /**
     * Constructor for a new `ResponsiveColumnSettings`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new object
       */
      mSettings?: $ResponsiveColumnSettingsSettings
    );
    /**
     * Constructor for a new `ResponsiveColumnSettings`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Optional ID for the new object; generated automatically if no non-empty ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new object
       */
      mSettings?: $ResponsiveColumnSettingsSettings
    );

    /**
     * Returns a metadata object for class sap.ui.mdc.table.ResponsiveColumnSettings.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getImportance importance}.
     *
     * Defines the column importance.
     *
     * Columns are moved to the pop-in area in the following order:
     * 	 - With importance `High`: moved last
     * 	 - With importance `Medium` or `None`: moved second
     * 	 - With importance `Low`: moved first
     *
     * Default value is `"None"`.
     *
     * @since 1.110
     *
     * @returns Value of property `importance`
     */
    getImportance(): Priority | keyof typeof Priority;
    /**
     * Gets current value of property {@link #getMergeFunction mergeFunction}.
     *
     * Defines the control serialization function to merge duplicate cells into one cell block. This function
     * is used to compare values of two cells.
     *
     * **Note:** Don't set this property for cells for which the content provides a user interaction, such as
     * `sap.m.Link`.
     *
     * @since 1.110
     *
     * @returns Value of property `mergeFunction`
     */
    getMergeFunction(): string;
    /**
     * Sets a new value for property {@link #getImportance importance}.
     *
     * Defines the column importance.
     *
     * Columns are moved to the pop-in area in the following order:
     * 	 - With importance `High`: moved last
     * 	 - With importance `Medium` or `None`: moved second
     * 	 - With importance `Low`: moved first
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"None"`.
     *
     * @since 1.110
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setImportance(
      /**
       * New value for property `importance`
       */
      sImportance?: Priority | keyof typeof Priority
    ): this;
    /**
     * Sets a new value for property {@link #getMergeFunction mergeFunction}.
     *
     * Defines the control serialization function to merge duplicate cells into one cell block. This function
     * is used to compare values of two cells.
     *
     * **Note:** Don't set this property for cells for which the content provides a user interaction, such as
     * `sap.m.Link`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @since 1.110
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMergeFunction(
      /**
       * New value for property `mergeFunction`
       */
      sMergeFunction: string
    ): this;
  }
  /**
   * Describes the settings that can be provided to the ResponsiveColumnSettings constructor.
   */
  export interface $ResponsiveColumnSettingsSettings
    extends $ColumnSettingsSettings {
    /**
     * Defines the column importance.
     *
     * Columns are moved to the pop-in area in the following order:
     * 	 - With importance `High`: moved last
     * 	 - With importance `Medium` or `None`: moved second
     * 	 - With importance `Low`: moved first
     *
     * @since 1.110
     */
    importance?:
      | (Priority | keyof typeof Priority)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the control serialization function to merge duplicate cells into one cell block. This function
     * is used to compare values of two cells.
     *
     * **Note:** Don't set this property for cells for which the content provides a user interaction, such as
     * `sap.m.Link`.
     *
     * @since 1.110
     */
    mergeFunction?: string | PropertyBindingInfo;
  }
}

declare module "sap/ui/mdc/table/ResponsiveTableType" {
  import {
    default as TableTypeBase,
    $TableTypeBaseSettings,
  } from "sap/ui/mdc/table/TableTypeBase";

  import { Priority } from "sap/ui/core/library";

  import TableGrowingMode from "sap/ui/mdc/enums/TableGrowingMode";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PopinLayout } from "sap/m/library";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * The table type info class for the metadata-driven table.
   *
   * @since 1.65
   */
  export default class ResponsiveTableType extends TableTypeBase {
    /**
     * Constructor for a new `ResponsiveTableType`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new object
       */
      mSettings?: $ResponsiveTableTypeSettings
    );
    /**
     * Constructor for a new `ResponsiveTableType`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Optional ID for the new object; generated automatically if no non-empty ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new object
       */
      mSettings?: $ResponsiveTableTypeSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.table.ResponsiveTableType with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.table.TableTypeBase.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ResponsiveTableType>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.table.ResponsiveTableType.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getDetailsButtonSetting detailsButtonSetting}.
     *
     * Defines which columns are hidden instead of moved into the pop-in area depending on their importance.
     * See {@link sap.ui.mdc.table.ResponsiveColumnSettings#getImportance} for more details.
     *
     * **Note:** To hide columns based on their importance, it's mandatory to set `showDetailsButton` to `true`.
     *  If no importance is given, a device-dependent default configuration is used.
     *  If this property is changed after the table has been initialized, the new changes take effect only when
     * the Show / Hide Details button is pressed a second time.
     *
     * @since 1.86
     *
     * @returns Value of property `detailsButtonSetting`
     */
    getDetailsButtonSetting(): Array<Priority | keyof typeof Priority>;
    /**
     * Gets current value of property {@link #getGrowingMode growingMode}.
     *
     * Specifies the growing mode.
     *
     * Default value is `Basic`.
     *
     *
     * @returns Value of property `growingMode`
     */
    getGrowingMode(): TableGrowingMode | keyof typeof TableGrowingMode;
    /**
     * Gets current value of property {@link #getPopinLayout popinLayout}.
     *
     * Defines the layout in which the table pop-in rows are rendered.
     *
     * Default value is `"Block"`.
     *
     * @since 1.96
     *
     * @returns Value of property `popinLayout`
     */
    getPopinLayout(): PopinLayout | keyof typeof PopinLayout;
    /**
     * Gets current value of property {@link #getShowDetailsButton showDetailsButton}.
     *
     * Specifies whether the Show / Hide Details button is shown.
     *
     * If the available screen space gets too narrow, the columns configured with `High` and `Medium` importance
     * move to the pop-in area, while the columns with `Low` importance are hidden.
     *  On mobile phones, the columns with `Medium` importance are also hidden.
     *  As soon as the first column is hidden, this button appears in the table toolbar and gives the user the
     * possibility to toggle the visibility of the hidden columns in the pop-in area.
     *
     * Default value is `false`.
     *
     * @since 1.79
     *
     * @returns Value of property `showDetailsButton`
     */
    getShowDetailsButton(): boolean;
    /**
     * Sets a new value for property {@link #getDetailsButtonSetting detailsButtonSetting}.
     *
     * Defines which columns are hidden instead of moved into the pop-in area depending on their importance.
     * See {@link sap.ui.mdc.table.ResponsiveColumnSettings#getImportance} for more details.
     *
     * **Note:** To hide columns based on their importance, it's mandatory to set `showDetailsButton` to `true`.
     *  If no importance is given, a device-dependent default configuration is used.
     *  If this property is changed after the table has been initialized, the new changes take effect only when
     * the Show / Hide Details button is pressed a second time.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @since 1.86
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDetailsButtonSetting(
      /**
       * New value for property `detailsButtonSetting`
       */
      sDetailsButtonSetting: Array<Priority | keyof typeof Priority>
    ): this;
    /**
     * Sets a new value for property {@link #getGrowingMode growingMode}.
     *
     * Specifies the growing mode.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Basic`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setGrowingMode(
      /**
       * New value for property `growingMode`
       */
      sGrowingMode?: TableGrowingMode | keyof typeof TableGrowingMode
    ): this;
    /**
     * Sets a new value for property {@link #getPopinLayout popinLayout}.
     *
     * Defines the layout in which the table pop-in rows are rendered.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Block"`.
     *
     * @since 1.96
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setPopinLayout(
      /**
       * New value for property `popinLayout`
       */
      sPopinLayout?: PopinLayout | keyof typeof PopinLayout
    ): this;
    /**
     * Sets a new value for property {@link #getShowDetailsButton showDetailsButton}.
     *
     * Specifies whether the Show / Hide Details button is shown.
     *
     * If the available screen space gets too narrow, the columns configured with `High` and `Medium` importance
     * move to the pop-in area, while the columns with `Low` importance are hidden.
     *  On mobile phones, the columns with `Medium` importance are also hidden.
     *  As soon as the first column is hidden, this button appears in the table toolbar and gives the user the
     * possibility to toggle the visibility of the hidden columns in the pop-in area.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @since 1.79
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowDetailsButton(
      /**
       * New value for property `showDetailsButton`
       */
      bShowDetailsButton?: boolean
    ): this;
  }
  /**
   * Describes the settings that can be provided to the ResponsiveTableType constructor.
   */
  export interface $ResponsiveTableTypeSettings extends $TableTypeBaseSettings {
    /**
     * Specifies the growing mode.
     */
    growingMode?:
      | (TableGrowingMode | keyof typeof TableGrowingMode)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Specifies whether the Show / Hide Details button is shown.
     *
     * If the available screen space gets too narrow, the columns configured with `High` and `Medium` importance
     * move to the pop-in area, while the columns with `Low` importance are hidden.
     *  On mobile phones, the columns with `Medium` importance are also hidden.
     *  As soon as the first column is hidden, this button appears in the table toolbar and gives the user the
     * possibility to toggle the visibility of the hidden columns in the pop-in area.
     *
     * @since 1.79
     */
    showDetailsButton?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines which columns are hidden instead of moved into the pop-in area depending on their importance.
     * See {@link sap.ui.mdc.table.ResponsiveColumnSettings#getImportance} for more details.
     *
     * **Note:** To hide columns based on their importance, it's mandatory to set `showDetailsButton` to `true`.
     *  If no importance is given, a device-dependent default configuration is used.
     *  If this property is changed after the table has been initialized, the new changes take effect only when
     * the Show / Hide Details button is pressed a second time.
     *
     * @since 1.86
     */
    detailsButtonSetting?:
      | Array<Priority | keyof typeof Priority>
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the layout in which the table pop-in rows are rendered.
     *
     * @since 1.96
     */
    popinLayout?:
      | (PopinLayout | keyof typeof PopinLayout)
      | PropertyBindingInfo
      | `{${string}}`;
  }
}

declare module "sap/ui/mdc/table/RowActionItem" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import { URI } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import TableRowActionType from "sap/ui/mdc/enums/TableRowActionType";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  import Context from "sap/ui/model/Context";

  import Event from "sap/ui/base/Event";

  /**
   * The `RowActionItem` control represents a action for a row. This control can only be used in the context
   * of `sap.ui.mdc.Table` control to define row actions.
   */
  export default class RowActionItem extends UI5Element {
    /**
     * Constructor for new RowActionItem.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $RowActionItemSettings
    );
    /**
     * Constructor for new RowActionItem.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Optional ID for the new object; generated automatically if no non-empty ID is given
       */
      sId?: string,
      /**
       * initial settings for the new control
       */
      mSettings?: $RowActionItemSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.table.RowActionItem with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
      oClassInfo?: sap.ClassInfo<T, RowActionItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.table.RowActionItem.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.mdc.table.RowActionItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.table.RowActionItem` itself.
     *
     * Fired when the row action item is pressed.
     *
     * If the table type is {@link sap.ui.mdc.table.GridTableType GridTable}, the `press` event is fired when
     * a row action item is pressed.
     *
     * If the table type is {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}, the `press` event
     * and the table's `rowPress` event are fired when a row with a row action item is pressed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPress(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: RowActionItem$PressEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.table.RowActionItem` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.mdc.table.RowActionItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.table.RowActionItem` itself.
     *
     * Fired when the row action item is pressed.
     *
     * If the table type is {@link sap.ui.mdc.table.GridTableType GridTable}, the `press` event is fired when
     * a row action item is pressed.
     *
     * If the table type is {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}, the `press` event
     * and the table's `rowPress` event are fired when a row with a row action item is pressed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: RowActionItem$PressEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.table.RowActionItem` itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.mdc.table.RowActionItem`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachPress(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: RowActionItem$PressEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Fires event {@link #event:press press} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    firePress(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: RowActionItem$PressEventParameters
    ): this;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Icon for the row action item.
     *
     * **Note:** A custom icon cannot be set when the table type is {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}.
     *
     *
     * @returns Value of property `icon`
     */
    getIcon(): URI;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Text for the row action item.
     *
     * **Note:** A custom text cannot be set when the table type is {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}.
     *
     *
     * @returns Value of property `text`
     */
    getText(): string;
    /**
     * Gets current value of property {@link #getType type}.
     *
     * Type of the row action item.
     *
     * Setting the type ensures default values for the properties `icon` and `text`. If an icon or text is set
     * explicitly, this setting is used.
     *
     *
     * @returns Value of property `type`
     */
    getType(): TableRowActionType | keyof typeof TableRowActionType;
    /**
     * Gets current value of property {@link #getVisible visible}.
     *
     * Whether the item should be visible on the screen.
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `visible`
     */
    getVisible(): boolean;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Icon for the row action item.
     *
     * **Note:** A custom icon cannot be set when the table type is {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setIcon(
      /**
       * New value for property `icon`
       */
      sIcon: URI
    ): this;
    /**
     * Sets a new value for property {@link #getText text}.
     *
     * Text for the row action item.
     *
     * **Note:** A custom text cannot be set when the table type is {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setText(
      /**
       * New value for property `text`
       */
      sText: string
    ): this;
    /**
     * Sets a new value for property {@link #getType type}.
     *
     * Type of the row action item.
     *
     * Setting the type ensures default values for the properties `icon` and `text`. If an icon or text is set
     * explicitly, this setting is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setType(
      /**
       * New value for property `type`
       */
      sType: TableRowActionType | keyof typeof TableRowActionType
    ): this;
    /**
     * Sets a new value for property {@link #getVisible visible}.
     *
     * Whether the item should be visible on the screen.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
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
   * Describes the settings that can be provided to the RowActionItem constructor.
   */
  export interface $RowActionItemSettings extends $ElementSettings {
    /**
     * Type of the row action item.
     *
     * Setting the type ensures default values for the properties `icon` and `text`. If an icon or text is set
     * explicitly, this setting is used.
     */
    type?:
      | (TableRowActionType | keyof typeof TableRowActionType)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Text for the row action item.
     *
     * **Note:** A custom text cannot be set when the table type is {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}.
     */
    text?: string | PropertyBindingInfo;

    /**
     * Icon for the row action item.
     *
     * **Note:** A custom icon cannot be set when the table type is {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}.
     */
    icon?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * Whether the item should be visible on the screen.
     */
    visible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Fired when the row action item is pressed.
     *
     * If the table type is {@link sap.ui.mdc.table.GridTableType GridTable}, the `press` event is fired when
     * a row action item is pressed.
     *
     * If the table type is {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}, the `press` event
     * and the table's `rowPress` event are fired when a row with a row action item is pressed.
     */
    press?: (oEvent: RowActionItem$PressEvent) => void;
  }

  /**
   * Parameters of the RowActionItem#press event.
   */
  export interface RowActionItem$PressEventParameters {
    /**
     * The binding context of the pressed row action
     */
    bindingContext?: Context;
  }

  /**
   * Event object of the RowActionItem#press event.
   */
  export type RowActionItem$PressEvent = Event<
    RowActionItem$PressEventParameters,
    RowActionItem
  >;
}

declare module "sap/ui/mdc/table/RowSettings" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import RowActionItem from "sap/ui/mdc/table/RowActionItem";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * The `RowSettings` control is used to configure a row. This control can only be used in the context of
   * the `sap.ui.mdc.Table` control to define row settings.
   */
  export default class RowSettings extends UI5Element {
    /**
     * Constructor for new `RowSettings`.
     *
     * **Note:** Only use bindings that are bound against the rows, as working functionality cannot be ensured
     * for other binding types.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $RowSettingsSettings
    );
    /**
     * Constructor for new `RowSettings`.
     *
     * **Note:** Only use bindings that are bound against the rows, as working functionality cannot be ensured
     * for other binding types.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Optional ID for the new object; generated automatically if no non-empty ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $RowSettingsSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.table.RowSettings with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
      oClassInfo?: sap.ClassInfo<T, RowSettings>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.table.RowSettings.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some rowAction to the aggregation {@link #getRowActions rowActions}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addRowAction(
      /**
       * The rowAction to add; if empty, nothing is inserted
       */
      oRowAction: RowActionItem
    ): this;
    /**
     * Destroys all the rowActions in the aggregation {@link #getRowActions rowActions}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyRowActions(): this;
    /**
     * Gets current value of property {@link #getHighlight highlight}.
     *
     * The highlight state of the rows.
     *
     * If the highlight is set to {@link sap.ui.core.MessageType sap.ui.core.MessageType.None} (default), no
     * highlights are visible. Valid values for the `highlight` property are values of the enumerations {@link sap.ui.core.MessageType }
     * or {@link sap.ui.core.IndicationColor}.
     *
     * Accessibility support is provided with the {@link sap.ui.mdc.table.RowSettings#setHighlightText highlightText }
     * property. If the `highlight` property is set to a value of {@link sap.ui.core.MessageType}, the `highlightText`
     * property does not need to be set because a default text is used. However, the default text can be overridden
     * by setting the `highlightText` property. In all other cases the `highlightText` property must be set.
     *
     * Default value is `"None"`.
     *
     *
     * @returns Value of property `highlight`
     */
    getHighlight(): string;
    /**
     * Gets current value of property {@link #getHighlightText highlightText}.
     *
     * Defines the semantics of the {@link sap.ui.mdc.table.RowSettings#setHighlight highlight} property for
     * accessibility purposes.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Value of property `highlightText`
     */
    getHighlightText(): string;
    /**
     * Gets current value of property {@link #getNavigated navigated}.
     *
     * The navigated state of a row. The navigation indicator is displayed at the end of a row.
     *
     * Default value is `false`.
     *
     *
     * @returns Value of property `navigated`
     */
    getNavigated(): boolean;
    /**
     * Gets content of aggregation {@link #getRowActions rowActions}.
     *
     * The actions that appear at the end of a row.
     *
     * **Note:** This aggregation cannot be bound with a factory.
     *  If the table type is {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}, only the `Navigation`
     * row action type is supported.
     */
    getRowActions(): RowActionItem[];
    /**
     * Checks for the provided `sap.ui.mdc.table.RowActionItem` in the aggregation {@link #getRowActions rowActions}.
     * and returns its index if found or -1 otherwise.
     *
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfRowAction(
      /**
       * The rowAction whose index is looked for
       */
      oRowAction: RowActionItem
    ): int;
    /**
     * Inserts a rowAction into the aggregation {@link #getRowActions rowActions}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertRowAction(
      /**
       * The rowAction to insert; if empty, nothing is inserted
       */
      oRowAction: RowActionItem,
      /**
       * The `0`-based index the rowAction should be inserted at; for a negative value of `iIndex`, the rowAction
       * is inserted at position 0; for a value greater than the current size of the aggregation, the rowAction
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getRowActions rowActions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllRowActions(): RowActionItem[];
    /**
     * Removes a rowAction from the aggregation {@link #getRowActions rowActions}.
     *
     *
     * @returns The removed rowAction or `null`
     */
    removeRowAction(
      /**
       * The rowAction to remove or its index or id
       */
      vRowAction: int | string | RowActionItem
    ): RowActionItem | null;
    /**
     * Sets a new value for property {@link #getHighlight highlight}.
     *
     * The highlight state of the rows.
     *
     * If the highlight is set to {@link sap.ui.core.MessageType sap.ui.core.MessageType.None} (default), no
     * highlights are visible. Valid values for the `highlight` property are values of the enumerations {@link sap.ui.core.MessageType }
     * or {@link sap.ui.core.IndicationColor}.
     *
     * Accessibility support is provided with the {@link sap.ui.mdc.table.RowSettings#setHighlightText highlightText }
     * property. If the `highlight` property is set to a value of {@link sap.ui.core.MessageType}, the `highlightText`
     * property does not need to be set because a default text is used. However, the default text can be overridden
     * by setting the `highlightText` property. In all other cases the `highlightText` property must be set.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"None"`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHighlight(
      /**
       * New value for property `highlight`
       */
      sHighlight?: string
    ): this;
    /**
     * Sets a new value for property {@link #getHighlightText highlightText}.
     *
     * Defines the semantics of the {@link sap.ui.mdc.table.RowSettings#setHighlight highlight} property for
     * accessibility purposes.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHighlightText(
      /**
       * New value for property `highlightText`
       */
      sHighlightText?: string
    ): this;
    /**
     * Sets a new value for property {@link #getNavigated navigated}.
     *
     * The navigated state of a row. The navigation indicator is displayed at the end of a row.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setNavigated(
      /**
       * New value for property `navigated`
       */
      bNavigated?: boolean
    ): this;
  }
  /**
   * Describes the settings that can be provided to the RowSettings constructor.
   */
  export interface $RowSettingsSettings extends $ElementSettings {
    /**
     * The highlight state of the rows.
     *
     * If the highlight is set to {@link sap.ui.core.MessageType sap.ui.core.MessageType.None} (default), no
     * highlights are visible. Valid values for the `highlight` property are values of the enumerations {@link sap.ui.core.MessageType }
     * or {@link sap.ui.core.IndicationColor}.
     *
     * Accessibility support is provided with the {@link sap.ui.mdc.table.RowSettings#setHighlightText highlightText }
     * property. If the `highlight` property is set to a value of {@link sap.ui.core.MessageType}, the `highlightText`
     * property does not need to be set because a default text is used. However, the default text can be overridden
     * by setting the `highlightText` property. In all other cases the `highlightText` property must be set.
     */
    highlight?: string | PropertyBindingInfo;

    /**
     * Defines the semantics of the {@link sap.ui.mdc.table.RowSettings#setHighlight highlight} property for
     * accessibility purposes.
     */
    highlightText?: string | PropertyBindingInfo;

    /**
     * The navigated state of a row. The navigation indicator is displayed at the end of a row.
     */
    navigated?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The actions that appear at the end of a row.
     *
     * **Note:** This aggregation cannot be bound with a factory.
     *  If the table type is {@link sap.ui.mdc.table.ResponsiveTableType ResponsiveTable}, only the `Navigation`
     * row action type is supported.
     */
    rowActions?:
      | RowActionItem[]
      | RowActionItem
      | AggregationBindingInfo
      | `{${string}}`;
  }
}

declare module "sap/ui/mdc/table/TableTypeBase" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * The table type info base class for the metadata-driven table. Base class with no implementation.
   *
   * @since 1.65
   */
  export default abstract class TableTypeBase extends UI5Element {
    /**
     * Constructor for a new `TableTypeBase`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element }
     * can be used.
     */
    constructor(
      /**
       * Initial settings for the new object
       */
      mSettings?: $TableTypeBaseSettings
    );
    /**
     * Constructor for a new `TableTypeBase`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element }
     * can be used.
     */
    constructor(
      /**
       * Optional ID for the new object; generated automatically if no non-empty ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new object
       */
      mSettings?: $TableTypeBaseSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.table.TableTypeBase with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
      oClassInfo?: sap.ClassInfo<T, TableTypeBase>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.table.TableTypeBase.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }
  /**
   * Describes the settings that can be provided to the TableTypeBase constructor.
   */
  export interface $TableTypeBaseSettings extends $ElementSettings {}
}

declare module "sap/ui/mdc/table/TreeTableType" {
  import {
    default as GridTableType,
    $GridTableTypeSettings,
  } from "sap/ui/mdc/table/GridTableType";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * The table type info class for the metadata-driven table.
   *
   * @since 1.109
   */
  export default class TreeTableType extends GridTableType {
    /**
     * Constructor for a new `TreeTableType`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.mdc.table.GridTableType#constructor sap.ui.mdc.table.GridTableType }
     * can be used.
     */
    constructor(
      /**
       * Initial settings for the new object
       */
      mSettings?: $TreeTableTypeSettings
    );
    /**
     * Constructor for a new `TreeTableType`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.mdc.table.GridTableType#constructor sap.ui.mdc.table.GridTableType }
     * can be used.
     */
    constructor(
      /**
       * Optional ID for the new object; generated automatically if no non-empty ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new object
       */
      mSettings?: $TreeTableTypeSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.table.TreeTableType with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.table.GridTableType.extend}.
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
      oClassInfo?: sap.ClassInfo<T, TreeTableType>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.table.TreeTableType.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }
  /**
   * Describes the settings that can be provided to the TreeTableType constructor.
   */
  export interface $TreeTableTypeSettings extends $GridTableTypeSettings {}
}

declare module "sap/ui/mdc/util/PropertyHelper" {
  /**
   * An object literal describing a data property.
   */
  export type PropertyInfo = {
    /**
     * Unique, stable key for the property. It must only contain characters allowed for IDs, see {@link sap.ui.core.ID}.
     * Does not have to be an existing attribute in the data model or the technical name of an attribute in
     * the data model.
     */
    key: string;
    /**
     * The technical path for a data source property.
     */
    path?: string;
    /**
     * Translatable text that labels the property.
     */
    label: string;
    /**
     * Translatable text that can optionally be offered as tooltip (For example in a personalization dialog).
     */
    tooltip?: string;
    /**
     * Whether the property is or can be visible to a user.
     */
    visible?: boolean;
    /**
     * Defines the maximum number of filter conditions for the property. Possible values that can be used:
     *
     * 	 - 1 is a single-filter expression field
     * 	 - -1 is a multi-filter expression field  This information is, for example, used in the `addItem`
     *     method of the `FilterBar` control to forward this information to the created `FilterField` instance.
     */
    maxConditions?: int;
    /**
     * The name of the data type
     */
    dataType: string;
    /**
     * Defines the format options for the data type
     */
    formatOptions?: object;
    /**
     * Defines the constraints for the data type
     */
    constraints?: object;
    /**
     * Key of the group the property is inside. Used to visually group properties in personalization dialogs.
     */
    group?: string;
    /**
     * Translatable text of the group.
     */
    groupLabel?: string;
    /**
     * Whether filtering by this property is case-sensitive.
     */
    caseSensitive?: boolean;
  };
}

declare module "sap/ui/mdc/ValueHelp" {
  import { default as Element1, $ElementSettings } from "sap/ui/mdc/Element";

  import Event from "sap/ui/base/Event";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Context from "sap/ui/model/Context";

  import Control from "sap/ui/core/Control";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  import Container from "sap/ui/mdc/valuehelp/base/Container";

  /**
   * The `ValueHelp` element can be assigned to the {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.MultiValueField MultiValueField},
   * and {@link sap.ui.mdc.FilterField FilterField} controls using the `valueHelp` association. One `ValueHelp`
   * element instance can be assigned to multiple fields (like in different table rows). It should be placed
   * in the control tree on the container holding the fields.
   *
   * @since 1.95.0
   */
  export default abstract class ValueHelp extends Element1 {
    /**
     * Constructor for a new `ValueHelp`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new element
       */
      mSettings?: $ValueHelpSettings
    );
    /**
     * Constructor for a new `ValueHelp`.
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
      mSettings?: $ValueHelpSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.ValueHelp with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.Element.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ValueHelp>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.ValueHelp.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.mdc.ValueHelp`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.ValueHelp` itself.
     *
     * This event is fired after the value help has been closed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClosed(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.ValueHelp` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.mdc.ValueHelp`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.ValueHelp` itself.
     *
     * This event is fired after the value help has been closed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClosed(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.ValueHelp` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:disconnect disconnect} event of this `sap.ui.mdc.ValueHelp`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.ValueHelp` itself.
     *
     * This event is fired when the `ValueHelp` element is disconnected from a control.
     *
     * **Note:** This event must only be handled by the control the `ValueHelp` element belongs to, not by the
     * application.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDisconnect(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.ValueHelp` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:disconnect disconnect} event of this `sap.ui.mdc.ValueHelp`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.ValueHelp` itself.
     *
     * This event is fired when the `ValueHelp` element is disconnected from a control.
     *
     * **Note:** This event must only be handled by the control the `ValueHelp` element belongs to, not by the
     * application.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDisconnect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.ValueHelp` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:navigated navigated} event of this `sap.ui.mdc.ValueHelp`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.ValueHelp` itself.
     *
     * This event is fired after the user navigated, using the arrow keys, in the value help.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachNavigated(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: ValueHelp$NavigatedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.ValueHelp` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:navigated navigated} event of this `sap.ui.mdc.ValueHelp`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.ValueHelp` itself.
     *
     * This event is fired after the user navigated, using the arrow keys, in the value help.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachNavigated(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: ValueHelp$NavigatedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.ValueHelp` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:open open} event of this `sap.ui.mdc.ValueHelp`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.ValueHelp` itself.
     *
     * This event is fired as the value help opening is triggered.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpen(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: ValueHelp$OpenEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.ValueHelp` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:open open} event of this `sap.ui.mdc.ValueHelp`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.ValueHelp` itself.
     *
     * This event is fired as the value help opening is triggered.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: ValueHelp$OpenEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.ValueHelp` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:opened opened} event of this `sap.ui.mdc.ValueHelp`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.ValueHelp` itself.
     *
     * This event is fired as the value help is fully open.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpened(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: ValueHelp$OpenedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.ValueHelp` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:opened opened} event of this `sap.ui.mdc.ValueHelp`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.ValueHelp` itself.
     *
     * This event is fired as the value help is fully open.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpened(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: ValueHelp$OpenedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.ValueHelp` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.mdc.ValueHelp`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.ValueHelp` itself.
     *
     * This event is fired when a value is selected in the value help.
     *
     * **Note:** This event must only be handled by the control the `ValueHelp` element belongs to, not by the
     * application.
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
      fnFunction: (p1: ValueHelp$SelectEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.ValueHelp` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.mdc.ValueHelp`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.ValueHelp` itself.
     *
     * This event is fired when a value is selected in the value help.
     *
     * **Note:** This event must only be handled by the control the `ValueHelp` element belongs to, not by the
     * application.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: ValueHelp$SelectEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.ValueHelp` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:switchToValueHelp switchToValueHelp} event of
     * this `sap.ui.mdc.ValueHelp`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.ValueHelp` itself.
     *
     * This event is fired if the user wants to switch from typeahead to value help.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSwitchToValueHelp(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.ValueHelp` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:switchToValueHelp switchToValueHelp} event of
     * this `sap.ui.mdc.ValueHelp`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.ValueHelp` itself.
     *
     * This event is fired if the user wants to switch from typeahead to value help.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSwitchToValueHelp(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.ValueHelp` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:typeaheadSuggested typeaheadSuggested} event
     * of this `sap.ui.mdc.ValueHelp`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.ValueHelp` itself.
     *
     * This event is fired after a suggested item has been found for a type-ahead.
     *
     * @since 1.120.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachTypeaheadSuggested(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: ValueHelp$TypeaheadSuggestedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.ValueHelp` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:typeaheadSuggested typeaheadSuggested} event
     * of this `sap.ui.mdc.ValueHelp`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.ValueHelp` itself.
     *
     * This event is fired after a suggested item has been found for a type-ahead.
     *
     * @since 1.120.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachTypeaheadSuggested(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: ValueHelp$TypeaheadSuggestedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.ValueHelp` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys the dialog in the aggregation {@link #getDialog dialog}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyDialog(): this;
    /**
     * Destroys the typeahead in the aggregation {@link #getTypeahead typeahead}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTypeahead(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:closed closed} event of this `sap.ui.mdc.ValueHelp`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClosed(
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
     * Detaches event handler `fnFunction` from the {@link #event:disconnect disconnect} event of this `sap.ui.mdc.ValueHelp`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachDisconnect(
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
     * Detaches event handler `fnFunction` from the {@link #event:navigated navigated} event of this `sap.ui.mdc.ValueHelp`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachNavigated(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: ValueHelp$NavigatedEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:open open} event of this `sap.ui.mdc.ValueHelp`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachOpen(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: ValueHelp$OpenEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:opened opened} event of this `sap.ui.mdc.ValueHelp`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachOpened(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: ValueHelp$OpenedEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.mdc.ValueHelp`.
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
      fnFunction: (p1: ValueHelp$SelectEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:switchToValueHelp switchToValueHelp} event
     * of this `sap.ui.mdc.ValueHelp`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSwitchToValueHelp(
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
     * Detaches event handler `fnFunction` from the {@link #event:typeaheadSuggested typeaheadSuggested} event
     * of this `sap.ui.mdc.ValueHelp`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @since 1.120.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachTypeaheadSuggested(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: ValueHelp$TypeaheadSuggestedEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Fires event {@link #event:closed closed} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireClosed(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:disconnect disconnect} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireDisconnect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:navigated navigated} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireNavigated(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: ValueHelp$NavigatedEventParameters
    ): this;
    /**
     * Fires event {@link #event:open open} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireOpen(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: ValueHelp$OpenEventParameters
    ): this;
    /**
     * Fires event {@link #event:opened opened} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireOpened(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: ValueHelp$OpenedEventParameters
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
      mParameters?: ValueHelp$SelectEventParameters
    ): this;
    /**
     * Fires event {@link #event:switchToValueHelp switchToValueHelp} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSwitchToValueHelp(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:typeaheadSuggested typeaheadSuggested} to attached listeners.
     *
     * @since 1.120.0
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireTypeaheadSuggested(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: ValueHelp$TypeaheadSuggestedEventParameters
    ): this;
    /**
     * Gets current value of property {@link #getConditions conditions}.
     *
     * The conditions of the selected items.
     *
     * **Note:** This property must only be set by the control the `ValueHelp` element belongs to, not by the
     * application.
     *
     * **Note:** A condition must have the structure of {@link sap.ui.mdc.condition.ConditionObject ConditionObject}.
     *
     * Default value is `[]`.
     *
     *
     * @returns Value of property `conditions`
     */
    getConditions(): object[];
    /**
     * Gets current value of property {@link #getDelegate delegate}.
     *
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module. The used delegate module must inherit from {@link module:sap/ui/mdc/ValueHelpDelegate ValueHelpDelegate }
     *
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/ValueHelpDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * Default value is `...see text or source`.
     *
     *
     * @returns Value of property `delegate`
     */
    getDelegate(): object;
    /**
     * Gets content of aggregation {@link #getDialog dialog}.
     *
     * Container that is used and opened if the value help icon of the input field is pressed.
     */
    getDialog(): /* was: sap.ui.mdc.valuehelp.IDialogContainer */ any;
    /**
     * Gets current value of property {@link #getFilterValue filterValue}.
     *
     * The value by which the help is filtered. Here the field provides the typed value to allow the value help
     * to filter for it.
     *
     * **Note:** This only takes effect if the `ValueHelp` elements content supports filtering.
     *
     * **Note:** This property must only be set by the control the `ValueHelp` element belongs to, not by the
     * application.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Value of property `filterValue`
     */
    getFilterValue(): string;
    /**
     * Gets content of aggregation {@link #getTypeahead typeahead}.
     *
     * Container that is used and opened in typeahead
     */
    getTypeahead(): /* was: sap.ui.mdc.valuehelp.ITypeaheadContainer */ any;
    /**
     * Gets current value of property {@link #getValidateInput validateInput}.
     *
     * If this property is set, the user input of the corresponding field is validated against the value help.
     * If no entry is found for the user input, an error is shown on the field.
     *
     * If this property is not set, the user input is still checked against the value help. But if no entry
     * is found, the user input is set to the field if the used data type allows this. (A type parsing error
     * is shown if the user input adheres to the requirements of the used data type.)
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `validateInput`
     */
    getValidateInput(): boolean;
    /**
     * Sets a new value for property {@link #getConditions conditions}.
     *
     * The conditions of the selected items.
     *
     * **Note:** This property must only be set by the control the `ValueHelp` element belongs to, not by the
     * application.
     *
     * **Note:** A condition must have the structure of {@link sap.ui.mdc.condition.ConditionObject ConditionObject}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `[]`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setConditions(
      /**
       * New value for property `conditions`
       */
      sConditions?: object[]
    ): this;
    /**
     * Sets a new value for property {@link #getDelegate delegate}.
     *
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module. The used delegate module must inherit from {@link module:sap/ui/mdc/ValueHelpDelegate ValueHelpDelegate }
     *
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/ValueHelpDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `...see text or source`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDelegate(
      /**
       * New value for property `delegate`
       */
      oDelegate?: object
    ): this;
    /**
     * Sets the aggregated {@link #getDialog dialog}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDialog(
      /**
       * The dialog to set
       */
      oDialog: /* was: sap.ui.mdc.valuehelp.IDialogContainer */ any
    ): this;
    /**
     * Sets a new value for property {@link #getFilterValue filterValue}.
     *
     * The value by which the help is filtered. Here the field provides the typed value to allow the value help
     * to filter for it.
     *
     * **Note:** This only takes effect if the `ValueHelp` elements content supports filtering.
     *
     * **Note:** This property must only be set by the control the `ValueHelp` element belongs to, not by the
     * application.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFilterValue(
      /**
       * New value for property `filterValue`
       */
      sFilterValue?: string
    ): this;
    /**
     * Sets the aggregated {@link #getTypeahead typeahead}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTypeahead(
      /**
       * The typeahead to set
       */
      oTypeahead: /* was: sap.ui.mdc.valuehelp.ITypeaheadContainer */ any
    ): this;
    /**
     * Sets a new value for property {@link #getValidateInput validateInput}.
     *
     * If this property is set, the user input of the corresponding field is validated against the value help.
     * If no entry is found for the user input, an error is shown on the field.
     *
     * If this property is not set, the user input is still checked against the value help. But if no entry
     * is found, the user input is set to the field if the used data type allows this. (A type parsing error
     * is shown if the user input adheres to the requirements of the used data type.)
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setValidateInput(
      /**
       * New value for property `validateInput`
       */
      bValidateInput?: boolean
    ): this;
  }
  /**
   * Configuration object type to determine a `ValueHelpItem` for a given value.
   */
  export type ItemForValueConfiguration = {
    /**
     * Value as entered by user
     */
    value: any;
    /**
     * Value parsed by type of key to match the data type of the key
     */
    parsedValue?: any;
    /**
     * Value parsed by type of description to match the data type of the description
     */
    parsedDescription?: any;
    /**
     * Contextual information provided by condition `payload` or `inParameters`/`outParameters`. This is only
     * filled if the description needs to be determined for an existing condition.
     */
    context?: {
      /**
       * In parameters of the current condition (`inParameters` are not used any longer, but it might be filled
       * in older conditions stored in variants.)
       */
      inParameter?: object;
      /**
       * Out parameters of the current condition (`outParameters` are not used any longer, but it might be filled
       * in older conditions stored in variants.)
       */
      ouParameter?: object;
      /**
       * Payload of the current condition
       */
      payload?: object;
    };
    /**
     * `BindingContext` of the checked field. Inside a table, the `ValueHelp` element might be connected to
     * a different row.
     */
    bindingContext?: Context;
    /**
     * If set, the value help checks only if there is an item with the given key. This is set to `false` if
     * the value cannot be a valid key because of type validation.
     */
    checkKey: boolean;
    /**
     * If set, the value help checks only if there is an item with the given description. This is set to `false`
     * if only the key is used in the field.
     */
    checkDescription: boolean;
    /**
     * If set, the check is done case-sensitively
     */
    caseSensitive?: boolean;
    /**
     * If set, only exact matches are requested and no suggestions
     */
    exactMatch?: boolean;
    /**
     * Instance of the calling control
     */
    control: Control;
  };

  /**
   * Describes the settings that can be provided to the ValueHelp constructor.
   */
  export interface $ValueHelpSettings extends $ElementSettings {
    /**
     * The conditions of the selected items.
     *
     * **Note:** This property must only be set by the control the `ValueHelp` element belongs to, not by the
     * application.
     *
     * **Note:** A condition must have the structure of {@link sap.ui.mdc.condition.ConditionObject ConditionObject}.
     */
    conditions?: object[] | PropertyBindingInfo | `{${string}}`;

    /**
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module. The used delegate module must inherit from {@link module:sap/ui/mdc/ValueHelpDelegate ValueHelpDelegate }
     *
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/ValueHelpDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     */
    delegate?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * The value by which the help is filtered. Here the field provides the typed value to allow the value help
     * to filter for it.
     *
     * **Note:** This only takes effect if the `ValueHelp` elements content supports filtering.
     *
     * **Note:** This property must only be set by the control the `ValueHelp` element belongs to, not by the
     * application.
     */
    filterValue?: string | PropertyBindingInfo;

    /**
     * If this property is set, the user input of the corresponding field is validated against the value help.
     * If no entry is found for the user input, an error is shown on the field.
     *
     * If this property is not set, the user input is still checked against the value help. But if no entry
     * is found, the user input is set to the field if the used data type allows this. (A type parsing error
     * is shown if the user input adheres to the requirements of the used data type.)
     */
    validateInput?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Container that is used and opened if the value help icon of the input field is pressed.
     */
    dialog?: /* was: sap.ui.mdc.valuehelp.IDialogContainer */ any;

    /**
     * Container that is used and opened in typeahead
     */
    typeahead?: /* was: sap.ui.mdc.valuehelp.ITypeaheadContainer */ any;

    /**
     * This event is fired when a value is selected in the value help.
     *
     * **Note:** This event must only be handled by the control the `ValueHelp` element belongs to, not by the
     * application.
     */
    select?: (oEvent: ValueHelp$SelectEvent) => void;

    /**
     * This event is fired when the `ValueHelp` element is disconnected from a control.
     *
     * **Note:** This event must only be handled by the control the `ValueHelp` element belongs to, not by the
     * application.
     */
    disconnect?: (oEvent: Event) => void;

    /**
     * This event is fired after the value help has been closed.
     */
    closed?: (oEvent: Event) => void;

    /**
     * This event is fired as the value help opening is triggered.
     */
    open?: (oEvent: ValueHelp$OpenEvent) => void;

    /**
     * This event is fired as the value help is fully open.
     */
    opened?: (oEvent: ValueHelp$OpenedEvent) => void;

    /**
     * This event is fired after the user navigated, using the arrow keys, in the value help.
     */
    navigated?: (oEvent: ValueHelp$NavigatedEvent) => void;

    /**
     * This event is fired if the user wants to switch from typeahead to value help.
     */
    switchToValueHelp?: (oEvent: Event) => void;

    /**
     * This event is fired after a suggested item has been found for a type-ahead.
     *
     * @since 1.120.0
     */
    typeaheadSuggested?: (oEvent: ValueHelp$TypeaheadSuggestedEvent) => void;
  }

  /**
   * Parameters of the ValueHelp#closed event.
   */
  export interface ValueHelp$ClosedEventParameters {}

  /**
   * Event object of the ValueHelp#closed event.
   */
  export type ValueHelp$ClosedEvent = Event<
    ValueHelp$ClosedEventParameters,
    ValueHelp
  >;

  /**
   * Parameters of the ValueHelp#disconnect event.
   */
  export interface ValueHelp$DisconnectEventParameters {}

  /**
   * Event object of the ValueHelp#disconnect event.
   */
  export type ValueHelp$DisconnectEvent = Event<
    ValueHelp$DisconnectEventParameters,
    ValueHelp
  >;

  /**
   * Parameters of the ValueHelp#navigated event.
   */
  export interface ValueHelp$NavigatedEventParameters {
    /**
     * True if the focus should be set back to the field.
     */
    leaveFocus?: boolean;

    /**
     * Navigated condition.
     *
     * **Note:** A condition must have the structure of {@link sap.ui.mdc.condition.ConditionObject ConditionObject}.
     */
    condition?: object;

    /**
     * ID of the navigated item. (This is needed to set the corresponding aria-attribute)
     */
    itemId?: string;
  }

  /**
   * Event object of the ValueHelp#navigated event.
   */
  export type ValueHelp$NavigatedEvent = Event<
    ValueHelp$NavigatedEventParameters,
    ValueHelp
  >;

  /**
   * Parameters of the ValueHelp#open event.
   */
  export interface ValueHelp$OpenEventParameters {
    /**
     * The container which will be opened
     */
    container?: Container;
  }

  /**
   * Event object of the ValueHelp#open event.
   */
  export type ValueHelp$OpenEvent = Event<
    ValueHelp$OpenEventParameters,
    ValueHelp
  >;

  /**
   * Parameters of the ValueHelp#opened event.
   */
  export interface ValueHelp$OpenedEventParameters {
    /**
     * The container which was opened
     */
    container?: Container;

    /**
     * ID of the initially selected item
     */
    itemId?: string;
  }

  /**
   * Event object of the ValueHelp#opened event.
   */
  export type ValueHelp$OpenedEvent = Event<
    ValueHelp$OpenedEventParameters,
    ValueHelp
  >;

  /**
   * Parameters of the ValueHelp#select event.
   */
  export interface ValueHelp$SelectEventParameters {
    /**
     * The selected `conditions`
     *
     * **Note:** A condition has the structure of {@link sap.ui.mdc.condition.ConditionObject ConditionObject}.
     */
    conditions?: object[];

    /**
     * If set, the selected `conditions` are added by the listening control, otherwise they replace the existing
     * ones
     */
    add?: boolean;

    /**
     * Indicator if the value help is closed while selection
     */
    close?: boolean;
  }

  /**
   * Event object of the ValueHelp#select event.
   */
  export type ValueHelp$SelectEvent = Event<
    ValueHelp$SelectEventParameters,
    ValueHelp
  >;

  /**
   * Parameters of the ValueHelp#switchToValueHelp event.
   */
  export interface ValueHelp$SwitchToValueHelpEventParameters {}

  /**
   * Event object of the ValueHelp#switchToValueHelp event.
   */
  export type ValueHelp$SwitchToValueHelpEvent = Event<
    ValueHelp$SwitchToValueHelpEventParameters,
    ValueHelp
  >;

  /**
   * Parameters of the ValueHelp#typeaheadSuggested event.
   */
  export interface ValueHelp$TypeaheadSuggestedEventParameters {
    /**
     * Suggested condition
     *
     * **Note:** A condition must have the structure of {@link sap.ui.mdc.condition.ConditionObject ConditionObject}.
     */
    condition?: object;

    /**
     * Used filter value (as the event might fire asynchronously, and the current user input might have changed.)
     */
    filterValue?: string;

    /**
     * ID of the suggested item (This is needed to set the corresponding ARIA attribute)
     */
    itemId?: string;

    /**
     * If `true` the filtering was executed case sensitive
     */
    caseSensitive?: boolean;
  }

  /**
   * Event object of the ValueHelp#typeaheadSuggested event.
   */
  export type ValueHelp$TypeaheadSuggestedEvent = Event<
    ValueHelp$TypeaheadSuggestedEventParameters,
    ValueHelp
  >;
}

declare module "sap/ui/mdc/valuehelp/base/Container" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import Content from "sap/ui/mdc/valuehelp/base/Content";

  import Event from "sap/ui/base/Event";

  import Control from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import UIArea from "sap/ui/core/UIArea";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * Container for the {@link sap.ui.mdc.ValueHelp ValueHelp} element.
   *
   * @since 1.95.0
   */
  export default abstract class Container extends UI5Element {
    /**
     * Constructor for a new `Container`.
     *
     * This is the basis for various value help containers. It cannot be used directly.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new element
       */
      mSettings?: $ContainerSettings
    );
    /**
     * Constructor for a new `Container`.
     *
     * This is the basis for various value help containers. It cannot be used directly.
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
      mSettings?: $ContainerSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.valuehelp.base.Container with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Container>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.valuehelp.base.Container.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some content to the aggregation {@link #getContent content}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addContent(
      /**
       * The content to add; if empty, nothing is inserted
       */
      oContent: Content
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Container` itself.
     *
     * This event is fired if the change is cancelled.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCancel(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Container`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Container` itself.
     *
     * This event is fired if the change is cancelled.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCancel(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Container`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Container` itself.
     *
     * This event is fired if the value help is closed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClosed(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Container`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Container` itself.
     *
     * This event is fired if the value help is closed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClosed(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Container`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:confirm confirm} event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Container` itself.
     *
     * This event is fired if a change of the value help is confirmed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachConfirm(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Container$ConfirmEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Container`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:confirm confirm} event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Container` itself.
     *
     * This event is fired if a change of the value help is confirmed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachConfirm(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Container$ConfirmEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Container`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:navigated navigated} event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Container` itself.
     *
     * This event is fired if a navigation has been executed in the content of the container.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachNavigated(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Container$NavigatedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Container`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:navigated navigated} event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Container` itself.
     *
     * This event is fired if a navigation has been executed in the content of the container.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachNavigated(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Container$NavigatedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Container`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:opened opened} event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Container` itself.
     *
     * This event is fired if the value help is opened.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpened(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Container$OpenedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Container`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:opened opened} event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Container` itself.
     *
     * This event is fired if the value help is opened.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpened(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Container$OpenedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Container`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:requestDelegateContent requestDelegateContent }
     * event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Container` itself.
     *
     * This event is fired if the container requests the delegate content.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRequestDelegateContent(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Container$RequestDelegateContentEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Container`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:requestDelegateContent requestDelegateContent }
     * event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Container` itself.
     *
     * This event is fired if the container requests the delegate content.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRequestDelegateContent(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Container$RequestDelegateContentEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Container`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:requestSwitchToDialog requestSwitchToDialog }
     * event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Container` itself.
     *
     * This event is fired if the value help should switch to dialog mode.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRequestSwitchToDialog(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Container`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:requestSwitchToDialog requestSwitchToDialog }
     * event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Container` itself.
     *
     * This event is fired if the value help should switch to dialog mode.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRequestSwitchToDialog(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Container`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Container` itself.
     *
     * This event is fired if the selected condition has changed.
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
      fnFunction: (p1: Container$SelectEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Container`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Container` itself.
     *
     * This event is fired if the selected condition has changed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Container$SelectEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Container`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:typeaheadSuggested typeaheadSuggested} event
     * of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Container` itself.
     *
     * This event is fired after a suggested item has been found for a type-ahead.
     *
     * @since 1.120.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachTypeaheadSuggested(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Container$TypeaheadSuggestedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Container`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:typeaheadSuggested typeaheadSuggested} event
     * of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Container` itself.
     *
     * This event is fired after a suggested item has been found for a type-ahead.
     *
     * @since 1.120.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachTypeaheadSuggested(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Container$TypeaheadSuggestedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Container`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Binds the content to the container.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    bindContentToContainer(
      /**
       * content
       */
      oContent: Content
    ): void;
    /**
     * Closes the container control or element.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    closeContainer(): void;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:cancel cancel} event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachCancel(
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
     * Detaches event handler `fnFunction` from the {@link #event:closed closed} event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClosed(
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
     * Detaches event handler `fnFunction` from the {@link #event:confirm confirm} event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachConfirm(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Container$ConfirmEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:navigated navigated} event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachNavigated(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Container$NavigatedEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:opened opened} event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachOpened(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Container$OpenedEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:requestDelegateContent requestDelegateContent }
     * event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachRequestDelegateContent(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Container$RequestDelegateContentEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:requestSwitchToDialog requestSwitchToDialog }
     * event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachRequestSwitchToDialog(
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
     * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.mdc.valuehelp.base.Container`.
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
      fnFunction: (p1: Container$SelectEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:typeaheadSuggested typeaheadSuggested} event
     * of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @since 1.120.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachTypeaheadSuggested(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Container$TypeaheadSuggestedEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Fires event {@link #event:cancel cancel} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireCancel(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:closed closed} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireClosed(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:confirm confirm} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireConfirm(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Container$ConfirmEventParameters
    ): this;
    /**
     * Fires event {@link #event:navigated navigated} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireNavigated(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Container$NavigatedEventParameters
    ): this;
    /**
     * Fires event {@link #event:opened opened} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireOpened(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Container$OpenedEventParameters
    ): this;
    /**
     * Fires event {@link #event:requestDelegateContent requestDelegateContent} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireRequestDelegateContent(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Container$RequestDelegateContentEventParameters
    ): this;
    /**
     * Fires event {@link #event:requestSwitchToDialog requestSwitchToDialog} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireRequestSwitchToDialog(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
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
      mParameters?: Container$SelectEventParameters
    ): this;
    /**
     * Fires event {@link #event:typeaheadSuggested typeaheadSuggested} to attached listeners.
     *
     * @since 1.120.0
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireTypeaheadSuggested(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Container$TypeaheadSuggestedEventParameters
    ): this;
    /**
     * Gets the configuration for a specific content.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns configuration
     */
    getContainerConfig(
      /**
       * content
       */
      oContent: Content
    ): object;
    /**
     * Returns the container control or element that is opened (for example, a popover or dialog).
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    getContainerControl(): void;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Content of the container. This aggregation holds the actual controls enabling the user to select items
     * or create conditions (for example, tables or condition panels).
     */
    getContent(): Content[];
    /**
     * Returns control connected to value help.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns connected control
     */
    getControl(): Control;
    /**
     * Gets current value of property {@link #getLocalFilterValue localFilterValue}.
     *
     * This property may be used by `FilterableListContents` to share basic search states in collective search
     * scenarios.
     *
     *
     * @returns Value of property `localFilterValue`
     */
    getLocalFilterValue(): string;
    /**
     * Returns the maximum allowed number of conditions, -1 if no limit is set.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns maximum allowed number of conditions
     */
    getMaxConditions(): int;
    /**
     * Returns the `Promise` for content creation.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns `Promise` for delegate content
     */
    getRetrieveDelegateContentPromise(): Promise<any>;
    /**
     * Returns the currently used content.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns currently used content
     */
    getSelectedContent(): Content;
    /**
     * Gets current value of property {@link #getTitle title}.
     *
     * Title text that appears in the dialog or tab header.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Value of property `title`
     */
    getTitle(): string;
    /**
     * Returns the `UIArea` of the content.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns The UI area of the content or `null`
     */
    getUIAreaForContent(): UIArea | null;
    /**
     * Handles the `cancelled` event of the content.
     *
     * Here the {@link #event:cancel cancel} event needs to be fired.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    handleCanceled(
      /**
       * event
       */
      oEvent: Event
    ): void;
    /**
     * Handles the `closed` event of the container control or element.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    handleClosed(
      /**
       * event
       */
      oEvent: Event
    ): void;
    /**
     * Handles the `confirmed` event of the content.
     *
     * Here the {@link #event:confirm confirm} event needs to be fired.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    handleConfirmed(
      /**
       * event
       */
      oEvent: Event
    ): void;
    /**
     * Handles the `navigated` event of the content.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    handleNavigated(
      /**
       * event
       */
      oEvent: Event
    ): void;
    /**
     * Handles the `opened` event of the container control or element.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    handleOpened(
      /**
       * event
       */
      oEvent: Event
    ): void;
    /**
     * Handles the `requestSwitchToDialog` event of the content.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    handleRequestSwitchToDialog(
      /**
       * event
       */
      oEvent: Event
    ): void;
    /**
     * Handles the `select` event of the content.
     *
     * Here the {@link #event:select select} event needs to be fired.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    handleSelect(
      /**
       * event
       */
      oEvent: Event
    ): void;
    /**
     * Handles the `typeaheadSuggested` event of the content.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    handleTypeaheadSuggested(
      /**
       * event
       */
      oEvent: Event
    ): void;
    /**
     * Checks for the provided `sap.ui.mdc.valuehelp.base.Content` in the aggregation {@link #getContent content}.
     * and returns its index if found or -1 otherwise.
     *
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfContent(
      /**
       * The content whose index is looked for
       */
      oContent: Content
    ): int;
    /**
     * Inserts a content into the aggregation {@link #getContent content}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertContent(
      /**
       * The content to insert; if empty, nothing is inserted
       */
      oContent: Content,
      /**
       * The `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
       * is inserted at position 0; for a value greater than the current size of the aggregation, the content
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Returns if the value help is used for single selection.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns `true` id single selection
     */
    isSingleSelect(): boolean;
    /**
     * Triggers navigation in the content of the container.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    navigateInContent(
      /**
       * Number of steps for navigation (e.g. 1 means next item, -1 means previous item)
       */
      iStep: int
    ): void;
    /**
     * Observes property and aggregation changes.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    observeChanges(
      /**
       * Change
       */
      oChanges: object
    ): void;
    /**
     * Opens the container control or element.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    openContainer(
      /**
       * container
       */
      oContainer: UI5Element,
      /**
       * if set, container is opened for typeahead
       */
      bTypeahead: boolean
    ): void;
    /**
     * Places the content into the container control or element.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns container
     */
    placeContent(
      /**
       * container
       */
      oContainer: UI5Element
    ): UI5Element;
    /**
     * Removes all the controls from the aggregation {@link #getContent content}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllContent(): Content[];
    /**
     * Removes a content from the aggregation {@link #getContent content}.
     *
     *
     * @returns The removed content or `null`
     */
    removeContent(
      /**
       * The content to remove or its index or id
       */
      vContent: int | string | Content
    ): Content | null;
    /**
     * Sets a new value for property {@link #getLocalFilterValue localFilterValue}.
     *
     * This property may be used by `FilterableListContents` to share basic search states in collective search
     * scenarios.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLocalFilterValue(
      /**
       * New value for property `localFilterValue`
       */
      sLocalFilterValue: string
    ): this;
    /**
     * Sets a new value for property {@link #getTitle title}.
     *
     * Title text that appears in the dialog or tab header.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
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
     * Unbinds the content from the container.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    unbindContentFromContainer(
      /**
       * content
       */
      oContent: Content
    ): void;
  }
  /**
   * Describes the settings that can be provided to the Container constructor.
   */
  export interface $ContainerSettings extends $ElementSettings {
    /**
     * Title text that appears in the dialog or tab header.
     */
    title?: string | PropertyBindingInfo;

    /**
     * This property may be used by `FilterableListContents` to share basic search states in collective search
     * scenarios.
     */
    localFilterValue?: string | PropertyBindingInfo;

    /**
     * Content of the container. This aggregation holds the actual controls enabling the user to select items
     * or create conditions (for example, tables or condition panels).
     */
    content?: Content[] | Content | AggregationBindingInfo | `{${string}}`;

    /**
     * This event is fired if the selected condition has changed.
     */
    select?: (oEvent: Container$SelectEvent) => void;

    /**
     * This event is fired if a change of the value help is confirmed.
     */
    confirm?: (oEvent: Container$ConfirmEvent) => void;

    /**
     * This event is fired if the value help is opened.
     */
    opened?: (oEvent: Container$OpenedEvent) => void;

    /**
     * This event is fired if the value help is closed.
     */
    closed?: (oEvent: Event) => void;

    /**
     * This event is fired if the change is cancelled.
     */
    cancel?: (oEvent: Event) => void;

    /**
     * This event is fired if the container requests the delegate content.
     */
    requestDelegateContent?: (
      oEvent: Container$RequestDelegateContentEvent
    ) => void;

    /**
     * This event is fired if the value help should switch to dialog mode.
     */
    requestSwitchToDialog?: (oEvent: Event) => void;

    /**
     * This event is fired if a navigation has been executed in the content of the container.
     */
    navigated?: (oEvent: Container$NavigatedEvent) => void;

    /**
     * This event is fired after a suggested item has been found for a type-ahead.
     *
     * @since 1.120.0
     */
    typeaheadSuggested?: (oEvent: Container$TypeaheadSuggestedEvent) => void;
  }

  /**
   * Parameters of the Container#cancel event.
   */
  export interface Container$CancelEventParameters {}

  /**
   * Event object of the Container#cancel event.
   */
  export type Container$CancelEvent = Event<
    Container$CancelEventParameters,
    Container
  >;

  /**
   * Parameters of the Container#closed event.
   */
  export interface Container$ClosedEventParameters {}

  /**
   * Event object of the Container#closed event.
   */
  export type Container$ClosedEvent = Event<
    Container$ClosedEventParameters,
    Container
  >;

  /**
   * Parameters of the Container#confirm event.
   */
  export interface Container$ConfirmEventParameters {
    /**
     * `true` if the value help needs to be closed
     */
    close?: boolean;
  }

  /**
   * Event object of the Container#confirm event.
   */
  export type Container$ConfirmEvent = Event<
    Container$ConfirmEventParameters,
    Container
  >;

  /**
   * Parameters of the Container#navigated event.
   */
  export interface Container$NavigatedEventParameters {
    /**
     * `true` if the focus should be set back to the field.
     */
    leaveFocus?: boolean;

    /**
     * Navigated condition.
     *
     * **Note:** A condition must have the structure of {@link sap.ui.mdc.condition.ConditionObject ConditionObject}.
     */
    condition?: object;

    /**
     * ID of the navigated item. (This is needed to set the corresponding aria-attribute)
     */
    itemId?: string;
  }

  /**
   * Event object of the Container#navigated event.
   */
  export type Container$NavigatedEvent = Event<
    Container$NavigatedEventParameters,
    Container
  >;

  /**
   * Parameters of the Container#opened event.
   */
  export interface Container$OpenedEventParameters {
    /**
     * ID of the initially selected item
     */
    itemId?: string;
  }

  /**
   * Event object of the Container#opened event.
   */
  export type Container$OpenedEvent = Event<
    Container$OpenedEventParameters,
    Container
  >;

  /**
   * Parameters of the Container#requestDelegateContent event.
   */
  export interface Container$RequestDelegateContentEventParameters {
    /**
     * Content wrapper ID for which contents are requested
     */
    contentId?: string;
  }

  /**
   * Event object of the Container#requestDelegateContent event.
   */
  export type Container$RequestDelegateContentEvent = Event<
    Container$RequestDelegateContentEventParameters,
    Container
  >;

  /**
   * Parameters of the Container#requestSwitchToDialog event.
   */
  export interface Container$RequestSwitchToDialogEventParameters {}

  /**
   * Event object of the Container#requestSwitchToDialog event.
   */
  export type Container$RequestSwitchToDialogEvent = Event<
    Container$RequestSwitchToDialogEventParameters,
    Container
  >;

  /**
   * Parameters of the Container#select event.
   */
  export interface Container$SelectEventParameters {
    /**
     * Type of the selection change (add, remove)
     */
    type?: /* was: sap.ui.mdc.enums.ValueHelpSelectionType */ any;

    /**
     * Changed conditions
     *
     * **Note:** A condition must have the structure of {@link sap.ui.mdc.condition.ConditionObject ConditionObject}.
     */
    conditions?: object[];
  }

  /**
   * Event object of the Container#select event.
   */
  export type Container$SelectEvent = Event<
    Container$SelectEventParameters,
    Container
  >;

  /**
   * Parameters of the Container#typeaheadSuggested event.
   */
  export interface Container$TypeaheadSuggestedEventParameters {
    /**
     * Suggested condition
     *
     * **Note:** A condition must have the structure of {@link sap.ui.mdc.condition.ConditionObject ConditionObject}.
     */
    condition?: object;

    /**
     * Used filter value (as the event might fire asynchronously, and the current user input might have changed.)
     */
    filterValue?: string;

    /**
     * ID of the suggested item (This is needed to set the corresponding ARIA attribute)
     */
    itemId?: string;

    /**
     * If `true` the filtering was executed case sensitive
     */
    caseSensitive?: boolean;
  }

  /**
   * Event object of the Container#typeaheadSuggested event.
   */
  export type Container$TypeaheadSuggestedEvent = Event<
    Container$TypeaheadSuggestedEventParameters,
    Container
  >;
}

declare module "sap/ui/mdc/valuehelp/base/Content" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import Event from "sap/ui/base/Event";

  import { ConditionObject } from "sap/ui/mdc/condition/Condition";

  import Control from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import BaseDelegate from "sap/ui/mdc/BaseDelegate";

  import ValueHelp from "sap/ui/mdc/ValueHelp";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * Content for the {@link sap.ui.mdc.valuehelp.base.Container Container} element.
   *
   * @since 1.95.0
   */
  export default abstract class Content extends UI5Element {
    /**
     * Constructor for a new `Content`.
     *
     * This is the basis for various types of value help content. It cannot be used directly.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new element
       */
      mSettings?: $ContentSettings
    );
    /**
     * Constructor for a new `Content`.
     *
     * This is the basis for various types of value help content. It cannot be used directly.
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
      mSettings?: $ContentSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.valuehelp.base.Content with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Content>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.valuehelp.base.Content.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ui.mdc.valuehelp.base.Content`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Content` itself.
     *
     * This event is fired if the change is cancelled.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCancel(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Content` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ui.mdc.valuehelp.base.Content`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Content` itself.
     *
     * This event is fired if the change is cancelled.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCancel(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Content` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:confirm confirm} event of this `sap.ui.mdc.valuehelp.base.Content`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Content` itself.
     *
     * This event is fired if a change of the content is confirmed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachConfirm(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Content$ConfirmEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Content` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:confirm confirm} event of this `sap.ui.mdc.valuehelp.base.Content`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Content` itself.
     *
     * This event is fired if a change of the content is confirmed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachConfirm(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Content$ConfirmEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Content` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:navigated navigated} event of this `sap.ui.mdc.valuehelp.base.Content`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Content` itself.
     *
     * This event is fired if a navigation has been executed in the content.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachNavigated(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Content$NavigatedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Content` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:navigated navigated} event of this `sap.ui.mdc.valuehelp.base.Content`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Content` itself.
     *
     * This event is fired if a navigation has been executed in the content.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachNavigated(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Content$NavigatedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Content` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:requestSwitchToDialog requestSwitchToDialog }
     * event of this `sap.ui.mdc.valuehelp.base.Content`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Content` itself.
     *
     * This event is fired if the value help should switch to dialog mode.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRequestSwitchToDialog(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Content` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:requestSwitchToDialog requestSwitchToDialog }
     * event of this `sap.ui.mdc.valuehelp.base.Content`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Content` itself.
     *
     * This event is fired if the value help should switch to dialog mode.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRequestSwitchToDialog(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Content` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.mdc.valuehelp.base.Content`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Content` itself.
     *
     * This event is fired if the selected condition has changed.
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
      fnFunction: (p1: Content$SelectEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Content` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.mdc.valuehelp.base.Content`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Content` itself.
     *
     * This event is fired if the selected condition has changed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Content$SelectEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Content` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:typeaheadSuggested typeaheadSuggested} event
     * of this `sap.ui.mdc.valuehelp.base.Content`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Content` itself.
     *
     * This event is fired after a suggested item has been found for a type-ahead.
     *
     * @since 1.120.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachTypeaheadSuggested(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Content$TypeaheadSuggestedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Content` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:typeaheadSuggested typeaheadSuggested} event
     * of this `sap.ui.mdc.valuehelp.base.Content`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Content` itself.
     *
     * This event is fired after a suggested item has been found for a type-ahead.
     *
     * @since 1.120.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachTypeaheadSuggested(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Content$TypeaheadSuggestedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.base.Content` itself
       */
      oListener?: object
    ): this;
    /**
     * Provides access to the delegate initialization `Promise` of the value help.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns `Promise` reflecting the delegate initialization
     */
    awaitValueHelpDelegate(): Promise<any>;
    /**
     * Creates a condition based on the used operator.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns The new condition object with the maintained operator along with `sKey` and `sDescription` as
     * `aValues`
     */
    createCondition(
      /**
       * Value of the condition. For item conditions, this must be the key.
       */
      vValue: any,
      /**
       * Description of the operator
       */
      sDescription?: string,
      /**
       * Payload
       */
      oPayload?: object
    ): ConditionObject;
    /**
     * Destroys the displayContent in the aggregation {@link #getDisplayContent displayContent}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyDisplayContent(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:cancel cancel} event of this `sap.ui.mdc.valuehelp.base.Content`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachCancel(
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
     * Detaches event handler `fnFunction` from the {@link #event:confirm confirm} event of this `sap.ui.mdc.valuehelp.base.Content`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachConfirm(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Content$ConfirmEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:navigated navigated} event of this `sap.ui.mdc.valuehelp.base.Content`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachNavigated(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Content$NavigatedEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:requestSwitchToDialog requestSwitchToDialog }
     * event of this `sap.ui.mdc.valuehelp.base.Content`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachRequestSwitchToDialog(
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
     * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.mdc.valuehelp.base.Content`.
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
      fnFunction: (p1: Content$SelectEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:typeaheadSuggested typeaheadSuggested} event
     * of this `sap.ui.mdc.valuehelp.base.Content`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @since 1.120.0
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachTypeaheadSuggested(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Content$TypeaheadSuggestedEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Fires event {@link #event:cancel cancel} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireCancel(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:confirm confirm} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireConfirm(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Content$ConfirmEventParameters
    ): this;
    /**
     * Fires event {@link #event:navigated navigated} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireNavigated(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Content$NavigatedEventParameters
    ): this;
    /**
     * Fires event {@link #event:requestSwitchToDialog requestSwitchToDialog} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireRequestSwitchToDialog(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
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
      mParameters?: Content$SelectEventParameters
    ): this;
    /**
     * Fires event {@link #event:typeaheadSuggested typeaheadSuggested} to attached listeners.
     *
     * @since 1.120.0
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireTypeaheadSuggested(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Content$TypeaheadSuggestedEventParameters
    ): this;
    /**
     * Gets current value of property {@link #getConditions conditions}.
     *
     * Conditions of the value help.
     *
     * **Note:** This property must not be set from outside, it must only be used by the corresponding container.
     *
     * Default value is `[]`.
     *
     *
     * @returns Value of property `conditions`
     */
    getConditions(): object[];
    /**
     * Gets current value of property {@link #getConfig config}.
     *
     * Internal configuration.
     *
     * **Note:** This property must not be set from outside, it must only be used by the corresponding container.
     *
     * Default value is `{}`.
     *
     *
     * @returns Value of property `config`
     */
    getConfig(): object;
    /**
     * Returns control connected to value help.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Connected control
     */
    getControl(): Control;
    /**
     * Gets content of aggregation {@link #getDisplayContent displayContent}.
     *
     * Content control that is put inside the parent container
     *
     * **Note:** This aggregation must not be set from outside, it must only be used by the corresponding container.
     */
    getDisplayContent(): Control;
    /**
     * Gets current value of property {@link #getFilterValue filterValue}.
     *
     * Value for filtering ($search).
     *
     * **Note:** This property must not be set from outside, it must only be used by the corresponding container.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Value of property `filterValue`
     */
    getFilterValue(): string;
    /**
     * Returns the maximum allowed number of conditions, -1 if no limit is set.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns maximum allowed number of conditions
     */
    getMaxConditions(): int;
    /**
     * Gets current value of property {@link #getShortTitle shortTitle}.
     *
     * Title text that appears in the dialog header.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Value of property `shortTitle`
     */
    getShortTitle(): string;
    /**
     * Gets current value of property {@link #getTitle title}.
     *
     * Title text that appears in the tab header.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Value of property `title`
     */
    getTitle(): string;
    /**
     * Gets current value of property {@link #getTokenizerTitle tokenizerTitle}.
     *
     * Title text that appears in the dialog tokenizer panel if only one content exists.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Value of property `tokenizerTitle`
     */
    getTokenizerTitle(): string;
    /**
     * Returns the used `ValueHelpDelegate`.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns `Delegate` module
     */
    getValueHelpDelegate(): BaseDelegate;
    /**
     * Determines the `ValueHelp` instance.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns The `ValueHelp` instance
     */
    getValueHelpInstance(): ValueHelp;
    /**
     * Gets current value of property {@link #getVisible visible}.
     *
     * Hide content temporary.
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `visible`
     */
    getVisible(): boolean;
    /**
     * Called if the `conditions` property changed.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    handleConditionsUpdate(
      /**
       * Change
       */
      oChanges: object
    ): void;
    /**
     * Called if the `filterValue` property changed.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    handleFilterValueUpdate(
      /**
       * Change
       */
      oChanges: object
    ): void;
    /**
     * Checks if the parent container is open.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns `true` if open
     */
    isContainerOpen(): boolean;
    /**
     * Checks if the parent container is opening.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns `true` if opening
     */
    isContainerOpening(): boolean;
    /**
     * Returns if the value help is used for single selection.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns `true` if single selection
     */
    isSingleSelect(): boolean;
    /**
     * Determines if the container of the content is used as `typeAhead` inside the value help.
     *
     * **Note:** This function is used by the content and must not be used from outside.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns `true` if used as `typeahead`
     */
    isTypeahead(): boolean;
    /**
     * Determines if delegate of the value help has been initialized.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns `true` if delegate has been initialized
     */
    isValueHelpDelegateInitialized(): boolean;
    /**
     * Observes property and aggregation changes.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    observeChanges(
      /**
       * Change
       */
      oChanges: object
    ): void;
    /**
     * Called if `ValueHelp` connection to a control changed.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    onConnectionChange(): void;
    /**
     * Performs logic needed if the container closes.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    onContainerClose(): void;
    /**
     * Performs logic needed if the container opens.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    onContainerOpen(): void;
    /**
     * Determines if the the content needs to provide a scrolling mechanism like a {@link sap.m.ScrollContainer ScrollContainer}.
     *
     * **Note:** This function is used by the content and must not be used from outside.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns `true` if a scrolling mechanism is needed
     */
    provideScrolling(): boolean;
    /**
     * Sets a new value for property {@link #getConditions conditions}.
     *
     * Conditions of the value help.
     *
     * **Note:** This property must not be set from outside, it must only be used by the corresponding container.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `[]`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setConditions(
      /**
       * New value for property `conditions`
       */
      sConditions?: object[]
    ): this;
    /**
     * Sets a new value for property {@link #getConfig config}.
     *
     * Internal configuration.
     *
     * **Note:** This property must not be set from outside, it must only be used by the corresponding container.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `{}`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setConfig(
      /**
       * New value for property `config`
       */
      oConfig?: object
    ): this;
    /**
     * Sets the aggregated {@link #getDisplayContent displayContent}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDisplayContent(
      /**
       * The displayContent to set
       */
      oDisplayContent: Control
    ): this;
    /**
     * Sets a new value for property {@link #getFilterValue filterValue}.
     *
     * Value for filtering ($search).
     *
     * **Note:** This property must not be set from outside, it must only be used by the corresponding container.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFilterValue(
      /**
       * New value for property `filterValue`
       */
      sFilterValue?: string
    ): this;
    /**
     * Sets a new value for property {@link #getShortTitle shortTitle}.
     *
     * Title text that appears in the dialog header.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShortTitle(
      /**
       * New value for property `shortTitle`
       */
      sShortTitle?: string
    ): this;
    /**
     * Sets a new value for property {@link #getTitle title}.
     *
     * Title text that appears in the tab header.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
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
     * Sets a new value for property {@link #getTokenizerTitle tokenizerTitle}.
     *
     * Title text that appears in the dialog tokenizer panel if only one content exists.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTokenizerTitle(
      /**
       * New value for property `tokenizerTitle`
       */
      sTokenizerTitle?: string
    ): this;
    /**
     * Sets a new value for property {@link #getVisible visible}.
     *
     * Hide content temporary.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
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
   * Describes the settings that can be provided to the Content constructor.
   */
  export interface $ContentSettings extends $ElementSettings {
    /**
     * Title text that appears in the tab header.
     */
    title?: string | PropertyBindingInfo;

    /**
     * Title text that appears in the dialog header.
     */
    shortTitle?: string | PropertyBindingInfo;

    /**
     * Title text that appears in the dialog tokenizer panel if only one content exists.
     */
    tokenizerTitle?: string | PropertyBindingInfo;

    /**
     * Conditions of the value help.
     *
     * **Note:** This property must not be set from outside, it must only be used by the corresponding container.
     */
    conditions?: object[] | PropertyBindingInfo | `{${string}}`;

    /**
     * Value for filtering ($search).
     *
     * **Note:** This property must not be set from outside, it must only be used by the corresponding container.
     */
    filterValue?: string | PropertyBindingInfo;

    /**
     * Internal configuration.
     *
     * **Note:** This property must not be set from outside, it must only be used by the corresponding container.
     */
    config?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Hide content temporary.
     */
    visible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Content control that is put inside the parent container
     *
     * **Note:** This aggregation must not be set from outside, it must only be used by the corresponding container.
     */
    displayContent?: Control;

    /**
     * This event is fired if the selected condition has changed.
     */
    select?: (oEvent: Content$SelectEvent) => void;

    /**
     * This event is fired if a change of the content is confirmed.
     */
    confirm?: (oEvent: Content$ConfirmEvent) => void;

    /**
     * This event is fired if the change is cancelled.
     */
    cancel?: (oEvent: Event) => void;

    /**
     * This event is fired if the value help should switch to dialog mode.
     */
    requestSwitchToDialog?: (oEvent: Event) => void;

    /**
     * This event is fired if a navigation has been executed in the content.
     */
    navigated?: (oEvent: Content$NavigatedEvent) => void;

    /**
     * This event is fired after a suggested item has been found for a type-ahead.
     *
     * @since 1.120.0
     */
    typeaheadSuggested?: (oEvent: Content$TypeaheadSuggestedEvent) => void;
  }

  /**
   * Parameters of the Content#cancel event.
   */
  export interface Content$CancelEventParameters {}

  /**
   * Event object of the Content#cancel event.
   */
  export type Content$CancelEvent = Event<
    Content$CancelEventParameters,
    Content
  >;

  /**
   * Parameters of the Content#confirm event.
   */
  export interface Content$ConfirmEventParameters {
    /**
     * `true` if the value help needs to be closed
     */
    close?: boolean;
  }

  /**
   * Event object of the Content#confirm event.
   */
  export type Content$ConfirmEvent = Event<
    Content$ConfirmEventParameters,
    Content
  >;

  /**
   * Parameters of the Content#navigated event.
   */
  export interface Content$NavigatedEventParameters {
    /**
     * `true` if the focus should be set back to the field.
     */
    leaveFocus?: boolean;

    /**
     * Navigated condition.
     *
     * **Note:** A condition must have the structure of {@link sap.ui.mdc.condition.ConditionObject ConditionObject}.
     */
    condition?: object;

    /**
     * ID of the navigated item. (This is needed to set the corresponding aria-attribute)
     */
    itemId?: string;
  }

  /**
   * Event object of the Content#navigated event.
   */
  export type Content$NavigatedEvent = Event<
    Content$NavigatedEventParameters,
    Content
  >;

  /**
   * Parameters of the Content#requestSwitchToDialog event.
   */
  export interface Content$RequestSwitchToDialogEventParameters {}

  /**
   * Event object of the Content#requestSwitchToDialog event.
   */
  export type Content$RequestSwitchToDialogEvent = Event<
    Content$RequestSwitchToDialogEventParameters,
    Content
  >;

  /**
   * Parameters of the Content#select event.
   */
  export interface Content$SelectEventParameters {
    /**
     * Type of the selection change (add, remove)
     */
    type?: /* was: sap.ui.mdc.enums.ValueHelpSelectionType */ any;

    /**
     * Changed conditions
     *
     * **Note:** A condition must have the structure of {@link sap.ui.mdc.condition.ConditionObject ConditionObject}.
     */
    conditions?: object[];
  }

  /**
   * Event object of the Content#select event.
   */
  export type Content$SelectEvent = Event<
    Content$SelectEventParameters,
    Content
  >;

  /**
   * Parameters of the Content#typeaheadSuggested event.
   */
  export interface Content$TypeaheadSuggestedEventParameters {
    /**
     * Suggested condition
     *
     * **Note:** A condition must have the structure of {@link sap.ui.mdc.condition.ConditionObject ConditionObject}.
     */
    condition?: object;

    /**
     * Used filter value (as the event might fire asynchronously, and the current user input might have changed.)
     */
    filterValue?: string;

    /**
     * ID of the suggested item (This is needed to set the corresponding ARIA attribute)
     */
    itemId?: string;

    /**
     * If `true` the filtering was executed case sensitive
     */
    caseSensitive?: boolean;
  }

  /**
   * Event object of the Content#typeaheadSuggested event.
   */
  export type Content$TypeaheadSuggestedEvent = Event<
    Content$TypeaheadSuggestedEventParameters,
    Content
  >;
}

declare module "sap/ui/mdc/valuehelp/base/FilterableListContent" {
  import {
    default as ListContent,
    $ListContentSettings,
  } from "sap/ui/mdc/valuehelp/base/ListContent";

  import FilterBar from "sap/ui/mdc/filterbar/vh/FilterBar";

  import Context from "sap/ui/model/Context";

  import {
    AggregationBindingInfo,
    PropertyBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { ConditionObject } from "sap/ui/mdc/condition/Condition";

  /**
   * Content for the {@link sap.ui.mdc.valuehelp.base.Container Container} element.
   *
   * @since 1.95.0
   */
  export default abstract class FilterableListContent extends ListContent {
    /**
     * Constructor for a new `FilterableListContent`.
     *
     * This is the basis for various types of value help content with filter functionality. It cannot be used
     * directly.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new element
       */
      mSettings?: $FilterableListContentSettings
    );
    /**
     * Constructor for a new `FilterableListContent`.
     *
     * This is the basis for various types of value help content with filter functionality. It cannot be used
     * directly.
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
      mSettings?: $FilterableListContentSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.valuehelp.base.FilterableListContent with name `sClassName`
     * and enriches it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.valuehelp.base.ListContent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, FilterableListContent>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.valuehelp.base.FilterableListContent.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Applies the filter to the content control.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    applyFilters(): void;
    /**
     * Creates a payload for a value.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns payload
     */
    createConditionPayload(
      /**
       * Values (key, description)
       */
      aValues: any[],
      /**
       * context
       */
      vContext: any
    ): object;
    /**
     * Destroys the filterBar in the aggregation {@link #getFilterBar filterBar}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFilterBar(): this;
    /**
     * Gets the currently used `FilterBar` control.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns FilterBar
     */
    getActiveFilterBar(): FilterBar;
    /**
     * Gets current value of property {@link #getDescriptionPath descriptionPath}.
     *
     * The path of the description field in the content binding. If a table is used as content, this is the
     * binding path of the description of the items.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Value of property `descriptionPath`
     */
    getDescriptionPath(): string;
    /**
     * Gets content of aggregation {@link #getFilterBar filterBar}.
     *
     * {@link sap.ui.mdc.filterbar.vh.FilterBar FilterBar} used for filtering.
     */
    getFilterBar(): FilterBar;
    /**
     * Gets current value of property {@link #getFilterFields filterFields}.
     *
     * The fields based on which the table data is filtered. For filtering, the value of the `filterValue` property
     * is used.
     *
     * If set to `$search`, and if the used binding supports search requests, a $search request is used for
     * filtering.
     *
     * If set to one or more properties, the filters for these properties are used for filtering. These filters
     * are set on the `ListBinding` used. The properties need to be separated by commas and enclosed by "*"
     * characters. (`"*Property1,Property2*"`)
     *
     * If it is empty, no suggestion is available.
     *
     * Default value is `empty string`.
     *
     * @deprecated (since 1.120.2) - please see `{@link module:sap/ui/mdc/ValueHelpDelegate.isSearchSupported isSearchSupported}`
     *
     * @returns Value of property `filterFields`
     */
    getFilterFields(): string;
    /**
     * Gets current value of property {@link #getGroup group}.
     *
     * If set, all contents with the same group are arranged together on one tab.
     *
     * The label of the groups can be defined on the container via {@link sap.ui.mdc.valuehelp.Dialog#setGroupConfig setGroupConfig}.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Value of property `group`
     */
    getGroup(): string;
    /**
     * Gets an item for a `BindingContext`.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Item object containing `key`, `description`, and `payload`
     */
    getItemFromContext(
      /**
       * BindingContext
       */
      oBindingContext: Context,
      /**
       * Options
       */
      oOptions?: object
    ): object;
    /**
     * Gets current value of property {@link #getKeyPath keyPath}.
     *
     * The path of the key field in the content binding. If a table is used as content, this is the binding
     * path of the key of the items.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Value of property `keyPath`
     */
    getKeyPath(): string;
    /**
     * Gets the `BindingInfo` of the content.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns `ListBindingInfo`
     */
    getListBindingInfo(): AggregationBindingInfo;
    /**
     * Gets the currently used filter value.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns filter value
     */
    getSearch(): string;
    /**
     * Gets the conditions that are selectable from list content.
     *
     * These are validated conditions as other conditions are shown in the {@link sap.ui.mdc.valuehelp.content.Conditions Conditions}.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Conditions
     */
    getSelectableConditions(): ConditionObject[];
    /**
     * Sets a new value for property {@link #getDescriptionPath descriptionPath}.
     *
     * The path of the description field in the content binding. If a table is used as content, this is the
     * binding path of the description of the items.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDescriptionPath(
      /**
       * New value for property `descriptionPath`
       */
      sDescriptionPath?: string
    ): this;
    /**
     * Sets the aggregated {@link #getFilterBar filterBar}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFilterBar(
      /**
       * The filterBar to set
       */
      oFilterBar: FilterBar
    ): this;
    /**
     * Sets a new value for property {@link #getFilterFields filterFields}.
     *
     * The fields based on which the table data is filtered. For filtering, the value of the `filterValue` property
     * is used.
     *
     * If set to `$search`, and if the used binding supports search requests, a $search request is used for
     * filtering.
     *
     * If set to one or more properties, the filters for these properties are used for filtering. These filters
     * are set on the `ListBinding` used. The properties need to be separated by commas and enclosed by "*"
     * characters. (`"*Property1,Property2*"`)
     *
     * If it is empty, no suggestion is available.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @deprecated (since 1.120.2) - please see `{@link module:sap/ui/mdc/ValueHelpDelegate.isSearchSupported isSearchSupported}`
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFilterFields(
      /**
       * New value for property `filterFields`
       */
      sFilterFields?: string
    ): this;
    /**
     * Sets a new value for property {@link #getGroup group}.
     *
     * If set, all contents with the same group are arranged together on one tab.
     *
     * The label of the groups can be defined on the container via {@link sap.ui.mdc.valuehelp.Dialog#setGroupConfig setGroupConfig}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setGroup(
      /**
       * New value for property `group`
       */
      sGroup?: string
    ): this;
    /**
     * Sets a new value for property {@link #getKeyPath keyPath}.
     *
     * The path of the key field in the content binding. If a table is used as content, this is the binding
     * path of the key of the items.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setKeyPath(
      /**
       * New value for property `keyPath`
       */
      sKeyPath?: string
    ): this;
  }
  /**
   * Describes the settings that can be provided to the FilterableListContent constructor.
   */
  export interface $FilterableListContentSettings extends $ListContentSettings {
    /**
     * The fields based on which the table data is filtered. For filtering, the value of the `filterValue` property
     * is used.
     *
     * If set to `$search`, and if the used binding supports search requests, a $search request is used for
     * filtering.
     *
     * If set to one or more properties, the filters for these properties are used for filtering. These filters
     * are set on the `ListBinding` used. The properties need to be separated by commas and enclosed by "*"
     * characters. (`"*Property1,Property2*"`)
     *
     * If it is empty, no suggestion is available.
     *
     * @deprecated (since 1.120.2) - please see `{@link module:sap/ui/mdc/ValueHelpDelegate.isSearchSupported isSearchSupported}`
     */
    filterFields?: string | PropertyBindingInfo;

    /**
     * The path of the key field in the content binding. If a table is used as content, this is the binding
     * path of the key of the items.
     */
    keyPath?: string | PropertyBindingInfo;

    /**
     * The path of the description field in the content binding. If a table is used as content, this is the
     * binding path of the description of the items.
     */
    descriptionPath?: string | PropertyBindingInfo;

    /**
     * If set, all contents with the same group are arranged together on one tab.
     *
     * The label of the groups can be defined on the container via {@link sap.ui.mdc.valuehelp.Dialog#setGroupConfig setGroupConfig}.
     */
    group?: string | PropertyBindingInfo;

    /**
     * {@link sap.ui.mdc.filterbar.vh.FilterBar FilterBar} used for filtering.
     */
    filterBar?: FilterBar;
  }
}

declare module "sap/ui/mdc/valuehelp/base/ListContent" {
  import {
    default as Content,
    $ContentSettings,
  } from "sap/ui/mdc/valuehelp/base/Content";

  import ListBinding from "sap/ui/model/ListBinding";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * Content for the {@link sap.ui.mdc.valuehelp.base.Container Container} element.
   *
   * @since 1.95.0
   */
  export default abstract class ListContent extends Content {
    /**
     * Constructor for a new `ListContent`.
     *
     * This is the basis for various types of value help list content. It cannot be used directly.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new element
       */
      mSettings?: $ListContentSettings
    );
    /**
     * Constructor for a new `ListContent`.
     *
     * This is the basis for various types of value help list content. It cannot be used directly.
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
      mSettings?: $ListContentSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.valuehelp.base.ListContent with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.valuehelp.base.Content.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ListContent>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.valuehelp.base.ListContent.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getCaseSensitive caseSensitive}.
     *
     * If this property is set to `true`, the filtering for user input is always case-sensitive. Otherwise user
     * input is checked case-insensitively. If `$search` is used, this property has no effect on the `$search`
     * request.
     *
     * If the used back-end service supports a case-insensitive search, set this property to `false`.
     *
     * Default value is `false`.
     *
     *
     * @returns Value of property `caseSensitive`
     */
    getCaseSensitive(): boolean;
    /**
     * Gets current descriptionPath of the content. **Note:** Every listcontent must implement this method.
     *
     *
     * @returns Content description path
     */
    getDescriptionPath(): string;
    /**
     * Gets current keyPath of the content. **Note:** Every listcontent must implement this method.
     *
     *
     * @returns Content key path
     */
    getKeyPath(): string;
    /**
     * Gets the `ListBinding` of the content. **Note:** Every listcontent must implement this method.
     *
     *
     * @returns `ListBinding`
     */
    getListBinding(): ListBinding;
    /**
     * Gets current value of property {@link #getUseAsValueHelp useAsValueHelp}.
     *
     * If set, the list is opened whenever the value help icon is pressed.
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `useAsValueHelp`
     */
    getUseAsValueHelp(): boolean;
    /**
     * Gets current value of property {@link #getUseFirstMatch useFirstMatch}.
     *
     * If set, `getItemForValue` returns the first item that matches the text.
     *
     * In the default implementation, this is the first item that matches the entered text. Which item is used
     * can be determined by implementing {@link module:sap/ui/mdc/ValueHelpDelegate.getFirstMatch getFirstMatch}.
     *
     * The matching item is returned in the `typeaheadSuggested` event and used for the autocomplete feature
     * in the connected field.
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `useFirstMatch`
     */
    getUseFirstMatch(): boolean;
    /**
     * Sets a new value for property {@link #getCaseSensitive caseSensitive}.
     *
     * If this property is set to `true`, the filtering for user input is always case-sensitive. Otherwise user
     * input is checked case-insensitively. If `$search` is used, this property has no effect on the `$search`
     * request.
     *
     * If the used back-end service supports a case-insensitive search, set this property to `false`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setCaseSensitive(
      /**
       * New value for property `caseSensitive`
       */
      bCaseSensitive?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getUseAsValueHelp useAsValueHelp}.
     *
     * If set, the list is opened whenever the value help icon is pressed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setUseAsValueHelp(
      /**
       * New value for property `useAsValueHelp`
       */
      bUseAsValueHelp?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getUseFirstMatch useFirstMatch}.
     *
     * If set, `getItemForValue` returns the first item that matches the text.
     *
     * In the default implementation, this is the first item that matches the entered text. Which item is used
     * can be determined by implementing {@link module:sap/ui/mdc/ValueHelpDelegate.getFirstMatch getFirstMatch}.
     *
     * The matching item is returned in the `typeaheadSuggested` event and used for the autocomplete feature
     * in the connected field.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setUseFirstMatch(
      /**
       * New value for property `useFirstMatch`
       */
      bUseFirstMatch?: boolean
    ): this;
  }
  /**
   * Describes the settings that can be provided to the ListContent constructor.
   */
  export interface $ListContentSettings extends $ContentSettings {
    /**
     * If this property is set to `true`, the filtering for user input is always case-sensitive. Otherwise user
     * input is checked case-insensitively. If `$search` is used, this property has no effect on the `$search`
     * request.
     *
     * If the used back-end service supports a case-insensitive search, set this property to `false`.
     */
    caseSensitive?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If set, `getItemForValue` returns the first item that matches the text.
     *
     * In the default implementation, this is the first item that matches the entered text. Which item is used
     * can be determined by implementing {@link module:sap/ui/mdc/ValueHelpDelegate.getFirstMatch getFirstMatch}.
     *
     * The matching item is returned in the `typeaheadSuggested` event and used for the autocomplete feature
     * in the connected field.
     */
    useFirstMatch?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If set, the list is opened whenever the value help icon is pressed.
     */
    useAsValueHelp?: boolean | PropertyBindingInfo | `{${string}}`;
  }
}

declare module "sap/ui/mdc/valuehelp/content/Conditions" {
  import {
    default as Content,
    $ContentSettings,
  } from "sap/ui/mdc/valuehelp/base/Content";

  import { ID } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import ValueHelp from "sap/ui/mdc/ValueHelp";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * Content for the {@link sap.ui.mdc.valuehelp.base.Container Container} element showing a condition panel.
   *
   * @since 1.95.0
   */
  export default class Conditions extends Content {
    /**
     * Constructor for a new `Conditions` content.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new element
       */
      mSettings?: $ConditionsSettings
    );
    /**
     * Constructor for a new `Conditions` content.
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
      mSettings?: $ConditionsSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.valuehelp.content.Conditions with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.valuehelp.base.Content.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Conditions>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.valuehelp.content.Conditions.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * ID of the element which is the current target of the association {@link #getFieldHelp fieldHelp}, or
     * `null`.
     *
     * @deprecated (since 1.114.0) - replaced by {@link #setValueHelp valueHelp} association
     */
    getFieldHelp(): ID | null;
    /**
     * Gets current value of property {@link #getLabel label}.
     *
     * Label shown on condition panel.
     *
     *
     * @returns Value of property `label`
     */
    getLabel(): string;
    /**
     * ID of the element which is the current target of the association {@link #getValueHelp valueHelp}, or
     * `null`.
     */
    getValueHelp(): ID | null;
    /**
     * Sets the associated {@link #getFieldHelp fieldHelp}.
     *
     * @deprecated (since 1.114.0) - replaced by {@link #setValueHelp valueHelp} association
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFieldHelp(
      /**
       * ID of an element which becomes the new target of this fieldHelp association; alternatively, an element
       * instance may be given
       */
      oFieldHelp: ID | ValueHelp
    ): this;
    /**
     * Sets a new value for property {@link #getLabel label}.
     *
     * Label shown on condition panel.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLabel(
      /**
       * New value for property `label`
       */
      sLabel: string
    ): this;
    /**
     * Sets the associated {@link #getValueHelp valueHelp}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setValueHelp(
      /**
       * ID of an element which becomes the new target of this valueHelp association; alternatively, an element
       * instance may be given
       */
      oValueHelp: ID | ValueHelp
    ): this;
  }
  /**
   * Describes the settings that can be provided to the Conditions constructor.
   */
  export interface $ConditionsSettings extends $ContentSettings {
    /**
     * Label shown on condition panel.
     */
    label?: string | PropertyBindingInfo;

    /**
     * Optional `FieldHelp`.
     *
     * This is an association that allows the usage of one `FieldHelp` instance for the value fields for the
     * `Conditions`. **Note:** The value fields on the conditions UI cannot be accessed from outside. The fields
     * are single-value input, and the display is always set to `FieldDisplay.Value`. Only a `ValueHelp>/code>
     * with a TypeAhead` and a single-selection `MTable` can be used. **Note:** For `Boolean`, `Date`,
     * or `Time` types, no `FieldHelp` should be added, but a default `FieldHelp` used instead.
     *
     * @deprecated (since 1.114.0) - replaced by {@link #setValueHelp valueHelp} association
     */
    fieldHelp?: ValueHelp | string;

    /**
     * Optional `ValueHelp`.
     *
     * This is an association that allows the usage of one `ValueHelp` instance for the value fields for the
     * `Conditions`.
     *
     * **Note:** The value fields on the conditions UI cannot be accessed from outside. The fields are single-value
     * input, and the display is always set to `FieldDisplay.Value`. Only a `ValueHelp>/code> with a TypeAhead`
     * and a single-selection `MTable` can be used.
     *
     * **Note:** For `Boolean`, `Date`, or `Time` types, no `ValueHelp` should be added, but a default `ValueHelp`
     * used instead.
     */
    valueHelp?: ValueHelp | string;
  }
}

declare module "sap/ui/mdc/valuehelp/content/FixedList" {
  import {
    default as ListContent,
    $ListContentSettings,
  } from "sap/ui/mdc/valuehelp/base/ListContent";

  import FixedListItem from "sap/ui/mdc/valuehelp/content/FixedListItem";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * Content for the {@link sap.ui.mdc.valuehelp.base.Container Container} element showing a list with fixed
   * values.
   *
   * @since 1.95.0
   */
  export default class FixedList extends ListContent {
    /**
     * Constructor for a new `FixedList` content.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new element
       */
      mSettings?: $FixedListSettings
    );
    /**
     * Constructor for a new `FixedList` content.
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
      mSettings?: $FixedListSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.valuehelp.content.FixedList with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.valuehelp.base.ListContent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, FixedList>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.valuehelp.content.FixedList.
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
      oItem: FixedListItem
    ): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;
    /**
     * Gets current value of property {@link #getFilterList filterList}.
     *
     * If set, the items of the list are filtered based on `filterValue`.
     *
     * If a type-ahead behavior for the connected field is wanted, this property must be set to `true`. For
     * small lists, all values are meant to be shown, independent of the typing in the connected field. In this
     * case this property must be set to `false`.
     *
     * If not set, the list opens if the user clicks into the connected field.
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `filterList`
     */
    getFilterList(): boolean;
    /**
     * Gets current value of property {@link #getGroupable groupable}.
     *
     * If set, the items of the list can be grouped
     *
     * Default value is `false`.
     *
     *
     * @returns Value of property `groupable`
     */
    getGroupable(): boolean;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * Items of the value help.
     *
     * The `key` of the items is not shown in the list, but is used as a value of the connected field.
     *
     * If the `additionalText` for all the items is not used, the column will not be displayed.
     *
     * **Note:** Icons are currently not supported.
     */
    getItems(): FixedListItem[];
    /**
     * Checks for the provided `sap.ui.mdc.valuehelp.content.FixedListItem` in the aggregation {@link #getItems items}.
     * and returns its index if found or -1 otherwise.
     *
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: FixedListItem
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
      oItem: FixedListItem,
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
    removeAllItems(): FixedListItem[];
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
      vItem: int | string | FixedListItem
    ): FixedListItem | null;
    /**
     * Sets a new value for property {@link #getFilterList filterList}.
     *
     * If set, the items of the list are filtered based on `filterValue`.
     *
     * If a type-ahead behavior for the connected field is wanted, this property must be set to `true`. For
     * small lists, all values are meant to be shown, independent of the typing in the connected field. In this
     * case this property must be set to `false`.
     *
     * If not set, the list opens if the user clicks into the connected field.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFilterList(
      /**
       * New value for property `filterList`
       */
      bFilterList?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getGroupable groupable}.
     *
     * If set, the items of the list can be grouped
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setGroupable(
      /**
       * New value for property `groupable`
       */
      bGroupable?: boolean
    ): this;
  }
  /**
   * Describes the settings that can be provided to the FixedList constructor.
   */
  export interface $FixedListSettings extends $ListContentSettings {
    /**
     * If set, the items of the list can be grouped
     */
    groupable?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If set, the items of the list are filtered based on `filterValue`.
     *
     * If a type-ahead behavior for the connected field is wanted, this property must be set to `true`. For
     * small lists, all values are meant to be shown, independent of the typing in the connected field. In this
     * case this property must be set to `false`.
     *
     * If not set, the list opens if the user clicks into the connected field.
     */
    filterList?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Items of the value help.
     *
     * The `key` of the items is not shown in the list, but is used as a value of the connected field.
     *
     * If the `additionalText` for all the items is not used, the column will not be displayed.
     *
     * **Note:** Icons are currently not supported.
     */
    items?:
      | FixedListItem[]
      | FixedListItem
      | AggregationBindingInfo
      | `{${string}}`;
  }
}

declare module "sap/ui/mdc/valuehelp/content/FixedListItem" {
  import { default as ListItem, $ListItemSettings } from "sap/ui/core/ListItem";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * An item that is used in the {@link sap.ui.mdc.valuehelp.content.FixedList FixedList}.
   *
   * @since 1.114.0
   */
  export default class FixedListItem extends ListItem {
    /**
     * Constructor for a new FixedListItem.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $FixedListItemSettings
    );
    /**
     * Constructor for a new FixedListItem.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * id for the new control, generated automatically if no id is given
       */
      sId?: string,
      /**
       * initial settings for the new control
       */
      mSettings?: $FixedListItemSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.valuehelp.content.FixedListItem with name `sClassName` and
     * enriches it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.ListItem.extend}.
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
      oClassInfo?: sap.ClassInfo<T, FixedListItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.valuehelp.content.FixedListItem.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getGroupKey groupKey}.
     *
     * Key of the group for what the items are grouped
     *
     *
     * @returns Value of property `groupKey`
     */
    getGroupKey(): any;
    /**
     * Gets current value of property {@link #getGroupText groupText}.
     *
     * Text of the group for what the items are grouped
     *
     *
     * @returns Value of property `groupText`
     */
    getGroupText(): string;
    /**
     * Sets a new value for property {@link #getGroupKey groupKey}.
     *
     * Key of the group for what the items are grouped
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setGroupKey(
      /**
       * New value for property `groupKey`
       */
      oGroupKey?: any
    ): this;
    /**
     * Sets a new value for property {@link #getGroupText groupText}.
     *
     * Text of the group for what the items are grouped
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setGroupText(
      /**
       * New value for property `groupText`
       */
      sGroupText?: string
    ): this;
  }
  /**
   * Describes the settings that can be provided to the FixedListItem constructor.
   */
  export interface $FixedListItemSettings extends $ListItemSettings {
    /**
     * Key of the group for what the items are grouped
     */
    groupKey?: any | PropertyBindingInfo | `{${string}}`;

    /**
     * Text of the group for what the items are grouped
     */
    groupText?: string | PropertyBindingInfo;
  }
}

declare module "sap/ui/mdc/valuehelp/Dialog" {
  import {
    default as Container,
    $ContainerSettings,
  } from "sap/ui/mdc/valuehelp/base/Container";

  import { PopupInterface } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * Object to label groups in the value help dialog.
   */
  export type GroupLabel = {
    /**
     * Label with counter. The placeholder for counter needs to be defined with `{0}`
     */
    label: string;
    /**
     * Label without counter
     */
    nnLabel: string;
  };

  /**
   * Container for the {@link sap.ui.mdc.ValueHelp ValueHelp} element showing a dialog.
   *
   * @since 1.95.0
   */
  export default class Dialog extends Container implements PopupInterface {
    __implements__sap_ui_core_PopupInterface: boolean;
    /**
     * Constructor for a new `Dialog` container.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $DialogSettings
    );
    /**
     * Constructor for a new `Dialog` container.
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
      mSettings?: $DialogSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.valuehelp.Dialog with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.valuehelp.base.Container.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Dialog>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.valuehelp.Dialog.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getGroupConfig groupConfig}.
     *
     * Configuration for groups (collective search).
     *
     * The object needs to contain an entry for every possible group. The labels of every group need to have
     * a structure of {@link sap.ui.mdc.valuehelp.content.GroupLabel}. If no configuration is provided a standard
     * text "search and select" is used.
     *
     * **Sample:**
     * ```javascript
     *
     * {
     * group1: {label: "Label 1", nnLabel: "Label 1 ({0})"},
     * group2: {label: "Label 2", nnLabel: "Label 2 ({0})"}
     * }
     * ```
     *
     *
     * Default value is `{}`.
     *
     *
     * @returns Value of property `groupConfig`
     */
    getGroupConfig(): object;
    /**
     * Sets a new value for property {@link #getGroupConfig groupConfig}.
     *
     * Configuration for groups (collective search).
     *
     * The object needs to contain an entry for every possible group. The labels of every group need to have
     * a structure of {@link sap.ui.mdc.valuehelp.content.GroupLabel}. If no configuration is provided a standard
     * text "search and select" is used.
     *
     * **Sample:**
     * ```javascript
     *
     * {
     * group1: {label: "Label 1", nnLabel: "Label 1 ({0})"},
     * group2: {label: "Label 2", nnLabel: "Label 2 ({0})"}
     * }
     * ```
     *
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `{}`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setGroupConfig(
      /**
       * New value for property `groupConfig`
       */
      oGroupConfig?: object
    ): this;
  }
  /**
   * Describes the settings that can be provided to the Dialog constructor.
   */
  export interface $DialogSettings extends $ContainerSettings {
    /**
     * Configuration for groups (collective search).
     *
     * The object needs to contain an entry for every possible group. The labels of every group need to have
     * a structure of {@link sap.ui.mdc.valuehelp.content.GroupLabel}. If no configuration is provided a standard
     * text "search and select" is used.
     *
     * **Sample:**
     * ```javascript
     *
     * {
     * group1: {label: "Label 1", nnLabel: "Label 1 ({0})"},
     * group2: {label: "Label 2", nnLabel: "Label 2 ({0})"}
     * }
     * ```
     */
    groupConfig?: object | PropertyBindingInfo | `{${string}}`;
  }
}

declare module "sap/ui/mdc/valuehelp/content/MDCTable" {
  import {
    default as FilterableListContent,
    $FilterableListContentSettings,
  } from "sap/ui/mdc/valuehelp/base/FilterableListContent";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Table from "sap/ui/mdc/Table";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * Content for the {@link sap.ui.mdc.valuehelp.base.Container Container} element using a {@link sap.ui.mdc.Table}.
   *
   * @since 1.95.0
   */
  export default class MDCTable extends FilterableListContent {
    /**
     * Constructor for a new `MDCTable` content.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new element
       */
      mSettings?: $MDCTableSettings
    );
    /**
     * Constructor for a new `MDCTable` content.
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
      mSettings?: $MDCTableSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.valuehelp.content.MDCTable with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.valuehelp.base.FilterableListContent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, MDCTable>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.valuehelp.content.MDCTable.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Destroys the table in the aggregation {@link #getTable table}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTable(): this;
    /**
     * Gets current value of property {@link #getForceBind forceBind}.
     *
     * This property will lead to a rebind on newly inserted tables after initial filters are set, immediately
     * before the table is shown for the first time.
     *
     * **Note:** This only takes effect if autoBindOnInit is disabled on the `Table`
     *
     * Default value is `false`.
     *
     *
     * @returns Value of property `forceBind`
     */
    getForceBind(): boolean;
    /**
     * Gets content of aggregation {@link #getTable table}.
     *
     * Table to be used in value help
     *
     * **Note:** Set the right selection mode (multiple selection or single selection) as it cannot be determined
     * automatically for every case. (Maybe for multi-value {@link sap.ui.mdc.FilterField FilterField} controls
     * only single selection from table might be wanted.)
     */
    getTable(): Table;
    /**
     * Sets a new value for property {@link #getForceBind forceBind}.
     *
     * This property will lead to a rebind on newly inserted tables after initial filters are set, immediately
     * before the table is shown for the first time.
     *
     * **Note:** This only takes effect if autoBindOnInit is disabled on the `Table`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setForceBind(
      /**
       * New value for property `forceBind`
       */
      bForceBind?: boolean
    ): this;
    /**
     * Sets the aggregated {@link #getTable table}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTable(
      /**
       * The table to set
       */
      oTable: Table
    ): this;
  }
  /**
   * Describes the settings that can be provided to the MDCTable constructor.
   */
  export interface $MDCTableSettings extends $FilterableListContentSettings {
    /**
     * This property will lead to a rebind on newly inserted tables after initial filters are set, immediately
     * before the table is shown for the first time.
     *
     * **Note:** This only takes effect if autoBindOnInit is disabled on the `Table`
     */
    forceBind?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Table to be used in value help
     *
     * **Note:** Set the right selection mode (multiple selection or single selection) as it cannot be determined
     * automatically for every case. (Maybe for multi-value {@link sap.ui.mdc.FilterField FilterField} controls
     * only single selection from table might be wanted.)
     */
    table?: Table;
  }
}

declare module "sap/ui/mdc/valuehelp/content/MTable" {
  import {
    default as FilterableListContent,
    $FilterableListContentSettings,
  } from "sap/ui/mdc/valuehelp/base/FilterableListContent";

  import Event from "sap/ui/base/Event";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Table from "sap/m/Table";

  /**
   * Content for the {@link sap.ui.mdc.valuehelp.base.Container Container} element using a {@link sap.m.Table}.
   *
   * @since 1.95.0
   */
  export default class MTable extends FilterableListContent {
    /**
     * Constructor for a new `MTable` content.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new element
       */
      mSettings?: $MTableSettings
    );
    /**
     * Constructor for a new `MTable` content.
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
      mSettings?: $MTableSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.valuehelp.content.MTable with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.valuehelp.base.FilterableListContent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, MTable>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.valuehelp.content.MTable.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:contentUpdated contentUpdated} event of this
     * `sap.ui.mdc.valuehelp.content.MTable`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.content.MTable` itself.
     *
     * This event is fired when the content of the table is updated.
     *
     * @deprecated (since 1.118.0) - This event is not fired or consumed anymore
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachContentUpdated(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.content.MTable`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:contentUpdated contentUpdated} event of this
     * `sap.ui.mdc.valuehelp.content.MTable`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.content.MTable` itself.
     *
     * This event is fired when the content of the table is updated.
     *
     * @deprecated (since 1.118.0) - This event is not fired or consumed anymore
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachContentUpdated(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.valuehelp.content.MTable`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys the table in the aggregation {@link #getTable table}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTable(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:contentUpdated contentUpdated} event of this
     * `sap.ui.mdc.valuehelp.content.MTable`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @deprecated (since 1.118.0) - This event is not fired or consumed anymore
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachContentUpdated(
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
     * Fires event {@link #event:contentUpdated contentUpdated} to attached listeners.
     *
     * @deprecated (since 1.118.0) - This event is not fired or consumed anymore
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireContentUpdated(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Gets content of aggregation {@link #getTable table}.
     *
     * Table that is used in the value help.
     *
     * **Note:** Set the right selection mode (multiple selection or single selection) as it cannot be determined
     * automatically for every case. (For type-ahead and also for multi-value {@link sap.ui.mdc.FilterField FilterField }
     * controls, only single selection from the table might be wanted.)
     *
     * **Note:** In phone mode, the popover or dialog might be rendered differently than in desktop mode. So
     * here the configuration for column sizes or table sizes might be different. Please configure sizes depending
     * on the used device.
     */
    getTable(): Table;
    /**
     * Sets the aggregated {@link #getTable table}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTable(
      /**
       * The table to set
       */
      oTable: Table
    ): this;
  }
  /**
   * Describes the settings that can be provided to the MTable constructor.
   */
  export interface $MTableSettings extends $FilterableListContentSettings {
    /**
     * Table that is used in the value help.
     *
     * **Note:** Set the right selection mode (multiple selection or single selection) as it cannot be determined
     * automatically for every case. (For type-ahead and also for multi-value {@link sap.ui.mdc.FilterField FilterField }
     * controls, only single selection from the table might be wanted.)
     *
     * **Note:** In phone mode, the popover or dialog might be rendered differently than in desktop mode. So
     * here the configuration for column sizes or table sizes might be different. Please configure sizes depending
     * on the used device.
     */
    table?: Table;

    /**
     * This event is fired when the content of the table is updated.
     *
     * @deprecated (since 1.118.0) - This event is not fired or consumed anymore
     */
    contentUpdated?: (oEvent: Event) => void;
  }

  /**
   * Parameters of the MTable#contentUpdated event.
   *
   * @deprecated (since 1.118.0) - This event is not fired or consumed anymore
   */
  export interface MTable$ContentUpdatedEventParameters {}

  /**
   * Event object of the MTable#contentUpdated event.
   *
   * @deprecated (since 1.118.0) - This event is not fired or consumed anymore
   */
  export type MTable$ContentUpdatedEvent = Event<
    MTable$ContentUpdatedEventParameters,
    MTable
  >;
}

declare module "sap/ui/mdc/valuehelp/FilterBar" {
  import {
    default as FilterBarBase,
    $FilterBarBaseSettings,
  } from "sap/ui/mdc/filterbar/FilterBarBase";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * The `FilterBar` control is used to display filter properties in a user-friendly manner to populate values
   * for a query. The filters are arranged in a logical row that is divided depending on the space available
   * and the width of the filters. The Go button triggers the search event, and the Show Filters button shows
   * the additional filter field.
   *  The `FilterBar` control creates and handles the filters based on the provided metadata information.
   * The metadata information is provided via the {@link module:sap/ui/mdc/FilterBarDelegate FilterBarDelegate }
   * implementation. This implementation has to be provided by the application.
   *  **Note:** The `FilterBar` can only be used for a {@link sap.ui.mdc.valuehelp.Dialog Dialog} and not
   * on its own.
   *
   * @since 1.124.0
   */
  export default class FilterBar extends FilterBarBase {
    /**
     * Constructor for a new `FilterBar` for a value help dialog.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $FilterBarSettings
    );
    /**
     * Constructor for a new `FilterBar` for a value help dialog.
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
       * initial settings for the new control
       */
      mSettings?: $FilterBarSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.valuehelp.FilterBar with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.filterbar.FilterBarBase.extend}.
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
      oClassInfo?: sap.ClassInfo<T, FilterBar>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.valuehelp.FilterBar.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getDelegate delegate}.
     *
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/BaseDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * Default value is `...see text or source`.
     *
     *
     * @returns Value of property `delegate`
     */
    getDelegate(): object;
    /**
     * Gets current value of property {@link #getExpandFilterFields expandFilterFields}.
     *
     * Determines whether the Show/Hide Filters button is in the state show or hide.
     *
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `expandFilterFields`
     */
    getExpandFilterFields(): boolean;
    /**
     * Gets current value of property {@link #getFilterFieldThreshold filterFieldThreshold}.
     *
     * Number of FilterItems which will be shown via Show Filters.
     *
     *
     * Default value is `8`.
     *
     *
     * @returns Value of property `filterFieldThreshold`
     */
    getFilterFieldThreshold(): int;
    /**
     * Sets a new value for property {@link #getDelegate delegate}.
     *
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/BaseDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `...see text or source`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDelegate(
      /**
       * New value for property `delegate`
       */
      oDelegate?: object
    ): this;
    /**
     * Sets a new value for property {@link #getExpandFilterFields expandFilterFields}.
     *
     * Determines whether the Show/Hide Filters button is in the state show or hide.
     *
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setExpandFilterFields(
      /**
       * New value for property `expandFilterFields`
       */
      bExpandFilterFields?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getFilterFieldThreshold filterFieldThreshold}.
     *
     * Number of FilterItems which will be shown via Show Filters.
     *
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `8`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFilterFieldThreshold(
      /**
       * New value for property `filterFieldThreshold`
       */
      iFilterFieldThreshold?: int
    ): this;
  }
  /**
   * Describes the settings that can be provided to the FilterBar constructor.
   */
  export interface $FilterBarSettings extends $FilterBarBaseSettings {
    /**
     * Object related to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  The object has the following properties:
     * 	 - `name` defines the path to the `Delegate` module
     * 	 - `payload` (optional) defines application-specific information that can be used in the given delegate
     *      Sample delegate object:
     * ```javascript
     * {
     * 	name: "sap/ui/mdc/BaseDelegate",
     * 	payload: {}
     * }```
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     */
    delegate?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the Show/Hide Filters button is in the state show or hide.
     */
    expandFilterFields?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Number of FilterItems which will be shown via Show Filters.
     */
    filterFieldThreshold?: int | PropertyBindingInfo | `{${string}}`;
  }
}

declare module "sap/ui/mdc/valuehelp/Popover" {
  import {
    default as Container,
    $ContainerSettings,
  } from "sap/ui/mdc/valuehelp/base/Container";

  import { PopupInterface } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * Container for the {@link sap.ui.mdc.ValueHelp ValueHelp} element showing a popover.
   *
   * @since 1.95.0
   */
  export default class Popover extends Container implements PopupInterface {
    __implements__sap_ui_core_PopupInterface: boolean;
    /**
     * Constructor for a new `Popover` container.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $PopoverSettings
    );
    /**
     * Constructor for a new `Popover` container.
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
      mSettings?: $PopoverSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.valuehelp.Popover with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.valuehelp.base.Container.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Popover>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.valuehelp.Popover.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getOpensOnClick opensOnClick}.
     *
     * Controls the possibility to open this popover container by clicking on a connected control, even if no
     * content enforces it.
     *
     * **Note:** By default, a type-ahead is only shown to provide suggestions when users enter input in a connected
     * control. This property enables scenarios where popovers need to be shown earlier (for example, recommendations
     * or recently entered values). See also {@link module:sap/ui/mdc/ValueHelpDelegate.showTypeahead showTypeahead}
     *
     * Default value is `false`.
     *
     * @since 1.110.0
     * @deprecated (since 1.121.0) - replaced by {@link module:sap/ui/mdc/ValueHelpDelegate.shouldOpenOnClick shouldOpenOnClick}
     *
     * @returns Value of property `opensOnClick`
     */
    getOpensOnClick(): boolean;
    /**
     * Gets current value of property {@link #getOpensOnFocus opensOnFocus}.
     *
     * Controls the possibility to open this popover container by focussing on a connected control.
     *
     * **Note:** By default, a type-ahead is only shown to provide suggestions when users enter input in a connected
     * control. This property enables scenarios where popovers need to be shown earlier (for example, recommendations
     * or recently entered values). See also {@link module:sap/ui/mdc/ValueHelpDelegate.showTypeahead showTypeahead}
     *
     * Default value is `false`.
     *
     * @since 1.112.0
     * @deprecated (since 1.121.0) - replaced by {@link module:sap/ui/mdc/ValueHelpDelegate.shouldOpenOnFocus shouldOpenOnFocus}
     *
     * @returns Value of property `opensOnFocus`
     */
    getOpensOnFocus(): boolean;
    /**
     * Sets a new value for property {@link #getOpensOnClick opensOnClick}.
     *
     * Controls the possibility to open this popover container by clicking on a connected control, even if no
     * content enforces it.
     *
     * **Note:** By default, a type-ahead is only shown to provide suggestions when users enter input in a connected
     * control. This property enables scenarios where popovers need to be shown earlier (for example, recommendations
     * or recently entered values). See also {@link module:sap/ui/mdc/ValueHelpDelegate.showTypeahead showTypeahead}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @since 1.110.0
     * @deprecated (since 1.121.0) - replaced by {@link module:sap/ui/mdc/ValueHelpDelegate.shouldOpenOnClick shouldOpenOnClick}
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setOpensOnClick(
      /**
       * New value for property `opensOnClick`
       */
      bOpensOnClick?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getOpensOnFocus opensOnFocus}.
     *
     * Controls the possibility to open this popover container by focussing on a connected control.
     *
     * **Note:** By default, a type-ahead is only shown to provide suggestions when users enter input in a connected
     * control. This property enables scenarios where popovers need to be shown earlier (for example, recommendations
     * or recently entered values). See also {@link module:sap/ui/mdc/ValueHelpDelegate.showTypeahead showTypeahead}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @since 1.112.0
     * @deprecated (since 1.121.0) - replaced by {@link module:sap/ui/mdc/ValueHelpDelegate.shouldOpenOnFocus shouldOpenOnFocus}
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setOpensOnFocus(
      /**
       * New value for property `opensOnFocus`
       */
      bOpensOnFocus?: boolean
    ): this;
  }
  /**
   * Describes the settings that can be provided to the Popover constructor.
   */
  export interface $PopoverSettings extends $ContainerSettings {
    /**
     * Controls the possibility to open this popover container by clicking on a connected control, even if no
     * content enforces it.
     *
     * **Note:** By default, a type-ahead is only shown to provide suggestions when users enter input in a connected
     * control. This property enables scenarios where popovers need to be shown earlier (for example, recommendations
     * or recently entered values). See also {@link module:sap/ui/mdc/ValueHelpDelegate.showTypeahead showTypeahead}
     *
     * @since 1.110.0
     * @deprecated (since 1.121.0) - replaced by {@link module:sap/ui/mdc/ValueHelpDelegate.shouldOpenOnClick shouldOpenOnClick}
     */
    opensOnClick?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Controls the possibility to open this popover container by focussing on a connected control.
     *
     * **Note:** By default, a type-ahead is only shown to provide suggestions when users enter input in a connected
     * control. This property enables scenarios where popovers need to be shown earlier (for example, recommendations
     * or recently entered values). See also {@link module:sap/ui/mdc/ValueHelpDelegate.showTypeahead showTypeahead}
     *
     * @since 1.112.0
     * @deprecated (since 1.121.0) - replaced by {@link module:sap/ui/mdc/ValueHelpDelegate.shouldOpenOnFocus shouldOpenOnFocus}
     */
    opensOnFocus?: boolean | PropertyBindingInfo | `{${string}}`;
  }
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/ui/mdc/actiontoolbar/ActionToolbarAction": undefined;

    "sap/ui/mdc/AggregationBaseDelegate": undefined;

    "sap/ui/mdc/BaseDelegate": undefined;

    "sap/ui/mdc/Chart": undefined;

    "sap/ui/mdc/chart/ChartImplementationContainer": undefined;

    "sap/ui/mdc/chart/ChartSelectionDetails": undefined;

    "sap/ui/mdc/chart/Item": undefined;

    "sap/ui/mdc/chart/SelectionDetailsActions": undefined;

    "sap/ui/mdc/ChartDelegate": undefined;

    "sap/ui/mdc/condition/Condition": undefined;

    "sap/ui/mdc/condition/ConditionConverter": undefined;

    "sap/ui/mdc/condition/ConditionModel": undefined;

    "sap/ui/mdc/condition/ConditionModelPropertyBinding": undefined;

    "sap/ui/mdc/condition/ConditionValidateException": undefined;

    "sap/ui/mdc/condition/FilterConverter": undefined;

    "sap/ui/mdc/condition/FilterOperatorUtil": undefined;

    "sap/ui/mdc/condition/Operator": undefined;

    "sap/ui/mdc/condition/OperatorDynamicDateOption": undefined;

    "sap/ui/mdc/condition/RangeOperator": undefined;

    "sap/ui/mdc/Control": undefined;

    "sap/ui/mdc/DefaultTypeMap": undefined;

    "sap/ui/mdc/Element": undefined;

    "sap/ui/mdc/enum/ActionToolbarActionAlignment": undefined;

    "sap/ui/mdc/enum/BaseType": undefined;

    "sap/ui/mdc/enum/ConditionValidated": undefined;

    "sap/ui/mdc/enum/ContentMode": undefined;

    "sap/ui/mdc/enum/EditMode": undefined;

    "sap/ui/mdc/enum/FieldDisplay": undefined;

    "sap/ui/mdc/enum/FilterBarValidationStatus": undefined;

    "sap/ui/mdc/enum/LinkType": undefined;

    "sap/ui/mdc/enum/OperatorOverwrite": undefined;

    "sap/ui/mdc/enum/OperatorValueType": undefined;

    "sap/ui/mdc/enum/ProcessingStrategy": undefined;

    "sap/ui/mdc/enum/PropagationReason": undefined;

    "sap/ui/mdc/enum/ReasonMode": undefined;

    "sap/ui/mdc/enum/SelectType": undefined;

    "sap/ui/mdc/enums/ActionToolbarActionAlignment": undefined;

    "sap/ui/mdc/enums/BaseType": undefined;

    "sap/ui/mdc/enums/ChartP13nMode": undefined;

    "sap/ui/mdc/enums/ChartToolbarActionType": undefined;

    "sap/ui/mdc/enums/ConditionValidated": undefined;

    "sap/ui/mdc/enums/ContentMode": undefined;

    "sap/ui/mdc/enums/FieldDisplay": undefined;

    "sap/ui/mdc/enums/FieldEditMode": undefined;

    "sap/ui/mdc/enums/FilterBarP13nMode": undefined;

    "sap/ui/mdc/enums/FilterBarValidationStatus": undefined;

    "sap/ui/mdc/enums/LinkType": undefined;

    "sap/ui/mdc/enums/OperatorName": undefined;

    "sap/ui/mdc/enums/OperatorOverwrite": undefined;

    "sap/ui/mdc/enums/OperatorValueType": undefined;

    "sap/ui/mdc/enums/ProcessingStrategy": undefined;

    "sap/ui/mdc/enums/ReasonMode": undefined;

    "sap/ui/mdc/enums/TableGrowingMode": undefined;

    "sap/ui/mdc/enums/TableMultiSelectMode": undefined;

    "sap/ui/mdc/enums/TableP13nMode": undefined;

    "sap/ui/mdc/enums/TableRowActionType": undefined;

    "sap/ui/mdc/enums/TableRowCountMode": undefined;

    "sap/ui/mdc/enums/TableSelectionMode": undefined;

    "sap/ui/mdc/enums/TableType": undefined;

    "sap/ui/mdc/enums/ValueHelpPropagationReason": undefined;

    "sap/ui/mdc/enums/ValueHelpSelectionType": undefined;

    "sap/ui/mdc/Field": undefined;

    "sap/ui/mdc/field/ConditionsType": undefined;

    "sap/ui/mdc/field/ConditionType": undefined;

    "sap/ui/mdc/field/content/BooleanContent": undefined;

    "sap/ui/mdc/field/content/ContentFactory": undefined;

    "sap/ui/mdc/field/content/DateContent": undefined;

    "sap/ui/mdc/field/content/DateTimeContent": undefined;

    "sap/ui/mdc/field/content/DefaultContent": undefined;

    "sap/ui/mdc/field/content/LinkContent": undefined;

    "sap/ui/mdc/field/content/SearchContent": undefined;

    "sap/ui/mdc/field/content/TimeContent": undefined;

    "sap/ui/mdc/field/content/UnitContent": undefined;

    "sap/ui/mdc/field/CustomFieldInfo": undefined;

    "sap/ui/mdc/field/DynamicDateRangeConditionsType": undefined;

    "sap/ui/mdc/field/FieldBase": undefined;

    "sap/ui/mdc/field/FieldBaseDelegate": undefined;

    "sap/ui/mdc/field/FieldInfoBase": undefined;

    "sap/ui/mdc/field/FieldInput": undefined;

    "sap/ui/mdc/field/FieldMultiInput": undefined;

    "sap/ui/mdc/field/ListFieldHelpItem": undefined;

    "sap/ui/mdc/field/MultiValueFieldDelegate": undefined;

    "sap/ui/mdc/field/MultiValueFieldItem": undefined;

    "sap/ui/mdc/field/TokenDisplay": undefined;

    "sap/ui/mdc/field/TokenizerDisplay": undefined;

    "sap/ui/mdc/FilterBar": undefined;

    "sap/ui/mdc/filterbar/FilterBarBase": undefined;

    "sap/ui/mdc/filterbar/IFilterContainer": undefined;

    "sap/ui/mdc/filterbar/p13n/AdaptationFilterBar": undefined;

    "sap/ui/mdc/filterbar/vh/CollectiveSearchSelect": undefined;

    "sap/ui/mdc/filterbar/vh/FilterBar": undefined;

    "sap/ui/mdc/FilterBarDelegate": undefined;

    "sap/ui/mdc/FilterField": undefined;

    "sap/ui/mdc/library": undefined;

    "sap/ui/mdc/Link": undefined;

    "sap/ui/mdc/link/LinkItem": undefined;

    "sap/ui/mdc/LinkDelegate": undefined;

    "sap/ui/mdc/mixin/AdaptationMixin": undefined;

    "sap/ui/mdc/mixin/DelegateMixin": undefined;

    "sap/ui/mdc/mixin/FilterIntegrationMixin": undefined;

    "sap/ui/mdc/mixin/PromiseMixin": undefined;

    "sap/ui/mdc/mixin/PropertyHelperMixin": undefined;

    "sap/ui/mdc/MultiValueField": undefined;

    "sap/ui/mdc/odata/TypeMap": undefined;

    "sap/ui/mdc/odata/TypeUtil": undefined;

    "sap/ui/mdc/odata/v4/ChartDelegate": undefined;

    "sap/ui/mdc/odata/v4/TableDelegate": undefined;

    "sap/ui/mdc/odata/v4/TypeMap": undefined;

    "sap/ui/mdc/odata/v4/TypeUtil": undefined;

    "sap/ui/mdc/odata/v4/ValueHelpDelegate": undefined;

    "sap/ui/mdc/odata/v4/vizChart/ChartDelegate": undefined;

    "sap/ui/mdc/p13n/StateUtil": undefined;

    "sap/ui/mdc/Table": undefined;

    "sap/ui/mdc/table/Column": undefined;

    "sap/ui/mdc/table/ColumnSettings": undefined;

    "sap/ui/mdc/table/CreationRow": undefined;

    "sap/ui/mdc/table/DragDropConfig": undefined;

    "sap/ui/mdc/table/GridTableType": undefined;

    "sap/ui/mdc/table/ResponsiveColumnSettings": undefined;

    "sap/ui/mdc/table/ResponsiveTableType": undefined;

    "sap/ui/mdc/table/RowActionItem": undefined;

    "sap/ui/mdc/table/RowSettings": undefined;

    "sap/ui/mdc/table/TableTypeBase": undefined;

    "sap/ui/mdc/table/TreeTableType": undefined;

    "sap/ui/mdc/TableDelegate": undefined;

    "sap/ui/mdc/util/DateUtil": undefined;

    "sap/ui/mdc/util/FilterUtil": undefined;

    "sap/ui/mdc/util/InfoBar": undefined;

    "sap/ui/mdc/util/PromiseCache": undefined;

    "sap/ui/mdc/util/PropertyHelper": undefined;

    "sap/ui/mdc/util/TypeMap": undefined;

    "sap/ui/mdc/util/TypeUtil": undefined;

    "sap/ui/mdc/ValueHelp": undefined;

    "sap/ui/mdc/valuehelp/base/Container": undefined;

    "sap/ui/mdc/valuehelp/base/Content": undefined;

    "sap/ui/mdc/valuehelp/base/DefineConditionPanel": undefined;

    "sap/ui/mdc/valuehelp/base/DialogTab": undefined;

    "sap/ui/mdc/valuehelp/base/FilterableListContent": undefined;

    "sap/ui/mdc/valuehelp/base/ListContent": undefined;

    "sap/ui/mdc/valuehelp/CollectiveSearchSelect": undefined;

    "sap/ui/mdc/valuehelp/content/Bool": undefined;

    "sap/ui/mdc/valuehelp/content/Conditions": undefined;

    "sap/ui/mdc/valuehelp/content/FixedList": undefined;

    "sap/ui/mdc/valuehelp/content/FixedListItem": undefined;

    "sap/ui/mdc/valuehelp/content/MDCTable": undefined;

    "sap/ui/mdc/valuehelp/content/MTable": undefined;

    "sap/ui/mdc/valuehelp/Dialog": undefined;

    "sap/ui/mdc/valuehelp/FilterBar": undefined;

    "sap/ui/mdc/valuehelp/Popover": undefined;

    "sap/ui/mdc/ValueHelpDelegate": undefined;
  }
}
