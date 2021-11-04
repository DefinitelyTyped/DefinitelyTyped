import Ember from 'ember';
import DS from 'ember-data';
import { assertType } from './lib/assert';

class BlogComment extends DS.Model {
    text = DS.attr('string');
}

declare module 'ember-data/types/registries/model' {
    export default interface ModelRegistry {
        'blog-comment': BlogComment;
    }
}

class BlogPost extends DS.Model {
    title = DS.attr('string');
    commentsAsync = DS.hasMany('blog-comment');
    commentsSync = DS.hasMany('blog-comment', { async: false });
}

const blogPost = BlogPost.create();

assertType<DS.PromiseArray<BlogComment>>(blogPost.get('commentsSync').reload());
assertType<BlogComment>(blogPost.get('commentsSync').createRecord());

const comment = blogPost.get('commentsSync').get('firstObject');
assertType<BlogComment | undefined>(comment);
if (comment) {
    assertType<string>(comment.get('text'));
}

assertType<DS.PromiseArray<BlogComment>>(blogPost.get('commentsAsync').reload());
assertType<BlogComment>(blogPost.get('commentsAsync').createRecord());
assertType<BlogComment | undefined>(blogPost.get('commentsAsync').get('firstObject'));

const commentAsync = blogPost.get('commentsAsync').get('firstObject');
assertType<BlogComment | undefined>(commentAsync);
if (commentAsync) {
    assertType<string>(commentAsync.get('text'));
}
assertType<boolean>(blogPost.get('commentsAsync').get('isFulfilled'));

blogPost.get('commentsAsync').then(comments => {
    assertType<BlogComment | undefined>(comments.get('firstObject'));
    assertType<string>(comments.get('firstObject')!.get('text'));
});

blogPost.set('commentsAsync', blogPost.get('commentsAsync'));
blogPost.set('commentsAsync', Ember.A());
blogPost.set('commentsAsync', Ember.A([comment!]));

class PaymentMethod extends DS.Model {}
declare module 'ember-data/types/registries/model' {
    export default interface ModelRegistry {
        'payment-method': PaymentMethod;
    }
}

class Polymorphic extends DS.Model {
    paymentMethods = DS.hasMany('payment-method', { polymorphic: true });
}

// $ExpectType ManyArray<any> | null
blogPost.hasMany('commentsAsync').value();
