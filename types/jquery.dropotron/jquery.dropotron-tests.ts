/// <reference types="jquery" />


/**
 * @summary Test for "dropotron" without configurations.
 */
function testDropotron() {
    var foo: JQuery = $('#main-nav > ul');
    foo.dropotron();
}

/**
 * @summary Test for "dropotron" with configurations.
 */
function testDropotronConfiguration() {
    var config: DropotronConfiguration = {
        selectorParent:     null,
        baseZIndex:         1000,
        menuClass:          'dropotron',
        expandMode:         'hover',
        hoverDelay:         150,
        hideDelay:          250,
        openerClass:        'opener',
        openerActiveClass:  'active',
        submenuClassPrefix: 'level-',
        mode:               'fade',
        speed:              'fast',
        easing:             'swing',
        alignment:          'left',
        offsetX:            0,
        offsetY:            0,
        globalOffsetY:      0,
        IEOffsetX:          0,
        IEOffsetY:          0,
        noOpenerFade:       true,
        detach:             true,
        cloneOnDetach:      true
    };
    
    var foo: JQuery = $('#main-nav > ul');
    foo.dropotron(config);
}