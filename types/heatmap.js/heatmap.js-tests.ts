declare const container: HTMLElement;

// -- h337.HeatmapConfiguration --

{
    const config: h337.HeatmapConfiguration = { container };
    config; // $ExpectType HeatmapConfiguration<"value", "x", "y">
}

{
    const config: h337.HeatmapConfiguration = {
        container,
        xField: 'x',
        yField: 'y',
        valueField: 'value',
    };
}

{
    // @ts-expect-error
    const config: h337.HeatmapConfiguration = { container, valueField: 'foo' };
}

{
    const config: h337.HeatmapConfiguration<'foo'> = {
        container,
        valueField: 'foo',
    };
    config; // $ExpectType HeatmapConfiguration<"foo", "x", "y">
}

// -- h337.create --

{
    // $ExpectType Heatmap<"value", "x", "y">
    h337.create({ container });

    // $ExpectType Heatmap<"count", "xPos", "yPos">
    h337.create<"count", "xPos", "yPos">({
        container,
        valueField: "count",
        xField: "xPos",
        yField: "yPos",
    });

    const config: h337.HeatmapConfiguration<"count", "xPos", "yPos"> = {
        container,
        valueField: "count",
        xField: "xPos",
        yField: "yPos",
    };
    // $ExpectType Heatmap<"count", "xPos", "yPos">
    h337.create(config);
}

// -- Heatmap#addData --

{
    const heatmap = h337.create({ container });

    // $ExpectType Heatmap<"value", "x", "y">
    heatmap.addData({ x: 1, y: 1, value: 5 });

    heatmap.addData([
        { x: 1, y: 1, value: 1 },
        { x: 2, y: 2, value: 2 },
    ]);

    // @ts-expect-error
    heatmap.addData({ x: null, y: 1, value: 1 });
    // @ts-expect-error
    heatmap.addData({ x: 1, y: null, value: 1 });
    // @ts-expect-error
    heatmap.addData({ x: 1, y: 1, value: null });
    // @ts-expect-error
    heatmap.addData({ y: 1, value: 1 });
    // @ts-expect-error
    heatmap.addData({ x: 1, value: 1 });
    // @ts-expect-error
    heatmap.addData({ x: 1, y: 1, });
}

{
    const heatmap = h337.create<"count", "xPos", "yPos">({
        container,
        xField: "xPos",
        yField: "yPos",
        valueField: "count",
    });

    // $ExpectType Heatmap<"count", "xPos", "yPos">
    heatmap.addData({ xPos: 1, yPos: 1, count: 5 });

    heatmap.addData([
        { xPos: 1, yPos: 1, count: 1 },
        { xPos: 2, yPos: 2, count: 2 },
    ]);

    // @ts-expect-error
    heatmap.addData({ xPos: null, yPos: 1, count: 1 });
    // @ts-expect-error
    heatmap.addData({ xPos: 1, yPos: null, count: 1 });
    // @ts-expect-error
    heatmap.addData({ xPos: 1, yPos: 1, count: null });
    // @ts-expect-error
    heatmap.addData({ yPos: 1, count: 1 });
    // @ts-expect-error
    heatmap.addData({ xPos: 1, count: 1 });
    // @ts-expect-error
    heatmap.addData({ xPos: 1, yPos: 1, });
}

// -- Heatmap#setData --

{
    const validData: ReadonlyArray<h337.DataPoint> =
        [{ x: 1, y: 2, value: 1 }];

    const heatmap = h337.create({ container });
    // @ts-expect-error
    heatmap.setData({ max: 5, data: validData });
    // @ts-expect-error
    heatmap.setData({ min: 5, data: validData });

    // $ExpectType Heatmap<"value", "x", "y">
    heatmap.setData({
        min: 0,
        max: 1,
        data: validData
    });

    // @ts-expect-error
    heatmap.setData({ min: 0, max: 1, data: [{ xPos: 1, yPos: 2, value: 5 }] });
}

