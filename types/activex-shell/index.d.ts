// Type definitions for Microsoft Shell Controls And Automation - Shell32 1.0
// Project: https://msdn.microsoft.com/en-us/library/windows/desktop/bb773938(v=vs.85).aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="activex-shdocvw" />

declare namespace Shell32 {
    // tslint:disable-next-line no-const-enum
    const enum BrowseInfoFlags {
        /**
         * Allow folder junctions such as a library or a compressed file with a .zip file name extension to be browsed.
         *
         * _Windows 7 and later._
         */
        BIF_BROWSEFILEJUNCTIONS = 0x00010000,

        /** Only return computers. If the user selects anything other than a computer, the **OK** button is grayed. */
        BIF_BROWSEFORCOMPUTER = 0x00001000,

        /**
         * Only allow the selection of printers. If the user selects anything other than a printer, the **OK** button is grayed.
         *
         * In Windows XP and later systems, the best practice is to use a Windows XP-style dialog, setting the root of the dialog to the **Printers and Faxes** folder (`CSIDL_PRINTERS`).
         */
        BIF_BROWSEFORPRINTER = 0x00002000,

        /**
         * The browse dialog box displays files as well as folders.
         *
         * _[Version 4.7.1](https://msdn.microsoft.com/en-us/library/windows/desktop/bb776779.aspx)_
         */
        BIF_BROWSEINCLUDEFILES = 0x00004000,

        /**
         * The browse dialog box can display URLs. The `BIF_USENEWUI` and `BIF_BROWSEINCLUDEFILES` flags must also be set. If any of these three flags are not set, the browser dialog box rejects URLs.
         * Even when these flags are set, the browse dialog box displays URLs only if the folder that contains the selected item supports URLs.
         *
         * When the folder's [IShellFolder::GetAttributesOf](https://msdn.microsoft.com/en-us/library/windows/desktop/bb775068.aspx) method is called to request the selected item's attributes, the
         * folder must set the `SFGAO_FOLDER` attribute flag. Otherwise, the browse dialog box will not display the URL.
         *
         * _[Version 5.0](https://msdn.microsoft.com/en-us/library/windows/desktop/bb776779.aspx)_
         */
        BIF_BROWSEINCLUDEURLS = 0x00000080,

        /** Do not include network folders below the domain level in the dialog box's tree view control. */
        BIF_DONTGOBELOWDOMAIN = 0x00000002,

        /**
         * Include an edit control in the browse dialog box that allows the user to type the name of an item.
         *
         * _[Version 4.7.1](https://msdn.microsoft.com/en-us/library/windows/desktop/bb776779.aspx)_
         */
        BIF_EDITBOX = 0x00000010,

        /**
         * Use the new user interface. Setting this flag provides the user with a larger dialog box that can be resized. The dialog box has several new capabilities, including: drag-and-drop
         * capability within the dialog box, reordering, shortcut menus, new folders, delete, and other shortcut menu commands.
         *
         * _[Version 5.0](https://msdn.microsoft.com/en-us/library/windows/desktop/bb776779.aspx)_
         */
        BIF_NEWDIALOGSTYLE = 0x00000040,

        /**
         * Do not include the **New Folder** button in the browse dialog box.
         *
         * _[Version 6.0](https://msdn.microsoft.com/en-us/library/windows/desktop/bb776779.aspx)_
         */
        BIF_NONEWFOLDERBUTTON = 0x00000200,

        /**
         * When the selected item is a shortcut, return the PIDL of the shortcut itself rather than its target.
         *
         * _[Version 6.0](https://msdn.microsoft.com/en-us/library/windows/desktop/bb776779.aspx)_
         */
        BIF_NOTRANSLATETARGETS = 0x00000400,

        /**
         * Only return file system ancestors. An ancestor is a subfolder that is beneath the root folder in the namespace hierarchy. If the user selects an ancestor of the root folder that is not
         * part of the file system, the **OK** button is grayed.
         */
        BIF_RETURNFSANCESTORS = 0x00000008,

        /**
         * Only return file system directories. If the user selects folders that are not part of the file system, the **OK** button is grayed.
         *
         * **Note** The **OK** button remains enabled for `\\server` items, as well as `\\server\share` and directory items. However, if the user selects a `\\server` item, passing the PIDL
         * returned by [SHBrowseForFolder](https://msdn.microsoft.com/en-us/library/windows/desktop/bb762115.aspx) to
         * [SHGetPathFromIDList](https://msdn.microsoft.com/en-us/library/windows/desktop/bb762194.aspx) fails.
         */
        BIF_RETURNONLYFSDIRS = 0x00000001,

        /**
         * The browse dialog box can display sharable resources on remote systems. This is intended for applications that want to expose remote shares on a local system. The BIF_NEWDIALOGSTYLE flag
         * must also be set.
         *
         * _[Version 5.0](https://msdn.microsoft.com/en-us/library/windows/desktop/bb776779.aspx)_
         */
        BIF_SHAREABLE = 0x00008000,

        /**
         * Include a status area in the dialog box. The callback function can set the status text by sending messages to the dialog box. This flag is not supported when BIF_NEWDIALOGSTYLE
         * is specified.
         */
        BIF_STATUSTEXT = 0x00000004,

        /**
         * When combined with `BIF_NEWDIALOGSTYLE`, adds a usage hint to the dialog box, in place of the edit box. `BIF_EDITBOX` overrides this flag.
         *
         * _[Version 6.0](https://msdn.microsoft.com/en-us/library/windows/desktop/bb776779.aspx)_
         */
        BIF_UAHINT = 0x00000100,

        /**
         * Use the new user interface, including an edit box. This flag is equivalent to `BIF_EDITBOX | BIF_NEWDIALOGSTYLE`.
         *
         * _[Version 5.0](https://msdn.microsoft.com/en-us/library/windows/desktop/bb776779.aspx)_
         */
        BIF_USENEWUI = 0x00000090,

        /**
         * If the user types an invalid name into the edit box, the browse dialog box calls the application's
         * [BrowseCallbackProc](https://msdn.microsoft.com/en-us/library/windows/desktop/bb762598.aspx) with the **BFFM_VALIDATEFAILED** message. This flag is ignored if BIF_EDITBOX is not specified.
         *
         * _[Version 4.71](https://msdn.microsoft.com/en-us/library/windows/desktop/bb776779)_
         */
        BIF_VALIDATE = 0x00000020,
    }

