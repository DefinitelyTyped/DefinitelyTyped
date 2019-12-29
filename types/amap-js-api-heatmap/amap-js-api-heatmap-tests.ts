declare const map: AMap.Map;

// $ExpectError
new AMap.Heatmap();
// $ExpectType Heatmap
new AMap.Heatmap(map);
// $ExpectType Heatmap
new AMap.Heatmap(map, {});
// $ExpectType Heatmap
const heatmap = new AMap.Heatmap(map, {
    radius: 30,
    gradient: {
        0.4: 'rgb(0, 255, 255)',
        0.65: 'rgb(0, 110, 255)',
        0.85: 'rgb(100, 0, 255)',
        1.0: 'rgb(100, 0, 255)'
    },
    opacity: [0, 0.5],
    zooms: [1, 18]
});

// $ExpectType void
heatmap.setMap(map);

// $ExpectType void
heatmap.setOptions();
// $ExpectType void
heatmap.setOptions({});
// $ExpectType void
heatmap.setOptions({
    radius: 30,
    gradient: {
        0.4: 'rgb(0, 255, 255)',
        0.65: 'rgb(0, 110, 255)',
        0.85: 'rgb(100, 0, 255)',
        1.0: 'rgb(100, 0, 255)'
    },
    opacity: [0, 0.5],
    zooms: [1, 18]
});

// $ExpectType void
heatmap.setDataSet({
    data: [
        {
            lng: 114.08594700023525,
            lat: 22.54699999968279,
            count: 1
        }
    ],
    max: 1
});

// $ExpectType void
heatmap.setDataSet({
    data: '',
    dataParser: () => {
        return {
            data: [
                {
                    lng: 114.08594700023525,
                    lat: 22.54699999968279,
                    count: 1
                }
            ],
            max: 1
        };
    }
});

// $ExpectType void
heatmap.addDataPoint(1, 2);
// $ExpectType void
heatmap.addDataPoint(1, 2, 3);

// $ExpectType void
heatmap.show();

// $ExpectType void
heatmap.hide();
// $ExpectType Map
heatmap.getMap();

const heatmapDataSet = heatmap.getDataSet();

// $ExpectType Data[]
heatmapDataSet.data;
