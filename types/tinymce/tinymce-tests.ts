import * as tinymce from 'tinymce';

tinymce.init({
  selector: 'textarea',
  height: 500,
  menubar: false,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table contextmenu paste code',
    'autosave'
  ],
  autosave_ask_before_unload: false,
  autosave_interval: "20s",
  autosave_prefix: "tinymce-autosave-{path}{query}-{id}-",
  autosave_restore_when_empty: false,
  autosave_retention: "30m",
  toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
  content_css: '//www.tinymce.com/css/codepen.min.css'
});

const t = new tinymce.util.Color('#FFFFFF');
