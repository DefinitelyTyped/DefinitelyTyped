var imageList:angular.bootstrap.lightbox.ILightboxImageInfo[] = [];
imageList.push({
	url: 'url1',
	width: 100,
        height: 100
});
imageList.push({
	url: 'url2',
	width: 100,
        height: 100,
        thumbUrl: 'thumbUrl',
        caption: 'caption'
});

var lightBox:angular.bootstrap.lightbox.ILightbox = <any> {};
lightBox.openModal(imageList, 0);

var provider:angular.bootstrap.lightbox.ILightBoxProvider = <any> {};
provider.templateUrl = 'templateUrl';
provider.calculateImageDimensionLimits = (dimensions:angular.bootstrap.lightbox.IImageDimensionParameter):angular.bootstrap.lightbox.IImageDimensionLimits=> {
	return {
		minWidth: 100,
		minHeight: 100,
		maxWidth: dimensions.windowWidth - 102,
		maxHeight: dimensions.windowHeight - 136
	};
};
provider.calculateModalDimensions = (dimensions:angular.bootstrap.lightbox.IModalDimensionsParameter):angular.bootstrap.lightbox.IModalDimensions=> {
    return {
      width: Math.max(500, dimensions.imageDisplayWidth + 42),
     height: Math.max(500, dimensions.imageDisplayHeight + 76)
    };
  };