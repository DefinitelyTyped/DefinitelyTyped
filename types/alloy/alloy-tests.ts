function test_controller_on() {
	var $: AlloyController = null as any;
	$.on('foo', console.log);
}

function test_controller_create_style() {
	var $: AlloyController = null as any;
	$.createStyle({
		foo: 'bar'
	});
}
