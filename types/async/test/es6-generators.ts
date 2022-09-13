function* collectionGenerator<T>(): IterableIterator<T> { }

function funcMapIterator<T, E>(value: T, callback: async.AsyncResultCallback<T, E>) { }
function funcMapComplete<T, E>(error: E, results: T[]) { }

function booleanIterator<T>(v: T, cb: (err: Error, res: boolean) => void) { }

function eachIterator<T, E>(item: T, callback: (err: Error) => void) { }
function eachOfIterator<T, K, E>(item: T, key: K, callback: (err: Error) => void) { }

function concatIterator<T, R, E>(item: T, callback: (err: E, res: R[]) => void) { }

async.map(collectionGenerator(), funcMapIterator, funcMapComplete);
async.mapSeries(collectionGenerator(), funcMapIterator, funcMapComplete);
async.mapLimit(collectionGenerator(), 2, funcMapIterator, funcMapComplete);

async.filter(collectionGenerator(), booleanIterator, (err: Error, results: any[]) => { });
async.filterSeries(collectionGenerator(), booleanIterator, (err: Error, results: any[]) => { });
async.filterLimit(collectionGenerator(), 2, booleanIterator, (err: Error, results: any[]) => { });
async.select(collectionGenerator(), booleanIterator, (err: Error, results: any[]) => { });
async.selectSeries(collectionGenerator(), booleanIterator, (err: Error, results: any[]) => { });
async.selectLimit(collectionGenerator(), 2, booleanIterator, (err: Error, results: any[]) => { });

async.reject(collectionGenerator(), booleanIterator, (err: Error, results: any[]) => { });
async.rejectSeries(collectionGenerator(), booleanIterator, (err: Error, results: any[]) => { });
async.rejectLimit(collectionGenerator(), 2, booleanIterator, (err: Error, results: any[]) => { });

async.each(collectionGenerator(), eachIterator, (err: Error) => { });
async.eachLimit(collectionGenerator(), 2, eachIterator, (err: Error) => { });
async.eachSeries(collectionGenerator(), eachIterator, (err: Error) => { });
async.eachOf(collectionGenerator(), eachOfIterator, (err: Error) => { });
async.eachOfLimit(collectionGenerator(), 2, eachOfIterator, (err: Error) => { });
async.eachOfSeries(collectionGenerator(), eachOfIterator, (err: Error) => { });
async.forEach(collectionGenerator(), eachIterator, (err: Error) => { });
async.forEachLimit(collectionGenerator(), 2, eachIterator, (err: Error) => { });
async.forEachSeries(collectionGenerator(), eachIterator, (err: Error) => { });
async.forEachOf(collectionGenerator(), eachOfIterator, (err: Error) => { });
async.forEachOfLimit(collectionGenerator(), 2, eachOfIterator, (err: Error) => { });
async.forEachOfSeries(collectionGenerator(), eachOfIterator, (err: Error) => { });

async.every(collectionGenerator(), booleanIterator, (err: Error, res: boolean) => { });
async.everyLimit(collectionGenerator(), 2, booleanIterator, (err: Error, res: boolean) => { });
async.everySeries(collectionGenerator(), booleanIterator, (err: Error, res: boolean) => { });

async.some(collectionGenerator(), booleanIterator, (err: Error, res: boolean) => { });
async.someLimit(collectionGenerator(), 2, booleanIterator, (err: Error, res: boolean) => { });
async.someSeries(collectionGenerator(), booleanIterator, (err: Error, res: boolean) => { });

async.detect(collectionGenerator(), booleanIterator, (err: Error, res: boolean) => { });
async.detectLimit(collectionGenerator(), 2, booleanIterator, (err: Error, res: boolean) => { });
async.detectSeries(collectionGenerator(), booleanIterator, (err: Error, res: boolean) => { });

async.concat(collectionGenerator(), concatIterator, (err: Error, res: any[]) => { });
async.concatSeries(collectionGenerator(), concatIterator, (err: Error, res: any[]) => { });

interface TaskData {
    name: string;
}
async function testFun() {
    // this method is not meant to be executed , just transpiled to typescript.
    const q = async.queue<TaskData>((task: TaskData, callback: (err: Error|null, msg?: string) => void) => {
        console.log('hello ' + task.name);
        callback(null, 'a message.');
    }, 2);
    q.push({ name: 'Hello'});
    await q.drain();
    await q.empty();
    await q.saturated();
}
testFun();
