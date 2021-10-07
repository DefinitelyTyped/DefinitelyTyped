const seatingChartConfig: Seatsio.SeatingChartConfig = {
    divId: 'chart',
    workspaceKey: 'myWorkspaceKey',
    selectionValidators: [{ type: 'consecutiveSeats' }, { type: 'noOrphanSeats' }],
};
const seatingChart = new seatsio.SeatingChart(seatingChartConfig).render();
seatingChart.destroy();

const eventManager = new seatsio.EventManager({
    divId: 'chart',
    secretKey: 'aSecretKey',
    event: 'event1',
    mode: 'manageChannels',
}).render();
eventManager.destroy();

const chartManager = new seatsio.ChartManager({
    divId: 'chart',
    secretKey: 'aSecretKey',
    chart: 'chart1',
    mode: 'manageRulesets',
}).render();
chartManager.destroy();

const designer = new seatsio.SeatingChartDesigner({
    divId: 'chart',
    secretKey: 'aSecretKey',
    chartKey: 'chart1',
}).render();
designer.destroy();

const seatObject: Seatsio.BookableObject = {} as Seatsio.Seat;
if (seatObject.objectType === 'Seat') {
    seatObject.disabledBySocialDistancingRules;
}

const GeneralAdmissionAreaObject: Seatsio.BookableObject = {} as Seatsio.GeneralAdmissionArea;
if (GeneralAdmissionAreaObject.objectType === 'GeneralAdmissionArea') {
    GeneralAdmissionAreaObject.selectionPerTicketType;
}

const SectionObject: Seatsio.BookableObject = {} as Seatsio.Section;
if (SectionObject.objectType === 'section') {
    SectionObject.isInteractive;
}
