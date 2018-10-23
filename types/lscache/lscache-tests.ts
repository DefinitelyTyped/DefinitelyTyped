

// Copied examples directly from lscache github site with slight modifications
alert(lscache.supported());

lscache.enableWarnings(true);

lscache.set('greeting', 'Hello World!', 2);

alert(lscache.get('greeting'));

lscache.remove('greeting');

lscache.set('data', { 'name': 'Pamela', 'age': 26 }, 2);

alert(lscache.get('data').name);