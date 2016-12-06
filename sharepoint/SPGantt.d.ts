// Type definitions for SharePoint JSOM 
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="SP.JSGrid.d.ts"/>

declare namespace SP {
    export class GanttControl {
        static WaitForGanttCreation(callack: (control: GanttControl) => void): void;
        static Instances: GanttControl[];
        static FnGanttCreationCallback: { (control: GanttControl): void }[];

        get_Columns(): SP.JsGrid.ColumnInfo[];
    }
}