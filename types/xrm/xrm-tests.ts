/// Demonstrate usage in the browser's window object

window.Xrm.Utility.alertDialog("message", () => { });
parent && parent.Xrm.Page && parent.Xrm.Page.context && parent.Xrm.Page.context.getOrgLcid();

/// Demonstrate clientglobalcontext.d.ts

function _getContext() {
    const errorMessage = "Context is not available.";
    if (typeof GetGlobalContext !== "undefined") {
        return GetGlobalContext();
    } else if (typeof Xrm !== "undefined") {
        return Xrm.Page.context;
    } else {
        throw new Error(errorMessage);
    }
}

const crmContext = _getContext();

/// Demonstrate iterator typing

const grids = Xrm.Page.getControl((control) => {
    return control.getControlType() === "subgrid";
});

const selectedGridReferences: Xrm.Page.LookupValue[] = [];

/// Demonstrate iterator typing with v7.1 additions

grids.forEach((gridControl: Xrm.Page.GridControl) => {
    gridControl.getGrid().getSelectedRows().forEach((row) => {
        selectedGridReferences.push(row.getData().getEntity().getEntityReference());
    });
});

/// Demonstrate generic overload vs typecast

const lookupAttribute = Xrm.Page.getControl("customerid") as Xrm.Page.LookupControl;
const lookupAttribute2 = Xrm.Page.getControl<Xrm.Page.LookupControl>("customerid");

/// Demonstrate ES6 String literal syntax

lookupAttribute.addCustomFilter(`<filter type="and">
    <condition attribute="address1_city" operator="eq" value="Redmond" />
</filter>`, "account");

lookupAttribute.addPreSearch(() => { alert("A search was performed."); });

/// Demonstrate strong-typed attribute association with strong-typed control

const lookupValues = lookupAttribute.getAttribute().getValue();

if (lookupValues !== null)
    if (lookupValues[0].id || lookupValues[0].entityType)
        throw new Error("Invalid value in Lookup control.");

lookupAttribute.getAttribute().setValue(null);
lookupAttribute.getAttribute().setValue([{
    entityType: "contact",
    id: "b9a1a53f-bc38-4e80-9fbb-fe51caa7df65"
}]);

/// Demonstrate v7.0 BPF API

if (Xrm.Page.data.process != null)
    Xrm.Page.data.process.moveNext((status) => { alert(`Process moved forward with status: ${status}`); });

/// Demonstrate v7.1 Quick Create form

Xrm.Utility.openQuickCreate("account").then(
    (object) => { if (object) alert(`Newly created record Id: ${object.savedEntityReference.id}`); },
    (error) => { console.log(`Code: ${error.errorCode}, Message: ${error.message}`); });

/// Make all controls visible.

// Xrm.Page.ui.controls.forEach((control) => { control.setVisible(true); }); // No longer works
Xrm.Page.ui.controls.forEach((control: Xrm.Page.StandardControl) => { control.setVisible(true); }); // Must cast to StandardControl

/// Make all tabs and sections visible.

Xrm.Page.ui.tabs.forEach((tab) => {
    tab.setVisible(true);
    tab.setFocus();

    tab.sections.forEach((section) => {
        section.setVisible(true);
    });
});

/// Demonstrate OnSave event context.

Xrm.Page.data.entity.addOnSave((context: Xrm.Page.SaveEventContext) => {
    const eventArgs = context.getEventArgs();

    if (eventArgs.getSaveMode() === XrmEnum.SaveMode.AutoSave || eventArgs.getSaveMode() === XrmEnum.SaveMode.SaveAndClose)
        eventArgs.preventDefault();

    // @ts-expect-error
    eventArgs.disableAsyncTimeout();
});

Xrm.Page.data.entity.addOnSave(async (context: Xrm.Events.SaveEventContextAsync) => {
    const eventArgs = context.getEventArgs();
    eventArgs.disableAsyncTimeout?.();
});

/// Demonstrate ES6 String literal with templates

alert(`The current form type is: ${Xrm.Page.ui.getFormType()}`);

alert(`The current entity type is: ${Xrm.Page.data.entity.getEntityName()}`);

/// Demonstrate Optionset Value as int in Turbo Forms

const optionSetAttribute = Xrm.Page.getAttribute<Xrm.Page.OptionSetAttribute>("statuscode");
const optionValue: number = optionSetAttribute.getOptions()[0].value;

/// Demonstrate Control.setFocus();

optionSetAttribute.controls.get(0).setFocus();

/// Demonstrate setFormNotification

let level: Xrm.Page.ui.FormNotificationLevel;
level = "ERROR";
Xrm.Page.ui.setFormNotification("Test", level, "uniqueId");

/// Demonstrate Requirement Level and Submit Mode both via string parameters and String Literal Types

