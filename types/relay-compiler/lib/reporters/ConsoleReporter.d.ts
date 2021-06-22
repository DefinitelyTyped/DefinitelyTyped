import { Reporter } from './Reporter';

declare class ConsoleReporter implements Reporter {
    reportMessage(message: string): void;
    reportTime(name: string, ms: number): void;
    reportError(caughtLocation: string, error: Error): void;
}

export = ConsoleReporter;
