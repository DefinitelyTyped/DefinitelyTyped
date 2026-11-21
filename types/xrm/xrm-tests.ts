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

// Execute validation is opt-in. Legacy calls retain any, including dynamically constructed requests.
async function testLegacyExecute(dynamicRequest: any, dynamicBatch: any[]) {
    // $ExpectType any
    const response = await Xrm.WebApi.online.execute(dynamicRequest);
    response.customResponseMember;
    // $ExpectType any
    const body = await response.json();
    body.customBodyMember;
    // $ExpectType any[]
    const responses = await Xrm.WebApi.online.executeMultiple(dynamicBatch);
    responses[0].customResponseMember;
    // Metadata does not trigger implicit validation or change the legacy response type.
    // $ExpectType any
    await Xrm.WebApi.online.execute({ Count: "dynamic", getMetadata: () => calculateMetadata });
}

const calculateMetadata = {
    boundParameter: null,
    operationType: XrmEnum.ExecuteOperationType.Function,
    operationName: "new_Calculate",
    parameterTypes: {
        Count: { typeName: "Edm.Int32", structuralProperty: XrmEnum.StructuralPropertyType.PrimitiveType },
        Label: { typeName: "Edm.String", structuralProperty: XrmEnum.StructuralPropertyType.PrimitiveType },
        Enabled: { typeName: "Edm.Boolean", structuralProperty: XrmEnum.StructuralPropertyType.PrimitiveType },
    },
} as const satisfies Xrm.ExecuteRequestMetadata;
interface CalculateResponse {
    Total: number;
}
const calculateRequest: Xrm.ExecuteRequest<typeof calculateMetadata, CalculateResponse> = {
    Count: 3,
    Label: "Total",
    Enabled: true,
    getMetadata: () => calculateMetadata,
};
// @ts-expect-error Count is required by the metadata.
const missingCount: Xrm.ExecuteRequest<typeof calculateMetadata> = {
    Label: "Total",
    Enabled: true,
    getMetadata: () => calculateMetadata,
};
const incorrectCount: Xrm.ExecuteRequest<typeof calculateMetadata> = {
    ...calculateRequest,
    // @ts-expect-error Metadata declares a numeric Count.
    Count: "3",
};
const incorrectLabel: Xrm.ExecuteRequest<typeof calculateMetadata> = {
    ...calculateRequest,
    // @ts-expect-error Metadata declares a string Label.
    Label: 3,
};
const incorrectEnabled: Xrm.ExecuteRequest<typeof calculateMetadata> = {
    ...calculateRequest,
    // @ts-expect-error Metadata declares a boolean Enabled.
    Enabled: "true",
};
declare const optionalCount: {
    Count?: number;
    Label: string;
    Enabled: boolean;
    getMetadata(): typeof calculateMetadata;
};
// @ts-expect-error An optional property does not guarantee the required parameter.
const missingOptionalCount: Xrm.ExecuteRequest<typeof calculateMetadata> = optionalCount;
// Metadata does not describe nullability; nullable operation arguments must remain accepted.
const nullableRequest: Xrm.ExecuteRequest<typeof calculateMetadata> = {
    Count: null,
    Label: null,
    Enabled: null,
    getMetadata: () => calculateMetadata,
};

// Metadata-first classes allow extra helper state and report errors at the declaration.
class CalculateRequest implements Xrm.CheckedExecuteRequest<CalculateRequest> {
    declare readonly __responseType?: CalculateResponse;
    cache = new Map<string, number>();
    constructor(public Count: number, public Label: string, public Enabled: boolean) {}
    getMetadata() {
        return calculateMetadata;
    }
}
class IncorrectCalculateRequest implements Xrm.CheckedExecuteRequest<IncorrectCalculateRequest> {
    // @ts-expect-error The property conflicts with the returned metadata, without calling execute.
    Count = "wrong";
    Label = "Total";
    Enabled = true;
    getMetadata() {
        return calculateMetadata;
    }
}
// @ts-expect-error Required parameters are missing from the class.
class MissingCalculateRequest implements Xrm.CheckedExecuteRequest<MissingCalculateRequest> {
    getMetadata() {
        return calculateMetadata;
    }
}

// Completeness checks also require metadata for public data properties.
class CompleteCalculateRequest implements Xrm.CompleteExecuteRequest<CompleteCalculateRequest> {
    declare readonly __responseType?: CalculateResponse;
    private cache = new Map<string, number>();
    protected helperState = true;
    onComplete?(): void;
    constructor(public Count: number, public Label: string, public Enabled: boolean) {}
    clearCache() {
        this.cache.clear();
    }
    getMetadata() {
        return calculateMetadata;
    }
}
class IncompleteCalculateRequest implements Xrm.CompleteExecuteRequest<IncompleteCalculateRequest> {
    Count = 3;
    Label = "Total";
    Enabled = true;
    Extra = "needs metadata";
    // @ts-expect-error Completeness requires an Extra entry in parameterTypes.
    getMetadata() {
        return calculateMetadata;
    }
}
class OptionalParameterRequest implements Xrm.CompleteExecuteRequest<OptionalParameterRequest> {
    Count = 3;
    Label = "Total";
    Enabled = true;
    Extra?: string;
    // @ts-expect-error Optional public fields also need metadata in completeness mode.
    getMetadata() {
        return calculateMetadata;
    }
}

