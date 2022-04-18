// $ExpectError
new InfiniteScroll('.abc');
// $ExpectError
new InfiniteScroll(document.querySelector('.abc')!);
new InfiniteScroll('.abc', {});
new InfiniteScroll(document.querySelector('.abc')!, {});

const infScroll = new InfiniteScroll('.abc', {});
const infScrollJQuery = $('.abc').infiniteScroll;

infScroll.loadNextPage();
infScrollJQuery('loadNextPage');

// $ExpectError
infScroll.appendItems();
// $ExpectError
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
