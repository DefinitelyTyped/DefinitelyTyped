import editorClient = require("@node-red/editor-client");
import { TrayResizeOptions } from "@node-red/editor-client/index";
import { NodeMessage } from "@node-red/registry";

function redTests(RED: editorClient.RED) {
    interface MyNodeProperties extends editorClient.NodeProperties {
        x: string;
        key: string;
    }
    interface MyNodeCredentials {
        username: string;
        password: string;
    }
    interface MyNodeInstanceProperties extends MyNodeProperties {
        instanceProp: string;
    }

    function nodeInstanceTests(nodeInstance: editorClient.NodeInstance<MyNodeInstanceProperties>) {
        // $ExpectType string
        nodeInstance.id;
        // $ExpectType number
        nodeInstance.x;
        // $ExpectType string
        nodeInstance.instanceProp;
        // @ts-expect-error
        nodeInstance.wrongKey;
        // $ExpectType string
        nodeInstance._("myNode.label");
        // $ExpectType string
        nodeInstance._("myNode.status", { num: 10 });
    }

    const myNodeDef: editorClient.NodeDef<MyNodeProperties, MyNodeCredentials, MyNodeInstanceProperties> = {
        category: "category",
        defaults: {
            name: { value: "" },
            inputs: { value: 1 },
            key: {
                value: "",
                required: true,
                type: "my-config-node",
                validate(val) {
                    // $ExpectType string
                    val;
                    // $ExpectType string
                    this.key;
                    // $ExpectType string
                    this.instanceProp;
                    // @ts-expect-error
                    this.wrongKey;

                    return true;
                },
            },
            // @ts-expect-error
            instanceProp: {
                value: "",
            },
        },
        credentials: {
            username: {
                type: "text",
            },
            password: {
                type: "password",
            },
        },
        align: "right",
        button: {
            onclick() {
                // $ExpectType string
                this.key;
                // $ExpectType string
                this.instanceProp;
                // @ts-expect-error
                this.wrongKey;
            },
            enabled() {
                // $ExpectType string
                this.key;
                // $ExpectType string
                this.instanceProp;
                // @ts-expect-error
                this.wrongKey;
                return true;
            },
            visible() {
                // $ExpectType string
                this.key;
                // $ExpectType string
                this.instanceProp;
                // @ts-expect-error
                this.wrongKey;
                return true;
            },
        },
        color: "#3377CC",
        icon: "icon.svg",
        inputLabels: true
            ? "label"
            : function() {
                // $ExpectType string
                this.key;
                // $ExpectType string
                this.instanceProp;
                // @ts-expect-error
                this.wrongKey;
                return "label";
            },
        inputs: 0,
        label: true
            ? "label"
            : function() {
                // $ExpectType string
                this.key;
                // $ExpectType string
                this.instanceProp;
                // @ts-expect-error
                this.wrongKey;
                return "label";
            },
        labelStyle: true
            ? "italic"
            : function() {
                // $ExpectType string
                this.key;
                // $ExpectType string
                this.instanceProp;
                // @ts-expect-error
                this.wrongKey;
                return "italic";
            },
        oneditcancel() {
            // $ExpectType string
            this.key;
            // $ExpectType string
            this.instanceProp;
            // @ts-expect-error
            this.wrongKey;
        },
        oneditdelete() {
            // $ExpectType string
            this.key;
            // $ExpectType string
            this.instanceProp;
            // @ts-expect-error
            this.wrongKey;
        },
        oneditprepare() {
            // $ExpectType string
            this.key;
            // $ExpectType string
            this.instanceProp;
            // @ts-expect-error
            this.wrongKey;
        },
        oneditresize(size) {
            // $ExpectType string
            this.key;
            // $ExpectType string
            this.instanceProp;
            // @ts-expect-error
            this.wrongKey;
            // $ExpectType number
            size.height;
            // $ExpectType number
            size.width;
        },
        oneditsave() {
            // $ExpectType string
            this.key;
            // $ExpectType string
            this.instanceProp;
            // @ts-expect-error
            this.wrongKey;
        },
        onpaletteadd() {
            // $ExpectType string
            this.key;
            // $ExpectType string
            this.instanceProp;
            // @ts-expect-error
            this.wrongKey;
        },
        onpaletteremove() {
            // $ExpectType string
            this.key;
            // $ExpectType string
            this.instanceProp;
            // @ts-expect-error
            this.wrongKey;
        },
        onadd() {
            // $ExpectType string
            this.key;
            // $ExpectType string
            this.instanceProp;
            // @ts-expect-error
            this.wrongKey;
        },
        outputLabels: true
            ? true
                ? "label"
                : ["label1", "label2"]
            : function(idx) {
                // $ExpectType number
                idx;
                // $ExpectType string
                this.key;
                // $ExpectType string
                this.instanceProp;
                // @ts-expect-error
                this.wrongKey;
                return "label";
            },
        outputs: 2,
        paletteLabel: true
            ? "label"
            : function() {
                // $ExpectType string
                this.key;
                // $ExpectType string
                this.instanceProp;
                // @ts-expect-error
                this.wrongKey;
                return "label";
            },
    };

    const defWithReserved: editorClient.NodeDef<MyNodeProperties, MyNodeCredentials, MyNodeInstanceProperties> = {
        category: "category",
        defaults: {
            // @ts-expect-error
            x: {},
            key: {
                value: "",
            },
        },
    };

    RED.nodes.registerType("my-node", myNodeDef);
    RED.nodes.registerType<MyNodeProperties, MyNodeCredentials>("my-node", {
        category: "category",
        defaults: {
            // @ts-expect-error
            wrongKey: {
                value: "",
            },
        },
        credentials: {
            // @ts-expect-error
            wrongKey: {
                type: "text",
            },
        },
    });

    RED.actions.invoke("core:generate-node-names", myNodeDef, { generateHistory: false });
}

