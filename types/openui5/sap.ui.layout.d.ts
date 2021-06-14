// For Library Version: 1.90.0

declare module "sap/ui/layout/library" {
  import Control from "sap/ui/core/Control";

  import GridLayoutBase from "sap/ui/layout/cssgrid/GridLayoutBase";

  /**
   * @SINCE 1.36.0
   *
   * Available Background Design.
   */
  export enum BackgroundDesign {
    /**
     * A solid background color dependent on the theme.
     */
    Solid = "Solid",
    /**
     * A translucent background depending on the opacity value of the theme.
     */
    Translucent = "Translucent",
    /**
     * Transparent background.
     */
    Transparent = "Transparent",
  }
  /**
   * A string type that is used inside the BlockLayout to set predefined background color to the cells inside
   * the control.
   */
  export enum BlockBackgroundType {
    /**
     * Background with pre-defined accent colors
     */
    Accent = "Accent",
    /**
     * For applications that want to make use of e.g. charts in the Blocks, this layout type has spacings around
     * the Blocks
     */
    Dashboard = "Dashboard",
    /**
     * Background is transparent
     */
    Default = "Default",
    /**
     * Background is with predefined light colors
     */
    Light = "Light",
    /**
     * @deprecated (since 1.50)
     *
     * Background with bright and dark background colors
     */
    Mixed = "Mixed",
  }
  /**
   * @SINCE 1.48
   *
   * A string type that is used inside the BlockLayoutCell to set a predefined set of colors for the cells.
   */
  export enum BlockLayoutCellColorSet {
    /**
     * Color Set 1
     */
    ColorSet1 = "ColorSet1",
    /**
     * Color Set 10
     */
    ColorSet10 = "ColorSet10",
    /**
     * Color Set 11
     */
    ColorSet11 = "ColorSet11",
    /**
     * Color Set 2
     */
    ColorSet2 = "ColorSet2",
    /**
     * Color Set 3
     */
    ColorSet3 = "ColorSet3",
    /**
     * Color Set 4
     */
    ColorSet4 = "ColorSet4",
    /**
     * Color Set 5
     */
    ColorSet5 = "ColorSet5",
    /**
     * Color Set 6
     */
    ColorSet6 = "ColorSet6",
    /**
     * Color Set 7
     */
    ColorSet7 = "ColorSet7",
    /**
     * Color Set 8
     */
    ColorSet8 = "ColorSet8",
    /**
     * Color Set 9
     */
    ColorSet9 = "ColorSet9",
  }
  /**
   * @SINCE 1.48
   *
   * A string type that is used inside the BlockLayoutCell to set a predefined set of color shades for the
   * cells. The colors are defined with sap.ui.layout.BlockLayoutCellColorSet. And this is for the shades
   * only.
   */
  export enum BlockLayoutCellColorShade {
    /**
     * Shade A
     */
    ShadeA = "ShadeA",
    /**
     * Shade B
     */
    ShadeB = "ShadeB",
    /**
     * Shade C
     */
    ShadeC = "ShadeC",
    /**
     * Shade D
     */
    ShadeD = "ShadeD",
    /**
     * Shade E - available only for Fiori 3 theme
     */
    ShadeE = "ShadeE",
    /**
     * Shade F - available only for Fiori 3 theme
     */
    ShadeF = "ShadeF",
  }
  /**
   * A string type that is used inside the BlockLayoutRow to set predefined set of colors the cells inside
   * the control. Color sets depend on sap.ui.layout.BlockBackgroundType
   */
  export enum BlockRowColorSets {
    /**
     * sap.ui.layout.BlockBackgroundType.Default: N/A sap.ui.layout.BlockBackgroundType.Light: Color Set 1 sap.ui.layout.BlockBackgroundType.Mixed:
     * Color Set 1 sap.ui.layout.BlockBackgroundType.Accent: Color Set 1 sap.ui.layout.BlockBackgroundType.Dashboard:
     * N/A
     */
    ColorSet1 = "ColorSet1",
    /**
     * sap.ui.layout.BlockBackgroundType.Default: N/A sap.ui.layout.BlockBackgroundType.Light: Color Set 2 sap.ui.layout.BlockBackgroundType.Mixed:
     * Color Set 2 sap.ui.layout.BlockBackgroundType.Accent: Color Set 2 sap.ui.layout.BlockBackgroundType.Dashboard:
     * N/A
     */
    ColorSet2 = "ColorSet2",
    /**
     * sap.ui.layout.BlockBackgroundType.Default: N/A sap.ui.layout.BlockBackgroundType.Light: Color Set 1 sap.ui.layout.BlockBackgroundType.Mixed:
     * Color Set 1 sap.ui.layout.BlockBackgroundType.Accent: Color Set 3 sap.ui.layout.BlockBackgroundType.Dashboard:
     * N/A
     */
    ColorSet3 = "ColorSet3",
    /**
     * sap.ui.layout.BlockBackgroundType.Default: N/A sap.ui.layout.BlockBackgroundType.Light: Color Set 2 sap.ui.layout.BlockBackgroundType.Mixed:
     * Color Set 2 sap.ui.layout.BlockBackgroundType.Accent: Color Set 4 sap.ui.layout.BlockBackgroundType.Dashboard:
     * N/A
     */
    ColorSet4 = "ColorSet4",
  }
  /**
   * @SINCE 1.61.0
   *
   * A string type that represents how many boxes per row should be displayed for each screen size. The breakpoints
   * are for extra large (XL), large (L), medium (M) and small (S) screen sizes.
   *
   * **Note:** The parameters must be provided in the order .
   */
  export type BoxesPerRowConfig = string;

  /**
   * A string type that represents the indent values of the `Grid` for large, medium and small screens.
   *
   * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 11 that
   * the container has to take, for example: `L2 M4 S6`, `M11`, `s10` or `l4 m4`.
   *
   * **Note:** The parameters must be provided in the order .
   */
  export type GridIndent = string;

  /**
   * The position of the {@link sap.ui.layout.Grid}. Can be `Left` (default), `Center` or `Right`.
   */
  export enum GridPosition {
    /**
     * `Grid` is centered on the screen.
     */
    Center = "Center",
    /**
     * `Grid` is aligned left.
     */
    Left = "Left",
    /**
     * `Grid` is aligned to the right.
     */
    Right = "Right",
  }
  /**
   * A string type that represents the span values of the `Grid` for large, medium and small screens.
   *
   * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that
   * the container has to take, for example: `L2 M4 S6`, `M12`, `s10` or `l4 m4`.
   *
   * **Note:** The parameters must be provided in the order .
   */
  export type GridSpan = string;

  /**
   * @SINCE 1.30
   *
   * Types of the DynamicSideContent FallDown options
   */
  export enum SideContentFallDown {
    /**
     * Side content falls down on breakpoints below L
     */
    BelowL = "BelowL",
    /**
     * Side content falls down on breakpoints below M
     */
    BelowM = "BelowM",
    /**
     * Side content falls down on breakpoints below XL
     */
    BelowXL = "BelowXL",
    /**
     * Side content falls down on breakpoint M and the minimum width for the side content
     */
    OnMinimumWidth = "OnMinimumWidth",
  }
  /**
   * The position of the side content - End (default) and Begin.
   */
  export enum SideContentPosition {
    /**
     * The side content is on the left side of the main container in left-to-right mode and on the right side
     * in right-to-left mode.
     */
    Begin = "Begin",
    /**
     * The side content is on the right side of the main container in left-to-right mode and on the left side
     * in right-to-left mode.
     */
    End = "End",
  }
  /**
   * @SINCE 1.30
   *
   * Types of the DynamicSideContent Visibility options
   */
  export enum SideContentVisibility {
    /**
     * Show the side content on any breakpoint
     */
    AlwaysShow = "AlwaysShow",
    /**
     * Don't show the side content on any breakpoints
     */
    NeverShow = "NeverShow",
    /**
     * Show the side content on XL breakpoint
     */
    ShowAboveL = "ShowAboveL",
    /**
     * Show the side content on L and XL breakpoints
     */
    ShowAboveM = "ShowAboveM",
    /**
     * Show the side content on M, L and XL breakpoints
     */
    ShowAboveS = "ShowAboveS",
  }

  export namespace cssgrid {
    /**
     * @SINCE 1.60.0
     *
     * Defines the functions that need to be implemented by a Control which wants to have display:grid behavior
     * via sap.ui.layout.cssgrid.GridLayoutDelegate
     */
    interface IGridConfigurable {
      __implements__sap_ui_layout_cssgrid_IGridConfigurable: boolean;

      /**
       * @SINCE 1.60.0
       *
       * The function is used by GridLayoutDelegate to determine on which HTML Elements the display:grid styles
       * should be applied
       */
      getGridDomRefs(): Control[] | HTMLElement[];
      /**
       * @SINCE 1.60.0
       *
       * The function is used by GridLayoutDelegate to get the grid layout (display:grid styles) to apply
       */
      getGridLayoutConfiguration(): GridLayoutBase;
    }

    /**
     * @SINCE 1.88.0
     *
     * LayoutData for grid items
     */
    interface IGridItemLayoutData {
      __implements__sap_ui_layout_cssgrid_IGridItemLayoutData: boolean;
    }

    /**
     * @SINCE 1.60.0
     *
     * A string type that is used for CSS grid to control how the auto-placement algorithm works, specifying
     * exactly how auto-placed items get flowed into the grid.
     * See:
     * 	{@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow}
     */
    enum CSSGridAutoFlow {
      /**
       * Insert auto-placed items by filling each column.
       */
      Column = "Column",
      /**
       * Insert auto-placed items by filling each column, and fill any holes in the grid.
       */
      ColumnDense = "ColumnDense",
      /**
       * Insert auto-placed items by filling each row.
       */
      Row = "Row",
      /**
       * Insert auto-placed items by filling each row, and fill any holes in the grid.
       */
      RowDense = "RowDense",
    }
    /**
     * @SINCE 1.60.0
     *
     * A string type that represents a short hand CSS grid gap.
     * See:
     * 	{@link https://developer.mozilla.org/en-US/docs/Web/CSS/gap}
     */
    type CSSGridGapShortHand = string;

    /**
     * @SINCE 1.60.0
     *
     * A string type that represents one or two grid lines. Used to define the position and size of a single
     * grid item.
     *
     * Valid values:
     * 	 - auto
     * 	 - inherit
     * 	 - 1
     * 	 - span 2
     * 	 - span 2 / 5
     * 	 - span 2 / -5
     * 	 - 5 / 7
     * 	 - 7 / span 5
     * 	 - span 7 / span 5
     * See:
     * 	{@link https://developer.mozilla.org/en-US/docs/Glossary/Grid_lines MDN web docs: grid lines}
     */
    type CSSGridLine = string;

    /**
     * @SINCE 1.60.0
     *
     * A string type that represents a grid track (the space between two grid lines)
     * See:
     * 	{@link https://developer.mozilla.org/en-US/docs/Glossary/Grid_tracks}
     */
    type CSSGridTrack = string;
  }

  export namespace form {
    /**
     * @SINCE 1.16.0
     *
     * Available `FormLayouts` used to render a `SimpleForm`.
     */
    enum SimpleFormLayout {
      /**
       * @SINCE 1.56.0
       *
       * Uses the `ColumnLayout` layout to render the `SimpleForm` control
       */
      ColumnLayout = "ColumnLayout",
      /**
       * Uses the `GridLayout` layout to render the `SimpleForm` control
       */
      GridLayout = "GridLayout",
      /**
       * @SINCE 1.16.0
       *
       * Uses the `ResponsiveGridLayout` layout to render the `SimpleForm` control
       */
      ResponsiveGridLayout = "ResponsiveGridLayout",
      /**
       * Uses the `ResponsiveLayout` layout to render the `SimpleForm` control
       */
      ResponsiveLayout = "ResponsiveLayout",
    }
    /**
     * @SINCE 1.56.0
     *
     * An `int` type that defines how many cells a control inside of a column of a `Form` control using the
     * `ColumnLayout` control as layout can use.
     *
     * Allowed values are numbers from 1 to 12 and -1. -1 means the value is calculated.
     */
    type ColumnCells = int;

    /**
     * @SINCE 1.56.0
     *
     * An `int` type that defines how many columns a `Form` control using the `ColumnLayout` as layout can have
     * if it has large size
     *
     * Allowed values are numbers from 1 to 3.
     */
    type ColumnsL = int;

    /**
     * @SINCE 1.56.0
     *
     * An `int` type that defines how many columns a `Form` control using the `ColumnLayout` as layout can have
     * if it has medium size
     *
     * Allowed values are numbers from 1 to 2.
     */
    type ColumnsM = int;

    /**
     * @SINCE 1.56.0
     *
     * An `int` type that defines how many columns a `Form` control using the `ColumnLayout` as layout can have
     * if it has extra-large size
     *
     * Allowed values are numbers from 1 to 6. **Note:** In versions lower than 1.89 only 4 columns are allowed.
     */
    type ColumnsXL = int;

    /**
     * @SINCE 1.56.0
     *
     * An `int` type that defines how many cells beside the controls inside of a column of a `Form` control
     * using the `ColumnLayout` control as layout are empty.
     *
     * Allowed values are numbers from 0 to 11.
     */
    type EmptyCells = int;

    /**
     * A string that defines the number of used cells in a `GridLayout`. This can be a number from 1 to 16,
     * "auto" or "full". If set to "auto" the size is determined by the number of fields and the available cells.
     * For labels the auto size is 3 cells. If set to "full" only one field is allowed within the `FormElement`.
     * It gets the full width of the row and the label is displayed above. **Note:** For labels full size has
     * no effect.
     */
    type GridElementCells = string;
  }
}

declare module "sap/ui/layout/BlockLayout" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import BlockLayoutRow from "sap/ui/layout/BlockLayoutRow";

  import { BlockBackgroundType } from "sap/ui/layout/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.34
   *
   * The BlockLayout is used to display several objects in a section-based manner. Overview: The BlockLayout
   * uses horizontal and vertical subdivisions, and full-width banners to display a set of elements. By placing
   * pictorial and textual elements side-by-side in different blocks, you can establish a visual connection
   * between blocks and between similar elements. Structure: The BlockLayout contains BlockLayout cells. Every
   * cell consists of a title and content. The title can be text or a link.
   *
   * Special full-width sections of the BlockLayout allow horizontal scrolling through a set of blocks.
   *
   * The BlockLayout comes in five predefined types for background colors:
   * 	 - Layout only (default) - a layout scheme and no background colors
   * 	 - Light - a layout scheme with light colors
   * 	 - Accent - a layout scheme with 11 pre-defined color sets
   * 	 - Dashboard - a layout scheme with additional borders and no background colors  Background colors
   * 			are attached directly to the blocks of the layout.
   *
   * **Note:** With version 1.48 colors can be set for each individual {@link sap.ui.layout.BlockLayoutCell
   * cell}. There are 11 pre-defined color sets, each with 4 different shades for the Belize theme and 6 different
   * shades for the Fiori 3 theme. The main colors of the sets can be changed in Theme Designer. To change
   * the background of a particular cell, set `backgroundColorSet` (main color) and `backgroundColorShade`
   * (shade).
   *
   * **Note:** Usage of disabled, emphasized or subtle links as titles is not recommended. Dark background
   * designs, for example Accent, are not fully supported with regards to Accessibility when used with links
   * as titles.
   *
   * Usage: When to use:
   * 	 - You want to create a catalogue-like page with sections of blocks.
   * 	 - The BlockLayout is intended for developing administrative tools and applications.  When not
   * 			to use:
   * 	 - You want to display properties or features of one content item. Use a {@link sap.uxap.ObjectPageLayout
   * 			object page} or {@link sap.f.DynamicPage dynamic page} instead.  Responsive Behavior:
   * 	 - The breakpoints of the block layout react to the width of the control itself and not to the actual
   * 			screen size.
   * 	 -  On small screens all blocks will wrap to a single scrollable column
   */
  export default class BlockLayout extends Control {
    /**
     * Constructor for a new BlockLayout.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/block-layout/ Block Layout}
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $BlockLayoutSettings
    );
    /**
     * Constructor for a new BlockLayout.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/block-layout/ Block Layout}
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $BlockLayoutSettings
    );

    /**
     * Adds some content to the aggregation {@link #getContent content}.
     */
    addContent(
      /**
       * The content to add; if empty, nothing is inserted
       */
      oContent: BlockLayoutRow
    ): this;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     */
    destroyContent(): this;
    /**
     * Creates a new subclass of class sap.ui.layout.BlockLayout with name `sClassName` and enriches it with
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
      oClassInfo?: sap.ClassInfo<T, BlockLayout>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @SINCE 1.42
     *
     * Gets current value of property {@link #getBackground background}.
     *
     * Determines the background used for the Layout
     *
     * Default value is `"Default"`.
     */
    getBackground(): BlockBackgroundType | keyof typeof BlockBackgroundType;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * The Rows to be included in the content of the control
     */
    getContent(): BlockLayoutRow[];
    /**
     * @SINCE 1.52
     *
     * Gets current value of property {@link #getKeepFontSize keepFontSize}.
     *
     * Keeps the font-size of the contents as is, independent from the screen size.
     *
     * Default value is `false`.
     */
    getKeepFontSize(): boolean;
    /**
     * Returns a metadata object for class sap.ui.layout.BlockLayout.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Checks for the provided `sap.ui.layout.BlockLayoutRow` in the aggregation {@link #getContent content}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfContent(
      /**
       * The content whose index is looked for
       */
      oContent: BlockLayoutRow
    ): int;
    /**
     * Inserts a content into the aggregation {@link #getContent content}.
     */
    insertContent(
      /**
       * The content to insert; if empty, nothing is inserted
       */
      oContent: BlockLayoutRow,
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
    removeAllContent(): BlockLayoutRow[];
    /**
     * Removes a content from the aggregation {@link #getContent content}.
     */
    removeContent(
      /**
       * The content to remove or its index or id
       */
      vContent: int | string | BlockLayoutRow
    ): BlockLayoutRow;
    /**
     * @SINCE 1.42
     *
     * Sets a new value for property {@link #getBackground background}.
     *
     * Determines the background used for the Layout
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Default"`.
     */
    setBackground(
      /**
       * New value for property `background`
       */
      sBackground?: BlockBackgroundType | keyof typeof BlockBackgroundType
    ): this;
    /**
     * @SINCE 1.52
     *
     * Sets a new value for property {@link #getKeepFontSize keepFontSize}.
     *
     * Keeps the font-size of the contents as is, independent from the screen size.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setKeepFontSize(
      /**
       * New value for property `keepFontSize`
       */
      bKeepFontSize?: boolean
    ): this;
  }

  export interface $BlockLayoutSettings extends $ControlSettings {
    /**
     * @SINCE 1.42
     *
     * Determines the background used for the Layout
     */
    background?:
      | (BlockBackgroundType | keyof typeof BlockBackgroundType)
      | PropertyBindingInfo;

    /**
     * @SINCE 1.52
     *
     * Keeps the font-size of the contents as is, independent from the screen size.
     */
    keepFontSize?: boolean | PropertyBindingInfo;

    /**
     * The Rows to be included in the content of the control
     */
    content?: BlockLayoutRow[] | BlockLayoutRow | AggregationBindingInfo;
  }
}

declare module "sap/ui/layout/BlockLayoutCell" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import {
    BlockLayoutCellColorSet,
    BlockLayoutCellColorShade,
  } from "sap/ui/layout/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { HorizontalAlign, TitleLevel } from "sap/ui/core/library";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.34
   *
   * The BlockLayoutCell is used as an aggregation of the BlockLayoutRow. It contains Controls. The BlockLayoutCell
   * should be used only as aggregation of the BlockLayoutRow.
   */
  export default class BlockLayoutCell extends Control {
    /**
     * Constructor for a new BlockLayoutCell.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $BlockLayoutCellSettings
    );
    /**
     * Constructor for a new BlockLayoutCell.
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
      mSettings?: $BlockLayoutCellSettings
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
     * @SINCE 1.56
     *
     * Destroys the titleLink in the aggregation {@link #getTitleLink titleLink}.
     */
    destroyTitleLink(): this;
    /**
     * Creates a new subclass of class sap.ui.layout.BlockLayoutCell with name `sClassName` and enriches it
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
      oClassInfo?: sap.ClassInfo<T, BlockLayoutCell>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @SINCE 1.48
     *
     * Gets current value of property {@link #getBackgroundColorSet backgroundColorSet}.
     *
     * The Background color set from which the background color will be selected. By using background colors
     * from the predefined sets your colors could later be customized from the Theme Designer. **Note:** backgroundColorSet
     * should be used only in combination with backgroundColorShade.
     */
    getBackgroundColorSet():
      | BlockLayoutCellColorSet
      | keyof typeof BlockLayoutCellColorSet;
    /**
     * @SINCE 1.48
     *
     * Gets current value of property {@link #getBackgroundColorShade backgroundColorShade}.
     *
     * The index of the background color in the color set from which the color will be selected. By using background
     * colors from the predefined sets your colors could later be customized from the Theme Designer. **Note:**
     * backgroundColorShade should be used only in combination with backgroundColorSet.
     */
    getBackgroundColorShade():
      | BlockLayoutCellColorShade
      | keyof typeof BlockLayoutCellColorShade;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * The content to be included inside the cell
     */
    getContent(): Control[];
    /**
     * Returns a metadata object for class sap.ui.layout.BlockLayoutCell.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getTitle title}.
     *
     * Defines the title of the cell. **Note:** When the `titleLink` aggregation is provided, the title of the
     * cell will be replaced with the text from the `titleLink`.
     */
    getTitle(): string;
    /**
     * Gets current value of property {@link #getTitleAlignment titleAlignment}.
     *
     * Defines the alignment of the cell title
     *
     * Default value is `"Begin"`.
     */
    getTitleAlignment(): HorizontalAlign | keyof typeof HorizontalAlign;
    /**
     * Gets current value of property {@link #getTitleLevel titleLevel}.
     *
     * Defines the aria level of the title This information is e.g. used by assistive technologies like screenreaders
     * to create a hierarchical site map for faster navigation.
     *
     * Default value is `"Auto"`.
     */
    getTitleLevel(): TitleLevel | keyof typeof TitleLevel;
    /**
     * @SINCE 1.56
     *
     * Gets content of aggregation {@link #getTitleLink titleLink}.
     *
     * The link that will replace the title of the cell. **Note:** The only possible value is the `sap.m.Link`
     * control.
     */
    getTitleLink(): Control;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Defines the width of the cell. Depending on the context of the cell - whether it's in scrollable, or
     * non scrollable row, this property is interpreted in two different ways. If the cell is placed inside
     * a scrollable row - this property defines the width of the cell in percentages. If no value is provided
     * - the default is 40%. If the cell is placed inside a non scrollable row - this property defines the grow
     * factor of the cell compared to the whole row. **For example:** If you have 2 cells, each with width of
     * 1, this means that they should be of equal size, and they need to fill the whole row. This results in
     * 50% width for each cell. If you have 2 cells, one with width of 1, the other with width of 3, this means
     * that the whole row width is 4, so the first cell will have a width of 25%, the second - 75%. According
     * to the visual guidelines, it is suggested that you only use 25%, 50%, 75% or 100% cells in you applications.
     * For example, 12,5% width is not desirable (1 cell with width 1, and another with width 7)
     *
     * Default value is `0`.
     */
    getWidth(): int;
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
     * @SINCE 1.48
     *
     * Sets a new value for property {@link #getBackgroundColorSet backgroundColorSet}.
     *
     * The Background color set from which the background color will be selected. By using background colors
     * from the predefined sets your colors could later be customized from the Theme Designer. **Note:** backgroundColorSet
     * should be used only in combination with backgroundColorShade.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setBackgroundColorSet(
      /**
       * New value for property `backgroundColorSet`
       */
      sBackgroundColorSet:
        | BlockLayoutCellColorSet
        | keyof typeof BlockLayoutCellColorSet
    ): this;
    /**
     * @SINCE 1.48
     *
     * Sets a new value for property {@link #getBackgroundColorShade backgroundColorShade}.
     *
     * The index of the background color in the color set from which the color will be selected. By using background
     * colors from the predefined sets your colors could later be customized from the Theme Designer. **Note:**
     * backgroundColorShade should be used only in combination with backgroundColorSet.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setBackgroundColorShade(
      /**
       * New value for property `backgroundColorShade`
       */
      sBackgroundColorShade:
        | BlockLayoutCellColorShade
        | keyof typeof BlockLayoutCellColorShade
    ): this;
    /**
     * Sets a new value for property {@link #getTitle title}.
     *
     * Defines the title of the cell. **Note:** When the `titleLink` aggregation is provided, the title of the
     * cell will be replaced with the text from the `titleLink`.
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
     * Sets a new value for property {@link #getTitleAlignment titleAlignment}.
     *
     * Defines the alignment of the cell title
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Begin"`.
     */
    setTitleAlignment(
      /**
       * New value for property `titleAlignment`
       */
      sTitleAlignment?: HorizontalAlign | keyof typeof HorizontalAlign
    ): this;
    /**
     * Sets a new value for property {@link #getTitleLevel titleLevel}.
     *
     * Defines the aria level of the title This information is e.g. used by assistive technologies like screenreaders
     * to create a hierarchical site map for faster navigation.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Auto"`.
     */
    setTitleLevel(
      /**
       * New value for property `titleLevel`
       */
      sTitleLevel?: TitleLevel | keyof typeof TitleLevel
    ): this;
    /**
     * @SINCE 1.56
     *
     * Sets the aggregated {@link #getTitleLink titleLink}.
     */
    setTitleLink(
      /**
       * The titleLink to set
       */
      oTitleLink: Control
    ): this;
    /**
     * Sets the Width.
     */
    setWidth(
      /**
       * value.
       */
      iWidth: number
    ): this;
  }

  export interface $BlockLayoutCellSettings extends $ControlSettings {
    /**
     * Defines the title of the cell. **Note:** When the `titleLink` aggregation is provided, the title of the
     * cell will be replaced with the text from the `titleLink`.
     */
    title?: string | PropertyBindingInfo;

    /**
     * Defines the alignment of the cell title
     */
    titleAlignment?:
      | (HorizontalAlign | keyof typeof HorizontalAlign)
      | PropertyBindingInfo;

    /**
     * Defines the aria level of the title This information is e.g. used by assistive technologies like screenreaders
     * to create a hierarchical site map for faster navigation.
     */
    titleLevel?: (TitleLevel | keyof typeof TitleLevel) | PropertyBindingInfo;

    /**
     * Defines the width of the cell. Depending on the context of the cell - whether it's in scrollable, or
     * non scrollable row, this property is interpreted in two different ways. If the cell is placed inside
     * a scrollable row - this property defines the width of the cell in percentages. If no value is provided
     * - the default is 40%. If the cell is placed inside a non scrollable row - this property defines the grow
     * factor of the cell compared to the whole row. **For example:** If you have 2 cells, each with width of
     * 1, this means that they should be of equal size, and they need to fill the whole row. This results in
     * 50% width for each cell. If you have 2 cells, one with width of 1, the other with width of 3, this means
     * that the whole row width is 4, so the first cell will have a width of 25%, the second - 75%. According
     * to the visual guidelines, it is suggested that you only use 25%, 50%, 75% or 100% cells in you applications.
     * For example, 12,5% width is not desirable (1 cell with width 1, and another with width 7)
     */
    width?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.48
     *
     * The Background color set from which the background color will be selected. By using background colors
     * from the predefined sets your colors could later be customized from the Theme Designer. **Note:** backgroundColorSet
     * should be used only in combination with backgroundColorShade.
     */
    backgroundColorSet?:
      | (BlockLayoutCellColorSet | keyof typeof BlockLayoutCellColorSet)
      | PropertyBindingInfo;

    /**
     * @SINCE 1.48
     *
     * The index of the background color in the color set from which the color will be selected. By using background
     * colors from the predefined sets your colors could later be customized from the Theme Designer. **Note:**
     * backgroundColorShade should be used only in combination with backgroundColorSet.
     */
    backgroundColorShade?:
      | (BlockLayoutCellColorShade | keyof typeof BlockLayoutCellColorShade)
      | PropertyBindingInfo;

    /**
     * The content to be included inside the cell
     */
    content?: Control[] | Control | AggregationBindingInfo;

    /**
     * @SINCE 1.56
     *
     * The link that will replace the title of the cell. **Note:** The only possible value is the `sap.m.Link`
     * control.
     */
    titleLink?: Control;
  }
}

declare module "sap/ui/layout/BlockLayoutCellData" {
  import {
    default as LayoutData,
    $LayoutDataSettings,
  } from "sap/ui/core/LayoutData";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.50.0
   *
   * Holds layout data for the BlockLayoutCells contents.
   */
  export default class BlockLayoutCellData extends LayoutData {
    /**
     * Constructor for a new BlockLayoutCellData.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $BlockLayoutCellDataSettings
    );
    /**
     * Constructor for a new BlockLayoutCellData.
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
      mSettings?: $BlockLayoutCellDataSettings
    );

    /**
     * Creates a new subclass of class sap.ui.layout.BlockLayoutCellData with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, BlockLayoutCellData>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getLSize lSize}.
     *
     * Sets the width of the cell for L size of the BlockLayout.
     *
     * Default value is `1`.
     */
    getLSize(): int;
    /**
     * Returns a metadata object for class sap.ui.layout.BlockLayoutCellData.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getMSize mSize}.
     *
     * Sets the width of the cell for M size of the BlockLayout.
     *
     * Default value is `1`.
     */
    getMSize(): int;
    /**
     * Gets current value of property {@link #getSSize sSize}.
     *
     * Sets the width of the cell for S size of the BlockLayout.
     *
     * Default value is `1`.
     */
    getSSize(): int;
    /**
     * Gets current value of property {@link #getXlSize xlSize}.
     *
     * Sets the width of the cell for XL size of the BlockLayout.
     *
     * Default value is `1`.
     */
    getXlSize(): int;
    /**
     * Sets a new value for property {@link #getLSize lSize}.
     *
     * Sets the width of the cell for L size of the BlockLayout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1`.
     */
    setLSize(
      /**
       * New value for property `lSize`
       */
      iLSize?: int
    ): this;
    /**
     * Sets a new value for property {@link #getMSize mSize}.
     *
     * Sets the width of the cell for M size of the BlockLayout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1`.
     */
    setMSize(
      /**
       * New value for property `mSize`
       */
      iMSize?: int
    ): this;
    /**
     * Sets width of the cell to all sizes if the width is specified.
     */
    setSize(iValue: undefined): this;
    /**
     * Sets a new value for property {@link #getSSize sSize}.
     *
     * Sets the width of the cell for S size of the BlockLayout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1`.
     */
    setSSize(
      /**
       * New value for property `sSize`
       */
      iSSize?: int
    ): this;
    /**
     * Sets a new value for property {@link #getXlSize xlSize}.
     *
     * Sets the width of the cell for XL size of the BlockLayout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1`.
     */
    setXlSize(
      /**
       * New value for property `xlSize`
       */
      iXlSize?: int
    ): this;
  }

  export interface $BlockLayoutCellDataSettings extends $LayoutDataSettings {
    /**
     * Sets the width of the cell for S size of the BlockLayout.
     */
    sSize?: int | PropertyBindingInfo;

    /**
     * Sets the width of the cell for M size of the BlockLayout.
     */
    mSize?: int | PropertyBindingInfo;

    /**
     * Sets the width of the cell for L size of the BlockLayout.
     */
    lSize?: int | PropertyBindingInfo;

    /**
     * Sets the width of the cell for XL size of the BlockLayout.
     */
    xlSize?: int | PropertyBindingInfo;
  }
}

declare module "sap/ui/layout/BlockLayoutRow" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID } from "sap/ui/core/library";

  import BlockLayoutCell from "sap/ui/layout/BlockLayoutCell";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { BlockRowColorSets } from "sap/ui/layout/library";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.34
   *
   * The BlockLayoutRow is used as an aggregation to the BlockLayout. It aggregates Block Layout cells. The
   * BlockLayoutRow has 2 rendering modes - scrollable and non scrollable.
   */
  export default class BlockLayoutRow extends Control {
    /**
     * Constructor for a new BlockLayoutRow.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $BlockLayoutRowSettings
    );
    /**
     * Constructor for a new BlockLayoutRow.
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
      mSettings?: $BlockLayoutRowSettings
    );

    /**
     * @SINCE 1.42
     *
     * Adds some accentCell into the association {@link #getAccentCells accentCells}.
     */
    addAccentCell(
      /**
       * The accentCells to add; if empty, nothing is inserted
       */
      vAccentCell: ID | BlockLayoutCell
    ): this;
    /**
     * Adds some content to the aggregation {@link #getContent content}.
     */
    addContent(
      /**
       * The content to add; if empty, nothing is inserted
       */
      oContent: BlockLayoutCell
    ): this;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     */
    destroyContent(): this;
    /**
     * Creates a new subclass of class sap.ui.layout.BlockLayoutRow with name `sClassName` and enriches it with
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
      oClassInfo?: sap.ClassInfo<T, BlockLayoutRow>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @SINCE 1.42
     *
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAccentCells
     * accentCells}.
     */
    getAccentCells(): ID[];
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * The content cells to be included in the row.
     */
    getContent(): BlockLayoutCell[];
    /**
     * Returns a metadata object for class sap.ui.layout.BlockLayoutRow.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.42
     *
     * Gets current value of property {@link #getRowColorSet rowColorSet}.
     *
     * Defines background type for that row. There might be several rows with the same type
     */
    getRowColorSet(): BlockRowColorSets | keyof typeof BlockRowColorSets;
    /**
     * Gets current value of property {@link #getScrollable scrollable}.
     *
     * Sets the rendering mode of the BlockLayoutRow to scrollable. In scrollable mode, the cells get aligned
     * side by side, with horizontal scroll bar for the row.
     *
     * Default value is `false`.
     */
    getScrollable(): boolean;
    /**
     * Checks for the provided `sap.ui.layout.BlockLayoutCell` in the aggregation {@link #getContent content}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfContent(
      /**
       * The content whose index is looked for
       */
      oContent: BlockLayoutCell
    ): int;
    /**
     * Inserts a content into the aggregation {@link #getContent content}.
     */
    insertContent(
      /**
       * The content to insert; if empty, nothing is inserted
       */
      oContent: BlockLayoutCell,
      /**
       * The `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
       * is inserted at position 0; for a value greater than the current size of the aggregation, the content
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * @SINCE 1.42
     *
     * Removes an accentCell from the association named {@link #getAccentCells accentCells}.
     */
    removeAccentCell(
      /**
       * The accentCell to be removed or its index or ID
       */
      vAccentCell: int | ID | BlockLayoutCell
    ): ID;
    /**
     * @SINCE 1.42
     *
     * Removes all the controls in the association named {@link #getAccentCells accentCells}.
     */
    removeAllAccentCells(): ID[];
    /**
     * Removes all the controls from the aggregation {@link #getContent content}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllContent(): BlockLayoutCell[];
    /**
     * Removes a content from the aggregation {@link #getContent content}.
     */
    removeContent(
      /**
       * The content to remove or its index or id
       */
      vContent: int | string | BlockLayoutCell
    ): BlockLayoutCell;
    /**
     * @SINCE 1.42
     *
     * Changes dynamically row color set Note: this might invalidate cells inside and also change color sets
     * of the other BlockLayoutRow-s below it.
     */
    setRowColorSet(
      sType: BlockRowColorSets | keyof typeof BlockRowColorSets
    ): this;
    /**
     * Sets a new value for property {@link #getScrollable scrollable}.
     *
     * Sets the rendering mode of the BlockLayoutRow to scrollable. In scrollable mode, the cells get aligned
     * side by side, with horizontal scroll bar for the row.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setScrollable(
      /**
       * New value for property `scrollable`
       */
      bScrollable?: boolean
    ): this;
  }

  export interface $BlockLayoutRowSettings extends $ControlSettings {
    /**
     * Sets the rendering mode of the BlockLayoutRow to scrollable. In scrollable mode, the cells get aligned
     * side by side, with horizontal scroll bar for the row.
     */
    scrollable?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.42
     *
     * Defines background type for that row. There might be several rows with the same type
     */
    rowColorSet?:
      | (BlockRowColorSets | keyof typeof BlockRowColorSets)
      | PropertyBindingInfo;

    /**
     * The content cells to be included in the row.
     */
    content?: BlockLayoutCell[] | BlockLayoutCell | AggregationBindingInfo;

    /**
     * @SINCE 1.42
     *
     * Cells that would be accented. *Note:* This association has visual impact only for BlockLayouts with background
     * types "Mixed" and "Accent".
     *
     * Mixed: In this type, areas of 25% (on desktop) can have a dark background color. Per section one area
     * can be dark. Accent: Every section can contain multiple gray blocks, which are used alternately, beginning
     * with the bright one
     */
    accentCells?: Array<BlockLayoutCell | string>;
  }
}

