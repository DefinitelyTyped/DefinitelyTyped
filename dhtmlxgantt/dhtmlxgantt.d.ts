// Type definitions for dhtmlxGantt 2.0
// Project: http://dhtmlx.com/docs/products/dhtmlxGantt
// Definitions by: Maksim Kozhukh <http://github.com/mkozhukh>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface GanttTemplates{
	/**
	 * specifies the format of dates that are set by means of API methods. Used to parse incoming dates
	 * @param date the date which needs formatting
	*/
	api_date(date: Date): string;

	/**
	 * specifies the format of dates in the "Start time" column
	 * @param date the date which needs formatting
	*/
	date_grid(date: Date): string;

	/**
	 * specifies the date format of the time scale (X-Axis)
	 * @param date the date which needs formatting
	*/
	date_scale(date: Date): string;

	/**
	 * specifies the text of tooltips that are displayed when the user creates a new dependency link
	 * @param from the id of the source task
	 * @param from_start <i>true</i>, if the link is being dragged from the start of the  source task, <i>false</i> - if <br> from the end of the task
	 * @param to the id of the target task( 'null' or 'undefined', if the target task isn't specified yet)
	 * @param to_start <i>true</i>, if the link is being dragged to the start of the target task, <i>false</i> - if <br> to the end of the task
	*/
	drag_link(from: any, from_start: boolean, to: any, to_start: boolean): string;

	/**
	 * specifies the CSS class that will be applied to the link receiver (pop-up circle near the task bar)
	 * @param from the id of the source task
	 * @param from_start <i>true</i>, if the link is being dragged from the start of the  source task, <i>false</i> - if <br> from the end of the task
	 * @param to the id of the target task( 'null' or 'undefined', if the target task isn't specified yet)
	 * @param to_start <i>true</i>, if the link is being dragged to the start of the target task, <i>false</i> - if <br> to the end of the task
	*/
	drag_link_class(from: any, from_start: boolean, to: any, to_start: boolean): string;

	/**
	 * specifies the custom content inserted before the labels of child items in the tree column
	 * @param task the task object
	*/
	grid_blank(task: any): string;

	/**
	 * specifies the icon of child items in the tree column
	 * @param task the task object
	*/
	grid_file(task: any): string;

	/**
	 * specifies the icon of parent items in the tree column
	 * @param task the task object
	*/
	grid_folder(task: any): string;

	/**
	 * specifies the CSS class that will be applied to the headers of the table's columns
	 * @param column the column's configuration object
	 * @param config the column's id ('name' attribute)
	*/
	grid_header_class(column: any, config: string): string;

	/**
	 * specifies the indent  of the child items in a branch (in the tree column)
	 * @param task the task object
	*/
	grid_indent(task: any): string;

	/**
	 * specifies the icon of the open/close sign in the tree column
	 * @param task the task object
	*/
	grid_open(task: any): string;

	/**
	 * specifies the CSS class that will be applied to a grid row
	 * @param start the date when a task is scheduled to begin
	 * @param end the date when a task is scheduled to be completed
	 * @param task the task object
	*/
	grid_row_class(start: Date, end: Date, task: any): string;

	/**
	 * specifies the CSS class that will be applied to a link
	 * @param link the link object
	*/
	link_class(link: any): string;

	/**
	 * specifies the text in the header of the link's "delete" confirm window
	 * @param link the link object
	*/
	link_description(link: any): string;

	/**
	 * specifies the text in the completed part of the task bar
	 * @param start the date when a task is scheduled to begin
	 * @param end the date when a task is scheduled to be completed
	 * @param task the task object
	*/
	progress_text(start: Date, end: Date, task: any): string;

	/**
	 * specifies the content of the pop-up edit form
	 * @param start the date when a task is scheduled to begin
	 * @param end the date when a task is scheduled to be completed
	 * @param task the task object
	*/
	quick_info_content(start: Date, end: Date, task: any): string;

	/**
	 * specifies the date of the pop-up edit form
	 * @param start the date when a task is scheduled to begin
	 * @param end the date when  a task is scheduled to be completed
	 * @param task the task object
	*/
	quick_info_date(start: Date, end: Date, task: any): string;

	/**
	 * specifies the title of the pop-up edit form
	 * @param start the date when a task is scheduled to begin
	 * @param end the date when a task is scheduled to be completed
	 * @param task the task object
	*/
	quick_info_title(start: Date, end: Date, task: any): string;

	/**
	 * specifies the CSS class that will be applied to the time scale of the timeline area
	 * @param date the date of a cell
	*/
	scale_cell_class(date: Date): string;

	/**
	 * specifies the CSS class that will be applied to the cells of the timeline area
	 * @param item the task object assigned to the row
	 * @param date the date of a cell
	*/
	task_cell_class(item: Date, date: Date): string;

	/**
	 * specifies the CSS class that will be applied to task bars
	 * @param start the date when a task is scheduled to begin
	 * @param end the date when a task is scheduled to be completed
	 * @param task the task object
	*/
	task_class(start: Date, end: Date, task: any): string;

	/**
	 * specifies the date format of the label in the 'Time period' section of the lightbox
	 * @param date the date which needs formatting
	*/
	task_date(date: Date): string;

	/**
	 * specifies the CSS class that will be applied to the row of the timeline area
	 * @param start the date when a task is scheduled to begin
	 * @param end the date when a task is scheduled to be completed
	 * @param task the task object
	*/
	task_row_class(start: Date, end: Date, task: any): string;

	/**
	 * specifies the text in the task bars and the header of the lightbox
	 * @param start the date when a task is scheduled to begin
	 * @param end the date when a task is scheduled to be completed
	 * @param task the task object
	*/
	task_text(start: Date, end: Date, task: any): string;

	/**
	 * specifies the date period in the header of the lightbox
	 * @param start the date when a task is scheduled to begin
	 * @param end the date when a task is scheduled to be completed
	 * @param task the task object
	*/
	task_time(start: Date, end: Date, task: any): string;

	/**
	 * specifies the format of the drop-down time selector in the lightbox
	 * @param date the date which needs formatting
	*/
	time_picker(date: Date): string;

	/**
	 * specifies the format of start and end dates displayed in the tooltip
	 * @param date the date which needs formatting
	*/
	tooltip_date_format(date: Date): string;

	/**
	 * specifies the text of tooltips
	 * @param start the date when a task is scheduled to begin
	 * @param end the date when a task is scheduled to be completed
	 * @param task the task object
	*/
	tooltip_text(start: Date, end: Date, task: any): string;

	/**
	 * a string from an XML file is converted into a date object in conformity with this template
	 * @param date the date which needs formatting
	*/
	xml_date(date: Date): string;

	/**
	 * a date object is converted into a string in conformity with this template. Used to send data back to the server
	 * @param date the date which needs formatting
	*/
	xml_format(date: Date): string;

	/**
	 * specifies the text assigned to tasks bars on the right side
	 * @param start the date when a task is scheduled to begin
	 * @param end the date when a task is scheduled to be completed
	 * @param task the task object
	*/
	rightside_text(start: Date, end: Date, task: any): string;

	/**
	 * specifies the text assigned to tasks bars on the left side
	 * @param start the date when a task is scheduled to begin
	 * @param end the date when a task is scheduled to be completed
	 * @param task the task object
	*/
	leftside_text(start: Date, end: Date, task: any): string;	
}

