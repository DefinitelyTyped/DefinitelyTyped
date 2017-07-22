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



class GlobalContext{
    
    _crmContext: Xrm.Context;
    userName: string;
    contstructor(){
        this._crmContext=_getContext();
        this.userName=this._crmContext.getUserName();
    }
    TestContext():void{
        
        console.log("--- Xrm.Page.context Object ---");
        console.log("Client:"+this._crmContext.client.getClient());
        console.log("Client State:"+this._crmContext.client.getClientState());
        console.log("Client Form Factor:"+this._crmContext.client.getFormFactor());
        console.log("Client URL:"+this._crmContext.getClientUrl());
        console.log("Current Theme"+this._crmContext.getCurrentTheme());
        console.log("Is Auto Save Enabled"+this._crmContext.getIsAutoSaveEnabled());
        console.log("ORG Lc ID"+this._crmContext.getOrgLcid());
        console.log("Organization Name"+this._crmContext.getOrgUniqueName());
        console.log("Querystring parameters"+this._crmContext.getQueryStringParameters());
        console.log("Timezone Offset"+this._crmContext.getTimeZoneOffsetMinutes());
        console.log("User Id"+this._crmContext.getUserId());
        console.log("User Lc Id"+this._crmContext.getUserLcid());

        console.log("Username"+this.userName);

        this._crmContext.getUserRoles().forEach((role:string)=>{
            console.log(this.userName + "has "+ role);
        });

        console.log("Version"+this._crmContext.getVersion());
        console.log("Prepend Org Name "+this._crmContext.prependOrgName("test"));
    }           
}
let context=new GlobalContext();
context.TestContext();

