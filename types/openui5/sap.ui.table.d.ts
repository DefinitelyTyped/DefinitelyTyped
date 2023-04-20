// For Library Version: 1.113.0

declare module "sap/ui/table/library" {
  import TreeAutoExpandMode1 from "sap/ui/model/TreeAutoExpandMode";

  /**
   * Details about the group event to distinguish between different actions associated with grouping
   */
  export enum GroupEventType {
    /**
     * Group Column
     */
    group = "group",
    /**
     * Show grouped column only as group header
     */
    hideGroupedColumn = "hideGroupedColumn",
    /**
     * Change the group order of the columns. Move column one position down in the group sequence
     */
    moveDown = "moveDown",
    /**
     * Change the group order of the columns. Move column one position up in the group sequence
     */
    moveUp = "moveUp",
    /**
     * Show grouped column also as a column, not just as group header
     */
    showGroupedColumn = "showGroupedColumn",
    /**
     * Ungroup Column
     */
    ungroup = "ungroup",
    /**
     * Ungroup All Columns
     */
    ungroupAll = "ungroupAll",
  }
  /**
   * Navigation mode of the table
   */
  export enum NavigationMode {
    /**
     * @deprecated (since 1.38) - replaced by {@link sap.ui.table.NavigationMode.Scrollbar}
     *
     * Uses the paginator control. This option must no longer be used. Using a scrollbar is the only navigation
     * mode which is supported by the `sap.ui.table` library. The `navigationMode` property has always been
     * a visual representation. No matter which navigation mode is used, data fetched from an OData service
     * is loaded page-wise.
     */
    Paginator = "Paginator",
    /**
     * Uses the scrollbar control.
     */
    Scrollbar = "Scrollbar",
  }
  /**
   * Enumeration of the `ResetAllMode` that can be used in a `TablePersoController`.
   */
  export enum ResetAllMode {
    /**
     * Default behavior of the `TablePersoDialog` Reset All button.
     */
    Default = "Default",
    /**
     * Resets the table to the default of the attached `PersoService`.
     */
    ServiceDefault = "ServiceDefault",
    /**
     * Resets the table to the result of `getResetPersData` of the attached `PersoService`.
     */
    ServiceReset = "ServiceReset",
  }
  /**
   * Row Action types.
   */
  export enum RowActionType {
    /**
     * Custom defined Row Action.
     */
    Custom = "Custom",
    /**
     * Delete Row Action.
     */
    Delete = "Delete",
    /**
     * Navigation Row Action.
     */
    Navigation = "Navigation",
  }
  /**
   * Selection behavior of the table
   */
  export enum SelectionBehavior {
    /**
     * Rows can be selected on the complete row.
     */
    Row = "Row",
    /**
     * Rows can only be selected on the row (and the selector is hidden).
     */
    RowOnly = "RowOnly",
    /**
     * Rows can only be selected on the row selector.
     */
    RowSelector = "RowSelector",
  }
  /**
   * Selection mode of the table
   */
  export enum SelectionMode {
    /**
     * @deprecated (since 1.38) - replaced by {@link sap.ui.table.SelectionMode.MultiToggle}
     *
     * Select multiple rows at a time.
     */
    Multi = "Multi",
    /**
     * Select multiple rows at a time (toggle behavior).
     */
    MultiToggle = "MultiToggle",
    /**
     * No rows can be selected.
     */
    None = "None",
    /**
     * Select one row at a time.
     */
    Single = "Single",
  }
  /**
   * Shared DOM Reference IDs of the table.
   *
   * Contains IDs of shared DOM references, which should be accessible to inheriting controls via getDomRef()
   * function.
   */
  export enum SharedDomRef {
    /**
     * The element id of the Horizontal Scroll Bar of the sap.ui.table.Table.
     */
    HorizontalScrollBar = "hsb",
    /**
     * The element id of the Vertical Scroll Bar of the sap.ui.table.Table.
     */
    VerticalScrollBar = "vsb",
  }
  /**
   * Sort order of a column
   */
  export enum SortOrder {
    /**
     * Sort Order: ascending.
     */
    Ascending = "Ascending",
    /**
     * Sort Order: descending.
     */
    Descending = "Descending",
  }
  /**
   * Different modes for setting the auto expand mode on tree or analytical bindings.
   *
   * This is an alias for {@link sap.ui.model.TreeAutoExpandMode} and kept for compatibility reasons.
   */
  export type TreeAutoExpandMode = TreeAutoExpandMode1;

  /**
   * VisibleRowCountMode of the table
   */
  export enum VisibleRowCountMode {
    /**
     * The table automatically fills the height of the surrounding container.
     */
    Auto = "Auto",
    /**
     * The table always has as many rows as defined in the `visibleRowCount` property.
     */
    Fixed = "Fixed",
    /**
     * The user can change the `visibleRowCount` by dragging a resizer.
     */
    Interactive = "Interactive",
  }
}

declare module "sap/ui/table/AnalyticalColumn" {
  import { default as Column, $ColumnSettings } from "sap/ui/table/Column";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * This column adds additional properties to the table column which are needed for the analytical binding
   * and table
   */
  export default class AnalyticalColumn extends Column {
    /**
     * Constructor for a new AnalyticalColumn.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $AnalyticalColumnSettings
    );
    /**
     * Constructor for a new AnalyticalColumn.
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
      mSettings?: $AnalyticalColumnSettings
    );

    /**
     * Creates a new subclass of class sap.ui.table.AnalyticalColumn with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.table.Column.extend}.
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
      oClassInfo?: sap.ClassInfo<T, AnalyticalColumn>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.table.AnalyticalColumn.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getGroupHeaderFormatter groupHeaderFormatter}.
     *
     * If the column is grouped, this formatter is used to format the value in the group header
     *
     * @returns Value of property `groupHeaderFormatter`
     */
    getGroupHeaderFormatter(): Function;
    /**
     * Gets current value of property {@link #getInResult inResult}.
     *
     * Specifies that the dimension referred to by the column shall be included in the granularity of the data
     * result. It allows a finer distinction between a visible/grouped/(included)inResult column.
     *
     * Default value is `false`.
     *
     * @returns Value of property `inResult`
     */
    getInResult(): boolean;
    /**
     * Gets current value of property {@link #getLeadingProperty leadingProperty}.
     *
     * Defines the primary model property which is used inside the Column. In case of the analytical extension
     * this means the property which is grouped by for dimensions or the property which is summed for measures.
     *
     * @returns Value of property `leadingProperty`
     */
    getLeadingProperty(): string;
    /**
     * Gets current value of property {@link #getShowIfGrouped showIfGrouped}.
     *
     * Specifies whether the column is displayed within the table even if it is grouped or not. A grouped column
     * has the same value for every rows within the group.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showIfGrouped`
     */
    getShowIfGrouped(): boolean;
    /**
     * Gets current value of property {@link #getSummed summed}.
     *
     * If defined a sum for this column is calculated
     *
     * Default value is `false`.
     *
     * @returns Value of property `summed`
     */
    getSummed(): boolean;
    /**
     * Sets a new value for property {@link #getGroupHeaderFormatter groupHeaderFormatter}.
     *
     * If the column is grouped, this formatter is used to format the value in the group header
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setGroupHeaderFormatter(
      /**
       * New value for property `groupHeaderFormatter`
       */
      fnGroupHeaderFormatter?: Function
    ): this;
    /**
     * Sets a new value for property {@link #getInResult inResult}.
     *
     * Specifies that the dimension referred to by the column shall be included in the granularity of the data
     * result. It allows a finer distinction between a visible/grouped/(included)inResult column.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setInResult(
      /**
       * New value for property `inResult`
       */
      bInResult?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getLeadingProperty leadingProperty}.
     *
     * Defines the primary model property which is used inside the Column. In case of the analytical extension
     * this means the property which is grouped by for dimensions or the property which is summed for measures.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLeadingProperty(
      /**
       * New value for property `leadingProperty`
       */
      sLeadingProperty?: string
    ): this;
    /**
     * Sets a new value for property {@link #getShowIfGrouped showIfGrouped}.
     *
     * Specifies whether the column is displayed within the table even if it is grouped or not. A grouped column
     * has the same value for every rows within the group.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowIfGrouped(
      /**
       * New value for property `showIfGrouped`
       */
      bShowIfGrouped?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSummed summed}.
     *
     * If defined a sum for this column is calculated
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSummed(
      /**
       * New value for property `summed`
       */
      bSummed?: boolean
    ): this;
  }

  export interface $AnalyticalColumnSettings extends $ColumnSettings {
    /**
     * Defines the primary model property which is used inside the Column. In case of the analytical extension
     * this means the property which is grouped by for dimensions or the property which is summed for measures.
     */
    leadingProperty?: string | PropertyBindingInfo;

    /**
     * If defined a sum for this column is calculated
     */
    summed?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies that the dimension referred to by the column shall be included in the granularity of the data
     * result. It allows a finer distinction between a visible/grouped/(included)inResult column.
     */
    inResult?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies whether the column is displayed within the table even if it is grouped or not. A grouped column
     * has the same value for every rows within the group.
     */
    showIfGrouped?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If the column is grouped, this formatter is used to format the value in the group header
     */
    groupHeaderFormatter?: Function | PropertyBindingInfo | `{${string}}`;
  }
}

declare module "sap/ui/table/AnalyticalColumnMenu" {
  import {
    default as ColumnMenu,
    $ColumnMenuSettings,
  } from "sap/ui/table/ColumnMenu";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @EXPERIMENTAL (since 1.21) - The AnalyticalColumnMenu will be productized soon.
   *
   * A column menu which is used by the analytical column
   */
  export default class AnalyticalColumnMenu extends ColumnMenu {
    /**
     * Constructor for a new AnalyticalColumnMenu.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.table.ColumnMenu#constructor
     * sap.ui.table.ColumnMenu} can be used.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $AnalyticalColumnMenuSettings
    );
    /**
     * Constructor for a new AnalyticalColumnMenu.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.table.ColumnMenu#constructor
     * sap.ui.table.ColumnMenu} can be used.
     */
    constructor(
      /**
       * id for the new control, generated automatically if no id is given
       */
      sId?: string,
      /**
       * initial settings for the new control
       */
      mSettings?: $AnalyticalColumnMenuSettings
    );

    /**
     * Creates a new subclass of class sap.ui.table.AnalyticalColumnMenu with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.table.ColumnMenu.extend}.
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
      oClassInfo?: sap.ClassInfo<T, AnalyticalColumnMenu>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.table.AnalyticalColumnMenu.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $AnalyticalColumnMenuSettings extends $ColumnMenuSettings {}
}

declare module "sap/ui/table/AnalyticalTable" {
  import { default as Table, $TableSettings } from "sap/ui/table/Table";

  import Context from "sap/ui/model/Context";

  import { ID } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Column from "sap/ui/table/Column";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * Table which handles analytical OData backends. The AnalyticalTable only works with an AnalyticalBinding
   * and correctly annotated OData services. Please check on the SAP Annotations for OData Version 2.0 documentation
   * for further details.
   */
  export default class AnalyticalTable extends Table {
    /**
     * Constructor for a new AnalyticalTable.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     *   https://github.com/SAP/odata-vocabularies/blob/main/docs/v2-annotations.md
     *   {@link topic:08197fa68e4f479cbe30f639cc1cd22c sap.ui.table}
     *   {@link fiori:/analytical-table-alv/ Analytical Table}
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $AnalyticalTableSettings
    );
    /**
     * Constructor for a new AnalyticalTable.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	https://github.com/SAP/odata-vocabularies/blob/main/docs/v2-annotations.md
     * 	{@link topic:08197fa68e4f479cbe30f639cc1cd22c sap.ui.table}
     * 	{@link fiori:/analytical-table-alv/ Analytical Table}
     */
    constructor(
      /**
       * id for the new control, generated automatically if no id is given
       */
      sId?: string,
      /**
       * initial settings for the new control
       */
      mSettings?: $AnalyticalTableSettings
    );

    /**
     * Creates a new subclass of class sap.ui.table.AnalyticalTable with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.table.Table.extend}.
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
      oClassInfo?: sap.ClassInfo<T, AnalyticalTable>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.table.AnalyticalTable.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Marks a range of tree nodes as selected, starting with iFromIndex going to iToIndex. The nodes are referenced
     * via their absolute row index. Please be aware that the absolute row index only applies to the tree which
     * is visualized by the `AnalyticalTable` control. Invisible nodes (collapsed child nodes) will not be taken
     * into account.
     *
     * Please also take notice of the fact, that "addSelectionInterval" does not change any other selection.
     * To override the current selection, please use "setSelectionInterval" or for a single entry use "setSelectedIndex".
     *
     * @returns a reference to the `AnalyticalTable` control, can be used for chaining
     */
    addSelectionInterval(
      /**
       * The starting index of the range which will be selected.
       */
      iFromIndex: int,
      /**
       * The starting index of the range which will be selected.
       */
      iToIndex: int
    ): this;
    /**
     * Collapses one or more rows.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    collapse(
      /**
       * A single index, or an array of indices of the rows to be collapsed
       */
      vRowIndex: int | int[]
    ): this;
    /**
     * Collapses all nodes (and their child nodes if collapseRecursive is activated).
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    collapseAll(): this;
    /**
     * Expands one or more rows.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    expand(
      /**
       * A single index or an array of indices of the rows to be expanded
       */
      vRowIndex: int | int[]
    ): this;
    /**
     * @SINCE 1.70
     *
     * Expands all nodes. The current selection is removed, and the table scrolls back to the top. If this method
     * is called, not all groups might be loaded. If the user then scrolls to the bottom of the table, additional
     * groups are loaded, which increases the scroll range, and the scroll thumb moves up.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    expandAll(): this;
    /**
     * @deprecated (since 1.44) - replaced by the `autoExpandMode` binding parameter
     *
     * Gets current value of property {@link #getAutoExpandMode autoExpandMode}.
     *
     * The kind of auto expansion algorithm, e.g. optimized filter conditions, per level requests, ... Must
     * be a value of `sap.ui.table.TreeAutoExpandMode`.
     *
     * The value of the property is only taken into account if no parameter is given in the binding information.
     * Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind
     * of the `rows` aggregation is done.
     *
     * Example:
     * ```javascript
     *
     *   oTable.bindRows({
     *     path: "...",
     *     parameters: {
     *       autoExpandMode: "Bundled"
     *     }
     *   });
     * ```
     *
     *
     * Default value is `"Bundled"`.
     *
     * @returns Value of property `autoExpandMode`
     */
    getAutoExpandMode(): string;
    /**
     * @deprecated (since 1.76) - replaced by the `collapseRecursive` binding parameter
     *
     * Gets current value of property {@link #getCollapseRecursive collapseRecursive}.
     *
     * Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will
     * also be collapsed.
     *
     * Calling the setter of this property only has an effect when the tables `rows` aggregation is already
     * bound and the binding supports this feature.
     *
     * Example:
     * ```javascript
     *
     *   oTable.bindRows({
     *     path: "...",
     *     parameters: {
     *       collapseRecursive: true
     *     }
     *   });
     * ```
     *
     *
     * Default value is `true`.
     *
     * @returns Value of property `collapseRecursive`
     */
    getCollapseRecursive(): boolean;
    /**
     * Gets current value of property {@link #getColumnVisibilityMenuSorter columnVisibilityMenuSorter}.
     *
     * Functions which is used to sort the column visibility menu entries e.g.: function(ColumnA, ColumnB) {
     * return 0 = equals, <0 lower, >0 greater }; Other values than functions will be ignored.
     *
     * @returns Value of property `columnVisibilityMenuSorter`
     */
    getColumnVisibilityMenuSorter(): any;
    /**
     * Returns the context of a row by its index.
     *
     * @returns The context of a row by its index
     */
    getContextByIndex(
      /**
       * Index of the row to return the context from.
       */
      iIndex: int
    ): Context;
    /**
     * @deprecated (since 1.21.2) - replaced by {@link sap.ui.table.Table#setShowOverlay}
     *
     * Gets current value of property {@link #getDirty dirty}.
     *
     * If dirty the content of the Table will be overlayed.
     *
     * @returns Value of property `dirty`
     */
    getDirty(): boolean;
    /**
     * @deprecated (since 1.28)
     *
     * The property `enableGrouping` is not supported by the `AnalyticalTable` control.
     */
    getEnableGrouping(): boolean;
    /**
     * @deprecated (since 1.28)
     *
     * The `groupBy` association is not supported by the `AnalyticalTable` control.
     */
    getGroupBy(): ID;
    /**
     * @deprecated (since 1.44) - replaced by the `numberOfExpandedLevels` binding parameter
     *
     * Gets current value of property {@link #getNumberOfExpandedLevels numberOfExpandedLevels}.
     *
     * Number of levels, which should be opened initially (on first load of data).
     *
     * The value of the property is only taken into account if no parameter is given in the binding information.
     * Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind
     * of the `rows` aggregation is done.
     *
     * Example:
     * ```javascript
     *
     *   oTable.bindRows({
     *     path: "...",
     *     parameters: {
     *       numberOfExpandedLevels: 1
     *     }
     *   });
     * ```
     *
     *
     * Default value is `0`.
     *
     * @returns Value of property `numberOfExpandedLevels`
     */
    getNumberOfExpandedLevels(): int;
    /**
     * Retrieves the lead selection index.
     *
     * The lead selection index is, among other things, used to determine the start/end of a selection range,
     * when using Shift-Click to select multiple entries at once.
     *
     * @returns Current lead selection index.
     */
    getSelectedIndex(): int;
    /**
     * Returns an array containing the row indices of all selected tree nodes (in ascending order).
     *
     * Please be aware of the following: Due to performance/network traffic reasons, the getSelectedIndices
     * function returns only all indices of actually selected rows/tree nodes. Unknown rows/nodes (as in "not
     * yet loaded" to the client), will not be returned.
     *
     * @returns an array containing all selected indices
     */
    getSelectedIndices(): int[];
    /**
     * @deprecated (since 1.44) - replaced by the `sumOnTop` binding parameter
     *
     * Gets current value of property {@link #getSumOnTop sumOnTop}.
     *
     * Specifies if the total values should be displayed in the group headers or on bottom of the row. Does
     * not affect the total sum.
     *
     * The value of the property is only taken into account if no parameter is given in the binding information.
     * Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind
     * of the `rows` aggregation is done.
     *
     * Example:
     * ```javascript
     *
     *   oTable.bindRows({
     *     path: "...",
     *     parameters: {
     *       sumOnTop: true
     *     }
     *   });
     * ```
     *
     *
     * Default value is `false`.
     *
     * @returns Value of property `sumOnTop`
     */
    getSumOnTop(): boolean;
    /**
     * Returns the total size of the data entries.
     *
     * @returns The total size of the data entries
     */
    getTotalSize(): int;
    /**
     * Checks whether the row is expanded or collapsed.
     *
     * @returns `true` if the row is expanded, `false` if it is collapsed
     */
    isExpanded(
      /**
       * The index of the row to be checked
       */
      iRowIndex: int
    ): boolean;
    /**
     * Checks if the row at the given index is selected.
     *
     * @returns true if the index is selected, false otherwise
     */
    isIndexSelected(
      /**
       * The row index for which the selection state should be retrieved
       */
      iRowIndex: int
    ): boolean;
    /**
     * All rows/tree nodes inside the range (including boundaries) will be deselected. The nodes are referenced
     * with their absolute row index. Please be aware that the absolute row index only applies to the tree which
     * is visualized by the `AnalyticalTable` control. Invisible nodes (collapsed child nodes) will not be taken
     * into account.
     *
     * @returns a reference to the `AnalyticalTable` control, can be used for chaining
     */
    removeSelectionInterval(
      /**
       * The starting index of the range which will be deselected.
       */
      iFromIndex: int,
      /**
       * The starting index of the range which will be deselected.
       */
      iToIndex: int
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * This function is used by some composite controls to force updating the AnalyticalInfo
     */
    resumeUpdateAnalyticalInfo(
      /**
       * binding shall not refresh data
       */
      bSuppressRefresh: boolean,
      /**
       * forces the binding to fire a change event
       */
      bForceChange: boolean
    ): void;
    /**
     * Selects all available nodes/rows.
     *
     * Explanation of the SelectAll function and what to expect from its behavior: All rows/nodes stored locally
     * on the client are selected. In addition all subsequent rows/tree nodes, which will be paged into view
     * are also immediately selected. However, due to obvious performance/network traffic reasons, the SelectAll
     * function will NOT retrieve any data from the backend.
     *
     * @returns a reference to the `AnalyticalTable` control, can be used for chaining
     */
    selectAll(): this;
    /**
     * @deprecated (since 1.44) - replaced by the `autoExpandMode` binding parameter
     *
     * Sets a new value for property {@link #getAutoExpandMode autoExpandMode}.
     *
     * The kind of auto expansion algorithm, e.g. optimized filter conditions, per level requests, ... Must
     * be a value of `sap.ui.table.TreeAutoExpandMode`.
     *
     * The value of the property is only taken into account if no parameter is given in the binding information.
     * Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind
     * of the `rows` aggregation is done.
     *
     * Example:
     * ```javascript
     *
     *   oTable.bindRows({
     *     path: "...",
     *     parameters: {
     *       autoExpandMode: "Bundled"
     *     }
     *   });
     * ```
     *
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Bundled"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAutoExpandMode(
      /**
       * New value for property `autoExpandMode`
       */
      sAutoExpandMode?: string
    ): this;
    /**
     * @deprecated (since 1.76) - replaced by the `collapseRecursive` binding parameter
     *
     * Sets a new value for property {@link #getCollapseRecursive collapseRecursive}.
     *
     * Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will
     * also be collapsed.
     *
     * Calling the setter of this property only has an effect when the tables `rows` aggregation is already
     * bound and the binding supports this feature.
     *
     * Example:
     * ```javascript
     *
     *   oTable.bindRows({
     *     path: "...",
     *     parameters: {
     *       collapseRecursive: true
     *     }
     *   });
     * ```
     *
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setCollapseRecursive(
      /**
       * New value for property `collapseRecursive`
       */
      bCollapseRecursive?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getColumnVisibilityMenuSorter columnVisibilityMenuSorter}.
     *
     * Functions which is used to sort the column visibility menu entries e.g.: function(ColumnA, ColumnB) {
     * return 0 = equals, <0 lower, >0 greater }; Other values than functions will be ignored.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setColumnVisibilityMenuSorter(
      /**
       * New value for property `columnVisibilityMenuSorter`
       */
      oColumnVisibilityMenuSorter?: any
    ): this;
    /**
     * @deprecated (since 1.21.2) - replaced by {@link sap.ui.table.Table#setShowOverlay}
     *
     * Sets a new value for property {@link #getDirty dirty}.
     *
     * If dirty the content of the Table will be overlayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDirty(
      /**
       * New value for property `dirty`
       */
      bDirty?: boolean
    ): this;
    /**
     * @deprecated (since 1.28)
     *
     * The property `enableGrouping` is not supported by the `AnalyticalTable` control.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableGrouping(bValue: boolean): this;
    /**
     * @deprecated (since 1.28)
     *
     * The `groupBy` association is not supported by the `AnalyticalTable` control.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setGroupBy(oGroupBy: ID | Column): this;
    /**
     * @deprecated (since 1.44) - replaced by the `numberOfExpandedLevels` binding parameter
     *
     * Sets a new value for property {@link #getNumberOfExpandedLevels numberOfExpandedLevels}.
     *
     * Number of levels, which should be opened initially (on first load of data).
     *
     * The value of the property is only taken into account if no parameter is given in the binding information.
     * Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind
     * of the `rows` aggregation is done.
     *
     * Example:
     * ```javascript
     *
     *   oTable.bindRows({
     *     path: "...",
     *     parameters: {
     *       numberOfExpandedLevels: 1
     *     }
     *   });
     * ```
     *
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setNumberOfExpandedLevels(
      /**
       * New value for property `numberOfExpandedLevels`
       */
      iNumberOfExpandedLevels?: int
    ): this;
    /**
     * In an `AnalyticalTable` control you can only select indices, which correspond to the currently visualized
     * tree. Invisible nodes (e.g. collapsed child nodes) cannot be selected via Index, because they do not
     * correspond to an `AnalyticalTable` row.
     *
     * @returns a reference to the `AnalyticalTable` control, can be used for chaining
     */
    setSelectedIndex(
      /**
       * The row index which will be selected (in case it exists)
       */
      iRowIndex: int
    ): this;
    /**
     * Sets the selection of the `AnalyticalTable` control to the given range (including boundaries).
     *
     * **Note:** The previous selection will be lost/overridden. If this is not the required behavior, please
     * use `addSelectionInterval` and `removeSelectionInterval`.
     *
     * @returns a reference to the `AnalyticalTable` control, can be used for chaining
     */
    setSelectionInterval(
      /**
       * the start index of the selection range
       */
      iFromIndex: int,
      /**
       * the end index of the selection range
       */
      iToIndex: int
    ): this;
    /**
     * @deprecated (since 1.44) - replaced by the `sumOnTop` binding parameter
     *
     * Sets a new value for property {@link #getSumOnTop sumOnTop}.
     *
     * Specifies if the total values should be displayed in the group headers or on bottom of the row. Does
     * not affect the total sum.
     *
     * The value of the property is only taken into account if no parameter is given in the binding information.
     * Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind
     * of the `rows` aggregation is done.
     *
     * Example:
     * ```javascript
     *
     *   oTable.bindRows({
     *     path: "...",
     *     parameters: {
     *       sumOnTop: true
     *     }
     *   });
     * ```
     *
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSumOnTop(
      /**
       * New value for property `sumOnTop`
       */
      bSumOnTop?: boolean
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * This function is used by some composite controls to avoid updating the AnalyticalInfo when several column
     * are added to the table. In order to finally update the AnalyticalInfo and request data, resumeUpdateAnalyticalInfo
     * must be called.
     */
    suspendUpdateAnalyticalInfo(): void;
  }

  export interface $AnalyticalTableSettings extends $TableSettings {
    /**
     * @deprecated (since 1.44) - replaced by the `sumOnTop` binding parameter
     *
     * Specifies if the total values should be displayed in the group headers or on bottom of the row. Does
     * not affect the total sum.
     *
     * The value of the property is only taken into account if no parameter is given in the binding information.
     * Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind
     * of the `rows` aggregation is done.
     *
     * Example:
     * ```javascript
     *
     *   oTable.bindRows({
     *     path: "...",
     *     parameters: {
     *       sumOnTop: true
     *     }
     *   });
     * ```
     */
    sumOnTop?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @deprecated (since 1.44) - replaced by the `numberOfExpandedLevels` binding parameter
     *
     * Number of levels, which should be opened initially (on first load of data).
     *
     * The value of the property is only taken into account if no parameter is given in the binding information.
     * Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind
     * of the `rows` aggregation is done.
     *
     * Example:
     * ```javascript
     *
     *   oTable.bindRows({
     *     path: "...",
     *     parameters: {
     *       numberOfExpandedLevels: 1
     *     }
     *   });
     * ```
     */
    numberOfExpandedLevels?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * @deprecated (since 1.44) - replaced by the `autoExpandMode` binding parameter
     *
     * The kind of auto expansion algorithm, e.g. optimized filter conditions, per level requests, ... Must
     * be a value of `sap.ui.table.TreeAutoExpandMode`.
     *
     * The value of the property is only taken into account if no parameter is given in the binding information.
     * Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind
     * of the `rows` aggregation is done.
     *
     * Example:
     * ```javascript
     *
     *   oTable.bindRows({
     *     path: "...",
     *     parameters: {
     *       autoExpandMode: "Bundled"
     *     }
     *   });
     * ```
     */
    autoExpandMode?: string | PropertyBindingInfo;

    /**
     * Functions which is used to sort the column visibility menu entries e.g.: function(ColumnA, ColumnB) {
     * return 0 = equals, <0 lower, >0 greater }; Other values than functions will be ignored.
     */
    columnVisibilityMenuSorter?: any | PropertyBindingInfo | `{${string}}`;

    /**
     * @deprecated (since 1.76) - replaced by the `collapseRecursive` binding parameter
     *
     * Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will
     * also be collapsed.
     *
     * Calling the setter of this property only has an effect when the tables `rows` aggregation is already
     * bound and the binding supports this feature.
     *
     * Example:
     * ```javascript
     *
     *   oTable.bindRows({
     *     path: "...",
     *     parameters: {
     *       collapseRecursive: true
     *     }
     *   });
     * ```
     */
    collapseRecursive?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @deprecated (since 1.21.2) - replaced by {@link sap.ui.table.Table#setShowOverlay}
     *
     * If dirty the content of the Table will be overlayed.
     */
    dirty?: boolean | PropertyBindingInfo | `{${string}}`;
  }
}

