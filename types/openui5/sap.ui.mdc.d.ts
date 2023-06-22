// For Library Version: 1.115.1

declare module "sap/ui/mdc/BaseDelegate" {
  import Control from "sap/ui/mdc/Control";

  /**
   * @since 1.79.0
   *
   * Basic Delegate for {@link sap.ui.mdc.Control}, {@link sap.ui.mdc.Element}
   *
   *
   * All delegate implementations for MDC controls must be derived directly or indirectly from this entity.
   * Applications should implement {@link sap.ui.mdc.BaseDelegate.getTypeMap getTypeMap} to provide type mappings
   * based on their model usage. Please also see the following extensible presets: {@link sap.ui.mdc.DefaultTypeMap},
   * {@link sap.ui.mdc.odata.TypeMap}, {@link sap.ui.mdc.odata.v4.TypeMap}
   */
  interface BaseDelegate {
    /**
     * @since 1.114.0
     *
     * Returns the typeutil configuration for this delegate.
     *
     * @returns typeMap configuration for this delegate Note: The returned array will also serve as a key in
     * the weakmap-based typeutil cache of BaseDelegate
     */
    getTypeMap(
      /**
       * Delegate payload object
       */
      oControl: Control
    ): /* was: sap.ui.mdc.util.TypeMap */ any;
  }
  const BaseDelegate: BaseDelegate;
  export default BaseDelegate;
}

declare module "sap/ui/mdc/ChartDelegate" {
  import { default as Chart, PropertyInfo } from "sap/ui/mdc/Chart";

  import Item from "sap/ui/mdc/chart/Item";

  import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";

  import FilterField from "sap/ui/mdc/FilterField";

  import Control from "sap/ui/core/Control";

  import { URI } from "sap/ui/core/library";

  /**
   * @since 1.88
   *
   * Base Delegate for {@link sap.ui.mdc.Chart Chart}. Extend this object in your project to use all functionalities
   * of the {@link sap.ui.mdc.Chart Chart}.
   *  This class provides method calls, that are called by the `Chart` for specific operations and overwrite
   * the internal behavior.
   */
  interface ChartDelegate {
    /**
     * Creates a new chart item for a given property name and updates the inner chart.
     *  **Note:** This does **not** add the chart item to the `Items` aggregation of the chart. Called and used
     * by `p13n`.
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
     * @returns chart type layout config
     */
    getChartTypeLayoutConfig(): ChartTypeLayoutConfig[];
    /**
     * Determines which MDC items are drillable and returns them. This function is used by the breadcrumb navigation.
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
     * @returns Array containing the drill stack
     */
    getDrillStack(
      /**
       * Reference to the chart
       */
      oChart: Chart
    ): any[];
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Returns the filter delegate of the chart that provides basic filter functionality, such as adding filter
     * fields. **Note:** The functionality provided in this delegate acts as a subset of a `FilterBarDelegate`
     * to enable the chart for inbuilt filtering.
     *
     * @returns Object for the chart filter personalization
     */
    getFilterDelegate(): {
      addItem: (p1: Chart, p2: string) => Promise<FilterField>;
    };
    /**
     * Returns the instance of the inner chart.
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
     * {@link sap.ui.mdc.Chart#setChartType setChartType} instead.
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
   * Char `ChartTypeLayoutConfig` type.
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
  /**
   * @since 1.114.0
   *
   * Generic `TypeMap` configuration for simplistic usecases
   *
   * **Note:** This `TypeMap` implementation contains the following types:
   *
   *
   * 	 - sap.ui.model.type.Boolean (alias Boolean)
   * 	 - sap.ui.model.type.Currency (alias Currency)
   * 	 - sap.ui.model.type.Date (alias Date)
   * 	 - sap.ui.model.type.DateTime (alias DateTime)
   * 	 - sap.ui.model.type.Float (alias Float)
   * 	 - sap.ui.model.type.Integer (alias Integer)
   * 	 - sap.ui.model.type.String (alias String)
   * 	 - sap.ui.model.type.Time (alias Time)
   * 	 - sap.ui.model.type.Unit (alias Unit)
   */
  interface DefaultTypeMap {}
  const DefaultTypeMap: DefaultTypeMap;
  export default DefaultTypeMap;
}

declare module "sap/ui/mdc/field/FieldBaseDelegate" {
  import FieldBase from "sap/ui/mdc/field/FieldBase";

  import Control from "sap/ui/core/Control";

  import { ConditionObject } from "sap/ui/mdc/condition/Condition";

  import {
    default as ValueHelp,
    ItemForValueConfiguration,
  } from "sap/ui/mdc/ValueHelp";

  import Context from "sap/ui/model/Context";

  import Type from "sap/ui/model/Type";

  import FormatException from "sap/ui/model/FormatException";

  import ParseException from "sap/ui/model/ParseException";

  /**
   * @since 1.72.0
   *
   * Delegate for {@link sap.ui.mdc.field.FieldBase FieldBase}.
   *  **Note:** The class is experimental and the API/behavior is not finalized and hence this should not
   * be used for productive usage.
   */
  interface FieldBaseDelegate {
    /**
     * @since 1.107.0
     *
     * Enables applications to control condition updates based on `value` / `additionalvalue` property changes.
     *
     * **Note:** Use with care! Custom implementations of this method may lead to intransparency as a field's
     * condition may then differ from the state of the `value` / `additionalvalue` properties. Please also avoid
     * expensive operations, as this can delay the rendering of the output!
     *
     * @returns Returns a condition object to be set on the control
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
       * key, description pair for the condition which is to be created.
       */
      aValues: any[],
      /**
       * currently available condition before the property change
       */
      oCurrentCondition: undefined | ConditionObject
    ): undefined | ConditionObject;
    /**
     * @since 1.107.0
     *
     * Enables applications to control condition updates based on `value` / `additionalvalue` property changes.
     *
     * **Note:** Use with care! Custom implementations of this method may lead to intransparency as a field's
     * condition may then differ from the state of the `value` / `additionalvalue` properties. Please also avoid
     * expensive operations, as this can delay the rendering of the output!
     *
     * @returns Returns a condition object to be set on the control
     */
    createCondition(
      /**
       * `Field` control instance
       */
      oField: FieldBase,
      /**
       * key, description pair for the condition which is to be created.
       */
      aValues: any[],
      /**
       * currently available condition before the property change
       */
      oCurrentCondition: undefined | ConditionObject
    ): undefined | ConditionObject;
    /**
     * @since 1.107.0
     *
     * Provides the possibility to convey custom data in conditions. This enables an application to enhance
     * conditions with data relevant for combined key or outparameter scenarios.
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
     * @since 1.107.0
     *
     * Provides the possibility to convey custom data in conditions. This enables an application to enhance
     * conditions with data relevant for combined key or outparameter scenarios.
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
     * Determines the description for a given key.
     *
     * This function is called while formatting the output of a {@link sap.ui.mdc.Field Field} or {@link sap.ui.mdc.FilterField FilterField }
     * control in case a description is to be displayed but only a key is given.
     *
     * If this needs to be determined asynchronously, a `Promise` is returned.
     *
     * As the key might change (uppercase), an object with key and description can be returned.
     *
     * If the description cannot be determined, a corresponding FormatException is thrown.
     *
     * @returns Description for key or object containing description, key and payload. If it is not available
     * right away (must be requested), a `Promise` is returned.
     */
    getDescription(
      /**
       * `Field` control instance
       */
      oField: FieldBase,
      /**
       * Field help assigned to the {@link sap.ui.mdc.Field Field} or {@link sap.ui.mdc.FilterField FilterField }
       * control
       */
      oValueHelp: ValueHelp,
      /**
       * Key
       */
      vKey: any,
      /**
       * In parameters for the key (as a key must not be unique.) (Only filled in conditions of old variants.)
       */
      oInParameters: object,
      /**
       * Out parameters for the key (as a key must not be unique.) (Only filled in conditions of old variants.)
       */
      oOutParameters: object,
      /**
       * `BindingContext` of the checked field. Inside a table the `ValueHelp` element might be connected to a
       * different row.
       */
      oBindingContext: Context,
      /**
       * `ConditionModel`, if bound to one - NOT LONGER USED
       */
      oConditionModel: undefined,
      /**
       * Name of the `ConditionModel`, if bound to one - NOT LONGER USED
       */
      sConditionModelName: undefined,
      /**
       * Additional context information for this key
       */
      oConditionPayload: object,
      /**
       * Instance if the calling control is not the field itself
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
     *
     * If this needs to be determined asynchronously, a `Promise` is returned.
     *
     * If the item cannot be determined, a corresponding ParseException is thrown.
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
       * Field help assigned to the {@link sap.ui.mdc.Field Field} or {@link sap.ui.mdc.FilterField FilterField }
       * control
       */
      oValueHelp: ValueHelp,
      /**
       * Configuration
       */
      oConfig?: ItemForValueConfiguration
    ): /* was: sap.ui.mdc.valuehelp.ValueHelpItem */
      | any
      | Promise</* was: sap.ui.mdc.valuehelp.ValueHelpItem */ any>;
  }
  const FieldBaseDelegate: FieldBaseDelegate;
  export default FieldBaseDelegate;
}

declare module "sap/ui/mdc/LinkDelegate" {
  import { default as Link, LinkTypeWrapper } from "sap/ui/mdc/Link";

  import Event from "sap/ui/base/Event";

  import Control from "sap/ui/core/Control";

  import Context from "sap/ui/model/Context";

  import LinkItem from "sap/ui/mdc/link/LinkItem";

  /**
   * @since 1.74
   *
   * Base delegate for {@link sap.ui.mdc.Link}. Extend this object in your project to use all functionalities
   * of the {@link sap.ui.mdc.Link}. **Note:** The delegate is experimental and the API/behaviour is not finalized
   * and hence this should not be used for productive usage.
   */
  interface LinkDelegate {
    /**
     * Allows for interception before the actual navigation takes place.
     *
     * @returns Once resolved, it returns a Boolean value that determines whether the navigation takes place
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
     *
     * @returns Once resolved, an object containing an initial {@link sap.ui.mdc.link.LinkType} and an optional
     * `Promise` are returned. The optional `Promise` also returns a {@link sap.ui.mdc.link.LinkType} object.
     * Once the optional `Promise` has been resolved, the returned {@link sap.ui.mdc.link.LinkType} overwrites
     * the `initialType`.
     */
    fetchLinkType(
      /**
       * Instance of the `Link`
       */
      oLink: Link
    ): Promise<LinkTypeWrapper>;
    /**
     * Enables the modification of the {@link sap.ui.mdc.link.LinkItem} instances before the popover opens.
     * This enables additional parameters to be added to the link.
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
       * The {@link sap.ui.mdc.link.LinkItem} instances of the link that can be modified
       */
      aLinkItems: LinkItem
    ): Promise<LinkItem[]>;
  }
  const LinkDelegate: LinkDelegate;
  export default LinkDelegate;
}

declare module "sap/ui/mdc/odata/TypeMap" {
  /**
   * @since 1.114.0
   *
   * OData-specific `TypeMap` configuration
   *
   * **Note:** This `TypeMap` implementation contains the following types:
   *
   *
   * 	 - sap.ui.model.type.Boolean (alias Boolean)
   * 	 - sap.ui.model.type.Currency (alias Currency)
   * 	 - sap.ui.model.type.Date (alias Date)
   * 	 - sap.ui.model.type.DateTime (alias DateTime)
   * 	 - sap.ui.model.type.Float (alias Float)
   * 	 - sap.ui.model.type.Integer (alias Integer)
   * 	 - sap.ui.model.type.String (alias String)
   * 	 - sap.ui.model.type.Time (alias Time)
   * 	 - sap.ui.model.type.Unit (alias Unit)
   * 	 - sap.ui.model.odata.type.Stream (alias Edm.Binary)
   * 	 - sap.ui.model.odata.type.Boolean (alias Edm.Boolean)
   * 	 - sap.ui.model.odata.type.Byte (alias Edm.Byte)
   * 	 - sap.ui.model.odata.type.Date (alias Edm.Date)
   * 	 - sap.ui.model.odata.type.DateTime (alias Edm.DateTime)
   * 	 - sap.ui.model.odata.type.DateTimeOffset (alias Edm.DateTimeOffset)
   * 	 - sap.ui.model.odata.type.Decimal (alias Edm.Decimal)
   * 	 - sap.ui.model.odata.type.Double (alias Edm.Double)
   * 	 - sap.ui.model.odata.type.Single (alias Edm.Float)
   * 	 - sap.ui.model.odata.type.Guid (alias Edm.Guid)
   * 	 - sap.ui.model.odata.type.Int16 (alias Edm.Int16)
   * 	 - sap.ui.model.odata.type.Int32 (alias Edm.Int32)
   * 	 - sap.ui.model.odata.type.Int64 (alias Edm.Int64)
   * 	 - sap.ui.model.odata.type.SByte (alias Edm.SByte)
   * 	 - sap.ui.model.odata.type.Single (alias Edm.Single)
   * 	 - sap.ui.model.odata.type.Stream (alias Edm.Stream)
   * 	 - sap.ui.model.odata.type.String (alias Edm.String)
   * 	 - sap.ui.model.odata.type.Time (alias Edm.Time)
   * 	 - sap.ui.model.odata.type.TimeOfDay (alias Edm.TimeOfDay)
   */
  interface TypeMap {}
  const TypeMap: TypeMap;
  export default TypeMap;
}

declare module "sap/ui/mdc/odata/v4/ChartDelegate" {
  /**
   * @since 1.88
   *
   * Delegate class for {@link sap.ui.mdc.Chart Chart} and ODataV4.
   *  This class provides method calls, which are called by the `Chart` at specific operations and allows
   * to overwrite an internal behaviour.
   */
  interface ChartDelegate {}
  const ChartDelegate: ChartDelegate;
  export default ChartDelegate;
}

declare module "sap/ui/mdc/odata/v4/TableDelegate" {
  import Table from "sap/ui/mdc/Table";

  import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";

  import ListBinding from "sap/ui/model/ListBinding";

  /**
   * @since 1.85
   *
   * Delegate for {@link sap.ui.mdc.Table} and `ODataV4`. Enables additional analytical capabilities.
   */
  interface TableDelegate {
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Updates the row binding of the table if possible, rebinds otherwise.
     *
     * Compares the current and previous state of the table to detect whether rebinding is necessary or not.
     * The diffing happens for the sorters, filters, aggregation, parameters, and the path of the binding. Other
     * {@link sap.ui.base.ManagedObject.AggregationBindingInfo binding info} keys like `events`, `model`...
     * must be provided in the {@link #updateBindingInfo updateBindingInfo} method always, and those keys must
     * not be changed conditionally.
     */
    updateBinding(
      /**
       * Instance of the table
       */
      oTable: Table,
      /**
       * The binding info object to be used to bind the table to the model.
       */
      oBindingInfo: AggregationBindingInfo,
      /**
       * The binding instance of the table
       */
      oBinding?: ListBinding
    ): void;
  }
  const TableDelegate: TableDelegate;
  export default TableDelegate;
}

declare module "sap/ui/mdc/odata/v4/TypeMap" {
  /**
   * @since 1.114.0
   *
   * ODataV4-specific `TypeMap` configuration
   *
   * **Note:** This `TypeMap` implementation contains the following types including ODataV4-specific configuration:
   *
   *
   * 	 - sap.ui.model.type.Boolean (alias Boolean)
   * 	 - sap.ui.model.type.Currency (alias Currency)
   * 	 - sap.ui.model.type.Date (alias Date)
   * 	 - sap.ui.model.type.DateTime (alias DateTime)
   * 	 - sap.ui.model.type.Float (alias Float)
   * 	 - sap.ui.model.type.Integer (alias Integer)
   * 	 - sap.ui.model.type.String (alias String)
   * 	 - sap.ui.model.type.Time (alias Time)
   * 	 - sap.ui.model.type.Unit (alias Unit)
   * 	 - sap.ui.model.odata.type.Stream (alias Edm.Binary)
   * 	 - sap.ui.model.odata.type.Boolean (alias Edm.Boolean)
   * 	 - sap.ui.model.odata.type.Byte (alias Edm.Byte)
   * 	 - sap.ui.model.odata.type.Date (alias Edm.Date)
   * 	 - sap.ui.model.odata.type.DateTime (alias Edm.DateTime)
   * 	 - sap.ui.model.odata.type.DateTimeOffset (alias Edm.DateTimeOffset)
   * 	 - sap.ui.model.odata.type.Decimal (alias Edm.Decimal)
   * 	 - sap.ui.model.odata.type.Double (alias Edm.Double)
   * 	 - sap.ui.model.odata.type.Single (alias Edm.Float)
   * 	 - sap.ui.model.odata.type.Guid (alias Edm.Guid)
   * 	 - sap.ui.model.odata.type.Int16 (alias Edm.Int16)
   * 	 - sap.ui.model.odata.type.Int32 (alias Edm.Int32)
   * 	 - sap.ui.model.odata.type.Int64 (alias Edm.Int64)
   * 	 - sap.ui.model.odata.type.SByte (alias Edm.SByte)
   * 	 - sap.ui.model.odata.type.Single (alias Edm.Single)
   * 	 - sap.ui.model.odata.type.Stream (alias Edm.Stream)
   * 	 - sap.ui.model.odata.type.String (alias Edm.String)
   * 	 - sap.ui.model.odata.type.Time (alias Edm.Time)
   * 	 - sap.ui.model.odata.type.TimeOfDay (alias Edm.TimeOfDay)
   */
  interface TypeMap {}
  const TypeMap: TypeMap;
  export default TypeMap;
}

declare module "sap/ui/mdc/TableDelegate" {
  import Table from "sap/ui/mdc/Table";

  import Context from "sap/ui/model/Context";

  import FilterField from "sap/ui/mdc/FilterField";

  import Filter from "sap/ui/model/Filter";

  import Sorter from "sap/ui/model/Sorter";

  import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";

  import ListBinding from "sap/ui/model/ListBinding";

  /**
   * @since 1.60
   *
   * Base delegate for {@link sap.ui.mdc.Table}.
   */
  interface TableDelegate {
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Collapses all nodes.
     */
    collapseAll(
      /**
       * Instance of the MDC table
       */
      oTable: Table
    ): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Expands all nodes.
     */
    expandAll(
      /**
       * Instance of the MDC table
       */
      oTable: Table
    ): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Returns the feature set for exporting data in the MDC Table.
     *
     * @returns Export capabilities with specific features
     */
    fetchExportCapabilities(
      /**
       * Instance of the MDC table
       */
      oTable: Table
    ): Promise<any>;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Formats the title text of a group header row of the table.
     *
     * @returns The group header title. If `undefined` is returned, the default group header title is set.
     */
    formatGroupHeader(
      /**
       * Instance of the MDC table
       */
      oTable: Table,
      /**
       * Binding context
       */
      oContext: Context,
      /**
       * The name of the grouped property
       */
      sProperty: string
    ): string | undefined;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Returns the filter delegate of the table that provides basic filter functionality, such as adding filter
     * fields. **Note:** The functionality provided in this delegate acts as a subset of a `FilterBarDelegate`
     * to enable the table for inbuilt filtering.
     *
     * @returns Object for the tables filter personalization
     */
    getFilterDelegate(): {
      addItem: (p1: Table, p2: string) => Promise<FilterField>;
    };
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Returns filters that are used when updating the table's binding and are created based on the filter conditions
     * of the table and its associated filter control.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Creates a new sorter for the grouping functionality.
     *
     * @returns New sorter
     */
    getGroupSorter(
      /**
       * Instance of the MDC table
       */
      oTable: Table,
      /**
       * Property to group
       */
      sPropertyName: string
    ): Sorter | undefined;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Returns the sort conditions that are used when updating the table's binding.
     *
     * @returns Sort Conditions
     */
    getSorters(
      /**
       * Instance of the MDC table
       */
      oTable: Table
    ): Sorter[];
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Rebinds the table.
     */
    rebind(
      /**
       * Instance of the MDC table
       */
      oTable: Table,
      /**
       * The binding info object to be used to bind the table to the model
       */
      oBindingInfo: AggregationBindingInfo
    ): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Updates the row binding of the table.
     *
     * The default implementation rebinds the table, but model-specific subclasses must call dedicated binding
     * methods to update the binding instead of using {@link #rebind}.
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
      oBinding?: ListBinding
    ): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Provides a hook to update the binding info object that is used to bind the table to the model.
     */
    updateBindingInfo(
      /**
       * Instance of the MDC table
       */
      oTable: Table,
      /**
       * The binding info object to be used to bind the table to the model
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
   * @since 1.114.0
   *
   * Configuration class for type-handling in MDC delegates. Allows mapping of model-types to `sap.ui.mdc.enums.BaseType`
   * and enables model-specific type configuration.
   *
   * **Note:** This utility is experimental and the API/behavior is not finalized and hence this should not
   * be used for productive usage.
   */
  interface TypeMap {
    /**
     * Exports the TypeMap's current data
     *
     * @returns Array created from this TypeMap's internal map
     */
    export(): any[];
    /**
     *
     * @returns converted value
     */
    externalizeValue(
      /**
       * typed value
       */
      vValue: object,
      /**
       * Data type considered for conversion
       */
      vType: string | SimpleType,
      /**
       * formatoptions for the dataType
       */
      oFormatOptions?: object,
      /**
       * constraints for the dataType
       */
      oConstraints?: object
    ): string;
    /**
     * Prevents further manipulation of a TypeMap's data
     */
    freeze(): void;
    /**
     *
     * @returns output `Date`, `DateTime` or `Time`...
     */
    getBaseType(
      /**
       * Given type string or sap.ui.model.SimpleType
       */
      sType: string,
      /**
       * Used `FormatOptions`
       */
      oFormatOptions: object,
      /**
       * Used `Constraints`
       */
      oConstraints: object
    ): BaseType | keyof typeof BaseType;
    /**
     *
     * @returns output `Date`, `DateTime` or `Time`...
     */
    getBaseTypeForType(
      /**
       * Given type string or sap.ui.model.SimpleType
       */
      oType: SimpleType
    ): string;
    /**
     *
     * @returns creates returns a dataType class
     */
    getDataTypeClass(
      /**
       * Class path as string where each name is separated by '.'
       */
      sDataType: string
    ): SimpleType;
    /**
     *
     * @returns Data type name
     */
    getDataTypeClassName(
      /**
       * Given model specific type
       */
      sType: string
    ): string;
    /**
     *
     * @returns creates returns an instance of the resolved dataType
     */
    getDataTypeInstance(
      /**
       * Class path as string where each name is separated by '.'
       */
      sDataType: string,
      /**
       * formatoptions for the dataType
       */
      oFormatOptions?: object,
      /**
       * constraints for the dataType
       */
      oConstraints?: object,
      /**
       * Additional options for overrides
       */
      oOptions?: object
    ): SimpleType;
    /**
     *
     * @returns output returns typeConfig object
     */
    getTypeConfig(
      /**
       * Given dataType as string or type
       */
      vType: string | SimpleType,
      /**
       * formatoptions for the given dataType
       */
      oFormatOptions?: object,
      /**
       * constraints for the given dataType
       */
      oConstraints?: object
    ): /* was: sap.ui.mdc.TypeConfig */ any;
    /**
     * Imports a TypeMap's data into another TypeMap
     */
    import(
      /**
       * TypeMap to import
       */
      oTypeMap: /* was: sap.ui.mdc.util.TypeMap */ any
    ): void;
    /**
     *
     * @returns converted value
     */
    internalizeValue(
      /**
       * externalized value
       */
      vValue: string,
      /**
       * Data type considered for conversion
       */
      vType: string | SimpleType,
      /**
       * formatoptions for the dataType
       */
      oFormatOptions?: object,
      /**
       * constraints for the dataType
       */
      oConstraints?: object
    ): object;
    /**
     * Sets a BaseType and an optional model- or scenario-specific configuration method for a given sap.ui.model.SimpleType
     * ObjectPath string
     *
     * As default `string` is returned.
     */
    set(
      /**
       * Objectpath string for sap.ui.model.SimpleType
       */
      sType: string,
      /**
       * BaseType fitting the given sType or method returning a BaseType based on type configuration
       */
      vBaseType: (BaseType | keyof typeof BaseType) | Function,
      /**
       * Optional customizing method for formatoptions and constraints. See `sap.ui.mdc.DefaultTypeMap` for examples.
       */
      fnOptions?: Function
    ): void;
    /**
     * Allows alternative identifiers for Types, such as "Boolean" for "sap.ui.model.type.Boolean"
     */
    setAlias(
      /**
       * Objectpath string for sap.ui.model.SimpleType
       */
      sType: string,
      /**
       * Alternative identifier for sType
       */
      sAlias: string
    ): void;
  }
  const TypeMap: TypeMap;
  export default TypeMap;
}

declare module "sap/ui/mdc/ValueHelpDelegate" {
  import ValueHelp from "sap/ui/mdc/ValueHelp";

  import ListBinding from "sap/ui/model/ListBinding";

  import FilterableListContent from "sap/ui/mdc/valuehelp/base/FilterableListContent";

  import Context from "sap/ui/model/Context";

  import Control from "sap/ui/core/Control";

  import UI5Element from "sap/ui/core/Element";

  import { ConditionObject } from "sap/ui/mdc/condition/Condition";

  import Content from "sap/ui/mdc/valuehelp/base/Content";

  import ValueHelpPropagationReason from "sap/ui/mdc/enums/ValueHelpPropagationReason";

  import Container from "sap/ui/mdc/valuehelp/base/Container";

  import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @since 1.95.0
   *
   * Delegate for {@link sap.ui.mdc.ValueHelp ValueHelp}.
   *  **Note:** The class is experimental and the API/behavior is not finalized and hence this should not
   * be used for productive usage.
   */
  interface ValueHelpDelegate {
    /**
     * Checks if the `ListBinding` is waiting for an update. As long as the context has not been set for `ListBinding`,
     * `ValueHelp` needs to wait.
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
     * @since 1.101.0
     *
     * Provides the possibility to convey custom data in conditions. This enables an application to enhance
     * conditions with data relevant for combined key or outparameter scenarios.
     *
     * @returns Optionally returns a serializeable object to be stored in the condition payload field.
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
       * key, description pair for the condition which is to be created.
       */
      aValues: any[],
      /**
       * optional additional context
       */
      oContext?: Context
    ): undefined | object;
    /**
     * Executes a filter in a `ListBinding`.
     *
     * @returns Promise that is resolved if search is executed
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
     * @since 1.106.0
     *
     * This method should provide a map of conditions for the following situations: 1. Initial set of conditions
     * applied everytime a value help content is shown for the first time since opening it's container. 2. Detailed
     * set of conditions in getItemForValue scenarios allowing to find a specific ValueHelpItem (indicated by
     * oConfig availability)
     *
     * @returns Returns a map of conditions
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
      oConfig?: {
        /**
         * Value as entered by user
         */
        value: any;
        /**
         * Value parsed by type to fit the data type of the key
         */
        parsedValue?: any;
        /**
         * Contextual information provided by condition payload or inParameters/outParameters. This is only filled
         * if the description needs to be determined for an existing condition.
         */
        context?: {
          /**
           * In parameters of the current condition (InParameter are not used any longer, but it might be filled in
           * older conditiotions stored in variants.)
           */
          inParameter?: object;
          /**
           * Out parameters of the current condition (OutParameter are not used any longer, but it might be filled
           * in older conditiotions stored in variants.)
           */
          ouParameter?: object;
          /**
           * Payload of the current condition
           */
          payload?: object;
        };
        /**
         * Instance of the calling control
         */
        control: Control;
        /**
         * `BindingContext` of the checked field. Inside a table the `ValueHelp` element might be connected to a
         * different row.
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
      }
    ): Promise<object> | object;
    /**
     * @since 1.101.0
     *
     * Provides type information for listcontent filtering
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
       * set of conditions to create filters for
       */
      oConditions: object
    ): object;
    /**
     * @since 1.101.0
     *
     * Provides the possibility to customize selections in 'Select from list' scenarios. By default, only condition
     * keys are considered. This may be extended with payload dependent filters.
     *
     * @returns True, if item is selected
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
      oItem: UI5Element,
      /**
       * current conditions
       */
      aConditions: ConditionObject[]
    ): boolean;
    /**
     * Checks if a `ListBinding` supports $Search.
     *
     * @returns true if $search is supported
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
       * ListBinding
       */
      oListBinding: ListBinding
    ): boolean;
    /**
     * @since 1.101.0
     *
     * Provides the possibility to customize selection events in 'Select from list' scenarios. This enables
     * an application to reuse conditions in collective search scenarios, instead of always creating new ones.
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
     * @since 1.101.0
     *
     * Callback invoked everytime a {@link sap.ui.mdc.ValueHelp ValueHelp} fires a select event or the value
     * of the corresponding field changes This callback may be used to update external fields.
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
       * current configuration provided by the calling control
       */
      oConfig: object
    ): void;
    /**
     * Requests the content of the value help.
     *
     * This function is called when the value help is opened or a key or description is requested.
     *
     * So, depending on the value help content used, all content controls and data need to be assigned. Once
     * they are assigned and the data is set, the returned `Promise` needs to be resolved. Only then does the
     * value help continue opening or reading data.
     *
     * @returns Promise that is resolved if all content is available
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
       * id of the content shown after this call to retrieveContent
       */
      sContentId: string
    ): Promise<any>;
    /**
     * @since 1.110.0
     *
     * Controls if a typeahead should be opened or closed
     *
     * @returns Boolean or Promise resolving to a boolean indicating the desired behavior
     */
    showTypeahead(
      /**
       * The `ValueHelp` control instance
       */
      oValueHelp: ValueHelp,
      /**
       * ValueHelp content requesting conditions configuration
       */
      oContent: Content
    ): Promise<any> | boolean;
    /**
     * @since 1.110.0
     *
     * Executes a filter in a `ListBinding` and resumes it, if suspended.
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
       * The binding info object to be used to bind the list to the model
       */
      oBindingInfo: AggregationBindingInfo,
      /**
       * ValueHelp content requesting the binding update
       */
      oContent: FilterableListContent
    ): void;
    /**
     * @since 1.110.0
     *
     * Adjustable filtering for list-based contents
     */
    updateBindingInfo(
      /**
       * The `ValueHelp` control instance
       */
      oValueHelp: ValueHelp,
      /**
       * ValueHelp content requesting conditions configuration
       */
      oContent: FilterableListContent,
      /**
       * The binding info object to be used to bind the list to the model
       */
      oBindingInfo: AggregationBindingInfo
    ): void;
  }
  const ValueHelpDelegate: ValueHelpDelegate;
  export default ValueHelpDelegate;
}

declare module "sap/ui/mdc/library" {
  import FieldDisplay from "sap/ui/mdc/enums/FieldDisplay";

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

