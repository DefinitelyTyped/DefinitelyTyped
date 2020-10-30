import metascraper = require('metascraper');
import metascraperReadability = require('metascraper-readability');

const html = 'example';
const url = 'https://example.org';

metascraper([metascraperReadability()])({ html, url }).then(data => {
    data;
});
