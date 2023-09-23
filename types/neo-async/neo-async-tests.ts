import * as async from "neo-async";

async.each([], () => {});
async.each(
    [],
    () => {},
    () => {},
);

async.eachSeries(
    [],
    () => {},
    () => {},
);

async.eachLimit([], 0, () => {});
async.eachLimit(
    [],
    0,
    () => {},
    () => {},
);

async.forEach([], () => {});

async.forEachSeries(
    [],
    () => {},
    () => {},
);

async.forEachLimit([], 0, () => {});

async.forEachOf({}, () => {});
async.forEachOf(
    {},
    () => {},
    () => {},
);

async.forEachOfSeries({}, () => {});

async.forEachOfLimit({}, 0, () => {});
async.forEachOfLimit(
    {},
    0,
    () => {},
    () => {},
);

async.eachOf({}, () => {});
async.eachOf(
    {},
    () => {},
    () => {},
);

async.eachOfSeries({}, () => {});
async.eachOfSeries(
    {},
    () => {},
    () => {},
);

async.eachOfLimit({}, 0, () => {});
async.eachOfLimit(
    {},
    0,
    () => {},
    () => {},
);

async.map([], () => {});
async.map(
    [],
    () => {},
    () => {},
);

async.mapSeries([], () => {});
async.mapSeries(
    [],
    () => {},
    () => {},
);

async.mapLimit([], 0, () => {});
async.mapLimit(
    [],
    0,
    () => {},
    () => {},
);

async.mapValuesLimit({}, 0, () => {});
async.mapValuesLimit(
    {},
    0,
    () => {},
    () => {},
);

async.mapValues({}, () => {});
async.mapValues(
    {},
    () => {},
    () => {},
);

async.mapValuesSeries({}, () => {});
async.mapValuesSeries(
    {},
    () => {},
    () => {},
);

async.filter([], () => {});

async.filterSeries([], () => {});

async.filterLimit([], 0, () => {});
async.filterLimit(
    [],
    0,
    () => {},
    () => {},
);

async.select([], () => {});

async.selectSeries([], () => {});

async.selectLimit([], 0, () => {});
async.selectLimit(
    [],
    0,
    () => {},
    () => {},
);

async.reject([], () => {});

async.rejectSeries([], () => {});

async.rejectLimit([], 0, () => {});
async.rejectLimit(
    [],
    0,
    () => {},
    () => {},
);

async.reduce([], "", () => {});
async.reduce(
    [],
    "",
    () => {},
    () => {},
);

async.inject([], "", () => {});
async.inject(
    [],
    "",
    () => {},
    () => {},
);

async.foldl([], "", () => {});
async.foldl(
    [],
    "",
    () => {},
    () => {},
);

async.reduceRight([], "", () => {});
async.reduceRight(
    [],
    "",
    () => {},
    () => {},
);

async.foldr([], "", () => {});
async.foldr(
    [],
    "",
    () => {},
    () => {},
);

async.detect([], () => {});
async.detect(
    [],
    () => {},
    () => {},
);

async.detectSeries([], () => {});
async.detectSeries(
    [],
    () => {},
    () => {},
);

async.detectLimit([], 0, () => {});
async.detectLimit(
    [],
    0,
    () => {},
    () => {},
);

async.find([], () => {});
async.find(
    [],
    () => {},
    () => {},
);

async.findSeries([], () => {});
async.findSeries(
    [],
    () => {},
    () => {},
);

async.findLimit([], 0, () => {});
async.findLimit(
    [],
    0,
    () => {},
    () => {},
);

async.sortBy([], () => {});
async.sortBy(
    [],
    () => {},
    () => {},
);

async.some([], () => {});
async.some(
    [],
    () => {},
    () => {},
);

async.someSeries([], () => {});
async.someSeries(
    [],
    () => {},
    () => {},
);

async.someLimit([], 0, () => {});
async.someLimit(
    [],
    0,
    () => {},
    () => {},
);

async.any([], () => {});
async.any(
    [],
    () => {},
    () => {},
);

