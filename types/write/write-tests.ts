import write = require("write");

const text = "file " + "content";
const buf = Buffer.alloc(2);
const arr = Uint8Array.of(0x19, 0x87, 0x02, 0x12);

write("1.txt", text).then(({ path, data }) => {
  // $ExpectType string
  path;
  // $ExpectType string
  data;
});

write("1.txt", buf, { mode: 0o777 }).then(({ data }) => {
  // $ExpectType Buffer
  data;
});

write("1.txt", arr, (err, result) => {
  if (err) {
    // $ExpectType Error
    err;
  }
  if (result) {
    const { path, data } = result;
    // $ExpectType string
    path;
    // $ExpectType Uint8Array
    data;
  }
});

// $ExpectType void
write("1.txt", text, { newline: true, overwrite: true, increment: true }, () => "ok");

let { path, data } = write.sync("1.txt", arr);
// $ExpectType string
path;
// $ExpectType Uint8Array
data;

({ path, data } = write.sync("1.txt", arr, { mode: 0o777, newline: true }));

// $ExpectType WriteStream
write.stream("1.txt");

write.stream("1.txt", { highWaterMark: 8, overwrite: true });
