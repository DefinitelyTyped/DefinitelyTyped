// Adapted from https://github.com/sizzlemctwizzle/GM_config/wiki/#customizing-gm_config
GM_config.init({
    id: 'MyConfig',
    title: 'Script Settings',
    fields: {
        Name: {
            label: 'Name',
            type: 'text',
            default: 'DefinitelyTyped',
        },
    },
    css: '#MyConfig_section_0 { display: none !important; }',
});

GM_config.open();

const username = GM_config.get('Name');
GM_config.set('Name', '@types/gm_config');