function widgetAutoCompleteTest() {
    type MyAutoCompleteOptions = editorClient.WidgetAutoCompleteOptions;

    const myAutoCompleteOptions: MyAutoCompleteOptions = {
        minLength: 0,
        search: (value: string) => {
            // $ExpectType string
            value;
            return [];
        },
        // @ts-expect-error
        wrongProperty: true,
    };

    const mySecondAutoCompleteOptions: MyAutoCompleteOptions = {
        search: (value, done) => {
            // $ExpectType string
            value;
            // $ExpectType (result?: { value: string; label: string | JQuery<HTMLElement>; }[] | undefined) => void
            done;
        },
        // @ts-expect-error
        node: "",
    };

    const myAutoComplete: editorClient.WidgetAutoComplete = $("input").autoComplete({
        search: (_value: string) => {
            return [];
        },
    });
}

function widgetCheckboxSetTest() {
    type MyCheckboxSetOptions = editorClient.WidgetCheckboxSetOptions;

    const myCheckboxSetOptions: MyCheckboxSetOptions = {
        // $ExpectType JQuery<HTMLElement>
        parent: $("div"),
    };

    const wrongOptions: MyCheckboxSetOptions = {
        // @ts-expect-error
        parent: "wrong",
    };

    const wrongProperty: MyCheckboxSetOptions = {
        // @ts-expect-error
        node: "",
    };

    const widget: editorClient.WidgetCheckboxSet = $("input").checkboxSet({
        parent: $("div"),
    });

    const child: JQuery = $("div");

    widget("addChild", child);
    widget("removeChild", child);

    widget("disable");
    widget("updateChild");

    widget("state", true);
    widget("state", false);
    widget("state", null);

    widget("state", true, true);
    widget("state", true, false, true);

    // @ts-expect-error
    widget("addChild");

    // @ts-expect-error
    widget("addChild", "wrong");

    // @ts-expect-error
    widget("removeChild", "wrong");

    // @ts-expect-error
    widget("disable", true);

    // @ts-expect-error
    widget("updateChild", true);

    // @ts-expect-error
    widget("state");

    // @ts-expect-error
    widget("state", "wrong");

    // @ts-expect-error
    widget("state", true, "wrong");

    // @ts-expect-error
    widget("state", true, false, "wrong");

    // @ts-expect-error
    widget("wrongAction");
}

