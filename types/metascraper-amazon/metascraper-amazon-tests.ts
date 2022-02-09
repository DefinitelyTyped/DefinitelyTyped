import metascraper = require('metascraper');
import metascraperAmazon = require('metascraper-amazon');

const html = 'example';
const url = 'https://example.org';

metascraper([metascraperAmazon()])({ html, url }).then(data => {
    data;
});