async function testExecuteResponseInference() {
    const response = await Xrm.WebApi.online.execute(calculateRequest);
    // $ExpectType CalculateResponse
    const body = await response.json();
    // $ExpectType number
    body.Total;
    // @ts-expect-error Associated response fields retain their types.
    const invalidTotal: string = body.Total;
    // @ts-expect-error Unknown response field.
    body.Unknown;
    const instance = new CalculateRequest(3, "Total", true);
    // $ExpectType CalculateResponse
    const classBody = await (await Xrm.WebApi.online.execute(instance)).json();
    // $ExpectType CalculateResponse
    const completeBody = await (await Xrm.WebApi.online.execute(new CompleteCalculateRequest(3, "Total", true))).json();
    const responses = await Xrm.WebApi.online.executeMultiple([calculateRequest, [instance]]);
    // $ExpectType CalculateResponse
    await responses[0].json();
    const mutableBatch = [calculateRequest, [instance]];
    // $ExpectType CalculateResponse
    await (await Xrm.WebApi.online.executeMultiple(mutableBatch))[0].json();
    // $ExpectType { Total: number; }
    const extracted: Xrm.ExecuteResponseBody<CalculateRequest> = { Total: 3 };
    extracted.Total;
}

const boundMetadata = {
    boundParameter: "Entity",
    operationType: XrmEnum.ExecuteOperationType.Action,
    operationName: "Process",
    parameterTypes: {
        Values: { typeName: "Collection(Edm.Int32)", structuralProperty: 4 },
        Entity: { typeName: "mscrm.account", structuralProperty: 5 },
        Options: { typeName: "mscrm.PagingInfo", structuralProperty: 2 },
    },
} as const satisfies Xrm.ExecuteRequestMetadata;
const boundRequest: Xrm.ExecuteRequest<typeof boundMetadata> = {
    Values: [1, 2],
    Entity: { name: "Example" },
    Options: { PageNumber: 1 },
    getMetadata: () => boundMetadata,
};
const wrongCollection: Xrm.ExecuteRequest<typeof boundMetadata> = {
    ...boundRequest,
    // @ts-expect-error Primitive collection elements are checked.
    Values: ["1"],
};
const wrongEntity: Xrm.ExecuteRequest<typeof boundMetadata> = {
    ...boundRequest,
    // @ts-expect-error Entity values must be objects.
    Entity: "account",
};
const wrongComplex: Xrm.ExecuteRequest<typeof boundMetadata> = {
    ...boundRequest,
    // @ts-expect-error Complex values must be objects.
    Options: 1,
};
const misspelledBoundMetadata = { ...boundMetadata, boundParameter: "Enttiy" } as const;
const misspelledBoundRequest: Xrm.ExecuteRequest<typeof misspelledBoundMetadata> = {
    ...boundRequest,
    // @ts-expect-error The bound parameter must name an entry in parameterTypes.
    getMetadata: () => misspelledBoundMetadata,
};

// Enum metadata is not assumed to enumerate every legal value or flags combination.
const enumMetadata = {
    boundParameter: null,
    operationType: 1,
    operationName: "Choose",
    parameterTypes: {
        Choice: {
            typeName: "mscrm.Choice",
            structuralProperty: 3,
            enumProperties: [{ name: "First", value: 1 }, { name: "Second", value: 2 }],
        },
    },
} as const satisfies Xrm.ExecuteRequestMetadata;
const flagsRequest: Xrm.ExecuteRequest<typeof enumMetadata> = { Choice: 3, getMetadata: () => enumMetadata };
const stringEnumRequest: Xrm.ExecuteRequest<typeof enumMetadata> = { Choice: "First", getMetadata: () => enumMetadata };
const wrongEnum: Xrm.ExecuteRequest<typeof enumMetadata> = {
    ...flagsRequest,
    // @ts-expect-error Enum representation must be a string or number (or null).
    Choice: {},
};

// CRUD and primitive metadata retain their discriminants.
const wrongPrimitiveMetadata: Xrm.ExecuteRequestPrimitiveParameterType = {
    // @ts-expect-error Invalid primitive type name.
    typeName: "Edm.Int325",
    structuralProperty: 1,
};
const wrongCrudMetadata: Xrm.ExecuteRequestCrudMetadata = {
    operationType: 2,
    operationName: "Create",
    parameterTypes: {},
    // @ts-expect-error CRUD operations cannot name a bound parameter.
    boundParameter: "Entity",
};

