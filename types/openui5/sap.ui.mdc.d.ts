// For Library Version: 1.107.0

declare module "sap/ui/mdc/filterbar/vh/FilterContainer" {
  import Metadata from "sap/ui/base/Metadata";

  /**
   * @SINCE 1.84.0
   *
   * The FilterContainer is a IFilterContainer implementation for `AlignedFlowLayout`
   */
  export default class FilterContainer
    /* was: sap.ui.mdc.filterbar.IFilterContainer */ extends Object {
    /**
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
     * Returns a metadata object for class sap.ui.mdc.filterbar.vh.FilterContainer.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): Metadata;
  }
}

declare module "sap/ui/mdc/p13n/panels/FilterPanel" {
  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * P13n `FilterItem` object type.
   */
  export type FilterItem = {
    /**
     * The unique key of the item
     */
    name: string;
    /**
     * The label describing the personalization item
     */
    label: string;
    /**
     * Defines whether there is a visible grid shown in the panel for this key, also triggers the call of the
     * `#itemFactory` function
     */
    active: boolean;
  };

  /**
   * @SINCE 1.107
   * @EXPERIMENTAL (since 1.107)
   *
   * This control can be used to customize personalization content for filtering for an associated control
   * instance.
   */
  export default class FilterPanel
    /* was: sap.m.p13n.QueryPanel */ extends Object {
    /**
     * Constructor for a new `FilterPanel`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $FilterPanelSettings
    );
    /**
     * Constructor for a new `FilterPanel`.
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
      mSettings?: $FilterPanelSettings
    );

    /**
     * Creates a new subclass of class sap.ui.mdc.p13n.panels.FilterPanel with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.m.p13n.QueryPanel.extend}.
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
      oClassInfo?: sap.ClassInfo<T, FilterPanel>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.mdc.p13n.panels.FilterPanel.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Sets the personalization state of the panel instance.
     *
     * @returns The SortPanel instance
     */
    static setP13nData(
      /**
       * An array containing the personalization state
       */
      aP13nData: FilterItem
    ): FilterPanel;
    /**
     * Gets current value of property {@link #getItemFactory itemFactory}.
     *
     * A factory function that will be called whenever the user selects a new entry from the `ComboBox`. The
     * factory must return a single control instance of an input based control to provide custom filter capabilities.
     * This control is then going to be added in the grid layout provided by the `QueryPanel`. Whenever the
     * `FilterPanel#setP13nData` method will be called, the `active` can be used to update the current set of
     * active factory controls.
     *
     * **Note:**: The Panel will not handle the lifecylce of the provided factory control instance, in case
     * the row is going to be removed, the according consumer needs to decide about destroying or keeping the
     * control instance.
     *
     * @returns Value of property `itemFactory`
     */
    getItemFactory(): Function;
    /**
     * Sets a new value for property {@link #getItemFactory itemFactory}.
     *
     * A factory function that will be called whenever the user selects a new entry from the `ComboBox`. The
     * factory must return a single control instance of an input based control to provide custom filter capabilities.
     * This control is then going to be added in the grid layout provided by the `QueryPanel`. Whenever the
     * `FilterPanel#setP13nData` method will be called, the `active` can be used to update the current set of
     * active factory controls.
     *
     * **Note:**: The Panel will not handle the lifecylce of the provided factory control instance, in case
     * the row is going to be removed, the according consumer needs to decide about destroying or keeping the
     * control instance.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setItemFactory(
      /**
       * New value for property `itemFactory`
       */
      fnItemFactory: Function
    ): this;
  }

  export interface $FilterPanelSettings
    extends /* was: sap.m.p13n.$QueryPanelSettings */ Object {
    /**
     * A factory function that will be called whenever the user selects a new entry from the `ComboBox`. The
     * factory must return a single control instance of an input based control to provide custom filter capabilities.
     * This control is then going to be added in the grid layout provided by the `QueryPanel`. Whenever the
     * `FilterPanel#setP13nData` method will be called, the `active` can be used to update the current set of
     * active factory controls.
     *
     * **Note:**: The Panel will not handle the lifecylce of the provided factory control instance, in case
     * the row is going to be removed, the according consumer needs to decide about destroying or keeping the
     * control instance.
     */
    itemFactory?: Function | PropertyBindingInfo | `{${string}}`;
  }
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/ui/mdc/ActionToolbar": undefined;

