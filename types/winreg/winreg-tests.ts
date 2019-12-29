

var regKey = new Winreg({
    hive: Winreg.HKCU,
    key: "\\Foo\\Bar",
    host: "\\FooBar"
})

var regKey2 = new Winreg({
    hive: Winreg.HKCU,
    key: "\\Foo\\Bar"
})

var regKey3 = new Winreg({
    key: "\\Foo\\Bar"
})

var str: string = regKey.parent.key
var par: Winreg.Registry = regKey.parent

regKey.values((err, items) => {
    var itemsC: Array<Winreg.RegistryItem> = items;
    var errorC: Error = err;

    items.forEach((item) => {
        var str: string = item.host;
    });
});

regKey.keys((err, items) => {
    var itemsC: Array<Winreg.Registry> = items;
    var errorC: Error = err;

    items.forEach((item) => {
        var regKey4: Winreg.Registry = item;
    });
});

//--- TEST CASE ---

// create a registry client
var r1 = new Winreg({
    hive: Winreg.HKCU,
    key:  '\\Software\\Microsoft\\Windows\\CurrentVersion\\Run'
})
var r2 = new Winreg({
    hive: Winreg.HKCU,
    key:  '\\Control Panel\\Desktop'
})
var r3 = new Winreg({
    host: 'blah',
    arch: 'x64'
})

// get parent key
console.log('parent of "'+r2.path+'" -> "'+r2.parent.path+'"');

// list values
r1.values(function (err, items) {

        if (!err) {
            console.log(JSON.stringify(items, null, '\t'));
        }

        // query named value
        r1.get(items[0].name, function (err, item) {

            if (!err) {
                console.log(JSON.stringify(item, null, '\t'));
            }

            // add value
            r1.set('bla', Winreg.REG_SZ, 'hello world!', function (err) {

                if (!err) {
                    console.log('value written');
                }

                // delete value
                r1.remove('bla', function (err) {

                    if (!err) {
                        console.log('value deleted');
                    }

                });
            });
        });
});

// check for key
r2.keyExists(function (err, exists) {

    if (!err) {
        if (exists) {
            console.log('key ' + r2.key + ' exists');
        } else {

            console.log('key ' + r2.key + ' does not exist');
        }
    }

    // check for value
    r2.valueExists('bla', function (err, exists) {

        if (!err) {
            if (exists) {
                console.log('value bla exists on key ' + r2.key);
            } else {
                console.log('value bla does not exist on key ' + r2.key);
            }
        }

    });
});

// create new key or no-op
r3.create(function (err) {

    if (!err) {
        console.log('key created');
    }

    // clear subkeys of key and values on key
    r3.clear(function (err) {

        if (!err) {
            console.log('key cleared');
        }

        // remove this key and all its subkeys
        r3.destroy(function (err) {

            if (!err) {
                console.log('key destroyed');
            }

        });
    });
});
