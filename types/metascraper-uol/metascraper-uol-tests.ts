import metascraper = require('metascraper');
import metascraperUol = require('metascraper-uol');

const html = 'example';
const url = 'https://example.org';

metascraper([metascraperUol()])({ html, url }).then(data => {
    data;
});
