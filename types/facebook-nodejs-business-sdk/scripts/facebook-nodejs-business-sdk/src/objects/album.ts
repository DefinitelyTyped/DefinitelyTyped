import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import Comment from "./comment";
import Profile from "./profile";
import Photo from "./photo";
import ProfilePictureSource from "./profile-picture-source";
/**
 * Album
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class Album extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      backdated_time: 'backdated_time',
      backdated_time_granularity: 'backdated_time_granularity',
      can_backdate: 'can_backdate',
      can_upload: 'can_upload',
      count: 'count',
      cover_photo: 'cover_photo',
      created_time: 'created_time',
      description: 'description',
      edit_link: 'edit_link',
      event: 'event',
      from: 'from',
      id: 'id',
      is_user_facing: 'is_user_facing',
      link: 'link',
      location: 'location',
      modified_major: 'modified_major',
      name: 'name',
      photo_count: 'photo_count',
      place: 'place',
      privacy: 'privacy',
      type: 'type',
      updated_time: 'updated_time',
      video_count: 'video_count'
    });
  }

  getComments(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Comment, fields, params, fetchFirstPage, '/comments');
  }

  createComment(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<Comment> {
    return this.createEdge('/comments', fields, params, Comment, pathOverride);
  }

  getLikes(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Profile, fields, params, fetchFirstPage, '/likes');
  }

  createLike(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<Album> {
    return this.createEdge('/likes', fields, params, Album, pathOverride);
  }

  getPhotos(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Photo, fields, params, fetchFirstPage, '/photos');
  }

  createPhoto(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<Photo> {
    return this.createEdge('/photos', fields, params, Photo, pathOverride);
  }

  getPicture(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(ProfilePictureSource, fields, params, fetchFirstPage, '/picture');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): Album {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}