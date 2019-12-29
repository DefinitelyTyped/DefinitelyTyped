// Type definitions for dhtmlxGantt 6.0.0
// Project: https://dhtmlx.com/docs/products/dhtmlxGantt
// Definitions by: Maksim Kozhukh <https://github.com/mkozhukh>, Christophe Camicas <https://github.com/chriscamicas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type GanttCallback = (...args: any[]) => any;
type GanttEventName = "onAfterAutoSchedule"|"onAfterBatchUpdate"|"onAfterLightbox"|"onAfterLinkAdd"|"onAfterLinkDelete"|"onAfterLinkUpdate"|"onAfterQuickInfo"|"onAfterRedo"|"onAfterSort"|"onAfterTaskAdd"|"onAfterTaskAutoSchedule"|"onAfterTaskDelete"|"onAfterTaskDrag"|"onAfterTaskMove"|"onAfterTaskUpdate"|"onAfterUndo"|"onAjaxError"|"onAutoScheduleCircularLink"|"onBeforeAutoSchedule"|"onBeforeBatchUpdate"|"onBeforeCollapse"|"onBeforeDataRender"|"onBeforeExpand"|"onBeforeGanttReady"|"onBeforeGanttRender"|"onBeforeLightbox"|"onBeforeLinkAdd"|"onBeforeLinkDelete"|"onBeforeLinkDisplay"|"onBeforeLinkUpdate"|"onBeforeMultiSelect"|"onBeforeParse"|"onBeforeRedo"|"onBeforeRedoStack"|"onBeforeRowDragEnd"|"onBeforeRowDragMove"|"onBeforeTaskAdd"|"onBeforeTaskAutoSchedule"|"onBeforeTaskChanged"|"onBeforeTaskDelete"|"onBeforeTaskDisplay"|"onBeforeTaskDrag"|"onBeforeTaskMove"|"onBeforeTaskMultiSelect"|"onBeforeTaskSelected"|"onBeforeTaskUpdate"|"onBeforeUndo"|"onBeforeUndoStack"|"onCircularLinkError"|"onClear"|"onCollapse"|"onColumnResize"|"onColumnResizeEnd"|"onColumnResizeStart"|"onContextMenu"|"onDataProcessorReady"|"onDataRender"|"onDestroy"|"onEmptyClick"|"onError"|"onExpand"|"onGanttLayoutReady"|"onGanttReady"|"onGanttRender"|"onGanttScroll"|"onGridHeaderClick"|"onGridResize"|"onGridResizeEnd"|"onGridResizeStart"|"onLightbox"|"onLightboxButton"|"onLightboxCancel"|"onLightboxChange"|"onLightboxDelete"|"onLightboxSave"|"onLinkClick"|"onLinkDblClick"|"onLinkIdChange"|"onLinkValidation"|"onLoadEnd"|"onLoadStart"|"onMouseMove"|"onMultiSelect"|"onOptionsLoad"|"onParse"|"onQuickInfo"|"onRowDragEnd"|"onRowDragStart"|"onScaleAdjusted"|"onScaleClick"|"onTaskClick"|"onTaskClosed"|"onTaskCreated"|"onTaskDblClick"|"onTaskDrag"|"onTaskIdChange"|"onTaskLoading"|"onTaskMultiSelect"|"onTaskOpened"|"onTaskRowClick"|"onTaskSelected"|"onTaskUnselected"|"onTemplatesReady";

interface GanttTemplates {

	/**
	 * specifies the content of start date or end date columns in grid
	 * @param date the date which needs formatting
	 * @param task the task object
	*/
	date_grid(date: Date, task: any): string;

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
	drag_link(from: string|number, from_start: boolean, to: string|number, to_start: boolean): string;

	/**
	 * specifies the CSS class that will be applied to the pop-up that appears when a user drags a link
	 * @param from the id of the source task
	 * @param from_start <i>true</i>, if the link is being dragged from the start of the  source task, <i>false</i> - if <br> from the end of the task
	 * @param to the id of the target task( 'null' or 'undefined', if the target task isn't specified yet)
	 * @param to_start <i>true</i>, if the link is being dragged to the start of the target task, <i>false</i> - if <br> to the end of the task
	*/
	drag_link_class(from: string|number, from_start: boolean, to: string|number, to_start: boolean): string;

	/**
	 * specifies the custom content inserted before the labels of child items in the tree column
	 * @param task the task object
	*/
	grid_blank(task: any): string;

	/**
	 * specifies the format of dates in the "Start time" column
	 * @param date the date which needs formatting
	*/
	grid_date_format(date: Date): string;

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
	 * @param columnName the column's name (as specified in the "name" property of the column object)
	 * @param column column object (as specified in the <i>gantt.config.columns</i> config)
	*/
	grid_header_class(columnName: string, column: any): string;

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
	 * defines the height of the filled area in the resourceHistogram
	 * @param start_date start date of the scale cell
	 * @param end_date end date of the scale cell
	 * @param resource the resource object
	 * @param tasks tasks that are assigned to the specified resource and overlap start/end dates of the cell
	*/
	histogram_cell_allocated(start_date: Date, end_date: Date, resource: any, tasks: any[]): void;

	/**
	 * specifies the height of the line that defines the available capacity of the resource
	 * @param start_date start date of the scale cell
	 * @param end_date end date of the scale cell
	 * @param resource the resource object
	 * @param tasks tasks that are assigned to the specified resource and overlap start/end dates of the cell
	*/
	histogram_cell_capacity(start_date: Date, end_date: Date, resource: any, tasks: any[]): void;

	/**
	 * defines the CSS class which is applied to a cell of the resource panel
	 * @param start_date start date of the scale cell
	 * @param end_date end date of the scale cell
	 * @param resource the resource object
	 * @param tasks tasks that are assigned to the specified resource and overlap start/end dates of the cell
	*/
	histogram_cell_class(start_date: Date, end_date: Date, resource: any, tasks: any[]): void;

	/**
	 * defines the label inside a cell
	 * @param start_date start date of the scale cell
	 * @param end_date end date of the scale cell
	 * @param resource the resource object
	 * @param tasks tasks that are assigned to the specified resource and overlap start/end dates of the cell
	*/
	histogram_cell_label(start_date: Date, end_date: Date, resource: any, tasks: any[]): void;

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
	 * specifies the CSS class that will be applied to  the pop-up edit form
	 * @param start the date when a task is scheduled to begin
	 * @param end the date when a task is scheduled to be completed
	 * @param task the task object
	*/
	quick_info_class(start: Date, end: Date, task: any): void;

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
	 * defines the CSS class names of cells in the resource timeline cells
	 * @param start_date start date of the scale cell
	 * @param end_date end date of the scale cell
	 * @param resource the resource object
	 * @param tasks tasks that are assigned to specified resource and overlap start/end dates of the cell
	*/
	resource_cell_class(start_date: Date, end_date: Date, resource: any, tasks: any[]): string;

