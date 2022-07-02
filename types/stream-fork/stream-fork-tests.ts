import stream = require('stream');
import Fork = require('stream-fork');

let fork: stream.Writable;

const ws = new stream.Writable();

fork = new Fork([]);
fork = new Fork([ws]);
fork = new Fork([ws], { ignoreErrors: true });
fork = new Fork([ws], { objectMode: false });
fork = Fork.fork([ws, ws], { ignoreErrors: true });

let empty: boolean;
empty = Fork.fork([]).isEmpty();
