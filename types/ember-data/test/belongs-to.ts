import DS from 'ember-data';
import { assertType } from './lib/assert';

class Folder extends DS.Model {
    name = DS.attr('string');
    children = DS.hasMany<Folder>('folder', { inverse: 'parent' });
    parent = DS.belongsTo<Folder>('folder', { inverse: 'children' });
}

const folder = Folder.create();
assertType<Folder>(folder.get('parent'));
assertType<string>(folder.get('parent').get('name'));
folder.get('parent').then(parent => {
    assertType<Folder>(parent);
    assertType<string>(parent.get('name'));
});
