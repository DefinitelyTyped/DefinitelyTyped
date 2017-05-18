let map = L.map('foo');

let roads = L.gridLayer.googleMutant({
    type: 'roadmap'
}).addTo(map);

let styled = L.gridLayer.googleMutant({
    type: 'satellite',
    styles: [
        { elementType: 'labels', stylers: [ { visibility: 'off' } ] },
        { featureType: 'water' , stylers: [ { color: '#444444'  } ] }
    ]
}).addTo(map);
