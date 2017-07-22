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
            console.log("       Attribute Name:"+attribute.getName());
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
        
    }
}

