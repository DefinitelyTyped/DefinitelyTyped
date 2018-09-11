import * as clear from 'clear-require';

clear('my-module'); // clear specific module from require cache

clear.all(); // clear all of the require cache

clear.match(new RegExp('^.*$')); // clear all modules which match the RegExp
clear.match(/^.*$/); // similar to above but using /regex/ notation
