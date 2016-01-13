/// <reference path="winreg.d.ts" />

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
var par: Winreg = regKey.parent

regKey.values((err, items) => {
    var itemsC: Array<Winreg.RegistryItem> = items;
    var errorC: Error = err;

    items.forEach((item) => {
        var str: string = item.host;
    });
});

regKey.keys((err, items) => {
    var itemsC: Array<Winreg> = items;
    var errorC: Error = err;

    items.forEach((item) => {
        var regKey4: Winreg = item;
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

// get parent key
console.log('parent of "'+r2.path+'" -> "'+r2.parent.path+'"');

// list subkeys
r2.keys(function (err, items) {

    if (!err) {
        for (var i = 0, l = items.length; i < l; i++) {
            console.log('subkey of "'+r2.path+'": '+items[i].path);
        }
    }

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
});
