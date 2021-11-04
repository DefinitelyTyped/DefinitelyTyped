import * as React from 'react';
import * as Leaflet from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

const MarkerCluster = (
    <MarkerClusterGroup
        showCoverageOnHover={ true }
        zoomToBoundsOnClick={ true }
        spiderfyOnMaxZoom={ true }
        removeOutsideVisibleBounds={ true }
        animate={ true }
        animateAddingMarkers={ true }
        disableClusteringAtZoom={ 2 }
        maxClusterRadius={ 80 }
        polygonOptions={ {
            stroke: true,
            color: '#AFAAFA',
            opacity: 0.76,
            weight: 9,
        } }
        singleMarkerMode
        spiderLegPolylineOptions={ {
            stroke: true,
            color: '#AAFFAA',
            opacity: 0.76,
            weight: 9,
        } }
        spiderfyDistanceMultiplier={ 1 }
        iconCreateFunction={ cluster => Leaflet.divIcon({ html: `<b>${cluster.getChildCount()}</b>` }) }
        spiderfyShapePositions={(count, centerPt) => {
            const distanceFromCenter = 35;
            const markerDistance = 45;
            const lineLength = markerDistance * (count - 1);
            const lineStart = centerPt.y - lineLength / 2;
            const res = [];
            let i;

            res.length = count;

            for (i = count - 1; i >= 0; i--) {
                res[i] = new Leaflet.Point(centerPt.x + distanceFromCenter, lineStart + markerDistance * i);
            }
            return res;
        }}
        clusterPane={ 'markerPane' }
        chunkedLoading={ true }
        chunkInterval={ 100 }
        chunkDelay={ 500 }
        chunkProgress={ (processed: number, total: number, elapsed: number) => {
			if (elapsed > 1000) {
				// if it takes more than a second to load, display the progress bar:
				// progress.style.display = 'block';
				// progressBar.style.width = Math.round(processed/total*100) + '%';
			}
			if (processed === total) {
				// all markers processed - hide the progress bar:
				// progress.style.display = 'none';
			}
		} }/>
);
