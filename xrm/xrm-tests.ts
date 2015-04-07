/// <reference path="xrm.d.ts" />
/// <reference path="clientglobalcontext.d.ts" />
/// <reference path="parature.d.ts" />

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

/// Delegate selector call into getControl
var grids = Xrm.Page.getControl(( control ) =>
{
    return control.getControlType() === "subgrid";
});

/// Describing the shape of an array.
var selectedGridReferences: Xrm.Page.LookupValue[] = [];

/// Dynamic casting into lambda, raising from Xrm.Page.Control to Xrm.Page.GridControl
grids.forEach(( gridControl: Xrm.Page.GridControl ) =>
{
    gridControl.getGrid().getSelectedRows().forEach(( row ) =>
    {
        selectedGridReferences.push( row.getData().getEntity().getEntityReference() );
    })
});

/// Working to a string attribute, through getControl
var stringControlType = Xrm.Page.getControl<Xrm.Page.StandardControl>( "new_someStringAttribute" );
var stringAttribute = stringControlType.getAttribute<Xrm.Page.StringAttribute>();

stringAttribute.setValue( "New String Value" );



/// Specialized control interfaces expose only appropriate members
var lookupAttribute = Xrm.Page.getControl<Xrm.Page.LookupControl>( "customerid" );

/// ES6 String-literal style
lookupAttribute.addCustomFilter( `<filter type="and">
    <condition attribute="address1_city" operator="eq" value="Redmond" />
</filter>`, "account" );

/// Lambda event handler declaration
lookupAttribute.addPreSearch(() => { alert( "A search was performed." ); });

/// Type inference by interface casts getAttribute and getValue appropriately
var lookupValues = lookupAttribute.getAttribute().getValue();

if ( lookupValues !== null )
    if ( !lookupValues[0].id || !lookupValues[0].entityType )
        throw new Error("Invalid value in Lookup control.");

/// Working with the Business Process Flow API
if (Xrm.Page.data.process != null)
    Xrm.Page.data.process.moveNext(( status ) => { alert( `Process moved forward with status: ${status}` ) });

/// Opening the QuickCreate form.
Xrm.Utility.openQuickCreate(( newRecord ) => { alert( `Newly created record Id: ${newRecord.id}` ); }, "account" );

/// Setting every control on the form to visible
Xrm.Page.ui.controls.forEach(( control ) => { control.setVisible( true ); });

/// Setting every tab and section on the form to visible
Xrm.Page.ui.tabs.forEach(( tab ) =>
{
    tab.setVisible( true );

    tab.sections.forEach(( section ) =>
    {
        section.setVisible( true );
    });
});

/// OnSave handler with context
Xrm.Page.data.entity.addOnSave(( context ) =>
{
    var eventArgs = context.getEventArgs();

    /// Use of enumerations for more descriptive code
    if ( eventArgs.getSaveMode() === Xrm.Page.SaveMode.AutoSave || eventArgs.getSaveMode() === Xrm.Page.SaveMode.SaveAndClose )
        eventArgs.preventDefault();
});


alert( `The current form type is: ${Xrm.Page.ui.getFormType() }` );

alert( `The current entity type is: ${Xrm.Page.data.entity.getEntityName() }` );
