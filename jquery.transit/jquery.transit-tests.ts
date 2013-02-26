///<reference path="../jquery/jquery.d.ts" />
///<reference path="jquery.transit.d.ts" />


class TransitOptions implements JQueryTransitOptions {
	opacity: number;
	duration: number;
	delay: number;
	easing: string;
	complete: () => void;
	scale: any;
}

$(document).ready(function () {
	test_opacity();
	test_scale();
	test_duration();
	// Wait for all tests to complete and report results
	setTimeout(Assert.Results, 2000);
});

class Assert {
	static totalTests: number = 0;
	static passedTests: number = 0;

	static Results() {
		console.log('Tests succeeded - ' + passedTests + '/' + totalTests + '; Tests failed - ' + (totalTests - passedTests) + '/' + totalTests);
	}

	static AssertionFailed(actual: any, expected: any, test: string) {
		console.log((test || '') + ' assertion failed -- expected ' + expected.toString() + '; actual ' + actual.toString());
	}

	static Equal(actual: any, expected: any, test?: string) {
		totalTests++;
		if (actual === expected) {
			passedTests++;
			return;
		}
		AssertionFailed(actual, expected, test);
	}

	static NotEqual(actual: any, expected: any, test?: string) {
		totalTests++;
		if (actual !== expected) {
			passedTests++;
			return;
		}
		AssertionFailed(actual, expected, test);
	}
}

function test_signatures() {
	var TestObject = $('<div>');
	var options = new TransitOptions();
	options.opacity = 50;
	options.duration = 250;

	TestObject.css("scale", 2);

	TestObject.transition(options);
	TestObject.transition(options, 500);
	TestObject.transition(options, 'in');
	TestObject.transition(options, function () { var test: bool = true; });
	TestObject.transition(options, 500, 'out');
	TestObject.transition(options, 500, 'in-out', function () { var test: bool = true; });
}

function test_opacity() {
	var TestObject = $('<div>');
	TestObject.css('opacity', 25);
	Assert.Equal(TestObject.attr('style'), 'opacity: 25;', 'Opacity pre-transition test');
	TestObject.transition({ opacity: 75, duration: 1, complete: function () { Assert.Equal(TestObject.attr('style'), 'opacity: 75;', 'Opacity transition test'); } });
}

function test_scale() {
	var TestObject = $('<div>');
	TestObject.css('scale', 0.5);
	Assert.Equal(TestObject.attr('style'), 'transform: scale(0.5, 0.5);', 'Scale pre-transition test');
	TestObject.transition({ scale: 2, duration: 1, complete: function () { Assert.Equal(TestObject.attr('style'), 'transform: scale(2, 2);', 'Scale transition test'); } });
	TestObject.css('scale', [0.5, 1.0]);
	Assert.Equal(TestObject.attr('style'), 'transform: scale(0.5, 1);', 'Scale pre-transition test');
	TestObject.transition({ scale: [2, 3], duration: 1, complete: function () { Assert.Equal(TestObject.attr('style'), 'transform: scale(2, 3);', 'Scale transition test'); } });
}

function test_duration() {
	var TestObject = $('<div>');
	TestObject.css('opacity', 25);
	Assert.Equal(TestObject.attr('style'), 'opacity: 25;', 'Duration pre-transition test');
	TestObject.transition({ opacity: 75, duration: 1000, complete: function () { Assert.Equal(TestObject.attr('style'), 'opacity: 75;', 'Duration post-transition test'); } });
	// Test the transitions state partway through and assert that we're not to our final state yet.
	setTimeout(function () { Assert.NotEqual(TestObject.attr('style'), 'opacity: 75;', 'Duration intra-transition test'); }, 300);
}
