import GoogleMapReact, { BootstrapURLKeys } from 'google-map-react';
import * as React from 'react';

const center = { lat: 0, lng: 0 };

const key: BootstrapURLKeys = { key: 'my-google-maps-key' };
const client: BootstrapURLKeys = { client: 'my-client-identifier', v: '3.28' , language: 'en' };

<GoogleMapReact center={center} zoom={3} bootstrapURLKeys={client}/>;
