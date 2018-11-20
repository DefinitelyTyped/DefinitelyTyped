// API docs at http://cssinjs.org/js-api

import {
	create as createJSS,
	createGenerateClassName,
	SheetsRegistry,
	default as sharedInstance,
} from 'jss';

const jss = createJSS().setup({ createGenerateClassName });
jss.use({}, {}); // $ExpectType JSS

const styleSheet = jss.createStyleSheet<string>(
	{
		ruleWithMockObservable: {
			subscribe: observer => {
				const next = typeof observer === 'function' ? observer : observer.next;
				next({ background: 'blue', display: 'flex' });
				next({ invalidKey: 'blueish' }); // $ExpectError

				// only kebab case allowed in observables
				next({ 'align-items': 'center' });
				next({ alignItems: 'center' }); // $ExpectError
				return {
					unsubscribe() {}
				};
			}
		},
		container: {
			display: 'flex',
			'align-items': 'center',
			width: 100,
			opacity: .5,
		},
	},
	{
		link: true,
	}
);

const attachedStyleSheet = styleSheet.attach();

attachedStyleSheet.classes.container; // $ExpectType string
attachedStyleSheet.classes.ruleWithMockObservable; // $ExpectType string

const rule = attachedStyleSheet.addRule('dynamicRule', { color: 'indigo' });
rule.prop('border-radius', 5).prop('color'); // $ExpectType string
attachedStyleSheet.classes.dynamicRule; // $ExpectType string

attachedStyleSheet.deleteRule('dynamicRule');

// test that `addRule` supports the shorthand signature
const dynamicRule = attachedStyleSheet.addRule({ color: 'red' });

const div = document.createElement('div');
dynamicRule.applyTo(div);

const containerRule = attachedStyleSheet.getRule('container');
const containerJSON = containerRule.toJSON();
const css = attachedStyleSheet.toString();

attachedStyleSheet.addRules({
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
	'align-items': Symbol(),
});

const styleSheet2 = sharedInstance.createStyleSheet({
	container: {
		background: '#000099',
	}
});

styleSheet2.classes.container; // $ExpectType string
styleSheet2.classes.notAValidKey; // $ExpectError

/* SheetsRegistry test */
const sheetsRegistry = new SheetsRegistry();
sheetsRegistry.add(styleSheet);

const secondStyleSheet = jss.createStyleSheet(
	{
		ruleWithMockObservable: {
			subscribe() {
				return {
					unsubscribe() {}
				};
			}
		},
		container2: {
			display: 'flex',
			width: 150,
			opacity: .8,
		},
	},
	{
		link: true,
	}
);

sheetsRegistry.add(secondStyleSheet);
sheetsRegistry.registry.length; // $ExpectType number
sheetsRegistry.remove(secondStyleSheet);

sheetsRegistry.index; // $ExpectType number
sheetsRegistry.index = 5; // $ExpectError
sheetsRegistry.toString(); // $ExpectType string
// With css options
sheetsRegistry.toString({indent: 5}); // $ExpectType string

sheetsRegistry.reset();
