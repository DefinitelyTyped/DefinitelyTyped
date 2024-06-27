/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import ServerEvent from './server-event';
import EventRequest from './event-request';
import EventResponse from './event-response';

export default class BatchProcessor {
    _batch_size: number
    _concurrent_requests: number

    constructor(batch_size: number, concurrent_requests: number) {
        this._batch_size = batch_size;
        this._concurrent_requests = concurrent_requests;
    }

    *processEventRequestsGenerator(event_requests: Array<EventRequest>): Generator<Array<Promise<EventResponse>>,void,EventRequest> {
        let start = 0;
        let end = this._concurrent_requests;
        let requests = event_requests.slice(start, end);
        while (requests.length > 0) {
            yield requests.map(request => request.execute());
            start = end;
            end += this._concurrent_requests;
            requests = event_requests.slice(start, end);
        }
        return;
    }

    async processEventRequests(event_requests: Array<EventRequest>) {
        const generator = this.processEventRequestsGenerator(event_requests);
        while (true) {
            const batch = generator.next().value;
            if (!batch || batch.length === 0) {
                generator.return();
                return;
            }
            await Promise.all(batch);
        }
    }

    *processEventsGenerator(event_request_to_clone: EventRequest, all_events: Array<ServerEvent>): Generator<Array<Promise<EventResponse>>,void,EventRequest> {
        let index = 0;
        while (index < all_events.length) {
            let event_requests = [];
            while (index < all_events.length && event_requests.length < this._concurrent_requests) {
                const event_request = event_request_to_clone.cloneWithoutEvents();
                const events = all_events.slice(index, index + this._batch_size);
                event_request.setEvents(events);
                event_requests.push(event_request);
                index += this._batch_size;
            }
            yield event_requests.map(request => request.execute());
        }
        return;
    }

    async processEvents(event_request_to_clone: EventRequest, all_events: Array<ServerEvent>) {
        const generator = this.processEventsGenerator(event_request_to_clone, all_events);
        while (true) {
            const batch = generator.next().value;
            if (!batch || batch.length === 0) {
                generator.return();
                return;
            }
            await Promise.all(batch);
        }
    }
}