{
    const validData: ReadonlyArray<h337.DataPoint<"count", "xPos", "yPos">> =
        [{ xPos: 1, yPos: 2, count: 1 }];

    const heatmap = h337.create<"count", "xPos", "yPos">({ container });
    // @ts-expect-error
    heatmap.setData({ max: 5, data: validData });
    // @ts-expect-error
    heatmap.setData({ min: 5, data: validData });

    // $ExpectType Heatmap<"count", "xPos", "yPos">
    heatmap.setData({
        min: 0,
        max: 1,
        data: validData
    });

    // @ts-expect-error
    heatmap.setData({ min: 0, max: 1, data: [{ x: 1, y: 2, value: 5 }] });
}

// -- Heatmap#setDataMax / Heatmap#setDataMin --

{
    const heatmap = h337.create({ container });

    // $ExpectType Heatmap<"value", "x", "y">
    heatmap.setDataMax(500);
    // @ts-expect-error
    heatmap.setDataMax(null);
    // @ts-expect-error
    heatmap.setDataMax();

    heatmap.setDataMin(500);
    // @ts-expect-error
    heatmap.setDataMin(null);
    // @ts-expect-error
    heatmap.setDataMin();
}

// -- Heatmap#configure --

{
    const heatmap = h337.create({ container });

    // $ExpectType Heatmap<"value", "x", "y">
    heatmap.configure({ container });

    const nextHeatmap = heatmap.configure<"count", "xPos", "yPos">({
        container,
        valueField: "count",
        xField: "xPos",
        yField: "yPos"
    });

    nextHeatmap; // $ExpectType Heatmap<"count", "xPos", "yPos">

    // $ExpectType Heatmap<"count", "xPos", "yPos">
    nextHeatmap.configure({ container });
}

// -- Heatmap#getValueAt --

{
    // $ExpectType number
    h337.create({ container }).getValueAt({ x: 0, y: 1 });

    // $ExpectType number
    h337.create<"foo", "bar", "baz">({ container }).getValueAt({ x: 0, y: 1 });
}

// -- Heatmap#getData --

{
    // $ExpectType HeatmapData<DataCircle>
    h337.create({ container }).getData();

    // $ExpectType HeatmapData<DataCircle>
    h337.create<"foo", "bar", "baz">({ container }).getData();
}

// -- Heatmap#getDataURL --

{
    // $ExpectType string
    h337.create({ container }).getDataURL();
}

// -- Heatmap#repaint --
{
    // $ExpectType Heatmap<"value", "x", "y">
    h337.create({ container }).repaint();

    // $ExpectType Heatmap<"foo", "bar", "baz">
    h337.create<"foo", "bar", "baz">({ container }).repaint();
}

// -- Leaflet plugin --

{
    const baseLayer = L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            // tslint:disable-next-line max-line-length
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
            maxZoom: 18
        }
    );

    const testData: h337.HeatmapData<h337.DataPoint<'count', 'lat', 'lng'>> = {
        min: 1,
        max: 3,
        data: [
            {
                lat: 24.6408,
                lng: 46.7728,
                count: 3
            }, {
                lat: 50.75,
                lng: -1.55,
                count: 1
            }
        ]
    };

    const config: h337.HeatmapOverlayConfiguration<'count'> = {
        radius: 2,
        maxOpacity: .8,
        scaleRadius: true,
        useLocalExtrema: true,
        latField: 'lat',
        lngField: 'lng',
        valueField: 'count'
    };
    config; // $ExpectType HeatmapOverlayConfiguration<"count", "lat", "lng">

    const heatmapLayer = new HeatmapOverlay(config);
    heatmapLayer; // $ExpectType HeatmapOverlay<"count", "lat", "lng">

    const map = new L.Map('map-canvas', {
        center: new L.LatLng(25.6586, -80.3568),
        zoom: 4,
        layers: [baseLayer, heatmapLayer]
    });

    // $ExpectType void
    heatmapLayer.setData(testData);
}
