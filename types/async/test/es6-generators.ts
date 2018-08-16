function* collectionGenerator<T>(): IterableIterator<T> { }

function funcMapIterator<T, E>(value: T, callback: async.AsyncResultCallback<T, E>) { }
function funcMapComplete<T, E>(error: E, results: T[]) { }

function booleanIterator<T>(v: T, cb: (err: Error, res: boolean) => void) { }

function eachIterator<T, E>(item: T, callback: (err: Error) => void) { }
function eachOfIterator<T, K, E>(item: T, key: K, callback: (err: Error) => void) { }

function concatIterator<T, R, E>(item: T, callback: (err: E, res: R[]) => void) { }

async.map(collectionGenerator(), funcMapIterator, funcMapComplete)
async.mapSeries(collectionGenerator(), funcMapIterator, funcMapComplete)
async.mapLimit(collectionGenerator(), 2, funcMapIterator, funcMapComplete)

async.filter(collectionGenerator(), booleanIterator, function (err: Error, results: any[]) { })
async.filterSeries(collectionGenerator(), booleanIterator, function (err: Error, results: any[]) { })
async.filterLimit(collectionGenerator(), 2, booleanIterator, function (err: Error, results: any[]) { })
async.select(collectionGenerator(), booleanIterator, function (err: Error, results: any[]) { })
async.selectSeries(collectionGenerator(), booleanIterator, function (err: Error, results: any[]) { })
async.selectLimit(collectionGenerator(), 2, booleanIterator, function (err: Error, results: any[]) { })

async.reject(collectionGenerator(), booleanIterator, function (err: Error, results: any[]) { })
async.rejectSeries(collectionGenerator(), booleanIterator, function (err: Error, results: any[]) { })
async.rejectLimit(collectionGenerator(), 2, booleanIterator, function (err: Error, results: any[]) { })

async.each(collectionGenerator(), eachIterator, function (err: Error) { })
async.eachLimit(collectionGenerator(), 2, eachIterator, function (err: Error) { })
async.eachSeries(collectionGenerator(), eachIterator, function (err: Error) { })
async.eachOf(collectionGenerator(), eachOfIterator, function (err: Error) { })
async.eachOfLimit(collectionGenerator(), 2, eachOfIterator, function (err: Error) { })
async.eachOfSeries(collectionGenerator(), eachOfIterator, function (err: Error) { })
async.forEach(collectionGenerator(), eachIterator, function (err: Error) { })
async.forEachLimit(collectionGenerator(), 2, eachIterator, function (err: Error) { })
async.forEachSeries(collectionGenerator(), eachIterator, function (err: Error) { })
async.forEachOf(collectionGenerator(), eachOfIterator, function (err: Error) { })
async.forEachOfLimit(collectionGenerator(), 2, eachOfIterator, function (err: Error) { })
async.forEachOfSeries(collectionGenerator(), eachOfIterator, function (err: Error) { })

async.every(collectionGenerator(), booleanIterator, function (err: Error, res: boolean) { })
async.everyLimit(collectionGenerator(), 2, booleanIterator, function (err: Error, res: boolean) { })
async.everySeries(collectionGenerator(), booleanIterator, function (err: Error, res: boolean) { })

async.some(collectionGenerator(), booleanIterator, function (err: Error, res: boolean) { })
async.someLimit(collectionGenerator(), 2, booleanIterator, function (err: Error, res: boolean) { })
async.someSeries(collectionGenerator(), booleanIterator, function (err: Error, res: boolean) { })

async.detect(collectionGenerator(), booleanIterator, function (err: Error, res: boolean) { })
async.detectLimit(collectionGenerator(), 2, booleanIterator, function (err: Error, res: boolean) { })
async.detectSeries(collectionGenerator(), booleanIterator, function (err: Error, res: boolean) { })

async.concat(collectionGenerator(), concatIterator, (err: Error, res: any[]) => { })
async.concatSeries(collectionGenerator(), concatIterator, (err: Error, res: any[]) => { })
