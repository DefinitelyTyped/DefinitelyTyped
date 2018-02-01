// basic usage
$(document).ready(() => {
	$('#inputTag').tagsInput();
	$('#inputTag').addTag('new tag');
	$('#inputTag').tagExist('new tag');
	$('inputTag').removeTag('new tag');
	$('#inputTag').importTags('tag1, tag2, tag3');

	// with options
	const options: jQueryTagsInput.Options = {
		height: '100px',
		width: '300px',
		minChars: 3,
		maxChars: 0,
		onAddTag: (value: string) => {
			alert('Tag added: ' + value);
		}
	};
	$('#inputTag').tagsInput(options);
});
