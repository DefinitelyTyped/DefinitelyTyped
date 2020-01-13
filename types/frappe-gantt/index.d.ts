// Type definitions for frappe-gantt 0.3
// Project: https://github.com/frappe/gantt
// Definitions by: Sam Alexander <https://github.com/samalexander>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Gantt;

declare class Gantt {
    constructor(wrapper: string, tasks: Gantt.Task[], options?: Gantt.Options);

    change_view_mode(mode: Gantt.viewMode): void;
    refresh(tasks: Gantt.Task[]): void;
}

declare namespace Gantt {
    interface Task {
        id: string;
        name: string;
        start: string;
        end: string;
        progress: number;
        dependencies: string;
        custom_class?: string;
    }

    interface Options {
        header_height?: number;
        column_width?: number;
        step?: number;
        view_modes?: viewMode[];
        bar_height?: number;
        bar_corner_radius?: number;
        arrow_curve?: number;
        padding?: number;
        view_mode?: viewMode;
        date_format?: string;
        custom_popup_html?: string | ((task: any) => string);
        on_click?: (task: any) => void;
        on_date_change?: (task: any, start: string, end: string) => void;
        on_progress_change?: (task: any, progress: number) => void;
        on_view_change?: (mode: viewMode) => void;
    }

    type viewMode = 'Quarter Day' | 'Half Day' | 'Day' | 'Week' | 'Month';
}
