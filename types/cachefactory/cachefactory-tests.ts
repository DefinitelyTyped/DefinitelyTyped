CacheFactory.get('test');

CacheFactory.createCache('test', {
	deleteOnExpire: 'aggressive',
	recycleFreq: 60000
});

let testCache = CacheFactory.get('test');

testCache.put('testOne', {title: 'testOne', id: 1});

let item = testCache.get('testOne');


let profileCache = CacheFactory('profileCache', {
	maxAge: 60 * 60 * 1000,
	deleteOnExpire: 'aggressive'
});

let localStoragePolyfill = {
	getItem: (key: string) => { return ""; },
	setItem: (key: string, value: string) => { },
	removeItem: (key: string) => { }
};

let myAwesomeCache = CacheFactory('myAwesomeCache', {
	maxAge: 15 * 60 * 1000,
	cacheFlushInterval: 60 * 60 * 1000,
	deleteOnExpire: 'aggressive',
	storageMode: 'localStorage',
	storageImpl: localStoragePolyfill
});