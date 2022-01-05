import nodepub = require('nodepub');

const metadata = {
  author: 'Author',
  cover: 'Cover',
  id: '1',
  title: 'Title',
};

const document = nodepub.document(metadata);
document; // $ExpectType Document

document.addCSS('p { background-color: red; }'); // $ExpectType void
document.addSection('Title', 'Content'); // $ExpectType void
document.getFilesForEPUB(); // $ExpectType Promise<File>
document.getSectionCount(); // $ExpectType number
document.writeEPUB('/folder', 'filename'); // $ExpectType Promise<void>
document.writeFilesForEPUB('/folder'); // $ExpectType Promise<void>

document.CSS; // $ExpectType string
document.sections; // $ExpectType string[]
