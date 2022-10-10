// For Library Version: 1.107.0

declare module "sap/ui/webc/fiori/library" {
  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Different types of Bar.
   */
  export enum BarDesign {
    /**
     * Floating Footer type - there is visible border on all sides
     */
    FloatingFooter = "FloatingFooter",
    /**
     * Footer type
     */
    Footer = "Footer",
    /**
     * Default type
     */
    Header = "Header",
    /**
     * Subheader type
     */
    Subheader = "Subheader",
  }
  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * undefined
   */
  export enum FCLLayout {
    /**
     * Desktop: -/-/100 only the End column is displayed Tablet: -/-/100 only the End column is displayed Phone:
     * -/-/100 only the End column is displayed
     *
     * Use to display a detail-detail page only, when the user should focus entirely on it.
     */
    EndColumnFullScreen = "EndColumnFullScreen",
    /**
     * Desktop: -/100/- only the Mid column is displayed Tablet: -/100/- only the Mid column is displayed Phone:
     * -/100/- only the Mid column is displayed
     *
     * Use to display a detail page only, when the user should focus entirely on it.
     */
    MidColumnFullScreen = "MidColumnFullScreen",
    /**
     * The layout will display 1 column.
     */
    OneColumn = "OneColumn",
    /**
     * Desktop: 25/25/50 Start, Mid and End (expanded) columns are displayed Tablet: 0/33/67 Mid and End (expanded)
     * columns are displayed, Start is accessible by layout arrows Phone: -/-/100 (only the End column is displayed)
     *
     * Use to display all three pages (list, detail, detail-detail) when the user should focus on the detail-detail.
     */
    ThreeColumnsEndExpanded = "ThreeColumnsEndExpanded",
    /**
     * Desktop: 25/50/25 Start, Mid (expanded) and End columns are displayed Tablet: 0/67/33 Mid (expanded)
     * and End columns are displayed, Start is accessible by a layout arrow Phone: -/-/100 only the End column
     * is displayed
     *
     * Use to display all three pages (list, detail, detail-detail) when the user should focus on the detail.
     */
    ThreeColumnsMidExpanded = "ThreeColumnsMidExpanded",
    /**
     * Desktop: 33/67/0 Start and Mid (expanded) columns are displayed, End is accessible by a layout arrow
     * Tablet: 33/67/0 Start and Mid (expanded) columns are displayed, End is accessible by a layout arrow Phone:
     * -/-/100 only the End column is displayed
     *
     * Use to display the list and detail pages when the user should focus on the detail. The detail-detail
     * is still loaded and easily accessible with a layout arrow.
     */
    ThreeColumnsMidExpandedEndHidden = "ThreeColumnsMidExpandedEndHidden",
    /**
     * Desktop: 67/33/0 Start (expanded) and Mid columns are displayed, End is accessible by layout arrows Tablet:
     * 67/33/0 Start (expanded) and Mid columns are displayed, End is accessible by layout arrows Phone: -/-/100
     * only the End column is displayed
     *
     * Use to display the list and detail pages when the user should focus on the list. The detail-detail is
     * still loaded and easily accessible with layout arrows.
     */
    ThreeColumnsStartExpandedEndHidden = "ThreeColumnsStartExpandedEndHidden",
    /**
     * Desktop: 33/67/- Start and Mid (expanded) columns are displayed Tablet: 33/67/- Start and Mid (expanded)
     * columns are displayed Phone: -/100/- only the Mid column is displayed
     *
     * Use to display both a list and a detail page when the user should focus on the detail page.
     */
    TwoColumnsMidExpanded = "TwoColumnsMidExpanded",
    /**
     * Desktop: 67/33/- Start (expanded) and Mid columns are displayed Tablet: 67/33/- Start (expanded) and
     * Mid columns are displayed Phone: -/100/- only the Mid column is displayed
     *
     * Use to display both a list and a detail page when the user should focus on the list page.
     */
    TwoColumnsStartExpanded = "TwoColumnsStartExpanded",
  }
  /**
   * @SINCE 1.99.0
   * @EXPERIMENTAL (since 1.99.0)
   *
   * Interface for components that may be slotted inside `ui5-page` as header and footer.
   */
  export interface IBar {
    __implements__sap_ui_webc_fiori_IBar: boolean;
  }

  /**
   * @SINCE 1.97.0
   * @EXPERIMENTAL (since 1.97.0)
   *
   * Interface for components that may be slotted inside `ui5-view-settings-dialog` as filter items
   */
  export interface IFilterItem {
    __implements__sap_ui_webc_fiori_IFilterItem: boolean;
  }

  /**
   * @SINCE 1.97.0
   * @EXPERIMENTAL (since 1.97.0)
   *
   * Interface for components that may be slotted inside `ui5-filter-item` as values
   */
  export interface IFilterItemOption {
    __implements__sap_ui_webc_fiori_IFilterItemOption: boolean;
  }

  /**
   * @SINCE 1.106.0
   * @EXPERIMENTAL (since 1.106.0)
   *
   * Different types of IllustrationMessageSize.
   */
  export enum IllustrationMessageSize {
    /**
     * Automatically decides the `Illustration` size (`Base`, `Spot`, `Dialog`, or `Scene`) depending on the
     * `IllustratedMessage` container width.
     *
     * **Note:** `Auto` is the only option where the illustration size is changed according to the available
     * container width. If any other `IllustratedMessageSize` is chosen, it remains until changed by the app
     * developer.
     */
    Auto = "Auto",
    /**
     * Base `Illustration` size (XS breakpoint). Suitable for cards (two columns).
     *
     * **Note:** When `Base` is in use, no illustration is displayed.
     */
    Base = "Base",
    /**
     * Dialog `Illustration` size (M breakpoint). Suitable for dialogs.
     */
    Dialog = "Dialog",
    /**
     * Scene `Illustration` size (L breakpoint). Suitable for a `Page` or a table.
     */
    Scene = "Scene",
    /**
     * Spot `Illustration` size (S breakpoint). Suitable for cards (four columns).
     */
    Spot = "Spot",
  }
  /**
   * @SINCE 1.95.0
   * @EXPERIMENTAL (since 1.95.0)
   *
   * Different illustration types of Illustrated Message.
   */
  export enum IllustrationMessageType {
    /**
     * "Add Column" illustration type.
     */
    AddColumn = "AddColumn",
    /**
     * "Add People" illustration type.
     */
    AddPeople = "AddPeople",
    /**
     * "Balloon Sky" illustration type.
     */
    BalloonSky = "BalloonSky",
    /**
     * "Before Search" illustration type.
     */
    BeforeSearch = "BeforeSearch",
    /**
     * "Connection" illustration type.
     */
    Connection = "Connection",
    /**
     * "Empty Calendar" illustration type.
     */
    EmptyCalendar = "EmptyCalendar",
    /**
     * "Empty List" illustration type.
     */
    EmptyList = "EmptyList",
    /**
     * "Empty Planning Calendar" illustration type.
     */
    EmptyPlanningCalendar = "EmptyPlanningCalendar",
    /**
     * "Error Screen" illustration type.
     */
    ErrorScreen = "ErrorScreen",
    /**
     * "Filter Table" illustration type.
     */
    FilterTable = "FilterTable",
    /**
     * "Group Table" illustration type.
     */
    GroupTable = "GroupTable",
    /**
     * "No Activities" illustration type.
     */
    NoActivities = "NoActivities",
    /**
     * "No Data" illustration type.
     */
    NoData = "NoData",
    /**
     * "No Entries" illustration type.
     */
    NoEntries = "NoEntries",
    /**
     * "No Filter Results" illustration type.
     */
    NoFilterResults = "NoFilterResults",
    /**
     * "No Email" illustration type.
     */
    NoMail = "NoMail",
    /**
     * "No Email v1" illustration type.
     */
    NoMail_v1 = "NoMail_v1",
    /**
     * "No Notifications" illustration type.
     */
    NoNotifications = "NoNotifications",
    /**
     * "No Saved Items" illustration type.
     */
    NoSavedItems = "NoSavedItems",
    /**
     * "No Saved Items v1" illustration type.
     */
    NoSavedItems_v1 = "NoSavedItems_v1",
    /**
     * "No Search Results" illustration type.
     */
    NoSearchResults = "NoSearchResults",
    /**
     * "No Tasks" illustration type.
     */
    NoTasks = "NoTasks",
    /**
     * "No Tasks v1" illustration type.
     */
    NoTasks_v1 = "NoTasks_v1",
    /**
     * "Page Not Found" illustration type.
     */
    PageNotFound = "PageNotFound",
    /**
     * "Reload Screen" illustration type.
     */
    ReloadScreen = "ReloadScreen",
    /**
     * "Resize Column" illustration type.
     */
    ResizeColumn = "ResizeColumn",
    /**
     * "Search Earth" illustration type.
     */
    SearchEarth = "SearchEarth",
    /**
     * "Search Folder" illustration type.
     */
    SearchFolder = "SearchFolder",
    /**
     * "Simple Balloon" illustration type.
     */
    SimpleBalloon = "SimpleBalloon",
    /**
     * "Simple Bell" illustration type.
     */
    SimpleBell = "SimpleBell",
    /**
     * "Simple Calendar" illustration type.
     */
    SimpleCalendar = "SimpleCalendar",
    /**
     * "Simple CheckMark" illustration type.
     */
    SimpleCheckMark = "SimpleCheckMark",
    /**
     * "Simple Connection" illustration type.
     */
    SimpleConnection = "SimpleConnection",
    /**
     * "Simple Empty Doc" illustration type.
     */
    SimpleEmptyDoc = "SimpleEmptyDoc",
    /**
     * "Simple Empty List" illustration type.
     */
    SimpleEmptyList = "SimpleEmptyList",
    /**
     * "Simple Error" illustration type.
     */
    SimpleError = "SimpleError",
    /**
     * "Simple Magnifier" illustration type.
     */
    SimpleMagnifier = "SimpleMagnifier",
    /**
     * "Simple Mail" illustration type.
     */
    SimpleMail = "SimpleMail",
    /**
     * "Simple No Saved Items" illustration type.
     */
    SimpleNoSavedItems = "SimpleNoSavedItems",
    /**
     * "Simple Not Found Magnifier" illustration type.
     */
    SimpleNotFoundMagnifier = "SimpleNotFoundMagnifier",
    /**
     * "Simple Reload" illustration type.
     */
    SimpleReload = "SimpleReload",
    /**
     * "Simple Task" illustration type.
     */
    SimpleTask = "SimpleTask",
    /**
     * "Sleeping Bell" illustration type.
     */
    SleepingBell = "SleepingBell",
    /**
     * "Sort Column" illustration type.
     */
    SortColumn = "SortColumn",
    /**
     * "Success Balloon" illustration type.
     */
    SuccessBalloon = "SuccessBalloon",
    /**
     * "Success CheckMark" illustration type.
     */
    SuccessCheckMark = "SuccessCheckMark",
    /**
     * "Success HighFive" illustration type.
     */
    SuccessHighFive = "SuccessHighFive",
    /**
     * "Success Screen" illustration type.
     */
    SuccessScreen = "SuccessScreen",
    /**
     * "Tent" illustration type.
     */
    Tent = "Tent",
    /**
     * "TntChartArea" illustration type.
     */
    TntChartArea = "TntChartArea",
    /**
     * "TntChartArea2" illustration type.
     */
    TntChartArea2 = "TntChartArea2",
    /**
     * "TntChartBar" illustration type.
     */
    TntChartBar = "TntChartBar",
    /**
     * "TntChartBPMNFlow" illustration type.
     */
    TntChartBPMNFlow = "TntChartBPMNFlow",
    /**
     * "TntChartBullet" illustration type.
     */
    TntChartBullet = "TntChartBullet",
    /**
     * "TntChartDoughnut" illustration type.
     */
    TntChartDoughnut = "TntChartDoughnut",
    /**
     * "TntChartFlow" illustration type.
     */
    TntChartFlow = "TntChartFlow",
    /**
     * "TntChartGantt" illustration type.
     */
    TntChartGantt = "TntChartGantt",
    /**
     * "TntChartOrg" illustration type.
     */
    TntChartOrg = "TntChartOrg",
    /**
     * "TntChartPie" illustration type.
     */
    TntChartPie = "TntChartPie",
    /**
     * "TntCodePlaceholder" illustration type.
     */
    TntCodePlaceholder = "TntCodePlaceholder",
    /**
     * "TntCompany" illustration type.
     */
    TntCompany = "TntCompany",
    /**
     * "TntComponents" illustration type.
     */
    TntComponents = "TntComponents",
    /**
     * "TntExternalLink" illustration type.
     */
    TntExternalLink = "TntExternalLink",
    /**
     * "TntFaceID" illustration type.
     */
    TntFaceID = "TntFaceID",
    /**
     * "TntFingerprint" illustration type.
     */
    TntFingerprint = "TntFingerprint",
    /**
     * "TntLock" illustration type.
     */
    TntLock = "TntLock",
    /**
     * "TntMission" illustration type.
     */
    TntMission = "TntMission",
    /**
     * "TntNoApplications" illustration type.
     */
    TntNoApplications = "TntNoApplications",
    /**
     * "TntNoFlows" illustration type.
     */
    TntNoFlows = "TntNoFlows",
    /**
     * "TntNoUsers" illustration type.
     */
    TntNoUsers = "TntNoUsers",
    /**
     * "TntRadar" illustration type.
     */
    TntRadar = "TntRadar",
    /**
     * "TntSecrets" illustration type.
     */
    TntSecrets = "TntSecrets",
    /**
     * "TntServices" illustration type.
     */
    TntServices = "TntServices",
    /**
     * "TntSessionExpired" illustration type.
     */
    TntSessionExpired = "TntSessionExpired",
    /**
     * "TntSessionExpiring" illustration type.
     */
    TntSessionExpiring = "TntSessionExpiring",
    /**
     * "TntSuccess" illustration type.
     */
    TntSuccess = "TntSuccess",
    /**
     * "TntSuccessfulAuth" illustration type.
     */
    TntSuccessfulAuth = "TntSuccessfulAuth",
    /**
     * "TntSystems" illustration type.
     */
    TntSystems = "TntSystems",
    /**
     * "TntTeams" illustration type.
     */
    TntTeams = "TntTeams",
    /**
     * "TntTools" illustration type.
     */
    TntTools = "TntTools",
    /**
     * "TntUnableToLoad" illustration type.
     */
    TntUnableToLoad = "TntUnableToLoad",
    /**
     * "TntUnlock" illustration type.
     */
    TntUnlock = "TntUnlock",
    /**
     * "TntUnsuccessfulAuth" illustration type.
     */
    TntUnsuccessfulAuth = "TntUnsuccessfulAuth",
    /**
     * "TntUser2" illustration type.
     */
    TntUser2 = "TntUser2",
    /**
     * "Unable To Load" illustration type.
     */
    UnableToLoad = "UnableToLoad",
    /**
     * "Unable To Load Image" illustration type.
     */
    UnableToLoadImage = "UnableToLoadImage",
    /**
     * "Unable To Upload" illustration type.
     */
    UnableToUpload = "UnableToUpload",
    /**
     * "Upload Collection" illustration type.
     */
    UploadCollection = "UploadCollection",
  }
  /**
   * @SINCE 1.99.0
   * @EXPERIMENTAL (since 1.99.0)
   *
   * Interface for components that can be slotted inside `ui5-media-gallery` as items.
   */
  export interface IMediaGalleryItem {
    __implements__sap_ui_webc_fiori_IMediaGalleryItem: boolean;
  }

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Interface for components that may be slotted as an action inside `ui5-li-notification` and `ui5-li-notification-group`
   */
  export interface INotificationAction {
    __implements__sap_ui_webc_fiori_INotificationAction: boolean;
  }

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Interface for components that may be slotted inside a notification list
   */
  export interface INotificationListItem {
    __implements__sap_ui_webc_fiori_INotificationListItem: boolean;
  }

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Interface for components that may be slotted inside `ui5-product-switch` as items
   */
  export interface IProductSwitchItem {
    __implements__sap_ui_webc_fiori_IProductSwitchItem: boolean;
  }

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Interface for components that may be slotted inside `ui5-shellbar` as items
   */
  export interface IShellBarItem {
    __implements__sap_ui_webc_fiori_IShellBarItem: boolean;
  }

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Interface for components that may be slotted inside `ui5-side-navigation` as items
   */
  export interface ISideNavigationItem {
    __implements__sap_ui_webc_fiori_ISideNavigationItem: boolean;
  }

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Interface for components that may be slotted inside `ui5-side-navigation-item` as sub-items
   */
  export interface ISideNavigationSubItem {
    __implements__sap_ui_webc_fiori_ISideNavigationSubItem: boolean;
  }

  /**
   * @SINCE 1.97.0
   * @EXPERIMENTAL (since 1.97.0)
   *
   * Interface for components that may be slotted inside `ui5-view-settings-dialog` as sort items
   */
  export interface ISortItem {
    __implements__sap_ui_webc_fiori_ISortItem: boolean;
  }

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Interface for components that may be slotted inside `ui5-timeline` as items
   */
  export interface ITimelineItem {
    __implements__sap_ui_webc_fiori_ITimelineItem: boolean;
  }

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Interface for components that may be slotted inside `ui5-upload-collection` as items
   */
  export interface IUploadCollectionItem {
    __implements__sap_ui_webc_fiori_IUploadCollectionItem: boolean;
  }

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Interface for components that may be slotted inside `ui5-wizard` as wizard steps
   */
  export interface IWizardStep {
    __implements__sap_ui_webc_fiori_IWizardStep: boolean;
  }

  /**
   * @SINCE 1.99.0
   * @EXPERIMENTAL (since 1.99.0)
   *
   * Defines the layout of the content displayed in the `ui5-media-gallery-item`.
   */
  export enum MediaGalleryItemLayout {
    /**
     * Recommended to use when the item contains an image.
     *  When a thumbnail is selected, it makes the corresponding enlarged content appear in a square display
     * area.
     */
    Square = "Square",
    /**
     * Recommended to use when the item contains video content.
     *  When a thumbnail is selected, it makes the corresponding enlarged content appear in a wide display area
     * (stretched to fill all of the available width) for optimal user experiance.
     */
    Wide = "Wide",
  }
  /**
   * @SINCE 1.99.0
   * @EXPERIMENTAL (since 1.99.0)
   *
   * Defines the layout type of the thumbnails list of the `ui5-media-gallery` component.
   */
  export enum MediaGalleryLayout {
    /**
     * The layout is determined automatically.
     */
    Auto = "Auto",
    /**
     * Displays the layout as a horizontal split between the thumbnails list and the selected image.
     */
    Horizontal = "Horizontal",
    /**
     * Displays the layout as a vertical split between the thumbnails list and the selected image.
     */
    Vertical = "Vertical",
  }
  /**
   * @SINCE 1.99.0
   * @EXPERIMENTAL (since 1.99.0)
   *
   * Defines the horizontal alignment of the thumbnails menu of the `ui5-media-gallery` component.
   */
  export enum MediaGalleryMenuHorizontalAlign {
    /**
     * Displays the menu on the left side of the target.
     */
    Left = "Left",
    /**
     * Displays the menu on the right side of the target.
     */
    Right = "Right",
  }
  /**
   * @SINCE 1.99.0
   * @EXPERIMENTAL (since 1.99.0)
   *
   * Types for the vertical alignment of the thumbnails menu of the `ui5-media-gallery` component.
   */
  export enum MediaGalleryMenuVerticalAlign {
    /**
     * Displays the menu at the bottom of the reference control.
     */
    Bottom = "Bottom",
    /**
     * Displays the menu at the top of the reference control.
     */
    Top = "Top",
  }
  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * undefined
   */
  export enum PageBackgroundDesign {
    /**
     * Page background color when a List is set as the Page content.
     */
    List = "List",
    /**
     * A solid background color dependent on the theme.
     */
    Solid = "Solid",
    /**
     * Transparent background for the page.
     */
    Transparent = "Transparent",
  }
  /**
   * @SINCE 1.99.0
   * @EXPERIMENTAL (since 1.99.0)
   *
   * SideContent FallDown options.
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
   * @SINCE 1.99.0
   * @EXPERIMENTAL (since 1.99.0)
   *
   * Side Content position options.
   */
  export enum SideContentPosition {
    /**
     * The side content is on the right side of the main container in left-to-right mode and on the left side
     * in right-to-left mode.
     */
    End = "End",
    /**
     * The side content is on the left side of the main container in left-to-right mode and on the right side
     * in right-to-left mode.
     */
    Start = "Start",
  }
  /**
   * @SINCE 1.99.0
   * @EXPERIMENTAL (since 1.99.0)
   *
   * Side Content visibility options.
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
  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Different types of Timeline.
   */
  export enum TimelineLayout {
    /**
     * Horizontal layout
     */
    Horizontal = "Horizontal",
    /**
     * Vertical layout Default type
     */
    Vertical = "Vertical",
  }
  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * undefined
   */
  export enum UploadState {
    /**
     * The file has been uploaded successfully.
     */
    Complete = "Complete",
    /**
     * The file cannot be uploaded due to an error.
     */
    Error = "Error",
    /**
     * The file is awaiting an explicit command to start being uploaded.
     */
    Ready = "Ready",
    /**
     * The file is currently being uploaded.
     */
    Uploading = "Uploading",
  }
}

declare module "sap/ui/webc/fiori/Bar" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { IBar, BarDesign } from "sap/ui/webc/fiori/library";

  import Control from "sap/ui/core/Control";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import { CSSSize } from "sap/ui/core/library";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview: The Bar is a container which is primarily used to hold titles, buttons and input elements and
   * its design and functionality is the basis for page headers and footers. The component consists of three
   * areas to hold its content - startContent slot, default slot and endContent slot. It has the capability
   * to center content, such as a title, while having other components on the left and right side.
   *
   * Usage: With the use of the design property, you can set the style of the Bar to appear designed like
   * a Header, Subheader, Footer and FloatingFooter.
   *  **Note:** Do not place a Bar inside another Bar or inside any bar-like component. Doing so may cause
   * unpredictable behavior.
   *
   * Responsive Behavior: The default slot will be centered in the available space between the startContent
   * and the endContent areas, therefore it might not always be centered in the entire bar.
   *
   * CSS Shadow Parts:
   *
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/::part CSS Shadow Parts} allow developers to
   * style elements inside the Shadow DOM.
   *  The `sap.ui.webc.fiori.Bar` exposes the following CSS Shadow Parts:
   * 	 - bar - Used to style the wrapper of the content of the component
   *
   * Keyboard Handling:
   */
  export default class Bar extends WebComponent implements IBar {
    __implements__sap_ui_webc_fiori_IBar: boolean;
    /**
     * Constructor for a new `Bar`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $BarSettings
    );
    /**
     * Constructor for a new `Bar`.
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
      mSettings?: $BarSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.Bar with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Bar>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.Bar.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Adds some endContent to the aggregation {@link #getEndContent endContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addEndContent(
      /**
       * The endContent to add; if empty, nothing is inserted
       */
      oEndContent: Control
    ): this;
    /**
     * Adds some middleContent to the aggregation {@link #getMiddleContent middleContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addMiddleContent(
      /**
       * The middleContent to add; if empty, nothing is inserted
       */
      oMiddleContent: Control
    ): this;
    /**
     * Adds some startContent to the aggregation {@link #getStartContent startContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addStartContent(
      /**
       * The startContent to add; if empty, nothing is inserted
       */
      oStartContent: Control
    ): this;
    /**
     * Destroys all the endContent in the aggregation {@link #getEndContent endContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyEndContent(): this;
    /**
     * Destroys all the middleContent in the aggregation {@link #getMiddleContent middleContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyMiddleContent(): this;
    /**
     * Destroys all the startContent in the aggregation {@link #getStartContent startContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyStartContent(): this;
    /**
     * Gets current value of property {@link #getDesign design}.
     *
     * Defines the component's design.
     *
     *
     *
     *  **Note:** Available options are:
     * 	 - `Header`
     * 	 - `Subheader`
     * 	 - `Footer`
     * 	 - `FloatingFooter`
     *
     * Default value is `Header`.
     *
     * @returns Value of property `design`
     */
    getDesign(): BarDesign | keyof typeof BarDesign;
    /**
     * Gets content of aggregation {@link #getEndContent endContent}.
     *
     * Defines the content at the end of the bar
     */
    getEndContent(): Control[];
    /**
     * Gets content of aggregation {@link #getMiddleContent middleContent}.
     *
     * Defines the content in the middle of the bar
     */
    getMiddleContent(): Control[];
    /**
     * Gets content of aggregation {@link #getStartContent startContent}.
     *
     * Defines the content at the start of the bar
     */
    getStartContent(): Control[];
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Defines the width of the control
     *
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getEndContent endContent}. and
     * returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfEndContent(
      /**
       * The endContent whose index is looked for
       */
      oEndContent: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getMiddleContent middleContent}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfMiddleContent(
      /**
       * The middleContent whose index is looked for
       */
      oMiddleContent: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getStartContent startContent}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfStartContent(
      /**
       * The startContent whose index is looked for
       */
      oStartContent: Control
    ): int;
    /**
     * Inserts a endContent into the aggregation {@link #getEndContent endContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertEndContent(
      /**
       * The endContent to insert; if empty, nothing is inserted
       */
      oEndContent: Control,
      /**
       * The `0`-based index the endContent should be inserted at; for a negative value of `iIndex`, the endContent
       * is inserted at position 0; for a value greater than the current size of the aggregation, the endContent
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a middleContent into the aggregation {@link #getMiddleContent middleContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertMiddleContent(
      /**
       * The middleContent to insert; if empty, nothing is inserted
       */
      oMiddleContent: Control,
      /**
       * The `0`-based index the middleContent should be inserted at; for a negative value of `iIndex`, the middleContent
       * is inserted at position 0; for a value greater than the current size of the aggregation, the middleContent
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a startContent into the aggregation {@link #getStartContent startContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertStartContent(
      /**
       * The startContent to insert; if empty, nothing is inserted
       */
      oStartContent: Control,
      /**
       * The `0`-based index the startContent should be inserted at; for a negative value of `iIndex`, the startContent
       * is inserted at position 0; for a value greater than the current size of the aggregation, the startContent
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getEndContent endContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllEndContent(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getMiddleContent middleContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllMiddleContent(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getStartContent startContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllStartContent(): Control[];
    /**
     * Removes a endContent from the aggregation {@link #getEndContent endContent}.
     *
     * @returns The removed endContent or `null`
     */
    removeEndContent(
      /**
       * The endContent to remove or its index or id
       */
      vEndContent: int | string | Control
    ): Control | null;
    /**
     * Removes a middleContent from the aggregation {@link #getMiddleContent middleContent}.
     *
     * @returns The removed middleContent or `null`
     */
    removeMiddleContent(
      /**
       * The middleContent to remove or its index or id
       */
      vMiddleContent: int | string | Control
    ): Control | null;
    /**
     * Removes a startContent from the aggregation {@link #getStartContent startContent}.
     *
     * @returns The removed startContent or `null`
     */
    removeStartContent(
      /**
       * The startContent to remove or its index or id
       */
      vStartContent: int | string | Control
    ): Control | null;
    /**
     * Sets a new value for property {@link #getDesign design}.
     *
     * Defines the component's design.
     *
     *
     *
     *  **Note:** Available options are:
     * 	 - `Header`
     * 	 - `Subheader`
     * 	 - `Footer`
     * 	 - `FloatingFooter`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Header`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDesign(
      /**
       * New value for property `design`
       */
      sDesign?: BarDesign | keyof typeof BarDesign
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Defines the width of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth: CSSSize
    ): this;
  }

  export interface $BarSettings extends $WebComponentSettings {
    /**
     * Defines the component's design.
     *
     *
     *
     *  **Note:** Available options are:
     * 	 - `Header`
     * 	 - `Subheader`
     * 	 - `Footer`
     * 	 - `FloatingFooter`
     */
    design?:
      | (BarDesign | keyof typeof BarDesign)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the width of the control
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the content at the end of the bar
     */
    endContent?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Defines the content in the middle of the bar
     */
    middleContent?:
      | Control[]
      | Control
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Defines the content at the start of the bar
     */
    startContent?: Control[] | Control | AggregationBindingInfo | `{${string}}`;
  }
}