  export namespace filterbar {
    /**
     * @since 1.112.0
     */
    type PropertyInfo = {
      /**
       * The identifier of the property
       */
      path: string;
      /**
       * The alternative identifier of the property. Either path or name can be used, preferably is on path
       */
      name?: string;
      /**
       * The label of the identifier
       */
      label: string;
      /**
       * The tooltip of the identifier
       */
      tooltip?: string;
      /**
       * The name of the type of the property
       */
      datatype: string;
      /**
       * Defines constraints for the data type of the property
       */
      constraints?: object;
      /**
       * Defines format options for the data type of the property
       */
      formatOptions?: object;
      /**
       * The group identifier to which the property belongs
       */
      group?: string;
      /**
       * The group name of the group identifier
       */
      groupLabel?: string;
      /**
       * Defines that the filter value is treated as case-sensitive if set to `true`
       */
      caseSensitive?: boolean;
      /**
       * Describes how the value will be presented to the user
       */
      display?: FieldDisplay | keyof typeof FieldDisplay;
      /**
       * Defines if the filter is visible in the filter bar
       */
      hiddenFilter?: boolean;
      /**
       * Defines if the filter is mandatory
       */
      required?: boolean;
      /**
       * Defines if the filter supports multiple values `-1` or single values `1`
       */
      maxConditions: int;
    };
  }

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
      name: string;
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
      name: string;
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
      name: string;
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
}

declare module "sap/ui/mdc/ActionToolbar" {
  import {
    default as OverflowToolbar,
    $OverflowToolbarSettings,
  } from "sap/m/OverflowToolbar";

  import ActionToolbarAction from "sap/ui/mdc/actiontoolbar/ActionToolbarAction";

  import Control from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @since 1.58
   *
   * The column for the metadata driven table, that hold the template to be shown when the rows has data.
   */
  export default class ActionToolbar extends OverflowToolbar {
    /**
     * Constructor for a new ActionToolbar.
     *  **Note:**
     *  The control is experimental and the API / behavior is not finalized. It should only be used internally
     * in other mdc controls (e.g. chart/table).
     *  The content aggregation of the control must not be used.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $ActionToolbarSettings
    );
    /**
     * Constructor for a new ActionToolbar.
     *  **Note:**
     *  The control is experimental and the API / behavior is not finalized. It should only be used internally
     * in other mdc controls (e.g. chart/table).
     *  The content aggregation of the control must not be used.
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
      mSettings?: $ActionToolbarSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.ActionToolbar with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.m.OverflowToolbar.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ActionToolbar>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.ActionToolbar.
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
      oAction: ActionToolbarAction
    ): this;
    /**
     * Adds some begin to the aggregation {@link #getBegin begin}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addBegin(
      /**
       * The begin to add; if empty, nothing is inserted
       */
      oBegin: Control
    ): this;
    /**
     * Adds some between to the aggregation {@link #getBetween between}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addBetween(
      /**
       * The between to add; if empty, nothing is inserted
       */
      oBetween: Control
    ): this;
    /**
     * Adds some end to the aggregation {@link #getEnd end}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addEnd(
      /**
       * The end to add; if empty, nothing is inserted
       */
      oEnd: Control
    ): this;
    /**
     * Destroys all the actions in the aggregation {@link #getActions actions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyActions(): this;
    /**
     * Destroys all the begin in the aggregation {@link #getBegin begin}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyBegin(): this;
    /**
     * Destroys all the between in the aggregation {@link #getBetween between}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyBetween(): this;
    /**
     * Destroys all the end in the aggregation {@link #getEnd end}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyEnd(): this;
    /**
     * Gets content of aggregation {@link #getActions actions}.
     *
     * Further actions in the toolbar.
     */
    getActions(): ActionToolbarAction[];
    /**
     * Gets content of aggregation {@link #getBegin begin}.
     *
     * Content shown at the begin of the toolbar (e.g. Title).
     */
    getBegin(): Control[];
    /**
     * Gets content of aggregation {@link #getBetween between}.
     *
     * Content shown between the title and actions on the toolbar.
     */
    getBetween(): Control[];
    /**
     * Gets content of aggregation {@link #getEnd end}.
     *
     * Content at the end of the toolbar.
     */
    getEnd(): Control[];
    /**
     * Gets current value of property {@link #getUseAsHeader useAsHeader}.
     *
     * Determines whether the toolbar is used as header (e.g. for a table).
     *
     * Default value is `true`.
     *
     * @returns Value of property `useAsHeader`
     */
    getUseAsHeader(): boolean;
    /**
     * Checks for the provided `sap.ui.mdc.actiontoolbar.ActionToolbarAction` in the aggregation {@link #getActions actions}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfAction(
      /**
       * The action whose index is looked for
       */
      oAction: ActionToolbarAction
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getBegin begin}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfBegin(
      /**
       * The begin whose index is looked for
       */
      oBegin: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getBetween between}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfBetween(
      /**
       * The between whose index is looked for
       */
      oBetween: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getEnd end}. and returns its
     * index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfEnd(
      /**
       * The end whose index is looked for
       */
      oEnd: Control
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
      oAction: ActionToolbarAction,
      /**
       * The `0`-based index the action should be inserted at; for a negative value of `iIndex`, the action is
       * inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted
       * at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a begin into the aggregation {@link #getBegin begin}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertBegin(
      /**
       * The begin to insert; if empty, nothing is inserted
       */
      oBegin: Control,
      /**
       * The `0`-based index the begin should be inserted at; for a negative value of `iIndex`, the begin is inserted
       * at position 0; for a value greater than the current size of the aggregation, the begin is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a between into the aggregation {@link #getBetween between}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertBetween(
      /**
       * The between to insert; if empty, nothing is inserted
       */
      oBetween: Control,
      /**
       * The `0`-based index the between should be inserted at; for a negative value of `iIndex`, the between
       * is inserted at position 0; for a value greater than the current size of the aggregation, the between
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a end into the aggregation {@link #getEnd end}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertEnd(
      /**
       * The end to insert; if empty, nothing is inserted
       */
      oEnd: Control,
      /**
       * The `0`-based index the end should be inserted at; for a negative value of `iIndex`, the end is inserted
       * at position 0; for a value greater than the current size of the aggregation, the end is inserted at the
       * last position
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
      vAction: int | string | ActionToolbarAction
    ): ActionToolbarAction | null;
    /**
     * Removes all the controls from the aggregation {@link #getActions actions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllActions(): ActionToolbarAction[];
    /**
     * Removes all the controls from the aggregation {@link #getBegin begin}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllBegin(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getBetween between}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllBetween(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getEnd end}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllEnd(): Control[];
    /**
     * Removes a begin from the aggregation {@link #getBegin begin}.
     *
     * @returns The removed begin or `null`
     */
    removeBegin(
      /**
       * The begin to remove or its index or id
       */
      vBegin: int | string | Control
    ): Control | null;
    /**
     * Removes a between from the aggregation {@link #getBetween between}.
     *
     * @returns The removed between or `null`
     */
    removeBetween(
      /**
       * The between to remove or its index or id
       */
      vBetween: int | string | Control
    ): Control | null;
    /**
     * Removes a end from the aggregation {@link #getEnd end}.
     *
     * @returns The removed end or `null`
     */
    removeEnd(
      /**
       * The end to remove or its index or id
       */
      vEnd: int | string | Control
    ): Control | null;
    /**
     * Sets a new value for property {@link #getUseAsHeader useAsHeader}.
     *
     * Determines whether the toolbar is used as header (e.g. for a table).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setUseAsHeader(
      /**
       * New value for property `useAsHeader`
       */
      bUseAsHeader?: boolean
    ): this;
  }

  export interface $ActionToolbarSettings extends $OverflowToolbarSettings {
    /**
     * Determines whether the toolbar is used as header (e.g. for a table).
     */
    useAsHeader?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Content shown at the begin of the toolbar (e.g. Title).
     */
    begin?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Content shown between the title and actions on the toolbar.
     */
    between?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Further actions in the toolbar.
     */
    actions?:
      | ActionToolbarAction[]
      | ActionToolbarAction
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Content at the end of the toolbar.
     */
    end?: Control[] | Control | AggregationBindingInfo | `{${string}}`;
  }
}

declare module "sap/ui/mdc/actiontoolbar/ActionToolbarAction" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { IOverflowToolbarContent } from "sap/m/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @since 1.58
   *
   * The action for an {@link sap.ui.mdc.ActionToolbar ActionToolbar} control
   */
  export default class ActionToolbarAction
    extends Control
    implements IOverflowToolbarContent {
    __implements__sap_m_IOverflowToolbarContent: boolean;
    /**
     * Constructor for a new ActionToolbarAction.
     *  **Note:**
     *  The control is experimental and the API / behavior is not finalized. It should only be used internally
     * in other mdc controls (e.g. chart/table).
     *
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
     *  **Note:**
     *  The control is experimental and the API / behavior is not finalized. It should only be used internally
     * in other mdc controls (e.g. chart/table).
     *
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Destroys the action in the aggregation {@link #getAction action}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyAction(): this;
    /**
     * Gets content of aggregation {@link #getAction action}.
     *
     * Action
     */
    getAction(): Control;
    /**
     * Gets current value of property {@link #getLayoutInformation layoutInformation}.
     *
     * Layout information
     *
     * Default value is `...see text or source`.
     *
     * @returns Value of property `layoutInformation`
     */
    getLayoutInformation(): object;
    /**
     * Sets the aggregated {@link #getAction action}.
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
     * Layout information
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `...see text or source`.
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

  export interface $ActionToolbarActionSettings extends $ControlSettings {
    /**
     * Layout information
     */
    layoutInformation?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Action
     */
    action?: Control;
  }
}

declare module "sap/ui/mdc/Chart" {
  import { default as Control, $ControlSettings } from "sap/ui/mdc/Control";

  import Control1 from "sap/ui/core/Control";

  import Item from "sap/ui/mdc/chart/Item";

  import { ID, TitleLevel, CSSSize } from "sap/ui/core/library";

  import ChartToolbarActionType from "sap/ui/mdc/enums/ChartToolbarActionType";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import ChartP13nMode from "sap/ui/mdc/enums/ChartP13nMode";

  import SelectionDetailsActions from "sap/ui/mdc/chart/SelectionDetailsActions";

  import VariantManagement from "sap/ui/fl/variants/VariantManagement";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import Event from "sap/ui/base/Event";

  import Item1 from "sap/ui/core/Item";

  import Context from "sap/ui/model/Context";

  import { SelectionDetailsActionLevel } from "sap/m/library";

  /**
   * @since 1.88
   * @experimental (since 1.88)
   *
   * The `Chart` control creates a chart based on metadata and the configuration specified.
   *  **Note:** The inner chart needs to be assigned `ChartDelegate`.
   */
  export default class Chart extends Control {
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
      oAction: Control1
    ): this;
    /**
     * Adds some item to the aggregation {@link #getItems items}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addItem(
      /**
       * The item to add; if empty, nothing is inserted
       */
      oItem: Item
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
     * Destroys all the actions in the aggregation {@link #getActions actions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyActions(): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;
    /**
     * @since 1.107
     *
     * Destroys the noData in the aggregation {@link #getNoData noData}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyNoData(): this;
    /**
     * Destroys the selectionDetailsActions in the aggregation {@link #getSelectionDetailsActions selectionDetailsActions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySelectionDetailsActions(): this;
    /**
     * Destroys the variant in the aggregation {@link #getVariant variant}.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:selectionDetailsActionPressed selectionDetailsActionPressed} to attached listeners.
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
     * @returns Value of property `chartType`
     */
    getChartType(): string;
    /**
     * Retrieves the chart type layout configuration. **Note:** This is only used inside personalization.
     *
     * @returns Layout configuration
     */
    getChartTypeLayoutConfig(): object;
    /**
     * Getter for `Conditions` set in the personalization settings.
     *
     * @returns Filters set in the chart
     */
    getConditions(): object;
    /**
     * Gets current value of property {@link #getDelegate delegate}.
     *
     * Defines the module path of the metadata delegate.
     *
     * Default value is `...see text or source`.
     *
     * @returns Value of property `delegate`
     */
    getDelegate(): object;
    /**
     * @since 1.88
     *
     * ID of the element which is the current target of the association {@link #getFilter filter}, or `null`.
     */
    getFilter(): ID;
    /**
     * @since 1.99
     *
     * Gets current value of property {@link #getFilterConditions filterConditions}.
     *
     * Defines the filter conditions.
     *  **Note:** This property must not be bound.
     *  **Note:** This property is exclusively used for handling SAPUI5 flexibility changes. Do not use it for
     * anything else.
     *
     * Default value is `{}`.
     *
     * @returns Value of property `filterConditions`
     */
    getFilterConditions(): object;
    /**
     * Gets current value of property {@link #getHeader header}.
     *
     * Specifies header text that is shown in the chart.
     *
     * @returns Value of property `header`
     */
    getHeader(): string;
    /**
     * @since 1.104
     *
     * Gets current value of property {@link #getHeaderLevel headerLevel}.
     *
     * Semantic level of the header.
     *  For more information, see {@link sap.m.Title#setLevel}.
     *
     * Default value is `Auto`.
     *
     * @returns Value of property `headerLevel`
     */
    getHeaderLevel(): TitleLevel | keyof typeof TitleLevel;
    /**
     * @since 1.111
     *
     * Gets current value of property {@link #getHeaderVisible headerVisible}.
     *
     * Determines whether the header text is shown in the chart. Regardless of its value, the given header text
     * is used to label the chart correctly for accessibility purposes.
     *
     * Default value is `true`.
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
     * @returns Value of property `height`
     */
    getHeight(): CSSSize;
    /**
     * @since 1.88
     *
     * Gets current value of property {@link #getIgnoreToolbarActions ignoreToolbarActions}.
     *
     * Specifies which actions must not be available in the chart's toolbar.
     *
     * Default value is `[]`.
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
     * are also reflected here.
     */
    getItems(): Item[];
    /**
     * @since 1.88
     *
     * Gets current value of property {@link #getLegendVisible legendVisible}.
     *
     * Enables the legend of the chart. **Note:** The setter calls `setLegendVisible` of the delegate class.
     *
     * Default value is `true`.
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
     * @returns Value of property `minWidth`
     */
    getMinWidth(): CSSSize;
    /**
     * @since 1.107
     *
     * Gets content of aggregation {@link #getNoData noData}.
     *
     * Defines the custom visualization if there is no data available.
     *  This control will be displayed on top of the chart when no data is visible inside the chart.
     *  **Note:** If both a `noDataText` property and a `noData` aggregation are provided, the `noData` aggregation
     * takes priority.
     *  If the `noData` aggregation is undefined or set to null, the `noDataText` property is used instead.
     */
    getNoData(): Control1;
    /**
     * @since 1.88
     *
     * Gets current value of property {@link #getNoDataText noDataText}.
     *
     * Defines the no data text shown in the chart.
     *
     * Default value is `"No data"`.
     *
     * @returns Value of property `noDataText`
     */
    getNoDataText(): string;
    /**
     * @since 1.88
     *
     * Gets current value of property {@link #getP13nMode p13nMode}.
     *
     * Specifies the personalization options available for the chart.
     *  **Note:** The order of the provided options does not influence the arrangement of the icons on the UI.
     *
     * Default value is `[]`.
     *
     * @returns Value of property `p13nMode`
     */
    getP13nMode(): Array<ChartP13nMode | keyof typeof ChartP13nMode>;
    /**
     * @since 1.99
     *
     * Gets current value of property {@link #getPropertyInfo propertyInfo}.
     *
     * Specifies the chart metadata.
     *  **Note:** This property must not be bound.
     *  **Note:** This property is exclusively used for handling SAPUI5 flexibility changes. Do not use it otherwise.
     *
     *
     * **Note**: For more information about the supported inner elements, see {@link sap.ui.mdc.chart.PropertyInfo PropertyInfo}.
     *
     * Default value is `[]`.
     *
     * @returns Value of property `propertyInfo`
     */
    getPropertyInfo(): object;
    /**
     * Gets content of aggregation {@link #getSelectionDetailsActions selectionDetailsActions}.
     *
     * Feeds details actions for data point selection in the mdc chart.
     *  For more information, see {@link sap.ui.mdc.chart.SelectionDetailsActions SelectionDetailsActions}.
     */
    getSelectionDetailsActions(): SelectionDetailsActions;
    /**
     * Retrieves the selection handler of the inner chart.
     *
     * @returns Selection handler of the inner chart
     */
    getSelectionHandler(): object;
    /**
     * @since 1.88
     *
     * Gets current value of property {@link #getShowChartTooltip showChartTooltip}.
     *
     * Controls the visibility of the chart tooltip. If set to `true`, a call of the `delegate.setChartTooltipVisibility`
     * will be triggered and can be used to make the `Chart` tooltip visible.
     *
     * Default value is `true`.
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
     * @returns Value of property `showSelectionDetails`
     */
    getShowSelectionDetails(): boolean;
    /**
     * @since 1.88
     *
     * Gets current value of property {@link #getSortConditions sortConditions}.
     *
     * Defines the sort conditions.
     *
     *
     * **Note:** This property is exclusively used for handling SAPUI5 flexibility changes. Do not use it for
     * anything else.
     *
     * @returns Value of property `sortConditions`
     */
    getSortConditions(): object;
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
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
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
      oAction: Control1
    ): int;
    /**
     * Checks for the provided `sap.ui.mdc.chart.Item` in the aggregation {@link #getItems items}. and returns
     * its index if found or -1 otherwise.
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
     * Inserts a action into the aggregation {@link #getActions actions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertAction(
      /**
       * The action to insert; if empty, nothing is inserted
       */
      oAction: Control1,
      /**
       * The `0`-based index the action should be inserted at; for a negative value of `iIndex`, the action is
       * inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted
       * at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a item into the aggregation {@link #getItems items}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertItem(
      /**
       * The item to insert; if empty, nothing is inserted
       */
      oItem: Item,
      /**
       * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
       * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
       * the last position
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
      vAction: int | string | Control1
    ): Control1 | null;
    /**
     * Removes all the controls from the aggregation {@link #getActions actions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllActions(): Control1[];
    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): Item[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     *
     * @returns The removed item or `null`
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | Item
    ): Item | null;
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
     * Defines the module path of the metadata delegate.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `...see text or source`.
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
     * @since 1.88
     *
     * Sets the associated {@link #getFilter filter}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFilter(
      /**
       * ID of an element which becomes the new target of this filter association; alternatively, an element instance
       * may be given
       */
      oFilter: ID | /* was: sap.ui.mdc.IFilter */ any
    ): this;
    /**
     * @since 1.99
     *
     * Sets a new value for property {@link #getFilterConditions filterConditions}.
     *
     * Defines the filter conditions.
     *  **Note:** This property must not be bound.
     *  **Note:** This property is exclusively used for handling SAPUI5 flexibility changes. Do not use it for
     * anything else.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `{}`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFilterConditions(
      /**
       * New value for property `filterConditions`
       */
      oFilterConditions?: object
    ): this;
    /**
     * Sets a new value for property {@link #getHeader header}.
     *
     * Specifies header text that is shown in the chart.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * @since 1.104
     *
     * Sets a new value for property {@link #getHeaderLevel headerLevel}.
     *
     * Semantic level of the header.
     *  For more information, see {@link sap.m.Title#setLevel}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Auto`.
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
     * @since 1.111
     *
     * Sets a new value for property {@link #getHeaderVisible headerVisible}.
     *
     * Determines whether the header text is shown in the chart. Regardless of its value, the given header text
     * is used to label the chart correctly for accessibility purposes.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeight(
      /**
       * New value for property `height`
       */
      sHeight?: CSSSize
    ): this;
    /**
     * @since 1.88
     *
     * Sets a new value for property {@link #getIgnoreToolbarActions ignoreToolbarActions}.
     *
     * Specifies which actions must not be available in the chart's toolbar.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `[]`.
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
     * @since 1.88
     *
     * Sets a new value for property {@link #getLegendVisible legendVisible}.
     *
     * Enables the legend of the chart. **Note:** The setter calls `setLegendVisible` of the delegate class.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setMinWidth(
      /**
       * New value for property `minWidth`
       */
      sMinWidth?: CSSSize
    ): this;
    /**
     * @since 1.107
     *
     * Sets the aggregated {@link #getNoData noData}.
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
     * @since 1.88
     *
     * Sets a new value for property {@link #getP13nMode p13nMode}.
     *
     * Specifies the personalization options available for the chart.
     *  **Note:** The order of the provided options does not influence the arrangement of the icons on the UI.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `[]`.
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
     * @since 1.99
     *
     * Sets a new value for property {@link #getPropertyInfo propertyInfo}.
     *
     * Specifies the chart metadata.
     *  **Note:** This property must not be bound.
     *  **Note:** This property is exclusively used for handling SAPUI5 flexibility changes. Do not use it otherwise.
     *
     *
     * **Note**: For more information about the supported inner elements, see {@link sap.ui.mdc.chart.PropertyInfo PropertyInfo}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `[]`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setPropertyInfo(
      /**
       * New value for property `propertyInfo`
       */
      oPropertyInfo?: object
    ): this;
    /**
     * Sets the aggregated {@link #getSelectionDetailsActions selectionDetailsActions}.
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
     * @since 1.88
     *
     * Sets a new value for property {@link #getShowChartTooltip showChartTooltip}.
     *
     * Controls the visibility of the chart tooltip. If set to `true`, a call of the `delegate.setChartTooltipVisibility`
     * will be triggered and can be used to make the `Chart` tooltip visible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowSelectionDetails(
      /**
       * New value for property `showSelectionDetails`
       */
      bShowSelectionDetails?: boolean
    ): this;
    /**
     * @since 1.88
     *
     * Sets a new value for property {@link #getSortConditions sortConditions}.
     *
     * Defines the sort conditions.
     *
     *
     * **Note:** This property is exclusively used for handling SAPUI5 flexibility changes. Do not use it for
     * anything else.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSortConditions(
      /**
       * New value for property `sortConditions`
       */
      oSortConditions: object
    ): this;
    /**
     * Sets the aggregated {@link #getVariant variant}.
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
   * 	 - `label`
   * 	 - `propertyPath`
   */
  export type PropertyInfo = {
    /**
     * The path to the property in the back end
     */
    propertyPath: string;
    /**
     * The identifier of the property
     */
    name?: string;
    /**
     * The label of the identifier
     */
    label: string;
    /**
     * The tooltip of the identifier
     */
    tooltip?: string;
    /**
     * The name of the type of the property
     */
    datatype: string;
    /**
     * Defines constraints for the data type of the property
     */
    constraints?: object;
    /**
     * Defines formatting options for the data type of the property
     */
    formatOptions?: object;
    /**
     * Defines if the filter is mandatory
     */
    required?: boolean;
    /**
     * Defines if the filter supports multiple values `-1` or single values `1`
     */
    maxConditions: int;
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
  };

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
     * Defines the module path of the metadata delegate.
     */
    delegate?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies header text that is shown in the chart.
     */
    header?: string | PropertyBindingInfo;

    /**
     * @since 1.88
     *
     * Defines the no data text shown in the chart.
     */
    noDataText?: string | PropertyBindingInfo;

    /**
     * @since 1.88
     *
     * Specifies the personalization options available for the chart.
     *  **Note:** The order of the provided options does not influence the arrangement of the icons on the UI.
     */
    p13nMode?:
      | Array<ChartP13nMode | keyof typeof ChartP13nMode>
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * @since 1.88
     *
     * Enables the legend of the chart. **Note:** The setter calls `setLegendVisible` of the delegate class.
     */
    legendVisible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.88
     *
     * Specifies which actions must not be available in the chart's toolbar.
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
     * @since 1.88
     *
     * Defines the sort conditions.
     *
     *
     * **Note:** This property is exclusively used for handling SAPUI5 flexibility changes. Do not use it for
     * anything else.
     */
    sortConditions?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.99
     *
     * Defines the filter conditions.
     *  **Note:** This property must not be bound.
     *  **Note:** This property is exclusively used for handling SAPUI5 flexibility changes. Do not use it for
     * anything else.
     */
    filterConditions?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.88
     *
     * Controls the visibility of the chart tooltip. If set to `true`, a call of the `delegate.setChartTooltipVisibility`
     * will be triggered and can be used to make the `Chart` tooltip visible.
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
     * @since 1.99
     *
     * Specifies the chart metadata.
     *  **Note:** This property must not be bound.
     *  **Note:** This property is exclusively used for handling SAPUI5 flexibility changes. Do not use it otherwise.
     *
     *
     * **Note**: For more information about the supported inner elements, see {@link sap.ui.mdc.chart.PropertyInfo PropertyInfo}.
     */
    propertyInfo?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.104
     *
     * Semantic level of the header.
     *  For more information, see {@link sap.m.Title#setLevel}.
     */
    headerLevel?:
      | (TitleLevel | keyof typeof TitleLevel)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * @since 1.111
     *
     * Determines whether the header text is shown in the chart. Regardless of its value, the given header text
     * is used to label the chart correctly for accessibility purposes.
     */
    headerVisible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * This property describes the measures and dimensions visible in the chart. Changes in the personalization
     * are also reflected here.
     */
    items?: Item[] | Item | AggregationBindingInfo | `{${string}}`;

    /**
     * This aggregation describes actions that are added to the chart toolbar.
     *  For more information, see {@link sap.ui.mdc.actiontoolbar.ActionToolbarAction}.
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
     * @since 1.107
     *
     * Defines the custom visualization if there is no data available.
     *  This control will be displayed on top of the chart when no data is visible inside the chart.
     *  **Note:** If both a `noDataText` property and a `noData` aggregation are provided, the `noData` aggregation
     * takes priority.
     *  If the `noData` aggregation is undefined or set to null, the `noDataText` property is used instead.
     */
    noData?: Control1;

    /**
     * @since 1.88
     *
     * Control or object that enables the chart to do filtering, such as {@link sap.ui.mdc.FilterBar}. Also
     * see {@link sap.ui.mdc.IFilter}.
     */
    filter?: /* was: sap.ui.mdc.IFilter */ any | string;

    /**
     * This event is fired when a `SelectionDetailsAction` is pressed.
     */
    selectionDetailsActionPressed?: (
      oEvent: Event<Chart$SelectionDetailsActionPressedEventParameters>
    ) => void;
  }

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
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'Chart$SelectionDetailsActionPressedEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $ChartSelectionDetailsActionPressedEventParameters = Chart$SelectionDetailsActionPressedEventParameters;

  export type Chart$SelectionDetailsActionPressedEvent = Event<Chart$SelectionDetailsActionPressedEventParameters>;
}

