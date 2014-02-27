// Type definitions for jQuery.gridster 0.1.0
// Project: https://github.com/jbaldwin/gridster
// Definitions by: Josh Baldwin <https://github.com/jbaldwin>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/*
gridster-0.1.0.d.ts may be freely distributed under the MIT license.

Copyright (c) 2013 Josh Baldwin https://github.com/jbaldwin/gridster.d.ts

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation 
files (the "Software"), to deal in the Software without 
restriction, including without limitation the rights to use, 
copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the 
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be 
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR 
OTHER DEALINGS IN THE SOFTWARE.
*/

/// <reference path="../jquery/jquery.d.ts"/>

interface GridsterDraggable {
	items: any;
	distance: number;
	limit: boolean;
	offset_left: number;
	drag: (event: Event, ui: GridsterUi) => void;
	start: (event: Event, ui: { helper: JQuery; }) => void;
	stop: (event: Event, ui: { helper: JQuery; }) => void;
}

interface GridsterUi {
	position: {
		left: number;
		top: number;
	};
}

interface GridsterCollision {
	on_overlap_start: (data: GridsterCollisionData) => void;
	on_overlap_stop: (data: GridsterCollisionData) => void;
	on_overlap: (data: GridsterCollisionData) => void;
}

interface GridsterCollisionData {
	area: number;
	area_coords: GridsterCoords;
	region: string;
	coords: GridsterCoords;
	player_coords: GridsterCoords;
	el: HTMLElement;
}

interface GridsterCoords {
	col: number;
	row: number;
	size_x: number;
	size_y: number;
}

interface GridsterOptions {

	/**
	* Define who will be the draggable widgets.  Can be a CSS Selector String or a collection of HTMLElements.
	* Type => string css selector
	* Type => HTMLElement[]
	* Default = 'li'
	**/
	widget_selector?: any;

	/**
	* Margin between widgets.  The first index for the horizontal margin (left, right) and the second for the vertical margin (top, bottom).
	* Default = [10, 10]
	**/
	widget_margins?: number[];

	/**
	* Base widget dimensions in pixels.  The first index for the width and the second for the height.
	* Default = [400, 225]
	**/
	widget_base_dimensions?: number[];

	/**
	* Add more columns in addition to those that have been calculated.
	* Default = 0
	**/
	extra_cols?: number;

	/**
	* Add more rows in addition to those that have been calculated.
	* Default = 0
	**/
	extra_rows?: number;

	/**
	* The minimum required columns.
	* Default = 1
	**/
	min_cols?: number;

	/**
	* The maximum columns possible (set to null for no maximum).
	* Default = null
	**/
	max_cols?: number;

	/**
	* The minimum required rows.
	* Default = 15
	**/
	min_rows?: number;

	/**
	* The maximum number of columns that a widget can span.
	* Default = 6
	**/
	max_size_x?: number;

	/**
	* If true, all the CSS required to  osition  	l widgets in their respective col umns and rows will be generated automatically and injectedt the<head> of thed cument.You can set this to false, and write your own CSS targeting rows and cols via data - attributes like so: [data - col = "1"] { left: 10px; }
	* Default = true
	**/
	autogenerate_sytesheet?: boolean;

	/**
	* Avoid that widgets loaded from the DOM can be overlapped.  It is helpful if the positions were bad stored in the database or if there was any conflict.
	* Default = true
	**/
	avoid_overlapped_widgets?: boolean;

	/**
	* Return the data you want for each widget in the serialization.
	**/
	serialize_params?: ($w: JQuery, wgd: GridsterCoords) => any;

	/**
	* An object with all options for Collision class you want to overwrite.  @see GridsterCollision or docs for more info.
	**/
	collision?: GridsterCollision;

	/**
	* An object with all options for Draggable class you want to overwrite.  @see GridsterDraggable or docs for more info.
	**/
	draggable?: GridsterDraggable;
}

interface JQuery {

	/**
	* Gridster
	* @param el The HTMLElement that contains all the widgets.
	* @param options An object with all the gridster options you want to overwrite.
	* @return Gridster jQuery instance.
	**/
	gridster(el: HTMLElement, options?: GridsterOptions): JQuery;
}

interface Gridster {

	/**
	* Create a new widget with the given html and add it to the grid.
	* @param html The string representing the HTML of the widget or the HTMLElement.
	* @param size_x The number of rows the widget occupies horizontally.  Defaults to 1.
	* @param size_y The number of columns the widget occupies vertically.  Defaults to 1.
	* @param col The column the widget should start in.
	* @param row The row the widget should start in.
	* @return Returns the jQuery wrapped HTMLElement representing the widget that was just created.
	**/
	add_widget(html: string, size_x?: number, size_y?: number, col?: number, row?: number): JQuery;

	/**
	* @see add_widget
	**/
	add_widget(html: HTMLElement, size_x?: number, size_y?: number, col?: number, row?: number): JQuery;

	/**
	* Change the size of a widget.
	* @param $widget The jQuery wrapped HTMLElement that represents the widget is going to be resized.
	* @param size_x The number of rows that the widget is going to span.  Defaults to current size_x.
	* @param size_y The number of columns that the widget is going to span.  Defaults to current size_y.
	* @param callback Callback function wehn the widget is finished resizing.
	* @return Returns $widget.
	**/
	resize_widget($widget: JQuery, size_x?: number, size_y?: number, callback?: (size_x: number, size_y: number) => void): JQuery;

	/**
	* Remove a widget from the grid.
	* @param el The jQuery wrapped HTMLElement you want to remove.
	* @param silent Boolean If true widgets below the removed one will not move up.
	* @param callback Callback function executed when the widget is removed.
	* @return Returns the instance of the Gridster class.
	**/
	remove_widget(el: HTMLElement, silent?: boolean, callback?: (el: HTMLElement) => void): Gridster;

	/**
	* @see remove_widget
	**/
	remove_widget(el: HTMLElement, callback: (el: HTMLElement) => void): Gridster;

	/**
	* Returns a serialized array of the widgets in the grid.
	* @param $widgets The collection of jQuery wrap ed HTMLElements you want to serialize.  If no argument is passed a l widgets will be serialized.
	* @return Returns an array of objects with the data specified in the serialized_params option.
	**/
	serialize<T>($widgets?: HTMLElement[]): T[];

	/**
	* Returns a serialized array of the widgets that have changed their position.
	* @return Returns an array of objects with the data specified in the serialized_params option.
	**/
	serialize_changed<T>(): T[];

	/**
	* Enables dragging.
	* @return Returns the instance of the Gridster class.
	**/
	enable(): Gridster;
	
	/**
	* Disables dragging.
	* @return Returns the instance of the Gridster class.
	**/
	disable(): Gridster;
}