interface GanttConfigOptions{
	/**
	 * sets the date format that will be used by the addTask() method to 
parse the start_date, end_date properties in case they are specified as strings
	*/
	api_date: string;

	/**
	 * enables automatic adjusting of the grid's columns to the grid's width
	*/
	autofit: boolean;

	/**
	 * stores a collection of buttons resided in the left bottom corner of the lightbox
	*/
	buttons_left: any;

	/**
	 * stores a collection of buttons resided in the right bottom corner of the lightbox
	*/
	buttons_right: any;

	/**
	 * configures the columns of the table
	*/
	columns: any;

	/**
	 * sets the format of dates in the "Start time" column of the table
	*/
	date_grid: string;

	/**
	 * sets the format of the time scale (X-Axis)
	*/
	date_scale: string;

	/**
	 * 'says' to open the lightbox while creating new events by clicking on the '+' button
	*/
	details_on_create: boolean;

	/**
	 * 'says' to open the lightbox after double clicking on a task
	*/
	details_on_dblclick: boolean;

	/**
	 * enables the possibility to drag the lightbox by the header
	*/
	drag_lightbox: boolean;

	/**
	 * enables creating dependency links by drag-and-drop
	*/
	drag_links: boolean;

	/**
	 * stores the types of available drag-and-drop modes
	*/
	drag_mode: any;

