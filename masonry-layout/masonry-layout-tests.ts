/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="masonry.d.ts" />

// Responsive layouts
function testResponsiveLayouts() {
	$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});
}

// Recommended Options
function testRecommendedOptions() {
	$('.grid').masonry({
		columnWidth: 200,
		itemSelector: '.grid-item'
	});

	var msnry = new Masonry('.grid', {
		columnWidth: 200,
		itemSelector: '.grid-item'
	});
}

// Extended Options
function testExtendedOptions() {
	var msnry = new Masonry('.grid', {
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true,
		gutter: '.gutter-sizer',
		stamp: '.stamp',
		fitWidth: true,
		originLeft: true,
		originTop: true,
		containerStyle: {
			position: 'relative'
		},
		transitionDuration: '0.4s',
		resize: true,
		initLayout: true
	});
}
