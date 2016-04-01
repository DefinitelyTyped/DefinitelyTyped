///<reference path="easy-table.d.ts" />

import Table = require("easy-table");

let data = [
	{ id: 123123, desc: 'Something awesome', price: 1000.00 },
	{ id: 245452, desc: 'Very interesting book', price: 11.45 },
	{ id: 232323, desc: 'Yet another product', price: 555.55 }
];

interface Data {
	id: number;
	desc: string;
	price: number;
}

function sample_test() {
	let t = new Table();
	data.forEach(function(product) {
		t.cell('Product Id', product.id);
		t.cell('Description', product.desc);
		t.cell('Price, USD', product.price, Table.number(2));
		t.newRow();
	});
	console.log(t.toString());
}

function static_print() {
	console.log(Table.print(data));
}

function currency(val: number, width?: number) {
	var str = val.toFixed(2);
	return width ? str : Table.padLeft(str, width);
}

function sample_2() {
	Table.print<Data>(data, {
		desc: { name: 'description' },
		price: { printer: Table.number(2) }
	});
}

function sample_3() {
	Table.print(data, function(item, cell) {
		cell('Product id', item.id)
		cell('Price, USD', item.price)
	}, function(table) {
		return table.print()
	})
}

function sample_4() {
	Table.print(data[0]);
}

function sort_strings() {
	let t = new Table();
	t.sort(['Price, USD|des']) // will sort in descending order
	t.sort(['Price, USD|asc']) // will sort in ascending order
	t.sort(['Price, USD']) // sorts in ascending order by default
}

function totalling() {
	let t = new Table();
	t.total('Price, USD');
	t.total('Price, USD', {
		printer: Table.aggr.printer('Avg: ', currency),
		reduce: Table.aggr.avg,
		init: 0
	})

	// or alternatively
	t.total('Price, USD', {
		printer: (val, width) => {
			return Table.padLeft('Avg: ' + currency(val), width);
		},
		reduce: (acc: number, val: number, idx: number, len: number) => {
			acc = acc + val;
			return idx + 1 == len ? acc / len : acc;
		}
	});
}

function other_samples() {
	var t = new Table();

	data.forEach(product => {
		t.cell('Product Id', product.id)
		t.cell('Description', product.desc)
		t.cell('Price, USD', product.price, Table.number(2))
		t.newRow()
	})

	t.sort(['Price, USD'])
	t.total('Price, USD', {
		printer: Table.number(2)
	})

	t.log()
	Table.log(data, { price: { printer: Table.number(2) } })
	Table.log(data[0])
}
