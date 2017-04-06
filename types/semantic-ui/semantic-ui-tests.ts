function test_accordion() {
    const selector = '.ui.accordion';
    $(selector).accordion('refresh');
    $(selector).accordion('open', 0);
    $(selector).accordion('close others');
    $(selector).accordion('close', 0);
    $(selector).accordion('toggle', 0);
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

function test_dimmer() {
    const selector = '.ui.dimmer';
    $(selector).dimmer({});
    $(selector).dimmer();
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

function test_transition() {
    const selector = '.ui.transition';
    $(selector).transition({});
    $(selector).transition();
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
    $.fn.form.settings.rules.adminLevel = (value: any, adminLevel: number) => {
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
    $.fn.accordion.settings.verbose = true;
    $.fn.checkbox.settings.verbose = true;
    $.fn.dimmer.settings.verbose = true;
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
    $.fn.transition.settings.verbose = true;

    $.fn.api.settings.verbose = true;
    $.fn.form.settings.verbose = true;
    $.fn.visibility.settings.verbose = true;
}
test_settings();
