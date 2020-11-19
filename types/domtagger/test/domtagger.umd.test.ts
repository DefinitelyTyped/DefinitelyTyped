const options: domtagger.Options = {
    attribute(node, name) {
        return value => {
            const type = typeof value;
            if (type === 'boolean' || type === 'function') {
                (node as any)[name] = value;
            } else if (value == null) {
                node.removeAttribute(name);
            } else {
                node.setAttribute(name, value);
            }
        };
    },

    text(node) {
        return textContent => {
            node.textContent = textContent;
        };
    },

    any(node, childNodes) {
        return markup => {
            switch (node.nodeType) {
                case Node.ELEMENT_NODE:
                    (node as Element).innerHTML = markup;
                    break;
            }
        };
    },
};

function createOptions<T extends string>(type: T): domtagger.Options & { type: T } {
    return Object.create(options, {
        type: { value: type, enumerable: true, configurable: true, writable: true },
    });
}

// $ExpectType (template: TemplateStringsArray, ...args: any[]) => HTMLElement
const html = domtagger(createOptions('html'));

// $ExpectType (template: TemplateStringsArray, ...args: any[]) => SVGElement
const svg = domtagger(createOptions('svg'));

// $ExpectType HTMLElement
html`
    <div class="${'foo'}" />
`;

// $ExpectType SVGElement
svg`
    <g class="${'foo'}" />
`;
