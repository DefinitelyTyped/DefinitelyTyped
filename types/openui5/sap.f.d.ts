// For Library Version: 1.107.0

declare module "sap/tnt/library" {
  export interface IToolHeader {
    __implements__sap_tnt_IToolHeader: boolean;
  }
}

declare module "sap/f/library" {
  import AvatarColor1 from "sap/m/AvatarColor";

  import AvatarImageFitType1 from "sap/m/AvatarImageFitType";

  import AvatarShape1 from "sap/m/AvatarShape";

  import AvatarSize1 from "sap/m/AvatarSize";

  import AvatarType1 from "sap/m/AvatarType";

  import IllustratedMessageSize1 from "sap/m/IllustratedMessageSize";

  import IllustratedMessageType1 from "sap/m/IllustratedMessageType";

  /**
   * @SINCE 1.69
   * @deprecated (since 1.73) - Use the {@link sap.m.AvatarColor} instead.
   *
   * Possible background color options for the {@link sap.f.Avatar} control.
   *
   * **Notes:**
   * 	 - Keep in mind that the colors are theme-dependent and can differ based on the currently used theme.
   *
   * 	 -  If the `Random` value is assigned, a random color is chosen from the accent options (Accent1 to
   * 			Accent10).
   *
   * This is an alias for {@link sap.m.AvatarColor} and only kept for compatibility reasons.
   */
  export type AvatarColor = AvatarColor1;

  /**
   * @SINCE 1.73
   * @EXPERIMENTAL (since 1.73)
   *
   * Group modes for the {@link sap.f.AvatarGroup} control.
   */
  export enum AvatarGroupType {
    /**
     * The avatars are displayed as partially overlapped on top of each other and the entire group has one click/tap
     * area.
     */
    Group = "Group",
    /**
     * The avatars are displayed side-by-side and each avatar has its own click/tap area.
     */
    Individual = "Individual",
  }
  /**
   * @SINCE 1.46
   * @deprecated (since 1.73) - Use the {@link sap.m.AvatarImageFitType} instead.
   *
   * Types of image size and position that determine how an image fits in the {@link sap.f.Avatar} control
   * area.
   *
   * This is an alias for {@link sap.m.AvatarImageFitType} and only kept for compatibility reasons.
   */
  export type AvatarImageFitType = AvatarImageFitType1;

  /**
   * @SINCE 1.46
   * @deprecated (since 1.73) - Use the {@link sap.m.AvatarShape} instead.
   *
   * Types of shape for the {@link sap.f.Avatar} control.
   *
   * This is an alias for {@link sap.m.AvatarShape} and only kept for compatibility reasons.
   */
  export type AvatarShape = AvatarShape1;

  /**
   * @SINCE 1.46
   * @deprecated (since 1.73) - Use the {@link sap.m.AvatarSize} instead.
   *
   * Predefined sizes for the {@link sap.f.Avatar} control.
   *
   * This is an alias for {@link sap.m.AvatarSize} and only kept for compatibility reasons.
   */
  export type AvatarSize = AvatarSize1;

  /**
   * @SINCE 1.46
   * @deprecated (since 1.73) - Use the {@link sap.m.AvatarType} instead.
   *
   * Types of {@link sap.f.Avatar} based on the displayed content.
   *
   * This is an alias for {@link sap.m.AvatarType} and only kept for compatibility reasons.
   */
  export type AvatarType = AvatarType1;

  /**
   * @SINCE 1.50
   * @deprecated (since 1.54) - Consumers of the {@link sap.f.DynamicPageTitle} control should now use the
   * `areaShrinkRatio` property instead of the `primaryArea` property.
   *
   * Defines the areas within the `sap.f.DynamicPageTitle` control.
   */
  export enum DynamicPageTitleArea {
    /**
     * The area includes the `heading`, `expandedContent` and `snappedContent` aggregations, positioned in the
     * beginning area of the {@link sap.f.DynamicPageTitle}.
     */
    Begin = "Begin",
    /**
     * The area includes the `content` aggregation, positioned in the middle part of the {@link sap.f.DynamicPageTitle}.
     */
    Middle = "Middle",
  }
  /**
   * @SINCE 1.54
   *
   * A string type that represents the shrink ratios of the areas within the `sap.f.DynamicPageTitle`.
   */
  export type DynamicPageTitleShrinkRatio = string;

  /**
   * @SINCE 1.62
   *
   * Interface that should be implemented by all card controls.
   */
  export interface ICard {
    __implements__sap_f_ICard: boolean;
  }

  /**
   * @SINCE 1.65
   *
   * Interface for controls suitable for the `stickySubheaderProvider` association of `{@link sap.f.DynamicPage}`.
   *
   * Controls that implemenet this interface should have the following methods:
   * 	 - `_getStickyContent` - returns the content (control) used in the subheader
   * 	 - `_returnStickyContent` - ensures that the content (control) returned by `_getStickyContent`, is placed
   * 			back in its place in the provider
   * 	 - `_getStickySubHeaderSticked` - returns boolean value that shows where the sticky content is placed
   * 			(in its provider or in the `DynamicPage`)
   * 	 - `_setStickySubHeaderSticked` - accepts a boolean argument to notify the provider where its sticky
   * 			content is placed
   */
  export interface IDynamicPageStickyContent {
    __implements__sap_f_IDynamicPageStickyContent: boolean;
  }

  /**
   * @SINCE 1.88
   * @deprecated (since 1.98) - Use the {@link sap.m.IllustratedMessageSize} instead.
   *
   * Available `Illustration` sizes for the {@link sap.f.IllustratedMessage} control.
   *
   * This is an alias for {@link sap.m.IllustratedMessageSize} and only kept for compatibility reasons.
   */
  export type IllustratedMessageSize = IllustratedMessageSize1;

  /**
   * @SINCE 1.88
   * @deprecated (since 1.98) - Use the {@link sap.m.IllustratedMessageType} instead.
   *
   * Available `Illustration` types for the {@link sap.f.IllustratedMessage} control.
   *
   * This is an alias for {@link sap.m.IllustratedMessageType} and only kept for compatibility reasons.
   */
  export type IllustratedMessageType = IllustratedMessageType1;

  /**
   * @SINCE 1.63
   * @EXPERIMENTAL (since 1.63)
   *
   * Interface for controls suitable for the `additionalContent` aggregation of `{@link sap.f.ShellBar}`.
   */
  export interface IShellBar {
    __implements__sap_f_IShellBar: boolean;
  }

  /**
   * @SINCE 1.46
   *
   * Layouts, representing the number of columns to be displayed and their relative widths for a {@link sap.f.FlexibleColumnLayout}
   * control.
   *
   * Each layout has a predefined ratio for the three columns, depending on device size. Based on the device
   * and layout, some columns are hidden. For more information, refer to the ratios (in %) for each value,
   * listed below: (dash "-" means non-accessible columns).
   *
   * **Note:** Please note that on a phone device, due to the limited screen size, only one column can be
   * displayed at a time. For all two-column layouts, this column is the `Mid` column, and for all three-column
   * layouts - the `End` column, even though the respective column may be hidden on desktop and tablet for
   * that particular layout. Therefore some of the names (such as `ThreeColumnsMidExpandedEndHidden` for example)
   * are representative of the desktop scenario only.
   *
   * For more information, see {@link topic:3b9f760da5b64adf8db7f95247879086 Types of Layout} in the documentation.
   */
  export enum LayoutType {
    /**
     * Desktop: -/-/100 only the End column is displayed
     *
     * Tablet: -/-/100 only the End column is displayed
     *
     * Phone: -/-/100 only the End column is displayed
     *
     * Use to display a detail-detail page only, when the user should focus entirely on it.
     */
    EndColumnFullScreen = "EndColumnFullScreen",
    /**
     * Desktop: -/100/- only the Mid column is displayed
     *
     * Tablet: -/100/- only the Mid column is displayed
     *
     * Phone: -/100/- only the Mid column is displayed
     *
     * Use to display a detail page only, when the user should focus entirely on it.
     */
    MidColumnFullScreen = "MidColumnFullScreen",
    /**
     * Desktop: 100/-/- only the Begin column is displayed
     *
     * Tablet: 100/-/- only the Begin column is displayed
     *
     * Phone: 100/-/- only the Begin column is displayed
     *
     * Use to start with a master page.
     */
    OneColumn = "OneColumn",
    /**
     * Desktop: 67/33/0 Begin (expanded) and Mid columns are displayed, End is accessible by layout arrows
     *
     * Tablet: 67/33/0 Begin (expanded) and Mid columns are displayed, End is accessible by layout arrows
     *
     * Phone: -/-/100 only the End column is displayed
     *
     * Use to display the master and detail pages when the user should focus on the master. The detail-detail
     * is still loaded and easily accessible with layout arrows.
     */
    ThreeColumnsBeginExpandedEndHidden = "ThreeColumnsBeginExpandedEndHidden",
    /**
     * Desktop: 25/25/50 Begin, Mid and End (expanded) columns are displayed
     *
     * Tablet: 0/33/67 Mid and End (expanded) columns are displayed, Begin is accessible by layout arrows
     *
     * Phone: -/-/100 (only the End column is displayed)
     *
     * Use to display all three pages (master, detail, detail-detail) when the user should focus on the detail-detail.
     */
    ThreeColumnsEndExpanded = "ThreeColumnsEndExpanded",
    /**
     * Desktop: 25/50/25 Begin, Mid (expanded) and End columns are displayed
     *
     * Tablet: 0/67/33 Mid (expanded) and End columns are displayed, Begin is accessible by a layout arrow
     *
     * Phone: -/-/100 only the End column is displayed
     *
     * Use to display all three pages (master, detail, detail-detail) when the user should focus on the detail.
     */
    ThreeColumnsMidExpanded = "ThreeColumnsMidExpanded",
    /**
     * Desktop: 33/67/0 Begin and Mid (expanded) columns are displayed, End is accessible by a layout arrow
     *
     * Tablet: 33/67/0 Begin and Mid (expanded) columns are displayed, End is accessible by a layout arrow
     *
     * Phone: -/-/100 only the End column is displayed
     *
     * Use to display the master and detail pages when the user should focus on the detail. The detail-detail
     * is still loaded and easily accessible with a layout arrow.
     */
    ThreeColumnsMidExpandedEndHidden = "ThreeColumnsMidExpandedEndHidden",
    /**
     * Desktop: 67/33/- Begin (expanded) and Mid columns are displayed
     *
     * Tablet: 67/33/- Begin (expanded) and Mid columns are displayed
     *
     * Phone: -/100/- only the Mid column is displayed
     *
     * Use to display both a master and a detail page when the user should focus on the master page.
     */
    TwoColumnsBeginExpanded = "TwoColumnsBeginExpanded",
    /**
     * Desktop: 33/67/- Begin and Mid (expanded) columns are displayed
     *
     * Tablet: 33/67/- Begin and Mid (expanded) columns are displayed
     *
     * Phone: -/100/- only the Mid column is displayed
     *
     * Use to display both a master and a detail page when the user should focus on the detail page.
     */
    TwoColumnsMidExpanded = "TwoColumnsMidExpanded",
  }
  /**
   * @SINCE 1.85
   *
   * Enumeration for different navigation directions.
   */
  export enum NavigationDirection {
    /**
     * The direction is down.
     */
    Down = "Down",
    /**
     * The direction is left.
     */
    Left = "Left",
    /**
     * The direction is right.
     */
    Right = "Right",
    /**
     * The direction is up.
     */
    Up = "Up",
  }

  export namespace cards {
    /**
     * @SINCE 1.62
     *
     * Marker interface for controls suitable as a header in controls that implement the {@link sap.f.ICard}
     * interface.
     */
    interface IHeader {
      __implements__sap_f_cards_IHeader: boolean;
    }

    /**
     * @SINCE 1.65
     *
     * Different options for the position of the header in controls that implement the {@link sap.f.ICard} interface.
     */
    enum HeaderPosition {
      /**
       * The Header is under the content.
       */
      Bottom = "Bottom",
      /**
       * The Header is over the content.
       */
      Top = "Top",
    }
    /**
     * @SINCE 1.96
     *
     * Different options for the alignment of the side indicators in the numeric header.
     */
    enum NumericHeaderSideIndicatorsAlignment {
      /**
       * Sets the alignment to the beginning (left or right depending on LTR/RTL).
       */
      Begin = "Begin",
      /**
       * Explicitly sets the alignment to the end (left or right depending on LTR/RTL).
       */
      End = "End",
    }
  }

  export namespace dnd {
    /**
     * @SINCE 1.68
     *
     * Interface that should be implemented by grid controls, if they are working with the `sap.f.dnd.GridDropInfo`.
     *
     * It is highly recommended that those grid controls have optimized `removeItem` and `insertItem` methods
     * (if "items" is target drop aggregation). Meaning to override them in a way that they don't trigger invalidation.
     */
    interface IGridDroppable {
      __implements__sap_f_dnd_IGridDroppable: boolean;
    }
  }
}

declare module "sap/f/Avatar" {
  import {
    default as Avatar1,
    $AvatarSettings as $AvatarSettings1,
  } from "sap/m/Avatar";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.46
   * @deprecated (since 1.73) - Use the {@link sap.m.Avatar} instead.
   *
   * An image-like control that has different display options for representing images, initials, and icons.
   *
   * Overview:
   *
   * The `Avatar` control allows the usage of different content, shapes, and sizes depending on the use case.
   *
   * The content types that can be displayed are either images, icons, or initials. The shape can be circular
   * or square. There are several predefined sizes, as well as an option to set a custom size.
   *
   * Usage:
   *
   * Up to two Latin letters can be displayed as initials in an `Avatar`. If there are more than two letters,
   * or if there's a non-Latin character present, a default image placeholder will be created.
   */
  export default class Avatar extends Avatar1 {
    /**
     * Constructor for a new `Avatar`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.m.Avatar#constructor
     * sap.m.Avatar} can be used.
     * See:
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/avatar/ Avatar}
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $AvatarSettings
    );
    /**
     * Constructor for a new `Avatar`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.m.Avatar#constructor
     * sap.m.Avatar} can be used.
     * See:
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/avatar/ Avatar}
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $AvatarSettings
    );

    /**
     * Creates a new subclass of class sap.f.Avatar with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Avatar.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Avatar>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.Avatar.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $AvatarSettings extends $AvatarSettings1 {}
}

declare module "sap/f/AvatarGroup" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import AvatarGroupItem from "sap/f/AvatarGroupItem";

  import Event from "sap/ui/base/Event";

  import { AbsoluteCSSSize } from "sap/ui/core/library";

  import AvatarSize from "sap/m/AvatarSize";

  import { AvatarGroupType } from "sap/f/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.73
   * @EXPERIMENTAL (since 1.73)
   *
   * Displays a group of avatars arranged horizontally. It is useful to visually showcase a group of related
   * avatars, such as, project team members or employees.
   *
   * Overview:
   *
   * The control allows you to display the avatars in different sizes, depending on your use case.
   *
   * The `AvatarGroup` control has two group types:
   * 	 - `Group` type: The avatars are displayed as partially overlapped on top of each other and the entire
   * 			group has one click/tap area.
   * 	 - `Individual` type: The avatars are displayed side-by-side and each avatar has its own click/tap area.
   *
   *
   * Responsive Behavior:
   *
   * When the available space is less than the width required to display all avatars, an overflow visualization
   * appears as a button placed at the end with the same shape and size as the avatars. The visualization
   * displays the number of avatars that have overflowed and are not currently visible.
   *
   * Usage:
   *
   * Use the `AvatarGroup` if:
   * 	 - You want to display a group of avatars.
   * 	 - You want to display several avatars which have something in common.
   *
   * Do not use the `AvatarGroup` if:
   * 	 - You want to display a single avatar.
   * 	 - You want to display a gallery for simple images.
   * 	 - You want to use it for other visual content than avatars.
   */
  export default class AvatarGroup extends Control {
    /**
     * Constructor for a new `AvatarGroup`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $AvatarGroupSettings
    );
    /**
     * Constructor for a new `AvatarGroup`.
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
      mSettings?: $AvatarGroupSettings
    );

    /**
     * Creates a new subclass of class sap.f.AvatarGroup with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, AvatarGroup>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.AvatarGroup.
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
      oItem: AvatarGroupItem
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.f.AvatarGroup`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.AvatarGroup` itself.
     *
     * Fired when the user clicks or taps on the control.
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
       * Context object to call the event handler with. Defaults to this `sap.f.AvatarGroup` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.f.AvatarGroup`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.AvatarGroup` itself.
     *
     * Fired when the user clicks or taps on the control.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.AvatarGroup` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.f.AvatarGroup`.
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
         * The `GroupType` of the control.
         */
        groupType?: string;
        /**
         * Indication whether the overflow button is pressed.
         */
        overflowButtonPressed?: boolean;
        /**
         * The number of currently displayed (visible) avatars.
         */
        avatarsDisplayed?: int;
      }
    ): this;
    /**
     * @SINCE 1.103
     *
     * Gets current value of property {@link #getAvatarCustomDisplaySize avatarCustomDisplaySize}.
     *
     * Specifies a custom display size for each avatar.
     *
     * **Notes:**
     * 	 - Supports only `px` and code>rem values.
     * 	 - It takes effect only if the `avatarDisplaySize` property is set to `Custom`.
     *
     * Default value is `"3rem"`.
     *
     * @returns Value of property `avatarCustomDisplaySize`
     */
    getAvatarCustomDisplaySize(): AbsoluteCSSSize;
    /**
     * @SINCE 1.103
     *
     * Gets current value of property {@link #getAvatarCustomFontSize avatarCustomFontSize}.
     *
     * Specifies a custom font size for each avatar.
     *
     * **Note:** It takes effect only if the `avatarDisplaySize` property is set to `Custom`.
     *
     * Default value is `"1.125rem"`.
     *
     * @returns Value of property `avatarCustomFontSize`
     */
    getAvatarCustomFontSize(): AbsoluteCSSSize;
    /**
     * Gets current value of property {@link #getAvatarDisplaySize avatarDisplaySize}.
     *
     * Defines the display size of each avatar.
     *
     * Default value is `S`.
     *
     * @returns Value of property `avatarDisplaySize`
     */
    getAvatarDisplaySize(): AvatarSize | keyof typeof AvatarSize;
    /**
     * Gets current value of property {@link #getGroupType groupType}.
     *
     * Defines the mode of the `AvatarGroup`.
     *
     * Default value is `Group`.
     *
     * @returns Value of property `groupType`
     */
    getGroupType(): AvatarGroupType | keyof typeof AvatarGroupType;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * The `AvatarGroupItems` contained by the control.
     */
    getItems(): AvatarGroupItem[];
    /**
     * Checks for the provided `sap.f.AvatarGroupItem` in the aggregation {@link #getItems items}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: AvatarGroupItem
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
      oItem: AvatarGroupItem,
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
    removeAllItems(): AvatarGroupItem[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     *
     * @returns The removed item or `null`
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | AvatarGroupItem
    ): AvatarGroupItem | null;
    /**
     * @SINCE 1.103
     *
     * Sets a new value for property {@link #getAvatarCustomDisplaySize avatarCustomDisplaySize}.
     *
     * Specifies a custom display size for each avatar.
     *
     * **Notes:**
     * 	 - Supports only `px` and code>rem values.
     * 	 - It takes effect only if the `avatarDisplaySize` property is set to `Custom`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"3rem"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAvatarCustomDisplaySize(
      /**
       * New value for property `avatarCustomDisplaySize`
       */
      sAvatarCustomDisplaySize?: AbsoluteCSSSize
    ): this;
    /**
     * @SINCE 1.103
     *
     * Sets a new value for property {@link #getAvatarCustomFontSize avatarCustomFontSize}.
     *
     * Specifies a custom font size for each avatar.
     *
     * **Note:** It takes effect only if the `avatarDisplaySize` property is set to `Custom`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"1.125rem"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAvatarCustomFontSize(
      /**
       * New value for property `avatarCustomFontSize`
       */
      sAvatarCustomFontSize?: AbsoluteCSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getAvatarDisplaySize avatarDisplaySize}.
     *
     * Defines the display size of each avatar.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `S`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAvatarDisplaySize(
      /**
       * New value for property `avatarDisplaySize`
       */
      sAvatarDisplaySize?: AvatarSize | keyof typeof AvatarSize
    ): this;
    /**
     * Sets a new value for property {@link #getGroupType groupType}.
     *
     * Defines the mode of the `AvatarGroup`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Group`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setGroupType(
      /**
       * New value for property `groupType`
       */
      sGroupType?: AvatarGroupType | keyof typeof AvatarGroupType
    ): this;
  }

  export interface $AvatarGroupSettings extends $ControlSettings {
    /**
     * Defines the mode of the `AvatarGroup`.
     */
    groupType?:
      | (AvatarGroupType | keyof typeof AvatarGroupType)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the display size of each avatar.
     */
    avatarDisplaySize?:
      | (AvatarSize | keyof typeof AvatarSize)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * @SINCE 1.103
     *
     * Specifies a custom display size for each avatar.
     *
     * **Notes:**
     * 	 - Supports only `px` and code>rem values.
     * 	 - It takes effect only if the `avatarDisplaySize` property is set to `Custom`.
     */
    avatarCustomDisplaySize?:
      | AbsoluteCSSSize
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * @SINCE 1.103
     *
     * Specifies a custom font size for each avatar.
     *
     * **Note:** It takes effect only if the `avatarDisplaySize` property is set to `Custom`.
     */
    avatarCustomFontSize?:
      | AbsoluteCSSSize
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * The `AvatarGroupItems` contained by the control.
     */
    items?:
      | AvatarGroupItem[]
      | AvatarGroupItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Fired when the user clicks or taps on the control.
     */
    press?: (oEvent: Event) => void;
  }
}

declare module "sap/f/AvatarGroupItem" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { URI } from "sap/ui/core/library";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.73
   * @EXPERIMENTAL (since 1.73)
   *
   * Represents a single avatar item displayed in the {@link sap.f.AvatarGroup} control.
   *
   * Overview: The `AvatarGroupItem` control allows you to define additional properties that are applied when
   * rendering each `AvatarGroupItem` instance in the {@link sap.f.AvatarGroup} control.
   */
  export default class AvatarGroupItem extends Control {
    /**
     * Constructor for a new `AvatarGroupItem`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $AvatarGroupItemSettings
    );
    /**
     * Constructor for a new `AvatarGroupItem`.
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
      mSettings?: $AvatarGroupItemSettings
    );

    /**
     * Creates a new subclass of class sap.f.AvatarGroupItem with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, AvatarGroupItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.AvatarGroupItem.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Returns the color of the avatar.
     *
     * @returns The color of the avatar
     */
    getAvatarColor(): string;
    /**
     * Gets current value of property {@link #getFallbackIcon fallbackIcon}.
     *
     * Defines the fallback icon displayed in case of wrong image src and no initials set.
     *
     * **Notes:**
     * 	 - If not set, a default fallback icon is displayed.
     * 	 - Accepted values are only icons from the SAP icon font.
     *
     * @returns Value of property `fallbackIcon`
     */
    getFallbackIcon(): string;
    /**
     * Gets current value of property {@link #getInitials initials}.
     *
     * Defines the displayed initials.
     *
     * @returns Value of property `initials`
     */
    getInitials(): string;
    /**
     * Gets current value of property {@link #getSrc src}.
     *
     * Determines the path to the desired image or icon.
     *
     * @returns Value of property `src`
     */
    getSrc(): URI;
    /**
     * Sets a new value for property {@link #getFallbackIcon fallbackIcon}.
     *
     * Defines the fallback icon displayed in case of wrong image src and no initials set.
     *
     * **Notes:**
     * 	 - If not set, a default fallback icon is displayed.
     * 	 - Accepted values are only icons from the SAP icon font.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFallbackIcon(
      /**
       * New value for property `fallbackIcon`
       */
      sFallbackIcon?: string
    ): this;
    /**
     * Sets a new value for property {@link #getInitials initials}.
     *
     * Defines the displayed initials.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setInitials(
      /**
       * New value for property `initials`
       */
      sInitials?: string
    ): this;
    /**
     * Sets a new value for property {@link #getSrc src}.
     *
     * Determines the path to the desired image or icon.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSrc(
      /**
       * New value for property `src`
       */
      sSrc?: URI
    ): this;
  }

  export interface $AvatarGroupItemSettings extends $ControlSettings {
    /**
     * Determines the path to the desired image or icon.
     */
    src?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the displayed initials.
     */
    initials?: string | PropertyBindingInfo;

    /**
     * Defines the fallback icon displayed in case of wrong image src and no initials set.
     *
     * **Notes:**
     * 	 - If not set, a default fallback icon is displayed.
     * 	 - Accepted values are only icons from the SAP icon font.
     */
    fallbackIcon?: string | PropertyBindingInfo;
  }
}

declare module "sap/f/Card" {
  import { default as CardBase, $CardBaseSettings } from "sap/f/CardBase";

  import Control from "sap/ui/core/Control";

  import { cards } from "sap/f/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.64
   *
   * A control that represents a container with a predefined header and content.
   *
   * Overview: The card is a container for grouping and displaying information.
   *
   * Structure: You can control the width and height of the card, using properties. The `Card` has the following
   * aggregations:
   * 	 - `header` - can be either a {@link sap.f.cards.Header Header} or a {@link sap.f.cards.NumericHeader
   * 			NumericHeader} `content` - can be any {@link sap.ui.core.Control Control}.
   *
   * Guidelines::
   * 	 - A card should represent a task or visualize a specific set of information.
   * 	 - It is recommended to use cards on home page layouts.
   * 	 - The card shouldn't be large with a lot of content.
   *
   * Usage: To show a KPI value or any numeric information, use {@link sap.f.cards.NumericHeader NumericHeader}
   * as a card header. For any other use cases, use the regular {@link sap.f.cards.Header Header}. Recommended
   * content: - List - Table - Object information - Charts - Timelines - Images
   *
   * When to use
   * 	 - When you need multiple cards on a home page layout.
   * 	 - When you have to achieve simple card visualization.
   *
   * When not to use
   * 	 - When you have to reuse the card between applications. For such cases, use: {@link sap.ui.integration.widgets.Card
   * 			Integration Card}.
   * 	 - When you need nesting. For such cases, use: {@link sap.m.Panel Panel}.
   * 	 - When the card is not part of a card layout. For such cases, use: {@link sap.m.Panel Panel}.
   * 	 - When you need more header configuration flexibility.
   */
  export default class Card extends CardBase {
    /**
     * Constructor for a new `Card`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $CardSettings
    );
    /**
     * Constructor for a new `Card`.
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
      mSettings?: $CardSettings
    );

    /**
     * Creates a new subclass of class sap.f.Card with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.CardBase.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Card>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.Card.
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
     * Destroys the header in the aggregation {@link #getHeader header}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyHeader(): this;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Defines the content of the card.
     */
    getContent(): Control;
    /**
     * Gets content of aggregation {@link #getHeader header}.
     *
     * Defines the header of the card.
     */
    getHeader(): cards.IHeader;
    /**
     * @SINCE 1.65
     *
     * Gets current value of property {@link #getHeaderPosition headerPosition}.
     *
     * Defines the position of the Card Header.
     *
     * Default value is `Top`.
     *
     * @returns Value of property `headerPosition`
     */
    getHeaderPosition():
      | cards.HeaderPosition
      | keyof typeof cards.HeaderPosition;
    /**
     * Sets the aggregated {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setContent(
      /**
       * The content to set
       */
      oContent: Control
    ): this;
    /**
     * Sets the aggregated {@link #getHeader header}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeader(
      /**
       * The header to set
       */
      oHeader: cards.IHeader
    ): this;
    /**
     * @SINCE 1.65
     *
     * Sets a new value for property {@link #getHeaderPosition headerPosition}.
     *
     * Defines the position of the Card Header.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Top`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderPosition(
      /**
       * New value for property `headerPosition`
       */
      sHeaderPosition?: cards.HeaderPosition | keyof typeof cards.HeaderPosition
    ): this;
  }

  export interface $CardSettings extends $CardBaseSettings {
    /**
     * @SINCE 1.65
     *
     * Defines the position of the Card Header.
     */
    headerPosition?:
      | (cards.HeaderPosition | keyof typeof cards.HeaderPosition)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the header of the card.
     */
    header?: cards.IHeader;

    /**
     * Defines the content of the card.
     */
    content?: Control;
  }
}

declare module "sap/f/CardBase" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ICard } from "sap/f/library";

  import { IBadge } from "sap/m/library";

  import { CSSSize } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * A base class for controls that represent a container with a predefined header and content.
   */
  export default class CardBase extends Control implements ICard, IBadge {
    __implements__sap_f_ICard: boolean;
    __implements__sap_m_IBadge: boolean;
    /**
     * Constructor for a new `CardBase`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $CardBaseSettings
    );
    /**
     * Constructor for a new `CardBase`.
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
      mSettings?: $CardBaseSettings
    );

    /**
     * Creates a new subclass of class sap.f.CardBase with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, CardBase>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.CardBase.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Returns the DOM Element that should get the focus.
     *
     * @returns Returns the DOM Element that should get the focus
     */
    getFocusDomRef(): Element;
    /**
     * Gets current value of property {@link #getHeight height}.
     *
     * Defines the height of the card.
     *
     * Default value is `"auto"`.
     *
     * @returns Value of property `height`
     */
    getHeight(): CSSSize;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Defines the width of the card.
     *
     * Default value is `"100%"`.
     *
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
    /**
     * Sets a new value for property {@link #getHeight height}.
     *
     * Defines the height of the card.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"auto"`.
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
     * Sets a new value for property {@link #getWidth width}.
     *
     * Defines the width of the card.
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

  export interface $CardBaseSettings extends $ControlSettings {
    /**
     * Defines the width of the card.
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the height of the card.
     */
    height?: CSSSize | PropertyBindingInfo | `{${string}}`;
  }
}

declare module "sap/f/cards/BaseHeader" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.86
   *
   * Provides basic functionality for header controls that can be used in sap.f.Card
   */
  export default class BaseHeader extends Control {
    /**
     * Constructor for a new `BaseHeader`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $BaseHeaderSettings
    );
    /**
     * Constructor for a new `BaseHeader`.
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
      mSettings?: $BaseHeaderSettings
    );

    /**
     * Creates a new subclass of class sap.f.cards.BaseHeader with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, BaseHeader>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.cards.BaseHeader.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.86
     * @EXPERIMENTAL (since 1.86)
     *
     * Destroys the toolbar in the aggregation {@link #getToolbar toolbar}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyToolbar(): this;
    /**
     * @EXPERIMENTAL (since 1.89)
     *
     * Gets current value of property {@link #getDataTimestamp dataTimestamp}.
     *
     * Defines the timestamp of the oldest data in the card. Use this to show to the end user how fresh the
     * information in the card is.
     *
     * Must be specified in ISO 8601 format.
     *
     * Will be shown as a relative time like "5 minutes ago".
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `dataTimestamp`
     */
    getDataTimestamp(): string;
    /**
     * @SINCE 1.86
     * @EXPERIMENTAL (since 1.86)
     *
     * Gets content of aggregation {@link #getToolbar toolbar}.
     *
     * Defines the toolbar.
     */
    getToolbar(): Control;
    /**
     * @SINCE 1.86
     * @EXPERIMENTAL (since 1.86)
     *
     * Sets the aggregated {@link #getToolbar toolbar}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setToolbar(
      /**
       * The toolbar to set
       */
      oToolbar: Control
    ): this;
  }

  export interface $BaseHeaderSettings extends $ControlSettings {
    /**
     * @EXPERIMENTAL (since 1.89)
     *
     * Defines the timestamp of the oldest data in the card. Use this to show to the end user how fresh the
     * information in the card is.
     *
     * Must be specified in ISO 8601 format.
     *
     * Will be shown as a relative time like "5 minutes ago".
     */
    dataTimestamp?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.86
     * @EXPERIMENTAL (since 1.86)
     *
     * Defines the toolbar.
     */
    toolbar?: Control;
  }
}

declare module "sap/f/cards/Header" {
  import {
    default as BaseHeader,
    $BaseHeaderSettings,
  } from "sap/f/cards/BaseHeader";

  import { cards } from "sap/f/library";

  import Event from "sap/ui/base/Event";

  import Control from "sap/ui/core/Control";

  import AvatarColor from "sap/m/AvatarColor";

  import AvatarShape from "sap/m/AvatarShape";

  import { URI } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.64
   *
   * Displays general information in the header of the {@link sap.f.Card}.
   *
   * You can configure the title, subtitle, status text and icon, using the provided properties.
   *
   * **Notes:**
   * 	 - You should always set a title.
   * 	 - To show a KPI or any numeric information, use {@link sap.f.cards.NumericHeader} instead.
   */
  export default class Header extends BaseHeader implements cards.IHeader {
    __implements__sap_f_cards_IHeader: boolean;
    /**
     * Constructor for a new `Header`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $HeaderSettings
    );
    /**
     * Constructor for a new `Header`.
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
      mSettings?: $HeaderSettings
    );

    /**
     * Creates a new subclass of class sap.f.cards.Header with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.cards.BaseHeader.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Header>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.cards.Header.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.f.cards.Header`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.cards.Header` itself.
     *
     * Fires when the user presses the control.
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
       * Context object to call the event handler with. Defaults to this `sap.f.cards.Header` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.f.cards.Header`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.cards.Header` itself.
     *
     * Fires when the user presses the control.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.cards.Header` itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.f.cards.Header`.
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
     * @EXPERIMENTAL (since 1.81)
     *
     * Gets current value of property {@link #getIconAlt iconAlt}.
     *
     * Defines an alt text for the avatar or icon.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `iconAlt`
     */
    getIconAlt(): string;
    /**
     * @EXPERIMENTAL (since 1.83)
     *
     * Gets current value of property {@link #getIconBackgroundColor iconBackgroundColor}.
     *
     * Defines a background color for the avatar or icon.
     *
     * Default value is `Transparent`.
     *
     * @returns Value of property `iconBackgroundColor`
     */
    getIconBackgroundColor(): AvatarColor | keyof typeof AvatarColor;
    /**
     * Gets current value of property {@link #getIconDisplayShape iconDisplayShape}.
     *
     * Defines the shape of the icon.
     *
     * Default value is `Circle`.
     *
     * @returns Value of property `iconDisplayShape`
     */
    getIconDisplayShape(): AvatarShape | keyof typeof AvatarShape;
    /**
     * Gets current value of property {@link #getIconInitials iconInitials}.
     *
     * Defines the initials of the icon.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `iconInitials`
     */
    getIconInitials(): string;
    /**
     * Gets current value of property {@link #getIconSrc iconSrc}.
     *
     * Defines the icon source.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `iconSrc`
     */
    getIconSrc(): URI;
    /**
     * Gets current value of property {@link #getStatusText statusText}.
     *
     * Defines the status text.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `statusText`
     */
    getStatusText(): string;
    /**
     * Gets current value of property {@link #getSubtitle subtitle}.
     *
     * Defines the subtitle.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `subtitle`
     */
    getSubtitle(): string;
    /**
     * @EXPERIMENTAL (since 1.101)
     *
     * Gets current value of property {@link #getSubtitleMaxLines subtitleMaxLines}.
     *
     * Limits the number of lines for the subtitle.
     *
     * Default value is `2`.
     *
     * @returns Value of property `subtitleMaxLines`
     */
    getSubtitleMaxLines(): int;
    /**
     * Gets current value of property {@link #getTitle title}.
     *
     * Defines the title.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `title`
     */
    getTitle(): string;
    /**
     * @EXPERIMENTAL (since 1.101)
     *
     * Gets current value of property {@link #getTitleMaxLines titleMaxLines}.
     *
     * Limits the number of lines for the title.
     *
     * Default value is `3`.
     *
     * @returns Value of property `titleMaxLines`
     */
    getTitleMaxLines(): int;
    /**
     * @EXPERIMENTAL (since 1.81)
     *
     * Sets a new value for property {@link #getIconAlt iconAlt}.
     *
     * Defines an alt text for the avatar or icon.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setIconAlt(
      /**
       * New value for property `iconAlt`
       */
      sIconAlt?: string
    ): this;
    /**
     * @EXPERIMENTAL (since 1.83)
     *
     * Sets a new value for property {@link #getIconBackgroundColor iconBackgroundColor}.
     *
     * Defines a background color for the avatar or icon.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Transparent`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setIconBackgroundColor(
      /**
       * New value for property `iconBackgroundColor`
       */
      sIconBackgroundColor?: AvatarColor | keyof typeof AvatarColor
    ): this;
    /**
     * Sets a new value for property {@link #getIconDisplayShape iconDisplayShape}.
     *
     * Defines the shape of the icon.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Circle`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setIconDisplayShape(
      /**
       * New value for property `iconDisplayShape`
       */
      sIconDisplayShape?: AvatarShape | keyof typeof AvatarShape
    ): this;
    /**
     * Sets a new value for property {@link #getIconInitials iconInitials}.
     *
     * Defines the initials of the icon.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setIconInitials(
      /**
       * New value for property `iconInitials`
       */
      sIconInitials?: string
    ): this;
    /**
     * Sets a new value for property {@link #getIconSrc iconSrc}.
     *
     * Defines the icon source.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setIconSrc(
      /**
       * New value for property `iconSrc`
       */
      sIconSrc?: URI
    ): this;
    /**
     * Sets a new value for property {@link #getStatusText statusText}.
     *
     * Defines the status text.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setStatusText(
      /**
       * New value for property `statusText`
       */
      sStatusText?: string
    ): this;
    /**
     * Sets a new value for property {@link #getSubtitle subtitle}.
     *
     * Defines the subtitle.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSubtitle(
      /**
       * New value for property `subtitle`
       */
      sSubtitle?: string
    ): this;
    /**
     * @EXPERIMENTAL (since 1.101)
     *
     * Sets a new value for property {@link #getSubtitleMaxLines subtitleMaxLines}.
     *
     * Limits the number of lines for the subtitle.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `2`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSubtitleMaxLines(
      /**
       * New value for property `subtitleMaxLines`
       */
      iSubtitleMaxLines?: int
    ): this;
    /**
     * Sets a new value for property {@link #getTitle title}.
     *
     * Defines the title.
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
     * @EXPERIMENTAL (since 1.101)
     *
     * Sets a new value for property {@link #getTitleMaxLines titleMaxLines}.
     *
     * Limits the number of lines for the title.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `3`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitleMaxLines(
      /**
       * New value for property `titleMaxLines`
       */
      iTitleMaxLines?: int
    ): this;
  }

  export interface $HeaderSettings extends $BaseHeaderSettings {
    /**
     * Defines the title.
     */
    title?: string | PropertyBindingInfo;

    /**
     * @EXPERIMENTAL (since 1.101)
     *
     * Limits the number of lines for the title.
     */
    titleMaxLines?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the subtitle.
     */
    subtitle?: string | PropertyBindingInfo;

    /**
     * @EXPERIMENTAL (since 1.101)
     *
     * Limits the number of lines for the subtitle.
     */
    subtitleMaxLines?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the status text.
     */
    statusText?: string | PropertyBindingInfo;

    /**
     * Defines the shape of the icon.
     */
    iconDisplayShape?:
      | (AvatarShape | keyof typeof AvatarShape)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the icon source.
     */
    iconSrc?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the initials of the icon.
     */
    iconInitials?: string | PropertyBindingInfo;

    /**
     * @EXPERIMENTAL (since 1.81)
     *
     * Defines an alt text for the avatar or icon.
     */
    iconAlt?: string | PropertyBindingInfo;

    /**
     * @EXPERIMENTAL (since 1.83)
     *
     * Defines a background color for the avatar or icon.
     */
    iconBackgroundColor?:
      | (AvatarColor | keyof typeof AvatarColor)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Fires when the user presses the control.
     */
    press?: (oEvent: Event) => void;
  }
}

declare module "sap/f/cards/NumericHeader" {
  import {
    default as BaseHeader,
    $BaseHeaderSettings,
  } from "sap/f/cards/BaseHeader";

  import { cards } from "sap/f/library";

  import NumericSideIndicator from "sap/f/cards/NumericSideIndicator";

  import Event from "sap/ui/base/Event";

  import Control from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { ValueColor, DeviationIndicator } from "sap/m/library";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.64
   *
   * Displays general information in the header of the {@link sap.f.Card} and allows the configuration of
   * a numeric value visualization.
   *
   * You can configure the title, subtitle, and status text, using the provided properties. To add more side
   * number indicators, use the `sideIndicators` aggregation.
   *
   * **Notes:**
   * 	 - You should always set a title.
   * 	 - You should always have a maximum of two side indicators.
   * 	 - To show only basic information, use {@link sap.f.cards.Header Header} instead.
   */
  export default class NumericHeader
    extends BaseHeader
    implements cards.IHeader {
    __implements__sap_f_cards_IHeader: boolean;
    /**
     * Constructor for a new `NumericHeader`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $NumericHeaderSettings
    );
    /**
     * Constructor for a new `NumericHeader`.
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
      mSettings?: $NumericHeaderSettings
    );

    /**
     * Creates a new subclass of class sap.f.cards.NumericHeader with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.cards.BaseHeader.extend}.
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
      oClassInfo?: sap.ClassInfo<T, NumericHeader>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.cards.NumericHeader.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some sideIndicator to the aggregation {@link #getSideIndicators sideIndicators}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addSideIndicator(
      /**
       * The sideIndicator to add; if empty, nothing is inserted
       */
      oSideIndicator: NumericSideIndicator
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.f.cards.NumericHeader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.cards.NumericHeader` itself.
     *
     * Fires when the user presses the control.
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
       * Context object to call the event handler with. Defaults to this `sap.f.cards.NumericHeader` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.f.cards.NumericHeader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.cards.NumericHeader` itself.
     *
     * Fires when the user presses the control.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.cards.NumericHeader` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the sideIndicators in the aggregation {@link #getSideIndicators sideIndicators}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySideIndicators(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.f.cards.NumericHeader`.
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
     * Gets current value of property {@link #getDetails details}.
     *
     * Additional text which adds more details to what is shown in the numeric header.
     *
     * @returns Value of property `details`
     */
    getDetails(): string;
    /**
     * @EXPERIMENTAL (since 1.101)
     *
     * Gets current value of property {@link #getDetailsMaxLines detailsMaxLines}.
     *
     * Limits the number of lines for the details.
     *
     * Default value is `1`.
     *
     * @returns Value of property `detailsMaxLines`
     */
    getDetailsMaxLines(): int;
    /**
     * Gets current value of property {@link #getNumber number}.
     *
     * The numeric value of the main number indicator. If the value contains more than five characters, only
     * the first five are displayed. Without rounding the number.
     *
     * @returns Value of property `number`
     */
    getNumber(): string;
    /**
     * Gets current value of property {@link #getScale scale}.
     *
     * Defines the unit of measurement (scaling prefix) for the main indicator. Financial characters can be
     * used for currencies and counters. The International System of Units (SI) prefixes can be used. If the
     * unit contains more than three characters, only the first three characters are displayed.
     *
     * @returns Value of property `scale`
     */
    getScale(): string;
    /**
     * Gets content of aggregation {@link #getSideIndicators sideIndicators}.
     *
     * Additional side number indicators. For example "Deviation" and "Target". Not more than two side indicators
     * should be used.
     */
    getSideIndicators(): NumericSideIndicator[];
    /**
     * Gets current value of property {@link #getSideIndicatorsAlignment sideIndicatorsAlignment}.
     *
     * The alignment of the side indicators.
     *
     * Default value is `"Begin"`.
     *
     * @returns Value of property `sideIndicatorsAlignment`
     */
    getSideIndicatorsAlignment():
      | cards.NumericHeaderSideIndicatorsAlignment
      | keyof typeof cards.NumericHeaderSideIndicatorsAlignment;
    /**
     * @EXPERIMENTAL (since 1.64)
     *
     * Gets current value of property {@link #getState state}.
     *
     * The semantic color which represents the state of the main number indicator.
     *
     * Default value is `"Neutral"`.
     *
     * @returns Value of property `state`
     */
    getState(): ValueColor | keyof typeof ValueColor;
    /**
     * Gets current value of property {@link #getStatusText statusText}.
     *
     * Defines the status text.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `statusText`
     */
    getStatusText(): string;
    /**
     * Gets current value of property {@link #getSubtitle subtitle}.
     *
     * The subtitle of the card
     *
     * @returns Value of property `subtitle`
     */
    getSubtitle(): string;
    /**
     * @EXPERIMENTAL (since 1.101)
     *
     * Gets current value of property {@link #getSubtitleMaxLines subtitleMaxLines}.
     *
     * Limits the number of lines for the subtitle.
     *
     * Default value is `2`.
     *
     * @returns Value of property `subtitleMaxLines`
     */
    getSubtitleMaxLines(): int;
    /**
     * Gets current value of property {@link #getTitle title}.
     *
     * The title of the card
     *
     * @returns Value of property `title`
     */
    getTitle(): string;
    /**
     * @EXPERIMENTAL (since 1.101)
     *
     * Gets current value of property {@link #getTitleMaxLines titleMaxLines}.
     *
     * Limits the number of lines for the title.
     *
     * Default value is `3`.
     *
     * @returns Value of property `titleMaxLines`
     */
    getTitleMaxLines(): int;
    /**
     * Gets current value of property {@link #getTrend trend}.
     *
     * The direction of the trend arrow. Shows deviation for the value of the main number indicator.
     *
     * Default value is `"None"`.
     *
     * @returns Value of property `trend`
     */
    getTrend(): DeviationIndicator | keyof typeof DeviationIndicator;
    /**
     * Gets current value of property {@link #getUnitOfMeasurement unitOfMeasurement}.
     *
     * General unit of measurement for the header. Displayed as side information to the subtitle.
     *
     * @returns Value of property `unitOfMeasurement`
     */
    getUnitOfMeasurement(): string;
    /**
     * Checks for the provided `sap.f.cards.NumericSideIndicator` in the aggregation {@link #getSideIndicators
     * sideIndicators}. and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfSideIndicator(
      /**
       * The sideIndicator whose index is looked for
       */
      oSideIndicator: NumericSideIndicator
    ): int;
    /**
     * Inserts a sideIndicator into the aggregation {@link #getSideIndicators sideIndicators}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertSideIndicator(
      /**
       * The sideIndicator to insert; if empty, nothing is inserted
       */
      oSideIndicator: NumericSideIndicator,
      /**
       * The `0`-based index the sideIndicator should be inserted at; for a negative value of `iIndex`, the sideIndicator
       * is inserted at position 0; for a value greater than the current size of the aggregation, the sideIndicator
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getSideIndicators sideIndicators}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllSideIndicators(): NumericSideIndicator[];
    /**
     * Removes a sideIndicator from the aggregation {@link #getSideIndicators sideIndicators}.
     *
     * @returns The removed sideIndicator or `null`
     */
    removeSideIndicator(
      /**
       * The sideIndicator to remove or its index or id
       */
      vSideIndicator: int | string | NumericSideIndicator
    ): NumericSideIndicator | null;
    /**
     * Sets a new value for property {@link #getDetails details}.
     *
     * Additional text which adds more details to what is shown in the numeric header.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDetails(
      /**
       * New value for property `details`
       */
      sDetails: string
    ): this;
    /**
     * @EXPERIMENTAL (since 1.101)
     *
     * Sets a new value for property {@link #getDetailsMaxLines detailsMaxLines}.
     *
     * Limits the number of lines for the details.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDetailsMaxLines(
      /**
       * New value for property `detailsMaxLines`
       */
      iDetailsMaxLines?: int
    ): this;
    /**
     * Sets a new value for property {@link #getNumber number}.
     *
     * The numeric value of the main number indicator. If the value contains more than five characters, only
     * the first five are displayed. Without rounding the number.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setNumber(
      /**
       * New value for property `number`
       */
      sNumber: string
    ): this;
    /**
     * Sets a new value for property {@link #getScale scale}.
     *
     * Defines the unit of measurement (scaling prefix) for the main indicator. Financial characters can be
     * used for currencies and counters. The International System of Units (SI) prefixes can be used. If the
     * unit contains more than three characters, only the first three characters are displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setScale(
      /**
       * New value for property `scale`
       */
      sScale: string
    ): this;
    /**
     * Sets a new value for property {@link #getSideIndicatorsAlignment sideIndicatorsAlignment}.
     *
     * The alignment of the side indicators.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Begin"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSideIndicatorsAlignment(
      /**
       * New value for property `sideIndicatorsAlignment`
       */
      sSideIndicatorsAlignment?:
        | cards.NumericHeaderSideIndicatorsAlignment
        | keyof typeof cards.NumericHeaderSideIndicatorsAlignment
    ): this;
    /**
     * @EXPERIMENTAL (since 1.64)
     *
     * Sets a new value for property {@link #getState state}.
     *
     * The semantic color which represents the state of the main number indicator.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Neutral"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setState(
      /**
       * New value for property `state`
       */
      sState?: ValueColor | keyof typeof ValueColor
    ): this;
    /**
     * Sets a new value for property {@link #getStatusText statusText}.
     *
     * Defines the status text.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setStatusText(
      /**
       * New value for property `statusText`
       */
      sStatusText?: string
    ): this;
    /**
     * Sets a new value for property {@link #getSubtitle subtitle}.
     *
     * The subtitle of the card
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSubtitle(
      /**
       * New value for property `subtitle`
       */
      sSubtitle: string
    ): this;
    /**
     * @EXPERIMENTAL (since 1.101)
     *
     * Sets a new value for property {@link #getSubtitleMaxLines subtitleMaxLines}.
     *
     * Limits the number of lines for the subtitle.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `2`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSubtitleMaxLines(
      /**
       * New value for property `subtitleMaxLines`
       */
      iSubtitleMaxLines?: int
    ): this;
    /**
     * Sets a new value for property {@link #getTitle title}.
     *
     * The title of the card
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitle(
      /**
       * New value for property `title`
       */
      sTitle: string
    ): this;
    /**
     * @EXPERIMENTAL (since 1.101)
     *
     * Sets a new value for property {@link #getTitleMaxLines titleMaxLines}.
     *
     * Limits the number of lines for the title.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `3`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitleMaxLines(
      /**
       * New value for property `titleMaxLines`
       */
      iTitleMaxLines?: int
    ): this;
    /**
     * Sets a new value for property {@link #getTrend trend}.
     *
     * The direction of the trend arrow. Shows deviation for the value of the main number indicator.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"None"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTrend(
      /**
       * New value for property `trend`
       */
      sTrend?: DeviationIndicator | keyof typeof DeviationIndicator
    ): this;
    /**
     * Sets a new value for property {@link #getUnitOfMeasurement unitOfMeasurement}.
     *
     * General unit of measurement for the header. Displayed as side information to the subtitle.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setUnitOfMeasurement(
      /**
       * New value for property `unitOfMeasurement`
       */
      sUnitOfMeasurement: string
    ): this;
  }

  export interface $NumericHeaderSettings extends $BaseHeaderSettings {
    /**
     * The title of the card
     */
    title?: string | PropertyBindingInfo;

    /**
     * @EXPERIMENTAL (since 1.101)
     *
     * Limits the number of lines for the title.
     */
    titleMaxLines?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * The subtitle of the card
     */
    subtitle?: string | PropertyBindingInfo;

    /**
     * @EXPERIMENTAL (since 1.101)
     *
     * Limits the number of lines for the subtitle.
     */
    subtitleMaxLines?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the status text.
     */
    statusText?: string | PropertyBindingInfo;

    /**
     * General unit of measurement for the header. Displayed as side information to the subtitle.
     */
    unitOfMeasurement?: string | PropertyBindingInfo;

    /**
     * The numeric value of the main number indicator. If the value contains more than five characters, only
     * the first five are displayed. Without rounding the number.
     */
    number?: string | PropertyBindingInfo;

    /**
     * Defines the unit of measurement (scaling prefix) for the main indicator. Financial characters can be
     * used for currencies and counters. The International System of Units (SI) prefixes can be used. If the
     * unit contains more than three characters, only the first three characters are displayed.
     */
    scale?: string | PropertyBindingInfo;

    /**
     * The direction of the trend arrow. Shows deviation for the value of the main number indicator.
     */
    trend?:
      | (DeviationIndicator | keyof typeof DeviationIndicator)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * @EXPERIMENTAL (since 1.64)
     *
     * The semantic color which represents the state of the main number indicator.
     */
    state?:
      | (ValueColor | keyof typeof ValueColor)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Additional text which adds more details to what is shown in the numeric header.
     */
    details?: string | PropertyBindingInfo;

    /**
     * @EXPERIMENTAL (since 1.101)
     *
     * Limits the number of lines for the details.
     */
    detailsMaxLines?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * The alignment of the side indicators.
     */
    sideIndicatorsAlignment?:
      | (
          | cards.NumericHeaderSideIndicatorsAlignment
          | keyof typeof cards.NumericHeaderSideIndicatorsAlignment
        )
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Additional side number indicators. For example "Deviation" and "Target". Not more than two side indicators
     * should be used.
     */
    sideIndicators?:
      | NumericSideIndicator[]
      | NumericSideIndicator
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Fires when the user presses the control.
     */
    press?: (oEvent: Event) => void;
  }
}

declare module "sap/f/cards/NumericSideIndicator" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { ValueColor } from "sap/m/library";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.64
   *
   * Holds a set of side indicator attributes used in the {@link sap.f.cards.NumericHeader} control.
   */
  export default class NumericSideIndicator extends Control {
    /**
     * Constructor for a new `NumericSideIndicator`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $NumericSideIndicatorSettings
    );
    /**
     * Constructor for a new `NumericSideIndicator`.
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
      mSettings?: $NumericSideIndicatorSettings
    );

    /**
     * Creates a new subclass of class sap.f.cards.NumericSideIndicator with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, NumericSideIndicator>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.cards.NumericSideIndicator.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getNumber number}.
     *
     * The numeric value
     *
     * @returns Value of property `number`
     */
    getNumber(): string;
    /**
     * @EXPERIMENTAL (since 1.95)
     *
     * Gets current value of property {@link #getState state}.
     *
     * The semantic color which represents the state of the side indicator.
     *
     * Default value is `"None"`.
     *
     * @returns Value of property `state`
     */
    getState(): ValueColor | keyof typeof ValueColor;
    /**
     * Gets current value of property {@link #getTitle title}.
     *
     * The title of the indicator
     *
     * @returns Value of property `title`
     */
    getTitle(): string;
    /**
     * Gets current value of property {@link #getUnit unit}.
     *
     * Defines the unit of measurement (scaling prefix) for the numeric value
     *
     * @returns Value of property `unit`
     */
    getUnit(): string;
    /**
     * Sets the numeric value.
     *
     * @returns this pointer for chaining
     */
    setNumber(
      /**
       * The text of the title
       */
      sValue: string
    ): this;
    /**
     * @EXPERIMENTAL (since 1.95)
     *
     * Sets a new value for property {@link #getState state}.
     *
     * The semantic color which represents the state of the side indicator.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"None"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setState(
      /**
       * New value for property `state`
       */
      sState?: ValueColor | keyof typeof ValueColor
    ): this;
    /**
     * Sets the title.
     *
     * @returns this pointer for chaining
     */
    setTitle(
      /**
       * The text of the title
       */
      sValue: string
    ): this;
    /**
     * Sets the unit of measurement.
     *
     * @returns this pointer for chaining
     */
    setUnit(
      /**
       * The text of the title
       */
      sValue: string
    ): this;
  }

  export interface $NumericSideIndicatorSettings extends $ControlSettings {
    /**
     * The title of the indicator
     */
    title?: string | PropertyBindingInfo;

    /**
     * The numeric value
     */
    number?: string | PropertyBindingInfo;

    /**
     * Defines the unit of measurement (scaling prefix) for the numeric value
     */
    unit?: string | PropertyBindingInfo;

    /**
     * @EXPERIMENTAL (since 1.95)
     *
     * The semantic color which represents the state of the side indicator.
     */
    state?:
      | (ValueColor | keyof typeof ValueColor)
      | PropertyBindingInfo
      | `{${string}}`;
  }
}

declare module "sap/f/dnd/GridDropInfo" {
  import {
    default as DropInfo,
    $DropInfoSettings,
  } from "sap/ui/core/dnd/DropInfo";

  import { dnd } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.68
   * @EXPERIMENTAL (since 1.68)
   *
   * Provides enhanced configuration for drop operations inside grid-based controls.
   *
   * If drop position is `Between` and drop layout is `Horizontal`, this drop configuration will provide enhanced
   * visualization and interaction, better suited for grid items. It will show a drop indicator which mimics
   * the size of the dragged item and shows the potential drop position inside the grid. The indicator will
   * push away other grid items, showing the correct arrangement calculated by the grid’s auto-placement algorithm.
   *
   * When position is different than `Between` or layout is not `Horizontal`, the drag and drop will look
   * and behave like the general `{@link sap.ui.core.dnd.DropInfo}`.
   *
   * **Note:** This configuration might be ignored due to control {@link sap.ui.core.Element.extend metadata}
   * restrictions.
   */
  export default class GridDropInfo extends DropInfo implements dnd.IDropInfo {
    __implements__sap_ui_core_dnd_IDropInfo: boolean;
    /**
     * Constructor for a new GridDropInfo.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the GridDropInfo
       */
      mSettings?: $GridDropInfoSettings
    );
    /**
     * Constructor for a new GridDropInfo.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * ID for the new DropInfo, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the GridDropInfo
       */
      mSettings?: $GridDropInfoSettings
    );

    /**
     * Creates a new subclass of class sap.f.dnd.GridDropInfo with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.dnd.DropInfo.extend}.
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
      oClassInfo?: sap.ClassInfo<T, GridDropInfo>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.dnd.GridDropInfo.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getDropIndicatorSize dropIndicatorSize}.
     *
     * A function which will define the desired drop indicator size. The drop indicator shows the user how the
     * grid will rearrange after drop.
     *
     * Use when custom size needs to be defined. For example when an item is dragged from outside a grid and
     * is dropped over the grid.
     *
     * If not specified or if the function returns `null`, the indicator size will be calculated automatically.
     *
     * This callback will be called when the indicator is displayed, that happens during the drag over movement.
     *
     * The callback receives `draggedControl` as parameter and must return an object of type `{rows: ,
     * columns: }` or `null`.
     *
     * @returns Value of property `dropIndicatorSize`
     */
    getDropIndicatorSize(): Function;
    /**
     * Sets a new value for property {@link #getDropIndicatorSize dropIndicatorSize}.
     *
     * A function which will define the desired drop indicator size. The drop indicator shows the user how the
     * grid will rearrange after drop.
     *
     * Use when custom size needs to be defined. For example when an item is dragged from outside a grid and
     * is dropped over the grid.
     *
     * If not specified or if the function returns `null`, the indicator size will be calculated automatically.
     *
     * This callback will be called when the indicator is displayed, that happens during the drag over movement.
     *
     * The callback receives `draggedControl` as parameter and must return an object of type `{rows: ,
     * columns: }` or `null`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDropIndicatorSize(
      /**
       * New value for property `dropIndicatorSize`
       */
      fnDropIndicatorSize: Function
    ): this;
  }

  export interface $GridDropInfoSettings extends $DropInfoSettings {
    /**
     * A function which will define the desired drop indicator size. The drop indicator shows the user how the
     * grid will rearrange after drop.
     *
     * Use when custom size needs to be defined. For example when an item is dragged from outside a grid and
     * is dropped over the grid.
     *
     * If not specified or if the function returns `null`, the indicator size will be calculated automatically.
     *
     * This callback will be called when the indicator is displayed, that happens during the drag over movement.
     *
     * The callback receives `draggedControl` as parameter and must return an object of type `{rows: ,
     * columns: }` or `null`.
     */
    dropIndicatorSize?: Function | PropertyBindingInfo | `{${string}}`;
  }
}

declare module "sap/f/DynamicPage" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import Event from "sap/ui/base/Event";

  import { PageBackgroundDesign, IBar } from "sap/m/library";

  import DynamicPageHeader from "sap/f/DynamicPageHeader";

  import DynamicPageAccessibleLandmarkInfo from "sap/f/DynamicPageAccessibleLandmarkInfo";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import ScrollEnablement from "sap/ui/core/delegate/ScrollEnablement";

  import { ID } from "sap/ui/core/library";

  import DynamicPageTitle from "sap/f/DynamicPageTitle";

  import { IDynamicPageStickyContent } from "sap/f/library";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.42
   *
   * A layout control, representing a web page, consisting of a title, header with dynamic behavior, a content
   * area, and an optional floating footer.
   *
   * Overview:
   *
   * The control consist of several components:
   *
   *
   * 	 - {@link sap.f.DynamicPageTitle DynamicPageTitle} - consists of a heading on the left side, content
   * 			in the middle, and actions on the right. The displayed content changes based on the current mode of the
   * 			{@link sap.f.DynamicPageHeader DynamicPageHeader}.
   * 	 - {@link sap.f.DynamicPageHeader DynamicPageHeader} - a generic container, which can contain a single
   * 			layout control and does not care about the content alignment and responsiveness. The header works in
   * 			two modes - expanded and snapped and its behavior can be adjusted with the help of different properties.
   *
   * 	 - Content area - a generic container, which can have a single UI5 layout control and does not care
   * 			about the content alignment and responsiveness.
   * 	 - Footer - positioned at the bottom with a small offset and used for additional actions, the footer
   * 			floats above the content. It can be any {@link sap.m.IBar} control.
   *
   * Usage:
   *
   * Use the `DynamicPage` if you need to have a title, that is always visible and a header, that has configurable
   * Expanding/Snapping functionality. If you don't need the Expanding/Snapping functionality it is better
   * to use the {@link sap.m.Page} as a lighter control.
   *
   * **Notes:**
   * 	 - If you're displaying a {@link sap.m.FlexBox} with non-adaptive content (doesn't stretch to fill the
   * 			available space), it is recommended to set the `fitContainer` property of the {@link sap.m.FlexBox FlexBox}
   * 			to `false`.
   * 	 - If you are displaying a {@link sap.ui.table.Table}, keep in mind that it is non-adaptive and may
   * 			cause unpredicted behavior for the `DynamicPage` on smaller screen sizes, such as mobile.
   * 	 - Snapping of the {@link sap.f.DynamicPageTitle DynamicPageTitle} is not supported in the following
   * 			case: When the `DynamicPage` has a scroll bar, the control usually scrolls to the snapping point - the
   * 			point, where the {@link sap.f.DynamicPageHeader DynamicPageHeader} is scrolled out completely. However,
   * 			when there is a scroll bar, but not enough content to reach the snapping point, the snapping is not possible
   * 			using scrolling.
   * 	 - When using {@link sap.ui.layout.form.Form}, {@link sap.m.Panel}, {@link sap.m.Table} and {@link sap.m.List}
   * 			controls in the content of `DynamicPage`, you need to adjust their left text offset if you want to achieve
   * 			vertical alignment between the `sap.f.DynamicPageHeader``s content and `DynamicPage``s content. For more
   * 			information, see the documentation for the `content` aggregation.
   *
   * Responsive Behavior:
   *
   * The responsive behavior of the `DynamicPage` depends on the behavior of the content that is displayed.
   * To adjust the `DynamicPage` content padding, the `sapUiContentPadding`, `sapUiNoContentPadding`, and
   * `sapUiResponsiveContentPadding` CSS classes can be used.
   */
  export default class DynamicPage extends Control {
    /**
     * Constructor for a new `DynamicPage`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/dynamic-page-layout/ Dynamic Page}
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $DynamicPageSettings
    );
    /**
     * Constructor for a new `DynamicPage`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/dynamic-page-layout/ Dynamic Page}
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $DynamicPageSettings
    );

    /**
     * Creates a new subclass of class sap.f.DynamicPage with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, DynamicPage>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.DynamicPage.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.93
     *
     * Attaches event handler `fnFunction` to the {@link #event:pinnedStateChange pinnedStateChange} event of
     * this `sap.f.DynamicPage`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.DynamicPage` itself.
     *
     * The event is fired when the `headerPinned` property is changed via user interaction.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPinnedStateChange(
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
       * Context object to call the event handler with. Defaults to this `sap.f.DynamicPage` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.93
     *
     * Attaches event handler `fnFunction` to the {@link #event:pinnedStateChange pinnedStateChange} event of
     * this `sap.f.DynamicPage`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.DynamicPage` itself.
     *
     * The event is fired when the `headerPinned` property is changed via user interaction.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPinnedStateChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.DynamicPage` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys the content in the aggregation {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;
    /**
     * Destroys the footer in the aggregation {@link #getFooter footer}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFooter(): this;
    /**
     * Destroys the header in the aggregation {@link #getHeader header}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyHeader(): this;
    /**
     * @SINCE 1.61
     *
     * Destroys the landmarkInfo in the aggregation {@link #getLandmarkInfo landmarkInfo}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyLandmarkInfo(): this;
    /**
     * Destroys the title in the aggregation {@link #getTitle title}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTitle(): this;
    /**
     * @SINCE 1.93
     *
     * Detaches event handler `fnFunction` from the {@link #event:pinnedStateChange pinnedStateChange} event
     * of this `sap.f.DynamicPage`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachPinnedStateChange(
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
     * Fires event {@link #event:pinnedStateChange pinnedStateChange} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    firePinnedStateChange(
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
     * @SINCE 1.68
     *
     * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
     *
     * Determines the background color of `DynamicPage`.
     *
     * Default value is `Standard`.
     *
     * @returns Value of property `backgroundDesign`
     */
    getBackgroundDesign():
      | PageBackgroundDesign
      | keyof typeof PageBackgroundDesign;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * `DynamicPage` content.
     *
     * **Note: ** You can change the default paddings by adding the following CSS classes:
     * 	 - `sapUiContentPadding`
     * 	 - `sapUiNoContentPadding`
     * 	 - `sapUiResponsiveContentPadding`  For more information, see {@link topic:c71f6df62dae47ca8284310a6f5fc80a
     * 			Using Container Content Padding CSS Classes}.
     *
     * **Note:** The SAP Fiori Design guidelines require that the `DynamicPageHeader`'s content and the `DynamicPage`'s
     * content are aligned vertically. When using {@link sap.ui.layout.form.Form}, {@link sap.m.Panel}, {@link
     * sap.m.Table} and {@link sap.m.List} in the content area of `DynamicPage`, if the content is not already
     * aligned, you need to adjust their left text offset to achieve the vertical alignment. To do this, apply
     * the `sapFDynamicPageAlignContent` CSS class to them and set their `width` property to `auto` (if not
     * set by default).
     *
     * Example:
     *
     *
     * ```javascript
     *
     * ` <Panel class=“sapFDynamicPageAlignContent” width=“auto”></Panel> `
     * ```
     *
     *
     * Please keep in mind that the alignment is not possible in the following cases:
     * 	 -  When the controls are placed in an {@link sap.ui.layout.Grid} or other layout controls that use
     * 			`overflow:hidden` CSS property
     * 	 -  In case any of the following CSS classes is applied to `DynamicPage`: `sapUiContentPadding`, `sapUiNoContentPadding`
     * 			or `sapUiResponsiveContentPadding`
     */
    getContent(): Control;
    /**
     * Gets current value of property {@link #getFitContent fitContent}.
     *
     * Forces the content container of the `DynamicPage` to make room for stretchable controls in the `content`
     * aggregation to fill exactly the visible space between the header and the footer.
     *
     * **Notes:**
     * 	 - Enable this property only if the control of the `content` aggregation is configured to automatically
     * 			stretch to fill the available height, which means that the content would appear squashed in height when
     * 			this property is disabled. Such stretchable controls may be {@link sap.ui.table.Table} and {@link sap.ui.table.AnalyticalTable}
     * 			depending on their settings.
     * 	 - It is not recommended to enable this property for controls that do not stretch in height (and appear
     * 			properly when this property is disabled).
     *
     * Default value is `false`.
     *
     * @returns Value of property `fitContent`
     */
    getFitContent(): boolean;
    /**
     * Gets content of aggregation {@link #getFooter footer}.
     *
     * `DynamicPage` floating footer.
     */
    getFooter(): IBar;
    /**
     * Gets content of aggregation {@link #getHeader header}.
     *
     * `DynamicPage` header.
     */
    getHeader(): DynamicPageHeader;
    /**
     * Gets current value of property {@link #getHeaderExpanded headerExpanded}.
     *
     * Determines whether the header is expanded.
     *
     * The header can be also expanded/collapsed by user interaction, which requires the property to be internally
     * mutated by the control to reflect the changed state.
     *
     * **Note:** As of version 1.48, you can initialize the control in collapsed header state by setting this
     * property to `false`.
     *
     * Default value is `true`.
     *
     * @returns Value of property `headerExpanded`
     */
    getHeaderExpanded(): boolean;
    /**
     * @SINCE 1.93
     *
     * Gets current value of property {@link #getHeaderPinned headerPinned}.
     *
     * Determines whether the `DynamicPageHeader` is pinned.
     *
     * The property can be changed programmatically or in the occurrence of the following user interactions:
     *
     * 	 - Toggling the pin/unpin button of `DynamicPageHeader`
     * 	 - Snapping the `DynamicPageHeader` by explicitly clicking on the `DynamicPageTitle`
     *
     * **Note: ** The property will only apply if the header is effectively pinnable, i.e. if the following
     * conditions are met:
     * 	 - `DynamicPageHeader` `pinnable` property is `true`
     * 	 - `DynamicPageHeader` is expanded
     * 	 - `DynamicPage` `preserveHeaderStateOnScroll` property is effectively disabled
     *
     * Default value is `false`.
     *
     * @returns Value of property `headerPinned`
     */
    getHeaderPinned(): boolean;
    /**
     * @SINCE 1.61
     *
     * Gets content of aggregation {@link #getLandmarkInfo landmarkInfo}.
     *
     * Accessible landmark settings to be applied on the containers of the `sap.f.DynamicPage` control.
     *
     * If not set, no landmarks will be written.
     */
    getLandmarkInfo(): DynamicPageAccessibleLandmarkInfo;
    /**
     * Gets current value of property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.
     *
     * Preserves the current header state when scrolling. For example, if the user expands the header by clicking
     * on the title and then scrolls down the page, the header will remain expanded.
     *
     * **Note:** Based on internal rules, the value of the property is not always taken into account - for example,
     * when the control`s title and header are with height larger than the given threshold.
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
     * @SINCE 1.65
     *
     * ID of the element which is the current target of the association {@link #getStickySubheaderProvider stickySubheaderProvider},
     * or `null`.
     */
    getStickySubheaderProvider(): ID;
    /**
     * Gets content of aggregation {@link #getTitle title}.
     *
     * `DynamicPage` title.
     */
    getTitle(): DynamicPageTitle;
    /**
     * Gets current value of property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.
     *
     * Determines whether the user can switch between the expanded/collapsed states of the `DynamicPageHeader`
     * by clicking on the `DynamicPageTitle` or by using the expand/collapse visual indicators, positioned at
     * the bottom of the `DynamicPageTitle` and the `DynamicPageHeader`. If set to `false`, the `DynamicPageTitle`
     * is not clickable, the visual indicators are not available and the application must provide other means
     * for expanding/collapsing the `DynamicPageHeader`, if necessary.
     *
     * **Note: ** This property is taken into account only if a non-empty `header` aggregation is provided.
     *
     * Default value is `true`.
     *
     * @returns Value of property `toggleHeaderOnTitleClick`
     */
    getToggleHeaderOnTitleClick(): boolean;
    /**
     * @SINCE 1.68
     *
     * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
     *
     * Determines the background color of `DynamicPage`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Standard`.
     *
     * @returns Reference to `this` in order to allow method chaining
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
     * Sets the aggregated {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setContent(
      /**
       * The content to set
       */
      oContent: Control
    ): this;
    /**
     * Sets a new value for property {@link #getFitContent fitContent}.
     *
     * Forces the content container of the `DynamicPage` to make room for stretchable controls in the `content`
     * aggregation to fill exactly the visible space between the header and the footer.
     *
     * **Notes:**
     * 	 - Enable this property only if the control of the `content` aggregation is configured to automatically
     * 			stretch to fill the available height, which means that the content would appear squashed in height when
     * 			this property is disabled. Such stretchable controls may be {@link sap.ui.table.Table} and {@link sap.ui.table.AnalyticalTable}
     * 			depending on their settings.
     * 	 - It is not recommended to enable this property for controls that do not stretch in height (and appear
     * 			properly when this property is disabled).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFitContent(
      /**
       * New value for property `fitContent`
       */
      bFitContent?: boolean
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
      oFooter: IBar
    ): this;
    /**
     * Sets the aggregated {@link #getHeader header}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeader(
      /**
       * The header to set
       */
      oHeader: DynamicPageHeader
    ): this;
    /**
     * Sets a new value for property {@link #getHeaderExpanded headerExpanded}.
     *
     * Determines whether the header is expanded.
     *
     * The header can be also expanded/collapsed by user interaction, which requires the property to be internally
     * mutated by the control to reflect the changed state.
     *
     * **Note:** As of version 1.48, you can initialize the control in collapsed header state by setting this
     * property to `false`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderExpanded(
      /**
       * New value for property `headerExpanded`
       */
      bHeaderExpanded?: boolean
    ): this;
    /**
     * @SINCE 1.93
     *
     * Sets a new value for property {@link #getHeaderPinned headerPinned}.
     *
     * Determines whether the `DynamicPageHeader` is pinned.
     *
     * The property can be changed programmatically or in the occurrence of the following user interactions:
     *
     * 	 - Toggling the pin/unpin button of `DynamicPageHeader`
     * 	 - Snapping the `DynamicPageHeader` by explicitly clicking on the `DynamicPageTitle`
     *
     * **Note: ** The property will only apply if the header is effectively pinnable, i.e. if the following
     * conditions are met:
     * 	 - `DynamicPageHeader` `pinnable` property is `true`
     * 	 - `DynamicPageHeader` is expanded
     * 	 - `DynamicPage` `preserveHeaderStateOnScroll` property is effectively disabled
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderPinned(
      /**
       * New value for property `headerPinned`
       */
      bHeaderPinned?: boolean
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
      oLandmarkInfo: DynamicPageAccessibleLandmarkInfo
    ): this;
    /**
     * Sets a new value for property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.
     *
     * Preserves the current header state when scrolling. For example, if the user expands the header by clicking
     * on the title and then scrolls down the page, the header will remain expanded.
     *
     * **Note:** Based on internal rules, the value of the property is not always taken into account - for example,
     * when the control`s title and header are with height larger than the given threshold.
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
     * @SINCE 1.65
     *
     * Sets the associated {@link #getStickySubheaderProvider stickySubheaderProvider}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setStickySubheaderProvider(
      /**
       * ID of an element which becomes the new target of this stickySubheaderProvider association; alternatively,
       * an element instance may be given
       */
      oStickySubheaderProvider: ID | IDynamicPageStickyContent
    ): this;
    /**
     * Sets the aggregated {@link #getTitle title}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitle(
      /**
       * The title to set
       */
      oTitle: DynamicPageTitle
    ): this;
    /**
     * Sets a new value for property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.
     *
     * Determines whether the user can switch between the expanded/collapsed states of the `DynamicPageHeader`
     * by clicking on the `DynamicPageTitle` or by using the expand/collapse visual indicators, positioned at
     * the bottom of the `DynamicPageTitle` and the `DynamicPageHeader`. If set to `false`, the `DynamicPageTitle`
     * is not clickable, the visual indicators are not available and the application must provide other means
     * for expanding/collapsing the `DynamicPageHeader`, if necessary.
     *
     * **Note: ** This property is taken into account only if a non-empty `header` aggregation is provided.
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
  }

  export interface $DynamicPageSettings extends $ControlSettings {
    /**
     * Preserves the current header state when scrolling. For example, if the user expands the header by clicking
     * on the title and then scrolls down the page, the header will remain expanded.
     *
     * **Note:** Based on internal rules, the value of the property is not always taken into account - for example,
     * when the control`s title and header are with height larger than the given threshold.
     */
    preserveHeaderStateOnScroll?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the header is expanded.
     *
     * The header can be also expanded/collapsed by user interaction, which requires the property to be internally
     * mutated by the control to reflect the changed state.
     *
     * **Note:** As of version 1.48, you can initialize the control in collapsed header state by setting this
     * property to `false`.
     */
    headerExpanded?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.93
     *
     * Determines whether the `DynamicPageHeader` is pinned.
     *
     * The property can be changed programmatically or in the occurrence of the following user interactions:
     *
     * 	 - Toggling the pin/unpin button of `DynamicPageHeader`
     * 	 - Snapping the `DynamicPageHeader` by explicitly clicking on the `DynamicPageTitle`
     *
     * **Note: ** The property will only apply if the header is effectively pinnable, i.e. if the following
     * conditions are met:
     * 	 - `DynamicPageHeader` `pinnable` property is `true`
     * 	 - `DynamicPageHeader` is expanded
     * 	 - `DynamicPage` `preserveHeaderStateOnScroll` property is effectively disabled
     */
    headerPinned?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the user can switch between the expanded/collapsed states of the `DynamicPageHeader`
     * by clicking on the `DynamicPageTitle` or by using the expand/collapse visual indicators, positioned at
     * the bottom of the `DynamicPageTitle` and the `DynamicPageHeader`. If set to `false`, the `DynamicPageTitle`
     * is not clickable, the visual indicators are not available and the application must provide other means
     * for expanding/collapsing the `DynamicPageHeader`, if necessary.
     *
     * **Note: ** This property is taken into account only if a non-empty `header` aggregation is provided.
     */
    toggleHeaderOnTitleClick?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the footer is visible.
     */
    showFooter?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.68
     *
     * Determines the background color of `DynamicPage`.
     */
    backgroundDesign?:
      | (PageBackgroundDesign | keyof typeof PageBackgroundDesign)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Forces the content container of the `DynamicPage` to make room for stretchable controls in the `content`
     * aggregation to fill exactly the visible space between the header and the footer.
     *
     * **Notes:**
     * 	 - Enable this property only if the control of the `content` aggregation is configured to automatically
     * 			stretch to fill the available height, which means that the content would appear squashed in height when
     * 			this property is disabled. Such stretchable controls may be {@link sap.ui.table.Table} and {@link sap.ui.table.AnalyticalTable}
     * 			depending on their settings.
     * 	 - It is not recommended to enable this property for controls that do not stretch in height (and appear
     * 			properly when this property is disabled).
     */
    fitContent?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * `DynamicPage` title.
     */
    title?: DynamicPageTitle;

    /**
     * `DynamicPage` header.
     */
    header?: DynamicPageHeader;

    /**
     * `DynamicPage` content.
     *
     * **Note: ** You can change the default paddings by adding the following CSS classes:
     * 	 - `sapUiContentPadding`
     * 	 - `sapUiNoContentPadding`
     * 	 - `sapUiResponsiveContentPadding`  For more information, see {@link topic:c71f6df62dae47ca8284310a6f5fc80a
     * 			Using Container Content Padding CSS Classes}.
     *
     * **Note:** The SAP Fiori Design guidelines require that the `DynamicPageHeader`'s content and the `DynamicPage`'s
     * content are aligned vertically. When using {@link sap.ui.layout.form.Form}, {@link sap.m.Panel}, {@link
     * sap.m.Table} and {@link sap.m.List} in the content area of `DynamicPage`, if the content is not already
     * aligned, you need to adjust their left text offset to achieve the vertical alignment. To do this, apply
     * the `sapFDynamicPageAlignContent` CSS class to them and set their `width` property to `auto` (if not
     * set by default).
     *
     * Example:
     *
     *
     * ```javascript
     *
     * ` <Panel class=“sapFDynamicPageAlignContent” width=“auto”></Panel> `
     * ```
     *
     *
     * Please keep in mind that the alignment is not possible in the following cases:
     * 	 -  When the controls are placed in an {@link sap.ui.layout.Grid} or other layout controls that use
     * 			`overflow:hidden` CSS property
     * 	 -  In case any of the following CSS classes is applied to `DynamicPage`: `sapUiContentPadding`, `sapUiNoContentPadding`
     * 			or `sapUiResponsiveContentPadding`
     */
    content?: Control;

    /**
     * `DynamicPage` floating footer.
     */
    footer?: IBar;

    /**
     * @SINCE 1.61
     *
     * Accessible landmark settings to be applied on the containers of the `sap.f.DynamicPage` control.
     *
     * If not set, no landmarks will be written.
     */
    landmarkInfo?: DynamicPageAccessibleLandmarkInfo;

    /**
     * @SINCE 1.65
     *
     * Association of Controls / IDs, that provide sticky subheader content. All controls that provide this
     * content have to implement the `sap.f.IDynamicPageStickyContent` interface.
     */
    stickySubheaderProvider?: IDynamicPageStickyContent | string;

    /**
     * @SINCE 1.93
     *
     * The event is fired when the `headerPinned` property is changed via user interaction.
     */
    pinnedStateChange?: (oEvent: Event) => void;
  }
}

declare module "sap/f/DynamicPageAccessibleLandmarkInfo" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import { AccessibleLandmarkRole } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.61
   *
   * Settings for accessible landmarks which can be applied to the container elements of a `sap.f.DynamicPage`
   * control.
   *
   * These landmarks are used by assistive technologies (such as screen readers) to provide a meaningful page
   * overview.
   */
  export default class DynamicPageAccessibleLandmarkInfo extends UI5Element {
    /**
     * Constructor for a new `sap.f.DynamicPageAccessibleLandmarkInfo` element.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new element
       */
      mSettings?: $DynamicPageAccessibleLandmarkInfoSettings
    );
    /**
     * Constructor for a new `sap.f.DynamicPageAccessibleLandmarkInfo` element.
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
      mSettings?: $DynamicPageAccessibleLandmarkInfoSettings
    );

    /**
     * Creates a new subclass of class sap.f.DynamicPageAccessibleLandmarkInfo with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, DynamicPageAccessibleLandmarkInfo>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.DynamicPageAccessibleLandmarkInfo.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getContentLabel contentLabel}.
     *
     * Texts which describe the landmark of the content container of the corresponding `sap.f.DynamicPage` control.
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
     * Landmark role of the content container of the corresponding `sap.f.DynamicPage` control.
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
     * Texts which describe the landmark of the header container of the corresponding `sap.f.DynamicPage` control.
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
     * Landmark role of the footer container of the corresponding `sap.f.DynamicPage` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     *
     * Default value is `"None"`.
     *
     * @returns Value of property `footerRole`
     */
    getFooterRole():
      | AccessibleLandmarkRole
      | keyof typeof AccessibleLandmarkRole;
    /**
     * Gets current value of property {@link #getHeaderLabel headerLabel}.
     *
     * Texts which describe the landmark of the header container of the corresponding `sap.f.DynamicPage` control.
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
     * Landmark role of the header container of the corresponding `sap.f.DynamicPage` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     *
     * Default value is `"None"`.
     *
     * @returns Value of property `headerRole`
     */
    getHeaderRole():
      | AccessibleLandmarkRole
      | keyof typeof AccessibleLandmarkRole;
    /**
     * Gets current value of property {@link #getRootLabel rootLabel}.
     *
     * Texts which describe the landmark of the root container of the corresponding `sap.f.DynamicPage` control.
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
     * Landmark role of the root container of the corresponding `sap.f.DynamicPage` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     *
     * Default value is `"None"`.
     *
     * @returns Value of property `rootRole`
     */
    getRootRole(): AccessibleLandmarkRole | keyof typeof AccessibleLandmarkRole;
    /**
     * Sets a new value for property {@link #getContentLabel contentLabel}.
     *
     * Texts which describe the landmark of the content container of the corresponding `sap.f.DynamicPage` control.
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
     * Landmark role of the content container of the corresponding `sap.f.DynamicPage` control.
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
     * Texts which describe the landmark of the header container of the corresponding `sap.f.DynamicPage` control.
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
     * Landmark role of the footer container of the corresponding `sap.f.DynamicPage` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"None"`.
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
     * Texts which describe the landmark of the header container of the corresponding `sap.f.DynamicPage` control.
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
     * Landmark role of the header container of the corresponding `sap.f.DynamicPage` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"None"`.
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
     * Sets a new value for property {@link #getRootLabel rootLabel}.
     *
     * Texts which describe the landmark of the root container of the corresponding `sap.f.DynamicPage` control.
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
     * Landmark role of the root container of the corresponding `sap.f.DynamicPage` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"None"`.
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

  export interface $DynamicPageAccessibleLandmarkInfoSettings
    extends $ElementSettings {
    /**
     * Landmark role of the root container of the corresponding `sap.f.DynamicPage` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     */
    rootRole?:
      | (AccessibleLandmarkRole | keyof typeof AccessibleLandmarkRole)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Texts which describe the landmark of the root container of the corresponding `sap.f.DynamicPage` control.
     *
     * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), no label
     * is set.
     */
    rootLabel?: string | PropertyBindingInfo;

    /**
     * Landmark role of the content container of the corresponding `sap.f.DynamicPage` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     */
    contentRole?:
      | (AccessibleLandmarkRole | keyof typeof AccessibleLandmarkRole)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Texts which describe the landmark of the content container of the corresponding `sap.f.DynamicPage` control.
     *
     * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), no label
     * is set.
     */
    contentLabel?: string | PropertyBindingInfo;

    /**
     * Landmark role of the header container of the corresponding `sap.f.DynamicPage` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     */
    headerRole?:
      | (AccessibleLandmarkRole | keyof typeof AccessibleLandmarkRole)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Texts which describe the landmark of the header container of the corresponding `sap.f.DynamicPage` control.
     *
     * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), no label
     * is set.
     */
    headerLabel?: string | PropertyBindingInfo;

    /**
     * Landmark role of the footer container of the corresponding `sap.f.DynamicPage` control.
     *
     * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
     */
    footerRole?:
      | (AccessibleLandmarkRole | keyof typeof AccessibleLandmarkRole)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Texts which describe the landmark of the header container of the corresponding `sap.f.DynamicPage` control.
     *
     * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), no label
     * is set.
     */
    footerLabel?: string | PropertyBindingInfo;
  }
}

declare module "sap/f/DynamicPageHeader" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { BackgroundDesign } from "sap/m/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.42
   *
   * Header of the {@link sap.f.DynamicPage}.
   *
   * Overview:
   *
   * The `DynamicPageHeader` control is part of the {@link sap.f.DynamicPage} family and is used to serve
   * as header of the {@link sap.f.DynamicPage DynamicPage}.
   *
   * Usage:
   *
   * The `DynamicPageHeader` can hold any layout control and has two states - expanded and collapsed (snapped).
   * The switching between these states happens when:
   *
   *
   * 	 - the user scrolls below its bottom margin
   * 	 - the user clicks on the {@link sap.f.DynamicPageTitle DynamicPageTitle}
   * 	 - through the {@link sap.f.DynamicPage DynamicPage} property `headerExpanded`
   *
   * Responsive Behavior:
   *
   * The responsive behavior of the `DynamicPageHeader` depends on the behavior of the content that is displayed.
   */
  export default class DynamicPageHeader extends Control {
    /**
     * Constructor for a new `DynamicPageHeader`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $DynamicPageHeaderSettings
    );
    /**
     * Constructor for a new `DynamicPageHeader`.
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
      mSettings?: $DynamicPageHeaderSettings
    );

    /**
     * Creates a new subclass of class sap.f.DynamicPageHeader with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, DynamicPageHeader>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.DynamicPageHeader.
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
     * @SINCE 1.58
     *
     * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
     *
     * Determines the background color of the `DynamicPageHeader`.
     *
     * **Note:** The default value of `backgroundDesign` property is null. If the property is not set, the color
     * of the background is `@sapUiObjectHeaderBackground`, which depends on the specific theme.
     *
     * @returns Value of property `backgroundDesign`
     */
    getBackgroundDesign(): BackgroundDesign | keyof typeof BackgroundDesign;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * The content of the header.
     */
    getContent(): Control[];
    /**
     * Gets current value of property {@link #getPinnable pinnable}.
     *
     * Determines whether the header is pinnable.
     *
     * Default value is `true`.
     *
     * @returns Value of property `pinnable`
     */
    getPinnable(): boolean;
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
     * @SINCE 1.58
     *
     * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
     *
     * Determines the background color of the `DynamicPageHeader`.
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
     * Sets a new value for property {@link #getPinnable pinnable}.
     *
     * Determines whether the header is pinnable.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setPinnable(
      /**
       * New value for property `pinnable`
       */
      bPinnable?: boolean
    ): this;
  }

  export interface $DynamicPageHeaderSettings extends $ControlSettings {
    /**
     * Determines whether the header is pinnable.
     */
    pinnable?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.58
     *
     * Determines the background color of the `DynamicPageHeader`.
     *
     * **Note:** The default value of `backgroundDesign` property is null. If the property is not set, the color
     * of the background is `@sapUiObjectHeaderBackground`, which depends on the specific theme.
     */
    backgroundDesign?:
      | (BackgroundDesign | keyof typeof BackgroundDesign)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * The content of the header.
     */
    content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;
  }
}

declare module "sap/f/DynamicPageTitle" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID } from "sap/ui/core/library";

  import Button from "sap/m/Button";

  import Event from "sap/ui/base/Event";

  import {
    DynamicPageTitleShrinkRatio,
    DynamicPageTitleArea,
  } from "sap/f/library";

  import { BackgroundDesign, IBreadcrumbs } from "sap/m/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Title from "sap/m/Title";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.42
   *
   * Title of the {@link sap.f.DynamicPage}.
   *
   * Overview:
   *
   * The `DynamicPageTitle` control is part of the {@link sap.f.DynamicPage} family and is used to serve as
   * title of the {@link sap.f.DynamicPage DynamicPage}.
   *
   * Usage:
   *
   * The `DynamicPageTitle` can hold any control and displays the most important information regarding the
   * object that will always remain visible while scrolling.
   *
   * **Note:** The `actions` aggregation accepts any UI5 control, but it`s recommended to use controls, suitable
   * for {@link sap.m.Toolbar} and {@link sap.m.OverflowToolbar}.
   *
   * If the `toggleHeaderOnTitleClick` property of the {@link sap.f.DynamicPage DynamicPage} is set to `true`,
   * the user can switch between the expanded/collapsed states of the {@link sap.f.DynamicPageHeader DynamicPageHeader}
   * by clicking on the `DynamicPageTitle` or by using the expand/collapse visual indicators, positioned at
   * the bottom of the `DynamicPageTitle` and the `DynamicPageHeader`.
   *
   * If set to `false`, the `DynamicPageTitle` is not clickable, the visual indicators are not available,
   * and the app must provide other means for expanding/collapsing the `DynamicPageHeader`, if necessary.
   *
   * Responsive Behavior:
   *
   * The responsive behavior of the `DynamicPageTitle` depends on the behavior of the content that is displayed.
   */
  export default class DynamicPageTitle extends Control {
    /**
     * Constructor for a new `DynamicPageTitle`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $DynamicPageTitleSettings
    );
    /**
     * Constructor for a new `DynamicPageTitle`.
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
      mSettings?: $DynamicPageTitleSettings
    );

    /**
     * Creates a new subclass of class sap.f.DynamicPageTitle with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, DynamicPageTitle>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.DynamicPageTitle.
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
     * @SINCE 1.78
     *
     * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
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
     * @SINCE 1.50
     *
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
     * Adds some expandedContent to the aggregation {@link #getExpandedContent expandedContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addExpandedContent(
      /**
       * The expandedContent to add; if empty, nothing is inserted
       */
      oExpandedContent: Control
    ): this;
    /**
     * @SINCE 1.52
     *
     * Adds some navigationAction to the aggregation {@link #getNavigationActions navigationActions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addNavigationAction(
      /**
       * The navigationAction to add; if empty, nothing is inserted
       */
      oNavigationAction: Button
    ): this;
    /**
     * Adds some snappedContent to the aggregation {@link #getSnappedContent snappedContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addSnappedContent(
      /**
       * The snappedContent to add; if empty, nothing is inserted
       */
      oSnappedContent: Control
    ): this;
    /**
     * @SINCE 1.54
     *
     * Attaches event handler `fnFunction` to the {@link #event:stateChange stateChange} event of this `sap.f.DynamicPageTitle`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.DynamicPageTitle` itself.
     *
     * Fired when the title state (expanded/collapsed) is toggled by user interaction. For example, scrolling,
     * title clicking/tapping, using expand/collapse button.
     *
     * Also fired when the developer toggles the title state by programmatically changing the scroll position
     * of the scrollbar of `DynamicPage`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachStateChange(
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
       * Context object to call the event handler with. Defaults to this `sap.f.DynamicPageTitle` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.54
     *
     * Attaches event handler `fnFunction` to the {@link #event:stateChange stateChange} event of this `sap.f.DynamicPageTitle`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.DynamicPageTitle` itself.
     *
     * Fired when the title state (expanded/collapsed) is toggled by user interaction. For example, scrolling,
     * title clicking/tapping, using expand/collapse button.
     *
     * Also fired when the developer toggles the title state by programmatically changing the scroll position
     * of the scrollbar of `DynamicPage`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachStateChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.DynamicPageTitle` itself
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
     * @SINCE 1.52
     *
     * Destroys the breadcrumbs in the aggregation {@link #getBreadcrumbs breadcrumbs}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyBreadcrumbs(): this;
    /**
     * @SINCE 1.50
     *
     * Destroys all the content in the aggregation {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;
    /**
     * Destroys all the expandedContent in the aggregation {@link #getExpandedContent expandedContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyExpandedContent(): this;
    /**
     * @SINCE 1.52
     *
     * Destroys the expandedHeading in the aggregation {@link #getExpandedHeading expandedHeading}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyExpandedHeading(): this;
    /**
     * Destroys the heading in the aggregation {@link #getHeading heading}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyHeading(): this;
    /**
     * @SINCE 1.52
     *
     * Destroys all the navigationActions in the aggregation {@link #getNavigationActions navigationActions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyNavigationActions(): this;
    /**
     * Destroys all the snappedContent in the aggregation {@link #getSnappedContent snappedContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySnappedContent(): this;
    /**
     * @SINCE 1.52
     *
     * Destroys the snappedHeading in the aggregation {@link #getSnappedHeading snappedHeading}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySnappedHeading(): this;
    /**
     * @SINCE 1.63
     *
     * Destroys the snappedTitleOnMobile in the aggregation {@link #getSnappedTitleOnMobile snappedTitleOnMobile}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySnappedTitleOnMobile(): this;
    /**
     * @SINCE 1.54
     *
     * Detaches event handler `fnFunction` from the {@link #event:stateChange stateChange} event of this `sap.f.DynamicPageTitle`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachStateChange(
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
     * @SINCE 1.54
     *
     * Fires event {@link #event:stateChange stateChange} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireStateChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Whether the title was expanded (true) or collapsed (false).
         */
        isExpanded?: boolean;
      }
    ): this;
    /**
     * Gets content of aggregation {@link #getActions actions}.
     *
     * The `DynamicPageTitle` actions.
     * **Note:** The `actions` aggregation accepts any UI5 control, but it`s recommended to use controls, suitable
     * for {@link sap.m.Toolbar} and {@link sap.m.OverflowToolbar}.
     *
     * **Note:** If the `snappedTitleOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `DynamicPageHeader` is in its collapsed (snapped)
     * state.
     */
    getActions(): Control[];
    /**
     * @SINCE 1.54
     *
     * Gets current value of property {@link #getAreaShrinkRatio areaShrinkRatio}.
     *
     * Assigns shrinking ratio to the `DynamicPageTitle` areas (Heading, Content, Actions). The greater value
     * a section has the faster it shrinks when the screen size is being reduced.
     *
     * The value must be set in `Heading:Content:Actions` format where Title, Content and Actions are numbers
     * greater than or equal to 0. If set to 0, the respective area will not shrink.
     *
     * For example, if `2:7:1` is set, the Content area will shrink seven times faster than the Actions area.
     * So, when all three areas have width of 500px and the available space is reduced by 100px the Title area
     * will reduced by 20px, the Content area - by 70px and the Actions area - by 10px.
     *
     * If all the areas have assigned values greater than 1, the numbers are scaled so that at least one of
     * them is equal to 1. For example, value of `2:4:8` is equal to `1:2:4`.
     *
     *  When this property is set the `primaryArea` property has no effect.
     *
     * Default value is `"1:1.6:1.6"`.
     *
     * @returns Value of property `areaShrinkRatio`
     */
    getAreaShrinkRatio(): DynamicPageTitleShrinkRatio;
    /**
     * @SINCE 1.78
     *
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy
     * ariaDescribedBy}.
     */
    getAriaDescribedBy(): ID[];
    /**
     * @SINCE 1.58
     *
     * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
     *
     * Determines the background color of the `DynamicPageTitle`.
     *
     * **Note:** The default value of `backgroundDesign` property is null. If the property is not set, the color
     * of the background is `@sapUiObjectHeaderBackground`, which depends on the specific theme.
     *
     * @returns Value of property `backgroundDesign`
     */
    getBackgroundDesign(): BackgroundDesign | keyof typeof BackgroundDesign;
    /**
     * @SINCE 1.52
     *
     * Gets content of aggregation {@link #getBreadcrumbs breadcrumbs}.
     *
     * The breadcrumbs displayed in the `DynamicPageTitle` top-left area.
     */
    getBreadcrumbs(): IBreadcrumbs;
    /**
     * @SINCE 1.50
     *
     * Gets content of aggregation {@link #getContent content}.
     *
     * The content is positioned in the `DynamicPageTitle` middle area and displayed in both expanded and collapsed
     * (snapped) states.
     *
     * **Note:** If the `snappedTitleOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `DynamicPageHeader` is in its collapsed (snapped)
     * state.
     */
    getContent(): Control[];
    /**
     * Gets content of aggregation {@link #getExpandedContent expandedContent}.
     *
     * The content that is displayed in the `DynamicPageTitle` in expanded state.
     */
    getExpandedContent(): Control[];
    /**
     * @SINCE 1.52
     *
     * Gets content of aggregation {@link #getExpandedHeading expandedHeading}.
     *
     * The `expandedHeading` is positioned in the `DynamicPageTitle` left area and is displayed when the header
     * is in expanded state only. Use this aggregation to display a title (or any other UI5 control that serves
     * as a heading) that has to be present in expanded state only.
     *
     * **Note:** In order for `expandedHeading` to be taken into account, `heading` has to be empty. Combine
     * `expandedHeading` with `snappedHeading` to switch content when the header switches state.
     */
    getExpandedHeading(): Control;
    /**
     * Gets content of aggregation {@link #getHeading heading}.
     *
     * The `heading` is positioned in the `DynamicPageTitle` left area and is displayed in both expanded and
     * collapsed (snapped) states of the header. Use this aggregation to display a title (or any other UI5 control
     * that serves as a heading) that has to be present in both expanded and collapsed states of the header.
     *
     * **Notes:**
     * 	 - `heading` is mutually exclusive with `snappedHeading` and `expandedHeading`. If `heading` is provided,
     * 			both `snappedHeading` and `expandedHeading` are ignored. `heading` is useful when the content of `snappedHeading`
     * 			and `expandedHeading` needs to be the same as it replaces them both.
     * 	 - If the `snappedTitleOnMobile` aggregation is set, its content overrides this aggregation when the
     * 			control is viewed on a phone mobile device and the `DynamicPageHeader` is in its collapsed (snapped)
     * 			state.
     */
    getHeading(): Control;
    /**
     * @SINCE 1.52
     *
     * Gets content of aggregation {@link #getNavigationActions navigationActions}.
     *
     * The `DynamicPageTitle` navigation actions.
     *
     * **Notes:**
     * 	 - The `navigationActions` position depends on the control size. If the control size is 1280px or bigger,
     * 			they are rendered right next to the `actions`. Otherwise, they are rendered in the top-right area, above
     * 			the `actions`. If a large number of elements(buttons) are used, there could be visual degradations as
     * 			the space for the `navigationActions` is limited.
     * 	 - If the `snappedTitleOnMobile` aggregation is set, its content overrides this aggregation when the
     * 			control is viewed on a phone mobile device and the `DynamicPageHeader` is in its collapsed (snapped)
     * 			state.
     */
    getNavigationActions(): Button[];
    /**
     * @SINCE 1.50
     * @deprecated (since 1.54) - Please use the `areaShrinkRatio` property instead. The value of `areaShrinkRatio`
     * must be set in `Heading:Content:Actions` format where Heading, Content and Actions are numbers greater
     * than or equal to 0. The greater value a section has the faster it shrinks when the screen size is being
     * reduced.
     *
     * `primaryArea=Begin` can be achieved by setting a low number for the Heading area to `areaShrinkRatio`,
     * for example `1:1.6:1.6`.
     *
     * `primaryArea=Middle` can be achieved by setting a low number for the Content area to `areaShrinkRatio`,
     * for example `1.6:1:1.6`.
     *
     * Gets current value of property {@link #getPrimaryArea primaryArea}.
     *
     * Determines which of the `DynamicPageTitle` areas (Begin, Middle) is primary.
     *
     * **Note:** The primary area is shrinking at lower rate, remaining visible as much as it can.
     *
     * Default value is `Begin`.
     *
     * @returns Value of property `primaryArea`
     */
    getPrimaryArea(): DynamicPageTitleArea | keyof typeof DynamicPageTitleArea;
    /**
     * Gets content of aggregation {@link #getSnappedContent snappedContent}.
     *
     * The content that is displayed in the `DynamicPageTitle` in collapsed (snapped) state.
     *
     * **Note:** If the `snappedTitleOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `DynamicPageHeader` is in its collapsed (snapped)
     * state.
     */
    getSnappedContent(): Control[];
    /**
     * @SINCE 1.52
     *
     * Gets content of aggregation {@link #getSnappedHeading snappedHeading}.
     *
     * The `snappedHeading` is positioned in the `DynamicPageTitle` left area and is displayed when the header
     * is in collapsed (snapped) state only. Use this aggregation to display a title (or any other UI5 control
     * that serves as a heading) that has to be present in collapsed state only.
     *
     * **Notes:**
     * 	 - In order for `snappedHeading` to be taken into account, `heading` has to be empty. Combine `snappedHeading`
     * 			with `expandedHeading` to switch content when the header switches state.
     * 	 - If the `snappedTitleOnMobile` aggregation is set, its content overrides this aggregation when the
     * 			control is viewed on a phone mobile device and the `DynamicPageHeader` is in its collapsed (snapped)
     * 			state.
     */
    getSnappedHeading(): Control;
    /**
     * @SINCE 1.63
     *
     * Gets content of aggregation {@link #getSnappedTitleOnMobile snappedTitleOnMobile}.
     *
     * The only content that is displayed in the `DynamicPageTitle` when it is viewed on a phone mobile device
     * and the `DynamicPageHeader` is in collapsed (snapped) state.
     *
     * Using this aggregation enables you to provide a simple, single-line title that takes less space on the
     * smaller phone screens when the `DynamicPageHeader` is in its collapsed (snapped) state.
     *
     * **Note:** The content set in this aggregation overrides all the other `DynamicPageTitle` aggregations
     * and is only visible on phone mobile devices in collapsed (snapped) state of the `DynamicPageHeader`.
     */
    getSnappedTitleOnMobile(): Title;
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
     * @SINCE 1.50
     *
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
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getExpandedContent expandedContent}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfExpandedContent(
      /**
       * The expandedContent whose index is looked for
       */
      oExpandedContent: Control
    ): int;
    /**
     * @SINCE 1.52
     *
     * Checks for the provided `sap.m.Button` in the aggregation {@link #getNavigationActions navigationActions}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfNavigationAction(
      /**
       * The navigationAction whose index is looked for
       */
      oNavigationAction: Button
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getSnappedContent snappedContent}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfSnappedContent(
      /**
       * The snappedContent whose index is looked for
       */
      oSnappedContent: Control
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
     * @SINCE 1.50
     *
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
     * Inserts a expandedContent into the aggregation {@link #getExpandedContent expandedContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertExpandedContent(
      /**
       * The expandedContent to insert; if empty, nothing is inserted
       */
      oExpandedContent: Control,
      /**
       * The `0`-based index the expandedContent should be inserted at; for a negative value of `iIndex`, the
       * expandedContent is inserted at position 0; for a value greater than the current size of the aggregation,
       * the expandedContent is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * @SINCE 1.52
     *
     * Inserts a navigationAction into the aggregation {@link #getNavigationActions navigationActions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertNavigationAction(
      /**
       * The navigationAction to insert; if empty, nothing is inserted
       */
      oNavigationAction: Button,
      /**
       * The `0`-based index the navigationAction should be inserted at; for a negative value of `iIndex`, the
       * navigationAction is inserted at position 0; for a value greater than the current size of the aggregation,
       * the navigationAction is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a snappedContent into the aggregation {@link #getSnappedContent snappedContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertSnappedContent(
      /**
       * The snappedContent to insert; if empty, nothing is inserted
       */
      oSnappedContent: Control,
      /**
       * The `0`-based index the snappedContent should be inserted at; for a negative value of `iIndex`, the snappedContent
       * is inserted at position 0; for a value greater than the current size of the aggregation, the snappedContent
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
     * @SINCE 1.78
     *
     * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllAriaDescribedBy(): ID[];
    /**
     * @SINCE 1.50
     *
     * Removes all the controls from the aggregation {@link #getContent content}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllContent(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getExpandedContent expandedContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllExpandedContent(): Control[];
    /**
     * @SINCE 1.52
     *
     * Removes all the controls from the aggregation {@link #getNavigationActions navigationActions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllNavigationActions(): Button[];
    /**
     * Removes all the controls from the aggregation {@link #getSnappedContent snappedContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllSnappedContent(): Control[];
    /**
     * @SINCE 1.78
     *
     * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
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
     * @SINCE 1.50
     *
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
     * Removes a expandedContent from the aggregation {@link #getExpandedContent expandedContent}.
     *
     * @returns The removed expandedContent or `null`
     */
    removeExpandedContent(
      /**
       * The expandedContent to remove or its index or id
       */
      vExpandedContent: int | string | Control
    ): Control | null;
    /**
     * @SINCE 1.52
     *
     * Removes a navigationAction from the aggregation {@link #getNavigationActions navigationActions}.
     *
     * @returns The removed navigationAction or `null`
     */
    removeNavigationAction(
      /**
       * The navigationAction to remove or its index or id
       */
      vNavigationAction: int | string | Button
    ): Button | null;
    /**
     * Removes a snappedContent from the aggregation {@link #getSnappedContent snappedContent}.
     *
     * @returns The removed snappedContent or `null`
     */
    removeSnappedContent(
      /**
       * The snappedContent to remove or its index or id
       */
      vSnappedContent: int | string | Control
    ): Control | null;
    /**
     * @SINCE 1.54
     *
     * Sets the value of the `areaShrinkRatio` property.
     *
     * @returns `this` to allow method chaining
     */
    setAreaShrinkRatio(
      /**
       * new value of the `areaShrinkRatio`
       */
      sAreaShrinkRatio: DynamicPageTitleShrinkRatio
    ): this;
    /**
     * @SINCE 1.58
     *
     * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
     *
     * Determines the background color of the `DynamicPageTitle`.
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
     * @SINCE 1.52
     *
     * Sets the aggregated {@link #getBreadcrumbs breadcrumbs}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setBreadcrumbs(
      /**
       * The breadcrumbs to set
       */
      oBreadcrumbs: IBreadcrumbs
    ): this;
    /**
     * @SINCE 1.52
     *
     * Sets the aggregated {@link #getExpandedHeading expandedHeading}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setExpandedHeading(
      /**
       * The expandedHeading to set
       */
      oExpandedHeading: Control
    ): this;
    /**
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
     * @SINCE 1.50
     * @deprecated (since 1.54) - Please use the `areaShrinkRatio` property instead. The value of `areaShrinkRatio`
     * must be set in `Heading:Content:Actions` format where Heading, Content and Actions are numbers greater
     * than or equal to 0. The greater value a section has the faster it shrinks when the screen size is being
     * reduced.
     *
     * `primaryArea=Begin` can be achieved by setting a low number for the Heading area to `areaShrinkRatio`,
     * for example `1:1.6:1.6`.
     *
     * `primaryArea=Middle` can be achieved by setting a low number for the Content area to `areaShrinkRatio`,
     * for example `1.6:1:1.6`.
     *
     * Sets a new value for property {@link #getPrimaryArea primaryArea}.
     *
     * Determines which of the `DynamicPageTitle` areas (Begin, Middle) is primary.
     *
     * **Note:** The primary area is shrinking at lower rate, remaining visible as much as it can.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Begin`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setPrimaryArea(
      /**
       * New value for property `primaryArea`
       */
      sPrimaryArea?: DynamicPageTitleArea | keyof typeof DynamicPageTitleArea
    ): this;
    /**
     * @SINCE 1.52
     *
     * Sets the aggregated {@link #getSnappedHeading snappedHeading}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSnappedHeading(
      /**
       * The snappedHeading to set
       */
      oSnappedHeading: Control
    ): this;
    /**
     * @SINCE 1.63
     *
     * Sets the aggregated {@link #getSnappedTitleOnMobile snappedTitleOnMobile}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSnappedTitleOnMobile(
      /**
       * The snappedTitleOnMobile to set
       */
      oSnappedTitleOnMobile: Title
    ): this;
  }

  export interface $DynamicPageTitleSettings extends $ControlSettings {
    /**
     * @SINCE 1.50
     * @deprecated (since 1.54) - Please use the `areaShrinkRatio` property instead. The value of `areaShrinkRatio`
     * must be set in `Heading:Content:Actions` format where Heading, Content and Actions are numbers greater
     * than or equal to 0. The greater value a section has the faster it shrinks when the screen size is being
     * reduced.
     *
     * `primaryArea=Begin` can be achieved by setting a low number for the Heading area to `areaShrinkRatio`,
     * for example `1:1.6:1.6`.
     *
     * `primaryArea=Middle` can be achieved by setting a low number for the Content area to `areaShrinkRatio`,
     * for example `1.6:1:1.6`.
     *
     * Determines which of the `DynamicPageTitle` areas (Begin, Middle) is primary.
     *
     * **Note:** The primary area is shrinking at lower rate, remaining visible as much as it can.
     */
    primaryArea?:
      | (DynamicPageTitleArea | keyof typeof DynamicPageTitleArea)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * @SINCE 1.54
     *
     * Assigns shrinking ratio to the `DynamicPageTitle` areas (Heading, Content, Actions). The greater value
     * a section has the faster it shrinks when the screen size is being reduced.
     *
     * The value must be set in `Heading:Content:Actions` format where Title, Content and Actions are numbers
     * greater than or equal to 0. If set to 0, the respective area will not shrink.
     *
     * For example, if `2:7:1` is set, the Content area will shrink seven times faster than the Actions area.
     * So, when all three areas have width of 500px and the available space is reduced by 100px the Title area
     * will reduced by 20px, the Content area - by 70px and the Actions area - by 10px.
     *
     * If all the areas have assigned values greater than 1, the numbers are scaled so that at least one of
     * them is equal to 1. For example, value of `2:4:8` is equal to `1:2:4`.
     *
     *  When this property is set the `primaryArea` property has no effect.
     */
    areaShrinkRatio?:
      | DynamicPageTitleShrinkRatio
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * @SINCE 1.58
     *
     * Determines the background color of the `DynamicPageTitle`.
     *
     * **Note:** The default value of `backgroundDesign` property is null. If the property is not set, the color
     * of the background is `@sapUiObjectHeaderBackground`, which depends on the specific theme.
     */
    backgroundDesign?:
      | (BackgroundDesign | keyof typeof BackgroundDesign)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * The `heading` is positioned in the `DynamicPageTitle` left area and is displayed in both expanded and
     * collapsed (snapped) states of the header. Use this aggregation to display a title (or any other UI5 control
     * that serves as a heading) that has to be present in both expanded and collapsed states of the header.
     *
     * **Notes:**
     * 	 - `heading` is mutually exclusive with `snappedHeading` and `expandedHeading`. If `heading` is provided,
     * 			both `snappedHeading` and `expandedHeading` are ignored. `heading` is useful when the content of `snappedHeading`
     * 			and `expandedHeading` needs to be the same as it replaces them both.
     * 	 - If the `snappedTitleOnMobile` aggregation is set, its content overrides this aggregation when the
     * 			control is viewed on a phone mobile device and the `DynamicPageHeader` is in its collapsed (snapped)
     * 			state.
     */
    heading?: Control;

    /**
     * @SINCE 1.52
     *
     * The `snappedHeading` is positioned in the `DynamicPageTitle` left area and is displayed when the header
     * is in collapsed (snapped) state only. Use this aggregation to display a title (or any other UI5 control
     * that serves as a heading) that has to be present in collapsed state only.
     *
     * **Notes:**
     * 	 - In order for `snappedHeading` to be taken into account, `heading` has to be empty. Combine `snappedHeading`
     * 			with `expandedHeading` to switch content when the header switches state.
     * 	 - If the `snappedTitleOnMobile` aggregation is set, its content overrides this aggregation when the
     * 			control is viewed on a phone mobile device and the `DynamicPageHeader` is in its collapsed (snapped)
     * 			state.
     */
    snappedHeading?: Control;

    /**
     * @SINCE 1.52
     *
     * The `expandedHeading` is positioned in the `DynamicPageTitle` left area and is displayed when the header
     * is in expanded state only. Use this aggregation to display a title (or any other UI5 control that serves
     * as a heading) that has to be present in expanded state only.
     *
     * **Note:** In order for `expandedHeading` to be taken into account, `heading` has to be empty. Combine
     * `expandedHeading` with `snappedHeading` to switch content when the header switches state.
     */
    expandedHeading?: Control;

    /**
     * The `DynamicPageTitle` actions.
     * **Note:** The `actions` aggregation accepts any UI5 control, but it`s recommended to use controls, suitable
     * for {@link sap.m.Toolbar} and {@link sap.m.OverflowToolbar}.
     *
     * **Note:** If the `snappedTitleOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `DynamicPageHeader` is in its collapsed (snapped)
     * state.
     */
    actions?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.52
     *
     * The `DynamicPageTitle` navigation actions.
     *
     * **Notes:**
     * 	 - The `navigationActions` position depends on the control size. If the control size is 1280px or bigger,
     * 			they are rendered right next to the `actions`. Otherwise, they are rendered in the top-right area, above
     * 			the `actions`. If a large number of elements(buttons) are used, there could be visual degradations as
     * 			the space for the `navigationActions` is limited.
     * 	 - If the `snappedTitleOnMobile` aggregation is set, its content overrides this aggregation when the
     * 			control is viewed on a phone mobile device and the `DynamicPageHeader` is in its collapsed (snapped)
     * 			state.
     */
    navigationActions?:
      | Button[]
      | Button
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * @SINCE 1.50
     *
     * The content is positioned in the `DynamicPageTitle` middle area and displayed in both expanded and collapsed
     * (snapped) states.
     *
     * **Note:** If the `snappedTitleOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `DynamicPageHeader` is in its collapsed (snapped)
     * state.
     */
    content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * The content that is displayed in the `DynamicPageTitle` in collapsed (snapped) state.
     *
     * **Note:** If the `snappedTitleOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `DynamicPageHeader` is in its collapsed (snapped)
     * state.
     */
    snappedContent?:
      | Control[]
      | Control
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * The content that is displayed in the `DynamicPageTitle` in expanded state.
     */
    expandedContent?:
      | Control[]
      | Control
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * @SINCE 1.63
     *
     * The only content that is displayed in the `DynamicPageTitle` when it is viewed on a phone mobile device
     * and the `DynamicPageHeader` is in collapsed (snapped) state.
     *
     * Using this aggregation enables you to provide a simple, single-line title that takes less space on the
     * smaller phone screens when the `DynamicPageHeader` is in its collapsed (snapped) state.
     *
     * **Note:** The content set in this aggregation overrides all the other `DynamicPageTitle` aggregations
     * and is only visible on phone mobile devices in collapsed (snapped) state of the `DynamicPageHeader`.
     */
    snappedTitleOnMobile?: Title;

    /**
     * @SINCE 1.52
     *
     * The breadcrumbs displayed in the `DynamicPageTitle` top-left area.
     */
    breadcrumbs?: IBreadcrumbs;

    /**
     * @SINCE 1.78
     *
     * Association to controls / IDs which describe this control (see WAI-ARIA attribute aria-describedby).
     */
    ariaDescribedBy?: Array<Control | string>;

    /**
     * @SINCE 1.54
     *
     * Fired when the title state (expanded/collapsed) is toggled by user interaction. For example, scrolling,
     * title clicking/tapping, using expand/collapse button.
     *
     * Also fired when the developer toggles the title state by programmatically changing the scroll position
     * of the scrollbar of `DynamicPage`.
     */
    stateChange?: (oEvent: Event) => void;
  }
}

declare module "sap/f/FlexibleColumnLayout" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { IPlaceholderSupport, ID } from "sap/ui/core/library";

  import Event from "sap/ui/base/Event";

  import { LayoutType } from "sap/f/library";

  import { BackgroundDesign } from "sap/m/library";

  import FlexibleColumnLayoutAccessibleLandmarkInfo from "sap/f/FlexibleColumnLayoutAccessibleLandmarkInfo";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.46
   *
   * Implements the master-detail-detail paradigm by displaying up to three pages in separate columns.
   *
   * Overview:
   *
   * The control is logically similar to {@link sap.m.SplitContainer} with the difference that it capable
   * of handling three columns (referred to as `Begin`, `Mid` and `End`) rather than two (`Master`, `Detail`).
   * The width of the three columns is variable.
   *
   * There are several possible layouts that can be changed either with the control's API, or by the user
   * with the help of layout arrows.
   *
   * Internally the control makes use of three instances of {@link sap.m.NavContainer}, thus forming the three
   * columns.
   *
   * Usage:
   *
   * Use this control for applications that need to display several logical levels of related information
   * side by side (e.g. list of items, item, sub-item, etc.). The control is flexible in a sense that the
   * application can focus the user's attention on one particular column by making it larger or even fullscreen.
   *
   * The columns are accessible with the `beginColumnPages`, `midColumnPages` and `endColumnPages` aggregations.
   *
   * The relative sizes and the visibility of the three columns are determined based on the value of the {@link
   * sap.f.LayoutType layout} property.
   *
   * Changes to the layout due to user interaction are communicated to the app with the `stateChange` event.
   *
   * **Notes:**
   * 	 - To easily implement the recommended UX design of a `sap.f.FlexibleColumnLayout`-based app, you can
   * 			use the `sap.f.FlexibleColumnLayoutSemanticHelper` class.
   * 	 - To facilitate the navigation and view loading, you can use the {@link sap.f.routing.Router}
   *
   * Responsive Behavior:
   *
   * The control automatically displays the maximum possible number of columns based on the device size and
   * current `layout`. The app does not need to take into consideration the current device/screen size, but
   * only to add content to the columns and change the value of the `layout` property.
   *
   * For detailed information, see {@link sap.f.LayoutType LayoutType} enumeration.
   */
  export default class FlexibleColumnLayout
    extends Control
    implements IPlaceholderSupport {
    __implements__sap_ui_core_IPlaceholderSupport: boolean;
    /**
     * Constructor for a new `sap.f.FlexibleColumnLayout`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:59a0e11712e84a648bb990a1dba76bc7 Flexible Column Layout}
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/flexible-column-layout/ Flexible Column Layout}
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $FlexibleColumnLayoutSettings
    );
    /**
     * Constructor for a new `sap.f.FlexibleColumnLayout`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:59a0e11712e84a648bb990a1dba76bc7 Flexible Column Layout}
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/flexible-column-layout/ Flexible Column Layout}
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
     * Creates a new subclass of class sap.f.FlexibleColumnLayout with name `sClassName` and enriches it with
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
      oClassInfo?: sap.ClassInfo<T, FlexibleColumnLayout>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.FlexibleColumnLayout.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some beginColumnPage to the aggregation {@link #getBeginColumnPages beginColumnPages}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addBeginColumnPage(
      /**
       * The beginColumnPage to add; if empty, nothing is inserted
       */
      oBeginColumnPage: Control
    ): this;
    /**
     * Adds some endColumnPage to the aggregation {@link #getEndColumnPages endColumnPages}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addEndColumnPage(
      /**
       * The endColumnPage to add; if empty, nothing is inserted
       */
      oEndColumnPage: Control
    ): this;
    /**
     * Adds some midColumnPage to the aggregation {@link #getMidColumnPages midColumnPages}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addMidColumnPage(
      /**
       * The midColumnPage to add; if empty, nothing is inserted
       */
      oMidColumnPage: Control
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:afterBeginColumnNavigate afterBeginColumnNavigate}
     * event of this `sap.f.FlexibleColumnLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.FlexibleColumnLayout` itself.
     *
     * Fires when navigation between two pages in the `Begin` column has completed.
     *
     * NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachAfterBeginColumnNavigate(
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
       * Context object to call the event handler with. Defaults to this `sap.f.FlexibleColumnLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:afterBeginColumnNavigate afterBeginColumnNavigate}
     * event of this `sap.f.FlexibleColumnLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.FlexibleColumnLayout` itself.
     *
     * Fires when navigation between two pages in the `Begin` column has completed.
     *
     * NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachAfterBeginColumnNavigate(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.FlexibleColumnLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:afterEndColumnNavigate afterEndColumnNavigate}
     * event of this `sap.f.FlexibleColumnLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.FlexibleColumnLayout` itself.
     *
     * Fires when navigation between two pages in the `End` column has completed.
     *
     * NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachAfterEndColumnNavigate(
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
       * Context object to call the event handler with. Defaults to this `sap.f.FlexibleColumnLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:afterEndColumnNavigate afterEndColumnNavigate}
     * event of this `sap.f.FlexibleColumnLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.FlexibleColumnLayout` itself.
     *
     * Fires when navigation between two pages in the `End` column has completed.
     *
     * NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachAfterEndColumnNavigate(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.FlexibleColumnLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:afterMidColumnNavigate afterMidColumnNavigate}
     * event of this `sap.f.FlexibleColumnLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.FlexibleColumnLayout` itself.
     *
     * Fires when navigation between two pages in the `Mid` column has completed.
     *
     * NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachAfterMidColumnNavigate(
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
       * Context object to call the event handler with. Defaults to this `sap.f.FlexibleColumnLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:afterMidColumnNavigate afterMidColumnNavigate}
     * event of this `sap.f.FlexibleColumnLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.FlexibleColumnLayout` itself.
     *
     * Fires when navigation between two pages in the `Mid` column has completed.
     *
     * NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachAfterMidColumnNavigate(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.FlexibleColumnLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:beginColumnNavigate beginColumnNavigate} event
     * of this `sap.f.FlexibleColumnLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.FlexibleColumnLayout` itself.
     *
     * Fires when navigation between two pages in the `Begin` column has been triggered. The transition (if
     * any) to the new page has not started yet. This event can be aborted by the application with preventDefault(),
     * which means that there will be no navigation.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeginColumnNavigate(
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
       * Context object to call the event handler with. Defaults to this `sap.f.FlexibleColumnLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:beginColumnNavigate beginColumnNavigate} event
     * of this `sap.f.FlexibleColumnLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.FlexibleColumnLayout` itself.
     *
     * Fires when navigation between two pages in the `Begin` column has been triggered. The transition (if
     * any) to the new page has not started yet. This event can be aborted by the application with preventDefault(),
     * which means that there will be no navigation.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeginColumnNavigate(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.FlexibleColumnLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.76
     *
     * Attaches event handler `fnFunction` to the {@link #event:columnResize columnResize} event of this `sap.f.FlexibleColumnLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.FlexibleColumnLayout` itself.
     *
     * Fired when resize of each column has completed.
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
       * Context object to call the event handler with. Defaults to this `sap.f.FlexibleColumnLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.76
     *
     * Attaches event handler `fnFunction` to the {@link #event:columnResize columnResize} event of this `sap.f.FlexibleColumnLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.FlexibleColumnLayout` itself.
     *
     * Fired when resize of each column has completed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachColumnResize(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.FlexibleColumnLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:endColumnNavigate endColumnNavigate} event of
     * this `sap.f.FlexibleColumnLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.FlexibleColumnLayout` itself.
     *
     * Fires when navigation between two pages in the `End` column has been triggered. The transition (if any)
     * to the new page has not started yet. This event can be aborted by the application with preventDefault(),
     * which means that there will be no navigation.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachEndColumnNavigate(
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
       * Context object to call the event handler with. Defaults to this `sap.f.FlexibleColumnLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:endColumnNavigate endColumnNavigate} event of
     * this `sap.f.FlexibleColumnLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.FlexibleColumnLayout` itself.
     *
     * Fires when navigation between two pages in the `End` column has been triggered. The transition (if any)
     * to the new page has not started yet. This event can be aborted by the application with preventDefault(),
     * which means that there will be no navigation.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachEndColumnNavigate(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.FlexibleColumnLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:midColumnNavigate midColumnNavigate} event of
     * this `sap.f.FlexibleColumnLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.FlexibleColumnLayout` itself.
     *
     * Fires when navigation between two pages in the `Mid` column has been triggered. The transition (if any)
     * to the new page has not started yet. This event can be aborted by the application with preventDefault(),
     * which means that there will be no navigation.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMidColumnNavigate(
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
       * Context object to call the event handler with. Defaults to this `sap.f.FlexibleColumnLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:midColumnNavigate midColumnNavigate} event of
     * this `sap.f.FlexibleColumnLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.FlexibleColumnLayout` itself.
     *
     * Fires when navigation between two pages in the `Mid` column has been triggered. The transition (if any)
     * to the new page has not started yet. This event can be aborted by the application with preventDefault(),
     * which means that there will be no navigation.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMidColumnNavigate(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.FlexibleColumnLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:stateChange stateChange} event of this `sap.f.FlexibleColumnLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.FlexibleColumnLayout` itself.
     *
     * Fired when there is a change in the `layout` property or in the maximum number of columns that can be
     * displayed at once.
     *
     *  The interactions that may lead to a state change are:
     * 	 - the property `layout` was changed indirectly by the user clicking a layout arrow
     * 	 - the user resized the browser beyond a breakpoint, thus changing the maximum number of columns that
     * 			can be displayed at once.
     *
     *  **Note: **The event is suppressed while the control has zero width and will be fired the first time
     * it gets a non-zero width
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachStateChange(
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
       * Context object to call the event handler with. Defaults to this `sap.f.FlexibleColumnLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:stateChange stateChange} event of this `sap.f.FlexibleColumnLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.FlexibleColumnLayout` itself.
     *
     * Fired when there is a change in the `layout` property or in the maximum number of columns that can be
     * displayed at once.
     *
     *  The interactions that may lead to a state change are:
     * 	 - the property `layout` was changed indirectly by the user clicking a layout arrow
     * 	 - the user resized the browser beyond a breakpoint, thus changing the maximum number of columns that
     * 			can be displayed at once.
     *
     *  **Note: **The event is suppressed while the control has zero width and will be fired the first time
     * it gets a non-zero width
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachStateChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.FlexibleColumnLayout` itself
       */
      oListener?: object
    ): this;
    /**
     * Navigates back to a page in the `FlexibleColumnLayout`. Columns are scanned for the page in the following
     * order: `Begin`, `Mid`, `End`.
     *
     * Calling this navigation method, first triggers the (cancelable) navigate event on the SplitContainer,
     * then the BeforeHide pseudo event on the source page, BeforeFirstShow (if applicable), and BeforeShow
     * on the target page. Later, after the transition has completed, the AfterShow pseudo event is triggered
     * on the target page and AfterHide - on the page, which has been left. The given backData object is available
     * in the BeforeFirstShow, BeforeShow, and AfterShow event objects as data property. The original "data"
     * object from the "to" navigation is also available in these event objects.
     *
     * @returns The `sap.f.FlexibleColumnLayout` instance
     */
    backToPage(
      /**
       * The screen to which is being navigated to. The ID or the control itself can be given.
       */
      sPageId: string,
      /**
       * This optional object can carry any payload data which should be made available to the target page of
       * the back navigation. The event on the target page will contain this data object as backData property.
       * (the original data from the to() navigation will still be available as data property).
       *
       * In scenarios, where the entity triggering the navigation can't or shouldn't directly initialize the target
       * page, it can fill this object and the target page itself (or a listener on it) can take over the initialization,
       * using the given data. For back navigation this can be used, for example, when returning from a detail
       * page to transfer any settings done there.
       *
       * When the transitionParameters object is used, this data object must also be given (either as object or
       * as null) in order to have a proper parameter order.
       */
      oBackData: object,
      /**
       * This optional object can give additional information to the transition function, like the DOM element,
       * which triggered the transition or the desired transition duration. The animation type can NOT be selected
       * here - it is always the inverse of the "to" navigation.
       *
       * In order to use the transitionParameters property, the data property must be used (at least "null" must
       * be given) for a proper parameter order.
       *
       * NOTE: it depends on the transition function how the object should be structured and which parameters
       * are actually used to influence the transition.
       */
      oTransitionParameters: object
    ): this;
    /**
     * Navigates back to the initial/top level of Begin column (this is the element aggregated as "initialPage",
     * or the first added element). NOTE: If already on the initial page, nothing happens. The transition effect
     * which had been used to get to the current page is inverted and used for this navigation.
     *
     * @returns The `sap.f.FlexibleColumnLayout` instance
     */
    backToTopBeginColumn(
      /**
       * This optional object can carry any payload data which should be made available to the target page of
       * the back navigation. The event on the target page will contain this data object as "backData" property.
       * (The original data from the "to()" navigation will still be available as "data" property.)
       *
       * In scenarios where the entity triggering the navigation can or should not directly initialize the target
       * page, it can fill this object and the target page itself (or a listener on it) can take over the initialization,
       * using the given data. For back navigation this can be used e.g. when returning from a detail page to
       * transfer any settings done there.
       *
       * When the "transitionParameters" object is used, this "data" object must also be given (either as object
       * or as null) in order to have a proper parameter order.
       */
      oBackData: object,
      /**
       * This optional object can give additional information to the transition function, like the DOM element
       * which triggered the transition or the desired transition duration. The animation type can NOT be selected
       * here - it is always the inverse of the "to" navigation.
       *
       * In order to use the transitionParameters property, the data property must be used (at least "null" must
       * be given) for a proper parameter order.
       *
       * NOTE: it depends on the transition function how the object should be structured and which parameters
       * are actually used to influence the transition.
       */
      oTransitionParameters: object
    ): this;
    /**
     * Navigates back to the initial/top level of End column (this is the element aggregated as "initialPage",
     * or the first added element). NOTE: If already on the initial page, nothing happens. The transition effect
     * which had been used to get to the current page is inverted and used for this navigation.
     *
     * @returns The `sap.f.FlexibleColumnLayout` instance
     */
    backToTopEndColumn(
      /**
       * This optional object can carry any payload data which should be made available to the target page of
       * the back navigation. The event on the target page will contain this data object as "backData" property.
       * (The original data from the "to()" navigation will still be available as "data" property.)
       *
       * In scenarios where the entity triggering the navigation can or should not directly initialize the target
       * page, it can fill this object and the target page itself (or a listener on it) can take over the initialization,
       * using the given data. For back navigation this can be used e.g. when returning from a detail page to
       * transfer any settings done there.
       *
       * When the "transitionParameters" object is used, this "data" object must also be given (either as object
       * or as null) in order to have a proper parameter order.
       */
      oBackData: object,
      /**
       * This optional object can give additional information to the transition function, like the DOM element
       * which triggered the transition or the desired transition duration. The animation type can NOT be selected
       * here - it is always the inverse of the "to" navigation.
       *
       * In order to use the transitionParameters property, the data property must be used (at least "null" must
       * be given) for a proper parameter order.
       *
       * NOTE: it depends on the transition function how the object should be structured and which parameters
       * are actually used to influence the transition.
       */
      oTransitionParameters: object
    ): this;
    /**
     * Navigates back to the initial/top level of Mid column (this is the element aggregated as "initialPage",
     * or the first added element). NOTE: If already on the initial page, nothing happens. The transition effect
     * which had been used to get to the current page is inverted and used for this navigation.
     *
     * @returns The `sap.f.FlexibleColumnLayout` instance
     */
    backToTopMidColumn(
      /**
       * This optional object can carry any payload data which should be made available to the target page of
       * the back navigation. The event on the target page will contain this data object as "backData" property.
       * (The original data from the "to()" navigation will still be available as "data" property.)
       *
       * In scenarios where the entity triggering the navigation can or should not directly initialize the target
       * page, it can fill this object and the target page itself (or a listener on it) can take over the initialization,
       * using the given data. For back navigation this can be used e.g. when returning from a detail page to
       * transfer any settings done there.
       *
       * When the "transitionParameters" object is used, this "data" object must also be given (either as object
       * or as null) in order to have a proper parameter order.
       */
      oBackData: object,
      /**
       * This optional object can give additional information to the transition function, like the DOM element
       * which triggered the transition or the desired transition duration. The animation type can NOT be selected
       * here - it is always the inverse of the "to" navigation.
       *
       * In order to use the transitionParameters property, the data property must be used (at least "null" must
       * be given) for a proper parameter order.
       *
       * NOTE: it depends on the transition function how the object should be structured and which parameters
       * are actually used to influence the transition.
       */
      oTransitionParameters: object
    ): this;
    /**
     * Destroys all the beginColumnPages in the aggregation {@link #getBeginColumnPages beginColumnPages}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyBeginColumnPages(): this;
    /**
     * Destroys all the endColumnPages in the aggregation {@link #getEndColumnPages endColumnPages}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyEndColumnPages(): this;
    /**
     * @SINCE 1.95
     *
     * Destroys the landmarkInfo in the aggregation {@link #getLandmarkInfo landmarkInfo}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyLandmarkInfo(): this;
    /**
     * Destroys all the midColumnPages in the aggregation {@link #getMidColumnPages midColumnPages}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyMidColumnPages(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:afterBeginColumnNavigate afterBeginColumnNavigate}
     * event of this `sap.f.FlexibleColumnLayout`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachAfterBeginColumnNavigate(
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
     * Detaches event handler `fnFunction` from the {@link #event:afterEndColumnNavigate afterEndColumnNavigate}
     * event of this `sap.f.FlexibleColumnLayout`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachAfterEndColumnNavigate(
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
     * Detaches event handler `fnFunction` from the {@link #event:afterMidColumnNavigate afterMidColumnNavigate}
     * event of this `sap.f.FlexibleColumnLayout`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachAfterMidColumnNavigate(
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
     * Detaches event handler `fnFunction` from the {@link #event:beginColumnNavigate beginColumnNavigate} event
     * of this `sap.f.FlexibleColumnLayout`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachBeginColumnNavigate(
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
     * @SINCE 1.76
     *
     * Detaches event handler `fnFunction` from the {@link #event:columnResize columnResize} event of this `sap.f.FlexibleColumnLayout`.
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
     * Detaches event handler `fnFunction` from the {@link #event:endColumnNavigate endColumnNavigate} event
     * of this `sap.f.FlexibleColumnLayout`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachEndColumnNavigate(
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
     * Detaches event handler `fnFunction` from the {@link #event:midColumnNavigate midColumnNavigate} event
     * of this `sap.f.FlexibleColumnLayout`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachMidColumnNavigate(
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
     * Detaches event handler `fnFunction` from the {@link #event:stateChange stateChange} event of this `sap.f.FlexibleColumnLayout`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachStateChange(
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
     * Fires event {@link #event:afterBeginColumnNavigate afterBeginColumnNavigate} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireAfterBeginColumnNavigate(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The page, which had been displayed before navigation.
         */
        from?: Control;
        /**
         * The ID of the page, which had been displayed before navigation.
         */
        fromId?: string;
        /**
         * The page, which is now displayed after navigation.
         */
        to?: Control;
        /**
         * The ID of the page, which is now displayed after navigation.
         */
        toId?: string;
        /**
         * Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to)
         * has not been displayed/navigated to before.
         */
        firstTime?: boolean;
        /**
         * Determines whether was a forward navigation, triggered by to().
         */
        isTo?: boolean;
        /**
         * Determines whether this was a back navigation, triggered by back().
         */
        isBack?: boolean;
        /**
         * Determines whether this was a navigation to the root page, triggered by backToTop().
         */
        isBackToTop?: boolean;
        /**
         * Determines whether this was a navigation to a specific page, triggered by backToPage().
         */
        isBackToPage?: boolean;
        /**
         * Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
         */
        direction?: string;
      }
    ): this;
    /**
     * Fires event {@link #event:afterEndColumnNavigate afterEndColumnNavigate} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireAfterEndColumnNavigate(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The page, which had been displayed before navigation.
         */
        from?: Control;
        /**
         * The ID of the page, which had been displayed before navigation.
         */
        fromId?: string;
        /**
         * The page, which is now displayed after navigation.
         */
        to?: Control;
        /**
         * The ID of the page, which is now displayed after navigation.
         */
        toId?: string;
        /**
         * Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to)
         * has not been displayed/navigated to before.
         */
        firstTime?: boolean;
        /**
         * Determines whether was a forward navigation, triggered by to().
         */
        isTo?: boolean;
        /**
         * Determines whether this was a back navigation, triggered by back().
         */
        isBack?: boolean;
        /**
         * Determines whether this was a navigation to the root page, triggered by backToTop().
         */
        isBackToTop?: boolean;
        /**
         * Determines whether this was a navigation to a specific page, triggered by backToPage().
         */
        isBackToPage?: boolean;
        /**
         * Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
         */
        direction?: string;
      }
    ): this;
    /**
     * Fires event {@link #event:afterMidColumnNavigate afterMidColumnNavigate} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireAfterMidColumnNavigate(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The page, which had been displayed before navigation.
         */
        from?: Control;
        /**
         * The ID of the page, which had been displayed before navigation.
         */
        fromId?: string;
        /**
         * The page, which is now displayed after navigation.
         */
        to?: Control;
        /**
         * The ID of the page, which is now displayed after navigation.
         */
        toId?: string;
        /**
         * Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to)
         * has not been displayed/navigated to before.
         */
        firstTime?: boolean;
        /**
         * Determines whether was a forward navigation, triggered by to().
         */
        isTo?: boolean;
        /**
         * Determines whether this was a back navigation, triggered by back().
         */
        isBack?: boolean;
        /**
         * Determines whether this was a navigation to the root page, triggered by backToTop().
         */
        isBackToTop?: boolean;
        /**
         * Determines whether this was a navigation to a specific page, triggered by backToPage().
         */
        isBackToPage?: boolean;
        /**
         * Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
         */
        direction?: string;
      }
    ): this;
    /**
     * Fires event {@link #event:beginColumnNavigate beginColumnNavigate} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireBeginColumnNavigate(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The page, which was displayed before the current navigation.
         */
        from?: Control;
        /**
         * The ID of the page, which was displayed before the current navigation.
         */
        fromId?: string;
        /**
         * The page, which will be displayed after the current navigation.
         */
        to?: Control;
        /**
         * The ID of the page, which will be displayed after the current navigation.
         */
        toId?: string;
        /**
         * Determines whether the "to" page (more precisely: a control with the ID of the page, which is currently
         * being navigated to) has not been displayed/navigated to before.
         */
        firstTime?: boolean;
        /**
         * Determines whether this is a forward navigation, triggered by to().
         */
        isTo?: boolean;
        /**
         * Determines whether this is a back navigation, triggered by back().
         */
        isBack?: boolean;
        /**
         * Determines whether this is a navigation to the root page, triggered by backToTop().
         */
        isBackToTop?: boolean;
        /**
         * Determines whether this was a navigation to a specific page, triggered by backToPage().
         */
        isBackToPage?: boolean;
        /**
         * Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
         */
        direction?: string;
      }
    ): boolean;
    /**
     * @SINCE 1.76
     *
     * Fires event {@link #event:columnResize columnResize} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireColumnResize(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Determines whether `beginColumn` resize has completed.
         */
        beginColumn?: boolean;
        /**
         * Determines whether `midColumn` resize has completed.
         */
        midColumn?: boolean;
        /**
         * Determines whether `endColumn` resize has completed.
         */
        endColumn?: boolean;
      }
    ): this;
    /**
     * Fires event {@link #event:endColumnNavigate endColumnNavigate} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireEndColumnNavigate(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The page, which was displayed before the current navigation.
         */
        from?: Control;
        /**
         * The ID of the page, which was displayed before the current navigation.
         */
        fromId?: string;
        /**
         * The page, which will be displayed after the current navigation.
         */
        to?: Control;
        /**
         * The ID of the page, which will be displayed after the current navigation.
         */
        toId?: string;
        /**
         * Determines whether the "to" page (more precisely: a control with the ID of the page, which is currently
         * being navigated to) has not been displayed/navigated to before.
         */
        firstTime?: boolean;
        /**
         * Determines whether this is a forward navigation, triggered by to().
         */
        isTo?: boolean;
        /**
         * Determines whether this is a back navigation, triggered by back().
         */
        isBack?: boolean;
        /**
         * Determines whether this is a navigation to the root page, triggered by backToTop().
         */
        isBackToTop?: boolean;
        /**
         * Determines whether this was a navigation to a specific page, triggered by backToPage().
         */
        isBackToPage?: boolean;
        /**
         * Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
         */
        direction?: string;
      }
    ): boolean;
    /**
     * Fires event {@link #event:midColumnNavigate midColumnNavigate} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireMidColumnNavigate(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The page, which was displayed before the current navigation.
         */
        from?: Control;
        /**
         * The ID of the page, which was displayed before the current navigation.
         */
        fromId?: string;
        /**
         * The page, which will be displayed after the current navigation.
         */
        to?: Control;
        /**
         * The ID of the page, which will be displayed after the current navigation.
         */
        toId?: string;
        /**
         * Determines whether the "to" page (more precisely: a control with the ID of the page, which is currently
         * being navigated to) has not been displayed/navigated to before.
         */
        firstTime?: boolean;
        /**
         * Determines whether this is a forward navigation, triggered by to().
         */
        isTo?: boolean;
        /**
         * Determines whether this is a back navigation, triggered by back().
         */
        isBack?: boolean;
        /**
         * Determines whether this is a navigation to the root page, triggered by backToTop().
         */
        isBackToTop?: boolean;
        /**
         * Determines whether this was a navigation to a specific page, triggered by backToPage().
         */
        isBackToPage?: boolean;
        /**
         * Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
         */
        direction?: string;
      }
    ): boolean;
    /**
     * Fires event {@link #event:stateChange stateChange} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireStateChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The value of the `layout` property
         */
        layout?: LayoutType | keyof typeof LayoutType;
        /**
         * The maximum number of columns that can be displayed at once based on the available screen size and control
         * settings.
         *
         * Possible values are:
         * 	 - 3 for browser size of 1280px or more
         * 	 - 2 for browser size between 960px and 1280px
         * 	 - 1 for browser size less than 960px
         */
        maxColumnsCount?: int;
        /**
         * Indicates whether the layout changed as a result of the user clicking a layout arrow
         */
        isNavigationArrow?: boolean;
        /**
         * Indicates whether the maximum number of columns that can be displayed at once changed
         */
        isResize?: boolean;
      }
    ): this;
    /**
     * @SINCE 1.76
     *
     * Gets current value of property {@link #getAutoFocus autoFocus}.
     *
     * Determines whether the initial focus is set automatically on first rendering and after navigating to
     * a new page.
     *
     * For more information, see {@link sap.m.NavContainer#autoFocus}.
     *
     * Default value is `true`.
     *
     * @returns Value of property `autoFocus`
     */
    getAutoFocus(): boolean;
    /**
     * @SINCE 1.54
     *
     * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
     *
     * Specifies the background color of the content. The visualization of the different options depends on
     * the used theme.
     *
     * Default value is `Transparent`.
     *
     * @returns Value of property `backgroundDesign`
     */
    getBackgroundDesign(): BackgroundDesign | keyof typeof BackgroundDesign;
    /**
     * Gets content of aggregation {@link #getBeginColumnPages beginColumnPages}.
     *
     * The content entities between which the `FlexibleColumnLayout` navigates in the `Begin` column.
     *
     * These should be any control with page semantics. These aggregated controls will receive navigation events
     * like {@link sap.m.NavContainerChild#event:BeforeShow BeforeShow}, they are documented in the pseudo interface
     * {@link sap.m.NavContainerChild sap.m.NavContainerChild}.
     */
    getBeginColumnPages(): Control[];
    /**
     * Returns the currently displayed Begin column page.
     *
     * @returns The UI5 control in the Begin column
     */
    getCurrentBeginColumnPage(): Control;
    /**
     * Returns the currently displayed End column page.
     *
     * @returns The UI5 control in the End column
     */
    getCurrentEndColumnPage(): Control;
    /**
     * Returns the currently displayed Mid column page.
     *
     * @returns The UI5 control in the Mid column
     */
    getCurrentMidColumnPage(): Control;
    /**
     * Gets current value of property {@link #getDefaultTransitionNameBeginColumn defaultTransitionNameBeginColumn}.
     *
     * Determines the type of the transition/animation to apply for the `Begin` column when `to()` is called
     * without defining the transition to use. The default is `slide`, other options are `fade`, `flip`, `show`,
     * and the names of any registered custom transitions.
     *
     * Default value is `"slide"`.
     *
     * @returns Value of property `defaultTransitionNameBeginColumn`
     */
    getDefaultTransitionNameBeginColumn(): string;
    /**
     * Gets current value of property {@link #getDefaultTransitionNameEndColumn defaultTransitionNameEndColumn}.
     *
     * Determines the type of the transition/animation to apply for the `End` column when `to()` is called without
     * defining the transition to use. The default is `slide`, other options are `fade`, `flip`, `show`, and
     * the names of any registered custom transitions.
     *
     * Default value is `"slide"`.
     *
     * @returns Value of property `defaultTransitionNameEndColumn`
     */
    getDefaultTransitionNameEndColumn(): string;
    /**
     * Gets current value of property {@link #getDefaultTransitionNameMidColumn defaultTransitionNameMidColumn}.
     *
     * Determines the type of the transition/animation to apply for the `Mid` column when `to()` is called without
     * defining the transition to use. The default is `slide`, other options are `fade`, `flip`, `show`, and
     * the names of any registered custom transitions.
     *
     * Default value is `"slide"`.
     *
     * @returns Value of property `defaultTransitionNameMidColumn`
     */
    getDefaultTransitionNameMidColumn(): string;
    /**
     * Gets content of aggregation {@link #getEndColumnPages endColumnPages}.
     *
     * The content entities between which the `FlexibleColumnLayout` navigates in the `End` column.
     *
     * These should be any control with page semantics. These aggregated controls will receive navigation events
     * like {@link sap.m.NavContainerChild#event:BeforeShow BeforeShow}, they are documented in the pseudo interface
     * {@link sap.m.NavContainerChild sap.m.NavContainerChild}.
     */
    getEndColumnPages(): Control[];
    /**
     * ID of the element which is the current target of the association {@link #getInitialBeginColumnPage initialBeginColumnPage},
     * or `null`.
     */
    getInitialBeginColumnPage(): ID;
    /**
     * ID of the element which is the current target of the association {@link #getInitialEndColumnPage initialEndColumnPage},
     * or `null`.
     */
    getInitialEndColumnPage(): ID;
    /**
     * ID of the element which is the current target of the association {@link #getInitialMidColumnPage initialMidColumnPage},
     * or `null`.
     */
    getInitialMidColumnPage(): ID;
    /**
     * @SINCE 1.95
     *
     * Gets content of aggregation {@link #getLandmarkInfo landmarkInfo}.
     *
     * Accessible landmark settings to be applied on the containers of the `sap.f.FlexibleColumnLayout` control.
     *
     * If not set, no landmarks will be written.
     */
    getLandmarkInfo(): FlexibleColumnLayoutAccessibleLandmarkInfo;
    /**
     * Gets current value of property {@link #getLayout layout}.
     *
     * Determines the layout of the control - number of visible columns and their relative sizes.
     *
     * For more details, see {@link topic:3b9f760da5b64adf8db7f95247879086 Types of Layout} in the documentation.
     *
     * Default value is `OneColumn`.
     *
     * @returns Value of property `layout`
     */
    getLayout(): LayoutType | keyof typeof LayoutType;
    /**
     * Returns the maximum number of columns that can be displayed at once based on the control width
     *
     * @returns The maximum number of columns
     */
    getMaxColumnsCount(): number;
    /**
     * Gets content of aggregation {@link #getMidColumnPages midColumnPages}.
     *
     * The content entities between which the `FlexibleColumnLayout` navigates in the `Mid` column.
     *
     * These should be any control with page semantics. These aggregated controls will receive navigation events
     * like {@link sap.m.NavContainerChild#event:BeforeShow BeforeShow}, they are documented in the pseudo interface
     * {@link sap.m.NavContainerChild sap.m.NavContainerChild}.
     */
    getMidColumnPages(): Control[];
    /**
     * @SINCE 1.77
     *
     * Gets current value of property {@link #getRestoreFocusOnBackNavigation restoreFocusOnBackNavigation}.
     *
     * Determines whether the focus is restored to the last known when navigating back to a prevously opened
     * column, for example, upon closing of the end column and being transfered back to the mid column.
     *
     * Default value is `false`.
     *
     * @returns Value of property `restoreFocusOnBackNavigation`
     */
    getRestoreFocusOnBackNavigation(): boolean;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getBeginColumnPages beginColumnPages}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfBeginColumnPage(
      /**
       * The beginColumnPage whose index is looked for
       */
      oBeginColumnPage: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getEndColumnPages endColumnPages}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfEndColumnPage(
      /**
       * The endColumnPage whose index is looked for
       */
      oEndColumnPage: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getMidColumnPages midColumnPages}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfMidColumnPage(
      /**
       * The midColumnPage whose index is looked for
       */
      oMidColumnPage: Control
    ): int;
    /**
     * Inserts a beginColumnPage into the aggregation {@link #getBeginColumnPages beginColumnPages}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertBeginColumnPage(
      /**
       * The beginColumnPage to insert; if empty, nothing is inserted
       */
      oBeginColumnPage: Control,
      /**
       * The `0`-based index the beginColumnPage should be inserted at; for a negative value of `iIndex`, the
       * beginColumnPage is inserted at position 0; for a value greater than the current size of the aggregation,
       * the beginColumnPage is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a endColumnPage into the aggregation {@link #getEndColumnPages endColumnPages}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertEndColumnPage(
      /**
       * The endColumnPage to insert; if empty, nothing is inserted
       */
      oEndColumnPage: Control,
      /**
       * The `0`-based index the endColumnPage should be inserted at; for a negative value of `iIndex`, the endColumnPage
       * is inserted at position 0; for a value greater than the current size of the aggregation, the endColumnPage
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a midColumnPage into the aggregation {@link #getMidColumnPages midColumnPages}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertMidColumnPage(
      /**
       * The midColumnPage to insert; if empty, nothing is inserted
       */
      oMidColumnPage: Control,
      /**
       * The `0`-based index the midColumnPage should be inserted at; for a negative value of `iIndex`, the midColumnPage
       * is inserted at position 0; for a value greater than the current size of the aggregation, the midColumnPage
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getBeginColumnPages beginColumnPages}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllBeginColumnPages(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getEndColumnPages endColumnPages}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllEndColumnPages(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getMidColumnPages midColumnPages}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllMidColumnPages(): Control[];
    /**
     * Removes a beginColumnPage from the aggregation {@link #getBeginColumnPages beginColumnPages}.
     *
     * @returns The removed beginColumnPage or `null`
     */
    removeBeginColumnPage(
      /**
       * The beginColumnPage to remove or its index or id
       */
      vBeginColumnPage: int | string | Control
    ): Control | null;
    /**
     * Removes a endColumnPage from the aggregation {@link #getEndColumnPages endColumnPages}.
     *
     * @returns The removed endColumnPage or `null`
     */
    removeEndColumnPage(
      /**
       * The endColumnPage to remove or its index or id
       */
      vEndColumnPage: int | string | Control
    ): Control | null;
    /**
     * Removes a midColumnPage from the aggregation {@link #getMidColumnPages midColumnPages}.
     *
     * @returns The removed midColumnPage or `null`
     */
    removeMidColumnPage(
      /**
       * The midColumnPage to remove or its index or id
       */
      vMidColumnPage: int | string | Control
    ): Control | null;
    /**
     * @SINCE 1.76
     *
     * Sets a new value for property {@link #getAutoFocus autoFocus}.
     *
     * Determines whether the initial focus is set automatically on first rendering and after navigating to
     * a new page.
     *
     * For more information, see {@link sap.m.NavContainer#autoFocus}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAutoFocus(
      /**
       * New value for property `autoFocus`
       */
      bAutoFocus?: boolean
    ): this;
    /**
     * @SINCE 1.54
     *
     * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
     *
     * Specifies the background color of the content. The visualization of the different options depends on
     * the used theme.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Transparent`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setBackgroundDesign(
      /**
       * New value for property `backgroundDesign`
       */
      sBackgroundDesign?: BackgroundDesign | keyof typeof BackgroundDesign
    ): this;
    /**
     * Sets a new value for property {@link #getDefaultTransitionNameBeginColumn defaultTransitionNameBeginColumn}.
     *
     * Determines the type of the transition/animation to apply for the `Begin` column when `to()` is called
     * without defining the transition to use. The default is `slide`, other options are `fade`, `flip`, `show`,
     * and the names of any registered custom transitions.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"slide"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDefaultTransitionNameBeginColumn(
      /**
       * New value for property `defaultTransitionNameBeginColumn`
       */
      sDefaultTransitionNameBeginColumn?: string
    ): this;
    /**
     * Sets a new value for property {@link #getDefaultTransitionNameEndColumn defaultTransitionNameEndColumn}.
     *
     * Determines the type of the transition/animation to apply for the `End` column when `to()` is called without
     * defining the transition to use. The default is `slide`, other options are `fade`, `flip`, `show`, and
     * the names of any registered custom transitions.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"slide"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDefaultTransitionNameEndColumn(
      /**
       * New value for property `defaultTransitionNameEndColumn`
       */
      sDefaultTransitionNameEndColumn?: string
    ): this;
    /**
     * Sets a new value for property {@link #getDefaultTransitionNameMidColumn defaultTransitionNameMidColumn}.
     *
     * Determines the type of the transition/animation to apply for the `Mid` column when `to()` is called without
     * defining the transition to use. The default is `slide`, other options are `fade`, `flip`, `show`, and
     * the names of any registered custom transitions.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"slide"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDefaultTransitionNameMidColumn(
      /**
       * New value for property `defaultTransitionNameMidColumn`
       */
      sDefaultTransitionNameMidColumn?: string
    ): this;
    /**
     * Sets the associated {@link #getInitialBeginColumnPage initialBeginColumnPage}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setInitialBeginColumnPage(
      /**
       * ID of an element which becomes the new target of this initialBeginColumnPage association; alternatively,
       * an element instance may be given
       */
      oInitialBeginColumnPage: ID | Control
    ): this;
    /**
     * Sets the associated {@link #getInitialEndColumnPage initialEndColumnPage}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setInitialEndColumnPage(
      /**
       * ID of an element which becomes the new target of this initialEndColumnPage association; alternatively,
       * an element instance may be given
       */
      oInitialEndColumnPage: ID | Control
    ): this;
    /**
     * Sets the associated {@link #getInitialMidColumnPage initialMidColumnPage}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setInitialMidColumnPage(
      /**
       * ID of an element which becomes the new target of this initialMidColumnPage association; alternatively,
       * an element instance may be given
       */
      oInitialMidColumnPage: ID | Control
    ): this;
    /**
     * @SINCE 1.95
     *
     * Sets the aggregated {@link #getLandmarkInfo landmarkInfo}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLandmarkInfo(
      /**
       * The landmarkInfo to set
       */
      oLandmarkInfo: FlexibleColumnLayoutAccessibleLandmarkInfo
    ): this;
    /**
     * Sets a new value for property {@link #getLayout layout}.
     *
     * Determines the layout of the control - number of visible columns and their relative sizes.
     *
     * For more details, see {@link topic:3b9f760da5b64adf8db7f95247879086 Types of Layout} in the documentation.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `OneColumn`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLayout(
      /**
       * New value for property `layout`
       */
      sLayout?: LayoutType | keyof typeof LayoutType
    ): this;
    /**
     * @SINCE 1.77
     *
     * Sets a new value for property {@link #getRestoreFocusOnBackNavigation restoreFocusOnBackNavigation}.
     *
     * Determines whether the focus is restored to the last known when navigating back to a prevously opened
     * column, for example, upon closing of the end column and being transfered back to the mid column.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setRestoreFocusOnBackNavigation(
      /**
       * New value for property `restoreFocusOnBackNavigation`
       */
      bRestoreFocusOnBackNavigation?: boolean
    ): this;
    /**
     * Navigates to the given page inside the FlexibleColumnLayout. Columns are scanned for the page in the
     * following order: `Begin`, `Mid`, `End`.
     *
     * @returns The `sap.f.FlexibleColumnLayout` instance
     */
    to(
      /**
       * The screen to which we are navigating to. The ID or the control itself can be given.
       */
      sPageId: string,
      /**
       * The type of the transition/animation to apply. Options are: "slide" (horizontal movement from the right),
       * "fade", "flip", and "show" and the names of any registered custom transitions.
       *
       * None of the standard transitions is currently making use of any given transition parameters.
       */
      sTransitionName: string,
      /**
       * This optional object can carry any payload data which should be made available to the target page. The
       * BeforeShow event on the target page will contain this data object as data property.
       *
       * Use case: in scenarios where the entity triggering the navigation can or should not directly initialize
       * the target page, it can fill this object and the target page itself (or a listener on it) can take over
       * the initialization, using the given data.
       *
       * When the transitionParameters object is used, this "data" object must also be given (either as object
       * or as null) in order to have a proper parameter order.
       */
      oData: object,
      /**
       * This optional object can contain additional information for the transition function, like the DOM element
       * which triggered the transition or the desired transition duration.
       *
       * For a proper parameter order, the "data" parameter must be given when the transitionParameters parameter
       * is used (it can be given as "null").
       *
       * NOTE: It depends on the transition function how the object should be structured and which parameters
       * are actually used to influence the transition. The "show", "slide" and "fade" transitions do not use
       * any parameter.
       */
      oTransitionParameters: object
    ): this;
    /**
     * Navigates to the given page inside the FlexibleColumnLayout. Columns are scanned for the page in the
     * following order: `Begin`, `Mid`, `End`.
     *
     * @returns The `sap.f.FlexibleColumnLayout` instance
     */
    to(
      /**
       * The screen to which we are navigating to. The ID or the control itself can be given.
       */
      sPageId: string,
      /**
       * This optional object can carry any payload data which should be made available to the target page. The
       * BeforeShow event on the target page will contain this data object as data property.
       *
       * Use case: in scenarios where the entity triggering the navigation can or should not directly initialize
       * the target page, it can fill this object and the target page itself (or a listener on it) can take over
       * the initialization, using the given data.
       *
       * When the transitionParameters object is used, this "data" object must also be given (either as object
       * or as null) in order to have a proper parameter order.
       */
      oData: object,
      /**
       * This optional object can contain additional information for the transition function, like the DOM element
       * which triggered the transition or the desired transition duration.
       *
       * For a proper parameter order, the "data" parameter must be given when the transitionParameters parameter
       * is used (it can be given as "null").
       *
       * NOTE: It depends on the transition function how the object should be structured and which parameters
       * are actually used to influence the transition. The "show", "slide" and "fade" transitions do not use
       * any parameter.
       */
      oTransitionParameters: object
    ): this;
    /**
     * Navigates to a given Begin column page.
     *
     * @returns The `sap.f.FlexibleColumnLayout` instance
     */
    toBeginColumnPage(
      /**
       * The screen to which drilldown should happen. The ID or the control itself can be given.
       */
      sPageId: string,
      /**
       * The type of the transition/animation to apply. Options are: "slide" (horizontal movement from the right),
       * "fade", "flip", and "show" and the names of any registered custom transitions.
       *
       * None of the standard transitions is currently making use of any given transition parameters.
       */
      sTransitionName: string,
      /**
       * This optional object can carry any payload data which should be made available to the target page. The
       * BeforeShow event on the target page will contain this data object as data property.
       *
       * Use case: in scenarios where the entity triggering the navigation can't or shouldn't directly initialize
       * the target page, it can fill this object and the target page itself (or a listener on it) can take over
       * the initialization, using the given data.
       *
       * When the transitionParameters object is used, this data object must also be given (either as object or
       * as null) in order to have a proper parameter order.
       */
      oData: object,
      /**
       * This optional object can contain additional information for the transition function, like the DOM element,
       * which triggered the transition or the desired transition duration.
       *
       * For a proper parameter order, the data parameter must be given when the transitionParameters parameter
       * is used (it can be given as "null").
       *
       * NOTE: it depends on the transition function how the object should be structured and which parameters
       * are actually used to influence the transition. The "show", "slide" and "fade" transitions do not use
       * any parameter.
       */
      oTransitionParameters: object
    ): this;
    /**
     * Navigates to a given Begin column page.
     *
     * @returns The `sap.f.FlexibleColumnLayout` instance
     */
    toBeginColumnPage(
      /**
       * The screen to which drilldown should happen. The ID or the control itself can be given.
       */
      sPageId: string,
      /**
       * This optional object can carry any payload data which should be made available to the target page. The
       * BeforeShow event on the target page will contain this data object as data property.
       *
       * Use case: in scenarios where the entity triggering the navigation can't or shouldn't directly initialize
       * the target page, it can fill this object and the target page itself (or a listener on it) can take over
       * the initialization, using the given data.
       *
       * When the transitionParameters object is used, this data object must also be given (either as object or
       * as null) in order to have a proper parameter order.
       */
      oData: object,
      /**
       * This optional object can contain additional information for the transition function, like the DOM element,
       * which triggered the transition or the desired transition duration.
       *
       * For a proper parameter order, the data parameter must be given when the transitionParameters parameter
       * is used (it can be given as "null").
       *
       * NOTE: it depends on the transition function how the object should be structured and which parameters
       * are actually used to influence the transition. The "show", "slide" and "fade" transitions do not use
       * any parameter.
       */
      oTransitionParameters: object
    ): this;
    /**
     * Navigates to a given End column page.
     *
     * @returns The `sap.f.FlexibleColumnLayout` instance
     */
    toEndColumnPage(
      /**
       * The screen to which drilldown should happen. The ID or the control itself can be given.
       */
      sPageId: string,
      /**
       * The type of the transition/animation to apply. Options are: "slide" (horizontal movement from the right),
       * "fade", "flip", and "show" and the names of any registered custom transitions.
       *
       * None of the standard transitions is currently making use of any given transition parameters.
       */
      sTransitionName: string,
      /**
       * This optional object can carry any payload data which should be made available to the target page. The
       * BeforeShow event on the target page will contain this data object as data property.
       *
       * Use case: in scenarios where the entity triggering the navigation can't or shouldn't directly initialize
       * the target page, it can fill this object and the target page itself (or a listener on it) can take over
       * the initialization, using the given data.
       *
       * When the transitionParameters object is used, this data object must also be given (either as object or
       * as null) in order to have a proper parameter order.
       */
      oData: object,
      /**
       * This optional object can contain additional information for the transition function, like the DOM element,
       * which triggered the transition or the desired transition duration.
       *
       * For a proper parameter order, the data parameter must be given when the transitionParameters parameter
       * is used (it can be given as "null").
       *
       * NOTE: it depends on the transition function how the object should be structured and which parameters
       * are actually used to influence the transition. The "show", "slide" and "fade" transitions do not use
       * any parameter.
       */
      oTransitionParameters: object
    ): this;
    /**
     * Navigates to a given End column page.
     *
     * @returns The `sap.f.FlexibleColumnLayout` instance
     */
    toEndColumnPage(
      /**
       * The screen to which drilldown should happen. The ID or the control itself can be given.
       */
      sPageId: string,
      /**
       * This optional object can carry any payload data which should be made available to the target page. The
       * BeforeShow event on the target page will contain this data object as data property.
       *
       * Use case: in scenarios where the entity triggering the navigation can't or shouldn't directly initialize
       * the target page, it can fill this object and the target page itself (or a listener on it) can take over
       * the initialization, using the given data.
       *
       * When the transitionParameters object is used, this data object must also be given (either as object or
       * as null) in order to have a proper parameter order.
       */
      oData: object,
      /**
       * This optional object can contain additional information for the transition function, like the DOM element,
       * which triggered the transition or the desired transition duration.
       *
       * For a proper parameter order, the data parameter must be given when the transitionParameters parameter
       * is used (it can be given as "null").
       *
       * NOTE: it depends on the transition function how the object should be structured and which parameters
       * are actually used to influence the transition. The "show", "slide" and "fade" transitions do not use
       * any parameter.
       */
      oTransitionParameters: object
    ): this;
    /**
     * Navigates to a given Mid column page.
     *
     * @returns The `sap.f.FlexibleColumnLayout` instance
     */
    toMidColumnPage(
      /**
       * The screen to which drilldown should happen. The ID or the control itself can be given.
       */
      sPageId: string,
      /**
       * The type of the transition/animation to apply. Options are: "slide" (horizontal movement from the right),
       * "fade", "flip", and "show" and the names of any registered custom transitions.
       *
       * None of the standard transitions is currently making use of any given transition parameters.
       */
      sTransitionName: string,
      /**
       * This optional object can carry any payload data which should be made available to the target page. The
       * BeforeShow event on the target page will contain this data object as data property.
       *
       * Use case: in scenarios where the entity triggering the navigation can't or shouldn't directly initialize
       * the target page, it can fill this object and the target page itself (or a listener on it) can take over
       * the initialization, using the given data.
       *
       * When the transitionParameters object is used, this data object must also be given (either as object or
       * as null) in order to have a proper parameter order.
       */
      oData: object,
      /**
       * This optional object can contain additional information for the transition function, like the DOM element,
       * which triggered the transition or the desired transition duration.
       *
       * For a proper parameter order, the data parameter must be given when the transitionParameters parameter
       * is used (it can be given as "null").
       *
       * NOTE: it depends on the transition function how the object should be structured and which parameters
       * are actually used to influence the transition. The "show", "slide" and "fade" transitions do not use
       * any parameter.
       */
      oTransitionParameters: object
    ): this;
    /**
     * Navigates to a given Mid column page.
     *
     * @returns The `sap.f.FlexibleColumnLayout` instance
     */
    toMidColumnPage(
      /**
       * The screen to which drilldown should happen. The ID or the control itself can be given.
       */
      sPageId: string,
      /**
       * This optional object can carry any payload data which should be made available to the target page. The
       * BeforeShow event on the target page will contain this data object as data property.
       *
       * Use case: in scenarios where the entity triggering the navigation can't or shouldn't directly initialize
       * the target page, it can fill this object and the target page itself (or a listener on it) can take over
       * the initialization, using the given data.
       *
       * When the transitionParameters object is used, this data object must also be given (either as object or
       * as null) in order to have a proper parameter order.
       */
      oData: object,
      /**
       * This optional object can contain additional information for the transition function, like the DOM element,
       * which triggered the transition or the desired transition duration.
       *
       * For a proper parameter order, the data parameter must be given when the transitionParameters parameter
       * is used (it can be given as "null").
       *
       * NOTE: it depends on the transition function how the object should be structured and which parameters
       * are actually used to influence the transition. The "show", "slide" and "fade" transitions do not use
       * any parameter.
       */
      oTransitionParameters: object
    ): this;
  }

  export interface $FlexibleColumnLayoutSettings extends $ControlSettings {
    /**
     * @SINCE 1.76
     *
     * Determines whether the initial focus is set automatically on first rendering and after navigating to
     * a new page.
     *
     * For more information, see {@link sap.m.NavContainer#autoFocus}.
     */
    autoFocus?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines the layout of the control - number of visible columns and their relative sizes.
     *
     * For more details, see {@link topic:3b9f760da5b64adf8db7f95247879086 Types of Layout} in the documentation.
     */
    layout?:
      | (LayoutType | keyof typeof LayoutType)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines the type of the transition/animation to apply for the `Begin` column when `to()` is called
     * without defining the transition to use. The default is `slide`, other options are `fade`, `flip`, `show`,
     * and the names of any registered custom transitions.
     */
    defaultTransitionNameBeginColumn?: string | PropertyBindingInfo;

    /**
     * Determines the type of the transition/animation to apply for the `Mid` column when `to()` is called without
     * defining the transition to use. The default is `slide`, other options are `fade`, `flip`, `show`, and
     * the names of any registered custom transitions.
     */
    defaultTransitionNameMidColumn?: string | PropertyBindingInfo;

    /**
     * Determines the type of the transition/animation to apply for the `End` column when `to()` is called without
     * defining the transition to use. The default is `slide`, other options are `fade`, `flip`, `show`, and
     * the names of any registered custom transitions.
     */
    defaultTransitionNameEndColumn?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.54
     *
     * Specifies the background color of the content. The visualization of the different options depends on
     * the used theme.
     */
    backgroundDesign?:
      | (BackgroundDesign | keyof typeof BackgroundDesign)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * @SINCE 1.77
     *
     * Determines whether the focus is restored to the last known when navigating back to a prevously opened
     * column, for example, upon closing of the end column and being transfered back to the mid column.
     */
    restoreFocusOnBackNavigation?:
      | boolean
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * The content entities between which the `FlexibleColumnLayout` navigates in the `Begin` column.
     *
     * These should be any control with page semantics. These aggregated controls will receive navigation events
     * like {@link sap.m.NavContainerChild#event:BeforeShow BeforeShow}, they are documented in the pseudo interface
     * {@link sap.m.NavContainerChild sap.m.NavContainerChild}.
     */
    beginColumnPages?:
      | Control[]
      | Control
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * The content entities between which the `FlexibleColumnLayout` navigates in the `Mid` column.
     *
     * These should be any control with page semantics. These aggregated controls will receive navigation events
     * like {@link sap.m.NavContainerChild#event:BeforeShow BeforeShow}, they are documented in the pseudo interface
     * {@link sap.m.NavContainerChild sap.m.NavContainerChild}.
     */
    midColumnPages?:
      | Control[]
      | Control
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * The content entities between which the `FlexibleColumnLayout` navigates in the `End` column.
     *
     * These should be any control with page semantics. These aggregated controls will receive navigation events
     * like {@link sap.m.NavContainerChild#event:BeforeShow BeforeShow}, they are documented in the pseudo interface
     * {@link sap.m.NavContainerChild sap.m.NavContainerChild}.
     */
    endColumnPages?:
      | Control[]
      | Control
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * @SINCE 1.95
     *
     * Accessible landmark settings to be applied on the containers of the `sap.f.FlexibleColumnLayout` control.
     *
     * If not set, no landmarks will be written.
     */
    landmarkInfo?: FlexibleColumnLayoutAccessibleLandmarkInfo;

    /**
     * Sets the initial `Begin` column page, which is displayed on application launch.
     */
    initialBeginColumnPage?: Control | string;

    /**
     * Sets the initial `Mid` column page, which is displayed on application launch.
     */
    initialMidColumnPage?: Control | string;

    /**
     * Sets the initial `End` column page, which is displayed on application launch.
     */
    initialEndColumnPage?: Control | string;

    /**
     * Fired when there is a change in the `layout` property or in the maximum number of columns that can be
     * displayed at once.
     *
     *  The interactions that may lead to a state change are:
     * 	 - the property `layout` was changed indirectly by the user clicking a layout arrow
     * 	 - the user resized the browser beyond a breakpoint, thus changing the maximum number of columns that
     * 			can be displayed at once.
     *
     *  **Note: **The event is suppressed while the control has zero width and will be fired the first time
     * it gets a non-zero width
     */
    stateChange?: (oEvent: Event) => void;

    /**
     * Fires when navigation between two pages in the `Begin` column has been triggered. The transition (if
     * any) to the new page has not started yet. This event can be aborted by the application with preventDefault(),
     * which means that there will be no navigation.
     */
    beginColumnNavigate?: (oEvent: Event) => void;

    /**
     * Fires when navigation between two pages in the `Begin` column has completed.
     *
     * NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
     */
    afterBeginColumnNavigate?: (oEvent: Event) => void;

    /**
     * Fires when navigation between two pages in the `Mid` column has been triggered. The transition (if any)
     * to the new page has not started yet. This event can be aborted by the application with preventDefault(),
     * which means that there will be no navigation.
     */
    midColumnNavigate?: (oEvent: Event) => void;

    /**
     * Fires when navigation between two pages in the `Mid` column has completed.
     *
     * NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
     */
    afterMidColumnNavigate?: (oEvent: Event) => void;

    /**
     * Fires when navigation between two pages in the `End` column has been triggered. The transition (if any)
     * to the new page has not started yet. This event can be aborted by the application with preventDefault(),
     * which means that there will be no navigation.
     */
    endColumnNavigate?: (oEvent: Event) => void;

    /**
     * Fires when navigation between two pages in the `End` column has completed.
     *
     * NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
     */
    afterEndColumnNavigate?: (oEvent: Event) => void;

    /**
     * @SINCE 1.76
     *
     * Fired when resize of each column has completed.
     */
    columnResize?: (oEvent: Event) => void;
  }
}

declare module "sap/f/FlexibleColumnLayoutAccessibleLandmarkInfo" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.95
   *
   * Settings for accessible landmarks which can be applied to the container elements of a `sap.f.FlexibleColumnLayout`
   * control. For example, these landmarks are used by assistive technologies (such as screen readers) to
   * provide a meaningful columns overview.
   */
  export default class FlexibleColumnLayoutAccessibleLandmarkInfo extends UI5Element {
    /**
     * Constructor for a new `sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo` element.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new element
       */
      mSettings?: $FlexibleColumnLayoutAccessibleLandmarkInfoSettings
    );
    /**
     * Constructor for a new `sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo` element.
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
      mSettings?: $FlexibleColumnLayoutAccessibleLandmarkInfoSettings
    );

    /**
     * Creates a new subclass of class sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo with name `sClassName`
     * and enriches it with the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, FlexibleColumnLayoutAccessibleLandmarkInfo>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getFirstColumnBackArrowLabel firstColumnBackArrowLabel}.
     *
     * Text that describes the landmark of the back arrow of the first column in the corresponding `sap.f.FlexibleColumnLayout`
     * control.
     *
     * If not set, a predefined text is used.
     *
     * @returns Value of property `firstColumnBackArrowLabel`
     */
    getFirstColumnBackArrowLabel(): string;
    /**
     * Gets current value of property {@link #getFirstColumnLabel firstColumnLabel}.
     *
     * Text that describes the landmark of the first column of the corresponding `sap.f.FlexibleColumnLayout`
     * control.
     *
     * If not set, a predefined text is used.
     *
     * @returns Value of property `firstColumnLabel`
     */
    getFirstColumnLabel(): string;
    /**
     * Gets current value of property {@link #getLastColumnForwardArrowLabel lastColumnForwardArrowLabel}.
     *
     * Text that describes the landmark of forward arrow of the last column in the corresponding `sap.f.FlexibleColumnLayout`
     * control.
     *
     * If not set, a predefined text is used.
     *
     * @returns Value of property `lastColumnForwardArrowLabel`
     */
    getLastColumnForwardArrowLabel(): string;
    /**
     * Gets current value of property {@link #getLastColumnLabel lastColumnLabel}.
     *
     * Text that describes the landmark of the last column of the corresponding `sap.f.FlexibleColumnLayout`
     * control.
     *
     * If not set, a predefined text is used.
     *
     * @returns Value of property `lastColumnLabel`
     */
    getLastColumnLabel(): string;
    /**
     * Gets current value of property {@link #getMiddleColumnBackArrowLabel middleColumnBackArrowLabel}.
     *
     * Text that describes the landmark of back arrow of the middle column in the corresponding `sap.f.FlexibleColumnLayout`
     * control.
     *
     * If not set, a predefined text is used.
     *
     * @returns Value of property `middleColumnBackArrowLabel`
     */
    getMiddleColumnBackArrowLabel(): string;
    /**
     * Gets current value of property {@link #getMiddleColumnForwardArrowLabel middleColumnForwardArrowLabel}.
     *
     * Text that describes the landmark of forward arrow of the middle column in the corresponding `sap.f.FlexibleColumnLayout`
     * control.
     *
     * If not set, a predefined text is used.
     *
     * @returns Value of property `middleColumnForwardArrowLabel`
     */
    getMiddleColumnForwardArrowLabel(): string;
    /**
     * Gets current value of property {@link #getMiddleColumnLabel middleColumnLabel}.
     *
     * Text that describes the landmark of the middle column of the corresponding `sap.f.FlexibleColumnLayout`
     * control.
     *
     * If not set, a predefined text is used.
     *
     * @returns Value of property `middleColumnLabel`
     */
    getMiddleColumnLabel(): string;
    /**
     * Sets a new value for property {@link #getFirstColumnBackArrowLabel firstColumnBackArrowLabel}.
     *
     * Text that describes the landmark of the back arrow of the first column in the corresponding `sap.f.FlexibleColumnLayout`
     * control.
     *
     * If not set, a predefined text is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFirstColumnBackArrowLabel(
      /**
       * New value for property `firstColumnBackArrowLabel`
       */
      sFirstColumnBackArrowLabel?: string
    ): this;
    /**
     * Sets a new value for property {@link #getFirstColumnLabel firstColumnLabel}.
     *
     * Text that describes the landmark of the first column of the corresponding `sap.f.FlexibleColumnLayout`
     * control.
     *
     * If not set, a predefined text is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFirstColumnLabel(
      /**
       * New value for property `firstColumnLabel`
       */
      sFirstColumnLabel?: string
    ): this;
    /**
     * Sets a new value for property {@link #getLastColumnForwardArrowLabel lastColumnForwardArrowLabel}.
     *
     * Text that describes the landmark of forward arrow of the last column in the corresponding `sap.f.FlexibleColumnLayout`
     * control.
     *
     * If not set, a predefined text is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLastColumnForwardArrowLabel(
      /**
       * New value for property `lastColumnForwardArrowLabel`
       */
      sLastColumnForwardArrowLabel?: string
    ): this;
    /**
     * Sets a new value for property {@link #getLastColumnLabel lastColumnLabel}.
     *
     * Text that describes the landmark of the last column of the corresponding `sap.f.FlexibleColumnLayout`
     * control.
     *
     * If not set, a predefined text is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLastColumnLabel(
      /**
       * New value for property `lastColumnLabel`
       */
      sLastColumnLabel?: string
    ): this;
    /**
     * Sets a new value for property {@link #getMiddleColumnBackArrowLabel middleColumnBackArrowLabel}.
     *
     * Text that describes the landmark of back arrow of the middle column in the corresponding `sap.f.FlexibleColumnLayout`
     * control.
     *
     * If not set, a predefined text is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMiddleColumnBackArrowLabel(
      /**
       * New value for property `middleColumnBackArrowLabel`
       */
      sMiddleColumnBackArrowLabel?: string
    ): this;
    /**
     * Sets a new value for property {@link #getMiddleColumnForwardArrowLabel middleColumnForwardArrowLabel}.
     *
     * Text that describes the landmark of forward arrow of the middle column in the corresponding `sap.f.FlexibleColumnLayout`
     * control.
     *
     * If not set, a predefined text is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMiddleColumnForwardArrowLabel(
      /**
       * New value for property `middleColumnForwardArrowLabel`
       */
      sMiddleColumnForwardArrowLabel?: string
    ): this;
    /**
     * Sets a new value for property {@link #getMiddleColumnLabel middleColumnLabel}.
     *
     * Text that describes the landmark of the middle column of the corresponding `sap.f.FlexibleColumnLayout`
     * control.
     *
     * If not set, a predefined text is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMiddleColumnLabel(
      /**
       * New value for property `middleColumnLabel`
       */
      sMiddleColumnLabel?: string
    ): this;
  }

  export interface $FlexibleColumnLayoutAccessibleLandmarkInfoSettings
    extends $ElementSettings {
    /**
     * Text that describes the landmark of the first column of the corresponding `sap.f.FlexibleColumnLayout`
     * control.
     *
     * If not set, a predefined text is used.
     */
    firstColumnLabel?: string | PropertyBindingInfo;

    /**
     * Text that describes the landmark of the middle column of the corresponding `sap.f.FlexibleColumnLayout`
     * control.
     *
     * If not set, a predefined text is used.
     */
    middleColumnLabel?: string | PropertyBindingInfo;

    /**
     * Text that describes the landmark of the last column of the corresponding `sap.f.FlexibleColumnLayout`
     * control.
     *
     * If not set, a predefined text is used.
     */
    lastColumnLabel?: string | PropertyBindingInfo;

    /**
     * Text that describes the landmark of the back arrow of the first column in the corresponding `sap.f.FlexibleColumnLayout`
     * control.
     *
     * If not set, a predefined text is used.
     */
    firstColumnBackArrowLabel?: string | PropertyBindingInfo;

    /**
     * Text that describes the landmark of forward arrow of the middle column in the corresponding `sap.f.FlexibleColumnLayout`
     * control.
     *
     * If not set, a predefined text is used.
     */
    middleColumnForwardArrowLabel?: string | PropertyBindingInfo;

    /**
     * Text that describes the landmark of back arrow of the middle column in the corresponding `sap.f.FlexibleColumnLayout`
     * control.
     *
     * If not set, a predefined text is used.
     */
    middleColumnBackArrowLabel?: string | PropertyBindingInfo;

    /**
     * Text that describes the landmark of forward arrow of the last column in the corresponding `sap.f.FlexibleColumnLayout`
     * control.
     *
     * If not set, a predefined text is used.
     */
    lastColumnForwardArrowLabel?: string | PropertyBindingInfo;
  }
}

declare module "sap/f/FlexibleColumnLayoutSemanticHelper" {
  import FlexibleColumnLayout from "sap/f/FlexibleColumnLayout";

  import { LayoutType } from "sap/f/library";

  /**
   * @SINCE 1.46.0
   *
   * Helper class, facilitating the implementation of the recommended UX design of a `sap.f.FlexibleColumnLayout`-based
   * app.
   *
   * **Note:** Using this class is not mandatory in order to build an app with `sap.f.FlexibleColumnLayout`,
   * but exists for convenience only.
   *
   * The usage of `sap.f.FlexibleColumnLayoutSemanticHelper` revolves around two main methods:
   * 	 - `getCurrentUIState`Suggests which action buttons to show in each `sap.f.FlexibleColumnLayout` column,
   * 			based on the current control state (number and visibility of columns, layout, etc..)
   * 	 - `getNextUIState`Suggests which `layout` to use when navigating to another view level (e.g. from one
   * 			view to two views).
   *
   * Sample usage of the class:
   *
   *
   * ```javascript
   *
   *
   *  var helper = sap.f.FlexibleColumnLayoutSemanticHelper.getInstanceFor(myFlexibleColumnLayout);
   *  helper.getCurrentUIState();
   *  helper.getNextUIState(2);
   *  helper.getNextUIState(0);
   *
   * ```
   *
   *
   * Calling `getCurrentUIState()` will return information which action buttons (Close, FullScreen, ExitFullScreen)
   * must be currently shown in which column, according to UX guidelines, as well as to what layout clicking
   * them should lead.
   *
   * Calling `getNextUIState(2)` will return information about the expected layout and action buttons if the
   * application should display three views (master-detail-detail), based on the current state.
   *
   * Similarly, calling `getNextUIState(0)` will return information about the expected layout and action buttons
   * if the application should display the initial view only (master), based on the current state.
   *
   * For more information, see {@link sap.f.FlexibleColumnLayoutSemanticHelper#getCurrentUIState} and {@link
   * sap.f.FlexibleColumnLayoutSemanticHelper#getNextUIState}
   */
  export default class FlexibleColumnLayoutSemanticHelper {
    /**
     * Constructor for an sap.f.FlexibleColumnLayoutSemanticHelper.
     */
    constructor(
      /**
       * The `sap.f.FlexibleColumnLayout` object whose state will be manipulated.
       */
      oFlexibleColumnLayout: FlexibleColumnLayout,
      /**
       * Determines the rules that will be used by the helper.
       */
      oSettings: {
        /**
         * Determines what two-column layout type will be suggested by default: `sap.f.LayoutType.TwoColumnsBeginExpanded`
         * or `sap.f.LayoutType.TwoColumnsMidExpanded`.
         */
        defaultTwoColumnLayoutType?: LayoutType | keyof typeof LayoutType;
        /**
         * Determines what three-column layout type will be suggested by default: `sap.f.LayoutType.ThreeColumnsMidExpanded`
         * or `sap.f.LayoutType.ThreeColumnsEndExpanded`.
         */
        defaultThreeColumnLayoutType?: LayoutType | keyof typeof LayoutType;
        /**
         * Determines the maximum number of columns that will be displayed side by side.
         *
         * Possible values:
         *
         *
         * 	 - Value of `1` only single-column layouts will be suggested.
         *
         *
         * 	 - Value of `2` Up to 2-column layouts will be suggested.
         *
         *
         * 	 - Value of `3` (default) - Up to 3-column layouts will be suggested.
         */
        maxColumnsCount: int;
        /**
         * Determines whether a single-column or a 2-column layout will be suggested for logical level 0.
         *
         * Possible values:
         *
         *
         * 	 - Value of `1` (default) - A single-column layout will be suggested for logical level 0.
         *
         *
         * 	 - Value of `2` - A 2-column layout will be suggested for logical level 0.
         */
        initialColumnsCount: int;
        /**
         * **Deprecated as of version 1.50**, use `maxColumnsCount` param instead.
         *
         * Determines the suggested layout types: `Normal` (3-column layouts), `MasterDetail` (2-column layouts
         * for the first two pages, all other pages will open in fullscreen), and `SingleColumn` (one page at a
         * time only).
         */
        mode: string;
      }
    );

    /**
     * Returns an instance of the `sap.f.FlexibleColumnLayoutSemanticHelper` class for a given `sap.f.FlexibleColumnLayout`
     * object.
     *
     * @returns The `sap.f.FlexibleColumnLayoutSemanticHelper` instance
     */
    static getInstanceFor(
      /**
       * The `sap.f.FlexibleColumnLayout` object to get a semantic helper instance for
       */
      oFlexibleColumnLayout: FlexibleColumnLayout,
      /**
       * An optional settings object to be used when creating the instance. **Note:** will be considered only
       * for the first `getInstanceFor` call for the given `sap.f.FlexibleColumnLayout` object.
       */
      oSettings?: object
    ): FlexibleColumnLayoutSemanticHelper;
    /**
     * Returns an object describing the current state of the control and the expected action buttons for each
     * column.
     *
     * **Note:** This method relies on the internal `FlexibleColumnLayout` reference to be rendered in the DOM
     * tree. For convenience, use methods {@link sap.f.FlexibleColumnLayoutSemanticHelper#isDOMReady} and {@link
     * sap.f.FlexibleColumnLayoutSemanticHelper#whenDOMReady}.
     *
     * @returns The object describing the current UI state
     */
    getCurrentUIState(): UIState;
    /**
     * Returns the default layout types for the different numbers of columns.
     *
     * The returned object has the following fields:
     * 	 - defaultLayoutType - the layout that will be suggested by default when only 1 column needs to be shown
     *
     * 	 - defaultTwoColumnLayoutType - the layout that will be suggested by default when 2 columns have to
     * 			be shown side by side
     * 	 - defaultThreeColumnLayoutType - the layout that will be suggested by default when 3 columns have to
     * 			be shown side by side
     *
     * @returns The object describing the default layout types for the different numbers of columns
     */
    getDefaultLayouts(): object;
    /**
     * Returns an object, describing the state that the control will have after navigating to a different view
     * level.
     *
     * @returns The object describing the next UI state
     */
    getNextUIState(
      /**
       * the view level that should be represented. 0 means initial (master only), 1 - master-detail, 2 - master-detail-detail,
       * 3 and above - subsequent views
       */
      iNextLevel: int
    ): UIState;
    /**
     * @SINCE 1.72
     *
     * Returns `true` if internal `FlexibleColumnLayout` reference is rendered in the DOM tree.
     *
     * @returns true if the associated `FlexibleColumnLayout` is rendered
     */
    isDOMReady(): boolean;
    /**
     * @SINCE 1.72
     *
     * Abstract wrapper for {@link sap.f.FlexibleColumnLayoutSemanticHelper#isDOMReady}. Returns `true` if criteria
     * are met for the APIs in this helper to be used.
     *
     * @returns true if this helper's API reliability criteria are met
     */
    isReady(): boolean;
    /**
     * @SINCE 1.72
     *
     * Returns promise which can be used to find out when the internal `FlexibleColumnLayout` is rendered. This
     * is needed because methods in `FlexibleColumnLayout` rely on the control being rendered.
     *
     * @returns A promise that resolves after `FlexibleColumnLayout` is rendered
     */
    whenDOMReady(): Promise<any>;
    /**
     * @SINCE 1.72
     *
     * Returns promise which can be used to find out when internal criteria for this helper's API reliability
     * are met.
     *
     * @returns A promise that resolves after internal criteria are met
     */
    whenReady(): Promise<any>;
  }
  /**
   * The configuration of the navigation actions in the columns.
   */
  export type ColumnsNavigationActions = {
    /**
     * Configuration of the navigation actions of the mid column.
     */
    midColumn?: NavigationActionsTargets;
    /**
     * Configuration of the navigation actions of the end column.
     */
    endColumn?: NavigationActionsTargets;
  };

  /**
   * Represents the relative percentage sizes of all columns as integers.
   */
  export type ColumnsSizes = {
    /**
     * The relative percentage width of the begin column as integer.
     */
    beginColumn?: number;
    /**
     * The relative percentage width of the mid column as integer.
     */
    midColumn?: number;
    /**
     * The relative percentage width of the end column as integer.
     */
    endColumn?: number;
  };

  /**
   * Represents the visibility of the columns.
   */
  export type ColumnsVisibility = {
    /**
     * The visibility of the begin column.
     */
    beginColumn?: boolean;
    /**
     * The visibility of the mid column.
     */
    midColumn?: boolean;
    /**
     * The visibility of the end column.
     */
    endColumn?: boolean;
  };

  /**
   * Configures the target layouts of the navigation acion buttons in a column.
   */
  export type NavigationActionsTargets = {
    /**
     * The target {@link sap.f.FlexibleColumnLayout#getLayout layout} when the `fullscreen` navigation action
     * button is pressed. If null, then the respective action button should not be shown.
     */
    fullScreen?: string | null;
    /**
     * The target {@link sap.f.FlexibleColumnLayout#getLayout layout} when the `exitFullScreen` navigation action
     * button is pressed. If null, then the respective action button should not be shown.
     */
    exitFullScreen?: string | null;
    /**
     * The target {@link sap.f.FlexibleColumnLayout#getLayout layout} when the `closeColumn` navigation action
     * button is pressed. If null, then the respective action button should not be shown.
     */
    closeColumn?: string | null;
  };

  /**
   * Configuration of the state of the `FlexibleColumnLayout` control and the expected action buttons for
   * each column.
   *
   * Example value:
   *
   *
   * ```javascript
   *
   *
   *  {
   * 	   "layout":"ThreeColumnsMidExpanded",
   * 	   "maxColumnsCount":3,
   * 	   "columnsSizes":{
   * 		  "beginColumn":25,
   * 		  "midColumn":50,
   * 		  "endColumn":25
   * 	   },
   * 	   "columnsVisibility":{
   * 		  "beginColumn":true,
   * 		  "midColumn":true,
   * 		  "endColumn":true
   * 	   },
   * 	   "isFullScreen":false,
   * 	   "isLogicallyFullScreen":false,
   * 	   "actionButtonsInfo":{
   * 		  "midColumn":{
   * 			 "fullScreen":null,
   * 			 "exitFullScreen":null,
   * 			 "closeColumn":null
   * 		  },
   * 		  "endColumn":{
   * 			 "fullScreen":"EndColumnFullScreen",
   * 			 "exitFullScreen":null,
   * 			 "closeColumn":"TwoColumnsBeginExpanded"
   * 		  }
   * 	   }
   * 	}
   *
   *  ```
   */
  export type UIState = {
    /**
     * The value of the {@link sap.f.FlexibleColumnLayout#getLayout layout} property.
     */
    layout?: string;
    /**
     * The maximum number of columns that can be displayed at once based on the control width. See {@link sap.f.FlexibleColumnLayout#getMaxColumnsCount}
     */
    maxColumnsCount?: number;
    /**
     * Represents the relative percentage sizes of all columns as integers.
     */
    columnsSizes?: ColumnsSizes;
    /**
     * Represents the visibility of the columns.
     */
    columnsVisibility?: ColumnsVisibility;
    /**
     * The value is `true` if only one column is visible at the moment, `false` otherwise.
     *
     * **Note:** This may be due to small screen size (phone) or due to a layout, for which a single column
     * takes up the whole width.
     */
    isFullScreen?: boolean;
    /**
     * The value is `true` if the current `layout` is one of the following: `sap.f.LayoutType.OneColumn, sap.f.LayoutType.MidColumnFullScreen,
     * sap.f.LayoutType.EndColumnFullScreen`, `false` otherwise.
     *
     * **Note:** While `isFullScreen` can be `true` for any layout, due to small screen size, `isLogicallyFullScreen`
     * will only be `true` for the layout values, listed above.
     */
    isLogicallyFullScreen?: boolean;
    /**
     * The configuration of the navigation actions in the columns.
     */
    actionButtonsInfo?: ColumnsNavigationActions;
  };
}

declare module "sap/f/GridContainer" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { dnd, NavigationDirection } from "sap/f/library";

  import { ID, CSSSize } from "sap/ui/core/library";

  import Event from "sap/ui/base/Event";

  import GridContainerSettings from "sap/f/GridContainerSettings";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Item from "sap/ui/core/Item";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.65
   *
   * A layout container control used for aligning items with various sizes in a simple grid.
   *
   * Overview:
   *
   * The control is used to align tiles, cards and other controls in configuration, such as a home page or
   * a dashboard. It represents a grid layout with specific row and column sizes, in which the items can take
   * any number of rows and columns.
   *
   * The number of columns and rows each item takes can be configured with the use of the `{@link sap.f.GridContainerItemLayoutData}`.
   *
   * All rows have the same height and all columns have the same width. Their sizes can be configured with
   * the use of the `layout` aggregation and `{@link sap.f.GridContainerSettings}`.
   *
   * Usage:
   *
   * When to use
   * 	 - For aligning home page and dashboard items like Tiles and Cards in a simple grid system with equally
   * 			sized rows and columns.
   *
   * When not to use
   * 	 - If a more complex layout grid system, where columns and rows may vary in size, is needed.
   *
   * Example::
   * ```javascript
   *
   * <f:GridContainer>
   * 	<f:layout>
   * 		<f:GridContainerSettings rowSize="5rem" columnSize="5rem" gap="1rem" />
   * 	</f:layout>
   * 	<f:layoutS>
   * 		<f:GridContainerSettings rowSize="4rem" columnSize="4rem" gap="0.5rem" />
   * 	</f:layoutS>
   * 	<f:items>
   * 		<GenericTile header="Sales Fulfillment">
   * 			<layoutData>
   * 				<f:GridContainerItemLayoutData rows="2" columns="2" />
   * 			</layoutData>
   * 		</GenericTile>
   * 		<w:Card manifest="url-to-manifest">
   * 			<w:layoutData>
   * 				<f:GridContainerItemLayoutData rows="6" columns="3" />
   * 			</w:layoutData>
   * 		</w:Card>
   * 		<Panel>
   * 			<layoutData>
   * 				<f:GridContainerItemLayoutData columns="4" />
   * 			</layoutData>
   * 			<Text text="Sales information" />
   * 		</Panel>
   * 	</f:items>
   * </f:GridContainer>
   * ```
   *
   *
   * Drag and drop:: Drag and drop is enabled for the `GridContainer` with enhanced visualization and interaction,
   * better suited for grid items. This is configured by using the `{@link sap.f.dnd.GridDropInfo}`.
   *
   * Similar to the `{@link sap.ui.core.dnd.DropInfo}`, `{@link sap.f.dnd.GridDropInfo}` has to be added to
   * the `dragDropConfig` aggregation, by using `{@link sap.ui.core.Element#addDragDropConfig}`.
   *
   * Both `{@link sap.ui.core.dnd.DropInfo}` and `{@link sap.f.dnd.GridDropInfo}` can be used to configure
   * drag and drop. The difference is that the `{@link sap.f.dnd.GridDropInfo}` will provide a drop indicator,
   * which mimics the size of the dragged item and shows the potential drop position inside the grid.
   *
   * Drag and drop is enabled via keyboard using `Ctrl` + arrow keys (Windows) and `Control` + arrow keys
   * (Mac OS).
   *
   * Keyboard Navigation:: `GridContainer` provides support for two-dimensional keyboard navigation through
   * its contained controls. Navigating up/down or left/right using the arrow keys follows the configurable
   * two-dimensional grid mesh. This provides stable navigation paths in the cases when there are items of
   * different sizes. When the user presses an arrow key in a direction outward of the `GridContainer`, a
   * `borderReached` event will be fired. The implementation of the `borderReached` event allows the application
   * developer to control where the focus goes, and depending on the surrounding layout pass the focus to
   * a specific place in a neighboring `GridContainer` using the method {@link #focusItemByDirection}.
   */
  export default class GridContainer
    extends Control
    implements dnd.IGridDroppable {
    __implements__sap_f_dnd_IGridDroppable: boolean;
    /**
     * Constructor for a new `sap.f.GridContainer`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:cca5ee5d63ca44c89318f8496a58f9f2 Grid Container}
     * 	{@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}
     * 	{@link topic:5b46b03f024542ba802d99d67bc1a3f4 Cards}
     * 	{@link sap.f.dnd.GridDropInfo}
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $GridContainerSettings
    );
    /**
     * Constructor for a new `sap.f.GridContainer`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:cca5ee5d63ca44c89318f8496a58f9f2 Grid Container}
     * 	{@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}
     * 	{@link topic:5b46b03f024542ba802d99d67bc1a3f4 Cards}
     * 	{@link sap.f.dnd.GridDropInfo}
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $GridContainerSettings
    );

    /**
     * Creates a new subclass of class sap.f.GridContainer with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, GridContainer>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.GridContainer.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    addItem(
      /**
       * The item to add; if empty, nothing is inserted
       */
      oItem: Control
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:borderReached borderReached} event of this `sap.f.GridContainer`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.GridContainer` itself.
     *
     * Fires if the border of the visualizations is reached so that an application can react on this.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBorderReached(
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
       * Context object to call the event handler with. Defaults to this `sap.f.GridContainer` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:borderReached borderReached} event of this `sap.f.GridContainer`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.GridContainer` itself.
     *
     * Fires if the border of the visualizations is reached so that an application can react on this.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBorderReached(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.GridContainer` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:columnsChange columnsChange} event of this `sap.f.GridContainer`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.GridContainer` itself.
     *
     * Fired when the grid columns count is changed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachColumnsChange(
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
       * Context object to call the event handler with. Defaults to this `sap.f.GridContainer` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:columnsChange columnsChange} event of this `sap.f.GridContainer`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.GridContainer` itself.
     *
     * Fired when the grid columns count is changed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachColumnsChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.GridContainer` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:layoutChange layoutChange} event of this `sap.f.GridContainer`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.GridContainer` itself.
     *
     * Fired when the currently active GridSettings change.
     *
     * @returns Reference to `this` in order to allow method chaining
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
       * Context object to call the event handler with. Defaults to this `sap.f.GridContainer` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:layoutChange layoutChange} event of this `sap.f.GridContainer`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.GridContainer` itself.
     *
     * Fired when the currently active GridSettings change.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachLayoutChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.GridContainer` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;
    /**
     * Destroys the layout in the aggregation {@link #getLayout layout}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyLayout(): this;
    /**
     * Destroys the layoutL in the aggregation {@link #getLayoutL layoutL}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyLayoutL(): this;
    /**
     * Destroys the layoutM in the aggregation {@link #getLayoutM layoutM}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyLayoutM(): this;
    /**
     * Destroys the layoutS in the aggregation {@link #getLayoutS layoutS}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyLayoutS(): this;
    /**
     * Destroys the layoutXL in the aggregation {@link #getLayoutXL layoutXL}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyLayoutXL(): this;
    /**
     * @EXPERIMENTAL (since 1.71)
     *
     * Destroys the layoutXS in the aggregation {@link #getLayoutXS layoutXS}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyLayoutXS(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:borderReached borderReached} event of this
     * `sap.f.GridContainer`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachBorderReached(
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
     * Detaches event handler `fnFunction` from the {@link #event:columnsChange columnsChange} event of this
     * `sap.f.GridContainer`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachColumnsChange(
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
     * Detaches event handler `fnFunction` from the {@link #event:layoutChange layoutChange} event of this `sap.f.GridContainer`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
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
     * Fires event {@link #event:borderReached borderReached} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireBorderReached(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Event that leads to the focus change.
         */
        event?: jQuery.Event;
        /**
         * The navigation direction that is used to reach the border.
         */
        direction?: NavigationDirection | keyof typeof NavigationDirection;
        /**
         * The row index, from which the border is reached.
         */
        row?: int;
        /**
         * The column index, from which the border is reached.
         */
        column?: int;
      }
    ): this;
    /**
     * Fires event {@link #event:columnsChange columnsChange} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireColumnsChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The count of the gird columns.
         */
        columns?: int;
      }
    ): this;
    /**
     * Fires event {@link #event:layoutChange layoutChange} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireLayoutChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The name of the newly active layout.
         */
        layout?: string;
      }
    ): this;
    /**
     * @EXPERIMENTAL (since 1.81)
     *
     * Focuses the item on the given index. Should be called after successful drop operation.
     *
     * **Note:**Should not be called before the `GridContainer` has been rendered.
     */
    focusItem(
      /**
       * The index of the item, which will be focused.
       */
      iIndex: int
    ): void;
    /**
     * @EXPERIMENTAL (since 1.85)
     *
     * Focuses an item in the given direction - up, down, left or right, from the starting position specified
     * by row and column.
     *
     * If the direction is up or down, the method focuses the nearest item in the same column, located in the
     * specified direction.
     *
     * If the direction is left or right, the method focuses the nearest item at the same row, in the specified
     * direction.
     *
     * **Note:**Should be called after the rendering of `GridContainer` is ready.
     */
    focusItemByDirection(
      /**
       * The navigation direction.
       */
      sDirection: NavigationDirection | keyof typeof NavigationDirection,
      /**
       * The row index of the starting position.
       */
      iRow: int,
      /**
       * The column index of the starting position.
       */
      iColumn: int
    ): void;
    /**
     * Gets the `GridContainerSettings` for the current layout breakpoint.
     *
     * @returns The settings for the current layout
     */
    getActiveLayoutSettings(): GridContainerSettings;
    /**
     * @EXPERIMENTAL (since 1.66)
     *
     * Gets current value of property {@link #getAllowDenseFill allowDenseFill}.
     *
     * Increases the density when arranging the items. Smaller items will take up all of the available space,
     * ignoring their order.
     *
     * **Note:** The order of the items is ignored. An item which is normally at the bottom, can appear on top.
     *
     * Default value is `false`.
     *
     * @returns Value of property `allowDenseFill`
     */
    getAllowDenseFill(): boolean;
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy
     * ariaDescribedBy}.
     */
    getAriaDescribedBy(): ID[];
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
     * ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * Gets current value of property {@link #getContainerQuery containerQuery}.
     *
     * If set to `true` the current range (large, medium or small) is defined by the size of the container surrounding
     * the `GridContainer`, instead of the device screen size (media Query).
     *
     * Default value is `false`.
     *
     * @returns Value of property `containerQuery`
     */
    getContainerQuery(): boolean;
    /**
     * @EXPERIMENTAL (since 1.66)
     *
     * Gets current value of property {@link #getInlineBlockLayout inlineBlockLayout}.
     *
     * Makes the grid items act like an inline-block elements. They will be arranged in rows with height equal
     * to the highest item in the row.
     *
     * **Note:** If set to `true` the properties `rowSize` for grid layout, and `minRows` and `rows` per item
     * will be ignored.
     *
     * Default value is `false`.
     *
     * @returns Value of property `inlineBlockLayout`
     */
    getInlineBlockLayout(): boolean;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * The items contained by the control.
     */
    getItems(): Control[];
    /**
     * Gets content of aggregation {@link #getLayout layout}.
     *
     * The sap.f.GridContainerSettings applied if no settings are provided for a specific size.
     *
     * If no layout is given, a default layout will be used. See the default values for `sap.f.GridContainerSettings`.
     *
     * **Note:** It is not possible to reuse the same instance of `GridContainerSettings` for several layouts.
     * New instance has to be created for each of them. This is caused by the fact that one object can exist
     * in only a single aggregation.
     */
    getLayout(): GridContainerSettings;
    /**
     * Gets content of aggregation {@link #getLayoutL layoutL}.
     *
     * The sap.f.GridContainerSettings applied for size "L". Range: 1023px - 1439px.
     */
    getLayoutL(): GridContainerSettings;
    /**
     * Gets content of aggregation {@link #getLayoutM layoutM}.
     *
     * The sap.f.GridContainerSettings applied for size "M". Range: 600px - 1023px.
     */
    getLayoutM(): GridContainerSettings;
    /**
     * Gets content of aggregation {@link #getLayoutS layoutS}.
     *
     * The sap.f.GridContainerSettings applied for size "S". Range: 375px - 599px.
     */
    getLayoutS(): GridContainerSettings;
    /**
     * Gets content of aggregation {@link #getLayoutXL layoutXL}.
     *
     * The sap.f.GridContainerSettings applied for size "XL". Range: from 1440px.
     */
    getLayoutXL(): GridContainerSettings;
    /**
     * @EXPERIMENTAL (since 1.71)
     *
     * Gets content of aggregation {@link #getLayoutXS layoutXS}.
     *
     * The sap.f.GridContainerSettings applied for size "XS". Range: up to 374px.
     */
    getLayoutXS(): GridContainerSettings;
    /**
     * @EXPERIMENTAL (since 1.81)
     *
     * Gets current value of property {@link #getMinHeight minHeight}.
     *
     * Defines the minimum height of the grid.
     *
     * Allows an empty grid to be available as a drop target.
     *
     * Default value is `"2rem"`.
     *
     * @returns Value of property `minHeight`
     */
    getMinHeight(): CSSSize;
    /**
     * Gets current value of property {@link #getSnapToRow snapToRow}.
     *
     * Should the items stretch to fill the rows that they occupy, or not.
     *
     * If set to `true` the items will stretch.
     *
     * Default value is `false`.
     *
     * @returns Value of property `snapToRow`
     */
    getSnapToRow(): boolean;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Defines the width of the control.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getItems items}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: Control
    ): int;
    /**
     * Inserts an item into the aggregation named `items`.
     *
     * @returns `this` to allow method chaining.
     */
    insertItem(
      /**
       * The item to be inserted; if empty, nothing is inserted.
       */
      oItem: Item,
      /**
       * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
       * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
       * the last position.
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllAriaDescribedBy(): ID[];
    /**
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): Control[];
    /**
     * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
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
     * @returns The removed ariaLabelledBy or `null`
     */
    removeAriaLabelledBy(
      /**
       * The ariaLabelledBy to be removed or its index or ID
       */
      vAriaLabelledBy: int | ID | Control
    ): ID | null;
    /**
     * Removes an item from the aggregation named `items`.
     *
     * @returns The removed item or `null`.
     */
    removeItem(
      /**
       * The item to remove or its index or ID.
       */
      vItem: int | string | Item
    ): Control | null;
    /**
     * @EXPERIMENTAL (since 1.66)
     *
     * Sets a new value for property {@link #getAllowDenseFill allowDenseFill}.
     *
     * Increases the density when arranging the items. Smaller items will take up all of the available space,
     * ignoring their order.
     *
     * **Note:** The order of the items is ignored. An item which is normally at the bottom, can appear on top.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAllowDenseFill(
      /**
       * New value for property `allowDenseFill`
       */
      bAllowDenseFill?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getContainerQuery containerQuery}.
     *
     * If set to `true` the current range (large, medium or small) is defined by the size of the container surrounding
     * the `GridContainer`, instead of the device screen size (media Query).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setContainerQuery(
      /**
       * New value for property `containerQuery`
       */
      bContainerQuery?: boolean
    ): this;
    /**
     * @EXPERIMENTAL (since 1.66)
     *
     * Sets a new value for property {@link #getInlineBlockLayout inlineBlockLayout}.
     *
     * Makes the grid items act like an inline-block elements. They will be arranged in rows with height equal
     * to the highest item in the row.
     *
     * **Note:** If set to `true` the properties `rowSize` for grid layout, and `minRows` and `rows` per item
     * will be ignored.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setInlineBlockLayout(
      /**
       * New value for property `inlineBlockLayout`
       */
      bInlineBlockLayout?: boolean
    ): this;
    /**
     * Sets the aggregated {@link #getLayout layout}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLayout(
      /**
       * The layout to set
       */
      oLayout: GridContainerSettings
    ): this;
    /**
     * Sets the aggregated {@link #getLayoutL layoutL}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLayoutL(
      /**
       * The layoutL to set
       */
      oLayoutL: GridContainerSettings
    ): this;
    /**
     * Sets the aggregated {@link #getLayoutM layoutM}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLayoutM(
      /**
       * The layoutM to set
       */
      oLayoutM: GridContainerSettings
    ): this;
    /**
     * Sets the aggregated {@link #getLayoutS layoutS}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLayoutS(
      /**
       * The layoutS to set
       */
      oLayoutS: GridContainerSettings
    ): this;
    /**
     * Sets the aggregated {@link #getLayoutXL layoutXL}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLayoutXL(
      /**
       * The layoutXL to set
       */
      oLayoutXL: GridContainerSettings
    ): this;
    /**
     * @EXPERIMENTAL (since 1.71)
     *
     * Sets the aggregated {@link #getLayoutXS layoutXS}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLayoutXS(
      /**
       * The layoutXS to set
       */
      oLayoutXS: GridContainerSettings
    ): this;
    /**
     * @EXPERIMENTAL (since 1.81)
     *
     * Sets a new value for property {@link #getMinHeight minHeight}.
     *
     * Defines the minimum height of the grid.
     *
     * Allows an empty grid to be available as a drop target.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"2rem"`.
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
     * Sets a new value for property {@link #getSnapToRow snapToRow}.
     *
     * Should the items stretch to fill the rows that they occupy, or not.
     *
     * If set to `true` the items will stretch.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSnapToRow(
      /**
       * New value for property `snapToRow`
       */
      bSnapToRow?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Defines the width of the control.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
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

  export interface $GridContainerSettings extends $ControlSettings {
    /**
     * Defines the width of the control.
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * @EXPERIMENTAL (since 1.81)
     *
     * Defines the minimum height of the grid.
     *
     * Allows an empty grid to be available as a drop target.
     */
    minHeight?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * If set to `true` the current range (large, medium or small) is defined by the size of the container surrounding
     * the `GridContainer`, instead of the device screen size (media Query).
     */
    containerQuery?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Should the items stretch to fill the rows that they occupy, or not.
     *
     * If set to `true` the items will stretch.
     */
    snapToRow?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @EXPERIMENTAL (since 1.66)
     *
     * Increases the density when arranging the items. Smaller items will take up all of the available space,
     * ignoring their order.
     *
     * **Note:** The order of the items is ignored. An item which is normally at the bottom, can appear on top.
     */
    allowDenseFill?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @EXPERIMENTAL (since 1.66)
     *
     * Makes the grid items act like an inline-block elements. They will be arranged in rows with height equal
     * to the highest item in the row.
     *
     * **Note:** If set to `true` the properties `rowSize` for grid layout, and `minRows` and `rows` per item
     * will be ignored.
     */
    inlineBlockLayout?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The items contained by the control.
     */
    items?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * The sap.f.GridContainerSettings applied if no settings are provided for a specific size.
     *
     * If no layout is given, a default layout will be used. See the default values for `sap.f.GridContainerSettings`.
     *
     * **Note:** It is not possible to reuse the same instance of `GridContainerSettings` for several layouts.
     * New instance has to be created for each of them. This is caused by the fact that one object can exist
     * in only a single aggregation.
     */
    layout?: GridContainerSettings;

    /**
     * @EXPERIMENTAL (since 1.71)
     *
     * The sap.f.GridContainerSettings applied for size "XS". Range: up to 374px.
     */
    layoutXS?: GridContainerSettings;

    /**
     * The sap.f.GridContainerSettings applied for size "S". Range: 375px - 599px.
     */
    layoutS?: GridContainerSettings;

    /**
     * The sap.f.GridContainerSettings applied for size "M". Range: 600px - 1023px.
     */
    layoutM?: GridContainerSettings;

    /**
     * The sap.f.GridContainerSettings applied for size "L". Range: 1023px - 1439px.
     */
    layoutL?: GridContainerSettings;

    /**
     * The sap.f.GridContainerSettings applied for size "XL". Range: from 1440px.
     */
    layoutXL?: GridContainerSettings;

    /**
     * Association to controls / IDs which describe this control (see WAI-ARIA attribute aria-describedby).
     */
    ariaDescribedBy?: Array<Control | string>;

    /**
     * Association to controls / IDs which label this control (see WAI-ARIA attribute aria-labelledby).
     */
    ariaLabelledBy?: Array<Control | string>;

    /**
     * Fired when the currently active GridSettings change.
     */
    layoutChange?: (oEvent: Event) => void;

    /**
     * Fired when the grid columns count is changed.
     */
    columnsChange?: (oEvent: Event) => void;

    /**
     * Fires if the border of the visualizations is reached so that an application can react on this.
     */
    borderReached?: (oEvent: Event) => void;
  }
}

declare module "sap/f/GridContainerItemLayoutData" {
  import {
    default as LayoutData,
    $LayoutDataSettings,
  } from "sap/ui/core/LayoutData";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.65
   * @EXPERIMENTAL (since 1.65)
   *
   * Holds layout data for an item inside a `sap.f.GridContainer`.
   */
  export default class GridContainerItemLayoutData extends LayoutData {
    /**
     * Constructor for a new `sap.f.GridContainerItemLayoutData`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}
     */
    constructor(
      /**
       * Initial settings for the new element.
       */
      mSettings?: $GridContainerItemLayoutDataSettings
    );
    /**
     * Constructor for a new `sap.f.GridContainerItemLayoutData`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}
     */
    constructor(
      /**
       * ID for the new element, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new element.
       */
      mSettings?: $GridContainerItemLayoutDataSettings
    );

    /**
     * Creates a new subclass of class sap.f.GridContainerItemLayoutData with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, GridContainerItemLayoutData>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.GridContainerItemLayoutData.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getColumns columns}.
     *
     * Specifies the number of columns, which the item should take
     *
     * **Note:** Make sure that the item does not have more columns than the total columns in the grid. Use
     * {@link sap.f.GridContainer#attachLayoutChange} or a resize listener to handle when columns count is changed
     * for the grid. If item has more columns at some point, they will be automatically reduced to the total
     * grid columns. This is done to prevent broken layout (grid blowout) that affects all items.
     *
     * Default value is `1`.
     *
     * @returns Value of property `columns`
     */
    getColumns(): int;
    /**
     * Gets current value of property {@link #getMinRows minRows}.
     *
     * Specifies the minimum number of rows, which the item should take.
     *
     * @returns Value of property `minRows`
     */
    getMinRows(): int;
    /**
     * @EXPERIMENTAL (since 1.65)
     *
     * Gets current value of property {@link #getRows rows}.
     *
     * Specifies the number of rows, which the item should take.
     *
     * @returns Value of property `rows`
     */
    getRows(): int;
    /**
     * Sets a new value for property {@link #getColumns columns}.
     *
     * Specifies the number of columns, which the item should take
     *
     * **Note:** Make sure that the item does not have more columns than the total columns in the grid. Use
     * {@link sap.f.GridContainer#attachLayoutChange} or a resize listener to handle when columns count is changed
     * for the grid. If item has more columns at some point, they will be automatically reduced to the total
     * grid columns. This is done to prevent broken layout (grid blowout) that affects all items.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setColumns(
      /**
       * New value for property `columns`
       */
      iColumns?: int
    ): this;
    /**
     * Sets a new value for property {@link #getMinRows minRows}.
     *
     * Specifies the minimum number of rows, which the item should take.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMinRows(
      /**
       * New value for property `minRows`
       */
      iMinRows: int
    ): this;
    /**
     * @EXPERIMENTAL (since 1.65)
     *
     * Sets a new value for property {@link #getRows rows}.
     *
     * Specifies the number of rows, which the item should take.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setRows(
      /**
       * New value for property `rows`
       */
      iRows: int
    ): this;
  }

  export interface $GridContainerItemLayoutDataSettings
    extends $LayoutDataSettings {
    /**
     * Specifies the number of columns, which the item should take
     *
     * **Note:** Make sure that the item does not have more columns than the total columns in the grid. Use
     * {@link sap.f.GridContainer#attachLayoutChange} or a resize listener to handle when columns count is changed
     * for the grid. If item has more columns at some point, they will be automatically reduced to the total
     * grid columns. This is done to prevent broken layout (grid blowout) that affects all items.
     */
    columns?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies the minimum number of rows, which the item should take.
     */
    minRows?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * @EXPERIMENTAL (since 1.65)
     *
     * Specifies the number of rows, which the item should take.
     */
    rows?: int | PropertyBindingInfo | `{${string}}`;
  }
}

declare module "sap/f/GridContainerSettings" {
  import {
    default as ManagedObject,
    $ManagedObjectSettings,
    PropertyBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import { CSSSize } from "sap/ui/core/library";

  import ManagedObjectMetadata from "sap/ui/base/ManagedObjectMetadata";

  /**
   * @SINCE 1.65
   * @EXPERIMENTAL (since 1.65)
   *
   * Holds a set of settings that define the dimensions of `sap.f.GridContainer`.
   *
   * Can be used to define the sizes of columns and rows for different screen sizes, by using the `layout`
   * aggregations of `sap.f.GridContainer`.
   */
  export default class GridContainerSettings extends ManagedObject {
    /**
     * Constructor for a new `sap.f.GridContainerSettings`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $GridContainerSettingsSettings
    );
    /**
     * Constructor for a new `sap.f.GridContainerSettings`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
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
      mSettings?: $GridContainerSettingsSettings
    );

    /**
     * Creates a new subclass of class sap.f.GridContainerSettings with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, GridContainerSettings>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.GridContainerSettings.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ManagedObjectMetadata;
    /**
     * Gets current value of property {@link #getColumns columns}.
     *
     * How many columns to have on a row.
     *
     * If not defined, `sap.f.GridContainer` will position as many columns as they can fit in the container.
     *
     * @returns Value of property `columns`
     */
    getColumns(): int;
    /**
     * Gets current value of property {@link #getColumnSize columnSize}.
     *
     * The width of the columns. **Note:** Use only 'px' or 'rem'. Some features may not work as expected otherwise.
     *
     * Default value is `"80px"`.
     *
     * @returns Value of property `columnSize`
     */
    getColumnSize(): CSSSize;
    /**
     * Gets current value of property {@link #getGap gap}.
     *
     * The size of the gap between columns and rows.
     *
     * **Note:** Use only 'px' or 'rem'. Some features may not work as expected otherwise.
     *
     * Default value is `"16px"`.
     *
     * @returns Value of property `gap`
     */
    getGap(): CSSSize;
    /**
     * Gets current value of property {@link #getMaxColumnSize maxColumnSize}.
     *
     * Sets the maximum width of the columns. Setting this together with `minColumnSize` will allow the columns
     * to breath between those two values.
     *
     * **Note:** Will not work in combination with `columnSize`.
     *
     * @returns Value of property `maxColumnSize`
     */
    getMaxColumnSize(): CSSSize;
    /**
     * Gets current value of property {@link #getMinColumnSize minColumnSize}.
     *
     * Sets the minimum width of the columns. Setting this together with `maxColumnSize` will allow the columns
     * to breath between those two values.
     *
     * **Note:** Will not work in combination with `columnSize`.
     *
     * @returns Value of property `minColumnSize`
     */
    getMinColumnSize(): CSSSize;
    /**
     * Gets current value of property {@link #getRowSize rowSize}.
     *
     * The height of the rows.
     *
     * **Note:** Use only 'px' or 'rem'. Some features may not work as expected otherwise.
     *
     * Default value is `"80px"`.
     *
     * @returns Value of property `rowSize`
     */
    getRowSize(): CSSSize;
    /**
     * Sets a new value for property {@link #getColumns columns}.
     *
     * How many columns to have on a row.
     *
     * If not defined, `sap.f.GridContainer` will position as many columns as they can fit in the container.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setColumns(
      /**
       * New value for property `columns`
       */
      iColumns: int
    ): this;
    /**
     * Sets a new value for property {@link #getColumnSize columnSize}.
     *
     * The width of the columns. **Note:** Use only 'px' or 'rem'. Some features may not work as expected otherwise.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"80px"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setColumnSize(
      /**
       * New value for property `columnSize`
       */
      sColumnSize?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getGap gap}.
     *
     * The size of the gap between columns and rows.
     *
     * **Note:** Use only 'px' or 'rem'. Some features may not work as expected otherwise.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"16px"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setGap(
      /**
       * New value for property `gap`
       */
      sGap?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getMaxColumnSize maxColumnSize}.
     *
     * Sets the maximum width of the columns. Setting this together with `minColumnSize` will allow the columns
     * to breath between those two values.
     *
     * **Note:** Will not work in combination with `columnSize`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMaxColumnSize(
      /**
       * New value for property `maxColumnSize`
       */
      sMaxColumnSize: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getMinColumnSize minColumnSize}.
     *
     * Sets the minimum width of the columns. Setting this together with `maxColumnSize` will allow the columns
     * to breath between those two values.
     *
     * **Note:** Will not work in combination with `columnSize`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMinColumnSize(
      /**
       * New value for property `minColumnSize`
       */
      sMinColumnSize: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getRowSize rowSize}.
     *
     * The height of the rows.
     *
     * **Note:** Use only 'px' or 'rem'. Some features may not work as expected otherwise.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"80px"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setRowSize(
      /**
       * New value for property `rowSize`
       */
      sRowSize?: CSSSize
    ): this;
  }

  export interface $GridContainerSettingsSettings
    extends $ManagedObjectSettings {
    /**
     * How many columns to have on a row.
     *
     * If not defined, `sap.f.GridContainer` will position as many columns as they can fit in the container.
     */
    columns?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * The width of the columns. **Note:** Use only 'px' or 'rem'. Some features may not work as expected otherwise.
     */
    columnSize?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Sets the minimum width of the columns. Setting this together with `maxColumnSize` will allow the columns
     * to breath between those two values.
     *
     * **Note:** Will not work in combination with `columnSize`.
     */
    minColumnSize?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Sets the maximum width of the columns. Setting this together with `minColumnSize` will allow the columns
     * to breath between those two values.
     *
     * **Note:** Will not work in combination with `columnSize`.
     */
    maxColumnSize?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * The height of the rows.
     *
     * **Note:** Use only 'px' or 'rem'. Some features may not work as expected otherwise.
     */
    rowSize?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * The size of the gap between columns and rows.
     *
     * **Note:** Use only 'px' or 'rem'. Some features may not work as expected otherwise.
     */
    gap?: CSSSize | PropertyBindingInfo | `{${string}}`;
  }
}

declare module "sap/f/GridList" {
  import { default as ListBase, $ListBaseSettings } from "sap/m/ListBase";

  import { cssgrid } from "sap/ui/layout/library";

  import { dnd, NavigationDirection } from "sap/f/library";

  import Event from "sap/ui/base/Event";

  import GridLayoutBase from "sap/ui/layout/cssgrid/GridLayoutBase";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.60
   *
   * A list-based control with grid layout capabilities.
   *
   * Overview:
   *
   * The control is based on {@link sap.m.ListBase} and adds the flexibility to configure different grid layouts.
   * The layout used is based on the CSS display grid and the control has a default configuration.
   *
   * With `customLayout` aggregation it is possible to use:
   * 	 - Predefined simple grid layouts such as {@link sap.ui.layout.cssgrid.GridBoxLayout GridBoxLayout}
   *
   * 	 - Flexible grid layouts, such as {@link sap.ui.layout.cssgrid.GridBasicLayout GridBasicLayout} or {@link
   * 			sap.ui.layout.cssgrid.GridResponsiveLayout GridResponsiveLayout} which reveal the native-browser CSS
   * 			display grid APIs. For more information, see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
   * 			MDN web docs: CSS Grid Layout}
   *
   * Every item can override its size by specifying the number of columns and/or rows it will take in the
   * grid. This is done using {@link sap.ui.layout.cssgrid.GridItemLayoutData GridItemLayoutData}.
   *
   * For best visualization, items of type {@link sap.f.GridListItem sap.f.GridListItem} should be used inside
   * the `items` aggregation.
   *
   * Usage:
   *
   * For general cases, use the default grid configuration of the `GridList`. For Box case (equal sized items),
   * use `customLayout` aggregation with {@link sap.ui.layout.cssgrid.GridBoxLayout GridBoxLayout} For Grids
   * which need different configurations based on available width, use `customLayout` aggregation with {@link
   * sap.ui.layout.cssgrid.GridResponsiveLayout GridResponsiveLayout} To set a specific position to an item
   * or define its dimensions in the grid, pass `layoutData` of type {@link sap.ui.layout.cssgrid.GridItemLayoutData
   * GridItemLayoutData}
   *
   * When to use
   * 	 - If {@link sap.m.ListBase} features are required and the items must be positioned in a grid layout
   *
   *
   * When not to use
   * 	If a list layout is required, use {@link sap.m.List} instead. If only the layout is required, use
   * {@link sap.ui.layout.cssgrid.CSSGrid} instead.
   *
   * Drag and drop:: Drag and drop is enabled for the `GridList` with enhanced visualization and interaction,
   * better suited for grid items. This is configured by using the `{@link sap.f.dnd.GridDropInfo}`.
   *
   * Similar to the `{@link sap.ui.core.dnd.DropInfo}`, `{@link sap.f.dnd.GridDropInfo}` has to be added to
   * the `dragDropConfig` aggregation, by using `{@link sap.ui.core.Element#addDragDropConfig}`.
   *
   * Both `{@link sap.ui.core.dnd.DropInfo}` and `{@link sap.f.dnd.GridDropInfo}` can be used to configure
   * drag and drop. The difference is that the `{@link sap.f.dnd.GridDropInfo}` will provide a drop indicator,
   * which mimics the size of the dragged item and shows the potential drop position inside the grid.
   *
   * Keyboard Navigation:: `GridList` provides support for two-dimensional keyboard navigation through its
   * contained controls. Navigating up/down or left/right using the arrow keys follows the configurable two-dimensional
   * grid mesh. This provides stable navigation paths in the cases when there are items of different sizes.
   * When the user presses an arrow key in a direction outward of the `GridList`, a `borderReached` event
   * will be fired. The implementation of the `borderReached` event allows the application developer to control
   * where the focus goes, and depending on the surrounding layout pass the focus to a specific place in a
   * neighboring `GridList` using the method {@link #focusItemByDirection}.
   */
  export default class GridList
    extends ListBase
    implements cssgrid.IGridConfigurable, dnd.IGridDroppable {
    __implements__sap_ui_layout_cssgrid_IGridConfigurable: boolean;
    __implements__sap_f_dnd_IGridDroppable: boolean;
    /**
     * Constructor for a new GridList.
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
      mSettings?: $GridListSettings
    );
    /**
     * Constructor for a new GridList.
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
      mSettings?: $GridListSettings
    );

    /**
     * Creates a new subclass of class sap.f.GridList with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ListBase.extend}.
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
      oClassInfo?: sap.ClassInfo<T, GridList>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.GridList.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:borderReached borderReached} event of this `sap.f.GridList`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.GridList` itself.
     *
     * Fires if the border of the visualizations is reached so that an application can react on this.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBorderReached(
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
       * Context object to call the event handler with. Defaults to this `sap.f.GridList` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:borderReached borderReached} event of this `sap.f.GridList`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.GridList` itself.
     *
     * Fires if the border of the visualizations is reached so that an application can react on this.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBorderReached(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.GridList` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys the customLayout in the aggregation {@link #getCustomLayout customLayout}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyCustomLayout(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:borderReached borderReached} event of this
     * `sap.f.GridList`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachBorderReached(
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
     * Fires event {@link #event:borderReached borderReached} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireBorderReached(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Event that leads to the focus change.
         */
        event?: jQuery.Event;
        /**
         * The navigation direction that is used to reach the border.
         */
        direction?: NavigationDirection | keyof typeof NavigationDirection;
        /**
         * The row index, from which the border is reached.
         */
        row?: int;
        /**
         * The the column index, from which the border is reached.
         */
        column?: int;
      }
    ): this;
    /**
     * @EXPERIMENTAL (since 1.87)
     *
     * Focuses an item in the given direction - up, down, left or right, from the starting position specified
     * by row and column.
     *
     * If the direction is up or down, the method focuses the nearest item in the same column, located in the
     * specified direction.
     *
     * If the direction is left or right, the method focuses the nearest item at the same row, in the specified
     * direction.
     *
     * **Note:**Should be called after the rendering of `GridList` is ready.
     */
    focusItemByDirection(
      /**
       * The navigation direction.
       */
      sDirection: NavigationDirection | keyof typeof NavigationDirection,
      /**
       * The row index of the starting position.
       */
      iRow: int,
      /**
       * The column index of the starting position.
       */
      iColumn: int
    ): void;
    /**
     * Gets content of aggregation {@link #getCustomLayout customLayout}.
     *
     * Defines a custom grid layout
     */
    getCustomLayout(): GridLayoutBase;
    /**
     * Implements IGridConfigurable interface.
     *
     * @returns An array with the DOM elements
     */
    getGridDomRefs(): HTMLElement[];
    /**
     * Implements IGridConfigurable interface.
     *
     * @returns The grid layout
     */
    getGridLayoutConfiguration(): GridLayoutBase;
    /**
     * Sets the aggregated {@link #getCustomLayout customLayout}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setCustomLayout(
      /**
       * The customLayout to set
       */
      oCustomLayout: GridLayoutBase
    ): this;
  }

  export interface $GridListSettings extends $ListBaseSettings {
    /**
     * Defines a custom grid layout
     */
    customLayout?: GridLayoutBase;

    /**
     * Fires if the border of the visualizations is reached so that an application can react on this.
     */
    borderReached?: (oEvent: Event) => void;
  }
}

declare module "sap/f/GridListItem" {
  import {
    default as ListItemBase,
    $ListItemBaseSettings,
  } from "sap/m/ListItemBase";

  import Control from "sap/ui/core/Control";

  import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.70
   *
   * The `GridListItem` with a content aggregation can be used to display all kind of information. It is used
   * in {@link sap.f.GridList sap.f.GridList}. **Note:** Even though the content aggregation can be used for
   * any control, complex responsive layout controls, such as `Table, Form`, etc, should not be aggregated
   * as content.
   */
  export default class GridListItem extends ListItemBase {
    /**
     * Constructor for a new GridListItem.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $GridListItemSettings
    );
    /**
     * Constructor for a new GridListItem.
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
      mSettings?: $GridListItemSettings
    );

    /**
     * Creates a new subclass of class sap.f.GridListItem with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ListItemBase.extend}.
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
      oClassInfo?: sap.ClassInfo<T, GridListItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.GridListItem.
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
     * Binds aggregation {@link #getContent content} to model data.
     *
     * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
     * of the possible properties of `oBindingInfo`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    bindContent(
      /**
       * The binding information
       */
      oBindingInfo: AggregationBindingInfo
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
     * The content of this list item
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
    /**
     * Unbinds aggregation {@link #getContent content} from model data.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    unbindContent(): this;
  }

  export interface $GridListItemSettings extends $ListItemBaseSettings {
    /**
     * The content of this list item
     */
    content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;
  }
}

declare module "sap/f/IllustratedMessage" {
  import {
    default as IllustratedMessage1,
    $IllustratedMessageSettings as $IllustratedMessageSettings1,
  } from "sap/m/IllustratedMessage";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.88
   * @deprecated (since 1.98) - Use the {@link sap.m.IllustratedMessage} instead.
   *
   * A combination of message and illustration to represent an empty or a success state.
   *
   * Overview:
   *
   * An `IllustratedMessage` is a recommended combination of a solution-oriented message, an engaging illustration,
   * and conversational tone to better communicate an empty or a success state than just show a message alone.
   * Empty states are moments in the user experience where there’s no data to display. Success states are
   * occasions to celebrate and reward a user’s special accomplishment or the completion of an important task.
   *
   * The `IllustratedMessage` control is meant to be used inside container controls, for example a `Card`,
   * a `Dialog`, or a `Page`.
   *
   * Structure:
   *
   * The `IllustratedMessage` consists of the following elements, which are displayed below each other in
   * the following order:
   * 	 - Illustration
   * 	 - Title
   * 	 - Description
   * 	 - Additional Content
   *
   * Responsive Behavior:
   *
   * The `IllustratedMessage` control can adapt depending on the API settings provided by the app developer
   * and the available space of its parent container. Some of the structural elements are displayed differently
   * or are omitted in the different breakpoint sizes (XS, S, M, L).
   */
  export default class IllustratedMessage extends IllustratedMessage1 {
    /**
     * Constructor for a new `IllustratedMessage`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.m.IllustratedMessage#constructor
     * sap.m.IllustratedMessage} can be used.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $IllustratedMessageSettings
    );
    /**
     * Constructor for a new `IllustratedMessage`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.m.IllustratedMessage#constructor
     * sap.m.IllustratedMessage} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $IllustratedMessageSettings
    );

    /**
     * Creates a new subclass of class sap.f.IllustratedMessage with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.m.IllustratedMessage.extend}.
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
      oClassInfo?: sap.ClassInfo<T, IllustratedMessage>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.IllustratedMessage.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $IllustratedMessageSettings
    extends $IllustratedMessageSettings1 {}
}

declare module "sap/f/Illustration" {
  import {
    default as Illustration1,
    $IllustrationSettings as $IllustrationSettings1,
  } from "sap/m/Illustration";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.88
   * @deprecated (since 1.98) - Use the {@link sap.m.Illustration} instead.
   *
   * A simple control which uses a Symbol ID to visualize an SVG which has already been loaded in the {@link
   * sap.f.IllustrationPool}.
   *
   * To build a Symbol ID, all of the `Illustration` properties must be populated with data.
   */
  export default class Illustration extends Illustration1 {
    /**
     * Constructor for a new `Illustration`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.m.Illustration#constructor
     * sap.m.Illustration} can be used.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $IllustrationSettings
    );
    /**
     * Constructor for a new `Illustration`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.m.Illustration#constructor
     * sap.m.Illustration} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $IllustrationSettings
    );

    /**
     * Creates a new subclass of class sap.f.Illustration with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Illustration.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Illustration>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.Illustration.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $IllustrationSettings extends $IllustrationSettings1 {}
}

declare module "sap/f/IllustrationPool" {
  /**
   * @SINCE 1.88
   * @deprecated (since 1.98) - Use the {@link sap.m.IllustrationPool} instead.
   *
   * `IllustrationPool` loads the illustration assets (SVGs) via XMLHttpRequest requests.
   *
   * The successfully loaded data is kept in the DOM (div with ID `sap-illustration-pool`) in the `sap-ui-static`
   * DOM element.
   *
   * To load a given asset, register its illustration set through the {@link sap.m.IllustrationPool#sap.m.IllustrationPool.registerIllustrationSet
   * registerIllustrationSet} API of `IllustrationPool`. The exception being the `sapIllus`, which is the
   * default illustration set that is registered by default.
   *
   * The default behavior of `IllustrationPool` is to load/require an asset only when it's needed by using
   * the {@link sap.m.IllustrationPool#sap.m.IllustrationPool.loadAsset loadAsset} API. When registering the
   * new illustration set, you are given the option to load all of its assets.
   *
   * If some of the assets are not loaded initially, you can load the rest of them on a later state with the
   * {@link sap.m.IllustrationPool#sap.m.IllustrationPool.loadRestOfTheAssets loadRestOfTheAssets} API.
   */
  interface IllustrationPool {}
  const IllustrationPool: IllustrationPool;
  export default IllustrationPool;
}

declare module "sap/f/ProductSwitch" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ProductSwitchItem from "sap/f/ProductSwitchItem";

  import Event from "sap/ui/base/Event";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { ID } from "sap/ui/core/library";

  import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.72
   * @EXPERIMENTAL (since 1.72)
   *
   * A layout control that provides specific configuration about how the items should be displayed.
   */
  export default class ProductSwitch extends Control {
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
     * Creates a new subclass of class sap.f.ProductSwitch with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, ProductSwitch>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.ProductSwitch.
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
      oItem: ProductSwitchItem
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.f.ProductSwitch`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.ProductSwitch` itself.
     *
     * Fires when an unselected item is pressed.
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
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.ProductSwitch` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.f.ProductSwitch`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.ProductSwitch` itself.
     *
     * Fires when an unselected item is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.ProductSwitch` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.f.ProductSwitch`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachChange(
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
     * Fires event {@link #event:change change} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Reference to the new item that has been selected.
         */
        itemPressed?: ProductSwitchItem;
      }
    ): this;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * `ProductSwitch` content.
     */
    getItems(): ProductSwitchItem[];
    /**
     * ID of the element which is the current target of the association {@link #getSelectedItem selectedItem},
     * or `null`.
     */
    getSelectedItem(): ID;
    /**
     * Checks for the provided `sap.f.ProductSwitchItem` in the aggregation {@link #getItems items}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: ProductSwitchItem
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
      oItem: ProductSwitchItem,
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
    removeAllItems(): ProductSwitchItem[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     *
     * @returns The removed item or `null`
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | ProductSwitchItem
    ): ProductSwitchItem | null;
    /**
     * Sets the `selectedItem` association.
     *
     * @returns `this` to allow method chaining
     */
    setSelectedItem(
      /**
       * New value for the `selectedItem` association. If an ID of a `sap.f.ProductSwitchItem` instance is given,
       * the item with this ID becomes the `selectedItem` association. Alternatively, a `sap.f.ProductSwitchItem`
       * instance may be given or `null` to clear the selection.
       */
      vItem: string | ProductSwitchItem | null
    ): this;
  }

  export interface $ProductSwitchSettings extends $ControlSettings {
    /**
     * `ProductSwitch` content.
     */
    items?:
      | ProductSwitchItem[]
      | ProductSwitchItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Sets or retrieves the selected item from the `items` aggregation.
     */
    selectedItem?: ProductSwitchItem | string;

    /**
     * Fires when an unselected item is pressed.
     */
    change?: (oEvent: Event) => void;
  }
}

declare module "sap/f/ProductSwitchItem" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { URI } from "sap/ui/core/library";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.72
   * @EXPERIMENTAL (since 1.72)
   *
   * A control that is used as a child of `ProductSwitch`
   *
   * **Note:** `ProductSwitchItem` is not supported when used outside of `ProductSwitch`.
   */
  export default class ProductSwitchItem extends Control {
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
     * Creates a new subclass of class sap.f.ProductSwitchItem with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, ProductSwitchItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.ProductSwitchItem.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getSrc src}.
     *
     * Defines the icon to be displayed as graphical element within the `ProductSwitchItem`. It can be an icon
     * from the SAP icon font.
     *
     * @returns Value of property `src`
     */
    getSrc(): URI;
    /**
     * Gets current value of property {@link #getSubTitle subTitle}.
     *
     * Determines the subtitle of the `ProductSwitchItem`.
     *
     * @returns Value of property `subTitle`
     */
    getSubTitle(): string;
    /**
     * Gets current value of property {@link #getTarget target}.
     *
     * Specifies a target where the `targetSrc` content must be open.
     *
     * Options are the standard values for window.open() supported by browsers: `_self`, `_top`, `_blank`, `_parent`,
     * `_search`. Alternatively, a frame name can be entered.
     *
     * @returns Value of property `target`
     */
    getTarget(): string;
    /**
     * Gets current value of property {@link #getTargetSrc targetSrc}.
     *
     * Defines the `ProductSwitchItem` target URI. Supports standard hyperlink behavior.
     *
     * **Note:** Redirection is handled via application logic, by subscribing to the {@link sap.f.ProductSwitch#event:change
     * change} event of `sap.f.ProductSwitch`.
     *
     * @returns Value of property `targetSrc`
     */
    getTargetSrc(): URI;
    /**
     * Gets current value of property {@link #getTitle title}.
     *
     * Determines the title of the `ProductSwitchItem`.
     *
     * @returns Value of property `title`
     */
    getTitle(): string;
    /**
     * Sets a new value for property {@link #getSrc src}.
     *
     * Defines the icon to be displayed as graphical element within the `ProductSwitchItem`. It can be an icon
     * from the SAP icon font.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSrc(
      /**
       * New value for property `src`
       */
      sSrc?: URI
    ): this;
    /**
     * Sets a new value for property {@link #getSubTitle subTitle}.
     *
     * Determines the subtitle of the `ProductSwitchItem`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSubTitle(
      /**
       * New value for property `subTitle`
       */
      sSubTitle?: string
    ): this;
    /**
     * Sets a new value for property {@link #getTarget target}.
     *
     * Specifies a target where the `targetSrc` content must be open.
     *
     * Options are the standard values for window.open() supported by browsers: `_self`, `_top`, `_blank`, `_parent`,
     * `_search`. Alternatively, a frame name can be entered.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * Sets a new value for property {@link #getTargetSrc targetSrc}.
     *
     * Defines the `ProductSwitchItem` target URI. Supports standard hyperlink behavior.
     *
     * **Note:** Redirection is handled via application logic, by subscribing to the {@link sap.f.ProductSwitch#event:change
     * change} event of `sap.f.ProductSwitch`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTargetSrc(
      /**
       * New value for property `targetSrc`
       */
      sTargetSrc?: URI
    ): this;
    /**
     * Sets a new value for property {@link #getTitle title}.
     *
     * Determines the title of the `ProductSwitchItem`.
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
  }

  export interface $ProductSwitchItemSettings extends $ControlSettings {
    /**
     * Defines the icon to be displayed as graphical element within the `ProductSwitchItem`. It can be an icon
     * from the SAP icon font.
     */
    src?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines the title of the `ProductSwitchItem`.
     */
    title?: string | PropertyBindingInfo;

    /**
     * Determines the subtitle of the `ProductSwitchItem`.
     */
    subTitle?: string | PropertyBindingInfo;

    /**
     * Defines the `ProductSwitchItem` target URI. Supports standard hyperlink behavior.
     *
     * **Note:** Redirection is handled via application logic, by subscribing to the {@link sap.f.ProductSwitch#event:change
     * change} event of `sap.f.ProductSwitch`.
     */
    targetSrc?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies a target where the `targetSrc` content must be open.
     *
     * Options are the standard values for window.open() supported by browsers: `_self`, `_top`, `_blank`, `_parent`,
     * `_search`. Alternatively, a frame name can be entered.
     */
    target?: string | PropertyBindingInfo;
  }
}

declare module "sap/f/routing/Router" {
  import Router1 from "sap/ui/core/routing/Router";

  import UIComponent from "sap/ui/core/UIComponent";

  import Metadata from "sap/ui/base/Metadata";

  import TargetHandler from "sap/f/routing/TargetHandler";

  /**
   * @SINCE 1.46
   *
   * The `sap.f.routing.Router` class is intended to be used with `{@link sap.f.FlexibleColumnLayout}` as
   * a root control.
   *
   * The difference to the `{@link sap.ui.core.routing.Router}` are the `level`, `transition`, and `transitionParameters`
   * properties that you can specify in every Route or Target created by this router.
   *
   * The difference to the `{@link sap.m.routing.Router}` is the additional `layout` property that can be
   * specified in every Route, in which case it is applied to the root control. Also, the `sap.f.routing.Router`
   * supports navigations that involve both change of `{@link sap.f.LayoutType}` and change of the current
   * page within a single column of the `sap.f.FlexibleColumnLayout`.
   *
   * See `{@link sap.ui.core.routing.Router}` for the constructor arguments.
   */
  export default class Router extends Router1 {
    /**
     * Constructor for a new `sap.f.routing.Router`.
     */
    constructor(
      /**
       * may contain many Route configurations as {@link sap.ui.core.routing.Route#constructor}.
       */
      oRoutes?: object | object[],
      /**
       * the Component of all the views that will be created by this Router, will get forwarded to the {@link
       * sap.ui.core.routing.Views#constructor}. If you are using the componentMetadata to define your routes
       * you should skip this parameter.
       */
      oOwner?: UIComponent,
      /**
       * the target configuration, see {@link sap.f.routing.Targets#constructor} documentation (the options object).
       */
      oTargetsConfig?: object
    );

    /**
     * Creates a new subclass of class sap.f.routing.Router with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.routing.Router.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Router>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.routing.Router.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): Metadata;
    /**
     * Returns the `TargetHandler` instance.
     *
     * @returns The `TargetHandler` instance
     */
    getTargetHandler(): TargetHandler;
  }
}

declare module "sap/f/routing/TargetHandler" {
  import BaseObject from "sap/ui/base/Object";

  import Metadata from "sap/ui/base/Metadata";

  /**
   * @SINCE 1.46
   *
   * Used for closing dialogs and showing transitions in `NavContainers` when targets are displayed.
   *
   * **Note:** You should not create an own instance of this class. It is created when using `{@link sap.f.routing.Router}`
   * or `{@link sap.f.routing.Targets}`.
   *
   * **Note:** You may use the `{@link #setCloseDialogs}` function to specify if dialogs should be closed
   * on displaying other views. The dialogs are closed when a different target is displayed than the previously
   * displayed one, otherwise the dialogs are kept open.
   */
  export default class TargetHandler extends BaseObject {
    /**
     * Constructor for a new `TargetHandler`.
     */
    constructor(
      /**
       * Closes all open dialogs before navigating to a different target, if set to `true` (default). If set to
       * `false`, it will just navigate without closing dialogs.
       */
      closeDialogs: boolean
    );

    /**
     * Creates a new subclass of class sap.f.routing.TargetHandler with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, TargetHandler>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.routing.TargetHandler.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): Metadata;
    /**
     * Gets if a navigation should close dialogs.
     *
     * @returns A flag indication if dialogs will be closed
     */
    getCloseDialogs(): boolean;
    /**
     * Sets if a navigation should close dialogs.
     *
     * **Note:** The dialogs are closed when a different target is displayed than the previous one, otherwise
     * the dialogs are kept open even when `bCloseDialogs` is `true`.
     *
     * @returns For chaining
     */
    setCloseDialogs(
      /**
       * Close dialogs if `true`
       */
      bCloseDialogs: boolean
    ): this;
  }
}

declare module "sap/f/routing/Targets" {
  import Targets1 from "sap/ui/core/routing/Targets";

  import Views from "sap/ui/core/routing/Views";

  import Metadata from "sap/ui/base/Metadata";

  import TargetHandler from "sap/f/routing/TargetHandler";

  /**
   * @SINCE 1.46
   *
   * Provides a convenient way for placing views into the correct containers of your app.
   *
   * The `sap.f` extension of `Targets` also handles the triggering of page navigation when the target control
   * is an `{@link sap.f.FlexibleColumnLayout}`. Other controls are also allowed, but the extra parameters
   * `level`, `transition`, and `transitionParameters` are ignored and it behaves as `{@link sap.ui.core.routing.Targets}`.
   *
   * When a target is displayed, dialogs are being closed. To change this, use `{@link #getTargetHandler}`
   * and {@link sap.f.routing.TargetHandler#setCloseDialogs}.
   */
  export default class Targets extends Targets1 {
    /**
     * Constructor for a new `Targets` class.
     */
    constructor(oOptions: {
      /**
       * the views instance will create the views of all the targets defined, so if 2 targets have the same name,
       * the same instance of the view will be displayed.
       */
      views: Views;
      /**
       * This config allows all the values oOptions.targets.anyName allows, these will be the default values for
       * properties used in the target.
       *
       * For example, if you are only using xmlViews in your app you can specify viewType="XML" so you don't have
       * to repeat this in every target.
       *
       * If a target specifies viewType="JS", the JS will be stronger than the XML here is an example.
       *
       *
       * ```javascript
       *
       *
       * {
       *     config: {
       *         viewType : "XML"
       *     }
       *     targets : {
       *         xmlTarget : {
       *             ...
       *         },
       *         jsTarget : {
       *             viewType : "JS"
       *             ...
       *         }
       *     }
       * }
       *
       * ```
       *  Then the effective config that will be used looks like this:
       * ```javascript
       *
       *
       * {
       *     xmlTarget : {
       *         // coming from the defaults
       *         viewType : "XML"
       *         ...
       *     },
       *     jsTarget : {
       *        // XML is overwritten by the "JS" of the targets property
       *        viewType : "JS"
       *       ...
       *     }
       * }
       *
       * ```
       */
      config?: {
        /**
         * The ID of the `rootView`.
         *
         * This should be the ID of the view that contains the control with the `controlId` since the control will
         * be retrieved by calling the {@link sap.ui.core.mvc.View#byId} function of the rootView.
         *
         * If you are using a component and add the routing.targets, **do not set this parameter**, since the component
         * will set the rootView to the view created by the {@link sap.ui.core.UIComponent#createContent} function.
         *
         * If you specify the "parent" property of a target, the control will not be searched in the root view but
         * in the view created by the parent (see parent documentation).
         */
        rootView?: string;
        /**
         * Whether the views which are created through this `Targets` are loaded asynchronously. This option can
         * be set only when the `Targets` is used standalone without the involvement of a Router. Otherwise, the
         * async option is inherited from the Router.
         */
        async?: boolean;
      };
      /**
       * One or multiple targets in a map.
       */
      targets: {
        /**
         * A new target, the key severs as a name.
         *
         * Example:
         * ```javascript
         *
         *
         * {
         *     targets: {
         *         welcome: {
         *             type: "View",
         *             name: "Welcome",
         *             viewType: "XML",
         *             ....
         *             // Other target parameters
         *         },
         *         goodbye: {
         *             type: "View",
         *             name: "Bye",
         *             viewType: "JS",
         *             ....
         *             // Other target parameters
         *         }
         *     }
         * }
         *
         * ```
         *
         *
         * This creates two targets named 'welcome' and 'goodbye'. You can display both of them or one of them using
         * the `{@link #display}` function.
         */
        anyName: {
          /**
           * Defines whether the target creates an instance of 'View' or 'Component'.
           */
          type: string;
          /**
           * Defines the name of the View or Component that will be created. For type 'Component', use option `usage`
           * instead if an owner component exists. To place the view or component into a Control, use the options
           * `controlAggregation` and `controlId`. Instance of View or Component will only be created once per `name`
           * or `usage` combined with `id`.
           * ```javascript
           *
           *
           * {
           *     targets: {
           *         // If display("masterWelcome") is called, the master view will be placed in the 'MasterPages' of a control with the id splitContainter
           *         masterWelcome: {
           *             type: "View",
           *             name: "Welcome",
           *             controlId: "splitContainer",
           *             controlAggregation: "masterPages"
           *         },
           *         // If display("detailWelcome") is called after the masterWelcome, the view will be removed from the master pages and added to the detail pages, since the same instance is used. Also the controls inside of the view will have the same state.
           *         detailWelcome: {
           *             // same view here, that's why the same instance is used
           *             type: "View",
           *             name: "Welcome",
           *             controlId: "splitContainer",
           *             controlAggregation: "detailPages"
           *         }
           *     }
           * }
           *
           * ```
           *
           *
           * If you want to have a second instance of the welcome view you can assign the targets with different ids:
           *
           *
           * ```javascript
           *
           *
           * {
           *     targets: {
           *         // If display("masterWelcome") is called, the "masterWelcome" view will be placed in the 'MasterPages' of a control with the id splitContainter
           *         masterWelcome: {
           *             type: "View",
           *             name: "Welcome",
           *             id: "masterWelcome",
           *             controlId: "splitContainer",
           *             controlAggregation: "masterPages"
           *         },
           *         // If display("detailWelcome") is called after the "masterWelcome", a second instance with an own controller instance will be added in the detail pages.
           *         detailWelcome: {
           *             type: "View",
           *             name: "Welcome",
           *             // another instance will be created because a different id is used
           *             id: "detailWelcome",
           *             controlId: "splitContainer",
           *             controlAggregation: "detailPages"
           *         }
           *     }
           * }
           *
           * ```
           */
          name?: string;
          /**
           * Defines the 'usage' name for 'Component' target which refers to the '/sap.ui5/componentUsages' entry
           * in the owner component's manifest.
           */
          usage?: string;
          /**
           * The type of the view that is going to be created. These are the supported types: {@link sap.ui.core.mvc.ViewType}.
           * You always have to provide a viewType except if `oOptions.config.viewType` is set or when using {@link
           * sap.ui.core.routing.Views#setView}.
           */
          viewType?: string;
          /**
           * A prefix that is prepended in front of the `name`.
           *
           * **Example:** `name` is set to "myView" and `path` is set to "myApp" - the created view's name will be
           * "myApp.myView".
           */
          path?: string;
          /**
           * The ID of the created view or component. This is is prefixed with the ID of the component set to the
           * views instance provided in `oOptions.views`. For details, see `{@link sap.ui.core.routing.Views#getView}`.
           */
          id?: string;
          /**
           * The ID of the parent of the `controlId`.
           *
           * This should be the ID of the view that contains your `controlId` since the target control is retrieved
           * by calling the `{@link sap.ui.core.mvc.View#byId}` function of the `targetParent`. By default, this is
           * the view created by a component, so you do not have to provide this parameter. If you are using children,
           * the view created by the parent of the child is taken. You only need to specify this, if you are not using
           * a `Targets` instance created by a component and you should give the ID of root view of your app to this
           * property.
           */
          targetParent?: string;
          /**
           * The ID of the control where you want to place the view created by this target. The view of the target
           * will be put into this container Control, using the controlAggregation property. You have to specify both
           * properties or the target will not be able to place itself. An example for containers are {@link sap.ui.ux3.Shell}
           * with the aggregation 'content' or a {@link sap.m.NavContainer} with the aggregation 'pages'.
           */
          controlId?: string;
          /**
           * The name of an aggregation of the `controlId`, that contains views. For example, an `{@link sap.m.NavContainer}`
           * has a `pages` aggregation and an `{@link sap.ui.ux3.Shell}` it has a `content` aggregation.
           */
          controlAggregation?: string;
          /**
           * Defines a boolean that can be passed to specify if the aggregation should be cleared - all items will
           * be removed - before adding the View to it. When using a {@link sap.ui.ux3.Shell} this should be true.
           * For a {@link sap.m.NavContainer} it should be false. When you use the {@link sap.f.routing.Router} the
           * default will be false.
           */
          clearControlAggregation?: boolean;
          /**
           * A reference to another target, using the name of the target. If you display a target that has a parent,
           * the parent will also be displayed. Also the control you specify with the controlId parameter, will be
           * searched inside of the view of the parent not in the rootView, provided in the config. The control will
           * be searched using the byId function of a view. When it is not found, the global id is checked.
           *
           * The main usecase for the parent property is placing a view inside a smaller container of a view, which
           * is also created by targets. This is useful for lazy loading views, only if the user really navigates
           * to this part of your application.
           *
           * **Example:** Our aim is to lazy load a tab of an IconTabBar (a control that displays a view initially
           * and when a user clicks on it the view changes). It's a perfect candidate to lazy load something inside
           * of it.
           *
           * **Example app structure:**
           *
           * We have a `rootView` that is returned by the `createContent` function of our `UIComponent`. This view
           * contains an `sap.m.App` control with the ID 'myApp'
           * ```javascript
           *
           *
           * <View xmlns="sap.m">
           *     <App id="myApp"/>
           * </View>
           *
           * ```
           *  an xml view called 'Detail'
           * ```javascript
           *
           *
           * <View xmlns="sap.m">
           *     <IconTabBar>
           *         <items>
           *             <IconTabFilter>
           *                 <!-- content of our first tab -->
           *             <IconTabFilter>
           *             <IconTabFilter id="mySecondTab">
           *                 <!-- nothing here, since we will lazy load this one with a target -->
           *             <IconTabFilter>
           *         </items>
           *     </IconTabBar>
           * </View>
           *
           * ```
           *  and a view called 'SecondTabContent', this one contains our content we want to have lazy loaded. Now
           * we need to create our `Targets` instance with a config matching our app:
           * ```javascript
           *
           *
           *     new Targets({
           *         //Creates our views except for root, we created this one before - when using a component you
           *         views: new Views(),
           *         config: {
           *             // all of our views have that type
           *             viewType: 'XML',
           *             // a reference to the app control in the rootView created by our UIComponent
           *             controlId: 'myApp',
           *             // An app has a pages aggregation where the views need to be put into
           *             controlAggregation: 'pages',
           *             // all targets have type "View"
           *             type: "View"
           *         },
           *         targets: {
           *             detail: {
           *                 name: 'Detail'
           *             },
           *             secondTabContent: {
           *                 // A reference to the detail target defined above
           *                 parent: 'detail',
           *                 // A reference to the second Tab container in the Detail view. Here the target does not look in the rootView, it looks in the Parent view (Detail).
           *                 controlId: 'mySecondTab',
           *                 // An IconTabFilter has an aggregation called content so we need to overwrite the pages set in the config as default.
           *                 controlAggregation: 'content',
           *                 // A view containing the content
           *                 name: 'SecondTabContent'
           *             }
           *         }
           *     });
           *
           * ```
           *
           *
           * Now, if we call ` oTargets.display("secondTabContent") `, 2 views will be created: Detail and SecondTabContent.
           * The 'Detail' view will be put into the pages aggregation of the App. And afterwards the 'SecondTabContent'
           * view will be put into the content Aggregation of the second IconTabFilter. So a parent will always be
           * created before the target referencing it.
           */
          parent?: string;
          /**
           * If you are having an application that has a logical order of views (eg: a create account process, first
           * provide user data, then review and confirm them). You always want to show a backwards transition if a
           * navigation from the confirm to the userData page takes place. Therefore you may use the `level`. The
           * `level` has to be an integer. The user data page should have a lower number than the confirm page. These
           * levels should represent the user process of your application and they do not have to match the container
           * structure of your Targets. If the user navigates between targets with the same `level`, a forward transition
           * is taken. If you pass a direction into the display function, the `level` will be ignored.
           *
           * **Example:**
           *
           *
           * ```javascript
           *
           *
           *     {
           *         targets: {
           *             startPage: {
           *                 level: 0
           *                 // more properties
           *             },
           *             userData: {
           *                 level: 1
           *                 // more properties
           *             },
           *             confirmRegistration: {
           *                 level: 2
           *                 // more properties
           *             },
           *             settings: {
           *                 //no view level here
           *             }
           *         }
           *     }
           *
           * ```
           *
           *
           * Currently the 'userData' target is displayed.
           * 	 -  If we navigate to 'startPage' the navContainer will show a backwards navigation, since the `level`
           * 			is lower.
           * 	 -  If we navigate to 'userData' the navContainer will show a forwards navigation, since the `level`
           * 			is higher.
           * 	 -  If we navigate to 'settings' the navContainer will show a forwards navigation, since the `level`
           * 			is not defined and cannot be compared.
           */
          level?: int;
          /**
           * Defines which transition of the {@link sap.m.NavContainer} is applied when navigating. If it is not defined,
           * the `NavContainer` take its default transition.
           */
          transition?: string;
          /**
           * Defines the `transitionParameters` of the `{@link sap.m.NavContainer}`
           */
          transitionParameters?: string;
        };
      };
    });

    /**
     * Creates a new subclass of class sap.f.routing.Targets with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.routing.Targets.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Targets>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.routing.Targets.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): Metadata;
    /**
     * Returns the `TargetHandler` instance.
     *
     * @returns The `TargetHandler` instance
     */
    getTargetHandler(): TargetHandler;
  }
}

declare module "sap/f/SearchManager" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import SuggestionItem from "sap/m/SuggestionItem";

  import Event from "sap/ui/base/Event";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.67
   *
   * Defines specific properties of the search that are applied to `sap.f.ShellBar`.
   */
  export default class SearchManager extends UI5Element {
    /**
     * Constructor for a new `SearchManager`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SearchManagerSettings
    );
    /**
     * Constructor for a new `SearchManager`.
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
      mSettings?: $SearchManagerSettings
    );

    /**
     * Creates a new subclass of class sap.f.SearchManager with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, SearchManager>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.SearchManager.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some suggestionItem to the aggregation {@link #getSuggestionItems suggestionItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addSuggestionItem(
      /**
       * The suggestionItem to add; if empty, nothing is inserted
       */
      oSuggestionItem: SuggestionItem
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.f.SearchManager`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.SearchManager` itself.
     *
     * Fired when the value of the search field is changed by the user, for example at each key press.
     *
     * **Note:** Do not invalidate or re-render a focused search field, especially during the `liveChange` event.
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
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.SearchManager` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.f.SearchManager`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.SearchManager` itself.
     *
     * Fired when the value of the search field is changed by the user, for example at each key press.
     *
     * **Note:** Do not invalidate or re-render a focused search field, especially during the `liveChange` event.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachLiveChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.SearchManager` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.f.SearchManager`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.SearchManager` itself.
     *
     * Fired when the user triggers a search.
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
       * Context object to call the event handler with. Defaults to this `sap.f.SearchManager` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.f.SearchManager`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.SearchManager` itself.
     *
     * Fired when the user triggers a search.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSearch(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.SearchManager` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:suggest suggest} event of this `sap.f.SearchManager`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.SearchManager` itself.
     *
     * Fired when the search field is initially focused or its value is changed by the user. This event means
     * that suggestion data should be updated, in case if suggestions are used. Use the value parameter to create
     * new suggestions for it.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSuggest(
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
       * Context object to call the event handler with. Defaults to this `sap.f.SearchManager` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:suggest suggest} event of this `sap.f.SearchManager`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.SearchManager` itself.
     *
     * Fired when the search field is initially focused or its value is changed by the user. This event means
     * that suggestion data should be updated, in case if suggestions are used. Use the value parameter to create
     * new suggestions for it.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSuggest(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.SearchManager` itself
       */
      oListener?: object
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
     * Destroys all the suggestionItems in the aggregation {@link #getSuggestionItems suggestionItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySuggestionItems(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:liveChange liveChange} event of this `sap.f.SearchManager`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachLiveChange(
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
     * Detaches event handler `fnFunction` from the {@link #event:search search} event of this `sap.f.SearchManager`.
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
     * Detaches event handler `fnFunction` from the {@link #event:suggest suggest} event of this `sap.f.SearchManager`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSuggest(
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
     * Fires event {@link #event:liveChange liveChange} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireLiveChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Current search string.
         */
        newValue?: string;
      }
    ): this;
    /**
     * Fires event {@link #event:search search} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSearch(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The search query string.
         */
        query?: string;
        /**
         * Indicates if the user pressed the clear icon.
         */
        clearButtonPressed?: boolean;
      }
    ): this;
    /**
     * Fires event {@link #event:suggest suggest} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSuggest(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Current search string of the search field.
         */
        suggestValue?: string;
      }
    ): this;
    /**
     * Gets current value of property {@link #getEnabled enabled}.
     *
     * Determines whether the control is enabled.
     *
     * Default value is `true`.
     *
     * @returns Value of property `enabled`
     */
    getEnabled(): boolean;
    /**
     * Gets current value of property {@link #getEnableSuggestions enableSuggestions}.
     *
     * If true, a `suggest` event is fired when user types in the input and when the input is focused. On a
     * phone device, a full screen dialog with suggestions is always shown even if the suggestions list is empty.
     *
     * Default value is `false`.
     *
     * @returns Value of property `enableSuggestions`
     */
    getEnableSuggestions(): boolean;
    /**
     * Gets current value of property {@link #getMaxLength maxLength}.
     *
     * Determines the maximum number of characters. Value '0' means the feature is switched off.
     *
     * Default value is `0`.
     *
     * @returns Value of property `maxLength`
     */
    getMaxLength(): int;
    /**
     * Gets current value of property {@link #getPlaceholder placeholder}.
     *
     * Defines the text that is displayed when no value is available. The default placeholder text is the word
     * "Search" in the current local language (if supported) or in English.
     *
     * @returns Value of property `placeholder`
     */
    getPlaceholder(): string;
    /**
     * Gets content of aggregation {@link #getSuggestionItems suggestionItems}.
     *
     * `SuggestionItems` are the items which are displayed in the suggestions list. The following properties
     * can be used:
     * 	 - `key` - it is not displayed and may be used as internal technical field
     * 	 - `text` - it is displayed as normal suggestion text
     * 	 - `icon`
     * 	 - `description` - additional text that may be used to visually display search item type or category
     */
    getSuggestionItems(): SuggestionItem[];
    /**
     * Gets current value of property {@link #getValue value}.
     *
     * Defines the input value.
     *
     * @returns Value of property `value`
     */
    getValue(): string;
    /**
     * Checks for the provided `sap.m.SuggestionItem` in the aggregation {@link #getSuggestionItems suggestionItems}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfSuggestionItem(
      /**
       * The suggestionItem whose index is looked for
       */
      oSuggestionItem: SuggestionItem
    ): int;
    /**
     * Inserts a suggestionItem into the aggregation {@link #getSuggestionItems suggestionItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertSuggestionItem(
      /**
       * The suggestionItem to insert; if empty, nothing is inserted
       */
      oSuggestionItem: SuggestionItem,
      /**
       * The `0`-based index the suggestionItem should be inserted at; for a negative value of `iIndex`, the suggestionItem
       * is inserted at position 0; for a value greater than the current size of the aggregation, the suggestionItem
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getSuggestionItems suggestionItems}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllSuggestionItems(): SuggestionItem[];
    /**
     * Removes a suggestionItem from the aggregation {@link #getSuggestionItems suggestionItems}.
     *
     * @returns The removed suggestionItem or `null`
     */
    removeSuggestionItem(
      /**
       * The suggestionItem to remove or its index or id
       */
      vSuggestionItem: int | string | SuggestionItem
    ): SuggestionItem | null;
    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     *
     * Determines whether the control is enabled.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnabled(
      /**
       * New value for property `enabled`
       */
      bEnabled?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getEnableSuggestions enableSuggestions}.
     *
     * If true, a `suggest` event is fired when user types in the input and when the input is focused. On a
     * phone device, a full screen dialog with suggestions is always shown even if the suggestions list is empty.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableSuggestions(
      /**
       * New value for property `enableSuggestions`
       */
      bEnableSuggestions?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getMaxLength maxLength}.
     *
     * Determines the maximum number of characters. Value '0' means the feature is switched off.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMaxLength(
      /**
       * New value for property `maxLength`
       */
      iMaxLength?: int
    ): this;
    /**
     * Sets a new value for property {@link #getPlaceholder placeholder}.
     *
     * Defines the text that is displayed when no value is available. The default placeholder text is the word
     * "Search" in the current local language (if supported) or in English.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * Sets a new value for property {@link #getValue value}.
     *
     * Defines the input value.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setValue(
      /**
       * New value for property `value`
       */
      sValue?: string
    ): this;
    /**
     * Unbinds property {@link #getValue value} from model data.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    unbindValue(): this;
  }

  export interface $SearchManagerSettings extends $ElementSettings {
    /**
     * Defines the input value.
     */
    value?: string | PropertyBindingInfo;

    /**
     * Defines the text that is displayed when no value is available. The default placeholder text is the word
     * "Search" in the current local language (if supported) or in English.
     */
    placeholder?: string | PropertyBindingInfo;

    /**
     * Determines the maximum number of characters. Value '0' means the feature is switched off.
     */
    maxLength?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the control is enabled.
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If true, a `suggest` event is fired when user types in the input and when the input is focused. On a
     * phone device, a full screen dialog with suggestions is always shown even if the suggestions list is empty.
     */
    enableSuggestions?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * `SuggestionItems` are the items which are displayed in the suggestions list. The following properties
     * can be used:
     * 	 - `key` - it is not displayed and may be used as internal technical field
     * 	 - `text` - it is displayed as normal suggestion text
     * 	 - `icon`
     * 	 - `description` - additional text that may be used to visually display search item type or category
     */
    suggestionItems?:
      | SuggestionItem[]
      | SuggestionItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Fired when the user triggers a search.
     */
    search?: (oEvent: Event) => void;

    /**
     * Fired when the value of the search field is changed by the user, for example at each key press.
     *
     * **Note:** Do not invalidate or re-render a focused search field, especially during the `liveChange` event.
     */
    liveChange?: (oEvent: Event) => void;

    /**
     * Fired when the search field is initially focused or its value is changed by the user. This event means
     * that suggestion data should be updated, in case if suggestions are used. Use the value parameter to create
     * new suggestions for it.
     */
    suggest?: (oEvent: Event) => void;
  }
}

declare module "sap/f/semantic/AddAction" {
  import {
    default as SemanticButton,
    $SemanticButtonSettings,
  } from "sap/f/semantic/SemanticButton";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.46.0
   *
   * A semantic-specific button, eligible for the `addAction` aggregation of the {@link sap.f.semantic.SemanticPage}
   * to be placed in its title.
   */
  export default class AddAction extends SemanticButton {
    /**
     * Constructor for a new `AddAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $AddActionSettings
    );
    /**
     * Constructor for a new `AddAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $AddActionSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.AddAction with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
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
      oClassInfo?: sap.ClassInfo<T, AddAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.AddAction.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $AddActionSettings extends $SemanticButtonSettings {}
}

declare module "sap/f/semantic/CloseAction" {
  import {
    default as SemanticButton,
    $SemanticButtonSettings,
  } from "sap/f/semantic/SemanticButton";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.46.0
   *
   * A semantic-specific button, eligible for the `closeAction` aggregation of the {@link sap.f.semantic.SemanticPage}
   * to be placed in its title.
   */
  export default class CloseAction extends SemanticButton {
    /**
     * Constructor for a new `CloseAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $CloseActionSettings
    );
    /**
     * Constructor for a new `CloseAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $CloseActionSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.CloseAction with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
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
      oClassInfo?: sap.ClassInfo<T, CloseAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.CloseAction.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $CloseActionSettings extends $SemanticButtonSettings {}
}

declare module "sap/f/semantic/CopyAction" {
  import {
    default as SemanticButton,
    $SemanticButtonSettings,
  } from "sap/f/semantic/SemanticButton";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.46.0
   *
   * A semantic-specific button, eligible for the `copyAction` aggregation of the {@link sap.f.semantic.SemanticPage}
   * to be placed in its title.
   */
  export default class CopyAction extends SemanticButton {
    /**
     * Constructor for a new `CopyAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $CopyActionSettings
    );
    /**
     * Constructor for a new `CopyAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $CopyActionSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.CopyAction with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
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
      oClassInfo?: sap.ClassInfo<T, CopyAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.CopyAction.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $CopyActionSettings extends $SemanticButtonSettings {}
}

declare module "sap/f/semantic/DeleteAction" {
  import {
    default as SemanticButton,
    $SemanticButtonSettings,
  } from "sap/f/semantic/SemanticButton";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.46.0
   *
   * A semantic-specific button, eligible for the `deleteAction` aggregation of the {@link sap.f.semantic.SemanticPage}
   * to be placed in its title.
   */
  export default class DeleteAction extends SemanticButton {
    /**
     * Constructor for a new `DeleteAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $DeleteActionSettings
    );
    /**
     * Constructor for a new `DeleteAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $DeleteActionSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.DeleteAction with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
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
      oClassInfo?: sap.ClassInfo<T, DeleteAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.DeleteAction.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $DeleteActionSettings extends $SemanticButtonSettings {}
}

declare module "sap/f/semantic/DiscussInJamAction" {
  import {
    default as SemanticButton,
    $SemanticButtonSettings,
  } from "sap/f/semantic/SemanticButton";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.46.0
   *
   * A semantic-specific button, eligible for the `discussInJamAction` aggregation of the {@link sap.f.semantic.SemanticPage}
   * to be placed in the share menu within its title.
   */
  export default class DiscussInJamAction extends SemanticButton {
    /**
     * Constructor for a new `DiscussInJamAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $DiscussInJamActionSettings
    );
    /**
     * Constructor for a new `DiscussInJamAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $DiscussInJamActionSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.DiscussInJamAction with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
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
      oClassInfo?: sap.ClassInfo<T, DiscussInJamAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.DiscussInJamAction.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $DiscussInJamActionSettings
    extends $SemanticButtonSettings {}
}

declare module "sap/f/semantic/EditAction" {
  import {
    default as SemanticButton,
    $SemanticButtonSettings,
  } from "sap/f/semantic/SemanticButton";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.50
   *
   * A semantic-specific button, eligible for the `editAction` aggregation of the {@link sap.f.semantic.SemanticPage}
   * to be placed in its title.
   */
  export default class EditAction extends SemanticButton {
    /**
     * Constructor for a new `EditAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $EditActionSettings
    );
    /**
     * Constructor for a new `EditAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $EditActionSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.EditAction with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
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
      oClassInfo?: sap.ClassInfo<T, EditAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.EditAction.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $EditActionSettings extends $SemanticButtonSettings {}
}

declare module "sap/f/semantic/ExitFullScreenAction" {
  import {
    default as SemanticButton,
    $SemanticButtonSettings,
  } from "sap/f/semantic/SemanticButton";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.46.0
   *
   * A semantic-specific button, eligible for the `exitFullScreenAction` aggregation of the {@link sap.f.semantic.SemanticPage}
   * to be placed in its title.
   */
  export default class ExitFullScreenAction extends SemanticButton {
    /**
     * Constructor for a new `ExitFullScreenAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $ExitFullScreenActionSettings
    );
    /**
     * Constructor for a new `ExitFullScreenAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $ExitFullScreenActionSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.ExitFullScreenAction with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ExitFullScreenAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.ExitFullScreenAction.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $ExitFullScreenActionSettings
    extends $SemanticButtonSettings {}
}

declare module "sap/f/semantic/FavoriteAction" {
  import {
    default as SemanticToggleButton,
    $SemanticToggleButtonSettings,
  } from "sap/f/semantic/SemanticToggleButton";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.46.0
   *
   * A semantic-specific button, eligible for the `favoriteAction` aggregation of the {@link sap.f.semantic.SemanticPage}
   * to be placed in its title.
   */
  export default class FavoriteAction extends SemanticToggleButton {
    /**
     * Constructor for a new `FavoriteAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticToggleButton#constructor
     * sap.f.semantic.SemanticToggleButton} can be used.
     */
    constructor(
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $FavoriteActionSettings
    );
    /**
     * Constructor for a new `FavoriteAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticToggleButton#constructor
     * sap.f.semantic.SemanticToggleButton} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $FavoriteActionSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.FavoriteAction with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.semantic.SemanticToggleButton.extend}.
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
      oClassInfo?: sap.ClassInfo<T, FavoriteAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.FavoriteAction.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $FavoriteActionSettings
    extends $SemanticToggleButtonSettings {}
}

declare module "sap/f/semantic/FlagAction" {
  import {
    default as SemanticToggleButton,
    $SemanticToggleButtonSettings,
  } from "sap/f/semantic/SemanticToggleButton";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.46.0
   *
   * A semantic-specific button, eligible for the `flagAction` aggregation of the {@link sap.f.semantic.SemanticPage}
   * to be placed in its title.
   */
  export default class FlagAction extends SemanticToggleButton {
    /**
     * Constructor for a new `FlagAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticToggleButton#constructor
     * sap.f.semantic.SemanticToggleButton} can be used.
     */
    constructor(
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $FlagActionSettings
    );
    /**
     * Constructor for a new `FlagAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticToggleButton#constructor
     * sap.f.semantic.SemanticToggleButton} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $FlagActionSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.FlagAction with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.semantic.SemanticToggleButton.extend}.
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
      oClassInfo?: sap.ClassInfo<T, FlagAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.FlagAction.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $FlagActionSettings extends $SemanticToggleButtonSettings {}
}

declare module "sap/f/semantic/FooterMainAction" {
  import {
    default as MainAction,
    $MainActionSettings,
  } from "sap/f/semantic/MainAction";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.46.0
   *
   * A semantic-specific button, eligible for the `footerMainAction` aggregation of the {@link sap.f.semantic.SemanticPage}
   * to be placed in its footer.
   */
  export default class FooterMainAction extends MainAction {
    /**
     * Constructor for a new `FooterMainAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.MainAction#constructor
     * sap.f.semantic.MainAction} can be used.
     */
    constructor(
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $FooterMainActionSettings
    );
    /**
     * Constructor for a new `FooterMainAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.MainAction#constructor
     * sap.f.semantic.MainAction} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $FooterMainActionSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.FooterMainAction with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.semantic.MainAction.extend}.
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
      oClassInfo?: sap.ClassInfo<T, FooterMainAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.FooterMainAction.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $FooterMainActionSettings extends $MainActionSettings {}
}

declare module "sap/f/semantic/FullScreenAction" {
  import {
    default as SemanticButton,
    $SemanticButtonSettings,
  } from "sap/f/semantic/SemanticButton";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.46.0
   *
   * A semantic-specific button, eligible for the `fullScreenAction` aggregation of the {@link sap.f.semantic.SemanticPage}
   * to be placed in its title.
   */
  export default class FullScreenAction extends SemanticButton {
    /**
     * Constructor for a new `FullScreenAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $FullScreenActionSettings
    );
    /**
     * Constructor for a new `FullScreenAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $FullScreenActionSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.FullScreenAction with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
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
      oClassInfo?: sap.ClassInfo<T, FullScreenAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.FullScreenAction.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $FullScreenActionSettings extends $SemanticButtonSettings {}
}

declare module "sap/f/semantic/MainAction" {
  import {
    default as SemanticButton,
    $SemanticButtonSettings,
  } from "sap/f/semantic/SemanticButton";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.46.0
   *
   * Serves as a base class for the {@link sap.f.semantic.TitleMainAction} and {@link sap.f.semantic.FooterMainAction}
   * controls.
   */
  export default class MainAction extends SemanticButton {
    /**
     * Constructor for a new MainAction.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $MainActionSettings
    );
    /**
     * Constructor for a new MainAction.
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
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $MainActionSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.MainAction with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
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
      oClassInfo?: sap.ClassInfo<T, MainAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.MainAction.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Defines `MainAction` text
     *
     * @returns Value of property `text`
     */
    getText(): string;
    /**
     * Sets a new value for property {@link #getText text}.
     *
     * Defines `MainAction` text
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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

  export interface $MainActionSettings extends $SemanticButtonSettings {
    /**
     * Defines `MainAction` text
     */
    text?: string | PropertyBindingInfo;
  }
}

declare module "sap/f/semantic/MessagesIndicator" {
  import {
    default as SemanticButton,
    $SemanticButtonSettings,
  } from "sap/f/semantic/SemanticButton";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.46.0
   *
   * A semantic-specific button, eligible for the `messagesIndicator` aggregation of the {@link sap.f.semantic.SemanticPage}
   * to be placed in its footer.
   */
  export default class MessagesIndicator extends SemanticButton {
    /**
     * Constructor for a new `MessagesIndicator`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $MessagesIndicatorSettings
    );
    /**
     * Constructor for a new `MessagesIndicator`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $MessagesIndicatorSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.MessagesIndicator with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
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
      oClassInfo?: sap.ClassInfo<T, MessagesIndicator>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.MessagesIndicator.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $MessagesIndicatorSettings extends $SemanticButtonSettings {}
}

declare module "sap/f/semantic/NegativeAction" {
  import {
    default as SemanticButton,
    $SemanticButtonSettings,
  } from "sap/f/semantic/SemanticButton";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.46.0
   *
   * A semantic-specific button, eligible for the `negativeAction` aggregation of the {@link sap.f.semantic.SemanticPage}
   * to be placed in its footer.
   */
  export default class NegativeAction extends SemanticButton {
    /**
     * Constructor for a new `NegativeAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $NegativeActionSettings
    );
    /**
     * Constructor for a new `NegativeAction`.
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
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $NegativeActionSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.NegativeAction with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
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
      oClassInfo?: sap.ClassInfo<T, NegativeAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.NegativeAction.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Defines `NegativeAction` text. **Note:** the default text is "Reject"
     *
     * @returns Value of property `text`
     */
    getText(): string;
    /**
     * Sets a new value for property {@link #getText text}.
     *
     * Defines `NegativeAction` text. **Note:** the default text is "Reject"
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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

  export interface $NegativeActionSettings extends $SemanticButtonSettings {
    /**
     * Defines `NegativeAction` text. **Note:** the default text is "Reject"
     */
    text?: string | PropertyBindingInfo;
  }
}

declare module "sap/f/semantic/PositiveAction" {
  import {
    default as SemanticButton,
    $SemanticButtonSettings,
  } from "sap/f/semantic/SemanticButton";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.46.0
   *
   * A semantic-specific button, eligible for the `positiveAction` aggregation of the {@link sap.f.semantic.SemanticPage}
   * to be placed in its footer.
   */
  export default class PositiveAction extends SemanticButton {
    /**
     * Constructor for a new `PositiveAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $PositiveActionSettings
    );
    /**
     * Constructor for a new `PositiveAction`.
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
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $PositiveActionSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.PositiveAction with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
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
      oClassInfo?: sap.ClassInfo<T, PositiveAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.PositiveAction.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Defines `PositiveAction` text. **Note:** the default text is "Accept"
     *
     * @returns Value of property `text`
     */
    getText(): string;
    /**
     * Sets a new value for property {@link #getText text}.
     *
     * Defines `PositiveAction` text. **Note:** the default text is "Accept"
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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

  export interface $PositiveActionSettings extends $SemanticButtonSettings {
    /**
     * Defines `PositiveAction` text. **Note:** the default text is "Accept"
     */
    text?: string | PropertyBindingInfo;
  }
}

declare module "sap/f/semantic/PrintAction" {
  import {
    default as SemanticButton,
    $SemanticButtonSettings,
  } from "sap/f/semantic/SemanticButton";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.46.0
   *
   * A semantic-specific button, eligible for the `printAction` aggregation of the {@link sap.f.semantic.SemanticPage}
   * to be placed in the share menu within its title.
   */
  export default class PrintAction extends SemanticButton {
    /**
     * Constructor for a new `PrintAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $PrintActionSettings
    );
    /**
     * Constructor for a new `PrintAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $PrintActionSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.PrintAction with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
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
      oClassInfo?: sap.ClassInfo<T, PrintAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.PrintAction.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $PrintActionSettings extends $SemanticButtonSettings {}
}

declare module "sap/f/semantic/SemanticButton" {
  import {
    default as SemanticButton1,
    $SemanticButtonSettings as $SemanticButtonSettings1,
  } from "sap/m/semantic/SemanticButton";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.46.0
   *
   * A base class for the available semantic actions, such as {@link sap.f.semantic.AddAction AddAction},
   * {@link sap.f.semantic.CloseAction CloseAction}, etc.
   */
  export default class SemanticButton extends SemanticButton1 {
    /**
     * Constructor for a new `SemanticButton`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.m.semantic.SemanticButton#constructor
     * sap.m.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SemanticButtonSettings
    );
    /**
     * Constructor for a new `SemanticButton`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.m.semantic.SemanticButton#constructor
     * sap.m.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $SemanticButtonSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.SemanticButton with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.m.semantic.SemanticButton.extend}.
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
      oClassInfo?: sap.ClassInfo<T, SemanticButton>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.SemanticButton.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $SemanticButtonSettings extends $SemanticButtonSettings1 {}
}

declare module "sap/f/semantic/SemanticControl" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.46.0
   *
   * The base class for the {@link sap.f.semantic.SemanticButton}.
   */
  export default class SemanticControl extends UI5Element {
    /**
     * Constructor for a new `SemanticControl`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SemanticControlSettings
    );
    /**
     * Constructor for a new `SemanticControl`.
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
      mSettings?: $SemanticControlSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.SemanticControl with name `sClassName` and enriches it
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
      oClassInfo?: sap.ClassInfo<T, SemanticControl>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.SemanticControl.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getVisible visible}.
     *
     * Determines whether the `SemanticControl` is visible.
     *
     * Default value is `true`.
     *
     * @returns Value of property `visible`
     */
    getVisible(): boolean;
    /**
     * Sets a new value for property {@link #getVisible visible}.
     *
     * Determines whether the `SemanticControl` is visible.
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

  export interface $SemanticControlSettings extends $ElementSettings {
    /**
     * Determines whether the `SemanticControl` is visible.
     */
    visible?: boolean | PropertyBindingInfo | `{${string}}`;
  }
}

declare module "sap/f/semantic/SemanticPage" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import Button from "sap/m/Button";

  import OverflowToolbarButton from "sap/m/OverflowToolbarButton";

  import AddAction from "sap/f/semantic/AddAction";

  import CloseAction from "sap/f/semantic/CloseAction";

  import CopyAction from "sap/f/semantic/CopyAction";

  import DeleteAction from "sap/f/semantic/DeleteAction";

  import DiscussInJamAction from "sap/f/semantic/DiscussInJamAction";

  import DraftIndicator from "sap/m/DraftIndicator";

  import EditAction from "sap/f/semantic/EditAction";

  import ExitFullScreenAction from "sap/f/semantic/ExitFullScreenAction";

  import FavoriteAction from "sap/f/semantic/FavoriteAction";

  import FlagAction from "sap/f/semantic/FlagAction";

  import FooterMainAction from "sap/f/semantic/FooterMainAction";

  import FullScreenAction from "sap/f/semantic/FullScreenAction";

  import DynamicPageAccessibleLandmarkInfo from "sap/f/DynamicPageAccessibleLandmarkInfo";

  import MessagesIndicator from "sap/f/semantic/MessagesIndicator";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import NegativeAction from "sap/f/semantic/NegativeAction";

  import PositiveAction from "sap/f/semantic/PositiveAction";

  import PrintAction from "sap/f/semantic/PrintAction";

  import SendEmailAction from "sap/f/semantic/SendEmailAction";

  import SendMessageAction from "sap/f/semantic/SendMessageAction";

  import ShareInJamAction from "sap/f/semantic/ShareInJamAction";

  import {
    DynamicPageTitleShrinkRatio,
    DynamicPageTitleArea,
  } from "sap/f/library";

  import { IBreadcrumbs } from "sap/m/library";

  import TitleMainAction from "sap/f/semantic/TitleMainAction";

  import Title from "sap/m/Title";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.46.0
   *
   * Provides enhanced functionality by internally aggregating {@link sap.f.DynamicPage} and contains controls
   * with semantic-specific meaning.
   *
   * Overview:
   *
   * Content specified in the `sap.f.semantic.SemanticPage` aggregations is automatically positioned in dedicated
   * sections of the title or the footer of the page, depending on the control's semantics.
   *
   * The actions in the `SemanticPage` title are grouped to text actions or icon actions. When an aggregation
   * is set, the actions appear in the following predefined order (from left to right):
   *
   * Text actions:
   * 	 - The main semantic text action - `titleMainAction`
   * 	 - Any custom text actions - `titleCustomTextActions`
   * 	 - The semantic text actions - `editAction`, `deleteAction`, `copyAction` and `addAction`
   *
   * Icon actions:
   * 	 - Any custom icon actions - `titleCustomIconActions`
   * 	 - The simple semantic icon actions - `favoriteAction` and `flagAction`
   * 	 - The share menu semantic icon actions as a drop-down list with the following order:
   * 	`sendEmailAction`
   * 	 - `discussInJamAction`
   * 	 - `shareInJamAction`
   * 	 - `sendMessageAction`
   * 	 - `printAction`
   * 	 - Any `customShareActions`
   * 	 - The navigation semantic actions - `fullScreenAction`, `exitFullScreenAction`, and `closeAction`
   *
   * The actions in the `SemanticPage` footer are positioned either on its left or right area and have the
   * following predefined order:
   *
   * Footer left area:
   * 	 - The semantic text action - `messagesIndicator`
   * 	 - The semantic label - `draftIndicator`
   *
   * Footer right area:
   * 	 - The main semantic text action - `footerMainAction`
   * 	 - The semantic text actions - `positiveAction` and `negativeAction`
   * 	 - Any custom text actions - `footerCustomActions`
   *
   * Usage:
   *
   * Using the `SemanticPage` facilitates the implementation of the SAP Fiori 2.0 design guidelines.
   *
   * Responsive behavior:
   *
   * The responsive behavior of the `SemanticPage` depends on the behavior of the content that is displayed.
   * To adjust the `SemanticPage` content padding, the `sapUiContentPadding`, `sapUiNoContentPadding`, and
   * `sapUiResponsiveContentPadding` CSS classes can be used.
   */
  export default class SemanticPage extends Control {
    /**
     * Constructor for a new `SemanticPage`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:47dc86847f7a426a8e557167cf523bda Semantic Page}
     * 	{@link topic:84f3d52f492648d5b594e4f45dca7727 Semantic Pages}
     * 	{@link topic:4a97a07ec8f5441d901994d82eaab1f5 Semantic Page (sap.m)}
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/semantic-page/ Semantic Page}
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SemanticPageSettings
    );
    /**
     * Constructor for a new `SemanticPage`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:47dc86847f7a426a8e557167cf523bda Semantic Page}
     * 	{@link topic:84f3d52f492648d5b594e4f45dca7727 Semantic Pages}
     * 	{@link topic:4a97a07ec8f5441d901994d82eaab1f5 Semantic Page (sap.m)}
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/semantic-page/ Semantic Page}
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $SemanticPageSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.SemanticPage with name `sClassName` and enriches it with
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
      oClassInfo?: sap.ClassInfo<T, SemanticPage>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.SemanticPage.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some customShareAction to the aggregation {@link #getCustomShareActions customShareActions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addCustomShareAction(
      /**
       * The customShareAction to add; if empty, nothing is inserted
       */
      oCustomShareAction: Button
    ): this;
    /**
     * Adds some footerCustomAction to the aggregation {@link #getFooterCustomActions footerCustomActions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addFooterCustomAction(
      /**
       * The footerCustomAction to add; if empty, nothing is inserted
       */
      oFooterCustomAction: Button
    ): this;
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
     * @SINCE 1.52
     *
     * Adds some titleContent to the aggregation {@link #getTitleContent titleContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addTitleContent(
      /**
       * The titleContent to add; if empty, nothing is inserted
       */
      oTitleContent: Control
    ): this;
    /**
     * Adds some titleCustomIconAction to the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addTitleCustomIconAction(
      /**
       * The titleCustomIconAction to add; if empty, nothing is inserted
       */
      oTitleCustomIconAction: OverflowToolbarButton
    ): this;
    /**
     * Adds some titleCustomTextAction to the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addTitleCustomTextAction(
      /**
       * The titleCustomTextAction to add; if empty, nothing is inserted
       */
      oTitleCustomTextAction: Button
    ): this;
    /**
     * Adds some titleExpandedContent to the aggregation {@link #getTitleExpandedContent titleExpandedContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addTitleExpandedContent(
      /**
       * The titleExpandedContent to add; if empty, nothing is inserted
       */
      oTitleExpandedContent: Control
    ): this;
    /**
     * Adds some titleSnappedContent to the aggregation {@link #getTitleSnappedContent titleSnappedContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addTitleSnappedContent(
      /**
       * The titleSnappedContent to add; if empty, nothing is inserted
       */
      oTitleSnappedContent: Control
    ): this;
    /**
     * Destroys the addAction in the aggregation {@link #getAddAction addAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyAddAction(): this;
    /**
     * Destroys the closeAction in the aggregation {@link #getCloseAction closeAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyCloseAction(): this;
    /**
     * Destroys the content in the aggregation {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;
    /**
     * Destroys the copyAction in the aggregation {@link #getCopyAction copyAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyCopyAction(): this;
    /**
     * Destroys all the customShareActions in the aggregation {@link #getCustomShareActions customShareActions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyCustomShareActions(): this;
    /**
     * Destroys the deleteAction in the aggregation {@link #getDeleteAction deleteAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyDeleteAction(): this;
    /**
     * Destroys the discussInJamAction in the aggregation {@link #getDiscussInJamAction discussInJamAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyDiscussInJamAction(): this;
    /**
     * Destroys the draftIndicator in the aggregation {@link #getDraftIndicator draftIndicator}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyDraftIndicator(): this;
    /**
     * @SINCE 1.50
     *
     * Destroys the editAction in the aggregation {@link #getEditAction editAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyEditAction(): this;
    /**
     * Destroys the exitFullScreenAction in the aggregation {@link #getExitFullScreenAction exitFullScreenAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyExitFullScreenAction(): this;
    /**
     * Destroys the favoriteAction in the aggregation {@link #getFavoriteAction favoriteAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFavoriteAction(): this;
    /**
     * Destroys the flagAction in the aggregation {@link #getFlagAction flagAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFlagAction(): this;
    /**
     * Destroys all the footerCustomActions in the aggregation {@link #getFooterCustomActions footerCustomActions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFooterCustomActions(): this;
    /**
     * Destroys the footerMainAction in the aggregation {@link #getFooterMainAction footerMainAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFooterMainAction(): this;
    /**
     * Destroys the fullScreenAction in the aggregation {@link #getFullScreenAction fullScreenAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFullScreenAction(): this;
    /**
     * Destroys all the headerContent in the aggregation {@link #getHeaderContent headerContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyHeaderContent(): this;
    /**
     * @SINCE 1.61
     *
     * Destroys the landmarkInfo in the aggregation {@link #getLandmarkInfo landmarkInfo}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyLandmarkInfo(): this;
    /**
     * Destroys the messagesIndicator in the aggregation {@link #getMessagesIndicator messagesIndicator}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyMessagesIndicator(): this;
    /**
     * Destroys the negativeAction in the aggregation {@link #getNegativeAction negativeAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyNegativeAction(): this;
    /**
     * Destroys the positiveAction in the aggregation {@link #getPositiveAction positiveAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyPositiveAction(): this;
    /**
     * Destroys the printAction in the aggregation {@link #getPrintAction printAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyPrintAction(): this;
    /**
     * Destroys the saveAsTileAction in the aggregation {@link #getSaveAsTileAction saveAsTileAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySaveAsTileAction(): this;
    /**
     * Destroys the sendEmailAction in the aggregation {@link #getSendEmailAction sendEmailAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySendEmailAction(): this;
    /**
     * Destroys the sendMessageAction in the aggregation {@link #getSendMessageAction sendMessageAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySendMessageAction(): this;
    /**
     * Destroys the shareInJamAction in the aggregation {@link #getShareInJamAction shareInJamAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyShareInJamAction(): this;
    /**
     * @SINCE 1.52
     *
     * Destroys the titleBreadcrumbs in the aggregation {@link #getTitleBreadcrumbs titleBreadcrumbs}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTitleBreadcrumbs(): this;
    /**
     * @SINCE 1.52
     *
     * Destroys all the titleContent in the aggregation {@link #getTitleContent titleContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTitleContent(): this;
    /**
     * Destroys all the titleCustomIconActions in the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTitleCustomIconActions(): this;
    /**
     * Destroys all the titleCustomTextActions in the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTitleCustomTextActions(): this;
    /**
     * Destroys all the titleExpandedContent in the aggregation {@link #getTitleExpandedContent titleExpandedContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTitleExpandedContent(): this;
    /**
     * @SINCE 1.58
     *
     * Destroys the titleExpandedHeading in the aggregation {@link #getTitleExpandedHeading titleExpandedHeading}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTitleExpandedHeading(): this;
    /**
     * Destroys the titleHeading in the aggregation {@link #getTitleHeading titleHeading}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTitleHeading(): this;
    /**
     * Destroys the titleMainAction in the aggregation {@link #getTitleMainAction titleMainAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTitleMainAction(): this;
    /**
     * Destroys all the titleSnappedContent in the aggregation {@link #getTitleSnappedContent titleSnappedContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTitleSnappedContent(): this;
    /**
     * @SINCE 1.58
     *
     * Destroys the titleSnappedHeading in the aggregation {@link #getTitleSnappedHeading titleSnappedHeading}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTitleSnappedHeading(): this;
    /**
     * @SINCE 1.63
     *
     * Destroys the titleSnappedOnMobile in the aggregation {@link #getTitleSnappedOnMobile titleSnappedOnMobile}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTitleSnappedOnMobile(): this;
    /**
     * Gets content of aggregation {@link #getAddAction addAction}.
     *
     * A semantic-specific button which is placed in the `TextActions` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    getAddAction(): AddAction;
    /**
     * Gets content of aggregation {@link #getCloseAction closeAction}.
     *
     * A semantic-specific button which is placed in the `IconActions` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    getCloseAction(): CloseAction;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * The `SemanticPage` content.
     *
     * **Note:** The SAP Fiori Design guidelines require that the `SemanticPage`'s header content and the `SemanticPage`'s
     * content are aligned vertically. When using {@link sap.ui.layout.form.Form}, {@link sap.m.Panel}, {@link
     * sap.m.Table} and {@link sap.m.List} in the content area of `SemanticPage`, if the content is not already
     * aligned, you need to adjust their left text offset to achieve the vertical alignment. To do this, apply
     * the `sapFSemanticPageAlignContent` CSS class to them and set their `width` property to `auto` (if not
     * set by default).
     *
     * Example:
     *
     *
     * ```javascript
     *
     * ` <Panel class=“sapFSemanticPageAlignContent” width=“auto”></Panel> `
     * ```
     *
     *
     * Please keep in mind that the alignment is not possible when the controls are placed in a {@link sap.ui.layout.Grid}
     * or in other layout controls that use `overflow:hidden` CSS property.
     */
    getContent(): Control;
    /**
     * Gets content of aggregation {@link #getCopyAction copyAction}.
     *
     * A semantic-specific button which is placed in the `TextActions` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    getCopyAction(): CopyAction;
    /**
     * Gets content of aggregation {@link #getCustomShareActions customShareActions}.
     *
     * The `customShareActions` are placed in the `ShareMenu` area of the `SemanticPage` title, right after
     * the semantic actions.
     *
     * The text and icon of the button inside the `customShareActions` aggregation, can be customized.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    getCustomShareActions(): Button[];
    /**
     * Gets content of aggregation {@link #getDeleteAction deleteAction}.
     *
     * A semantic-specific button which is placed in the `TextActions` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    getDeleteAction(): DeleteAction;
    /**
     * Gets content of aggregation {@link #getDiscussInJamAction discussInJamAction}.
     *
     * A semantic-specific button which is placed in the `ShareMenu` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    getDiscussInJamAction(): DiscussInJamAction;
    /**
     * Gets content of aggregation {@link #getDraftIndicator draftIndicator}.
     *
     * A semantic-specific button which is placed in the `FooterLeft` area of the `SemanticPage` footer as a
     * second action.
     */
    getDraftIndicator(): DraftIndicator;
    /**
     * @SINCE 1.50
     *
     * Gets content of aggregation {@link #getEditAction editAction}.
     *
     * A semantic-specific button which is placed in the `TextActions` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    getEditAction(): EditAction;
    /**
     * Gets content of aggregation {@link #getExitFullScreenAction exitFullScreenAction}.
     *
     * A semantic-specific button which is placed in the `IconActions` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    getExitFullScreenAction(): ExitFullScreenAction;
    /**
     * Gets content of aggregation {@link #getFavoriteAction favoriteAction}.
     *
     * A semantic-specific button which is placed in the `IconActions` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    getFavoriteAction(): FavoriteAction;
    /**
     * @SINCE 1.73
     *
     * Gets current value of property {@link #getFitContent fitContent}.
     *
     * Optimizes `SemanticPage` responsiveness on small screens and behavior when expanding/collapsing the `SemanticPageHeader`.
     *
     * **Note:** It is recommended to use this property when displaying content of adaptive controls that stretch
     * to fill the available space. Such controls may be {@link sap.ui.table.Table} and {@link sap.ui.table.AnalyticalTable}
     * depending on their settings.
     *
     * Default value is `false`.
     *
     * @returns Value of property `fitContent`
     */
    getFitContent(): boolean;
    /**
     * Gets content of aggregation {@link #getFlagAction flagAction}.
     *
     * A semantic-specific button which is placed in the `IconActions` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    getFlagAction(): FlagAction;
    /**
     * Gets content of aggregation {@link #getFooterCustomActions footerCustomActions}.
     *
     * The `footerCustomActions` are placed in the `FooterRight` area of the `SemanticPage` footer, right after
     * the semantic footer actions.
     *
     * **Note:** Buttons that are part of this aggregation will always have their `type` property set to `Transparent`
     * by design.
     */
    getFooterCustomActions(): Button[];
    /**
     * Gets content of aggregation {@link #getFooterMainAction footerMainAction}.
     *
     * A semantic-specific button which is placed in the `FooterRight` area of the `SemanticPage` footer with
     * default text value set to `Save`.
     */
    getFooterMainAction(): FooterMainAction;
    /**
     * Gets content of aggregation {@link #getFullScreenAction fullScreenAction}.
     *
     * A semantic-specific button which is placed in the `IconActions` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    getFullScreenAction(): FullScreenAction;
    /**
     * Gets content of aggregation {@link #getHeaderContent headerContent}.
     *
     * The header content.
     */
    getHeaderContent(): Control[];
    /**
     * Gets current value of property {@link #getHeaderExpanded headerExpanded}.
     *
     * Determines whether the header is expanded.
     *
     * The header can be also expanded/collapsed by user interaction, which requires the property to be internally
     * mutated by the control to reflect the changed state.
     *
     * **Note:** Please be aware, that initially collapsed header state is not supported, so `headerExpanded`
     * should not be set to `false` when initializing the control.
     *
     * Default value is `true`.
     *
     * @returns Value of property `headerExpanded`
     */
    getHeaderExpanded(): boolean;
    /**
     * Gets current value of property {@link #getHeaderPinnable headerPinnable}.
     *
     * Determines whether the header is pinnable.
     *
     * Default value is `true`.
     *
     * @returns Value of property `headerPinnable`
     */
    getHeaderPinnable(): boolean;
    /**
     * @SINCE 1.61
     *
     * Gets content of aggregation {@link #getLandmarkInfo landmarkInfo}.
     *
     * Accessible landmark settings to be applied to the containers of the `sap.f.SemanticPage` control.
     *
     * If not set, no landmarks will be written.
     */
    getLandmarkInfo(): DynamicPageAccessibleLandmarkInfo;
    /**
     * Gets content of aggregation {@link #getMessagesIndicator messagesIndicator}.
     *
     * A semantic-specific button which is placed in the `FooterLeft` area of the `SemanticPage` footer as a
     * first action.
     */
    getMessagesIndicator(): MessagesIndicator;
    /**
     * Gets content of aggregation {@link #getNegativeAction negativeAction}.
     *
     * A semantic-specific button which is placed in the `FooterRight` area of the `SemanticPage` footer with
     * default text value set to `Reject`.
     */
    getNegativeAction(): NegativeAction;
    /**
     * Gets content of aggregation {@link #getPositiveAction positiveAction}.
     *
     * A semantic-specific button which is placed in the `FooterRight` area of the `SemanticPage` footer with
     * default text value set to `Accept`.
     */
    getPositiveAction(): PositiveAction;
    /**
     * Gets current value of property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.
     *
     * Preserves the current header state when scrolling.
     *
     * For example, if the user expands the header by clicking on the title and then scrolls down the page,
     * the header will remain expanded.
     *
     * **Note:** Based on internal rules, the value of the property is not always taken into account - for example,
     * when the control is rendered on tablet or mobile and the title and the header are with height larger
     * than a given threshold.
     *
     * Default value is `false`.
     *
     * @returns Value of property `preserveHeaderStateOnScroll`
     */
    getPreserveHeaderStateOnScroll(): boolean;
    /**
     * Gets content of aggregation {@link #getPrintAction printAction}.
     *
     * A semantic-specific button which is placed in the `ShareMenu` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    getPrintAction(): PrintAction;
    /**
     * Gets content of aggregation {@link #getSaveAsTileAction saveAsTileAction}.
     *
     * A button which is placed in the `ShareMenu` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    getSaveAsTileAction(): Button;
    /**
     * Gets content of aggregation {@link #getSendEmailAction sendEmailAction}.
     *
     * A semantic-specific button which is placed in the `ShareMenu` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    getSendEmailAction(): SendEmailAction;
    /**
     * Gets content of aggregation {@link #getSendMessageAction sendMessageAction}.
     *
     * A semantic-specific button which is placed in the `ShareMenu` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    getSendMessageAction(): SendMessageAction;
    /**
     * Gets content of aggregation {@link #getShareInJamAction shareInJamAction}.
     *
     * A semantic-specific button which is placed in the `ShareMenu` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    getShareInJamAction(): ShareInJamAction;
    /**
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
     * @SINCE 1.58
     *
     * Gets current value of property {@link #getTitleAreaShrinkRatio titleAreaShrinkRatio}.
     *
     * Assigns shrinking ratio to the `SemanticPage` title areas (Heading, Content, Actions). The greater value
     * a section has the faster it shrinks when the screen size is being reduced.
     *
     * The value must be set in `Heading:Content:Actions` format where Title, Content and Actions are numbers
     * greater than or equal to 0. If set to 0, the respective area will not shrink.
     *
     * For example, if `2:7:1` is set, the Content area will shrink seven times faster than the Actions area.
     * So, when all three areas have width of 500px and the available space is reduced by 100px the Title area
     * will be reduced by 20px, the Content area - by 70px and the Actions area - by 10px.
     *
     * If all the areas have assigned values greater than 1, the numbers are scaled so that at least one of
     * them is equal to 1. For example, value of `2:4:8` is equal to `1:2:4`.
     *
     *  When this property is set the `titlePrimaryArea` property has no effect.
     *
     * Default value is `"1:1.6:1.6"`.
     *
     * @returns Value of property `titleAreaShrinkRatio`
     */
    getTitleAreaShrinkRatio(): DynamicPageTitleShrinkRatio;
    /**
     * @SINCE 1.52
     *
     * Gets content of aggregation {@link #getTitleBreadcrumbs titleBreadcrumbs}.
     *
     * The `SemanticPage` breadcrumbs.
     *
     * A typical usage is the `sap.m.Breadcrumbs` control or any other UI5 control, that implements the `sap.m.IBreadcrumbs`
     * interface.
     *
     * **Notes:**
     * 	 - The control will be placed in the title`s top-left area.
     * 	 - If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when the
     * 			control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * 			state.
     */
    getTitleBreadcrumbs(): IBreadcrumbs;
    /**
     * @SINCE 1.52
     *
     * Gets content of aggregation {@link #getTitleContent titleContent}.
     *
     * The content, displayed in the title.
     *
     * **Notes:**
     * 	 - The controls will be placed in the middle area.
     * 	 - If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when the
     * 			control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * 			state.
     */
    getTitleContent(): Control[];
    /**
     * Gets content of aggregation {@link #getTitleCustomIconActions titleCustomIconActions}.
     *
     * The `titleCustomIconActions` are placed in the `IconActions` area of the `SemanticPage` title, right
     * before the semantic icon action.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    getTitleCustomIconActions(): OverflowToolbarButton[];
    /**
     * Gets content of aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.
     *
     * The `titleCustomTextActions` are placed in the `TextActions` area of the `SemanticPage` title, right
     * before the semantic text action.
     *
     * **Notes:**
     * 	 - If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when the
     * 			control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * 			state.
     * 	 - Buttons that are part of this aggregation will always have their `type` property set to `Transparent`
     * 			by design.
     */
    getTitleCustomTextActions(): Button[];
    /**
     * Gets content of aggregation {@link #getTitleExpandedContent titleExpandedContent}.
     *
     * The content,displayed in the title, when the header is in expanded state.
     *
     * **Note:** The controls will be placed in the title`s left area, under the `titleHeading` aggregation.
     */
    getTitleExpandedContent(): Control[];
    /**
     * @SINCE 1.58
     *
     * Gets content of aggregation {@link #getTitleExpandedHeading titleExpandedHeading}.
     *
     * The `titleExpandedHeading` is positioned in the `SemanticPage` title left area and is displayed when
     * the header is in expanded state only. Use this aggregation to display a title (or any other UI5 control
     * that serves as a heading) that has to be present in expanded state only.
     *
     * **Note:** In order for `titleExpandedHeading` to be taken into account, `titleHeading` has to be empty.
     * Combine `titleExpandedHeading` with `titleSnappedHeading` to switch content when the header switches
     * state.
     */
    getTitleExpandedHeading(): Control;
    /**
     * Gets content of aggregation {@link #getTitleHeading titleHeading}.
     *
     * The `SemanticPage` heading.
     *
     * A typical usage is the `sap.m.Title` or any other UI5 control, that serves as a heading for an object.
     *
     * **Notes:**
     * 	 - The control will be placed in the title`s leftmost area.
     * 	 - `titleHeading` is mutually exclusive with `titleSnappedHeading` and `titleExpandedHeading`. If `titleHeading`
     * 			is provided, both `titleSnappedHeading` and `titleExpandedHeading` are ignored. `titleHeading` is useful
     * 			when the content of `titleSnappedHeading` and `titleExpandedHeading` needs to be the same as it replaces
     * 			them both.
     * 	 - If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when the
     * 			control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * 			state.
     */
    getTitleHeading(): Control;
    /**
     * Gets content of aggregation {@link #getTitleMainAction titleMainAction}.
     *
     * A semantic-specific button which is placed in the `SemanticPage` title as first action.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    getTitleMainAction(): TitleMainAction;
    /**
     * @SINCE 1.52
     * @deprecated (since 1.58) - Please use the `titleAreaShrinkRatio` property instead. The value of `titleAreaShrinkRatio`
     * must be set in `Heading:Content:Actions` format where Heading, Content and Actions are numbers greater
     * than or equal to 0. The greater value a section has the faster it shrinks when the screen size is being
     * reduced.
     *
     * `titlePrimaryArea=Begin` can be achieved by setting a low number for the Heading area to `titleAreaShrinkRatio`,
     * for example `1:1.6:1.6`.
     *
     * `titlePrimaryArea=Middle` can be achieved by setting a low number for the Content area to `titleAreaShrinkRatio`,
     * for example `1.6:1:1.6`.
     *
     * Gets current value of property {@link #getTitlePrimaryArea titlePrimaryArea}.
     *
     * Determines which of the title areas (Begin, Middle) is primary.
     *
     * **Note:** The primary area is shrinking at a lower rate, remaining visible as long as it can.
     *
     * Default value is `Begin`.
     *
     * @returns Value of property `titlePrimaryArea`
     */
    getTitlePrimaryArea():
      | DynamicPageTitleArea
      | keyof typeof DynamicPageTitleArea;
    /**
     * Gets content of aggregation {@link #getTitleSnappedContent titleSnappedContent}.
     *
     * The content, displayed in the title, when the header is in collapsed state.
     *
     * **Notes:**
     * 	 - The controls will be placed in the title`s left area, under the `titleHeading` aggregation.
     * 	 - If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when the
     * 			control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * 			state.
     */
    getTitleSnappedContent(): Control[];
    /**
     * @SINCE 1.58
     *
     * Gets content of aggregation {@link #getTitleSnappedHeading titleSnappedHeading}.
     *
     * The `titleSnappedHeading` is positioned in the `SemanticPage` title left area and is displayed when the
     * header is in collapsed (snapped) state only. Use this aggregation to display a title (or any other UI5
     * control that serves as a heading) that has to be present in collapsed state only.
     *
     * **Notes:**
     * 	 - In order for `titleSnappedHeading` to be taken into account, `titleHeading` has to be empty. Combine
     * 			`titleSnappedHeading` with `titleExpandedHeading` to switch content when the header switches state.
     * 	 - If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when the
     * 			control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * 			state.
     */
    getTitleSnappedHeading(): Control;
    /**
     * @SINCE 1.63
     *
     * Gets content of aggregation {@link #getTitleSnappedOnMobile titleSnappedOnMobile}.
     *
     * The only content that is displayed in the `SemanticPage` title when it is viewed on a phone mobile device
     * and the `SemanticPage` header is in collapsed (snapped) state.
     *
     * Using this aggregation enables you to provide a simple, single-line title that takes less space on the
     * smaller phone screens when the `SemanticPage` header is in its collapsed (snapped) state.
     *
     * **Note:** The content set in this aggregation overrides all the other `SemanticPage` aggregations displayed
     * in the title and is only visible on phone mobile devices in collapsed (snapped) state of the `SemanticPage`
     * header.
     */
    getTitleSnappedOnMobile(): Title;
    /**
     * Gets current value of property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.
     *
     * Determines whether the user can switch between the expanded/collapsed states of the header by clicking
     * on the title.
     *
     * If set to `false`, the title is not clickable and the application must provide other means for expanding/collapsing
     * the header, if necessary.
     *
     * Default value is `true`.
     *
     * @returns Value of property `toggleHeaderOnTitleClick`
     */
    getToggleHeaderOnTitleClick(): boolean;
    /**
     * Checks for the provided `sap.m.Button` in the aggregation {@link #getCustomShareActions customShareActions}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfCustomShareAction(
      /**
       * The customShareAction whose index is looked for
       */
      oCustomShareAction: Button
    ): int;
    /**
     * Checks for the provided `sap.m.Button` in the aggregation {@link #getFooterCustomActions footerCustomActions}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfFooterCustomAction(
      /**
       * The footerCustomAction whose index is looked for
       */
      oFooterCustomAction: Button
    ): int;
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
     * @SINCE 1.52
     *
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getTitleContent titleContent}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfTitleContent(
      /**
       * The titleContent whose index is looked for
       */
      oTitleContent: Control
    ): int;
    /**
     * Checks for the provided `sap.m.OverflowToolbarButton` in the aggregation {@link #getTitleCustomIconActions
     * titleCustomIconActions}. and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfTitleCustomIconAction(
      /**
       * The titleCustomIconAction whose index is looked for
       */
      oTitleCustomIconAction: OverflowToolbarButton
    ): int;
    /**
     * Checks for the provided `sap.m.Button` in the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfTitleCustomTextAction(
      /**
       * The titleCustomTextAction whose index is looked for
       */
      oTitleCustomTextAction: Button
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getTitleExpandedContent titleExpandedContent}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfTitleExpandedContent(
      /**
       * The titleExpandedContent whose index is looked for
       */
      oTitleExpandedContent: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getTitleSnappedContent titleSnappedContent}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfTitleSnappedContent(
      /**
       * The titleSnappedContent whose index is looked for
       */
      oTitleSnappedContent: Control
    ): int;
    /**
     * Inserts a customShareAction into the aggregation {@link #getCustomShareActions customShareActions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertCustomShareAction(
      /**
       * The customShareAction to insert; if empty, nothing is inserted
       */
      oCustomShareAction: Button,
      /**
       * The `0`-based index the customShareAction should be inserted at; for a negative value of `iIndex`, the
       * customShareAction is inserted at position 0; for a value greater than the current size of the aggregation,
       * the customShareAction is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a footerCustomAction into the aggregation {@link #getFooterCustomActions footerCustomActions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertFooterCustomAction(
      /**
       * The footerCustomAction to insert; if empty, nothing is inserted
       */
      oFooterCustomAction: Button,
      /**
       * The `0`-based index the footerCustomAction should be inserted at; for a negative value of `iIndex`, the
       * footerCustomAction is inserted at position 0; for a value greater than the current size of the aggregation,
       * the footerCustomAction is inserted at the last position
       */
      iIndex: int
    ): this;
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
     * @SINCE 1.52
     *
     * Inserts a titleContent into the aggregation {@link #getTitleContent titleContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertTitleContent(
      /**
       * The titleContent to insert; if empty, nothing is inserted
       */
      oTitleContent: Control,
      /**
       * The `0`-based index the titleContent should be inserted at; for a negative value of `iIndex`, the titleContent
       * is inserted at position 0; for a value greater than the current size of the aggregation, the titleContent
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a titleCustomIconAction into the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertTitleCustomIconAction(
      /**
       * The titleCustomIconAction to insert; if empty, nothing is inserted
       */
      oTitleCustomIconAction: OverflowToolbarButton,
      /**
       * The `0`-based index the titleCustomIconAction should be inserted at; for a negative value of `iIndex`,
       * the titleCustomIconAction is inserted at position 0; for a value greater than the current size of the
       * aggregation, the titleCustomIconAction is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a titleCustomTextAction into the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertTitleCustomTextAction(
      /**
       * The titleCustomTextAction to insert; if empty, nothing is inserted
       */
      oTitleCustomTextAction: Button,
      /**
       * The `0`-based index the titleCustomTextAction should be inserted at; for a negative value of `iIndex`,
       * the titleCustomTextAction is inserted at position 0; for a value greater than the current size of the
       * aggregation, the titleCustomTextAction is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a titleExpandedContent into the aggregation {@link #getTitleExpandedContent titleExpandedContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertTitleExpandedContent(
      /**
       * The titleExpandedContent to insert; if empty, nothing is inserted
       */
      oTitleExpandedContent: Control,
      /**
       * The `0`-based index the titleExpandedContent should be inserted at; for a negative value of `iIndex`,
       * the titleExpandedContent is inserted at position 0; for a value greater than the current size of the
       * aggregation, the titleExpandedContent is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a titleSnappedContent into the aggregation {@link #getTitleSnappedContent titleSnappedContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertTitleSnappedContent(
      /**
       * The titleSnappedContent to insert; if empty, nothing is inserted
       */
      oTitleSnappedContent: Control,
      /**
       * The `0`-based index the titleSnappedContent should be inserted at; for a negative value of `iIndex`,
       * the titleSnappedContent is inserted at position 0; for a value greater than the current size of the aggregation,
       * the titleSnappedContent is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getCustomShareActions customShareActions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllCustomShareActions(): Button[];
    /**
     * Removes all the controls from the aggregation {@link #getFooterCustomActions footerCustomActions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllFooterCustomActions(): Button[];
    /**
     * Removes all the controls from the aggregation {@link #getHeaderContent headerContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllHeaderContent(): Control[];
    /**
     * @SINCE 1.52
     *
     * Removes all the controls from the aggregation {@link #getTitleContent titleContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllTitleContent(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllTitleCustomIconActions(): OverflowToolbarButton[];
    /**
     * Removes all the controls from the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllTitleCustomTextActions(): Button[];
    /**
     * Removes all the controls from the aggregation {@link #getTitleExpandedContent titleExpandedContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllTitleExpandedContent(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getTitleSnappedContent titleSnappedContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllTitleSnappedContent(): Control[];
    /**
     * Removes a customShareAction from the aggregation {@link #getCustomShareActions customShareActions}.
     *
     * @returns The removed customShareAction or `null`
     */
    removeCustomShareAction(
      /**
       * The customShareAction to remove or its index or id
       */
      vCustomShareAction: int | string | Button
    ): Button | null;
    /**
     * Removes a footerCustomAction from the aggregation {@link #getFooterCustomActions footerCustomActions}.
     *
     * @returns The removed footerCustomAction or `null`
     */
    removeFooterCustomAction(
      /**
       * The footerCustomAction to remove or its index or id
       */
      vFooterCustomAction: int | string | Button
    ): Button | null;
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
     * @SINCE 1.52
     *
     * Removes a titleContent from the aggregation {@link #getTitleContent titleContent}.
     *
     * @returns The removed titleContent or `null`
     */
    removeTitleContent(
      /**
       * The titleContent to remove or its index or id
       */
      vTitleContent: int | string | Control
    ): Control | null;
    /**
     * Removes a titleCustomIconAction from the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}.
     *
     * @returns The removed titleCustomIconAction or `null`
     */
    removeTitleCustomIconAction(
      /**
       * The titleCustomIconAction to remove or its index or id
       */
      vTitleCustomIconAction: int | string | OverflowToolbarButton
    ): OverflowToolbarButton | null;
    /**
     * Removes a titleCustomTextAction from the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.
     *
     * @returns The removed titleCustomTextAction or `null`
     */
    removeTitleCustomTextAction(
      /**
       * The titleCustomTextAction to remove or its index or id
       */
      vTitleCustomTextAction: int | string | Button
    ): Button | null;
    /**
     * Removes a titleExpandedContent from the aggregation {@link #getTitleExpandedContent titleExpandedContent}.
     *
     * @returns The removed titleExpandedContent or `null`
     */
    removeTitleExpandedContent(
      /**
       * The titleExpandedContent to remove or its index or id
       */
      vTitleExpandedContent: int | string | Control
    ): Control | null;
    /**
     * Removes a titleSnappedContent from the aggregation {@link #getTitleSnappedContent titleSnappedContent}.
     *
     * @returns The removed titleSnappedContent or `null`
     */
    removeTitleSnappedContent(
      /**
       * The titleSnappedContent to remove or its index or id
       */
      vTitleSnappedContent: int | string | Control
    ): Control | null;
    /**
     * Sets the aggregated {@link #getAddAction addAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAddAction(
      /**
       * The addAction to set
       */
      oAddAction: AddAction
    ): this;
    /**
     * Sets the aggregated {@link #getCloseAction closeAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setCloseAction(
      /**
       * The closeAction to set
       */
      oCloseAction: CloseAction
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
      oContent: Control
    ): this;
    /**
     * Sets the aggregated {@link #getCopyAction copyAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setCopyAction(
      /**
       * The copyAction to set
       */
      oCopyAction: CopyAction
    ): this;
    /**
     * Sets the aggregated {@link #getDeleteAction deleteAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDeleteAction(
      /**
       * The deleteAction to set
       */
      oDeleteAction: DeleteAction
    ): this;
    /**
     * Sets the aggregated {@link #getDiscussInJamAction discussInJamAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDiscussInJamAction(
      /**
       * The discussInJamAction to set
       */
      oDiscussInJamAction: DiscussInJamAction
    ): this;
    /**
     * Sets the aggregated {@link #getDraftIndicator draftIndicator}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDraftIndicator(
      /**
       * The draftIndicator to set
       */
      oDraftIndicator: DraftIndicator
    ): this;
    /**
     * @SINCE 1.50
     *
     * Sets the aggregated {@link #getEditAction editAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEditAction(
      /**
       * The editAction to set
       */
      oEditAction: EditAction
    ): this;
    /**
     * Sets the aggregated {@link #getExitFullScreenAction exitFullScreenAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setExitFullScreenAction(
      /**
       * The exitFullScreenAction to set
       */
      oExitFullScreenAction: ExitFullScreenAction
    ): this;
    /**
     * Sets the aggregated {@link #getFavoriteAction favoriteAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFavoriteAction(
      /**
       * The favoriteAction to set
       */
      oFavoriteAction: FavoriteAction
    ): this;
    /**
     * @SINCE 1.73
     *
     * Sets a new value for property {@link #getFitContent fitContent}.
     *
     * Optimizes `SemanticPage` responsiveness on small screens and behavior when expanding/collapsing the `SemanticPageHeader`.
     *
     * **Note:** It is recommended to use this property when displaying content of adaptive controls that stretch
     * to fill the available space. Such controls may be {@link sap.ui.table.Table} and {@link sap.ui.table.AnalyticalTable}
     * depending on their settings.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFitContent(
      /**
       * New value for property `fitContent`
       */
      bFitContent?: boolean
    ): this;
    /**
     * Sets the aggregated {@link #getFlagAction flagAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFlagAction(
      /**
       * The flagAction to set
       */
      oFlagAction: FlagAction
    ): this;
    /**
     * Sets the aggregated {@link #getFooterMainAction footerMainAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFooterMainAction(
      /**
       * The footerMainAction to set
       */
      oFooterMainAction: FooterMainAction
    ): this;
    /**
     * Sets the aggregated {@link #getFullScreenAction fullScreenAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFullScreenAction(
      /**
       * The fullScreenAction to set
       */
      oFullScreenAction: FullScreenAction
    ): this;
    /**
     * Sets a new value for property {@link #getHeaderExpanded headerExpanded}.
     *
     * Determines whether the header is expanded.
     *
     * The header can be also expanded/collapsed by user interaction, which requires the property to be internally
     * mutated by the control to reflect the changed state.
     *
     * **Note:** Please be aware, that initially collapsed header state is not supported, so `headerExpanded`
     * should not be set to `false` when initializing the control.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderExpanded(
      /**
       * New value for property `headerExpanded`
       */
      bHeaderExpanded?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getHeaderPinnable headerPinnable}.
     *
     * Determines whether the header is pinnable.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderPinnable(
      /**
       * New value for property `headerPinnable`
       */
      bHeaderPinnable?: boolean
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
      oLandmarkInfo: DynamicPageAccessibleLandmarkInfo
    ): this;
    /**
     * Sets the aggregated {@link #getMessagesIndicator messagesIndicator}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMessagesIndicator(
      /**
       * The messagesIndicator to set
       */
      oMessagesIndicator: MessagesIndicator
    ): this;
    /**
     * Sets the aggregated {@link #getNegativeAction negativeAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setNegativeAction(
      /**
       * The negativeAction to set
       */
      oNegativeAction: NegativeAction
    ): this;
    /**
     * Sets the aggregated {@link #getPositiveAction positiveAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setPositiveAction(
      /**
       * The positiveAction to set
       */
      oPositiveAction: PositiveAction
    ): this;
    /**
     * Sets a new value for property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.
     *
     * Preserves the current header state when scrolling.
     *
     * For example, if the user expands the header by clicking on the title and then scrolls down the page,
     * the header will remain expanded.
     *
     * **Note:** Based on internal rules, the value of the property is not always taken into account - for example,
     * when the control is rendered on tablet or mobile and the title and the header are with height larger
     * than a given threshold.
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
     * Sets the aggregated {@link #getPrintAction printAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setPrintAction(
      /**
       * The printAction to set
       */
      oPrintAction: PrintAction
    ): this;
    /**
     * Sets the aggregated {@link #getSaveAsTileAction saveAsTileAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSaveAsTileAction(
      /**
       * The saveAsTileAction to set
       */
      oSaveAsTileAction: Button
    ): this;
    /**
     * Sets the aggregated {@link #getSendEmailAction sendEmailAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSendEmailAction(
      /**
       * The sendEmailAction to set
       */
      oSendEmailAction: SendEmailAction
    ): this;
    /**
     * Sets the aggregated {@link #getSendMessageAction sendMessageAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSendMessageAction(
      /**
       * The sendMessageAction to set
       */
      oSendMessageAction: SendMessageAction
    ): this;
    /**
     * Sets the aggregated {@link #getShareInJamAction shareInJamAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShareInJamAction(
      /**
       * The shareInJamAction to set
       */
      oShareInJamAction: ShareInJamAction
    ): this;
    /**
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
     * @SINCE 1.58
     *
     * Sets a new value for property {@link #getTitleAreaShrinkRatio titleAreaShrinkRatio}.
     *
     * Assigns shrinking ratio to the `SemanticPage` title areas (Heading, Content, Actions). The greater value
     * a section has the faster it shrinks when the screen size is being reduced.
     *
     * The value must be set in `Heading:Content:Actions` format where Title, Content and Actions are numbers
     * greater than or equal to 0. If set to 0, the respective area will not shrink.
     *
     * For example, if `2:7:1` is set, the Content area will shrink seven times faster than the Actions area.
     * So, when all three areas have width of 500px and the available space is reduced by 100px the Title area
     * will be reduced by 20px, the Content area - by 70px and the Actions area - by 10px.
     *
     * If all the areas have assigned values greater than 1, the numbers are scaled so that at least one of
     * them is equal to 1. For example, value of `2:4:8` is equal to `1:2:4`.
     *
     *  When this property is set the `titlePrimaryArea` property has no effect.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"1:1.6:1.6"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitleAreaShrinkRatio(
      /**
       * New value for property `titleAreaShrinkRatio`
       */
      sTitleAreaShrinkRatio?: DynamicPageTitleShrinkRatio
    ): this;
    /**
     * @SINCE 1.52
     *
     * Sets the aggregated {@link #getTitleBreadcrumbs titleBreadcrumbs}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitleBreadcrumbs(
      /**
       * The titleBreadcrumbs to set
       */
      oTitleBreadcrumbs: IBreadcrumbs
    ): this;
    /**
     * @SINCE 1.58
     *
     * Sets the aggregated {@link #getTitleExpandedHeading titleExpandedHeading}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitleExpandedHeading(
      /**
       * The titleExpandedHeading to set
       */
      oTitleExpandedHeading: Control
    ): this;
    /**
     * Sets the aggregated {@link #getTitleHeading titleHeading}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitleHeading(
      /**
       * The titleHeading to set
       */
      oTitleHeading: Control
    ): this;
    /**
     * Sets the aggregated {@link #getTitleMainAction titleMainAction}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitleMainAction(
      /**
       * The titleMainAction to set
       */
      oTitleMainAction: TitleMainAction
    ): this;
    /**
     * @SINCE 1.52
     * @deprecated (since 1.58) - Please use the `titleAreaShrinkRatio` property instead. The value of `titleAreaShrinkRatio`
     * must be set in `Heading:Content:Actions` format where Heading, Content and Actions are numbers greater
     * than or equal to 0. The greater value a section has the faster it shrinks when the screen size is being
     * reduced.
     *
     * `titlePrimaryArea=Begin` can be achieved by setting a low number for the Heading area to `titleAreaShrinkRatio`,
     * for example `1:1.6:1.6`.
     *
     * `titlePrimaryArea=Middle` can be achieved by setting a low number for the Content area to `titleAreaShrinkRatio`,
     * for example `1.6:1:1.6`.
     *
     * Sets a new value for property {@link #getTitlePrimaryArea titlePrimaryArea}.
     *
     * Determines which of the title areas (Begin, Middle) is primary.
     *
     * **Note:** The primary area is shrinking at a lower rate, remaining visible as long as it can.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Begin`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitlePrimaryArea(
      /**
       * New value for property `titlePrimaryArea`
       */
      sTitlePrimaryArea?:
        | DynamicPageTitleArea
        | keyof typeof DynamicPageTitleArea
    ): this;
    /**
     * @SINCE 1.58
     *
     * Sets the aggregated {@link #getTitleSnappedHeading titleSnappedHeading}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitleSnappedHeading(
      /**
       * The titleSnappedHeading to set
       */
      oTitleSnappedHeading: Control
    ): this;
    /**
     * @SINCE 1.63
     *
     * Sets the aggregated {@link #getTitleSnappedOnMobile titleSnappedOnMobile}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitleSnappedOnMobile(
      /**
       * The titleSnappedOnMobile to set
       */
      oTitleSnappedOnMobile: Title
    ): this;
    /**
     * Sets a new value for property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.
     *
     * Determines whether the user can switch between the expanded/collapsed states of the header by clicking
     * on the title.
     *
     * If set to `false`, the title is not clickable and the application must provide other means for expanding/collapsing
     * the header, if necessary.
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
  }

  export interface $SemanticPageSettings extends $ControlSettings {
    /**
     * Determines whether the header is expanded.
     *
     * The header can be also expanded/collapsed by user interaction, which requires the property to be internally
     * mutated by the control to reflect the changed state.
     *
     * **Note:** Please be aware, that initially collapsed header state is not supported, so `headerExpanded`
     * should not be set to `false` when initializing the control.
     */
    headerExpanded?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the header is pinnable.
     */
    headerPinnable?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Preserves the current header state when scrolling.
     *
     * For example, if the user expands the header by clicking on the title and then scrolls down the page,
     * the header will remain expanded.
     *
     * **Note:** Based on internal rules, the value of the property is not always taken into account - for example,
     * when the control is rendered on tablet or mobile and the title and the header are with height larger
     * than a given threshold.
     */
    preserveHeaderStateOnScroll?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the user can switch between the expanded/collapsed states of the header by clicking
     * on the title.
     *
     * If set to `false`, the title is not clickable and the application must provide other means for expanding/collapsing
     * the header, if necessary.
     */
    toggleHeaderOnTitleClick?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the footer is visible.
     */
    showFooter?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.52
     * @deprecated (since 1.58) - Please use the `titleAreaShrinkRatio` property instead. The value of `titleAreaShrinkRatio`
     * must be set in `Heading:Content:Actions` format where Heading, Content and Actions are numbers greater
     * than or equal to 0. The greater value a section has the faster it shrinks when the screen size is being
     * reduced.
     *
     * `titlePrimaryArea=Begin` can be achieved by setting a low number for the Heading area to `titleAreaShrinkRatio`,
     * for example `1:1.6:1.6`.
     *
     * `titlePrimaryArea=Middle` can be achieved by setting a low number for the Content area to `titleAreaShrinkRatio`,
     * for example `1.6:1:1.6`.
     *
     * Determines which of the title areas (Begin, Middle) is primary.
     *
     * **Note:** The primary area is shrinking at a lower rate, remaining visible as long as it can.
     */
    titlePrimaryArea?:
      | (DynamicPageTitleArea | keyof typeof DynamicPageTitleArea)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * @SINCE 1.58
     *
     * Assigns shrinking ratio to the `SemanticPage` title areas (Heading, Content, Actions). The greater value
     * a section has the faster it shrinks when the screen size is being reduced.
     *
     * The value must be set in `Heading:Content:Actions` format where Title, Content and Actions are numbers
     * greater than or equal to 0. If set to 0, the respective area will not shrink.
     *
     * For example, if `2:7:1` is set, the Content area will shrink seven times faster than the Actions area.
     * So, when all three areas have width of 500px and the available space is reduced by 100px the Title area
     * will be reduced by 20px, the Content area - by 70px and the Actions area - by 10px.
     *
     * If all the areas have assigned values greater than 1, the numbers are scaled so that at least one of
     * them is equal to 1. For example, value of `2:4:8` is equal to `1:2:4`.
     *
     *  When this property is set the `titlePrimaryArea` property has no effect.
     */
    titleAreaShrinkRatio?:
      | DynamicPageTitleShrinkRatio
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * @SINCE 1.73
     *
     * Optimizes `SemanticPage` responsiveness on small screens and behavior when expanding/collapsing the `SemanticPageHeader`.
     *
     * **Note:** It is recommended to use this property when displaying content of adaptive controls that stretch
     * to fill the available space. Such controls may be {@link sap.ui.table.Table} and {@link sap.ui.table.AnalyticalTable}
     * depending on their settings.
     */
    fitContent?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The `SemanticPage` heading.
     *
     * A typical usage is the `sap.m.Title` or any other UI5 control, that serves as a heading for an object.
     *
     * **Notes:**
     * 	 - The control will be placed in the title`s leftmost area.
     * 	 - `titleHeading` is mutually exclusive with `titleSnappedHeading` and `titleExpandedHeading`. If `titleHeading`
     * 			is provided, both `titleSnappedHeading` and `titleExpandedHeading` are ignored. `titleHeading` is useful
     * 			when the content of `titleSnappedHeading` and `titleExpandedHeading` needs to be the same as it replaces
     * 			them both.
     * 	 - If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when the
     * 			control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * 			state.
     */
    titleHeading?: Control;

    /**
     * @SINCE 1.58
     *
     * The `titleExpandedHeading` is positioned in the `SemanticPage` title left area and is displayed when
     * the header is in expanded state only. Use this aggregation to display a title (or any other UI5 control
     * that serves as a heading) that has to be present in expanded state only.
     *
     * **Note:** In order for `titleExpandedHeading` to be taken into account, `titleHeading` has to be empty.
     * Combine `titleExpandedHeading` with `titleSnappedHeading` to switch content when the header switches
     * state.
     */
    titleExpandedHeading?: Control;

    /**
     * @SINCE 1.58
     *
     * The `titleSnappedHeading` is positioned in the `SemanticPage` title left area and is displayed when the
     * header is in collapsed (snapped) state only. Use this aggregation to display a title (or any other UI5
     * control that serves as a heading) that has to be present in collapsed state only.
     *
     * **Notes:**
     * 	 - In order for `titleSnappedHeading` to be taken into account, `titleHeading` has to be empty. Combine
     * 			`titleSnappedHeading` with `titleExpandedHeading` to switch content when the header switches state.
     * 	 - If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when the
     * 			control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * 			state.
     */
    titleSnappedHeading?: Control;

    /**
     * @SINCE 1.52
     *
     * The `SemanticPage` breadcrumbs.
     *
     * A typical usage is the `sap.m.Breadcrumbs` control or any other UI5 control, that implements the `sap.m.IBreadcrumbs`
     * interface.
     *
     * **Notes:**
     * 	 - The control will be placed in the title`s top-left area.
     * 	 - If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when the
     * 			control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * 			state.
     */
    titleBreadcrumbs?: IBreadcrumbs;

    /**
     * @SINCE 1.63
     *
     * The only content that is displayed in the `SemanticPage` title when it is viewed on a phone mobile device
     * and the `SemanticPage` header is in collapsed (snapped) state.
     *
     * Using this aggregation enables you to provide a simple, single-line title that takes less space on the
     * smaller phone screens when the `SemanticPage` header is in its collapsed (snapped) state.
     *
     * **Note:** The content set in this aggregation overrides all the other `SemanticPage` aggregations displayed
     * in the title and is only visible on phone mobile devices in collapsed (snapped) state of the `SemanticPage`
     * header.
     */
    titleSnappedOnMobile?: Title;

    /**
     * The content, displayed in the title, when the header is in collapsed state.
     *
     * **Notes:**
     * 	 - The controls will be placed in the title`s left area, under the `titleHeading` aggregation.
     * 	 - If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when the
     * 			control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * 			state.
     */
    titleSnappedContent?:
      | Control[]
      | Control
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * The content,displayed in the title, when the header is in expanded state.
     *
     * **Note:** The controls will be placed in the title`s left area, under the `titleHeading` aggregation.
     */
    titleExpandedContent?:
      | Control[]
      | Control
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * @SINCE 1.52
     *
     * The content, displayed in the title.
     *
     * **Notes:**
     * 	 - The controls will be placed in the middle area.
     * 	 - If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when the
     * 			control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * 			state.
     */
    titleContent?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * A semantic-specific button which is placed in the `SemanticPage` title as first action.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    titleMainAction?: TitleMainAction;

    /**
     * @SINCE 1.50
     *
     * A semantic-specific button which is placed in the `TextActions` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    editAction?: EditAction;

    /**
     * A semantic-specific button which is placed in the `TextActions` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    deleteAction?: DeleteAction;

    /**
     * A semantic-specific button which is placed in the `TextActions` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    copyAction?: CopyAction;

    /**
     * A semantic-specific button which is placed in the `TextActions` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    addAction?: AddAction;

    /**
     * A semantic-specific button which is placed in the `IconActions` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    flagAction?: FlagAction;

    /**
     * A semantic-specific button which is placed in the `IconActions` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    favoriteAction?: FavoriteAction;

    /**
     * A semantic-specific button which is placed in the `IconActions` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    fullScreenAction?: FullScreenAction;

    /**
     * A semantic-specific button which is placed in the `IconActions` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    exitFullScreenAction?: ExitFullScreenAction;

    /**
     * A semantic-specific button which is placed in the `IconActions` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    closeAction?: CloseAction;

    /**
     * The `titleCustomTextActions` are placed in the `TextActions` area of the `SemanticPage` title, right
     * before the semantic text action.
     *
     * **Notes:**
     * 	 - If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when the
     * 			control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * 			state.
     * 	 - Buttons that are part of this aggregation will always have their `type` property set to `Transparent`
     * 			by design.
     */
    titleCustomTextActions?:
      | Button[]
      | Button
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * The `titleCustomIconActions` are placed in the `IconActions` area of the `SemanticPage` title, right
     * before the semantic icon action.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    titleCustomIconActions?:
      | OverflowToolbarButton[]
      | OverflowToolbarButton
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * The header content.
     */
    headerContent?:
      | Control[]
      | Control
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * The `SemanticPage` content.
     *
     * **Note:** The SAP Fiori Design guidelines require that the `SemanticPage`'s header content and the `SemanticPage`'s
     * content are aligned vertically. When using {@link sap.ui.layout.form.Form}, {@link sap.m.Panel}, {@link
     * sap.m.Table} and {@link sap.m.List} in the content area of `SemanticPage`, if the content is not already
     * aligned, you need to adjust their left text offset to achieve the vertical alignment. To do this, apply
     * the `sapFSemanticPageAlignContent` CSS class to them and set their `width` property to `auto` (if not
     * set by default).
     *
     * Example:
     *
     *
     * ```javascript
     *
     * ` <Panel class=“sapFSemanticPageAlignContent” width=“auto”></Panel> `
     * ```
     *
     *
     * Please keep in mind that the alignment is not possible when the controls are placed in a {@link sap.ui.layout.Grid}
     * or in other layout controls that use `overflow:hidden` CSS property.
     */
    content?: Control;

    /**
     * A semantic-specific button which is placed in the `FooterRight` area of the `SemanticPage` footer with
     * default text value set to `Save`.
     */
    footerMainAction?: FooterMainAction;

    /**
     * A semantic-specific button which is placed in the `FooterLeft` area of the `SemanticPage` footer as a
     * first action.
     */
    messagesIndicator?: MessagesIndicator;

    /**
     * A semantic-specific button which is placed in the `FooterLeft` area of the `SemanticPage` footer as a
     * second action.
     */
    draftIndicator?: DraftIndicator;

    /**
     * A semantic-specific button which is placed in the `FooterRight` area of the `SemanticPage` footer with
     * default text value set to `Accept`.
     */
    positiveAction?: PositiveAction;

    /**
     * A semantic-specific button which is placed in the `FooterRight` area of the `SemanticPage` footer with
     * default text value set to `Reject`.
     */
    negativeAction?: NegativeAction;

    /**
     * The `footerCustomActions` are placed in the `FooterRight` area of the `SemanticPage` footer, right after
     * the semantic footer actions.
     *
     * **Note:** Buttons that are part of this aggregation will always have their `type` property set to `Transparent`
     * by design.
     */
    footerCustomActions?:
      | Button[]
      | Button
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * A semantic-specific button which is placed in the `ShareMenu` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    discussInJamAction?: DiscussInJamAction;

    /**
     * A button which is placed in the `ShareMenu` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    saveAsTileAction?: Button;

    /**
     * A semantic-specific button which is placed in the `ShareMenu` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    shareInJamAction?: ShareInJamAction;

    /**
     * A semantic-specific button which is placed in the `ShareMenu` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    sendMessageAction?: SendMessageAction;

    /**
     * A semantic-specific button which is placed in the `ShareMenu` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    sendEmailAction?: SendEmailAction;

    /**
     * A semantic-specific button which is placed in the `ShareMenu` area of the `SemanticPage` title.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    printAction?: PrintAction;

    /**
     * The `customShareActions` are placed in the `ShareMenu` area of the `SemanticPage` title, right after
     * the semantic actions.
     *
     * The text and icon of the button inside the `customShareActions` aggregation, can be customized.
     *
     * **Note:** If the `titleSnappedOnMobile` aggregation is set, its content overrides this aggregation when
     * the control is viewed on a phone mobile device and the `SemanticPage` header is in its collapsed (snapped)
     * state.
     */
    customShareActions?:
      | Button[]
      | Button
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * @SINCE 1.61
     *
     * Accessible landmark settings to be applied to the containers of the `sap.f.SemanticPage` control.
     *
     * If not set, no landmarks will be written.
     */
    landmarkInfo?: DynamicPageAccessibleLandmarkInfo;
  }
}

declare module "sap/f/semantic/SemanticToggleButton" {
  import {
    default as SemanticToggleButton1,
    $SemanticToggleButtonSettings as $SemanticToggleButtonSettings1,
  } from "sap/m/semantic/SemanticToggleButton";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.46.0
   *
   * A base class for the {@link sap.f.semantic.FavoriteAction} and {@link sap.f.semantic.FlagAction}.
   */
  export default class SemanticToggleButton extends SemanticToggleButton1 {
    /**
     * Constructor for a new `SemanticToggleButton`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.m.semantic.SemanticToggleButton#constructor
     * sap.m.semantic.SemanticToggleButton} can be used.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SemanticToggleButtonSettings
    );
    /**
     * Constructor for a new `SemanticToggleButton`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.m.semantic.SemanticToggleButton#constructor
     * sap.m.semantic.SemanticToggleButton} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $SemanticToggleButtonSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.SemanticToggleButton with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.m.semantic.SemanticToggleButton.extend}.
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
      oClassInfo?: sap.ClassInfo<T, SemanticToggleButton>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.SemanticToggleButton.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $SemanticToggleButtonSettings
    extends $SemanticToggleButtonSettings1 {}
}

declare module "sap/f/semantic/SendEmailAction" {
  import {
    default as SemanticButton,
    $SemanticButtonSettings,
  } from "sap/f/semantic/SemanticButton";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.46.0
   *
   * A semantic-specific button, eligible for the `sendEmailAction` aggregation of the {@link sap.f.semantic.SemanticPage}
   * to be placed in the share menu within its title.
   */
  export default class SendEmailAction extends SemanticButton {
    /**
     * Constructor for a new `SendEmailAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $SendEmailActionSettings
    );
    /**
     * Constructor for a new `SendEmailAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $SendEmailActionSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.SendEmailAction with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
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
      oClassInfo?: sap.ClassInfo<T, SendEmailAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.SendEmailAction.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $SendEmailActionSettings extends $SemanticButtonSettings {}
}

declare module "sap/f/semantic/SendMessageAction" {
  import {
    default as SemanticButton,
    $SemanticButtonSettings,
  } from "sap/f/semantic/SemanticButton";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.46.0
   *
   * A semantic-specific button, eligible for the `sendMessageAction` aggregation of the {@link sap.f.semantic.SemanticPage}
   * to be placed in the share menu within its title.
   */
  export default class SendMessageAction extends SemanticButton {
    /**
     * Constructor for a new `SendMessageAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $SendMessageActionSettings
    );
    /**
     * Constructor for a new `SendMessageAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $SendMessageActionSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.SendMessageAction with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
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
      oClassInfo?: sap.ClassInfo<T, SendMessageAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.SendMessageAction.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $SendMessageActionSettings extends $SemanticButtonSettings {}
}

declare module "sap/f/semantic/ShareInJamAction" {
  import {
    default as SemanticButton,
    $SemanticButtonSettings,
  } from "sap/f/semantic/SemanticButton";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.46.0
   *
   * A semantic-specific button, eligible for the `shareInJamAction` aggregation of the {@link sap.f.semantic.SemanticPage}
   * to be placed in the share menu within its title.
   */
  export default class ShareInJamAction extends SemanticButton {
    /**
     * Constructor for a new `ShareInJamAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $ShareInJamActionSettings
    );
    /**
     * Constructor for a new `ShareInJamAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor
     * sap.f.semantic.SemanticButton} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $ShareInJamActionSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.ShareInJamAction with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ShareInJamAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.ShareInJamAction.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $ShareInJamActionSettings extends $SemanticButtonSettings {}
}

declare module "sap/f/semantic/TitleMainAction" {
  import {
    default as MainAction,
    $MainActionSettings,
  } from "sap/f/semantic/MainAction";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.46.0
   *
   * A semantic-specific button, eligible for the `titleMainAction` aggregation of the {@link sap.f.semantic.SemanticPage}
   * to be placed in its title.
   */
  export default class TitleMainAction extends MainAction {
    /**
     * Constructor for a new `TitleMainAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.MainAction#constructor
     * sap.f.semantic.MainAction} can be used.
     */
    constructor(
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $TitleMainActionSettings
    );
    /**
     * Constructor for a new `TitleMainAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.f.semantic.MainAction#constructor
     * sap.f.semantic.MainAction} can be used.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Optional initial settings for the new control: a map/JSON-object with initial property values, event
       * listeners etc. for the new object
       */
      mSettings?: $TitleMainActionSettings
    );

    /**
     * Creates a new subclass of class sap.f.semantic.TitleMainAction with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.semantic.MainAction.extend}.
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
      oClassInfo?: sap.ClassInfo<T, TitleMainAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.semantic.TitleMainAction.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
  }

  export interface $TitleMainActionSettings extends $MainActionSettings {}
}

declare module "sap/f/ShellBar" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { IShellBar } from "sap/f/library";

  import { IBar } from "sap/m/library";

  import { IToolHeader } from "sap/tnt/library";

  import Event from "sap/ui/base/Event";

  import Avatar from "sap/m/Avatar";

  import Image from "sap/m/Image";

  import Button from "sap/m/Button";

  import { URI } from "sap/ui/core/library";

  import Menu from "sap/m/Menu";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import SearchManager from "sap/f/SearchManager";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.63
   *
   * A horizontal bar control holding multiple child controls used as application shell header.
   *
   * Overview:
   *
   * The `ShellBar` is used as the uppermost section (shell) of the app. It is fully responsive and adaptive,
   * and corresponds to the SAP Fiori Design Guidelines.
   *
   * Usage:
   *
   * Content specified in the `ShellBar` properties and aggregations is automatically positioned in dedicated
   * places of the control.
   */
  export default class ShellBar
    extends Control
    implements IShellBar, IBar, IToolHeader {
    __implements__sap_f_IShellBar: boolean;
    __implements__sap_m_IBar: boolean;
    __implements__sap_tnt_IToolHeader: boolean;
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
     * Creates a new subclass of class sap.f.ShellBar with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, ShellBar>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.ShellBar.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.65
     *
     * Sets classes according to the context of the page. Possible contexts are header, footer, and subheader.
     *
     * @returns `this` for chaining
     */
    _applyContextClassFor(): IBar;
    /**
     * @SINCE 1.65
     *
     * Sets the HTML tag according to the context of the page. Possible contexts are header, footer, and subheader.
     *
     * @returns `this` for chaining
     */
    _applyTag(): IBar;
    /**
     * Adds some additionalContent to the aggregation {@link #getAdditionalContent additionalContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addAdditionalContent(
      /**
       * The additionalContent to add; if empty, nothing is inserted
       */
      oAdditionalContent: IShellBar
    ): this;
    /**
     * @SINCE 1.65
     *
     * Sets classes and HTML tag according to the context of the page. Possible contexts are header, footer,
     * and subheader
     *
     * @returns `this` for chaining
     */
    applyTagAndContextClassFor(): IBar;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:avatarPressed avatarPressed} event of this `sap.f.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.ShellBar` itself.
     *
     * Fired when the profile avatar is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachAvatarPressed(
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
       * Context object to call the event handler with. Defaults to this `sap.f.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:avatarPressed avatarPressed} event of this `sap.f.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.ShellBar` itself.
     *
     * Fired when the profile avatar is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachAvatarPressed(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:copilotPressed copilotPressed} event of this
     * `sap.f.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.ShellBar` itself.
     *
     * Fired when the SAP CoPilot icon is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCopilotPressed(
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
       * Context object to call the event handler with. Defaults to this `sap.f.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:copilotPressed copilotPressed} event of this
     * `sap.f.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.ShellBar` itself.
     *
     * Fired when the SAP CoPilot icon is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCopilotPressed(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:homeIconPressed homeIconPressed} event of this
     * `sap.f.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.ShellBar` itself.
     *
     * Fired when the `homeIcon` is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachHomeIconPressed(
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
       * Context object to call the event handler with. Defaults to this `sap.f.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:homeIconPressed homeIconPressed} event of this
     * `sap.f.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.ShellBar` itself.
     *
     * Fired when the `homeIcon` is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachHomeIconPressed(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:menuButtonPressed menuButtonPressed} event of
     * this `sap.f.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.ShellBar` itself.
     *
     * Fired when the alternative menu button is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMenuButtonPressed(
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
       * Context object to call the event handler with. Defaults to this `sap.f.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:menuButtonPressed menuButtonPressed} event of
     * this `sap.f.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.ShellBar` itself.
     *
     * Fired when the alternative menu button is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMenuButtonPressed(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:navButtonPressed navButtonPressed} event of
     * this `sap.f.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.ShellBar` itself.
     *
     * Fired when the navigation/back button is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachNavButtonPressed(
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
       * Context object to call the event handler with. Defaults to this `sap.f.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:navButtonPressed navButtonPressed} event of
     * this `sap.f.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.ShellBar` itself.
     *
     * Fired when the navigation/back button is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachNavButtonPressed(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:notificationsPressed notificationsPressed} event
     * of this `sap.f.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.ShellBar` itself.
     *
     * Fired when the notifications button is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachNotificationsPressed(
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
       * Context object to call the event handler with. Defaults to this `sap.f.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:notificationsPressed notificationsPressed} event
     * of this `sap.f.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.ShellBar` itself.
     *
     * Fired when the notifications button is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachNotificationsPressed(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:productSwitcherPressed productSwitcherPressed}
     * event of this `sap.f.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.ShellBar` itself.
     *
     * Fired when the product switcher button is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachProductSwitcherPressed(
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
       * Context object to call the event handler with. Defaults to this `sap.f.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:productSwitcherPressed productSwitcherPressed}
     * event of this `sap.f.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.ShellBar` itself.
     *
     * Fired when the product switcher button is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachProductSwitcherPressed(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:searchButtonPressed searchButtonPressed} event
     * of this `sap.f.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.ShellBar` itself.
     *
     * Fired when the search button is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSearchButtonPressed(
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
       * Context object to call the event handler with. Defaults to this `sap.f.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:searchButtonPressed searchButtonPressed} event
     * of this `sap.f.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.ShellBar` itself.
     *
     * Fired when the search button is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSearchButtonPressed(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the additionalContent in the aggregation {@link #getAdditionalContent additionalContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyAdditionalContent(): this;
    /**
     * Destroys the menu in the aggregation {@link #getMenu menu}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyMenu(): this;
    /**
     * Destroys the profile in the aggregation {@link #getProfile profile}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyProfile(): this;
    /**
     * @SINCE 1.67
     *
     * Destroys the searchManager in the aggregation {@link #getSearchManager searchManager}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySearchManager(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:avatarPressed avatarPressed} event of this
     * `sap.f.ShellBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachAvatarPressed(
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
     * Detaches event handler `fnFunction` from the {@link #event:copilotPressed copilotPressed} event of this
     * `sap.f.ShellBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachCopilotPressed(
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
     * Detaches event handler `fnFunction` from the {@link #event:homeIconPressed homeIconPressed} event of
     * this `sap.f.ShellBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachHomeIconPressed(
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
     * Detaches event handler `fnFunction` from the {@link #event:menuButtonPressed menuButtonPressed} event
     * of this `sap.f.ShellBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachMenuButtonPressed(
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
     * Detaches event handler `fnFunction` from the {@link #event:navButtonPressed navButtonPressed} event of
     * this `sap.f.ShellBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachNavButtonPressed(
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
     * Detaches event handler `fnFunction` from the {@link #event:notificationsPressed notificationsPressed}
     * event of this `sap.f.ShellBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachNotificationsPressed(
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
     * Detaches event handler `fnFunction` from the {@link #event:productSwitcherPressed productSwitcherPressed}
     * event of this `sap.f.ShellBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachProductSwitcherPressed(
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
     * Detaches event handler `fnFunction` from the {@link #event:searchButtonPressed searchButtonPressed} event
     * of this `sap.f.ShellBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSearchButtonPressed(
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
     * Fires event {@link #event:avatarPressed avatarPressed} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireAvatarPressed(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Reference to the button that has been pressed
         */
        avatar?: Avatar;
      }
    ): this;
    /**
     * Fires event {@link #event:copilotPressed copilotPressed} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireCopilotPressed(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Reference to the button that has been pressed
         */
        image?: Image;
      }
    ): this;
    /**
     * Fires event {@link #event:homeIconPressed homeIconPressed} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireHomeIconPressed(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Reference to the image that has been pressed
         */
        icon?: Image;
      }
    ): this;
    /**
     * Fires event {@link #event:menuButtonPressed menuButtonPressed} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireMenuButtonPressed(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Reference to the button that has been pressed
         */
        button?: Button;
      }
    ): this;
    /**
     * Fires event {@link #event:navButtonPressed navButtonPressed} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireNavButtonPressed(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Reference to the button that has been pressed
         */
        button?: Button;
      }
    ): this;
    /**
     * Fires event {@link #event:notificationsPressed notificationsPressed} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireNotificationsPressed(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Reference to the button that has been pressed
         */
        button?: Button;
      }
    ): this;
    /**
     * Fires event {@link #event:productSwitcherPressed productSwitcherPressed} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireProductSwitcherPressed(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Reference to the button that has been pressed
         */
        button?: Button;
      }
    ): this;
    /**
     * Fires event {@link #event:searchButtonPressed searchButtonPressed} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSearchButtonPressed(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Reference to the button that has been pressed
         */
        button?: Button;
      }
    ): this;
    /**
     * Gets content of aggregation {@link #getAdditionalContent additionalContent}.
     *
     * Additional content to be displayed in the control.
     *
     * **Note:** Only controls implementing the `{@link sap.f.IShellBar}` interface are allowed.
     */
    getAdditionalContent(): IShellBar[];
    /**
     * @SINCE 1.65
     *
     * Gets the available Bar contexts.
     *
     * @returns with all available contexts
     */
    getContext(): Object;
    /**
     * Gets current value of property {@link #getHomeIcon homeIcon}.
     *
     * Defines the URI to the home icon, such as company or product logo.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `homeIcon`
     */
    getHomeIcon(): URI;
    /**
     * @SINCE 1.67
     *
     * Gets current value of property {@link #getHomeIconTooltip homeIconTooltip}.
     *
     * Defines a custom tooltip for the home icon. If not set, a default tooltip is used.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `homeIconTooltip`
     */
    getHomeIconTooltip(): string;
    /**
     * @SINCE 1.65
     *
     * Gets the HTML tag of the root DOM Reference.
     *
     * @returns the HTML-tag
     */
    getHTMLTag(): string;
    /**
     * Gets content of aggregation {@link #getMenu menu}.
     *
     * The menu attached to the main title.
     */
    getMenu(): Menu;
    /**
     * @SINCE 1.64
     *
     * Gets current value of property {@link #getNotificationsNumber notificationsNumber}.
     *
     * Defines the displayed number of upcoming notifications.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `notificationsNumber`
     */
    getNotificationsNumber(): string;
    /**
     * Gets content of aggregation {@link #getProfile profile}.
     *
     * The profile avatar.
     */
    getProfile(): Avatar;
    /**
     * @SINCE 1.67
     *
     * Gets content of aggregation {@link #getSearchManager searchManager}.
     *
     * Configurable search.
     *
     * **Note:** If `showSearch` is set to `true`, two search buttons appear.
     */
    getSearchManager(): SearchManager;
    /**
     * Gets current value of property {@link #getSecondTitle secondTitle}.
     *
     * Defines the secondary title of the control.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `secondTitle`
     */
    getSecondTitle(): string;
    /**
     * Gets current value of property {@link #getShowCopilot showCopilot}.
     *
     * Determines whether the SAP CoPilot icon is displayed.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showCopilot`
     */
    getShowCopilot(): boolean;
    /**
     * Gets current value of property {@link #getShowMenuButton showMenuButton}.
     *
     * Determines whether a hamburger menu button is displayed (as an alternative if the `menu` aggregation
     * is not used).
     *
     * Default value is `false`.
     *
     * @returns Value of property `showMenuButton`
     */
    getShowMenuButton(): boolean;
    /**
     * Gets current value of property {@link #getShowNavButton showNavButton}.
     *
     * Determines whether a back navigation button is displayed.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showNavButton`
     */
    getShowNavButton(): boolean;
    /**
     * Gets current value of property {@link #getShowNotifications showNotifications}.
     *
     * Determines whether the notifications button is displayed.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showNotifications`
     */
    getShowNotifications(): boolean;
    /**
     * Gets current value of property {@link #getShowProductSwitcher showProductSwitcher}.
     *
     * Determines whether the product switcher button is displayed.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showProductSwitcher`
     */
    getShowProductSwitcher(): boolean;
    /**
     * Gets current value of property {@link #getShowSearch showSearch}.
     *
     * Determines whether the search button is displayed.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showSearch`
     */
    getShowSearch(): boolean;
    /**
     * Gets current value of property {@link #getTitle title}.
     *
     * Defines the main title of the control.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `title`
     */
    getTitle(): string;
    /**
     * Checks for the provided `sap.f.IShellBar` in the aggregation {@link #getAdditionalContent additionalContent}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfAdditionalContent(
      /**
       * The additionalContent whose index is looked for
       */
      oAdditionalContent: IShellBar
    ): int;
    /**
     * Inserts a additionalContent into the aggregation {@link #getAdditionalContent additionalContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertAdditionalContent(
      /**
       * The additionalContent to insert; if empty, nothing is inserted
       */
      oAdditionalContent: IShellBar,
      /**
       * The `0`-based index the additionalContent should be inserted at; for a negative value of `iIndex`, the
       * additionalContent is inserted at position 0; for a value greater than the current size of the aggregation,
       * the additionalContent is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * @SINCE 1.65
     *
     * Returns if the bar is sensitive to the container context. Implementation of the IBar interface
     *
     * @returns isContextSensitive
     */
    isContextSensitive(): boolean;
    /**
     * Removes a additionalContent from the aggregation {@link #getAdditionalContent additionalContent}.
     *
     * @returns The removed additionalContent or `null`
     */
    removeAdditionalContent(
      /**
       * The additionalContent to remove or its index or id
       */
      vAdditionalContent: int | string | IShellBar
    ): IShellBar | null;
    /**
     * Removes all the controls from the aggregation {@link #getAdditionalContent additionalContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllAdditionalContent(): IShellBar[];
    /**
     * Sets a new value for property {@link #getHomeIcon homeIcon}.
     *
     * Defines the URI to the home icon, such as company or product logo.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHomeIcon(
      /**
       * New value for property `homeIcon`
       */
      sHomeIcon?: URI
    ): this;
    /**
     * @SINCE 1.67
     *
     * Sets a new value for property {@link #getHomeIconTooltip homeIconTooltip}.
     *
     * Defines a custom tooltip for the home icon. If not set, a default tooltip is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHomeIconTooltip(
      /**
       * New value for property `homeIconTooltip`
       */
      sHomeIconTooltip?: string
    ): this;
    /**
     * @SINCE 1.65
     *
     * Sets the HTML tag of the root DOM Reference.
     *
     * @returns this for chaining
     */
    setHTMLTag(sTag: string): IBar;
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
     * Sets the aggregated {@link #getProfile profile}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setProfile(
      /**
       * The profile to set
       */
      oProfile: Avatar
    ): this;
    /**
     * @SINCE 1.67
     *
     * Sets the aggregated {@link #getSearchManager searchManager}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSearchManager(
      /**
       * The searchManager to set
       */
      oSearchManager: SearchManager
    ): this;
    /**
     * Sets a new value for property {@link #getSecondTitle secondTitle}.
     *
     * Defines the secondary title of the control.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSecondTitle(
      /**
       * New value for property `secondTitle`
       */
      sSecondTitle?: string
    ): this;
    /**
     * Sets a new value for property {@link #getShowCopilot showCopilot}.
     *
     * Determines whether the SAP CoPilot icon is displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowCopilot(
      /**
       * New value for property `showCopilot`
       */
      bShowCopilot?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowMenuButton showMenuButton}.
     *
     * Determines whether a hamburger menu button is displayed (as an alternative if the `menu` aggregation
     * is not used).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowMenuButton(
      /**
       * New value for property `showMenuButton`
       */
      bShowMenuButton?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowNavButton showNavButton}.
     *
     * Determines whether a back navigation button is displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowNavButton(
      /**
       * New value for property `showNavButton`
       */
      bShowNavButton?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowNotifications showNotifications}.
     *
     * Determines whether the notifications button is displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowNotifications(
      /**
       * New value for property `showNotifications`
       */
      bShowNotifications?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowProductSwitcher showProductSwitcher}.
     *
     * Determines whether the product switcher button is displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowProductSwitcher(
      /**
       * New value for property `showProductSwitcher`
       */
      bShowProductSwitcher?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowSearch showSearch}.
     *
     * Determines whether the search button is displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowSearch(
      /**
       * New value for property `showSearch`
       */
      bShowSearch?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getTitle title}.
     *
     * Defines the main title of the control.
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
  }

  export interface $ShellBarSettings extends $ControlSettings {
    /**
     * Defines the main title of the control.
     */
    title?: string | PropertyBindingInfo;

    /**
     * Defines the secondary title of the control.
     */
    secondTitle?: string | PropertyBindingInfo;

    /**
     * Defines the URI to the home icon, such as company or product logo.
     */
    homeIcon?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.67
     *
     * Defines a custom tooltip for the home icon. If not set, a default tooltip is used.
     */
    homeIconTooltip?: string | PropertyBindingInfo;

    /**
     * Determines whether a hamburger menu button is displayed (as an alternative if the `menu` aggregation
     * is not used).
     */
    showMenuButton?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether a back navigation button is displayed.
     */
    showNavButton?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the SAP CoPilot icon is displayed.
     */
    showCopilot?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the search button is displayed.
     */
    showSearch?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the notifications button is displayed.
     */
    showNotifications?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the product switcher button is displayed.
     */
    showProductSwitcher?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.64
     *
     * Defines the displayed number of upcoming notifications.
     */
    notificationsNumber?: string | PropertyBindingInfo;

    /**
     * The menu attached to the main title.
     */
    menu?: Menu;

    /**
     * @SINCE 1.67
     *
     * Configurable search.
     *
     * **Note:** If `showSearch` is set to `true`, two search buttons appear.
     */
    searchManager?: SearchManager;

    /**
     * The profile avatar.
     */
    profile?: Avatar;

    /**
     * Additional content to be displayed in the control.
     *
     * **Note:** Only controls implementing the `{@link sap.f.IShellBar}` interface are allowed.
     */
    additionalContent?:
      | IShellBar[]
      | IShellBar
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Fired when the `homeIcon` is pressed.
     */
    homeIconPressed?: (oEvent: Event) => void;

    /**
     * Fired when the alternative menu button is pressed.
     */
    menuButtonPressed?: (oEvent: Event) => void;

    /**
     * Fired when the navigation/back button is pressed.
     */
    navButtonPressed?: (oEvent: Event) => void;

    /**
     * Fired when the SAP CoPilot icon is pressed.
     */
    copilotPressed?: (oEvent: Event) => void;

    /**
     * Fired when the search button is pressed.
     */
    searchButtonPressed?: (oEvent: Event) => void;

    /**
     * Fired when the notifications button is pressed.
     */
    notificationsPressed?: (oEvent: Event) => void;

    /**
     * Fired when the product switcher button is pressed.
     */
    productSwitcherPressed?: (oEvent: Event) => void;

    /**
     * Fired when the profile avatar is pressed.
     */
    avatarPressed?: (oEvent: Event) => void;
  }
}

declare module "sap/f/SidePanel" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import SidePanelItem from "sap/f/SidePanelItem";

  import Event from "sap/ui/base/Event";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { ID, CSSSize } from "sap/ui/core/library";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.107
   * @EXPERIMENTAL (since 1.107)
   *
   * Overview:
   *
   * `SidePanel` is a layout control that allows primary and additional content to be displayed by clicking/tapping
   * the action items from its action bar.
   *
   * Usage:
   *
   * Action bar with action items have two states - collapsed and expanded. In collapsed state only icons
   * are displayed, and in expanded state both icons and titles are displayed.
   *
   * Each action item can have a content and click/tap on action item toggles the display of its content.
   * The content can be added to the action item's `content` aggregation, or can be added or changed later.
   *
   * Each click/tap fires an event, and in the event handler specific content can be added/changed to the
   * `content` aggregation of the clicked/tapped action item or data can be retreived from the same aggregation
   * depending on the state of the action item.
   *
   * If the side content is displayed, there is automatically generated header of the side content which contains
   * the icon and title of the selected action item and a close button that closes the area where side content
   * is displayed.
   *
   * Responsive Behavior:
   *
   * **On desktop/tablet device**
   *
   * The side panel contains action bar that have action items placed vertically, and when expanded, the side
   * content is displayed next to the action bar. If there is not enough space for all available action items,
   * an overflow icon is displayed, and it toggles ON/OFF an overflow menu with the rest of the action items
   * that are not visible at the moment.
   *
   * Screen width > 1440 px
   *
   *
   * 	 - When expanded, the side content shrinks the main content.
   *
   * Screen width <= 1440 px
   *
   *
   * 	 - When expanded, the side content is placed over the main content.
   *
   * **On mobile device**
   *
   * The side panel contains action bar that have action items placed horizontally at the bottom of the display,
   * and when expanded, the side content is displayed above the action bar. If there is not enough room for
   * all action items, the action bar can be swiped to access the rest of the action items.
   *
   * Keyboard shortcuts:
   *
   *
   * 	 - [Shift] + [Command] + [p] (Mac) / [Shift] + [Control] + [p] (Windows) - Expand/Collapse side panel
   *
   * 	 - [Arrow Up], [Arrow Down] - Move to the next or previous action item
   * 	 - [Enter], [Space] - Choose the selected action item
   * 	 - [Command] + [Arrow Left] (Mac) / [Control] + [Arrow Left] (Windows) / [Tab]- Move from action items
   * 			to the opened side content panel
   * 	 - [Command] + [Arrow Right] (Mac) / [Control] + [Arrow Right] (Windows) / [Shift] + [Tab]- Move from
   * 			opened side content panel to the action items
   * 	 - [F6] / [Shift] + [F6] - Navigate back and forth between main content, side panel and side content
   * 			groups [Esc] - Close the opened side content panel and set focus back to main content
   */
  export default class SidePanel extends Control {
    /**
     * Constructor for a new `SidePanel`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SidePanelSettings
    );
    /**
     * Constructor for a new `SidePanel`.
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
      mSettings?: $SidePanelSettings
    );

    /**
     * Creates a new subclass of class sap.f.SidePanel with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, SidePanel>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.SidePanel.
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
      oItem: SidePanelItem
    ): this;
    /**
     * Adds some mainContent to the aggregation {@link #getMainContent mainContent}.
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
     * Attaches event handler `fnFunction` to the {@link #event:toggle toggle} event of this `sap.f.SidePanel`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.SidePanel` itself.
     *
     * Fires on expand and collapse of the side content.
     *
     *
     * 	 - If the event fired as a result of action item selection (`expanded` parameter contains `true`) is
     * 			prevented, the display of the side content will be blocked.
     * 	 - If the event fired as a result of action item deselection, selection of different action item, pressing
     * 			the `Close` button, or pressing the `Escape` key (`expanded` parameter contains `false`) is prevented,
     * 			this will block closing of the currently displayed side content, and if the event is fired by selection
     * 			of a different action item, the selection will be cancelled, and the next event (for expansion of a new
     * 			action item) will not be fired and the new side content will not be displayed.
     *
     * @returns Reference to `this` in order to allow method chaining
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
       * Context object to call the event handler with. Defaults to this `sap.f.SidePanel` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:toggle toggle} event of this `sap.f.SidePanel`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.f.SidePanel` itself.
     *
     * Fires on expand and collapse of the side content.
     *
     *
     * 	 - If the event fired as a result of action item selection (`expanded` parameter contains `true`) is
     * 			prevented, the display of the side content will be blocked.
     * 	 - If the event fired as a result of action item deselection, selection of different action item, pressing
     * 			the `Close` button, or pressing the `Escape` key (`expanded` parameter contains `false`) is prevented,
     * 			this will block closing of the currently displayed side content, and if the event is fired by selection
     * 			of a different action item, the selection will be cancelled, and the next event (for expansion of a new
     * 			action item) will not be fired and the new side content will not be displayed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachToggle(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.f.SidePanel` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;
    /**
     * Destroys all the mainContent in the aggregation {@link #getMainContent mainContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyMainContent(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:toggle toggle} event of this `sap.f.SidePanel`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
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
     * Fires event {@link #event:toggle toggle} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireToggle(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The action item that triggers the event.
         */
        item?: SidePanelItem;
        /**
         * State of the action item.
         */
        expanded?: boolean;
      }
    ): boolean;
    /**
     * Gets current value of property {@link #getActionBarExpanded actionBarExpanded}.
     *
     * Determines whether the action bar is expanded or collapsed.
     *
     * Default value is `false`.
     *
     * @returns Value of property `actionBarExpanded`
     */
    getActionBarExpanded(): boolean;
    /**
     * Gets current value of property {@link #getAriaLabel ariaLabel}.
     *
     * Description for aria-label.
     *
     * Default value is `"Side Panel"`.
     *
     * @returns Value of property `ariaLabel`
     */
    getAriaLabel(): string;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * The list of action items. Each action items can have different side content added to its `content` aggregation.
     */
    getItems(): SidePanelItem[];
    /**
     * Gets content of aggregation {@link #getMainContent mainContent}.
     *
     * The list of controls for the main content.
     */
    getMainContent(): Control[];
    /**
     * ID of the element which is the current target of the association {@link #getSelectedItem selectedItem},
     * or `null`.
     */
    getSelectedItem(): ID;
    /**
     * Gets current value of property {@link #getSidePanelWidth sidePanelWidth}.
     *
     * Determines the side panel width (Side Content width + Action Bar width). **Note:** if the width is given
     * in percent(%), it is calculated as given percent from the Side Panel parent container width, otherwise
     * it's calculated in absolute units.
     *
     * Default value is `"20rem"`.
     *
     * @returns Value of property `sidePanelWidth`
     */
    getSidePanelWidth(): CSSSize;
    /**
     * Checks for the provided `sap.f.SidePanelItem` in the aggregation {@link #getItems items}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: SidePanelItem
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getMainContent mainContent}.
     * and returns its index if found or -1 otherwise.
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
     * Inserts a item into the aggregation {@link #getItems items}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertItem(
      /**
       * The item to insert; if empty, nothing is inserted
       */
      oItem: SidePanelItem,
      /**
       * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
       * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a mainContent into the aggregation {@link #getMainContent mainContent}.
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
     * Removes all the controls from the aggregation {@link #getItems items}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): SidePanelItem[];
    /**
     * Removes all the controls from the aggregation {@link #getMainContent mainContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllMainContent(): Control[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     *
     * @returns The removed item or `null`
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | SidePanelItem
    ): SidePanelItem | null;
    /**
     * Removes a mainContent from the aggregation {@link #getMainContent mainContent}.
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
     * Sets a new value for property {@link #getActionBarExpanded actionBarExpanded}.
     *
     * Determines whether the action bar is expanded or collapsed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setActionBarExpanded(
      /**
       * New value for property `actionBarExpanded`
       */
      bActionBarExpanded?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getAriaLabel ariaLabel}.
     *
     * Description for aria-label.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Side Panel"`.
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
     * Sets a new value for property {@link #getSidePanelWidth sidePanelWidth}.
     *
     * Determines the side panel width (Side Content width + Action Bar width). **Note:** if the width is given
     * in percent(%), it is calculated as given percent from the Side Panel parent container width, otherwise
     * it's calculated in absolute units.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"20rem"`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSidePanelWidth(
      /**
       * New value for property `sidePanelWidth`
       */
      sSidePanelWidth?: CSSSize
    ): this;
  }

  export interface $SidePanelSettings extends $ControlSettings {
    /**
     * Determines whether the action bar is expanded or collapsed.
     */
    actionBarExpanded?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Description for aria-label.
     */
    ariaLabel?: string | PropertyBindingInfo;

    /**
     * Determines the side panel width (Side Content width + Action Bar width). **Note:** if the width is given
     * in percent(%), it is calculated as given percent from the Side Panel parent container width, otherwise
     * it's calculated in absolute units.
     */
    sidePanelWidth?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * The list of controls for the main content.
     */
    mainContent?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * The list of action items. Each action items can have different side content added to its `content` aggregation.
     */
    items?:
      | SidePanelItem[]
      | SidePanelItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * The action item that is currently selected.
     */
    selectedItem?: SidePanelItem | string;

    /**
     * Fires on expand and collapse of the side content.
     *
     *
     * 	 - If the event fired as a result of action item selection (`expanded` parameter contains `true`) is
     * 			prevented, the display of the side content will be blocked.
     * 	 - If the event fired as a result of action item deselection, selection of different action item, pressing
     * 			the `Close` button, or pressing the `Escape` key (`expanded` parameter contains `false`) is prevented,
     * 			this will block closing of the currently displayed side content, and if the event is fired by selection
     * 			of a different action item, the selection will be cancelled, and the next event (for expansion of a new
     * 			action item) will not be fired and the new side content will not be displayed.
     */
    toggle?: (oEvent: Event) => void;
  }
}

declare module "sap/f/SidePanelItem" {
  import { default as Item, $ItemSettings } from "sap/ui/core/Item";

  import Control from "sap/ui/core/Control";

  import { URI } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.107
   * @EXPERIMENTAL (since 1.107)
   *
   * Overview:
   *
   * The SidePanel Action Item.
   */
  export default class SidePanelItem extends Item {
    /**
     * Constructor for a new `SidePanelItem`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SidePanelItemSettings
    );
    /**
     * Constructor for a new `SidePanelItem`.
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
      mSettings?: $SidePanelItemSettings
    );

    /**
     * Creates a new subclass of class sap.f.SidePanelItem with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
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
      oClassInfo?: sap.ClassInfo<T, SidePanelItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.f.SidePanelItem.
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
     * The list of controls for side content of the action item.
     */
    getContent(): Control[];
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Specifies the icon for the item.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `icon`
     */
    getIcon(): URI;
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
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Specifies the icon for the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setIcon(
      /**
       * New value for property `icon`
       */
      sIcon?: URI
    ): this;
  }

  export interface $SidePanelItemSettings extends $ItemSettings {
    /**
     * Specifies the icon for the item.
     */
    icon?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * The list of controls for side content of the action item.
     */
    content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;
  }
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/f/Avatar": undefined;

    "sap/f/AvatarGroup": undefined;

    "sap/f/AvatarGroupItem": undefined;

    "sap/f/Card": undefined;

    "sap/f/CardBase": undefined;

    "sap/f/cards/BaseHeader": undefined;

    "sap/f/cards/Header": undefined;

    "sap/f/cards/NumericHeader": undefined;

    "sap/f/cards/NumericSideIndicator": undefined;

    "sap/f/dnd/GridDropInfo": undefined;

    "sap/f/DynamicPage": undefined;

    "sap/f/DynamicPageAccessibleLandmarkInfo": undefined;

    "sap/f/DynamicPageHeader": undefined;

    "sap/f/DynamicPageTitle": undefined;

    "sap/f/FlexibleColumnLayout": undefined;

    "sap/f/FlexibleColumnLayoutAccessibleLandmarkInfo": undefined;

    "sap/f/FlexibleColumnLayoutSemanticHelper": undefined;

    "sap/f/GridContainer": undefined;

    "sap/f/GridContainerItemLayoutData": undefined;

    "sap/f/GridContainerSettings": undefined;

    "sap/f/GridList": undefined;

    "sap/f/GridListItem": undefined;

    "sap/f/IllustratedMessage": undefined;

    "sap/f/Illustration": undefined;

    "sap/f/IllustrationPool": undefined;

    "sap/f/library": undefined;

    "sap/f/ProductSwitch": undefined;

    "sap/f/ProductSwitchItem": undefined;

    "sap/f/routing/Router": undefined;

    "sap/f/routing/TargetHandler": undefined;

    "sap/f/routing/Targets": undefined;

    "sap/f/SearchManager": undefined;

    "sap/f/semantic/AddAction": undefined;

    "sap/f/semantic/CloseAction": undefined;

    "sap/f/semantic/CopyAction": undefined;

    "sap/f/semantic/DeleteAction": undefined;

    "sap/f/semantic/DiscussInJamAction": undefined;

    "sap/f/semantic/EditAction": undefined;

    "sap/f/semantic/ExitFullScreenAction": undefined;

    "sap/f/semantic/FavoriteAction": undefined;

    "sap/f/semantic/FlagAction": undefined;

    "sap/f/semantic/FooterMainAction": undefined;

    "sap/f/semantic/FullScreenAction": undefined;

    "sap/f/semantic/MainAction": undefined;

    "sap/f/semantic/MessagesIndicator": undefined;

    "sap/f/semantic/NegativeAction": undefined;

    "sap/f/semantic/PositiveAction": undefined;

    "sap/f/semantic/PrintAction": undefined;

    "sap/f/semantic/SemanticButton": undefined;

    "sap/f/semantic/SemanticControl": undefined;

    "sap/f/semantic/SemanticPage": undefined;

    "sap/f/semantic/SemanticToggleButton": undefined;

    "sap/f/semantic/SendEmailAction": undefined;

    "sap/f/semantic/SendMessageAction": undefined;

    "sap/f/semantic/ShareInJamAction": undefined;

    "sap/f/semantic/TitleMainAction": undefined;

    "sap/f/ShellBar": undefined;

    "sap/f/SidePanel": undefined;

    "sap/f/SidePanelItem": undefined;

    "sap/tnt/library": undefined;
  }
}