    // tslint:disable-next-line no-const-enum
    const enum ExplorerBarCLSID {
        Favorites = '{EFA24E61-B078-11d0-89E4-00C04FC9E26E}',
        Folders = '{EFA24E64-B078-11d0-89E4-00C04FC9E26E}',
        History = '{EFA24E62-B078-11d0-89E4-00C04FC9E26E}',
        Search = '{30D02401-6A81-11d0-8274-00C04FD5AE38}',
    }

    // tslint:disable-next-line no-const-enum
    const enum FileOperationFlag {
        /** Preserve undo information, if possible. */
        FOF_ALLOWUNDO = 64,

        /** Perform the operation on files only if a wildcard file name (*.*) is specified. */
        FOF_FILESONLY = 128,

        /** Respond with "Yes to All" for any dialog box that is displayed. */
        FOF_NOCONFIRMATION = 16,

        /** Do not confirm the creation of a new directory if the operation requires one to be created. */
        FOF_NOCONFIRMMKDIR = 512,

        /**
         * Do not copy connected files as a group. Only copy the specified files.
         *
         * _[Version 5.0](https://msdn.microsoft.com/en-us/library/windows/desktop/bb776779.aspx)_
         */
        FOF_NO_CONNECTED_ELEMENTS = 8192,

        /**
         * Do not copy the security attributes of the file.
         *
         * _[Version 4.7.1](https://msdn.microsoft.com/en-us/library/windows/desktop/bb776779.aspx)_
         */
        FOF_NOCOPYSECURITYATTRIBS = 2048,

        /** Do not display a user interface if an error occurs. */
        FOF_NOERRORUI = 1024,

        /** Only operate in the local directory. Do not operate recursively into subdirectories. */
        FOF_NORECURSION = 4096,

        /** Give the file being operated on a new name in a move, copy, or rename operation if a file with the target name already exists. */
        FOF_RENAMEONCOLLISION = 8,

        /** Do not display a progress dialog box. */
        FOF_SILENT = 4,

        /** Display a progress dialog box but do not show the file names. */
        FOF_SIMPLEPROGRESS = 256,
    }

    // tslint:disable-next-line no-const-enum
    const enum FileSystemDetails {
        Name = 0,
        Size = 1,
        Type = 2,
        LastModified = 3,
        Attributes = 4,
        InfoTip = -1,
    }

    // tslint:disable-next-line no-const-enum
    const enum HotkeyModifiers {
        SHIFT = 1,
        CTRL = 2,
        ALT = 4,
        Extended = 8
    }

    // tslint:disable-next-line no-const-enum
    const enum LinkShowWindowState {
        /** Activates and displays a window. If the window is minimized or maximized, the system restores it to its original size and position. */
        Normal = 1,

        /** Activates the window and displays it as a minimized window. */
        Minimized = 2,

        /** Activates the window and displays it as a maximized window. */
        Maximized = 3
    }

    /** Constants for Folder2.OfflineStatus */
    // tslint:disable-next-line no-const-enum
    const enum OfflineFolderStatus {
        OFS_DIRTYCACHE = 3,
        OFS_INACTIVE = -1,
        OFS_OFFLINE = 1,
        OFS_ONLINE = 0,
        OFS_SERVERBACK = 2,
    }

