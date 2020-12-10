import { Entry, Log } from 'har-format';

declare global {
  type HAREntry = Entry;
  type HARLog = Log;
}
