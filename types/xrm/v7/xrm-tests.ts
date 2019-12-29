/// Demonstrate usage in the browser's window object

window.Xrm.Utility.alertDialog( "message", () => {} );
parent.Xrm.Page.context.getOrgLcid();

/// Demonstrate clientglobalcontext.d.ts

function _getContext()
{
    const errorMessage = "Context is not available.";
    if ( typeof GetGlobalContext !== "undefined" )
    { return GetGlobalContext(); }
    else
    {
        if ( typeof Xrm !== "undefined" )
        {
            return Xrm.Page.context;
        }
        else { throw new Error( errorMessage ); }
    }
}

const crmContext = _getContext();

/// Demonstrate iterator typing

const grids = Xrm.Page.getControl(( control ) =>
{
    return control.getControlType() === "subgrid";
});

const selectedGridReferences: Xrm.Page.LookupValue[] = [];

/// Demonstrate iterator typing with v7.1 additions

grids.forEach(( gridControl: Xrm.Page.GridControl ) =>
{
    gridControl.getGrid().getSelectedRows().forEach(( row ) =>
    {
        selectedGridReferences.push( row.getData().getEntity().getEntityReference() );
    });
});

/// Demonstrate generic overload vs typecast

const lookupAttribute = Xrm.Page.getControl( "customerid" ) as Xrm.Page.LookupControl;
const lookupAttribute2 = Xrm.Page.getControl( "customerid" ) as Xrm.Page.LookupControl;

/// Demonstrate ES6 String literal syntax

lookupAttribute.addCustomFilter( `<filter type="and">
    <condition attribute="address1_city" operator="eq" value="Redmond" />
</filter>`, "account" );

lookupAttribute.addPreSearch(() => { alert( "A search was performed." ); });

/// Demonstrate strong-typed attribute association with strong-typed control

const lookupValues = lookupAttribute.getAttribute().getValue();

if ( lookupValues !== null )
    if ( !lookupValues[0].id || !lookupValues[0].entityType )
        throw new Error("Invalid value in Lookup control.");

/// Demonstrate v7.0 BPF API

if (Xrm.Page.data.process != null)
    Xrm.Page.data.process.moveNext(( status ) => { alert( `Process moved forward with status: ${status}` ); });

/// Demonstrate v7.1 Quick Create form

Xrm.Utility.openQuickCreate(( newRecord ) => { alert( `Newly created record Id: ${newRecord.id}` ); }, "account" );

/// Make all controls visible.

Xrm.Page.ui.controls.forEach(( control ) => { control.setVisible( true ); });

/// Make all tabs and sections visible.

Xrm.Page.ui.tabs.forEach(( tab ) =>
{
    tab.setVisible( true );

    tab.sections.forEach(( section ) =>
    {
        section.setVisible( true );
    });
});

/// Demonstrate OnSave event context.

Xrm.Page.data.entity.addOnSave(( context ) =>
{
    const eventArgs = context.getEventArgs();

    if ( eventArgs.getSaveMode() === XrmEnum.SaveMode.AutoSave || eventArgs.getSaveMode() === XrmEnum.SaveMode.SaveAndClose )
        eventArgs.preventDefault();
});

/// Demonstrate ES6 String literal with templates

alert( `The current form type is: ${Xrm.Page.ui.getFormType() }` );

alert( `The current entity type is: ${Xrm.Page.data.entity.getEntityName() }` );

/// Demonstrate Optionset Value as int in Turbo Forms

const optionSetAttribute = Xrm.Page.getAttribute( "statuscode" ) as Xrm.Page.OptionSetAttribute;
const optionValue: number = optionSetAttribute.getOptions()[0].value;

/// Demonstrate Control.setFocus();

optionSetAttribute.controls.get(0).setFocus();

/// Demonstrate setFormNotification

let level: Xrm.Page.ui.FormNotificationLevel;
level = "ERROR";
Xrm.Page.ui.setFormNotification("Test", level, "uniqueId");

/// Demonstrate Requirement Level and Submit Mode both via string parameters and String Literal Types

let requirementLevel: Xrm.Page.RequirementLevel = "none";
let requirementLevelString = "none";
let submitMode: Xrm.Page.SubmitMode = "always";
let submitModeString = "always";

let attribute = Xrm.Page.getAttribute("customerid") as Xrm.Page.LookupAttribute;
attribute.setSubmitMode(submitMode);
attribute.setSubmitMode(submitMode);
attribute.setRequiredLevel(requirementLevel);
attribute.setRequiredLevel(requirementLevelString);
