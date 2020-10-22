import { fromLatLon, toLatLon } from 'utm';

const latLon1 = {
    lat: 37.240778,
    lon: 131.869556,
};

const utmCoord1 = fromLatLon(latLon1.lat, latLon1.lon);

const latLon2 = toLatLon(
  utmCoord1.easting,
  utmCoord1.northing,
  utmCoord1.zoneNum,
  utmCoord1.zoneLetter,
);

const utmCoord2 = fromLatLon(latLon2.latitude, latLon2.longitude);

utmCoord1.easting === utmCoord2.easting;
utmCoord1.northing === utmCoord2.northing;
utmCoord1.zoneNum === utmCoord2.zoneNum;
utmCoord1.zoneLetter === utmCoord2.zoneLetter;
