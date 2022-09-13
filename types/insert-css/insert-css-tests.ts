import { insertCss } from 'insert-css';

insertCss('body{position:absolute}');

insertCss('body{position:absolute}', {});

insertCss('body{text-decoration:underline !important}', {
    prepend: true,
});

insertCss('body{text-decoration:underline !important}', {
    prepend: false,
});

insertCss('body{position:absolute}', {
    container: document.createElement(''),
});

insertCss('body{text-decoration:underline !important}', {
    prepend: true,
    container: document.createElement(''),
});

insertCss('body{text-decoration:underline !important}', {
    prepend: false,
    container: document.createElement(''),
});
