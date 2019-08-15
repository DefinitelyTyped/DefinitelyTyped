

// Copied examples directly from lscache github site with slight modifications
alert(lscache.supported());

lscache.enableWarnings(true);

lscache.set('greeting', 'Hello World!', 2);

alert(lscache.get('greeting'));

lscache.remove('greeting');

lscache.set('data', { 'name': 'Pamela', 'age': 26 }, 2);

alert(lscache.get('data').name);

(function() {
    var expiryMilliseconds = 1000; //time units is seconds
    lscache.setExpiryMilliseconds(expiryMilliseconds);
    var key = 'thekey';
    var numExpiryUnits = 2; // expire after two seconds
    lscache.set(key, 'some value', numExpiryUnits);
    setTimeout(function() {
        alert(lscache.get(key) === null);
    }, expiryMilliseconds * numExpiryUnits + 1);
});