function widgetEditableListTests() {
    interface MyItemData {
        key: string;
    }

    type MyEditableListOptions = editorClient.WidgetEditableListOptions<MyItemData>;

    const myListOptions: MyEditableListOptions = {
        addButton: false,
        addItem: (elem, i, data) => {
            // $ExpectType JQuery<HTMLElement>
            elem;
            // $ExpectType number
            i;
            // $ExpectType string
            data.key;
            // @ts-expect-error
            data.wrongKey;
        },
        connectWith: ".cssSelector",
        filter: data => {
            // $ExpectType string
            data.key;
            // @ts-expect-error
            data.wrongKey;
            return true;
        },
        header: $("<div/>"),
        height: true ? 200 : "auto",
        removable: true,
        removeItem: data => {
            data.key;
            // @ts-expect-error
            data.wrongKey;
        },
        resize: () => {},
        resizeItem: (row, idx) => {
            // $ExpectType JQuery<HTMLElement>
            row;
            // $ExpectType number
            idx;
        },
        scrollOnAdd: true,
        sort: (data1, data2) => {
            // $ExpectType string
            data1.key;
            // @ts-expect-error
            data1.wrongKey;
            // $ExpectType string
            data2.key;
            // @ts-expect-error
            data2.wrongKey;
            return 1;
        },
        sortItems: items => {
            // $ExpectType JQuery<HTMLElement>
            items[0];
        },
        sortable: true ? true : ".cssSelector",
    };
}

function widgetSearchBoxTest() {
    type MySearchBoxOptions = editorClient.WidgetSearchBoxOptions;

    const mySearchBoxOptions: MySearchBoxOptions = {
        delay: 100,
        minimumLength: 2,
    };

    const mySecondSearchBoxOptions: MySearchBoxOptions = {
        delay: 0,
        minimumLength: 0,
        // @ts-expect-error
        wrongProperty: true,
    };

    const myWrongSearchBoxOptions: MySearchBoxOptions = {
        // @ts-expect-error
        delay: "100",
        minimumLength: 2,
    };

    // @ts-expect-error
    const mySecondWrongSearchBoxOptions: MySearchBoxOptions = {
        delay: 100,
    };

    type MySearchBox = editorClient.WidgetSearchBox;

    const mySearchBox: MySearchBox = $("input").searchBox({
        delay: 100,
        minimumLength: 2,
    });

    mySearchBox("change");
    mySearchBox("count");
    mySearchBox("count", null);
    mySearchBox("count", "120 / 300");
    mySearchBox("value");
    mySearchBox("value", "test");

    // @ts-expect-error
    mySearchBox("wrongAction");

    // @ts-expect-error
    mySearchBox("change", true);

    // @ts-expect-error
    mySearchBox("count", 100);

    // @ts-expect-error
    mySearchBox("value", 100);
}

function widgetToggleButtonTest() {
    type MyToggleButtonOptions = editorClient.WidgetToggleButtonOptions;

    const myToggleButtonOptions: MyToggleButtonOptions = {
        baseClass: "red-ui-button",
        class: "red-ui-button-small",
        enabledIcon: "fa-check-square-o",
        enabledLabel: "Enabled",
        disabledIcon: "fa-square-o",
        disabledLabel: "Disabled",
        invertState: false,
    };

    const mySecondToggleButtonOptions: MyToggleButtonOptions = {
        baseClass: "custom-button",
        enabledLabel: "On",
        disabledLabel: "Off",
        invertState: true,
        // @ts-expect-error
        wrongProperty: true,
    };

    const myWrongToggleButtonOptions: MyToggleButtonOptions = {
        // @ts-expect-error
        invertState: "true",
    };

    const mySecondWrongToggleButtonOptions: MyToggleButtonOptions = {
        // @ts-expect-error
        enabledLabel: 123,
    };

    const myToggleButton: editorClient.WidgetToogleButton = $("input").toggleButton({});
}

