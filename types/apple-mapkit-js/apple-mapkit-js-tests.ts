mapkit.init({
  language: 'en',
  authorizationCallback: done => {
    done('my-map-token');
  },
});

const map: mapkit.Map = new mapkit.Map(
  document.querySelector<HTMLElement>('.test'),
  {
    isZoomEnabled: true,
    isRotationEnabled: false,
    tintColor: 'green',
  },
);

const colors = mapkit.Map.ColorSchemes.Dark;

const coordinate = new mapkit.Coordinate(1000, 1000);
const factory = (coordinate: mapkit.Coordinate) => {
  const el = document.createElement('div');

  el.textContent = `${coordinate.longitude}, ${coordinate.latitude}`;

  return el;
};

map.addAnnotation(new mapkit.Annotation(coordinate, factory));

const mapPoint: mapkit.MapPoint = coordinate.toMapPoint();
