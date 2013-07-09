// Type definitions for Backgrid 0.2.6
// Project: http://backgridjs.com/
// Definitions by: Jeremy Lujan <https://github.com/jlujan/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../backbone/backbone.d.ts" />

declare module Backgrid {

    interface GridOptions {
	columns: Column[];
	collection: Backbone.Collection;
	header: Header;
	body: Body;
	row: Row;
	footer: Footer;
    }

    class Header extends Backbone.View {
    }

    class Footer extends Backbone.View {
    }
    
    class Row extends Backbone.View {
    }

    class Command {
	cancel();
	moveDown();
	moveLeft();
	moveRight();
	moveUp();
	passThru();
	save();
    }

    interface ColumnAttr {
	name: string;
	cell: string;
	headerCell: string;
	label: string;
	sortable: bool;
	editable: bool;
	renderable: bool;
	formater: string;
    }

    class Column extends Backbone.Model {
	initialize(options?: any);
    }

    class Body extends Backbone.View {
	tagName: string;

	initialize(options?: any);
	insertRow(model: Backbone.Model, collection: Backbone.Collection, options: any);
	moveToNextCell(model: Backbone.Model, cell: Column, command: Command);
	refresh(): Body;
	remove(): Body;
	removeRow(model: Backbone.Model, collection: Backbone.Collection, options: any);
	render(): Body;
    }

    class Grid extends Backbone.View {
	body: Backgrid.Body;
	className: string;
	footer: any;
	header: any;
	tagName: string;

	initialize(options: any);
	getSelectedModels(): Backbone.Model[];
	insertColumn(...options: any[]): Grid;
	insertRow(model: Backbone.Model, collection: Backbone.Collection, options: any);
	remove():Grid;
	removeColumn(...options: any[]): Grid;
	removeRow(model: Backbone.Model, collection: Backbone.Collection, options: any);
	render():Grid;
    }

    

}

