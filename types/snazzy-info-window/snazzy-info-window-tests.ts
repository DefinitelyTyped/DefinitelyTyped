import SnazzyInfoWindow = require('snazzy-info-window');
import jQuery = require('jquery');
import Handlebars = require('handlebars');

const simple = () => {
    let myMap = new google.maps.Map($('.map-canvas')[0], {
        zoom: 14,
        center: new google.maps.LatLng(40.72, -74)
    });

    let myMarker = new google.maps.Marker({
        map: myMap,
        position: new google.maps.LatLng(40.72, -74)
    });

    let info = new SnazzyInfoWindow({
        marker: myMarker,
        content: 'Your snazzy content.'
    });

    info.open();
};

// Multiple markers

const multipleMarkers = () => {
    interface Placement {
        type: SnazzyInfoWindow.PlacementOptions;
        LatLng: {
            lat: number,
            lng: number
        };
    }

    let mapCenter = { lat: 40.72, lng: -74 };
    let myMap = new google.maps.Map($('.map-canvas')[0], {
        zoom: 14,
        center: mapCenter
    });

    const offsetCenter = (dx: number, dy: number) => {
        return { lat: mapCenter.lat + dx, lng: mapCenter.lng + dy };
    };

    let dx = 0.003;
    let placements: Placement[] = [
        { type: 'top', LatLng: offsetCenter(dx, 0) },
        { type: 'right', LatLng: offsetCenter(0, dx) },
        { type: 'bottom', LatLng: offsetCenter(-dx, 0) },
        { type: 'left', LatLng: offsetCenter(0, -dx) }
    ];

    $.each(placements, (i: number, e: Placement) => {
        let myMarker = new google.maps.Marker({
            map: myMap,
            draggable: true,
            position: e.LatLng
        });

        let a = e.type;
        let info = new SnazzyInfoWindow({
            marker: myMarker,
            placement: e.type,
            content: e.type,
            panOnOpen: false,
        });
        info.open();
    });
};

// Dynamic Content

const dynamicContent = () => {
    let myMap = new google.maps.Map($('.map-canvas')[0], {
        zoom: 14,
        center: new google.maps.LatLng(40.72, -74)
    });
    let myMarker = new google.maps.Marker({
        map: myMap,
        position: new google.maps.LatLng(40.72, -74),
        draggable: true
    });

    Handlebars.registerHelper('formatDate', (date: Date) => {
        return date && date.toLocaleTimeString();
    });

    let template = Handlebars.compile($('#marker-content-template').html());

    let interval: number = 0;
    let info = new SnazzyInfoWindow({
        marker: myMarker,
        callbacks: {
            beforeOpen() {
                info.setContent('loading...');
            },
            afterOpen() {
                interval = setInterval(() => {
                    info.setContent(template({
                        date: new Date()
                    }));
                }, 1000);
            },
            afterClose() {
                if (interval) {
                    clearInterval(interval);
                }
            }
        }
    });
    info.open();
};

// Set position

const setPosition = () => {
    let myMap = new google.maps.Map($('.map-canvas')[0], {
        zoom: 14,
        center: new google.maps.LatLng(40.72, -74),
        clickableIcons: false
    });

    let info = new SnazzyInfoWindow({
        map: myMap,
        position: new google.maps.LatLng(40.72, -74),
        closeOnMapClick: false,
        content: 'Click anywhere on the map to change my position!'
    });

    myMap.addListener('click', e => {
        info.setPosition(e.latLng);
        if (!info.isOpen()) {
            info.open();
        }
    });
    info.open();
};

const jsStyling = () => {
    let myMap = new google.maps.Map($('.map-canvas')[0], {
        zoom: 14,
        center: new google.maps.LatLng(40.721, -73.991)
    });

    let myMarker = new google.maps.Marker({
        map: myMap,
        position: new google.maps.LatLng(40.72, -74)
    });

    let info = new SnazzyInfoWindow({
        marker: myMarker,
        placement: 'right',
        offset: {
            left: '20px'
        },
        content: '<div>STYLING</div>' +
        '<div>WITH</div>' +
        '<div><strong>JAVASCRIPT</strong></div>',
        showCloseButton: false,
        closeOnMapClick: false,
        padding: '48px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        border: false,
        borderRadius: '0px',
        shadow: false,
        fontColor: '#fff',
        fontSize: '15px'
    });
    info.open();
};