    "sap/ui/mdc/actiontoolbar/ActionToolbarAction": undefined;

    "sap/ui/mdc/Chart": undefined;

    "sap/ui/mdc/chart/ChartImplementationContainer": undefined;

    "sap/ui/mdc/chart/ChartSelectionDetails": undefined;

    "sap/ui/mdc/chart/Item": undefined;

    "sap/ui/mdc/chart/SelectionDetailsActions": undefined;

    "sap/ui/mdc/condition/Condition": undefined;

    "sap/ui/mdc/condition/ConditionConverter": undefined;

    "sap/ui/mdc/condition/ConditionModel": undefined;

    "sap/ui/mdc/condition/ConditionModelPropertyBinding": undefined;

    "sap/ui/mdc/condition/FilterConverter": undefined;

    "sap/ui/mdc/condition/FilterOperatorUtil": undefined;

    "sap/ui/mdc/condition/Operator": undefined;

    "sap/ui/mdc/condition/OperatorDynamicDateOption": undefined;

    "sap/ui/mdc/condition/RangeOperator": undefined;

    "sap/ui/mdc/Control": undefined;

    "sap/ui/mdc/Element": undefined;

    "sap/ui/mdc/enum/ActionToolbarActionAlignment": undefined;

    "sap/ui/mdc/enum/BaseType": undefined;

    "sap/ui/mdc/enum/ConditionValidated": undefined;

    "sap/ui/mdc/enum/ContentMode": undefined;

    "sap/ui/mdc/enum/EditMode": undefined;

    "sap/ui/mdc/enum/FieldDisplay": undefined;

    "sap/ui/mdc/enum/OutParameterMode": undefined;

    "sap/ui/mdc/enum/PersistenceMode": undefined;

    "sap/ui/mdc/enum/ProcessingStrategy": undefined;

    "sap/ui/mdc/enum/PropagationReason": undefined;

    "sap/ui/mdc/enum/SelectType": undefined;

    "sap/ui/mdc/Field": undefined;

    "sap/ui/mdc/field/BoolFieldHelp": undefined;

    "sap/ui/mdc/field/ConditionFieldHelp": undefined;

    "sap/ui/mdc/field/ConditionsType": undefined;

    "sap/ui/mdc/field/ConditionType": undefined;

    "sap/ui/mdc/field/CustomFieldHelp": undefined;

    "sap/ui/mdc/field/CustomFieldInfo": undefined;

    "sap/ui/mdc/field/DefineConditionPanel": undefined;

    "sap/ui/mdc/field/DynamicDateRangeConditionsType": undefined;

    "sap/ui/mdc/field/FieldBase": undefined;

    "sap/ui/mdc/field/FieldBaseDelegate": undefined;

    "sap/ui/mdc/field/FieldHelpBase": undefined;

    "sap/ui/mdc/field/FieldHelpBaseDelegate": undefined;

    "sap/ui/mdc/field/FieldInfoBase": undefined;

    "sap/ui/mdc/field/FieldInput": undefined;

    "sap/ui/mdc/field/FieldMultiInput": undefined;

    "sap/ui/mdc/field/FieldValueHelp": undefined;

    "sap/ui/mdc/field/FieldValueHelpContentWrapperBase": undefined;

    "sap/ui/mdc/field/FieldValueHelpDelegate": undefined;

    "sap/ui/mdc/field/FieldValueHelpMdcTableWrapper": undefined;

    "sap/ui/mdc/field/FieldValueHelpMTableWrapper": undefined;

    "sap/ui/mdc/field/FieldValueHelpUITableWrapper": undefined;

    "sap/ui/mdc/field/InParameter": undefined;

    "sap/ui/mdc/field/ListFieldHelp": undefined;

    "sap/ui/mdc/field/ListFieldHelpItem": undefined;

    "sap/ui/mdc/field/MultiValueFieldDelegate": undefined;

    "sap/ui/mdc/field/MultiValueFieldItem": undefined;

    "sap/ui/mdc/field/OutParameter": undefined;

    "sap/ui/mdc/field/TokenDisplay": undefined;

    "sap/ui/mdc/field/TokenizerDisplay": undefined;

    "sap/ui/mdc/field/ValueHelpPanel": undefined;

