import * as gdal from 'gdal';

// gdal.checksumImage(srcRasterBand, 0, 0, 512, 512);

gdal.config.get('GDAL_DATA');
gdal.config.set('GDAL_DATA', 'C:\\warmerda\\bld\\data');

/*gdal.contourGenerate({
	src: srcRasterBand,
	dst: dstRasterBand
});*/

gdal.decToDMS(60, 'lat');
gdal.decToDMS(60, 'lat', 2);

/*gdal.fillNodata({

});*/

let creationOptionsArray: string[];
creationOptionsArray = ['VRT_CREATION_OPTION=...'];
let creationOptionsObject: object;
creationOptionsObject = {
	VRT_CREATION_OPTION: '...'
};
gdal.open('C:\\datasets\\ogr.shp');
gdal.open('C:\\datasets\\ogr.shp', 'r');
gdal.open('C:\\datasets\\ogr.shp', 'r', 'ESRI Shapefile');
gdal.open('C:\\datasets\\ogr.shp', 'r', ['ESRI Shapefile']);
gdal.open('C:\\datasets\\ogr.shp', 'r+');
gdal.open('C:\\datasets\\ogr.shp', 'r+', 'ESRI Shapefile');
gdal.open('C:\\datasets\\ogr.shp', 'r+', ['ESRI Shapefile']);
gdal.open('C:\\datasets\\raster.vrt', 'w', 'VRT');
gdal.open('C:\\datasets\\raster.vrt', 'w', 'VRT', 512, 512, 3, 1, creationOptionsArray);
gdal.open('C:\\datasets\\raster.vrt', 'w', 'VRT', 512, 512, 3, 1, creationOptionsObject);
gdal.open('C:\\datasets\\raster.vrt', 'w', ['VRT']);
gdal.open('C:\\datasets\\raster.vrt', 'w', ['VRT'], 512, 512, 3, 1, creationOptionsArray);
gdal.open('C:\\datasets\\raster.vrt', 'w', ['VRT'], 512, 512, 3, 1, creationOptionsObject);

/*let polygonizeOptions: gdal.PolygonizeOptions;
polygonizeOptions = {
	src: srcRasterBand,
	dst: dstRasterBand,
	connectedness: 1,
	mask: maskRasterBand,
	pixValField: 1,
	useFloats: true
};
gdal.polygonize(polygonizeOptions);
gdal.polygonize({
	src: srcRasterBand,
	dst: dstRasterBand,
	pixValField: 1
});*/

gdal.quiet();

/*let reprojectImageOptions: gdal.ReprojectImageOptions;
reprojectImageOptions = {
	src: srcRasterBand,
	dst: dstRasterBand,
	s_srs: sourceSRS,
	t_srs: targetSRS
};
gdal.reprojectImage(reprojectImageOptions);
gdal.reprojectImage({

});

gdal.sieveFilter({

});

gdal.suggestedWarpOutput({

});*/

gdal.verbose();
