type Simplify<T> = { [KeyType in keyof T]: T[KeyType] } & {};

interface EditorMap {
    VSCODE: "Visual Studio Code";
    ATOM: "Atom";
}

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents -- This is intentional
type EditorData<Constant extends keyof EditorMap> = Simplify<
    {
        [key in keyof EditorMap]: key extends Constant ? true : false;
    } & {
        name: EditorMap[Constant];
        isEditor: true;
    }
>;

type NoEditorData = { [key in keyof EditorMap]: false } & { name: ""; isEditor: false };

// tslint:disable-next-line:no-empty-interface -- This is intentional to get some of the benefits of interfaces over types
interface VsCode extends EditorData<"VSCODE"> {}

// tslint:disable-next-line:no-empty-interface -- This is intentional to get some of the benefits of interfaces over types
interface Atom extends EditorData<"ATOM"> {}

// tslint:disable-next-line:no-empty-interface -- This is intentional to get some of the benefits of interfaces over types
interface NoEditor extends NoEditorData {}

declare const info: Atom | NoEditor | VsCode;
export = info;
