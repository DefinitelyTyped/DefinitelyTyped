// Type definitions for non-npm package Sarif 2.0
// Project: https://github.com/Microsoft/sarif-sdk
// Definitions by: Rusty Scrivens <https://github.com/rscrivens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/**
 * Static Analysis Results Format (SARIF) Version 2.0.0-csd.2.beta-2019-01-24 JSON Schema: a standard format for the
 * output of static analysis tools.
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
     * Key/value pairs that provide additional information about the log file.
     */
    properties?: PropertyBag;
}

export namespace Log {
    type version =
        "2.0.0-csd.2.beta.2019-01-24";
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
        "toolComponent" |
        "attachment" |
        "responseFile" |
        "resultFile" |
        "standardStream" |
        "traceFile" |
        "unmodifiedFile" |
        "modifiedFile" |
        "addedFile" |
        "deletedFile" |
        "renamedFile" |
        "uncontrolledFile";
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
     * The index within the run artifacts array of the artifact object associated with the artifact location.
     */
    index?: number;

    /**
     * A string containing a valid relative or absolute URI.
     */
    uri: string;

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
 * An artifact relevant to a tool invocation or to a result.
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
    finalState?: { [key: string]: string };

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
 * TBD
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
    message?: Message;

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
 * TBD
 */
export interface ExternalPropertyFile {
    /**
     * The location of the external property file.
     */
    artifactLocation?: ArtifactLocation;

    /**
     * A stable, unique identifer for the external property file in the form of a GUID.
     */
    instanceGuid?: string;

    /**
     * A non-negative integer specifying the number of items contained in the external property file.
     */
    itemCount?: number;

    /**
     * Key/value pairs that provide additional information about the external property file.
     */
    properties?: PropertyBag;
}

/**
 * References to external property files that should be inlined with the content of a root log file.
 */
export interface ExternalPropertyFiles {
    /**
     * An array of external property files containing run.artifacts arrays to be merged with the root log file.
     */
    artifacts?: ExternalPropertyFile[];

    /**
     * An external property file containing a run.conversion object to be merged with the root log file.
     */
    conversion?: ExternalPropertyFile;

    /**
     * An external property file containing a run.properties object to be merged with the root log file.
     */
    externalizedProperties?: ExternalPropertyFile;

    /**
     * An external property file containing a run.graphs object to be merged with the root log file.
     */
    graphs?: ExternalPropertyFile;

    /**
     * An array of external property files containing run.invocations arrays to be merged with the root log file.
     */
    invocations?: ExternalPropertyFile[];

    /**
     * An array of external property files containing run.logicalLocations arrays to be merged with the root log file.
     */
    logicalLocations?: ExternalPropertyFile[];

    /**
     * An array of external property files containing run.results arrays to be merged with the root log file.
     */
    results?: ExternalPropertyFile[];

    /**
     * An external property file containing a run.tool object to be merged with the root log file.
     */
    tool?: ExternalPropertyFile;
}

/**
 * A proposed fix for the problem represented by a result object. A fix specifies a set of artifacts to modify. For
 * each artifact, it specifies a set of bytes to remove, and provides a set of new bytes to replace them.
 */
export interface Fix {
    /**
     * One or more artifact changes that comprise a fix for a result.
     */
    changes: ArtifactChange[];

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
     * A string that uniquely identifies the graph within a run.graphs or result.graphs array.
     */
    id: string;

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
     * A string that uniquely identifies that graph being traversed.
     */
    graphId: string;

    /**
     * Values of relevant expressions at the start of the graph traversal.
     */
    initialState?: { [key: string]: string };

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
     * A set of artifacts relevant to the invocation of the tool.
     */
    attachments?: Attachment[];

    /**
     * The command line used to invoke the tool.
     */
    commandLine?: string;

    /**
     * A list of conditions detected by the tool that are relevant to the tool's configuration.
     */
    configurationNotifications?: Notification[];

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
     * The process id for the analysis tool run.
     */
    processId?: number;

    /**
     * The reason given by the operating system that the process failed to start.
     */
    processStartFailureMessage?: string;

    /**
     * An array of reportingConfigurationOverride objects that describe runtime reporting behavior.
     */
    reportingConfigurationOverrides?: ReportingConfigurationOverride[];

    /**
     * The locations of any response files specified on the tool's command line.
     */
    responseFiles?: ArtifactLocation[];

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
     * A value indicating whether the tool's execution completed successfully.
     */
    toolExecutionSuccessful?: boolean;

    /**
     * A list of runtime conditions detected by the tool during the analysis.
     */
    toolNotifications?: Notification[];

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
     * The human-readable fully qualified name of the logical location. If run.logicalLocations is present, this value
     * matches a property name within that object, from which further information about the logical location can be
     * obtained.
     */
    fullyQualifiedLogicalName?: string;

    /**
     * The index within the logical locations array of the logical location associated with the result.
     */
    logicalLocationIndex?: number;

    /**
     * A message relevant to the location.
     */
    message?: Message;

