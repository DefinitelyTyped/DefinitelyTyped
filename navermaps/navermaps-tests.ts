var map = new naver.maps.Map('map');
map.setMapTypeId(naver.maps.MapTypeId.HYBRID);


var jeju = new naver.maps.LatLng(33.3590628, 126.534361);

map.setCenter(jeju); // 중심 좌표 이동
map.setZoom(13);     // 줌 레벨 변경

var seoul = new naver.maps.LatLngBounds(
    new naver.maps.LatLng(37.42829747263545, 126.76620435615891),
    new naver.maps.LatLng(37.7010174173061, 127.18379493229875));

map.fitBounds(seoul); // 좌표 경계 이동

map.panBy(new naver.maps.Point(10, 10)); // 우측 하단으로 10 픽셀 이동

var map = new naver.maps.Map('map', {
    mapTypeId: naver.maps.MapTypeId.HYBRID
});

var registry = new naver.maps.MapTypeRegistry();

var map = new naver.maps.Map('map', {
    mapTypes: registry,
    mapTypeId: naver.maps.MapTypeId.SATELLITE
});

map.mapTypes.set(naver.maps.MapTypeId.SATELLITE, naver.maps.NaverMapTypeOption.getSatelliteMap());
map.mapTypes.set(naver.maps.MapTypeId.HYBRID, naver.maps.NaverMapTypeOption.getHybridMap());

map.setMapTypeId(naver.maps.MapTypeId.NORMAL); // error thrown

var MyMapType = {
    name: "Alphabet",
    minZoom: 0,
    maxZoom: 22,
    projection: naver.maps.EPSG3857,
    tileSize: new naver.maps.Size(50, 50),
    getTile: function(x, y, z) {
        var w = this.tileSize.width,
            h = this.tileSize.height;

        var ascii = parseInt(Math.abs(x + y) % 26, 10) + 65;
        alphabet = String.fromCharCode(ascii);
        var tile = document.createElement('div');

        tile.style.width = w +'px';
        tile.style.height = w +'px';

        return tile;
    }
};

var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10,
    mapTypeId: 'mine',
    mapTypes: new naver.maps.MapTypeRegistry({
        'mine': MyMapType
    }),
    mapTypeControl: true,
    mapTypeControlOptions: {
        style: naver.maps.MapTypeControlStyle.DROPDOWN
    }
});

var GTA5MapTypeOption = function(name, type) {
    this.name = name;
    this.type = type;
};
GTA5MapTypeOption.prototype = {
    constructor: GTA5MapTypeOption,

    name: '',
    type: '',
    projection: naver.maps.EPSG3857,
    minZoom: 1,
    maxZoom: 6,
    tileSize: new naver.maps.Size(256, 256),
    TRANSPARENT_URL: 'http://static.naver.net/maps/dot.gif',
    tileRanges: [1, 2, 4, 8, 16, 32],

    getName: function() {
        return this.name;
    },

    getTileUrl: function(x, y, z) {
        var tileRange = this.tileRanges[z - 1];

        if ((x >=0 && x < tileRange) && (y >=0 && y < tileRange)) {
            return "http://gta-5-map.com/" +this.type+'/'+z+'-'+x+'_'+y+".png";
        } else {
            return this.TRANSPARENT_URL;
        }
    },

    onerror: function(tileImg) {
        tileImg.src = this.TRANSPARENT_URL;
    }
};

var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(74.92514151088395, -127.880859375),
    zoom: 2,
    mapTypes: new naver.maps.MapTypeRegistry({
        "Atlas": new naver.maps.ImageMapType(new GTA5MapTypeOption("Atlas", "Tiles_ATLAS")),
        "Satellite": new naver.maps.ImageMapType(new GTA5MapTypeOption("Satellite", "Tiles_SAT")),
    })
});

map.setMapTypeId("Atlas");

var MyMapType = {
    name: "Alphabet",
    minZoom: 0,
    maxZoom: 22,
    tileSize: new naver.maps.Size(50, 50),
    getTileData: function(x, y, z) {
        var w = this.tileSize.width,
            h = this.tileSize.height,
            canvas = document.createElement("canvas"),
            ctx = canvas.getContext("2d");

        var ascii = parseInt(Math.abs(x + y) % 26, 10) + 65;
        alphabet = String.fromCharCode(ascii);

        canvas.width = w;
        canvas.height = h;

        ctx.globalAlpha = 1 - ((ascii - 65) * 0.04);

        ctx.rect(0, 0, w, h);
        ctx.fillStyle = "#000";
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#aaa";
        ctx.stroke();

        ctx.font = "bold " + (Math.min(w, h) - 10) + "px Arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.fillStyle = "#fff";
        ctx.fillText(alphabet, w / 2, h / 2);

        return ctx.getImageData(0, 0, w, h);
    }
};
