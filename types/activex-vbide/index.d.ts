/// <reference types="activex-office" />

declare namespace VBIDE {
    const enum vbext_CodePaneview {
        vbext_cv_FullModuleView = 1,
        vbext_cv_ProcedureView = 0,
    }

    const enum vbext_ComponentType {
        vbext_ct_ActiveXDesigner = 11,
        vbext_ct_ClassModule = 2,
        vbext_ct_Document = 100,
        vbext_ct_MSForm = 3,
        vbext_ct_StdModule = 1,
    }

    const enum vbext_ProcKind {
        vbext_pk_Get = 3,
        vbext_pk_Let = 1,
        vbext_pk_Proc = 0,
        vbext_pk_Set = 2,
    }

    const enum vbext_ProjectProtection {
        vbext_pp_locked = 1,
        vbext_pp_none = 0,
    }

    const enum vbext_ProjectType {
        vbext_pt_HostProject = 100,
        vbext_pt_StandAlone = 101,
    }

    const enum vbext_RefKind {
        vbext_rk_Project = 1,
        vbext_rk_TypeLib = 0,
    }

    const enum vbext_VBAMode {
        vbext_vm_Break = 1,
        vbext_vm_Design = 2,
        vbext_vm_Run = 0,
    }

    const enum vbext_WindowState {
        vbext_ws_Maximize = 2,
        vbext_ws_Minimize = 1,
        vbext_ws_Normal = 0,
    }

    const enum vbext_WindowType {
        vbext_wt_Browser = 2,
        vbext_wt_CodeWindow = 0,
        vbext_wt_Designer = 1,
        vbext_wt_Find = 8,
        vbext_wt_FindReplace = 9,
        vbext_wt_Immediate = 5,
        vbext_wt_LinkedWindowFrame = 11,
        vbext_wt_Locals = 4,
        vbext_wt_MainWindow = 12,
        vbext_wt_ProjectWindow = 6,
        vbext_wt_PropertyWindow = 7,
        vbext_wt_Toolbox = 10,
        vbext_wt_ToolWindow = 15,
        vbext_wt_Watch = 3,
    }

    const enum vbextFileTypes {
        vbextFileTypeBinary = 10,
        vbextFileTypeClass = 2,
        vbextFileTypeDesigners = 12,
        vbextFileTypeDocObject = 9,
        vbextFileTypeExe = 4,
        vbextFileTypeForm = 0,
        vbextFileTypeFrx = 5,
        vbextFileTypeGroupProject = 11,
        vbextFileTypeModule = 1,
        vbextFileTypeProject = 3,
        vbextFileTypePropertyPage = 8,
        vbextFileTypeRes = 6,
        vbextFileTypeUserControl = 7,
    }

    class AddIn {
        private "VBIDE.AddIn_typekey": AddIn;
        private constructor();
        readonly Collection: Addins;
        Connect: boolean;
        Description: string;
        readonly Guid: string;
        Object: any;
        readonly ProgId: string;
        readonly VBE: VBE;
    }

    interface Addins {
        readonly Count: number;
        Item(index: any): AddIn;
        readonly Parent: any;
        Update(): void;
        readonly VBE: VBE;
        (index: any): AddIn;
    }

    class Application {
        private "VBIDE.Application_typekey": Application;
        private constructor();
        readonly Version: string;
    }

    class CodeModule {
        private "VBIDE.CodeModule_typekey": CodeModule;
        private constructor();
        AddFromFile(FileName: string): void;
        AddFromString(String: string): void;
        readonly CodePane: CodePane;
        readonly CountOfDeclarationLines: number;
        readonly CountOfLines: number;
        CreateEventProc(EventName: string, ObjectName: string): number;

        /** @param Count [Count=1] */
        DeleteLines(StartLine: number, Count?: number): void;

        /**
         * @param WholeWord [WholeWord=false]
         * @param MatchCase [MatchCase=false]
         * @param PatternSearch [PatternSearch=false]
         */
        Find(
            Target: string,
            StartLine: number,
            StartColumn: number,
            EndLine: number,
            EndColumn: number,
            WholeWord?: boolean,
            MatchCase?: boolean,
            PatternSearch?: boolean,
        ): boolean;
        InsertLines(Line: number, String: string): void;
        Lines(StartLine: number, Count: number): string;
        Name: string;
        readonly Parent: VBComponent;
        ProcBodyLine(ProcName: string, ProcKind: vbext_ProcKind): number;
        ProcCountLines(ProcName: string, ProcKind: vbext_ProcKind): number;
        ProcOfLine(Line: number, ProcKind: vbext_ProcKind): string;
        ProcStartLine(ProcName: string, ProcKind: vbext_ProcKind): number;
        ReplaceLine(Line: number, String: string): void;
        readonly VBE: VBE;
    }

