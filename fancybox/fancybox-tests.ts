/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="fancybox.d.ts" />

$('.fancybox').fancybox();
$('.fancybox').fancybox({
    padding: 0,
    openEffect: 'elastic'
});
$.fancybox([
    { href: 'img1.jpg', title: 'Title' },
    { href: 'img2.jpg', title: 'Title' }
]);
$.fancybox({ href: 'image.jpg', title: 'Lorem lipsum' });
$.fancybox(['image.jpg', 'image.jpg']);
$.fancybox('image.jpg');
$.fancybox('<h1>Lorem lipsum</h1>');

$.fancybox.cancel();
$.fancybox.close(true);
$.fancybox.play();
$.fancybox.next();
$.fancybox.prev();
$.fancybox.jumpto(1);
$.fancybox.reposition();
$.fancybox.update();
$.fancybox.toggle();
$.fancybox.showLoading();
$.fancybox.hideLoading();
$(".selector").fancybox({ 'type': 'image' });
$("#single_1").fancybox({
    helpers: {
        title: {
            type: 'float'
        }
    }
});
$("#single_2").fancybox({
    openEffect: 'elastic',
    closeEffect: 'elastic',
    helpers: {
        title: {
            type: 'inside'
        }
    }
});
$(".fancybox").fancybox({
    openEffect: 'none',
    closeEffect: 'none'
});
$(".various").fancybox({
    maxWidth: 800,
    maxHeight: 600,
    fitToView: false,
    width: '70%',
    height: '70%',
    autoSize: false,
    closeClick: false,
    openEffect: 'none',
    closeEffect: 'none'
});
$(".fancybox-button").fancybox({
    prevEffect: 'none',
    nextEffect: 'none',
    closeBtn: false,
    helpers: {
        title: { type: 'inside' },
        buttons: {}
    }
});
$(".fancybox-thumb").fancybox({
    prevEffect: 'none',
    nextEffect: 'none',
    helpers: {
        title: {
            type: 'outside'
        },
        thumbs: {
            width: 50,
            height: 50
        }
    }
});
$('.fancybox-media').fancybox({
    openEffect: 'none',
    closeEffect: 'none',
    helpers: {
        media: {}
    }
});
$(".fancybox").fancybox({
    helpers: {
        title: null
    }
});
$(".fancybox").fancybox({
    helpers: {
        overlay: null
    }
});
$(".fancybox").fancybox({
    helpers: {
        title: {
            type: 'inside'
        },
        overlay: {
            showEarly: false
        }
    }
});
$(".fancybox").fancybox({
    helpers: {
        thumbs: {
            width: 50,
            height: 50
        }
    }
});
$(".fancybox").fancybox({
    beforeLoad: function () {
        this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
    }
});
$.fancybox('<div><h1>Lorem Lipsum</h1><p>Lorem lipsum</p></div>', {
    title: 'Custom Title'
});
$.fancybox($("#inline"), {
    title: 'Custom Title'
});
$.fancybox({
    href: 'example.jpg',
    title: 'Custom Title'
});
$.fancybox([
    {
        href: 'example1.jpg',
        title: 'Custom Title 1'
    },
    {
        href: 'example2.jpg',
        title: 'Custom Title 2'
    }
], {
    padding: 0
});

$(".fancybox").fancybox({
    margin: [20, 60, 20, 60]
});