declare module "sap/ui/layout/cssgrid/CSSGrid" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { cssgrid } from "sap/ui/layout/library";

  import GridLayoutBase from "sap/ui/layout/cssgrid/GridLayoutBase";

  import { CSSSize } from "sap/ui/core/library";

  import GridBasicLayout from "sap/ui/layout/cssgrid/GridBasicLayout";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.60
   *
   * A layout control, used to create full page layouts or user interface elements.
   *
   * Overview:
   *
   * A two-dimensional layout control based on the native-browser CSS display grid which can handle both columns
   * and rows. The control can be used along with {@link sap.m.FlexBox} which is the one-dimensional alternative
   * for layouting.
   *
   * With properties it is possible to define:
   * 	 - columns, rows and their sizes in the grid
   * 	 - vertical and horizontal gaps between the grid items
   * 	 - the flow algorithm when new items are added in the grid
   *
   * The dimensions of the grid items are defined on a `CSSGrid` level. Every item can override its size by
   * specifying how many columns and/or rows it will take in the `CSSGrid`. Every item can override its position
   * by specifying from which column and/or row it will start. The configuration of a single item is done
   * with {@link sap.ui.layout.cssgrid.GridItemLayoutData GridItemLayoutData}.
   *
   * Terminology:
   * 	 - Grid - The container which has all grid settings
   * 	 - Gutters - The gap between the rows and columns
   * 	 - Grid areas - Items that take more than one row and/or column
   * 	 - Grid cells - The items of the Grid
   * 	 - Grid lines - The lines around and between the rows and columns
   * 	 - Grid tracks - The space between any two lines in the grid
   * 	 - "fr" Unit - A special grid unit (short from "fraction") which represents a fraction of the available
   * 			space in the grid
   * 	 - Implicit and Explicit grid - Explicit grid consists of rows and columns defined with `gridTemplateColumns`
   * 			and `gridTemplateRows`. The grid also creates rows and columns on its own when needed. Their dimensions
   * 			are defined with `gridAutoColumns` and `gridAutoRows`.
   *
   * Structure: The `CSSGrid` has the following elements:
   * 	 - `items` - The items of the `CSSGrid`
   * 	 - `customLayout` - An aggregation used to pass the `CSSGrid` configuration. Used for templating.
   *
   * Usage:
   *
   * For general cases, use the `CSSGrid` properties to configure how the layout should look. For Box case
   * (equal sized items), use `customLayout` aggregation with {@link sap.ui.layout.cssgrid.GridBoxLayout GridBoxLayout}
   * For Grids which need different configurations based on available width, use `customLayout` aggregation
   * with {@link sap.ui.layout.cssgrid.GridResponsiveLayout GridResponsiveLayout} To set a specific position
   * to an item or define its dimensions in the grid, pass `layoutData` of type {@link sap.ui.layout.cssgrid.GridItemLayoutData
   * GridItemLayoutData}
   *
   * When to use
   * 	 - If a two-dimensional layout configuration is needed (both columns and rows are defined)
   *
   * When not to use
   * 	 - If the layout needs to be defined only by one dimension (either column or row, not both). Use {@link
   * 			sap.m.FlexBox FlexBox} instead.
   *
   * Responsive behavior:
   * 	 - Fully configurable by the developer. It is possible to create a "breathing" columns layout which
   * 			means columns width will grow/shrink depending on grid size.
   * 	 - It is possible to pass a {@link sap.ui.layout.cssgrid.GridResponsiveLayout GridResponsiveLayout}
   * 			to the `customLayout` aggregation of the `CSSGrid` and configure how it will look in different breakpoints
   * 			(S, M, L, XL).
   *
   * Current Limitations:
   * 	 - No alignment and ordering
   * 	 - No Named grid areas and lines
   */
  export default class CSSGrid
    extends Control
    implements cssgrid.IGridConfigurable {
    __implements__sap_ui_layout_cssgrid_IGridConfigurable: boolean;
    /**
     * Constructor for a new CSSGrid.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}
     * 	{@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout MDN web docs: CSS Grid Layout}
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $CSSGridSettings
    );
    /**
     * Constructor for a new CSSGrid.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}
     * 	{@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout MDN web docs: CSS Grid Layout}
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $CSSGridSettings
    );

    /**
     * Adds some item to the aggregation {@link #getItems items}.
     */
    addItem(
      /**
       * The item to add; if empty, nothing is inserted
       */
      oItem: Control
    ): this;
    /**
     * Destroys the customLayout in the aggregation {@link #getCustomLayout customLayout}.
     */
    destroyCustomLayout(): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     */
    destroyItems(): this;
    /**
     * Creates a new subclass of class sap.ui.layout.cssgrid.CSSGrid with name `sClassName` and enriches it
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
      oClassInfo?: sap.ClassInfo<T, CSSGrid>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets content of aggregation {@link #getCustomLayout customLayout}.
     *
     * Defines a custom Grid layout for the control. If provided, it will override all of the grid properties.
     */
    getCustomLayout(): GridLayoutBase;
    /**
     * Gets current value of property {@link #getGridAutoColumns gridAutoColumns}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
     * MDN web docs: grid-auto-columns}
     *
     * Default value is `empty string`.
     */
    getGridAutoColumns(): cssgrid.CSSGridTrack;
    /**
     * Gets current value of property {@link #getGridAutoFlow gridAutoFlow}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
     * MDN web docs: grid-auto-flow}
     *
     * Default value is `"Row"`.
     */
    getGridAutoFlow():
      | cssgrid.CSSGridAutoFlow
      | keyof typeof cssgrid.CSSGridAutoFlow;
    /**
     * Gets current value of property {@link #getGridAutoRows gridAutoRows}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
     * MDN web docs: grid-auto-rows}
     *
     * Default value is `empty string`.
     */
    getGridAutoRows(): cssgrid.CSSGridTrack;
    /**
     * Gets current value of property {@link #getGridColumnGap gridColumnGap}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap
     * MDN web docs: grid-column-gap}
     *
     * Default value is `empty string`.
     */
    getGridColumnGap(): CSSSize;
    /**
     * Implements IGridConfigurable interface
     */
    getGridDomRefs(): HTMLElement[];
    /**
     * Gets current value of property {@link #getGridGap gridGap}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap
     * MDN web docs: grid-gap} It is a shorthand for gridRowGap and gridColumnGap. If some of them is set, the
     * gridGap value will have less priority and will be overwritten.
     *
     * Default value is `empty string`.
     */
    getGridGap(): cssgrid.CSSGridGapShortHand;
    /**
     * Returns the layout configuration of the `CSSGrid`.
     */
    getGridLayoutConfiguration(): GridBasicLayout;
    /**
     * Gets current value of property {@link #getGridRowGap gridRowGap}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap
     * MDN web docs: grid-row-gap}
     *
     * Default value is `empty string`.
     */
    getGridRowGap(): CSSSize;
    /**
     * Gets current value of property {@link #getGridTemplateColumns gridTemplateColumns}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
     * MDN web docs: grid-template-columns}
     *
     * Default value is `empty string`.
     */
    getGridTemplateColumns(): cssgrid.CSSGridTrack;
    /**
     * Gets current value of property {@link #getGridTemplateRows gridTemplateRows}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
     * MDN web docs: grid-template-rows}
     *
     * Default value is `empty string`.
     */
    getGridTemplateRows(): cssgrid.CSSGridTrack;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * The items contained by the control.
     */
    getItems(): Control[];
    /**
     * Returns a metadata object for class sap.ui.layout.cssgrid.CSSGrid.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * The width of the control
     *
     * Default value is `"100%"`.
     */
    getWidth(): CSSSize;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getItems items}. and returns
     * its index if found or -1 otherwise.
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: Control
    ): int;
    /**
     * Inserts a item into the aggregation {@link #getItems items}.
     */
    insertItem(
      /**
       * The item to insert; if empty, nothing is inserted
       */
      oItem: Control,
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
    removeAllItems(): Control[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | Control
    ): Control;
    /**
     * Sets the aggregated {@link #getCustomLayout customLayout}.
     */
    setCustomLayout(
      /**
       * The customLayout to set
       */
      oCustomLayout: GridLayoutBase
    ): this;
    /**
     * Sets a new value for property {@link #getGridAutoColumns gridAutoColumns}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
     * MDN web docs: grid-auto-columns}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridAutoColumns(
      /**
       * New value for property `gridAutoColumns`
       */
      sGridAutoColumns?: cssgrid.CSSGridTrack
    ): this;
    /**
     * Sets a new value for property {@link #getGridAutoFlow gridAutoFlow}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
     * MDN web docs: grid-auto-flow}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Row"`.
     */
    setGridAutoFlow(
      /**
       * New value for property `gridAutoFlow`
       */
      sGridAutoFlow?:
        | cssgrid.CSSGridAutoFlow
        | keyof typeof cssgrid.CSSGridAutoFlow
    ): this;
    /**
     * Sets a new value for property {@link #getGridAutoRows gridAutoRows}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
     * MDN web docs: grid-auto-rows}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridAutoRows(
      /**
       * New value for property `gridAutoRows`
       */
      sGridAutoRows?: cssgrid.CSSGridTrack
    ): this;
    /**
     * Sets a new value for property {@link #getGridColumnGap gridColumnGap}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap
     * MDN web docs: grid-column-gap}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridColumnGap(
      /**
       * New value for property `gridColumnGap`
       */
      sGridColumnGap?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getGridGap gridGap}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap
     * MDN web docs: grid-gap} It is a shorthand for gridRowGap and gridColumnGap. If some of them is set, the
     * gridGap value will have less priority and will be overwritten.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridGap(
      /**
       * New value for property `gridGap`
       */
      sGridGap?: cssgrid.CSSGridGapShortHand
    ): this;
    /**
     * Sets a new value for property {@link #getGridRowGap gridRowGap}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap
     * MDN web docs: grid-row-gap}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridRowGap(
      /**
       * New value for property `gridRowGap`
       */
      sGridRowGap?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getGridTemplateColumns gridTemplateColumns}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
     * MDN web docs: grid-template-columns}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridTemplateColumns(
      /**
       * New value for property `gridTemplateColumns`
       */
      sGridTemplateColumns?: cssgrid.CSSGridTrack
    ): this;
    /**
     * Sets a new value for property {@link #getGridTemplateRows gridTemplateRows}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
     * MDN web docs: grid-template-rows}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridTemplateRows(
      /**
       * New value for property `gridTemplateRows`
       */
      sGridTemplateRows?: cssgrid.CSSGridTrack
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * The width of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"100%"`.
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth?: CSSSize
    ): this;
  }

  export interface $CSSGridSettings extends $ControlSettings {
    /**
     * The width of the control
     */
    width?: CSSSize | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
     * MDN web docs: grid-template-columns}
     */
    gridTemplateColumns?: cssgrid.CSSGridTrack | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
     * MDN web docs: grid-template-rows}
     */
    gridTemplateRows?: cssgrid.CSSGridTrack | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap
     * MDN web docs: grid-row-gap}
     */
    gridRowGap?: CSSSize | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap
     * MDN web docs: grid-column-gap}
     */
    gridColumnGap?: CSSSize | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap
     * MDN web docs: grid-gap} It is a shorthand for gridRowGap and gridColumnGap. If some of them is set, the
     * gridGap value will have less priority and will be overwritten.
     */
    gridGap?: cssgrid.CSSGridGapShortHand | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
     * MDN web docs: grid-auto-rows}
     */
    gridAutoRows?: cssgrid.CSSGridTrack | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
     * MDN web docs: grid-auto-columns}
     */
    gridAutoColumns?: cssgrid.CSSGridTrack | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
     * MDN web docs: grid-auto-flow}
     */
    gridAutoFlow?:
      | (cssgrid.CSSGridAutoFlow | keyof typeof cssgrid.CSSGridAutoFlow)
      | PropertyBindingInfo;

    /**
     * Defines a custom Grid layout for the control. If provided, it will override all of the grid properties.
     */
    customLayout?: GridLayoutBase;

    /**
     * The items contained by the control.
     */
    items?: Control[] | Control | AggregationBindingInfo;
  }
}

declare module "sap/ui/layout/cssgrid/GridBasicLayout" {
  import {
    default as GridLayoutBase,
    $GridLayoutBaseSettings,
  } from "sap/ui/layout/cssgrid/GridLayoutBase";

  import { cssgrid } from "sap/ui/layout/library";

  import { CSSSize } from "sap/ui/core/library";

  import ManagedObjectMetadata from "sap/ui/base/ManagedObjectMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.60
   *
   * Applies a sap.ui.layout.cssgrid.GridSettings to a provided DOM element or Control.
   */
  export default class GridBasicLayout extends GridLayoutBase {
    /**
     * Constructor for a new GridBasicLayout.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $GridBasicLayoutSettings
    );
    /**
     * Constructor for a new GridBasicLayout.
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
      mSettings?: $GridBasicLayoutSettings
    );

    /**
     * Creates a new subclass of class sap.ui.layout.cssgrid.GridBasicLayout with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.cssgrid.GridLayoutBase.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, GridBasicLayout>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getGridAutoColumns gridAutoColumns}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
     * MDN web docs: grid-auto-columns}
     *
     * Default value is `empty string`.
     */
    getGridAutoColumns(): cssgrid.CSSGridTrack;
    /**
     * Gets current value of property {@link #getGridAutoFlow gridAutoFlow}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
     * MDN web docs: grid-auto-flow}
     *
     * Default value is `"Row"`.
     */
    getGridAutoFlow():
      | cssgrid.CSSGridAutoFlow
      | keyof typeof cssgrid.CSSGridAutoFlow;
    /**
     * Gets current value of property {@link #getGridAutoRows gridAutoRows}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
     * MDN web docs: grid-auto-rows}
     *
     * Default value is `empty string`.
     */
    getGridAutoRows(): cssgrid.CSSGridTrack;
    /**
     * Gets current value of property {@link #getGridColumnGap gridColumnGap}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap
     * MDN web docs: grid-column-gap}
     *
     * Default value is `empty string`.
     */
    getGridColumnGap(): CSSSize;
    /**
     * Gets current value of property {@link #getGridGap gridGap}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap
     * MDN web docs: grid-gap}
     *
     * Default value is `empty string`.
     */
    getGridGap(): cssgrid.CSSGridGapShortHand;
    /**
     * Gets current value of property {@link #getGridRowGap gridRowGap}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap
     * MDN web docs: grid-row-gap}
     *
     * Default value is `empty string`.
     */
    getGridRowGap(): CSSSize;
    /**
     * Gets current value of property {@link #getGridTemplateColumns gridTemplateColumns}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
     * MDN web docs: grid-template-columns}
     *
     * Default value is `empty string`.
     */
    getGridTemplateColumns(): cssgrid.CSSGridTrack;
    /**
     * Gets current value of property {@link #getGridTemplateRows gridTemplateRows}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
     * MDN web docs: grid-template-rows}
     *
     * Default value is `empty string`.
     */
    getGridTemplateRows(): cssgrid.CSSGridTrack;
    /**
     * Returns a metadata object for class sap.ui.layout.cssgrid.GridBasicLayout.
     */
    static getMetadata(): ManagedObjectMetadata;
    /**
     * Sets a new value for property {@link #getGridAutoColumns gridAutoColumns}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
     * MDN web docs: grid-auto-columns}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridAutoColumns(
      /**
       * New value for property `gridAutoColumns`
       */
      sGridAutoColumns?: cssgrid.CSSGridTrack
    ): this;
    /**
     * Sets a new value for property {@link #getGridAutoFlow gridAutoFlow}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
     * MDN web docs: grid-auto-flow}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Row"`.
     */
    setGridAutoFlow(
      /**
       * New value for property `gridAutoFlow`
       */
      sGridAutoFlow?:
        | cssgrid.CSSGridAutoFlow
        | keyof typeof cssgrid.CSSGridAutoFlow
    ): this;
    /**
     * Sets a new value for property {@link #getGridAutoRows gridAutoRows}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
     * MDN web docs: grid-auto-rows}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridAutoRows(
      /**
       * New value for property `gridAutoRows`
       */
      sGridAutoRows?: cssgrid.CSSGridTrack
    ): this;
    /**
     * Sets a new value for property {@link #getGridColumnGap gridColumnGap}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap
     * MDN web docs: grid-column-gap}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridColumnGap(
      /**
       * New value for property `gridColumnGap`
       */
      sGridColumnGap?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getGridGap gridGap}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap
     * MDN web docs: grid-gap}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridGap(
      /**
       * New value for property `gridGap`
       */
      sGridGap?: cssgrid.CSSGridGapShortHand
    ): this;
    /**
     * Sets a new value for property {@link #getGridRowGap gridRowGap}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap
     * MDN web docs: grid-row-gap}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridRowGap(
      /**
       * New value for property `gridRowGap`
       */
      sGridRowGap?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getGridTemplateColumns gridTemplateColumns}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
     * MDN web docs: grid-template-columns}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridTemplateColumns(
      /**
       * New value for property `gridTemplateColumns`
       */
      sGridTemplateColumns?: cssgrid.CSSGridTrack
    ): this;
    /**
     * Sets a new value for property {@link #getGridTemplateRows gridTemplateRows}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
     * MDN web docs: grid-template-rows}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridTemplateRows(
      /**
       * New value for property `gridTemplateRows`
       */
      sGridTemplateRows?: cssgrid.CSSGridTrack
    ): this;
  }

  export interface $GridBasicLayoutSettings extends $GridLayoutBaseSettings {
    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
     * MDN web docs: grid-template-columns}
     */
    gridTemplateColumns?: cssgrid.CSSGridTrack | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
     * MDN web docs: grid-template-rows}
     */
    gridTemplateRows?: cssgrid.CSSGridTrack | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap
     * MDN web docs: grid-row-gap}
     */
    gridRowGap?: CSSSize | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap
     * MDN web docs: grid-column-gap}
     */
    gridColumnGap?: CSSSize | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap
     * MDN web docs: grid-gap}
     */
    gridGap?: cssgrid.CSSGridGapShortHand | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
     * MDN web docs: grid-auto-rows}
     */
    gridAutoRows?: cssgrid.CSSGridTrack | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
     * MDN web docs: grid-auto-columns}
     */
    gridAutoColumns?: cssgrid.CSSGridTrack | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
     * MDN web docs: grid-auto-flow}
     */
    gridAutoFlow?:
      | (cssgrid.CSSGridAutoFlow | keyof typeof cssgrid.CSSGridAutoFlow)
      | PropertyBindingInfo;
  }
}

declare module "sap/ui/layout/cssgrid/GridBoxLayout" {
  import {
    default as GridLayoutBase,
    $GridLayoutBaseSettings,
  } from "sap/ui/layout/cssgrid/GridLayoutBase";

  import { BoxesPerRowConfig } from "sap/ui/layout/library";

  import { CSSSize } from "sap/ui/core/library";

  import ManagedObjectMetadata from "sap/ui/base/ManagedObjectMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.60
   *
   * Applies a sap.ui.layout.cssgrid.GridSettings to a provided DOM element or Control.
   */
  export default class GridBoxLayout extends GridLayoutBase {
    /**
     * Constructor for a new GridBoxLayout.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $GridBoxLayoutSettings
    );
    /**
     * Constructor for a new GridBoxLayout.
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
      mSettings?: $GridBoxLayoutSettings
    );

    /**
     * Returns a gridTemplateColumns value based on boxWidth and boxMinWidth properties
     */
    _getTemplateColumns(): string;
    /**
     * Creates a new subclass of class sap.ui.layout.cssgrid.GridBoxLayout with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.cssgrid.GridLayoutBase.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, GridBoxLayout>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getBoxesPerRowConfig boxesPerRowConfig}.
     *
     * A string type that defines number of Boxes per row for extra large, large, medium and small screens
     *
     * **Note:** When the property `boxMinWidth` or `boxWidth` is set this property has no effect.
     *
     * Default value is `"XL7 L6 M4 S2"`.
     */
    getBoxesPerRowConfig(): BoxesPerRowConfig;
    /**
     * Gets current value of property {@link #getBoxMinWidth boxMinWidth}.
     *
     * Defines the minimum width of the Boxes
     *
     * Default value is `empty string`.
     */
    getBoxMinWidth(): CSSSize;
    /**
     * Gets current value of property {@link #getBoxWidth boxWidth}.
     *
     * Defines the width of the Boxes
     *
     * Default value is `empty string`.
     */
    getBoxWidth(): CSSSize;
    /**
     * Returns a metadata object for class sap.ui.layout.cssgrid.GridBoxLayout.
     */
    static getMetadata(): ManagedObjectMetadata;
    /**/
    isResponsive(): boolean;
    /**
     * Sets a new value for property {@link #getBoxesPerRowConfig boxesPerRowConfig}.
     *
     * A string type that defines number of Boxes per row for extra large, large, medium and small screens
     *
     * **Note:** When the property `boxMinWidth` or `boxWidth` is set this property has no effect.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"XL7 L6 M4 S2"`.
     */
    setBoxesPerRowConfig(
      /**
       * New value for property `boxesPerRowConfig`
       */
      sBoxesPerRowConfig?: BoxesPerRowConfig
    ): this;
    /**
     * Sets a new value for property {@link #getBoxMinWidth boxMinWidth}.
     *
     * Defines the minimum width of the Boxes
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setBoxMinWidth(
      /**
       * New value for property `boxMinWidth`
       */
      sBoxMinWidth?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getBoxWidth boxWidth}.
     *
     * Defines the width of the Boxes
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setBoxWidth(
      /**
       * New value for property `boxWidth`
       */
      sBoxWidth?: CSSSize
    ): this;
  }

  export interface $GridBoxLayoutSettings extends $GridLayoutBaseSettings {
    /**
     * Defines the minimum width of the Boxes
     */
    boxMinWidth?: CSSSize | PropertyBindingInfo;

    /**
     * Defines the width of the Boxes
     */
    boxWidth?: CSSSize | PropertyBindingInfo;

    /**
     * A string type that defines number of Boxes per row for extra large, large, medium and small screens
     *
     * **Note:** When the property `boxMinWidth` or `boxWidth` is set this property has no effect.
     */
    boxesPerRowConfig?: BoxesPerRowConfig | PropertyBindingInfo;
  }
}

declare module "sap/ui/layout/cssgrid/GridItemLayoutData" {
  import {
    default as LayoutData,
    $LayoutDataSettings,
  } from "sap/ui/core/LayoutData";

  import { cssgrid } from "sap/ui/layout/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * Holds layout data for a grid item.
   */
  export default class GridItemLayoutData
    extends LayoutData
    implements cssgrid.IGridItemLayoutData {
    __implements__sap_ui_layout_cssgrid_IGridItemLayoutData: boolean;
    /**
     * Constructor for a new `sap.ui.layout.cssgrid.GridItemLayoutData`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new element.
       */
      mSettings?: $GridItemLayoutDataSettings
    );
    /**
     * Constructor for a new `sap.ui.layout.cssgrid.GridItemLayoutData`.
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
       * Initial settings for the new element.
       */
      mSettings?: $GridItemLayoutDataSettings
    );

    /**
     * Creates a new subclass of class sap.ui.layout.cssgrid.GridItemLayoutData with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, GridItemLayoutData>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getGridColumn gridColumn}.
     *
     * Sets the value for the CSS display:grid item property grid-column {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
     * MDN web docs: grid-column}
     *
     * Default value is `empty string`.
     */
    getGridColumn(): cssgrid.CSSGridLine;
    /**
     * Gets current value of property {@link #getGridColumnEnd gridColumnEnd}.
     *
     * Sets the value for the CSS display:grid item property grid-column-end {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end
     * MDN web docs: grid-column-end}
     *
     * Default value is `empty string`.
     */
    getGridColumnEnd(): cssgrid.CSSGridLine;
    /**
     * Gets current value of property {@link #getGridColumnStart gridColumnStart}.
     *
     * Sets the value for the CSS display:grid item property grid-column-start {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start
     * MDN web docs: grid-column-start}
     *
     * Default value is `empty string`.
     */
    getGridColumnStart(): cssgrid.CSSGridLine;
    /**
     * Gets current value of property {@link #getGridRow gridRow}.
     *
     * Sets the value for the CSS display:grid item property grid-row {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row
     * MDN web docs: grid-row}
     *
     * Default value is `empty string`.
     */
    getGridRow(): cssgrid.CSSGridLine;
    /**
     * Gets current value of property {@link #getGridRowEnd gridRowEnd}.
     *
     * Sets the value for the CSS display:grid item property grid-row-end {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end
     * MDN web docs: grid-row-end}
     *
     * Default value is `empty string`.
     */
    getGridRowEnd(): cssgrid.CSSGridLine;
    /**
     * Gets current value of property {@link #getGridRowStart gridRowStart}.
     *
     * Sets the value for the CSS display:grid item property grid-row-start {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start
     * MDN web docs: grid-row-start}
     *
     * Default value is `empty string`.
     */
    getGridRowStart(): cssgrid.CSSGridLine;
    /**
     * Returns a metadata object for class sap.ui.layout.cssgrid.GridItemLayoutData.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Sets a new value for property {@link #getGridColumn gridColumn}.
     *
     * Sets the value for the CSS display:grid item property grid-column {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
     * MDN web docs: grid-column}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridColumn(
      /**
       * New value for property `gridColumn`
       */
      sGridColumn?: cssgrid.CSSGridLine
    ): this;
    /**
     * Sets a new value for property {@link #getGridColumnEnd gridColumnEnd}.
     *
     * Sets the value for the CSS display:grid item property grid-column-end {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end
     * MDN web docs: grid-column-end}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridColumnEnd(
      /**
       * New value for property `gridColumnEnd`
       */
      sGridColumnEnd?: cssgrid.CSSGridLine
    ): this;
    /**
     * Sets a new value for property {@link #getGridColumnStart gridColumnStart}.
     *
     * Sets the value for the CSS display:grid item property grid-column-start {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start
     * MDN web docs: grid-column-start}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridColumnStart(
      /**
       * New value for property `gridColumnStart`
       */
      sGridColumnStart?: cssgrid.CSSGridLine
    ): this;
    /**
     * Sets a new value for property {@link #getGridRow gridRow}.
     *
     * Sets the value for the CSS display:grid item property grid-row {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row
     * MDN web docs: grid-row}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridRow(
      /**
       * New value for property `gridRow`
       */
      sGridRow?: cssgrid.CSSGridLine
    ): this;
    /**
     * Sets a new value for property {@link #getGridRowEnd gridRowEnd}.
     *
     * Sets the value for the CSS display:grid item property grid-row-end {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end
     * MDN web docs: grid-row-end}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridRowEnd(
      /**
       * New value for property `gridRowEnd`
       */
      sGridRowEnd?: cssgrid.CSSGridLine
    ): this;
    /**
     * Sets a new value for property {@link #getGridRowStart gridRowStart}.
     *
     * Sets the value for the CSS display:grid item property grid-row-start {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start
     * MDN web docs: grid-row-start}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridRowStart(
      /**
       * New value for property `gridRowStart`
       */
      sGridRowStart?: cssgrid.CSSGridLine
    ): this;
  }

  export interface $GridItemLayoutDataSettings extends $LayoutDataSettings {
    /**
     * Sets the value for the CSS display:grid item property grid-column-start {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start
     * MDN web docs: grid-column-start}
     */
    gridColumnStart?: cssgrid.CSSGridLine | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid item property grid-column-end {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end
     * MDN web docs: grid-column-end}
     */
    gridColumnEnd?: cssgrid.CSSGridLine | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid item property grid-row-start {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start
     * MDN web docs: grid-row-start}
     */
    gridRowStart?: cssgrid.CSSGridLine | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid item property grid-row-end {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end
     * MDN web docs: grid-row-end}
     */
    gridRowEnd?: cssgrid.CSSGridLine | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid item property grid-column {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
     * MDN web docs: grid-column}
     */
    gridColumn?: cssgrid.CSSGridLine | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid item property grid-row {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row
     * MDN web docs: grid-row}
     */
    gridRow?: cssgrid.CSSGridLine | PropertyBindingInfo;
  }
}

declare module "sap/ui/layout/cssgrid/GridLayoutBase" {
  import {
    default as ManagedObject,
    $ManagedObjectSettings,
  } from "sap/ui/base/ManagedObject";

  import GridSettings from "sap/ui/layout/cssgrid/GridSettings";

  import Control from "sap/ui/core/Control";

  import ManagedObjectMetadata from "sap/ui/base/ManagedObjectMetadata";

  /**
   * @SINCE 1.60
   *
   * Applies a sap.ui.layout.cssgrid.GridSettings to a provided DOM element or Control.
   */
  export default class GridLayoutBase extends ManagedObject {
    /**
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.base.ManagedObject#constructor
     * sap.ui.base.ManagedObject} can be used.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $GridLayoutBaseSettings
    );
    /**
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.base.ManagedObject#constructor
     * sap.ui.base.ManagedObject} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $GridLayoutBaseSettings
    );

    /**
     * Removes all display:grid styles from the provided HTML element
     */
    _removeGridLayout(
      /**
       * The element from which to remove the grid styles
       */
      oElement: HTMLElement
    ): void;
    /**
     * Sets all display:grid styles to the provided HTML element
     */
    _setGridLayout(
      /**
       * The element to which to apply the grid styles
       */
      oElement: HTMLElement,
      /**
       * The grid settings to apply
       */
      oGridSettings: GridSettings
    ): void;
    /**
     * Apply styles to the provided array of HTML elements or controls based on the currently active GridSettings
     */
    applyGridLayout(
      /**
       * The elements or controls on which to apply the display:grid styles
       */
      aElements: Control[] | HTMLElement[]
    ): void;
    /**
     * Creates a new subclass of class sap.ui.layout.cssgrid.GridLayoutBase with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, GridLayoutBase>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Should return sap.ui.layout.cssgrid.GridSettings - The active GridSettings Must be implemented by child
     * classes
     */
    getActiveGridSettings(): void;
    /**
     * Returns a metadata object for class sap.ui.layout.cssgrid.GridLayoutBase.
     */
    static getMetadata(): ManagedObjectMetadata;
    /**/
    isResponsive(): boolean;
  }

  export interface $GridLayoutBaseSettings extends $ManagedObjectSettings {}
}

declare module "sap/ui/layout/cssgrid/GridLayoutDelegate" {
  import BaseObject from "sap/ui/base/Object";

  /**
   * Add handlers for a sap.ui.layout.cssgrid.IGridConfigurable control lifecycle events. Applies the grid
   * layout when necessary. Calls sap.ui.layout.cssgrid.GridLayoutBase hook functions.
   */
  export default class GridLayoutDelegate extends BaseObject {
    /**/
    constructor();
  }
}

declare module "sap/ui/layout/cssgrid/GridResponsiveLayout" {
  import {
    default as GridLayoutBase,
    $GridLayoutBaseSettings,
  } from "sap/ui/layout/cssgrid/GridLayoutBase";

  import GridSettings from "sap/ui/layout/cssgrid/GridSettings";

