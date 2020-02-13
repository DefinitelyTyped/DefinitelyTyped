import 'summernote';

$('#testElement').summernote({
  airMode: true
});

const config: Summernote.Options = {
    placeholder: '',
    tabsize: 2,
    height: 100,
    tabDisable: true,
    codeviewFilter: false,
    codeviewIframeFilter: true,
    codeviewFilterRegex: 'custom-regex',
    codeviewIframeWhitelistSrc: ['my-own-domainname'],
    toolbar: [
        ['misc', ['undo', 'redo']],
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['fontname', 'fontsize', 'color']],
        ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
        ['insert', ['picture', 'video']],
    ],
    fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times'],
};

$('#testElement').summernote('code', '<p> hello </p>');
$('#testElement').summernote('code');
