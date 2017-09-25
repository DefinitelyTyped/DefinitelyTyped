
// Examples for Microsoft Dynamics xRM API v8.2
// Project: http://www.microsoft.com/en-us/download/details.aspx?id=44567
// Examples by: Erduran KORKUT<https://github.com/erdurankorkut/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

parent.Xrm.Page.context.getOrgLcid();

class XrmBase{
    protected _crmContext: Xrm.Context;
    protected userName: string;
    constructor(){
        this._crmContext=this._getContext();
        this.userName=this._crmContext.getUserName();
    }
    private _getContext():Xrm.Context{
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
}

class XrmGlobalContext extends XrmBase{
    
    
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

class XrmPageData extends XrmBase{
    refresh():void{
        Xrm.Page.data.refresh(true).then(()=>{console.log("Record is saved and refreshed")}, (errorCode,message)=>{
            console.log("ErrorCode: "+errorCode +"\n Message:"+message);
        });        
    }
    saveData():void{
        Xrm.Page.data.save({UseSchedulingEngine:true}).then(()=>{console.log("Record is saved and refreshed")}, (errorCode,message)=>{
            console.log("ErrorCode: "+errorCode +"\n Message:"+message)});
        
    }
}

class XrmPageDataProcess extends XrmBase{

    TestProcesses():void{
        var activeProcess = Xrm.Page.data.process.getActiveProcess();
        console.log("Active Process Name:"+activeProcess.getName());

        Xrm.Page.data.process.setActiveProcess("",(result:string)=>console.log("Result is:"+result));
        Xrm.Page.data.process.getProcessInstances((instance)=>{console.log("ProcessInstanceName:"+instance["ProcessInstanceName"]);});

        var activeStage=Xrm.Page.data.process.getActiveStage();
        console.log("Active Stage Category:"+activeStage.getCategory());

        var stageCollection = Xrm.Page.data.process.getActivePath();
        
        stageCollection.forEach((stage)=>console.log("Status :"+stage.getStatus()));

        Xrm.Page.data.process.getEnabledProcesses((enabledProcesses)=>console.log("Enabled Process Id:"+ enabledProcesses["id"]));
        
       let selectedStage= Xrm.Page.data.process.getSelectedStage();
       console.log("Selected Stage Name:"+selectedStage.getName());

        function stageChangeHandler(executionContext:Xrm.Page.EventContext){
            console.log("Stage is changed");
            
        }

       Xrm.Page.data.process.addOnStageChange(stageChangeHandler);
        
       Xrm.Page.data.process.addOnStageSelected((context:Xrm.Page.EventContext)=>{
        console.log("Stage is selected");
       });

       Xrm.Page.data.process.addOnProcessStatusChange((executionContext:Xrm.Page.EventContext)=>console.log("Status is changed"));

       Xrm.Page.data.process.moveNext((operationResult)=>console.log("Result is:"+operationResult));
       
    }
    
    
}

class XrmPageDataEntity extends XrmBase{
    TestXrmPageDataEntity():void{
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
    }
    addOnSave():void{
        Xrm.Page.data.entity.addOnSave(()=> console.log("Record is saved"));
        
    }

    removeOnSave():void{
        Xrm.Page.data.entity.removeOnSave(()=> console.log("addOnSave event is detached"));
    }

