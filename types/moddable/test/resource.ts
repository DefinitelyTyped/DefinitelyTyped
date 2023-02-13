import Resource from "resource";

if (Resource.exists('mydata.dat')) {
    const r1 = new Resource('mydata.dat');
    const bytes = new Uint8Array(r1);
    trace(bytes.length);
}
