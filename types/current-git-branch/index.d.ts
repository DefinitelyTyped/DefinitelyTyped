declare namespace CurrentGitBranch {
    type CurrentGitBranchOptions = CurrentGitBranchOptionsObject | string[] | string;
    type CurrentGitBranchResult = string | false;

    interface CurrentGitBranchOptionsObject {
        altPath?: string | undefined;
        branchOptions?: string | undefined;
    }
}

declare function CurrentGitBranch(
    args?: CurrentGitBranch.CurrentGitBranchOptions,
): CurrentGitBranch.CurrentGitBranchResult;

export = CurrentGitBranch;
