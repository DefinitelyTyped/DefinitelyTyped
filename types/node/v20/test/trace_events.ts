import trace_events = require("node:trace_events");

const enabledCategories: string | undefined = trace_events.getEnabledCategories();
const tracing: trace_events.Tracing = trace_events.createTracing({ categories: ["node", "v8"] });
const categories: string = tracing.categories;
const enabled: boolean = tracing.enabled;
tracing.enable();
tracing.disable();
