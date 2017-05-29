/// <reference types="jquery" />

var navigationService: umb.services.INavigationService;
var notificationsService: umb.services.INotificationsService;
var dialogService: umb.services.IDialogService;
var editorState: umb.services.IEditorState;
var appState: umb.services.IAppState;

/**
* Sync tree for specific path
*/
navigationService.syncTree({ tree: "content", path: "", forceReload: true, activate: false })
    .then(() => {
    //do something
});

/**
* Open Modal
*/
dialogService.open({

    // set the location of the view
    template: "",
    iframe: true,

    // function called when dialog is closed
    callback: () => {
        // close all
        dialogService.closeAll();
    }
});

/**
* Hide/show navigation in custom sections so we have full screen for complex dashboards
*/
var toggleNavigation = () => {

    var isNavigationShown = appState.getGlobalState("showNavigation");
    if (isNavigationShown) {
        appState.setGlobalState("showNavigation", false);
        $("#contentwrapper").css("left", "80px");
    } else {
        appState.setGlobalState("showNavigation", true);
        $("#contentwrapper").css("left", "440px");
    }
}

/**
* Get current node
*/
var getCurrentNode = () => {
    return appState.getMenuState("currentNode");
}

/**
* Check if a node is published
*/
var isPublishedNode = () => {

    // check that we have an active node
    if (editorState.current) {
        return false;
    }
    return editorState.current.published;
};

/**
* Gets the "active" node id to use for any api request
* Note that this retrieves the parent node id if the current node is in an unpublished state
* Note also that in Umbraco 7 the right click custom menu may be brought up without changing the editorState to the node that we right clicked on.
* So the editorState still gives the active node id not the right clicked node is
*/
var getActiveNodeId = () => {

    // check that we have an active node
    if (editorState.current) {
        return 0;
    }
    // get the parent id of the current node - we get parent because if we create a new module then the current node will be unpublished and this "id" will be 0
    return editorState.current.id > 0 ? editorState.current.id : editorState.current.parentId;
}

/**
* Display error notification
*/
notificationsService.error("Error", "An unknown error has occured.");

/**
* Display success notification
*/
notificationsService.success("Success", "Operation completed.");
