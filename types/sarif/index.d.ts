// Type definitions for non-npm package Sarif 2.1
// Project: https://github.com/Microsoft/sarif-sdk
// Definitions by: Rusty Scrivens <https://github.com/rscrivens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/**
 * Static Analysis Results Format (SARIF) Version 2.1.0-rtm.4 JSON Schema: a standard format for the output of static
 * analysis tools.
 */
export interface Log {
    /**
     * The URI of the JSON schema corresponding to the version.
     */
    $schema?: string;

    /**
     * The SARIF format version of this log file.
     */
    version: Log.version;

    /**
     * The set of runs contained in this log file.
     */
    runs: Run[];

    /**
     * References to external property files that share data between runs.
     */
    inlineExternalProperties?: ExternalProperties[];

    /**
     * Key/value pairs that provide additional information about the log file.
     */
    properties?: PropertyBag;
}

export namespace Log {
    type version =
        "2.1.0";
}

/**
 * A physical or virtual address, or a range of addresses, in an 'addressable region' (memory or a binary file).
 */
export interface Address {
    /**
     * The address expressed as a byte offset from the start of the addressable region.
     */
    absoluteAddress?: number;

    /**
     * A human-readable fully qualified name that is associated with the address.
     */
    fullyQualifiedName?: string;

    /**
     * The index within run.addresses of the cached object for this address.
     */
    index?: number;

    /**
     * An open-ended string that identifies the address kind. 'data', 'function', 'header','instruction', 'module',
     * 'page', 'section', 'segment', 'stack', 'stackFrame', 'table' are well-known values.
     */
    kind?: string;

    /**
     * The number of bytes in this range of addresses.
     */
    length?: number;

    /**
     * A name that is associated with the address, e.g., '.text'.
     */
    name?: string;

    /**
     * The byte offset of this address from the absolute or relative address of the parent object.
     */
    offsetFromParent?: number;

    /**
     * The index within run.addresses of the parent object.
     */
    parentIndex?: number;

    /**
     * The address expressed as a byte offset from the absolute address of the top-most parent object.
     */
    relativeAddress?: number;

    /**
     * Key/value pairs that provide additional information about the address.
     */
    properties?: PropertyBag;
}

/**
 * A single artifact. In some cases, this artifact might be nested within another artifact.
 */
export interface Artifact {
    /**
     * The contents of the artifact.
     */
    contents?: ArtifactContent;

    /**
     * A short description of the artifact.
     */
    description?: Message;

    /**
     * Specifies the encoding for an artifact object that refers to a text file.
     */
    encoding?: string;

    /**
     * A dictionary, each of whose keys is the name of a hash function and each of whose values is the hashed value of
     * the artifact produced by the specified hash function.
     */
    hashes?: { [key: string]: string };

    /**
     * The Coordinated Universal Time (UTC) date and time at which the artifact was most recently modified. See
     * "Date/time properties" in the SARIF spec for the required format.
     */
    lastModifiedTimeUtc?: string;

    /**
     * The length of the artifact in bytes.
     */
    length?: number;

    /**
     * The location of the artifact.
     */
    location?: ArtifactLocation;

    /**
     * The MIME type (RFC 2045) of the artifact.
     */
    mimeType?: string;

    /**
     * The offset in bytes of the artifact within its containing artifact.
     */
    offset?: number;

    /**
     * Identifies the index of the immediate parent of the artifact, if this artifact is nested.
     */
    parentIndex?: number;

    /**
     * The role or roles played by the artifact in the analysis.
     */
    roles?: Artifact.roles[];

    /**
     * Specifies the source language for any artifact object that refers to a text file that contains source code.
     */
    sourceLanguage?: string;

    /**
     * Key/value pairs that provide additional information about the artifact.
     */
    properties?: PropertyBag;
}

export namespace Artifact {
    type roles =
        "analysisTarget" |
        "attachment" |
        "responseFile" |
        "resultFile" |
        "standardStream" |
        "tracedFile" |
        "unmodified" |
        "modified" |
        "added" |
        "deleted" |
        "renamed" |
        "uncontrolled" |
        "driver" |
        "extension" |
        "translation" |
        "taxonomy" |
        "policy" |
        "referencedOnCommandLine" |
        "memoryContents" |
        "directory" |
        "userSpecifiedConfiguration" |
        "toolSpecifiedConfiguration" |
        "debugOutputFile";
}

/**
 * A change to a single artifact.
 */
export interface ArtifactChange {
    /**
     * The location of the artifact to change.
     */
    artifactLocation: ArtifactLocation;

    /**
     * An array of replacement objects, each of which represents the replacement of a single region in a single
     * artifact specified by 'artifactLocation'.
     */
    replacements: Replacement[];

    /**
     * Key/value pairs that provide additional information about the change.
     */
    properties?: PropertyBag;
}

/**
 * Represents the contents of an artifact.
 */
export interface ArtifactContent {
    /**
     * MIME Base64-encoded content from a binary artifact, or from a text artifact in its original encoding.
     */
    binary?: string;

    /**
     * An alternate rendered representation of the artifact (e.g., a decompiled representation of a binary region).
     */
    rendered?: MultiformatMessageString;

    /**
     * UTF-8-encoded content from a text artifact.
     */
    text?: string;

    /**
     * Key/value pairs that provide additional information about the artifact content.
     */
    properties?: PropertyBag;
}

/**
 * Specifies the location of an artifact.
 */
export interface ArtifactLocation {
    /**
     * A short description of the artifact location.
     */
    description?: Message;

    /**
     * The index within the run artifacts array of the artifact object associated with the artifact location.
     */
    index?: number;

    /**
     * A string containing a valid relative or absolute URI.
     */
    uri?: string;

    /**
     * A string which indirectly specifies the absolute URI with respect to which a relative URI in the "uri" property
     * is interpreted.
     */
    uriBaseId?: string;

    /**
     * Key/value pairs that provide additional information about the artifact location.
     */
    properties?: PropertyBag;
}

/**
 * An artifact relevant to a result.
 */
export interface Attachment {
    /**
     * The location of the attachment.
     */
    artifactLocation: ArtifactLocation;

    /**
     * A message describing the role played by the attachment.
     */
    description?: Message;

    /**
     * An array of rectangles specifying areas of interest within the image.
     */
    rectangles?: Rectangle[];

    /**
     * An array of regions of interest within the attachment.
     */
    regions?: Region[];

    /**
     * Key/value pairs that provide additional information about the attachment.
     */
    properties?: PropertyBag;
}

/**
 * A set of threadFlows which together describe a pattern of code execution relevant to detecting a result.
 */
export interface CodeFlow {
    /**
     * A message relevant to the code flow.
     */
    message?: Message;

    /**
     * An array of one or more unique threadFlow objects, each of which describes the progress of a program through a
     * thread of execution.
     */
    threadFlows: ThreadFlow[];

    /**
     * Key/value pairs that provide additional information about the code flow.
     */
    properties?: PropertyBag;
}

/**
 * Information about how a specific rule or notification was reconfigured at runtime.
 */
