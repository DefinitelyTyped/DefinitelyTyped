import { store, render, component } from 'reefjs';

// Component re-render interactions with multiple store instances
(() => {
    const reefStore = store({ text: 'Hello' }); // fires the default reef:store event on change
    const fooStore = store({ text: 'World' }, 'foo'); // fires reef:store-foo on change
    const barStore = store({ text: '!' }, 'bar'); // fires reef:store-bar on change

    const templateFn = () => `<p>${reefStore.text}, ${fooStore.text}${barStore.text}</p>`;

    component('#app', templateFn, { stores: ['foo', 'bar'], events: false });
    // listens only to reef:store-foo and reef:store-bar
    // initially renders Hello, World!

    setTimeout(() => {
        fooStore.text = 'Earth'; // fires reef:store-foo
    }, 1000); // component re-renders, renders Hello, Earth!

    setTimeout(() => {
        reefStore.text = 'Hi'; // fires reef:store
    }, 2000); // component does not re-render, DOM still shows Hello, Earth!

    setTimeout(() => {
        barStore.text = '?'; // fires reef:store-bar
    }, 3000); // component re-renders, renders Hi, Globe?
})();

// Safely render UI components test
(() => {
    const elem = document.getElementById('test4') as HTMLElement;
    const templateIframe = `<iframe src="data:text/html,<p>test 1, you should not see this</p>"></iframe>`;
    const templateAnchor = `<a href="javascript:(function(){ document.getElementById('test2').innerHTML = 'ohno! this should not happen' })();">test2</a>`;
    const templateButton = `<button onclick="(function(el){ el.innerHTML = 'inlined events are enabled!' })(this)">click me</button>`;

    render('#test1', templateIframe, undefined); // should render an empty iframe

    render('#test2', templateAnchor, true); // should still render an empty anchor tag

    render('#test3', templateButton); // should render a button with no onclick listener

    render(elem, templateButton, true); // should render an button that replaces DOM with `inlined events are enabled!` on click
})();