	/**
	 * defines the HTML content of resource timeline cells
	 * @param start_date start date of the scale cell
	 * @param end_date end date of the scale cell
	 * @param resource the resource object
	 * @param tasks tasks that are assigned to specified resource and overlap start/end dates of the cell
	*/
	resource_cell_value(start_date: Date, end_date: Date, resource: any, tasks: any[]): string;

	/**
	 * specifies the CSS class that will be applied to cells of the time scale of the timeline area
	 * @param date the date of a cell
	*/
	scale_cell_class(date: Date): string;

	/**
	 * specifies the CSS class that will be applied to the time scale
	 * @param scale the scale's configuration object
	*/
	scale_row_class(scale: any): string;

	/**
	 * specifies the CSS class that will be applied to the cells of the timeline area
	 * @param item the task object assigned to the row
	 * @param date the date of a cell
	*/
	task_cell_class(item: any, date: Date): string;

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
	 * specifies the dates of unscheduled tasks
	 * @param task the task object
	*/
	task_unscheduled_time(task: any): void;

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

	/**
	 * specifies the lightbox's header
	 * @param start_date the date when a task is scheduled to begin
	 * @param end_date the date when a task is scheduled to be completed
	 * @param task the task's object
	*/
	lightbox_header(start_date: Date, end_date: Date, task: any): string;
}

interface GanttConfigOptions {

	/**
	 * enables auto scheduling
	*/
	auto_scheduling: boolean;

	/**
	 * allows or forbids creating links from parent tasks (projects) to their children
	*/
	auto_scheduling_descendant_links: boolean;

	/**
	 * defines whether gantt will do autoscheduling on data loading
	*/
	auto_scheduling_initial: boolean;

	/**
	 * defines whether the whole project will be moved (see the details below)
	*/
	auto_scheduling_move_projects: boolean;

	/**
	 * enables the auto scheduling mode, in which tasks will always be rescheduled to the earliest possible date
	*/
	auto_scheduling_strict: boolean;

	/**
	 * automatically converts tasks with subtasks to projects and projects without subtasks back to tasks
	*/
	auto_types: boolean;

	/**
	 * enables automatic adjusting of the grid's columns to the grid's width
	*/
	autofit: boolean;

	/**
	 * enables autoscrolling while dragging a task or link out of the current browser screen
	*/
	autoscroll: boolean;

	/**
	 * defines the speed of autoscrolling (in ms) while dragging a task or link out of the current browser screen
	*/
	autoscroll_speed: number;

	/**
	 * forces the Gantt chart to automatically change its size to show all tasks without scrolling
	*/
	autosize: boolean|string;

	/**
	 * sets the minimum width (in pixels) that the Gantt chart can take in the horizontal 'autosize' mode
	*/
	autosize_min_width: number;

	/**
	 * enables dynamic loading in the Gantt chart
	*/
	branch_loading: boolean;

	/**
	 * specifies that the task has children that are not yet loaded from the backend
	*/
	branch_loading_property: string;

	/**
	 * stores a collection of buttons resided in the left bottom corner of the lightbox
	*/
	buttons_left: any[];

	/**
	 * stores a collection of buttons resided in the right bottom corner of the lightbox
	*/
	buttons_right: any[];

	/**
	 * changes the name of the property that affects binding of a calendar to a task/group of tasks
	*/
	calendar_property: string;

	/**
	 * enables cascade deleting of nested tasks and links
	*/
	cascade_delete: boolean;

	/**
	 * configures the columns of the table
	*/
	columns: any[];

	/**
	 * enables adjusting the task's start and end dates to the work time (while dragging)
	*/
	correct_work_time: boolean;

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
	 * enables drag and drop of items of the project type
	*/
	drag_project: boolean;

	/**
	 * enables the possibility to resize tasks by drag-and-drop
	*/
	drag_resize: boolean;

	/**
	 * sets the number of 'gantt.config.duration_unit' units that will correspond to one  unit of the 'duration' data property.
	*/
	duration_step: number;

	/**
	 * sets the duration unit
	*/
	duration_unit: string;

	/**
	 * changes the name of a property that affects the editing ability  of tasks/links in the read-only Gantt chart
	*/
	editable_property: string;

	/**
	 * an object that contains definitions of inline editors
	*/
	editor_types: any;

	/**
	 * sets the  end value of the time scale
	*/
	end_date: Date;

	/**
	 * 'says' the Gantt chart to re-render the scale each time a task doesn't fit into the existing scale interval
	*/
	fit_tasks: boolean;

	/**
	 * makes the grid resizable by dragging the right grid's border
	*/
	grid_resize: boolean;

	/**
	 * sets the name of the attribute  of the grid resizer's  DOM element
	*/
	grid_resizer_attribute: string;

	/**
	 * sets the name of the attribute  of the column resizer's  DOM element. The attribute presents the column's index
	*/
	grid_resizer_column_attribute: string;

	/**
	 * sets the width of the grid
	*/
	grid_width: number;

	/**
	 * shows the critical path in the chart
	*/
	highlight_critical_path: boolean;

	/**
	 * specifies whether sub-scales shall use the scale_cell_class template by default
	*/
	inherit_scale_class: boolean;

	/**
	 * sets whether the timeline area will be initially scrolled to display the earliest task
	*/
	initial_scroll: boolean;

	/**
	 * 'says' to preserve the initial grid's width while resizing columns within
	*/
	keep_grid_width: boolean;

	/**
	 * enables keyboard navigation in gantt
	*/
	keyboard_navigation: boolean;

	/**
	 * enables keyboard navigation by cells
	*/
	keyboard_navigation_cells: boolean;

	/**
	 * sets the name of the attribute of the task layer's DOM element
	*/
	layer_attribute: string;

	/**
	 * specifies the layout object
	*/
	layout: any;

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
	 * sets the minimum width for a column in the timeline area
	*/
	min_column_width: number;

	/**
	 * Sets the minimum duration (in milliseconds) that can be set for a task during resizing.
	*/
	min_duration: number;

