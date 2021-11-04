import { dispatch, select } from '@wordpress/data';
import * as ep from '@wordpress/edit-post';

// $ExpectType void
ep.initializeEditor('abc', 'post', '123');

// $ExpectType void
ep.initializeEditor('abc', 'post', 123, {});

// $ExpectType void
ep.initializeEditor('abc', 'post', '123', { alignWide: true, disableCustomColors: true }, { foo: 'bar' });

// $ExpectType void
ep.reinitializeEditor('post', '123', document.createElement('div'));

// $ExpectType void
ep.reinitializeEditor('post', 123, document.createElement('div'), {});

// $ExpectType void
ep.reinitializeEditor('post', 123, document.createElement('div'), { codeEditingEnabled: true });

//
// PluginBlockSettingsMenuItem
//
<ep.PluginBlockSettingsMenuItem
    allowedBlocks={['core/paragraph']}
    icon="carrot"
    label="Menu item text"
    onClick={() => console.log('clicked')}
/>;

<ep.PluginBlockSettingsMenuItem label="Menu item text" onClick={() => console.log('clicked')} />;

//
// PluginDocumentSettingPanel
//
<ep.PluginDocumentSettingPanel className="my-document-setting-plugin" title="My Panel">
    <p>My Document Setting Panel</p>
</ep.PluginDocumentSettingPanel>;

<ep.PluginDocumentSettingPanel>
    <p>My Document Setting Panel</p>
</ep.PluginDocumentSettingPanel>;

//
// PluginMoreMenuItem
//
<ep.PluginMoreMenuItem icon="smiley" onClick={() => console.log('clicked!')}>
    My button title
</ep.PluginMoreMenuItem>;

<ep.PluginMoreMenuItem href="https://foo.bar">My anchor title</ep.PluginMoreMenuItem>;

//
// PluginPostPublishPanel
//
<ep.PluginPostPublishPanel className="my-plugin-post-publish-panel" title="My panel title" initialOpen={true}>
    My panel content
</ep.PluginPostPublishPanel>;
<ep.PluginPostPublishPanel>My panel content</ep.PluginPostPublishPanel>;

//
// PluginPostStatusInfo
//
<ep.PluginPostStatusInfo className="my-plugin-post-status-info">My post status info</ep.PluginPostStatusInfo>;
<ep.PluginPostStatusInfo>My post status info</ep.PluginPostStatusInfo>;

//
// PluginPrePublishPanel
//
<ep.PluginPrePublishPanel className="my-plugin-pre-publish-panel" title="My panel title" initialOpen={true}>
    My panel content
</ep.PluginPrePublishPanel>;
<ep.PluginPrePublishPanel>My panel content</ep.PluginPrePublishPanel>;

//
// PluginSidebar
//
<ep.PluginSidebar name="my-sidebar" isPinnable={false} title="My sidebar title" icon={<i>foo</i>}>
    My sidebar content
</ep.PluginSidebar>;
<ep.PluginSidebar name="my-sidebar" title="My sidebar title">
    My sidebar content
</ep.PluginSidebar>;

//
// PluginSidebarMoreMenuItem
//
<ep.PluginSidebarMoreMenuItem target="my-sidebar" icon="smiley">
    My sidebar title
</ep.PluginSidebarMoreMenuItem>;
<ep.PluginSidebarMoreMenuItem target="my-sidebar">My sidebar title</ep.PluginSidebarMoreMenuItem>;

//
// store
//

// $ExpectType void
dispatch('core/edit-post').hideBlockTypes('foo');

// $ExpectType void
dispatch('core/edit-post').hideBlockTypes(['foo', 'bar']);

// $ExpectType void
dispatch('core/edit-post').switchEditorMode('visual');

// $ExpectType void
dispatch('core/edit-post').toggleFeature('foo');

// $ExpectType string | null
select('core/edit-post').getActiveGeneralSidebarName();

// $ExpectType MetaboxLocation[]
select('core/edit-post').getActiveMetaBoxLocations();

// $ExpectType unknown
select('core/edit-post').getPreference('foo');

// $ExpectType string | undefined
select('core/edit-post').getPreference<string>('foo');

// $ExpectType number
select('core/edit-post').getPreference('foo', 123);

// $ExpectType boolean
select('core/edit-post').isMetaBoxLocationActive('advanced');

// $ExpectType MetaboxDescriptor[]
select('core/edit-post').getAllMetaBoxes();
