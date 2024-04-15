import { Action } from "./Action";
import { Link } from "./Link";

export default function(entity: string | object): Entity;

export interface Entity {
    class?: string[] | undefined;
    properties?: object | undefined;
    entities?: Entity[] | undefined;
    links?: Link[] | undefined;
    actions?: Action[] | undefined;
    title?: string | undefined;
    // embedded link properties
    rel?: string[] | undefined;
    href?: string | undefined;
    type?: string | undefined;

    hasAction(actionName: string | RegExp): boolean;
    hasActionByName(actionName: string | RegExp): boolean;
    hasActionByClass(actionClass: string | RegExp): boolean;
    hasActionByMethod(actionMethod: string | RegExp): boolean;
    hasActionByType(actionType: string | RegExp): boolean;
    hasClass(cls: string | RegExp): boolean;
    hasEntity(entityRel: string | RegExp): boolean;
    hasEntityByRel(entityRel: string | RegExp): boolean;
    hasSubEntityByRel(entityRel: string | RegExp): boolean;
    hasEntityByClass(entityClass: string | RegExp): boolean;
    hasSubEntityByClass(entityClass: string | RegExp): boolean;
    hasEntityByType(entityType: string | RegExp): boolean;
    hasSubEntityByType(entityType: string | RegExp): boolean;
    hasLink(linkRel: string | RegExp): boolean;
    hasLinkByRel(linkRel: string | RegExp): boolean;
    hasLinkByClass(linkClass: string | RegExp): boolean;
    hasLinkByType(linkType: string | RegExp): boolean;
    hasProperty(property: string | RegExp): boolean;

    getAction(actionName: string | RegExp): Action | undefined;
    getActionByName(actionName: string | RegExp): Action | undefined;
    getActionByClass(actionClass: string | RegExp): Action | undefined;
    getActionsByClass(actionClass: string | RegExp): Action[];
    getActionByClasses(actionClasses: ReadonlyArray<string | RegExp>): Action | undefined;
    getActionsByClasses(actionClasses: ReadonlyArray<string | RegExp>): Action[];
    getActionByMethod(actionMethod: string | RegExp): Action | undefined;
    getActionsByMethod(actionMethod: string | RegExp): Action[];
    getActionByType(actionType: string | RegExp): Action | undefined;
    getActionsByType(actionType: string | RegExp): Action[];

    getLink(linkRel: string | RegExp): Link | undefined;
    getLinks(linkRel: string | RegExp): Link[];
    getLinkByRel(linkRel: string | RegExp): Link | undefined;
    getLinksByRel(linkRel: string | RegExp): Link[];
    getLinkByRels(linkRels: ReadonlyArray<string | RegExp>): Link | undefined;
    getLinksByRels(linkRels: ReadonlyArray<string | RegExp>): Link[];
    getLinkByClass(linkClass: string | RegExp): Link | undefined;
    getLinksByClass(linkClass: string | RegExp): Link[];
    getLinkByClasses(linkClasses: ReadonlyArray<string | RegExp>): Link | undefined;
    getLinksByClasses(linkClasses: ReadonlyArray<string | RegExp>): Link[];
    getLinkByType(linkType: string | RegExp): Link | undefined;
    getLinksByType(linkType: string | RegExp): Link[];

    getSubEntity(entityRel: string | RegExp): Entity | undefined;
    getSubEntities(entityRel: string | RegExp): Entity[];
    getSubEntityByRel(entityRel: string | RegExp): Entity | undefined;
    getSubEntitiesByRel(entityRel: string | RegExp): Entity[];
    getSubEntityByRels(entityRels: ReadonlyArray<string | RegExp>): Entity | undefined;
    getSubEntitiesByRels(entityRels: ReadonlyArray<string | RegExp>): Entity[];
    getSubEntityByClass(entityClass: string | RegExp): Entity | undefined;
    getSubEntitiesByClass(entityClass: string | RegExp): Entity[];
    getSubEntityByClasses(entityClasses: ReadonlyArray<string | RegExp>): Entity | undefined;
    getSubEntitiesByClasses(entityClasses: ReadonlyArray<string | RegExp>): Entity[];
    getSubEntityByType(entityType: string | RegExp): Entity | undefined;
    getSubEntitiesByType(entityType: string | RegExp): Entity[];
}

declare global {
    namespace D2L {
        namespace Hypermedia {
            namespace Siren {
                function Parse(siren: string | object): Entity;
            }
        }
    }
}

export { Action, Field, FieldType } from "./Action";
export { Link } from "./Link";