    /**
     * Identifies the artifact and region.
     */
    physicalLocation?: PhysicalLocation;

    /**
     * Key/value pairs that provide additional information about the location.
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
     * The type of construct this logical location component refers to. Should be one of 'function', 'member',
     * 'module', 'namespace', 'parameter', 'resource', 'returnType', 'type', or 'variable', if any of those accurately
     * describe the construct.
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
     * A Markdown message string.
     */
    markdown?: string;

    /**
     * The resource id for a plain text or Markdown message string.
     */
    messageId?: string;

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
    text?: string;

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
     * The runtime exception, if any, relevant to this notification.
     */
    exception?: Exception;

    /**
     * An identifier for the condition that was encountered.
     */
    id?: string;

    /**
     * A value specifying the severity level of the notification.
     */
    level?: Notification.level;

    /**
     * A message that describes the condition that was encountered.
     */
    message: Message;

    /**
     * The artifact and region relevant to this notification.
     */
    physicalLocation?: PhysicalLocation;

    /**
     * The stable, unique identifier of the rule, if any, to which this notification is relevant.
     */
    ruleId?: string;

    /**
     * The index within the run resources array of the rule object, if any, associated with this notification.
     */
    ruleIndex?: number;

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
     * The location of the artifact.
     */
    artifactLocation: ArtifactLocation;

    /**
     * Specifies a portion of the artifact that encloses the region. Allows a viewer to display additional context
     * around the region.
     */
    contextRegion?: Region;

    /**
     * Value that distinguishes this physical location from all other physical locations in this run object.
     */
    id?: number;

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
 * Information about a tool report that can be configured at runtime.
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
 * Information about how a specific tool report was reconfigured at runtime.
 */
export interface ReportingConfigurationOverride {
    /**
     * Specifies how the report was configured during the scan.
     */
    configuration?: ReportingConfiguration;

    /**
     * The index within the run.tool.extensions array of the toolComponent object which describes the plug-in or tool
     * extension that produced the report.
     */
    extensionIndex?: number;

    /**
     * The index within the toolComponent.notificationDescriptors array of the reportingDescriptor associated with this
     * override.
     */
    notificationIndex?: number;

    /**
     * The index within the toolComponent.ruleDescriptors array of the reportingDescriptor associated with this
     * override.
     */
    ruleIndex?: number;

    /**
     * Key/value pairs that provide additional information about the reporting configuration.
     */
    properties?: PropertyBag;
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
     * An array of stable, opaque identifiers by which this report was known in some previous version of the analysis
     * tool.
     */
    deprecatedIds?: string[];

    /**
     * A description of the report. Should, as far as possible, provide details sufficient to enable resolution of any
     * problem indicated by the result.
     */
    fullDescription?: Message;

    /**
     * Provides the primary documentation for the report, useful when there is no online documentation.
     */
    help?: Message;

    /**
     * A URI where the primary documentation for the report can be found.
     */
    helpUri?: string;

    /**
     * A stable, opaque identifier for the report.
     */
    id?: string;

    /**
     * A set of name/value pairs with arbitrary names. Each value is a multiformatMessageString object, which holds
     * message strings in plain text and (optionally) Markdown format. The strings can include placeholders, which can
     * be used to construct a message in combination with an arbitrary number of additional string arguments.
     */
    messageStrings?: { [key: string]: MultiformatMessageString };

    /**
     * A report identifier that is understandable to an end user.
     */
    name?: Message;

    /**
     * A concise description of the report. Should be a single sentence that is understandable when visible space is
     * limited to a single line of text.
     */
    shortDescription?: Message;

    /**
     * Key/value pairs that provide additional information about the report.
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
     * A dictionary, each of whose keys is the id of a graph and each of whose values is a 'graph' object with that id.
     */
    graphs?: { [key: string]: Graph };

    /**
     * An array of one or more unique 'graphTraversal' objects.
     */
    graphTraversals?: GraphTraversal[];

    /**
     * An absolute URI at which the result can be viewed.
     */
    hostedViewerUri?: string;

    /**
     * A stable, unique identifer for the result in the form of a GUID.
     */
    instanceGuid?: string;

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
     * The index within the run.tool.extensions array of the tool component object which describes the plug-in or tool
     * extension that produced the result.
     */
    ruleExtensionIndex?: number;

    /**
     * The stable, unique identifier of the rule, if any, to which this notification is relevant. This member can be
     * used to retrieve rule metadata from the rules dictionary, if it exists.
     */
    ruleId?: string;

    /**
     * The index within the run resources array of the rule object associated with this result.
     */
    ruleIndex?: number;

    /**
     * An array of 'stack' objects relevant to the result.
     */
    stacks?: Stack[];

    /**
     * A set of flags indicating one or more suppression conditions.
     */
    suppressionStates?: Result.suppressionStates[];

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
        "none" |
        "notApplicable" |
        "pass" |
        "fail" |
        "review" |
        "open";

    type level =
        "none" |
        "note" |
        "warning" |
        "error";