    // tslint:disable-next-line no-const-enum
    const enum ShellFolderEnumerationFlags {
        /** **Windows 7 and later** The calling application is checking for the existence of child items in the folder. */
        SHCONTF_CHECKING_FOR_CHILDREN = 0x00010,

        /** Include items that are folders in the enumeration. */
        SHCONTF_FOLDERS = 0x00020,

        /** Include items that are not folders in the enumeration. */
        SHCONTF_NONFOLDERS = 0x00040,

        /** Include hidden items in the enumeration. This does not include hidden system items. (To include hidden system items, use SHCONTF_INCLUDESUPERHIDDEN.) */
        SHCONTF_INCLUDEHIDDEN = 0x00080,

        /** The calling application is looking for printer objects. */
        SHCONTF_NETPRINTERSRCH = 0x00200,

        /** The calling application is looking for resources that can be shared. */
        SHCONTF_SHAREABLE = 0x00400,

        /** Include items with accessible storage and their ancestors, including hidden items. */
        SHCONTF_STORAGE = 0x00800,

        /** **Windows 7 and later**. Child folders should provide a navigation enumeration. */
        SHCONTF_NAVIGATION_ENUM = 0x01000,

        /** **Windows Vista and later**. The calling application is looking for resources that can be enumerated quickly. */
        SHCONTF_FASTITEMS = 0x02000,

        /** **Windows Vista and later**. Enumerate items as a simple list even if the folder itself is not structured in that way. */
        SHCONTF_FLATLIST = 0x04000,

        /**
         * **Windows Vista and later**. The calling application is monitoring for change notifications.This means that the enumerator does not have to return all results.
         * Items can be reported through change notifications.
         */
        SHCONTF_ENABLE_ASYNC = 0x08000,

        /**
         * **Windows 7 and later**. Include hidden system items in the enumeration. This value does not include hidden non-system items.
         * (To include hidden non-system items, use SHCONTF_INCLUDEHIDDEN.)
         */
        SHCONTF_INCLUDESUPERHIDDEN = 0x10000,
    }

    // tslint:disable-next-line no-const-enum
    const enum ShellFolderViewOptions {
        /** The **Show All Files** option is enabled. */
        SFVVO_SHOWALLOBJECTS = 0x00000001,

        /** The **Hide extensions for known file types** option is disabled. */
        SFVVO_SHOWEXTENSIONS = 0x00000002,

        /** The **Display Compressed Files and Folders with Alternate Color** option is enabled. */
        SFVVO_SHOWCOMPCOLOR = 0x00000008,

        /** The **Do Not Show Hidden Files** option is enabled. */
        SFVVO_SHOWSYSFILES = 0x00000020,

        /** The **Classic Style** option is enabled. */
        SFVVO_WIN95CLASSIC = 0x00000040,

        /** The **Double-Click to Open an Item** option is enabled. */
        SFVVO_DOUBLECLICKINWEBVIEW = 0x00000080,

        /** The **Active Desktop – View as Web Page** option is enabled. */
        SFVVO_DESKTOPHTML = 0x00000200
    }

    // tslint:disable-next-line no-const-enum
    const enum ShellFolderViewSelectItem {
        Deselect = 0,
        Select = 1,
        EditMode = 3,
        DeselectAllButThis = 4,
        ScrollIntoView = 8,
        Focus = 16
    }

    // tslint:disable-next-line no-const-enum
    const enum ShellLinkResolveFlags {
        /**
         * Do not display a dialog box if the link cannot be resolved. When this flag is set, the high-order word of _fFlags_ specifies a time-out duration, in milliseconds.
         * The method returns if the link cannot be resolved within the time-out duration. If the high-order word is set to zero, the time-out duration defaults to 3000 milliseconds (3 seconds).
         */
        NoUI = 1,

        /** If the link has changed, update its path and list of identifiers. */
        Update = 4,

        /** Do not update the link information. */
        NoUpdate = 8,

        /** Do not execute the search heuristics. */
        NoSearch = 16,

        /** Do not use distributed link tracking. */
        NoTrack = 32,

        /**
         * Disable distributed link tracking. By default, distributed link tracking tracks removable media across multiple devices based on the volume name.
         * It also uses the UNC path to track remote file systems whose drive letter has changed. Setting this flag disables both types of tracking.
         */
        NoLinkInfo = 64,

        /** Call the Windows Installer. */
        InvokeMSI = 128
    }

