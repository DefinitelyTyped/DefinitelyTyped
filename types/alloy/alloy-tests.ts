function test_controller_on() {
	const $: AlloyController = null as any;
	$.on('foo', console.log);
}

function test_controller_create_style() {
	const $: AlloyController = null as any;
	$.createStyle({
		foo: 'bar'
	});
}
