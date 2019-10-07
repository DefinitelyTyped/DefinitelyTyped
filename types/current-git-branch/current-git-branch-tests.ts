import getBranchName from 'current-git-branch';

getBranchName();
getBranchName({altPath: '', branchOptions: ''});
getBranchName({});
getBranchName('');
getBranchName(['']);
