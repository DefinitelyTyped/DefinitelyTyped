// For Library Version: 1.113.0

declare module "sap/ui/ux3/library" {
  /**
   * @deprecated (since 1.38)
   * @EXPERIMENTAL (since 1.2) - API is not yet finished and might change completely
   *
   * Enumeration of available standard actions for 'sap.ui.ux3.ActionBar'. To be used as parameters for function
   * 'sap.ui.ux3.ActionBar.getSocialAction'.
   */
  export enum ActionBarSocialActions {
    /**
     * Standards action 'Mark as Favorite'
     */
    Favorite = "Favorite",
    /**
     * Standard action 'Mark for Follow up'
     */
    Flag = "Flag",
    /**
     * Standard action 'Follow/Unfollow'
     */
    Follow = "Follow",
    /**
     * Standard action 'Open Thing Inspector'
     */
    Open = "Open",
    /**
     * Standard action 'Create an update' (Feed)
     */
    Update = "Update",
  }
  /**
   * @deprecated (since 1.38)
   *
   * Marker interface for controls which are suitable as view rendering for a DataSet.
   */
  export interface DataSetView {
    __implements__sap_ui_ux3_DataSetView: boolean;
  }

  /**
   * @SINCE 1.7.1
   * @deprecated (since 1.38)
   *
   * Defines the order of the sub lists of a list in the ExactBrowser.
   */
  export enum ExactOrder {
    /**
     * The order of the sub lists is defined by order of the defined sub attributes.
     */
    Fixed = "Fixed",
    /**
     * The order of the sub lists is defined by the selection order of the user.
     */
    Select = "Select",
  }
  /**
   * @deprecated (since 1.38)
   * @EXPERIMENTAL (since 1.2) - The whole Feed/Feeder API is still under discussion, significant changes
   * are likely. Especially text presentation (e.g. @-references and formatted text) is not final. Also the
   * Feed model topic is still open.
   *
   * Type of a Feeder.
   */
  export enum FeederType {
    /**
     * comment feeder (small)
     */
    Comment = "Comment",
    /**
     * large Feeder
     */
    Large = "Large",
    /**
     * medium feeder
     */
    Medium = "Medium",
  }
  /**
   * @deprecated (since 1.38)
   *
   * Defines the states of the follow action
   */
  export enum FollowActionState {
    /**
     * default state
     */
    Default = "Default",
    /**
     * follow state
     */
    Follow = "Follow",
    /**
     * hold state
     */
    Hold = "Hold",
  }
  /**
   * @deprecated (since 1.38)
   *
   * This entries are used to set the visibility status of a NotificationBar
   */
  export enum NotificationBarStatus {
    /**
     * Default height for the bar
     */
    Default = "Default",
    /**
     * Bar should be maximized
     */
    Max = "Max",
    /**
     * Bar should be minimized
     */
    Min = "Min",
    /**
     * Bar should not be visible
     */
    None = "None",
  }
  /**
   * @SINCE 1.12.0
   * @deprecated (since 1.38)
   *
   * Available shell design types.
   */
  export enum ShellDesignType {
    /**
     * An even lighter design. It borrows most of its properties from the Light design and just changes a few
     * details like the header colors in order to have a blue design within gold reflection.
     */
    Crystal = "Crystal",
    /**
     * A lighter design. Should be used in combination with the Standard header type.
     */
    Light = "Light",
    /**
     * The standard Shell design (dark).
     */
    Standard = "Standard",
  }
  /**
   * @deprecated (since 1.38)
   *
   * Available shell header display types.
   */
  export enum ShellHeaderType {
    /**
     * Only the branding area is visible. Top-level navigation bar, header items, title and icon are not shown.
     */
    BrandOnly = "BrandOnly",
    /**
     * Like the Standard Area but without top-level navigation bar.
     */
    NoNavigation = "NoNavigation",
    /**
     * Like the Standard Area but with a leaner top-level navigation bar.
     */
    SlimNavigation = "SlimNavigation",
    /**
     * The standard Shell header.
     */
    Standard = "Standard",
  }
  /**
   * @SINCE 1.16.3
   * @deprecated (since 1.38)
   *
   * Available ThingViewer header display types.
   */
  export enum ThingViewerHeaderType {
    /**
     * The header content is displayed horizontally above the facet content
     */
    Horizontal = "Horizontal",
    /**
     * The standard ThingViewer header.
     */
    Standard = "Standard",
  }
  /**
   * @deprecated (since 1.38)
   *
   * VisibleItemCountMode of the FacetFilter defines if the FacetFilter takes the whole available height (Auto)
   * in the surrounding container, or is so high as needed to show 5 Items ("Fixed " - default).
   */
  export enum VisibleItemCountMode {
    /**
     * The FacetFilter automatically fills the height of the surrounding container. The visibleItemCount property
     * is automatically changed accordingly.
     */
    Auto = "Auto",
    /**
     * The FacetFilter always has as many items in the FacetFilterList as defined in the visibleItemCount property.
     */
    Fixed = "Fixed",
  }
}

declare module "sap/ui/ux3/ShellPersonalization" {
  /**
   * @deprecated (since 1.36) - This class was never released for productive use and will never be.
   * @EXPERIMENTAL (since 1.0) - The Shell-features Personalization, Color Picker and “Inspect”-Tool are only
   * experimental work and might change or disappear in future versions.
   *
   * Experimental implementation of visual Ux3 Shell personalization / branding.
   *
   * DO NOT USE PRODUCTIVELY!!!
   *
   * Being completely non-generic as of now, this is supposed to facilitate discussions with Ux about the
   * personalization capabilities. Once that concept is more final, we can go for a cleaner implementation,
   * considering the number of configurable properties etc.
   */
  const ShellPersonalization: undefined;

  export default ShellPersonalization;
}

declare module "sap/ui/ux3/ActionBar" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import Event from "sap/ui/base/Event";

  import ThingAction from "sap/ui/ux3/ThingAction";

  import { CSSSize, URI } from "sap/ui/core/library";

  import { FollowActionState } from "sap/ui/ux3/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38) - Instead, use the `sap.m.Toolbar` or `sap.m.OverflowToolbar` control.
   *
   * A special toolbar with predefined social actions which can be shown as needed. These are: Create an update
   * (Feed), Follow, Mark for Follow Up, Mark as Favorite and Open Thing.
   *
   * In addition business actions (ThingAction instances) can be added which are either displayed as MenuItems
   * of the 'More' menu button or as individual tool bar buttons.
   *
   * When using this control, please be aware that it fulfills rather specific requirements: it has been designed
   * for and is used within composite controls QuickView and ThingInspector.
   */
  export default class ActionBar extends Control {
    /**
     * Constructor for a new ActionBar.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $ActionBarSettings
    );
    /**
     * Constructor for a new ActionBar.
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
      mSettings?: $ActionBarSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.ActionBar with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, ActionBar>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.ActionBar.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:actionSelected actionSelected} event of this
     * `sap.ui.ux3.ActionBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ActionBar` itself.
     *
     * Fired when any of the social action’s toolbar buttons except ‘Update’ or any of the business action’s
     * menu items resp. buttons is pressed. The selected action can be identified by its id and newState (the
     * latter if applicable only) ‘Follow’ button + menu: id: follow, newState: Follow/Hold/Default ‘Mark for
     * follow up’ button: id: flag, newState: true/false ‘Favorite’ button: id: favorite, newState: true/false
     * ‘Open Thing Inspector’ button id: open Business Actions: id: the ThingAction id
     *
     * For ‘Update’, please refer to event ‘feedSubmit’
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachActionSelected(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ActionBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:actionSelected actionSelected} event of this
     * `sap.ui.ux3.ActionBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ActionBar` itself.
     *
     * Fired when any of the social action’s toolbar buttons except ‘Update’ or any of the business action’s
     * menu items resp. buttons is pressed. The selected action can be identified by its id and newState (the
     * latter if applicable only) ‘Follow’ button + menu: id: follow, newState: Follow/Hold/Default ‘Mark for
     * follow up’ button: id: flag, newState: true/false ‘Favorite’ button: id: favorite, newState: true/false
     * ‘Open Thing Inspector’ button id: open Business Actions: id: the ThingAction id
     *
     * For ‘Update’, please refer to event ‘feedSubmit’
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachActionSelected(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ActionBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.ActionBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ActionBar` itself.
     *
     * Fired when a new feed entry is submitted.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFeedSubmit(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ActionBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.ActionBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ActionBar` itself.
     *
     * Fired when a new feed entry is submitted.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFeedSubmit(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ActionBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Closes all popups which might be opened as ActionBar children These are the more- and follow menu and
     * the feeder popup
     */
    closePopups(): void;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:actionSelected actionSelected} event of this
     * `sap.ui.ux3.ActionBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachActionSelected(
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
     * Detaches event handler `fnFunction` from the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.ActionBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachFeedSubmit(
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
     * Fires event {@link #event:actionSelected actionSelected} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireActionSelected(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Id of selected ThingAction
         */
        id?: string;
        /**
         * Selected ThingAction
         */
        action?: ThingAction;
        /**
         * New State of the selected action.Only filled if the respective action maintains a state property, for
         * example 'FollowUp' or 'Favorite'
         */
        newState?: string;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:feedSubmit feedSubmit} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireFeedSubmit(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Feed text
         */
        text?: string;
      }
    ): this;
    /**
     * Gets current value of property {@link #getAlwaysShowMoreMenu alwaysShowMoreMenu}.
     *
     * If true, business actions are rendered as menu items of the 'More' menu button. Otherwise, 'More' menu
     * button is only displayed for overflow and business actions are rendered as inidividual buttons.
     *
     * Default value is `true`.
     *
     * @returns Value of property `alwaysShowMoreMenu`
     */
    getAlwaysShowMoreMenu(): boolean;
    /**
     * Gets content of aggregation {@link #getBusinessActions businessActions}.
     *
     * Displayed on the actionBar's right hand-side, either as menu item under 'More' or as individual buttons
     */
    getBusinessActions(): ThingAction[];
    /**
     * Gets current value of property {@link #getDividerWidth dividerWidth}.
     *
     * The minimum width of ActionBar's the social actions part: business action controls have to be rendered
     * outside this area
     *
     * @returns Value of property `dividerWidth`
     */
    getDividerWidth(): CSSSize;
    /**
     * Gets current value of property {@link #getFavoriteState favoriteState}.
     *
     * Indicates whether “Favorite” is active
     *
     * @returns Value of property `favoriteState`
     */
    getFavoriteState(): boolean;
    /**
     * Gets current value of property {@link #getFlagState flagState}.
     *
     * Indicates whether “Mark for Follow Up” is active
     *
     * @returns Value of property `flagState`
     */
    getFlagState(): boolean;
    /**
     * Gets current value of property {@link #getFollowState followState}.
     *
     * Keeps track of the actionBars Follow/Unfollow button’s state. Its value is one of - FollowActionState.Default
     * - FollowActionState.Follow - FollowActionState.Hold
     *
     * Default value is `Default`.
     *
     * @returns Value of property `followState`
     */
    getFollowState(): FollowActionState | keyof typeof FollowActionState;
    /**
     * Gets current value of property {@link #getShowFavorite showFavorite}.
     *
     * Indicates whether social action “Favorite” is shown, default is ‘true’
     *
     * Default value is `true`.
     *
     * @returns Value of property `showFavorite`
     */
    getShowFavorite(): boolean;
    /**
     * Gets current value of property {@link #getShowFlag showFlag}.
     *
     * Indicates whether social action “Mark for Follow Up” is shown, default is ‘true’
     *
     * Default value is `true`.
     *
     * @returns Value of property `showFlag`
     */
    getShowFlag(): boolean;
    /**
     * Gets current value of property {@link #getShowFollow showFollow}.
     *
     * Indicates whether social action “Follow” is shown, default is ‘true’
     *
     * Default value is `true`.
     *
     * @returns Value of property `showFollow`
     */
    getShowFollow(): boolean;
    /**
     * Gets current value of property {@link #getShowOpen showOpen}.
     *
     * Indicates whether social action “Open” is shown, default is ‘true’
     *
     * Default value is `true`.
     *
     * @returns Value of property `showOpen`
     */
    getShowOpen(): boolean;
    /**
     * Gets current value of property {@link #getShowUpdate showUpdate}.
     *
     * Indicates whether social action “Update” is shown, default is ‘true’
     *
     * Default value is `true`.
     *
     * @returns Value of property `showUpdate`
     */
    getShowUpdate(): boolean;
    /**
     * Gets current value of property {@link #getThingIconURI thingIconURI}.
     *
     * The thing icon uri. Icon will be displayed in Feeder
     *
     * @returns Value of property `thingIconURI`
     */
    getThingIconURI(): URI;
    /**
     * Gets current value of property {@link #getUpdateState updateState}.
     *
     * Indicates whether “Update” is active
     *
     * @returns Value of property `updateState`
     */
    getUpdateState(): boolean;
    /**
     * Checks for the provided `sap.ui.ux3.ThingAction` in the aggregation {@link #getBusinessActions businessActions}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfBusinessAction(
      /**
       * The businessAction whose index is looked for
       */
      oBusinessAction: ThingAction
    ): int;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Checks whether the control is still valid (is in the DOM). ActionBar instance is rendered if and only
     * if 'isActive' returns 'true'. This check is called implicitely by the rendere, MUST not be removed.
     *
     * @returns True if the control is still in the active DOM
     */
    isActive(): boolean;
    /**
     * Sets a new value for property {@link #getAlwaysShowMoreMenu alwaysShowMoreMenu}.
     *
     * If true, business actions are rendered as menu items of the 'More' menu button. Otherwise, 'More' menu
     * button is only displayed for overflow and business actions are rendered as inidividual buttons.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAlwaysShowMoreMenu(
      /**
       * New value for property `alwaysShowMoreMenu`
       */
      bAlwaysShowMoreMenu?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getDividerWidth dividerWidth}.
     *
     * The minimum width of ActionBar's the social actions part: business action controls have to be rendered
     * outside this area
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDividerWidth(
      /**
       * New value for property `dividerWidth`
       */
      sDividerWidth?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getFavoriteState favoriteState}.
     *
     * Indicates whether “Favorite” is active
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFavoriteState(
      /**
       * New value for property `favoriteState`
       */
      bFavoriteState?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getFlagState flagState}.
     *
     * Indicates whether “Mark for Follow Up” is active
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFlagState(
      /**
       * New value for property `flagState`
       */
      bFlagState?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getFollowState followState}.
     *
     * Keeps track of the actionBars Follow/Unfollow button’s state. Its value is one of - FollowActionState.Default
     * - FollowActionState.Follow - FollowActionState.Hold
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Default`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFollowState(
      /**
       * New value for property `followState`
       */
      sFollowState?: FollowActionState | keyof typeof FollowActionState
    ): this;
    /**
     * Sets a new value for property {@link #getShowFavorite showFavorite}.
     *
     * Indicates whether social action “Favorite” is shown, default is ‘true’
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowFavorite(
      /**
       * New value for property `showFavorite`
       */
      bShowFavorite?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowFlag showFlag}.
     *
     * Indicates whether social action “Mark for Follow Up” is shown, default is ‘true’
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowFlag(
      /**
       * New value for property `showFlag`
       */
      bShowFlag?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowFollow showFollow}.
     *
     * Indicates whether social action “Follow” is shown, default is ‘true’
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowFollow(
      /**
       * New value for property `showFollow`
       */
      bShowFollow?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowOpen showOpen}.
     *
     * Indicates whether social action “Open” is shown, default is ‘true’
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowOpen(
      /**
       * New value for property `showOpen`
       */
      bShowOpen?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowUpdate showUpdate}.
     *
     * Indicates whether social action “Update” is shown, default is ‘true’
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowUpdate(
      /**
       * New value for property `showUpdate`
       */
      bShowUpdate?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getThingIconURI thingIconURI}.
     *
     * The thing icon uri. Icon will be displayed in Feeder
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setThingIconURI(
      /**
       * New value for property `thingIconURI`
       */
      sThingIconURI?: URI
    ): this;
    /**
     * Sets a new value for property {@link #getUpdateState updateState}.
     *
     * Indicates whether “Update” is active
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setUpdateState(
      /**
       * New value for property `updateState`
       */
      bUpdateState?: boolean
    ): this;
  }

  export interface $ActionBarSettings extends $ControlSettings {
    /**
     * Keeps track of the actionBars Follow/Unfollow button’s state. Its value is one of - FollowActionState.Default
     * - FollowActionState.Follow - FollowActionState.Hold
     */
    followState?:
      | (FollowActionState | keyof typeof FollowActionState)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Indicates whether “Mark for Follow Up” is active
     */
    flagState?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Indicates whether “Favorite” is active
     */
    favoriteState?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Indicates whether “Update” is active
     */
    updateState?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The thing icon uri. Icon will be displayed in Feeder
     */
    thingIconURI?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * If true, business actions are rendered as menu items of the 'More' menu button. Otherwise, 'More' menu
     * button is only displayed for overflow and business actions are rendered as inidividual buttons.
     */
    alwaysShowMoreMenu?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Indicates whether social action “Update” is shown, default is ‘true’
     */
    showUpdate?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Indicates whether social action “Follow” is shown, default is ‘true’
     */
    showFollow?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Indicates whether social action “Mark for Follow Up” is shown, default is ‘true’
     */
    showFlag?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Indicates whether social action “Favorite” is shown, default is ‘true’
     */
    showFavorite?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Indicates whether social action “Open” is shown, default is ‘true’
     */
    showOpen?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The minimum width of ActionBar's the social actions part: business action controls have to be rendered
     * outside this area
     */
    dividerWidth?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Displayed on the actionBar's right hand-side, either as menu item under 'More' or as individual buttons
     */
    businessActions?:
      | ThingAction[]
      | ThingAction
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Fired when any of the social action’s toolbar buttons except ‘Update’ or any of the business action’s
     * menu items resp. buttons is pressed. The selected action can be identified by its id and newState (the
     * latter if applicable only) ‘Follow’ button + menu: id: follow, newState: Follow/Hold/Default ‘Mark for
     * follow up’ button: id: flag, newState: true/false ‘Favorite’ button: id: favorite, newState: true/false
     * ‘Open Thing Inspector’ button id: open Business Actions: id: the ThingAction id
     *
     * For ‘Update’, please refer to event ‘feedSubmit’
     */
    actionSelected?: (oEvent: Event) => void;

    /**
     * Fired when a new feed entry is submitted.
     */
    feedSubmit?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/ux3/Collection" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import Item from "sap/ui/core/Item";

  import Event from "sap/ui/base/Event";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { ID } from "sap/ui/core/library";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.9.0
   * @deprecated (since 1.38)
   *
   * Collection
   */
  export default class Collection extends UI5Element {
    /**
     * Constructor for a new Collection.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $CollectionSettings
    );
    /**
     * Constructor for a new Collection.
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
      mSettings?: $CollectionSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.Collection with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, Collection>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.Collection.
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
      oItem: Item
    ): this;
    /**
     *
     * @returns `this` to allow method chaining
     */
    addSelectedItem(
      /**
       * Id of a selectedItem which becomes an additional target of this `selectedItems` association. Alternatively,
       * a selectedItem instance may be given.
       */
      vSelectedItem: string | Item
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:propertyChanged propertyChanged} event of this
     * `sap.ui.ux3.Collection`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Collection` itself.
     *
     * Fires if a property has changed, and the collection inspector needs to do something after that
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPropertyChanged(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Collection` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:propertyChanged propertyChanged} event of this
     * `sap.ui.ux3.Collection`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Collection` itself.
     *
     * Fires if a property has changed, and the collection inspector needs to do something after that
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPropertyChanged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Collection` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChanged selectionChanged} event of
     * this `sap.ui.ux3.Collection`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Collection` itself.
     *
     * Fired when ever the selected items changer
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelectionChanged(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Collection` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChanged selectionChanged} event of
     * this `sap.ui.ux3.Collection`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Collection` itself.
     *
     * Fired when ever the selected items changer
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelectionChanged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Collection` itself
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
     * Detaches event handler `fnFunction` from the {@link #event:propertyChanged propertyChanged} event of
     * this `sap.ui.ux3.Collection`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachPropertyChanged(
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
     * Detaches event handler `fnFunction` from the {@link #event:selectionChanged selectionChanged} event of
     * this `sap.ui.ux3.Collection`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSelectionChanged(
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
     * Fires event {@link #event:propertyChanged propertyChanged} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    firePropertyChanged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:selectionChanged selectionChanged} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSelectionChanged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Gets current value of property {@link #getEditable editable}.
     *
     * If a collection is editable an edit button will be displayed below the list of items
     *
     * Default value is `false`.
     *
     * @returns Value of property `editable`
     */
    getEditable(): boolean;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * Items in the collection
     */
    getItems(): Item[];
    /**
     * Gets current value of property {@link #getMultiSelection multiSelection}.
     *
     * Allow multi selection of items in collection
     *
     * Default value is `false`.
     *
     * @returns Value of property `multiSelection`
     */
    getMultiSelection(): boolean;
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getSelectedItems
     * selectedItems}.
     */
    getSelectedItems(): ID[];
    /**
     * Gets current value of property {@link #getTitle title}.
     *
     * Name for the collection
     *
     * @returns Value of property `title`
     */
    getTitle(): string;
    /**
     * Checks for the provided `sap.ui.core.Item` in the aggregation {@link #getItems items}. and returns its
     * index if found or -1 otherwise.
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
     * Removes all the controls from the aggregation {@link #getItems items}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): Item[];
    /**
     *
     * @returns an array with the ids of the removed elements (might be empty)
     */
    removeAllSelectedItems(): string[];
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
     *
     * @returns the ID of the removed selected item or `null`
     */
    removeSelectedItem(
      /**
       * the selected item to remove or its index or ID
       */
      vSelectedItem: int | string | Item
    ): string | null | undefined;
    /**
     * Sets a new value for property {@link #getEditable editable}.
     *
     * If a collection is editable an edit button will be displayed below the list of items
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
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
     * Sets a new value for property {@link #getMultiSelection multiSelection}.
     *
     * Allow multi selection of items in collection
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMultiSelection(
      /**
       * New value for property `multiSelection`
       */
      bMultiSelection?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getTitle title}.
     *
     * Name for the collection
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

  export interface $CollectionSettings extends $ElementSettings {
    /**
     * Name for the collection
     */
    title?: string | PropertyBindingInfo;

    /**
     * If a collection is editable an edit button will be displayed below the list of items
     */
    editable?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Allow multi selection of items in collection
     */
    multiSelection?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Items in the collection
     */
    items?: Item[] | Item | AggregationBindingInfo | `{${string}}`;

    /**
     * Contains all items that are currently selected
     */
    selectedItems?: Array<Item | string>;

    /**
     * Fired when ever the selected items changer
     */
    selectionChanged?: (oEvent: Event) => void;

    /**
     * Fires if a property has changed, and the collection inspector needs to do something after that
     */
    propertyChanged?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/ux3/CollectionInspector" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import Collection from "sap/ui/ux3/Collection";

  import Event from "sap/ui/base/Event";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { ID } from "sap/ui/core/library";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.9.0
   * @deprecated (since 1.38)
   *
   * CollectionInspector
   */
  export default class CollectionInspector extends Control {
    /**
     * Constructor for a new CollectionInspector.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $CollectionInspectorSettings
    );
    /**
     * Constructor for a new CollectionInspector.
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
      mSettings?: $CollectionInspectorSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.CollectionInspector with name `sClassName` and enriches it
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
      oClassInfo?: sap.ClassInfo<T, CollectionInspector>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.CollectionInspector.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some collection `oCollection` to the aggregation named `collections`.
     *
     * @returns `this` to allow method chaining
     */
    addCollection(
      /**
       * the collection to add; if empty, nothing is inserted
       */
      oCollection: Collection
    ): this;
    /**
     * Adds some content `oContent` to the aggregation named `content`.
     *
     * @returns `this` to allow method chaining
     */
    addContent(
      /**
       * the content to add; if empty, nothing is inserted
       */
      oContent: Control
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:collectionSelected collectionSelected} event
     * of this `sap.ui.ux3.CollectionInspector`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.CollectionInspector` itself.
     *
     * Event is fired if user selects a collection
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCollectionSelected(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.CollectionInspector` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:collectionSelected collectionSelected} event
     * of this `sap.ui.ux3.CollectionInspector`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.CollectionInspector` itself.
     *
     * Event is fired if user selects a collection
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCollectionSelected(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.CollectionInspector` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:editCollection editCollection} event of this
     * `sap.ui.ux3.CollectionInspector`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.CollectionInspector` itself.
     *
     * Fires when the edit button is clicked
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachEditCollection(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.CollectionInspector` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:editCollection editCollection} event of this
     * `sap.ui.ux3.CollectionInspector`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.CollectionInspector` itself.
     *
     * Fires when the edit button is clicked
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachEditCollection(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.CollectionInspector` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:itemSelectionChanged itemSelectionChanged} event
     * of this `sap.ui.ux3.CollectionInspector`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.CollectionInspector` itself.
     *
     * Fires when an item in a collection is selected
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemSelectionChanged(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.CollectionInspector` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:itemSelectionChanged itemSelectionChanged} event
     * of this `sap.ui.ux3.CollectionInspector`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.CollectionInspector` itself.
     *
     * Fires when an item in a collection is selected
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemSelectionChanged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.CollectionInspector` itself
       */
      oListener?: object
    ): this;
    /**
     * Closes the siedebar
     */
    closeSidebar(): void;
    /**
     * Destroys the collection aggregation
     *
     * @returns this to allow method chaining
     */
    destroyCollections(): this;
    /**
     * Destroys all the content in the aggregation named `content`.
     *
     * @returns `this` to allow method chaining
     */
    destroyContent(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:collectionSelected collectionSelected} event
     * of this `sap.ui.ux3.CollectionInspector`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachCollectionSelected(
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
     * Detaches event handler `fnFunction` from the {@link #event:editCollection editCollection} event of this
     * `sap.ui.ux3.CollectionInspector`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachEditCollection(
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
     * Detaches event handler `fnFunction` from the {@link #event:itemSelectionChanged itemSelectionChanged}
     * event of this `sap.ui.ux3.CollectionInspector`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachItemSelectionChanged(
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
     * Fires event {@link #event:collectionSelected collectionSelected} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireCollectionSelected(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:editCollection editCollection} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireEditCollection(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:itemSelectionChanged itemSelectionChanged} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireItemSelectionChanged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Gets content of aggregation {@link #getCollections collections}.
     *
     * Collections which are displayed in the COllectionInspector
     */
    getCollections(): Collection[];
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * All controls that are currently displayed
     */
    getContent(): Control[];
    /**
     * Return the edit button
     */
    getEditButton(): void;
    /**
     * Gets current value of property {@link #getFitParent fitParent}.
     *
     * If set to true, control will fit parents content area
     *
     * Default value is `true`.
     *
     * @returns Value of property `fitParent`
     */
    getFitParent(): boolean;
    /**
     * ID of the element which is the current target of the association {@link #getSelectedCollection selectedCollection},
     * or `null`.
     */
    getSelectedCollection(): ID;
    /**
     * Gets current value of property {@link #getSidebarVisible sidebarVisible}.
     *
     * Defines if the list of collection items is visible on the left
     *
     * Default value is `true`.
     *
     * @returns Value of property `sidebarVisible`
     */
    getSidebarVisible(): boolean;
    /**
     * Checks for the provided `sap.ui.ux3.Collection` in the aggregation {@link #getCollections collections}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfCollection(
      /**
       * The collection whose index is looked for
       */
      oCollection: Collection
    ): int;
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
     * Inserts a collection into the aggregation named `collections`.
     *
     * @returns `this` to allow method chaining
     */
    insertCollection(
      /**
       * the collection to insert; if empty, nothing is inserted
       */
      oCollection: Collection,
      /**
       * the `0`-based index the collection should be inserted at; for a negative value of `iIndex`, the collection
       * is inserted at position 0; for a value greater than the current size of the aggregation, the collection
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a content into the aggregation named `content`.
     *
     * @returns `this` to allow method chaining
     */
    insertContent(
      /**
       * the content to insert; if empty, nothing is inserted
       */
      oContent: Control,
      /**
       * the `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
       * is inserted at position 0; for a value greater than the current size of the aggregation, the content
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Opens the sidebar
     */
    openSidebar(): void;
    /**
     * Removes all the controls in the aggregation named `collections`.
     *  Additionally unregisters them from the hosting UIArea.
     *
     * @returns an array of the removed elements (might be empty)
     */
    removeAllCollections(): Collection[];
    /**
     * Removes all the controls in the aggregation named `content`.
     *  Additionally unregisters them from the hosting UIArea.
     *
     * @returns an array of the removed elements (might be empty)
     */
    removeAllContent(): Control[];
    /**
     * Removes a collection from the aggregation named `collections`.
     *
     * @returns the removed collection or `null`
     */
    removeCollection(
      /**
       * the collection to remove or its index or ID
       */
      vCollection: int | string | Collection
    ): Collection | null;
    /**
     * Removes a content from the aggregation named `content`.
     *
     * @returns the removed content or `null`
     */
    removeContent(
      /**
       * the content to remove or its index or ID
       */
      vContent: int | string | Control
    ): Control | null;
    /**
     * Sets a new value for property {@link #getFitParent fitParent}.
     *
     * If set to true, control will fit parents content area
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFitParent(
      /**
       * New value for property `fitParent`
       */
      bFitParent?: boolean
    ): this;
    /**
     * Sets the associated {@link #getSelectedCollection selectedCollection}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelectedCollection(
      /**
       * ID of an element which becomes the new target of this selectedCollection association; alternatively,
       * an element instance may be given
       */
      oSelectedCollection: ID | Collection
    ): this;
    /**
     * Sets a new value for property {@link #getSidebarVisible sidebarVisible}.
     *
     * Defines if the list of collection items is visible on the left
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSidebarVisible(
      /**
       * New value for property `sidebarVisible`
       */
      bSidebarVisible?: boolean
    ): this;
  }

  export interface $CollectionInspectorSettings extends $ControlSettings {
    /**
     * Defines if the list of collection items is visible on the left
     */
    sidebarVisible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If set to true, control will fit parents content area
     */
    fitParent?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Collections which are displayed in the COllectionInspector
     */
    collections?:
      | Collection[]
      | Collection
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * All controls that are currently displayed
     */
    content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Collection which is currently selected
     */
    selectedCollection?: Collection | string;

    /**
     * Event is fired if user selects a collection
     */
    collectionSelected?: (oEvent: Event) => void;

    /**
     * Fires when an item in a collection is selected
     */
    itemSelectionChanged?: (oEvent: Event) => void;

    /**
     * Fires when the edit button is clicked
     */
    editCollection?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/ux3/DataSet" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import DataSetItem from "sap/ui/ux3/DataSetItem";

  import { ToolbarItem } from "sap/ui/commons/library";

  import { DataSetView } from "sap/ui/ux3/library";

  import Event from "sap/ui/base/Event";

  import {
    AggregationBindingInfo,
    PropertyBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { ID } from "sap/ui/core/library";

  /**
   * @deprecated (since 1.38) - Use a container by choice from the {@link sap.m} library, instead.
   *
   * DataSet
   */
  export default class DataSet extends Control {
    /**
     * Constructor for a new DataSet.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $DataSetSettings
    );
    /**
     * Constructor for a new DataSet.
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
      mSettings?: $DataSetSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.DataSet with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, DataSet>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.DataSet.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Rerendering of the FilterArea
     */
    _rerenderFilter(): void;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Rerendering of the Toolbar
     */
    _rerenderToolbar(): void;
    /**
     * Adds some filter to the aggregation {@link #getFilter filter}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addFilter(
      /**
       * The filter to add; if empty, nothing is inserted
       */
      oFilter: Control
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
      oItem: DataSetItem
    ): this;
    /**
     * add a toolbarItem to the toolbar
     */
    addToolbarItem(
      /**
       * ToolbarItem
       */
      oOToolbarItem: ToolbarItem
    ): void;
    /**
     * Adds some view to the aggregation {@link #getViews views}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addView(
      /**
       * The view to add; if empty, nothing is inserted
       */
      oView: DataSetView
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.DataSet`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.DataSet` itself.
     *
     * Event which is fired when the user triggers a search
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.DataSet` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.DataSet`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.DataSet` itself.
     *
     * Event which is fired when the user triggers a search
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSearch(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.DataSet` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChanged selectionChanged} event of
     * this `sap.ui.ux3.DataSet`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.DataSet` itself.
     *
     * selection Changed
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelectionChanged(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.DataSet` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChanged selectionChanged} event of
     * this `sap.ui.ux3.DataSet`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.DataSet` itself.
     *
     * selection Changed
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelectionChanged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.DataSet` itself
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
     * clears dataset from all previous selections
     */
    clearSelection(): void;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Creates a view switch button
     *
     * @returns viewSwitch instance
     */
    createViewSwitch(
      /**
       * View
       */
      oView: /* was: sap.m.Element */ any,
      /**
       * Index of view
       */
      iIndex: int
    ): /* was: sap.m.Button */ any;
    /**
     * Destroys all the filter in the aggregation {@link #getFilter filter}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFilter(): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;
    /**
     * Destroys all the views in the aggregation {@link #getViews views}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyViews(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:search search} event of this `sap.ui.ux3.DataSet`.
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
     * Detaches event handler `fnFunction` from the {@link #event:selectionChanged selectionChanged} event of
     * this `sap.ui.ux3.DataSet`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSelectionChanged(
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
         * The search query
         */
        query?: string;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:selectionChanged selectionChanged} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSelectionChanged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Old lead selected index
         */
        oldLeadSelectedIndex?: int;
        /**
         * New lead selected index
         */
        newLeadSelectedIndex?: int;
      }
    ): this;
    /**
     * Gets content of aggregation {@link #getFilter filter}.
     *
     * Filter control (e.g. a FacetFilter) for the DataSet
     */
    getFilter(): Control[];
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * Aggregation of DataSetItems
     */
    getItems(): DataSetItem[];
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Returns the LeadSelection index
     *
     * @returns selected index
     */
    getLeadSelection(): int;
    /**
     * Gets current value of property {@link #getMultiSelect multiSelect}.
     *
     * Selection mode of the DataSet
     *
     * Default value is `false`.
     *
     * @returns Value of property `multiSelect`
     */
    getMultiSelect(): boolean;
    /**
     * use this function to retrieve the lead selected index
     */
    getSelectedIndex(): void;
    /**
     * use this function to retrieve all selected indices if multiple select is enabled
     */
    getSelectedIndices(): void;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Returns id of selected Item from given index
     *
     * @returns id of selected item
     */
    getSelectedItemId(
      /**
       * index of selection
       */
      iIndex: int
    ): string;
    /**
     * ID of the element which is the current target of the association {@link #getSelectedView selectedView},
     * or `null`.
     */
    getSelectedView(): ID;
    /**
     * Gets current value of property {@link #getShowFilter showFilter}.
     *
     * show filter
     *
     * Default value is `true`.
     *
     * @returns Value of property `showFilter`
     */
    getShowFilter(): boolean;
    /**
     * Gets current value of property {@link #getShowSearchField showSearchField}.
     *
     * Show/hide SearchField in Toolbar
     *
     * Default value is `true`.
     *
     * @returns Value of property `showSearchField`
     */
    getShowSearchField(): boolean;
    /**
     * Gets current value of property {@link #getShowToolbar showToolbar}.
     *
     * show Toolbar
     *
     * Default value is `true`.
     *
     * @returns Value of property `showToolbar`
     */
    getShowToolbar(): boolean;
    /**
     * Gets content of aggregation {@link #getViews views}.
     *
     * views
     */
    getViews(): DataSetView[];
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getFilter filter}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfFilter(
      /**
       * The filter whose index is looked for
       */
      oFilter: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.ux3.DataSetItem` in the aggregation {@link #getItems items}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: DataSetItem
    ): int;
    /**
     * Checks for the provided `sap.ui.ux3.DataSetView` in the aggregation {@link #getViews views}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfView(
      /**
       * The view whose index is looked for
       */
      oView: DataSetView
    ): int;
    /**
     * Inserts a filter into the aggregation {@link #getFilter filter}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertFilter(
      /**
       * The filter to insert; if empty, nothing is inserted
       */
      oFilter: Control,
      /**
       * The `0`-based index the filter should be inserted at; for a negative value of `iIndex`, the filter is
       * inserted at position 0; for a value greater than the current size of the aggregation, the filter is inserted
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
      oItem: DataSetItem,
      /**
       * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
       * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a view into the aggregation {@link #getViews views}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertView(
      /**
       * The view to insert; if empty, nothing is inserted
       */
      oView: DataSetView,
      /**
       * The `0`-based index the view should be inserted at; for a negative value of `iIndex`, the view is inserted
       * at position 0; for a value greater than the current size of the aggregation, the view is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Returns true if iIndex is selected
     *
     * @returns index selected true/false
     */
    isSelectedIndex(
      /**
       * index of selection
       */
      iIndex: int
    ): boolean;
    /**
     * Removes all the controls from the aggregation {@link #getFilter filter}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllFilter(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): DataSetItem[];
    /**
     * Removes all the controls from the aggregation {@link #getViews views}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllViews(): DataSetView[];
    /**
     * Removes a filter from the aggregation {@link #getFilter filter}.
     *
     * @returns The removed filter or `null`
     */
    removeFilter(
      /**
       * The filter to remove or its index or id
       */
      vFilter: int | string | Control
    ): Control | null;
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     *
     * @returns The removed item or `null`
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | DataSetItem
    ): DataSetItem | null;
    /**
     * remove a toolbarItem to the toolbar
     */
    removeToolbarItem(oOToolbarItem: ToolbarItem): void;
    /**
     * Removes a view from the aggregation {@link #getViews views}.
     *
     * @returns The removed view or `null`
     */
    removeView(
      /**
       * The view to remove or its index or id
       */
      vView: int | string | DataSetView
    ): DataSetView | null;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Set the LeadSelection index
     */
    setLeadSelection(
      /**
       * set LeadSelection index
       */
      iIIndex: int
    ): void;
    /**
     * setter for multi selection mode
     */
    setMultiSelect(
      /**
       * true for multi mode, false for single mode
       */
      bMode: boolean
    ): void;
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
      oSelectedView: ID | DataSetView
    ): this;
    /**
     * Sets a new value for property {@link #getShowFilter showFilter}.
     *
     * show filter
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowFilter(
      /**
       * New value for property `showFilter`
       */
      bShowFilter?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowSearchField showSearchField}.
     *
     * Show/hide SearchField in Toolbar
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowSearchField(
      /**
       * New value for property `showSearchField`
       */
      bShowSearchField?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowToolbar showToolbar}.
     *
     * show Toolbar
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowToolbar(
      /**
       * New value for property `showToolbar`
       */
      bShowToolbar?: boolean
    ): this;
    /**
     * Unbinds aggregation {@link #getItems items} from model data.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    unbindItems(): this;
  }

  export interface $DataSetSettings extends $ControlSettings {
    /**
     * show Toolbar
     */
    showToolbar?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * show filter
     */
    showFilter?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Show/hide SearchField in Toolbar
     */
    showSearchField?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Selection mode of the DataSet
     */
    multiSelect?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Aggregation of DataSetItems
     */
    items?:
      | DataSetItem[]
      | DataSetItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * views
     */
    views?:
      | DataSetView[]
      | DataSetView
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Filter control (e.g. a FacetFilter) for the DataSet
     */
    filter?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Selected view of the Dataset
     */
    selectedView?: DataSetView | string;

    /**
     * selection Changed
     */
    selectionChanged?: (oEvent: Event) => void;

    /**
     * Event which is fired when the user triggers a search
     */
    search?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/ux3/DataSetItem" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import Event from "sap/ui/base/Event";

  import { URI } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38)
   *
   * DataSet Item
   */
  export default class DataSetItem extends UI5Element {
    /**
     * Constructor for a new DataSetItem.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $DataSetItemSettings
    );
    /**
     * Constructor for a new DataSetItem.
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
      mSettings?: $DataSetItemSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.DataSetItem with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, DataSetItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.DataSetItem.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selected selected} event of this `sap.ui.ux3.DataSetItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.DataSetItem` itself.
     *
     * Event Fired when Datset item is selected.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelected(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.DataSetItem` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selected selected} event of this `sap.ui.ux3.DataSetItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.DataSetItem` itself.
     *
     * Event Fired when Datset item is selected.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelected(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.DataSetItem` itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:selected selected} event of this `sap.ui.ux3.DataSetItem`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSelected(
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
     * Fires event {@link #event:selected selected} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSelected(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Id of the selected Datset item
         */
        itemId?: string;
      }
    ): this;
    /**
     * Gets current value of property {@link #getCheckable checkable}.
     *
     * checkable
     *
     * Default value is `true`.
     *
     * @returns Value of property `checkable`
     */
    getCheckable(): boolean;
    /**
     * Gets current value of property {@link #getIconSrc iconSrc}.
     *
     * image
     *
     * @returns Value of property `iconSrc`
     */
    getIconSrc(): URI;
    /**
     * Gets current value of property {@link #getSubtitle subtitle}.
     *
     * subtitle
     *
     * Default value is `'Subtitle'`.
     *
     * @returns Value of property `subtitle`
     */
    getSubtitle(): string;
    /**
     * Gets current value of property {@link #getTitle title}.
     *
     * title
     *
     * Default value is `'Title'`.
     *
     * @returns Value of property `title`
     */
    getTitle(): string;
    /**
     * Sets a new value for property {@link #getCheckable checkable}.
     *
     * checkable
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setCheckable(
      /**
       * New value for property `checkable`
       */
      bCheckable?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getIconSrc iconSrc}.
     *
     * image
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * Sets a new value for property {@link #getSubtitle subtitle}.
     *
     * subtitle
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `'Subtitle'`.
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
     * Sets a new value for property {@link #getTitle title}.
     *
     * title
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `'Title'`.
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

  export interface $DataSetItemSettings extends $ElementSettings {
    /**
     * image
     */
    iconSrc?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * title
     */
    title?: string | PropertyBindingInfo;

    /**
     * checkable
     */
    checkable?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * subtitle
     */
    subtitle?: string | PropertyBindingInfo;

    /**
     * Event Fired when Datset item is selected.
     */
    selected?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/ux3/DataSetSimpleView" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { DataSetView } from "sap/ui/ux3/library";

  import DataSetItem from "sap/ui/ux3/DataSetItem";

  import { CSSSize, URI } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Event from "sap/ui/base/Event";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38) - Use a layout by choice from the {@link sap.m} library, instead.
   *
   * DataSetSimpleView provides a simple view example for DataSet usage.
   */
  export default class DataSetSimpleView
    extends Control
    implements DataSetView {
    __implements__sap_ui_ux3_DataSetView: boolean;
    /**
     * Constructor for a new DataSetSimpleView.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $DataSetSimpleViewSettings
    );
    /**
     * Constructor for a new DataSetSimpleView.
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
      mSettings?: $DataSetSimpleViewSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.DataSetSimpleView with name `sClassName` and enriches it with
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
      oClassInfo?: sap.ClassInfo<T, DataSetSimpleView>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.DataSetSimpleView.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Destroys the template in the aggregation {@link #getTemplate template}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTemplate(): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * View finalization: Called when leaving the view
     */
    exitView(aItems: DataSetItem[]): void;
    /**
     * Gets current value of property {@link #getFloating floating}.
     *
     * When true the DatSet items are floating containers. When set to false The Items are rendered in a 1 column
     * Layout.
     *
     * Default value is `true`.
     *
     * @returns Value of property `floating`
     */
    getFloating(): boolean;
    /**
     * @SINCE 1.13.0
     *
     * Gets current value of property {@link #getHeight height}.
     *
     * If the pagination feature is used without specifying a scroll area, a height for the dataset must be
     * defined.
     *
     * @returns Value of property `height`
     */
    getHeight(): CSSSize;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Icon source for this view
     *
     * @returns Value of property `icon`
     */
    getIcon(): URI;
    /**
     * Gets current value of property {@link #getIconHovered iconHovered}.
     *
     * icon: hovered state
     *
     * @returns Value of property `iconHovered`
     */
    getIconHovered(): URI;
    /**
     * Gets current value of property {@link #getIconSelected iconSelected}.
     *
     * icon: selected state
     *
     * @returns Value of property `iconSelected`
     */
    getIconSelected(): URI;
    /**
     * @SINCE 1.13.0
     *
     * Gets current value of property {@link #getInitialItemCount initialItemCount}.
     *
     * If this value is greater zero only this amount of items is loaded in the first place. New items are loaded
     * automatically when the user scrolls down. The number of items which are reloaded can be defined with
     * the property "reloadItemCount"
     *
     * Default value is `0`.
     *
     * @returns Value of property `initialItemCount`
     */
    getInitialItemCount(): int;
    /**
     * @SINCE 1.9.2
     *
     * Gets current value of property {@link #getItemMinWidth itemMinWidth}.
     *
     * When itemMinWidth>0 and the property floating is true the given minimum width in pixels is set to DatSet
     * items. A minimum width must be given when the property responsive is set.
     *
     * Default value is `0`.
     *
     * @returns Value of property `itemMinWidth`
     */
    getItemMinWidth(): int;
    /**
     * Gets current value of property {@link #getName name}.
     *
     * Name of the View
     *
     * Default value is `"Name of this View"`.
     *
     * @returns Value of property `name`
     */
    getName(): string;
    /**
     * @SINCE 1.13.0
     *
     * Gets current value of property {@link #getReloadItemCount reloadItemCount}.
     *
     * This number defines the item count which is reloaded on scroll if initialItemCount is enabled.
     *
     * Default value is `0`.
     *
     * @returns Value of property `reloadItemCount`
     */
    getReloadItemCount(): int;
    /**
     * @SINCE 1.9.2
     *
     * Gets current value of property {@link #getResponsive responsive}.
     *
     * When true and the property floating is true the DatSet items are floating containers filling the whole
     * space of a row.
     *
     * Default value is `false`.
     *
     * @returns Value of property `responsive`
     */
    getResponsive(): boolean;
    /**
     * @SINCE 1.13.0
     *
     * Gets current value of property {@link #getScrollArea scrollArea}.
     *
     * ID of the DOM Element or jQuery reference to the dom which holds the scrollbar for the dataset
     *
     * @returns Value of property `scrollArea`
     */
    getScrollArea(): any;
    /**
     * Gets content of aggregation {@link #getTemplate template}.
     *
     * template
     */
    getTemplate(): Control;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Eventhandler for the selection of an Item
     */
    handleSelection(
      /**
       * SelectionChanged event
       */
      oEvent: Event
    ): void;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * View Initialization: Called when selecting the view
     */
    initView(
      /**
       * Array of DataSetItems added to the parent DataSet
       */
      aItems: any[]
    ): void;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Check if Item `oItem` is selected
     */
    isItemSelected(
      /**
       * DataSetItem instance
       */
      oItem: DataSetItem
    ): void;
    /**
     * Sets a new value for property {@link #getFloating floating}.
     *
     * When true the DatSet items are floating containers. When set to false The Items are rendered in a 1 column
     * Layout.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFloating(
      /**
       * New value for property `floating`
       */
      bFloating?: boolean
    ): this;
    /**
     * @SINCE 1.13.0
     *
     * Sets a new value for property {@link #getHeight height}.
     *
     * If the pagination feature is used without specifying a scroll area, a height for the dataset must be
     * defined.
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
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Icon source for this view
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
     * Sets a new value for property {@link #getIconHovered iconHovered}.
     *
     * icon: hovered state
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setIconHovered(
      /**
       * New value for property `iconHovered`
       */
      sIconHovered?: URI
    ): this;
    /**
     * Sets a new value for property {@link #getIconSelected iconSelected}.
     *
     * icon: selected state
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setIconSelected(
      /**
       * New value for property `iconSelected`
       */
      sIconSelected?: URI
    ): this;
    /**
     * @SINCE 1.13.0
     *
     * Sets a new value for property {@link #getInitialItemCount initialItemCount}.
     *
     * If this value is greater zero only this amount of items is loaded in the first place. New items are loaded
     * automatically when the user scrolls down. The number of items which are reloaded can be defined with
     * the property "reloadItemCount"
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setInitialItemCount(
      /**
       * New value for property `initialItemCount`
       */
      iInitialItemCount?: int
    ): this;
    /**
     * @SINCE 1.9.2
     *
     * Sets a new value for property {@link #getItemMinWidth itemMinWidth}.
     *
     * When itemMinWidth>0 and the property floating is true the given minimum width in pixels is set to DatSet
     * items. A minimum width must be given when the property responsive is set.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setItemMinWidth(
      /**
       * New value for property `itemMinWidth`
       */
      iItemMinWidth?: int
    ): this;
    /**
     * Sets a new value for property {@link #getName name}.
     *
     * Name of the View
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"Name of this View"`.
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
     * @SINCE 1.13.0
     *
     * Sets a new value for property {@link #getReloadItemCount reloadItemCount}.
     *
     * This number defines the item count which is reloaded on scroll if initialItemCount is enabled.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setReloadItemCount(
      /**
       * New value for property `reloadItemCount`
       */
      iReloadItemCount?: int
    ): this;
    /**
     * @SINCE 1.9.2
     *
     * Sets a new value for property {@link #getResponsive responsive}.
     *
     * When true and the property floating is true the DatSet items are floating containers filling the whole
     * space of a row.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setResponsive(
      /**
       * New value for property `responsive`
       */
      bResponsive?: boolean
    ): this;

    setScrollArea(
      aScrollArea: any[],

      bSupress: boolean
    ): void;
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
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * View update: Called when pagination adds items
     */
    updateView(
      /**
       * Array of DataSetItems added to the parent DataSet
       */
      aDiff: DataSetItem[]
    ): void;
  }

  export interface $DataSetSimpleViewSettings extends $ControlSettings {
    /**
     * When true the DatSet items are floating containers. When set to false The Items are rendered in a 1 column
     * Layout.
     */
    floating?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Name of the View
     */
    name?: string | PropertyBindingInfo;

    /**
     * Icon source for this view
     */
    icon?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * icon: hovered state
     */
    iconHovered?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * icon: selected state
     */
    iconSelected?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.9.2
     *
     * When true and the property floating is true the DatSet items are floating containers filling the whole
     * space of a row.
     */
    responsive?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.9.2
     *
     * When itemMinWidth>0 and the property floating is true the given minimum width in pixels is set to DatSet
     * items. A minimum width must be given when the property responsive is set.
     */
    itemMinWidth?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.13.0
     *
     * If this value is greater zero only this amount of items is loaded in the first place. New items are loaded
     * automatically when the user scrolls down. The number of items which are reloaded can be defined with
     * the property "reloadItemCount"
     */
    initialItemCount?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.13.0
     *
     * This number defines the item count which is reloaded on scroll if initialItemCount is enabled.
     */
    reloadItemCount?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.13.0
     *
     * ID of the DOM Element or jQuery reference to the dom which holds the scrollbar for the dataset
     */
    scrollArea?: any | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.13.0
     *
     * If the pagination feature is used without specifying a scroll area, a height for the dataset must be
     * defined.
     */
    height?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * template
     */
    template?: Control;
  }
}

