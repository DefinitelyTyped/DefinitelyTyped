import { GraphQueryableInstance, GraphQueryableCollection } from "./graphqueryable";
import { OfficeGraphInsights as IInsights, Trending as ITrending, UsedInsight as IUsed, SharedInsight as IShared } from "@microsoft/microsoft-graph-types";
export interface InsightsMethods {
    trending: Trending;
    used: Used;
    shared: Shared;
}
/**
 * Represents a Insights entity
 */
export declare class Insights extends GraphQueryableInstance<IInsights> implements InsightsMethods {
    readonly trending: Trending;
    readonly used: Used;
    readonly shared: Shared;
}
/**
 * Describes a collection of Trending objects
 *
 */
export declare class Trending extends GraphQueryableCollection<ITrending[]> {
}
/**
 * Describes a collection of Used objects
 *
 */
export declare class Used extends GraphQueryableCollection<IUsed[]> {
}
/**
 * Describes a collection of Shared objects
 *
 */
export declare class Shared extends GraphQueryableCollection<IShared[]> {
}