declare module "sap/ui/mdc/chart/ChartImplementationContainer" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @since 1.105
   *
   * The `ChartImplementationContainer` creates a container for the `content` (chart) and `noDataContent`.
   * Based on the `showNoDataStruct` the `content` or `noDataContent` will be shown.
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Destroys the content in the aggregation {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;
    /**
     * Destroys the noDataContent in the aggregation {@link #getNoDataContent noDataContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyNoDataContent(): this;
    /**
     * ID of the element which is the current target of the association {@link #getChartNoDataContent chartNoDataContent},
     * or `null`.
     */
    getChartNoDataContent(): ID;
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
     *  To show this `noDataContent`, set {@link ap.ui.mdc.chart.ChartImplementationContainer#showNoDataStruct showNoDataStruct}.
     */
    getNoDataContent(): Control;
    /**
     * Gets current value of property {@link #getShowNoDataStruct showNoDataStruct}.
     *
     * Toggles the visibility of the noDataContent & content
     *
     * Default value is `true`.
     *
     * @returns Value of property `showNoDataStruct`
     */
    getShowNoDataStruct(): boolean;
  }

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
     *  To show this `noDataContent`, set {@link ap.ui.mdc.chart.ChartImplementationContainer#showNoDataStruct showNoDataStruct}.
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
   * @since 1.88
   *
   * The `ChartSelectionDetails` control creates a `sap.m.SelectionDetails` popover based on metadata and
   * the configuration specified.
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $ChartSelectionDetailsSettings
    extends $SelectionDetailsSettings {}
}

declare module "sap/ui/mdc/chart/Item" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @since 1.88
   *
   * The `Item` control for the chart/property metadata used within MDC Chart. An instance can be created
   * to override the default/metadata behavior.
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getLabel label}.
     *
     * Label for the item, either as a string literal or by a pointer, using the binding to some property containing
     * the label.
     *
     * @returns Value of property `label`
     */
    getLabel(): string;
    /**
     * @deprecated (since 1.115) - Please use `propertyKey` instead.
     *
     * Gets current value of property {@link #getName name}.
     *
     * The unique identifier of the chart item that reflects the name of the data property in the resulting
     * data set.
     *
     * @returns Value of property `name`
     */
    getName(): string;
    /**
     * @since 1.115
     *
     * Gets current value of property {@link #getPropertyKey propertyKey}.
     *
     * The unique identifier of the chart item that reflects the name of the data property in the resulting
     * data set.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setLabel(
      /**
       * New value for property `label`
       */
      sLabel: string
    ): this;
    /**
     * @deprecated (since 1.115) - Please use `propertyKey` instead.
     *
     * Sets a new value for property {@link #getName name}.
     *
     * The unique identifier of the chart item that reflects the name of the data property in the resulting
     * data set.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * @since 1.115
     *
     * Sets a new value for property {@link #getPropertyKey propertyKey}.
     *
     * The unique identifier of the chart item that reflects the name of the data property in the resulting
     * data set.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setType(
      /**
       * New value for property `type`
       */
      sType?: string
    ): this;
  }

  export interface $ItemSettings extends $ElementSettings {
    /**
     * @deprecated (since 1.115) - Please use `propertyKey` instead.
     *
     * The unique identifier of the chart item that reflects the name of the data property in the resulting
     * data set.
     */
    name?: string | PropertyBindingInfo;

    /**
     * @since 1.115
     *
     * The unique identifier of the chart item that reflects the name of the data property in the resulting
     * data set.
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
   * @since 1.88
   *
   * The `SelectionDetailsActions` is used to provide additional functionality to the Details popover.
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some actionGroup to the aggregation {@link #getActionGroups actionGroups}.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyActionGroups(): this;
    /**
     * Destroys all the detailsActions in the aggregation {@link #getDetailsActions detailsActions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyDetailsActions(): this;
    /**
     * Destroys all the detailsItemActions in the aggregation {@link #getDetailsItemActions detailsItemActions}.
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
     * @returns An array of the removed elements (might be empty)
     */
    removeAllActionGroups(): Item[];
    /**
     * Removes all the controls from the aggregation {@link #getDetailsActions detailsActions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllDetailsActions(): Item[];
    /**
     * Removes all the controls from the aggregation {@link #getDetailsItemActions detailsItemActions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllDetailsItemActions(): Item[];
    /**
     * Removes a detailsAction from the aggregation {@link #getDetailsActions detailsActions}.
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
     * @returns The removed detailsItemAction or `null`
     */
    removeDetailsItemAction(
      /**
       * The detailsItemAction to remove or its index or id
       */
      vDetailsItemAction: int | string | Item
    ): Item | null;
  }

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
   * @since 1.61.0
   *
   * Utilities to create conditions to be used in {@link sap.ui.mdc.FilterField FilterField}, {@link sap.ui.mdc.FilterBar FilterBar }
   * or {@link sap.ui.mdc.condition.ConditionModel ConditionModel}
   */
  interface Condition {
    /**
     * Creates a condition object.
     *
     * @returns The new condition object with the given operator and values
     */
    createCondition(
      /**
       * Operator for the condition
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
       * in the `DefineConditionPanel` control
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
     * @returns The new condition object with the given operator and values
     */
    createCondition(
      /**
       * Operator for the condition
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
       * in the `DefineConditionPanel` control
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
     * @returns The new condition object with the given operator and values
     */
    createCondition(
      /**
       * Operator for the condition
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
       * in the `DefineConditionPanel` control
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
     * @returns The new condition object with the given operator and values
     */
    createCondition(
      /**
       * Operator for the condition
       */
      sOperator: string,
      /**
       * Array of values for the condition
       */
      aValues: any[],
      /**
       * If set to `ConditionValidated.Validated`, the condition is validated (by the field help) and not shown
       * in the `DefineConditionPanel` control
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
     * Operator of the condition
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
     * If set, the condition is empty (used as dummy condition in {@link sap.ui.mdc.valuehelp.base.DefineConditionPanel DefineConditionPanel})
     */
    isEmpty?: boolean;
    /**
     * If set to `ConditionValidated.Validated`, the condition is validated (by the value help) and not shown
     * in the {@link sap.ui.mdc.valuehelp.base.DefineConditionPanel DefineConditionPanel} control
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

  /**
   * @since 1.73.0
   *
   * Utilities to handle {@link sap.ui.mdc.condition.Operator Operators} and {@link sap.ui.mdc.condition.ConditionObject conditions}.
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
     * @returns the operator object, or undefined if the operator with the requested name does not
     * exist
     */
    getOperator(
      /**
       * Name of the operator
       */
      sOperator: string
    ): Operator | undefined;
    /**
     * Returns all available default operators for the given type.
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
   * @since 1.73.0
   *
   * Creates an `sap.ui.mdc.condition.Operator` object. This is used in the {@link sap.ui.mdc.FilterField FilterField }
   * control to define which filter operators are supported.
   *
   * If a function or property is initial, the default implementation is used.
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
         * The string representation that is used by the operator to format a value into an output string. For the
         * value placeholder `{0}` and `{1}` are used. A placeholder that refers to the translated tokenText can
         * be used. `#tokenText#` refers to the `oConfiguration.tokenText` property if given.
         */
        tokenFormat: string;
        /**
         * Array of type to be used. The length of the array defines the number of values that need to be entered
         * with the operator.
         *  If set to {@link sap.ui.mdc.enums.OperatorValueType.Self OperatorValueType.Self} the `Type` of the `Field`
         * or `FilterField` using the `Operator` is used.
         *  If set to {@link sap.ui.mdc.enums.OperatorValueType.SelfNoParse OperatorValueType.SelfNoParse} same
         * as {@link sap.ui.mdc.enums.OperatorValueType.Self OperatorValueType.Self}, except that the input value
         * parsing will not be called.
         *  If set to {@link sap.ui.mdc.enums.OperatorValueType.Static OperatorValueType.Static} a simple string
         * type is used to display static text.
         *  If set to a name of a data type an instance of this data type will be used.
         *  If set to an object with structure {@link sap.ui.mdc.condition.ValueType} an instance of the corresponding
         * data type will be used. The type given via `name` must be loaded by the application.
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
         * Function to create a control to be used in {@link sap.ui.mdc.valuehelp.base.DefineConditionPanel DefineConditionPanel}
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
      }
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.condition.Operator with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): Metadata;
    /**
     * Sets an overwrite function for some of the `operator` functions.
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
   * @since 1.74.0
   *
   * Creates a `sap.ui.mdc.condition.RangeOperator` object. This is used in the {@link sap.ui.mdc.FilterField FilterField }
   * control to define which filter operators are supported.
   *
   * If a function or property is initial, the default implementation is used.
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

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @since 1.61
   * @experimental (since 1.61)
   *
   * The base class for MDC controls providing delegate-related functionality (see {@link sap.ui.mdc.mixin.DelegateMixin}).
   */
  export default class Control extends Control1 {
    /**
     * Creates and initializes a new MDC control with the given `sId` and settings.
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
     * Creates and initializes a new MDC control with the given `sId` and settings.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Optional ID for the new control; generated automatically if no non-empty ID is given Note: this can be
       * omitted, no matter whether `mSettings` will be given or not!
       */
      sId?: string,
      /**
       * Object with initial settings for the new control
       */
      mSettings?: $ControlSettings
    );

    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Provides access to the delegate initialization `Promise`. **Note:** `initControlDelegate` must be called
     * to start the delegate initialization
     *
     * @returns Returns a `Promise` reflecting the delegate initialization
     */
    static awaitControlDelegate(): Promise</* was: sap.ui.mdc.BaseDelegate */ any>;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Provides access to the property helper initialization `Promise`.
     *
     * @returns Returns a `Promise` that resolves with the property helper
     */
    static awaitPropertyHelper(): Promise</* was: sap.ui.mdc.util.PropertyHelper */ any>;
    /**
     * Creates a new subclass of class sap.ui.mdc.Control with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Control>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Finalize the propertyHelper using the control's delegate.
     *
     * @returns Returns a `Promise` that resolves with the property helper
     */
    static finalizePropertyHelper(
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
     * @returns `typeUtil` made available by a delegate module
     */
    static getControlDelegate(): /* was: sap.ui.mdc.BaseDelegate */ any;
    /**
     * Returns a metadata object for class sap.ui.mdc.Control.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Returns the payload object set for the delegate property.
     *
     * @returns Payload set for delegate property
     */
    static getPayload(): object;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Returns the property helper instance, if available.
     *
     * @returns The property helper
     */
    static getPropertyHelper(): /* was: sap.ui.mdc.util.PropertyHelper */ any;
    /**
     * Returns the `TypeMap` made available by a delegate module.
     *
     * @returns `TypeMap` object
     */
    static getTypeMap(): /* was: sap.ui.mdc.util.TypeMap */ any;
    /**
     * @deprecated - (since 1.115.0) - please see {@link #getTypeMap}
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Returns the `typeUtil` made available by a delegate module.
     *
     * @returns `TypeUtil` object
     */
    static getTypeUtil(): /* was: sap.ui.mdc.util.TypeUtil */
      | any
      | /* was: sap.ui.mdc.util.TypeMap */ any;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Loads and initializes the delegate module related to the enhanced control.
     *
     * @returns Returns a `Promise` that resolves the delegate module, if available
     */
    static initControlDelegate(
      /**
       * Preloaded delegate module
       */
      oPreloadedModule?: /* was: sap.ui.mdc.BaseDelegate */ any
    ): Promise</* was: sap.ui.mdc.BaseDelegate */ any>;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Loads and initializes the property helper related to the enhanced control.
     *
     * @returns Returns a `Promise` that resolves with the property helper
     */
    static initPropertyHelper(
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Indicates if the control's propertyHelper already contains all available properties
     *
     * @returns Returns a `boolean` indicating the propertyHelper's final state
     */
    static isPropertyHelperFinal(): boolean;
    /**
     * @experimental
     *
     * Gets current value of property {@link #getDelegate delegate}.
     *
     * Path to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * @returns Value of property `delegate`
     */
    getDelegate(): object;
    /**
     * @experimental
     *
     * Sets a new value for property {@link #getDelegate delegate}.
     *
     * Path to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDelegate(
      /**
       * New value for property `delegate`
       */
      oDelegate: object
    ): this;
  }

  export interface $ControlSettings extends $ControlSettings1 {
    /**
     * @experimental
     *
     * Path to the `Delegate` module that provides the required APIs to execute model-specific logic.
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

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @since 1.74
   * @experimental (since 1.74)
   *
   * The base class for MDC composite elements providing delegate-related functionality (see {@link sap.ui.mdc.mixin.DelegateMixin}).
   */
  export default class Element1 extends UI5Element {
    /**
     * Creates and initializes a new MDC element with the given `sId` and settings.
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
     * Creates and initializes a new MDC element with the given `sId` and settings.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Optional ID for the new element; generated automatically if no non-empty ID is given Note: this can be
       * omitted, no matter whether `mSettings` will be given or not!
       */
      sId?: string,
      /**
       * Object with initial settings for the new control
       */
      mSettings?: $ElementSettings
    );

    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Provides access to the delegate initialization `Promise`. **Note:** `initControlDelegate` must be called
     * to start the delegate initialization
     *
     * @returns Returns a `Promise` reflecting the delegate initialization
     */
    static awaitControlDelegate(): Promise</* was: sap.ui.mdc.BaseDelegate */ any>;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Provides access to the property helper initialization `Promise`.
     *
     * @returns Returns a `Promise` that resolves with the property helper
     */
    static awaitPropertyHelper(): Promise</* was: sap.ui.mdc.util.PropertyHelper */ any>;
    /**
     * Creates a new subclass of class sap.ui.mdc.Element with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, Element1>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Finalize the propertyHelper using the control's delegate.
     *
     * @returns Returns a `Promise` that resolves with the property helper
     */
    static finalizePropertyHelper(
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
     * @returns `typeUtil` made available by a delegate module
     */
    static getControlDelegate(): /* was: sap.ui.mdc.BaseDelegate */ any;
    /**
     * Returns a metadata object for class sap.ui.mdc.Element.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Returns the payload object set for the delegate property.
     *
     * @returns Payload set for delegate property
     */
    static getPayload(): object;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Returns the property helper instance, if available.
     *
     * @returns The property helper
     */
    static getPropertyHelper(): /* was: sap.ui.mdc.util.PropertyHelper */ any;
    /**
     * Returns the `TypeMap` made available by a delegate module.
     *
     * @returns `TypeMap` object
     */
    static getTypeMap(): /* was: sap.ui.mdc.util.TypeMap */ any;
    /**
     * @deprecated - (since 1.115.0) - please see {@link #getTypeMap}
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Returns the `typeUtil` made available by a delegate module.
     *
     * @returns `TypeUtil` object
     */
    static getTypeUtil(): /* was: sap.ui.mdc.util.TypeUtil */
      | any
      | /* was: sap.ui.mdc.util.TypeMap */ any;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Loads and initializes the delegate module related to the enhanced control.
     *
     * @returns Returns a `Promise` that resolves the delegate module, if available
     */
    static initControlDelegate(
      /**
       * Preloaded delegate module
       */
      oPreloadedModule?: /* was: sap.ui.mdc.BaseDelegate */ any
    ): Promise</* was: sap.ui.mdc.BaseDelegate */ any>;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Loads and initializes the property helper related to the enhanced control.
     *
     * @returns Returns a `Promise` that resolves with the property helper
     */
    static initPropertyHelper(
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Indicates if the control's propertyHelper already contains all available properties
     *
     * @returns Returns a `boolean` indicating the propertyHelper's final state
     */
    static isPropertyHelperFinal(): boolean;
    /**
     * @experimental
     *
     * Gets current value of property {@link #getDelegate delegate}.
     *
     * Path to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * @returns Value of property `delegate`
     */
    getDelegate(): object;
    /**
     * @experimental
     *
     * Sets a new value for property {@link #getDelegate delegate}.
     *
     * Path to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDelegate(
      /**
       * New value for property `delegate`
       */
      oDelegate: object
    ): this;
  }

  export interface $ElementSettings extends $ElementSettings1 {
    /**
     * @experimental
     *
     * Path to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     */
    delegate?: object | PropertyBindingInfo | `{${string}}`;
  }
}

declare module "sap/ui/mdc/enums/ActionToolbarActionAlignment" {
  /**
   * @since 1.115
   *
   * Defines the alignment of the `ActionToolbarAction` action control.
   */
  enum ActionToolbarActionAlignment {}
  export default ActionToolbarActionAlignment;
}

declare module "sap/ui/mdc/enums/BaseType" {
  /**
   * @since 1.115
   *
   * Enumeration of the possible basic data types
   *
   * In {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.MultiValueField MultiValueField}, and {@link sap.ui.mdc.FilterField FilterField},
   * different data types can be used. These data types might be model-dependent. To handle them model-independently,
   * basic types are used internally.
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
   * @since 1.115
   *
   * Defines the personalization mode of the chart.
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
   * @since 1.115
   *
   * Defines the types of chart actions in the toolbar.
   *  Can be used to remove some of the default `ToolbarAction`. For more information, see @link sap.ui.mdc.Chart#ignoreToolbarActions}.
   */
  enum ChartToolbarActionType {
    /**
     * Drill-down and drill-up action.
     */
    DrillDownUp = "DrillDownUp",
    /**
     * Full screen action.
     */
    FullScreen = "FullScreen",
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
   * @since 1.115
   *
   * Enumeration of the validated state of conditions
   *
   * If a `Condition` is chosen from a field help or validated against a field help it is set to be validated.
   * In this case the corresponding item in the value help is shown as selected.
   *
   * If the validated state of the `Condition` is undefined this means it is not defined if it is validated
   * or not.
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

declare module "sap/ui/mdc/enums/FieldDisplay" {
  /**
   * @since 1.115
   *
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
   * @since 1.115
   *
   * Defines in what mode a {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.FilterField FilterField} or
   * {@link sap.ui.mdc.MultiValueField MultiValueField} is rendered.
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
   * @since 1.115
   *
   * Defines the personalization mode of the filter bar.
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
   * @since 1.115
   *
   * Enumeration of the possible validation types.
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
   * @since 1.115
   *
   * Defines the behavior of the {@link sap.ui.mdc.Link}.
   */
  enum LinkType {
    /**
     * {@link sap.ui.mdc.Link} is rendered as a {@link sap.m.Link} that works as a direct link
     */
    DirectLink = "1",
    /**
     * {@link sap.ui.mdc.Link} is rendered as a {@link sap.m.Link} that opens a popover when pressed
     */
    Popover = "2",
    /**
     * {@link sap.ui.mdc.Link} is rendered as a {@link sap.m.Text}
     */
    Text = "0",
  }
  export default LinkType;
}

declare module "sap/ui/mdc/enums/OperatorOverwrite" {
  /**
   * @since 1.115
   *
   * Enumeration of the `OperatorOverwrite` in `Operator`.
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
   * @since 1.115
   *
   * Defines what data type is used for parse or format the condition values on a {@link sap.ui.mdc.condition.Operator Operator}.
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

declare module "sap/ui/mdc/enums/PersistenceMode" {
  /**
   * @since 1.115
   *
   * Enumeration of the preferred persistence mode for personalization changes.
   */
  enum PersistenceMode {}
  export default PersistenceMode;
}

declare module "sap/ui/mdc/enums/TableGrowingMode" {
  /**
   * @since 1.115
   *
   * Defines the growing options of the responsive table.
   */
  enum TableGrowingMode {
    /**
     * Basic growing takes place (`growing` is set in the responsive table)
     */
    Basic = "Basic",
    /**
     * Growing does not take place (`growing` is not set in the responsive table)
     */
    None = "None",
    /**
     * Growing with `scroll` takes place (`growing` and `growingScrollToLoad` are set in the responsive table)
     */
    Scroll = "Scroll",
  }
  export default TableGrowingMode;
}

declare module "sap/ui/mdc/enums/TableP13nMode" {
  /**
   * @since 1.115
   *
   * Defines the personalization mode of the table.
   */
  enum TableP13nMode {
    /**
     * Aggregation personalization is enabled.
     */
    Aggregate = "Aggregate",
    /**
     * Column personalization is enabled.
     */
    Column = "Column",
    /**
     * Filter personalization is enabled.
     */
    Filter = "Filter",
    /**
     * Group personalization is enabled.
     */
    Group = "Group",
    /**
     * Sort personalization is enabled.
     */
    Sort = "Sort",
  }
  export default TableP13nMode;
}

declare module "sap/ui/mdc/enums/TableRowAction" {
  /**
   * @since 1.115
   *
   * Defines the actions that can be used in the table.
   */
  enum TableRowAction {
    /**
     * Navigation arrow (chevron) is shown in the table rows/items.
     */
    Navigation = "Navigation",
  }
  export default TableRowAction;
}

declare module "sap/ui/mdc/enums/TableRowCountMode" {
  /**
   * @since 1.115
   *
   * Defines the row count mode of the GridTable.
   */
  enum TableRowCountMode {
    /**
     * The table automatically fills the height of the surrounding container.
     */
    Auto = "Auto",
    /**
     * The table always has as many rows as defined in the `rowCount` property of `GridTableType`.
     */
    Fixed = "Fixed",
  }
  export default TableRowCountMode;
}

declare module "sap/ui/mdc/enums/TableSelectionMode" {
  /**
   * @since 1.115
   *
   * Defines the mode of the table.
   */
  enum TableSelectionMode {
    /**
     * Multiple rows/items can be selected at a time.
     */
    Multi = "Multi",
    /**
     * No rows/items can be selected (default).
     */
    None = "None",
    /**
     * Only one row/item can be selected at a time.
     */
    Single = "Single",
    /**
     * Only one row/item can be selected at a time. Should be used for navigation scenarios to indicate the
     * navigated row/item. If this selection mode is used, no `rowPress` event is fired.
     */
    SingleMaster = "SingleMaster",
  }
  export default TableSelectionMode;
}

declare module "sap/ui/mdc/enums/TableType" {
  /**
   * @since 1.115
   *
   * Defines the type of table used in the MDC table.
   */
  enum TableType {
    /**
     * Responsive table ({@link sap.m.Table} control) is used.
     */
    ResponsiveTable = "ResponsiveTable",
    /**
     * Grid table ({@link sap.ui.table.Table} control) is used (default)
     */
    Table = "Table",
  }
  export default TableType;
}

declare module "sap/ui/mdc/enums/ValueHelpPropagationReason" {
  /**
   * @since 1.115
   *
   * Enumeration of the propagation reason in the condition propagation callback of the {@link sap.ui.mdc.ValueHelp ValueHelp}
   */
  enum ValueHelpPropagationReason {}
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
   * @since 1.54.0
   * @experimental (since 1.54.0)
   *
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
   */
  export default class Field
    extends FieldBase
    implements IFormContent, ISemanticFormContent, IOverflowToolbarContent {
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
     * @returns Reference to `this` in order to allow method chaining
     */
    bindAdditionalValue(
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:change change} to attached listeners.
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
     * @returns Value of property `additionalValue`
     */
    getAdditionalValue(): any;
    /**
     * Gets current value of property {@link #getValue value}.
     *
     * The value of the field.
     *
     * To display the key and the description in one field, the key must be set on the `value` property.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setAdditionalValue(
      /**
       * New value for property `additionalValue`
       */
      oAdditionalValue?: any
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
     * @returns Reference to `this` in order to allow method chaining
     */
    unbindAdditionalValue(): this;
    /**
     * Unbinds property {@link #getValue value} from model data.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    unbindValue(): this;
  }

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
    change?: (oEvent: Event<Field$ChangeEventParameters>) => void;
  }

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
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'Field$ChangeEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $FieldChangeEventParameters = Field$ChangeEventParameters;

  export type Field$ChangeEvent = Event<Field$ChangeEventParameters>;
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
   * @since 1.62.0
   *
   * This class represents a type that is used to map an array of conditions to a single-value control (such
   * as {@link sap.m.Input Input} or {@link sap.m.Text Text} control).
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
         * additional type used on other part of a field. (For example, for unit fields.)
         */
        additionalType?: Type;
        /**
         * additional types used for parts of a `CompositeType`
         */
        compositeTypes?: Type[];
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
         * If set, the conditions will not be formatted (MultiInput value-property case)
         */
        noFormatting?: boolean;
        /**
         * If noFormatting is set, this value is used as output (To keep typed value during value help selection)
         */
        keepValue?: string;
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): Metadata;
    /**
     * Formats the given conditions to an output value of the given target type. These values are formatted
     * using the given data type. Depending on the operator and the configuration (set in `FormatOptions`),
     * a description will be determined by a given value help or delegate.
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
   * @since 1.62.0
   *
   * This class represents a type that is used to map a single condition to a single-value control.
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
         * additional type used on other part of a field. (For example, for unit fields.)
         */
        additionalType?: Type;
        /**
         * additional types used for parts of a `CompositeType`
         */
        compositeTypes?: Type[];
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): Metadata;
    /**
     * Formats the given condition to an output value of the given target type. These values are formatted using
     * the given data type. Depending on the operator and the configuration (set in `FormatOptions`), a description
     * will be determined by a given value help or delegate.
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
     * Parses an external value of the given source type to a condition that holds the value in model representation.
     * These values are parsed using the given data type. Depending on the operator and the configuration (set
     * in `FormatOptions`), a value will be determined by a given value help or delegate.
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

  import Metadata from "sap/ui/base/Metadata";

  /**
   * @since 1.96.0
   *
   * This class represents a type to map an array of conditions used in a {@link sap.ui.mdc.FilterField FilterField }
   * control to a value of a {@link sap.m.DynamicDateRange DynamicDateRange} control.
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
         * Type of the value of the condition (used for formatting and parsing)
         */
        valueType?: Type;
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
        ValueHelpID?: string;
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
         * If set, the type is used for the unit part of a field
         */
        isUnit?: boolean;
        /**
         * Function to get the existing conditions of the field. Only used if `isUnit` is set. TODO: better solution
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

  import BaseType from "sap/ui/mdc/enums/BaseType";

  import FieldDisplay from "sap/ui/mdc/enums/FieldDisplay";

  import FieldEditMode from "sap/ui/mdc/enums/FieldEditMode";

  import FieldInfoBase from "sap/ui/mdc/field/FieldInfoBase";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import ConditionType from "sap/ui/mdc/field/ConditionType";

  import ValueHelp from "sap/ui/mdc/ValueHelp";

  /**
   * @since 1.58.0
   *
   * The `FieldBase` control is the base class for the {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.MultiValueField MultiValueField }
   * and {@link sap.ui.mdc.FilterField FilterField} controls. It must not be used stand-alone.
   */
  export default class FieldBase
    extends Control
    implements IFormContent, ISemanticFormContent, IOverflowToolbarContent {
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
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
     * @since 1.82.0
     *
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
     * @since 1.82.0
     *
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
     * @returns Reference to `this` in order to allow method chaining
     */
    bindConditions(
      /**
       * The binding information
       */
      oBindingInfo: PropertyBindingInfo
    ): this;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Checks if all needed information is provided to create the internal content control. If possible create
     * internal controls.
     */
    checkCreateInternalContent(): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * If the value is the initial value of the type (String types) and the field does not show tokens or operators,
     * no condition must be set as the field is then empty.
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
     * @since 1.62.0
     *
     * Assigns a `Label` control to the {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.MultiValueField MultiValueField},
     * or {@link sap.ui.mdc.FilterField FilterField} controls.
     *
     * The text of the label is taken from the {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.MultiValueField MultiValueField},
     * or {@link sap.ui.mdc.FilterField FilterField} controls. The `labelFor` association is set to the {@link sap.ui.mdc.Field Field},
     * {@link sap.ui.mdc.MultiValueField MultiValueField}, or {@link sap.ui.mdc.FilterField FilterField} control.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;
    /**
     * @since 1.61.0
     *
     * Destroys the contentDisplay in the aggregation {@link #getContentDisplay contentDisplay}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContentDisplay(): this;
    /**
     * @since 1.61.0
     *
     * Destroys the contentEdit in the aggregation {@link #getContentEdit contentEdit}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContentEdit(): this;
    /**
     * Destroys the fieldInfo in the aggregation {@link #getFieldInfo fieldInfo}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFieldInfo(): this;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Destroys the internal content controls.
     */
    destroyInternalContent(): void;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:liveChange liveChange} event of this `sap.ui.mdc.field.FieldBase`.
     *
     * The passed function and listener object must match the ones used for event registration.
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
     * @since 1.82.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:submit submit} event of this `sap.ui.mdc.field.FieldBase`.
     *
     * The passed function and listener object must match the ones used for event registration.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Here inheriting controls need to fire the control-specific change event.
     */
    fireChangeEvent(): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:liveChange liveChange} to attached listeners.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:press press} to attached listeners.
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
     * @since 1.82.0
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:submit submit} to attached listeners.
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
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Determines the `BaseType` of the currently used data type.
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
     * @since 1.61.0
     *
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
     */
    getContentDisplay(): Control1;
    /**
     * @since 1.61.0
     *
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
     */
    getContentEdit(): Control1;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     *
     * @returns oContentFactory the ContentFactory of the Field
     */
    getContentFactory(): /* was: sap.ui.mdc.field.content.ContentFactory */ any;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Gets the currently used content controls.
     *
     * @returns Array of content controls
     */
    getCurrentContent(): /* was: sap.ui.core.Conterol */ any[];
    /**
     * Gets current value of property {@link #getDataType dataType}.
     *
     * The type of data handled by the field. This type is used to parse, format, and validate the value.
     *
     * Default value is `'sap.ui.model.type.String'`.
     *
     * @returns Value of property `dataType`
     */
    getDataType(): string;
    /**
     * Gets current value of property {@link #getDataTypeConstraints dataTypeConstraints}.
     *
     * The constraints of the type specified in `dataType`.
     *
     * @returns Value of property `dataTypeConstraints`
     */
    getDataTypeConstraints(): object;
    /**
     * Gets current value of property {@link #getDataTypeFormatOptions dataTypeFormatOptions}.
     *
     * The format options of the type specified in `dataType`.
     *
     * @returns Value of property `dataTypeFormatOptions`
     */
    getDataTypeFormatOptions(): object;
    /**
     * @since 1.72.0
     * @experimental
     *
     * Gets current value of property {@link #getDelegate delegate}.
     *
     * Path to `FieldBaseDelegate` module that provides the required APIs to execute model-specific logic.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. Once the required module is associated, this property might not be
     * needed any longer.
     *
     * Default value is `...see text or source`.
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
     * @returns Value of property `editMode`
     */
    getEditMode(): FieldEditMode | keyof typeof FieldEditMode;
    /**
     * @deprecated (since 1.114.0) - replaced by {@link #setValueHelp valueHelp} association
     *
     * ID of the element which is the current target of the association {@link #getFieldHelp fieldHelp}, or
     * `null`.
     */
    getFieldHelp(): ID;
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Provides some internals of the field to be used in {@link sap.ui.mdc.field.ConditionsType ConditionsType }
     * for format and parse the conditions.
     *
     * @returns formatOptions of the field (see {@link sap.ui.mdc.field.ConditionsType ConditionsType})
     */
    getFormatOptions(): object;
    /**
     * @since 1.62.0
     *
     * Gets current value of property {@link #getLabel label}.
     *
     * Defines the label text for the field.
     *
     * This can be used by {@link sap.ui.mdc.FilterBar FilterBar} or {@link sap.ui.layout.form.Form Form} controls
     * to create a {@link sap.m.Label Label} control for the field.
     *
     * Default value is `empty string`.
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
     * @returns Value of property `multipleLines`
     */
    getMultipleLines(): boolean;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Required by the {@link sap.m.IOverflowToolbarContent} interface. Registers invalidations event that is
     * fired when width of the control is changed.
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
     * @returns Value of property `required`
     */
    getRequired(): boolean;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Determines, based on conditions, the value returned by the `change` event.
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
     * @since 1.85.0
     *
     * Gets current value of property {@link #getShowEmptyIndicator showEmptyIndicator}.
     *
     * If set, an empty `Field` renders an empty indicator in display mode.
     *
     * This property only takes effect if `editMode` is set to `Display`.
     *
     * **Note** Empty means the `Field` holds no value. If an empty string is a valid value, the `Field` might
     * show nothing, depending on the `display` settings and assigned description or `FieldHelp`.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showEmptyIndicator`
     */
    getShowEmptyIndicator(): boolean;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Returns the supported operators.
     *
     * Needs to be overwritten by {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.MultiValueField MultiValueField }
     * and {@link sap.ui.mdc.FilterField FilterField}
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
     * @returns Value of property `textDirection`
     */
    getTextDirection(): TextDirection | keyof typeof TextDirection;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Provides some internals of the unit part of the field to be used in {@link sap.ui.mdc.field.ConditionsType ConditionsType }
     * for format and parse the conditions.
     *
     * @returns formatOptions of the field (see {@link sap.ui.mdc.field.ConditionsType ConditionsType})
     */
    getUnitFormatOptions(): object;
    /**
     * ID of the element which is the current target of the association {@link #getValueHelp valueHelp}, or
     * `null`.
     */
    getValueHelp(): ID;
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
     * @returns Value of property `valueState`
     */
    getValueState(): ValueState | keyof typeof ValueState;
    /**
     * Gets current value of property {@link #getValueStateText valueStateText}.
     *
     * Defines the text that appears in the value state message pop-up. If this has not been specified, a default
     * text from the resource bundle is shown.
     *
     * @returns Value of property `valueStateText`
     */
    getValueStateText(): string;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Defines the width of the control.
     *
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Handler of the `ModelContextChange` event.
     */
    handleModelContextChange(
      /**
       * event
       */
      oEvent: object
    ): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Initializes internal data-types and dependent objects.
     */
    initDataType(): void;
    /**
     * @since 1.115.0
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Checks if the field is already destoyed or destruction has started.
     *
     * In this casse creation of internal content or binding must be prevented.
     *
     * @returns True if destroyed or destruction has been started
     */
    isFieldDestroyed(): boolean;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Returns whether the given property value is initial and has not been explicitly set or no binding exist.
     * Even after setting the default value or setting null/undefined (which also causes the default value to
     * be set), the property is no longer initial. A property can be reset to initial state by calling `resetProperty(sPropertyName)`.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Checks if there is invalid input.
     *
     * @returns True if there is invalid input
     */
    isInvalidInput(): boolean;
    /**
     * @since 1.115.0
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Checks if the field is configured to be a `SearchField`
     *
     * Needs to be overwritten by {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.MultiValueField MultiValueField},
     * and {@link sap.ui.mdc.FilterField FilterField}
     *
     * @returns True if configures as search field
     */
    isSearchField(): boolean;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Observes changes.
     *
     * To be enhanced by {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.MultiValueField MultiValueField},
     * {@link sap.ui.mdc.FilterField FilterField}, or other inherited controls.
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
     * @returns An array of the removed elements (might be empty)
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Resets invalid input information.
     *
     * Might be called if Binding changes or field is initialized.
     */
    resetInvalidInput(): void;
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setContent(
      /**
       * The content to set
       */
      oContent: Control1
    ): this;
    /**
     * @since 1.61.0
     *
     * Sets the aggregated {@link #getContentDisplay contentDisplay}.
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
     * @since 1.61.0
     *
     * Sets the aggregated {@link #getContentEdit contentEdit}.
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
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `'sap.ui.model.type.String'`.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setDataTypeFormatOptions(
      /**
       * New value for property `dataTypeFormatOptions`
       */
      oDataTypeFormatOptions?: object
    ): this;
    /**
     * @since 1.72.0
     * @experimental
     *
     * Sets a new value for property {@link #getDelegate delegate}.
     *
     * Path to `FieldBaseDelegate` module that provides the required APIs to execute model-specific logic.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. Once the required module is associated, this property might not be
     * needed any longer.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `...see text or source`.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setEditMode(
      /**
       * New value for property `editMode`
       */
      sEditMode?: FieldEditMode | keyof typeof FieldEditMode
    ): this;
    /**
     * @deprecated (since 1.114.0) - replaced by {@link #setValueHelp valueHelp} association
     *
     * Sets the associated {@link #getFieldHelp fieldHelp}.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setFieldInfo(
      /**
       * The fieldInfo to set
       */
      oFieldInfo: FieldInfoBase
    ): this;
    /**
     * @since 1.62.0
     *
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setRequired(
      /**
       * New value for property `required`
       */
      bRequired?: boolean
    ): this;
    /**
     * @since 1.85.0
     *
     * Sets a new value for property {@link #getShowEmptyIndicator showEmptyIndicator}.
     *
     * If set, an empty `Field` renders an empty indicator in display mode.
     *
     * This property only takes effect if `editMode` is set to `Display`.
     *
     * **Note** Empty means the `Field` holds no value. If an empty string is a valid value, the `Field` might
     * show nothing, depending on the `display` settings and assigned description or `FieldHelp`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth?: CSSSize
    ): this;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Triggers a check if all relevant properties are set to create the internal content control.
     *
     * To be sure that the check is not called multiple times, it needs to be checked if there is a pending
     * check. Multiple calls might happen if properties are changed often or the check is triggered during a
     * `BindingContext` update (which is often called in propagation).
     */
    triggerCheckCreateInternalContent(): void;
    /**
     * Unbinds property {@link #getConditions conditions} from model data.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    unbindConditions(): this;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Triggers an update of the internal content controls.
     *
     * Should be called if properties are changed that might influence the content control.
     */
    updateInternalContent(): void;
  }

  export interface $FieldBaseSettings extends $ControlSettings {
    /**
     * The type of data handled by the field. This type is used to parse, format, and validate the value.
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
     * @since 1.62.0
     *
     * Defines the label text for the field.
     *
     * This can be used by {@link sap.ui.mdc.FilterBar FilterBar} or {@link sap.ui.layout.form.Form Form} controls
     * to create a {@link sap.m.Label Label} control for the field.
     */
    label?: string | PropertyBindingInfo;

    /**
     * @since 1.72.0
     * @experimental
     *
     * Path to `FieldBaseDelegate` module that provides the required APIs to execute model-specific logic.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. Once the required module is associated, this property might not be
     * needed any longer.
     */
    delegate?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.85.0
     *
     * If set, an empty `Field` renders an empty indicator in display mode.
     *
     * This property only takes effect if `editMode` is set to `Display`.
     *
     * **Note** Empty means the `Field` holds no value. If an empty string is a valid value, the `Field` might
     * show nothing, depending on the `display` settings and assigned description or `FieldHelp`.
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
     * @since 1.61.0
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
     */
    contentEdit?: Control1;

    /**
     * @since 1.61.0
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
     * @deprecated (since 1.114.0) - replaced by {@link #setValueHelp valueHelp} association
     *
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
    liveChange?: (oEvent: Event<FieldBase$LiveChangeEventParameters>) => void;

    /**
     * This event is fired if the inner control has a press event and this is fired.
     */
    press?: (oEvent: Event) => void;

    /**
     * @since 1.82.0
     *
     * This event is fired when the user presses Enter. It allows the application to implement some
     * submit logic.
     *
     * **Note** This event is only triggered if the field is editable.
     */
    submit?: (oEvent: Event<FieldBase$SubmitEventParameters>) => void;
  }

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
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'FieldBase$LiveChangeEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $FieldBaseLiveChangeEventParameters = FieldBase$LiveChangeEventParameters;

  export type FieldBase$LiveChangeEvent = Event<FieldBase$LiveChangeEventParameters>;

  export interface FieldBase$PressEventParameters {}

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'FieldBase$PressEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $FieldBasePressEventParameters = FieldBase$PressEventParameters;

  export type FieldBase$PressEvent = Event<FieldBase$PressEventParameters>;

  export interface FieldBase$SubmitEventParameters {
    /**
     * Returns a `Promise` for the change. The `Promise` returns the value if it is resolved. If the last `change`
     * event is synchronous, the `Promise` has already been resolved. If it is asynchronous, it will be resolved
     * after the value has been updated.
     */
    promise?: Promise<any>;
  }

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'FieldBase$SubmitEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $FieldBaseSubmitEventParameters = FieldBase$SubmitEventParameters;

  export type FieldBase$SubmitEvent = Event<FieldBase$SubmitEventParameters>;
}

declare module "sap/ui/mdc/field/FieldInfoBase" {
  import { default as Element1, $ElementSettings } from "sap/ui/mdc/Element";

  import Event from "sap/ui/base/Event";

  import { DirectLinkObject } from "sap/ui/mdc/Link";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Control from "sap/ui/core/Control";

  /**
   * @since 1.54.0
   *
   * A `FieldInfoBase` element is a base class that shows any kind of information related to the `Field` control,
   * for example, navigation targets or contact details.
   */
  export default class FieldInfoBase extends Element1 {
    /**
     * Constructor for a new `FieldInfoBase`.
     *
     * This is the basis for link-features. If the link is pressed a popover might be opened.
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
     * This is the basis for link-features. If the link is pressed a popover might be opened.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Checks if there is a direct navigation or if there is a popover to be opened.
     *
     * @returns Resolves a Boolean value
     */
    checkDirectNavigation(): Promise<boolean>;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:dataUpdate dataUpdate} event of this `sap.ui.mdc.field.FieldInfoBase`.
     *
     * The passed function and listener object must match the ones used for event registration.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:dataUpdate dataUpdate} to attached listeners.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:popoverAfterOpen popoverAfterOpen} to attached listeners.
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
     * @returns `Promise` with a popover content of type sap.ui.Control as result
     */
    getContent(
      /**
       * Function returning the `Popover` control that is created in `createPopover`
       */
      fnGetAutoClosedControl?: Function
    ): Promise</* was: sap.ui.Control */ any>;
    /**
     * Returns a `Promise` resolving into an {@link sap.ui.mdc.link.DirectLinkObject} containing the `href`
     * and `target` of a direct navigation link. Returns a `Promise` resolving into null if there is no direct
     * link.
     *
     * @returns `Promise` resolving into `null` or a {@link sap.ui.mdc.link.DirectLinkObject}
     */
    getDirectLinkHrefAndTarget(): Promise<DirectLinkObject | null>;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Returns the parent control.
     *
     * @returns control instance reference
     */
    getSourceControl(): string | string[] | null;
    /**
     * Returns href as a `Promise` that defines the target navigation of the `Link` control created by `Field`.
     * If direct navigation is used, href is returned. If the information panel contains more content than only
     * one link, `null` is returned.
     *
     * @returns Result of `Promise` is href with values {string | null}
     */
    getTriggerHref(): Promise<string | null>;
    /**
     * Returns `true` as a `Promise` result if the control created by `Field` can be triggered.
     *
     * @returns `Promise` resolving into `true` if `FieldInfo` is clickable
     */
    isTriggerable(): Promise<boolean>;
    /**
     * Opens the info panel in the control created by `Field`.
     *
     * @returns `Promise` that is resolved once the popover has been created
     */
    open(
      /**
       * Optional control reference to which the popover is attached. By default the parent is used as reference.
       */
      oControl: Control
    ): Promise<any>;
  }

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

  export interface FieldInfoBase$DataUpdateEventParameters {}

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'FieldInfoBase$DataUpdateEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $FieldInfoBaseDataUpdateEventParameters = FieldInfoBase$DataUpdateEventParameters;

  export type FieldInfoBase$DataUpdateEvent = Event<FieldInfoBase$DataUpdateEventParameters>;

  export interface FieldInfoBase$PopoverAfterOpenEventParameters {}

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'FieldInfoBase$PopoverAfterOpenEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $FieldInfoBasePopoverAfterOpenEventParameters = FieldInfoBase$PopoverAfterOpenEventParameters;

  export type FieldInfoBase$PopoverAfterOpenEvent = Event<FieldInfoBase$PopoverAfterOpenEventParameters>;
}

declare module "sap/ui/mdc/field/MultiValueFieldDelegate" {
  import { ConditionObject } from "sap/ui/mdc/condition/Condition";

  import MultiValueField from "sap/ui/mdc/MultiValueField";

  /**
   * @since 1.93.0
   *
   * Delegate class for `sap.ui.mdc.MultiValueField`.
   */
  export default class MultiValueFieldDelegate {
    constructor();

    /**
     * Implements the model-specific logic to update items after conditions have been updated.
     *
     * Items can be removed, updated, or added. Use the binding information of the `MultiValueField` control
     * to update the data in the model.
     */
    static updateItems(
      /**
       * Payload for delegate
       */
      oPayload: object,
      /**
       * Current conditions of the `MultiValueField` control
       */
      aConditions: ConditionObject[],
      /**
       * Current `MultiValueField` control to determine binding information to update the values of the corresponding
       * model
       */
      oMultiValueField: MultiValueField
    ): void;
  }
}

declare module "sap/ui/mdc/field/MultiValueFieldItem" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @since 1.93.0
   *
   * Base type for `MultiValueFieldItem` control.
   */
  export default class MultiValueFieldItem extends UI5Element {
    /**
     * Constructor for a new `MultiValueFieldItem`.
     *
     * The `MultiValueField` control holds its values as items. The `MultiValueFieldItem` element defines these
     * items.
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
     * The `MultiValueField` control holds its values as items. The `MultiValueFieldItem` element defines these
     * items.
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getDescription description}.
     *
     * Description of the item.
     *
     * @returns Value of property `description`
     */
    getDescription(): string;
    /**
     * Gets current value of property {@link #getKey key}.
     *
     * Key of the item.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setKey(
      /**
       * New value for property `key`
       */
      oKey: any
    ): this;
  }

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

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @since 1.61.0
   * @experimental (since 1.61.0)
   *
   * The `FilterBar` control is used to display filter attrtibutes in a user-friendly manner to populate values
   * for a query. The filters are arranged in a logical row that is divided depending on the space available
   * and the width of the filters. The Go button triggers the search event, and the Adapt Filters button shows
   * the filter dialog.
   *  The `FilterBar` control creates and handles the filters based on the provided metadata information.
   * The metadata information is provided via the {@link sap.ui.mdc.FilterBarDelegate FilterBarDelegate} implementation.
   * This implementation has to be provided by the application.
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Returns the external conditions of the inner condition model. **Note:** This API returns only attributes
     * related to the {@link sap.ui.mdc.FilterBar#p13nMode} property configuration.
     *
     * @returns Object containing the current status of the `FilterBar`
     */
    getCurrentState(): State;
    /**
     * @since 1.74
     *
     * Gets current value of property {@link #getP13nMode p13nMode}.
     *
     * Specifies the personalization options for the filter bar.
     *
     * @returns Value of property `p13nMode`
     */
    getP13nMode(): Array<FilterBarP13nMode | keyof typeof FilterBarP13nMode>;
    /**
     * Gets current value of property {@link #getShowAdaptFiltersButton showAdaptFiltersButton}.
     *
     * Determines whether the Adapt Filters button is visible in the filter bar.
     *  **Note**: If the `p13nMode` property does not contain the value `Item`, it is ignored.
     *
     * Default value is `true`.
     *
     * @returns Value of property `showAdaptFiltersButton`
     */
    getShowAdaptFiltersButton(): boolean;
    /**
     * @since 1.108
     *
     * Gets current value of property {@link #getShowClearButton showClearButton}.
     *
     * Determines whether the Clear button is visible in the filter bar.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showClearButton`
     */
    getShowClearButton(): boolean;
    /**
     * Sets the focus on the first filter in error state.
     *
     * @returns Returns the first filter field in error state
     */
    setFocusOnFirstErroneousField(): FilterField | null;
    /**
     * @since 1.74
     *
     * Sets a new value for property {@link #getP13nMode p13nMode}.
     *
     * Specifies the personalization options for the filter bar.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * Determines whether the Adapt Filters button is visible in the filter bar.
     *  **Note**: If the `p13nMode` property does not contain the value `Item`, it is ignored.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
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
     * @since 1.108
     *
     * Sets a new value for property {@link #getShowClearButton showClearButton}.
     *
     * Determines whether the Clear button is visible in the filter bar.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
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

  export interface $FilterBarSettings extends $FilterBarBaseSettings {
    /**
     * Determines whether the Adapt Filters button is visible in the filter bar.
     *  **Note**: If the `p13nMode` property does not contain the value `Item`, it is ignored.
     */
    showAdaptFiltersButton?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.108
     *
     * Determines whether the Clear button is visible in the filter bar.
     */
    showClearButton?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.74
     *
     * Specifies the personalization options for the filter bar.
     */
    p13nMode?:
      | Array<FilterBarP13nMode | keyof typeof FilterBarP13nMode>
      | PropertyBindingInfo
      | `{${string}}`;
  }
}

declare module "sap/ui/mdc/filterbar/FilterBarBase" {
  import { default as Control, $ControlSettings } from "sap/ui/mdc/Control";

  import FilterField from "sap/ui/mdc/FilterField";

  import Event from "sap/ui/base/Event";

  import FilterBarValidationStatus from "sap/ui/mdc/enums/FilterBarValidationStatus";

  import { State } from "sap/ui/mdc/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { ID } from "sap/ui/core/library";

  import VariantManagement from "sap/ui/fl/variants/VariantManagement";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @since 1.80.0
   *
   * The `FilterBarBase` control is the base for filter displaying controls in MDC.
   */
  export default class FilterBarBase extends Control {
    /**
     * Constructor for a new FilterBarBase.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $FilterBarBaseSettings
    );
    /**
     * Constructor for a new FilterBarBase.
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
      mSettings?: $FilterBarBaseSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.filterbar.FilterBarBase with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.Control.extend}.
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some filterItem to the aggregation {@link #getFilterItems filterItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addFilterItem(
      /**
       * The filterItem to add; if empty, nothing is inserted
       */
      oFilterItem: FilterField
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
     * **Note**: This event should never be executed programmatically. It is triggered internally by the filter
     * bar after a `triggerSearch` has been executed
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
      fnFunction: (p1: Event) => void,
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
     * **Note**: This event should never be executed programmatically. It is triggered internally by the filter
     * bar after a `triggerSearch` has been executed
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSearch(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.mdc.filterbar.FilterBarBase`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Checks the validation status of the filter fields. **Note:**
     *  This method returns the current inner state of the filter bar.
     *
     * @returns Returns the validation status
     */
    checkFilters(): FilterBarValidationStatus;
    /**
     * Destroys the basicSearchField in the aggregation {@link #getBasicSearchField basicSearchField}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyBasicSearchField(): this;
    /**
     * Destroys all the filterItems in the aggregation {@link #getFilterItems filterItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFilterItems(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:filtersChanged filtersChanged} event of this
     * `sap.ui.mdc.filterbar.FilterBarBase`.
     *
     * The passed function and listener object must match the ones used for event registration.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSearch(
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:filtersChanged filtersChanged} to attached listeners.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:search search} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSearch(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Returns the labels of all filters with a value assignment.
     *
     * Note: filters annotated with hiddenFilters will not be considered
     *
     * @returns array of labels of filters with value assignment
     */
    getAssignedFilterNames(): any[];
    /**
     * Returns a summary string that contains information about the filters currently assigned. The method returns
     * the text summary for the expanded and collapsed states of the filter bar.
     *
     *  **Example for collapsed filter bar**:
     *  3 filters active: Company Code, Fiscal Year, Customer
     *
     * **Example for expanded filter bar**:
     *  3 filters active (1 hidden)
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
     * Returns the external conditions of the inner condition model. **Note:** This API returns only attributes
     * related to the {@link sap.ui.mdc.FilterBar#p13nMode} property configuration.
     *
     * @returns Object containing the current status of the `FilterBarBase`
     */
    getCurrentState(): State;
    /**
     * @since 1.74
     *
     * Gets current value of property {@link #getDelegate delegate}.
     *
     * Defines the path to the metadata retrieval class for the `FilterBarBase` control. It basically identifies
     * the {@link sap.ui.mdc.FilterBarDelegate FilterBarDelegate} file that provides the required APIs to create
     * the filter bar content.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  **Note:** This property must not be bound.
     *
     * Default value is `...see text or source`.
     *
     * @returns Value of property `delegate`
     */
    getDelegate(): object;
    /**
     * @since 1.66.0
     *
     * Gets current value of property {@link #getFilterConditions filterConditions}.
     *
     * Specifies the filter conditions.
     *  **Note**: This property must not be bound.
     *  **Note**: This property is used exclusively for SAPUI5 flexibility. Do not use it otherwise.
     *
     * Default value is `{}`.
     *
     * @returns Value of property `filterConditions`
     */
    getFilterConditions(): object;
    /**
     * Gets content of aggregation {@link #getFilterItems filterItems}.
     *
     * Contains all the displayed {@link sap.ui.mdc.FilterField filter fields} of the `FilterBarBase` control.
     */
    getFilterItems(): FilterField[];
    /**
     * @since 1.74
     *
     * Gets current value of property {@link #getLiveMode liveMode}.
     *
     * Triggers a search automatically after a filter value has been changed.
     *  **Note:** The `liveMode` property only operates in non-mobile scenarios.
     *  Additionally, if the `liveMode` property is active, the following applies:
     *  The error message box is not displayed, and the `showMessages` property is ignored.
     *
     * Default value is `false`.
     *
     * @returns Value of property `liveMode`
     */
    getLiveMode(): boolean;
    /**
     * @since 1.97
     *
     * Gets current value of property {@link #getPropertyInfo propertyInfo}.
     *
     * Specifies the filter metadata.
     *  **Note**: This property must not be bound.
     *  **Note**: This property is used exclusively for SAPUI5 flexibility/ Fiori Elements. Do not use it otherwise.
     *  **Node**: Please check {@link sap.ui.mdc.filterbar.PropertyInfo} for more information about the supported
     * inner elements.
     *
     * Default value is `[]`.
     *
     * @returns Value of property `propertyInfo`
     */
    getPropertyInfo(): object;
    /**
     * Returns the value of the basic search condition.
     *
     * @returns Value of search condition or empty
     */
    getSearch(): string;
    /**
     * Gets current value of property {@link #getShowGoButton showGoButton}.
     *
     * Determines whether the Go button is visible in the filter bar.
     *  **Note**: If the `liveMode` property is set to `true`, it is ignored.
     *
     * Default value is `true`.
     *
     * @returns Value of property `showGoButton`
     */
    getShowGoButton(): boolean;
    /**
     * @since 1.74
     *
     * Gets current value of property {@link #getShowMessages showMessages}.
     *
     * Displays possible errors during the search in a message box.
     *
     * Default value is `true`.
     *
     * @returns Value of property `showMessages`
     */
    getShowMessages(): boolean;
    /**
     * @since 1.79.0
     *
     * Gets current value of property {@link #getSuspendSelection suspendSelection}.
     *
     * If set to `true`, all search requests are ignored. Once it has been set to `false`, a search is triggered
     * immediately if one or more search requests have been triggered in the meantime but were ignored based
     * on the setting.
     *
     * Default value is `false`.
     *
     * @returns Value of property `suspendSelection`
     */
    getSuspendSelection(): boolean;
    /**
     * ID of the element which is the current target of the association {@link #getVariantBackreference variantBackreference},
     * or `null`.
     */
    getVariantBackreference(): ID;
    /**
     * Checks for the provided `sap.ui.mdc.FilterField` in the aggregation {@link #getFilterItems filterItems}.
     * and returns its index if found or -1 otherwise.
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
     * Returns the state of initialization. This method does not trigger the retrieval of the metadata.
     *
     * @returns Resolves after the initial filters have been applied
     */
    initialized(): Promise<any>;
    /**
     * Returns the state of initialization. This method triggers the retrieval of the metadata.
     *
     * @returns Resolves after the initial filters have been applied and the metadata has been obtained
     */
    initializedWithMetadata(): Promise<any>;
    /**
     * Inserts a filterItem into the aggregation {@link #getFilterItems filterItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertFilterItem(
      /**
       * The filterItem to insert; if empty, nothing is inserted
       */
      oFilterItem: FilterField,
      /**
       * The `0`-based index the filterItem should be inserted at; for a negative value of `iIndex`, the filterItem
       * is inserted at position 0; for a value greater than the current size of the aggregation, the filterItem
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getFilterItems filterItems}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllFilterItems(): FilterField[];
    /**
     * Removes a filterItem from the aggregation {@link #getFilterItems filterItems}.
     *
     * @returns The removed filterItem or `null`
     */
    removeFilterItem(
      /**
       * The filterItem to remove or its index or id
       */
      vFilterItem: int | string | FilterField
    ): FilterField | null;
    /**
     * Sets the aggregated {@link #getBasicSearchField basicSearchField}.
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
     * @since 1.74
     *
     * Sets a new value for property {@link #getDelegate delegate}.
     *
     * Defines the path to the metadata retrieval class for the `FilterBarBase` control. It basically identifies
     * the {@link sap.ui.mdc.FilterBarDelegate FilterBarDelegate} file that provides the required APIs to create
     * the filter bar content.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  **Note:** This property must not be bound.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `...see text or source`.
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
     * @since 1.66.0
     *
     * Sets a new value for property {@link #getFilterConditions filterConditions}.
     *
     * Specifies the filter conditions.
     *  **Note**: This property must not be bound.
     *  **Note**: This property is used exclusively for SAPUI5 flexibility. Do not use it otherwise.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `{}`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFilterConditions(
      /**
       * New value for property `filterConditions`
       */
      oFilterConditions?: object
    ): this;
    /**
     * @since 1.74
     *
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setLiveMode(
      /**
       * New value for property `liveMode`
       */
      bLiveMode?: boolean
    ): this;
    /**
     * @since 1.97
     *
     * Sets a new value for property {@link #getPropertyInfo propertyInfo}.
     *
     * Specifies the filter metadata.
     *  **Note**: This property must not be bound.
     *  **Note**: This property is used exclusively for SAPUI5 flexibility/ Fiori Elements. Do not use it otherwise.
     *  **Node**: Please check {@link sap.ui.mdc.filterbar.PropertyInfo} for more information about the supported
     * inner elements.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `[]`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setPropertyInfo(
      /**
       * New value for property `propertyInfo`
       */
      oPropertyInfo?: object
    ): this;
    /**
     * Sets a new value for property {@link #getShowGoButton showGoButton}.
     *
     * Determines whether the Go button is visible in the filter bar.
     *  **Note**: If the `liveMode` property is set to `true`, it is ignored.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
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
     * @since 1.74
     *
     * Sets a new value for property {@link #getShowMessages showMessages}.
     *
     * Displays possible errors during the search in a message box.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
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
     * @since 1.79.0
     *
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
     * @returns Returns a Promise which resolves after the validation of erroneous fields has been propagated.
     */
    triggerSearch(): Promise<any>;
    /**
     * Returns a `Promise` for the asynchronous validation of filters.
     *
     * @returns Returns a `Promise` that resolves after the validation of erroneous fields has been propagated.
     */
    validate(
      /**
       * Determines if the `search` event is triggered after successful validation
       */
      bSuppressSearch: boolean
    ): Promise<any>;
  }

  export interface $FilterBarBaseSettings extends $ControlSettings {
    /**
     * @since 1.74
     *
     * Defines the path to the metadata retrieval class for the `FilterBarBase` control. It basically identifies
     * the {@link sap.ui.mdc.FilterBarDelegate FilterBarDelegate} file that provides the required APIs to create
     * the filter bar content.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  **Note:** This property must not be bound.
     */
    delegate?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.74
     *
     * Triggers a search automatically after a filter value has been changed.
     *  **Note:** The `liveMode` property only operates in non-mobile scenarios.
     *  Additionally, if the `liveMode` property is active, the following applies:
     *  The error message box is not displayed, and the `showMessages` property is ignored.
     */
    liveMode?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.74
     *
     * Displays possible errors during the search in a message box.
     */
    showMessages?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the Go button is visible in the filter bar.
     *  **Note**: If the `liveMode` property is set to `true`, it is ignored.
     */
    showGoButton?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.66.0
     *
     * Specifies the filter conditions.
     *  **Note**: This property must not be bound.
     *  **Note**: This property is used exclusively for SAPUI5 flexibility. Do not use it otherwise.
     */
    filterConditions?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.97
     *
     * Specifies the filter metadata.
     *  **Note**: This property must not be bound.
     *  **Note**: This property is used exclusively for SAPUI5 flexibility/ Fiori Elements. Do not use it otherwise.
     *  **Node**: Please check {@link sap.ui.mdc.filterbar.PropertyInfo} for more information about the supported
     * inner elements.
     */
    propertyInfo?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.79.0
     *
     * If set to `true`, all search requests are ignored. Once it has been set to `false`, a search is triggered
     * immediately if one or more search requests have been triggered in the meantime but were ignored based
     * on the setting.
     */
    suspendSelection?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Contains all the displayed {@link sap.ui.mdc.FilterField filter fields} of the `FilterBarBase` control.
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
     * {@link sap.ui.fl.variants.VariantManagement VariantManagement} control for the filter bar. **Note**:
     * This association is only required to get information from {@link https://ui5.sap.com/#/topic/a8e55aa2f8bc4127923b20685a6d1621 SAPUI5 Flexibility }
     * whenever a variant was applied, with 'apply automatically' set to `true`. **Note**: This association
     * must only be assigned once.
     */
    variantBackreference?: VariantManagement | string;

    /**
     * This event is fired when the Go button is pressed or after a condition change, when `liveMode` is active.
     * **Note**: This event should never be executed programmatically. It is triggered internally by the filter
     * bar after a `triggerSearch` has been executed
     */
    search?: (oEvent: Event) => void;

    /**
     * This event is fired after either a filter value or the visibility of a filter item has been changed.
     */
    filtersChanged?: (
      oEvent: Event<FilterBarBase$FiltersChangedEventParameters>
    ) => void;
  }

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
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'FilterBarBase$FiltersChangedEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $FilterBarBaseFiltersChangedEventParameters = FilterBarBase$FiltersChangedEventParameters;

  export type FilterBarBase$FiltersChangedEvent = Event<FilterBarBase$FiltersChangedEventParameters>;

  export interface FilterBarBase$SearchEventParameters {}

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'FilterBarBase$SearchEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $FilterBarBaseSearchEventParameters = FilterBarBase$SearchEventParameters;

  export type FilterBarBase$SearchEvent = Event<FilterBarBase$SearchEventParameters>;
}

declare module "sap/ui/mdc/filterbar/IFilterContainer" {
  import Control from "sap/ui/core/Control";

  /**
   * @since 1.61.0
   *
   * The `IFilterContainer` is the base container for the visualization of the filter items in the filter
   * bar.
   */
  export default class IFilterContainer {
    constructor();

    /**
     * Overwrites the default exit to clean up the created layout properly.
     */
    exit(): void;
    /**
     * Returns the inner controls of the layout item.
     *
     * @returns Array of all inner controls in the layout item
     */
    getFilterFields(): /* was: sap.ui.mdc.FilterItem */ any[];
    /**
     * Getter for the inner layout item.
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
      oControl: /* was: sap.ui.mdc.FilterItem */ any,
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
      oControl: /* was: sap.ui.mdc.FilterItem */ any
    ): void;
  }
}

declare module "sap/ui/mdc/filterbar/vh/FilterBar" {
  import {
    default as FilterBarBase,
    $FilterBarBaseSettings,
  } from "sap/ui/mdc/filterbar/FilterBarBase";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @since 1.84.0
   *
   * The `FilterBar` control is used to display filter properties in a user-friendly manner to populate values
   * for a query. The filters are arranged in a logical row that is divided depending on the space available
   * and the width of the filters. The Go button triggers the search event, and the Show Filters button shows
   * the additional filter field.
   *  The `FilterBar` control creates and handles the filters based on the provided metadata information.
   * The metadata information is provided via the {@link sap.ui.mdc.FilterBarDelegate FilterBarDelegate} implementation.
   * This implementation has to be provided by the application.
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
     * Creates a new subclass of class sap.ui.mdc.filterbar.vh.FilterBar with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.filterbar.FilterBarBase.extend}.
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Destroyes the `CollectiveSearch` control
     *
     * **Note:** This must only be used by the corresponding value help, not from outside.
     *
     * @returns Reference to `this` to allow method chaining
     */
    destroyCollectiveSearch(): this;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Gets the `CollectiveSearch` control
     *
     * **Note:** This must only be used by the corresponding value help, not from outside.
     *
     * @returns `CollectiveSearch` control
     */
    getCollectiveSearch(): /* was: sap.ui.mdc.filterbar.vh.CollectiveSearchSelect */ any;
    /**
     * @experimental
     *
     * Gets current value of property {@link #getDelegate delegate}.
     *
     * Path to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * Default value is `...see text or source`.
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
     * @returns Value of property `filterFieldThreshold`
     */
    getFilterFieldThreshold(): int;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Sets the `CollectiveSearch` control
     *
     * **Note:** This must only be done by the corresponding value help, not from outside.
     *
     * @returns Reference to `this` to allow method chaining
     */
    setCollectiveSearch(
      /**
       * `CollectiveSearch` control
       */
      oCollectiveSearch: /* was: sap.ui.mdc.filterbar.vh.CollectiveSearchSelect */ any
    ): this;
    /**
     * @experimental
     *
     * Sets a new value for property {@link #getDelegate delegate}.
     *
     * Path to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `...see text or source`.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setFilterFieldThreshold(
      /**
       * New value for property `filterFieldThreshold`
       */
      iFilterFieldThreshold?: int
    ): this;
  }

  export interface $FilterBarSettings extends $FilterBarBaseSettings {
    /**
     * @experimental
     *
     * Path to the `Delegate` module that provides the required APIs to execute model-specific logic.
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

declare module "sap/ui/mdc/filterbar/vh/FilterContainer" {
  import IFilterContainer from "sap/ui/mdc/filterbar/IFilterContainer";

  import Metadata from "sap/ui/base/Metadata";

  /**
   * @since 1.84.0
   * Protected:  DO NOT USE IN APPLICATIONS (only for related classes in the framework)
   *
   * The FilterContainer is a IFilterContainer implementation for `AlignedFlowLayout`
   */
  export default class FilterContainer extends IFilterContainer {
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Constructor for a new filterBar/vh/FilterContainer.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string
    );

    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Creates a new subclass of class sap.ui.mdc.filterbar.vh.FilterContainer with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.mdc.filterbar.IFilterContainer.extend}.
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
      oClassInfo?: sap.ClassInfo<T, FilterContainer>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Returns a metadata object for class sap.ui.mdc.filterbar.vh.FilterContainer.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): Metadata;
  }
}

declare module "sap/ui/mdc/FilterBarDelegate" {
  import Control from "sap/ui/mdc/Control";

  import FilterField from "sap/ui/mdc/FilterField";

  import FilterBar from "sap/ui/mdc/FilterBar";

  import FilterBarValidationStatus from "sap/ui/mdc/enums/FilterBarValidationStatus";

  import { filterbar } from "sap/ui/mdc/library";

  import Control1 from "sap/ui/core/Control";

  /**
   * @since 1.61.0
   *
   * Base Delegate for {@link sap.ui.mdc.FilterBar FilterBar}. Extend this object in your project to use all
   * functionalities of the {@link sap.ui.mdc.FilterBar FilterBar}. This class provides method calls, which
   * are called by the `FilterBar` at specific operations and allows to overwrite an internal behaviour..
   */
  export default class FilterBarDelegate {
    constructor();

    /**
     * This method is called during the appliance of the add condition change. The intention is to update the
     * {@link sap.ui.mdc.FilterBar#propertyInfo} property.
     *
     * @returns `Promise` that is resolved once the propertyInfo property has been updated
     */
    static addCondition(
      /**
       * The name of a property
       */
      sPropertyName: string,
      /**
       * The instance of a filter bar
       */
      oControl: Control,
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
     * @returns `Promise` that resolves with an instance of the implementing {@link sap.ui.mdc.FilterField Control}.
     * **Note:** This method always requires a return value once it has been called. If an item for a given
     * property `sPropertyName` has already been created, it must to either return the existing instance or
     * create a new instance.
     */
    static addItem(
      /**
       * The name of the property info object/JSON
       */
      sPropertyName: string,
      /**
       * Instance of an `sap.ui.mdc.Control`
       */
      oControl: Control,
      /**
       * Instance of property bag from SAPUI5 flexibility change API
       */
      mPropertyBag?: Object
    ): Promise<FilterField>;
    /**
     * This method is called when the Clear button is pressed.
     *
     * @returns `Promise` that is resolved once the action has been completed
     */
    static clearFilters(
      /**
       * The instance of a filter bar
       */
      oControl: Control
    ): Promise<any>;
    /**
     * A validator to evaluate the filter bar state.
     *
     * @returns The inner filter bar state
     */
    static determineValidationState(
      /**
       * Instance of an `sap.ui.mdc.FilterBar`
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
     * @returns Once resolved, an array of property info objects is returned
     */
    static fetchProperties(
      /**
       * Instance of an `sap.ui.mdc.Control`
       */
      oControl: Control
    ): Promise<filterbar.PropertyInfo[]>;
    /**
     * This method is called during the appliance of the remove condition change. The intention is to update
     * the {@link sap.ui.mdc.FilterBar#propertyInfo} property.
     *
     * @returns `Promise` that is resolved once the propertyInfo property has been updated
     */
    static removeCondition(
      /**
       * The name of a property
       */
      sPropertyName: string,
      /**
       * The instance of a filter bar
       */
      oControl: Control,
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
     * @returns `Promise` that resolved with `true`, `false` to allow/prevent default behavior of the change
     */
    static removeItem(
      /**
       * The control instance that was removed
       */
      oItem: Control1,
      /**
       * Instance of an `sap.ui.mdc.Control`
       */
      oControl: Control,
      /**
       * Instance of property bag from SAPUI5 flexibility
       */
      mPropertyBag?: Object
    ): Promise<boolean>;
    /**
     * Visualizes the filter bar validation state.
     */
    static visualizeValidationState(
      /**
       * Instance of an `sap.ui.mdc.FilterBar`
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
   * @since 1.48.0
   * @experimental (since 1.48.0)
   *
   * The `FilterField` control is used to filter data based on the conditions. The conditions are managed
   * in the corresponding {@link sap.ui.mdc.condition.ConditionModel ConditionModel}. That is why the `conditions`
   * property must be bound to the related conditions in the {@link sap.ui.mdc.condition.ConditionModel ConditionModel}.
   * The type of this data must be defined in the `dataType` property.
   *
   *
   * 	 - In display mode normally a {@link sap.m.Text Text} control is rendered.
   * 	 - If `multipleLines` is set a {@link sap.m.ExpandableText ExpandableText} control is rendered.
   * 	 - If multiple values are allowed a {@link sap.m.Tokenizer Tokenizer} control is rendered.
   * 	 - In edit mode normally a {@link sap.m.Input Input} control is rendered.
   * 	 - If multiple values are allowed a {@link sap.m.MultiInput MultiInput} control is rendered.
   * 	 - If `multipleLines` is set a {@link sap.m.TextArea TextArea} control is rendered.
   * 	 - If a date type or a date-time type is used, a {@link sap.m.DateRangeSelection DateRangeSelection }
   *     control is rendered.
   * 	 - If a date type is used and only single values are allowed, a {@link sap.m.DatePicker DatePicker }
   *     control is rendered.
   * 	 - If a date type is used and only single ranges are allowed, a {@link sap.m.DateRangeSelection DateRangeSelection }
   *     control is rendered.
   * 	 - If a date-time type is used and only single values are allowed, a {@link sap.m.DateTimePicker DateTimePicker }
   *     control is rendered.
   * 	 - If a time type is used and only single values are allowed, a {@link sap.m.TimePicker TimePicker }
   *     control is rendered.
   * 	 - If used for search a {@link sap.m.SearchField SearchField} control is rendered.
   */
  export default class FilterField
    extends FieldBase
    implements IFormContent, ISemanticFormContent, IOverflowToolbarContent {
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds an operator to the list of known operators.
     *
     * **Note**: If no operator is set, the used `datatType` of the `FilterField` defines the set of default
     * operators.
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
     * itself, or multiple operators inside an array.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:change change} to attached listeners.
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
     * @since 1.88.0
     *
     * Gets current value of property {@link #getDefaultOperator defaultOperator}.
     *
     * Default operator name for conditions. If empty, the relevant default operator depending on the data type
     * used is taken.
     *
     * **Note**: `defaultOperator` can be the name of an {@link sap.ui.mdc.condition.Operator Operator} or the
     * instance itself.
     *
     * @returns Value of property `defaultOperator`
     */
    getDefaultOperator(): string;
    /**
     * @since 1.73.0
     *
     * Gets current value of property {@link #getOperators operators}.
     *
     * Supported operator names for conditions.
     *
     * If empty, default operators depending on used data type are used.
     *
     * Default value is `[]`.
     *
     * @returns Value of property `operators`
     */
    getOperators(): string[];
    /**
     * @since 1.115.0
     *
     * Gets current value of property {@link #getPropertyKey propertyKey}.
     *
     * Key of the property the `FilterField` represents.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `propertyKey`
     */
    getPropertyKey(): string;
    /**
     * Removes all operators from the list of known operators.
     */
    removeAllOperators(): void;
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
     * Removes all given operators from the list of known operators.
     *
     * **Note**: `aOperators` can be the name of an {@link sap.ui.mdc.condition.Operator Operator}, the instance
     * itself, or multiple operators inside an array.
     */
    removeOperators(
      /**
       * Array of operators
       */
      aOperators: Operator[]
    ): void;
    /**
     * @since 1.88.0
     *
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setDefaultOperator(
      /**
       * New value for property `defaultOperator`
       */
      sDefaultOperator?: string
    ): this;
    /**
     * @since 1.73.0
     *
     * Sets a new value for property {@link #getOperators operators}.
     *
     * Supported operator names for conditions.
     *
     * If empty, default operators depending on used data type are used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `[]`.
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
     * @since 1.115.0
     *
     * Sets a new value for property {@link #getPropertyKey propertyKey}.
     *
     * Key of the property the `FilterField` represents.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
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

  export interface $FilterFieldSettings extends $FieldBaseSettings {
    /**
     * @since 1.73.0
     *
     * Supported operator names for conditions.
     *
     * If empty, default operators depending on used data type are used.
     */
    operators?: string[] | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.88.0
     *
     * Default operator name for conditions. If empty, the relevant default operator depending on the data type
     * used is taken.
     *
     * **Note**: `defaultOperator` can be the name of an {@link sap.ui.mdc.condition.Operator Operator} or the
     * instance itself.
     */
    defaultOperator?: string | PropertyBindingInfo;

    /**
     * @since 1.115.0
     *
     * Key of the property the `FilterField` represents.
     */
    propertyKey?: string | PropertyBindingInfo;

    /**
     * This event is fired when the `value` property of the field is changed.
     *
     * **Note** This event is only triggered if the used content control has a change event.
     */
    change?: (oEvent: Event<FilterField$ChangeEventParameters>) => void;
  }

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
     * event is synchronous, the promise has already been already resolved. If it is asynchronous, it will be
     * resolved after the value has been updated.
     *
     * The `FilterField` should be set to busy during the parsing to prevent user input. As there might be a
     * whole group of fields that needs to be busy, this cannot be done automatically.
     */
    promise?: boolean;
  }

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'FilterField$ChangeEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $FilterFieldChangeEventParameters = FilterField$ChangeEventParameters;

  export type FilterField$ChangeEvent = Event<FilterField$ChangeEventParameters>;
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
   * @since 1.74
   * @experimental (since 1.74.0)
   *
   * A `Link` element can be used inside a `fieldInfo` aggregation of {@link sap.ui.mdc.Field} to enable navigation
   * scenarios with one or more targets through direct navigation or by opening a `Panel`.
   *  It can also be used to display additional content, such as `ContactDetails` on the `Panel`.
   *  **Note:** The navigation targets and the behavior of the control are determined by the implementation
   * of a {@link module:sap/ui/mdc/LinkDelegate LinkDelegate}.
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Retrieves the relevant metadata for the panel and returns a property info array.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Retrieves the items that are initially part of the baseline which is used when a reset is done.
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
     * @experimental
     *
     * Gets current value of property {@link #getDelegate delegate}.
     *
     * Path to `LinkDelegate` module that provides the required APIs to create content for the `Link` control.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. Once the required module is associated, this property might not be
     * needed any longer.
     *
     * Default value is `...see text or source`.
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
     * @returns Value of property `enablePersonalization`
     */
    getEnablePersonalization(): boolean;
    /**
     * ID of the element which is the current target of the association {@link #getSourceControl sourceControl},
     * or `null`.
     */
    getSourceControl(): ID;
    /**
     *
     * @returns Resolves an array of type {@link sap.ui.core.Control}
     */
    retrieveAdditionalContent(): Promise<Control[]>;
    /**
     * Calls the `modifyLinkItems` function of `Delegate` before returning the `LinkItem` objects.
     *
     * @returns Resolves an array of type {@link sap.ui.mdc.link.LinkItem}
     */
    retrieveLinkItems(): Promise<LinkItem[]>;
    /**
     *
     * @returns Returns `undefined` or a {@link sap.ui.mdc.link.LinkType}, once resolved
     */
    retrieveLinkType(): Promise<undefined | LinkType>;
    /**
     * @experimental
     *
     * Sets a new value for property {@link #getDelegate delegate}.
     *
     * Path to `LinkDelegate` module that provides the required APIs to create content for the `Link` control.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. Once the required module is associated, this property might not be
     * needed any longer.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `...see text or source`.
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
    type: LinkType1;
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

  export interface $LinkSettings extends $FieldInfoBaseSettings {
    /**
     * Enables/disables the personalization settings for users and key users.
     */
    enablePersonalization?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @experimental
     *
     * Path to `LinkDelegate` module that provides the required APIs to create content for the `Link` control.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. Once the required module is associated, this property might not be
     * needed any longer.
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
   * @since 1.58.0
   *
   * A `LinkItem` control is used in the {@link sap.ui.mdc.Link} control to provide a navigation target.
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getDescription description}.
     *
     * Defines the additional text of the item.
     *
     * @returns Value of property `description`
     */
    getDescription(): string;
    /**
     * Gets current value of property {@link #getHref href}.
     *
     * Destination link for a navigation operation in external format (used when opening in new tab).
     *
     * @returns Value of property `href`
     */
    getHref(): string;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Defines the icon of the item.
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
     * @returns Value of property `initiallyVisible`
     */
    getInitiallyVisible(): boolean;
    /**
     * Gets current value of property {@link #getInternalHref internalHref}.
     *
     * Destination link for a navigation operation in internal format provided by the SAP Fiori launchpad (used
     * when navigation happens programmatically).
     *
     * @returns Value of property `internalHref`
     */
    getInternalHref(): string;
    /**
     * Gets current value of property {@link #getKey key}.
     *
     * Unique key of the `LinkItem` that is used for personalization.
     *
     * @returns Value of property `key`
     */
    getKey(): string;
    /**
     * Gets current value of property {@link #getTarget target}.
     *
     * Determines the target of the `Link` and has to be used as the `target` of an html anchor.
     *
     * Default value is `"_self"`.
     *
     * @returns Value of property `target`
     */
    getTarget(): string;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Text of the `Link` that is displayed.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setDescription(
      /**
       * New value for property `description`
       */
      sDescription: string
    ): this;
    /**
     * Sets a new value for property {@link #getHref href}.
     *
     * Destination link for a navigation operation in external format (used when opening in new tab).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHref(
      /**
       * New value for property `href`
       */
      sHref: string
    ): this;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Defines the icon of the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * when navigation happens programmatically).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setKey(
      /**
       * New value for property `key`
       */
      sKey: string
    ): this;
    /**
     * Sets a new value for property {@link #getTarget target}.
     *
     * Determines the target of the `Link` and has to be used as the `target` of an html anchor.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"_self"`.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setText(
      /**
       * New value for property `text`
       */
      sText: string
    ): this;
  }

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
     * Destination link for a navigation operation in external format (used when opening in new tab).
     */
    href?: string | PropertyBindingInfo;

    /**
     * Destination link for a navigation operation in internal format provided by the SAP Fiori launchpad (used
     * when navigation happens programmatically).
     */
    internalHref?: string | PropertyBindingInfo;

    /**
     * Determines the target of the `Link` and has to be used as the `target` of an html anchor.
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
    AggregationBindingInfo,
    PropertyBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Event from "sap/ui/base/Event";

  /**
   * @since 1.93.0
   * @experimental (since 1.93.0)
   *
   * A `MultiValueField` control can hold multiple values. The values are stored as items. A `MultiValueField`
   * control can be used to bind its items to data of a certain data type. Based on the data type settings,
   * a default control is rendered by the `MultiValueField` control.
   *
   *
   * 	 - In display mode normally a {@link sap.m.Tokenizer Tokenizer} control is rendered.
   * 	 - If `multipleLines` is set a {@link sap.m.ExpandableText ExpandableText} control is rendered.
   * 	 - In edit mode normally a {@link sap.m.MultiInput MultiInput} control is rendered.
   * 	 - If `multipleLines` is set a {@link sap.m.TextArea TextArea} control is rendered.
   */
  export default class MultiValueField
    extends FieldBase
    implements IFormContent, ISemanticFormContent, IOverflowToolbarContent {
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some item to the aggregation {@link #getItems items}.
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
     * Binds aggregation {@link #getItems items} to model data.
     *
     * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
     * of the possible properties of `oBindingInfo`.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.mdc.MultiValueField`.
     *
     * The passed function and listener object must match the ones used for event registration.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:change change} to attached listeners.
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
     * @experimental
     *
     * Gets current value of property {@link #getDelegate delegate}.
     *
     * Path to the `MultiValueFieldDelegate` module that provides the required APIs to execute model-specific
     * logic.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. Once the required module is associated, this property might not be
     * needed any longer.
     *
     * Default value is `...see text or source`.
     *
     * @returns Value of property `delegate`
     */
    getDelegate(): object;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * Items of the `MultiValueField` control.
     */
    getItems(): MultiValueFieldItem[];
    /**
     * Checks for the provided `sap.ui.mdc.field.MultiValueFieldItem` in the aggregation {@link #getItems items}.
     * and returns its index if found or -1 otherwise.
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
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): MultiValueFieldItem[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
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
     * @experimental
     *
     * Sets a new value for property {@link #getDelegate delegate}.
     *
     * Path to the `MultiValueFieldDelegate` module that provides the required APIs to execute model-specific
     * logic.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. Once the required module is associated, this property might not be
     * needed any longer.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `...see text or source`.
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
     * Unbinds aggregation {@link #getItems items} from model data.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    unbindItems(): this;
  }

  export interface $MultiValueFieldSettings extends $FieldBaseSettings {
    /**
     * @experimental
     *
     * Path to the `MultiValueFieldDelegate` module that provides the required APIs to execute model-specific
     * logic.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. Once the required module is associated, this property might not be
     * needed any longer.
     */
    delegate?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Items of the `MultiValueField` control.
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
    change?: (oEvent: Event<MultiValueField$ChangeEventParameters>) => void;
  }

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
     * event is synchronous, the promise has already been resolved. If it is asynchronous, it will be resolved
     * after the items have been updated.
     *
     * The `MultiValueField` control should be set to busy during the parsing to prevent user input. As there
     * might be a whole group of fields that need to be busy, this cannot be done automatically.
     */
    promise?: Promise<any>;
  }

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'MultiValueField$ChangeEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $MultiValueFieldChangeEventParameters = MultiValueField$ChangeEventParameters;

  export type MultiValueField$ChangeEvent = Event<MultiValueField$ChangeEventParameters>;
}

declare module "sap/ui/mdc/table/V4AnalyticsPropertyHelper" {
  import { PropertyInfo } from "sap/ui/mdc/table/PropertyHelper";

  /**
   * An object literal describing a data property in the context of a {@link sap.ui.mdc.Table} with {@link module:sap/ui/mdc/odata/v4/TableDelegate}.
   *
   * When specifying the `PropertyInfo` objects in the {@link sap.ui.mdc.Table#getPropertyInfo propertyInfo }
   * property, the following attributes need to be specified:
   * 	 - `name`
   * 	 - `path`
   * 	 - `dataType`
   * 	 - `formatOptions`
   * 	 - `constraints`
   * 	 - `maxConditions`
   * 	 - `caseSensitive`
   * 	 - `visualSettings.widthCalculation`
   * 	 - `propertyInfos`
   * 	 - `groupable`
   * 	 - `key`
   * 	 - `unit`
   * 	 - `text`
   * 	 - `aggregatable`
   * 	 - `extension.technicallyGroupable`
   * 	 - `extension.technicallyAggregatable`
   * 	 - `extension.customAggregate`
   * 	 - `extension.customAggregate.contextDefiningProperties`
   *
   * If the property is complex, the following attributes need to be specified:
   * 	 - `name`
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
    };
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
}

declare module "sap/ui/mdc/p13n/StateUtil" {
  import Control from "sap/ui/mdc/Control";

  /**
   * @since 1.77.0
   *
   * Utility class for state handling of MDC controls. The `StateUtil` class is offering a generic way to
   * retrieve states and set a desired state for a given MDC control. The `StateUtil` class is tightly coupled
   * to the SAPUI5 flexibility integration of MDC controls. To use the APIs of `Stateutil`, the given MDC
   * control instance needs to fully enable all available `p13nMode` options. This way, `Stateutil` can create
   * the required changes and retrieve the relevant state of each control.
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

declare module "sap/ui/mdc/Table" {
  import { default as Control, $ControlSettings } from "sap/ui/mdc/Control";

  import Control1 from "sap/ui/core/Control";

  import Column from "sap/ui/mdc/table/Column";

  import CopyProvider from "sap/m/plugins/CopyProvider";

  import DataStateIndicator from "sap/m/plugins/DataStateIndicator";

  import { ID, TitleLevel, CSSSize } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import TableP13nMode from "sap/ui/mdc/enums/TableP13nMode";

  import RowSettings from "sap/ui/mdc/table/RowSettings";

  import Context from "sap/ui/model/Context";

  import TableSelectionMode from "sap/ui/mdc/enums/TableSelectionMode";

  import TableTypeBase from "sap/ui/mdc/table/TableTypeBase";

  import TableType from "sap/ui/mdc/enums/TableType";

  import VariantManagement from "sap/ui/fl/variants/VariantManagement";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import Event from "sap/ui/base/Event";

  /**
   * @since 1.58
   * @experimental (since 1.58.0)
   *
   * A metadata-driven table to simplify the usage of existing tables, such as the `ResponsiveTable` and `GridTable`
   * controls. The metadata needs to be provided via the {@link module:sap/ui/mdc/TableDelegate TableDelegate }
   * implementation as {@link sap.ui.mdc.table.PropertyInfo}.
   */
  export default class Table extends Control {
    /**
     * Constructor for a new `MDCTable`.
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
     * Constructor for a new `MDCTable`.
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
      oAction: Control1
    ): this;
    /**
     * Adds some column to the aggregation {@link #getColumns columns}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addColumn(
      /**
       * The column to add; if empty, nothing is inserted
       */
      oColumn: Column
    ): this;
    /**
     * @since 1.75
     *
     * Attaches event handler `fnFunction` to the {@link #event:beforeExport beforeExport} event of this `sap.ui.mdc.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.Table` itself.
     *
     * This event is fired right before the export is triggered.
     *
     * For more information about the export settings, see {@link sap.ui.export.Spreadsheet} or {@link https://ui5.sap.com/#/topic/7e12e6b9154a4607be9d6072c72d609c Spreadsheet Export Configuration}.
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
     * @since 1.75
     *
     * Attaches event handler `fnFunction` to the {@link #event:beforeExport beforeExport} event of this `sap.ui.mdc.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.Table` itself.
     *
     * This event is fired right before the export is triggered.
     *
     * For more information about the export settings, see {@link sap.ui.export.Spreadsheet} or {@link https://ui5.sap.com/#/topic/7e12e6b9154a4607be9d6072c72d609c Spreadsheet Export Configuration}.
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
     * Attaches event handler `fnFunction` to the {@link #event:paste paste} event of this `sap.ui.mdc.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.Table` itself.
     *
     * This event is fired when the user pastes content from the clipboard to the table.
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
     * This event is fired when a row in the table is pressed.
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
     * This event is fired when a row in the table is pressed.
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
     * This event is fired when the selection in the table is changed.
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
     * This event is fired when the selection in the table is changed.
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
     * Destroys all the actions in the aggregation {@link #getActions actions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyActions(): this;
    /**
     * Destroys all the columns in the aggregation {@link #getColumns columns}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyColumns(): this;
    /**
     * @since 1.114
     *
     * Destroys the copyProvider in the aggregation {@link #getCopyProvider copyProvider}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyCopyProvider(): this;
    /**
     * @experimental - Do not use
     *
     * Destroys the creationRow in the aggregation {@link #getCreationRow creationRow}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyCreationRow(): this;
    /**
     * @since 1.89
     *
     * Destroys the dataStateIndicator in the aggregation {@link #getDataStateIndicator dataStateIndicator}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyDataStateIndicator(): this;
    /**
     * @since 1.106
     *
     * Destroys the noData in the aggregation {@link #getNoData noData}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyNoData(): this;
    /**
     * Destroys the quickFilter in the aggregation {@link #getQuickFilter quickFilter}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyQuickFilter(): this;
    /**
     * Destroys the rowSettings in the aggregation {@link #getRowSettings rowSettings}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyRowSettings(): this;
    /**
     * Destroys the type in the aggregation {@link #getType type}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyType(): this;
    /**
     * Destroys the variant in the aggregation {@link #getVariant variant}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyVariant(): this;
    /**
     * @since 1.75
     *
     * Detaches event handler `fnFunction` from the {@link #event:beforeExport beforeExport} event of this `sap.ui.mdc.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
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
     * Detaches event handler `fnFunction` from the {@link #event:paste paste} event of this `sap.ui.mdc.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
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
     * @since 1.75
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:beforeExport beforeExport} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireBeforeExport(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Table$BeforeExportEventParameters
    ): this;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:paste paste} to attached listeners.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:rowPress rowPress} to attached listeners.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:selectionChange selectionChange} to attached listeners.
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
     * @since 1.86
     *
     * Sets the focus on the row. If `bFirstInteractiveElement` is `true`, and there are interactive elements
     * inside the row, sets the focus on the first interactive element. Otherwise sets the focus on the first
     * data cell, if the type is `GridTableType`, and on the entire row, if the type is `ResponsiveTableType`.
     * If the given index is not visible, the table scrolls to it automatically. In this case the same rules
     * apply as in {@link #scrollToIndex}.
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
     * Additional/external actions available for the table.
     */
    getActions(): Control1[];
    /**
     * @since 1.87
     *
     * Gets current value of property {@link #getAggregateConditions aggregateConditions}.
     *
     * Defines the aggregate conditions.
     *
     * **Note**: This property must not be bound.
     *  **Note:** This property is exclusively used for handling SAPUI5 flexibility changes.
     *
     * @returns Value of property `aggregateConditions`
     */
    getAggregateConditions(): object;
    /**
     * Gets current value of property {@link #getAutoBindOnInit autoBindOnInit}.
     *
     * Determines whether to bind the table automatically after the initial creation or re-creation of the table.
     *
     * Default value is `true`.
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
     * @returns Value of property `busyIndicatorDelay`
     */
    getBusyIndicatorDelay(): int;
    /**
     * Gets content of aggregation {@link #getColumns columns}.
     *
     * Columns of the table.
     */
    getColumns(): Column[];
    /**
     * @since 1.114
     *
     * Gets content of aggregation {@link #getCopyProvider copyProvider}.
     *
     * Defines an aggregation for the `CopyProvider` plugin that provides copy to clipboard capabilities for
     * the selected rows of the table and creates a Copy button for the toolbar of the table. To disable the
     * copy function of the table, including the Copy button in the toolbar, the `enabled` property of the `CopyProvider`
     * must be set to `false`. To hide the Copy button from the toolbar, the `visible` property of the `CopyProvider`
     * must be set to `false`.
     *
     * **Note:** The {@link sap.m.plugins.CopyProvider#extractData extractData} property of the `CopyProvider`
     * must not be managed by the application.
     */
    getCopyProvider(): CopyProvider;
    /**
     * @experimental - Do not use
     *
     * Gets content of aggregation {@link #getCreationRow creationRow}.
     *
     * This row can be used for user input to create new data if {@link sap.ui.mdc.enums.TableType TableType }
     * is "`Table`". **Note:** Once the binding supports creating transient records, this aggregation will be
     * removed.
     */
    getCreationRow(): /* was: sap.ui.mdc.table.CreationRow */ any;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fetches the current state of the table (as a JSON) **Note:** This API may return attributes corresponding
     * to the `p13nMode` property configuration.
     *
     * @returns Current state of the table
     */
    getCurrentState(): Object;
    /**
     * @since 1.89
     *
     * Gets content of aggregation {@link #getDataStateIndicator dataStateIndicator}.
     *
     * `DataStateIndicator` plugin that can be used to show binding-related messages.
     *
     * **Note:** The message filtering is not yet supported for this control. Therefore the {@link sap.m.plugins.DataStateIndicator#getEnableFiltering enableFiltering }
     * property of the `DataStateIndicator` plugin must not be set to `true`.
     */
    getDataStateIndicator(): DataStateIndicator;
    /**
     * @experimental
     *
     * Gets current value of property {@link #getDelegate delegate}.
     *
     * Path to `TableDelegate` module that provides the required APIs to create table content.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. Once the required module is associated, this property might not be
     * needed any longer.
     *
     * Default value is `...see text or source`.
     *
     * @returns Value of property `delegate`
     */
    getDelegate(): object;
    /**
     * @since 1.95
     *
     * Gets current value of property {@link #getEnableAutoColumnWidth enableAutoColumnWidth}.
     *
     * Enables automatic column width calculation based on metadata information if set to `true`. The column
     * width calculation takes the type, column label, referenced properties, and many other metadata parameters
     * into account. Providing a more precise `maxLength` value for the `String` type or `precision` value for
     * numeric types can help this algorithm to produce better results. The calculated column widths can have
     * a minimum of 3rem and a maximum of 20rem.
     *
     * **Note:** To customize the automatic column width calculation, the `visualSettings.widthSettings` key
     * of the `PropertyInfo` can be used. To avoid the heuristic column width calculation for a particular column,
     * the `visualSettings.widthSettings` key of the `PropertyInfo` must be set to `null`. This feature has
     * no effect if the `width` property of the column is bound or its value is set.
     *
     * Default value is `false`.
     *
     * @returns Value of property `enableAutoColumnWidth`
     */
    getEnableAutoColumnWidth(): boolean;
    /**
     * @since 1.90
     *
     * Gets current value of property {@link #getEnableColumnResize enableColumnResize}.
     *
     * Determines whether column resizing is enabled.
     *
     * Default value is `true`.
     *
     * @returns Value of property `enableColumnResize`
     */
    getEnableColumnResize(): boolean;
    /**
     * @since 1.75
     *
     * Gets current value of property {@link #getEnableExport enableExport}.
     *
     * Determines whether the table data export is enabled. To use the export functionality, the {@link sap.ui.export }
     * library is required.
     *
     * Default value is `false`.
     *
     * @returns Value of property `enableExport`
     */
    getEnableExport(): boolean;
    /**
     * @since 1.96
     *
     * Gets current value of property {@link #getEnablePaste enablePaste}.
     *
     * Determines whether the Paste button is enabled.
     *
     * Default value is `true`.
     *
     * @returns Value of property `enablePaste`
     */
    getEnablePaste(): boolean;
    /**
     * ID of the element which is the current target of the association {@link #getFilter filter}, or `null`.
     */
    getFilter(): ID;
    /**
     * @since 1.80.0
     *
     * Gets current value of property {@link #getFilterConditions filterConditions}.
     *
     * Defines the filter conditions.
     *
     * **Note**: This property must not be bound.
     *  **Note:** This property is used exclusively for handling SAPUI5 flexibility changes. Do not use it otherwise.
     *
     * Default value is `{}`.
     *
     * @returns Value of property `filterConditions`
     */
    getFilterConditions(): object;
    /**
     * @since 1.87
     *
     * Gets current value of property {@link #getGroupConditions groupConditions}.
     *
     * Defines the group conditions.
     *
     * **Note**: This property must not be bound.
     *  **Note:** This property is used exclusively for handling SAPUI5 flexibility changes. Do not use it otherwise.
     *
     * @returns Value of property `groupConditions`
     */
    getGroupConditions(): object;
    /**
     * Gets current value of property {@link #getHeader header}.
     *
     * Header text that is shown in the table.
     *
     * @returns Value of property `header`
     */
    getHeader(): string;
    /**
     * @since 1.84
     *
     * Gets current value of property {@link #getHeaderLevel headerLevel}.
     *
     * Semantic level of the header. For more information, see {@link sap.m.Title#setLevel}.
     *
     * Default value is `Auto`.
     *
     * @returns Value of property `headerLevel`
     */
    getHeaderLevel(): TitleLevel | keyof typeof TitleLevel;
    /**
     * @since 1.63
     *
     * Gets current value of property {@link #getHeaderVisible headerVisible}.
     *
     * Determines whether the header text is shown in the table. Regardless of its value, the given header text
     * is used to label the table correctly for accessibility purposes.
     *
     * Default value is `true`.
     *
     * @returns Value of property `headerVisible`
     */
    getHeaderVisible(): boolean;
    /**
     * @deprecated - Do not use.
     *
     * Gets current value of property {@link #getHeight height}.
     *
     * This property has no effect and will be rmoved soon.
     *
     * @returns Value of property `height`
     */
    getHeight(): CSSSize;
    /**
     * @since 1.93
     *
     * Gets current value of property {@link #getMultiSelectMode multiSelectMode}.
     *
     * Defines the multi-selection mode for the control. If this property is set to the `Default` value, the
     * `ResponsiveTable` type control renders the Select All checkbox in the column header, otherwise the Deselect
     * All icon is rendered.
     *
     * This property is used with the `selectionMode="Multi"`.
     *
     * **Note:** This property has currently no effect for table types other than `ResponsiveTable` type. This
     * is subject to change in future.
     *
     * Default value is `Default`.
     *
     * @returns Value of property `multiSelectMode`
     */
    getMultiSelectMode(): /* was: sap.ui.mdc.enums.TableMultiSelectMode */ any;
    /**
     * @since 1.106
     *
     * Gets content of aggregation {@link #getNoData noData}.
     *
     * Defines the custom visualization if there is no data to show in the table.
     *
     * **Note:** If {@link sap.m.IllustratedMessage} control is set for the `noData` aggregation and its {@link sap.m.IllustratedMessage#getTitle title }
     * property is not set then the table automatically offers a no data text with fitting {@link sap.m.IllustratedMessage.IllustratedMessageType illustration}.
     */
    getNoData(): Control1 | string;
    /**
     * @since 1.62
     *
     * Gets current value of property {@link #getP13nMode p13nMode}.
     *
     * Personalization options for the table.
     *  **Note:** The order of the options does not influence the position on the UI.
     *
     * Default value is `[]`.
     *
     * @returns Value of property `p13nMode`
     */
    getP13nMode(): Array<TableP13nMode | keyof typeof TableP13nMode>;
    /**
     * @since 1.111
     *
     * Gets current value of property {@link #getPropertyInfo propertyInfo}.
     *
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
     * Default value is `[]`.
     *
     * @returns Value of property `propertyInfo`
     */
    getPropertyInfo(): object[];
    /**
     * Gets content of aggregation {@link #getQuickFilter quickFilter}.
     *
     * Additional `Filter` for the table.
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
     * @returns The selected contexts
     */
    getSelectedContexts(): Context[];
    /**
     * Gets current value of property {@link #getSelectionMode selectionMode}.
     *
     * Selection mode of the table. Specifies whether single or multiple rows can be selected and how the selection
     * can be extended. It may also influence the visual appearance.
     *
     * With the {@link sap.ui.mdc.table.GridTableType GridTableType} and server-side models, range selections,
     * including Select All, only work properly if the count is known. Make sure the model/binding is configured
     * to request the count from the service.
     *
     * Default value is `None`.
     *
     * @returns Value of property `selectionMode`
     */
    getSelectionMode(): TableSelectionMode | keyof typeof TableSelectionMode;
    /**
     * @since 1.91
     *
     * Gets current value of property {@link #getShowPasteButton showPasteButton}.
     *
     * Determines whether the Paste button is visible.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showPasteButton`
     */
    getShowPasteButton(): boolean;
    /**
     * Gets current value of property {@link #getShowRowCount showRowCount}.
     *
     * Determines whether the number of rows is shown along with the header text. If set to `false`, the number
     * of rows is not shown on the user interface.
     *  **Note:**
     *  For better performance dedicated OData requests should not be sent. The count mode must be configured
     * either in the model or in the binding of the table.
     *  This property can only be used if the back-end service supports row count.
     *
     * Default value is `true`.
     *
     * @returns Value of property `showRowCount`
     */
    getShowRowCount(): boolean;
    /**
     * @since 1.73
     *
     * Gets current value of property {@link #getSortConditions sortConditions}.
     *
     * Defines the sort conditions.
     *
     * **Note**: This property must not be bound.
     *  **Note:** This property is used exclusively for handling SAPUI5 flexibility changes. Do not use it otherwise.
     *
     * @returns Value of property `sortConditions`
     */
    getSortConditions(): object;
    /**
     * @since 1.63
     *
     * Gets current value of property {@link #getThreshold threshold}.
     *
     * Number of records to be requested from the model. If the `type` property is set to `ResponsiveTable`,
     * then it refers to the {@link sap.m.ListBase#getGrowingThreshold growingThreshold} property of `ResponsiveTable`.
     * If the `type` property is set to `Table`, then it refers to the {@link sap.ui.table.Table#getThreshold threshold }
     * property of `GridTable`.
     *  **Note:** This property only takes effect if it is set to a positive integer value. Otherwise the table
     * uses the default value of the corresponding table types.
     *
     * Default value is `-1`.
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
     * @since 1.115
     *
     * Gets current value of property {@link #getUseColumnLabelsAsTooltips useColumnLabelsAsTooltips}.
     *
     * If no tooltip has been provided for a column, the column header text will automatically be applied as
     * a tooltip for the column.
     *
     * Default value is `false`.
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
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
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
      oAction: Control1
    ): int;
    /**
     * Checks for the provided `sap.ui.mdc.table.Column` in the aggregation {@link #getColumns columns}. and
     * returns its index if found or -1 otherwise.
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
     * Returns a `Promise` that resolves once the table has been initialized after the creation and changing
     * of its type.
     *
     * @returns A `Promise` that resolves after the table has been initialized
     */
    initialized(): Promise<any>;
    /**
     * Inserts a action into the aggregation {@link #getActions actions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertAction(
      /**
       * The action to insert; if empty, nothing is inserted
       */
      oAction: Control1,
      /**
       * The `0`-based index the action should be inserted at; for a negative value of `iIndex`, the action is
       * inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted
       * at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a column into the aggregation {@link #getColumns columns}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertColumn(
      /**
       * The column to insert; if empty, nothing is inserted
       */
      oColumn: Column,
      /**
       * The `0`-based index the column should be inserted at; for a negative value of `iIndex`, the column is
       * inserted at position 0; for a value greater than the current size of the aggregation, the column is inserted
       * at the last position
       */
      iIndex: int
    ): this;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Checks whether aggregation personalization is enabled.
     *
     * @returns Whether aggregation personalization is enabled
     */
    isAggregationEnabled(): boolean;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Checks whether filter personalization is enabled.
     *
     * @returns Whether filter personalization is enabled
     */
    isFilteringEnabled(): boolean;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Checks whether group personalization is enabled.
     *
     * @returns Whether group personalization is enabled
     */
    isGroupingEnabled(): boolean;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Checks whether sort personalization is enabled.
     *
     * @returns Whether sort personalization is enabled
     */
    isSortingEnabled(): boolean;
    /**
     * Checks whether the table is bound.
     *
     * @returns Whether the table is bound
     */
    isTableBound(): boolean;
    /**
     * Removes a action from the aggregation {@link #getActions actions}.
     *
     * @returns The removed action or `null`
     */
    removeAction(
      /**
       * The action to remove or its index or id
       */
      vAction: int | string | Control1
    ): Control1 | null;
    /**
     * Removes all the controls from the aggregation {@link #getActions actions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllActions(): Control1[];
    /**
     * Removes all the controls from the aggregation {@link #getColumns columns}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllColumns(): Column[];
    /**
     * Removes a column from the aggregation {@link #getColumns columns}.
     *
     * @returns The removed column or `null`
     */
    removeColumn(
      /**
       * The column to remove or its index or id
       */
      vColumn: int | string | Column
    ): Column | null;
    /**
     * @since 1.76
     *
     * Scrolls the table to the row with the given index. Depending on the table type, this might cause additional
     * requests. If the given index is -1, it will scroll to the end of the table based on the length of the
     * underlying binding. If the length is not final, it will only scroll to the end of the current binding
     * and might trigger a request for additional entries. This also applies in case of a responsive table with
     * growing enabled.
     *
     * @returns A `Promise` that resolves after the table scrolls to the row with the given index
     */
    scrollToIndex(
      /**
       * The index of the row that should be scrolled into the visible area
       */
      iIndex: number
    ): Promise<any>;
    /**
     * @since 1.87
     *
     * Sets a new value for property {@link #getAggregateConditions aggregateConditions}.
     *
     * Defines the aggregate conditions.
     *
     * **Note**: This property must not be bound.
     *  **Note:** This property is exclusively used for handling SAPUI5 flexibility changes.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAggregateConditions(
      /**
       * New value for property `aggregateConditions`
       */
      oAggregateConditions: object
    ): this;
    /**
     * Sets a new value for property {@link #getAutoBindOnInit autoBindOnInit}.
     *
     * Determines whether to bind the table automatically after the initial creation or re-creation of the table.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setBusyIndicatorDelay(
      /**
       * New value for property `busyIndicatorDelay`
       */
      iBusyIndicatorDelay?: int
    ): this;
    /**
     * @since 1.114
     *
     * Sets the aggregated {@link #getCopyProvider copyProvider}.
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
     * @experimental - Do not use
     *
     * Sets the aggregated {@link #getCreationRow creationRow}.
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
     * @since 1.89
     *
     * Sets the aggregated {@link #getDataStateIndicator dataStateIndicator}.
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
     * @experimental
     *
     * Sets a new value for property {@link #getDelegate delegate}.
     *
     * Path to `TableDelegate` module that provides the required APIs to create table content.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. Once the required module is associated, this property might not be
     * needed any longer.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `...see text or source`.
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
     * @since 1.95
     *
     * Sets a new value for property {@link #getEnableAutoColumnWidth enableAutoColumnWidth}.
     *
     * Enables automatic column width calculation based on metadata information if set to `true`. The column
     * width calculation takes the type, column label, referenced properties, and many other metadata parameters
     * into account. Providing a more precise `maxLength` value for the `String` type or `precision` value for
     * numeric types can help this algorithm to produce better results. The calculated column widths can have
     * a minimum of 3rem and a maximum of 20rem.
     *
     * **Note:** To customize the automatic column width calculation, the `visualSettings.widthSettings` key
     * of the `PropertyInfo` can be used. To avoid the heuristic column width calculation for a particular column,
     * the `visualSettings.widthSettings` key of the `PropertyInfo` must be set to `null`. This feature has
     * no effect if the `width` property of the column is bound or its value is set.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
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
     * @since 1.90
     *
     * Sets a new value for property {@link #getEnableColumnResize enableColumnResize}.
     *
     * Determines whether column resizing is enabled.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
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
     * @since 1.75
     *
     * Sets a new value for property {@link #getEnableExport enableExport}.
     *
     * Determines whether the table data export is enabled. To use the export functionality, the {@link sap.ui.export }
     * library is required.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
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
     * @since 1.96
     *
     * Sets a new value for property {@link #getEnablePaste enablePaste}.
     *
     * Determines whether the Paste button is enabled.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setFilter(
      /**
       * ID of an element which becomes the new target of this filter association; alternatively, an element instance
       * may be given
       */
      oFilter: ID | /* was: sap.ui.mdc.IFilter */ any
    ): this;
    /**
     * @since 1.80.0
     *
     * Sets a new value for property {@link #getFilterConditions filterConditions}.
     *
     * Defines the filter conditions.
     *
     * **Note**: This property must not be bound.
     *  **Note:** This property is used exclusively for handling SAPUI5 flexibility changes. Do not use it otherwise.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `{}`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFilterConditions(
      /**
       * New value for property `filterConditions`
       */
      oFilterConditions?: object
    ): this;
    /**
     * @since 1.87
     *
     * Sets a new value for property {@link #getGroupConditions groupConditions}.
     *
     * Defines the group conditions.
     *
     * **Note**: This property must not be bound.
     *  **Note:** This property is used exclusively for handling SAPUI5 flexibility changes. Do not use it otherwise.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setGroupConditions(
      /**
       * New value for property `groupConditions`
       */
      oGroupConditions: object
    ): this;
    /**
     * Sets a new value for property {@link #getHeader header}.
     *
     * Header text that is shown in the table.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * @since 1.84
     *
     * Sets a new value for property {@link #getHeaderLevel headerLevel}.
     *
     * Semantic level of the header. For more information, see {@link sap.m.Title#setLevel}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Auto`.
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
     * @since 1.63
     *
     * Sets a new value for property {@link #getHeaderVisible headerVisible}.
     *
     * Determines whether the header text is shown in the table. Regardless of its value, the given header text
     * is used to label the table correctly for accessibility purposes.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
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
     * @deprecated - Do not use.
     *
     * Sets a new value for property {@link #getHeight height}.
     *
     * This property has no effect and will be rmoved soon.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * @since 1.93
     *
     * Sets a new value for property {@link #getMultiSelectMode multiSelectMode}.
     *
     * Defines the multi-selection mode for the control. If this property is set to the `Default` value, the
     * `ResponsiveTable` type control renders the Select All checkbox in the column header, otherwise the Deselect
     * All icon is rendered.
     *
     * This property is used with the `selectionMode="Multi"`.
     *
     * **Note:** This property has currently no effect for table types other than `ResponsiveTable` type. This
     * is subject to change in future.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Default`.
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
     * @since 1.106
     *
     * Sets the aggregated {@link #getNoData noData}.
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
     * @since 1.62
     *
     * Sets a new value for property {@link #getP13nMode p13nMode}.
     *
     * Personalization options for the table.
     *  **Note:** The order of the options does not influence the position on the UI.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `[]`.
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
     * @since 1.111
     *
     * Sets a new value for property {@link #getPropertyInfo propertyInfo}.
     *
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
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `[]`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setPropertyInfo(
      /**
       * New value for property `propertyInfo`
       */
      sPropertyInfo?: object[]
    ): this;
    /**
     * Sets the aggregated {@link #getQuickFilter quickFilter}.
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
     * With the {@link sap.ui.mdc.table.GridTableType GridTableType} and server-side models, range selections,
     * including Select All, only work properly if the count is known. Make sure the model/binding is configured
     * to request the count from the service.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
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
     * @since 1.91
     *
     * Sets a new value for property {@link #getShowPasteButton showPasteButton}.
     *
     * Determines whether the Paste button is visible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
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
     * Determines whether the number of rows is shown along with the header text. If set to `false`, the number
     * of rows is not shown on the user interface.
     *  **Note:**
     *  For better performance dedicated OData requests should not be sent. The count mode must be configured
     * either in the model or in the binding of the table.
     *  This property can only be used if the back-end service supports row count.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
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
     * @since 1.73
     *
     * Sets a new value for property {@link #getSortConditions sortConditions}.
     *
     * Defines the sort conditions.
     *
     * **Note**: This property must not be bound.
     *  **Note:** This property is used exclusively for handling SAPUI5 flexibility changes. Do not use it otherwise.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSortConditions(
      /**
       * New value for property `sortConditions`
       */
      oSortConditions: object
    ): this;
    /**
     * @since 1.63
     *
     * Sets a new value for property {@link #getThreshold threshold}.
     *
     * Number of records to be requested from the model. If the `type` property is set to `ResponsiveTable`,
     * then it refers to the {@link sap.m.ListBase#getGrowingThreshold growingThreshold} property of `ResponsiveTable`.
     * If the `type` property is set to `Table`, then it refers to the {@link sap.ui.table.Table#getThreshold threshold }
     * property of `GridTable`.
     *  **Note:** This property only takes effect if it is set to a positive integer value. Otherwise the table
     * uses the default value of the corresponding table types.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `-1`.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setType(
      /**
       * The type to set
       */
      vType: TableTypeBase | (TableType | keyof typeof TableType)
    ): this;
    /**
     * @since 1.115
     *
     * Sets a new value for property {@link #getUseColumnLabelsAsTooltips useColumnLabelsAsTooltips}.
     *
     * If no tooltip has been provided for a column, the column header text will automatically be applied as
     * a tooltip for the column.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth?: CSSSize
    ): this;
  }

  export interface $TableSettings extends $ControlSettings {
    /**
     * Width of the table.
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * @deprecated - Do not use.
     *
     * This property has no effect and will be rmoved soon.
     */
    height?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.62
     *
     * Personalization options for the table.
     *  **Note:** The order of the options does not influence the position on the UI.
     */
    p13nMode?:
      | Array<TableP13nMode | keyof typeof TableP13nMode>
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * @experimental
     *
     * Path to `TableDelegate` module that provides the required APIs to create table content.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. Once the required module is associated, this property might not be
     * needed any longer.
     */
    delegate?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.84
     *
     * Semantic level of the header. For more information, see {@link sap.m.Title#setLevel}.
     */
    headerLevel?:
      | (TitleLevel | keyof typeof TitleLevel)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines whether to bind the table automatically after the initial creation or re-creation of the table.
     */
    autoBindOnInit?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Header text that is shown in the table.
     */
    header?: string | PropertyBindingInfo;

    /**
     * @since 1.63
     *
     * Determines whether the header text is shown in the table. Regardless of its value, the given header text
     * is used to label the table correctly for accessibility purposes.
     */
    headerVisible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.115
     *
     * If no tooltip has been provided for a column, the column header text will automatically be applied as
     * a tooltip for the column.
     */
    useColumnLabelsAsTooltips?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Selection mode of the table. Specifies whether single or multiple rows can be selected and how the selection
     * can be extended. It may also influence the visual appearance.
     *
     * With the {@link sap.ui.mdc.table.GridTableType GridTableType} and server-side models, range selections,
     * including Select All, only work properly if the count is known. Make sure the model/binding is configured
     * to request the count from the service.
     */
    selectionMode?:
      | (TableSelectionMode | keyof typeof TableSelectionMode)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines whether the number of rows is shown along with the header text. If set to `false`, the number
     * of rows is not shown on the user interface.
     *  **Note:**
     *  For better performance dedicated OData requests should not be sent. The count mode must be configured
     * either in the model or in the binding of the table.
     *  This property can only be used if the back-end service supports row count.
     */
    showRowCount?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.63
     *
     * Number of records to be requested from the model. If the `type` property is set to `ResponsiveTable`,
     * then it refers to the {@link sap.m.ListBase#getGrowingThreshold growingThreshold} property of `ResponsiveTable`.
     * If the `type` property is set to `Table`, then it refers to the {@link sap.ui.table.Table#getThreshold threshold }
     * property of `GridTable`.
     *  **Note:** This property only takes effect if it is set to a positive integer value. Otherwise the table
     * uses the default value of the corresponding table types.
     */
    threshold?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.73
     *
     * Defines the sort conditions.
     *
     * **Note**: This property must not be bound.
     *  **Note:** This property is used exclusively for handling SAPUI5 flexibility changes. Do not use it otherwise.
     */
    sortConditions?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.80.0
     *
     * Defines the filter conditions.
     *
     * **Note**: This property must not be bound.
     *  **Note:** This property is used exclusively for handling SAPUI5 flexibility changes. Do not use it otherwise.
     */
    filterConditions?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.87
     *
     * Defines the group conditions.
     *
     * **Note**: This property must not be bound.
     *  **Note:** This property is used exclusively for handling SAPUI5 flexibility changes. Do not use it otherwise.
     */
    groupConditions?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.87
     *
     * Defines the aggregate conditions.
     *
     * **Note**: This property must not be bound.
     *  **Note:** This property is exclusively used for handling SAPUI5 flexibility changes.
     */
    aggregateConditions?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.75
     *
     * Determines whether the table data export is enabled. To use the export functionality, the {@link sap.ui.export }
     * library is required.
     */
    enableExport?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The delay in milliseconds after which the busy indicator is shown.
     */
    busyIndicatorDelay?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.90
     *
     * Determines whether column resizing is enabled.
     */
    enableColumnResize?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.91
     *
     * Determines whether the Paste button is visible.
     */
    showPasteButton?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.96
     *
     * Determines whether the Paste button is enabled.
     */
    enablePaste?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.93
     *
     * Defines the multi-selection mode for the control. If this property is set to the `Default` value, the
     * `ResponsiveTable` type control renders the Select All checkbox in the column header, otherwise the Deselect
     * All icon is rendered.
     *
     * This property is used with the `selectionMode="Multi"`.
     *
     * **Note:** This property has currently no effect for table types other than `ResponsiveTable` type. This
     * is subject to change in future.
     */
    multiSelectMode?: /* was: sap.ui.mdc.enums.TableMultiSelectMode */
      | any
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * @since 1.95
     *
     * Enables automatic column width calculation based on metadata information if set to `true`. The column
     * width calculation takes the type, column label, referenced properties, and many other metadata parameters
     * into account. Providing a more precise `maxLength` value for the `String` type or `precision` value for
     * numeric types can help this algorithm to produce better results. The calculated column widths can have
     * a minimum of 3rem and a maximum of 20rem.
     *
     * **Note:** To customize the automatic column width calculation, the `visualSettings.widthSettings` key
     * of the `PropertyInfo` can be used. To avoid the heuristic column width calculation for a particular column,
     * the `visualSettings.widthSettings` key of the `PropertyInfo` must be set to `null`. This feature has
     * no effect if the `width` property of the column is bound or its value is set.
     */
    enableAutoColumnWidth?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.111
     *
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
     */
    propertyInfo?: object[] | PropertyBindingInfo | `{${string}}`;

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
     */
    columns?: Column[] | Column | AggregationBindingInfo | `{${string}}`;

    /**
     * @experimental - Do not use
     *
     * This row can be used for user input to create new data if {@link sap.ui.mdc.enums.TableType TableType }
     * is "`Table`". **Note:** Once the binding supports creating transient records, this aggregation will be
     * removed.
     */
    creationRow?: /* was: sap.ui.mdc.table.CreationRow */ any;

    /**
     * Additional/external actions available for the table.
     */
    actions?: Control1[] | Control1 | AggregationBindingInfo | `{${string}}`;

    /**
     * VariantManagement control for the table.
     */
    variant?: VariantManagement;

    /**
     * Additional `Filter` for the table.
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
     * @since 1.89
     *
     * `DataStateIndicator` plugin that can be used to show binding-related messages.
     *
     * **Note:** The message filtering is not yet supported for this control. Therefore the {@link sap.m.plugins.DataStateIndicator#getEnableFiltering enableFiltering }
     * property of the `DataStateIndicator` plugin must not be set to `true`.
     */
    dataStateIndicator?: DataStateIndicator;

    /**
     * @since 1.106
     *
     * Defines the custom visualization if there is no data to show in the table.
     *
     * **Note:** If {@link sap.m.IllustratedMessage} control is set for the `noData` aggregation and its {@link sap.m.IllustratedMessage#getTitle title }
     * property is not set then the table automatically offers a no data text with fitting {@link sap.m.IllustratedMessage.IllustratedMessageType illustration}.
     */
    noData?: string | Control1 | PropertyBindingInfo;

    /**
     * @since 1.114
     *
     * Defines an aggregation for the `CopyProvider` plugin that provides copy to clipboard capabilities for
     * the selected rows of the table and creates a Copy button for the toolbar of the table. To disable the
     * copy function of the table, including the Copy button in the toolbar, the `enabled` property of the `CopyProvider`
     * must be set to `false`. To hide the Copy button from the toolbar, the `visible` property of the `CopyProvider`
     * must be set to `false`.
     *
     * **Note:** The {@link sap.m.plugins.CopyProvider#extractData extractData} property of the `CopyProvider`
     * must not be managed by the application.
     */
    copyProvider?: CopyProvider;

    /**
     * Control or object that enables the table to do filtering, such as {@link sap.ui.mdc.FilterBar}. See also
     * {@link sap.ui.mdc.IFilter}.
     *
     * Automatic filter generation only works in combination with a `sap.ui.mdc.FilterBar`.
     */
    filter?: /* was: sap.ui.mdc.IFilter */ any | string;

    /**
     * This event is fired when a row in the table is pressed.
     */
    rowPress?: (oEvent: Event<Table$RowPressEventParameters>) => void;

    /**
     * This event is fired when the selection in the table is changed.
     */
    selectionChange?: (
      oEvent: Event<Table$SelectionChangeEventParameters>
    ) => void;

    /**
     * @since 1.75
     *
     * This event is fired right before the export is triggered.
     *
     * For more information about the export settings, see {@link sap.ui.export.Spreadsheet} or {@link https://ui5.sap.com/#/topic/7e12e6b9154a4607be9d6072c72d609c Spreadsheet Export Configuration}.
     */
    beforeExport?: (oEvent: Event<Table$BeforeExportEventParameters>) => void;

    /**
     * This event is fired when the user pastes content from the clipboard to the table.
     */
    paste?: (oEvent: Event<Table$PasteEventParameters>) => void;
  }

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
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'Table$BeforeExportEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $TableBeforeExportEventParameters = Table$BeforeExportEventParameters;

  export type Table$BeforeExportEvent = Event<Table$BeforeExportEventParameters>;

  export interface Table$PasteEventParameters {
    /**
     * 2D array of strings with data from the clipboard. The first dimension represents the rows, and the second
     * dimension represents the cells of the tabular data.
     */
    data?: string[][];
  }

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'Table$PasteEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $TablePasteEventParameters = Table$PasteEventParameters;

  export type Table$PasteEvent = Event<Table$PasteEventParameters>;

  export interface Table$RowPressEventParameters {
    /**
     * The binding context
     */
    bindingContext?: Context;
  }

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'Table$RowPressEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $TableRowPressEventParameters = Table$RowPressEventParameters;

  export type Table$RowPressEvent = Event<Table$RowPressEventParameters>;

  export interface Table$SelectionChangeEventParameters {
    /**
     * Identifies whether the Select All checkbox was pressed
     */
    selectAll?: boolean;
  }

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'Table$SelectionChangeEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $TableSelectionChangeEventParameters = Table$SelectionChangeEventParameters;

  export type Table$SelectionChangeEvent = Event<Table$SelectionChangeEventParameters>;
}

declare module "sap/ui/mdc/table/Column" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ColumnSettings from "sap/ui/mdc/table/ColumnSettings";

  import { HorizontalAlign, Priority, CSSSize } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @since 1.58
   *
   * The column for the metadata-driven table with the template, which is shown if the rows have data.
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * @experimental - Do not use
     *
     * Destroys the creationTemplate in the aggregation {@link #getCreationTemplate creationTemplate}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyCreationTemplate(): this;
    /**
     * @since 1.110
     *
     * Destroys the extendedSettings in the aggregation {@link #getExtendedSettings extendedSettings}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyExtendedSettings(): this;
    /**
     * Destroys the template in the aggregation {@link #getTemplate template}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTemplate(): this;
    /**
     * @experimental - Do not use
     *
     * Gets content of aggregation {@link #getCreationTemplate creationTemplate}.
     *
     * `CreationRow` template.
     *
     * **Note:** Once the binding supports creating transient records, this aggregation will be removed.
     */
    getCreationTemplate(): Control;
    /**
     * @since 1.84
     * @deprecated (since 1.115) - Please use `propertyKey` instead.
     *
     * Gets current value of property {@link #getDataProperty dataProperty}.
     *
     * Defines data property related to the column.
     *
     * @returns Value of property `dataProperty`
     */
    getDataProperty(): string;
    /**
     * @since 1.110
     *
     * Gets content of aggregation {@link #getExtendedSettings extendedSettings}.
     *
     * Defines type-specific column settings based on the used {@link sap.ui.mdc.table.TableTypeBase}.
     *
     * **Note:** Once `sap.ui.mdc.table.ColumnSettings` are defined, all properties provided by the `ColumnSettings`
     * are automatically assigned to the column.
     */
    getExtendedSettings(): ColumnSettings;
    /**
     * @since 1.80
     *
     * Gets current value of property {@link #getHAlign hAlign}.
     *
     * Defines the horizontal alignment of the column content.
     *
     * Default value is `"Begin"`.
     *
     * @returns Value of property `hAlign`
     */
    getHAlign(): HorizontalAlign | keyof typeof HorizontalAlign;
    /**
     * @since 1.80
     *
     * Gets current value of property {@link #getHeader header}.
     *
     * Defines the column header text.
     *
     * @returns Value of property `header`
     */
    getHeader(): string;
    /**
     * @since 1.80
     *
     * Gets current value of property {@link #getHeaderVisible headerVisible}.
     *
     * Defines whether the column header is visible.
     *
     * Default value is `true`.
     *
     * @returns Value of property `headerVisible`
     */
    getHeaderVisible(): boolean;
    /**
     * @deprecated (since 1.110) - replaced with {@link sap.ui.mdc.table.ResponsiveColumnSettings#importance }
     *
     *  This property will be ignored whenever the {@link sap.ui.mdc.table.ResponsiveColumnSettings} are applied
     * to the column.
     *
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
     * @returns Value of property `importance`
     */
    getImportance(): Priority | keyof typeof Priority;
    /**
     * @since 1.80
     *
     * Gets current value of property {@link #getMinWidth minWidth}.
     *
     * Defines the minimum width of the column.
     *
     * Default value is `8`.
     *
     * @returns Value of property `minWidth`
     */
    getMinWidth(): float;
    /**
     * @since 1.115
     *
     * Gets current value of property {@link #getPropertyKey propertyKey}.
     *
     * Defines data property related to the column.
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
     * @since 1.80
     *
     * Gets current value of property {@link #getWidth width}.
     *
     * Defines the width of the column.
     *
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
    /**
     * @experimental - Do not use
     *
     * Sets the aggregated {@link #getCreationTemplate creationTemplate}.
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
     * @since 1.84
     * @deprecated (since 1.115) - Please use `propertyKey` instead.
     *
     * Sets a new value for property {@link #getDataProperty dataProperty}.
     *
     * Defines data property related to the column.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * @since 1.110
     *
     * Sets the aggregated {@link #getExtendedSettings extendedSettings}.
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
     * @since 1.80
     *
     * Sets a new value for property {@link #getHAlign hAlign}.
     *
     * Defines the horizontal alignment of the column content.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Begin"`.
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
     * @since 1.80
     *
     * Sets a new value for property {@link #getHeader header}.
     *
     * Defines the column header text.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * @since 1.80
     *
     * Sets a new value for property {@link #getHeaderVisible headerVisible}.
     *
     * Defines whether the column header is visible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
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
     * @deprecated (since 1.110) - replaced with {@link sap.ui.mdc.table.ResponsiveColumnSettings#importance }
     *
     *  This property will be ignored whenever the {@link sap.ui.mdc.table.ResponsiveColumnSettings} are applied
     * to the column.
     *
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setImportance(
      /**
       * New value for property `importance`
       */
      sImportance?: Priority | keyof typeof Priority
    ): this;
    /**
     * @since 1.80
     *
     * Sets a new value for property {@link #getMinWidth minWidth}.
     *
     * Defines the minimum width of the column.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `8`.
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
     * @since 1.115
     *
     * Sets a new value for property {@link #getPropertyKey propertyKey}.
     *
     * Defines data property related to the column.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * @returns Returns `this` to allow method chaining
     */
    setTooltip(
      /**
       * New tooltip
       */
      vTooltip: string
    ): this;
    /**
     * @since 1.80
     *
     * Sets a new value for property {@link #getWidth width}.
     *
     * Defines the width of the column.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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

  export interface $ColumnSettings extends $ControlSettings {
    /**
     * @since 1.80
     *
     * Defines the width of the column.
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.80
     *
     * Defines the minimum width of the column.
     */
    minWidth?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.80
     *
     * Defines the column header text.
     */
    header?: string | PropertyBindingInfo;

    /**
     * @since 1.80
     *
     * Defines whether the column header is visible.
     */
    headerVisible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.80
     *
     * Defines the horizontal alignment of the column content.
     */
    hAlign?:
      | (HorizontalAlign | keyof typeof HorizontalAlign)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * @deprecated (since 1.110) - replaced with {@link sap.ui.mdc.table.ResponsiveColumnSettings#importance }
     *
     *  This property will be ignored whenever the {@link sap.ui.mdc.table.ResponsiveColumnSettings} are applied
     * to the column.
     *
     * Defines the column importance.
     *
     * The column importance is taken into consideration for calculating the `minScreenWidth` property and for
     * setting the `demandPopin` property of the column. See {@link sap.m.Table#getAutoPopinMode} for more details,
     * which is automatically set to `true`.
     */
    importance?:
      | (Priority | keyof typeof Priority)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * @since 1.84
     * @deprecated (since 1.115) - Please use `propertyKey` instead.
     *
     * Defines data property related to the column.
     */
    dataProperty?: string | PropertyBindingInfo;

    /**
     * @since 1.115
     *
     * Defines data property related to the column.
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
     * @experimental - Do not use
     *
     * `CreationRow` template.
     *
     * **Note:** Once the binding supports creating transient records, this aggregation will be removed.
     */
    creationTemplate?: Control;

    /**
     * @since 1.110
     *
     * Defines type-specific column settings based on the used {@link sap.ui.mdc.table.TableTypeBase}.
     *
     * **Note:** Once `sap.ui.mdc.table.ColumnSettings` are defined, all properties provided by the `ColumnSettings`
     * are automatically assigned to the column.
     */
    extendedSettings?: ColumnSettings;
  }
}

declare module "sap/ui/mdc/table/ColumnSettings" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @since 1.110
   *
   * The table type info class for the metadata-driven table.
   */
  export default class ColumnSettings extends UI5Element {
    /**
     * Constructor for a new `ColumnSettings`.
     *
     * Provides a number of general settings that are supported by both {@link sap.m.Column} and {@link sap.ui.table.Column}.
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
     * Provides a number of general settings that are supported by both {@link sap.m.Column} and {@link sap.ui.table.Column}.
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $ColumnSettingsSettings extends $ElementSettings {}
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
   * @since 1.65
   *
   * The table type info class for the metadata-driven table.
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getFixedColumnCount fixedColumnCount}.
     *
     * Defines the number of fixed columns in the inner table.
     *
     * Default value is `0`.
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
     * @returns Value of property `showHeaderSelector`
     */
    getShowHeaderSelector(): boolean;
    /**
     * Sets a new value for property {@link #getFixedColumnCount fixedColumnCount}.
     *
     * Defines the number of fixed columns in the inner table.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowHeaderSelector(
      /**
       * New value for property `showHeaderSelector`
       */
      bShowHeaderSelector?: boolean
    ): this;
  }

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
     * Defines the number of fixed columns in the inner table.
     */
    fixedColumnCount?: int | PropertyBindingInfo | `{${string}}`;
  }
}

