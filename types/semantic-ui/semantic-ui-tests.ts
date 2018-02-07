function test_static() {
    $.site.settings.debug = true;
    $.fn.site.settings.debug = true;

    $.fn.accordion.settings.debug = true;
    $.fn.checkbox.settings.debug = true;
    $.fn.dimmer.settings.debug = true;
    $.fn.dropdown.settings.debug = true;
    $.fn.embed.settings.debug = true;
    $.fn.modal.settings.debug = true;
    $.fn.nag.settings.debug = true;
    $.fn.popup.settings.debug = true;
    $.fn.progress.settings.debug = true;
    $.fn.rating.settings.debug = true;
    $.fn.search.settings.debug = true;
    $.fn.shape.settings.debug = true;
    $.fn.sidebar.settings.debug = true;
    $.fn.sticky.settings.debug = true;
    $.fn.tab.settings.debug = true;
    $.fn.transition.settings.debug = true;

    $.api.settings.debug = true;
    $.fn.api.settings.debug = true;
    $.fn.form.settings.debug = true;
    $.fn.visibility.settings.debug = true;
}

function test() {
    $('.ui.site').site() === $();

    $('.ui.accordion').accordion() === $();
    $('.ui.checkbox').checkbox() === $();
    $('.ui.dimmer').dimmer() === $();
    $('.ui.dropdown').dropdown() === $();
    $('.ui.embed').embed() === $();
    $('.ui.modal').modal() === $();
    $('.ui.nag').nag() === $();
    $('.ui.popup').popup() === $();
    $('.ui.progress').progress() === $();
    $('.ui.rating').rating() === $();
    $('.ui.search').search() === $();
    $('.ui.shape').shape() === $();
    $('.ui.sidebar').sidebar() === $();
    $('.ui.sticky').sticky() === $();
    $('.ui.tab').tab() === $();
    $('.ui.transition').transition() === $();

    $('.ui.api').api() === $();
    $('.ui.form').form() === $();
    $('.ui.visibility').visibility() === $();
}