  import ManagedObjectMetadata from "sap/ui/base/ManagedObjectMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.60
   *
   * Applies a sap.ui.layout.cssgrid.GridSettings to a provided DOM element or Control. Have to possibility
   * to hold multiple sap.ui.layout.cssgrid.GridSettings and apply the currently active GridSettings.
   */
  export default class GridResponsiveLayout extends GridLayoutBase {
    /**
     * Constructor for a new GridResponsiveLayout.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $GridResponsiveLayoutSettings
    );
    /**
     * Constructor for a new GridResponsiveLayout.
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
      mSettings?: $GridResponsiveLayoutSettings
    );

    /**
     * Attaches event handler `fnFunction` to the {@link #event:layoutChange layoutChange} event of this `sap.ui.layout.cssgrid.GridResponsiveLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.layout.cssgrid.GridResponsiveLayout` itself.
     *
     * Fired when the currently active GridSettings changes
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
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.layout.cssgrid.GridResponsiveLayout`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys the layout in the aggregation {@link #getLayout layout}.
     */
    destroyLayout(): this;
    /**
     * Destroys the layoutL in the aggregation {@link #getLayoutL layoutL}.
     */
    destroyLayoutL(): this;
    /**
     * Destroys the layoutM in the aggregation {@link #getLayoutM layoutM}.
     */
    destroyLayoutM(): this;
    /**
     * Destroys the layoutS in the aggregation {@link #getLayoutS layoutS}.
     */
    destroyLayoutS(): this;
    /**
     * Destroys the layoutXL in the aggregation {@link #getLayoutXL layoutXL}.
     */
    destroyLayoutXL(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:layoutChange layoutChange} event of this `sap.ui.layout.cssgrid.GridResponsiveLayout`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachLayoutChange(
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
     * Creates a new subclass of class sap.ui.layout.cssgrid.GridResponsiveLayout with name `sClassName` and
     * enriches it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.cssgrid.GridLayoutBase.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, GridResponsiveLayout>,
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
         * The name of the newly active layout aggregation
         */
        layout?: string;
      }
    ): this;
    /**
     * Gets current value of property {@link #getContainerQuery containerQuery}.
     *
     * If set to `true`, the current range (large, medium or small) is defined by the size of the container
     * surrounding the `CSSGrid` instead of the device screen size (media Query).
     *
     * Default value is `false`.
     */
    getContainerQuery(): boolean;
    /**
     * Gets content of aggregation {@link #getLayout layout}.
     *
     * The sap.ui.layout.cssgrid.GridSettings applied if no settings are provided for a specific size
     */
    getLayout(): GridSettings;
    /**
     * Gets content of aggregation {@link #getLayoutL layoutL}.
     *
     * The sap.ui.layout.cssgrid.GridSettings applied for size "L"
     */
    getLayoutL(): GridSettings;
    /**
     * Gets content of aggregation {@link #getLayoutM layoutM}.
     *
     * The sap.ui.layout.cssgrid.GridSettings applied for size "M"
     */
    getLayoutM(): GridSettings;
    /**
     * Gets content of aggregation {@link #getLayoutS layoutS}.
     *
     * The sap.ui.layout.cssgrid.GridSettings applied for size "S"
     */
    getLayoutS(): GridSettings;
    /**
     * Gets content of aggregation {@link #getLayoutXL layoutXL}.
     *
     * The sap.ui.layout.cssgrid.GridSettings applied for size "XL"
     */
    getLayoutXL(): GridSettings;
    /**
     * Returns a metadata object for class sap.ui.layout.cssgrid.GridResponsiveLayout.
     */
    static getMetadata(): ManagedObjectMetadata;
    /**
     * Sets a new value for property {@link #getContainerQuery containerQuery}.
     *
     * If set to `true`, the current range (large, medium or small) is defined by the size of the container
     * surrounding the `CSSGrid` instead of the device screen size (media Query).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setContainerQuery(
      /**
       * New value for property `containerQuery`
       */
      bContainerQuery?: boolean
    ): this;
    /**
     * Sets the aggregated {@link #getLayout layout}.
     */
    setLayout(
      /**
       * The layout to set
       */
      oLayout: GridSettings
    ): this;
    /**
     * Sets the aggregated {@link #getLayoutL layoutL}.
     */
    setLayoutL(
      /**
       * The layoutL to set
       */
      oLayoutL: GridSettings
    ): this;
    /**
     * Sets the aggregated {@link #getLayoutM layoutM}.
     */
    setLayoutM(
      /**
       * The layoutM to set
       */
      oLayoutM: GridSettings
    ): this;
    /**
     * Sets the aggregated {@link #getLayoutS layoutS}.
     */
    setLayoutS(
      /**
       * The layoutS to set
       */
      oLayoutS: GridSettings
    ): this;
    /**
     * Sets the aggregated {@link #getLayoutXL layoutXL}.
     */
    setLayoutXL(
      /**
       * The layoutXL to set
       */
      oLayoutXL: GridSettings
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:layoutChange layoutChange} event of this `sap.ui.layout.cssgrid.GridResponsiveLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.layout.cssgrid.GridResponsiveLayout` itself.
     *
     * Fired when the currently active GridSettings changes
     */
    attachLayoutChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.layout.cssgrid.GridResponsiveLayout`
       * itself
       */
      oListener?: object
    ): this;
  }

  export interface $GridResponsiveLayoutSettings
    extends $GridLayoutBaseSettings {
    /**
     * If set to `true`, the current range (large, medium or small) is defined by the size of the container
     * surrounding the `CSSGrid` instead of the device screen size (media Query).
     */
    containerQuery?: boolean | PropertyBindingInfo;

    /**
     * The sap.ui.layout.cssgrid.GridSettings applied if no settings are provided for a specific size
     */
    layout?: GridSettings;

    /**
     * The sap.ui.layout.cssgrid.GridSettings applied for size "S"
     */
    layoutS?: GridSettings;

    /**
     * The sap.ui.layout.cssgrid.GridSettings applied for size "M"
     */
    layoutM?: GridSettings;

    /**
     * The sap.ui.layout.cssgrid.GridSettings applied for size "L"
     */
    layoutL?: GridSettings;

    /**
     * The sap.ui.layout.cssgrid.GridSettings applied for size "XL"
     */
    layoutXL?: GridSettings;

    /**
     * Fired when the currently active GridSettings changes
     */
    layoutChange?: Function;
  }
}

declare module "sap/ui/layout/cssgrid/GridSettings" {
  import {
    default as ManagedObject,
    $ManagedObjectSettings,
    PropertyBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import { cssgrid } from "sap/ui/layout/library";

  import { CSSSize } from "sap/ui/core/library";

  import ManagedObjectMetadata from "sap/ui/base/ManagedObjectMetadata";

  /**
   * @SINCE 1.60
   *
   * Holds a set of CSS display:grid properties
   */
  export default class GridSettings extends ManagedObject {
    /**
     * Constructor for a new GridSettings.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $GridSettingsSettings
    );
    /**
     * Constructor for a new GridSettings.
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
      mSettings?: $GridSettingsSettings
    );

    /**
     * Creates a new subclass of class sap.ui.layout.cssgrid.GridSettings with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, GridSettings>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getGridAutoColumns gridAutoColumns}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
     * MDN web docs: grid-auto-columns}
     *
     * Default value is `empty string`.
     */
    getGridAutoColumns(): cssgrid.CSSGridTrack;
    /**
     * Gets current value of property {@link #getGridAutoFlow gridAutoFlow}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
     * MDN web docs: grid-auto-flow}
     *
     * Default value is `"Row"`.
     */
    getGridAutoFlow():
      | cssgrid.CSSGridAutoFlow
      | keyof typeof cssgrid.CSSGridAutoFlow;
    /**
     * Gets current value of property {@link #getGridAutoRows gridAutoRows}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
     * MDN web docs: grid-auto-rows}
     *
     * Default value is `empty string`.
     */
    getGridAutoRows(): cssgrid.CSSGridTrack;
    /**
     * Gets current value of property {@link #getGridColumnGap gridColumnGap}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap
     * MDN web docs: grid-column-gap}
     *
     * Default value is `empty string`.
     */
    getGridColumnGap(): CSSSize;
    /**
     * Gets current value of property {@link #getGridGap gridGap}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap
     * MDN web docs: grid-gap}
     *
     * Default value is `empty string`.
     */
    getGridGap(): cssgrid.CSSGridGapShortHand;
    /**
     * Gets current value of property {@link #getGridRowGap gridRowGap}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap
     * MDN web docs: grid-row-gap}
     *
     * Default value is `empty string`.
     */
    getGridRowGap(): CSSSize;
    /**
     * Gets current value of property {@link #getGridTemplateColumns gridTemplateColumns}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
     * MDN web docs: grid-template-columns}
     *
     * Default value is `empty string`.
     */
    getGridTemplateColumns(): cssgrid.CSSGridTrack;
    /**
     * Gets current value of property {@link #getGridTemplateRows gridTemplateRows}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
     * MDN web docs: grid-template-rows}
     *
     * Default value is `empty string`.
     */
    getGridTemplateRows(): cssgrid.CSSGridTrack;
    /**
     * Returns a metadata object for class sap.ui.layout.cssgrid.GridSettings.
     */
    static getMetadata(): ManagedObjectMetadata;
    /**
     * Sets a new value for property {@link #getGridAutoColumns gridAutoColumns}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
     * MDN web docs: grid-auto-columns}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridAutoColumns(
      /**
       * New value for property `gridAutoColumns`
       */
      sGridAutoColumns?: cssgrid.CSSGridTrack
    ): this;
    /**
     * Sets a new value for property {@link #getGridAutoFlow gridAutoFlow}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
     * MDN web docs: grid-auto-flow}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Row"`.
     */
    setGridAutoFlow(
      /**
       * New value for property `gridAutoFlow`
       */
      sGridAutoFlow?:
        | cssgrid.CSSGridAutoFlow
        | keyof typeof cssgrid.CSSGridAutoFlow
    ): this;
    /**
     * Sets a new value for property {@link #getGridAutoRows gridAutoRows}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
     * MDN web docs: grid-auto-rows}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridAutoRows(
      /**
       * New value for property `gridAutoRows`
       */
      sGridAutoRows?: cssgrid.CSSGridTrack
    ): this;
    /**
     * Sets a new value for property {@link #getGridColumnGap gridColumnGap}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap
     * MDN web docs: grid-column-gap}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridColumnGap(
      /**
       * New value for property `gridColumnGap`
       */
      sGridColumnGap?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getGridGap gridGap}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap
     * MDN web docs: grid-gap}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridGap(
      /**
       * New value for property `gridGap`
       */
      sGridGap?: cssgrid.CSSGridGapShortHand
    ): this;
    /**
     * Sets a new value for property {@link #getGridRowGap gridRowGap}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap
     * MDN web docs: grid-row-gap}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridRowGap(
      /**
       * New value for property `gridRowGap`
       */
      sGridRowGap?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getGridTemplateColumns gridTemplateColumns}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
     * MDN web docs: grid-template-columns}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridTemplateColumns(
      /**
       * New value for property `gridTemplateColumns`
       */
      sGridTemplateColumns?: cssgrid.CSSGridTrack
    ): this;
    /**
     * Sets a new value for property {@link #getGridTemplateRows gridTemplateRows}.
     *
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
     * MDN web docs: grid-template-rows}
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setGridTemplateRows(
      /**
       * New value for property `gridTemplateRows`
       */
      sGridTemplateRows?: cssgrid.CSSGridTrack
    ): this;
  }

  export interface $GridSettingsSettings extends $ManagedObjectSettings {
    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
     * MDN web docs: grid-template-columns}
     */
    gridTemplateColumns?: cssgrid.CSSGridTrack | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
     * MDN web docs: grid-template-rows}
     */
    gridTemplateRows?: cssgrid.CSSGridTrack | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap
     * MDN web docs: grid-row-gap}
     */
    gridRowGap?: CSSSize | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap
     * MDN web docs: grid-column-gap}
     */
    gridColumnGap?: CSSSize | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap
     * MDN web docs: grid-gap}
     */
    gridGap?: cssgrid.CSSGridGapShortHand | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
     * MDN web docs: grid-auto-rows}
     */
    gridAutoRows?: cssgrid.CSSGridTrack | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
     * MDN web docs: grid-auto-columns}
     */
    gridAutoColumns?: cssgrid.CSSGridTrack | PropertyBindingInfo;

    /**
     * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
     * MDN web docs: grid-auto-flow}
     */
    gridAutoFlow?:
      | (cssgrid.CSSGridAutoFlow | keyof typeof cssgrid.CSSGridAutoFlow)
      | PropertyBindingInfo;
  }
}

declare module "sap/ui/layout/cssgrid/ResponsiveColumnItemLayoutData" {
  import {
    default as LayoutData,
    $LayoutDataSettings,
  } from "sap/ui/core/LayoutData";

  import { cssgrid } from "sap/ui/layout/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.72
   *
   * Holds layout data for an item inside a responsive column layout.
   */
  export default class ResponsiveColumnItemLayoutData
    extends LayoutData
    implements cssgrid.IGridItemLayoutData {
    __implements__sap_ui_layout_cssgrid_IGridItemLayoutData: boolean;
    /**
     * Constructor for a new `sap.ui.layout.cssgrid.ResponsiveColumnItemLayoutData`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new element.
       */
      mSettings?: $ResponsiveColumnItemLayoutDataSettings
    );
    /**
     * Constructor for a new `sap.ui.layout.cssgrid.ResponsiveColumnItemLayoutData`.
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
       * Initial settings for the new element.
       */
      mSettings?: $ResponsiveColumnItemLayoutDataSettings
    );

    /**
     * Creates a new subclass of class sap.ui.layout.cssgrid.ResponsiveColumnItemLayoutData with name `sClassName`
     * and enriches it with the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, ResponsiveColumnItemLayoutData>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getColumns columns}.
     *
     * Specifies the number of columns, which the item should take.
     *
     * Default value is `1`.
     */
    getColumns(): int;
    /**
     * Returns a metadata object for class sap.ui.layout.cssgrid.ResponsiveColumnItemLayoutData.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getRows rows}.
     *
     * Specifies the number of rows, which the item should take.
     *
     * Default value is `1`.
     */
    getRows(): int;
    /**
     * Sets a new value for property {@link #getColumns columns}.
     *
     * Specifies the number of columns, which the item should take.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1`.
     */
    setColumns(
      /**
       * New value for property `columns`
       */
      iColumns?: int
    ): this;
    /**
     * Sets a new value for property {@link #getRows rows}.
     *
     * Specifies the number of rows, which the item should take.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1`.
     */
    setRows(
      /**
       * New value for property `rows`
       */
      iRows?: int
    ): this;
  }

  export interface $ResponsiveColumnItemLayoutDataSettings
    extends $LayoutDataSettings {
    /**
     * Specifies the number of columns, which the item should take.
     */
    columns?: int | PropertyBindingInfo;

    /**
     * Specifies the number of rows, which the item should take.
     */
    rows?: int | PropertyBindingInfo;
  }
}

declare module "sap/ui/layout/cssgrid/ResponsiveColumnLayout" {
  import {
    default as GridLayoutBase,
    $GridLayoutBaseSettings,
  } from "sap/ui/layout/cssgrid/GridLayoutBase";

  import ManagedObjectMetadata from "sap/ui/base/ManagedObjectMetadata";

  /**
   * @SINCE 1.72
   *
   * Represents a layout which displays variable number of columns, depending on available screen size. With
   * that it achieves flexible layouts and line breaks for large, medium, and small-sized screens, such as
   * desktop, tablet, and mobile.
   *
   * Grid row's height is dynamically determined by the height of the highest grid element on this row.
   */
  export default class ResponsiveColumnLayout extends GridLayoutBase {
    /**
     * Constructor for a new `ResponsiveColumnLayout`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ResponsiveColumnLayoutSettings
    );
    /**
     * Constructor for a new `ResponsiveColumnLayout`.
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
      mSettings?: $ResponsiveColumnLayoutSettings
    );

    /**
     * Attaches event handler `fnFunction` to the {@link #event:layoutChange layoutChange} event of this `sap.ui.layout.cssgrid.ResponsiveColumnLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.layout.cssgrid.ResponsiveColumnLayout` itself.
     *
     * Fired when the currently active layout changes
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
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.layout.cssgrid.ResponsiveColumnLayout`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:layoutChange layoutChange} event of this `sap.ui.layout.cssgrid.ResponsiveColumnLayout`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachLayoutChange(
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
     * Creates a new subclass of class sap.ui.layout.cssgrid.ResponsiveColumnLayout with name `sClassName` and
     * enriches it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.cssgrid.GridLayoutBase.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, ResponsiveColumnLayout>,
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
         * The name of the newly active layout - "S", "M", "ML", "L", "XL", "XXL" or "XXXL".
         */
        layout?: string;
      }
    ): this;
    /**
     * Returns a metadata object for class sap.ui.layout.cssgrid.ResponsiveColumnLayout.
     */
    static getMetadata(): ManagedObjectMetadata;
    /**
     * Returns if the Grid Layout is responsive.
     */
    isResponsive(): boolean;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:layoutChange layoutChange} event of this `sap.ui.layout.cssgrid.ResponsiveColumnLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.layout.cssgrid.ResponsiveColumnLayout` itself.
     *
     * Fired when the currently active layout changes
     */
    attachLayoutChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.layout.cssgrid.ResponsiveColumnLayout`
       * itself
       */
      oListener?: object
    ): this;
  }

  export interface $ResponsiveColumnLayoutSettings
    extends $GridLayoutBaseSettings {
    /**
     * Fired when the currently active layout changes
     */
    layoutChange?: Function;
  }
}

declare module "sap/ui/layout/DynamicSideContent" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import ScrollEnablement from "sap/ui/core/delegate/ScrollEnablement";

  import {
    SideContentFallDown,
    SideContentPosition,
    SideContentVisibility,
  } from "sap/ui/layout/library";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.30
   *
   * Layout control that allows additional (side) content to be displayed dynamically.
   *
   * Overview:
   *
   * `DynamicSideContent` is a layout control that allows additional content to be displayed in a way that
   * flexibly adapts to different screen sizes. The side content appears in a container next to or directly
   * below the main content (it doesn't overlay). When the side content is triggered, the main content becomes
   * narrower (if appearing side-by-side). The side content contains a separate scrollbar when appearing next
   * to the main content.
   *
   * Usage:
   *
   * When to use?
   *
   * Use this control if you want to display relevant information that is not critical for users to complete
   * a task. Users should have access to all the key functions and critical information in the app even if
   * they do not see the side content. This is important because on smaller screen sizes it may be difficult
   * to display the side content in a way that is easily accessible for the user.
   *
   * When not to use?
   *
   * Don't use it if you want to display navigation or critical information that prevents users from completing
   * a task when they have no access to the side content.
   *
   * Responsive Behavior:
   *
   * Screen width > 1440 px
   *
   *
   * 	 - Main vs. side content ratio is 75 vs. 25 percent (with a minimum of 320px each).
   * 	 - If the application defines a trigger, the side content can be hidden.
   *
   * Screen width <= 1440 px and > 720px
   *
   *
   * 	 - Main vs. side content ratio is 66.666 vs. 33.333 percent (with a minimum of 320px each). If the side
   * 			content width falls below 320 px, it automatically slides under the main content, unless the app development
   * 			team specifies that it should disappear.
   *
   * Screen width <= 720 px (for example on a mobile device)
   *
   *
   * 	 - In this case, the side content automatically disappears from the screen (unless specified to stay
   * 			under the content) and can be triggered from a pre-set trigger (specified within the app). When the side
   * 			content is triggered, it replaces the main content. We recommend that you always place the trigger for
   * 			the side content in the same location, such as in the app footer.
   *
   * A special case, allows for comparison mode between the main and side content. In this case, the screen
   * is split into 50:50 percent for main vs. side content. The responsive behavior of the equal split is
   * the same as in the standard view - the side content disappears on screen widths of less than 720 px and
   * can only be viewed by triggering it.
   *
   * **Note:** If the control that has property sticky inside the `DynamicSideContent` the stickiness of that
   * control will not work. `DynamicSideContent` has the overflow: auto style definition and this prevents
   * the sticky elements of the control from becoming fixed at the top of the viewport. This applies for example
   * to {@link sap.m.Table} and {@link sap.m.PlanningCalendar}.
   */
  export default class DynamicSideContent extends Control {
    /**
     * Constructor for a new `DynamicSideContent`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/dynamic-side-content/ Dynamic Side Content}
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $DynamicSideContentSettings
    );
    /**
     * Constructor for a new `DynamicSideContent`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/dynamic-side-content/ Dynamic Side Content}
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $DynamicSideContentSettings
    );

    /**
     * Adds a control to the main content area. Only the main content part in the aggregation is re-rendered.
     */
    addMainContent(
      /**
       * Object to be added in the aggregation
       */
      oControl: object
    ): this;
    /**
     * Adds a control to the side content area. Only the side content part in the aggregation is re-rendered.
     */
    addSideContent(
      /**
       * Object to be added in the aggregation
       */
      oControl: object
    ): this;
    /**
     * @SINCE 1.32
     *
     * Attaches event handler `fnFunction` to the {@link #event:breakpointChanged breakpointChanged} event of
     * this `sap.ui.layout.DynamicSideContent`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.layout.DynamicSideContent` itself.
     *
     * Fires when the current breakpoint has been changed.
     */
    attachBreakpointChanged(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.layout.DynamicSideContent` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the mainContent in the aggregation {@link #getMainContent mainContent}.
     */
    destroyMainContent(): this;
    /**
     * Destroys all the sideContent in the aggregation {@link #getSideContent sideContent}.
     */
    destroySideContent(): this;
    /**
     * @SINCE 1.32
     *
     * Detaches event handler `fnFunction` from the {@link #event:breakpointChanged breakpointChanged} event
     * of this `sap.ui.layout.DynamicSideContent`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachBreakpointChanged(
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
     * Creates a new subclass of class sap.ui.layout.DynamicSideContent with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, DynamicSideContent>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @SINCE 1.32
     *
     * Fires event {@link #event:breakpointChanged breakpointChanged} to attached listeners.
     */
    fireBreakpointChanged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        currentBreakpoint?: string;
      }
    ): this;
    /**
     * Gets current value of property {@link #getContainerQuery containerQuery}.
     *
     * If set to TRUE, then not the media Query (device screen size) but the size of the container, surrounding
     * the control, defines the current range.
     *
     * Default value is `false`.
     */
    getContainerQuery(): boolean;
    /**
     * Returns the breakpoint for the current state of the control. If the control is not rendered yet this
     * method will return `undefined`, as current break point calculation is based on the parent container width.
     */
    getCurrentBreakpoint(): String;
    /**
     * Gets current value of property {@link #getEqualSplit equalSplit}.
     *
     * Defines whether the control is in equal split mode. In this mode, the side and the main content take
     * 50:50 percent of the container on all screen sizes except for phone, where the main and side contents
     * are switching visibility using the toggle method.
     *
     * Default value is `false`.
     */
    getEqualSplit(): boolean;
    /**
     * Gets content of aggregation {@link #getMainContent mainContent}.
     *
     * Main content controls.
     */
    getMainContent(): Control[];
    /**
     * Returns a metadata object for class sap.ui.layout.DynamicSideContent.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.78
     *
     * Returns a scroll helper object used to handle scrolling.
     */
    getScrollDelegate(
      /**
       * The control instance that requested the scroll helper
       */
      oControl: object
    ): ScrollEnablement;
    /**
     * Gets current value of property {@link #getShowMainContent showMainContent}.
     *
     * Determines whether the main content is visible or hidden.
     *
     * Default value is `true`.
     */
    getShowMainContent(): boolean;
    /**
     * Gets current value of property {@link #getShowSideContent showSideContent}.
     *
     * Determines whether the side content is visible or hidden.
     *
     * **Note:** If both `showSideContent` and `showMainContent` properties are set to `true`, use the `toggle`
     * method for showing the side content on phone.
     *
     * Default value is `true`.
     */
    getShowSideContent(): boolean;
    /**
     * Gets content of aggregation {@link #getSideContent sideContent}.
     *
     * Side content controls.
     */
    getSideContent(): Control[];
    /**
     * Gets current value of property {@link #getSideContentFallDown sideContentFallDown}.
     *
     * Determines on which breakpoints the side content falls down below the main content.
     *
     * Default value is `OnMinimumWidth`.
     */
    getSideContentFallDown():
      | SideContentFallDown
      | keyof typeof SideContentFallDown;
    /**
     * @SINCE 1.36
     *
     * Gets current value of property {@link #getSideContentPosition sideContentPosition}.
     *
     * Determines whether the side content is on the left or on the right side of the main content.
     *
     * Default value is `End`.
     */
    getSideContentPosition():
      | SideContentPosition
      | keyof typeof SideContentPosition;
    /**
     * Gets current value of property {@link #getSideContentVisibility sideContentVisibility}.
     *
     * Determines on which breakpoints the side content is visible.
     *
     * Default value is `ShowAboveS`.
     */
    getSideContentVisibility():
      | SideContentVisibility
      | keyof typeof SideContentVisibility;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getMainContent mainContent}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfMainContent(
      /**
       * The mainContent whose index is looked for
       */
      oMainContent: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getSideContent sideContent}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfSideContent(
      /**
       * The sideContent whose index is looked for
       */
      oSideContent: Control
    ): int;
    /**
     * Inserts a mainContent into the aggregation {@link #getMainContent mainContent}.
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
     * Inserts a sideContent into the aggregation {@link #getSideContent sideContent}.
     */
    insertSideContent(
      /**
       * The sideContent to insert; if empty, nothing is inserted
       */
      oSideContent: Control,
      /**
       * The `0`-based index the sideContent should be inserted at; for a negative value of `iIndex`, the sideContent
       * is inserted at position 0; for a value greater than the current size of the aggregation, the sideContent
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Checks if the main content is visible.
     */
    isMainContentVisible(): boolean;
    /**
     * Checks if the side content is visible.
     */
    isSideContentVisible(): boolean;
    /**
     * Removes all the controls from the aggregation {@link #getMainContent mainContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllMainContent(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getSideContent sideContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllSideContent(): Control[];
    /**
     * Removes a mainContent from the aggregation {@link #getMainContent mainContent}.
     */
    removeMainContent(
      /**
       * The mainContent to remove or its index or id
       */
      vMainContent: int | string | Control
    ): Control;
    /**
     * Removes a sideContent from the aggregation {@link #getSideContent sideContent}.
     */
    removeSideContent(
      /**
       * The sideContent to remove or its index or id
       */
      vSideContent: int | string | Control
    ): Control;
    /**
     * Sets a new value for property {@link #getContainerQuery containerQuery}.
     *
     * If set to TRUE, then not the media Query (device screen size) but the size of the container, surrounding
     * the control, defines the current range.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setContainerQuery(
      /**
       * New value for property `containerQuery`
       */
      bContainerQuery?: boolean
    ): this;
    /**
     * Sets or unsets the page in equalSplit mode.
     */
    setEqualSplit(
      /**
       * Determines if the page is set to equalSplit mode
       */
      bState?: boolean
    ): this;
    /**
     * Sets the showMainContent property.
     */
    setShowMainContent(
      /**
       * Determines if the main content part is visible
       */
      bVisible: boolean,
      /**
       * Determines if the visual state is updated
       */
      bSuppressVisualUpdate: boolean
    ): this;
    /**
     * Sets the showSideContent property.
     */
    setShowSideContent(
      /**
       * Determines if the side content part is visible
       */
      bVisible: boolean,
      /**
       * Determines if the visual state is updated
       */
      bSuppressVisualUpdate: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSideContentFallDown sideContentFallDown}.
     *
     * Determines on which breakpoints the side content falls down below the main content.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `OnMinimumWidth`.
     */
    setSideContentFallDown(
      /**
       * New value for property `sideContentFallDown`
       */
      sSideContentFallDown?:
        | SideContentFallDown
        | keyof typeof SideContentFallDown
    ): this;
    /**
     * @SINCE 1.36
     *
     * Sets a new value for property {@link #getSideContentPosition sideContentPosition}.
     *
     * Determines whether the side content is on the left or on the right side of the main content.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `End`.
     */
    setSideContentPosition(
      /**
       * New value for property `sideContentPosition`
       */
      sSideContentPosition?:
        | SideContentPosition
        | keyof typeof SideContentPosition
    ): this;
    /**
     * Sets the sideContentVisibility property.
     */
    setSideContentVisibility(
      /**
       * Determines on which breakpoints the side content is visible.
       */
      sVisibility: SideContentVisibility | keyof typeof SideContentVisibility,
      /**
       * Determines if the visual state is updated
       */
      bSuppressVisualUpdate: boolean
    ): this;
    /**
     * Used for the toggle button functionality. When the control is on a phone screen size only, one control
     * area is visible. This helper method is used to implement a button/switch for changing between the main
     * and side content areas. Only works if the current breakpoint is "S".
     */
    toggle(): this;
    /**
     * @SINCE 1.32
     *
     * Attaches event handler `fnFunction` to the {@link #event:breakpointChanged breakpointChanged} event of
     * this `sap.ui.layout.DynamicSideContent`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.layout.DynamicSideContent` itself.
     *
     * Fires when the current breakpoint has been changed.
     */
    attachBreakpointChanged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.layout.DynamicSideContent` itself
       */
      oListener?: object
    ): this;
  }

  export interface $DynamicSideContentSettings extends $ControlSettings {
    /**
     * Determines whether the side content is visible or hidden.
     *
     * **Note:** If both `showSideContent` and `showMainContent` properties are set to `true`, use the `toggle`
     * method for showing the side content on phone.
     */
    showSideContent?: boolean | PropertyBindingInfo;

    /**
     * Determines whether the main content is visible or hidden.
     */
    showMainContent?: boolean | PropertyBindingInfo;

    /**
     * Determines on which breakpoints the side content is visible.
     */
    sideContentVisibility?:
      | (SideContentVisibility | keyof typeof SideContentVisibility)
      | PropertyBindingInfo;

    /**
     * Determines on which breakpoints the side content falls down below the main content.
     */
    sideContentFallDown?:
      | (SideContentFallDown | keyof typeof SideContentFallDown)
      | PropertyBindingInfo;

    /**
     * Defines whether the control is in equal split mode. In this mode, the side and the main content take
     * 50:50 percent of the container on all screen sizes except for phone, where the main and side contents
     * are switching visibility using the toggle method.
     */
    equalSplit?: boolean | PropertyBindingInfo;

    /**
     * If set to TRUE, then not the media Query (device screen size) but the size of the container, surrounding
     * the control, defines the current range.
     */
    containerQuery?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.36
     *
     * Determines whether the side content is on the left or on the right side of the main content.
     */
    sideContentPosition?:
      | (SideContentPosition | keyof typeof SideContentPosition)
      | PropertyBindingInfo;

    /**
     * Main content controls.
     */
    mainContent?: Control[] | Control | AggregationBindingInfo;

    /**
     * Side content controls.
     */
    sideContent?: Control[] | Control | AggregationBindingInfo;

    /**
     * @SINCE 1.32
     *
     * Fires when the current breakpoint has been changed.
     */
    breakpointChanged?: Function;
  }
}

declare module "sap/ui/layout/FixFlex" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { CSSSize } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.25.0
   *
   * A layout container with a fixed and a flexible part. Overview: The FixFlex control builds the container
   * for a layout with a fixed and a flexible part. The flexible container adapts its size to the fix container.
   * Guidelines::
   * 	 - The fix container can hold any number of controls, while the flexible container can hold only one
   *
   * 	 - In order for the FixFlex to stretch properly, the parent element, in which the control is placed,
   * 			needs to have a specified height or needs to have an absolute position.
   * 	 - Avoid nesting FixFlex in other flexbox-based layout controls ({@link sap.ui.layout.FixFlex FixFlex},
   * 			{@link sap.m.FlexBox FlexBox}, Hbox, Vbox). Otherwise, contents may be not accessible or multiple scrollbars
   * 			can appear.  Structure: The behavior of the FixFlex is controlled by the following properties:
   *
   * 	 - `fixContentSize` - The width/height of the fix part of the control
   * 	 - `fixFirst` - The ordering of the fix and flex part
   * 	 - `minFlexSize` - Scrolling inside the flex part, if its contents are large
   * 	 - `vertical` - Alignment of the FixFlex control  Responsive Behavior:
   * 	 - If the child control of the flex or the fix container has width/height bigger than the container
   * 			itself, the child control will be cropped in the view.
   * 	 - If minFlexSize is set, then a scrollbar is shown in the flexible part, depending on the `vertical`
   * 			property.
   */
  export default class FixFlex extends Control {
    /**
     * Constructor for a new FixFlex.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $FixFlexSettings
    );
    /**
     * Constructor for a new FixFlex.
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
      mSettings?: $FixFlexSettings
    );

    /**
     * Adds some fixContent to the aggregation {@link #getFixContent fixContent}.
     */
    addFixContent(
      /**
       * The fixContent to add; if empty, nothing is inserted
       */
      oFixContent: Control
    ): this;
    /**
     * Destroys all the fixContent in the aggregation {@link #getFixContent fixContent}.
     */
    destroyFixContent(): this;
    /**
     * Destroys the flexContent in the aggregation {@link #getFlexContent flexContent}.
     */
    destroyFlexContent(): this;
    /**
     * Creates a new subclass of class sap.ui.layout.FixFlex with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, FixFlex>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets content of aggregation {@link #getFixContent fixContent}.
     *
     * Controls in the fixed part of the layout.
     */
    getFixContent(): Control[];
    /**
     * Gets current value of property {@link #getFixContentSize fixContentSize}.
     *
     * Determines the height (if the vertical property is "true") or the width (if the vertical property is
     * "false") of the fixed area. If left at the default value "auto", the fixed-size area will be as large
     * as its content. In this case the content cannot use percentage sizes.
     *
     * Default value is `"auto"`.
     */
    getFixContentSize(): CSSSize;
    /**
     * Gets current value of property {@link #getFixFirst fixFirst}.
     *
     * Determines whether the fixed-size area should be on the beginning/top ( if the value is "true") or end/bottom
     * ( if the value is "false").
     *
     * Default value is `true`.
     */
    getFixFirst(): boolean;
    /**
     * Gets content of aggregation {@link #getFlexContent flexContent}.
     *
     * Control in the stretching part of the layout.
     */
    getFlexContent(): Control;
    /**
     * Returns a metadata object for class sap.ui.layout.FixFlex.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.29
     *
     * Gets current value of property {@link #getMinFlexSize minFlexSize}.
     *
     * Enables scrolling inside the flexible part. The given size is calculated in "px". If the child control
     * in the flexible part is larger than the available flexible size on the screen and if the available size
     * for the flexible part is smaller or equal to the minFlexSize value, the scroll will be for the entire
     * FixFlex control.
     *
     * Default value is `0`.
     */
    getMinFlexSize(): int;
    /**
     * Gets current value of property {@link #getVertical vertical}.
     *
     * Determines the direction of the layout of child elements. True for vertical and false for horizontal
     * layout.
     *
     * Default value is `true`.
     */
    getVertical(): boolean;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getFixContent fixContent}. and
     * returns its index if found or -1 otherwise.
     */
    indexOfFixContent(
      /**
       * The fixContent whose index is looked for
       */
      oFixContent: Control
    ): int;
    /**
     * Inserts a fixContent into the aggregation {@link #getFixContent fixContent}.
     */
    insertFixContent(
      /**
       * The fixContent to insert; if empty, nothing is inserted
       */
      oFixContent: Control,
      /**
       * The `0`-based index the fixContent should be inserted at; for a negative value of `iIndex`, the fixContent
       * is inserted at position 0; for a value greater than the current size of the aggregation, the fixContent
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getFixContent fixContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllFixContent(): Control[];
    /**
     * Removes a fixContent from the aggregation {@link #getFixContent fixContent}.
     */
    removeFixContent(
      /**
       * The fixContent to remove or its index or id
       */
      vFixContent: int | string | Control
    ): Control;
    /**
     * Sets a new value for property {@link #getFixContentSize fixContentSize}.
     *
     * Determines the height (if the vertical property is "true") or the width (if the vertical property is
     * "false") of the fixed area. If left at the default value "auto", the fixed-size area will be as large
     * as its content. In this case the content cannot use percentage sizes.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"auto"`.
     */
    setFixContentSize(
      /**
       * New value for property `fixContentSize`
       */
      sFixContentSize?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getFixFirst fixFirst}.
     *
     * Determines whether the fixed-size area should be on the beginning/top ( if the value is "true") or end/bottom
     * ( if the value is "false").
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setFixFirst(
      /**
       * New value for property `fixFirst`
       */
      bFixFirst?: boolean
    ): this;
    /**
     * Sets the aggregated {@link #getFlexContent flexContent}.
     */
    setFlexContent(
      /**
       * The flexContent to set
       */
      oFlexContent: Control
    ): this;
    /**
     * @SINCE 1.29
     *
     * Sets a new value for property {@link #getMinFlexSize minFlexSize}.
     *
     * Enables scrolling inside the flexible part. The given size is calculated in "px". If the child control
     * in the flexible part is larger than the available flexible size on the screen and if the available size
     * for the flexible part is smaller or equal to the minFlexSize value, the scroll will be for the entire
     * FixFlex control.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     */
    setMinFlexSize(
      /**
       * New value for property `minFlexSize`
       */
      iMinFlexSize?: int
    ): this;
    /**
     * Sets a new value for property {@link #getVertical vertical}.
     *
     * Determines the direction of the layout of child elements. True for vertical and false for horizontal
     * layout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setVertical(
      /**
       * New value for property `vertical`
       */
      bVertical?: boolean
    ): this;
  }

  export interface $FixFlexSettings extends $ControlSettings {
    /**
     * Determines the direction of the layout of child elements. True for vertical and false for horizontal
     * layout.
     */
    vertical?: boolean | PropertyBindingInfo;

    /**
     * Determines whether the fixed-size area should be on the beginning/top ( if the value is "true") or end/bottom
     * ( if the value is "false").
     */
    fixFirst?: boolean | PropertyBindingInfo;

    /**
     * Determines the height (if the vertical property is "true") or the width (if the vertical property is
     * "false") of the fixed area. If left at the default value "auto", the fixed-size area will be as large
     * as its content. In this case the content cannot use percentage sizes.
     */
    fixContentSize?: CSSSize | PropertyBindingInfo;

    /**
     * @SINCE 1.29
     *
     * Enables scrolling inside the flexible part. The given size is calculated in "px". If the child control
     * in the flexible part is larger than the available flexible size on the screen and if the available size
     * for the flexible part is smaller or equal to the minFlexSize value, the scroll will be for the entire
     * FixFlex control.
     */
    minFlexSize?: int | PropertyBindingInfo;

    /**
     * Controls in the fixed part of the layout.
     */
    fixContent?: Control[] | Control | AggregationBindingInfo;

    /**
     * Control in the stretching part of the layout.
     */
    flexContent?: Control;
  }
}