export interface ConfigurationOverride {
    /**
     * Specifies how the rule or notification was configured during the scan.
     */
    configuration: ReportingConfiguration;

    /**
     * A reference used to locate the descriptor whose configuration was overridden.
     */
    descriptor: ReportingDescriptorReference;

    /**
     * Key/value pairs that provide additional information about the configuration override.
     */
    properties?: PropertyBag;
}

/**
 * Describes how a converter transformed the output of a static analysis tool from the analysis tool's native output
 * format into the SARIF format.
 */
export interface Conversion {
    /**
     * The locations of the analysis tool's per-run log files.
     */
    analysisToolLogFiles?: ArtifactLocation[];

    /**
     * An invocation object that describes the invocation of the converter.
     */
    invocation?: Invocation;

    /**
     * A tool object that describes the converter.
     */
    tool: Tool;

    /**
     * Key/value pairs that provide additional information about the conversion.
     */
    properties?: PropertyBag;
}

/**
 * Represents a directed edge in a graph.
 */
export interface Edge {
    /**
     * A string that uniquely identifies the edge within its graph.
     */
    id: string;

    /**
     * A short description of the edge.
     */
    label?: Message;

    /**
     * Identifies the source node (the node at which the edge starts).
     */
    sourceNodeId: string;

    /**
     * Identifies the target node (the node at which the edge ends).
     */
    targetNodeId: string;

    /**
     * Key/value pairs that provide additional information about the edge.
     */
    properties?: PropertyBag;
}

/**
 * Represents the traversal of a single edge during a graph traversal.
 */
export interface EdgeTraversal {
    /**
     * Identifies the edge being traversed.
     */
    edgeId: string;

    /**
     * The values of relevant expressions after the edge has been traversed.
     */
    finalState?: { [key: string]: MultiformatMessageString };

    /**
     * A message to display to the user as the edge is traversed.
     */
    message?: Message;

    /**
     * The number of edge traversals necessary to return from a nested graph.
     */
    stepOverEdgeCount?: number;

    /**
     * Key/value pairs that provide additional information about the edge traversal.
     */
    properties?: PropertyBag;
}

/**
 * Describes a runtime exception encountered during the execution of an analysis tool.
 */
export interface Exception {
    /**
     * An array of exception objects each of which is considered a cause of this exception.
     */
    innerExceptions?: Exception[];

    /**
     * A string that identifies the kind of exception, for example, the fully qualified type name of an object that was
     * thrown, or the symbolic name of a signal.
     */
    kind?: string;

    /**
     * A message that describes the exception.
     */
    message?: string;

    /**
     * The sequence of function calls leading to the exception.
     */
    stack?: Stack;

    /**
     * Key/value pairs that provide additional information about the exception.
     */
    properties?: PropertyBag;
}

/**
 * The top-level element of an external property file.
 */
export interface ExternalProperties {
    /**
     * Addresses that will be merged with a separate run.
     */
    addresses?: Address[];

    /**
     * An array of artifact objects that will be merged with a separate run.
     */
    artifacts?: Artifact[];

    /**
     * A conversion object that will be merged with a separate run.
     */
    conversion?: Conversion;

    /**
     * The analysis tool object that will be merged with a separate run.
     */
    driver?: ToolComponent;

    /**
     * Tool extensions that will be merged with a separate run.
     */
    extensions?: ToolComponent[];

    /**
     * Key/value pairs that provide additional information that will be merged with a separate run.
     */
    externalizedProperties?: PropertyBag;

    /**
     * An array of graph objects that will be merged with a separate run.
     */
    graphs?: Graph[];

    /**
     * A stable, unique identifer for this external properties object, in the form of a GUID.
     */
    guid?: string;

    /**
     * Describes the invocation of the analysis tool that will be merged with a separate run.
     */
    invocations?: Invocation[];

    /**
     * An array of logical locations such as namespaces, types or functions that will be merged with a separate run.
     */
    logicalLocations?: LogicalLocation[];

    /**
     * Tool policies that will be merged with a separate run.
     */
    policies?: ToolComponent[];

    /**
     * An array of result objects that will be merged with a separate run.
     */
    results?: Result[];

    /**
     * A stable, unique identifer for the run associated with this external properties object, in the form of a GUID.
     */
    runGuid?: string;

    /**
     * The URI of the JSON schema corresponding to the version of the external property file format.
     */
    schema?: string;

    /**
     * Tool taxonomies that will be merged with a separate run.
     */
    taxonomies?: ToolComponent[];

    /**
     * An array of threadFlowLocation objects that will be merged with a separate run.
     */
    threadFlowLocations?: ThreadFlowLocation[];

    /**
     * Tool translations that will be merged with a separate run.
     */
    translations?: ToolComponent[];

    /**
     * The SARIF format version of this external properties object.
     */
    version?: ExternalProperties.version;

    /**
     * Requests that will be merged with a separate run.
     */
    webRequests?: WebRequest[];

    /**
     * Responses that will be merged with a separate run.
     */
    webResponses?: WebResponse[];

    /**
     * Key/value pairs that provide additional information about the external properties.
     */
    properties?: PropertyBag;
}

export namespace ExternalProperties {
    type version =
        "2.1.0";
}

/**
 * Contains information that enables a SARIF consumer to locate the external property file that contains the value of
 * an externalized property associated with the run.
 */
export interface ExternalPropertyFileReference {
    /**
     * A stable, unique identifer for the external property file in the form of a GUID.
     */
    guid?: string;

    /**
     * A non-negative integer specifying the number of items contained in the external property file.
     */
    itemCount?: number;

    /**
     * The location of the external property file.
     */
    location?: ArtifactLocation;

    /**
     * Key/value pairs that provide additional information about the external property file.
     */
    properties?: PropertyBag;
}

/**
 * References to external property files that should be inlined with the content of a root log file.
 */
export interface ExternalPropertyFileReferences {
    /**
     * An array of external property files containing run.addresses arrays to be merged with the root log file.
     */
    addresses?: ExternalPropertyFileReference[];

    /**
     * An array of external property files containing run.artifacts arrays to be merged with the root log file.
     */
    artifacts?: ExternalPropertyFileReference[];

    /**
     * An external property file containing a run.conversion object to be merged with the root log file.
     */
    conversion?: ExternalPropertyFileReference;

    /**
     * An external property file containing a run.driver object to be merged with the root log file.
     */
    driver?: ExternalPropertyFileReference;

    /**
     * An array of external property files containing run.extensions arrays to be merged with the root log file.
     */
    extensions?: ExternalPropertyFileReference[];

    /**
     * An external property file containing a run.properties object to be merged with the root log file.
     */
    externalizedProperties?: ExternalPropertyFileReference;

    /**
     * An array of external property files containing a run.graphs object to be merged with the root log file.
     */
    graphs?: ExternalPropertyFileReference[];

    /**
     * An array of external property files containing run.invocations arrays to be merged with the root log file.
     */
    invocations?: ExternalPropertyFileReference[];

