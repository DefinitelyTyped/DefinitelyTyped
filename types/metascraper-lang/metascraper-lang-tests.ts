import metascraper = require('metascraper');
import metascraperLang = require('metascraper-lang');

const html = 'example';
const url = 'https://example.org';

metascraper([metascraperLang()])({ html, url }).then(data => {
    data;
});
