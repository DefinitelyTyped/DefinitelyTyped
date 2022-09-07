// Type definitions for Backgrid 0.2
// Project: http://backgridjs.com/
// Definitions by: Jeremy Lujan <https://github.com/jlujan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as Backbone from 'backbone';

export as namespace Backgrid;
export = Backgrid;

declare namespace Backgrid {

    interface GridOptions {
        columns: Column[];
        collection: Backbone.Collection<Backbone.Model>;
        header?: Header | undefined;
        body?: Body | undefined;
        row?: Row | undefined;
        footer?: Footer | undefined;
    }

    class Header extends Backbone.View<Backbone.Model> {
    }

    class Footer extends Backbone.View<Backbone.Model> {
    }

    class Row extends Backbone.View<Backbone.Model> {
    }

    class Command {
        moveUp(): boolean;
        moveDown(): boolean;
        moveLeft(): boolean;
        moveRight(): boolean;
        save(): boolean;
        cancel(): boolean;
        passThru(): boolean;
    }

    class CellFormatter {
        fromRaw(rawData: any, model: Backbone.Model): any;
        toRaw(formattedData: any, model: Backbone.Model): any;
    }

    class NumberFormatter extends CellFormatter {}

    class PercentFormatter extends NumberFormatter {}

    class DateTimeFormatter extends CellFormatter {}

    class StringFormatter extends CellFormatter {}

    class EmailFormatter extends CellFormatter {}

    class SelectFormatter extends CellFormatter {}

    class CellEditor extends Backbone.View<Backbone.Model>{
        initialize(options?: any): void;
        postRender(model: Backbone.Model, column: Backbone.Model): this;
    }

    class InputCellEditor extends CellEditor {
        render(): this;
        saveOrCancel(event: any): void;
    }

    class Cell extends Backbone.View<Backbone.Model>{
        tagName: string;
        formatter: CellFormatter;
        editor: InputCellEditor;
        enterEditMode(): void;
        renderError(): void;
        exitEditMode(): void;
        remove(): this;
    }

    class StringCell extends Cell {
    }

    interface ColumnAttr {
        name: string;
        cell: string;
        headerCell: string;
        label: string;
        sortable: boolean;
        editable: boolean;
        renderable: boolean;
        formater: string;
    }

    class Column extends Backbone.Model {
        initialize(options?: any): void;
    }

    class Body extends Backbone.View<Backbone.Model> {
        tagName: string;

        initialize(options?: any): void;
        insertRow(model: Backbone.Model, collection: Backbone.Collection<Backbone.Model>, options: any): this | undefined;
        moveToNextCell(model: Backbone.Model, cell: Column, command: Command): this;
        refresh(): this;
        remove(): this;
        removeRow(model: Backbone.Model, collection: Backbone.Collection<Backbone.Model>, options: any): this | undefined;
        render(): this;
    }

    class Grid extends Backbone.View<Backbone.Model> {
        body: Backgrid.Body;
        className: string;
        footer: any;
        header: any;
        tagName: string;

        constructor(options: GridOptions);

        initialize(options: any): void;
        getSelectedModels(): Backbone.Model[];
        insertColumn(...options: any[]): this;
        insertRow(model: Backbone.Model, collection: Backbone.Collection<Backbone.Model>, options: any): this;
        remove(): this;
        removeColumn(...options: any[]): this;
        removeRow(model: Backbone.Model, collection: Backbone.Collection<Backbone.Model>, options: any): this;
        render(): this;
    }

}