    /**
     * An array of external property files containing run.logicalLocations arrays to be merged with the root log file.
     */
    logicalLocations?: ExternalPropertyFileReference[];

    /**
     * An array of external property files containing run.policies arrays to be merged with the root log file.
     */
    policies?: ExternalPropertyFileReference[];

    /**
     * An array of external property files containing run.results arrays to be merged with the root log file.
     */
    results?: ExternalPropertyFileReference[];

    /**
     * An array of external property files containing run.taxonomies arrays to be merged with the root log file.
     */
    taxonomies?: ExternalPropertyFileReference[];

    /**
     * An array of external property files containing run.threadFlowLocations arrays to be merged with the root log
     * file.
     */
    threadFlowLocations?: ExternalPropertyFileReference[];

    /**
     * An array of external property files containing run.translations arrays to be merged with the root log file.
     */
    translations?: ExternalPropertyFileReference[];

    /**
     * An array of external property files containing run.requests arrays to be merged with the root log file.
     */
    webRequests?: ExternalPropertyFileReference[];

    /**
     * An array of external property files containing run.responses arrays to be merged with the root log file.
     */
    webResponses?: ExternalPropertyFileReference[];

    /**
     * Key/value pairs that provide additional information about the external property files.
     */
    properties?: PropertyBag;
}

/**
 * A proposed fix for the problem represented by a result object. A fix specifies a set of artifacts to modify. For
 * each artifact, it specifies a set of bytes to remove, and provides a set of new bytes to replace them.
 */
export interface Fix {
    /**
     * One or more artifact changes that comprise a fix for a result.
     */
    artifactChanges: ArtifactChange[];

    /**
     * A message that describes the proposed fix, enabling viewers to present the proposed change to an end user.
     */
    description?: Message;

    /**
     * Key/value pairs that provide additional information about the fix.
     */
    properties?: PropertyBag;
}

/**
 * A network of nodes and directed edges that describes some aspect of the structure of the code (for example, a call
 * graph).
 */
export interface Graph {
    /**
     * A description of the graph.
     */
    description?: Message;

    /**
     * An array of edge objects representing the edges of the graph.
     */
    edges?: Edge[];

    /**
     * An array of node objects representing the nodes of the graph.
     */
    nodes?: Node[];

    /**
     * Key/value pairs that provide additional information about the graph.
     */
    properties?: PropertyBag;
}

/**
 * Represents a path through a graph.
 */
export interface GraphTraversal {
    /**
     * A description of this graph traversal.
     */
    description?: Message;

    /**
     * The sequences of edges traversed by this graph traversal.
     */
    edgeTraversals?: EdgeTraversal[];

    /**
     * Values of relevant expressions at the start of the graph traversal that remain constant for the graph traversal.
     */
    immutableState?: { [key: string]: MultiformatMessageString };

    /**
     * Values of relevant expressions at the start of the graph traversal that may change during graph traversal.
     */
    initialState?: { [key: string]: MultiformatMessageString };

    /**
     * The index within the result.graphs to be associated with the result.
     */
    resultGraphIndex?: number;

    /**
     * The index within the run.graphs to be associated with the result.
     */
    runGraphIndex?: number;

    /**
     * Key/value pairs that provide additional information about the graph traversal.
     */
    properties?: PropertyBag;
}

/**
 * The runtime environment of the analysis tool run.
 */
export interface Invocation {
    /**
     * The account that ran the analysis tool.
     */
    account?: string;

    /**
     * An array of strings, containing in order the command line arguments passed to the tool from the operating
     * system.
     */
    arguments?: string[];

    /**
     * The command line used to invoke the tool.
     */
    commandLine?: string;

    /**
     * The Coordinated Universal Time (UTC) date and time at which the run ended. See "Date/time properties" in the
     * SARIF spec for the required format.
     */
    endTimeUtc?: string;

    /**
     * The environment variables associated with the analysis tool process, expressed as key/value pairs.
     */
    environmentVariables?: { [key: string]: string };

    /**
     * An absolute URI specifying the location of the analysis tool's executable.
     */
    executableLocation?: ArtifactLocation;

    /**
     * Specifies whether the tool's execution completed successfully.
     */
    executionSuccessful: boolean;

    /**
     * The process exit code.
     */
    exitCode?: number;

    /**
     * The reason for the process exit.
     */
    exitCodeDescription?: string;

    /**
     * The name of the signal that caused the process to exit.
     */
    exitSignalName?: string;

    /**
     * The numeric value of the signal that caused the process to exit.
     */
    exitSignalNumber?: number;

    /**
     * The machine that hosted the analysis tool run.
     */
    machine?: string;

    /**
     * An array of configurationOverride objects that describe notifications related runtime overrides.
     */
    notificationConfigurationOverrides?: ConfigurationOverride[];

    /**
     * The process id for the analysis tool run.
     */
    processId?: number;

    /**
     * The reason given by the operating system that the process failed to start.
     */
    processStartFailureMessage?: string;

    /**
     * The locations of any response files specified on the tool's command line.
     */
    responseFiles?: ArtifactLocation[];

    /**
     * An array of configurationOverride objects that describe rules related runtime overrides.
     */
    ruleConfigurationOverrides?: ConfigurationOverride[];

    /**
     * The Coordinated Universal Time (UTC) date and time at which the run started. See "Date/time properties" in the
     * SARIF spec for the required format.
     */
    startTimeUtc?: string;

    /**
     * A file containing the standard error stream from the process that was invoked.
     */
    stderr?: ArtifactLocation;

    /**
     * A file containing the standard input stream to the process that was invoked.
     */
    stdin?: ArtifactLocation;

    /**
     * A file containing the standard output stream from the process that was invoked.
     */
    stdout?: ArtifactLocation;

    /**
     * A file containing the interleaved standard output and standard error stream from the process that was invoked.
     */
    stdoutStderr?: ArtifactLocation;

    /**
     * A list of conditions detected by the tool that are relevant to the tool's configuration.
     */
    toolConfigurationNotifications?: Notification[];

    /**
     * A list of runtime conditions detected by the tool during the analysis.
     */
    toolExecutionNotifications?: Notification[];

    /**
     * The working directory for the analysis tool run.
     */
    workingDirectory?: ArtifactLocation;

    /**
     * Key/value pairs that provide additional information about the invocation.
     */
    properties?: PropertyBag;
}

/**
 * A location within a programming artifact.
 */
export interface Location {
    /**
     * A set of regions relevant to the location.
     */
    annotations?: Region[];

    /**
     * Value that distinguishes this location from all other locations within a single result object.
     */
    id?: number;

    /**
     * The logical locations associated with the result.
     */
    logicalLocations?: LogicalLocation[];

    /**
     * A message relevant to the location.
     */
    message?: Message;

    /**
     * Identifies the artifact and region.
     */
    physicalLocation?: PhysicalLocation;

    /**
     * An array of objects that describe relationships between this location and others.
     */
    relationships?: LocationRelationship[];

    /**
     * Key/value pairs that provide additional information about the location.
     */
    properties?: PropertyBag;
}

/**
 * Information about the relation of one location to another.
 */
