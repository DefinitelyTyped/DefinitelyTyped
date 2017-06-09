const model = new falcor.Model({source: new falcor.HttpDataSource('/model.json')});

model.get('greeting').then(response => {
    document.write(response.json.greeting);
});

model.set({
    json: {
        someAtom: falcor.atom('value'),
        someRef: falcor.ref('someAtom'),
        someError: falcor.error('an error'),
    }
});

model.set(falcor.pathValue('greeting', 'Hello, world'));
