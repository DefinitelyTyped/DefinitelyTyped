// Type definitions for seatsio 1.2
// Project: https://www.seats.io
// Definitions by: seatsio <https://github.com/seatsio>
//                 Peter de Kok <https://github.com/PeterDeKok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
