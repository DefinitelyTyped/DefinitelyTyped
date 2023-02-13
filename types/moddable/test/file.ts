import { File, Iterator, System } from "file";

if (File.exists('test.txt')) {
    trace('File Exists');
}

File.delete('test.txt');

File.rename('oldname.txt', 'newname.txt');

const file = new File('test.txt');
file.write('this is a test');
file.write(Uint32Array.of(0, 1, 2, 3, 4).buffer);
if (file.position < file.length) {
    file.read(String, 10);
    file.read(ArrayBuffer);
}
file.close();

const iterator = new Iterator('filename');
while (true) {
    const item = iterator.next();
    item?.name.padEnd(32);
}
