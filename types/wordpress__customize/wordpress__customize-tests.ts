declare const wp: {
	customize: typeof import('wordpress__customize');
};

// TODO: Uncomment
/*
wp.customize('page_for_posts', (setting) => {
    setting.bind((pageId) => {
        const pageId2 = parseInt(pageId, 10);
        if (pageId2 > 0) {    wp.customize.previewer.previewUrl.set(wp.customize.settings.url.home + '?page_id=' + pageId2);
        }
    });
});
*/

// wp.customize.panel.each((panel) => { /* ... */ });
// wp.customize.section.each((section) => { /* ... */ });
// wp.customize.control.each((control) => { /* ... */ });

/*
let id = wp.customize.control('blogname').section(); // returns title_tagline by default

wp.customize.control('blogname').section('nav');

id = wp.customize.section('sidebar-widgets-sidebar-1').panel(); // returns widgets by default

let sections = wp.customize.panel('widgets').sections();
let controls = wp.customize.section('title_tagline').controls();

_.each(wp.customize.section('title_tagline').controls(), (control) => {
    control.section('nav');
    }
);

wp.customize.section('nav').deactivate(); // slide up
wp.customize.section('nav').activate({ duration: 1000 }); // slide down slowly
wp.customize.section('colors').deactivate({ duration: 0 }); // hide immediately
wp.customize.section('nav').deactivate({ completeCallback:
() => {
    wp.customize.section('colors').activate(); // show after nav hides completely
    }
});

wp.customize.control('page_on_front').focus()

let priority = wp.customize.panel('widgets').priority(); // returns 110 by default

wp.customize.panel('widgets').priority(1); // move Widgets to the top
*/