declare module "sap/ui/mdc/table/PropertyHelper" {
  import { PropertyInfo as PropertyInfo1 } from "sap/ui/mdc/util/PropertyHelper";

  /**
   * An object literal describing a data property in the context of an {@link sap.ui.mdc.Table}.
   *
   * When specifying the `PropertyInfo` objects in the {@link sap.ui.mdc.Table#getPropertyInfo propertyInfo }
   * property, the following attributes need to be specified:
   * 	 - `name`
   * 	 - `path`
   * 	 - `dataType`
   * 	 - `formatOptions`
   * 	 - `constraints`
   * 	 - `maxConditions`
   * 	 - `caseSensitive`
   * 	 - `visualSettings.widthCalculation`
   * 	 - `propertyInfos`
   * 	 - `groupable`
   * 	 - `key`
   * 	 - `unit`
   * 	 - `text`
   *
   * If the property is complex, the following attributes need to be specified:
   * 	 - `name`
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
    key?: boolean;
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
   * @since 1.110
   *
   * The table type info class for the metadata-driven table.
   */
  export default class ResponsiveColumnSettings extends ColumnSettings {
    /**
     * Constructor for a new `ResponsiveColumnSettings`.
     *
     * Provides the following settings that are supported by the {@link sap.m.Column}:
     *
     *
     * 	 - importance
     * 	 - mergeFunction
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
     * Provides the following settings that are supported by the {@link sap.m.Column}:
     *
     *
     * 	 - importance
     * 	 - mergeFunction
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * @since 1.110
     *
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
     * @returns Value of property `importance`
     */
    getImportance(): Priority | keyof typeof Priority;
    /**
     * @since 1.110
     *
     * Gets current value of property {@link #getMergeFunction mergeFunction}.
     *
     * Defines the control serialization function to merge duplicate cells into one cell block. The control
     * itself uses this function to compare values of two duplicate cells.
     *
     * **Note:** Providing this property will automatically set {@link sap.m.Column#getMergeDuplicates} to `true`,
     * and the property itself is mapped to {@link sap.m.Column#getMergeFunctionName} of the inner column. Don't
     * set this property for cells for which the content provides a user interaction, such as `sap.m.Link`.
     *
     * @returns Value of property `mergeFunction`
     */
    getMergeFunction(): string;
    /**
     * @since 1.110
     *
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setImportance(
      /**
       * New value for property `importance`
       */
      sImportance?: Priority | keyof typeof Priority
    ): this;
    /**
     * @since 1.110
     *
     * Sets a new value for property {@link #getMergeFunction mergeFunction}.
     *
     * Defines the control serialization function to merge duplicate cells into one cell block. The control
     * itself uses this function to compare values of two duplicate cells.
     *
     * **Note:** Providing this property will automatically set {@link sap.m.Column#getMergeDuplicates} to `true`,
     * and the property itself is mapped to {@link sap.m.Column#getMergeFunctionName} of the inner column. Don't
     * set this property for cells for which the content provides a user interaction, such as `sap.m.Link`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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

  export interface $ResponsiveColumnSettingsSettings
    extends $ColumnSettingsSettings {
    /**
     * @since 1.110
     *
     * Defines the column importance.
     *
     * The column importance is taken into consideration for calculating the `minScreenWidth` property and for
     * setting the `demandPopin` property of the column. See {@link sap.m.Table#getAutoPopinMode} for more details,
     * which is automatically set to `true`.
     */
    importance?:
      | (Priority | keyof typeof Priority)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * @since 1.110
     *
     * Defines the control serialization function to merge duplicate cells into one cell block. The control
     * itself uses this function to compare values of two duplicate cells.
     *
     * **Note:** Providing this property will automatically set {@link sap.m.Column#getMergeDuplicates} to `true`,
     * and the property itself is mapped to {@link sap.m.Column#getMergeFunctionName} of the inner column. Don't
     * set this property for cells for which the content provides a user interaction, such as `sap.m.Link`.
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
   * @since 1.65
   *
   * The table type info class for the metadata-driven table.
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * @since 1.86
     *
     * Gets current value of property {@link #getDetailsButtonSetting detailsButtonSetting}.
     *
     * Defines which columns are hidden instead of moved into the pop-in area depending on their importance.
     * See {@link sap.m.Column#getImportance} and {@link sap.m.Table#getHiddenInPopin} for more details.
     *
     * **Note:** To hide columns based on their importance, it's mandatory to set `showDetailsButton="true"`.
     *  If no priority is given, the default configuration of {@link sap.ui.mdc.table.ResponsiveTableType#getShowDetailsButton }
     * is used.
     *  If this property is changed after the `Table` has been initialized, the new changes take effect only
     * when the Show / Hide Details button is pressed a second time.
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
     * @returns Value of property `growingMode`
     */
    getGrowingMode(): TableGrowingMode | keyof typeof TableGrowingMode;
    /**
     * @since 1.96
     *
     * Gets current value of property {@link #getPopinLayout popinLayout}.
     *
     * Defines the layout in which the table pop-in rows are rendered.
     *
     * Default value is `"Block"`.
     *
     * @returns Value of property `popinLayout`
     */
    getPopinLayout(): PopinLayout | keyof typeof PopinLayout;
    /**
     * @since 1.79
     *
     * Gets current value of property {@link #getShowDetailsButton showDetailsButton}.
     *
     * Specifies whether the Show / Hide Details button for the `ResponsiveTable` scenario is shown.
     *
     * If the available screen space gets too narrow, the columns configured with `High` and `Medium` importance
     * move to the pop-in area, while the columns with `Low` importance are hidden.
     *  On mobile phones, the columns with `Medium` importance are also hidden.
     *  As soon as the first column is hidden, this button appears in the table toolbar and gives the user the
     * possibility to toggle the visibility of the hidden columns in the pop-in area.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showDetailsButton`
     */
    getShowDetailsButton(): boolean;
    /**
     * @since 1.86
     *
     * Sets a new value for property {@link #getDetailsButtonSetting detailsButtonSetting}.
     *
     * Defines which columns are hidden instead of moved into the pop-in area depending on their importance.
     * See {@link sap.m.Column#getImportance} and {@link sap.m.Table#getHiddenInPopin} for more details.
     *
     * **Note:** To hide columns based on their importance, it's mandatory to set `showDetailsButton="true"`.
     *  If no priority is given, the default configuration of {@link sap.ui.mdc.table.ResponsiveTableType#getShowDetailsButton }
     * is used.
     *  If this property is changed after the `Table` has been initialized, the new changes take effect only
     * when the Show / Hide Details button is pressed a second time.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setGrowingMode(
      /**
       * New value for property `growingMode`
       */
      sGrowingMode?: TableGrowingMode | keyof typeof TableGrowingMode
    ): this;
    /**
     * @since 1.96
     *
     * Sets a new value for property {@link #getPopinLayout popinLayout}.
     *
     * Defines the layout in which the table pop-in rows are rendered.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Block"`.
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
     * @since 1.79
     *
     * Sets a new value for property {@link #getShowDetailsButton showDetailsButton}.
     *
     * Specifies whether the Show / Hide Details button for the `ResponsiveTable` scenario is shown.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowDetailsButton(
      /**
       * New value for property `showDetailsButton`
       */
      bShowDetailsButton?: boolean
    ): this;
  }

  export interface $ResponsiveTableTypeSettings extends $TableTypeBaseSettings {
    /**
     * Specifies the growing mode.
     */
    growingMode?:
      | (TableGrowingMode | keyof typeof TableGrowingMode)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * @since 1.79
     *
     * Specifies whether the Show / Hide Details button for the `ResponsiveTable` scenario is shown.
     *
     * If the available screen space gets too narrow, the columns configured with `High` and `Medium` importance
     * move to the pop-in area, while the columns with `Low` importance are hidden.
     *  On mobile phones, the columns with `Medium` importance are also hidden.
     *  As soon as the first column is hidden, this button appears in the table toolbar and gives the user the
     * possibility to toggle the visibility of the hidden columns in the pop-in area.
     */
    showDetailsButton?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.86
     *
     * Defines which columns are hidden instead of moved into the pop-in area depending on their importance.
     * See {@link sap.m.Column#getImportance} and {@link sap.m.Table#getHiddenInPopin} for more details.
     *
     * **Note:** To hide columns based on their importance, it's mandatory to set `showDetailsButton="true"`.
     *  If no priority is given, the default configuration of {@link sap.ui.mdc.table.ResponsiveTableType#getShowDetailsButton }
     * is used.
     *  If this property is changed after the `Table` has been initialized, the new changes take effect only
     * when the Show / Hide Details button is pressed a second time.
     */
    detailsButtonSetting?:
      | Array<Priority | keyof typeof Priority>
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * @since 1.96
     *
     * Defines the layout in which the table pop-in rows are rendered.
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

  import TableRowAction from "sap/ui/mdc/enums/TableRowAction";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  import Event from "sap/ui/base/Event";

  import Context from "sap/ui/model/Context";

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
     * `sap.ui.table.Table`: The press event is fired when a row action item is pressed.
     *
     * `sap.m.Table`: The press event is fired when a row with a row action item is pressed. The `sap.ui.mdc.Table`'s
     * `rowPress` event is fired as well, when pressing a row with a row action item.
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
     * `sap.ui.table.Table`: The press event is fired when a row action item is pressed.
     *
     * `sap.m.Table`: The press event is fired when a row with a row action item is pressed. The `sap.ui.mdc.Table`'s
     * `rowPress` event is fired as well, when pressing a row with a row action item.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:press press} to attached listeners.
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
     * A custom icon cannot be set when using `sap.m.Table`
     *
     * @returns Value of property `icon`
     */
    getIcon(): URI;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Text for the row action item.
     *
     * Custom text cannot be set when using `sap.m.Table`.
     *
     * @returns Value of property `text`
     */
    getText(): string;
    /**
     * Gets current value of property {@link #getType type}.
     *
     * Type of the row action item.
     *
     * As of version 1.98, only sap.ui.mdc.enums.TableRowAction.Navigation is available. Setting the type ensures
     * default values for the properties `icon` and `text`. If an icon or text is set explicitly this setting
     * is used.
     *
     * @returns Value of property `type`
     */
    getType(): TableRowAction | keyof typeof TableRowAction;
    /**
     * Gets current value of property {@link #getVisible visible}.
     *
     * Whether the item should be visible on the screen.
     *
     * Default value is `true`.
     *
     * @returns Value of property `visible`
     */
    getVisible(): boolean;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Icon for the row action item.
     *
     * A custom icon cannot be set when using `sap.m.Table`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * Custom text cannot be set when using `sap.m.Table`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * As of version 1.98, only sap.ui.mdc.enums.TableRowAction.Navigation is available. Setting the type ensures
     * default values for the properties `icon` and `text`. If an icon or text is set explicitly this setting
     * is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setType(
      /**
       * New value for property `type`
       */
      sType: TableRowAction | keyof typeof TableRowAction
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setVisible(
      /**
       * New value for property `visible`
       */
      bVisible?: boolean
    ): this;
  }

  export interface $RowActionItemSettings extends $ElementSettings {
    /**
     * Type of the row action item.
     *
     * As of version 1.98, only sap.ui.mdc.enums.TableRowAction.Navigation is available. Setting the type ensures
     * default values for the properties `icon` and `text`. If an icon or text is set explicitly this setting
     * is used.
     */
    type?:
      | (TableRowAction | keyof typeof TableRowAction)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Text for the row action item.
     *
     * Custom text cannot be set when using `sap.m.Table`.
     */
    text?: string | PropertyBindingInfo;

    /**
     * Icon for the row action item.
     *
     * A custom icon cannot be set when using `sap.m.Table`
     */
    icon?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * Whether the item should be visible on the screen.
     */
    visible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Fired when the row action item is pressed.
     *
     * `sap.ui.table.Table`: The press event is fired when a row action item is pressed.
     *
     * `sap.m.Table`: The press event is fired when a row with a row action item is pressed. The `sap.ui.mdc.Table`'s
     * `rowPress` event is fired as well, when pressing a row with a row action item.
     */
    press?: (oEvent: Event<RowActionItem$PressEventParameters>) => void;
  }

  export interface RowActionItem$PressEventParameters {
    /**
     * The binding context of the pressed row action
     */
    bindingContext?: Context;
  }

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'RowActionItem$PressEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $RowActionItemPressEventParameters = RowActionItem$PressEventParameters;

  export type RowActionItem$PressEvent = Event<RowActionItem$PressEventParameters>;
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
     * Constructor for new RowSettings.
     *
     * Caution: Only use bindings which are bound against the rows, as working functionalities cannot be ensured
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
     * Constructor for new RowSettings.
     *
     * Caution: Only use bindings which are bound against the rows, as working functionalities cannot be ensured
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some rowAction to the aggregation {@link #getRowActions rowActions}.
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
     * Accessibility support is provided through the associated {@link sap.ui.mdc.table.RowSettings#setHighlightText highlightText }
     * property. If the `highlight` property is set to a value of {@link sap.ui.core.MessageType}, the `highlightText`
     * property does not need to be set because a default text is used. However, the default text can be overridden
     * by setting the `highlightText` property. In all other cases the `highlightText` property must be set.
     *
     * Default value is `"None"`.
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
     * @returns Value of property `highlightText`
     */
    getHighlightText(): string;
    /**
     * Gets current value of property {@link #getNavigated navigated}.
     *
     * The navigated state of a row.
     *
     * If set to `true`, a navigation indicator is displayed at the end of the row.
     *
     * Default value is `false`.
     *
     * @returns Value of property `navigated`
     */
    getNavigated(): boolean;
    /**
     * Gets content of aggregation {@link #getRowActions rowActions}.
     *
     * The available actions for a row.
     *
     * rowActions cannot be bound with a factory. Additionally, {@link sap.m.Table} only works with row actions
     * of type navigation.
     */
    getRowActions(): RowActionItem[];
    /**
     * Checks for the provided `sap.ui.mdc.table.RowActionItem` in the aggregation {@link #getRowActions rowActions}.
     * and returns its index if found or -1 otherwise.
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
     * @returns An array of the removed elements (might be empty)
     */
    removeAllRowActions(): RowActionItem[];
    /**
     * Removes a rowAction from the aggregation {@link #getRowActions rowActions}.
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
     * Accessibility support is provided through the associated {@link sap.ui.mdc.table.RowSettings#setHighlightText highlightText }
     * property. If the `highlight` property is set to a value of {@link sap.ui.core.MessageType}, the `highlightText`
     * property does not need to be set because a default text is used. However, the default text can be overridden
     * by setting the `highlightText` property. In all other cases the `highlightText` property must be set.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"None"`.
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
     * The navigated state of a row.
     *
     * If set to `true`, a navigation indicator is displayed at the end of the row.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
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

  export interface $RowSettingsSettings extends $ElementSettings {
    /**
     * The highlight state of the rows.
     *
     * If the highlight is set to {@link sap.ui.core.MessageType sap.ui.core.MessageType.None} (default), no
     * highlights are visible. Valid values for the `highlight` property are values of the enumerations {@link sap.ui.core.MessageType }
     * or {@link sap.ui.core.IndicationColor}.
     *
     * Accessibility support is provided through the associated {@link sap.ui.mdc.table.RowSettings#setHighlightText highlightText }
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
     * The navigated state of a row.
     *
     * If set to `true`, a navigation indicator is displayed at the end of the row.
     */
    navigated?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The available actions for a row.
     *
     * rowActions cannot be bound with a factory. Additionally, {@link sap.m.Table} only works with row actions
     * of type navigation.
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
   * @since 1.65
   *
   * The table type info base class for the metadata-driven table. Base class with no implementation.
   */
  export default class TableTypeBase extends UI5Element {
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $TableTypeBaseSettings extends $ElementSettings {}
}

declare module "sap/ui/mdc/table/TreeTableType" {
  import {
    default as GridTableType,
    $GridTableTypeSettings,
  } from "sap/ui/mdc/table/GridTableType";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @since 1.109
   *
   * The table type info class for the metadata-driven table.
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

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
    name: string;
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
   * @since 1.95.0
   * @experimental (since 1.95.0)
   *
   * Element for the `ValueHelp` association in the {@link sap.ui.mdc.field.FieldBase FieldBase} controls.
   */
  export default class ValueHelp extends Element1 {
    /**
     * Constructor for a new `ValueHelp`.
     *
     * The `ValueHelp` element can be assigned to {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.MultiValueField MultiValueField }
     * and {@link sap.ui.mdc.FilterField FilterField} controls using `valueHelp` association. One `ValueHelp`
     * element instance can be assigned to multiple fields (like in different table rows). It should be placed
     * in the control tree on the container holding the fields.
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
     * The `ValueHelp` element can be assigned to {@link sap.ui.mdc.Field Field}, {@link sap.ui.mdc.MultiValueField MultiValueField }
     * and {@link sap.ui.mdc.FilterField FilterField} controls using `valueHelp` association. One `ValueHelp`
     * element instance can be assigned to multiple fields (like in different table rows). It should be placed
     * in the control tree on the container holding the fields.
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
     * Destroys the dialog in the aggregation {@link #getDialog dialog}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyDialog(): this;
    /**
     * Destroys the typeahead in the aggregation {@link #getTypeahead typeahead}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTypeahead(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:closed closed} event of this `sap.ui.mdc.ValueHelp`.
     *
     * The passed function and listener object must match the ones used for event registration.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:closed closed} to attached listeners.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:disconnect disconnect} to attached listeners.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:navigated navigated} to attached listeners.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:open open} to attached listeners.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:opened opened} to attached listeners.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:select select} to attached listeners.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:switchToValueHelp switchToValueHelp} to attached listeners.
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
     * @returns Value of property `conditions`
     */
    getConditions(): object[];
    /**
     * @experimental
     *
     * Gets current value of property {@link #getDelegate delegate}.
     *
     * Path to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * Default value is `...see text or source`.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setConditions(
      /**
       * New value for property `conditions`
       */
      sConditions?: object[]
    ): this;
    /**
     * @experimental
     *
     * Sets a new value for property {@link #getDelegate delegate}.
     *
     * Path to the `Delegate` module that provides the required APIs to execute model-specific logic.
     *  **Note:** Ensure that the related file can be requested (any required library has to be loaded before
     * that).
     *  Do not bind or modify the module. This property can only be configured during control initialization.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `...see text or source`.
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
     * Value parsed by type to fit the data type of the key
     */
    parsedValue?: any;
    /**
     * Contextual information provided by condition payload or inParameters/outParameters. This is only filled
     * if the description needs to be determined for an existing condition.
     */
    context?: {
      /**
       * In parameters of the current condition (InParameter are not used any longer, but it might be filled in
       * older conditiotions stored in variants.)
       */
      inParameter?: object;
      /**
       * Out parameters of the current condition (OutParameter are not used any longer, but it might be filled
       * in older conditiotions stored in variants.)
       */
      ouParameter?: object;
      /**
       * Payload of the current condition
       */
      payload?: object;
    };
    /**
     * `BindingContext` of the checked field. Inside a table the `ValueHelp` element might be connected to a
     * different row.
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
     * If set, the check is done case sensitive
     */
    caseSensitive?: boolean;
    /**
     * Instance of the calling control
     */
    control: Control;
  };

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
     * @experimental
     *
     * Path to the `Delegate` module that provides the required APIs to execute model-specific logic.
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
    select?: (oEvent: Event<ValueHelp$SelectEventParameters>) => void;

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
    open?: (oEvent: Event<ValueHelp$OpenEventParameters>) => void;

    /**
     * This event is fired as the value help is fully open.
     */
    opened?: (oEvent: Event<ValueHelp$OpenedEventParameters>) => void;

    /**
     * This event is fired after the user navigated, using the arrow keys, in the value help.
     */
    navigated?: (oEvent: Event<ValueHelp$NavigatedEventParameters>) => void;

    /**
     * This event is fired if the user wants to switch from typeahead to value help.
     */
    switchToValueHelp?: (oEvent: Event) => void;
  }

  export interface ValueHelp$ClosedEventParameters {}

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'ValueHelp$ClosedEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $ValueHelpClosedEventParameters = ValueHelp$ClosedEventParameters;

  export type ValueHelp$ClosedEvent = Event<ValueHelp$ClosedEventParameters>;

  export interface ValueHelp$DisconnectEventParameters {}

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'ValueHelp$DisconnectEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $ValueHelpDisconnectEventParameters = ValueHelp$DisconnectEventParameters;

  export type ValueHelp$DisconnectEvent = Event<ValueHelp$DisconnectEventParameters>;

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
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'ValueHelp$NavigatedEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $ValueHelpNavigatedEventParameters = ValueHelp$NavigatedEventParameters;

  export type ValueHelp$NavigatedEvent = Event<ValueHelp$NavigatedEventParameters>;

  export interface ValueHelp$OpenEventParameters {
    /**
     * The container which will be opened
     */
    container?: Container;
  }

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'ValueHelp$OpenEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $ValueHelpOpenEventParameters = ValueHelp$OpenEventParameters;

  export type ValueHelp$OpenEvent = Event<ValueHelp$OpenEventParameters>;

  export interface ValueHelp$OpenedEventParameters {
    /**
     * The container which was opened
     */
    container?: Container;
  }

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'ValueHelp$OpenedEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $ValueHelpOpenedEventParameters = ValueHelp$OpenedEventParameters;

  export type ValueHelp$OpenedEvent = Event<ValueHelp$OpenedEventParameters>;

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
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'ValueHelp$SelectEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $ValueHelpSelectEventParameters = ValueHelp$SelectEventParameters;

  export type ValueHelp$SelectEvent = Event<ValueHelp$SelectEventParameters>;

  export interface ValueHelp$SwitchToValueHelpEventParameters {}

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'ValueHelp$SwitchToValueHelpEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $ValueHelpSwitchToValueHelpEventParameters = ValueHelp$SwitchToValueHelpEventParameters;

  export type ValueHelp$SwitchToValueHelpEvent = Event<ValueHelp$SwitchToValueHelpEventParameters>;
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
   * @since 1.95.0
   *
   * Container for the {@link sap.ui.mdc.ValueHelp ValueHelp} element.
   */
  export default class Container extends UI5Element {
    /**
     * Constructor for a new `Container`.
     *
     * This is the basis for different value help containers. It cannot be used directly.
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
     * This is the basis for different value help containers. It cannot be used directly.
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
      oContent: Content
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Container` itself.
     *
     * Fired if the change is cancelled.
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
     * Fired if the change is cancelled.
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
     * Fired if the value help is closed.
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
     * Fired if the value help is closed.
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
     * Fired if a change on the value help is confirmed
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
     * Fired if a change on the value help is confirmed
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
     * Fired if a navigation was executed in the content of the container
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
     * Fired if a navigation was executed in the content of the container
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
     * Fired if the value help is opened.
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
      fnFunction: (p1: Event) => void,
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
     * Fired if the value help is opened.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpened(
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
     * Attaches event handler `fnFunction` to the {@link #event:requestDelegateContent requestDelegateContent }
     * event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Container` itself.
     *
     * Fired if the Container requests the delegate content.
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
     * Fired if the Container requests the delegate content.
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
     * Fired if the value help should switch to dialog mode.
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
     * Fired if the value help should switch to dialog mode.
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
     * Fired if the selected condition changed.
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
     * Fired if the selected condition changed.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Binds the content to the container
     */
    bindContentToContainer(
      /**
       * content
       */
      oContent: Content
    ): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Closes the container control or element
     */
    closeContainer(): void;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:cancel cancel} event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * The passed function and listener object must match the ones used for event registration.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    detachOpened(
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
     * Detaches event handler `fnFunction` from the {@link #event:requestDelegateContent requestDelegateContent }
     * event of this `sap.ui.mdc.valuehelp.base.Container`.
     *
     * The passed function and listener object must match the ones used for event registration.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:cancel cancel} to attached listeners.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:closed closed} to attached listeners.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:confirm confirm} to attached listeners.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:navigated navigated} to attached listeners.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:opened opened} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireOpened(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:requestDelegateContent requestDelegateContent} to attached listeners.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:requestSwitchToDialog requestSwitchToDialog} to attached listeners.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:select select} to attached listeners.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Gets the confoguration for a specific content
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Returns the container control or element to be opened (for example Popover or Dialog)
     */
    getContainerControl(): void;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Content of the container. This aggregation holds the actual controls enabling the user to select items
     * or create conditions (e.g. tables or condition panels)
     */
    getContent(): Content[];
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Returns control connected to value help
     *
     * @returns connected control
     */
    getControl(): Control;
    /**
     * Gets current value of property {@link #getLocalFilterValue localFilterValue}.
     *
     * This property may be used by FilterableListContents to share basic search state in collective search
     * scenarios
     *
     * @returns Value of property `localFilterValue`
     */
    getLocalFilterValue(): string;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Returns the maximum allowed number of conditions, -1 if no limit is set
     *
     * @returns maximum allowed number of conditions
     */
    getMaxConditions(): int;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Returns the promise for content creation
     *
     * @returns Promise for delegate content
     */
    getRetrieveDelegateContentPromise(): Promise<any>;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Return the currently used content
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
     * @returns Value of property `title`
     */
    getTitle(): string;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Returns the UIArea of the content
     *
     * @returns The UI area of the content or `null`
     */
    getUIAreaForContent(): UIArea | null;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Handles the `cancelled` event of the content
     *
     * Here the {@link #events/cancel cancel} event needs to be fired.
     */
    handleCanceled(
      /**
       * event
       */
      oEvent: Event
    ): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Handles the `closed` event of the container control or element
     */
    handleClosed(
      /**
       * event
       */
      oEvent: Event
    ): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Handles the `confirmed` event of the content
     *
     * Here the {@link #events/confirm confirm} event needs to be fired.
     */
    handleConfirmed(
      /**
       * event
       */
      oEvent: Event
    ): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Handles the `requestSwitchToDialog` event of the content
     */
    handleNavigated(
      /**
       * event
       */
      oEvent: Event
    ): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Handles the `opened` event of the container control or element
     */
    handleOpened(
      /**
       * event
       */
      oEvent: Event
    ): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Handles the `navigated` event of the content
     */
    handleRequestSwitchToDialog(
      /**
       * event
       */
      oEvent: Event
    ): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Handles the `select` event of the content
     *
     * Here the {@link #events/select select} event needs to be fired.
     */
    handleSelect(
      /**
       * event
       */
      oEvent: Event
    ): void;
    /**
     * Checks for the provided `sap.ui.mdc.valuehelp.base.Content` in the aggregation {@link #getContent content}.
     * and returns its index if found or -1 otherwise.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Returns if the value help is used for single selection
     *
     * @returns `true` id single seletion
     */
    isSingleSelect(): boolean;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Triggers navigation in the content of the container.
     */
    navigateInContent(
      /**
       * Number of steps for navigation (e.g. 1 means next item, -1 means previous item)
       */
      iStep: int
    ): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Observes property and aggregation changes
     */
    observeChanges(
      /**
       * Change
       */
      oChanges: object
    ): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Opens the container control or element
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Places the content into the container control or element
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
     * @returns An array of the removed elements (might be empty)
     */
    removeAllContent(): Content[];
    /**
     * Removes a content from the aggregation {@link #getContent content}.
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
     * This property may be used by FilterableListContents to share basic search state in collective search
     * scenarios
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitle(
      /**
       * New value for property `title`
       */
      sTitle?: string
    ): this;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Unbinds the content from the container
     */
    unbindContentFromContainer(
      /**
       * content
       */
      oContent: Content
    ): void;
  }

  export interface $ContainerSettings extends $ElementSettings {
    /**
     * Title text that appears in the dialog or tab header.
     */
    title?: string | PropertyBindingInfo;

    /**
     * This property may be used by FilterableListContents to share basic search state in collective search
     * scenarios
     */
    localFilterValue?: string | PropertyBindingInfo;

    /**
     * Content of the container. This aggregation holds the actual controls enabling the user to select items
     * or create conditions (e.g. tables or condition panels)
     */
    content?: Content[] | Content | AggregationBindingInfo | `{${string}}`;

    /**
     * Fired if the selected condition changed.
     */
    select?: (oEvent: Event<Container$SelectEventParameters>) => void;

    /**
     * Fired if a change on the value help is confirmed
     */
    confirm?: (oEvent: Event<Container$ConfirmEventParameters>) => void;

    /**
     * Fired if the value help is opened.
     */
    opened?: (oEvent: Event) => void;

    /**
     * Fired if the value help is closed.
     */
    closed?: (oEvent: Event) => void;

    /**
     * Fired if the change is cancelled.
     */
    cancel?: (oEvent: Event) => void;

    /**
     * Fired if the Container requests the delegate content.
     */
    requestDelegateContent?: (
      oEvent: Event<Container$RequestDelegateContentEventParameters>
    ) => void;

    /**
     * Fired if the value help should switch to dialog mode.
     */
    requestSwitchToDialog?: (oEvent: Event) => void;

    /**
     * Fired if a navigation was executed in the content of the container
     */
    navigated?: (oEvent: Event<Container$NavigatedEventParameters>) => void;
  }

  export interface Container$CancelEventParameters {}

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'Container$CancelEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $ContainerCancelEventParameters = Container$CancelEventParameters;

  export type Container$CancelEvent = Event<Container$CancelEventParameters>;

  export interface Container$ClosedEventParameters {}

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'Container$ClosedEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $ContainerClosedEventParameters = Container$ClosedEventParameters;

  export type Container$ClosedEvent = Event<Container$ClosedEventParameters>;

  export interface Container$ConfirmEventParameters {
    /**
     * True if the value help needs to be closed
     */
    close?: boolean;
  }

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'Container$ConfirmEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $ContainerConfirmEventParameters = Container$ConfirmEventParameters;

  export type Container$ConfirmEvent = Event<Container$ConfirmEventParameters>;

  export interface Container$NavigatedEventParameters {
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
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'Container$NavigatedEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $ContainerNavigatedEventParameters = Container$NavigatedEventParameters;

  export type Container$NavigatedEvent = Event<Container$NavigatedEventParameters>;

  export interface Container$OpenedEventParameters {}

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'Container$OpenedEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $ContainerOpenedEventParameters = Container$OpenedEventParameters;

  export type Container$OpenedEvent = Event<Container$OpenedEventParameters>;

  export interface Container$RequestDelegateContentEventParameters {
    /**
     * Content wrapper id for which contents are requested
     */
    contentId?: string;
  }

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'Container$RequestDelegateContentEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $ContainerRequestDelegateContentEventParameters = Container$RequestDelegateContentEventParameters;

  export type Container$RequestDelegateContentEvent = Event<Container$RequestDelegateContentEventParameters>;

  export interface Container$RequestSwitchToDialogEventParameters {}

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'Container$RequestSwitchToDialogEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $ContainerRequestSwitchToDialogEventParameters = Container$RequestSwitchToDialogEventParameters;

  export type Container$RequestSwitchToDialogEvent = Event<Container$RequestSwitchToDialogEventParameters>;

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
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'Container$SelectEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $ContainerSelectEventParameters = Container$SelectEventParameters;

  export type Container$SelectEvent = Event<Container$SelectEventParameters>;
}

declare module "sap/ui/mdc/valuehelp/base/Content" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import Event from "sap/ui/base/Event";

  import { ConditionObject } from "sap/ui/mdc/condition/Condition";

  import Control from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import ValueHelp from "sap/ui/mdc/ValueHelp";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @since 1.95.0
   *
   * Content for the {@link sap.ui.mdc.valuehelp.base.Container Container} element.
   */
  export default class Content extends UI5Element {
    /**
     * Constructor for a new `Content`.
     *
     * This is the basis for different value help contents. It cannot be used directly.
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
     * This is the basis for different value help contents. It cannot be used directly.
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ui.mdc.valuehelp.base.Content`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.mdc.valuehelp.base.Content` itself.
     *
     * Fired if the change is cancelled.
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
     * Fired if the change is cancelled.
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
     * Fired if a change on the content is confirmed.
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
     * Fired if a change on the content is confirmed.
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
     * Fired if a navigation was executed in the content.
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
     * Fired if a navigation was executed in the content.
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
     * Fired if the value help should switch to dialog mode.
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
     * Fired if the value help should switch to dialog mode.
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
     * Fired if the selected condition changed.
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
     * Fired if the selected condition changed.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Provides access to the delegate initialization `Promise` of the value help.
     *
     * @returns `Promise` reflecting the delegate initialization
     */
    awaitValueHelpDelegate(): Promise<any>;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Creates a condition based on the used operator.
     *
     * @returns The new condition object with the maintained operator along with `sKey` and `sDescription` as
     * `aValues`
     */
    createCondition(
      /**
       * Value of the condition. For item conditions this must be the key.
       */
      vValue: any,
      /**
       * Description of the operator
       */
      sDescription?: string,
      /**
       * payload
       */
      oPayload?: object
    ): ConditionObject;
    /**
     * Destroys the displayContent in the aggregation {@link #getDisplayContent displayContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyDisplayContent(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:cancel cancel} event of this `sap.ui.mdc.valuehelp.base.Content`.
     *
     * The passed function and listener object must match the ones used for event registration.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:cancel cancel} to attached listeners.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:confirm confirm} to attached listeners.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:navigated navigated} to attached listeners.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:requestSwitchToDialog requestSwitchToDialog} to attached listeners.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:select select} to attached listeners.
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
     * Gets current value of property {@link #getConditions conditions}.
     *
     * Conditions of the value help
     *
     * **Note:** This property must not be set from outside, it is only to be used by the corresponding container
     *
     * Default value is `[]`.
     *
     * @returns Value of property `conditions`
     */
    getConditions(): object[];
    /**
     * Gets current value of property {@link #getConfig config}.
     *
     * Internal configuration
     *
     * **Note:** This property must not be set from outside, it is only to be used by the corresponding container
     *
     * Default value is `{}`.
     *
     * @returns Value of property `config`
     */
    getConfig(): object;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Returns control connected to value help
     *
     * @returns connected control
     */
    getControl(): Control;
    /**
     * Gets content of aggregation {@link #getDisplayContent displayContent}.
     *
     * Content control that is put inside the parent container
     *
     * **Note:** This aggregation must not be set from outside, it is only to be used by the corresponding container
     */
    getDisplayContent(): Control;
    /**
     * Gets current value of property {@link #getFilterValue filterValue}.
     *
     * Value for filtering ($search)
     *
     * **Note:** This property must not be set from outside, it is only to be used by the corresponding container
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `filterValue`
     */
    getFilterValue(): string;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Returns if the value help is used for single selection
     *
     * @returns `true` id single seletion
     */
    getMaxConditions(): boolean;
    /**
     * Gets current value of property {@link #getShortTitle shortTitle}.
     *
     * Title text that appears in the dialog header.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `shortTitle`
     */
    getShortTitle(): string;
    /**
     * Gets current value of property {@link #getTitle title}.
     *
     * Title text that appears tab header.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `title`
     */
    getTitle(): string;
    /**
     * Gets current value of property {@link #getTokenizerTitle tokenizerTitle}.
     *
     * Title text that appears in the dialog tokenizer panel, when ony one content exist.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `tokenizerTitle`
     */
    getTokenizerTitle(): string;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * returns the used `ValueHelpDelegate`
     *
     * @returns `Delegate` module
     */
    getValueHelpDelegate(): /* was: sap.ui.mdc.BaseDelegate */ any;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Determines the `ValueHelp` instance
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
     * @returns Value of property `visible`
     */
    getVisible(): boolean;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Called if the `conditions` property changed
     */
    handleConditionsUpdate(
      /**
       * Change
       */
      oChanges: object
    ): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Called if the `filterValue` property changed
     */
    handleFilterValueUpdate(
      /**
       * Change
       */
      oChanges: object
    ): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Checks if the parent container is open
     *
     * @returns `true` if open
     */
    isContainerOpen(): boolean;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Checks if the parent container is opening
     *
     * @returns `true` if opening
     */
    isContainerOpening(): boolean;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Returns if the value help is used for single selection
     *
     * @returns `true` id single seletion
     */
    isSingleSelect(): boolean;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Determines if the container of the content is used as typeAhead inside the value help
     *
     * **Note:** This function is used by the content and must not be used from outside
     *
     * @returns True if used as typeahead
     */
    isTypeahead(): boolean;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Determines if delegate of the value help is initialized
     *
     * @returns True if delegate is initialized
     */
    isValueHelpDelegateInitialized(): boolean;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Observes property and aggregation changes
     */
    observeChanges(
      /**
       * Change
       */
      oChanges: object
    ): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Called if ValueHelp connection to Field changed
     */
    onConnectionChange(): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Performs logic needed if the container closes
     */
    onContainerClose(): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Performs logic needed if the container opens
     */
    onContainerOpen(): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Determines if the the content needs to provide a scrolling mechanism like a {@link sap.m.ScrollContainer ScrollContainer}
     *
     * **Note:** This function is used by the content and must not be used from outside
     *
     * @returns True a scrolling mechanism is needed
     */
    provideScrolling(): boolean;
    /**
     * Sets a new value for property {@link #getConditions conditions}.
     *
     * Conditions of the value help
     *
     * **Note:** This property must not be set from outside, it is only to be used by the corresponding container
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `[]`.
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
     * Internal configuration
     *
     * **Note:** This property must not be set from outside, it is only to be used by the corresponding container
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `{}`.
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
     * Value for filtering ($search)
     *
     * **Note:** This property must not be set from outside, it is only to be used by the corresponding container
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
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
     * Title text that appears tab header.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
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
     * Title text that appears in the dialog tokenizer panel, when ony one content exist.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setVisible(
      /**
       * New value for property `visible`
       */
      bVisible?: boolean
    ): this;
  }

