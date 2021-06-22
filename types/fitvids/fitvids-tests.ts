/// <reference lib="dom" />
// $ExpectType void
fitvids();
// $ExpectType void
fitvids('.video-container');
// $ExpectType void
fitvids(document.body);
// $ExpectType void
fitvids(document.querySelectorAll('.video-container'));
// $ExpectType void
fitvids(document.querySelector('.video-container'));
// $ExpectType void
fitvids({
    players: 'iframe[src*="example.com"]',
});
// $ExpectType void
fitvids('.video-container', {
    players: ['iframe[src*="example1.com"]', 'iframe[src*="example2.com"]'],
});
// $ExpectType void
fitvids({
    ignore: ['object'],
});
// $ExpectType void
fitvids({
    ignore: 'object',
});
