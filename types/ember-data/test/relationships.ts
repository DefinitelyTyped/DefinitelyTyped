import Ember from 'ember';
import DS from 'ember-data';
import TransformRegistry from 'ember-data/types/registries/transform';
import { assertType } from './lib/assert';

declare const store: DS.Store;

const Person = DS.Model.extend({
    children: DS.hasMany('folder', { inverse: 'parent' }),
    parent: DS.belongsTo('folder', { inverse: 'children' })
});

// $ExpectType void
Person.eachAttribute(() => {});
// $ExpectType void
Person.eachAttribute(() => {}, {});
// $ExpectType void
Person.eachAttribute((name, meta) => {
    assertType<'children' | 'parent'>(name);
    assertType<{
        type: keyof TransformRegistry;
        options: object;
        name: 'children' | 'parent';
        parentType: DS.Model;
        isAttribute: true;
    }>(meta);
});

// $ExpectType void
Person.eachTransformedAttribute(() => {});
// $ExpectType void
Person.eachTransformedAttribute(() => {}, {});
// $ExpectType void
Person.eachTransformedAttribute((name, type) => {
    assertType<'children' | 'parent'>(name);
    let t: keyof TransformRegistry = type;
});

const Polymorphic = DS.Model.extend({
    paymentMethods: DS.hasMany('payment-method', { polymorphic: true })
});

// $ExpectType void
Polymorphic.eachRelationship(() => '');
// $ExpectType void
Polymorphic.eachRelationship(() => '', {});
// $ExpectType void
Polymorphic.eachRelationship((n, meta) => {
    let s: string = n;
    let m: 'belongsTo' | 'hasMany' = meta.kind;
});
let p = Polymorphic.create();
// $ExpectType void
p.eachRelationship(() => '');
// $ExpectType void
p.eachRelationship(() => '', {});
// $ExpectType void
p.eachRelationship((n, meta) => {
    let s: string = n;
    let m: 'belongsTo' | 'hasMany' = meta.kind;
});

// $ExpectType void
Polymorphic.eachRelatedType(() => '');
// $ExpectType void
Polymorphic.eachRelatedType(() => '', {});
// $ExpectType void
Polymorphic.eachRelatedType((name) => {
    let s: string = name;
});

export class Comment extends DS.Model {
    author = DS.attr('string');
}

class Series extends DS.Model {
    title = DS.attr('string');
}

class RelationalPost extends DS.Model {
    title = DS.attr('string');
    tag = DS.attr('string');
    comments = DS.hasMany('comment', { async: true });
    relatedPosts = DS.hasMany('post');
    series = DS.belongsTo('series');
}

declare module 'ember-data/types/registries/model' {
    export default interface ModelRegistry {
        'relational-post': RelationalPost;
        comment: Comment;
        series: Series;
    }
}

let blogPost = store.peekRecord('relational-post', 1);
blogPost!.get('comments').then((comments) => {
    // now we can work with the comments
    let author: string = comments.get('firstObject')!.get('author');
});

blogPost!.hasMany('relatedPosts');
blogPost!.belongsTo('series');