declare module "sap/ui/layout/form/ColumnContainerData" {
  import {
    default as LayoutData,
    $LayoutDataSettings,
  } from "sap/ui/core/LayoutData";

  import { form } from "sap/ui/layout/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.56.0
   *
   * The `ColumnLayout`-specific layout data for the `FormContainer` element.
   *
   * Depending on its size, the `Form` control is divided into 1, 2, 3 or 4 columns by the `ColumnLayout`
   * control. Using `ColumnContainerData`, the size of the `FormContainer` element can be influenced.
   */
  export default class ColumnContainerData extends LayoutData {
    /**
     * Constructor for a new sap.ui.layout.form.ColumnContainerData.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ColumnContainerDataSettings
    );
    /**
     * Constructor for a new sap.ui.layout.form.ColumnContainerData.
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
      mSettings?: $ColumnContainerDataSettings
    );

    /**
     * Creates a new subclass of class sap.ui.layout.form.ColumnContainerData with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, ColumnContainerData>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getColumnsL columnsL}.
     *
     * Number of columns the `FormContainer` element uses if the `Form` control has large size.
     *
     * The number of columns for large size must not be smaller than the number of columns for medium size.
     *
     * Default value is `2`.
     */
    getColumnsL(): form.ColumnsL;
    /**
     * Gets current value of property {@link #getColumnsM columnsM}.
     *
     * Number of columns the `FormContainer` element uses if the `Form` control has medium size.
     *
     * Default value is `1`.
     */
    getColumnsM(): form.ColumnsM;
    /**
     * Gets current value of property {@link #getColumnsXL columnsXL}.
     *
     * Number of columns the `FormContainer` element uses if the `Form` control has extra-large size.
     *
     * The number of columns for extra-large size must not be smaller than the number of columns for large size.
     *
     * Default value is `2`.
     */
    getColumnsXL(): form.ColumnsXL;
    /**
     * Returns a metadata object for class sap.ui.layout.form.ColumnContainerData.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Sets a new value for property {@link #getColumnsL columnsL}.
     *
     * Number of columns the `FormContainer` element uses if the `Form` control has large size.
     *
     * The number of columns for large size must not be smaller than the number of columns for medium size.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `2`.
     */
    setColumnsL(
      /**
       * New value for property `columnsL`
       */
      sColumnsL?: form.ColumnsL
    ): this;
    /**
     * Sets a new value for property {@link #getColumnsM columnsM}.
     *
     * Number of columns the `FormContainer` element uses if the `Form` control has medium size.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1`.
     */
    setColumnsM(
      /**
       * New value for property `columnsM`
       */
      sColumnsM?: form.ColumnsM
    ): this;
    /**
     * Sets a new value for property {@link #getColumnsXL columnsXL}.
     *
     * Number of columns the `FormContainer` element uses if the `Form` control has extra-large size.
     *
     * The number of columns for extra-large size must not be smaller than the number of columns for large size.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `2`.
     */
    setColumnsXL(
      /**
       * New value for property `columnsXL`
       */
      sColumnsXL?: form.ColumnsXL
    ): this;
  }

  export interface $ColumnContainerDataSettings extends $LayoutDataSettings {
    /**
     * Number of columns the `FormContainer` element uses if the `Form` control has extra-large size.
     *
     * The number of columns for extra-large size must not be smaller than the number of columns for large size.
     */
    columnsXL?: form.ColumnsXL | PropertyBindingInfo;

    /**
     * Number of columns the `FormContainer` element uses if the `Form` control has large size.
     *
     * The number of columns for large size must not be smaller than the number of columns for medium size.
     */
    columnsL?: form.ColumnsL | PropertyBindingInfo;

    /**
     * Number of columns the `FormContainer` element uses if the `Form` control has medium size.
     */
    columnsM?: form.ColumnsM | PropertyBindingInfo;
  }
}

declare module "sap/ui/layout/form/ColumnElementData" {
  import {
    default as LayoutData,
    $LayoutDataSettings,
  } from "sap/ui/core/LayoutData";

  import { form } from "sap/ui/layout/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.56.0
   *
   * The `ColumnLayout`-specific layout data for the `FormElement` content fields.
   *
   * One `FormElement` element contains 12 cells and has two sizes, small and large. Using `ColumnElementData`,
   * the default calculation of the cells used for a field or label can be overwritten.
   */
  export default class ColumnElementData extends LayoutData {
    /**
     * Constructor for a new sap.ui.layout.form.ColumnElementData.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ColumnElementDataSettings
    );
    /**
     * Constructor for a new sap.ui.layout.form.ColumnElementData.
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
      mSettings?: $ColumnElementDataSettings
    );

    /**
     * Creates a new subclass of class sap.ui.layout.form.ColumnElementData with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, ColumnElementData>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getCellsLarge cellsLarge}.
     *
     * Number of cells used by a field if the `FormElement` element is large. The label is then beside the fields
     * per default.
     *
     * If set to `12`, the full size of the `FormElement` element is used.
     *
     * Default value is `8`.
     */
    getCellsLarge(): form.ColumnCells;
    /**
     * Gets current value of property {@link #getCellsSmall cellsSmall}.
     *
     * Number of cells used by a field if the `FormElement` element is small. The label is then above the fields
     * per default.
     *
     * If set to `12`, the full size of the `FormElement` is used.
     *
     * Default value is `12`.
     */
    getCellsSmall(): form.ColumnCells;
    /**
     * Returns a metadata object for class sap.ui.layout.form.ColumnElementData.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Sets a new value for property {@link #getCellsLarge cellsLarge}.
     *
     * Number of cells used by a field if the `FormElement` element is large. The label is then beside the fields
     * per default.
     *
     * If set to `12`, the full size of the `FormElement` element is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `8`.
     */
    setCellsLarge(
      /**
       * New value for property `cellsLarge`
       */
      sCellsLarge?: form.ColumnCells
    ): this;
    /**
     * Sets a new value for property {@link #getCellsSmall cellsSmall}.
     *
     * Number of cells used by a field if the `FormElement` element is small. The label is then above the fields
     * per default.
     *
     * If set to `12`, the full size of the `FormElement` is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `12`.
     */
    setCellsSmall(
      /**
       * New value for property `cellsSmall`
       */
      sCellsSmall?: form.ColumnCells
    ): this;
  }

  export interface $ColumnElementDataSettings extends $LayoutDataSettings {
    /**
     * Number of cells used by a field if the `FormElement` element is large. The label is then beside the fields
     * per default.
     *
     * If set to `12`, the full size of the `FormElement` element is used.
     */
    cellsLarge?: form.ColumnCells | PropertyBindingInfo;

    /**
     * Number of cells used by a field if the `FormElement` element is small. The label is then above the fields
     * per default.
     *
     * If set to `12`, the full size of the `FormElement` is used.
     */
    cellsSmall?: form.ColumnCells | PropertyBindingInfo;
  }
}

declare module "sap/ui/layout/form/ColumnLayout" {
  import {
    default as FormLayout,
    $FormLayoutSettings,
  } from "sap/ui/layout/form/FormLayout";

  import { form } from "sap/ui/layout/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.56.0
   *
   * The `ColumnLayout` control renders a `Form` control in a column-based responsive way. Depending on its
   * size, the `Form` control is divided into one or more columns. (XL - max. 4 columns, L - max. 3 columns,
   * M - max. 2 columns and S - 1 column.)
   *
   * The `FormContainer` elements are spread out to the columns depending on the number of `FormContainer`
   * elements and their size. For example, if there are 4 columns and 2 `FormContainer` elements, each `FormContainer`
   * element will use 2 columns. If there are 3 columns and 2 `FormContainer` elements, the larger one will
   * use 2 columns, the smaller one 1 column. The size of a `FormContainer` element will be determined based
   * on the number of visible `FormElement` elements assigned to it. If there are more `FormContainer` elements
   * than columns, every `FormContainer` element uses only one column. So the last row of the `Form` control
   * will not be fully used.
   *
   * The default size of the `FormContainer` element can be overwritten by using `ColumnContainerData` as
   * `LayoutData`. If one `FormContainer` element has `ColumnContainerData` set, the size calculation of the
   * other `FormContainer` elements might not lead to the expected result. In this case, use `ColumnContainerData`
   * also for the other `FormContainer` elements.
   *
   * The `FormElement` elements are spread out to the columns of a `FormContainer` element arranged in a newspaper-like
   * order. The position of the labels and fields depends on the size of the used column. If there is enough
   * space, the labels are beside the fields, otherwise above the fields.
   *
   * The default size of a content control of a `FormElement` element can be overwritten using `ColumnElementData`
   * as `LayoutData`. If one control assigned to a `FormElement` element has `ColumnElementData` set, the
   * size calculation of the other controls assigned to the `FormElement` element might not lead to the expected
   * result. In this case, use `ColumnElementData` for the other controls, assigned to the `FormElement` element,
   * too.
   *
   * The placement of the `FormElement` elements is made by the browser `column-count` logic. So this can
   * be different in different browsers and lead in some cases to other results than might be expected.
   *
   * **Note:** This control cannot be used stand-alone, it just renders a `Form` control, so it must be assigned
   * to a `Form` control using the `layout` aggregation.
   */
  export default class ColumnLayout extends FormLayout {
    /**
     * Constructor for a new `sap.ui.layout.form.ColumnLayout`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ColumnLayoutSettings
    );
    /**
     * Constructor for a new `sap.ui.layout.form.ColumnLayout`.
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
      mSettings?: $ColumnLayoutSettings
    );

    /**
     * Creates a new subclass of class sap.ui.layout.form.ColumnLayout with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, ColumnLayout>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getColumnsL columnsL}.
     *
     * Number of columns for large size.
     *
     * The number of columns for large size must not be smaller than the number of columns for medium size.
     *
     * Default value is `2`.
     */
    getColumnsL(): form.ColumnsL;
    /**
     * Gets current value of property {@link #getColumnsM columnsM}.
     *
     * Number of columns for medium size.
     *
     * Default value is `1`.
     */
    getColumnsM(): form.ColumnsM;
    /**
     * Gets current value of property {@link #getColumnsXL columnsXL}.
     *
     * Number of columns for extra-large size.
     *
     * The number of columns for extra-large size must not be smaller than the number of columns for large size.
     *
     * Default value is `2`.
     */
    getColumnsXL(): form.ColumnsXL;
    /**
     * Gets current value of property {@link #getEmptyCellsLarge emptyCellsLarge}.
     *
     * Defines how many cells are empty at the end of a row. This could be used to keep the fields small on
     * large screens.
     *
     * Default value is `0`.
     */
    getEmptyCellsLarge(): form.EmptyCells;
    /**
     * Gets current value of property {@link #getLabelCellsLarge labelCellsLarge}.
     *
     * Defines how many cells a label uses if the column is large.
     *
     * Default value is `4`.
     */
    getLabelCellsLarge(): form.ColumnCells;
    /**
     * Returns a metadata object for class sap.ui.layout.form.ColumnLayout.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Sets a new value for property {@link #getColumnsL columnsL}.
     *
     * Number of columns for large size.
     *
     * The number of columns for large size must not be smaller than the number of columns for medium size.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `2`.
     */
    setColumnsL(
      /**
       * New value for property `columnsL`
       */
      sColumnsL?: form.ColumnsL
    ): this;
    /**
     * Sets a new value for property {@link #getColumnsM columnsM}.
     *
     * Number of columns for medium size.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1`.
     */
    setColumnsM(
      /**
       * New value for property `columnsM`
       */
      sColumnsM?: form.ColumnsM
    ): this;
    /**
     * Sets a new value for property {@link #getColumnsXL columnsXL}.
     *
     * Number of columns for extra-large size.
     *
     * The number of columns for extra-large size must not be smaller than the number of columns for large size.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `2`.
     */
    setColumnsXL(
      /**
       * New value for property `columnsXL`
       */
      sColumnsXL?: form.ColumnsXL
    ): this;
    /**
     * Sets a new value for property {@link #getEmptyCellsLarge emptyCellsLarge}.
     *
     * Defines how many cells are empty at the end of a row. This could be used to keep the fields small on
     * large screens.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     */
    setEmptyCellsLarge(
      /**
       * New value for property `emptyCellsLarge`
       */
      sEmptyCellsLarge?: form.EmptyCells
    ): this;
    /**
     * Sets a new value for property {@link #getLabelCellsLarge labelCellsLarge}.
     *
     * Defines how many cells a label uses if the column is large.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `4`.
     */
    setLabelCellsLarge(
      /**
       * New value for property `labelCellsLarge`
       */
      sLabelCellsLarge?: form.ColumnCells
    ): this;
  }

  export interface $ColumnLayoutSettings extends $FormLayoutSettings {
    /**
     * Number of columns for extra-large size.
     *
     * The number of columns for extra-large size must not be smaller than the number of columns for large size.
     */
    columnsXL?: form.ColumnsXL | PropertyBindingInfo;

    /**
     * Number of columns for large size.
     *
     * The number of columns for large size must not be smaller than the number of columns for medium size.
     */
    columnsL?: form.ColumnsL | PropertyBindingInfo;

    /**
     * Number of columns for medium size.
     */
    columnsM?: form.ColumnsM | PropertyBindingInfo;

    /**
     * Defines how many cells a label uses if the column is large.
     */
    labelCellsLarge?: form.ColumnCells | PropertyBindingInfo;

    /**
     * Defines how many cells are empty at the end of a row. This could be used to keep the fields small on
     * large screens.
     */
    emptyCellsLarge?: form.EmptyCells | PropertyBindingInfo;
  }
}

declare module "sap/ui/layout/form/Form" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID, Toolbar, CSSSize } from "sap/ui/core/library";

  import FormContainer from "sap/ui/layout/form/FormContainer";

  import FormLayout from "sap/ui/layout/form/FormLayout";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Title from "sap/ui/core/Title";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.16.0
   *
   * A `Form` control arranges labels and fields (like input fields) into groups and rows. There are different
   * ways to visualize forms for different screen sizes.
   *
   * A `Form` is structured into `FormContainers`. Each `FormContainer` consists of `FormElements`. The `FormElements`
   * consists of a label and the form fields. A `Form` doesn't render its content by itself. The rendering
   * is done by the assigned `FormLayout`. This is so that the rendering can be adopted to new UI requirements
   * without changing the `Form` itself.
   *
   * For the content of a `Form`, `VariantLayoutData` are supported to allow simple switching of the `FormLayout`.
   * `LayoutData` on the content can be used to overwrite the default layout of the `Form`.
   *
   * The `Form` (and its sub-controls) automatically add label and field assignment to enable screen reader
   * support. It also adds keyboard support to navigate between the fields and groups inside the form.
   *
   * **Warning:** Do not put any layout or other container controls into the `FormElement`. Views are also
   * not supported. This could damage the visual layout, keyboard support and screen-reader support.
   *
   * If editable controls are used as content, the `editable` property must be set to `true`, otherwise to
   * `false`. If the `editable` property is set incorrectly, there will be visual issues like wrong label
   * alignment or wrong spacing between the controls.
   */
  export default class Form extends Control {
    /**
     * Constructor for a new sap.ui.layout.form.Form.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $FormSettings
    );
    /**
     * Constructor for a new sap.ui.layout.form.Form.
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
      mSettings?: $FormSettings
    );

    /**
     * @SINCE 1.28.0
     *
     * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    addAriaLabelledBy(
      /**
       * The ariaLabelledBy to add; if empty, nothing is inserted
       */
      vAriaLabelledBy: ID | Control
    ): this;
    /**
     * Adds some formContainer to the aggregation {@link #getFormContainers formContainers}.
     */
    addFormContainer(
      /**
       * The formContainer to add; if empty, nothing is inserted
       */
      oFormContainer: FormContainer
    ): this;
    /**
     * Destroys all the formContainers in the aggregation {@link #getFormContainers formContainers}.
     */
    destroyFormContainers(): this;
    /**
     * Destroys the layout in the aggregation {@link #getLayout layout}.
     */
    destroyLayout(): this;
    /**
     * Destroys the title in the aggregation {@link #getTitle title}.
     */
    destroyTitle(): this;
    /**
     * @SINCE 1.36.0
     *
     * Destroys the toolbar in the aggregation {@link #getToolbar toolbar}.
     */
    destroyToolbar(): this;
    /**
     * Creates a new subclass of class sap.ui.layout.form.Form with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, Form>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @SINCE 1.28.0
     *
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
     * ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * @SINCE 1.20.0
     *
     * Gets current value of property {@link #getEditable editable}.
     *
     * Applies a device-specific and theme-specific line height and label alignment to the form rows if the
     * form has editable content. If set, all (not only the editable) rows of the form will get the line height
     * of editable fields.
     *
     * The labels inside the form will be rendered by default in the according mode.
     *
     * **Note:** The setting of this property does not change the content of the form. For example, `Input`
     * controls in a form with `editable` set to false are still editable.
     *
     * **Warning:** If this property is wrongly set, this might lead to visual issues. The labels and fields
     * might be misaligned, the labels might be rendered in the wrong mode, and the spacing between the single
     * controls might be wrong. Also, controls that do not fit the mode might be rendered incorrectly.
     *
     * Default value is `false`.
     */
    getEditable(): boolean;
    /**
     * Gets content of aggregation {@link #getFormContainers formContainers}.
     *
     * Containers with the content of the form. A `FormContainer` represents a group inside the `Form`.
     */
    getFormContainers(): FormContainer[];
    /**
     * Gets content of aggregation {@link #getLayout layout}.
     *
     * Layout of the `Form`. The assigned `Layout` renders the `Form`. We recommend using the {@link sap.ui.layout.form.ColumnLayout
     * ColumnLayout} for rendering a `Form`, as its responsiveness allows the available space to be used in
     * the best way possible.
     */
    getLayout(): FormLayout;
    /**
     * Returns a metadata object for class sap.ui.layout.form.Form.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets content of aggregation {@link #getTitle title}.
     *
     * Title of the `Form`. Can either be a `Title` element or a string. If a `Title` element it used, the style
     * of the title can be set.
     *
     * **Note:** If a `Toolbar` is used, the `Title` is ignored.
     *
     * **Note:** If the title is provided as a string, the title is rendered with a theme-dependent default
     * level. As the `Form` control cannot know the structure of the page, this might not fit the page structure.
     * In this case provide the title using a `Title` element and set its {@link sap.ui.core.Title#setLevel
     * level} to the needed value.
     */
    getTitle(): Title | string;
    /**
     * @SINCE 1.36.0
     *
     * Gets content of aggregation {@link #getToolbar toolbar}.
     *
     * Toolbar of the `Form`.
     *
     * **Note:** If a `Toolbar` is used, the `Title` is ignored. If a title is needed inside the `Toolbar` it
     * must be added at content to the `Toolbar`. In this case add the `Title` to the `ariaLabelledBy` association.
     * Use the right title level to meet the visual requirements. This might be theme-dependent.
     */
    getToolbar(): Toolbar;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Width of the `Form`.
     */
    getWidth(): CSSSize;
    /**
     * Checks for the provided `sap.ui.layout.form.FormContainer` in the aggregation {@link #getFormContainers
     * formContainers}. and returns its index if found or -1 otherwise.
     */
    indexOfFormContainer(
      /**
       * The formContainer whose index is looked for
       */
      oFormContainer: FormContainer
    ): int;
    /**
     * Inserts a formContainer into the aggregation {@link #getFormContainers formContainers}.
     */
    insertFormContainer(
      /**
       * The formContainer to insert; if empty, nothing is inserted
       */
      oFormContainer: FormContainer,
      /**
       * The `0`-based index the formContainer should be inserted at; for a negative value of `iIndex`, the formContainer
       * is inserted at position 0; for a value greater than the current size of the aggregation, the formContainer
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * @SINCE 1.28.0
     *
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * Removes all the controls from the aggregation {@link #getFormContainers formContainers}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllFormContainers(): FormContainer[];
    /**
     * @SINCE 1.28.0
     *
     * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAriaLabelledBy(
      /**
       * The ariaLabelledBy to be removed or its index or ID
       */
      vAriaLabelledBy: int | ID | Control
    ): ID;
    /**
     * Removes a formContainer from the aggregation {@link #getFormContainers formContainers}.
     */
    removeFormContainer(
      /**
       * The formContainer to remove or its index or id
       */
      vFormContainer: int | string | FormContainer
    ): FormContainer;
    /**
     * @SINCE 1.20.0
     *
     * Sets a new value for property {@link #getEditable editable}.
     *
     * Applies a device-specific and theme-specific line height and label alignment to the form rows if the
     * form has editable content. If set, all (not only the editable) rows of the form will get the line height
     * of editable fields.
     *
     * The labels inside the form will be rendered by default in the according mode.
     *
     * **Note:** The setting of this property does not change the content of the form. For example, `Input`
     * controls in a form with `editable` set to false are still editable.
     *
     * **Warning:** If this property is wrongly set, this might lead to visual issues. The labels and fields
     * might be misaligned, the labels might be rendered in the wrong mode, and the spacing between the single
     * controls might be wrong. Also, controls that do not fit the mode might be rendered incorrectly.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setEditable(
      /**
       * New value for property `editable`
       */
      bEditable?: boolean
    ): this;
    /**
     * Sets the aggregated {@link #getLayout layout}.
     */
    setLayout(
      /**
       * The layout to set
       */
      oLayout: FormLayout
    ): this;
    /**
     * Sets the aggregated {@link #getTitle title}.
     */
    setTitle(
      /**
       * The title to set
       */
      vTitle: Title | string
    ): this;
    /**
     * @SINCE 1.36.0
     *
     * Sets the aggregated {@link #getToolbar toolbar}.
     */
    setToolbar(
      /**
       * The toolbar to set
       */
      oToolbar: Toolbar
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Width of the `Form`.
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

  export interface $FormSettings extends $ControlSettings {
    /**
     * Width of the `Form`.
     */
    width?: CSSSize | PropertyBindingInfo;

    /**
     * @SINCE 1.20.0
     *
     * Applies a device-specific and theme-specific line height and label alignment to the form rows if the
     * form has editable content. If set, all (not only the editable) rows of the form will get the line height
     * of editable fields.
     *
     * The labels inside the form will be rendered by default in the according mode.
     *
     * **Note:** The setting of this property does not change the content of the form. For example, `Input`
     * controls in a form with `editable` set to false are still editable.
     *
     * **Warning:** If this property is wrongly set, this might lead to visual issues. The labels and fields
     * might be misaligned, the labels might be rendered in the wrong mode, and the spacing between the single
     * controls might be wrong. Also, controls that do not fit the mode might be rendered incorrectly.
     */
    editable?: boolean | PropertyBindingInfo;

    /**
     * Containers with the content of the form. A `FormContainer` represents a group inside the `Form`.
     */
    formContainers?: FormContainer[] | FormContainer | AggregationBindingInfo;

    /**
     * Title of the `Form`. Can either be a `Title` element or a string. If a `Title` element it used, the style
     * of the title can be set.
     *
     * **Note:** If a `Toolbar` is used, the `Title` is ignored.
     *
     * **Note:** If the title is provided as a string, the title is rendered with a theme-dependent default
     * level. As the `Form` control cannot know the structure of the page, this might not fit the page structure.
     * In this case provide the title using a `Title` element and set its {@link sap.ui.core.Title#setLevel
     * level} to the needed value.
     */
    title?: string | Title | PropertyBindingInfo;

    /**
     * @SINCE 1.36.0
     *
     * Toolbar of the `Form`.
     *
     * **Note:** If a `Toolbar` is used, the `Title` is ignored. If a title is needed inside the `Toolbar` it
     * must be added at content to the `Toolbar`. In this case add the `Title` to the `ariaLabelledBy` association.
     * Use the right title level to meet the visual requirements. This might be theme-dependent.
     */
    toolbar?: Toolbar;

    /**
     * Layout of the `Form`. The assigned `Layout` renders the `Form`. We recommend using the {@link sap.ui.layout.form.ColumnLayout
     * ColumnLayout} for rendering a `Form`, as its responsiveness allows the available space to be used in
     * the best way possible.
     */
    layout?: FormLayout;

    /**
     * @SINCE 1.28.0
     *
     * Association to controls / IDs that label this control (see WAI-ARIA attribute `aria-labelledby`).
     */
    ariaLabelledBy?: Array<Control | string>;
  }
}

declare module "sap/ui/layout/form/FormContainer" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import { ID, Toolbar } from "sap/ui/core/library";

  import Control from "sap/ui/core/Control";

  import FormElement from "sap/ui/layout/form/FormElement";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Title from "sap/ui/core/Title";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.16.0
   *
   * A `FormContainer` represents a group inside a `Form`. It consists of `FormElements`. The rendering of
   * the `FormContainer` is done by the `FormLayout` assigned to the `Form`.
   */
  export default class FormContainer extends UI5Element {
    /**
     * Constructor for a new sap.ui.layout.form.FormContainer.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $FormContainerSettings
    );
    /**
     * Constructor for a new sap.ui.layout.form.FormContainer.
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
      mSettings?: $FormContainerSettings
    );

    /**
     * @SINCE 1.74.0
     *
     * Sets the editable state of the `FormContainer`.
     *
     * This must only be called from the `Form`.
     *
     * Labels inside of a `Form` must be invalidated if `editable` changed on `Form`.
     */
    _setEditable(
      /**
       * Editable state of the `Form`
       */
      bEditable: boolean
    ): void;
    /**
     * @SINCE 1.36.0
     *
     * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    addAriaLabelledBy(
      /**
       * The ariaLabelledBy to add; if empty, nothing is inserted
       */
      vAriaLabelledBy: ID | Control
    ): this;
    /**
     * Adds some formElement to the aggregation {@link #getFormElements formElements}.
     */
    addFormElement(
      /**
       * The formElement to add; if empty, nothing is inserted
       */
      oFormElement: FormElement
    ): this;
    /**
     * Destroys all the formElements in the aggregation {@link #getFormElements formElements}.
     */
    destroyFormElements(): this;
    /**
     * Destroys the title in the aggregation {@link #getTitle title}.
     */
    destroyTitle(): this;
    /**
     * @SINCE 1.36.0
     *
     * Destroys the toolbar in the aggregation {@link #getToolbar toolbar}.
     */
    destroyToolbar(): this;
    /**
     * Creates a new subclass of class sap.ui.layout.form.FormContainer with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, FormContainer>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @SINCE 1.36.0
     *
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
     * ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * Gets current value of property {@link #getExpandable expandable}.
     *
     * Defines if the `FormContainer` is expandable.
     *
     * **Note:** The expander icon will only be shown if a `title` is set for the `FormContainer`.
     *
     * Default value is `false`.
     */
    getExpandable(): boolean;
    /**
     * Gets current value of property {@link #getExpanded expanded}.
     *
     * Container is expanded.
     *
     * **Note:** This property only works if `expandable` is set to `true`.
     *
     * Default value is `true`.
     */
    getExpanded(): boolean;
    /**
     * Gets content of aggregation {@link #getFormElements formElements}.
     *
     * The `FormElements` contain the content (labels and fields) of the `FormContainers`.
     */
    getFormElements(): FormElement[];
    /**
     * Returns a metadata object for class sap.ui.layout.form.FormContainer.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets content of aggregation {@link #getTitle title}.
     *
     * Title of the `FormContainer`. Can either be a `Title` element or a string. If a `Title` element is used,
     * the style of the title can be set.
     *
     * **Note:** If a `Toolbar` is used, the `Title` is ignored.
     *
     * **Note:** If the title is provided as a string, the title is rendered with a theme-dependent default
     * level. As the `Form` control cannot know the structure of the page, this might not fit the page structure.
     * In this case provide the title using a `Title` element and set its {@link sap.ui.core.Title#setLevel
     * level} to the needed value.
     */
    getTitle(): Title | string;
    /**
     * @SINCE 1.36.0
     *
     * Gets content of aggregation {@link #getToolbar toolbar}.
     *
     * Toolbar of the `FormContainer`.
     *
     * **Note:** If a `Toolbar` is used, the `Title` is ignored. If a title is needed inside the `Toolbar` it
     * must be added at content to the `Toolbar`. In this case add the `Title` to the `ariaLabelledBy` association.
     * Use the right title level to meet the visual requirements. This might be theme-dependent.
     */
    getToolbar(): Toolbar;
    /**
     * Gets current value of property {@link #getVisible visible}.
     *
     * If set to `false`, the `FormContainer` is not rendered.
     *
     * Default value is `true`.
     */
    getVisible(): boolean;
    /**
     * Checks for the provided `sap.ui.layout.form.FormElement` in the aggregation {@link #getFormElements formElements}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfFormElement(
      /**
       * The formElement whose index is looked for
       */
      oFormElement: FormElement
    ): int;
    /**
     * Inserts a formElement into the aggregation {@link #getFormElements formElements}.
     */
    insertFormElement(
      /**
       * The formElement to insert; if empty, nothing is inserted
       */
      oFormElement: FormElement,
      /**
       * The `0`-based index the formElement should be inserted at; for a negative value of `iIndex`, the formElement
       * is inserted at position 0; for a value greater than the current size of the aggregation, the formElement
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Determines if the `FormContainer` is visible or not. Per default it just returns the value of the `visible`
     * property. But this might be overwritten by inherited elements.
     *
     * For rendering by `FormLayouts` this function has to be used instead of `getVisible`.
     */
    isVisible(): boolean;
    /**
     * @SINCE 1.36.0
     *
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * Removes all the controls from the aggregation {@link #getFormElements formElements}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllFormElements(): FormElement[];
    /**
     * @SINCE 1.36.0
     *
     * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAriaLabelledBy(
      /**
       * The ariaLabelledBy to be removed or its index or ID
       */
      vAriaLabelledBy: int | ID | Control
    ): ID;
    /**
     * Removes a formElement from the aggregation {@link #getFormElements formElements}.
     */
    removeFormElement(
      /**
       * The formElement to remove or its index or id
       */
      vFormElement: int | string | FormElement
    ): FormElement;
    /**
     * Sets a new value for property {@link #getExpandable expandable}.
     *
     * Defines if the `FormContainer` is expandable.
     *
     * **Note:** The expander icon will only be shown if a `title` is set for the `FormContainer`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setExpandable(
      /**
       * New value for property `expandable`
       */
      bExpandable?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getExpanded expanded}.
     *
     * Container is expanded.
     *
     * **Note:** This property only works if `expandable` is set to `true`.
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
     * Sets the aggregated {@link #getTitle title}.
     */
    setTitle(
      /**
       * The title to set
       */
      vTitle: Title | string
    ): this;
    /**
     * @SINCE 1.36.0
     *
     * Sets the aggregated {@link #getToolbar toolbar}.
     */
    setToolbar(
      /**
       * The toolbar to set
       */
      oToolbar: Toolbar
    ): this;
    /**
     * Sets a new value for property {@link #getVisible visible}.
     *
     * If set to `false`, the `FormContainer` is not rendered.
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

  export interface $FormContainerSettings extends $ElementSettings {
    /**
     * Container is expanded.
     *
     * **Note:** This property only works if `expandable` is set to `true`.
     */
    expanded?: boolean | PropertyBindingInfo;

    /**
     * Defines if the `FormContainer` is expandable.
     *
     * **Note:** The expander icon will only be shown if a `title` is set for the `FormContainer`.
     */
    expandable?: boolean | PropertyBindingInfo;

    /**
     * If set to `false`, the `FormContainer` is not rendered.
     */
    visible?: boolean | PropertyBindingInfo;

    /**
     * The `FormElements` contain the content (labels and fields) of the `FormContainers`.
     */
    formElements?: FormElement[] | FormElement | AggregationBindingInfo;

    /**
     * Title of the `FormContainer`. Can either be a `Title` element or a string. If a `Title` element is used,
     * the style of the title can be set.
     *
     * **Note:** If a `Toolbar` is used, the `Title` is ignored.
     *
     * **Note:** If the title is provided as a string, the title is rendered with a theme-dependent default
     * level. As the `Form` control cannot know the structure of the page, this might not fit the page structure.
     * In this case provide the title using a `Title` element and set its {@link sap.ui.core.Title#setLevel
     * level} to the needed value.
     */
    title?: string | Title | PropertyBindingInfo;

    /**
     * @SINCE 1.36.0
     *
     * Toolbar of the `FormContainer`.
     *
     * **Note:** If a `Toolbar` is used, the `Title` is ignored. If a title is needed inside the `Toolbar` it
     * must be added at content to the `Toolbar`. In this case add the `Title` to the `ariaLabelledBy` association.
     * Use the right title level to meet the visual requirements. This might be theme-dependent.
     */
    toolbar?: Toolbar;

    /**
     * @SINCE 1.36.0
     *
     * Association to controls / IDs that label this control (see WAI-ARIA attribute `aria-labelledby`).
     *
     * **Note:** This attribute is only rendered if the `FormContainer` has it's own DOM representation in the
     * used `FormLayout`.
     */
    ariaLabelledBy?: Array<Control | string>;
  }
}

