// For Library Version: 1.97.0

declare module "sap/ui/mdc/library" {
  /**
   * Enumeration of the `multiSelectMode>/code> in ListBase`.
   */
  export enum MultiSelectMode {
    /**
     * Renders the `clearAll` icon.
     */
    ClearAll = "ClearAll",
    /**
     * Renders the `selectAll` checkbox (default behavior).
     */
    Default = "Default",
  }
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/ui/mdc/ActionToolbar": undefined;

    "sap/ui/mdc/actiontoolbar/ActionToolbarAction": undefined;

    "sap/ui/mdc/Chart": undefined;

    "sap/ui/mdc/chart/DimensionItem": undefined;

    "sap/ui/mdc/chart/Item": undefined;

    "sap/ui/mdc/chart/MeasureItem": undefined;

    "sap/ui/mdc/chart/SelectionDetailsActions": undefined;

    "sap/ui/mdc/chartNew/ChartSelectionDetailsNew": undefined;

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

    "sap/ui/mdc/field/ValueHelpPanel": undefined;

    "sap/ui/mdc/FilterBar": undefined;

    "sap/ui/mdc/filterbar/FilterBarBase": undefined;

    "sap/ui/mdc/filterbar/vh/CollectiveSearchSelect": undefined;

    "sap/ui/mdc/FilterBarDelegate": undefined;

    "sap/ui/mdc/FilterField": undefined;

    "sap/ui/mdc/library": undefined;

    "sap/ui/mdc/Link": undefined;

    "sap/ui/mdc/LinkDelegate": undefined;

    "sap/ui/mdc/mixin/AdaptationMixin": undefined;

    "sap/ui/mdc/mixin/DelegateMixin": undefined;

    "sap/ui/mdc/mixin/FilterIntegrationMixin": undefined;

    "sap/ui/mdc/mixin/PromiseMixin": undefined;

    "sap/ui/mdc/MultiValueField": undefined;

    "sap/ui/mdc/odata/v4/FieldBaseDelegate": undefined;

    "sap/ui/mdc/odata/v4/FieldValueHelpDelegate": undefined;

    "sap/ui/mdc/p13n/AdaptationProvider": undefined;

    "sap/ui/mdc/p13n/Engine": undefined;

    "sap/ui/mdc/p13n/modification/ModificationHandler": undefined;

    "sap/ui/mdc/p13n/modules/DefaultProviderRegistry": undefined;

    "sap/ui/mdc/p13n/StateUtil": undefined;

    "sap/ui/mdc/p13n/subcontroller/BaseController": undefined;

    "sap/ui/mdc/p13n/UIManager": undefined;

    "sap/ui/mdc/Table": undefined;

    "sap/ui/mdc/table/Column": undefined;

    "sap/ui/mdc/table/CreationRow": undefined;

    "sap/ui/mdc/table/GridTableType": undefined;

    "sap/ui/mdc/table/ResponsiveTableType": undefined;

    "sap/ui/mdc/table/RowSettings": undefined;

    "sap/ui/mdc/table/TableTypeBase": undefined;

    "sap/ui/mdc/util/DateUtil": undefined;

    "sap/ui/mdc/util/FilterUtil": undefined;

    "sap/ui/mdc/util/PromiseCache": undefined;

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

    "sap/ui/mdc/valuehelp/content/MTable": undefined;

    "sap/ui/mdc/valuehelp/Dialog": undefined;

    "sap/ui/mdc/valuehelp/Popover": undefined;

    "sap/ui/mdc/ValueHelpDelegate": undefined;
  }
}