function widgetTreeListDataTest() {
    type MyTreeListData = editorClient.WidgetTreeListData;
    type MyTreeListOptions = editorClient.WidgetTreeListOptions;

    const myTreeListData: MyTreeListData = {
        checkbox: true,
        collapsible: false,
        children: [
            {
                label: "Child",
                selected: true,
            },
        ],
        deferBuild: true,
        element: $("div")[0],
        expanded: true,
        icon: "fa-folder",
        label: "Parent",
        radio: "group",
        selected: false,
        sublabel: "Sub-label",
    };

    const mySecondTreeListData: MyTreeListData = {
        label: "Lazy parent",
        children: (done, item) => {
            // $ExpectType (children: WidgetTreeListData[]) => void
            done;
            // $ExpectType WidgetTreeListData
            item;

            done([]);
        },
    };

    const myTreeListOptions: MyTreeListOptions = {
        autoSelect: false,
        data: [myTreeListData],
        multi: true,
        selectable: true,
        rootSortable: false,
        sortable: "sortable",
    };

    const mySecondTreeListOptions: MyTreeListOptions = {
        data: [],
        sortable: true,
        // @ts-expect-error
        wrongProperty: true,
    };

    const myWrongTreeListData: MyTreeListData = {
        // @ts-expect-error
        checkbox: "true",
    };

    const mySecondWrongTreeListData: MyTreeListData = {
        // @ts-expect-error
        children: "wrong",
    };

    const myThirdWrongTreeListData: MyTreeListData = {
        // @ts-expect-error
        element: "wrong",
    };

    const myWrongTreeListOptions: MyTreeListOptions = {
        // @ts-expect-error
        data: {},
    };

    const mySecondWrongTreeListOptions: MyTreeListOptions = {
        // @ts-expect-error
        sortable: 123,
    };
}

function widgetTreeListItemTest() {
    type MyTreeListItem = editorClient.WidgetTreeListItem;

    const myTreeListItem: MyTreeListItem = {
        label: "Item",
        depth: 0,
        treeList: {
            container: $("div"),
            label: $("label"),
            parentList: $("div"),
            remove: (detach) => {
                // $ExpectType boolean | undefined
                detach;
            },
            makeLeaf: (detachChildElements) => {
                // $ExpectType boolean | undefined
                detachChildElements;
            },
            makeParent: (children) => {
                // $ExpectType WidgetTreeListItem[] | undefined
                children;
            },
            insertChildAt: (newItem, position, select) => {
                // $ExpectType WidgetTreeListItem
                newItem;
                // $ExpectType number
                position;
                // $ExpectType boolean | undefined
                select;
            },
            addChild: (newItem, select) => {
                // $ExpectType WidgetTreeListItem
                newItem;
                // $ExpectType boolean | undefined
                select;
            },
            expand: (done) => {
                // $ExpectType (() => void) | undefined
                done;
            },
            collapse: () => {},
            sortChildren: (sortFunction) => {
                // $ExpectType (a: WidgetTreeListItem, b: WidgetTreeListItem) => number
                sortFunction;
            },
            replaceElement: (element) => {
                // $ExpectType HTMLElement | JQuery<HTMLElement>
                element;
            },
        },
    };
}

