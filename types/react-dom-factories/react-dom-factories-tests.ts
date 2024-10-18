import * as DOM from "react-dom-factories";

// NOTE: forward declarations for tests
declare var console: Console;
interface Console {
    log(...args: any[]): void;
}

// These are all taken from the tests for the React types.
// They're only kept in case they were actually testing some exotic behavior of react-dom-factories.
// Feel free to remove if they no longer make sense.
function testsFromReact(htmlAttr: React.HTMLProps<HTMLElement>) {
    // tiny sampling of factories
    DOM.a({}, "a");
    DOM.div({}, DOM.span({}, DOM.b()), DOM.ul({}, DOM.li({}, "test")));

    DOM.div(
        null,
        DOM.input({
            ref: input => {
                // $ExpectType HTMLInputElement | null
                input;
            },
            value: "foo",
        }),
        DOM.input({
            onChange: event => console.log(event.target),
        }),
    );

    [DOM.h1({ key: "1" }, "1"), DOM.h1({ key: "2" }, "2")];

    DOM.div(null, 2);
    DOM.div(null, undefined);

    let domNodeRef: Element | null;
    DOM.div({ ref: "domRef" });
    // type of node should be inferred
    DOM.div({
        ref: node => {
            domNodeRef = node;
        },
    });

    let inputNodeRef: HTMLInputElement | null;
    DOM.input({
        ref: node => {
            inputNodeRef = node as HTMLInputElement;
        },
    });

    DOM.span(null);

    DOM.div(htmlAttr);
    DOM.span(htmlAttr);
    DOM.input(htmlAttr);

    DOM.svg(
        {
            viewBox: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
        },
        DOM.rect({
            className: "foobar",
            id: "foo",
            color: "black",
            x: 22,
            y: 10,
            width: 4,
            height: 28,
            strokeDasharray: "30%",
            strokeDashoffset: "20%",
        }),
        DOM.rect({
            x: 10,
            y: 22,
            width: 28,
            height: 4,
            strokeDasharray: 30,
            strokeDashoffset: 20,
        }),
        DOM.path({
            d: "M0,0V3H3V0ZM1,1V2H2V1Z",
            fill: "#999999",
            fillRule: "evenodd",
        }),
    );

    DOM.textarea({
        value: "test",
        onChange: e => {
            const target: HTMLTextAreaElement = e.target;
        },
    });

    DOM.input({
        onChange: event => {
            // `event.target` is guaranteed to be HTMLInputElement
            const target: HTMLInputElement = event.target;
        },
    });
}
