tinymce.init(
  {
    selector: '.tinymce-editable',
    height: 145,
    plugins: [
      'autolink table contextmenu paste code link textcolor colorpicker image imagetools'
    ],
    menubar: 'edit insert table tools',
    toolbar: 'undo redo | styleselect bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | link image',
    content_css: 'page.css'
  }
);