class UntypedCalculateRequest implements Xrm.CheckedExecuteRequest<UntypedCalculateRequest> {
    Count = 1;
    Label = "Total";
    Enabled = true;
    getMetadata() {
        return calculateMetadata;
    }
}
interface OtherExecuteBody {
    Name: string;
}
const otherRequest: Xrm.ExecuteRequest<typeof calculateMetadata, OtherExecuteBody> = {
    ...calculateRequest,
    getMetadata: () => calculateMetadata,
    __responseType: undefined,
};
const unknownResponseRequest: Xrm.ExecuteRequest<typeof calculateMetadata, unknown> = {
    ...calculateRequest,
    __responseType: undefined,
};
const satisfiesRequest = {
    Count: 1,
    Label: "Total",
    Enabled: true,
    getMetadata: () => calculateMetadata,
} satisfies Xrm.ExecuteRequest<typeof calculateMetadata, CalculateResponse>;
async function testOptInBoundaries() {
    // implements and satisfies do not add a phantom property to an inferred type.
    // $ExpectType any
    await Xrm.WebApi.online.execute(new UntypedCalculateRequest());
    // $ExpectType any
    await Xrm.WebApi.online.execute(satisfiesRequest);
    // $ExpectType unknown
    const unknownBody = await (await Xrm.WebApi.online.execute(unknownResponseRequest)).json();
    // @ts-expect-error Explicit unknown response bodies require narrowing.
    unknownBody.Total;
    const heterogeneousBatch = [calculateRequest, [otherRequest]];
    // $ExpectType CalculateResponse | OtherExecuteBody
    const unionBody = await (await Xrm.WebApi.online.executeMultiple(heterogeneousBatch))[0].json();
    // @ts-expect-error Narrow the union before accessing a member-specific field.
    unionBody.Total;
    // $ExpectType any[]
    await Xrm.WebApi.online.executeMultiple([calculateRequest, [{}]]);
    // $ExpectType any[]
    await Xrm.WebApi.online.executeMultiple([]);
    // $ExpectType any[]
    await Xrm.WebApi.online.executeMultiple([[]]);
    // $ExpectType CalculateResponse
    await (await Xrm.WebApi.online.executeMultiple([calculateRequest, [calculateRequest]] as const))[0].json();
    // $ExpectType any
    await Xrm.WebApi.online.execute(null);
    // $ExpectType any
    await Xrm.WebApi.online.execute({});
}

// Cover every supported EDM primitive representation without an exhaustive runtime schema.
const primitiveMetadata = {
    boundParameter: null,
    operationType: 0,
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
const primitiveRequest: Xrm.ExecuteRequest<typeof primitiveMetadata> = {
    Binary: "AQID",
    Boolean: true,
    Date: "2026-11-15",
    DateTimeOffset: new Date(),
    Decimal: 1.5,
    Double: 1.5,
    Guid: "00000000-0000-0000-0000-000000000001",
    Int16: 1,
    Int32: 2,
    Int64: 3,
    String: "value",
    getMetadata: () => primitiveMetadata,
};
const incorrectGuid: Xrm.ExecuteRequest<typeof primitiveMetadata> = {
    ...primitiveRequest,
    // @ts-expect-error GUID parameters use strings.
    Guid: 1,
};
const incorrectBinary: Xrm.ExecuteRequest<typeof primitiveMetadata> = {
    ...primitiveRequest,
    // @ts-expect-error Binary parameters use base64 strings.
    Binary: [1, 2],
};
const incorrectDate: Xrm.ExecuteRequest<typeof primitiveMetadata> = {
    ...primitiveRequest,
    // @ts-expect-error Date parameters are strings or Date objects.
    Date: 1,
};
const incorrectDecimal: Xrm.ExecuteRequest<typeof primitiveMetadata> = {
    ...primitiveRequest,
    // @ts-expect-error Decimal parameters use numbers.
    Decimal: true,
};
const stringCollectionMetadata = {
    ...boundMetadata,
    parameterTypes: { Values: { typeName: "Collection(Edm.String)", structuralProperty: 4 } },
    boundParameter: null,
} as const;
const stringCollectionRequest: Xrm.ExecuteRequest<typeof stringCollectionMetadata> = {
    Values: ["a", "b"],
    getMetadata: () => stringCollectionMetadata,
};
const nonArrayCollection: Xrm.ExecuteRequest<typeof stringCollectionMetadata> = {
    ...stringCollectionRequest,
    // @ts-expect-error Collections require arrays.
    Values: "a",
};
const mixedCollection: Xrm.ExecuteRequest<typeof stringCollectionMetadata> = {
    ...stringCollectionRequest,
    // @ts-expect-error Every primitive collection element must have the declared type.
    Values: ["a", 1],
};
const unknownMetadata = {
    ...stringCollectionMetadata,
    parameterTypes: { Value: { typeName: "Custom", structuralProperty: 0 } },
} as const;
const unknownParameter: Xrm.ExecuteRequest<typeof unknownMetadata> = {
    Value: { Arbitrary: true },
    getMetadata: () => unknownMetadata,
};
// @ts-expect-error Unknown value schemas still require the parameter's presence.
const missingUnknownParameter: Xrm.ExecuteRequest<typeof unknownMetadata> = { getMetadata: () => unknownMetadata };