async.anySeries([], () => {});
async.anySeries(
    [],
    () => {},
    () => {},
);

async.anyLimit([], 0, () => {});
async.anyLimit(
    [],
    0,
    () => {},
    () => {},
);

async.every([], () => {});
async.every(
    [],
    () => {},
    () => {},
);

async.everySeries([], () => {});
async.everySeries(
    [],
    () => {},
    () => {},
);

async.everyLimit([], 0, () => {});
async.everyLimit(
    [],
    0,
    () => {},
    () => {},
);

async.all([], () => {});
async.all(
    [],
    () => {},
    () => {},
);

async.allSeries([], () => {});
async.allSeries(
    [],
    () => {},
    () => {},
);

async.allLimit([], 0, () => {});
async.allLimit(
    [],
    0,
    () => {},
    () => {},
);

async.concat([], () => {});
async.concat(
    [],
    () => {},
    () => {},
);

async.concatLimit([], 0, () => {});
async.concatLimit(
    [],
    0,
    () => {},
    () => {},
);

async.concatSeries([], () => {});
async.concatSeries(
    [],
    () => {},
    () => {},
);

async.series([() => {}]);
async.series([() => {}], () => {});
async.series({});
async.series({}, () => {});

async.parallel([], () => {});
async.parallel([]);
async.parallel({}, () => {});
async.parallel({});

async.parallelLimit([], 0, () => {});
async.parallelLimit([], 0);
async.parallelLimit({}, 0, () => {});
async.parallelLimit({}, 0);

async.whilst(
    () => true,
    () => {},
);
async.whilst(
    () => true,
    () => {},
    () => {},
);

async.doWhilst(
    () => {},
    () => true,
);
async.doWhilst(
    () => {},
    () => true,
    () => {},
);

async.until(
    () => true,
    () => {},
);
async.until(
    () => true,
    () => {},
    () => {},
);

async.doUntil(
    () => {},
    () => true,
);
async.doUntil(
    () => {},
    () => true,
    () => {},
);

async.during(
    () => {},
    () => {},
    () => {},
);

async.doDuring(
    () => {},
    () => {},
    () => {},
);

async.forever(
    () => {},
    () => {},
);

async.waterfall([]);
async.waterfall([], () => {});

async.compose(
    () => {},
    () => {},
);

async.seq(
    () => {},
    () => {},
);

async.applyEach(
    [],
    () => {},
    () => {},
);

async.applyEachSeries(
    [],
    () => {},
    () => {},
);

async.queue(() => {});
async.queue(() => {}, 0);

async.priorityQueue(() => {});
async.priorityQueue(() => {}, 2);

async.cargo(() => {});
async.cargo(() => {}, 2);

async.cargoQueue(() => {});
async.cargoQueue(() => {}, 2, 2);

async.auto([() => {}]);
async.auto([() => {}], () => {});
async.auto([() => {}], 2, () => {});

async.autoInject([], () => {});
async.autoInject({}, () => {});

async.retry();
async.retry({}, () => {});
async.retry(
    {},
    () => {},
    () => {},
);

async.retryable(() => {});
async.retryable(0, () => {});
async.retryable({}, () => {});

async.apply(() => {}, [], 0, "");

async.nextTick(() => {}, [], 0, "");

async.setImmediate(() => {}, [], 0, "");

const fnReflect = async.reflect(() => {});
fnReflect(() => {});

async.reflectAll([() => {}]);

async.timeout(() => {}, 2);
async.timeout(() => {}, 2, "");

async.times(2, () => {});
async.times(
    2,
    () => {},
    () => {},
);

async.timesSeries(2, () => {});
async.timesSeries(
    2,
    () => {},
    () => {},
);

async.timesLimit(2, 2, () => {});
async.timesLimit(
    2,
    2,
    () => {},
    () => {},
);

