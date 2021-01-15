import metascraper = require('metascraper');
import metascraperClearbit = require('metascraper-clearbit');

const html = 'example';
const url = 'https://example.org';

const options: metascraperClearbit.Options = {
    gotOpts: {
        timeout: 10000,
    },
};

metascraper([metascraperClearbit()])({ html, url }).then(data => {
    data;
});

metascraper([metascraperClearbit(options)])({ html, url }).then(data => {
    data;
});
