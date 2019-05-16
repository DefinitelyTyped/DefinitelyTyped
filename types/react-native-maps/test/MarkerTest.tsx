import * as React from "react";
import MapView, { Marker } from "react-native-maps";

export default class MarkerTest extends React.Component {
  render() {
    return (
      <MapView
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <Marker
          title="Marker Title"
          description="Marker Description"
          image={{
            uri: "https://facebook.github.io/react-native/img/header_logo.png"
          }}
          icon={{
            uri: "https://facebook.github.io/react-native/img/header_logo.png"
          }}
          pinColor="green"
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          centerOffset={{ x: 0, y: 0 }}
          calloutOffset={{ x: 0, y: 0 }}
          anchor={{ x: 0.5, y: 1 }}
          calloutAnchor={{ x: 0.5, y: 1 }}
          flat={false}
          identifier="Marker ID"
          rotation={0.0}
          draggable={false}
          tracksViewChanges={true}
          tracksInfoWindowChanges={true}
          stopPropagation={false}
          opacity={0.5}
        />
      </MapView>
    );
  }
}