    // tslint:disable-next-line no-const-enum
    const enum SettingKey {
        /**
         * The state of the **Use check boxes to select items** option. This option is enabled automatically when the system has a pen input device configured.
         *
         * _Windows Vista and later_
         */
        SSF_AUTOCHECKSELECT = 0x00800000,

        /** Not used. */
        SSF_DESKTOPHTML = 0x00000200,

        /** The state of the **Allow all uppercase names** option. As of Windows Vista, this folder option is no longer available. */
        SSF_DONTPRETTYPATH = 0x00000800,

        /** The state of the **Double-click to open an item (single-click to select)** option. */
        SSF_DOUBLECLICKINWEBVIEW = 0x00000080,

        /** Not used. */
        SSF_FILTER = 0x00010000,

        /** Not used. */
        SSF_HIDDENFILEEXTS = 0x00000004,

        /** The state of icon display in the Windows Explorer list view. If this option is active, no icons are displayed in the list view. */
        SSF_HIDEICONS = 0x00004000,

        /**
         * The state of display name display in the Windows Explorer list view. If this option is active, icons are displayed in the list view, but display names are not.
         *
         * _Windows Vista and later_
         */
        SSF_ICONSONLY = 0x01000000,

        /** The state of the **Show map network drive button in toolbar** option. As of Windows Vista, this option is no longer available. */
        SSF_MAPNETDRVBUTTON = 0x00001000,

        /** The state of the Recycle Bin's **Display delete confirmation dialog** option. */
        SSF_NOCONFIRMRECYCLE = 0x00008000,

        /** The state of the **Automatically search for network folders and printers** option. As of Windows Vista, this option is no longer available. */
        SSF_NONETCRAWLING = 0x00100000,

        /** The state of the **Launch folder windows in a separate process** option. */
        SSF_SEPPROCESS = 0x00080000,

        /** Not used. */
        SSF_SERVERADMINUI = 0x00000004,

        /** The state of the **Hidden files and folders** option. */
        SSF_SHOWALLOBJECTS = 0x00000001,

        /** The state of the **Show File Attributes in Detail View** option. As of Windows Vista, this option is no longer available. */
        SSF_SHOWATTRIBCOL = 0x00000100,

        /** The state of the **Show encrypted or compressed NTFS files in color** option. */
        SSF_SHOWCOMPCOLOR = 0x00000008,

        /** The state of the **Hide extensions for known file types** option. */
        SSF_SHOWEXTENSIONS = 0x00000002,

        /** The state of the **Show pop-up description for folder and desktop items** option. */
        SSF_SHOWINFOTIP = 0x00002000,

        /** Not used. */
        SSF_SHOWSTARTPAGE = 0x00400000,

        /** The state of the **Hide protected operating system files** option. */
        SSF_SHOWSUPERHIDDEN = 0x00040000,

        /**
         * The state of the **Hidden files and folders** option. In Windows Vista and later, this is equivalent to `SSF_SHOWALLOBJECTS`. In versions of Windows before Windows Vista, this value
         * referred to the state of the **Do not show hidden files and folders** option.
         */
        SSF_SHOWSYSFILES = 0x00000020,

        /**
         * The state of the **Display file icon on thumbnails** option. If this option is active, a file type overlay is applied when a file supplies a thumbnail representation.
         *
         * _Windows Vista and later_
         */
        SSF_SHOWTYPEOVERLAY = 0x02000000,

        /** Not used. */
        SSF_SORTCOLUMNS = 0x00000010,

        /** The state of the Windows XP display option, which selects between the Windows XP style and the classic style. As of Windows Vista, this option is no longer available. */
        SSF_STARTPANELON = 0x00200000,

        /** The state of the **Display as a web view option**. As of Windows Vista, this option is no longer available. */
        SSF_WEBVIEW = 0x00020000,

        /** The state of the **Classic Style** option. As of Windows Vista, this option is no longer available. */
        SSF_WIN95CLASSIC = 0x00000400,
    }

    // tslint:disable-next-line no-const-enum
    const enum ShellExecuteShow {
        /** Open the application with a hidden window. */
        Hidden = 0,

        /** Open the application with a normal window. If the window is minimized or maximized, the system restores it to its original size and position. */
        Normal = 1,

        /** Open the application with a minimized window. */
        Minimized = 2,

        /** Open the application with a maximized window. */
        Maximized = 3,

        /** Open the application with its window at its most recent size and position. The active window remains active. */
        Last = 4,

        /** Open the application with its window at its current size and position. */
        Current = 5,

        /** Open the application with a minimized window. The active window remains active. */
        MinimizedNotActivated = 7,

        /** Open the application with its window in the default state specified by the application. */
        Application = 10,
    }

