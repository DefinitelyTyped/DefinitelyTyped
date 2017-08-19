import VKBeautify from 'vkbeautify';

/*
 * Beautifying
 *
 * vkbeautify.xml(text [,indent_pattern]);
 * vkbeautify.json(text [,indent_pattern]);
 * vkbeautify.css(text [,indent_pattern]);
 * vkbeautify.sql(text [,indent_pattern]);
 *
 * @text - String; text to beatufy;
 * @indent_pattern - Integer | String;
 *         Integer:  number of white spaces;
 *         String:   character string to visualize indentation ( can also be a set of white spaces )
 */

const exampleContent = "here-be-xml-json-css-or-sql-content-that-is-about-to-get-formatted";

// xml
function xmlWithDefault() {
    VKBeautify.xml(exampleContent);
}

function xmlWithNumberOfSpaces() {
    VKBeautify.xml(exampleContent, 3);
}

function xmlWithStringPattern() {
    VKBeautify.xml(exampleContent, '   ');
}

// json
function jsonWithDefault() {
    VKBeautify.json(exampleContent);
}

function jsonWithNumberOfSpaces() {
    VKBeautify.json(exampleContent, 3);
}

function jsonWithStringPattern() {
    VKBeautify.json(exampleContent, '   ');
}

// css
function cssWithDefault() {
    VKBeautify.css(exampleContent);
}

function cssWithNumberOfSpaces() {
    VKBeautify.css(exampleContent, 3);
}

function cssWithStringPattern() {
    VKBeautify.css(exampleContent, '   ');
}

// sql
function sqlWithDefault() {
    VKBeautify.sql(exampleContent);
}

function sqlWithNumberOfSpaces() {
    VKBeautify.sql(exampleContent, 3);
}

function sqlWithStringPattern() {
    VKBeautify.sql(exampleContent, '   ');
}

/*
 * Minifying
 *
 * vkbeautify.xmlmin(text [,preserve_comments]);
 * vkbeautify.jsonmin(text);
 * vkbeautify.cssmin(text [,preserve_comments]);
 * vkbeautify.sqlmin(text);
 *
 * @text - String; text to minify;
 * @preserve_comments - Bool; [optional];
 *         Set this flag to true to prevent removing comments from @text ( minxml and mincss functions only. )
 */

// xml
function xmlminWithDefault() {
    VKBeautify.xmlmin(exampleContent);
}

function xmlminWitPreserveComments() {
    VKBeautify.xmlmin(exampleContent, true);
}

function xmlminAndRemoveComments() {
    VKBeautify.xmlmin(exampleContent, false);
}

// json
function jsonmin() {
    VKBeautify.jsonmin(exampleContent);
}

// css
function cssminWithDefault() {
    VKBeautify.cssmin(exampleContent);
}

function cssminWitPreserveComments() {
    VKBeautify.cssmin(exampleContent, true);
}

function cssminAndRemoveComments() {
    VKBeautify.cssmin(exampleContent, false);
}

// sql
function sqlmin() {
    VKBeautify.sqlmin(exampleContent);
}
