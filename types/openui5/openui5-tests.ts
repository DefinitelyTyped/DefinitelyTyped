import UI5Event from "sap/ui/base/Event";
import Core from "sap/ui/core/Core";
import UIComponent from "sap/ui/core/UIComponent";
import XMLView from "sap/ui/core/mvc/XMLView";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import ODataModel from "sap/ui/model/odata/v2/ODataModel";
import Text from "sap/m/Text";
import Table from "sap/m/Table";
import Toolbar from "sap/m/Toolbar";
import Button from "sap/m/Button";
import Label from "sap/m/Label";
import Column from "sap/m/Column";
import Dialog from "sap/m/Dialog";
import MessageBox from "sap/m/MessageBox";
import FileUploader from "sap/ui/unified/FileUploader";
import FileUploaderParameter from "sap/ui/unified/FileUploaderParameter";
import ODataListBinding from "sap/ui/model/odata/v4/ODataListBinding";

Core.attachInit(() => {
    new Text({
        text: "Hello World"
    }).placeAt("content");
});

Core.attachInit(() => {
    new XMLView({
        viewName: "sap.ui.demo.wt.App"
    }).placeAt("content");
});

class Ctrl extends Controller {
    constructor(private readonly JSONModel: JSONModel) {
        super(undefined);
    }

    onShowHello(): void {
        // show a native JavaScript alert
        alert("Hello World");
    }

    onInit() {
        // set data model on view
        const oData = {
            recipient: {
                name: "World"
            }
        };
        const oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
    }
}

sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller: Controller, JSONModel: JSONModel) => {
    "use strict";

    return new Ctrl(JSONModel);
});

export class BaseController extends Controller {
    constructor() {
        super(undefined);
    }
    getRouter() {
        return (<UIComponent> this.getOwnerComponent()).getRouter();
    }
    getJSONModel(name: string) {
        return <JSONModel> this.getView().getModel(name);
    }
    getModel(name: string) {
        return this.getView().getModel(name);
    }
}

const oTable = new Table({
    headerToolbar: new Toolbar({
        content: [
            new Button({
                text: "Create user",
                press: () => {
                },
            }),
        ]
    }),
    beforeOpenContextMenu: (oEvent: UI5Event) => {
        const params = oEvent.getParameters();
    }
});

const lbl = new Label(undefined);
lbl.setText('text');
const col = new Column();

type Headers = {
    "x-csrf-token": string
};

const oUploadDialog = new Dialog(undefined);
oUploadDialog.setTitle("Upload photo");
(<ODataModel> Core.getModel(undefined)).refreshSecurityToken();
// prepare the FileUploader control
const oFileUploader = new FileUploader({
    headerParameters: [
        new FileUploaderParameter({
            name: "x-csrf-token",
            value: ((<ODataModel> Core.getModel()).getHeaders() as Headers)['x-csrf-token']
        }),
    ],
    uploadComplete: (oEvent: UI5Event) => {
        const sResponse = oEvent.getParameter("response");
        if (sResponse) {
            oUploadDialog.close();
            MessageBox.show("Return Code: " + sResponse);
        }
    }
});
// create a button to trigger the upload
const oTriggerButton = new Button({
    text: 'Upload',
    press: () => {
        // call the upload method
        oFileUploader.insertHeaderParameter(new FileUploaderParameter({ name: "slug", value: oFileUploader.getValue() }), 0);
        oFileUploader.upload();
    }
});
oUploadDialog.addContent(oFileUploader);
oUploadDialog.addContent(oTriggerButton);
oUploadDialog.open();

const odataV4ListBinding = new ODataListBinding();
const odataV4ListBindingCount = odataV4ListBinding.getCount();
