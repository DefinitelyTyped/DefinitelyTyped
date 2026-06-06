import { Component } from "react";

declare namespace ReactGitHubButton {
    interface ReactReactGitHubButtonProps {
        /**
         * The type of information to display
         */
        type: "stargazers" | "watchers" | "forks";
        /**
         * Your GitHub id or organization name.
         */
        namespace: string;
        /**
         * The name of your repository.
         */
        repo: string;
        /**
         * The size of the button. Leave undefined for default.
         */
        size?: "large" | undefined;
        /**
         * Optional classname for styling the button.
         */
        className?: string | undefined;
    }
}

declare class ReactGitHubButton extends Component<ReactGitHubButton.ReactReactGitHubButtonProps> {}

export = ReactGitHubButton;