declare module "sap/ui/webc/fiori/BarcodeScannerDialog" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import Event from "sap/ui/base/Event";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  /**
   * @SINCE 1.95.0
   * @EXPERIMENTAL (since 1.95.0)
   *
   * Overview:
   *
   * The `BarcodeScannerDialog` component provides barcode scanning functionality for all devices that support
   * the `MediaDevices.getUserMedia()` native API. Opening the dialog launches the device camera and scans
   * for known barcode formats.
   *
   *  A `scanSuccess` event fires whenever a barcode is identified and a `scanError` event fires when the
   * scan failed (for example, due to missing permisions).
   *
   *  Internally, the component uses the zxing-js/library third party OSS.
   *
   * For a list of supported barcode formats, see the {@link https://github.com/zxing-js/library zxing-js/library}
   * documentation.
   */
  export default class BarcodeScannerDialog extends WebComponent {
    /**
     * Constructor for a new `BarcodeScannerDialog`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $BarcodeScannerDialogSettings
    );
    /**
     * Constructor for a new `BarcodeScannerDialog`.
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
      mSettings?: $BarcodeScannerDialogSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.BarcodeScannerDialog with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, BarcodeScannerDialog>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.BarcodeScannerDialog.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:scanError scanError} event of this `sap.ui.webc.fiori.BarcodeScannerDialog`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.BarcodeScannerDialog` itself.
     *
     * Fires when the scan fails with error.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachScanError(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.BarcodeScannerDialog`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:scanError scanError} event of this `sap.ui.webc.fiori.BarcodeScannerDialog`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.BarcodeScannerDialog` itself.
     *
     * Fires when the scan fails with error.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachScanError(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.BarcodeScannerDialog`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:scanSuccess scanSuccess} event of this `sap.ui.webc.fiori.BarcodeScannerDialog`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.BarcodeScannerDialog` itself.
     *
     * Fires when the scan is completed successfuuly.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachScanSuccess(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.BarcodeScannerDialog`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:scanSuccess scanSuccess} event of this `sap.ui.webc.fiori.BarcodeScannerDialog`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.BarcodeScannerDialog` itself.
     *
     * Fires when the scan is completed successfuuly.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachScanSuccess(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.BarcodeScannerDialog`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Closes the dialog and the scan session.
     */
    close(): void;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:scanError scanError} event of this `sap.ui.webc.fiori.BarcodeScannerDialog`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachScanError(
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
     * Detaches event handler `fnFunction` from the {@link #event:scanSuccess scanSuccess} event of this `sap.ui.webc.fiori.BarcodeScannerDialog`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachScanSuccess(
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
     * Fires event {@link #event:scanError scanError} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireScanError(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * the error message
         */
        message?: string;
      }
    ): this;
    /**
     * Fires event {@link #event:scanSuccess scanSuccess} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireScanSuccess(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * the scan result as string
         */
        text?: string;
        /**
         * the scan result as a Uint8Array
         */
        rawBytes?: object;
      }
    ): this;
    /**
     * Shows a dialog with the camera videostream. Starts a scan session.
     */
    show(): void;
  }

  export interface $BarcodeScannerDialogSettings extends $WebComponentSettings {
    /**
     * Fires when the scan fails with error.
     */
    scanError?: (oEvent: Event) => void;

    /**
     * Fires when the scan is completed successfuuly.
     */
    scanSuccess?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/webc/fiori/DynamicSideContent" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import Control from "sap/ui/core/Control";

  import Event from "sap/ui/base/Event";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    SideContentFallDown,
    SideContentPosition,
    SideContentVisibility,
  } from "sap/ui/webc/fiori/library";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.99.0
   * @EXPERIMENTAL (since 1.99.0)
   *
   * Overview:
   *
   * The DynamicSideContent (`sap.ui.webc.fiori.DynamicSideContent`) is a layout component that allows additional
   * content to be displayed in a way that flexibly adapts to different screen sizes. The side content appears
   * in a container next to or directly below the main content (it doesn't overlay). When the side content
   * is triggered, the main content becomes narrower (if appearing side-by-side). The side content contains
   * a separate scrollbar when appearing next to the main content.
   *
   * Usage:
   *
   * When to use?
   *
   * Use this component if you want to display relevant information that is not critical for users to complete
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
   * Screen width > 1440px
   *
   *
   * 	 - Main vs. side content ratio is 75 vs. 25 percent (with a minimum of 320px each).
   * 	 - If the application defines a trigger, the side content can be hidden.
   *
   * Screen width <= 1440px and> 1024px
   *
   *
   * 	 - Main vs. side content ratio is 66.666 vs. 33.333 percent (with a minimum of 320px each). If the side
   * 			content width falls below 320 px, it automatically slides under the main content, unless the app development
   * 			team specifies that it should disappear.
   *
   * Screen width <= 1024px and> 720px
   *
   *
   * 	 - The side content ratio is fixed to 340px, and the main content takes the rest of the width. Only
   * 			if the `sideContentFallDown` is set to `OnMinimumWidth` and screen width is <= 960px and> 720px the side
   * 			content falls below the main content.
   *
   * Screen width <= 720px (for example on a mobile device)
   * 	 - In this case, the side content automatically disappears from the screen (unless specified to stay
   * 			under the content by setting of `sideContentVisibility` property to `AlwaysShow`) and can be triggered
   * 			from a pre-set trigger (specified within the app). When the side content is triggered, it replaces the
   * 			main content. We recommend that you always place the trigger for the side content in the same location,
   * 			such as in the app footer.
   *
   * A special case allows switching the comparison mode between the main and side content. In this case,
   * the screen is split into 50:50 percent for main vs. side content. The responsive behavior of the equal
   * split is the same as in the standard view - the side content disappears on screen widths of less than
   * 720 px and can only be viewed by triggering it.
   */
  export default class DynamicSideContent extends WebComponent {
    /**
     * Constructor for a new `DynamicSideContent`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
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
     * Creates a new subclass of class sap.ui.webc.fiori.DynamicSideContent with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, DynamicSideContent>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.DynamicSideContent.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
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
     * Adds some sideContent to the aggregation {@link #getSideContent sideContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addSideContent(
      /**
       * The sideContent to add; if empty, nothing is inserted
       */
      oSideContent: Control
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:layoutChange layoutChange} event of this `sap.ui.webc.fiori.DynamicSideContent`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.DynamicSideContent` itself.
     *
     * Fires when the current breakpoint has been changed.
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.DynamicSideContent`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:layoutChange layoutChange} event of this `sap.ui.webc.fiori.DynamicSideContent`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.DynamicSideContent` itself.
     *
     * Fires when the current breakpoint has been changed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachLayoutChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.DynamicSideContent`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;
    /**
     * Destroys all the sideContent in the aggregation {@link #getSideContent sideContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySideContent(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:layoutChange layoutChange} event of this `sap.ui.webc.fiori.DynamicSideContent`.
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
         * the current breakpoint.
         */
        currentBreakpoint?: string;
        /**
         * the breakpoint that was active before change to current breakpoint.
         */
        previousBreakpoint?: string;
        /**
         * visibility of the main content.
         */
        mainContentVisible?: boolean;
        /**
         * visibility of the side content.
         */
        sideContentVisible?: boolean;
      }
    ): this;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Defines the main content.
     */
    getContent(): Control[];
    /**
     * Gets current value of property {@link #getEqualSplit equalSplit}.
     *
     * Defines whether the component is in equal split mode. In this mode, the side and the main content take
     * 50:50 percent of the container on all screen sizes except for phone, where the main and side contents
     * are switching visibility using the toggle method.
     *
     * Default value is `false`.
     *
     * @returns Value of property `equalSplit`
     */
    getEqualSplit(): boolean;
    /**
     * Gets current value of property {@link #getHideMainContent hideMainContent}.
     *
     * Defines the visibility of the main content.
     *
     * Default value is `false`.
     *
     * @returns Value of property `hideMainContent`
     */
    getHideMainContent(): boolean;
    /**
     * Gets current value of property {@link #getHideSideContent hideSideContent}.
     *
     * Defines the visibility of the side content.
     *
     * Default value is `false`.
     *
     * @returns Value of property `hideSideContent`
     */
    getHideSideContent(): boolean;
    /**
     * Gets content of aggregation {@link #getSideContent sideContent}.
     *
     * Defines the side content.
     */
    getSideContent(): Control[];
    /**
     * Gets current value of property {@link #getSideContentFallDown sideContentFallDown}.
     *
     * Defines on which breakpoints the side content falls down below the main content.
     *
     *
     *
     *  **The available values are:**
     *
     *
     * 	 - `BelowXL`
     * 	 - `BelowL`
     * 	 - `BelowM`
     * 	 - `OnMinimumWidth`
     *
     * Default value is `OnMinimumWidth`.
     *
     * @returns Value of property `sideContentFallDown`
     */
    getSideContentFallDown():
      | SideContentFallDown
      | keyof typeof SideContentFallDown;
    /**
     * Gets current value of property {@link #getSideContentPosition sideContentPosition}.
     *
     * Defines whether the side content is positioned before the main content (left side in LTR mode), or after
     * the the main content (right side in LTR mode).
     *
     *
     *
     *  **The available values are:**
     *
     *
     * 	 - `Start`
     * 	 - `End`
     *
     * Default value is `End`.
     *
     * @returns Value of property `sideContentPosition`
     */
    getSideContentPosition():
      | SideContentPosition
      | keyof typeof SideContentPosition;
    /**
     * Gets current value of property {@link #getSideContentVisibility sideContentVisibility}.
     *
     * Defines on which breakpoints the side content is visible.
     *
     *
     *
     *  **The available values are:**
     *
     *
     * 	 - `AlwaysShow`
     * 	 - `ShowAboveL`
     * 	 - `ShowAboveM`
     * 	 - `ShowAboveS`
     * 	 - `NeverShow`
     *
     * Default value is `ShowAboveS`.
     *
     * @returns Value of property `sideContentVisibility`
     */
    getSideContentVisibility():
      | SideContentVisibility
      | keyof typeof SideContentVisibility;
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
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getSideContent sideContent}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfSideContent(
      /**
       * The sideContent whose index is looked for
       */
      oSideContent: Control
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
     * Inserts a sideContent into the aggregation {@link #getSideContent sideContent}.
     *
     * @returns Reference to `this` in order to allow method chaining
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
     * Removes all the controls from the aggregation {@link #getContent content}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllContent(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getSideContent sideContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllSideContent(): Control[];
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
     * Removes a sideContent from the aggregation {@link #getSideContent sideContent}.
     *
     * @returns The removed sideContent or `null`
     */
    removeSideContent(
      /**
       * The sideContent to remove or its index or id
       */
      vSideContent: int | string | Control
    ): Control | null;
    /**
     * Sets a new value for property {@link #getEqualSplit equalSplit}.
     *
     * Defines whether the component is in equal split mode. In this mode, the side and the main content take
     * 50:50 percent of the container on all screen sizes except for phone, where the main and side contents
     * are switching visibility using the toggle method.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEqualSplit(
      /**
       * New value for property `equalSplit`
       */
      bEqualSplit?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getHideMainContent hideMainContent}.
     *
     * Defines the visibility of the main content.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHideMainContent(
      /**
       * New value for property `hideMainContent`
       */
      bHideMainContent?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getHideSideContent hideSideContent}.
     *
     * Defines the visibility of the side content.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHideSideContent(
      /**
       * New value for property `hideSideContent`
       */
      bHideSideContent?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSideContentFallDown sideContentFallDown}.
     *
     * Defines on which breakpoints the side content falls down below the main content.
     *
     *
     *
     *  **The available values are:**
     *
     *
     * 	 - `BelowXL`
     * 	 - `BelowL`
     * 	 - `BelowM`
     * 	 - `OnMinimumWidth`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `OnMinimumWidth`.
     *
     * @returns Reference to `this` in order to allow method chaining
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
     * Sets a new value for property {@link #getSideContentPosition sideContentPosition}.
     *
     * Defines whether the side content is positioned before the main content (left side in LTR mode), or after
     * the the main content (right side in LTR mode).
     *
     *
     *
     *  **The available values are:**
     *
     *
     * 	 - `Start`
     * 	 - `End`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `End`.
     *
     * @returns Reference to `this` in order to allow method chaining
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
     * Sets a new value for property {@link #getSideContentVisibility sideContentVisibility}.
     *
     * Defines on which breakpoints the side content is visible.
     *
     *
     *
     *  **The available values are:**
     *
     *
     * 	 - `AlwaysShow`
     * 	 - `ShowAboveL`
     * 	 - `ShowAboveM`
     * 	 - `ShowAboveS`
     * 	 - `NeverShow`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `ShowAboveS`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSideContentVisibility(
      /**
       * New value for property `sideContentVisibility`
       */
      sSideContentVisibility?:
        | SideContentVisibility
        | keyof typeof SideContentVisibility
    ): this;
    /**
     * Toggles visibility of main and side contents on S screen size (mobile device).
     */
    toggleContents(): void;
  }

  export interface $DynamicSideContentSettings extends $WebComponentSettings {
    /**
     * Defines whether the component is in equal split mode. In this mode, the side and the main content take
     * 50:50 percent of the container on all screen sizes except for phone, where the main and side contents
     * are switching visibility using the toggle method.
     */
    equalSplit?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the visibility of the main content.
     */
    hideMainContent?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the visibility of the side content.
     */
    hideSideContent?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines on which breakpoints the side content falls down below the main content.
     *
     *
     *
     *  **The available values are:**
     *
     *
     * 	 - `BelowXL`
     * 	 - `BelowL`
     * 	 - `BelowM`
     * 	 - `OnMinimumWidth`
     */
    sideContentFallDown?:
      | (SideContentFallDown | keyof typeof SideContentFallDown)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines whether the side content is positioned before the main content (left side in LTR mode), or after
     * the the main content (right side in LTR mode).
     *
     *
     *
     *  **The available values are:**
     *
     *
     * 	 - `Start`
     * 	 - `End`
     */
    sideContentPosition?:
      | (SideContentPosition | keyof typeof SideContentPosition)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines on which breakpoints the side content is visible.
     *
     *
     *
     *  **The available values are:**
     *
     *
     * 	 - `AlwaysShow`
     * 	 - `ShowAboveL`
     * 	 - `ShowAboveM`
     * 	 - `ShowAboveS`
     * 	 - `NeverShow`
     */
    sideContentVisibility?:
      | (SideContentVisibility | keyof typeof SideContentVisibility)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the main content.
     */
    content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Defines the side content.
     */
    sideContent?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Fires when the current breakpoint has been changed.
     */
    layoutChange?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/webc/fiori/FilterItem" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { IFilterItem, IFilterItemOption } from "sap/ui/webc/fiori/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.97.0
   * @EXPERIMENTAL (since 1.97.0)
   *
   * Overview:
   *
   * Usage:
   */
  export default class FilterItem extends WebComponent implements IFilterItem {
    __implements__sap_ui_webc_fiori_IFilterItem: boolean;
    /**
     * Constructor for a new `FilterItem`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $FilterItemSettings
    );
    /**
     * Constructor for a new `FilterItem`.
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
      mSettings?: $FilterItemSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.FilterItem with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, FilterItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.FilterItem.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Adds some value to the aggregation {@link #getValues values}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addValue(
      /**
       * The value to add; if empty, nothing is inserted
       */
      oValue: IFilterItemOption
    ): this;
    /**
     * Destroys all the values in the aggregation {@link #getValues values}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyValues(): this;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Defines the text of the component.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `text`
     */
    getText(): string;
    /**
     * Gets content of aggregation {@link #getValues values}.
     *
     * Defines the `values` list.
     */
    getValues(): IFilterItemOption[];
    /**
     * Checks for the provided `sap.ui.webc.fiori.IFilterItemOption` in the aggregation {@link #getValues values}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfValue(
      /**
       * The value whose index is looked for
       */
      oValue: IFilterItemOption
    ): int;
    /**
     * Inserts a value into the aggregation {@link #getValues values}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertValue(
      /**
       * The value to insert; if empty, nothing is inserted
       */
      oValue: IFilterItemOption,
      /**
       * The `0`-based index the value should be inserted at; for a negative value of `iIndex`, the value is inserted
       * at position 0; for a value greater than the current size of the aggregation, the value is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getValues values}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllValues(): IFilterItemOption[];
    /**
     * Removes a value from the aggregation {@link #getValues values}.
     *
     * @returns The removed value or `null`
     */
    removeValue(
      /**
       * The value to remove or its index or id
       */
      vValue: int | string | IFilterItemOption
    ): IFilterItemOption | null;
    /**
     * Sets a new value for property {@link #getText text}.
     *
     * Defines the text of the component.
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
  }

  export interface $FilterItemSettings extends $WebComponentSettings {
    /**
     * Defines the text of the component.
     */
    text?: string | PropertyBindingInfo;

    /**
     * Defines the `values` list.
     */
    values?:
      | IFilterItemOption[]
      | IFilterItemOption
      | AggregationBindingInfo
      | `{${string}}`;
  }
}

declare module "sap/ui/webc/fiori/FilterItemOption" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { IFilterItemOption } from "sap/ui/webc/fiori/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.97.0
   * @EXPERIMENTAL (since 1.97.0)
   *
   * Overview:
   *
   * Usage:
   */
  export default class FilterItemOption
    extends WebComponent
    implements IFilterItemOption {
    __implements__sap_ui_webc_fiori_IFilterItemOption: boolean;
    /**
     * Constructor for a new `FilterItemOption`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $FilterItemOptionSettings
    );
    /**
     * Constructor for a new `FilterItemOption`.
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
      mSettings?: $FilterItemOptionSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.FilterItemOption with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, FilterItemOption>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.FilterItemOption.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Gets current value of property {@link #getSelected selected}.
     *
     * Defines whether the option is selected
     *
     * Default value is `false`.
     *
     * @returns Value of property `selected`
     */
    getSelected(): boolean;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Defines the text of the component.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `text`
     */
    getText(): string;
    /**
     * Sets a new value for property {@link #getSelected selected}.
     *
     * Defines whether the option is selected
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
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
     * Sets a new value for property {@link #getText text}.
     *
     * Defines the text of the component.
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
  }

  export interface $FilterItemOptionSettings extends $WebComponentSettings {
    /**
     * Defines whether the option is selected
     */
    selected?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the text of the component.
     */
    text?: string | PropertyBindingInfo;
  }
}

declare module "sap/ui/webc/fiori/FlexibleColumnLayout" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import Event from "sap/ui/base/Event";

  import Control from "sap/ui/core/Control";

  import { CSSSize } from "sap/ui/core/library";

  import { FCLLayout } from "sap/ui/webc/fiori/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview:
   *
   * The `FlexibleColumnLayout` implements the list-detail-detail paradigm by displaying up to three pages
   * in separate columns. There are several possible layouts that can be changed either with the component
   * API, or by pressing the arrows, displayed between the columns.
   *
   * Usage:
   *
   * Use this component for applications that need to display several logical levels of related information
   * side by side (e.g. list of items, item, sub-item, etc.). The Component is flexible in a sense that the
   * application can focus the user's attention on one particular column.
   *
   * Responsive Behavior:
   *
   * The `FlexibleColumnLayout` automatically displays the maximum possible number of columns based on `layout`
   * property and the window size. The component would display 1 column for window size smaller than 599px,
   * up to two columns between 599px and 1023px, and 3 columns for sizes bigger than 1023px.
   *
   *
   *
   *  Keyboard Handling:
   */
  export default class FlexibleColumnLayout extends WebComponent {
    /**
     * Constructor for a new `FlexibleColumnLayout`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $FlexibleColumnLayoutSettings
    );
    /**
     * Constructor for a new `FlexibleColumnLayout`.
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
      mSettings?: $FlexibleColumnLayoutSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.FlexibleColumnLayout with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
     * Returns a metadata object for class sap.ui.webc.fiori.FlexibleColumnLayout.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:layoutChange layoutChange} event of this `sap.ui.webc.fiori.FlexibleColumnLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.FlexibleColumnLayout` itself.
     *
     * Fired when the layout changes via user interaction by clicking the arrows or by changing the component
     * size due to resizing.
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.FlexibleColumnLayout`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:layoutChange layoutChange} event of this `sap.ui.webc.fiori.FlexibleColumnLayout`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.FlexibleColumnLayout` itself.
     *
     * Fired when the layout changes via user interaction by clicking the arrows or by changing the component
     * size due to resizing.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachLayoutChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.FlexibleColumnLayout`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys the endColumn in the aggregation {@link #getEndColumn endColumn}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyEndColumn(): this;
    /**
     * Destroys the midColumn in the aggregation {@link #getMidColumn midColumn}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyMidColumn(): this;
    /**
     * Destroys the startColumn in the aggregation {@link #getStartColumn startColumn}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyStartColumn(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:layoutChange layoutChange} event of this `sap.ui.webc.fiori.FlexibleColumnLayout`.
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
         * The current layout
         */
        layout?: FCLLayout;
        /**
         * The effective column layout, f.e [67%, 33%, 0]
         */
        columnLayout?: any[];
        /**
         * Indicates if the start column is currently visible
         */
        startColumnVisible?: boolean;
        /**
         * Indicates if the middle column is currently visible
         */
        midColumnVisible?: boolean;
        /**
         * Indicates if the end column is currently visible
         */
        endColumnVisible?: boolean;
        /**
         * Indicates if the layout is changed via the arrows
         */
        arrowsUsed?: boolean;
        /**
         * Indicates if the layout is changed via resizing
         */
        resize?: boolean;
      }
    ): this;
    /**
     * Gets current value of property {@link #getAccessibilityRoles accessibilityRoles}.
     *
     * An object of strings that defines additional accessibility roles for further customization.
     *
     * It supports the following fields: - `startColumnRole`: the accessibility role for the `startColumn` -
     * `startArrowContainerRole`: the accessibility role for the first arrow container (between the `begin`
     * and `mid` columns) - `midColumnRole`: the accessibility role for the `midColumn` - `endArrowContainerRole`:
     * the accessibility role for the second arrow container (between the `mid` and `end` columns) - `endColumnRole`:
     * the accessibility role for the `endColumn`
     *
     * Default value is `{}`.
     *
     * @returns Value of property `accessibilityRoles`
     */
    getAccessibilityRoles(): object;
    /**
     * Gets current value of property {@link #getAccessibilityTexts accessibilityTexts}.
     *
     * An object of strings that defines several additional accessibility texts for even further customization.
     *
     * It supports the following fields: - `startColumnAccessibleName`: the accessibility name for the `startColumn`
     * region - `midColumnAccessibleName`: the accessibility name for the `midColumn` region - `endColumnAccessibleName`:
     * the accessibility name for the `endColumn` region - `startArrowLeftText`: the text that the first arrow
     * (between the `begin` and `mid` columns) will have when pointing to the left - `startArrowRightText`:
     * the text that the first arrow (between the `begin` and `mid` columns) will have when pointing to the
     * right - `endArrowLeftText`: the text that the second arrow (between the `mid` and `end` columns) will
     * have when pointing to the left - `endArrowRightText`: the text that the second arrow (between the `mid`
     * and `end` columns) will have when pointing to the right - `startArrowContainerAccessibleName`: the text
     * that the first arrow container (between the `begin` and `mid` columns) will have as `aria-label` - `endArrowContainerAccessibleName`:
     * the text that the second arrow container (between the `mid` and `end` columns) will have as `aria-label`
     *
     * Default value is `{}`.
     *
     * @returns Value of property `accessibilityTexts`
     */
    getAccessibilityTexts(): object;
    /**
     * Returns the current column layout, based on both the `layout` property and the screen size.
     *
     *  **For example:** ["67%", "33%", 0], ["100%", 0, 0], ["25%", "50%", "25%"], etc, where the numbers represents
     * the width of the start, middle and end columns.
     */
    getColumnLayout(): void;
    /**
     * Gets content of aggregation {@link #getEndColumn endColumn}.
     *
     * Defines the content in the end column.
     */
    getEndColumn(): Control;
    /**
     * Returns if the `end` column is visible.
     */
    getEndColumnVisible(): void;
    /**
     * Gets current value of property {@link #getHeight height}.
     *
     * Defines the height of the control
     *
     * @returns Value of property `height`
     */
    getHeight(): CSSSize;
    /**
     * Gets current value of property {@link #getHideArrows hideArrows}.
     *
     * Defines the visibility of the arrows, used for expanding and shrinking the columns.
     *
     * Default value is `false`.
     *
     * @returns Value of property `hideArrows`
     */
    getHideArrows(): boolean;
    /**
     * Gets current value of property {@link #getLayout layout}.
     *
     * Defines the columns layout and their proportion.
     *
     *  **Note:** The layout also depends on the screen size - one column for screens smaller than 599px, two
     * columns between 599px and 1023px and three columns for sizes bigger than 1023px.
     *
     *  Available options are:
     * 	 - `OneColumn`
     * 	 - `TwoColumnsStartExpanded`
     * 	 - `TwoColumnsMidExpanded`
     * 	 - `ThreeColumnsMidExpanded`
     * 	 - `ThreeColumnsEndExpanded`
     * 	 - `ThreeColumnsStartExpandedEndHidden`
     * 	 - `ThreeColumnsMidExpandedEndHidden`
     * 	 - `MidColumnFullScreen`
     * 	 - `EndColumnFullScreen`
     *
     *  **For example:** layout=`TwoColumnsStartExpanded` means the layout will display up to two columns in
     * 67%/33% proportion.
     *
     * Default value is `OneColumn`.
     *
     * @returns Value of property `layout`
     */
    getLayout(): FCLLayout | keyof typeof FCLLayout;
    /**
     * Gets content of aggregation {@link #getMidColumn midColumn}.
     *
     * Defines the content in the middle column.
     */
    getMidColumn(): Control;
    /**
     * Returns if the `middle` column is visible.
     */
    getMidColumnVisible(): void;
    /**
     * Gets content of aggregation {@link #getStartColumn startColumn}.
     *
     * Defines the content in the start column.
     */
    getStartColumn(): Control;
    /**
     * Returns if the `start` column is visible.
     */
    getStartColumnVisible(): void;
    /**
     * Returns the number of currently visible columns.
     */
    getVisibleColumns(): void;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Defines the width of the control
     *
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
    /**
     * Sets a new value for property {@link #getAccessibilityRoles accessibilityRoles}.
     *
     * An object of strings that defines additional accessibility roles for further customization.
     *
     * It supports the following fields: - `startColumnRole`: the accessibility role for the `startColumn` -
     * `startArrowContainerRole`: the accessibility role for the first arrow container (between the `begin`
     * and `mid` columns) - `midColumnRole`: the accessibility role for the `midColumn` - `endArrowContainerRole`:
     * the accessibility role for the second arrow container (between the `mid` and `end` columns) - `endColumnRole`:
     * the accessibility role for the `endColumn`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `{}`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibilityRoles(
      /**
       * New value for property `accessibilityRoles`
       */
      oAccessibilityRoles?: object
    ): this;
    /**
     * Sets a new value for property {@link #getAccessibilityTexts accessibilityTexts}.
     *
     * An object of strings that defines several additional accessibility texts for even further customization.
     *
     * It supports the following fields: - `startColumnAccessibleName`: the accessibility name for the `startColumn`
     * region - `midColumnAccessibleName`: the accessibility name for the `midColumn` region - `endColumnAccessibleName`:
     * the accessibility name for the `endColumn` region - `startArrowLeftText`: the text that the first arrow
     * (between the `begin` and `mid` columns) will have when pointing to the left - `startArrowRightText`:
     * the text that the first arrow (between the `begin` and `mid` columns) will have when pointing to the
     * right - `endArrowLeftText`: the text that the second arrow (between the `mid` and `end` columns) will
     * have when pointing to the left - `endArrowRightText`: the text that the second arrow (between the `mid`
     * and `end` columns) will have when pointing to the right - `startArrowContainerAccessibleName`: the text
     * that the first arrow container (between the `begin` and `mid` columns) will have as `aria-label` - `endArrowContainerAccessibleName`:
     * the text that the second arrow container (between the `mid` and `end` columns) will have as `aria-label`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `{}`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibilityTexts(
      /**
       * New value for property `accessibilityTexts`
       */
      oAccessibilityTexts?: object
    ): this;
    /**
     * Sets the aggregated {@link #getEndColumn endColumn}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEndColumn(
      /**
       * The endColumn to set
       */
      oEndColumn: Control
    ): this;
    /**
     * Sets a new value for property {@link #getHeight height}.
     *
     * Defines the height of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeight(
      /**
       * New value for property `height`
       */
      sHeight: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getHideArrows hideArrows}.
     *
     * Defines the visibility of the arrows, used for expanding and shrinking the columns.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHideArrows(
      /**
       * New value for property `hideArrows`
       */
      bHideArrows?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getLayout layout}.
     *
     * Defines the columns layout and their proportion.
     *
     *  **Note:** The layout also depends on the screen size - one column for screens smaller than 599px, two
     * columns between 599px and 1023px and three columns for sizes bigger than 1023px.
     *
     *  Available options are:
     * 	 - `OneColumn`
     * 	 - `TwoColumnsStartExpanded`
     * 	 - `TwoColumnsMidExpanded`
     * 	 - `ThreeColumnsMidExpanded`
     * 	 - `ThreeColumnsEndExpanded`
     * 	 - `ThreeColumnsStartExpandedEndHidden`
     * 	 - `ThreeColumnsMidExpandedEndHidden`
     * 	 - `MidColumnFullScreen`
     * 	 - `EndColumnFullScreen`
     *
     *  **For example:** layout=`TwoColumnsStartExpanded` means the layout will display up to two columns in
     * 67%/33% proportion.
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
      sLayout?: FCLLayout | keyof typeof FCLLayout
    ): this;
    /**
     * Sets the aggregated {@link #getMidColumn midColumn}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMidColumn(
      /**
       * The midColumn to set
       */
      oMidColumn: Control
    ): this;
    /**
     * Sets the aggregated {@link #getStartColumn startColumn}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setStartColumn(
      /**
       * The startColumn to set
       */
      oStartColumn: Control
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Defines the width of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth: CSSSize
    ): this;
  }

  export interface $FlexibleColumnLayoutSettings extends $WebComponentSettings {
    /**
     * An object of strings that defines additional accessibility roles for further customization.
     *
     * It supports the following fields: - `startColumnRole`: the accessibility role for the `startColumn` -
     * `startArrowContainerRole`: the accessibility role for the first arrow container (between the `begin`
     * and `mid` columns) - `midColumnRole`: the accessibility role for the `midColumn` - `endArrowContainerRole`:
     * the accessibility role for the second arrow container (between the `mid` and `end` columns) - `endColumnRole`:
     * the accessibility role for the `endColumn`
     */
    accessibilityRoles?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * An object of strings that defines several additional accessibility texts for even further customization.
     *
     * It supports the following fields: - `startColumnAccessibleName`: the accessibility name for the `startColumn`
     * region - `midColumnAccessibleName`: the accessibility name for the `midColumn` region - `endColumnAccessibleName`:
     * the accessibility name for the `endColumn` region - `startArrowLeftText`: the text that the first arrow
     * (between the `begin` and `mid` columns) will have when pointing to the left - `startArrowRightText`:
     * the text that the first arrow (between the `begin` and `mid` columns) will have when pointing to the
     * right - `endArrowLeftText`: the text that the second arrow (between the `mid` and `end` columns) will
     * have when pointing to the left - `endArrowRightText`: the text that the second arrow (between the `mid`
     * and `end` columns) will have when pointing to the right - `startArrowContainerAccessibleName`: the text
     * that the first arrow container (between the `begin` and `mid` columns) will have as `aria-label` - `endArrowContainerAccessibleName`:
     * the text that the second arrow container (between the `mid` and `end` columns) will have as `aria-label`
     */
    accessibilityTexts?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the height of the control
     */
    height?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the visibility of the arrows, used for expanding and shrinking the columns.
     */
    hideArrows?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the columns layout and their proportion.
     *
     *  **Note:** The layout also depends on the screen size - one column for screens smaller than 599px, two
     * columns between 599px and 1023px and three columns for sizes bigger than 1023px.
     *
     *  Available options are:
     * 	 - `OneColumn`
     * 	 - `TwoColumnsStartExpanded`
     * 	 - `TwoColumnsMidExpanded`
     * 	 - `ThreeColumnsMidExpanded`
     * 	 - `ThreeColumnsEndExpanded`
     * 	 - `ThreeColumnsStartExpandedEndHidden`
     * 	 - `ThreeColumnsMidExpandedEndHidden`
     * 	 - `MidColumnFullScreen`
     * 	 - `EndColumnFullScreen`
     *
     *  **For example:** layout=`TwoColumnsStartExpanded` means the layout will display up to two columns in
     * 67%/33% proportion.
     */
    layout?:
      | (FCLLayout | keyof typeof FCLLayout)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the width of the control
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the content in the end column.
     */
    endColumn?: Control;

    /**
     * Defines the content in the middle column.
     */
    midColumn?: Control;

    /**
     * Defines the content in the start column.
     */
    startColumn?: Control;

    /**
     * Fired when the layout changes via user interaction by clicking the arrows or by changing the component
     * size due to resizing.
     */
    layoutChange?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/webc/fiori/IllustratedMessage" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { IButton } from "sap/ui/webc/main/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    IllustrationMessageType,
    IllustrationMessageSize,
  } from "sap/ui/webc/fiori/library";

  import Control from "sap/ui/core/Control";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.95.0
   * @EXPERIMENTAL (since 1.95.0)
   *
   * Overview: An IllustratedMessage is a recommended combination of a solution-oriented message, an engaging
   * illustration, and conversational tone to better communicate an empty or a success state than just show
   * a message alone.
   *
   * Each illustration has default internationalised title and subtitle texts. Also they can be managed with
   * `titleText` and `subtitleText` properties.
   *
   * Structure: The IllustratedMessage consists of the following elements, which are displayed below each
   * other in the following order:
   *
   *
   *
   * 	 - Illustration
   * 	 - Title
   * 	 - Subtitle
   * 	 - Actions
   *
   * Usage: `sap.ui.webc.fiori.IllustratedMessage` is meant to be used inside container component, for example
   * a `sap.ui.webc.main.Card`, a `sap.ui.webc.main.Dialog` or a `sap.ui.webc.fiori.Page`
   */
  export default class IllustratedMessage extends WebComponent {
    /**
     * Constructor for a new `IllustratedMessage`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
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
     * Creates a new subclass of class sap.ui.webc.fiori.IllustratedMessage with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
     * Returns a metadata object for class sap.ui.webc.fiori.IllustratedMessage.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Adds some action to the aggregation {@link #getActions actions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addAction(
      /**
       * The action to add; if empty, nothing is inserted
       */
      oAction: IButton
    ): this;
    /**
     * Destroys all the actions in the aggregation {@link #getActions actions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyActions(): this;
    /**
     * Destroys the subtitle in the aggregation {@link #getSubtitle subtitle}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySubtitle(): this;
    /**
     * Gets content of aggregation {@link #getActions actions}.
     *
     * Defines the component actions.
     */
    getActions(): IButton[];
    /**
     * Gets current value of property {@link #getName name}.
     *
     * Default value is `BeforeSearch`.
     *
     * @returns Value of property `name`
     */
    getName(): IllustrationMessageType | keyof typeof IllustrationMessageType;
    /**
     * Gets current value of property {@link #getSize size}.
     *
     * Determines which illustration breakpoint variant is used.
     *
     *  Available options are:
     * 	 - `Auto`
     * 	 - `Base`
     * 	 - `Spot`
     * 	 - `Dialog`
     * 	 - `Scene`
     *
     * As `IllustratedMessage` adapts itself around the `Illustration`, the other elements of the component
     * are displayed differently on the different breakpoints/illustration sizes.
     *
     * Default value is `Auto`.
     *
     * @returns Value of property `size`
     */
    getSize(): IllustrationMessageSize | keyof typeof IllustrationMessageSize;
    /**
     * Gets content of aggregation {@link #getSubtitle subtitle}.
     *
     * Defines the subtitle of the component.
     *
     *  **Note:** Using this slot, the default subtitle text of illustration and the value of `subtitleText`
     * property will be overwritten.
     */
    getSubtitle(): Control;
    /**
     * Gets current value of property {@link #getSubtitleText subtitleText}.
     *
     * Defines the subtitle of the component.
     *
     *  **Note:** Using this property, the default subtitle text of illustration will be overwritten.
     *
     *  **Note:** Using `subtitle` slot, the default of this property will be overwritten.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `subtitleText`
     */
    getSubtitleText(): string;
    /**
     * Gets current value of property {@link #getTitleText titleText}.
     *
     * Defines the title of the component.
     *
     *  **Note:** Using this property, the default title text of illustration will be overwritten.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `titleText`
     */
    getTitleText(): string;
    /**
     * Checks for the provided `sap.ui.webc.main.IButton` in the aggregation {@link #getActions actions}. and
     * returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfAction(
      /**
       * The action whose index is looked for
       */
      oAction: IButton
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
      oAction: IButton,
      /**
       * The `0`-based index the action should be inserted at; for a negative value of `iIndex`, the action is
       * inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted
       * at the last position
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
      vAction: int | string | IButton
    ): IButton | null;
    /**
     * Removes all the controls from the aggregation {@link #getActions actions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllActions(): IButton[];
    /**
     * Sets a new value for property {@link #getName name}.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `BeforeSearch`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setName(
      /**
       * New value for property `name`
       */
      sName?: IllustrationMessageType | keyof typeof IllustrationMessageType
    ): this;
    /**
     * Sets a new value for property {@link #getSize size}.
     *
     * Determines which illustration breakpoint variant is used.
     *
     *  Available options are:
     * 	 - `Auto`
     * 	 - `Base`
     * 	 - `Spot`
     * 	 - `Dialog`
     * 	 - `Scene`
     *
     * As `IllustratedMessage` adapts itself around the `Illustration`, the other elements of the component
     * are displayed differently on the different breakpoints/illustration sizes.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Auto`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSize(
      /**
       * New value for property `size`
       */
      sSize?: IllustrationMessageSize | keyof typeof IllustrationMessageSize
    ): this;
    /**
     * Sets the aggregated {@link #getSubtitle subtitle}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSubtitle(
      /**
       * The subtitle to set
       */
      oSubtitle: Control
    ): this;
    /**
     * Sets a new value for property {@link #getSubtitleText subtitleText}.
     *
     * Defines the subtitle of the component.
     *
     *  **Note:** Using this property, the default subtitle text of illustration will be overwritten.
     *
     *  **Note:** Using `subtitle` slot, the default of this property will be overwritten.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSubtitleText(
      /**
       * New value for property `subtitleText`
       */
      sSubtitleText?: string
    ): this;
    /**
     * Sets a new value for property {@link #getTitleText titleText}.
     *
     * Defines the title of the component.
     *
     *  **Note:** Using this property, the default title text of illustration will be overwritten.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitleText(
      /**
       * New value for property `titleText`
       */
      sTitleText?: string
    ): this;
  }

  export interface $IllustratedMessageSettings extends $WebComponentSettings {
    name?:
      | (IllustrationMessageType | keyof typeof IllustrationMessageType)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines which illustration breakpoint variant is used.
     *
     *  Available options are:
     * 	 - `Auto`
     * 	 - `Base`
     * 	 - `Spot`
     * 	 - `Dialog`
     * 	 - `Scene`
     *
     * As `IllustratedMessage` adapts itself around the `Illustration`, the other elements of the component
     * are displayed differently on the different breakpoints/illustration sizes.
     */
    size?:
      | (IllustrationMessageSize | keyof typeof IllustrationMessageSize)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the subtitle of the component.
     *
     *  **Note:** Using this property, the default subtitle text of illustration will be overwritten.
     *
     *  **Note:** Using `subtitle` slot, the default of this property will be overwritten.
     */
    subtitleText?: string | PropertyBindingInfo;

    /**
     * Defines the title of the component.
     *
     *  **Note:** Using this property, the default title text of illustration will be overwritten.
     */
    titleText?: string | PropertyBindingInfo;

    /**
     * Defines the component actions.
     */
    actions?: IButton[] | IButton | AggregationBindingInfo | `{${string}}`;

    /**
     * Defines the subtitle of the component.
     *
     *  **Note:** Using this slot, the default subtitle text of illustration and the value of `subtitleText`
     * property will be overwritten.
     */
    subtitle?: Control;
  }
}

