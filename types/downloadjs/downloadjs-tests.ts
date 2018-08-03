import * as download from 'downloadjs';

download('hello world', 'dlText.txt', 'text/plain');
download('data:text/plain,hello%20world', 'dlDataUrlText.txt', 'text/plain');

download(new Blob(['hello world']), 'dlTextBlob.txt', 'text/plain');

download('/robots.txt');

download(document.documentElement!.outerHTML, 'dlHTML.html', 'text/html');
download(new Blob(['hello world'.bold()]), 'dlHtmlBlob.html', 'text/html');
download('/diff6.png');
