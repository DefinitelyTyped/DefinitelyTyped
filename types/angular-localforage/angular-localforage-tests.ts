var app = angular.module('angular-localForage-tests', ['LocalForageModule']);
app.config(function (localStorageServiceProvider:angular.localForage.ILocalForageProvider) {

    //TODO
});

var $rootScope:angular.IRootScopeService,
    $localForage:angular.localForage.ILocalForageService,
    instanceVersion = 0;

// create a fresh instance
$localForage.clear().then(function () {
    $localForage = $localForage.createInstance({
        name: ++instanceVersion
    });
});

$localForage.getItem('this key is unknown').then(function (value) {

});


$localForage.setItem('myName', 'Olivier Combe').then(function (data) {

    $localForage.getItem('myName').then(function (data) {
    });
});

var values = ['Olivier Combe', 'AngularJs', 'Open Source'];

$localForage.setItem(['myName', 'myPassion', 'myHobbie'], values).then(function (data) {

    $localForage.getItem(['myHobbie', 'myName']).then(function (data) {
    });

});

$localForage.removeItem('myName').then(function () {

    $localForage.getItem('myName').then(function (data) {
    });

});

$localForage.removeItem(['myName', 'myPassion']).then(function () {

    $localForage.getItem(['myName', 'myPassion', 'myHobbie']).then(function (data) {
    });

});

$localForage.pull('myName').then(function (data) {

    $localForage.getItem('myName').then(function (data) {
    });

});
$localForage.pull(['myName', 'myPassion']).then(function (data) {

    $localForage.getItem(['myName', 'myPassion', 'myHobbie']).then(function (data) {
    });

});


$localForage.setItem('myName', 'Olivier Combe').then(function (d) {

    $localForage.getItem('myName').then(function (data) {
    });

});


$localForage.setDriver('localStorageWrapper').then(function () {
    $localForage.setItem('myName', 'Olivier Combe').then(function (d) {
        $localForage.getItem('myName').then(function (data) {
        });
    });
});

$localForage.setItem('myArray', [{
    $$hashKey: '00A',
    name: 'Olivier Combe'
}]).then(function (d) {

    $localForage.getItem('myArray').then(function (data) {
    });

});

$localForage.setDriver('localStorageWrapper').then(function () {
    $localForage.setItem('myArray', [{
        $$hashKey: '00A',
        name: 'Olivier Combe'
    }]).then(function (d) {

        $localForage.getItem('myArray').then(function (data) {
        });

    });
});

var aFileParts = ["<a id=\"a\"><b id=\"b\">hey!<\/b><\/a>"];
var oMyBlob = new Blob(aFileParts, {"type": "text\/xml"}); // the blob

$localForage.setItem('myBlob', oMyBlob).then(function (data) {
});

// $localForage.setItem(['myName', 'myPassion', 'myHobbie'], 'value');

// $localForage.setItem();


$localForage.iterate(function (value, key) {
}).then(function (data) {
});

$localForage.iterate(function (value, key) {
    if (key == 'myPassion') {
        return value;
    }
}).then(function (data) {
});

$localForage.bind($rootScope, 'key').then(function(data) {
});

$localForage.bind($rootScope, {key: 'key'}).then(function(data) {
});

$localForage.bind($rootScope, {key: 'key', defaultValue: 'defaultValue'}).then(function(data) {
});

$localForage.bind($rootScope, {key: 'key', scopeKey: 'scopeKey'}).then(function(data) {
});

$localForage.bind($rootScope, {key: 'key', name: 'name'}).then(function(data) {
});
