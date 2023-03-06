import { Terminal } from 'metro-core';
import { Writable } from 'stream';

export const terminal = new Terminal(new Writable());
terminal.status('status %d', 123);
terminal.log('hello');
terminal.persistStatus();
