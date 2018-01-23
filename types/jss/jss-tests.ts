// API docs at http://cssinjs.org/js-api

import {
	create as createJSS,
	default as sharedInstance
} from 'jss';

const jss = createJSS().setup({});

// use <string> because we will be dynamically augmenting
const styleSheet = jss.createStyleSheet<string>(
	{
		root: {
			backgroundColor: 'red',
		},
		container: {
			display: 'flex',
			width: 100,
			opacity: .5,
		},
	},
	{
		link: true,
	}
).attach();

styleSheet.classes.root; // $ExpectType string
styleSheet.classes.container; // $ExpectType string

const rule = styleSheet.addRule('dynamicRule', { color: 'indigo' });
rule.prop('border-radius', 5).prop('color'); // $ExpectType string
styleSheet.classes.dynamicRule; // $ExpectType string

styleSheet.deleteRule('dynamicRule');

// test that `addRule` supports the shorthand signature
const dynamicRule = styleSheet.addRule({ color: 'red' });

const div = document.createElement('div');
dynamicRule.applyTo(div);

const containerRule = styleSheet.getRule('container');
const containerJSON = containerRule.toJSON();
const css = styleSheet.toString();

styleSheet.addRules({
	rule1: {
		fontFamily: 'Roboto',
		color: '#FFFFFF',
	},
	rule2: {
		fontFamily: 'Inconsolata',
		fontSize: 17,
	},
});

styleSheet.detach();

sharedInstance.createStyleSheet({
	container: {
		background: '#000099',
	}
});