    saveRecord(saveType:string):void{
        Xrm.Page.data.entity.save(saveType);
    }
}

class XrmPage extends XrmBase{
    TestDataAttribute():void{
        console.log("--- Xrm.Page.data.entity.attribute Object ---");
        
                Xrm.Page.getAttribute("new_integer").addOnChange((executionContext)=>{
                    console.log("Save mode on change:"+executionContext.getEventArgs().getSaveMode());
        
                });
                
                let floatOnChange =function(executionContext:Xrm.Page.EventContext):Xrm.Page.ContextSensitiveHandler{
                    return ()=>{
                        console.log("Save mode on change:"+executionContext.getEventArgs().getSaveMode());
                    }
                }
                Xrm.Page.getAttribute("new_double").addOnChange(floatOnChange);
                
                console.log("Initial Value OptionSet:"+(<Xrm.Page.BooleanAttribute>Xrm.Page.getAttribute("new_boolean")).getInitialValue());
                console.log("100,000,001 Option:"+(<Xrm.Page.OptionSetAttribute>Xrm.Page.getAttribute("new_optionset")).getOption(100000001));
                (<Xrm.Page.OptionSetAttribute>Xrm.Page.getAttribute("new_optionset")).getOptions().forEach((option)=>{
                    console.log("Option is "+option);
                });
                console.log("Lookup Attribute Type:"+Xrm.Page.getControl<Xrm.Page.LookupControl>("new_lookup").getAttribute().getAttributeType());
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
                Xrm.Page.getAttribute("new_datetime").setSubmitMode("always");
                Xrm.Page.getAttribute("new_money").setSubmitMode("never");
                Xrm.Page.getAttribute("new_integer").setSubmitMode("dirty");
                console.log("Submit Mode:"+Xrm.Page.getAttribute("new_name").getSubmitMode());
                console.log("Integer Value:"+(<Xrm.Page.NumberAttribute>Xrm.Page.getAttribute("new_integer")).getValue());
        
                let lookup: Xrm.Page.LookupValue[] = [];
                
                let lookupItem: Xrm.Page.LookupValue={
                    id:"6FB63A65-F66E-E711-80DF-3863BB359F18",
                    entityType:"account",
                    name:"A. Datum Corporation (sample)"
                }
        
                lookup.push(lookupItem);
                Xrm.Page.getAttribute<Xrm.Page.LookupAttribute>("new_lookup").setValue(lookup);
                Xrm.Page.getAttribute("new_double").fireOnChange();
                Xrm.Page.getAttribute("new_double").removeOnChange(floatOnChange);
                Xrm.Page.getAttribute("new_double").fireOnChange();
    }
}

class XrmPageUi extends XrmBase{
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
        
        let optionSetValue:Xrm.Page.OptionSetValue={
            text:"Item3",
            value:1
        }
        
        Xrm.Page.getControl<Xrm.Page.OptionSetControl>("new_optionset").addOption(optionSetValue,0);
        Xrm.Page.getControl<Xrm.Page.OptionSetControl>("new_optionset").removeOption(100000001);
        Xrm.Page.getControl<Xrm.Page.OptionSetControl>("new_optionset").setFocus();
        Xrm.Page.getControl<Xrm.Page.OptionSetControl>("new_optionset").clearOptions();
    }
    TestUiNotificationControl():void{
        
                let actionCollection:Xrm.Page.ActionCollection[]=[{
                    message:'Set the Ticker Symbol to MSFT?',
                    actions:function(){
                        Xrm.Page.getControl<Xrm.Page.DateControl>("new_datetime").getAttribute().setValue(new Date(Date.now.toString()));
                    }
                }]
        
                let notification:Xrm.Page.Notification={
                    actions:()=>actionCollection,
                    messages:['Set Ticker Symbol'],
                    notificationLevel:'RECOMMENDATION',
                    uniqueId:'6c796fd1-eb65-4d65-8017-3b7274b323ef'
                }
        
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
            TestUiWebResouceControl():void{
                debugger;
                console.log("Webresource URL:"+Xrm.Page.getControl<Xrm.Page.IframeControl>("IFRAME_test").getInitialUrl());
                console.log("Body Name:"+Xrm.Page.getControl<Xrm.Page.IframeControl>("WebResource_test").getObject().getElementsByTagName("body").item.name);
                console.log("SRC: "+Xrm.Page.getControl<Xrm.Page.IframeControl>("WebResource_test").getSrc());
                Xrm.Page.getControl<Xrm.Page.IframeControl>("IFRAME_test").setSrc("http://www.google.com/");
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
                console.log("getViewPortHeight:"+Xrm.Page.ui.getViewPortHeight());
                console.log("getViewPortWidth:"+Xrm.Page.ui.getViewPortWidth());
            }
}

class XrmPageGrids extends XrmBase{
    TestUiGridControl():void{
        var grid=Xrm.Page.getControl<Xrm.Page.GridControl>("grid");
        console.log("Is grid visible+"+grid.getVisible());
        Xrm.Page.getControl<Xrm.Page.GridControl>("grid1").setVisible(false);
        Xrm.Page.getControl<Xrm.Page.GridControl>("grid1").refresh();
    }

