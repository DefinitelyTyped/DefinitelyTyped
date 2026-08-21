/**
 * Type of resource indirections may control.
 */
type ResourceType = "VideoClip" | "Projection" | "unknown";

/**
 * Base class for all indirections. Should not be used directly.
 *
 * Indirections are controlled by an Indirection Controller. When
 * an indirection is changed, all indirections controlled by the
 * same indirection controller will also be affected.
 */
interface IndirectionBase {
    /** Unique identifier for this indirection. */
    uid: string;

    /** The type of resource the indirection controller is associated with. */
    resourceType: ResourceType;

    /** The display name of this indirection. */
    name: string;
}

/**
 * An indirection that can have a resource.
 */
interface ManualIndirection extends IndirectionBase {
    manualIndirection: {
        /** The resource currently in use. */
        resourceUid: string;
    };
}

/**
 * An indirection with a list of resources to choose from.
 */
interface ListIndirection extends IndirectionBase {
    listIndirection: {
        /** The index of the resource list currently being used. */
        resourceIndex: number;

        /** List of resources available to pick from. */
        resourceUids: string[];
    };
}

/**
 * Any type of indirection, received from a GET request.
 */
type Indirection = ManualIndirection | ListIndirection;

/**
 * Base class for assigning values to existing indirections.
 */
interface AssignmentBase {
    /** Unique identifier of the indirection. */
    uid: string;
}

/**
 * Assign a resource to a manual indirection.
 */
interface ManualAssignment extends AssignmentBase {
    /** Unique identifier of the new resource to use. */
    resourceUid: string;
}

/**
 * Assign a list resource by setting its current index.
 */
interface ListAssignment extends AssignmentBase {
    /** New index of the resource list to use. */
    resourceIndex: number;
}

/**
 * Any Indirection Resource assignment.
 *
 * This abstract type never gets sent via a PUT request.
 */
type Assignment = ManualAssignment | ListAssignment;

/**
 * This is actually what gets sent to the PUT assignment.
 */
interface Assignments {
    assignments: Assignment | Assignment[];
}

/**
 * Base class for all GET responses. Should not be used directly.
 */
interface ResponseBase {
    result: any;
}

/**
 * Response from a GET indirection by UID request.
 */
interface IndirectionByUidResponse extends ResponseBase {
    result: Indirection;
}

/**
 * Response from a GET all indirections request.
 */
interface AllIndirectionsResponse extends ResponseBase {
    result: Indirection[];
}

/**
 * A resource used by d3, such as a video or audio clip.
 */
interface Resource<T extends ResourceType> {
    /** Unique identifier for the resource. */
    uid: string;

    /** The name of the resource displayed in d3. */
    name: string;

    /** THe underlying d3 system filepath of the resource. */
    path: string;

    /** The type of resource. */
    type: T;
}

/**
 * Response from a GET resource by UID request.
 */
interface ResourceByUidResponse<T extends ResourceType = "unknown"> extends ResponseBase {
    result: Resource<T>;
}

/**
 * Response from a GET all resource of type request.
 */
interface AllResourcesResponse<T extends ResourceType> extends ResponseBase {
    result: Array<Resource<T>>;
}

/**
 * The requested assignment is returned with an error property.
 */
type AssignmentFailure = Assignment & { error: string };

/**
 * Response from a PUT indirections resource request.
 */
interface AssignmentsResponse {
    failedAssignments: AssignmentFailure[];
}
