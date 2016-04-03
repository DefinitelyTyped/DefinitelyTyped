/// <reference path="devexpress-web.d.ts" />

namespace Tests.Globals {
    function ASPxTest(): void {
        ASPx.RunStartupScripts();
    }

    function ASPxClientControlTest(): void {
        ASPxClientControl.AdjustControls();
        let controls: DevExpress.Web.Scripts.ASPxClientControlCollection = ASPxClientControl.GetControlCollection();
        controls.GetByName("myControl");

        let elements: DevExpress.Web.Scripts.ASPxClientControl[] = controls.elements;
        for (let element of elements) {
            let name: string = element.name;
            element.AdjustControl();
            let mainElement = element.GetMainElement();
            if (mainElement) {
                mainElement.focus();
            }

            let isVisible: boolean = element.GetVisible();
            let inCallback: boolean = element.InCallback();
            element.SetWidth(600);
            element.SetHeight(400);

            let initEventHandler: (s: DevExpress.Web.Scripts.ASPxClientControl, e: DevExpress.Web.Scripts.ASPxClientEventArgs) => void = (s: DevExpress.Web.Scripts.ASPxClientControl, e: DevExpress.Web.Scripts.ASPxClientEventArgs) => { };
            element.Init.AddHandler(initEventHandler);
            element.Init.RemoveHandler(initEventHandler);
            element.Init.ClearHandlers();
        }
    }

    function ASPxClientUtilsTest(): void {
        ASPxClientUtils.AttachEventToElement(document.getElementById("btnSubmit"), "click", () => { });

        let htmlEvent: Event;
        let x: number = ASPxClientUtils.GetEventX(htmlEvent);
        let y: number = ASPxClientUtils.GetEventY(htmlEvent);

        let control: DevExpress.Web.Scripts.ASPxClientControl;
        let controlExists: boolean = ASPxClientUtils.IsExists(control);
    }

    function MVCxClientGlobalEventsTest(): void {
        ASPxClientGlobalEvents.AddControlsInitializedEventHandler((s: any, e: DevExpress.Web.Scripts.ASPxClientControlsInitializedEventArgs) => {});
    }

    function ASPxClientEditTest(): void {
        let editorsValid: boolean = ASPxClientEdit.AreEditorsValid();

        let container: HTMLElement = document.getElementById("form1");
        let editorsInContainerGroupValid: boolean = ASPxClientEdit.AreEditorsValid(container, "group1", false);

        ASPxClientEdit.ClearEditorsInContainer(container, "group1", false);
        ASPxClientEdit.ClearGroup("group1", false);

        let editorsInContainerValid: boolean = ASPxClientEdit.ValidateEditorsInContainer(container, "group1", false);
        let editorsInGroupValid: boolean =ASPxClientEdit.ValidateGroup("group1", false);
    }
}

namespace Tests.Controls {
    declare var comboBox: DevExpress.Web.Scripts.ASPxClientComboBox;

    function ASPxClientComboBoxTest() {
        let selectedIndex: number = comboBox.GetSelectedIndex();
        comboBox.SetSelectedIndex(1);

        let selectedIndexChangedEventHandler: (s: DevExpress.Web.Scripts.ASPxClientControl, e: DevExpress.Web.Scripts.ASPxClientEventArgs) => void = (s: DevExpress.Web.Scripts.ASPxClientControl, e: DevExpress.Web.Scripts.ASPxClientEventArgs) => { };
        comboBox.SelectedIndexChanged.AddHandler(selectedIndexChangedEventHandler);
        comboBox.SelectedIndexChanged.RemoveHandler(selectedIndexChangedEventHandler);
        comboBox.SelectedIndexChanged.ClearHandlers();
    }
}
