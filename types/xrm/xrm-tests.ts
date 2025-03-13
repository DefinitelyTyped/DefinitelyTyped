/// Demonstrate usage in the browser's window object

window.Xrm.Navigation.openAlertDialog({ text: "message" });
parent && parent.Xrm.Utility.getGlobalContext()
    && parent.Xrm.Utility.getGlobalContext().organizationSettings.languageId;

/// Demonstrate getting the Global Context and Form Context

function _getContext() {
    const errorMessage = "Context is not available.";
    if (typeof GetGlobalContext !== "undefined") {
        return GetGlobalContext();
    } else if (typeof Xrm !== "undefined") {
        return Xrm.Utility.getGlobalContext();
    } else {
        throw new Error(errorMessage);
    }
}

let executionContext: Xrm.Events.EventContext | undefined;
let formContext: Xrm.FormContext | undefined;

function _getFormContext() {
    const errorMessage = "Form-level context is not available.";
    if (typeof formContext !== "undefined") {
        return formContext;
    } else if (typeof executionContext !== "undefined") {
        return executionContext.getFormContext();
    } else {
        throw new Error(errorMessage);
    }
}

const crmContext = _getContext();
formContext = _getFormContext();

/// Demonstrate iterator typing

const grids = formContext.getControl((control) => {
    return control.getControlType() === "subgrid";
});

const selectedGridReferences: Xrm.LookupValue[] = [];

/// Demonstrate iterator typing with v7.1 additions

if (grids !== null) {
    grids.forEach((gridControl: Xrm.Controls.GridControl) => {
        gridControl
            .getGrid()
            .getSelectedRows()
            .forEach((row) => {
                selectedGridReferences.push(row.data.entity.getEntityReference());
            });
    });
}

/// Demonstrate generic overload vs typecast

const lookupAttribute = formContext.getControl("customerid") as Xrm.Controls.LookupControl;
const lookupAttribute2 = formContext.getControl<Xrm.Controls.LookupControl>("customerid");

/// Demonstrate ES6 String literal syntax

lookupAttribute.addCustomFilter(
    `<filter type="and">
    <condition attribute="address1_city" operator="eq" value="Redmond" />
</filter>`,
    "account",
);

lookupAttribute.addPreSearch(() => {
    alert("A search was performed.");
});

/// Demonstrate strong-typed attribute association with strong-typed control

const lookupValues = lookupAttribute.getAttribute().getValue();

if (lookupValues !== null) {
    if (lookupValues[0].id || lookupValues[0].entityType) throw new Error("Invalid value in Lookup control.");
}

lookupAttribute.getAttribute().setValue(null);
lookupAttribute.getAttribute().setValue([
    {
        entityType: "contact",
        id: "b9a1a53f-bc38-4e80-9fbb-fe51caa7df65",
    },
]);

/// Demonstrate v7.0 BPF API

if (formContext.data.process != null) {
    formContext.data.process.moveNext((status) => {
        alert(`Process moved forward with status: ${status}`);
    });
}

/// Demonstrate v7.1 Quick Create form

Xrm.Navigation.openForm({ entityName: "account" }).then(
    (object) => {
        if (object) alert(`Newly created record Id: ${object.savedEntityReference[0].id}`);
    },
    (error) => {
        console.log(`Code: ${error.errorCode}, Message: ${error.message}`);
    },
);

/// Make all controls visible.

// Xrm.Page.ui.controls.forEach((control) => { control.setVisible(true); }); // No longer works
formContext.ui.controls.forEach((control: Xrm.Controls.StandardControl) => {
    control.setVisible(true);
}); // Must cast to StandardControl

/// Make all tabs and sections visible.

formContext.ui.tabs.forEach((tab) => {
    tab.setVisible(true);
    tab.setFocus();

    tab.sections.forEach((section) => {
        section.setVisible(true);
    });
});

/// Demonstrate OnSave event context.

