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