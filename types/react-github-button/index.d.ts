// Type definitions for react-github-button 0.1
// Project: https://github.com/benjycui/react-github-button#readme
// Definitions by: Ifiok Jr. <https://github.com/ifiokjr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from 'react';

export interface ReactGitHubButtonProps {
    /**
     * The type of information to display
     */
    type: 'stargazers' | 'watchers' | 'forks';
    /**
     * The size of the button. Leave undefined for default.
     */
    size?: 'large';
    /**
     * Your GitHub id or organization name.
     */
    namespace: string;
    /**
     * The name of your repository.
     */
    repo: string;
}

export default class GitHubButton extends Component<ReactGitHubButtonProps> {}
