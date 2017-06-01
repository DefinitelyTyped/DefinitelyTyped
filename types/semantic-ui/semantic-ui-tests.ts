function test_site() {
    const selector = '.ui.site';
    $(selector).site('destroy') === $();
    $(selector).site('setting', 'debug', undefined) === false;
    $(selector).site('setting', 'debug') === false;
    $(selector).site('setting', 'debug', true) === $();
    $(selector).site('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
    $(selector).site({
        modules: [
            'accordion',
            'api',
            'checkbox',
            'dimmer',
            'dropdown',
            'embed',
            'form',
            'modal',
            'nag',
            'popup',
            'rating',
            'shape',
            'sidebar',
            'state',
            'sticky',
            'tab',
            'transition',
            'visit',
            'visibility'
        ],
        siteNamespace: 'site',
        namespaceStub: {
            cache: {},
            config: {},
            sections: {},
            section: {},
            utilities: {}
        }
    }) === $();
    $(selector).site() === $();
}

function test_accordion() {
    const selector = '.ui.accordion';
    $(selector).accordion('refresh');
    $(selector).accordion('open', 0);
    $(selector).accordion('close others');
    $(selector).accordion('close', 0);
    $(selector).accordion('toggle', 0);
    $(selector).accordion('destroy');
    $(selector).accordion('setting', 'exclusive', undefined) === true;
    $(selector).accordion('setting', 'exclusive', true) === $();
    $(selector).accordion('setting', 'exclusive') === true;
    $(selector).accordion({
        selector: {
            trigger: '.title .icon'
        }
    });
    $(selector).accordion();
}

function test_checkbox() {
    const selector = '.ui.checkbox';
    $(selector).checkbox({});
    $(selector).checkbox();
}

function test_dimmer_settings() {
    $.fn.dimmer.settings.namespace = 'namespace';
    $.fn.dimmer.settings.name = 'name';
    $.fn.dimmer.settings.silent = false;
    $.fn.dimmer.settings.debug = true;
    $.fn.dimmer.settings.performance = true;
    $.fn.dimmer.settings.verbose = true;
}

function test_dimmer() {
    const selector = '.ui.dimmer';
    $(selector).dimmer('add content', $()) === $();
    $(selector).dimmer('show') === $();
    $(selector).dimmer('hide') === $();
    $(selector).dimmer('toggle') === $();
    $(selector).dimmer('set opacity', 1) === $();
    $(selector).dimmer('create') === $();
    $(selector).dimmer('get duration') === 10;
    $(selector).dimmer('get dimmer') === $();
    $(selector).dimmer('has dimmer') === true;
    $(selector).dimmer('is active') === true;
    $(selector).dimmer('is animating') === true;
    $(selector).dimmer('is dimmer') === true;
    $(selector).dimmer('is dimmable') === true;
    $(selector).dimmer('is disabled') === true;
    $(selector).dimmer('is enabled') === true;
    $(selector).dimmer('is page') === true;
    $(selector).dimmer('is page dimmer') === true;
    $(selector).dimmer('set active') === $();
    $(selector).dimmer('set dimmable') === $();
    $(selector).dimmer('set dimmed') === $();
    $(selector).dimmer('set page dimmer') === $();
    $(selector).dimmer('set disabled') === $();
    $(selector).dimmer('destroy') === $();
    $(selector).dimmer('setting', 'debug', undefined) === false;
    $(selector).dimmer('setting', 'debug') === false;
    $(selector).dimmer('setting', 'debug', true) === $();
    $(selector).dimmer('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
    $(selector).dimmer({
        opacity: 1,
        variation: 'variation',
        dimmerName: 'dimmerName',
        closable: true,
        on: 'click',
        useCSS: true,
        duration: {
            show: 200,
            hide: 300
        },
        transition: 'fade',
        onShow() {
            this === $();
        },
        onHide() {
            this === $();
        },
        onChange() {
            this === $();
        },
        selector: {
            dimmable: '.dimmable',
            dimmer: '.dimmer',
            content: '.content'
        },
        template: {
            dimmer() {
                return $();
            }
        },
        className: {
            active: 'active',
            dimmable: 'dimmable',
            dimmed: 'dimmed',
            disabled: 'disabled',
            pageDimmer: 'pageDimmer',
            hide: 'hide',
            show: 'show',
            transition: 'transition'
        },
        error: {
            method: 'method'
        }
    }) === $();
    $(selector).dimmer() === $();
}

function test_dropdown() {
    const selector = '.ui.dropdown';
    $(selector).dropdown({});
    $(selector).dropdown();
}

function test_embed() {
    const selector = '.ui.embed';
    $(selector).embed({});
    $(selector).embed();
}

function test_modal() {
    const selector = '.ui.modal';
    $(selector).modal({});
    $(selector).modal();
}

function test_nag() {
    const selector = '.ui.nag';
    $(selector).nag({});
}

function test_popup() {
    const selector = '.ui.popup';
    $(selector).popup({
        html: '<div>Content</div>'
    });
    $(selector).popup({
        html: $('<div>Content</div>')
    });
    $(selector).popup();
}

function test_progress() {
    const selector = '.ui.progress';
    $(selector).progress({});
    $(selector).progress();
}

function test_rating() {
    const selector = '.ui.rating';
    $(selector).rating({});
    $(selector).rating();
}

function test_search() {
    const selector = '.ui.search';
    $(selector).search({});
    $(selector).search();
}

function test_shape() {
    const selector = '.ui.shape';
    $(selector).shape({});
    $(selector).shape();
}

function test_sidebar() {
    const selector = '.ui.sidebar';
    $(selector).sidebar({});
    $(selector).sidebar();
}

function test_sticky() {
    const selector = '.ui.sticky';
    $(selector).sticky({});
    $(selector).sticky();
}

function test_tab() {
    const selector = '.ui.tab';
    $(selector).tab({});
    $(selector).tab();
}

function test_transition_settings() {
    $.fn.transition.settings.namespace = 'namespace';
    $.fn.transition.settings.name = 'name';
    $.fn.transition.settings.silent = false;
    $.fn.transition.settings.debug = true;
    $.fn.transition.settings.performance = true;
    $.fn.transition.settings.verbose = true;
}

function test_transition() {
    const selector = '.ui.transition';
    $(selector).transition('stop') === $();
    $(selector).transition('stop all') === $();
    $(selector).transition('clear queue') === $();
    $(selector).transition('show') === $();
    $(selector).transition('hide') === $();
    $(selector).transition('toggle') === $();
    $(selector).transition('force repaint') === $();
    $(selector).transition('repaint') === $();
    $(selector).transition('reset') === $();
    $(selector).transition('looping') === $();
    $(selector).transition('remove looping') === $();
    $(selector).transition('disable') === $();
    $(selector).transition('enable') === $();
    $(selector).transition('set duration', 10) === $();
    $(selector).transition('save conditions') === $();
    $(selector).transition('restore conditions') === $();
    $(selector).transition('get animation name') === 'animation name';
    $(selector).transition('get animation event') === 'animation event';
    $(selector).transition('is visible') === false;
    $(selector).transition('is animating') === false;
    $(selector).transition('is looping') === false;
    $(selector).transition('is supported') === false;
    $(selector).transition('destroy') === $();
    $(selector).transition('setting', 'debug', undefined) === false;
    $(selector).transition('setting', 'debug') === false;
    $(selector).transition('setting', 'debug', true) === $();
    $(selector).transition('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
    $(selector).transition('fade') === $();
    $(selector).transition({
        animation: 'fade',
        interval: 200,
        reverse: true,
        displayType: 'inline-block',
        duration: 300,
        useFailSafe: false,
        allowRepeats: true,
        queue: false,
        onShow() {
            this === $();
        },
        onHide() {
            this === $();
        },
        onStart() {
            this === $();
        },
        onComplete() {
            this === $();
        },
        className: {
            animating: 'animating',
            disabled: 'disabled',
            hidden: 'hidden',
            inward: 'inward',
            loading: 'loading',
            looping: 'looping',
            outward: 'outward',
            transition: 'transition',
            visible: 'visible'
        },
        error: {
            noAnimation: 'noAnimation',
            method: 'method'
        }
    });
    $(selector).transition() === $();
}

function test_api() {
    const selector = '.ui.api';
    $(selector).api({});
    $(selector).api();
}

function test_form() {
    const selector = '.ui.form';
    $(selector).form({});
    $(selector).form();
}

function test_form_specifyingValidationRules() {
    $('.ui.form').form({
        fields: {
            name: 'empty',
            gender: 'empty',
            username: 'empty',
            password: ['minLength[6]', 'empty'],
            skills: ['minCount[2]', 'empty'],
            terms: 'checked'
        }
    });

    $('.ui.form').form({
        fields: {
            name: {
                identifier: 'name',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter your name'
                }]
            },
            skills: {
                identifier: 'skills',
                rules: [{
                    type: 'minCount[2]',
                    prompt: 'Please select at least two skills'
                }]
            },
            gender: {
                identifier: 'gender',
                rules: [{
                    type: 'empty',
                    prompt: 'Please select a gender'
                }]
            },
            username: {
                identifier: 'username',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter a username'
                }]
            },
            password: {
                identifier: 'password',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter a password'
                }, {
                    type: 'minLength[6]',
                    prompt: 'Your password must be at least {ruleValue} characters'
                }]
            },
            terms: {
                identifier: 'terms',
                rules: [{
                    type: 'checked',
                    prompt: 'You must agree to the terms and conditions'
                }]
            }
        }
    });
}

