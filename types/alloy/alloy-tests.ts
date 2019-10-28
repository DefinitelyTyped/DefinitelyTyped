function test_controller_on() {
	$.on('foo', console.log);
}

function test_controller_create_style() {
	$.createStyle({
		foo: 'bar'
	});
}