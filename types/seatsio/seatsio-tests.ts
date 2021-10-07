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

const testbookableObject = (object: Seatsio.BookableObject) => {
    switch (object.objectType) {
        case 'Seat':
            object.disabledBySocialDistancingRules;
            break;
        case 'GeneralAdmissionArea':
            object.selectionPerTicketType;
            break;
        case 'section':
            object.isInteractive;
            break;
    }
};

const seatObject: Seatsio.Seat = {
    objectType: 'Seat',
    parent: {
        type: 'row',
    },
    companionSeat: false,
    restrictedView: false,
    disabledBySocialDistancingRules: false,
    accessible: false,
    label: '',
    labels: {
        own: '',
        parent: undefined,
        section: undefined,
    },
    status: '',
    extraData: undefined,
    dataPerEvent: {},
    forSale: false,
    selectable: false,
    selected: false,
    inSelectableChannel: false,
    select: (ticketType?: string): void => {
        throw new Error('Function not implemented.');
    },
    deselect: (ticketType?: string): void => {
        throw new Error('Function not implemented.');
    },
    pulse: (): void => {
        throw new Error('Function not implemented.');
    },
    unpulse: (): void => {
        throw new Error('Function not implemented.');
    },
};
testbookableObject(seatObject);

const generalAdmissionAreaObject: Seatsio.GeneralAdmissionArea = {
    objectType: 'GeneralAdmissionArea',
    capacity: 0,
    numBooked: 0,
    numFree: 0,
    numSelected: 0,
    selectionPerTicketType: {},
    dataPerEvent: {},
    accessible: false,
    label: '',
    labels: {
        own: '',
        parent: undefined,
        section: undefined,
    },
    status: '',
    extraData: undefined,
    forSale: false,
    selectable: false,
    selected: false,
    inSelectableChannel: false,
    select: (ticketType?: string): void => {
        throw new Error('Function not implemented.');
    },
    deselect: (ticketType?: string): void => {
        throw new Error('Function not implemented.');
    },
    pulse: (): void => {
        throw new Error('Function not implemented.');
    },
    unpulse: (): void => {
        throw new Error('Function not implemented.');
    },
};
testbookableObject(generalAdmissionAreaObject);

const sectionObject: Seatsio.Section = {
    objectType: 'section',
    sectionCategory: {
        accessible: false,
        color: '',
        key: 0,
        label: '',
        pricing: {
            price: 0,
            formattedPrice: '',
        },
    },
    numberOfSelectableObjects: 0,
    numberOfSelectedObjects: 0,
    selectableCategories: [],
    isInteractive: false,
    accessible: false,
    label: '',
    labels: {
        own: '',
        parent: undefined,
        section: undefined,
    },
    status: '',
    extraData: undefined,
    dataPerEvent: {},
    forSale: false,
    selectable: false,
    selected: false,
    inSelectableChannel: false,
    select: (ticketType?: string): void => {
        throw new Error('Function not implemented.');
    },
    deselect: (ticketType?: string): void => {
        throw new Error('Function not implemented.');
    },
    pulse: (): void => {
        throw new Error('Function not implemented.');
    },
    unpulse: (): void => {
        throw new Error('Function not implemented.');
    },
};
testbookableObject(sectionObject);
