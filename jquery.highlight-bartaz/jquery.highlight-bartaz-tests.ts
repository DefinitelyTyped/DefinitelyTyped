/// <reference path="jquery.highlight-bartaz.d.ts" />



$('#content').highlight('lorem');

// search for and highlight more terms at once
// so you can save some time on traversing DOM
$('#content').highlight(['lorem', 'ipsum']);
$('#content').highlight('lorem ipsum');

// search only for entire word 'lorem'
$('#content').highlight('lorem', { wordsOnly: true });

// don't ignore case during search of term 'lorem'
$('#content').highlight('lorem', { caseSensitive: true });

// wrap every occurrance of term 'ipsum' in content
// with <em class='important'>
$('#content').highlight('ipsum', { element: 'em', className: 'important' });

// remove default highlight
$('#content').unhighlight();

// remove custom highlight
$('#content').unhighlight({ element: 'em', className: 'important' });