export interface LocationRelationship {
    /**
     * A description of the location relationship.
     */
    description?: Message;

    /**
     * A set of distinct strings that categorize the relationship. Well-known kinds include 'includes', 'isIncludedBy'
     * and 'relevant'.
     */
    kinds?: string[];

    /**
     * A reference to the related location.
     */
    target: number;

    /**
     * Key/value pairs that provide additional information about the location relationship.
     */
    properties?: PropertyBag;
}

/**
 * A logical location of a construct that produced a result.
 */
export interface LogicalLocation {
    /**
     * The machine-readable name for the logical location, such as a mangled function name provided by a C++ compiler
     * that encodes calling convention, return type and other details along with the function name.
     */
    decoratedName?: string;

    /**
     * The human-readable fully qualified name of the logical location.
     */
    fullyQualifiedName?: string;

    /**
     * The index within the logical locations array.
     */
    index?: number;

    /**
     * The type of construct this logical location component refers to. Should be one of 'function', 'member',
     * 'module', 'namespace', 'parameter', 'resource', 'returnType', 'type', 'variable', 'object', 'array', 'property',
     * 'value', 'element', 'text', 'attribute', 'comment', 'declaration', 'dtd' or 'processingInstruction', if any of
     * those accurately describe the construct.
     */
    kind?: string;

    /**
     * Identifies the construct in which the result occurred. For example, this property might contain the name of a
     * class or a method.
     */
    name?: string;

    /**
     * Identifies the index of the immediate parent of the construct in which the result was detected. For example,
     * this property might point to a logical location that represents the namespace that holds a type.
     */
    parentIndex?: number;

    /**
     * Key/value pairs that provide additional information about the logical location.
     */
    properties?: PropertyBag;
}

/**
 * Encapsulates a message intended to be read by the end user.
 */
export interface Message {
    /**
     * An array of strings to substitute into the message string.
     */
    arguments?: string[];

    /**
     * The identifier for this message.
     */
    id?: string;

    /**
     * A Markdown message string.
     */
    markdown?: string;

    /**
     * A plain text message string.
     */
    text?: string;

    /**
     * Key/value pairs that provide additional information about the message.
     */
    properties?: PropertyBag;
}

/**
 * A message string or message format string rendered in multiple formats.
 */
export interface MultiformatMessageString {
    /**
     * A Markdown message string or format string.
     */
    markdown?: string;

    /**
     * A plain text message string or format string.
     */
    text: string;

    /**
     * Key/value pairs that provide additional information about the message.
     */
    properties?: PropertyBag;
}

/**
 * Represents a node in a graph.
 */
export interface Node {
    /**
     * Array of child nodes.
     */
    children?: Node[];

    /**
     * A string that uniquely identifies the node within its graph.
     */
    id: string;

    /**
     * A short description of the node.
     */
    label?: Message;

    /**
     * A code location associated with the node.
     */
    location?: Location;

    /**
     * Key/value pairs that provide additional information about the node.
     */
    properties?: PropertyBag;
}

/**
 * Describes a condition relevant to the tool itself, as opposed to being relevant to a target being analyzed by the
 * tool.
 */
export interface Notification {
    /**
     * A reference used to locate the rule descriptor associated with this notification.
     */
    associatedRule?: ReportingDescriptorReference;

    /**
     * A reference used to locate the descriptor relevant to this notification.
     */
    descriptor?: ReportingDescriptorReference;

    /**
     * The runtime exception, if any, relevant to this notification.
     */
    exception?: Exception;

    /**
     * A value specifying the severity level of the notification.
     */
    level?: Notification.level;

    /**
     * The locations relevant to this notification.
     */
    locations?: Location[];

    /**
     * A message that describes the condition that was encountered.
     */
    message: Message;

    /**
     * The thread identifier of the code that generated the notification.
     */
    threadId?: number;

    /**
     * The Coordinated Universal Time (UTC) date and time at which the analysis tool generated the notification.
     */
    timeUtc?: string;

    /**
     * Key/value pairs that provide additional information about the notification.
     */
    properties?: PropertyBag;
}

export namespace Notification {
    type level =
        "none" |
        "note" |
        "warning" |
        "error";
}

/**
 * A physical location relevant to a result. Specifies a reference to a programming artifact together with a range of
 * bytes or characters within that artifact.
 */
export interface PhysicalLocation {
    /**
     * The address of the location.
     */
    address?: Address;

    /**
     * The location of the artifact.
     */
    artifactLocation?: ArtifactLocation;

    /**
     * Specifies a portion of the artifact that encloses the region. Allows a viewer to display additional context
     * around the region.
     */
    contextRegion?: Region;

    /**
     * Specifies a portion of the artifact.
     */
    region?: Region;

    /**
     * Key/value pairs that provide additional information about the physical location.
     */
    properties?: PropertyBag;
}

/**
 * Key/value pairs that provide additional information about the object.
 */
export interface PropertyBag {
    /**
     * A set of distinct strings that provide additional information.
     */
    tags?: string[];

    /**
     * Additional Properties
     */
    [key: string]: any;
}

/**
 * An area within an image.
 */
export interface Rectangle {
    /**
     * The Y coordinate of the bottom edge of the rectangle, measured in the image's natural units.
     */
    bottom?: number;

    /**
     * The X coordinate of the left edge of the rectangle, measured in the image's natural units.
     */
    left?: number;

    /**
     * A message relevant to the rectangle.
     */
    message?: Message;

    /**
     * The X coordinate of the right edge of the rectangle, measured in the image's natural units.
     */
    right?: number;

    /**
     * The Y coordinate of the top edge of the rectangle, measured in the image's natural units.
     */
    top?: number;

    /**
     * Key/value pairs that provide additional information about the rectangle.
     */
    properties?: PropertyBag;
}

/**
 * A region within an artifact where a result was detected.
 */
export interface Region {
    /**
     * The length of the region in bytes.
     */
    byteLength?: number;

    /**
     * The zero-based offset from the beginning of the artifact of the first byte in the region.
     */
    byteOffset?: number;

    /**
     * The length of the region in characters.
     */
    charLength?: number;

    /**
     * The zero-based offset from the beginning of the artifact of the first character in the region.
     */
    charOffset?: number;

    /**
     * The column number of the character following the end of the region.
     */
    endColumn?: number;

    /**
     * The line number of the last character in the region.
     */
    endLine?: number;

    /**
     * A message relevant to the region.
     */
    message?: Message;

    /**
     * The portion of the artifact contents within the specified region.
     */
    snippet?: ArtifactContent;

    /**
     * Specifies the source language, if any, of the portion of the artifact specified by the region object.
     */
    sourceLanguage?: string;

    /**
     * The column number of the first character in the region.
     */
    startColumn?: number;

    /**
     * The line number of the first character in the region.
     */
    startLine?: number;

    /**
     * Key/value pairs that provide additional information about the region.
     */
    properties?: PropertyBag;
}

/**
 * The replacement of a single region of an artifact.
 */
export interface Replacement {
    /**
     * The region of the artifact to delete.
     */
    deletedRegion: Region;

