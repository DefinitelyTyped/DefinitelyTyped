interface FusionCharts {
    type: string;
}

declare var widgets: (H: FusionCharts) => FusionCharts;
export = widgets;
export as namespace widgets;
