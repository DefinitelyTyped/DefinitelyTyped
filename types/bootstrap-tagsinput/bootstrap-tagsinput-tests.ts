$('input').tagsinput('add', 'some tag');
$('input').tagsinput('add', { id: 1, text: 'some tag' });
$('input').tagsinput('add', 'some tag', {preventPost: true});
$('#tags-input').on('beforeItemAdd', (event: any) => {
   let tag = event.item;
   // Do some processing here
});
$('input').tagsinput('remove', 'some tag');
$('input').tagsinput('remove', { id: 1, text: 'some tag' });
$('input').tagsinput('remove', 'some tag', {preventPost: true});
$('#tags-input').on('beforeItemRemove', (event: any) => {
   let tag = event.item;
   // Do some processing here
});
$('input').tagsinput('removeAll');
$('input').tagsinput('focus');
$('input').tagsinput('input');
$('input').tagsinput('refresh');
$('input').tagsinput('destroy');
