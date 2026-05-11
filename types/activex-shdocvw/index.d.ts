/// <reference types="activex-interop" />

declare namespace SHDocVw {
    // eslint-disable-next-line @definitelytyped/no-const-enum
    const enum BrowserBarConstants {
        AddressBar = 0x0009,
        Tools = 0x000A,
        Links = 0x000B,
        Search = "{30D02401-6A81-11D0-8274-00C04FD5AE38}",
        Favorites = "{EFA24E61-B078-11D0-89E4-00C04FC9E26E}",
        History = "{EFA24E62-B078-11D0-89E4-00C04FC9E26E}",
        Channels = "{EFA24E63-B078-11D0-89E4-00C04FC9E26E}",
    }

    // eslint-disable-next-line @definitelytyped/no-const-enum
    const enum BrowserNavConstants {
        /** Open the resource or file in a new window. */
        OpenInNewWindow = 1,

        /** Do not add the resource or file to the history list. The new page replaces the current page in the list. */
        NoHistory = 2,

        /** If the navigation fails, the autosearch functionality attempts to navigate common root domains (.com, .edu, and so on). If this also fails, the URL is passed to a search engine. */
        AllowAutosearch = 16,

        /** Causes the current Explorer Bar to navigate to the given item, if possible.  */
        BrowserBar = 32,

        /**
         * Internet Explorer 6 for Windows XP SP2 and later. If the navigation fails when a hyperlink is being followed, this constant specifies that the resource should then be bound to the
         * moniker using the [**BINDF_HYPERLINK**](https://msdn.microsoft.com/en-us/library/ms775130(v=vs.85).aspx) flag.
         */
        Hyperlink = 64,

        /** Internet Explorer 6 for Windows XP SP2 and later. Force the URL into the restricted zone. */
        EnforceRestricted = 128,

        /** Internet Explorer 6 for Windows XP SP2 and later. Use the default Popup Manager to block pop-up windows.  */
        NewWindowsManaged = 256,

        /** Internet Explorer 6 for Windows XP SP2 and later. Block files that normally trigger a file download dialog box.  */
        UntrustedForDownload = 512,

        /** Internet Explorer 6 for Windows XP SP2 and later. Prompt for the installation of ActiveX controls.   */
        TrustedForActiveX = 1024,

        /** Internet Explorer 7. Open the resource or file in a new tab. Allow the destination window to come to the foreground, if necessary.  */
        OpenInNewTab = 2048,

        /** Internet Explorer 7. Open the resource or file in a new background tab; the currently active window and/or tab remains open on top.  */
        OpenInBackgroundTab = 4096,

        /**
         * Internet Explorer 7. Maintain state for dynamic navigation based on the filter string entered in the search band text box (wordwheel). Restore the wordwheel text when the navigation
         * completes.
         */
        KeepWordWheelText = 8192,

        /**
         * Internet Explorer 8. Open the resource as a replacement for the current or target tab. The existing tab is closed while the new tab takes its place in the tab bar and replaces it in the
         * tab group, if any. Browser history is copied forward to the new tab. On Windows Vista, this flag is implied if the navigation would cross integrity levels and **navOpenInNewTab**,
         * **navOpenInBackgroundTab**, or **navOpenInNewWindow**> is not specified.
         */
        VirtualTab = 16384,

        /**
         * Internet Explorer 8. Block cross-domain redirect requests. The navigation triggers the
         * [**DWebBrowserEvents2::RedirectXDomainBlocked**](https://msdn.microsoft.com/en-us/library/dd565686(v=vs.85).aspx) event if blocked.
         */
        BlockRedirectsXDomain = 32768,

        /** Internet Explorer 8 and later. Open the resource in a new tab that becomes the foreground tab. */
        OpenNewForegroundTab = 65536,
    }

    /** Constants for WebBrowser CommandStateChange */
    // eslint-disable-next-line @definitelytyped/no-const-enum
    const enum CommandStateChangeConstants {
        CSC_NAVIGATEBACK = 2,
        CSC_NAVIGATEFORWARD = 1,
        CSC_UPDATECOMMANDS = -1,
    }

    /** Constants for WebBrowser NewProcess notification */
    // eslint-disable-next-line @definitelytyped/no-const-enum
    const enum NewProcessCauseConstants {
        ProtectedModeRedirect = 1,
    }

    // eslint-disable-next-line @definitelytyped/no-const-enum
    const enum OLECMDEXECOPT {
        OLECMDEXECOPT_DODEFAULT = 0,
        OLECMDEXECOPT_DONTPROMPTUSER = 2,
        OLECMDEXECOPT_PROMPTUSER = 1,
        OLECMDEXECOPT_SHOWHELP = 3,
    }

    // eslint-disable-next-line @definitelytyped/no-const-enum
    const enum OLECMDF {
        OLECMDF_DEFHIDEONCTXTMENU = 32,
        OLECMDF_ENABLED = 2,
        OLECMDF_INVISIBLE = 16,
        OLECMDF_LATCHED = 4,
        OLECMDF_NINCHED = 8,
        OLECMDF_SUPPORTED = 1,
    }

    // eslint-disable-next-line @definitelytyped/no-const-enum
    const enum OLECMDID {
        OLECMDID_ACTIVEXINSTALLSCOPE = 66,
        OLECMDID_ADDTRAVELENTRY = 60,
        OLECMDID_ALLOWUILESSSAVEAS = 46,
        OLECMDID_CLEARSELECTION = 18,
        OLECMDID_CLOSE = 45,
        OLECMDID_COPY = 12,
        OLECMDID_CUT = 11,
        OLECMDID_DELETE = 33,
        OLECMDID_DONTDOWNLOADCSS = 47,
        OLECMDID_ENABLE_INTERACTION = 36,
        OLECMDID_ENABLE_VISIBILITY = 77,
        OLECMDID_EXITFULLSCREEN = 81,
        OLECMDID_FIND = 32,
        OLECMDID_FOCUSVIEWCONTROLS = 57,
        OLECMDID_FOCUSVIEWCONTROLSQUERY = 58,
        OLECMDID_GETPRINTTEMPLATE = 52,
        OLECMDID_GETUSERSCALABLE = 75,
        OLECMDID_GETZOOMRANGE = 20,
        OLECMDID_HIDETOOLBARS = 24,
        OLECMDID_HTTPEQUIV = 34,
        OLECMDID_HTTPEQUIV_DONE = 35,
        OLECMDID_LAYOUT_VIEWPORT_WIDTH = 71,
        OLECMDID_MEDIA_PLAYBACK = 78,
        OLECMDID_NEW = 2,
        OLECMDID_ONBEFOREUNLOAD = 83,
        OLECMDID_ONTOOLBARACTIVATED = 31,
        OLECMDID_ONUNLOAD = 37,
        OLECMDID_OPEN = 1,
        OLECMDID_OPTICAL_GETZOOMRANGE = 64,
        OLECMDID_OPTICAL_ZOOM = 63,
        OLECMDID_PAGEACTIONBLOCKED = 55,
        OLECMDID_PAGEACTIONUIQUERY = 56,
        OLECMDID_PAGEAVAILABLE = 74,
        OLECMDID_PAGESETUP = 8,
        OLECMDID_PASTE = 13,
        OLECMDID_PASTESPECIAL = 14,
        OLECMDID_POPSTATEEVENT = 69,
        OLECMDID_PREREFRESH = 39,
        OLECMDID_PRINT = 6,
        OLECMDID_PRINT2 = 49,
        OLECMDID_PRINTPREVIEW = 7,
        OLECMDID_PRINTPREVIEW2 = 50,
        OLECMDID_PROPERTIES = 10,
        OLECMDID_PROPERTYBAG2 = 38,
        OLECMDID_REDO = 16,
        OLECMDID_REFRESH = 22,
        OLECMDID_SAVE = 3,
        OLECMDID_SAVEAS = 4,
        OLECMDID_SAVECOPYAS = 5,
        OLECMDID_SCROLLCOMPLETE = 82,
        OLECMDID_SELECTALL = 17,
        OLECMDID_SET_HOST_FULLSCREENMODE = 80,
        OLECMDID_SETDOWNLOADSTATE = 29,
        OLECMDID_SETFAVICON = 79,
        OLECMDID_SETPRINTTEMPLATE = 51,
        OLECMDID_SETPROGRESSMAX = 25,
        OLECMDID_SETPROGRESSPOS = 26,
        OLECMDID_SETPROGRESSTEXT = 27,
        OLECMDID_SETTITLE = 28,
        OLECMDID_SHOWFIND = 42,
        OLECMDID_SHOWMESSAGE = 41,
        OLECMDID_SHOWMESSAGE_BLOCKABLE = 84,
        OLECMDID_SHOWPAGEACTIONMENU = 59,
        OLECMDID_SHOWPAGESETUP = 43,
        OLECMDID_SHOWPRINT = 44,
        OLECMDID_SHOWSCRIPTERROR = 40,
        OLECMDID_SHOWTASKDLG = 68,
        OLECMDID_SHOWTASKDLG_BLOCKABLE = 85,
        OLECMDID_SPELL = 9,
        OLECMDID_STOP = 23,
        OLECMDID_STOPDOWNLOAD = 30,
        OLECMDID_UNDO = 15,
        OLECMDID_UPDATE_CARET = 76,
        OLECMDID_UPDATEBACKFORWARDSTATE = 62,
        OLECMDID_UPDATECOMMANDS = 21,
        OLECMDID_UPDATEPAGESTATUS = 48,
        OLECMDID_UPDATETRAVELENTRY = 61,
        OLECMDID_UPDATETRAVELENTRY_DATARECOVERY = 67,
        OLECMDID_USER_OPTICAL_ZOOM = 73,
        OLECMDID_VIEWPORT_MODE = 70,
        OLECMDID_VISUAL_VIEWPORT_EXCLUDE_BOTTOM = 72,
        OLECMDID_WINDOWSTATECHANGED = 65,
        OLECMDID_ZOOM = 19,
    }

