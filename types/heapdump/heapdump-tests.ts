import * as heapdump from 'heapdump';

let strValue = "";
let errValue = new Error(strValue);
let nullValue = null;
let undefinedValue;

heapdump.writeSnapshot(strValue, (err, filename) => {
  errValue = err as Error;
  nullValue = err as null;
  strValue = filename as string;
  undefinedValue = filename as undefined;
});

heapdump.writeSnapshot((err, filename) => {
  errValue = err as Error;
  nullValue = err as null;
  strValue = filename as string;
  undefinedValue = filename as undefined;
});
