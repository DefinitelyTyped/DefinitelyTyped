// basic usage
$(document).ready(() => {
	$('#input').maskMoney();
	$('#input').maskMoney('mask');
	$('#input').maskMoney('mask', 1999.99);
	$('#input').maskMoney('unmasked');
	$('#input').maskMoney('destroy');

	// with options
	const options: jQueryMaskMoney.Options = {
		prefix: 'R$ ',
		suffix: ' R$',
		affixesStay: false,
		thousands: '.',
		decimal: ',',
		precision: 3,
		allowZero: true,
		allowNegative: true
	};
	$('#input').maskMoney(options);
});
