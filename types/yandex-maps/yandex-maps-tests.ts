const defaultBehavior = ["drag", "scrollZoom", "dblClickZoom", "multiTouch", "rightMouseButtonMagnifier"];
const element: HTMLDivElement = document.createElement("div");

const zoomControl = new ymaps.control.ZoomControl({
    options: {
        position: {
            top: 108,
            right: 10,
            bottom: 'auto',
            left: 'auto',
        },
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
        type:      "yandex#map",
        zoom:      10
    },
    {
        autoFitToViewport: "always"
    });

map.behaviors.disable(defaultBehavior);

map.events.add("click", () => {
});

const balloonLayout = ymaps.templateLayoutFactory.createClass(
    "<div class=\"map-marker-balloon\"></div>",
    {
        build(this: ymaps.ILayout): void {
            ((this.constructor as any).superclass as ymaps.layout.templateBased.Base).build.call(this);
            this.getParentElement().children.item(0)!.children.item(0)!.appendChild((this.getData() as any).properties.get("balloonContent"));
        }
    }
);

const mapMarker = new ymaps.Placemark(
    [55.76, 37.64],
    {
        balloonContent:         "test",
        balloonAutoPan:         true,
        balloonLayout,
        balloonPanelMaxMapArea: 0,
        iconLayout:             "default#image",
        iconImageHref:          "./test/icon.png",
        iconImageSize:          [26, 26],
        iconImageOffset:        [13, 13],
        hasBalloon:             true,
        hasHint:                false,
        hideIconOnBalloonOpen:  true,
        openBalloonOnClick:     false,
        zIndex:                 1
    }
);

mapMarker.events.add("click", (event: ymaps.Event) => {
});

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
