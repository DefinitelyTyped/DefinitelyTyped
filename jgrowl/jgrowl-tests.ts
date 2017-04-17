/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="jgrowl.d.ts" />

/**
 * @summary Tests jGrowl unobtrusive notification without any configuration.
 */
function test_WithNoConfiguration() {
	$.jGrowl('Some notification!');
}

/**
 * @summary Tests jGrowl unobtrusive notification with some configuration parameters.
 */
function test_WithSimpleConfiguration() {
	$.jGrowl('Some notification!', {
		sticky: true,
		header: 'Information'
	});
}