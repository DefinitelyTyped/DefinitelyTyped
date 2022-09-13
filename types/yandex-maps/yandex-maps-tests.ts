const defaultBehavior = ['drag', 'scrollZoom', 'dblClickZoom', 'multiTouch', 'rightMouseButtonMagnifier'];
const element: HTMLDivElement = document.createElement("div");

const zoomControl = new ymaps.control.ZoomControl({
    options: {
        adjustMapMargin: false,
        position: {
            top: 108,
            right: 10,
            bottom: 'auto',
            left: 'auto',
        },
        size: 'small',
        visible: true,
        zoomDuration: 200,
        zoomStep: 1
    },
});
zoomControl.clear();

const typeSelector = new ymaps.control.TypeSelector({
    options: {
        panoramasItemMode: 'off',
    },
});

const map = new ymaps.Map(
    element,
    {
        behaviors: defaultBehavior,
        center:    [55.76, 37.64],
        controls:  [
            'trafficControl',
            zoomControl,
            typeSelector,
        ],
        type:      'yandex#map',
        zoom:      10
    },
    {
        autoFitToViewport: 'always'
    });

map.behaviors.disable(defaultBehavior);

map.events.add('click', (event) => { console.log(event.originalEvent); });
map.events.add('dblclick', (event) => { console.log(event.originalEvent); });
map.events.add('mousemove', (event) => { console.log(event.originalEvent); });
map.events.add('touchstart', (event) => { console.log(event.originalEvent); });
map.events.add('wheel', (event) => { console.log(event.originalEvent); });
map.events.add('keypress', (event) => { console.log(event.originalEvent); });

const balloonLayout = ymaps.templateLayoutFactory.createClass(
    '<div class="map-marker-balloon"></div>',
    {
        build(this: ymaps.ILayout): void {
            ((this.constructor as any).superclass as ymaps.layout.templateBased.Base).build.call(this);
            this.getParentElement().children.item(0)!.children.item(0)!.appendChild((this.getData() as any).properties.get('balloonContent'));
        }
    }
);

const mapMarker = new ymaps.Placemark([55.76, 37.64], {}, {
    balloonContent:         'test',
    balloonAutoPan:         true,
    balloonCloseButton:     false,
    balloonZIndex:          '10',
    balloonLayout,
    balloonPanelMaxMapArea: 0,
    iconLayout:             'default#image',
    iconImageHref:          './test/icon.png',
    iconImageSize:          [26, 26],
    iconImageOffset:        [13, 13],
    hasBalloon:             true,
    hasHint:                false,
    hideIconOnBalloonOpen:  true,
    openBalloonOnClick:     false,
    zIndex:                 1
});

mapMarker.events.add('click', (event) => { console.log(event); });
mapMarker.events.add('dblclick', (event) => { console.log(event); });
mapMarker.events.add('mousemove', (event) => { console.log(event); });
mapMarker.events.add('wheel', (event) => { console.log(event); });

map.geoObjects.add(mapMarker);

map.setCenter((mapMarker.geometry as ymaps.IPointGeometry).getCoordinates() || [55.76, 37.64]);

map.layers.each((layer) => {
    if (layer.getBrightness) {
        layer.getBrightness();
    }
});

map.setZoom(13);

const shapeCircle = new ymaps.shape.Circle(
    new ymaps.geometry.pixel.Circle([0, 0], 10)
);
shapeCircle.getGeometry();

const placemark = new ymaps.Placemark([0, 1], {});
placemark.events.add('dragend', (event: ymaps.IEvent<{}, ymaps.geometry.Point>) => {
    const target = event.originalEvent.target;
    if (!target) {
        return;
    }

    const geometryPoint = target.geometry;

    if (!geometryPoint) {
        return;
    }

    const coordinates = geometryPoint.getCoordinates();

    if (!coordinates) {
        return;
    }

    coordinates.map((d: number) => d);
});

const balloon = new ymaps.Balloon(map, {});
balloon.destroy();

const layersCollections = map.layers.getAll();
const layers = layersCollections.reduce((acc: ymaps.Layer[], collection: ymaps.Collection<ymaps.Layer>) => [...acc, ...collection.getAll()], []);
const mapLayer = layers.find((layer: ymaps.Layer) => {
    if (!layer.getAlias) {
      return false;
    }

    return layer.getAlias() === 'map';
});

if (mapLayer) {
    const htmlElement = mapLayer.getElement();
    htmlElement.className = 'grey';
}

const panorama = ymaps.panorama.createPlayer(element, [0, 0]);
panorama.then((player) => player.destroy());

ymaps.panorama.locate([0, 0], {
    layer: 'yandex#airPanorama'
});

ymaps.panorama.Base.createPanorama({
    angularBBox: [0, 0],
    position: [0, 0],
    tilesLevels: [],
    tileSize: [0, 0]
});

ymaps.modules.define('test.module', (provide) => {
    provide(function(this: any, value: any) {
        this.value = value;
    });
});

ymaps.modules.define('test.module1', [
    'test.module',
    'templateLayoutFactory'
], (provide, testModule, templateLayoutFactory: typeof ymaps.templateLayoutFactory) => {
    const layoutClass = templateLayoutFactory.createClass('<div>{{ properties.header }}</div>', {
        testMethod() {
            return testModule;
        }
    });

    provide(layoutClass);
});

ymaps.suggest('Mos', {
    results: 5,
    boundedBy: [[30, 40], [50, 50]],
    provider: 'yandex#map',
}).then(items => {
    return items.filter(el => el.value.toLowerCase() === 'moscow');
}).then(console.log);

ymaps.geocode('Moscow'); // $ExpectType Promise<IGeocodeResult>
ymaps.geocode([55.751244, 37.618423], {
    boundedBy: [[30, 40], [50, 50]],
    json: false,
    kind: 'district',
    provider: 'yandex#map',
    results: 5,
    searchCoordOrder: 'latlong',
    skip: 0,
    strictBounds: false
}).then(result => result.geoObjects.get(0) as ymaps.GeocodeResult)
.then(result => result.getAddressLine() === 'Moscow');

const geocodeProvider: ymaps.IGeocodeProvider = {
    suggest: (_request, _options) => {
        throw new Error('Function not implemented.');
    },
    geocode: (_request, _options) => {
        throw new Error('Function not implemented.');
    }
};

geocodeProvider.geocode('Moscow'); // $ExpectType Promise<object>

// @ts-expect-error
geocodeProvider.geocode([55.751244, 37.618423]);