	/**
	 * enables the possibility to move tasks by drag-and-drop
	*/
	drag_move: boolean;

	/**
	 * enables the possibility to change the task progress by dragging the progress knob
	*/
	drag_progress: boolean;

	/**
	 * enables the possibility to resize tasks by drag-and-drop
	*/
	drag_resize: boolean;

	/**
	 * sets the number of 'gantt.config.duration_unit' units that will correspond to one  unit of the 'duration' data property.
	*/
	duration_step: number;

	/**
	 * sets the duration unit in milliseconds
	*/
	duration_unit: number;

	/**
	 * sets the  end value of the time scale	(X–Axis)
	*/
	end_date: Date;

	/**
	 * 'says' the Gantt chart to re-render the scale each time a task doesn't fit into the existing scale interval
	*/
	fit_tasks: boolean;

	/**
	 * sets the maximum width of the grid
	*/
	grid_width: number;

	/**
	 * sets whether the timeline area will be initially scrolled to display the earliest task
	*/
	initial_scroll: boolean;

	/**
	 * specifies the lightbox object
	*/
	lightbox: any;

	/**
	 * increases the height of the lightbox
	*/
	lightbox_additional_height: number;

	/**
	 * sets the size of the link arrow
	*/
	link_arrow_size: number;

	/**
	 * sets the name of the attribute that will specify the id of the link's HTML element
	*/
	link_attribute: string;

	/**
	 * sets the width of dependency links in the timeline area
	*/
	link_line_width: number;

	/**
	 * sets the width of the area (over the link) sensitive to clicks
	*/
	link_wrapper_width: number;

	/**
	 * stores the types of links dependencies
	*/
	links: any;

	/**
	 * sets the minimum width for a column
	*/
	min_column_width: number;

	/**
	 * sets the minimum step (in milliseconds) for task's time values
	*/
	min_duration: number;

	/**
	 * activates the 'branch' mode that allows dragging tasks only within the parent branch
	*/
	order_branch: boolean;

	/**
	 * defines whether the task form will appear from the left/right side of the screen or near the selected task
	*/
	quick_info_detached: boolean;

	/**
	 * stores a collection of buttons resided in the pop-up edit form
	*/
	quickinfo_buttons: any;

	/**
	 * activates the read-only mode for the Gantt chart
	*/
	readonly: boolean;

	/**
	 * enables rounding the task's start and end dates to the nearest scale marks
	*/
	round_dnd_dates: boolean;

	/**
	 * sets the default height for rows of the table
	*/
	row_height: number;

	/**
	 * sets the height of the time scale and the header of the grid
	*/
	scale_height: number;

	/**
	 * sets the unit of the time scale (X-Axis)
	*/
	scale_unit: string;

	/**
	 * enables selection of tasks in the Gantt chart
	*/
	select_task: boolean;

	/**
	 * enables converting server-side dates from UTC to a local time zone (and backward) while sending data to the server
	*/
	server_utc: boolean;

	/**
	 * enables showing a progress/spinner while data is loading
	*/
	show_progress: boolean;

	/**
	 * enables sorting in the table
	*/
	sort: boolean;

	/**
	 * sets the start value of the time scale	(X–Axis)
	*/
	start_date: Date;

	/**
	 * sets the start day of weeks
	*/
	start_on_monday: boolean;

	/**
	 * sets the step of the time scale (X-Axis)
	*/
	step: number;

	/**
	 * specifies the second time scale(s)
	*/
	subscales: any;

	/**
	 * sets the name of the attribute that will specify the id of the task's HTML element
	*/
	task_attribute: string;