    class CodePane {
        private "VBIDE.CodePane_typekey": CodePane;
        private constructor();
        readonly CodeModule: CodeModule;
        readonly CodePaneView: vbext_CodePaneview;
        readonly Collection: CodePanes;
        readonly CountOfVisibleLines: number;
        GetSelection(StartLine: number, StartColumn: number, EndLine: number, EndColumn: number): void;
        SetSelection(StartLine: number, StartColumn: number, EndLine: number, EndColumn: number): void;
        Show(): void;
        TopLine: number;
        readonly VBE: VBE;
        readonly Window: Window;
    }

    interface CodePanes {
        readonly Count: number;
        Current: CodePane;
        Item(index: any): CodePane;
        readonly Parent: VBE;
        readonly VBE: VBE;
        (index: any): CodePane;
    }

    class CommandBarEvents {
        private "VBIDE.CommandBarEvents_typekey": CommandBarEvents;
        private constructor();
    }

    class Component {
        private "VBIDE.Component_typekey": Component;
        private constructor();
        readonly Application: Application;
        IsDirty: boolean;
        Name: string;
        readonly Parent: Components;
    }

    interface Components {
        Add(ComponentType: vbext_ComponentType): Component;
        readonly Application: Application;
        readonly Count: number;
        Import(FileName: string): Component;
        Item(index: any): Component;
        readonly Parent: VBProject;
        Remove(Component: Component): void;
        readonly VBE: VBE;
        (index: any): Component;
    }

    class Events {
        private "VBIDE.Events_typekey": Events;
        private constructor();
        CommandBarEvents(CommandBarControl: any): CommandBarEvents;
        ReferencesEvents(VBProject: VBProject): ReferencesEvents;
    }

    interface LinkedWindows {
        Add(Window: Window): void;
        readonly Count: number;
        Item(index: any): Window;
        readonly Parent: Window;
        Remove(Window: Window): void;
        readonly VBE: VBE;
        (index: any): Window;
    }

    class ProjectTemplate {
        private "VBIDE.ProjectTemplate_typekey": ProjectTemplate;
        private constructor();
        readonly Application: Application;
        readonly Parent: Application;
    }

    interface Properties {
        readonly Application: Application;
        readonly Count: number;
        Item(index: any): Property;
        readonly Parent: any;
        readonly VBE: VBE;
        (index: any): Property;
    }

    class Property {
        private "VBIDE.Property_typekey": Property;
        private constructor();
        readonly Application: Application;
        readonly Collection: Properties;
        IndexedValue(Index1: any, Index2?: any, Index3?: any, Index4?: any): any;
        readonly Name: string;
        readonly NumIndices: number;
        Object: any;
        readonly Parent: Properties;
        Value: any;
        readonly VBE: VBE;
    }

    class Reference {
        private "VBIDE.Reference_typekey": Reference;
        private constructor();
        readonly BuiltIn: boolean;
        readonly Collection: References;
        readonly Description: string;
        readonly FullPath: string;
        readonly Guid: string;
        readonly IsBroken: boolean;
        readonly Major: number;
        readonly Minor: number;
        readonly Name: string;
        readonly Type: vbext_RefKind;
        readonly VBE: VBE;
    }

    interface References {
        AddFromFile(FileName: string): Reference;
        AddFromGuid(Guid: string, Major: number, Minor: number): Reference;
        readonly Count: number;
        Item(index: any): Reference;
        readonly Parent: VBProject;
        Remove(Reference: Reference): void;
        readonly VBE: VBE;
        (index: any): Reference;
    }

    class ReferencesEvents {
        private "VBIDE.ReferencesEvents_typekey": ReferencesEvents;
        private constructor();
    }