function widgetTreeListActionsTest() {
    type MyTreeList = editorClient.WidgetTreeList;
    type MyTreeListData = editorClient.WidgetTreeListData;
    type MyTreeListItem = editorClient.WidgetTreeListItem;

    const myTreeList: MyTreeList = $("div").treeList({ data: [] });

    const item: MyTreeListItem = {
        label: "Item",
        depth: 0,
        treeList: {
            container: $("div"),
            label: $("label"),
            parentList: $("div"),
            remove: () => {},
            makeLeaf: () => {},
            makeParent: () => {},
            insertChildAt: () => {},
            addChild: () => {},
            expand: () => {},
            collapse: () => {},
            sortChildren: () => {},
            replaceElement: () => {},
        },
    };

    const items: MyTreeListItem[] = [item];
    const data: MyTreeListData[] = [];

    myTreeList({
        data,
    });

    myTreeList("clearSelection");

    myTreeList("data");
    myTreeList("data", data);

    myTreeList("empty");

    const filterResult = myTreeList("filter", (filterItem) => {
        // $ExpectType WidgetTreeListItem
        filterItem;

        return filterItem.selected === true;
    });

    // $ExpectType number
    filterResult;

    const getResult = myTreeList("get", "item-id");

    // $ExpectType WidgetTreeListItem | null
    getResult;

    myTreeList("reveal", "item-id");
    myTreeList("reveal", item);

    myTreeList("select", item);
    myTreeList("select", items);
    myTreeList("select", item, true);
    myTreeList("select", item, false, true);

    const selected = myTreeList("selected");

    // $ExpectType WidgetTreeListItem | WidgetTreeListItem[] | undefined
    selected;

    myTreeList("show", "item-id");
    myTreeList("show", item);
    myTreeList("show", item, () => {});

    // @ts-expect-error
    myTreeList("wrongAction");

    // @ts-expect-error
    myTreeList("data", "wrong");

    // @ts-expect-error
    myTreeList("filter", "wrong");

    // @ts-expect-error
    myTreeList("get", 123);

    // @ts-expect-error
    myTreeList("reveal", 123);

    // @ts-expect-error
    myTreeList("select", "wrong");

    // @ts-expect-error
    myTreeList("select", item, "wrong");

    // @ts-expect-error
    myTreeList("select", item, false, "wrong");

    // @ts-expect-error
    myTreeList("show", 123);

    // @ts-expect-error
    myTreeList("show", item, "wrong");

    // @ts-expect-error
    myTreeList("empty", true);

    // @ts-expect-error
    myTreeList("clearSelection", true);
}

function widgetTypedInputTests() {
    const goodType: editorClient.WidgetTypedInputType = "msg";
    // @ts-expect-error
    const wrongType: editorClient.WidgetTypedInputType = "wrongType";
    const goodTypeDef: editorClient.WidgetTypedInputTypeDefinition = {
        value: "mytype",
        hasValue: false,
        icon: "icon",
        label: "label",
        options: ["opt1", "opt2"],
    };
    const goodTypeListOptionsDef: editorClient.WidgetTypedInputTypeDefinition = {
        value: "mytype",
        hasValue: false,
        icon: "icon",
        label: "label",
        options: [
            { value: "val1", label: "label1" },
            { value: "val2", label: "label2" },
        ],
    };
    const wrongTypeDef: editorClient.WidgetTypedInputTypeDefinition = {
        // @ts-expect-error
        wrongKey: "value",
    };
    $("#inputId").typedInput({
        types: [goodType, wrongType, goodTypeDef, wrongTypeDef, goodTypeListOptionsDef],
    });
    $("#inputId").typedInput({
        types: ["msg", "flow", "global", "str", "num", "bool", "json", "bin", "re", "date", "jsonata", "env"],
    });
    $("#inputId").typedInput({
        types: [
            {
                value: "mytype",
                validate: (_v: string) => true,
            },
        ],
    });
    $("#inputId").typedInput({
        types: [
            {
                value: "mytype",
                validate: /\d/,
            },
        ],
    });

    $("#inputId").typedInput("hide");
    $("#inputId").typedInput("show");

    const type = $("#inputId").typedInput("type");
    $("#inputId").typedInput("type", type);

    // @ts-expect-error
    $("#inputId").typedInput("types", [{ wrongKey: "value" }]);
    $("#inputId").typedInput("types", [
        "msg",
        "flow",
        "global",
        "str",
        "num",
        "bool",
        "json",
        "bin",
        "re",
        "date",
        "jsonata",
        "env",
        {
            value: "mytype",
            hasValue: false,
            icon: "icon",
            label: "label",
            options: ["opt1", "opt2"],
        },
    ]);

    // $ExpectType boolean
    $("#inputId").typedInput("validate");

    // $ExpectType string
    const val = $("#inputId").typedInput("value");
    $("#inputId").typedInput("value", val);

    $("#inputId").typedInput("width", 200);
}