    TestGridControl():void{
        var grid=Xrm.Page.getControl<Xrm.Page.GridControl>("grid");

        function loadHandler(){
            console.log("Grid is loaded");
        }

        grid.addOnLoad(loadHandler);
        grid.removeOnLoad(loadHandler);

        console.log("Grid entity name:"+grid.getEntityName());

        var gridObject=grid.getGrid();
        var gridViewSelector=grid.getViewSelector();
        var gridRows=gridObject.getRows();
        var selectedRows=gridObject.getSelectedRows();

        console.log("Total Record Count:"+gridObject.getTotalRecordCount());
        gridRows.forEach((row)=>{
            var gridEntity=row.getData().getEntity();
            console.log("Record in entity "+gridEntity.getEntityName()+" with Id "+gridEntity.getId());
        });

        console.log("Current View Name:"+gridViewSelector.getCurrentView().name);
        console.log("Is View Visible:"+gridViewSelector.isVisible());
        
        var allKnowledgeBaseArticles: Xrm.Page.LookupValue={

            entityType: "1039", // SavedQuery
            id:"{14A1C51E-CE8A-47A2-8088-E004FA7CA953}", 
            name: "All Articles"
           };
        gridViewSelector.setCurrentView(allKnowledgeBaseArticles);
        console.log("Current View Name:"+gridViewSelector.getCurrentView().name);

    }

    TestEditableGrid():void{
        var gridControl=Xrm.Page.getControl<Xrm.Page.GridControl>("editable");
        var grid=gridControl.getGrid();
        var viewSelector=gridControl.getViewSelector();
        console.log("Row Count:"+grid.getRows().getLength());
        console.log("Selected Row Count:"+grid.getSelectedRows().getLength());
        console.log("Total Record Count:"+grid.getTotalRecordCount());

        var rows=grid.getRows();
        var allGridRows:any[];
        rows.forEach((row,i)=>{
            allGridRows.push(row.getData());
            console.log("GridRow Entity Name:"+row.getData().getEntity().getEntityName());
            let attributes=row.getData().getEntity().getAttributes();
        });
        console.log("View visiblity:"+viewSelector.isVisible());
        
    }