	/**
	 * sets the format of the date label in the 'Time period' section of the lightbox
	*/
	task_date: string;

	/**
	 * sets the height of task bars in the timeline area
	*/
	task_height: number;

	/**
	 * sets the offset (in pixels) of the nearest task from the left border in the timeline
	*/
	task_scroll_offset: number;

	/**
	 * sets the format of the time drop-down selector in the lightbox
	*/
	time_picker: string;

	/**
	 * sets the minimum step (in minutes) for the task's time values
	*/
	time_step: number;

	/**
	 * sets the timeout in milliseconds before the tooltip is displayed for a task
	*/
	tooltip_timeout: number;

	/**
	 * enables/disables the touch support for the Gantt chart
	*/
	touch: any;

	/**
	 * defines the time period in milliseconds that is used to differ the long touch gesture from the scroll gesture
	*/
	touch_drag: any;

	/**
	 * sets the date format that is used to parse data from the data set
	*/
	xml_date: string;	
}


interface GanttDateHelpers{
	add(origin: Date, count: number, unit: string): Date;
	copy(origin: Date): Date;

	date_part(origin: Date): Date;
	time_part(origin: Date): Date;

	day_start(origin: Date): Date;
	month_start(origin: Date): Date;
	week_start(origin: Date): Date;
	year_start(origin: Date): Date;

	getISOWeek(origin: Date): number;
	getUTCISOWeek(origin: Date): number;

	date_to_str(format: string): any;
	str_to_date(format: string): any;
	convert_to_utc(origin: Date): Date;
	to_fixed(value: number): string;
}

interface GanttHotkeys{
	edit_save: number;
	edit_cancel: number;
}

//Gantt.locale 

interface GanttLocaleDate{
	month_full: string[];
	month_short: string[];
	day_full: string[];
	day_short: string[];
}

interface GanttLocaleLabels{
	new_task: string;
	icon_save: string;
	icon_cancel: string;
	icon_details: string;
	icon_edit: string;
	icon_delete: string;
	confirm_closing: string;
	confirm_deleting: string;
	section_description: string;
	section_time: string;
	confirm_link_deleting: string;
	link_from: string;
	link_to: string;
	link_start: string;
	link_end: string;
	minutes: string;
	hours: string;
	days: string;
	weeks: string;
	months: string;
	years: string;
}

interface GanttLocale{
	date: GanttLocaleDate;
	labels: GanttLocaleLabels;
}

interface GanttStatic{
	templates: GanttTemplates;
	config: GanttConfigOptions;
	date: GanttDateHelpers;
	keys: GanttHotkeys;
	skin: String;
	version: String;
	locale: GanttLocale;
	$click: any;

	/**
	 * adds a new dependency link
	 * @param link the link object
	*/
	addLink(link: any): any;

	/**
	 * adds a new task
	 * @param task the task object
	 * @param parent the parent's id
	*/
	addTask(task: any, parent: string): any;

	/**
	 * attaches the handler to an inner event of dhtmlxGantt
	 * @param name the event's name, case-insensitive
	 * @param handler the handler function
	*/
	attachEvent(name: string, handler: (...args: any[])=>any): any;

	/**
	 * calls an inner event
	 * @param name the event's name, case-insensitive
	 * @param params an array of the event-related data
	*/
	callEvent(name: string, params: any): boolean;

	/**
	 * changes the link's id
	 * @param id the current link's id
	 * @param new_id the new link's id
	*/
	changeLinkId(id: any, new_id: any);

	/**
	 * changes the task's id
	 * @param id the current task's id
	 * @param new_id the new task's id
	*/
	changeTaskId(id: any, new_id: any);

	/**
	 * checks whether an event has some handler(s) specified
	 * @param name the event's name
	*/
	checkEvent(name: string): boolean;

	/**
	 * removes all tasks from the Gantt chart
	*/
	clearAll();

	/**
	 * closes the branch with the specified id
	 * @param id  the branch id
	*/
	close(id : any);

	/**
	 * deletes the specified dependency link
	 * @param id the dependency link's id
	*/
	deleteLink(id: any);