let requirementLevel: Xrm.Page.RequirementLevel = "none";
const requirementLevelString = "none";
let submitMode: Xrm.Page.SubmitMode = "always";
const submitModeString = "always";

let attribute = Xrm.Page.getAttribute<Xrm.Page.LookupAttribute>("customerid");
attribute.setSubmitMode(submitMode);
attribute.setSubmitMode(submitModeString); // Works if the string is a const
attribute.setRequiredLevel(requirementLevel);
attribute.setRequiredLevel(requirementLevelString); // Works if the string is a const

const isMulitselect = attribute.getAttributeType() === "multiselectoptionset";

/// Demonstrate v8 AutoComplete

let autoCompleteControl = Xrm.Page.getControl<Xrm.Page.AutoLookupControl>("name");
const userInput = autoCompleteControl.getValue();
const accountResult = {};
const resultSet: Xrm.Page.AutoCompleteResultSet = {
    results: new Array() as Xrm.Page.AutoCompleteResult[],
    commands: {
        id: "sp_commands",
        label: "Learn More",
        action() {
            // Specify what you want to do when the user
            // clicks the "Learn More" link at the bottom
            // of the auto-completion list.
            // For this sample, we are just opening a page
            // that provides information on working with
            // accounts in CRM.
            window.open("http://www.microsoft.com/en-us/dynamics/crm-customer-center/create-or-edit-an-account.aspx");
        }
    }
};
resultSet.results.push({
    id: 0,
    fields: ["A. Datum Corporation"]
});
autoCompleteControl.addOnKeyPress(() => { });
autoCompleteControl.fireOnKeyPress();
autoCompleteControl.removeOnKeyPress(() => { });
autoCompleteControl.showAutoComplete(resultSet);
autoCompleteControl.hideAutoComplete();

/// Demonstrate v8.2 quick form controls

const quickForm = Xrm.Page.ui.quickForms.get(0);
quickForm.getControlType(); // == "quickform"
quickForm.getName();
quickForm.getParent();
quickForm.getVisible(); // From UiCanSetVisibleElement
quickForm.getLabel(); // From UiLabelElement
quickForm.setLabel("Label"); // From UiLabelElement
quickForm.refresh();

// Get standard control
const ctrl = Xrm.Page.getControl<Xrm.Page.StandardControl>("controlName");
ctrl.getControlType();
ctrl.getName();
ctrl.getParent();
ctrl.getLabel();
ctrl.setLabel("Label name");
ctrl.getVisible();
ctrl.setVisible(true);

// Demonstrate getEntityMetadata
Xrm.Utility.getEntityMetadata("account", ["telephone1"]).then((metadata) => {
    console.log(metadata.Attributes["statuscode"].OptionSet[0].Label.LocalizedLabels[0].Label);
});

// Demonstrate WebAPI RetrieveMultiple
Xrm.WebApi.retrieveMultipleRecords("contact", `?fetchXml=<fetch version='1.0' mapping='logical' distinct='false'>
    <entity name='contact'>
        <attribute name='fullname' />
        <attribute name='telephone1' />
        <attribute name='contactid' />
        <order attribute='fullname' descending='false' />
        <link-entity name= 'account' from='accountid' to='parentcustomerid' visible= 'false' link-type='outer' alias= 'a_dc9b80f8c78146d89fd6a3b610836975' >
            <attribute name='accountratingcode' />
            <attribute name='accountnumber' />
            <attribute name='name' />
        </link-entity>
    </entity>
    </fetch>`).then((response) => {
    console.log("Query Returned : " + response.entities.length);
});

// Demonstrate add/removeTabStateChange
const contextHandler = (context: Xrm.Page.EventContext) => {
    context.getEventSource();
};

Xrm.Page.ui.tabs.get("tabName").addTabStateChange(contextHandler);
Xrm.Page.ui.tabs.get("tabName").removeTabStateChange(contextHandler);

// Demonstrate lookupObject

async function xrmUtility() {
    const lookedUp = await Promise.resolve(Xrm.Utility.lookupObjects({
        allowMultiSelect: false,
        defaultEntityType: "account",
        defaultViewId: "abc-deo",
        disableMru: true,
        searchText: "text",
        showBarcodeScanner: true,
        entityTypes: ["contact", "account"],
        viewIds: ["abc"],
        filters: [{
            entityLogicalName: "contact",
            filterXml: "<xml>goes</xml>"
        }]
    }));

    const lookedUpItem = lookedUp[0];
    if (lookedUpItem.entityType === "contact") {
    }

    Xrm.Utility.showProgressIndicator("doing things");
    Xrm.Utility.closeProgressIndicator();
}

