import htmlTags = require('html-tags');
import voidHtmlTags = require('html-tags/void');
import htmlTagsJson = require('html-tags/html-tags.json');
import voidHtmlTagsJson = require('html-tags/html-tags-void.json');

htmlTags; // $ExpectType string[]
voidHtmlTags; // $ExpectType string[]
htmlTagsJson; // $ExpectType string[]
voidHtmlTagsJson; // $ExpectType string[]
