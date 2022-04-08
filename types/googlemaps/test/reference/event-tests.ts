// TODO: transfer and process tests for a event from the googlemaps-tests.ts file

import MVCArray = google.maps.MVCArray;

const mvcArray = new MVCArray(['']); // $ExpectType MVCArray<string>
const mvcArrayEmpty = new MVCArray<string>();

mvcArray.addListener('insert_at', index => {
    index; // $ExpectType number
});
mvcArray.addListener('remove_at', (index, removed) => {
    index; // $ExpectType number
    removed; // $ExpectType string
});
mvcArray.addListener('set_at', (index, previous) => {
    index; // $ExpectType number
    previous; // $ExpectType string
});

mvcArray.clear();

mvcArray.forEach((elem, i) => {
    elem; // $ExpectType string
    i; // $ExpectType number
});

mvcArray.getArray(); // $ExpectType string[]

mvcArray.getAt(0); // $ExpectType string

mvcArray.insertAt(0, '');
mvcArray.insertAt(0, 0); // $ExpectError

mvcArray.pop(); // $ExpectType string

mvcArray.push(''); // $ExpectType number
mvcArray.push(0); // $ExpectError
mvcArray.push('', ''); // $ExpectError

mvcArray.removeAt(0);

mvcArray.setAt(0, '');
mvcArray.setAt(0, 0); // $ExpectError

export {};