  export interface $ContentSettings extends $ElementSettings {
    /**
     * Title text that appears tab header.
     */
    title?: string | PropertyBindingInfo;

    /**
     * Title text that appears in the dialog header.
     */
    shortTitle?: string | PropertyBindingInfo;

    /**
     * Title text that appears in the dialog tokenizer panel, when ony one content exist.
     */
    tokenizerTitle?: string | PropertyBindingInfo;

    /**
     * Conditions of the value help
     *
     * **Note:** This property must not be set from outside, it is only to be used by the corresponding container
     */
    conditions?: object[] | PropertyBindingInfo | `{${string}}`;

    /**
     * Value for filtering ($search)
     *
     * **Note:** This property must not be set from outside, it is only to be used by the corresponding container
     */
    filterValue?: string | PropertyBindingInfo;

    /**
     * Internal configuration
     *
     * **Note:** This property must not be set from outside, it is only to be used by the corresponding container
     */
    config?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Hide content temporary.
     */
    visible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Content control that is put inside the parent container
     *
     * **Note:** This aggregation must not be set from outside, it is only to be used by the corresponding container
     */
    displayContent?: Control;

    /**
     * Fired if the selected condition changed.
     */
    select?: (oEvent: Event<Content$SelectEventParameters>) => void;

    /**
     * Fired if a change on the content is confirmed.
     */
    confirm?: (oEvent: Event<Content$ConfirmEventParameters>) => void;