declare module "sap/ui/table/Column" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import Control from "sap/ui/core/Control";

  import Event from "sap/ui/base/Event";

  import Menu from "sap/ui/unified/Menu";

  import {
    HorizontalAlign,
    ID,
    CSSSize,
    IColumnHeaderMenu,
  } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { SortOrder } from "sap/ui/table/library";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * The column allows you to define column specific properties that will be applied when rendering the table.
   */
  export default class Column extends UI5Element {
    /**
     * Constructor for a new Column.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
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
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ColumnSettings
    );

    /**
     * Creates a new subclass of class sap.ui.table.Column with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Column>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.table.Column.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.13.1
     *
     * Adds some multiLabel to the aggregation {@link #getMultiLabels multiLabels}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addMultiLabel(
      /**
       * The multiLabel to add; if empty, nothing is inserted
       */
      oMultiLabel: Control
    ): this;
    /**
     * @SINCE 1.33.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:columnMenuOpen columnMenuOpen} event of this
     * `sap.ui.table.Column`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Column` itself.
     *
     * Fires before the column menu is opened.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachColumnMenuOpen(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Column` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.33.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:columnMenuOpen columnMenuOpen} event of this
     * `sap.ui.table.Column`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Column` itself.
     *
     * Fires before the column menu is opened.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachColumnMenuOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Column` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys the label in the aggregation {@link #getLabel label}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyLabel(): this;
    /**
     * Destroys the menu in the aggregation {@link #getMenu menu}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyMenu(): this;
    /**
     * @SINCE 1.13.1
     *
     * Destroys all the multiLabels in the aggregation {@link #getMultiLabels multiLabels}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyMultiLabels(): this;
    /**
     * Destroys the template in the aggregation {@link #getTemplate template}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTemplate(): this;
    /**
     * @SINCE 1.33.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:columnMenuOpen columnMenuOpen} event of this
     * `sap.ui.table.Column`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachColumnMenuOpen(
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
     * @SINCE 1.33.0
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:columnMenuOpen columnMenuOpen} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireColumnMenuOpen(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Refence to the selected `menu` instance to be opened.
         */
        menu?: Menu;
      }
    ): boolean;
    /**
     * @SINCE 1.21.1
     *
     * Gets current value of property {@link #getAutoResizable autoResizable}.
     *
     * Enables auto-resizing of the column on double clicking the resize bar. The width is determined on the
     * widest currently displayed content. It does not consider rows which are currently not scrolled into view.
     * Currently only implemented to work with the following controls: `sap.m.Text, sap.m.Label, sap.m.Link,
     * sap.m.Input, sap.ui.commons.TextView, sap.ui.commons.Label, sap.ui.commons.Link and sap.ui.commons.TextField,
     * sap.ui.commons.Checkbox, sap.m.CheckBox`
     *
     * Default value is `false`.
     *
     * @returns Value of property `autoResizable`
     */
    getAutoResizable(): boolean;
    /**
     * Gets current value of property {@link #getDefaultFilterOperator defaultFilterOperator}.
     *
     * If this property is set, the default filter operator of the column is overridden. By default `Contains`
     * is used for string and `EQ` for other types. A valid `sap.ui.model.FilterOperator` needs to be passed.
     *
     * @returns Value of property `defaultFilterOperator`
     */
    getDefaultFilterOperator(): string;
    /**
     * Gets current value of property {@link #getFiltered filtered}.
     *
     * Indicates if the column is filtered. This property only controls if a filter indicator is displayed in
     * the column header - it does not trigger the filter function. The column can be filtered using {@link
     * sap.ui.table.Table#filter}.
     *
     * Default value is `false`.
     *
     * @returns Value of property `filtered`
     */
    getFiltered(): boolean;
    /**
     * Gets current value of property {@link #getFilterOperator filterOperator}.
     *
     * Filter operator to use when filtering this column.
     *
     * @returns Value of property `filterOperator`
     */
    getFilterOperator(): string;
    /**
     * Gets current value of property {@link #getFilterProperty filterProperty}.
     *
     * Specifies the binding property on which the column shall be filtered. Since the column template may have
     * composite bindings, it's not possible to figure out on which binding property the filter shall be applied.
     * Therefore the binding property for filtering must be specified. For example, if the first name and last
     * name are displayed in the same column, only one of the two can be defined as `filterProperty`.
     *
     * A column menu entry for filtering can only be generated if the `filterProperty` is set. The default menu
     * entry is a text input field.
     *
     * @returns Value of property `filterProperty`
     */
    getFilterProperty(): string;
    /**
     * @SINCE 1.9.2
     *
     * Gets current value of property {@link #getFilterType filterType}.
     *
     * Type of filter. It is used to transform the search term into the specified type and should be the same
     * as defined in the binding for the column template. Default value is `sap.ui.model.type.String`. It can
     * be set to the class name of the type, e.g.: `sap.ui.model.type.Date`, or an expression similar to the
     * binding syntax, e.g.: `"\{type: 'sap.ui.model.type.Date', formatOptions: \{UTC: true\}, constraints:
     * \{\} \}"`. Here the escaping is mandatory to avoid handling by the binding parser. As an alternative,
     * a function can be passed that takes over the conversion. This cannot be done in the XMLView, use {@link
     * #setFilterType} instead.
     *
     * @returns Value of property `filterType`
     */
    getFilterType(): any;
    /**
     * Gets current value of property {@link #getFilterValue filterValue}.
     *
     * Specifies the value of the filter as string (will be converted into the proper data type). It is possible
     * to provide a filterOperator as string, as shown here:
     * ```javascript
     *
     * > 50
     * < 100
     * >= 150
     * <= 200
     * = 250
     * != 300
     * something    ends with
     * something*    starts with
     * something*   contains
     * some..thing   between
     * 50..100       between
     * ```
     *
     *
     * @returns Value of property `filterValue`
     */
    getFilterValue(): string;
    /**
     * @deprecated (since 1.44) - this property has no effect. Use the property `minWidth` in combination with
     * the property `width="auto"` instead.
     *
     * Gets current value of property {@link #getFlexible flexible}.
     *
     * If the table is wider than the sum of widths of the visible columns, the columns will be resized proportionally
     * to their widths that were set originally. If set to false, the column will be displayed in the original
     * width. If all columns are set to not be flexible, an extra "dummy" column will be created at the end
     * of the table.
     *
     * Default value is `true`.
     *
     * @returns Value of property `flexible`
     */
    getFlexible(): boolean;
    /**
     * Gets current value of property {@link #getGrouped grouped}.
     *
     * Indicates if the column is grouped.
     *
     * Default value is `false`.
     *
     * @returns Value of property `grouped`
     */
    getGrouped(): boolean;
    /**
     * Gets current value of property {@link #getHAlign hAlign}.
     *
     * Horizontal alignment of the column content. Controls with a text align do not inherit the horizontal
     * alignment. You have to set the text align directly on the template.
     *
     * Default value is `Begin`.
     *
     * @returns Value of property `hAlign`
     */
    getHAlign(): HorizontalAlign | keyof typeof HorizontalAlign;
    /**
     * @SINCE 1.110
     *
     * ID of the element which is the current target of the association {@link #getHeaderMenu headerMenu}, or
     * `null`.
     */
    getHeaderMenu(): ID;
    /**
     * Gets current value of property {@link #getHeaderSpan headerSpan}.
     *
     * If this property is set, a span is applied for the header. When moving columns, all columns which are
     * part of the header will be moved. The `headerSpan` can be either an integer or an array of integers (if
     * you use the multi header feature of the table). If you only specify an integer, this span is applied
     * for all header rows, with multiple integers you can specify a separate span for each header row. **Note:**
     * Only columns with a span equal to 1 can have a column menu. When setting a column to fixed, all columns
     * which are part of the header with the greatest span will be set to fixed.
     *
     * Default value is `1`.
     *
     * @returns Value of property `headerSpan`
     */
    getHeaderSpan(): any;
    /**
     * Gets content of aggregation {@link #getLabel label}.
     *
     * Label of the column which is displayed in the column header. This aggregation is for the standard behavior,
     * where you only want to display one single row header. If a string is supplied, a default label control
     * will be created. Which control this is depends on the loaded libraries.
     */
    getLabel(): Control | string;
    /**
     * Gets content of aggregation {@link #getMenu menu}.
     *
     * The menu used by the column. By default the {@link sap.ui.table.ColumnMenu} is used.
     *
     * **Note:** Applications must not use or change the default `sap.ui.table.ColumnMenu` of a column in any
     * way or create own instances of `sap.ui.table.ColumnMenu`. To add a custom menu to a column, use the aggregation
     * `menu` with a new instance of `sap.ui.unified.Menu`.
     */
    getMenu(): Menu;
    /**
     * @SINCE 1.44.1
     *
     * Gets current value of property {@link #getMinWidth minWidth}.
     *
     * Defines the minimum width of a column in pixels. This property only has an effect if the given column
     * width is flexible, for example with width `auto`. This property only influences the automatic behavior.
     * If a user adjusts the column width manually, the column width can become smaller. Minimal column width
     * is device-dependent, for example on desktop devices the column will not be smaller than 48px.
     *
     * Default value is `0`.
     *
     * @returns Value of property `minWidth`
     */
    getMinWidth(): int;
    /**
     * @SINCE 1.13.1
     *
     * Gets content of aggregation {@link #getMultiLabels multiLabels}.
     *
     * Labels of the column which are displayed in the column header. Define a control for each header row in
     * the table. Use this aggregation if you want to use multiple headers per column.
     */
    getMultiLabels(): Control[];
    /**
     * @SINCE 1.11.1
     *
     * Gets current value of property {@link #getName name}.
     *
     * The name of the column which is used for the text representation of this column, for example, in menus.
     * If not set, the text from the multiLabels aggregation or the label aggregation (in that order) is used
     * as a fallback option.
     *
     * @returns Value of property `name`
     */
    getName(): string;
    /**
     * Gets current value of property {@link #getResizable resizable}.
     *
     * If set to true, the column can be resized either using the resize bar (by mouse) or using the keyboard
     * (SHIFT + Left/Right Arrow keys)
     *
     * Default value is `true`.
     *
     * @returns Value of property `resizable`
     */
    getResizable(): boolean;
    /**
     * @SINCE 1.13.0
     *
     * Gets current value of property {@link #getShowFilterMenuEntry showFilterMenuEntry}.
     *
     * Defines if the filter menu entry is displayed
     *
     * Default value is `true`.
     *
     * @returns Value of property `showFilterMenuEntry`
     */
    getShowFilterMenuEntry(): boolean;
    /**
     * @SINCE 1.13.0
     *
     * Gets current value of property {@link #getShowSortMenuEntry showSortMenuEntry}.
     *
     * Defines if the sort menu entries are displayed
     *
     * Default value is `true`.
     *
     * @returns Value of property `showSortMenuEntry`
     */
    getShowSortMenuEntry(): boolean;
    /**
     * Gets current value of property {@link #getSorted sorted}.
     *
     * Indicates if the column is sorted. This property only controls if a sort indicator is displayed in the
     * column header - it does not trigger the sort function. The column can be sorted using {@link sap.ui.table.Table#sort}.
     *
     * Default value is `false`.
     *
     * @returns Value of property `sorted`
     */
    getSorted(): boolean;
    /**
     * Gets current value of property {@link #getSortOrder sortOrder}.
     *
     * This property indicates the sort direction (Ascending or Descending). The corresponding icon will be
     * rendered if the property `sorted` is `true`
     *
     * Default value is `Ascending`.
     *
     * @returns Value of property `sortOrder`
     */
    getSortOrder(): SortOrder | keyof typeof SortOrder;
    /**
     * Gets current value of property {@link #getSortProperty sortProperty}.
     *
     * Specifies the binding property on which the column will sort. Since the column template may have composite
     * bindings, it's not possible to figure out on which binding property the sort shall be applied. Therefore
     * the binding property for sorting must be specified. For example, if the first name and last name are
     * displayed in the same column, only one of the two can be defined as `sortProperty`.
     *
     * A column menu entry for sorting can only be generated if the `sortProperty` is set.
     *
     * @returns Value of property `sortProperty`
     */
    getSortProperty(): string;
    /**
     * Gets content of aggregation {@link #getTemplate template}.
     *
     * Template (cell renderer) of this column. A template is decoupled from the column. Each time the template's
     * properties or aggregations have been changed, the template has to be applied again via `setTemplate`
     * for the changes to take effect. If a string is defined, a default text control will be created with its
     * text property bound to the value of the string. The default template depends on the libraries loaded.
     * If there is no template, the column will not be rendered in the table. The set of supported controls
     * is limited. See section "{@link topic:148892ff9aea4a18b912829791e38f3e Tables: Which One Should I Choose?}"
     * in the documentation for more details. While it is technically possible to also use other controls, doing
     * so might lead to issues with regards to scrolling, alignment, condensed mode, screen reader support,
     * and keyboard support.
     */
    getTemplate(): Control | string;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Returns a template clone. It either finds an unused clone or clones a new one from the template.
     *
     * @returns Clone of the template, or `null` if no template is defined
     */
    getTemplateClone(
      /**
       * Index of the column in the columns aggregation of the table
       */
      iIndex: int
    ): Control | null;
    /**
     * Gets current value of property {@link #getVisible visible}.
     *
     * Invisible controls are not rendered.
     *
     * Default value is `true`.
     *
     * @returns Value of property `visible`
     */
    getVisible(): boolean;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Width of the column in CSS units. Default value is `auto`, see
     * Minimal column width is device-dependent, for example on desktop devices the column will not be smaller
     * than 48px. This property can be changed by the user or by the application configuration/personalization.
     * If a user adjusts the column width manually, the resulting value is always set in pixels. In addition,
     * other columns with width `auto` get a fixed minimum width and do not shrink after the resizing.
     *
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
    /**
     * @SINCE 1.13.1
     *
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getMultiLabels multiLabels}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfMultiLabel(
      /**
       * The multiLabel whose index is looked for
       */
      oMultiLabel: Control
    ): int;
    /**
     * @SINCE 1.13.1
     *
     * Inserts a multiLabel into the aggregation {@link #getMultiLabels multiLabels}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertMultiLabel(
      /**
       * The multiLabel to insert; if empty, nothing is inserted
       */
      oMultiLabel: Control,
      /**
       * The `0`-based index the multiLabel should be inserted at; for a negative value of `iIndex`, the multiLabel
       * is inserted at position 0; for a value greater than the current size of the aggregation, the multiLabel
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * @SINCE 1.13.1
     *
     * Removes all the controls from the aggregation {@link #getMultiLabels multiLabels}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllMultiLabels(): Control[];
    /**
     * @SINCE 1.13.1
     *
     * Removes a multiLabel from the aggregation {@link #getMultiLabels multiLabels}.
     *
     * @returns The removed multiLabel or `null`
     */
    removeMultiLabel(
      /**
       * The multiLabel to remove or its index or id
       */
      vMultiLabel: int | string | Control
    ): Control | null;
    /**
     * @SINCE 1.21.1
     *
     * Sets a new value for property {@link #getAutoResizable autoResizable}.
     *
     * Enables auto-resizing of the column on double clicking the resize bar. The width is determined on the
     * widest currently displayed content. It does not consider rows which are currently not scrolled into view.
     * Currently only implemented to work with the following controls: `sap.m.Text, sap.m.Label, sap.m.Link,
     * sap.m.Input, sap.ui.commons.TextView, sap.ui.commons.Label, sap.ui.commons.Link and sap.ui.commons.TextField,
     * sap.ui.commons.Checkbox, sap.m.CheckBox`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAutoResizable(
      /**
       * New value for property `autoResizable`
       */
      bAutoResizable?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getDefaultFilterOperator defaultFilterOperator}.
     *
     * If this property is set, the default filter operator of the column is overridden. By default `Contains`
     * is used for string and `EQ` for other types. A valid `sap.ui.model.FilterOperator` needs to be passed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDefaultFilterOperator(
      /**
       * New value for property `defaultFilterOperator`
       */
      sDefaultFilterOperator?: string
    ): this;
    /**
     * Sets a new value for property {@link #getFiltered filtered}.
     *
     * Indicates if the column is filtered. This property only controls if a filter indicator is displayed in
     * the column header - it does not trigger the filter function. The column can be filtered using {@link
     * sap.ui.table.Table#filter}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFiltered(
      /**
       * New value for property `filtered`
       */
      bFiltered?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getFilterOperator filterOperator}.
     *
     * Filter operator to use when filtering this column.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFilterOperator(
      /**
       * New value for property `filterOperator`
       */
      sFilterOperator?: string
    ): this;
    /**
     * Sets a new value for property {@link #getFilterProperty filterProperty}.
     *
     * Specifies the binding property on which the column shall be filtered. Since the column template may have
     * composite bindings, it's not possible to figure out on which binding property the filter shall be applied.
     * Therefore the binding property for filtering must be specified. For example, if the first name and last
     * name are displayed in the same column, only one of the two can be defined as `filterProperty`.
     *
     * A column menu entry for filtering can only be generated if the `filterProperty` is set. The default menu
     * entry is a text input field.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFilterProperty(
      /**
       * New value for property `filterProperty`
       */
      sFilterProperty?: string
    ): this;
    /**
     * The filter type can be the class name of a type, an expression similar to the binding syntax, or a function.
     * A function receives the entered filter value as a parameter and should return the appropriate value for
     * the filter expression.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFilterType(
      /**
       * The filter type
       */
      vType: any
    ): this;
    /**
     * Sets a new value for property {@link #getFilterValue filterValue}.
     *
     * Specifies the value of the filter as string (will be converted into the proper data type). It is possible
     * to provide a filterOperator as string, as shown here:
     * ```javascript
     *
     * > 50
     * < 100
     * >= 150
     * <= 200
     * = 250
     * != 300
     * something    ends with
     * something*    starts with
     * something*   contains
     * some..thing   between
     * 50..100       between
     * ```
     *
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * @deprecated (since 1.44) - this property has no effect. Use the property `minWidth` in combination with
     * the property `width="auto"` instead.
     *
     * Sets a new value for property {@link #getFlexible flexible}.
     *
     * If the table is wider than the sum of widths of the visible columns, the columns will be resized proportionally
     * to their widths that were set originally. If set to false, the column will be displayed in the original
     * width. If all columns are set to not be flexible, an extra "dummy" column will be created at the end
     * of the table.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFlexible(
      /**
       * New value for property `flexible`
       */
      bFlexible?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getGrouped grouped}.
     *
     * Indicates if the column is grouped.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setGrouped(
      /**
       * New value for property `grouped`
       */
      bGrouped?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getHAlign hAlign}.
     *
     * Horizontal alignment of the column content. Controls with a text align do not inherit the horizontal
     * alignment. You have to set the text align directly on the template.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Begin`.
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
     * @SINCE 1.110
     *
     * Sets the associated {@link #getHeaderMenu headerMenu}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderMenu(
      /**
       * ID of an element which becomes the new target of this headerMenu association; alternatively, an element
       * instance may be given
       */
      oHeaderMenu: ID | IColumnHeaderMenu
    ): this;
    /**
     * Sets a new value for property {@link #getHeaderSpan headerSpan}.
     *
     * If this property is set, a span is applied for the header. When moving columns, all columns which are
     * part of the header will be moved. The `headerSpan` can be either an integer or an array of integers (if
     * you use the multi header feature of the table). If you only specify an integer, this span is applied
     * for all header rows, with multiple integers you can specify a separate span for each header row. **Note:**
     * Only columns with a span equal to 1 can have a column menu. When setting a column to fixed, all columns
     * which are part of the header with the greatest span will be set to fixed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderSpan(
      /**
       * New value for property `headerSpan`
       */
      oHeaderSpan?: any
    ): this;
    /**
     * Sets the aggregated {@link #getLabel label}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLabel(
      /**
       * The label to set
       */
      vLabel: Control | string
    ): this;
    /**
     * Sets the aggregated {@link #getMenu menu}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMenu(
      /**
       * The menu to set
       */
      oMenu: Menu
    ): this;
    /**
     * @SINCE 1.44.1
     *
     * Sets a new value for property {@link #getMinWidth minWidth}.
     *
     * Defines the minimum width of a column in pixels. This property only has an effect if the given column
     * width is flexible, for example with width `auto`. This property only influences the automatic behavior.
     * If a user adjusts the column width manually, the column width can become smaller. Minimal column width
     * is device-dependent, for example on desktop devices the column will not be smaller than 48px.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMinWidth(
      /**
       * New value for property `minWidth`
       */
      iMinWidth?: int
    ): this;
    /**
     * @SINCE 1.11.1
     *
     * Sets a new value for property {@link #getName name}.
     *
     * The name of the column which is used for the text representation of this column, for example, in menus.
     * If not set, the text from the multiLabels aggregation or the label aggregation (in that order) is used
     * as a fallback option.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setName(
      /**
       * New value for property `name`
       */
      sName?: string
    ): this;
    /**
     * Sets a new value for property {@link #getResizable resizable}.
     *
     * If set to true, the column can be resized either using the resize bar (by mouse) or using the keyboard
     * (SHIFT + Left/Right Arrow keys)
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setResizable(
      /**
       * New value for property `resizable`
       */
      bResizable?: boolean
    ): this;
    /**
     * @SINCE 1.13.0
     *
     * Sets a new value for property {@link #getShowFilterMenuEntry showFilterMenuEntry}.
     *
     * Defines if the filter menu entry is displayed
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowFilterMenuEntry(
      /**
       * New value for property `showFilterMenuEntry`
       */
      bShowFilterMenuEntry?: boolean
    ): this;
    /**
     * @SINCE 1.13.0
     *
     * Sets a new value for property {@link #getShowSortMenuEntry showSortMenuEntry}.
     *
     * Defines if the sort menu entries are displayed
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowSortMenuEntry(
      /**
       * New value for property `showSortMenuEntry`
       */
      bShowSortMenuEntry?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSorted sorted}.
     *
     * Indicates if the column is sorted. This property only controls if a sort indicator is displayed in the
     * column header - it does not trigger the sort function. The column can be sorted using {@link sap.ui.table.Table#sort}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSorted(
      /**
       * New value for property `sorted`
       */
      bSorted?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSortOrder sortOrder}.
     *
     * This property indicates the sort direction (Ascending or Descending). The corresponding icon will be
     * rendered if the property `sorted` is `true`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Ascending`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSortOrder(
      /**
       * New value for property `sortOrder`
       */
      sSortOrder?: SortOrder | keyof typeof SortOrder
    ): this;
    /**
     * Sets a new value for property {@link #getSortProperty sortProperty}.
     *
     * Specifies the binding property on which the column will sort. Since the column template may have composite
     * bindings, it's not possible to figure out on which binding property the sort shall be applied. Therefore
     * the binding property for sorting must be specified. For example, if the first name and last name are
     * displayed in the same column, only one of the two can be defined as `sortProperty`.
     *
     * A column menu entry for sorting can only be generated if the `sortProperty` is set.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSortProperty(
      /**
       * New value for property `sortProperty`
       */
      sSortProperty?: string
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
      vTemplate: Control | string
    ): this;
    /**
     * Sets a new value for property {@link #getVisible visible}.
     *
     * Invisible controls are not rendered.
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
     * Sets a new value for property {@link #getWidth width}.
     *
     * Width of the column in CSS units. Default value is `auto`, see
     * Minimal column width is device-dependent, for example on desktop devices the column will not be smaller
     * than 48px. This property can be changed by the user or by the application configuration/personalization.
     * If a user adjusts the column width manually, the resulting value is always set in pixels. In addition,
     * other columns with width `auto` get a fixed minimum width and do not shrink after the resizing.
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
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Returns whether the column should be rendered.
     *
     * @returns Returns `true`, if the column should be rendered
     */
    shouldRender(): boolean;
    /**
     * @deprecated (since 1.5.1) - Please use the function "sap.ui.Table.prototype.sort".
     *
     * Sorts the current column ascending or descending.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    sort(
      /**
       * Sort order of the column (if undefined the default will be ascending)
       */
      bDescending: boolean
    ): this;
    /**
     * @deprecated (since 1.5.1) - Please use the function "sap.ui.Table.prototype.sort".
     *
     * Toggles the sort order of the column.
     */
    toggleSort(): void;
  }

  export interface $ColumnSettings extends $ElementSettings {
    /**
     * Width of the column in CSS units. Default value is `auto`, see
     * Minimal column width is device-dependent, for example on desktop devices the column will not be smaller
     * than 48px. This property can be changed by the user or by the application configuration/personalization.
     * If a user adjusts the column width manually, the resulting value is always set in pixels. In addition,
     * other columns with width `auto` get a fixed minimum width and do not shrink after the resizing.
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.44.1
     *
     * Defines the minimum width of a column in pixels. This property only has an effect if the given column
     * width is flexible, for example with width `auto`. This property only influences the automatic behavior.
     * If a user adjusts the column width manually, the column width can become smaller. Minimal column width
     * is device-dependent, for example on desktop devices the column will not be smaller than 48px.
     */
    minWidth?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * @deprecated (since 1.44) - this property has no effect. Use the property `minWidth` in combination with
     * the property `width="auto"` instead.
     *
     * If the table is wider than the sum of widths of the visible columns, the columns will be resized proportionally
     * to their widths that were set originally. If set to false, the column will be displayed in the original
     * width. If all columns are set to not be flexible, an extra "dummy" column will be created at the end
     * of the table.
     */
    flexible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If set to true, the column can be resized either using the resize bar (by mouse) or using the keyboard
     * (SHIFT + Left/Right Arrow keys)
     */
    resizable?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Horizontal alignment of the column content. Controls with a text align do not inherit the horizontal
     * alignment. You have to set the text align directly on the template.
     */
    hAlign?:
      | (HorizontalAlign | keyof typeof HorizontalAlign)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Indicates if the column is sorted. This property only controls if a sort indicator is displayed in the
     * column header - it does not trigger the sort function. The column can be sorted using {@link sap.ui.table.Table#sort}.
     */
    sorted?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * This property indicates the sort direction (Ascending or Descending). The corresponding icon will be
     * rendered if the property `sorted` is `true`
     */
    sortOrder?:
      | (SortOrder | keyof typeof SortOrder)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Specifies the binding property on which the column will sort. Since the column template may have composite
     * bindings, it's not possible to figure out on which binding property the sort shall be applied. Therefore
     * the binding property for sorting must be specified. For example, if the first name and last name are
     * displayed in the same column, only one of the two can be defined as `sortProperty`.
     *
     * A column menu entry for sorting can only be generated if the `sortProperty` is set.
     */
    sortProperty?: string | PropertyBindingInfo;

    /**
     * Indicates if the column is filtered. This property only controls if a filter indicator is displayed in
     * the column header - it does not trigger the filter function. The column can be filtered using {@link
     * sap.ui.table.Table#filter}.
     */
    filtered?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies the binding property on which the column shall be filtered. Since the column template may have
     * composite bindings, it's not possible to figure out on which binding property the filter shall be applied.
     * Therefore the binding property for filtering must be specified. For example, if the first name and last
     * name are displayed in the same column, only one of the two can be defined as `filterProperty`.
     *
     * A column menu entry for filtering can only be generated if the `filterProperty` is set. The default menu
     * entry is a text input field.
     */
    filterProperty?: string | PropertyBindingInfo;

    /**
     * Specifies the value of the filter as string (will be converted into the proper data type). It is possible
     * to provide a filterOperator as string, as shown here:
     * ```javascript
     *
     * > 50
     * < 100
     * >= 150
     * <= 200
     * = 250
     * != 300
     * *something    ends with
     * something*    starts with
     * *something*   contains
     * some..thing   between
     * 50..100       between
     * ```
     */
    filterValue?: string | PropertyBindingInfo;

    /**
     * Filter operator to use when filtering this column.
     */
    filterOperator?: string | PropertyBindingInfo;

    /**
     * If this property is set, the default filter operator of the column is overridden. By default `Contains`
     * is used for string and `EQ` for other types. A valid `sap.ui.model.FilterOperator` needs to be passed.
     */
    defaultFilterOperator?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.9.2
     *
     * Type of filter. It is used to transform the search term into the specified type and should be the same
     * as defined in the binding for the column template. Default value is `sap.ui.model.type.String`. It can
     * be set to the class name of the type, e.g.: `sap.ui.model.type.Date`, or an expression similar to the
     * binding syntax, e.g.: `"\{type: 'sap.ui.model.type.Date', formatOptions: \{UTC: true\}, constraints:
     * \{\} \}"`. Here the escaping is mandatory to avoid handling by the binding parser. As an alternative,
     * a function can be passed that takes over the conversion. This cannot be done in the XMLView, use {@link
     * #setFilterType} instead.
     */
    filterType?: any | PropertyBindingInfo | `{${string}}`;

    /**
     * Indicates if the column is grouped.
     */
    grouped?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Invisible controls are not rendered.
     */
    visible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.11.1
     *
     * The name of the column which is used for the text representation of this column, for example, in menus.
     * If not set, the text from the multiLabels aggregation or the label aggregation (in that order) is used
     * as a fallback option.
     */
    name?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.13.0
     *
     * Defines if the filter menu entry is displayed
     */
    showFilterMenuEntry?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.13.0
     *
     * Defines if the sort menu entries are displayed
     */
    showSortMenuEntry?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If this property is set, a span is applied for the header. When moving columns, all columns which are
     * part of the header will be moved. The `headerSpan` can be either an integer or an array of integers (if
     * you use the multi header feature of the table). If you only specify an integer, this span is applied
     * for all header rows, with multiple integers you can specify a separate span for each header row. **Note:**
     * Only columns with a span equal to 1 can have a column menu. When setting a column to fixed, all columns
     * which are part of the header with the greatest span will be set to fixed.
     */
    headerSpan?: any | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.21.1
     *
     * Enables auto-resizing of the column on double clicking the resize bar. The width is determined on the
     * widest currently displayed content. It does not consider rows which are currently not scrolled into view.
     * Currently only implemented to work with the following controls: `sap.m.Text, sap.m.Label, sap.m.Link,
     * sap.m.Input, sap.ui.commons.TextView, sap.ui.commons.Label, sap.ui.commons.Link and sap.ui.commons.TextField,
     * sap.ui.commons.Checkbox, sap.m.CheckBox`
     */
    autoResizable?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Label of the column which is displayed in the column header. This aggregation is for the standard behavior,
     * where you only want to display one single row header. If a string is supplied, a default label control
     * will be created. Which control this is depends on the loaded libraries.
     */
    label?: string | Control | PropertyBindingInfo;

    /**
     * @SINCE 1.13.1
     *
     * Labels of the column which are displayed in the column header. Define a control for each header row in
     * the table. Use this aggregation if you want to use multiple headers per column.
     */
    multiLabels?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Template (cell renderer) of this column. A template is decoupled from the column. Each time the template's
     * properties or aggregations have been changed, the template has to be applied again via `setTemplate`
     * for the changes to take effect. If a string is defined, a default text control will be created with its
     * text property bound to the value of the string. The default template depends on the libraries loaded.
     * If there is no template, the column will not be rendered in the table. The set of supported controls
     * is limited. See section "{@link topic:148892ff9aea4a18b912829791e38f3e Tables: Which One Should I Choose?}"
     * in the documentation for more details. While it is technically possible to also use other controls, doing
     * so might lead to issues with regards to scrolling, alignment, condensed mode, screen reader support,
     * and keyboard support.
     */
    template?: string | Control | PropertyBindingInfo;

    /**
     * The menu used by the column. By default the {@link sap.ui.table.ColumnMenu} is used.
     *
     * **Note:** Applications must not use or change the default `sap.ui.table.ColumnMenu` of a column in any
     * way or create own instances of `sap.ui.table.ColumnMenu`. To add a custom menu to a column, use the aggregation
     * `menu` with a new instance of `sap.ui.unified.Menu`.
     */
    menu?: Menu;

    /**
     * @SINCE 1.110
     *
     * The menu that can be opened by the header element of this column.
     */
    headerMenu?: IColumnHeaderMenu | string;

    /**
     * @SINCE 1.33.0
     *
     * Fires before the column menu is opened.
     */
    columnMenuOpen?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/table/ColumnMenu" {
  import { default as Menu, $MenuSettings } from "sap/ui/unified/Menu";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * The column menu provides all common actions that can be performed on a column.
   */
  export default class ColumnMenu extends Menu {
    /**
     * Constructor for a new ColumnMenu.
     *
     * **Note:** Applications must not use or change the default `sap.ui.table.ColumnMenu` of a column in any
     * way or create own instances of `sap.ui.table.ColumnMenu`. To add a custom menu to a column, use the aggregation
     * `menu` with a new instance of `sap.ui.unified.Menu`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.unified.Menu#constructor
     * sap.ui.unified.Menu} can be used.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $ColumnMenuSettings
    );
    /**
     * Constructor for a new ColumnMenu.
     *
     * **Note:** Applications must not use or change the default `sap.ui.table.ColumnMenu` of a column in any
     * way or create own instances of `sap.ui.table.ColumnMenu`. To add a custom menu to a column, use the aggregation
     * `menu` with a new instance of `sap.ui.unified.Menu`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.unified.Menu#constructor
     * sap.ui.unified.Menu} can be used.
     */
    constructor(
      /**
       * id for the new control, generated automatically if no id is given
       */
      sId?: string,
      /**
       * initial settings for the new control
       */
      mSettings?: $ColumnMenuSettings
    );

    /**
     * Creates a new subclass of class sap.ui.table.ColumnMenu with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.Menu.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ColumnMenu>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.table.ColumnMenu.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $ColumnMenuSettings extends $MenuSettings {}
}

declare module "sap/ui/table/plugins/MultiSelectionPlugin" {
  import {
    default as SelectionPlugin,
    $SelectionPluginSettings,
  } from "sap/ui/table/plugins/SelectionPlugin";

  import Event from "sap/ui/base/Event";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { SelectionMode } from "sap/ui/table/library";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.64
   *
   * Implements a plugin to enable a special multi-selection behavior:
   * 	 - No Select All checkbox, select all can only be done via range selection
   * 	 - Dedicated Deselect All button to clear the selection
   * 	 - The number of indices which can be selected in a range is defined by the `limit` property. If the
   * 			user tries to select more indices, the selection is automatically limited, and the table scrolls to the
   * 			last selected index.
   * 	 - The plugin makes sure that the corresponding binding contexts up to the given limit are available,
   * 			by requesting them from the binding.
   * 	 - Multiple consecutive selections are possible
   *
   * This plugin is intended for server-side models and multi-selection mode. Range selections, including
   * Select All, only work properly if the count is known. Make sure the model/binding is configured to request
   * the count from the service. For ease of use, client-side models and single selection are also supported.
   */
  export default class MultiSelectionPlugin extends SelectionPlugin {
    /**
     * Constructs an instance of sap.ui.table.plugins.MultiSelectionPlugin
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor();

    /**
     * Creates a new subclass of class sap.ui.table.plugins.MultiSelectionPlugin with name `sClassName` and
     * enriches it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.table.plugins.SelectionPlugin.extend}.
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
      oClassInfo?: sap.ClassInfo<T, MultiSelectionPlugin>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.table.plugins.MultiSelectionPlugin.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds the given selection interval to the selection and requests the corresponding binding contexts. In
     * single-selection mode it requests the context and sets the selected index to `iIndexTo`.
     *
     * If the number of indices in the range is greater than the value of the `limit` property, only n=limit
     * indices, starting from `iIndexFrom`, are selected. The table is scrolled to display the index last selected.
     *
     * @returns A Promise that resolves after the selection has been completed or is rejected with an error
     */
    addSelectionInterval(
      /**
       * Index from which the selection starts
       */
      iIndexFrom: int,
      /**
       * Index up to which to select
       */
      iIndexTo: int,
      /**
       * If the function call triggers a {@link #event:selectionChange selectionChange} event, this object is
       * transferred to the event in the `customPayload` parameter
       */
      oEventPayload?: object
    ): Promise<any>;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this
     * `sap.ui.table.plugins.MultiSelectionPlugin`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.plugins.MultiSelectionPlugin` itself.
     *
     * This event is fired when the selection is changed.
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
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.plugins.MultiSelectionPlugin`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this
     * `sap.ui.table.plugins.MultiSelectionPlugin`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.plugins.MultiSelectionPlugin` itself.
     *
     * This event is fired when the selection is changed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.plugins.MultiSelectionPlugin`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Removes the complete selection.
     */
    clearSelection(
      /**
       * If the function call triggers a {@link #event:selectionChange selectionChange} event, this object is
       * transferred to the event in the `customPayload` parameter
       */
      oEventPayload?: object
    ): void;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:selectionChange selectionChange} event of
     * this `sap.ui.table.plugins.MultiSelectionPlugin`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
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
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:selectionChange selectionChange} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSelectionChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Array of indices whose selection has been changed (either selected or deselected)
         */
        indices?: int[];
        /**
         * Indicates whether the selection limit has been reached
         */
        limitReached?: boolean;
        /**
         * Contains the data passed to the function that triggered the event
         */
        customPayload?: object;
      }
    ): this;
    /**
     * @SINCE 1.71
     *
     * Gets current value of property {@link #getEnableNotification enableNotification}.
     *
     * Enables notifications that are displayed once a selection has been limited.
     *
     * Default value is `false`.
     *
     * @returns Value of property `enableNotification`
     */
    getEnableNotification(): boolean;
    /**
     * Gets current value of property {@link #getLimit limit}.
     *
     * Number of indices which can be selected in a range. Accepts positive integer values. If set to 0, the
     * limit is disabled, and the Select All checkbox appears instead of the Deselect All button.
     *
     * **Note:** To avoid severe performance problems, the limit should only be set to 0 in the following cases:
     *
     * 	 - With client-side models
     * 	 - With server-side models if they are used in client mode
     * 	 - If the entity set is small
     *
     * In other cases, we recommend to set the limit to at least double the value of the {@link sap.ui.table.Table#getThreshold
     * threshold} property of the related `sap.ui.table.Table` control.
     *
     * Default value is `200`.
     *
     * @returns Value of property `limit`
     */
    getLimit(): int;
    /**
     * Zero-based indices of selected indices, wrapped in an array. An empty array means nothing has been selected.
     *
     * @returns An array containing all selected indices
     */
    getSelectedIndices(): int[];
    /**
     * Gets current value of property {@link #getSelectionMode selectionMode}.
     *
     * Selection mode of the plugin. This property controls whether single or multiple rows can be selected.
     * It also influences the visual appearance. When the selection mode is changed, the current selection is
     * removed.
     *
     * Default value is `MultiToggle`.
     *
     * @returns Value of property `selectionMode`
     */
    getSelectionMode(): SelectionMode | keyof typeof SelectionMode;
    /**
     * Gets current value of property {@link #getShowHeaderSelector showHeaderSelector}.
     *
     * Show header selector
     *
     * Default value is `true`.
     *
     * @returns Value of property `showHeaderSelector`
     */
    getShowHeaderSelector(): boolean;
    /**
     * Returns the information whether the given index is selected.
     *
     * @returns `true` if the index is selected
     */
    isIndexSelected(
      /**
       * The index for which the selection state is retrieved
       */
      iIndex: int
    ): boolean;
    /**
     * Removes the given selection interval from the selection. In case of single selection, only `iIndexTo`
     * is removed from the selection.
     */
    removeSelectionInterval(
      /**
       * Index from which the deselection starts
       */
      iIndexFrom: int,
      /**
       * Index up to which to deselect
       */
      iIndexTo: int,
      /**
       * If the function call triggers a {@link #event:selectionChange selectionChange} event, this object is
       * transferred to the event in the `customPayload` parameter
       */
      oEventPayload?: object
    ): void;
    /**
     * Requests the binding contexts and adds all indices to the selection if the limit is disabled or the binding
     * length is smaller then the limit.
     *
     * @returns A Promise that resolves after the selection has been completed or is rejected with an error
     */
    selectAll(
      /**
       * If the function call triggers a {@link #event:selectionChange selectionChange} event, this object is
       * transferred to the event in the `customPayload` parameter
       */
      oEventPayload?: object
    ): Promise<any>;
    /**
     * @SINCE 1.71
     *
     * Sets a new value for property {@link #getEnableNotification enableNotification}.
     *
     * Enables notifications that are displayed once a selection has been limited.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableNotification(
      /**
       * New value for property `enableNotification`
       */
      bEnableNotification?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getLimit limit}.
     *
     * Number of indices which can be selected in a range. Accepts positive integer values. If set to 0, the
     * limit is disabled, and the Select All checkbox appears instead of the Deselect All button.
     *
     * **Note:** To avoid severe performance problems, the limit should only be set to 0 in the following cases:
     *
     * 	 - With client-side models
     * 	 - With server-side models if they are used in client mode
     * 	 - If the entity set is small
     *
     * In other cases, we recommend to set the limit to at least double the value of the {@link sap.ui.table.Table#getThreshold
     * threshold} property of the related `sap.ui.table.Table` control.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `200`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLimit(
      /**
       * New value for property `limit`
       */
      iLimit?: int
    ): this;
    /**
     * Requests the context and sets the selected index to `iIndex`.
     *
     * @returns A Promise that resolves after the selection has been completed or is rejected with an error
     */
    setSelectedIndex(
      /**
       * The index to select
       */
      iIndex: int,
      /**
       * If the function call triggers a {@link #event:selectionChange selectionChange} event, this object is
       * transferred to the event in the `customPayload` parameter
       */
      oEventPayload?: object
    ): Promise<any>;
    /**
     * Sets the given selection interval as the selection and requests the corresponding binding contexts. In
     * single-selection mode it requests the context and sets the selected index to `iIndexTo`.
     *
     * If the number of indices in the range is greater than the value of the `limit` property, only n=limit
     * indices, starting from `iIndexFrom`, are selected. The table is scrolled to display the index last selected.
     *
     * @returns A Promise that resolves after the selection has been completed or is rejected with an error
     */
    setSelectionInterval(
      /**
       * Index from which the selection starts
       */
      iIndexFrom: int,
      /**
       * Index up to which to select
       */
      iIndexTo: int,
      /**
       * If the function call triggers a {@link #event:selectionChange selectionChange} event, this object is
       * transferred to the event in the `customPayload` parameter
       */
      oEventPayload?: object
    ): Promise<any>;
    /**
     * Sets a new value for property {@link #getSelectionMode selectionMode}.
     *
     * Selection mode of the plugin. This property controls whether single or multiple rows can be selected.
     * It also influences the visual appearance. When the selection mode is changed, the current selection is
     * removed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `MultiToggle`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelectionMode(
      /**
       * New value for property `selectionMode`
       */
      sSelectionMode?: SelectionMode | keyof typeof SelectionMode
    ): this;
    /**
     * Sets a new value for property {@link #getShowHeaderSelector showHeaderSelector}.
     *
     * Show header selector
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

  export interface $MultiSelectionPluginSettings
    extends $SelectionPluginSettings {
    /**
     * Number of indices which can be selected in a range. Accepts positive integer values. If set to 0, the
     * limit is disabled, and the Select All checkbox appears instead of the Deselect All button.
     *
     * **Note:** To avoid severe performance problems, the limit should only be set to 0 in the following cases:
     *
     * 	 - With client-side models
     * 	 - With server-side models if they are used in client mode
     * 	 - If the entity set is small
     *
     * In other cases, we recommend to set the limit to at least double the value of the {@link sap.ui.table.Table#getThreshold
     * threshold} property of the related `sap.ui.table.Table` control.
     */
    limit?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.71
     *
     * Enables notifications that are displayed once a selection has been limited.
     */
    enableNotification?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Show header selector
     */
    showHeaderSelector?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Selection mode of the plugin. This property controls whether single or multiple rows can be selected.
     * It also influences the visual appearance. When the selection mode is changed, the current selection is
     * removed.
     */
    selectionMode?:
      | (SelectionMode | keyof typeof SelectionMode)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * This event is fired when the selection is changed.
     */
    selectionChange?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/table/plugins/SelectionPlugin" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import Event from "sap/ui/base/Event";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.64
   * @EXPERIMENTAL (since 1.64)
   *
   * Implements the selection methods for a table.
   */
  export default class SelectionPlugin extends UI5Element {
    /**
     * Constructs an instance of sap.ui.table.plugins.SelectionPlugin
     *
     * The following restrictions apply:
     * 	 - Do not create subclasses of the SelectionPlugin. The API is subject to change.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor();

    /**
     * Creates a new subclass of class sap.ui.table.plugins.SelectionPlugin with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, SelectionPlugin>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.table.plugins.SelectionPlugin.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this
     * `sap.ui.table.plugins.SelectionPlugin`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.plugins.SelectionPlugin` itself.
     *
     * This event is fired when the selection is changed.
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
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.plugins.SelectionPlugin`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this
     * `sap.ui.table.plugins.SelectionPlugin`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.plugins.SelectionPlugin` itself.
     *
     * This event is fired when the selection is changed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.plugins.SelectionPlugin`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:selectionChange selectionChange} event of
     * this `sap.ui.table.plugins.SelectionPlugin`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
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
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:selectionChange selectionChange} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSelectionChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
  }

  export interface $SelectionPluginSettings extends $ElementSettings {
    /**
     * This event is fired when the selection is changed.
     */
    selectionChange?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/table/Row" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import Control from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * The row.
   */
  export default class Row extends UI5Element {
    /**
     * Constructor for a new Row.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $RowSettings
    );
    /**
     * Constructor for a new Row.
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
      mSettings?: $RowSettings
    );

    /**
     * Creates a new subclass of class sap.ui.table.Row with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Row>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.table.Row.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some cell to the aggregation {@link #getCells cells}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addCell(
      /**
       * The cell to add; if empty, nothing is inserted
       */
      oCell: Control
    ): this;
    /**
     * Destroys all the cells in the aggregation {@link #getCells cells}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyCells(): this;
    /**
     * Gets content of aggregation {@link #getCells cells}.
     *
     * The actual cells are a table-internal construct. The controls in this aggregation are the content of
     * the cells. This aggregation is managed by the table and must not be manipulated. Only read access is
     * allowed.
     */
    getCells(): Control[];
    /**
     * Returns the index of the row in the table or -1 if not added to a table. This function considers the
     * scroll position of the table and also takes fixed rows and fixed bottom rows into account.
     *
     * @returns index of the row (considers scroll position and fixed rows)
     */
    getIndex(): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getCells cells}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfCell(
      /**
       * The cell whose index is looked for
       */
      oCell: Control
    ): int;
    /**
     * Inserts a cell into the aggregation {@link #getCells cells}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertCell(
      /**
       * The cell to insert; if empty, nothing is inserted
       */
      oCell: Control,
      /**
       * The `0`-based index the cell should be inserted at; for a negative value of `iIndex`, the cell is inserted
       * at position 0; for a value greater than the current size of the aggregation, the cell is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getCells cells}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllCells(): Control[];
    /**
     * Removes a cell from the aggregation {@link #getCells cells}.
     *
     * @returns The removed cell or `null`
     */
    removeCell(
      /**
       * The cell to remove or its index or id
       */
      vCell: int | string | Control
    ): Control | null;
  }

  export interface $RowSettings extends $ElementSettings {
    /**
     * The actual cells are a table-internal construct. The controls in this aggregation are the content of
     * the cells. This aggregation is managed by the table and must not be manipulated. Only read access is
     * allowed.
     */
    cells?: Control[] | Control | AggregationBindingInfo | `{${string}}`;
  }
}