    // eslint-disable-next-line @definitelytyped/no-const-enum
    const enum RefreshConstants {
        Normal = 0,
        IfExpired = 1,
        Completely = 3,
    }

    /** Constants for WebBrowser security icon notification */
    // eslint-disable-next-line @definitelytyped/no-const-enum
    const enum SecureLockIconConstants {
        secureLockIconMixed = 1,
        secureLockIconSecure128Bit = 6,
        secureLockIconSecure40Bit = 3,
        secureLockIconSecure56Bit = 4,
        secureLockIconSecureFortezza = 5,
        secureLockIconSecureUnknownBits = 2,
        secureLockIconUnsecure = 0,
    }

    /** Options for ShellWindows FindWindow */
    // eslint-disable-next-line @definitelytyped/no-const-enum
    const enum ShellWindowFindWindowOptions {
        SWFO_COOKIEPASSED = 4,
        SWFO_INCLUDEPENDING = 2,
        SWFO_NEEDDISPATCH = 1,
    }

    /** Constants for ShellWindows registration */
    // eslint-disable-next-line @definitelytyped/no-const-enum
    const enum ShellWindowTypeConstants {
        SWC_3RDPARTY = 2,
        SWC_BROWSER = 1,
        SWC_CALLBACK = 4,
        SWC_DESKTOP = 8,
        SWC_EXPLORER = 0,
    }

    // eslint-disable-next-line @definitelytyped/no-const-enum
    const enum tagREADYSTATE {
        READYSTATE_COMPLETE = 4,
        READYSTATE_INTERACTIVE = 3,
        READYSTATE_LOADED = 2,
        READYSTATE_LOADING = 1,
        READYSTATE_UNINITIALIZED = 0,
    }

    type TargetFrameValues = "_blank" | "_parent" | "_self" | "_top";

    class CScriptErrorList {
        private "SHDocVw.CScriptErrorList_typekey": CScriptErrorList;
        private constructor();
        advanceError(): void;
        canAdvanceError(): number;
        canRetreatError(): number;
        getAlwaysShowLockState(): number;
        getDetailsPaneOpen(): number;
        getErrorChar(): number;
        getErrorCode(): number;
        getErrorLine(): number;
        getErrorMsg(): string;
        getErrorUrl(): string;
        getPerErrorDisplay(): number;
        retreatError(): void;
        setDetailsPaneOpen(fDetailsPaneOpen: number): void;
        setPerErrorDisplay(fPerErrorDisplay: number): void;
    }

    /** Internet Explorer Application. */
    class InternetExplorer {
        private "SHDocVw.InternetExplorer_typekey": InternetExplorer;
        private constructor();

        /** Controls whether address bar is shown */
        AddressBar: boolean;

        /** Returns the application automation object if accessible, this automation object otherwise.. */
        readonly Application: any;

        /** Query to see if something is still in progress. */
        readonly Busy: boolean;

        /** Converts client sizes into window sizes. */
        ClientToWindow(pcx: number, pcy: number): void;

        /** Returns the container/parent automation object, if any. */
        readonly Container: any;

        /** Returns the active Document automation object, if any. */
        readonly Document: any;

        /** IOleCommandTarget::Exec */
        ExecWB(cmdID: OLECMDID, cmdexecopt: OLECMDEXECOPT, pvaIn?: any, pvaOut?: any): void;

        /** Returns file specification of the application, including path. */
        readonly FullName: string;

        /** Maximizes window and turns off statusbar, toolbar, menubar, and titlebar. */
        FullScreen: boolean;

        /** Retrieve the Associated value for the property vtValue in the context of the object. */
        GetProperty(Property: string): any;

        /** Navigates to the previous item in the history list. */
        GoBack(): void;

        /** Navigates to the next item in the history list. */
        GoForward(): void;

        /** Go home/start page. */
        GoHome(): void;

        /** Go Search Page. */
        GoSearch(): void;

        /** The vertical dimension (pixels) of the frame window/object. */
        Height: number;

        /** Returns the HWND of the current IE window. */
        readonly HWND: number;

        /** The horizontal position (pixels) of the frame window relative to the screen/container. */
        Left: number;

        /** Gets the short (UI-friendly) name of the URL/file currently viewed. */
        readonly LocationName: string;

        /** Gets the full URL/path currently viewed. */
        readonly LocationURL: string;

        /** Controls whether menubar is shown. */
        MenuBar: boolean;

        /** Returns name of the application. */
        readonly Name: string;

        /** Navigates to a URL or file. */
        Navigate(
            URL: string,
            Flags?: BrowserNavConstants,
            TargetFrameName?: TargetFrameValues | string,
            PostData?: any,
            Headers?: string,
        ): void;

        /** Navigates to a URL or file or pidl. */
        Navigate2(
            URL: any,
            Flags?: BrowserNavConstants,
            TargetFrameName?: TargetFrameValues | string,
            PostData?: any,
            Headers?: string,
        ): void;

        /** Controls if the frame is offline (read from cache) */
        Offline: boolean;

        /** Returns the automation object of the container/parent if one exists or this automation object. */
        readonly Parent: any;

        /** Returns the path to the application. */
        readonly Path: string;

        /** Associates vtValue with the name szProperty in the context of the object. */
        PutProperty(Property: string, vtValue: any): void;

        /** IOleCommandTarget::QueryStatus */
        QueryStatusWB(cmdID: OLECMDID): OLECMDF;

        /** Exits application and closes the open document. */
        Quit(): void;
        readonly ReadyState: tagREADYSTATE;

        /** Refresh the currently viewed page. */
        Refresh(): void;

        /** Refresh the currently viewed page. */
        Refresh2(Level?: RefreshConstants): void;

        /** Registers OC as a top-level browser (for target name resolution) */
        RegisterAsBrowser: boolean;

        /** Registers OC as a drop target for navigation */
        RegisterAsDropTarget: boolean;

        /** Controls whether the window is resizable */
        Resizable: boolean;

        /** Set BrowserBar to Clsid */
        ShowBrowserBar(pvaClsid: string | BrowserBarConstants, pvarShow?: boolean): void;

        /** Controls if any dialog boxes can be shown */
        Silent: boolean;

        /** Turn on or off the statusbar. */
        StatusBar: boolean;

        /** Text of Status window. */
        StatusText: string;

        /** Stops opening a file. */
        Stop(): void;

        /** Controls if the browser is in theater mode */
        TheaterMode: boolean;

        /** Controls which toolbar is shown. */
        ToolBar: number;

        /** The vertical position (pixels) of the frame window relative to the screen/container. */
        Top: number;

        /** Returns True if this is the top level object. */
        readonly TopLevelContainer: boolean;

        /** Returns the type of the contained document object. */
        readonly Type: string;

        /** Determines whether the application is visible or hidden. */
        Visible: boolean;

        /** The horizontal dimension (pixels) of the frame window/object. */
        Width: number;
    }

    /** Internet Explorer Application with default integrity of Medium */
    class InternetExplorerMedium {
        private "SHDocVw.InternetExplorerMedium_typekey": InternetExplorerMedium;
        private constructor();

        /** Controls whether address bar is shown */
        AddressBar: boolean;

        /** Returns the application automation object if accessible, this automation object otherwise.. */
        readonly Application: any;

        /** Query to see if something is still in progress. */
        readonly Busy: boolean;

        /** Converts client sizes into window sizes. */
        ClientToWindow(pcx: number, pcy: number): void;

        /** Returns the container/parent automation object, if any. */
        readonly Container: any;

        /** Returns the active Document automation object, if any. */
        readonly Document: any;

        /** IOleCommandTarget::Exec */
        ExecWB(cmdID: OLECMDID, cmdexecopt: OLECMDEXECOPT, pvaIn?: any, pvaOut?: any): void;

        /** Returns file specification of the application, including path. */
        readonly FullName: string;

        /** Maximizes window and turns off statusbar, toolbar, menubar, and titlebar. */
        FullScreen: boolean;

        /** Retrieve the Associated value for the property vtValue in the context of the object. */
        GetProperty(Property: string): any;

        /** Navigates to the previous item in the history list. */
        GoBack(): void;

        /** Navigates to the next item in the history list. */
        GoForward(): void;

        /** Go home/start page. */
        GoHome(): void;

        /** Go Search Page. */
        GoSearch(): void;

        /** The vertical dimension (pixels) of the frame window/object. */
        Height: number;

        /** Returns the HWND of the current IE window. */
        readonly HWND: number;

        /** The horizontal position (pixels) of the frame window relative to the screen/container. */
        Left: number;

        /** Gets the short (UI-friendly) name of the URL/file currently viewed. */
        readonly LocationName: string;

        /** Gets the full URL/path currently viewed. */
        readonly LocationURL: string;

        /** Controls whether menubar is shown. */
        MenuBar: boolean;

        /** Returns name of the application. */
        readonly Name: string;

        /** Navigates to a URL or file. */
        Navigate(
            URL: string,
            Flags?: BrowserNavConstants,
            TargetFrameName?: TargetFrameValues | string,
            PostData?: any,
            Headers?: string,
        ): void;

        /** Navigates to a URL or file or pidl. */
        Navigate2(
            URL: any,
            Flags?: BrowserNavConstants,
            TargetFrameName?: TargetFrameValues | string,
            PostData?: any,
            Headers?: string,
        ): void;

        /** Controls if the frame is offline (read from cache) */
        Offline: boolean;

        /** Returns the automation object of the container/parent if one exists or this automation object. */
        readonly Parent: any;

        /** Returns the path to the application. */
        readonly Path: string;

        /** Associates vtValue with the name szProperty in the context of the object. */
        PutProperty(Property: string, vtValue: any): void;

        /** IOleCommandTarget::QueryStatus */
        QueryStatusWB(cmdID: OLECMDID): OLECMDF;

