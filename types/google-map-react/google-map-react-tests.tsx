import GoogleMapReact, { BootstrapURLKeys, MapOptions } from 'google-map-react';
import * as React from 'react';

const center = { lat: 0, lng: 0 };

const key: BootstrapURLKeys = { key: 'my-google-maps-key' };
const client: BootstrapURLKeys = { client: 'my-client-identifier', v: '3.28' , language: 'en' };
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

<GoogleMapReact center={center} zoom={3} bootstrapURLKeys={client} options={options} />;
