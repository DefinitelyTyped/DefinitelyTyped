import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
import Album from './album';
import Post from './post';
import LiveVideo from './live-video';
import Photo from './photo';
import AdVideo from './ad-video';
/**
 * Group
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Group extends AbstractCrudObject {
    static get Fields(): Readonly<{
        archived: "archived";
        cover: "cover";
        created_time: "created_time";
        description: "description";
        email: "email";
        icon: "icon";
        id: "id";
        install: "install";
        link: "link";
        member_count: "member_count";
        member_request_count: "member_request_count";
        name: "name";
        parent: "parent";
        permissions: "permissions";
        privacy: "privacy";
        purpose: "purpose";
        subdomain: "subdomain";
        updated_time: "updated_time";
        venue: "venue";
    }>;
    static get JoinSetting(): Readonly<{
        admin_only: "ADMIN_ONLY";
        anyone: "ANYONE";
        none: "NONE";
    }>;
    static get PostPermissions(): Readonly<{
        value_0: "0";
        value_1: "1";
        value_2: "2";
    }>;
    static get Purpose(): Readonly<{
        casual: "CASUAL";
        coworkers: "COWORKERS";
        custom: "CUSTOM";
        for_sale: "FOR_SALE";
        for_work: "FOR_WORK";
        game: "GAME";
        health_support: "HEALTH_SUPPORT";
        jobs: "JOBS";
        learning: "LEARNING";
        none: "NONE";
        parenting: "PARENTING";
        streamer: "STREAMER";
        work_announcement: "WORK_ANNOUNCEMENT";
        work_demo_group: "WORK_DEMO_GROUP";
        work_discussion: "WORK_DISCUSSION";
        work_ephemeral: "WORK_EPHEMERAL";
        work_feedback: "WORK_FEEDBACK";
        work_for_sale: "WORK_FOR_SALE";
        work_garden: "WORK_GARDEN";
        work_integrity: "WORK_INTEGRITY";
        work_learning: "WORK_LEARNING";
        work_mentorship: "WORK_MENTORSHIP";
        work_multi_company: "WORK_MULTI_COMPANY";
        work_recruiting: "WORK_RECRUITING";
        work_social: "WORK_SOCIAL";
        work_stages: "WORK_STAGES";
        work_team: "WORK_TEAM";
        work_teamwork: "WORK_TEAMWORK";
    }>;
    static get GroupType(): Readonly<{
        casual: "CASUAL";
        coworkers: "COWORKERS";
        custom: "CUSTOM";
        for_sale: "FOR_SALE";
        for_work: "FOR_WORK";
        game: "GAME";
        health_support: "HEALTH_SUPPORT";
        jobs: "JOBS";
        learning: "LEARNING";
        none: "NONE";
        parenting: "PARENTING";
        streamer: "STREAMER";
        work_announcement: "WORK_ANNOUNCEMENT";
        work_demo_group: "WORK_DEMO_GROUP";
        work_discussion: "WORK_DISCUSSION";
        work_ephemeral: "WORK_EPHEMERAL";
        work_feedback: "WORK_FEEDBACK";
        work_for_sale: "WORK_FOR_SALE";
        work_garden: "WORK_GARDEN";
        work_integrity: "WORK_INTEGRITY";
        work_learning: "WORK_LEARNING";
        work_mentorship: "WORK_MENTORSHIP";
        work_multi_company: "WORK_MULTI_COMPANY";
        work_recruiting: "WORK_RECRUITING";
        work_social: "WORK_SOCIAL";
        work_stages: "WORK_STAGES";
        work_team: "WORK_TEAM";
        work_teamwork: "WORK_TEAMWORK";
    }>;
    deleteAdmins(params?: Record<any, any>): Promise<any>;
    createAdmin(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<Group>;
    getAlbums(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAlbum(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<Album>;
    getDocs(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getEvents(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getFeed(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createFeed(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<Post>;
    getFiles(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getGroups(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createGroup(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<Group>;
    getLiveVideos(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createLiveVideo(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<LiveVideo>;
    deleteMembers(params?: Record<any, any>): Promise<any>;
    createMember(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<Group>;
    getOptedInMembers(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createPhoto(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<Photo>;
    getPicture(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getVideos(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createVideo(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<AdVideo>;
    get(fields: Array<string>, params?: Record<any, any>): Group;
    update(fields: Array<string>, params?: Record<any, any>): Group;
}
