import * as windows1251 from 'windows-1251';

var text:string = "some text", byteString:string, decodedText:string;

var version:string = windows1251.version;

var labels:string[] = windows1251.labels;
 
byteString = windows1251.encode(text);
byteString = windows1251.encode(text, { mode: 'html' });
byteString = windows1251.encode(text, { mode: 'fatal' });

decodedText = windows1251.decode(byteString);
decodedText = windows1251.decode(byteString, { mode: 'fatal' });
decodedText = windows1251.decode(byteString, { mode: 'replacement' });




