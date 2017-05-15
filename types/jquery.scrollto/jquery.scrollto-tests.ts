$('div').scrollTo(340);

$('div').scrollTo('+=340px', { axis: 'y' });

$('div').scrollTo('p.paragraph:eq(2)', 500, { easing: 'swing', queue: true, axis: 'xy' });

var second_child = document.getElementById('container').firstChild.nextSibling;
$('#container').scrollTo(second_child, {
    duration: 500, axis: 'x', onAfter: function () {
        alert('scrolled!!');
    }
});

$('div').scrollTo({ top: 300, left: '+=200' }, { axis: 'xy', offset: -20 });

$.scrollTo(340);

$.scrollTo('+=340px', { axis: 'y' });

$.scrollTo('p.paragraph:eq(2)', 500, { easing: 'swing', queue: true, axis: 'xy' });

$.scrollTo(second_child, {
    duration: 500, axis: 'x', onAfter: function () {
        alert('scrolled!!');
    }
});

$.scrollTo({ top: 300, left: '+=200' }, { axis: 'xy', offset: -20 });