    /** Constants for Special Folders for open/Explore */
    // tslint:disable-next-line no-const-enum
    const enum ShellSpecialFolderConstants {
        ssfALTSTARTUP = 29,
        ssfAPPDATA = 26,
        ssfBITBUCKET = 10,
        ssfCOMMONALTSTARTUP = 30,
        ssfCOMMONAPPDATA = 35,
        ssfCOMMONDESKTOPDIR = 25,
        ssfCOMMONFAVORITES = 31,
        ssfCOMMONPROGRAMS = 23,
        ssfCOMMONSTARTMENU = 22,
        ssfCOMMONSTARTUP = 24,
        ssfCONTROLS = 3,
        ssfCOOKIES = 33,
        ssfDESKTOP = 0,
        ssfDESKTOPDIRECTORY = 16,
        ssfDRIVES = 17,
        ssfFAVORITES = 6,
        ssfFONTS = 20,
        ssfHISTORY = 34,
        ssfINTERNETCACHE = 32,
        ssfLOCALAPPDATA = 28,
        ssfMYPICTURES = 39,
        ssfNETHOOD = 19,
        ssfNETWORK = 18,
        ssfPERSONAL = 5,
        ssfPRINTERS = 4,
        ssfPRINTHOOD = 27,
        ssfPROFILE = 40,
        ssfPROGRAMFILES = 38,
        ssfPROGRAMFILESx86 = 48,
        ssfPROGRAMS = 2,
        ssfRECENT = 8,
        ssfSENDTO = 9,
        ssfSTARTMENU = 11,
        ssfSTARTUP = 7,
        ssfSYSTEM = 37,
        ssfSYSTEMx86 = 41,
        ssfTEMPLATES = 21,
        ssfWINDOWS = 36,
    }

    /** FileSearchBand Class */
    class FileSearchBand {
        private 'Shell32.FileSearchBand_typekey': FileSearchBand;
        private constructor();

        /** Retrieve the file from which the search was restored. */
        readonly QueryFile: any;

        /** Get the search scope */
        readonly Scope: any;

        /** Retrieve the guid of the currently active search. */
        readonly SearchID: string;

        /** method SetFocus */
        SetFocus(): void;

        /** method SetSearchParameters */
        SetSearchParameters(pbstrSearchID: string, bNavToResults: boolean, pvarScope?: any, pvarQueryFile?: any): void;
    }

    /** Definition of interface Folder version 3 */
    class Folder3 {
        private 'Shell32.Folder3_typekey': Folder3;
        private constructor();

        /** Get Application object */
        readonly Application: any;

        /** Copy Items to this folder. */
        CopyHere(vItem: string | ShellFolderItem | FolderItems3, vOptions?: FileOperationFlag): void;

        /** Call this after the WebView barricade is dismissed by the user */
        DismissedWebViewBarricade(): void;

        /**
         * Get the details about an item.
         * @param vItem The item for which to retrieve the information.
         * @param iColumn An integer value that specifies the information to be retrieved. The information available for an item depends on the folder in which it is displayed. This value
         * corresponds to the zero-based column number that is displayed in a Shell view.
         */
        GetDetailsOf(vItem: ShellFolderItem, iColumn: number): string;

        /** Should the WebView barricade be shown? */
        readonly HaveToShowWebViewBarricade: boolean;

        /** The collection of Items in folder */
        Items(): FolderItems3;

        /** Move Items to this folder. */
        MoveHere(vItem: string | ShellFolderItem | FolderItems3, vOptions?: FileOperationFlag): void;

        /** Create a new sub folder in this folder. */
        NewFolder(bName: string): void;

        /** Offline status of the server? */
        readonly OfflineStatus: OfflineFolderStatus;

        /** Get Parent object */
        readonly ParentFolder: Folder3;

        /** Parse the name to get an item. */
        ParseName(bName: string): ShellFolderItem | null;

        /** Folder's FolderItem interface */
        readonly Self: ShellFolderItem;

        /** Ask if the WebView barricade should be shown or not */
        ShowWebViewBarricade: boolean;

        /** Synchronize all offline files */
        Synchronize(): void;

        /** Get the display name for the window */
        readonly Title: string;
    }

    /** Definition of interface FolderItems3 */
    class FolderItems3 {
        private 'Shell32.FolderItems3_typekey': FolderItems3;
        private constructor();

        /** Get Application object */
        readonly Application: any;

        /** Get count of items in the folder */
        readonly Count: number;

        /** Set a wildcard filter to apply to the items returned */
        Filter(grfFlags: ShellFolderEnumerationFlags, bstrFileSpec: string): void;

        /**
         * Executes a verb on a collection of `FolderItem` objects
         * @param vVerb String that corresponds to the command to be executed. If no verb is specified, the default verb is executed.
         * @param vArgs String with one or more arguments to the command specified by vVerb. The format of this string depends on the particular verb.
         */
        InvokeVerbEx(vVerb?: string, vArgs?: string): void;

        /** Return the figure for the given index */
        Item(index?: any): ShellFolderItem;

        /** Get the list of verbs common to all the items */
        readonly Verbs: FolderItemVerbs;
    }

