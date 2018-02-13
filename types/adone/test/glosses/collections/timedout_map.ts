namespace adoneTests.collection.TimedoutMap {
    const {
        collection: {
            TimedoutMap
        }
    } = adone;

    type TimedoutMap<K = any, V = any> = adone.collection.TimedoutMap<K, V>;

    new TimedoutMap();
    new TimedoutMap(1000);
    new TimedoutMap<string, number>(1000, (key: string) => null);
    {
        const a: TimedoutMap<string, number> = new TimedoutMap<string, number>().forEach((value: number, key: string) => null);
    }
    {
        const a: TimedoutMap<string, number> = new TimedoutMap<string, number>().forEach(function (value: number, key: string) {
            const a: number = this.a;
        }, { a: 1 });
    }
    { const a: boolean = new TimedoutMap<string, number>().delete("123"); }
}
