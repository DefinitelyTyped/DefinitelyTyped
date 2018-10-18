import storageHelper, { setItem, getItem, removeItem, clear, showStorageLogger } from 'storage-helper';

storageHelper.setItem('foo', 'bar');
storageHelper.setItem('foo', 'baz', true);
storageHelper.setItem('foo', 'bas', false);

storageHelper.getItem('foo'); // $ExpectType string | null
storageHelper.getItem('foo', false); // $ExpectType string | null
storageHelper.getItem('foo', undefined); // $ExpectType string | null
storageHelper.getItem('foo', false, Boolean() ? 1 : undefined); // $ExpectType string | number | null
storageHelper.getItem('foo', false, 1); // $ExpectType string | number | null
storageHelper.getItem('foo', false, undefined); // $ExpectType string | null
storageHelper.getItem('foo', true); // $ExpectType any
storageHelper.getItem('foo', true, 1); // $ExpectType any
storageHelper.getItem('foo', Boolean()); // $ExpectType any

storageHelper.removeItem('foo');

storageHelper.clear();

showStorageLogger(true);

setItem('foo', 'bar');
getItem('foo');
removeItem('foo');
clear();