	/**
	 * deletes the specified  task
	 * @param id the task's id
	*/
	deleteTask(id: string);

	/**
	 * detaches all handlers from events (which were attached before by the attachEvent() method)
	*/
	detachAllEvents();

	/**
	 * detaches a handler from an event (which was attached before by the attachEvent() method)
	 * @param id the event's id
	*/
	detachEvent(id: string);

	/**
	 * iterates over specified tasks of the Gantt chart
	 * @param code  a function that will iterate over tasks. Takes a task object as a parameter
	 * @param parent the parent id. If specified, the function will iterate over childs of the <br> specified parent
	 * @param master the object, that 'this'  will refer to
	*/
	eachTask(code : (...args: any[])=>any, parent?: any, master?: any);

	/**
	 * returns the 1st-level child tasks of the specified parent branch
	 * @param id the parent branch's id
	*/
	getChildren(id: any): any;

	/**
	 * get the index of a task in the tree
	 * @param id the task id
	*/
	getGlobalTaskIndex(id: any);

	/**
	 * gets the label of a select control in the lightbox
	 * @param property the name of a data property that the control is mapped to
	 * @param key the option's id. This parameter is compared with the task's data property to <br> assign the select's option to the task
	*/
	getLabel(property: string, key: any);

	/**
	 * gets the lightbox's HTML object element
	*/
	getLightbox(): HTMLElement;

	/**
	 * returns the object of the lightbox's section
	 * @param name the name of the section
	*/
	getLightboxSection(name: string): any;

	/**
	 * returns values of the lightbox's sections
	*/
	getLightboxValues(): any;

	/**
	 * returns the dependency link object by the specified id
	 * @param id the link id
	*/
	getLink(id: any): any;

	/**
	 * returns the HTML element of the specified dependency link
	 * @param id the link id
	*/
	getLinkNode(id: any): HTMLElement;

	/**
	 * returns the id of the next item (no matter what the level of nesting is: the same or different)
	 * @param id the task id
	*/
	getNext(id: any): any;

	/**
	 * returns the id of the previous item (no matter what the level of nesting is: the same or different)
	 * @param id the task id
	*/
	getPrev(id: any): any;

	/**
	 * returns the scroll position
	*/
	getScrollState(): any;

	/**
	 * returns the id of the selected task
	*/
	getSelectedId(): any;

	/**
	 * gets the current state of the Gantt chart
	*/
	getState(): any;

	/**
	 * returns the task object
	 * @param id the task id
	*/
	getTask(id: any): any;

	/**
	 * returns a collection of tasks which occur during the specified period
	 * @param from the start date of the period
	 * @param to the end date of the period
	*/
	getTaskByTime(from?: Date, to?: Date): any;

	/**
	 * get the index of a task in the branch
	 * @param id the task id
	*/
	getTaskIndex(id: any): number;

	/**
	 * returns the HTML element of the task bar
	 * @param id the task id
	*/
	getTaskNode(id: any): HTMLElement;

	/**
	 * returns the HTML element of the task row in the table
	 * @param id the task id
	*/
	getTaskRowNode(id: any): HTMLElement;

	/**
	 * checks whether the specified item has child tasks
	 * @param id the task id
	*/
	hasChild(id: any): boolean;

	/**
	 * hides the lightbox modal overlay that blocks interactions with the remaining screen
	 * @param box an element to hide
	*/
	hideCover(box?: HTMLElement);

	/**
	 * closes the lightbox if it's currently active
	*/
	hideLightbox();

	/**
	 * hides the pop-up task form (if it's currently active)
	*/
	hideQuickInfo();

	/**
	 * constructor. Initializes a dhtmlxGantt object
	 * @param container an HTML container ( or its id) where a dhtmlxGantt object will be initialized
	 * @param from the start value of the time scale	(X&ndash;Axis)
	 * @param to the end value of the time scale (X&ndash;Axis)
	*/
	init(container: any, from?: Date, to?: Date);

	/**
	 * checks whether the specified link is correct
	 * @param link the link object
	*/
	isLinkAllowed(link: any): boolean;

