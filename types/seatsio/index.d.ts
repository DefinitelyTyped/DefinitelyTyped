/// <reference path="lib/seatingChart.d.ts" />
/// <reference path="lib/eventManager.d.ts" />
/// <reference path="lib/seatingChartDesigner.d.ts" />
/// <reference path="lib/chartManager.d.ts" />

declare var seatsio: Seatsio;

interface Seatsio {
    SeatingChart: Seatsio.SeatingChart;
    EventManager: Seatsio.EventManager;
    SeatingChartDesigner: Seatsio.SeatingChartDesigner;
    ChartManager: Seatsio.ChartManager;
}
