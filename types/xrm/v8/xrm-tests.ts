/// Demonstrate usage in the browser's window object

window.Xrm.Utility.alertDialog("message", () => {});
parent.Xrm.Page.context.getOrgLcid();

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

const lookupAttribute = <Xrm.Page.LookupControl> Xrm.Page.getControl("customerid");
const lookupAttribute2 = Xrm.Page.getControl<Xrm.Page.LookupControl>("customerid");

/// Demonstrate ES6 String literal syntax

lookupAttribute.addCustomFilter(`<filter type="and">
    <condition attribute="address1_city" operator="eq" value="Redmond" />
</filter>`, "account");

lookupAttribute.addPreSearch(() => { alert("A search was performed."); });

/// Demonstrate strong-typed attribute association with strong-typed control

const lookupValues = lookupAttribute.getAttribute().getValue();

if (lookupValues !== null)
    if (!lookupValues[0].id || !lookupValues[0].entityType)
        throw new Error("Invalid value in Lookup control.");

/// Demonstrate v7.0 BPF API

if (Xrm.Page.data.process != null)
    Xrm.Page.data.process.moveNext((status) => { alert(`Process moved forward with status: ${status}`); });

/// Demonstrate v7.1 Quick Create form

Xrm.Utility.openQuickCreate("account").then(
    (object) => { if (object) alert(`Newly created record Id: ${object.savedEntityReference.id}`); },
    (error) => {console.log(`Code: ${error.errorCode}, Message: ${error.message}`); });

/// Make all controls visible.

// Xrm.Page.ui.controls.forEach((control) => { control.setVisible(true); }); // No longer works
Xrm.Page.ui.controls.forEach((control: Xrm.Page.StandardControl) => { control.setVisible(true); }); // Must cast to StandardControl

/// Make all tabs and sections visible.

Xrm.Page.ui.tabs.forEach((tab) => {
    tab.setVisible(true);

    tab.sections.forEach((section) => {
        section.setVisible(true);
    });
});

/// Demonstrate OnSave event context.

Xrm.Page.data.entity.addOnSave((context: Xrm.Page.SaveEventContext) => {
    const eventArgs = context.getEventArgs();

    if (eventArgs.getSaveMode() === XrmEnum.SaveMode.AutoSave || eventArgs.getSaveMode() === XrmEnum.SaveMode.SaveAndClose)
        eventArgs.preventDefault();
});

/// Demonstrate ES6 String literal with templates

alert(`The current form type is: ${Xrm.Page.ui.getFormType() }`);

alert(`The current entity type is: ${Xrm.Page.data.entity.getEntityName() }`);

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

/// Demonstrate v8 AutoComplete

let autoCompleteControl = Xrm.Page.getControl<Xrm.Page.AutoLookupControl>("name");
const userInput = autoCompleteControl.getValue();
const accountResult = {  };
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
autoCompleteControl.removeOnKeyPress(() => {});
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
