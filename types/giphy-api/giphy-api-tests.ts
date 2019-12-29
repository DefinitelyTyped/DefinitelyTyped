import giphyApi = require('giphy-api');

const cb = (err: Error, res: any) => {};

const apiOptions: giphyApi.GiphyOptions = { https: true };
giphyApi('API KEY HERE');
giphyApi(apiOptions);
giphyApi({ timeout: 60 });
giphyApi({ apiKey: 'API KEY' });

const searchOptions: giphyApi.SearchOptions = { q: 'pokemon', rating: 'g' };
const giphy: giphyApi.Giphy = giphyApi();
giphy.search('pokemon', cb);
giphy.search('pokemon').then(res => res.data[0]);
giphy.search(searchOptions, cb);
giphy.search({ q: 'pokemon', rating: 'g' }).then(res => res.data[0]);

giphy.id('feqkVgjJpYtjy', cb);
giphy.id('feqkVgjJpYtjy').then(res => res.data[0]);
giphy.id(['feqkVgjJpYtjy'], cb);
giphy.id(['feqkVgjJpYtjy']).then(res => res.data[0]);

giphy.translate('superman', cb);
giphy.translate('superman').then(res => res.data.id);
giphy.translate({ s: 'superman', rating: 'g', fmt: 'html' }, cb);
giphy.translate({ s: 'superman', rating: 'g' }).then(res => res.data.id);

giphy.random('superman', cb);
giphy.random('superman').then(res => res.data.id);
giphy.random({ tag: 'superman', rating: 'g' }, cb);
giphy.random({ tag: 'superman', rating: 'g' }).then(res => res.data.id);

giphy.trending(cb);
giphy.trending().then(res => res.data[0]);
giphy.trending({ limit: 2, rating: 'g' });
giphy.trending({ limit: 2, rating: 'g' }).then(res => res.data[0]);
