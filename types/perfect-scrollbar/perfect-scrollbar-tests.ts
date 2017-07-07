/**
 * https://github.com/noraesae/perfect-scrollbar#how-to-use
 */

import * as Ps from 'perfect-scrollbar'
const container = document.body

// To initialise the plugin, `Ps.initialize` is used.
Ps.initialize(container)

// It can be initialised with optional parameters.
Ps.initialize(container, {
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
})

// If the size of your container or content changes, call `update`.
Ps.update(container)

// If you want to destroy the scrollbar, use `destroy`.
Ps.destroy(container)

// If you want to scroll to somewhere, just use a `scrollTop` property and update.
container.scrollTop = 0
Ps.update(container)

/**
 * https://github.com/noraesae/perfect-scrollbar#jquery
 */

import mountJQuery = require('perfect-scrollbar/jquery')
mountJQuery($)

$('#container').perfectScrollbar()            // Initialize
$('#container').perfectScrollbar({ /*...*/ }) // with options
$('#container').perfectScrollbar('update')    // Update
$('#container').perfectScrollbar('destroy')   // Destroy
