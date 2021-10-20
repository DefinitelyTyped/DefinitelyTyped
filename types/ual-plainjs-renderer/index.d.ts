// Type definitions for ual-plainjs-renderer
// Project: https://github.com/EOSIO/ual-plainjs-renderer
// Definitions by: The actual authors and contributors of the repo <https://github.com/EOSIO/ual-plainjs-renderer>
//                 Stefan Ginev <https://github.com/sginev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "UALJsAbstractBaseComponent" {
    export abstract class UALJsAbstractBaseComponent {
        protected dom: HTMLElement;
        protected styleElement: HTMLStyleElement;
        protected options: any;
        /**
         * Creates component container and attaches generated dom to it
         */
        constructor(options?: any);
        /**
         * Shows the component
         */
        show(): void;
        /**
         * Hides the component
         */
        hide(): void;
        /**
         * Return styles this component needs to display properly
         */
        protected abstract generateStyles(): string;
        /**
         * Generates and returns dom of the Components
         */
        protected abstract generateDom(): HTMLElement;
        /**
         * Attaches the dom of the component to the provided parent
         * element
         *
         * @param parent element the component dom should attach to
         */
        attach(parent: HTMLElement): void;
        /**
         * Helper method to return the parent of the component
         */
        getComponentElement(): HTMLElement;
    }
}

declare module "components/AuthButton" {
    import { Authenticator } from 'universal-authenticator-library';
    import { UALJsAbstractBaseComponent } from "UALJsAbstractBaseComponent";
    interface AuthButtonOptions {
        authenticator: Authenticator;
        showDownload?: boolean;
        key?: number;
        onClick?: (e: Event) => void;
    }
    export class AuthButton extends UALJsAbstractBaseComponent {
        /**
         * Constructs an Auth Button
         *
         * @param authButtonOptions { authenticator, showDownload, key, onClick }
         */
        constructor(authButtonOptions: AuthButtonOptions);
        protected generateStyles(): string;
        /**
         * Renders Button element based on current state of authenticator
         */
        protected generateDom(): HTMLElement;
    }
}

declare module "components/AccountInputModal" {
    import { Authenticator } from 'universal-authenticator-library';
    import { UALJsAbstractBaseComponent } from "UALJsAbstractBaseComponent";
    export interface AccountInputModalOptions {
        onGoBack: () => void;
        onClose: () => void;
    }
    /**
     * @param options { onGoBack, onClose } // goback and close callbacks
     */
    export class AccountInputModal extends UALJsAbstractBaseComponent {
        constructor(options: AccountInputModalOptions);
        protected generateStyles(): string;
        /**
         * Generates the Modal DOM, binds go-back, and close handlers
         */
        protected generateDom(): HTMLElement;
        /**
         * Sets and displays account input error
         *
         * @param inputError Error message to show
         */
        private showAccountNameInputError;
        /**
         * Clears account input error and hides it
         */
        private clearAccountNameInputError;
        private getInputField;
        /**
         * Displays the input modal and ties it to the authenticator requesting
         * username.  Then calls login callback to complete login when clicked.
         *
         * @param authenticator Authenticator you wiish to login with
         * @param login login callback passed from UAL
         */
        showInput(authenticator: Authenticator, login: any): void;
    }
}

declare module "components/DownloadAuthenticatorModal" {
    import { Authenticator } from 'universal-authenticator-library';
    import { UALJsAbstractBaseComponent } from "UALJsAbstractBaseComponent";
    interface DownloadAuthenticatorModalOptions {
        onGoBack: () => void;
        onClose: () => void;
    }
    export class DownloadAuthenticatorModal extends UALJsAbstractBaseComponent {
        /**
         *
         * @param options { onGoBack, onClose } // goback and close callbacks
         */
        constructor(options: DownloadAuthenticatorModalOptions);
        close(): void;
        /**
         * Show the download modal and provide a download button for the provided authenticator
         *
         * @param authenticator Authenticator this modal represents
         */
        open(authenticator: Authenticator): void;
        goBack(): void;
        protected generateStyles(): string;
        /**
         * Generates the Modal DOM, binds go-back, and close handlers
         */
        protected generateDom(): HTMLElement;
    }
}

