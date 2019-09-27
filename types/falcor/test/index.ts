import falcor = require('falcor');

declare const dataSource: falcor.DataSource;
dataSource.get([['someParam']]).subscribe(jsonGraphEnvelope => {
    console.log(jsonGraphEnvelope.jsonGraph);
});
dataSource.set({
    jsonGraph: {
        someParam: 'value',
    },
    paths: [['someParam']]
}).subscribe(jsonGraphEnvelope => {
    console.log(jsonGraphEnvelope.jsonGraph);
});

dataSource.call(['items', 'push']);
dataSource.call(['items', 'push'], [{id: 'i003', name: 'item003'}]);
dataSource.call(['items', 'push'], [{id: 'i003', name: 'item003'}], [['id', 'name']]);
dataSource.call(['items', 'push'], [{id: 'i003', name: 'item003'}], [['id', 'name']], [['length']]).subscribe(jsonGraphEnvelope => {
    console.log(jsonGraphEnvelope.jsonGraph);
    console.log(jsonGraphEnvelope.invalidate);
    console.log(jsonGraphEnvelope.paths[0]);
});

new falcor.Model();
new falcor.Model({});
new falcor.Model({
    source: dataSource,
    cache: {},
    maxSize: 100,
    collectRatio: 0.5,
    comparator: (a, b) => {
        return a === b;
    },
    errorSelector: (jsonGraphError: any) => {
        console.error(jsonGraphError);
    },
    onChange: () => {
        console.log('Changed!');
    }
});

const model = new falcor.Model({
    cache: {
        itemsById: {
            i01: {id: 'i01', name: 'item 01'},
            i27: {id: 'i27', name: 'item 27'},
        },
        items: [
            {$type: 'ref', value: ['itemsById', 'i01']},
            {$type: 'ref', value: ['itemsById', 'i27']},
        ],
    }
});

model.get('items[0].name');
model.get(['items', 0, 'name']);
model.get(['items', {from: 0, to: 1}, 'name']);
model.get(['items', {from: 0, length: 2 }, 'name']);
model.get('items[0].name', 'items[1].name');

model.set({path: 'items[0].name', value: 'ITEM 01'}, {path: ['items', 1, 'name'], value: 'ITEM 27'});
model.set({
    itemsById: {
        i01: {
            name: 'ITEM 01'
        }
    }
});

model.preload();
model.preload(['items', 0, 'name']);
model.preload(['items', 0, 'name'], ['items', 1, 'name']);
model.preload(['items', {from: 0, to: 1}, 'name']);

model.call('items.push');
model.call(['items', 'push']);
model.call('items.push', [{id: 'i02', name: 'item02'}], ["length"]);
model.call('items.push', [{id: 'i02', name: 'item02'}], ["name", "length"], []);

model.invalidate();
model.invalidate(['items', 0, 'name']);
model.invalidate(['items', 0, 'name'], ['items', 1, 'name']);
model.invalidate(['items', {from: 0, to: 1}, 'name']);

model.get('items[0].["name", "id"]').then(res => {
    const derefedModel = model.deref(res.json.items[0]);
    derefedModel.get('name', 'id');
});

model.getValue('items[0].name').subscribe();
model.getValue(['items', 0, 'name']).subscribe();

model.setValue('items[0].name', 'item001').subscribe();
model.setValue(['items', 0, 'name'], 'item001').subscribe();

model.setCache({itemsById: {}});

const cache = model.getCache();

let version: number;
version = model.getVersion();
version = model.getVersion(['items']);

const delayedBatchingModel: falcor.Model = model.batch(100);
delayedBatchingModel.unbatch();

const teabModel: falcor.Model = model.treatErrorsAsValues();

const sourceFromModel: falcor.DataSource = model.asDataSource();

const boxingModel: falcor.Model = model.boxValues();
const unboxingModel: falcor.Model = boxingModel.unboxValues();
const noDataSourceModel: falcor.Model = model.withoutDataSource();
const somePath: falcor.Path = model.getPath();

const modelResponse = model.get<{items: {length: number}}>('items.length');

modelResponse.subscribe();
modelResponse.subscribe(res => res.json.items.length);
modelResponse.subscribe(res => res.json.items.length, error => console.error.bind(error));
modelResponse.subscribe(res => res.json.items.length, error => console.error.bind(error), () => null);

modelResponse.progressively().subscribe(res => res.json.items.length);
modelResponse.progressively().subscribe(res => res.json.items.length, error => console.error.bind(error), () => null);

const subscription = modelResponse.subscribe(res => res);
subscription.dispose();

modelResponse.then(res => res.json.items.length);
modelResponse.then(res => res, error => console.error.bind(error));
modelResponse.then<number>(res => res.json.items.length).then((l: number) => l + 1);