declare module "sap/ui/table/RowAction" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import RowActionItem from "sap/ui/table/RowActionItem";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.45
   *
   * The `RowAction` control allows to display multiple action items which can be selected by the user. If
   * more action items are available as the available space allows to display an overflow mechanism is provided.
   * This control must only be used in the context of the `sap.ui.table.Table` control to define row actions.
   */
  export default class RowAction extends Control {
    /**
     * Constructor for a new RowAction.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $RowActionSettings
    );
    /**
     * Constructor for a new RowAction.
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
      mSettings?: $RowActionSettings
    );

    /**
     * Creates a new subclass of class sap.ui.table.RowAction with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, RowAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.table.RowAction.
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
      oItem: RowActionItem
    ): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * The action items which should be displayed.
     */
    getItems(): RowActionItem[];
    /**
     * Gets current value of property {@link #getVisible visible}.
     *
     * Whether the control should be visible on the screen. If set to `false`, the control is hidden.
     *
     * Default value is `true`.
     *
     * @returns Value of property `visible`
     */
    getVisible(): boolean;
    /**
     * Checks for the provided `sap.ui.table.RowActionItem` in the aggregation {@link #getItems items}. and
     * returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: RowActionItem
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
      oItem: RowActionItem,
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
    removeAllItems(): RowActionItem[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     *
     * @returns The removed item or `null`
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | RowActionItem
    ): RowActionItem | null;
    /**
     * Sets a new value for property {@link #getVisible visible}.
     *
     * Whether the control should be visible on the screen. If set to `false`, the control is hidden.
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

  export interface $RowActionSettings extends $ControlSettings {
    /**
     * Whether the control should be visible on the screen. If set to `false`, the control is hidden.
     */
    visible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The action items which should be displayed.
     */
    items?:
      | RowActionItem[]
      | RowActionItem
      | AggregationBindingInfo
      | `{${string}}`;
  }
}

