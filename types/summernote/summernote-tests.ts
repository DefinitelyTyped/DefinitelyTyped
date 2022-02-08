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
    ['font', ['fontname', 'fontsize', 'fontsizeunit', 'color']],
    ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
    ['insert', ['picture', 'video']],
    ['fontname', ['fontname']],
  ],
  fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times'],
  fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '36', '48', '64', '82', '150'],
  fontSizeUnits: ['px', 'pt'],
  callbacks: {
    onInit: () => { },
    unDocumented: () => { },
    onBlur: (ev) => { },
  }
};

const code = '<p> hello </p>';
$('#testElement').summernote('code', code);
alert(code === $('#testElement').summernote('code'));