    class VBComponent {
        private "VBIDE.VBComponent_typekey": VBComponent;
        private constructor();
        Activate(): void;
        readonly CodeModule: CodeModule;
        readonly Collection: VBComponents;
        readonly Designer: any;
        readonly DesignerID: string;
        DesignerWindow(): Window;
        Export(FileName: string): void;
        readonly HasOpenDesigner: boolean;
        Name: string;
        readonly Properties: Properties;
        readonly Saved: boolean;
        readonly Type: vbext_ComponentType;
        readonly VBE: VBE;
    }

    interface VBComponents {
        Add(ComponentType: vbext_ComponentType): VBComponent;
        AddCustom(ProgId: string): VBComponent;

        /** @param index [index=0] */
        AddMTDesigner(index?: number): VBComponent;
        readonly Count: number;
        Import(FileName: string): VBComponent;
        Item(index: any): VBComponent;
        readonly Parent: VBProject;
        Remove(VBComponent: VBComponent): void;
        readonly VBE: VBE;
        (index: any): VBComponent;
    }

    class VBE {
        private "VBIDE.VBE_typekey": VBE;
        private constructor();
        ActiveCodePane: CodePane;
        ActiveVBProject: VBProject;
        readonly ActiveWindow: Window;
        readonly Addins: Addins;
        readonly CodePanes: CodePanes;
        readonly CommandBars: Office.CommandBars;
        readonly Events: Events;
        readonly MainWindow: Window;
        readonly SelectedVBComponent: VBComponent;
        readonly VBProjects: VBProjects;
        readonly Version: string;
        readonly Windows: Windows;
    }

    class VBProject {
        private "VBIDE.VBProject_typekey": VBProject;
        private constructor();
        readonly Application: Application;
        BuildFileName: string;
        readonly Collection: VBProjects;
        Description: string;
        readonly FileName: string;
        HelpContextID: number;
        HelpFile: string;
        MakeCompiledFile(): void;
        readonly Mode: vbext_VBAMode;
        Name: string;
        readonly Parent: Application;
        readonly Protection: vbext_ProjectProtection;
        readonly References: References;
        SaveAs(FileName: string): void;
        readonly Saved: boolean;
        readonly Type: vbext_ProjectType;
        readonly VBComponents: VBComponents;
        readonly VBE: VBE;
    }

    interface VBProjects {
        Add(Type: vbext_ProjectType): VBProject;
        readonly Count: number;
        Item(index: any): VBProject;
        Open(bstrPath: string): VBProject;
        readonly Parent: VBE;
        Remove(lpc: VBProject): void;
        readonly VBE: VBE;
        (index: any): VBProject;
    }

    class Window {
        private "VBIDE.Window_typekey": Window;
        private constructor();
        readonly Caption: string;
        Close(): void;
        readonly Collection: Windows;
        Height: number;
        readonly HWnd: number;
        Left: number;
        readonly LinkedWindowFrame: Window;
        readonly LinkedWindows: LinkedWindows;
        SetFocus(): void;
        Top: number;
        readonly Type: vbext_WindowType;
        readonly VBE: VBE;
        Visible: boolean;
        Width: number;
        WindowState: vbext_WindowState;
    }

    interface Windows {
        readonly Count: number;
        CreateToolWindow(AddInInst: AddIn, ProgId: string, Caption: string, GuidPosition: string, DocObj: any): Window;
        Item(index: any): Window;
        readonly Parent: Application;
        readonly VBE: VBE;
        (index: any): Window;
    }
}

interface ActiveXObject {
    on(
        obj: VBIDE.CommandBarEvents,
        event: "Click",
        argNames: ["CommandBarControl", "handled", "CancelDefault"],
        handler: (
            this: VBIDE.CommandBarEvents,
            parameter: { readonly CommandBarControl: any; readonly handled: boolean; readonly CancelDefault: boolean },
        ) => void,
    ): void;
    on(
        obj: VBIDE.References,
        event: "ItemAdded" | "ItemRemoved",
        argNames: ["Reference"],
        handler: (this: VBIDE.References, parameter: { readonly Reference: VBIDE.Reference }) => void,
    ): void;
    on(
        obj: VBIDE.ReferencesEvents,
        event: "ItemAdded" | "ItemRemoved",
        argNames: ["Reference"],
        handler: (this: VBIDE.ReferencesEvents, parameter: { readonly Reference: VBIDE.Reference }) => void,
    ): void;
}