	/**
	 * sets the minumum width for the grid (in pixels) while being resized
	*/
	min_grid_column_width: number;

	/**
	 * enables/disables multi-task selection in the Gantt chart
	*/
	multiselect: boolean;

	/**
	 * specifies whether multi-task selection will be available within one or any level
	*/
	multiselect_one_level: boolean;

	/**
	 * openes all branches initially
	*/
	open_tree_initially: boolean;

	/**
	 * activates the 'branch' mode that allows reordering tasks within the same nesting level
	*/
	order_branch: string|boolean;

	/**
	 * activates the 'branch' mode that allows reordering tasks within the whole gantt
	*/
	order_branch_free: boolean;

	/**
	 * adds an empty row into the end of the list of tasks to simplify tasks editing via keyboard
	*/
	placeholder_task: boolean;

	/**
	 * preserves the current position of the vertical and horizontal scrolls while re-drawing the gantt chart
	*/
	preserve_scroll: boolean;

	/**
	 * specifies whether the gantt container should block the mousewheel event, or should it be propagated up to the window element
	*/
	prevent_default_scroll: boolean;

	/**
	 * defines whether the task form will appear from the left/right side of the screen or near the selected task
	*/
	quick_info_detached: boolean;

	/**
	 * stores a collection of buttons resided in the pop-up task's details form
	*/
	quickinfo_buttons: any[];

	/**
	 * activates the read-only mode for the Gantt chart
	*/
	readonly: boolean;

	/**
	 * changes the name of a property that affects the read-only behaviour of tasks/links
	*/
	readonly_property: string;

	/**
	 * enables the Redo functionality for the gantt
	*/
	redo: boolean;

	/**
	 * defines a set of working calendars that can be assigned to a specific resource, e.g. a user
	*/
	resource_calendars: any;

	/**
	 * defines the property of a task object that stores a resource id associated with resourceGrid/Timeline/Histogram
	*/
	resource_property: string;

	/**
	 * tells the resource timeline to render elements and call templates for non-allocated cells
	*/
	resource_render_empty_cells: boolean;

	/**
	 * specifies the name of the dataStore connected to the resourceGrid/resourceTimeline/resourceHistogram views
	*/
	resource_store: string;

	/**
	 * sets the id of the virtual root element
	*/
	root_id: string|number;

	/**
	 * enables rounding the task's start and end dates to the nearest scale marks
	*/
	round_dnd_dates: boolean;

	/**
	 * sets the default height for rows of the table
	*/
	row_height: number;

	/**
	 * switches gantt to the right-to-left mode
	*/
	rtl: boolean;

	/**
	 * sets the height of the time scale and the header of the grid
	*/
	scale_height: number;

	/**
	 * sets the minimal scale unit (in case multiple scales are used) as the interval of leading/closing empty space
	*/
	scale_offset_minimal: boolean;

	/**
	 * sets the unit of the time scale (X-Axis)
	*/
	scale_unit: string;

	/**
	 * specifies whether the timeline area shall be scrolled while selecting to display the selected task
	*/
	scroll_on_click: boolean;

	/**
	 * set the sizes of the vertical (width) and horizontal (height) scrolls
	*/
	scroll_size: number;

	/**
	 * enables selection of tasks in the Gantt chart
	*/
	select_task: boolean;

	/**
	 * enables converting server-side dates from UTC to a local time zone (and backward) while sending data to the server
	*/
	server_utc: boolean;

	/**
	 * shows the chart (timeline) area of the Gantt chart
	*/
	show_chart: boolean;

	/**
	 * enables showing error alerts in case of unexpected behavior
	*/
	show_errors: boolean;

	/**
	 * shows the grid area of the Gantt chart
	*/
	show_grid: boolean;

	/**
	 * enables/disables displaying links in the Gantt chart
	*/
	show_links: boolean;

	/**
	 * shows/hides markers on the page
	*/
	show_markers: boolean;

	/**
	 * enables displaying of the progress inside the task bars
	*/
	show_progress: boolean;

	/**
	 * activates/disables the 'quick_info' extension (pop-up task's details form)
	*/
	show_quick_info: boolean;

	/**
	 * enables/disables displaying column borders in the chart area
	*/
	show_task_cells: boolean;

	/**
	 * enables showing unscheduled tasks
	*/
	show_unscheduled: boolean;

	/**
	 * hides non-working time from the time scale
	*/
	skip_off_time: boolean;

	/**
	 * enables the smart rendering mode for gantt's tasks and links rendering
	*/
	smart_rendering: boolean;

	/**
	 * specifies that only visible part of the time scale is rendered on the screen
	*/
	smart_scales: boolean;

	/**
	 * enables sorting in the table
	*/
	sort: boolean;

	/**
	 * sets the start value of the time scale
	*/
	start_date: Date;

	/**
	 * sets the starting day of the week
	*/
	start_on_monday: boolean;

	/**
	 * generates a background image for the timeline area instead of rendering actual columns' and rows' lines
	*/
	static_background: boolean;

	/**
	 * sets the step of the time scale (X-Axis)
	*/
	step: number;

	/**
	 * specifies the second time scale(s)
	*/
	subscales: any[];

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
	 * sets the length of time, in milliseconds, before the tooltip hides
	*/
	tooltip_hide_timeout: number;

	/**
	 * sets the right (if positive) offset of the tooltip's position
	*/
	tooltip_offset_x: number;

	/**
	 * sets the top (if positive) offset of the tooltip's position
	*/
	tooltip_offset_y: number;

	/**
	 * sets the timeout in milliseconds before the tooltip is displayed for a task
	*/
	tooltip_timeout: number;

	/**
	 * enables/disables the touch support for the Gantt chart
	*/
	touch: boolean|string;

	/**
	 * defines the time period in milliseconds that is used to differ the long touch gesture from the scroll gesture
	*/
	touch_drag: number|boolean;

	/**
	 * returns vibration feedback before/after drag and drop on touch devices
	*/
	touch_feedback: boolean;

	/**
	 * defines the duration of vibration feedback before/after drag and drop on touch devices (in milliseconds)
	*/
	touch_feedback_duration: number;

	/**
	 * redefines functions responsible for displaying different types of tasks
	*/
	type_renderers: any;

	/**
	 * stores the names of lightbox's structures (used for different types of tasks)
	*/
	types: any;

	/**
	 * enables the Undo functionality for the gantt
	*/
	undo: boolean;

	/**
	 * sets the actions that the Undo operation will revert
	*/
	undo_actions: any;

