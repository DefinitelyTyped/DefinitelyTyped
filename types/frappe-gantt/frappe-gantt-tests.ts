import Gantt from "frappe-gantt";

// Test basic task structure
const tasks: Gantt.Task[] = [
    {
        id: "Task 1",
        name: "Redesign website",
        start: "2016-12-28",
        end: "2016-12-31",
        progress: 20,
        color: "#fff",
        dependencies: "Task 2, Task 3",
    },
    {
        id: "Task 2",
        name: "Task with duration",
        start: "2016-12-28",
        duration: "2 days",
        color: "#000",
        progress: 50,
    },
    {
        id: "Task 3",
        name: "Custom class task",
        start: "2016-12-28",
        end: "2016-12-31",
        progress: 75,
        color_progress: "#fff",
        custom_class: "custom-task",
    },
];

// Test different constructor signatures
const gantt1 = new Gantt("#gantt", tasks);
const gantt2 = new Gantt(new HTMLElement(), tasks);
const gantt3 = new Gantt(new SVGElement(), tasks);

// Test view modes
gantt1.change_view_mode("Week");
gantt1.change_view_mode("Day", true);

// Test view mode object
gantt1.change_view_mode({
    name: "Month",
    padding: "1 day",
    date_format: "YYYY-MM-DD",
    upper_text: (date: Date) => date.toLocaleDateString(),
    lower_text: "DD",
    column_width: 50,
    step: "1 day",
    snap_at: "1 day",
    thick_line: (date: Date) => date.getDate() === 1,
});

// Test task operations
gantt1.refresh(tasks);
gantt1.update_task("Task 1", { progress: 50 });
const task = gantt1.get_task("Task 1");

// Test view checks
gantt1.view_is("Week");
gantt1.view_is(["Week", "Day"]);
gantt1.view_is({ name: "Week" });

// Test utility methods
gantt1.unselect_all();
const oldestDate = gantt1.get_oldest_starting_date();
gantt1.clear();

// Test comprehensive options
new Gantt("#gantt", tasks, {
    // Basic display options
    arrow_curve: 5,
    auto_move_label: true,
    bar_corner_radius: 3,
    bar_height: 20,
    column_width: 30,
    container_height: "auto",
    date_format: "YYYY-MM-DD",

    // Holiday and ignore settings
    holidays: {
        red: "weekend",
        blue: ["2023-12-25", "2023-12-26"],
        green: (date: Date) => date.getDay() === 5,
        purple: [
            { date: "2023-12-31", name: "New Year's Eve" },
            { date: "2024-01-01", name: "New Year's Day" },
        ],
    },
    ignore: ["2023-12-24", "2023-12-25"],

    // Layout options
    infinite_padding: true,
    language: "es",
    lines: "both",
    lower_header_height: 20,
    move_dependencies: true,
    padding: 10,

    // Popup options
    popup: true,
    popup_on: "click",

    // Readonly options
    readonly: false,
    readonly_dates: false,
    readonly_progress: false,

    // Scroll and progress options
    scroll_to: "today",
    show_expected_progress: true,
    snap_at: "1 day",
    today_button: true,
    upper_header_height: 50,

    // View mode options
    view_mode: "Week",
    view_mode_select: true,
    view_modes: [
        {
            name: "Quarter Day",
            padding: "1 hour",
            date_format: "HH:mm",
            upper_text: "DD MMM",
            lower_text: "HH:mm",
            column_width: 25,
            step: "15 mins",
            snap_at: "15 mins",
        },
        {
            name: "Day",
            padding: "1 day",
            date_format: "DD MMM",
            upper_text: "MMMM YYYY",
            lower_text: "DD",
            column_width: 50,
            step: "1 day",
            snap_at: "1 day",
            thick_line: (date: Date) => date.getDay() === 1,
        },
    ],

    // Event handlers
    on_click: (task: Gantt.Task) => {
        console.log(`Task ${task.name} clicked`);
    },
    on_date_change: (task: Gantt.Task, start: Date, end: Date) => {
        console.log(`Task ${task.name} dates changed to ${start} - ${end}`);
    },
    on_progress_change: (task: Gantt.Task, progress: number) => {
        console.log(`Task ${task.name} progress changed to ${progress}%`);
    },
    on_view_change: (mode: Gantt.ViewModeObject) => {
        console.log(`View changed to ${mode.name}`);
    },
});

// Test static VIEW_MODE property
const viewModes = {
    quarterDay: Gantt.VIEW_MODE.QUARTER_DAY,
    halfDay: Gantt.VIEW_MODE.HALF_DAY,
    day: Gantt.VIEW_MODE.DAY,
    week: Gantt.VIEW_MODE.WEEK,
    month: Gantt.VIEW_MODE.MONTH,
    year: Gantt.VIEW_MODE.YEAR,
};
