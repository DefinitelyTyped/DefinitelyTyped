/// <reference path="xrm.d.ts" />
/// <reference path="parature.d.ts" />

/// Demonstrate clientglobalcontext.d.ts 

function _getContext()
{
    var errorMessage = "Context is not available.";
    if ( typeof GetGlobalContext != "undefined" )
    { return GetGlobalContext(); }
    else
    {
        if ( typeof Xrm != "undefined" )
        {
            return Xrm.Page.context;
        }
        else { throw new Error( errorMessage ); }
    }
}

var crmContext = _getContext();

/// Demonstrate iterator typing

var grids = Xrm.Page.getControl(( control ) =>
{
    return control.getControlType() === "subgrid";
});

var selectedGridReferences: Xrm.Page.LookupValue[] = [];

/// Demonstrate iterator typing with v7.1 additions

grids.forEach(( gridControl: Xrm.Page.GridControl ) =>
{
    gridControl.getGrid().getSelectedRows().forEach(( row ) =>
    {
        selectedGridReferences.push( row.getData().getEntity().getEntityReference() );
    })
});

/// Demonstrate generic overload vs typecast

var lookupAttribute = <Xrm.Page.LookupControl>Xrm.Page.getControl( "customerid" );
var lookupAttribute2 = Xrm.Page.getControl<Xrm.Page.LookupControl>( "customerid" );

/// Demonstrate ES6 String literal syntax

lookupAttribute.addCustomFilter( `<filter type="and">
    <condition attribute="address1_city" operator="eq" value="Redmond" />
</filter>`, "account" );

lookupAttribute.addPreSearch(() => { alert( "A search was performed." ); });

/// Demonstrate strong-typed attribute association with strong-typed control

var lookupValues = lookupAttribute.getAttribute().getValue();

if ( lookupValues !== null )
    if ( !lookupValues[0].id || !lookupValues[0].entityType )
        throw new Error("Invalid value in Lookup control.");

/// Demonstrate v7.0 BPF API

if (Xrm.Page.data.process != null)
    Xrm.Page.data.process.moveNext(( status ) => { alert( `Process moved forward with status: ${status}` ) });

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
    var eventArgs = context.getEventArgs();

    if ( eventArgs.getSaveMode() === Xrm.Page.SaveMode.AutoSave || eventArgs.getSaveMode() === Xrm.Page.SaveMode.SaveAndClose )
        eventArgs.preventDefault();
});

/// Demonstrate ES6 String literal with templates

alert( `The current form type is: ${Xrm.Page.ui.getFormType() }` );

alert( `The current entity type is: ${Xrm.Page.data.entity.getEntityName() }` );
