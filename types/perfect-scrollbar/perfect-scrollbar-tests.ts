/**
 * https://github.com/noraesae/perfect-scrollbar#how-to-use
 */

import * as Ps from 'perfect-scrollbar'
const container = document.body;

// initialize scrollbar.
let scrollbar = new PerfectScrollbar(container);

// destroys the scrollbar
scrollbar.destroy();

// initializes scrollbar with params.
scrollbar = new PerfectScrollbar(container, {
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20,
})

// If the size of your container or content changes, call `update`.
scrollbar.update()

// If you want to scroll to somewhere, just use a `scrollTop` property and update.
container.scrollTop = 0;
scrollbar.update();

// check autocomplete for events
(container as HTMLPerfectScrollbarElement).addEventListener('ps-scroll-down', (ev) => { });
