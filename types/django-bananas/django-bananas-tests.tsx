import * as React from 'react';
import * as Bananas from 'django-bananas';
// tslint:disable-next-line
import { Content, AdminContext, PageData, TitleBar, Link, ToolBar } from 'django-bananas';
import { createColor } from 'django-bananas/colors';
import themes, { createBananasTheme } from 'django-bananas/themes';

const Logo = () => {
  return <svg></svg>;
};

const colors = {
  primary: createColor('#fff'),
  secondary: createColor("#000")
};

const theme = createBananasTheme({
  ...themes.default,
  palette: {
    ...themes.default.palette,
    primary: colors.primary,
    secondary: {
      main: colors.secondary,
    },
    background: {
      ...themes.default.palette.background,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: 'Roboto',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
  },
});

const Context = React.createContext({});

const CustomGlobalContext: React.FC = ({ children }) => {
  const ctx = {
    foo: "bar"
  };

  return <Context.Provider value={ctx}>{children}</Context.Provider>;
};

const App = () => {
  return (
    <Bananas.App
      prefix=''
      theme={theme}
      pages={route => import(route)}
      api={{
        url: "/api",
        requestInterceptor: (request) => {
          // Do something with request
          return request;
        },
        responseInterceptor: (response) => {
          // Do something with resposne
          return response;
        },
      }}
      logo={<Logo />}
      container={CustomGlobalContext}
      pageTheme={undefined}
    />
  );
};

const PageRead = (props: PageData<{}>) => {
  const { admin } = React.useContext(AdminContext);
  const { obj } = props;

  return (
    <>
      <TitleBar back=".." title="Foo" />
      <Content>
        <ToolBar>I'm a ToolBar</ToolBar>
        {JSON.stringify(obj)}
        <Link route="app:read"><a>Click me</a></Link>
        <button onClick={() => admin.success("You're awesome")}>
          Confidence boost
        </button>
      </Content>
    </>
  );
};
