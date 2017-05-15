sap.ui.getCore().attachInit(function () {
    new sap.m.Text({
        text: "Hello World"
    }).placeAt("content");
});

sap.ui.getCore().attachInit(function () {
    new sap.ui.core.mvc.XMLView({
        viewName: "sap.ui.demo.wt.App"
    }).placeAt("content");
});

class Ctrl extends sap.ui.core.mvc.Controller {
    constructor(private JSONModel: typeof sap.ui.model.json.JSONModel) {
        super(undefined);
    }

    public onShowHello(): void {
        // show a native JavaScript alert
        alert("Hello World");
    }

    public onInit() {
        // set data model on view
        var oData = {
            recipient: {
                name: "World"
            }
        };
        var oModel = new this.JSONModel(oData);
        this.getView().setModel(oModel);
    }
}


sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller: typeof sap.ui.core.mvc.Controller, JSONModel: typeof sap.ui.model.json.JSONModel) {
    "use strict";

    return new Ctrl(JSONModel);
});

namespace ectr_web.controller {
    export class BaseController extends sap.ui.core.mvc.Controller {
        constructor() {
            super(undefined);
        }
        public getRouter() {
            return (<sap.ui.core.UIComponent>this.getOwnerComponent()).getRouter();
        }
        public getJSONModel(name: string) {
            return <sap.ui.model.json.JSONModel>this.getView().getModel(name);
        }
        public getModel(name: string) {
            return this.getView().getModel(name);
        }
    }
}

var oTable = new sap.m.Table({
    editable: false,
    toolbar: new sap.m.Toolbar({
        items: [
            new sap.m.Button({
                text: "Create user",
                press: function () {
                },
            }),
        ]
    }),
});

const lbl = new sap.m.Label(undefined);
lbl.setText('text');
const col = new sap.m.Column();


var oUploadDialog = new sap.m.Dialog(undefined);
oUploadDialog.setTitle("Upload photo");
(<sap.ui.model.odata.ODataModel>sap.ui.getCore().getModel(undefined)).refreshSecurityToken();
// prepare the FileUploader control
var oFileUploader = new sap.ui.unified.FileUploader({
    headerParameters: [
        new sap.ui.unified.FileUploaderParameter({
            name: "x-csrf-token",
            value: (<sap.ui.model.odata.ODataModel>sap.ui.getCore().getModel(undefined)).getHeaders()['x-csrf-token']
        }),
    ],
    uploadComplete: function (oEvent: sap.ui.base.Event) {
        var sResponse = oEvent.getParameter("response");
        if (sResponse) {
            oUploadDialog.close();
            sap.m.MessageBox.show("Return Code: " + sResponse);
        }
    }
});
// create a button to trigger the upload
var oTriggerButton = new sap.m.Button({
    text: 'Upload',
    press: function () {
        // call the upload method
        oFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter({ name: "slug", value: oFileUploader.getValue() }), 0);
        oFileUploader.upload();
    }
});
oUploadDialog.addContent(oFileUploader);
oUploadDialog.addContent(oTriggerButton);
oUploadDialog.open();