async function xrmNavigation() {
    await Promise.resolve(Xrm.Navigation.openAlertDialog({
        title: "title of dialog",
        text: "text of dialog",
        confirmButtonLabel: "confim the thing",
    }, {
        height: 100,
        width: 100,
    }));

    await Promise.resolve(Xrm.Navigation.openAlertDialog({
        title: "title of dialog",
        text: "text of dialog",
    }));

    const confirmResult = await Promise.resolve(Xrm.Navigation.openConfirmDialog({
        title: "title of dialog",
        subtitle: "subtitle of dialog",
        text: "text of dialog",
        cancelButtonLabel: "cancel the thing",
        confirmButtonLabel: "confim the thing",
    }, {
        height: 100,
        width: 100,
    }));

    const trueConst = true;
    if (confirmResult.confirmed === trueConst) {
        // confirmed
    }

    await Promise.resolve(Xrm.Navigation.openErrorDialog({
        message: "",
        details: "",
        errorCode: 12344,
    }));
}

// Demonstrate addOnLoad/removeOnLoad methods
const saveOptionsSaveMode = (context: Xrm.Events.SaveEventContext) => {
    const saveMode = context.getEventArgs().getSaveMode();
    context.getFormContext().data.save({
        saveMode
    });
};

// Demonstrate addOnLoad/removeOnLoad methods
const formContextDataOnLoadMethods = (context: Xrm.Events.EventContext) => {
    const formContext = context.getFormContext();
    formContext.data.addOnLoad(contextHandler);
    formContext.data.removeOnLoad(contextHandler);
};

function testOnLoadTypes(formContext: Xrm.FormContext) {
    formContext.ui.addOnLoad(onLoad);
    formContext.ui.removeOnLoad(onLoad);

    function onLoad(eventContext: Xrm.Events.LoadEventContext) {
        eventContext.getEventArgs().getDataLoadState() === 2;
    }

    formContext.ui.addOnLoad(asyncOnLoad);
    formContext.ui.removeOnLoad(asyncOnLoad);

    async function asyncOnLoad(eventContext: Xrm.Events.LoadEventContextAsync) {
        const eventArgs = eventContext.getEventArgs();
        eventArgs.disableAsyncTimeout();

        eventArgs.getDataLoadState() === XrmEnum.FormDataLoadState.Refresh;

        eventContext.getFormContext().data.addOnLoad(onDataLoad);
        function onDataLoad(eventContext: Xrm.Events.DataLoadEventContext) {
            const dataLoadState: XrmEnum.FormDataLoadState = eventContext.getEventArgs().getDataLoadState();
        }
    }
}

// Demonstrate Xrm.Utility.lookupObjects parameters
Xrm.Utility.lookupObjects({
    entityTypes: ["contact"]
});

// filters property
Xrm.Utility.lookupObjects({
    entityTypes: ["contact"],
    filters: [{
        entityLogicalName: "contact",
        filterXml: `<filter>
            <condition attribute="contactid" operator="neq" value="b9a1a53f-bc38-4e80-9fbb-fe51caa7df65"
        </filter>`
    }]
});

// searchText property
Xrm.Utility.lookupObjects({
    entityTypes: ["contact"],
    searchText: "Doe, John"
});

// disableMru property
Xrm.Utility.lookupObjects({
    entityTypes: ["contact"],
    disableMru: true
});

// Demonstrate Xrm.Utility.getPageContext parameters
Xrm.Utility.getPageContext(); // $ExpectType PageContext

// Demonstrate visibility for grid control
const gridControlGetSetVisible = (context: Xrm.Events.EventContext) => {
    const formContext = context.getFormContext();
    const gridControl = formContext.getControl<Xrm.Controls.GridControl>("myGrid");

    // getVisible
    const visibility = gridControl.getVisible();

    // setVisible
    gridControl.setVisible(!visibility);
};

async function ribbonCommand(commandProperties: Xrm.CommandProperties, primaryEntity: Xrm.EntityReference) {
    if (commandProperties.SourceControlId === "AddExistingRecordFromSubGridAssociated") {
        await Promise.resolve(Xrm.Navigation.openAlertDialog({
            title: `${commandProperties.CommandValueId}`,
            text: `Thanks for clicking on ${primaryEntity.Name} of type ${primaryEntity.TypeName} and id ${primaryEntity.Id}`,
        }));
    }
}

