import { DM, Event, EventId } from 'debessmann';

const eventId: EventId = {seq: 0, time: new Date()};
const e: Event = {_id: eventId, headers: {header1: 'header1Val'}};

const dm: DM = {
    init(endpoint: string, auth: string): void {
	},
    send(data: Event): void {
	}
};
dm.init("ep.debessmann.com", "AUTHID");
dm.send(e);