	/**
	 * sets the number of steps that should be reverted by the undo method
	*/
	undo_steps: number;

	/**
	 * sets the types of entities for which the Undo operation will be applied
	*/
	undo_types: any;

	/**
	 * enables WAI-ARIA support to make the component recognizable for screen readers
	*/
	wai_aria_attributes: boolean;

	/**
	 * enables calculating the duration of tasks in working time instead of calendar time
	*/
	work_time: boolean;

	/**
	 * defines date formats that are used to parse data from a data set and to send data to a server
	*/
	xml_date: string;
}

interface GanttDateHelpers {
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

interface GanttHotkeys {
	edit_save: number;
	edit_cancel: number;
}

interface GanttLocaleDate {
	month_full: string[];
	month_short: string[];
	day_full: string[];
	day_short: string[];
}

interface GanttLocaleLabels {
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

interface GanttLocale {
	date: GanttLocaleDate;
	labels: GanttLocaleLabels;
}

interface GanttEnterprise {
	getGanttInstance(): GanttStatic;
}

interface GanttStatic {

	/**
	 * redefines the default click behavior for buttons of the Gantt chart
	*/
	$click: any;

	/**
	 * dhtmlx ajax module
	*/
	ajax: any;

	/**
	 * the interface of the working calendar object
	*/
	calendar: any;

	/**
	 * defines configuration options for dates, scale, controls
	*/
	config: GanttConfigOptions;

	/**
	 * stores various constants to reduce the use of magic numbers in the code
	*/
	constants: any;

	/**
	 * a set of date formatting methods
	*/
	date: GanttDateHelpers;

	/**
	 * a set of flags which describe current environment
	*/
	env: any;

	/**
	 * an object that stores various extensions
	*/
	ext: any;

	/**
	 * specifies JSON serialization and parsing
	*/
	json: any;

	/**
	 * defines the hot keys for the Gantt chart
	*/
	keys: GanttHotkeys;

	/**
	 * a locale object (region-specific labels) of the Gantt chart
	*/
	locale: GanttLocale;

	/**
	 * specifies serialization and parsing in the XML format of dhtmlxGantt 1.0
	*/
	oldxml: any;

	/**
	 * returns the current skin of the Gantt chart
	*/
	skin: string;

	/**
	 * returns objects of the available skins
	*/
	skins: any;

	/**
	 * defines formatting templates for dates, titles, tooltips in the Gantt chart
	*/
	templates: GanttTemplates;

	/**
	 * returns the version of dhtmlxGantt
	*/
	version: string;

	/**
	 * specifies XML serialization and parsing
	*/
	xml: any;

	/**
	 * adds a calendar into Gantt
	 * @param calendar an object with configuration of the calendar
	*/
	addCalendar(calendar: any): number;

	/**
	 * adds a new dependency link
	 * @param link the link object
	*/
	addLink(link: any): string|number;

	/**
	 * displays an additional layer with custom elements for a link in the timeline area
	 * @param func a render function or a config object
	*/
	addLinkLayer(func: any): string;

	/**
	 * adds a marker to the timeline area
	 * @param marker the marker's configuration object
	*/
	addMarker(marker: any): string;

	/**
	 * adds a new keyboard shortcut
	 * @param shortcut the key name or the name of keys combination for a shortcut (<a href="desktop/keyboard_navigation.md#shortcutsyntax">shortcut syntax</a>)
	 * @param handler the handler of the shortcut call
	 * @param scope the name of the context element to attach the handler function to (<a href="desktop/keyboard_navigation.md#scopes">list of scopes</a>)
	*/
	addShortcut(shortcut: string, handler: GanttCallback, scope: string): void;

	/**
	 * adds a new task
	 * @param task the task object
	 * @param parent the parent's id
	 * @param index optional, optional, the position the task will be added into (0 or greater)
	*/
	addTask(task: any, parent: string, index?: number): string|number;

	/**
	 * displays an additional layer with custom elements for a task in the timeline area
	 * @param func a render function or a config object
	*/
	addTaskLayer(func: any): string;

	/**
	 * calls an alert message box
	 * @param config the alert box's configuration
	*/
	alert(config: any): HTMLElement;

	/**
	 * if the specified expression is false, an errorMessage is shown in the red popup at the top right corner of the screen
	 * @param expression true to assert the expression, false - if assertion fails
	 * @param errorMessage an error message that will be shown in the red popup
	*/
	assert(expression: boolean, errorMessage: string): void;

	/**
	 * attaches the handler to an inner event of dhtmlxGantt
	 * @param name the event's name, case-insensitive
	 * @param handler the handler function
	*/
	attachEvent(name: GanttEventName, handler: GanttCallback): string;

	/**
	 * recalculates the schedule of the project
	 * @param taskId optional, optional, the task id
	*/
	autoSchedule(taskId?: string|number): void;

	/**
	 * updates multiple tasks/links at once
	 * @param callback the callback function
	*/
	batchUpdate(callback: GanttCallback): void;

	/**
	 * creates a new function that, when called, has its <i>this</i> keyword set to the provided value
	 * @param method the target function
	 * @param thisArg the value to be passed as the <i>this</i> parameter to the target function when the bound function is called
	*/
	bind(method: GanttCallback, thisArg: any): GanttCallback;

	/**
	 * calculates the duration of a task
	 * @param start the date when a task is scheduled to begin
	 * @param end the date when a task is scheduled to be completed
	*/
	calculateDuration(start: Date, end: Date): number;

	/**
	 * calculates the duration of a task
	 * @param config the <a href="#configurationobjectproperties">configuration object</a> of a time span
	*/
	calculateDuration(config: any): number;

	/**
	 * calculates the end date of a task
	 * @param start the date when a task is scheduled to begin
	 * @param duration the duration of a task
	 * @param unit the time unit of the duration
	*/
	calculateEndDate(start: Date, duration: number, unit: string): Date;

	/**
	 * calculates the end date of a task
	 * @param config the <a href="#configurationobjectproperties">configuration object</a> of a time span
	*/
	calculateEndDate(config: any): Date;

	/**
	 * calculates the level of a task
	 * @param task the task's object
	*/
	calculateTaskLevel(task: any): number;

	/**
	 * calls an inner event
	 * @param name the event's name, case-insensitive
	 * @param params an array of the event-related data
	*/
	callEvent(name: string, params: any[]): boolean;

	/**
	 * repaints the lighbox for the task according to its type
	 * @param type the task type
	*/
	changeLightboxType(type: string): void;

