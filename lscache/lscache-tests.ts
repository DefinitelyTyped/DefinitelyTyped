/// <reference path="lscache.d.ts" />

// Copied examples directly from lscache github site with slight modifications

lscache.set('greeting', 'Hello World!', 2);

alert(lscache.get('greeting'));

lscache.remove('greeting');

lscache.set('data', { 'name': 'Pamela', 'age': 26 }, 2);

alert(lscache.get('data').name);