    "sap/ui/mdc/FilterBar": undefined;

    "sap/ui/mdc/filterbar/aligned/FilterContainer": undefined;

    "sap/ui/mdc/filterbar/aligned/FilterItemLayout": undefined;

    "sap/ui/mdc/filterbar/FilterBarBase": undefined;

    "sap/ui/mdc/filterbar/vh/CollectiveSearchSelect": undefined;

    "sap/ui/mdc/filterbar/vh/FilterBar": undefined;

    "sap/ui/mdc/filterbar/vh/FilterContainer": undefined;

    "sap/ui/mdc/FilterBarDelegate": undefined;

    "sap/ui/mdc/FilterField": undefined;

    "sap/ui/mdc/library": undefined;

    "sap/ui/mdc/Link": undefined;

    "sap/ui/mdc/LinkDelegate": undefined;

    "sap/ui/mdc/mixin/AdaptationMixin": undefined;

    "sap/ui/mdc/mixin/DelegateMixin": undefined;

    "sap/ui/mdc/mixin/FilterIntegrationMixin": undefined;

    "sap/ui/mdc/mixin/PromiseMixin": undefined;

    "sap/ui/mdc/mixin/PropertyHelperMixin": undefined;

    "sap/ui/mdc/MultiValueField": undefined;

    "sap/ui/mdc/odata/v4/FieldBaseDelegate": undefined;

    "sap/ui/mdc/odata/v4/FieldValueHelpDelegate": undefined;

    "sap/ui/mdc/odata/v4/TableDelegate": undefined;

    "sap/ui/mdc/odata/v4/ValueHelpDelegate": undefined;

    "sap/ui/mdc/p13n/AdaptationProvider": undefined;

    "sap/ui/mdc/p13n/Engine": undefined;

    "sap/ui/mdc/p13n/modification/ModificationHandler": undefined;

    "sap/ui/mdc/p13n/modules/DefaultProviderRegistry": undefined;

    "sap/ui/mdc/p13n/panels/FilterPanel": undefined;

    "sap/ui/mdc/p13n/StateUtil": undefined;

    "sap/ui/mdc/p13n/subcontroller/BaseController": undefined;

    "sap/ui/mdc/p13n/UIManager": undefined;

    "sap/ui/mdc/Table": undefined;

    "sap/ui/mdc/table/Column": undefined;

    "sap/ui/mdc/table/CreationRow": undefined;

    "sap/ui/mdc/table/GridTableType": undefined;

    "sap/ui/mdc/table/PropertyHelper": undefined;

    "sap/ui/mdc/table/ResponsiveTableType": undefined;

    "sap/ui/mdc/table/RowActionItem": undefined;

    "sap/ui/mdc/table/RowSettings": undefined;

    "sap/ui/mdc/table/TableTypeBase": undefined;

    "sap/ui/mdc/table/V4AnalyticsPropertyHelper": undefined;

    "sap/ui/mdc/TableDelegate": undefined;

    "sap/ui/mdc/util/DateUtil": undefined;

    "sap/ui/mdc/util/FilterUtil": undefined;

    "sap/ui/mdc/util/PromiseCache": undefined;

    "sap/ui/mdc/util/PropertyHelper": undefined;

    "sap/ui/mdc/util/TypeUtil": undefined;

    "sap/ui/mdc/ValueHelp": undefined;

    "sap/ui/mdc/valuehelp/base/Container": undefined;

    "sap/ui/mdc/valuehelp/base/Content": undefined;

    "sap/ui/mdc/valuehelp/base/DialogTab": undefined;

    "sap/ui/mdc/valuehelp/base/FilterableListContent": undefined;

    "sap/ui/mdc/valuehelp/base/ListContent": undefined;

    "sap/ui/mdc/valuehelp/content/Bool": undefined;

    "sap/ui/mdc/valuehelp/content/Conditions": undefined;

    "sap/ui/mdc/valuehelp/content/FixedList": undefined;

    "sap/ui/mdc/valuehelp/content/MDCTable": undefined;

    "sap/ui/mdc/valuehelp/content/MTable": undefined;

    "sap/ui/mdc/valuehelp/Dialog": undefined;

    "sap/ui/mdc/valuehelp/Popover": undefined;

    "sap/ui/mdc/ValueHelpDelegate": undefined;
  }
}
