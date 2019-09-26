import 'summernote';

$('#testElement').summernote({
  airMode: true
});

$('#testElement').summernote('code', '<p> hello </p>');
$('#testElement').summernote('code');
