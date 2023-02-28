const frame = window.wp.media({
    title: 'Media Library',
});

frame.on('select', () => alert('works'));