        /** Exits application and closes the open document. */
        Quit(): void;
        readonly ReadyState: tagREADYSTATE;

        /** Refresh the currently viewed page. */
        Refresh(): void;

        /** Refresh the currently viewed page. */
        Refresh2(Level?: RefreshConstants): void;

        /** Registers OC as a top-level browser (for target name resolution) */
        RegisterAsBrowser: boolean;

        /** Registers OC as a drop target for navigation */
        RegisterAsDropTarget: boolean;

        /** Controls whether the window is resizable */
        Resizable: boolean;

        /** Set BrowserBar to Clsid */
        ShowBrowserBar(pvaClsid: string | BrowserBarConstants, pvarShow?: boolean): void;

        /** Controls if any dialog boxes can be shown */
        Silent: boolean;

        /** Turn on or off the statusbar. */
        StatusBar: boolean;

        /** Text of Status window. */
        StatusText: string;

        /** Stops opening a file. */
        Stop(): void;

        /** Controls if the browser is in theater mode */
        TheaterMode: boolean;

        /** Controls which toolbar is shown. */
        ToolBar: number;

        /** The vertical position (pixels) of the frame window relative to the screen/container. */
        Top: number;

        /** Returns True if this is the top level object. */
        readonly TopLevelContainer: boolean;

        /** Returns the type of the contained document object. */
        readonly Type: string;

        /** Determines whether the application is visible or hidden. */
        Visible: boolean;

        /** The horizontal dimension (pixels) of the frame window/object. */
        Width: number;
    }

    /** Shell Browser Window. */
    class ShellBrowserWindow {
        private "SHDocVw.ShellBrowserWindow_typekey": ShellBrowserWindow;
        private constructor();

        /** Controls whether address bar is shown */
        AddressBar: boolean;

        /** Returns the application automation object if accessible, this automation object otherwise.. */
        readonly Application: any;

        /** Query to see if something is still in progress. */
        readonly Busy: boolean;

        /** Converts client sizes into window sizes. */
        ClientToWindow(pcx: number, pcy: number): void;

        /** Returns the container/parent automation object, if any. */
        readonly Container: any;

        /** Returns the active Document automation object, if any. */
        readonly Document: any;

        /** IOleCommandTarget::Exec */
        ExecWB(cmdID: OLECMDID, cmdexecopt: OLECMDEXECOPT, pvaIn?: any, pvaOut?: any): void;

        /** Returns file specification of the application, including path. */
        readonly FullName: string;

        /** Maximizes window and turns off statusbar, toolbar, menubar, and titlebar. */
        FullScreen: boolean;

        /** Retrieve the Associated value for the property vtValue in the context of the object. */
        GetProperty(Property: string): any;

        /** Navigates to the previous item in the history list. */
        GoBack(): void;

        /** Navigates to the next item in the history list. */
        GoForward(): void;

        /** Go home/start page. */
        GoHome(): void;

        /** Go Search Page. */
        GoSearch(): void;

        /** The vertical dimension (pixels) of the frame window/object. */
        Height: number;

        /** Returns the HWND of the current IE window. */
        readonly HWND: number;

        /** The horizontal position (pixels) of the frame window relative to the screen/container. */
        Left: number;

        /** Gets the short (UI-friendly) name of the URL/file currently viewed. */
        readonly LocationName: string;

        /** Gets the full URL/path currently viewed. */
        readonly LocationURL: string;

        /** Controls whether menubar is shown. */
        MenuBar: boolean;

        /** Returns name of the application. */
        readonly Name: string;

        /** Navigates to a URL or file. */
        Navigate(
            URL: string,
            Flags?: BrowserNavConstants,
            TargetFrameName?: TargetFrameValues | string,
            PostData?: any,
            Headers?: string,
        ): void;

        /** Navigates to a URL or file or pidl. */
        Navigate2(
            URL: any,
            Flags?: BrowserNavConstants,
            TargetFrameName?: TargetFrameValues | string,
            PostData?: any,
            Headers?: string,
        ): void;

        /** Controls if the frame is offline (read from cache) */
        Offline: boolean;

        /** Returns the automation object of the container/parent if one exists or this automation object. */
        readonly Parent: any;

        /** Returns the path to the application. */
        readonly Path: string;

        /** Associates vtValue with the name szProperty in the context of the object. */
        PutProperty(Property: string, vtValue: any): void;

        /** IOleCommandTarget::QueryStatus */
        QueryStatusWB(cmdID: OLECMDID): OLECMDF;

        /** Exits application and closes the open document. */
        Quit(): void;
        readonly ReadyState: tagREADYSTATE;

        /** Refresh the currently viewed page. */
        Refresh(): void;

        /** Refresh the currently viewed page. */
        Refresh2(Level?: RefreshConstants): void;

        /** Registers OC as a top-level browser (for target name resolution) */
        RegisterAsBrowser: boolean;

        /** Registers OC as a drop target for navigation */
        RegisterAsDropTarget: boolean;

        /** Controls whether the window is resizable */
        Resizable: boolean;

        /** Set BrowserBar to Clsid */
        ShowBrowserBar(pvaClsid: string | BrowserBarConstants, pvarShow?: boolean): void;

        /** Controls if any dialog boxes can be shown */
        Silent: boolean;

        /** Turn on or off the statusbar. */
        StatusBar: boolean;

        /** Text of Status window. */
        StatusText: string;

        /** Stops opening a file. */
        Stop(): void;

        /** Controls if the browser is in theater mode */
        TheaterMode: boolean;

        /** Controls which toolbar is shown. */
        ToolBar: number;

        /** The vertical position (pixels) of the frame window relative to the screen/container. */
        Top: number;

        /** Returns True if this is the top level object. */
        readonly TopLevelContainer: boolean;

        /** Returns the type of the contained document object. */
        readonly Type: string;

        /** Determines whether the application is visible or hidden. */
        Visible: boolean;

        /** The horizontal dimension (pixels) of the frame window/object. */
        Width: number;
    }

    class ShellNameSpace {
        private "SHDocVw.ShellNameSpace_typekey": ShellNameSpace;
        private constructor();
        Columns: string;

        /** number of view types */
        readonly CountViewTypes: number;

        /** method CreateSubscriptionForSelection */
        CreateSubscriptionForSelection(): boolean;

        /** method DeleteSubscriptionForSelection */
        DeleteSubscriptionForSelection(): boolean;
        Depth: number;

        /** options  */
        EnumOptions: number;

        /** expands item specified depth */
        Expand(var_0: any, iDepth: number): void;

        /** method Export */
        Export(): void;
        Flags: number;

        /** method Import */
        Import(): void;

        /** method InvokeContextMenuCommand */
        InvokeContextMenuCommand(strCommand: string): void;
        Mode: number;

        /** method MoveSelectionDown */
        MoveSelectionDown(): void;

        /** method MoveSelectionTo */
        MoveSelectionTo(): void;

        /** method MoveSelectionUp */
        MoveSelectionUp(): void;

        /** method NewFolder */
        NewFolder(): void;

        /** method ResetSort */
        ResetSort(): void;

        /** get the root item */
        Root: any;

        /** get the selected item */
        SelectedItem: any;

        /** collection of selected items */
        SelectedItems(): any;

        /** old, use put_Root() instead */
        SetRoot(bstrFullPath: string): void;

        /** set view type */
        SetViewType(iType: number): void;

        /** Query to see if subscriptions are enabled */
        readonly SubscriptionsEnabled: boolean;

        /** method Synchronize */
        Synchronize(): void;
        TVFlags: number;

        /** unselects all items */
        UnselectAll(): void;
    }

