import {
    size,
    pixel,
    icon
} from '../preset';

// $ExpectType Icon
new AMap.Icon();
// $ExpectType Icon
new AMap.Icon({});
// $ExpectType Icon
new AMap.Icon({
    size,
    imageOffset: pixel,
    image: 'image uri',
    imageSize: size
});
// $ExpectType Icon
new AMap.Icon({
    size: [1, 2],
    imageOffset: pixel,
    image: 'image uri',
    imageSize: [1, 2]
});

// $ExpectType Size
icon.getImageSize();

// $ExpectType void
icon.setImageSize(size);
// $ExpectType void
icon.setImageSize([1, 2]);
