import formatDuration = require("format-duration");

const milliseconds = 12345;

const duration: string = formatDuration(milliseconds);
const durationLeading: string = formatDuration(milliseconds, { leading: true });
const durationMs: string = formatDuration(milliseconds, { ms: true });
const durationLeadingAndMs: string = formatDuration(milliseconds, { leading: true, ms: true });
