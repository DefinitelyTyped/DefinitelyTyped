/** Metrics information for projects/packages/files/classes. */
export interface ClassMetrics {
    /** the cyclomatic complexity */
    complexity?: number;
    /** the number of contained conditionals (2 * number of branches) */
    conditionals: number;
    /** the number of contained conditionals (2 * number of branches) with coverage */
    coveredconditionals: number;
    /** the number of contained statements, conditionals and methods */
    elements: number;
    /** the number of contained statements, conditionals and methods with coverage */
    coveredelements: number;
    /** the number of contained statements */
    statements: number;
    /** the number of contained statements with coverage */
    coveredstatements: number;
    /** the number of contained methods */
    methods: number;
    /** the number of contained methods with coverage */
    coveredmethods: number;
    /** the total duration of all contained test methods */
    testduration?: number;
    /** the total number of test method failures */
    testfailures?: number;
    /** the total number of test method passes */
    testpasses?: number;
    /** the total number of test methods run */
    testruns?: number;
}

/** Metrics information for projects/packages/files. */
export interface FileMetrics extends ClassMetrics {
    classes?: number;
    /** the total number of lines of code */
    loc?: number;
    /** the total number of non-comment lines of code */
    ncloc?: number;
}

/** Metrics information for projects/packages. */
export interface PackageMetrics extends FileMetrics {
    /** the total number of contained files */
    files?: number;
}

/** Metrics information for projects. */
export interface ProjectMetrics extends PackageMetrics {
    /** the total number of packages */
    files?: number;
}

/** Metrics information for projects/packages/files/classes. */
export type Metrics =
    | ClassMetrics
    | FileMetrics
    | PackageMetrics
    | ProjectMetrics;

/**
 * Top-most element describing the coverage report.
 * Contains a project and a test project.
 */
export interface Coverage {
    /** version number */
    clover: string;
    /** seconds since UTC Epoch */
    generated: number;
}

/** Project metrics relating to test source. */
export interface Project {
    /** project name (optional) */
    name?: string;
    /** seconds since UTC */
    timestamp: number;
}

export interface Package {
    /** the.package.name */
    name: string;
}

export interface File {
    /** the file name e.g. Foo.java or Bar.groovy */
    name: string;
    /** the filesystem-specific original path to the file e.g. c:\path\to\Bar.groovy */
    path: string;
}

export interface Class {
    /** the unqualified class name */
    name: string;
}

/** Line-specific information. */
export interface Method {
    /** the line number */
    num: number;
    /** the type of syntactic construct */
    type: "method";
    /** the cyclomatic complexity of the construct */
    complexity?: number;
    /** the number of times the construct was executed */
    count?: number;
    /** the signature of the method */
    signature?: string;
    /** only applicable if the method was identified as a test method; the duration of the test */
    testduration?: number;
    /** only applicable if the method was identified as a test method; true if the test passed, false otherwise */
    testsuccess?: boolean;
    /** visibility */
    visibility?: "private" | "protected" | "package" | "public";
}

/** Line-specific information. */
export interface Statement {
    /** the line number */
    num: number;
    /** the type of syntactic construct */
    type: "stmt";
    /** the number of times the construct was executed */
    count?: number;
}

/** Line-specific information. */
export interface Condition {
    /** the line number */
    num: number;
    /** the type of syntactic construct */
    type: "cond";
    /** the number of times the true branch was executed */
    truecount?: number;
    /** the number of times the false branch was executed */
    falsecount?: number;
}

/** Line-specific information. */
export type Line = Method | Statement | Condition;

export interface Elements {
    coverage: Coverage;
    project: Project;
    testproject: Project;
    metrics: Metrics;
    package: Package;
    file: File;
    class: Class;
    line: Line;
}