	/**
	 * changes the link's id
	 * @param id the current link's id
	 * @param new_id the new link's id
	*/
	changeLinkId(id: string|number, new_id: string|number): void;

	/**
	 * changes the task's id
	 * @param id the current task's id
	 * @param new_id the new task's id
	*/
	changeTaskId(id: string|number, new_id: string|number): void;

	/**
	 * checks whether an event has some handler(s) specified
	 * @param name the event's name
	*/
	checkEvent(name: GanttEventName): boolean;

	/**
	 * removes all tasks and additional elements (including markers) from the Gantt chart
	*/
	clearAll(): void;

	/**
	 * clears the stack of stored redo commands
	*/
	clearRedoStack(): void;

	/**
	 * clears the stack of stored undo commands
	*/
	clearUndoStack(): void;

	/**
	 * closes the branch with the specified id
	 * @param id the branch id
	*/
	close(id: string|number): void;

	/**
	 * collapses gantt from the full screen mode to the normal mode
	*/
	collapse(): void;

	/**
	 * returns the index of the column by the date
	 * @param date a date object
	*/
	columnIndexByDate(date: Date): void;

	/**
	 * calls a confirm message box
	 * @param config the confirm box's configuration
	*/
	confirm(config: any): HTMLElement;

	/**
	 * creates a deep copy of provided object
	 * @param task the object that needs to be copied
	*/
	copy(task: any): any;

	/**
	 * recalculates the task duration in the work time
	 * @param task the task's object
	*/
	correctTaskWorkTime(task: any): void;

	/**
	 * creates a working calendar
	 * @param parentCalendar optional, (optional) an existing calendar that is used for creating a new one on the base of it
	*/
	createCalendar(parentCalendar?: any): void;

	/**
	 * creates a datastore according to the provided configuration
	 * @param config a configuration object of a datastore
	*/
	createDatastore(config: any): void;

	/**
	 * adds a new task and opens the lightbox to confirm
	 * @param task the task object
	 * @param parent the parent's id
	 * @param index optional, optional, the position the task will be added into (0 or greater)
	*/
	createTask(task: any, parent: string, index?: number): string|number;

	/**
	 * dataProcessor constructor
	 * @param url url to the data feed
	*/
	dataProcessor(url: string): void;

	/**
	 * gets the date of the specified horizontal  position in the chart area
	 * @param pos the relative horizontal position you want to know the date of
	*/
	dateFromPos(pos: number): Date;

	/**
	 * returns false if the provided argument is undefined, otherwise true
	 * @param task the object that should be checked
	*/
	defined(task: any): boolean;

	/**
	 * deletes a task calendar by its id
	 * @param id the id of the calendar
	*/
	deleteCalendar(id: string|number): void;

	/**
	 * deletes the specified dependency link
	 * @param id the dependency link's id
	*/
	deleteLink(id: string|number): void;

	/**
	 * deletes the specified marker
	 * @param markerId the marker's id
	*/
	deleteMarker(markerId: string): void;

	/**
	 * deletes the specified  task
	 * @param id the task's id
	*/
	deleteTask(id: string|number): void;

	/**
	 * destroys the gantt instance
	*/
	destructor(): void;

	/**
	 * detaches all events from dhtmlxGantt (both custom and inner)
	*/
	detachAllEvents(): void;

	/**
	 * detaches a handler from an event (which was attached before by the attachEvent() method)
	 * @param id the event's id
	*/
	detachEvent(id: string): void;

	/**
	 * iterates over all parent tasks of the specified task in the Gantt chart
	 * @param code a function that will iterate over tasks. Takes a task object as a parameter
	 * @param startTask the id of the item the parent tasks of which should be iterated over
	 * @param master optional, the object, that 'this'  will refer to
	*/
	eachParent(code: GanttCallback, startTask: string|number, master?: any): void;

	/**
	 * iterates over all selected tasks in the Gantt chart
	 * @param code a function that will iterate over tasks. Takes a task id as a parameter
	*/
	eachSelectedTask(code: GanttCallback): void;

	/**
	 * iterates over all child tasks in the Gantt chart
	 * @param code a function that will iterate over tasks. Takes a task object as a parameter
	 * @param parent optional, the parent id. If specified, the function will iterate over childs of the <br> specified parent
	 * @param master optional, the object, that 'this'  will refer to
	*/
	eachTask(code: GanttCallback, parent?: string|number, master?: any): void;

	/**
	 * attaches an event handler to an HTML element
	 * @param node the HTML node or its id
	 * @param event the name of an HTML event (without the 'on' prefix)
	 * @param handler the event handler
	 * @param options optional, optional, the value of either the <i>useCapture</i> or <i>options</i> parameter. <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener">Read details</a>
	*/
	event(node: HTMLElement|string, event: string, handler: GanttCallback, options?: any): void;

	/**
	 * removes an event handler from an HTML element
	 * @param node the HTML node or its id
	 * @param event the name of an HTML event (without the 'on' prefix)
	 * @param handler the event handler
	 * @param options optional, optional, the value of either the <i>useCapture</i> or <i>options</i> parameter. <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener">Read details</a>
	*/
	eventRemove(node: HTMLElement|string, event: string, handler: GanttCallback, options?: any): void;

	/**
	 * expands gantt to the full screen mode
	*/
	expand(): void;

	/**
	 * exports data from the Gantt chart to an Excel document
	 * @param _export_ an object with export settings (see the details)
	*/
	exportToExcel(_export_: any): void;

	/**
	 * exports data from the Gantt chart to an iCal string
	 * @param _export_ an object with export settings (see the details)
	*/
	exportToICal(_export_: any): void;

	/**
	 * exports the structure and data of a Gantt chart into a JSON object
	 * @param config an object with Gantt configuration
	*/
	exportToJSON(config: any): void;

	/**
	 * exports data from the Gantt chart to MS Project
	 * @param _export_ an object with export settings (see the details)
	*/
	exportToMSProject(_export_: any): void;

	/**
	 * exports a Gantt chart into the PDF format
	 * @param _export_ an object with export settings (see the details)
	*/
	exportToPDF(_export_?: any): void;

	/**
	 * exports a Gantt chart into the PNG format
	 * @param _export_ an object with export settings (see the details)
	*/
	exportToPNG(_export_?: any): void;

	/**
	 * returns all dependency loops in the chart
	*/
	findCycles(): any[];

	/**
	 * sets focus on the gantt
	*/
	focus(): void;

