import * as tinymce from 'sceditor';

var textarea = document.getElementById('myTextArea');
sceditor.create( 
	textarea, {
	plugins: "bbcode",
	format: "bbcode",
	toolbar: "bold,italic,underline|link,unlink|bulletlist|left,center,right|",
});