declare module "sap/ui/ux3/Exact" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ExactAttribute from "sap/ui/ux3/ExactAttribute";

  import Event from "sap/ui/base/Event";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import ExactArea from "sap/ui/ux3/ExactArea";

  import SearchField from "sap/ui/commons/SearchField";

  import Menu from "sap/ui/commons/Menu";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38)
   * @EXPERIMENTAL (since 1.2) - API is not yet finished and might change completely
   *
   * A comprehensive UI design approach with graphical and functional elements for searching data, exploring
   * data, and acting on the data ("Explore and Act (Exact) Pattern").
   */
  export default class Exact extends Control {
    /**
     * Constructor for a new Exact.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $ExactSettings
    );
    /**
     * Constructor for a new Exact.
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
      mSettings?: $ExactSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.Exact with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Exact>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.Exact.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some attribute to the aggregation {@link #getAttributes attributes}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addAttribute(
      /**
       * The attribute to add; if empty, nothing is inserted
       */
      oAttribute: ExactAttribute
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:refineSearch refineSearch} event of this `sap.ui.ux3.Exact`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Exact` itself.
     *
     * Event which is fired when an attribute is selected or unselected.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRefineSearch(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Exact` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:refineSearch refineSearch} event of this `sap.ui.ux3.Exact`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Exact` itself.
     *
     * Event which is fired when an attribute is selected or unselected.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRefineSearch(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Exact` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.Exact`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Exact` itself.
     *
     * Event is fired when the search button is clicked
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Exact` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.Exact`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Exact` itself.
     *
     * Event is fired when the search button is clicked
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSearch(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Exact` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the attributes in the aggregation {@link #getAttributes attributes}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyAttributes(): this;
    /**
     * Destroys the settingsMenu in the aggregation {@link #getSettingsMenu settingsMenu}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySettingsMenu(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:refineSearch refineSearch} event of this `sap.ui.ux3.Exact`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachRefineSearch(
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
     * Detaches event handler `fnFunction` from the {@link #event:search search} event of this `sap.ui.ux3.Exact`.
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
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:refineSearch refineSearch} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireRefineSearch(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The query string which was entered in the search field
         */
        query?: string;
        /**
         * The attribute which was selected or unselected recently
         */
        changedAttribute?: ExactAttribute;
        /**
         * Array of all selected ExcatAttribute.
         */
        allSelectedAttributes?: object;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
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
         * The query string which was entered in the search field.
         */
        query?: string;
      }
    ): this;
    /**
     * Gets content of aggregation {@link #getAttributes attributes}.
     *
     * The attributes which shall be available to refine the search
     */
    getAttributes(): ExactAttribute[];
    /**
     * Returns the ExactArea representing the result section. Arbitrary content can be added here.
     */
    getResultArea(): ExactArea;
    /**
     * Gets current value of property {@link #getResultText resultText}.
     *
     * A title text which is displayed above the result section
     *
     * @returns Value of property `resultText`
     */
    getResultText(): string;
    /**
     * Returns the SearchField control which is used by the Exact control.
     */
    getSearchField(): SearchField;
    /**
     * Gets content of aggregation {@link #getSettingsMenu settingsMenu}.
     *
     * Defines the 'Settings' button in the browse section tool bar
     */
    getSettingsMenu(): Menu;
    /**
     * Checks for the provided `sap.ui.ux3.ExactAttribute` in the aggregation {@link #getAttributes attributes}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfAttribute(
      /**
       * The attribute whose index is looked for
       */
      oAttribute: ExactAttribute
    ): int;
    /**
     * Inserts a attribute into the aggregation {@link #getAttributes attributes}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertAttribute(
      /**
       * The attribute to insert; if empty, nothing is inserted
       */
      oAttribute: ExactAttribute,
      /**
       * The `0`-based index the attribute should be inserted at; for a negative value of `iIndex`, the attribute
       * is inserted at position 0; for a value greater than the current size of the aggregation, the attribute
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getAttributes attributes}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllAttributes(): ExactAttribute[];
    /**
     * Removes a attribute from the aggregation {@link #getAttributes attributes}.
     *
     * @returns The removed attribute or `null`
     */
    removeAttribute(
      /**
       * The attribute to remove or its index or id
       */
      vAttribute: int | string | ExactAttribute
    ): ExactAttribute | null;
    /**
     * Sets a new value for property {@link #getResultText resultText}.
     *
     * A title text which is displayed above the result section
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setResultText(
      /**
       * New value for property `resultText`
       */
      sResultText?: string
    ): this;
    /**
     * Sets the aggregated {@link #getSettingsMenu settingsMenu}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSettingsMenu(
      /**
       * The settingsMenu to set
       */
      oSettingsMenu: Menu
    ): this;
  }

  export interface $ExactSettings extends $ControlSettings {
    /**
     * A title text which is displayed above the result section
     */
    resultText?: string | PropertyBindingInfo;

    /**
     * Defines the 'Settings' button in the browse section tool bar
     */
    settingsMenu?: Menu;

    /**
     * The attributes which shall be available to refine the search
     */
    attributes?:
      | ExactAttribute[]
      | ExactAttribute
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Event is fired when the search button is clicked
     */
    search?: (oEvent: Event) => void;

    /**
     * Event which is fired when an attribute is selected or unselected.
     */
    refineSearch?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/ux3/ExactArea" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ToolbarItem } from "sap/ui/commons/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38)
   * @EXPERIMENTAL (since 1.6) - API is not yet finished and might change completely
   *
   * Consists of two sections: A tool bar and a content area where arbitrary controls can be added. The ExactArea
   * is intended to be used for the Exact design approach but alternatively also in a stand alone version.
   */
  export default class ExactArea extends Control {
    /**
     * Constructor for a new ExactArea.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $ExactAreaSettings
    );
    /**
     * Constructor for a new ExactArea.
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
      mSettings?: $ExactAreaSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.ExactArea with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, ExactArea>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.ExactArea.
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
     * Adds some toolbarItem to the aggregation {@link #getToolbarItems toolbarItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addToolbarItem(
      /**
       * The toolbarItem to add; if empty, nothing is inserted
       */
      oToolbarItem: ToolbarItem
    ): this;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;
    /**
     * Destroys all the toolbarItems in the aggregation {@link #getToolbarItems toolbarItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyToolbarItems(): this;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Arbitrary child controls of the content area
     */
    getContent(): Control[];
    /**
     * Gets content of aggregation {@link #getToolbarItems toolbarItems}.
     *
     * Tool bar items which shall be shown in the tool bar.
     */
    getToolbarItems(): ToolbarItem[];
    /**
     * Gets current value of property {@link #getToolbarVisible toolbarVisible}.
     *
     * Specifies whether the tool bar shall be visible
     *
     * Default value is `true`.
     *
     * @returns Value of property `toolbarVisible`
     */
    getToolbarVisible(): boolean;
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
     * Checks for the provided `sap.ui.commons.ToolbarItem` in the aggregation {@link #getToolbarItems toolbarItems}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfToolbarItem(
      /**
       * The toolbarItem whose index is looked for
       */
      oToolbarItem: ToolbarItem
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
     * Inserts a toolbarItem into the aggregation {@link #getToolbarItems toolbarItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertToolbarItem(
      /**
       * The toolbarItem to insert; if empty, nothing is inserted
       */
      oToolbarItem: ToolbarItem,
      /**
       * The `0`-based index the toolbarItem should be inserted at; for a negative value of `iIndex`, the toolbarItem
       * is inserted at position 0; for a value greater than the current size of the aggregation, the toolbarItem
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
     * Removes all the controls from the aggregation {@link #getToolbarItems toolbarItems}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllToolbarItems(): ToolbarItem[];
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
     * Removes a toolbarItem from the aggregation {@link #getToolbarItems toolbarItems}.
     *
     * @returns The removed toolbarItem or `null`
     */
    removeToolbarItem(
      /**
       * The toolbarItem to remove or its index or id
       */
      vToolbarItem: int | string | ToolbarItem
    ): ToolbarItem | null;
    /**
     * Sets a new value for property {@link #getToolbarVisible toolbarVisible}.
     *
     * Specifies whether the tool bar shall be visible
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setToolbarVisible(
      /**
       * New value for property `toolbarVisible`
       */
      bToolbarVisible?: boolean
    ): this;
  }

  export interface $ExactAreaSettings extends $ControlSettings {
    /**
     * Specifies whether the tool bar shall be visible
     */
    toolbarVisible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Arbitrary child controls of the content area
     */
    content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Tool bar items which shall be shown in the tool bar.
     */
    toolbarItems?:
      | ToolbarItem[]
      | ToolbarItem
      | AggregationBindingInfo
      | `{${string}}`;
  }
}

