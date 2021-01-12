// tslint:disable:space-before-function-paren

import editorClient = require('@node-red/editor-client');

function redTests(RED: editorClient.RED) {
    interface MyNodeProperties extends editorClient.NodeProperties {
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
        nodeInstance.instanceProp;
        // $ExpectError
        nodeInstance.wrongKey;
        // $ExpectType string
        nodeInstance._('myNode.label');
        // $ExpectType string
        nodeInstance._('myNode.status', { num: 10 });
    }

    const myNodeDef: editorClient.NodeDef<MyNodeProperties, MyNodeCredentials, MyNodeInstanceProperties> = {
        category: 'category',
        defaults: {
            key: {
                value: '',
                required: true,
                type: 'my-config-node',
                validate(val) {
                    // $ExpectType string
                    val;
                    // $ExpectType string
                    this.key;
                    // $ExpectType string
                    this.instanceProp;
                    // $ExpectError
                    this.wrongKey;

                    return true;
                },
            },
            // $ExpectError
            instanceProp: {
                value: '',
            },
        },
        credentials: {
            username: {
                type: 'text',
            },
            password: {
                type: 'password',
            },
        },
        align: 'right',
        button: {
            onclick() {
                // $ExpectType string
                this.key;
                // $ExpectType string
                this.instanceProp;
                // $ExpectError
                this.wrongKey;
            },
            enabled() {
                // $ExpectType string
                this.key;
                // $ExpectType string
                this.instanceProp;
                // $ExpectError
                this.wrongKey;
                return true;
            },
            visible() {
                // $ExpectType string
                this.key;
                // $ExpectType string
                this.instanceProp;
                // $ExpectError
                this.wrongKey;
                return true;
            },
        },
        color: '#3377CC',
        icon: 'icon.svg',
        inputLabels: true
            ? 'label'
            : function () {
                  // $ExpectType string
                  this.key;
                  // $ExpectType string
                  this.instanceProp;
                  // $ExpectError
                  this.wrongKey;
                  return 'label';
              },
        inputs: 0,
        label: true
            ? 'label'
            : function () {
                  // $ExpectType string
                  this.key;
                  // $ExpectType string
                  this.instanceProp;
                  // $ExpectError
                  this.wrongKey;
                  return 'label';
              },
        labelStyle: true
            ? 'italic'
            : function () {
                  // $ExpectType string
                  this.key;
                  // $ExpectType string
                  this.instanceProp;
                  // $ExpectError
                  this.wrongKey;
                  return 'italic';
              },
        oneditcancel() {
            // $ExpectType string
            this.key;
            // $ExpectType string
            this.instanceProp;
            // $ExpectError
            this.wrongKey;
        },
        oneditdelete() {
            // $ExpectType string
            this.key;
            // $ExpectType string
            this.instanceProp;
            // $ExpectError
            this.wrongKey;
        },
        oneditprepare() {
            // $ExpectType string
            this.key;
            // $ExpectType string
            this.instanceProp;
            // $ExpectError
            this.wrongKey;
        },
        oneditresize(size) {
            // $ExpectType string
            this.key;
            // $ExpectType string
            this.instanceProp;
            // $ExpectError
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
            // $ExpectError
            this.wrongKey;
        },
        onpaletteadd() {
            // $ExpectType string
            this.key;
            // $ExpectType string
            this.instanceProp;
            // $ExpectError
            this.wrongKey;
        },
        onpaletteremove() {
            // $ExpectType string
            this.key;
            // $ExpectType string
            this.instanceProp;
            // $ExpectError
            this.wrongKey;
        },
        outputLabels: true
            ? true
                ? 'label'
                : ['label1', 'label2']
            : function (idx) {
                  // $ExpectType number
                  idx;
                  // $ExpectType string
                  this.key;
                  // $ExpectType string
                  this.instanceProp;
                  // $ExpectError
                  this.wrongKey;
                  return 'label';
              },
        outputs: 2,
        paletteLabel: true
            ? 'label'
            : function () {
                  // $ExpectType string
                  this.key;
                  // $ExpectType string
                  this.instanceProp;
                  // $ExpectError
                  this.wrongKey;
                  return 'label';
              },
    };
    RED.nodes.registerType('my-node', myNodeDef);
    RED.nodes.registerType<MyNodeProperties, MyNodeCredentials>('my-node', {
        category: 'category',
        defaults: {
            // $ExpectError
            wrongKey: {
                value: '',
            },
        },
        credentials: {
            // $ExpectError
            wrongKey: {
                type: 'text',
            },
        },
    });
}

