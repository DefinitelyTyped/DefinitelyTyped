import DS from 'ember-data';
import TransformRegistry from 'ember-data/types/registries/transform';
import { assertType } from './lib/assert';

declare const store: DS.Store;

const Person = DS.Model.extend({
    children: DS.hasMany('folder', { inverse: 'parent' }),
    parent: DS.belongsTo('folder', { inverse: 'children' }),
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
    paymentMethods: DS.hasMany('payment-method', { polymorphic: true }),
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
Polymorphic.eachRelatedType(name => {
    let s: string = name;
});

export class Comment extends DS.Model {
    author = DS.attr('string');
}

class Series extends DS.Model {
    title = DS.attr('string');
}

class Post extends DS.Model {
    title = DS.attr('string');
    comments = DS.hasMany('comment');
}

class RelationalPost extends DS.Model {
    title = DS.attr('string');
    tag = DS.attr('string');
    comments = DS.hasMany('comment', { async: true });
    relatedPosts = DS.hasMany('post');
    series = DS.belongsTo('series', { async: true});
    seriesSync = DS.belongsTo('series', { async: false});
}

declare module 'ember-data/types/registries/model' {
    export default interface ModelRegistry {
        'relational-post': RelationalPost;
        comment: Comment;
        series: Series;
        post: Post;
    }
}

let blogPost = store.peekRecord('relational-post', 1)!;
blogPost.get('comments').then((comments) => {
    // now we can work with the comments
    let author: string = comments.get('firstObject')!.get('author');
});

function testBelongsToInvalidKeys() {
    blogPost.belongsTo('non-existing'); // $ExpectError

    // Neither of DS.Model properties can be a relationship
    blogPost.belongsTo('isNew'); // $ExpectType BelongsToReference<Model>

    // accessing an own property which is known as not a relationship beforehand
    blogPost.belongsTo('title'); // $ExpectType BelongsToReference<Model>
}

function testHasManyInvalidKeys() {
    blogPost.hasMany('non-existing'); // $ExpectError

    // Neither of DS.Model properties can be a relationship
    blogPost.hasMany('isNew'); // $ExpectType HasManyReference<Model>

    // accessing an own property which is known as not a relationship beforehand
    blogPost.hasMany('title'); // $ExpectType HasManyReference<Model>
}

// make sure DS.BelongsToReference works w/o an explicit generic argument
let doesNotRequireGenericArgument: DS.BelongsToReference = blogPost.belongsTo('series');

blogPost.hasMany('relatedPosts') as DS.HasManyReference; // $ExpectError

assertType<DS.ManyArray<DS.Model> | null>(
    blogPost.hasMany('relatedPosts').value()
);
assertType<DS.BelongsToReference<DS.Model> | null>(
    blogPost.belongsTo('series')
);

assertType<DS.BelongsToReference<DS.Model> | null>(
    blogPost.belongsTo('seriesSync')
);
