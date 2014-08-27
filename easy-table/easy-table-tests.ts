/// <reference path="easy-table.d.ts" />

import EasyTable = require('easy-table');

var table = new EasyTable();

table.cell('aa', 1);
table.cell('bb',1);
table.newRow();

table.cell('aa', 1);
table.cell('bb',1);

table.print();

