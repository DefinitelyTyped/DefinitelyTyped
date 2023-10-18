import { Component } from "react";

export interface ReactGitHubButtonProps {
    /**
     * The type of information to display
     */
    type: "stargazers" | "watchers" | "forks";
    /**
     * The size of the button. Leave undefined for default.
     */
    size?: "large" | undefined;
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
