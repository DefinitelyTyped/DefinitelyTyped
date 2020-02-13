import jBinary = require('jbinary');

jBinary.loadData([0x05, 0x03, 0x7F, 0x1E]);
jBinary.load([0x05, 0x03, 0x7F, 0x1E]);

var originalData = [0x05, 0x03, 0x7F, 0x1E];
var b1 = new jBinary(originalData);
console.log(b1.readAll());
console.log(b1.read('int8'));

b1.seek(4);
console.log(b1.read('int8'));

console.log(b1.tell());

b1.write('int8', 0x9A, 2);
b1.writeAll(originalData);

console.log(b1.slice(0, 2));

jBinary.saveAs('myfile.pdf', 'application/pdf');
jBinary.toURI();