    /**
     * The content to insert at the location specified by the 'deletedRegion' property.
     */
    insertedContent?: ArtifactContent;

    /**
     * Key/value pairs that provide additional information about the replacement.
     */
    properties?: PropertyBag;
}

/**
 * Information about a rule or notification that can be configured at runtime.
 */
export interface ReportingConfiguration {
    /**
     * Specifies whether the report may be produced during the scan.
     */
    enabled?: boolean;

    /**
     * Specifies the failure level for the report.
     */
    level?: ReportingConfiguration.level;

    /**
     * Contains configuration information specific to a report.
     */
    parameters?: PropertyBag;

    /**
     * Specifies the relative priority of the report. Used for analysis output only.
     */
    rank?: number;

    /**
     * Key/value pairs that provide additional information about the reporting configuration.
     */
    properties?: PropertyBag;
}

export namespace ReportingConfiguration {
    type level =
        "none" |
        "note" |
        "warning" |
        "error";
}

/**
 * Metadata that describes a specific report produced by the tool, as part of the analysis it provides or its runtime
 * reporting.
 */
export interface ReportingDescriptor {
    /**
     * Default reporting configuration information.
     */
    defaultConfiguration?: ReportingConfiguration;

    /**
     * An array of unique identifies in the form of a GUID by which this report was known in some previous version of
     * the analysis tool.
     */
    deprecatedGuids?: string[];

    /**
     * An array of stable, opaque identifiers by which this report was known in some previous version of the analysis
     * tool.
     */
    deprecatedIds?: string[];

    /**
     * An array of readable identifiers by which this report was known in some previous version of the analysis tool.
     */
    deprecatedNames?: string[];

    /**
     * A description of the report. Should, as far as possible, provide details sufficient to enable resolution of any
     * problem indicated by the result.
     */
    fullDescription?: MultiformatMessageString;

    /**
     * A unique identifer for the reporting descriptor in the form of a GUID.
     */
    guid?: string;

    /**
     * Provides the primary documentation for the report, useful when there is no online documentation.
     */
    help?: MultiformatMessageString;

    /**
     * A URI where the primary documentation for the report can be found.
     */
    helpUri?: string;

    /**
     * A stable, opaque identifier for the report.
     */
    id: string;

    /**
     * A set of name/value pairs with arbitrary names. Each value is a multiformatMessageString object, which holds
     * message strings in plain text and (optionally) Markdown format. The strings can include placeholders, which can
     * be used to construct a message in combination with an arbitrary number of additional string arguments.
     */
    messageStrings?: { [key: string]: MultiformatMessageString };

    /**
     * A report identifier that is understandable to an end user.
     */
    name?: string;

    /**
     * An array of objects that describe relationships between this reporting descriptor and others.
     */
    relationships?: ReportingDescriptorRelationship[];

    /**
     * A concise description of the report. Should be a single sentence that is understandable when visible space is
     * limited to a single line of text.
     */
    shortDescription?: MultiformatMessageString;

    /**
     * Key/value pairs that provide additional information about the report.
     */
    properties?: PropertyBag;
}

/**
 * Information about how to locate a relevant reporting descriptor.
 */
export interface ReportingDescriptorReference {
    /**
     * A guid that uniquely identifies the descriptor.
     */
    guid?: string;

    /**
     * The id of the descriptor.
     */
    id?: string;

    /**
     * The index into an array of descriptors in toolComponent.ruleDescriptors, toolComponent.notificationDescriptors,
     * or toolComponent.taxonomyDescriptors, depending on context.
     */
    index?: number;

    /**
     * A reference used to locate the toolComponent associated with the descriptor.
     */
    toolComponent?: ToolComponentReference;

    /**
     * Key/value pairs that provide additional information about the reporting descriptor reference.
     */
    properties?: PropertyBag;
}

/**
 * Information about the relation of one reporting descriptor to another.
 */
export interface ReportingDescriptorRelationship {
    /**
     * A description of the reporting descriptor relationship.
     */
    description?: Message;

    /**
     * A set of distinct strings that categorize the relationship. Well-known kinds include 'canPrecede', 'canFollow',
     * 'willPrecede', 'willFollow', 'superset', 'subset', 'equal', 'disjoint', 'relevant', and 'incomparable'.
     */
    kinds?: string[];

    /**
     * A reference to the related reporting descriptor.
     */
    target: ReportingDescriptorReference;

    /**
     * Key/value pairs that provide additional information about the reporting descriptor reference.
     */
    properties?: PropertyBag;
}

/**
 * A result produced by an analysis tool.
 */
export interface Result {
    /**
     * Identifies the artifact that the analysis tool was instructed to scan. This need not be the same as the artifact
     * where the result actually occurred.
     */
    analysisTarget?: ArtifactLocation;

    /**
     * A set of artifacts relevant to the result.
     */
    attachments?: Attachment[];

    /**
     * The state of a result relative to a baseline of a previous run.
     */
    baselineState?: Result.baselineState;

    /**
     * An array of 'codeFlow' objects relevant to the result.
     */
    codeFlows?: CodeFlow[];

    /**
     * A stable, unique identifier for the equivalence class of logically identical results to which this result
     * belongs, in the form of a GUID.
     */
    correlationGuid?: string;

    /**
     * A set of strings each of which individually defines a stable, unique identity for the result.
     */
    fingerprints?: { [key: string]: string };

    /**
     * An array of 'fix' objects, each of which represents a proposed fix to the problem indicated by the result.
     */
    fixes?: Fix[];

    /**
     * An array of zero or more unique graph objects associated with the result.
     */
    graphs?: Graph[];

    /**
     * An array of one or more unique 'graphTraversal' objects.
     */
    graphTraversals?: GraphTraversal[];

    /**
     * A stable, unique identifer for the result in the form of a GUID.
     */
    guid?: string;

    /**
     * An absolute URI at which the result can be viewed.
     */
    hostedViewerUri?: string;

    /**
     * A value that categorizes results by evaluation state.
     */
    kind?: Result.kind;

    /**
     * A value specifying the severity level of the result.
     */
    level?: Result.level;

    /**
     * The set of locations where the result was detected. Specify only one location unless the problem indicated by
     * the result can only be corrected by making a change at every specified location.
     */
    locations?: Location[];

    /**
     * A message that describes the result. The first sentence of the message only will be displayed when visible space
     * is limited.
     */
    message: Message;

    /**
     * A positive integer specifying the number of times this logically unique result was observed in this run.
     */
    occurrenceCount?: number;

    /**
     * A set of strings that contribute to the stable, unique identity of the result.
     */
    partialFingerprints?: { [key: string]: string };

    /**
     * Information about how and when the result was detected.
     */
    provenance?: ResultProvenance;

    /**
     * A number representing the priority or importance of the result.
     */
    rank?: number;

    /**
     * A set of locations relevant to this result.
     */
    relatedLocations?: Location[];

    /**
     * A reference used to locate the rule descriptor relevant to this result.
     */
    rule?: ReportingDescriptorReference;

