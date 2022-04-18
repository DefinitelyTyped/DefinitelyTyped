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

$('.abc').data('infiniteScroll'); // $ExpectType InfiniteScroll
InfiniteScroll.data('.abc'); // $ExpectType InfiniteScroll

infScroll.pageIndex; // $ExpectType number
$('.abc').data('infiniteScroll').pageIndex; // $ExpectType number

infScroll.loadCount; // $ExpectType number
$('.abc').data('infiniteScroll').loadCount; // $ExpectType number