declare module "sap/ui/webc/fiori/MediaGallery" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import {
    IMediaGalleryItem,
    MediaGalleryLayout,
    MediaGalleryMenuHorizontalAlign,
    MediaGalleryMenuVerticalAlign,
  } from "sap/ui/webc/fiori/library";

  import Event from "sap/ui/base/Event";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.99.0
   * @EXPERIMENTAL (since 1.99.0)
   *
   * Overview:
   *
   * The `sap.ui.webc.fiori.MediaGallery` component allows the user to browse through multimedia items. Currently,
   * the supported items are images and videos. The items should be defined using the `sap.ui.webc.fiori.MediaGalleryItem`
   * component.
   *
   * The items are initially displayed as thumbnails. When the user selects a thumbnail, the corresponding
   * item is displayed in larger size.
   *  The component is responsive by default and adjusts the position of the menu with respect to viewport
   * size, but the application is able to further customize the layout via the provided API.
   *
   * Keyboard Handling: The `sap.ui.webc.fiori.MediaGallery` provides advanced keyboard handling.
   *  When the thumbnails menu is focused the following keyboard shortcuts allow the user to navigate through
   * the thumbnail items:
   *
   *
   *
   * 	 - [UP/DOWN] - Navigates up and down the items
   * 	 - [HOME] - Navigates to first item
   * 	 - [END] - Navigates to the last item [SPACE/ENTER] - Select an item
   */
  export default class MediaGallery extends WebComponent {
    /**
     * Constructor for a new `MediaGallery`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $MediaGallerySettings
    );
    /**
     * Constructor for a new `MediaGallery`.
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
      mSettings?: $MediaGallerySettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.MediaGallery with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, MediaGallery>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.MediaGallery.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Adds some item to the aggregation {@link #getItems items}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addItem(
      /**
       * The item to add; if empty, nothing is inserted
       */
      oItem: IMediaGalleryItem
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:displayAreaClick displayAreaClick} event of
     * this `sap.ui.webc.fiori.MediaGallery`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.MediaGallery` itself.
     *
     * Fired when the display area is clicked.
     *  The display area is the central area that contains the enlarged content of the currently selected item.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDisplayAreaClick(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.MediaGallery` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:displayAreaClick displayAreaClick} event of
     * this `sap.ui.webc.fiori.MediaGallery`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.MediaGallery` itself.
     *
     * Fired when the display area is clicked.
     *  The display area is the central area that contains the enlarged content of the currently selected item.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDisplayAreaClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.MediaGallery` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:overflowClick overflowClick} event of this `sap.ui.webc.fiori.MediaGallery`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.MediaGallery` itself.
     *
     * Fired when the thumbnails overflow button is clicked.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOverflowClick(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.MediaGallery` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:overflowClick overflowClick} event of this `sap.ui.webc.fiori.MediaGallery`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.MediaGallery` itself.
     *
     * Fired when the thumbnails overflow button is clicked.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOverflowClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.MediaGallery` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this
     * `sap.ui.webc.fiori.MediaGallery`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.MediaGallery` itself.
     *
     * Fired when selection is changed by user interaction.
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.MediaGallery` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this
     * `sap.ui.webc.fiori.MediaGallery`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.MediaGallery` itself.
     *
     * Fired when selection is changed by user interaction.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.MediaGallery` itself
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
     * Detaches event handler `fnFunction` from the {@link #event:displayAreaClick displayAreaClick} event of
     * this `sap.ui.webc.fiori.MediaGallery`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachDisplayAreaClick(
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
     * Detaches event handler `fnFunction` from the {@link #event:overflowClick overflowClick} event of this
     * `sap.ui.webc.fiori.MediaGallery`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachOverflowClick(
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
     * Detaches event handler `fnFunction` from the {@link #event:selectionChange selectionChange} event of
     * this `sap.ui.webc.fiori.MediaGallery`.
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
     * Fires event {@link #event:displayAreaClick displayAreaClick} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireDisplayAreaClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:overflowClick overflowClick} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireOverflowClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
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
         * the selected item.
         */
        item?: HTMLElement;
      }
    ): this;
    /**
     * Gets current value of property {@link #getInteractiveDisplayArea interactiveDisplayArea}.
     *
     * If enabled, a `display-area-click` event is fired when the user clicks or taps on the display area.
     *  The display area is the central area that contains the enlarged content of the currently selected item.
     *
     * Default value is `false`.
     *
     * @returns Value of property `interactiveDisplayArea`
     */
    getInteractiveDisplayArea(): boolean;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * Defines the component items.
     *
     *
     *
     *  **Note:** Only one selected item is allowed.
     *
     *
     *
     *  **Note:** Use the `sap.ui.webc.fiori.MediaGalleryItem` component to define the desired items.
     */
    getItems(): IMediaGalleryItem[];
    /**
     * Gets current value of property {@link #getLayout layout}.
     *
     * Determines the layout of the component.
     *
     *  Available options are:
     * 	 - `Auto`
     * 	 - `Vertical`
     * 	 - `Horizontal`
     *
     * Default value is `Auto`.
     *
     * @returns Value of property `layout`
     */
    getLayout(): MediaGalleryLayout | keyof typeof MediaGalleryLayout;
    /**
     * Gets current value of property {@link #getMenuHorizontalAlign menuHorizontalAlign}.
     *
     * Determines the horizontal alignment of the thumbnails menu vs. the central display area.
     *
     *  Available options are:
     * 	 - `Left`
     * 	 - `Right`
     *
     * Default value is `Left`.
     *
     * @returns Value of property `menuHorizontalAlign`
     */
    getMenuHorizontalAlign():
      | MediaGalleryMenuHorizontalAlign
      | keyof typeof MediaGalleryMenuHorizontalAlign;
    /**
     * Gets current value of property {@link #getMenuVerticalAlign menuVerticalAlign}.
     *
     * Determines the vertical alignment of the thumbnails menu vs. the central display area.
     *
     *  Available options are:
     * 	 - `Top`
     * 	 - `Bottom`
     *
     * Default value is `Bottom`.
     *
     * @returns Value of property `menuVerticalAlign`
     */
    getMenuVerticalAlign():
      | MediaGalleryMenuVerticalAlign
      | keyof typeof MediaGalleryMenuVerticalAlign;
    /**
     * Gets current value of property {@link #getShowAllThumbnails showAllThumbnails}.
     *
     * If set to `true`, all thumbnails are rendered in a scrollable container. If `false`, only up to five
     * thumbnails are rendered, followed by an overflow button that shows the count of the remaining thumbnails.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showAllThumbnails`
     */
    getShowAllThumbnails(): boolean;
    /**
     * Checks for the provided `sap.ui.webc.fiori.IMediaGalleryItem` in the aggregation {@link #getItems items}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: IMediaGalleryItem
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
      oItem: IMediaGalleryItem,
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
    removeAllItems(): IMediaGalleryItem[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     *
     * @returns The removed item or `null`
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | IMediaGalleryItem
    ): IMediaGalleryItem | null;
    /**
     * Sets a new value for property {@link #getInteractiveDisplayArea interactiveDisplayArea}.
     *
     * If enabled, a `display-area-click` event is fired when the user clicks or taps on the display area.
     *  The display area is the central area that contains the enlarged content of the currently selected item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setInteractiveDisplayArea(
      /**
       * New value for property `interactiveDisplayArea`
       */
      bInteractiveDisplayArea?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getLayout layout}.
     *
     * Determines the layout of the component.
     *
     *  Available options are:
     * 	 - `Auto`
     * 	 - `Vertical`
     * 	 - `Horizontal`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Auto`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLayout(
      /**
       * New value for property `layout`
       */
      sLayout?: MediaGalleryLayout | keyof typeof MediaGalleryLayout
    ): this;
    /**
     * Sets a new value for property {@link #getMenuHorizontalAlign menuHorizontalAlign}.
     *
     * Determines the horizontal alignment of the thumbnails menu vs. the central display area.
     *
     *  Available options are:
     * 	 - `Left`
     * 	 - `Right`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Left`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMenuHorizontalAlign(
      /**
       * New value for property `menuHorizontalAlign`
       */
      sMenuHorizontalAlign?:
        | MediaGalleryMenuHorizontalAlign
        | keyof typeof MediaGalleryMenuHorizontalAlign
    ): this;
    /**
     * Sets a new value for property {@link #getMenuVerticalAlign menuVerticalAlign}.
     *
     * Determines the vertical alignment of the thumbnails menu vs. the central display area.
     *
     *  Available options are:
     * 	 - `Top`
     * 	 - `Bottom`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Bottom`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMenuVerticalAlign(
      /**
       * New value for property `menuVerticalAlign`
       */
      sMenuVerticalAlign?:
        | MediaGalleryMenuVerticalAlign
        | keyof typeof MediaGalleryMenuVerticalAlign
    ): this;
    /**
     * Sets a new value for property {@link #getShowAllThumbnails showAllThumbnails}.
     *
     * If set to `true`, all thumbnails are rendered in a scrollable container. If `false`, only up to five
     * thumbnails are rendered, followed by an overflow button that shows the count of the remaining thumbnails.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowAllThumbnails(
      /**
       * New value for property `showAllThumbnails`
       */
      bShowAllThumbnails?: boolean
    ): this;
  }

  export interface $MediaGallerySettings extends $WebComponentSettings {
    /**
     * If enabled, a `display-area-click` event is fired when the user clicks or taps on the display area.
     *  The display area is the central area that contains the enlarged content of the currently selected item.
     */
    interactiveDisplayArea?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines the layout of the component.
     *
     *  Available options are:
     * 	 - `Auto`
     * 	 - `Vertical`
     * 	 - `Horizontal`
     */
    layout?:
      | (MediaGalleryLayout | keyof typeof MediaGalleryLayout)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines the horizontal alignment of the thumbnails menu vs. the central display area.
     *
     *  Available options are:
     * 	 - `Left`
     * 	 - `Right`
     */
    menuHorizontalAlign?:
      | (
          | MediaGalleryMenuHorizontalAlign
          | keyof typeof MediaGalleryMenuHorizontalAlign
        )
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines the vertical alignment of the thumbnails menu vs. the central display area.
     *
     *  Available options are:
     * 	 - `Top`
     * 	 - `Bottom`
     */
    menuVerticalAlign?:
      | (
          | MediaGalleryMenuVerticalAlign
          | keyof typeof MediaGalleryMenuVerticalAlign
        )
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * If set to `true`, all thumbnails are rendered in a scrollable container. If `false`, only up to five
     * thumbnails are rendered, followed by an overflow button that shows the count of the remaining thumbnails.
     */
    showAllThumbnails?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the component items.
     *
     *
     *
     *  **Note:** Only one selected item is allowed.
     *
     *
     *
     *  **Note:** Use the `sap.ui.webc.fiori.MediaGalleryItem` component to define the desired items.
     */
    items?:
      | IMediaGalleryItem[]
      | IMediaGalleryItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Fired when the display area is clicked.
     *  The display area is the central area that contains the enlarged content of the currently selected item.
     */
    displayAreaClick?: (oEvent: Event) => void;

    /**
     * Fired when the thumbnails overflow button is clicked.
     */
    overflowClick?: (oEvent: Event) => void;

    /**
     * Fired when selection is changed by user interaction.
     */
    selectionChange?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/webc/fiori/MediaGalleryItem" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import {
    IMediaGalleryItem,
    MediaGalleryItemLayout,
  } from "sap/ui/webc/fiori/library";

  import Control from "sap/ui/core/Control";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.99.0
   * @EXPERIMENTAL (since 1.99.0)
   *
   * Overview: The `sap.ui.webc.fiori.MediaGalleryItem` web component represents the items displayed in the
   * `sap.ui.webc.fiori.MediaGallery` web component.
   *
   *  **Note:** `sap.ui.webc.fiori.MediaGalleryItem` is not supported when used outside of `sap.ui.webc.fiori.MediaGallery`.
   *
   *
   *
   *
   * Keyboard Handling: The `sap.ui.webc.fiori.MediaGallery` provides advanced keyboard handling. When focused,
   * the user can use the following keyboard shortcuts in order to perform a navigation:
   *
   *
   *
   * 	 - [SPACE/ENTER/RETURN] - Trigger `ui5-click` event
   */
  export default class MediaGalleryItem
    extends WebComponent
    implements IMediaGalleryItem {
    __implements__sap_ui_webc_fiori_IMediaGalleryItem: boolean;
    /**
     * Constructor for a new `MediaGalleryItem`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $MediaGalleryItemSettings
    );
    /**
     * Constructor for a new `MediaGalleryItem`.
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
      mSettings?: $MediaGalleryItemSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.MediaGalleryItem with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, MediaGalleryItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.MediaGalleryItem.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Destroys the content in the aggregation {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;
    /**
     * Destroys the thumbnail in the aggregation {@link #getThumbnail thumbnail}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyThumbnail(): this;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Defines the content of the component.
     */
    getContent(): Control;
    /**
     * Gets current value of property {@link #getEnabled enabled}.
     *
     * Defines whether the control is enabled. A disabled control can't be interacted with, and it is not in
     * the tab chain.
     *
     * Default value is `true`.
     *
     * @returns Value of property `enabled`
     */
    getEnabled(): boolean;
    /**
     * Gets current value of property {@link #getLayout layout}.
     *
     * Determines the layout of the item container.
     *
     *  Available options are:
     * 	 - `Square`
     * 	 - `Wide`
     *
     * Default value is `Square`.
     *
     * @returns Value of property `layout`
     */
    getLayout(): MediaGalleryItemLayout | keyof typeof MediaGalleryItemLayout;
    /**
     * Gets current value of property {@link #getSelected selected}.
     *
     * Defines the selected state of the component.
     *
     * Default value is `false`.
     *
     * @returns Value of property `selected`
     */
    getSelected(): boolean;
    /**
     * Gets content of aggregation {@link #getThumbnail thumbnail}.
     *
     * Defines the content of the thumbnail.
     */
    getThumbnail(): Control;
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
     * Sets a new value for property {@link #getEnabled enabled}.
     *
     * Defines whether the control is enabled. A disabled control can't be interacted with, and it is not in
     * the tab chain.
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
     * Sets a new value for property {@link #getLayout layout}.
     *
     * Determines the layout of the item container.
     *
     *  Available options are:
     * 	 - `Square`
     * 	 - `Wide`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Square`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLayout(
      /**
       * New value for property `layout`
       */
      sLayout?: MediaGalleryItemLayout | keyof typeof MediaGalleryItemLayout
    ): this;
    /**
     * Sets a new value for property {@link #getSelected selected}.
     *
     * Defines the selected state of the component.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
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
     * Sets the aggregated {@link #getThumbnail thumbnail}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setThumbnail(
      /**
       * The thumbnail to set
       */
      oThumbnail: Control
    ): this;
  }

  export interface $MediaGalleryItemSettings extends $WebComponentSettings {
    /**
     * Defines whether the control is enabled. A disabled control can't be interacted with, and it is not in
     * the tab chain.
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines the layout of the item container.
     *
     *  Available options are:
     * 	 - `Square`
     * 	 - `Wide`
     */
    layout?:
      | (MediaGalleryItemLayout | keyof typeof MediaGalleryItemLayout)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the selected state of the component.
     */
    selected?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the content of the component.
     */
    content?: Control;

    /**
     * Defines the content of the thumbnail.
     */
    thumbnail?: Control;
  }
}

declare module "sap/ui/webc/fiori/NotificationAction" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { INotificationAction } from "sap/ui/webc/fiori/library";

  import { ButtonDesign } from "sap/ui/webc/main/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * The `sap.ui.webc.fiori.NotificationAction` represents an abstract action, used in the `sap.ui.webc.fiori.NotificationListItem`
   * and the `sap.ui.webc.fiori.NotificationListGroupItem` items.
   */
  export default class NotificationAction
    extends WebComponent
    implements INotificationAction {
    __implements__sap_ui_webc_fiori_INotificationAction: boolean;
    /**
     * Constructor for a new `NotificationAction`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $NotificationActionSettings
    );
    /**
     * Constructor for a new `NotificationAction`.
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
      mSettings?: $NotificationActionSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.NotificationAction with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, NotificationAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.NotificationAction.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Gets current value of property {@link #getDesign design}.
     *
     * Defines the action design.
     *
     *
     *
     *  **Note:**
     * 	 - `Default`
     * 	 - `Emphasized`
     * 	 - `Positive`
     * 	 - `Negative`
     * 	 - `Transparent`
     *
     * Default value is `Transparent`.
     *
     * @returns Value of property `design`
     */
    getDesign(): ButtonDesign | keyof typeof ButtonDesign;
    /**
     * Gets current value of property {@link #getEnabled enabled}.
     *
     * Defines whether the control is enabled. A disabled control can't be interacted with, and it is not in
     * the tab chain.
     *
     * Default value is `true`.
     *
     * @returns Value of property `enabled`
     */
    getEnabled(): boolean;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Defines the `icon` source URI.
     *
     *  **Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the
     * {@link demo:sap/m/demokit/iconExplorer/webapp/index.html Icon Explorer}.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `icon`
     */
    getIcon(): string;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Defines the text of the `sap.ui.webc.fiori.NotificationAction`.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `text`
     */
    getText(): string;
    /**
     * Sets a new value for property {@link #getDesign design}.
     *
     * Defines the action design.
     *
     *
     *
     *  **Note:**
     * 	 - `Default`
     * 	 - `Emphasized`
     * 	 - `Positive`
     * 	 - `Negative`
     * 	 - `Transparent`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Transparent`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDesign(
      /**
       * New value for property `design`
       */
      sDesign?: ButtonDesign | keyof typeof ButtonDesign
    ): this;
    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     *
     * Defines whether the control is enabled. A disabled control can't be interacted with, and it is not in
     * the tab chain.
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
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Defines the `icon` source URI.
     *
     *  **Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the
     * {@link demo:sap/m/demokit/iconExplorer/webapp/index.html Icon Explorer}.
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
      sIcon?: string
    ): this;
    /**
     * Sets a new value for property {@link #getText text}.
     *
     * Defines the text of the `sap.ui.webc.fiori.NotificationAction`.
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
  }

  export interface $NotificationActionSettings extends $WebComponentSettings {
    /**
     * Defines the action design.
     *
     *
     *
     *  **Note:**
     * 	 - `Default`
     * 	 - `Emphasized`
     * 	 - `Positive`
     * 	 - `Negative`
     * 	 - `Transparent`
     */
    design?:
      | (ButtonDesign | keyof typeof ButtonDesign)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines whether the control is enabled. A disabled control can't be interacted with, and it is not in
     * the tab chain.
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the `icon` source URI.
     *
     *  **Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the
     * {@link demo:sap/m/demokit/iconExplorer/webapp/index.html Icon Explorer}.
     */
    icon?: string | PropertyBindingInfo;

    /**
     * Defines the text of the `sap.ui.webc.fiori.NotificationAction`.
     */
    text?: string | PropertyBindingInfo;
  }
}

