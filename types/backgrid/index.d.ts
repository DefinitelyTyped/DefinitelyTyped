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
        header?: Header;
        body?: Body;
        row?: Row;
        footer?: Footer;
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
        fromRaw(rawData: any, model: Backbone.Model);
        toRaw(formattedData: any, model: Backbone.Model);
    }

    class NumberFormatter extends CellFormatter {}

    class PercentFormatter extends NumberFormatter {}

    class DateTimeFormatter extends CellFormatter {}

    class StringFormatter extends CellFormatter {}

    class EmailFormatter extends CellFormatter {}

    class SelectFormatter extends CellFormatter {}

    class CellEditor extends Backbone.View<Backbone.Model>{
        initialize(options?: any);
        postRender(model: Backbone.Model, column: Backbone.Model);
    }

    class InputCellEditor extends CellEditor {
        render();
        saveOrCancel(event: any);
    }

    class Cell extends Backbone.View<Backbone.Model>{
        tagName: string;
        formatter: CellFormatter;
        editor: InputCellEditor;
        enterEditMode();
        renderError();
        exitEditMode();
        remove();
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
        initialize(options?: any);
    }

    class Body extends Backbone.View<Backbone.Model> {
        tagName: string;

        initialize(options?: any);
        insertRow(model: Backbone.Model, collection: Backbone.Collection<Backbone.Model>, options: any);
        moveToNextCell(model: Backbone.Model, cell: Column, command: Command);
        refresh(): Body;
        remove(): Body;
        removeRow(model: Backbone.Model, collection: Backbone.Collection<Backbone.Model>, options: any);
        render(): Body;
    }

    class Grid extends Backbone.View<Backbone.Model> {
        body: Backgrid.Body;
        className: string;
        footer: any;
        header: any;
        tagName: string;

        constructor(options: GridOptions);

        initialize(options: any);
        getSelectedModels(): Backbone.Model[];
        insertColumn(...options: any[]): Grid;
        insertRow(model: Backbone.Model, collection: Backbone.Collection<Backbone.Model>, options: any);
        remove(): Grid;
        removeColumn(...options: any[]): Grid;
        removeRow(model: Backbone.Model, collection: Backbone.Collection<Backbone.Model>, options: any);
        render(): Grid;
    }

}
