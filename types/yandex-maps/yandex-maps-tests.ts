const defaultBehavior = ["drag", "scrollZoom", "dblClickZoom", "multiTouch", "rightMouseButtonMagnifier"];
const element: HTMLDivElement = document.createElement("div");
const map = new ymaps.Map(
	element,
	{
		behaviors: defaultBehavior,
		center:    [55.76, 37.64],
		controls:  [],
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
			(<ymaps.layout.templateBased.Base> (<any> this.constructor).superclass).build.call(this);
			this.getParentElement().children.item(0).children.item(0).appendChild((<any> this.getData()).properties.get("balloonContent"));
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

map.setCenter((<ymaps.IPointGeometry> mapMarker.geometry).getCoordinates() || [55.76, 37.64]);

map.setZoom(13);