	/**
	 * gets worktime calendar by id
	 * @param calendarId the id of the global calendar or "global"
	*/
	getCalendar(calendarId: string|number): any;

	/**
	 * gets all the calendars added into Gantt
	*/
	getCalendars(): any[];

	/**
	 * returns the 1st-level child tasks of the specified parent branch
	 * @param id the parent branch's id
	*/
	getChildren(id: string|number): any[];

	/**
	 * returns the closest working time
	 * @param config the configuration object
	*/
	getClosestWorkTime(config: any): Date;

	/**
	 * returns the index of the column by its name
	 * @param name the name of the column
	*/
	getColumnIndex(name: string): number;

	/**
	 * returns all tasks and links that a task is connected with
	 * @param id optional, optional, the id of a task
	*/
	getConnectedGroup(id?: string|number): any;

	/**
	 * returns the configuration object of a datastore
	 * @param name the name of the datastore
	*/
	getDatastore(name: string): any;

	/**
	 * returns the free slack of a task
	 * @param task the object of a task
	*/
	getFreeSlack(task: any): number;

	/**
	 * gets the index of a task in the tree
	 * @param id the task id
	*/
	getGlobalTaskIndex(id: string|number): number;

	/**
	 * gets the configuration object of a column
	 * @param name the column's name
	*/
	getGridColumn(name: string): any;

	/**
	 * gets columns of the Gantt chart
	*/
	getGridColumns(): any[];

	/**
	 * gets the label of a select control in the lightbox
	 * @param property the name of a data property that the control is mapped to
	 * @param key the option's id. This parameter is compared with the task's data property to <br> assign the select's option to the task
	*/
	getLabel(property: string, key: string|number): void;

	/**
	 * returns the id of the last selected task
	*/
	getLastSelectedTask(): string|number;

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
	 * returns the name of the active lighbox's structure
	*/
	getLightboxType(): string;

	/**
	 * returns values of the lightbox's sections
	*/
	getLightboxValues(): any;

	/**
	 * returns the dependency link object by the specified id
	 * @param id the link id
	*/
	getLink(id: string|number): any;

	/**
	 * returns the number of all dependency links presented in the Gantt chart
	*/
	getLinkCount(): number;

	/**
	 * returns the HTML element of the specified dependency link
	 * @param id the link id
	*/
	getLinkNode(id: string|number): HTMLElement;

	/**
	 * returns all links presented in the Gantt chart
	*/
	getLinks(): any[];

	/**
	 * gets the marker's object
	 * @param markerId the marker's id
	*/
	getMarker(markerId: string): any;

	/**
	 * returns the id of the next item (no matter what the level of nesting is: the same or different)
	 * @param id the task id
	*/
	getNext(id: string|number): string|number;

	/**
	 * returns the id of the next task of the same level
	 * @param id the task id
	*/
	getNextSibling(id: string|number): string|number;

	/**
	 * returns the id of the parent task
	 * @param id the task id
	*/
	getParent(id: string|number): string|number;

	/**
	 * returns the id of the previous item (no matter what the level of nesting is: the same or different)
	 * @param id the task id
	*/
	getPrev(id: string|number): string|number;

	/**
	 * returns the id of the previous task of the same level
	 * @param id the task id
	*/
	getPrevSibling(id: string|number): string|number;

	/**
	 * returns the stack of stored redo user actions
	*/
	getRedoStack(): any[];

	/**
	 * returns all tasks assigned to the resource
	 * @param resourceId the id of the resource
	*/
	getResourceAssignments(resourceId: string|number): any[];

	/**
	 * returns the configuration of the time scale
	*/
	getScale(): any;

	/**
	 * returns the scroll position
	*/
	getScrollState(): any;

	/**
	 * returns the id of the selected task
	*/
	getSelectedId(): string;

	/**
	 * returns an array of the currently selected tasks
	*/
	getSelectedTasks(): any[];

	/**
	 * gets a key navigation shortcut handler
	 * @param shortcut the key name or the name of keys combination for a shortcut (<a href="desktop/keyboard_navigation.md#shortcutsyntax">shortcut syntax</a>)
	 * @param scope the name of the context element to attach the handler function to (<a href="desktop/keyboard_navigation.md#scopes">list of scopes</a>)
	*/
	getShortcutHandler(shortcut: string, scope: string): GanttCallback;

	/**
	 * returns siblings of the specified  task (including itself)
	 * @param id the task id
	*/
	getSiblings(id: string|number): any[];

	/**
	 * checks how much time (in the current duration unit) a task has before it starts to affect other tasks
	 * @param task1 the object of the 1st task to check the slack for
	 * @param task2 the object of the 2nd task to check the slack for
	*/
	getSlack(task1: any, task2: any): number|string;

	/**
	 * gets the current state of the Gantt chart
	*/
	getState(): any;

	/**
	 * calculates the combined start/end dates of tasks nested in a project or another task
	 * @param task_id optional, the task's id, api/gantt_root_id_config.md will be used if not specified
	*/
	getSubtaskDates(task_id?: string|number): any;

	/**
	 * calculates the combined duration of tasks nested in a project or another task.
	 * @param task_id optional, the task's id, api/gantt_root_id_config.md will be used if not specified
	*/
	getSubtaskDuration(task_id?: string|number): number;

	/**
	 * returns the task object
	 * @param id the task id
	*/
	getTask(id: string|number): any;

	/**
	 * finds a task by the specified criteria
	 * @param propertyName the name of the property to match, or a filter function
	 * @param propertyValue the property value
	*/
	getTaskBy(propertyName: string|GanttCallback, propertyValue: any): any[];

	/**
	 * returns a task by its index
	 * @param index the task index in the tree (zero-based numbering)
	*/
	getTaskByIndex(index: number): any;

	/**
	 * returns a collection of tasks which occur during the specified period
	 * @param from optional, the start date of the period
	 * @param to optional, the end date of the period
	*/
	getTaskByTime(from?: Date, to?: Date): any[];

	/**
	 * returns a task by its WBS code
	 * @param code the WBS code of the task
	*/
	getTaskByWBSCode(code: string): any;

	/**
	 * gets a calendar assigned to the specified task (a task level calendar)
	 * @param task the object of a task
	*/
	getTaskCalendar(task: any): any;

	/**
	 * gets the number of tasks that are currently loaded in the gantt
	*/
	getTaskCount(): number;

	/**
	 * returns the visible height of a task
	*/
	getTaskHeight(): number;

	/**
	 * gets the index of a task in the branch
	 * @param id the task id
	*/
	getTaskIndex(id: string|number): number;

