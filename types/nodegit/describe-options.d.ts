export class DescribeOptions {
    version?: number | undefined;
    maxCandidatesTags?: number | undefined;
    describeStrategy?: number | undefined;
    pattern?: string | undefined;
    onlyFollowFirstParent?: number | undefined;
    showCommitOidAsFallback?: number | undefined;
    [key: string]: any;
}
