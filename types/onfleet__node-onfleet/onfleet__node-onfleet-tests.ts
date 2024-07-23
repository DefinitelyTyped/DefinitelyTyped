import Onfleet = require("@onfleet/node-onfleet");
import Webhook = require("@onfleet/node-onfleet/Resources/Webhooks");

const bottleneckOptions = {
    LIMITER_RESERVOIR: 20,
    LIMITER_WAIT_UPON_DEPLETION: 10000,
    LIMITER_MAX_CONCURRENT: 1,
    LIMITER_MIN_TIME: 50,
};

// constructor
// with api key
const onfleet = new Onfleet("test-api-key");

// with api key, timeout
new Onfleet("test-api-key", 20000);
// with api key, timeout, bottleneck options
new Onfleet("test-api-key", 20000, bottleneckOptions);
// with api key, timeout, bottleneck options, base URL
new Onfleet("test-api-key", 20000, bottleneckOptions, "http://test.com");
// with api key, timeout, bottleneck options, base URL, default path
new Onfleet("test-api-key", 20000, bottleneckOptions, "http://test.com", "/api");
// with api key, timeout, bottleneck options, base URL, default path, api version
new Onfleet("test-api-key", 20000, bottleneckOptions, "http://test.com", "/api", "/v5");

onfleet.verifyKey().then().catch();

const testAddress = {
    city: "Toronto",
    country: "Canada",
    name: "Test Destination",
    number: "100",
    street: "Test Street Blvd.",
};

async function testTasks(onfleet: Onfleet) {
    // test tasks.get
    const task = await onfleet.tasks.get("fake_task_id");
    // test tasks.get GetTaskResult props
    task.estimatedCompletionTime;
    task.eta;
    task.trackingViewed;
    task.completionDetails.notes;
    task.completionDetails.success;
    task.completionDetails.photoUploadId;
    task.completionDetails.photoUploadIds;
    task.completionDetails.signatureUploadId;
    if (task.customFields) {
        for (const customField of task.customFields) {
            customField.description;
            customField.asArray;
            customField.visibility;
            customField.editability;
            customField.key;
            customField.name;
            customField.type;
            customField.contexts;
            customField.value;
        }
    }
    const result = await onfleet.tasks.get({ from: 1455072025000 });
    for (const resultTask of result.tasks) {
        resultTask.pickupTask;
        resultTask.eta;
    }
    if (result.lastId) {
        await onfleet.tasks.get({ from: 1455072025000, lastId: result.lastId });
    }
    await onfleet.tasks.get("fake_task_id", "shortId");

    // test tasks.create
    const dummyTask = await onfleet.tasks.create({
        recipients: ["fake_recipient_id"],
        destination: "fake_destination_id",
    });

    // test tasks.batchCreate
    const dummyTasks = await onfleet.tasks.batchCreate({
        tasks: [
            {
                recipients: ["fake_recipient_id"],
                destination: "fake_destination_id",
            },
            {
                recipients: ["fake_recipient_id"],
                destination: "fake_destination_id",
            },
        ],
    });

    // test batchCreate async
    const dummyTasksAsync = await onfleet.tasks.batchCreateAsync({
        tasks: [
            {
                recipients: ["fake_recipient_id"],
                destination: "fake_destination_id",
            },
            {
                recipients: ["fake_recipient_id"],
                destination: "fake_destination_id",
            },
        ],
    });

    // test getBatch async
    await onfleet.tasks.getBatch(dummyTasksAsync.jobId);

    // test tasks.autoAssign
    await onfleet.tasks.autoAssign({
        tasks: dummyTasks.tasks.map(task => task.id),
    });

    const taskCreated = await onfleet.tasks.create({
        recipients: ["<recipient-id-1>", "<recipient-id-2>"],
        destination: {
            address: testAddress,
        },
        container: {
            type: "TEAM",
            team: "teamId",
        },
        customFields: [
            {
                key: "newTest",
                value: 1234,
            },
            {
                key: "test",
                value: "order 123",
            },
        ],
    });

    if (taskCreated.container.type === "TEAM") {
        taskCreated.container.team === "teamId";
    }

    // test tasks.update
    const taskUpdated = await onfleet.tasks.update(dummyTask.id, {
        notes: "Some test task notes",
        container: {
            type: "WORKER",
            worker: "workerId",
        },
        customFields: [
            {
                key: "newTest",
                value: 1234,
            },
            {
                key: "test",
                value: "order 123",
            },
        ],
    });

    if (taskUpdated.container.type === "WORKER") {
        taskUpdated.container.worker === "workerId";
    }

    // test tasks.update barcodes
    await onfleet.tasks.update(dummyTask.id, {
        notes: "Some test task notes",
        barcodes: [
            { data: "aGVsbG8gd29ybGQh" },
            { blockCompletion: true },
            { data: "aGVsbG8gd29ybGQh", blockCompletion: true },
        ],
        customFields: [
            {
                key: "newTest",
                value: 1234,
            },
            {
                key: "test",
                value: "order 123",
            },
        ],
    });

    // test tasks.clone
    const clonedDummyTask = await onfleet.tasks.clone(dummyTask.id);

    if (dummyTask.barcodes && dummyTask.barcodes.required[0].blockCompletion) {
        const required = dummyTask.barcodes.required[0];
        const captured = dummyTask.barcodes.captured[0];
        if (
            required.data === captured.data
            && captured.wasRequested === required.blockCompletion
            && captured.symbology === "CODE39"
        ) {
            captured.location = [-122.42855072021484, 37.78808138412046];
            captured.id = "ku0fpiCqJPC25h3W0cnfgqNn";
            captured.time = Date.now();
        }
    }

    // test tasks.delete
    await onfleet.tasks.deleteOne(clonedDummyTask.id);

    // test tasks.forceComplete
    await onfleet.tasks.forceComplete(dummyTask.id, { completionDetails: { success: true } });
    await onfleet.tasks.forceComplete(dummyTask.id, { completionDetails: { success: false } });
    await onfleet.tasks.forceComplete(dummyTask.id, { completionDetails: { success: true, notes: "test note" } });

    // test tasks.matchMetadata
    await onfleet.tasks.matchMetadata([
        {
            name: "test",
            type: "boolean",
            value: "test",
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
            name: "test",
            type: "boolean",
            value: "test",
        },
    ]);
}

async function testRecipient() {
    const testRecipient = await onfleet.recipients.create({
        name: "Test User",
        phone: "+1-416-555-5555",
        notes: "Test notes",
        skipSMSNotifications: true,
        skipPhoneNumberValidation: false,
    });

    // test recipient.get
    await onfleet.recipients.get(testRecipient.id);
    await onfleet.recipients.get("Test User", "name");
    await onfleet.recipients.get("+1-416-555-5555", "phone");

    // test recipient.update
    await onfleet.recipients.update(testRecipient.id, { notes: "Updated notes" });

    // test recipient.matchMetadata
    await onfleet.recipients.matchMetadata([
        {
            name: "test",
            type: "boolean",
            value: "test",
        },
    ]);
}

async function testHubs() {
    // test hubs.create
    await onfleet.hubs.create({
        address: testAddress,
        name: "test-hub",
        team: [],
    });
}

async function testTeams() {
    // test teams.autoDispatch
    await onfleet.teams.autoDispatch("team-id", {
        maxAllowedDelay: 10,
        maxTasksPerRoute: 5,
        routeEnd: "teams://DEFAULT",
        scheduleTimeWindow: [0, 6],
        serviceTime: 2,
        taskTimeWindow: [0, 4],
    });

    // test teams.getWorkerEta
    await onfleet.teams.getWorkerEta("worked-id", {
        dropoffLocation: "-122.2442512,37.8097414",
        pickupLocation: "-122.2514556,37.7577242",
        pickupTime: 1614895847,
        restrictedVehicleTypes: "CAR",
        serviceTime: 300,
    });
}

async function testWorkers() {
    // test workers.matchMetadata
    await onfleet.workers.matchMetadata([
        {
            name: "test",
            type: "boolean",
            value: "test",
        },
    ]);
}