declare module "sap/ui/layout/form/FormElement" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import Control from "sap/ui/core/Control";

  import { Label } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.16.0
   *
   * A `FormElement` represents a row in a `FormContainer`. A `FormElement` is a combination of one label
   * and different controls associated to this label.
   */
  export default class FormElement extends UI5Element {
    /**
     * Constructor for a new sap.ui.layout.form.FormElement.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $FormElementSettings
    );
    /**
     * Constructor for a new sap.ui.layout.form.FormElement.
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
      mSettings?: $FormElementSettings
    );

    /**
     * @SINCE 1.74.0
     *
     * Sets the editable state of the `FormElement`.
     *
     * This must only be called from the `Form` and it's `FormContainers`.
     *
     * Labels inside of a `Form` must be invalidated if `editable` changed on `Form`.
     */
    _setEditable(
      /**
       * Editable state of the `Form`
       */
      bEditable: boolean
    ): void;
    /**
     * Adds some field to the aggregation {@link #getFields fields}.
     */
    addField(
      /**
       * The field to add; if empty, nothing is inserted
       */
      oField: Control
    ): this;
    /**
     * Destroys all the fields in the aggregation {@link #getFields fields}.
     */
    destroyFields(): this;
    /**
     * Destroys the label in the aggregation {@link #getLabel label}.
     */
    destroyLabel(): this;
    /**
     * Creates a new subclass of class sap.ui.layout.form.FormElement with name `sClassName` and enriches it
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
      oClassInfo?: sap.ClassInfo<T, FormElement>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets content of aggregation {@link #getFields fields}.
     *
     * Form controls that belong together to be displayed in one row of a `Form`.
     *
     * **Warning:** Do not put any layout or other container controls in here. This could damage the visual
     * layout, keyboard support and screen-reader support. Only form controls are allowed. Views are also not
     * supported. Allowed controls implement the interface `sap.ui.core.IFormContent`.
     */
    getFields(): Control[];
    /**
     * Gets content of aggregation {@link #getLabel label}.
     *
     * Label of the fields. Can either be a `Label` control or a string. If a `Label` control is used, the properties
     * of the `Label` can be set. If no assignment between `Label` and the fields is set via (`labelFor` property
     * of the `Label`), it will be done automatically by the `FormElement`. In this case the `Label` is assigned
     * to the fields of the `FormElement`.
     */
    getLabel(): Label | string;
    /**
     * Returns the `Label` of the `FormElement`, even if the `Label` is assigned as string. The `FormLayout`
     * needs the information of the label to render the `Form`.
     */
    getLabelControl(): Label;
    /**
     * Returns a metadata object for class sap.ui.layout.form.FormElement.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getVisible visible}.
     *
     * If set to `false`, the `FormElement` is not rendered.
     *
     * Default value is `true`.
     */
    getVisible(): boolean;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getFields fields}. and returns
     * its index if found or -1 otherwise.
     */
    indexOfField(
      /**
       * The field whose index is looked for
       */
      oField: Control
    ): int;
    /**
     * Inserts a field into the aggregation {@link #getFields fields}.
     */
    insertField(
      /**
       * The field to insert; if empty, nothing is inserted
       */
      oField: Control,
      /**
       * The `0`-based index the field should be inserted at; for a negative value of `iIndex`, the field is inserted
       * at position 0; for a value greater than the current size of the aggregation, the field is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Labels inside of a Form must be invalidated if "editable" changed on Form
     */
    invalidateLabel(): void;
    /**
     * Determines if the `FormElement` is visible or not. Per default it just returns the value of the `visible`
     * property. But this might be overwritten by inherited elements.
     *
     * For rendering by `FormLayouts` this function has to be used instead of `getVisible`.
     */
    isVisible(): boolean;
    /**
     * Removes all the controls from the aggregation {@link #getFields fields}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllFields(): Control[];
    /**
     * Removes a field from the aggregation {@link #getFields fields}.
     */
    removeField(
      /**
       * The field to remove or its index or id
       */
      vField: int | string | Control
    ): Control;
    /**
     * Sets the aggregated {@link #getLabel label}.
     */
    setLabel(
      /**
       * The label to set
       */
      vLabel: Label | string
    ): this;
    /**
     * Sets a new value for property {@link #getVisible visible}.
     *
     * If set to `false`, the `FormElement` is not rendered.
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

  export interface $FormElementSettings extends $ElementSettings {
    /**
     * If set to `false`, the `FormElement` is not rendered.
     */
    visible?: boolean | PropertyBindingInfo;

    /**
     * Label of the fields. Can either be a `Label` control or a string. If a `Label` control is used, the properties
     * of the `Label` can be set. If no assignment between `Label` and the fields is set via (`labelFor` property
     * of the `Label`), it will be done automatically by the `FormElement`. In this case the `Label` is assigned
     * to the fields of the `FormElement`.
     */
    label?: string | Label | PropertyBindingInfo;

    /**
     * Form controls that belong together to be displayed in one row of a `Form`.
     *
     * **Warning:** Do not put any layout or other container controls in here. This could damage the visual
     * layout, keyboard support and screen-reader support. Only form controls are allowed. Views are also not
     * supported. Allowed controls implement the interface `sap.ui.core.IFormContent`.
     */
    fields?: Control[] | Control | AggregationBindingInfo;
  }
}

declare module "sap/ui/layout/form/FormLayout" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { BackgroundDesign } from "sap/ui/layout/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.16.0
   *
   * Base layout to render a `Form`. Other layouts to render a `Form` must inherit from this one.
   *
   * **Note:** This control must not be used to render a `Form` in productive applications as it does not
   * fulfill any design guidelines and usability standards.
   */
  export default class FormLayout extends Control {
    /**
     * Constructor for a new sap.ui.layout.form.FormLayout.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $FormLayoutSettings
    );
    /**
     * Constructor for a new sap.ui.layout.form.FormLayout.
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
      mSettings?: $FormLayoutSettings
    );

    /**
     * Creates a new subclass of class sap.ui.layout.form.FormLayout with name `sClassName` and enriches it
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
      oClassInfo?: sap.ClassInfo<T, FormLayout>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @SINCE 1.36.0
     *
     * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
     *
     * Specifies the background color of the `Form` content.
     *
     * **Note:** The visualization of the different options depends on the theme used.
     *
     * Default value is `Translucent`.
     */
    getBackgroundDesign(): BackgroundDesign | keyof typeof BackgroundDesign;
    /**
     * Returns a metadata object for class sap.ui.layout.form.FormLayout.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.36.0
     *
     * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
     *
     * Specifies the background color of the `Form` content.
     *
     * **Note:** The visualization of the different options depends on the theme used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Translucent`.
     */
    setBackgroundDesign(
      /**
       * New value for property `backgroundDesign`
       */
      sBackgroundDesign?: BackgroundDesign | keyof typeof BackgroundDesign
    ): this;
  }

  export interface $FormLayoutSettings extends $ControlSettings {
    /**
     * @SINCE 1.36.0
     *
     * Specifies the background color of the `Form` content.
     *
     * **Note:** The visualization of the different options depends on the theme used.
     */
    backgroundDesign?:
      | (BackgroundDesign | keyof typeof BackgroundDesign)
      | PropertyBindingInfo;
  }
}

declare module "sap/ui/layout/form/GridContainerData" {
  import {
    default as LayoutData,
    $LayoutDataSettings,
  } from "sap/ui/core/LayoutData";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.16.0
   *
   * The `GridLayout`-specific layout data for `FormContainers`.
   */
  export default class GridContainerData extends LayoutData {
    /**
     * Constructor for a new sap.ui.layout.form.GridContainerData.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $GridContainerDataSettings
    );
    /**
     * Constructor for a new sap.ui.layout.form.GridContainerData.
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
      mSettings?: $GridContainerDataSettings
    );

    /**
     * Creates a new subclass of class sap.ui.layout.form.GridContainerData with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, GridContainerData>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getHalfGrid halfGrid}.
     *
     * If set, the container takes half the width of the `Form` (8 cells), if not it takes the full width (16
     * cells). If the `GridLayout` is set to `singleColumn`, the full width of the grid is only 8 cells. So
     * containers are rendered only once per row.
     *
     * Default value is `false`.
     */
    getHalfGrid(): boolean;
    /**
     * Returns a metadata object for class sap.ui.layout.form.GridContainerData.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Sets a new value for property {@link #getHalfGrid halfGrid}.
     *
     * If set, the container takes half the width of the `Form` (8 cells), if not it takes the full width (16
     * cells). If the `GridLayout` is set to `singleColumn`, the full width of the grid is only 8 cells. So
     * containers are rendered only once per row.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setHalfGrid(
      /**
       * New value for property `halfGrid`
       */
      bHalfGrid?: boolean
    ): this;
  }

  export interface $GridContainerDataSettings extends $LayoutDataSettings {
    /**
     * If set, the container takes half the width of the `Form` (8 cells), if not it takes the full width (16
     * cells). If the `GridLayout` is set to `singleColumn`, the full width of the grid is only 8 cells. So
     * containers are rendered only once per row.
     */
    halfGrid?: boolean | PropertyBindingInfo;
  }
}

declare module "sap/ui/layout/form/GridElementData" {
  import {
    default as LayoutData,
    $LayoutDataSettings,
  } from "sap/ui/core/LayoutData";

  import { form } from "sap/ui/layout/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.16.0
   *
   * The `GridLayout`-specific layout data for `FormElement` fields.
   */
  export default class GridElementData extends LayoutData {
    /**
     * Constructor for a new sap.ui.layout.form.GridElementData.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $GridElementDataSettings
    );
    /**
     * Constructor for a new sap.ui.layout.form.GridElementData.
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
      mSettings?: $GridElementDataSettings
    );

    /**
     * Creates a new subclass of class sap.ui.layout.form.GridElementData with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, GridElementData>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getHCells hCells}.
     *
     * Number of cells in horizontal direction.
     *
     * If set to `auto`, the size is determined by the number of fields and the available cells. For labels
     * the auto size is 3 cells.
     *
     * If set to `full`, only one field is allowed within the `FormElement`. It gets the full width of the row
     * and the label is displayed above.
     *
     * **Note:** For labels, the full size setting has no effect.
     *
     * Default value is `'auto'`.
     */
    getHCells(): form.GridElementCells;
    /**
     * Returns a metadata object for class sap.ui.layout.form.GridElementData.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getVCells vCells}.
     *
     * Number of cells in vertical direction.
     *
     * **Note:** This property has no effect on labels.
     *
     * Default value is `1`.
     */
    getVCells(): int;
    /**
     * Sets a new value for property {@link #getHCells hCells}.
     *
     * Number of cells in horizontal direction.
     *
     * If set to `auto`, the size is determined by the number of fields and the available cells. For labels
     * the auto size is 3 cells.
     *
     * If set to `full`, only one field is allowed within the `FormElement`. It gets the full width of the row
     * and the label is displayed above.
     *
     * **Note:** For labels, the full size setting has no effect.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `'auto'`.
     */
    setHCells(
      /**
       * New value for property `hCells`
       */
      sHCells?: form.GridElementCells
    ): this;
    /**
     * Sets a new value for property {@link #getVCells vCells}.
     *
     * Number of cells in vertical direction.
     *
     * **Note:** This property has no effect on labels.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1`.
     */
    setVCells(
      /**
       * New value for property `vCells`
       */
      iVCells?: int
    ): this;
  }

  export interface $GridElementDataSettings extends $LayoutDataSettings {
    /**
     * Number of cells in horizontal direction.
     *
     * If set to `auto`, the size is determined by the number of fields and the available cells. For labels
     * the auto size is 3 cells.
     *
     * If set to `full`, only one field is allowed within the `FormElement`. It gets the full width of the row
     * and the label is displayed above.
     *
     * **Note:** For labels, the full size setting has no effect.
     */
    hCells?: form.GridElementCells | PropertyBindingInfo;

    /**
     * Number of cells in vertical direction.
     *
     * **Note:** This property has no effect on labels.
     */
    vCells?: int | PropertyBindingInfo;
  }
}

declare module "sap/ui/layout/form/GridLayout" {
  import {
    default as FormLayout,
    $FormLayoutSettings,
  } from "sap/ui/layout/form/FormLayout";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.16.0
   * @deprecated (since 1.67.0) - as `sap.ui.commons` library is deprecated and the `GridLayout` must not
   * be used in responsive applications. Please use `ResponsiveGridLayout` or `ColumnLayout` instead.
   *
   * This `FormLayout` renders a `Form` using an HTML-table based grid. This can be a 16 column grid or an
   * 8 column grid. The grid is stable, so the alignment of the fields is the same for all screen sizes or
   * widths of the `Form`. Only the width of the single grid columns depends on the available width.
   *
   * To adjust the appearance inside the `GridLayout`, you can use `GridContainerData` for `FormContainers`
   * and `GridElementData` for content fields.
   *
   * **Note:** If content fields have a `width` property this will be ignored, as the width of the controls
   * is set by the grid cells.
   *
   * This control cannot be used stand-alone, it just renders a `Form`, so it must be assigned to a `Form`
   * using the `layout` aggregation.
   */
  export default class GridLayout extends FormLayout {
    /**
     * Constructor for a new sap.ui.layout.form.GridLayout.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $GridLayoutSettings
    );
    /**
     * Constructor for a new sap.ui.layout.form.GridLayout.
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
      mSettings?: $GridLayoutSettings
    );

    /**
     * Creates a new subclass of class sap.ui.layout.form.GridLayout with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, GridLayout>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.layout.form.GridLayout.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getSingleColumn singleColumn}.
     *
     * If set, the grid renders only one `FormContainer` per column. That means one `FormContainer` is below
     * the other. The whole grid has 8 cells per row.
     *
     * If not set, `FormContainer` can use the full width of the grid or two `FormContainers` can be placed
     * beside each other. In this case the whole grid has 16 cells per row.
     *
     * Default value is `false`.
     */
    getSingleColumn(): boolean;
    /**
     * Sets a new value for property {@link #getSingleColumn singleColumn}.
     *
     * If set, the grid renders only one `FormContainer` per column. That means one `FormContainer` is below
     * the other. The whole grid has 8 cells per row.
     *
     * If not set, `FormContainer` can use the full width of the grid or two `FormContainers` can be placed
     * beside each other. In this case the whole grid has 16 cells per row.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setSingleColumn(
      /**
       * New value for property `singleColumn`
       */
      bSingleColumn?: boolean
    ): this;
  }

  export interface $GridLayoutSettings extends $FormLayoutSettings {
    /**
     * If set, the grid renders only one `FormContainer` per column. That means one `FormContainer` is below
     * the other. The whole grid has 8 cells per row.
     *
     * If not set, `FormContainer` can use the full width of the grid or two `FormContainers` can be placed
     * beside each other. In this case the whole grid has 16 cells per row.
     */
    singleColumn?: boolean | PropertyBindingInfo;
  }
}

