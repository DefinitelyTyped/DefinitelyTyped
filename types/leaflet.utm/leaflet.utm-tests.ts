import * as L from 'leaflet';
import 'leaflet.utm';

L.Utm.setDefaultOptions(null);
const latLng = L.latLng(43.24209, 76.87743);
const utm = latLng.utm();
utm.toString({
    decimals: 1,
    format: '{x}',
    sep: '-',
    north: 'N',
    south: 'S',
});
utm.latLng();
utm.normalize();
utm.equals(utm.clone());
