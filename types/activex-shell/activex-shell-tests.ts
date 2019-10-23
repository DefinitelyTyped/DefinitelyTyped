/// <reference types="windows-script-host" />

const shell = new ActiveXObject('Shell.Application');

const getWindowsFolder = () => shell.NameSpace(Shell32.ShellSpecialFolderConstants.ssfWINDOWS);

// https://msdn.microsoft.com/en-us/library/windows/desktop/gg537735(v=vs.85).aspx
(() => {
    const folder = getWindowsFolder();
    if (!folder) { return; }
    const folderItem = folder.ParseName('system.ini');
    if (!folderItem) { return; }
    shell.AddToRecent(folderItem.Path);
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb774065(v=vs.85).aspx
(() => {
    const folder = shell.BrowseForFolder(0, 'Example', 0, Shell32.ShellSpecialFolderConstants.ssfWINDOWS);
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/gg537736(v=vs.85).aspx
const canStartStop = shell.CanStartStopService('service name');

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb774069(v=vs.85).aspx
shell.ControlPanelItem('desk.cpl');

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb774073(v=vs.85).aspx
shell.Explore('C:\\');

// https://msdn.microsoft.com/en-us/library/windows/desktop/gg537737(v=vs.85).aspx
const explorerPolicy = shell.ExplorerPolicy('ValueName');

// https://msdn.microsoft.com/en-us/library/windows/desktop/gg537739(v=vs.85).aspx
const settingValue = shell.GetSetting(Shell32.SettingKey.SSF_SHOWALLOBJECTS);

// https://msdn.microsoft.com/en-us/library/windows/desktop/gg537740(v=vs.85).aspx
const processorLevel = shell.GetSystemInformation('ProcessorLevel');

// https://msdn.microsoft.com/en-us/library/windows/desktop/gg537741(v=vs.85).aspx
const isRestricted = shell.IsRestricted('system', 'undockwithoutlogon');

// https://msdn.microsoft.com/en-us/library/windows/desktop/gg537742(v=vs.85).aspx
const isServiceRunning = shell.IsServiceRunning('Themes');

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb774086(v=vs.85).aspx
shell.Open(Shell32.ShellSpecialFolderConstants.ssfWINDOWS);

// https://msdn.microsoft.com/en-us/library/windows/desktop/gg537743(v=vs.85).aspx
shell.ServiceStart('Messenger', true);

// https://msdn.microsoft.com/en-us/library/windows/desktop/gg537744(v=vs.85).aspx
shell.ServiceStop('Messenger', true);

// https://msdn.microsoft.com/en-us/library/windows/desktop/gg537745(v=vs.85).aspx
shell.ShellExecute("notepad.exe", "", "", "open", Shell32.ShellExecuteShow.Normal);

// https://msdn.microsoft.com/en-us/library/windows/desktop/gg537746(v=vs.85).aspx?cs-save-lang=1&cs-lang=jscript#code-snippet-1
shell.ShowBrowserBar(Shell32.ExplorerBarCLSID.Favorites, true);

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb774107(v=vs.85).aspx
const wshShell = new ActiveXObject('WScript.Shell');
wshShell.Popup(shell.Windows().Count.toString());

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787866(v=vs.85).aspx
shell.NameSpace(`c:\\windows`)!.CopyHere('c:\\autoexec.bat');

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787870(v=vs.85).aspx
(() => {
    const folder = shell.NameSpace('c:\\windows');
    const folderItem = folder ? folder.ParseName('clock.avi') : undefined;
    if (folder && folderItem) {
        const info = folder.GetDetailsOf(folderItem, Shell32.FileSystemDetails.Type);
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787874(v=vs.85).aspx
shell.NameSpace('c:\\windows')!.MoveHere('c:\\temp.txt', Shell32.FileOperationFlag.FOF_NOCONFIRMATION);

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787876(v=vs.85).aspx
shell.NameSpace('c:\\')!.NewFolder('TestFolder');

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787858(v=vs.85).aspx
(() => {
    const folder = shell.NameSpace("\\\\server\\share\\folder");
    const offlineStatus = folder ? folder.OfflineStatus : undefined;
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787880(v=vs.85).aspx
(() => {
    const folder = shell.NameSpace(Shell32.ShellSpecialFolderConstants.ssfPROGRAMS);
    WScript.Echo(folder!.ParentFolder.Title);
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787860(v=vs.85).aspx
// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787816(v=vs.85).aspx
// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787850(v=vs.85).aspx
(() => {
    const folder = shell.NameSpace('C:\\WINDOWS');
    const folderItem = folder ? folder.Self : undefined;
    if (folderItem) {
        const verbs = folderItem.Verbs();
        folderItem.InvokeVerb();
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787812(v=vs.85).aspx
(() => {
    const parentFolder = getWindowsFolder();
    const folderItem = parentFolder ? parentFolder.ParseName('system32') : undefined;
    const folder = folderItem ? folderItem.GetFolder : undefined;
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787814(v=vs.85).aspx
// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787824(v=vs.85).aspx
(() => {
    const folder = shell.NameSpace(Shell32.ShellSpecialFolderConstants.ssfPROGRAMS);
    const folderItem = folder ? folder.ParseName('Internet Explorer.lnk') : undefined;
    if (folderItem && folderItem.IsLink) {
        const link = folderItem.GetLink;
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787818(v=vs.85).aspx
// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787819(v=vs.85).aspx
// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787821(v=vs.85).aspx
(() => {
    const folder = getWindowsFolder();
    const folderItem = folder ? folder.Self : undefined;
    if (folderItem) {
        const isBrowsable = folderItem.IsBrowsable;
        const isFileSystem = folderItem.IsFileSystem;
        const isFolder = folderItem.IsFolder;
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787825(v=vs.85).aspx
(() => {
    const folder = getWindowsFolder();
    const folderItem = folder!.ParseName('notepad.exe');
    if (folderItem) {
        const oldDate = folderItem.ModifyDate;
        folderItem.ModifyDate = new Date(1900, 1, 1, 18, 5).getVarDate();
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787827(v=vs.85).aspx
(() => {
    const rootFolder = shell.NameSpace('C:\\');
    const folderItem = rootFolder ? rootFolder.ParseName('autoexec.bat') : undefined;
    if (folderItem) {
        const oldName = folderItem.Name;
        folderItem.Name = 'test.bat';
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787829(v=vs.85).aspx
(() => {
    const folder = getWindowsFolder();
    const folderItem = folder ? folder.Self : undefined;
    const parent = folderItem ? folderItem.Parent : undefined;
    if (parent) {
        WScript.Echo('Got parent object');
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787844(v=vs.85).aspx
(() => {
    const folder = getWindowsFolder();
    const folderItem = folder ? folder.Self : undefined;
    const path = folderItem ? folderItem.Path : '';
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787846(v=vs.85).aspx
(() => {
    const folder = getWindowsFolder();
    const folderItem = folder!.ParseName('notepad.exe');
    const size = folderItem ? folderItem.Size : undefined;
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787848(v=vs.85).aspx
(() => {
    const folder = getWindowsFolder();
    if (folder) {
        WScript.Echo(folder.Self.Type);
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787798(v=vs.85).aspx
(() => {
    const folder = getWindowsFolder();
    const folderItems = folder ? folder.Items() : undefined;
    const count = folderItems ? folderItems.Count : undefined;
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787794(v=vs.85).aspx
(() => {
    const folder = shell.NameSpace(Shell32.ShellSpecialFolderConstants.ssfDRIVES);
    if (folder) {
        folder.Items().InvokeVerbEx();
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb774170(v=vs.85).aspx
// https://msdn.microsoft.com/en-us/library/windows/desktop/bb774174(v=vs.85).aspx
(() => {
    const folder = shell.NameSpace(Shell32.ShellSpecialFolderConstants.ssfPROGRAMS);
    const verbs = folder ? folder.Self.Verbs() : undefined;
    if (verbs) {
        const verb = verbs.Item(0);
        WScript.Echo(verb.Name);
        verb.DoIt();
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787787(v=vs.85).aspx
(() => {
    const folder = getWindowsFolder();
    if (folder) {
        const folderItems = folder.Items();
        WScript.Echo(folderItems.Count);
        folderItems.Filter(Shell32.ShellFolderEnumerationFlags.SHCONTF_NONFOLDERS, '*.txt');
        WScript.Echo(folderItems.Count);
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb787791(v=vs.85).aspx
// https://msdn.microsoft.com/en-us/library/windows/desktop/bb774162(v=vs.85).aspx
(() => {
    const echoFirstVerbName = (folder: Shell32.Folder3 | null) => {
        if (!folder) { return; }
        const verbs = folder.Items().Verbs;
        WScript.Echo(verbs.Item(0).Name);
    };

    let folder = getWindowsFolder();
    echoFirstVerbName(folder);

    folder = shell.NameSpace(Shell32.ShellSpecialFolderConstants.ssfCONTROLS);
    echoFirstVerbName(folder);
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb774158(v=vs.85).aspx
(() => {
    const folder = shell.NameSpace(Shell32.ShellSpecialFolderConstants.ssfCONTROLS);
    if (folder) {
        const verbs = folder.Self.Verbs();
        WScript.Echo(verbs.Count);
    }
})();

const getIELink = () => {
    const folder = shell.NameSpace(Shell32.ShellSpecialFolderConstants.ssfPROGRAMS);
    const folderItem = folder ? folder.ParseName('Internet Explorer.lnk') : undefined;
    return {
        link: folderItem ? folderItem.GetLink : undefined,
        folderItem
    };
};

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb773990(v=vs.85).aspx
(() => {
    const { link, folderItem } = getIELink();
    if (link && folderItem) {
        WScript.Echo(link.GetIconLocation(folderItem.Path));
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb773996(v=vs.85).aspx
(() => {
    const { link } = getIELink();
    if (link) {
        link.Resolve(Shell32.ShellLinkResolveFlags.NoUI);
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb773998(v=vs.85).aspx
(() => {
    const { link } = getIELink();
    if (link) {
        link.Description = 'New Description';
        link.Save();
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb774002(v=vs.85).aspx
(() => {
    const { link } = getIELink();
    if (link) {
        link.SetIconLocation(link.Path, 1);
        link.Save();
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb773986(v=vs.85).aspx
(() => {
    const { link } = getIELink();
    if (link) {
        WScript.Echo(link.Arguments);
        link.Arguments = '/s';
        link.Save();
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb773988(v=vs.85).aspx
(() => {
    const { link } = getIELink();
    if (link) {
        WScript.Echo(link.Description);
        link.Description = 'Test';
        link.Save();
    }
})();

const parseHotkey = (hotkey: number) => {
    // missing implementation
    return {
        shift: false,
        ctrl: false,
        alt: false,
        extended: false,
        hotkey
    };
};
const buildHotkey = (hotkey: number, shift: boolean = false, ctrl: boolean = false, alt: boolean = false, extended: boolean = false) => {
    // missing implementation
    return 0;
};

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb773992(v=vs.85).aspx
(() => {
    const { link } = getIELink();
    if (link) {
        const { hotkey } = parseHotkey(link.Hotkey);
        WScript.Echo(hotkey);
        link.Hotkey = buildHotkey(4);
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb773994(v=vs.85).aspx
(() => {
    const { link } = getIELink();
    if (link) {
        WScript.Echo(link.Path);
        link.Path = 'C:\\Program Files\\IE\\IEXPLORE.EXE';
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb774006(v=vs.85).aspx
(() => {
    const { link } = getIELink();
    if (link) {
        WScript.Echo(link.ShowCommand);
        link.ShowCommand = Shell32.LinkShowWindowState.Normal;
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb774008(v=vs.85).aspx
(() => {
    const { link } = getIELink();
    if (link) {
        WScript.Echo(link.WorkingDirectory);
        link.WorkingDirectory = '';
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb774115(v=vs.85).aspx
(() => {
    const { link } = getIELink();
    if (link) {
        const target = link.Target;
        if (target) {
            WScript.Echo(target.Size);
        }
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb774055(v=vs.85).aspx
(() => {
    const folder = getWindowsFolder();
    const folderItem = folder ? folder.ParseName('notepad.exe') : undefined;
    if (folderItem) {
        WScript.Echo(folderItem.ExtendedProperty('infotip'));
    }

    const wordDoc = shell.NameSpace('C:\\')!.ParseName('test.doc');
    if (wordDoc) {
        const FMTID_SummaryInfo = "{F29F85E0-4FF9-1068-AB91-08002B27B3D9}";
        const PID_TITLE = "2";
        const PID_AUTHOR = "4";
        const SCID_TITLE = `${FMTID_SummaryInfo} ${PID_TITLE}`;
        const SCID_AUTHOR = `${FMTID_SummaryInfo} ${PID_AUTHOR}`;
        const docTitle = wordDoc.ExtendedProperty(SCID_TITLE);
        const docAuthor = wordDoc.ExtendedProperty(SCID_AUTHOR);
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb774057(v=vs.85).aspx
(() => {
    const folder = getWindowsFolder();
    const folderItem = folder ? folder.ParseName('notepad.exe') : undefined;
    if (folderItem) {
        folderItem.InvokeVerbEx("open", "c:\\autoexec.bat");
    }
})();

const collectionToArray = <T>(col: any): T[] => { // tslint:disable-line no-unnecessary-generics
    const results: T[] = [];
    const enumerator = new Enumerator<T>(col);
    enumerator.moveFirst();
    while (!enumerator.atEnd()) {
        results.push(enumerator.item());
        enumerator.moveNext();
    }
    return results;
};

interface String {
    endsWith(searchString: string, length?: number): boolean;
}
if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(search, this_len) {
        if (this_len === undefined || this_len > this.length) {
            this_len = this.length;
        }
        return this.substring(this_len - search.length, this_len) === search;
    };
}

// shell.Windows() includes items other than Explorer windows, such as Internet Explorer tabs
const getExplorerWindows = () =>
    collectionToArray<SHDocVw.InternetExplorer>(shell.Windows())
        .filter(x => x.FullName.toLowerCase().endsWith('explorer.exe'));

const getFolderViews = () =>
    getExplorerWindows()
        .map(x => x.Document as Shell32.ShellFolderView);

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb774045(v=vs.85).aspx
(() => {
    getFolderViews().forEach(x =>
        ActiveXObject.on(x, 'SelectionChanged', function(this: Shell32.ShellFolderView) {
            WScript.Echo(`Selection change in ${this.Folder.Title} -- count: ${this.SelectedItems().Count}`);
        })
    );
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb773970(v=vs.85).aspx
WScript.Echo(shell.Windows().Item().Path);

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb773969(v=vs.85).aspx
WScript.Echo(shell.Windows().Count);

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb774043(v=vs.85).aspx
(() => {
    getFolderViews().forEach(x =>
        WScript.Echo(`${x.Folder.Title} -- ${x.SelectedItems().Count} selected items`)
    );
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb774047(v=vs.85).aspx
// https://msdn.microsoft.com/en-us/library/windows/desktop/bb774022(v=vs.85).aspx
// https://msdn.microsoft.com/en-us/library/windows/desktop/bb774053(v=vs.85).aspx
(() => {
    const folderView = getExplorerWindows()[0].Document as Shell32.ShellFolderView;
    const folder = folderView.Folder;
    if (folder) {
        const folderItem = folder.Self;
        folderView.SelectItem(folder.Self, Shell32.ShellFolderViewSelectItem.Focus);
    }
    WScript.Echo(folderView.ViewOptions);
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/bb774020(v=vs.85).aspx
(() => {
    const folderView = getExplorerWindows()[0].Document as Shell32.ShellFolderView;
    const focusedItem = folderView.FocusedItem;
    if (focusedItem) {
        WScript.Echo(`Focused item in first Excplorer window -- ${focusedItem.Path}`);
    }
})();

(() => {
    const router = new ActiveXObject('Shell.FolderView');
    const folder = getFolderViews()[0];
    router.SetFolderView(folder);
    ActiveXObject.on(router, 'EnumDone', () => WScript.Echo('Current folder view was finisehd enumerating'));
    ActiveXObject.on(router, 'SelectionChanged', () => WScript.Echo('Selection changed in current folder view'));
    // the folder view monitored by the ShellFolderViewOC object can be changed via SetFolderView without disconnecting and reconnecting the handlers
})();
