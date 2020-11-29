import OverlayCompleteEvent = google.maps.drawing.OverlayCompleteEvent;
import OverlayType = google.maps.drawing.OverlayType;
import Marker = google.maps.Marker;
import Polygon = google.maps.Polygon;
import Polyline = google.maps.Polyline;
import Rectangle = google.maps.Rectangle;
import Circle = google.maps.Circle;

const overlayCompleteEvent: OverlayCompleteEvent = {} as any;

overlayCompleteEvent.type; // $ExpectType OverlayType
overlayCompleteEvent.overlay; // $ExpectType Marker | Polygon | Polyline | Rectangle | Circle

switch (overlayCompleteEvent.type) {
    case OverlayType.MARKER:
        overlayCompleteEvent.overlay; // $ExpectType Marker
        break;
    case OverlayType.POLYGON:
        overlayCompleteEvent.overlay; // $ExpectType Polygon
        break;
    case OverlayType.POLYLINE:
        overlayCompleteEvent.overlay; // $ExpectType Polyline
        break;
    case OverlayType.RECTANGLE:
        overlayCompleteEvent.overlay; // $ExpectType Rectangle
        break;
    case OverlayType.CIRCLE:
        overlayCompleteEvent.overlay; // $ExpectType Circle
        break;
    default:
        overlayCompleteEvent; // $ExpectType never
        break;
}

const overlayCompleteMarkerEvent: OverlayCompleteEvent = {
    overlay: new Marker(),
    type: OverlayType.MARKER,
};

const overlayCompletePolygonEvent: OverlayCompleteEvent = {
    overlay: new Polygon(),
    type: OverlayType.POLYGON,
};

const overlayCompletePolylineEvent: OverlayCompleteEvent = {
    overlay: new Polyline(),
    type: OverlayType.POLYLINE,
};

const overlayCompleteRectangleEvent: OverlayCompleteEvent = {
    overlay: new Rectangle(),
    type: OverlayType.RECTANGLE,
};

const overlayCompleteCircleEvent: OverlayCompleteEvent = {
    overlay: new Circle(),
    type: OverlayType.CIRCLE,
};

const wrongOverlayCompleteEvent1: OverlayCompleteEvent = { // $ExpectError
    overlay: new Marker(),
    type: OverlayType.POLYGON,
};

const wrongOverlayCompleteEvent2: OverlayCompleteEvent = { // $ExpectError
    overlay: new Marker(),
    type: OverlayType.POLYLINE,
};

const wrongOverlayCompleteEvent3: OverlayCompleteEvent = { // $ExpectError
    overlay: new Marker(),
    type: OverlayType.RECTANGLE,
};

const wrongOverlayCompleteEvent4: OverlayCompleteEvent = { // $ExpectError
    overlay: new Marker(),
    type: OverlayType.CIRCLE,
};

const wrongOverlayCompleteEvent5: OverlayCompleteEvent = { // $ExpectError
    overlay: new Polygon(),
    type: OverlayType.MARKER,
};

export { };
