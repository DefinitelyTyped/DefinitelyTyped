import * as gcInfo from '@matteodisabatino/gc_info';

gcInfo.path; // $ExpectType string

const listener = (info: gcInfo.GcInfo) => {};

gcInfo.on('data', listener); // $ExpectType void
gcInfo.off('data', listener); // $ExpectType void
gcInfo.off('data'); // $ExpectType void

gcInfo.on('data'); // $ExpectError
gcInfo.on('data', 'hello'); // $ExpectError
gcInfo.on('data', (stats: number) => { stats; }); // $ExpectError