declare module "sap/ui/table/RowActionItem" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import Event from "sap/ui/base/Event";

  import Row from "sap/ui/table/Row";

  import { URI } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { RowActionType } from "sap/ui/table/library";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.45
   *
   * An action items to be displayed in a `RowAction` control. This element must only be used in the context
   * of the `sap.ui.table.Table` control to define row actions.
   */
  export default class RowActionItem extends UI5Element {
    /**
     * Constructor for a new RowActionItem.
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
     * Constructor for a new RowActionItem.
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
      mSettings?: $RowActionItemSettings
    );

    /**
     * Creates a new subclass of class sap.ui.table.RowActionItem with name `sClassName` and enriches it with
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
      oClassInfo?: sap.ClassInfo<T, RowActionItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.table.RowActionItem.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.table.RowActionItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.RowActionItem` itself.
     *
     * The `press` is fired when the user triggers the corresponding action.
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
       * Context object to call the event handler with. Defaults to this `sap.ui.table.RowActionItem` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.table.RowActionItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.RowActionItem` itself.
     *
     * The `press` is fired when the user triggers the corresponding action.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.RowActionItem` itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.table.RowActionItem`.
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
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:press press} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    firePress(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The item which was pressed.
         */
        item?: RowActionItem;
        /**
         * The table row to which the pressed item belongs to.
         */
        row?: Row;
      }
    ): this;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * The icon of the item.
     *
     * @returns Value of property `icon`
     */
    getIcon(): URI;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * The text of the item. It is used as tooltip and for accessibility purposes.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `text`
     */
    getText(): string;
    /**
     * Gets current value of property {@link #getType type}.
     *
     * The type of the item. Setting the type ensures default values for the properties `icon` and `text`. If
     * an icon or text is set explicitly this setting is used.
     *
     * Default value is `Custom`.
     *
     * @returns Value of property `type`
     */
    getType(): RowActionType | keyof typeof RowActionType;
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
     * The icon of the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * Sets a new value for property {@link #getText text}.
     *
     * The text of the item. It is used as tooltip and for accessibility purposes.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
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
     * Sets a new value for property {@link #getType type}.
     *
     * The type of the item. Setting the type ensures default values for the properties `icon` and `text`. If
     * an icon or text is set explicitly this setting is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Custom`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setType(
      /**
       * New value for property `type`
       */
      sType?: RowActionType | keyof typeof RowActionType
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
     * The icon of the item.
     */
    icon?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * Whether the item should be visible on the screen.
     */
    visible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The text of the item. It is used as tooltip and for accessibility purposes.
     */
    text?: string | PropertyBindingInfo;

    /**
     * The type of the item. Setting the type ensures default values for the properties `icon` and `text`. If
     * an icon or text is set explicitly this setting is used.
     */
    type?:
      | (RowActionType | keyof typeof RowActionType)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * The `press` is fired when the user triggers the corresponding action.
     */
    press?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/table/RowSettings" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.48.0
   *
   * The `RowSettings` control allows you to configure a row. You can only use this control in the context
   * of the `sap.ui.table.Table` control to define row settings.
   */
  export default class RowSettings extends UI5Element {
    /**
     * Constructor for new RowSettings.
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
       * Initial settings for the new control
       */
      mSettings?: $RowSettingsSettings
    );

    /**
     * Creates a new subclass of class sap.ui.table.RowSettings with name `sClassName` and enriches it with
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
     * Returns a metadata object for class sap.ui.table.RowSettings.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.48.0
     *
     * Gets current value of property {@link #getHighlight highlight}.
     *
     * The highlight state of the rows.
     *
     * If the highlight is set to {@link sap.ui.core.MessageType sap.ui.core.MessageType.None} (default), no
     * highlights are visible. Valid values for the `highlight` property are values of the enumerations {@link
     * sap.ui.core.MessageType} or {@link sap.ui.core.IndicationColor}.
     *
     * Accessibility support is provided through the associated {@link sap.ui.table.RowSettings#setHighlightText
     * highlightText} property. If the `highlight` property is set to a value of {@link sap.ui.core.MessageType},
     * the `highlightText` property does not need to be set because a default text is used. However, the default
     * text can be overridden by setting the `highlightText` property. In all other cases the `highlightText`
     * property must be set.
     *
     * Default value is `"None"`.
     *
     * @returns Value of property `highlight`
     */
    getHighlight(): string;
    /**
     * @SINCE 1.62
     *
     * Gets current value of property {@link #getHighlightText highlightText}.
     *
     * Defines the semantics of the {@link sap.ui.table.RowSettings#setHighlight highlight} property for accessibility
     * purposes. It is only used as an invisible text for screen reader support and does not add a tooltip to
     * the highlight.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `highlightText`
     */
    getHighlightText(): string;
    /**
     * @SINCE 1.72
     *
     * Gets current value of property {@link #getNavigated navigated}.
     *
     * The navigated state of a row.
     *
     * If set to `true`, a navigation indicator is displayed at the end of the row. **Note:** This property
     * must be set for **one** row only.
     *
     * Default value is `false`.
     *
     * @returns Value of property `navigated`
     */
    getNavigated(): boolean;
    /**
     * @SINCE 1.48.0
     *
     * Sets a new value for property {@link #getHighlight highlight}.
     *
     * The highlight state of the rows.
     *
     * If the highlight is set to {@link sap.ui.core.MessageType sap.ui.core.MessageType.None} (default), no
     * highlights are visible. Valid values for the `highlight` property are values of the enumerations {@link
     * sap.ui.core.MessageType} or {@link sap.ui.core.IndicationColor}.
     *
     * Accessibility support is provided through the associated {@link sap.ui.table.RowSettings#setHighlightText
     * highlightText} property. If the `highlight` property is set to a value of {@link sap.ui.core.MessageType},
     * the `highlightText` property does not need to be set because a default text is used. However, the default
     * text can be overridden by setting the `highlightText` property. In all other cases the `highlightText`
     * property must be set.
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
     * @SINCE 1.62
     *
     * Sets a new value for property {@link #getHighlightText highlightText}.
     *
     * Defines the semantics of the {@link sap.ui.table.RowSettings#setHighlight highlight} property for accessibility
     * purposes. It is only used as an invisible text for screen reader support and does not add a tooltip to
     * the highlight.
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
     * @SINCE 1.72
     *
     * Sets a new value for property {@link #getNavigated navigated}.
     *
     * The navigated state of a row.
     *
     * If set to `true`, a navigation indicator is displayed at the end of the row. **Note:** This property
     * must be set for **one** row only.
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
     * @SINCE 1.48.0
     *
     * The highlight state of the rows.
     *
     * If the highlight is set to {@link sap.ui.core.MessageType sap.ui.core.MessageType.None} (default), no
     * highlights are visible. Valid values for the `highlight` property are values of the enumerations {@link
     * sap.ui.core.MessageType} or {@link sap.ui.core.IndicationColor}.
     *
     * Accessibility support is provided through the associated {@link sap.ui.table.RowSettings#setHighlightText
     * highlightText} property. If the `highlight` property is set to a value of {@link sap.ui.core.MessageType},
     * the `highlightText` property does not need to be set because a default text is used. However, the default
     * text can be overridden by setting the `highlightText` property. In all other cases the `highlightText`
     * property must be set.
     */
    highlight?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.62
     *
     * Defines the semantics of the {@link sap.ui.table.RowSettings#setHighlight highlight} property for accessibility
     * purposes. It is only used as an invisible text for screen reader support and does not add a tooltip to
     * the highlight.
     */
    highlightText?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.72
     *
     * The navigated state of a row.
     *
     * If set to `true`, a navigation indicator is displayed at the end of the row. **Note:** This property
     * must be set for **one** row only.
     */
    navigated?: boolean | PropertyBindingInfo | `{${string}}`;
  }
}

declare module "sap/ui/table/Table" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID, IContextMenu, CSSSize, Toolbar } from "sap/ui/core/library";

  import Column from "sap/ui/table/Column";

  import SelectionPlugin from "sap/ui/table/plugins/SelectionPlugin";

  import Row from "sap/ui/table/Row";

  import Event from "sap/ui/base/Event";

  import {
    AggregationBindingInfo,
    PropertyBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import Export from "sap/ui/core/util/Export";

  import Context from "sap/ui/model/Context";

  import {
    SortOrder,
    NavigationMode,
    SelectionBehavior,
    SelectionMode,
    VisibleRowCountMode,
  } from "sap/ui/table/library";

  import Binding from "sap/ui/model/Binding";

  import DragDropBase from "sap/ui/core/dnd/DragDropBase";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import RowAction from "sap/ui/table/RowAction";

  import RowSettings from "sap/ui/table/RowSettings";

  import TooltipBase from "sap/ui/core/TooltipBase";

  /**
   *  Provides a comprehensive set of features for displaying and dealing with vast amounts of data. The
   * Table control supports desktop PCs and tablet devices. On tablets, special consideration should be given
   * to the number of visible columns and rows due to the limited performance of some devices.   In
   * order to keep the document DOM as lean as possible, the Table control reuses its DOM elements of the
   * rows. When the user scrolls, only the row contexts are changed but the rendered controls remain the same.
   * This allows the Table control to handle huge amounts of data. Nevertheless, restrictions apply regarding
   * the number of displayed columns. Keep the number as low as possible to improve performance. Due to the
   * nature of tables, the used control for column templates also has a big influence on the performance.
   *   The Table control relies completely on data binding, and its supported feature set is tightly
   * coupled to the data model and binding being used.
   */
  export default class Table extends Control {
    /**
     * Constructor for a new Table.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:08197fa68e4f479cbe30f639cc1cd22c sap.ui.table}
     * 	{@link topic:148892ff9aea4a18b912829791e38f3e Tables: Which One Should I Choose?}
     * 	{@link fiori:/grid-table/ Grid Table}
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $TableSettings
    );
    /**
     * Constructor for a new Table.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:08197fa68e4f479cbe30f639cc1cd22c sap.ui.table}
     * 	{@link topic:148892ff9aea4a18b912829791e38f3e Tables: Which One Should I Choose?}
     * 	{@link fiori:/grid-table/ Grid Table}
     */
    constructor(
      /**
       * id for the new control, generated automatically if no id is given
       */
      sId?: string,
      /**
       * initial settings for the new control
       */
      mSettings?: $TableSettings
    );

    /**
     * Creates a new subclass of class sap.ui.table.Table with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Table>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.table.Table.
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
      vAriaLabelledBy: ID | Control
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
     * Adds some extension to the aggregation {@link #getExtension extension}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addExtension(
      /**
       * The extension to add; if empty, nothing is inserted
       */
      oExtension: Control
    ): this;
    /**
     * @SINCE 1.64
     *
     * Adds some plugin to the aggregation {@link #getPlugins plugins}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addPlugin(
      /**
       * The plugin to add; if empty, nothing is inserted
       */
      oPlugin: SelectionPlugin
    ): this;
    /**
     * Adds some row to the aggregation {@link #getRows rows}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addRow(
      /**
       * The row to add; if empty, nothing is inserted
       */
      oRow: Row
    ): this;
    /**
     * Adds the given selection interval to the selection. In case of a single selection, only `iIndexTo` is
     * added to the selection.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addSelectionInterval(
      /**
       * Index from which the selection starts
       */
      iIndexFrom: int,
      /**
       * Index up to which to select
       */
      iIndexTo: int
    ): this;
    /**
     * @SINCE 1.54
     *
     * Attaches event handler `fnFunction` to the {@link #event:beforeOpenContextMenu beforeOpenContextMenu}
     * event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * Fired when the user requests the context menu for a table cell.
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
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.54
     *
     * Attaches event handler `fnFunction` to the {@link #event:beforeOpenContextMenu beforeOpenContextMenu}
     * event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * Fired when the user requests the context menu for a table cell.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeforeOpenContextMenu(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.37.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:busyStateChanged busyStateChanged} event of
     * this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * This event gets fired when the busy state of the table changes. It should only be used by composite controls.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBusyStateChanged(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.37.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:busyStateChanged busyStateChanged} event of
     * this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * This event gets fired when the busy state of the table changes. It should only be used by composite controls.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBusyStateChanged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.21.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:cellClick cellClick} event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * fired when the user clicks a cell of the table (experimental!).
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCellClick(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.21.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:cellClick cellClick} event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * fired when the user clicks a cell of the table (experimental!).
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCellClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.21.0
     * @deprecated (since 1.54) - replaced by `beforeOpenContextMenu`.
     *
     * Attaches event handler `fnFunction` to the {@link #event:cellContextmenu cellContextmenu} event of this
     * `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * fired when the user clicks a cell of the table.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCellContextmenu(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.21.0
     * @deprecated (since 1.54) - replaced by `beforeOpenContextMenu`.
     *
     * Attaches event handler `fnFunction` to the {@link #event:cellContextmenu cellContextmenu} event of this
     * `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * fired when the user clicks a cell of the table.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCellContextmenu(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.21.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:columnFreeze columnFreeze} event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * fired when a column of the table should be freezed
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachColumnFreeze(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.21.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:columnFreeze columnFreeze} event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * fired when a column of the table should be freezed
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachColumnFreeze(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:columnMove columnMove} event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * fired when a table column is moved.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachColumnMove(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:columnMove columnMove} event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * fired when a table column is moved.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachColumnMove(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:columnResize columnResize} event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * fired when a table column is resized.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachColumnResize(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:columnResize columnResize} event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * fired when a table column is resized.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachColumnResize(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:columnSelect columnSelect} event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * fired when a column of the table has been selected
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachColumnSelect(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:columnSelect columnSelect} event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * fired when a column of the table has been selected
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachColumnSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:columnVisibility columnVisibility} event of
     * this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * fired when the visibility of a table column is changed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachColumnVisibility(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:columnVisibility columnVisibility} event of
     * this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * fired when the visibility of a table column is changed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachColumnVisibility(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.23.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:customFilter customFilter} event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * This event is triggered when the custom filter item of the column menu is pressed. The column on which
     * the event was triggered is passed as parameter.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCustomFilter(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.23.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:customFilter customFilter} event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * This event is triggered when the custom filter item of the column menu is pressed. The column on which
     * the event was triggered is passed as parameter.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCustomFilter(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:filter filter} event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * This event is fired before a filter is applied to a column, if the table is filtered via {@link sap.ui.table.Table#filter}
     * call or user interaction with the column header.
     *
     * Filters that are directly applied to the table binding will not fire this event.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFilter(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:filter filter} event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * This event is fired before a filter is applied to a column, if the table is filtered via {@link sap.ui.table.Table#filter}
     * call or user interaction with the column header.
     *
     * Filters that are directly applied to the table binding will not fire this event.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFilter(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.37.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:firstVisibleRowChanged firstVisibleRowChanged}
     * event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * This event gets fired when the first visible row is changed. It should only be used by composite controls.
     * The event even is fired when setFirstVisibleRow is called programmatically.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFirstVisibleRowChanged(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.37.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:firstVisibleRowChanged firstVisibleRowChanged}
     * event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * This event gets fired when the first visible row is changed. It should only be used by composite controls.
     * The event even is fired when setFirstVisibleRow is called programmatically.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFirstVisibleRowChanged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:group group} event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * fired when the table is grouped (experimental!).
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachGroup(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:group group} event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * fired when the table is grouped (experimental!).
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachGroup(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.60
     *
     * Attaches event handler `fnFunction` to the {@link #event:paste paste} event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * This event gets fired when the user pastes content from the clipboard to the table. Pasting can be done
     * with the standard keyboard shortcut, if the focus is inside the table.
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
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.60
     *
     * Attaches event handler `fnFunction` to the {@link #event:paste paste} event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * This event gets fired when the user pastes content from the clipboard to the table. Pasting can be done
     * with the standard keyboard shortcut, if the focus is inside the table.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPaste(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:rowSelectionChange rowSelectionChange} event
     * of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * fired when the row selection of the table has been changed (the event parameters can be used to determine
     * selection changes - to find out the selected rows you should better use the table selection API)
     *
     * **Note:** If a selection plugin is applied to the table, this event won't be fired.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRowSelectionChange(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:rowSelectionChange rowSelectionChange} event
     * of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * fired when the row selection of the table has been changed (the event parameters can be used to determine
     * selection changes - to find out the selected rows you should better use the table selection API)
     *
     * **Note:** If a selection plugin is applied to the table, this event won't be fired.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRowSelectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.86
     *
     * Attaches event handler `fnFunction` to the {@link #event:rowsUpdated rowsUpdated} event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * This event is fired after the table rows have been updated due to rendering, a model update, or a user
     * interaction, for example.
     *
     * **Note**: This event is fired often and must not be used for performance-critical tasks.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRowsUpdated(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.86
     *
     * Attaches event handler `fnFunction` to the {@link #event:rowsUpdated rowsUpdated} event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * This event is fired after the table rows have been updated due to rendering, a model update, or a user
     * interaction, for example.
     *
     * **Note**: This event is fired often and must not be used for performance-critical tasks.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRowsUpdated(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:sort sort} event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * This event is fired before a sort order is applied to a column, if the table is sorted via {@link sap.ui.table.Table#sort}
     * call or user interaction with the column header.
     *
     * Sorters that are directly applied to the table binding will not fire this event.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSort(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:sort sort} event of this `sap.ui.table.Table`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.Table` itself.
     *
     * This event is fired before a sort order is applied to a column, if the table is sorted via {@link sap.ui.table.Table#sort}
     * call or user interaction with the column header.
     *
     * Sorters that are directly applied to the table binding will not fire this event.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSort(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
       */
      oListener?: object
    ): this;
    /**
     * @EXPERIMENTAL - Experimental! Presently implemented to only work with a very limited set of controls
     * (e.g. sap.m.Text).
     *
     * Triggers automatic resizing of a column to the widest content.
     */
    autoResizeColumn(
      /**
       * The index of the column in the list of visible columns.
       */
      iColIndex: int
    ): void;
    /**
     * Binds aggregation {@link #getColumns columns} to model data.
     *
     * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
     * of the possible properties of `oBindingInfo`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    bindColumns(
      /**
       * The binding information
       */
      oBindingInfo: AggregationBindingInfo
    ): this;
    /**
     * Binds aggregation {@link #getRows rows} to model data.
     *
     * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
     * of the possible properties of `oBindingInfo`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    bindRows(
      /**
       * The binding information
       */
      oBindingInfo: AggregationBindingInfo
    ): this;
    /**
     * Removes complete selection.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    clearSelection(): this;
    /**
     * Destroys all the columns in the aggregation {@link #getColumns columns}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyColumns(): this;
    /**
     * @SINCE 1.54
     *
     * Destroys the contextMenu in the aggregation {@link #getContextMenu contextMenu}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContextMenu(): this;
    /**
     * Destroys all the extension in the aggregation {@link #getExtension extension}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyExtension(): this;
    /**
     * Destroys the footer in the aggregation {@link #getFooter footer}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFooter(): this;
    /**
     * Destroys the noData in the aggregation {@link #getNoData noData}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyNoData(): this;
    /**
     * @SINCE 1.64
     *
     * Destroys all the plugins in the aggregation {@link #getPlugins plugins}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyPlugins(): this;
    /**
     * Destroys the rowActionTemplate in the aggregation {@link #getRowActionTemplate rowActionTemplate}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyRowActionTemplate(): this;
    /**
     * Destroys all the rows in the aggregation {@link #getRows rows}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyRows(): this;
    /**
     * Destroys the rowSettingsTemplate in the aggregation {@link #getRowSettingsTemplate rowSettingsTemplate}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyRowSettingsTemplate(): this;
    /**
     * @deprecated (since 1.72) - Use, for example, a `sap.m.Title` control in the `extension` aggregation instead.
     *
     * Destroys the title in the aggregation {@link #getTitle title}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTitle(): this;
    /**
     * @deprecated (since 1.38) - This aggregation is deprecated, use the `extension` aggregation instead.
     *
     * Destroys the toolbar in the aggregation {@link #getToolbar toolbar}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyToolbar(): this;
    /**
     * @SINCE 1.54
     *
     * Detaches event handler `fnFunction` from the {@link #event:beforeOpenContextMenu beforeOpenContextMenu}
     * event of this `sap.ui.table.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachBeforeOpenContextMenu(
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
     * @SINCE 1.37.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:busyStateChanged busyStateChanged} event of
     * this `sap.ui.table.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachBusyStateChanged(
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
     * @SINCE 1.21.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:cellClick cellClick} event of this `sap.ui.table.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachCellClick(
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
     * @SINCE 1.21.0
     * @deprecated (since 1.54) - replaced by `beforeOpenContextMenu`.
     *
     * Detaches event handler `fnFunction` from the {@link #event:cellContextmenu cellContextmenu} event of
     * this `sap.ui.table.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachCellContextmenu(
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
     * @SINCE 1.21.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:columnFreeze columnFreeze} event of this `sap.ui.table.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachColumnFreeze(
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
     * Detaches event handler `fnFunction` from the {@link #event:columnMove columnMove} event of this `sap.ui.table.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachColumnMove(
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
     * Detaches event handler `fnFunction` from the {@link #event:columnResize columnResize} event of this `sap.ui.table.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachColumnResize(
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
     * Detaches event handler `fnFunction` from the {@link #event:columnSelect columnSelect} event of this `sap.ui.table.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachColumnSelect(
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
     * Detaches event handler `fnFunction` from the {@link #event:columnVisibility columnVisibility} event of
     * this `sap.ui.table.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachColumnVisibility(
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
     * @SINCE 1.23.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:customFilter customFilter} event of this `sap.ui.table.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachCustomFilter(
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
     * Detaches event handler `fnFunction` from the {@link #event:filter filter} event of this `sap.ui.table.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachFilter(
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
     * @SINCE 1.37.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:firstVisibleRowChanged firstVisibleRowChanged}
     * event of this `sap.ui.table.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachFirstVisibleRowChanged(
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
     * Detaches event handler `fnFunction` from the {@link #event:group group} event of this `sap.ui.table.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachGroup(
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
     * @SINCE 1.60
     *
     * Detaches event handler `fnFunction` from the {@link #event:paste paste} event of this `sap.ui.table.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachPaste(
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
     * Detaches event handler `fnFunction` from the {@link #event:rowSelectionChange rowSelectionChange} event
     * of this `sap.ui.table.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachRowSelectionChange(
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
     * @SINCE 1.86
     *
     * Detaches event handler `fnFunction` from the {@link #event:rowsUpdated rowsUpdated} event of this `sap.ui.table.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachRowsUpdated(
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
     * Detaches event handler `fnFunction` from the {@link #event:sort sort} event of this `sap.ui.table.Table`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSort(
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
     * @deprecated (since 1.56) - replaced by the `sap.ui.export` library.
     * @EXPERIMENTAL - Experimental because the property for the column/cell definitions (sortProperty) could
     * change in future.
     *
     * Creates a new {@link sap.ui.core.util.Export} object and fills row/column information from the table
     * if not provided. For the cell content, the column's "sortProperty" will be used (experimental!)
     *
     * **Please note: This method uses synchronous requests. Support and functioning ends with the support
     * for synchronous requests in browsers.**
     *
     * @returns Export object
     */
    exportData(
      /**
       * settings for the new Export, see {@link sap.ui.core.util.Export} `constructor`
       */
      mSettings?: object
    ): Export;
    /**
     * Filters a column by a value. If no filter value is passed, the filter value equals an empty string, and
     * the filter for this column is removed.
     */
    filter(
      /**
       * Column to be filtered
       */
      oColumn: Column,
      /**
       * Filter value as string (will be converted)
       */
      sValue?: string
    ): void;
    /**
     * @SINCE 1.54
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:beforeOpenContextMenu beforeOpenContextMenu} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireBeforeOpenContextMenu(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Row index where the context menu opens.
         */
        rowIndex?: int;
        /**
         * Column index where the context menu opens. This is the index of the column in the `columns` aggregation.
         */
        columnIndex?: int;
        /**
         * Context menu
         */
        contextMenu?: IContextMenu;
      }
    ): boolean;
    /**
     * @SINCE 1.37.0
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:busyStateChanged busyStateChanged} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireBusyStateChanged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * busy state
         */
        busy?: boolean;
      }
    ): this;
    /**
     * @SINCE 1.21.0
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:cellClick cellClick} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireCellClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The control of the cell.
         */
        cellControl?: Control;
        /**
         * DOM reference of the clicked cell. Can be used to position the context menu.
         */
        cellDomRef?: Object;
        /**
         * Row index of the selected cell.
         */
        rowIndex?: int;
        /**
         * Column index of the selected cell. This is the index of visible columns and might differ from the index
         * maintained in the column aggregation.
         */
        columnIndex?: int;
        /**
         * Column ID of the selected cell.
         */
        columnId?: string;
        /**
         * Row binding context of the selected cell.
         */
        rowBindingContext?: Context;
      }
    ): boolean;
    /**
     * @SINCE 1.21.0
     * @deprecated (since 1.54) - replaced by `beforeOpenContextMenu`.
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:cellContextmenu cellContextmenu} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireCellContextmenu(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The control of the cell.
         */
        cellControl?: Control;
        /**
         * DOM reference of the clicked cell. Can be used to position the context menu.
         */
        cellDomRef?: Object;
        /**
         * Row index of the selected cell.
         */
        rowIndex?: int;
        /**
         * Column index of the selected cell. This is the index of visible columns and might differ from the index
         * maintained in the column aggregation.
         */
        columnIndex?: int;
        /**
         * Column ID of the selected cell.
         */
        columnId?: string;
        /**
         * Row binding context of the selected cell.
         */
        rowBindingContext?: Context;
      }
    ): boolean;
    /**
     * @SINCE 1.21.0
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:columnFreeze columnFreeze} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireColumnFreeze(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * reference to the column to freeze
         */
        column?: Column;
      }
    ): boolean;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:columnMove columnMove} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireColumnMove(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * moved column.
         */
        column?: Column;
        /**
         * new position of the column.
         */
        newPos?: int;
      }
    ): boolean;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:columnResize columnResize} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireColumnResize(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * resized column.
         */
        column?: Column;
        /**
         * new width of the table column as CSS Size definition.
         */
        width?: CSSSize;
      }
    ): boolean;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:columnSelect columnSelect} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireColumnSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * reference to the selected column
         */
        column?: Column;
      }
    ): boolean;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:columnVisibility columnVisibility} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireColumnVisibility(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * affected column.
         */
        column?: Column;
        /**
         * new value of the visible property.
         */
        newVisible?: boolean;
      }
    ): boolean;
    /**
     * @SINCE 1.23.0
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:customFilter customFilter} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireCustomFilter(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The column instance on which the custom filter button was pressed.
         */
        column?: Column;
        /**
         * Filter value.
         */
        value?: string;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:filter filter} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireFilter(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * filtered column.
         */
        column?: Column;
        /**
         * filter value.
         */
        value?: string;
      }
    ): boolean;
    /**
     * @SINCE 1.37.0
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:firstVisibleRowChanged firstVisibleRowChanged} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireFirstVisibleRowChanged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * First visible row
         */
        firstVisibleRow?: int;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:group group} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireGroup(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * grouped column.
         */
        column?: Column;
      }
    ): boolean;
    /**
     * @SINCE 1.60
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:paste paste} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    firePaste(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * 2D array of strings with data from the clipboard. The first dimension represents the rows, and the second
         * dimension represents the cells of the tabular data.
         */
        data?: string[][];
      }
    ): boolean;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:rowSelectionChange rowSelectionChange} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireRowSelectionChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * row index which has been clicked so that the selection has been changed (either selected or deselected)
         */
        rowIndex?: int;
        /**
         * binding context of the row which has been clicked so that selection has been changed
         */
        rowContext?: Context;
        /**
         * array of row indices which selection has been changed (either selected or deselected)
         */
        rowIndices?: int[];
        /**
         * indicator if "select all" function is used to select rows
         */
        selectAll?: boolean;
        /**
         * indicates that the event was fired due to an explicit user interaction like clicking the row header or
         * using the keyboard (SPACE or ENTER) to select a row or a range of rows.
         */
        userInteraction?: boolean;
      }
    ): this;
    /**
     * @SINCE 1.86
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:rowsUpdated rowsUpdated} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireRowsUpdated(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:sort sort} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireSort(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * sorted column.
         */
        column?: Column;
        /**
         * Sort Order
         */
        sortOrder?: SortOrder | keyof typeof SortOrder;
        /**
         * If column was added to sorter this is true. If new sort is started this is set to false
         */
        columnAdded?: boolean;
      }
    ): boolean;
    /**
     * Sets the focus to the stored focus DOM reference.
     *
     * If `oFocusInfo.targetInfo` is of type {@link sap.ui.core.message.Message}, the focus will be set as accurately
     * as possible according to the information provided by {@link sap.ui.core.message.Message}.
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
        targetInfo?: any;
      }
    ): void;
    /**
     * @SINCE 1.52
     *
     * Gets current value of property {@link #getAlternateRowColors alternateRowColors}.
     *
     * Enables alternating table row colors. Alternate row coloring is not available for the tree mode.
     *
     * Default value is `false`.
     *
     * @returns Value of property `alternateRowColors`
     */
    getAlternateRowColors(): boolean;
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
     * ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * Get the binding object for a specific aggregation/property.
     *
     * @returns The binding for the given name
     */
    getBinding(
      /**
       * Name of the property or aggregation
       */
      sName?: string
    ): Binding;
    /**
     * Gets current value of property {@link #getColumnHeaderHeight columnHeaderHeight}.
     *
     * Header row height in pixel. If a value greater than 0 is set, it overrides the height defined in the
     * `rowHeight` property for the rows in the table's header. The value defines the minimum height, but it
     * cannot be less than the default height based on the content density configuration. The actual height
     * can increase based on the content.
     *
     * **Note**: In a {@link sap.ui.table.Column#getMultiLabels MultiLabel} scenario, the height is applied
     * to each individual row of the table's header.
     *
     * @returns Value of property `columnHeaderHeight`
     */
    getColumnHeaderHeight(): int;
    /**
     * Gets current value of property {@link #getColumnHeaderVisible columnHeaderVisible}.
     *
     * Flag whether the column header is visible or not.
     *
     * **Caution:** Please be aware that when setting this property to `false`, a 100% accessibility of the
     * table can't be guaranteed any more.
     *
     * Default value is `true`.
     *
     * @returns Value of property `columnHeaderVisible`
     */
    getColumnHeaderVisible(): boolean;
    /**
     * Gets content of aggregation {@link #getColumns columns}.
     *
     * Columns of the Table
     */
    getColumns(): Column[];
    /**
     * Returns the context of a row by its index. Please note that for server-based models like OData, the supplied
     * index might not have been loaded yet. If the context is not available at the client, the binding will
     * trigger a backend request and request this single context. Although this API looks synchronous it may
     * not return a context but load it and fire a change event on the binding.
     *
     * For server-based models you should consider to only make this API call when the index is within the currently
     * visible scroll area.
     *
     * @returns The context at this index or `null`
     */
    getContextByIndex(
      /**
       * Index of the row to return the context from.
       */
      iIndex: int
    ): Context | null;
    /**
     * @SINCE 1.54
     *
     * Gets content of aggregation {@link #getContextMenu contextMenu}.
     *
     * Defines the context menu for the table.
     *
     * **Note:** The context menu will also be available for the row selectors as well as in the row actions
     * cell of the table control.
     *
     * The custom context menu will not be shown in group header and summary rows.
     *
     * If this aggregation is set, then the `enableCellFilter` property will have no effect.
     */
    getContextMenu(): IContextMenu;
    /**
     * @SINCE 1.52
     *
     * Gets content of aggregation `dragDropConfig` which defines the drag-and-drop configuration.
     *
     * The following restrictions apply:
     * 	 - Columns cannot be configured to be draggable.
     * 	 - The following rows are not draggable:
     * 	Empty rows
     * 	 - Group header rows
     * 	 - Sum rows
     * 	 - Columns cannot be configured to be droppable.
     * 	 - The following rows are not droppable:
     * 	The dragged row itself
     * 	 - Empty rows
     * 	 - Group header rows
     * 	 - Sum rows
     */
    getDragDropConfig(): DragDropBase[];
    /**
     * Gets current value of property {@link #getEditable editable}.
     *
     * Flag whether the controls of the Table are editable or not (currently this only controls the background
     * color in certain themes!)
     *
     * Default value is `true`.
     *
     * @returns Value of property `editable`
     */
    getEditable(): boolean;
    /**
     * @SINCE 1.27.0
     *
     * Gets current value of property {@link #getEnableBusyIndicator enableBusyIndicator}.
     *
     * If set to `true`, the table changes its busy state, resulting in showing or hiding the busy indicator.
     * The table will switch to busy as soon as data is retrieved to be displayed in the currently visible rows.
     * This happens, for example, during scrolling, filtering, or sorting. As soon as the data has been retrieved,
     * the table switches back to not busy. The busy state of the table can still be set manually by calling
     * {@link sap.ui.core.Control#setBusy}.
     *
     * Default value is `false`.
     *
     * @returns Value of property `enableBusyIndicator`
     */
    getEnableBusyIndicator(): boolean;
    /**
     * @SINCE 1.21.0
     *
     * Gets current value of property {@link #getEnableCellFilter enableCellFilter}.
     *
     * Flag whether to enable or disable the context menu on cells to trigger a filtering with the cell value.
     *
     * Default value is `false`.
     *
     * @returns Value of property `enableCellFilter`
     */
    getEnableCellFilter(): boolean;
    /**
     * @SINCE 1.21.0
     *
     * Gets current value of property {@link #getEnableColumnFreeze enableColumnFreeze}.
     *
     * Flag whether to show or hide the column menu item to freeze or unfreeze a column.
     *
     * Default value is `false`.
     *
     * @returns Value of property `enableColumnFreeze`
     */
    getEnableColumnFreeze(): boolean;
    /**
     * Gets current value of property {@link #getEnableColumnReordering enableColumnReordering}.
     *
     * Flag to enable or disable column reordering
     *
     * Default value is `true`.
     *
     * @returns Value of property `enableColumnReordering`
     */
    getEnableColumnReordering(): boolean;
    /**
     * @SINCE 1.23.0
     *
     * Gets current value of property {@link #getEnableCustomFilter enableCustomFilter}.
     *
     * Set this parameter to true to implement your own filter behaviour. Instead of the filter input box a
     * button will be rendered for which' press event (customFilter) you can register an event handler.
     *
     * Default value is `false`.
     *
     * @returns Value of property `enableCustomFilter`
     */
    getEnableCustomFilter(): boolean;
    /**
     * @deprecated (since 1.110) - this feature has a limited functionality and should not be used anymore.
     *
     * Gets current value of property {@link #getEnableGrouping enableGrouping}.
     *
     * Enables or disables grouping. If grouping is enabled, the table is grouped by the column which is defined
     * in the `groupBy` association.
     *
     * The following restrictions apply:
     * 	 - Only client models are supported (e.g. {@link sap.ui.model.json.JSONModel}). Grouping does not work
     * 			with OData models.
     * 	 - The table can only be grouped by **one** column at a time. Grouping by another column will remove
     * 			the current grouping.
     * 	 - For the grouping to work correctly, {@link sap.ui.table.Column#getSortProperty sortProperty} must
     * 			be set for the grouped column.
     * 	 - If grouping has been done, sorting and filtering is not possible. Any existing sorting and filtering
     * 			rules do no longer apply. The UI is not updated accordingly (e.g. menu items, sort and filter icons).
     *
     * 	 - The column, by which the table is grouped, is not visible. It will become visible again only if the
     * 			table is grouped by another column or grouping is disabled.
     *
     * Default value is `false`.
     *
     * @returns Value of property `enableGrouping`
     */
    getEnableGrouping(): boolean;
    /**
     * @SINCE 1.23.0
     *
     * Gets current value of property {@link #getEnableSelectAll enableSelectAll}.
     *
     * Specifies if a select all button should be displayed in the top left corner. This button is only displayed
     * if the row selector is visible and the selection mode is set to any kind of multi selection.
     *
     * Default value is `true`.
     *
     * @returns Value of property `enableSelectAll`
     */
    getEnableSelectAll(): boolean;
    /**
     * Gets content of aggregation {@link #getExtension extension}.
     *
     * Extension section of the Table. If not set, no extension area will be rendered. Note: In case a `sap.m.Toolbar`
     * is used as header the CSS class sapMTBHeader-CTX should be applied on this toolbar.
     */
    getExtension(): Control[];
    /**
     * Gets current value of property {@link #getFirstVisibleRow firstVisibleRow}.
     *
     * First visible row.
     *
     * Default value is `0`.
     *
     * @returns Value of property `firstVisibleRow`
     */
    getFirstVisibleRow(): int;
    /**
     * @SINCE 1.18.7
     *
     * Gets current value of property {@link #getFixedBottomRowCount fixedBottomRowCount}.
     *
     * Number of rows that are fix on the bottom. When you use a vertical scrollbar, only the rows which are
     * not fixed, will scroll.
     *
     * This property is only supported if the `rows` aggregation is bound to a {@link sap.ui.model.ClientModel
     * client model}.
     *
     * Default value is `0`.
     *
     * @returns Value of property `fixedBottomRowCount`
     */
    getFixedBottomRowCount(): int;
    /**
     * Gets current value of property {@link #getFixedColumnCount fixedColumnCount}.
     *
     * Number of columns that are fixed on the left. Only columns which are not fixed can be scrolled horizontally.
     *
     * **Note**
     * 	 - Fixed columns need a defined width for the feature to work.
     * 	 - The aggregated width of all fixed columns must not exceed the table width. Otherwise the table ignores
     * 			the value of the property and adapts the behavior in an appropriate way to ensure that the user is still
     * 			able to scroll horizontally.
     *
     * Default value is `0`.
     *
     * @returns Value of property `fixedColumnCount`
     */
    getFixedColumnCount(): int;
    /**
     * Gets current value of property {@link #getFixedRowCount fixedRowCount}.
     *
     * Number of rows that are fix on the top. When you use a vertical scrollbar, only the rows which are not
     * fixed, will scroll.
     *
     * This property is only supported if the `rows` aggregation is bound to a {@link sap.ui.model.ClientModel
     * client model}.
     *
     * Default value is `0`.
     *
     * @returns Value of property `fixedRowCount`
     */
    getFixedRowCount(): int;
    /**
     * Gets content of aggregation {@link #getFooter footer}.
     *
     * Control or text of footer section of the Table (if not set it will be hidden)
     */
    getFooter(): Control | string;
    /**
     * @EXPERIMENTAL (since 1.28) - This feature has a limited functionality.
     *
     * ID of the element which is the current target of the association {@link #getGroupBy groupBy}, or `null`.
     */
    getGroupBy(): ID;
    /**
     * Gets current value of property {@link #getMinAutoRowCount minAutoRowCount}.
     *
     * This property is used to set the minimum count of visible rows when the property visibleRowCountMode
     * is set to Auto or Interactive. For any other visibleRowCountMode, it is ignored.
     *
     * Default value is `5`.
     *
     * @returns Value of property `minAutoRowCount`
     */
    getMinAutoRowCount(): int;
    /**
     * @deprecated (since 1.38)
     *
     * Gets current value of property {@link #getNavigationMode navigationMode}.
     *
     * This property has been deprecated and must not be used anymore, since `Scrollbar` is the only supported
     * option.
     *
     * Default value is `Scrollbar`.
     *
     * @returns Value of property `navigationMode`
     */
    getNavigationMode(): NavigationMode | keyof typeof NavigationMode;
    /**
     * Gets content of aggregation {@link #getNoData noData}.
     *
     * The value for the noData aggregation can be either a string value or a control instance. The control
     * is shown, in case there is no data for the Table available. In case of a string value this will simply
     * replace the no data text.
     */
    getNoData(): Control | string;
    /**
     * @SINCE 1.64
     *
     * Gets content of aggregation {@link #getPlugins plugins}.
     *
     * Plugin section of the table. Multiple plugins are possible, but always only **one** of a certain type.
     *
     * The following restrictions apply:
     * 	 - If a selection plugin is applied to the table, the table's selection API must not be used. Instead,
     * 			use the API of the plugin.
     * 	 - Only one MultiSelectionPlugin can be applied. No other plugins can be applied.
     */
    getPlugins(): SelectionPlugin[];
    /**
     * @SINCE 1.45.0
     *
     * Gets current value of property {@link #getRowActionCount rowActionCount}.
     *
     * Number of row actions made visible which determines the width of the row action column. The values `0`,
     * `1` and `2` are possible.
     *
     * Default value is `0`.
     *
     * @returns Value of property `rowActionCount`
     */
    getRowActionCount(): int;
    /**
     * Gets content of aggregation {@link #getRowActionTemplate rowActionTemplate}.
     *
     * Template for row actions. A template is decoupled from the row or table. Each time the template's properties
     * or aggregations are changed, the template has to be applied again via `setRowActionTemplate` for the
     * changes to take effect.
     */
    getRowActionTemplate(): RowAction;
    /**
     * Gets current value of property {@link #getRowHeight rowHeight}.
     *
     * Row height in pixel.
     *
     * In the table's header, it defines the minimum height of the row, but it cannot be less than the default
     * height based on the content density configuration. The actual height can increase based on the content.
     *
     * In the table's body, it defines the height of the row content. The actual row height is also influenced
     * by other factors, such as the border width. If the `visibleRowCountMode` property is set to {@link sap.ui.table.VisibleRowCountMode
     * Fixed} or {@link sap.ui.table.VisibleRowCountMode Interactive}, the value defines the minimum height,
     * and the actual height can increase based on the content. If the mode is {@link sap.ui.table.VisibleRowCountMode
     * Auto}, the value defines the actual height, and any content that doesn't fit is cut off.
     *
     * If no value is set (includes 0), a default height is applied based on the content density configuration.
     * In any `visibleRowCountMode`, the actual height can increase based on the content.
     *
     * @returns Value of property `rowHeight`
     */
    getRowHeight(): int;
    /**
     * Gets content of aggregation {@link #getRows rows}.
     *
     * This aggregation is managed by the table itself. It can only be used with data binding, is read-only,
     * and does not support templates or factories.
     *
     * Rows are created and rendered only for a subset of the available data and reused for performance reasons.
     * When scrolling, only the binding contexts are updated to show the correct section of the data. This makes
     * it possible to bind the rows to large data sets. But you must not change rows and their children programmatically,
     * as these changes might get lost when the table updates the rows the next time. Also, properties must
     * not be set to static values, as these would not change when scrolling.
     *
     * The cells of rows can be defined with the {@link sap.ui.table.Column#setTemplate template} aggregation
     * of the columns in the {@link sap.ui.table.Table#getColumns columns} aggregation of the table. The actions
     * of rows can be defined with the {@link sap.ui.table.Table#setRowActionTemplate rowActionTemplate} aggregation
     * of the table. Furthermore, row-specific settings can be defined with the {@link sap.ui.table.Table#setRowSettingsTemplate
     * rowSettingsTemplate} aggregation of the table.
     *
     * **Note:** During the binding of rows, the (exact) count needs to be available in the table and has to
     * be requested. If the count is not requested, this may lead to unexpected behavior in the table, such
     * as scrolling, accessibility, or keyboard issues. Please refer to the documentation of the used model
     * for information on requesting the count, for example, {@link sap.ui.model.odata.v2.ODataModel} or {@link
     * sap.ui.model.odata.v4.ODataModel}.
     */
    getRows(): Row[];
    /**
     * Gets content of aggregation {@link #getRowSettingsTemplate rowSettingsTemplate}.
     *
     * Template for row settings. A template is decoupled from the row or table. Each time the template's properties
     * or aggregations are changed, the template has to be applied again via `setRowSettingsTemplate` for the
     * changes to take effect.
     */
    getRowSettingsTemplate(): RowSettings;
    /**
     * @deprecated (since 1.69) - replaced by {@link sap.ui.table.Table#getSelectedIndices}
     *
     * Retrieves the lead selection index.
     *
     * @returns Currently Selected Index.
     */
    getSelectedIndex(): int;
    /**
     * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".
     *
     * @returns Selected indices
     */
    getSelectedIndices(): int[];
    /**
     * Gets current value of property {@link #getSelectionBehavior selectionBehavior}.
     *
     * Selection behavior of the Table. This property defines whether the row selector is displayed and whether
     * the row, the row selector or both can be clicked to select a row. **Note:** Since the group header visualization
     * relies on the row selectors, the row selectors are always shown if the grouping functionality (depends
     * on table type) is enabled, even if `sap.ui.table.SelectionBehavior.RowOnly` is set.
     *
     * Default value is `RowSelector`.
     *
     * @returns Value of property `selectionBehavior`
     */
    getSelectionBehavior(): SelectionBehavior | keyof typeof SelectionBehavior;
    /**
     * Gets current value of property {@link #getSelectionMode selectionMode}.
     *
     * Selection mode of the Table. This property controls whether single or multiple rows can be selected and
     * how the selection can be extended. It may also influence the visual appearance. When the selection mode
     * is changed, the current selection is removed. **Note:** Since the group header visualization relies on
     * the row selectors, the row selectors are always shown if the grouping functionality (depends on table
     * type) is enabled, even if `sap.ui.table.SelectionMode.None` is set. **Note:** If a selection plugin is
     * applied to the table, the selection mode is controlled by the plugin.
     *
     * Default value is `MultiToggle`.
     *
     * @returns Value of property `selectionMode`
     */
    getSelectionMode(): SelectionMode | keyof typeof SelectionMode;
    /**
     * Gets current value of property {@link #getShowColumnVisibilityMenu showColumnVisibilityMenu}.
     *
     * Flag to show or hide the column visibility menu. This menu will get displayed in each generated column
     * header menu. It allows to show or hide columns
     *
     * Default value is `false`.
     *
     * @returns Value of property `showColumnVisibilityMenu`
     */
    getShowColumnVisibilityMenu(): boolean;
    /**
     * Gets current value of property {@link #getShowNoData showNoData}.
     *
     * Flag whether to show the no data overlay or not once the table is empty. If set to false the table will
     * just show a grid of empty cells
     *
     * Default value is `true`.
     *
     * @returns Value of property `showNoData`
     */
    getShowNoData(): boolean;
    /**
     * @SINCE 1.21.2
     *
     * Gets current value of property {@link #getShowOverlay showOverlay}.
     *
     * Setting this property to true will show an overlay on top of the Table content and users cannot click
     * anymore on the Table content.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showOverlay`
     */
    getShowOverlay(): boolean;
    /**
     * Gets the sorted columns in the order in which sorting was performed through the {@link sap.ui.table.Table#sort}
     * method and menus. Does not reflect sorting at binding level or the columns sort visualization set with
     * {@link sap.ui.table.Column#setSorted} and {@link sap.ui.table.Column#setSortOrder}.
     * See:
     * 	sap.ui.table.Table#sort
     *
     * @returns Array of sorted columns
     */
    getSortedColumns(): Column[];
    /**
     * Gets current value of property {@link #getThreshold threshold}.
     *
     * Defines how many additional (not yet visible) data records from the back-end system are pre-fetched to
     * enable smooth scrolling. The threshold is always added to the `visibleRowCount`. If the `visibleRowCount`
     * is 10 and the `threshold` is 100, there will be 110 records fetched with the initial load. If the `threshold`
     * is lower than the number of rows in the scrollable area (`visibleRowCount` minus number of fixed rows),
     * this number is used as the `threshold`. If the value is 0, thresholding is disabled.
     *
     * Default value is `100`.
     *
     * @returns Value of property `threshold`
     */
    getThreshold(): int;
    /**
     * @deprecated (since 1.72) - Use, for example, a `sap.m.Title` control in the `extension` aggregation instead.
     *
     * Gets content of aggregation {@link #getTitle title}.
     *
     * Control or text of title section of the Table (if not set it will be hidden)
     */
    getTitle(): Control | string;
    /**
     * @deprecated (since 1.38) - This aggregation is deprecated, use the `extension` aggregation instead.
     *
     * Gets content of aggregation {@link #getToolbar toolbar}.
     *
     * Toolbar of the Table If not set, no toolbar area will be rendered. Note: The CSS class sapMTBHeader-CTX
     * is applied on the given toolbar.
     */
    getToolbar(): Toolbar;
    /**
     * Gets current value of property {@link #getVisibleRowCount visibleRowCount}.
     *
     * Number of visible rows of the table.
     *
     * Default value is `10`.
     *
     * @returns Value of property `visibleRowCount`
     */
    getVisibleRowCount(): int;
    /**
     * @SINCE 1.9.2
     *
     * Gets current value of property {@link #getVisibleRowCountMode visibleRowCountMode}.
     *
     * Defines how the table handles the visible rows in the table.
     *
     * In the `"Fixed"` mode, the table always has as many rows as defined in the `visibleRowCount` property.
     *
     * In the `"Auto"` mode, the `visibleRowCount` property is changed by the table automatically. It will then
     * adjust its row count to the space it is allowed to cover (limited by the surrounding container), but
     * it cannot have less than defined in the `minAutoRowCount` property. The `visibleRowCount` property cannot
     * be set manually. Restrictions:
     * 	 - All rows need to have the same height.
     * 	 - The table must be rendered without siblings in its parent DOM element. The only exception is if the
     * 			parent element is a CSS flex container, and the table is a CSS flex item allowed to grow and shrink.
     *
     *
     * In the `"Interactive"` mode, the table has as many rows as defined in the `visibleRowCount` property
     * after rendering. The user can change the `visibleRowCount` by dragging a resizer.
     *
     * Default value is `Fixed`.
     *
     * @returns Value of property `visibleRowCountMode`
     */
    getVisibleRowCountMode():
      | VisibleRowCountMode
      | keyof typeof VisibleRowCountMode;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Width of the Table.
     *
     * Default value is `'auto'`.
     *
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
    /**
     * Checks for the provided `sap.ui.table.Column` in the aggregation {@link #getColumns columns}. and returns
     * its index if found or -1 otherwise.
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
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getExtension extension}. and
     * returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfExtension(
      /**
       * The extension whose index is looked for
       */
      oExtension: Control
    ): int;
    /**
     * @SINCE 1.64
     *
     * Checks for the provided `sap.ui.table.plugins.SelectionPlugin` in the aggregation {@link #getPlugins
     * plugins}. and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfPlugin(
      /**
       * The plugin whose index is looked for
       */
      oPlugin: SelectionPlugin
    ): int;
    /**
     * Checks for the provided `sap.ui.table.Row` in the aggregation {@link #getRows rows}. and returns its
     * index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfRow(
      /**
       * The row whose index is looked for
       */
      oRow: Row
    ): int;
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
     * Inserts a extension into the aggregation {@link #getExtension extension}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertExtension(
      /**
       * The extension to insert; if empty, nothing is inserted
       */
      oExtension: Control,
      /**
       * The `0`-based index the extension should be inserted at; for a negative value of `iIndex`, the extension
       * is inserted at position 0; for a value greater than the current size of the aggregation, the extension
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * @SINCE 1.64
     *
     * Inserts a plugin into the aggregation {@link #getPlugins plugins}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertPlugin(
      /**
       * The plugin to insert; if empty, nothing is inserted
       */
      oPlugin: SelectionPlugin,
      /**
       * The `0`-based index the plugin should be inserted at; for a negative value of `iIndex`, the plugin is
       * inserted at position 0; for a value greater than the current size of the aggregation, the plugin is inserted
       * at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a row into the aggregation {@link #getRows rows}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertRow(
      /**
       * The row to insert; if empty, nothing is inserted
       */
      oRow: Row,
      /**
       * The `0`-based index the row should be inserted at; for a negative value of `iIndex`, the row is inserted
       * at position 0; for a value greater than the current size of the aggregation, the row is inserted at the
       * last position
       */
      iIndex: int
    ): this;
    /**
     * Checks whether an index is selected.
     *
     * @returns Whether the index is selected
     */
    isIndexSelected(
      /**
       * Index to check for selection
       */
      iIndex: int
    ): boolean;
    /**
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * Removes all the controls from the aggregation {@link #getColumns columns}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllColumns(): Column[];
    /**
     * Removes all the controls from the aggregation {@link #getExtension extension}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllExtension(): Control[];
    /**
     * @SINCE 1.64
     *
     * Removes all the controls from the aggregation {@link #getPlugins plugins}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllPlugins(): SelectionPlugin[];
    /**
     * Removes all the controls from the aggregation {@link #getRows rows}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllRows(): Row[];
    /**
     * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
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
     * Removes a extension from the aggregation {@link #getExtension extension}.
     *
     * @returns The removed extension or `null`
     */
    removeExtension(
      /**
       * The extension to remove or its index or id
       */
      vExtension: int | string | Control
    ): Control | null;
    /**
     * @SINCE 1.64
     *
     * Removes a plugin from the aggregation {@link #getPlugins plugins}.
     *
     * @returns The removed plugin or `null`
     */
    removePlugin(
      /**
       * The plugin to remove or its index or id
       */
      vPlugin: int | string | SelectionPlugin
    ): SelectionPlugin | null;
    /**
     * Removes a row from the aggregation {@link #getRows rows}.
     *
     * @returns The removed row or `null`
     */
    removeRow(
      /**
       * The row to remove or its index or id
       */
      vRow: int | string | Row
    ): Row | null;
    /**
     * Removes the given selection interval from the selection. In case of single selection, only `iIndexTo`
     * is removed from the selection.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    removeSelectionInterval(
      /**
       * Index from which the deselection should start
       */
      iIndexFrom: int,
      /**
       * Index up to which to deselect
       */
      iIndexTo: int
    ): this;
    /**
     * Adds all rows to the selection. Please note that for server based models like OData the indices which
     * are considered to be selected might not be available at the client yet. Calling getContextByIndex might
     * not return a result but trigger a roundtrip to request this single entity.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    selectAll(): this;
    /**
     * @SINCE 1.52
     *
     * Sets a new value for property {@link #getAlternateRowColors alternateRowColors}.
     *
     * Enables alternating table row colors. Alternate row coloring is not available for the tree mode.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAlternateRowColors(
      /**
       * New value for property `alternateRowColors`
       */
      bAlternateRowColors?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getColumnHeaderHeight columnHeaderHeight}.
     *
     * Header row height in pixel. If a value greater than 0 is set, it overrides the height defined in the
     * `rowHeight` property for the rows in the table's header. The value defines the minimum height, but it
     * cannot be less than the default height based on the content density configuration. The actual height
     * can increase based on the content.
     *
     * **Note**: In a {@link sap.ui.table.Column#getMultiLabels MultiLabel} scenario, the height is applied
     * to each individual row of the table's header.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setColumnHeaderHeight(
      /**
       * New value for property `columnHeaderHeight`
       */
      iColumnHeaderHeight?: int
    ): this;
    /**
     * Sets a new value for property {@link #getColumnHeaderVisible columnHeaderVisible}.
     *
     * Flag whether the column header is visible or not.
     *
     * **Caution:** Please be aware that when setting this property to `false`, a 100% accessibility of the
     * table can't be guaranteed any more.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setColumnHeaderVisible(
      /**
       * New value for property `columnHeaderVisible`
       */
      bColumnHeaderVisible?: boolean
    ): this;
    /**
     * @SINCE 1.54
     *
     * Sets the aggregated {@link #getContextMenu contextMenu}.
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
     * Sets a new value for property {@link #getEditable editable}.
     *
     * Flag whether the controls of the Table are editable or not (currently this only controls the background
     * color in certain themes!)
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEditable(
      /**
       * New value for property `editable`
       */
      bEditable?: boolean
    ): this;
    /**
     * @SINCE 1.27.0
     *
     * Sets a new value for property {@link #getEnableBusyIndicator enableBusyIndicator}.
     *
     * If set to `true`, the table changes its busy state, resulting in showing or hiding the busy indicator.
     * The table will switch to busy as soon as data is retrieved to be displayed in the currently visible rows.
     * This happens, for example, during scrolling, filtering, or sorting. As soon as the data has been retrieved,
     * the table switches back to not busy. The busy state of the table can still be set manually by calling
     * {@link sap.ui.core.Control#setBusy}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableBusyIndicator(
      /**
       * New value for property `enableBusyIndicator`
       */
      bEnableBusyIndicator?: boolean
    ): this;
    /**
     * @SINCE 1.21.0
     *
     * Sets a new value for property {@link #getEnableCellFilter enableCellFilter}.
     *
     * Flag whether to enable or disable the context menu on cells to trigger a filtering with the cell value.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableCellFilter(
      /**
       * New value for property `enableCellFilter`
       */
      bEnableCellFilter?: boolean
    ): this;
    /**
     * @SINCE 1.21.0
     *
     * Sets a new value for property {@link #getEnableColumnFreeze enableColumnFreeze}.
     *
     * Flag whether to show or hide the column menu item to freeze or unfreeze a column.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableColumnFreeze(
      /**
       * New value for property `enableColumnFreeze`
       */
      bEnableColumnFreeze?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getEnableColumnReordering enableColumnReordering}.
     *
     * Flag to enable or disable column reordering
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableColumnReordering(
      /**
       * New value for property `enableColumnReordering`
       */
      bEnableColumnReordering?: boolean
    ): this;
    /**
     * @SINCE 1.23.0
     *
     * Sets a new value for property {@link #getEnableCustomFilter enableCustomFilter}.
     *
     * Set this parameter to true to implement your own filter behaviour. Instead of the filter input box a
     * button will be rendered for which' press event (customFilter) you can register an event handler.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableCustomFilter(
      /**
       * New value for property `enableCustomFilter`
       */
      bEnableCustomFilter?: boolean
    ): this;
    /**
     * @deprecated (since 1.110) - this feature has a limited functionality and should not be used anymore.
     *
     * Sets a new value for property {@link #getEnableGrouping enableGrouping}.
     *
     * Enables or disables grouping. If grouping is enabled, the table is grouped by the column which is defined
     * in the `groupBy` association.
     *
     * The following restrictions apply:
     * 	 - Only client models are supported (e.g. {@link sap.ui.model.json.JSONModel}). Grouping does not work
     * 			with OData models.
     * 	 - The table can only be grouped by **one** column at a time. Grouping by another column will remove
     * 			the current grouping.
     * 	 - For the grouping to work correctly, {@link sap.ui.table.Column#getSortProperty sortProperty} must
     * 			be set for the grouped column.
     * 	 - If grouping has been done, sorting and filtering is not possible. Any existing sorting and filtering
     * 			rules do no longer apply. The UI is not updated accordingly (e.g. menu items, sort and filter icons).
     *
     * 	 - The column, by which the table is grouped, is not visible. It will become visible again only if the
     * 			table is grouped by another column or grouping is disabled.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableGrouping(
      /**
       * New value for property `enableGrouping`
       */
      bEnableGrouping?: boolean
    ): this;
    /**
     * @SINCE 1.23.0
     *
     * Sets a new value for property {@link #getEnableSelectAll enableSelectAll}.
     *
     * Specifies if a select all button should be displayed in the top left corner. This button is only displayed
     * if the row selector is visible and the selection mode is set to any kind of multi selection.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableSelectAll(
      /**
       * New value for property `enableSelectAll`
       */
      bEnableSelectAll?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getFirstVisibleRow firstVisibleRow}.
     *
     * First visible row.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFirstVisibleRow(
      /**
       * New value for property `firstVisibleRow`
       */
      iFirstVisibleRow?: int
    ): this;
    /**
     * @SINCE 1.18.7
     *
     * Sets a new value for property {@link #getFixedBottomRowCount fixedBottomRowCount}.
     *
     * Number of rows that are fix on the bottom. When you use a vertical scrollbar, only the rows which are
     * not fixed, will scroll.
     *
     * This property is only supported if the `rows` aggregation is bound to a {@link sap.ui.model.ClientModel
     * client model}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFixedBottomRowCount(
      /**
       * New value for property `fixedBottomRowCount`
       */
      iFixedBottomRowCount?: int
    ): this;
    /**
     * Sets a new value for property {@link #getFixedColumnCount fixedColumnCount}.
     *
     * Number of columns that are fixed on the left. Only columns which are not fixed can be scrolled horizontally.
     *
     * **Note**
     * 	 - Fixed columns need a defined width for the feature to work.
     * 	 - The aggregated width of all fixed columns must not exceed the table width. Otherwise the table ignores
     * 			the value of the property and adapts the behavior in an appropriate way to ensure that the user is still
     * 			able to scroll horizontally.
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
     * Sets a new value for property {@link #getFixedRowCount fixedRowCount}.
     *
     * Number of rows that are fix on the top. When you use a vertical scrollbar, only the rows which are not
     * fixed, will scroll.
     *
     * This property is only supported if the `rows` aggregation is bound to a {@link sap.ui.model.ClientModel
     * client model}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFixedRowCount(
      /**
       * New value for property `fixedRowCount`
       */
      iFixedRowCount?: int
    ): this;
    /**
     * Sets the aggregated {@link #getFooter footer}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFooter(
      /**
       * The footer to set
       */
      vFooter: Control | string
    ): this;
    /**
     * @EXPERIMENTAL (since 1.28) - This feature has a limited functionality.
     *
     * Sets the associated {@link #getGroupBy groupBy}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setGroupBy(
      /**
       * ID of an element which becomes the new target of this groupBy association; alternatively, an element
       * instance may be given
       */
      oGroupBy: ID | Column
    ): this;
    /**
     * Sets a new value for property {@link #getMinAutoRowCount minAutoRowCount}.
     *
     * This property is used to set the minimum count of visible rows when the property visibleRowCountMode
     * is set to Auto or Interactive. For any other visibleRowCountMode, it is ignored.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `5`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMinAutoRowCount(
      /**
       * New value for property `minAutoRowCount`
       */
      iMinAutoRowCount?: int
    ): this;
    /**
     * @deprecated (since 1.38)
     *
     * Sets a new value for property {@link #getNavigationMode navigationMode}.
     *
     * This property has been deprecated and must not be used anymore, since `Scrollbar` is the only supported
     * option.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Scrollbar`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setNavigationMode(
      /**
       * New value for property `navigationMode`
       */
      sNavigationMode?: NavigationMode | keyof typeof NavigationMode
    ): this;
    /**
     * Sets the aggregated {@link #getNoData noData}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setNoData(
      /**
       * The noData to set
       */
      vNoData: Control | string
    ): this;
    /**
     * @SINCE 1.45.0
     *
     * Sets a new value for property {@link #getRowActionCount rowActionCount}.
     *
     * Number of row actions made visible which determines the width of the row action column. The values `0`,
     * `1` and `2` are possible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setRowActionCount(
      /**
       * New value for property `rowActionCount`
       */
      iRowActionCount?: int
    ): this;
    /**
     * Sets the aggregated {@link #getRowActionTemplate rowActionTemplate}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setRowActionTemplate(
      /**
       * The rowActionTemplate to set
       */
      oRowActionTemplate: RowAction
    ): this;
    /**
     * Sets a new value for property {@link #getRowHeight rowHeight}.
     *
     * Row height in pixel.
     *
     * In the table's header, it defines the minimum height of the row, but it cannot be less than the default
     * height based on the content density configuration. The actual height can increase based on the content.
     *
     * In the table's body, it defines the height of the row content. The actual row height is also influenced
     * by other factors, such as the border width. If the `visibleRowCountMode` property is set to {@link sap.ui.table.VisibleRowCountMode
     * Fixed} or {@link sap.ui.table.VisibleRowCountMode Interactive}, the value defines the minimum height,
     * and the actual height can increase based on the content. If the mode is {@link sap.ui.table.VisibleRowCountMode
     * Auto}, the value defines the actual height, and any content that doesn't fit is cut off.
     *
     * If no value is set (includes 0), a default height is applied based on the content density configuration.
     * In any `visibleRowCountMode`, the actual height can increase based on the content.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setRowHeight(
      /**
       * New value for property `rowHeight`
       */
      iRowHeight?: int
    ): this;
    /**
     * Sets the aggregated {@link #getRowSettingsTemplate rowSettingsTemplate}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setRowSettingsTemplate(
      /**
       * The rowSettingsTemplate to set
       */
      oRowSettingsTemplate: RowSettings
    ): this;
    /**
     * Sets the selected index. The previous selection is removed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelectedIndex(
      /**
       * The index to select
       */
      iIndex: int
    ): this;
    /**
     * Sets a new value for property {@link #getSelectionBehavior selectionBehavior}.
     *
     * Selection behavior of the Table. This property defines whether the row selector is displayed and whether
     * the row, the row selector or both can be clicked to select a row. **Note:** Since the group header visualization
     * relies on the row selectors, the row selectors are always shown if the grouping functionality (depends
     * on table type) is enabled, even if `sap.ui.table.SelectionBehavior.RowOnly` is set.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `RowSelector`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelectionBehavior(
      /**
       * New value for property `selectionBehavior`
       */
      sSelectionBehavior?: SelectionBehavior | keyof typeof SelectionBehavior
    ): this;
    /**
     * Sets the given selection interval as selection. In case of a single selection, only `iIndexTo` is selected.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelectionInterval(
      /**
       * Index from which the selection starts
       */
      iIndexFrom: int,
      /**
       * Index up to which to select
       */
      iIndexTo: int
    ): this;
    /**
     * Sets the selection mode. The current selection is lost.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelectionMode(
      /**
       * the selection mode, see sap.ui.table.SelectionMode
       */
      sSelectionMode: SelectionMode | keyof typeof SelectionMode
    ): this;
    /**
     * Sets a new value for property {@link #getShowColumnVisibilityMenu showColumnVisibilityMenu}.
     *
     * Flag to show or hide the column visibility menu. This menu will get displayed in each generated column
     * header menu. It allows to show or hide columns
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowColumnVisibilityMenu(
      /**
       * New value for property `showColumnVisibilityMenu`
       */
      bShowColumnVisibilityMenu?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowNoData showNoData}.
     *
     * Flag whether to show the no data overlay or not once the table is empty. If set to false the table will
     * just show a grid of empty cells
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowNoData(
      /**
       * New value for property `showNoData`
       */
      bShowNoData?: boolean
    ): this;
    /**
     * @SINCE 1.21.2
     *
     * Sets a new value for property {@link #getShowOverlay showOverlay}.
     *
     * Setting this property to true will show an overlay on top of the Table content and users cannot click
     * anymore on the Table content.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowOverlay(
      /**
       * New value for property `showOverlay`
       */
      bShowOverlay?: boolean
    ): this;
    /**
     * Sets the threshold value, which will be added to all data requests in case the Table is bound against
     * an OData service.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setThreshold(
      /**
       * The threshold
       */
      iThreshold: int
    ): this;
    /**
     * @deprecated (since 1.72) - Use, for example, a `sap.m.Title` control in the `extension` aggregation instead.
     *
     * Sets the aggregated {@link #getTitle title}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitle(
      /**
       * The title to set
       */
      vTitle: Control | string
    ): this;
    /**
     * @deprecated (since 1.38) - This aggregation is deprecated, use the `extension` aggregation instead.
     *
     * Sets the aggregated {@link #getToolbar toolbar}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setToolbar(
      /**
       * The toolbar to set
       */
      oToolbar: Toolbar
    ): this;
    /**
     * Sets a new tooltip for this object. The tooltip can either be a simple string (which in most cases will
     * be rendered as the `title` attribute of this Element) or an instance of {@link sap.ui.core.TooltipBase}.
     *
     * If a new tooltip is set, any previously set tooltip is deactivated.
     *
     * Please note that tooltips are not rendered for the table. The tooltip property will be set but it won't
     * effect the DOM.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTooltip(
      /**
       * The tooltip
       */
      vTooltip: string | TooltipBase
    ): this;
    /**
     * Sets a new value for property {@link #getVisibleRowCount visibleRowCount}.
     *
     * Number of visible rows of the table.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `10`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setVisibleRowCount(
      /**
       * New value for property `visibleRowCount`
       */
      iVisibleRowCount?: int
    ): this;
    /**
     * @SINCE 1.9.2
     *
     * Sets a new value for property {@link #getVisibleRowCountMode visibleRowCountMode}.
     *
     * Defines how the table handles the visible rows in the table.
     *
     * In the `"Fixed"` mode, the table always has as many rows as defined in the `visibleRowCount` property.
     *
     * In the `"Auto"` mode, the `visibleRowCount` property is changed by the table automatically. It will then
     * adjust its row count to the space it is allowed to cover (limited by the surrounding container), but
     * it cannot have less than defined in the `minAutoRowCount` property. The `visibleRowCount` property cannot
     * be set manually. Restrictions:
     * 	 - All rows need to have the same height.
     * 	 - The table must be rendered without siblings in its parent DOM element. The only exception is if the
     * 			parent element is a CSS flex container, and the table is a CSS flex item allowed to grow and shrink.
     *
     *
     * In the `"Interactive"` mode, the table has as many rows as defined in the `visibleRowCount` property
     * after rendering. The user can change the `visibleRowCount` by dragging a resizer.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Fixed`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setVisibleRowCountMode(
      /**
       * New value for property `visibleRowCountMode`
       */
      sVisibleRowCountMode?:
        | VisibleRowCountMode
        | keyof typeof VisibleRowCountMode
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Width of the Table.
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
    /**
     * Sorts the given column ascending or descending.
     */
    sort(
      /**
       * Column to be sorted or undefined to clear sorting
       */
      oColumn: Column | undefined,
      /**
       * Sort order of the column (if undefined the default will be ascending)
       */
      oSortOrder: SortOrder | keyof typeof SortOrder,
      /**
       * Set to true to add the new sort criterion to the existing sort criteria
       */
      bAdd: boolean
    ): void;
    /**
     * Unbinds aggregation {@link #getColumns columns} from model data.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    unbindColumns(): this;
    /**
     * Unbinds aggregation {@link #getRows rows} from model data.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    unbindRows(): this;
  }

  export interface $TableSettings extends $ControlSettings {
    /**
     * Width of the Table.
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Row height in pixel.
     *
     * In the table's header, it defines the minimum height of the row, but it cannot be less than the default
     * height based on the content density configuration. The actual height can increase based on the content.
     *
     * In the table's body, it defines the height of the row content. The actual row height is also influenced
     * by other factors, such as the border width. If the `visibleRowCountMode` property is set to {@link sap.ui.table.VisibleRowCountMode
     * Fixed} or {@link sap.ui.table.VisibleRowCountMode Interactive}, the value defines the minimum height,
     * and the actual height can increase based on the content. If the mode is {@link sap.ui.table.VisibleRowCountMode
     * Auto}, the value defines the actual height, and any content that doesn't fit is cut off.
     *
     * If no value is set (includes 0), a default height is applied based on the content density configuration.
     * In any `visibleRowCountMode`, the actual height can increase based on the content.
     */
    rowHeight?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Header row height in pixel. If a value greater than 0 is set, it overrides the height defined in the
     * `rowHeight` property for the rows in the table's header. The value defines the minimum height, but it
     * cannot be less than the default height based on the content density configuration. The actual height
     * can increase based on the content.
     *
     * **Note**: In a {@link sap.ui.table.Column#getMultiLabels MultiLabel} scenario, the height is applied
     * to each individual row of the table's header.
     */
    columnHeaderHeight?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Flag whether the column header is visible or not.
     *
     * **Caution:** Please be aware that when setting this property to `false`, a 100% accessibility of the
     * table can't be guaranteed any more.
     */
    columnHeaderVisible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Number of visible rows of the table.
     */
    visibleRowCount?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * First visible row.
     */
    firstVisibleRow?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Selection mode of the Table. This property controls whether single or multiple rows can be selected and
     * how the selection can be extended. It may also influence the visual appearance. When the selection mode
     * is changed, the current selection is removed. **Note:** Since the group header visualization relies on
     * the row selectors, the row selectors are always shown if the grouping functionality (depends on table
     * type) is enabled, even if `sap.ui.table.SelectionMode.None` is set. **Note:** If a selection plugin is
     * applied to the table, the selection mode is controlled by the plugin.
     */
    selectionMode?:
      | (SelectionMode | keyof typeof SelectionMode)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Selection behavior of the Table. This property defines whether the row selector is displayed and whether
     * the row, the row selector or both can be clicked to select a row. **Note:** Since the group header visualization
     * relies on the row selectors, the row selectors are always shown if the grouping functionality (depends
     * on table type) is enabled, even if `sap.ui.table.SelectionBehavior.RowOnly` is set.
     */
    selectionBehavior?:
      | (SelectionBehavior | keyof typeof SelectionBehavior)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * @deprecated (since 1.69) - replaced by {@link sap.ui.table.Table#getSelectedIndices} and {@link sap.ui.table.Table#setSelectedIndex}
     *
     * Zero-based index of selected item. Index value for no selection is -1. When multi-selection is enabled
     * and multiple items are selected, the method returns the lead selected item. Sets the zero-based index
     * of the currently selected item. This method removes any previous selections. When the given index is
     * invalid, the call is ignored. **Note:** If the rows of the table are bound, the value of the property
     * is reset to -1. If a selection plugin is applied to the table, the property is not bindable.
     */
    selectedIndex?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Flag whether the controls of the Table are editable or not (currently this only controls the background
     * color in certain themes!)
     */
    editable?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @deprecated (since 1.38)
     *
     * This property has been deprecated and must not be used anymore, since `Scrollbar` is the only supported
     * option.
     */
    navigationMode?:
      | (NavigationMode | keyof typeof NavigationMode)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines how many additional (not yet visible) data records from the back-end system are pre-fetched to
     * enable smooth scrolling. The threshold is always added to the `visibleRowCount`. If the `visibleRowCount`
     * is 10 and the `threshold` is 100, there will be 110 records fetched with the initial load. If the `threshold`
     * is lower than the number of rows in the scrollable area (`visibleRowCount` minus number of fixed rows),
     * this number is used as the `threshold`. If the value is 0, thresholding is disabled.
     */
    threshold?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Flag to enable or disable column reordering
     */
    enableColumnReordering?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @deprecated (since 1.110) - this feature has a limited functionality and should not be used anymore.
     *
     * Enables or disables grouping. If grouping is enabled, the table is grouped by the column which is defined
     * in the `groupBy` association.
     *
     * The following restrictions apply:
     * 	 - Only client models are supported (e.g. {@link sap.ui.model.json.JSONModel}). Grouping does not work
     * 			with OData models.
     * 	 - The table can only be grouped by **one** column at a time. Grouping by another column will remove
     * 			the current grouping.
     * 	 - For the grouping to work correctly, {@link sap.ui.table.Column#getSortProperty sortProperty} must
     * 			be set for the grouped column.
     * 	 - If grouping has been done, sorting and filtering is not possible. Any existing sorting and filtering
     * 			rules do no longer apply. The UI is not updated accordingly (e.g. menu items, sort and filter icons).
     *
     * 	 - The column, by which the table is grouped, is not visible. It will become visible again only if the
     * 			table is grouped by another column or grouping is disabled.
     */
    enableGrouping?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Flag to show or hide the column visibility menu. This menu will get displayed in each generated column
     * header menu. It allows to show or hide columns
     */
    showColumnVisibilityMenu?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Flag whether to show the no data overlay or not once the table is empty. If set to false the table will
     * just show a grid of empty cells
     */
    showNoData?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.9.2
     *
     * Defines how the table handles the visible rows in the table.
     *
     * In the `"Fixed"` mode, the table always has as many rows as defined in the `visibleRowCount` property.
     *
     * In the `"Auto"` mode, the `visibleRowCount` property is changed by the table automatically. It will then
     * adjust its row count to the space it is allowed to cover (limited by the surrounding container), but
     * it cannot have less than defined in the `minAutoRowCount` property. The `visibleRowCount` property cannot
     * be set manually. Restrictions:
     * 	 - All rows need to have the same height.
     * 	 - The table must be rendered without siblings in its parent DOM element. The only exception is if the
     * 			parent element is a CSS flex container, and the table is a CSS flex item allowed to grow and shrink.
     *
     *
     * In the `"Interactive"` mode, the table has as many rows as defined in the `visibleRowCount` property
     * after rendering. The user can change the `visibleRowCount` by dragging a resizer.
     */
    visibleRowCountMode?:
      | (VisibleRowCountMode | keyof typeof VisibleRowCountMode)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * This property is used to set the minimum count of visible rows when the property visibleRowCountMode
     * is set to Auto or Interactive. For any other visibleRowCountMode, it is ignored.
     */
    minAutoRowCount?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Number of columns that are fixed on the left. Only columns which are not fixed can be scrolled horizontally.
     *
     * **Note**
     * 	 - Fixed columns need a defined width for the feature to work.
     * 	 - The aggregated width of all fixed columns must not exceed the table width. Otherwise the table ignores
     * 			the value of the property and adapts the behavior in an appropriate way to ensure that the user is still
     * 			able to scroll horizontally.
     */
    fixedColumnCount?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Number of rows that are fix on the top. When you use a vertical scrollbar, only the rows which are not
     * fixed, will scroll.
     *
     * This property is only supported if the `rows` aggregation is bound to a {@link sap.ui.model.ClientModel
     * client model}.
     */
    fixedRowCount?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.18.7
     *
     * Number of rows that are fix on the bottom. When you use a vertical scrollbar, only the rows which are
     * not fixed, will scroll.
     *
     * This property is only supported if the `rows` aggregation is bound to a {@link sap.ui.model.ClientModel
     * client model}.
     */
    fixedBottomRowCount?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.21.0
     *
     * Flag whether to show or hide the column menu item to freeze or unfreeze a column.
     */
    enableColumnFreeze?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.21.0
     *
     * Flag whether to enable or disable the context menu on cells to trigger a filtering with the cell value.
     */
    enableCellFilter?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.21.2
     *
     * Setting this property to true will show an overlay on top of the Table content and users cannot click
     * anymore on the Table content.
     */
    showOverlay?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.23.0
     *
     * Specifies if a select all button should be displayed in the top left corner. This button is only displayed
     * if the row selector is visible and the selection mode is set to any kind of multi selection.
     */
    enableSelectAll?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.23.0
     *
     * Set this parameter to true to implement your own filter behaviour. Instead of the filter input box a
     * button will be rendered for which' press event (customFilter) you can register an event handler.
     */
    enableCustomFilter?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.27.0
     *
     * If set to `true`, the table changes its busy state, resulting in showing or hiding the busy indicator.
     * The table will switch to busy as soon as data is retrieved to be displayed in the currently visible rows.
     * This happens, for example, during scrolling, filtering, or sorting. As soon as the data has been retrieved,
     * the table switches back to not busy. The busy state of the table can still be set manually by calling
     * {@link sap.ui.core.Control#setBusy}.
     */
    enableBusyIndicator?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.45.0
     *
     * Number of row actions made visible which determines the width of the row action column. The values `0`,
     * `1` and `2` are possible.
     */
    rowActionCount?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.52
     *
     * Enables alternating table row colors. Alternate row coloring is not available for the tree mode.
     */
    alternateRowColors?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @deprecated (since 1.72) - Use, for example, a `sap.m.Title` control in the `extension` aggregation instead.
     *
     * Control or text of title section of the Table (if not set it will be hidden)
     */
    title?: string | Control | PropertyBindingInfo;

    /**
     * Control or text of footer section of the Table (if not set it will be hidden)
     */
    footer?: string | Control | PropertyBindingInfo;

    /**
     * @deprecated (since 1.38) - This aggregation is deprecated, use the `extension` aggregation instead.
     *
     * Toolbar of the Table If not set, no toolbar area will be rendered. Note: The CSS class sapMTBHeader-CTX
     * is applied on the given toolbar.
     */
    toolbar?: Toolbar;

    /**
     * Extension section of the Table. If not set, no extension area will be rendered. Note: In case a `sap.m.Toolbar`
     * is used as header the CSS class sapMTBHeader-CTX should be applied on this toolbar.
     */
    extension?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Columns of the Table
     */
    columns?: Column[] | Column | AggregationBindingInfo | `{${string}}`;

    /**
     * This aggregation is managed by the table itself. It can only be used with data binding, is read-only,
     * and does not support templates or factories.
     *
     * Rows are created and rendered only for a subset of the available data and reused for performance reasons.
     * When scrolling, only the binding contexts are updated to show the correct section of the data. This makes
     * it possible to bind the rows to large data sets. But you must not change rows and their children programmatically,
     * as these changes might get lost when the table updates the rows the next time. Also, properties must
     * not be set to static values, as these would not change when scrolling.
     *
     * The cells of rows can be defined with the {@link sap.ui.table.Column#setTemplate template} aggregation
     * of the columns in the {@link sap.ui.table.Table#getColumns columns} aggregation of the table. The actions
     * of rows can be defined with the {@link sap.ui.table.Table#setRowActionTemplate rowActionTemplate} aggregation
     * of the table. Furthermore, row-specific settings can be defined with the {@link sap.ui.table.Table#setRowSettingsTemplate
     * rowSettingsTemplate} aggregation of the table.
     *
     * **Note:** During the binding of rows, the (exact) count needs to be available in the table and has to
     * be requested. If the count is not requested, this may lead to unexpected behavior in the table, such
     * as scrolling, accessibility, or keyboard issues. Please refer to the documentation of the used model
     * for information on requesting the count, for example, {@link sap.ui.model.odata.v2.ODataModel} or {@link
     * sap.ui.model.odata.v4.ODataModel}.
     */
    rows?: Row[] | Row | AggregationBindingInfo | `{${string}}`;

    /**
     * The value for the noData aggregation can be either a string value or a control instance. The control
     * is shown, in case there is no data for the Table available. In case of a string value this will simply
     * replace the no data text.
     */
    noData?: string | Control | PropertyBindingInfo;

    /**
     * Template for row actions. A template is decoupled from the row or table. Each time the template's properties
     * or aggregations are changed, the template has to be applied again via `setRowActionTemplate` for the
     * changes to take effect.
     */
    rowActionTemplate?: RowAction;

    /**
     * Template for row settings. A template is decoupled from the row or table. Each time the template's properties
     * or aggregations are changed, the template has to be applied again via `setRowSettingsTemplate` for the
     * changes to take effect.
     */
    rowSettingsTemplate?: RowSettings;

    /**
     * @SINCE 1.54
     *
     * Defines the context menu for the table.
     *
     * **Note:** The context menu will also be available for the row selectors as well as in the row actions
     * cell of the table control.
     *
     * The custom context menu will not be shown in group header and summary rows.
     *
     * If this aggregation is set, then the `enableCellFilter` property will have no effect.
     */
    contextMenu?: IContextMenu;

    /**
     * @SINCE 1.64
     *
     * Plugin section of the table. Multiple plugins are possible, but always only **one** of a certain type.
     *
     * The following restrictions apply:
     * 	 - If a selection plugin is applied to the table, the table's selection API must not be used. Instead,
     * 			use the API of the plugin.
     * 	 - Only one MultiSelectionPlugin can be applied. No other plugins can be applied.
     */
    plugins?:
      | SelectionPlugin[]
      | SelectionPlugin
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * @EXPERIMENTAL (since 1.28) - This feature has a limited functionality.
     *
     * The column by which the table is grouped. Grouping will only be performed if `enableGrouping` is set
     * to `true`. Setting `groupBy` in the view does not work and throws an error. It can only be set if the
     * column by which the table is grouped is already part of the `columns` aggregation of the table.
     */
    groupBy?: Column | string;

    /**
     * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
     */
    ariaLabelledBy?: Array<Control | string>;

    /**
     * fired when the row selection of the table has been changed (the event parameters can be used to determine
     * selection changes - to find out the selected rows you should better use the table selection API)
     *
     * **Note:** If a selection plugin is applied to the table, this event won't be fired.
     */
    rowSelectionChange?: (oEvent: Event) => void;

    /**
     * fired when a column of the table has been selected
     */
    columnSelect?: (oEvent: Event) => void;

    /**
     * fired when a table column is resized.
     */
    columnResize?: (oEvent: Event) => void;

    /**
     * fired when a table column is moved.
     */
    columnMove?: (oEvent: Event) => void;

    /**
     * This event is fired before a sort order is applied to a column, if the table is sorted via {@link sap.ui.table.Table#sort}
     * call or user interaction with the column header.
     *
     * Sorters that are directly applied to the table binding will not fire this event.
     */
    sort?: (oEvent: Event) => void;

    /**
     * This event is fired before a filter is applied to a column, if the table is filtered via {@link sap.ui.table.Table#filter}
     * call or user interaction with the column header.
     *
     * Filters that are directly applied to the table binding will not fire this event.
     */
    filter?: (oEvent: Event) => void;

    /**
     * fired when the table is grouped (experimental!).
     */
    group?: (oEvent: Event) => void;

    /**
     * fired when the visibility of a table column is changed.
     */
    columnVisibility?: (oEvent: Event) => void;

    /**
     * @SINCE 1.21.0
     *
     * fired when the user clicks a cell of the table (experimental!).
     */
    cellClick?: (oEvent: Event) => void;

    /**
     * @SINCE 1.21.0
     * @deprecated (since 1.54) - replaced by `beforeOpenContextMenu`.
     *
     * fired when the user clicks a cell of the table.
     */
    cellContextmenu?: (oEvent: Event) => void;

    /**
     * @SINCE 1.54
     *
     * Fired when the user requests the context menu for a table cell.
     */
    beforeOpenContextMenu?: (oEvent: Event) => void;

    /**
     * @SINCE 1.21.0
     *
     * fired when a column of the table should be freezed
     */
    columnFreeze?: (oEvent: Event) => void;

    /**
     * @SINCE 1.23.0
     *
     * This event is triggered when the custom filter item of the column menu is pressed. The column on which
     * the event was triggered is passed as parameter.
     */
    customFilter?: (oEvent: Event) => void;

    /**
     * @SINCE 1.37.0
     *
     * This event gets fired when the first visible row is changed. It should only be used by composite controls.
     * The event even is fired when setFirstVisibleRow is called programmatically.
     */
    firstVisibleRowChanged?: (oEvent: Event) => void;

    /**
     * @SINCE 1.37.0
     *
     * This event gets fired when the busy state of the table changes. It should only be used by composite controls.
     */
    busyStateChanged?: (oEvent: Event) => void;

    /**
     * @SINCE 1.60
     *
     * This event gets fired when the user pastes content from the clipboard to the table. Pasting can be done
     * with the standard keyboard shortcut, if the focus is inside the table.
     */
    paste?: (oEvent: Event) => void;

    /**
     * @SINCE 1.86
     *
     * This event is fired after the table rows have been updated due to rendering, a model update, or a user
     * interaction, for example.
     *
     * **Note**: This event is fired often and must not be used for performance-critical tasks.
     */
    rowsUpdated?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/table/TablePersoController" {
  import {
    default as ManagedObject,
    $ManagedObjectSettings,
    PropertyBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import ManagedObjectMetadata from "sap/ui/base/ManagedObjectMetadata";

  import { ResetAllMode } from "sap/ui/table/library";

  import { ID } from "sap/ui/core/library";

  import Table from "sap/ui/table/Table";

  /**
   * @SINCE 1.21.1
   *
   * The TablePersoController can be used to connect a table with a persistence service.
   */
  export default class TablePersoController extends ManagedObject {
    /**
     * Constructor for a new TablePersoController.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $TablePersoControllerSettings
    );
    /**
     * Constructor for a new TablePersoController.
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
      mSettings?: $TablePersoControllerSettings
    );

    /**
     * Creates a new subclass of class sap.ui.table.TablePersoController with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
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
      oClassInfo?: sap.ClassInfo<T, TablePersoController>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.table.TablePersoController.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ManagedObjectMetadata;
    /**
     * Gets current value of property {@link #getAutoSave autoSave}.
     *
     * Auto save state
     *
     * Default value is `true`.
     *
     * @returns Value of property `autoSave`
     */
    getAutoSave(): boolean;
    /**
     * Gets current value of property {@link #getCustomDataKey customDataKey}.
     *
     * By defining a custom data key the `TablePersoController` will try to get the key for saving the perso
     * data from the custom data of the Table and Column instead of creating it by concatenating the ID of the
     * Table and the Column. Basically this will be more stable than using the auto IDs.
     *
     * Default value is `"persoKey"`.
     *
     * @returns Value of property `customDataKey`
     */
    getCustomDataKey(): string;
    /**
     * Gets current value of property {@link #getPersoService persoService}.
     *
     * Personalization Service object. Needs to have the following methods:
     * 	 - getPersData() : `jQuery Promise` (http://api.jquery.com/promise/)
     * 	 - setPersData(oBundle) : `jQuery Promise` (http://api.jquery.com/promise/)
     * 	 - delPersData() : `jQuery Promise` (http://api.jquery.com/promise/)
     *
     * @returns Value of property `persoService`
     */
    getPersoService(): any;
    /**
     * Gets current value of property {@link #getResetAllMode resetAllMode}.
     *
     * Controls the behavior of the Reset button of the `TablePersoDialog`.
     *  The value must be specified in the constructor and cannot be set or modified later.
     *  If set to `Default`, the Reset button sets the table back to the initial state of the attached table
     * when the controller is activated.
     *  If set to `ServiceDefault`, the Reset button goes back to the initial settings of `persoService`.
     *  If set to `ServiceReset`, the Reset button calls the `getResetPersData` of the attached `persoService`
     * and uses it to reset the table.
     *
     *
     * Default value is `Default`.
     *
     * @returns Value of property `resetAllMode`
     */
    getResetAllMode(): ResetAllMode | keyof typeof ResetAllMode;
    /**
     * Gets current value of property {@link #getShowResetAll showResetAll}.
     *
     * Controls the visibility of the Reset button of the `TablePersoDialog`.
     *
     *
     * Default value is `true`.
     *
     * @returns Value of property `showResetAll`
     */
    getShowResetAll(): boolean;
    /**
     * ID of the element which is the current target of the association {@link #getTable table}, or `null`.
     */
    getTable(): ID;
    /**
     * @EXPERIMENTAL (since 1.21.2) - API might change / feature requires the sap.m library!
     *
     * Opens the personalization dialog for the Table to modify the visibility and the order of the columns.
     *
     * Using this functionality will require to load the sap.m library because the personalization dialog
     * is only available in this library for now.
     */
    openDialog(mSettings: object): void;
    /**
     * Refresh the personalizations (reloads data from service).
     *
     * @returns `jQuery Promise` which is resolved once the refresh is finished
     */
    refresh(): jQuery.Promise;
    /**
     * Saves the current personalization state.
     *
     * @returns `jQuery Promise` which is resolved once the save is finished
     */
    savePersonalizations(): jQuery.Promise;
    /**
     * Sets a new value for property {@link #getAutoSave autoSave}.
     *
     * Auto save state
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAutoSave(
      /**
       * New value for property `autoSave`
       */
      bAutoSave?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getCustomDataKey customDataKey}.
     *
     * By defining a custom data key the `TablePersoController` will try to get the key for saving the perso
     * data from the custom data of the Table and Column instead of creating it by concatenating the ID of the
     * Table and the Column. Basically this will be more stable than using the auto IDs.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"persoKey"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setCustomDataKey(
      /**
       * New value for property `customDataKey`
       */
      sCustomDataKey?: string
    ): this;
    /**
     * Sets a new value for property {@link #getPersoService persoService}.
     *
     * Personalization Service object. Needs to have the following methods:
     * 	 - getPersData() : `jQuery Promise` (http://api.jquery.com/promise/)
     * 	 - setPersData(oBundle) : `jQuery Promise` (http://api.jquery.com/promise/)
     * 	 - delPersData() : `jQuery Promise` (http://api.jquery.com/promise/)
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setPersoService(
      /**
       * New value for property `persoService`
       */
      oPersoService: any
    ): this;
    /**
     * Sets a new value for property {@link #getResetAllMode resetAllMode}.
     *
     * Controls the behavior of the Reset button of the `TablePersoDialog`.
     *  The value must be specified in the constructor and cannot be set or modified later.
     *  If set to `Default`, the Reset button sets the table back to the initial state of the attached table
     * when the controller is activated.
     *  If set to `ServiceDefault`, the Reset button goes back to the initial settings of `persoService`.
     *  If set to `ServiceReset`, the Reset button calls the `getResetPersData` of the attached `persoService`
     * and uses it to reset the table.
     *
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Default`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setResetAllMode(
      /**
       * New value for property `resetAllMode`
       */
      sResetAllMode?: ResetAllMode | keyof typeof ResetAllMode
    ): this;
    /**
     * Sets a new value for property {@link #getShowResetAll showResetAll}.
     *
     * Controls the visibility of the Reset button of the `TablePersoDialog`.
     *
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowResetAll(
      /**
       * New value for property `showResetAll`
       */
      bShowResetAll?: boolean
    ): this;
    /**
     * Sets the associated {@link #getTable table}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTable(
      /**
       * ID of an element which becomes the new target of this table association; alternatively, an element instance
       * may be given
       */
      oTable: ID | Table
    ): this;
  }

  export interface $TablePersoControllerSettings
    extends $ManagedObjectSettings {
    /**
     * Auto save state
     */
    autoSave?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Personalization Service object. Needs to have the following methods:
     * 	 - getPersData() : `jQuery Promise` (http://api.jquery.com/promise/)
     * 	 - setPersData(oBundle) : `jQuery Promise` (http://api.jquery.com/promise/)
     * 	 - delPersData() : `jQuery Promise` (http://api.jquery.com/promise/)
     */
    persoService?: any | PropertyBindingInfo | `{${string}}`;

    /**
     * By defining a custom data key the `TablePersoController` will try to get the key for saving the perso
     * data from the custom data of the Table and Column instead of creating it by concatenating the ID of the
     * Table and the Column. Basically this will be more stable than using the auto IDs.
     */
    customDataKey?: string | PropertyBindingInfo;

    /**
     * Controls the visibility of the Reset button of the `TablePersoDialog`.
     */
    showResetAll?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Controls the behavior of the Reset button of the `TablePersoDialog`.
     *  The value must be specified in the constructor and cannot be set or modified later.
     *  If set to `Default`, the Reset button sets the table back to the initial state of the attached table
     * when the controller is activated.
     *  If set to `ServiceDefault`, the Reset button goes back to the initial settings of `persoService`.
     *  If set to `ServiceReset`, the Reset button calls the `getResetPersData` of the attached `persoService`
     * and uses it to reset the table.
     */
    resetAllMode?:
      | (ResetAllMode | keyof typeof ResetAllMode)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * The target table of this controller.
     */
    table?: Table | string;
  }
}

declare module "sap/ui/table/TreeTable" {
  import { default as Table, $TableSettings } from "sap/ui/table/Table";

  import Event from "sap/ui/base/Event";

  import { ID } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Column from "sap/ui/table/Column";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * The TreeTable control provides a comprehensive set of features to display hierarchical data.
   */
  export default class TreeTable extends Table {
    /**
     * Constructor for a new TreeTable.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:08197fa68e4f479cbe30f639cc1cd22c sap.ui.table}
     * 	{@link topic:148892ff9aea4a18b912829791e38f3e Tables: Which One Should I Choose?}
     * 	{@link fiori:/tree-table/ Tree Table}
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $TreeTableSettings
    );
    /**
     * Constructor for a new TreeTable.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:08197fa68e4f479cbe30f639cc1cd22c sap.ui.table}
     * 	{@link topic:148892ff9aea4a18b912829791e38f3e Tables: Which One Should I Choose?}
     * 	{@link fiori:/tree-table/ Tree Table}
     */
    constructor(
      /**
       * id for the new control, generated automatically if no id is given
       */
      sId?: string,
      /**
       * initial settings for the new control
       */
      mSettings?: $TreeTableSettings
    );

    /**
     * Creates a new subclass of class sap.ui.table.TreeTable with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.table.Table.extend}.
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
      oClassInfo?: sap.ClassInfo<T, TreeTable>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.table.TreeTable.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds the given selection interval to the selection. In case of single selection, only `iIndexTo` is added
     * to the selection. Invisible nodes (collapsed child nodes) will not be regarded.
     *
     * Please also take notice of the fact, that "addSelectionInterval" does not change any other selection.
     * To override the current selection, please use "setSelectionInterval" or for a single entry use "setSelectedIndex".
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addSelectionInterval(
      /**
       * Index from which the selection should start
       */
      iIndexFrom: int,
      /**
       * Index up to which to select
       */
      iIndexTo: int
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:toggleOpenState toggleOpenState} event of this
     * `sap.ui.table.TreeTable`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.TreeTable` itself.
     *
     * Fired when a row has been expanded or collapsed by user interaction. Only available in hierarchical mode.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachToggleOpenState(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.table.TreeTable` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:toggleOpenState toggleOpenState} event of this
     * `sap.ui.table.TreeTable`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.table.TreeTable` itself.
     *
     * Fired when a row has been expanded or collapsed by user interaction. Only available in hierarchical mode.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachToggleOpenState(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.table.TreeTable` itself
       */
      oListener?: object
    ): this;
    /**
     * Collapses one or more rows.
     *
     * @returns `this` to allow method chaining
     */
    collapse(
      /**
       * A single index or an array of indices of the rows to be collapsed
       */
      vRowIndex: int | int[]
    ): this;
    /**
     * Collapses all nodes (and lower if collapseRecursive is activated)
     *
     * @returns `this` to allow method chaining
     */
    collapseAll(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:toggleOpenState toggleOpenState} event of
     * this `sap.ui.table.TreeTable`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachToggleOpenState(
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
     * Expands one or more rows.
     *
     * @returns `this` to allow method chaining
     */
    expand(
      /**
       * A single index or an array of indices of the rows to be expanded
       */
      vRowIndex: int | int[]
    ): this;
    /**
     * Expands all nodes starting from the root level to the given level 'iLevel'.
     *
     * Only supported with ODataModel v2, when running in OperationMode.Client. Fully supported for `sap.ui.model.ClientTreeBinding`,
     * e.g. if you are using a `sap.ui.model.json.JSONModel`.
     *
     * Please also see `sap.ui.model.odata.OperationMode`.
     *
     * @returns a reference on the TreeTable control, can be used for chaining
     */
    expandToLevel(
      /**
       * the level to which the trees shall be expanded
       */
      iLevel: int
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:toggleOpenState toggleOpenState} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireToggleOpenState(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Index of the expanded/collapsed row
         */
        rowIndex?: int;
        /**
         * Binding context of the expanded/collapsed row
         */
        rowContext?: object;
        /**
         * Flag that indicates whether the row has been expanded or collapsed
         */
        expanded?: boolean;
      }
    ): this;
    /**
     * @deprecated (since 1.76) - replaced by the `collapseRecursive` binding parameter. May not work with all
     * bindings.
     *
     * Gets current value of property {@link #getCollapseRecursive collapseRecursive}.
     *
     * Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will
     * also be collapsed. This property is only supported with sap.ui.model.odata.v2.ODataModel. **Note:** collapseRecursive
     * is currently **not** supported if your OData service exposes the hierarchy annotation `hierarchy-node-descendant-count-for`.
     * In this case the value of the collapseRecursive property is ignored. For more information about the OData
     * hierarchy annotations, please see the **SAP Annotations for OData Version 2.0** specification.
     *
     * Example:
     * ```javascript
     *
     *   oTable.bindRows({
     *     path: "...",
     *     parameters: {
     *       collapseRecursive: true
     *     }
     *   });
     * ```
     *
     *
     * Default value is `true`.
     *
     * @returns Value of property `collapseRecursive`
     */
    getCollapseRecursive(): boolean;
    /**
     * @deprecated (since 1.28)
     *
     * The property `enableGrouping` is not supported by the `TreeTable` control.
     */
    getEnableGrouping(): boolean;
    /**
     * @deprecated (since 1.46.3) - replaced by the `numberOfExpandedLevels` binding parameter. May not work
     * with all bindings.
     *
     * Gets current value of property {@link #getExpandFirstLevel expandFirstLevel}.
     *
     * Specifies whether the first level is expanded.
     *
     * The value of the property is only taken into account if no parameter `numberOfExpandedLevels` is given
     * in the binding information. Changes to this property after the table is bound do not have any effect
     * unless an explicit (re-)bind of the `rows` aggregation is done.
     *
     * Example:
     * ```javascript
     *
     *   oTable.bindRows({
     *     path: "...",
     *     parameters: {
     *       numberOfExpandedLevels: 1
     *     }
     *   });
     * ```
     *
     *
     * Default value is `false`.
     *
     * @returns Value of property `expandFirstLevel`
     */
    getExpandFirstLevel(): boolean;
    /**
     * @deprecated (since 1.28)
     *
     * The `groupBy` association is not supported by the `TreeTable` control.
     */
    getGroupBy(): ID;
    /**
     * Gets current value of property {@link #getGroupHeaderProperty groupHeaderProperty}.
     *
     * The property name of the rows data which will be displayed as a group header if the group mode is enabled
     *
     * @returns Value of property `groupHeaderProperty`
     */
    getGroupHeaderProperty(): string;
    /**
     * @deprecated (since 1.76) - replaced by the `rootLevel` binding parameter. May not work with all bindings.
     *
     * Gets current value of property {@link #getRootLevel rootLevel}.
     *
     * The root level is the level of the topmost tree nodes, which will be used as an entry point for OData
     * services. This property is only supported when the TreeTable uses an underlying odata services with hierarchy
     * annotations. This property is only supported with sap.ui.model.odata.v2.ODataModel The hierarchy annotations
     * may also be provided locally as a parameter for the ODataTreeBinding.
     *
     * Example:
     * ```javascript
     *
     *   oTable.bindRows({
     *     path: "...",
     *     parameters: {
     *       rootLevel: 1
     *     }
     *   });
     * ```
     *
     *
     * Default value is `0`.
     *
     * @returns Value of property `rootLevel`
     */
    getRootLevel(): int;
    /**
     * Returns an array containing the row indices of all selected tree nodes (ordered ascending).
     *
     * Please be aware of the following: Due to performance/network traffic reasons, the getSelectedIndices
     * function returns only all indices of actually selected rows/tree nodes. Unknown rows/nodes (as in "not
     * yet loaded" to the client), will not be returned.
     *
     * @returns an array containing all selected indices
     */
    getSelectedIndices(): int[];
    /**
     * Gets current value of property {@link #getUseGroupMode useGroupMode}.
     *
     * If group mode is enabled nodes with subitems are rendered as if they were group headers. This can be
     * used to do the grouping for an OData service on the backend and visualize this in a table.
     *
     * Default value is `false`.
     *
     * @returns Value of property `useGroupMode`
     */
    getUseGroupMode(): boolean;
    /**
     * Checks whether the row is expanded or collapsed.
     *
     * @returns `true` if the row is expanded, `false` if it is collapsed
     */
    isExpanded(
      /**
       * The index of the row to be checked
       */
      iRowIndex: int
    ): boolean;
    /**
     * Removes the given selection interval from the selection. In case of single selection, only `iIndexTo`
     * is removed from the selection. Invisible nodes (collapsed child nodes) will not be regarded.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    removeSelectionInterval(
      /**
       * Index from which the deselection should start
       */
      iIndexFrom: int,
      /**
       * Index up to which to deselect
       */
      iIndexTo: int
    ): this;
    /**
     * Selects all available nodes/rows.
     *
     * All rows/tree nodes that are locally stored on the client and that are part of the currently visible
     * tree are selected. Additional rows or tree nodes that come into view through scrolling or paging are
     * also selected immediately as soon as they get visible. However, `SelectAll` does not retrieve any data
     * from the back end in order to improve performance and reduce the network traffic.
     *
     * @returns a reference on the TreeTable control, can be used for chaining
     */
    selectAll(): this;
    /**
     * @deprecated (since 1.76) - replaced by the `collapseRecursive` binding parameter. May not work with all
     * bindings.
     *
     * Sets a new value for property {@link #getCollapseRecursive collapseRecursive}.
     *
     * Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will
     * also be collapsed. This property is only supported with sap.ui.model.odata.v2.ODataModel. **Note:** collapseRecursive
     * is currently **not** supported if your OData service exposes the hierarchy annotation `hierarchy-node-descendant-count-for`.
     * In this case the value of the collapseRecursive property is ignored. For more information about the OData
     * hierarchy annotations, please see the **SAP Annotations for OData Version 2.0** specification.
     *
     * Example:
     * ```javascript
     *
     *   oTable.bindRows({
     *     path: "...",
     *     parameters: {
     *       collapseRecursive: true
     *     }
     *   });
     * ```
     *
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setCollapseRecursive(
      /**
       * New value for property `collapseRecursive`
       */
      bCollapseRecursive?: boolean
    ): this;
    /**
     * @deprecated (since 1.28) - To get a group-like visualization the `useGroupMode` property can be used.
     *
     * The property `enableGrouping` is not supported by the `TreeTable` control.
     * See:
     * 	sap.ui.table.TreeTable#setUseGroupMode
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableGrouping(bValue: boolean): this;
    /**
     * @deprecated (since 1.46.3) - replaced by the `numberOfExpandedLevels` binding parameter. May not work
     * with all bindings.
     *
     * Sets a new value for property {@link #getExpandFirstLevel expandFirstLevel}.
     *
     * Specifies whether the first level is expanded.
     *
     * The value of the property is only taken into account if no parameter `numberOfExpandedLevels` is given
     * in the binding information. Changes to this property after the table is bound do not have any effect
     * unless an explicit (re-)bind of the `rows` aggregation is done.
     *
     * Example:
     * ```javascript
     *
     *   oTable.bindRows({
     *     path: "...",
     *     parameters: {
     *       numberOfExpandedLevels: 1
     *     }
     *   });
     * ```
     *
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setExpandFirstLevel(
      /**
       * New value for property `expandFirstLevel`
       */
      bExpandFirstLevel?: boolean
    ): this;
    /**
     * Setter for property `fixedRowCount`.
     *
     * **This property is not supportd for the TreeTable and will be ignored!**
     *
     * Default value is `0`
     *
     * @returns `this` to allow method chaining
     */
    setFixedRowCount(
      /**
       * New value for property `fixedRowCount`
       */
      iRowCount: int
    ): this;
    /**
     * @deprecated (since 1.28)
     *
     * The `groupBy` association is not supported by the `TreeTable` control.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setGroupBy(oColumn: Column | ID): this;
    /**
     * Sets a new value for property {@link #getGroupHeaderProperty groupHeaderProperty}.
     *
     * The property name of the rows data which will be displayed as a group header if the group mode is enabled
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setGroupHeaderProperty(
      /**
       * New value for property `groupHeaderProperty`
       */
      sGroupHeaderProperty?: string
    ): this;
    /**
     * @deprecated (since 1.76) - replaced by the `rootLevel` binding parameter. May not work with all bindings.
     *
     * Sets a new value for property {@link #getRootLevel rootLevel}.
     *
     * The root level is the level of the topmost tree nodes, which will be used as an entry point for OData
     * services. This property is only supported when the TreeTable uses an underlying odata services with hierarchy
     * annotations. This property is only supported with sap.ui.model.odata.v2.ODataModel The hierarchy annotations
     * may also be provided locally as a parameter for the ODataTreeBinding.
     *
     * Example:
     * ```javascript
     *
     *   oTable.bindRows({
     *     path: "...",
     *     parameters: {
     *       rootLevel: 1
     *     }
     *   });
     * ```
     *
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setRootLevel(
      /**
       * New value for property `rootLevel`
       */
      iRootLevel?: int
    ): this;
    /**
     * Sets the selected index In a TreeTable you can only select indices, which correspond to the currently
     * visualized tree. Invisible tree nodes (e.g. collapsed child nodes) can not be selected via Index, because
     * they do not correspond to a TreeTable row.
     *
     * @returns a reference on the TreeTable control, can be used for chaining
     */
    setSelectedIndex(
      /**
       * The row index which will be selected (if existing)
       */
      iRowIndex: int
    ): this;
    /**
     * Sets the selection of the TreeTable to the given range (including boundaries). Beware: The previous selection
     * will be lost/overridden. If this is not wanted, please use "addSelectionInterval" and "removeSelectionInterval".
     * Please be aware, that the absolute row index only applies to the tree which is visualized by the TreeTable.
     *
     * @returns a reference on the TreeTable control, can be used for chaining
     */
    setSelectionInterval(
      /**
       * the start index of the selection range
       */
      iFromIndex: int,
      /**
       * the end index of the selection range
       */
      iToIndex: int
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Allows to hide the tree structure (tree icons, indentation) in tree mode (property `useGroupMode` is
     * set to `false`).
     *
     * This option might be useful in some scenarios when actually a tree table must be used but under certain
     * conditions the data is not hierarchical, because it contains leafs only.
     *
     * **Note:** In flat mode the user of the table cannot expand or collapse certain nodes and the hierarchy
     * is not visible to the user. The caller of this function has to ensure to use this option only with non-hierarchical
     * data.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setUseFlatMode(
      /**
       * If set to `true`, the flat mode is enabled
       */
      bFlat: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getUseGroupMode useGroupMode}.
     *
     * If group mode is enabled nodes with subitems are rendered as if they were group headers. This can be
     * used to do the grouping for an OData service on the backend and visualize this in a table.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setUseGroupMode(
      /**
       * New value for property `useGroupMode`
       */
      bUseGroupMode?: boolean
    ): this;
  }

  export interface $TreeTableSettings extends $TableSettings {
    /**
     * @deprecated (since 1.46.3) - replaced by the `numberOfExpandedLevels` binding parameter. May not work
     * with all bindings.
     *
     * Specifies whether the first level is expanded.
     *
     * The value of the property is only taken into account if no parameter `numberOfExpandedLevels` is given
     * in the binding information. Changes to this property after the table is bound do not have any effect
     * unless an explicit (re-)bind of the `rows` aggregation is done.
     *
     * Example:
     * ```javascript
     *
     *   oTable.bindRows({
     *     path: "...",
     *     parameters: {
     *       numberOfExpandedLevels: 1
     *     }
     *   });
     * ```
     */
    expandFirstLevel?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If group mode is enabled nodes with subitems are rendered as if they were group headers. This can be
     * used to do the grouping for an OData service on the backend and visualize this in a table.
     */
    useGroupMode?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The property name of the rows data which will be displayed as a group header if the group mode is enabled
     */
    groupHeaderProperty?: string | PropertyBindingInfo;

    /**
     * @deprecated (since 1.76) - replaced by the `collapseRecursive` binding parameter. May not work with all
     * bindings.
     *
     * Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will
     * also be collapsed. This property is only supported with sap.ui.model.odata.v2.ODataModel. **Note:** collapseRecursive
     * is currently **not** supported if your OData service exposes the hierarchy annotation `hierarchy-node-descendant-count-for`.
     * In this case the value of the collapseRecursive property is ignored. For more information about the OData
     * hierarchy annotations, please see the **SAP Annotations for OData Version 2.0** specification.
     *
     * Example:
     * ```javascript
     *
     *   oTable.bindRows({
     *     path: "...",
     *     parameters: {
     *       collapseRecursive: true
     *     }
     *   });
     * ```
     */
    collapseRecursive?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @deprecated (since 1.76) - replaced by the `rootLevel` binding parameter. May not work with all bindings.
     *
     * The root level is the level of the topmost tree nodes, which will be used as an entry point for OData
     * services. This property is only supported when the TreeTable uses an underlying odata services with hierarchy
     * annotations. This property is only supported with sap.ui.model.odata.v2.ODataModel The hierarchy annotations
     * may also be provided locally as a parameter for the ODataTreeBinding.
     *
     * Example:
     * ```javascript
     *
     *   oTable.bindRows({
     *     path: "...",
     *     parameters: {
     *       rootLevel: 1
     *     }
     *   });
     * ```
     */
    rootLevel?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Fired when a row has been expanded or collapsed by user interaction. Only available in hierarchical mode.
     */
    toggleOpenState?: (oEvent: Event) => void;
  }
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/ui/table/AnalyticalColumn": undefined;

    "sap/ui/table/AnalyticalColumnMenu": undefined;

    "sap/ui/table/AnalyticalTable": undefined;

    "sap/ui/table/Column": undefined;

    "sap/ui/table/ColumnMenu": undefined;

    "sap/ui/table/CreationRow": undefined;

    "sap/ui/table/library": undefined;

    "sap/ui/table/plugins/MultiSelectionPlugin": undefined;

    "sap/ui/table/plugins/SelectionPlugin": undefined;

    "sap/ui/table/Row": undefined;

    "sap/ui/table/RowAction": undefined;

    "sap/ui/table/RowActionItem": undefined;

    "sap/ui/table/rowmodes/AutoRowMode": undefined;

    "sap/ui/table/rowmodes/FixedRowMode": undefined;

    "sap/ui/table/rowmodes/InteractiveRowMode": undefined;

    "sap/ui/table/rowmodes/RowMode": undefined;

    "sap/ui/table/RowSettings": undefined;

    "sap/ui/table/Table": undefined;

    "sap/ui/table/TablePersoController": undefined;

    "sap/ui/table/TreeTable": undefined;
  }
}