    /**
     * Fired if the change is cancelled.
     */
    cancel?: (oEvent: Event) => void;

    /**
     * Fired if the value help should switch to dialog mode.
     */
    requestSwitchToDialog?: (oEvent: Event) => void;

    /**
     * Fired if a navigation was executed in the content.
     */
    navigated?: (oEvent: Event<Content$NavigatedEventParameters>) => void;
  }

  export interface Content$CancelEventParameters {}

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'Content$CancelEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $ContentCancelEventParameters = Content$CancelEventParameters;

  export type Content$CancelEvent = Event<Content$CancelEventParameters>;

  export interface Content$ConfirmEventParameters {
    /**
     * True if the value help need to be closed
     */
    close?: boolean;
  }

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'Content$ConfirmEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $ContentConfirmEventParameters = Content$ConfirmEventParameters;

  export type Content$ConfirmEvent = Event<Content$ConfirmEventParameters>;

  export interface Content$NavigatedEventParameters {
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
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'Content$NavigatedEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $ContentNavigatedEventParameters = Content$NavigatedEventParameters;

  export type Content$NavigatedEvent = Event<Content$NavigatedEventParameters>;

  export interface Content$RequestSwitchToDialogEventParameters {}

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'Content$RequestSwitchToDialogEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $ContentRequestSwitchToDialogEventParameters = Content$RequestSwitchToDialogEventParameters;

