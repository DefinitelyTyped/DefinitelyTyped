// Type definitions for Microsoft Visual Basic for Applications Extensibility 5.3 - VBIDE 14.0
// Project: https://msdn.microsoft.com/en-us/vba/language-reference-vba/articles/collections-visual-basic-add-in-model
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
        private 'VBIDE.AddIn_typekey': AddIn;
        private constructor();
        public readonly Collection: Addins;
        public Connect: boolean;
        public Description: string;
        public readonly Guid: string;
        public Object: any;
        public readonly ProgId: string;
        public readonly VBE: VBE;
    }

    class Addins {
        private 'VBIDE.Addins_typekey': Addins;
        private constructor();
        public readonly Count: number;
        public Item(index: any): AddIn;
        public readonly Parent: any;
        public Update(): void;
        public readonly VBE: VBE;
    }

    class Application {
        private 'VBIDE.Application_typekey': Application;
        private constructor();
        public readonly Version: string;
    }

    class CodeModule {
        private 'VBIDE.CodeModule_typekey': CodeModule;
        private constructor();
        public AddFromFile(FileName: string): void;
        public AddFromString(String: string): void;
        public readonly CodePane: CodePane;
        public readonly CountOfDeclarationLines: number;
        public readonly CountOfLines: number;
        public CreateEventProc(EventName: string, ObjectName: string): number;

        /** @param number [Count=1] */
        public DeleteLines(StartLine: number, Count?: number): void;

        /**
         * @param boolean [WholeWord=false]
         * @param boolean [MatchCase=false]
         * @param boolean [PatternSearch=false]
         */
        public Find(Target: string, StartLine: number, StartColumn: number, EndLine: number, EndColumn: number, WholeWord?: boolean, MatchCase?: boolean, PatternSearch?: boolean): boolean;
        public InsertLines(Line: number, String: string): void;
        public Lines(StartLine: number, Count: number): string;
        public Name: string;
        public readonly Parent: VBComponent;
        public ProcBodyLine(ProcName: string, ProcKind: vbext_ProcKind): number;
        public ProcCountLines(ProcName: string, ProcKind: vbext_ProcKind): number;
        public ProcOfLine(Line: number, ProcKind: vbext_ProcKind): string;
        public ProcStartLine(ProcName: string, ProcKind: vbext_ProcKind): number;
        public ReplaceLine(Line: number, String: string): void;
        public readonly VBE: VBE;
    }

    class CodePane {
        private 'VBIDE.CodePane_typekey': CodePane;
        private constructor();
        public readonly CodeModule: CodeModule;
        public readonly CodePaneView: vbext_CodePaneview;
        public readonly Collection: CodePanes;
        public readonly CountOfVisibleLines: number;
        public GetSelection(StartLine: number, StartColumn: number, EndLine: number, EndColumn: number): void;
        public SetSelection(StartLine: number, StartColumn: number, EndLine: number, EndColumn: number): void;
        public Show(): void;
        public TopLine: number;
        public readonly VBE: VBE;
        public readonly Window: Window;
    }

    class CodePanes {
        private 'VBIDE.CodePanes_typekey': CodePanes;
        private constructor();
        public readonly Count: number;
        public Current: CodePane;
        public Item(index: any): CodePane;
        public readonly Parent: VBE;
        public readonly VBE: VBE;
    }

    class CommandBarEvents {
        private 'VBIDE.CommandBarEvents_typekey': CommandBarEvents;
        private constructor();
    }

    class Component {
        private 'VBIDE.Component_typekey': Component;
        private constructor();
        public readonly Application: Application;
        public IsDirty: boolean;
        public Name: string;
        public readonly Parent: Components;
    }

    class Components {
        private 'VBIDE.Components_typekey': Components;
        private constructor();
        public Add(ComponentType: vbext_ComponentType): Component;
        public readonly Application: Application;
        public readonly Count: number;
        public Import(FileName: string): Component;
        public Item(index: any): Component;
        public readonly Parent: VBProject;
        public Remove(Component: Component): void;
        public readonly VBE: VBE;
    }

    class Events {
        private 'VBIDE.Events_typekey': Events;
        private constructor();
        public CommandBarEvents(CommandBarControl: any): CommandBarEvents;
        public ReferencesEvents(VBProject: VBProject): ReferencesEvents;
    }

    class LinkedWindows {
        private 'VBIDE.LinkedWindows_typekey': LinkedWindows;
        private constructor();
        public Add(Window: Window): void;
        public readonly Count: number;
        public Item(index: any): Window;
        public readonly Parent: Window;
        public Remove(Window: Window): void;
        public readonly VBE: VBE;
    }

    class ProjectTemplate {
        private 'VBIDE.ProjectTemplate_typekey': ProjectTemplate;
        private constructor();
        public readonly Application: Application;
        public readonly Parent: Application;
    }

    class Properties {
        private 'VBIDE.Properties_typekey': Properties;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public Item(index: any): Property;
        public readonly Parent: any;
        public readonly VBE: VBE;
    }

    class Property {
        private 'VBIDE.Property_typekey': Property;
        private constructor();
        public readonly Application: Application;
        public readonly Collection: Properties;
        public IndexedValue(Index1: any, Index2?: any, Index3?: any, Index4?: any): any;
        public readonly Name: string;
        public readonly NumIndices: number;
        public Object: any;
        public readonly Parent: Properties;
        public Value: any;
        public readonly VBE: VBE;
    }

    class Reference {
        private 'VBIDE.Reference_typekey': Reference;
        private constructor();
        public readonly BuiltIn: boolean;
        public readonly Collection: References;
        public readonly Description: string;
        public readonly FullPath: string;
        public readonly Guid: string;
        public readonly IsBroken: boolean;
        public readonly Major: number;
        public readonly Minor: number;
        public readonly Name: string;
        public readonly Type: vbext_RefKind;
        public readonly VBE: VBE;
    }

    class References {
        private 'VBIDE.References_typekey': References;
        private constructor();
        public AddFromFile(FileName: string): Reference;
        public AddFromGuid(Guid: string, Major: number, Minor: number): Reference;
        public readonly Count: number;
        public Item(index: any): Reference;
        public readonly Parent: VBProject;
        public Remove(Reference: Reference): void;
        public readonly VBE: VBE;
    }

    class ReferencesEvents {
        private 'VBIDE.ReferencesEvents_typekey': ReferencesEvents;
        private constructor();
    }

    class VBComponent {
        private 'VBIDE.VBComponent_typekey': VBComponent;
        private constructor();
        public Activate(): void;
        public readonly CodeModule: CodeModule;
        public readonly Collection: VBComponents;
        public readonly Designer: any;
        public readonly DesignerID: string;
        public DesignerWindow(): Window;
        public Export(FileName: string): void;
        public readonly HasOpenDesigner: boolean;
        public Name: string;
        public readonly Properties: Properties;
        public readonly Saved: boolean;
        public readonly Type: vbext_ComponentType;
        public readonly VBE: VBE;
    }

    class VBComponents {
        private 'VBIDE.VBComponents_typekey': VBComponents;
        private constructor();
        public Add(ComponentType: vbext_ComponentType): VBComponent;
        public AddCustom(ProgId: string): VBComponent;

        /** @param number [index=0] */
        public AddMTDesigner(index?: number): VBComponent;
        public readonly Count: number;
        public Import(FileName: string): VBComponent;
        public Item(index: any): VBComponent;
        public readonly Parent: VBProject;
        public Remove(VBComponent: VBComponent): void;
        public readonly VBE: VBE;
    }

    class VBE {
        private 'VBIDE.VBE_typekey': VBE;
        private constructor();
        public ActiveCodePane: CodePane;
        public ActiveVBProject: VBProject;
        public readonly ActiveWindow: Window;
        public readonly Addins: Addins;
        public readonly CodePanes: CodePanes;
        public readonly CommandBars: Office.CommandBars;
        public readonly Events: Events;
        public readonly MainWindow: Window;
        public readonly SelectedVBComponent: VBComponent;
        public readonly VBProjects: VBProjects;
        public readonly Version: string;
        public readonly Windows: Windows;
    }

    class VBProject {
        private 'VBIDE.VBProject_typekey': VBProject;
        private constructor();
        public readonly Application: Application;
        public BuildFileName: string;
        public readonly Collection: VBProjects;
        public Description: string;
        public readonly FileName: string;
        public HelpContextID: number;
        public HelpFile: string;
        public MakeCompiledFile(): void;
        public readonly Mode: vbext_VBAMode;
        public Name: string;
        public readonly Parent: Application;
        public readonly Protection: vbext_ProjectProtection;
        public readonly References: References;
        public SaveAs(FileName: string): void;
        public readonly Saved: boolean;
        public readonly Type: vbext_ProjectType;
        public readonly VBComponents: VBComponents;
        public readonly VBE: VBE;
    }

    class VBProjects {
        private 'VBIDE.VBProjects_typekey': VBProjects;
        private constructor();
        public Add(Type: vbext_ProjectType): VBProject;
        public readonly Count: number;
        public Item(index: any): VBProject;
        public Open(bstrPath: string): VBProject;
        public readonly Parent: VBE;
        public Remove(lpc: VBProject): void;
        public readonly VBE: VBE;
    }

    class Window {
        private 'VBIDE.Window_typekey': Window;
        private constructor();
        public readonly Caption: string;
        public Close(): void;
        public readonly Collection: Windows;
        public Height: number;
        public readonly HWnd: number;
        public Left: number;
        public readonly LinkedWindowFrame: Window;
        public readonly LinkedWindows: LinkedWindows;
        public SetFocus(): void;
        public Top: number;
        public readonly Type: vbext_WindowType;
        public readonly VBE: VBE;
        public Visible: boolean;
        public Width: number;
        public WindowState: vbext_WindowState;
    }

    class Windows {
        private 'VBIDE.Windows_typekey': Windows;
        private constructor();
        public readonly Count: number;
        public CreateToolWindow(AddInInst: AddIn, ProgId: string, Caption: string, GuidPosition: string, DocObj: any): Window;
        public Item(index: any): Window;
        public readonly Parent: Application;
        public readonly VBE: VBE;
    }
}