    /**
     * The stable, unique identifier of the rule, if any, to which this notification is relevant. This member can be
     * used to retrieve rule metadata from the rules dictionary, if it exists.
     */
    ruleId?: string;

    /**
     * The index within the tool component rules array of the rule object associated with this result.
     */
    ruleIndex?: number;

    /**
     * An array of 'stack' objects relevant to the result.
     */
    stacks?: Stack[];

    /**
     * A set of suppressions relevant to this result.
     */
    suppressions?: Suppression[];

    /**
     * An array of references to taxonomy reporting descriptors that are applicable to the result.
     */
    taxa?: ReportingDescriptorReference[];

    /**
     * A web request associated with this result.
     */
    webRequest?: WebRequest;

    /**
     * A web response associated with this result.
     */
    webResponse?: WebResponse;

    /**
     * The URIs of the work items associated with this result.
     */
    workItemUris?: string[];

    /**
     * Key/value pairs that provide additional information about the result.
     */
    properties?: PropertyBag;
}

export namespace Result {
    type kind =
        "notApplicable" |
        "pass" |
        "fail" |
        "review" |
        "open" |
        "informational";

    type level =
        "none" |
        "note" |
        "warning" |
        "error";

    type baselineState =
        "new" |
        "unchanged" |
        "updated" |
        "absent";
}

/**
 * Contains information about how and when a result was detected.
 */
export interface ResultProvenance {
    /**
     * An array of physicalLocation objects which specify the portions of an analysis tool's output that a converter
     * transformed into the result.
     */
    conversionSources?: PhysicalLocation[];

    /**
     * A GUID-valued string equal to the automationDetails.guid property of the run in which the result was first
     * detected.
     */
    firstDetectionRunGuid?: string;

    /**
     * The Coordinated Universal Time (UTC) date and time at which the result was first detected. See "Date/time
     * properties" in the SARIF spec for the required format.
     */
    firstDetectionTimeUtc?: string;

    /**
     * The index within the run.invocations array of the invocation object which describes the tool invocation that
     * detected the result.
     */
    invocationIndex?: number;

    /**
     * A GUID-valued string equal to the automationDetails.guid property of the run in which the result was most
     * recently detected.
     */
    lastDetectionRunGuid?: string;

    /**
     * The Coordinated Universal Time (UTC) date and time at which the result was most recently detected. See
     * "Date/time properties" in the SARIF spec for the required format.
     */
    lastDetectionTimeUtc?: string;

    /**
     * Key/value pairs that provide additional information about the result.
     */
    properties?: PropertyBag;
}

/**
 * Describes a single run of an analysis tool, and contains the reported output of that run.
 */
export interface Run {
    /**
     * Addresses associated with this run instance, if any.
     */
    addresses?: Address[];

    /**
     * An array of artifact objects relevant to the run.
     */
    artifacts?: Artifact[];

    /**
     * Automation details that describe this run.
     */
    automationDetails?: RunAutomationDetails;

    /**
     * The 'guid' property of a previous SARIF 'run' that comprises the baseline that was used to compute result
     * 'baselineState' properties for the run.
     */
    baselineGuid?: string;

    /**
     * Specifies the unit in which the tool measures columns.
     */
    columnKind?: Run.columnKind;

    /**
     * A conversion object that describes how a converter transformed an analysis tool's native reporting format into
     * the SARIF format.
     */
    conversion?: Conversion;

    /**
     * Specifies the default encoding for any artifact object that refers to a text file.
     */
    defaultEncoding?: string;

    /**
     * Specifies the default source language for any artifact object that refers to a text file that contains source
     * code.
     */
    defaultSourceLanguage?: string;

    /**
     * References to external property files that should be inlined with the content of a root log file.
     */
    externalPropertyFileReferences?: ExternalPropertyFileReferences;

    /**
     * An array of zero or more unique graph objects associated with the run.
     */
    graphs?: Graph[];

    /**
     * Describes the invocation of the analysis tool.
     */
    invocations?: Invocation[];

    /**
     * The language of the messages emitted into the log file during this run (expressed as an ISO 639-1 two-letter
     * lowercase culture code) and an optional region (expressed as an ISO 3166-1 two-letter uppercase subculture code
     * associated with a country or region). The casing is recommended but not required (in order for this data to
     * conform to RFC5646).
     */
    language?: string;

    /**
     * An array of logical locations such as namespaces, types or functions.
     */
    logicalLocations?: LogicalLocation[];

    /**
     * An ordered list of character sequences that were treated as line breaks when computing region information for
     * the run.
     */
    newlineSequences?: string[];

    /**
     * The artifact location specified by each uriBaseId symbol on the machine where the tool originally ran.
     */
    originalUriBaseIds?: { [key: string]: ArtifactLocation };

    /**
     * Contains configurations that may potentially override both reportingDescriptor.defaultConfiguration (the tool's
     * default severities) and invocation.configurationOverrides (severities established at run-time from the command
     * line).
     */
    policies?: ToolComponent[];

    /**
     * An array of strings used to replace sensitive information in a redaction-aware property.
     */
    redactionTokens?: string[];

    /**
     * The set of results contained in an SARIF log. The results array can be omitted when a run is solely exporting
     * rules metadata. It must be present (but may be empty) if a log file represents an actual scan.
     */
    results?: Result[];

    /**
     * Automation details that describe the aggregate of runs to which this run belongs.
     */
    runAggregates?: RunAutomationDetails[];

    /**
     * A specialLocations object that defines locations of special significance to SARIF consumers.
     */
    specialLocations?: SpecialLocations;

    /**
     * An array of toolComponent objects relevant to a taxonomy in which results are categorized.
     */
    taxonomies?: ToolComponent[];

    /**
     * An array of threadFlowLocation objects cached at run level.
     */
    threadFlowLocations?: ThreadFlowLocation[];

    /**
     * Information about the tool or tool pipeline that generated the results in this run. A run can only contain
     * results produced by a single tool or tool pipeline. A run can aggregate results from multiple log files, as long
     * as context around the tool run (tool command-line arguments and the like) is identical for all aggregated files.
     */
    tool: Tool;

    /**
     * The set of available translations of the localized data provided by the tool.
     */
    translations?: ToolComponent[];

    /**
     * Specifies the revision in version control of the artifacts that were scanned.
     */
    versionControlProvenance?: VersionControlDetails[];

    /**
     * An array of request objects cached at run level.
     */
    webRequests?: WebRequest[];

    /**
     * An array of response objects cached at run level.
     */
    webResponses?: WebResponse[];

    /**
     * Key/value pairs that provide additional information about the run.
     */
    properties?: PropertyBag;
}

export namespace Run {
    type columnKind =
        "utf16CodeUnits" |
        "unicodeCodePoints";
}

/**
 * Information that describes a run's identity and role within an engineering system process.
 */
export interface RunAutomationDetails {
    /**
     * A stable, unique identifier for the equivalence class of runs to which this object's containing run object
     * belongs in the form of a GUID.
     */
    correlationGuid?: string;

