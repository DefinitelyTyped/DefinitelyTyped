/// <reference path="xrm-6.d.ts" />

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

var grids = Xrm.Page.getControl(( control ) =>
{
    return control.getControlType() === "subgrid";
});

var selectedGridReferences: Xrm.Page.LookupValue[] = [];

grids.forEach(( gridControl: Xrm.Page.GridControl ) =>
{
    gridControl.refresh();
});

var lookupAttribute = Xrm.Page.getControl<Xrm.Page.LookupControl>( "customerid" );

lookupAttribute.addCustomFilter( `<filter type="and">
    <condition attribute="address1_city" operator="eq" value="Redmond" />
</filter>`, "account" );

lookupAttribute.addPreSearch(() => { alert( "A search was performed." ); });

var lookupValues = lookupAttribute.getAttribute().getValue();

if ( lookupValues !== null )
    if ( !lookupValues[0].id || !lookupValues[0].entityType )
        throw new Error("Invalid value in Lookup control.");

Xrm.Page.ui.controls.forEach(( control ) => { control.setVisible( true ); });

Xrm.Page.ui.tabs.forEach(( tab ) =>
{
    tab.setVisible( true );

    tab.sections.forEach(( section ) =>
    {
        section.setVisible( true );
    });
});

Xrm.Page.data.entity.addOnSave(( context ) =>
{
    var eventArgs = context.getEventArgs();

    if ( eventArgs.getSaveMode() === Xrm.Page.SaveMode.AutoSave || eventArgs.getSaveMode() === Xrm.Page.SaveMode.SaveAndClose )
        eventArgs.preventDefault();
});

alert( `The current form type is: ${Xrm.Page.ui.getFormType() }` );

alert( `The current entity type is: ${Xrm.Page.data.entity.getEntityName() }` );