    class ShellUIHelper {
        private "SHDocVw.ShellUIHelper_typekey": ShellUIHelper;
        private constructor();
        AddChannel(URL: string): void;
        AddDesktopComponent(URL: string, Type: string, Left?: any, Top?: any, Width?: any, Height?: any): void;
        AddFavorite(URL: string, Title?: any): void;
        AddSearchProvider(URL: string): void;
        AddService(URL: string): void;
        AddToFavoritesBar(URL: string, Title: string, Type?: any): void;
        AutoCompleteAttach(Reserved?: any): void;
        AutoCompleteSaveForm(Form?: any): void;
        AutoScan(strSearch: string, strFailureUrl: string, pvarTargetFrame?: any): void;
        BrandImageUri(): string;
        BuildNewTabPage(): void;
        ContentDiscoveryReset(): void;
        CustomizeClearType(fSet: boolean): void;
        CustomizeSettings(fSQM: boolean, fPhishing: boolean, bstrLocale: string): void;
        DefaultSearchProvider(): string;
        DiagnoseConnection(): void;
        EnableSuggestedSites(fEnable: boolean): void;
        GetCVListData(): string;
        GetCVListLocalData(): string;
        GetEMIEListData(): string;
        GetEMIEListLocalData(): string;
        GetExperimentalFlag(bstrFlagString: string): boolean;
        GetExperimentalValue(bstrValueString: string): number;
        GetNeedIEAutoLaunchFlag(bstrUrl: string): boolean;
        HasNeedIEAutoLaunchFlag(bstrUrl: string): boolean;
        ImportExportFavorites(fImport: boolean, strImpExpPath: string): void;
        InPrivateFilteringEnabled(): boolean;
        IsSearchMigrated(): boolean;
        IsSearchProviderInstalled(URL: string): number;
        IsServiceInstalled(URL: string, Verb: string): number;
        IsSubscribed(URL: string): boolean;
        IsSuggestedSitesEnabled(): boolean;
        LaunchIE(bstrUrl: string, automated: boolean): void;
        LaunchInHVSI(bstrUrl: string): void;
        msActiveXFilteringEnabled(): boolean;
        msAddSiteMode(): void;
        msAddTrackingProtectionList(URL: string, bstrFilterName: string): void;
        msChangeDefaultBrowser(fChange: boolean): void;
        msClearTile(): void;
        msDiagnoseConnectionUILess(): void;
        msEnableTileNotificationQueue(fChange: boolean): void;
        msEnableTileNotificationQueueForSquare150x150(fChange: boolean): void;
        msEnableTileNotificationQueueForSquare310x310(fChange: boolean): void;
        msEnableTileNotificationQueueForWide310x150(fChange: boolean): void;
        msIsSiteMode(): boolean;
        msIsSiteModeFirstRun(fPreserveState: boolean): any;
        msLaunchInternetOptions(): void;
        msLaunchNetworkClientHelp(): void;
        msPinnedSiteState(): any;
        msProvisionNetworks(bstrProvisioningXml: string): any;
        msRemoveScheduledTileNotification(bstrNotificationId: string): void;
        msReportSafeUrl(): void;
        msScheduledTileNotification(
            bstrNotificationXml: string,
            bstrNotificationId: string,
            bstrNotificationTag: string,
            startTime?: any,
            expirationTime?: any,
        ): void;
        msSiteModeActivate(): void;
        msSiteModeAddButtonStyle(uiButtonID: any, bstrIconURL: string, bstrTooltip: string): any;
        msSiteModeAddJumpListItem(
            bstrName: string,
            bstrActionUri: string,
            bstrIconUri: string,
            pvarWindowType?: any,
        ): void;
        msSiteModeAddThumbBarButton(bstrIconURL: string, bstrTooltip: string): any;
        msSiteModeClearBadge(): void;
        msSiteModeClearIconOverlay(): void;
        msSiteModeClearJumpList(): void;
        msSiteModeCreateJumpList(bstrHeader: string): void;
        msSiteModeRefreshBadge(): void;
        msSiteModeSetIconOverlay(IconUrl: string, pvarDescription?: any): void;
        msSiteModeShowButtonStyle(uiButtonID: any, uiStyleID: any): void;
        msSiteModeShowJumpList(): void;
        msSiteModeShowThumbBar(): void;
        msSiteModeUpdateThumbBarButton(ButtonID: any, fEnabled: boolean, fVisible: boolean): void;
        msStartPeriodicBadgeUpdate(pollingUri: string, startTime?: any, uiUpdateRecurrence?: any): void;
        msStartPeriodicTileUpdate(pollingUris: any, startTime?: any, uiUpdateRecurrence?: any): void;
        msStartPeriodicTileUpdateBatch(pollingUris: any, startTime?: any, uiUpdateRecurrence?: any): void;
        msStopPeriodicBadgeUpdate(): void;
        msStopPeriodicTileUpdate(): void;
        msTrackingProtectionEnabled(): boolean;
        NavigateAndFind(URL: string, strQuery: string, varTargetFrame: any): void;
        NavigateToSuggestedSites(bstrRelativeUrl: string): void;
        OpenFavoritesPane(): void;
        OpenFavoritesSettings(): void;
        PhishingEnabled(): boolean;
        RefreshOfflineDesktop(): void;
        ResetAllExperimentalFlagsAndValues(): void;
        ResetFirstBootMode(): void;
        ResetSafeMode(): void;
        RunOnceHasShown(): boolean;
        RunOnceRequiredSettingsComplete(fComplete: boolean): void;
        RunOnceShown(): void;
        SearchGuideUrl(): string;
        SetActivitiesVisible(fVisible: boolean): void;
        SetExperimentalFlag(bstrFlagString: string, vfFlag: boolean): void;
        SetExperimentalValue(bstrValueString: string, dwValue: number): void;
        SetNeedIEAutoLaunchFlag(bstrUrl: string, flag: boolean): void;
        SetRecentlyClosedVisible(fVisible: boolean): void;
        ShowBrowserUI(bstrName: string, pvarIn: any): any;
        ShowInPrivateHelp(): void;
        ShowTabsHelp(): void;
        SkipRunOnce(): void;
        SkipTabsWelcome(): void;
        SqmEnabled(): boolean;
    }

    /** ShellDispatch Load in Shell Context */
    class ShellWindows {
        private "SHDocVw.ShellWindows_typekey": ShellWindows;
        private constructor();

        /** Get count of open Shell windows */
        readonly Count: number;

        /** Find the window based on the location */
        FindWindowSW(pvarloc: any, pvarlocRoot: any, swClass: number, pHWND: number, swfwOptions: number): any;

        /** Return the shell window for the given index */
        Item(index?: any): any;

        /** Notifies the activation */
        OnActivated(lCookie: number, fActive: boolean): void;

        /** Notifies on creation and frame name set */
        OnCreated(lCookie: number, punk: any): void;

        /** Notifies the new location */
        OnNavigate(lCookie: number, pvarloc: any): void;

        /** Used by IExplore to register different processes */
        ProcessAttachDetach(fAttach: boolean): void;

        /** Register a window with the list */
        Register(pid: any, HWND: number, swClass: number, plCookie: number): void;

        /** Register a pending open with the list */
        RegisterPending(lThreadId: number, pvarloc: any, pvarlocRoot: any, swClass: number, plCookie: number): void;

        /** Remove a window from the list */
        Revoke(lCookie: number): void;
    }

    /** WebBrowser Control */
    class WebBrowser {
        private "SHDocVw.WebBrowser_typekey": WebBrowser;
        private constructor();

        /** Controls whether address bar is shown (ignored by WebBrowser) */
        AddressBar: boolean;

        /** Returns the application automation object if accessible, this automation object otherwise.. */
        readonly Application: any;

        /** Query to see if something is still in progress. */
        readonly Busy: boolean;

        /** Converts client sizes into window sizes. */
        ClientToWindow(pcx: number, pcy: number): void;

        /** Returns the container/parent automation object, if any. */
        readonly Container: any;

        /** Returns the active Document automation object, if any. */
        readonly Document: any;

        /** IOleCommandTarget::Exec */
        ExecWB(cmdID: OLECMDID, cmdexecopt: OLECMDEXECOPT, pvaIn?: any, pvaOut?: any): void;

        /** Returns file specification of the application, including path. */
        readonly FullName: string;

        /** Maximizes window and turns off statusbar, toolbar, menubar, and titlebar. */
        FullScreen: boolean;

        /** Retrieve the Associated value for the property vtValue in the context of the object. */
        GetProperty(Property: string): any;

        /** Navigates to the previous item in the history list. */
        GoBack(): void;

        /** Navigates to the next item in the history list. */
        GoForward(): void;

        /** Go home/start page. */
        GoHome(): void;

        /** Go Search Page. */
        GoSearch(): void;

        /** The vertical dimension (pixels) of the frame window/object. */
        Height: number;

        /** Returns the HWND of the current IE window. */
        readonly HWND: number;

        /** The horizontal position (pixels) of the frame window relative to the screen/container. */
        Left: number;

        /** Gets the short (UI-friendly) name of the URL/file currently viewed. */
        readonly LocationName: string;

        /** Gets the full URL/path currently viewed. */
        readonly LocationURL: string;

        /** Controls whether menubar is shown. */
        MenuBar: boolean;

        /** Returns name of the application. */
        readonly Name: string;

        /** Navigates to a URL or file. */
        Navigate(
            URL: string,
            Flags?: BrowserNavConstants,
            TargetFrameName?: TargetFrameValues | string,
            PostData?: any,
            Headers?: string,
        ): void;

        /** Navigates to a URL or file or pidl. */
        Navigate2(
            URL: any,
            Flags?: BrowserNavConstants,
            TargetFrameName?: TargetFrameValues | string,
            PostData?: any,
            Headers?: string,
        ): void;

        /** Controls if the frame is offline (read from cache) */
        Offline: boolean;

        /** Returns the automation object of the container/parent if one exists or this automation object. */
        readonly Parent: any;

        /** Returns the path to the application. */
        readonly Path: string;

        /** Associates vtValue with the name szProperty in the context of the object. */
        PutProperty(Property: string, vtValue: any): void;

        /** IOleCommandTarget::QueryStatus */
        QueryStatusWB(cmdID: OLECMDID): OLECMDF;

        /** Exits application and closes the open document. */
        Quit(): void;
        readonly ReadyState: tagREADYSTATE;

        /** Refresh the currently viewed page. */
        Refresh(): void;

        /** Refresh the currently viewed page. */
        Refresh2(Level?: RefreshConstants): void;

        /** Registers OC as a top-level browser (for target name resolution) */
        RegisterAsBrowser: boolean;

        /** Registers OC as a drop target for navigation */
        RegisterAsDropTarget: boolean;

        /** Controls whether the window is resizable */
        Resizable: boolean;

        /** Set BrowserBar to Clsid */
        ShowBrowserBar(pvaClsid: string | BrowserBarConstants, pvarShow?: boolean): void;

        /** Controls if any dialog boxes can be shown */
        Silent: boolean;

        /** Turn on or off the statusbar. */
        StatusBar: boolean;

        /** Text of Status window. */
        StatusText: string;

        /** Stops opening a file. */
        Stop(): void;

        /** Controls if the browser is in theater mode */
        TheaterMode: boolean;

        /** Controls which toolbar is shown. */
        ToolBar: number;

        /** The vertical position (pixels) of the frame window relative to the screen/container. */
        Top: number;

        /** Returns True if this is the top level object. */
        readonly TopLevelContainer: boolean;

        /** Returns the type of the contained document object. */
        readonly Type: string;

        /** Determines whether the application is visible or hidden. */
        Visible: boolean;

        /** The horizontal dimension (pixels) of the frame window/object. */
        Width: number;
    }

    /** WebBrowser Control */
    class WebBrowser_V1 {
        private "SHDocVw.WebBrowser_V1_typekey": WebBrowser_V1;
        private constructor();

        /** Returns the application automation object if accessible, this automation object otherwise.. */
        readonly Application: any;

        /** Query to see if something is still in progress. */
        readonly Busy: boolean;

        /** Returns the container/parent automation object, if any. */
        readonly Container: any;

