// tslint:disable:space-before-function-paren

import editorClient = require('@node-red/editor-client');

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
        nodeInstance._('myNode.label');
        // $ExpectType string
        nodeInstance._('myNode.status', { num: 10 });
    }

    const myNodeDef: editorClient.NodeDef<MyNodeProperties, MyNodeCredentials, MyNodeInstanceProperties> = {
        category: 'category',
        defaults: {
            name: { value: '' },
            inputs: { value: 1 },
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
                    // @ts-expect-error
                    this.wrongKey;

                    return true;
                },
            },
            // @ts-expect-error
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
        color: '#3377CC',
        icon: 'icon.svg',
        inputLabels: true
            ? 'label'
            : function () {
                  // $ExpectType string
                  this.key;
                  // $ExpectType string
                  this.instanceProp;
                  // @ts-expect-error
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
                  // @ts-expect-error
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
                  // @ts-expect-error
                  this.wrongKey;
                  return 'italic';
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
                  // @ts-expect-error
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
                  // @ts-expect-error
                  this.wrongKey;
                  return 'label';
              },
    };

    const defWithReserved: editorClient.NodeDef<MyNodeProperties, MyNodeCredentials, MyNodeInstanceProperties> = {
        category: 'category',
        defaults: {
            // @ts-expect-error
            x: {},
            key: {
                value: '',
            }
        }
    };

    RED.nodes.registerType('my-node', myNodeDef);
    RED.nodes.registerType<MyNodeProperties, MyNodeCredentials>('my-node', {
        category: 'category',
        defaults: {
            // @ts-expect-error
            wrongKey: {
                value: '',
            },
        },
        credentials: {
            // @ts-expect-error
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
        connectWith: '.cssSelector',
        filter: data => {
            // $ExpectType string
            data.key;
            // @ts-expect-error
            data.wrongKey;
            return true;
        },
        header: $('<div/>'),
        height: true ? 200 : 'auto',
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
        sortable: true ? true : '.cssSelector',
    };
}

function widgetTypedInputTests() {
    const goodType: editorClient.WidgetTypedInputType = 'msg';
    // @ts-expect-error
    const wrongType: editorClient.WidgetTypedInputType = 'wrongType';
    const goodTypeDef: editorClient.WidgetTypedInputTypeDefinition = {
        value: 'mytype',
        hasValue: false,
        icon: 'icon',
        label: 'label',
        options: ['opt1', 'opt2'],
    };
    const wrongTypeDef: editorClient.WidgetTypedInputTypeDefinition = {
        // @ts-expect-error
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

    // @ts-expect-error
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
