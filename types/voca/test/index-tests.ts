import indexOf = require('voca/index_of');
import lastIndexOf = require('voca/last_index_of');
import search = require('voca/search');

indexOf();
indexOf('morning');
indexOf('morning', 'n');

lastIndexOf();
lastIndexOf('morning');
lastIndexOf('morning', 'n');

search('morning', /rn/);
search('evening', '/d/');
