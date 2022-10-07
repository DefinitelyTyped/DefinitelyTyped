import UI5Event from "sap/ui/base/Event";
import Core from "sap/ui/core/Core";
import UIComponent from "sap/ui/core/UIComponent";
import XMLView from "sap/ui/core/mvc/XMLView";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import ODataModel from "sap/ui/model/odata/v2/ODataModel";
import ODataV4Model from "sap/ui/model/odata/v4/ODataModel";
import Text from "sap/m/Text";
import Table from "sap/m/Table";
import Toolbar from "sap/m/Toolbar";
import Button from "sap/m/Button";
import DatePicker from "sap/m/DatePicker";
import Label from "sap/m/Label";
import Column from "sap/m/Column";
import Dialog from "sap/m/Dialog";
import MessageBox from "sap/m/MessageBox";
import FileUploader from "sap/ui/unified/FileUploader";
import FileUploaderParameter from "sap/ui/unified/FileUploaderParameter";
import ODataV4ListBinding from "sap/ui/model/odata/v4/ODataListBinding";
import Target from "sap/ui/core/routing/Target";
import MessagePage from "sap/m/MessagePage";
import { TitleLevel } from "sap/ui/core/library";
import DateTimePicker from "sap/m/DateTimePicker";
import DateFormatTimezoneDisplay from "sap/ui/core/format/DateFormatTimezoneDisplay";
import RenderManager from "sap/ui/core/RenderManager";
import NumberFormat from "sap/ui/core/format/NumberFormat";

/*
 * REMARK: the type definition files are automatically generated and this generation is tested,
 * so the importance of these tests here is very limited. Hence there is no focus on making them
 * as complete or meaningful as possible.
 */

Core.attachInit(() => {
    new Text({
        text: "Hello World"
    }).placeAt("content");

    new XMLView({
        viewName: "sap.ui.demo.wt.App"
    }).placeAt("content");
});

class Ctrl extends Controller {
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
        const view = this.getView();
        if (!view) {
            return;
        }

        view.setModel(oModel);

        const dp = new DatePicker({dateValue: "{myModel>/myPropertyName}"});
        dp.setShowCurrentDateButton(true);

        const rm: RenderManager = Core.getRenderManager();
        rm.openEnd();
        view.addContent(dp);
    }
}

export class BaseController extends Controller {
    getRouter() {
        return (<UIComponent> this.getOwnerComponent()).getRouter();
    }
    getJSONModel(name: string) {
        const view = this.getView();
        if (!view) {
            return;
        }
        return <JSONModel> view.getModel(name);
    }
    getModel(name: string) {
        const view = this.getView();
        if (!view) {
            return;
        }
        return view.getModel(name);
    }
    suspendDefaultTarget() {
        const router = (<UIComponent> this.getOwnerComponent()).getRouter();
        const target = router.getTarget("default") as Target;
        target.suspend();
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
const oDataV2Model = Core.getModel(undefined) as ODataModel;
oDataV2Model.refreshSecurityToken();
oDataV2Model.bindList("/", undefined, [], [], {createdEntitiesKey: "test"});
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

const dateTimePicker = new DateTimePicker({showCurrentTimeButton: true});
dateTimePicker.setShowCurrentTimeButton(!dateTimePicker.getShowCurrentTimeButton());
oUploadDialog.addContent(oFileUploader);
oUploadDialog.addContent(oTriggerButton);
oUploadDialog.addContent(dateTimePicker);
oUploadDialog.open();

const messagePage: MessagePage = new MessagePage();
messagePage.setTitleLevel(TitleLevel.H1);

const odataV4ListBinding = new ODataV4ListBinding();
const odataV4ListBindingCount = odataV4ListBinding.getCount();
const context = odataV4ListBinding.getKeepAliveContext("x");
const odataV4Model = odataV4ListBinding.getModel() as ODataV4Model;
odataV4Model.delete("something");
let eTagMap: Record<string, string | null>;
eTagMap = odataV4Model.getMetaModel().getETags();
odataV4Model.getKeyPredicate("some/path", {});

const showTimeZone = DateFormatTimezoneDisplay.Show;

const integer = NumberFormat.getIntegerInstance({
    strictGroupingValidation: true
});