    type suppressionStates =
        "suppressedInSource" |
        "suppressedExternally";

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
     * A GUID-valued string equal to the id.instanceGuid property of the run in which the result was first detected.
     */
    firstDetectionRunInstanceGuid?: string;

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
     * A GUID-valued string equal to the id.instanceGuid property of the run in which the result was most recently
     * detected.
     */
    lastDetectionRunInstanceGuid?: string;

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
     * Automation details that describe the aggregate of runs to which this run belongs.
     */
    aggregateIds?: RunAutomationDetails[];

    /**
     * An array of artifact objects relevant to the run.
     */
    artifacts?: Artifact[];

    /**
     * The 'instanceGuid' property of a previous SARIF 'run' that comprises the baseline that was used to compute
     * result 'baselineState' properties for the run.
     */
    baselineInstanceGuid?: string;

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
    defaultFileEncoding?: string;

    /**
     * Specifies the default source language for any artifact object that refers to a text file that contains source
     * code.
     */
    defaultSourceLanguage?: string;

    /**
     * References to external property files that should be inlined with the content of a root log file.
     */
    externalPropertyFiles?: ExternalPropertyFiles;

    /**
     * A dictionary, each of whose keys is the id of a graph and each of whose values is a 'graph' object with that id.
     */
    graphs?: { [key: string]: Graph };

    /**
     * Automation details that describe this run.
     */
    id?: RunAutomationDetails;

    /**
     * Describes the invocation of the analysis tool.
     */
    invocations?: Invocation[];

    /**
     * An array of logical locations such as namespaces, types or functions.
     */
    logicalLocations?: LogicalLocation[];

    /**
     * The MIME type of all Markdown text message properties in the run. Default: "text/markdown;variant=GFM"
     */
    markdownMessageMimeType?: string;

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
     * The string used to replace sensitive information in a redaction-aware property.
     */
    redactionToken?: string;

    /**
     * The set of results contained in an SARIF log. The results array can be omitted when a run is solely exporting
     * rules metadata. It must be present (but may be empty) if a log file represents an actual scan.
     */
    results?: Result[];

    /**
     * Information about the tool or tool pipeline that generated the results in this run. A run can only contain
     * results produced by a single tool or tool pipeline. A run can aggregate results from multiple log files, as long
     * as context around the tool run (tool command-line arguments and the like) is identical for all aggregated files.
     */
    tool: Tool;

    /**
     * Specifies the revision in version control of the artifacts that were scanned.
     */
    versionControlProvenance?: VersionControlDetails[];

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
    instanceGuid?: string;

    /**
     * A hierarchical string that uniquely identifies this object's containing run object.
     */
    instanceId?: string;

    /**
     * Key/value pairs that provide additional information about the run automation details.
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
     * The address of the method or function that is executing.
     */
    address?: number;

    /**
     * The location to which this stack frame refers.
     */
    location?: Location;

    /**
     * The name of the module that contains the code of this stack frame.
     */
    module?: string;

    /**
     * The offset from the method or function that is executing.
     */
    offset?: number;

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
 * TBD
 */
export interface ThreadFlow {
    /**
     * An string that uniquely identifies the threadFlow within the codeFlow in which it occurs.
     */
    id?: string;

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
     * A set of distinct strings that categorize the thread flow location. Well-known kinds include acquire, release,
     * enter, exit, call, return, branch, implicit, false, true, caution, danger, unknown, unreachable, taint,
     * function, handler, lock, memory, resource, and scope.
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
    state?: { [key: string]: string };

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
     * The tool language (expressed as an ISO 649 two-letter lowercase culture code) and region (expressed as an ISO
     * 3166 two-letter uppercase subculture code associated with a country or region).
     */
    language?: string;

    /**
     * Key/value pairs that provide additional information about the tool.
     */
    properties?: PropertyBag;
}

/**
 * A component, such as a plug-in or the default driver, of the analysis tool that was run.
 */
export interface ToolComponent {
    /**
     * The index within the run artifacts array of the artifact object associated with the component.
     */
    artifactIndex?: number;

    /**
     * The binary version of the component's primary executable file expressed as four non-negative integers separated
     * by a period (for operating systems that express file versions in this way).
     */
    dottedQuadFileVersion?: string;

    /**
     * The absolute URI from which the component can be downloaded.
     */
    downloadUri?: string;

    /**
     * The name of the component along with its version and any other useful identifying information, such as its
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
     * The name of the component.
     */
    name: string;

    /**
     * An array of reportDescriptor objects relevant to the notifications related to the configuration and runtime
     * execution of the component.
     */
    notificationDescriptors?: ReportingDescriptor[];

    /**
     * An array of reportDescriptor objects relevant to the analysis performed by the component.
     */
    ruleDescriptors?: ReportingDescriptor[];

    /**
     * The component version in the format specified by Semantic Versioning 2.0.
     */
    semanticVersion?: string;

    /**
     * The component version, in whatever format the component natively provides.
     */
    version?: string;

    /**
     * Key/value pairs that provide additional information about the component.
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
