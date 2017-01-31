interface FusionCharts {
    type: string;
}

declare var gantt: (H: FusionCharts) => FusionCharts;
export = gantt;
export as namespace gantt;