    /**
     * A description of the identity and role played within the engineering system by this object's containing run
     * object.
     */
    description?: Message;

    /**
     * A stable, unique identifer for this object's containing run object in the form of a GUID.
     */
    guid?: string;

    /**
     * A hierarchical string that uniquely identifies this object's containing run object.
     */
    id?: string;

    /**
     * Key/value pairs that provide additional information about the run automation details.
     */
    properties?: PropertyBag;
}

/**
 * Defines locations of special significance to SARIF consumers.
 */
export interface SpecialLocations {
    /**
     * Provides a suggestion to SARIF consumers to display file paths relative to the specified location.
     */
    displayBase?: ArtifactLocation;

    /**
     * Key/value pairs that provide additional information about the special locations.
     */
    properties?: PropertyBag;
}

/**
 * A call stack that is relevant to a result.
 */
export interface Stack {
    /**
     * An array of stack frames that represents a sequence of calls, rendered in reverse chronological order, that
     * comprise the call stack.
     */
    frames: StackFrame[];

    /**
     * A message relevant to this call stack.
     */
    message?: Message;

    /**
     * Key/value pairs that provide additional information about the stack.
     */
    properties?: PropertyBag;
}

/**
 * A function call within a stack trace.
 */
export interface StackFrame {
    /**
     * The location to which this stack frame refers.
     */
    location?: Location;

    /**
     * The name of the module that contains the code of this stack frame.
     */
    module?: string;

    /**
     * The parameters of the call that is executing.
     */
    parameters?: string[];

    /**
     * The thread identifier of the stack frame.
     */
    threadId?: number;

    /**
     * Key/value pairs that provide additional information about the stack frame.
     */
    properties?: PropertyBag;
}

/**
 * A suppression that is relevant to a result.
 */
export interface Suppression {
    /**
     * A stable, unique identifer for the suprression in the form of a GUID.
     */
    guid?: string;

    /**
     * A string representing the justification for the suppression.
     */
    justification?: string;

    /**
     * A string that indicates where the suppression is persisted.
     */
    kind: Suppression.kind;

    /**
     * Identifies the location associated with the suppression.
     */
    location?: Location;

    /**
     * A string that indicates the state of the suppression.
     */
    state?: Suppression.state;

    /**
     * Key/value pairs that provide additional information about the suppression.
     */
    properties?: PropertyBag;
}

export namespace Suppression {
    type kind =
        "inSource" |
        "external";

    type state =
        "accepted" |
        "underReview" |
        "rejected";
}

/**
 * Describes a sequence of code locations that specify a path through a single thread of execution such as an operating
 * system or fiber.
 */
export interface ThreadFlow {
    /**
     * An string that uniquely identifies the threadFlow within the codeFlow in which it occurs.
     */
    id?: string;

    /**
     * Values of relevant expressions at the start of the thread flow that remain constant.
     */
    immutableState?: { [key: string]: MultiformatMessageString };

    /**
     * Values of relevant expressions at the start of the thread flow that may change during thread flow execution.
     */
    initialState?: { [key: string]: MultiformatMessageString };

    /**
     * A temporally ordered array of 'threadFlowLocation' objects, each of which describes a location visited by the
     * tool while producing the result.
     */
    locations: ThreadFlowLocation[];

    /**
     * A message relevant to the thread flow.
     */
    message?: Message;

    /**
     * Key/value pairs that provide additional information about the thread flow.
     */
    properties?: PropertyBag;
}

/**
 * A location visited by an analysis tool while simulating or monitoring the execution of a program.
 */
export interface ThreadFlowLocation {
    /**
     * An integer representing the temporal order in which execution reached this location.
     */
    executionOrder?: number;

    /**
     * The Coordinated Universal Time (UTC) date and time at which this location was executed.
     */
    executionTimeUtc?: string;

    /**
     * Specifies the importance of this location in understanding the code flow in which it occurs. The order from most
     * to least important is "essential", "important", "unimportant". Default: "important".
     */
    importance?: ThreadFlowLocation.importance;

    /**
     * The index within the run threadFlowLocations array.
     */
    index?: number;

    /**
     * A set of distinct strings that categorize the thread flow location. Well-known kinds include 'acquire',
     * 'release', 'enter', 'exit', 'call', 'return', 'branch', 'implicit', 'false', 'true', 'caution', 'danger',
     * 'unknown', 'unreachable', 'taint', 'function', 'handler', 'lock', 'memory', 'resource', 'scope' and 'value'.
     */
    kinds?: string[];

    /**
     * The code location.
     */
    location?: Location;

    /**
     * The name of the module that contains the code that is executing.
     */
    module?: string;

    /**
     * An integer representing a containment hierarchy within the thread flow.
     */
    nestingLevel?: number;

    /**
     * The call stack leading to this location.
     */
    stack?: Stack;

    /**
     * A dictionary, each of whose keys specifies a variable or expression, the associated value of which represents
     * the variable or expression value. For an annotation of kind 'continuation', for example, this dictionary might
     * hold the current assumed values of a set of global variables.
     */
    state?: { [key: string]: MultiformatMessageString };

    /**
     * An array of references to rule or taxonomy reporting descriptors that are applicable to the thread flow
     * location.
     */
    taxa?: ReportingDescriptorReference[];

    /**
     * A web request associated with this thread flow location.
     */
    webRequest?: WebRequest;

    /**
     * A web response associated with this thread flow location.
     */
    webResponse?: WebResponse;

    /**
     * Key/value pairs that provide additional information about the threadflow location.
     */
    properties?: PropertyBag;
}

export namespace ThreadFlowLocation {
    type importance =
        "important" |
        "essential" |
        "unimportant";
}

/**
 * The analysis tool that was run.
 */
export interface Tool {
    /**
     * The analysis tool that was run.
     */
    driver: ToolComponent;

    /**
     * Tool extensions that contributed to or reconfigured the analysis tool that was run.
     */
    extensions?: ToolComponent[];

    /**
     * Key/value pairs that provide additional information about the tool.
     */
    properties?: PropertyBag;
}

/**
 * A component, such as a plug-in or the driver, of the analysis tool that was run.
 */
export interface ToolComponent {
    /**
     * The component which is strongly associated with this component. For a translation, this refers to the component
     * which has been translated. For an extension, this is the driver that provides the extension's plugin model.
     */
    associatedComponent?: ToolComponentReference;

    /**
     * The kinds of data contained in this object.
     */
    contents?: ToolComponent.contents[];

    /**
     * The binary version of the tool component's primary executable file expressed as four non-negative integers
     * separated by a period (for operating systems that express file versions in this way).
     */
    dottedQuadFileVersion?: string;

    /**
     * The absolute URI from which the tool component can be downloaded.
     */
    downloadUri?: string;

    /**
     * A comprehensive description of the tool component.
     */
    fullDescription?: MultiformatMessageString;

    /**
     * The name of the tool component along with its version and any other useful identifying information, such as its
     * locale.
     */
    fullName?: string;

