const m = new google.maps.Marker();
const p = new google.maps.LatLng(0, 0);
const b = new google.maps.LatLngBounds(p, p);
const iconStyles: ClusterIconStyle[] = [
    {
        url: "http://example.com",
        height: 1,
        width: 1,
        anchorText: [0, 0],
        anchorIcon: [0, 0],
        textColor: "red",
        textSize: 1,
        textDecoration: "underline",
        fontWeight: "bold",
        fontStyle: "italic",
        fontFamily: "Arial",
        backgroundPosition: "center"
    },
    {
        url: "http://example.com",
        height: 1,
        width: 1
    }
];
const calculator: Calculator = MarkerClusterer.CALCULATOR;
{
    const iconInfo: ClusterIconInfo = calculator([m], 1);
    const index: number = iconInfo.index;
    const text: string = iconInfo.text;
    const title: string = iconInfo.title;
}
const batchSize: number = MarkerClusterer.BATCH_SIZE;
const batchSizeIE: number = MarkerClusterer.BATCH_SIZE_IE;
const imageSizes: number[] = MarkerClusterer.IMAGE_SIZES;
const imagePath: string = MarkerClusterer.IMAGE_PATH;
const imageExtension: string = MarkerClusterer.IMAGE_EXTENSION;

const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: p,
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

const mc = new MarkerClusterer(map);
{
    const mc1 = new MarkerClusterer(map, [m]);
    const mc2 = new MarkerClusterer(map, [m], {});
    const mc3 = new MarkerClusterer(map, [m], {
        gridSize: 1,
        maxZoom: 1,
        zoomOnClick: true,
        averageCenter: true,
        minimumClusterSize: 1,
        ignoreHidden: true,
        title: "title",
        clusterClass: "class",
        styles: iconStyles,
        enableRetinaIcons: true,
        batchSize: 1,
        batchSizeIE: 1,
        calculator,
        imagePath,
        imageExtension,
        imageSizes
    });
}
{
    mc.addMarker(m);
    mc.addMarker(m, true);
    mc.addMarkers([m]);
    mc.addMarkers([m], true);
    mc.addToClosestCluster_(m);
    mc.clearMarkers();
    mc.createClusters_(1);
    const distance: number = mc.distanceBetweenPoints_(p, p);
    const o: object = mc.extend({}, {});
    mc.fitMapToMarkers();
    const averageCenter: boolean = mc.getAverageCenter();
    const batchSizeIE2: number = mc.getBatchSizeIE();
    const calculator2: Calculator = mc.getCalculator();
    const clusterClass: string = mc.getClusterClass();
    const clusters: Cluster[] = mc.getClusters();
    const enableRetinaIcons: boolean = mc.getEnableRetinaIcons();
    const extendedBounds: google.maps.LatLngBounds = mc.getExtendedBounds(b);
    const gridSize: number = mc.getGridSize();
    const hideLabel: boolean = mc.getHideLabel();
    const ignoreHidden: boolean = mc.getIgnoreHidden();
    const imageExtension2: string = mc.getImageExtension();
    const imagePath2: string = mc.getImagePath();
    const imageSizes2: number[] = mc.getImageSizes();
    const markers: google.maps.Marker[] = mc.getMarkers();
    const maxZoom: number = mc.getMaxZoom();
    const minimumClusterSize: number = mc.getMinimumClusterSize();
    const styles: ClusterIconStyle[] = mc.getStyles();
    const title: string = mc.getTitle();
    const totalCluster: number = mc.getTotalClusters();
    const totalMarkers: number = mc.getTotalMarkers();
    const zoomOnClick: boolean = mc.getZoomOnClick();
    const markerInBounds: boolean = mc.isMarkerInBounds_(m, b);
    mc.onAdd();
    mc.onRemove();
    mc.pushMarkerTo_(m);
    mc.redraw_();
    mc.removeMarker(m);
    mc.removeMarker(m, true);
    mc.removeMarker(m, true, true);
    mc.removeMarkers([m], true);
    mc.removeMarkers([m], true, true);
    mc.removeMarker_(m);
    mc.removeMarker_(m, true);
    mc.repaint();
    mc.resetViewport_();
    mc.resetViewport_(true);
    mc.setAverageCenter(false);
    mc.setBatchSizeIE(batchSizeIE);
    mc.setCalculator(calculator);
    mc.setClusterClass("cluster_class");
    mc.setEnableRetinaIcons(true);
    mc.setGridSize(1);
    mc.setHideLabel(true);
    mc.setIgnoreHidden(true);
    mc.setImageExtension(imageExtension);
    mc.setImagePath(imagePath);
    mc.setImageSizes(imageSizes);
    mc.setMaxZoom(1);
    mc.setMinimumClusterSize(1);
    mc.setStyles(iconStyles);
    mc.setTitle("title");
    mc.setupStyles_();
    mc.setZoomOnClick(true);
}
{
    const c = new Cluster(mc);
    const size: number = c.getSize();
    const markers: google.maps.Marker[] = c.getMarkers();
    const center: google.maps.LatLng = c.getCenter();
    const map: google.maps.Map = c.getMap();
    const clusterer: MarkerClusterer = c.getMarkerClusterer();
    const bounds: google.maps.LatLngBounds = c.getBounds();
    c.remove();
    c.addMarker(m);
    const isMarkerInClusterBounds: boolean = c.isMarkerInClusterBounds(m);
    c.calculateBounds_();
    c.updateIcon_();
    const isMarkerAlreadyAdded: boolean = c.isMarkerAlreadyAdded_(m);
    {
        const icon = new ClusterIcon(c, iconStyles);
        icon.onAdd();
        icon.createCss(new google.maps.Point(0, 0));
        icon.useStyle({index: 1, text: "text", title: "title"});
        icon.draw();
        icon.hide();
        const pos: google.maps.Point = icon.getPosFromLatLng_(p);
        icon.setCenter(p);
    }
}