    /** Definition of interface FolderItemVerb */
    class FolderItemVerb {
        private 'Shell32.FolderItemVerb_typekey': FolderItemVerb;
        private constructor();

        /** Execute the verb */
        DoIt(): void;

        /** Get display name for item */
        readonly Name: string;
    }

    /** Definition of interface FolderItemVerbs */
    class FolderItemVerbs {
        private 'Shell32.FolderItemVerbs_typekey': FolderItemVerbs;
        private constructor();

        /** Get count of open folder windows */
        readonly Count: number;

        /** Return the specified verb */
        Item(index?: any): FolderItemVerb;
    }

    /** Shell Object Type Information */
    class Shell {
        private 'Shell32.Shell_typekey': Shell;
        private constructor();

        /** Add an object to the Recent Docuements */
        AddToRecent(varFile: string | null, bstrCategory?: string): void;

        /** Get Application object */
        readonly Application: any;

        /** Browse the name space for a Folder */
        BrowseForFolder(Hwnd: number, Title: string, Options: number | BrowseInfoFlags, RootFolder?: string | ShellSpecialFolderConstants): Folder3;

        /** Determine if the current user can start/stop the named service. */
        CanStartStopService(ServiceName: string): boolean;

        /** Cascade Windows */
        CascadeWindows(): void;

        /*
         * Runs the specified Control Panel (*.cpl) application. If the application is already open, it will activate the running instance.
         *
         * **Note** As of Windows Vista, most Control Panel applications are Shell items and cannot be opened with this function. To open those Control Panel applications, pass the canonical name to
         * `control.exe`. For example:
         *
         *     `control.exe /name Microsoft.Personalization`
         */
        ControlPanelItem(bstrDir: string): void;

        /** Eject the pc */
        EjectPC(): void;

        /** Explore a folder */
        Explore(vDir: string | ShellSpecialFolderConstants): void;

        /**
         * Return explorer policy value
         *
         * The specified value name must be within the **HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer** subkey.
         * If the value name does not exist then the method returns null.
         */
        ExplorerPolicy(bstrPolicyName: string): any;

        /** Bring up the file run dialog box */
        FileRun(): void;

        /** Find a computer */
        FindComputer(): void;

        /** Find Files */
        FindFiles(): void;

        /** Find a Printer in the Directory Service */
        FindPrinter(Name?: string, location?: string, model?: string): void;

        /** Return shell global setting */
        GetSetting(lSetting: number | SettingKey): boolean;

        /**
         * `DirectoryServiceAvailable` -- Returns **true** if the directory service is available
         *
         * `IsOS_DomainMember` -- Returns **true** if the computer is a member of a domain (_Windows XP and later_)
         *
         * `IsOS_Personal` -- Returns **true** if the operating system is Windows XP Home Edition (_Windows XP only_)
         *
         * `IsOS_Professional` -- Returns **true** if the operating system is Windows XP Professional Edition (_Windows XP only_)
         */
        GetSystemInformation(Name: 'DirectoryServiceAvailable' | 'IsOS_DomainMember' | 'IsOS_Personal' | 'IsOS_Professional'): boolean;

        /**
         * `DoubleClickTime` -- The double-click time, in milliseconds
         *
         * `PhysicalMemoryInstalled` -- The amount of physical memory installed, in bytes
         *
         * `ProcessorArchitecture` -- The processor architecture. For details, see the discussion of the **wProcessorArchitecture** member of the
         * [`SYSTEM_INFO`](https://msdn.microsoft.com/en-us/library/windows/desktop/ms724958.aspx) structure
         *
         * `ProcessorLevel` -- The processor level. Returns 3, 4, or 5, for x386, x486, and Pentium-level processors, respectively (_Windows Vista and later_)
         *
         * `ProcessorSpeed` -- The processor speed, in megahertz (MHz)
         */
        GetSystemInformation(Name: 'DoubleClickTime' | 'PhysicalMemoryInstalled' | 'ProcessorArchitecture' | 'ProcessorLevel' | 'ProcessorSpeed'): number;

        /** Display shell help */
        Help(): void;

        /** get restriction settings */
        IsRestricted(Group: string, Restriction: string): number;

        /** Determine if a service is running by name. */
        IsServiceRunning(ServiceName: string): any;

        /** Minimize all windows */
        MinimizeAll(): void;

        /** Get special folder from ShellSpecialFolderConstants */
        NameSpace(vDir: string | ShellSpecialFolderConstants): Folder3 | null;

        /** Open a folder */
        Open(vDir: string | ShellSpecialFolderConstants): void;

        /** Get Parent object */
        readonly Parent: any;

        /** Refresh the menu */
        RefreshMenu(): void;

        /** Immersive Search */
        SearchCommand(): void;

