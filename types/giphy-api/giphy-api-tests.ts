import giphyApi = require('giphy-api');

const cb = (err: Error, res: any) => {};

giphyApi('API KEY HERE');
giphyApi({ https: true });
giphyApi({ timeout: 60 });
giphyApi({ apiKey: 'API KEY' });

const giphy = giphyApi();
giphy.search('pokemon', cb);
giphy.search('pokemon').then(res => {});
giphy.search({ q: 'pokemon', rating: 'g' }, cb);
giphy.search({ q: 'pokemon', rating: 'g' }).then(res => {});

giphy.id('feqkVgjJpYtjy', cb);
giphy.id('feqkVgjJpYtjy').then(res => {});
giphy.id(['feqkVgjJpYtjy'], cb);
giphy.id(['feqkVgjJpYtjy']).then(res => {});

giphy.translate('superman', cb);
giphy.translate('superman').then(res => {});
giphy.translate({ s: 'superman', rating: 'g', fmt: 'html' }, cb);
giphy.translate({ s: 'superman', rating: 'g' }).then(res => {});

giphy.random('superman', cb);
giphy.random('superman').then(res => {});
giphy.random({ tag: 'superman', rating: 'g' }, cb);
giphy.random({ tag: 'superman', rating: 'g' }).then(res => {});

giphy.trending(cb);
giphy.trending().then(res => {});
giphy.trending({ limit: 2, rating: 'g' });
giphy.trending({ limit: 2, rating: 'g' }).then(res => {});
