import * as fs from 'fs';
import * as util from 'util';
import snekfetch = require('snekfetch');

const writeFile = util.promisify(fs.writeFile);

snekfetch.get('https://s.gus.host/o-SNAKES-80.jpg')
  .then(r => writeFile('download.jpg', r.body));

snekfetch.get('https://s.gus.host/o-SNAKES-80.jpg')
  .pipe(fs.createWriteStream('download.jpg'));

snekfetch.post('https://httpbin.org/post')
  .send({ meme: 'dream' })
  .then(r => console.log(r.body));