        /** Returns the active Document automation object, if any. */
        readonly Document: any;

        /** Navigates to the previous item in the history list. */
        GoBack(): void;

        /** Navigates to the next item in the history list. */
        GoForward(): void;

        /** Go home/start page. */
        GoHome(): void;

        /** Go Search Page. */
        GoSearch(): void;

        /** The vertical dimension (pixels) of the frame window/object. */
        Height: number;

        /** The horizontal position (pixels) of the frame window relative to the screen/container. */
        Left: number;

        /** Gets the short (UI-friendly) name of the URL/file currently viewed. */
        readonly LocationName: string;

        /** Gets the full URL/path currently viewed. */
        readonly LocationURL: string;

        /** Navigates to a URL or file. */
        Navigate(
            URL: string,
            Flags?: BrowserNavConstants,
            TargetFrameName?: TargetFrameValues | string,
            PostData?: any,
            Headers?: string,
        ): void;

        /** Returns the automation object of the container/parent if one exists or this automation object. */
        readonly Parent: any;

        /** Refresh the currently viewed page. */
        Refresh(): void;

        /** Refresh the currently viewed page. */
        Refresh2(Level?: RefreshConstants): void;

        /** Stops opening a file. */
        Stop(): void;

        /** The vertical position (pixels) of the frame window relative to the screen/container. */
        Top: number;

        /** Returns True if this is the top level object. */
        readonly TopLevelContainer: boolean;

        /** Returns the type of the contained document object. */
        readonly Type: string;

        /** The horizontal dimension (pixels) of the frame window/object. */
        Width: number;
    }

    namespace EventHelperTypes {
        type InternetExplorer_BeforeNavigate2_ArgNames = [
            "pDisp",
            "URL",
            "Flags",
            "TargetFrameName",
            "PostData",
            "Headers",
            "Cancel",
        ];

        type InternetExplorerMedium_BeforeNavigate2_ArgNames = [
            "pDisp",
            "URL",
            "Flags",
            "TargetFrameName",
            "PostData",
            "Headers",
            "Cancel",
        ];

        type ShellBrowserWindow_BeforeNavigate2_ArgNames = [
            "pDisp",
            "URL",
            "Flags",
            "TargetFrameName",
            "PostData",
            "Headers",
            "Cancel",
        ];

        type ShellNameSpace_FavoritesSelectionChange_ArgNames = [
            "cItems",
            "hItem",
            "strName",
            "strUrl",
            "cVisits",
            "strDate",
            "fAvailableOffline",
        ];

        type WebBrowser_BeforeNavigate2_ArgNames = [
            "pDisp",
            "URL",
            "Flags",
            "TargetFrameName",
            "PostData",
            "Headers",
            "Cancel",
        ];

        type WebBrowser_V1_BeforeNavigate_ArgNames = [
            "URL",
            "Flags",
            "TargetFrameName",
            "PostData",
            "Headers",
            "Cancel",
        ];

        type WebBrowser_V1_FrameBeforeNavigate_ArgNames = [
            "URL",
            "Flags",
            "TargetFrameName",
            "PostData",
            "Headers",
            "Cancel",
        ];

        type WebBrowser_V1_FrameNewWindow_ArgNames = [
            "URL",
            "Flags",
            "TargetFrameName",
            "PostData",
            "Headers",
            "Processed",
        ];

        type WebBrowser_V1_NewWindow_ArgNames = ["URL", "Flags", "TargetFrameName", "PostData", "Headers", "Processed"];

        interface InternetExplorer_BeforeNavigate2_Parameter {
            Cancel: boolean;
            readonly Flags: any;
            readonly Headers: any;
            readonly pDisp: any;
            readonly PostData: any;
            readonly TargetFrameName: any;
            readonly URL: any;
        }

        interface InternetExplorerMedium_BeforeNavigate2_Parameter {
            Cancel: boolean;
            readonly Flags: any;
            readonly Headers: any;
            readonly pDisp: any;
            readonly PostData: any;
            readonly TargetFrameName: any;
            readonly URL: any;
        }

        interface ShellBrowserWindow_BeforeNavigate2_Parameter {
            Cancel: boolean;
            readonly Flags: any;
            readonly Headers: any;
            readonly pDisp: any;
            readonly PostData: any;
            readonly TargetFrameName: any;
            readonly URL: any;
        }

        interface ShellNameSpace_FavoritesSelectionChange_Parameter {
            readonly cItems: number;
            readonly cVisits: number;
            readonly fAvailableOffline: number;
            readonly hItem: number;
            readonly strDate: string;
            readonly strName: string;
            readonly strUrl: string;
        }

        interface WebBrowser_BeforeNavigate2_Parameter {
            Cancel: boolean;
            readonly Flags: any;
            readonly Headers: any;
            readonly pDisp: any;
            readonly PostData: any;
            readonly TargetFrameName: any;
            readonly URL: any;
        }

        interface WebBrowser_V1_BeforeNavigate_Parameter {
            Cancel: boolean;
            readonly Flags: number;
            readonly Headers: string;
            readonly PostData: any;
            readonly TargetFrameName: string;
            readonly URL: string;
        }

        interface WebBrowser_V1_FrameBeforeNavigate_Parameter {
            Cancel: boolean;
            readonly Flags: number;
            readonly Headers: string;
            readonly PostData: any;
            readonly TargetFrameName: string;
            readonly URL: string;
        }

        interface WebBrowser_V1_FrameNewWindow_Parameter {
            readonly Flags: number;
            readonly Headers: string;
            readonly PostData: any;
            Processed: boolean;
            readonly TargetFrameName: string;
            readonly URL: string;
        }

        interface WebBrowser_V1_NewWindow_Parameter {
            readonly Flags: number;
            readonly Headers: string;
            readonly PostData: any;
            Processed: boolean;
            readonly TargetFrameName: string;
            readonly URL: string;
        }
    }
}