formContext.data.entity.addOnSave((context: Xrm.Events.SaveEventContext) => {
    const eventArgs = context.getEventArgs();

    if (
        eventArgs.getSaveMode() === XrmEnum.SaveMode.AutoSave
        || eventArgs.getSaveMode() === XrmEnum.SaveMode.SaveAndClose
    ) {
        eventArgs.preventDefault();
    }

    // @ts-expect-error
    eventArgs.disableAsyncTimeout();
});

formContext.data.entity.addOnSave(async (context: Xrm.Events.SaveEventContextAsync) => {
    const eventArgs = context.getEventArgs();
    eventArgs.disableAsyncTimeout?.();
});

/// Demonstrate ES6 String literal with templates

alert(`The current form type is: ${formContext.ui.getFormType()}`);

alert(`The current entity type is: ${formContext.data.entity.getEntityName()}`);

/// Demonstrate OptionSet Value as int

const optionSetAttribute = formContext.getAttribute<Xrm.Attributes.OptionSetAttribute>("statuscode");
if (optionSetAttribute !== null) {
    const optionValue: number = optionSetAttribute.getOptions()[0].value;

    /// Demonstrate Control.setFocus();

    let controls = optionSetAttribute.controls;
    if (controls !== null) {
        let firstControl = controls.get(0);
        if (firstControl !== null) {
            firstControl.setFocus();
        }
    }
}

/// Demonstrate OptionSet Value as enum

enum TestOptionSet {
    Option1 = 56666000,
    Option2 = 56666001,
}

const optionSetAttributeEnum = formContext.getAttribute<Xrm.Attributes.OptionSetAttribute<TestOptionSet>>("statuscode");
if (optionSetAttributeEnum !== null) {
    const optionEnumValue: TestOptionSet | null = optionSetAttributeEnum.getValue();
}

/// Demonstrate MultiSelectOptionSet Value as int

const multiSelectOptionSetAttribute = formContext.getAttribute<Xrm.Attributes.MultiSelectOptionSetAttribute>(
    "statuscode",
);
if (multiSelectOptionSetAttribute !== null) {
    const multiSelectOptionValue: number = multiSelectOptionSetAttribute.getOptions()[0].value;
}

/// Demonstrate MultiSelectOptionSet Value as enum

enum TestMultiSelectOptionSet {
    Option1 = 56666000,
    Option2 = 56666001,
}

const multiSelectOptionSetAttributeEnum = formContext.getAttribute<
    Xrm.Attributes.MultiSelectOptionSetAttribute<TestMultiSelectOptionSet>
>("statuscode");
if (multiSelectOptionSetAttributeEnum !== null) {
    const multiSelectOptionEnumValue: TestMultiSelectOptionSet[] | null = multiSelectOptionSetAttributeEnum.getValue();
}

/// Demonstrate setFormNotification

let level: Xrm.FormNotificationLevel;
level = "ERROR";
formContext.ui.setFormNotification("Test", level, "uniqueId");

/// Demonstrate Requirement Level and Submit Mode both via string parameters and String Literal Types

let requirementLevel: Xrm.Attributes.RequirementLevel = "none";
const requirementLevelString = "none";
let submitMode: Xrm.SubmitMode = "always";
const submitModeString = "always";

let attribute = formContext.getAttribute<Xrm.Attributes.LookupAttribute>("customerid");
if (attribute !== null) {
    attribute.setSubmitMode(submitMode);
    attribute.setSubmitMode(submitModeString); // Works if the string is a const
    attribute.setRequiredLevel(requirementLevel);
    attribute.setRequiredLevel(requirementLevelString); // Works if the string is a const

    const isMulitselect = attribute.getAttributeType() === "multiselectoptionset";
}
/// Demonstrate v8.2 quick form controls