	/**
	 * returns the HTML element of the task bar
	 * @param id the task id
	*/
	getTaskNode(id: string|number): HTMLElement;

	/**
	 * calculates the position and size of the task's DOM element in the timeline area
	 * @param task the task object
	 * @param from the start date of the item
	 * @param to the end date of the item
	*/
	getTaskPosition(task: any, from: Date, to: Date): any;

	/**
	 * returns the HTML element of the task row in the table
	 * @param id the task id
	*/
	getTaskRowNode(id: string|number): HTMLElement;

	/**
	 * gets the top position of the task's DOM element in the timeline area
	 * @param id the task's id
	*/
	getTaskTop(id: number|string): number;

	/**
	 * returns the type of a task
	 * @param task the task object
	*/
	getTaskType(task: any): string;

	/**
	 * returns the total slack of a task
	 * @param task the object of a task
	*/
	getTotalSlack(task: any): number;

	/**
	 * returns the stack of stored undo user actions
	*/
	getUndoStack(): any[];

	/**
	 * gets the number of tasks visible on the screen (those that are not collapsed)
	*/
	getVisibleTaskCount(): number;

	/**
	 * returns the WBS code (the outline number) of a task
	 * @param task the object of a task
	*/
	getWBSCode(task: any): string;

	/**
	 * returns the working hours of the specified date
	 * @param date a date to check
	*/
	getWorkHours(date: Date): any[];

	/**
	 * groups tasks by the specified task's attribute
	 * @param config the grouping configuration object
	*/
	groupBy(config: any): void;

	/**
	 * checks whether the specified item has child tasks
	 * @param id the task id
	*/
	hasChild(id: string|number): boolean;

	/**
	 * hides the lightbox modal overlay that blocks interactions with the remaining screen
	 * @param box optional, an element to hide
	*/
	hideCover(box?: HTMLElement): void;

	/**
	 * closes the lightbox if it's currently active
	*/
	hideLightbox(): void;

	/**
	 * hides the pop-up task form (if it's currently active)
	*/
	hideQuickInfo(): void;

	/**
	 * converts an Excel file to JSON
	 * @param config an object with configuration properties of an imported file
	*/
	importFromExcel(config: any): void;

	/**
	 * converts an XML or MPP MS Project file to JSON
	 * @param config an object with configuration properties of an imported file
	*/
	importFromMSProject(config: any): void;

	/**
	 * constructor. Initializes a dhtmlxGantt object
	 * @param container an HTML container ( or its id) where a dhtmlxGantt object will be initialized
	 * @param from optional, the start value of the time scale	(X&ndash;Axis)
	 * @param to optional, the end value of the time scale (X&ndash;Axis)
	*/
	init(container: string|HTMLElement, from?: Date, to?: Date): void;

	/**
	 * checks whether a task is a child of other task
	 * @param childId the id of a task that you want to check as a child
	 * @param parentId the id of a task that you want to check as a parent
	*/
	isChildOf(childId: string|number, parentId: string|number): boolean;

	/**
	 * checks whether the link is circular
	 * @param link the link object
	*/
	isCircularLink(link: any): boolean;

	/**
	 * checks whether the specified link is critical
	 * @param link the link's object
	*/
	isCriticalLink(link: any): boolean;

	/**
	 * checks whether the specified task is critical
	 * @param task the task's object
	*/
	isCriticalTask(task: any): boolean;

	/**
	 * checks whether the specified link is correct
	 * @param link the link object
	*/
	isLinkAllowed(link: any): boolean;

	/**
	 * checks whether the specified link exists
	 * @param id the link id
	*/
	isLinkExists(id: string|number): boolean;

	/**
	 * checks whether the specified task or link is read-only
	 * @param id the task/link id
	*/
	isReadonly(id: string|number): boolean;

	/**
	 * checks whether the specified task is currently selected
	 * @param task the task's id
	*/
	isSelectedTask(task: string|number): boolean;

	/**
	 * checks whether the specified task is split
	 * @param task the object of a task
	*/
	isSplitTask(task: any): boolean;

	/**
	 * checks whether the specified task is summary
	 * @param task the object of a task
	*/
	isSummaryTask(task: any): boolean;

	/**
	 * checks whether the specified task exists
	 * @param id the task id
	*/
	isTaskExists(id: string|number): boolean;

	/**
	 * checks whether the specifies task is currently rendered in the Gantt chart
	 * @param id the task's id
	*/
	isTaskVisible(id: string|number): boolean;

	/**
	 * checks if the task is unscheduled
	 * @param task the task's object
	*/
	isUnscheduledTask(task: any): boolean;

	/**
	 * checks whether the specified date is working or not
	 * @param date a date to check
	 * @param timeunit a time unit: 'hour' or 'day'.<br> If not specified, the value of 'gantt.config.duration_unit'  is used
	*/
	isWorkTime(date: Date, timeunit: string): boolean;

	/**
	 * checks whether the specified date is working or not
	 * @param config the configuration object of a time span
	*/
	isWorkTime(config: any): boolean;

	/**
	 * loads data to the gantt from an external data source
	 * @param url the server-side url (may be a static file or a server side script that outputs data)
	 * @param type optional, <i>('json', 'xml', 'oldxml')</i> the data type. The default value - <i>'json'</i>
	 * @param callback optional, the callback function
	*/
	load(url: string, type?: string, callback?: GanttCallback): void;

	/**
	 * gets the id of a task from the specified HTML event
	 * @param e a native event
	*/
	locate(e: Event): string|number;

	/**
	 * calls a message box of the specified type
	 * @param config the message box's configuration
	*/
	message(config: any): HTMLElement;

	/**
	 * adds properties of the 'source' object into the 'target' object
	 * @param target the target object
	 * @param source the source object
	 * @param force if true, properties of the 'source' will overwrite matching properties of the 'target', if there are any. If false, properties that already exist in the 'target' will be omitted
	*/
	mixin(target: any, source: any, force: boolean): void;

	/**
	 * calls a modalbox
	 * @param config the modal box's configuration
	*/
	modalbox(config: any): HTMLElement;

	/**
	 * moves a task to a new position
	 * @param sid the id of the task to move
	 * @param tindex the index of the position that the task will be moved to <br> (the index within a branch)
	 * @param parent optional, the parent id. If specified, the <b>tindex</b> will  refer to the  index in the <br> <b>'parent'</b> branch
	*/
	moveTask(sid: string|number, tindex: number, parent?: string|number): void;