class DataEntity{
    TestDataEntity():void{
        console.log("--- Xrm.Page.data.entity Object ---");
        console.log("       ---Xrm.Page.data.entity.attributes---")
        Xrm.Page.data.entity.attributes.forEach((attribute)=>{
            console.log("       Attribute Name:"+attribute.getName()+ " is "+attribute.getAttributeType());
        });
        console.log("Data Xml:"+Xrm.Page.data.entity.getDataXml());
        console.log("Entity Name:"+Xrm.Page.data.entity.getEntityName());
        console.log("ID:"+Xrm.Page.data.entity.getId());
        console.log("Is Dirty:"+Xrm.Page.data.entity.getIsDirty());
        console.log("Primary Attribute Value:"+Xrm.Page.data.entity.getPrimaryAttributeValue());

        /** To-Do: Events will be added */
    }
    TestDataAttribute():void{
        console.log("--- Xrm.Page.data.entity.attribute Object ---");

        Xrm.Page.getAttribute("new_integer").addOnChange((executionContext)=>{
            console.log("Save mode on change:"+executionContext.getEventArgs().getSaveMode());

        });
        function floatOnChange(executionContext:Xrm.Page.EventContext):void{
        console.log("Save mode on change:"+executionContext.getEventArgs().getSaveMode());
        }
        Xrm.Page.getAttribute("new_float").addOnChange(floatOnChange);
        
        console.log("Initial Value OptionSet:"+(<Xrm.Page.BooleanAttribute>Xrm.Page.getAttribute("new_boolean")).getInitialValue());
        console.log("100,000,001 Option:"+(<Xrm.Page.OptionSetAttribute>Xrm.Page.getAttribute("new_optionset")).getOption(100000001));
        (<Xrm.Page.OptionSetAttribute>Xrm.Page.getAttribute("new_optionset")).getOptions().forEach((option)=>{
            console.log("Option is "+option);
        });
        console.log("Selected Option:"+(<Xrm.Page.OptionSetAttribute>Xrm.Page.getAttribute("new_optionset")).getSelectedOption());
        console.log("Initial Value OptionSet:"+(<Xrm.Page.OptionSetAttribute>Xrm.Page.getAttribute("new_optionset")).getInitialValue());
        console.log("Selected Option Text:"+(<Xrm.Page.OptionSetAttribute>Xrm.Page.getAttribute("new_optionset")).getText());
        console.log("Date Format:"+Xrm.Page.getAttribute("new_datetime").getFormat());
        console.log("Is Dirty name:"+Xrm.Page.getAttribute("new_name").getIsDirty());
        console.log("is lookup party list :"+Xrm.Page.getAttribute("new_lookup").getIsPartyList());
        console.log("lookup name:"+Xrm.Page.getAttribute("new_lookup").getName());
        console.log("Parent Name:"+Xrm.Page.getAttribute("new_lookup").getParent().getEntityName());
        console.log("can User create:"+Xrm.Page.getAttribute("new_lookup").getUserPrivilege().canCreate);
        console.log("Min Integer:"+(<Xrm.Page.NumberAttribute>Xrm.Page.getAttribute("new_integer")).getMin());
        console.log("Decimal Precision:"+(<Xrm.Page.NumberAttribute>Xrm.Page.getAttribute("new_decimal")).getPrecision());
        console.log("Max Double:"+(<Xrm.Page.NumberAttribute>Xrm.Page.getAttribute("new_double")).getMax());
        console.log("is name required:"+Xrm.Page.getAttribute("new_name").getRequiredLevel());
        Xrm.Page.getAttribute("new_lookup").setRequiredLevel("recommended");
        Xrm.Page.getAttribute("new_date").setSubmitMode("always");
        Xrm.Page.getAttribute("new_money").setSubmitMode("never");
        Xrm.Page.getAttribute("new_integer").setSubmitMode("dirty");
        console.log("Submit Mode:"+Xrm.Page.getAttribute("new_name").getSubmitMode());
        console.log("Integer Value:"+(<Xrm.Page.NumberAttribute>Xrm.Page.getAttribute("new_integer")).getValue());

        let lookup: Xrm.Page.LookupValue[] = [];
        lookup[0].id="6FB63A65-F66E-E711-80DF-3863BB359F18";
        lookup[0].entityType="account";
        lookup[0].name="A. Datum Corporation (sample)";
        Xrm.Page.getAttribute<Xrm.Page.LookupAttribute>("new_lookup").setValue(lookup);
        Xrm.Page.getAttribute("new_float").fireOnChange();
        Xrm.Page.getAttribute("new_float").removeOnChange(floatOnChange);
        Xrm.Page.getAttribute("new_float").fireOnChange();
        
    }
    TestUiControl():void{
        Xrm.Page.getControl("new_lookup").setDisabled(true);
        console.log("Is Lookup Disabled:"+Xrm.Page.getControl("new_lookup").getDisabled());
        console.log("Lookup Attribute Type:"+Xrm.Page.getControl<Xrm.Page.LookupControl>("new_lookup").getAttribute().getAttributeType());
        console.log("Grid Control Type:"+Xrm.Page.getControl("subgrid").getControlType());
        console.log("Lookup Control Name:"+Xrm.Page.getControl("new_lookup").getName());
        console.log("Grid Control Parent:"+Xrm.Page.getControl("subgrid").getParent());
        console.log("Lookup Attribute Type:"+Xrm.Page.getControl<Xrm.Page.LookupControl>("new_lookup").getAttribute().getValue()[0].name);
        console.log("lookup label :"+Xrm.Page.getControl("new_lookup").getLabel());
        Xrm.Page.getControl("new_datetime").setLabel("DateTime");
        

        console.log("Will Show time:"+Xrm.Page.getControl<Xrm.Page.DateControl>("new_datetime").getShowTime());
        console.log("Showing time:"+Xrm.Page.getControl<Xrm.Page.DateControl>("new_datetime").setShowTime(true));
    }
    TestUiOptionsetControl():void{
        let optionSetValue:Xrm.Page.OptionSetValue;
        optionSetValue.text="Item3";
        optionSetValue.value=1;
        Xrm.Page.getControl<Xrm.Page.OptionSetControl>("new_optionset").addOption(optionSetValue,0);
        Xrm.Page.getControl<Xrm.Page.OptionSetControl>("new_optionset").removeOption(100000001);
        Xrm.Page.getControl<Xrm.Page.OptionSetControl>("new_optionset").setFocus();
        Xrm.Page.getControl<Xrm.Page.OptionSetControl>("new_optionset").clearOptions();
    }
    TestUiNotificationControl():void{

        Xrm.Page.getControl<Xrm.Page.DateControl>("new_datetime").setNotification("Test Notification","45d55eae-e2c3-4823-8c36-f7752779984f");
        let notification:Xrm.Page.Notification;
        notification.messages=["Set Ticker Symbol"];
        notification.notificationLevel= 'RECOMMENDATION';
        notification.uniqueId= '6c796fd1-eb65-4d65-8017-3b7274b323ef';
        
        let actionCollection:Xrm.Page.ActionCollection[];
        actionCollection[0].message= 'Set the Ticker Symbol to MSFT?';
        actionCollection[0].actions([function(){
            Xrm.Page.getControl<Xrm.Page.DateControl>("new_datetime").getAttribute().setValue(new Date(Date.now.toString()));
        }]);
        notification.actions(actionCollection);

        Xrm.Page.getControl("new_datetime").addNotification(notification);
    }
    TestUiLookupControl():void{
        Xrm.Page.getControl<Xrm.Page.LookupControl>("new_lookup").addCustomFilter('<filter type="and"><condition attribute="address1_city" operator="eq" value="Redmond"/></filter>');
        let viewId="153690d1-d1b0-491b-8ac7-ac8fb27dbd40";
        let entityName="account";
        let viewDisplayName="Account View";
        let layoutXml='<grid name="resultset" object="1" jump="name" select="1" icon="1" preview="1">'+
                        '<row name="result" id="accountid">'+
                            '<cell name="name" width="300" />'+
                            '<cell name="address1_city" width="125" />'+
                        '</row>'+
                    '</grid>';
        let fetchXml='<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false">' +
                        '<entity name="account">' +
                        '<attribute name="name" />' +
                        '<attribute name="address1_city" />' +
                        '<filter type="and">' +
                            '<condition attribute="address1_city" operator="eq" value="Redmond" />' +
                        '</filter>' +
                        '</entity>' +
                    '</fetch>';             
        let isDefault=true;
        Xrm.Page.getControl<Xrm.Page.LookupControl>("new_lookup").addCustomView(viewId,entityName,viewDisplayName,fetchXml,layoutXml,isDefault);
        let defaultViewId=Xrm.Page.getControl<Xrm.Page.LookupControl>("new_lookup").getDefaultView();
        console.log("Default View Id:"+defaultViewId);
        Xrm.Page.getControl<Xrm.Page.LookupControl>("new_lookup").setDefaultView(defaultViewId.replace("{","").replace("}",""));
        Xrm.Page.getControl<Xrm.Page.LookupControl>("new_lookup").addPreSearch(()=>{
            console.log("Pre Search Triggered");
        });
    }
    TestUiGridControl():void{
        var grid=Xrm.Page.getControl<Xrm.Page.GridControl>("grid");
        console.log("Is grid visible+"+grid.getVisible());
        Xrm.Page.getControl<Xrm.Page.GridControl>("grid1").setVisible(false);
        Xrm.Page.getControl<Xrm.Page.GridControl>("grid1").refresh();
    }
    
