import getBranchName, { CurrentGitBranchOptions } from 'current-git-branch';

// test data
const emptyOptions: CurrentGitBranchOptions = {};
const filledOptions: CurrentGitBranchOptions = {altPath: '', branchOptions: ''};

// tests
getBranchName();
getBranchName(emptyOptions);
getBranchName(filledOptions);
getBranchName('');
getBranchName(['']);
