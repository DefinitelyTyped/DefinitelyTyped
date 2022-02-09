import { ReportableEvent } from '../../lib/reporting';
import { Terminal } from 'metro-core';

export type TerminalReportableEvent =
    | ReportableEvent
    | {
          buildID: string;
          type: 'bundle_transform_progressed_throttled';
          transformedFileCount: number;
          totalFileCount: number;
      };

export class TerminalReporter {
    constructor(terminal: Terminal);
    update(event: TerminalReportableEvent): void;
}
