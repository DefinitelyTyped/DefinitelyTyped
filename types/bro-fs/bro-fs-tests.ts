import * as fs from 'bro-fs';

fs.init({type: window.TEMPORARY, bytes: 5 * 1024 * 1024})
  .then(() => fs.mkdir('dir'))
  .then(() => fs.writeFile('dir/file.txt', 'hello world'))
  .then(() => fs.readFile('dir/file.txt', {type: 'Text'}))
  .then(content => console.log(content)); // => "hello world"
