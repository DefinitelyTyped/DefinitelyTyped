import * as _ from 'underscore';

// Code snippets from https://developer.wordpress.org/themes/customize-api/the-customizer-javascript-api/

wp.customize('page_for_posts', setting => {
    setting.bind(pageId => {
        pageId = parseInt(pageId, 10);
        if (pageId > 0) {
            // tslint:disable-next-line:prefer-template
            wp.customize.previewer.previewUrl.set(wp.customize.settings.url.home + '?page_id=' + pageId);
        }
    });
});

wp.customize.panel.each(panel => {
    /* ... */
});
wp.customize.section.each(section => {
    /* ... */
});
wp.customize.control.each(control => {
    /* ... */
});

let id = wp.customize.control('blogname').section(); // returns title_tagline by default

wp.customize.control('blogname').section('nav');

id = wp.customize.section('sidebar-widgets-sidebar-1').panel(); // returns widgets by default

const sections = wp.customize.panel('widgets').sections();
const controls = wp.customize.section('title_tagline').controls();

_.each(wp.customize.section('title_tagline').controls(), control => {
    control.section('nav');
});

wp.customize.section('nav').deactivate(); // slide up
wp.customize.section('nav').activate({ duration: 1000 }); // slide down slowly
wp.customize.section('colors').deactivate({ duration: 0 }); // hide immediately
wp.customize.section('nav').deactivate({
    completeCallback: () => {
        wp.customize.section('colors').activate(); // show after nav hides completely
    },
});

wp.customize.control('page_on_front').focus();

const priority = wp.customize.panel('widgets').priority(); // returns 110 by default

wp.customize.panel('widgets').priority(1); // move Widgets to the top

// Using types directly
function fun(section: wordpress__customize.Section): void {
    section.deactivate({
        completeCallback: () => {
            wp.customize.section('colors').activate(); // show after nav hides completely
        },
    });
}

wp.customize.section('nav', fun);
