


var moneyFormat = wNumb({
	mark: '.',
	thousand: ',',
	prefix: '$ ',
	postfix: ' p.p.'
});

moneyFormat.to( 301980.62 );

moneyFormat.from( '$ 301,980.62 p.p.' );

var Format = wNumb({
	prefix: '$ ',
	decimals: 3,
	thousand: ','
});

Format = wNumb({
	thousand: '.',
	encoder: function( a ){
		return a * 1E7;
	},
	decoder: function( a ){
		return a / 1E7;
	}
});

Format = wNumb({
	prefix: '$',
	postfix: ',-',
	thousand: ','
});


Format = wNumb({
	prefix: '$',
	negativeBefore: '[NEGATIVE] '
});