async.transform([], () => {});
async.transform(
    [],
    () => {},
    () => {},
);
async.transform([], [], () => {});
async.transform(
    [],
    [],
    () => {},
    () => {},
);
async.transform({}, () => {});
async.transform(
    {},
    () => {},
    () => {},
);
async.transform({}, {}, () => {});
async.transform(
    {},
    {},
    () => {},
    () => {},
);

async.race([() => {}], () => {});

async.memoize(() => {});
async.memoize(
    () => {},
    () => {},
);

async.unmemoize(() => {});

async.ensureAsync(() => {});

async.constant("", 2, {}, []);

async.asyncify(() => {});

const fnWrapSync = async.wrapSync(() => {});
fnWrapSync();

async.log(() => {}, "", [], {}, 2);

async.dir(() => {}, "", [], {}, 2);

const dico: async.Dictionary<string> = { dico: "dico" };
dico.dico;

const IterableCollectionT: async.IterableCollection<string> = ["string"];
const IterableCollectionDico: async.IterableCollection<string> = { 0: "string" };

const errorCallback: async.ErrorCallback = (err?: Error | null) => {};
errorCallback();
errorCallback(null);
errorCallback(new Error("error"));

const asyncBooleanResultCallback: async.AsyncBooleanResultCallback = (err?: Error | null, truthValue?: boolean) => {};
asyncBooleanResultCallback();
asyncBooleanResultCallback(new Error("error"), true);

const asyncResultCallback: async.AsyncResultCallback<string> = (err?: Error | null, result?: string) => {};
asyncResultCallback();
asyncResultCallback(new Error("error"), "result");

const asyncResultArrayCallback: async.AsyncResultArrayCallback<string> = (
    err?: Error | null,
    results?: Array<string | undefined>,
) => {};
asyncResultArrayCallback();
asyncResultArrayCallback(new Error("error"), ["result", undefined]);

const asyncResultObjectCallback: async.AsyncResultObjectCallback<string> = (
    err: Error | undefined,
    results: async.Dictionary<string | undefined>,
) => {};
asyncResultObjectCallback(new Error("error"), { value: "string", otherValue: undefined });

const asyncFunction: async.AsyncFunction<string> = (cb: (err?: Error | null, result?: string) => void) => {};

const asyncFunctionEx: async.AsyncFunctionEx<string> = (cb: (err?: Error | null, ...results: string[]) => void) => {};

const asyncIterator: async.AsyncIterator<string> = (item: string, cb: () => void) => {};

const asyncForEachOfIterator: async.AsyncForEachOfIterator<string> = (
    item: string,
    key: number | string,
    cb: () => void,
) => {};

const asyncResultIterator: async.AsyncResultIterator<string, number> = (item: string, cb: () => void) => {};

const asyncMemoIterator: async.AsyncMemoIterator<string, number> = (
    memo: number | undefined,
    item: string,
    cb: () => void,
) => {};

const asyncBooleanIterator: async.AsyncBooleanIterator<string> = (item: string, cb: () => void) => {};

const asyncWorker: async.AsyncWorker<string> = (task: string, cb: () => void) => {};

const asyncVoidFunction: async.AsyncVoidFunction<string> = (cb: () => void) => {};

const asyncAutoTasks: async.AsyncAutoTasks<{ key: string }, string> = { key: ["key"] };

const asyncAutoTask1: async.AsyncAutoTask<string, { key: string }, number> = ["key"];
const asyncAutoTask2: async.AsyncAutoTask<string, { key: string }, number> = [() => {}];

const asyncAutoTaskFunctionWithoutDependencies: async.AsyncAutoTaskFunctionWithoutDependencies<string> = (
    cb: (err?: Error | null, result?: string) => void,
) => {};

const asyncAutoTaskFunction: async.AsyncAutoTaskFunction<string, { key: string }> = (
    result: { key: string },
    cb: (err?: Error | null, result?: string) => void,
) => {};

const dataContainer: async.DataContainer<string> = { data: "data", priority: 2 };

const callbackContainer: async.CallbackContainer = { callback: () => {} };

const priorityContainer: async.PriorityContainer = { priority: 2 };