function test_form_addCustomRule() {
    const user = { adminLevel: 1 };
    $.fn.form.settings.rules!.adminLevel = (value: any, adminLevel: number) => {
        return (user.adminLevel >= adminLevel);
    };
    $('.ui.form').form({
        fields: {
            dog: {
                identifier: 'dog',
                rules: [{
                    type: 'adminLevel[2]',
                    prompt: 'You must be at least a level-2 admin to add a dog'
                }]
            }
        }
    });
}

function test_visibility() {
    const selector = '.ui.visibility';
    $(selector).visibility({});
    $(selector).visibility();
}

function test_settings() {
    $.site.settings.verbose = true;

    $.api.settings.verbose = true;

    $.fn.site.settings.verbose = true;

    $.fn.accordion.settings.verbose = true;
    $.fn.checkbox.settings.verbose = true;
    $.fn.dropdown.settings.verbose = true;
    $.fn.embed.settings.verbose = true;
    $.fn.modal.settings.verbose = true;
    $.fn.nag.settings.verbose = true;
    $.fn.popup.settings.verbose = true;
    $.fn.progress.settings.verbose = true;
    $.fn.rating.settings.verbose = true;
    $.fn.search.settings.verbose = true;
    $.fn.shape.settings.verbose = true;
    $.fn.sidebar.settings.verbose = true;
    $.fn.sticky.settings.verbose = true;
    $.fn.tab.settings.verbose = true;

    $.fn.api.settings.verbose = true;
    $.fn.form.settings.verbose = true;
    $.fn.visibility.settings.verbose = true;
}