        /**
         * Start a service by name, and optionally set it to autostart.
         *
         * The method returns `false` if the service has already been started. Before calling this method, you can call
         * [Shell.IsServiceRunning](https://msdn.microsoft.com/en-us/library/windows/desktop/gg537742.aspx) to ascertain the status of the service.
         */
        ServiceStart(ServiceName: string, Persistent?: boolean): boolean;

        /**
         * Stop a service by name, and optionally disable autostart.
         *
         * The method returns `false` if the service has already been stopped. Before calling this method, you can call
         * [Shell.IsServiceRunning](https://msdn.microsoft.com/en-us/library/windows/desktop/gg537742.aspx) to ascertain the status of the service.
         */
        ServiceStop(ServiceName: string, Persistent?: boolean): boolean;

        /** Displays the **Date and Time Properties** dialog box. */
        SetTime(): void;

        /**
         * Execute generic command
         * @param sFile A string that contains the name of the file on which `ShellExecute` will perform the action specified by `vOperation`.
         * @param [vArgs] A string that contains parameter values for the operation.
         * @param [vDir] The fully qualified path of the directory that contains the file specified by `sFile`. If this parameter is not specified, the current working directory is used.
         * @param [vOperation] The operation to be performed. This value is set to one of the verb strings that is supported by the file. If this parameter is not specified, the default operation is
         * performed.
         * @param [vShow] A recommendation as to how the application window should be displayed initially. The application can ignore this recommendation.
         */
        ShellExecute(File: string, vArgs?: string, vDir?: string, vOperation?: string, vShow?: ShellExecuteShow): void;

        /** Show/Hide browser bar. */
        ShowBrowserBar(bstrClsid: ExplorerBarCLSID, bShow: boolean): any;

        /** Exit Windows */
        ShutdownWindows(): void;

        /** Tile windows horizontally */
        TileHorizontally(): void;

        /** Tile windows vertically */
        TileVertically(): void;

        /** Raise/lower the desktop */
        ToggleDesktop(): void;

        /** Displays the **Taskbar and Start Menu Properties** dialog box. */
        TrayProperties(): void;

        /** Undo Minimize All */
        UndoMinimizeALL(): void;

        /** The collection of open folder windows */
        Windows(): ShellWindows;

        /** Displays the **Windows Security** dialog box. */
        WindowsSecurity(): void;

        /** Displays your open windows in a 3D stack that you can flip through. */
        WindowSwitcher(): void;
    }

    /** ShellDispatch Load in Shell Context */
    class ShellDispatchInproc {
        private 'Shell32.ShellDispatchInproc_typekey': ShellDispatchInproc;
        private constructor();
    }

    /** Shell Folder Item */
    class ShellFolderItem {
        private 'Shell32.ShellFolderItem_typekey': ShellFolderItem;
        private constructor();

        /** Get Application object */
        readonly Application: any;

        /** Access an extended property */
        ExtendedProperty(bstrPropName: string): any;

        /** If item is a folder return folder object */
        readonly GetFolder: Folder3 | null;

        /** If item is link return link object */
        readonly GetLink: ShellLinkObject | null;

        /**
         * Execute a command on the item.
         * Must be one of the values returned by the item's `FolderItemVerb.Name` property.
         * If no verb is specified, the default verb will be invoked.
         */
        InvokeVerb(vVerb?: string): void;

        /**
         * Extended version of InvokeVerb
         * @param vVerb String that corresponds to the command to be executed. If no verb is specified, the default verb is executed.
         * @param vArgs String with one or more arguments to the command specified by vVerb. The format of this string depends on the particular verb.
         */
        InvokeVerbEx(vVerb?: string, vArgs?: string): void;

        /** Indicates if the item can be hosted inside a browser or Windows Explorer frame. */
        readonly IsBrowsable: boolean;

        /** Is the item a file system object? */
        readonly IsFileSystem: boolean;

        /** Is the item a Folder? */
        readonly IsFolder: boolean;

        /** Is the item a link? */
        readonly IsLink: boolean;

        /** Modification Date? */
        ModifyDate: VarDate;

        /** Get display name for item */
        Name: string;

        /** Get Parent object */
        readonly Parent: any;

        /** Get the pathname to the item */
        readonly Path: string;

        /** Size */
        readonly Size: number;

        /** Contains a string representation of the item's type */
        readonly Type: string;

        /** Get the list of verbs for the object */
        Verbs(): FolderItemVerbs;
    }

    /** Shell Folder View Object */
    class ShellFolderView {
        private 'Shell32.ShellFolderView_typekey': ShellFolderView;
        private constructor();

        /** Get Application object */
        readonly Application: any;

        /** Get Current View Mode */
        CurrentViewMode: number;

        /** Filter View */
        FilterView(bstrFilterText: string): void;

        /** The currently focused item in the folder */
        readonly FocusedItem: ShellFolderItem;

        /** Get the folder being viewed */
        readonly Folder: Folder3;

