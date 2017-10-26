import guid = require('guid');

const newRawGuid: string = guid.raw();
const isAGuid: boolean = guid.isGuid(newRawGuid);
const newGuidObject: object = guid.create();
