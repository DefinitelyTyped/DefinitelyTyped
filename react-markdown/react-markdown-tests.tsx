import React = require('react');
import ReactMarkdown = require('react-markdown');
import _ = require('lodash');
import ReactElement = React.ReactElement;
//requires the npm packages react-test-renderer, commonmark-react-renderer

declare function require(name : string) : any;
let render = require('react-test-renderer').create;
var ReactRenderer = require('commonmark-react-renderer').renderers;

function logMembers(name : string, obj : Object) {
	console.log(`\r\n${name}:`);
	for (let key in obj) {
		console.log(`\t${key} = ${obj[key]}`);
	}
}

var logRenderer = {} as any;

for (let key in ReactRenderer) {
	if (ReactRenderer.hasOwnProperty(key)) {
		logRenderer[key] = function(props) {
			logMembers(key, props);
			if (_.isFunction(ReactRenderer[key])) {
				return ReactRenderer[key](props);
			} else {
				return <div {...props}/>;
			}
		}
	}
}

let defRenderer = logRenderer as ReactMarkdown.Renderers;


let input = `
<div>
	HtmlBlock
</div>

<span>HtmlInline</span>

	indentend block
	
\`\`\`csharp
fenced block
\`\`\`

\`inline code\`

# Heading 1

a
b

[link](url)

![alt](image)

1. list

a     
b

*italic*

**strong**

----

> Block quote



df


Paragraph

\`\`\`csharp
fenced code
\`\`\`

	indented code
	
	
Here is \`inline code\`



1. ListItem
<div>
	HtmlBlock
</div>`;

let s = render(
	<ReactMarkdown
		source={input}
		allowNode={node => {
			return true;
		}}
		childAfter={<span>After</span>}
		childBefore={<span>Before</span>}
		className="className"
		skipHtml={false}
		softBreak="br"
		unwrapDisallowed={true}
		transformLinkUri={str => {
			return str + "x";
		}}
		transformImageUri={str => {
			return str + "x";
		}}
		escapeHtml={false}
		containerTagName="div"
		containerProps={{className : "hi"}}
		renderers={logRenderer}
	/>

);
