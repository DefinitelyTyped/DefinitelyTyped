interface FusionCharts {
    type: string;
}

declare var charts: (H: FusionCharts) => FusionCharts;
export = charts;
export as namespace charts;
