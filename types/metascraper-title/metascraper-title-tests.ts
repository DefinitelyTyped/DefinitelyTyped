import metascraper = require('metascraper');
import metascraperTitle = require('metascraper-title');

const html = 'example';
const url = 'https://example.org';

metascraper([metascraperTitle()])({ html, url }).then(data => {
    data;
});
