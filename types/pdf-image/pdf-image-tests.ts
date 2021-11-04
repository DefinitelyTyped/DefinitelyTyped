import { PDFImage } from 'pdf-image';

// $ExpectType PDFImage<false>
new PDFImage('path');

// $ExpectType Promise<string[]>
new PDFImage('path').convertFile();

// $ExpectType Promise<string>
new PDFImage('path', { combinedImage: true }).convertFile();

// $ExpectType Promise<string | string[]>
new PDFImage<boolean>('path', { combinedImage: true }).convertFile();

// $ExpectError
new PDFImage<false>('path', { combinedImage: true });

new PDFImage('path', { convertOptions: { "-adaptive-blur": '' } });

// $ExpectError
new PDFImage('path', { convertOptions: { invalidOptionKey: '' } });
