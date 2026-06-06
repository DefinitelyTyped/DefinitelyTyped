import blockedAt = require("blocked-at");

const { stop } = blockedAt((time, stack, { type, resource }) => {
    // TODO
}, {
    trimFalsePositives: true,
    threshold: 10,
    resourcesCap: 10,
    debug: true,
});

stop();