	/**
	 * opens the branch with the specified id
	 * @param id the branch id
	*/
	open(id: string|number): void;

	/**
	 * loads data from a client-side resource
	 * @param url a string or object which represents data
	 * @param type optional, optional, (<i>'json', 'xml'</i>) the data type. The default value - <i>'json'</i>
	*/
	parse(url: any, type?: string): void;

	/**
	 * gets the relative horizontal position of the specified date in the chart area
	 * @param date a date you want to know the position of
	*/
	posFromDate(date: Date): number;

	/**
	 * applies the reverted changes to the gantt once again
	*/
	redo(): void;

	/**
	 * refreshes data in the Gantt chart
	*/
	refreshData(): void;

	/**
	 * refreshes the specifies link
	 * @param id the link id
	*/
	refreshLink(id: string|number): void;

	/**
	 * refreshes the task and its related links
	 * @param id the task id
	 * @param refresh_links optional, optional, defines whether links related to the task should be refreshed, <em>true</em> by default
	*/
	refreshTask(id: string|number, refresh_links?: boolean): void;

	/**
	 * removes the specified layer related to a link
	 * @param layerId a DOM element that will be displayed in the layer
	*/
	removeLinkLayer(layerId: string): void;

	/**
	 * removes a keyboard shortcut
	 * @param shortcut the key name or the name of keys combination for a shortcut (<a href="desktop/keyboard_navigation.md#shortcutsyntax">shortcut syntax</a>)
	 * @param scope the element to which the shortcut is attached (<a href="desktop/keyboard_navigation.md#scopes">list of scopes</a>)
	*/
	removeShortcut(shortcut: string, scope: any): void;

	/**
	 * removes the specified layer related to a task
	 * @param layerId a DOM element that will be displayed in the layer
	*/
	removeTaskLayer(layerId: string): void;

	/**
	 * renders the whole Gantt chart
	*/
	render(): void;

	/**
	 * updates all markers on the page
	*/
	renderMarkers(): void;

	/**
	 * removes the current lightbox's HTML object element
	*/
	resetLightbox(): void;

	/**
	 * re-calculates the duration of a project task depending on the dates of its children
	 * @param task the task's object
	*/
	resetProjectDates(task: any): void;

	/**
	 * re-calculates the skin's settings from the related attached skin CSS file
	*/
	resetSkin(): void;

	/**
	 * forces the lightbox to resize
	*/
	resizeLightbox(): void;

	/**
	 * rounds the specified date to the nearest date in the time scale
	 * @param date the Date object to round
	*/
	roundDate(date: Date): Date;

	/**
	 * rounds the start and end task's dates to the nearest dates in the time scale
	 * @param task the task object
	*/
	roundTaskDates(task: any): void;

	/**
	 * scrolls the Gantt container to the specified position
	 * @param x value of horizontal scroll or 'null' (if the scroll position shouldn't be changed)
	 * @param y value of vertical scroll or 'null' (if the scroll position shouldn't be changed)
	*/
	scrollTo(x: number, y: number): void;

	/**
	 * selects the specified task
	 * @param id the task id
	*/
	selectTask(id: string|number): string|number;

	/**
	 * serializes the data into JSON or XML format
	 * @param type optional, the format that the data will be serialized into. <br> Possible values: 'json' (<i>default</i> ), 'xml'.
	*/
	serialize(type?: string): void;

	/**
	 * returns a list of options
	 * @param list_name the name of a list
	 * @param options optional, an array of options
	*/
	serverList(list_name: string, options?: any[]): any[];

	/**
	 * set the parent for a task
	 * @param task the task id
	 * @param pid the parent task id
	*/
	setParent(task: number|string, pid: number|string): void;

	/**
	 * resizes the Gantt chart
	*/
	setSizes(): void;

	/**
	 * sets the working time for the Gantt chart
	 * @param config the configuration object of a time span
	*/
	setWorkTime(config: any): void;

	/**
	 * shows the lightbox modal overlay that blocks interactions with the remaining screen
	 * @param box optional, an element to hide
	*/
	showCover(box?: HTMLElement): void;

	/**
	 * scrolls the chart area to makes the specified date visible
	 * @param date the date to show in the chart
	*/
	showDate(date: Date): void;

	/**
	 * opens the lightbox for the specified task
	 * @param id the task id
	*/
	showLightbox(id: string|number): void;

	/**
	 * displays the pop-up task form for the specified task
	 * @param id the task id
	*/
	showQuickInfo(id: string|number): void;

	/**
	 * makes the specified task visible on the screen
	 * @param id the task id
	*/
	showTask(id: string|number): void;

	/**
	 * sorts tasks in the grid
	 * @param field the name of the column that the  grid will be sorted by or a custom sorting function
	 * @param desc optional, specifies the sorting direction: <i>true</i> - descending sort and <i>false</i> - ascending<br> sort. By default, <i>false</i>
	 * @param parent optional, the id of the parent task. Specify the parameter if you want to sort tasks only in the branch of the specified parent.
	 * @param silent optional, specifies whether rendering should be invoked after reordering items
	*/
	sort(field: string|GanttCallback, desc?: boolean, parent?: string|number, silent?: boolean): void;

	/**
	 * selects the specified task if it was unselected and vice versa
	 * @param task the task's id
	*/
	toggleTaskSelection(task: string|number): void;

	/**
	 * returns a unique id
	*/
	uid(): number;

	/**
	 * reverts the changes made in the gantt
	*/
	undo(): void;

	/**
	 * removes selection from the selected task
	 * @param id optional, optional, the id of the task to remove selection from, see details
	*/
	unselectTask(id?: string|number): void;

	/**
	 * unsets a working time in the Gantt Chart
	 * @param config the configuration object of a time span
	*/
	unsetWorkTime(config: any): void;

	/**
	 * updates the specified collection with new options
	 * @param collection the name of the collection to update
	 * @param options the new values of the collection
	*/
	updateCollection(collection: string, options: any[]): boolean;

	/**
	 * updates the specified dependency link
	 * @param id the task id
	*/
	updateLink(id: string): void;

	/**
	 * updates the specified marker
	 * @param markerId the marker's id
	*/
	updateMarker(markerId: string): void;

	/**
	 * updates the specified task
	 * @param id the task id
	*/
	updateTask(id: string): void;
}

declare var gantt: GanttStatic;
declare var Gantt: GanttEnterprise;

declare module "gantt" {
    export = gantt;
}

declare module "Gantt" {
    export = Gantt;
}