function widgetEditableListTests() {
    interface MyItemData {
        key: string;
    }

    type MyEditableListOptions = editorClient.WidgetEditableListOptions<MyItemData>;

    const myListOptions: MyEditableListOptions = {
        addButtons: false,
        addItem: (elem, i, data) => {
            // $ExpectType JQuery<HTMLElement>
            elem;
            // $ExpectType number
            i;
            // $ExpectType string
            data.key;
            // $ExpectError
            data.wrongKey;
        },
        connectWith: '.cssSelector',
        filter: data => {
            // $ExpectType string
            data.key;
            // $ExpectError
            data.wrongKey;
            return true;
        },
        header: $('<div/>'),
        height: true ? 200 : 'auto',
        removable: true,
        removeItem: data => {
            data.key;
            // $ExpectError
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
            // $ExpectError
            data1.wrongKey;
            // $ExpectType string
            data2.key;
            // $ExpectError
            data2.wrongKey;
            return 1;
        },
        sortItems: items => {
            // $ExpectType JQuery<HTMLElement>
            items[0];
        },
        sortable: true ? true : '.cssSelector',
    };
}

function widgetTypedInputTests() {
    const goodType: editorClient.WidgetTypedInputType = 'msg';
    // $ExpectError
    const wrongType: editorClient.WidgetTypedInputType = 'wrongType';
    const goodTypeDef: editorClient.WidgetTypedInputTypeDefinition = {
        value: 'mytype',
        hasValue: false,
        icon: 'icon',
        label: 'label',
        options: ['opt1', 'opt2'],
    };
    const wrongTypeDef: editorClient.WidgetTypedInputTypeDefinition = {
        // $ExpectError
        wrongKey: 'value',
    };
    $('#inputId').typedInput({
        types: [goodType, wrongType, goodTypeDef, wrongTypeDef],
    });
    $('#inputId').typedInput({
        types: ['msg', 'flow', 'global', 'str', 'num', 'bool', 'json', 'bin', 're', 'date', 'jsonata', 'env'],
    });
    $('#inputId').typedInput({
        types: [
            {
                value: 'mytype',
                validate: (_v: string) => true,
            },
        ],
    });
    $('#inputId').typedInput({
        types: [
            {
                value: 'mytype',
                validate: /\d/,
            },
        ],
    });

    $('#inputId').typedInput('hide');
    $('#inputId').typedInput('show');

    const type = $('#inputId').typedInput('type');
    $('#inputId').typedInput('type', type);

    // $ExpectError
    $('#inputId').typedInput('types', [{ wrongKey: 'value' }]);
    $('#inputId').typedInput('types', [
        'msg',
        'flow',
        'global',
        'str',
        'num',
        'bool',
        'json',
        'bin',
        're',
        'date',
        'jsonata',
        'env',
        {
            value: 'mytype',
            hasValue: false,
            icon: 'icon',
            label: 'label',
            options: ['opt1', 'opt2'],
        },
    ]);

    // $ExpectType boolean
    $('#inputId').typedInput('validate');

    // $ExpectType string
    const val = $('#inputId').typedInput('value');
    $('#inputId').typedInput('value', val);

    $('#inputId').typedInput('width', 200);
}