const quickForm = formContext.ui.quickForms.get(0);
if (quickForm !== null) {
    quickForm.getControlType(); // == "quickform"
    quickForm.getName();
    quickForm.getParent();
    quickForm.getVisible(); // From UiCanSetVisibleElement
    quickForm.getLabel(); // From UiLabelElement
    quickForm.setLabel("Label"); // From UiLabelElement
    quickForm.refresh();
}
// Get standard control
const ctrl = formContext.getControl<Xrm.Controls.StandardControl>("controlName");
if (ctrl !== null) {
    ctrl.getControlType();
    ctrl.getName();
    ctrl.getParent();
    ctrl.getLabel();
    ctrl.setLabel("Label name");
    ctrl.getVisible();
    ctrl.setVisible(true);
}
// Demonstrate getEntityMetadata
Xrm.Utility.getEntityMetadata("account", ["telephone1"]).then((metadata) => {
    console.log(metadata.Attributes["statuscode"].OptionSet[0].Label.LocalizedLabels[0].Label);
});

// Demonstrate WebAPI CreateRecord
Xrm.WebApi.createRecord("contact", { fullname: "Neo" }).then((response) => {
    console.log(response.entityType, response.id);
});

// Demonstrate WebAPI UpdateRecord
Xrm.WebApi.updateRecord("contact", "1d-123", { fullname: "Neo" }).then((response) => {
    console.log(response.entityType, response.id);
});

// Demonstrate WebAPI RetrieveMultiple
Xrm.WebApi.retrieveMultipleRecords(
    "contact",
    `?fetchXml=<fetch version='1.0' mapping='logical' distinct='false'>
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
    </fetch>`,
).then((response) => {
    console.log("Query Returned : " + response.entities.length);
});

// Confirm generics on query
Xrm.WebApi.retrieveMultipleRecords(
    "contact",
    `?fetchXml=<fetch version='1.0' mapping='logical' distinct='false'>
    <entity name='contact'>
        <attribute name='fullname' />
        <attribute name='telephone1' />
        <attribute name='contactid' />
        <order attribute='fullname' descending='false' />
    </entity>
    </fetch>`,
).then((response: Xrm.RetrieveMultipleResult<{ contactid: string; fullname: string; telephone1: string }>) => {
    console.log("Query Returned : " + response.entities.length);
});

// Demonstrate add/removeTabStateChange
const contextHandler = (context: Xrm.Events.EventContext) => {
    context.getEventSource();
};
const tabName = formContext.ui.tabs.get("tabName");
if (tabName !== null) {
    tabName.addTabStateChange(contextHandler);
    tabName.removeTabStateChange(contextHandler);
}

// Demonstrate lookupObject

async function xrmUtility() {
    const lookedUp = await Promise.resolve(
        Xrm.Utility.lookupObjects({
            allowMultiSelect: false,
            defaultEntityType: "account",
            defaultViewId: "abc-deo",
            disableMru: true,
            searchText: "text",
            showBarcodeScanner: true,
            entityTypes: ["contact", "account"],
            viewIds: ["abc"],
            filters: [
                {
                    entityLogicalName: "contact",
                    filterXml: "<xml>goes</xml>",
                },
            ],
        }),
    );

    const lookedUpItem = lookedUp[0];
    if (lookedUpItem.entityType === "contact") {
    }

    Xrm.Utility.showProgressIndicator("doing things");
    Xrm.Utility.closeProgressIndicator();
}

async function xrmNavigation() {
    await Promise.resolve(
        Xrm.Navigation.openAlertDialog(
            {
                title: "title of dialog",
                text: "text of dialog",
                confirmButtonLabel: "confim the thing",
            },
            {
                height: 100,
                width: 100,
            },
        ),
    );

    await Promise.resolve(
        Xrm.Navigation.openAlertDialog({
            title: "title of dialog",
            text: "text of dialog",
        }),
    );

    const confirmResult = await Promise.resolve(
        Xrm.Navigation.openConfirmDialog(
            {
                title: "title of dialog",
                subtitle: "subtitle of dialog",
                text: "text of dialog",
                cancelButtonLabel: "cancel the thing",
                confirmButtonLabel: "confim the thing",
            },
            {
                height: 100,
                width: 100,
            },
        ),
    );

    const trueConst = true;
    if (confirmResult.confirmed === trueConst) {
        // confirmed
    }

    await Promise.resolve(
        Xrm.Navigation.openErrorDialog({
            message: "",
            details: "",
            errorCode: 12344,
        }),
    );
}