    TestUiWebResouceControl():void{
        console.log("Webresource URL:"+Xrm.Page.getControl<Xrm.Page.IframeControl>("WebResource_test").getInitialUrl());
        console.log("Body Name:"+Xrm.Page.getControl<Xrm.Page.IframeControl>("WebResource_test").getObject().getElementsByTagName("body").item.name);
        console.log("SRC: "+Xrm.Page.getControl<Xrm.Page.IframeControl>("WebResource_test").getSrc());
        Xrm.Page.getControl<Xrm.Page.IframeControl>("IFrame_test").setSrc("http://www.google.com/");
    }
    TestUiForm():void{
        Xrm.Page.ui.controls.forEach((control)=>{
            console.log(control.getName());
        });
        console.log("Form Label:"+Xrm.Page.ui.formSelector.getCurrentItem().getLabel());
        Xrm.Page.ui.formSelector.items.forEach((form)=>{
            console.log(form.getLabel());
        });
        console.log("Form Type:"+Xrm.Page.ui.getFormType());
        Xrm.Page.ui.navigation.items.forEach((item)=>{
            console.log(item.getLabel());
        });

        Xrm.Page.ui.setFormNotification("Hello World", "INFO", "ff7fee77-7b1e-4974-ab22-10c24379da3e");
        Xrm.Page.ui.refreshRibbon();
        Xrm.Page.ui.tabs.forEach((tab)=>{
            tab.sections.forEach((section)=>{
                console.log(section.getLabel());
            });
        });
        console.log("getViewPortHeight:"+Xrm.Page.ui.getViewPortHeight);
        console.log("getViewPortWidth:"+Xrm.Page.ui.getViewPortWidth);
    }
    TestUiQuickForms():void{
        var quickForms=Xrm.Page.ui.quickForms.get(0);
        console.log("QuickForm First Name"+quickForms.getControl<Xrm.Page.StandardControl>("name").getName());
        console.log("Control Type:"+quickForms.getControlType());
        console.log("Name:"+quickForms.getName());
        console.log("Parent Name:"+quickForms.getParent().getName());
        console.log("Label:"+quickForms.getLabel());
        quickForms.setLabel("Quick Form");
        console.log("is loaded"+quickForms.isLoaded());
        quickForms.refresh();
    }
}

