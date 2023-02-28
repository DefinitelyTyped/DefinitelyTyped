// @ts-expect-error
new InfiniteScroll('.abc');
// @ts-expect-error
new InfiniteScroll(document.querySelector('.abc')!);
new InfiniteScroll('.abc', {});
new InfiniteScroll(document.querySelector('.abc')!, {});

const infScroll = new InfiniteScroll('.abc', {});
const infScrollJQuery = $('.abc').infiniteScroll;

infScroll.loadNextPage();
infScrollJQuery('loadNextPage');

// @ts-expect-error
infScroll.appendItems();
// @ts-expect-error
infScrollJQuery('appendItems');
infScroll.appendItems(document.querySelectorAll('.abc'));
infScrollJQuery('appendItems', document.querySelectorAll('.abc'));

infScroll.getPath();
infScrollJQuery('getPath');

infScroll.getAbsolutePath();
infScrollJQuery('getAbsolutePath');

infScroll.option({ path: '/page/{{#}}' });
infScrollJQuery('option', { path: '/page/{{#}}' });

infScroll.destroy();
infScrollJQuery('destroy');

$('.abc').data('infiniteScroll'); // $ExpectType InfiniteScroll
InfiniteScroll.data('.abc'); // $ExpectType InfiniteScroll

infScroll.pageIndex; // $ExpectType number
$('.abc').data('infiniteScroll').pageIndex; // $ExpectType number

infScroll.loadCount; // $ExpectType number
$('.abc').data('infiniteScroll').loadCount; // $ExpectType number

infScroll.on('scrollThreshold', () => {});
infScroll.on('request', (_path, _fetchPromise) => {});
infScroll.on('load', (_body, _path, _response) => {});
infScroll.on('append', (_path, _items, _response) => {});
infScroll.on('error', (_error, _path, _response) => {});
infScroll.on('last', (_body, _path) => {});
infScroll.on('history', (_title, _path) => {});

$('.abc').on('scrollThreshold.infiniteScroll', _event => {});
$('.abc').on('request.infiniteScroll', (_event, _path, _fetchPromise) => {});
$('.abc').on('load.infiniteScroll', (_event, _body, _path, _response) => {});
$('.abc').on('append.infiniteScroll', (_event, _path, _items, _response) => {});
$('.abc').on('error.infiniteScroll', (_event, _error, _path, _response) => {});
$('.abc').on('last.infiniteScroll', (_event, _body, _path) => {});
$('.abc').on('history.infiniteScroll', (_event, _title, _path) => {});