    /**
     * A dictionary, each of whose keys is a resource identifier and each of whose values is a multiformatMessageString
     * object, which holds message strings in plain text and (optionally) Markdown format. The strings can include
     * placeholders, which can be used to construct a message in combination with an arbitrary number of additional
     * string arguments.
     */
    globalMessageStrings?: { [key: string]: MultiformatMessageString };

    /**
     * A unique identifer for the tool component in the form of a GUID.
     */
    guid?: string;

    /**
     * The absolute URI at which information about this version of the tool component can be found.
     */
    informationUri?: string;

    /**
     * Specifies whether this object contains a complete definition of the localizable and/or non-localizable data for
     * this component, as opposed to including only data that is relevant to the results persisted to this log file.
     */
    isComprehensive?: boolean;

    /**
     * The language of the messages emitted into the log file during this run (expressed as an ISO 639-1 two-letter
     * lowercase language code) and an optional region (expressed as an ISO 3166-1 two-letter uppercase subculture code
     * associated with a country or region). The casing is recommended but not required (in order for this data to
     * conform to RFC5646).
     */
    language?: string;

    /**
     * The semantic version of the localized strings defined in this component; maintained by components that provide
     * translations.
     */
    localizedDataSemanticVersion?: string;

    /**
     * An array of the artifactLocation objects associated with the tool component.
     */
    locations?: ArtifactLocation[];

    /**
     * The minimum value of localizedDataSemanticVersion required in translations consumed by this component; used by
     * components that consume translations.
     */
    minimumRequiredLocalizedDataSemanticVersion?: string;

    /**
     * The name of the tool component.
     */
    name: string;

    /**
     * An array of reportingDescriptor objects relevant to the notifications related to the configuration and runtime
     * execution of the tool component.
     */
    notifications?: ReportingDescriptor[];

    /**
     * The organization or company that produced the tool component.
     */
    organization?: string;

    /**
     * A product suite to which the tool component belongs.
     */
    product?: string;

    /**
     * A localizable string containing the name of the suite of products to which the tool component belongs.
     */
    productSuite?: string;

    /**
     * A string specifying the UTC date (and optionally, the time) of the component's release.
     */
    releaseDateUtc?: string;

    /**
     * An array of reportingDescriptor objects relevant to the analysis performed by the tool component.
     */
    rules?: ReportingDescriptor[];

    /**
     * The tool component version in the format specified by Semantic Versioning 2.0.
     */
    semanticVersion?: string;

    /**
     * A brief description of the tool component.
     */
    shortDescription?: MultiformatMessageString;

    /**
     * An array of toolComponentReference objects to declare the taxonomies supported by the tool component.
     */
    supportedTaxonomies?: ToolComponentReference[];

    /**
     * An array of reportingDescriptor objects relevant to the definitions of both standalone and tool-defined
     * taxonomies.
     */
    taxa?: ReportingDescriptor[];

    /**
     * Translation metadata, required for a translation, not populated by other component types.
     */
    translationMetadata?: TranslationMetadata;

    /**
     * The tool component version, in whatever format the component natively provides.
     */
    version?: string;

    /**
     * Key/value pairs that provide additional information about the tool component.
     */
    properties?: PropertyBag;
}

export namespace ToolComponent {
    type contents =
        "localizedData" |
        "nonLocalizedData";
}

/**
 * Identifies a particular toolComponent object, either the driver or an extension.
 */
export interface ToolComponentReference {
    /**
     * The 'guid' property of the referenced toolComponent.
     */
    guid?: string;

    /**
     * An index into the referenced toolComponent in tool.extensions.
     */
    index?: number;

    /**
     * The 'name' property of the referenced toolComponent.
     */
    name?: string;

    /**
     * Key/value pairs that provide additional information about the toolComponentReference.
     */
    properties?: PropertyBag;
}

/**
 * Provides additional metadata related to translation.
 */
export interface TranslationMetadata {
    /**
     * The absolute URI from which the translation metadata can be downloaded.
     */
    downloadUri?: string;

    /**
     * A comprehensive description of the translation metadata.
     */
    fullDescription?: MultiformatMessageString;

    /**
     * The full name associated with the translation metadata.
     */
    fullName?: string;

    /**
     * The absolute URI from which information related to the translation metadata can be downloaded.
     */
    informationUri?: string;

    /**
     * The name associated with the translation metadata.
     */
    name: string;

    /**
     * A brief description of the translation metadata.
     */
    shortDescription?: MultiformatMessageString;

    /**
     * Key/value pairs that provide additional information about the translation metadata.
     */
    properties?: PropertyBag;
}

/**
 * Specifies the information necessary to retrieve a desired revision from a version control system.
 */
export interface VersionControlDetails {
    /**
     * A Coordinated Universal Time (UTC) date and time that can be used to synchronize an enlistment to the state of
     * the repository at that time.
     */
    asOfTimeUtc?: string;

    /**
     * The name of a branch containing the revision.
     */
    branch?: string;

    /**
     * The location in the local file system to which the root of the repository was mapped at the time of the
     * analysis.
     */
    mappedTo?: ArtifactLocation;

    /**
     * The absolute URI of the repository.
     */
    repositoryUri: string;

    /**
     * A string that uniquely and permanently identifies the revision within the repository.
     */
    revisionId?: string;

    /**
     * A tag that has been applied to the revision.
     */
    revisionTag?: string;

    /**
     * Key/value pairs that provide additional information about the version control details.
     */
    properties?: PropertyBag;
}

/**
 * Describes an HTTP request.
 */
export interface WebRequest {
    /**
     * The body of the request.
     */
    body?: ArtifactContent;

    /**
     * The request headers.
     */
    headers?: { [key: string]: string };

    /**
     * The index within the run.webRequests array of the request object associated with this result.
     */
    index?: number;

    /**
     * The HTTP method. Well-known values are 'GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS', 'TRACE',
     * 'CONNECT'.
     */
    method?: string;

    /**
     * The request parameters.
     */
    parameters?: { [key: string]: string };

    /**
     * The request protocol. Example: 'http'.
     */
    protocol?: string;

    /**
     * The target of the request.
     */
    target?: string;

    /**
     * The request version. Example: '1.1'.
     */
    version?: string;

    /**
     * Key/value pairs that provide additional information about the request.
     */
    properties?: PropertyBag;
}

/**
 * Describes the response to an HTTP request.
 */
export interface WebResponse {
    /**
     * The body of the response.
     */
    body?: ArtifactContent;

    /**
     * The response headers.
     */
    headers?: { [key: string]: string };

    /**
     * The index within the run.webResponses array of the response object associated with this result.
     */
    index?: number;

    /**
     * Specifies whether a response was received from the server.
     */
    noResponseReceived?: boolean;

    /**
     * The response protocol. Example: 'http'.
     */
    protocol?: string;

    /**
     * The response reason. Example: 'Not found'.
     */
    reasonPhrase?: string;

    /**
     * The response status code. Example: 451.
     */
    statusCode?: number;

    /**
     * The response version. Example: '1.1'.
     */
    version?: string;

    /**
     * Key/value pairs that provide additional information about the response.
     */
    properties?: PropertyBag;
}