declare module "sap/ui/webc/fiori/NotificationListGroupItem" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { IListItem, Priority } from "sap/ui/webc/main/library";

  import {
    INotificationAction,
    INotificationListItem,
  } from "sap/ui/webc/fiori/library";

  import Event from "sap/ui/base/Event";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview: The `sap.ui.webc.fiori.NotificationListGroupItem` is a special type of list item, that unlike
   * others can group items within self, usually `sap.ui.webc.fiori.NotificationListItem` items.
   *
   *
   * The component consists of:
   * 	 - `Toggle` button to expand and collapse the group
   * 	 - `Priority` icon to display the priority of the group
   * 	 - `TitleText` to entitle the group
   * 	 - Custom actions - with the use of `sap.ui.webc.fiori.NotificationAction`
   * 	 - Items of the group
   *
   * Usage: The component can be used in a standard `sap.ui.webc.main.List`.
   *
   * CSS Shadow Parts:
   *
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/::part CSS Shadow Parts} allow developers to
   * style elements inside the Shadow DOM.
   *  The `sap.ui.webc.fiori.NotificationListGroupItem` exposes the following CSS Shadow Parts:
   * 	 - title-text - Used to style the titleText of the notification list group item
   */
  export default class NotificationListGroupItem
    extends WebComponent
    implements IListItem {
    __implements__sap_ui_webc_main_IListItem: boolean;
    /**
     * Constructor for a new `NotificationListGroupItem`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $NotificationListGroupItemSettings
    );
    /**
     * Constructor for a new `NotificationListGroupItem`.
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
      mSettings?: $NotificationListGroupItemSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.NotificationListGroupItem with name `sClassName` and
     * enriches it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, NotificationListGroupItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.NotificationListGroupItem.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Adds some action to the aggregation {@link #getActions actions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addAction(
      /**
       * The action to add; if empty, nothing is inserted
       */
      oAction: INotificationAction
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
      oItem: INotificationListItem
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.webc.fiori.NotificationListGroupItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.NotificationListGroupItem` itself.
     *
     * Fired when the `Close` button is pressed.
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.NotificationListGroupItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.webc.fiori.NotificationListGroupItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.NotificationListGroupItem` itself.
     *
     * Fired when the `Close` button is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.NotificationListGroupItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:toggle toggle} event of this `sap.ui.webc.fiori.NotificationListGroupItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.NotificationListGroupItem` itself.
     *
     * Fired when the `sap.ui.webc.fiori.NotificationListGroupItem` is expanded/collapsed by user interaction.
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.NotificationListGroupItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:toggle toggle} event of this `sap.ui.webc.fiori.NotificationListGroupItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.NotificationListGroupItem` itself.
     *
     * Fired when the `sap.ui.webc.fiori.NotificationListGroupItem` is expanded/collapsed by user interaction.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachToggle(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.NotificationListGroupItem`
       * itself
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
     * Detaches event handler `fnFunction` from the {@link #event:close close} event of this `sap.ui.webc.fiori.NotificationListGroupItem`.
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
     * Detaches event handler `fnFunction` from the {@link #event:toggle toggle} event of this `sap.ui.webc.fiori.NotificationListGroupItem`.
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
     * Fires event {@link #event:close close} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireClose(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:toggle toggle} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireToggle(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Gets content of aggregation {@link #getActions actions}.
     *
     * Defines the actions, displayed in the top-right area.
     *
     *  **Note:** use the `sap.ui.webc.fiori.NotificationAction` component.
     */
    getActions(): INotificationAction[];
    /**
     * Gets current value of property {@link #getBusy busy}.
     *
     * Defines if a busy indicator would be displayed over the item.
     *
     * Default value is `false`.
     *
     * @returns Value of property `busy`
     */
    getBusy(): boolean;
    /**
     * Gets current value of property {@link #getBusyDelay busyDelay}.
     *
     * Defines the delay in milliseconds, after which the busy indicator will show up for this component.
     *
     * Default value is `1000`.
     *
     * @returns Value of property `busyDelay`
     */
    getBusyDelay(): int;
    /**
     * Gets current value of property {@link #getCollapsed collapsed}.
     *
     * Defines if the group is collapsed or expanded.
     *
     * Default value is `false`.
     *
     * @returns Value of property `collapsed`
     */
    getCollapsed(): boolean;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * Defines the items of the `sap.ui.webc.fiori.NotificationListGroupItem`, usually `sap.ui.webc.fiori.NotificationListItem`
     * items.
     */
    getItems(): INotificationListItem[];
    /**
     * Gets current value of property {@link #getPriority priority}.
     *
     * Defines the `priority` of the item. Available options are:
     * 	 - `None`
     * 	 - `Low`
     * 	 - `Medium`
     * 	 - `High`
     *
     * Default value is `None`.
     *
     * @returns Value of property `priority`
     */
    getPriority(): Priority | keyof typeof Priority;
    /**
     * Gets current value of property {@link #getRead read}.
     *
     * Defines if the `notification` is new or has been already read.
     *
     *  **Note:** if set to `false` the `titleText` has bold font, if set to true - it has a normal font.
     *
     * Default value is `false`.
     *
     * @returns Value of property `read`
     */
    getRead(): boolean;
    /**
     * Gets current value of property {@link #getShowClose showClose}.
     *
     * Defines if the `close` button would be displayed.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showClose`
     */
    getShowClose(): boolean;
    /**
     * Gets current value of property {@link #getShowCounter showCounter}.
     *
     * Defines if the items `counter` would be displayed.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showCounter`
     */
    getShowCounter(): boolean;
    /**
     * Gets current value of property {@link #getTitleText titleText}.
     *
     * Defines the `titleText` of the item.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `titleText`
     */
    getTitleText(): string;
    /**
     * Checks for the provided `sap.ui.webc.fiori.INotificationAction` in the aggregation {@link #getActions
     * actions}. and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfAction(
      /**
       * The action whose index is looked for
       */
      oAction: INotificationAction
    ): int;
    /**
     * Checks for the provided `sap.ui.webc.fiori.INotificationListItem` in the aggregation {@link #getItems
     * items}. and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: INotificationListItem
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
      oAction: INotificationAction,
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
      oItem: INotificationListItem,
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
      vAction: int | string | INotificationAction
    ): INotificationAction | null;
    /**
     * Removes all the controls from the aggregation {@link #getActions actions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllActions(): INotificationAction[];
    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): INotificationListItem[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     *
     * @returns The removed item or `null`
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | INotificationListItem
    ): INotificationListItem | null;
    /**
     * Sets a new value for property {@link #getBusy busy}.
     *
     * Defines if a busy indicator would be displayed over the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setBusy(
      /**
       * New value for property `busy`
       */
      bBusy?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getBusyDelay busyDelay}.
     *
     * Defines the delay in milliseconds, after which the busy indicator will show up for this component.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1000`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setBusyDelay(
      /**
       * New value for property `busyDelay`
       */
      iBusyDelay?: int
    ): this;
    /**
     * Sets a new value for property {@link #getCollapsed collapsed}.
     *
     * Defines if the group is collapsed or expanded.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setCollapsed(
      /**
       * New value for property `collapsed`
       */
      bCollapsed?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getPriority priority}.
     *
     * Defines the `priority` of the item. Available options are:
     * 	 - `None`
     * 	 - `Low`
     * 	 - `Medium`
     * 	 - `High`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setPriority(
      /**
       * New value for property `priority`
       */
      sPriority?: Priority | keyof typeof Priority
    ): this;
    /**
     * Sets a new value for property {@link #getRead read}.
     *
     * Defines if the `notification` is new or has been already read.
     *
     *  **Note:** if set to `false` the `titleText` has bold font, if set to true - it has a normal font.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setRead(
      /**
       * New value for property `read`
       */
      bRead?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowClose showClose}.
     *
     * Defines if the `close` button would be displayed.
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
     * Sets a new value for property {@link #getShowCounter showCounter}.
     *
     * Defines if the items `counter` would be displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
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
     * Sets a new value for property {@link #getTitleText titleText}.
     *
     * Defines the `titleText` of the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitleText(
      /**
       * New value for property `titleText`
       */
      sTitleText?: string
    ): this;
  }

  export interface $NotificationListGroupItemSettings
    extends $WebComponentSettings {
    /**
     * Defines if a busy indicator would be displayed over the item.
     */
    busy?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the delay in milliseconds, after which the busy indicator will show up for this component.
     */
    busyDelay?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines if the group is collapsed or expanded.
     */
    collapsed?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the `priority` of the item. Available options are:
     * 	 - `None`
     * 	 - `Low`
     * 	 - `Medium`
     * 	 - `High`
     */
    priority?:
      | (Priority | keyof typeof Priority)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines if the `notification` is new or has been already read.
     *
     *  **Note:** if set to `false` the `titleText` has bold font, if set to true - it has a normal font.
     */
    read?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines if the `close` button would be displayed.
     */
    showClose?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines if the items `counter` would be displayed.
     */
    showCounter?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the `titleText` of the item.
     */
    titleText?: string | PropertyBindingInfo;

    /**
     * Defines the actions, displayed in the top-right area.
     *
     *  **Note:** use the `sap.ui.webc.fiori.NotificationAction` component.
     */
    actions?:
      | INotificationAction[]
      | INotificationAction
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Defines the items of the `sap.ui.webc.fiori.NotificationListGroupItem`, usually `sap.ui.webc.fiori.NotificationListItem`
     * items.
     */
    items?:
      | INotificationListItem[]
      | INotificationListItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Fired when the `Close` button is pressed.
     */
    close?: (oEvent: Event) => void;

    /**
     * Fired when the `sap.ui.webc.fiori.NotificationListGroupItem` is expanded/collapsed by user interaction.
     */
    toggle?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/webc/fiori/NotificationListItem" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import {
    INotificationListItem,
    INotificationAction,
  } from "sap/ui/webc/fiori/library";

  import {
    IListItem,
    IAvatar,
    Priority,
    WrappingType,
  } from "sap/ui/webc/main/library";

  import Control from "sap/ui/core/Control";

  import Event from "sap/ui/base/Event";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview: The `sap.ui.webc.fiori.NotificationListItem` is a type of list item, meant to display notifications.
   *
   *
   *
   * The component has a rich set of various properties that allows the user to set `avatar`, `titleText`,
   * descriptive `content` and `footnotes` to fully describe a notification.
   *
   *
   * The user can:
   * 	 - display a `Close` button
   * 	 - can control whether the `titleText` and `description` should wrap or truncate and display a `ShowMore`
   * 			button to switch between less and more information
   * 	 - add custom actions by using the `sap.ui.webc.fiori.NotificationAction` component
   *
   * Usage: The component can be used in a standard `sap.ui.webc.main.List`.
   *
   * CSS Shadow Parts:
   *
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/::part CSS Shadow Parts} allow developers to
   * style elements inside the Shadow DOM.
   *  The `sap.ui.webc.fiori.NotificationListItem` exposes the following CSS Shadow Parts:
   * 	 - title-text - Used to style the titleText of the notification list item
   */
  export default class NotificationListItem
    extends WebComponent
    implements INotificationListItem, IListItem {
    __implements__sap_ui_webc_fiori_INotificationListItem: boolean;
    __implements__sap_ui_webc_main_IListItem: boolean;
    /**
     * Constructor for a new `NotificationListItem`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $NotificationListItemSettings
    );
    /**
     * Constructor for a new `NotificationListItem`.
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
      mSettings?: $NotificationListItemSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.NotificationListItem with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, NotificationListItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.NotificationListItem.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Adds some action to the aggregation {@link #getActions actions}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addAction(
      /**
       * The action to add; if empty, nothing is inserted
       */
      oAction: INotificationAction
    ): this;
    /**
     * Adds some footnote to the aggregation {@link #getFootnotes footnotes}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addFootnote(
      /**
       * The footnote to add; if empty, nothing is inserted
       */
      oFootnote: Control
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.webc.fiori.NotificationListItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.NotificationListItem` itself.
     *
     * Fired when the `Close` button is pressed.
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.NotificationListItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.webc.fiori.NotificationListItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.NotificationListItem` itself.
     *
     * Fired when the `Close` button is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.NotificationListItem`
       * itself
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
     * Destroys the avatar in the aggregation {@link #getAvatar avatar}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyAvatar(): this;
    /**
     * Destroys all the footnotes in the aggregation {@link #getFootnotes footnotes}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFootnotes(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:close close} event of this `sap.ui.webc.fiori.NotificationListItem`.
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
     * Fires event {@link #event:close close} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireClose(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Gets content of aggregation {@link #getActions actions}.
     *
     * Defines the actions, displayed in the top-right area.
     *
     *  **Note:** use the `sap.ui.webc.fiori.NotificationAction` component.
     */
    getActions(): INotificationAction[];
    /**
     * Gets content of aggregation {@link #getAvatar avatar}.
     *
     * Defines the avatar, displayed in the `sap.ui.webc.fiori.NotificationListItem`.
     *
     *
     *
     *  **Note:** Consider using the `sap.ui.webc.main.Avatar` to display icons, initials or images.
     *  **Note:**In order to be complaint with the UX guidlines and for best experience, we recommend using
     * avatars with 2rem X 2rem in size (32px X 32px). In case you are using the `sap.ui.webc.main.Avatar` you
     * can set its `size` property to `XS` to get the required size - `<ui5-avatar size="XS"></ui5-avatar>`.
     */
    getAvatar(): IAvatar;
    /**
     * Gets current value of property {@link #getBusy busy}.
     *
     * Defines if a busy indicator would be displayed over the item.
     *
     * Default value is `false`.
     *
     * @returns Value of property `busy`
     */
    getBusy(): boolean;
    /**
     * Gets current value of property {@link #getBusyDelay busyDelay}.
     *
     * Defines the delay in milliseconds, after which the busy indicator will show up for this component.
     *
     * Default value is `1000`.
     *
     * @returns Value of property `busyDelay`
     */
    getBusyDelay(): int;
    /**
     * Gets current value of property {@link #getDescription description}.
     *
     * Defines the content of the control
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `description`
     */
    getDescription(): string;
    /**
     * Gets content of aggregation {@link #getFootnotes footnotes}.
     *
     * Defines the elements, displayed in the footer of the of the component.
     */
    getFootnotes(): Control[];
    /**
     * Gets current value of property {@link #getPriority priority}.
     *
     * Defines the `priority` of the item. Available options are:
     * 	 - `None`
     * 	 - `Low`
     * 	 - `Medium`
     * 	 - `High`
     *
     * Default value is `None`.
     *
     * @returns Value of property `priority`
     */
    getPriority(): Priority | keyof typeof Priority;
    /**
     * Gets current value of property {@link #getRead read}.
     *
     * Defines if the `notification` is new or has been already read.
     *
     *  **Note:** if set to `false` the `titleText` has bold font, if set to true - it has a normal font.
     *
     * Default value is `false`.
     *
     * @returns Value of property `read`
     */
    getRead(): boolean;
    /**
     * Gets current value of property {@link #getShowClose showClose}.
     *
     * Defines if the `close` button would be displayed.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showClose`
     */
    getShowClose(): boolean;
    /**
     * Gets current value of property {@link #getTitleText titleText}.
     *
     * Defines the `titleText` of the item.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `titleText`
     */
    getTitleText(): string;
    /**
     * Gets current value of property {@link #getWrappingType wrappingType}.
     *
     * Defines if the `titleText` and `description` should wrap, they truncate by default.
     *
     *
     *
     *  **Note:** by default the `titleText` and `decription`, and a `ShowMore/Less` button would be displayed.
     *
     * Default value is `None`.
     *
     * @returns Value of property `wrappingType`
     */
    getWrappingType(): WrappingType | keyof typeof WrappingType;
    /**
     * Checks for the provided `sap.ui.webc.fiori.INotificationAction` in the aggregation {@link #getActions
     * actions}. and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfAction(
      /**
       * The action whose index is looked for
       */
      oAction: INotificationAction
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getFootnotes footnotes}. and
     * returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfFootnote(
      /**
       * The footnote whose index is looked for
       */
      oFootnote: Control
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
      oAction: INotificationAction,
      /**
       * The `0`-based index the action should be inserted at; for a negative value of `iIndex`, the action is
       * inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted
       * at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a footnote into the aggregation {@link #getFootnotes footnotes}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertFootnote(
      /**
       * The footnote to insert; if empty, nothing is inserted
       */
      oFootnote: Control,
      /**
       * The `0`-based index the footnote should be inserted at; for a negative value of `iIndex`, the footnote
       * is inserted at position 0; for a value greater than the current size of the aggregation, the footnote
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
      vAction: int | string | INotificationAction
    ): INotificationAction | null;
    /**
     * Removes all the controls from the aggregation {@link #getActions actions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllActions(): INotificationAction[];
    /**
     * Removes all the controls from the aggregation {@link #getFootnotes footnotes}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllFootnotes(): Control[];
    /**
     * Removes a footnote from the aggregation {@link #getFootnotes footnotes}.
     *
     * @returns The removed footnote or `null`
     */
    removeFootnote(
      /**
       * The footnote to remove or its index or id
       */
      vFootnote: int | string | Control
    ): Control | null;
    /**
     * Sets the aggregated {@link #getAvatar avatar}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAvatar(
      /**
       * The avatar to set
       */
      oAvatar: IAvatar
    ): this;
    /**
     * Sets a new value for property {@link #getBusy busy}.
     *
     * Defines if a busy indicator would be displayed over the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setBusy(
      /**
       * New value for property `busy`
       */
      bBusy?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getBusyDelay busyDelay}.
     *
     * Defines the delay in milliseconds, after which the busy indicator will show up for this component.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1000`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setBusyDelay(
      /**
       * New value for property `busyDelay`
       */
      iBusyDelay?: int
    ): this;
    /**
     * Sets a new value for property {@link #getDescription description}.
     *
     * Defines the content of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
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
     * Sets a new value for property {@link #getPriority priority}.
     *
     * Defines the `priority` of the item. Available options are:
     * 	 - `None`
     * 	 - `Low`
     * 	 - `Medium`
     * 	 - `High`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setPriority(
      /**
       * New value for property `priority`
       */
      sPriority?: Priority | keyof typeof Priority
    ): this;
    /**
     * Sets a new value for property {@link #getRead read}.
     *
     * Defines if the `notification` is new or has been already read.
     *
     *  **Note:** if set to `false` the `titleText` has bold font, if set to true - it has a normal font.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setRead(
      /**
       * New value for property `read`
       */
      bRead?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowClose showClose}.
     *
     * Defines if the `close` button would be displayed.
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
     * Sets a new value for property {@link #getTitleText titleText}.
     *
     * Defines the `titleText` of the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitleText(
      /**
       * New value for property `titleText`
       */
      sTitleText?: string
    ): this;
    /**
     * Sets a new value for property {@link #getWrappingType wrappingType}.
     *
     * Defines if the `titleText` and `description` should wrap, they truncate by default.
     *
     *
     *
     *  **Note:** by default the `titleText` and `decription`, and a `ShowMore/Less` button would be displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setWrappingType(
      /**
       * New value for property `wrappingType`
       */
      sWrappingType?: WrappingType | keyof typeof WrappingType
    ): this;
  }

  export interface $NotificationListItemSettings extends $WebComponentSettings {
    /**
     * Defines if a busy indicator would be displayed over the item.
     */
    busy?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the delay in milliseconds, after which the busy indicator will show up for this component.
     */
    busyDelay?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the content of the control
     */
    description?: string | PropertyBindingInfo;

    /**
     * Defines the `priority` of the item. Available options are:
     * 	 - `None`
     * 	 - `Low`
     * 	 - `Medium`
     * 	 - `High`
     */
    priority?:
      | (Priority | keyof typeof Priority)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines if the `notification` is new or has been already read.
     *
     *  **Note:** if set to `false` the `titleText` has bold font, if set to true - it has a normal font.
     */
    read?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines if the `close` button would be displayed.
     */
    showClose?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the `titleText` of the item.
     */
    titleText?: string | PropertyBindingInfo;

    /**
     * Defines if the `titleText` and `description` should wrap, they truncate by default.
     *
     *
     *
     *  **Note:** by default the `titleText` and `decription`, and a `ShowMore/Less` button would be displayed.
     */
    wrappingType?:
      | (WrappingType | keyof typeof WrappingType)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the actions, displayed in the top-right area.
     *
     *  **Note:** use the `sap.ui.webc.fiori.NotificationAction` component.
     */
    actions?:
      | INotificationAction[]
      | INotificationAction
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Defines the avatar, displayed in the `sap.ui.webc.fiori.NotificationListItem`.
     *
     *
     *
     *  **Note:** Consider using the `sap.ui.webc.main.Avatar` to display icons, initials or images.
     *  **Note:**In order to be complaint with the UX guidlines and for best experience, we recommend using
     * avatars with 2rem X 2rem in size (32px X 32px). In case you are using the `sap.ui.webc.main.Avatar` you
     * can set its `size` property to `XS` to get the required size - `<ui5-avatar size="XS"></ui5-avatar>`.
     */
    avatar?: IAvatar;

    /**
     * Defines the elements, displayed in the footer of the of the component.
     */
    footnotes?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Fired when the `Close` button is pressed.
     */
    close?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/webc/fiori/Page" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import Control from "sap/ui/core/Control";

  import { PageBackgroundDesign, IBar } from "sap/ui/webc/fiori/library";

  import { CSSSize } from "sap/ui/core/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview:
   *
   * The `sap.ui.webc.fiori.Page` is a container component that holds one whole screen of an application.
   * The page has three distinct areas that can hold content - a header, content area and a footer. Structure:
   * Header: The top most area of the page is occupied by the header. The standard header includes a navigation
   * button and a title. Content: The content occupies the main part of the page. Only the content area is
   * scrollable by default. This can be prevented by setting `enableScrolling` to `false`. Footer: The footer
   * is optional and occupies the fixed bottom part of the page. Alternatively, the footer can be floating
   * above the bottom part of the content. This is enabled with the `floatingFooter` property.
   *
   * **Note:** `sap.ui.webc.fiori.Page` occipues the whole available space of its parent. In order to achieve
   * the intended design you have to make sure that there is enough space for the `sap.ui.webc.fiori.Page`
   * to be rendered.
   */
  export default class Page extends WebComponent {
    /**
     * Constructor for a new `Page`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $PageSettings
    );
    /**
     * Constructor for a new `Page`.
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
      mSettings?: $PageSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.Page with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Page>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.Page.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
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
     * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
     *
     * Defines the background color of the `sap.ui.webc.fiori.Page`.
     *
     *  **Note:** When a ui5-list is placed inside the page, we recommend using “List” to ensure better color
     * contrast.
     *
     *  Available options are:
     * 	 - `Solid` (default)
     * 	 - `Transparent`
     * 	 - `List`
     *
     * Default value is `Solid`.
     *
     * @returns Value of property `backgroundDesign`
     */
    getBackgroundDesign():
      | PageBackgroundDesign
      | keyof typeof PageBackgroundDesign;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Defines the content HTML Element.
     */
    getContent(): Control[];
    /**
     * Gets current value of property {@link #getDisableScrolling disableScrolling}.
     *
     * Disables vertical scrolling of page content. If set to true, there will be no vertical scrolling at all.
     *
     * Default value is `false`.
     *
     * @returns Value of property `disableScrolling`
     */
    getDisableScrolling(): boolean;
    /**
     * Gets current value of property {@link #getFloatingFooter floatingFooter}.
     *
     * Defines if the footer should float over the content.
     *
     *  **Note:** When set to true the footer floats over the content with a slight offset from the bottom,
     * otherwise it is fixed at the very bottom of the page.
     *
     * Default value is `true`.
     *
     * @returns Value of property `floatingFooter`
     */
    getFloatingFooter(): boolean;
    /**
     * Gets content of aggregation {@link #getFooter footer}.
     *
     * Defines the footer HTML Element.
     */
    getFooter(): IBar;
    /**
     * Gets content of aggregation {@link #getHeader header}.
     *
     * Defines the header HTML Element.
     */
    getHeader(): IBar;
    /**
     * Gets current value of property {@link #getHeight height}.
     *
     * Defines the height of the control
     *
     * @returns Value of property `height`
     */
    getHeight(): CSSSize;
    /**
     * Gets current value of property {@link #getHideFooter hideFooter}.
     *
     * Defines the footer visibility.
     *
     * Default value is `false`.
     *
     * @returns Value of property `hideFooter`
     */
    getHideFooter(): boolean;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Defines the width of the control
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
     * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
     *
     * Defines the background color of the `sap.ui.webc.fiori.Page`.
     *
     *  **Note:** When a ui5-list is placed inside the page, we recommend using “List” to ensure better color
     * contrast.
     *
     *  Available options are:
     * 	 - `Solid` (default)
     * 	 - `Transparent`
     * 	 - `List`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Solid`.
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
     * Sets a new value for property {@link #getDisableScrolling disableScrolling}.
     *
     * Disables vertical scrolling of page content. If set to true, there will be no vertical scrolling at all.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDisableScrolling(
      /**
       * New value for property `disableScrolling`
       */
      bDisableScrolling?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getFloatingFooter floatingFooter}.
     *
     * Defines if the footer should float over the content.
     *
     *  **Note:** When set to true the footer floats over the content with a slight offset from the bottom,
     * otherwise it is fixed at the very bottom of the page.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFloatingFooter(
      /**
       * New value for property `floatingFooter`
       */
      bFloatingFooter?: boolean
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
      oHeader: IBar
    ): this;
    /**
     * Sets a new value for property {@link #getHeight height}.
     *
     * Defines the height of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeight(
      /**
       * New value for property `height`
       */
      sHeight: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getHideFooter hideFooter}.
     *
     * Defines the footer visibility.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHideFooter(
      /**
       * New value for property `hideFooter`
       */
      bHideFooter?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Defines the width of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth: CSSSize
    ): this;
  }

  export interface $PageSettings extends $WebComponentSettings {
    /**
     * Defines the background color of the `sap.ui.webc.fiori.Page`.
     *
     *  **Note:** When a ui5-list is placed inside the page, we recommend using “List” to ensure better color
     * contrast.
     *
     *  Available options are:
     * 	 - `Solid` (default)
     * 	 - `Transparent`
     * 	 - `List`
     */
    backgroundDesign?:
      | (PageBackgroundDesign | keyof typeof PageBackgroundDesign)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Disables vertical scrolling of page content. If set to true, there will be no vertical scrolling at all.
     */
    disableScrolling?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines if the footer should float over the content.
     *
     *  **Note:** When set to true the footer floats over the content with a slight offset from the bottom,
     * otherwise it is fixed at the very bottom of the page.
     */
    floatingFooter?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the height of the control
     */
    height?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the footer visibility.
     */
    hideFooter?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the width of the control
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the content HTML Element.
     */
    content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Defines the footer HTML Element.
     */
    footer?: IBar;

    /**
     * Defines the header HTML Element.
     */
    header?: IBar;
  }
}

