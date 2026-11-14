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
    optionSetAttributeEnum.getOption(TestOptionSet.Option1);
    optionSetAttributeEnum.setValue(TestOptionSet.Option1);
    optionSetAttributeEnum.setValue(null);
    // @ts-expect-error — plain number is not assignable to TestOptionSet
    optionSetAttributeEnum.setValue(123);
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
    multiSelectOptionSetAttributeEnum.getOption(TestMultiSelectOptionSet.Option1);
    multiSelectOptionSetAttributeEnum.setValue([TestMultiSelectOptionSet.Option1]);
    multiSelectOptionSetAttributeEnum.setValue(null);
    // @ts-expect-error — plain number is not assignable to TestMultiSelectOptionSet
    multiSelectOptionSetAttributeEnum.setValue([123]);
}

// Demonstrate that controls on a MultiSelectOptionSetAttribute are typed as MultiSelectOptionSetControl
multiSelectOptionSetAttribute?.controls; // $ExpectType ItemCollection<MultiSelectOptionSetControl> | undefined

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
    // @ts-expect-error
    const isMultiSelectAttribute = attribute.getAttributeType() === "multiselectoptionset"; // This will return false because the attribute is a LookupAttribute
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

function testLoadedTypes(formContext: Xrm.FormContext) {
    formContext.ui.addLoaded(onLoaded);
    formContext.ui.removeLoaded(onLoaded);

    function onLoaded(eventContext: Xrm.Events.LoadEventContext) {
        eventContext.getEventArgs().getDataLoadState() === 2;
    }

    formContext.ui.addLoaded(asyncOnLoaded);
    formContext.ui.removeLoaded(asyncOnLoaded);

    async function asyncOnLoaded(eventContext: Xrm.Events.LoadEventContextAsync) {
        const eventArgs = eventContext.getEventArgs();
        eventArgs.disableAsyncTimeout();

        eventArgs.getDataLoadState() === XrmEnum.FormDataLoadState.Refresh;
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

// Demonstrate Navigating to a generative page
Xrm.Navigation.navigateTo({
    pageType: "generative",
    pageId: "84fd907e-8bfe-11ec-a8a3-0242ac120002",
    recordId: "84fd907e-8bfe-11ec-a8a3-0242ac120002",
    entityName: "contact",
    data: {
        "custom": "value",
    },
}).then(
    (success) => {
        console.log("Generative page opened");
    },
    (error) => {
        console.log(error.message);
    },
);

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

    booleanAttribute = booleanAttribute.controls.get<Xrm.Controls.BooleanControl>(0).getAttribute();

    booleanAttribute.controls.forEach((c: Xrm.Controls.BooleanControl) => c.setDisabled(true));

    booleanAttribute.controls.get<Xrm.Controls.BooleanControl>(0).getAttribute().getAttributeType() === "boolean";
    // @ts-expect-error
    booleanAttribute.controls.get<Xrm.Controls.OptionSetControl>(0).getAttribute().getAttributeType() === "optionset";
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

// Demonstrate non-index/name getAttribute/getControl returns non-null array

function GetAll(context: Xrm.FormContext) {
    const allAttributes: Xrm.Attributes.Attribute[] = context.getAttribute();
    const allAttributesTyped: Xrm.Attributes.StringAttribute[] = context.getAttribute<Xrm.Attributes.StringAttribute>();
    const noAttributes: Xrm.Attributes.Attribute[] = context.getAttribute(() => false);
    const noAttributesTyped: Xrm.Attributes.StringAttribute[] = context.getAttribute<Xrm.Attributes.StringAttribute>(
        () => false,
    );
    if (
        allAttributes === null
        || allAttributesTyped === null
        || noAttributes === null
        || noAttributesTyped === null
    ) {
        throw new Error("Will return an empty array if no attributes are present.");
    }

    const allControls: Xrm.Controls.Control[] = context.getControl();
    const allControlsTyped: Xrm.Controls.StringControl[] = context.getControl<Xrm.Controls.StringControl>();
    const itemCollection: Xrm.Controls.Control[] = (context.getControl("mySection") as unknown as Xrm.Controls.Section)
        .controls.get();
    const noControls: Xrm.Controls.Control[] = context.getControl(() => false);
    const noControlsTyped: Xrm.Controls.StringControl[] = context.getControl<Xrm.Controls.StringControl>(() => false);
    if (
        allControls === null
        || allControlsTyped === null
        || itemCollection === null
        || noControls === null
        || noControlsTyped === null
    ) {
        throw new Error("Will return an empty array if no controls are present.");
    }
}

function getPossibleAttributeValues(formContext: Xrm.FormContext) {
    const attribute = formContext.getAttribute("statuscode");
    if (attribute === null) {
        throw new Error("Attribute does not exist!");
    }
    // $ExpectType AttributeValues | null
    const values = attribute.getValue();
}
function testAttributeType(formContext: Xrm.FormContext) {
    const attribute = formContext.getAttribute<Xrm.Attributes.StringAttribute>("myattribute");
    if (attribute === null) {
        return;
    }
    const attributeType = attribute.getAttributeType();
    // @ts-expect-error
    const isNumberAttribute = attributeType === "number"; // This errors because the attribute is a StringAttribute, not a NumberAttribute
    const isStringAttribute = attributeType === "string"; // This works because the attribute is a StringAttribute
}

// Demonstrate getSteps from active stage returns collection of steps
function getStepsFromActiveStage(formContext: Xrm.FormContext) {
    const process = formContext.data.process;

    // $ExpectType ItemCollection<Step>
    const steps = process.getActiveStage().getSteps();
}

// Demonstrate set visibility for framed control (webresource)
const framedControlSetVisible = (formContext: Xrm.FormContext) => {
    const framedControl = formContext.getControl<Xrm.Controls.FramedControl>("myWebResource");
    if (framedControl === null) {
        return;
    }

    // setVisible
    framedControl.setVisible(true);
};

// Demonstrate ItemCollection.get() overloads
function testItemCollectionGet(formContext: Xrm.FormContext) {
    // Without explicit type parameter: returns T | null
    // $ExpectType Tab | null
    formContext.ui.tabs.get(0);

    // $ExpectType Tab | null
    formContext.ui.tabs.get("tabName");

    // With explicit type parameter: returns TSubType (caller asserts item exists)
    // $ExpectType Tab
    formContext.ui.tabs.get<Xrm.Controls.Tab>(0);

    // $ExpectType Tab
    formContext.ui.tabs.get<Xrm.Controls.Tab>("tabName");
}
// Demonstrate Xrm.WebApi.offline.isAvailableOffline

// Test with a typical entity logical name
// $ExpectType boolean
const isAccountAvailableOffline = Xrm.WebApi.offline.isAvailableOffline("account");

// Test with a custom entity logical name
// $ExpectType boolean
const isCustomEntityAvailableOffline = Xrm.WebApi.offline.isAvailableOffline("new_customentity");

// Should error with missing parameter
// @ts-expect-error
Xrm.WebApi.offline.isAvailableOffline();

// Should error with a non-string parameter
// @ts-expect-error
Xrm.WebApi.offline.isAvailableOffline(12345);

// Should error with extra parameters
// @ts-expect-error
Xrm.WebApi.offline.isAvailableOffline("account", "extra");

// Demonstrate userSettings.getSecurityRolePrivilegesInfo().then(successCallback, errorCallback)

const context = Xrm.Utility.getGlobalContext();

// $ExpectType Promise<{ [privilegeId: string]: { id: string; businessUnitId: string; privilegeName: string; depth: number } }>
const privilegePromise = context.userSettings.getSecurityRolePrivilegesInfo();

privilegePromise.then(result => {
    // $ExpectType { [privilegeId: string]: { id: string; businessUnitId: string; privilegeName: string; depth: number } }
    result;

    Object.keys(result).forEach(privilegeId => {
        const privilege = result[privilegeId];

        // $ExpectType string
        privilege.id;

        // $ExpectType string
        privilege.businessUnitId;

        // $ExpectType string
        privilege.privilegeName;

        // $ExpectType number
        privilege.depth;
    });
});

// Test the successCallback and errorCallback parameter types.
context.userSettings.getSecurityRolePrivilegesInfo(
    result => {
        // $ExpectType { [privilegeId: string]: { id: string; businessUnitId: string; privilegeName: string; depth: number } }
        result;

        Object.keys(result).forEach(privilegeId => {
            const privilege = result[privilegeId];

            // $ExpectType string
            privilege.id;

            // $ExpectType string
            privilege.businessUnitId;

            // $ExpectType string
            privilege.privilegeName;

            // $ExpectType number
            privilege.depth;
        });
    },
    error => {
        // $ExpectType { errorCode: number; message: string }
        error;

        // $ExpectType number
        error.errorCode;

        // $ExpectType string
        error.message;
    },
);

// Xrm.WebApi.online.execute and executeMultiple typed request metadata and response.
async function testTypedWebApiExecute() {
    const request = {
        OpportunityClose: {
            subject: "Won",
            "opportunityid@odata.bind": "/opportunities(00000000-0000-0000-0000-000000000001)",
        },
        Status: 3,
        getMetadata() {
            return {
                boundParameter: null,
                operationType: XrmEnum.ExecuteOperationType.Action,
                operationName: "WinOpportunity",
                parameterTypes: {
                    OpportunityClose: {
                        typeName: "mscrm.opportunityclose",
                        structuralProperty: XrmEnum.StructuralPropertyType.EntityType,
                    },
                    Status: {
                        typeName: "Edm.Int32",
                        structuralProperty: XrmEnum.StructuralPropertyType.PrimitiveType,
                    },
                },
            } as const;
        },
    };

    const typedResponse = await Xrm.WebApi.online.execute<{ UserId: string }, typeof request>(request);
    const body = await typedResponse.json();
    // $ExpectType { UserId: string; }
    body;
    body.UserId;

    const untypedResponse = await Xrm.WebApi.online.execute(request);
    const unknownBody = await untypedResponse.json();
    // $ExpectType unknown
    unknownBody;
    // @ts-expect-error Cannot access JSON fields before narrowing unknown.
    unknownBody.UserId;

    const crudRequest: Xrm.ExecuteRequest = {
        getMetadata() {
            return {
                boundParameter: null,
                operationType: XrmEnum.ExecuteOperationType.CRUD,
                operationName: "Associate",
                parameterTypes: {},
            } as const;
        },
    };

    const responses = await Xrm.WebApi.online.executeMultiple([request, [crudRequest]]);
    // $ExpectType unknown
    await responses[0].json();

    const enumRequest = {
        TargetFieldType: 0 as const,
        Customer: { id: "00000000-0000-0000-0000-000000000001" },
        SomeComplexParameter: { PageNumber: 1 },
        getMetadata() {
            return {
                boundParameter: null,
                operationType: XrmEnum.ExecuteOperationType.Function,
                operationName: "InitializeFrom",
                parameterTypes: {
                    TargetFieldType: {
                        typeName: "Microsoft.Dynamics.CRM.TargetFieldType",
                        structuralProperty: XrmEnum.StructuralPropertyType.EnumerationType,
                        enumProperties: [{ name: "All", value: 0 }],
                    },
                    Customer: {
                        typeName: "mscrm.crmbaseentity",
                        structuralProperty: XrmEnum.StructuralPropertyType.EntityType,
                    },
                    SomeComplexParameter: {
                        typeName: "mscrm.PagingInfo",
                        structuralProperty: XrmEnum.StructuralPropertyType.ComplexType,
                    },
                },
            } as const;
        },
    };
    await Xrm.WebApi.online.execute(enumRequest);
}

// @ts-expect-error Primitive metadata cannot contain a misspelled EDM type.
const invalidPrimitive: Xrm.ExecuteRequestPrimitiveParameterType = { typeName: "Edm.Int325", structuralProperty: 1 };
const invalidCrud: Xrm.ExecuteRequestCrudMetadata = {
    operationType: 2,
    operationName: "Create",
    // @ts-expect-error CRUD metadata cannot specify an entity-bound parameter.
    boundParameter: "entity",
    parameterTypes: {},
};

// Class declarations preserve parameter metadata without an index signature.
class CalculateRequest {
    constructor(public Count: number, public Label: string, public Enabled: boolean) {}

    getMetadata() {
        return {
            boundParameter: null,
            operationType: XrmEnum.ExecuteOperationType.Function,
            operationName: "Calculate",
            parameterTypes: {
                Count: { typeName: "Edm.Int32", structuralProperty: XrmEnum.StructuralPropertyType.PrimitiveType },
                Label: { typeName: "Edm.String", structuralProperty: XrmEnum.StructuralPropertyType.PrimitiveType },
                Enabled: { typeName: "Edm.Boolean", structuralProperty: XrmEnum.StructuralPropertyType.PrimitiveType },
            },
        } as const;
    }
}

const calculateRequest = new CalculateRequest(3, "Total", true);
Xrm.WebApi.online.execute(calculateRequest);
Xrm.WebApi.online.executeMultiple([calculateRequest, [calculateRequest]]);
const calculateMetadata = calculateRequest.getMetadata();
const annotatedCalculateRequest: Xrm.ExecuteRequest<typeof calculateMetadata> = calculateRequest;
Xrm.WebApi.online.execute<{ Total: number }, typeof annotatedCalculateRequest>(annotatedCalculateRequest);

// @ts-expect-error Metadata requires Count, Label, and Enabled.
Xrm.WebApi.online.execute({ getMetadata: () => calculateMetadata });
// @ts-expect-error Count must be a number according to the metadata.
Xrm.WebApi.online.execute({ ...calculateRequest, Count: "3", getMetadata: () => calculateMetadata });
// @ts-expect-error Label must be a string according to the metadata.
Xrm.WebApi.online.execute({ Count: 3, Label: false, Enabled: true, getMetadata: () => calculateMetadata });
// @ts-expect-error Enabled must be a boolean according to the metadata.
Xrm.WebApi.online.execute({ Count: 3, Label: "Total", Enabled: 1, getMetadata: () => calculateMetadata });
// @ts-expect-error Explicit metadata also checks assignments.
const missingCalculateParameters: Xrm.ExecuteRequest<typeof calculateMetadata> = {
    getMetadata: () => calculateMetadata,
};

class MissingCalculateRequest {
    getMetadata() {
        return calculateMetadata;
    }
}
class IncorrectCalculateRequest extends CalculateRequest {
    // This class's metadata describes an additional required parameter.
    getMetadata() {
        return {
            ...super.getMetadata(),
            parameterTypes: {
                ...super.getMetadata().parameterTypes,
                Extra: { typeName: "Edm.Boolean", structuralProperty: XrmEnum.StructuralPropertyType.PrimitiveType },
            },
        } as const;
    }
    Extra = "incorrect";
}
// @ts-expect-error Class instance is missing the parameters declared by its metadata.
Xrm.WebApi.online.execute(new MissingCalculateRequest());
// @ts-expect-error Extra must be boolean.
Xrm.WebApi.online.execute(new IncorrectCalculateRequest(3, "Total", true));
// @ts-expect-error Missing parameters in an ordinary batch request.
Xrm.WebApi.online.executeMultiple([calculateRequest, new MissingCalculateRequest()]);
// @ts-expect-error Incorrect parameter in a change set.
Xrm.WebApi.online.executeMultiple([calculateRequest, [new IncorrectCalculateRequest(3, "Total", true)]]);

const collectionMetadata = {
    boundParameter: null,
    operationType: XrmEnum.ExecuteOperationType.Action,
    operationName: "Process",
    parameterTypes: {
        Values: { typeName: "Collection(Edm.Int32)", structuralProperty: XrmEnum.StructuralPropertyType.Collection },
        Entity: { typeName: "mscrm.account", structuralProperty: XrmEnum.StructuralPropertyType.EntityType },
    },
} as const;
Xrm.WebApi.online.execute({ Values: [1, 2], Entity: { name: "Example" }, getMetadata: () => collectionMetadata });
// @ts-expect-error Collection element types are checked against their EDM name.
Xrm.WebApi.online.execute({ Values: ["1"], Entity: {}, getMetadata: () => collectionMetadata });
// @ts-expect-error Entity parameters require an object.
Xrm.WebApi.online.execute({ Values: [1], Entity: "account", getMetadata: () => collectionMetadata });

const enumMetadata = {
    boundParameter: null,
    operationType: XrmEnum.ExecuteOperationType.Function,
    operationName: "Choose",
    parameterTypes: {
        Choice: {
            typeName: "mscrm.Choice",
            structuralProperty: XrmEnum.StructuralPropertyType.EnumerationType,
            enumProperties: [{ name: "First", value: 1 }, { name: "Second", value: 2 }],
        },
    },
} as const;
Xrm.WebApi.online.execute({ Choice: 1, getMetadata: () => enumMetadata });
// @ts-expect-error Enum value must be one of the values declared by the metadata.
Xrm.WebApi.online.execute({ Choice: 3, getMetadata: () => enumMetadata });
// @ts-expect-error Enum value cannot be an object.
Xrm.WebApi.online.execute({ Choice: {}, getMetadata: () => enumMetadata });

// Both explicit generic arguments must retain request validation.
const incorrectCountRequest = { Count: "3", Label: "Total", Enabled: true, getMetadata: () => calculateMetadata };
// @ts-expect-error Explicit response typing must not bypass metadata checking.
Xrm.WebApi.online.execute<{ Total: number }, typeof incorrectCountRequest>(incorrectCountRequest);
// @ts-expect-error TypeScript cannot infer a second type argument after an explicit response type.
Xrm.WebApi.online.execute<{ Total: number }>(incorrectCountRequest);
// @ts-expect-error Undefined is not a number.
Xrm.WebApi.online.execute({ Count: undefined, Label: "Total", Enabled: true, getMetadata: () => calculateMetadata });
// @ts-expect-error Null is not a number.
Xrm.WebApi.online.execute({ Count: null, Label: "Total", Enabled: true, getMetadata: () => calculateMetadata });
declare const optionalCountRequest: {
    Count?: number;
    Label: string;
    Enabled: boolean;
    getMetadata(): typeof calculateMetadata;
};
// @ts-expect-error A metadata parameter must be present, even if its property type is otherwise correct.
Xrm.WebApi.online.execute(optionalCountRequest);

const boundMetadata = { ...collectionMetadata, boundParameter: "Entity" } as const;
const boundRequest = { Values: [1, 2], Entity: { name: "Example" }, getMetadata: () => boundMetadata };
Xrm.WebApi.online.execute(boundRequest);
const misspelledBoundRequest = {
    ...boundRequest,
    getMetadata: () => ({ ...boundMetadata, boundParameter: "Enttiy" } as const),
};
// @ts-expect-error Bound parameter must name an entry in parameterTypes.
Xrm.WebApi.online.execute(misspelledBoundRequest);
const missingBoundMetadataRequest = {
    Count: 3,
    Label: "Total",
    Enabled: true,
    Extra: {},
    getMetadata: () => ({ ...calculateMetadata, boundParameter: "Extra" } as const),
};
// @ts-expect-error Providing a bound property does not replace its required metadata entry.
Xrm.WebApi.online.execute(missingBoundMetadataRequest);

// Mutable, heterogeneous arrays must preserve checks on every union member.
const heterogeneousBatch = [calculateRequest, boundRequest, [calculateRequest, boundRequest]];
Xrm.WebApi.online.executeMultiple(heterogeneousBatch);
const invalidBatch = [calculateRequest, incorrectCountRequest];
// @ts-expect-error A valid union member must not hide an invalid one.
Xrm.WebApi.online.executeMultiple(invalidBatch);
const invalidChangeSetBatch = [boundRequest, [calculateRequest, incorrectCountRequest]];
// @ts-expect-error Validate invalid members of change set array variables as well.
Xrm.WebApi.online.executeMultiple(invalidChangeSetBatch);
Xrm.WebApi.online.executeMultiple([]);
Xrm.WebApi.online.executeMultiple([[]]);
Xrm.WebApi.online.executeMultiple([calculateRequest, [boundRequest]] as const);
// @ts-expect-error Change sets cannot themselves contain change sets.
Xrm.WebApi.online.executeMultiple([[[calculateRequest]]]);

// All supported EDM primitive mappings.
const primitiveMetadata = {
    boundParameter: null,
    operationType: XrmEnum.ExecuteOperationType.Action,
    operationName: "Primitives",
    parameterTypes: {
        Binary: { typeName: "Edm.Binary", structuralProperty: 1 },
        Boolean: { typeName: "Edm.Boolean", structuralProperty: 1 },
        Date: { typeName: "Edm.Date", structuralProperty: 1 },
        DateTimeOffset: { typeName: "Edm.DateTimeOffset", structuralProperty: 1 },
        Decimal: { typeName: "Edm.Decimal", structuralProperty: 1 },
        Double: { typeName: "Edm.Double", structuralProperty: 1 },
        Guid: { typeName: "Edm.Guid", structuralProperty: 1 },
        Int16: { typeName: "Edm.Int16", structuralProperty: 1 },
        Int32: { typeName: "Edm.Int32", structuralProperty: 1 },
        Int64: { typeName: "Edm.Int64", structuralProperty: 1 },
        String: { typeName: "Edm.String", structuralProperty: 1 },
    },
} as const satisfies Xrm.ExecuteRequestMetadata;
const primitiveRequest = {
    Binary: "AQID",
    Boolean: true,
    Date: "2026-11-14",
    DateTimeOffset: "2026-11-14T00:00:00Z",
    Decimal: 1.5,
    Double: 1.5,
    Guid: "00000000-0000-0000-0000-000000000001",
    Int16: 1,
    Int32: 2,
    Int64: 3,
    String: "value",
    getMetadata: () => primitiveMetadata,
};
Xrm.WebApi.online.execute(primitiveRequest);
// @ts-expect-error GUIDs are represented by strings.
Xrm.WebApi.online.execute({ ...primitiveRequest, Guid: 123 });
// @ts-expect-error Date values are represented by strings.
Xrm.WebApi.online.execute({ ...primitiveRequest, Date: new Date() });
// @ts-expect-error Base64 binary values are represented by strings.
Xrm.WebApi.online.execute({ ...primitiveRequest, Binary: [1, 2, 3] });
// @ts-expect-error Decimal values are numbers.
Xrm.WebApi.online.execute({ ...primitiveRequest, Decimal: "1.5" });
// @ts-expect-error Int64 values are numbers.
Xrm.WebApi.online.execute({ ...primitiveRequest, Int64: "3" });

Xrm.WebApi.online.execute({ Choice: 2, getMetadata: () => enumMetadata });
// @ts-expect-error Numeric enum metadata does not permit string values.
Xrm.WebApi.online.execute({ Choice: "1", getMetadata: () => enumMetadata });
const stringEnumMetadata = {
    ...enumMetadata,
    parameterTypes: {
        Choice: {
            typeName: "mscrm.Choice",
            structuralProperty: XrmEnum.StructuralPropertyType.EnumerationType,
            enumProperties: [{ name: "First", value: "first" }, { name: "Second", value: "second" }],
        },
    },
} as const;
Xrm.WebApi.online.execute({ Choice: "first", getMetadata: () => stringEnumMetadata });
Xrm.WebApi.online.execute({ Choice: "second", getMetadata: () => stringEnumMetadata });
// @ts-expect-error String enum values must match the metadata's values, not its member names.
Xrm.WebApi.online.execute({ Choice: "First", getMetadata: () => stringEnumMetadata });
// @ts-expect-error String enum metadata does not permit numeric values.
Xrm.WebApi.online.execute({ Choice: 1, getMetadata: () => stringEnumMetadata });
const unspecifiedEnumMetadata = {
    ...enumMetadata,
    parameterTypes: { Choice: { typeName: "mscrm.Choice", structuralProperty: 3 } },
} as const;
Xrm.WebApi.online.execute({ Choice: 1, getMetadata: () => unspecifiedEnumMetadata });
Xrm.WebApi.online.execute({ Choice: "first", getMetadata: () => unspecifiedEnumMetadata });
// @ts-expect-error Enum values must still be strings or numbers when their members are unspecified.
Xrm.WebApi.online.execute({ Choice: true, getMetadata: () => unspecifiedEnumMetadata });
const emptyEnumMetadata = {
    ...enumMetadata,
    parameterTypes: { Choice: { typeName: "mscrm.Choice", structuralProperty: 3, enumProperties: [] } },
} as const;
// @ts-expect-error No member values are declared in an explicitly empty enum.
Xrm.WebApi.online.execute({ Choice: 1, getMetadata: () => emptyEnumMetadata });
const enumBatch = [{ Choice: 1, getMetadata: () => enumMetadata }, {
    Choice: "first",
    getMetadata: () => stringEnumMetadata,
}];
// Values widen to number/string in a mutable array, so annotate requests to preserve membership.
const numericEnumRequest: Xrm.ExecuteRequest<typeof enumMetadata> = { Choice: 1, getMetadata: () => enumMetadata };
const stringEnumRequest: Xrm.ExecuteRequest<typeof stringEnumMetadata> = {
    Choice: "first",
    getMetadata: () => stringEnumMetadata,
};
Xrm.WebApi.online.executeMultiple([numericEnumRequest, [stringEnumRequest]]);
// @ts-expect-error Widened enum values cannot be proven to belong to a literal enum.
Xrm.WebApi.online.executeMultiple(enumBatch);
// @ts-expect-error Enum membership is checked in change sets.
Xrm.WebApi.online.executeMultiple([numericEnumRequest, [{ Choice: "third", getMetadata: () => stringEnumMetadata }]]);

const stringCollectionMetadata = {
    ...collectionMetadata,
    parameterTypes: { Values: { typeName: "Collection(Edm.String)", structuralProperty: 4 } },
} as const;
Xrm.WebApi.online.execute({ Values: ["a", "b"], getMetadata: () => stringCollectionMetadata });
Xrm.WebApi.online.execute({ Values: [], getMetadata: () => stringCollectionMetadata });
// @ts-expect-error A collection must be an array.
Xrm.WebApi.online.execute({ Values: "a", getMetadata: () => stringCollectionMetadata });
// @ts-expect-error A single incorrect element invalidates the collection.
Xrm.WebApi.online.execute({ Values: ["a", 1], getMetadata: () => stringCollectionMetadata });
// @ts-expect-error Collections cannot be null.
Xrm.WebApi.online.execute({ Values: null, getMetadata: () => stringCollectionMetadata });
const complexMetadata = {
    ...collectionMetadata,
    parameterTypes: { Options: { typeName: "mscrm.PagingInfo", structuralProperty: 2 } },
} as const;
Xrm.WebApi.online.execute({ Options: { PageNumber: 1 }, getMetadata: () => complexMetadata });
// @ts-expect-error Complex parameters require objects.
Xrm.WebApi.online.execute({ Options: "page 1", getMetadata: () => complexMetadata });
// @ts-expect-error Complex parameters cannot be null.
Xrm.WebApi.online.execute({ Options: null, getMetadata: () => complexMetadata });
// @ts-expect-error Entity parameters cannot be null.
Xrm.WebApi.online.execute({ Values: [1], Entity: null, getMetadata: () => collectionMetadata });
const unknownMetadata = {
    ...collectionMetadata,
    parameterTypes: { Value: { typeName: "Custom", structuralProperty: 0 } },
} as const;
Xrm.WebApi.online.execute({ Value: "custom value", getMetadata: () => unknownMetadata });
Xrm.WebApi.online.execute({ Value: {}, getMetadata: () => unknownMetadata });
// @ts-expect-error Unknown parameter types still require a property.
Xrm.WebApi.online.execute({ getMetadata: () => unknownMetadata });
// @ts-expect-error Requests require getMetadata.
Xrm.WebApi.online.execute({ Count: 3 });
const invalidStructuralRequest = {
    getMetadata: () => ({
        ...unknownMetadata,
        parameterTypes: { Value: { typeName: "Custom", structuralProperty: 6 } },
    } as const),
};
// @ts-expect-error Unsupported structural property.
Xrm.WebApi.online.execute(invalidStructuralRequest);
// @ts-expect-error Operation types must be a supported category.
Xrm.WebApi.online.execute({ getMetadata: () => ({ ...calculateMetadata, operationType: 3 }) });
const invalidCrudNameRequest = {
    getMetadata:
        () => ({ boundParameter: null, operationType: 2, operationName: "Invalid", parameterTypes: {} } as const),
};
// @ts-expect-error CRUD operation names must be supported CRUD operations.
Xrm.WebApi.online.execute(invalidCrudNameRequest);

class ChooseRequest implements Xrm.ExecuteRequest<typeof enumMetadata> {
    constructor(public Choice: 1 | 2) {}
    getMetadata() {
        return enumMetadata;
    }
}
class IncorrectChooseRequest {
    Choice = 3;
    getMetadata() {
        return enumMetadata;
    }
}
Xrm.WebApi.online.execute(new ChooseRequest(1));
Xrm.WebApi.online.executeMultiple([new ChooseRequest(2), [new ChooseRequest(1)]]);
// @ts-expect-error A class's enum value must belong to the members declared by its metadata.
Xrm.WebApi.online.execute(new IncorrectChooseRequest());

// Metadata loaded dynamically cannot supply a compile-time union of enum member values.
declare const dynamicEnumMembers: Xrm.ExecuteRequestEnumProperty[];
const dynamicEnumMetadata = {
    ...enumMetadata,
    parameterTypes: {
        Choice: { typeName: "mscrm.Choice", structuralProperty: 3, enumProperties: dynamicEnumMembers },
    },
} as const;
Xrm.WebApi.online.execute({ Choice: 3, getMetadata: () => dynamicEnumMetadata });
// @ts-expect-error Dynamic enum members still restrict the JavaScript representation.
Xrm.WebApi.online.execute({ Choice: false, getMetadata: () => dynamicEnumMetadata });

declare const unionRequest: typeof calculateRequest | typeof boundRequest;
Xrm.WebApi.online.execute(unionRequest);
declare const invalidUnionRequest: typeof calculateRequest | typeof incorrectCountRequest;
// @ts-expect-error Validate every member of a union passed to execute.
Xrm.WebApi.online.execute(invalidUnionRequest);
