mapsforge.embedded.initialize(["/mnt/sdcard/spain.map",0,0]); //Creates the view
mapsforge.embedded.setCenter(43.360056,-5.845757); //Sets the center of the view
mapsforge.embedded.setMaxZoom(18);
mapsforge.embedded.setZoom(15);

//Adding a marker
var markerKey: number;
mapsforge.embedded.addMarker([mapsforge.embedded.MARKER_YELLOW,43.360056,-5.845757],function(key){markerKey = key;});

//Adding a polyline
var points = [43.360056,-5.845757, 43.160056,-5.645757,43.560056,-5.895757];
var polylineKey: number;
mapsforge.embedded.addPolyline([mapsforge.embedded.COLOR_GREEN,10,points], function(key){polylineKey = key;}, function(error){alert(error);});



mapsforge.cache.initialize("/mnt/sdcard/spain.map"); //Initializes the renderer with the offline map

/*Now you can use the Leaflet code seen before*/

mapsforge.cache.setExternalCache(false); //Sets the cache to internal for faster performance

//Now we set the cache size to 50 MB. This will increase the time between cleanings, but
//it will also make those cleanings slower, since there are a lot more of images to
//delete...so be careful when you choose the cache size
mapsforge.cache.setMaxCacheSize(50);



var L: any;

interface TilePoint {
    x: number;
    y: number;
    z: number;
}

interface Tile {
    src: string;
    _layer: any;
    onload: any;
    onerror: any;
}

L.OfflineTileLayer = L.TileLayer.extend({
    getTileUrl : function(tilePoint: TilePoint, tile: Tile) {
        var zoom = tilePoint.z, x = tilePoint.x, y = tilePoint.y;

        if (mapsforge.cache) {
            mapsforge.cache.getTile([x,y,zoom], function(result) {tile.src=result;},
                function() {tile.src = "path to an error image";});
        }else{
            tile.src = "path to an error image";
        }
    },

    _loadTile: function (tile: Tile, tilePoint: TilePoint) {
        tile._layer = this;
        tile.onload = this._tileOnLoad;
        tile.onerror = this._tileOnError;

        this._adjustTilePoint(tilePoint);
        this.getTileUrl(tilePoint, tile);

        this.fire('tileloadstart', {
            tile: tile,
            url: tile.src
        });
    }
});