declare module "sap/ui/ux3/ExactAttribute" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import Event from "sap/ui/base/Event";

  import { ExactOrder } from "sap/ui/ux3/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import TooltipBase from "sap/ui/core/TooltipBase";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38)
   *
   * An element for defining attributes and sub-attributes used within the Exact pattern.
   */
  export default class ExactAttribute extends UI5Element {
    /**
     * Constructor for a new ExactAttribute.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $ExactAttributeSettings
    );
    /**
     * Constructor for a new ExactAttribute.
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
      mSettings?: $ExactAttributeSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.ExactAttribute with name `sClassName` and enriches it with
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
      oClassInfo?: sap.ClassInfo<T, ExactAttribute>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.ExactAttribute.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some attribute to the aggregation {@link #getAttributes attributes}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addAttribute(
      /**
       * The attribute to add; if empty, nothing is inserted
       */
      oAttribute: ExactAttribute
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:supplyAttributes supplyAttributes} event of
     * this `sap.ui.ux3.ExactAttribute`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ExactAttribute` itself.
     *
     * A supply function is a handler which is attached to the supplyAttributes event. The event is fired when
     * the corresponding ExactAttribute is selected, it was already selected when a handler is attached or function
     * getAttributes() is called.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSupplyAttributes(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ExactAttribute` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:supplyAttributes supplyAttributes} event of
     * this `sap.ui.ux3.ExactAttribute`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ExactAttribute` itself.
     *
     * A supply function is a handler which is attached to the supplyAttributes event. The event is fired when
     * the corresponding ExactAttribute is selected, it was already selected when a handler is attached or function
     * getAttributes() is called.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSupplyAttributes(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ExactAttribute` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the attributes in the aggregation {@link #getAttributes attributes}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyAttributes(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:supplyAttributes supplyAttributes} event of
     * this `sap.ui.ux3.ExactAttribute`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSupplyAttributes(
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
     * Fires event {@link #event:supplyAttributes supplyAttributes} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSupplyAttributes(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The ExactAttribute
         */
        attribute?: ExactAttribute;
      }
    ): this;
    /**
     * Gets current value of property {@link #getAdditionalData additionalData}.
     *
     * An example for additional data are database keys
     *
     * @returns Value of property `additionalData`
     */
    getAdditionalData(): object;
    /**
     * Gets content of aggregation {@link #getAttributes attributes}.
     *
     * Values (sub attributes) of this attribute
     */
    getAttributes(): ExactAttribute[];
    /**
     * Gets current value of property {@link #getAutoActivateSupply autoActivateSupply}.
     *
     * If you want the supply function to be called on every select, you can set the autoActivateSupply attribute
     * to true. In this case, supplyActive is automatically set to true on every unselect.
     *
     * Default value is `false`.
     *
     * @returns Value of property `autoActivateSupply`
     */
    getAutoActivateSupply(): boolean;
    /**
     * @SINCE 1.7.1
     *
     * Gets current value of property {@link #getListOrder listOrder}.
     *
     * The order how the sublists of this attribute should be displayed.
     *
     * Default value is `Select`.
     *
     * @returns Value of property `listOrder`
     */
    getListOrder(): ExactOrder | keyof typeof ExactOrder;
    /**
     * Gets current value of property {@link #getSelected selected}.
     *
     * Specifies whether the attribute shall be selected
     *
     * @returns Value of property `selected`
     */
    getSelected(): boolean;
    /**
     * Gets current value of property {@link #getShowSubAttributesIndicator showSubAttributesIndicator}.
     *
     * Specifies whether the attribute shall have sub values for visual purposes. The indicator which is a little
     * arrow beside an attribute in the list is computed automatically (getShowSubAttributesIndicator_Computed()
     * of sap.ui.ux3.ExactAttribute). In the case that a supply function is attached, and the supplyActive attribute
     * has value 'true', then the Exact pattern needs a hint if sub attributes are available. The showSubAttributesIndicator
     * attribute is considered then and has to be maintained. If the back-end does not support count-calls,
     * for example, showSubAttributesIndicator should be set to true.
     *
     * Default value is `true`.
     *
     * @returns Value of property `showSubAttributesIndicator`
     */
    getShowSubAttributesIndicator(): boolean;
    /**
     * See attribute showSubAttributesIndicator
     */
    getShowSubAttributesIndicator_Computed(): void;
    /**
     * Gets current value of property {@link #getSupplyActive supplyActive}.
     *
     * The supplyAttributes event is only fired if supplyActive has value true which is the default. After firing
     * the event, the attribute is automatically set to false. The idea is that a supply function is called
     * only once when the data is requested. To enable the event again it is possible to manually set the attribute
     * back to true.
     *
     * Default value is `true`.
     *
     * @returns Value of property `supplyActive`
     */
    getSupplyActive(): boolean;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * The attribute name
     *
     * @returns Value of property `text`
     */
    getText(): string;
    /**
     * @SINCE 1.7.0
     *
     * Gets current value of property {@link #getWidth width}.
     *
     * Specifies the width of the corresponding list in pixels. The value must be between 70 and 500.
     *
     * Default value is `168`.
     *
     * @returns Value of property `width`
     */
    getWidth(): int;
    /**
     * Checks for the provided `sap.ui.ux3.ExactAttribute` in the aggregation {@link #getAttributes attributes}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfAttribute(
      /**
       * The attribute whose index is looked for
       */
      oAttribute: ExactAttribute
    ): int;
    /**
     * Inserts a attribute into the aggregation {@link #getAttributes attributes}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertAttribute(
      /**
       * The attribute to insert; if empty, nothing is inserted
       */
      oAttribute: ExactAttribute,
      /**
       * The `0`-based index the attribute should be inserted at; for a negative value of `iIndex`, the attribute
       * is inserted at position 0; for a value greater than the current size of the aggregation, the attribute
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getAttributes attributes}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllAttributes(): ExactAttribute[];
    /**
     * Removes a attribute from the aggregation {@link #getAttributes attributes}.
     *
     * @returns The removed attribute or `null`
     */
    removeAttribute(
      /**
       * The attribute to remove or its index or id
       */
      vAttribute: int | string | ExactAttribute
    ): ExactAttribute | null;
    /**
     * Scrolls the corresponding list of this attribute until the given direct child attribute is visible. If
     * the corresponding list is not yet visible the call is buffered until the list is available.
     */
    scrollTo(
      /**
       * The direct child attribute
       */
      oOAttribute: ExactAttribute
    ): void;
    /**
     * Sets a new value for property {@link #getAdditionalData additionalData}.
     *
     * An example for additional data are database keys
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAdditionalData(
      /**
       * New value for property `additionalData`
       */
      oAdditionalData?: object
    ): this;
    /**
     * Sets a new value for property {@link #getAutoActivateSupply autoActivateSupply}.
     *
     * If you want the supply function to be called on every select, you can set the autoActivateSupply attribute
     * to true. In this case, supplyActive is automatically set to true on every unselect.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAutoActivateSupply(
      /**
       * New value for property `autoActivateSupply`
       */
      bAutoActivateSupply?: boolean
    ): this;
    /**
     * @SINCE 1.7.1
     *
     * Sets a new value for property {@link #getListOrder listOrder}.
     *
     * The order how the sublists of this attribute should be displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Select`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setListOrder(
      /**
       * New value for property `listOrder`
       */
      sListOrder?: ExactOrder | keyof typeof ExactOrder
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * See:
     * 	sap.ui.base.ManagedObject.prototype.setProperty
     *
     * @returns Returns `this` to allow method chaining
     */
    setProperty(
      sPropertyName: string,

      oValue: object,

      bSuppressRerendering: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSelected selected}.
     *
     * Specifies whether the attribute shall be selected
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelected(
      /**
       * New value for property `selected`
       */
      bSelected?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowSubAttributesIndicator showSubAttributesIndicator}.
     *
     * Specifies whether the attribute shall have sub values for visual purposes. The indicator which is a little
     * arrow beside an attribute in the list is computed automatically (getShowSubAttributesIndicator_Computed()
     * of sap.ui.ux3.ExactAttribute). In the case that a supply function is attached, and the supplyActive attribute
     * has value 'true', then the Exact pattern needs a hint if sub attributes are available. The showSubAttributesIndicator
     * attribute is considered then and has to be maintained. If the back-end does not support count-calls,
     * for example, showSubAttributesIndicator should be set to true.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowSubAttributesIndicator(
      /**
       * New value for property `showSubAttributesIndicator`
       */
      bShowSubAttributesIndicator?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSupplyActive supplyActive}.
     *
     * The supplyAttributes event is only fired if supplyActive has value true which is the default. After firing
     * the event, the attribute is automatically set to false. The idea is that a supply function is called
     * only once when the data is requested. To enable the event again it is possible to manually set the attribute
     * back to true.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSupplyActive(
      /**
       * New value for property `supplyActive`
       */
      bSupplyActive?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getText text}.
     *
     * The attribute name
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
    /**
     * See:
     * 	sap.ui.core.Element.prototype.setTooltip
     *
     * @returns Returns `this` to allow method chaining
     */
    setTooltip(oTooltip: string | TooltipBase): this;
    /**
     * @SINCE 1.7.0
     *
     * Sets a new value for property {@link #getWidth width}.
     *
     * Specifies the width of the corresponding list in pixels. The value must be between 70 and 500.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `168`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setWidth(
      /**
       * New value for property `width`
       */
      iWidth?: int
    ): this;
  }

  export interface $ExactAttributeSettings extends $ElementSettings {
    /**
     * The attribute name
     */
    text?: string | PropertyBindingInfo;

    /**
     * Specifies whether the attribute shall be selected
     */
    selected?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.7.0
     *
     * Specifies the width of the corresponding list in pixels. The value must be between 70 and 500.
     */
    width?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.7.1
     *
     * The order how the sublists of this attribute should be displayed.
     */
    listOrder?:
      | (ExactOrder | keyof typeof ExactOrder)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Specifies whether the attribute shall have sub values for visual purposes. The indicator which is a little
     * arrow beside an attribute in the list is computed automatically (getShowSubAttributesIndicator_Computed()
     * of sap.ui.ux3.ExactAttribute). In the case that a supply function is attached, and the supplyActive attribute
     * has value 'true', then the Exact pattern needs a hint if sub attributes are available. The showSubAttributesIndicator
     * attribute is considered then and has to be maintained. If the back-end does not support count-calls,
     * for example, showSubAttributesIndicator should be set to true.
     */
    showSubAttributesIndicator?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * An example for additional data are database keys
     */
    additionalData?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * The supplyAttributes event is only fired if supplyActive has value true which is the default. After firing
     * the event, the attribute is automatically set to false. The idea is that a supply function is called
     * only once when the data is requested. To enable the event again it is possible to manually set the attribute
     * back to true.
     */
    supplyActive?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If you want the supply function to be called on every select, you can set the autoActivateSupply attribute
     * to true. In this case, supplyActive is automatically set to true on every unselect.
     */
    autoActivateSupply?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Values (sub attributes) of this attribute
     */
    attributes?:
      | ExactAttribute[]
      | ExactAttribute
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * A supply function is a handler which is attached to the supplyAttributes event. The event is fired when
     * the corresponding ExactAttribute is selected, it was already selected when a handler is attached or function
     * getAttributes() is called.
     */
    supplyAttributes?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/ux3/ExactBrowser" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ExactAttribute from "sap/ui/ux3/ExactAttribute";

  import Event from "sap/ui/base/Event";

  import { ID } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Menu from "sap/ui/commons/Menu";

  import { ExactOrder } from "sap/ui/ux3/library";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38)
   *
   * Attribute browse area used within the Exact pattern. The main benefit of this control is the high flexibility
   * when large data amounts shall be displayed in the form of structured data sets with a high or low interdependency
   * level. From lists - which can be nested according to the defined attributes - the user can choose entries
   * and thereby trigger the display of further information, depending on the chosen entry/entries (multiple
   * selection supported).
   */
  export default class ExactBrowser extends Control {
    /**
     * Constructor for a new ExactBrowser.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $ExactBrowserSettings
    );
    /**
     * Constructor for a new ExactBrowser.
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
      mSettings?: $ExactBrowserSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.ExactBrowser with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, ExactBrowser>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.ExactBrowser.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some attribute to the aggregation {@link #getAttributes attributes}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addAttribute(
      /**
       * The attribute to add; if empty, nothing is inserted
       */
      oAttribute: ExactAttribute
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:attributeSelected attributeSelected} event of
     * this `sap.ui.ux3.ExactBrowser`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ExactBrowser` itself.
     *
     * Event is fired when an attribute is selected or unselected.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachAttributeSelected(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ExactBrowser` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:attributeSelected attributeSelected} event of
     * this `sap.ui.ux3.ExactBrowser`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ExactBrowser` itself.
     *
     * Event is fired when an attribute is selected or unselected.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachAttributeSelected(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ExactBrowser` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:save save} event of this `sap.ui.ux3.ExactBrowser`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ExactBrowser` itself.
     *
     * Event is fired when an attribute is selected or unselected.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSave(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ExactBrowser` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:save save} event of this `sap.ui.ux3.ExactBrowser`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ExactBrowser` itself.
     *
     * Event is fired when an attribute is selected or unselected.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSave(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ExactBrowser` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the attributes in the aggregation {@link #getAttributes attributes}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyAttributes(): this;
    /**
     * Destroys the optionsMenu in the aggregation {@link #getOptionsMenu optionsMenu}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyOptionsMenu(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:attributeSelected attributeSelected} event
     * of this `sap.ui.ux3.ExactBrowser`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachAttributeSelected(
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
     * Detaches event handler `fnFunction` from the {@link #event:save save} event of this `sap.ui.ux3.ExactBrowser`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSave(
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
     * Fires event {@link #event:attributeSelected attributeSelected} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireAttributeSelected(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The attribute which was selected or unselected recently
         */
        attribute?: ExactAttribute;
        /**
         * Array of all selected ExactAttributes
         */
        allAttributes?: object;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:save save} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSave(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Gets content of aggregation {@link #getAttributes attributes}.
     *
     * The attributes which shall be available.
     */
    getAttributes(): ExactAttribute[];
    /**
     * Gets current value of property {@link #getEnableListClose enableListClose}.
     *
     * Enables the close icons of the displayed lists.
     *
     * Default value is `false`.
     *
     * @returns Value of property `enableListClose`
     */
    getEnableListClose(): boolean;
    /**
     * Gets current value of property {@link #getEnableReset enableReset}.
     *
     * Whether the reset functionality should be available in the header area.
     *
     * Default value is `true`.
     *
     * @returns Value of property `enableReset`
     */
    getEnableReset(): boolean;
    /**
     * @SINCE 1.9.2
     *
     * Gets current value of property {@link #getEnableSave enableSave}.
     *
     * Whether the save button should be available in the header area.
     *
     * Default value is `false`.
     *
     * @returns Value of property `enableSave`
     */
    getEnableSave(): boolean;
    /**
     * ID of the element which is the current target of the association {@link #getFollowUpControl followUpControl},
     * or `null`.
     */
    getFollowUpControl(): ID;
    /**
     * Gets current value of property {@link #getHeaderTitle headerTitle}.
     *
     * Title text in the header of the Exact Browser.
     *
     * @returns Value of property `headerTitle`
     */
    getHeaderTitle(): string;
    /**
     * Gets current value of property {@link #getListHeight listHeight}.
     *
     * The height of the list area in px.
     *
     * Default value is `290`.
     *
     * @returns Value of property `listHeight`
     */
    getListHeight(): int;
    /**
     * Gets content of aggregation {@link #getOptionsMenu optionsMenu}.
     *
     * Menu with options. The menu can not used when the property showTopList is set to false.
     */
    getOptionsMenu(): Menu;
    /**
     * Gets current value of property {@link #getShowHeader showHeader}.
     *
     * Whether the header area of the ExactBrowser should be shown.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showHeader`
     */
    getShowHeader(): boolean;
    /**
     * @SINCE 1.7.0
     *
     * Gets current value of property {@link #getShowTopList showTopList}.
     *
     * Whether the top list of the ExactBrowser should be shown. When the property is set to false the application
     * must ensure to select top level attributes appropriately.
     *
     * Default value is `true`.
     *
     * @returns Value of property `showTopList`
     */
    getShowTopList(): boolean;
    /**
     * Gets current value of property {@link #getTitle title}.
     *
     * Title text in the list area of the Exact Browser. The title is not shown when the property showTopList
     * is set to false.
     *
     * @returns Value of property `title`
     */
    getTitle(): string;
    /**
     * @SINCE 1.7.1
     *
     * Gets current value of property {@link #getTopListOrder topListOrder}.
     *
     * The order how the sublists of the top level list should be displayed.
     *
     * Default value is `Select`.
     *
     * @returns Value of property `topListOrder`
     */
    getTopListOrder(): ExactOrder | keyof typeof ExactOrder;
    /**
     * @SINCE 1.7.0
     *
     * Gets current value of property {@link #getTopListWidth topListWidth}.
     *
     * Specifies the width of the top list in pixels. The value must be between 70 and 500.
     *
     * Default value is `168`.
     *
     * @returns Value of property `topListWidth`
     */
    getTopListWidth(): int;
    /**
     * Checks for the provided `sap.ui.ux3.ExactAttribute` in the aggregation {@link #getAttributes attributes}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfAttribute(
      /**
       * The attribute whose index is looked for
       */
      oAttribute: ExactAttribute
    ): int;
    /**
     * Inserts a attribute into the aggregation {@link #getAttributes attributes}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertAttribute(
      /**
       * The attribute to insert; if empty, nothing is inserted
       */
      oAttribute: ExactAttribute,
      /**
       * The `0`-based index the attribute should be inserted at; for a negative value of `iIndex`, the attribute
       * is inserted at position 0; for a value greater than the current size of the aggregation, the attribute
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getAttributes attributes}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllAttributes(): ExactAttribute[];
    /**
     * Removes a attribute from the aggregation {@link #getAttributes attributes}.
     *
     * @returns The removed attribute or `null`
     */
    removeAttribute(
      /**
       * The attribute to remove or its index or id
       */
      vAttribute: int | string | ExactAttribute
    ): ExactAttribute | null;
    /**
     * Deselects all currently selected attributes and closes all attribute lists.
     */
    reset(): void;
    /**
     * Sets a new value for property {@link #getEnableListClose enableListClose}.
     *
     * Enables the close icons of the displayed lists.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableListClose(
      /**
       * New value for property `enableListClose`
       */
      bEnableListClose?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getEnableReset enableReset}.
     *
     * Whether the reset functionality should be available in the header area.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableReset(
      /**
       * New value for property `enableReset`
       */
      bEnableReset?: boolean
    ): this;
    /**
     * @SINCE 1.9.2
     *
     * Sets a new value for property {@link #getEnableSave enableSave}.
     *
     * Whether the save button should be available in the header area.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableSave(
      /**
       * New value for property `enableSave`
       */
      bEnableSave?: boolean
    ): this;
    /**
     * Sets the associated {@link #getFollowUpControl followUpControl}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFollowUpControl(
      /**
       * ID of an element which becomes the new target of this followUpControl association; alternatively, an
       * element instance may be given
       */
      oFollowUpControl: ID | Control
    ): this;
    /**
     * Sets a new value for property {@link #getHeaderTitle headerTitle}.
     *
     * Title text in the header of the Exact Browser.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderTitle(
      /**
       * New value for property `headerTitle`
       */
      sHeaderTitle?: string
    ): this;
    /**
     * Sets a new value for property {@link #getListHeight listHeight}.
     *
     * The height of the list area in px.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `290`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setListHeight(
      /**
       * New value for property `listHeight`
       */
      iListHeight?: int
    ): this;
    /**
     * Sets the aggregated {@link #getOptionsMenu optionsMenu}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setOptionsMenu(
      /**
       * The optionsMenu to set
       */
      oOptionsMenu: Menu
    ): this;
    /**
     * Sets a new value for property {@link #getShowHeader showHeader}.
     *
     * Whether the header area of the ExactBrowser should be shown.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowHeader(
      /**
       * New value for property `showHeader`
       */
      bShowHeader?: boolean
    ): this;
    /**
     * @SINCE 1.7.0
     *
     * Sets a new value for property {@link #getShowTopList showTopList}.
     *
     * Whether the top list of the ExactBrowser should be shown. When the property is set to false the application
     * must ensure to select top level attributes appropriately.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowTopList(
      /**
       * New value for property `showTopList`
       */
      bShowTopList?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getTitle title}.
     *
     * Title text in the list area of the Exact Browser. The title is not shown when the property showTopList
     * is set to false.
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
     * @SINCE 1.7.1
     *
     * Sets a new value for property {@link #getTopListOrder topListOrder}.
     *
     * The order how the sublists of the top level list should be displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Select`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTopListOrder(
      /**
       * New value for property `topListOrder`
       */
      sTopListOrder?: ExactOrder | keyof typeof ExactOrder
    ): this;
    /**
     * @SINCE 1.7.0
     *
     * Sets a new value for property {@link #getTopListWidth topListWidth}.
     *
     * Specifies the width of the top list in pixels. The value must be between 70 and 500.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `168`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTopListWidth(
      /**
       * New value for property `topListWidth`
       */
      iTopListWidth?: int
    ): this;
  }

  export interface $ExactBrowserSettings extends $ControlSettings {
    /**
     * Title text in the list area of the Exact Browser. The title is not shown when the property showTopList
     * is set to false.
     */
    title?: string | PropertyBindingInfo;

    /**
     * Title text in the header of the Exact Browser.
     */
    headerTitle?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.7.1
     *
     * The order how the sublists of the top level list should be displayed.
     */
    topListOrder?:
      | (ExactOrder | keyof typeof ExactOrder)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Enables the close icons of the displayed lists.
     */
    enableListClose?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The height of the list area in px.
     */
    listHeight?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Whether the header area of the ExactBrowser should be shown.
     */
    showHeader?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.7.0
     *
     * Whether the top list of the ExactBrowser should be shown. When the property is set to false the application
     * must ensure to select top level attributes appropriately.
     */
    showTopList?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Whether the reset functionality should be available in the header area.
     */
    enableReset?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.9.2
     *
     * Whether the save button should be available in the header area.
     */
    enableSave?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.7.0
     *
     * Specifies the width of the top list in pixels. The value must be between 70 and 500.
     */
    topListWidth?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * The attributes which shall be available.
     */
    attributes?:
      | ExactAttribute[]
      | ExactAttribute
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Menu with options. The menu can not used when the property showTopList is set to false.
     */
    optionsMenu?: Menu;

    /**
     * The successor control of the Exact Browser. The id of this control is used in the ARIA description of
     * the control.
     */
    followUpControl?: Control | string;

    /**
     * Event is fired when an attribute is selected or unselected.
     */
    attributeSelected?: (oEvent: Event) => void;

    /**
     * Event is fired when an attribute is selected or unselected.
     */
    save?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/ux3/ExactList" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import Event from "sap/ui/base/Event";

  import ExactAttribute from "sap/ui/ux3/ExactAttribute";

  import { ID } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38)
   *
   * Internal sub-control of the ExactBrowser. The control is not intended to be used stand alone. For this
   * purpose, the ExactBrowser control can be used.
   */
  export default class ExactList extends Control {
    /**
     * Constructor for a new ExactList.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $ExactListSettings
    );
    /**
     * Constructor for a new ExactList.
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
      mSettings?: $ExactListSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.ExactList with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, ExactList>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.ExactList.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some subList to the aggregation {@link #getSubLists subLists}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addSubList(
      /**
       * The subList to add; if empty, nothing is inserted
       */
      oSubList: ExactList
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:attributeSelected attributeSelected} event of
     * this `sap.ui.ux3.ExactList`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ExactList` itself.
     *
     * Event which is fired when an attribute is selected/unselected
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachAttributeSelected(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ExactList` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:attributeSelected attributeSelected} event of
     * this `sap.ui.ux3.ExactList`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ExactList` itself.
     *
     * Event which is fired when an attribute is selected/unselected
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachAttributeSelected(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ExactList` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the subLists in the aggregation {@link #getSubLists subLists}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySubLists(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:attributeSelected attributeSelected} event
     * of this `sap.ui.ux3.ExactList`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachAttributeSelected(
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
     * Fires event {@link #event:attributeSelected attributeSelected} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireAttributeSelected(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The attribute which was selected/unselected recently
         */
        attribute?: ExactAttribute;
        /**
         * Array of all ExactAttributes
         */
        allAttributes?: object;
      }
    ): this;
    /**
     * ID of the element which is the current target of the association {@link #getData data}, or `null`.
     */
    getData(): ID;
    /**
     * Gets current value of property {@link #getShowClose showClose}.
     *
     * Defines whether the close icon shall be displayed in the header.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showClose`
     */
    getShowClose(): boolean;
    /**
     * Gets content of aggregation {@link #getSubLists subLists}.
     *
     * The sub-ExactLists of this list. This aggregation must not be maintained from outside. The control automatically
     * takes care to fill this aggregation according to the given ExactAttribute.
     */
    getSubLists(): ExactList[];
    /**
     * Gets current value of property {@link #getTopHeight topHeight}.
     *
     * The height in px if this list is the top of the list hierarchy.
     *
     * Default value is `290`.
     *
     * @returns Value of property `topHeight`
     */
    getTopHeight(): int;
    /**
     * Gets current value of property {@link #getTopTitle topTitle}.
     *
     * The title of this list is the top of the list hierarchy.
     *
     * @returns Value of property `topTitle`
     */
    getTopTitle(): string;
    /**
     * Checks for the provided `sap.ui.ux3.ExactList` in the aggregation {@link #getSubLists subLists}. and
     * returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfSubList(
      /**
       * The subList whose index is looked for
       */
      oSubList: ExactList
    ): int;
    /**
     * Inserts a subList into the aggregation {@link #getSubLists subLists}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertSubList(
      /**
       * The subList to insert; if empty, nothing is inserted
       */
      oSubList: ExactList,
      /**
       * The `0`-based index the subList should be inserted at; for a negative value of `iIndex`, the subList
       * is inserted at position 0; for a value greater than the current size of the aggregation, the subList
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getSubLists subLists}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllSubLists(): ExactList[];
    /**
     * Removes a subList from the aggregation {@link #getSubLists subLists}.
     *
     * @returns The removed subList or `null`
     */
    removeSubList(
      /**
       * The subList to remove or its index or id
       */
      vSubList: int | string | ExactList
    ): ExactList | null;
    /**
     * Sets the associated {@link #getData data}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setData(
      /**
       * ID of an element which becomes the new target of this data association; alternatively, an element instance
       * may be given
       */
      oData: ID | ExactAttribute
    ): this;
    /**
     * Sets a new value for property {@link #getShowClose showClose}.
     *
     * Defines whether the close icon shall be displayed in the header.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowClose(
      /**
       * New value for property `showClose`
       */
      bShowClose?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getTopHeight topHeight}.
     *
     * The height in px if this list is the top of the list hierarchy.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `290`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTopHeight(
      /**
       * New value for property `topHeight`
       */
      iTopHeight?: int
    ): this;
    /**
     * Sets a new value for property {@link #getTopTitle topTitle}.
     *
     * The title of this list is the top of the list hierarchy.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTopTitle(
      /**
       * New value for property `topTitle`
       */
      sTopTitle?: string
    ): this;
  }

  export interface $ExactListSettings extends $ControlSettings {
    /**
     * Defines whether the close icon shall be displayed in the header.
     */
    showClose?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The title of this list is the top of the list hierarchy.
     */
    topTitle?: string | PropertyBindingInfo;

    /**
     * The height in px if this list is the top of the list hierarchy.
     */
    topHeight?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * The sub-ExactLists of this list. This aggregation must not be maintained from outside. The control automatically
     * takes care to fill this aggregation according to the given ExactAttribute.
     */
    subLists?: ExactList[] | ExactList | AggregationBindingInfo | `{${string}}`;

    /**
     * The associated ExactAttribute
     */
    data?: ExactAttribute | string;

    /**
     * Event which is fired when an attribute is selected/unselected
     */
    attributeSelected?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/ux3/FacetFilter" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import FacetFilterList from "sap/ui/ux3/FacetFilterList";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { VisibleItemCountMode } from "sap/ui/ux3/library";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38) - replaced by {@link sap.m.FacetFilter}
   *
   * FacetFilter Control.
   */
  export default class FacetFilter extends Control {
    /**
     * Constructor for a new FacetFilter.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $FacetFilterSettings
    );
    /**
     * Constructor for a new FacetFilter.
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
      mSettings?: $FacetFilterSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.FacetFilter with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, FacetFilter>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.FacetFilter.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some list to the aggregation {@link #getLists lists}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addList(
      /**
       * The list to add; if empty, nothing is inserted
       */
      oList: FacetFilterList
    ): this;
    /**
     * Destroys all the lists in the aggregation {@link #getLists lists}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyLists(): this;
    /**
     * Gets content of aggregation {@link #getLists lists}.
     *
     * Facet Filter list represents the list of the filter values and the title of this list.
     */
    getLists(): FacetFilterList[];
    /**
     * Gets current value of property {@link #getVisibleItemCountMode visibleItemCountMode}.
     *
     * If the value is "Auto" - the Facet Filter takes the whole available height. If "Fixed" , then the default
     * number of Facet Filter Items (5) is visible.
     *
     * Default value is `Fixed`.
     *
     * @returns Value of property `visibleItemCountMode`
     */
    getVisibleItemCountMode():
      | VisibleItemCountMode
      | keyof typeof VisibleItemCountMode;
    /**
     * Checks for the provided `sap.ui.ux3.FacetFilterList` in the aggregation {@link #getLists lists}. and
     * returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfList(
      /**
       * The list whose index is looked for
       */
      oList: FacetFilterList
    ): int;
    /**
     * Inserts a list into the aggregation {@link #getLists lists}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertList(
      /**
       * The list to insert; if empty, nothing is inserted
       */
      oList: FacetFilterList,
      /**
       * The `0`-based index the list should be inserted at; for a negative value of `iIndex`, the list is inserted
       * at position 0; for a value greater than the current size of the aggregation, the list is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getLists lists}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllLists(): FacetFilterList[];
    /**
     * Removes a list from the aggregation {@link #getLists lists}.
     *
     * @returns The removed list or `null`
     */
    removeList(
      /**
       * The list to remove or its index or id
       */
      vList: int | string | FacetFilterList
    ): FacetFilterList | null;
    /**
     * Sets a new value for property {@link #getVisibleItemCountMode visibleItemCountMode}.
     *
     * If the value is "Auto" - the Facet Filter takes the whole available height. If "Fixed" , then the default
     * number of Facet Filter Items (5) is visible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Fixed`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setVisibleItemCountMode(
      /**
       * New value for property `visibleItemCountMode`
       */
      sVisibleItemCountMode?:
        | VisibleItemCountMode
        | keyof typeof VisibleItemCountMode
    ): this;
  }

  export interface $FacetFilterSettings extends $ControlSettings {
    /**
     * If the value is "Auto" - the Facet Filter takes the whole available height. If "Fixed" , then the default
     * number of Facet Filter Items (5) is visible.
     */
    visibleItemCountMode?:
      | (VisibleItemCountMode | keyof typeof VisibleItemCountMode)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Facet Filter list represents the list of the filter values and the title of this list.
     */
    lists?:
      | FacetFilterList[]
      | FacetFilterList
      | AggregationBindingInfo
      | `{${string}}`;
  }
}

