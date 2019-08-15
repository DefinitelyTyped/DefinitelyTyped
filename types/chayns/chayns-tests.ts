// Test file for chayns typings

chayns.register({
    strictMode: false,
    appName: 'chayns-typings-test'
});

chayns.ready.then(data => {
    return data;
}).catch(err => {
    return err;
});

chayns.dialog.alert('chayns-typings', 'Test chayns-typings!');
