// API docs at http://cssinjs.org/js-api

import {
	create as createJSS,
	default as sharedInstance
} from 'jss';

const jss = createJSS().setup({});

const styleSheet = jss.createStyleSheet<string>(
	{
		ruleWithMockObservable: {
			subscribe: () => ({
				unsubscribe() {}
			})
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

styleSheet.classes.container; // $ExpectType string
styleSheet.classes.ruleWithMockObservable; // $ExpectType string

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

styleSheet.addRule('badProperty', {
	thisIsNotAValidProperty: 'blah', // $ExpectError
});

styleSheet.addRule('badValue', { // $ExpectError
	display: 'thisIsNotAValidDisplayValue',
});

styleSheet.detach();

const styleSheet2 = sharedInstance.createStyleSheet({
	container: {
		background: '#000099',
	}
});

styleSheet2.classes.container; // $ExpectType string
styleSheet2.classes.notAValidKey; // $ExpectError