declare module "sap/ui/ux3/FacetFilterList" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ListItem from "sap/ui/core/ListItem";

  import Event from "sap/ui/base/Event";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38) - replaced by {@link sap.m.FacetFilter}
   *
   * List to be used with the FacetFilter control. The control is not intended to be used stand alone.
   */
  export default class FacetFilterList extends Control {
    /**
     * Constructor for a new FacetFilterList.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $FacetFilterListSettings
    );
    /**
     * Constructor for a new FacetFilterList.
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
      mSettings?: $FacetFilterListSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.FacetFilterList with name `sClassName` and enriches it with
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
      oClassInfo?: sap.ClassInfo<T, FacetFilterList>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.FacetFilterList.
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
      oItem: ListItem
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.ux3.FacetFilterList`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.FacetFilterList` itself.
     *
     * On Select event.
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
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FacetFilterList` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.ux3.FacetFilterList`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.FacetFilterList` itself.
     *
     * On Select event.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FacetFilterList` itself
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
     * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.ux3.FacetFilterList`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSelect(
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
     * Fires event {@link #event:select select} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Id of the FacetFilterList taht fires the event.
         */
        id?: string;
        /**
         * Array of selected Indices.
         */
        selectedIndices?: int[];
        /**
         * Array of selected Items.
         */
        selectedItems?: ListItem[];
        /**
         * If it is true, then Item All is selected. That means all items in the list are selected - no filter is
         * set.
         */
        all?: boolean;
      }
    ): this;
    /**
     * @SINCE 1.9.0
     *
     * Gets current value of property {@link #getDisplaySecondaryValues displaySecondaryValues}.
     *
     * Specifies whether the text values from the additionalText property (see sap.ui.core.ListItems) shall
     * be displayed.
     *
     * Default value is `false`.
     *
     * @returns Value of property `displaySecondaryValues`
     */
    getDisplaySecondaryValues(): boolean;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * The filter values that are presented as a list.
     */
    getItems(): ListItem[];
    /**
     * Gets current value of property {@link #getMultiSelect multiSelect}.
     *
     * Specifies whether multiple or single selection is used.
     *
     * Default value is `true`.
     *
     * @returns Value of property `multiSelect`
     */
    getMultiSelect(): boolean;
    /**
     * Gets current value of property {@link #getSelectedKeys selectedKeys}.
     *
     * Array of type string containing the selected keys.
     *
     * @returns Value of property `selectedKeys`
     */
    getSelectedKeys(): string[];
    /**
     * Gets current value of property {@link #getShowCounter showCounter}.
     *
     * Specifies whether the counter for all entries is shown.
     *
     * Default value is `true`.
     *
     * @returns Value of property `showCounter`
     */
    getShowCounter(): boolean;
    /**
     * Gets current value of property {@link #getTitle title}.
     *
     * The title of this list.
     *
     * @returns Value of property `title`
     */
    getTitle(): string;
    /**
     * Checks for the provided `sap.ui.core.ListItem` in the aggregation {@link #getItems items}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: ListItem
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
      oItem: ListItem,
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
    removeAllItems(): ListItem[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     *
     * @returns The removed item or `null`
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | ListItem
    ): ListItem | null;
    /**
     * @SINCE 1.9.0
     *
     * Sets a new value for property {@link #getDisplaySecondaryValues displaySecondaryValues}.
     *
     * Specifies whether the text values from the additionalText property (see sap.ui.core.ListItems) shall
     * be displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDisplaySecondaryValues(
      /**
       * New value for property `displaySecondaryValues`
       */
      bDisplaySecondaryValues?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getMultiSelect multiSelect}.
     *
     * Specifies whether multiple or single selection is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMultiSelect(
      /**
       * New value for property `multiSelect`
       */
      bMultiSelect?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSelectedKeys selectedKeys}.
     *
     * Array of type string containing the selected keys.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelectedKeys(
      /**
       * New value for property `selectedKeys`
       */
      sSelectedKeys?: string[]
    ): this;
    /**
     * Sets a new value for property {@link #getShowCounter showCounter}.
     *
     * Specifies whether the counter for all entries is shown.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowCounter(
      /**
       * New value for property `showCounter`
       */
      bShowCounter?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getTitle title}.
     *
     * The title of this list.
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

  export interface $FacetFilterListSettings extends $ControlSettings {
    /**
     * The title of this list.
     */
    title?: string | PropertyBindingInfo;

    /**
     * Specifies whether multiple or single selection is used.
     */
    multiSelect?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.9.0
     *
     * Specifies whether the text values from the additionalText property (see sap.ui.core.ListItems) shall
     * be displayed.
     */
    displaySecondaryValues?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Array of type string containing the selected keys.
     */
    selectedKeys?: string[] | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies whether the counter for all entries is shown.
     */
    showCounter?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The filter values that are presented as a list.
     */
    items?: ListItem[] | ListItem | AggregationBindingInfo | `{${string}}`;

    /**
     * On Select event.
     */
    select?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/ux3/Feed" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import FeedChunk from "sap/ui/ux3/FeedChunk";

  import ListItem from "sap/ui/core/ListItem";

  import MenuItem from "sap/ui/commons/MenuItem";

  import Event from "sap/ui/base/Event";

  import {
    AggregationBindingInfo,
    PropertyBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import MenuItemBase from "sap/ui/unified/MenuItemBase";

  import { URI } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @deprecated (since 1.38) - Instead, use **any** `sap.ui.layout` container control.
   * @EXPERIMENTAL (since 1.2) - The whole Feed/Feeder API is still under discussion, significant changes
   * are likely. Especially text presentation (e.g. @-references and formatted text) is not final. Also the
   * Feed model topic is still open.
   *
   * A container control representing a full feed page, including feeder and updates.
   */
  export default class Feed extends Control {
    /**
     * Constructor for a new Feed.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $FeedSettings
    );
    /**
     * Constructor for a new Feed.
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
      mSettings?: $FeedSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.Feed with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Feed>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.Feed.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some chunk to the aggregation {@link #getChunks chunks}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addChunk(
      /**
       * The chunk to add; if empty, nothing is inserted
       */
      oChunk: FeedChunk
    ): this;
    /**
     * Adds some filterItem to the aggregation {@link #getFilterItems filterItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addFilterItem(
      /**
       * The filterItem to add; if empty, nothing is inserted
       */
      oFilterItem: ListItem
    ): this;
    /**
     * Adds some toolsMenuItem to the aggregation {@link #getToolsMenuItems toolsMenuItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addToolsMenuItem(
      /**
       * The toolsMenuItem to add; if empty, nothing is inserted
       */
      oToolsMenuItem: MenuItem
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:chunkAdded chunkAdded} event of this `sap.ui.ux3.Feed`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
     *
     * Event is fired when a new chunk is added
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChunkAdded(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feed` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:chunkAdded chunkAdded} event of this `sap.ui.ux3.Feed`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
     *
     * Event is fired when a new chunk is added
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChunkAdded(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feed` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:filterChange filterChange} event of this `sap.ui.ux3.Feed`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
     *
     * Event is fired when the filter is changed
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFilterChange(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feed` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:filterChange filterChange} event of this `sap.ui.ux3.Feed`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
     *
     * Event is fired when the filter is changed
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFilterChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feed` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.Feed`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
     *
     * Event is fired when the search function on SearchField is triggered
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feed` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.Feed`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
     *
     * Event is fired when the search function on SearchField is triggered
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSearch(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feed` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:toggleLive toggleLive} event of this `sap.ui.ux3.Feed`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
     *
     * Event is fired when the live mode has changed
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachToggleLive(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feed` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:toggleLive toggleLive} event of this `sap.ui.ux3.Feed`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
     *
     * Event is fired when the live mode has changed
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachToggleLive(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feed` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:toolsItemSelected toolsItemSelected} event of
     * this `sap.ui.ux3.Feed`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
     *
     * Event is fired when an item from the tools MenuButton was selected
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachToolsItemSelected(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feed` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:toolsItemSelected toolsItemSelected} event of
     * this `sap.ui.ux3.Feed`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
     *
     * Event is fired when an item from the tools MenuButton was selected
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachToolsItemSelected(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feed` itself
       */
      oListener?: object
    ): this;
    /**
     * Binds aggregation {@link #getChunks chunks} to model data.
     *
     * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
     * of the possible properties of `oBindingInfo`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    bindChunks(
      /**
       * The binding information
       */
      oBindingInfo: AggregationBindingInfo
    ): this;
    /**
     * Binds aggregation {@link #getFilterItems filterItems} to model data.
     *
     * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
     * of the possible properties of `oBindingInfo`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    bindFilterItems(
      /**
       * The binding information
       */
      oBindingInfo: AggregationBindingInfo
    ): this;
    /**
     * Binds aggregation {@link #getToolsMenuItems toolsMenuItems} to model data.
     *
     * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
     * of the possible properties of `oBindingInfo`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    bindToolsMenuItems(
      /**
       * The binding information
       */
      oBindingInfo: AggregationBindingInfo
    ): this;
    /**
     * Destroys all the chunks in the aggregation {@link #getChunks chunks}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyChunks(): this;
    /**
     * Destroys all the filterItems in the aggregation {@link #getFilterItems filterItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFilterItems(): this;
    /**
     * Destroys all the toolsMenuItems in the aggregation {@link #getToolsMenuItems toolsMenuItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyToolsMenuItems(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:chunkAdded chunkAdded} event of this `sap.ui.ux3.Feed`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachChunkAdded(
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
     * Detaches event handler `fnFunction` from the {@link #event:filterChange filterChange} event of this `sap.ui.ux3.Feed`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachFilterChange(
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
     * Detaches event handler `fnFunction` from the {@link #event:search search} event of this `sap.ui.ux3.Feed`.
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
     * Detaches event handler `fnFunction` from the {@link #event:toggleLive toggleLive} event of this `sap.ui.ux3.Feed`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachToggleLive(
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
     * Detaches event handler `fnFunction` from the {@link #event:toolsItemSelected toolsItemSelected} event
     * of this `sap.ui.ux3.Feed`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachToolsItemSelected(
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
     * Fires event {@link #event:chunkAdded chunkAdded} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireChunkAdded(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * New chunk
         */
        chunk?: FeedChunk;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:filterChange filterChange} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireFilterChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The new/changed value of the filter
         */
        newValue?: string;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
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
         * The search query
         */
        query?: string;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:toggleLive toggleLive} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireToggleLive(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Current live indicator
         */
        live?: boolean;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:toolsItemSelected toolsItemSelected} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireToolsItemSelected(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The Id of the selected item
         */
        itemId?: string;
        /**
         * The selected item
         */
        item?: MenuItemBase;
      }
    ): this;
    /**
     * Gets content of aggregation {@link #getChunks chunks}.
     *
     * The chunks
     */
    getChunks(): FeedChunk[];
    /**
     * Gets current value of property {@link #getFeederSender feederSender}.
     *
     * The sender of the feeder
     *
     * @returns Value of property `feederSender`
     */
    getFeederSender(): string;
    /**
     * Gets current value of property {@link #getFeederThumbnailSrc feederThumbnailSrc}.
     *
     * The path to the thumbnail image used for the feeder
     *
     * @returns Value of property `feederThumbnailSrc`
     */
    getFeederThumbnailSrc(): URI;
    /**
     * Gets content of aggregation {@link #getFilterItems filterItems}.
     *
     * Items of the filter
     */
    getFilterItems(): ListItem[];
    /**
     * Gets current value of property {@link #getLive live}.
     *
     * Specifies whether the feed shall be in live mode
     *
     * Default value is `true`.
     *
     * @returns Value of property `live`
     */
    getLive(): boolean;
    /**
     * Gets current value of property {@link #getTitle title}.
     *
     * Title text of the Feed. If no text is entered "FEED" is displayed.
     *
     * @returns Value of property `title`
     */
    getTitle(): string;
    /**
     * Gets content of aggregation {@link #getToolsMenuItems toolsMenuItems}.
     *
     * MenuItems to open when the tool button is clicked by the user
     */
    getToolsMenuItems(): MenuItem[];
    /**
     * Checks for the provided `sap.ui.ux3.FeedChunk` in the aggregation {@link #getChunks chunks}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfChunk(
      /**
       * The chunk whose index is looked for
       */
      oChunk: FeedChunk
    ): int;
    /**
     * Checks for the provided `sap.ui.core.ListItem` in the aggregation {@link #getFilterItems filterItems}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfFilterItem(
      /**
       * The filterItem whose index is looked for
       */
      oFilterItem: ListItem
    ): int;
    /**
     * Checks for the provided `sap.ui.commons.MenuItem` in the aggregation {@link #getToolsMenuItems toolsMenuItems}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfToolsMenuItem(
      /**
       * The toolsMenuItem whose index is looked for
       */
      oToolsMenuItem: MenuItem
    ): int;
    /**
     * Inserts a chunk into the aggregation {@link #getChunks chunks}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertChunk(
      /**
       * The chunk to insert; if empty, nothing is inserted
       */
      oChunk: FeedChunk,
      /**
       * The `0`-based index the chunk should be inserted at; for a negative value of `iIndex`, the chunk is inserted
       * at position 0; for a value greater than the current size of the aggregation, the chunk is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a filterItem into the aggregation {@link #getFilterItems filterItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertFilterItem(
      /**
       * The filterItem to insert; if empty, nothing is inserted
       */
      oFilterItem: ListItem,
      /**
       * The `0`-based index the filterItem should be inserted at; for a negative value of `iIndex`, the filterItem
       * is inserted at position 0; for a value greater than the current size of the aggregation, the filterItem
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a toolsMenuItem into the aggregation {@link #getToolsMenuItems toolsMenuItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertToolsMenuItem(
      /**
       * The toolsMenuItem to insert; if empty, nothing is inserted
       */
      oToolsMenuItem: MenuItem,
      /**
       * The `0`-based index the toolsMenuItem should be inserted at; for a negative value of `iIndex`, the toolsMenuItem
       * is inserted at position 0; for a value greater than the current size of the aggregation, the toolsMenuItem
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getChunks chunks}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllChunks(): FeedChunk[];
    /**
     * Removes all the controls from the aggregation {@link #getFilterItems filterItems}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllFilterItems(): ListItem[];
    /**
     * Removes all the controls from the aggregation {@link #getToolsMenuItems toolsMenuItems}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllToolsMenuItems(): MenuItem[];
    /**
     * Removes a chunk from the aggregation {@link #getChunks chunks}.
     *
     * @returns The removed chunk or `null`
     */
    removeChunk(
      /**
       * The chunk to remove or its index or id
       */
      vChunk: int | string | FeedChunk
    ): FeedChunk | null;
    /**
     * Removes a filterItem from the aggregation {@link #getFilterItems filterItems}.
     *
     * @returns The removed filterItem or `null`
     */
    removeFilterItem(
      /**
       * The filterItem to remove or its index or id
       */
      vFilterItem: int | string | ListItem
    ): ListItem | null;
    /**
     * Removes a toolsMenuItem from the aggregation {@link #getToolsMenuItems toolsMenuItems}.
     *
     * @returns The removed toolsMenuItem or `null`
     */
    removeToolsMenuItem(
      /**
       * The toolsMenuItem to remove or its index or id
       */
      vToolsMenuItem: int | string | MenuItem
    ): MenuItem | null;
    /**
     * Sets a new value for property {@link #getFeederSender feederSender}.
     *
     * The sender of the feeder
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFeederSender(
      /**
       * New value for property `feederSender`
       */
      sFeederSender?: string
    ): this;
    /**
     * Sets a new value for property {@link #getFeederThumbnailSrc feederThumbnailSrc}.
     *
     * The path to the thumbnail image used for the feeder
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFeederThumbnailSrc(
      /**
       * New value for property `feederThumbnailSrc`
       */
      sFeederThumbnailSrc?: URI
    ): this;
    /**
     * Sets a new value for property {@link #getLive live}.
     *
     * Specifies whether the feed shall be in live mode
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLive(
      /**
       * New value for property `live`
       */
      bLive?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getTitle title}.
     *
     * Title text of the Feed. If no text is entered "FEED" is displayed.
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
     * Unbinds aggregation {@link #getChunks chunks} from model data.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    unbindChunks(): this;
    /**
     * Unbinds aggregation {@link #getFilterItems filterItems} from model data.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    unbindFilterItems(): this;
    /**
     * Unbinds aggregation {@link #getToolsMenuItems toolsMenuItems} from model data.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    unbindToolsMenuItems(): this;
  }

  export interface $FeedSettings extends $ControlSettings {
    /**
     * The path to the thumbnail image used for the feeder
     */
    feederThumbnailSrc?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * The sender of the feeder
     */
    feederSender?: string | PropertyBindingInfo;

    /**
     * Specifies whether the feed shall be in live mode
     */
    live?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Title text of the Feed. If no text is entered "FEED" is displayed.
     */
    title?: string | PropertyBindingInfo;

    /**
     * Items of the filter
     */
    filterItems?:
      | ListItem[]
      | ListItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * The chunks
     */
    chunks?: FeedChunk[] | FeedChunk | AggregationBindingInfo | `{${string}}`;

    /**
     * MenuItems to open when the tool button is clicked by the user
     */
    toolsMenuItems?:
      | MenuItem[]
      | MenuItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Event is fired when the filter is changed
     */
    filterChange?: (oEvent: Event) => void;

    /**
     * Event is fired when the search function on SearchField is triggered
     */
    search?: (oEvent: Event) => void;

    /**
     * Event is fired when a new chunk is added
     */
    chunkAdded?: (oEvent: Event) => void;

    /**
     * Event is fired when an item from the tools MenuButton was selected
     */
    toolsItemSelected?: (oEvent: Event) => void;

    /**
     * Event is fired when the live mode has changed
     */
    toggleLive?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/ux3/FeedChunk" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import MenuItem from "sap/ui/commons/MenuItem";

  import Event from "sap/ui/base/Event";

  import {
    AggregationBindingInfo,
    PropertyBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import MenuItemBase from "sap/ui/unified/MenuItemBase";

  import { URI } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @deprecated (since 1.38) - Instead, use the `sap.m.FeedListItem` control.
   * @EXPERIMENTAL (since 1.2) - The whole Feed/Feeder API is still under discussion, significant changes
   * are likely. Especially text presentation (e.g. @-references and formatted text) is not final. Also the
   * Feed model topic is still open.
   *
   * The unit that is embedded - single-wise or in a multiple way - into a Feed control. The control provides
   * a set of properties for text, sender information, time stamp, comments, and functions such as flagging
   * the entry to be favorite, shared, or flagged.
   */
  export default class FeedChunk extends Control {
    /**
     * Constructor for a new FeedChunk.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $FeedChunkSettings
    );
    /**
     * Constructor for a new FeedChunk.
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
      mSettings?: $FeedChunkSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.FeedChunk with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, FeedChunk>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.FeedChunk.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some actionMenuItem to the aggregation {@link #getActionMenuItems actionMenuItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addActionMenuItem(
      /**
       * The actionMenuItem to add; if empty, nothing is inserted
       */
      oActionMenuItem: MenuItem
    ): this;
    /**
     * Adds some comment to the aggregation {@link #getComments comments}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addComment(
      /**
       * The comment to add; if empty, nothing is inserted
       */
      oComment: FeedChunk
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:actionItemSelected actionItemSelected} event
     * of this `sap.ui.ux3.FeedChunk`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
     *
     * Event is fired when an item from the action menu button was selected.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachActionItemSelected(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:actionItemSelected actionItemSelected} event
     * of this `sap.ui.ux3.FeedChunk`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
     *
     * Event is fired when an item from the action menu button was selected.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachActionItemSelected(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:commentAdded commentAdded} event of this `sap.ui.ux3.FeedChunk`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
     *
     * Event is raised when a comment is added to the entry. This event is not supported for comment chunks.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCommentAdded(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:commentAdded commentAdded} event of this `sap.ui.ux3.FeedChunk`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
     *
     * Event is raised when a comment is added to the entry. This event is not supported for comment chunks.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCommentAdded(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:deleted deleted} event of this `sap.ui.ux3.FeedChunk`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
     *
     * Event is fired when the deletion button is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDeleted(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:deleted deleted} event of this `sap.ui.ux3.FeedChunk`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
     *
     * Event is fired when the deletion button is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDeleted(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:inspect inspect} event of this `sap.ui.ux3.FeedChunk`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
     *
     * Event is fired when the inspect button was pressed
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachInspect(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:inspect inspect} event of this `sap.ui.ux3.FeedChunk`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
     *
     * Event is fired when the inspect button was pressed
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachInspect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:referenceClicked referenceClicked} event of
     * this `sap.ui.ux3.FeedChunk`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
     *
     * Click on a @-reference
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachReferenceClicked(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:referenceClicked referenceClicked} event of
     * this `sap.ui.ux3.FeedChunk`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
     *
     * Click on a @-reference
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachReferenceClicked(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:senderClicked senderClicked} event of this `sap.ui.ux3.FeedChunk`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
     *
     * Event is fired when the thumbnail or the name of the sender is clicked.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSenderClicked(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:senderClicked senderClicked} event of this `sap.ui.ux3.FeedChunk`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
     *
     * Event is fired when the thumbnail or the name of the sender is clicked.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSenderClicked(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:toggleFavorite toggleFavorite} event of this
     * `sap.ui.ux3.FeedChunk`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
     *
     * Event is raised when the user clicks to set the entry as favorite. This event is not supported for comment
     * chunks.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachToggleFavorite(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:toggleFavorite toggleFavorite} event of this
     * `sap.ui.ux3.FeedChunk`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
     *
     * Event is raised when the user clicks to set the entry as favorite. This event is not supported for comment
     * chunks.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachToggleFavorite(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:toggleFlagged toggleFlagged} event of this `sap.ui.ux3.FeedChunk`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
     *
     * Event is raised when the user clicks to flag the entry. This event is not supported for comment chunks.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachToggleFlagged(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:toggleFlagged toggleFlagged} event of this `sap.ui.ux3.FeedChunk`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
     *
     * Event is raised when the user clicks to flag the entry. This event is not supported for comment chunks.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachToggleFlagged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:toggleShared toggleShared} event of this `sap.ui.ux3.FeedChunk`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
     *
     * Event is raised when the user clicks to share the entry. This event is not supported for comment chunks.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachToggleShared(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:toggleShared toggleShared} event of this `sap.ui.ux3.FeedChunk`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
     *
     * Event is raised when the user clicks to share the entry. This event is not supported for comment chunks.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachToggleShared(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
       */
      oListener?: object
    ): this;
    /**
     * Binds aggregation {@link #getActionMenuItems actionMenuItems} to model data.
     *
     * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
     * of the possible properties of `oBindingInfo`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    bindActionMenuItems(
      /**
       * The binding information
       */
      oBindingInfo: AggregationBindingInfo
    ): this;
    /**
     * Binds aggregation {@link #getComments comments} to model data.
     *
     * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
     * of the possible properties of `oBindingInfo`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    bindComments(
      /**
       * The binding information
       */
      oBindingInfo: AggregationBindingInfo
    ): this;
    /**
     * Destroys all the actionMenuItems in the aggregation {@link #getActionMenuItems actionMenuItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyActionMenuItems(): this;
    /**
     * Destroys all the comments in the aggregation {@link #getComments comments}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyComments(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:actionItemSelected actionItemSelected} event
     * of this `sap.ui.ux3.FeedChunk`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachActionItemSelected(
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
     * Detaches event handler `fnFunction` from the {@link #event:commentAdded commentAdded} event of this `sap.ui.ux3.FeedChunk`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachCommentAdded(
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
     * Detaches event handler `fnFunction` from the {@link #event:deleted deleted} event of this `sap.ui.ux3.FeedChunk`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachDeleted(
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
     * Detaches event handler `fnFunction` from the {@link #event:inspect inspect} event of this `sap.ui.ux3.FeedChunk`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachInspect(
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
     * Detaches event handler `fnFunction` from the {@link #event:referenceClicked referenceClicked} event of
     * this `sap.ui.ux3.FeedChunk`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachReferenceClicked(
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
     * Detaches event handler `fnFunction` from the {@link #event:senderClicked senderClicked} event of this
     * `sap.ui.ux3.FeedChunk`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSenderClicked(
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
     * Detaches event handler `fnFunction` from the {@link #event:toggleFavorite toggleFavorite} event of this
     * `sap.ui.ux3.FeedChunk`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachToggleFavorite(
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
     * Detaches event handler `fnFunction` from the {@link #event:toggleFlagged toggleFlagged} event of this
     * `sap.ui.ux3.FeedChunk`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachToggleFlagged(
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
     * Detaches event handler `fnFunction` from the {@link #event:toggleShared toggleShared} event of this `sap.ui.ux3.FeedChunk`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachToggleShared(
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
     * Fires event {@link #event:actionItemSelected actionItemSelected} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireActionItemSelected(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The Id of the selected item
         */
        itemId?: string;
        /**
         * The selected item
         */
        item?: MenuItemBase;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:commentAdded commentAdded} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireCommentAdded(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * New comment chunk
         */
        comment?: FeedChunk;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:deleted deleted} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireDeleted(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:inspect inspect} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireInspect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:referenceClicked referenceClicked} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireReferenceClicked(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Text of the @-reference
         */
        text?: string;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:senderClicked senderClicked} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSenderClicked(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:toggleFavorite toggleFavorite} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireToggleFavorite(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Current favorite state
         */
        favorite?: boolean;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:toggleFlagged toggleFlagged} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireToggleFlagged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Current flagged state
         */
        flagged?: boolean;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:toggleShared toggleShared} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireToggleShared(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Current shared state
         */
        shareed?: boolean;
      }
    ): this;
    /**
     * Gets content of aggregation {@link #getActionMenuItems actionMenuItems}.
     *
     * MenuItems to open when there is a click on the action menu button
     */
    getActionMenuItems(): MenuItem[];
    /**
     * @deprecated (since 1.4.0) - Not longer used. If a chunk is a comment is determined from hierarchy. If
     * the parent is a chunk it's automatically a comment.
     *
     * Gets current value of property {@link #getCommentChunk commentChunk}.
     *
     * This flag changes a FeedChunk into a CommentChunk. In this case, it can not have own comments, furthermore
     * it must be assigned to a FeedChunk.
     *
     * Default value is `false`.
     *
     * @returns Value of property `commentChunk`
     */
    getCommentChunk(): boolean;
    /**
     * Gets content of aggregation {@link #getComments comments}.
     *
     * Comments on this chunk
     */
    getComments(): FeedChunk[];
    /**
     * Gets current value of property {@link #getDeletionAllowed deletionAllowed}.
     *
     * Flag if the deletion of the chunk shall be allowed
     *
     * Default value is `false`.
     *
     * @returns Value of property `deletionAllowed`
     */
    getDeletionAllowed(): boolean;
    /**
     * Gets current value of property {@link #getEnableComment enableComment}.
     *
     * If true the comment action is enabled.
     *
     * Default value is `true`.
     *
     * @returns Value of property `enableComment`
     */
    getEnableComment(): boolean;
    /**
     * Gets current value of property {@link #getEnableFavorite enableFavorite}.
     *
     * If true the favorite action is enabled.
     *
     * Default value is `true`.
     *
     * @returns Value of property `enableFavorite`
     */
    getEnableFavorite(): boolean;
    /**
     * Gets current value of property {@link #getEnableFlag enableFlag}.
     *
     * If true the flag action is enabled.
     *
     * Default value is `true`.
     *
     * @returns Value of property `enableFlag`
     */
    getEnableFlag(): boolean;
    /**
     * Gets current value of property {@link #getEnableInspect enableInspect}.
     *
     * If true the inspect action is enabled.
     *
     * Default value is `true`.
     *
     * @returns Value of property `enableInspect`
     */
    getEnableInspect(): boolean;
    /**
     * Gets current value of property {@link #getEnableShare enableShare}.
     *
     * If true the share action is enabled.
     *
     * Default value is `true`.
     *
     * @returns Value of property `enableShare`
     */
    getEnableShare(): boolean;
    /**
     * Gets current value of property {@link #getFavorite favorite}.
     *
     * Defines whether the entry shall be displayed as favorite. This property is not supported for comment
     * chunks.
     *
     * @returns Value of property `favorite`
     */
    getFavorite(): boolean;
    /**
     * Gets current value of property {@link #getFeederSender feederSender}.
     *
     * Sender for the comment feeder This property is optional if the chunk is a sub-control of a feed control.
     * In this case the value of the feed control is used if it's not set. So it must be only set once on the
     * feed control.
     *
     * @returns Value of property `feederSender`
     */
    getFeederSender(): string;
    /**
     * Gets current value of property {@link #getFeederThumbnailSrc feederThumbnailSrc}.
     *
     * URL to the thumbnail image for the comment feeder. This property is optional if the chunk is a sub-control
     * of a feed control. In this case the value of the feed control is used if it's not set. So it must be
     * only set once on the feed control.
     *
     * @returns Value of property `feederThumbnailSrc`
     */
    getFeederThumbnailSrc(): URI;
    /**
     * Gets current value of property {@link #getFlagged flagged}.
     *
     * Defines whether the entry is flagged. This property is not supported for comment chunks.
     *
     * Default value is `false`.
     *
     * @returns Value of property `flagged`
     */
    getFlagged(): boolean;
    /**
     * Gets current value of property {@link #getSender sender}.
     *
     * Sender of the chunk
     *
     * @returns Value of property `sender`
     */
    getSender(): string;
    /**
     * Gets current value of property {@link #getShared shared}.
     *
     * Defines whether the entry shall be shared. This property is not supported for comment chunks.
     *
     * Default value is `false`.
     *
     * @returns Value of property `shared`
     */
    getShared(): boolean;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * The FeedChunk text. @References are supported.
     *
     * @returns Value of property `text`
     */
    getText(): string;
    /**
     * Gets current value of property {@link #getThumbnailSrc thumbnailSrc}.
     *
     * URL to the thumbnail image.
     *
     * @returns Value of property `thumbnailSrc`
     */
    getThumbnailSrc(): URI;
    /**
     * Gets current value of property {@link #getTimestamp timestamp}.
     *
     * Format is ISO 8601 YYYY-MM-DDThh:mm:ss.sZ, Z meaning the time is in UTC time zone
     *
     * @returns Value of property `timestamp`
     */
    getTimestamp(): string;
    /**
     * Checks for the provided `sap.ui.commons.MenuItem` in the aggregation {@link #getActionMenuItems actionMenuItems}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfActionMenuItem(
      /**
       * The actionMenuItem whose index is looked for
       */
      oActionMenuItem: MenuItem
    ): int;
    /**
     * Checks for the provided `sap.ui.ux3.FeedChunk` in the aggregation {@link #getComments comments}. and
     * returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfComment(
      /**
       * The comment whose index is looked for
       */
      oComment: FeedChunk
    ): int;
    /**
     * Inserts a actionMenuItem into the aggregation {@link #getActionMenuItems actionMenuItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertActionMenuItem(
      /**
       * The actionMenuItem to insert; if empty, nothing is inserted
       */
      oActionMenuItem: MenuItem,
      /**
       * The `0`-based index the actionMenuItem should be inserted at; for a negative value of `iIndex`, the actionMenuItem
       * is inserted at position 0; for a value greater than the current size of the aggregation, the actionMenuItem
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a comment into the aggregation {@link #getComments comments}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertComment(
      /**
       * The comment to insert; if empty, nothing is inserted
       */
      oComment: FeedChunk,
      /**
       * The `0`-based index the comment should be inserted at; for a negative value of `iIndex`, the comment
       * is inserted at position 0; for a value greater than the current size of the aggregation, the comment
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes a actionMenuItem from the aggregation {@link #getActionMenuItems actionMenuItems}.
     *
     * @returns The removed actionMenuItem or `null`
     */
    removeActionMenuItem(
      /**
       * The actionMenuItem to remove or its index or id
       */
      vActionMenuItem: int | string | MenuItem
    ): MenuItem | null;
    /**
     * Removes all the controls from the aggregation {@link #getActionMenuItems actionMenuItems}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllActionMenuItems(): MenuItem[];
    /**
     * Removes all the controls from the aggregation {@link #getComments comments}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllComments(): FeedChunk[];
    /**
     * Removes a comment from the aggregation {@link #getComments comments}.
     *
     * @returns The removed comment or `null`
     */
    removeComment(
      /**
       * The comment to remove or its index or id
       */
      vComment: int | string | FeedChunk
    ): FeedChunk | null;
    /**
     * @deprecated (since 1.4.0) - Not longer used. If a chunk is a comment is determined from hierarchy. If
     * the parent is a chunk it's automatically a comment.
     *
     * Sets a new value for property {@link #getCommentChunk commentChunk}.
     *
     * This flag changes a FeedChunk into a CommentChunk. In this case, it can not have own comments, furthermore
     * it must be assigned to a FeedChunk.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setCommentChunk(
      /**
       * New value for property `commentChunk`
       */
      bCommentChunk?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getDeletionAllowed deletionAllowed}.
     *
     * Flag if the deletion of the chunk shall be allowed
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDeletionAllowed(
      /**
       * New value for property `deletionAllowed`
       */
      bDeletionAllowed?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getEnableComment enableComment}.
     *
     * If true the comment action is enabled.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableComment(
      /**
       * New value for property `enableComment`
       */
      bEnableComment?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getEnableFavorite enableFavorite}.
     *
     * If true the favorite action is enabled.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableFavorite(
      /**
       * New value for property `enableFavorite`
       */
      bEnableFavorite?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getEnableFlag enableFlag}.
     *
     * If true the flag action is enabled.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableFlag(
      /**
       * New value for property `enableFlag`
       */
      bEnableFlag?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getEnableInspect enableInspect}.
     *
     * If true the inspect action is enabled.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableInspect(
      /**
       * New value for property `enableInspect`
       */
      bEnableInspect?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getEnableShare enableShare}.
     *
     * If true the share action is enabled.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnableShare(
      /**
       * New value for property `enableShare`
       */
      bEnableShare?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getFavorite favorite}.
     *
     * Defines whether the entry shall be displayed as favorite. This property is not supported for comment
     * chunks.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFavorite(
      /**
       * New value for property `favorite`
       */
      bFavorite?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getFeederSender feederSender}.
     *
     * Sender for the comment feeder This property is optional if the chunk is a sub-control of a feed control.
     * In this case the value of the feed control is used if it's not set. So it must be only set once on the
     * feed control.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFeederSender(
      /**
       * New value for property `feederSender`
       */
      sFeederSender?: string
    ): this;
    /**
     * Sets a new value for property {@link #getFeederThumbnailSrc feederThumbnailSrc}.
     *
     * URL to the thumbnail image for the comment feeder. This property is optional if the chunk is a sub-control
     * of a feed control. In this case the value of the feed control is used if it's not set. So it must be
     * only set once on the feed control.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFeederThumbnailSrc(
      /**
       * New value for property `feederThumbnailSrc`
       */
      sFeederThumbnailSrc?: URI
    ): this;
    /**
     * Sets a new value for property {@link #getFlagged flagged}.
     *
     * Defines whether the entry is flagged. This property is not supported for comment chunks.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFlagged(
      /**
       * New value for property `flagged`
       */
      bFlagged?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSender sender}.
     *
     * Sender of the chunk
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSender(
      /**
       * New value for property `sender`
       */
      sSender?: string
    ): this;
    /**
     * Sets a new value for property {@link #getShared shared}.
     *
     * Defines whether the entry shall be shared. This property is not supported for comment chunks.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShared(
      /**
       * New value for property `shared`
       */
      bShared?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getText text}.
     *
     * The FeedChunk text. @References are supported.
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
    /**
     * Sets a new value for property {@link #getThumbnailSrc thumbnailSrc}.
     *
     * URL to the thumbnail image.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setThumbnailSrc(
      /**
       * New value for property `thumbnailSrc`
       */
      sThumbnailSrc?: URI
    ): this;
    /**
     * Sets a new value for property {@link #getTimestamp timestamp}.
     *
     * Format is ISO 8601 YYYY-MM-DDThh:mm:ss.sZ, Z meaning the time is in UTC time zone
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTimestamp(
      /**
       * New value for property `timestamp`
       */
      sTimestamp?: string
    ): this;
    /**
     * Unbinds aggregation {@link #getActionMenuItems actionMenuItems} from model data.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    unbindActionMenuItems(): this;
    /**
     * Unbinds aggregation {@link #getComments comments} from model data.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    unbindComments(): this;
  }

  export interface $FeedChunkSettings extends $ControlSettings {
    /**
     * URL to the thumbnail image.
     */
    thumbnailSrc?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * The FeedChunk text. @References are supported.
     */
    text?: string | PropertyBindingInfo;

    /**
     * Sender of the chunk
     */
    sender?: string | PropertyBindingInfo;

    /**
     * Format is ISO 8601 YYYY-MM-DDThh:mm:ss.sZ, Z meaning the time is in UTC time zone
     */
    timestamp?: string | PropertyBindingInfo;

    /**
     * Flag if the deletion of the chunk shall be allowed
     */
    deletionAllowed?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @deprecated (since 1.4.0) - Not longer used. If a chunk is a comment is determined from hierarchy. If
     * the parent is a chunk it's automatically a comment.
     *
     * This flag changes a FeedChunk into a CommentChunk. In this case, it can not have own comments, furthermore
     * it must be assigned to a FeedChunk.
     */
    commentChunk?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * URL to the thumbnail image for the comment feeder. This property is optional if the chunk is a sub-control
     * of a feed control. In this case the value of the feed control is used if it's not set. So it must be
     * only set once on the feed control.
     */
    feederThumbnailSrc?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * Sender for the comment feeder This property is optional if the chunk is a sub-control of a feed control.
     * In this case the value of the feed control is used if it's not set. So it must be only set once on the
     * feed control.
     */
    feederSender?: string | PropertyBindingInfo;

    /**
     * Defines whether the entry is flagged. This property is not supported for comment chunks.
     */
    flagged?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the entry shall be displayed as favorite. This property is not supported for comment
     * chunks.
     */
    favorite?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the entry shall be shared. This property is not supported for comment chunks.
     */
    shared?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If true the flag action is enabled.
     */
    enableFlag?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If true the share action is enabled.
     */
    enableShare?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If true the comment action is enabled.
     */
    enableComment?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If true the inspect action is enabled.
     */
    enableInspect?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If true the favorite action is enabled.
     */
    enableFavorite?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Comments on this chunk
     */
    comments?: FeedChunk[] | FeedChunk | AggregationBindingInfo | `{${string}}`;

    /**
     * MenuItems to open when there is a click on the action menu button
     */
    actionMenuItems?:
      | MenuItem[]
      | MenuItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Event is fired when the deletion button is pressed.
     */
    deleted?: (oEvent: Event) => void;

    /**
     * Event is raised when a comment is added to the entry. This event is not supported for comment chunks.
     */
    commentAdded?: (oEvent: Event) => void;

    /**
     * Event is raised when the user clicks to flag the entry. This event is not supported for comment chunks.
     */
    toggleFlagged?: (oEvent: Event) => void;

    /**
     * Event is fired when the thumbnail or the name of the sender is clicked.
     */
    senderClicked?: (oEvent: Event) => void;

    /**
     * Click on a @-reference
     */
    referenceClicked?: (oEvent: Event) => void;

    /**
     * Event is raised when the user clicks to set the entry as favorite. This event is not supported for comment
     * chunks.
     */
    toggleFavorite?: (oEvent: Event) => void;

    /**
     * Event is fired when the inspect button was pressed
     */
    inspect?: (oEvent: Event) => void;

    /**
     * Event is raised when the user clicks to share the entry. This event is not supported for comment chunks.
     */
    toggleShared?: (oEvent: Event) => void;

    /**
     * Event is fired when an item from the action menu button was selected.
     */
    actionItemSelected?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/ux3/Feeder" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import Event from "sap/ui/base/Event";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { URI } from "sap/ui/core/library";

  import { FeederType } from "sap/ui/ux3/library";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38) - Instead, use the `sap.m.FeedInput` control.
   * @EXPERIMENTAL (since 1.2) - The whole Feed/Feeder API is still under discussion, significant changes
   * are likely. Especially text presentation (e.g. @-references and formatted text) is not final. Also the
   * Feed model topic is still open.
   *
   * This feed control flavor represents a lean common feed, or a comment feed, with a text commit function.
   * The control can be used stand alone or in a multiple way, and generally would be integrated directly
   * into a UIArea.
   */
  export default class Feeder extends Control {
    /**
     * Constructor for a new Feeder.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $FeederSettings
    );
    /**
     * Constructor for a new Feeder.
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
      mSettings?: $FeederSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.Feeder with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Feeder>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.Feeder.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:submit submit} event of this `sap.ui.ux3.Feeder`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Feeder` itself.
     *
     * Event is fired when the entered text is submitted
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
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feeder` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:submit submit} event of this `sap.ui.ux3.Feeder`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Feeder` itself.
     *
     * Event is fired when the entered text is submitted
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSubmit(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feeder` itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:submit submit} event of this `sap.ui.ux3.Feeder`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSubmit(
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
     * Fires event {@link #event:submit submit} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSubmit(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The text that is submitted
         */
        text?: string;
      }
    ): this;
    /**
     * Gets current value of property {@link #getPlaceholderText placeholderText}.
     *
     * This property could be used for costum placeholder. If it is not set, the default text is used.
     *
     * @returns Value of property `placeholderText`
     */
    getPlaceholderText(): string;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * The text for the Feeder. @References are supported.
     *
     * @returns Value of property `text`
     */
    getText(): string;
    /**
     * Gets current value of property {@link #getThumbnailSrc thumbnailSrc}.
     *
     * URL to the thumb nail image This property is optional if the feeder is a sub-control of a feed or a feedChunk
     * control. In this case the value of the feed or feddChunk control is used if it's not set. So it must
     * be only set once on the feed or feedChunk control.
     *
     * @returns Value of property `thumbnailSrc`
     */
    getThumbnailSrc(): URI;
    /**
     * Gets current value of property {@link #getType type}.
     *
     * Type and size of the Feeder
     *
     * Default value is `Large`.
     *
     * @returns Value of property `type`
     */
    getType(): FeederType | keyof typeof FeederType;
    /**
     * Sets a new value for property {@link #getPlaceholderText placeholderText}.
     *
     * This property could be used for costum placeholder. If it is not set, the default text is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setPlaceholderText(
      /**
       * New value for property `placeholderText`
       */
      sPlaceholderText?: string
    ): this;
    /**
     * Sets a new value for property {@link #getText text}.
     *
     * The text for the Feeder. @References are supported.
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
    /**
     * Sets a new value for property {@link #getThumbnailSrc thumbnailSrc}.
     *
     * URL to the thumb nail image This property is optional if the feeder is a sub-control of a feed or a feedChunk
     * control. In this case the value of the feed or feddChunk control is used if it's not set. So it must
     * be only set once on the feed or feedChunk control.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setThumbnailSrc(
      /**
       * New value for property `thumbnailSrc`
       */
      sThumbnailSrc?: URI
    ): this;
    /**
     * Sets a new value for property {@link #getType type}.
     *
     * Type and size of the Feeder
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Large`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setType(
      /**
       * New value for property `type`
       */
      sType?: FeederType | keyof typeof FeederType
    ): this;
  }

  export interface $FeederSettings extends $ControlSettings {
    /**
     * URL to the thumb nail image This property is optional if the feeder is a sub-control of a feed or a feedChunk
     * control. In this case the value of the feed or feddChunk control is used if it's not set. So it must
     * be only set once on the feed or feedChunk control.
     */
    thumbnailSrc?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * The text for the Feeder. @References are supported.
     */
    text?: string | PropertyBindingInfo;

    /**
     * Type and size of the Feeder
     */
    type?:
      | (FeederType | keyof typeof FeederType)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * This property could be used for costum placeholder. If it is not set, the default text is used.
     */
    placeholderText?: string | PropertyBindingInfo;

    /**
     * Event is fired when the entered text is submitted
     */
    submit?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/ux3/NavigationBar" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID } from "sap/ui/core/library";

  import NavigationItem from "sap/ui/ux3/NavigationItem";

  import Event from "sap/ui/base/Event";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38) - Instead, use the `sap.m.IconTabBar`, `sap.m.TabContainer` or `sap.uxap.ObjectPageLayout`
   * control.
   *
   * Provides enhanced navigation capabilities and is the parent control of NavigationItem. It is displayed
   * in the form of a horizontal line with switching markers depending on the currently selected item. The
   * size of an item which is currently chosen by the user is enlarged. In the case that a large number of
   * items are defined for the bar, this is made transparent to the user by showing symbols for scrolling
   * options (forwards and backwards) to see the next or previous items.
   */
  export default class NavigationBar extends Control {
    /**
     * Constructor for a new NavigationBar.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $NavigationBarSettings
    );
    /**
     * Constructor for a new NavigationBar.
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
      mSettings?: $NavigationBarSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.NavigationBar with name `sClassName` and enriches it with
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
      oClassInfo?: sap.ClassInfo<T, NavigationBar>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.NavigationBar.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some associatedItem into the association {@link #getAssociatedItems associatedItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addAssociatedItem(
      /**
       * The associatedItems to add; if empty, nothing is inserted
       */
      vAssociatedItem: ID | NavigationItem
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
      oItem: NavigationItem
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.ux3.NavigationBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.NavigationBar` itself.
     *
     * Event is fired when an item is selected by the user
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
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.NavigationBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.ux3.NavigationBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.NavigationBar` itself.
     *
     * Event is fired when an item is selected by the user
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.NavigationBar` itself
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
     * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.ux3.NavigationBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSelect(
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
     * Fires event {@link #event:select select} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The ID of the newly selected NavigationItem.
         */
        itemId?: string;
        /**
         * The newly selected NavigationItem.
         */
        item?: NavigationItem;
      }
    ): boolean;
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAssociatedItems
     * associatedItems}.
     */
    getAssociatedItems(): ID[];
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * If the navigation items need to have a different parent than the NavigationBar, alternatively the associatedItems
     * association can be used. The NavigationBar follows the approach to use the items aggregation. If this
     * aggregation is empty, associatedItems is used.
     */
    getItems(): NavigationItem[];
    /**
     * @SINCE 1.36
     *
     * Gets current value of property {@link #getOverflowItemsToUpperCase overflowItemsToUpperCase}.
     *
     * Sets the appearance of the menu items in the overflow menu to uppercase
     *
     * Default value is `false`.
     *
     * @returns Value of property `overflowItemsToUpperCase`
     */
    getOverflowItemsToUpperCase(): boolean;
    /**
     * ID of the element which is the current target of the association {@link #getSelectedItem selectedItem},
     * or `null`.
     */
    getSelectedItem(): ID;
    /**
     * Gets current value of property {@link #getToplevelVariant toplevelVariant}.
     *
     * Defines whether the navigation bar shall have top-level appearance
     *
     * Default value is `false`.
     *
     * @returns Value of property `toplevelVariant`
     */
    getToplevelVariant(): boolean;
    /**
     * Checks for the provided `sap.ui.ux3.NavigationItem` in the aggregation {@link #getItems items}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: NavigationItem
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
      oItem: NavigationItem,
      /**
       * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
       * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Returns whether there is a selectedItem set which is actually present in the items aggregation; or, if
     * the aggregation is empty, in the associatedItems association.
     */
    isSelectedItemValid(): boolean;
    /**
     * Removes all the controls in the association named {@link #getAssociatedItems associatedItems}.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllAssociatedItems(): ID[];
    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): NavigationItem[];
    /**
     * Removes an associatedItem from the association named {@link #getAssociatedItems associatedItems}.
     *
     * @returns The removed associatedItem or `null`
     */
    removeAssociatedItem(
      /**
       * The associatedItem to be removed or its index or ID
       */
      vAssociatedItem: int | ID | NavigationItem
    ): ID | null;
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     *
     * @returns The removed item or `null`
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | NavigationItem
    ): NavigationItem | null;
    /**
     * Replaces the currently associated items with the ones in the given array
     */
    setAssociatedItems(
      /**
       * The items to associate
       */
      aItems: NavigationItem[]
    ): this;
    /**
     * @SINCE 1.36
     *
     * Sets a new value for property {@link #getOverflowItemsToUpperCase overflowItemsToUpperCase}.
     *
     * Sets the appearance of the menu items in the overflow menu to uppercase
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setOverflowItemsToUpperCase(
      /**
       * New value for property `overflowItemsToUpperCase`
       */
      bOverflowItemsToUpperCase?: boolean
    ): this;
    /**
     * Sets the associated {@link #getSelectedItem selectedItem}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelectedItem(
      /**
       * ID of an element which becomes the new target of this selectedItem association; alternatively, an element
       * instance may be given
       */
      oSelectedItem: ID | NavigationItem
    ): this;
    /**
     * Sets a new value for property {@link #getToplevelVariant toplevelVariant}.
     *
     * Defines whether the navigation bar shall have top-level appearance
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setToplevelVariant(
      /**
       * New value for property `toplevelVariant`
       */
      bToplevelVariant?: boolean
    ): this;
  }

  export interface $NavigationBarSettings extends $ControlSettings {
    /**
     * Defines whether the navigation bar shall have top-level appearance
     */
    toplevelVariant?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.36
     *
     * Sets the appearance of the menu items in the overflow menu to uppercase
     */
    overflowItemsToUpperCase?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If the navigation items need to have a different parent than the NavigationBar, alternatively the associatedItems
     * association can be used. The NavigationBar follows the approach to use the items aggregation. If this
     * aggregation is empty, associatedItems is used.
     */
    items?:
      | NavigationItem[]
      | NavigationItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * The selected NavigationItem.
     */
    selectedItem?: NavigationItem | string;

    /**
     * This association is ignored as long as the items aggregation is used; and supposed to be used alternatively
     * when the items should be aggregated by other entities.
     */
    associatedItems?: Array<NavigationItem | string>;

    /**
     * Event is fired when an item is selected by the user
     */
    select?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/ux3/NavigationItem" {
  import { default as Item, $ItemSettings } from "sap/ui/core/Item";

  import { URI } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38) - Instead, use the `sap.m.IconTabBar`, `sap.m.TabContainer` or `sap.uxap.ObjectPageLayout`
   * control.
   *
   * Is the item to be used within the NavigationBar
   */
  export default class NavigationItem extends Item {
    /**
     * Constructor for a new NavigationItem.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $NavigationItemSettings
    );
    /**
     * Constructor for a new NavigationItem.
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
      mSettings?: $NavigationItemSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.NavigationItem with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, NavigationItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.NavigationItem.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some subItem to the aggregation {@link #getSubItems subItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addSubItem(
      /**
       * The subItem to add; if empty, nothing is inserted
       */
      oSubItem: NavigationItem
    ): this;
    /**
     * Destroys all the subItems in the aggregation {@link #getSubItems subItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySubItems(): this;
    /**
     * Gets current value of property {@link #getHref href}.
     *
     * Defines the link target URL. This property is optional and should only be set when required! The use
     * of the href property is to not only allow users to navigate in-place by left-clicking NavigationItems,
     * but also to allow right-click and then "open in new tab" or "open in new window". As long as href is
     * not set, an empty window will open and stay blank. But when href is set, the new window/tab will load
     * this URL and it is the application's responsibility to display what the user expects (e.g. the Shell,
     * with the respective NavigationItem being selected).
     *
     * @returns Value of property `href`
     */
    getHref(): URI;
    /**
     * Gets content of aggregation {@link #getSubItems subItems}.
     *
     * Any NavigationItems on the next hierarchy level connected to this NavigationItem
     */
    getSubItems(): NavigationItem[];
    /**
     * @SINCE 1.9.0
     *
     * Gets current value of property {@link #getVisible visible}.
     *
     * Whether the NavigationItem is currently visible. When making NavigationItems invisible at runtime it
     * is the application's responsibility to make sure it is not the currently selected one - or to select
     * another one in this case.
     *
     * Default value is `true`.
     *
     * @returns Value of property `visible`
     */
    getVisible(): boolean;
    /**
     * Checks for the provided `sap.ui.ux3.NavigationItem` in the aggregation {@link #getSubItems subItems}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfSubItem(
      /**
       * The subItem whose index is looked for
       */
      oSubItem: NavigationItem
    ): int;
    /**
     * Inserts a subItem into the aggregation {@link #getSubItems subItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertSubItem(
      /**
       * The subItem to insert; if empty, nothing is inserted
       */
      oSubItem: NavigationItem,
      /**
       * The `0`-based index the subItem should be inserted at; for a negative value of `iIndex`, the subItem
       * is inserted at position 0; for a value greater than the current size of the aggregation, the subItem
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getSubItems subItems}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllSubItems(): NavigationItem[];
    /**
     * Removes a subItem from the aggregation {@link #getSubItems subItems}.
     *
     * @returns The removed subItem or `null`
     */
    removeSubItem(
      /**
       * The subItem to remove or its index or id
       */
      vSubItem: int | string | NavigationItem
    ): NavigationItem | null;
    /**
     * Sets a new value for property {@link #getHref href}.
     *
     * Defines the link target URL. This property is optional and should only be set when required! The use
     * of the href property is to not only allow users to navigate in-place by left-clicking NavigationItems,
     * but also to allow right-click and then "open in new tab" or "open in new window". As long as href is
     * not set, an empty window will open and stay blank. But when href is set, the new window/tab will load
     * this URL and it is the application's responsibility to display what the user expects (e.g. the Shell,
     * with the respective NavigationItem being selected).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHref(
      /**
       * New value for property `href`
       */
      sHref?: URI
    ): this;
    /**
     * @SINCE 1.9.0
     *
     * Sets a new value for property {@link #getVisible visible}.
     *
     * Whether the NavigationItem is currently visible. When making NavigationItems invisible at runtime it
     * is the application's responsibility to make sure it is not the currently selected one - or to select
     * another one in this case.
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

  export interface $NavigationItemSettings extends $ItemSettings {
    /**
     * @SINCE 1.9.0
     *
     * Whether the NavigationItem is currently visible. When making NavigationItems invisible at runtime it
     * is the application's responsibility to make sure it is not the currently selected one - or to select
     * another one in this case.
     */
    visible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the link target URL. This property is optional and should only be set when required! The use
     * of the href property is to not only allow users to navigate in-place by left-clicking NavigationItems,
     * but also to allow right-click and then "open in new tab" or "open in new window". As long as href is
     * not set, an empty window will open and stay blank. But when href is set, the new window/tab will load
     * this URL and it is the application's responsibility to display what the user expects (e.g. the Shell,
     * with the respective NavigationItem being selected).
     */
    href?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * Any NavigationItems on the next hierarchy level connected to this NavigationItem
     */
    subItems?:
      | NavigationItem[]
      | NavigationItem
      | AggregationBindingInfo
      | `{${string}}`;
  }
}

declare module "sap/ui/ux3/NotificationBar" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import UI5Element from "sap/ui/core/Element";

  import Event from "sap/ui/base/Event";

  import { NotificationBarStatus } from "sap/ui/ux3/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.7.0
   * @deprecated (since 1.38) - Instead, use the `sap.m.MessagePopover` control.
   *
   * A NotificationBar is a "toolbar" that can be added to a page to show messages and notifications from
   * the application. Its position, height and width is inherited from the element that the notification bar
   * is added to. The NotificationBar uses position: fixed; to always stay at the bottom of the screen. This
   * CSS may sometimes cause issues when nested deeply inside other controls. To have a proper behavior of
   * the NotificationBar use it as high in the control hierarchy as possible.
   */
  export default class NotificationBar extends Control {
    /**
     * Constructor for a new NotificationBar.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $NotificationBarSettings
    );
    /**
     * Constructor for a new NotificationBar.
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
      mSettings?: $NotificationBarSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.NotificationBar with name `sClassName` and enriches it with
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
      oClassInfo?: sap.ClassInfo<T, NotificationBar>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.NotificationBar.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some notifier to the aggregation {@link #getNotifiers notifiers}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addNotifier(
      /**
       * The notifier to add; if empty, nothing is inserted
       */
      oNotifier: UI5Element
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:display display} event of this `sap.ui.ux3.NotificationBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.NotificationBar` itself.
     *
     * Event is fired when the bar wants to be displayed depending on given flag. This allows the application
     * to decide what to do.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDisplay(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.NotificationBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:display display} event of this `sap.ui.ux3.NotificationBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.NotificationBar` itself.
     *
     * Event is fired when the bar wants to be displayed depending on given flag. This allows the application
     * to decide what to do.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDisplay(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.NotificationBar` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.12.2
     *
     * Attaches event handler `fnFunction` to the {@link #event:resize resize} event of this `sap.ui.ux3.NotificationBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.NotificationBar` itself.
     *
     * This event is thrown when the bar was resized (to the different valid states: Min, Max, Default, None).
     * The event itself can be used from SAPUI5-version 1.12.2 since there was a bug in the previous versions
     * firing this event.
     *
     * @returns Reference to `this` in order to allow method chaining
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
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.NotificationBar` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.12.2
     *
     * Attaches event handler `fnFunction` to the {@link #event:resize resize} event of this `sap.ui.ux3.NotificationBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.NotificationBar` itself.
     *
     * This event is thrown when the bar was resized (to the different valid states: Min, Max, Default, None).
     * The event itself can be used from SAPUI5-version 1.12.2 since there was a bug in the previous versions
     * firing this event.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachResize(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.NotificationBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys the messageNotifier in the aggregation {@link #getMessageNotifier messageNotifier}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyMessageNotifier(): this;
    /**
     * Destroys all the notifiers in the aggregation {@link #getNotifiers notifiers}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyNotifiers(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:display display} event of this `sap.ui.ux3.NotificationBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachDisplay(
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
     * @SINCE 1.12.2
     *
     * Detaches event handler `fnFunction` from the {@link #event:resize resize} event of this `sap.ui.ux3.NotificationBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachResize(
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
     * Fires event {@link #event:display display} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireDisplay(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Indicates if the bar wants to be shown or hidden
         */
        show?: boolean;
      }
    ): this;
    /**
     * @SINCE 1.12.2
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:resize resize} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireResize(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The corresponding status to which the bar was resized. The corresponding heights can be taken for the
         * bar's CSS file.
         */
        status?: NotificationBarStatus | keyof typeof NotificationBarStatus;
      }
    ): this;
    /**
     * @SINCE 1.24.5
     *
     * Gets current value of property {@link #getAlwaysShowToggler alwaysShowToggler}.
     *
     * This property defines if the toggler should be displayed the whole time when the NotificationBar is shown.
     *
     * Default value is `false`.
     *
     * @returns Value of property `alwaysShowToggler`
     */
    getAlwaysShowToggler(): boolean;
    /**
     * Gets content of aggregation {@link #getMessageNotifier messageNotifier}.
     *
     * Notifier that shows messages
     */
    getMessageNotifier(): UI5Element;
    /**
     * Gets content of aggregation {@link #getNotifiers notifiers}.
     *
     * Notifiers that monitor something within the application and display the corresponding notifications.
     */
    getNotifiers(): UI5Element[];
    /**
     * Gets current value of property {@link #getResizeEnabled resizeEnabled}.
     *
     * This property enables the bar to be resized by the user.
     *
     * Default value is `true`.
     *
     * @returns Value of property `resizeEnabled`
     */
    getResizeEnabled(): boolean;
    /**
     * Gets current value of property {@link #getVisibleStatus visibleStatus}.
     *
     * This property displays the bar corresponding to given status
     *
     * Default value is `Default`.
     *
     * @returns Value of property `visibleStatus`
     */
    getVisibleStatus():
      | NotificationBarStatus
      | keyof typeof NotificationBarStatus;
    /**
     * This method checks if the NotificationBar has any items (notifications or messages) to show and returns
     * true if there are any items to show. So the application should decide if the bar should be displayed.
     */
    hasItems(): boolean;
    /**
     * Checks for the provided `sap.ui.core.Element` in the aggregation {@link #getNotifiers notifiers}. and
     * returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfNotifier(
      /**
       * The notifier whose index is looked for
       */
      oNotifier: UI5Element
    ): int;
    /**
     * Inserts a notifier into the aggregation {@link #getNotifiers notifiers}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertNotifier(
      /**
       * The notifier to insert; if empty, nothing is inserted
       */
      oNotifier: UI5Element,
      /**
       * The `0`-based index the notifier should be inserted at; for a negative value of `iIndex`, the notifier
       * is inserted at position 0; for a value greater than the current size of the aggregation, the notifier
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getNotifiers notifiers}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllNotifiers(): UI5Element[];
    /**
     * Removes a notifier from the aggregation {@link #getNotifiers notifiers}.
     *
     * @returns The removed notifier or `null`
     */
    removeNotifier(
      /**
       * The notifier to remove or its index or id
       */
      vNotifier: int | string | UI5Element
    ): UI5Element | null;
    /**
     * @SINCE 1.22.11
     */
    setAlwaysShowToggler(
      /**
       * if the toggler should be visible all the time set this parameter to **true**
       */
      bAlwaysShow: boolean
    ): void;
    /**
     * Sets the aggregated {@link #getMessageNotifier messageNotifier}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMessageNotifier(
      /**
       * The messageNotifier to set
       */
      oMessageNotifier: UI5Element
    ): this;
    /**
     * Sets a new value for property {@link #getResizeEnabled resizeEnabled}.
     *
     * This property enables the bar to be resized by the user.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setResizeEnabled(
      /**
       * New value for property `resizeEnabled`
       */
      bResizeEnabled?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getVisibleStatus visibleStatus}.
     *
     * This property displays the bar corresponding to given status
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Default`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setVisibleStatus(
      /**
       * New value for property `visibleStatus`
       */
      sVisibleStatus?:
        | NotificationBarStatus
        | keyof typeof NotificationBarStatus
    ): this;
  }

  export interface $NotificationBarSettings extends $ControlSettings {
    /**
     * This property displays the bar corresponding to given status
     */
    visibleStatus?:
      | (NotificationBarStatus | keyof typeof NotificationBarStatus)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * This property enables the bar to be resized by the user.
     */
    resizeEnabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.24.5
     *
     * This property defines if the toggler should be displayed the whole time when the NotificationBar is shown.
     */
    alwaysShowToggler?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Notifier that shows messages
     */
    messageNotifier?: UI5Element;

    /**
     * Notifiers that monitor something within the application and display the corresponding notifications.
     */
    notifiers?:
      | UI5Element[]
      | UI5Element
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Event is fired when the bar wants to be displayed depending on given flag. This allows the application
     * to decide what to do.
     */
    display?: (oEvent: Event) => void;

    /**
     * @SINCE 1.12.2
     *
     * This event is thrown when the bar was resized (to the different valid states: Min, Max, Default, None).
     * The event itself can be used from SAPUI5-version 1.12.2 since there was a bug in the previous versions
     * firing this event.
     */
    resize?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/ux3/Notifier" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import Message from "sap/ui/core/Message";

  import Event from "sap/ui/base/Event";

  import { URI } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38)
   *
   * This element can be docked to a notification bar to show notification items
   */
  export default class Notifier extends UI5Element {
    /**
     * Constructor for a new Notifier.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $NotifierSettings
    );
    /**
     * Constructor for a new Notifier.
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
      mSettings?: $NotifierSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.Notifier with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Notifier>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.Notifier.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some message to the aggregation {@link #getMessages messages}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addMessage(
      /**
       * The message to add; if empty, nothing is inserted
       */
      oMessage: Message
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:messageSelected messageSelected} event of this
     * `sap.ui.ux3.Notifier`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Notifier` itself.
     *
     * Event is fired when a message of the notifiers was selected.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMessageSelected(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Notifier` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:messageSelected messageSelected} event of this
     * `sap.ui.ux3.Notifier`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Notifier` itself.
     *
     * Event is fired when a message of the notifiers was selected.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMessageSelected(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Notifier` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the messages in the aggregation {@link #getMessages messages}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyMessages(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:messageSelected messageSelected} event of
     * this `sap.ui.ux3.Notifier`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachMessageSelected(
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
     * Fires event {@link #event:messageSelected messageSelected} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireMessageSelected(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The message that was selected
         */
        message?: Message;
        /**
         * The notifier that contains the selected message
         */
        notifier?: Notifier;
      }
    ): this;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Icon of the control that should be displayed within the corresponding bar
     *
     * @returns Value of property `icon`
     */
    getIcon(): URI;
    /**
     * Gets content of aggregation {@link #getMessages messages}.
     *
     * Messages of this notifier.
     */
    getMessages(): Message[];
    /**
     * Gets current value of property {@link #getTitle title}.
     *
     * Defines the title that should be displayed within the opening popup
     *
     * @returns Value of property `title`
     */
    getTitle(): string;
    /**
     * This method checks if the notifier has any items.
     */
    hasItems(): boolean;
    /**
     * Checks for the provided `sap.ui.core.Message` in the aggregation {@link #getMessages messages}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfMessage(
      /**
       * The message whose index is looked for
       */
      oMessage: Message
    ): int;
    /**
     * Inserts a message into the aggregation {@link #getMessages messages}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertMessage(
      /**
       * The message to insert; if empty, nothing is inserted
       */
      oMessage: Message,
      /**
       * The `0`-based index the message should be inserted at; for a negative value of `iIndex`, the message
       * is inserted at position 0; for a value greater than the current size of the aggregation, the message
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getMessages messages}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllMessages(): Message[];
    /**
     * Removes a message from the aggregation {@link #getMessages messages}.
     *
     * @returns The removed message or `null`
     */
    removeMessage(
      /**
       * The message to remove or its index or id
       */
      vMessage: int | string | Message
    ): Message | null;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Icon of the control that should be displayed within the corresponding bar
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
     * Sets a new value for property {@link #getTitle title}.
     *
     * Defines the title that should be displayed within the opening popup
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

  export interface $NotifierSettings extends $ElementSettings {
    /**
     * Icon of the control that should be displayed within the corresponding bar
     */
    icon?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the title that should be displayed within the opening popup
     */
    title?: string | PropertyBindingInfo;

    /**
     * Messages of this notifier.
     */
    messages?: Message[] | Message | AggregationBindingInfo | `{${string}}`;

    /**
     * Event is fired when a message of the notifiers was selected.
     */
    messageSelected?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/ux3/Overlay" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { PopupInterface } from "sap/ui/core/library";

  import Event from "sap/ui/base/Event";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38)
   *
   * Overlay Control
   */
  export default class Overlay extends Control implements PopupInterface {
    __implements__sap_ui_core_PopupInterface: boolean;
    /**
     * Constructor for a new Overlay.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $OverlaySettings
    );
    /**
     * Constructor for a new Overlay.
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
      mSettings?: $OverlaySettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.Overlay with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Overlay>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.Overlay.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.ux3.Overlay`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
     *
     * Event is fired when the Overlay starts closing.
     *
     * @returns Reference to `this` in order to allow method chaining
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Overlay` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.ux3.Overlay`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
     *
     * Event is fired when the Overlay starts closing.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Overlay` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.ux3.Overlay`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
     *
     * Event is fired when the Overlay is closed.
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Overlay` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.ux3.Overlay`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
     *
     * Event is fired when the Overlay is closed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClosed(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Overlay` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:open open} event of this `sap.ui.ux3.Overlay`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
     *
     * Event is fired when the Overlay is opened.
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
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Overlay` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:open open} event of this `sap.ui.ux3.Overlay`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
     *
     * Event is fired when the Overlay is opened.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Overlay` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:openNew openNew} event of this `sap.ui.ux3.Overlay`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
     *
     * Event is fired when the 'Open' button of the Overlay is clicked.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpenNew(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Overlay` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:openNew openNew} event of this `sap.ui.ux3.Overlay`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
     *
     * Event is fired when the 'Open' button of the Overlay is clicked.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpenNew(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Overlay` itself
       */
      oListener?: object
    ): this;
    /**
     * Closes the Overlay.
     */
    close(): void;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:close close} event of this `sap.ui.ux3.Overlay`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
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
     * Detaches event handler `fnFunction` from the {@link #event:closed closed} event of this `sap.ui.ux3.Overlay`.
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
     * Detaches event handler `fnFunction` from the {@link #event:open open} event of this `sap.ui.ux3.Overlay`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachOpen(
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
     * Detaches event handler `fnFunction` from the {@link #event:openNew openNew} event of this `sap.ui.ux3.Overlay`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachOpenNew(
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
     * Fires event {@link #event:close close} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireClose(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The ID of the Overlay instance.
         */
        id?: string;
      }
    ): boolean;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:closed closed} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireClosed(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The ID of the Overlay instance.
         */
        id?: string;
      }
    ): boolean;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:open open} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireOpen(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The ID of the Overlay instance
         */
        id?: string;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:openNew openNew} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireOpenNew(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The ID of the Overlay instance.
         */
        id?: string;
      }
    ): this;
    /**
     * Gets current value of property {@link #getCloseButtonVisible closeButtonVisible}.
     *
     * Defines whether the 'Close' button shall be visible.
     *
     * Default value is `true`.
     *
     * @returns Value of property `closeButtonVisible`
     */
    getCloseButtonVisible(): boolean;
    /**
     * Gets current value of property {@link #getOpenButtonVisible openButtonVisible}.
     *
     * Defines whether the 'Open' button shall be visible.
     *
     * Default value is `true`.
     *
     * @returns Value of property `openButtonVisible`
     */
    getOpenButtonVisible(): boolean;
    /**
     * Checks whether Overlay is open.
     */
    isOpen(): boolean;
    /**
     * Opens the Overlay.
     */
    open(
      /**
       * ID of the control that gets focused when the overlay is openend
       */
      initialFocusId: string
    ): void;
    /**
     * Sets a new value for property {@link #getCloseButtonVisible closeButtonVisible}.
     *
     * Defines whether the 'Close' button shall be visible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setCloseButtonVisible(
      /**
       * New value for property `closeButtonVisible`
       */
      bCloseButtonVisible?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getOpenButtonVisible openButtonVisible}.
     *
     * Defines whether the 'Open' button shall be visible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setOpenButtonVisible(
      /**
       * New value for property `openButtonVisible`
       */
      bOpenButtonVisible?: boolean
    ): this;
  }

  export interface $OverlaySettings extends $ControlSettings {
    /**
     * Defines whether the 'Open' button shall be visible.
     */
    openButtonVisible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the 'Close' button shall be visible.
     */
    closeButtonVisible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Event is fired when the Overlay starts closing.
     */
    close?: (oEvent: Event) => void;

    /**
     * Event is fired when the Overlay is closed.
     */
    closed?: (oEvent: Event) => void;

    /**
     * Event is fired when the 'Open' button of the Overlay is clicked.
     */
    openNew?: (oEvent: Event) => void;

    /**
     * Event is fired when the Overlay is opened.
     */
    open?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/ux3/OverlayContainer" {
  import { default as Overlay, $OverlaySettings } from "sap/ui/ux3/Overlay";

  import Control from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38)
   *
   * Is to be embedded into the Overlay control as content container
   */
  export default class OverlayContainer extends Overlay {
    /**
     * Constructor for a new OverlayContainer.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $OverlayContainerSettings
    );
    /**
     * Constructor for a new OverlayContainer.
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
      mSettings?: $OverlayContainerSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.OverlayContainer with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.ux3.Overlay.extend}.
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
      oClassInfo?: sap.ClassInfo<T, OverlayContainer>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.OverlayContainer.
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
     * Aggregation for content
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

  export interface $OverlayContainerSettings extends $OverlaySettings {
    /**
     * Aggregation for content
     */
    content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;
  }
}

declare module "sap/ui/ux3/OverlayDialog" {
  import { default as Overlay, $OverlaySettings } from "sap/ui/ux3/Overlay";

  import Control from "sap/ui/core/Control";

  import { CSSSize } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38)
   *
   * Dialog implementation based on the Overlay. If used in a Shell it leaves the Tool-Palette, Pane-Bar and
   * Header-Items accessible.
   */
  export default class OverlayDialog extends Overlay {
    /**
     * Constructor for a new OverlayDialog.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control.
       */
      mSettings?: $OverlayDialogSettings
    );
    /**
     * Constructor for a new OverlayDialog.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given.
       */
      sId?: string,
      /**
       * Initial settings for the new control.
       */
      mSettings?: $OverlayDialogSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.OverlayDialog with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.ux3.Overlay.extend}.
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
      oClassInfo?: sap.ClassInfo<T, OverlayDialog>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.OverlayDialog.
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
     * Content for the OverlayDialog.
     */
    getContent(): Control[];
    /**
     * Gets current value of property {@link #getHeight height}.
     *
     * Determines the height of the Overlay Dialog. If the height is set to "auto" it is always 50% of the overlay
     * height.
     *
     * Default value is `'auto'`.
     *
     * @returns Value of property `height`
     */
    getHeight(): CSSSize;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Determines the width of the Overlay Dialog. If the width is set to "auto" it is always 50% of the overlay
     * width.
     *
     * Default value is `'auto'`.
     *
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
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
     * The height for the OverlayDialog.
     */
    setHeight(sHeight: CSSSize): void;
    /**
     * This Method is not supported for the OverlayDialog.
     *
     * @returns Returns `this` to allow method chaining
     */
    setOpenButtonVisible(bVisible: boolean): this;
    /**
     * The width for the OverlayDialog.
     */
    setWidth(sWidth: CSSSize): void;
  }

  export interface $OverlayDialogSettings extends $OverlaySettings {
    /**
     * Determines the width of the Overlay Dialog. If the width is set to "auto" it is always 50% of the overlay
     * width.
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines the height of the Overlay Dialog. If the height is set to "auto" it is always 50% of the overlay
     * height.
     */
    height?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Content for the OverlayDialog.
     */
    content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;
  }
}

declare module "sap/ui/ux3/QuickView" {
  import {
    default as CalloutBase,
    $CalloutBaseSettings,
  } from "sap/ui/commons/CalloutBase";

  import ThingAction from "sap/ui/ux3/ThingAction";

  import UI5Element from "sap/ui/core/Element";

  import Event from "sap/ui/base/Event";

  import ActionBar from "sap/ui/ux3/ActionBar";

  import { FollowActionState } from "sap/ui/ux3/library";

  import { URI, CSSSize } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38) - Instead, use the `sap.m.QuickView` control.
   *
   * QuickView is a small popup with a short overview of a Thing. QuickView is shown when a user holds the
   * mouse pointer over a related screen element.
   */
  export default class QuickView extends CalloutBase {
    /**
     * Constructor for a new QuickView.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $QuickViewSettings
    );
    /**
     * Constructor for a new QuickView.
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
      mSettings?: $QuickViewSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.QuickView with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.CalloutBase.extend}.
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
      oClassInfo?: sap.ClassInfo<T, QuickView>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.QuickView.
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
      oAction: ThingAction
    ): this;
    /**
     * Adds some content to the aggregation {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addContent(
      /**
       * The content to add; if empty, nothing is inserted
       */
      oContent: UI5Element
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:actionSelected actionSelected} event of this
     * `sap.ui.ux3.QuickView`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.QuickView` itself.
     *
     * Action is selected in Action Bar
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachActionSelected(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.QuickView` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:actionSelected actionSelected} event of this
     * `sap.ui.ux3.QuickView`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.QuickView` itself.
     *
     * Action is selected in Action Bar
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachActionSelected(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.QuickView` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.QuickView`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.QuickView` itself.
     *
     * Fired when a new feed entry is submitted.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFeedSubmit(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.QuickView` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.QuickView`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.QuickView` itself.
     *
     * Fired when a new feed entry is submitted.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFeedSubmit(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.QuickView` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.ui.ux3.QuickView`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.QuickView` itself.
     *
     * Event is fired when a user clicks on the firstTitle link. Call the preventDefault method of the event
     * object to cancel browser navigation.
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.QuickView` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.ui.ux3.QuickView`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.QuickView` itself.
     *
     * Event is fired when a user clicks on the firstTitle link. Call the preventDefault method of the event
     * object to cancel browser navigation.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachNavigate(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.QuickView` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys the actionBar in the aggregation {@link #getActionBar actionBar}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyActionBar(): this;
    /**
     * Destroys all the actions in the aggregation {@link #getActions actions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyActions(): this;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:actionSelected actionSelected} event of this
     * `sap.ui.ux3.QuickView`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachActionSelected(
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
     * Detaches event handler `fnFunction` from the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.QuickView`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachFeedSubmit(
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
     * Detaches event handler `fnFunction` from the {@link #event:navigate navigate} event of this `sap.ui.ux3.QuickView`.
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
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:actionSelected actionSelected} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireActionSelected(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Id of selected ThingAction
         */
        id?: string;
        /**
         * Selected ThingAction
         */
        action?: ThingAction;
        /**
         * New State of the selected action. Only filled if the respective action maintains a state property, for
         * example 'FollowUp' or 'Favorite'
         */
        newState?: string;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:feedSubmit feedSubmit} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireFeedSubmit(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Feed text
         */
        text?: string;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:navigate navigate} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireNavigate(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * URI of the Thing Inspector application.
         */
        href?: string;
      }
    ): boolean;
    /**
     * Gets content of aggregation {@link #getActionBar actionBar}.
     *
     * ActionBar. If no actionBar is set a default ActionBar will be created. In any case, ActionBar is displayed
     * only when the showActionBar property is set to true.
     */
    getActionBar(): ActionBar;
    /**
     * Gets content of aggregation {@link #getActions actions}.
     *
     * Actions of a Thing
     */
    getActions(): ThingAction[];
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Body content of the QuickView
     */
    getContent(): UI5Element[];
    /**
     * Gets current value of property {@link #getFavoriteActionEnabled favoriteActionEnabled}.
     *
     * Favorite action enabled/disabled. If disabled the action will be invisible.
     *
     * Default value is `true`.
     *
     * @returns Value of property `favoriteActionEnabled`
     */
    getFavoriteActionEnabled(): boolean;
    /**
     * Gets current value of property {@link #getFavoriteState favoriteState}.
     *
     * State Of favorite Action
     *
     * Default value is `false`.
     *
     * @returns Value of property `favoriteState`
     */
    getFavoriteState(): boolean;
    /**
     * Gets current value of property {@link #getFirstTitle firstTitle}.
     *
     * Thing name shown in the header of the QuickView
     *
     * @returns Value of property `firstTitle`
     */
    getFirstTitle(): string;
    /**
     * Gets current value of property {@link #getFirstTitleHref firstTitleHref}.
     *
     * URI to Thing Inspector
     *
     * @returns Value of property `firstTitleHref`
     */
    getFirstTitleHref(): string;
    /**
     * Gets current value of property {@link #getFlagActionEnabled flagActionEnabled}.
     *
     * Flag action enabled/disabled. If disabled the action will be invisible.
     *
     * Default value is `true`.
     *
     * @returns Value of property `flagActionEnabled`
     */
    getFlagActionEnabled(): boolean;
    /**
     * Gets current value of property {@link #getFlagState flagState}.
     *
     * State of Flag Action
     *
     * Default value is `false`.
     *
     * @returns Value of property `flagState`
     */
    getFlagState(): boolean;
    /**
     * Gets current value of property {@link #getFollowActionEnabled followActionEnabled}.
     *
     * Follow action enabled/disabled. If disabled the action will be invisible.
     *
     * Default value is `true`.
     *
     * @returns Value of property `followActionEnabled`
     */
    getFollowActionEnabled(): boolean;
    /**
     * Gets current value of property {@link #getFollowState followState}.
     *
     * Follow State of a Thing
     *
     * Default value is `Default`.
     *
     * @returns Value of property `followState`
     */
    getFollowState(): FollowActionState | keyof typeof FollowActionState;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * URI of the Thing icon image (mandatory). The image is scaled down to the maximal size of 32 pixel (vertical
     * or horizontal).
     *
     * @returns Value of property `icon`
     */
    getIcon(): URI;
    /**
     * Gets current value of property {@link #getOpenActionEnabled openActionEnabled}.
     *
     * Open Thing action enabled/disabled. If disabled the action will be invisible.
     *
     * Default value is `true`.
     *
     * @returns Value of property `openActionEnabled`
     */
    getOpenActionEnabled(): boolean;
    /**
     * Gets current value of property {@link #getSecondTitle secondTitle}.
     *
     * Optional short text shown under the firstTitle
     *
     * @returns Value of property `secondTitle`
     */
    getSecondTitle(): string;
    /**
     * Gets current value of property {@link #getShowActionBar showActionBar}.
     *
     * Show Action Bar
     *
     * Default value is `true`.
     *
     * @returns Value of property `showActionBar`
     */
    getShowActionBar(): boolean;
    /**
     * Gets current value of property {@link #getType type}.
     *
     * Thing type (mandatory) like Account, Material, Employee etc. is displayed in a header at the top part
     * of the QuickView.
     *
     * @returns Value of property `type`
     */
    getType(): string;
    /**
     * Gets current value of property {@link #getUpdateActionEnabled updateActionEnabled}.
     *
     * Update action enabled/disabled. If disabled the action will be invisible.
     *
     * Default value is `true`.
     *
     * @returns Value of property `updateActionEnabled`
     */
    getUpdateActionEnabled(): boolean;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Control width as common CSS-size (px or % as unit, for example).
     *
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
    /**
     * Checks for the provided `sap.ui.ux3.ThingAction` in the aggregation {@link #getActions actions}. and
     * returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfAction(
      /**
       * The action whose index is looked for
       */
      oAction: ThingAction
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Element` in the aggregation {@link #getContent content}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfContent(
      /**
       * The content whose index is looked for
       */
      oContent: UI5Element
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
      oAction: ThingAction,
      /**
       * The `0`-based index the action should be inserted at; for a negative value of `iIndex`, the action is
       * inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted
       * at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a content into the aggregation {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
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
     * Removes a action from the aggregation {@link #getActions actions}.
     *
     * @returns The removed action or `null`
     */
    removeAction(
      /**
       * The action to remove or its index or id
       */
      vAction: int | string | ThingAction
    ): ThingAction | null;
    /**
     * Removes all the controls from the aggregation {@link #getActions actions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllActions(): ThingAction[];
    /**
     * Removes all the controls from the aggregation {@link #getContent content}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllContent(): UI5Element[];
    /**
     * Removes a content from the aggregation {@link #getContent content}.
     *
     * @returns The removed content or `null`
     */
    removeContent(
      /**
       * The content to remove or its index or id
       */
      vContent: int | string | UI5Element
    ): UI5Element | null;
    /**
     * Sets the aggregated {@link #getActionBar actionBar}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setActionBar(
      /**
       * The actionBar to set
       */
      oActionBar: ActionBar
    ): this;
    /**
     * Sets a new value for property {@link #getFavoriteActionEnabled favoriteActionEnabled}.
     *
     * Favorite action enabled/disabled. If disabled the action will be invisible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFavoriteActionEnabled(
      /**
       * New value for property `favoriteActionEnabled`
       */
      bFavoriteActionEnabled?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getFavoriteState favoriteState}.
     *
     * State Of favorite Action
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFavoriteState(
      /**
       * New value for property `favoriteState`
       */
      bFavoriteState?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getFirstTitle firstTitle}.
     *
     * Thing name shown in the header of the QuickView
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFirstTitle(
      /**
       * New value for property `firstTitle`
       */
      sFirstTitle?: string
    ): this;
    /**
     * Sets a new value for property {@link #getFirstTitleHref firstTitleHref}.
     *
     * URI to Thing Inspector
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFirstTitleHref(
      /**
       * New value for property `firstTitleHref`
       */
      sFirstTitleHref?: string
    ): this;
    /**
     * Sets a new value for property {@link #getFlagActionEnabled flagActionEnabled}.
     *
     * Flag action enabled/disabled. If disabled the action will be invisible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFlagActionEnabled(
      /**
       * New value for property `flagActionEnabled`
       */
      bFlagActionEnabled?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getFlagState flagState}.
     *
     * State of Flag Action
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFlagState(
      /**
       * New value for property `flagState`
       */
      bFlagState?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getFollowActionEnabled followActionEnabled}.
     *
     * Follow action enabled/disabled. If disabled the action will be invisible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFollowActionEnabled(
      /**
       * New value for property `followActionEnabled`
       */
      bFollowActionEnabled?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getFollowState followState}.
     *
     * Follow State of a Thing
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Default`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFollowState(
      /**
       * New value for property `followState`
       */
      sFollowState?: FollowActionState | keyof typeof FollowActionState
    ): this;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * URI of the Thing icon image (mandatory). The image is scaled down to the maximal size of 32 pixel (vertical
     * or horizontal).
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
     * Sets a new value for property {@link #getOpenActionEnabled openActionEnabled}.
     *
     * Open Thing action enabled/disabled. If disabled the action will be invisible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setOpenActionEnabled(
      /**
       * New value for property `openActionEnabled`
       */
      bOpenActionEnabled?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSecondTitle secondTitle}.
     *
     * Optional short text shown under the firstTitle
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * Sets a new value for property {@link #getShowActionBar showActionBar}.
     *
     * Show Action Bar
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowActionBar(
      /**
       * New value for property `showActionBar`
       */
      bShowActionBar?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getType type}.
     *
     * Thing type (mandatory) like Account, Material, Employee etc. is displayed in a header at the top part
     * of the QuickView.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setType(
      /**
       * New value for property `type`
       */
      sType?: string
    ): this;
    /**
     * Sets a new value for property {@link #getUpdateActionEnabled updateActionEnabled}.
     *
     * Update action enabled/disabled. If disabled the action will be invisible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setUpdateActionEnabled(
      /**
       * New value for property `updateActionEnabled`
       */
      bUpdateActionEnabled?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Control width as common CSS-size (px or % as unit, for example).
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

  export interface $QuickViewSettings extends $CalloutBaseSettings {
    /**
     * Thing type (mandatory) like Account, Material, Employee etc. is displayed in a header at the top part
     * of the QuickView.
     */
    type?: string | PropertyBindingInfo;

    /**
     * Thing name shown in the header of the QuickView
     */
    firstTitle?: string | PropertyBindingInfo;

    /**
     * URI to Thing Inspector
     */
    firstTitleHref?: string | PropertyBindingInfo;

    /**
     * Optional short text shown under the firstTitle
     */
    secondTitle?: string | PropertyBindingInfo;

    /**
     * URI of the Thing icon image (mandatory). The image is scaled down to the maximal size of 32 pixel (vertical
     * or horizontal).
     */
    icon?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * Control width as common CSS-size (px or % as unit, for example).
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Show Action Bar
     */
    showActionBar?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Follow State of a Thing
     */
    followState?:
      | (FollowActionState | keyof typeof FollowActionState)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * State of Flag Action
     */
    flagState?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * State Of favorite Action
     */
    favoriteState?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Favorite action enabled/disabled. If disabled the action will be invisible.
     */
    favoriteActionEnabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Update action enabled/disabled. If disabled the action will be invisible.
     */
    updateActionEnabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Follow action enabled/disabled. If disabled the action will be invisible.
     */
    followActionEnabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Flag action enabled/disabled. If disabled the action will be invisible.
     */
    flagActionEnabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Open Thing action enabled/disabled. If disabled the action will be invisible.
     */
    openActionEnabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Body content of the QuickView
     */
    content?:
      | UI5Element[]
      | UI5Element
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Actions of a Thing
     */
    actions?:
      | ThingAction[]
      | ThingAction
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * ActionBar. If no actionBar is set a default ActionBar will be created. In any case, ActionBar is displayed
     * only when the showActionBar property is set to true.
     */
    actionBar?: ActionBar;

    /**
     * Action is selected in Action Bar
     */
    actionSelected?: (oEvent: Event) => void;

    /**
     * Fired when a new feed entry is submitted.
     */
    feedSubmit?: (oEvent: Event) => void;

    /**
     * Event is fired when a user clicks on the firstTitle link. Call the preventDefault method of the event
     * object to cancel browser navigation.
     */
    navigate?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/ux3/Shell" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import Item from "sap/ui/core/Item";

  import ToolPopup from "sap/ui/ux3/ToolPopup";

  import NavigationItem from "sap/ui/ux3/NavigationItem";

  import Event from "sap/ui/base/Event";

  import { URI, ID } from "sap/ui/core/library";

  import { ShellDesignType, ShellHeaderType } from "sap/ui/ux3/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import NotificationBar from "sap/ui/ux3/NotificationBar";

  import SearchField from "sap/ui/commons/SearchField";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38) - replaced by {@link sap.m.Shell}
   *
   * The Ux3 GoldReflection Shell, which is an application frame with navigation capabilities. It is supposed
   * to be added to a direct child of the BODY tag of a page and there should be no other parts of the page
   * consuming space outside the Shell.
   */
  export default class Shell extends Control {
    /**
     * Constructor for a new Shell.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $ShellSettings
    );
    /**
     * Constructor for a new Shell.
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
      mSettings?: $ShellSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.Shell with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Shell>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.Shell.
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
     * Adds some headerItem to the aggregation {@link #getHeaderItems headerItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addHeaderItem(
      /**
       * The headerItem to add; if empty, nothing is inserted
       */
      oHeaderItem: Control
    ): this;
    /**
     * Adds some paneBarItem to the aggregation {@link #getPaneBarItems paneBarItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addPaneBarItem(
      /**
       * The paneBarItem to add; if empty, nothing is inserted
       */
      oPaneBarItem: Item
    ): this;
    /**
     * Adds some paneContent to the aggregation {@link #getPaneContent paneContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addPaneContent(
      /**
       * The paneContent to add; if empty, nothing is inserted
       */
      oPaneContent: Control
    ): this;
    /**
     * Adds some toolPopup to the aggregation {@link #getToolPopups toolPopups}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addToolPopup(
      /**
       * The toolPopup to add; if empty, nothing is inserted
       */
      oToolPopup: ToolPopup
    ): this;
    /**
     * Adds some worksetItem to the aggregation {@link #getWorksetItems worksetItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addWorksetItem(
      /**
       * The worksetItem to add; if empty, nothing is inserted
       */
      oWorksetItem: NavigationItem
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.Shell`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
     *
     * Fired when a new feed entry is submitted.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFeedSubmit(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.Shell`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
     *
     * Fired when a new feed entry is submitted.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFeedSubmit(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:logout logout} event of this `sap.ui.ux3.Shell`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
     *
     * Fired when the user clicks the "Log-off" button
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachLogout(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:logout logout} event of this `sap.ui.ux3.Shell`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
     *
     * Fired when the user clicks the "Log-off" button
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachLogout(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:paneBarItemSelected paneBarItemSelected} event
     * of this `sap.ui.ux3.Shell`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
     *
     * An item in the right-hand-side pane bar has been selected, the pane is now visible and can be filled
     * with UI elements.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPaneBarItemSelected(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:paneBarItemSelected paneBarItemSelected} event
     * of this `sap.ui.ux3.Shell`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
     *
     * An item in the right-hand-side pane bar has been selected, the pane is now visible and can be filled
     * with UI elements.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPaneBarItemSelected(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.12.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:paneClosed paneClosed} event of this `sap.ui.ux3.Shell`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
     *
     * Fired after a side pane of the shell is closed. It is also fired, when an open pane is closed by calling
     * setShowPane(false), if and only if the pane was opened before.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPaneClosed(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.12.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:paneClosed paneClosed} event of this `sap.ui.ux3.Shell`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
     *
     * Fired after a side pane of the shell is closed. It is also fired, when an open pane is closed by calling
     * setShowPane(false), if and only if the pane was opened before.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPaneClosed(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.Shell`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
     *
     * Fired when search has been triggered.
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.Shell`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
     *
     * Fired when search has been triggered.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSearch(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:worksetItemSelected worksetItemSelected} event
     * of this `sap.ui.ux3.Shell`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
     *
     * Fired when a workset item was selected by the user. The application may populate the sub-items of the
     * given workset item in the event handler, but this must happen synchronously. If this is done, the application
     * is responsible for displaying the correct content for the selected one of the newly created sub-items.
     * The Shell will currently always mark the first sub-item as selected.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachWorksetItemSelected(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:worksetItemSelected worksetItemSelected} event
     * of this `sap.ui.ux3.Shell`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
     *
     * Fired when a workset item was selected by the user. The application may populate the sub-items of the
     * given workset item in the event handler, but this must happen synchronously. If this is done, the application
     * is responsible for displaying the correct content for the selected one of the newly created sub-items.
     * The Shell will currently always mark the first sub-item as selected.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachWorksetItemSelected(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
       */
      oListener?: object
    ): this;
    /**
     * Closes the side Pane (if open).
     *
     * Returns 'this' to allow method chaining.
     */
    closePane(): this;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;
    /**
     * Destroys all the headerItems in the aggregation {@link #getHeaderItems headerItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyHeaderItems(): this;
    /**
     * @SINCE 1.7.0
     *
     * Destroys the notificationBar in the aggregation {@link #getNotificationBar notificationBar}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyNotificationBar(): this;
    /**
     * Destroys all the paneBarItems in the aggregation {@link #getPaneBarItems paneBarItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyPaneBarItems(): this;
    /**
     * Destroys all the paneContent in the aggregation {@link #getPaneContent paneContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyPaneContent(): this;
    /**
     * Destroys all the toolPopups in the aggregation {@link #getToolPopups toolPopups}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyToolPopups(): this;
    /**
     * Destroys all the worksetItems in the aggregation {@link #getWorksetItems worksetItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyWorksetItems(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.Shell`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachFeedSubmit(
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
     * Detaches event handler `fnFunction` from the {@link #event:logout logout} event of this `sap.ui.ux3.Shell`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachLogout(
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
     * Detaches event handler `fnFunction` from the {@link #event:paneBarItemSelected paneBarItemSelected} event
     * of this `sap.ui.ux3.Shell`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachPaneBarItemSelected(
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
     * @SINCE 1.12.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:paneClosed paneClosed} event of this `sap.ui.ux3.Shell`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachPaneClosed(
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
     * Detaches event handler `fnFunction` from the {@link #event:search search} event of this `sap.ui.ux3.Shell`.
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
     * Detaches event handler `fnFunction` from the {@link #event:worksetItemSelected worksetItemSelected} event
     * of this `sap.ui.ux3.Shell`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachWorksetItemSelected(
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
     * Fires event {@link #event:feedSubmit feedSubmit} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireFeedSubmit(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:logout logout} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireLogout(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:paneBarItemSelected paneBarItemSelected} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    firePaneBarItemSelected(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The ID of the selected PaneBarItem.
         */
        id?: string;
        /**
         * The selected Item
         */
        item?: Item;
        /**
         * The key of the selected Item (or null if there is no key)
         */
        key?: string;
      }
    ): this;
    /**
     * @SINCE 1.12.0
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:paneClosed paneClosed} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    firePaneClosed(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The id of the PaneBarItem to which the closed pane belonged.
         */
        id?: string;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
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
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:worksetItemSelected worksetItemSelected} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireWorksetItemSelected(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The id of the workset item that has been newly selected by the user. If a top-level item has been clicked
         * which has sub-items, the ID of the currently active sub-item (/leaf) is given.
         */
        id?: string;
        /**
         * The selected NavigationItem
         */
        item?: NavigationItem;
        /**
         * The key of the selected NavigationItem (or null if there is no key)
         */
        key?: string;
      }
    ): boolean;
    /**
     * @SINCE 1.14.0
     *
     * Gets current value of property {@link #getAllowOverlayHeaderAccess allowOverlayHeaderAccess}.
     *
     * Whether the Shell header (Title Area + Header Items) can be accessed when an Overlay, OverlayContainer
     * or ThingInspector is open.
     *
     * Default value is `false`.
     *
     * @returns Value of property `allowOverlayHeaderAccess`
     */
    getAllowOverlayHeaderAccess(): boolean;
    /**
     * Gets current value of property {@link #getAppIcon appIcon}.
     *
     * The URL of the image to appear in the left part of the header, usually a branding image containing a
     * logo and/or product name. appIcon and appTitle are both optional and can both be set; in this case the
     * icon appears first. If the appIcon is set, for accessibility reasons the appIconTooltip must also be
     * set.
     *
     * @returns Value of property `appIcon`
     */
    getAppIcon(): URI;
    /**
     * Gets current value of property {@link #getAppIconTooltip appIconTooltip}.
     *
     * The tooltip of the application icon in the header
     *
     * @returns Value of property `appIconTooltip`
     */
    getAppIconTooltip(): string;
    /**
     * @SINCE 1.9.0
     *
     * Gets current value of property {@link #getApplyContentPadding applyContentPadding}.
     *
     * Whether the Shell content area should have a theme-dependent padding or not.
     *
     * Default value is `true`.
     *
     * @returns Value of property `applyContentPadding`
     */
    getApplyContentPadding(): boolean;
    /**
     * Gets current value of property {@link #getAppTitle appTitle}.
     *
     * The application title to appear in the left part of the header, usually a company and/or product name.
     * appIcon and appTitle are both optional and can both be set; in this case the icon appears first.
     *
     * @returns Value of property `appTitle`
     */
    getAppTitle(): string;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * The content to appear in the main canvas. Each modification of this aggregation leads to a re-rendering
     * of the content area - but not to a re-rendering of the complete Shell.
     */
    getContent(): Control[];
    /**
     * @SINCE 1.12.0
     *
     * Gets current value of property {@link #getDesignType designType}.
     *
     * Defines which design type is to be used.
     *
     * Default value is `Standard`.
     *
     * @returns Value of property `designType`
     */
    getDesignType(): ShellDesignType | keyof typeof ShellDesignType;
    /**
     * @SINCE 1.9.0
     *
     * Gets current value of property {@link #getFullHeightContent fullHeightContent}.
     *
     * If set to true, the content area has a defined height. This means that any content put inside can use
     * "100%" height in CSS and will then consume all available space. However, if content is larger, scrollbars
     * will appear at the content area of the Shell and not on window level.
     *
     * Default value is `false`.
     *
     * @returns Value of property `fullHeightContent`
     */
    getFullHeightContent(): boolean;
    /**
     * Gets content of aggregation {@link #getHeaderItems headerItems}.
     *
     * Controls to appear in the header next to the logout button. It is recommended to only use controls of
     * type Button, MenuButton and TextView. The respective UI guidelines need to be enforced on a higher level.
     */
    getHeaderItems(): Control[];
    /**
     * Gets current value of property {@link #getHeaderType headerType}.
     *
     * Defines which header type to be used. Depending on the header type some other functionality might be
     * obsolete.
     *
     * Default value is `Standard`.
     *
     * @returns Value of property `headerType`
     */
    getHeaderType(): ShellHeaderType | keyof typeof ShellHeaderType;
    /**
     * @SINCE 1.9.0
     *
     * Gets current value of property {@link #getLogoutButtonTooltip logoutButtonTooltip}.
     *
     * The tooltip to be displayed for the Logout Button of the Shell. If not set, a text meaning "Logout" in
     * the current language will be displayed.
     *
     * @returns Value of property `logoutButtonTooltip`
     */
    getLogoutButtonTooltip(): string;
    /**
     * @SINCE 1.7.0
     *
     * Gets content of aggregation {@link #getNotificationBar notificationBar}.
     *
     * The NotificationBar which should be integrated into the Shell.
     */
    getNotificationBar(): NotificationBar;
    /**
     * Gets content of aggregation {@link #getPaneBarItems paneBarItems}.
     *
     * The items to appear in the PaneBar.
     */
    getPaneBarItems(): Item[];
    /**
     * Gets content of aggregation {@link #getPaneContent paneContent}.
     *
     * The content to appear in the pane area.
     */
    getPaneContent(): Control[];
    /**
     * Gets current value of property {@link #getPaneWidth paneWidth}.
     *
     * The width of the right-hand side pane in pixels. The value must be a non-negative integer. The Shell
     * reserves the right to define a minimum width (currently 50px).
     *
     * Default value is `250`.
     *
     * @returns Value of property `paneWidth`
     */
    getPaneWidth(): int;
    /**
     * Returns the SearchField control which is used in the Search Tool.
     */
    getSearchField(): SearchField;
    /**
     * ID of the element which is the current target of the association {@link #getSelectedWorksetItem selectedWorksetItem},
     * or `null`.
     */
    getSelectedWorksetItem(): ID;
    /**
     * Gets current value of property {@link #getShowFeederTool showFeederTool}.
     *
     * Whether the "Feeder" tool should be displayed or not.
     *
     * Default value is `true`.
     *
     * @returns Value of property `showFeederTool`
     */
    getShowFeederTool(): boolean;
    /**
     * @deprecated (since 1.7.2) - According to the current Ux designs, the ThingInspector should NOT be opened
     * like this from the Tool Pane. And technically, the ThingInspector is not a ToolPopup. Instead trigger
     * it from the respective elements in the Shell content.
     *
     * Gets current value of property {@link #getShowInspectorTool showInspectorTool}.
     *
     * Whether the "Inspector" tool should be displayed or not.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showInspectorTool`
     */
    getShowInspectorTool(): boolean;
    /**
     * Gets current value of property {@link #getShowLogoutButton showLogoutButton}.
     *
     * Whether the Logoff button in the header should be displayed or not.
     *
     * Default value is `true`.
     *
     * @returns Value of property `showLogoutButton`
     */
    getShowLogoutButton(): boolean;
    /**
     * Gets current value of property {@link #getShowPane showPane}.
     *
     * Whether the pane bar should be displayed at all or not.
     *
     * Default value is `true`.
     *
     * @returns Value of property `showPane`
     */
    getShowPane(): boolean;
    /**
     * Gets current value of property {@link #getShowSearchTool showSearchTool}.
     *
     * Whether the "Global Search" tool should be displayed or not.
     *
     * Default value is `true`.
     *
     * @returns Value of property `showSearchTool`
     */
    getShowSearchTool(): boolean;
    /**
     * Gets current value of property {@link #getShowTools showTools}.
     *
     * Whether the tool area should be displayed at all or not.
     *
     * Default value is `true`.
     *
     * @returns Value of property `showTools`
     */
    getShowTools(): boolean;
    /**
     * Gets content of aggregation {@link #getToolPopups toolPopups}.
     *
     * The items which appear in the ToolPalette and are opened as popup when clicked.
     */
    getToolPopups(): ToolPopup[];
    /**
     * Gets content of aggregation {@link #getWorksetItems worksetItems}.
     *
     * The workset items.
     */
    getWorksetItems(): NavigationItem[];
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
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getHeaderItems headerItems}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfHeaderItem(
      /**
       * The headerItem whose index is looked for
       */
      oHeaderItem: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Item` in the aggregation {@link #getPaneBarItems paneBarItems}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfPaneBarItem(
      /**
       * The paneBarItem whose index is looked for
       */
      oPaneBarItem: Item
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getPaneContent paneContent}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfPaneContent(
      /**
       * The paneContent whose index is looked for
       */
      oPaneContent: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.ux3.ToolPopup` in the aggregation {@link #getToolPopups toolPopups}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfToolPopup(
      /**
       * The toolPopup whose index is looked for
       */
      oToolPopup: ToolPopup
    ): int;
    /**
     * Checks for the provided `sap.ui.ux3.NavigationItem` in the aggregation {@link #getWorksetItems worksetItems}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfWorksetItem(
      /**
       * The worksetItem whose index is looked for
       */
      oWorksetItem: NavigationItem
    ): int;
    /**
     * Experimental method! Do not use!
     *
     * Makes Shell personalization available and injects the given personalization settings. This should be
     * called before the user can do any adaptations per drag&drop or using the personalization dialog. Otherwise
     * it may override the user's new settings.
     */
    initializePersonalization(
      /**
       * Personalization settings object
       */
      oSettings: object
    ): void;
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
     * Inserts a headerItem into the aggregation {@link #getHeaderItems headerItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertHeaderItem(
      /**
       * The headerItem to insert; if empty, nothing is inserted
       */
      oHeaderItem: Control,
      /**
       * The `0`-based index the headerItem should be inserted at; for a negative value of `iIndex`, the headerItem
       * is inserted at position 0; for a value greater than the current size of the aggregation, the headerItem
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a paneBarItem into the aggregation {@link #getPaneBarItems paneBarItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertPaneBarItem(
      /**
       * The paneBarItem to insert; if empty, nothing is inserted
       */
      oPaneBarItem: Item,
      /**
       * The `0`-based index the paneBarItem should be inserted at; for a negative value of `iIndex`, the paneBarItem
       * is inserted at position 0; for a value greater than the current size of the aggregation, the paneBarItem
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a paneContent into the aggregation {@link #getPaneContent paneContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertPaneContent(
      /**
       * The paneContent to insert; if empty, nothing is inserted
       */
      oPaneContent: Control,
      /**
       * The `0`-based index the paneContent should be inserted at; for a negative value of `iIndex`, the paneContent
       * is inserted at position 0; for a value greater than the current size of the aggregation, the paneContent
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a toolPopup into the aggregation {@link #getToolPopups toolPopups}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertToolPopup(
      /**
       * The toolPopup to insert; if empty, nothing is inserted
       */
      oToolPopup: ToolPopup,
      /**
       * The `0`-based index the toolPopup should be inserted at; for a negative value of `iIndex`, the toolPopup
       * is inserted at position 0; for a value greater than the current size of the aggregation, the toolPopup
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a worksetItem into the aggregation {@link #getWorksetItems worksetItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertWorksetItem(
      /**
       * The worksetItem to insert; if empty, nothing is inserted
       */
      oWorksetItem: NavigationItem,
      /**
       * The `0`-based index the worksetItem should be inserted at; for a negative value of `iIndex`, the worksetItem
       * is inserted at position 0; for a value greater than the current size of the aggregation, the worksetItem
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Returns 'true' if the side Pane is currently open.
     */
    isPaneOpen(): boolean;
    /**
     * Opens the side Pane.
     *
     * A valid ID of a paneBarItem must be given, so this item can be marked as selected. A "paneBarItemSelected"
     * event is then fired as if the opening was triggered by the user by a click on the respective PaneBarItem.
     * This method can be called (with different IDs) even when the Pane is already open. It has then the same
     * effect as if the user switches between PaneBarItems.
     *
     * Returns 'this' to allow method chaining.
     */
    openPane(
      /**
       * The ID of the PaneBarItem which should be marked as selected.
       */
      sPaneBarItemId: string
    ): this;
    /**
     * Experimental method! Do not use!
     */
    openPersonalizationDialog(): void;
    /**
     * Removes all the controls from the aggregation {@link #getContent content}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllContent(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getHeaderItems headerItems}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllHeaderItems(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getPaneBarItems paneBarItems}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllPaneBarItems(): Item[];
    /**
     * Removes all the controls from the aggregation {@link #getPaneContent paneContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllPaneContent(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getToolPopups toolPopups}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllToolPopups(): ToolPopup[];
    /**
     * Removes all the controls from the aggregation {@link #getWorksetItems worksetItems}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllWorksetItems(): NavigationItem[];
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
     * Removes a headerItem from the aggregation {@link #getHeaderItems headerItems}.
     *
     * @returns The removed headerItem or `null`
     */
    removeHeaderItem(
      /**
       * The headerItem to remove or its index or id
       */
      vHeaderItem: int | string | Control
    ): Control | null;
    /**
     * Removes a paneBarItem from the aggregation {@link #getPaneBarItems paneBarItems}.
     *
     * @returns The removed paneBarItem or `null`
     */
    removePaneBarItem(
      /**
       * The paneBarItem to remove or its index or id
       */
      vPaneBarItem: int | string | Item
    ): Item | null;
    /**
     * Removes a paneContent from the aggregation {@link #getPaneContent paneContent}.
     *
     * @returns The removed paneContent or `null`
     */
    removePaneContent(
      /**
       * The paneContent to remove or its index or id
       */
      vPaneContent: int | string | Control
    ): Control | null;
    /**
     * Removes a toolPopup from the aggregation {@link #getToolPopups toolPopups}.
     *
     * @returns The removed toolPopup or `null`
     */
    removeToolPopup(
      /**
       * The toolPopup to remove or its index or id
       */
      vToolPopup: int | string | ToolPopup
    ): ToolPopup | null;
    /**
     * Removes a worksetItem from the aggregation {@link #getWorksetItems worksetItems}.
     *
     * @returns The removed worksetItem or `null`
     */
    removeWorksetItem(
      /**
       * The worksetItem to remove or its index or id
       */
      vWorksetItem: int | string | NavigationItem
    ): NavigationItem | null;
    /**
     * @SINCE 1.14.0
     *
     * Sets a new value for property {@link #getAllowOverlayHeaderAccess allowOverlayHeaderAccess}.
     *
     * Whether the Shell header (Title Area + Header Items) can be accessed when an Overlay, OverlayContainer
     * or ThingInspector is open.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAllowOverlayHeaderAccess(
      /**
       * New value for property `allowOverlayHeaderAccess`
       */
      bAllowOverlayHeaderAccess?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getAppIcon appIcon}.
     *
     * The URL of the image to appear in the left part of the header, usually a branding image containing a
     * logo and/or product name. appIcon and appTitle are both optional and can both be set; in this case the
     * icon appears first. If the appIcon is set, for accessibility reasons the appIconTooltip must also be
     * set.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAppIcon(
      /**
       * New value for property `appIcon`
       */
      sAppIcon?: URI
    ): this;
    /**
     * Sets a new value for property {@link #getAppIconTooltip appIconTooltip}.
     *
     * The tooltip of the application icon in the header
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAppIconTooltip(
      /**
       * New value for property `appIconTooltip`
       */
      sAppIconTooltip?: string
    ): this;
    /**
     * @SINCE 1.9.0
     *
     * Sets a new value for property {@link #getApplyContentPadding applyContentPadding}.
     *
     * Whether the Shell content area should have a theme-dependent padding or not.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setApplyContentPadding(
      /**
       * New value for property `applyContentPadding`
       */
      bApplyContentPadding?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getAppTitle appTitle}.
     *
     * The application title to appear in the left part of the header, usually a company and/or product name.
     * appIcon and appTitle are both optional and can both be set; in this case the icon appears first.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAppTitle(
      /**
       * New value for property `appTitle`
       */
      sAppTitle?: string
    ): this;
    /**
     * Replaces the existing Shell content with the given Control(-Tree). Only leads to a re-rendering of the
     * content area (not the complete Shell). This method may be more convenient than a series of calls to "removeContent"
     * and "addContent", which each lead to a re-rendering of the content area (but again not of the complete
     * Shell).
     *
     * By default the old content is not destroyed and is returned by this method in an array for further usage.
     * To avoid memory leaks, the old content should be destroyed (if not needed later), by setting the "destroyOldContent"
     * flag or by destroying it manually later on. If "destroyOldContent" is set, an empty array is returned.
     */
    setContent(
      /**
       * The new Content. In this method it must be exactly one control (-tree). Use addContent() to add more
       * control (-trees) to the main content area of the Shell.
       */
      oContent: Control,
      /**
       * If set, the controls previously contained in the Shell will be destroyed, to avoid memory leaks.
       */
      bDestroyOldContent: boolean
    ): Control[];
    /**
     * @SINCE 1.12.0
     *
     * Sets a new value for property {@link #getDesignType designType}.
     *
     * Defines which design type is to be used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Standard`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDesignType(
      /**
       * New value for property `designType`
       */
      sDesignType?: ShellDesignType | keyof typeof ShellDesignType
    ): this;
    /**
     * @SINCE 1.9.0
     *
     * Sets a new value for property {@link #getFullHeightContent fullHeightContent}.
     *
     * If set to true, the content area has a defined height. This means that any content put inside can use
     * "100%" height in CSS and will then consume all available space. However, if content is larger, scrollbars
     * will appear at the content area of the Shell and not on window level.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFullHeightContent(
      /**
       * New value for property `fullHeightContent`
       */
      bFullHeightContent?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getHeaderType headerType}.
     *
     * Defines which header type to be used. Depending on the header type some other functionality might be
     * obsolete.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Standard`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderType(
      /**
       * New value for property `headerType`
       */
      sHeaderType?: ShellHeaderType | keyof typeof ShellHeaderType
    ): this;
    /**
     * @SINCE 1.9.0
     *
     * Sets a new value for property {@link #getLogoutButtonTooltip logoutButtonTooltip}.
     *
     * The tooltip to be displayed for the Logout Button of the Shell. If not set, a text meaning "Logout" in
     * the current language will be displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLogoutButtonTooltip(
      /**
       * New value for property `logoutButtonTooltip`
       */
      sLogoutButtonTooltip?: string
    ): this;
    /**
     * @SINCE 1.7.0
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Moves the complete Shell away from the right window border by the given number of pixels (left border
     * in RTL case).
     *
     * So there is space for a sidebar or so outside the Shell. The CSS class 'sapUiUx3ShellOuterSideBar' provides
     * the basic position capabilities for the sidebar DOM element.
     *
     * This feature is not public. The usage is only granted to special groups on request.
     */
    setOffsetRight(
      /**
       * how many pixels of free space should be next to the Shell (between 0 and 600)
       */
      px: int,
      /**
       * optional callback function to call after the animation
       */
      complete?: Function,
      /**
       * optional id of the content representing the outside sidebar. If specified the width of the content is
       * animated.
       */
      outerId?: string
    ): void;
    /**
     * Replaces the existing side pane content with the given Control(-Tree). This method is optimized to only
     * re-render the pane content (and not the shell) which is faster and smoother than any other way of changing
     * the "paneContent" aggregation.
     *
     * By default, the old pane content is not destroyed and is returned by this method in an array for further
     * usage. To avoid memory leaks, the old content should be destroyed (if not needed later), by setting the
     * "destroyOldContent" flag or by destroying it manually later on. If "destroyOldContent" is set, an empty
     * array is returned.
     */
    setPaneContent(
      /**
       * The new Pane content. In this method it must be exactly one control (-tree). This could likely be a layout
       * or a specific ux3 Pane control. Use addPaneContent() to add more control (-trees) to the Pane.
       */
      oContent: Control,
      /**
       * If set, the controls previously contained in the pane will be destroyed, to avoid memory leaks.
       */
      bDestroyOldContent: boolean
    ): Control[];
    /**
     * Sets a new value for property {@link #getPaneWidth paneWidth}.
     *
     * The width of the right-hand side pane in pixels. The value must be a non-negative integer. The Shell
     * reserves the right to define a minimum width (currently 50px).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `250`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setPaneWidth(
      /**
       * New value for property `paneWidth`
       */
      iPaneWidth?: int
    ): this;
    /**
     * Sets the associated {@link #getSelectedWorksetItem selectedWorksetItem}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelectedWorksetItem(
      /**
       * ID of an element which becomes the new target of this selectedWorksetItem association; alternatively,
       * an element instance may be given
       */
      oSelectedWorksetItem: ID | NavigationItem
    ): this;
    /**
     * Sets a new value for property {@link #getShowFeederTool showFeederTool}.
     *
     * Whether the "Feeder" tool should be displayed or not.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowFeederTool(
      /**
       * New value for property `showFeederTool`
       */
      bShowFeederTool?: boolean
    ): this;
    /**
     * @deprecated (since 1.7.2) - According to the current Ux designs, the ThingInspector should NOT be opened
     * like this from the Tool Pane. And technically, the ThingInspector is not a ToolPopup. Instead trigger
     * it from the respective elements in the Shell content.
     *
     * Sets a new value for property {@link #getShowInspectorTool showInspectorTool}.
     *
     * Whether the "Inspector" tool should be displayed or not.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowInspectorTool(
      /**
       * New value for property `showInspectorTool`
       */
      bShowInspectorTool?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowLogoutButton showLogoutButton}.
     *
     * Whether the Logoff button in the header should be displayed or not.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowLogoutButton(
      /**
       * New value for property `showLogoutButton`
       */
      bShowLogoutButton?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowPane showPane}.
     *
     * Whether the pane bar should be displayed at all or not.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowPane(
      /**
       * New value for property `showPane`
       */
      bShowPane?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowSearchTool showSearchTool}.
     *
     * Whether the "Global Search" tool should be displayed or not.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowSearchTool(
      /**
       * New value for property `showSearchTool`
       */
      bShowSearchTool?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowTools showTools}.
     *
     * Whether the tool area should be displayed at all or not.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowTools(
      /**
       * New value for property `showTools`
       */
      bShowTools?: boolean
    ): this;
  }

  export interface $ShellSettings extends $ControlSettings {
    /**
     * The application title to appear in the left part of the header, usually a company and/or product name.
     * appIcon and appTitle are both optional and can both be set; in this case the icon appears first.
     */
    appTitle?: string | PropertyBindingInfo;

    /**
     * The URL of the image to appear in the left part of the header, usually a branding image containing a
     * logo and/or product name. appIcon and appTitle are both optional and can both be set; in this case the
     * icon appears first. If the appIcon is set, for accessibility reasons the appIconTooltip must also be
     * set.
     */
    appIcon?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * The tooltip of the application icon in the header
     */
    appIconTooltip?: string | PropertyBindingInfo;

    /**
     * Whether the Logoff button in the header should be displayed or not.
     */
    showLogoutButton?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.9.0
     *
     * The tooltip to be displayed for the Logout Button of the Shell. If not set, a text meaning "Logout" in
     * the current language will be displayed.
     */
    logoutButtonTooltip?: string | PropertyBindingInfo;

    /**
     * Whether the "Global Search" tool should be displayed or not.
     */
    showSearchTool?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @deprecated (since 1.7.2) - According to the current Ux designs, the ThingInspector should NOT be opened
     * like this from the Tool Pane. And technically, the ThingInspector is not a ToolPopup. Instead trigger
     * it from the respective elements in the Shell content.
     *
     * Whether the "Inspector" tool should be displayed or not.
     */
    showInspectorTool?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Whether the "Feeder" tool should be displayed or not.
     */
    showFeederTool?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Whether the tool area should be displayed at all or not.
     */
    showTools?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Whether the pane bar should be displayed at all or not.
     */
    showPane?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines which header type to be used. Depending on the header type some other functionality might be
     * obsolete.
     */
    headerType?:
      | (ShellHeaderType | keyof typeof ShellHeaderType)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * @SINCE 1.12.0
     *
     * Defines which design type is to be used.
     */
    designType?:
      | (ShellDesignType | keyof typeof ShellDesignType)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * The width of the right-hand side pane in pixels. The value must be a non-negative integer. The Shell
     * reserves the right to define a minimum width (currently 50px).
     */
    paneWidth?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.9.0
     *
     * Whether the Shell content area should have a theme-dependent padding or not.
     */
    applyContentPadding?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.9.0
     *
     * If set to true, the content area has a defined height. This means that any content put inside can use
     * "100%" height in CSS and will then consume all available space. However, if content is larger, scrollbars
     * will appear at the content area of the Shell and not on window level.
     */
    fullHeightContent?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.14.0
     *
     * Whether the Shell header (Title Area + Header Items) can be accessed when an Overlay, OverlayContainer
     * or ThingInspector is open.
     */
    allowOverlayHeaderAccess?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The workset items.
     */
    worksetItems?:
      | NavigationItem[]
      | NavigationItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * The items to appear in the PaneBar.
     */
    paneBarItems?: Item[] | Item | AggregationBindingInfo | `{${string}}`;

    /**
     * The content to appear in the pane area.
     */
    paneContent?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * The content to appear in the main canvas. Each modification of this aggregation leads to a re-rendering
     * of the content area - but not to a re-rendering of the complete Shell.
     */
    content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * The items which appear in the ToolPalette and are opened as popup when clicked.
     */
    toolPopups?:
      | ToolPopup[]
      | ToolPopup
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Controls to appear in the header next to the logout button. It is recommended to only use controls of
     * type Button, MenuButton and TextView. The respective UI guidelines need to be enforced on a higher level.
     */
    headerItems?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.7.0
     *
     * The NotificationBar which should be integrated into the Shell.
     */
    notificationBar?: NotificationBar;

    /**
     * The ID of the Item that is currently selected. When setting, the NavigationItem itself can be given instead
     * of its ID. There will not be a worksetItemSelected event, the application is responsible to show the
     * proper content according to the newly selected WorksetItem. If the set WorksetItem does not exist in
     * this Shell, the first item (and first sub-item) will be selected after the call. When getting, always
     * the ID is returned, by which the NavigationItem instance can be retrieved.
     */
    selectedWorksetItem?: NavigationItem | string;

    /**
     * Fired when a workset item was selected by the user. The application may populate the sub-items of the
     * given workset item in the event handler, but this must happen synchronously. If this is done, the application
     * is responsible for displaying the correct content for the selected one of the newly created sub-items.
     * The Shell will currently always mark the first sub-item as selected.
     */
    worksetItemSelected?: (oEvent: Event) => void;

    /**
     * An item in the right-hand-side pane bar has been selected, the pane is now visible and can be filled
     * with UI elements.
     */
    paneBarItemSelected?: (oEvent: Event) => void;

    /**
     * Fired when the user clicks the "Log-off" button
     */
    logout?: (oEvent: Event) => void;

    /**
     * Fired when search has been triggered.
     */
    search?: (oEvent: Event) => void;

    /**
     * Fired when a new feed entry is submitted.
     */
    feedSubmit?: (oEvent: Event) => void;

    /**
     * @SINCE 1.12.0
     *
     * Fired after a side pane of the shell is closed. It is also fired, when an open pane is closed by calling
     * setShowPane(false), if and only if the pane was opened before.
     */
    paneClosed?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/ux3/ThingAction" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import Event from "sap/ui/base/Event";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38)
   *
   * Thing Action for Swatch, QuickView, Thinginspector
   */
  export default class ThingAction extends UI5Element {
    /**
     * Constructor for a new ThingAction.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $ThingActionSettings
    );
    /**
     * Constructor for a new ThingAction.
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
      mSettings?: $ThingActionSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.ThingAction with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, ThingAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.ThingAction.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.ux3.ThingAction`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ThingAction` itself.
     *
     * Event will be fired when the action was triggered.
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
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ThingAction` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.ux3.ThingAction`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ThingAction` itself.
     *
     * Event will be fired when the action was triggered.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ThingAction` itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.ux3.ThingAction`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSelect(
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
     * Fires event {@link #event:select select} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Id of selected action
         */
        id?: string;
        /**
         * Selected Thing Action
         */
        action?: ThingAction;
      }
    ): this;
    /**
     * Gets current value of property {@link #getEnabled enabled}.
     *
     * action enabled (true/false)
     *
     * Default value is `true`.
     *
     * @returns Value of property `enabled`
     */
    getEnabled(): boolean;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * text of action
     *
     * @returns Value of property `text`
     */
    getText(): string;
    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     *
     * action enabled (true/false)
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
     * Sets a new value for property {@link #getText text}.
     *
     * text of action
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

  export interface $ThingActionSettings extends $ElementSettings {
    /**
     * text of action
     */
    text?: string | PropertyBindingInfo;

    /**
     * action enabled (true/false)
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Event will be fired when the action was triggered.
     */
    select?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/ux3/ThingGroup" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import Control from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38)
   *
   * Thing Group Area
   */
  export default class ThingGroup extends UI5Element {
    /**
     * Constructor for a new ThingGroup.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $ThingGroupSettings
    );
    /**
     * Constructor for a new ThingGroup.
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
      mSettings?: $ThingGroupSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.ThingGroup with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, ThingGroup>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.ThingGroup.
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
      oAction: ThingGroup
    ): this;
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
     * Destroys all the actions in the aggregation {@link #getActions actions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyActions(): this;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;
    /**
     * Gets content of aggregation {@link #getActions actions}.
     *
     * Actions of the groups content
     */
    getActions(): ThingGroup[];
    /**
     * Gets current value of property {@link #getColspan colspan}.
     *
     * If Group is used in a column layout the groups spans the all columns if set to true.
     *
     * Default value is `false`.
     *
     * @returns Value of property `colspan`
     */
    getColspan(): boolean;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Content of Group
     */
    getContent(): Control[];
    /**
     * Gets current value of property {@link #getTitle title}.
     *
     * Title of Group
     *
     * @returns Value of property `title`
     */
    getTitle(): string;
    /**
     * Checks for the provided `sap.ui.ux3.ThingGroup` in the aggregation {@link #getActions actions}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfAction(
      /**
       * The action whose index is looked for
       */
      oAction: ThingGroup
    ): int;
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
     * Inserts a action into the aggregation {@link #getActions actions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertAction(
      /**
       * The action to insert; if empty, nothing is inserted
       */
      oAction: ThingGroup,
      /**
       * The `0`-based index the action should be inserted at; for a negative value of `iIndex`, the action is
       * inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted
       * at the last position
       */
      iIndex: int
    ): this;
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
     * Removes a action from the aggregation {@link #getActions actions}.
     *
     * @returns The removed action or `null`
     */
    removeAction(
      /**
       * The action to remove or its index or id
       */
      vAction: int | string | ThingGroup
    ): ThingGroup | null;
    /**
     * Removes all the controls from the aggregation {@link #getActions actions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllActions(): ThingGroup[];
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
     * Sets a new value for property {@link #getColspan colspan}.
     *
     * If Group is used in a column layout the groups spans the all columns if set to true.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setColspan(
      /**
       * New value for property `colspan`
       */
      bColspan?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getTitle title}.
     *
     * Title of Group
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

  export interface $ThingGroupSettings extends $ElementSettings {
    /**
     * Title of Group
     */
    title?: string | PropertyBindingInfo;

    /**
     * If Group is used in a column layout the groups spans the all columns if set to true.
     */
    colspan?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Content of Group
     */
    content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Actions of the groups content
     */
    actions?:
      | ThingGroup[]
      | ThingGroup
      | AggregationBindingInfo
      | `{${string}}`;
  }
}

declare module "sap/ui/ux3/ThingInspector" {
  import { default as Overlay, $OverlaySettings } from "sap/ui/ux3/Overlay";

  import ThingAction from "sap/ui/ux3/ThingAction";

  import NavigationItem from "sap/ui/ux3/NavigationItem";

  import ThingGroup from "sap/ui/ux3/ThingGroup";

  import Event from "sap/ui/base/Event";

  import ActionBar from "sap/ui/ux3/ActionBar";

  import { FollowActionState, ThingViewerHeaderType } from "sap/ui/ux3/library";

  import { URI, ID } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38) - There is not an exact replacement.
   *
   * Thing Inspector
   */
  export default class ThingInspector extends Overlay {
    /**
     * Constructor for a new ThingInspector.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $ThingInspectorSettings
    );
    /**
     * Constructor for a new ThingInspector.
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
      mSettings?: $ThingInspectorSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.ThingInspector with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.ux3.Overlay.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ThingInspector>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.ThingInspector.
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
      oAction: ThingAction
    ): this;
    /**
     * Adds some facet to the aggregation {@link #getFacets facets}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addFacet(
      /**
       * The facet to add; if empty, nothing is inserted
       */
      oFacet: NavigationItem
    ): this;
    /**
     * Adds some facetContent to the aggregation {@link #getFacetContent facetContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addFacetContent(
      /**
       * The facetContent to add; if empty, nothing is inserted
       */
      oFacetContent: ThingGroup
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
      oHeaderContent: ThingGroup
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:actionSelected actionSelected} event of this
     * `sap.ui.ux3.ThingInspector`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ThingInspector` itself.
     *
     * Further thing related Action selected
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachActionSelected(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ThingInspector` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:actionSelected actionSelected} event of this
     * `sap.ui.ux3.ThingInspector`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ThingInspector` itself.
     *
     * Further thing related Action selected
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachActionSelected(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ThingInspector` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:facetSelected facetSelected} event of this `sap.ui.ux3.ThingInspector`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ThingInspector` itself.
     *
     * Event for facet selection. The application is responsible for displaying the correct content for the
     * selected one. The ThingInspector will currently always mark the first facet as selected.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFacetSelected(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ThingInspector` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:facetSelected facetSelected} event of this `sap.ui.ux3.ThingInspector`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ThingInspector` itself.
     *
     * Event for facet selection. The application is responsible for displaying the correct content for the
     * selected one. The ThingInspector will currently always mark the first facet as selected.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFacetSelected(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ThingInspector` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.ThingInspector`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ThingInspector` itself.
     *
     * Fired when a new feed entry is submitted.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFeedSubmit(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ThingInspector` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.ThingInspector`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ThingInspector` itself.
     *
     * Fired when a new feed entry is submitted.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFeedSubmit(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ThingInspector` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys the actionBar in the aggregation {@link #getActionBar actionBar}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyActionBar(): this;
    /**
     * Destroys all the actions in the aggregation {@link #getActions actions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyActions(): this;
    /**
     * Destroys all the facetContent in the aggregation {@link #getFacetContent facetContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFacetContent(): this;
    /**
     * Destroys all the facets in the aggregation {@link #getFacets facets}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFacets(): this;
    /**
     * Destroys all the headerContent in the aggregation {@link #getHeaderContent headerContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyHeaderContent(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:actionSelected actionSelected} event of this
     * `sap.ui.ux3.ThingInspector`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachActionSelected(
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
     * Detaches event handler `fnFunction` from the {@link #event:facetSelected facetSelected} event of this
     * `sap.ui.ux3.ThingInspector`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachFacetSelected(
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
     * Detaches event handler `fnFunction` from the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.ThingInspector`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachFeedSubmit(
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
     * Fires event {@link #event:actionSelected actionSelected} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireActionSelected(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Id of selected ThingAction
         */
        id?: string;
        /**
         * Selected ThingAction
         */
        action?: ThingAction;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:facetSelected facetSelected} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireFacetSelected(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Id of selected NavigationItem
         */
        id?: string;
        /**
         * The selected NavigationItem
         */
        item?: NavigationItem;
        /**
         * Key of selected NavigationItem
         */
        key?: string;
      }
    ): boolean;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:feedSubmit feedSubmit} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireFeedSubmit(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Feed text
         */
        text?: string;
      }
    ): this;
    /**
     * Gets content of aggregation {@link #getActionBar actionBar}.
     *
     * ActionBar. If no actionBar is set a default ActionBar will be created.
     */
    getActionBar(): ActionBar;
    /**
     * Gets content of aggregation {@link #getActions actions}.
     *
     * Actions of a Thing
     */
    getActions(): ThingAction[];
    /**
     * Gets content of aggregation {@link #getFacetContent facetContent}.
     *
     * ThingGroups for content of the selected facet
     */
    getFacetContent(): ThingGroup[];
    /**
     * Gets content of aggregation {@link #getFacets facets}.
     *
     * Thing Inspector facets
     */
    getFacets(): NavigationItem[];
    /**
     * Gets current value of property {@link #getFavoriteActionEnabled favoriteActionEnabled}.
     *
     * Favorite action enabled/disabled. If disabled the action will be invisible.
     *
     * Default value is `true`.
     *
     * @returns Value of property `favoriteActionEnabled`
     */
    getFavoriteActionEnabled(): boolean;
    /**
     * Gets current value of property {@link #getFavoriteState favoriteState}.
     *
     * State Of favorite Action
     *
     * Default value is `false`.
     *
     * @returns Value of property `favoriteState`
     */
    getFavoriteState(): boolean;
    /**
     * Gets current value of property {@link #getFirstTitle firstTitle}.
     *
     * First Line of the Thing Inspector Title
     *
     * @returns Value of property `firstTitle`
     */
    getFirstTitle(): string;
    /**
     * Gets current value of property {@link #getFlagActionEnabled flagActionEnabled}.
     *
     * Flag action enabled/disabled. If disabled the action will be invisible.
     *
     * Default value is `true`.
     *
     * @returns Value of property `flagActionEnabled`
     */
    getFlagActionEnabled(): boolean;
    /**
     * Gets current value of property {@link #getFlagState flagState}.
     *
     * State of Flag Action
     *
     * Default value is `false`.
     *
     * @returns Value of property `flagState`
     */
    getFlagState(): boolean;
    /**
     * Gets current value of property {@link #getFollowActionEnabled followActionEnabled}.
     *
     * Follow action enabled/disabled. If disabled the action will be invisible.
     *
     * Default value is `true`.
     *
     * @returns Value of property `followActionEnabled`
     */
    getFollowActionEnabled(): boolean;
    /**
     * Gets current value of property {@link #getFollowState followState}.
     *
     * Follow State of a Thing
     *
     * Default value is `Default`.
     *
     * @returns Value of property `followState`
     */
    getFollowState(): FollowActionState | keyof typeof FollowActionState;
    /**
     * Gets content of aggregation {@link #getHeaderContent headerContent}.
     *
     * ThingGroups for the header content
     */
    getHeaderContent(): ThingGroup[];
    /**
     * @SINCE 1.16.3
     *
     * Gets current value of property {@link #getHeaderType headerType}.
     *
     * Defines which header type should be used.
     *
     * Default value is `Standard`.
     *
     * @returns Value of property `headerType`
     */
    getHeaderType(): ThingViewerHeaderType | keyof typeof ThingViewerHeaderType;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Thing Icon Url
     *
     * @returns Value of property `icon`
     */
    getIcon(): URI;
    /**
     * Gets current value of property {@link #getSecondTitle secondTitle}.
     *
     * Second Line of the Thing Inspector Title
     *
     * @returns Value of property `secondTitle`
     */
    getSecondTitle(): string;
    /**
     * ID of the element which is the current target of the association {@link #getSelectedFacet selectedFacet},
     * or `null`.
     */
    getSelectedFacet(): ID;
    /**
     * Gets current value of property {@link #getType type}.
     *
     * Thing type
     *
     * @returns Value of property `type`
     */
    getType(): string;
    /**
     * Gets current value of property {@link #getUpdateActionEnabled updateActionEnabled}.
     *
     * Update action enabled/disabled. If disabled the action will be invisible.
     *
     * Default value is `true`.
     *
     * @returns Value of property `updateActionEnabled`
     */
    getUpdateActionEnabled(): boolean;
    /**
     * Checks for the provided `sap.ui.ux3.ThingAction` in the aggregation {@link #getActions actions}. and
     * returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfAction(
      /**
       * The action whose index is looked for
       */
      oAction: ThingAction
    ): int;
    /**
     * Checks for the provided `sap.ui.ux3.NavigationItem` in the aggregation {@link #getFacets facets}. and
     * returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfFacet(
      /**
       * The facet whose index is looked for
       */
      oFacet: NavigationItem
    ): int;
    /**
     * Checks for the provided `sap.ui.ux3.ThingGroup` in the aggregation {@link #getFacetContent facetContent}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfFacetContent(
      /**
       * The facetContent whose index is looked for
       */
      oFacetContent: ThingGroup
    ): int;
    /**
     * Checks for the provided `sap.ui.ux3.ThingGroup` in the aggregation {@link #getHeaderContent headerContent}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfHeaderContent(
      /**
       * The headerContent whose index is looked for
       */
      oHeaderContent: ThingGroup
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
      oAction: ThingAction,
      /**
       * The `0`-based index the action should be inserted at; for a negative value of `iIndex`, the action is
       * inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted
       * at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a facet into the aggregation {@link #getFacets facets}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertFacet(
      /**
       * The facet to insert; if empty, nothing is inserted
       */
      oFacet: NavigationItem,
      /**
       * The `0`-based index the facet should be inserted at; for a negative value of `iIndex`, the facet is inserted
       * at position 0; for a value greater than the current size of the aggregation, the facet is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a facetContent into the aggregation {@link #getFacetContent facetContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertFacetContent(
      /**
       * The facetContent to insert; if empty, nothing is inserted
       */
      oFacetContent: ThingGroup,
      /**
       * The `0`-based index the facetContent should be inserted at; for a negative value of `iIndex`, the facetContent
       * is inserted at position 0; for a value greater than the current size of the aggregation, the facetContent
       * is inserted at the last position
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
      oHeaderContent: ThingGroup,
      /**
       * The `0`-based index the headerContent should be inserted at; for a negative value of `iIndex`, the headerContent
       * is inserted at position 0; for a value greater than the current size of the aggregation, the headerContent
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Opens this instance of ThingIspector
     */
    open(initialFocusId?: string): void;
    /**
     * Removes a action from the aggregation {@link #getActions actions}.
     *
     * @returns The removed action or `null`
     */
    removeAction(
      /**
       * The action to remove or its index or id
       */
      vAction: int | string | ThingAction
    ): ThingAction | null;
    /**
     * Removes all the controls from the aggregation {@link #getActions actions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllActions(): ThingAction[];
    /**
     * Removes all the controls from the aggregation {@link #getFacetContent facetContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllFacetContent(): ThingGroup[];
    /**
     * Removes all the controls from the aggregation {@link #getFacets facets}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllFacets(): NavigationItem[];
    /**
     * Removes all the controls from the aggregation {@link #getHeaderContent headerContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllHeaderContent(): ThingGroup[];
    /**
     * Removes a facet from the aggregation {@link #getFacets facets}.
     *
     * @returns The removed facet or `null`
     */
    removeFacet(
      /**
       * The facet to remove or its index or id
       */
      vFacet: int | string | NavigationItem
    ): NavigationItem | null;
    /**
     * Removes a facetContent from the aggregation {@link #getFacetContent facetContent}.
     *
     * @returns The removed facetContent or `null`
     */
    removeFacetContent(
      /**
       * The facetContent to remove or its index or id
       */
      vFacetContent: int | string | ThingGroup
    ): ThingGroup | null;
    /**
     * Removes a headerContent from the aggregation {@link #getHeaderContent headerContent}.
     *
     * @returns The removed headerContent or `null`
     */
    removeHeaderContent(
      /**
       * The headerContent to remove or its index or id
       */
      vHeaderContent: int | string | ThingGroup
    ): ThingGroup | null;
    /**
     * Sets the aggregated {@link #getActionBar actionBar}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setActionBar(
      /**
       * The actionBar to set
       */
      oActionBar: ActionBar
    ): this;
    /**
     * Sets a new value for property {@link #getFavoriteActionEnabled favoriteActionEnabled}.
     *
     * Favorite action enabled/disabled. If disabled the action will be invisible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFavoriteActionEnabled(
      /**
       * New value for property `favoriteActionEnabled`
       */
      bFavoriteActionEnabled?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getFavoriteState favoriteState}.
     *
     * State Of favorite Action
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFavoriteState(
      /**
       * New value for property `favoriteState`
       */
      bFavoriteState?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getFirstTitle firstTitle}.
     *
     * First Line of the Thing Inspector Title
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFirstTitle(
      /**
       * New value for property `firstTitle`
       */
      sFirstTitle?: string
    ): this;
    /**
     * Sets a new value for property {@link #getFlagActionEnabled flagActionEnabled}.
     *
     * Flag action enabled/disabled. If disabled the action will be invisible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFlagActionEnabled(
      /**
       * New value for property `flagActionEnabled`
       */
      bFlagActionEnabled?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getFlagState flagState}.
     *
     * State of Flag Action
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFlagState(
      /**
       * New value for property `flagState`
       */
      bFlagState?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getFollowActionEnabled followActionEnabled}.
     *
     * Follow action enabled/disabled. If disabled the action will be invisible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFollowActionEnabled(
      /**
       * New value for property `followActionEnabled`
       */
      bFollowActionEnabled?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getFollowState followState}.
     *
     * Follow State of a Thing
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Default`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFollowState(
      /**
       * New value for property `followState`
       */
      sFollowState?: FollowActionState | keyof typeof FollowActionState
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets a new value for property {@link #getHeaderType headerType}.
     *
     * Defines which header type should be used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Standard`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderType(
      /**
       * New value for property `headerType`
       */
      sHeaderType?: ThingViewerHeaderType | keyof typeof ThingViewerHeaderType
    ): this;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Thing Icon Url
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
     * Sets a new value for property {@link #getSecondTitle secondTitle}.
     *
     * Second Line of the Thing Inspector Title
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * Sets the associated {@link #getSelectedFacet selectedFacet}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelectedFacet(
      /**
       * ID of an element which becomes the new target of this selectedFacet association; alternatively, an element
       * instance may be given
       */
      oSelectedFacet: ID | NavigationItem
    ): this;
    /**
     * Sets a new value for property {@link #getType type}.
     *
     * Thing type
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setType(
      /**
       * New value for property `type`
       */
      sType?: string
    ): this;
    /**
     * Sets a new value for property {@link #getUpdateActionEnabled updateActionEnabled}.
     *
     * Update action enabled/disabled. If disabled the action will be invisible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setUpdateActionEnabled(
      /**
       * New value for property `updateActionEnabled`
       */
      bUpdateActionEnabled?: boolean
    ): this;
  }

  export interface $ThingInspectorSettings extends $OverlaySettings {
    /**
     * First Line of the Thing Inspector Title
     */
    firstTitle?: string | PropertyBindingInfo;

    /**
     * Thing type
     */
    type?: string | PropertyBindingInfo;

    /**
     * Thing Icon Url
     */
    icon?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * Second Line of the Thing Inspector Title
     */
    secondTitle?: string | PropertyBindingInfo;

    /**
     * Follow State of a Thing
     */
    followState?:
      | (FollowActionState | keyof typeof FollowActionState)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * State of Flag Action
     */
    flagState?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * State Of favorite Action
     */
    favoriteState?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Favorite action enabled/disabled. If disabled the action will be invisible.
     */
    favoriteActionEnabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Update action enabled/disabled. If disabled the action will be invisible.
     */
    updateActionEnabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Follow action enabled/disabled. If disabled the action will be invisible.
     */
    followActionEnabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Flag action enabled/disabled. If disabled the action will be invisible.
     */
    flagActionEnabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.16.3
     *
     * Defines which header type should be used.
     */
    headerType?:
      | (ThingViewerHeaderType | keyof typeof ThingViewerHeaderType)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Actions of a Thing
     */
    actions?:
      | ThingAction[]
      | ThingAction
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * ThingGroups for the header content
     */
    headerContent?:
      | ThingGroup[]
      | ThingGroup
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Thing Inspector facets
     */
    facets?:
      | NavigationItem[]
      | NavigationItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * ThingGroups for content of the selected facet
     */
    facetContent?:
      | ThingGroup[]
      | ThingGroup
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * ActionBar. If no actionBar is set a default ActionBar will be created.
     */
    actionBar?: ActionBar;

    /**
     * The Facet that is currently selected.
     */
    selectedFacet?: NavigationItem | string;

    /**
     * Further thing related Action selected
     */
    actionSelected?: (oEvent: Event) => void;

    /**
     * Event for facet selection. The application is responsible for displaying the correct content for the
     * selected one. The ThingInspector will currently always mark the first facet as selected.
     */
    facetSelected?: (oEvent: Event) => void;

    /**
     * Fired when a new feed entry is submitted.
     */
    feedSubmit?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/ux3/ThingViewer" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import NavigationItem from "sap/ui/ux3/NavigationItem";

  import ThingGroup from "sap/ui/ux3/ThingGroup";

  import Event from "sap/ui/base/Event";

  import ActionBar from "sap/ui/ux3/ActionBar";

  import { ThingViewerHeaderType } from "sap/ui/ux3/library";

  import { CSSSize, URI, ID } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.9.1
   * @deprecated (since 1.38) - There is not an exact replacement.
   *
   * ThingViewer: Same as ThingInspector but decoupled from the Overlay and the ActionBar. The control can
   * be added to a Parent container that has a defined width. The ThingViewer fill the whole container. If
   * the parent container has no width defined the control will not work properly.
   */
  export default class ThingViewer extends Control {
    /**
     * Constructor for a new ThingViewer.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $ThingViewerSettings
    );
    /**
     * Constructor for a new ThingViewer.
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
      mSettings?: $ThingViewerSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.ThingViewer with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, ThingViewer>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.ThingViewer.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some facet to the aggregation {@link #getFacets facets}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addFacet(
      /**
       * The facet to add; if empty, nothing is inserted
       */
      oFacet: NavigationItem
    ): this;
    /**
     * Adds some facetContent to the aggregation {@link #getFacetContent facetContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addFacetContent(
      /**
       * The facetContent to add; if empty, nothing is inserted
       */
      oFacetContent: ThingGroup
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
      oHeaderContent: ThingGroup
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:facetSelected facetSelected} event of this `sap.ui.ux3.ThingViewer`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ThingViewer` itself.
     *
     * Event for facet selection. The application is responsible for displaying the correct content for the
     * selected one. The ThingInspector will currently always mark the first facet as selected.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFacetSelected(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ThingViewer` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:facetSelected facetSelected} event of this `sap.ui.ux3.ThingViewer`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ThingViewer` itself.
     *
     * Event for facet selection. The application is responsible for displaying the correct content for the
     * selected one. The ThingInspector will currently always mark the first facet as selected.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFacetSelected(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ThingViewer` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys the actionBar in the aggregation {@link #getActionBar actionBar}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyActionBar(): this;
    /**
     * Destroys all the facetContent in the aggregation {@link #getFacetContent facetContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFacetContent(): this;
    /**
     * Destroys all the facets in the aggregation {@link #getFacets facets}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFacets(): this;
    /**
     * Destroys all the headerContent in the aggregation {@link #getHeaderContent headerContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyHeaderContent(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:facetSelected facetSelected} event of this
     * `sap.ui.ux3.ThingViewer`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachFacetSelected(
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
     * Fires event {@link #event:facetSelected facetSelected} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireFacetSelected(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Id of selected NavigationItem
         */
        id?: string;
        /**
         * The selected NavigationItem
         */
        item?: NavigationItem;
        /**
         * Key of selected NavigationItem
         */
        key?: string;
      }
    ): boolean;
    /**
     * Gets content of aggregation {@link #getActionBar actionBar}.
     *
     * An ActionBar can be given
     */
    getActionBar(): ActionBar;
    /**
     * Gets content of aggregation {@link #getFacetContent facetContent}.
     *
     * ThingGroups for content of the selected facet
     */
    getFacetContent(): ThingGroup[];
    /**
     * Gets content of aggregation {@link #getFacets facets}.
     *
     * Thing Inspector facets
     */
    getFacets(): NavigationItem[];
    /**
     * Gets content of aggregation {@link #getHeaderContent headerContent}.
     *
     * ThingGroups for the header content
     */
    getHeaderContent(): ThingGroup[];
    /**
     * @SINCE 1.16.3
     *
     * Gets current value of property {@link #getHeaderType headerType}.
     *
     * Defines which header type should be used.
     *
     * Default value is `Standard`.
     *
     * @returns Value of property `headerType`
     */
    getHeaderType(): ThingViewerHeaderType | keyof typeof ThingViewerHeaderType;
    /**
     * Gets current value of property {@link #getHeight height}.
     *
     * Height of the ThingViewer
     *
     * Default value is `'100%'`.
     *
     * @returns Value of property `height`
     */
    getHeight(): CSSSize;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Thing Icon Url
     *
     * @returns Value of property `icon`
     */
    getIcon(): URI;
    /**
     * ID of the element which is the current target of the association {@link #getSelectedFacet selectedFacet},
     * or `null`.
     */
    getSelectedFacet(): ID;
    /**
     * Gets current value of property {@link #getSubtitle subtitle}.
     *
     * Subtitle of the Thing Inspector
     *
     * @returns Value of property `subtitle`
     */
    getSubtitle(): string;
    /**
     * Gets current value of property {@link #getTitle title}.
     *
     * Title of the Thing Inspector
     *
     * @returns Value of property `title`
     */
    getTitle(): string;
    /**
     * Gets current value of property {@link #getType type}.
     *
     * Thing type
     *
     * @returns Value of property `type`
     */
    getType(): string;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Width of the ThingViewer
     *
     * Default value is `'100%'`.
     *
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
    /**
     * Checks for the provided `sap.ui.ux3.NavigationItem` in the aggregation {@link #getFacets facets}. and
     * returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfFacet(
      /**
       * The facet whose index is looked for
       */
      oFacet: NavigationItem
    ): int;
    /**
     * Checks for the provided `sap.ui.ux3.ThingGroup` in the aggregation {@link #getFacetContent facetContent}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfFacetContent(
      /**
       * The facetContent whose index is looked for
       */
      oFacetContent: ThingGroup
    ): int;
    /**
     * Checks for the provided `sap.ui.ux3.ThingGroup` in the aggregation {@link #getHeaderContent headerContent}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfHeaderContent(
      /**
       * The headerContent whose index is looked for
       */
      oHeaderContent: ThingGroup
    ): int;
    /**
     * Inserts a facet into the aggregation {@link #getFacets facets}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertFacet(
      /**
       * The facet to insert; if empty, nothing is inserted
       */
      oFacet: NavigationItem,
      /**
       * The `0`-based index the facet should be inserted at; for a negative value of `iIndex`, the facet is inserted
       * at position 0; for a value greater than the current size of the aggregation, the facet is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a facetContent into the aggregation {@link #getFacetContent facetContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertFacetContent(
      /**
       * The facetContent to insert; if empty, nothing is inserted
       */
      oFacetContent: ThingGroup,
      /**
       * The `0`-based index the facetContent should be inserted at; for a negative value of `iIndex`, the facetContent
       * is inserted at position 0; for a value greater than the current size of the aggregation, the facetContent
       * is inserted at the last position
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
      oHeaderContent: ThingGroup,
      /**
       * The `0`-based index the headerContent should be inserted at; for a negative value of `iIndex`, the headerContent
       * is inserted at position 0; for a value greater than the current size of the aggregation, the headerContent
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getFacetContent facetContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllFacetContent(): ThingGroup[];
    /**
     * Removes all the controls from the aggregation {@link #getFacets facets}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllFacets(): NavigationItem[];
    /**
     * Removes all the controls from the aggregation {@link #getHeaderContent headerContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllHeaderContent(): ThingGroup[];
    /**
     * Removes a facet from the aggregation {@link #getFacets facets}.
     *
     * @returns The removed facet or `null`
     */
    removeFacet(
      /**
       * The facet to remove or its index or id
       */
      vFacet: int | string | NavigationItem
    ): NavigationItem | null;
    /**
     * Removes a facetContent from the aggregation {@link #getFacetContent facetContent}.
     *
     * @returns The removed facetContent or `null`
     */
    removeFacetContent(
      /**
       * The facetContent to remove or its index or id
       */
      vFacetContent: int | string | ThingGroup
    ): ThingGroup | null;
    /**
     * Removes a headerContent from the aggregation {@link #getHeaderContent headerContent}.
     *
     * @returns The removed headerContent or `null`
     */
    removeHeaderContent(
      /**
       * The headerContent to remove or its index or id
       */
      vHeaderContent: int | string | ThingGroup
    ): ThingGroup | null;
    /**
     * Sets the aggregated {@link #getActionBar actionBar}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setActionBar(
      /**
       * The actionBar to set
       */
      oActionBar: ActionBar
    ): this;
    /**
     * @SINCE 1.16.3
     *
     * Sets a new value for property {@link #getHeaderType headerType}.
     *
     * Defines which header type should be used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Standard`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderType(
      /**
       * New value for property `headerType`
       */
      sHeaderType?: ThingViewerHeaderType | keyof typeof ThingViewerHeaderType
    ): this;
    /**
     * Sets a new value for property {@link #getHeight height}.
     *
     * Height of the ThingViewer
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `'100%'`.
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
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Thing Icon Url
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
     * Sets the associated {@link #getSelectedFacet selectedFacet}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelectedFacet(
      /**
       * ID of an element which becomes the new target of this selectedFacet association; alternatively, an element
       * instance may be given
       */
      oSelectedFacet: ID | NavigationItem
    ): this;
    /**
     * Sets a new value for property {@link #getSubtitle subtitle}.
     *
     * Subtitle of the Thing Inspector
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
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
     * Sets a new value for property {@link #getTitle title}.
     *
     * Title of the Thing Inspector
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
     * Sets a new value for property {@link #getType type}.
     *
     * Thing type
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setType(
      /**
       * New value for property `type`
       */
      sType?: string
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Width of the ThingViewer
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `'100%'`.
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

  export interface $ThingViewerSettings extends $ControlSettings {
    /**
     * Title of the Thing Inspector
     */
    title?: string | PropertyBindingInfo;

    /**
     * Thing type
     */
    type?: string | PropertyBindingInfo;

    /**
     * Thing Icon Url
     */
    icon?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * Subtitle of the Thing Inspector
     */
    subtitle?: string | PropertyBindingInfo;

    /**
     * Width of the ThingViewer
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Height of the ThingViewer
     */
    height?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.16.3
     *
     * Defines which header type should be used.
     */
    headerType?:
      | (ThingViewerHeaderType | keyof typeof ThingViewerHeaderType)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * ThingGroups for the header content
     */
    headerContent?:
      | ThingGroup[]
      | ThingGroup
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Thing Inspector facets
     */
    facets?:
      | NavigationItem[]
      | NavigationItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * ThingGroups for content of the selected facet
     */
    facetContent?:
      | ThingGroup[]
      | ThingGroup
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * An ActionBar can be given
     */
    actionBar?: ActionBar;

    /**
     * The Facet that is currently selected.
     */
    selectedFacet?: NavigationItem | string;

    /**
     * Event for facet selection. The application is responsible for displaying the correct content for the
     * selected one. The ThingInspector will currently always mark the first facet as selected.
     */
    facetSelected?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/ux3/ToolPopup" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { PopupInterface, ID, URI, CSSSize } from "sap/ui/core/library";

  import Event from "sap/ui/base/Event";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { Dock } from "sap/ui/core/Popup";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @deprecated (since 1.38) - Instead, use the `sap.m.Popover` control.
   *
   * A popup which the user can open from the Shell's tool pane. Generally, the starting point would be an
   * icon. For this pop up, buttons can be defined with any text; therefore, it has the same purpose and similar
   * look like any common dialog box. A ToolPopup can have any content. Depending on the application type
   * and design, the structure of the texts and input fields can be for example form-like.
   */
  export default class ToolPopup extends Control implements PopupInterface {
    __implements__sap_ui_core_PopupInterface: boolean;
    /**
     * Constructor for a new ToolPopup.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ToolPopupSettings
    );
    /**
     * Constructor for a new ToolPopup.
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
      mSettings?: $ToolPopupSettings
    );

    /**
     * Creates a new subclass of class sap.ui.ux3.ToolPopup with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, ToolPopup>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.ux3.ToolPopup.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some button to the aggregation {@link #getButtons buttons}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addButton(
      /**
       * The button to add; if empty, nothing is inserted
       */
      oButton: Control
    ): this;
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
     * @SINCE 1.19.0
     *
     * Adds an ID to the Popup that should be focusable as well when using `autoclose`. Chaining is only possible
     * if a valid type (string) is given.
     */
    addFocusableArea(
      /**
       * ID of the corresponding element that should be focusable as well
       */
      sID?: string
    ): void;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.ux3.ToolPopup`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
     *
     * Event is fired when the popup closes because the user pressed Escape or the ToolPopup Button in the Shell.
     * This is called before the closing animation.
     *
     * @returns Reference to `this` in order to allow method chaining
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.ux3.ToolPopup`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
     *
     * Event is fired when the popup closes because the user pressed Escape or the ToolPopup Button in the Shell.
     * This is called before the closing animation.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.ux3.ToolPopup`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
     *
     * This event is fired after the ToolPopup has finished its closing animation. It is called for EVERY close,
     * regardless of whether the user has triggered the close or whether the ToolPopup was closed via API call.
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.ux3.ToolPopup`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
     *
     * This event is fired after the ToolPopup has finished its closing animation. It is called for EVERY close,
     * regardless of whether the user has triggered the close or whether the ToolPopup was closed via API call.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClosed(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:enter enter} event of this `sap.ui.ux3.ToolPopup`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
     *
     * Event is fired whenever the user clicks the Enter or the Enter key inside the pop up
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachEnter(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:enter enter} event of this `sap.ui.ux3.ToolPopup`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
     *
     * Event is fired whenever the user clicks the Enter or the Enter key inside the pop up
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachEnter(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:iconChanged iconChanged} event of this `sap.ui.ux3.ToolPopup`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
     *
     * Event is fired when one of the icon properties is modified (Note: The icon is not rendered by the ToolPopup).
     * To be used by other controls which want to update the icon in their UI.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachIconChanged(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:iconChanged iconChanged} event of this `sap.ui.ux3.ToolPopup`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
     *
     * Event is fired when one of the icon properties is modified (Note: The icon is not rendered by the ToolPopup).
     * To be used by other controls which want to update the icon in their UI.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachIconChanged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:open open} event of this `sap.ui.ux3.ToolPopup`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
     *
     * Event is fired when the popup opens
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
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:open open} event of this `sap.ui.ux3.ToolPopup`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
     *
     * Event is fired when the popup opens
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.19.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:opened opened} event of this `sap.ui.ux3.ToolPopup`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
     *
     * Event is being fired after the ToolPopup has been opened.
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
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.19.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:opened opened} event of this `sap.ui.ux3.ToolPopup`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
     *
     * Event is being fired after the ToolPopup has been opened.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpened(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
       */
      oListener?: object
    ): this;
    /**
     * Closes the pop up. Can be called by the Shell when the pop up's button is clicked again; or by the application
     * when the interaction in the pop up has been completed or canceled.
     */
    close(
      /**
       * If set, the focus is NOT restored to the element that had the focus before the ToolPopup was opened.
       * This makes sense when the ToolPopup is closed programmatically from a different area of the application
       * (outside the ToolPopup) and the focus should not move aways from that place.
       */
      bPreventRestoreFocus: boolean
    ): this;
    /**
     * Destroys all the buttons in the aggregation {@link #getButtons buttons}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyButtons(): this;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:close close} event of this `sap.ui.ux3.ToolPopup`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
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
     * Detaches event handler `fnFunction` from the {@link #event:closed closed} event of this `sap.ui.ux3.ToolPopup`.
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
     * Detaches event handler `fnFunction` from the {@link #event:enter enter} event of this `sap.ui.ux3.ToolPopup`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachEnter(
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
     * Detaches event handler `fnFunction` from the {@link #event:iconChanged iconChanged} event of this `sap.ui.ux3.ToolPopup`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachIconChanged(
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
     * Detaches event handler `fnFunction` from the {@link #event:open open} event of this `sap.ui.ux3.ToolPopup`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachOpen(
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
     * @SINCE 1.19.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:opened opened} event of this `sap.ui.ux3.ToolPopup`.
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
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:close close} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireClose(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): boolean;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
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
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:enter enter} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireEnter(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The onsapenter event, received by the pop up
         */
        originalEvent?: object;
        /**
         * The control that was focused when the user pressed the Enter key (may be null)
         */
        originalSrcControl?: Control;
      }
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:iconChanged iconChanged} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireIconChanged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
     *
     * Fires event {@link #event:open open} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireOpen(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @SINCE 1.19.0
     * @PROTECTED - DO NOT USE IN APPLICATIONS (only for related classes in the framework)
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
     * @SINCE 1.13.2
     *
     * Gets current value of property {@link #getAutoClose autoClose}.
     *
     * Determines whether the ToolPopup will auto close when it loses focus. If the user e.g. clicks outside
     * of the ToolPopup it will be closed. Please don't use "modal" and "autoclose" at the same time. In this
     * case a warning will be prompted to the console and "autoclose" won't be used.
     *
     * Default value is `false`.
     *
     * @returns Value of property `autoClose`
     */
    getAutoClose(): boolean;
    /**
     * Gets content of aggregation {@link #getButtons buttons}.
     *
     * Defines the buttons to appear in the popup
     */
    getButtons(): Control[];
    /**
     * @SINCE 1.19.0
     *
     * Gets current value of property {@link #getCloseDuration closeDuration}.
     *
     * Time in milliseconds for the close animation.
     *
     * Default value is `400`.
     *
     * @returns Value of property `closeDuration`
     */
    getCloseDuration(): int;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Defines the content of the popup
     */
    getContent(): Control[];
    /**
     * @SINCE 1.20.1
     *
     * ID of the element which is the current target of the association {@link #getDefaultButton defaultButton},
     * or `null`.
     */
    getDefaultButton(): ID;
    /**
     * @SINCE 1.13.1
     *
     * Indicates whether the ToolPopup is currently enabled or not.
     *
     * Applications can't control the enabled state via a property. A ToolPopup is implicitly enabled depending
     * on its `openState`. Descendant controls that honor the enabled state of their ancestors will appear disabled
     * after the ToolPopup is closed.
     *
     * Since 1.13.1. Whether a dialog is regarded as "enabled" during the state transitions (OPENING, CLOSING)
     * is not fully decided. Currently, it is enabled during the OPENING phase and disabled during the CLOSING
     * phase. The only potential change would be to treat the OPENING phase as disabled as well. Applications
     * should be prepared to receive events from "enabled" controls after they called open() on the dialog until
     * close() is called on it. If the mentioned potential change should happen, the dialog will become enabled
     * only after the transition to OPEN. Events from "enabled" children then can still only arrive between
     * open() and close(), so applications that obey the previous rule should continue to work. Only end users
     * or code that explicitly triggers pseudo user events would notice a difference.
     *  A second aspect that might change is the visual behavior of the content: during the CLOSING phase it
     * 'looks' enabled but in fact it is already disabled. This avoids unnecessary redraws for content that
     * becomes hidden soon. Should this show to be confusing for end users, it might be changed.
     */
    getEnabled(): boolean;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * This property is relevant for Shell use: The URL to the icon displayed in the tool area which is used
     * to open the ToolPopup. The recommended size is 32x32px, including some transparent border. Therefore,
     * the content will cover about 20x20px.
     *
     * @returns Value of property `icon`
     */
    getIcon(): URI;
    /**
     * Gets current value of property {@link #getIconHover iconHover}.
     *
     * This property is relevant for Shell use: The URL to the icon in hover state, displayed in the tool area
     * which is used to open the popup.
     *
     * @returns Value of property `iconHover`
     */
    getIconHover(): URI;
    /**
     * ID of the element which is the current target of the association {@link #getInitialFocus initialFocus},
     * or `null`.
     */
    getInitialFocus(): ID;
    /**
     * @SINCE 1.11.1
     *
     * Gets current value of property {@link #getInverted inverted}.
     *
     * Specifies whether the ToolPopup has a dark or bright background. If set to true the background and borders
     * will be dark. If false they will be bright. This property only has an effect for the GoldReflection-theme.
     *
     * Default value is `true`.
     *
     * @returns Value of property `inverted`
     */
    getInverted(): boolean;
    /**
     * @SINCE 1.13.2
     *
     * Gets current value of property {@link #getMaxHeight maxHeight}.
     *
     * Forces a maximum height of the ToolPopup in pixels. If the ToolPopup content is higher than the ToolPopup,
     * the content will be scrollable.
     *
     * @returns Value of property `maxHeight`
     */
    getMaxHeight(): CSSSize;
    /**
     * @SINCE 1.15.0
     *
     * Gets current value of property {@link #getMaxWidth maxWidth}.
     *
     * Forces a maximum width of the ToolPopup in pixels.
     *
     * @returns Value of property `maxWidth`
     */
    getMaxWidth(): CSSSize;
    /**
     * Gets current value of property {@link #getModal modal}.
     *
     * Specifies whether the popup is modal and blocks any user-interaction with controls in the background.
     * Changing this property while the ToolPopup is open will not have any effect. Please don't use "modal"
     * and "autoclose" at the same time. In this case a warning will be prompted to the console and "autoclose"
     * won't be used.
     *
     * Default value is `false`.
     *
     * @returns Value of property `modal`
     */
    getModal(): boolean;
    /**
     * @SINCE 1.19.0
     *
     * Gets current value of property {@link #getOpenDuration openDuration}.
     *
     * Time in milliseconds for the open animation.
     *
     * Default value is `400`.
     *
     * @returns Value of property `openDuration`
     */
    getOpenDuration(): int;
    /**
     * ID of the element which is the current target of the association {@link #getOpener opener}, or `null`.
     */
    getOpener(): ID;
    /**
     * Gets current value of property {@link #getTitle title}.
     *
     * Determines the title displayed in the pop up window
     *
     * @returns Value of property `title`
     */
    getTitle(): string;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getButtons buttons}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfButton(
      /**
       * The button whose index is looked for
       */
      oButton: Control
    ): int;
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
     * Inserts a button into the aggregation {@link #getButtons buttons}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertButton(
      /**
       * The button to insert; if empty, nothing is inserted
       */
      oButton: Control,
      /**
       * The `0`-based index the button should be inserted at; for a negative value of `iIndex`, the button is
       * inserted at position 0; for a value greater than the current size of the aggregation, the button is inserted
       * at the last position
       */
      iIndex: int
    ): this;
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
     * Indicates whether the pop up is currently open
     */
    isOpen(): boolean;
    /**
     * Opens the ToolPopup. It is checked which control wants to open the ToolPopup. The Shell was previously
     * set as parent so the corresponding parent element is used to set the correct position of the ToolPopup.
     * If another control (i.e. a button) opens the ToolPopup, the control must be previously set as `opener`
     * via `setOpener` to the ToolPopup. Corresponding to this opener the position of the ToolPopup will be
     * set. It's also possible to set the position above, below or left from the opener. This can be done via
     * the possible parameters `my` and `at`. These parameters refers to work the same way as they do of sap.ui.core.Popup.open.
     */
    open(
      /**
       * The ToolPopup's content reference position for docking
       */
      my?: Dock,
      /**
       * The "of" element's reference point for docking to
       */
      at?: Dock
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getButtons buttons}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllButtons(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getContent content}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllContent(): Control[];
    /**
     * Removes a button from the aggregation {@link #getButtons buttons}.
     *
     * @returns The removed button or `null`
     */
    removeButton(
      /**
       * The button to remove or its index or id
       */
      vButton: int | string | Control
    ): Control | null;
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
     * @SINCE 1.19.0
     *
     * Removes an ID to the Popup that should be focusable as well when using `autoclose`. Chaining is only
     * possible if a valid type (string) is given.
     */
    removeFocusableArea(
      /**
       * ID of the corresponding element
       */
      sID?: string
    ): void;
    /**
     * @SINCE 1.13.2
     *
     * Sets a new value for property {@link #getAutoClose autoClose}.
     *
     * Determines whether the ToolPopup will auto close when it loses focus. If the user e.g. clicks outside
     * of the ToolPopup it will be closed. Please don't use "modal" and "autoclose" at the same time. In this
     * case a warning will be prompted to the console and "autoclose" won't be used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAutoClose(
      /**
       * New value for property `autoClose`
       */
      bAutoClose?: boolean
    ): this;
    /**
     * @SINCE 1.19.0
     *
     * This is just a forward to the Popup's function (sap.ui.core.Popup.setAutoCloseAreas) with the same functionality.
     */
    setAutoCloseAreas(aAutoCloseAreas: Element[]): void;
    /**
     * @SINCE 1.19.0
     *
     * Sets a new value for property {@link #getCloseDuration closeDuration}.
     *
     * Time in milliseconds for the close animation.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `400`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setCloseDuration(
      /**
       * New value for property `closeDuration`
       */
      iCloseDuration?: int
    ): this;
    /**
     * @SINCE 1.20.1
     *
     * Sets the associated {@link #getDefaultButton defaultButton}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDefaultButton(
      /**
       * ID of an element which becomes the new target of this defaultButton association; alternatively, an element
       * instance may be given
       */
      oDefaultButton: ID | Control
    ): this;
    /**
     * Sets the associated {@link #getInitialFocus initialFocus}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setInitialFocus(
      /**
       * ID of an element which becomes the new target of this initialFocus association; alternatively, an element
       * instance may be given
       */
      oInitialFocus: ID | Control
    ): this;
    /**
     * @SINCE 1.11.1
     *
     * Sets a new value for property {@link #getInverted inverted}.
     *
     * Specifies whether the ToolPopup has a dark or bright background. If set to true the background and borders
     * will be dark. If false they will be bright. This property only has an effect for the GoldReflection-theme.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setInverted(
      /**
       * New value for property `inverted`
       */
      bInverted?: boolean
    ): this;
    /**
     * @SINCE 1.13.2
     *
     * Sets a new value for property {@link #getMaxHeight maxHeight}.
     *
     * Forces a maximum height of the ToolPopup in pixels. If the ToolPopup content is higher than the ToolPopup,
     * the content will be scrollable.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMaxHeight(
      /**
       * New value for property `maxHeight`
       */
      sMaxHeight?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getModal modal}.
     *
     * Specifies whether the popup is modal and blocks any user-interaction with controls in the background.
     * Changing this property while the ToolPopup is open will not have any effect. Please don't use "modal"
     * and "autoclose" at the same time. In this case a warning will be prompted to the console and "autoclose"
     * won't be used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setModal(
      /**
       * New value for property `modal`
       */
      bModal?: boolean
    ): this;
    /**
     * @SINCE 1.19.0
     *
     * Sets a new value for property {@link #getOpenDuration openDuration}.
     *
     * Time in milliseconds for the open animation.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `400`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setOpenDuration(
      /**
       * New value for property `openDuration`
       */
      iOpenDuration?: int
    ): this;
    /**
     * Sets the associated {@link #getOpener opener}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setOpener(
      /**
       * ID of an element which becomes the new target of this opener association; alternatively, an element instance
       * may be given
       */
      oOpener: ID | Control
    ): this;
    /**
     * Sets the position of the pop up, the same parameters as for sap.ui.core.Popup can be used.
     */
    setPosition(): void;
    /**
     * Sets a new value for property {@link #getTitle title}.
     *
     * Determines the title displayed in the pop up window
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

  export interface $ToolPopupSettings extends $ControlSettings {
    /**
     * Determines the title displayed in the pop up window
     */
    title?: string | PropertyBindingInfo;

    /**
     * This property is relevant for Shell use: The URL to the icon displayed in the tool area which is used
     * to open the ToolPopup. The recommended size is 32x32px, including some transparent border. Therefore,
     * the content will cover about 20x20px.
     */
    icon?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * This property is relevant for Shell use: The URL to the icon in hover state, displayed in the tool area
     * which is used to open the popup.
     */
    iconHover?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * This property is relevant for Shell use: The URL to the icon in selected state displayed in the tool
     * area which is used to open the popup. If no selected icon is given, the hover icon is used.
     */
    iconSelected?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies whether the popup is modal and blocks any user-interaction with controls in the background.
     * Changing this property while the ToolPopup is open will not have any effect. Please don't use "modal"
     * and "autoclose" at the same time. In this case a warning will be prompted to the console and "autoclose"
     * won't be used.
     */
    modal?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.11.1
     *
     * Specifies whether the ToolPopup has a dark or bright background. If set to true the background and borders
     * will be dark. If false they will be bright. This property only has an effect for the GoldReflection-theme.
     */
    inverted?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.13.2
     *
     * Determines whether the ToolPopup will auto close when it loses focus. If the user e.g. clicks outside
     * of the ToolPopup it will be closed. Please don't use "modal" and "autoclose" at the same time. In this
     * case a warning will be prompted to the console and "autoclose" won't be used.
     */
    autoClose?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.13.2
     *
     * Forces a maximum height of the ToolPopup in pixels. If the ToolPopup content is higher than the ToolPopup,
     * the content will be scrollable.
     */
    maxHeight?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.15.0
     *
     * Forces a maximum width of the ToolPopup in pixels.
     */
    maxWidth?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.19.0
     *
     * Time in milliseconds for the open animation.
     */
    openDuration?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * @SINCE 1.19.0
     *
     * Time in milliseconds for the close animation.
     */
    closeDuration?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the buttons to appear in the popup
     */
    buttons?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Defines the content of the popup
     */
    content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Defines the control that will get the focus when the ToolPopup is opened.
     */
    initialFocus?: Control | string;

    /**
     * This property is relevant for stand-alone use: This association needs to be set if the ToolPopup should
     * not be opened by/with the Shell. This association contains the instance of the control that assigns the
     * ToolPopup's position.
     */
    opener?: Control | string;

    /**
     * @SINCE 1.20.1
     *
     * Defines one of the buttons that have been provided via button aggregation to be the default button. This
     * default button is initially selected, if no control is set via the initialFocus association explicitly.
     * The default button is activated when Enter is pressed in the context of the dialog and when the currently
     * selected element does not handle the Enter event itself.
     */
    defaultButton?: Control | string;

    /**
     * Event is fired when the popup opens
     */
    open?: (oEvent: Event) => void;

    /**
     * Event is fired when the popup closes because the user pressed Escape or the ToolPopup Button in the Shell.
     * This is called before the closing animation.
     */
    close?: (oEvent: Event) => void;

    /**
     * Event is fired whenever the user clicks the Enter or the Enter key inside the pop up
     */
    enter?: (oEvent: Event) => void;

    /**
     * Event is fired when one of the icon properties is modified (Note: The icon is not rendered by the ToolPopup).
     * To be used by other controls which want to update the icon in their UI.
     */
    iconChanged?: (oEvent: Event) => void;

    /**
     * This event is fired after the ToolPopup has finished its closing animation. It is called for EVERY close,
     * regardless of whether the user has triggered the close or whether the ToolPopup was closed via API call.
     */
    closed?: (oEvent: Event) => void;

    /**
     * @SINCE 1.19.0
     *
     * Event is being fired after the ToolPopup has been opened.
     */
    opened?: (oEvent: Event) => void;
  }
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/ui/ux3/ActionBar": undefined;

    "sap/ui/ux3/Collection": undefined;

    "sap/ui/ux3/CollectionInspector": undefined;

    "sap/ui/ux3/DataSet": undefined;

    "sap/ui/ux3/DataSetItem": undefined;

    "sap/ui/ux3/DataSetSimpleView": undefined;

    "sap/ui/ux3/Exact": undefined;

    "sap/ui/ux3/ExactArea": undefined;

    "sap/ui/ux3/ExactAttribute": undefined;

    "sap/ui/ux3/ExactBrowser": undefined;

    "sap/ui/ux3/ExactList": undefined;

    "sap/ui/ux3/FacetFilter": undefined;

    "sap/ui/ux3/FacetFilterList": undefined;

    "sap/ui/ux3/Feed": undefined;

    "sap/ui/ux3/FeedChunk": undefined;

    "sap/ui/ux3/Feeder": undefined;

    "sap/ui/ux3/library": undefined;

    "sap/ui/ux3/NavigationBar": undefined;

    "sap/ui/ux3/NavigationItem": undefined;

    "sap/ui/ux3/NotificationBar": undefined;

    "sap/ui/ux3/Notifier": undefined;

    "sap/ui/ux3/Overlay": undefined;

    "sap/ui/ux3/OverlayContainer": undefined;

    "sap/ui/ux3/OverlayDialog": undefined;

    "sap/ui/ux3/QuickView": undefined;

    "sap/ui/ux3/Shell": undefined;

    "sap/ui/ux3/ThingAction": undefined;

    "sap/ui/ux3/ThingGroup": undefined;

    "sap/ui/ux3/ThingInspector": undefined;

    "sap/ui/ux3/ThingViewer": undefined;

    "sap/ui/ux3/ToolPopup": undefined;
  }
}