  export type Content$RequestSwitchToDialogEvent = Event<Content$RequestSwitchToDialogEventParameters>;

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
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'Content$SelectEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $ContentSelectEventParameters = Content$SelectEventParameters;

  export type Content$SelectEvent = Event<Content$SelectEventParameters>;
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

  /**
   * @since 1.95.0
   *
   * Content for the {@link sap.ui.mdc.valuehelp.base.Container Container} element.
   */
  export default class FilterableListContent extends ListContent {
    /**
     * Constructor for a new `FilterableListContent`.
     *
     * This is the basis for different value help list contents with filter functionality. It cannot be used
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
     * This is the basis for different value help list contents with filter functionality. It cannot be used
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Applies the filter to the content control
     */
    applyFilters(): void;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Created a payload for a value
     *
     * @returns payload
     */
    createConditionPayload(
      /**
       * values (key, description)
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
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFilterBar(): this;
    /**
     * Gets current value of property {@link #getDescriptionPath descriptionPath}.
     *
     * The path of the description field in the content binding. If a table is used as content, this is the
     * binding path of the description of the items.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `descriptionPath`
     */
    getDescriptionPath(): string;
    /**
     * Gets content of aggregation {@link #getFilterBar filterBar}.
     *
     * FilterBar
     */
    getFilterBar(): FilterBar;
    /**
     * Gets current value of property {@link #getFilterFields filterFields}.
     *
     * The fields based on which the table data is filtered. For filtering the value of the `filterValue` property
     * is used.
     *
     * If set to `$search` and the used binding supports search requests, a $search request is used for filtering.
     *
     * If set to one or more properties, the filters for these properties are used for filtering. These filters
     * are set on the `ListBinding` used. The properties need to be separated by commas and enclosed by "*"
     * characters. (`"*Property1,Property2*"`)
     *
     * If it is empty, no suggestion is available.
     *
     * Default value is `empty string`.
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
     * @returns Value of property `group`
     */
    getGroup(): string;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Gets an item for a BindingContext
     *
     * @returns Item object containing `key`, `description` and `payload`
     */
    getItemFromContext(
      /**
       * BindingContext
       */
      oBindingContext: Context,
      /**
       * options
       */
      oOptions: object
    ): object;
    /**
     * Gets current value of property {@link #getKeyPath keyPath}.
     *
     * The path of the key field in the content binding. If a table is used as content, this is the binding
     * path of the key of the items.
     *
     * If not set, the FieldPath of the assigned field is used.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `keyPath`
     */
    getKeyPath(): string;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Gets the `BindingInfo` of the content
     *
     * @returns ListBindingInfo
     */
    getListBindingInfo(): AggregationBindingInfo;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Gets the conditions that are selecatble from list content
     *
     * This are validated conditions as other conditions are shown on the {@link sap.ui.mdc.valuehelp.base.DefineConditionPanel DefineConditionPanel}
     *
     * @returns ListBindingInfo
     */
    getSelectableConditions(): AggregationBindingInfo;
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
     * The fields based on which the table data is filtered. For filtering the value of the `filterValue` property
     * is used.
     *
     * If set to `$search` and the used binding supports search requests, a $search request is used for filtering.
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
     * If not set, the FieldPath of the assigned field is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
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

  export interface $FilterableListContentSettings extends $ListContentSettings {
    /**
     * The fields based on which the table data is filtered. For filtering the value of the `filterValue` property
     * is used.
     *
     * If set to `$search` and the used binding supports search requests, a $search request is used for filtering.
     *
     * If set to one or more properties, the filters for these properties are used for filtering. These filters
     * are set on the `ListBinding` used. The properties need to be separated by commas and enclosed by "*"
     * characters. (`"*Property1,Property2*"`)
     *
     * If it is empty, no suggestion is available.
     */
    filterFields?: string | PropertyBindingInfo;

    /**
     * The path of the key field in the content binding. If a table is used as content, this is the binding
     * path of the key of the items.
     *
     * If not set, the FieldPath of the assigned field is used.
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
     * FilterBar
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
   * @since 1.95.0
   *
   * Content for the {@link sap.ui.mdc.valuehelp.base.Container Container} element.
   */
  export default class ListContent extends Content {
    /**
     * Constructor for a new `ListContent`.
     *
     * This is the basis for different value help list contents. It cannot be used directly.
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
     * This is the basis for different value help list contents. It cannot be used directly.
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
     * @returns Value of property `caseSensitive`
     */
    getCaseSensitive(): boolean;
    /**
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Gets the `ListBinding` of the content
     *
     * @returns ListBinding
     */
    getListBinding(): ListBinding;
    /**
     * Gets current value of property {@link #getUseAsValueHelp useAsValueHelp}.
     *
     * If set, the List is also opened if the ValueHelp icon is pressed.
     *
     * Default value is `true`.
     *
     * @returns Value of property `useAsValueHelp`
     */
    getUseAsValueHelp(): boolean;
    /**
     * Gets current value of property {@link #getUseFirstMatch useFirstMatch}.
     *
     * If set, `getItemForValue` returns the first item that matches the text.
     *
     * This is the case if the text of the item starts with the text entered.
     *
     * Default value is `true`.
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
     * If set, the List is also opened if the ValueHelp icon is pressed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
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
     * This is the case if the text of the item starts with the text entered.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
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
     * This is the case if the text of the item starts with the text entered.
     */
    useFirstMatch?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If set, the List is also opened if the ValueHelp icon is pressed.
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
   * @since 1.95.0
   *
   * Content for the {@link sap.ui.mdc.valuehelp.base.Container Container} element showing a condition panel.
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * @deprecated (since 1.114.0) - replaced by {@link #setValueHelp valueHelp} association
     *
     * ID of the element which is the current target of the association {@link #getFieldHelp fieldHelp}, or
     * `null`.
     */
    getFieldHelp(): ID;
    /**
     * Gets current value of property {@link #getLabel label}.
     *
     * Label shown on condition panel.
     *
     * @returns Value of property `label`
     */
    getLabel(): string;
    /**
     * ID of the element which is the current target of the association {@link #getValueHelp valueHelp}, or
     * `null`.
     */
    getValueHelp(): ID;
    /**
     * @deprecated (since 1.114.0) - replaced by {@link #setValueHelp valueHelp} association
     *
     * Sets the associated {@link #getFieldHelp fieldHelp}.
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

  export interface $ConditionsSettings extends $ContentSettings {
    /**
     * Label shown on condition panel.
     */
    label?: string | PropertyBindingInfo;

    /**
     * @deprecated (since 1.114.0) - replaced by {@link #setValueHelp valueHelp} association
     *
     * Optional `FieldHelp`.
     *
     * This is an association that allows the usage of one `FieldHelp` instance for the value fields for the
     * `Conditions`. **Note:** The value fields on the conditions UI are created by the used `DefineConditionPanel`.
     * They cannot be accessed from outside. The fields are single-value input, and the display is always set
     * to `FieldDisplay.Value`. Only a `ValueHelp>/code> with a TypeAhead` and a single-selection `MTable`
     * can be used. **Note:** For `Boolean`, `Date`, or `Time` types, no `FieldHelp` should be added, but a
     * default `FieldHelp` used instead.
     */
    fieldHelp?: ValueHelp | string;

    /**
     * Optional `ValueHelp`.
     *
     * This is an association that allows the usage of one `ValueHelp` instance for the value fields for the
     * `Conditions`.
     *
     * **Note:** The value fields on the conditions UI are created by the used `DefineConditionPanel`. They
     * cannot be accessed from outside. The fields are single-value input, and the display is always set to
     * `FieldDisplay.Value`. Only a `ValueHelp>/code> with a TypeAhead` and a single-selection `MTable`
     * can be used.
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
   * @since 1.95.0
   *
   * Content for the {@link sap.ui.mdc.valuehelp.base.Container Container} element showing a list with fix
   * values.
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some item to the aggregation {@link #getItems items}.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;
    /**
     * Gets current value of property {@link #getFilterList filterList}.
     *
     * If set, the items of the list are filtered based on `filterValue`.
     *
     * If a type-ahead behavior for the connected field is wanted, this property must be set to `true`. For
     * small lists all values are meant to be shown, independent of the typing in the connected field. In this
     * case this property must be set to `false`.
     *
     * If not set, the list opens if the user clicks into the connected field.
     *
     * Default value is `true`.
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
     * @returns Value of property `groupable`
     */
    getGroupable(): boolean;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * Items of the field help.
     *
     * The `key` of the items is not shown in the list, but is used as a value of the connected field.
     *
     * If the `additionalText` for all the items is not used, the column will not be displayed.
     *
     * **Note:** At the moment, icons are not supported.
     */
    getItems(): FixedListItem[];
    /**
     * Checks for the provided `sap.ui.mdc.valuehelp.content.FixedListItem` in the aggregation {@link #getItems items}.
     * and returns its index if found or -1 otherwise.
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
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): FixedListItem[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
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
     * small lists all values are meant to be shown, independent of the typing in the connected field. In this
     * case this property must be set to `false`.
     *
     * If not set, the list opens if the user clicks into the connected field.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setGroupable(
      /**
       * New value for property `groupable`
       */
      bGroupable?: boolean
    ): this;
  }

  export interface $FixedListSettings extends $ListContentSettings {
    /**
     * If set, the items of the list can be grouped
     */
    groupable?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If set, the items of the list are filtered based on `filterValue`.
     *
     * If a type-ahead behavior for the connected field is wanted, this property must be set to `true`. For
     * small lists all values are meant to be shown, independent of the typing in the connected field. In this
     * case this property must be set to `false`.
     *
     * If not set, the list opens if the user clicks into the connected field.
     */
    filterList?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Items of the field help.
     *
     * The `key` of the items is not shown in the list, but is used as a value of the connected field.
     *
     * If the `additionalText` for all the items is not used, the column will not be displayed.
     *
     * **Note:** At the moment, icons are not supported.
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
   * @since 1.114.0
   *
   * An item that is used in the {@link sap.ui.mdc.valuehelp.content.FixedList FixedList}.
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getGroupKey groupKey}.
     *
     * Key of the group for what the items are grouped
     *
     * @returns Value of property `groupKey`
     */
    getGroupKey(): any;
    /**
     * Gets current value of property {@link #getGroupText groupText}.
     *
     * Text of the group for what the items are grouped
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setGroupText(
      /**
       * New value for property `groupText`
       */
      sGroupText?: string
    ): this;
  }

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
   * Object to label gropus on value help dialog.
   */
  export type GroupLabel = {
    /**
     * Label with counter. The placeholder for counter needs to defined wihl `{0}`
     */
    label: string;
    /**
     * Label without counter
     */
    nnLabel: string;
  };

  /**
   * @since 1.95.0
   *
   * Container for the {@link sap.ui.mdc.ValueHelp ValueHelp} element showing a dialog.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setGroupConfig(
      /**
       * New value for property `groupConfig`
       */
      oGroupConfig?: object
    ): this;
  }

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
   * @since 1.95.0
   *
   * Content for the {@link sap.ui.mdc.valuehelp.base.Container Container} element using a {@link sap.ui.mdc.Table}.
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Destroys the table in the aggregation {@link #getTable table}.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    setTable(
      /**
       * The table to set
       */
      oTable: Table
    ): this;
  }

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
   * @since 1.95.0
   *
   * Content for the {@link sap.ui.mdc.valuehelp.base.Container Container} element using a {@link sap.m.Table}.
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
     * This event is fired if the content of the table is updated
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
     * This event is fired if the content of the table is updated
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
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTable(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:contentUpdated contentUpdated} event of this
     * `sap.ui.mdc.valuehelp.content.MTable`.
     *
     * The passed function and listener object must match the ones used for event registration.
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
     * Protected:  Do not call from applications (only from related classes in the framework)
     *
     * Fires event {@link #event:contentUpdated contentUpdated} to attached listeners.
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
     * Table to be used in value help
     *
     * **Note:** Set the right selection mode (multiple selection or single selection) as it cannot be determined
     * automatically for every case. (In type-ahead also for multi-value {@link sap.ui.mdc.FilterField FilterField }
     * controls only single selection from table might be wanted.)
     */
    getTable(): Table;
    /**
     * Sets the aggregated {@link #getTable table}.
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

  export interface $MTableSettings extends $FilterableListContentSettings {
    /**
     * Table to be used in value help
     *
     * **Note:** Set the right selection mode (multiple selection or single selection) as it cannot be determined
     * automatically for every case. (In type-ahead also for multi-value {@link sap.ui.mdc.FilterField FilterField }
     * controls only single selection from table might be wanted.)
     */
    table?: Table;

    /**
     * This event is fired if the content of the table is updated
     */
    contentUpdated?: (oEvent: Event) => void;
  }

