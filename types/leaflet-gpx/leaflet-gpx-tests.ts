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

const durationString: string = gpx.get_duration_string(1000, true);
const durationStringIso: string = gpx.get_duration_string_iso(1000, true);
const miles: number  = gpx.to_miles(1.5);
const feet: number = gpx.to_ft(1.5);
const km: number = gpx.m_to_km(1500);
const mi: number = gpx.m_to_mi(1500);

const name: string = gpx.get_name();
const desc: string = gpx.get_desc();
const author: string = gpx.get_author();
const copyright: string = gpx.get_copyright();
const distance: number = gpx.get_distance();
const distanceImp: number = gpx.get_distance_imp();

const startTime: Date = gpx.get_start_time();
const endTime: Date = gpx.get_end_time();
const movingTime: number = gpx.get_moving_time();
const totalTime: number = gpx.get_total_time();

const movingPace: number = gpx.get_moving_pace();
const movingPaceImp: number = gpx.get_moving_pace_imp();

const movingSpeed: number = gpx.get_moving_speed();
const movingSpeedImp: number = gpx.get_moving_speed_imp();

const totalSpeed: number = gpx.get_total_speed();
const totalSpeedImp: number = gpx.get_total_speed_imp();

const elevationGain: number = gpx.get_elevation_gain();
const elevationLoss: number = gpx.get_elevation_loss();
const elevationGainImp: number = gpx.get_elevation_gain_imp();
const elevationLossImp: number = gpx.get_elevation_loss_imp();
const elevationData = gpx.get_elevation_data();
const firstElevationData = elevationData[0];
const elevationDistance: number = firstElevationData[0];
const elevationValue: number = firstElevationData[1];
const elevationTooltip: string = firstElevationData[2];
const elevationDataImp = gpx.get_elevation_data_imp();
const firstElevationDataImp = elevationDataImp[0];
const elevationDistanceImp: number = firstElevationDataImp[0];
const elevationValueImp: number = firstElevationDataImp[1];
const elevationTooltipImp: string = firstElevationDataImp[2];
const elevationMax: number = gpx.get_elevation_max();
const elevationMin: number = gpx.get_elevation_min();
const elevationMaxImp: number = gpx.get_elevation_max_imp();
const elevationMinImp: number = gpx.get_elevation_min_imp();

const averageHr: number = gpx.get_average_hr();
const averageTemp: number = gpx.get_average_temp();
const averageCadence: number = gpx.get_average_cadence();
const heartrateData = gpx.get_heartrate_data();
const firstHeartrateData = heartrateData[0];
const heartrateDistance: number = firstHeartrateData[0];
const heartrateValue: number = firstHeartrateData[1];
const heartrateTooltip: string = firstHeartrateData[2];
const heartrateDataImp = gpx.get_heartrate_data_imp();
const firstHeartrateDataImp = heartrateDataImp[0];
const heartrateDistanceImp: number = firstHeartrateDataImp[0];
const heartrateValueImp: number = firstHeartrateDataImp[1];
const heartrateTooltipImp: string = firstHeartrateDataImp[2];
const tempData = gpx.get_temp_data();
const firstTempData = tempData[0];
const tempDistance: number = firstTempData[0];
const tempValue: number = firstTempData[1];
const tempTooltip: string = firstTempData[2];
const tempDataImp = gpx.get_temp_data_imp();
const firstTempDataImp = tempDataImp[0];
const tempDistanceImp: number = firstTempDataImp[0];
const tempValueImp: number = firstTempDataImp[1];
const tempTooltipImp: string = firstTempDataImp[2];
const cadenceData = gpx.get_cadence_data();
const firstCadenceData = cadenceData[0];
const cadenceDistance: number = firstCadenceData[0];
const cadenceValue: number = firstCadenceData[1];
const cadenceTooltip: string = firstCadenceData[2];
const cadenceDataImp = gpx.get_cadence_data_imp();
const firstCadenceDataImp = cadenceDataImp[0];
const cadenceDistanceImp: number = firstCadenceDataImp[0];
const cadenceValueImp: number = firstCadenceDataImp[1];
const cadenceTooltipImp: string = firstCadenceDataImp[2];

gpx.reload();
