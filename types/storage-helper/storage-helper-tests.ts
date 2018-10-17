import storageHelper, { setItem, getItem, removeItem, clear, showStorageLogger } from 'storage-helper';

storageHelper.setItem('foo', 'bar');
storageHelper.setItem('foo', 'baz', true);
storageHelper.setItem('foo', 'bas', false);

storageHelper.getItem('foo'); // $ExpectType string | null

storageHelper.removeItem('foo');

storageHelper.clear();

showStorageLogger(true);

setItem('foo', 'bar');
getItem('foo');
removeItem('foo');
clear();
