// Source: http://www.m-files.com/UI_Extensibility_Framework/examples.htm

function setTheme(shellFrame: IShellFrame) {
    if (shellFrame.TaskPane.Available) {
        shellFrame.TaskPane.SetTheme({
            groupHeader_TextColor: '#000000',
            groupHeader_BackgroundColor: '#a0a0a0',
            groupHeader_HighlightTextColor: '#ffffff',
            item_TextColor: '#000000',
            item_BackgroundColor: '#909090',
            item_HighlightTextColor: '#FFFFFF',
            item_HighlightBackgroundColor: '#000000',
            dividerColor: '#808080',
            last: 0
        });
        shellFrame.TaskPane.SetLogo('logo.png');
    }
    if (shellFrame.SearchPane.Available) {
        shellFrame.SearchPane.SetTheme({
            backgroundColor: '#808080',
            searchButton_BackgroundColor: '#000000',
            vaultName_TextColor: '#000000',
            goOnlineButton_TextColor: '#000000',
            userName_TextColor: '#000000',
            advancedSearchButton_TextColor: '#000000',
            resetAllButton_TextColor: '#000000',
            additionalConditionsButton_TextColor: '#000000',
            last: 0
        });
    }
    shellFrame.Listing.SetTheme({
        item_TextColor_Hot: '#ffffff',
        item_TextColor_Selected: '#ffffff',
        item_TextColor_HotSelected: '#ffffff',
        item_TextColor_SelectedNoFocus: '#ffffff',
        item_BackgroundColor_Hot: '#000000',
        item_BackgroundColor_Selected: '#000000',
        item_BackgroundColor_HotSelected: '#000000',
        item_BackgroundColor_SelectedNoFocus: '#000000',
        groupHeader_LabelColor: '#ffffff',
        groupHeader_LineColor: '#ffffff',
        groupHeader_ButtonTextColor: 'default',
        groupHeader_ButtonEdgeHighlightColor: 'default',
        groupHeader_ButtonHighlightColor: 'default',
        groupHeader_BackgroundColor: '#000000',
        groupHeader_BackgroundColor_Hot: '#000000',
        groupHeader_BackgroundColor_Selected: '#000000',
        groupHeader_BackgroundColor_HotSelected: '#000000',
        sortableHeader_DividerColor_Inactive: '#000000',
        sortableHeader_DividerColor_Active: '#000000',
        sortableHeader_BackgroundColor_Inactive: '#707070',
        rtableHeader_BackgroundColor_Active: '#000000',
        backgroundImage: '',
        last: 0
    });
    shellFrame.SetTheme({
        background_TaskPane_BottomRightBitmapFile: 'TaskPaneBottomRight.png',
        background_TaskPane_BottomMiddleBitmapFile: 'TaskPaneBottomMiddle.png',
        background_TaskPane_BottomLeftBitmapFile: 'TaskPaneBottomLeftTile.png',
        background_TaskPane_MidRightBitmapFile: 'TaskPaneMidRight.png',
        background_TaskPane_MidLeftBitmapFile: 'TaskPaneMidLeftTile.png',
        background_TaskPane_TopRightBitmapFile: 'TaskPaneTopRight.png',
        background_TaskPane_TopLeftBitmapFile: 'TaskPaneTopLeftTile.png',
        background_SearchPane_TopBitmapFile: 'SearchPaneTopTile.png',
        background_SearchPane_DownAndRightBitmapFile: 'SearchPaneDownAndRightTile.png',
        background_LoginPane_TopBitmapFile: 'LoginPaneTopTile.png',
        background_LoginPane_DownAndRightBitmapFile: 'LoginPaneDownAndRightTile.png',
        last: 0
    });
}

function OnNewShellUI(shellUI: IShellUI) {
    shellUI.Events.Register(MFiles.Event.NewShellFrame, newShellFrameHandler);
    shellUI.Events.Register(MFiles.Event.NewNormalShellFrame, newShellFrameHandler);
    if (MFiles.CurrentApplicationPlatform !== MFExtApplicationPlatformWeb) {
        // We are not executing on the web, AxtiveX is available
        const html = `<object classid='clsid:${MFiles.CLSID.ShellListingCtrl}' style='width: 400px; height: 300px;'> </object>`;
    }
}

function newShellFrameHandler(shellFrame: IShellFrame) {
    shellFrame.Events.Register(MFiles.Event.Started, () => {
        setTheme(shellFrame);
    });
    shellFrame.Events.Register(MFiles.Event.Started, getShellFrameStartedHandler(shellFrame));
}

function getShellFrameStartedHandler(shellFrame: IShellFrame) {
    return () => {
        if (shellFrame.CurrentPath === "") {
            shellFrame.ShowDashboard("home", null);
            const homeTab = shellFrame.RightPane.AddTab("_home", MFiles.GetStringResource(27664), "_last");
            homeTab.ShowDashboard("home_right", null);
            homeTab.Visible = true;
            homeTab.Select();
        }
    };
}