// Demonstrate App
Xrm.App.addGlobalNotification({
    type: 2,
    level: 2, // error
    message: "Test error notification",
    showCloseButton: true,
    action: {
        actionLabel: "Learn more",
        eventHandler() {
            Xrm.Navigation.openUrl("https://docs.microsoft.com/powerapps/");
            // perform other operations as required on clicking
        }
    }
}).then(
    function success(result) {
        result; // $ExpectType string

        console.log("Notification created with ID: " + result);

        // Wait for 5 seconds and then clear the notification
        window.setTimeout(() => {
            Xrm.App.clearGlobalNotification(result);
        }, 5000);
    },
    error => {
        console.log(error.message);
        // handle error conditions
    }
);
Xrm.App.sidePanes.state = 1;
Xrm.App.sidePanes.createPane({
    title: "Reservation: Ammar Peterson",
    imageSrc: "WebResources/sample_reservation_icon",
    hideHeader: true,
    canClose: true,
    width: 600
}).then(pane => {
    pane.navigate({
        pageType: "entitylist",
        entityName: "sample_reservation",
    });
});
Xrm.App.sidePanes.getAllPanes();
Xrm.App.sidePanes.getPane("panelId");
Xrm.App.sidePanes.getSelectedPane();

// Demonstrate GetSettings
const settingValue = Xrm.Utility.getGlobalContext().getCurrentAppSetting("SettingsName");

function onLoadSetupEvents(eventContext: Xrm.Events.EventContext) {
    const formContext = eventContext.getFormContext();
    // Demonstrate Knowledge base handler events
    const kbSearchControl: Xrm.Controls.KbSearchControl = formContext.getControl("<name>");
    const kbHandler = () => { alert("hit handler"); };

    kbSearchControl.addOnPostSearch(kbHandler);
    kbSearchControl.removeOnPostSearch(kbHandler);

    kbSearchControl.addOnResultOpened(kbHandler);
    kbSearchControl.removeOnResultOpened(kbHandler);

    kbSearchControl.addOnSelection(kbHandler);
    kbSearchControl.removeOnSelection(kbHandler);

    const numKbResults = kbSearchControl.getTotalResultCount();
    const searchResult = kbSearchControl.getSelectedResults();

    let ret = kbSearchControl.openSearchResult(1);
    ret = kbSearchControl.openSearchResult(1, XrmEnum.OpenSearchResultMode.Inline);
    ret = kbSearchControl.openSearchResult(1, XrmEnum.OpenSearchResultMode.Popup);

    const searchText = kbSearchControl.getSearchQuery();
    kbSearchControl.setSearchQuery("pot of gold");
}

// Demonstrate htmlAttributeEncode/htmlEncode/htmlDecode
let html = Xrm.Encoding.htmlAttributeEncode("<&>");
html = Xrm.Encoding.htmlEncode("<&>");
const xml = Xrm.Encoding.htmlDecode("&lt;&amp;&gt;");

// Demonstrate Navigating to a specific dashboard
Xrm.Navigation.navigateTo({
    pageType: "dashboard",
    dashboardId: "84fd907e-8bfe-11ec-a8a3-0242ac120002"
}).then(
    success => { console.log("Dashboard opened"); },
    error => { console.log(error.message); }
);

// Demonstrate Navigating to the default dashboard
Xrm.Navigation.navigateTo({ pageType: "dashboard" });
let dashboard;
Xrm.Navigation.navigateTo({ pageType: "dashboard", dashboardId: dashboard });

// Demonstrate formContext.ui.footerSection methods
function onChangeFormField(executionContext: Xrm.Events.EventContext): void {
    const formContext = executionContext.getFormContext();
    const footerSection = formContext.ui.footerSection;

    const visible = footerSection.getVisible();
    footerSection.setVisible(true);
}

// Demonstrate formContext.ui.headerSection methods
function onChangeHeaderField(executionContext: Xrm.Events.EventContext): void {
    const formContext = executionContext.getFormContext();
    const headerSection = formContext.ui.headerSection;

    const bodyVisible = headerSection.getBodyVisible();
    const commandBarVisible = headerSection.getCommandBarVisible();
    const getTabNavigatorVisible = headerSection.getTabNavigatorVisible();
    headerSection.setBodyVisible(true);
    headerSection.setCommandBarVisible(true);
    headerSection.setTabNavigatorVisible(true);
}

function booleanAttributeControls(formContext: Xrm.FormContext) {
    let booleanAttribute: Xrm.Attributes.BooleanAttribute = formContext.getAttribute<Xrm.Attributes.BooleanAttribute>("prefx_myattribute");
    const booleanValue: boolean | null = booleanAttribute.getValue();

    // @ts-expect-error
    const notString: string = booleanAttribute.getValue();

    booleanAttribute = booleanAttribute.controls.get(0).getAttribute();

    booleanAttribute.controls.forEach((c: Xrm.Controls.BooleanControl) => c.setDisabled(true));

    booleanAttribute.controls.get(0).getAttribute().getAttributeType() === "boolean";
    // @ts-expect-error
    booleanAttribute.controls.get(0).getAttribute().getAttributeType() === "optionset";
}
