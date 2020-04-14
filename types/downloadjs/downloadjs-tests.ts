import * as download from 'downloadjs';

download('hello world', 'dlText.txt', 'text/plain');
download('data:text/plain,hello%20world', 'dlDataUrlText.txt', 'text/plain');

download(new Blob(['hello world']), 'dlTextBlob.txt', 'text/plain');
download(new Uint8Array([1, 2, 3]), 'dlUintArray8.html', 'text/html');

download('/robots.txt');

// tslint:disable-next-line no-unnecessary-type-assertion
download(document.documentElement!.outerHTML, 'dlHTML.html', 'text/html');
download(new Blob(['hello world'.bold()]), 'dlHtmlBlob.html', 'text/html');
download('/diff6.png');
