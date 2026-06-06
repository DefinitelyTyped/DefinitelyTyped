/**
 * Outputs a message to the native console.
 */
type NSLog = (...args: any[]) => void;

declare var nslog: NSLog;
export = nslog;
