/**
 * Provides open-source compatible instrumentation for monitoring certain API
 * uses before we're ready to issue a warning or refactor. It accepts an event
 * name which may only contain the characters [a-z0-9_] and an optional data
 * object with further information.
 */
declare function monitorCodeUse(eventName: string, data?: any): void;

declare namespace monitorCodeUse {}

export = monitorCodeUse;
