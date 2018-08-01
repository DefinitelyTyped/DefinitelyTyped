import createDomain = require("cqrs-domain");

const domain = createDomain({
	domainPath: "/domain",
	eventStore: {
		type: "mongodb",
		dbName: "db1"
	}
});

domain.defineCommand({
	id: "id",
	name: "command",
	aggregateId: "aggregate.id",
	aggregate: "aggregate.name",
	payload: "payload",
	revision: "revision"
});

domain.defineEvent({
	correlationId: "commandId",
	id: "id",
	name: "event",
	context: "context.name",
	aggregateId: "aggregate.id",
	aggregate: 'aggregate.name',
	payload: "payload",
	revision: "revision",
	version: "version",
	meta: "meta",
	commitStamp: "occurredAt"
});