	/**
	 * checks whether the specified link exists
	 * @param id the link id
	*/
	isLinkExists(id: any): boolean;

	/**
	 * checks whether the specified task exists
	 * @param id the task id
	*/
	isTaskExists(id: any): boolean;

	/**
	 * checks whether the specifies task is currently rendered in the Gantt chart
	 * @param id the task's id
	*/
	isTaskVisible(id: any): boolean;

	/**
	 * loads data to the gantt from an external data source
	 * @param url the server-side url (may be a static file or a server side script that outputs data)
	 * @param type <i>('json', 'xml', 'oldxml')</i> the data type. The default value - <i>'json'</i>
	 * @param callback the callback function
	*/
	load(url: string, type?: string, callback?: (...args: any[])=>any);

	/**
	 * gets the id of a task from the specified HTML event
	 * @param e a native event
	*/
	locate(e: Event): string;

	/**
	 * moves a task to a new position
	 * @param sid the id of the task to move
	 * @param tindex the index of the position that the task will be moved to <br> (the index in the whole tree)
	 * @param parent the parent id. If specified, the <b>tindex</b> will  refer to the  index in the <br> <b>'parent'</b> branch
	*/
	moveTask(sid: any, tindex: number, parent?: any);

	/**
	 * opens the branch with the specified id
	 * @param id the branch id
	*/
	open(id: any);

	/**
	 * loads data from a client-side resource
	 * @param url a string or object which represents data
	 * @param type ( <i>'json', 'xml'</i> ) the data type. The default value - <i>'json'</i>
	*/
	parse(url: any, type?: string);

	/**
	 * refreshes data in the Gantt chart
	*/
	refreshData();

	/**
	 * refreshes the specifies link
	 * @param id the link id
	*/
	refreshLink(id: any);

	/**
	 * refreshes the task and its related links
	 * @param id the task id
	*/
	refreshTask(id: any);

	/**
	 * renders the whole Gantt chart
	*/
	render();

	/**
	 * removes the current lightbox's HTML object element
	*/
	resetLightbox();

	/**
	 * forces the lightbox to resize
	*/
	resizeLightbox();

	/**
	 * scrolls the Gantt container to the specified position
	 * @param x the value of the horizontal scroll
	 * @param y the value of the vertical scroll
	*/
	scrollTo(x: number, y: number);

	/**
	 * selects the specified task
	 * @param id the task id
	*/
	selectTask(id: any): any;

	/**
	 * serializes the data into JSON or XML format.
	 * @param type the format that the data will be serialized into. <br> Possible values: 'json' (<i>default</i> ), 'xml'.
	*/
	serialize(type?: string);

	/**
	 * returns a list of options
	 * @param list_name the name of a list
	 * @param options an array of options
	*/
	serverList(list_name: string, options?: any);

	/**
	 * resizes the Gantt chart
	*/
	setSizes();

	/**
	 * shows the lightbox modal overlay that blocks interactions with the remaining screen
	 * @param box an element to hide
	*/
	showCover(box?: HTMLElement);

	/**
	 * opens the lightbox for the specified task
	 * @param id  the task id
	*/
	showLightbox(id : any);

	/**
	 * displays the pop-up task form for the specified task
	 * @param id the task id
	*/
	showQuickInfo(id: any);

	/**
	 * makes the specified task visible on the screen
	 * @param id the task id
	*/
	showTask(id: any);

	/**
	 * sorts the tasks in the grid
	 * @param field the name of the column that the  grid will be sorted by or a custom <br> sorting function
	 * @param desc specifies the sorting direction: <i>true</i> - descending sort and <i>false</i> - ascending<br> sort. By default, <i>false</i>
	 * @param parent the id of the parent task. Specify the parameter if you want to sort tasks only in <br> the branch of the specified parent.
	*/
	sort(field: any, desc?: boolean, parent?: any);

	/**
	 * removes selection from the selected task
	*/
	unselectTask();

	/**
	 * updates the specified dependency link
	 * @param id the task id
	*/
	updateLink(id: string);

	/**
	 * updates the specified task
	 * @param id the task id
	*/
	updateTask(id: string);
}



declare var gantt: GanttStatic;