import Epub from 'epub-gen';

new Epub({ title: '', content: [] }); // $ExpectType Epub
(new Epub({ title: '', content: [] })).promise; // $ExpectType Promse<void>
