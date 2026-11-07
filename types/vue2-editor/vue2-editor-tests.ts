import { DeltaStatic, RangeStatic, Sources } from "quill";
import Vue from "vue";
import Vue2Editor, {
    CustomModule,
    install,
    Quill,
    VueEditor,
    VueEditorConstructor,
    VueEditorMethods,
} from "vue2-editor";

const customModule: CustomModule = { alias: "custom", module: class CustomQuillModule {} };
const toolbar = [
    [{
        header: [false, 1, 2, 3, 4, 5, 6],
    }],
    ["bold", "italic", "underline", "strike"], // toggled buttons
    [{
        align: "",
    }, {
        align: "center",
    }, {
        align: "right",
    }, {
        align: "justify",
    }],
    ["blockquote", "code-block"],
    [{
        list: "ordered",
    }, {
        list: "bullet",
    }, {
        list: "check",
    }],
    [{
        indent: "-1",
    }, {
        indent: "+1",
    }], // outdent/indent
    [{
        color: [],
    }, {
        background: [],
    }], // dropdown with defaults from theme
    ["link", "image", "video"],
    ["clean"], // remove formatting button
];
const editorOptions = {
    theme: "snow",
    modules: { toolbar },
};
// $ExpectType VueEditorConstructor
const editorConstructor: VueEditorConstructor = VueEditor;
// $ExpectType typeof Quill
const quill = Quill;
// $ExpectType void
const installed = install(Vue);
// $ExpectType Vue2EditorPlugin
const plugin = Vue2Editor;

Vue.use(Vue2Editor);

// $ExpectType Quill
const quillInstance = new quill(document.createElement("div"), editorOptions);
// $ExpectType RangeStatic | null
const selection: RangeStatic | null = quillInstance.getSelection();
// $ExpectType DeltaStatic
const contents: DeltaStatic = quillInstance.getContents();
// $ExpectType Sources | undefined
type SelectionSource = Parameters<VueEditorMethods["handleSelectionChange"]>[2];
const source: SelectionSource = "user";

new Vue({
    el: "#app",
    data: {
        phone: "",
        customModules: [customModule],
        bindProps: {
            defaultCountry: "",
            disabledFetchingCountry: false,
            disabled: false,
            disabledFormatting: false,
            placeholder: "Enter a phone number",
            required: false,
            enabledCountryCode: false,
            enabledFlags: true,
            preferredCountries: ["AU", "BR"],
            onlyCountries: [],
            ignoredCountries: [],
            autocomplete: "off",
            name: "telephone",
            maxLen: 25,
            wrapperClasses: "",
            inputClasses: "",
            dropdownOptions: {
                disabledDialCode: false,
            },
            inputOptions: {
                showDialCode: false,
            },
        },
    },
    components: {
        VueEditor,
    },
    template: `<vue-editor :customModules="customModules" v-model="content"></vue-editor>`,
});
