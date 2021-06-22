import * as tinymce from 'tinymce';

const settings: tinymce.Settings = {
    selector: 'textarea',
    height: 500,
    menubar: false,
    plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table contextmenu paste code',
        'autosave imagetools',
    ],
    autosave_ask_before_unload: false,
    autosave_interval: '20s',
    autosave_prefix: 'tinymce-autosave-{path}{query}-{id}-',
    autosave_restore_when_empty: false,
    autosave_retention: '30m',
    toolbar:
        'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
    content_css: '//www.tinymce.com/css/codepen.min.css',
    imagetools_cors_hosts: ['mydomain.com', 'otherdomain.com'],
    imagetools_proxy: 'proxy.php',
    table_toolbar:
        'tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol',
    table_appearance_options: false,
    table_clone_elements: 'strong em a',
    table_grid: false,
    table_tab_navigation: false,
    table_default_attributes: {
        title: 'My table',
    },
    table_default_styles: {
        fontWeight: 'bold',
    },
    table_sizing_mode: 'auto',
    table_class_list: [
        { title: 'None', value: '' },
        { title: 'Dog', value: 'dog' },
        { title: 'Cat', value: 'cat' },
    ],
    table_cell_class_list: [
        { title: 'None', value: '' },
        { title: 'Dog', value: 'dog' },
        { title: 'Cat', value: 'cat' },
    ],
    table_row_class_list: [
        { title: 'None', value: '' },
        { title: 'Dog', value: 'dog' },
        { title: 'Cat', value: 'cat' },
    ],
    table_advtab: false,
    table_cell_advtab: false,
    table_row_advtab: false,
    table_resize_bars: false,
    table_style_by_css: false,
    spellchecker_rpc_url: 'https://mydomain.com',
    spellchecker_language: 'en',
    spellchecker_languages: 'US English=en,UK English=en_gb',
    spellchecker_dialog: true,
    spellchecker_whitelist: ['itemOne', 'itemTwo'],
    spellchecker_on_load: true,
    spellchecker_active: true,
};

tinymce.init(settings);

const t = new tinymce.util.Color('#FFFFFF');