  export interface MTable$ContentUpdatedEventParameters {}

  /**
   * @deprecated (since 1.115.1) - This name was introduced in 1.115.0, but will be 'MTable$ContentUpdatedEventParameters'
   * in 1.115.1 and any later releases.
   */
  export type $MTableContentUpdatedEventParameters = MTable$ContentUpdatedEventParameters;

  export type MTable$ContentUpdatedEvent = Event<MTable$ContentUpdatedEventParameters>;
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
   * @since 1.95.0
   *
   * Container for the {@link sap.ui.mdc.ValueHelp ValueHelp} element showing a popover.
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
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * @since 1.110.0
     *
     * Gets current value of property {@link #getOpensOnClick opensOnClick}.
     *
     * Controls the possibility to open this popover container by clicking on a connected control, even if no
     * content enforces it.
     *
     * **Note:** By default, a typeahead is only shown to provide suggestions when users enter input in a connected
     * control. This property enables scenarios, where popovers need to be shown earlier (e. g. recommendations
     * or recently entered values) Please also see {@link sap.ui.mdc.ValueHelpDelegate.showTypahead showTypahead}
     *
     * Default value is `false`.
     *
     * @returns Value of property `opensOnClick`
     */
    getOpensOnClick(): boolean;
    /**
     * @since 1.112.0
     *
     * Gets current value of property {@link #getOpensOnFocus opensOnFocus}.
     *
     * Controls the possibility to open this popover container by focussing a connected control
     *
     * **Note:** By default, a typeahead is only shown to provide suggestions when users enter input in a connected
     * control. This property enables scenarios, where popovers need to be shown earlier (e. g. recommendations
     * or recently entered values) Please also see {@link sap.ui.mdc.ValueHelpDelegate.showTypahead showTypahead}
     *
     * Default value is `false`.
     *
     * @returns Value of property `opensOnFocus`
     */
    getOpensOnFocus(): boolean;
    /**
     * @since 1.110.0
     *
     * Sets a new value for property {@link #getOpensOnClick opensOnClick}.
     *
     * Controls the possibility to open this popover container by clicking on a connected control, even if no
     * content enforces it.
     *
     * **Note:** By default, a typeahead is only shown to provide suggestions when users enter input in a connected
     * control. This property enables scenarios, where popovers need to be shown earlier (e. g. recommendations
     * or recently entered values) Please also see {@link sap.ui.mdc.ValueHelpDelegate.showTypahead showTypahead}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
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
     * @since 1.112.0
     *
     * Sets a new value for property {@link #getOpensOnFocus opensOnFocus}.
     *
     * Controls the possibility to open this popover container by focussing a connected control
     *
     * **Note:** By default, a typeahead is only shown to provide suggestions when users enter input in a connected
     * control. This property enables scenarios, where popovers need to be shown earlier (e. g. recommendations
     * or recently entered values) Please also see {@link sap.ui.mdc.ValueHelpDelegate.showTypahead showTypahead}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
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

  export interface $PopoverSettings extends $ContainerSettings {
    /**
     * @since 1.110.0
     *
     * Controls the possibility to open this popover container by clicking on a connected control, even if no
     * content enforces it.
     *
     * **Note:** By default, a typeahead is only shown to provide suggestions when users enter input in a connected
     * control. This property enables scenarios, where popovers need to be shown earlier (e. g. recommendations
     * or recently entered values) Please also see {@link sap.ui.mdc.ValueHelpDelegate.showTypahead showTypahead}
     */
    opensOnClick?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @since 1.112.0
     *
     * Controls the possibility to open this popover container by focussing a connected control
     *
     * **Note:** By default, a typeahead is only shown to provide suggestions when users enter input in a connected
     * control. This property enables scenarios, where popovers need to be shown earlier (e. g. recommendations
     * or recently entered values) Please also see {@link sap.ui.mdc.ValueHelpDelegate.showTypahead showTypahead}
     */
    opensOnFocus?: boolean | PropertyBindingInfo | `{${string}}`;
  }
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/ui/mdc/ActionToolbar": undefined;

    "sap/ui/mdc/actiontoolbar/ActionToolbarAction": undefined;

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

    "sap/ui/mdc/enum/PersistenceMode": undefined;

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

    "sap/ui/mdc/enums/OperatorOverwrite": undefined;

    "sap/ui/mdc/enums/OperatorValueType": undefined;

    "sap/ui/mdc/enums/PersistenceMode": undefined;

    "sap/ui/mdc/enums/ProcessingStrategy": undefined;

    "sap/ui/mdc/enums/ReasonMode": undefined;

    "sap/ui/mdc/enums/TableGrowingMode": undefined;

    "sap/ui/mdc/enums/TableMultiSelectMode": undefined;

    "sap/ui/mdc/enums/TableP13nMode": undefined;

    "sap/ui/mdc/enums/TableRowAction": undefined;

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

    "sap/ui/mdc/filterbar/vh/FilterContainer": undefined;

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

    "sap/ui/mdc/odata/v4/FieldBaseDelegate": undefined;

    "sap/ui/mdc/odata/v4/TableDelegate": undefined;

    "sap/ui/mdc/odata/v4/TypeMap": undefined;

    "sap/ui/mdc/odata/v4/TypeUtil": undefined;

    "sap/ui/mdc/odata/v4/ValueHelpDelegate": undefined;

    "sap/ui/mdc/odata/v4/vizChart/ChartDelegate": undefined;

    "sap/ui/mdc/p13n/StateUtil": undefined;

    "sap/ui/mdc/p13n/UIManager": undefined;

    "sap/ui/mdc/Table": undefined;

    "sap/ui/mdc/table/Column": undefined;

    "sap/ui/mdc/table/ColumnSettings": undefined;

    "sap/ui/mdc/table/CreationRow": undefined;

    "sap/ui/mdc/table/GridTableType": undefined;

    "sap/ui/mdc/table/PropertyHelper": undefined;

    "sap/ui/mdc/table/ResponsiveColumnSettings": undefined;

    "sap/ui/mdc/table/ResponsiveTableType": undefined;

    "sap/ui/mdc/table/RowActionItem": undefined;

    "sap/ui/mdc/table/RowSettings": undefined;

    "sap/ui/mdc/table/TableTypeBase": undefined;

    "sap/ui/mdc/table/TreeTableType": undefined;

    "sap/ui/mdc/table/V4AnalyticsPropertyHelper": undefined;

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

    "sap/ui/mdc/valuehelp/content/Bool": undefined;

    "sap/ui/mdc/valuehelp/content/Conditions": undefined;

    "sap/ui/mdc/valuehelp/content/FixedList": undefined;

    "sap/ui/mdc/valuehelp/content/FixedListItem": undefined;

    "sap/ui/mdc/valuehelp/content/MDCTable": undefined;

    "sap/ui/mdc/valuehelp/content/MTable": undefined;

    "sap/ui/mdc/valuehelp/Dialog": undefined;

    "sap/ui/mdc/valuehelp/Popover": undefined;

    "sap/ui/mdc/ValueHelpDelegate": undefined;
  }
}
