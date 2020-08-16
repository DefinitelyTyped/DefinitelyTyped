import pull = require('pull-stream');

/********
 * pull *
 ********/

let source: pull.Source<string> = (end, cb) => {};
let through: pull.Through<string, string> = source => source;
let sink: pull.Sink<string> = source => {};

function voidFunc(): void {}

type Void = ReturnType<typeof voidFunc>;

// Start with source and end with sink
let nothing: Void;
nothing = pull();
nothing = pull(source, sink);
nothing = pull(source, through, sink);
nothing = pull(source, through, through, sink);

// Start with source
source = pull(source);
source = pull(source, through);
source = pull(source, through, through);

// End with sink
sink = pull(sink);
sink = pull(through, sink);
sink = pull(through, through, sink);

// Through only
through = pull(through);
through = pull(through, through);
through = pull(through, through, through);

const numberSource: pull.Source<number> = (end, cb) => {};
const parseNumber: pull.Through<string, number> = source => numberSource;
const numberSink: pull.Sink<number> = source => {};

// Strictly typed pipe
nothing = pull(source, through, parseNumber, numberSink);

// Long pipe
let result: pull.Source<any> | pull.Sink<any> | pull.Through<any, any> | Void;
result = pull(source, through, through, through, through, through, through, through, through, sink);

/***********
 * sources *
 ***********/

// count
pull(pull.count(), numberSink);
pull(pull.count(5), numberSink);

// empty
nothing = pull(pull.empty(), sink);

// error
nothing = pull(pull.error(new Error()), sink);

// infinite
nothing = pull(pull.infinite(), numberSink);
nothing = pull(
    pull.infinite(() => 'value'),
    sink,
);

// keys
nothing = pull(pull.keys({ hello: 'world' }), sink);
nothing = pull(pull.keys([]), sink);

// once
nothing = pull(pull.once('value'), sink);
nothing = pull(pull.once(1), numberSink);
nothing = pull(
    pull.once(1, err => {
        if (err instanceof Error) err.stack;
    }),
    numberSink,
);

// values
nothing = pull(pull.values(['hello', 'world']), sink);
nothing = pull(pull.values([1, 2]), numberSink);
nothing = pull(
    pull.values([1, 2], err => {
        if (err instanceof Error) err.stack;
    }),
    numberSink,
);

/************
 * throughs *
 ************/

// asyncMap
nothing = pull(
    source,
    pull.asyncMap((data, cb) => {
        cb(null, Number(data));
    }),
    numberSink,
);

// filterNot
nothing = pull(
    source,
    pull.filterNot(data => data === 'hello'),
    sink,
);

// filter
nothing = pull(
    source,
    pull.filter(data => data === 'hello'),
    sink,
);
nothing = pull(
    source,
    pull.filter((data): data is 'hello' => data === 'hello'),
    sink as pull.Sink<'hello'>,
);

// flatten
const streamOfArrays: pull.Source<string[]> = (end, cb) => undefined;
const streamOfStreams: pull.Source<Array<pull.Source<string>>> = (end, cb) => undefined;
const throughToStreams: pull.Through<any, Array<pull.Source<string>>> = streamOfStreams => streamOfStreams;
nothing = pull(streamOfArrays, pull.flatten(), sink);
nothing = pull(streamOfStreams, pull.flatten(), sink);
sink = pull(throughToStreams, pull.flatten(), sink);

// map
nothing = pull(source, pull.map(Number), numberSink);

// nonUnique
nothing = pull(source, pull.nonUnique(), sink);
nothing = pull(source, pull.nonUnique(Number), sink);
nothing = pull(source, pull.nonUnique('length'), sink);

// take
nothing = pull(source, pull.take(1), sink);
nothing = pull(
    source,
    pull.take(s => !!s),
    sink,
);
nothing = pull(
    source,
    pull.take(s => !!s, { last: true }),
    sink,
);

// through
nothing = pull(source, pull.through(), sink);
nothing = pull(source, pull.through(Number), sink);
nothing = pull(
    source,
    pull.through(Number, err => {
        if (err instanceof Error) err.stack;
    }),
    sink,
);

// unique
nothing = pull(source, pull.unique(), sink);
nothing = pull(source, pull.unique(Number), sink);
nothing = pull(source, pull.unique('length'), sink);

/*********
 * sinks *
 *********/

// collect
nothing = pull(
    source,
    pull.collect((err, results) => {
        if (err instanceof Error) err.stack;
        const check: string[] = results;
    }),
);

// concat
nothing = pull(
    source,
    pull.concat((err, result) => {
        if (err instanceof Error) err.stack;
        const check: string = result;
    }),
);

// drain
nothing = pull(source, pull.drain(Number));
nothing = pull(
    source,
    pull.drain(Number, err => {
        if (err instanceof Error) err.stack;
    }),
);

// find
nothing = pull(source, pull.find());
nothing = pull(
    source,
    pull.find(err => {
        if (err instanceof Error) err.stack;
    }),
);
nothing = pull(
    source,
    pull.find(Boolean, err => {
        if (err instanceof Error) err.stack;
    }),
);
nothing = pull(
    source,
    pull.find('length', err => {
        if (err instanceof Error) err.stack;
    }),
);

// log
nothing = pull(source, pull.log());

// onEnd
nothing = pull(
    source,
    pull.onEnd(err => {
        if (err instanceof Error) err.stack;
    }),
);

// reduce
nothing = pull(
    source,
    pull.reduce<string, number>(
        (acc, data) => (acc || 0) + Number(data),
        (err, result) => {
            if (err instanceof Error) err.stack;
            const check: number = result;
        },
    ),
);
nothing = pull(
    source,
    pull.reduce(
        (acc, data) => acc + Number(data),
        0,
        (err, result) => {
            if (err instanceof Error) err.stack;
            const check: number = result;
        },
    ),
);
