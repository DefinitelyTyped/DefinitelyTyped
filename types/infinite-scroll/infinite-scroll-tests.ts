// $ExpectError
new InfiniteScroll('.abc');
// $ExpectError
new InfiniteScroll(document.querySelector('.abc')!);
new InfiniteScroll('.abc', {});
new InfiniteScroll(document.querySelector('.abc')!, {});
