import { Schema } from '@wordpress/api-fetch';
import { dispatch, select } from '@wordpress/data';

declare const USER_VIEW: Schema.User;

//
// actions
//

// $ExpectType void
dispatch('core').addEntities([{ kind: 'postType', baseURL: '/wp/v2/pages', name: 'page' }]);

// $ExpectType void
dispatch('core').receiveAutosaves(123, []);

// $ExpectType void
dispatch('core').receiveCurrentUser(USER_VIEW);

// $ExpectType void
dispatch('core').receiveEmbedPreview('https://foo.bar', { foo: 'bar' });

// $ExpectType void
dispatch('core').receiveEntityRecords('postType', 'page', []);

// $ExpectType void
dispatch('core').receiveThemeSupports({ formats: [], 'responsive-embeds': true, 'post-thumbnails': true });

// $ExpectType void
dispatch('core').receiveUploadPermissions(true);

// $ExpectType void
dispatch('core').receiveUserPermission('media', true);

// $ExpectType void
dispatch('core').receiveUserQuery('foo', [USER_VIEW, USER_VIEW]);

// $ExpectType void
dispatch('core').receiveUserQuery('foo', USER_VIEW);

// $ExpectType IterableIterator<void>
dispatch('core').saveEntityRecord('foo', 'bar', { foo: 'bar' });

//
// selectors
//

// $ExpectType boolean | undefined
select('core').canUser('create', 'media', 1);

// $ExpectType Autosave | undefined
select('core').getAutosave('post', 1, 1);

// $ExpectType Autosave[] | undefined
select('core').getAutosaves('post', 1);

// $ExpectType Record<string, any> | undefined
select('core').getEmbedPreview('https://foo.bar');

// $ExpectType Entity[]
select('core').getEntitiesByKind('postType');

// $ExpectType Entity | undefined
select('core').getEntity('foo', 'bar');

// $ExpectType Record<string, any> | undefined
select('core').getEntityRecord('postType', 'page', 1);

// $ExpectType Record<string, any>[]
select('core').getEntityRecords('foo', 'bar');

// $ExpectType Record<string, any>[]
select('core').getEntityRecords('foo', 'bar', { foo: 'foo', bar: { baz: 'baz' } });

// $ExpectType boolean
select('core').hasFetchedAutosaves('post', 1);

// $ExpectType boolean
select('core').hasUploadPermissions();

// $ExpectType boolean
select('core').isPreviewEmbedFallback('https://foo.bar');

// $ExpectType boolean
select('core').isRequestingEmbedPreview('https://foo.bar');