declare module "components/GetAuthenticatorModal" {
    import { Authenticator } from 'universal-authenticator-library';
    import { UALJsAbstractBaseComponent } from "UALJsAbstractBaseComponent";
    interface GetAuthenticatorModalOptions {
        authenticators: Authenticator[];
        onClose: () => void;
        onDownloadClick: (authenticator: Authenticator) => void;
        onResetAuthenticatorsClick: () => void;
    }
    export class GetAuthenticatorModal extends UALJsAbstractBaseComponent {
        /**
         *
         * @param getAuthenticatorModalOptions { authenticators, onClose, onDownloadClick, onResetAuthenticatorsClick }
         */
        constructor(getAuthenticatorModalOptions: GetAuthenticatorModalOptions);
        protected generateStyles(): string;
        private onDownloadClick;
        close(): void;
        open(): void;
        /**
         * Generates the Modal DOM, binds go-back, and close handlers, creates and renders Download Authenticator buttons
         */
        protected generateDom(): HTMLElement;
    }
}

declare module "components/MessageModal" {
    import { UALJsAbstractBaseComponent } from "UALJsAbstractBaseComponent";
    export enum MessageTypes {
        ERROR = 1,
        SUCCESS = 2
    }
    export interface ModalMessage {
        title?: string;
        message: string;
        type?: MessageTypes;
        onClose?: any;
    }
    export class MessageModal extends UALJsAbstractBaseComponent {
        private onClose;
        generateStyles(): string;
        /**
         * Generates the Modal DOM and binds close handler
         */
        protected generateDom(): HTMLElement;
        /**
         * Sets the message content of the modal
         *
         * @param modalMessage ModalMessage
         */
        setMessage(modalMessage: ModalMessage): void;
        /**
         * Sets the message for the modal and also shows it
         *
         * @param modalMessage ModalMessage
         */
        showMessage(modalMessage: ModalMessage): void;
        close(): void;
    }
}

declare module "UALJsDom" {
    import { Authenticator } from 'universal-authenticator-library';
    global {
        interface Window {
            tippy: (e: any, t: any, r: any | null) => void;
        }
    }
    type UserLoginCallback = (authenticator: Authenticator, accountName: string | undefined) => void;
    /**
     * UnisonDom responsible for creating the UI elements of the Authenticator
     */
    export class UALJsDom {
        private loginCallback;
        private containerElement;
        private buttonStyleOverride;
        private authenticators;
        private authStateString;
        private getAuthenticatorsView;
        private authenticatorModal;
        private downloadAuthenticatorView;
        private messageModalView;
        private accountInputModalView;
        /**
         * UnisonDom responsible for creating the UI elements of the Authenticator
         *
         * @param Authenticator[] Array of authenticators to show the user
         * @param HTMLElement Container element for all Authenticator UI elements
         * @param buttonStyleOverride Allows the user to override the default styles of the auth start button
         * @stylePrefix Allows the user to override the prefix of class and id elements to avoid style conflicts
         */
        constructor(loginCallback: UserLoginCallback, authenticators: Authenticator[], containerElement: HTMLElement, buttonStyleOverride?: string | boolean);
        /**
         * Generates and appends the UI to the dom; this is user called because the container
         * element may not be available at initialization
         */
        generateUIDom(): void;
        /**
         * Does a cyclical redraw of the authenticators so we can redraw on state change
         */
        private startRefreshAuthenticatorsTimeout;
        /**
         * Handles download clicks showing the individual authenticators download modal
         *
         * @param authenticator Authenticator for download representation
         */
        private onDownloadClick;
        /**
         * Calls reset on all authenticators, used when retrying authenticator initialization
         * when no active or authenticators are found for the current environment or all available
         * authenticators have errored out
         */
        private resetAuthenticators;
        private showGetAuthenticators;
        /**
         * Generates unique string for comparing authenticator states
         */
        private getAuthenticatorsStateString;
        /**
         * Cleans up existing authenticators and redraws them so we can
         * respond to authenticator state changes
         */
        private drawAuthenticatorsButtons;
        /**
         * Renders authenticators in the modal selection box
         *
         * @param authenticators Authenticators to render
         */
        protected renderAuthenticationSelections(authenticators: Authenticator[]): void;
        /**
         * Resets the ui to it's original state
         */
        reset(): void;
        /**
         * Login Method handling login UI status and errors
         *
         * @param authenticator Authenticator to login with
         * @param accountName Optional account name for login
         */
        private login;
        /**
         * Shows account name input for the provide authenticator
         */
        showAccountNameInput(authenticator: Authenticator): void;
        /**
         * Show Authenticator Selector view
         */
        private showAuthenticatorSelection;
        /**
         * Show Authenticator Selector view
         */
        private hideAuthenticatorSelection;
        /**
         * Generic message display modal for users.
         *
         * @param modalMessage Message to show
         */
        private showMessage;
        /**
         * Shows the authentication modal
         */
        showAuthModal(): void;
        /**
         * Adds login button watcher for displaying the auth modal
         */
        private attachLoginButtonWatcher;
        /**
         * Renders the Modal to contain auth continue buttons
         */
        createAuthenticatorModal(): HTMLElement;
        /**
         * Determines if the authenticator is ready for dapp interaction
         *
         * @param authenticator UAL Authenticator
         */
        private static authenticatorCanLogin;
        /**
         * Handles the click action of Authenticator buttons
         *
         * @param authenticators Authenticators
         */
        private onAuthButtonClickHandler;
        /**
         * Renders the Auth start button
         */
        createButton(): HTMLButtonElement;
        /**
         * Generates the CSS styles for the Auth start button
         *
         * @param css Optional css override for user provided button styles
         */
        createButtonStyles(css: string | boolean): HTMLStyleElement;
        /**
         * Generates the CSS styles for the Auth Modal
         */
        createAuthenticatorModalStyles(): HTMLStyleElement;
    }
}