declare module "sap/ui/layout/form/ResponsiveGridLayout" {
  import {
    default as FormLayout,
    $FormLayoutSettings,
  } from "sap/ui/layout/form/FormLayout";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.16.0
   *
   * The `ResponsiveGridLayout` control renders a `Form` using a responsive grid. Internally the `Grid` control
   * is used for rendering. Using this layout, the `Form` is rendered in a responsive way. Depending on the
   * available space, the `FormContainers` are rendered in one or different columns and the labels are rendered
   * in the same row as the fields or above the fields. This behavior can be influenced by the properties
   * of this layout control.
   *
   * On the `FormContainers`, labels and content fields, `GridData` can be used to change the default rendering.
   * `GridData` is not supported for `FormElements`.
   *
   * **Note:** If `GridData` is used, this may result in a much more complex layout than the default one.
   * This means that in some cases, the calculation for the other content may not bring the expected result.
   * In such cases, `GridData` should be used for all content controls to disable the default behavior.
   *
   * This control cannot be used stand-alone, it just renders a `Form`, so it must be assigned to a `Form`
   * using the `layout` aggregation.
   */
  export default class ResponsiveGridLayout extends FormLayout {
    /**
     * Constructor for a new `sap.ui.layout.form.ResponsiveGridLayout`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ResponsiveGridLayoutSettings
    );
    /**
     * Constructor for a new `sap.ui.layout.form.ResponsiveGridLayout`.
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
      mSettings?: $ResponsiveGridLayoutSettings
    );

    /**
     * Creates a new subclass of class sap.ui.layout.form.ResponsiveGridLayout with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, ResponsiveGridLayout>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getAdjustLabelSpan adjustLabelSpan}.
     *
     * If set, the usage of `labelSpanL` and `labelSpanM` are dependent on the number of `FormContainers` in
     * one row. If only one `FormContainer` is displayed in one row, `labelSpanM` is used to define the size
     * of the label. This is the same for medium and large `Forms`. This is done to align the labels on forms
     * where full-size `FormContainers` and multiple-column rows are used in the same `Form` (because every
     * `FormContainer` has its own `Grid` inside).
     *
     * If not set, the usage of `labelSpanL` and `labelSpanM` are dependent on the `Form` size. The number of
     * `FormContainers` doesn't matter in this case.
     *
     * Default value is `true`.
     */
    getAdjustLabelSpan(): boolean;
    /**
     * @SINCE 1.16.3
     *
     * Gets current value of property {@link #getBreakpointL breakpointL}.
     *
     * Breakpoint (in pixel) between Medium size and Large size.
     *
     * Default value is `1024`.
     */
    getBreakpointL(): int;
    /**
     * @SINCE 1.16.3
     *
     * Gets current value of property {@link #getBreakpointM breakpointM}.
     *
     * Breakpoint (in pixel) between Small size and Medium size.
     *
     * Default value is `600`.
     */
    getBreakpointM(): int;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getBreakpointXL breakpointXL}.
     *
     * Breakpoint (in pixel) between large size and extra large (XL) size.
     *
     * Default value is `1440`.
     */
    getBreakpointXL(): int;
    /**
     * @SINCE 1.16.3
     *
     * Gets current value of property {@link #getColumnsL columnsL}.
     *
     * Number of columns for large size.
     *
     * The number of columns for large size must not be smaller than the number of columns for medium size.
     *
     * Default value is `2`.
     */
    getColumnsL(): int;
    /**
     * @SINCE 1.16.3
     *
     * Gets current value of property {@link #getColumnsM columnsM}.
     *
     * Number of columns for medium size.
     *
     * Default value is `1`.
     */
    getColumnsM(): int;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getColumnsXL columnsXL}.
     *
     * Number of columns for extra large size.
     *
     * The number of columns for extra large size must not be smaller than the number of columns for large size.
     * **Note:** If the default value -1 is not overwritten with the meaningful one then the `columnsL` value
     * is used (from the backward compatibility reasons).
     *
     * Default value is `-1`.
     */
    getColumnsXL(): int;
    /**
     * @SINCE 1.16.3
     *
     * Gets current value of property {@link #getEmptySpanL emptySpanL}.
     *
     * Number of grid cells that are empty at the end of each line on large size.
     *
     * Default value is `0`.
     */
    getEmptySpanL(): int;
    /**
     * @SINCE 1.16.3
     *
     * Gets current value of property {@link #getEmptySpanM emptySpanM}.
     *
     * Number of grid cells that are empty at the end of each line on medium size.
     *
     * Default value is `0`.
     */
    getEmptySpanM(): int;
    /**
     * @SINCE 1.16.3
     *
     * Gets current value of property {@link #getEmptySpanS emptySpanS}.
     *
     * Number of grid cells that are empty at the end of each line on small size.
     *
     * Default value is `0`.
     */
    getEmptySpanS(): int;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getEmptySpanXL emptySpanXL}.
     *
     * Number of grid cells that are empty at the end of each line on extra large size.
     *
     * **Note:** If the default value -1 is not overwritten with the meaningful one then the `emptySpanL` value
     * is used.
     *
     * Default value is `-1`.
     */
    getEmptySpanXL(): int;
    /**
     * @SINCE 1.16.3
     *
     * Gets current value of property {@link #getLabelSpanL labelSpanL}.
     *
     * Default span for labels in large size.
     *
     * **Note:** If `adjustLabelSpan` is set, this property is only used if more than 1 `FormContainer` is in
     * one line. If only 1 `FormContainer` is in the line, then the `labelSpanM` value is used.
     *
     * Default value is `4`.
     */
    getLabelSpanL(): int;
    /**
     * @SINCE 1.16.3
     *
     * Gets current value of property {@link #getLabelSpanM labelSpanM}.
     *
     * Default span for labels in medium size.
     *
     * **Note:** If `adjustLabelSpan` is set this property is used for full-size `FormContainers`. If more than
     * one `FormContainer` is in one line, `labelSpanL` is used.
     *
     * Default value is `2`.
     */
    getLabelSpanM(): int;
    /**
     * @SINCE 1.16.3
     *
     * Gets current value of property {@link #getLabelSpanS labelSpanS}.
     *
     * Default span for labels in small size.
     *
     * Default value is `12`.
     */
    getLabelSpanS(): int;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getLabelSpanXL labelSpanXL}.
     *
     * Default span for labels in extra large size.
     *
     * **Note:** If the default value -1 is not overwritten with the meaningful one then the `labelSpanL` value
     * is used.
     *
     * Default value is `-1`.
     */
    getLabelSpanXL(): int;
    /**
     * Returns a metadata object for class sap.ui.layout.form.ResponsiveGridLayout.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getSingleContainerFullSize singleContainerFullSize}.
     *
     * If the `Form` contains only one single `FormContainer` and this property is set, the `FormContainer`
     * is displayed using the full size of the `Form`. In this case the properties `columnsXL`, `columnsL` and
     * `columnsM` are ignored.
     *
     * In all other cases the `FormContainer` is displayed in the size of one column.
     *
     * Default value is `true`.
     */
    getSingleContainerFullSize(): boolean;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getAdjustLabelSpan adjustLabelSpan}.
     *
     * If set, the usage of `labelSpanL` and `labelSpanM` are dependent on the number of `FormContainers` in
     * one row. If only one `FormContainer` is displayed in one row, `labelSpanM` is used to define the size
     * of the label. This is the same for medium and large `Forms`. This is done to align the labels on forms
     * where full-size `FormContainers` and multiple-column rows are used in the same `Form` (because every
     * `FormContainer` has its own `Grid` inside).
     *
     * If not set, the usage of `labelSpanL` and `labelSpanM` are dependent on the `Form` size. The number of
     * `FormContainers` doesn't matter in this case.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setAdjustLabelSpan(
      /**
       * New value for property `adjustLabelSpan`
       */
      bAdjustLabelSpan?: boolean
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets a new value for property {@link #getBreakpointL breakpointL}.
     *
     * Breakpoint (in pixel) between Medium size and Large size.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1024`.
     */
    setBreakpointL(
      /**
       * New value for property `breakpointL`
       */
      iBreakpointL?: int
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets a new value for property {@link #getBreakpointM breakpointM}.
     *
     * Breakpoint (in pixel) between Small size and Medium size.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `600`.
     */
    setBreakpointM(
      /**
       * New value for property `breakpointM`
       */
      iBreakpointM?: int
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getBreakpointXL breakpointXL}.
     *
     * Breakpoint (in pixel) between large size and extra large (XL) size.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1440`.
     */
    setBreakpointXL(
      /**
       * New value for property `breakpointXL`
       */
      iBreakpointXL?: int
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets a new value for property {@link #getColumnsL columnsL}.
     *
     * Number of columns for large size.
     *
     * The number of columns for large size must not be smaller than the number of columns for medium size.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `2`.
     */
    setColumnsL(
      /**
       * New value for property `columnsL`
       */
      iColumnsL?: int
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets a new value for property {@link #getColumnsM columnsM}.
     *
     * Number of columns for medium size.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1`.
     */
    setColumnsM(
      /**
       * New value for property `columnsM`
       */
      iColumnsM?: int
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getColumnsXL columnsXL}.
     *
     * Number of columns for extra large size.
     *
     * The number of columns for extra large size must not be smaller than the number of columns for large size.
     * **Note:** If the default value -1 is not overwritten with the meaningful one then the `columnsL` value
     * is used (from the backward compatibility reasons).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `-1`.
     */
    setColumnsXL(
      /**
       * New value for property `columnsXL`
       */
      iColumnsXL?: int
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets a new value for property {@link #getEmptySpanL emptySpanL}.
     *
     * Number of grid cells that are empty at the end of each line on large size.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     */
    setEmptySpanL(
      /**
       * New value for property `emptySpanL`
       */
      iEmptySpanL?: int
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets a new value for property {@link #getEmptySpanM emptySpanM}.
     *
     * Number of grid cells that are empty at the end of each line on medium size.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     */
    setEmptySpanM(
      /**
       * New value for property `emptySpanM`
       */
      iEmptySpanM?: int
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets a new value for property {@link #getEmptySpanS emptySpanS}.
     *
     * Number of grid cells that are empty at the end of each line on small size.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     */
    setEmptySpanS(
      /**
       * New value for property `emptySpanS`
       */
      iEmptySpanS?: int
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getEmptySpanXL emptySpanXL}.
     *
     * Number of grid cells that are empty at the end of each line on extra large size.
     *
     * **Note:** If the default value -1 is not overwritten with the meaningful one then the `emptySpanL` value
     * is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `-1`.
     */
    setEmptySpanXL(
      /**
       * New value for property `emptySpanXL`
       */
      iEmptySpanXL?: int
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets a new value for property {@link #getLabelSpanL labelSpanL}.
     *
     * Default span for labels in large size.
     *
     * **Note:** If `adjustLabelSpan` is set, this property is only used if more than 1 `FormContainer` is in
     * one line. If only 1 `FormContainer` is in the line, then the `labelSpanM` value is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `4`.
     */
    setLabelSpanL(
      /**
       * New value for property `labelSpanL`
       */
      iLabelSpanL?: int
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets a new value for property {@link #getLabelSpanM labelSpanM}.
     *
     * Default span for labels in medium size.
     *
     * **Note:** If `adjustLabelSpan` is set this property is used for full-size `FormContainers`. If more than
     * one `FormContainer` is in one line, `labelSpanL` is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `2`.
     */
    setLabelSpanM(
      /**
       * New value for property `labelSpanM`
       */
      iLabelSpanM?: int
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets a new value for property {@link #getLabelSpanS labelSpanS}.
     *
     * Default span for labels in small size.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `12`.
     */
    setLabelSpanS(
      /**
       * New value for property `labelSpanS`
       */
      iLabelSpanS?: int
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getLabelSpanXL labelSpanXL}.
     *
     * Default span for labels in extra large size.
     *
     * **Note:** If the default value -1 is not overwritten with the meaningful one then the `labelSpanL` value
     * is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `-1`.
     */
    setLabelSpanXL(
      /**
       * New value for property `labelSpanXL`
       */
      iLabelSpanXL?: int
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getSingleContainerFullSize singleContainerFullSize}.
     *
     * If the `Form` contains only one single `FormContainer` and this property is set, the `FormContainer`
     * is displayed using the full size of the `Form`. In this case the properties `columnsXL`, `columnsL` and
     * `columnsM` are ignored.
     *
     * In all other cases the `FormContainer` is displayed in the size of one column.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setSingleContainerFullSize(
      /**
       * New value for property `singleContainerFullSize`
       */
      bSingleContainerFullSize?: boolean
    ): this;
  }

  export interface $ResponsiveGridLayoutSettings extends $FormLayoutSettings {
    /**
     * @SINCE 1.34.0
     *
     * Default span for labels in extra large size.
     *
     * **Note:** If the default value -1 is not overwritten with the meaningful one then the `labelSpanL` value
     * is used.
     */
    labelSpanXL?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.16.3
     *
     * Default span for labels in large size.
     *
     * **Note:** If `adjustLabelSpan` is set, this property is only used if more than 1 `FormContainer` is in
     * one line. If only 1 `FormContainer` is in the line, then the `labelSpanM` value is used.
     */
    labelSpanL?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.16.3
     *
     * Default span for labels in medium size.
     *
     * **Note:** If `adjustLabelSpan` is set this property is used for full-size `FormContainers`. If more than
     * one `FormContainer` is in one line, `labelSpanL` is used.
     */
    labelSpanM?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.16.3
     *
     * Default span for labels in small size.
     */
    labelSpanS?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * If set, the usage of `labelSpanL` and `labelSpanM` are dependent on the number of `FormContainers` in
     * one row. If only one `FormContainer` is displayed in one row, `labelSpanM` is used to define the size
     * of the label. This is the same for medium and large `Forms`. This is done to align the labels on forms
     * where full-size `FormContainers` and multiple-column rows are used in the same `Form` (because every
     * `FormContainer` has its own `Grid` inside).
     *
     * If not set, the usage of `labelSpanL` and `labelSpanM` are dependent on the `Form` size. The number of
     * `FormContainers` doesn't matter in this case.
     */
    adjustLabelSpan?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * Number of grid cells that are empty at the end of each line on extra large size.
     *
     * **Note:** If the default value -1 is not overwritten with the meaningful one then the `emptySpanL` value
     * is used.
     */
    emptySpanXL?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.16.3
     *
     * Number of grid cells that are empty at the end of each line on large size.
     */
    emptySpanL?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.16.3
     *
     * Number of grid cells that are empty at the end of each line on medium size.
     */
    emptySpanM?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.16.3
     *
     * Number of grid cells that are empty at the end of each line on small size.
     */
    emptySpanS?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * Number of columns for extra large size.
     *
     * The number of columns for extra large size must not be smaller than the number of columns for large size.
     * **Note:** If the default value -1 is not overwritten with the meaningful one then the `columnsL` value
     * is used (from the backward compatibility reasons).
     */
    columnsXL?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.16.3
     *
     * Number of columns for large size.
     *
     * The number of columns for large size must not be smaller than the number of columns for medium size.
     */
    columnsL?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.16.3
     *
     * Number of columns for medium size.
     */
    columnsM?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * If the `Form` contains only one single `FormContainer` and this property is set, the `FormContainer`
     * is displayed using the full size of the `Form`. In this case the properties `columnsXL`, `columnsL` and
     * `columnsM` are ignored.
     *
     * In all other cases the `FormContainer` is displayed in the size of one column.
     */
    singleContainerFullSize?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * Breakpoint (in pixel) between large size and extra large (XL) size.
     */
    breakpointXL?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.16.3
     *
     * Breakpoint (in pixel) between Medium size and Large size.
     */
    breakpointL?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.16.3
     *
     * Breakpoint (in pixel) between Small size and Medium size.
     */
    breakpointM?: int | PropertyBindingInfo;
  }
}

declare module "sap/ui/layout/form/ResponsiveLayout" {
  import {
    default as FormLayout,
    $FormLayoutSettings,
  } from "sap/ui/layout/form/FormLayout";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.16.0
   *
   * The `ResponsiveLayout` renders a `Form` with a responsive layout. Internally the `ResponsiveFlowLayout`
   * is used. The responsiveness of this layout tries to best use the available space. This means that the
   * order of the `FormContainers`, labels and fields depends on the available space.
   *
   * On the `FormContainers`, `FormElements`, labels and content fields, `ResponsiveFlowLayoutData` can be
   * used to change the default rendering.
   *
   * We suggest using the `ResponsiveGridLayout` instead of this layout because this is easier to consume
   * and brings more stable responsive output.
   *
   * **Note:** If `ResponsiveFlowLayoutData` are used this may result in a much more complex layout than the
   * default one. This means that in some cases, the calculation for the other content may not bring the expected
   * result. In such cases, `ResponsiveFlowLayoutData` should be used for all content controls to disable
   * the default behavior.
   *
   * This control cannot be used stand-alone, it just renders a `Form`, so it must be assigned to a `Form`
   * using the `layout` aggregation.
   */
  export default class ResponsiveLayout extends FormLayout {
    /**
     * Constructor for a new sap.ui.layout.form.ResponsiveLayout.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ResponsiveLayoutSettings
    );
    /**
     * Constructor for a new sap.ui.layout.form.ResponsiveLayout.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ResponsiveLayoutSettings
    );

    /**
     * Creates a new subclass of class sap.ui.layout.form.ResponsiveLayout with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, ResponsiveLayout>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.layout.form.ResponsiveLayout.
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $ResponsiveLayoutSettings extends $FormLayoutSettings {}
}

declare module "sap/ui/layout/form/SemanticFormElement" {
  import {
    default as FormElement,
    $FormElementSettings,
  } from "sap/ui/layout/form/FormElement";

  import { Label } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.86.0
   * @EXPERIMENTAL (since 1.86)
   *
   * A `SemanticFormElement` element is a special `FormElement` that contains semantically connected fields.
   * These field controls are divided by delimiter controls. In display mode, they are rendered as one condensed
   * string, in edit mode as separate fields.
   *
   * **Note:** Please use the `ColumnLayout` as `layout` of the `Form`. For other layouts, the field arrangement
   * might not be suitable in every case.
   */
  export default class SemanticFormElement extends FormElement {
    /**
     * Constructor for a new sap.ui.layout.form.SemanticFormElement.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SemanticFormElementSettings
    );
    /**
     * Constructor for a new sap.ui.layout.form.SemanticFormElement.
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
      mSettings?: $SemanticFormElementSettings
    );

    /**
     * Adds some fieldLabel to the aggregation {@link #getFieldLabels fieldLabels}.
     */
    addFieldLabel(
      /**
       * The fieldLabel to add; if empty, nothing is inserted
       */
      oFieldLabel: Label
    ): this;
    /**
     * Destroys all the fieldLabels in the aggregation {@link #getFieldLabels fieldLabels}.
     */
    destroyFieldLabels(): this;
    /**
     * Creates a new subclass of class sap.ui.layout.form.SemanticFormElement with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.FormElement.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, SemanticFormElement>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getDelimiter delimiter}.
     *
     * Delimiter symbol to separate the fields.
     *
     * Default value is `"/"`.
     */
    getDelimiter(): string;
    /**
     * Gets content of aggregation {@link #getFieldLabels fieldLabels}.
     *
     * Labels of the individual fields. Can either be a `Label` control or a string.
     *
     * If a `Label` control is used, the properties of the `Label` can be set.
     *
     * These labels are not rendered directly. If the `Label` property of `SemanticFormElement` is not set,
     * the texts of the labels are concatenated into the `Label` property of `SemanticFormElement`. Otherwise
     * the set `Label` is shown.
     *
     * **Note:** If this aggregation is used, a label is assigned to every single field of `SemanticFormElement`.
     * The order of the labels and the fields must be the same.
     */
    getFieldLabels(): Label[];
    /**
     * Returns a metadata object for class sap.ui.layout.form.SemanticFormElement.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Checks for the provided `sap.ui.core.Label` in the aggregation {@link #getFieldLabels fieldLabels}. and
     * returns its index if found or -1 otherwise.
     */
    indexOfFieldLabel(
      /**
       * The fieldLabel whose index is looked for
       */
      oFieldLabel: Label
    ): int;
    /**
     * Inserts a fieldLabel into the aggregation {@link #getFieldLabels fieldLabels}.
     */
    insertFieldLabel(
      /**
       * The fieldLabel to insert; if empty, nothing is inserted
       */
      oFieldLabel: Label,
      /**
       * The `0`-based index the fieldLabel should be inserted at; for a negative value of `iIndex`, the fieldLabel
       * is inserted at position 0; for a value greater than the current size of the aggregation, the fieldLabel
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getFieldLabels fieldLabels}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllFieldLabels(): Label[];
    /**
     * Removes a fieldLabel from the aggregation {@link #getFieldLabels fieldLabels}.
     */
    removeFieldLabel(
      /**
       * The fieldLabel to remove or its index or id
       */
      vFieldLabel: int | string | Label
    ): Label;
    /**
     * Sets a new value for property {@link #getDelimiter delimiter}.
     *
     * Delimiter symbol to separate the fields.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"/"`.
     */
    setDelimiter(
      /**
       * New value for property `delimiter`
       */
      sDelimiter?: string
    ): this;
  }

  export interface $SemanticFormElementSettings extends $FormElementSettings {
    /**
     * Delimiter symbol to separate the fields.
     */
    delimiter?: string | PropertyBindingInfo;

    /**
     * Labels of the individual fields. Can either be a `Label` control or a string.
     *
     * If a `Label` control is used, the properties of the `Label` can be set.
     *
     * These labels are not rendered directly. If the `Label` property of `SemanticFormElement` is not set,
     * the texts of the labels are concatenated into the `Label` property of `SemanticFormElement`. Otherwise
     * the set `Label` is shown.
     *
     * **Note:** If this aggregation is used, a label is assigned to every single field of `SemanticFormElement`.
     * The order of the labels and the fields must be the same.
     */
    fieldLabels?: Label[] | Label | AggregationBindingInfo;
  }
}

declare module "sap/ui/layout/form/SimpleForm" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID, Toolbar, CSSSize } from "sap/ui/core/library";

  import UI5Element from "sap/ui/core/Element";

  import { BackgroundDesign, form } from "sap/ui/layout/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Title from "sap/ui/core/Title";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.16.0
   *
   * The `SimpleForm` control provides an easy-to-use API to create simple forms. Inside a `SimpleForm` control,
   * a `{@link sap.ui.layout.form.Form Form}` control is created along with its `{@link sap.ui.layout.form.FormContainer
   * FormContainer}` elements and `{@link sap.ui.layout.form.FormElement FormElement}` elements, but the complexity
   * in the API is not exposed to the user.
   * 	 - A new `sap.ui.core.Title` element or `Toolbar` control starts a new group (`{@link sap.ui.layout.form.FormContainer
   * 			FormContainer}`) in the form.
   * 	 - A new `Label` control starts a new row (`{@link sap.ui.layout.form.FormElement FormElement}`) in
   * 			the form.
   * 	 - All other controls will be assigned to the row (`{@link sap.ui.layout.form.FormElement FormElement}`)
   * 			that started with the last label.  Use `LayoutData` to influence the layout for special cases in
   * 			the Input/Display controls.
   *
   * **Note:** If a more complex form is needed, use the `{@link sap.ui.layout.form.Form Form}` control instead.
   */
  export default class SimpleForm extends Control {
    /**
     * Constructor for a new sap.ui.layout.form.SimpleForm.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SimpleFormSettings
    );
    /**
     * Constructor for a new sap.ui.layout.form.SimpleForm.
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
      mSettings?: $SimpleFormSettings
    );

    /**
     * @SINCE 1.32.0
     *
     * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    addAriaLabelledBy(
      /**
       * The ariaLabelledBy to add; if empty, nothing is inserted
       */
      vAriaLabelledBy: ID | Control
    ): this;
    /**
     * Adds some content to the aggregation {@link #getContent content}.
     */
    addContent(
      /**
       * The content to add; if empty, nothing is inserted
       */
      oContent: UI5Element
    ): this;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     */
    destroyContent(): this;
    /**
     * @SINCE 1.16.3
     *
     * Destroys the title in the aggregation {@link #getTitle title}.
     */
    destroyTitle(): this;
    /**
     * @SINCE 1.36.0
     *
     * Destroys the toolbar in the aggregation {@link #getToolbar toolbar}.
     */
    destroyToolbar(): this;
    /**
     * Creates a new subclass of class sap.ui.layout.form.SimpleForm with name `sClassName` and enriches it
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
      oClassInfo?: sap.ClassInfo<T, SimpleForm>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getAdjustLabelSpan adjustLabelSpan}.
     *
     * If set, the usage of `labelSpanL` and `labelSpanM` are dependent on the number of `FormContainers` in
     * one row. If only one `FormContainer` is displayed in one row, `labelSpanM` is used to define the size
     * of the label. This is the same for medium and large `Forms`. This is done to align the labels on forms
     * where full-size `FormContainers` and multiple-column rows are used in the same `Form` (because every
     * `FormContainer` has its own grid inside).
     *
     * If not set, the usage of `labelSpanL` and `labelSpanM` are dependent on the `Form` size. The number of
     * `FormContainers` doesn't matter in this case.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     *
     * Default value is `true`.
     */
    getAdjustLabelSpan(): boolean;
    /**
     * @SINCE 1.32.0
     *
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
     * ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * @SINCE 1.36.0
     *
     * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
     *
     * Specifies the background color of the `SimpleForm` content.
     *
     * The visualization of the different options depends on the used theme.
     *
     * Default value is `Translucent`.
     */
    getBackgroundDesign(): BackgroundDesign | keyof typeof BackgroundDesign;
    /**
     * @SINCE 1.16.3
     *
     * Gets current value of property {@link #getBreakpointL breakpointL}.
     *
     * Breakpoint between Medium size and Large size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     *
     * Default value is `1024`.
     */
    getBreakpointL(): int;
    /**
     * @SINCE 1.16.3
     *
     * Gets current value of property {@link #getBreakpointM breakpointM}.
     *
     * Breakpoint between Small size and Medium size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     *
     * Default value is `600`.
     */
    getBreakpointM(): int;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getBreakpointXL breakpointXL}.
     *
     * Breakpoint between Medium size and Large size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     *
     * Default value is `1440`.
     */
    getBreakpointXL(): int;
    /**
     * @SINCE 1.16.3
     *
     * Gets current value of property {@link #getColumnsL columnsL}.
     *
     * Form columns for large size. The number of columns for large size must not be smaller than the number
     * of columns for medium size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
     *
     * Default value is `2`.
     */
    getColumnsL(): int;
    /**
     * @SINCE 1.16.3
     *
     * Gets current value of property {@link #getColumnsM columnsM}.
     *
     * Form columns for medium size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
     *
     * Default value is `1`.
     */
    getColumnsM(): int;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getColumnsXL columnsXL}.
     *
     * Form columns for extra large size. The number of columns for extra large size must not be smaller than
     * the number of columns for large size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
     * If the default value -1 is not overwritten with the meaningful one then the `columnsL` value is used
     * (from the backward compatibility reasons).
     *
     * Default value is `-1`.
     */
    getColumnsXL(): int;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * The content of the form is structured in the following way:
     * 	 - Add a `sap.ui.core.Title` element or `Toolbar` control to start a new group (`{@link sap.ui.layout.form.FormContainer
     * 			FormContainer}`).
     * 	 - Add a `Label` control to start a new row (`{@link sap.ui.layout.form.FormElement FormElement}`).
     *
     * 	 - Add controls as input fields, text fields or other as needed.
     * 	 - Use `LayoutData` to influence the layout for special cases in the single controls. For example, if
     * 			a `ResponsiveLayout` is used as a layout, the form content is weighted using weight 3 for the labels
     * 			and weight 5 for the fields part. By default the label column is 192 pixels wide. If your input controls
     * 			should influence their width, you can add `sap.ui.layout.ResponsiveFlowLayoutData` to them via `setLayoutData`
     * 			method. Ensure that the sum of the weights in the `ResponsiveFlowLayoutData` is not more than 5, as this
     * 			is the total width of the input control part of each form row.  Example for a row where the `Input`
     * 			weight 4 and the second `Input` weight 1 (using `ResponsiveLayout`):
     * ```javascript
     *
     * new sap.m.Label({text:"Label"});
     * new sap.m.Input({value:"Weight 4", layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:4})}),
     * new sap.m.Input({value:"Weight 1", layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:1})}),
     * ```
     *
     *
     * For example, if a `ResponsiveGridLayout` is used as a layout, there are 12 cells in one row. Depending
     * on the screen size the labels use the defined `labelSpan`. The remaining cells are used for the fields
     * (and `emptySpan` if defined). The available cells are distributed to all fields in the row. If one field
     * should use a fixed number of cells you can add `sap.ui.layout.GridData` to them via `setLayoutData` method.
     * If there are additional fields in the row they will get the remaining cells.  Example for a row
     * with two `Input` controls where one uses four cells on small screens, one cell on medium screens and
     * 2 cells on larger screens (using `ResponsiveGridLayout`):
     * ```javascript
     *
     * new sap.m.Label({text:"Label"});
     * new sap.m.Input({value:"auto size"}),
     * new sap.m.Input({value:"fix size", layoutData: new sap.ui.layout.GridData({span: "XL1 L1 M2 S4"})}),
     * ```
     *
     *
     * **Warning:** Do not put any layout or other container controls in here. This could damage the visual
     * layout, keyboard support and screen-reader support. Only labels, titles, toolbars and form controls are
     * allowed. Views are also not supported. Allowed form controls implement the interface `sap.ui.core.IFormContent`.
     *
     * If editable controls are used as content, the `editable` property must be set to `true`, otherwise to
     * `false`. If the `editable` property is set incorrectly, there will be visual issues like wrong label
     * alignment or wrong spacing between the controls.
     */
    getContent(): UI5Element[];
    /**
     * Gets current value of property {@link #getEditable editable}.
     *
     * Applies a device-specific and theme-specific line height and label alignment to the form rows if the
     * form has editable content. If set, all (not only the editable) rows of the form will get the line height
     * of editable fields.
     *
     * The labels inside the form will be rendered by default in the according mode.
     *
     * **Note:** The setting of this property does not change the content of the form. For example, `Input`
     * controls in a form with `editable` set to false are still editable.
     *
     * **Warning:** If this property is wrongly set, this might lead to visual issues. The labels and fields
     * might be misaligned, the labels might be rendered in the wrong mode, and the spacing between the single
     * controls might be wrong. Also, controls that do not fit the mode might be rendered incorrectly.
     */
    getEditable(): boolean;
    /**
     * @SINCE 1.16.3
     *
     * Gets current value of property {@link #getEmptySpanL emptySpanL}.
     *
     * Number of grid cells that are empty at the end of each line on large size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
     * If a `ColumnLayout` is used, this property defines the empty cells for large columns.
     *
     * Default value is `0`.
     */
    getEmptySpanL(): int;
    /**
     * @SINCE 1.16.3
     *
     * Gets current value of property {@link #getEmptySpanM emptySpanM}.
     *
     * Number of grid cells that are empty at the end of each line on medium size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     *
     * Default value is `0`.
     */
    getEmptySpanM(): int;
    /**
     * @SINCE 1.16.3
     *
     * Gets current value of property {@link #getEmptySpanS emptySpanS}.
     *
     * Number of grid cells that are empty at the end of each line on small size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     *
     * Default value is `0`.
     */
    getEmptySpanS(): int;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getEmptySpanXL emptySpanXL}.
     *
     * Number of grid cells that are empty at the end of each line on extra large size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout. If the default
     * value -1 is not overwritten with the meaningful one then the `emptySpanL` value is used (from the backward
     * compatibility reasons).
     *
     * Default value is `-1`.
     */
    getEmptySpanXL(): int;
    /**
     * Gets current value of property {@link #getLabelMinWidth labelMinWidth}.
     *
     * Specifies the min-width in pixels of the label in all form rows.
     *
     * **Note:** This property is only used if a `ResponsiveLayout` is used as a layout.
     *
     * Default value is `192`.
     */
    getLabelMinWidth(): int;
    /**
     * @SINCE 1.16.3
     *
     * Gets current value of property {@link #getLabelSpanL labelSpanL}.
     *
     * Default span for labels in large size.
     *
     * **Note:** If `adjustLabelSpan` is set, this property is only used if more than 1 `FormContainer` is in
     * one line. If only 1 `FormContainer` is in the line, then the `labelSpanM` value is used.
     *
     * **Note:** This property is only used if `ResponsiveGridLayout` or `ColumnLayout` is used as a layout.
     * If a `ColumnLayout` is used, this property defines the label size for large columns.
     *
     * Default value is `4`.
     */
    getLabelSpanL(): int;
    /**
     * @SINCE 1.16.3
     *
     * Gets current value of property {@link #getLabelSpanM labelSpanM}.
     *
     * Default span for labels in medium size.
     *
     * **Note:** If `adjustLabelSpan` is set, this property is used for full-size `FormContainers`. If more
     * than one `FormContainer` is in one line, `labelSpanL` is used.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     *
     * Default value is `2`.
     */
    getLabelSpanM(): int;
    /**
     * @SINCE 1.16.3
     *
     * Gets current value of property {@link #getLabelSpanS labelSpanS}.
     *
     * Default span for labels in small size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     *
     * Default value is `12`.
     */
    getLabelSpanS(): int;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getLabelSpanXL labelSpanXL}.
     *
     * Default span for labels in extra large size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout. If the default
     * value -1 is not overwritten with the meaningful one then the `labelSpanL` value is used (from the backward
     * compatibility reasons).
     *
     * Default value is `-1`.
     */
    getLabelSpanXL(): int;
    /**
     * Gets current value of property {@link #getLayout layout}.
     *
     * The `FormLayout` that is used to render the `SimpleForm`.
     *
     * We recommend using the `ColumnLayout` for rendering a `SimpleForm`, as its responsiveness uses the space
     * available in the best way possible.
     *
     * **Note** If possible, set the `layout` before adding content to prevent calculations for the default
     * layout.
     *
     * Default value is `ResponsiveLayout`.
     */
    getLayout(): form.SimpleFormLayout | keyof typeof form.SimpleFormLayout;
    /**
     * Gets current value of property {@link #getMaxContainerCols maxContainerCols}.
     *
     * The maximum amount of groups (`{@link sap.ui.layout.form.FormContainer FormContainers}`) per row that
     * is used before a new row is started.
     *
     * **Note:** If `{@link sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout}` is used as `layout`,
     * this property is not used. Please use the properties `ColumnsL` and `ColumnsM` in this case.
     *
     * Default value is `2`.
     */
    getMaxContainerCols(): int;
    /**
     * Returns a metadata object for class sap.ui.layout.form.SimpleForm.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getMinWidth minWidth}.
     *
     * The overall minimum width in pixels that is used for the `SimpleForm`.
     *
     * If the available width is below the given `minWidth` the `SimpleForm` will create a new row for the next
     * group (`{@link sap.ui.layout.form.FormContainer FormContainer}`). The default value is -1, meaning that
     * inner groups (`{@link sap.ui.layout.form.FormContainer FormContainers}`) will be stacked until `maxContainerCols`
     * is reached, irrespective of whether a `width` is reached or the available parents width is reached.
     *
     * **Note:** This property is only used if a `ResponsiveLayout` is used as a layout.
     *
     * Default value is `-1`.
     */
    getMinWidth(): int;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getSingleContainerFullSize singleContainerFullSize}.
     *
     * If the `Form` contains only one single `FormContainer` and this property is set, the `FormContainer`
     * is displayed using the full size of the `Form`. In this case the properties `columnsL` and `columnsM`
     * are ignored.
     *
     * In all other cases the `FormContainer` is displayed in the size of one column.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     *
     * Default value is `true`.
     */
    getSingleContainerFullSize(): boolean;
    /**
     * @SINCE 1.16.3
     *
     * Gets content of aggregation {@link #getTitle title}.
     *
     * Title element of the `SimpleForm`. Can either be a `Title` element, or a string.
     */
    getTitle(): Title | string;
    /**
     * @SINCE 1.36.0
     *
     * Gets content of aggregation {@link #getToolbar toolbar}.
     *
     * Toolbar of the `SimpleForm`.
     *
     * **Note:** If a `Toolbar` is used, the `Title` is ignored. If a title is needed inside the `Toolbar` it
     * must be added at content to the `Toolbar`. In this case add the `Title` to the `ariaLabelledBy` association.
     */
    getToolbar(): Toolbar;
    /**
     * @SINCE 1.28.0
     *
     * Gets current value of property {@link #getWidth width}.
     *
     * Width of the form.
     */
    getWidth(): CSSSize;
    /**
     * Checks for the provided `sap.ui.core.Element` in the aggregation {@link #getContent content}. and returns
     * its index if found or -1 otherwise.
     */
    indexOfContent(
      /**
       * The content whose index is looked for
       */
      oContent: UI5Element
    ): int;
    /**
     * Inserts a content into the aggregation {@link #getContent content}.
     */
    insertContent(
      /**
       * The content to insert; if empty, nothing is inserted
       */
      oContent: UI5Element,
      /**
       * The `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
       * is inserted at position 0; for a value greater than the current size of the aggregation, the content
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * @SINCE 1.32.0
     *
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * Removes all the controls from the aggregation {@link #getContent content}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllContent(): UI5Element[];
    /**
     * @SINCE 1.32.0
     *
     * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAriaLabelledBy(
      /**
       * The ariaLabelledBy to be removed or its index or ID
       */
      vAriaLabelledBy: int | ID | Control
    ): ID;
    /**
     * Removes a content from the aggregation {@link #getContent content}.
     */
    removeContent(
      /**
       * The content to remove or its index or id
       */
      vContent: int | string | UI5Element
    ): UI5Element;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getAdjustLabelSpan adjustLabelSpan}.
     *
     * If set, the usage of `labelSpanL` and `labelSpanM` are dependent on the number of `FormContainers` in
     * one row. If only one `FormContainer` is displayed in one row, `labelSpanM` is used to define the size
     * of the label. This is the same for medium and large `Forms`. This is done to align the labels on forms
     * where full-size `FormContainers` and multiple-column rows are used in the same `Form` (because every
     * `FormContainer` has its own grid inside).
     *
     * If not set, the usage of `labelSpanL` and `labelSpanM` are dependent on the `Form` size. The number of
     * `FormContainers` doesn't matter in this case.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setAdjustLabelSpan(
      /**
       * New value for property `adjustLabelSpan`
       */
      bAdjustLabelSpan?: boolean
    ): this;
    /**
     * @SINCE 1.36.0
     *
     * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
     *
     * Specifies the background color of the `SimpleForm` content.
     *
     * The visualization of the different options depends on the used theme.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Translucent`.
     */
    setBackgroundDesign(
      /**
       * New value for property `backgroundDesign`
       */
      sBackgroundDesign?: BackgroundDesign | keyof typeof BackgroundDesign
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets a new value for property {@link #getBreakpointL breakpointL}.
     *
     * Breakpoint between Medium size and Large size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1024`.
     */
    setBreakpointL(
      /**
       * New value for property `breakpointL`
       */
      iBreakpointL?: int
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets a new value for property {@link #getBreakpointM breakpointM}.
     *
     * Breakpoint between Small size and Medium size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `600`.
     */
    setBreakpointM(
      /**
       * New value for property `breakpointM`
       */
      iBreakpointM?: int
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getBreakpointXL breakpointXL}.
     *
     * Breakpoint between Medium size and Large size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1440`.
     */
    setBreakpointXL(
      /**
       * New value for property `breakpointXL`
       */
      iBreakpointXL?: int
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets a new value for property {@link #getColumnsL columnsL}.
     *
     * Form columns for large size. The number of columns for large size must not be smaller than the number
     * of columns for medium size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `2`.
     */
    setColumnsL(
      /**
       * New value for property `columnsL`
       */
      iColumnsL?: int
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets a new value for property {@link #getColumnsM columnsM}.
     *
     * Form columns for medium size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1`.
     */
    setColumnsM(
      /**
       * New value for property `columnsM`
       */
      iColumnsM?: int
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getColumnsXL columnsXL}.
     *
     * Form columns for extra large size. The number of columns for extra large size must not be smaller than
     * the number of columns for large size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
     * If the default value -1 is not overwritten with the meaningful one then the `columnsL` value is used
     * (from the backward compatibility reasons).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `-1`.
     */
    setColumnsXL(
      /**
       * New value for property `columnsXL`
       */
      iColumnsXL?: int
    ): this;
    /**
     * Sets a new value for property {@link #getEditable editable}.
     *
     * Applies a device-specific and theme-specific line height and label alignment to the form rows if the
     * form has editable content. If set, all (not only the editable) rows of the form will get the line height
     * of editable fields.
     *
     * The labels inside the form will be rendered by default in the according mode.
     *
     * **Note:** The setting of this property does not change the content of the form. For example, `Input`
     * controls in a form with `editable` set to false are still editable.
     *
     * **Warning:** If this property is wrongly set, this might lead to visual issues. The labels and fields
     * might be misaligned, the labels might be rendered in the wrong mode, and the spacing between the single
     * controls might be wrong. Also, controls that do not fit the mode might be rendered incorrectly.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setEditable(
      /**
       * New value for property `editable`
       */
      bEditable?: boolean
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets a new value for property {@link #getEmptySpanL emptySpanL}.
     *
     * Number of grid cells that are empty at the end of each line on large size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
     * If a `ColumnLayout` is used, this property defines the empty cells for large columns.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     */
    setEmptySpanL(
      /**
       * New value for property `emptySpanL`
       */
      iEmptySpanL?: int
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets a new value for property {@link #getEmptySpanM emptySpanM}.
     *
     * Number of grid cells that are empty at the end of each line on medium size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     */
    setEmptySpanM(
      /**
       * New value for property `emptySpanM`
       */
      iEmptySpanM?: int
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets a new value for property {@link #getEmptySpanS emptySpanS}.
     *
     * Number of grid cells that are empty at the end of each line on small size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     */
    setEmptySpanS(
      /**
       * New value for property `emptySpanS`
       */
      iEmptySpanS?: int
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getEmptySpanXL emptySpanXL}.
     *
     * Number of grid cells that are empty at the end of each line on extra large size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout. If the default
     * value -1 is not overwritten with the meaningful one then the `emptySpanL` value is used (from the backward
     * compatibility reasons).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `-1`.
     */
    setEmptySpanXL(
      /**
       * New value for property `emptySpanXL`
       */
      iEmptySpanXL?: int
    ): this;
    /**
     * Sets a new value for property {@link #getLabelMinWidth labelMinWidth}.
     *
     * Specifies the min-width in pixels of the label in all form rows.
     *
     * **Note:** This property is only used if a `ResponsiveLayout` is used as a layout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `192`.
     */
    setLabelMinWidth(
      /**
       * New value for property `labelMinWidth`
       */
      iLabelMinWidth?: int
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets a new value for property {@link #getLabelSpanL labelSpanL}.
     *
     * Default span for labels in large size.
     *
     * **Note:** If `adjustLabelSpan` is set, this property is only used if more than 1 `FormContainer` is in
     * one line. If only 1 `FormContainer` is in the line, then the `labelSpanM` value is used.
     *
     * **Note:** This property is only used if `ResponsiveGridLayout` or `ColumnLayout` is used as a layout.
     * If a `ColumnLayout` is used, this property defines the label size for large columns.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `4`.
     */
    setLabelSpanL(
      /**
       * New value for property `labelSpanL`
       */
      iLabelSpanL?: int
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets a new value for property {@link #getLabelSpanM labelSpanM}.
     *
     * Default span for labels in medium size.
     *
     * **Note:** If `adjustLabelSpan` is set, this property is used for full-size `FormContainers`. If more
     * than one `FormContainer` is in one line, `labelSpanL` is used.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `2`.
     */
    setLabelSpanM(
      /**
       * New value for property `labelSpanM`
       */
      iLabelSpanM?: int
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets a new value for property {@link #getLabelSpanS labelSpanS}.
     *
     * Default span for labels in small size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `12`.
     */
    setLabelSpanS(
      /**
       * New value for property `labelSpanS`
       */
      iLabelSpanS?: int
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getLabelSpanXL labelSpanXL}.
     *
     * Default span for labels in extra large size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout. If the default
     * value -1 is not overwritten with the meaningful one then the `labelSpanL` value is used (from the backward
     * compatibility reasons).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `-1`.
     */
    setLabelSpanXL(
      /**
       * New value for property `labelSpanXL`
       */
      iLabelSpanXL?: int
    ): this;
    /**
     * Sets a new value for property {@link #getLayout layout}.
     *
     * The `FormLayout` that is used to render the `SimpleForm`.
     *
     * We recommend using the `ColumnLayout` for rendering a `SimpleForm`, as its responsiveness uses the space
     * available in the best way possible.
     *
     * **Note** If possible, set the `layout` before adding content to prevent calculations for the default
     * layout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `ResponsiveLayout`.
     */
    setLayout(
      /**
       * New value for property `layout`
       */
      sLayout?: form.SimpleFormLayout | keyof typeof form.SimpleFormLayout
    ): this;
    /**
     * Sets a new value for property {@link #getMaxContainerCols maxContainerCols}.
     *
     * The maximum amount of groups (`{@link sap.ui.layout.form.FormContainer FormContainers}`) per row that
     * is used before a new row is started.
     *
     * **Note:** If `{@link sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout}` is used as `layout`,
     * this property is not used. Please use the properties `ColumnsL` and `ColumnsM` in this case.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `2`.
     */
    setMaxContainerCols(
      /**
       * New value for property `maxContainerCols`
       */
      iMaxContainerCols?: int
    ): this;
    /**
     * Sets a new value for property {@link #getMinWidth minWidth}.
     *
     * The overall minimum width in pixels that is used for the `SimpleForm`.
     *
     * If the available width is below the given `minWidth` the `SimpleForm` will create a new row for the next
     * group (`{@link sap.ui.layout.form.FormContainer FormContainer}`). The default value is -1, meaning that
     * inner groups (`{@link sap.ui.layout.form.FormContainer FormContainers}`) will be stacked until `maxContainerCols`
     * is reached, irrespective of whether a `width` is reached or the available parents width is reached.
     *
     * **Note:** This property is only used if a `ResponsiveLayout` is used as a layout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `-1`.
     */
    setMinWidth(
      /**
       * New value for property `minWidth`
       */
      iMinWidth?: int
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getSingleContainerFullSize singleContainerFullSize}.
     *
     * If the `Form` contains only one single `FormContainer` and this property is set, the `FormContainer`
     * is displayed using the full size of the `Form`. In this case the properties `columnsL` and `columnsM`
     * are ignored.
     *
     * In all other cases the `FormContainer` is displayed in the size of one column.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setSingleContainerFullSize(
      /**
       * New value for property `singleContainerFullSize`
       */
      bSingleContainerFullSize?: boolean
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets the aggregated {@link #getTitle title}.
     */
    setTitle(
      /**
       * The title to set
       */
      vTitle: Title | string
    ): this;
    /**
     * @SINCE 1.36.0
     *
     * Sets the aggregated {@link #getToolbar toolbar}.
     */
    setToolbar(
      /**
       * The toolbar to set
       */
      oToolbar: Toolbar
    ): this;
    /**
     * @SINCE 1.28.0
     *
     * Sets a new value for property {@link #getWidth width}.
     *
     * Width of the form.
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

  export interface $SimpleFormSettings extends $ControlSettings {
    /**
     * The maximum amount of groups (`{@link sap.ui.layout.form.FormContainer FormContainers}`) per row that
     * is used before a new row is started.
     *
     * **Note:** If `{@link sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout}` is used as `layout`,
     * this property is not used. Please use the properties `ColumnsL` and `ColumnsM` in this case.
     */
    maxContainerCols?: int | PropertyBindingInfo;

    /**
     * The overall minimum width in pixels that is used for the `SimpleForm`.
     *
     * If the available width is below the given `minWidth` the `SimpleForm` will create a new row for the next
     * group (`{@link sap.ui.layout.form.FormContainer FormContainer}`). The default value is -1, meaning that
     * inner groups (`{@link sap.ui.layout.form.FormContainer FormContainers}`) will be stacked until `maxContainerCols`
     * is reached, irrespective of whether a `width` is reached or the available parents width is reached.
     *
     * **Note:** This property is only used if a `ResponsiveLayout` is used as a layout.
     */
    minWidth?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.28.0
     *
     * Width of the form.
     */
    width?: CSSSize | PropertyBindingInfo;

    /**
     * Applies a device-specific and theme-specific line height and label alignment to the form rows if the
     * form has editable content. If set, all (not only the editable) rows of the form will get the line height
     * of editable fields.
     *
     * The labels inside the form will be rendered by default in the according mode.
     *
     * **Note:** The setting of this property does not change the content of the form. For example, `Input`
     * controls in a form with `editable` set to false are still editable.
     *
     * **Warning:** If this property is wrongly set, this might lead to visual issues. The labels and fields
     * might be misaligned, the labels might be rendered in the wrong mode, and the spacing between the single
     * controls might be wrong. Also, controls that do not fit the mode might be rendered incorrectly.
     */
    editable?: boolean | PropertyBindingInfo;

    /**
     * Specifies the min-width in pixels of the label in all form rows.
     *
     * **Note:** This property is only used if a `ResponsiveLayout` is used as a layout.
     */
    labelMinWidth?: int | PropertyBindingInfo;

    /**
     * The `FormLayout` that is used to render the `SimpleForm`.
     *
     * We recommend using the `ColumnLayout` for rendering a `SimpleForm`, as its responsiveness uses the space
     * available in the best way possible.
     *
     * **Note** If possible, set the `layout` before adding content to prevent calculations for the default
     * layout.
     */
    layout?:
      | (form.SimpleFormLayout | keyof typeof form.SimpleFormLayout)
      | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * Default span for labels in extra large size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout. If the default
     * value -1 is not overwritten with the meaningful one then the `labelSpanL` value is used (from the backward
     * compatibility reasons).
     */
    labelSpanXL?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.16.3
     *
     * Default span for labels in large size.
     *
     * **Note:** If `adjustLabelSpan` is set, this property is only used if more than 1 `FormContainer` is in
     * one line. If only 1 `FormContainer` is in the line, then the `labelSpanM` value is used.
     *
     * **Note:** This property is only used if `ResponsiveGridLayout` or `ColumnLayout` is used as a layout.
     * If a `ColumnLayout` is used, this property defines the label size for large columns.
     */
    labelSpanL?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.16.3
     *
     * Default span for labels in medium size.
     *
     * **Note:** If `adjustLabelSpan` is set, this property is used for full-size `FormContainers`. If more
     * than one `FormContainer` is in one line, `labelSpanL` is used.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     */
    labelSpanM?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.16.3
     *
     * Default span for labels in small size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     */
    labelSpanS?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * If set, the usage of `labelSpanL` and `labelSpanM` are dependent on the number of `FormContainers` in
     * one row. If only one `FormContainer` is displayed in one row, `labelSpanM` is used to define the size
     * of the label. This is the same for medium and large `Forms`. This is done to align the labels on forms
     * where full-size `FormContainers` and multiple-column rows are used in the same `Form` (because every
     * `FormContainer` has its own grid inside).
     *
     * If not set, the usage of `labelSpanL` and `labelSpanM` are dependent on the `Form` size. The number of
     * `FormContainers` doesn't matter in this case.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     */
    adjustLabelSpan?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * Number of grid cells that are empty at the end of each line on extra large size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout. If the default
     * value -1 is not overwritten with the meaningful one then the `emptySpanL` value is used (from the backward
     * compatibility reasons).
     */
    emptySpanXL?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.16.3
     *
     * Number of grid cells that are empty at the end of each line on large size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
     * If a `ColumnLayout` is used, this property defines the empty cells for large columns.
     */
    emptySpanL?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.16.3
     *
     * Number of grid cells that are empty at the end of each line on medium size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     */
    emptySpanM?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.16.3
     *
     * Number of grid cells that are empty at the end of each line on small size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     */
    emptySpanS?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * Form columns for extra large size. The number of columns for extra large size must not be smaller than
     * the number of columns for large size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
     * If the default value -1 is not overwritten with the meaningful one then the `columnsL` value is used
     * (from the backward compatibility reasons).
     */
    columnsXL?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.16.3
     *
     * Form columns for large size. The number of columns for large size must not be smaller than the number
     * of columns for medium size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
     */
    columnsL?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.16.3
     *
     * Form columns for medium size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
     */
    columnsM?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * If the `Form` contains only one single `FormContainer` and this property is set, the `FormContainer`
     * is displayed using the full size of the `Form`. In this case the properties `columnsL` and `columnsM`
     * are ignored.
     *
     * In all other cases the `FormContainer` is displayed in the size of one column.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     */
    singleContainerFullSize?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * Breakpoint between Medium size and Large size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     */
    breakpointXL?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.16.3
     *
     * Breakpoint between Medium size and Large size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     */
    breakpointL?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.16.3
     *
     * Breakpoint between Small size and Medium size.
     *
     * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
     */
    breakpointM?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.36.0
     *
     * Specifies the background color of the `SimpleForm` content.
     *
     * The visualization of the different options depends on the used theme.
     */
    backgroundDesign?:
      | (BackgroundDesign | keyof typeof BackgroundDesign)
      | PropertyBindingInfo;

    /**
     * The content of the form is structured in the following way:
     * 	 - Add a `sap.ui.core.Title` element or `Toolbar` control to start a new group (`{@link sap.ui.layout.form.FormContainer
     * 			FormContainer}`).
     * 	 - Add a `Label` control to start a new row (`{@link sap.ui.layout.form.FormElement FormElement}`).
     *
     * 	 - Add controls as input fields, text fields or other as needed.
     * 	 - Use `LayoutData` to influence the layout for special cases in the single controls. For example, if
     * 			a `ResponsiveLayout` is used as a layout, the form content is weighted using weight 3 for the labels
     * 			and weight 5 for the fields part. By default the label column is 192 pixels wide. If your input controls
     * 			should influence their width, you can add `sap.ui.layout.ResponsiveFlowLayoutData` to them via `setLayoutData`
     * 			method. Ensure that the sum of the weights in the `ResponsiveFlowLayoutData` is not more than 5, as this
     * 			is the total width of the input control part of each form row.  Example for a row where the `Input`
     * 			weight 4 and the second `Input` weight 1 (using `ResponsiveLayout`):
     * ```javascript
     *
     * new sap.m.Label({text:"Label"});
     * new sap.m.Input({value:"Weight 4", layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:4})}),
     * new sap.m.Input({value:"Weight 1", layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:1})}),
     * ```
     *
     *
     * For example, if a `ResponsiveGridLayout` is used as a layout, there are 12 cells in one row. Depending
     * on the screen size the labels use the defined `labelSpan`. The remaining cells are used for the fields
     * (and `emptySpan` if defined). The available cells are distributed to all fields in the row. If one field
     * should use a fixed number of cells you can add `sap.ui.layout.GridData` to them via `setLayoutData` method.
     * If there are additional fields in the row they will get the remaining cells.  Example for a row
     * with two `Input` controls where one uses four cells on small screens, one cell on medium screens and
     * 2 cells on larger screens (using `ResponsiveGridLayout`):
     * ```javascript
     *
     * new sap.m.Label({text:"Label"});
     * new sap.m.Input({value:"auto size"}),
     * new sap.m.Input({value:"fix size", layoutData: new sap.ui.layout.GridData({span: "XL1 L1 M2 S4"})}),
     * ```
     *
     *
     * **Warning:** Do not put any layout or other container controls in here. This could damage the visual
     * layout, keyboard support and screen-reader support. Only labels, titles, toolbars and form controls are
     * allowed. Views are also not supported. Allowed form controls implement the interface `sap.ui.core.IFormContent`.
     *
     * If editable controls are used as content, the `editable` property must be set to `true`, otherwise to
     * `false`. If the `editable` property is set incorrectly, there will be visual issues like wrong label
     * alignment or wrong spacing between the controls.
     */
    content?: UI5Element[] | UI5Element | AggregationBindingInfo;

    /**
     * @SINCE 1.16.3
     *
     * Title element of the `SimpleForm`. Can either be a `Title` element, or a string.
     */
    title?: string | Title | PropertyBindingInfo;

    /**
     * @SINCE 1.36.0
     *
     * Toolbar of the `SimpleForm`.
     *
     * **Note:** If a `Toolbar` is used, the `Title` is ignored. If a title is needed inside the `Toolbar` it
     * must be added at content to the `Toolbar`. In this case add the `Title` to the `ariaLabelledBy` association.
     */
    toolbar?: Toolbar;

    /**
     * @SINCE 1.32.0
     *
     * Association to controls / IDs which label this control (see WAI-ARIA attribute `aria-labelledby`).
     */
    ariaLabelledBy?: Array<Control | string>;
  }
}

declare module "sap/ui/layout/Grid" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID, CSSSize } from "sap/ui/core/library";

  import { GridIndent, GridSpan, GridPosition } from "sap/ui/layout/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.15.0
   *
   * A layout control which positions its child controls in a 12 column flow layout.
   *
   * The `Grid` control's children can be specified to take on a variable amount of columns depending on available
   * screen size. With this control it is possible to achieve flexible layouts and line-breaks for extra large-,
   * large-, medium- and small-sized screens, such as large desktop, desktop, tablet, and mobile.
   *
   * The `Grid` control's width can be percentage- or pixel-based and the spacing between its columns can
   * be set to various predefined values.
   *
   * **Notes:**
   * 	 - The visibility of the child control does not affect the horizontal space it occupies, meaning that
   * 			even if the control is not visible, its horizontal space still exists, even if it is empty.
   * 	 -  If it gets wider, the content of the columns is designed to overflow outside of its dimensions.
   * 			An additional `sapUiRespGridOverflowHidden` CSS class should be added to the control in order to hide
   * 			the overflowing part of it.
   */
  export default class Grid extends Control {
    /**
     * Constructor for a new `Grid`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/grid-layout/#responsive-grid Grid}
     * 	{@link topic:43ae317cf39640a88bc8be979d2671df Grid}
     * 	{@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $GridSettings
    );
    /**
     * Constructor for a new `Grid`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/grid-layout/#responsive-grid Grid}
     * 	{@link topic:43ae317cf39640a88bc8be979d2671df Grid}
     * 	{@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $GridSettings
    );

    /**
     * @SINCE 1.48.7
     *
     * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    addAriaLabelledBy(
      /**
       * The ariaLabelledBy to add; if empty, nothing is inserted
       */
      vAriaLabelledBy: ID | Control
    ): this;
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
     * Creates a new subclass of class sap.ui.layout.Grid with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Grid>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns the `Grid` accessibility information.
     * See:
     * 	sap.ui.core.Control#getAccessibilityInfo
     */
    getAccessibilityInfo(): object;
    /**
     * @SINCE 1.48.7
     *
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
     * ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * Gets current value of property {@link #getContainerQuery containerQuery}.
     *
     * If set to `true`, the current range (large, medium or small) is defined by the size of the container
     * surrounding the `Grid` instead of the device screen size (media Query).
     *
     * Default value is `false`.
     */
    getContainerQuery(): boolean;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Controls that are placed into Grid layout.
     */
    getContent(): Control[];
    /**
     * Gets current value of property {@link #getDefaultIndent defaultIndent}.
     *
     * Optional. Defines default for the whole Grid numbers of empty columns before the current span begins.
     * It can be defined for large, medium and small screens. Allowed values are separated by space Letters
     * L, M or S followed by number of columns from 0 to 11 that the container has to take, for example, `L2
     * M4 S6`, `M11`, `s10` or `l4 m4`.
     *
     * **Note:** The parameters must be provided in the order .
     *
     * Default value is `"XL0 L0 M0 S0"`.
     */
    getDefaultIndent(): GridIndent;
    /**
     * Gets current value of property {@link #getDefaultSpan defaultSpan}.
     *
     * Optional. A string type that represents the span values of the `Grid` for large, medium and small screens.
     * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that
     * the container has to take, for example, `L2 M4 S6`, `M12`, `s10` or `l4 m4`.
     *
     * **Note:** The parameters must be provided in the order .
     *
     * Default value is `"XL3 L3 M6 S12"`.
     */
    getDefaultSpan(): GridSpan;
    /**
     * Gets current value of property {@link #getHSpacing hSpacing}.
     *
     * Optional. Defines the horizontal spacing between the content in the `Grid`. In rem, allowed values are
     * 0, 0.5 , 1 or 2.
     *
     * Default value is `1`.
     */
    getHSpacing(): float;
    /**
     * Returns a metadata object for class sap.ui.layout.Grid.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getPosition position}.
     *
     * Optional. Defines the position of the `Grid` in the window or surrounding container.
     *
     * Default value is `"Left"`.
     */
    getPosition(): GridPosition | keyof typeof GridPosition;
    /**
     * Gets current value of property {@link #getVSpacing vSpacing}.
     *
     * Optional. Defines the vertical spacing between the rows in the `Grid`. In rem, allowed values are 0,
     * 0.5, 1 and 2.
     *
     * Default value is `1`.
     */
    getVSpacing(): float;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Optional. Defines the width of the `Grid`. If not specified, then 100%.
     *
     * Default value is `'100%'`.
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
     * @SINCE 1.48.7
     *
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * Removes all the controls from the aggregation {@link #getContent content}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllContent(): Control[];
    /**
     * @SINCE 1.48.7
     *
     * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAriaLabelledBy(
      /**
       * The ariaLabelledBy to be removed or its index or ID
       */
      vAriaLabelledBy: int | ID | Control
    ): ID;
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
     * Sets a new value for property {@link #getContainerQuery containerQuery}.
     *
     * If set to `true`, the current range (large, medium or small) is defined by the size of the container
     * surrounding the `Grid` instead of the device screen size (media Query).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setContainerQuery(
      /**
       * New value for property `containerQuery`
       */
      bContainerQuery?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getDefaultIndent defaultIndent}.
     *
     * Optional. Defines default for the whole Grid numbers of empty columns before the current span begins.
     * It can be defined for large, medium and small screens. Allowed values are separated by space Letters
     * L, M or S followed by number of columns from 0 to 11 that the container has to take, for example, `L2
     * M4 S6`, `M11`, `s10` or `l4 m4`.
     *
     * **Note:** The parameters must be provided in the order .
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"XL0 L0 M0 S0"`.
     */
    setDefaultIndent(
      /**
       * New value for property `defaultIndent`
       */
      sDefaultIndent?: GridIndent
    ): this;
    /**
     * Sets a new value for property {@link #getDefaultSpan defaultSpan}.
     *
     * Optional. A string type that represents the span values of the `Grid` for large, medium and small screens.
     * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that
     * the container has to take, for example, `L2 M4 S6`, `M12`, `s10` or `l4 m4`.
     *
     * **Note:** The parameters must be provided in the order .
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"XL3 L3 M6 S12"`.
     */
    setDefaultSpan(
      /**
       * New value for property `defaultSpan`
       */
      sDefaultSpan?: GridSpan
    ): this;
    /**
     * Sets a new value for property {@link #getHSpacing hSpacing}.
     *
     * Optional. Defines the horizontal spacing between the content in the `Grid`. In rem, allowed values are
     * 0, 0.5 , 1 or 2.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1`.
     */
    setHSpacing(
      /**
       * New value for property `hSpacing`
       */
      fHSpacing?: float
    ): this;
    /**
     * Sets a new value for property {@link #getPosition position}.
     *
     * Optional. Defines the position of the `Grid` in the window or surrounding container.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Left"`.
     */
    setPosition(
      /**
       * New value for property `position`
       */
      sPosition?: GridPosition | keyof typeof GridPosition
    ): this;
    /**
     * Sets a new value for property {@link #getVSpacing vSpacing}.
     *
     * Optional. Defines the vertical spacing between the rows in the `Grid`. In rem, allowed values are 0,
     * 0.5, 1 and 2.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1`.
     */
    setVSpacing(
      /**
       * New value for property `vSpacing`
       */
      fVSpacing?: float
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Optional. Defines the width of the `Grid`. If not specified, then 100%.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `'100%'`.
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth?: CSSSize
    ): this;
  }

  export interface $GridSettings extends $ControlSettings {
    /**
     * Optional. Defines the width of the `Grid`. If not specified, then 100%.
     */
    width?: CSSSize | PropertyBindingInfo;

    /**
     * Optional. Defines the vertical spacing between the rows in the `Grid`. In rem, allowed values are 0,
     * 0.5, 1 and 2.
     */
    vSpacing?: float | PropertyBindingInfo;

    /**
     * Optional. Defines the horizontal spacing between the content in the `Grid`. In rem, allowed values are
     * 0, 0.5 , 1 or 2.
     */
    hSpacing?: float | PropertyBindingInfo;

    /**
     * Optional. Defines the position of the `Grid` in the window or surrounding container.
     */
    position?: (GridPosition | keyof typeof GridPosition) | PropertyBindingInfo;

    /**
     * Optional. A string type that represents the span values of the `Grid` for large, medium and small screens.
     * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that
     * the container has to take, for example, `L2 M4 S6`, `M12`, `s10` or `l4 m4`.
     *
     * **Note:** The parameters must be provided in the order .
     */
    defaultSpan?: GridSpan | PropertyBindingInfo;

    /**
     * Optional. Defines default for the whole Grid numbers of empty columns before the current span begins.
     * It can be defined for large, medium and small screens. Allowed values are separated by space Letters
     * L, M or S followed by number of columns from 0 to 11 that the container has to take, for example, `L2
     * M4 S6`, `M11`, `s10` or `l4 m4`.
     *
     * **Note:** The parameters must be provided in the order .
     */
    defaultIndent?: GridIndent | PropertyBindingInfo;

    /**
     * If set to `true`, the current range (large, medium or small) is defined by the size of the container
     * surrounding the `Grid` instead of the device screen size (media Query).
     */
    containerQuery?: boolean | PropertyBindingInfo;

    /**
     * Controls that are placed into Grid layout.
     */
    content?: Control[] | Control | AggregationBindingInfo;

    /**
     * @SINCE 1.48.7
     *
     * Association to controls / IDs that label this control (see WAI-ARIA attribute `aria-labelledby`).
     */
    ariaLabelledBy?: Array<Control | string>;
  }
}

