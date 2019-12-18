import * as React from 'react';
import * as Leaflet from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

const MarkerCluster = (
    <MarkerClusterGroup
        showCoverageOnHover
        zoomToBoundsOnClick
        spiderfyOnMaxZoom
        removeOutsideVisibleBounds
        animate
        animateAddingMarkers
        singleMarkerMode
        chunkedLoading
        chunkDelay={ 500 }
        disableClusteringAtZoom={ 4 }
        maxClusterRadius={ 0 }
        spiderfyDistanceMultiplier={ 2 }
        polygonOptions={ {
            stroke: true,
            color: 'blue',
            opacity: 0.5
        } }
        spiderLegPolylineOptions={ {
            stroke: true,
            color: 'blue',
            opacity: 0.5
        } }
        iconCreateFunction={ cluster => Leaflet.divIcon({ html: `<b>${cluster.getChildCount()}</b>` }) }/>
);