function nodeRedPluginTests(RED: editorClient.RED) {
    const myPluginDef: editorClient.PluginDef = {
        onadd() {
            RED.sidebar.addTab({
                id: "my-plugin",
                label: "my-plugin",
                name: "my-plugin",
                action: "core:show-my-tab",
            });
            RED.actions.add("my-plugin:show-my-tab", () => RED.sidebar.show("my-plugin"));
        },
    };
    RED.plugins.registerPlugin("my-plugin", myPluginDef);
}

function nodeRedUtilsTests(RED: editorClient.RED) {
    interface SomeNodeMsg extends NodeMessage {
        key: string;
    }
    const msg: SomeNodeMsg = {
        key: "value",
    };

    // $ExpectType (string | number)[]
    RED.utils.normalisePropertyExpression("a[\"b\"].c");

    // $ExpectType (string | number)[]
    RED.utils.normalisePropertyExpression("a[msg.foo]", msg);
}

function nodeRedEditorTests(RED: editorClient.RED) {
    // $ExpectType void
    RED.editor.editSubflow({});
    // $ExpectType void
    RED.editor.editSubflow({}, {});

    // $ExpectType void
    RED.editor.editGroup({});
    // $ExpectType void
    RED.editor.editGroup({}, {});

    // $ExpectType void
    RED.editor.editJavaScript({
        title: "string",
        parent: $("<div/>"),
        onclose: () => {},
        value: "any",
        width: 0,
        stateId: "string",
        mode: "string",
        focus: true,
        cancel: () => {},
        complete: (value: any, cursor?: any) => {},
        extraLibs: [],
    });

    // $ExpectType void
    RED.editor.editExpression({
        title: "string",
        parent: $("<div/>"),
        onclose: () => {},
        value: "string",
        stateId: "string",
        focus: true,
        complete: (value: any) => {},
    });

    // $ExpectType void
    RED.editor.editJSON({
        title: "string",
        parent: $("<div/>"),
        onclose: () => {},
        value: "string",
        stateId: "string",
        focus: true,
        complete: (value: any) => {},
        requireValid: true,
        readOnly: true,
        toolbarButtons: [],
    });

    // $ExpectType void
    RED.editor.editMarkdown({
        title: "string",
        parent: $("<div/>"),
        onclose: () => {},
        value: "string",
        width: "Infinite",
        stateId: "string",
        focus: true,
        complete: (value: any) => {},
        header: $("<div/>"),
    });

    // $ExpectType void
    RED.editor.editText({
        title: "string",
        parent: $("<div/>"),
        onclose: () => {},
        mode: "string",
        value: "string",
        stateId: "string",
        width: 0,
        focus: true,
        complete: (value: string, cursor?: any) => {},
    });

    // $ExpectType void
    RED.editor.editBuffer({
        title: "string",
        parent: $("<div/>"),
        onclose: () => {},
        value: "any",
        stateId: "string",
        focus: true,
        complete: (value: any) => {},
    });
}

function nodeRedTrayTests(RED: editorClient.RED) {
    // $ExpectType void
    RED.tray.show();

    // $ExpectType void
    RED.tray.show({
        buttons: [
            {
                class: "string",
                click: (event: any) => {},
                id: "string",
                text: "string",
            },
        ],

        close: () => {},
        open: (tray: any, done?: () => void) => {},
        resize: (options: TrayResizeOptions) => {},
        show: () => {},

        title: "string",

        maximized: true,
        width: 0,

        overlay: true,

        focusElement: $("<div/>"),
    });
}
