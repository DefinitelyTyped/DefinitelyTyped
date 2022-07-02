import { svelteSVG } from 'rollup-plugin-svelte-svg';
import Icon from './icon.svg';

svelteSVG(); // $ExpectType Plugin
svelteSVG({ svgo: {} }); // $ExpectType Plugin
svelteSVG({ svgo: {}, enforce: 'post' }); // $ExpectType Plugin
svelteSVG({ enforce: 'pre' }); // $ExpectType Plugin
Icon; // $ExpectType typeof SvelteComponentDev
new Icon({ target: document.body }); // $ExpectType SvelteComponentDev
