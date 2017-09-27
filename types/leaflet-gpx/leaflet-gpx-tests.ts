import * as L from 'leaflet';
import 'leaflet-gpx';
const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const osm = L.tileLayer(osmUrl, { maxZoom: 18, attribution: osmAttrib });
const map = L.map('map', { layers: [osm], center: L.latLng(-37.7772, 175.2756), zoom: 15 });
const gpx = new L.GPX(
    '<?xml version="1.0" encoding="UTF-8"?>\
  <gpx creator="Garmin Connect" version="1.1" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/11.xsd" \
   xmlns="http://www.topografix.com/GPX/1/1" \
   xmlns:ns3="http://www.garmin.com/xmlschemas/TrackPointExtension/v1" \
   xmlns:ns2="http://www.garmin.com/xmlschemas/GpxExtensions/v3" \
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\
   <metadata><link href="connect.garmin.com"><text>Garmin Connect</text></link><time>2017-09-12T18:02:33.000Z</time>\
   </metadata><trk><name>Villefontaine Course à pied</name><type>running</type><trkseg>\
   <trkpt lat="45.6159922666847705841064453125" lon="5.14371019788086414337158203125">\
   <ele>282.399993896484375</ele><time>2017-09-12T18:02:33.000Z</time><extensions>\
   <ns3:TrackPointExtension><ns3:cad>58</ns3:cad></ns3:TrackPointExtension></extensions></trkpt>\
   <trkpt lat="45.61599235050380229949951171875" lon="5.1437102816998958587646484375">\
   <ele>282.399993896484375</ele><time>2017-09-12T18:02:34.000Z</time><extensions><ns3:TrackPointExtension><ns3:cad>58</ns3:cad>\
   </ns3:TrackPointExtension></extensions></trkpt><trkpt lat="45.6161034107208251953125" lon="5.14358597807586193084716796875">\
   <ele>282</ele><time>2017-09-12T18:03:44.000Z</time><extensions><ns3:TrackPointExtension><ns3:cad>58</ns3:cad></ns3:TrackPointExtension></extensions>\
   </trkpt></trkseg></trk></gpx>',
    { async: true })
    .on('loaded', (e: any) => {
        map.fitBounds(e.target.getBounds());
    }).addTo(map);
