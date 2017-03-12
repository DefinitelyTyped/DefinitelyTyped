function* funcCollection<T>(): IterableIterator<T> { }

function funcMapIterator<T, E>(value: T, callback: AsyncResultCallback<T, E>) { }
function funcMapComplete<T, E>(error: E, results: T[]) { }

function funcCbErrBoolean<T>(v: T, cb: (err: Error, res: boolean) => void) { }

async.map(funcCollection(), funcMapIterator, funcMapComplete)
async.mapSeries(funcCollection(), funcMapIterator, funcMapComplete)
async.mapLimit(funcCollection(), 2, funcMapIterator, funcMapComplete)

async.filter(funcCollection(), funcCbErrBoolean, function (err: Error, results: any[]) { })
async.filterSeries(funcCollection(), funcCbErrBoolean, function (err: Error, results: any[]) { })
async.filterLimit(funcCollection(), 2, funcCbErrBoolean, function (err: Error, results: any[]) { })
async.select(funcCollection(), funcCbErrBoolean, function (err: Error, results: any[]) { })
async.selectSeries(funcCollection(), funcCbErrBoolean, function (err: Error, results: any[]) { })
async.selectLimit(funcCollection(), 2, funcCbErrBoolean, function (err: Error, results: any[]) { })

async.reject(funcCollection(), funcCbErrBoolean, function (err: Error, results: any[]) { })
async.rejectSeries(funcCollection(), funcCbErrBoolean, function (err: Error, results: any[]) { })
async.rejectLimit(funcCollection(), 2, funcCbErrBoolean, function (err: Error, results: any[]) { })
