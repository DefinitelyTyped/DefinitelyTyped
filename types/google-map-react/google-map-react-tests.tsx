import GoogleMapReact, {
    BootstrapURLKeys, MapOptions, NESWBounds,
    Size,
    fitBounds
} from 'google-map-react';
import * as React from 'react';

const center = { lat: 0, lng: 0 };

const key: BootstrapURLKeys = { key: 'my-google-maps-key', libraries: "places" };
const client: BootstrapURLKeys = { client: 'my-client-identifier', v: '3.28' , language: 'en', libraries: "places", region: "PR", id: 'custom-id' };
const options: MapOptions = {
    zoomControl: false,
    gestureHandling: 'cooperative',
    styles: [
        {
            featureType: "administrative",
            elementType: "all",
            stylers: [ {saturation: "-100"} ]
        },
        {
            featureType: "administrative.neighborhood",
            stylers: [ {visibility: "off" } ]
        },
        {
            elementType: "labels.text.stroke",
            stylers: [ {color: "#242f3e"} ]
        },
        {
            stylers: [ {color: "#fcfffd"} ]
        }
    ],
};

<GoogleMapReact center={center} heatmapLibrary={true} zoom={3} bootstrapURLKeys={client} options={options} />;

const bounds: NESWBounds = {
    ne: {
      lat: 55,
      lng: 10,
    },
    sw: {
      lat: 45,
      lng: 20,
    }
};

const size: Size = {
    width: 1280,
    height: 640
};

fitBounds(bounds, size);
