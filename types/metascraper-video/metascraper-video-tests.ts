import metascraper = require('metascraper');
import metascraperVideo = require('metascraper-video');

const html = 'example';
const url = 'https://example.org';

metascraper([metascraperVideo()])({ html, url }).then(data => {
    data;
});
