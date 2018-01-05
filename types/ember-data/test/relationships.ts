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

class Comment extends DS.Model {
    author = DS.attr('string');
}

class BlogPost extends DS.Model {
    title = DS.attr('string');
    tag = DS.attr('string');
    comments = DS.hasMany<Comment>('comment', { async: true });
    relatedPosts = DS.hasMany('post');
}

let blogPost = store.peekRecord<BlogPost>('blog-post', 1);
blogPost!.get('comments').then((comments) => {
    // now we can work with the comments
    let author: string = comments.get('firstObject')!.get('author');
});