declare module "sap/ui/layout/GridData" {
  import {
    default as LayoutData,
    $LayoutDataSettings,
  } from "sap/ui/core/LayoutData";

  import { GridIndent, GridSpan } from "sap/ui/layout/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.15.0
   *
   * Defines layout data for the {@link sap.ui.layout.Grid}.
   *
   * **Note:** When `GridData` is used for controls inside a form, the `linebreak` property has to be set
   * to `true` if the next form element has to be displayed on a new line. Otherwise the `GridData` overrides
   * the layout provided by the `Form`.
   */
  export default class GridData extends LayoutData {
    /**
     * Constructor for a new `GridData`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:43ae317cf39640a88bc8be979d2671df Grid}
     * 	{@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $GridDataSettings
    );
    /**
     * Constructor for a new `GridData`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:43ae317cf39640a88bc8be979d2671df Grid}
     * 	{@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $GridDataSettings
    );

    /**
     * Creates a new subclass of class sap.ui.layout.GridData with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, GridData>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getIndent indent}.
     *
     * A string type that represents the indent values of the `Grid` for large, medium and small screens.
     *
     * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 11 that
     * the container has to take, for example, `L2 M4 S6`, `M11`, `s10` or `l4 m4`.
     *
     * **Note:** The parameters must be provided in the order .
     */
    getIndent(): GridIndent;
    /**
     * Gets current value of property {@link #getIndentL indentL}.
     *
     * Optional. Defines an indent value for large screens. This value overwrites the value for large screens
     * defined in the `indent` property.
     */
    getIndentL(): int;
    /**
     * @deprecated (since 1.17.1) - Use the `indentL` property instead.
     *
     * Gets current value of property {@link #getIndentLarge indentLarge}.
     *
     * Deprecated. Defines an indent value for large screens. This value overwrites the value for large screens
     * defined in the `indent` property.
     */
    getIndentLarge(): int;
    /**
     * Gets current value of property {@link #getIndentM indentM}.
     *
     * Optional. Defines an indent value for medium size screens. This value overwrites the value for medium
     * screens defined in the `indent` property.
     */
    getIndentM(): int;
    /**
     * @deprecated (since 1.17.1) - Use the `indentM` property instead.
     *
     * Gets current value of property {@link #getIndentMedium indentMedium}.
     *
     * Deprecated. Defines an indent value for medium screens. This value overwrites the value for medium screens
     * defined in the `indent` property.
     */
    getIndentMedium(): int;
    /**
     * Gets current value of property {@link #getIndentS indentS}.
     *
     * Optional. Defines an indent value for small screens. This value overwrites the value for small screens
     * defined in the `indent` property.
     */
    getIndentS(): int;
    /**
     * @deprecated (since 1.17.1) - Use `indentS` property instead.
     *
     * Gets current value of property {@link #getIndentSmall indentSmall}.
     *
     * Deprecated. Defines an indent value for small screens. This value overwrites the value for small screens
     * defined in the `indent` property.
     */
    getIndentSmall(): int;
    /**
     * Gets current value of property {@link #getIndentXL indentXL}.
     *
     * Optional. Defines an indent value for extra large screens. This value overwrites the value for extra
     * large screens defined in the `indent` property.
     */
    getIndentXL(): int;
    /**
     * Gets current value of property {@link #getLinebreak linebreak}.
     *
     * Optional. If set to `true`, the control causes a line break on all-size screens within the `Grid` and
     * becomes the first within the next line.
     *
     * Default value is `false`.
     */
    getLinebreak(): boolean;
    /**
     * Gets current value of property {@link #getLinebreakL linebreakL}.
     *
     * Optional. If set to `true`, the control causes a line break on large screens within the `Grid` and becomes
     * the first within the next line.
     *
     * Default value is `false`.
     */
    getLinebreakL(): boolean;
    /**
     * Gets current value of property {@link #getLinebreakM linebreakM}.
     *
     * Optional. If set to `true`, the control causes a line break on medium screens within the `Grid` and becomes
     * the first within the next line.
     *
     * Default value is `false`.
     */
    getLinebreakM(): boolean;
    /**
     * Gets current value of property {@link #getLinebreakS linebreakS}.
     *
     * Optional. If set to `true`, the control causes a line break on small screens within the `Grid` and becomes
     * the first within the next line.
     *
     * Default value is `false`.
     */
    getLinebreakS(): boolean;
    /**
     * Gets current value of property {@link #getLinebreakXL linebreakXL}.
     *
     * Optional. If set to `true`, the control causes a line break on extra large screens within the `Grid`
     * and becomes the first within the next line.
     *
     * Default value is `false`.
     */
    getLinebreakXL(): boolean;
    /**
     * Returns a metadata object for class sap.ui.layout.GridData.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getMoveBackwards moveBackwards}.
     *
     * Optional. Moves a cell backwards with as many columns as specified.
     */
    getMoveBackwards(): GridIndent;
    /**
     * Gets current value of property {@link #getMoveForward moveForward}.
     *
     * Optional. Moves a cell forwards with as many columns as specified.
     */
    getMoveForward(): GridIndent;
    /**
     * Gets current value of property {@link #getSpan span}.
     *
     * A string type that represents the span values of the `Grid` for large, medium and small screens.
     *
     * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that
     * the container has to take, for example: `L2 M4 S6`, `M12`, `s10` or `l4 m4`.
     *
     * **Note:** The parameters must be provided in the order .
     */
    getSpan(): GridSpan;
    /**
     * Gets current value of property {@link #getSpanL spanL}.
     *
     * Optional. Defines a span value for large screens. This value overwrites the value for large screens defined
     * in the `span` property.
     */
    getSpanL(): int;
    /**
     * @deprecated (since 1.17.1) - Use the `spanL` property instead.
     *
     * Gets current value of property {@link #getSpanLarge spanLarge}.
     *
     * Deprecated. Defines a span value for large screens. This value overwrites the value for large screens
     * defined in the `span` property.
     */
    getSpanLarge(): int;
    /**
     * Gets current value of property {@link #getSpanM spanM}.
     *
     * Optional. Defines a span value for medium size screens. This value overwrites the value for medium screens
     * defined in the `span` property.
     */
    getSpanM(): int;
    /**
     * @deprecated (since 1.17.1) - Use the `spanM` property instead.
     *
     * Gets current value of property {@link #getSpanMedium spanMedium}.
     *
     * Deprecated. Defines a span value for medium screens. This value overwrites the value for medium screens
     * defined in the `span` property.
     */
    getSpanMedium(): int;
    /**
     * Gets current value of property {@link #getSpanS spanS}.
     *
     * Optional. Defines a span value for small screens. This value overwrites the value for small screens defined
     * in the `span` property.
     */
    getSpanS(): int;
    /**
     * @deprecated (since 1.17.1) - Use the `spanS` property instead.
     *
     * Gets current value of property {@link #getSpanSmall spanSmall}.
     *
     * Deprecated. Defines a span value for small screens. This value overwrites the value for small screens
     * defined in the `span` property.
     */
    getSpanSmall(): int;
    /**
     * Gets current value of property {@link #getSpanXL spanXL}.
     *
     * Optional. Defines a span value for extra large screens. This value overwrites the value for extra large
     * screens defined in the `span` property.
     */
    getSpanXL(): int;
    /**
     * Gets current value of property {@link #getVisibleL visibleL}.
     *
     * Defines if this control is visible on large screens.
     *
     * Default value is `true`.
     */
    getVisibleL(): boolean;
    /**
     * Gets current value of property {@link #getVisibleM visibleM}.
     *
     * Defines if this control is visible on medium screens.
     *
     * Default value is `true`.
     */
    getVisibleM(): boolean;
    /**
     * @deprecated (since 1.17.1) - Use the `visibleL` property instead.
     *
     * Gets current value of property {@link #getVisibleOnLarge visibleOnLarge}.
     *
     * Deprecated. Defines if this control is visible on large screens.
     *
     * Default value is `true`.
     */
    getVisibleOnLarge(): boolean;
    /**
     * @deprecated (since 1.17.1) - Use the `visibleM` property instead.
     *
     * Gets current value of property {@link #getVisibleOnMedium visibleOnMedium}.
     *
     * Deprecated. Defines if this control is visible on medium screens.
     *
     * Default value is `true`.
     */
    getVisibleOnMedium(): boolean;
    /**
     * @deprecated (since 1.17.1) - Use the `visibleS` property instead.
     *
     * Gets current value of property {@link #getVisibleOnSmall visibleOnSmall}.
     *
     * Deprecated. Defines if this control is visible on small screens.
     *
     * Default value is `true`.
     */
    getVisibleOnSmall(): boolean;
    /**
     * Gets current value of property {@link #getVisibleS visibleS}.
     *
     * Defines if this control is visible on small screens.
     *
     * Default value is `true`.
     */
    getVisibleS(): boolean;
    /**
     * Gets current value of property {@link #getVisibleXL visibleXL}.
     *
     * Defines if this control is visible on extra Large screens.
     *
     * Default value is `true`.
     */
    getVisibleXL(): boolean;
    /**
     * Sets a new value for property {@link #getIndent indent}.
     *
     * A string type that represents the indent values of the `Grid` for large, medium and small screens.
     *
     * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 11 that
     * the container has to take, for example, `L2 M4 S6`, `M11`, `s10` or `l4 m4`.
     *
     * **Note:** The parameters must be provided in the order .
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setIndent(
      /**
       * New value for property `indent`
       */
      sIndent?: GridIndent
    ): this;
    /**
     * Sets a new value for property {@link #getIndentL indentL}.
     *
     * Optional. Defines an indent value for large screens. This value overwrites the value for large screens
     * defined in the `indent` property.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setIndentL(
      /**
       * New value for property `indentL`
       */
      iIndentL?: int
    ): this;
    /**
     * @deprecated (since 1.17.1) - Use the `indentL` property instead.
     *
     * Sets a new value for property {@link #getIndentLarge indentLarge}.
     *
     * Deprecated. Defines an indent value for large screens. This value overwrites the value for large screens
     * defined in the `indent` property.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setIndentLarge(
      /**
       * New value for property `indentLarge`
       */
      iIndentLarge?: int
    ): this;
    /**
     * Sets a new value for property {@link #getIndentM indentM}.
     *
     * Optional. Defines an indent value for medium size screens. This value overwrites the value for medium
     * screens defined in the `indent` property.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setIndentM(
      /**
       * New value for property `indentM`
       */
      iIndentM?: int
    ): this;
    /**
     * @deprecated (since 1.17.1) - Use the `indentM` property instead.
     *
     * Sets a new value for property {@link #getIndentMedium indentMedium}.
     *
     * Deprecated. Defines an indent value for medium screens. This value overwrites the value for medium screens
     * defined in the `indent` property.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setIndentMedium(
      /**
       * New value for property `indentMedium`
       */
      iIndentMedium?: int
    ): this;
    /**
     * Sets a new value for property {@link #getIndentS indentS}.
     *
     * Optional. Defines an indent value for small screens. This value overwrites the value for small screens
     * defined in the `indent` property.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setIndentS(
      /**
       * New value for property `indentS`
       */
      iIndentS?: int
    ): this;
    /**
     * @deprecated (since 1.17.1) - Use `indentS` property instead.
     *
     * Sets a new value for property {@link #getIndentSmall indentSmall}.
     *
     * Deprecated. Defines an indent value for small screens. This value overwrites the value for small screens
     * defined in the `indent` property.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setIndentSmall(
      /**
       * New value for property `indentSmall`
       */
      iIndentSmall?: int
    ): this;
    /**
     * Sets a new value for property {@link #getIndentXL indentXL}.
     *
     * Optional. Defines an indent value for extra large screens. This value overwrites the value for extra
     * large screens defined in the `indent` property.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setIndentXL(
      /**
       * New value for property `indentXL`
       */
      iIndentXL?: int
    ): this;
    /**
     * Sets a new value for property {@link #getLinebreak linebreak}.
     *
     * Optional. If set to `true`, the control causes a line break on all-size screens within the `Grid` and
     * becomes the first within the next line.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setLinebreak(
      /**
       * New value for property `linebreak`
       */
      bLinebreak?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getLinebreakL linebreakL}.
     *
     * Optional. If set to `true`, the control causes a line break on large screens within the `Grid` and becomes
     * the first within the next line.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setLinebreakL(
      /**
       * New value for property `linebreakL`
       */
      bLinebreakL?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getLinebreakM linebreakM}.
     *
     * Optional. If set to `true`, the control causes a line break on medium screens within the `Grid` and becomes
     * the first within the next line.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setLinebreakM(
      /**
       * New value for property `linebreakM`
       */
      bLinebreakM?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getLinebreakS linebreakS}.
     *
     * Optional. If set to `true`, the control causes a line break on small screens within the `Grid` and becomes
     * the first within the next line.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setLinebreakS(
      /**
       * New value for property `linebreakS`
       */
      bLinebreakS?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getLinebreakXL linebreakXL}.
     *
     * Optional. If set to `true`, the control causes a line break on extra large screens within the `Grid`
     * and becomes the first within the next line.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setLinebreakXL(
      /**
       * New value for property `linebreakXL`
       */
      bLinebreakXL?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getMoveBackwards moveBackwards}.
     *
     * Optional. Moves a cell backwards with as many columns as specified.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setMoveBackwards(
      /**
       * New value for property `moveBackwards`
       */
      sMoveBackwards?: GridIndent
    ): this;
    /**
     * Sets a new value for property {@link #getMoveForward moveForward}.
     *
     * Optional. Moves a cell forwards with as many columns as specified.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setMoveForward(
      /**
       * New value for property `moveForward`
       */
      sMoveForward?: GridIndent
    ): this;
    /**
     * Sets a new value for property {@link #getSpan span}.
     *
     * A string type that represents the span values of the `Grid` for large, medium and small screens.
     *
     * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that
     * the container has to take, for example: `L2 M4 S6`, `M12`, `s10` or `l4 m4`.
     *
     * **Note:** The parameters must be provided in the order .
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setSpan(
      /**
       * New value for property `span`
       */
      sSpan?: GridSpan
    ): this;
    /**
     * Sets a new value for property {@link #getSpanL spanL}.
     *
     * Optional. Defines a span value for large screens. This value overwrites the value for large screens defined
     * in the `span` property.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setSpanL(
      /**
       * New value for property `spanL`
       */
      iSpanL?: int
    ): this;
    /**
     * @deprecated (since 1.17.1) - Use the `spanL` property instead.
     *
     * Sets a new value for property {@link #getSpanLarge spanLarge}.
     *
     * Deprecated. Defines a span value for large screens. This value overwrites the value for large screens
     * defined in the `span` property.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setSpanLarge(
      /**
       * New value for property `spanLarge`
       */
      iSpanLarge?: int
    ): this;
    /**
     * Sets a new value for property {@link #getSpanM spanM}.
     *
     * Optional. Defines a span value for medium size screens. This value overwrites the value for medium screens
     * defined in the `span` property.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setSpanM(
      /**
       * New value for property `spanM`
       */
      iSpanM?: int
    ): this;
    /**
     * @deprecated (since 1.17.1) - Use the `spanM` property instead.
     *
     * Sets a new value for property {@link #getSpanMedium spanMedium}.
     *
     * Deprecated. Defines a span value for medium screens. This value overwrites the value for medium screens
     * defined in the `span` property.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setSpanMedium(
      /**
       * New value for property `spanMedium`
       */
      iSpanMedium?: int
    ): this;
    /**
     * Sets a new value for property {@link #getSpanS spanS}.
     *
     * Optional. Defines a span value for small screens. This value overwrites the value for small screens defined
     * in the `span` property.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setSpanS(
      /**
       * New value for property `spanS`
       */
      iSpanS?: int
    ): this;
    /**
     * @deprecated (since 1.17.1) - Use the `spanS` property instead.
     *
     * Sets a new value for property {@link #getSpanSmall spanSmall}.
     *
     * Deprecated. Defines a span value for small screens. This value overwrites the value for small screens
     * defined in the `span` property.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setSpanSmall(
      /**
       * New value for property `spanSmall`
       */
      iSpanSmall?: int
    ): this;
    /**
     * Sets a new value for property {@link #getSpanXL spanXL}.
     *
     * Optional. Defines a span value for extra large screens. This value overwrites the value for extra large
     * screens defined in the `span` property.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setSpanXL(
      /**
       * New value for property `spanXL`
       */
      iSpanXL?: int
    ): this;
    /**
     * Sets a new value for property {@link #getVisibleL visibleL}.
     *
     * Defines if this control is visible on large screens.
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
     * Defines if this control is visible on medium screens.
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
     * @deprecated (since 1.17.1) - Use the `visibleL` property instead.
     *
     * Sets a new value for property {@link #getVisibleOnLarge visibleOnLarge}.
     *
     * Deprecated. Defines if this control is visible on large screens.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setVisibleOnLarge(
      /**
       * New value for property `visibleOnLarge`
       */
      bVisibleOnLarge?: boolean
    ): this;
    /**
     * @deprecated (since 1.17.1) - Use the `visibleM` property instead.
     *
     * Sets a new value for property {@link #getVisibleOnMedium visibleOnMedium}.
     *
     * Deprecated. Defines if this control is visible on medium screens.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setVisibleOnMedium(
      /**
       * New value for property `visibleOnMedium`
       */
      bVisibleOnMedium?: boolean
    ): this;
    /**
     * @deprecated (since 1.17.1) - Use the `visibleS` property instead.
     *
     * Sets a new value for property {@link #getVisibleOnSmall visibleOnSmall}.
     *
     * Deprecated. Defines if this control is visible on small screens.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setVisibleOnSmall(
      /**
       * New value for property `visibleOnSmall`
       */
      bVisibleOnSmall?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getVisibleS visibleS}.
     *
     * Defines if this control is visible on small screens.
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
     * Sets a new value for property {@link #getVisibleXL visibleXL}.
     *
     * Defines if this control is visible on extra Large screens.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setVisibleXL(
      /**
       * New value for property `visibleXL`
       */
      bVisibleXL?: boolean
    ): this;
  }

  export interface $GridDataSettings extends $LayoutDataSettings {
    /**
     * A string type that represents the span values of the `Grid` for large, medium and small screens.
     *
     * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that
     * the container has to take, for example: `L2 M4 S6`, `M12`, `s10` or `l4 m4`.
     *
     * **Note:** The parameters must be provided in the order .
     */
    span?: GridSpan | PropertyBindingInfo;

    /**
     * Optional. Defines a span value for extra large screens. This value overwrites the value for extra large
     * screens defined in the `span` property.
     */
    spanXL?: int | PropertyBindingInfo;

    /**
     * Optional. Defines a span value for large screens. This value overwrites the value for large screens defined
     * in the `span` property.
     */
    spanL?: int | PropertyBindingInfo;

    /**
     * Optional. Defines a span value for medium size screens. This value overwrites the value for medium screens
     * defined in the `span` property.
     */
    spanM?: int | PropertyBindingInfo;

    /**
     * Optional. Defines a span value for small screens. This value overwrites the value for small screens defined
     * in the `span` property.
     */
    spanS?: int | PropertyBindingInfo;

    /**
     * A string type that represents the indent values of the `Grid` for large, medium and small screens.
     *
     * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 11 that
     * the container has to take, for example, `L2 M4 S6`, `M11`, `s10` or `l4 m4`.
     *
     * **Note:** The parameters must be provided in the order .
     */
    indent?: GridIndent | PropertyBindingInfo;

    /**
     * Optional. Defines an indent value for extra large screens. This value overwrites the value for extra
     * large screens defined in the `indent` property.
     */
    indentXL?: int | PropertyBindingInfo;

    /**
     * Optional. Defines an indent value for large screens. This value overwrites the value for large screens
     * defined in the `indent` property.
     */
    indentL?: int | PropertyBindingInfo;

    /**
     * Optional. Defines an indent value for medium size screens. This value overwrites the value for medium
     * screens defined in the `indent` property.
     */
    indentM?: int | PropertyBindingInfo;

    /**
     * Optional. Defines an indent value for small screens. This value overwrites the value for small screens
     * defined in the `indent` property.
     */
    indentS?: int | PropertyBindingInfo;

    /**
     * Defines if this control is visible on extra Large screens.
     */
    visibleXL?: boolean | PropertyBindingInfo;

    /**
     * Defines if this control is visible on large screens.
     */
    visibleL?: boolean | PropertyBindingInfo;

    /**
     * Defines if this control is visible on medium screens.
     */
    visibleM?: boolean | PropertyBindingInfo;

    /**
     * Defines if this control is visible on small screens.
     */
    visibleS?: boolean | PropertyBindingInfo;

    /**
     * Optional. Moves a cell backwards with as many columns as specified.
     */
    moveBackwards?: GridIndent | PropertyBindingInfo;

    /**
     * Optional. Moves a cell forwards with as many columns as specified.
     */
    moveForward?: GridIndent | PropertyBindingInfo;

    /**
     * Optional. If set to `true`, the control causes a line break on all-size screens within the `Grid` and
     * becomes the first within the next line.
     */
    linebreak?: boolean | PropertyBindingInfo;

    /**
     * Optional. If set to `true`, the control causes a line break on extra large screens within the `Grid`
     * and becomes the first within the next line.
     */
    linebreakXL?: boolean | PropertyBindingInfo;

    /**
     * Optional. If set to `true`, the control causes a line break on large screens within the `Grid` and becomes
     * the first within the next line.
     */
    linebreakL?: boolean | PropertyBindingInfo;

    /**
     * Optional. If set to `true`, the control causes a line break on medium screens within the `Grid` and becomes
     * the first within the next line.
     */
    linebreakM?: boolean | PropertyBindingInfo;

    /**
     * Optional. If set to `true`, the control causes a line break on small screens within the `Grid` and becomes
     * the first within the next line.
     */
    linebreakS?: boolean | PropertyBindingInfo;

    /**
     * @deprecated (since 1.17.1) - Use the `spanL` property instead.
     *
     * Deprecated. Defines a span value for large screens. This value overwrites the value for large screens
     * defined in the `span` property.
     */
    spanLarge?: int | PropertyBindingInfo;

    /**
     * @deprecated (since 1.17.1) - Use the `spanM` property instead.
     *
     * Deprecated. Defines a span value for medium screens. This value overwrites the value for medium screens
     * defined in the `span` property.
     */
    spanMedium?: int | PropertyBindingInfo;

    /**
     * @deprecated (since 1.17.1) - Use the `spanS` property instead.
     *
     * Deprecated. Defines a span value for small screens. This value overwrites the value for small screens
     * defined in the `span` property.
     */
    spanSmall?: int | PropertyBindingInfo;

    /**
     * @deprecated (since 1.17.1) - Use the `indentL` property instead.
     *
     * Deprecated. Defines an indent value for large screens. This value overwrites the value for large screens
     * defined in the `indent` property.
     */
    indentLarge?: int | PropertyBindingInfo;

    /**
     * @deprecated (since 1.17.1) - Use the `indentM` property instead.
     *
     * Deprecated. Defines an indent value for medium screens. This value overwrites the value for medium screens
     * defined in the `indent` property.
     */
    indentMedium?: int | PropertyBindingInfo;

    /**
     * @deprecated (since 1.17.1) - Use `indentS` property instead.
     *
     * Deprecated. Defines an indent value for small screens. This value overwrites the value for small screens
     * defined in the `indent` property.
     */
    indentSmall?: int | PropertyBindingInfo;

    /**
     * @deprecated (since 1.17.1) - Use the `visibleL` property instead.
     *
     * Deprecated. Defines if this control is visible on large screens.
     */
    visibleOnLarge?: boolean | PropertyBindingInfo;

    /**
     * @deprecated (since 1.17.1) - Use the `visibleM` property instead.
     *
     * Deprecated. Defines if this control is visible on medium screens.
     */
    visibleOnMedium?: boolean | PropertyBindingInfo;

    /**
     * @deprecated (since 1.17.1) - Use the `visibleS` property instead.
     *
     * Deprecated. Defines if this control is visible on small screens.
     */
    visibleOnSmall?: boolean | PropertyBindingInfo;
  }
}

declare module "sap/ui/layout/HorizontalLayout" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.16.0
   *
   * A layout that provides support for horizontal alignment of controls
   */
  export default class HorizontalLayout extends Control {
    /**
     * Constructor for a new HorizontalLayout.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $HorizontalLayoutSettings
    );
    /**
     * Constructor for a new HorizontalLayout.
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
      mSettings?: $HorizontalLayoutSettings
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
     * Creates a new subclass of class sap.ui.layout.HorizontalLayout with name `sClassName` and enriches it
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
      oClassInfo?: sap.ClassInfo<T, HorizontalLayout>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * See:
     * 	sap.ui.core.Control#getAccessibilityInfo
     */
    getAccessibilityInfo(): object;
    /**
     * Gets current value of property {@link #getAllowWrapping allowWrapping}.
     *
     * Specifies whether the content inside the Layout shall be line-wrapped in the case that there is less
     * horizontal space available than required.
     *
     * Default value is `false`.
     */
    getAllowWrapping(): boolean;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * The controls inside this layout
     */
    getContent(): Control[];
    /**
     * Returns a metadata object for class sap.ui.layout.HorizontalLayout.
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
     * Sets a new value for property {@link #getAllowWrapping allowWrapping}.
     *
     * Specifies whether the content inside the Layout shall be line-wrapped in the case that there is less
     * horizontal space available than required.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setAllowWrapping(
      /**
       * New value for property `allowWrapping`
       */
      bAllowWrapping?: boolean
    ): this;
  }

  export interface $HorizontalLayoutSettings extends $ControlSettings {
    /**
     * Specifies whether the content inside the Layout shall be line-wrapped in the case that there is less
     * horizontal space available than required.
     */
    allowWrapping?: boolean | PropertyBindingInfo;

    /**
     * The controls inside this layout
     */
    content?: Control[] | Control | AggregationBindingInfo;
  }
}

