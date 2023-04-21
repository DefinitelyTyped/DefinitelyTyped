/// <reference path="jassijs_editor.d.ts" />
/// <amd-dependency name="pdfMakelib" path="pdfMakelib" />
/// <amd-dependency name="vfs_fonts" path="vfs_fonts" />
declare module "jassijs_report/ext/pdfmake" {
    const _default: any;
    export default _default;
}
/// <amd-dependency name="pdfjs" path="pdfjs-dist/build/pdf" />
/// <amd-dependency name="worker" path="pdfjs-dist/build/pdf.worker" />
declare module "jassijs_report/ext/pdfjs" {
    var pdfjs: any;
    export default pdfjs;
}
declare module "jassijs_report/PDFViewer" {
    import { Button } from "jassijs/ui/Button";
    import { Component } from "jassijs/ui/Component";
    import { Panel } from "jassijs/ui/Panel";
    import { BoxPanel } from "jassijs/ui/BoxPanel";
    import { PDFReport } from "jassijs_report/PDFReport";
    class Canavas extends Component {
        constructor();
    }
    type Me = {
        toolbar?: BoxPanel;
        plus?: Button;
        minus?: Button;
        download?: Button;
        mainpanel?: Panel;
    };
    export class PDFViewer extends Panel {
        pdfjsLib: any;
        pdfDoc: any;
        pageNum: number;
        pageRendering: boolean;
        pageNumPending: any;
        scale: number;
        allcanvas: HTMLCanvasElement[];
        canavasPanels: Canavas[];
        _data: any;
        me: Me;
        report: PDFReport;
        constructor();
        layout(me: Me): void;
        renderPages(num: any): void;
        private updatePages;
        /**
         * @member {data} - the caption of the button
         */
        set value(value: any);
        get value(): any;
    }
    export function test(): Promise<PDFViewer>;
}
declare module "jassijs_report/remote/pdfmakejassi" {
    global {
        interface String {
            replaceTemplate: any;
        }
    }
    /**
     * groups and sort the entries
     * @param {any[]} entries - the entries to group
     * @param {string[]} groupfields - the fields where the entries are grouped
     */
    export function doGroup(entries: any, groupfields: string[]): {
        entries: any[];
        name: any;
    };
    /**
     * create an pdfmake-definition from an jassijs-report-definition, fills data and parameter in the report
     * @param {string} definition - the jassijs-report definition
     * @param {any} [data] - the data which are filled in the report (optional)
     * @param {any} [parameter] - the parameter which are filled in the report (otional)
     */
    export function createReportDefinition(definition: any, data: any, parameter: any): any;
    export function test(): void;
}
declare module "jassijs_report/PDFReport" {
    import { PDFViewer } from "jassijs_report/PDFViewer";
    export class PDFReport {
        report: any;
        /**
         * @member {object} - report definition
         */
        value: any;
        data: any;
        parameter: any;
        constructor();
        layout(): void;
        fill(): void;
        open(): void;
        download(): void;
        print(): void;
        getBase64(): Promise<any>;
    }
    export function test(): Promise<PDFViewer>;
}
declare module "jassijs_report/RStyle" {
    import { RComponent } from "jassijs_report/RComponent";
    export class RStyle extends RComponent {
        $isInivisibleComponent: boolean;
        reporttype: string;
        private activeComponentDesigner;
        _name: string;
        set name(value: string);
        addToParent(suggestedparent: any): void;
        get name(): string;
        constructor(properties?: any);
        toJSON(): any;
        update(): void;
        fromJSON(ob: any): RStyle;
        get styleid(): string;
        extensionCalled(action: ExtensionAction): void;
    }
    export function test(): void;
}
declare module "jassijs_report/RComponent" {
    import { UIComponentProperties } from "jassijs/ui/Component";
    import { Panel } from "jassijs/ui/Panel";
    import { ReportDesign } from "jassijs_report/ReportDesign";
    export class ReportComponentProperties extends UIComponentProperties {
    }
    export function $ReportComponent(properties: ReportComponentProperties): Function;
    export class RComponent extends Panel {
        private _colSpan;
        private _rowSpan;
        foreach: string;
        private _width;
        private _height;
        private _bold;
        private _decoration;
        private _decorationStyle;
        private _decorationColor;
        private _color;
        private _fontSize;
        private _lineHeight;
        private _italics;
        private _alignment;
        private _background;
        private _font;
        private _style;
        private _fillColor;
        private _border;
        private _counter;
        private _listType;
        private _margin;
        reporttype: string;
        otherProperties: any;
        constructor(properties?: any);
        onstylechanged(func: any): void;
        set counter(value: number);
        get counter(): number;
        set listType(value: string);
        get listType(): string;
        get fillColor(): string;
        set fillColor(value: string);
        get colSpan(): number;
        set colSpan(value: number);
        get rowSpan(): number;
        set rowSpan(value: number);
        get border(): boolean[];
        set border(value: boolean[]);
        get width(): any;
        set width(value: any);
        get height(): any;
        set height(value: any);
        get bold(): boolean;
        set bold(value: boolean);
        get italics(): boolean;
        set italics(value: boolean);
        get font(): string;
        set font(value: string);
        get fontSize(): number;
        set fontSize(value: number);
        get background(): string;
        set background(value: string);
        get color(): string;
        set color(value: string);
        get alignment(): string;
        set alignment(value: string);
        get decoration(): string;
        set decoration(value: string);
        get decorationColor(): string;
        set decorationColor(value: string);
        get decorationStyle(): string;
        set decorationStyle(value: string);
        static findReport(parent: any): ReportDesign;
        get style(): string;
        set style(value: string);
        get lineHeight(): number;
        set lineHeight(value: number);
        get margin(): number[];
        set margin(value: number[]);
        fromJSON(ob: any): RComponent;
        toJSON(): any;
    }
}
declare module "jassijs_report/RStack" {
    import { RComponent } from "jassijs_report/RComponent";
    export class RStack extends RComponent {
        reporttype: string;
        /**
        *
        * @param {object} properties - properties to init
        * @param {string} [properties.id] -  connect to existing id (not reqired)
        * @param {boolean} [properties.useSpan] -  use span not div
        *
        */
        constructor(properties?: any);
        /**
          * adds a component to the container before an other component
          * @param {jassijs.ui.Component} component - the component to add
          * @param {jassijs.ui.Component} before - the component before then component to add
          */
        addBefore(component: any, before: any): any;
        /**
      * adds a component to the container
      * @param {jassijs.ui.Component} component - the component to add
      */
        add(component: any): any;
        toJSON(): any;
        fromJSON(ob: any): RStack;
    }
}
declare module "jassijs_report/RText" {
    import { RComponent } from "jassijs_report/RComponent";
    export class RText extends RComponent {
        reporttype: string;
        initIfNeeded: any;
        focusLost: any;
        toolbar: string[];
        customToolbarButtons: {
            [name: string]: {
                title: string;
                action: any;
            };
        };
        _format: string;
        /**
        *
        * @param {object} properties - properties to init
        * @param {string} [properties.id] -  connect to existing id (not reqired)
        * @param {boolean} [properties.useSpan] -  use span not div
        *
        */
        constructor(properties?: any);
        get value(): string;
        set value(code: string);
        set format(value: string);
        get format(): string;
        fromJSON(ob: any): RText;
        private convertFromHTMLNode;
        private rgbToHex;
        private fullColorHex;
        private convertToHTML;
        private convertFromHTML;
        toJSON(): any;
    }
    export function test(): void;
}
declare module "jassijs_report/RUnknown" {
    import { RComponent } from "jassijs_report/RComponent";
    export class RUnknown extends RComponent {
        horizonzal: boolean;
        reporttype: string;
        /**
        *
        * @param {object} properties - properties to init
        * @param {string} [properties.id] -  connect to existing id (not reqired)
        * @param {boolean} [properties.useSpan] -  use span not div
        *
        */
        constructor(properties?: any);
        fromJSON(ob: any): this;
        toJSON(): any;
    }
}
declare module "jassijs_report/remote/ServerReport" {
    import { Context, RemoteObject } from "jassijs/remote/RemoteObject";
    export class ServerReport extends RemoteObject {
        static cacheLastParameter: {};
        static getDesign(path: string, parameter: any, context?: Context): Promise<any>;
        static getBase64(path: string, parameter: any, context?: Context): Promise<any>;
        static getBase64LastTestResult(context?: Context): Promise<any>;
    }
    export function test(): Promise<any>;
}
declare module "jassijs_report/designer/ReportDesigner" {
    import { ComponentDesigner } from "jassijs_editor/ComponentDesigner";
    import { Component } from "jassijs/ui/Component";
    import { PDFViewer } from "jassijs_report/PDFViewer";
    import { ReportDesign } from "jassijs_report/ReportDesign";
    export class ReportDesigner extends ComponentDesigner {
        propertyIsChanging: boolean;
        pdfviewer: PDFViewer;
        allComponents: {
            [name: string]: Component;
        };
        nextComponentvariable: {
            [typ: string]: number;
        };
        componentviewer: any;
        private _codeChanger;
        mainLayout: string;
        constructor();
        set codeEditor(value: any);
        connectParser(parser: any): void;
        editDialog(enable: any): void;
        propertyChanged(): void;
        createComponent(type: any, component: any, top: any, left: any, newParent: any, beforeComponent: any): Component;
        createVariable(type: any, scope: any, component: Component): string;
        paste(): Promise<void>;
        copy(): Promise<string>;
        cutComponent(): Promise<void>;
        /**
          * @member {jassijs.ui.Component} - the designed component
          */
        set designedComponent(component: ReportDesign);
        /**
           * undo action
           */
        undo(): void;
        get designedComponent(): ReportDesign;
        get codeEditor(): any;
        _installView(): void;
        destroy(): void;
        _initComponentExplorer(): void;
    }
    export function test2(): Promise<PDFViewer>;
    export function test(): Promise<import("jassijs_editor/CodeEditor").CodeEditor>;
}
declare module "jassijs_report/RGroupTablerow" {
    import { RTablerow } from "jassijs_report/RTablerow";
    export class RGroupTablerow extends RTablerow {
        get expression(): string;
        set expression(value: string);
        get _editorselectthis(): this;
    }
}
declare module "jassijs_report/RTableLayouts" {
    var tableLayouts: {
        zebra: {
            isSystem: boolean;
            layout: {
                fillColor: (rowIndex: any, node: any, columnIndex: any) => string;
            };
        };
        noBorders: {
            isSystem: boolean;
            layout: {
                hLineWidth: (i: any, node: any) => number;
                vLineWidth: (i: any, node: any) => number;
            };
        };
        headerLineOnly: {
            isSystem: boolean;
            layout: {
                hLineWidth: (i: any, node: any) => 0 | 2;
                vLineWidth: (i: any, node: any) => number;
            };
        };
        lightHorizontalLines: {
            isSystem: boolean;
            layout: {
                hLineWidth: (i: any, node: any) => 1 | 0 | 2;
                vLineWidth: (i: any, node: any) => number;
            };
        };
        frameWithLines: {
            isSystem: boolean;
            layout: {
                hLineWidth: (i: any, node: any) => 1 | 2;
                vLineWidth: (i: any, node: any) => 1 | 2;
                hLineColor: (i: any, node: any) => "black" | "gray";
                vLineColor: (i: any, node: any) => "black" | "gray";
            };
        };
        frame: {
            isSystem: boolean;
            layout: {
                hLineWidth: (i: any, node: any) => 0 | 2;
                vLineWidth: (i: any, node: any) => 0 | 2;
            };
        };
        custom: {
            isSystem: boolean;
            layout: {
                fillColor: (rowIndex: any, node: any, columnIndex: any) => any;
                hLineWidth: (i: any, node: any) => 1 | 4;
                vLineWidth: (i: any, node: any) => 1 | 4;
                hLineColor: (i: any, node: any) => "black" | "red";
                vLineColor: (i: any, node: any) => "blue" | "green";
                paddingLeft: (i: any, node: any) => number;
                paddingRight: (i: any, node: any) => number;
                paddingTop: (i: any, node: any) => number;
                paddingBottom: (i: any, node: any) => number;
            };
        };
    };
    export { tableLayouts };
}
declare module "jassijs_report/RTable" {
    import { RComponent } from "jassijs_report/RComponent";
    import { RTablerow } from "jassijs_report/RTablerow";
    import { Component } from "jassijs/ui/Component";
    import { ComponentDesigner } from "jassijs_editor/ComponentDesigner";
    import { Runlater } from "jassijs/util/Runlater";
    export class RTable extends RComponent {
        _componentDesigner: ComponentDesigner;
        reporttype: string;
        design: any;
        private insertEmptyCells;
        widths: any[];
        heights: any;
        layout: any;
        updater: Runlater;
        headerRows: number;
        /**
    *
    * @param {object} properties - properties to init
    * @param {string} [properties.id] -  connect to existing id (not reqired)
    * @param {boolean} [properties.useSpan] -  use span not div
    *
    */
        constructor(properties?: any);
        private initKeys;
        private getInfoFromEvent;
        initContextMenu(isDatatable: any): Promise<void>;
        add(component: any): void;
        updateLayout(doitlater?: boolean): void;
        correctHideAfterSpan(): void;
        doTableLayout(): void;
        protected _setDesignMode(enable: any): void;
        protected fillTableRow(row: RTablerow, count: number): void;
        addEmptyCellsIfNeeded(row: RTablerow): void;
        /**
       * sets the height of a table cell
       * @param component - the table cell
       * @param height - the new height
       **/
        setChildHeight(component: Component, height: any): void;
        /**
        * gets the width of a table cell
        * @param component - the table cell
        **/
        getChildHeight(component: Component): any;
        /**
        * sets the width of a table cell
        * @param component - the table cell
        * @param width - the new width
        **/
        setChildWidth(component: Component, width: any): void;
        /**
         * gets the width of a table cell
         * @param component - the table cell
         **/
        getChildWidth(component: Component): any;
        private create;
        set layoutName(value: string);
        get layoutName(): string;
        extensionCalled(action: ExtensionAction): void;
        private findTableLayout;
        fromJSON(obj: any, callingFromTable?: any): any;
        toJSON(datatable?: any): any;
    }
    export function test(): Promise<void>;
}
declare module "jassijs_report/RTablerow" {
    import { Component } from "jassijs/ui/Component";
    import { RComponent } from "jassijs_report/RComponent";
    import { RTable } from "jassijs_report/RTable";
    export class RTablerow extends RComponent {
        reporttype: string;
        parent: RTable;
        forEachDummy: any;
        /**
        *
        * @param {object} properties - properties to init
        * @param {string} [properties.id] -  connect to existing id (not reqired)
        * @param {boolean} [properties.useSpan] -  use span not div
        *
        */
        constructor(properties?: any);
        oncomponentAdded(callback: any): void;
        get _editorselectthis(): any;
        setChildWidth(component: Component, value: any): void;
        getChildWidth(component: Component): any;
        setChildHeight(component: Component, value: any): void;
        getChildHeight(component: Component): any;
        private wrapComponent;
        /**
        * adds a component to the container
        * @param {jassijs.ui.Component} component - the component to add
        */
        add(component: any): any;
        /**
      * adds a component to the container before an other component
      * @param {jassijs.ui.Component} component - the component to add
      * @param {jassijs.ui.Component} before - the component before then component to add
      */
        addBefore(component: any, before: any): any;
        fromJSON(columns: any[]): RTablerow;
        toJSON(): any;
    }
}
declare module "jassijs_report/RDatatable" {
    import { ReportDesign } from "jassijs_report/ReportDesign";
    import { RTablerow } from "jassijs_report/RTablerow";
    import { RTable } from "jassijs_report/RTable";
    export class RDatatable extends RTable {
        reporttype: string;
        headerPanel: RTablerow;
        groupHeaderPanel: RTablerow[];
        bodyPanel: RTablerow;
        groupFooterPanel: RTablerow[];
        groupExpression: string[];
        footerPanel: RTablerow;
        dataforeach: string;
        /**
    *
    * @param {object} properties - properties to init
    * @param {string} [properties.id] -  connect to existing id (not reqired)
    * @param {boolean} [properties.useSpan] -  use span not div
    *
    */
        constructor(properties?: any);
        protected _setDesignMode(enable: any): void;
        addEmptyCellsIfNeeded(row: RTablerow): void;
        extensionCalled(action: ExtensionAction): void;
        set groupCount(value: number);
        get groupCount(): number;
        fromJSON(obj: any, target?: ReportDesign): any;
        toJSON(): any;
    }
    export function test(): Promise<void>;
}
declare module "jassijs_report/RTextGroup" {
    import { RComponent } from "jassijs_report/RComponent";
    export class RTextGroup extends RComponent {
        reporttype: string;
        /**
        *
        * @param {object} properties - properties to init
        * @param {string} [properties.id] -  connect to existing id (not reqired)
        * @param {boolean} [properties.useSpan] -  use span not div
        *
        */
        constructor(properties?: {
            useSpan: boolean;
        });
        /**
          * adds a component to the container before an other component
          * @param {jassijs.ui.Component} component - the component to add
          * @param {jassijs.ui.Component} before - the component before then component to add
          */
        addBefore(component: any, before: any): any;
        /**
      * adds a component to the container
      * @param {jassijs.ui.Component} component - the component to add
      */
        add(component: any): any;
        toJSON(): any;
        fromJSON(ob: any): RTextGroup;
    }
}
declare module "jassijs_report/RUList" {
    import { RComponent } from "jassijs_report/RComponent";
    export class RUList extends RComponent {
        reporttype: string;
        _type: string;
        /**
        *
        * @param {object} properties - properties to init
        * @param {string} [properties.id] -  connect to existing id (not reqired)
        * @param {boolean} [properties.useSpan] -  use span not div
        *
        */
        constructor(properties?: any);
        /**
         * adds a component to the container before an other component
         * @param {jassijs.ui.Component} component - the component to add
         * @param {jassijs.ui.Component} before - the component before then component to add
         */
        addBefore(component: any, before: any): any;
        /**
      * adds a component to the container
      * @param {jassijs.ui.Component} component - the component to add
      */
        add(component: any): any;
        set type(value: string);
        get type(): string;
        toJSON(): any;
        fromJSON(ob: any): RUList;
    }
}
declare module "jassijs_report/ROList" {
    import { RComponent } from "jassijs_report/RComponent";
    export class ROList extends RComponent {
        reporttype: string;
        _reversed: boolean;
        _start: number;
        _type: string;
        /**
        *
        * @param {object} properties - properties to init
        * @param {string} [properties.id] -  connect to existing id (not reqired)
        * @param {boolean} [properties.useSpan] -  use span not div
        *
        */
        constructor(properties?: any);
        set type(value: string);
        get type(): string;
        set reversed(value: boolean);
        get reversed(): boolean;
        set start(value: number);
        get start(): number;
        /**
         * adds a component to the container before an other component
         * @param {jassijs.ui.Component} component - the component to add
         * @param {jassijs.ui.Component} before - the component before then component to add
         */
        addBefore(component: any, before: any): any;
        /**
      * adds a component to the container
      * @param {jassijs.ui.Component} component - the component to add
      */
        add(component: any): any;
        toJSON(): any;
        fromJSON(ob: any): ROList;
    }
}
declare module "jassijs_report/RImage" {
    import { RComponent } from "jassijs_report/RComponent";
    export class RImage extends RComponent {
        reporttype: string;
        _image: string;
        _fit: number[];
        _opacity: number;
        /**
        *
        * @param {object} properties - properties to init
        * @param {string} [properties.id] -  connect to existing id (not reqired)
        * @param {boolean} [properties.useSpan] -  use span not div
        *
        */
        constructor(properties?: any);
        /**
         * adds a component to the container before an other component
         * @param {jassijs.ui.Component} component - the component to add
         * @param {jassijs.ui.Component} before - the component before then component to add
         */
        addBefore(component: any, before: any): void;
        /**
      * adds a component to the container
      * @param {jassijs.ui.Component} component - the component to add
      */
        add(component: any): void;
        set image(value: string);
        get image(): string;
        set fit(value: number[]);
        get fit(): number[];
        set opacity(value: number);
        get opacity(): number;
        toJSON(): any;
        fromJSON(ob: any): RImage;
    }
}
declare module "jassijs_report/ReportDesign" {
    import { BoxPanel } from "jassijs/ui/BoxPanel";
    import { RStack } from "jassijs_report/RStack";
    import { Panel } from "jassijs/ui/Panel";
    import { RComponent } from "jassijs_report/RComponent";
    import { RStyle } from "jassijs_report/RStyle";
    class InfoProperties {
        title: string;
        author: string;
        subject: string;
        keywords: string;
        creator: string;
        producer: string;
    }
    class PermissionProperties {
        printing: string;
        modifying: boolean;
        copying: boolean;
        annotating: boolean;
        fillingForms: boolean;
        contentAccessibility: boolean;
        documentAssembly: boolean;
    }
    class StyleContainer extends Panel {
        constructor(props: any);
    }
    export class ReportDesign extends BoxPanel {
        styleContainer: StyleContainer;
        defaultStyle: RStyle;
        reporttype: string;
        design: any;
        otherProperties: any;
        backgroundPanel: RStack;
        headerPanel: RStack;
        contentPanel: RStack;
        footerPanel: RStack;
        _pageSize: string;
        _pageOrientation: string;
        _pageMargins: number[];
        compress: boolean;
        userPassword: string;
        ownerPassword: string;
        info: InfoProperties;
        permissions: PermissionProperties;
        images: any;
        /**
        *
        * @param {object} properties - properties to init
        * @param {string} [properties.id] -  connect to existing id (not reqired)
        * @param {boolean} [properties.useSpan] -  use span not div
        *
        */
        constructor(properties?: any);
        update(design: any): void;
        get pageMargins(): number[];
        set pageMargins(value: number[]);
        get pageSize(): string;
        set pageSize(value: string);
        get pageOrientation(): string;
        set pageOrientation(value: string);
        private updateWidth;
        protected _setDesignMode(enable: any): void;
        private static collectForEach;
        private static getVariable;
        private static addVariablenames;
        static getVariables(component: RComponent): string[];
        static fromJSON(ob: any, target?: ReportDesign): any;
        private create;
        private static linkStyles;
        toJSON(): any;
        /**
       * adds a component to the container
       * @param {jassijs.ui.Component} component - the component to add
       */
        private pageSized;
    }
    export function test(): Promise<void>;
}
declare module "jassijs_report/RColumns" {
    import { RComponent } from "jassijs_report/RComponent";
    export class RColumns extends RComponent {
        reporttype: string;
        /**
        *
        * @param {object} properties - properties to init
        * @param {string} [properties.id] -  connect to existing id (not reqired)
        * @param {boolean} [properties.useSpan] -  use span not div
        *
        */
        constructor(properties?: any);
        /**
       * adds a component to the container before an other component
       * @param {jassijs.ui.Component} component - the component to add
       * @param {jassijs.ui.Component} before - the component before then component to add
       */
        addBefore(component: any, before: any): any;
        /**
      * adds a component to the container
      * @param {jassijs.ui.Component} component - the component to add
      */
        add(component: any): any;
        toJSON(): any;
        fromJSON(ob: any): any;
    }
}
declare module "jassijs_report/RImageEditor" {
    import "jassijs/ext/jquerylib";
    import { Databinder } from "jassijs/ui/Databinder";
    import { Upload } from "jassijs/ui/Upload";
    import { Textbox } from "jassijs/ui/Textbox";
    import { Image } from "jassijs/ui/Image";
    import { Button } from "jassijs/ui/Button";
    import { Repeater } from "jassijs/ui/Repeater";
    import { Panel } from "jassijs/ui/Panel";
    import { Editor } from "jassijs/ui/PropertyEditors/Editor";
    type Me = {
        repeater1?: Repeater;
        panel1?: Panel;
        image1?: Image;
        itile?: Textbox;
        remove?: Button;
        upload1?: Upload;
        databinder1?: Databinder;
    };
    export class RImageEditor extends Editor {
        _textbox: Textbox;
        _button: Button;
        dialog: RImageChooser;
        /**
         * Checkbox Editor for boolean values
         * used by PropertyEditor
         * @class jassijs.ui.PropertyEditors.BooleanEditor
         */
        constructor(property: any, propertyEditor: any);
        /**
         * @member {object} ob - the object which is edited
         */
        set ob(ob: any);
        get ob(): any;
        /**
       * get the renderer for the PropertyEditor
       * @returns - the UI-component for the editor
       */
        getComponent(): any;
        /**
        * intern the value changes
        * @param {type} param
        */
        _onchange(param?: any): void;
        showDialog(onlytest?: any): Promise<void>;
    }
    export class RImageChooser extends Panel {
        me: Me;
        value: string;
        _items: {
            name: string;
            data: string;
        }[];
        constructor();
        set items(val: {});
        get items(): {};
        onpictureselected(func: any): void;
        layout(me: Me): void;
    }
    export function test(): Promise<RImageChooser>;
}
declare module "jassijs_report/test/ServerReport" {
    import { Report } from "jassijs_report/Report";
    export class ServerReport extends Report {
        sort?: string;
    }
    export function test(): Promise<void>;
}
declare module "jassijs_report/ReportViewer" {
    import { BoxPanel } from "jassijs/ui/BoxPanel";
    import { Panel } from "jassijs/ui/Panel";
    import { PDFViewer } from "jassijs_report/PDFViewer";
    import { Report } from "jassijs_report/Report";
    import { PropertyEditor } from "jassijs/ui/PropertyEditor";
    type Me = {
        boxpanel?: BoxPanel;
        pdfviewer?: PDFViewer;
        propertyeditor?: PropertyEditor;
    };
    export class ReportViewer extends Panel {
        me: Me;
        param: any;
        _value: Report;
        constructor();
        set value(val: Report);
        layout(me: Me): void;
    }
    export function test(): Promise<ReportViewer>;
}
declare module "jassijs_report/Report" {
    import { RemoteObject } from "jassijs/remote/RemoteObject";
    export class ReportProperties {
        /**
         * full path to classifiy the UIComponent e.g common/TopComponent
         */
        name: string;
        icon?: string;
        serverReportPath?: string;
        actionname?: string;
    }
    export function $Report(properties: ReportProperties): Function;
    export class Report extends RemoteObject {
        fill(): Promise<any>;
        getParameter(): {};
        getBase64(): Promise<any>;
        getName(): string;
        private _base64ToArrayBuffer;
        open(): Promise<void>;
        view(): Promise<void>;
        private static createFunction;
        /**
        * create Action for all DBObjectView with actionname is defined
        */
        private static createActions;
    }
    export function test(): Promise<void>;
}
declare var reportdesign: JassijsReportDefinition;
declare module "jassijs_report/Reports" {
    import { ContextMenu } from "jassijs/ui/ContextMenu";
    import { Table } from "jassijs/ui/Table";
    import { Panel } from "jassijs/ui/Panel";
    type Me = {
        table?: Table;
        contextmenu?: ContextMenu;
    };
    export class Reports extends Panel {
        me: Me;
        constructor();
        layout(me: Me): void;
        setData(): Promise<void>;
        static show(): Promise<void>;
    }
    export function test(): Promise<Reports>;
}
declare module "jassijs_report/designer/SimpleReportDesigner" {
    import { ReportDesigner } from "jassijs_report/designer/ReportDesigner";
    export class SimpleReportDesigner extends ReportDesigner {
        codePrefix: string;
        constructor(layout: any);
        oncodechanged(evt: any): void;
        propertyChanged(): void;
    }
    export function test(): void;
}
declare module "jassijs_report/SimpleReportEditor" {
    import { AcePanelSimple } from "jassijs_editor/AcePanelSimple";
    import { ReportDesign } from "jassijs_report/ReportDesign";
    import { Panel, PanelCreateProperties } from "jassijs/ui/Panel";
    import { ReportDesigner } from "jassijs_report/designer/ReportDesigner";
    import { DockingContainer } from "jassijs/ui/DockingContainer";
    import { CodePanel } from "jassijs_editor/CodePanel";
    import { VariablePanel } from "jassijs/ui/VariablePanel";
    class SimpleCodeEditor extends Panel {
        _main: DockingContainer;
        _codeView: Panel;
        _codeToolbar: Panel;
        _codePanel: CodePanel;
        _file: string;
        variables: VariablePanel;
        _design: Panel;
        editMode: boolean;
        __evalToCursorReached: boolean;
        private _line;
        constructor(codePanel: CodePanel);
        private _initCodePanel;
        private _init;
        _installView(): void;
        private _save;
        /**
        * save the code to server
        */
        save(): void;
        /**
         * goto to the declariation on cursor
         */
        gotoDeclaration(): Promise<void>;
        /**
         * search text in classes at the given text
         * @param {string} text - the text to search
         * @returns {jassijs_editor.CodeEditor} - the editor instance
         */
        static search(text: any): Promise<any>;
        /**
         * extract lines from code
         * @param {string} code - the code
         * @returns {[string]} - all lines
         */
        _codeToLines(code: any): any;
        /**
         * add variables to variabelpanel
         * @param Object<string,object> variables ["name"]=value
         */
        addVariables(variables: any): void;
        /**
         * execute the current code
         * @param {boolean} toCursor -  if true the variables were inspected on cursor position,
         *                              if false at the end of the layout() function or at the end of the code
         */
        evalCode(toCursor?: any): Promise<void>;
        /**
         * switch view
         * @member {string} view - "design" or "code"
         */
        set viewmode(view: any);
        /**
        * get all known instances for type
        * @param {type} type - the type we are interested
        * @returns {[string]}
        */
        getVariablesForType(type: any): any[];
        /**
         * gets the name of the variabel that holds the object
         * @param {object} ob - the
         */
        getVariableFromObject(ob: any): string;
        /**
         * gets the name object of the given variabel
         * @param {string} ob - the name of the variable
         */
        getObjectFromVariable(varname: any): any;
        /**
          * renames a variable in design
          * @param {string} oldName
          * @param {string} newName
          */
        renameVariable(oldName: any, newName: any): void;
        /**
         * @member {string} - the code
         */
        set value(value: string);
        get value(): string;
        setCursorPorition(position: number): void;
        /**
        * @param {object} position - the current cursor position {row= ,column=}
        */
        set cursorPosition(cursor: {
            row: number;
            column: number;
        });
        get cursorPosition(): {
            row: number;
            column: number;
        };
        /**
         * @member {string} - title of the component
         */
        get title(): string;
        /**
        * @member {string} - the url to edit
        */
        set file(value: string);
        get file(): string;
        /**
        * goes to the line number
        * @param {object} value - the line number
        */
        set line(value: number);
        get line(): number;
        /**
         * open the file
         */
        openFile(_file: any): Promise<void>;
        destroy(): void;
        /**
        * undo action
        */
        undo(): void;
    }
    export class SimpleReportEditorProperties extends PanelCreateProperties {
        startUpWithPdfView?: boolean;
        view?: "default" | "vertical" | "horizontal" | "withoutcode";
        oncodechange?: any;
    }
    export class SimpleReportEditor extends Panel {
        codeEditor: SimpleCodeEditor;
        acePanel: AcePanelSimple;
        reportPanel: ReportDesign;
        reportDesigner: ReportDesigner;
        constructor(properties?: SimpleReportEditorProperties);
        get reportDesign(): any;
        set reportDesign(design: any);
        /**
       * @member {string} - the code
       */
        set value(value: string);
        get value(): string;
    }
    export function test(): void;
}
declare module "jassijs_report/StartReporteditor" {
    export function test(): void;
}
declare module "jassijs_report/TemplateReport" {
    import { FileNode } from "jassijs/remote/FileNode";
    export class TemplateReport {
        static code: string;
        static newFile(all: FileNode[]): Promise<void>;
    }
}
declare module "jassijs_report/modul" {
    const _default_1: {
        css: {
            "jassijs_report.css": string;
        };
        require: {
            paths: {
                'pdfjs-dist/build/pdf': string;
                'pdfjs-dist/build/pdf.worker': string;
                vfs_fonts: string;
                pdfMakelib: string;
            };
            shim: {
                'pdfjs-dist/build/pdf': string[];
                vfs_fonts: string[];
            };
        };
    };
    export default _default_1;
}
declare module "jassijs_report/pdfMake-interface" {
    global {
        export interface JassijsReportDefinition extends TDocumentDefinitions {
            /**
             * the data which is filled into the report
             * e.g. reportdesign.data={name:"Hallo"}
             * could be filled in textfield  like "{name}"
             */
            data?: any | any[];
            /**
             * the parameter which are filled into the report
             * e.g. reportdesign.parameter = { date: "2021-10-10" };
             * could be filled in textfield like "{parameter.data}"
             */
            parameter?: any;
        }
    }
    export interface ContentDataTable {
        datatable: DataTable;
    }
    export interface DataTableGroup {
        header?: any[];
        expression: string;
        footer?: any[];
    }
    export interface DataTable extends Omit<Table, "body"> {
        header?: Content[];
        footer?: Content[];
        /**
         * e.g. "customer"  - the object could be used e.g. {text:"{$customer.city}"}
         */
        dataforeach: string;
        body: Content[];
        groups?: DataTableGroup[];
    }
    export interface ContentForEach extends ContentBase {
        /**
         * e.g. foreach:"comp in components"
         * repeats the element for each arrayitem in components comp could be used as pattern {comp.text}
        */
        foreach: string;
        /**
        * e.g. foreach:"comp in components" do:{text:"hallo"}
        * together with foreach - 'do' contains the element which is repeated
        */
        do: Content | Content[];
    }
    export type PageSize = PredefinedPageSize | CustomPageSize;
    export interface CustomPageSize {
        width: number;
        height: number | 'auto';
    }
    export interface Position {
        x: number;
        y: number;
    }
    export type PredefinedPageSize = '4A0' | '2A0' | 'A0' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6' | 'A7' | 'A8' | 'A9' | 'A10' | 'B0' | 'B1' | 'B2' | 'B3' | 'B4' | 'B5' | 'B6' | 'B7' | 'B8' | 'B9' | 'B10' | 'C0' | 'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6' | 'C7' | 'C8' | 'C9' | 'C10' | 'RA1' | 'RA2' | 'RA3' | 'RA4' | 'SRA1' | 'SRA2' | 'SRA3' | 'SRA4' | 'EXECUTIVE' | 'FOLIO' | 'LEGAL' | 'LETTER' | 'TABLOID';
    export type PageOrientation = 'portrait' | 'landscape';
    export type PageBreak = 'before' | 'after';
    export type Size = number | 'auto' | '*' | string;
    export interface TFontDictionary {
        [fontName: string]: TFontFamilyTypes;
    }
    export interface TFontFamilyTypes {
        normal?: undefined;
        bold?: undefined;
        italics?: undefined;
        bolditalics?: undefined;
    }
    export interface TDocumentInformation {
        /** the title of the document */
        title?: string | undefined;
        /** the name of the author */
        author?: string | undefined;
        /** the subject of the document */
        subject?: string | undefined;
        /** keywords associated with the document */
        keywords?: string | undefined;
        creator?: string | undefined;
        producer?: string | undefined;
        creationDate?: Date | undefined;
        modDate?: Date | undefined;
        trapped?: string | undefined;
    }
    export type DynamicContent = (currentPage: number, pageCount: number, pageSize: ContextPageSize) => Content | null | undefined;
    export type DynamicBackground = (currentPage: number, pageSize: ContextPageSize) => Content | null | undefined;
    export type Margins = number | [number, number] | [number, number, number, number];
    export type Decoration = 'underline' | 'lineThrough' | 'overline';
    export type DecorationStyle = 'dashed' | 'dotted' | 'double' | 'wavy';
    export type Alignment = 'left' | 'right' | 'justify' | 'center';
    export type DynamicRowSize = (row: number) => number | 'auto';
    export interface CustomTableLayout {
        hLineWidth?: DynamicLayout<number> | undefined;
        vLineWidth?: DynamicLayout<number> | undefined;
        hLineColor?: string | DynamicLayout<string> | undefined;
        vLineColor?: string | DynamicLayout<string> | undefined;
        hLineStyle?: DynamicLayout<LineStyle> | undefined;
        vLineStyle?: DynamicLayout<LineStyle> | undefined;
        fillColor?: string | DynamicLayout<string> | undefined;
        paddingLeft?: DynamicLayout<number> | undefined;
        paddingRight?: DynamicLayout<number> | undefined;
        paddingTop?: DynamicLayout<number> | undefined;
        paddingBottom?: DynamicLayout<number> | undefined;
        fillOpacity?: number | DynamicLayout<number> | undefined;
        defaultBorder?: boolean | undefined;
    }
    export type DynamicLayout<T> = (rowIndex: number, node: ContentTable, columnIndex: number) => T | null | undefined;
    export interface LineStyle {
        dash?: {
            length: number;
            space?: number | undefined;
        } | undefined;
    }
    export type TableCell = {} | (Content & {
        rowSpan?: number | undefined;
        colSpan?: number | undefined;
        border?: [boolean, boolean, boolean, boolean] | undefined;
        borderColor?: [string, string, string, string] | undefined;
        fillOpacity?: number | undefined;
    });
    export interface Table {
        body: TableCell[][] | (ContentForEach | TableCell[])[];
        widths?: '*' | 'auto' | Size[] | undefined;
        heights?: number | number[] | DynamicRowSize | undefined;
        headerRows?: number | undefined;
        dontBreakRows?: boolean | undefined;
        keepWithHeaderRows?: number | undefined;
        layout?: TableLayout | undefined;
    }
    export type PredefinedTableLayout = 'noBorders' | 'headerLineOnly' | 'lightHorizontalLines';
    export type TableLayout = string | PredefinedTableLayout | CustomTableLayout;
    export interface Style {
        /** name of the font */
        font?: string | undefined;
        /** size of the font in pt */
        fontSize?: number | undefined;
        fontFeatures?: undefined;
        /** the line height (default: 1) */
        lineHeight?: number | undefined;
        /** whether to use bold text (default: false) */
        bold?: boolean | undefined;
        /** whether to use italic text (default: false) */
        italics?: boolean | undefined;
        /** the alignment of the text */
        alignment?: Alignment | undefined;
        /** the color of the text (color name e.g., ‘blue’ or hexadecimal color e.g., ‘#ff5500’) */
        color?: string | undefined;
        /** the background color of the text */
        background?: string | undefined;
        /** the color of the bullets in a buletted list */
        markerColor?: string | undefined;
        /** the text decoration to applu (‘underline’ or ‘lineThrough’ or ‘overline’) */
        decoration?: Decoration | undefined;
        /** (‘dashed’ or ‘dotted’ or ‘double’ or ‘wavy’) */
        decorationStyle?: DecorationStyle | undefined;
        /** the color of the text decoration, see color */
        decorationColor?: string | undefined;
        margin?: Margins | undefined;
        preserveLeadingSpaces?: boolean | undefined;
        preserveTrailingSpaces?: boolean | undefined;
        opacity?: number | undefined;
        characterSpacing?: number | undefined;
        leadingIndent?: number | undefined;
        noWrap?: boolean | undefined;
        /** the background color of a table cell */
        fillColor?: string | undefined;
        /** the background opacity of a table cell */
        fillOpacity?: number | undefined;
        /** optional space between columns */
        columnGap?: Size | undefined;
        sup?: boolean | undefined;
        sub?: boolean | undefined;
    }
    export type Content = string | ArrayOfContent | ContentText | ContentColumns | ContentStack | ContentUnorderedList | ContentOrderedList | ContentTable | ContentAnchor | ContentPageReference | ContentTextReference | ContentToc | ContentTocItem | ContentImage | ContentSvg | ContentQr | ContentDataTable | ContentForEach | ContentCanvas;
    interface ArrayOfContent extends Array<Content> {
    }
    export interface ContentText extends ContentLink, ContentBase {
        text: Content;
        editTogether?: boolean;
    }
    export interface ContentColumns extends ContentBase {
        columns: Column[];
    }
    export interface ContentStack extends ContentBase {
        /** if true, ensures that the contents of the stack are always on the same page */
        unbreakable?: boolean | undefined;
        stack: Content[];
    }
    /** for numbered lists set the ol key */
    export interface ContentOrderedList extends ContentBase {
        ol: OrderedListElement[];
        type?: OrderedListType | undefined;
        markerColor?: string | undefined;
        separator?: string | [string, string] | undefined;
        reversed?: boolean | undefined;
        start?: number | undefined;
    }
    /** to treat a paragraph as a bulleted list, set an array of items under the ul key */
    export interface ContentUnorderedList extends ContentBase {
        ul: UnorderedListElement[];
        type?: UnorderedListType | undefined;
        markerColor?: string | undefined;
    }
    export interface ContentCanvas extends ContentBase {
        canvas: CanvasElement[];
    }
    export interface ContentSvg extends ContentBase {
        svg: string;
        width?: number | undefined;
        height?: number | undefined;
        fit?: [number, number] | undefined;
    }
    export interface ContentImage extends ContentLink, ContentBase {
        image: string;
        width?: number | undefined;
        height?: number | undefined;
        fit?: [number, number] | undefined;
        cover?: ImageCover | undefined;
    }
    export interface ContentTable extends ContentBase {
        table: Table;
        layout?: TableLayout | undefined;
    }
    export interface ContentAnchor extends ContentBase {
        text: string | ContentAnchor;
        id: string;
    }
    export interface ContentTocItem extends ContentBase {
        text: string | ContentTocItem;
        tocItem: boolean | string | string[];
        tocStyle?: string | string[] | Style | undefined;
        tocNumberStyle?: string | string[] | Style | undefined;
        tocMargin?: Margins | undefined;
    }
    export interface ContentPageReference extends ContentBase {
        pageReference: string;
    }
    export interface ContentTextReference extends ContentBase {
        textReference: string;
    }
    export interface ContentToc extends ContentBase {
        toc: TableOfContent;
    }
    export interface ContentQr extends ContentBase {
        qr: string;
        foreground?: string | undefined;
        fit?: number | undefined;
        version?: number | undefined;
        eccLevel?: 'L' | 'M' | 'Q' | 'H' | undefined;
        mode?: 'numeric' | 'alphanumeric' | 'octet' | undefined;
        mask?: number | undefined;
    }
    export interface ContentBase extends Style {
        /**
         * e.g. foreach:"comp in components"
         * repeats the element for each arrayitem in components comp could be used as pattern {comp.text}
        */
        foreach?: string;
        /**
         * format a given date or value
         * e.g. "$#,###.00" or "$#,###.00"
         */
        format?: string;
        style?: string | string[] | Style | undefined;
        absolutePosition?: Position | undefined;
        relativePosition?: Position | undefined;
        pageBreak?: PageBreak | undefined;
        pageOrientation?: PageOrientation | undefined;
        headlineLevel?: number | undefined;
    }
    export interface ContentLink {
        link?: string | undefined;
        linkToPage?: number | undefined;
        linkToDestination?: string | undefined;
    }
    export interface TableOfContent {
        title?: Content | undefined;
        textMargin?: Margins | undefined;
        textStyle?: string | string[] | Style | undefined;
        numberStyle?: string | string[] | Style | undefined;
        id?: string | undefined;
    }
    export type Column = Content & {
        width?: Size | undefined;
    };
    export type OrderedListType = 'lower-alpha' | 'upper-alpha' | 'lower-roman' | 'upper-roman' | 'none';
    export type OrderedListElement = Content & {
        counter?: number | undefined;
        listType?: OrderedListType | undefined;
    };
    export type UnorderedListType = 'square' | 'circle' | 'none';
    export type UnorderedListElement = Content & {
        listType?: UnorderedListType | undefined;
    };
    export type CanvasElement = CanvasRect | CanvasPolyline | CanvasLine | CanvasEllipse;
    export interface CanvasRect extends CanvasLineElement, CanvasFilledElement {
        type: 'rect';
        x: number;
        y: number;
        w: number;
        h: number;
        r?: number | undefined;
    }
    export interface CanvasPolyline extends CanvasLineElement, CanvasFilledElement {
        type: 'polyline';
        points: Array<{
            x: number;
            y: number;
        }>;
        closePath?: boolean | undefined;
        lineCap?: 'round' | 'square' | undefined;
    }
    export interface CanvasLine extends CanvasLineElement {
        type: 'line';
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        lineCap?: 'round' | 'square' | undefined;
    }
    export interface CanvasEllipse extends CanvasLineElement, CanvasFilledElement {
        type: 'ellipse';
        x: number;
        y: number;
        r1: number;
        r2?: number | undefined;
    }
    export interface CanvasFilledElement {
        color?: string | undefined;
        fillOpacity?: number | undefined;
        linearGradient?: string[] | undefined;
    }
    export interface CanvasLineElement {
        lineWidth?: number | undefined;
        lineColor?: string | undefined;
        dash?: {
            length: number;
            space?: number | undefined;
        } | undefined;
    }
    export type ImageAlignment = 'left' | 'right' | 'center';
    export type ImageVerticalAlignment = 'top' | 'bottom' | 'center';
    export interface ImageCover {
        width?: number | undefined;
        height?: number | undefined;
        align?: ImageAlignment | undefined;
        valign?: ImageVerticalAlignment | undefined;
    }
    export interface StyleDictionary {
        [name: string]: Style;
    }
    export type PDFVersion = '1.3' | '1.4' | '1.5' | '1.6' | '1.7' | '1.7ext3';
    export interface Watermark {
        /** watermark text */
        text: string;
        /** opacity of text */
        opacity?: number | undefined;
        /** angle of text rotation (minimal version: 0.1.60) */
        angle?: number | undefined;
        font?: string | undefined;
        /** own font size of text (ideal size is calculated automatically) (minimal version: 0.1.60) */
        fontSize?: number | undefined;
        /** color of text */
        color?: string | undefined;
        /** bold style of text */
        bold?: boolean | undefined;
        /** italics style of text */
        italics?: boolean | undefined;
    }
    export interface TDocumentDefinitions {
        content: Content;
        background?: DynamicBackground | Content | undefined;
        compress?: boolean | undefined;
        defaultStyle?: Style | undefined;
        footer?: DynamicContent | Content | undefined;
        header?: DynamicContent | Content | undefined;
        images?: {
            [key: string]: string;
        } | undefined;
        info?: TDocumentInformation | undefined;
        pageBreakBefore?: ((currentNode: Node, followingNodesOnPage: Node[], nodesOnNextPage: Node[], previousNodesOnPage: Node[]) => boolean) | undefined;
        pageMargins?: Margins | undefined;
        pageOrientation?: PageOrientation | undefined;
        pageSize?: PageSize | undefined;
        styles?: StyleDictionary | undefined;
        userPassword?: string | undefined;
        ownerPassword?: string | undefined;
        permissions?: undefined;
        version?: PDFVersion | undefined;
        watermark?: string | Watermark | undefined;
    }
    export interface Node {
        text?: Content | undefined;
        ul?: UnorderedListElement[] | undefined;
        ol?: OrderedListElement[] | undefined;
        table?: Table | undefined;
        image?: string | undefined;
        qr?: string | undefined;
        canvas?: CanvasElement | undefined;
        svg?: string | undefined;
        columns?: Column[] | undefined;
        id?: string | undefined;
        headlineLevel?: number | undefined;
        style?: string | string[] | Style | undefined;
        pageBreak?: PageBreak | undefined;
        pageOrientation?: PageOrientation | undefined;
        pageNumbers: number[];
        pages: number;
        stack: boolean;
        startPosition: {
            pageNumber: number;
            pageOrientation: PageOrientation;
            pageInnerHeight: number;
            pageInnerWidth: number;
            left: number;
            top: number;
            verticalRatio: number;
            horizontalRatio: number;
        };
    }
    export interface ContextPageSize {
        height: number;
        width: number;
        orientation: PageOrientation;
    }
    export interface BufferOptions {
        fontLayoutCache?: boolean | undefined;
        bufferPages?: boolean | undefined;
        tableLayouts?: {
            [key: string]: CustomTableLayout;
        } | undefined;
        autoPrint?: boolean | undefined;
        progressCallback?: ((progress: number) => void) | undefined;
    }
    export {};
}
declare module "jassijs_report/remote/RComponent" {
    import { UIComponentProperties } from "jassijs/ui/Component";
    import { Panel } from "jassijs/ui/Panel";
    import { ReportDesign } from "jassijs_report/ReportDesign";
    export class ReportComponentProperties extends UIComponentProperties {
    }
    export function $ReportComponent(properties: ReportComponentProperties): Function;
    export class RComponent extends Panel {
        private _colSpan;
        private _rowSpan;
        foreach: string;
        private _width;
        private _height;
        private _bold;
        private _decoration;
        private _decorationStyle;
        private _decorationColor;
        private _color;
        private _fontSize;
        private _lineHeight;
        private _italics;
        private _alignment;
        private _background;
        private _font;
        private _style;
        private _fillColor;
        private _border;
        private _counter;
        private _listType;
        private _margin;
        reporttype: string;
        otherProperties: any;
        constructor(properties?: any);
        onstylechanged(func: any): void;
        set counter(value: number);
        get counter(): number;
        set listType(value: string);
        get listType(): string;
        get fillColor(): string;
        set fillColor(value: string);
        get colSpan(): number;
        set colSpan(value: number);
        get rowSpan(): number;
        set rowSpan(value: number);
        get border(): boolean[];
        set border(value: boolean[]);
        get width(): any;
        set width(value: any);
        get height(): any;
        set height(value: any);
        get bold(): boolean;
        set bold(value: boolean);
        get italics(): boolean;
        set italics(value: boolean);
        get font(): string;
        set font(value: string);
        get fontSize(): number;
        set fontSize(value: number);
        get background(): string;
        set background(value: string);
        get color(): string;
        set color(value: string);
        get alignment(): string;
        set alignment(value: string);
        get decoration(): string;
        set decoration(value: string);
        get decorationColor(): string;
        set decorationColor(value: string);
        get decorationStyle(): string;
        set decorationStyle(value: string);
        static findReport(parent: any): ReportDesign;
        get style(): string;
        set style(value: string);
        get lineHeight(): number;
        set lineHeight(value: number);
        get margin(): number[];
        set margin(value: number[]);
        fromJSON(ob: any): RComponent;
        toJSON(): any;
    }
}
declare module "jassijs_report/test/ClientReport" {
    import { Report } from "jassijs_report/Report";
    export class ClientReport extends Report {
        sort?: string;
        fill(): Promise<{
            reportdesign: JassijsReportDefinition;
            data: {
                name: string;
                lastname: string;
            }[];
        }>;
    }
    export function test(): Promise<void>;
}
