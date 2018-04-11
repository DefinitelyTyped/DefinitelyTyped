import * as heapdump from 'heapdump';

let strValue: string = "";
let errValue: Error = new Error(strValue);
let nullValue: null = null;
let undefinedValue: undefined = undefined;

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
