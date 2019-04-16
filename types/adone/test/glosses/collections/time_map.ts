namespace adoneTests.collection.TimedoutMap {
    const {
        collection: {
            TimeMap
        }
    } = adone;

    type TimeMap<K = any, V = any> = adone.collection.TimeMap<K, V>;

    new TimeMap();
    new TimeMap(1000);
    new TimeMap<string, number>(1000, (key: string) => null);
    {
        const a: TimeMap<string, number> = new TimeMap<string, number>().forEach((value: number, key: string) => null);
    }
    {
        const a: TimeMap<string, number> = new TimeMap<string, number>().forEach(function (value: number, key: string) {
            const a: number = this.a;
        }, { a: 1 });
    }
    { const a: boolean = new TimeMap<string, number>().delete("123"); }
}