declare module "sap/ui/webc/fiori/ProductSwitch" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { IProductSwitchItem } from "sap/ui/webc/fiori/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview:
   *
   * The `sap.ui.webc.fiori.ProductSwitch` is an SAP Fiori specific web component that is used in `sap.ui.webc.fiori.ShellBar`
   * and allows the user to easily switch between products.
   *
   *
   *
   * Keyboard Handling: The `sap.ui.webc.fiori.ProductSwitch` provides advanced keyboard handling. When focused,
   * the user can use the following keyboard shortcuts in order to perform a navigation:
   *
   *
   *
   * 	 - [TAB] - Move focus to the next interactive element after the `sap.ui.webc.fiori.ProductSwitch`
   * 	 - [UP/DOWN] - Navigates up and down the items
   * 	 - [LEFT/RIGHT] - Navigates left and right the items
   */
  export default class ProductSwitch extends WebComponent {
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
     * Creates a new subclass of class sap.ui.webc.fiori.ProductSwitch with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
     * Returns a metadata object for class sap.ui.webc.fiori.ProductSwitch.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Adds some item to the aggregation {@link #getItems items}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addItem(
      /**
       * The item to add; if empty, nothing is inserted
       */
      oItem: IProductSwitchItem
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
     * Defines the items of the `sap.ui.webc.fiori.ProductSwitch`.
     */
    getItems(): IProductSwitchItem[];
    /**
     * Checks for the provided `sap.ui.webc.fiori.IProductSwitchItem` in the aggregation {@link #getItems items}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: IProductSwitchItem
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
      oItem: IProductSwitchItem,
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
    removeAllItems(): IProductSwitchItem[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     *
     * @returns The removed item or `null`
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | IProductSwitchItem
    ): IProductSwitchItem | null;
  }

  export interface $ProductSwitchSettings extends $WebComponentSettings {
    /**
     * Defines the items of the `sap.ui.webc.fiori.ProductSwitch`.
     */
    items?:
      | IProductSwitchItem[]
      | IProductSwitchItem
      | AggregationBindingInfo
      | `{${string}}`;
  }
}

