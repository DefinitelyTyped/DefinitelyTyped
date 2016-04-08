///  <reference path="webix.d.ts" />

//ajax operations
webix.ready(function(){
    webix.ajax().get("te").then(function(){
        webix.message( webix.env.isFF ? "FireFox" : "Other" );
    });
});

//webix helpers
webix.html.addCss(document.body, "text");
webix.storage.local.get("mydata");

var proxy = webix.proxy("meteor", "books");

//webix ui helpers
webix.ui.zIndexBase = 101;
webix.ui.zIndex();
webix.ui.resize();

//webix ui constructor
//basic view
var ui = webix.ui({
    view:"list", id:"l1"
});
ui.adjust();
$$("l1").adjust();

var l1 = <webix.ui.list>{};
var l2 = <webix.ui.view>{};

//specific view types
var ui2 = <webix.ui.list> webix.ui({
    view:"list", id:"21"
});
ui2.add({ value:"100" });

//specific types by id
var list = <webix.ui.list> $$("l1");
list.add({ value:"100" });
list.config.height = 100;




//config typing
var table:webix.ui.datatableConfig = {};
table.columns = [];
table.autowidth = true;

webix.ui({ rows:[ table ] });

//events
list.attachEvent("onItemClick", function(id:string, e:Event){
    var item = (<webix.ui.list>this).getItem(id);
    var self = webix.$$(e);
    return true;
});

//data collections
var data = new webix.DataCollection();
data.config["test"]= 123;

//mixins
var t = webix.DataDriver.json;

