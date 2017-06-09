import {DM, Event, EventId} from 'debessmann';

let eventId: EventId = {seq: 0, time: new Date()};
let e: Event = {_id: eventId, headers: {header1: 'header1Val'}};

let dm: DM = {
    init(endpoint: string, auth: string): void {
	},
    send(data: Event): void {
	}
};
dm.init("ep.debessmann.com", "AUTHID");
dm.send(e);
