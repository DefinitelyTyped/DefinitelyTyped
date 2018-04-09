import { sceditor } from './index';

const textarea = document.getElementById('myTextArea') as HTMLElement;
sceditor.create(
	textarea, {
	plugins: "bbcode",
	format: "bbcode",
	toolbar: "bold,italic,underline|link,unlink|bulletlist|left,center,right|",
	}
);
