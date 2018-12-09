import Ember from 'ember';
import DS from 'ember-data';

declare const store: DS.Store;

const Person = DS.Model.extend({
    children: DS.hasMany('folder', { inverse: 'parent' }),
    parent: DS.belongsTo('folder', { inverse: 'children' })
});

const Polymorphic = DS.Model.extend({
    paymentMethods: DS.hasMany('payment-method', { polymorphic: true })
});

Polymorphic.eachRelationship(() => '');
Polymorphic.eachRelationship(() => '', {});
Polymorphic.eachRelationship((n, meta) => {
    let s: string = n;
    let m: 'belongsTo' | 'hasMany' = meta.kind;
});
let p = Polymorphic.create();
p.eachRelationship(() => '');
p.eachRelationship(() => '', {});
p.eachRelationship((n, meta) => {
    let s: string = n;
    let m: 'belongsTo' | 'hasMany' = meta.kind;
});

class Comment extends DS.Model {
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

declare module 'ember-data' {
    interface ModelRegistry {
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