        /** Get Folder Flags */
        FolderFlags: number;

        /** Get Group By Column */
        GroupBy: string;

        /** Set Icon Size */
        IconSize: number;

        /** Show items menu and return command selected */
        PopupItemMenu(pfi: ShellFolderItem, vx?: any, vy?: any): string;

        /** The collection of Selected Items in folder */
        SelectedItems(): FolderItems3;

        /** Select the item */
        SelectItem(pvfi: ShellFolderItem, dwFlags: ShellFolderViewSelectItem): void;

        /** Select Item relative to the Current Item */
        SelectItemRelative(iRelative: number): void;

        /** Get Sorting Columns */
        SortColumns: string;

        /** Returns the view options for showing a folder. */
        readonly ViewOptions: ShellFolderViewOptions;
    }

    /**
     * The **ShellFolderView** object fires two events, **EnumDone** and **SelectionChanged**, that are typically handled by applications. However, some applications
     * must handle events from a series of **ShellFolderView** objects. For example, an application might host a **WebBrowser** control that allows users to navigate through
     * a series of folders. Each folder has its own **ShellFolderView** object with its associated events. Handling these events can be difficult.
     *
     * The **ShellFolderViewOC** object simplifies event handling for such scenarios. It allows applications to handle events for all ShellFolderView objects with a single
     * pair of **ShellFolderViewOC** event handlers. Each time the user navigates to a new folder, the application passes the associated **ShellFolderView** object to the
     * **ShellFolderViewOC** object by calling **SetFolderView**. Then, when an **EnumDone** or **SelectionChanged** event is fired, the **ShellFolderViewOC** object
     * forwards the event to its own handler for processing.
     */
    class ShellFolderViewOC {
        private 'Shell32.ShellFolderViewOC_typekey': ShellFolderViewOC;
        private constructor();

        /** Set the ShellFolderView object to monitor events of. */
        SetFolderView(pdisp: ShellFolderView): void;
    }

    /** Shell Link object */
    class ShellLinkObject {
        private 'Shell32.ShellLinkObject_typekey': ShellLinkObject;
        private constructor();

        /** Arguments for the link */
        Arguments: string;

        /** Description of the link */
        Description: string;

        /** Get the IconLocation for the link */
        GetIconLocation(pbs: string): number;

        /** Hotkey for the link */
        Hotkey: number;

        /** Fully qualified path of the link */
        Path: string;

        /** Tell the link to resolve itself */
        Resolve(fFlags: ShellLinkResolveFlags): void;

        /**
         * Tell the link to save the changes
         * @param sFile The fully qualified path of the file where the new link information is to be saved. If no file is specified, the current file is used.
         */
        Save(vWhere?: string): void;

        /**
         * Set the IconLocation for the link
         * @param sPath The fully qualified path of the file that contains the icon.
         * @param iIcon The index of the icon in the file specified by _sPath_.
         */
        SetIconLocation(sPath: string, iIcon: number): void;

        /** Get the Show Command for the link */
        ShowCommand: LinkShowWindowState;

        /** Get the target of a link object */
        readonly Target: ShellFolderItem | null;

        /** Get the working directory for the link */
        WorkingDirectory: string;
    }

    class ShellWindows {
        private 'Shell32.ShellWindows_typekey': ShellWindows;
        private constructor();

        /**
         * Retrieves an InternetExplorer object that represents the Shell window.
         * @param index Default is 0
         */
        Item(index?: number): SHDocVw.InternetExplorer;

        /** Contains the number of items in the collection. */
        readonly Count: number;
    }
}

interface ActiveXObject {
    on(
        obj: Shell32.ShellFolderView, event: 'BeginDrag' | 'DefaultVerbInvoked' | 'EnumDone' | 'SelectionChanged' | 'VerbInvoked', handler: (
            this: Shell32.ShellFolderView, parameter: {}) => void): void;
    on(
        obj: Shell32.ShellFolderViewOC, event: 'BeginDrag' | 'DefaultVerbInvoked' | 'EnumDone' | 'SelectionChanged' | 'VerbInvoked',
        handler: (this: Shell32.ShellFolderViewOC, parameter: {}) => void): void;
    new <K extends keyof ActiveXObjectNameMap = any>(progid: K): ActiveXObjectNameMap[K];
}

interface ActiveXObjectNameMap {
    'Shell.Application': Shell32.Shell;
    'Shell.FolderView': Shell32.ShellFolderViewOC;
}

interface EnumeratorConstructor {
    new(col: Shell32.FolderItems3): Enumerator<Shell32.ShellFolderItem>;
    new(col: Shell32.FolderItemVerbs): Enumerator<Shell32.FolderItemVerb>;
    new(col: Shell32.ShellWindows): Enumerator<SHDocVw.InternetExplorer>;
}
