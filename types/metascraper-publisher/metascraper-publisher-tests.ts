import metascraper = require('metascraper');
import metascraperPublisher = require('metascraper-publisher');

const html = 'example';
const url = 'https://example.org';

metascraper([metascraperPublisher()])({ html, url }).then(data => {
    data;
});