declare module "sap/ui/layout/PaneContainer" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { Orientation } from "sap/ui/core/library";

  import {
    default as ManagedObject,
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import LayoutData from "sap/ui/core/LayoutData";

  /**
   * @SINCE 1.38
   *
   * PaneContainer is an abstraction of Splitter.
   *
   * Could be used as an aggregation of ResponsiveSplitter or nested in other PaneContainers.
   */
  export default class PaneContainer extends UI5Element {
    /**
     * Constructor for a new PaneContainer.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $PaneContainerSettings
    );
    /**
     * Constructor for a new PaneContainer.
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
      mSettings?: $PaneContainerSettings
    );

    /**
     * Adds some pane to the aggregation {@link #getPanes panes}.
     */
    addPane(
      /**
       * The pane to add; if empty, nothing is inserted
       */
      oPane: UI5Element
    ): this;
    /**
     * Destroys all the panes in the aggregation {@link #getPanes panes}.
     */
    destroyPanes(): this;
    /**
     * Creates a new subclass of class sap.ui.layout.PaneContainer with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, PaneContainer>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.layout.PaneContainer.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getOrientation orientation}.
     *
     * The orientation of the Splitter
     *
     * Default value is `Horizontal`.
     */
    getOrientation(): Orientation | keyof typeof Orientation;
    /**
     * Gets content of aggregation {@link #getPanes panes}.
     *
     * The panes to be split. The control will show n-1 splitter bars between n controls in this aggregation.
     */
    getPanes(): UI5Element[];
    /**
     * Checks for the provided `sap.ui.core.Element` in the aggregation {@link #getPanes panes}. and returns
     * its index if found or -1 otherwise.
     */
    indexOfPane(
      /**
       * The pane whose index is looked for
       */
      oPane: UI5Element
    ): int;
    /**
     * Pane insertion
     */
    insertPane(
      oObject: undefined,

      iIndex: undefined
    ): ManagedObject;
    /**
     * Removes all the controls from the aggregation {@link #getPanes panes}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllPanes(): UI5Element[];
    /**
     * Pane removal
     */
    removePane(oObject: undefined): ManagedObject;
    /**
     * Setter for property layoutData.
     */
    setLayoutData(
      /**
       * The LayoutData object.
       */
      oLayoutData: LayoutData
    ): this;
    /**
     * Setter for property orientation. Default value is sap.ui.core.Orientation.Horizontal
     */
    setOrientation(
      /**
       * The Orientation type.
       */
      sOrientation: Orientation | keyof typeof Orientation
    ): this;
  }

  export interface $PaneContainerSettings extends $ElementSettings {
    /**
     * The orientation of the Splitter
     */
    orientation?:
      | (Orientation | keyof typeof Orientation)
      | PropertyBindingInfo;

    /**
     * The panes to be split. The control will show n-1 splitter bars between n controls in this aggregation.
     */
    panes?: UI5Element[] | UI5Element | AggregationBindingInfo;
  }
}

declare module "sap/ui/layout/ResponsiveFlowLayout" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.16.0
   *
   * This is a layout where several controls can be added. These controls are blown up to fit in an entire
   * row. If the window resizes, the controls are moved between the rows and resized again.
   */
  export default class ResponsiveFlowLayout extends Control {
    /**
     * Constructor for a new ResponsiveFlowLayout.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ResponsiveFlowLayoutSettings
    );
    /**
     * Constructor for a new ResponsiveFlowLayout.
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
      mSettings?: $ResponsiveFlowLayoutSettings
    );

    /**
     * @SINCE 1.48.7
     *
     * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    addAriaLabelledBy(
      /**
       * The ariaLabelledBy to add; if empty, nothing is inserted
       */
      vAriaLabelledBy: ID | Control
    ): this;
    /**
     * Adds content. This function needs to be overridden to prevent any rendering while some content is still
     * being added.
     */
    addContent(
      /**
       * The content that should be added to the layout
       */
      oContent: Control
    ): void;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     */
    destroyContent(): this;
    /**
     * Creates a new subclass of class sap.ui.layout.ResponsiveFlowLayout with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, ResponsiveFlowLayout>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @SINCE 1.48.7
     *
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
     * ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Added content that should be positioned. Every content item should have a ResponsiveFlowLayoutData attached,
     * or otherwise, the default values are used.
     */
    getContent(): Control[];
    /**
     * Returns a metadata object for class sap.ui.layout.ResponsiveFlowLayout.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getResponsive responsive}.
     *
     * If set to false, all added controls will keep their width, or otherwise, the controls will be stretched
     * to the possible width of a row.
     *
     * Default value is `true`.
     */
    getResponsive(): boolean;
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
     * Inserts content. This function needs to be overridden to prevent any rendering while some content is
     * still being added.
     */
    insertContent(
      /**
       * The content that should be inserted to the layout
       */
      oContent: Control,
      /**
       * The index where the content should be inserted into
       */
      iIndex: int
    ): void;
    /**
     * @SINCE 1.48.7
     *
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * Removes all the controls from the aggregation {@link #getContent content}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllContent(): Control[];
    /**
     * @SINCE 1.48.7
     *
     * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAriaLabelledBy(
      /**
       * The ariaLabelledBy to be removed or its index or ID
       */
      vAriaLabelledBy: int | ID | Control
    ): ID;
    /**
     * Removes content. This function needs to be overridden to prevent any rendering while some content is
     * still being added.
     */
    removeContent(
      /**
       * The content that should be removed from the layout
       */
      oContent: int | string | Control
    ): void;
    /**
     * Sets a new value for property {@link #getResponsive responsive}.
     *
     * If set to false, all added controls will keep their width, or otherwise, the controls will be stretched
     * to the possible width of a row.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setResponsive(
      /**
       * New value for property `responsive`
       */
      bResponsive?: boolean
    ): this;
  }

  export interface $ResponsiveFlowLayoutSettings extends $ControlSettings {
    /**
     * If set to false, all added controls will keep their width, or otherwise, the controls will be stretched
     * to the possible width of a row.
     */
    responsive?: boolean | PropertyBindingInfo;

    /**
     * Added content that should be positioned. Every content item should have a ResponsiveFlowLayoutData attached,
     * or otherwise, the default values are used.
     */
    content?: Control[] | Control | AggregationBindingInfo;

    /**
     * @SINCE 1.48.7
     *
     * Association to controls / IDs that label this control (see WAI-ARIA attribute `aria-labelledby`).
     */
    ariaLabelledBy?: Array<Control | string>;
  }
}

declare module "sap/ui/layout/ResponsiveFlowLayoutData" {
  import {
    default as LayoutData,
    $LayoutDataSettings,
  } from "sap/ui/core/LayoutData";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.16.0
   *
   * This is a LayoutData element that can be added to a control if this control is used within a ResponsiveFlowLayout.
   */
  export default class ResponsiveFlowLayoutData extends LayoutData {
    /**
     * Constructor for a new ResponsiveFlowLayoutData.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ResponsiveFlowLayoutDataSettings
    );
    /**
     * Constructor for a new ResponsiveFlowLayoutData.
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
      mSettings?: $ResponsiveFlowLayoutDataSettings
    );

    /**
     * Creates a new subclass of class sap.ui.layout.ResponsiveFlowLayoutData with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, ResponsiveFlowLayoutData>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getLinebreak linebreak}.
     *
     * If this property is set, the control in which the LayoutData is added, will always cause a line break
     * within the ResponsiveFlowLayout.
     *
     * Default value is `false`.
     */
    getLinebreak(): boolean;
    /**
     * Gets current value of property {@link #getLinebreakable linebreakable}.
     *
     * Shows if an element can be wrapped into a new row. If this value is set to false, the min-width will
     * be set to 0 and the wrapping is up to the previous element.
     *
     * Default value is `true`.
     */
    getLinebreakable(): boolean;
    /**
     * Gets current value of property {@link #getMargin margin}.
     *
     * Prevents any margin of the element if set to false.
     *
     * Default value is `true`.
     */
    getMargin(): boolean;
    /**
     * Returns a metadata object for class sap.ui.layout.ResponsiveFlowLayoutData.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getMinWidth minWidth}.
     *
     * Defines the minimal size in px of a ResponsiveFlowLayout element. The element will be shrunk down to
     * this value.
     *
     * Default value is `100`.
     */
    getMinWidth(): int;
    /**
     * Gets current value of property {@link #getWeight weight}.
     *
     * Defines the weight of the element, that influences the resulting width. If there are several elements
     * within a row of the ResponsiveFlowLayout, each element could have another weight. The bigger the weight
     * of a single element, the wider it will be stretched, i.e. a bigger weight results in a larger width.
     *
     * Default value is `1`.
     */
    getWeight(): int;
    /**
     * Sets a new value for property {@link #getLinebreak linebreak}.
     *
     * If this property is set, the control in which the LayoutData is added, will always cause a line break
     * within the ResponsiveFlowLayout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setLinebreak(
      /**
       * New value for property `linebreak`
       */
      bLinebreak?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getLinebreakable linebreakable}.
     *
     * Shows if an element can be wrapped into a new row. If this value is set to false, the min-width will
     * be set to 0 and the wrapping is up to the previous element.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setLinebreakable(
      /**
       * New value for property `linebreakable`
       */
      bLinebreakable?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getMargin margin}.
     *
     * Prevents any margin of the element if set to false.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setMargin(
      /**
       * New value for property `margin`
       */
      bMargin?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getMinWidth minWidth}.
     *
     * Defines the minimal size in px of a ResponsiveFlowLayout element. The element will be shrunk down to
     * this value.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `100`.
     */
    setMinWidth(
      /**
       * New value for property `minWidth`
       */
      iMinWidth?: int
    ): this;
    /**
     * Sets a new value for property {@link #getWeight weight}.
     *
     * Defines the weight of the element, that influences the resulting width. If there are several elements
     * within a row of the ResponsiveFlowLayout, each element could have another weight. The bigger the weight
     * of a single element, the wider it will be stretched, i.e. a bigger weight results in a larger width.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1`.
     */
    setWeight(
      /**
       * New value for property `weight`
       */
      iWeight?: int
    ): this;
  }

  export interface $ResponsiveFlowLayoutDataSettings
    extends $LayoutDataSettings {
    /**
     * Defines the minimal size in px of a ResponsiveFlowLayout element. The element will be shrunk down to
     * this value.
     */
    minWidth?: int | PropertyBindingInfo;

    /**
     * Defines the weight of the element, that influences the resulting width. If there are several elements
     * within a row of the ResponsiveFlowLayout, each element could have another weight. The bigger the weight
     * of a single element, the wider it will be stretched, i.e. a bigger weight results in a larger width.
     */
    weight?: int | PropertyBindingInfo;

    /**
     * If this property is set, the control in which the LayoutData is added, will always cause a line break
     * within the ResponsiveFlowLayout.
     */
    linebreak?: boolean | PropertyBindingInfo;

    /**
     * Prevents any margin of the element if set to false.
     */
    margin?: boolean | PropertyBindingInfo;

    /**
     * Shows if an element can be wrapped into a new row. If this value is set to false, the min-width will
     * be set to 0 and the wrapping is up to the previous element.
     */
    linebreakable?: boolean | PropertyBindingInfo;
  }
}

declare module "sap/ui/layout/ResponsiveSplitter" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID, CSSSize } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import PaneContainer from "sap/ui/layout/PaneContainer";

  import SplitPane from "sap/ui/layout/SplitPane";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.38
   *
   * A responsive splitter which divides the application into several areas. Overview: The responsive splitter
   * layout structures complex applications into defined areas. These areas may be resizable and are either
   * distributed across one or multiple screen areas, some of which may also be off-canvas.
   *
   * The control is intended for developing administrative tools and applications. Structure: The responsive
   * splitter holds the following hierarchy of containers and controls:
   * 	 - {@link sap.ui.layout.PaneContainer Pane Container} - holds one or more Split Panes and determines
   * 			the pane orientation. The pane which is stored in `rootPaneContainer` holds all other pane containers
   * 			and split panes.
   * 	 - {@link sap.ui.layout.SplitPane Split Pane} - independent containers that may interact with one another.
   * 			Each pane can hold only one control.  Usage: When to use:
   * 	 - The application has to display several areas side by side that must be resizable.
   * 	 - The application must work on a range of different devices in a responsive manner.  Responsive
   * 			Behavior:
   * 	 - As soon as views are in the off-canvas mode, the pagination bar at the bottom of the application
   * 			allows the user to switch between them.
   * 	 - On touch-enabled devices the bars of the splitter can be moved by touching the grip.
   * 	 - Double-clicking on a splitter will collapse or expand it back to its original position.
   *
   * **Note:** We don't recommend dynamically inserting/removing panes into/from the PaneContainer since this
   * might lead to inconsistent layout. If it is necessary, you need to ensure the sum of all sizes of the
   * SplitPanes doesn't exceed the width of the PaneContainer.
   */
  export default class ResponsiveSplitter extends Control {
    /**
     * Constructor for a new ResponsiveSplitter.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/responsive-splitter/ Responsive Splitter}
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ResponsiveSplitterSettings
    );
    /**
     * Constructor for a new ResponsiveSplitter.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/responsive-splitter/ Responsive Splitter}
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ResponsiveSplitterSettings
    );

    /**
     * Destroys the rootPaneContainer in the aggregation {@link #getRootPaneContainer rootPaneContainer}.
     */
    destroyRootPaneContainer(): this;
    /**
     * Creates a new subclass of class sap.ui.layout.ResponsiveSplitter with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, ResponsiveSplitter>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * ID of the element which is the current target of the association {@link #getDefaultPane defaultPane},
     * or `null`.
     */
    getDefaultPane(): ID;
    /**
     * Gets current value of property {@link #getHeight height}.
     *
     * The height of the control
     *
     * Default value is `'100%'`.
     */
    getHeight(): CSSSize;
    /**
     * Returns a metadata object for class sap.ui.layout.ResponsiveSplitter.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets content of aggregation {@link #getRootPaneContainer rootPaneContainer}.
     *
     * The root PaneContainer of the ResponsiveSplitter
     */
    getRootPaneContainer(): PaneContainer;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * The width of the control
     *
     * Default value is `'100%'`.
     */
    getWidth(): CSSSize;
    /**
     * Sets the associated {@link #getDefaultPane defaultPane}.
     */
    setDefaultPane(
      /**
       * ID of an element which becomes the new target of this defaultPane association; alternatively, an element
       * instance may be given
       */
      oDefaultPane: ID | SplitPane
    ): this;
    /**
     * Sets a new value for property {@link #getHeight height}.
     *
     * The height of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `'100%'`.
     */
    setHeight(
      /**
       * New value for property `height`
       */
      sHeight?: CSSSize
    ): this;
    /**
     * Sets the aggregated {@link #getRootPaneContainer rootPaneContainer}.
     */
    setRootPaneContainer(
      /**
       * The rootPaneContainer to set
       */
      oRootPaneContainer: PaneContainer
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * The width of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `'100%'`.
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth?: CSSSize
    ): this;
  }

  export interface $ResponsiveSplitterSettings extends $ControlSettings {
    /**
     * The width of the control
     */
    width?: CSSSize | PropertyBindingInfo;

    /**
     * The height of the control
     */
    height?: CSSSize | PropertyBindingInfo;

    /**
     * The root PaneContainer of the ResponsiveSplitter
     */
    rootPaneContainer?: PaneContainer;

    /**
     * Defines which pane is displayed initially. If there is no defaultPane specified, the first pane is considered
     * as default pane.
     */
    defaultPane?: SplitPane | string;
  }
}

declare module "sap/ui/layout/SplitPane" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import Control from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.38
   *
   * SplitPane is a container of a single control in a responsive splitter. Could be used as an aggregation
   * of a {@link sap.ui.layout.PaneContainer PaneContainer}.
   *
   * The behavior of the Split Panes is handled by the following properties:
   * 	 - `requiredParentWidth` - determines the minimum width of the parent container (in pixels). When it
   * 			is reached, the pane will be hidden from the screen.
   * 	 - `demandPane` - determines if the pane is reachable via the pagination bar after it has been hidden
   * 			from the screen.
   */
  export default class SplitPane extends UI5Element {
    /**
     * Constructor for a new SplitPane.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SplitPaneSettings
    );
    /**
     * Constructor for a new SplitPane.
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
      mSettings?: $SplitPaneSettings
    );

    /**
     * Destroys the content in the aggregation {@link #getContent content}.
     */
    destroyContent(): this;
    /**
     * Creates a new subclass of class sap.ui.layout.SplitPane with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, SplitPane>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Content of the SplitPane
     */
    getContent(): Control;
    /**
     * Gets current value of property {@link #getDemandPane demandPane}.
     *
     * Determines whether the pane will be moved to the pagination
     *
     * Default value is `true`.
     */
    getDemandPane(): boolean;
    /**
     * Returns a metadata object for class sap.ui.layout.SplitPane.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getRequiredParentWidth requiredParentWidth}.
     *
     * Determines the minimum width of the ResponsiveSplitter(in pixels). When it is reached the pane will be
     * hidden from the screen.
     *
     * When you are calculating the required parent width to fit your panes, you should also include the width
     * of all split bars between these panes.
     *
     * Default value is `800`.
     */
    getRequiredParentWidth(): int;
    /**
     * Sets the aggregated {@link #getContent content}.
     */
    setContent(
      /**
       * The content to set
       */
      oContent: Control
    ): this;
    /**
     * Sets a new value for property {@link #getDemandPane demandPane}.
     *
     * Determines whether the pane will be moved to the pagination
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setDemandPane(
      /**
       * New value for property `demandPane`
       */
      bDemandPane?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getRequiredParentWidth requiredParentWidth}.
     *
     * Determines the minimum width of the ResponsiveSplitter(in pixels). When it is reached the pane will be
     * hidden from the screen.
     *
     * When you are calculating the required parent width to fit your panes, you should also include the width
     * of all split bars between these panes.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `800`.
     */
    setRequiredParentWidth(
      /**
       * New value for property `requiredParentWidth`
       */
      iRequiredParentWidth?: int
    ): this;
  }

  export interface $SplitPaneSettings extends $ElementSettings {
    /**
     * Determines whether the pane will be moved to the pagination
     */
    demandPane?: boolean | PropertyBindingInfo;

    /**
     * Determines the minimum width of the ResponsiveSplitter(in pixels). When it is reached the pane will be
     * hidden from the screen.
     *
     * When you are calculating the required parent width to fit your panes, you should also include the width
     * of all split bars between these panes.
     */
    requiredParentWidth?: int | PropertyBindingInfo;

    /**
     * Content of the SplitPane
     */
    content?: Control;
  }
}

declare module "sap/ui/layout/Splitter" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { CSSSize, Orientation } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.22.0
   *
   * Overview: A layout that contains several content areas. The content that is added to the splitter should
   * contain `layoutData` of type {@link sap.ui.layout.SplitterLayoutData SplitterLayoutData} which defines
   * its size and size constraints. If such `layoutData` is not defined, it will be generated automatically.
   *
   * By adding or changing the `layoutData` to the controls that make up the content areas, the size can be
   * changed programmatically. Additionally the content areas can be made non-resizable individually and a
   * minimal size (in px) can be set.
   *
   * The orientation of the splitter can be set to horizontal (default) or vertical. All content areas of
   * the splitter will be arranged in that way. In order to split vertically and horizontally at the same
   * time, splitters need to be nested.
   *
   * The splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the
   * content areas can be manipulated when the splitter bar is focused and Shift-Left/Down/Right/Up are pressed.
   * When Shift-Home/End are pressed, the content areas are resized to their minimum or maximum size (Note,
   * that resizing one auto-size content area next to another auto-size content area, might lead to the effect
   * that the former does not take its maximum size but only the maximum size before recalculating the auto-sizes).
   *
   * The splitter bars used for resizing the content areas by the user can be set to different widths (or
   * heights in vertical mode) and the splitter will automatically resize the other content areas accordingly.
   * In case the splitter bar is resized after the splitter has been rendered, a manual resize has to be triggered
   * by invoking triggerResize() on the splitter.
   *
   * Responsive Behavior: On touch-enabled devices the bars of the splitter can be moved by touching the grip.
   */
  export default class Splitter extends Control {
    /**
     * Constructor for a new Splitter.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $SplitterSettings
    );
    /**
     * Constructor for a new Splitter.
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
      mSettings?: $SplitterSettings
    );

    /**
     * Adds some contentArea to the aggregation {@link #getContentAreas contentAreas}.
     */
    addContentArea(
      /**
       * The contentArea to add; if empty, nothing is inserted
       */
      oContentArea: Control
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:resize resize} event of this `sap.ui.layout.Splitter`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.layout.Splitter` itself.
     *
     * Event is fired when contents are resized.
     */
    attachResize(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.layout.Splitter` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the contentAreas in the aggregation {@link #getContentAreas contentAreas}.
     */
    destroyContentAreas(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:resize resize} event of this `sap.ui.layout.Splitter`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachResize(
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
     * @deprecated (since 1.21) - This method is declared as protected in order to assess the need for this
     * feature. It is declared as deprecated because the API might change in case the need for this is high
     * enough to make it part of the official Splitter interface
     *
     * Disables the resize handler for this control, this leads to an automatic resize of the contents whenever
     * the control changes its size. The resize handler is enabled in every control instance by default. For
     * performance reasons this behavior can be disabled by calling disableAutoResize()
     */
    disableAutoResize(
      /**
       * Only disable autoResize temporarily (used for live resize), so that the previous status can be restored
       * afterwards
       */
      bTemporarily?: boolean
    ): void;
    /**
     * Disables the resizing of the Splitter contents via keyboard. This changes the Splitter bars to non-focusable
     * elements.
     */
    disableKeyboardSupport(): void;
    /**
     * @deprecated (since 1.21) - This method is declared as protected in order to assess the need for this
     * feature. It is declared as deprecated because the API might change in case the need for this is high
     * enough to make it part of the official Splitter interface
     *
     * Disables recalculation and resize of the splitter contents while dragging the splitter bar. This means
     * that the contents are resized only once after moving the splitter bar.
     */
    disableLiveResize(): void;
    /**
     * @deprecated (since 1.21) - This method is declared as protected in order to assess the need for this
     * feature. It is declared as deprecated because the API might change in case the need for this is high
     * enough to make it part of the official Splitter interface
     *
     * Enables the resize handler for this control, this leads to an automatic resize of the contents whenever
     * the control changes its size. The resize handler is enabled in every control instance by default. For
     * performance reasons this behavior can be disabled by calling disableAutoResize()
     */
    enableAutoResize(
      /**
       * Only enables autoResize if it was previously disabled temporarily (used for live resize)
       */
      bTemporarily?: boolean
    ): void;
    /**
     * Enables the resizing of the Splitter contents via keyboard. This makes the Splitter bars focusable elements.
     */
    enableKeyboardSupport(): void;
    /**
     * @deprecated (since 1.21) - This method is declared as protected in order to assess the need for this
     * feature. It is declared as deprecated because the API might change in case the need for this is high
     * enough to make it part of the official Splitter interface
     *
     * Enables recalculation and resize of the splitter contents while dragging the splitter bar. This means
     * that the contents are resized several times per second when moving the splitter bar.
     */
    enableLiveResize(): void;
    /**
     * Creates a new subclass of class sap.ui.layout.Splitter with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, Splitter>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:resize resize} to attached listeners.
     */
    fireResize(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The ID of the splitter control. The splitter control can also be accessed by calling getSource() on the
         * event.
         */
        id?: string;
        /**
         * An array of values representing the old (pixel-)sizes of the splitter contents
         */
        oldSizes?: int[];
        /**
         * An array of values representing the new (pixel-)sizes of the splitter contents
         */
        newSizes?: int[];
      }
    ): this;
    /**
     * @deprecated (since 1.21) - This method is declared as protected in order to assess the need for this
     * feature. It is declared as deprecated because the API might change in case the need for this is high
     * enough to make it part of the official Splitter interface
     *
     * Returns the current actual content sizes as pixel value - these values can change with every resize.
     */
    getCalculatedSizes(): Number[];
    /**
     * Gets content of aggregation {@link #getContentAreas contentAreas}.
     *
     * The content areas to be split. The control will show n-1 splitter bars between n controls in this aggregation.
     */
    getContentAreas(): Control[];
    /**
     * Gets current value of property {@link #getHeight height}.
     *
     * The height of the control
     *
     * Default value is `'100%'`.
     */
    getHeight(): CSSSize;
    /**
     * Returns a metadata object for class sap.ui.layout.Splitter.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getOrientation orientation}.
     *
     * Whether to split the contents horizontally (default) or vertically.
     *
     * Default value is `Horizontal`.
     */
    getOrientation(): Orientation | keyof typeof Orientation;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * The width of the control
     *
     * Default value is `'100%'`.
     */
    getWidth(): CSSSize;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContentAreas contentAreas}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfContentArea(
      /**
       * The contentArea whose index is looked for
       */
      oContentArea: Control
    ): int;
    /**
     * Inserts a contentArea into the aggregation {@link #getContentAreas contentAreas}.
     */
    insertContentArea(
      /**
       * The contentArea to insert; if empty, nothing is inserted
       */
      oContentArea: Control,
      /**
       * The `0`-based index the contentArea should be inserted at; for a negative value of `iIndex`, the contentArea
       * is inserted at position 0; for a value greater than the current size of the aggregation, the contentArea
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getContentAreas contentAreas}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllContentAreas(): Control[];
    /**
     * Removes a contentArea from the aggregation {@link #getContentAreas contentAreas}.
     */
    removeContentArea(
      /**
       * The contentArea to remove or its index or id
       */
      vContentArea: int | string | Control
    ): Control;
    /**
     * Resets the size (width or height) of each of the content areas.
     */
    resetContentAreasSizes(): void;
    /**
     * Sets a new value for property {@link #getHeight height}.
     *
     * The height of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `'100%'`.
     */
    setHeight(
      /**
       * New value for property `height`
       */
      sHeight?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getOrientation orientation}.
     *
     * Whether to split the contents horizontally (default) or vertically.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Horizontal`.
     */
    setOrientation(
      /**
       * New value for property `orientation`
       */
      sOrientation?: Orientation | keyof typeof Orientation
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * The width of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `'100%'`.
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth?: CSSSize
    ): this;
    /**
     * This method triggers a resize on the Splitter - meaning it forces the Splitter to recalculate all sizes.
     * This method should only be used in rare cases, for example when the CSS that defines the sizes of the
     * splitter bars changes without triggering a rerendering of the splitter.
     */
    triggerResize(
      /**
       * Do not delay the resize, trigger it right now.
       */
      forceDirectly?: boolean
    ): void;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:resize resize} event of this `sap.ui.layout.Splitter`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.layout.Splitter` itself.
     *
     * Event is fired when contents are resized.
     */
    attachResize(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.layout.Splitter` itself
       */
      oListener?: object
    ): this;
  }

  export interface $SplitterSettings extends $ControlSettings {
    /**
     * Whether to split the contents horizontally (default) or vertically.
     */
    orientation?:
      | (Orientation | keyof typeof Orientation)
      | PropertyBindingInfo;

    /**
     * The width of the control
     */
    width?: CSSSize | PropertyBindingInfo;

    /**
     * The height of the control
     */
    height?: CSSSize | PropertyBindingInfo;

    /**
     * The content areas to be split. The control will show n-1 splitter bars between n controls in this aggregation.
     */
    contentAreas?: Control[] | Control | AggregationBindingInfo;

    /**
     * Event is fired when contents are resized.
     */
    resize?: Function;
  }
}

declare module "sap/ui/layout/SplitterLayoutData" {
  import {
    default as LayoutData,
    $LayoutDataSettings,
  } from "sap/ui/core/LayoutData";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { CSSSize } from "sap/ui/core/library";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.22.0
   * @EXPERIMENTAL (since 1.22.0)
   *
   * Holds layout data for the splitter contents. Allowed size values are numeric values ending in "px" and
   * "%" and the special case "auto". (The CSS value "auto" is used internally to recalculate the size of
   * the content dynamically and is not directly set as style property.)
   */
  export default class SplitterLayoutData extends LayoutData {
    /**
     * Constructor for a new SplitterLayoutData.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $SplitterLayoutDataSettings
    );
    /**
     * Constructor for a new SplitterLayoutData.
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
      mSettings?: $SplitterLayoutDataSettings
    );

    /**
     * Creates a new subclass of class sap.ui.layout.SplitterLayoutData with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, SplitterLayoutData>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.layout.SplitterLayoutData.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getMinSize minSize}.
     *
     * Sets the minimum size of the splitter content in px.
     *
     * Default value is `0`.
     */
    getMinSize(): int;
    /**
     * Gets current value of property {@link #getResizable resizable}.
     *
     * Determines whether the control in the splitter can be resized or not.
     *
     * Default value is `true`.
     */
    getResizable(): boolean;
    /**
     * Gets current value of property {@link #getSize size}.
     *
     * Sets the size of the splitter content.
     *
     * Default value is `'auto'`.
     */
    getSize(): CSSSize;
    /**
     * Sets a new value for property {@link #getMinSize minSize}.
     *
     * Sets the minimum size of the splitter content in px.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     */
    setMinSize(
      /**
       * New value for property `minSize`
       */
      iMinSize?: int
    ): this;
    /**
     * Sets a new value for property {@link #getResizable resizable}.
     *
     * Determines whether the control in the splitter can be resized or not.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setResizable(
      /**
       * New value for property `resizable`
       */
      bResizable?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSize size}.
     *
     * Sets the size of the splitter content.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `'auto'`.
     */
    setSize(
      /**
       * New value for property `size`
       */
      sSize?: CSSSize
    ): this;
  }

  export interface $SplitterLayoutDataSettings extends $LayoutDataSettings {
    /**
     * Determines whether the control in the splitter can be resized or not.
     */
    resizable?: boolean | PropertyBindingInfo;

    /**
     * Sets the size of the splitter content.
     */
    size?: CSSSize | PropertyBindingInfo;

    /**
     * Sets the minimum size of the splitter content in px.
     */
    minSize?: int | PropertyBindingInfo;
  }
}

declare module "sap/ui/layout/VerticalLayout" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { CSSSize } from "sap/ui/core/library";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.16.0
   *
   * In this layout the content controls are rendered one below the other.
   */
  export default class VerticalLayout extends Control {
    /**
     * Constructor for a new VerticalLayout.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $VerticalLayoutSettings
    );
    /**
     * Constructor for a new VerticalLayout.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Id for the new control, generated automatically if no id is given
       */
      sId?: string,
      /**
       * initial settings for the new control
       */
      mSettings?: $VerticalLayoutSettings
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
     * Creates a new subclass of class sap.ui.layout.VerticalLayout with name `sClassName` and enriches it with
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
      oClassInfo?: sap.ClassInfo<T, VerticalLayout>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * See:
     * 	sap.ui.core.Control#getAccessibilityInfo
     */
    getAccessibilityInfo(): object;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Content controls within the layout.
     */
    getContent(): Control[];
    /**
     * Gets current value of property {@link #getEnabled enabled}.
     *
     * If not enabled, all controls inside are not enabled automatically.
     *
     * Default value is `true`.
     */
    getEnabled(): boolean;
    /**
     * Returns a metadata object for class sap.ui.layout.VerticalLayout.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Width of the `VerticalLayout`. If no width is set, the width of the content is used. If the content of
     * the layout has a larger width than the layout, it is cut off. There is no scrolling inside the layout.
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
     * Sets a new value for property {@link #getEnabled enabled}.
     *
     * If not enabled, all controls inside are not enabled automatically.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setEnabled(
      /**
       * New value for property `enabled`
       */
      bEnabled?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Width of the `VerticalLayout`. If no width is set, the width of the content is used. If the content of
     * the layout has a larger width than the layout, it is cut off. There is no scrolling inside the layout.
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

  export interface $VerticalLayoutSettings extends $ControlSettings {
    /**
     * Width of the `VerticalLayout`. If no width is set, the width of the content is used. If the content of
     * the layout has a larger width than the layout, it is cut off. There is no scrolling inside the layout.
     */
    width?: CSSSize | PropertyBindingInfo;

    /**
     * If not enabled, all controls inside are not enabled automatically.
     */
    enabled?: boolean | PropertyBindingInfo;

    /**
     * Content controls within the layout.
     */
    content?: Control[] | Control | AggregationBindingInfo;
  }
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/ui/layout/BlockLayout": undefined;

    "sap/ui/layout/BlockLayoutCell": undefined;

    "sap/ui/layout/BlockLayoutCellData": undefined;

    "sap/ui/layout/BlockLayoutRow": undefined;

    "sap/ui/layout/cssgrid/CSSGrid": undefined;

    "sap/ui/layout/cssgrid/GridBasicLayout": undefined;

    "sap/ui/layout/cssgrid/GridBoxLayout": undefined;

    "sap/ui/layout/cssgrid/GridItemLayoutData": undefined;

    "sap/ui/layout/cssgrid/GridLayoutBase": undefined;

    "sap/ui/layout/cssgrid/GridLayoutDelegate": undefined;

    "sap/ui/layout/cssgrid/GridResponsiveLayout": undefined;

    "sap/ui/layout/cssgrid/GridSettings": undefined;

    "sap/ui/layout/cssgrid/ResponsiveColumnItemLayoutData": undefined;

    "sap/ui/layout/cssgrid/ResponsiveColumnLayout": undefined;

    "sap/ui/layout/DynamicSideContent": undefined;

    "sap/ui/layout/FixFlex": undefined;

    "sap/ui/layout/form/ColumnContainerData": undefined;

    "sap/ui/layout/form/ColumnElementData": undefined;

    "sap/ui/layout/form/ColumnLayout": undefined;

    "sap/ui/layout/form/Form": undefined;

    "sap/ui/layout/form/FormContainer": undefined;

    "sap/ui/layout/form/FormElement": undefined;

    "sap/ui/layout/form/FormLayout": undefined;

    "sap/ui/layout/form/GridContainerData": undefined;

    "sap/ui/layout/form/GridElementData": undefined;

    "sap/ui/layout/form/GridLayout": undefined;

    "sap/ui/layout/form/ResponsiveGridLayout": undefined;

    "sap/ui/layout/form/ResponsiveLayout": undefined;

    "sap/ui/layout/form/SemanticFormElement": undefined;

    "sap/ui/layout/form/SimpleForm": undefined;

    "sap/ui/layout/Grid": undefined;

    "sap/ui/layout/GridData": undefined;

    "sap/ui/layout/HorizontalLayout": undefined;

    "sap/ui/layout/library": undefined;

    "sap/ui/layout/PaneContainer": undefined;

    "sap/ui/layout/ResponsiveFlowLayout": undefined;

    "sap/ui/layout/ResponsiveFlowLayoutData": undefined;

    "sap/ui/layout/ResponsiveSplitter": undefined;

    "sap/ui/layout/SplitPane": undefined;

    "sap/ui/layout/Splitter": undefined;

    "sap/ui/layout/SplitterLayoutData": undefined;

    "sap/ui/layout/VerticalLayout": undefined;
  }
}
