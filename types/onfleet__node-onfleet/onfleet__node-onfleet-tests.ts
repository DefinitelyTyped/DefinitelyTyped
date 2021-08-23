import Onfleet = require('@onfleet/node-onfleet');

const onfleet = new Onfleet('test-api-key');
const isValid = onfleet.verifyKey().then().catch();

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
    recipients: [
      '<recipient-id-1>',
      '<recipient-id-2>',
    ],
    destination: {
      address: {
        city: 'Toronto',
        country: 'Canada',
        name: 'Test Destination',
        number: '100',
        street: 'Test Street Blvd.',
      },
    },
    container: {
      type: 'TEAM',
      team: 'teamId'
    }
  });

  if (taskCreated.container.type === 'TEAM') {
    taskCreated.container.team === 'teamId';
  }

  // test tasks.update
  const taskUpdated = await onfleet.tasks.update(dummyTask.id, {
    notes: 'Some test task notes',
    container: {
      type: 'WORKER',
      worker: 'workerId'
    }
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
    ]
  });

  // test tasks.clone
  const clonedDummyTask = await onfleet.tasks.clone(dummyTask.id);

  if (dummyTask.barcodes && dummyTask.barcodes.required[0].blockCompletion) {
    const required = dummyTask.barcodes.required[0];
    const captured = dummyTask.barcodes.captured[0];
    if (required.data === captured.data && captured.wasRequested === required.blockCompletion && captured.symbology === 'CODE39') {
      captured.location = [
        -122.42855072021484,
        37.78808138412046
      ];
      captured.id = 'ku0fpiCqJPC25h3W0cnfgqNn';
      captured.time = Date.now();
    }
  }

  // test tasks.delete
  await onfleet.tasks.deleteOne(clonedDummyTask.id);

  // test tasks.forceComplete
  await onfleet.tasks.forceComplete(dummyTask.id);
}

async function testDestination() {
  // test destination.create
  const testDestination = await onfleet.destinations.create({
    address: {
      city: 'Toronto',
      country: 'Canada',
      name: 'Test Destination',
      number: '100',
      street: 'Test Street Blvd.',
    },
  });

  // test destination.get
  await onfleet.destinations.get(testDestination.id);
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
}
