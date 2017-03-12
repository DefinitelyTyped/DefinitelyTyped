function* funcCollection<T>(): IterableIterator<T> { }

function funcMapIterator<T, E>(value: T, callback: AsyncResultCallback<T, E>) { }
function funcMapComplete<T, E>(error: E, results: T[]) { }

async.map(funcCollection(), funcMapIterator, funcMapComplete)
async.mapSeries(funcCollection(), funcMapIterator, funcMapComplete)
async.mapLimit(funcCollection(), 2, funcMapIterator, funcMapComplete)
