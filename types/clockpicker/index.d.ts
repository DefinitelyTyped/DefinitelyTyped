// Type definitions for ClockPicker 0.0
// Project: https://github.com/weareoutman/clockpicker
// Definitions by: jfcere <https://github.com/jfcere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface ClockPickerOptions {
  default?: string;
  placement?: string;
  align?: string;
  donetext?: string;
  autoclose?: boolean;
  twelvehour?: boolean;
  vibrate?: boolean;
  fromnow?: number;
  init?: () => void;
  beforeShow?: () => void;
  afterShow?: () => void;
  beforeHide?: () => void;
  afterHide?: () => void;
  beforeHourSelect?: () => void;
  afterHourSelect?: () => void;
  beforeDone?: () => void;
  afterDone?: () => void;
}

interface ClockPicker {
  (options?: ClockPickerOptions): JQuery;
  (methodName: string, ...params: any[]): JQuery;
}

interface JQuery {
  clockpicker: ClockPicker;
}
