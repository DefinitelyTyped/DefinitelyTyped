let map = L.map('foo');

let roads = L.GridLayer.googleMutant({
    type: 'roadmap'
}).addTo(map);

let styled = L.GridLayer.googleMutant({
    type: 'satellite',
    styles: [
        { elementType: 'labels', stylers: [ { visibility: 'off' } ] },
        { featureType: 'water' , stylers: [ { color: '#444444'  } ] }
    ]
}).addTo(map);
