import * as unhandled from "electron-unhandled";

unhandled({ logger: 'foo' }); // $ExpectError
unhandled({ showDialog: 'bar' }); // $ExpectError
unhandled({ logger: (err: Error) => {}, showDialog: true }); // $ExpectType void
