import metascraper = require('metascraper');
import metascraperDate = require('metascraper-date');

const html = 'example';
const url = 'https://example.org';

metascraper([metascraperDate()])({ html, url }).then(data => {
    data;
});
