export default Gantt;

declare class Gantt {
    constructor(wrapper: string | HTMLElement | SVGElement, tasks: Gantt.Task[], options?: Gantt.Options);

    tasks: Gantt.Task[];
    options: Gantt.Options;

    setup_wrapper(element: string | HTMLElement | SVGElement): void;
    setup_options(options: Gantt.Options): void;
    setup_tasks(tasks: Gantt.Task[]): void;
    refresh(tasks: Gantt.Task[]): void;
    change_view_mode(mode?: Gantt.viewMode | Gantt.ViewModeObject, maintain_scroll?: boolean): void;
    update_task(id: string, new_details: Partial<Gantt.Task>): void;
    get_task(id: string): Gantt.Task | undefined;
    unselect_all(): void;
    view_is(modes: string | string[] | Gantt.ViewModeObject): boolean;
    get_oldest_starting_date(): Date;
    clear(): void;

    static VIEW_MODE: Record<Gantt.viewModeKey, Gantt.viewMode>;
}

declare namespace Gantt {
    interface Task {
        id?: string;
        name: string;
        start: string;
        end?: string;
        duration?: string;
        progress: number;
        dependencies?: string | string[];
        custom_class?: string;
        color?: string | undefined;
        color_progress?: string | undefined;
        _start?: Date;
        _end?: Date;
        _index?: number;
    }

    interface ViewModeObject {
        name: viewMode;
        padding?: string | [string, string];
        date_format?: string;
        upper_text?: string | ((date: Date, last_date: Date | null, language: string) => string);
        lower_text?: string | ((date: Date, last_date: Date | null, language: string) => string);
        column_width?: number;
        step?: string;
        snap_at?: string;
        thick_line?: (date: Date) => boolean;
    }

    interface Options {
        arrow_curve?: number;
        auto_move_label?: boolean;
        bar_corner_radius?: number;
        bar_height?: number;
        column_width?: number;
        container_height?: "auto" | number;
        date_format?: string;
        holidays?: Record<
            string,
            string | string[] | ((date: Date) => boolean) | Array<{ date: string; name: string }>
        >;
        ignore?: string | string[] | ((date: Date) => boolean);
        infinite_padding?: boolean;
        language?: string;
        lines?: "vertical" | "horizontal" | "both" | "none";
        lower_header_height?: number;
        move_dependencies?: boolean;
        padding?: number;
        popup?: boolean | string | ((task: Task) => string);
        popup_on?: string;
        readonly?: boolean;
        readonly_dates?: boolean;
        readonly_progress?: boolean;
        scroll_to?: string | "today" | "start" | "end" | Date;
        show_expected_progress?: boolean;
        snap_at?: string;
        today_button?: boolean;
        upper_header_height?: number;
        view_mode?: viewMode;
        view_mode_select?: boolean;
        view_modes?: ViewModeObject[];
        on_click?: (task: Task) => void;
        on_date_change?: (task: Task, start: Date, end: Date) => void;
        on_progress_change?: (task: Task, progress: number) => void;
        on_view_change?: (mode: ViewModeObject) => void;
    }

    type viewMode = "Hour" | "Quarter Day" | "Half Day" | "Day" | "Week" | "Month" | "Year";
    type viewModeKey = "QUARTER_DAY" | "HALF_DAY" | "DAY" | "WEEK" | "MONTH" | "YEAR";
}