interface ActiveXObject {
    on(
        obj: SHDocVw.InternetExplorer,
        event: "BeforeNavigate2",
        argNames: SHDocVw.EventHelperTypes.InternetExplorer_BeforeNavigate2_ArgNames,
        handler: (
            this: SHDocVw.InternetExplorer,
            parameter: SHDocVw.EventHelperTypes.InternetExplorer_BeforeNavigate2_Parameter,
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "BeforeScriptExecute",
        argNames: ["pDispWindow"],
        handler: (this: SHDocVw.InternetExplorer, parameter: { readonly pDispWindow: any }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "ClientToHostWindow",
        argNames: ["CX", "CY"],
        handler: (this: SHDocVw.InternetExplorer, parameter: { CX: number; CY: number }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "CommandStateChange",
        argNames: ["Command", "Enable"],
        handler: (
            this: SHDocVw.InternetExplorer,
            parameter: { readonly Command: number; readonly Enable: boolean },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "DocumentComplete" | "NavigateComplete2",
        argNames: ["pDisp", "URL"],
        handler: (
            this: SHDocVw.InternetExplorer,
            parameter: { readonly pDisp: any; readonly URL: any },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "FileDownload",
        argNames: ["ActiveDocument", "Cancel"],
        handler: (
            this: SHDocVw.InternetExplorer,
            parameter: { readonly ActiveDocument: boolean; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "NavigateError",
        argNames: ["pDisp", "URL", "Frame", "StatusCode", "Cancel"],
        handler: (
            this: SHDocVw.InternetExplorer,
            parameter: {
                readonly pDisp: any;
                readonly URL: any;
                readonly Frame: any;
                readonly StatusCode: any;
                Cancel: boolean;
            },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "NewProcess",
        argNames: ["lCauseFlag", "pWB2", "Cancel"],
        handler: (
            this: SHDocVw.InternetExplorer,
            parameter: { readonly lCauseFlag: number; readonly pWB2: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "NewWindow2",
        argNames: ["ppDisp", "Cancel"],
        handler: (this: SHDocVw.InternetExplorer, parameter: { ppDisp: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "NewWindow3",
        argNames: ["ppDisp", "Cancel", "dwFlags", "bstrUrlContext", "bstrUrl"],
        handler: (
            this: SHDocVw.InternetExplorer,
            parameter: {
                ppDisp: any;
                Cancel: boolean;
                readonly dwFlags: number;
                readonly bstrUrlContext: string;
                readonly bstrUrl: string;
            },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "OnFullScreen",
        argNames: ["FullScreen"],
        handler: (this: SHDocVw.InternetExplorer, parameter: { readonly FullScreen: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "OnMenuBar",
        argNames: ["MenuBar"],
        handler: (this: SHDocVw.InternetExplorer, parameter: { readonly MenuBar: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "OnStatusBar",
        argNames: ["StatusBar"],
        handler: (this: SHDocVw.InternetExplorer, parameter: { readonly StatusBar: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "OnTheaterMode",
        argNames: ["TheaterMode"],
        handler: (this: SHDocVw.InternetExplorer, parameter: { readonly TheaterMode: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "OnToolBar",
        argNames: ["ToolBar"],
        handler: (this: SHDocVw.InternetExplorer, parameter: { readonly ToolBar: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "OnVisible",
        argNames: ["Visible"],
        handler: (this: SHDocVw.InternetExplorer, parameter: { readonly Visible: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "PrintTemplateInstantiation" | "PrintTemplateTeardown",
        argNames: ["pDisp"],
        handler: (
            this: SHDocVw.InternetExplorer,
            parameter: { readonly pDisp: any },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "PrivacyImpactedStateChange",
        argNames: ["bImpacted"],
        handler: (this: SHDocVw.InternetExplorer, parameter: { readonly bImpacted: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "ProgressChange",
        argNames: ["Progress", "ProgressMax"],
        handler: (
            this: SHDocVw.InternetExplorer,
            parameter: { readonly Progress: number; readonly ProgressMax: number },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "PropertyChange",
        argNames: ["szProperty"],
        handler: (this: SHDocVw.InternetExplorer, parameter: { readonly szProperty: string }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "RedirectXDomainBlocked",
        argNames: ["pDisp", "StartURL", "RedirectURL", "Frame", "StatusCode"],
        handler: (
            this: SHDocVw.InternetExplorer,
            parameter: {
                readonly pDisp: any;
                readonly StartURL: any;
                readonly RedirectURL: any;
                readonly Frame: any;
                readonly StatusCode: any;
            },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "SetPhishingFilterStatus",
        argNames: ["PhishingFilterStatus"],
        handler: (
            this: SHDocVw.InternetExplorer,
            parameter: { readonly PhishingFilterStatus: number },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "SetSecureLockIcon",
        argNames: ["SecureLockIcon"],
        handler: (this: SHDocVw.InternetExplorer, parameter: { readonly SecureLockIcon: number }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "StatusTextChange" | "TitleChange",
        argNames: ["Text"],
        handler: (this: SHDocVw.InternetExplorer, parameter: { readonly Text: string }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "ThirdPartyUrlBlocked",
        argNames: ["URL", "dwCount"],
        handler: (
            this: SHDocVw.InternetExplorer,
            parameter: { readonly URL: any; readonly dwCount: number },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "UpdatePageStatus",
        argNames: ["pDisp", "nPage", "fDone"],
        handler: (
            this: SHDocVw.InternetExplorer,
            parameter: { readonly pDisp: any; readonly nPage: any; readonly fDone: any },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "WebWorkerFinsihed",
        argNames: ["dwUniqueID"],
        handler: (this: SHDocVw.InternetExplorer, parameter: { readonly dwUniqueID: number }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "WebWorkerStarted",
        argNames: ["dwUniqueID", "bstrWorkerLabel"],
        handler: (
            this: SHDocVw.InternetExplorer,
            parameter: { readonly dwUniqueID: number; readonly bstrWorkerLabel: string },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "WindowClosing",
        argNames: ["IsChildWindow", "Cancel"],
        handler: (
            this: SHDocVw.InternetExplorer,
            parameter: { readonly IsChildWindow: boolean; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "WindowSetHeight",
        argNames: ["Height"],
        handler: (this: SHDocVw.InternetExplorer, parameter: { readonly Height: number }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "WindowSetLeft",
        argNames: ["Left"],
        handler: (this: SHDocVw.InternetExplorer, parameter: { readonly Left: number }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "WindowSetResizable",
        argNames: ["Resizable"],
        handler: (this: SHDocVw.InternetExplorer, parameter: { readonly Resizable: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "WindowSetTop",
        argNames: ["Top"],
        handler: (this: SHDocVw.InternetExplorer, parameter: { readonly Top: number }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "WindowSetWidth",
        argNames: ["Width"],
        handler: (this: SHDocVw.InternetExplorer, parameter: { readonly Width: number }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "WindowStateChanged",
        argNames: ["dwWindowStateFlags", "dwValidFlagsMask"],
        handler: (
            this: SHDocVw.InternetExplorer,
            parameter: { readonly dwWindowStateFlags: number; readonly dwValidFlagsMask: number },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "BeforeNavigate2",
        argNames: SHDocVw.EventHelperTypes.InternetExplorerMedium_BeforeNavigate2_ArgNames,
        handler: (
            this: SHDocVw.InternetExplorerMedium,
            parameter: SHDocVw.EventHelperTypes.InternetExplorerMedium_BeforeNavigate2_Parameter,
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "BeforeScriptExecute",
        argNames: ["pDispWindow"],
        handler: (
            this: SHDocVw.InternetExplorerMedium,
            parameter: { readonly pDispWindow: any },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "ClientToHostWindow",
        argNames: ["CX", "CY"],
        handler: (this: SHDocVw.InternetExplorerMedium, parameter: { CX: number; CY: number }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "CommandStateChange",
        argNames: ["Command", "Enable"],
        handler: (
            this: SHDocVw.InternetExplorerMedium,
            parameter: { readonly Command: number; readonly Enable: boolean },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "DocumentComplete" | "NavigateComplete2",
        argNames: ["pDisp", "URL"],
        handler: (
            this: SHDocVw.InternetExplorerMedium,
            parameter: { readonly pDisp: any; readonly URL: any },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "FileDownload",
        argNames: ["ActiveDocument", "Cancel"],
        handler: (
            this: SHDocVw.InternetExplorerMedium,
            parameter: { readonly ActiveDocument: boolean; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "NavigateError",
        argNames: ["pDisp", "URL", "Frame", "StatusCode", "Cancel"],
        handler: (
            this: SHDocVw.InternetExplorerMedium,
            parameter: {
                readonly pDisp: any;
                readonly URL: any;
                readonly Frame: any;
                readonly StatusCode: any;
                Cancel: boolean;
            },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "NewProcess",
        argNames: ["lCauseFlag", "pWB2", "Cancel"],
        handler: (
            this: SHDocVw.InternetExplorerMedium,
            parameter: { readonly lCauseFlag: number; readonly pWB2: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "NewWindow2",
        argNames: ["ppDisp", "Cancel"],
        handler: (
            this: SHDocVw.InternetExplorerMedium,
            parameter: { ppDisp: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "NewWindow3",
        argNames: ["ppDisp", "Cancel", "dwFlags", "bstrUrlContext", "bstrUrl"],
        handler: (this: SHDocVw.InternetExplorerMedium, parameter: {
            ppDisp: any;
            Cancel: boolean;
            readonly dwFlags: number;
            readonly bstrUrlContext: string;
            readonly bstrUrl: string;
        }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "OnFullScreen",
        argNames: ["FullScreen"],
        handler: (this: SHDocVw.InternetExplorerMedium, parameter: { readonly FullScreen: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "OnMenuBar",
        argNames: ["MenuBar"],
        handler: (this: SHDocVw.InternetExplorerMedium, parameter: { readonly MenuBar: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "OnStatusBar",
        argNames: ["StatusBar"],
        handler: (this: SHDocVw.InternetExplorerMedium, parameter: { readonly StatusBar: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "OnTheaterMode",
        argNames: ["TheaterMode"],
        handler: (
            this: SHDocVw.InternetExplorerMedium,
            parameter: { readonly TheaterMode: boolean },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "OnToolBar",
        argNames: ["ToolBar"],
        handler: (this: SHDocVw.InternetExplorerMedium, parameter: { readonly ToolBar: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "OnVisible",
        argNames: ["Visible"],
        handler: (this: SHDocVw.InternetExplorerMedium, parameter: { readonly Visible: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "PrintTemplateInstantiation" | "PrintTemplateTeardown",
        argNames: ["pDisp"],
        handler: (this: SHDocVw.InternetExplorerMedium, parameter: { readonly pDisp: any }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "PrivacyImpactedStateChange",
        argNames: ["bImpacted"],
        handler: (
            this: SHDocVw.InternetExplorerMedium,
            parameter: { readonly bImpacted: boolean },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "ProgressChange",
        argNames: ["Progress", "ProgressMax"],
        handler: (
            this: SHDocVw.InternetExplorerMedium,
            parameter: { readonly Progress: number; readonly ProgressMax: number },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "PropertyChange",
        argNames: ["szProperty"],
        handler: (this: SHDocVw.InternetExplorerMedium, parameter: { readonly szProperty: string }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "RedirectXDomainBlocked",
        argNames: ["pDisp", "StartURL", "RedirectURL", "Frame", "StatusCode"],
        handler: (
            this: SHDocVw.InternetExplorerMedium,
            parameter: {
                readonly pDisp: any;
                readonly StartURL: any;
                readonly RedirectURL: any;
                readonly Frame: any;
                readonly StatusCode: any;
            },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "SetPhishingFilterStatus",
        argNames: ["PhishingFilterStatus"],
        handler: (
            this: SHDocVw.InternetExplorerMedium,
            parameter: { readonly PhishingFilterStatus: number },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "SetSecureLockIcon",
        argNames: ["SecureLockIcon"],
        handler: (
            this: SHDocVw.InternetExplorerMedium,
            parameter: { readonly SecureLockIcon: number },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "StatusTextChange" | "TitleChange",
        argNames: ["Text"],
        handler: (
            this: SHDocVw.InternetExplorerMedium,
            parameter: { readonly Text: string },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "ThirdPartyUrlBlocked",
        argNames: ["URL", "dwCount"],
        handler: (
            this: SHDocVw.InternetExplorerMedium,
            parameter: { readonly URL: any; readonly dwCount: number },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "UpdatePageStatus",
        argNames: ["pDisp", "nPage", "fDone"],
        handler: (
            this: SHDocVw.InternetExplorerMedium,
            parameter: { readonly pDisp: any; readonly nPage: any; readonly fDone: any },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "WebWorkerFinsihed",
        argNames: ["dwUniqueID"],
        handler: (
            this: SHDocVw.InternetExplorerMedium,
            parameter: { readonly dwUniqueID: number },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "WebWorkerStarted",
        argNames: ["dwUniqueID", "bstrWorkerLabel"],
        handler: (
            this: SHDocVw.InternetExplorerMedium,
            parameter: { readonly dwUniqueID: number; readonly bstrWorkerLabel: string },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "WindowClosing",
        argNames: ["IsChildWindow", "Cancel"],
        handler: (
            this: SHDocVw.InternetExplorerMedium,
            parameter: { readonly IsChildWindow: boolean; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "WindowSetHeight",
        argNames: ["Height"],
        handler: (this: SHDocVw.InternetExplorerMedium, parameter: { readonly Height: number }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "WindowSetLeft",
        argNames: ["Left"],
        handler: (this: SHDocVw.InternetExplorerMedium, parameter: { readonly Left: number }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "WindowSetResizable",
        argNames: ["Resizable"],
        handler: (
            this: SHDocVw.InternetExplorerMedium,
            parameter: { readonly Resizable: boolean },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "WindowSetTop",
        argNames: ["Top"],
        handler: (this: SHDocVw.InternetExplorerMedium, parameter: { readonly Top: number }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "WindowSetWidth",
        argNames: ["Width"],
        handler: (this: SHDocVw.InternetExplorerMedium, parameter: { readonly Width: number }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "WindowStateChanged",
        argNames: ["dwWindowStateFlags", "dwValidFlagsMask"],
        handler: (
            this: SHDocVw.InternetExplorerMedium,
            parameter: { readonly dwWindowStateFlags: number; readonly dwValidFlagsMask: number },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "BeforeNavigate2",
        argNames: SHDocVw.EventHelperTypes.ShellBrowserWindow_BeforeNavigate2_ArgNames,
        handler: (
            this: SHDocVw.ShellBrowserWindow,
            parameter: SHDocVw.EventHelperTypes.ShellBrowserWindow_BeforeNavigate2_Parameter,
        ) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "BeforeScriptExecute",
        argNames: ["pDispWindow"],
        handler: (this: SHDocVw.ShellBrowserWindow, parameter: { readonly pDispWindow: any }) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "ClientToHostWindow",
        argNames: ["CX", "CY"],
        handler: (this: SHDocVw.ShellBrowserWindow, parameter: { CX: number; CY: number }) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "CommandStateChange",
        argNames: ["Command", "Enable"],
        handler: (
            this: SHDocVw.ShellBrowserWindow,
            parameter: { readonly Command: number; readonly Enable: boolean },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "DocumentComplete" | "NavigateComplete2",
        argNames: ["pDisp", "URL"],
        handler: (
            this: SHDocVw.ShellBrowserWindow,
            parameter: { readonly pDisp: any; readonly URL: any },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "FileDownload",
        argNames: ["ActiveDocument", "Cancel"],
        handler: (
            this: SHDocVw.ShellBrowserWindow,
            parameter: { readonly ActiveDocument: boolean; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "NavigateError",
        argNames: ["pDisp", "URL", "Frame", "StatusCode", "Cancel"],
        handler: (
            this: SHDocVw.ShellBrowserWindow,
            parameter: {
                readonly pDisp: any;
                readonly URL: any;
                readonly Frame: any;
                readonly StatusCode: any;
                Cancel: boolean;
            },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "NewProcess",
        argNames: ["lCauseFlag", "pWB2", "Cancel"],
        handler: (
            this: SHDocVw.ShellBrowserWindow,
            parameter: { readonly lCauseFlag: number; readonly pWB2: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "NewWindow2",
        argNames: ["ppDisp", "Cancel"],
        handler: (this: SHDocVw.ShellBrowserWindow, parameter: { ppDisp: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "NewWindow3",
        argNames: ["ppDisp", "Cancel", "dwFlags", "bstrUrlContext", "bstrUrl"],
        handler: (
            this: SHDocVw.ShellBrowserWindow,
            parameter: {
                ppDisp: any;
                Cancel: boolean;
                readonly dwFlags: number;
                readonly bstrUrlContext: string;
                readonly bstrUrl: string;
            },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "OnFullScreen",
        argNames: ["FullScreen"],
        handler: (this: SHDocVw.ShellBrowserWindow, parameter: { readonly FullScreen: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "OnMenuBar",
        argNames: ["MenuBar"],
        handler: (this: SHDocVw.ShellBrowserWindow, parameter: { readonly MenuBar: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "OnStatusBar",
        argNames: ["StatusBar"],
        handler: (this: SHDocVw.ShellBrowserWindow, parameter: { readonly StatusBar: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "OnTheaterMode",
        argNames: ["TheaterMode"],
        handler: (this: SHDocVw.ShellBrowserWindow, parameter: { readonly TheaterMode: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "OnToolBar",
        argNames: ["ToolBar"],
        handler: (this: SHDocVw.ShellBrowserWindow, parameter: { readonly ToolBar: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "OnVisible",
        argNames: ["Visible"],
        handler: (this: SHDocVw.ShellBrowserWindow, parameter: { readonly Visible: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "PrintTemplateInstantiation" | "PrintTemplateTeardown",
        argNames: ["pDisp"],
        handler: (
            this: SHDocVw.ShellBrowserWindow,
            parameter: { readonly pDisp: any },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "PrivacyImpactedStateChange",
        argNames: ["bImpacted"],
        handler: (
            this: SHDocVw.ShellBrowserWindow,
            parameter: { readonly bImpacted: boolean },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "ProgressChange",
        argNames: ["Progress", "ProgressMax"],
        handler: (
            this: SHDocVw.ShellBrowserWindow,
            parameter: { readonly Progress: number; readonly ProgressMax: number },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "PropertyChange",
        argNames: ["szProperty"],
        handler: (this: SHDocVw.ShellBrowserWindow, parameter: { readonly szProperty: string }) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "RedirectXDomainBlocked",
        argNames: ["pDisp", "StartURL", "RedirectURL", "Frame", "StatusCode"],
        handler: (this: SHDocVw.ShellBrowserWindow, parameter: {
            readonly pDisp: any;
            readonly StartURL: any;
            readonly RedirectURL: any;
            readonly Frame: any;
            readonly StatusCode: any;
        }) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "SetPhishingFilterStatus",
        argNames: ["PhishingFilterStatus"],
        handler: (
            this: SHDocVw.ShellBrowserWindow,
            parameter: { readonly PhishingFilterStatus: number },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "SetSecureLockIcon",
        argNames: ["SecureLockIcon"],
        handler: (
            this: SHDocVw.ShellBrowserWindow,
            parameter: { readonly SecureLockIcon: number },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "StatusTextChange" | "TitleChange",
        argNames: ["Text"],
        handler: (this: SHDocVw.ShellBrowserWindow, parameter: { readonly Text: string }) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "ThirdPartyUrlBlocked",
        argNames: ["URL", "dwCount"],
        handler: (
            this: SHDocVw.ShellBrowserWindow,
            parameter: { readonly URL: any; readonly dwCount: number },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "UpdatePageStatus",
        argNames: ["pDisp", "nPage", "fDone"],
        handler: (
            this: SHDocVw.ShellBrowserWindow,
            parameter: { readonly pDisp: any; readonly nPage: any; readonly fDone: any },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "WebWorkerFinsihed",
        argNames: ["dwUniqueID"],
        handler: (this: SHDocVw.ShellBrowserWindow, parameter: { readonly dwUniqueID: number }) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "WebWorkerStarted",
        argNames: ["dwUniqueID", "bstrWorkerLabel"],
        handler: (
            this: SHDocVw.ShellBrowserWindow,
            parameter: { readonly dwUniqueID: number; readonly bstrWorkerLabel: string },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "WindowClosing",
        argNames: ["IsChildWindow", "Cancel"],
        handler: (
            this: SHDocVw.ShellBrowserWindow,
            parameter: { readonly IsChildWindow: boolean; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "WindowSetHeight",
        argNames: ["Height"],
        handler: (this: SHDocVw.ShellBrowserWindow, parameter: { readonly Height: number }) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "WindowSetLeft",
        argNames: ["Left"],
        handler: (this: SHDocVw.ShellBrowserWindow, parameter: { readonly Left: number }) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "WindowSetResizable",
        argNames: ["Resizable"],
        handler: (this: SHDocVw.ShellBrowserWindow, parameter: { readonly Resizable: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "WindowSetTop",
        argNames: ["Top"],
        handler: (this: SHDocVw.ShellBrowserWindow, parameter: { readonly Top: number }) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "WindowSetWidth",
        argNames: ["Width"],
        handler: (this: SHDocVw.ShellBrowserWindow, parameter: { readonly Width: number }) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "WindowStateChanged",
        argNames: ["dwWindowStateFlags", "dwValidFlagsMask"],
        handler: (
            this: SHDocVw.ShellBrowserWindow,
            parameter: { readonly dwWindowStateFlags: number; readonly dwValidFlagsMask: number },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.ShellNameSpace,
        event: "FavoritesSelectionChange",
        argNames: SHDocVw.EventHelperTypes.ShellNameSpace_FavoritesSelectionChange_ArgNames,
        handler: (
            this: SHDocVw.ShellNameSpace,
            parameter: SHDocVw.EventHelperTypes.ShellNameSpace_FavoritesSelectionChange_Parameter,
        ) => void,
    ): void;
    on(
        obj: SHDocVw.ShellWindows,
        event: "WindowRegistered" | "WindowRevoked",
        argNames: ["lCookie"],
        handler: (this: SHDocVw.ShellWindows, parameter: { readonly lCookie: number }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "BeforeNavigate2",
        argNames: SHDocVw.EventHelperTypes.WebBrowser_BeforeNavigate2_ArgNames,
        handler: (
            this: SHDocVw.WebBrowser,
            parameter: SHDocVw.EventHelperTypes.WebBrowser_BeforeNavigate2_Parameter,
        ) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "BeforeScriptExecute",
        argNames: ["pDispWindow"],
        handler: (this: SHDocVw.WebBrowser, parameter: { readonly pDispWindow: any }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "ClientToHostWindow",
        argNames: ["CX", "CY"],
        handler: (this: SHDocVw.WebBrowser, parameter: { CX: number; CY: number }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "CommandStateChange",
        argNames: ["Command", "Enable"],
        handler: (
            this: SHDocVw.WebBrowser,
            parameter: { readonly Command: number; readonly Enable: boolean },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "DocumentComplete" | "NavigateComplete2",
        argNames: ["pDisp", "URL"],
        handler: (
            this: SHDocVw.WebBrowser,
            parameter: { readonly pDisp: any; readonly URL: any },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "FileDownload",
        argNames: ["ActiveDocument", "Cancel"],
        handler: (
            this: SHDocVw.WebBrowser,
            parameter: { readonly ActiveDocument: boolean; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "NavigateError",
        argNames: ["pDisp", "URL", "Frame", "StatusCode", "Cancel"],
        handler: (
            this: SHDocVw.WebBrowser,
            parameter: {
                readonly pDisp: any;
                readonly URL: any;
                readonly Frame: any;
                readonly StatusCode: any;
                Cancel: boolean;
            },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "NewProcess",
        argNames: ["lCauseFlag", "pWB2", "Cancel"],
        handler: (
            this: SHDocVw.WebBrowser,
            parameter: { readonly lCauseFlag: number; readonly pWB2: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "NewWindow2",
        argNames: ["ppDisp", "Cancel"],
        handler: (this: SHDocVw.WebBrowser, parameter: { ppDisp: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "NewWindow3",
        argNames: ["ppDisp", "Cancel", "dwFlags", "bstrUrlContext", "bstrUrl"],
        handler: (
            this: SHDocVw.WebBrowser,
            parameter: {
                ppDisp: any;
                Cancel: boolean;
                readonly dwFlags: number;
                readonly bstrUrlContext: string;
                readonly bstrUrl: string;
            },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "OnFullScreen",
        argNames: ["FullScreen"],
        handler: (this: SHDocVw.WebBrowser, parameter: { readonly FullScreen: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "OnMenuBar",
        argNames: ["MenuBar"],
        handler: (this: SHDocVw.WebBrowser, parameter: { readonly MenuBar: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "OnStatusBar",
        argNames: ["StatusBar"],
        handler: (this: SHDocVw.WebBrowser, parameter: { readonly StatusBar: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "OnTheaterMode",
        argNames: ["TheaterMode"],
        handler: (this: SHDocVw.WebBrowser, parameter: { readonly TheaterMode: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "OnToolBar",
        argNames: ["ToolBar"],
        handler: (this: SHDocVw.WebBrowser, parameter: { readonly ToolBar: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "OnVisible",
        argNames: ["Visible"],
        handler: (this: SHDocVw.WebBrowser, parameter: { readonly Visible: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "PrintTemplateInstantiation" | "PrintTemplateTeardown",
        argNames: ["pDisp"],
        handler: (
            this: SHDocVw.WebBrowser,
            parameter: { readonly pDisp: any },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "PrivacyImpactedStateChange",
        argNames: ["bImpacted"],
        handler: (this: SHDocVw.WebBrowser, parameter: { readonly bImpacted: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "ProgressChange",
        argNames: ["Progress", "ProgressMax"],
        handler: (
            this: SHDocVw.WebBrowser,
            parameter: { readonly Progress: number; readonly ProgressMax: number },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "PropertyChange",
        argNames: ["szProperty"],
        handler: (this: SHDocVw.WebBrowser, parameter: { readonly szProperty: string }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "RedirectXDomainBlocked",
        argNames: ["pDisp", "StartURL", "RedirectURL", "Frame", "StatusCode"],
        handler: (
            this: SHDocVw.WebBrowser,
            parameter: {
                readonly pDisp: any;
                readonly StartURL: any;
                readonly RedirectURL: any;
                readonly Frame: any;
                readonly StatusCode: any;
            },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "SetPhishingFilterStatus",
        argNames: ["PhishingFilterStatus"],
        handler: (
            this: SHDocVw.WebBrowser,
            parameter: { readonly PhishingFilterStatus: number },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "SetSecureLockIcon",
        argNames: ["SecureLockIcon"],
        handler: (this: SHDocVw.WebBrowser, parameter: { readonly SecureLockIcon: number }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "StatusTextChange" | "TitleChange",
        argNames: ["Text"],
        handler: (this: SHDocVw.WebBrowser, parameter: { readonly Text: string }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "ThirdPartyUrlBlocked",
        argNames: ["URL", "dwCount"],
        handler: (
            this: SHDocVw.WebBrowser,
            parameter: { readonly URL: any; readonly dwCount: number },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "UpdatePageStatus",
        argNames: ["pDisp", "nPage", "fDone"],
        handler: (
            this: SHDocVw.WebBrowser,
            parameter: { readonly pDisp: any; readonly nPage: any; readonly fDone: any },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "WebWorkerFinsihed",
        argNames: ["dwUniqueID"],
        handler: (this: SHDocVw.WebBrowser, parameter: { readonly dwUniqueID: number }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "WebWorkerStarted",
        argNames: ["dwUniqueID", "bstrWorkerLabel"],
        handler: (
            this: SHDocVw.WebBrowser,
            parameter: { readonly dwUniqueID: number; readonly bstrWorkerLabel: string },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "WindowClosing",
        argNames: ["IsChildWindow", "Cancel"],
        handler: (
            this: SHDocVw.WebBrowser,
            parameter: { readonly IsChildWindow: boolean; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "WindowSetHeight",
        argNames: ["Height"],
        handler: (this: SHDocVw.WebBrowser, parameter: { readonly Height: number }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "WindowSetLeft",
        argNames: ["Left"],
        handler: (this: SHDocVw.WebBrowser, parameter: { readonly Left: number }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "WindowSetResizable",
        argNames: ["Resizable"],
        handler: (this: SHDocVw.WebBrowser, parameter: { readonly Resizable: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "WindowSetTop",
        argNames: ["Top"],
        handler: (this: SHDocVw.WebBrowser, parameter: { readonly Top: number }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "WindowSetWidth",
        argNames: ["Width"],
        handler: (this: SHDocVw.WebBrowser, parameter: { readonly Width: number }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "WindowStateChanged",
        argNames: ["dwWindowStateFlags", "dwValidFlagsMask"],
        handler: (
            this: SHDocVw.WebBrowser,
            parameter: { readonly dwWindowStateFlags: number; readonly dwValidFlagsMask: number },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser_V1,
        event: "BeforeNavigate",
        argNames: SHDocVw.EventHelperTypes.WebBrowser_V1_BeforeNavigate_ArgNames,
        handler: (
            this: SHDocVw.WebBrowser_V1,
            parameter: SHDocVw.EventHelperTypes.WebBrowser_V1_BeforeNavigate_Parameter,
        ) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser_V1,
        event: "CommandStateChange",
        argNames: ["Command", "Enable"],
        handler: (
            this: SHDocVw.WebBrowser_V1,
            parameter: { readonly Command: number; readonly Enable: boolean },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser_V1,
        event: "FrameBeforeNavigate",
        argNames: SHDocVw.EventHelperTypes.WebBrowser_V1_FrameBeforeNavigate_ArgNames,
        handler: (
            this: SHDocVw.WebBrowser_V1,
            parameter: SHDocVw.EventHelperTypes.WebBrowser_V1_FrameBeforeNavigate_Parameter,
        ) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser_V1,
        event: "FrameNavigateComplete" | "NavigateComplete",
        argNames: ["URL"],
        handler: (this: SHDocVw.WebBrowser_V1, parameter: { readonly URL: string }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser_V1,
        event: "FrameNewWindow",
        argNames: SHDocVw.EventHelperTypes.WebBrowser_V1_FrameNewWindow_ArgNames,
        handler: (
            this: SHDocVw.WebBrowser_V1,
            parameter: SHDocVw.EventHelperTypes.WebBrowser_V1_FrameNewWindow_Parameter,
        ) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser_V1,
        event: "NewWindow",
        argNames: SHDocVw.EventHelperTypes.WebBrowser_V1_NewWindow_ArgNames,
        handler: (
            this: SHDocVw.WebBrowser_V1,
            parameter: SHDocVw.EventHelperTypes.WebBrowser_V1_NewWindow_Parameter,
        ) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser_V1,
        event: "ProgressChange",
        argNames: ["Progress", "ProgressMax"],
        handler: (
            this: SHDocVw.WebBrowser_V1,
            parameter: { readonly Progress: number; readonly ProgressMax: number },
        ) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser_V1,
        event: "PropertyChange",
        argNames: ["Property"],
        handler: (this: SHDocVw.WebBrowser_V1, parameter: { readonly Property: string }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser_V1,
        event: "Quit",
        argNames: ["Cancel"],
        handler: (this: SHDocVw.WebBrowser_V1, parameter: { Cancel: boolean }) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser_V1,
        event: "StatusTextChange" | "TitleChange",
        argNames: ["Text"],
        handler: (this: SHDocVw.WebBrowser_V1, parameter: { readonly Text: string }) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorer,
        event: "DownloadBegin" | "DownloadComplete" | "OnQuit",
        handler: (this: SHDocVw.InternetExplorer, parameter: {}) => void,
    ): void;
    on(
        obj: SHDocVw.InternetExplorerMedium,
        event: "DownloadBegin" | "DownloadComplete" | "OnQuit",
        handler: (this: SHDocVw.InternetExplorerMedium, parameter: {}) => void,
    ): void;
    on(
        obj: SHDocVw.ShellBrowserWindow,
        event: "DownloadBegin" | "DownloadComplete" | "OnQuit",
        handler: (this: SHDocVw.ShellBrowserWindow, parameter: {}) => void,
    ): void;
    on(
        obj: SHDocVw.ShellNameSpace,
        event: "DoubleClick" | "Initialized" | "SelectionChange",
        handler: (this: SHDocVw.ShellNameSpace, parameter: {}) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser,
        event: "DownloadBegin" | "DownloadComplete" | "OnQuit",
        handler: (this: SHDocVw.WebBrowser, parameter: {}) => void,
    ): void;
    on(
        obj: SHDocVw.WebBrowser_V1,
        event: "DownloadBegin" | "DownloadComplete" | "WindowActivate" | "WindowMove" | "WindowResize",
        handler: (this: SHDocVw.WebBrowser_V1, parameter: {}) => void,
    ): void;
}

interface ActiveXObjectNameMap {
    "InternetExplorer.Application": SHDocVw.InternetExplorer;
    "Shell.Explorer": SHDocVw.WebBrowser;
    "Shell.UIHelper": SHDocVw.ShellUIHelper;
    "ShellNameSpace.ShellNameSpace": SHDocVw.ShellNameSpace;
}
