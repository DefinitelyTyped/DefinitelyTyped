declare var pixel: AMap.Pixel;
declare var size: AMap.Size;
declare var lnglat: AMap.LngLat;
var massMarksStyle1 = {
    anchor: pixel,
    url: '',
    size,
    rotation: 1
};
var massMarksStyle2 = {
    anchor: pixel,
    url: '',
    size
};
var massMarksData1 = {
    lnglat
};

interface CustomData extends AMap.MassMarks.Data {
    name: string;
    id: string;
}
var massMarksCustomData: CustomData = {
    lnglat: [1, 2],
    style: 1,
    name: '',
    id: ''
};

// $ExpectError
new AMap.MassMarks();
// $ExpectError
new AMap.MassMarks([], {});

new AMap.MassMarks([], {
    style: [massMarksStyle1, massMarksStyle2]
});
new AMap.MassMarks([massMarksData1], {
    style: [massMarksStyle1, massMarksStyle2]
});

// $ExpectType MassMarks<CustomData>
var massMarks = new AMap.MassMarks<CustomData>([massMarksCustomData], {
    style: [massMarksStyle1, massMarksStyle2]
});

// $ExpectType void
massMarks.setStyle(massMarksStyle1);
// $ExpectType void
massMarks.setStyle([massMarksStyle1]);

// $ExpectType Style | Style[]
massMarks.getStyle();

// $ExpectType void
massMarks.setData('');

// $ExpectError
massMarks.setData(massMarksData1);
// $ExpectError
massMarks.setData(massMarksCustomData);

var _customData = massMarks.getData()[0];
// $ExpectType string
_customData.name;
// $ExpectType string
_customData.id;
// $ExpectType LngLat
_customData.lnglat;

// $ExpectType void
massMarks.clear();

massMarks.on('click', (event: AMap.MassMarks.EventMap<typeof massMarks>['click']) => {
    // $ExpectType "click"
    event.type;

    // $ExpectType CustomData
    event.data;

    // $ExpectType MassMarks<CustomData>
    event.target;
});
