import {
    map,
    marker,
    lnglat,
    pixel,
    lnglatTuple,
    icon
} from '../preset';

interface ExtraData {
    test: number;
}

// $ExpectType Text<any>
new AMap.Text();
// $ExpectType Text<any>
new AMap.Text({});
// $ExpectType Text<ExtraData>
const text = new AMap.Text<ExtraData>({
    text: 'content',
    textAlign: 'center',
    verticalAlign: 'top',
    map,
    position: lnglat,
    offset: pixel,
    topWhenClick: true,
    bubble: true,
    draggable: true,
    raiseOnDrag: true,
    cursor: 'default',
    visible: true,
    zIndex: 100,
    angle: 45,
    autoRotation: true,
    animation: 'AMAP_ANIMATION_BOUNCE',
    shadow: 'https://webapi.amap.com/theme/v1.3/markers/0.png',
    title: 'title',
    clickable: true,
    extData: { test: 1 }
});

// $ExpectType string
text.getText();

// $ExpectType void
text.setText('123');

// $ExpectType void
text.setStyle({
    background: 'red',
    width: '200px'
});

// $ExpectType void
text.markOnAMAP({
    name: '123',
    position: lnglatTuple
});

// $ExpectType Pixel
text.getOffset();

// $ExpectType void
text.setOffset(pixel);

// $ExpectType void
text.setAnimation('AMAP_ANIMATION_BOUNCE');

// $ExpectType AnimationName
text.getAnimation();

// $ExpectType void
text.setClickable(true);

// $ExpectType boolean
text.getClickable();

// $ExpectType LngLat | undefined
text.getPosition();

// $ExpectType void
text.setAngle(10);

// $ExpectType number
text.getAngle();

// $ExpectType void
text.setzIndex(1);

// $ExpectType number
text.getzIndex();

// $ExpectType void
text.setDraggable(true);

// $ExpectType boolean
text.getDraggable();

// $ExpectType void
text.hide();

// $ExpectType void
text.show();

// $ExpectType void
text.setCursor('default');

// $ExpectType void
text.moveAlong([lnglat], 100);

// $ExpectType void
text.moveAlong([lnglat], 100);
// $ExpectError
text.moveAlong([[1, 2]], 100);
// $ExpectType void
text.moveAlong([lnglat], 100, t => t, false);

// $ExpectType void
text.moveTo(lnglat, 100);
// $ExpectType void
text.moveTo([1, 2], 100);
// $ExpectType void
text.moveTo([1, 2], 100, t => t);

// $ExpectType void
text.stopMove();

// $ExpectType boolean
text.pauseMove();

// $ExpectType boolean
text.resumeMove();

// $ExpectType void
text.setMap(map);

// $ExpectType void
text.setTitle('title');
// $ExpectError
text.setTitle();

// $ExpectType string | undefined
text.getTitle();

// $ExpectType void
text.setTop(true);

// $ExpectType boolean
text.getTop();

// $ExpectType void
text.setShadow();
// $ExpectType void
text.setShadow(icon);
// $ExpectType void
text.setShadow('shadow url');

// $ExpectType void
text.setExtData({test: 1});

// $ExpectType {} | ExtraData
text.getExtData();

text.on('click', (event: AMap.Text.EventMap<typeof text>['click']) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType Text<ExtraData>
    event.target;
});
