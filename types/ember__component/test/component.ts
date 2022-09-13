import Component, { getComponentTemplate } from '@ember/component';
import Object, { computed, get } from '@ember/object';
import hbs from 'htmlbars-inline-precompile';
import { assertType } from './lib/assert';

Component.extend({
    layout: hbs`
        <div>
          {{yield}}
        </div>
    `,
});

Component.extend({
    layout: 'my-layout',
});

const MyComponent = Component.extend();
assertType<string | string[]>(get(MyComponent, 'positionalParams'));

const component1 = Component.extend({
    actions: {
        hello(name: string) {
            console.log('Hello', name);
        },
    },
});

Component.extend({
    name: '',
    hello(name: string) {
        this.set('name', name);
    },
});

Component.extend({
    tagName: 'em',
});

Component.extend({
    classNames: ['my-class', 'my-other-class'],
});

Component.extend({
    classNameBindings: ['propertyA', 'propertyB'],
    propertyA: 'from-a',
    propertyB: computed(function () {
        if (!this.get('propertyA')) {
            return 'from-b';
        }
    }),
});

Component.extend({
    classNameBindings: ['hovered'],
    hovered: true,
});

Component.extend({
    classNameBindings: ['messages.empty'],
    messages: Object.create({
        empty: true,
    }),
});

Component.extend({
    classNameBindings: ['isEnabled:enabled:disabled'],
    isEnabled: true,
});

Component.extend({
    classNameBindings: ['isEnabled::disabled'],
    isEnabled: true,
});

Component.extend({
    tagName: 'a',
    attributeBindings: ['href'],
    href: 'http://google.com',
});

Component.extend({
    tagName: 'a',
    attributeBindings: ['url:href'],
    url: 'http://google.com',
});

Component.extend({
    tagName: 'use',
    attributeBindings: ['xlinkHref:xlink:href'],
    xlinkHref: '#triangle',
});

Component.extend({
    tagName: 'input',
    attributeBindings: ['disabled'],
    disabled: false,
});

Component.extend({
    tagName: 'input',
    attributeBindings: ['disabled'],
    disabled: computed(() => {
        if ('someLogic') {
            return true;
        } else {
            return false;
        }
    }),
});

Component.extend({
    tagName: 'form',
    attributeBindings: ['novalidate'],
    novalidate: null,
});

Component.extend({
    click(event: object) {
        // will be called when an instance's
        // rendered element is clicked
    },
});

// @ts-expect-error
Component.reopen({
    attributeBindings: ['metadata:data-my-metadata'],
    metadata: '',
});

interface MySig {
    Args: {
        Named: {
            name: string;
            age: number;
        };
        Positional: [action: () => void];
    };
}

// These type helpers are stolen (and tweaked) from Glimmer and Glint internals
// just to demo that this actually has the expected behavior with a signature
// and an Ember component
type GetWithFallback<T, K, Fallback> = K extends keyof T ? T[K] : Fallback;
type NamedArgsFor<T> = GetWithFallback<GetWithFallback<T, 'Args', {}>, 'Named', object>;

interface SigExample extends NamedArgsFor<MySig> {}
class SigExample extends Component<MySig> {
    get accessArgs() {
        const {
            name, // $ExpectType string
            age, // $ExpectType number
        } = this;

        return `${name} is ${age} years old`;
    }
}

// $ExpectType TemplateFactory | undefined
getComponentTemplate(component1);

// @ts-expect-error
getComponentTemplate('foo');
