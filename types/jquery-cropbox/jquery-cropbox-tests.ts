var cropboxWithDefaultSettings = $("#element").cropbox();

var cropboxOptions: jQueryCropBox.CropboxOptions = {
    height: 500,
    zoom: 5,
    width: 0.5,
};

var cropboxWithOptions = $("#element").cropbox(cropboxOptions);

cropboxWithOptions.zoomIn();
cropboxWithOptions.zoomOut();
cropboxWithOptions.zoom(50);

var cropDragOption: jQueryCropBox.CropboxDragOptions = {
    startX: 10,
    startY: 0,
    dx: 100,
    dy: 100
};

cropboxWithOptions.drag(cropDragOption);

var cropboxSetCropOption: jQueryCropBox.CropboxSetCropOptions = {
    cropX: 10,
    cropY: 10,
    cropW: 50,
    cropH: 50
};

cropboxWithOptions.setCrop(cropboxSetCropOption);

cropboxWithOptions.update();
cropboxWithOptions.getDataURL();
cropboxWithOptions.getBlob();
cropboxWithOptions.remove();

cropboxWithOptions.on("cropbox",(e: Event, data: any, img: jQueryCropBox.Cropbox) => {

   //DoStuff

});
