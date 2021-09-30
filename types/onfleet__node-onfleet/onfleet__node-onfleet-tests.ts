import Onfleet = require('@onfleet/node-onfleet');

const bottleneckOptions = {
    LIMITER_RESERVOIR: 20,
    LIMITER_WAIT_UPON_DEPLETION: 10000,
    LIMITER_MAX_CONCURRENT: 1,
    LIMITER_MIN_TIME: 50,
};

// constructor
// with api key
const onfleet = new Onfleet('test-api-key');

// with api key, timeout
new Onfleet('test-api-key', 20000);
// with api key, timeout, bottleneck options
new Onfleet('test-api-key', 20000, bottleneckOptions);
// with api key, timeout, bottleneck options, base URL
new Onfleet('test-api-key', 20000, bottleneckOptions, 'http://test.com');

onfleet.verifyKey().then().catch();

const testAddress = {
    city: 'Toronto',
    country: 'Canada',
    name: 'Test Destination',
    number: '100',
    street: 'Test Street Blvd.',
};

async function testTasks(onfleet: Onfleet) {
    // test tasks.get
    await onfleet.tasks.get('fake_task_id');
    await onfleet.tasks.get({ from: 1455072025000 });
    await onfleet.tasks.get({ from: 145507202500, lastId: 'fake_task_id' });
    await onfleet.tasks.get('fake_task_id', 'shortId');

    // test tasks.create
    const dummyTask = await onfleet.tasks.create({
        recipients: ['fake_recipient_id'],
        destination: 'fake_destination_id',
    });

    const taskCreated = await onfleet.tasks.create({
        recipients: ['<recipient-id-1>', '<recipient-id-2>'],
        destination: {
            address: testAddress,
        },
        container: {
            type: 'TEAM',
            team: 'teamId',
        },
    });

    if (taskCreated.container.type === 'TEAM') {
        taskCreated.container.team === 'teamId';
    }

    // test tasks.update
    const taskUpdated = await onfleet.tasks.update(dummyTask.id, {
        notes: 'Some test task notes',
        container: {
            type: 'WORKER',
            worker: 'workerId',
        },
    });

    if (taskUpdated.container.type === 'WORKER') {
        taskUpdated.container.worker === 'workerId';
    }

    // test tasks.update barcodes
    await onfleet.tasks.update(dummyTask.id, {
        notes: 'Some test task notes',
        barcodes: [
            { data: 'aGVsbG8gd29ybGQh' },
            { blockCompletion: true },
            { data: 'aGVsbG8gd29ybGQh', blockCompletion: true },
        ],
    });

    // test tasks.clone
    const clonedDummyTask = await onfleet.tasks.clone(dummyTask.id);

    if (dummyTask.barcodes && dummyTask.barcodes.required[0].blockCompletion) {
        const required = dummyTask.barcodes.required[0];
        const captured = dummyTask.barcodes.captured[0];
        if (
            required.data === captured.data &&
            captured.wasRequested === required.blockCompletion &&
            captured.symbology === 'CODE39'
        ) {
            captured.location = [-122.42855072021484, 37.78808138412046];
            captured.id = 'ku0fpiCqJPC25h3W0cnfgqNn';
            captured.time = Date.now();
        }
    }

    // test tasks.delete
    await onfleet.tasks.deleteOne(clonedDummyTask.id);

    // test tasks.forceComplete
    await onfleet.tasks.forceComplete(dummyTask.id);

    // test tasks.matchMetadata
    await onfleet.tasks.matchMetadata([
        {
            name: 'test',
            type: 'boolean',
            value: 'test',
        },
    ]);
}

async function testDestination() {
    // test destination.create
    const testDestination = await onfleet.destinations.create({
        address: testAddress,
    });

    // test destination.get
    await onfleet.destinations.get(testDestination.id);

    // test destination.matchMetadata
    await onfleet.destinations.matchMetadata([
        {
            name: 'test',
            type: 'boolean',
            value: 'test',
        },
    ]);
}

async function testRecipient() {
    const testRecipient = await onfleet.recipients.create({
        name: 'Test User',
        phone: '+1-416-555-5555',
        notes: 'Test notes',
        skipSMSNotifications: true,
        skipPhoneNumberValidation: false,
    });

    // test recipient.get
    await onfleet.recipients.get(testRecipient.id);
    await onfleet.recipients.get('Test User', 'name');
    await onfleet.recipients.get('+1-416-555-5555', 'phone');

    // test recipient.update
    await onfleet.recipients.update(testRecipient.id, { notes: 'Updated notes' });

    // test recipient.matchMetadata
    await onfleet.recipients.matchMetadata([
        {
            name: 'test',
            type: 'boolean',
            value: 'test',
        },
    ]);
}

async function testHubs() {
    // test hubs.create
    await onfleet.hubs.create({
        address: testAddress,
        name: 'test-hub',
        team: [],
    });
}

async function testTeams() {
    // test teams.autoDispatch
    await onfleet.teams.autoDispatch('team-id', {
        maxAllowedDelay: 10,
        maxTasksPerRoute: 5,
        routeEnd: 'teams://DEFAULT',
        scheduleTimeWindow: [0, 6],
        serviceTime: 2,
        taskTimeWindow: [0, 4],
    });

    // test teams.getWorkerEta
    await onfleet.teams.getWorkerEta('worked-id', {
        dropoffLocation: '-122.2442512,37.8097414',
        pickupLocation: '-122.2514556,37.7577242',
        pickupTime: 1614895847,
        restrictedVehicleTypes: 'CAR',
        serviceTime: 300,
    });
}

async function testWorkers() {
    // test workers.matchMetadata
    await onfleet.workers.matchMetadata([
        {
            name: 'test',
            type: 'boolean',
            value: 'test',
        },
    ]);
}