interface ActiveXObject {
    on(
        obj: VBIDE.CommandBarEvents, event: 'Click', argNames: ['CommandBarControl', 'handled', 'CancelDefault'], handler: (
            this: VBIDE.CommandBarEvents, parameter: {readonly CommandBarControl: any, readonly handled: boolean, readonly CancelDefault: boolean}) => void): void;
    on(obj: VBIDE.References, event: 'ItemAdded' | 'ItemRemoved', argNames: ['Reference'], handler: (this: VBIDE.References, parameter: {readonly Reference: VBIDE.Reference}) => void): void;
    on(
        obj: VBIDE.ReferencesEvents, event: 'ItemAdded' | 'ItemRemoved', argNames: ['Reference'], handler: (
            this: VBIDE.ReferencesEvents, parameter: {readonly Reference: VBIDE.Reference}) => void): void;
}

interface EnumeratorConstructor {
    new(col: VBIDE.Addins): Enumerator<VBIDE.AddIn>;
    new(col: VBIDE.CodePanes): Enumerator<VBIDE.CodePane>;
    new(col: VBIDE.Components): Enumerator<VBIDE.Component>;
    new(col: VBIDE.LinkedWindows | VBIDE.Windows): Enumerator<VBIDE.Window>;
    new(col: VBIDE.Properties): Enumerator<VBIDE.Property>;
    new(col: VBIDE.References): Enumerator<VBIDE.Reference>;
    new(col: VBIDE.VBComponents): Enumerator<VBIDE.VBComponent>;
    new(col: VBIDE.VBProjects): Enumerator<VBIDE.VBProject>;
}

interface SafeArray<T = any> {
    _brand: SafeArray<T>;
}
