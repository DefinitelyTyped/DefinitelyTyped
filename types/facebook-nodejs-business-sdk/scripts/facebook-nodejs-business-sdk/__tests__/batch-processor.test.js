/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';
const {BatchProcessor, Content, CustomData, DeliveryCategory} = require('facebook-nodejs-business-sdk');



describe('BatchProcessor', function() {
    test('processEventRequests processes all event requests', async function() {
        const event_requests = getEventRequests(5);
        const batchProcessor = new BatchProcessor(2, 2);
        await batchProcessor.processEventRequests(event_requests);

        event_requests.forEach(event_request => expect(event_request.called_execute_count).toBe(1));
    });

    test('processEventRequestsGenerator returns event request promises in batches', async function() {
        const event_requests = getEventRequests(5);
        const batchProcessor = new BatchProcessor(2, 2);
        let iterations = 0;
        let promises = [];
        const generator = batchProcessor.processEventRequestsGenerator(event_requests);
        let batch;
        while(true) {
            batch = generator.next().value;
            if (!batch || batch.length === 0) {
                generator.return();
                break;
            }
            promises.push(batch);
            iterations += 1;
        }
        await Promise.all(promises);

        event_requests.forEach(event_request => expect(event_request.called_execute_count).toBe(1));
        expect(iterations).toBe(3);
    });

    test('processEventsGenerator returns event request promises in batches', async function() {
        const event_request = new EventRequestMock();
        const events = getEvents(19);
        const batchProcessor = new BatchProcessor(2, 2);
        let iterations = 0;
        let promises = [];
        const generator = batchProcessor.processEventsGenerator(event_request, events);
        let batch;
        while(true) {
            batch = generator.next().value;
            if (!batch || batch.length === 0) {
                generator.return();
                break;
            }
            promises.push(batch);
            iterations += 1;
        }
        await Promise.all(promises);

        expect(iterations).toBe(5);
    });

    test('processEvents processes all events', async function() {
        const event_request = new EventRequestMock();
        const events = getEvents(11);
        const batchProcessor = new BatchProcessor(2, 3);
        await batchProcessor.processEvents(event_request, events);

        expect(event_request.cloned_event_requests.length).toBe(6);
        event_request.cloned_event_requests.forEach(event_request => {
            expect(event_request.called_execute_count).toBe(1)
        });
        const event_batches = event_request.cloned_event_requests.map(request => request.set_events);
        expect(event_batches).toEqual([
            [events.slice(0, 2)],
            [events.slice(2, 4)],
            [events.slice(4, 6)],
            [events.slice(6, 8)],
            [events.slice(8, 10)],
            [events.slice(10, 12)],
        ]);
    });
});


// Test helpers
class EventRequestMock {
    constructor() {
        this.called_execute_count = 0;
        this.set_events = []
        this.cloned_event_requests = []
    }

    execute() {
        return new Promise((resolve, reject) => {
            this.called_execute_count += 1;
            return resolve();
        });
    }

    cloneWithoutEvents() {
        const cloned_event_request = new EventRequestMock();
        this.cloned_event_requests.push(cloned_event_request);
        return cloned_event_request;
    }

    setEvents(events) {
        this.set_events.push(events);
    }
}

class EventMock {
    constructor(num) {
        this.num = num;
    }
}

function getEventRequests(num) {
    let events = [];
    for (let i = 0 ; i < num; i++) {
        events.push(new EventRequestMock());
    }
    return events;
}

function getEvents(num) {
    let events = [];
    for (let i = 0 ; i < num; i++) {
        events.push(new EventMock(i));
    }
    return events;
}
