// Type definitions for Github API
// Project: https://api.github.com
// Definitions by: ttowncompiled <https://github.com/ttowncompiled>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Commit {
  label: string;
  ref: string;
  repo: Repository;
  sha: string;
  user: User;
}

interface Issue {
  assignee: User;
  body: string;
  /** Datetime format */
  closed_at: string;
  comments: number;
  comments_url: string;
  /** Datetime format */
  created_at: string; 
  events_url: string; 
  html_url: string; 
  id: number; 
  labels: Label[];
  labels_url: string;
  locked: boolean;
  milestone: Milestone;
  number: number;
  state: string;
  title: string;
  updated_at: string;
  url: string;
  user: User;
}

interface Label {
  color: string;
  name: string;
  url: string;
}

interface Milestone {
  /** Datetime format */
  closed_at: string;
  closed_issues: number;
  /** Datetime format */
  created_at: string;
  creator: User;
  description: string;
  /** Datetime format */
  due_on: string;
  html_url: string;
  id: number;
  labels_url: string;
  number: number;
  open_issues: number;
  state: string;
  title: string;
  /** Datetime format */
  updated_at: string;
  url: string;
}

interface PullRequest {
  assignee: User;
  base: Commit;
  body: string;
  /** Datetime format */
  closed_at: string;
  comments_url: string; 
  commits_url: string; 
  /** Datetime format */
  created_at: string; 
  diff_url: string; 
  head: Commit;
  html_url: string; 
  id: number; 
  issue_url: string; 
  locked: boolean; 
  merge_commit_sha: string; 
  /** Datetime format */
  merged_at: string; 
  milestone: Milestone;
  number: number; 
  patch_url: string; 
  review_comment_url: string; 
  review_comments_url: string; 
  state: string; 
  statuses_url: string; 
  title: string; 
  /** Datetime format */
  updated_at: string; 
  url: string;
  user: User;
}

interface Repository {
  archive_url: string;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  clone_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  /** Datetime format */
  created_at: string;
  default_branch: string;
  description: string;
  downloads_url: string;
  events_url: string;
  fork: boolean;
  forks: number;
  forks_count: number;
  forks_url: string;
  full_name: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  has_downloads: boolean;
  has_issues: boolean;
  has_pages: boolean;
  has_wiki: boolean;
  homepage: string;
  hooks_url: string;
  html_url: string;
  id: number;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  language: string;
  language_url: string;
  merges_url: string;
  milestones_url: string;
  mirror_url: string;
  name: string;
  notifications_url: string;
  open_issues: number;
  open_issues_count: number;
  owner: User;
  private: boolean;
  pulls_url: string;
  /** Datetime format */
  pushed_at: string;
  releases_url: string;
  size: number;
  ssh_url: string;
  stargazers_count: number;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  svn_url: string;
  tags_url: string;
  teams_url: string;
  trees_url: string;
  /** Datetime format */
  updated_at: string;
  url: string;
  watchers: number;
  watchers_count: number;
}

interface User {
  avatar_url: string;
  events_url: string;
  followers_url: string; 
  following_url: string; 
  gists_url: string; 
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