function testWebhooks() {
    const taskCreatedPayload: Webhook.Payload.TaskCreatedPayload = {
        actionContext: {
            id: "vjw*RDMKDljKVDve1Vtcplgu",
            type: "ADMIN",
        },
        adminId: "vjw*RDMKDljKVDve1Vtcplgu",
        data: {
            task: {
                appearance: {
                    triangleColor: null,
                },
                completeAfter: 1612987200000,
                completeBefore: 1613008800000,
                completionDetails: {
                    actions: [],
                    events: [],
                    failureNotes: "",
                    failureReason: "NONE",
                    firstLocation: [],
                    lastLocation: [],
                    time: null,
                    unavailableAttachments: [],
                },
                container: {
                    type: "WORKER",
                    worker: "COwfwH~Zogm1LXIZYbPlLAyw",
                },
                creator: "vjw*RDMKDljKVDve1Vtcplgu",
                delayTime: null,
                dependencies: [],
                destination: {
                    address: {
                        apartment: "",
                        city: "Anaheim",
                        country: "United States",
                        name: "Honda Center",
                        number: "2695",
                        postalCode: "92806",
                        state: "California",
                        street: "East Katella Avenue",
                    },
                    id: "I5rMyWx4YHDcMGIwfD3TL8nf",
                    location: [
                        -117.8764687,
                        33.8078476,
                    ],
                    metadata: [],
                    notes: "This is a destination note",
                    timeCreated: 1613002583000,
                    timeLastModified: 1613002583913,
                },
                estimatedArrivalTime: null,
                estimatedCompletionTime: null,
                executor: "nYrkNP6jZMSKgBwG9qG7ci3J",
                feedback: [],
                id: "txiK2xHBIaUwAKB~BJrjscKu",
                identity: {
                    checksum: null,
                    failedScanCount: 0,
                },
                merchant: "nYrkNP6jZMSKgBwG9qG7ci3J",
                metadata: [],
                notes: "This is a Task note",
                organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                overrides: {},
                pickupTask: false,
                quantity: 1,
                recipients: [
                    {
                        id: "A~pBTrc5~dTMBBImswg7U4YT",
                        metadata: [],
                        name: "Test User One",
                        notes: "This is a recipient note",
                        organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                        phone: "+17145554231",
                        skipSMSNotifications: false,
                        timeCreated: 1613002583000,
                        timeLastModified: 1613002583931,
                    },
                ],
                serviceTime: 3,
                shortId: "fab829cf",
                state: 1,
                timeCreated: 1613002583000,
                timeLastModified: 1613002583970,
                trackingURL: "https://onf.lt/fab829cf81",
                trackingViewed: false,
                worker: "COwfwH~Zogm1LXIZYbPlLAyw",
            },
        },
        taskId: "txiK2xHBIaUwAKB~BJrjscKu",
        time: 1613002584051,
        triggerId: 6,
        triggerName: "taskCreated",
        workerId: null,
    };

    const taskUpdatedPayload: Webhook.Payload.TaskUpdatedPayload = {
        taskId: "w7CcGpzsMnEiUg1AqgxQbPE~",
        workerId: "ZxcnkJi~79nonYaMTQ960Mg2",
        actionContext: {
            type: "ADMIN",
            id: "vjw*RDMKDljKVDve1Vtcplgu",
        },
        triggerId: 7,
        triggerName: "taskUpdated",
        adminId: "vjw*RDMKDljKVDve1Vtcplgu",
        data: {
            task: {
                id: "w7CcGpzsMnEiUg1AqgxQbPE~",
                timeCreated: 1627329316000,
                timeLastModified: 1627329522544,
                organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                shortId: "c9ed4d00",
                trackingURL: "https://onf.lt/c9ed4d00",
                worker: "ZxcnkJi~79nonYaMTQ960Mg2",
                merchant: "nYrkNP6jZMSKgBwG9qG7ci3J",
                executor: "nYrkNP6jZMSKgBwG9qG7ci3J",
                creator: "vjw*RDMKDljKVDve1Vtcplgu",
                dependencies: [],
                state: 1,
                completeAfter: null,
                completeBefore: null,
                pickupTask: false,
                notes: "This is updated Notes",
                completionDetails: {
                    failureNotes: "",
                    failureReason: "NONE",
                    events: [],
                    actions: [],
                    time: null,
                    firstLocation: [],
                    lastLocation: [],
                    unavailableAttachments: [],
                },
                feedback: [],
                metadata: [],
                overrides: {},
                quantity: 0,
                serviceTime: 0,
                identity: {
                    failedScanCount: 0,
                    checksum: null,
                },
                appearance: {
                    triangleColor: null,
                },
                container: {
                    type: "WORKER",
                    worker: "ZxcnkJi~79nonYaMTQ960Mg2",
                },
                trackingViewed: false,
                recipients: [],
                estimatedCompletionTime: 1627330894582,
                estimatedArrivalTime: 1627330592582,
                destination: {
                    id: "7i9PoiinkxWtWbytv1HLY9SS",
                    timeCreated: 1627329316000,
                    timeLastModified: 1627329522522,
                    location: [
                        -117.8764687,
                        33.8078476,
                    ],
                    address: {
                        apartment: "",
                        state: "California",
                        postalCode: "92806",
                        number: "2695",
                        street: "East Katella Avenue",
                        city: "Anaheim",
                        country: "United States",
                        name: "Honda Center",
                    },
                    notes: "",
                    metadata: [],
                    googlePlaceId: null,
                    warnings: [],
                },
                delayTime: null,
            },
            worker: {
                id: "ZxcnkJi~79nonYaMTQ960Mg2",
                timeCreated: 1618618787000,
                timeLastModified: 1627329496627,
                organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                name: "Red Ranger",
                displayName: "",
                phone: "+17145555768",
                activeTask: null,
                tasks: [
                    "w7CcGpzsMnEiUg1AqgxQbPE~",
                ],
                onDuty: true,
                timeLastSeen: 1627329498940,
                capacity: 0,
                userData: {
                    appVersion: "2.1.13.2",
                    batteryLevel: 0.65,
                    deviceDescription: "Google Pixel 2 (Android 11)",
                    platform: "ANDROID",
                },
                accountStatus: "ACCEPTED",
                metadata: [],
                timezone: "America/Los_Angeles",
                imageUrl: null,
                teams: [
                    "K3FXFtJj2FtaO2~H60evRrDc",
                ],
                delayTime: null,
                location: [
                    -117.8954515,
                    33.9131014,
                ],
                hasRecentlyUsedSpoofedLocations: false,
                vehicle: {
                    id: "vSRLJ80Aw3DljIh1Rj9obLtn",
                    type: "CAR",
                    description: "",
                    licensePlate: "",
                    color: "",
                    timeLastModified: 1625065516261,
                },
            },
        },
        time: 1627329522593,
    };

    const taskUpdatedWithUnavailablePhotoIdsPayload: Webhook.Payload.TaskUpdatedPayload = {
        taskId: "w7CcGpzsMnEiUg1AqgxQbPE~",
        actionContext: {
            type: "WORKER",
            id: "ZxcnkJi~79nonYaMTQ960Mg2",
        },
        triggerId: 7,
        triggerName: "taskUpdated",
        workerId: "ZxcnkJi~79nonYaMTQ960Mg2",
        adminId: null,
        data: {
            task: {
                id: "w7CcGpzsMnEiUg1AqgxQbPE~",
                timeCreated: 1627329316000,
                timeLastModified: 1627329761036,
                organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                shortId: "c9ed4d00",
                trackingURL: "https://onf.lt/c9ed4d00",
                worker: "ZxcnkJi~79nonYaMTQ960Mg2",
                merchant: "nYrkNP6jZMSKgBwG9qG7ci3J",
                executor: "nYrkNP6jZMSKgBwG9qG7ci3J",
                creator: "vjw*RDMKDljKVDve1Vtcplgu",
                dependencies: [],
                state: 3,
                completeAfter: null,
                completeBefore: null,
                pickupTask: false,
                notes: "This is updated Notes",
                completionDetails: {
                    failureNotes: "",
                    failureReason: "NONE",
                    notes: "signed",
                    signatureText: "John Smith",
                    success: true,
                    time: 1627329761009,
                    events: [
                        {
                            name: "start",
                            time: 1627329672397,
                        },
                    ],
                    actions: [],
                    signatureUploadId: null,
                    photoUploadId: "89f81c56036bbfc2469541e1",
                    photoUploadIds: [
                        "89f81c56036bbfc2469541e1",
                    ],
                    firstLocation: [],
                    lastLocation: [],
                    unavailableAttachments: [
                        {
                            status: "UNAVAILABLE",
                            attachmentId: "e8384b6af2a6ce3454c00616",
                            attachmentType: "SIGNATURE",
                        },
                    ],
                },
                feedback: [],
                metadata: [],
                overrides: {},
                quantity: 0,
                serviceTime: 0,
                identity: {
                    failedScanCount: 0,
                    checksum: null,
                },
                appearance: {
                    triangleColor: null,
                },
                trackingViewed: false,
                recipients: [],
                estimatedCompletionTime: null,
                estimatedArrivalTime: null,
                delayTime: null,
                destination: {
                    id: "7i9PoiinkxWtWbytv1HLY9SS",
                    timeCreated: 1627329316000,
                    timeLastModified: 1627329522522,
                    location: [
                        -117.8764687,
                        33.8078476,
                    ],
                    address: {
                        apartment: "",
                        state: "California",
                        postalCode: "92806",
                        number: "2695",
                        street: "East Katella Avenue",
                        city: "Anaheim",
                        country: "United States",
                        name: "Honda Center",
                    },
                    notes: "",
                    metadata: [],
                    googlePlaceId: null,
                    warnings: [],
                },
            },
        },
        time: 1627329772583,
    };

    const taskUpdatedWithUploadedPhotoAndSignatureIdPayload: Webhook.Payload.TaskUpdatedPayload = {
        taskId: "w7CcGpzsMnEiUg1AqgxQbPE~",
        actionContext: {
            type: "WORKER",
            id: "ZxcnkJi~79nonYaMTQ960Mg2",
        },
        triggerId: 7,
        triggerName: "taskUpdated",
        workerId: "ZxcnkJi~79nonYaMTQ960Mg2",
        adminId: null,
        data: {
            task: {
                id: "w7CcGpzsMnEiUg1AqgxQbPE~",
                timeCreated: 1627329316000,
                timeLastModified: 1627329761036,
                organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                shortId: "c9ed4d00",
                trackingURL: "https://onf.lt/c9ed4d00",
                worker: "ZxcnkJi~79nonYaMTQ960Mg2",
                merchant: "nYrkNP6jZMSKgBwG9qG7ci3J",
                executor: "nYrkNP6jZMSKgBwG9qG7ci3J",
                creator: "vjw*RDMKDljKVDve1Vtcplgu",
                dependencies: [],
                state: 3,
                completeAfter: null,
                completeBefore: null,
                pickupTask: false,
                notes: "This is updated Notes",
                completionDetails: {
                    failureNotes: "",
                    failureReason: "NONE",
                    notes: "signed",
                    signatureText: "John Smith",
                    success: true,
                    time: 1627329761009,
                    events: [
                        {
                            name: "start",
                            time: 1627329672397,
                        },
                    ],
                    actions: [],
                    signatureUploadId: "e8384b6af2a6ce3454c00616",
                    photoUploadId: "89f81c56036bbfc2469541e1",
                    photoUploadIds: [
                        "89f81c56036bbfc2469541e1",
                    ],
                    firstLocation: [],
                    lastLocation: [],
                    unavailableAttachments: [],
                },
                feedback: [],
                metadata: [],
                overrides: {},
                quantity: 0,
                serviceTime: 0,
                identity: {
                    failedScanCount: 0,
                    checksum: null,
                },
                appearance: {
                    triangleColor: null,
                },
                trackingViewed: false,
                recipients: [],
                estimatedCompletionTime: null,
                estimatedArrivalTime: null,
                delayTime: null,
                destination: {
                    id: "7i9PoiinkxWtWbytv1HLY9SS",
                    timeCreated: 1627329316000,
                    timeLastModified: 1627329522522,
                    location: [
                        -117.8764687,
                        33.8078476,
                    ],
                    address: {
                        apartment: "",
                        state: "California",
                        postalCode: "92806",
                        number: "2695",
                        street: "East Katella Avenue",
                        city: "Anaheim",
                        country: "United States",
                        name: "Honda Center",
                    },
                    notes: "",
                    metadata: [],
                    googlePlaceId: null,
                    warnings: [],
                },
            },
        },
        time: 1627329772583,
    };

    const taskClonedPayload: Webhook.Payload.TaskClonedPayload = {
        actionContext: {
            id: "vjw*RDMKDljKVDve1Vtcplgu",
            type: "ADMIN",
        },
        adminId: "vjw*RDMKDljKVDve1Vtcplgu",
        data: {
            task: {
                appearance: {
                    triangleColor: null,
                },
                completeAfter: null,
                completeBefore: 1613008800000,
                completionDetails: {
                    actions: [],
                    events: [],
                    failureNotes: "",
                    failureReason: "NONE",
                    firstLocation: [],
                    lastLocation: [],
                    time: null,
                    unavailableAttachments: [],
                },
                container: {
                    organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                    type: "ORGANIZATION",
                },
                creator: "vjw*RDMKDljKVDve1Vtcplgu",
                delayTime: null,
                dependencies: [],
                destination: {
                    address: {
                        apartment: "",
                        city: "Anaheim",
                        country: "United States",
                        name: "Honda Center",
                        number: "2695",
                        postalCode: "92806",
                        state: "California",
                        street: "East Katella Avenue",
                    },
                    id: "pJcfO7NRJaor~Tl8ggBHrveJ",
                    location: [
                        -117.8764687,
                        33.8078476,
                    ],
                    metadata: [],
                    notes: "This is a destination note",
                    timeCreated: 1613004115000,
                    timeLastModified: 1613004115635,
                },
                estimatedArrivalTime: null,
                estimatedCompletionTime: null,
                executor: "nYrkNP6jZMSKgBwG9qG7ci3J",
                feedback: [],
                id: "3C0W9uLyWC5R4V5fuj7bzJpk",
                identity: {
                    checksum: null,
                    failedScanCount: 0,
                },
                merchant: "nYrkNP6jZMSKgBwG9qG7ci3J",
                metadata: [],
                notes: "This is a Task note",
                organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                overrides: {},
                pickupTask: false,
                quantity: 1,
                recipients: [
                    {
                        id: "A~pBTrc5~dTMBBImswg7U4YT",
                        metadata: [],
                        name: "Test User One",
                        notes: "This is a recipient note",
                        organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                        phone: "+17145554231",
                        skipSMSNotifications: false,
                        timeCreated: 1613002583000,
                        timeLastModified: 1613002583931,
                    },
                ],
                serviceTime: 3,
                shortId: "9ad82b23",
                sourceTaskId: "txiK2xHBIaUwAKB~BJrjscKu",
                state: 0,
                timeCreated: 1613004116000,
                timeLastModified: 1613004116038,
                trackingURL: "https://onf.lt/9ad82b2380",
                trackingViewed: false,
                worker: null,
            },
        },
        taskId: "3C0W9uLyWC5R4V5fuj7bzJpk",
        time: 1613004116101,
        triggerId: 13,
        triggerName: "taskCloned",
        workerId: null,
    };

    const taskAssignedPayload: Webhook.Payload.TaskAssignedPayload = {
        actionContext: {
            id: "vjw*RDMKDljKVDve1Vtcplgu",
            type: "ADMIN",
        },
        adminId: "vjw*RDMKDljKVDve1Vtcplgu",
        data: {
            task: {
                appearance: {
                    triangleColor: null,
                },
                completeAfter: 1612987200000,
                completeBefore: 1613008800000,
                completionDetails: {
                    actions: [],
                    events: [],
                    failureNotes: "",
                    failureReason: "NONE",
                    firstLocation: [],
                    lastLocation: [],
                    time: null,
                    unavailableAttachments: [],
                },
                container: {
                    type: "WORKER",
                    worker: "COwfwH~Zogm1LXIZYbPlLAyw",
                },
                creator: "vjw*RDMKDljKVDve1Vtcplgu",
                delayTime: null,
                dependencies: [],
                destination: {
                    address: {
                        apartment: "",
                        city: "Anaheim",
                        country: "United States",
                        name: "Honda Center",
                        number: "2695",
                        postalCode: "92806",
                        state: "California",
                        street: "East Katella Avenue",
                    },
                    id: "I5rMyWx4YHDcMGIwfD3TL8nf",
                    location: [
                        -117.8764687,
                        33.8078476,
                    ],
                    metadata: [],
                    notes: "This is a destination note",
                    timeCreated: 1613002583000,
                    timeLastModified: 1613002583913,
                },
                estimatedArrivalTime: null,
                estimatedCompletionTime: null,
                executor: "nYrkNP6jZMSKgBwG9qG7ci3J",
                feedback: [],
                id: "txiK2xHBIaUwAKB~BJrjscKu",
                identity: {
                    checksum: null,
                    failedScanCount: 0,
                },
                merchant: "nYrkNP6jZMSKgBwG9qG7ci3J",
                metadata: [],
                notes: "This is a Task note",
                organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                overrides: {},
                pickupTask: false,
                quantity: 1,
                recipients: [
                    {
                        id: "A~pBTrc5~dTMBBImswg7U4YT",
                        metadata: [],
                        name: "Test User One",
                        notes: "This is a recipient note",
                        organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                        phone: "+17145554231",
                        skipSMSNotifications: false,
                        timeCreated: 1613002583000,
                        timeLastModified: 1613002583931,
                    },
                ],
                serviceTime: 3,
                shortId: "fab829cf",
                state: 1,
                timeCreated: 1613002583000,
                timeLastModified: 1613004164514,
                trackingURL: "https://onf.lt/fab829cf81",
                trackingViewed: false,
                worker: "COwfwH~Zogm1LXIZYbPlLAyw",
            },
            worker: {
                accountStatus: "ACCEPTED",
                activeTask: null,
                capacity: 3,
                delayTime: null,
                displayName: "",
                hasRecentlyUsedSpoofedLocations: false,
                id: "COwfwH~Zogm1LXIZYbPlLAyw",
                imageUrl: null,
                location: [
                    -117.8901118,
                    33.893365,
                ],
                metadata: [],
                name: "Shured Shuanger",
                onDuty: true,
                organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                phone: "+17145555678",
                tasks: [
                    "txiK2xHBIaUwAKB~BJrjscKu",
                ],
                teams: [
                    "K3FXFtJj2FtaO2~H60evRrDc",
                ],
                timeCreated: 1585254830000,
                timeLastModified: 1613004164511,
                timeLastSeen: 1613004141332,
                timezone: "America/Los_Angeles",
                userData: {
                    appVersion: "2.1.11.1",
                    batteryLevel: 0.64,
                    deviceDescription: "Google Pixel 2 (Android 11)",
                    platform: "ANDROID",
                },
                vehicle: {
                    color: "",
                    description: "",
                    id: "Dib0eZfs*uJhJmWHKL~tExub",
                    licensePlate: "",
                    timeLastModified: 1612226873144,
                    type: "CAR",
                },
            },
        },
        taskId: "txiK2xHBIaUwAKB~BJrjscKu",
        time: 1613004164575,
        triggerId: 9,
        triggerName: "taskAssigned",
        workerId: "COwfwH~Zogm1LXIZYbPlLAyw",
    };

    const taskUnassignedPayload: Webhook.Payload.TaskUnassignedPayload = {
        actionContext: {
            id: "vjw*RDMKDljKVDve1Vtcplgu",
            type: "ADMIN",
        },
        adminId: "vjw*RDMKDljKVDve1Vtcplgu",
        data: {
            task: {
                appearance: {
                    triangleColor: null,
                },
                completeAfter: 1612987200000,
                completeBefore: 1613008800000,
                completionDetails: {
                    actions: [],
                    events: [],
                    failureNotes: "",
                    failureReason: "NONE",
                    firstLocation: [],
                    lastLocation: [],
                    time: null,
                    unavailableAttachments: [],
                },
                container: {
                    organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                    type: "ORGANIZATION",
                },
                creator: "vjw*RDMKDljKVDve1Vtcplgu",
                delayTime: null,
                dependencies: [],
                destination: {
                    address: {
                        apartment: "",
                        city: "Anaheim",
                        country: "United States",
                        name: "Honda Center",
                        number: "2695",
                        postalCode: "92806",
                        state: "California",
                        street: "East Katella Avenue",
                    },
                    id: "I5rMyWx4YHDcMGIwfD3TL8nf",
                    location: [
                        -117.8764687,
                        33.8078476,
                    ],
                    metadata: [],
                    notes: "This is a destination note",
                    timeCreated: 1613002583000,
                    timeLastModified: 1613002583913,
                },
                estimatedArrivalTime: null,
                estimatedCompletionTime: null,
                executor: "nYrkNP6jZMSKgBwG9qG7ci3J",
                feedback: [],
                id: "txiK2xHBIaUwAKB~BJrjscKu",
                identity: {
                    checksum: null,
                    failedScanCount: 0,
                },
                merchant: "nYrkNP6jZMSKgBwG9qG7ci3J",
                metadata: [],
                notes: "This is a Task note",
                organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                overrides: {},
                pickupTask: false,
                quantity: 1,
                recipients: [
                    {
                        id: "A~pBTrc5~dTMBBImswg7U4YT",
                        metadata: [],
                        name: "Test User One",
                        notes: "This is a recipient note",
                        organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                        phone: "+17145554231",
                        skipSMSNotifications: false,
                        timeCreated: 1613002583000,
                        timeLastModified: 1613002583931,
                    },
                ],
                serviceTime: 3,
                shortId: "fab829cf",
                state: 0,
                timeCreated: 1613002583000,
                timeLastModified: 1613003963558,
                trackingURL: "https://onf.lt/fab829cf81",
                trackingViewed: false,
                worker: null,
            },
        },
        taskId: "txiK2xHBIaUwAKB~BJrjscKu",
        time: 1613003963647,
        triggerId: 10,
        triggerName: "taskUnassigned",
        workerId: null,
    };

    const taskDeletedPayload: Webhook.Payload.TaskDeletedPayload = {
        actionContext: {
            id: "vjw*RDMKDljKVDve1Vtcplgu",
            type: "ADMIN",
        },
        adminId: "vjw*RDMKDljKVDve1Vtcplgu",
        data: {
            task: {
                appearance: {
                    triangleColor: null,
                },
                completeAfter: null,
                completeBefore: 1613008800000,
                completionDetails: {
                    actions: [],
                    events: [],
                    failureNotes: "",
                    failureReason: "NONE",
                    firstLocation: [],
                    lastLocation: [],
                    time: null,
                    unavailableAttachments: [],
                },
                container: {
                    organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                    type: "ORGANIZATION",
                },
                creator: "vjw*RDMKDljKVDve1Vtcplgu",
                dependencies: [],
                destination: {
                    address: {
                        apartment: "",
                        city: "Anaheim",
                        country: "United States",
                        name: "Honda Center",
                        number: "2695",
                        postalCode: "92806",
                        state: "California",
                        street: "East Katella Avenue",
                    },
                    id: "pJcfO7NRJaor~Tl8ggBHrveJ",
                    location: [
                        -117.8764687,
                        33.8078476,
                    ],
                    metadata: [],
                    notes: "This is a destination note",
                    timeCreated: 1613004115000,
                    timeLastModified: 1613004115635,
                },
                executor: "nYrkNP6jZMSKgBwG9qG7ci3J",
                feedback: [],
                id: "3C0W9uLyWC5R4V5fuj7bzJpk",
                identity: {
                    checksum: null,
                    failedScanCount: 0,
                },
                merchant: "nYrkNP6jZMSKgBwG9qG7ci3J",
                metadata: [],
                notes: "This is a Task note",
                organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                overrides: {},
                pickupTask: false,
                quantity: 1,
                recipients: [
                    {
                        id: "A~pBTrc5~dTMBBImswg7U4YT",
                        metadata: [],
                        name: "Test User One",
                        notes: "This is a recipient note",
                        organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                        phone: "+17145554231",
                        skipSMSNotifications: false,
                        timeCreated: 1613002583000,
                        timeLastModified: 1613002583931,
                    },
                ],
                serviceTime: 3,
                shortId: "9ad82b23",
                sourceTaskId: "txiK2xHBIaUwAKB~BJrjscKu",
                state: 0,
                timeCreated: 1613004116000,
                timeLastModified: 1613004116038,
                trackingURL: "https://onf.lt/9ad82b2380",
                trackingViewed: false,
                worker: null,
            },
        },
        taskId: "3C0W9uLyWC5R4V5fuj7bzJpk",
        time: 1613004265027,
        triggerId: 8,
        triggerName: "taskDeleted",
        workerId: null,
    };

    const taskStartedPayload: Webhook.Payload.TaskStartedPayload = {
        actionContext: {
            id: "COwfwH~Zogm1LXIZYbPlLAyw",
            type: "WORKER",
        },
        adminId: null,
        data: {
            task: {
                appearance: {
                    triangleColor: null,
                },
                completeAfter: 1612987200000,
                completeBefore: 1613008800000,
                completionDetails: {
                    actions: [],
                    events: [],
                    failureNotes: "",
                    failureReason: "NONE",
                    firstLocation: [],
                    lastLocation: [],
                    time: null,
                    unavailableAttachments: [],
                },
                container: {
                    type: "WORKER",
                    worker: "COwfwH~Zogm1LXIZYbPlLAyw",
                },
                creator: "vjw*RDMKDljKVDve1Vtcplgu",
                dependencies: [],
                destination: {
                    address: {
                        apartment: "",
                        city: "Anaheim",
                        country: "United States",
                        name: "Honda Center",
                        number: "2695",
                        postalCode: "92806",
                        state: "California",
                        street: "East Katella Avenue",
                    },
                    id: "I5rMyWx4YHDcMGIwfD3TL8nf",
                    location: [
                        -117.8764687,
                        33.8078476,
                    ],
                    metadata: [],
                    notes: "This is a destination note",
                    timeCreated: 1613002583000,
                    timeLastModified: 1613002583913,
                },
                estimatedArrivalTime: null,
                estimatedCompletionTime: null,
                executor: "nYrkNP6jZMSKgBwG9qG7ci3J",
                feedback: [],
                id: "txiK2xHBIaUwAKB~BJrjscKu",
                identity: {
                    checksum: null,
                    failedScanCount: 0,
                },
                merchant: "nYrkNP6jZMSKgBwG9qG7ci3J",
                metadata: [],
                notes: "This is a Task note",
                organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                overrides: {},
                pickupTask: false,
                quantity: 1,
                recipients: [
                    {
                        id: "A~pBTrc5~dTMBBImswg7U4YT",
                        metadata: [],
                        name: "Test User One",
                        notes: "This is a recipient note",
                        organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                        phone: "+17145554231",
                        skipSMSNotifications: false,
                        timeCreated: 1613002583000,
                        timeLastModified: 1613002583931,
                    },
                ],
                serviceTime: 3,
                shortId: "fab829cf",
                state: 2,
                timeCreated: 1613002583000,
                timeLastModified: 1613004361613,
                trackingURL: "https://onf.lt/fab829cf81",
                trackingViewed: false,
                worker: "COwfwH~Zogm1LXIZYbPlLAyw",
            },
        },
        taskId: "txiK2xHBIaUwAKB~BJrjscKu",
        time: 1613004361894,
        triggerId: 0,
        triggerName: "taskStarted",
        workerId: "COwfwH~Zogm1LXIZYbPlLAyw",
    };

    const taskFailedPayload: Webhook.Payload.TaskFailedPayload = {
        actionContext: {
            id: "COwfwH~Zogm1LXIZYbPlLAyw",
            type: "WORKER",
        },
        adminId: null,
        data: {
            task: {
                appearance: {
                    triangleColor: null,
                },
                completeAfter: 1612987200000,
                completeBefore: 1613008800000,
                completionDetails: {
                    actions: [],
                    events: [
                        {
                            name: "start",
                            time: 1613004361594,
                        },
                    ],
                    failureNotes: "",
                    failureReason: "UNABLE_TO_LOCATE",
                    firstLocation: [],
                    lastLocation: [],
                    notes: "this is a failure note",
                    photoUploadId: null,
                    photoUploadIds: [],
                    signatureUploadId: null,
                    success: false,
                    time: 1613004459779,
                    unavailableAttachments: [],
                },
                creator: "vjw*RDMKDljKVDve1Vtcplgu",
                delayTime: null,
                dependencies: [],
                destination: {
                    address: {
                        apartment: "",
                        city: "Anaheim",
                        country: "United States",
                        name: "Honda Center",
                        number: "2695",
                        postalCode: "92806",
                        state: "California",
                        street: "East Katella Avenue",
                    },
                    id: "I5rMyWx4YHDcMGIwfD3TL8nf",
                    location: [
                        -117.8764687,
                        33.8078476,
                    ],
                    metadata: [],
                    notes: "This is a destination note",
                    timeCreated: 1613002583000,
                    timeLastModified: 1613002583913,
                },
                estimatedArrivalTime: null,
                estimatedCompletionTime: null,
                executor: "nYrkNP6jZMSKgBwG9qG7ci3J",
                feedback: [],
                id: "txiK2xHBIaUwAKB~BJrjscKu",
                identity: {
                    checksum: null,
                    failedScanCount: 0,
                },
                merchant: "nYrkNP6jZMSKgBwG9qG7ci3J",
                metadata: [],
                notes: "This is a Task note",
                organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                overrides: {},
                pickupTask: false,
                quantity: 1,
                recipients: [
                    {
                        id: "A~pBTrc5~dTMBBImswg7U4YT",
                        metadata: [],
                        name: "Test User One",
                        notes: "This is a recipient note",
                        organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                        phone: "+17145554231",
                        skipSMSNotifications: false,
                        timeCreated: 1613002583000,
                        timeLastModified: 1613002583931,
                    },
                ],
                serviceTime: 3,
                shortId: "fab829cf",
                state: 3,
                timeCreated: 1613002583000,
                timeLastModified: 1613004459863,
                trackingURL: "https://onf.lt/fab829cf81",
                trackingViewed: false,
                worker: "COwfwH~Zogm1LXIZYbPlLAyw",
            },
        },
        taskId: "txiK2xHBIaUwAKB~BJrjscKu",
        time: 1613004460070,
        triggerId: 4,
        triggerName: "taskFailed",
        workerId: "COwfwH~Zogm1LXIZYbPlLAyw",
    };

    const taskCompletedPayload: Webhook.Payload.TaskCompletedPayload = {
        actionContext: {
            id: "ZxcnkJi~79nonYaMTQ960Mg2",
            type: "WORKER",
        },
        adminId: null,
        data: {
            task: {
                additionalQuantities: {
                    quantityA: 0,
                    quantityB: 0,
                    quantityC: 0,
                },
                appearance: {
                    triangleColor: null,
                },
                completeAfter: null,
                completeBefore: null,
                completionDetails: {
                    actions: [],
                    events: [
                        {
                            name: "start",
                            time: 1686611484893,
                        },
                    ],
                    failureNotes: "",
                    failureReason: "NONE",
                    firstLocation: [],
                    lastLocation: [],
                    notes: "",
                    photoUploadId: null,
                    photoUploadIds: [],
                    signatureUploadId: null,
                    success: true,
                    successNotes: "",
                    time: 1686611635677,
                    unavailableAttachments: [],
                },
                creator: "vjw*RDMKDljKVDve1Vtcplgu",
                delayTime: null,
                dependencies: [],
                destination: {
                    address: {
                        apartment: "",
                        city: "Los Angeles",
                        country: "United States",
                        number: "1000",
                        postalCode: "90012",
                        state: "California",
                        street: "Vin Scully Ave",
                    },
                    googlePlaceId: "ChIJdVYAVPnGwoAR3wmcg09VlJ4",
                    id: "QTxsobLHkNxLjc5HcAkMGYEd",
                    location: [
                        -118.2399583,
                        34.073851,
                    ],
                    metadata: [],
                    notes: "",
                    timeCreated: 1663896051000,
                    timeLastModified: 1663896051511,
                    useGPS: true,
                    warnings: [
                        "MISMATCH_NUMBER",
                    ],
                },
                estimatedArrivalTime: null,
                estimatedCompletionTime: null,
                executor: "nYrkNP6jZMSKgBwG9qG7ci3J",
                feedback: [],
                id: "kwKafWU5jRmzeOpazE8WE9Ye",
                identity: {
                    checksum:
                        "6741f297906eca390df1c0773b1f403edb8eb2942742f25fa877ef673f493aea42144543fcdfc501d42ff49986934e48f69d8a52edf74d0f87d2a41de7fd68dc",
                    dob: "1987-03-30T08:00:00.000Z",
                    failedScanCount: 0,
                    inputMethod: "scan",
                },
                merchant: "nYrkNP6jZMSKgBwG9qG7ci3J",
                metadata: [],
                notes: "Order test3",
                organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                overrides: {
                    recipientName: null,
                    recipientNotes: null,
                    recipientSkipSMSNotifications: null,
                    useMerchantForProxy: null,
                },
                pickupTask: false,
                quantity: 0,
                recipients: [
                    {
                        id: "7LecFRKJw7ExfyhBsi9h0NXW",
                        metadata: [],
                        name: "Mada Mada",
                        notes: "Notes do not change *edited* more new notes",
                        organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                        phone: "+17145554554",
                        skipSMSNotifications: true,
                        timeCreated: 1592005264000,
                        timeLastModified: 1679096559784,
                    },
                ],
                scanOnlyRequiredBarcodes: false,
                serviceTime: 0,
                shortId: "6055984c",
                state: 3,
                timeCreated: 1663896051000,
                timeLastModified: 1686611636712,
                trackingURL: "https://onf.lt/6055984c46",
                trackingViewed: false,
                worker: "ZxcnkJi~79nonYaMTQ960Mg2",
            },
        },
        taskId: "kwKafWU5jRmzeOpazE8WE9Ye",
        time: 1686611636796,
        triggerId: 3,
        triggerName: "taskCompleted",
        workerId: "ZxcnkJi~79nonYaMTQ960Mg2",
    };

    const taskDelayedPayload: Webhook.Payload.TaskDelayedPayload = {
        actionContext: null,
        adminId: null,
        data: {
            task: {
                appearance: {
                    triangleColor: null,
                },
                completeAfter: 1613160000000,
                completeBefore: 1613179800000,
                completionDetails: {
                    actions: [],
                    events: [],
                    failureNotes: "",
                    failureReason: "NONE",
                    firstLocation: [],
                    lastLocation: [],
                    time: null,
                    unavailableAttachments: [],
                },
                container: {
                    type: "WORKER",
                    worker: "COwfwH~Zogm1LXIZYbPlLAyw",
                },
                creator: "vjw*RDMKDljKVDve1Vtcplgu",
                dependencies: [],
                destination: {
                    address: {
                        apartment: "",
                        city: "Irvine",
                        country: "United States",
                        name: "University of California Irvine, Irvine, CA, USA",
                        number: "",
                        postalCode: "92697",
                        state: "California",
                        street: "",
                    },
                    id: "134VHJhnXUqOmaFdISY0r6BD",
                    location: [
                        -117.8442962,
                        33.6404952,
                    ],
                    metadata: [],
                    notes: "",
                    timeCreated: 1613177955000,
                    timeLastModified: 1613177955586,
                },
                estimatedArrivalTime: 1613180322638,
                estimatedCompletionTime: 1613180322638,
                executor: "nYrkNP6jZMSKgBwG9qG7ci3J",
                feedback: [],
                id: "zIeGIBZQZhTRHaK6V6V74Fpg",
                identity: {
                    checksum: null,
                    failedScanCount: 0,
                },
                merchant: "nYrkNP6jZMSKgBwG9qG7ci3J",
                metadata: [],
                notes: "",
                organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                overrides: {},
                pickupTask: false,
                quantity: 0,
                recipients: [
                    {
                        id: "7LecFRKJw7ExfyhBsi9h0NXW",
                        metadata: [],
                        name: "Brodie Lee",
                        notes: "Notes do not change *edited* more new notes",
                        organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                        phone: "+17145555678",
                        skipSMSNotifications: false,
                        timeCreated: 1592005264000,
                        timeLastModified: 1613177955599,
                    },
                ],
                serviceTime: 0,
                shortId: "a79d22fb",
                state: 2,
                timeCreated: 1613177955000,
                timeLastModified: 1613178053658,
                trackingURL: "https://onf.lt/a79d22fb77",
                trackingViewed: false,
                worker: "COwfwH~Zogm1LXIZYbPlLAyw",
            },
        },
        delay: 522.6378813476563,
        taskId: "zIeGIBZQZhTRHaK6V6V74Fpg",
        time: 1613178058862,
        triggerId: 12,
        triggerName: "taskDelayed",
        workerId: null,
    };

    const taskETAPayload: Webhook.Payload.TaskETAPayload = {
        taskId: "hV2lAmBLs~76oXR4jYBjQbgY",
        etaSeconds: 298.2603148875159,
        triggerId: 1,
        triggerName: "taskEta",
        workerId: null,
        adminId: null,
        data: {
            task: {
                id: "hV2lAmBLs~76oXR4jYBjQbgY",
                timeCreated: 1615502820000,
                timeLastModified: 1615504576163,
                organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                shortId: "a685d01d",
                trackingURL: "https://onf.lt/a685d01d24",
                worker: "COwfwH~Zogm1LXIZYbPlLAyw",
                merchant: "nYrkNP6jZMSKgBwG9qG7ci3J",
                executor: "nYrkNP6jZMSKgBwG9qG7ci3J",
                creator: "vjw*RDMKDljKVDve1Vtcplgu",
                dependencies: [],
                state: 2,
                completeAfter: 1615492800000,
                completeBefore: 1615505400000,
                pickupTask: false,
                notes: "",
                completionDetails: {
                    failureNotes: "",
                    failureReason: "NONE",
                    events: [],
                    actions: [],
                    time: null,
                    firstLocation: [],
                    lastLocation: [],
                    unavailableAttachments: [],
                },
                feedback: [],
                metadata: [],
                overrides: {},
                quantity: 0,
                serviceTime: 0,
                identity: {
                    failedScanCount: 0,
                    checksum: null,
                },
                appearance: {
                    triangleColor: null,
                },
                container: {
                    type: "WORKER",
                    worker: "COwfwH~Zogm1LXIZYbPlLAyw",
                },
                trackingViewed: false,
                estimatedCompletionTime: 1615506153703,
                estimatedArrivalTime: 1615506153703,
                recipients: [
                    {
                        id: "7LecFRKJw7ExfyhBsi9h0NXW",
                        timeCreated: 1592005264000,
                        timeLastModified: 1615502820526,
                        name: "Brodie Lee",
                        phone: "+17145555678",
                        notes: "Notes do not change *edited* more new notes",
                        organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                        skipSMSNotifications: false,
                        metadata: [],
                    },
                ],
                destination: {
                    id: "3NACfr4SVlCi8s~vPgKskAip",
                    timeCreated: 1615502820000,
                    timeLastModified: 1615502820514,
                    location: [
                        -117.895446,
                        33.9131177,
                    ],
                    address: {
                        apartment: "",
                        state: "California",
                        postalCode: "92821",
                        number: "338",
                        street: "South Redwood Avenue",
                        city: "Brea",
                        country: "United States",
                    },
                    notes: "",
                    metadata: [],
                },
            },
        },
        actionContext: null,
        time: 1615505708224,
    };

    const taskArrivalPayload: Webhook.Payload.TaskArrivalPayload = {
        taskId: "hV2lAmBLs~76oXR4jYBjQbgY",
        distance: 134.6184612940922,
        triggerId: 2,
        triggerName: "taskArrival",
        workerId: null,
        adminId: null,
        data: {
            task: {
                id: "hV2lAmBLs~76oXR4jYBjQbgY",
                timeCreated: 1615502820000,
                timeLastModified: 1615504576163,
                organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                shortId: "a685d01d",
                trackingURL: "https://onf.lt/a685d01d24",
                worker: "COwfwH~Zogm1LXIZYbPlLAyw",
                merchant: "nYrkNP6jZMSKgBwG9qG7ci3J",
                executor: "nYrkNP6jZMSKgBwG9qG7ci3J",
                creator: "vjw*RDMKDljKVDve1Vtcplgu",
                dependencies: [],
                state: 2,
                completeAfter: 1615492800000,
                completeBefore: 1615505400000,
                pickupTask: false,
                notes: "",
                completionDetails: {
                    failureNotes: "",
                    failureReason: "NONE",
                    events: [],
                    actions: [],
                    time: null,
                    firstLocation: [],
                    lastLocation: [],
                    unavailableAttachments: [],
                },
                feedback: [],
                metadata: [],
                overrides: {},
                quantity: 0,
                serviceTime: 0,
                identity: {
                    failedScanCount: 0,
                    checksum: null,
                },
                appearance: {
                    triangleColor: null,
                },
                container: {
                    type: "WORKER",
                    worker: "COwfwH~Zogm1LXIZYbPlLAyw",
                },
                trackingViewed: false,
                estimatedCompletionTime: 1615506156730,
                estimatedArrivalTime: 1615506156730,
                recipients: [
                    {
                        id: "7LecFRKJw7ExfyhBsi9h0NXW",
                        timeCreated: 1592005264000,
                        timeLastModified: 1615502820526,
                        name: "Brodie Lee",
                        phone: "+17145555678",
                        notes: "Notes do not change *edited* more new notes",
                        organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                        skipSMSNotifications: false,
                        metadata: [],
                    },
                ],
                destination: {
                    id: "3NACfr4SVlCi8s~vPgKskAip",
                    timeCreated: 1615502820000,
                    timeLastModified: 1615502820514,
                    location: [
                        -117.895446,
                        33.9131177,
                    ],
                    address: {
                        apartment: "",
                        state: "California",
                        postalCode: "92821",
                        number: "338",
                        street: "South Redwood Avenue",
                        city: "Brea",
                        country: "United States",
                    },
                    notes: "",
                    metadata: [],
                },
            },
        },
        actionContext: null,
        time: 1615505822024,
    };

    const workerCreatedPayload: Webhook.Payload.WorkerCreatedPayload = {
        adminId: "i18uIpm5NNNw6nBL8QMW1JM7",
        workerId: "sccpOkp3SassNmJxHjm1UFc5",
        actionContext: {
            id: "i18uIpm5NNNw6nBL8QMW1JM7",
            type: "ADMIN",
        },
        triggerId: 15,
        triggerName: "workerCreated",
        taskId: null,
        data: {
            worker: {
                id: "sccpOkp3SassNmJxHjm1UFc5",
                timeCreated: 1623274200000,
                timeLastModified: 1623274200799,
                organization: "1MWYTEQf6jioThhHhH4~KmVI",
                name: "John Smith",
                displayName: "",
                phone: "+17145555768",
                activeTask: null,
                tasks: [],
                onDuty: false,
                timeLastSeen: null,
                capacity: 0,
                userData: {},
                accountStatus: "INVITED",
                metadata: [],
                timezone: null,
                imageUrl: null,
                teams: [
                    "QNwu7xmlvGHzAYXk2zmZocD2",
                ],
                vehicle: {
                    id: "3O7k6AmNVc5U8~AkgNRVxGTm",
                    type: "CAR",
                    description: "1996 Honda Accord",
                    licensePlate: null,
                    color: "Green",
                    timeLastModified: 1623274200789,
                },
            },
        },
        time: 1623274200840,
    };

    const workerDeletedPayload: Webhook.Payload.WorkerDeletedPayload = {
        actionContext: {
            type: "ADMIN",
            id: "i18uIpm5NNNw6nBL8QMW1JM7",
        },
        workerId: "sccpOkp3SassNmJxHjm1UFc5",
        triggerId: 16,
        triggerName: "workerDeleted",
        taskId: null,
        adminId: "i18uIpm5NNNw6nBL8QMW1JM7",
        data: {
            worker: {
                id: "sccpOkp3SassNmJxHjm1UFc5",
                timeCreated: 1623274200000,
                timeLastModified: 1623274200799,
                organization: "1MWYTEQf6jioThhHhH4~KmVI",
                name: "John Smith",
                displayName: "",
                phone: "+17145555768",
                activeTask: null,
                tasks: [],
                onDuty: false,
                timeLastSeen: null,
                capacity: 0,
                userData: {},
                accountStatus: "INVITED",
                metadata: [],
                timezone: null,
                imageUrl: null,
                teams: [
                    "QNwu7xmlvGHzAYXk2zmZocD2",
                ],
                vehicle: {
                    id: "3O7k6AmNVc5U8~AkgNRVxGTm",
                    type: "CAR",
                    description: "1996 Honda Accord",
                    licensePlate: null,
                    color: "Green",
                    timeLastModified: 1623274200789,
                },
            },
        },
        time: 1623274403564,
    };

    const workerDutyPayload: Webhook.Payload.WorkerDutyPayload = {
        actionContext: null,
        adminId: null,
        data: {
            worker: {
                accountStatus: "ACCEPTED",
                activeTask: null,
                capacity: 3,
                delayTime: null,
                displayName: "",
                hasRecentlyUsedSpoofedLocations: false,
                id: "COwfwH~Zogm1LXIZYbPlLAyw",
                imageUrl: null,
                location: null,
                metadata: [],
                name: "Shured Shuanger",
                onDuty: true,
                organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                phone: "+17145555678",
                tasks: [
                    "txiK2xHBIaUwAKB~BJrjscKu",
                ],
                teams: [
                    "K3FXFtJj2FtaO2~H60evRrDc",
                ],
                timeCreated: 1585254830000,
                timeLastModified: 1613003712585,
                timeLastSeen: 1613003870027,
                timezone: "America/Los_Angeles",
                userData: {
                    appVersion: "2.1.11.1",
                    batteryLevel: 0.64,
                    deviceDescription: "Google Pixel 2 (Android 11)",
                    platform: "ANDROID",
                },
                vehicle: {
                    color: "",
                    description: "",
                    id: "Dib0eZfs*uJhJmWHKL~tExub",
                    licensePlate: "",
                    timeLastModified: 1612226873144,
                    type: "CAR",
                },
            },
        },
        status: 1,
        taskId: null,
        time: 1613003870062,
        triggerId: 5,
        triggerName: "workerDuty",
        workerId: "COwfwH~Zogm1LXIZYbPlLAyw",
    };

    const smsRecipientOptOutPayload: Webhook.Payload.SMSRecipientOptOutPayload = {
        recipient: {
            id: "7LecFRKJw7ExfyhBsi9h0NXW",
            name: "Joe Smith",
            phone: "+17145555768",
        },
        timestamp: 1632432776621,
        SMS: "STOP",
        triggerId: 17,
        triggerName: "SMSRecipientOptOut",
        taskId: null,
        workerId: null,
        adminId: null,
        data: {},
        actionContext: null,
        time: 1632432776640,
    };

    const autoDispatchJobCompletedPayload: Webhook.Payload.AutoDispatchJobCompletedPayload = {
        actionContext: {
            apiKeyScopeId: "34522acbaf4558bee7474e594aa2ba0c",
            id: "vjw*RDMKDljKVDve1Vtcplgu",
            type: "API",
        },
        adminId: null,
        data: {
            dispatch: {
                id: "XaSPx65XPOTiyzu7hbjlgTxN",
                options: {
                    maxAllowedDelay: 10,
                    maxTasksPerRoute: 50,
                    routeEnd: "teams://DEFAULT",
                    scheduleTimeWindow: [
                        1659727323264,
                        1659748923264,
                    ],
                    serviceTime: 4,
                    taskTimeWindow: [
                        1659712923264,
                        1659741723264,
                    ],
                },
                organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                plan: {
                    routes: [
                        {
                            routeId: "ZxcnkJi~79nonYaMTQ960Mg2",
                            stops: [
                                {
                                    arrivalTime: 1659729556337,
                                    departTime: 1659729796337,
                                    id: "LdvrBX7fADEvlNuFUZJu8d9S",
                                    type: "TASK",
                                },
                                {
                                    arrivalTime: 1659733290968,
                                    departTime: 1659733530968,
                                    id: "~JA*OXe7f6sLzy~zo6brH6xp",
                                    type: "TASK",
                                },
                                {
                                    arrivalTime: 1659737162319,
                                    departTime: 1659737402319,
                                    id: "bn50Lcsu8rqETDWJTIdecufy",
                                    type: "TASK",
                                },
                                {
                                    arrivalTime: 1659738493969,
                                    departTime: 1659738733969,
                                    id: "Sef4w3TakQk6dQJBhQDYglsO",
                                    type: "TASK",
                                },
                            ],
                            type: "WORKER",
                        },
                    ],
                    unplanned: [],
                },
                processingDetails: {
                    endTime: 1659727327650,
                    startTime: 1659727323428,
                    status: "success",
                },
                tasks: [
                    {
                        additionalQuantities: {
                            quantityA: 0,
                            quantityB: 0,
                            quantityC: 0,
                        },
                        completeAfter: null,
                        completeBefore: null,
                        id: "Sef4w3TakQk6dQJBhQDYglsO",
                        pickupTask: false,
                        quantity: 0,
                        shortId: "2770e3e3",
                    },
                    {
                        additionalQuantities: {
                            quantityA: 0,
                            quantityB: 0,
                            quantityC: 0,
                        },
                        completeAfter: 1659726000000,
                        completeBefore: 1659751200000,
                        id: "LdvrBX7fADEvlNuFUZJu8d9S",
                        pickupTask: false,
                        quantity: 0,
                        shortId: "ce6439b7",
                    },
                    {
                        additionalQuantities: {
                            quantityA: 0,
                            quantityB: 0,
                            quantityC: 0,
                        },
                        completeAfter: 1659726000000,
                        completeBefore: 1659747600000,
                        id: "bn50Lcsu8rqETDWJTIdecufy",
                        pickupTask: false,
                        quantity: 0,
                        shortId: "6d87d2bf",
                    },
                    {
                        additionalQuantities: {
                            quantityA: 0,
                            quantityB: 0,
                            quantityC: 0,
                        },
                        completeAfter: 1659726000000,
                        completeBefore: 1659754800000,
                        id: "~JA*OXe7f6sLzy~zo6brH6xp",
                        pickupTask: false,
                        quantity: 0,
                        shortId: "2e2f201c",
                    },
                ],
                team: "K3FXFtJj2FtaO2~H60evRrDc",
            },
        },
        dispatchId: "XaSPx65XPOTiyzu7hbjlgTxN",
        taskId: null,
        time: 1659727327697,
        triggerId: 18,
        triggerName: "autoDispatchJobCompleted",
        workerId: null,
    };

    const taskBatchCreateJobCompletedPayload: Webhook.Payload.TaskBatchCreateJobCompletedPayload = {
        jobId: "C1i7NK46Jtxod2WIkZDGf1~1",
        status: "completedWithErrors",
        tasksReceived: 3,
        tasksCreated: 2,
        tasksErrored: 1,
        errors: [
            {
                statusCode: 400,
                errorCode: 1000,
                message: "The values of one or more parameters are invalid.",
                cause: "Geocoding errors found. ",
                taskData: {
                    destination: {
                        address: {
                            number: "420",
                            street: "Infinite Loop",
                            city: "Redmond",
                            state: "WA",
                            country: "USA",
                        },
                    },
                    recipients: [],
                },
            },
        ],
        failedTasks: [
            {
                destination: {
                    address: {
                        number: "420",
                        street: "Infinite Loop",
                        city: "Redmond",
                        state: "WA",
                        country: "USA",
                    },
                },
                recipients: [],
            },
        ],
        newTasks: [
            {
                id: "7NAGq*xN62IkCexY1fNCP4Dt",
                timeCreated: 1682033523000,
                timeLastModified: 1682033523744,
                organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                shortId: "0f009c29",
                trackingURL: "https://onf.lt/0f009c29",
                worker: null,
                merchant: "nYrkNP6jZMSKgBwG9qG7ci3J",
                executor: "nYrkNP6jZMSKgBwG9qG7ci3J",
                creator: "vjw*RDMKDljKVDve1Vtcplgu",
                dependencies: [],
                state: 0,
                completeAfter: null,
                completeBefore: null,
                pickupTask: false,
                notes:
                    "Order 332: 24oz Stumptown Finca El Puente, 10 x Aji de Gallina Empanadas, 13-inch Lelenitas Tres Leches",
                completionDetails: {
                    failureNotes: "",
                    successNotes: "",
                    failureReason: "NONE",
                    events: [],
                    actions: [],
                    time: null,
                    signatureUploadId: null,
                    photoUploadId: null,
                    photoUploadIds: null,
                    firstLocation: [],
                    lastLocation: [],
                    unavailableAttachments: [],
                },
                feedback: [],
                metadata: [],
                overrides: {
                    recipientName: null,
                    recipientNotes: null,
                    recipientSkipSMSNotifications: null,
                    useMerchantForProxy: null,
                },
                quantity: 0,
                additionalQuantities: {
                    quantityA: 0,
                    quantityB: 0,
                    quantityC: 0,
                },
                serviceTime: 0,
                identity: {
                    failedScanCount: 0,
                    checksum: null,
                },
                appearance: {
                    triangleColor: null,
                },
                scanOnlyRequiredBarcodes: false,
                container: {
                    type: "ORGANIZATION",
                    organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                },
                trackingViewed: false,
                recipients: [],
                destination: {
                    id: "rKa*mzGWtKfrUqNYCJtYTU~G",
                    timeCreated: 1682033523000,
                    timeLastModified: 1682033523617,
                    location: [
                        -122.4438376,
                        37.7939987,
                    ],
                    address: {
                        apartment: "",
                        state: "California",
                        postalCode: "94123",
                        number: "2829",
                        street: "Vallejo Street",
                        city: "San Francisco",
                        country: "United States",
                    },
                    notes: "Small green door by garage door has pin pad, enter *4821*",
                    metadata: [],
                    googlePlaceId: "ChIJQSINYtKAhYARCKOYhQ6z3nI",
                    warnings: [],
                },
            },
            {
                id: "EcEM7N1DCDq8qaVbbvR0H7bh",
                timeCreated: 1682033523000,
                timeLastModified: 1682033523891,
                organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                shortId: "bc020b54",
                trackingURL: "https://onf.lt/bc020b54",
                worker: null,
                merchant: "nYrkNP6jZMSKgBwG9qG7ci3J",
                executor: "nYrkNP6jZMSKgBwG9qG7ci3J",
                creator: "vjw*RDMKDljKVDve1Vtcplgu",
                dependencies: [],
                state: 0,
                completeAfter: null,
                completeBefore: null,
                pickupTask: true,
                notes: "12 x 2016 Getariako Txakolina (RosÃ©)",
                completionDetails: {
                    failureNotes: "",
                    successNotes: "",
                    failureReason: "NONE",
                    events: [],
                    actions: [],
                    time: null,
                    signatureUploadId: null,
                    photoUploadId: null,
                    photoUploadIds: null,
                    firstLocation: [],
                    lastLocation: [],
                    unavailableAttachments: [],
                },
                feedback: [],
                metadata: [
                    {
                        type: "number",
                        visibility: [
                            "api",
                        ],
                        value: 33162,
                        name: "caseId",
                    },
                ],
                overrides: {
                    recipientName: null,
                    recipientNotes: null,
                    recipientSkipSMSNotifications: null,
                    useMerchantForProxy: null,
                },
                quantity: 0,
                additionalQuantities: {
                    quantityA: 0,
                    quantityB: 0,
                    quantityC: 0,
                },
                serviceTime: 0,
                identity: {
                    failedScanCount: 0,
                    checksum: null,
                },
                appearance: {
                    triangleColor: null,
                },
                scanOnlyRequiredBarcodes: false,
                container: {
                    type: "ORGANIZATION",
                    organization: "nYrkNP6jZMSKgBwG9qG7ci3J",
                },
                trackingViewed: false,
                recipients: [],
                destination: {
                    id: "52DeuznqoN*f7Ny2Wzx9iDv5",
                    timeCreated: 1682033523000,
                    timeLastModified: 1682033523646,
                    location: [
                        -87.6611882,
                        41.8999943,
                    ],
                    address: {
                        apartment: "",
                        state: "Illinois",
                        postalCode: "60642",
                        number: "1264",
                        street: "West Augusta Boulevard",
                        city: "Chicago",
                        country: "United States",
                    },
                    notes: "",
                    metadata: [],
                    googlePlaceId:
                        "EisxMjY0IFcgQXVndXN0YSBCbHZkLCBDaGljYWdvLCBJTCA2MDY0MiwgVVNBIjESLwoUChIJC3XaOdTSD4gRvWkApUN78tgQ8AkqFAoSCbEoXPNKzQ-IEfZd3WVEWaiw",
                    warnings: [],
                },
            },
        ],
        newTasksWithWarnings: [],
        triggerId: 19,
        triggerName: "taskBatchCreateJobCompleted",
        taskId: null,
        workerId: null,
        adminId: null,
        data: {},
        actionContext: null,
        time: 1682033523955,
    };
}