// Demonstrate addOnLoad/removeOnLoad methods
const saveOptionsSaveMode = (context: Xrm.Events.SaveEventContext) => {
    const saveMode = context.getEventArgs().getSaveMode();
    context.getFormContext().data.save({
        saveMode,
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
    entityTypes: ["contact"],
});

// filters property
Xrm.Utility.lookupObjects({
    entityTypes: ["contact"],
    filters: [
        {
            entityLogicalName: "contact",
            filterXml: `<filter>
            <condition attribute="contactid" operator="neq" value="b9a1a53f-bc38-4e80-9fbb-fe51caa7df65"
        </filter>`,
        },
    ],
});

// searchText property
Xrm.Utility.lookupObjects({
    entityTypes: ["contact"],
    searchText: "Doe, John",
});

// disableMru property
Xrm.Utility.lookupObjects({
    entityTypes: ["contact"],
    disableMru: true,
});

// Demonstrate Xrm.Utility.getPageContext parameters
Xrm.Utility.getPageContext(); // $ExpectType PageContext

// Demonstrate visibility for grid control
const gridControlGetSetVisible = (context: Xrm.Events.EventContext) => {
    const formContext = context.getFormContext();
    const gridControl = formContext.getControl<Xrm.Controls.GridControl>("myGrid");
    if (gridControl === null) {
        return;
    }
    // getVisible
    const visibility = gridControl.getVisible();

    // setVisible
    gridControl.setVisible(!visibility);
};

async function ribbonCommand(commandProperties: Xrm.CommandProperties, primaryEntity: Xrm.EntityReference) {
    if (commandProperties.SourceControlId === "AddExistingRecordFromSubGridAssociated") {
        await Promise.resolve(
            Xrm.Navigation.openAlertDialog({
                title: `${commandProperties.CommandValueId}`,
                text:
                    `Thanks for clicking on ${primaryEntity.Name} of type ${primaryEntity.TypeName} and id ${primaryEntity.Id}`,
            }),
        );
    }
}

// Demonstrate App
Xrm.App.addGlobalNotification({
    type: 2,
    level: XrmEnum.AppNotificationLevel.Error,
    message: "Test error notification",
    showCloseButton: true,
    action: {
        actionLabel: "Learn more",
        eventHandler() {
            Xrm.Navigation.openUrl("https://docs.microsoft.com/powerapps/");
            // perform other operations as required on clicking
        },
    },
}).then(
    function success(result) {
        result; // $ExpectType string

        console.log("Notification created with ID: " + result);

        // Wait for 5 seconds and then clear the notification
        window.setTimeout(() => {
            Xrm.App.clearGlobalNotification(result);
        }, 5000);
    },
    (error) => {
        console.log(error.message);
        // handle error conditions
    },
);
Xrm.App.sidePanes.state = 1;
Xrm.App.sidePanes
    .createPane({
        title: "Reservation: Ammar Peterson",
        imageSrc: "WebResources/sample_reservation_icon",
        hideHeader: true,
        canClose: true,
        width: 600,
    })
    .then((pane) => {
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
    const kbSearchControl = formContext.getControl<Xrm.Controls.KbSearchControl>("<name>");
    const kbHandler = () => {
        alert("hit handler");
    };
    if (kbSearchControl === null) {
        return;
    }
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
    dashboardId: "84fd907e-8bfe-11ec-a8a3-0242ac120002",
}).then(
    (success) => {
        console.log("Dashboard opened");
    },
    (error) => {
        console.log(error.message);
    },
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
    let booleanAttribute = formContext.getAttribute<Xrm.Attributes.BooleanAttribute>(
        "prefx_myattribute",
    );
    if (booleanAttribute === null) {
        return;
    }
    const booleanValue: boolean | null = booleanAttribute.getValue();
    // @ts-expect-error
    const notString: string = booleanAttribute.getValue();

    booleanAttribute = booleanAttribute.controls.get(0).getAttribute();

    booleanAttribute.controls.forEach((c: Xrm.Controls.BooleanControl) => c.setDisabled(true));

    booleanAttribute.controls.get(0).getAttribute().getAttributeType() === "boolean";
    // @ts-expect-error
    booleanAttribute.controls.get(0).getAttribute().getAttributeType() === "optionset";
}

// Demonstrate add and remove methods for formContext.data.process
function onLoadCheckStageChange(eventContext: Xrm.Events.EventContext) {
    const formContext = eventContext.getFormContext();

    // Add a handler for the OnStageChange event
    formContext.data.process.addOnStageChange(onStageChange);

    // Remove the handler for the OnStageChange event
    formContext.data.process.removeOnStageChange(onStageChange);
}

function onStageChange(context: Xrm.Events.StageChangeEventContext) {
    // $ExpectType FormContext
    const formContext = context.getFormContext();
    // $ExpectType Stage
    const currentStage = context.getEventArgs().getStage();

    // Get the name of the current stage
    // $ExpectType string
    const currentStageName = currentStage.getName();

    // Prevent defaults
    context.getEventArgs().preventDefault();
}

// Demonstrate Navigating to a specific tab
Xrm.Navigation.navigateTo({
    pageType: "entityrecord",
    entityName: "account",
    tabName: "tab",
}).then(
    (success) => {
        console.log("Entity opened");
    },
    (error) => {
        console.log(error.message);
    },
);

const multiSelectOptionSetControl = formContext.getControl<Xrm.Controls.MultiSelectOptionSetControl>("choices");
if (multiSelectOptionSetControl === null) {
    throw new Error("Control does not exist!");
}
// $ExpectType MultiSelectOptionSetAttribute<number>
multiSelectOptionSetControl.getAttribute();

// Demonstrates getWebResourceUrl
const webResourceUrl = Xrm.Utility.getGlobalContext().getWebResourceUrl("sample_webResource1.js");

const optionSetControl = formContext.getControl<Xrm.Controls.OptionSetControl>("singlechoice");
if (optionSetControl === null) {
    throw new Error("Control does not exist!");
}
// Demonstrates getOptions for Xrm.Controls.OptionSetControl

optionSetControl.getOptions();
// Demonstrates getOptions for Xrm.Controls.MultiSelectOptionSetControl
// $ExpectType OptionSetValue[]
multiSelectOptionSetControl.getOptions();

const openFileSave = Xrm.Navigation.openFile({
    fileContent: "",
    fileName: "test.txt",
    fileSize: 0,
    mimeType: "text/plain",
}, {
    openMode: XrmEnum.OpenFileOptions.Save,
});

// Demonstrate addOnPostSave/removeOnPostSave methods
const formContextDataEntityPostSaveMethods = (context: Xrm.Events.EventContext) => {
    const formContext = context.getFormContext();
    formContext.data.entity.addOnPostSave(contextHandler);
    formContext.data.entity.removeOnPostSave(contextHandler);
};

// Demonstrate usage of Eventargs of postsave
function ActionOnPostsave(context: Xrm.Events.PostSaveEventContext) {
    const args = context.getEventArgs();

    if (args.getIsSaveSuccess()) {
        // if success get id
        let id = args.getEntityReference().id;
    } else {
        console.log(args.getSaveErrorInfo());
    }
}