declare module "sap/ui/webc/fiori/ProductSwitchItem" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { IProductSwitchItem } from "sap/ui/webc/fiori/library";

  import Event from "sap/ui/base/Event";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview: The `sap.ui.webc.fiori.ProductSwitchItem` web component represents the items displayed in the
   * `sap.ui.webc.fiori.ProductSwitch` web component.
   *
   *  **Note:** `sap.ui.webc.fiori.ProductSwitchItem` is not supported when used outside of `sap.ui.webc.fiori.ProductSwitch`.
   *
   *
   *
   *
   * Keyboard Handling: The `sap.ui.webc.fiori.ProductSwitch` provides advanced keyboard handling. When focused,
   * the user can use the following keyboard shortcuts in order to perform a navigation:
   *
   *
   *
   * 	 - [SPACE/ENTER/RETURN] - Trigger `ui5-click` event
   */
  export default class ProductSwitchItem
    extends WebComponent
    implements IProductSwitchItem {
    __implements__sap_ui_webc_fiori_IProductSwitchItem: boolean;
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
     * Creates a new subclass of class sap.ui.webc.fiori.ProductSwitchItem with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
     * Returns a metadata object for class sap.ui.webc.fiori.ProductSwitchItem.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:click click} event of this `sap.ui.webc.fiori.ProductSwitchItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ProductSwitchItem` itself.
     *
     * Fired when the `sap.ui.webc.fiori.ProductSwitchItem` is activated either with a click/tap or by using
     * the Enter or Space key.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClick(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ProductSwitchItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:click click} event of this `sap.ui.webc.fiori.ProductSwitchItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ProductSwitchItem` itself.
     *
     * Fired when the `sap.ui.webc.fiori.ProductSwitchItem` is activated either with a click/tap or by using
     * the Enter or Space key.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ProductSwitchItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:click click} event of this `sap.ui.webc.fiori.ProductSwitchItem`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClick(
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
     * Fires event {@link #event:click click} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Defines the icon to be displayed as a graphical element within the component.
     *
     *  Example:
     *
     * ```javascript
     * ui5-product-switch-item icon="palette"```
     *
     *
     * See all the available icons in the {@link demo:sap/m/demokit/iconExplorer/webapp/index.html Icon Explorer}.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `icon`
     */
    getIcon(): string;
    /**
     * Gets current value of property {@link #getSubtitleText subtitleText}.
     *
     * Defines the subtitle of the component.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `subtitleText`
     */
    getSubtitleText(): string;
    /**
     * Gets current value of property {@link #getTarget target}.
     *
     * Defines a target where the `targetSrc` content must be open.
     *
     *  Available options are:
     * 	 - `_self`
     * 	 - `_top`
     * 	 - `_blank`
     * 	 - `_parent`
     * 	 - `_search`
     *
     * Default value is `"_self"`.
     *
     * @returns Value of property `target`
     */
    getTarget(): string;
    /**
     * Gets current value of property {@link #getTargetSrc targetSrc}.
     *
     * Defines the component target URI. Supports standard hyperlink behavior.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `targetSrc`
     */
    getTargetSrc(): string;
    /**
     * Gets current value of property {@link #getTitleText titleText}.
     *
     * Defines the title of the component.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `titleText`
     */
    getTitleText(): string;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Defines the icon to be displayed as a graphical element within the component.
     *
     *  Example:
     *
     * ```javascript
     * ui5-product-switch-item icon="palette"```
     *
     *
     * See all the available icons in the {@link demo:sap/m/demokit/iconExplorer/webapp/index.html Icon Explorer}.
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
      sIcon?: string
    ): this;
    /**
     * Sets a new value for property {@link #getSubtitleText subtitleText}.
     *
     * Defines the subtitle of the component.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSubtitleText(
      /**
       * New value for property `subtitleText`
       */
      sSubtitleText?: string
    ): this;
    /**
     * Sets a new value for property {@link #getTarget target}.
     *
     * Defines a target where the `targetSrc` content must be open.
     *
     *  Available options are:
     * 	 - `_self`
     * 	 - `_top`
     * 	 - `_blank`
     * 	 - `_parent`
     * 	 - `_search`
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
     * Sets a new value for property {@link #getTargetSrc targetSrc}.
     *
     * Defines the component target URI. Supports standard hyperlink behavior.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTargetSrc(
      /**
       * New value for property `targetSrc`
       */
      sTargetSrc?: string
    ): this;
    /**
     * Sets a new value for property {@link #getTitleText titleText}.
     *
     * Defines the title of the component.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitleText(
      /**
       * New value for property `titleText`
       */
      sTitleText?: string
    ): this;
  }

  export interface $ProductSwitchItemSettings extends $WebComponentSettings {
    /**
     * Defines the icon to be displayed as a graphical element within the component.
     *
     *  Example:
     *
     * ```javascript
     * ui5-product-switch-item icon="palette"```
     *
     *
     * See all the available icons in the {@link demo:sap/m/demokit/iconExplorer/webapp/index.html Icon Explorer}.
     */
    icon?: string | PropertyBindingInfo;

    /**
     * Defines the subtitle of the component.
     */
    subtitleText?: string | PropertyBindingInfo;

    /**
     * Defines a target where the `targetSrc` content must be open.
     *
     *  Available options are:
     * 	 - `_self`
     * 	 - `_top`
     * 	 - `_blank`
     * 	 - `_parent`
     * 	 - `_search`
     */
    target?: string | PropertyBindingInfo;

    /**
     * Defines the component target URI. Supports standard hyperlink behavior.
     */
    targetSrc?: string | PropertyBindingInfo;

    /**
     * Defines the title of the component.
     */
    titleText?: string | PropertyBindingInfo;

    /**
     * Fired when the `sap.ui.webc.fiori.ProductSwitchItem` is activated either with a click/tap or by using
     * the Enter or Space key.
     */
    click?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/webc/fiori/ShellBar" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { IShellBarItem } from "sap/ui/webc/fiori/library";

  import {
    IListItem,
    IAvatar,
    IInput,
    IButton,
  } from "sap/ui/webc/main/library";

  import Event from "sap/ui/base/Event";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview:
   *
   * The `sap.ui.webc.fiori.ShellBar` is meant to serve as an application header and includes numerous built-in
   * features, such as: logo, profile image/icon, title, search field, notifications and so on.
   *
   *
   *
   * Stable DOM Refs:
   *
   * You can use the following stable DOM refs for the `sap.ui.webc.fiori.ShellBar`:
   * 	 - logo
   * 	 - copilot
   * 	 - notifications
   * 	 - overflow
   * 	 - profile
   * 	 - product-switch
   *
   * CSS Shadow Parts:
   *
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/::part CSS Shadow Parts} allow developers to
   * style elements inside the Shadow DOM.
   *  The `sap.ui.webc.fiori.ShellBar` exposes the following CSS Shadow Parts:
   * 	 - root - Used to style the outermost wrapper of the `sap.ui.webc.fiori.ShellBar`
   *
   * Keyboard Handling:
   */
  export default class ShellBar extends WebComponent {
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
     * Creates a new subclass of class sap.ui.webc.fiori.ShellBar with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
     * Returns a metadata object for class sap.ui.webc.fiori.ShellBar.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Adds some item to the aggregation {@link #getItems items}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addItem(
      /**
       * The item to add; if empty, nothing is inserted
       */
      oItem: IShellBarItem
    ): this;
    /**
     * Adds some menuItem to the aggregation {@link #getMenuItems menuItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addMenuItem(
      /**
       * The menuItem to add; if empty, nothing is inserted
       */
      oMenuItem: IListItem
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:coPilotClick coPilotClick} event of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when the co pilot is activated.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCoPilotClick(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:coPilotClick coPilotClick} event of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when the co pilot is activated.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCoPilotClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:logoClick logoClick} event of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when the logo is activated.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachLogoClick(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:logoClick logoClick} event of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when the logo is activated.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachLogoClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:menuItemClick menuItemClick} event of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when a menu item is activated **Note:** You can prevent closing of overflow popover by calling
     * `event.preventDefault()`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMenuItemClick(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:menuItemClick menuItemClick} event of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when a menu item is activated **Note:** You can prevent closing of overflow popover by calling
     * `event.preventDefault()`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMenuItemClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:notificationsClick notificationsClick} event
     * of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when the notification icon is activated.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachNotificationsClick(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:notificationsClick notificationsClick} event
     * of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when the notification icon is activated.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachNotificationsClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:productSwitchClick productSwitchClick} event
     * of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when the product switch icon is activated. **Note:** You can prevent closing of overflow popover
     * by calling `event.preventDefault()`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachProductSwitchClick(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:productSwitchClick productSwitchClick} event
     * of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when the product switch icon is activated. **Note:** You can prevent closing of overflow popover
     * by calling `event.preventDefault()`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachProductSwitchClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:profileClick profileClick} event of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when the profile slot is present.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachProfileClick(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:profileClick profileClick} event of this `sap.ui.webc.fiori.ShellBar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBar` itself.
     *
     * Fired, when the profile slot is present.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachProfileClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBar` itself
       */
      oListener?: object
    ): this;
    /**
     * Closes the overflow area. Useful to manually close the overflow after having suppressed automatic closing
     * with preventDefault() of ShellbarItem's press event
     */
    closeOverflow(): void;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;
    /**
     * Destroys the logo in the aggregation {@link #getLogo logo}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyLogo(): this;
    /**
     * Destroys all the menuItems in the aggregation {@link #getMenuItems menuItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyMenuItems(): this;
    /**
     * Destroys the profile in the aggregation {@link #getProfile profile}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyProfile(): this;
    /**
     * Destroys the searchField in the aggregation {@link #getSearchField searchField}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySearchField(): this;
    /**
     * Destroys the startButton in the aggregation {@link #getStartButton startButton}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyStartButton(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:coPilotClick coPilotClick} event of this `sap.ui.webc.fiori.ShellBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachCoPilotClick(
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
     * Detaches event handler `fnFunction` from the {@link #event:logoClick logoClick} event of this `sap.ui.webc.fiori.ShellBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachLogoClick(
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
     * Detaches event handler `fnFunction` from the {@link #event:menuItemClick menuItemClick} event of this
     * `sap.ui.webc.fiori.ShellBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachMenuItemClick(
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
     * Detaches event handler `fnFunction` from the {@link #event:notificationsClick notificationsClick} event
     * of this `sap.ui.webc.fiori.ShellBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachNotificationsClick(
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
     * Detaches event handler `fnFunction` from the {@link #event:productSwitchClick productSwitchClick} event
     * of this `sap.ui.webc.fiori.ShellBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachProductSwitchClick(
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
     * Detaches event handler `fnFunction` from the {@link #event:profileClick profileClick} event of this `sap.ui.webc.fiori.ShellBar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachProfileClick(
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
     * Fires event {@link #event:coPilotClick coPilotClick} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireCoPilotClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * dom ref of the activated element
         */
        targetRef?: HTMLElement;
      }
    ): this;
    /**
     * Fires event {@link #event:logoClick logoClick} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireLogoClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * dom ref of the activated element
         */
        targetRef?: HTMLElement;
      }
    ): this;
    /**
     * Fires event {@link #event:menuItemClick menuItemClick} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireMenuItemClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * DOM ref of the activated list item
         */
        item?: HTMLElement;
      }
    ): this;
    /**
     * Fires event {@link #event:notificationsClick notificationsClick} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireNotificationsClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * dom ref of the activated element
         */
        targetRef?: HTMLElement;
      }
    ): boolean;
    /**
     * Fires event {@link #event:productSwitchClick productSwitchClick} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireProductSwitchClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * dom ref of the activated element
         */
        targetRef?: HTMLElement;
      }
    ): boolean;
    /**
     * Fires event {@link #event:profileClick profileClick} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireProfileClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * dom ref of the activated element
         */
        targetRef?: HTMLElement;
      }
    ): this;
    /**
     * Gets current value of property {@link #getAccessibilityTexts accessibilityTexts}.
     *
     * An object of strings that defines several additional accessibility texts for even further customization.
     *
     * It supports the following fields: - `profileButtonTitle`: defines the tooltip for the profile button
     * - `logoTitle`: defines the tooltip for the logo
     *
     * Default value is `{}`.
     *
     * @returns Value of property `accessibilityTexts`
     */
    getAccessibilityTexts(): object;
    /**
     * Returns the `copilot` DOM ref.
     */
    getCopilotDomRef(): void;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * Defines the `sap.ui.webc.fiori.ShellBar` aditional items.
     *
     *  **Note:** You can use the <ui5-shellbar-item></ui5-shellbar-item>.
     */
    getItems(): IShellBarItem[];
    /**
     * Gets content of aggregation {@link #getLogo logo}.
     *
     * Defines the logo of the `sap.ui.webc.fiori.ShellBar`. For example, you can use `sap.ui.webc.main.Avatar`
     * or `img` elements as logo.
     */
    getLogo(): IAvatar;
    /**
     * Returns the `logo` DOM ref.
     */
    getLogoDomRef(): void;
    /**
     * Gets content of aggregation {@link #getMenuItems menuItems}.
     *
     * Defines the items displayed in menu after a click on the primary title.
     *
     *  **Note:** You can use the <ui5-li></ui5-li> and its ancestors.
     */
    getMenuItems(): IListItem[];
    /**
     * Gets current value of property {@link #getNotificationsCount notificationsCount}.
     *
     * Defines the `notificationsCount`, displayed in the notification icon top-right corner.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `notificationsCount`
     */
    getNotificationsCount(): string;
    /**
     * Returns the `notifications` icon DOM ref.
     */
    getNotificationsDomRef(): void;
    /**
     * Returns the `overflow` icon DOM ref.
     */
    getOverflowDomRef(): void;
    /**
     * Gets current value of property {@link #getPrimaryTitle primaryTitle}.
     *
     * Defines the `primaryTitle`.
     *
     *  **Note:** The `primaryTitle` would be hidden on S screen size (less than approx. 700px).
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `primaryTitle`
     */
    getPrimaryTitle(): string;
    /**
     * Returns the `product-switch` icon DOM ref.
     */
    getProductSwitchDomRef(): void;
    /**
     * Gets content of aggregation {@link #getProfile profile}.
     *
     * You can pass `sap.ui.webc.main.Avatar` to set the profile image/icon. If no profile slot is set - profile
     * will be excluded from actions.
     *
     * Note: We recommend not using the `size` attribute of `sap.ui.webc.main.Avatar` because it should have
     * specific size by design in the context of `sap.ui.webc.fiori.ShellBar` profile.
     */
    getProfile(): IAvatar;
    /**
     * Returns the `profile` icon DOM ref.
     */
    getProfileDomRef(): void;
    /**
     * Gets content of aggregation {@link #getSearchField searchField}.
     *
     * Defines the `sap.ui.webc.main.Input`, that will be used as a search field.
     */
    getSearchField(): IInput;
    /**
     * Gets current value of property {@link #getSecondaryTitle secondaryTitle}.
     *
     * Defines the `secondaryTitle`.
     *
     *  **Note:** The `secondaryTitle` would be hidden on S and M screen sizes (less than approx. 1300px).
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `secondaryTitle`
     */
    getSecondaryTitle(): string;
    /**
     * Gets current value of property {@link #getShowCoPilot showCoPilot}.
     *
     * Defines, if the product CoPilot icon would be displayed.
     *  **Note:** By default the co-pilot is displayed as static SVG. If you need an animated co-pilot, you
     * can import the `"@ui5/webcomponents-fiori/dist/features/CoPilotAnimation.js"` module as add-on feature.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showCoPilot`
     */
    getShowCoPilot(): boolean;
    /**
     * Gets current value of property {@link #getShowNotifications showNotifications}.
     *
     * Defines, if the notification icon would be displayed.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showNotifications`
     */
    getShowNotifications(): boolean;
    /**
     * Gets current value of property {@link #getShowProductSwitch showProductSwitch}.
     *
     * Defines, if the product switch icon would be displayed.
     *
     * Default value is `false`.
     *
     * @returns Value of property `showProductSwitch`
     */
    getShowProductSwitch(): boolean;
    /**
     * Gets content of aggregation {@link #getStartButton startButton}.
     *
     * Defines a `sap.ui.webc.main.Button` in the bar that will be placed in the beginning. We encourage this
     * slot to be used for a back or home button. It gets overstyled to match ShellBar's styling.
     */
    getStartButton(): IButton;
    /**
     * Checks for the provided `sap.ui.webc.fiori.IShellBarItem` in the aggregation {@link #getItems items}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: IShellBarItem
    ): int;
    /**
     * Checks for the provided `sap.ui.webc.main.IListItem` in the aggregation {@link #getMenuItems menuItems}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfMenuItem(
      /**
       * The menuItem whose index is looked for
       */
      oMenuItem: IListItem
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
      oItem: IShellBarItem,
      /**
       * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
       * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a menuItem into the aggregation {@link #getMenuItems menuItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertMenuItem(
      /**
       * The menuItem to insert; if empty, nothing is inserted
       */
      oMenuItem: IListItem,
      /**
       * The `0`-based index the menuItem should be inserted at; for a negative value of `iIndex`, the menuItem
       * is inserted at position 0; for a value greater than the current size of the aggregation, the menuItem
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
    removeAllItems(): IShellBarItem[];
    /**
     * Removes all the controls from the aggregation {@link #getMenuItems menuItems}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllMenuItems(): IListItem[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     *
     * @returns The removed item or `null`
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | IShellBarItem
    ): IShellBarItem | null;
    /**
     * Removes a menuItem from the aggregation {@link #getMenuItems menuItems}.
     *
     * @returns The removed menuItem or `null`
     */
    removeMenuItem(
      /**
       * The menuItem to remove or its index or id
       */
      vMenuItem: int | string | IListItem
    ): IListItem | null;
    /**
     * Sets a new value for property {@link #getAccessibilityTexts accessibilityTexts}.
     *
     * An object of strings that defines several additional accessibility texts for even further customization.
     *
     * It supports the following fields: - `profileButtonTitle`: defines the tooltip for the profile button
     * - `logoTitle`: defines the tooltip for the logo
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `{}`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibilityTexts(
      /**
       * New value for property `accessibilityTexts`
       */
      oAccessibilityTexts?: object
    ): this;
    /**
     * Sets the aggregated {@link #getLogo logo}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLogo(
      /**
       * The logo to set
       */
      oLogo: IAvatar
    ): this;
    /**
     * Sets a new value for property {@link #getNotificationsCount notificationsCount}.
     *
     * Defines the `notificationsCount`, displayed in the notification icon top-right corner.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setNotificationsCount(
      /**
       * New value for property `notificationsCount`
       */
      sNotificationsCount?: string
    ): this;
    /**
     * Sets a new value for property {@link #getPrimaryTitle primaryTitle}.
     *
     * Defines the `primaryTitle`.
     *
     *  **Note:** The `primaryTitle` would be hidden on S screen size (less than approx. 700px).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setPrimaryTitle(
      /**
       * New value for property `primaryTitle`
       */
      sPrimaryTitle?: string
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
      oProfile: IAvatar
    ): this;
    /**
     * Sets the aggregated {@link #getSearchField searchField}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSearchField(
      /**
       * The searchField to set
       */
      oSearchField: IInput
    ): this;
    /**
     * Sets a new value for property {@link #getSecondaryTitle secondaryTitle}.
     *
     * Defines the `secondaryTitle`.
     *
     *  **Note:** The `secondaryTitle` would be hidden on S and M screen sizes (less than approx. 1300px).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSecondaryTitle(
      /**
       * New value for property `secondaryTitle`
       */
      sSecondaryTitle?: string
    ): this;
    /**
     * Sets a new value for property {@link #getShowCoPilot showCoPilot}.
     *
     * Defines, if the product CoPilot icon would be displayed.
     *  **Note:** By default the co-pilot is displayed as static SVG. If you need an animated co-pilot, you
     * can import the `"@ui5/webcomponents-fiori/dist/features/CoPilotAnimation.js"` module as add-on feature.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowCoPilot(
      /**
       * New value for property `showCoPilot`
       */
      bShowCoPilot?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowNotifications showNotifications}.
     *
     * Defines, if the notification icon would be displayed.
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
     * Sets a new value for property {@link #getShowProductSwitch showProductSwitch}.
     *
     * Defines, if the product switch icon would be displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowProductSwitch(
      /**
       * New value for property `showProductSwitch`
       */
      bShowProductSwitch?: boolean
    ): this;
    /**
     * Sets the aggregated {@link #getStartButton startButton}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setStartButton(
      /**
       * The startButton to set
       */
      oStartButton: IButton
    ): this;
  }

  export interface $ShellBarSettings extends $WebComponentSettings {
    /**
     * An object of strings that defines several additional accessibility texts for even further customization.
     *
     * It supports the following fields: - `profileButtonTitle`: defines the tooltip for the profile button
     * - `logoTitle`: defines the tooltip for the logo
     */
    accessibilityTexts?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the `notificationsCount`, displayed in the notification icon top-right corner.
     */
    notificationsCount?: string | PropertyBindingInfo;

    /**
     * Defines the `primaryTitle`.
     *
     *  **Note:** The `primaryTitle` would be hidden on S screen size (less than approx. 700px).
     */
    primaryTitle?: string | PropertyBindingInfo;

    /**
     * Defines the `secondaryTitle`.
     *
     *  **Note:** The `secondaryTitle` would be hidden on S and M screen sizes (less than approx. 1300px).
     */
    secondaryTitle?: string | PropertyBindingInfo;

    /**
     * Defines, if the product CoPilot icon would be displayed.
     *  **Note:** By default the co-pilot is displayed as static SVG. If you need an animated co-pilot, you
     * can import the `"@ui5/webcomponents-fiori/dist/features/CoPilotAnimation.js"` module as add-on feature.
     */
    showCoPilot?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines, if the notification icon would be displayed.
     */
    showNotifications?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines, if the product switch icon would be displayed.
     */
    showProductSwitch?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the `sap.ui.webc.fiori.ShellBar` aditional items.
     *
     *  **Note:** You can use the <ui5-shellbar-item></ui5-shellbar-item>.
     */
    items?:
      | IShellBarItem[]
      | IShellBarItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Defines the logo of the `sap.ui.webc.fiori.ShellBar`. For example, you can use `sap.ui.webc.main.Avatar`
     * or `img` elements as logo.
     */
    logo?: IAvatar;

    /**
     * Defines the items displayed in menu after a click on the primary title.
     *
     *  **Note:** You can use the <ui5-li></ui5-li> and its ancestors.
     */
    menuItems?:
      | IListItem[]
      | IListItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * You can pass `sap.ui.webc.main.Avatar` to set the profile image/icon. If no profile slot is set - profile
     * will be excluded from actions.
     *
     * Note: We recommend not using the `size` attribute of `sap.ui.webc.main.Avatar` because it should have
     * specific size by design in the context of `sap.ui.webc.fiori.ShellBar` profile.
     */
    profile?: IAvatar;

    /**
     * Defines the `sap.ui.webc.main.Input`, that will be used as a search field.
     */
    searchField?: IInput;

    /**
     * Defines a `sap.ui.webc.main.Button` in the bar that will be placed in the beginning. We encourage this
     * slot to be used for a back or home button. It gets overstyled to match ShellBar's styling.
     */
    startButton?: IButton;

    /**
     * Fired, when the co pilot is activated.
     */
    coPilotClick?: (oEvent: Event) => void;

    /**
     * Fired, when the logo is activated.
     */
    logoClick?: (oEvent: Event) => void;

    /**
     * Fired, when a menu item is activated **Note:** You can prevent closing of overflow popover by calling
     * `event.preventDefault()`.
     */
    menuItemClick?: (oEvent: Event) => void;

    /**
     * Fired, when the notification icon is activated.
     */
    notificationsClick?: (oEvent: Event) => void;

    /**
     * Fired, when the product switch icon is activated. **Note:** You can prevent closing of overflow popover
     * by calling `event.preventDefault()`.
     */
    productSwitchClick?: (oEvent: Event) => void;

    /**
     * Fired, when the profile slot is present.
     */
    profileClick?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/webc/fiori/ShellBarItem" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { IShellBarItem } from "sap/ui/webc/fiori/library";

  import Event from "sap/ui/base/Event";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   */
  export default class ShellBarItem
    extends WebComponent
    implements IShellBarItem {
    __implements__sap_ui_webc_fiori_IShellBarItem: boolean;
    /**
     * Constructor for a new `ShellBarItem`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ShellBarItemSettings
    );
    /**
     * Constructor for a new `ShellBarItem`.
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
      mSettings?: $ShellBarItemSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.ShellBarItem with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ShellBarItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.ShellBarItem.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:click click} event of this `sap.ui.webc.fiori.ShellBarItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBarItem` itself.
     *
     * Fired, when the item is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClick(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBarItem` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:click click} event of this `sap.ui.webc.fiori.ShellBarItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ShellBarItem` itself.
     *
     * Fired, when the item is pressed.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ShellBarItem` itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:click click} event of this `sap.ui.webc.fiori.ShellBarItem`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClick(
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
     * Fires event {@link #event:click click} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * DOM ref of the clicked element
         */
        targetRef?: HTMLElement;
      }
    ): boolean;
    /**
     * Gets current value of property {@link #getCount count}.
     *
     * Defines the count displayed in the top-right corner.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `count`
     */
    getCount(): string;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Defines the name of the item's icon.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `icon`
     */
    getIcon(): string;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Defines the item text.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `text`
     */
    getText(): string;
    /**
     * Sets a new value for property {@link #getCount count}.
     *
     * Defines the count displayed in the top-right corner.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setCount(
      /**
       * New value for property `count`
       */
      sCount?: string
    ): this;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Defines the name of the item's icon.
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
      sIcon?: string
    ): this;
    /**
     * Sets a new value for property {@link #getText text}.
     *
     * Defines the item text.
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
  }

  export interface $ShellBarItemSettings extends $WebComponentSettings {
    /**
     * Defines the count displayed in the top-right corner.
     */
    count?: string | PropertyBindingInfo;

    /**
     * Defines the name of the item's icon.
     */
    icon?: string | PropertyBindingInfo;

    /**
     * Defines the item text.
     */
    text?: string | PropertyBindingInfo;

    /**
     * Fired, when the item is pressed.
     */
    click?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/webc/fiori/SideNavigation" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { ISideNavigationItem } from "sap/ui/webc/fiori/library";

  import Control from "sap/ui/core/Control";

  import Event from "sap/ui/base/Event";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview:
   *
   * The `SideNavigation` is used as a standard menu in applications. It consists of three containers: header
   * (top-aligned), main navigation section (top-aligned) and the secondary section (bottom-aligned).
   *
   * 	 - The header is meant for displaying user related information - profile data, avatar, etc.
   * 	 - The main navigation section is related to the user’s current work context
   * 	 - The secondary section is mostly used to link additional information that may be of interest (legal
   * 			information, developer communities, external help, contact information and so on).
   *
   * Usage:
   *
   * Use the available `sap.ui.webc.fiori.SideNavigationItem` and `sap.ui.webc.fiori.SideNavigationSubItem`
   * components to build your menu. The items can consist of text only or an icon with text. The use or non-use
   * of icons must be consistent for all items on one level. You must not combine entries with and without
   * icons on the same level. We strongly recommend that you do not use icons on the second level.
   *
   * Keyboard Handling:
   */
  export default class SideNavigation extends WebComponent {
    /**
     * Constructor for a new `SideNavigation`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SideNavigationSettings
    );
    /**
     * Constructor for a new `SideNavigation`.
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
      mSettings?: $SideNavigationSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.SideNavigation with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, SideNavigation>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.SideNavigation.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Adds some fixedItem to the aggregation {@link #getFixedItems fixedItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addFixedItem(
      /**
       * The fixedItem to add; if empty, nothing is inserted
       */
      oFixedItem: ISideNavigationItem
    ): this;
    /**
     * Adds some header to the aggregation {@link #getHeader header}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addHeader(
      /**
       * The header to add; if empty, nothing is inserted
       */
      oHeader: Control
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
      oItem: ISideNavigationItem
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this
     * `sap.ui.webc.fiori.SideNavigation`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.SideNavigation` itself.
     *
     * Fired when the selection has changed via user interaction
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.SideNavigation` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this
     * `sap.ui.webc.fiori.SideNavigation`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.SideNavigation` itself.
     *
     * Fired when the selection has changed via user interaction
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.SideNavigation` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the fixedItems in the aggregation {@link #getFixedItems fixedItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFixedItems(): this;
    /**
     * Destroys all the header in the aggregation {@link #getHeader header}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyHeader(): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:selectionChange selectionChange} event of
     * this `sap.ui.webc.fiori.SideNavigation`.
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
     * Fires event {@link #event:selectionChange selectionChange} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @returns Whether or not to prevent the default action
     */
    fireSelectionChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * the clicked item.
         */
        item?: HTMLElement;
      }
    ): boolean;
    /**
     * Gets current value of property {@link #getCollapsed collapsed}.
     *
     * Defines whether the `sap.ui.webc.fiori.SideNavigation` is expanded or collapsed.
     *
     * Default value is `false`.
     *
     * @returns Value of property `collapsed`
     */
    getCollapsed(): boolean;
    /**
     * Gets content of aggregation {@link #getFixedItems fixedItems}.
     *
     * Defines the fixed items at the bottom of the `sap.ui.webc.fiori.SideNavigation`. Use the `sap.ui.webc.fiori.SideNavigationItem`
     * component for the fixed items, and optionally the `sap.ui.webc.fiori.SideNavigationSubItem` component
     * to provide second-level items inside them.
     *
     * **Note:** In order to achieve the best user experience, it is recommended that you keep the fixed items
     * "flat" (do not pass sub-items)
     */
    getFixedItems(): ISideNavigationItem[];
    /**
     * Gets content of aggregation {@link #getHeader header}.
     *
     * Defines the header of the `sap.ui.webc.fiori.SideNavigation`.
     *
     *
     *
     *  **Note:** The header is displayed when the component is expanded - the property `collapsed` is false;
     */
    getHeader(): Control[];
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * Defines the main items of the `sap.ui.webc.fiori.SideNavigation`. Use the `sap.ui.webc.fiori.SideNavigationItem`
     * component for the top-level items, and the `sap.ui.webc.fiori.SideNavigationSubItem` component for second-level
     * items, nested inside the items.
     */
    getItems(): ISideNavigationItem[];
    /**
     * Checks for the provided `sap.ui.webc.fiori.ISideNavigationItem` in the aggregation {@link #getFixedItems
     * fixedItems}. and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfFixedItem(
      /**
       * The fixedItem whose index is looked for
       */
      oFixedItem: ISideNavigationItem
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getHeader header}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfHeader(
      /**
       * The header whose index is looked for
       */
      oHeader: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.webc.fiori.ISideNavigationItem` in the aggregation {@link #getItems items}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: ISideNavigationItem
    ): int;
    /**
     * Inserts a fixedItem into the aggregation {@link #getFixedItems fixedItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertFixedItem(
      /**
       * The fixedItem to insert; if empty, nothing is inserted
       */
      oFixedItem: ISideNavigationItem,
      /**
       * The `0`-based index the fixedItem should be inserted at; for a negative value of `iIndex`, the fixedItem
       * is inserted at position 0; for a value greater than the current size of the aggregation, the fixedItem
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a header into the aggregation {@link #getHeader header}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertHeader(
      /**
       * The header to insert; if empty, nothing is inserted
       */
      oHeader: Control,
      /**
       * The `0`-based index the header should be inserted at; for a negative value of `iIndex`, the header is
       * inserted at position 0; for a value greater than the current size of the aggregation, the header is inserted
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
      oItem: ISideNavigationItem,
      /**
       * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
       * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getFixedItems fixedItems}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllFixedItems(): ISideNavigationItem[];
    /**
     * Removes all the controls from the aggregation {@link #getHeader header}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllHeader(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): ISideNavigationItem[];
    /**
     * Removes a fixedItem from the aggregation {@link #getFixedItems fixedItems}.
     *
     * @returns The removed fixedItem or `null`
     */
    removeFixedItem(
      /**
       * The fixedItem to remove or its index or id
       */
      vFixedItem: int | string | ISideNavigationItem
    ): ISideNavigationItem | null;
    /**
     * Removes a header from the aggregation {@link #getHeader header}.
     *
     * @returns The removed header or `null`
     */
    removeHeader(
      /**
       * The header to remove or its index or id
       */
      vHeader: int | string | Control
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
      vItem: int | string | ISideNavigationItem
    ): ISideNavigationItem | null;
    /**
     * Sets a new value for property {@link #getCollapsed collapsed}.
     *
     * Defines whether the `sap.ui.webc.fiori.SideNavigation` is expanded or collapsed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setCollapsed(
      /**
       * New value for property `collapsed`
       */
      bCollapsed?: boolean
    ): this;
  }

  export interface $SideNavigationSettings extends $WebComponentSettings {
    /**
     * Defines whether the `sap.ui.webc.fiori.SideNavigation` is expanded or collapsed.
     */
    collapsed?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the fixed items at the bottom of the `sap.ui.webc.fiori.SideNavigation`. Use the `sap.ui.webc.fiori.SideNavigationItem`
     * component for the fixed items, and optionally the `sap.ui.webc.fiori.SideNavigationSubItem` component
     * to provide second-level items inside them.
     *
     * **Note:** In order to achieve the best user experience, it is recommended that you keep the fixed items
     * "flat" (do not pass sub-items)
     */
    fixedItems?:
      | ISideNavigationItem[]
      | ISideNavigationItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Defines the header of the `sap.ui.webc.fiori.SideNavigation`.
     *
     *
     *
     *  **Note:** The header is displayed when the component is expanded - the property `collapsed` is false;
     */
    header?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Defines the main items of the `sap.ui.webc.fiori.SideNavigation`. Use the `sap.ui.webc.fiori.SideNavigationItem`
     * component for the top-level items, and the `sap.ui.webc.fiori.SideNavigationSubItem` component for second-level
     * items, nested inside the items.
     */
    items?:
      | ISideNavigationItem[]
      | ISideNavigationItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Fired when the selection has changed via user interaction
     */
    selectionChange?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/webc/fiori/SideNavigationItem" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import {
    ISideNavigationItem,
    ISideNavigationSubItem,
  } from "sap/ui/webc/fiori/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview:
   *
   * The `sap.ui.webc.fiori.SideNavigationItem` is used within `sap.ui.webc.fiori.SideNavigation` only. Via
   * the `sap.ui.webc.fiori.SideNavigationItem` you control the content of the `SideNavigation`.
   */
  export default class SideNavigationItem
    extends WebComponent
    implements ISideNavigationItem {
    __implements__sap_ui_webc_fiori_ISideNavigationItem: boolean;
    /**
     * Constructor for a new `SideNavigationItem`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SideNavigationItemSettings
    );
    /**
     * Constructor for a new `SideNavigationItem`.
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
      mSettings?: $SideNavigationItemSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.SideNavigationItem with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, SideNavigationItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.SideNavigationItem.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Adds some item to the aggregation {@link #getItems items}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addItem(
      /**
       * The item to add; if empty, nothing is inserted
       */
      oItem: ISideNavigationSubItem
    ): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;
    /**
     * Gets current value of property {@link #getExpanded expanded}.
     *
     * Defines if the item is expanded
     *
     * Default value is `false`.
     *
     * @returns Value of property `expanded`
     */
    getExpanded(): boolean;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Defines the icon of the item.
     *
     *
     *
     * The SAP-icons font provides numerous options.
     *  See all the available icons in the {@link demo:sap/m/demokit/iconExplorer/webapp/index.html Icon Explorer}.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `icon`
     */
    getIcon(): string;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * If you wish to nest menus, you can pass inner menu items to the default slot.
     */
    getItems(): ISideNavigationSubItem[];
    /**
     * Gets current value of property {@link #getSelected selected}.
     *
     * Defines whether the subitem is selected
     *
     * Default value is `false`.
     *
     * @returns Value of property `selected`
     */
    getSelected(): boolean;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Defines the text of the item.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `text`
     */
    getText(): string;
    /**
     * Gets current value of property {@link #getWholeItemToggleable wholeItemToggleable}.
     *
     * Defines whether pressing the whole item or only pressing the icon will show/hide the items's sub items(if
     * present). If set to true, pressing the whole item will toggle the sub items, and it won't fire the `click`
     * event. By default, only pressing the arrow icon will toggle the sub items & the click event will be fired
     * if the item is pressed outside of the icon.
     *
     * Default value is `false`.
     *
     * @returns Value of property `wholeItemToggleable`
     */
    getWholeItemToggleable(): boolean;
    /**
     * Checks for the provided `sap.ui.webc.fiori.ISideNavigationSubItem` in the aggregation {@link #getItems
     * items}. and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: ISideNavigationSubItem
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
      oItem: ISideNavigationSubItem,
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
    removeAllItems(): ISideNavigationSubItem[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     *
     * @returns The removed item or `null`
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | ISideNavigationSubItem
    ): ISideNavigationSubItem | null;
    /**
     * Sets a new value for property {@link #getExpanded expanded}.
     *
     * Defines if the item is expanded
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setExpanded(
      /**
       * New value for property `expanded`
       */
      bExpanded?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Defines the icon of the item.
     *
     *
     *
     * The SAP-icons font provides numerous options.
     *  See all the available icons in the {@link demo:sap/m/demokit/iconExplorer/webapp/index.html Icon Explorer}.
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
      sIcon?: string
    ): this;
    /**
     * Sets a new value for property {@link #getSelected selected}.
     *
     * Defines whether the subitem is selected
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
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
     * Sets a new value for property {@link #getText text}.
     *
     * Defines the text of the item.
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
     * Sets a new value for property {@link #getWholeItemToggleable wholeItemToggleable}.
     *
     * Defines whether pressing the whole item or only pressing the icon will show/hide the items's sub items(if
     * present). If set to true, pressing the whole item will toggle the sub items, and it won't fire the `click`
     * event. By default, only pressing the arrow icon will toggle the sub items & the click event will be fired
     * if the item is pressed outside of the icon.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setWholeItemToggleable(
      /**
       * New value for property `wholeItemToggleable`
       */
      bWholeItemToggleable?: boolean
    ): this;
  }

  export interface $SideNavigationItemSettings extends $WebComponentSettings {
    /**
     * Defines if the item is expanded
     */
    expanded?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the icon of the item.
     *
     *
     *
     * The SAP-icons font provides numerous options.
     *  See all the available icons in the {@link demo:sap/m/demokit/iconExplorer/webapp/index.html Icon Explorer}.
     */
    icon?: string | PropertyBindingInfo;

    /**
     * Defines whether the subitem is selected
     */
    selected?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the text of the item.
     */
    text?: string | PropertyBindingInfo;

    /**
     * Defines whether pressing the whole item or only pressing the icon will show/hide the items's sub items(if
     * present). If set to true, pressing the whole item will toggle the sub items, and it won't fire the `click`
     * event. By default, only pressing the arrow icon will toggle the sub items & the click event will be fired
     * if the item is pressed outside of the icon.
     */
    wholeItemToggleable?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * If you wish to nest menus, you can pass inner menu items to the default slot.
     */
    items?:
      | ISideNavigationSubItem[]
      | ISideNavigationSubItem
      | AggregationBindingInfo
      | `{${string}}`;
  }
}

declare module "sap/ui/webc/fiori/SideNavigationSubItem" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { ISideNavigationSubItem } from "sap/ui/webc/fiori/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview:
   *
   * The `sap.ui.webc.fiori.SideNavigationSubItem` is intended to be used inside a `sap.ui.webc.fiori.SideNavigationItem`
   * only.
   */
  export default class SideNavigationSubItem
    extends WebComponent
    implements ISideNavigationSubItem {
    __implements__sap_ui_webc_fiori_ISideNavigationSubItem: boolean;
    /**
     * Constructor for a new `SideNavigationSubItem`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SideNavigationSubItemSettings
    );
    /**
     * Constructor for a new `SideNavigationSubItem`.
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
      mSettings?: $SideNavigationSubItemSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.SideNavigationSubItem with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, SideNavigationSubItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.SideNavigationSubItem.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Defines the icon of the item.
     *
     *
     *
     * The SAP-icons font provides numerous options.
     *  See all the available icons in the {@link demo:sap/m/demokit/iconExplorer/webapp/index.html Icon Explorer}.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `icon`
     */
    getIcon(): string;
    /**
     * Gets current value of property {@link #getSelected selected}.
     *
     * Defines whether the subitem is selected.
     *
     * Default value is `false`.
     *
     * @returns Value of property `selected`
     */
    getSelected(): boolean;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Defines the text of the item.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `text`
     */
    getText(): string;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Defines the icon of the item.
     *
     *
     *
     * The SAP-icons font provides numerous options.
     *  See all the available icons in the {@link demo:sap/m/demokit/iconExplorer/webapp/index.html Icon Explorer}.
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
      sIcon?: string
    ): this;
    /**
     * Sets a new value for property {@link #getSelected selected}.
     *
     * Defines whether the subitem is selected.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
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
     * Sets a new value for property {@link #getText text}.
     *
     * Defines the text of the item.
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
  }

  export interface $SideNavigationSubItemSettings
    extends $WebComponentSettings {
    /**
     * Defines the icon of the item.
     *
     *
     *
     * The SAP-icons font provides numerous options.
     *  See all the available icons in the {@link demo:sap/m/demokit/iconExplorer/webapp/index.html Icon Explorer}.
     */
    icon?: string | PropertyBindingInfo;

    /**
     * Defines whether the subitem is selected.
     */
    selected?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the text of the item.
     */
    text?: string | PropertyBindingInfo;
  }
}

declare module "sap/ui/webc/fiori/SortItem" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { ISortItem } from "sap/ui/webc/fiori/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.97.0
   * @EXPERIMENTAL (since 1.97.0)
   *
   * Overview:
   *
   * Usage:
   */
  export default class SortItem extends WebComponent implements ISortItem {
    __implements__sap_ui_webc_fiori_ISortItem: boolean;
    /**
     * Constructor for a new `SortItem`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SortItemSettings
    );
    /**
     * Constructor for a new `SortItem`.
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
      mSettings?: $SortItemSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.SortItem with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, SortItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.SortItem.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Gets current value of property {@link #getSelected selected}.
     *
     * Defines if the component is selected.
     *
     * Default value is `false`.
     *
     * @returns Value of property `selected`
     */
    getSelected(): boolean;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Defines the text of the component.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `text`
     */
    getText(): string;
    /**
     * Sets a new value for property {@link #getSelected selected}.
     *
     * Defines if the component is selected.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
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
     * Sets a new value for property {@link #getText text}.
     *
     * Defines the text of the component.
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
  }

  export interface $SortItemSettings extends $WebComponentSettings {
    /**
     * Defines if the component is selected.
     */
    selected?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the text of the component.
     */
    text?: string | PropertyBindingInfo;
  }
}

declare module "sap/ui/webc/fiori/Timeline" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { ITimelineItem, TimelineLayout } from "sap/ui/webc/fiori/library";

  import { CSSSize } from "sap/ui/core/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview:
   *
   * The `sap.ui.webc.fiori.Timeline` component shows entries (such as objects, events, or posts) in chronological
   * order. A common use case is to provide information about changes to an object, or events related to an
   * object. These entries can be generated by the system (for example, value XY changed from A to B), or
   * added manually. There are two distinct variants of the timeline: basic and social. The basic timeline
   * is read-only, while the social timeline offers a high level of interaction and collaboration, and is
   * integrated within SAP Jam.
   */
  export default class Timeline extends WebComponent {
    /**
     * Constructor for a new `Timeline`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TimelineSettings
    );
    /**
     * Constructor for a new `Timeline`.
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
      mSettings?: $TimelineSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.Timeline with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Timeline>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.Timeline.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Adds some item to the aggregation {@link #getItems items}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addItem(
      /**
       * The item to add; if empty, nothing is inserted
       */
      oItem: ITimelineItem
    ): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;
    /**
     * Gets current value of property {@link #getAccessibleName accessibleName}.
     *
     * Defines the accessible aria name of the component.
     *
     * @returns Value of property `accessibleName`
     */
    getAccessibleName(): string;
    /**
     * Gets current value of property {@link #getHeight height}.
     *
     * Defines the height of the control
     *
     * @returns Value of property `height`
     */
    getHeight(): CSSSize;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * Determines the content of the `sap.ui.webc.fiori.Timeline`.
     */
    getItems(): ITimelineItem[];
    /**
     * Gets current value of property {@link #getLayout layout}.
     *
     * Defines the items orientation.
     *
     *
     *
     *  **Note:** Available options are:
     * 	 - `Vertical`
     * 	 - `Horizontal`
     *
     * Default value is `Vertical`.
     *
     * @returns Value of property `layout`
     */
    getLayout(): TimelineLayout | keyof typeof TimelineLayout;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Defines the width of the control
     *
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
    /**
     * Checks for the provided `sap.ui.webc.fiori.ITimelineItem` in the aggregation {@link #getItems items}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: ITimelineItem
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
      oItem: ITimelineItem,
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
    removeAllItems(): ITimelineItem[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     *
     * @returns The removed item or `null`
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | ITimelineItem
    ): ITimelineItem | null;
    /**
     * Sets a new value for property {@link #getAccessibleName accessibleName}.
     *
     * Defines the accessible aria name of the component.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleName(
      /**
       * New value for property `accessibleName`
       */
      sAccessibleName: string
    ): this;
    /**
     * Sets a new value for property {@link #getHeight height}.
     *
     * Defines the height of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeight(
      /**
       * New value for property `height`
       */
      sHeight: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getLayout layout}.
     *
     * Defines the items orientation.
     *
     *
     *
     *  **Note:** Available options are:
     * 	 - `Vertical`
     * 	 - `Horizontal`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Vertical`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLayout(
      /**
       * New value for property `layout`
       */
      sLayout?: TimelineLayout | keyof typeof TimelineLayout
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Defines the width of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth: CSSSize
    ): this;
  }

  export interface $TimelineSettings extends $WebComponentSettings {
    /**
     * Defines the accessible aria name of the component.
     */
    accessibleName?: string | PropertyBindingInfo;

    /**
     * Defines the height of the control
     */
    height?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the items orientation.
     *
     *
     *
     *  **Note:** Available options are:
     * 	 - `Vertical`
     * 	 - `Horizontal`
     */
    layout?:
      | (TimelineLayout | keyof typeof TimelineLayout)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the width of the control
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines the content of the `sap.ui.webc.fiori.Timeline`.
     */
    items?:
      | ITimelineItem[]
      | ITimelineItem
      | AggregationBindingInfo
      | `{${string}}`;
  }
}

