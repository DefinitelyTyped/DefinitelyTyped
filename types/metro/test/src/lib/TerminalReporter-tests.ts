import { TerminalReporter } from 'metro/src/lib/TerminalReporter';
import { Terminal } from 'metro-core';
import { Writable } from 'stream';

const reporter: TerminalReporter = new TerminalReporter(new Terminal(new Writable()));