    EditableOnRecordSelect(executionContext:Xrm.Page.EventContext):void{
        console.log("Selected item Entity Name:"+executionContext.getFormContext().data.entity.getEntityName());
    }
    EditableOnChange(executionContext:Xrm.Page.EventContext):void{
        console.log("Selected item Entity Name:"+executionContext.getFormContext().data.entity.getEntityName());
    }
    EditableOnSave(executionContext:Xrm.Page.EventContext):void{
        console.log("Selected item Entity Name:"+executionContext.getFormContext().data.entity.getEntityName());
        
    }
}

class XrmPageKnowledgeBase extends XrmBase{
    TestKBControl():void{
        debugger;
        let kbKnowledgeControl=Xrm.Page.getControl<Xrm.Page.KbSearchControl>("KB1");
        
        kbKnowledgeControl.addOnPostSearch(()=>
        {
            
            console.log("Search Query:"+kbKnowledgeControl.getSearchQuery());
            console.log("Answer is:"+kbKnowledgeControl.getSelectedResult());
            console.log("Total Results:"+kbKnowledgeControl.getTotalResultCount());
        });
            
        
        
        kbKnowledgeControl.addOnResultOpened(()=>
        {
            let kbKnowledgeControl=Xrm.Page.getControl<Xrm.Page.KbSearchControl>("KB1");
            kbKnowledgeControl.openSearchResult(1,"Popout");
            console.log("Result opened");
        });
        
        kbKnowledgeControl.addOnSelection(()=>console.log("Item selected"));
        
    }
}

class XrmPageQuickForms extends XrmBase{
    TestUiQuickForms():void{
        var quickForms=Xrm.Page.ui.quickForms.get(0);
        setTimeout(function() {
            if(quickForms.isLoaded){
                console.log("QuickForm First Name"+quickForms.getControl<Xrm.Page.StandardControl>("fullname").getName());
                console.log("Control Type:"+quickForms.getControlType());
                console.log("Name:"+quickForms.getName());
                console.log("Parent Name:"+quickForms.getParent().getName());
                console.log("Label:"+quickForms.getLabel());
                quickForms.setLabel("Quick Form");
                quickForms.refresh();
            }
        }, 3000);
        
    }
}
class XrmPageUiProcess extends XrmBase{
    TestProcess():void{
       console.log("Process Display State:"+ Xrm.Page.ui.process.getDisplayState());
       console.log("Process Visibility:"+ Xrm.Page.ui.process.getVisible());

       Xrm.Page.ui.process.setDisplayState("expanded");
       console.log("Process Display State:"+ Xrm.Page.ui.process.getDisplayState());

       Xrm.Page.ui.process.setDisplayState("collapsed");
       console.log("Process Display State:"+ Xrm.Page.ui.process.getDisplayState());
    }
}
class XrmPageUtility extends XrmBase{
    TestUtility():void{
        Xrm.Utility.alertDialog("Test Utility Alert",()=>{

        });
        Xrm.Utility.confirmDialog("Test Confirm Dialog",()=>{},()=>{});
        console.log("Is Activity Type",Xrm.Utility.isActivityType("task"));
        Xrm.Utility.openEntityForm("incident","8FB63A65-F66E-E711-80DF-3863BB359F18",{},{openInNewWindow:true});
        Xrm.Utility.openQuickCreate("lead").then(()=>{
            console.log("Quick Create Form Opened.");
        },()=>{
            console.log("Error while opening QuickCreate");
        });
        Xrm.Utility.openWebResource("new_test1");

        var client=Xrm.Page.context.client.getClient();
        if(client!=="Web"){
            Xrm.Utility.getBarcodeValue().then((result)=>{
                console.log("Barcode Result:"+result);
            },(error)=>{});
            Xrm.Utility.getCurrentPosition().then((location)=>{
                console.log("Latitude: "+location.coords.latitude+"longitude:"+location.coords.longitude);
            },(error)=>{});
        }
    }
}

class XrmPanel extends XrmBase{
    TestPanel():void{
        Xrm.Panel.loadPanel("https://catcherate2.crm4.dynamics.com","google");
    }
}

class XrmMobileOffline extends XrmBase{

    TestMobileOffline():void{
        console.log("Is Account usable in offline mode:"+Xrm.Mobile.offline.isOfflineEnabled("new_tstest"));

        //CRUD operations will be tested

        Xrm.Mobile.offline.retrieveRecord("new_tstest", "{44775827-FF84-E711-80E3-3863BB355D80}").then((retrievedData)=>{
            console.log("Id of retrieved data:"+retrievedData.id);
        }, (errorCode,message,debugMessage)=>{
            console.log(message);
        });
        
        interface TSTest{
            new_name:string;
            new_integer:number;
            id?:string;
            new_boolean?:boolean;
        }

        var createdData: TSTest={
            new_name:"Test1",
            new_integer:15
        };
        
        

        Xrm.Mobile.offline.createRecord("new_tstest", createdData).then((createdObject)=> 
        {
            console.log("Created object Id:"+createdObject.id);
            createdData.id=createdObject.id;

            createdData.new_boolean=true;

            Xrm.Mobile.offline.updateRecord("new_tstest",createdData.id, createdData).then((updateObject)=> 
            {
                console.log("Updated Value:"+updateObject.new_boolean);
                
            },(errorCode,message)=>{console.log(message)});

            Xrm.Mobile.offline.retrieveMultipleRecords("new_tstest").then((retrievedObjects)=> 
            {
                console.log("Number of records:"+retrievedObjects.getLength());
                
            },(errorCode,message)=>{console.log(message)});

            Xrm.Mobile.offline.deleteRecord("new_tstest",createdData.id).then((deletedObject)=> 
            {
                console.log("Deleted object Id:"+deletedObject.id);
                
            },(errorCode,message)=>{console.log(message)});

        }, (errorCode,message)=>{console.log(message)});
        
        
    }
}
debugger;

var mobile=new XrmMobileOffline();
mobile.TestMobileOffline();