declare module "sap/ui/webc/fiori/TimelineItem" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { ITimelineItem } from "sap/ui/webc/fiori/library";

  import Control from "sap/ui/core/Control";

  import Event from "sap/ui/base/Event";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview:
   *
   * An entry posted on the timeline.
   */
  export default class TimelineItem
    extends WebComponent
    implements ITimelineItem {
    __implements__sap_ui_webc_fiori_ITimelineItem: boolean;
    /**
     * Constructor for a new `TimelineItem`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TimelineItemSettings
    );
    /**
     * Constructor for a new `TimelineItem`.
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
      mSettings?: $TimelineItemSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.TimelineItem with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, TimelineItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.TimelineItem.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
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
     * Attaches event handler `fnFunction` to the {@link #event:nameClick nameClick} event of this `sap.ui.webc.fiori.TimelineItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.TimelineItem` itself.
     *
     * Fired when the item name is pressed either with a click/tap or by using the Enter or Space key.
     *
     *  **Note:** The event will not be fired if the `name-clickable` attribute is not set.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachNameClick(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.TimelineItem` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:nameClick nameClick} event of this `sap.ui.webc.fiori.TimelineItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.TimelineItem` itself.
     *
     * Fired when the item name is pressed either with a click/tap or by using the Enter or Space key.
     *
     *  **Note:** The event will not be fired if the `name-clickable` attribute is not set.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachNameClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.TimelineItem` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:nameClick nameClick} event of this `sap.ui.webc.fiori.TimelineItem`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachNameClick(
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
     * Fires event {@link #event:nameClick nameClick} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireNameClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Determines the description of the `sap.ui.webc.fiori.TimelineItem`.
     */
    getContent(): Control[];
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Defines the icon to be displayed as graphical element within the `sap.ui.webc.fiori.TimelineItem`. SAP-icons
     * font provides numerous options.
     *
     *
     *
     * See all the available icons in the {@link demo:sap/m/demokit/iconExplorer/webapp/index.html Icon Explorer}.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `icon`
     */
    getIcon(): string;
    /**
     * Gets current value of property {@link #getName name}.
     *
     * Defines the name of the item, displayed before the `title-text`.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `name`
     */
    getName(): string;
    /**
     * Gets current value of property {@link #getNameClickable nameClickable}.
     *
     * Defines if the `name` is clickable.
     *
     * Default value is `false`.
     *
     * @returns Value of property `nameClickable`
     */
    getNameClickable(): boolean;
    /**
     * Gets current value of property {@link #getSubtitleText subtitleText}.
     *
     * Defines the subtitle text of the component.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `subtitleText`
     */
    getSubtitleText(): string;
    /**
     * Gets current value of property {@link #getTitleText titleText}.
     *
     * Defines the title text of the component.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `titleText`
     */
    getTitleText(): string;
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
     * Defines the icon to be displayed as graphical element within the `sap.ui.webc.fiori.TimelineItem`. SAP-icons
     * font provides numerous options.
     *
     *
     *
     * See all the available icons in the {@link demo:sap/m/demokit/iconExplorer/webapp/index.html Icon Explorer}.
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
      sIcon?: string
    ): this;
    /**
     * Sets a new value for property {@link #getName name}.
     *
     * Defines the name of the item, displayed before the `title-text`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
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
     * Sets a new value for property {@link #getNameClickable nameClickable}.
     *
     * Defines if the `name` is clickable.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setNameClickable(
      /**
       * New value for property `nameClickable`
       */
      bNameClickable?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSubtitleText subtitleText}.
     *
     * Defines the subtitle text of the component.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSubtitleText(
      /**
       * New value for property `subtitleText`
       */
      sSubtitleText?: string
    ): this;
    /**
     * Sets a new value for property {@link #getTitleText titleText}.
     *
     * Defines the title text of the component.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitleText(
      /**
       * New value for property `titleText`
       */
      sTitleText?: string
    ): this;
  }

  export interface $TimelineItemSettings extends $WebComponentSettings {
    /**
     * Defines the icon to be displayed as graphical element within the `sap.ui.webc.fiori.TimelineItem`. SAP-icons
     * font provides numerous options.
     *
     *
     *
     * See all the available icons in the {@link demo:sap/m/demokit/iconExplorer/webapp/index.html Icon Explorer}.
     */
    icon?: string | PropertyBindingInfo;

    /**
     * Defines the name of the item, displayed before the `title-text`.
     */
    name?: string | PropertyBindingInfo;

    /**
     * Defines if the `name` is clickable.
     */
    nameClickable?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the subtitle text of the component.
     */
    subtitleText?: string | PropertyBindingInfo;

    /**
     * Defines the title text of the component.
     */
    titleText?: string | PropertyBindingInfo;

    /**
     * Determines the description of the `sap.ui.webc.fiori.TimelineItem`.
     */
    content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Fired when the item name is pressed either with a click/tap or by using the Enter or Space key.
     *
     *  **Note:** The event will not be fired if the `name-clickable` attribute is not set.
     */
    nameClick?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/webc/fiori/UploadCollection" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import Control from "sap/ui/core/Control";

  import { IUploadCollectionItem } from "sap/ui/webc/fiori/library";

  import Event from "sap/ui/base/Event";

  import { CSSSize } from "sap/ui/core/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import { ListMode } from "sap/ui/webc/main/library";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview: This component allows you to represent files before uploading them to a server, with the help
   * of `sap.ui.webc.fiori.UploadCollectionItem`. It also allows you to show already uploaded files.
   */
  export default class UploadCollection extends WebComponent {
    /**
     * Constructor for a new `UploadCollection`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $UploadCollectionSettings
    );
    /**
     * Constructor for a new `UploadCollection`.
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
      mSettings?: $UploadCollectionSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.UploadCollection with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, UploadCollection>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.UploadCollection.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Adds some header to the aggregation {@link #getHeader header}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addHeader(
      /**
       * The header to add; if empty, nothing is inserted
       */
      oHeader: Control
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
      oItem: IUploadCollectionItem
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:drop drop} event of this `sap.ui.webc.fiori.UploadCollection`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollection` itself.
     *
     * Fired when an element is dropped inside the drag and drop overlay.
     *
     *  **Note:** The `drop` event is fired only when elements are dropped within the drag and drop overlay
     * and ignored for the other parts of the `sap.ui.webc.fiori.UploadCollection`.
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
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollection`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:drop drop} event of this `sap.ui.webc.fiori.UploadCollection`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollection` itself.
     *
     * Fired when an element is dropped inside the drag and drop overlay.
     *
     *  **Note:** The `drop` event is fired only when elements are dropped within the drag and drop overlay
     * and ignored for the other parts of the `sap.ui.webc.fiori.UploadCollection`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDrop(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollection`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:itemDelete itemDelete} event of this `sap.ui.webc.fiori.UploadCollection`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollection` itself.
     *
     * Fired when the Delete button of any item is pressed.
     *
     *  **Note:** A Delete button is displayed on each item, when the `sap.ui.webc.fiori.UploadCollection` `mode`
     * property is set to `Delete`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemDelete(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollection`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:itemDelete itemDelete} event of this `sap.ui.webc.fiori.UploadCollection`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollection` itself.
     *
     * Fired when the Delete button of any item is pressed.
     *
     *  **Note:** A Delete button is displayed on each item, when the `sap.ui.webc.fiori.UploadCollection` `mode`
     * property is set to `Delete`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemDelete(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollection`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this
     * `sap.ui.webc.fiori.UploadCollection`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollection` itself.
     *
     * Fired when selection is changed by user interaction in `SingleSelect` and `MultiSelect` modes.
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollection`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this
     * `sap.ui.webc.fiori.UploadCollection`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollection` itself.
     *
     * Fired when selection is changed by user interaction in `SingleSelect` and `MultiSelect` modes.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollection`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the header in the aggregation {@link #getHeader header}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyHeader(): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:drop drop} event of this `sap.ui.webc.fiori.UploadCollection`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachDrop(
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
     * Detaches event handler `fnFunction` from the {@link #event:itemDelete itemDelete} event of this `sap.ui.webc.fiori.UploadCollection`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachItemDelete(
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
     * Detaches event handler `fnFunction` from the {@link #event:selectionChange selectionChange} event of
     * this `sap.ui.webc.fiori.UploadCollection`.
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
     * Fires event {@link #event:drop drop} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireDrop(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The `drop` event operation data.
         */
        dataTransfer?: DataTransfer;
      }
    ): this;
    /**
     * Fires event {@link #event:itemDelete itemDelete} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireItemDelete(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The `sap.ui.webc.fiori.UploadCollectionItem` which was renamed.
         */
        item?: HTMLElement;
      }
    ): this;
    /**
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
         * An array of the selected items.
         */
        selectedItems?: any[];
      }
    ): this;
    /**
     * Gets current value of property {@link #getAccessibleName accessibleName}.
     *
     * Defines the accessible aria name of the component.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `accessibleName`
     */
    getAccessibleName(): string;
    /**
     * Gets content of aggregation {@link #getHeader header}.
     *
     * Defines the `sap.ui.webc.fiori.UploadCollection` header.
     *
     *  **Note:** If `header` slot is provided, the labelling of the `UploadCollection` is a responsibility
     * of the application developer. `accessibleName` should be used.
     */
    getHeader(): Control[];
    /**
     * Gets current value of property {@link #getHeight height}.
     *
     * Defines the height of the control
     *
     * @returns Value of property `height`
     */
    getHeight(): CSSSize;
    /**
     * Gets current value of property {@link #getHideDragOverlay hideDragOverlay}.
     *
     * By default there will be drag and drop overlay shown over the `sap.ui.webc.fiori.UploadCollection` when
     * files are dragged. If you don't intend to use drag and drop, set this property.
     *
     *  **Note:** It is up to the application developer to add handler for `drop` event and handle it. `sap.ui.webc.fiori.UploadCollection`
     * only displays an overlay.
     *
     * Default value is `false`.
     *
     * @returns Value of property `hideDragOverlay`
     */
    getHideDragOverlay(): boolean;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * Defines the items of the `sap.ui.webc.fiori.UploadCollection`.
     *  **Note:** Use `sap.ui.webc.fiori.UploadCollectionItem` for the intended design.
     */
    getItems(): IUploadCollectionItem[];
    /**
     * Gets current value of property {@link #getMode mode}.
     *
     * Defines the mode of the `sap.ui.webc.fiori.UploadCollection`.
     *
     *
     *
     *  **Note:**
     * 	 - `None`
     * 	 - `SingleSelect`
     * 	 - `MultiSelect`
     * 	 - `Delete`
     *
     * Default value is `None`.
     *
     * @returns Value of property `mode`
     */
    getMode(): ListMode | keyof typeof ListMode;
    /**
     * Gets current value of property {@link #getNoDataDescription noDataDescription}.
     *
     * Allows you to set your own text for the 'No data' description.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `noDataDescription`
     */
    getNoDataDescription(): string;
    /**
     * Gets current value of property {@link #getNoDataText noDataText}.
     *
     * Allows you to set your own text for the 'No data' text.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `noDataText`
     */
    getNoDataText(): string;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Defines the width of the control
     *
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getHeader header}. and returns
     * its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfHeader(
      /**
       * The header whose index is looked for
       */
      oHeader: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.webc.fiori.IUploadCollectionItem` in the aggregation {@link #getItems
     * items}. and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: IUploadCollectionItem
    ): int;
    /**
     * Inserts a header into the aggregation {@link #getHeader header}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertHeader(
      /**
       * The header to insert; if empty, nothing is inserted
       */
      oHeader: Control,
      /**
       * The `0`-based index the header should be inserted at; for a negative value of `iIndex`, the header is
       * inserted at position 0; for a value greater than the current size of the aggregation, the header is inserted
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
      oItem: IUploadCollectionItem,
      /**
       * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
       * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getHeader header}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllHeader(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): IUploadCollectionItem[];
    /**
     * Removes a header from the aggregation {@link #getHeader header}.
     *
     * @returns The removed header or `null`
     */
    removeHeader(
      /**
       * The header to remove or its index or id
       */
      vHeader: int | string | Control
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
      vItem: int | string | IUploadCollectionItem
    ): IUploadCollectionItem | null;
    /**
     * Sets a new value for property {@link #getAccessibleName accessibleName}.
     *
     * Defines the accessible aria name of the component.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleName(
      /**
       * New value for property `accessibleName`
       */
      sAccessibleName?: string
    ): this;
    /**
     * Sets a new value for property {@link #getHeight height}.
     *
     * Defines the height of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeight(
      /**
       * New value for property `height`
       */
      sHeight: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getHideDragOverlay hideDragOverlay}.
     *
     * By default there will be drag and drop overlay shown over the `sap.ui.webc.fiori.UploadCollection` when
     * files are dragged. If you don't intend to use drag and drop, set this property.
     *
     *  **Note:** It is up to the application developer to add handler for `drop` event and handle it. `sap.ui.webc.fiori.UploadCollection`
     * only displays an overlay.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHideDragOverlay(
      /**
       * New value for property `hideDragOverlay`
       */
      bHideDragOverlay?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getMode mode}.
     *
     * Defines the mode of the `sap.ui.webc.fiori.UploadCollection`.
     *
     *
     *
     *  **Note:**
     * 	 - `None`
     * 	 - `SingleSelect`
     * 	 - `MultiSelect`
     * 	 - `Delete`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMode(
      /**
       * New value for property `mode`
       */
      sMode?: ListMode | keyof typeof ListMode
    ): this;
    /**
     * Sets a new value for property {@link #getNoDataDescription noDataDescription}.
     *
     * Allows you to set your own text for the 'No data' description.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setNoDataDescription(
      /**
       * New value for property `noDataDescription`
       */
      sNoDataDescription?: string
    ): this;
    /**
     * Sets a new value for property {@link #getNoDataText noDataText}.
     *
     * Allows you to set your own text for the 'No data' text.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setNoDataText(
      /**
       * New value for property `noDataText`
       */
      sNoDataText?: string
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Defines the width of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth: CSSSize
    ): this;
  }

  export interface $UploadCollectionSettings extends $WebComponentSettings {
    /**
     * Defines the accessible aria name of the component.
     */
    accessibleName?: string | PropertyBindingInfo;

    /**
     * Defines the height of the control
     */
    height?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * By default there will be drag and drop overlay shown over the `sap.ui.webc.fiori.UploadCollection` when
     * files are dragged. If you don't intend to use drag and drop, set this property.
     *
     *  **Note:** It is up to the application developer to add handler for `drop` event and handle it. `sap.ui.webc.fiori.UploadCollection`
     * only displays an overlay.
     */
    hideDragOverlay?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the mode of the `sap.ui.webc.fiori.UploadCollection`.
     *
     *
     *
     *  **Note:**
     * 	 - `None`
     * 	 - `SingleSelect`
     * 	 - `MultiSelect`
     * 	 - `Delete`
     */
    mode?:
      | (ListMode | keyof typeof ListMode)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Allows you to set your own text for the 'No data' description.
     */
    noDataDescription?: string | PropertyBindingInfo;

    /**
     * Allows you to set your own text for the 'No data' text.
     */
    noDataText?: string | PropertyBindingInfo;

    /**
     * Defines the width of the control
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the `sap.ui.webc.fiori.UploadCollection` header.
     *
     *  **Note:** If `header` slot is provided, the labelling of the `UploadCollection` is a responsibility
     * of the application developer. `accessibleName` should be used.
     */
    header?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Defines the items of the `sap.ui.webc.fiori.UploadCollection`.
     *  **Note:** Use `sap.ui.webc.fiori.UploadCollectionItem` for the intended design.
     */
    items?:
      | IUploadCollectionItem[]
      | IUploadCollectionItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Fired when an element is dropped inside the drag and drop overlay.
     *
     *  **Note:** The `drop` event is fired only when elements are dropped within the drag and drop overlay
     * and ignored for the other parts of the `sap.ui.webc.fiori.UploadCollection`.
     */
    drop?: (oEvent: Event) => void;

    /**
     * Fired when the Delete button of any item is pressed.
     *
     *  **Note:** A Delete button is displayed on each item, when the `sap.ui.webc.fiori.UploadCollection` `mode`
     * property is set to `Delete`.
     */
    itemDelete?: (oEvent: Event) => void;

    /**
     * Fired when selection is changed by user interaction in `SingleSelect` and `MultiSelect` modes.
     */
    selectionChange?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/webc/fiori/UploadCollectionItem" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import {
    IUploadCollectionItem,
    UploadState,
  } from "sap/ui/webc/fiori/library";

  import Control from "sap/ui/core/Control";

  import Event from "sap/ui/base/Event";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview: A component to be used within the `sap.ui.webc.fiori.UploadCollection`.
   */
  export default class UploadCollectionItem
    extends WebComponent
    implements IUploadCollectionItem {
    __implements__sap_ui_webc_fiori_IUploadCollectionItem: boolean;
    /**
     * Constructor for a new `UploadCollectionItem`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $UploadCollectionItemSettings
    );
    /**
     * Constructor for a new `UploadCollectionItem`.
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
      mSettings?: $UploadCollectionItemSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.UploadCollectionItem with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, UploadCollectionItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.UploadCollectionItem.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
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
     * Attaches event handler `fnFunction` to the {@link #event:fileNameClick fileNameClick} event of this `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollectionItem` itself.
     *
     * Fired when the file name is clicked.
     *
     *  **Note:** This event is only available when `fileNameClickable` property is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFileNameClick(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollectionItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:fileNameClick fileNameClick} event of this `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollectionItem` itself.
     *
     * Fired when the file name is clicked.
     *
     *  **Note:** This event is only available when `fileNameClickable` property is `true`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFileNameClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollectionItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:rename rename} event of this `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollectionItem` itself.
     *
     * Fired when the `fileName` property gets changed.
     *
     *  **Note:** An edit button is displayed on each item, when the `sap.ui.webc.fiori.UploadCollectionItem`
     * `type` property is set to `Detail`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRename(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollectionItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:rename rename} event of this `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollectionItem` itself.
     *
     * Fired when the `fileName` property gets changed.
     *
     *  **Note:** An edit button is displayed on each item, when the `sap.ui.webc.fiori.UploadCollectionItem`
     * `type` property is set to `Detail`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRename(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollectionItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:retry retry} event of this `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollectionItem` itself.
     *
     * Fired when the retry button is pressed.
     *
     *  **Note:** Retry button is displayed when `uploadState` property is set to `Error`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRetry(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollectionItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:retry retry} event of this `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollectionItem` itself.
     *
     * Fired when the retry button is pressed.
     *
     *  **Note:** Retry button is displayed when `uploadState` property is set to `Error`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRetry(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollectionItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:terminate terminate} event of this `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollectionItem` itself.
     *
     * Fired when the terminate button is pressed.
     *
     *  **Note:** Terminate button is displayed when `uploadState` property is set to `Uploading`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachTerminate(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollectionItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:terminate terminate} event of this `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.UploadCollectionItem` itself.
     *
     * Fired when the terminate button is pressed.
     *
     *  **Note:** Terminate button is displayed when `uploadState` property is set to `Uploading`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachTerminate(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.UploadCollectionItem`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;
    /**
     * Destroys the thumbnail in the aggregation {@link #getThumbnail thumbnail}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyThumbnail(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:fileNameClick fileNameClick} event of this
     * `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachFileNameClick(
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
     * Detaches event handler `fnFunction` from the {@link #event:rename rename} event of this `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachRename(
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
     * Detaches event handler `fnFunction` from the {@link #event:retry retry} event of this `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachRetry(
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
     * Detaches event handler `fnFunction` from the {@link #event:terminate terminate} event of this `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachTerminate(
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
     * Fires event {@link #event:fileNameClick fileNameClick} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireFileNameClick(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:rename rename} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireRename(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:retry retry} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireRetry(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:terminate terminate} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireTerminate(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Hold the description of the `sap.ui.webc.fiori.UploadCollectionItem`. Will be shown below the file name.
     */
    getContent(): Control[];
    /**
     * Gets current value of property {@link #getDisableDeleteButton disableDeleteButton}.
     *
     * Disables the delete button.
     *
     * Default value is `false`.
     *
     * @returns Value of property `disableDeleteButton`
     */
    getDisableDeleteButton(): boolean;
    /**
     * Gets current value of property {@link #getFile file}.
     *
     * Holds an instance of `File` associated with this item.
     *
     * @returns Value of property `file`
     */
    getFile(): object;
    /**
     * Gets current value of property {@link #getFileName fileName}.
     *
     * The name of the file.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `fileName`
     */
    getFileName(): string;
    /**
     * Gets current value of property {@link #getFileNameClickable fileNameClickable}.
     *
     * If set to `true` the file name will be clickable and it will fire `file-name-click` event upon click.
     *
     * Default value is `false`.
     *
     * @returns Value of property `fileNameClickable`
     */
    getFileNameClickable(): boolean;
    /**
     * Gets current value of property {@link #getHideRetryButton hideRetryButton}.
     *
     * Hides the retry button when `uploadState` property is `Error`.
     *
     * Default value is `false`.
     *
     * @returns Value of property `hideRetryButton`
     */
    getHideRetryButton(): boolean;
    /**
     * Gets current value of property {@link #getHideTerminateButton hideTerminateButton}.
     *
     * Hides the terminate button when `uploadState` property is `Uploading`.
     *
     * Default value is `false`.
     *
     * @returns Value of property `hideTerminateButton`
     */
    getHideTerminateButton(): boolean;
    /**
     * Gets current value of property {@link #getProgress progress}.
     *
     * The upload progress in percentage.
     *
     *  **Note:** Expected values are in the interval [0, 100].
     *
     * Default value is `0`.
     *
     * @returns Value of property `progress`
     */
    getProgress(): int;
    /**
     * Gets content of aggregation {@link #getThumbnail thumbnail}.
     *
     * A thumbnail, which will be shown in the beginning of the `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     *  **Note:** Use `sap.ui.webc.main.Icon` or `img` for the intended design.
     */
    getThumbnail(): Control;
    /**
     * Gets current value of property {@link #getUploadState uploadState}.
     *
     * If set to `Uploading` or `Error`, a progress indicator showing the `progress` is displayed. Also if set
     * to `Error`, a refresh button is shown. When this icon is pressed `retry` event is fired. If set to `Uploading`,
     * a terminate button is shown. When this icon is pressed `terminate` event is fired.
     *
     * Default value is `Ready`.
     *
     * @returns Value of property `uploadState`
     */
    getUploadState(): UploadState | keyof typeof UploadState;
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
     * Sets a new value for property {@link #getDisableDeleteButton disableDeleteButton}.
     *
     * Disables the delete button.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDisableDeleteButton(
      /**
       * New value for property `disableDeleteButton`
       */
      bDisableDeleteButton?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getFile file}.
     *
     * Holds an instance of `File` associated with this item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFile(
      /**
       * New value for property `file`
       */
      oFile?: object
    ): this;
    /**
     * Sets a new value for property {@link #getFileName fileName}.
     *
     * The name of the file.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFileName(
      /**
       * New value for property `fileName`
       */
      sFileName?: string
    ): this;
    /**
     * Sets a new value for property {@link #getFileNameClickable fileNameClickable}.
     *
     * If set to `true` the file name will be clickable and it will fire `file-name-click` event upon click.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFileNameClickable(
      /**
       * New value for property `fileNameClickable`
       */
      bFileNameClickable?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getHideRetryButton hideRetryButton}.
     *
     * Hides the retry button when `uploadState` property is `Error`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHideRetryButton(
      /**
       * New value for property `hideRetryButton`
       */
      bHideRetryButton?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getHideTerminateButton hideTerminateButton}.
     *
     * Hides the terminate button when `uploadState` property is `Uploading`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHideTerminateButton(
      /**
       * New value for property `hideTerminateButton`
       */
      bHideTerminateButton?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getProgress progress}.
     *
     * The upload progress in percentage.
     *
     *  **Note:** Expected values are in the interval [0, 100].
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setProgress(
      /**
       * New value for property `progress`
       */
      iProgress?: int
    ): this;
    /**
     * Sets the aggregated {@link #getThumbnail thumbnail}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setThumbnail(
      /**
       * The thumbnail to set
       */
      oThumbnail: Control
    ): this;
    /**
     * Sets a new value for property {@link #getUploadState uploadState}.
     *
     * If set to `Uploading` or `Error`, a progress indicator showing the `progress` is displayed. Also if set
     * to `Error`, a refresh button is shown. When this icon is pressed `retry` event is fired. If set to `Uploading`,
     * a terminate button is shown. When this icon is pressed `terminate` event is fired.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Ready`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setUploadState(
      /**
       * New value for property `uploadState`
       */
      sUploadState?: UploadState | keyof typeof UploadState
    ): this;
  }

  export interface $UploadCollectionItemSettings extends $WebComponentSettings {
    /**
     * Disables the delete button.
     */
    disableDeleteButton?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Holds an instance of `File` associated with this item.
     */
    file?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * The name of the file.
     */
    fileName?: string | PropertyBindingInfo;

    /**
     * If set to `true` the file name will be clickable and it will fire `file-name-click` event upon click.
     */
    fileNameClickable?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Hides the retry button when `uploadState` property is `Error`.
     */
    hideRetryButton?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Hides the terminate button when `uploadState` property is `Uploading`.
     */
    hideTerminateButton?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The upload progress in percentage.
     *
     *  **Note:** Expected values are in the interval [0, 100].
     */
    progress?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * If set to `Uploading` or `Error`, a progress indicator showing the `progress` is displayed. Also if set
     * to `Error`, a refresh button is shown. When this icon is pressed `retry` event is fired. If set to `Uploading`,
     * a terminate button is shown. When this icon is pressed `terminate` event is fired.
     */
    uploadState?:
      | (UploadState | keyof typeof UploadState)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Hold the description of the `sap.ui.webc.fiori.UploadCollectionItem`. Will be shown below the file name.
     */
    content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * A thumbnail, which will be shown in the beginning of the `sap.ui.webc.fiori.UploadCollectionItem`.
     *
     *  **Note:** Use `sap.ui.webc.main.Icon` or `img` for the intended design.
     */
    thumbnail?: Control;

    /**
     * Fired when the file name is clicked.
     *
     *  **Note:** This event is only available when `fileNameClickable` property is `true`.
     */
    fileNameClick?: (oEvent: Event) => void;

    /**
     * Fired when the `fileName` property gets changed.
     *
     *  **Note:** An edit button is displayed on each item, when the `sap.ui.webc.fiori.UploadCollectionItem`
     * `type` property is set to `Detail`.
     */
    rename?: (oEvent: Event) => void;

    /**
     * Fired when the retry button is pressed.
     *
     *  **Note:** Retry button is displayed when `uploadState` property is set to `Error`.
     */
    retry?: (oEvent: Event) => void;

    /**
     * Fired when the terminate button is pressed.
     *
     *  **Note:** Terminate button is displayed when `uploadState` property is set to `Uploading`.
     */
    terminate?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/webc/fiori/ViewSettingsDialog" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { IFilterItem, ISortItem } from "sap/ui/webc/fiori/library";

  import Event from "sap/ui/base/Event";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.95.0
   * @EXPERIMENTAL (since 1.95.0)
   *
   * Overview: The `sap.ui.webc.fiori.ViewSettingsDialog` component helps the user to sort data within a list
   * or a table. It consists of several lists like `Sort order` which is built-in and `Sort By` and `Filter
   * By` lists, for which you must be provide items(`sap.ui.webc.fiori.SortItem` & `sap.ui.webc.fiori.FilterItem`
   * respectively) These options can be used to create sorters for a table.
   *
   * The `sap.ui.webc.fiori.ViewSettingsDialog` interrupts the current application processing as it is the
   * only focused UI element and the main screen is dimmed/blocked. The `sap.ui.webc.fiori.ViewSettingsDialog`
   * is modal, which means that user action is required before returning to the parent window is possible.
   *
   * Structure: A `sap.ui.webc.fiori.ViewSettingsDialog` consists of a header, content, and a footer for action
   * buttons. The `sap.ui.webc.fiori.ViewSettingsDialog` is usually displayed at the center of the screen.
   *
   * Responsive Behavior: `sap.ui.webc.fiori.ViewSettingsDialog` stretches on full screen on phones.
   */
  export default class ViewSettingsDialog extends WebComponent {
    /**
     * Constructor for a new `ViewSettingsDialog`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ViewSettingsDialogSettings
    );
    /**
     * Constructor for a new `ViewSettingsDialog`.
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
      mSettings?: $ViewSettingsDialogSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.ViewSettingsDialog with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ViewSettingsDialog>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.ViewSettingsDialog.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Adds some filterItem to the aggregation {@link #getFilterItems filterItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addFilterItem(
      /**
       * The filterItem to add; if empty, nothing is inserted
       */
      oFilterItem: IFilterItem
    ): this;
    /**
     * Adds some sortItem to the aggregation {@link #getSortItems sortItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addSortItem(
      /**
       * The sortItem to add; if empty, nothing is inserted
       */
      oSortItem: ISortItem
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.ui.webc.fiori.ViewSettingsDialog`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ViewSettingsDialog` itself.
     *
     * Fired before the component is opened. **This event does not bubble.**
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeforeOpen(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ViewSettingsDialog`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.ui.webc.fiori.ViewSettingsDialog`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ViewSettingsDialog` itself.
     *
     * Fired before the component is opened. **This event does not bubble.**
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeforeOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ViewSettingsDialog`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ui.webc.fiori.ViewSettingsDialog`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ViewSettingsDialog` itself.
     *
     * Fired when cancel button is activated.
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ViewSettingsDialog`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ui.webc.fiori.ViewSettingsDialog`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ViewSettingsDialog` itself.
     *
     * Fired when cancel button is activated.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCancel(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ViewSettingsDialog`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:confirm confirm} event of this `sap.ui.webc.fiori.ViewSettingsDialog`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ViewSettingsDialog` itself.
     *
     * Fired when confirmation button is activated.
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
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ViewSettingsDialog`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:confirm confirm} event of this `sap.ui.webc.fiori.ViewSettingsDialog`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.ViewSettingsDialog` itself.
     *
     * Fired when confirmation button is activated.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachConfirm(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.ViewSettingsDialog`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the filterItems in the aggregation {@link #getFilterItems filterItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFilterItems(): this;
    /**
     * Destroys all the sortItems in the aggregation {@link #getSortItems sortItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySortItems(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:beforeOpen beforeOpen} event of this `sap.ui.webc.fiori.ViewSettingsDialog`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachBeforeOpen(
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
     * Detaches event handler `fnFunction` from the {@link #event:cancel cancel} event of this `sap.ui.webc.fiori.ViewSettingsDialog`.
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
     * Detaches event handler `fnFunction` from the {@link #event:confirm confirm} event of this `sap.ui.webc.fiori.ViewSettingsDialog`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachConfirm(
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
     * Fires event {@link #event:beforeOpen beforeOpen} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireBeforeOpen(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:cancel cancel} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireCancel(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The current sort order selected.
         */
        sortOrder?: string;
        /**
         * The currently selected `sap.ui.webc.fiori.SortItem` text attribute.
         */
        sortBy?: string;
        /**
         * The currently selected `sap.ui.webc.fiori.SortItem`.
         */
        sortByItem?: HTMLElement;
        /**
         * The selected sort order (true = descending, false = ascending).
         */
        sortDescending?: boolean;
        /**
         * The selected filters items.
         */
        filterItems?: any[];
      }
    ): this;
    /**
     * Fires event {@link #event:confirm confirm} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireConfirm(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The current sort order selected.
         */
        sortOrder?: string;
        /**
         * The currently selected `sap.ui.webc.fiori.SortItem` text attribute.
         */
        sortBy?: string;
        /**
         * The currently selected `sap.ui.webc.fiori.SortItem`.
         */
        sortByItem?: HTMLElement;
        /**
         * The selected sort order (true = descending, false = ascending).
         */
        sortDescending?: boolean;
        /**
         * The selected filters items.
         */
        filterItems?: any[];
      }
    ): this;
    /**
     * Gets content of aggregation {@link #getFilterItems filterItems}.
     */
    getFilterItems(): IFilterItem[];
    /**
     * Gets current value of property {@link #getSortDescending sortDescending}.
     *
     * Defines the initial sort order.
     *
     * Default value is `false`.
     *
     * @returns Value of property `sortDescending`
     */
    getSortDescending(): boolean;
    /**
     * Gets content of aggregation {@link #getSortItems sortItems}.
     */
    getSortItems(): ISortItem[];
    /**
     * Checks for the provided `sap.ui.webc.fiori.IFilterItem` in the aggregation {@link #getFilterItems filterItems}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfFilterItem(
      /**
       * The filterItem whose index is looked for
       */
      oFilterItem: IFilterItem
    ): int;
    /**
     * Checks for the provided `sap.ui.webc.fiori.ISortItem` in the aggregation {@link #getSortItems sortItems}.
     * and returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfSortItem(
      /**
       * The sortItem whose index is looked for
       */
      oSortItem: ISortItem
    ): int;
    /**
     * Inserts a filterItem into the aggregation {@link #getFilterItems filterItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertFilterItem(
      /**
       * The filterItem to insert; if empty, nothing is inserted
       */
      oFilterItem: IFilterItem,
      /**
       * The `0`-based index the filterItem should be inserted at; for a negative value of `iIndex`, the filterItem
       * is inserted at position 0; for a value greater than the current size of the aggregation, the filterItem
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a sortItem into the aggregation {@link #getSortItems sortItems}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertSortItem(
      /**
       * The sortItem to insert; if empty, nothing is inserted
       */
      oSortItem: ISortItem,
      /**
       * The `0`-based index the sortItem should be inserted at; for a negative value of `iIndex`, the sortItem
       * is inserted at position 0; for a value greater than the current size of the aggregation, the sortItem
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
    removeAllFilterItems(): IFilterItem[];
    /**
     * Removes all the controls from the aggregation {@link #getSortItems sortItems}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllSortItems(): ISortItem[];
    /**
     * Removes a filterItem from the aggregation {@link #getFilterItems filterItems}.
     *
     * @returns The removed filterItem or `null`
     */
    removeFilterItem(
      /**
       * The filterItem to remove or its index or id
       */
      vFilterItem: int | string | IFilterItem
    ): IFilterItem | null;
    /**
     * Removes a sortItem from the aggregation {@link #getSortItems sortItems}.
     *
     * @returns The removed sortItem or `null`
     */
    removeSortItem(
      /**
       * The sortItem to remove or its index or id
       */
      vSortItem: int | string | ISortItem
    ): ISortItem | null;
    /**
     * Sets a JavaScript object, as settings to the `sap.ui.webc.fiori.ViewSettingsDialog`. This method can
     * be used after the dialog is initially open, as the dialog need to set its initial settings. The `sap.ui.webc.fiori.ViewSettingsDialog`
     * throws an event called "before-open", this can be used as trigger point. The object should have the following
     * format: `{ { "sortOrder" : "Ascending", "sortBy" : "Name", "filters" : [{"Filter 1": ["Some filter 1",
     * "Some filter 2"]}, {"Filter 2": ["Some filter 4"]}]} }`
     */
    setConfirmedSettings(
      /**
       * A value to be set as predefined settings.
       */
      settings: string
    ): void;
    /**
     * Sets a new value for property {@link #getSortDescending sortDescending}.
     *
     * Defines the initial sort order.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSortDescending(
      /**
       * New value for property `sortDescending`
       */
      bSortDescending?: boolean
    ): this;
    /**
     * Shows the dialog.
     */
    show(): void;
  }

  export interface $ViewSettingsDialogSettings extends $WebComponentSettings {
    /**
     * Defines the initial sort order.
     */
    sortDescending?: boolean | PropertyBindingInfo | `{${string}}`;

    filterItems?:
      | IFilterItem[]
      | IFilterItem
      | AggregationBindingInfo
      | `{${string}}`;

    sortItems?:
      | ISortItem[]
      | ISortItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Fired before the component is opened. **This event does not bubble.**
     */
    beforeOpen?: (oEvent: Event) => void;

    /**
     * Fired when cancel button is activated.
     */
    cancel?: (oEvent: Event) => void;

    /**
     * Fired when confirmation button is activated.
     */
    confirm?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/webc/fiori/Wizard" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { IWizardStep } from "sap/ui/webc/fiori/library";

  import Event from "sap/ui/base/Event";

  import { CSSSize } from "sap/ui/core/library";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview:
   *
   * The `sap.ui.webc.fiori.Wizard` helps users to complete a complex task by dividing it into sections and
   * guiding them through it. It has two main areas - a navigation area at the top showing the step sequence
   * and a content area below it.
   *
   * Structure: Navigation area: The top most area of the `sap.ui.webc.fiori.Wizard` is occupied by the navigation
   * area. It shows the sequence of steps, where the recommended number of steps is between 3 and 8 steps.
   *
   * 	 -  Steps can have different visual representations - numbers or icons.  Steps might have labels
   * 			for better readability - titleText and subTitleText.
   * 	 -  Steps are defined by using the `sap.ui.webc.fiori.WizardStep` as slotted element within the `sap.ui.webc.fiori.Wizard`.
   *
   *
   * **Note:** If no selected step is defined, the first step will be auto selected.
   *  **Note:** If multiple selected steps are defined, the last step will be selected.
   *
   * Keyboard Handling: The user can navigate using the following keyboard shortcuts:
   *
   *
   * Wizard Progress Navigation:
   * 	 - [LEFT], [DOWN] - Focus moves backward to the WizardProgressNavAnchors.
   * 	 - [UP], [RIGHT] - Focus moves forward to the WizardProgressNavAnchor.
   * 	 - [SPACE] or [ENTER], [RETURN] - Selects an active step
   * 	 - [HOME] or [PAGE UP] - Focus goes to the first step
   * 	 - [END] or [PAGE DOWN] - Focus goes to the last step
   *
   * Content: The content occupies the main part of the page. It can hold any type of HTML elements. It's
   * defined by using the `sap.ui.webc.fiori.WizardStep` as slotted element within the `sap.ui.webc.fiori.Wizard`.
   *
   * Scrolling: The component handles user scrolling by selecting the closest step, based on the current scroll
   * position and scrolls to particular place, when the user clicks on the step within the navigation area.
   *
   *
   *
   *
   * **Important:** In order the component's scrolling behaviour to work, it has to be limited from the outside
   * parent element in terms of height. The component or its parent has to be given percentage or absolute
   * height. Otherwise, the component will be scrolled out with the entire page.
   *
   *  **For example:**
   *
   *  `<ui5-dialog style="height: 80%">
   *  ` `	<ui5-wizard></ui5-wizard>
   *  ` `</ui5-dialog>`
   *
   * Moving to next step: The `sap.ui.webc.fiori.WizardStep` provides the necessary API and it's up to the
   * user of the component to use it to move to the next step. You have to set its `selected` property (and
   * remove the `disabled` one if set) to `true`. The `sap.ui.webc.fiori.Wizard` will automatically scroll
   * to the content of the newly selected step.
   *
   *
   *
   * The Fiori 3 guidelines recommends having a "nextStep" button in the content area. You can place a button,
   * or any other type of element to trigger step change, inside the `sap.ui.webc.fiori.WizardStep`, and show/hide
   * it when certain fields are filled or user defined criteria is met.
   *
   * Usage: When to use:: When the user has to accomplish a long or unfamiliar task.
   *
   * When not to use:: When the task has less than 3 steps.
   *
   * Responsive Behavior: On small widths the step's titleText, subtitleText and separators in the navigation
   * area shrink and from particular point the steps are grouped together and overlap. Tapping on them will
   * show a popover to select the step to navigate to. On mobile device, the grouped steps are presented within
   * a dialog.
   */
  export default class Wizard extends WebComponent {
    /**
     * Constructor for a new `Wizard`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $WizardSettings
    );
    /**
     * Constructor for a new `Wizard`.
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
      mSettings?: $WizardSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.Wizard with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Wizard>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.Wizard.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
    /**
     * Adds some step to the aggregation {@link #getSteps steps}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addStep(
      /**
       * The step to add; if empty, nothing is inserted
       */
      oStep: IWizardStep
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:stepChange stepChange} event of this `sap.ui.webc.fiori.Wizard`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.Wizard` itself.
     *
     * Fired when the step is changed by user interaction - either with scrolling, or by clicking on the steps
     * within the component header.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachStepChange(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.Wizard` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:stepChange stepChange} event of this `sap.ui.webc.fiori.Wizard`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.webc.fiori.Wizard` itself.
     *
     * Fired when the step is changed by user interaction - either with scrolling, or by clicking on the steps
     * within the component header.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachStepChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.webc.fiori.Wizard` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the steps in the aggregation {@link #getSteps steps}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySteps(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:stepChange stepChange} event of this `sap.ui.webc.fiori.Wizard`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachStepChange(
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
     * Fires event {@link #event:stepChange stepChange} to attached listeners.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireStepChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The new step.
         */
        step?: HTMLElement;
        /**
         * The previous step.
         */
        previousStep?: HTMLElement;
        /**
         * The step change occurs due to user's click or 'Enter'/'Space' key press on step within the navigation.
         */
        changeWithClick?: boolean;
      }
    ): this;
    /**
     * Gets current value of property {@link #getHeight height}.
     *
     * Defines the height of the control
     *
     * @returns Value of property `height`
     */
    getHeight(): CSSSize;
    /**
     * Gets content of aggregation {@link #getSteps steps}.
     *
     * Defines the steps.
     *
     *  **Note:** Use the available `sap.ui.webc.fiori.WizardStep` component.
     */
    getSteps(): IWizardStep[];
    /**
     * Checks for the provided `sap.ui.webc.fiori.IWizardStep` in the aggregation {@link #getSteps steps}. and
     * returns its index if found or -1 otherwise.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfStep(
      /**
       * The step whose index is looked for
       */
      oStep: IWizardStep
    ): int;
    /**
     * Inserts a step into the aggregation {@link #getSteps steps}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    insertStep(
      /**
       * The step to insert; if empty, nothing is inserted
       */
      oStep: IWizardStep,
      /**
       * The `0`-based index the step should be inserted at; for a negative value of `iIndex`, the step is inserted
       * at position 0; for a value greater than the current size of the aggregation, the step is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getSteps steps}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllSteps(): IWizardStep[];
    /**
     * Removes a step from the aggregation {@link #getSteps steps}.
     *
     * @returns The removed step or `null`
     */
    removeStep(
      /**
       * The step to remove or its index or id
       */
      vStep: int | string | IWizardStep
    ): IWizardStep | null;
    /**
     * Sets a new value for property {@link #getHeight height}.
     *
     * Defines the height of the control
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeight(
      /**
       * New value for property `height`
       */
      sHeight: CSSSize
    ): this;
  }

  export interface $WizardSettings extends $WebComponentSettings {
    /**
     * Defines the height of the control
     */
    height?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the steps.
     *
     *  **Note:** Use the available `sap.ui.webc.fiori.WizardStep` component.
     */
    steps?:
      | IWizardStep[]
      | IWizardStep
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Fired when the step is changed by user interaction - either with scrolling, or by clicking on the steps
     * within the component header.
     */
    stepChange?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/webc/fiori/WizardStep" {
  import {
    default as WebComponent,
    $WebComponentSettings,
  } from "sap/ui/webc/common/WebComponent";

  import { IWizardStep } from "sap/ui/webc/fiori/library";

  import Control from "sap/ui/core/Control";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0)
   *
   * Overview:
   *
   * A component that represents a logical step as part of the `sap.ui.webc.fiori.Wizard`. It is meant to
   * aggregate arbitrary HTML elements that form the content of a single step.
   *
   * Structure:
   * 	 - Each wizard step has arbitrary content.
   * 	 - Each wizard step might have texts - defined by the `titleText` and `subtitleText` properties.
   * 	 - Each wizard step might have an icon - defined by the `icon` property.
   * 	 - Each wizard step might display a number in place of the `icon`, when it's missing.
   *
   * Usage: The `sap.ui.webc.fiori.WizardStep` component should be used only as slot of the `sap.ui.webc.fiori.Wizard`
   * component and should not be used standalone.
   */
  export default class WizardStep extends WebComponent implements IWizardStep {
    __implements__sap_ui_webc_fiori_IWizardStep: boolean;
    /**
     * Constructor for a new `WizardStep`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $WizardStepSettings
    );
    /**
     * Constructor for a new `WizardStep`.
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
      mSettings?: $WizardStepSettings
    );

    /**
     * Creates a new subclass of class sap.ui.webc.fiori.WizardStep with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.webc.common.WebComponent.extend}.
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
      oClassInfo?: sap.ClassInfo<T, WizardStep>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.fiori.WizardStep.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
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
     * Gets current value of property {@link #getBranching branching}.
     *
     * When `branching` is enabled a dashed line would be displayed after the step, meant to indicate that the
     * next step is not yet known and depends on user choice in the current step.
     *
     *
     *
     * **Note:** It is recommended to use `branching` on the last known step and later add new steps when it
     * becomes clear how the wizard flow should continue.
     *
     * Default value is `false`.
     *
     * @returns Value of property `branching`
     */
    getBranching(): boolean;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * Defines the step content.
     */
    getContent(): Control[];
    /**
     * Gets current value of property {@link #getEnabled enabled}.
     *
     * Defines whether the control is enabled. A disabled control can't be interacted with, and it is not in
     * the tab chain.
     *
     * Default value is `true`.
     *
     * @returns Value of property `enabled`
     */
    getEnabled(): boolean;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Defines the `icon` of the step.
     *
     *
     *
     * **Note:** The icon is displayed in the `sap.ui.webc.fiori.Wizard` navigation header.
     *
     *
     *
     * The SAP-icons font provides numerous options. See all the available icons in the {@link demo:sap/m/demokit/iconExplorer/webapp/index.html
     * Icon Explorer}.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `icon`
     */
    getIcon(): string;
    /**
     * Gets current value of property {@link #getSelected selected}.
     *
     * Defines the step's `selected` state - the step that is currently active.
     *
     *
     *
     * **Note:** Step can't be `selected` and `disabled` at the same time. In this case the `selected` property
     * would take precedence.
     *
     * Default value is `false`.
     *
     * @returns Value of property `selected`
     */
    getSelected(): boolean;
    /**
     * Gets current value of property {@link #getSubtitleText subtitleText}.
     *
     * Defines the `subtitleText` of the step.
     *
     *
     *
     * **Note:** the text is displayed in the `sap.ui.webc.fiori.Wizard` navigation header.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `subtitleText`
     */
    getSubtitleText(): string;
    /**
     * Gets current value of property {@link #getTitleText titleText}.
     *
     * Defines the `titleText` of the step.
     *
     *
     *
     * **Note:** The text is displayed in the `sap.ui.webc.fiori.Wizard` navigation header.
     *
     * Default value is `empty string`.
     *
     * @returns Value of property `titleText`
     */
    getTitleText(): string;
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
     * Sets a new value for property {@link #getBranching branching}.
     *
     * When `branching` is enabled a dashed line would be displayed after the step, meant to indicate that the
     * next step is not yet known and depends on user choice in the current step.
     *
     *
     *
     * **Note:** It is recommended to use `branching` on the last known step and later add new steps when it
     * becomes clear how the wizard flow should continue.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setBranching(
      /**
       * New value for property `branching`
       */
      bBranching?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     *
     * Defines whether the control is enabled. A disabled control can't be interacted with, and it is not in
     * the tab chain.
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
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Defines the `icon` of the step.
     *
     *
     *
     * **Note:** The icon is displayed in the `sap.ui.webc.fiori.Wizard` navigation header.
     *
     *
     *
     * The SAP-icons font provides numerous options. See all the available icons in the {@link demo:sap/m/demokit/iconExplorer/webapp/index.html
     * Icon Explorer}.
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
      sIcon?: string
    ): this;
    /**
     * Sets a new value for property {@link #getSelected selected}.
     *
     * Defines the step's `selected` state - the step that is currently active.
     *
     *
     *
     * **Note:** Step can't be `selected` and `disabled` at the same time. In this case the `selected` property
     * would take precedence.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
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
     * Sets a new value for property {@link #getSubtitleText subtitleText}.
     *
     * Defines the `subtitleText` of the step.
     *
     *
     *
     * **Note:** the text is displayed in the `sap.ui.webc.fiori.Wizard` navigation header.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSubtitleText(
      /**
       * New value for property `subtitleText`
       */
      sSubtitleText?: string
    ): this;
    /**
     * Sets a new value for property {@link #getTitleText titleText}.
     *
     * Defines the `titleText` of the step.
     *
     *
     *
     * **Note:** The text is displayed in the `sap.ui.webc.fiori.Wizard` navigation header.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitleText(
      /**
       * New value for property `titleText`
       */
      sTitleText?: string
    ): this;
  }

  export interface $WizardStepSettings extends $WebComponentSettings {
    /**
     * When `branching` is enabled a dashed line would be displayed after the step, meant to indicate that the
     * next step is not yet known and depends on user choice in the current step.
     *
     *
     *
     * **Note:** It is recommended to use `branching` on the last known step and later add new steps when it
     * becomes clear how the wizard flow should continue.
     */
    branching?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the control is enabled. A disabled control can't be interacted with, and it is not in
     * the tab chain.
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the `icon` of the step.
     *
     *
     *
     * **Note:** The icon is displayed in the `sap.ui.webc.fiori.Wizard` navigation header.
     *
     *
     *
     * The SAP-icons font provides numerous options. See all the available icons in the {@link demo:sap/m/demokit/iconExplorer/webapp/index.html
     * Icon Explorer}.
     */
    icon?: string | PropertyBindingInfo;

    /**
     * Defines the step's `selected` state - the step that is currently active.
     *
     *
     *
     * **Note:** Step can't be `selected` and `disabled` at the same time. In this case the `selected` property
     * would take precedence.
     */
    selected?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the `subtitleText` of the step.
     *
     *
     *
     * **Note:** the text is displayed in the `sap.ui.webc.fiori.Wizard` navigation header.
     */
    subtitleText?: string | PropertyBindingInfo;

    /**
     * Defines the `titleText` of the step.
     *
     *
     *
     * **Note:** The text is displayed in the `sap.ui.webc.fiori.Wizard` navigation header.
     */
    titleText?: string | PropertyBindingInfo;

    /**
     * Defines the step content.
     */
    content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;
  }
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/ui/webc/fiori/Bar": undefined;

    "sap/ui/webc/fiori/BarcodeScannerDialog": undefined;

    "sap/ui/webc/fiori/DynamicSideContent": undefined;

    "sap/ui/webc/fiori/FilterItem": undefined;

    "sap/ui/webc/fiori/FilterItemOption": undefined;

    "sap/ui/webc/fiori/FlexibleColumnLayout": undefined;

    "sap/ui/webc/fiori/IllustratedMessage": undefined;

    "sap/ui/webc/fiori/library": undefined;

    "sap/ui/webc/fiori/MediaGallery": undefined;

    "sap/ui/webc/fiori/MediaGalleryItem": undefined;

    "sap/ui/webc/fiori/NotificationAction": undefined;

    "sap/ui/webc/fiori/NotificationListGroupItem": undefined;

    "sap/ui/webc/fiori/NotificationListItem": undefined;

    "sap/ui/webc/fiori/Page": undefined;

    "sap/ui/webc/fiori/ProductSwitch": undefined;

    "sap/ui/webc/fiori/ProductSwitchItem": undefined;

    "sap/ui/webc/fiori/ShellBar": undefined;

    "sap/ui/webc/fiori/ShellBarItem": undefined;

    "sap/ui/webc/fiori/SideNavigation": undefined;

    "sap/ui/webc/fiori/SideNavigationItem": undefined;

    "sap/ui/webc/fiori/SideNavigationSubItem": undefined;

    "sap/ui/webc/fiori/SortItem": undefined;

    "sap/ui/webc/fiori/Timeline": undefined;

    "sap/ui/webc/fiori/TimelineItem": undefined;

    "sap/ui/webc/fiori/UploadCollection": undefined;

    "sap/ui/webc/fiori/UploadCollectionItem": undefined;

    "sap/ui/webc/fiori/ViewSettingsDialog": undefined;

    "sap/ui/webc/fiori/Wizard": undefined;

    "sap/ui/webc/fiori/WizardStep": undefined;
  }
}
