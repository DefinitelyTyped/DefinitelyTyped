import { GoogleAPI, Map, Marker, MapProps, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import * as React from 'react';

interface Location {
  id: string;
  _geoloc: google.maps.LatLngLiteral;
  title: string;
}

type Props = MapProps & {
  hits: Location[]

  onLocationSelect: (location: Location) => void,
};

const mapStyles: google.maps.MapTypeStyle[] = [];
const centerUS: google.maps.LatLngLiteral = { lat: 39.82, lng: -96.1 };

class MapContainer extends React.Component<Props> {
  static defaultProps: Partial<Props> = {
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    initialCenter: centerUS,
    zoom: 4,
    maxZoom: 16,
    minZoom: 4,
    styles: mapStyles,
  };

  render() {
    const {
      onLocationSelect,
      bounds,
      ...props } = this.props;

    const hits = this.props.hits.filter((x) => validGeoloc(x._geoloc));

    return (
      <Map { ...props }
        bounds={ bounds }
        onReady={ (_, map) => {
          if (!map || !bounds) { return; }
          map.fitBounds(bounds);
        }}>
        {this.renderMarkers(...hits)}
      </Map>
    );
  }

  private renderMarkers(...hits: Location[]) {
    return hits.map((hit) => {
      return <Marker
        onClick={ () => this.props.onLocationSelect(hit) }
        cursor="pointer"
        position={ hit._geoloc }
        title={ hit.title }
        key={ hit.id }
      >
        <InfoWindow>
          <p>Test</p>
        </InfoWindow>
      </Marker>;
    });
  }
}

function validGeoloc(geoloc: google.maps.LatLngLiteral): boolean {
  return geoloc && (geoloc.lat !== 0 || geoloc.lng !== 0);
}

const connectGoogleMaps = GoogleApiWrapper({
  apiKey: 'some-api-key',
  libraries: ['places', 'geometry'],
});

const ConnectedMapContainer = connectGoogleMaps(MapContainer);

<ConnectedMapContainer
  hits={[{ id: '1', title: 'First Hit', _geoloc: { lat: 32, lng: 32 } }]}
  onLocationSelect={(loc) => loc._geoloc.lat}
  />;
