import * as editorInfo from "editor-info";

type EditorType = typeof editorInfo;

const vscodeInfo: EditorType = {
    name: "Visual Studio Code",
    isEditor: true,
    VSCODE: true,
    ATOM: false,
};

const atomInfo: EditorType = {
    name: "Atom",
    isEditor: true,
    VSCODE: false,
    ATOM: true,
};

const noEditorInfo: EditorType = {
    name: "",
    isEditor: false,
    VSCODE: false,
    ATOM: false,
};

const unknownEditor: EditorType = {
    // @ts-expect-error
    name: "Something else",
    isEditor: true,
    VSCODE: false,
    ATOM: false,
};

// @ts-expect-error
const blankEditor: EditorType = {
    name: "",
    isEditor: true,
    VSCODE: false,
    ATOM: false,
};

// @ts-expect-error
const bothEditors: EditorType = {
    name: "Visual Studio Code",
    isEditor: true,
    VSCODE: true,
    ATOM: true,
};

// @ts-expect-error
const VSCODETrueAndIsEditorFalse: EditorType = {
    name: "",
    isEditor: false,
    VSCODE: true,
    ATOM: false,
};

// @ts-expect-error
const ATOMTrueAndIsEditorFalse: EditorType = {
    name: "",
    isEditor: false,
    VSCODE: false,
    ATOM: true,
};
