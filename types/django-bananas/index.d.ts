// Project: https://github.com/5monkeys/django-bananas.js
// Definitions by: 5Monkeys Agency <https://github.com/5monkeys>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="react" />

declare module 'django-bananas' {
  type ErrorResponse<T> = Partial<Record<keyof T, string>>;
  interface PageData<T> {
    obj: T;
    body: T;
    headers: Record<string, string>;
    status: number;
    statusText: string;
    ok: boolean;
    url: string;
    text: string;
  }
  interface RouteData {
    hash?: string;
    id?: string;
    params?: Record<string, string | number>;
    path?: string;
    query?: Record<string, string>;
  }
  interface PageInterfaceBase {
    title: string;
    route: RouteData;
    referer?: string;
  }
  interface ListPageInterface<T> extends PageInterfaceBase {
    data: PageData<T[]>;
  }
  interface PageInterface<T> extends PageInterfaceBase {
    data: PageData<T>;
  }
  interface NavItem {
    title?: string;
    icon?: React.ReactNode;
  }
  interface NavAppItem {
    showSubheader?: boolean;
  }
  type ApiSetting =
    | string
    | {
        url: string;
        requestInterceptor?: (v: Request) => Request;
        responseInterceptor?: (v: Response) => Response;
      };
  interface AppProps {
    api: ApiSetting;
    theme: any;
    pageTheme?: any;
    debugLevel?: 'INFO' | 'DEBUG' | 'WARN' | 'ERROR' | 'OFF';
    prefix: string;
    pages(route: string): any;
    nav?: Record<string, NavItem | NavAppItem>;
    branding?: string;
    version?: string;
    logo?: React.ReactElement | string;
    title?: string;
    container?: React.ReactNode;
  }
  class App extends React.Component<AppProps, Record<never, never>> {}
  interface ContentProps {
    disablePadding?: boolean;
    contained?: boolean;
    className?: string;
  }
  class Content extends React.Component<ContentProps, Record<never, never>> {}
  interface TitleBarProps {
    className?: string;
    color?: 'primary' | 'secondary' | 'paper';
    back?: boolean | string;
    dense?: boolean;
    title?: string;
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  }
  const TitleBar: React.FC<TitleBarProps>;
  interface LinkProps {
    route?: string;
    params?: Record<string, string | number>;
    path?: string;
    query?: Record<string, string | number>;
    href?: string;
    children: React.ReactChild;
    patch?: boolean;
    passHref?: boolean;
  }
  const Link: React.FC<LinkProps>;
  interface ToolBarProps {
     className?: string;
  }
  const ToolBar: React.FC<ToolBarProps>;
  function t(string: string): any;
  interface UserInterface {
    id: number;
    email: string;
    username?: string;
    full_name: string;
    is_superuser: boolean;
    groups: string[];
    hasPermission(permission: string): boolean;
    permissions: string[];
  }
  interface AlertProps {
    title: string;
    message: string;
    agree: string;
    dismiss: string;
    onAgree(): any;
    onDismiss(): any;
  }
  interface AdminInterface {
    alert(message: string | AlertProps): void;
    confirm(message: string | AlertProps): void;
    dismissModal(): void;
    dismissMessages(): void;
    error(message: string): void;
    warning(message: string): void;
    success(message: string): void;
    info(message: string): void;
    loading(on: boolean): number;
    progress(on: boolean): number;
    login(username: string, password: string): Promise<UserInterface>;
    logout(): void;
    setTitle(title: string): void;
    settings(): any;
  }
  interface RouterInterface {
    route(
      to: string | RouteData,
      extra?: { rewrite?: boolean; patch?: boolean },
    ): { location: any; action: string };
    reroute(to: string | RouteData): { location: any; action: string };
  }
  interface AdminContext {
    admin: AdminInterface;
    router?: RouterInterface;
    api: any;
    user?: UserInterface;
  }
  const AdminContext: React.Context<AdminContext>;
  interface ApiResponse {
    statusText: string;
    status: number;
    obj: Record<string, never | never[]>;
  }
  interface ApiPromiseError {
    response: ApiResponse;
  }
  const Tools: React.FC;
}

declare module 'django-bananas/auth/PermissionRequired' {
  export interface PermissionRequiredProps {
    permission: string | string[];
    allMustMatch?: boolean;
  }
  const PermissionRequired: React.FC<PermissionRequiredProps>;
  export default PermissionRequired;
}

declare module 'django-bananas/themes' {
  export function createBananasTheme(theme: any): any;
  interface themes {
    light: any;
    dark: any;
    darth: any;
    default: any;
  }

  const themes: themes;

  export default themes;
}

declare module 'django-bananas/colors' {
  interface ColorPalette {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  function createColor(color: string): ColorPalette;
}
