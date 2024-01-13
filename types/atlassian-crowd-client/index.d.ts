import CrowdApi = require("./api");
import { Settings } from "./settings";
import Attributes = require("./lib/models/attributes");
import Group = require("./lib/models/group");
import User = require("./lib/models/user");
import Session = require("./lib/models/session");
import ValidationFactors = require("./lib/models/validation-factors");

export = CrowdClient;
declare class CrowdClient extends CrowdApi {
    settings: Settings;

    constructor(settings: Settings);

    user: {
        get: (username: string, withAttributes?: boolean) => Promise<User>;
        create: (user: User) => Promise<User>;
        update: (username: string, user: User) => Promise<User>;
        rename: (oldname: string, newname: string) => Promise<void>;
        remove: (username: string) => Promise<void>;
        attributes: {
            list: (username: string) => Promise<Attributes>;
            set: (username: string, attributes: Attributes) => Promise<Attributes>;
            remove: (username: string, attributename: string) => Promise<void>;
            password: {
                set: (username: string, password: string) => Promise<void>;
                reset: (username: string) => Promise<void>;
            };
            username: {
                request: (email: string) => Promise<void>;
            };
        };
        groups: {
            get: (username: string, groupname: string, nested?: boolean) => Promise<string>;
            list: (username: string, nested?: boolean, startIndex?: number, maxResults?: number) => Promise<string[]>;
            add: (username: string, groupname: string) => Promise<void>;
            remove: (username: string, groupname: string) => Promise<void>;
        };
    };
    group: {
        get: (groupname: string, withAttributes?: boolean) => Promise<Group>;
        create: (group: Group) => Promise<Group>;
        update: (groupname: string, group: Group) => Promise<Group>;
        remove: (groupname: string) => Promise<void>;
        attributes: {
            list: (groupname: string) => Promise<Attributes>;
            set: (groupname: string, attributes: Attributes) => Promise<Attributes>;
            remove: (groupname: string, attributename: string) => Promise<void>;
        };
        users: {
            get: (groupname: string, username: string, nested?: boolean) => Promise<string>;
            list: (
                groupname: string,
                nested?: boolean,
                startIndex?: number,
                maxResults?: number,
                expand?: boolean,
            ) => Promise<string[] | User[]>;
            add: (groupname: string, username: string) => Promise<void>;
            remove: (groupname: string, username: string) => Promise<void>;
        };
        parents: {
            get: (groupname: string, parentname: string, nested?: boolean) => Promise<string>;
            list: (groupname: string, nested?: boolean, startIndex?: number, maxResults?: number) => Promise<string[]>;
            add: (groupname: string, parentname: string) => Promise<void>;
        };
        children: {
            get: (groupname: string, childname: string, nested?: boolean) => Promise<string>;
            list: (groupname: string, nested?: boolean, startIndex?: number, maxResults?: number) => Promise<string[]>;
            add: (groupname: string, childname: string) => Promise<void>;
            remove: (groupname: string, childname: string) => Promise<void>;
        };
        membership: () => Promise<string>;
    };
    authentication: {
        authenticate: (username: string, password: string) => Promise<User>;
    };
    search: {
        user: (
            restriction: string,
            expand?: boolean,
            startIndex?: number,
            maxResults?: number,
        ) => Promise<string[] | User[]>;
        group: (
            restriction: string,
            expand?: boolean,
            startIndex?: number,
            maxResults?: number,
        ) => Promise<string[] | Group[]>;
    };
    session: {
        getUser: (token: string) => Promise<User>;
        validate: (token: string, validationFactors?: ValidationFactors) => Promise<Session>;
        create: (
            username: string,
            password: string,
            validationFactors?: ValidationFactors,
            duration?: number,
        ) => Promise<Session>;
        createUnvalidated: (
            username: string,
            validationFactors?: ValidationFactors,
            duration?: number,
        ) => Promise<Session>;
        remove: (token: string) => Promise<void>;
        removeAll: (username: string, exclude?: string) => Promise<void>;
    };
    config: {
        cookie: () => Promise<any>;
    };
}
