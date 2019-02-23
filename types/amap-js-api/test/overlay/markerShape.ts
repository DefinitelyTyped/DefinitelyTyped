// $ExpectType MarkerShape
new AMap.MarkerShape({
    type: 'circle',
    coords: [1, 1, 1]
});
// $ExpectType MarkerShape
new AMap.MarkerShape({
    type: 'rect',
    coords: [1, 1, 1, 2]
});
// $ExpectType MarkerShape
new AMap.MarkerShape({
    type: 'poly',
    coords: [1, 2, 3, 4, 5]
});

// $ExpectError
new AMap.MarkerShape({
    type: 'circle',
    coords: [1, 1]
});
// $ExpectError
new AMap.MarkerShape({
    type: 'rect',
    coords: [1, 1, 1, 2, 2]
});