declare module "UALJs" {
    import { Authenticator, Chain, UAL, User } from 'universal-authenticator-library';
    import { UALJsDom } from "UALJsDom";
    /**
     * Render configuration for the UAL renderer
     */
    export interface UALJsRenderConfig {
        containerElement: HTMLElement;
        buttonStyleOverride?: string;
    }
    /**
     * Plain JS implementation for UAL Interaction with UI
     */
    export class UALJs extends UAL {
        isAutologin: boolean;
        protected static SESSION_EXPIRATION_KEY: string;
        protected static SESSION_AUTHENTICATOR_KEY: string;
        protected static SESSION_ACCOUNT_NAME_KEY: string;
        protected static AUTHENTICATOR_LOADING_INTERVAL: number;
        protected userCallbackHandler: (users: User[]) => any;
        protected accountNameInputValue: string;
        protected dom?: UALJsDom;
        protected activeAuthenticator?: Authenticator;
        private renderConfig?;
        /**
         *
         * @param userCallbackHandler Called with the array of users after a successful authenticator selection
         * @param chains Array of Chains the application wants to support
         * @param appName Name of the application
         * @param authenticators List of authenticators this app supports
         * @param renderConfig Optional UI rendering configuration for environments not using login
         */
        constructor(userCallbackHandler: (users: User[]) => any, chains: Chain[], appName: string, authenticators: Authenticator[], renderConfig?: UALJsRenderConfig);
        /**
         * Initializes UAL: If a renderConfig was provided and no autologin authenticator
         * is returned it will render the Auth Button and relevant DOM elements.
         *
         */
        init(): void;
        /**
         * Attempts to resume a users session if they previously logged in
         *
         * @param authenticators Available authenticators for login
         */
        private attemptSessionLogin;
        /**
         * App developer can call this directly with the preferred authenticator or render a
         * UI to let the user select their authenticator
         *
         * @param authenticator Authenticator chosen for login
         * @param accountName Account name (optional) of the user logging in
         */
        loginUser(authenticator: Authenticator, accountName?: string): Promise<void>;
        private waitForAuthenticatorToLoad;
        /**
         * Clears the session data for the logged in user
         */
        logoutUser(): Promise<void>;
        private clearStorageKeys;
    }
}

declare module "index" {
    export { UALJs } from "UALJs";
}

declare module "AuthMocks/BaseMockAuthenticator" {
    import { Authenticator, ButtonStyle, User } from 'universal-authenticator-library';
    export class BaseMockAuthenticator extends Authenticator {
        init(): Promise<void>;
        login(): Promise<User[]>;
        getStyle(): ButtonStyle;
        getError(): any;
        getOnboardingLink(): string;
        isErrored(): boolean;
        isLoading(): boolean;
        reset(): void;
        shouldRender(): boolean;
        shouldAutoLogin(): boolean;
        shouldRequestAccountName(): Promise<boolean>;
        logout(): Promise<void>;
        requiresGetKeyConfirmation(): boolean;
        getName(): string;
    }
}

declare module "AuthMocks/AutologinAuthenticator" {
    import { BaseMockAuthenticator } from "AuthMocks/BaseMockAuthenticator";
    export class AutologinAuthenticator extends BaseMockAuthenticator {
        shouldAutoLogin(): boolean;
    }
}

declare module "AuthMocks/InvalidateAuthenticator" {
    import { BaseMockAuthenticator } from "AuthMocks/BaseMockAuthenticator";
    export class InvalidateAuthenticator extends BaseMockAuthenticator {
        shouldInvalidateAfter(): number;
    }
}
