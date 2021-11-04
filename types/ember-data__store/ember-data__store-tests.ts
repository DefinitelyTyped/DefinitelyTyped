import DS from 'ember-data';
import ModelRegistry from 'ember-data/types/registries/model';
import Store, { normalizeModelName } from '@ember-data/store';
import Model, { attr, hasMany, belongsTo } from '@ember-data/model';
import EmberArray from '@ember/array';

// -- support types
declare class Post extends Model {
    @attr('string')
    title: string;

    @hasMany('post-comment')
    comments: EmberArray<PostComment>;
}

declare class PostComment extends Model {
    @belongsTo('post')
    post: Post;
}

declare module 'ember-data/types/registries/model' {
    export default interface ModelRegistry {
        post: Post;
        'post-comment': PostComment;
    }
}

// -- actual tests
Store; // $ExpectType<DS.Store>
normalizeModelName('post'); // $ExpectType<string>
normalizeModelName('post-comment'); // $ExpectType<string>
