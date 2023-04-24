export type BuildInPlotlyRenderersNames =
    | 'Grouped Column Chart'
    | 'Stacked Column Chart'
    | 'Grouped Bar Chart'
    | 'Stacked Bar Chart'
    | 'Line Chart'
    | 'Dot Chart'
    | 'Area Chart'
    | 'Scatter Chart'
    | 'Multiple Pie Chart';

/**
 * @param PlotyComponent @types/plotly.js
 */
export function createPlotlyRenderer(
    PlotyComponent: React.ComponentType<any>,
): Record<BuildInPlotlyRenderersNames, typeof PlotyComponent>;

export default createPlotlyRenderer;
