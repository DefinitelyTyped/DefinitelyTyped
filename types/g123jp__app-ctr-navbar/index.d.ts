// Type definitions for @g123jp/app-ctr-navbar
// Project: https://www.npmjs.com/package/@g123jp/app-ctr-navbar
// Definitions by: Lemon <https://github.com/G123-jp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8


export interface G123NavigationSideBarProps {
    supportLanguages: string[];
    initialSelectedLanguage: string;
    showLogout?: boolean;
    currentAppId?: string;
    theme?: 'light' | 'dark';
    onLogout?: () => void;
    onSelectLanguage?: (language: string) => void;
}

export function renderComponent(props: G123NavigationSideBarProps): void;


declare global {
    namespace G123NavigationSideBar {
      export interface G123NavigationSideBarProps {
        supportLanguages: string[];
        initialSelectedLanguage: string;
        showLogout?: boolean;
        currentAppId?: string;
        theme?: 'light' | 'dark';
        onLogout?: () => void;
        onSelectLanguage?: (language: string) => void;
      }
  
      export function renderComponent(props: G123NavigationSideBarProps): void;
    }
}