// initialization
$('#sticker').sticky({
	topSpacing: 12,
	bottomSpacing: 12,
	className: 'class-name',
	wrapperClassName: 'wrapper-class-name',
	center: true,
	getWidthFrom: '#container',
	widthFromWrapper: false,
	responsiveWidth: true,
	zIndex: '2'
});

// update element position
$('#sticker').sticky('update');

// unstick
$("#sticker").unstick();
