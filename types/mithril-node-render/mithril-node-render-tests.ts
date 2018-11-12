import * as m from 'mithril';
import render, { escapeHtml } from 'mithril-node-render';

// Simple test
render(
	m('div', m('h1', 'Hello World')),
	{ escapeAttributeValue: escapeHtml }
).then(html => {
	return html;
});
